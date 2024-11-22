import {
    a as tm
} from "./_oschunk-D2MH3QEK.js";
import {
    $ as nt,
    $a as Kt,
    $b as vr,
    $c as Xr,
    $d as jf,
    A as Bf,
    Aa as wt,
    Ab as dr,
    Ad as ia,
    Af as ro,
    B as Be,
    Ba as It,
    Bb as pr,
    Bd as ua,
    Be as Na,
    Bf as ao,
    C as _e,
    Ca as Pt,
    Cb as Xf,
    Cd as ca,
    Ce as Va,
    Cf as oo,
    D as ke,
    Da as Nt,
    Dc as zu,
    De as La,
    E as Ee,
    Ea as Vt,
    Eb as $f,
    Ec as Er,
    Ed as la,
    Ee as Ga,
    F as Fe,
    Fb as em,
    Ff as Zu,
    G as $e,
    Gb as fr,
    Gf as G,
    H as Ue,
    Ha as Lt,
    Hb as Uf,
    Hc as Fr,
    Hd as da,
    I as Me,
    Ic as $r,
    Id as zf,
    Ie as Ja,
    If as ee,
    J as qe,
    Jb as mr,
    Jc as Ur,
    Jd as pa,
    Je as Ba,
    Jf as so,
    K as He,
    Ka as Gt,
    Kb as yr,
    Kc as Mr,
    Kd as fa,
    Ke as _a,
    L as We,
    La as Jt,
    Lb as Tr,
    Lc as qr,
    M as ze,
    Ma as Bt,
    Md as ma,
    N as je,
    Na as Mu,
    Nb as Sr,
    Nc as Hr,
    Nd as ya,
    Ne as ka,
    Nf as no,
    O as Ke,
    Oa as _t,
    Ob as Dr,
    Oc as Wr,
    Od as Ta,
    Oe as Ea,
    Of as _,
    P as Ye,
    Pa as kt,
    Pf as P,
    Q as Ze,
    Qa as Ef,
    Qe as Fa,
    R as Qe,
    Ra as Et,
    Rc as zr,
    Rd as Sa,
    Re as $a,
    S as Xe,
    Sa as Ft,
    Sc as jr,
    Se as Ua,
    T as et,
    Ta as $t,
    Tc as Kr,
    Td as Da,
    U as tt,
    Ua as Ut,
    Ub as ye,
    Uc as Yr,
    V as rt,
    Va as Mt,
    W as K,
    Wa as qt,
    Wb as br,
    Wc as Zr,
    Wd as ba,
    We as Ma,
    X as at,
    Xa as Ht,
    Xb as gr,
    Xd as z,
    Xe as qa,
    Ya as Wt,
    Yb as Ar,
    Yd as ga,
    Z as ot,
    Za as zt,
    Zb as xr,
    Zc as qf,
    Zd as Aa,
    Ze as Ha,
    _ as st,
    _a as jt,
    _b as Or,
    _c as Qr,
    _d as B,
    aa as it,
    ab as Yt,
    ac as Rr,
    ad as ea,
    ae as Ku,
    b as be,
    ba as ut,
    bb as Zt,
    bc as Cr,
    bd as ju,
    bf as Wa,
    c as ge,
    ca as _f,
    cb as Z,
    cc as hr,
    ce as Yu,
    d as Ae,
    da as ct,
    db as Qt,
    de as xa,
    e as xe,
    ea as lt,
    eb as Xt,
    ec as wr,
    ee as Oa,
    f as Oe,
    fb as qu,
    fe as E,
    ff as za,
    gd as ta,
    ge as va,
    h as ve,
    ha as dt,
    hb as er,
    hc as Mf,
    hd as Q,
    i as Lf,
    ia as pt,
    ib as tr,
    id as ra,
    ie as Ra,
    j as Re,
    ja as ft,
    jb as rr,
    jc as Te,
    jd as aa,
    je as Ca,
    jf as ja,
    k as Ce,
    ka as mt,
    kb as ar,
    kc as Ir,
    kd as Hf,
    l as he,
    la as yt,
    lb as or,
    ld as oa,
    m as we,
    ma as Tt,
    mb as Hu,
    mc as Pr,
    me as ha,
    mf as Ka,
    n as Gf,
    na as St,
    nc as Nr,
    ne as wa,
    nf as Ya,
    o as Ie,
    oa as Dt,
    ob as sr,
    od as sa,
    p as Pe,
    pa as bt,
    pb as nr,
    pc as Wu,
    pd as W,
    pf as Za,
    q as Ne,
    qa as gt,
    qc as Vr,
    qd as na,
    qe as Ia,
    r as Ve,
    ra as At,
    rb as ir,
    rc as H,
    re as X,
    s as Le,
    sa as xt,
    t as Jf,
    ta as Ot,
    tb as Ff,
    tc as Se,
    tf as Qa,
    ua as vt,
    ub as ur,
    uc as Lr,
    ue as Kf,
    uf as Xa,
    va as Rt,
    vc as Gr,
    vf as eo,
    w as Ge,
    wa as Ct,
    wb as cr,
    wc as Jr,
    wf as to,
    xa as ht,
    xb as lr,
    xc as Br,
    xd as Wf,
    xe as Pa,
    y as q,
    ya as kf,
    yc as _r,
    z as Je,
    za as Y,
    zc as kr
} from "./_oschunk-HQOLQB4T.js";
import {
    ia as s,
    v as e
} from "./_oschunk-NTQBNJ73.js";
import {
    a as h,
    b as w,
    c as r
} from "./_oschunk-DVBKI63I.js";
var m = s,
    D, am = class am {
        constructor() {
            D = m.Injector.resolve(m.ServiceNames.ClientVariablesService)
        }
        getIsResetPasswordValid() {
            return D.getVariable("IsResetPasswordValid", "tradershub", m.DataTypes.DataTypes.Boolean)
        }
        setIsResetPasswordValid(a) {
            return D.setVariable("IsResetPasswordValid", "tradershub", m.DataTypes.DataTypes.Boolean, a)
        }
        getToken() {
            return D.getVariable("Token", "tradershub", m.DataTypes.DataTypes.Text)
        }
        setToken(a) {
            return D.setVariable("Token", "tradershub", m.DataTypes.DataTypes.Text, a)
        }
        getRealSignupFatcaDeclaration() {
            return D.getVariable("RealSignupFatcaDeclaration", "tradershub", m.DataTypes.DataTypes.Text, "0")
        }
        setRealSignupFatcaDeclaration(a) {
            return D.setVariable("RealSignupFatcaDeclaration", "tradershub", m.DataTypes.DataTypes.Text, a)
        }
        getCode() {
            return D.getVariable("Code", "tradershub", m.DataTypes.DataTypes.Text)
        }
        setCode(a) {
            return D.setVariable("Code", "tradershub", m.DataTypes.DataTypes.Text, a)
        }
        getFinancialExperience() {
            return D.getVariable("FinancialExperience", "tradershub", m.DataTypes.DataTypes.Text)
        }
        setFinancialExperience(a) {
            return D.setVariable("FinancialExperience", "tradershub", m.DataTypes.DataTypes.Text, a)
        }
        getCFDLeverage() {
            return D.getVariable("CFDLeverage", "tradershub", m.DataTypes.DataTypes.Text)
        }
        setCFDLeverage(a) {
            return D.setVariable("CFDLeverage", "tradershub", m.DataTypes.DataTypes.Text, a)
        }
        getRealSignupDateofBirth() {
            return D.getVariable("RealSignupDateofBirth", "tradershub", m.DataTypes.DataTypes.Text)
        }
        setRealSignupDateofBirth(a) {
            return D.setVariable("RealSignupDateofBirth", "tradershub", m.DataTypes.DataTypes.Text, a)
        }
        getLanguage() {
            return D.getVariable("Language", "tradershub", m.DataTypes.DataTypes.Text)
        }
        setLanguage(a) {
            return D.setVariable("Language", "tradershub", m.DataTypes.DataTypes.Text, a)
        }
        getFinancialAssessmentNetIncome() {
            return D.getVariable("FinancialAssessmentNetIncome", "tradershub", m.DataTypes.DataTypes.Text)
        }
        setFinancialAssessmentNetIncome(a) {
            return D.setVariable("FinancialAssessmentNetIncome", "tradershub", m.DataTypes.DataTypes.Text, a)
        }
        getFinancialAssessmentSourceOfWealth() {
            return D.getVariable("FinancialAssessmentSourceOfWealth", "tradershub", m.DataTypes.DataTypes.Text)
        }
        setFinancialAssessmentSourceOfWealth(a) {
            return D.setVariable("FinancialAssessmentSourceOfWealth", "tradershub", m.DataTypes.DataTypes.Text, a)
        }
        getRealSignupTaxResidence() {
            return D.getVariable("RealSignupTaxResidence", "tradershub", m.DataTypes.DataTypes.Text)
        }
        setRealSignupTaxResidence(a) {
            return D.setVariable("RealSignupTaxResidence", "tradershub", m.DataTypes.DataTypes.Text, a)
        }
        getRealSignupPassedStepCount() {
            return D.getVariable("RealSignupPassedStepCount", "tradershub", m.DataTypes.DataTypes.Integer)
        }
        setRealSignupPassedStepCount(a) {
            return D.setVariable("RealSignupPassedStepCount", "tradershub", m.DataTypes.DataTypes.Integer, a)
        }
        getFinancialAssessmentIncomeSource() {
            return D.getVariable("FinancialAssessmentIncomeSource", "tradershub", m.DataTypes.DataTypes.Text)
        }
        setFinancialAssessmentIncomeSource(a) {
            return D.setVariable("FinancialAssessmentIncomeSource", "tradershub", m.DataTypes.DataTypes.Text, a)
        }
        getRealSignupIsIDVSupported() {
            return D.getVariable("RealSignupIsIDVSupported", "tradershub", m.DataTypes.DataTypes.Boolean, !1)
        }
        setRealSignupIsIDVSupported(a) {
            return D.setVariable("RealSignupIsIDVSupported", "tradershub", m.DataTypes.DataTypes.Boolean, a)
        }
        getRealSignupAccountOpeningReason() {
            return D.getVariable("RealSignupAccountOpeningReason", "tradershub", m.DataTypes.DataTypes.Text)
        }
        setRealSignupAccountOpeningReason(a) {
            return D.setVariable("RealSignupAccountOpeningReason", "tradershub", m.DataTypes.DataTypes.Text, a)
        }
        getSelectedCurrencyCode() {
            return D.getVariable("SelectedCurrencyCode", "tradershub", m.DataTypes.DataTypes.Text)
        }
        setSelectedCurrencyCode(a) {
            return D.setVariable("SelectedCurrencyCode", "tradershub", m.DataTypes.DataTypes.Text, a)
        }
        getIsEuUser() {
            return D.getVariable("IsEuUser", "tradershub", m.DataTypes.DataTypes.Boolean)
        }
        setIsEuUser(a) {
            return D.setVariable("IsEuUser", "tradershub", m.DataTypes.DataTypes.Boolean, a)
        }
        getProductionHostName() {
            return D.getVariable("ProductionHostName", "tradershub", m.DataTypes.DataTypes.Text, "hub.deriv.com")
        }
        setProductionHostName(a) {
            return D.setVariable("ProductionHostName", "tradershub", m.DataTypes.DataTypes.Text, a)
        }
        getRawLandingCompanyResponse() {
            return D.getVariable("RawLandingCompanyResponse", "tradershub", m.DataTypes.DataTypes.Text)
        }
        setRawLandingCompanyResponse(a) {
            return D.setVariable("RawLandingCompanyResponse", "tradershub", m.DataTypes.DataTypes.Text, a)
        }
        getRealSignupEmployementStatus() {
            return D.getVariable("RealSignupEmployementStatus", "tradershub", m.DataTypes.DataTypes.Text)
        }
        setRealSignupEmployementStatus(a) {
            return D.setVariable("RealSignupEmployementStatus", "tradershub", m.DataTypes.DataTypes.Text, a)
        }
        getUserPhotoURL() {
            return D.getVariable("UserPhotoURL", "tradershub", m.DataTypes.DataTypes.Text)
        }
        setUserPhotoURL(a) {
            return D.setVariable("UserPhotoURL", "tradershub", m.DataTypes.DataTypes.Text, a)
        }
        getResetPasswordLinkExpired() {
            return D.getVariable("ResetPasswordLinkExpired", "tradershub", m.DataTypes.DataTypes.Boolean)
        }
        setResetPasswordLinkExpired(a) {
            return D.setVariable("ResetPasswordLinkExpired", "tradershub", m.DataTypes.DataTypes.Boolean, a)
        }
        getAppId() {
            return D.getVariable("AppId", "tradershub", m.DataTypes.DataTypes.Text, "61554")
        }
        setAppId(a) {
            return D.setVariable("AppId", "tradershub", m.DataTypes.DataTypes.Text, a)
        }
        getRealSignupAddress() {
            return D.getVariable("RealSignupAddress", "tradershub", m.DataTypes.DataTypes.Text)
        }
        setRealSignupAddress(a) {
            return D.setVariable("RealSignupAddress", "tradershub", m.DataTypes.DataTypes.Text, a)
        }
        getIsSpain() {
            return D.getVariable("IsSpain", "tradershub", m.DataTypes.DataTypes.Boolean)
        }
        setIsSpain(a) {
            return D.setVariable("IsSpain", "tradershub", m.DataTypes.DataTypes.Boolean, a)
        }
        getCFDAllow() {
            return D.getVariable("CFDAllow", "tradershub", m.DataTypes.DataTypes.Text)
        }
        setCFDAllow(a) {
            return D.setVariable("CFDAllow", "tradershub", m.DataTypes.DataTypes.Text, a)
        }
        getAccountType() {
            return D.getVariable("AccountType", "tradershub", m.DataTypes.DataTypes.Text, "real")
        }
        setAccountType(a) {
            return D.setVariable("AccountType", "tradershub", m.DataTypes.DataTypes.Text, a)
        }
        getLastURL() {
            return D.getVariable("LastURL", "tradershub", m.DataTypes.DataTypes.Text)
        }
        setLastURL(a) {
            return D.setVariable("LastURL", "tradershub", m.DataTypes.DataTypes.Text, a)
        }
        getTempClientCountry() {
            return D.getVariable("TempClientCountry", "tradershub", m.DataTypes.DataTypes.Text)
        }
        setTempClientCountry(a) {
            return D.setVariable("TempClientCountry", "tradershub", m.DataTypes.DataTypes.Text, a)
        }
        getWebsocketURL() {
            return D.getVariable("WebsocketURL", "tradershub", m.DataTypes.DataTypes.Text, "wss://green.derivws.com/websockets/v3?app_id=53503&l=EN&brand=deriv")
        }
        setWebsocketURL(a) {
            return D.setVariable("WebsocketURL", "tradershub", m.DataTypes.DataTypes.Text, a)
        }
        getCFDTradePastYear() {
            return D.getVariable("CFDTradePastYear", "tradershub", m.DataTypes.DataTypes.Text)
        }
        setCFDTradePastYear(a) {
            return D.setVariable("CFDTradePastYear", "tradershub", m.DataTypes.DataTypes.Text, a)
        }
        getRealSignupCurrentStep() {
            return D.getVariable("RealSignupCurrentStep", "tradershub", m.DataTypes.DataTypes.Integer, 1)
        }
        setRealSignupCurrentStep(a) {
            return D.setVariable("RealSignupCurrentStep", "tradershub", m.DataTypes.DataTypes.Integer, a)
        }
        getRiskManagement() {
            return D.getVariable("RiskManagement", "tradershub", m.DataTypes.DataTypes.Text)
        }
        setRiskManagement(a) {
            return D.setVariable("RiskManagement", "tradershub", m.DataTypes.DataTypes.Text, a)
        }
        getRealSignupFirstName() {
            return D.getVariable("RealSignupFirstName", "tradershub", m.DataTypes.DataTypes.Text)
        }
        setRealSignupFirstName(a) {
            return D.setVariable("RealSignupFirstName", "tradershub", m.DataTypes.DataTypes.Text, a)
        }
        getLinkedTo() {
            return D.getVariable("LinkedTo", "tradershub", m.DataTypes.DataTypes.Text)
        }
        setLinkedTo(a) {
            return D.setVariable("LinkedTo", "tradershub", m.DataTypes.DataTypes.Text, a)
        }
        getSalutation() {
            return D.getVariable("Salutation", "tradershub", m.DataTypes.DataTypes.Text)
        }
        setSalutation(a) {
            return D.setVariable("Salutation", "tradershub", m.DataTypes.DataTypes.Text, a)
        }
        getRawResidenceListResponse() {
            return D.getVariable("RawResidenceListResponse", "tradershub", m.DataTypes.DataTypes.Text, "")
        }
        setRawResidenceListResponse(a) {
            return D.setVariable("RawResidenceListResponse", "tradershub", m.DataTypes.DataTypes.Text, a)
        }
        getFinancialAssessmentEmploymentIndustry() {
            return D.getVariable("FinancialAssessmentEmploymentIndustry", "tradershub", m.DataTypes.DataTypes.Text)
        }
        setFinancialAssessmentEmploymentIndustry(a) {
            return D.setVariable("FinancialAssessmentEmploymentIndustry", "tradershub", m.DataTypes.DataTypes.Text, a)
        }
        getFinancialAssessmentEstimatedWorth() {
            return D.getVariable("FinancialAssessmentEstimatedWorth", "tradershub", m.DataTypes.DataTypes.Text)
        }
        setFinancialAssessmentEstimatedWorth(a) {
            return D.setVariable("FinancialAssessmentEstimatedWorth", "tradershub", m.DataTypes.DataTypes.Text, a)
        }
        getClientCountry() {
            return D.getVariable("ClientCountry", "tradershub", m.DataTypes.DataTypes.Text, "")
        }
        setClientCountry(a) {
            return D.setVariable("ClientCountry", "tradershub", m.DataTypes.DataTypes.Text, a)
        }
        getUserName() {
            return D.getVariable("UserName", "tradershub", m.DataTypes.DataTypes.Text, "John Doe")
        }
        setUserName(a) {
            return D.setVariable("UserName", "tradershub", m.DataTypes.DataTypes.Text, a)
        }
        getSignupEmail() {
            return D.getVariable("SignupEmail", "tradershub", m.DataTypes.DataTypes.Text, "test@gmail.com")
        }
        setSignupEmail(a) {
            return D.setVariable("SignupEmail", "tradershub", m.DataTypes.DataTypes.Text, a)
        }
        getDemoLoginId() {
            return D.getVariable("DemoLoginId", "tradershub", m.DataTypes.DataTypes.Text)
        }
        setDemoLoginId(a) {
            return D.setVariable("DemoLoginId", "tradershub", m.DataTypes.DataTypes.Text, a)
        }
        getAction() {
            return D.getVariable("Action", "tradershub", m.DataTypes.DataTypes.Text)
        }
        setAction(a) {
            return D.setVariable("Action", "tradershub", m.DataTypes.DataTypes.Text, a)
        }
        getRealSignupAddressState() {
            return D.getVariable("RealSignupAddressState", "tradershub", m.DataTypes.DataTypes.Text)
        }
        setRealSignupAddressState(a) {
            return D.setVariable("RealSignupAddressState", "tradershub", m.DataTypes.DataTypes.Text, a)
        }
        getDefaultWebsocketURL() {
            return D.getVariable("DefaultWebsocketURL", "tradershub", m.DataTypes.DataTypes.Text, "wss://green.derivws.com/websockets/v3?app_id=53503&l=EN&brand=deriv")
        }
        setDefaultWebsocketURL(a) {
            return D.setVariable("DefaultWebsocketURL", "tradershub", m.DataTypes.DataTypes.Text, a)
        }
        getRealSignupTaxResidenceLabel() {
            return D.getVariable("RealSignupTaxResidenceLabel", "tradershub", m.DataTypes.DataTypes.Text)
        }
        setRealSignupTaxResidenceLabel(a) {
            return D.setVariable("RealSignupTaxResidenceLabel", "tradershub", m.DataTypes.DataTypes.Text, a)
        }
        getURL() {
            return D.getVariable("URL", "tradershub", m.DataTypes.DataTypes.Text, "green.derivws.com")
        }
        setURL(a) {
            return D.setVariable("URL", "tradershub", m.DataTypes.DataTypes.Text, a)
        }
        getCFDTradingExperience() {
            return D.getVariable("CFDTradingExperience", "tradershub", m.DataTypes.DataTypes.Text)
        }
        setCFDTradingExperience(a) {
            return D.setVariable("CFDTradingExperience", "tradershub", m.DataTypes.DataTypes.Text, a)
        }
        getRealSignupIDVAdditionalDocumentNumberLabel() {
            return D.getVariable("RealSignupIDVAdditionalDocumentNumberLabel", "tradershub", m.DataTypes.DataTypes.Text)
        }
        setRealSignupIDVAdditionalDocumentNumberLabel(a) {
            return D.setVariable("RealSignupIDVAdditionalDocumentNumberLabel", "tradershub", m.DataTypes.DataTypes.Text, a)
        }
        getPotentialLost() {
            return D.getVariable("PotentialLost", "tradershub", m.DataTypes.DataTypes.Text)
        }
        setPotentialLost(a) {
            return D.setVariable("PotentialLost", "tradershub", m.DataTypes.DataTypes.Text, a)
        }
        gettrading_platform_mt5_password_reset() {
            return D.getVariable("trading_platform_mt5_password_reset", "tradershub", m.DataTypes.DataTypes.Text)
        }
        settrading_platform_mt5_password_reset(a) {
            return D.setVariable("trading_platform_mt5_password_reset", "tradershub", m.DataTypes.DataTypes.Text, a)
        }
        getRawWebsiteStatusResponse() {
            return D.getVariable("RawWebsiteStatusResponse", "tradershub", m.DataTypes.DataTypes.Text, "")
        }
        setRawWebsiteStatusResponse(a) {
            return D.setVariable("RawWebsiteStatusResponse", "tradershub", m.DataTypes.DataTypes.Text, a)
        }
        getSelectedResidence() {
            return D.getVariable("SelectedResidence", "tradershub", m.DataTypes.DataTypes.Text)
        }
        setSelectedResidence(a) {
            return D.setVariable("SelectedResidence", "tradershub", m.DataTypes.DataTypes.Text, a)
        }
        getKnowledgeAnExperience() {
            return D.getVariable("KnowledgeAnExperience", "tradershub", m.DataTypes.DataTypes.Text)
        }
        setKnowledgeAnExperience(a) {
            return D.setVariable("KnowledgeAnExperience", "tradershub", m.DataTypes.DataTypes.Text, a)
        }
        getSelectedCitizenship() {
            return D.getVariable("SelectedCitizenship", "tradershub", m.DataTypes.DataTypes.Text)
        }
        setSelectedCitizenship(a) {
            return D.setVariable("SelectedCitizenship", "tradershub", m.DataTypes.DataTypes.Text, a)
        }
        getRealSignupAddressTown() {
            return D.getVariable("RealSignupAddressTown", "tradershub", m.DataTypes.DataTypes.Text)
        }
        setRealSignupAddressTown(a) {
            return D.setVariable("RealSignupAddressTown", "tradershub", m.DataTypes.DataTypes.Text, a)
        }
        getRealSignupIDVDocumentNumber() {
            return D.getVariable("RealSignupIDVDocumentNumber", "tradershub", m.DataTypes.DataTypes.Text)
        }
        setRealSignupIDVDocumentNumber(a) {
            return D.setVariable("RealSignupIDVDocumentNumber", "tradershub", m.DataTypes.DataTypes.Text, a)
        }
        getConfirmedNotResident() {
            return D.getVariable("ConfirmedNotResident", "tradershub", m.DataTypes.DataTypes.Boolean)
        }
        setConfirmedNotResident(a) {
            return D.setVariable("ConfirmedNotResident", "tradershub", m.DataTypes.DataTypes.Boolean, a)
        }
        getStagingHostName() {
            return D.getVariable("StagingHostName", "tradershub", m.DataTypes.DataTypes.Text, "staging-hub.deriv.com")
        }
        setStagingHostName(a) {
            return D.setVariable("StagingHostName", "tradershub", m.DataTypes.DataTypes.Text, a)
        }
        getLang() {
            return D.getVariable("Lang", "tradershub", m.DataTypes.DataTypes.Text, "EN")
        }
        setLang(a) {
            return D.setVariable("Lang", "tradershub", m.DataTypes.DataTypes.Text, a)
        }
        getActiveLoginId() {
            return D.getVariable("ActiveLoginId", "tradershub", m.DataTypes.DataTypes.Text)
        }
        setActiveLoginId(a) {
            return D.setVariable("ActiveLoginId", "tradershub", m.DataTypes.DataTypes.Text, a)
        }
        getClientCountryText() {
            return D.getVariable("ClientCountryText", "tradershub", m.DataTypes.DataTypes.Text, "")
        }
        setClientCountryText(a) {
            return D.setVariable("ClientCountryText", "tradershub", m.DataTypes.DataTypes.Text, a)
        }
        getRealSignupPlaceOfBirth() {
            return D.getVariable("RealSignupPlaceOfBirth", "tradershub", m.DataTypes.DataTypes.Text)
        }
        setRealSignupPlaceOfBirth(a) {
            return D.setVariable("RealSignupPlaceOfBirth", "tradershub", m.DataTypes.DataTypes.Text, a)
        }
        getRealSignupAddressPostCode() {
            return D.getVariable("RealSignupAddressPostCode", "tradershub", m.DataTypes.DataTypes.Text)
        }
        setRealSignupAddressPostCode(a) {
            return D.setVariable("RealSignupAddressPostCode", "tradershub", m.DataTypes.DataTypes.Text, a)
        }
        getClientCurrency() {
            return D.getVariable("ClientCurrency", "tradershub", m.DataTypes.DataTypes.Text)
        }
        setClientCurrency(a) {
            return D.setVariable("ClientCurrency", "tradershub", m.DataTypes.DataTypes.Text, a)
        }
        getCreatedCFDAccounts() {
            return D.getVariable("CreatedCFDAccounts", "tradershub", m.DataTypes.DataTypes.Text)
        }
        setCreatedCFDAccounts(a) {
            return D.setVariable("CreatedCFDAccounts", "tradershub", m.DataTypes.DataTypes.Text, a)
        }
        getAuthToken() {
            return D.getVariable("AuthToken", "tradershub", m.DataTypes.DataTypes.Text, "")
        }
        setAuthToken(a) {
            return D.setVariable("AuthToken", "tradershub", m.DataTypes.DataTypes.Text, a)
        }
        getRealSignupAddressStateLabel() {
            return D.getVariable("RealSignupAddressStateLabel", "tradershub", m.DataTypes.DataTypes.Text)
        }
        setRealSignupAddressStateLabel(a) {
            return D.setVariable("RealSignupAddressStateLabel", "tradershub", m.DataTypes.DataTypes.Text, a)
        }
        getSelectedResidenceLabel() {
            return D.getVariable("SelectedResidenceLabel", "tradershub", m.DataTypes.DataTypes.Text)
        }
        setSelectedResidenceLabel(a) {
            return D.setVariable("SelectedResidenceLabel", "tradershub", m.DataTypes.DataTypes.Text, a)
        }
        getFinancialAssessmentOccupation() {
            return D.getVariable("FinancialAssessmentOccupation", "tradershub", m.DataTypes.DataTypes.Text)
        }
        setFinancialAssessmentOccupation(a) {
            return D.setVariable("FinancialAssessmentOccupation", "tradershub", m.DataTypes.DataTypes.Text, a)
        }
        getRealSignupStateList() {
            return D.getVariable("RealSignupStateList", "tradershub", m.DataTypes.DataTypes.Text)
        }
        setRealSignupStateList(a) {
            return D.setVariable("RealSignupStateList", "tradershub", m.DataTypes.DataTypes.Text, a)
        }
        gettrading_platform_investor_password_reset() {
            return D.getVariable("trading_platform_investor_password_reset", "tradershub", m.DataTypes.DataTypes.Text)
        }
        settrading_platform_investor_password_reset(a) {
            return D.setVariable("trading_platform_investor_password_reset", "tradershub", m.DataTypes.DataTypes.Text, a)
        }
        getRealSignupTIDNumber() {
            return D.getVariable("RealSignupTIDNumber", "tradershub", m.DataTypes.DataTypes.Text)
        }
        setRealSignupTIDNumber(a) {
            return D.setVariable("RealSignupTIDNumber", "tradershub", m.DataTypes.DataTypes.Text, a)
        }
        getInitialMargin() {
            return D.getVariable("InitialMargin", "tradershub", m.DataTypes.DataTypes.Text)
        }
        setInitialMargin(a) {
            return D.setVariable("InitialMargin", "tradershub", m.DataTypes.DataTypes.Text, a)
        }
        getActiveWallet() {
            return D.getVariable("ActiveWallet", "tradershub", m.DataTypes.DataTypes.Text)
        }
        setActiveWallet(a) {
            return D.setVariable("ActiveWallet", "tradershub", m.DataTypes.DataTypes.Text, a)
        }
        gettrading_platform_dxtrade_password_reset() {
            return D.getVariable("trading_platform_dxtrade_password_reset", "tradershub", m.DataTypes.DataTypes.Text)
        }
        settrading_platform_dxtrade_password_reset(a) {
            return D.setVariable("trading_platform_dxtrade_password_reset", "tradershub", m.DataTypes.DataTypes.Text, a)
        }
        getRealSignupTaxIDConfirmation() {
            return D.getVariable("RealSignupTaxIDConfirmation", "tradershub", m.DataTypes.DataTypes.Boolean, !1)
        }
        setRealSignupTaxIDConfirmation(a) {
            return D.setVariable("RealSignupTaxIDConfirmation", "tradershub", m.DataTypes.DataTypes.Boolean, a)
        }
        getRealSignupNoTaxInformation() {
            return D.getVariable("RealSignupNoTaxInformation", "tradershub", m.DataTypes.DataTypes.Boolean)
        }
        setRealSignupNoTaxInformation(a) {
            return D.setVariable("RealSignupNoTaxInformation", "tradershub", m.DataTypes.DataTypes.Boolean, a)
        }
        getRealSignupLastName() {
            return D.getVariable("RealSignupLastName", "tradershub", m.DataTypes.DataTypes.Text)
        }
        setRealSignupLastName(a) {
            return D.setVariable("RealSignupLastName", "tradershub", m.DataTypes.DataTypes.Text, a)
        }
        getResetPasswordEmailSent() {
            return D.getVariable("ResetPasswordEmailSent", "tradershub", m.DataTypes.DataTypes.Boolean, !1)
        }
        setResetPasswordEmailSent(a) {
            return D.setVariable("ResetPasswordEmailSent", "tradershub", m.DataTypes.DataTypes.Boolean, a)
        }
        getRealSignupPhone() {
            return D.getVariable("RealSignupPhone", "tradershub", m.DataTypes.DataTypes.Text)
        }
        setRealSignupPhone(a) {
            return D.setVariable("RealSignupPhone", "tradershub", m.DataTypes.DataTypes.Text, a)
        }
        getFinancialAssessmentEducationLevel() {
            return D.getVariable("FinancialAssessmentEducationLevel", "tradershub", m.DataTypes.DataTypes.Text)
        }
        setFinancialAssessmentEducationLevel(a) {
            return D.setVariable("FinancialAssessmentEducationLevel", "tradershub", m.DataTypes.DataTypes.Text, a)
        }
        getFinancialAssessmentAccountTurnover() {
            return D.getVariable("FinancialAssessmentAccountTurnover", "tradershub", m.DataTypes.DataTypes.Text)
        }
        setFinancialAssessmentAccountTurnover(a) {
            return D.setVariable("FinancialAssessmentAccountTurnover", "tradershub", m.DataTypes.DataTypes.Text, a)
        }
        getRealSignupSkippedIDV() {
            return D.getVariable("RealSignupSkippedIDV", "tradershub", m.DataTypes.DataTypes.Boolean)
        }
        setRealSignupSkippedIDV(a) {
            return D.setVariable("RealSignupSkippedIDV", "tradershub", m.DataTypes.DataTypes.Boolean, a)
        }
        getFinancialTradePastYear() {
            return D.getVariable("FinancialTradePastYear", "tradershub", m.DataTypes.DataTypes.Text)
        }
        setFinancialTradePastYear(a) {
            return D.setVariable("FinancialTradePastYear", "tradershub", m.DataTypes.DataTypes.Text, a)
        }
        getInitializeRealSignup() {
            return D.getVariable("InitializeRealSignup", "tradershub", m.DataTypes.DataTypes.Boolean)
        }
        setInitializeRealSignup(a) {
            return D.setVariable("InitializeRealSignup", "tradershub", m.DataTypes.DataTypes.Boolean, a)
        }
        getRealSignupIDVDocumentName() {
            return D.getVariable("RealSignupIDVDocumentName", "tradershub", m.DataTypes.DataTypes.Text)
        }
        setRealSignupIDVDocumentName(a) {
            return D.setVariable("RealSignupIDVDocumentName", "tradershub", m.DataTypes.DataTypes.Text, a)
        }
        getRealSignupIDVAdditionalDocumentNumber() {
            return D.getVariable("RealSignupIDVAdditionalDocumentNumber", "tradershub", m.DataTypes.DataTypes.Text)
        }
        setRealSignupIDVAdditionalDocumentNumber(a) {
            return D.setVariable("RealSignupIDVAdditionalDocumentNumber", "tradershub", m.DataTypes.DataTypes.Text, a)
        }
        serialize() {
            return {
                IsResetPasswordValid: m.DataConversion.ServerDataConverter.to(this.getIsResetPasswordValid(), m.DataTypes.DataTypes.Boolean),
                Token: m.DataConversion.ServerDataConverter.to(this.getToken(), m.DataTypes.DataTypes.Text),
                RealSignupFatcaDeclaration: m.DataConversion.ServerDataConverter.to(this.getRealSignupFatcaDeclaration(), m.DataTypes.DataTypes.Text),
                Code: m.DataConversion.ServerDataConverter.to(this.getCode(), m.DataTypes.DataTypes.Text),
                FinancialExperience: m.DataConversion.ServerDataConverter.to(this.getFinancialExperience(), m.DataTypes.DataTypes.Text),
                CFDLeverage: m.DataConversion.ServerDataConverter.to(this.getCFDLeverage(), m.DataTypes.DataTypes.Text),
                RealSignupDateofBirth: m.DataConversion.ServerDataConverter.to(this.getRealSignupDateofBirth(), m.DataTypes.DataTypes.Text),
                Language: m.DataConversion.ServerDataConverter.to(this.getLanguage(), m.DataTypes.DataTypes.Text),
                FinancialAssessmentNetIncome: m.DataConversion.ServerDataConverter.to(this.getFinancialAssessmentNetIncome(), m.DataTypes.DataTypes.Text),
                FinancialAssessmentSourceOfWealth: m.DataConversion.ServerDataConverter.to(this.getFinancialAssessmentSourceOfWealth(), m.DataTypes.DataTypes.Text),
                RealSignupTaxResidence: m.DataConversion.ServerDataConverter.to(this.getRealSignupTaxResidence(), m.DataTypes.DataTypes.Text),
                RealSignupPassedStepCount: m.DataConversion.ServerDataConverter.to(this.getRealSignupPassedStepCount(), m.DataTypes.DataTypes.Integer),
                FinancialAssessmentIncomeSource: m.DataConversion.ServerDataConverter.to(this.getFinancialAssessmentIncomeSource(), m.DataTypes.DataTypes.Text),
                RealSignupIsIDVSupported: m.DataConversion.ServerDataConverter.to(this.getRealSignupIsIDVSupported(), m.DataTypes.DataTypes.Boolean),
                RealSignupAccountOpeningReason: m.DataConversion.ServerDataConverter.to(this.getRealSignupAccountOpeningReason(), m.DataTypes.DataTypes.Text),
                SelectedCurrencyCode: m.DataConversion.ServerDataConverter.to(this.getSelectedCurrencyCode(), m.DataTypes.DataTypes.Text),
                IsEuUser: m.DataConversion.ServerDataConverter.to(this.getIsEuUser(), m.DataTypes.DataTypes.Boolean),
                ProductionHostName: m.DataConversion.ServerDataConverter.to(this.getProductionHostName(), m.DataTypes.DataTypes.Text),
                RawLandingCompanyResponse: m.DataConversion.ServerDataConverter.to(this.getRawLandingCompanyResponse(), m.DataTypes.DataTypes.Text),
                RealSignupEmployementStatus: m.DataConversion.ServerDataConverter.to(this.getRealSignupEmployementStatus(), m.DataTypes.DataTypes.Text),
                UserPhotoURL: m.DataConversion.ServerDataConverter.to(this.getUserPhotoURL(), m.DataTypes.DataTypes.Text),
                ResetPasswordLinkExpired: m.DataConversion.ServerDataConverter.to(this.getResetPasswordLinkExpired(), m.DataTypes.DataTypes.Boolean),
                AppId: m.DataConversion.ServerDataConverter.to(this.getAppId(), m.DataTypes.DataTypes.Text),
                RealSignupAddress: m.DataConversion.ServerDataConverter.to(this.getRealSignupAddress(), m.DataTypes.DataTypes.Text),
                IsSpain: m.DataConversion.ServerDataConverter.to(this.getIsSpain(), m.DataTypes.DataTypes.Boolean),
                CFDAllow: m.DataConversion.ServerDataConverter.to(this.getCFDAllow(), m.DataTypes.DataTypes.Text),
                AccountType: m.DataConversion.ServerDataConverter.to(this.getAccountType(), m.DataTypes.DataTypes.Text),
                LastURL: m.DataConversion.ServerDataConverter.to(this.getLastURL(), m.DataTypes.DataTypes.Text),
                TempClientCountry: m.DataConversion.ServerDataConverter.to(this.getTempClientCountry(), m.DataTypes.DataTypes.Text),
                WebsocketURL: m.DataConversion.ServerDataConverter.to(this.getWebsocketURL(), m.DataTypes.DataTypes.Text),
                CFDTradePastYear: m.DataConversion.ServerDataConverter.to(this.getCFDTradePastYear(), m.DataTypes.DataTypes.Text),
                RealSignupCurrentStep: m.DataConversion.ServerDataConverter.to(this.getRealSignupCurrentStep(), m.DataTypes.DataTypes.Integer),
                RiskManagement: m.DataConversion.ServerDataConverter.to(this.getRiskManagement(), m.DataTypes.DataTypes.Text),
                RealSignupFirstName: m.DataConversion.ServerDataConverter.to(this.getRealSignupFirstName(), m.DataTypes.DataTypes.Text),
                LinkedTo: m.DataConversion.ServerDataConverter.to(this.getLinkedTo(), m.DataTypes.DataTypes.Text),
                Salutation: m.DataConversion.ServerDataConverter.to(this.getSalutation(), m.DataTypes.DataTypes.Text),
                RawResidenceListResponse: m.DataConversion.ServerDataConverter.to(this.getRawResidenceListResponse(), m.DataTypes.DataTypes.Text),
                FinancialAssessmentEmploymentIndustry: m.DataConversion.ServerDataConverter.to(this.getFinancialAssessmentEmploymentIndustry(), m.DataTypes.DataTypes.Text),
                FinancialAssessmentEstimatedWorth: m.DataConversion.ServerDataConverter.to(this.getFinancialAssessmentEstimatedWorth(), m.DataTypes.DataTypes.Text),
                ClientCountry: m.DataConversion.ServerDataConverter.to(this.getClientCountry(), m.DataTypes.DataTypes.Text),
                UserName: m.DataConversion.ServerDataConverter.to(this.getUserName(), m.DataTypes.DataTypes.Text),
                SignupEmail: m.DataConversion.ServerDataConverter.to(this.getSignupEmail(), m.DataTypes.DataTypes.Text),
                DemoLoginId: m.DataConversion.ServerDataConverter.to(this.getDemoLoginId(), m.DataTypes.DataTypes.Text),
                Action: m.DataConversion.ServerDataConverter.to(this.getAction(), m.DataTypes.DataTypes.Text),
                RealSignupAddressState: m.DataConversion.ServerDataConverter.to(this.getRealSignupAddressState(), m.DataTypes.DataTypes.Text),
                DefaultWebsocketURL: m.DataConversion.ServerDataConverter.to(this.getDefaultWebsocketURL(), m.DataTypes.DataTypes.Text),
                RealSignupTaxResidenceLabel: m.DataConversion.ServerDataConverter.to(this.getRealSignupTaxResidenceLabel(), m.DataTypes.DataTypes.Text),
                URL: m.DataConversion.ServerDataConverter.to(this.getURL(), m.DataTypes.DataTypes.Text),
                CFDTradingExperience: m.DataConversion.ServerDataConverter.to(this.getCFDTradingExperience(), m.DataTypes.DataTypes.Text),
                RealSignupIDVAdditionalDocumentNumberLabel: m.DataConversion.ServerDataConverter.to(this.getRealSignupIDVAdditionalDocumentNumberLabel(), m.DataTypes.DataTypes.Text),
                PotentialLost: m.DataConversion.ServerDataConverter.to(this.getPotentialLost(), m.DataTypes.DataTypes.Text),
                trading_platform_mt5_password_reset: m.DataConversion.ServerDataConverter.to(this.gettrading_platform_mt5_password_reset(), m.DataTypes.DataTypes.Text),
                RawWebsiteStatusResponse: m.DataConversion.ServerDataConverter.to(this.getRawWebsiteStatusResponse(), m.DataTypes.DataTypes.Text),
                SelectedResidence: m.DataConversion.ServerDataConverter.to(this.getSelectedResidence(), m.DataTypes.DataTypes.Text),
                KnowledgeAnExperience: m.DataConversion.ServerDataConverter.to(this.getKnowledgeAnExperience(), m.DataTypes.DataTypes.Text),
                SelectedCitizenship: m.DataConversion.ServerDataConverter.to(this.getSelectedCitizenship(), m.DataTypes.DataTypes.Text),
                RealSignupAddressTown: m.DataConversion.ServerDataConverter.to(this.getRealSignupAddressTown(), m.DataTypes.DataTypes.Text),
                RealSignupIDVDocumentNumber: m.DataConversion.ServerDataConverter.to(this.getRealSignupIDVDocumentNumber(), m.DataTypes.DataTypes.Text),
                ConfirmedNotResident: m.DataConversion.ServerDataConverter.to(this.getConfirmedNotResident(), m.DataTypes.DataTypes.Boolean),
                StagingHostName: m.DataConversion.ServerDataConverter.to(this.getStagingHostName(), m.DataTypes.DataTypes.Text),
                Lang: m.DataConversion.ServerDataConverter.to(this.getLang(), m.DataTypes.DataTypes.Text),
                ActiveLoginId: m.DataConversion.ServerDataConverter.to(this.getActiveLoginId(), m.DataTypes.DataTypes.Text),
                ClientCountryText: m.DataConversion.ServerDataConverter.to(this.getClientCountryText(), m.DataTypes.DataTypes.Text),
                RealSignupPlaceOfBirth: m.DataConversion.ServerDataConverter.to(this.getRealSignupPlaceOfBirth(), m.DataTypes.DataTypes.Text),
                RealSignupAddressPostCode: m.DataConversion.ServerDataConverter.to(this.getRealSignupAddressPostCode(), m.DataTypes.DataTypes.Text),
                ClientCurrency: m.DataConversion.ServerDataConverter.to(this.getClientCurrency(), m.DataTypes.DataTypes.Text),
                CreatedCFDAccounts: m.DataConversion.ServerDataConverter.to(this.getCreatedCFDAccounts(), m.DataTypes.DataTypes.Text),
                AuthToken: m.DataConversion.ServerDataConverter.to(this.getAuthToken(), m.DataTypes.DataTypes.Text),
                RealSignupAddressStateLabel: m.DataConversion.ServerDataConverter.to(this.getRealSignupAddressStateLabel(), m.DataTypes.DataTypes.Text),
                SelectedResidenceLabel: m.DataConversion.ServerDataConverter.to(this.getSelectedResidenceLabel(), m.DataTypes.DataTypes.Text),
                FinancialAssessmentOccupation: m.DataConversion.ServerDataConverter.to(this.getFinancialAssessmentOccupation(), m.DataTypes.DataTypes.Text),
                RealSignupStateList: m.DataConversion.ServerDataConverter.to(this.getRealSignupStateList(), m.DataTypes.DataTypes.Text),
                trading_platform_investor_password_reset: m.DataConversion.ServerDataConverter.to(this.gettrading_platform_investor_password_reset(), m.DataTypes.DataTypes.Text),
                RealSignupTIDNumber: m.DataConversion.ServerDataConverter.to(this.getRealSignupTIDNumber(), m.DataTypes.DataTypes.Text),
                InitialMargin: m.DataConversion.ServerDataConverter.to(this.getInitialMargin(), m.DataTypes.DataTypes.Text),
                ActiveWallet: m.DataConversion.ServerDataConverter.to(this.getActiveWallet(), m.DataTypes.DataTypes.Text),
                trading_platform_dxtrade_password_reset: m.DataConversion.ServerDataConverter.to(this.gettrading_platform_dxtrade_password_reset(), m.DataTypes.DataTypes.Text),
                RealSignupTaxIDConfirmation: m.DataConversion.ServerDataConverter.to(this.getRealSignupTaxIDConfirmation(), m.DataTypes.DataTypes.Boolean),
                RealSignupNoTaxInformation: m.DataConversion.ServerDataConverter.to(this.getRealSignupNoTaxInformation(), m.DataTypes.DataTypes.Boolean),
                RealSignupLastName: m.DataConversion.ServerDataConverter.to(this.getRealSignupLastName(), m.DataTypes.DataTypes.Text),
                ResetPasswordEmailSent: m.DataConversion.ServerDataConverter.to(this.getResetPasswordEmailSent(), m.DataTypes.DataTypes.Boolean),
                RealSignupPhone: m.DataConversion.ServerDataConverter.to(this.getRealSignupPhone(), m.DataTypes.DataTypes.Text),
                FinancialAssessmentEducationLevel: m.DataConversion.ServerDataConverter.to(this.getFinancialAssessmentEducationLevel(), m.DataTypes.DataTypes.Text),
                FinancialAssessmentAccountTurnover: m.DataConversion.ServerDataConverter.to(this.getFinancialAssessmentAccountTurnover(), m.DataTypes.DataTypes.Text),
                RealSignupSkippedIDV: m.DataConversion.ServerDataConverter.to(this.getRealSignupSkippedIDV(), m.DataTypes.DataTypes.Boolean),
                FinancialTradePastYear: m.DataConversion.ServerDataConverter.to(this.getFinancialTradePastYear(), m.DataTypes.DataTypes.Text),
                InitializeRealSignup: m.DataConversion.ServerDataConverter.to(this.getInitializeRealSignup(), m.DataTypes.DataTypes.Boolean),
                RealSignupIDVDocumentName: m.DataConversion.ServerDataConverter.to(this.getRealSignupIDVDocumentName(), m.DataTypes.DataTypes.Text),
                RealSignupIDVAdditionalDocumentNumber: m.DataConversion.ServerDataConverter.to(this.getRealSignupIDVAdditionalDocumentNumber(), m.DataTypes.DataTypes.Text)
            }
        }
    };
r(am, "ClientVariables");
var rm = am,
    g = new rm;
var Qu = {
    staticEntities: {}
};
Qu.staticEntities.consoleErrorType = {};
Object.defineProperty(Qu.staticEntities.consoleErrorType, "error", {
    get: r(function() {
        return 2
    }, "get")
});
Object.defineProperty(Qu.staticEntities.consoleErrorType, "warning", {
    get: r(function() {
        return 1
    }, "get")
});
Object.defineProperty(Qu.staticEntities.consoleErrorType, "information", {
    get: r(function() {
        return 0
    }, "get")
});
var me = Qu.staticEntities;
var Xu = class Xu extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("ConsoleErrorType", "consoleErrorTypeAttr", "ConsoleErrorType", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new z)
        }, !0, z)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Xu(new Xu.RecordClass({
            consoleErrorTypeAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "5e259c61-591c-7234-3b58-87d8b4ce62b5"
    }
};
r(Xu, "RC_5e259c61591c72343b5887d8b4ce62b5");
var io = Xu;
io.init();
var sm = class sm extends e.GenericRecordList {
    static getItemType() {
        return io
    }
};
r(sm, "RL_422c5cc1eb56f188f2e407af881395ae");
var om = sm;
var im = class im extends e.GenericRecordList {
    static getItemType() {
        return z
    }
};
r(im, "RL_9cb00801b4a261afbddde8f0eaaf25f3");
var nm = im;

function um(o, a, n, p) {
    console.error(o.Message)
}
r(um, "default");

function cm(o, a, n, p) {
    console.warn(o.Message)
}
r(cm, "default");

function lm(o, a, n, p) {
    console.log(o.Message)
}
r(lm, "default");

function dm(o, a, n, p) {
    console.warn(o.Message, JSON.parse(o.JSON))
}
r(dm, "default");

function pm(o, a, n, p) {
    console.error(o.Message, JSON.parse(o.JSON))
}
r(pm, "default");

function fm(o, a, n, p) {
    console.log(o.Message, JSON.parse(o.JSON))
}
r(fm, "default");
var C = s,
    ym = class ym extends C.Controller.BaseModuleController {
        constructor(a, n, p, i) {
            super(a, n, p, i)
        }
        get clientActionProxies() {
            return this.hasOwnProperty("_clientActionProxies") || (this._clientActionProxies = {}), this._clientActionProxies
        }
        set clientActionProxies(a) {
            this._clientActionProxies = a
        }
        get roles() {
            return this.hasOwnProperty("_roles") || (this._roles = {}), this._roles
        }
        set roles(a) {
            this._roles = a
        }
        get defaultTimeout() {
            return this.hasOwnProperty("_defaultTimeout") || (this._defaultTimeout = 10), this._defaultTimeout
        }
        set defaultTimeout(a) {
            this._defaultTimeout = a
        }
        getDefaultTimeout() {
            return this.defaultTimeout
        }
    };
r(ym, "Controller");
var mm = ym,
    j = new mm,
    k = j;
j.consoleLog$Action = function(o, a, n) {
    return C.Logger.startActiveSpan("ConsoleLog", function(p) {
        p && (p.setAttribute("code.function", "ConsoleLog"), p.setAttribute("outsystems.function.key", "e2f8b8a5-ee74-4626-a173-bbe216185bcf"), p.setAttribute("outsystems.function.owner.name", "BrowserConsoleLogging"), p.setAttribute("outsystems.function.owner.key", "7f7c3cd2-279d-4fb8-b978-c1ee91ff0d4f"), p.setAttribute("outsystems.function.type", "CLIENT_ACTION"));
        try {
            n = k.callContext(n);
            var i = new C.DataTypes.VariableHolder(new(k.constructor.getVariableGroupType("BrowserConsoleLogging.ConsoleLog$vars")));
            if (i.value.messageInLocal = o, i.value.consoleErrorTypeIdInLocal = a, i.value.consoleErrorTypeIdInLocal === me.consoleErrorType.warning) C.Logger.startActiveSpan("ConsoleWarning", function(c) {
                c && (c.setAttribute("code.function", "ConsoleWarning"), c.setAttribute("outsystems.function.key", "bf6592bc-1aef-4870-8ad7-45751683c39b"), c.setAttribute("outsystems.function.owner.name", "BrowserConsoleLogging"), c.setAttribute("outsystems.function.owner.key", "7f7c3cd2-279d-4fb8-b978-c1ee91ff0d4f"), c.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                try {
                    return k.safeExecuteJSNode(cm, "ConsoleWarning", "ConsoleLog", {
                        Message: C.DataConversion.JSNodeParamConverter.to(i.value.messageInLocal, C.DataTypes.DataTypes.Text)
                    }, function(d) {}, {}, {})
                } finally {
                    c && c.end()
                }
            }, 1);
            else if (i.value.consoleErrorTypeIdInLocal === me.consoleErrorType.error) C.Logger.startActiveSpan("ConsoleError", function(c) {
                c && (c.setAttribute("code.function", "ConsoleError"), c.setAttribute("outsystems.function.key", "15283603-ef47-43b3-8c56-62dc688de6fb"), c.setAttribute("outsystems.function.owner.name", "BrowserConsoleLogging"), c.setAttribute("outsystems.function.owner.key", "7f7c3cd2-279d-4fb8-b978-c1ee91ff0d4f"), c.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                try {
                    return k.safeExecuteJSNode(um, "ConsoleError", "ConsoleLog", {
                        Message: C.DataConversion.JSNodeParamConverter.to(i.value.messageInLocal, C.DataTypes.DataTypes.Text)
                    }, function(d) {}, {}, {})
                } finally {
                    c && c.end()
                }
            }, 1);
            else if (i.value.consoleErrorTypeIdInLocal === me.consoleErrorType.information) C.Logger.startActiveSpan("ConsoleLog", function(c) {
                c && (c.setAttribute("code.function", "ConsoleLog"), c.setAttribute("outsystems.function.key", "d0a74f3e-fc2e-4714-8a43-c9d2c1d8afbc"), c.setAttribute("outsystems.function.owner.name", "BrowserConsoleLogging"), c.setAttribute("outsystems.function.owner.key", "7f7c3cd2-279d-4fb8-b978-c1ee91ff0d4f"), c.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                try {
                    return k.safeExecuteJSNode(lm, "ConsoleLog", "ConsoleLog", {
                        Message: C.DataConversion.JSNodeParamConverter.to(i.value.messageInLocal, C.DataTypes.DataTypes.Text)
                    }, function(d) {}, {}, {})
                } finally {
                    c && c.end()
                }
            }, 1);
            else throw new C.Exceptions.Exceptions.AbortActivityChangeException("Unknown Console Error Type");
            return
        } finally {
            p && p.end()
        }
    }, 1)
};
j.constructor.registerVariableGroupType("BrowserConsoleLogging.ConsoleLog$vars", [{
    name: "Message",
    attrName: "messageInLocal",
    mandatory: !0,
    dataType: C.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "ConsoleErrorTypeId",
    attrName: "consoleErrorTypeIdInLocal",
    mandatory: !1,
    dataType: C.DataTypes.DataTypes.Integer,
    defaultValue: r(function() {
        return 0
    }, "defaultValue")
}]);
j.clientActionProxies.consoleLog$Action = function(o, a) {
    return o = o === void 0 ? "" : o, a = a === void 0 ? 0 : a, k.executeActionInsideJSNode(j.default.consoleLog$Action.bind(k, C.DataConversion.JSNodeParamConverter.from(o, C.DataTypes.DataTypes.Text), a), C.Controller.BaseViewController.activeScreen ? C.Controller.BaseViewController.activeScreen.callContext() : void 0, function(n) {
        return {}
    })
};
j.consoleLogWithJSON$Action = function(o, a, n, p) {
    return C.Logger.startActiveSpan("ConsoleLogWithJSON", function(i) {
        i && (i.setAttribute("code.function", "ConsoleLogWithJSON"), i.setAttribute("outsystems.function.key", "78d556b2-b25c-4559-a937-2c0f92d16178"), i.setAttribute("outsystems.function.owner.name", "BrowserConsoleLogging"), i.setAttribute("outsystems.function.owner.key", "7f7c3cd2-279d-4fb8-b978-c1ee91ff0d4f"), i.setAttribute("outsystems.function.type", "CLIENT_ACTION"));
        try {
            p = k.callContext(p);
            var c = new C.DataTypes.VariableHolder(new(k.constructor.getVariableGroupType("BrowserConsoleLogging.ConsoleLogWithJSON$vars")));
            if (c.value.messageInLocal = o, c.value.jSONInLocal = a, c.value.consoleErrorTypeIdInLocal = n, c.value.consoleErrorTypeIdInLocal === me.consoleErrorType.warning) C.Logger.startActiveSpan("ConsoleWarning", function(d) {
                d && (d.setAttribute("code.function", "ConsoleWarning"), d.setAttribute("outsystems.function.key", "5820d063-aeb6-4024-a596-19767ed071b2"), d.setAttribute("outsystems.function.owner.name", "BrowserConsoleLogging"), d.setAttribute("outsystems.function.owner.key", "7f7c3cd2-279d-4fb8-b978-c1ee91ff0d4f"), d.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                try {
                    return k.safeExecuteJSNode(dm, "ConsoleWarning", "ConsoleLogWithJSON", {
                        JSON: C.DataConversion.JSNodeParamConverter.to(c.value.jSONInLocal, C.DataTypes.DataTypes.Text),
                        Message: C.DataConversion.JSNodeParamConverter.to(c.value.messageInLocal, C.DataTypes.DataTypes.Text)
                    }, function(y) {}, {}, {})
                } finally {
                    d && d.end()
                }
            }, 1);
            else if (c.value.consoleErrorTypeIdInLocal === me.consoleErrorType.error) C.Logger.startActiveSpan("ConsoleError", function(d) {
                d && (d.setAttribute("code.function", "ConsoleError"), d.setAttribute("outsystems.function.key", "70d0bf71-aa95-4209-8fe7-975d172058b4"), d.setAttribute("outsystems.function.owner.name", "BrowserConsoleLogging"), d.setAttribute("outsystems.function.owner.key", "7f7c3cd2-279d-4fb8-b978-c1ee91ff0d4f"), d.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                try {
                    return k.safeExecuteJSNode(pm, "ConsoleError", "ConsoleLogWithJSON", {
                        JSON: C.DataConversion.JSNodeParamConverter.to(c.value.jSONInLocal, C.DataTypes.DataTypes.Text),
                        Message: C.DataConversion.JSNodeParamConverter.to(c.value.messageInLocal, C.DataTypes.DataTypes.Text)
                    }, function(y) {}, {}, {})
                } finally {
                    d && d.end()
                }
            }, 1);
            else if (c.value.consoleErrorTypeIdInLocal === me.consoleErrorType.information) C.Logger.startActiveSpan("ConsoleLog", function(d) {
                d && (d.setAttribute("code.function", "ConsoleLog"), d.setAttribute("outsystems.function.key", "fbae0ce4-79c8-49c2-8029-f03b2e611bfb"), d.setAttribute("outsystems.function.owner.name", "BrowserConsoleLogging"), d.setAttribute("outsystems.function.owner.key", "7f7c3cd2-279d-4fb8-b978-c1ee91ff0d4f"), d.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                try {
                    return k.safeExecuteJSNode(fm, "ConsoleLog", "ConsoleLogWithJSON", {
                        JSON: C.DataConversion.JSNodeParamConverter.to(c.value.jSONInLocal, C.DataTypes.DataTypes.Text),
                        Message: C.DataConversion.JSNodeParamConverter.to(c.value.messageInLocal, C.DataTypes.DataTypes.Text)
                    }, function(y) {}, {}, {})
                } finally {
                    d && d.end()
                }
            }, 1);
            else throw new C.Exceptions.Exceptions.AbortActivityChangeException("Unknown Console Error Type");
            return
        } finally {
            i && i.end()
        }
    }, 1)
};
j.constructor.registerVariableGroupType("BrowserConsoleLogging.ConsoleLogWithJSON$vars", [{
    name: "Message",
    attrName: "messageInLocal",
    mandatory: !0,
    dataType: C.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "JSON",
    attrName: "jSONInLocal",
    mandatory: !0,
    dataType: C.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "ConsoleErrorTypeId",
    attrName: "consoleErrorTypeIdInLocal",
    mandatory: !1,
    dataType: C.DataTypes.DataTypes.Integer,
    defaultValue: r(function() {
        return 0
    }, "defaultValue")
}]);
j.clientActionProxies.consoleLogWithJSON$Action = function(o, a, n) {
    return o = o === void 0 ? "" : o, a = a === void 0 ? "" : a, n = n === void 0 ? 0 : n, k.executeActionInsideJSNode(j.default.consoleLogWithJSON$Action.bind(k, C.DataConversion.JSNodeParamConverter.from(o, C.DataTypes.DataTypes.Text), C.DataConversion.JSNodeParamConverter.from(a, C.DataTypes.DataTypes.Text), n), C.Controller.BaseViewController.activeScreen ? C.Controller.BaseViewController.activeScreen.callContext() : void 0, function(p) {
        return {}
    })
};
var k8 = j;

function Tm(o, a, n, p) {
    let i = JSON.parse(o.Data);
    o.Response = JSON.stringify(i)
}
r(Tm, "default");

function Sm(o, a, n, p) {
    let i = {
        server: o.AccountType,
        service: o.Platform,
        service_token: 1
    };
    o.payload = JSON.stringify(i)
}
r(Sm, "default");

function Dm(o, a, n, p) {
    var i;
    o.IsAvailable = ((i = window == null ? void 0 : window.JSCookies) == null ? void 0 : i.get("tracking_status")) != null
}
r(Dm, "default");

function bm(o, a, n, p) {
    let i = JSON.parse(o.MT5Accounts).map(T => w(h({}, T), {
            isAdded: !1
        })),
        c = JSON.parse(o.CTraderAccounts).map(T => w(h({}, T), {
            isAdded: !1
        })),
        d = JSON.parse(o.DXTradeAccounts).map(T => w(h({}, T), {
            isAdded: !1
        })),
        y = [...i, ...c.length > 0 ? [c[0]] : [], ...d];
    o.CombinedList = JSON.stringify(y)
}
r(bm, "default");

function gm(o, a, n, p) {
    let i = JSON.parse(o.MT5Accounts).map(T => w(h({}, T), {
            isAdded: !0
        })),
        c = JSON.parse(o.CTraderAccounts).map(T => w(h({}, T), {
            isAdded: !0
        })),
        d = JSON.parse(o.DXTradeAccounts).map(T => w(h({}, T), {
            isAdded: !0
        })),
        y = [...i, ...c.length > 0 ? [c[0]] : [], ...d];
    o.CombinedList = JSON.stringify(y)
}
r(gm, "default");
var q8 = {
        staticEntities: {}
    },
    H8 = q8.staticEntities;
var xm = class xm extends e.GenericRecordList {
    static getItemType() {
        return W
    }
};
r(xm, "RL_2d6a8a4b9a9977732a5cebddd3afb0f4");
var Am = xm;
var ec = class ec extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("DerivURL", "derivURLAttr", "DerivURL", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new W)
        }, !0, W)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new ec(new ec.RecordClass({
            derivURLAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "84b6697f-9ee6-1293-4a9a-577d41c1af59"
    }
};
r(ec, "RC_84b6697f9ee612934a9a577d41c1af59");
var uo = ec;
uo.init();
var vm = class vm extends e.GenericRecordList {
    static getItemType() {
        return uo
    }
};
r(vm, "RL_fa935a7947e740311157a8ee0322dd45");
var Om = vm;

function Rm(o, a, n, p) {
    let i = {
            AAD: 2,
            AED: 2,
            AFN: 2,
            ALL: 2,
            AMD: 2,
            ANG: 2,
            AOA: 2,
            ARS: 2,
            AUD: 2,
            AWG: 2,
            AZN: 2,
            BAM: 2,
            BBD: 2,
            BCH: 8,
            BDT: 2,
            BGN: 2,
            BHD: 3,
            BIF: 0,
            BMD: 2,
            BND: 2,
            BOB: 2,
            BOV: 2,
            BRL: 2,
            BSD: 2,
            BTC: 8,
            BTN: 2,
            BUSD: 2,
            BWP: 2,
            BYN: 2,
            BZD: 2,
            CAD: 2,
            CDF: 2,
            CHE: 2,
            CHF: 2,
            CHW: 2,
            CLF: 4,
            CLP: 0,
            CNY: 2,
            COP: 2,
            COU: 2,
            CRC: 2,
            CUC: 2,
            CUP: 2,
            CVE: 2,
            CZK: 2,
            DAI: 2,
            DJF: 0,
            DKK: 2,
            DOP: 2,
            DZD: 2,
            EGP: 2,
            ERN: 2,
            ETB: 2,
            ETC: 8,
            ETH: 8,
            EUR: 2,
            EURS: 2,
            eUSDT: 2,
            FJD: 2,
            FKP: 2,
            GBP: 2,
            GEL: 2,
            GHS: 2,
            GIP: 2,
            GMD: 2,
            GNF: 0,
            GTQ: 2,
            GYD: 2,
            HKD: 2,
            HNL: 2,
            HRK: 2,
            HTG: 2,
            HUF: 2,
            IDK: 0,
            IDR: 2,
            ILS: 2,
            INR: 2,
            IQD: 3,
            IRR: 2,
            ISK: 0,
            JMD: 2,
            JOD: 3,
            JPY: 0,
            KES: 2,
            KGS: 2,
            KHR: 2,
            KMF: 0,
            KPW: 2,
            KRW: 0,
            KWD: 3,
            KYD: 2,
            KZT: 2,
            LAK: 2,
            LBP: 2,
            LKR: 2,
            LRD: 2,
            LSL: 2,
            LTC: 8,
            LYD: 3,
            MAD: 2,
            MDL: 2,
            MGA: 2,
            MKD: 2,
            MMK: 2,
            MNT: 2,
            MOP: 2,
            MRU: 2,
            MUR: 2,
            MVR: 2,
            MWK: 2,
            MXN: 2,
            MXV: 2,
            MYR: 2,
            MZN: 2,
            NAD: 2,
            NGN: 2,
            NIO: 2,
            NOK: 2,
            NPR: 2,
            NZD: 2,
            OMR: 3,
            PAB: 2,
            PAX: 2,
            PEN: 2,
            PGK: 2,
            PHP: 2,
            PKR: 2,
            PLN: 2,
            PYG: 0,
            QAR: 2,
            RON: 2,
            RSD: 2,
            RUB: 2,
            RWF: 0,
            SAR: 2,
            SBD: 2,
            SCR: 2,
            SDG: 2,
            SEK: 2,
            SGD: 2,
            SHP: 2,
            SLL: 2,
            SOS: 2,
            SRD: 2,
            SSP: 2,
            STN: 2,
            SVC: 2,
            SYP: 2,
            SZL: 2,
            THB: 2,
            TJS: 2,
            TMT: 2,
            TND: 3,
            TOP: 2,
            TRY: 2,
            TTD: 2,
            TUSD: 2,
            tUSDT: 2,
            TWD: 2,
            TZS: 2,
            UAH: 2,
            UGX: 0,
            USB: 2,
            USD: 2,
            USDC: 2,
            USDK: 2,
            UST: 2,
            USN: 2,
            UYI: 0,
            UYU: 2,
            UYW: 4,
            UZS: 2,
            VES: 2,
            VND: 0,
            VUV: 0,
            WST: 2,
            XAF: 0,
            XCD: 2,
            XOF: 0,
            XPF: 0,
            YER: 2,
            ZAR: 2,
            ZMW: 2,
            ZWL: 2
        },
        c = r((d, y, T, f) => {
            try {
                let S = i[y],
                    A = Number(f) || S;
                return new Intl.NumberFormat(T, {
                    minimumFractionDigits: A,
                    maximumFractionDigits: A
                }).format(Number(d))
            } catch (S) {
                return d
            }
        }, "FormatMoney");
    o.FormattedNumber = c(o.Number, o.Currency, o.Locale, o.DecimalPlaces)
}
r(Rm, "default");

function Cm(o, a, n, p) {
    let i = o.Domain || window.location.hostname;
    o.IsStaging = /^staging-hub\.deriv\.(com|me|be)$/i.test(i), o.IsProduction = /^hub\.deriv\.(com|me|be)$/i.test(i)
}
r(Cm, "default");

function hm(o, a, n, p) {
    let i = "deriv.com",
        y = [i, "deriv.be", "deriv.me"],
        T = typeof window != "undefined" && window.location.hostname.split("hub.")[1],
        f = y.includes(T) ? T : i;
    o.DerivURLs = JSON.stringify({
        binaryBotProduction: `https://bot.${f}`,
        binaryBotStaging: `https://staging-bot.${f}`,
        derivAppProduction: `https://app.${f}`,
        derivAppStaging: `https://staging-app.${f}`,
        derivComProduction: `https://${f}`,
        derivComProductionEU: `https://eu.${f}`,
        derivComStaging: `https://staging.${f}`,
        derivHost: f,
        smartTraderProduction: `https://smarttrader.${f}`,
        smartTraderStaging: `https://staging-smarttrader.${f}`,
        derivP2pProduction: `https://p2p.${f}`,
        derivP2pStaging: `https://staging-p2p.${f}`,
        outsystemsProduction: `https://hub.${f}`,
        outsystemsStaging: `https://staging-hub.${f}`,
        derivWhatsApp: "https://wa.me/35699578341"
    })
}
r(hm, "default");
var O = s,
    Im = class Im extends O.Controller.BaseModuleController {
        constructor(a, n, p, i) {
            super(a, n, p, i)
        }
        get clientActionProxies() {
            return this.hasOwnProperty("_clientActionProxies") || (this._clientActionProxies = {}), this._clientActionProxies
        }
        set clientActionProxies(a) {
            this._clientActionProxies = a
        }
        get roles() {
            return this.hasOwnProperty("_roles") || (this._roles = {}), this._roles
        }
        set roles(a) {
            this._roles = a
        }
        get defaultTimeout() {
            return this.hasOwnProperty("_defaultTimeout") || (this._defaultTimeout = 10), this._defaultTimeout
        }
        set defaultTimeout(a) {
            this._defaultTimeout = a
        }
        getDefaultTimeout() {
            return this.defaultTimeout
        }
    };
r(Im, "Controller");
var wm = Im,
    V = new wm,
    N = V;
V.formatMoney$Action = function(o, a, n, p, i) {
    return O.Logger.startActiveSpan("FormatMoney", function(c) {
        c && (c.setAttribute("code.function", "FormatMoney"), c.setAttribute("outsystems.function.key", "c374d5d8-16e2-442f-8302-2e7ba999ac19"), c.setAttribute("outsystems.function.owner.name", "SharedUtilities"), c.setAttribute("outsystems.function.owner.key", "7c6899bc-58cf-4ca1-ae7a-761245ed915a"), c.setAttribute("outsystems.function.type", "CLIENT_ACTION"));
        try {
            i = N.callContext(i);
            var d = new O.DataTypes.VariableHolder(new(N.constructor.getVariableGroupType("SharedUtilities.FormatMoney$vars")));
            d.value.numberInLocal = o, d.value.currencyInLocal = a, d.value.localeInLocal = n, d.value.decimalPlacesInLocal = p;
            var y = new O.DataTypes.VariableHolder,
                T = new O.DataTypes.VariableHolder(new(N.constructor.getVariableGroupType("SharedUtilities.FormatMoney$outVars")));
            return y.value = O.Logger.startActiveSpan("FormatMoneyFn", function(f) {
                f && (f.setAttribute("code.function", "FormatMoneyFn"), f.setAttribute("outsystems.function.key", "f4cb7805-03af-4f7b-9e68-e0261fcbdf01"), f.setAttribute("outsystems.function.owner.name", "SharedUtilities"), f.setAttribute("outsystems.function.owner.key", "7c6899bc-58cf-4ca1-ae7a-761245ed915a"), f.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                try {
                    return N.safeExecuteJSNode(Rm, "FormatMoneyFn", "FormatMoney", {
                        DecimalPlaces: O.DataConversion.JSNodeParamConverter.to(d.value.decimalPlacesInLocal, O.DataTypes.DataTypes.Text),
                        Number: O.DataConversion.JSNodeParamConverter.to(d.value.numberInLocal, O.DataTypes.DataTypes.Text),
                        Locale: O.DataConversion.JSNodeParamConverter.to(d.value.localeInLocal, O.DataTypes.DataTypes.Text),
                        Currency: O.DataConversion.JSNodeParamConverter.to(d.value.currencyInLocal, O.DataTypes.DataTypes.Text),
                        FormattedNumber: O.DataConversion.JSNodeParamConverter.to("", O.DataTypes.DataTypes.Text)
                    }, function(S) {
                        var A = new(N.constructor.getVariableGroupType("SharedUtilities.FormatMoney$formatMoneyFnJSResult"));
                        return A.formattedNumberOut = O.DataConversion.JSNodeParamConverter.from(S.FormattedNumber, O.DataTypes.DataTypes.Text), A
                    }, {}, {})
                } finally {
                    f && f.end()
                }
            }, 1), T.value.formattedNumberOut = y.value.formattedNumberOut, T.value
        } finally {
            c && c.end()
        }
    }, 1)
};
V.constructor.registerVariableGroupType("SharedUtilities.FormatMoney$vars", [{
    name: "Number",
    attrName: "numberInLocal",
    mandatory: !0,
    dataType: O.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "Currency",
    attrName: "currencyInLocal",
    mandatory: !1,
    dataType: O.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "USD"
    }, "defaultValue")
}, {
    name: "Locale",
    attrName: "localeInLocal",
    mandatory: !1,
    dataType: O.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "en-US"
    }, "defaultValue")
}, {
    name: "DecimalPlaces",
    attrName: "decimalPlacesInLocal",
    mandatory: !1,
    dataType: O.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
V.constructor.registerVariableGroupType("SharedUtilities.FormatMoney$formatMoneyFnJSResult", [{
    name: "FormattedNumber",
    attrName: "formattedNumberOut",
    mandatory: !0,
    dataType: O.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
V.constructor.registerVariableGroupType("SharedUtilities.FormatMoney$outVars", [{
    name: "FormattedNumber",
    attrName: "formattedNumberOut",
    mandatory: !1,
    dataType: O.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
V.clientActionProxies.formatMoney$Action = function(o, a, n, p) {
    return o = o === void 0 ? "" : o, a = a === void 0 ? "USD" : a, n = n === void 0 ? "en-US" : n, p = p === void 0 ? "" : p, N.executeActionInsideJSNode(V.default.formatMoney$Action.bind(N, O.DataConversion.JSNodeParamConverter.from(o, O.DataTypes.DataTypes.Text), O.DataConversion.JSNodeParamConverter.from(a, O.DataTypes.DataTypes.Text), O.DataConversion.JSNodeParamConverter.from(n, O.DataTypes.DataTypes.Text), O.DataConversion.JSNodeParamConverter.from(p, O.DataTypes.DataTypes.Text)), O.Controller.BaseViewController.activeScreen ? O.Controller.BaseViewController.activeScreen.callContext() : void 0, function(i) {
        return {
            FormattedNumber: O.DataConversion.JSNodeParamConverter.to(i.formattedNumberOut, O.DataTypes.DataTypes.Text)
        }
    })
};
V.getPlatformFromURL$Action = function(o, a) {
    return O.Logger.startActiveSpan("GetPlatformFromURL", function(n) {
        n && (n.setAttribute("code.function", "GetPlatformFromURL"), n.setAttribute("outsystems.function.key", "2b1e1db3-8a4a-4c0c-ac0a-666dc9c84ac8"), n.setAttribute("outsystems.function.owner.name", "SharedUtilities"), n.setAttribute("outsystems.function.owner.key", "7c6899bc-58cf-4ca1-ae7a-761245ed915a"), n.setAttribute("outsystems.function.type", "CLIENT_ACTION"));
        try {
            a = N.callContext(a);
            var p = new O.DataTypes.VariableHolder(new(N.constructor.getVariableGroupType("SharedUtilities.GetPlatformFromURL$vars")));
            p.value.domainInLocal = o;
            var i = new O.DataTypes.VariableHolder,
                c = new O.DataTypes.VariableHolder(new(N.constructor.getVariableGroupType("SharedUtilities.GetPlatformFromURL$outVars")));
            return i.value = O.Logger.startActiveSpan("GetPlatformFromURL", function(d) {
                d && (d.setAttribute("code.function", "GetPlatformFromURL"), d.setAttribute("outsystems.function.key", "6529f40d-dbd6-4772-b963-6e286ac3977c"), d.setAttribute("outsystems.function.owner.name", "SharedUtilities"), d.setAttribute("outsystems.function.owner.key", "7c6899bc-58cf-4ca1-ae7a-761245ed915a"), d.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                try {
                    return N.safeExecuteJSNode(Cm, "GetPlatformFromURL", "GetPlatformFromURL", {
                        Domain: O.DataConversion.JSNodeParamConverter.to(p.value.domainInLocal, O.DataTypes.DataTypes.Text),
                        IsStaging: O.DataConversion.JSNodeParamConverter.to(!1, O.DataTypes.DataTypes.Boolean),
                        IsProduction: O.DataConversion.JSNodeParamConverter.to(!1, O.DataTypes.DataTypes.Boolean)
                    }, function(y) {
                        var T = new(N.constructor.getVariableGroupType("SharedUtilities.GetPlatformFromURL$getPlatformFromURLJSResult"));
                        return T.isStagingOut = O.DataConversion.JSNodeParamConverter.from(y.IsStaging, O.DataTypes.DataTypes.Boolean), T.isProductionOut = O.DataConversion.JSNodeParamConverter.from(y.IsProduction, O.DataTypes.DataTypes.Boolean), T
                    }, {}, {})
                } finally {
                    d && d.end()
                }
            }, 1), c.value.isStagingOut = i.value.isStagingOut, c.value.isProductionOut = i.value.isProductionOut, c.value
        } finally {
            n && n.end()
        }
    }, 1)
};
V.constructor.registerVariableGroupType("SharedUtilities.GetPlatformFromURL$vars", [{
    name: "Domain",
    attrName: "domainInLocal",
    mandatory: !1,
    dataType: O.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
V.constructor.registerVariableGroupType("SharedUtilities.GetPlatformFromURL$getPlatformFromURLJSResult", [{
    name: "IsStaging",
    attrName: "isStagingOut",
    mandatory: !0,
    dataType: O.DataTypes.DataTypes.Boolean,
    defaultValue: r(function() {
        return !1
    }, "defaultValue")
}, {
    name: "IsProduction",
    attrName: "isProductionOut",
    mandatory: !0,
    dataType: O.DataTypes.DataTypes.Boolean,
    defaultValue: r(function() {
        return !1
    }, "defaultValue")
}]);
V.constructor.registerVariableGroupType("SharedUtilities.GetPlatformFromURL$outVars", [{
    name: "IsStaging",
    attrName: "isStagingOut",
    mandatory: !1,
    dataType: O.DataTypes.DataTypes.Boolean,
    defaultValue: r(function() {
        return !1
    }, "defaultValue")
}, {
    name: "IsProduction",
    attrName: "isProductionOut",
    mandatory: !1,
    dataType: O.DataTypes.DataTypes.Boolean,
    defaultValue: r(function() {
        return !1
    }, "defaultValue")
}]);
V.clientActionProxies.getPlatformFromURL$Action = function(o) {
    return o = o === void 0 ? "" : o, N.executeActionInsideJSNode(V.default.getPlatformFromURL$Action.bind(N, O.DataConversion.JSNodeParamConverter.from(o, O.DataTypes.DataTypes.Text)), O.Controller.BaseViewController.activeScreen ? O.Controller.BaseViewController.activeScreen.callContext() : void 0, function(a) {
        return {
            IsStaging: O.DataConversion.JSNodeParamConverter.to(a.isStagingOut, O.DataTypes.DataTypes.Boolean),
            IsProduction: O.DataConversion.JSNodeParamConverter.to(a.isProductionOut, O.DataTypes.DataTypes.Boolean)
        }
    })
};
V.getURL$Action = function(o) {
    return O.Logger.startActiveSpan("GetURL", function(a) {
        a && (a.setAttribute("code.function", "GetURL"), a.setAttribute("outsystems.function.key", "caafaf98-52fa-4b40-858d-72d7c552a841"), a.setAttribute("outsystems.function.owner.name", "SharedUtilities"), a.setAttribute("outsystems.function.owner.key", "7c6899bc-58cf-4ca1-ae7a-761245ed915a"), a.setAttribute("outsystems.function.type", "CLIENT_ACTION"));
        try {
            o = N.callContext(o);
            var n = new O.DataTypes.VariableHolder,
                p = new O.DataTypes.VariableHolder(new(O.Controller.BaseController.getJSONDeserializeOutputType(W))),
                i = new O.DataTypes.VariableHolder(new(N.constructor.getVariableGroupType("SharedUtilities.GetURL$outVars")));
            return n.value = O.Logger.startActiveSpan("GenerateURL", function(c) {
                c && (c.setAttribute("code.function", "GenerateURL"), c.setAttribute("outsystems.function.key", "828130da-46a6-435e-9507-21eea47d8cae"), c.setAttribute("outsystems.function.owner.name", "SharedUtilities"), c.setAttribute("outsystems.function.owner.key", "7c6899bc-58cf-4ca1-ae7a-761245ed915a"), c.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                try {
                    return N.safeExecuteJSNode(hm, "GenerateURL", "GetURL", {
                        DerivURLs: O.DataConversion.JSNodeParamConverter.to("", O.DataTypes.DataTypes.Text)
                    }, function(d) {
                        var y = new(N.constructor.getVariableGroupType("SharedUtilities.GetURL$generateURLJSResult"));
                        return y.derivURLsOut = O.DataConversion.JSNodeParamConverter.from(d.DerivURLs, O.DataTypes.DataTypes.Text), y
                    }, {}, {})
                } finally {
                    c && c.end()
                }
            }, 1), p.value.dataOut = O.JSONUtils.deserializeFromJSON(n.value.derivURLsOut, W, !1), i.value.uRLsOut = p.value.dataOut, i.value
        } finally {
            a && a.end()
        }
    }, 1)
};
V.constructor.registerVariableGroupType("SharedUtilities.GetURL$generateURLJSResult", [{
    name: "DerivURLs",
    attrName: "derivURLsOut",
    mandatory: !0,
    dataType: O.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
V.constructor.registerVariableGroupType("SharedUtilities.GetURL$outVars", [{
    name: "URLs",
    attrName: "uRLsOut",
    mandatory: !1,
    dataType: O.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new W
    }, "defaultValue"),
    complexType: W
}]);
V.clientActionProxies.getURL$Action = function() {
    return N.executeActionInsideJSNode(V.default.getURL$Action.bind(N), O.Controller.BaseViewController.activeScreen ? O.Controller.BaseViewController.activeScreen.callContext() : void 0, function(o) {
        return {
            URLs: o.uRLsOut
        }
    })
};
var Yf = V;

function Pm(o, a, n, p) {
    var T;
    let i = JSON.parse(o.Data),
        c = 0,
        d;
    i == null || i.map(f => {
        f.account_type === "real" ? c += f.balance : c = f.balance, d = f.currency
    });
    let y = (T = a.FormatMoney(c, d)) == null ? void 0 : T.FormattedNumber;
    o.TotalBalance = `${y} ${d}`
}
r(Pm, "default");

function Nm(o, a, n, p) {
    let i = JSON.parse(o.Data),
        c = (i == null ? void 0 : i.mt5_login_list) || [],
        d = JSON.parse(o.CFDAccounts) || [],
        y = c == null ? void 0 : c.map(S => {
            let A = `mt5_${S.product||"standard"}`,
                b = d.find(x => x.ProductIdentifier === A) || {};
            return w(h({}, S), {
                identifier: A,
                icon: b.Icon || "",
                isAdded: !0,
                label: b.Label || "",
                description: b.Description || ""
            })
        }),
        T = y.filter(({
            account_type: S
        }) => S === "demo"),
        f = y.filter(({
            account_type: S
        }) => S === "real");
    o.DemoAccounts = JSON.stringify(T), o.RealAccounts = JSON.stringify(f)
}
r(Nm, "default");

function Vm(o, a, n, p) {
    o.Payload = JSON.stringify({
        currency_code: o.Currency
    })
}
r(Vm, "default");

function Lm(o, a, n, p) {
    return new Promise(function(i, c) {
        let d = {};
        o.Endpoint && (d[o.Endpoint] = 1), o.payload && Object.assign(d, JSON.parse(o.payload));

        function y() {
            DerivAPI.send(d).then(T => {
                o.response = JSON.stringify(T), o.IsError = !1, i()
            }).catch(T => {
                var f, S;
                o.IsError = !0, o.response = JSON.stringify(T == null ? void 0 : T.error), o.ErrorMessage = ((f = T == null ? void 0 : T.error) == null ? void 0 : f.message) || "", o.ErrorCode = ((S = T == null ? void 0 : T.error) == null ? void 0 : S.code) || "", i()
            })
        }
        r(y, "sendRequest"), DerivAPI && (o.Authorize && o.Token ? DerivAPI.send({
            authorize: o.Token
        }).then(() => y()) : y())
    })
}
r(Lm, "default");

function Gm(o, a, n, p) {
    let i = {
        base_currency: o.BaseCurrency
    };
    o.LoginId && (i.loginid = o.LoginId), o.TargetCurrency && (target_currency = o.TargetCurrency), o.Payload = JSON.stringify(i)
}
r(Gm, "default");

function Jm(o, a, n, p) {
    let i = localStorage.getItem("featureFlags");
    if (i) {
        let d = JSON.parse(i).find(y => y.name === o.Name);
        d ? o.IsEnabled = d.enabled : o.IsEnabled = !1
    }
}
r(Jm, "default");

function Bm(o, a, n, p) {
    let i = JSON.parse(o.AvailableAccounts),
        c = JSON.parse(o.CreatedAccounts),
        d = i.filter(y => !c.some(T => T.identifier === y.identifier));
    o.FilteredAvailableAccounts = JSON.stringify(d)
}
r(Bm, "default");

function _m(o, a, n, p) {
    var i, c;
    window.Analytics && (o.IsEnabled = (c = (i = Analytics == null ? void 0 : Analytics.Analytics) == null ? void 0 : i.getFeatureValue(o.FeatureFlagName)) != null ? c : !1)
}
r(_m, "default");

function km(o, a, n, p) {
    let i;
    o.HasToken ? i = {
        platform: o.Platform
    } : i = {
        country_code: o.CountryCode,
        platform: o.Platform
    }, o.Payload = JSON.stringify(i)
}
r(km, "default");

function Em(o, a, n, p) {
    var c;
    let i = localStorage.getItem("accountsList");
    if (i) {
        let d = JSON.parse(i);
        o.AuthToken = (c = d[o.LoginId]) == null ? void 0 : c.token, o.Account = JSON.stringify(d[o.LoginId])
    }
}
r(Em, "default");
var tc = {
    staticEntities: {}
};
tc.staticEntities.consoleErrorType = {};
Object.defineProperty(tc.staticEntities.consoleErrorType, "error", {
    get: r(function() {
        return 2
    }, "get")
});
Object.defineProperty(tc.staticEntities.consoleErrorType, "warning", {
    get: r(function() {
        return 1
    }, "get")
});
Object.defineProperty(tc.staticEntities.consoleErrorType, "information", {
    get: r(function() {
        return 0
    }, "get")
});
var j8 = tc.staticEntities;
var rc = class rc extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("GetAccountStatus", "getAccountStatusAttr", "GetAccountStatus", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Oe)
        }, !0, Oe)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new rc(new rc.RecordClass({
            getAccountStatusAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "3183b1f3-faf6-969c-32d1-f8eb3c0f8d02"
    }
};
r(rc, "RC_3183b1f3faf6969c32d1f8eb3c0f8d02");
var co = rc;
co.init();
var $m = class $m extends e.GenericRecordList {
    static getItemType() {
        return co
    }
};
r($m, "RL_004e51f9bad0ff9671e9f54d029f6acd");
var Fm = $m;
var Mm = class Mm extends e.GenericRecordList {
    static getItemType() {
        return ve
    }
};
r(Mm, "RL_00e1daf27d32b8b4e98978c4e9e58544");
var Um = Mm;
var Hm = class Hm extends e.GenericRecordList {
    static getItemType() {
        return Re
    }
};
r(Hm, "RL_00f6e92c07403e159ff2340d01820a0d");
var qm = Hm;
var ac = class ac extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Postcode", "postcodeAttr", "Postcode", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Ce)
        }, !0, Ce)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new ac(new ac.RecordClass({
            postcodeAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "012b2720-fb0d-cd44-2416-908af4498cef"
    }
};
r(ac, "RC_012b2720fb0dcd442416908af4498cef");
var lo = ac;
lo.init();
var oc = class oc extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Statement", "statementAttr", "Statement", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Ie)
        }, !0, Ie)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new oc(new oc.RecordClass({
            statementAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "37b9abdf-c568-1e06-0cfc-cd92139f3527"
    }
};
r(oc, "RC_37b9abdfc5681e060cfccd92139f3527");
var po = oc;
po.init();
var zm = class zm extends e.GenericRecordList {
    static getItemType() {
        return po
    }
};
r(zm, "RL_016b438202bb8683ed0088796cbdae5f");
var Wm = zm;
var Km = class Km extends e.GenericRecordList {
    static getItemType() {
        return Ge
    }
};
r(Km, "RL_0253348eb22ed9882ec1d8af3ef0b76e");
var jm = Km;
var Zm = class Zm extends e.GenericRecordList {
    static getItemType() {
        return q
    }
};
r(Zm, "RL_02995be0d4089fecb83f5ff06bf3de7f");
var Ym = Zm;
var sc = class sc extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("SupportedDocuments", "supportedDocumentsAttr", "SupportedDocuments", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Bf)
        }, !0, Bf)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new sc(new sc.RecordClass({
            supportedDocumentsAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "02b3156d-da71-1037-d0bf-0bf8ba2d349b"
    }
};
r(sc, "RC_02b3156dda711037d0bf0bf8ba2d349b");
var fo = sc;
fo.init();
var nc = class nc extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("GetLandingCompanyResponse", "getLandingCompanyResponseAttr", "GetLandingCompanyResponse", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new at)
        }, !0, at)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new nc(new nc.RecordClass({
            getLandingCompanyResponseAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "e16346b0-5b03-d5a8-388d-39bb24b7660c"
    }
};
r(nc, "RC_e16346b05b03d5a8388d39bb24b7660c");
var mo = nc;
mo.init();
var Xm = class Xm extends e.GenericRecordList {
    static getItemType() {
        return mo
    }
};
r(Xm, "RL_02c7187c7ba98cee9be98803b8e6dc25");
var Qm = Xm;
var ic = class ic extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2POrderDisputeResponse", "p2POrderDisputeResponseAttr", "P2POrderDisputeResponse", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new ot)
        }, !0, ot)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new ic(new ic.RecordClass({
            p2POrderDisputeResponseAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "52cd3192-fe25-a809-00d1-3891f43fdafe"
    }
};
r(ic, "RC_52cd3192fe25a80900d13891f43fdafe");
var yo = ic;
yo.init();
var ty = class ty extends e.GenericRecordList {
    static getItemType() {
        return yo
    }
};
r(ty, "RL_02db0f35ddb2c08edb356b6a4e1e4b4a");
var ey = ty;
var uc = class uc extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("KYCAuthStatus", "kYCAuthStatusAttr", "KYCAuthStatus", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new ut)
        }, !0, ut)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new uc(new uc.RecordClass({
            kYCAuthStatusAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "f5490f87-f20f-2000-0a36-a875dced4a8f"
    }
};
r(uc, "RC_f5490f87f20f20000a36a875dced4a8f");
var To = uc;
To.init();
var ay = class ay extends e.GenericRecordList {
    static getItemType() {
        return To
    }
};
r(ay, "RL_02fe2e113b5eb9c675da8b940dcff7a8");
var ry = ay;
var cc = class cc extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Partner_account", "partner_accountAttr", "Partner_account", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new lt)
        }, !0, lt)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new cc(new cc.RecordClass({
            partner_accountAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "0340cb56-c492-8ed7-e579-290b842d6376"
    }
};
r(cc, "RC_0340cb56c4928ed7e579290b842d6376");
var So = cc;
So.init();
var sy = class sy extends e.GenericRecordList {
    static getItemType() {
        return Me
    }
};
r(sy, "RL_03ad86d8c1630b012ffc7d14eb428cff");
var oy = sy;
var iy = class iy extends e.GenericRecordList {
    static getItemType() {
        return dt
    }
};
r(iy, "RL_04d18d7e4131a1487094ff1d381d4a05");
var ny = iy;
var uy = class uy extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Name", "nameAttr", "Name", !1, !1, e.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Value", "valueAttr", "Value", !1, !1, e.DataTypes.Text, function() {
            return ""
        }, !0)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
};
r(uy, "ST_057fc2ec8b30a53f3233d84a70e95aabStructure");
var te = uy;
te.init();
var lc = class lc extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("GetAccountStatusRes", "getAccountStatusResAttr", "GetAccountStatusRes", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new q)
        }, !0, q)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new lc(new lc.RecordClass({
            getAccountStatusResAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "e70e9077-4605-2ce9-2e69-1c25e5a4ffd3"
    }
};
r(lc, "RC_e70e907746052ce92e691c25e5a4ffd3");
var Do = lc;
Do.init();
var ly = class ly extends e.GenericRecordList {
    static getItemType() {
        return Do
    }
};
r(ly, "RL_05831c3634322d723355d086c3117149");
var cy = ly;
var dc = class dc extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2PAdvertListResponse", "p2PAdvertListResponseAttr", "P2PAdvertListResponse", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new ft)
        }, !0, ft)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new dc(new dc.RecordClass({
            p2PAdvertListResponseAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "aaae25c6-5f55-ba27-fa3b-d1194aa7adb1"
    }
};
r(dc, "RC_aaae25c65f55ba27fa3bd1194aa7adb1");
var bo = dc;
bo.init();
var py = class py extends e.GenericRecordList {
    static getItemType() {
        return bo
    }
};
r(py, "RL_0603e4560918555f40e94b916d53c558");
var dy = py;
var pc = class pc extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("GetResidenceListResponse", "getResidenceListResponseAttr", "GetResidenceListResponse", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Y)
        }, !0, Y)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new pc(new pc.RecordClass({
            getResidenceListResponseAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "0a5ac308-5c04-4e0c-9df1-51a275033fc0"
    }
};
r(pc, "RC_0a5ac3085c044e0c9df151a275033fc0");
var go = pc;
go.init();
var my = class my extends e.GenericRecordList {
    static getItemType() {
        return go
    }
};
r(my, "RL_06044e18a6adcb4a057162249eab9621");
var fy = my;
var Ty = class Ty extends e.GenericRecordList {
    static getItemType() {
        return It
    }
};
r(Ty, "RL_06622fbce6cdd9c0cef8e5e1e42d7483");
var yy = Ty;
var fc = class fc extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Common_reporting_standard", "common_reporting_standardAttr", "Common_reporting_standard", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new St)
        }, !0, St)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new fc(new fc.RecordClass({
            common_reporting_standardAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "7501a1e5-9336-7174-3a2b-bef56326a047"
    }
};
r(fc, "RC_7501a1e5933671743a2bbef56326a047");
var Ao = fc;
Ao.init();
var Dy = class Dy extends e.GenericRecordList {
    static getItemType() {
        return Ao
    }
};
r(Dy, "RL_06ad8081ecdd4854820e95cbc9df15a8");
var Sy = Dy;
var mc = class mc extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2PAdvertCreateRequest", "p2PAdvertCreateRequestAttr", "P2PAdvertCreateRequest", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Pt)
        }, !0, Pt)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new mc(new mc.RecordClass({
            p2PAdvertCreateRequestAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "78c58bb8-00be-d93f-ede1-f23d20908730"
    }
};
r(mc, "RC_78c58bb800bed93fede1f23d20908730");
var xo = mc;
xo.init();
var gy = class gy extends e.GenericRecordList {
    static getItemType() {
        return xo
    }
};
r(gy, "RL_06babe1eae4ab7ef44e040e05b96ad18");
var by = gy;
var yc = class yc extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Transfer_between_account", "transfer_between_accountAttr", "Transfer_between_account", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Vt)
        }, !0, Vt)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new yc(new yc.RecordClass({
            transfer_between_accountAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "08d13aa3-0e14-041e-8a41-4b5d62b51845"
    }
};
r(yc, "RC_08d13aa30e14041e8a414b5d62b51845");
var Oo = yc;
Oo.init();
var xy = class xy extends e.GenericRecordList {
    static getItemType() {
        return Oo
    }
};
r(xy, "RL_0706637a7e12b34ea54e4ad5e3fa7774");
var Ay = xy;
var Tc = class Tc extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("PostTradingPlatformPasswordResetRequest", "postTradingPlatformPasswordResetRequestAttr", "PostTradingPlatformPasswordResetRequest", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Lt)
        }, !0, Lt)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Tc(new Tc.RecordClass({
            postTradingPlatformPasswordResetRequestAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "b95c380c-099a-10aa-1c6c-66ff29a6b5ad"
    }
};
r(Tc, "RC_b95c380c099a10aa1c6c66ff29a6b5ad");
var vo = Tc;
vo.init();
var vy = class vy extends e.GenericRecordList {
    static getItemType() {
        return vo
    }
};
r(vy, "RL_0755631e3e89e106d6250421ad51275f");
var Oy = vy;
var Cy = class Cy extends e.GenericRecordList {
    static getItemType() {
        return Bt
    }
};
r(Cy, "RL_07d4f66324fea8299f2f66d1b9c5293b");
var Ry = Cy;
var Sc = class Sc extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2POrderInfoResponse", "p2POrderInfoResponseAttr", "P2POrderInfoResponse", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new _t)
        }, !0, _t)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Sc(new Sc.RecordClass({
            p2POrderInfoResponseAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "9fa0982e-2ffd-4315-2927-0d85cdcda612"
    }
};
r(Sc, "RC_9fa0982e2ffd431529270d85cdcda612");
var Ro = Sc;
Ro.init();
var wy = class wy extends e.GenericRecordList {
    static getItemType() {
        return Ro
    }
};
r(wy, "RL_0801fe4c458fcd2bde490e69fb5c203d");
var hy = wy;
var Py = class Py extends e.GenericRecordList {
    static getItemType() {
        return Fe
    }
};
r(Py, "RL_08493c76d04a33db201691368d61ec98");
var Iy = Py;
var Vy = class Vy extends e.GenericRecordList {
    static getItemType() {
        return Dt
    }
};
r(Vy, "RL_085f95fe6d8c0993316da931c0bd457a");
var Ny = Vy;
var Dc = class Dc extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("KYC_Identity", "kYC_IdentityAttr", "KYC_Identity", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new it)
        }, !0, it)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Dc(new Dc.RecordClass({
            kYC_IdentityAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "b654e7cd-3dd9-ac2b-1fbd-d9af9d59a56a"
    }
};
r(Dc, "RC_b654e7cd3dd9ac2b1fbdd9af9d59a56a");
var Co = Dc;
Co.init();
var Gy = class Gy extends e.GenericRecordList {
    static getItemType() {
        return Co
    }
};
r(Gy, "RL_08d09f34c86e6f5622489301d79ff8a8");
var Ly = Gy;
var bc = class bc extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Echo_req10", "echo_req10Attr", "Echo_req10", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new kt)
        }, !0, kt)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new bc(new bc.RecordClass({
            echo_req10Attr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "832614e4-42cb-2846-7f1d-84472c884ebb"
    }
};
r(bc, "RC_832614e442cb28467f1d84472c884ebb");
var ho = bc;
ho.init();
var By = class By extends e.GenericRecordList {
    static getItemType() {
        return ho
    }
};
r(By, "RL_08ec9fd9082ce97be1a7ef16873ad7f8");
var Jy = By;
var gc = class gc extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("GetWebsiteStatusResponse", "getWebsiteStatusResponseAttr", "GetWebsiteStatusResponse", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Z)
        }, !0, Z)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new gc(new gc.RecordClass({
            getWebsiteStatusResponseAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "09124448-3290-da76-33fe-64666de188c0"
    }
};
r(gc, "RC_091244483290da7633fe64666de188c0");
var wo = gc;
wo.init();
var ky = class ky extends e.GenericRecordList {
    static getItemType() {
        return Xt
    }
};
r(ky, "RL_098222569d614b59c720a7d15f2e16c6");
var _y = ky;
var Ac = class Ac extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("NonParticipatingJurisdiction_LandingCompany", "nonParticipatingJurisdiction_LandingCompanyAttr", "NonParticipatingJurisdiction_LandingCompany", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new mt)
        }, !0, mt)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Ac(new Ac.RecordClass({
            nonParticipatingJurisdiction_LandingCompanyAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "8e2ccc4c-b2bb-c580-c7d8-c36277a3970f"
    }
};
r(Ac, "RC_8e2ccc4cb2bbc580c7d8c36277a3970f");
var Io = Ac;
Io.init();
var Fy = class Fy extends e.GenericRecordList {
    static getItemType() {
        return Io
    }
};
r(Fy, "RL_09aadf2f3a6cc14ff58d7e91ed9aa591");
var Ey = Fy;
var xc = class xc extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2PAdvertInfoRequest", "p2PAdvertInfoRequestAttr", "P2PAdvertInfoRequest", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new er)
        }, !0, er)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new xc(new xc.RecordClass({
            p2PAdvertInfoRequestAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "0a9739b2-dd1c-62d5-697e-ad34293597d7"
    }
};
r(xc, "RC_0a9739b2dd1c62d5697ead34293597d7");
var Po = xc;
Po.init();
var Oc = class Oc extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Dxtrade_all_company", "dxtrade_all_companyAttr", "Dxtrade_all_company", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Ye)
        }, !0, Ye)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Oc(new Oc.RecordClass({
            dxtrade_all_companyAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "0af1f162-a4f1-17f1-f3e8-ae4dce5af0db"
    }
};
r(Oc, "RC_0af1f162a4f117f1f3e8ae4dce5af0db");
var No = Oc;
No.init();
var vc = class vc extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("ServiceToken", "serviceTokenAttr", "ServiceToken", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new ar)
        }, !0, ar)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new vc(new vc.RecordClass({
            serviceTokenAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "0b060544-2077-afaf-f405-34ee187e6408"
    }
};
r(vc, "RC_0b0605442077afaff40534ee187e6408");
var Vo = vc;
Vo.init();
var Rc = class Rc extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Echo_req5", "echo_req5Attr", "Echo_req5", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new or)
        }, !0, or)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Rc(new Rc.RecordClass({
            echo_req5Attr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "177ce791-066f-e3e5-2ef3-d9c99be27198"
    }
};
r(Rc, "RC_177ce791066fe3e52ef3d9c99be27198");
var Lo = Rc;
Lo.init();
var Uy = class Uy extends e.GenericRecordList {
    static getItemType() {
        return Lo
    }
};
r(Uy, "RL_0b481988946c6f5bbb65b67a84007644");
var $y = Uy;
var Cc = class Cc extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("SendbirdService", "sendbirdServiceAttr", "SendbirdService", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new rr)
        }, !0, rr)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Cc(new Cc.RecordClass({
            sendbirdServiceAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "d44f16e3-0a06-0986-4b9b-1cd234f36b0d"
    }
};
r(Cc, "RC_d44f16e30a0609864b9b1cd234f36b0d");
var Go = Cc;
Go.init();
var qy = class qy extends e.GenericRecordList {
    static getItemType() {
        return Go
    }
};
r(qy, "RL_0bdff19b177f7c68e65187599418c3f6");
var My = qy;
var hc = class hc extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("GetLandingCompanyRequest", "getLandingCompanyRequestAttr", "GetLandingCompanyRequest", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Be)
        }, !0, Be)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new hc(new hc.RecordClass({
            getLandingCompanyRequestAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "fbe47240-f7e3-e380-42a8-c23b7b2b02e0"
    }
};
r(hc, "RC_fbe47240f7e3e38042a8c23b7b2b02e0");
var Jo = hc;
Jo.init();
var Wy = class Wy extends e.GenericRecordList {
    static getItemType() {
        return Jo
    }
};
r(Wy, "RL_0c13bf82c0e754513401b974c717dc2b");
var Hy = Wy;
var jy = class jy extends e.GenericRecordList {
    static getItemType() {
        return sr
    }
};
r(jy, "RL_0c323972ef75bc243979fff356a6bb1c");
var zy = jy;
var Ky = class Ky extends e.GenericRecordList {
    static getItemType() {
        return te
    }
};
r(Ky, "RL_0c35eb12ceba02e474ddb698ce43b328");
var re = Ky;
var Zy = class Zy extends e.GenericRecordList {
    static getItemType() {
        return Pe
    }
};
r(Zy, "RL_0c71b2fc045fad5c4e0f7f80c50bd453");
var Yy = Zy;
var Qy = class Qy extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Display_name", "display_nameAttr", "display_name", !1, !1, e.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Required", "requiredAttr", "required", !1, !1, e.DataTypes.LongInteger, function() {
            return e.LongInteger.defaultValue
        }, !0), this.attr("Type", "typeAttr", "type", !1, !1, e.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Value", "valueAttr", "value", !1, !1, e.DataTypes.Text, function() {
            return ""
        }, !0)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
};
r(Qy, "ST_6d6c2d82624fab5eb877e0d87acb2412Structure");
var F = Qy;
F.init();
var eT = class eT extends e.GenericRecordList {
    static getItemType() {
        return F
    }
};
r(eT, "RL_0d533c2c153e6885cd114ba9b586353d");
var Xy = eT;
var wc = class wc extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Echo_req2", "echo_req2Attr", "Echo_req2", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new nr)
        }, !0, nr)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new wc(new wc.RecordClass({
            echo_req2Attr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "0d71b623-ce5a-409a-df80-e6d9d4a7031e"
    }
};
r(wc, "RC_0d71b623ce5a409adf80e6d9d4a7031e");
var Bo = wc;
Bo.init();
var Ic = class Ic extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("DocumentUploadRequest", "documentUploadRequestAttr", "DocumentUploadRequest", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new ir)
        }, !0, ir)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Ic(new Ic.RecordClass({
            documentUploadRequestAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "20eb62e8-6c4b-f568-3a13-4577868b24d1"
    }
};
r(Ic, "RC_20eb62e86c4bf5683a134577868b24d1");
var _o = Ic;
_o.init();
var rT = class rT extends e.GenericRecordList {
    static getItemType() {
        return _o
    }
};
r(rT, "RL_0db7fd9e745d38c354f97f0b888be6d8");
var tT = rT;
var Pc = class Pc extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Trading_platform_available_accountItemCtrader", "trading_platform_available_accountItemCtraderAttr", "Trading_platform_available_accountItemCtrader", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Ff)
        }, !0, Ff)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Pc(new Pc.RecordClass({
            trading_platform_available_accountItemCtraderAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "6bc4d289-68c6-b7a4-6635-811add966ded"
    }
};
r(Pc, "RC_6bc4d28968c6b7a46635811add966ded");
var ko = Pc;
ko.init();
var oT = class oT extends e.GenericRecordList {
    static getItemType() {
        return ko
    }
};
r(oT, "RL_0e22e79825d574ddeb21017d3fee72f5");
var aT = oT;
var Nc = class Nc extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2PAdvertiserUpdateRequest", "p2PAdvertiserUpdateRequestAttr", "P2PAdvertiserUpdateRequest", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new ur)
        }, !0, ur)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Nc(new Nc.RecordClass({
            p2PAdvertiserUpdateRequestAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "0e4c0f67-b048-5239-6e81-eab6b78286b5"
    }
};
r(Nc, "RC_0e4c0f67b04852396e81eab6b78286b5");
var Eo = Nc;
Eo.init();
var sT = class sT extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Account_type", "account_typeAttr", "account_type", !1, !1, e.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Market_type", "market_typeAttr", "market_type", !1, !1, e.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Password", "passwordAttr", "password", !1, !1, e.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Platform", "platformAttr", "platform", !1, !1, e.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Trading_platform_new_account", "trading_platform_new_accountAttr", "trading_platform_new_account", !1, !1, e.DataTypes.LongInteger, function() {
            return e.LongInteger.defaultValue
        }, !0)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
};
r(sT, "ST_1e55b9312d5404a0508ab79716f991e5Structure");
var $ = sT;
$.init();
var Vc = class Vc extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Echo_req14", "echo_req14Attr", "Echo_req14", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new $)
        }, !0, $)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Vc(new Vc.RecordClass({
            echo_req14Attr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "bd7a94a1-cdde-e2bb-163a-6d780a4a63d5"
    }
};
r(Vc, "RC_bd7a94a1cddee2bb163a6d780a4a63d5");
var Fo = Vc;
Fo.init();
var iT = class iT extends e.GenericRecordList {
    static getItemType() {
        return Fo
    }
};
r(iT, "RL_0e99725e97ba854e0e2876195405ac16");
var nT = iT;
var Lc = class Lc extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Nik", "nikAttr", "Nik", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new _e)
        }, !0, _e)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Lc(new Lc.RecordClass({
            nikAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "5a174d68-7425-3917-600b-578d844943be"
    }
};
r(Lc, "RC_5a174d6874253917600b578d844943be");
var $o = Lc;
$o.init();
var cT = class cT extends e.GenericRecordList {
    static getItemType() {
        return $o
    }
};
r(cT, "RL_0ebbc09ab880f9576c75a250e0dd80b4");
var uT = cT;
var Gc = class Gc extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2PAdvertiserListResponse", "p2PAdvertiserListResponseAttr", "P2PAdvertiserListResponse", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new cr)
        }, !0, cr)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Gc(new Gc.RecordClass({
            p2PAdvertiserListResponseAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "0eea76ca-7a3d-c279-121f-6b469bc38e1e"
    }
};
r(Gc, "RC_0eea76ca7a3dc279121f6b469bc38e1e");
var Uo = Gc;
Uo.init();
var lT = class lT extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Completed_orders_count", "completed_orders_countAttr", "completed_orders_count", !1, !1, e.DataTypes.LongInteger, function() {
            return e.LongInteger.defaultValue
        }, !0), this.attr("Id", "idAttr", "id", !1, !1, e.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Is_online", "is_onlineAttr", "is_online", !1, !1, e.DataTypes.LongInteger, function() {
            return e.LongInteger.defaultValue
        }, !0), this.attr("Is_schedule_available", "is_schedule_availableAttr", "is_schedule_available", !1, !1, e.DataTypes.LongInteger, function() {
            return e.LongInteger.defaultValue
        }, !0), this.attr("Last_online_time", "last_online_timeAttr", "last_online_time", !1, !1, e.DataTypes.LongInteger, function() {
            return e.LongInteger.defaultValue
        }, !0), this.attr("Name", "nameAttr", "name", !1, !1, e.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Rating_average", "rating_averageAttr", "rating_average", !1, !1, e.DataTypes.Decimal, function() {
            return e.Decimal.defaultValue
        }, !0), this.attr("Rating_count", "rating_countAttr", "rating_count", !1, !1, e.DataTypes.LongInteger, function() {
            return e.LongInteger.defaultValue
        }, !0), this.attr("Recommended_average", "recommended_averageAttr", "recommended_average", !1, !1, e.DataTypes.LongInteger, function() {
            return e.LongInteger.defaultValue
        }, !0), this.attr("Recommended_count", "recommended_countAttr", "recommended_count", !1, !1, e.DataTypes.LongInteger, function() {
            return e.LongInteger.defaultValue
        }, !0), this.attr("Total_completion_rate", "total_completion_rateAttr", "total_completion_rate", !1, !1, e.DataTypes.Decimal, function() {
            return e.Decimal.defaultValue
        }, !0)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
};
r(lT, "ST_0f26f05434152502582c3f26aae414f1Structure");
var ae = lT;
ae.init();
var pT = class pT extends e.GenericRecordList {
    static getItemType() {
        return lr
    }
};
r(pT, "RL_0f70af24101cfcf6a86201a88d67a596");
var dT = pT;
var fT = class fT extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Trading_platform_new_account", "trading_platform_new_accountAttr", "trading_platform_new_account", !1, !1, e.DataTypes.LongInteger, function() {
            return e.LongInteger.defaultValue
        }, !0), this.attr("Account_type", "account_typeAttr", "account_type", !1, !1, e.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Market_type", "market_typeAttr", "market_type", !1, !1, e.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Password", "passwordAttr", "password", !1, !1, e.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Platform", "platformAttr", "platform", !1, !1, e.DataTypes.Text, function() {
            return ""
        }, !0)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
};
r(fT, "ST_0f7be4ac68673923b2b4b44ce40dcec1Structure");
var oe = fT;
oe.init();
var yT = class yT extends e.GenericRecordList {
    static getItemType() {
        return dr
    }
};
r(yT, "RL_0fd675088573602f70fccecb4a8edbc5");
var mT = yT;
var Jc = class Jc extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Echo_req13", "echo_req13Attr", "Echo_req13", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new pr)
        }, !0, pr)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Jc(new Jc.RecordClass({
            echo_req13Attr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "644701ec-7e0c-c471-c137-db9f55944f2f"
    }
};
r(Jc, "RC_644701ec7e0cc471c137db9f55944f2f");
var Mo = Jc;
Mo.init();
var ST = class ST extends e.GenericRecordList {
    static getItemType() {
        return Mo
    }
};
r(ST, "RL_10077f623e910c5c644432e024b51bb7");
var TT = ST;
var bT = class bT extends e.GenericRecordList {
    static getItemType() {
        return fo
    }
};
r(bT, "RL_10f2dc321384405a2c0e9f4711d0d4de");
var DT = bT;
var gT = class gT extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Name", "nameAttr", "Name", !1, !1, e.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Value", "valueAttr", "Value", !1, !1, e.DataTypes.Text, function() {
            return ""
        }, !0)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
};
r(gT, "ST_e570cde2d15d2cadea5c6f746eaeeeafStructure");
var se = gT;
se.init();
var Bc = class Bc extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("HTTPHeader2", "hTTPHeader2Attr", "HTTPHeader2", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new se)
        }, !0, se)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Bc(new Bc.RecordClass({
            hTTPHeader2Attr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "72dda278-92f0-9ec6-8682-0cd810b01561"
    }
};
r(Bc, "RC_72dda27892f09ec686820cd810b01561");
var qo = Bc;
qo.init();
var xT = class xT extends e.GenericRecordList {
    static getItemType() {
        return qo
    }
};
r(xT, "RL_1111f5cfe9205761667c09780a933db7");
var AT = xT;
var vT = class vT extends e.GenericRecordList {
    static getItemType() {
        return mr
    }
};
r(vT, "RL_11d6eb7e137d31b8bce20a34fef0d788");
var OT = vT;
var CT = class CT extends e.GenericRecordList {
    static getItemType() {
        return Ut
    }
};
r(CT, "RL_126434276122aa915715df7da7c75609");
var RT = CT;
var _c = class _c extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Echo_req6", "echo_req6Attr", "Echo_req6", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new yr)
        }, !0, yr)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new _c(new _c.RecordClass({
            echo_req6Attr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "127d33c3-734e-3f0c-ecd5-3087584e156c"
    }
};
r(_c, "RC_127d33c3734e3f0cecd53087584e156c");
var Ho = _c;
Ho.init();
var wT = class wT extends e.GenericRecordList {
    static getItemType() {
        return Tr
    }
};
r(wT, "RL_12d1ba6d0f7dc76efbcc2fac29abf585");
var hT = wT;
var kc = class kc extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("AUD", "aUDAttr", "AUD", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new We)
        }, !0, We)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new kc(new kc.RecordClass({
            aUDAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "334ec8eb-11cb-b1f9-00eb-82a622de6be5"
    }
};
r(kc, "RC_334ec8eb11cbb1f900eb82a622de6be5");
var Wo = kc;
Wo.init();
var PT = class PT extends e.GenericRecordList {
    static getItemType() {
        return Wo
    }
};
r(PT, "RL_130306c98b85aa803514000e3331edb0");
var IT = PT;
var Ec = class Ec extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Currency_config2", "currency_config2Attr", "Currency_config2", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Qe)
        }, !0, Qe)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Ec(new Ec.RecordClass({
            currency_config2Attr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "131ec4af-e292-e506-94c2-940b1e3c9a73"
    }
};
r(Ec, "RC_131ec4afe292e50694c2940b1e3c9a73");
var zo = Ec;
zo.init();
var VT = class VT extends e.GenericRecordList {
    static getItemType() {
        return Dr
    }
};
r(VT, "RL_1333403c8473cebcdce283d3f038a58c");
var NT = VT;
var Fc = class Fc extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Trading", "tradingAttr", "Trading", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Jt)
        }, !0, Jt)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Fc(new Fc.RecordClass({
            tradingAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "d54336ec-6049-dff9-c99f-14fd62e782c4"
    }
};
r(Fc, "RC_d54336ec6049dff9c99f14fd62e782c4");
var jo = Fc;
jo.init();
var GT = class GT extends e.GenericRecordList {
    static getItemType() {
        return jo
    }
};
r(GT, "RL_13576b5dee00a62e9c40a0c658db0a38");
var LT = GT;
var BT = class BT extends e.GenericRecordList {
    static getItemType() {
        return Ce
    }
};
r(BT, "RL_13f4e7ea22b9e316259c119567103cf9");
var JT = BT;
var kT = class kT extends e.GenericRecordList {
    static getItemType() {
        return Ye
    }
};
r(kT, "RL_143abbfebca3c373ef0923e4c8b26336");
var _T = kT;
var FT = class FT extends e.GenericRecordList {
    static getItemType() {
        return gt
    }
};
r(FT, "RL_14c5bb80b83da1321f2059f42deabf95");
var ET = FT;
var UT = class UT extends e.GenericRecordList {
    static getItemType() {
        return br
    }
};
r(UT, "RL_1659ef22005bb5893eb1c95011619009");
var $T = UT;
var $c = class $c extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2PAdvertiserCreateResponse", "p2PAdvertiserCreateResponseAttr", "P2PAdvertiserCreateResponse", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new gr)
        }, !0, gr)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new $c(new $c.RecordClass({
            p2PAdvertiserCreateResponseAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "169ba1f5-7e05-3870-b84c-de6379a8d367"
    }
};
r($c, "RC_169ba1f57e053870b84cde6379a8d367");
var Ko = $c;
Ko.init();
var Uc = class Uc extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Platform_url", "platform_urlAttr", "Platform_url", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new ct)
        }, !0, ct)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Uc(new Uc.RecordClass({
            platform_urlAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "31f62058-9c23-b6cb-76ee-cd5ffbdcff89"
    }
};
r(Uc, "RC_31f620589c23b6cb76eecd5ffbdcff89");
var Yo = Uc;
Yo.init();
var qT = class qT extends e.GenericRecordList {
    static getItemType() {
        return Yo
    }
};
r(qT, "RL_170db2205fb819d098837fbce8de05cd");
var MT = qT;
var Mc = class Mc extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2POrderInfoRequest", "p2POrderInfoRequestAttr", "P2POrderInfoRequest", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Ar)
        }, !0, Ar)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Mc(new Mc.RecordClass({
            p2POrderInfoRequestAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "172b8dd4-a9be-ebc4-b3ea-80a0def2b2fe"
    }
};
r(Mc, "RC_172b8dd4a9beebc4b3ea80a0def2b2fe");
var Zo = Mc;
Zo.init();
var qc = class qc extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("LoginHistoryRequest", "loginHistoryRequestAttr", "LoginHistoryRequest", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new xr)
        }, !0, xr)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new qc(new qc.RecordClass({
            loginHistoryRequestAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "2b9ce541-263d-e6cf-9008-8eb6665236ea"
    }
};
r(qc, "RC_2b9ce541263de6cf90088eb6665236ea");
var Qo = qc;
Qo.init();
var WT = class WT extends e.GenericRecordList {
    static getItemType() {
        return Qo
    }
};
r(WT, "RL_17364cfe47b7832a9885e85b408e32b2");
var HT = WT;
var zT = class zT extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Echo_req", "echo_reqAttr", "echo_req", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new $)
        }, !0, $), this.attr("Error", "errorAttr", "error", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new K)
        }, !0, K), this.attr("Msg_type", "msg_typeAttr", "msg_type", !1, !1, e.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Trading_platform_new_account", "trading_platform_new_accountAttr", "trading_platform_new_account", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Se)
        }, !0, Se)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
};
r(zT, "ST_17a41c5de85fc25b7713c6576534b176Structure");
var ne = zT;
ne.init();
var KT = class KT extends e.GenericRecordList {
    static getItemType() {
        return vr
    }
};
r(KT, "RL_17c1c88f1431ca6ce7bfc6ae6eb41ed4");
var jT = KT;
var ZT = class ZT extends e.GenericRecordList {
    static getItemType() {
        return je
    }
};
r(ZT, "RL_18994bd1cd31a465f2635a0d68fa478a");
var YT = ZT;
var Hc = class Hc extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2PAdvertiserInfoResponse", "p2PAdvertiserInfoResponseAttr", "P2PAdvertiserInfoResponse", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Rr)
        }, !0, Rr)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Hc(new Hc.RecordClass({
            p2PAdvertiserInfoResponseAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "dfbe7737-63c5-31fd-0720-12a9fe708316"
    }
};
r(Hc, "RC_dfbe773763c531fd072012a9fe708316");
var Xo = Hc;
Xo.init();
var XT = class XT extends e.GenericRecordList {
    static getItemType() {
        return Xo
    }
};
r(XT, "RL_18a059102e367451eb780e1388f118f5");
var QT = XT;
var eS = class eS extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Name", "nameAttr", "Name", !1, !1, e.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Value", "valueAttr", "Value", !1, !1, e.DataTypes.Text, function() {
            return ""
        }, !0)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
};
r(eS, "ST_47cb5eee6d4ef4327d9bcca9c13fccceStructure");
var ie = eS;
ie.init();
var tS = class tS extends e.GenericRecordList {
    static getItemType() {
        return ie
    }
};
r(tS, "RL_3d3500211cb1b36e6cbf60493db1facb");
var es = tS;
var rS = class rS extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("BaseURL", "baseURLAttr", "BaseURL", !1, !1, e.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("URLPath", "uRLPathAttr", "URLPath", !1, !1, e.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("URLQueryParameters", "uRLQueryParametersAttr", "URLQueryParameters", !1, !1, e.DataTypes.RecordList, function() {
            return e.ImmutableBase.getData(new es)
        }, !0, es), this.attr("HTTPMethod", "hTTPMethodAttr", "HTTPMethod", !1, !1, e.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Headers", "headersAttr", "Headers", !1, !1, e.DataTypes.RecordList, function() {
            return e.ImmutableBase.getData(new re)
        }, !0, re), this.attr("RequestText", "requestTextAttr", "RequestText", !1, !1, e.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("RequestBinary", "requestBinaryAttr", "RequestBinary", !1, !1, e.DataTypes.BinaryData, function() {
            return e.BinaryData.defaultValue
        }, !0)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
};
r(rS, "ST_18a578e4f8f25852aec011d4055e28d1Structure");
var ue = rS;
ue.init();
var Wc = class Wc extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Product_detail", "product_detailAttr", "Product_detail", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Le)
        }, !0, Le)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Wc(new Wc.RecordClass({
            product_detailAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "18cf7a63-3c2e-b19c-8f4a-71d50c228fa8"
    }
};
r(Wc, "RC_18cf7a633c2eb19c8f4a71d50c228fa8");
var ts = Wc;
ts.init();
var zc = class zc extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Echo_req4", "echo_req4Attr", "Echo_req4", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Cr)
        }, !0, Cr)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new zc(new zc.RecordClass({
            echo_req4Attr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "d748f9b2-c205-0386-4494-73bdb4b3b0cb"
    }
};
r(zc, "RC_d748f9b2c2050386449473bdb4b3b0cb");
var rs = zc;
rs.init();
var oS = class oS extends e.GenericRecordList {
    static getItemType() {
        return rs
    }
};
r(oS, "RL_18e77429a52b049bf869659c0cf9f64f");
var aS = oS;
var jc = class jc extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("StateListRequest", "stateListRequestAttr", "StateListRequest", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new hr)
        }, !0, hr)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new jc(new jc.RecordClass({
            stateListRequestAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "18ece4d5-d5de-8052-51b5-b7c411edc0a0"
    }
};
r(jc, "RC_18ece4d5d5de805251b5b7c411edc0a0");
var as = jc;
as.init();
var Kc = class Kc extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Dxtrade_status", "dxtrade_statusAttr", "Dxtrade_status", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new zt)
        }, !0, zt)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Kc(new Kc.RecordClass({
            dxtrade_statusAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "191172c9-4e64-292c-8bf1-a2dce4b5e876"
    }
};
r(Kc, "RC_191172c94e64292c8bf1a2dce4b5e876");
var os = Kc;
os.init();
var Yc = class Yc extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Tax", "taxAttr", "Tax", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Tt)
        }, !0, Tt)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Yc(new Yc.RecordClass({
            taxAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "19aa8964-1c73-98ce-acf4-370c69126f64"
    }
};
r(Yc, "RC_19aa89641c7398ceacf4370c69126f64");
var ss = Yc;
ss.init();
var Zc = class Zc extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("IDR2", "iDR2Attr", "IDR2", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new wr)
        }, !0, wr)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Zc(new Zc.RecordClass({
            iDR2Attr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "19cbceda-d67b-422e-c73a-8118b5b40a41"
    }
};
r(Zc, "RC_19cbcedad67b422ec73a8118b5b40a41");
var ns = Zc;
ns.init();
var nS = class nS extends e.GenericRecordList {
    static getItemType() {
        return So
    }
};
r(nS, "RL_19fdcf365ab6aa26528a4b518cbfcf32");
var sS = nS;
var Qc = class Qc extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Mt_financial_company", "mt_financial_companyAttr", "Mt_financial_company", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new tt)
        }, !0, tt)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Qc(new Qc.RecordClass({
            mt_financial_companyAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "39bf756e-3f16-0420-2cf1-d7ac5fb3b260"
    }
};
r(Qc, "RC_39bf756e3f1604202cf1d7ac5fb3b260");
var is = Qc;
is.init();
var uS = class uS extends e.GenericRecordList {
    static getItemType() {
        return is
    }
};
r(uS, "RL_1a2d97d3def0e6b808795f4f98a3a588");
var iS = uS;
var lS = class lS extends e.GenericRecordList {
    static getItemType() {
        return gr
    }
};
r(lS, "RL_1ad625019f4848d09f7266282d4e315e");
var cS = lS;
var Xc = class Xc extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Feature_flag", "feature_flagAttr", "Feature_flag", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Ir)
        }, !0, Ir)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Xc(new Xc.RecordClass({
            feature_flagAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "1b2532ef-629f-2b32-59be-b09a3dc495b4"
    }
};
r(Xc, "RC_1b2532ef629f2b3259beb09a3dc495b4");
var us = Xc;
us.init();
var el = class el extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Turnover", "turnoverAttr", "Turnover", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Ct)
        }, !0, Ct)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new el(new el.RecordClass({
            turnoverAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "ea9565dd-c265-550c-2d38-c39dc154035f"
    }
};
r(el, "RC_ea9565ddc265550c2d38c39dc154035f");
var cs = el;
cs.init();
var pS = class pS extends e.GenericRecordList {
    static getItemType() {
        return cs
    }
};
r(pS, "RL_1b71a02dea96d4cd97c73eba8bb674c6");
var dS = pS;
var mS = class mS extends e.GenericRecordList {
    static getItemType() {
        return Nr
    }
};
r(mS, "RL_1c3088abbab1e36a4992a44ac6444a28");
var fS = mS;
var TS = class TS extends e.GenericRecordList {
    static getItemType() {
        return H
    }
};
r(TS, "RL_1d3883baf2a25f26e9aa7de12c9a4468");
var yS = TS;
var DS = class DS extends e.GenericRecordList {
    static getItemType() {
        return Lr
    }
};
r(DS, "RL_1dae29f574cdcca95ce8a85935b8f3fa");
var SS = DS;
var tl = class tl extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("URLQueryParameter", "uRLQueryParameterAttr", "URLQueryParameter", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new ie)
        }, !0, ie)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new tl(new tl.RecordClass({
            uRLQueryParameterAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "abb03290-3fc2-fb13-ecee-dc8d229aaabf"
    }
};
r(tl, "RC_abb032903fc2fb13eceedc8d229aaabf");
var ls = tl;
ls.init();
var gS = class gS extends e.GenericRecordList {
    static getItemType() {
        return ls
    }
};
r(gS, "RL_1dbda2318f3d93e22905fba5e14b0956");
var bS = gS;
var xS = class xS extends e.GenericRecordList {
    static getItemType() {
        return Ne
    }
};
r(xS, "RL_1dc527401e57829601dc86609514b95f");
var AS = xS;
var rl = class rl extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("DemoItem", "demoItemAttr", "DemoItem", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Ef)
        }, !0, Ef)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new rl(new rl.RecordClass({
            demoItemAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "f643b3ac-fc27-a4fe-cd1e-2e4d216ea947"
    }
};
r(rl, "RC_f643b3acfc27a4fecd1e2e4d216ea947");
var ds = rl;
ds.init();
var vS = class vS extends e.GenericRecordList {
    static getItemType() {
        return ds
    }
};
r(vS, "RL_1dea2ab8630085ef26828f80f7648065");
var OS = vS;
var al = class al extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("GetGetSettingsResponse", "getGetSettingsResponseAttr", "GetGetSettingsResponse", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new kr)
        }, !0, kr)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new al(new al.RecordClass({
            getGetSettingsResponseAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "a1310fc4-b666-4d1d-807e-e5336bf20c28"
    }
};
r(al, "RC_a1310fc4b6664d1d807ee5336bf20c28");
var ps = al;
ps.init();
var CS = class CS extends e.GenericRecordList {
    static getItemType() {
        return ps
    }
};
r(CS, "RL_1e027ac5f8769ea4d4adbbcc7903f418");
var RS = CS;
var ol = class ol extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2PAdvertInfo", "p2PAdvertInfoAttr", "P2PAdvertInfo", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Pr)
        }, !0, Pr)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new ol(new ol.RecordClass({
            p2PAdvertInfoAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "1e93678e-eb2c-f74d-c2fe-ef60cb655062"
    }
};
r(ol, "RC_1e93678eeb2cf74dc2feef60cb655062");
var fs = ol;
fs.init();
var wS = class wS extends e.GenericRecordList {
    static getItemType() {
        return Be
    }
};
r(wS, "RL_1ee2701fb233e597575036a6d1cfcb5b");
var hS = wS;
var sl = class sl extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Trading_experience_regulated", "trading_experience_regulatedAttr", "Trading_experience_regulated", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Er)
        }, !0, Er)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new sl(new sl.RecordClass({
            trading_experience_regulatedAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "602d30d2-5172-58c1-7f17-cacc00827d33"
    }
};
r(sl, "RC_602d30d2517258c17f17cacc00827d33");
var ms = sl;
ms.init();
var PS = class PS extends e.GenericRecordList {
    static getItemType() {
        return ms
    }
};
r(PS, "RL_1f4f73f3e46b4a334991485ac13ee1d2");
var IS = PS;
var nl = class nl extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2PAdvertiserCreateRequest", "p2PAdvertiserCreateRequestAttr", "P2PAdvertiserCreateRequest", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Fr)
        }, !0, Fr)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new nl(new nl.RecordClass({
            p2PAdvertiserCreateRequestAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "c42160ad-5158-80f4-7b5a-0f78fe1a495c"
    }
};
r(nl, "RC_c42160ad515880f47b5a0f78fe1a495c");
var ys = nl;
ys.init();
var VS = class VS extends e.GenericRecordList {
    static getItemType() {
        return ys
    }
};
r(VS, "RL_2053af017804ccdd2b9c3428357fafcc");
var NS = VS;
var il = class il extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2PAdvertiserInfoRequest", "p2PAdvertiserInfoRequestAttr", "P2PAdvertiserInfoRequest", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new $r)
        }, !0, $r)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new il(new il.RecordClass({
            p2PAdvertiserInfoRequestAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "2058a904-a5af-7403-07bc-28a7bafc955c"
    }
};
r(il, "RC_2058a904a5af740307bc28a7bafc955c");
var Ts = il;
Ts.init();
var ul = class ul extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Local_currency2", "local_currency2Attr", "Local_currency2", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Ur)
        }, !0, Ur)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new ul(new ul.RecordClass({
            local_currency2Attr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "2081831f-b79d-9a80-56f0-4161074e9cd5"
    }
};
r(ul, "RC_2081831fb79d9a8056f04161074e9cd5");
var Ss = ul;
Ss.init();
var cl = class cl extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("After_first_deposit", "after_first_depositAttr", "After_first_deposit", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Pe)
        }, !0, Pe)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new cl(new cl.RecordClass({
            after_first_depositAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "a336dc96-fafc-2e7f-fdb8-8fdcc24fe482"
    }
};
r(cl, "RC_a336dc96fafc2e7ffdb88fdcc24fe482");
var Ds = cl;
Ds.init();
var GS = class GS extends e.GenericRecordList {
    static getItemType() {
        return Ds
    }
};
r(GS, "RL_2083bc83b9d077075ef50c2bd63b6965");
var LS = GS;
var ll = class ll extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Mt5_new_accountItem", "mt5_new_accountItemAttr", "Mt5_new_accountItem", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Mr)
        }, !0, Mr)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new ll(new ll.RecordClass({
            mt5_new_accountItemAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "210d3c7c-0382-d69c-0f14-edb5d1eb7d2c"
    }
};
r(ll, "RC_210d3c7c0382d69c0f14edb5d1eb7d2c");
var bs = ll;
bs.init();
var BS = class BS extends e.GenericRecordList {
    static getItemType() {
        return bs
    }
};
r(BS, "RL_21a53417044e5801f591fd68a063d1de");
var JS = BS;
var dl = class dl extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Onfido", "onfidoAttr", "Onfido", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new gt)
        }, !0, gt)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new dl(new dl.RecordClass({
            onfidoAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "6da37637-b059-3f4e-c39c-bdb7fca0818f"
    }
};
r(dl, "RC_6da37637b0593f4ec39cbdb7fca0818f");
var gs = dl;
gs.init();
var kS = class kS extends e.GenericRecordList {
    static getItemType() {
        return gs
    }
};
r(kS, "RL_21aa582dbaa7e503639ee59cca230a00");
var _S = kS;
var pl = class pl extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Jurisdiction_risk_assessment", "jurisdiction_risk_assessmentAttr", "Jurisdiction_risk_assessment", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new ht)
        }, !0, ht)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new pl(new pl.RecordClass({
            jurisdiction_risk_assessmentAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "30490951-2908-54c2-926b-2cf8ec7b4a20"
    }
};
r(pl, "RC_30490951290854c2926b2cf8ec7b4a20");
var As = pl;
As.init();
var FS = class FS extends e.GenericRecordList {
    static getItemType() {
        return As
    }
};
r(FS, "RL_222c4cca834a8b261e24304f207bc884");
var ES = FS;
var US = class US extends e.GenericRecordList {
    static getItemType() {
        return qr
    }
};
r(US, "RL_2249cd644da747f0537bdd3570d34b56");
var $S = US;
var fl = class fl extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Max_requestes_general", "max_requestes_generalAttr", "Max_requestes_general", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new $t)
        }, !0, $t)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new fl(new fl.RecordClass({
            max_requestes_generalAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "224fc997-0e96-93b0-73b4-9748bfa1459a"
    }
};
r(fl, "RC_224fc9970e9693b073b49748bfa1459a");
var xs = fl;
xs.init();
var ml = class ml extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Platform", "platformAttr", "Platform", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Mt)
        }, !0, Mt)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new ml(new ml.RecordClass({
            platformAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "2296852f-b68f-fc0d-98bf-144361127c38"
    }
};
r(ml, "RC_2296852fb68ffc0d98bf144361127c38");
var Os = ml;
Os.init();
var yl = class yl extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("PostAuthorizeRequest", "postAuthorizeRequestAttr", "PostAuthorizeRequest", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Hr)
        }, !0, Hr)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new yl(new yl.RecordClass({
            postAuthorizeRequestAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "236b9780-ed98-eefd-23c7-d452d5b32785"
    }
};
r(yl, "RC_236b9780ed98eefd23c7d452d5b32785");
var vs = yl;
vs.init();
var Tl = class Tl extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Get_financial_assessment", "get_financial_assessmentAttr", "Get_financial_assessment", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Wr)
        }, !0, Wr)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Tl(new Tl.RecordClass({
            get_financial_assessmentAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "239599f6-248b-b8d7-ef24-6b2e5fd1c9f4"
    }
};
r(Tl, "RC_239599f6248bb8d7ef246b2e5fd1c9f4");
var Rs = Tl;
Rs.init();
var qS = class qS extends e.GenericRecordList {
    static getItemType() {
        return nr
    }
};
r(qS, "RL_23c5170e5cae92676806075f1dc0926f");
var MS = qS;
var WS = class WS extends e.GenericRecordList {
    static getItemType() {
        return jr
    }
};
r(WS, "RL_24d00c079b23f7e47e2ee86991545c06");
var HS = WS;
var Sl = class Sl extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("ChatResponse", "chatResponseAttr", "ChatResponse", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Kr)
        }, !0, Kr)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Sl(new Sl.RecordClass({
            chatResponseAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "f67acfc2-edb3-49f3-9f53-1637fcf64924"
    }
};
r(Sl, "RC_f67acfc2edb349f39f531637fcf64924");
var Cs = Sl;
Cs.init();
var jS = class jS extends e.GenericRecordList {
    static getItemType() {
        return Cs
    }
};
r(jS, "RL_24d759ee687c211ac7033a77a13d226f");
var zS = jS;
var YS = class YS extends e.GenericRecordList {
    static getItemType() {
        return Ee
    }
};
r(YS, "RL_25008888c069155597e1a02e1b9ea813");
var KS = YS;
var Dl = class Dl extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("PostNewAccountVirtualResponse", "postNewAccountVirtualResponseAttr", "PostNewAccountVirtualResponse", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Bt)
        }, !0, Bt)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Dl(new Dl.RecordClass({
            postNewAccountVirtualResponseAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "96175866-bef7-bdbf-7496-5597575b319c"
    }
};
r(Dl, "RC_96175866bef7bdbf74965597575b319c");
var hs = Dl;
hs.init();
var QS = class QS extends e.GenericRecordList {
    static getItemType() {
        return hs
    }
};
r(QS, "RL_2567d50fd0e540a33e71ee0dd4edef5d");
var ZS = QS;
var bl = class bl extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("StateList2", "stateList2Attr", "StateList2", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new qr)
        }, !0, qr)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new bl(new bl.RecordClass({
            stateList2Attr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "e8ee0dbc-2253-234a-59bc-e144fb184297"
    }
};
r(bl, "RC_e8ee0dbc2253234a59bce144fb184297");
var ws = bl;
ws.init();
var eD = class eD extends e.GenericRecordList {
    static getItemType() {
        return ws
    }
};
r(eD, "RL_25c69d60a99eff98bc1861f4dbb035a0");
var XS = eD;
var gl = class gl extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Landing_company", "landing_companyAttr", "Landing_company", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new rt)
        }, !0, rt)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new gl(new gl.RecordClass({
            landing_companyAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "e1b3eaed-bd13-3d4e-bfdb-497dc119e9c1"
    }
};
r(gl, "RC_e1b3eaedbd133d4ebfdb497dc119e9c1");
var Is = gl;
Is.init();
var rD = class rD extends e.GenericRecordList {
    static getItemType() {
        return Is
    }
};
r(rD, "RL_25ca4d2fe256f651a7214d9f28b70caa");
var tD = rD;
var oD = class oD extends e.GenericRecordList {
    static getItemType() {
        return Yr
    }
};
r(oD, "RL_260232560d4d04c2013fce278e787f24");
var aD = oD;
var Al = class Al extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("KYCAuthStatusRequest", "kYCAuthStatusRequestAttr", "KYCAuthStatusRequest", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Zr)
        }, !0, Zr)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Al(new Al.RecordClass({
            kYCAuthStatusRequestAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "264d82ff-2942-8f3c-d43e-be0810111d5a"
    }
};
r(Al, "RC_264d82ff29428f3cd43ebe0810111d5a");
var Ps = Al;
Ps.init();
var xl = class xl extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("PostTradingPlatformNewAccountRequest", "postTradingPlatformNewAccountRequestAttr", "PostTradingPlatformNewAccountRequest", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new oe)
        }, !0, oe)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new xl(new xl.RecordClass({
            postTradingPlatformNewAccountRequestAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "27f77107-e985-9b58-a9ad-44fa7a42ad70"
    }
};
r(xl, "RC_27f77107e9859b58a9ad44fa7a42ad70");
var Ns = xl;
Ns.init();
var Ol = class Ol extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Currencies_config", "currencies_configAttr", "Currencies_config", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Wt)
        }, !0, Wt)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Ol(new Ol.RecordClass({
            currencies_configAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "2827a9b1-8791-37de-b3aa-a08d45397068"
    }
};
r(Ol, "RC_2827a9b1879137deb3aaa08d45397068");
var Vs = Ol;
Vs.init();
var vl = class vl extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("GetAssetIndexResponse", "getAssetIndexResponseAttr", "GetAssetIndexResponse", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Qr)
        }, !0, Qr)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new vl(new vl.RecordClass({
            getAssetIndexResponseAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "2838f738-beb9-0761-e9ec-634e42207f58"
    }
};
r(vl, "RC_2838f738beb90761e9ec634e42207f58");
var Ls = vl;
Ls.init();
var Rl = class Rl extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Document", "documentAttr", "Document", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new ge)
        }, !0, ge)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Rl(new Rl.RecordClass({
            documentAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "288f369a-ef43-887c-2cd0-e3a40ac97aef"
    }
};
r(Rl, "RC_288f369aef43887c2cd0e3a40ac97aef");
var Gs = Rl;
Gs.init();
var Cl = class Cl extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2POrderCancelRequest", "p2POrderCancelRequestAttr", "P2POrderCancelRequest", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Xr)
        }, !0, Xr)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Cl(new Cl.RecordClass({
            p2POrderCancelRequestAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "31374cc3-19a3-3edc-2c32-77744eb207a6"
    }
};
r(Cl, "RC_31374cc319a33edc2c3277744eb207a6");
var Js = Cl;
Js.init();
var nD = class nD extends e.GenericRecordList {
    static getItemType() {
        return Js
    }
};
r(nD, "RL_28998766f8c046c9335904011fbbefd7");
var sD = nD;
var hl = class hl extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("National_identity_card", "national_identity_cardAttr", "National_identity_card", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Dt)
        }, !0, Dt)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new hl(new hl.RecordClass({
            national_identity_cardAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "82e915cb-6126-9c2e-1fb3-0ed84469e07b"
    }
};
r(hl, "RC_82e915cb61269c2e1fb30ed84469e07b");
var Bs = hl;
Bs.init();
var uD = class uD extends e.GenericRecordList {
    static getItemType() {
        return Bs
    }
};
r(uD, "RL_29080a69ee1ce69b9b697bf94281f9ff");
var iD = uD;
var wl = class wl extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Non_participating_jurisdiction", "non_participating_jurisdictionAttr", "Non_participating_jurisdiction", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new yt)
        }, !0, yt)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new wl(new wl.RecordClass({
            non_participating_jurisdictionAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "cd5e42a0-793d-8eb6-9fbc-5056fff3f372"
    }
};
r(wl, "RC_cd5e42a0793d8eb69fbc5056fff3f372");
var _s = wl;
_s.init();
var lD = class lD extends e.GenericRecordList {
    static getItemType() {
        return _s
    }
};
r(lD, "RL_296c80117ea3feed92d93a9342c06001");
var cD = lD;
var dD = class dD extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("StatusCode", "statusCodeAttr", "StatusCode", !1, !1, e.DataTypes.Integer, function() {
            return 0
        }, !0), this.attr("StatusLine", "statusLineAttr", "StatusLine", !1, !1, e.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Headers", "headersAttr", "Headers", !1, !1, e.DataTypes.RecordList, function() {
            return e.ImmutableBase.getData(new re)
        }, !0, re), this.attr("ResponseText", "responseTextAttr", "ResponseText", !1, !1, e.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("ResponseBinary", "responseBinaryAttr", "ResponseBinary", !1, !1, e.DataTypes.BinaryData, function() {
            return e.BinaryData.defaultValue
        }, !0)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
};
r(dD, "ST_d521c1d83421a832ffbd8b853bf43c98Structure");
var ce = dD;
ce.init();
var fD = class fD extends e.GenericRecordList {
    static getItemType() {
        return ce
    }
};
r(fD, "RL_2b07530ab95955b415e0d47b20046870");
var pD = fD;
var yD = class yD extends e.GenericRecordList {
    static getItemType() {
        return He
    }
};
r(yD, "RL_2b1a3419eafdbc343d89f210b76f82c7");
var mD = yD;
var Il = class Il extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("ServiceTokenResponse", "serviceTokenResponseAttr", "ServiceTokenResponse", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new ta)
        }, !0, ta)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Il(new Il.RecordClass({
            serviceTokenResponseAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "2b27eac2-43a7-0dcd-c8d6-ad57a1a8b8af"
    }
};
r(Il, "RC_2b27eac243a70dcdc8d6ad57a1a8b8af");
var ks = Il;
ks.init();
var Pl = class Pl extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("GetMT5LoginListResponse", "getMT5LoginListResponseAttr", "GetMT5LoginListResponse", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new oa)
        }, !0, oa)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Pl(new Pl.RecordClass({
            getMT5LoginListResponseAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "5c073669-af4d-1bb9-a059-222c06ae3a49"
    }
};
r(Pl, "RC_5c073669af4d1bb9a059222c06ae3a49");
var Es = Pl;
Es.init();
var SD = class SD extends e.GenericRecordList {
    static getItemType() {
        return Es
    }
};
r(SD, "RL_2bc6600c37d3f99d4190f0fccf1bad67");
var TD = SD;
var Nl = class Nl extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Asset_indexItem", "asset_indexItemAttr", "Asset_indexItem", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new qf)
        }, !0, qf)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Nl(new Nl.RecordClass({
            asset_indexItemAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "2bf25d62-d530-e43a-49ce-5fb7ed436ea0"
    }
};
r(Nl, "RC_2bf25d62d530e43a49ce5fb7ed436ea0");
var Fs = Nl;
Fs.init();
var bD = class bD extends e.GenericRecordList {
    static getItemType() {
        return ns
    }
};
r(bD, "RL_2bf38081f793cc6bdbb750e00466b9fc");
var DD = bD;
var AD = class AD extends e.GenericRecordList {
    static getItemType() {
        return Ss
    }
};
r(AD, "RL_2c050584f5f999c4a429248dacf4dd97");
var gD = AD;
var Vl = class Vl extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2POrderConfirmResponse", "p2POrderConfirmResponseAttr", "P2POrderConfirmResponse", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new sa)
        }, !0, sa)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Vl(new Vl.RecordClass({
            p2POrderConfirmResponseAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "2ccf07e5-bcc4-c939-49f8-4625930efb62"
    }
};
r(Vl, "RC_2ccf07e5bcc4c93949f84625930efb62");
var $s = Vl;
$s.init();
var Ll = class Ll extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("PostTradingPlatformAvailableAccountResponseCtrader", "postTradingPlatformAvailableAccountResponseCtraderAttr", "PostTradingPlatformAvailableAccountResponseCtrader", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new jr)
        }, !0, jr)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Ll(new Ll.RecordClass({
            postTradingPlatformAvailableAccountResponseCtraderAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "f4690c82-1393-576c-d1cd-e60070daa64f"
    }
};
r(Ll, "RC_f4690c821393576cd1cde60070daa64f");
var Us = Ll;
Us.init();
var OD = class OD extends e.GenericRecordList {
    static getItemType() {
        return Us
    }
};
r(OD, "RL_2d46a49728c41d7be4ec88ca0d4e8266");
var xD = OD;
var Gl = class Gl extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Limit", "limitAttr", "Limit", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Nt)
        }, !0, Nt)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Gl(new Gl.RecordClass({
            limitAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "441f684d-3efb-a387-3565-54fe17c62bec"
    }
};
r(Gl, "RC_441f684d3efba387356554fe17c62bec");
var Ms = Gl;
Ms.init();
var RD = class RD extends e.GenericRecordList {
    static getItemType() {
        return Ms
    }
};
r(RD, "RL_2d74cc19c3ab1a029c34be65ea3b289a");
var vD = RD;
var hD = class hD extends e.GenericRecordList {
    static getItemType() {
        return Jr
    }
};
r(hD, "RL_2e550e70d4f60fcf474568418d9dcf73");
var CD = hD;
var Jl = class Jl extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Fiat", "fiatAttr", "Fiat", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new qt)
        }, !0, qt)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Jl(new Jl.RecordClass({
            fiatAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "2e6da4a8-98d5-5ae9-6aab-51b6e09d6a22"
    }
};
r(Jl, "RC_2e6da4a898d55ae96aab51b6e09d6a22");
var qs = Jl;
qs.init();
var ID = class ID extends e.GenericRecordList {
    static getItemType() {
        return ks
    }
};
r(ID, "RL_2e8ff77664b8f7bc11c223ef3badd7c7");
var wD = ID;
var Bl = class Bl extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("KYCAuthStatusResponse", "kYCAuthStatusResponseAttr", "KYCAuthStatusResponse", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new na)
        }, !0, na)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Bl(new Bl.RecordClass({
            kYCAuthStatusResponseAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "98e502ff-c9bd-2440-1241-ef277fce403c"
    }
};
r(Bl, "RC_98e502ffc9bd24401241ef277fce403c");
var Hs = Bl;
Hs.init();
var ND = class ND extends e.GenericRecordList {
    static getItemType() {
        return Hs
    }
};
r(ND, "RL_2f1c969e24c9ba731c5c1c39ceea50ec");
var PD = ND;
var _l = class _l extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Max_proposal_subscription", "max_proposal_subscriptionAttr", "Max_proposal_subscription", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Ft)
        }, !0, Ft)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new _l(new _l.RecordClass({
            max_proposal_subscriptionAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "71e7722a-7761-502e-1fc1-ee9175838bd9"
    }
};
r(_l, "RC_71e7722a7761502e1fc1ee9175838bd9");
var Ws = _l;
Ws.init();
var LD = class LD extends e.GenericRecordList {
    static getItemType() {
        return Ws
    }
};
r(LD, "RL_2f43bfa975a498b49479ea4ecbc98b48");
var VD = LD;
var kl = class kl extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Mt5_status", "mt5_statusAttr", "Mt5_status", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new jt)
        }, !0, jt)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new kl(new kl.RecordClass({
            mt5_statusAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "7a9f1d8f-cf08-e196-ae4f-cb70fce3ae4d"
    }
};
r(kl, "RC_7a9f1d8fcf08e196ae4fcb70fce3ae4d");
var zs = kl;
zs.init();
var JD = class JD extends e.GenericRecordList {
    static getItemType() {
        return zs
    }
};
r(JD, "RL_30996d47f459830cdd860ac4090ef40a");
var GD = JD;
var El = class El extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("PostTradingPlatformNewAccountResponse", "postTradingPlatformNewAccountResponseAttr", "PostTradingPlatformNewAccountResponse", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new ne)
        }, !0, ne)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new El(new El.RecordClass({
            postTradingPlatformNewAccountResponseAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "9eb8d65b-d2ac-d82d-7d61-9cde9470b633"
    }
};
r(El, "RC_9eb8d65bd2acd82d7d619cde9470b633");
var js = El;
js.init();
var _D = class _D extends e.GenericRecordList {
    static getItemType() {
        return js
    }
};
r(_D, "RL_30e322a3cf46f048dc55f756d0478593");
var BD = _D;
var Fl = class Fl extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("PostResetPasswordResponse", "postResetPasswordResponseAttr", "PostResetPasswordResponse", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Xt)
        }, !0, Xt)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Fl(new Fl.RecordClass({
            postResetPasswordResponseAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "30f7e77f-4f85-f62f-55a7-49d558899db1"
    }
};
r(Fl, "RC_30f7e77f4f85f62f55a749d558899db1");
var Ks = Fl;
Ks.init();
var $l = class $l extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Url_parameter", "url_parameterAttr", "Url_parameter", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new ve)
        }, !0, ve)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new $l(new $l.RecordClass({
            url_parameterAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "31254dd0-eceb-66de-83ea-4d3f76038ef7"
    }
};
r($l, "RC_31254dd0eceb66de83ea4d3f76038ef7");
var Ys = $l;
Ys.init();
var Ul = class Ul extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2PChatCreateResponse", "p2PChatCreateResponseAttr", "P2PChatCreateResponse", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new ia)
        }, !0, ia)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Ul(new Ul.RecordClass({
            p2PChatCreateResponseAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "f5d4a2f5-a332-d76f-5ccc-15cdf118da23"
    }
};
r(Ul, "RC_f5d4a2f5a332d76f5ccc15cdf118da23");
var Zs = Ul;
Zs.init();
var ED = class ED extends e.GenericRecordList {
    static getItemType() {
        return Zs
    }
};
r(ED, "RL_33edd9b86cc900a5c27fee339170b32d");
var kD = ED;
var Ml = class Ml extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2POrderCreateRequest", "p2POrderCreateRequestAttr", "P2POrderCreateRequest", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new ua)
        }, !0, ua)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Ml(new Ml.RecordClass({
            p2POrderCreateRequestAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "905c1d78-5335-0013-6fba-e2d1469b85c5"
    }
};
r(Ml, "RC_905c1d78533500136fbae2d1469b85c5");
var Qs = Ml;
Qs.init();
var $D = class $D extends e.GenericRecordList {
    static getItemType() {
        return Qs
    }
};
r($D, "RL_34e8557baae595dff1b0bd54b344a395");
var FD = $D;
var MD = class MD extends e.GenericRecordList {
    static getItemType() {
        return ca
    }
};
r(MD, "RL_351ccc651b9c0a8538ed48a164756a75");
var UD = MD;
var ql = class ql extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Requirement", "requirementAttr", "Requirement", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Ve)
        }, !0, Ve)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new ql(new ql.RecordClass({
            requirementAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "e693c35b-4813-1a7d-9d29-6aba5185b8c6"
    }
};
r(ql, "RC_e693c35b48131a7d9d296aba5185b8c6");
var Xs = ql;
Xs.init();
var HD = class HD extends e.GenericRecordList {
    static getItemType() {
        return Xs
    }
};
r(HD, "RL_354382860a4523a089cd5a3761912fe2");
var qD = HD;
var zD = class zD extends e.GenericRecordList {
    static getItemType() {
        return bt
    }
};
r(zD, "RL_357030bc20ba450abe6756927d50ad98");
var WD = zD;
var KD = class KD extends e.GenericRecordList {
    static getItemType() {
        return Rr
    }
};
r(KD, "RL_35a3e1f455c3dbbaa14c7a628aaa1ba3");
var jD = KD;
var ZD = class ZD extends e.GenericRecordList {
    static getItemType() {
        return fr
    }
};
r(ZD, "RL_35e2cb93968d7c489481f7d30eeb5afd");
var YD = ZD;
var XD = class XD extends e.GenericRecordList {
    static getItemType() {
        return Mr
    }
};
r(XD, "RL_35f83b3d4ef557b9a9bf6629bdb261f7");
var QD = XD;
var tb = class tb extends e.GenericRecordList {
    static getItemType() {
        return la
    }
};
r(tb, "RL_360fcdf4e596d82c75762f808854a5a1");
var eb = tb;
var ab = class ab extends e.GenericRecordList {
    static getItemType() {
        return Zr
    }
};
r(ab, "RL_36ff7df6547fc6551e99dc50dec2ec00");
var rb = ab;
var sb = class sb extends e.GenericRecordList {
    static getItemType() {
        return st
    }
};
r(sb, "RL_37550157d48087a2b4e428de3d9521d0");
var ob = sb;
var Hl = class Hl extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2PAdvertiserAdvertsResponse", "p2PAdvertiserAdvertsResponseAttr", "P2PAdvertiserAdvertsResponse", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new da)
        }, !0, da)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Hl(new Hl.RecordClass({
            p2PAdvertiserAdvertsResponseAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "5709f0ba-27cf-be0e-e5ee-bb438acbd667"
    }
};
r(Hl, "RC_5709f0ba27cfbe0ee5eebb438acbd667");
var en = Hl;
en.init();
var ib = class ib extends e.GenericRecordList {
    static getItemType() {
        return en
    }
};
r(ib, "RL_37f2873798bf421962ea50333055fbe6");
var nb = ib;
var Wl = class Wl extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("KYC_Address", "kYC_AddressAttr", "KYC_Address", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new nt)
        }, !0, nt)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Wl(new Wl.RecordClass({
            kYC_AddressAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "60071085-ccdc-1a93-9c98-b76e05aec53e"
    }
};
r(Wl, "RC_60071085ccdc1a939c98b76e05aec53e");
var tn = Wl;
tn.init();
var cb = class cb extends e.GenericRecordList {
    static getItemType() {
        return tn
    }
};
r(cb, "RL_3860d269e9dd680bb74541283f709b44");
var ub = cb;
var db = class db extends e.GenericRecordList {
    static getItemType() {
        return St
    }
};
r(db, "RL_386f6a281c08d72d0376417e02fe0b4b");
var lb = db;
var zl = class zl extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("HTTPResponse", "hTTPResponseAttr", "HTTPResponse", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new ce)
        }, !0, ce)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new zl(new zl.RecordClass({
            hTTPResponseAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "6868d986-09c1-4050-d7d7-3f2cb7e44e62"
    }
};
r(zl, "RC_6868d98609c14050d7d73f2cb7e44e62");
var rn = zl;
rn.init();
var fb = class fb extends e.GenericRecordList {
    static getItemType() {
        return rn
    }
};
r(fb, "RL_38e2f6aea80afed1f36b3e2c097d68ac");
var pb = fb;
var jl = class jl extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("LoginHistory", "loginHistoryAttr", "LoginHistory", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new zf)
        }, !0, zf)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new jl(new jl.RecordClass({
            loginHistoryAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "3a05443c-535c-9845-39df-34bdb9b3f117"
    }
};
r(jl, "RC_3a05443c535c984539df34bdb9b3f117");
var an = jl;
an.init();
var Kl = class Kl extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Api_call_limit", "api_call_limitAttr", "Api_call_limit", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Ut)
        }, !0, Ut)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Kl(new Kl.RecordClass({
            api_call_limitAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "3a2d986a-770a-9c3e-6f10-96b16961e5a9"
    }
};
r(Kl, "RC_3a2d986a770a9c3e6f1096b16961e5a9");
var on = Kl;
on.init();
var yb = class yb extends e.GenericRecordList {
    static getItemType() {
        return ta
    }
};
r(yb, "RL_3a9fb32bad24cac6334039ea3a90ab41");
var mb = yb;
var Yl = class Yl extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("IDVDocumentAddRequest", "iDVDocumentAddRequestAttr", "IDVDocumentAddRequest", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new pa)
        }, !0, pa)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Yl(new Yl.RecordClass({
            iDVDocumentAddRequestAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "ee45c2d9-55f3-8571-a263-1cf48c22c217"
    }
};
r(Yl, "RC_ee45c2d955f38571a2631cf48c22c217");
var sn = Yl;
sn.init();
var Sb = class Sb extends e.GenericRecordList {
    static getItemType() {
        return sn
    }
};
r(Sb, "RL_3aafd554dca4ac72ea77647f2a1258e3");
var Tb = Sb;
var bb = class bb extends e.GenericRecordList {
    static getItemType() {
        return fa
    }
};
r(bb, "RL_3adc943e052fb4ede1c36a156e01df95");
var Db = bb;
var Zl = class Zl extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Config", "configAttr", "Config", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Ue)
        }, !0, Ue)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Zl(new Zl.RecordClass({
            configAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "3c60a184-6470-070c-1bba-e2a1d22163d2"
    }
};
r(Zl, "RC_3c60a1846470070c1bbae2a1d22163d2");
var nn = Zl;
nn.init();
var Ql = class Ql extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("SetSettingsRequest", "setSettingsRequestAttr", "SetSettingsRequest", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new sr)
        }, !0, sr)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Ql(new Ql.RecordClass({
            setSettingsRequestAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "73205161-18aa-6508-370e-b4c09e583c84"
    }
};
r(Ql, "RC_7320516118aa6508370eb4c09e583c84");
var un = Ql;
un.init();
var Ab = class Ab extends e.GenericRecordList {
    static getItemType() {
        return un
    }
};
r(Ab, "RL_3c898c4aa1038e5ba7cd2e3e10d93b3d");
var gb = Ab;
var Xl = class Xl extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("TradingPlatformAvailableAccounts", "tradingPlatformAvailableAccountsAttr", "TradingPlatformAvailableAccounts", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new ya)
        }, !0, ya)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Xl(new Xl.RecordClass({
            tradingPlatformAvailableAccountsAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "deb49656-ca36-ac30-3bff-f5ecbe52b196"
    }
};
r(Xl, "RC_deb49656ca36ac303bfff5ecbe52b196");
var cn = Xl;
cn.init();
var Ob = class Ob extends e.GenericRecordList {
    static getItemType() {
        return cn
    }
};
r(Ob, "RL_3cdb40add777d21caa9a01b033bdd702");
var xb = Ob;
var ed = class ed extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("PostTradingPlatformAccountsResponse", "postTradingPlatformAccountsResponseAttr", "PostTradingPlatformAccountsResponse", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Ta)
        }, !0, Ta)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new ed(new ed.RecordClass({
            postTradingPlatformAccountsResponseAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "3ce5a011-7187-c9d1-b6ee-0d6f65f07553"
    }
};
r(ed, "RC_3ce5a0117187c9d1b6ee0d6f65f07553");
var ln = ed;
ln.init();
var Rb = class Rb extends e.GenericRecordList {
    static getItemType() {
        return Zt
    }
};
r(Rb, "RL_3da257b38954975290536b7e144f85a1");
var vb = Rb;
var hb = class hb extends e.GenericRecordList {
    static getItemType() {
        return Yt
    }
};
r(hb, "RL_3dd031951f15020fcf2011e126c45859");
var Cb = hb;
var Ib = class Ib extends e.GenericRecordList {
    static getItemType() {
        return Ct
    }
};
r(Ib, "RL_3ddab8163c31ef065226c1ec689ad1e9");
var wb = Ib;
var Nb = class Nb extends e.GenericRecordList {
    static getItemType() {
        return Sa
    }
};
r(Nb, "RL_3e24cd4a78a15b6185b1b9dd6cb6a553");
var Pb = Nb;
var td = class td extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Account_listItem2", "account_listItem2Attr", "Account_listItem2", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Wf)
        }, !0, Wf)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new td(new td.RecordClass({
            account_listItem2Attr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "3e628d7d-792d-29fe-0a1a-8c7463cb9df4"
    }
};
r(td, "RC_3e628d7d792d29fe0a1a8c7463cb9df4");
var dn = td;
dn.init();
var rd = class rd extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("LoginHistoryResponse", "loginHistoryResponseAttr", "LoginHistoryResponse", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Da)
        }, !0, Da)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new rd(new rd.RecordClass({
            loginHistoryResponseAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "97911e72-0405-71d3-4b10-f1ecb9e4b4ab"
    }
};
r(rd, "RC_97911e72040571d34b10f1ecb9e4b4ab");
var pn = rd;
pn.init();
var Lb = class Lb extends e.GenericRecordList {
    static getItemType() {
        return pn
    }
};
r(Lb, "RL_3eb3396269cac08cf750e4a2b75c6321");
var Vb = Lb;
var Jb = class Jb extends e.GenericRecordList {
    static getItemType() {
        return cr
    }
};
r(Jb, "RL_3f2ac242127a6c8f8eecade02bd1a934");
var Gb = Jb;
var ad = class ad extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Documents_supported2", "documents_supported2Attr", "Documents_supported2", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new bt)
        }, !0, bt)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new ad(new ad.RecordClass({
            documents_supported2Attr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "3f4d741c-30bd-5473-dc9c-679433c442c3"
    }
};
r(ad, "RC_3f4d741c30bd5473dc9c679433c442c3");
var fn = ad;
fn.init();
var _b = class _b extends e.GenericRecordList {
    static getItemType() {
        return oe
    }
};
r(_b, "RL_3ffb39714a28628874cb1e11f1dbd5e4");
var Bb = _b;
var od = class od extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2PAdvertList", "p2PAdvertListAttr", "P2PAdvertList", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new pt)
        }, !0, pt)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new od(new od.RecordClass({
            p2PAdvertListAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "403419e7-2476-e3a4-7280-a2d420ccc9e0"
    }
};
r(od, "RC_403419e72476e3a47280a2d420ccc9e0");
var mn = od;
mn.init();
var Eb = class Eb extends e.GenericRecordList {
    static getItemType() {
        return Vr
    }
};
r(Eb, "RL_409d5d24f3ff15709c6eb8292127d3ba");
var kb = Eb;
var sd = class sd extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("FetchStatesListRequest", "fetchStatesListRequestAttr", "FetchStatesListRequest", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new ba)
        }, !0, ba)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new sd(new sd.RecordClass({
            fetchStatesListRequestAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "40eef503-a8ea-72db-a0e9-29f47890471d"
    }
};
r(sd, "RC_40eef503a8ea72dba0e929f47890471d");
var yn = sd;
yn.init();
var $b = class $b extends e.GenericRecordList {
    static getItemType() {
        return ss
    }
};
r($b, "RL_4153455d8943850f971d65d82f35900b");
var Fb = $b;
var Mb = class Mb extends e.GenericRecordList {
    static getItemType() {
        return xs
    }
};
r(Mb, "RL_41e67aa458234493e723d2243db01144");
var Ub = Mb;
var nd = class nd extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("ConsoleErrorType", "consoleErrorTypeAttr", "ConsoleErrorType", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new z)
        }, !0, z)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new nd(new nd.RecordClass({
            consoleErrorTypeAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "5e259c61-591c-7234-3b58-87d8b4ce62b5"
    }
};
r(nd, "RC_5e259c61591c72343b5887d8b4ce62b5");
var Tn = nd;
Tn.init();
var Hb = class Hb extends e.GenericRecordList {
    static getItemType() {
        return Tn
    }
};
r(Hb, "RL_422c5cc1eb56f188f2e407af881395ae");
var qb = Hb;
var id = class id extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("PostCashierCryptoResponse", "postCashierCryptoResponseAttr", "PostCashierCryptoResponse", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new B)
        }, !0, B)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new id(new id.RecordClass({
            postCashierCryptoResponseAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "c0258e0f-6ca8-7b3e-5e39-e33c3e5f0c77"
    }
};
r(id, "RC_c0258e0f6ca87b3e5e39e33c3e5f0c77");
var Sn = id;
Sn.init();
var zb = class zb extends e.GenericRecordList {
    static getItemType() {
        return Sn
    }
};
r(zb, "RL_42ae10f2ee499169129a9427d0491b08");
var Wb = zb;
var ud = class ud extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Crypto", "cryptoAttr", "Crypto", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Ht)
        }, !0, Ht)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new ud(new ud.RecordClass({
            cryptoAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "72576653-6428-f476-02ca-54f05f55b577"
    }
};
r(ud, "RC_725766536428f47602ca54f05f55b577");
var Dn = ud;
Dn.init();
var Kb = class Kb extends e.GenericRecordList {
    static getItemType() {
        return Dn
    }
};
r(Kb, "RL_43065d40fb42cf2e1c75ff4cebf95a65");
var jb = Kb;
var cd = class cd extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Documents_supported", "documents_supportedAttr", "Documents_supported", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Fe)
        }, !0, Fe)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new cd(new cd.RecordClass({
            documents_supportedAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "655de439-743f-6ef6-6e4c-426b009f58b1"
    }
};
r(cd, "RC_655de439743f6ef66e4c426b009f58b1");
var bn = cd;
bn.init();
var Zb = class Zb extends e.GenericRecordList {
    static getItemType() {
        return bn
    }
};
r(Zb, "RL_431a1d9d775d905a0fa33726ccc368ad");
var Yb = Zb;
var Xb = class Xb extends e.GenericRecordList {
    static getItemType() {
        return at
    }
};
r(Xb, "RL_43c33c0f3b9a2eb3199ef87eb6b6c7b3");
var Qb = Xb;
var ld = class ld extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Disclaimer", "disclaimerAttr", "Disclaimer", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Ot)
        }, !0, Ot)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new ld(new ld.RecordClass({
            disclaimerAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "d5f1faf2-f682-624c-1c27-e7a932faee50"
    }
};
r(ld, "RC_d5f1faf2f682624c1c27e7a932faee50");
var gn = ld;
gn.init();
var tg = class tg extends e.GenericRecordList {
    static getItemType() {
        return gn
    }
};
r(tg, "RL_44cebee119c996a470fbff1d981600f0");
var eg = tg;
var ag = class ag extends e.GenericRecordList {
    static getItemType() {
        return Gs
    }
};
r(ag, "RL_44fa669238d0e932bda1a17383c85231");
var rg = ag;
var dd = class dd extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2PAdvertUpdateRequest", "p2PAdvertUpdateRequestAttr", "P2PAdvertUpdateRequest", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new xa)
        }, !0, xa)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new dd(new dd.RecordClass({
            p2PAdvertUpdateRequestAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "45556c10-a150-2a71-7de4-1a97a7e0de1e"
    }
};
r(dd, "RC_45556c10a1502a717de41a97a7e0de1e");
var An = dd;
An.init();
var pd = class pd extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Echo_req9", "echo_req9Attr", "Echo_req9", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new zr)
        }, !0, zr)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new pd(new pd.RecordClass({
            echo_req9Attr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "99c00189-36e3-cec1-2f03-7bf056295951"
    }
};
r(pd, "RC_99c0018936e3cec12f037bf056295951");
var xn = pd;
xn.init();
var sg = class sg extends e.GenericRecordList {
    static getItemType() {
        return xn
    }
};
r(sg, "RL_458a7ae223160b2af1e7ca666afa22e4");
var og = sg;
var ig = class ig extends e.GenericRecordList {
    static getItemType() {
        return nn
    }
};
r(ig, "RL_45f425cbfe3f41d3fac973fe3238818f");
var ng = ig;
var fd = class fd extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("PostVerifyEmailResponse", "postVerifyEmailResponseAttr", "PostVerifyEmailResponse", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new E)
        }, !0, E)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new fd(new fd.RecordClass({
            postVerifyEmailResponseAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "f6746cbb-50b7-a6a3-6f45-4937aab260b0"
    }
};
r(fd, "RC_f6746cbb50b7a6a36f454937aab260b0");
var On = fd;
On.init();
var cg = class cg extends e.GenericRecordList {
    static getItemType() {
        return On
    }
};
r(cg, "RL_466fd140517db96d071045e35052d015");
var ug = cg;
var md = class md extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Get_setting", "get_settingAttr", "Get_setting", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new _r)
        }, !0, _r)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new md(new md.RecordClass({
            get_settingAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "47772cad-80dc-4a78-7d65-fd52470ca2cd"
    }
};
r(md, "RC_47772cad80dc4a787d65fd52470ca2cd");
var vn = md;
vn.init();
var yd = class yd extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("From", "fromAttr", "From", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new we)
        }, !0, we)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new yd(new yd.RecordClass({
            fromAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "99e19ace-3996-a5f3-b75c-a1e86886d33d"
    }
};
r(yd, "RC_99e19ace3996a5f3b75ca1e86886d33d");
var Rn = yd;
Rn.init();
var dg = class dg extends e.GenericRecordList {
    static getItemType() {
        return Rn
    }
};
r(dg, "RL_47976f4a0ffd4defdfe43b4b464cb87c");
var lg = dg;
var pg = class pg extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Action_type", "action_typeAttr", "action_type", !1, !1, e.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Description", "descriptionAttr", "description", !1, !1, e.DataTypes.LongInteger, function() {
            return e.LongInteger.defaultValue
        }, !0), this.attr("Limit", "limitAttr", "limit", !1, !1, e.DataTypes.Text, function() {
            return ""
        }, !0)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
};
r(pg, "ST_aebb52c5d802a6aaa646a74179c770faStructure");
var le = pg;
le.init();
var Td = class Td extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Api2", "api2Attr", "Api2", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new le)
        }, !0, le)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Td(new Td.RecordClass({
            api2Attr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "47cbcea3-7f93-8309-4a9a-cfdb35413d95"
    }
};
r(Td, "RC_47cbcea37f9383094a9acfdb35413d95");
var Cn = Td;
Cn.init();
var Sd = class Sd extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2POrderReviewRequest", "p2POrderReviewRequestAttr", "P2POrderReviewRequest", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new va)
        }, !0, va)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Sd(new Sd.RecordClass({
            p2POrderReviewRequestAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "5df5d94c-6805-d6c9-59ff-b69a06f0b3f5"
    }
};
r(Sd, "RC_5df5d94c6805d6c959ffb69a06f0b3f5");
var hn = Sd;
hn.init();
var mg = class mg extends e.GenericRecordList {
    static getItemType() {
        return hn
    }
};
r(mg, "RL_48101f5eb21d918bcd9ac61785b18853");
var fg = mg;
var Dd = class Dd extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Changeable_field", "changeable_fieldAttr", "Changeable_field", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new He)
        }, !0, He)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Dd(new Dd.RecordClass({
            changeable_fieldAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "d4bf765d-f28d-c44c-fc97-7eebedb13ed3"
    }
};
r(Dd, "RC_d4bf765df28dc44cfc977eebedb13ed3");
var wn = Dd;
wn.init();
var Tg = class Tg extends e.GenericRecordList {
    static getItemType() {
        return wn
    }
};
r(Tg, "RL_481ef41ed0fae7f08c6f7bee79db99dc");
var yg = Tg;
var Dg = class Dg extends e.GenericRecordList {
    static getItemType() {
        return Mt
    }
};
r(Dg, "RL_4887faff529164a4e041bdf0dc5e469f");
var Sg = Dg;
var bd = class bd extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("TradingAssessmentRequest", "tradingAssessmentRequestAttr", "TradingAssessmentRequest", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Sa)
        }, !0, Sa)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new bd(new bd.RecordClass({
            tradingAssessmentRequestAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "f0f17bd3-ffd9-2654-92a6-5f2a59166722"
    }
};
r(bd, "RC_f0f17bd3ffd9265492a65f2a59166722");
var In = bd;
In.init();
var gg = class gg extends e.GenericRecordList {
    static getItemType() {
        return In
    }
};
r(gg, "RL_4902441390afa821483ceed9dce30aad");
var bg = gg;
var gd = class gd extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("PostMT5NewAccountRequest", "postMT5NewAccountRequestAttr", "PostMT5NewAccountRequest", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new fr)
        }, !0, fr)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new gd(new gd.RecordClass({
            postMT5NewAccountRequestAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "49154554-e74c-2f48-646b-2e0ec7eb74a6"
    }
};
r(gd, "RC_49154554e74c2f48646b2e0ec7eb74a6");
var Pn = gd;
Pn.init();
var Ad = class Ad extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2PSettingsResponse", "p2PSettingsResponseAttr", "P2PSettingsResponse", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Ra)
        }, !0, Ra)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Ad(new Ad.RecordClass({
            p2PSettingsResponseAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "4930d0ff-5274-fa4a-3e2b-1c3a57449104"
    }
};
r(Ad, "RC_4930d0ff5274fa4a3e2b1c3a57449104");
var Nn = Ad;
Nn.init();
var xd = class xd extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("PostTradingPlatformAccountsRequest", "postTradingPlatformAccountsRequestAttr", "PostTradingPlatformAccountsRequest", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Ca)
        }, !0, Ca)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new xd(new xd.RecordClass({
            postTradingPlatformAccountsRequestAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "8349a704-d7e4-5979-09be-fcd4d12d85b4"
    }
};
r(xd, "RC_8349a704d7e4597909befcd4d12d85b4");
var Vn = xd;
Vn.init();
var xg = class xg extends e.GenericRecordList {
    static getItemType() {
        return Vn
    }
};
r(xg, "RL_495e996e3e491370fac39f81d4d0c440");
var Ag = xg;
var Od = class Od extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Idv", "idvAttr", "Idv", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new $e)
        }, !0, $e)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Od(new Od.RecordClass({
            idvAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "5e1b44d0-3865-4ac1-9cd2-18a2a7d6a6b8"
    }
};
r(Od, "RC_5e1b44d038654ac19cd218a2a7d6a6b8");
var Ln = Od;
Ln.init();
var vg = class vg extends e.GenericRecordList {
    static getItemType() {
        return Ln
    }
};
r(vg, "RL_49a4d531de393d17563dea4ec0d88883");
var Og = vg;
var Cg = class Cg extends e.GenericRecordList {
    static getItemType() {
        return Po
    }
};
r(Cg, "RL_49ccc40ded7b810643f52a486f4c18ba");
var Rg = Cg;
var vd = class vd extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Financial_assessment", "financial_assessmentAttr", "Financial_assessment", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Jr)
        }, !0, Jr)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new vd(new vd.RecordClass({
            financial_assessmentAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "4a76c214-f34f-eb84-1d0c-1a2d8cdbec01"
    }
};
r(vd, "RC_4a76c214f34feb841d0c1a2d8cdbec01");
var Gn = vd;
Gn.init();
var Rd = class Rd extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Advertiser_detail", "advertiser_detailAttr", "Advertiser_detail", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new ae)
        }, !0, ae)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Rd(new Rd.RecordClass({
            advertiser_detailAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "c4114445-a685-a33c-b2e9-bc2b5d145394"
    }
};
r(Rd, "RC_c4114445a685a33cb2e9bc2b5d145394");
var Jn = Rd;
Jn.init();
var wg = class wg extends e.GenericRecordList {
    static getItemType() {
        return Jn
    }
};
r(wg, "RL_4ac43acaead813443cd44c2e2f45992b");
var hg = wg;
var Cd = class Cd extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("DocumentUploadResponse", "documentUploadResponseAttr", "DocumentUploadResponse", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new vr)
        }, !0, vr)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Cd(new Cd.RecordClass({
            documentUploadResponseAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "fe323b94-d86a-33a2-36dd-565a79123960"
    }
};
r(Cd, "RC_fe323b94d86a33a236dd565a79123960");
var Bn = Cd;
Bn.init();
var Pg = class Pg extends e.GenericRecordList {
    static getItemType() {
        return Bn
    }
};
r(Pg, "RL_4bc0edb5a2f27a4baa3999fdb6172ba5");
var Ig = Pg;
var Vg = class Vg extends e.GenericRecordList {
    static getItemType() {
        return er
    }
};
r(Vg, "RL_4cb4fe0818ecc772f4186b3d75c995e2");
var Ng = Vg;
var hd = class hd extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2PAdvertUpdateResponse", "p2PAdvertUpdateResponseAttr", "P2PAdvertUpdateResponse", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new ha)
        }, !0, ha)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new hd(new hd.RecordClass({
            p2PAdvertUpdateResponseAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "4d9da0dd-8267-6f0a-214b-72ed70ed22f4"
    }
};
r(hd, "RC_4d9da0dd82676f0a214b72ed70ed22f4");
var _n = hd;
_n.init();
var wd = class wd extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2POrderCancelResponse", "p2POrderCancelResponseAttr", "P2POrderCancelResponse", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new wa)
        }, !0, wa)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new wd(new wd.RecordClass({
            p2POrderCancelResponseAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "e68e51e7-06a4-0174-8c06-1e6ee756eb05"
    }
};
r(wd, "RC_e68e51e706a401748c061e6ee756eb05");
var kn = wd;
kn.init();
var Gg = class Gg extends e.GenericRecordList {
    static getItemType() {
        return kn
    }
};
r(Gg, "RL_4e3b331f6df36e10312e1d92651799b7");
var Lg = Gg;
var Bg = class Bg extends e.GenericRecordList {
    static getItemType() {
        return Ts
    }
};
r(Bg, "RL_4e8f077e202afd0a501d7855e9111a4f");
var Jg = Bg;
var kg = class kg extends e.GenericRecordList {
    static getItemType() {
        return Ho
    }
};
r(kg, "RL_4e941b17c99d61ac0f67eb4722e53670");
var _g = kg;
var Id = class Id extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("NotificationEventRequest", "notificationEventRequestAttr", "NotificationEventRequest", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Dr)
        }, !0, Dr)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Id(new Id.RecordClass({
            notificationEventRequestAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "4f8f859a-92cd-f3a7-b0ae-8abf2e183a70"
    }
};
r(Id, "RC_4f8f859a92cdf3a7b0ae8abf2e183a70");
var En = Id;
En.init();
var Fg = class Fg extends e.GenericRecordList {
    static getItemType() {
        return At
    }
};
r(Fg, "RL_4f9f1230897f0a3e8b129024e1de623d");
var Eg = Fg;
var Pd = class Pd extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Initial_deposit_per_country", "initial_deposit_per_countryAttr", "Initial_deposit_per_country", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Kt)
        }, !0, Kt)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Pd(new Pd.RecordClass({
            initial_deposit_per_countryAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "50444655-28c9-4ee4-68cc-97cee02c2f31"
    }
};
r(Pd, "RC_5044465528c94ee468cc97cee02c2f31");
var Fn = Pd;
Fn.init();
var Ug = class Ug extends e.GenericRecordList {
    static getItemType() {
        return Fn
    }
};
r(Ug, "RL_4faa698f8fe1178a7e2d85375093f6ee");
var $g = Ug;
var qg = class qg extends e.GenericRecordList {
    static getItemType() {
        return mt
    }
};
r(qg, "RL_508855d25108765122be317d42e36c82");
var Mg = qg;
var Nd = class Nd extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("DocumentUpload", "documentUploadAttr", "DocumentUpload", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Or)
        }, !0, Or)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Nd(new Nd.RecordClass({
            documentUploadAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "50f2a392-2a1e-7010-2f05-77d9e1e336c7"
    }
};
r(Nd, "RC_50f2a3922a1e70102f0577d9e1e336c7");
var $n = Nd;
$n.init();
var Vd = class Vd extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("GetFinancialAssessmentResponse", "getFinancialAssessmentResponseAttr", "GetFinancialAssessmentResponse", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Ia)
        }, !0, Ia)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Vd(new Vd.RecordClass({
            getFinancialAssessmentResponseAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "c14c3de5-ac4f-d24a-1fc2-9c0c5c4a762b"
    }
};
r(Vd, "RC_c14c3de5ac4fd24a1fc29c0c5c4a762b");
var Un = Vd;
Un.init();
var Wg = class Wg extends e.GenericRecordList {
    static getItemType() {
        return Un
    }
};
r(Wg, "RL_51bf88f776fdd354edc5d7c0f5e439e8");
var Hg = Wg;
var Ld = class Ld extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Fee", "feeAttr", "Fee", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Ge)
        }, !0, Ge)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Ld(new Ld.RecordClass({
            feeAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "a77cae61-9f7a-824f-faa6-e30caf3829e5"
    }
};
r(Ld, "RC_a77cae619f7a824ffaa6e30caf3829e5");
var Mn = Ld;
Mn.init();
var jg = class jg extends e.GenericRecordList {
    static getItemType() {
        return Mn
    }
};
r(jg, "RL_51c36384638fb46b29235e79e23007b4");
var zg = jg;
var Gd = class Gd extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Identity", "identityAttr", "Identity", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new xt)
        }, !0, xt)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Gd(new Gd.RecordClass({
            identityAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "51c73f64-1f2d-0554-0b68-c15e7660196f"
    }
};
r(Gd, "RC_51c73f641f2d05540b68c15e7660196f");
var qn = Gd;
qn.init();
var Yg = class Yg extends e.GenericRecordList {
    static getItemType() {
        return zt
    }
};
r(Yg, "RL_51cb6ee93d723ed4d67f527a1090ade3");
var Kg = Yg;
var Jd = class Jd extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("PostMT5NewAccountResponse", "postMT5NewAccountResponseAttr", "PostMT5NewAccountResponse", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new X)
        }, !0, X)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Jd(new Jd.RecordClass({
            postMT5NewAccountResponseAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "51e680c6-048a-c999-ddcf-2924d0b41c65"
    }
};
r(Jd, "RC_51e680c6048ac999ddcf2924d0b41c65");
var Hn = Jd;
Hn.init();
var Zg = class Zg extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Display_name", "display_nameAttr", "display_name", !1, !1, e.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Required", "requiredAttr", "required", !1, !1, e.DataTypes.LongInteger, function() {
            return e.LongInteger.defaultValue
        }, !0), this.attr("Type", "typeAttr", "type", !1, !1, e.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Value", "valueAttr", "value", !1, !1, e.DataTypes.Text, function() {
            return ""
        }, !0)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
};
r(Zg, "ST_8984cb682c11cfadaf78c5f381e6f025Structure");
var J = Zg;
J.init();
var Qg = class Qg extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Account", "accountAttr", "account", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new J)
        }, !0, J), this.attr("Bank_code", "bank_codeAttr", "bank_code", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new J)
        }, !0, J), this.attr("Bank_name", "bank_nameAttr", "bank_name", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new J)
        }, !0, J), this.attr("Branch", "branchAttr", "branch", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new J)
        }, !0, J), this.attr("Instructions", "instructionsAttr", "instructions", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new F)
        }, !0, F)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
};
r(Qg, "ST_c1804ef83d6cc7711f9d3c71bce90425Structure");
var U = Qg;
U.init();
var Xg = class Xg extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Display_name", "display_nameAttr", "display_name", !1, !1, e.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Fields", "fieldsAttr", "fields", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new U)
        }, !0, U), this.attr("Is_enabled", "is_enabledAttr", "is_enabled", !1, !1, e.DataTypes.LongInteger, function() {
            return e.LongInteger.defaultValue
        }, !0), this.attr("Method", "methodAttr", "method", !1, !1, e.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Type", "typeAttr", "type", !1, !1, e.DataTypes.Text, function() {
            return ""
        }, !0)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
};
r(Xg, "ST_52f3a7833dd9b2bee23aa6801f425dc8Structure");
var M = Xg;
M.init();
var tA = class tA extends e.GenericRecordList {
    static getItemType() {
        return _r
    }
};
r(tA, "RL_53248a1b8ab3b0462ffd76c73f4f1eba");
var eA = tA;
var aA = class aA extends e.GenericRecordList {
    static getItemType() {
        return xe
    }
};
r(aA, "RL_538ff2f1d030482c84c803644c8c1240");
var rA = aA;
var Bd = class Bd extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Mt_all_company", "mt_all_companyAttr", "Mt_all_company", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new et)
        }, !0, et)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Bd(new Bd.RecordClass({
            mt_all_companyAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "cb3c04d8-8b11-4a07-5539-728cafcde6e0"
    }
};
r(Bd, "RC_cb3c04d88b114a075539728cafcde6e0");
var Wn = Bd;
Wn.init();
var sA = class sA extends e.GenericRecordList {
    static getItemType() {
        return Wn
    }
};
r(sA, "RL_53c372dc61bea6ee9ca5f8120f4350e8");
var oA = sA;
var _d = class _d extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Echo_req3", "echo_req3Attr", "Echo_req3", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Et)
        }, !0, Et)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new _d(new _d.RecordClass({
            echo_req3Attr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "9156a578-055c-e3e9-05fa-78bea04b423e"
    }
};
r(_d, "RC_9156a578055ce3e905fa78bea04b423e");
var zn = _d;
zn.init();
var iA = class iA extends e.GenericRecordList {
    static getItemType() {
        return zn
    }
};
r(iA, "RL_541d7d6fd4a21fe8865c00049e5532a0");
var nA = iA;
var cA = class cA extends e.GenericRecordList {
    static getItemType() {
        return lo
    }
};
r(cA, "RL_545c5578385333732449204f3e942ed0");
var uA = cA;
var dA = class dA extends e.GenericRecordList {
    static getItemType() {
        return Pa
    }
};
r(dA, "RL_546e1909ff09813803e242c5d08fbfa6");
var lA = dA;
var fA = class fA extends e.GenericRecordList {
    static getItemType() {
        return ba
    }
};
r(fA, "RL_55379448d5b56a955b8b1cc39ca50913");
var pA = fA;
var kd = class kd extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2POrderCreateResponse", "p2POrderCreateResponseAttr", "P2POrderCreateResponse", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new dr)
        }, !0, dr)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new kd(new kd.RecordClass({
            p2POrderCreateResponseAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "5556936b-5229-2543-d97d-2fca85735389"
    }
};
r(kd, "RC_5556936b52292543d97d2fca85735389");
var jn = kd;
jn.init();
var yA = class yA extends e.GenericRecordList {
    static getItemType() {
        return Fr
    }
};
r(yA, "RL_556e855874a9b6c53a4ae07106497cfa");
var mA = yA;
var SA = class SA extends e.GenericRecordList {
    static getItemType() {
        return Vs
    }
};
r(SA, "RL_560d4c8f65a370a0f5f40af5ea7ad8af");
var TA = SA;
var bA = class bA extends e.GenericRecordList {
    static getItemType() {
        return ke
    }
};
r(bA, "RL_5615c834166e52223964bada9f9f6329");
var DA = bA;
var Ed = class Ed extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Payment_agent", "payment_agentAttr", "Payment_agent", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Yt)
        }, !0, Yt)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Ed(new Ed.RecordClass({
            payment_agentAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "56c6ce1b-0108-db2c-43eb-2e512b9aa7da"
    }
};
r(Ed, "RC_56c6ce1b0108db2c43eb2e512b9aa7da");
var Kn = Ed;
Kn.init();
var Fd = class Fd extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Trading_platform_accountItem", "trading_platform_accountItemAttr", "Trading_platform_accountItem", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Se)
        }, !0, Se)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Fd(new Fd.RecordClass({
            trading_platform_accountItemAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "b7e52722-439a-b79f-06cc-9b853e2e0eda"
    }
};
r(Fd, "RC_b7e52722439ab79f06cc9b853e2e0eda");
var Yn = Fd;
Yn.init();
var AA = class AA extends e.GenericRecordList {
    static getItemType() {
        return Yn
    }
};
r(AA, "RL_57698c22786db8cfbee18c9cbf33ed66");
var gA = AA;
var OA = class OA extends e.GenericRecordList {
    static getItemType() {
        return $n
    }
};
r(OA, "RL_59f6c38878962f59e9d822ce8cc295b2");
var xA = OA;
var RA = class RA extends e.GenericRecordList {
    static getItemType() {
        return fn
    }
};
r(RA, "RL_5a17cb0f64de6697951894cea5524431");
var vA = RA;
var hA = class hA extends e.GenericRecordList {
    static getItemType() {
        return ur
    }
};
r(hA, "RL_5ad725bb1f834f208aba441411dfb7ce");
var CA = hA;
var $d = class $d extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("KYC_AdditionalDocument", "kYC_AdditionalDocumentAttr", "KYC_AdditionalDocument", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Je)
        }, !0, Je)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new $d(new $d.RecordClass({
            kYC_AdditionalDocumentAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "5b83aabb-b0d4-2636-22ef-07d7fe4b2ce0"
    }
};
r($d, "RC_5b83aabbb0d4263622ef07d7fe4b2ce0");
var Zn = $d;
Zn.init();
var Ud = class Ud extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("StatementResponse", "statementResponseAttr", "StatementResponse", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Na)
        }, !0, Na)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Ud(new Ud.RecordClass({
            statementResponseAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "905d6976-00d1-c54d-4a69-5286706965fc"
    }
};
r(Ud, "RC_905d697600d1c54d4a695286706965fc");
var Qn = Ud;
Qn.init();
var IA = class IA extends e.GenericRecordList {
    static getItemType() {
        return Qn
    }
};
r(IA, "RL_5c7e4c6a39ce75c4706471fcf0bc97b4");
var wA = IA;
var Md = class Md extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2PAdvertCreate", "p2PAdvertCreateAttr", "P2PAdvertCreate", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Re)
        }, !0, Re)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Md(new Md.RecordClass({
            p2PAdvertCreateAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "5cf1b34e-d2ad-7e7e-10f9-b1f73ac14122"
    }
};
r(Md, "RC_5cf1b34ed2ad7e7e10f9b1f73ac14122");
var Xn = Md;
Xn.init();
var NA = class NA extends e.GenericRecordList {
    static getItemType() {
        return Kn
    }
};
r(NA, "RL_5db208bc12424f6e7604bf538be9d9a9");
var PA = NA;
var LA = class LA extends e.GenericRecordList {
    static getItemType() {
        return Ga
    }
};
r(LA, "RL_5e5ec69271e920fb7cafebfca681f7d6");
var VA = LA;
var JA = class JA extends e.GenericRecordList {
    static getItemType() {
        return Hr
    }
};
r(JA, "RL_5f96baf85bbca68a104650af9c95a482");
var GA = JA;
var _A = class _A extends e.GenericRecordList {
    static getItemType() {
        return Ja
    }
};
r(_A, "RL_602374ca64bbf9e26533dca6775aa750");
var BA = _A;
var EA = class EA extends e.GenericRecordList {
    static getItemType() {
        return Ba
    }
};
r(EA, "RL_60aa1ccd6c64fd81d5fcb96f2a83dfd1");
var kA = EA;
var qd = class qd extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2PAdvertiserRelationsResponse", "p2PAdvertiserRelationsResponseAttr", "P2PAdvertiserRelationsResponse", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Ba)
        }, !0, Ba)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new qd(new qd.RecordClass({
            p2PAdvertiserRelationsResponseAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "c3c26eca-f28f-4142-ec61-613a2af66795"
    }
};
r(qd, "RC_c3c26ecaf28f4142ec61613a2af66795");
var ei = qd;
ei.init();
var $A = class $A extends e.GenericRecordList {
    static getItemType() {
        return ei
    }
};
r($A, "RL_60cd4e292ea47ae7340affa43c25fbca");
var FA = $A;
var Hd = class Hd extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Partner_settingItem", "partner_settingItemAttr", "Partner_settingItem", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new _f)
        }, !0, _f)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Hd(new Hd.RecordClass({
            partner_settingItemAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "af41a824-8bec-9d37-1332-c6d1030994d1"
    }
};
r(Hd, "RC_af41a8248bec9d371332c6d1030994d1");
var ti = Hd;
ti.init();
var MA = class MA extends e.GenericRecordList {
    static getItemType() {
        return ti
    }
};
r(MA, "RL_61663a8f8c45cf7747ae131a649be82c");
var UA = MA;
var HA = class HA extends e.GenericRecordList {
    static getItemType() {
        return Br
    }
};
r(HA, "RL_617ce086b197e1cd7e2af2a1c0d1c20b");
var qA = HA;
var Wd = class Wd extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Local_currency", "local_currencyAttr", "Local_currency", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new _a)
        }, !0, _a)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Wd(new Wd.RecordClass({
            local_currencyAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "61df84f9-9699-2899-1e57-5f5d3cdeb6cf"
    }
};
r(Wd, "RC_61df84f9969928991e575f5d3cdeb6cf");
var ri = Wd;
ri.init();
var zd = class zd extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Server_info", "server_infoAttr", "Server_info", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Yr)
        }, !0, Yr)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new zd(new zd.RecordClass({
            server_infoAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "61e849a6-b27c-65d4-f84d-a11bc7fcd961"
    }
};
r(zd, "RC_61e849a6b27c65d4f84da11bc7fcd961");
var ai = zd;
ai.init();
var jd = class jd extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Echo_req", "echo_reqAttr", "Echo_req", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Gr)
        }, !0, Gr)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new jd(new jd.RecordClass({
            echo_reqAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "623a04a7-e1c6-88b7-ec13-3f2b7ca28f8e"
    }
};
r(jd, "RC_623a04a7e1c688b7ec133f2b7ca28f8e");
var oi = jd;
oi.init();
var zA = class zA extends e.GenericRecordList {
    static getItemType() {
        return aa
    }
};
r(zA, "RL_6389593f218720e640897f2a30c71a02");
var WA = zA;
var Kd = class Kd extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Authorize3", "authorize3Attr", "Authorize3", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new La)
        }, !0, La)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Kd(new Kd.RecordClass({
            authorize3Attr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "642aabe8-5fdb-3eb2-ce28-228a997dfa13"
    }
};
r(Kd, "RC_642aabe85fdb3eb2ce28228a997dfa13");
var si = Kd;
si.init();
var Yd = class Yd extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2PChatCreateRequest", "p2PChatCreateRequestAttr", "P2PChatCreateRequest", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new ka)
        }, !0, ka)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Yd(new Yd.RecordClass({
            p2PChatCreateRequestAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "6554cbff-778b-b836-f708-19c17df738b2"
    }
};
r(Yd, "RC_6554cbff778bb836f70819c17df738b2");
var ni = Yd;
ni.init();
var KA = class KA extends e.GenericRecordList {
    static getItemType() {
        return Gr
    }
};
r(KA, "RL_66079fd510547022662fad21af9161f1");
var jA = KA;
var Zd = class Zd extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Account_listItem", "account_listItemAttr", "Account_listItem", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new jf)
        }, !0, jf)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Zd(new Zd.RecordClass({
            account_listItemAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "f481c39b-6dc5-7144-1408-fc418f17e793"
    }
};
r(Zd, "RC_f481c39b6dc571441408fc418f17e793");
var ii = Zd;
ii.init();
var ZA = class ZA extends e.GenericRecordList {
    static getItemType() {
        return ii
    }
};
r(ZA, "RL_6611d2d9fcbfcbfe8fb57800c9eecc82");
var YA = ZA;
var Qd = class Qd extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("PostTradingPlatformPasswordChangeResponse", "postTradingPlatformPasswordChangeResponseAttr", "PostTradingPlatformPasswordChangeResponse", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Ea)
        }, !0, Ea)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Qd(new Qd.RecordClass({
            postTradingPlatformPasswordChangeResponseAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "6ff4ee45-dfc9-2afe-92e4-874530f95001"
    }
};
r(Qd, "RC_6ff4ee45dfc92afe92e4874530f95001");
var ui = Qd;
ui.init();
var XA = class XA extends e.GenericRecordList {
    static getItemType() {
        return ui
    }
};
r(XA, "RL_66125dc2e07150403638a7f77e4d88ff");
var QA = XA;
var Xd = class Xd extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("All", "allAttr", "All", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Me)
        }, !0, Me)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Xd(new Xd.RecordClass({
            allAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "fb91f9ea-b17d-1348-84b2-213f47fb4a68"
    }
};
r(Xd, "RC_fb91f9eab17d134884b2213f47fb4a68");
var ci = Xd;
ci.init();
var tx = class tx extends e.GenericRecordList {
    static getItemType() {
        return ci
    }
};
r(tx, "RL_6742097cd0e1b80b9f740ab5594fc0b1");
var ex = tx;
var ax = class ax extends e.GenericRecordList {
    static getItemType() {
        return Lt
    }
};
r(ax, "RL_67903d82f67a613e6457850e3fe75a1b");
var rx = ax;
var sx = class sx extends e.GenericRecordList {
    static getItemType() {
        return jt
    }
};
r(sx, "RL_687d5246fd214b4298d42d80fa4abd54");
var ox = sx;
var ix = class ix extends e.GenericRecordList {
    static getItemType() {
        return Oa
    }
};
r(ix, "RL_68d94344bca87ca3c6e8048bda3cfcff");
var nx = ix;
var ep = class ep extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2PAdvertCreateResponse", "p2PAdvertCreateResponseAttr", "P2PAdvertCreateResponse", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new lr)
        }, !0, lr)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new ep(new ep.RecordClass({
            p2PAdvertCreateResponseAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "b0469763-808d-c073-8ee5-33d3241a3fc4"
    }
};
r(ep, "RC_b0469763808dc0738ee533d3241a3fc4");
var li = ep;
li.init();
var cx = class cx extends e.GenericRecordList {
    static getItemType() {
        return li
    }
};
r(cx, "RL_69045c5eb3eae12903ebdf79ae78ffdb");
var ux = cx;
var dx = class dx extends e.GenericRecordList {
    static getItemType() {
        return yn
    }
};
r(dx, "RL_69ca4bc8038345e2219991dcaa3abf35");
var lx = dx;
var fx = class fx extends e.GenericRecordList {
    static getItemType() {
        return yr
    }
};
r(fx, "RL_6a09e143d0e4a59a21ce23725d2e887e");
var px = fx;
var yx = class yx extends e.GenericRecordList {
    static getItemType() {
        return tt
    }
};
r(yx, "RL_6a534bbcb28aa4f96e8b5853e0208016");
var mx = yx;
var tp = class tp extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Identity2", "identity2Attr", "Identity2", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Ae)
        }, !0, Ae)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new tp(new tp.RecordClass({
            identity2Attr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "6a71f9dc-e751-66d7-6993-18075e64be6d"
    }
};
r(tp, "RC_6a71f9dce75166d7699318075e64be6d");
var di = tp;
di.init();
var rp = class rp extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2POrderListResponse", "p2POrderListResponseAttr", "P2POrderListResponse", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Fa)
        }, !0, Fa)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new rp(new rp.RecordClass({
            p2POrderListResponseAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "6ad9207e-51a4-b642-b6e1-db89f79e31b5"
    }
};
r(rp, "RC_6ad9207e51a4b642b6e1db89f79e31b5");
var pi = rp;
pi.init();
var Sx = class Sx extends e.GenericRecordList {
    static getItemType() {
        return $a
    }
};
r(Sx, "RL_6adb6e7c3b995869d80f7cca91748aa8");
var Tx = Sx;
var bx = class bx extends e.GenericRecordList {
    static getItemType() {
        return na
    }
};
r(bx, "RL_6aefb6b34ff9f8b6e1084c5b438522bb");
var Dx = bx;
var ap = class ap extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Authentication", "authenticationAttr", "Authentication", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new xe)
        }, !0, xe)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new ap(new ap.RecordClass({
            authenticationAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "6afb7faf-6b2a-5fdc-14e3-fd34318f5ba5"
    }
};
r(ap, "RC_6afb7faf6b2a5fdc14e3fd34318f5ba5");
var fi = ap;
fi.init();
var op = class op extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Website_status", "website_statusAttr", "Website_status", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Zt)
        }, !0, Zt)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new op(new op.RecordClass({
            website_statusAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "6bf0b0ff-c630-1cb0-6881-8135121fba90"
    }
};
r(op, "RC_6bf0b0ffc6301cb068818135121fba90");
var mi = op;
mi.init();
var Ax = class Ax extends e.GenericRecordList {
    static getItemType() {
        return et
    }
};
r(Ax, "RL_6c06f81aeda50ab8c2d5788ceef7d4fc");
var gx = Ax;
var Ox = class Ox extends e.GenericRecordList {
    static getItemType() {
        return _t
    }
};
r(Ox, "RL_6c516272c5b3311f4dfc181117b96b16");
var xx = Ox;
var Rx = class Rx extends e.GenericRecordList {
    static getItemType() {
        return Os
    }
};
r(Rx, "RL_6cc055cc55710603767f0fd9910db36c");
var vx = Rx;
var hx = class hx extends e.GenericRecordList {
    static getItemType() {
        return Nn
    }
};
r(hx, "RL_6cc6cf468d4e55dff2682f40779f25aa");
var Cx = hx;
var Ix = class Ix extends e.GenericRecordList {
    static getItemType() {
        return Jt
    }
};
r(Ix, "RL_6d35299704f3eec23ed812a5a367da37");
var wx = Ix;
var Nx = class Nx extends e.GenericRecordList {
    static getItemType() {
        return Ua
    }
};
r(Nx, "RL_6d8078983e84d9f62576b9b597c42453");
var Px = Nx;
var Lx = class Lx extends e.GenericRecordList {
    static getItemType() {
        return Vt
    }
};
r(Lx, "RL_6daa7fd7043bd22e153f9e359a31e19f");
var Vx = Lx;
var Jx = class Jx extends e.GenericRecordList {
    static getItemType() {
        return Ks
    }
};
r(Jx, "RL_6ded88896f4420155f9228fa8926d25d");
var Gx = Jx;
var _x = class _x extends e.GenericRecordList {
    static getItemType() {
        return or
    }
};
r(_x, "RL_6e4709c964d7b46a3afebff315d0d559");
var Bx = _x;
var Ex = class Ex extends e.GenericRecordList {
    static getItemType() {
        return Ae
    }
};
r(Ex, "RL_6fc3333f685ab59772d893597401dc0f");
var kx = Ex;
var $x = class $x extends e.GenericRecordList {
    static getItemType() {
        return Ko
    }
};
r($x, "RL_6fd5ceba4a344fe3bd560a02ec48fa9b");
var Fx = $x;
var sp = class sp extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Service", "serviceAttr", "Service", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new At)
        }, !0, At)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new sp(new sp.RecordClass({
            serviceAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "7096ca00-9972-8124-fcaf-f6ac0bf8440c"
    }
};
r(sp, "RC_7096ca0099728124fcaff6ac0bf8440c");
var yi = sp;
yi.init();
var Mx = class Mx extends e.GenericRecordList {
    static getItemType() {
        return si
    }
};
r(Mx, "RL_70cbcd4f3fa22ae115b8f290ce9c0859");
var Ux = Mx;
var qx = class qx extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Name", "nameAttr", "Name", !1, !1, e.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Value", "valueAttr", "Value", !1, !1, e.DataTypes.Text, function() {
            return ""
        }, !0)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
};
r(qx, "ST_914bc56c582d6b8ecb447d4f264116a5Structure");
var de = qx;
de.init();
var Hx = class Hx extends e.GenericRecordList {
    static getItemType() {
        return de
    }
};
r(Hx, "RL_ec897e844fea3d1af8ca2f93825826e8");
var Ti = Hx;
var Wx = class Wx extends e.GenericRecordList {
    static getItemType() {
        return se
    }
};
r(Wx, "RL_bd8baa4f319b21ee2970fb4d1ea66bc3");
var Si = Wx;
var zx = class zx extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("BaseURL", "baseURLAttr", "BaseURL", !1, !1, e.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("URLPath", "uRLPathAttr", "URLPath", !1, !1, e.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("URLQueryParameters", "uRLQueryParametersAttr", "URLQueryParameters", !1, !1, e.DataTypes.RecordList, function() {
            return e.ImmutableBase.getData(new Ti)
        }, !0, Ti), this.attr("HTTPMethod", "hTTPMethodAttr", "HTTPMethod", !1, !1, e.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Headers", "headersAttr", "Headers", !1, !1, e.DataTypes.RecordList, function() {
            return e.ImmutableBase.getData(new Si)
        }, !0, Si), this.attr("RequestText", "requestTextAttr", "RequestText", !1, !1, e.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("RequestBinary", "requestBinaryAttr", "RequestBinary", !1, !1, e.DataTypes.BinaryData, function() {
            return e.BinaryData.defaultValue
        }, !0)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
};
r(zx, "ST_777cb9fd3a5270d1c4f4fb5c135ce52fStructure");
var pe = zx;
pe.init();
var Kx = class Kx extends e.GenericRecordList {
    static getItemType() {
        return pe
    }
};
r(Kx, "RL_70ce87a32945cdfa70c1987b8cb33dcb");
var jx = Kx;
var np = class np extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Attribute1", "attribute1Attr", "316896", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new M)
        }, !0, M)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new np(new np.RecordClass({
            attribute1Attr: e.ImmutableBase.getData(a)
        }))
    }
};
r(np, "ST_70e883716d3492d50b44a432d3f57a8dStructure");
var fe = np;
fe.init();
var Zx = class Zx extends e.GenericRecordList {
    static getItemType() {
        return we
    }
};
r(Zx, "RL_720c5f8bdedf3ce92188a2fbe493fa9c");
var Yx = Zx;
var ip = class ip extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Residence_listItem", "residence_listItemAttr", "Residence_listItem", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new kf)
        }, !0, kf)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new ip(new ip.RecordClass({
            residence_listItemAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "72deccc4-588d-d4c5-9ea2-12c47055f933"
    }
};
r(ip, "RC_72deccc4588dd4c59ea212c47055f933");
var Di = ip;
Di.init();
var Xx = class Xx extends e.GenericRecordList {
    static getItemType() {
        return ir
    }
};
r(Xx, "RL_7545ab9c9158f795c77f16f31b0fc3cd");
var Qx = Xx;
var tO = class tO extends e.GenericRecordList {
    static getItemType() {
        return kt
    }
};
r(tO, "RL_7649b6f3b5d31da383ad943effdeab99");
var eO = tO;
var up = class up extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Compliance", "complianceAttr", "Compliance", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Ne)
        }, !0, Ne)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new up(new up.RecordClass({
            complianceAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "769b74cf-243b-ca7e-23f6-d8b3e094aafe"
    }
};
r(up, "RC_769b74cf243bca7e23f6d8b3e094aafe");
var bi = up;
bi.init();
var aO = class aO extends e.GenericRecordList {
    static getItemType() {
        return Aa
    }
};
r(aO, "RL_76a4a5b2c454ce7cb9d8436e9849949e");
var rO = aO;
var cp = class cp extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2PAdvertiserUpdateResponse", "p2PAdvertiserUpdateResponseAttr", "P2PAdvertiserUpdateResponse", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Ma)
        }, !0, Ma)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new cp(new cp.RecordClass({
            p2PAdvertiserUpdateResponseAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "76c3b37a-218d-89cb-61ba-aeeb835fdcd7"
    }
};
r(cp, "RC_76c3b37a218d89cb61baaeeb835fdcd7");
var gi = cp;
gi.init();
var lp = class lp extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("IDVDocumentAddResponse", "iDVDocumentAddResponseAttr", "IDVDocumentAddResponse", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new qa)
        }, !0, qa)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new lp(new lp.RecordClass({
            iDVDocumentAddResponseAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "f2634b8e-faff-648b-1462-2bd5b25d8167"
    }
};
r(lp, "RC_f2634b8efaff648b14622bd5b25d8167");
var Ai = lp;
Ai.init();
var sO = class sO extends e.GenericRecordList {
    static getItemType() {
        return Ai
    }
};
r(sO, "RL_7780b2a9492505990d4a901334a00d28");
var oO = sO;
var dp = class dp extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Error", "errorAttr", "Error", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new K)
        }, !0, K)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new dp(new dp.RecordClass({
            errorAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "854dbd28-04fb-b731-b146-8b879331bbde"
    }
};
r(dp, "RC_854dbd2804fbb731b1468b879331bbde");
var xi = dp;
xi.init();
var iO = class iO extends e.GenericRecordList {
    static getItemType() {
        return xi
    }
};
r(iO, "RL_77d062a6109acd64f7dab8d805a7e390");
var nO = iO;
var cO = class cO extends e.GenericRecordList {
    static getItemType() {
        return Zo
    }
};
r(cO, "RL_7887e44cb06676c07450b33a89d88acf");
var uO = cO;
var dO = class dO extends e.GenericRecordList {
    static getItemType() {
        return Pn
    }
};
r(dO, "RL_797ea25955211e661a31ab21177322ea");
var lO = dO;
var pp = class pp extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Memo", "memoAttr", "Memo", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new F)
        }, !0, F)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new pp(new pp.RecordClass({
            memoAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "d1a6766d-bf02-f325-ceb6-a77b05b2275c"
    }
};
r(pp, "RC_d1a6766dbf02f325ceb6a77b05b2275c");
var Oi = pp;
Oi.init();
var fO = class fO extends e.GenericRecordList {
    static getItemType() {
        return Oi
    }
};
r(fO, "RL_79cfbe5655c5b6f20d7b8d187849d751");
var pO = fO;
var yO = class yO extends e.GenericRecordList {
    static getItemType() {
        return Gt
    }
};
r(yO, "RL_79e5f7b3f667162d18056364b5add7d4");
var mO = yO;
var SO = class SO extends e.GenericRecordList {
    static getItemType() {
        return $t
    }
};
r(SO, "RL_7a119d08ddaa03a9adb755d998da5288");
var TO = SO;
var fp = class fp extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2POrderDisputeRequest", "p2POrderDisputeRequestAttr", "P2POrderDisputeRequest", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Ha)
        }, !0, Ha)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new fp(new fp.RecordClass({
            p2POrderDisputeRequestAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "7a45e74e-27c6-f71f-6317-3a4101e26602"
    }
};
r(fp, "RC_7a45e74e27c6f71f63173a4101e26602");
var vi = fp;
vi.init();
var bO = class bO extends e.GenericRecordList {
    static getItemType() {
        return vt
    }
};
r(bO, "RL_7a61959884cd1d97a8df26308775a5c7");
var DO = bO;
var AO = class AO extends e.GenericRecordList {
    static getItemType() {
        return Wt
    }
};
r(AO, "RL_7aafab926cc9835b50687e3590d16e83");
var gO = AO;
var OO = class OO extends e.GenericRecordList {
    static getItemType() {
        return M
    }
};
r(OO, "RL_7abd00c19dfba750efad6148fe8e85e4");
var xO = OO;
var mp = class mp extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Trading_platform_statusItem", "trading_platform_statusItemAttr", "Trading_platform_statusItem", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Kf)
        }, !0, Kf)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new mp(new mp.RecordClass({
            trading_platform_statusItemAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "7b274cb5-f96a-8ac2-97db-685000547ab1"
    }
};
r(mp, "RC_7b274cb5f96a8ac297db685000547ab1");
var Ri = mp;
Ri.init();
var RO = class RO extends e.GenericRecordList {
    static getItemType() {
        return as
    }
};
r(RO, "RL_7c61a4d6660756cbdce1ad8d8a460eb6");
var vO = RO;
var yp = class yp extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Geolocation", "geolocationAttr", "Geolocation", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Tr)
        }, !0, Tr)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new yp(new yp.RecordClass({
            geolocationAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "7c67e52a-2329-c05d-78ed-79fcc452835e"
    }
};
r(yp, "RC_7c67e52a2329c05d78ed79fcc452835e");
var Ci = yp;
Ci.init();
var hO = class hO extends e.GenericRecordList {
    static getItemType() {
        return Ue
    }
};
r(hO, "RL_7c9f790fa5c2ed1fbdf0de41347402fa");
var CO = hO;
var Tp = class Tp extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("StateList", "stateListAttr", "StateList", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Mf)
        }, !0, Mf)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Tp(new Tp.RecordClass({
            stateListAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "7cea7a7f-a663-9b24-1a75-c9e6bd8028d0"
    }
};
r(Tp, "RC_7cea7a7fa6639b241a75c9e6bd8028d0");
var hi = Tp;
hi.init();
var Sp = class Sp extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("NotificationEventArgs", "notificationEventArgsAttr", "NotificationEventArgs", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Sr)
        }, !0, Sr)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Sp(new Sp.RecordClass({
            notificationEventArgsAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "d4e53cdc-7541-b46b-3d5d-c63fe53b6ea7"
    }
};
r(Sp, "RC_d4e53cdc7541b46b3d5dc63fe53b6ea7");
var wi = Sp;
wi.init();
var IO = class IO extends e.GenericRecordList {
    static getItemType() {
        return wi
    }
};
r(IO, "RL_7dbc7753dcc77f4ba03f73d24b5f31fa");
var wO = IO;
var Dp = class Dp extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Trading_platform_available_accountItemMT5", "trading_platform_available_accountItemMT5Attr", "Trading_platform_available_accountItemMT5", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Jf)
        }, !0, Jf)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Dp(new Dp.RecordClass({
            trading_platform_available_accountItemMT5Attr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "7de6f1e2-c998-00d3-c6e1-aaeb14f3afdd"
    }
};
r(Dp, "RC_7de6f1e2c99800d3c6e1aaeb14f3afdd");
var Ii = Dp;
Ii.init();
var bp = class bp extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Text", "textAttr", "Text", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new J)
        }, !0, J)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new bp(new bp.RecordClass({
            textAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "fd85b3af-52c2-cec9-0071-2baee7eae3e9"
    }
};
r(bp, "RC_fd85b3af52c2cec900712baee7eae3e9");
var Pi = bp;
Pi.init();
var NO = class NO extends e.GenericRecordList {
    static getItemType() {
        return Pi
    }
};
r(NO, "RL_7e5308f6a973877d582dc32e33818ae5");
var PO = NO;
var LO = class LO extends e.GenericRecordList {
    static getItemType() {
        return Ps
    }
};
r(LO, "RL_7e823839a7f836a297fa8d09d5b77858");
var VO = LO;
var JO = class JO extends e.GenericRecordList {
    static getItemType() {
        return yt
    }
};
r(JO, "RL_7ea0e409b1b42e8e6d7ca54869209a73");
var GO = JO;
var _O = class _O extends e.GenericRecordList {
    static getItemType() {
        return Ke
    }
};
r(_O, "RL_7ec701d4086b9503e816fe47fc7b3996");
var BO = _O;
var gp = class gp extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Cashier", "cashierAttr", "Cashier", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Aa)
        }, !0, Aa)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new gp(new gp.RecordClass({
            cashierAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "7f36dbf2-6349-b8c7-8224-f133e993735e"
    }
};
r(gp, "RC_7f36dbf26349b8c78224f133e993735e");
var Ni = gp;
Ni.init();
var Ap = class Ap extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("PostTradingPlatformPasswordResetResponse", "postTradingPlatformPasswordResetResponseAttr", "PostTradingPlatformPasswordResetResponse", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Ua)
        }, !0, Ua)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Ap(new Ap.RecordClass({
            postTradingPlatformPasswordResetResponseAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "86cda441-e1db-9e62-e574-ab54636ea9ea"
    }
};
r(Ap, "RC_86cda441e1db9e62e574ab54636ea9ea");
var Vi = Ap;
Vi.init();
var EO = class EO extends e.GenericRecordList {
    static getItemType() {
        return Vi
    }
};
r(EO, "RL_7f64f8c0aaa300d34c79a90785135151");
var kO = EO;
var $O = class $O extends e.GenericRecordList {
    static getItemType() {
        return Ls
    }
};
r($O, "RL_802322074908177d1de132f062300275");
var FO = $O;
var MO = class MO extends e.GenericRecordList {
    static getItemType() {
        return xt
    }
};
r(MO, "RL_81d2bc71eb1c605f53ae134ad3caa1c0");
var UO = MO;
var xp = class xp extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("OnfidoService", "onfidoServiceAttr", "OnfidoService", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new tr)
        }, !0, tr)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new xp(new xp.RecordClass({
            onfidoServiceAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "81d96dbb-343b-41f5-5c20-2064ee7f136d"
    }
};
r(xp, "RC_81d96dbb343b41f55c202064ee7f136d");
var Li = xp;
Li.init();
var HO = class HO extends e.GenericRecordList {
    static getItemType() {
        return jn
    }
};
r(HO, "RL_82612f53b8d711fd3715db0c86244345");
var qO = HO;
var Op = class Op extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2POrderReviewResponse", "p2POrderReviewResponseAttr", "P2POrderReviewResponse", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Wa)
        }, !0, Wa)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Op(new Op.RecordClass({
            p2POrderReviewResponseAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "8274740c-430e-d1e3-9b7a-1549b09d4ca3"
    }
};
r(Op, "RC_8274740c430ed1e39b7a1549b09d4ca3");
var Gi = Op;
Gi.init();
var zO = class zO extends e.GenericRecordList {
    static getItemType() {
        return Cn
    }
};
r(zO, "RL_827e6062dd8814ace80f2a3f1a613f76");
var WO = zO;
var vp = class vp extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("RiskLevel_LandingCompany", "riskLevel_LandingCompanyAttr", "RiskLevel_LandingCompany", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new vt)
        }, !0, vt)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new vp(new vp.RecordClass({
            riskLevel_LandingCompanyAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "890f16fe-63a6-b66b-2130-ac1a285dc1bf"
    }
};
r(vp, "RC_890f16fe63a6b66b2130ac1a285dc1bf");
var Ji = vp;
Ji.init();
var KO = class KO extends e.GenericRecordList {
    static getItemType() {
        return Ji
    }
};
r(KO, "RL_855c9279ae87db4555d2fbb8ba90afc5");
var jO = KO;
var Rp = class Rp extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("HTTPHeader", "hTTPHeaderAttr", "HTTPHeader", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new te)
        }, !0, te)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Rp(new Rp.RecordClass({
            hTTPHeaderAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "e03efdb9-5c63-1545-332d-9962dd0402d3"
    }
};
r(Rp, "RC_e03efdb95c631545332d9962dd0402d3");
var Bi = Rp;
Bi.init();
var ZO = class ZO extends e.GenericRecordList {
    static getItemType() {
        return Bi
    }
};
r(ZO, "RL_85edf15715c5108a5315d804754ce1b4");
var YO = ZO;
var Cp = class Cp extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Account_opening", "account_openingAttr", "Account_opening", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Oa)
        }, !0, Oa)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Cp(new Cp.RecordClass({
            account_openingAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "8688a658-a83b-6884-b85d-11d8db4546d3"
    }
};
r(Cp, "RC_8688a658a83b6884b85d11d8db4546d3");
var _i = Cp;
_i.init();
var XO = class XO extends e.GenericRecordList {
    static getItemType() {
        return nt
    }
};
r(XO, "RL_87e06844679358e0f8214e75ce605df1");
var QO = XO;
var tv = class tv extends e.GenericRecordList {
    static getItemType() {
        return Ea
    }
};
r(tv, "RL_87e64e62a021a7f641dffaaa73541aa5");
var ev = tv;
var av = class av extends e.GenericRecordList {
    static getItemType() {
        return Ci
    }
};
r(av, "RL_881e0bd330dc44a0f930b17dfa132522");
var rv = av;
var hp = class hp extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Field", "fieldAttr", "Field", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new U)
        }, !0, U)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new hp(new hp.RecordClass({
            fieldAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "8871646a-b63a-33b0-24a1-a9f7c70f7374"
    }
};
r(hp, "RC_8871646ab63a33b024a1a9f7c70f7374");
var ki = hp;
ki.init();
var sv = class sv extends e.GenericRecordList {
    static getItemType() {
        return Kt
    }
};
r(sv, "RL_88893b2b6478ca91e7c481f161053cfa");
var ov = sv;
var wp = class wp extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("ServiceTokenRequest", "serviceTokenRequestAttr", "ServiceTokenRequest", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Pa)
        }, !0, Pa)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new wp(new wp.RecordClass({
            serviceTokenRequestAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "c6db6e25-83d5-8b1f-7d91-b76a532e7eb0"
    }
};
r(wp, "RC_c6db6e2583d58b1f7d91b76a532e7eb0");
var Ei = wp;
Ei.init();
var iv = class iv extends e.GenericRecordList {
    static getItemType() {
        return Ei
    }
};
r(iv, "RL_88d704bede9d351ca8b921e5d8b5e60c");
var nv = iv;
var cv = class cv extends e.GenericRecordList {
    static getItemType() {
        return Bo
    }
};
r(cv, "RL_8972d3be5f5c984833af7ea32d6710e8");
var uv = cv;
var dv = class dv extends e.GenericRecordList {
    static getItemType() {
        return K
    }
};
r(dv, "RL_89efb8ec15cf4e133db42b43e8a70d31");
var lv = dv;
var Ip = class Ip extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Payment_method_detail", "payment_method_detailAttr", "Payment_method_detail", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new fe)
        }, !0, fe)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Ip(new Ip.RecordClass({
            payment_method_detailAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "8a779040-577f-5340-0768-cd458f2db064"
    }
};
r(Ip, "RC_8a779040577f53400768cd458f2db064");
var Fi = Ip;
Fi.init();
var Pp = class Pp extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("SetSettingsResponse", "setSettingsResponseAttr", "SetSettingsResponse", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new za)
        }, !0, za)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Pp(new Pp.RecordClass({
            setSettingsResponseAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "a5a2375a-3e91-041c-bcce-ac771e133575"
    }
};
r(Pp, "RC_a5a2375a3e91041cbcceac771e133575");
var $i = Pp;
$i.init();
var fv = class fv extends e.GenericRecordList {
    static getItemType() {
        return $i
    }
};
r(fv, "RL_8b2f8ecc4ceeaac972acb8a50205485d");
var pv = fv;
var yv = class yv extends e.GenericRecordList {
    static getItemType() {
        return $e
    }
};
r(yv, "RL_8b3193777919a00b12740a1aa0e7a669");
var mv = yv;
var Np = class Np extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Echo_req8", "echo_req8Attr", "Echo_req8", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new wt)
        }, !0, wt)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Np(new Np.RecordClass({
            echo_req8Attr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "8b362302-b596-6ced-d4e8-c7c42d7e46f8"
    }
};
r(Np, "RC_8b362302b5966cedd4e8c7c42d7e46f8");
var Ui = Np;
Ui.init();
var Sv = class Sv extends e.GenericRecordList {
    static getItemType() {
        return X
    }
};
r(Sv, "RL_8bede31a859ddf52ef4cc59746531ef8");
var Tv = Sv;
var bv = class bv extends e.GenericRecordList {
    static getItemType() {
        return ni
    }
};
r(bv, "RL_8c761c273f71d4bef4e43f7373a08758");
var Dv = bv;
var Vp = class Vp extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Passport", "passportAttr", "Passport", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Ee)
        }, !0, Ee)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Vp(new Vp.RecordClass({
            passportAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "8ccc0915-7954-5400-bb55-58b597337647"
    }
};
r(Vp, "RC_8ccc091579545400bb5558b597337647");
var Mi = Vp;
Mi.init();
var Lp = class Lp extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2PAdvertiserRelationsRequest", "p2PAdvertiserRelationsRequestAttr", "P2PAdvertiserRelationsRequest", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new dt)
        }, !0, dt)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Lp(new Lp.RecordClass({
            p2PAdvertiserRelationsRequestAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "aa38f0f8-6a36-8b5a-a97d-09652c85df95"
    }
};
r(Lp, "RC_aa38f0f86a368b5aa97d09652c85df95");
var qi = Lp;
qi.init();
var Av = class Av extends e.GenericRecordList {
    static getItemType() {
        return qi
    }
};
r(Av, "RL_8d1eec609ccea2aa18ac0df726cafa33");
var gv = Av;
var Ov = class Ov extends e.GenericRecordList {
    static getItemType() {
        return sa
    }
};
r(Ov, "RL_8d376ab44b9f0e7b6d06a6332f1483f2");
var xv = Ov;
var Rv = class Rv extends e.GenericRecordList {
    static getItemType() {
        return za
    }
};
r(Rv, "RL_8d67858abdde3dd334c892c5fd9176b4");
var vv = Rv;
var Gp = class Gp extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("StatementFee", "statementFeeAttr", "StatementFee", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new he)
        }, !0, he)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Gp(new Gp.RecordClass({
            statementFeeAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "955ccd26-a5d9-8bb4-3926-051cccd6f301"
    }
};
r(Gp, "RC_955ccd26a5d98bb43926051cccd6f301");
var Hi = Gp;
Hi.init();
var hv = class hv extends e.GenericRecordList {
    static getItemType() {
        return Hi
    }
};
r(hv, "RL_8d98f970a808a859e46d763c2a9f5e6c");
var Cv = hv;
var Iv = class Iv extends e.GenericRecordList {
    static getItemType() {
        return ct
    }
};
r(Iv, "RL_8e09be908eb2289212bd0eb58ad9bdb1");
var wv = Iv;
var Nv = class Nv extends e.GenericRecordList {
    static getItemType() {
        return on
    }
};
r(Nv, "RL_8e38afd3984d04ce643edcb181b91ae7");
var Pv = Nv;
var Lv = class Lv extends e.GenericRecordList {
    static getItemType() {
        return $
    }
};
r(Lv, "RL_8f0d9e710ce4ee39ba867cfafefd52db");
var Vv = Lv;
var Jp = class Jp extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Right", "rightAttr", "Right", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new ra)
        }, !0, ra)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Jp(new Jp.RecordClass({
            rightAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "8f3efc29-bef9-11e7-4df2-22fdba36c135"
    }
};
r(Jp, "RC_8f3efc29bef911e74df222fdba36c135");
var Wi = Jp;
Wi.init();
var Bp = class Bp extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("FetchStatesListResponse", "fetchStatesListResponseAttr", "FetchStatesListResponse", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new fa)
        }, !0, fa)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Bp(new Bp.RecordClass({
            fetchStatesListResponseAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "900ac3fb-84b1-d9ad-8b5d-550f75e57f07"
    }
};
r(Bp, "RC_900ac3fb84b1d9ad8b5d550f75e57f07");
var zi = Bp;
zi.init();
var Jv = class Jv extends e.GenericRecordList {
    static getItemType() {
        return No
    }
};
r(Jv, "RL_904325e5d042a099908ed28253c5b8a6");
var Gv = Jv;
var _v = class _v extends e.GenericRecordList {
    static getItemType() {
        return Ir
    }
};
r(_v, "RL_90dfebee20aff7c26e30042add874567");
var Bv = _v;
var Ev = class Ev extends e.GenericRecordList {
    static getItemType() {
        return qe
    }
};
r(Ev, "RL_91f3ef19dd1007f7116bdf96cd006384");
var kv = Ev;
var $v = class $v extends e.GenericRecordList {
    static getItemType() {
        return Ui
    }
};
r($v, "RL_9238bba5cbd10e6024ffc4f7cd576720");
var Fv = $v;
var Mv = class Mv extends e.GenericRecordList {
    static getItemType() {
        return Da
    }
};
r(Mv, "RL_92402dd058de79af9f22de1380779555");
var Uv = Mv;
var Hv = class Hv extends e.GenericRecordList {
    static getItemType() {
        return Uo
    }
};
r(Hv, "RL_925417f32894fd9622f9ac4a0f6d3848");
var qv = Hv;
var zv = class zv extends e.GenericRecordList {
    static getItemType() {
        return qs
    }
};
r(zv, "RL_93708d7bb7d0fbdca673f09a924bcdb7");
var Wv = zv;
var Kv = class Kv extends e.GenericRecordList {
    static getItemType() {
        return Ur
    }
};
r(Kv, "RL_93a1caf6b09cfa25aafd4d96e7527613");
var jv = Kv;
var _p = class _p extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Detail", "detailAttr", "Detail", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Lf)
        }, !0, Lf)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new _p(new _p.RecordClass({
            detailAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "9469645a-6983-eeba-9173-683938b54abe"
    }
};
r(_p, "RC_9469645a6983eeba9173683938b54abe");
var ji = _p;
ji.init();
var Zv = class Zv extends e.GenericRecordList {
    static getItemType() {
        return be
    }
};
r(Zv, "RL_94cd9fdaaf1a67a3bfa0e32663c1fe70");
var Yv = Zv;
var Xv = class Xv extends e.GenericRecordList {
    static getItemType() {
        return ja
    }
};
r(Xv, "RL_954847ed7a29426b04fcc994e669e176");
var Qv = Xv;
var tR = class tR extends e.GenericRecordList {
    static getItemType() {
        return Gn
    }
};
r(tR, "RL_958ee6d9719c17433ce81822ca60f4a2");
var eR = tR;
var aR = class aR extends e.GenericRecordList {
    static getItemType() {
        return Mi
    }
};
r(aR, "RL_97e8f3375611a96a6012eed05d91f59d");
var rR = aR;
var sR = class sR extends e.GenericRecordList {
    static getItemType() {
        return vs
    }
};
r(sR, "RL_98f3b8624fe7a466ac7ebfc153dac373");
var oR = sR;
var iR = class iR extends e.GenericRecordList {
    static getItemType() {
        return Je
    }
};
r(iR, "RL_995adbfa0595ff6f2931f3c493a96ab6");
var nR = iR;
var cR = class cR extends e.GenericRecordList {
    static getItemType() {
        return ts
    }
};
r(cR, "RL_996bbb10b9805c390cf8671b30f6d3a4");
var uR = cR;
var dR = class dR extends e.GenericRecordList {
    static getItemType() {
        return Ft
    }
};
r(dR, "RL_9a37b428e209f265109cf020c957ba69");
var lR = dR;
var fR = class fR extends e.GenericRecordList {
    static getItemType() {
        return ka
    }
};
r(fR, "RL_9b308ec16292e64220de49e79891128d");
var pR = fR;
var yR = class yR extends e.GenericRecordList {
    static getItemType() {
        return qa
    }
};
r(yR, "RL_9b333bac761e70e0fa5925ace6c6b732");
var mR = yR;
var SR = class SR extends e.GenericRecordList {
    static getItemType() {
        return Ka
    }
};
r(SR, "RL_9b5ff325fa2b1963afc7ac5fe1fefcac");
var TR = SR;
var bR = class bR extends e.GenericRecordList {
    static getItemType() {
        return U
    }
};
r(bR, "RL_9b617bd75343388384985ad13d554256");
var DR = bR;
var kp = class kp extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2POrderConfirmRequest", "p2POrderConfirmRequestAttr", "P2POrderConfirmRequest", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new $a)
        }, !0, $a)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new kp(new kp.RecordClass({
            p2POrderConfirmRequestAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "9b6a5f6a-0f99-ac90-86bb-3ba26d838bf1"
    }
};
r(kp, "RC_9b6a5f6a0f99ac9086bb3ba26d838bf1");
var Ki = kp;
Ki.init();
var Ep = class Ep extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Currency_config", "currency_configAttr", "Currency_config", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new je)
        }, !0, je)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Ep(new Ep.RecordClass({
            currency_configAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "fed8226e-0551-19cd-a977-5f74ac223ef2"
    }
};
r(Ep, "RC_fed8226e055119cda9775f74ac223ef2");
var Yi = Ep;
Yi.init();
var AR = class AR extends e.GenericRecordList {
    static getItemType() {
        return Yi
    }
};
r(AR, "RL_9b9241a2f74aae5dad6a96c423cf89d8");
var gR = AR;
var OR = class OR extends e.GenericRecordList {
    static getItemType() {
        return Ya
    }
};
r(OR, "RL_9ba938eac8f7611815bf878625e7d65e");
var xR = OR;
var RR = class RR extends e.GenericRecordList {
    static getItemType() {
        return Xn
    }
};
r(RR, "RL_9baf947baad965c500c2d89efd8d1d67");
var vR = RR;
var hR = class hR extends e.GenericRecordList {
    static getItemType() {
        return qn
    }
};
r(hR, "RL_9bbf3501c857fa771241aed7c9717166");
var CR = hR;
var IR = class IR extends e.GenericRecordList {
    static getItemType() {
        return _i
    }
};
r(IR, "RL_9c3b367f2c06676be4f28fe9c7a59a38");
var wR = IR;
var NR = class NR extends e.GenericRecordList {
    static getItemType() {
        return z
    }
};
r(NR, "RL_9cb00801b4a261afbddde8f0eaaf25f3");
var PR = NR;
var LR = class LR extends e.GenericRecordList {
    static getItemType() {
        return Fi
    }
};
r(LR, "RL_9ce1bd56af50b8bbaf5a7db4f666de51");
var VR = LR;
var JR = class JR extends e.GenericRecordList {
    static getItemType() {
        return pi
    }
};
r(JR, "RL_9d3186e90bc9d9c992bd1289281160e2");
var GR = JR;
var _R = class _R extends e.GenericRecordList {
    static getItemType() {
        return Qe
    }
};
r(_R, "RL_9d69b2d3ce2ad95c00706adc74706b15");
var BR = _R;
var ER = class ER extends e.GenericRecordList {
    static getItemType() {
        return ea
    }
};
r(ER, "RL_9da5c6764fa38cdbc45ffab2fe9a4d33");
var kR = ER;
var $R = class $R extends e.GenericRecordList {
    static getItemType() {
        return Za
    }
};
r($R, "RL_9e08984c04aa3363c26f26b284faa96b");
var FR = $R;
var Fp = class Fp extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Deposit", "depositAttr", "Deposit", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new ga)
        }, !0, ga)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Fp(new Fp.RecordClass({
            depositAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "9ea5c08a-e168-00a6-4582-da5745fe48cf"
    }
};
r(Fp, "RC_9ea5c08ae16800a64582da5745fe48cf");
var Zi = Fp;
Zi.init();
var MR = class MR extends e.GenericRecordList {
    static getItemType() {
        return Zi
    }
};
r(MR, "RL_9e1ff0949548eb09d4dbb455a422d959");
var UR = MR;
var HR = class HR extends e.GenericRecordList {
    static getItemType() {
        return Ma
    }
};
r(HR, "RL_9e58d9497ee0afabaafd8b106b944074");
var qR = HR;
var zR = class zR extends e.GenericRecordList {
    static getItemType() {
        return Ns
    }
};
r(zR, "RL_9e6427a18f69ae9bc484388b785b5c9d");
var WR = zR;
var $p = class $p extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("NilooAuthorize2Response", "nilooAuthorize2ResponseAttr", "NilooAuthorize2Response", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Ga)
        }, !0, Ga)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new $p(new $p.RecordClass({
            nilooAuthorize2ResponseAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "9edae87b-d34d-57fa-71f2-a72c0cc57e1a"
    }
};
r($p, "RC_9edae87bd34d57fa71f2a72c0cc57e1a");
var Qi = $p;
Qi.init();
var KR = class KR extends e.GenericRecordList {
    static getItemType() {
        return Li
    }
};
r(KR, "RL_9f08b56176d33deee65495f413d78949");
var jR = KR;
var ZR = class ZR extends e.GenericRecordList {
    static getItemType() {
        return us
    }
};
r(ZR, "RL_9f7e64e3acb92ada6c7cc1def60ee7ce");
var YR = ZR;
var Up = class Up extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Phone_number_verification", "phone_number_verificationAttr", "Phone_number_verification", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Br)
        }, !0, Br)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Up(new Up.RecordClass({
            phone_number_verificationAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "9fdefb14-23ae-0af9-c1d3-21109b8695e4"
    }
};
r(Up, "RC_9fdefb1423ae0af9c1d321109b8695e4");
var Xi = Up;
Xi.init();
var XR = class XR extends e.GenericRecordList {
    static getItemType() {
        return wr
    }
};
r(XR, "RL_a20cf7a86706288fea479fd0bec09085");
var QR = XR;
var Mp = class Mp extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2PAdvertiserPaymentMethodsResponse", "p2PAdvertiserPaymentMethodsResponseAttr", "P2PAdvertiserPaymentMethodsResponse", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new mr)
        }, !0, mr)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Mp(new Mp.RecordClass({
            p2PAdvertiserPaymentMethodsResponseAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "a246c61e-9fab-a433-ef6d-84fa27cfa397"
    }
};
r(Mp, "RC_a246c61e9faba433ef6d84fa27cfa397");
var eu = Mp;
eu.init();
var qp = class qp extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("URLQueryParameter2", "uRLQueryParameter2Attr", "URLQueryParameter2", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new de)
        }, !0, de)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new qp(new qp.RecordClass({
            uRLQueryParameter2Attr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "c221a268-5264-ea66-58ff-10f85ac0a996"
    }
};
r(qp, "RC_c221a2685264ea6658ff10f85ac0a996");
var tu = qp;
tu.init();
var tC = class tC extends e.GenericRecordList {
    static getItemType() {
        return tu
    }
};
r(tC, "RL_a2526d86090f1f32edaaf7a1f751365f");
var eC = tC;
var aC = class aC extends e.GenericRecordList {
    static getItemType() {
        return Ys
    }
};
r(aC, "RL_a269dfd9a948aad7cbddba837f8c095f");
var rC = aC;
var sC = class sC extends e.GenericRecordList {
    static getItemType() {
        return Xi
    }
};
r(sC, "RL_a2a3d623cff8db0b23d39b4d88a9486f");
var oC = sC;
var Hp = class Hp extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("LastRejected", "lastRejectedAttr", "LastRejected", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new st)
        }, !0, st)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Hp(new Hp.RecordClass({
            lastRejectedAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "a51985e6-b89e-e511-d2ab-23981acd721e"
    }
};
r(Hp, "RC_a51985e6b89ee511d2ab23981acd721e");
var ru = Hp;
ru.init();
var iC = class iC extends e.GenericRecordList {
    static getItemType() {
        return Sr
    }
};
r(iC, "RL_a5d549866b2ac93eae1f3fb2e43c0bf7");
var nC = iC;
var Wp = class Wp extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("PostNewAccountVirtualRequest", "postNewAccountVirtualRequestAttr", "PostNewAccountVirtualRequest", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Gt)
        }, !0, Gt)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Wp(new Wp.RecordClass({
            postNewAccountVirtualRequestAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "a5fc3d62-312a-89b3-2ae3-93e0571bcad7"
    }
};
r(Wp, "RC_a5fc3d62312a89b32ae393e0571bcad7");
var au = Wp;
au.init();
var cC = class cC extends e.GenericRecordList {
    static getItemType() {
        return Qa
    }
};
r(cC, "RL_a6ed4fd2e7e0b79f06fecc8c65713a43");
var uC = cC;
var dC = class dC extends e.GenericRecordList {
    static getItemType() {
        return wo
    }
};
r(dC, "RL_a7094b4040c9bc1f29f799c201256c99");
var lC = dC;
var zp = class zp extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("TransactionItem", "transactionItemAttr", "TransactionItem", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Gf)
        }, !0, Gf)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new zp(new zp.RecordClass({
            transactionItemAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "a83c5350-1675-e1b1-a92d-ce121c194a38"
    }
};
r(zp, "RC_a83c53501675e1b1a92dce121c194a38");
var ou = zp;
ou.init();
var fC = class fC extends e.GenericRecordList {
    static getItemType() {
        return ut
    }
};
r(fC, "RL_a85951adc11db15827205a4c30d6e88f");
var pC = fC;
var jp = class jp extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("IDR", "iDRAttr", "IDR", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new br)
        }, !0, br)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new jp(new jp.RecordClass({
            iDRAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "a8681099-a96d-9738-6677-79eaaccedc4a"
    }
};
r(jp, "RC_a8681099a96d9738667779eaaccedc4a");
var su = jp;
su.init();
var yC = class yC extends e.GenericRecordList {
    static getItemType() {
        return vn
    }
};
r(yC, "RL_a8b7c276560c35af141714ac8a51d257");
var mC = yC;
var SC = class SC extends e.GenericRecordList {
    static getItemType() {
        return tr
    }
};
r(SC, "RL_a8d533a0f4e6b4998d1e5475942bbcf3");
var TC = SC;
var Kp = class Kp extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("PostResetPasswordRequest", "postResetPasswordRequestAttr", "PostResetPasswordRequest", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Qt)
        }, !0, Qt)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Kp(new Kp.RecordClass({
            postResetPasswordRequestAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "a9755f38-b054-2dfb-6acd-d8617637c169"
    }
};
r(Kp, "RC_a9755f38b0542dfb6acdd8617637c169");
var nu = Kp;
nu.init();
var bC = class bC extends e.GenericRecordList {
    static getItemType() {
        return Eo
    }
};
r(bC, "RL_a9afb210b5496f25c21da21e788199b5");
var DC = bC;
var AC = class AC extends e.GenericRecordList {
    static getItemType() {
        return Ve
    }
};
r(AC, "RL_a9ea31b939f652b4b427fa383c80cdbb");
var gC = AC;
var Yp = class Yp extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("PostTradingPlatformPasswordChangeRequest", "postTradingPlatformPasswordChangeRequestAttr", "PostTradingPlatformPasswordChangeRequest", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Xa)
        }, !0, Xa)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Yp(new Yp.RecordClass({
            postTradingPlatformPasswordChangeRequestAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "b7ccb1d3-7481-9fab-b1f3-fad7a6c0dd99"
    }
};
r(Yp, "RC_b7ccb1d374819fabb1f3fad7a6c0dd99");
var iu = Yp;
iu.init();
var OC = class OC extends e.GenericRecordList {
    static getItemType() {
        return iu
    }
};
r(OC, "RL_aa768f1f5f08fea3fa4adb58f7814e07");
var xC = OC;
var RC = class RC extends e.GenericRecordList {
    static getItemType() {
        return Rs
    }
};
r(RC, "RL_aa9a39a9d3a53c692e9cbcbac7f37610");
var vC = RC;
var hC = class hC extends e.GenericRecordList {
    static getItemType() {
        return ga
    }
};
r(hC, "RL_aae9a3766bc818ac211c0ea434d05161");
var CC = hC;
var IC = class IC extends e.GenericRecordList {
    static getItemType() {
        return fe
    }
};
r(IC, "RL_ab3bc85f40043017055413a9564ce276");
var wC = IC;
var NC = class NC extends e.GenericRecordList {
    static getItemType() {
        return Wa
    }
};
r(NC, "RL_ab5f17238b4d916b868f1aadc23a7d36");
var PC = NC;
var LC = class LC extends e.GenericRecordList {
    static getItemType() {
        return Xr
    }
};
r(LC, "RL_ab79e9426faff446a04dca332793c58f");
var VC = LC;
var JC = class JC extends e.GenericRecordList {
    static getItemType() {
        return kr
    }
};
r(JC, "RL_abbb06caa2dc3007694c8b499e93ac42");
var GC = JC;
var _C = class _C extends e.GenericRecordList {
    static getItemType() {
        return ot
    }
};
r(_C, "RL_ac654ecd19209e7187154374b6dafe24");
var BC = _C;
var Zp = class Zp extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Standard", "standardAttr", "Standard", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Ke)
        }, !0, Ke)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Zp(new Zp.RecordClass({
            standardAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "aca073df-88d4-0d31-252f-a904cba1bb39"
    }
};
r(Zp, "RC_aca073df88d40d31252fa904cba1bb39");
var uu = Zp;
uu.init();
var Qp = class Qp extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("PostCashierFiatResponse", "postCashierFiatResponseAttr", "PostCashierFiatResponse", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new H)
        }, !0, H)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Qp(new Qp.RecordClass({
            postCashierFiatResponseAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "ad1368b4-9b01-cac1-05fa-b51dcf07c686"
    }
};
r(Qp, "RC_ad1368b49b01cac105fab51dcf07c686");
var cu = Qp;
cu.init();
var Xp = class Xp extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("PostTradingPlatformAvailableAccountResponseMT5", "postTradingPlatformAvailableAccountResponseMT5Attr", "PostTradingPlatformAvailableAccountResponseMT5", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new eo)
        }, !0, eo)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Xp(new Xp.RecordClass({
            postTradingPlatformAvailableAccountResponseMT5Attr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "ad160031-f42d-1788-0074-48cccfc906ac"
    }
};
r(Xp, "RC_ad160031f42d1788007448cccfc906ac");
var lu = Xp;
lu.init();
var ef = class ef extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Zero_spread", "zero_spreadAttr", "Zero_spread", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Xe)
        }, !0, Xe)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new ef(new ef.RecordClass({
            zero_spreadAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "ada7ae2f-7fca-dfe9-ad4c-b9dbd1c4caf8"
    }
};
r(ef, "RC_ada7ae2f7fcadfe9ad4cb9dbd1c4caf8");
var du = ef;
du.init();
var EC = class EC extends e.GenericRecordList {
    static getItemType() {
        return di
    }
};
r(EC, "RL_ae4b771a164f6684a9910e7d97abd12c");
var kC = EC;
var tf = class tf extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Commodity", "commodityAttr", "Commodity", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new ze)
        }, !0, ze)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new tf(new tf.RecordClass({
            commodityAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "e62fa91c-e8ed-0a38-e810-cad8c726da2f"
    }
};
r(tf, "RC_e62fa91ce8ed0a38e810cad8c726da2f");
var pu = tf;
pu.init();
var $C = class $C extends e.GenericRecordList {
    static getItemType() {
        return pu
    }
};
r($C, "RL_aecf700fcd9c0ef5df9dda4dac8947af");
var FC = $C;
var MC = class MC extends e.GenericRecordList {
    static getItemType() {
        return Ni
    }
};
r(MC, "RL_b045e9b0e4d1bde192865267e3d1c52b");
var UC = MC;
var HC = class HC extends e.GenericRecordList {
    static getItemType() {
        return pr
    }
};
r(HC, "RL_b0a8bd7843abab931adac2b23c884550");
var qC = HC;
var zC = class zC extends e.GenericRecordList {
    static getItemType() {
        return Tt
    }
};
r(zC, "RL_b12f7a71666929e6ceec6559f200d213");
var WC = zC;
var KC = class KC extends e.GenericRecordList {
    static getItemType() {
        return E
    }
};
r(KC, "RL_b15112cdeeac0d3ba922a9de50cd9ca3");
var jC = KC;
var rf = class rf extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Echo_req7", "echo_req7Attr", "Echo_req7", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new la)
        }, !0, la)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new rf(new rf.RecordClass({
            echo_req7Attr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "b17c3526-d6de-ec2e-a51f-e6ca6895e3ea"
    }
};
r(rf, "RC_b17c3526d6deec2ea51fe6ca6895e3ea");
var fu = rf;
fu.init();
var af = class af extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("PostTradingPlatformAvailableAccountsRequest", "postTradingPlatformAvailableAccountsRequestAttr", "PostTradingPlatformAvailableAccountsRequest", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new ma)
        }, !0, ma)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new af(new af.RecordClass({
            postTradingPlatformAvailableAccountsRequestAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "f1102e0e-903c-36b8-9dd3-a8ad41701e5f"
    }
};
r(af, "RC_f1102e0e903c36b89dd3a8ad41701e5f");
var mu = af;
mu.init();
var ZC = class ZC extends e.GenericRecordList {
    static getItemType() {
        return mu
    }
};
r(ZC, "RL_b180a59f8f5def3150ec40c96b1bacf2");
var YC = ZC;
var of = class of extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("AllAccountTypePlatforms", "allAccountTypePlatformsAttr", "AllAccountTypePlatforms", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new qe)
        }, !0, qe)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new of (new of .RecordClass({
            allAccountTypePlatformsAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "b1f9a62a-a1eb-0e79-79aa-ceb89243cea9"
    }
};
r( of , "RC_b1f9a62aa1eb0e7979aaceb89243cea9");
var yu = of ;
yu.init();
var XC = class XC extends e.GenericRecordList {
    static getItemType() {
        return Ii
    }
};
r(XC, "RL_b2061216c3d82010dc8c3226204dac46");
var QC = XC;
var th = class th extends e.GenericRecordList {
    static getItemType() {
        return Ta
    }
};
r(th, "RL_b2117356ef65d3231f992a69f03538c4");
var eh = th;
var ah = class ah extends e.GenericRecordList {
    static getItemType() {
        return ji
    }
};
r(ah, "RL_b25c3a0fcffbc750be1c6409a1753ee3");
var rh = ah;
var sh = class sh extends e.GenericRecordList {
    static getItemType() {
        return Ri
    }
};
r(sh, "RL_b36cbf00535b19d854633a6aebe03044");
var oh = sh;
var ih = class ih extends e.GenericRecordList {
    static getItemType() {
        return os
    }
};
r(ih, "RL_b412922a0a29f17092810fe62dd48743");
var nh = ih;
var ch = class ch extends e.GenericRecordList {
    static getItemType() {
        return xr
    }
};
r(ch, "RL_b41818dfe314f17b4b47c38bc584ee3d");
var uh = ch;
var dh = class dh extends e.GenericRecordList {
    static getItemType() {
        return eu
    }
};
r(dh, "RL_b4a5c9d3dcebe6413a999de1e05b8c08");
var lh = dh;
var sf = class sf extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("GetPartnerAccountResponse", "getPartnerAccountResponseAttr", "GetPartnerAccountResponse", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new ca)
        }, !0, ca)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new sf(new sf.RecordClass({
            getPartnerAccountResponseAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "c8e982ea-92b4-7c78-8902-752bff73a401"
    }
};
r(sf, "RC_c8e982ea92b47c788902752bff73a401");
var Tu = sf;
Tu.init();
var fh = class fh extends e.GenericRecordList {
    static getItemType() {
        return Tu
    }
};
r(fh, "RL_b4f9773535cc09d3c6dd55ec7a4df8d1");
var ph = fh;
var yh = class yh extends e.GenericRecordList {
    static getItemType() {
        return Xa
    }
};
r(yh, "RL_b50ecc69bf1d35f5563a812d2e69bf9c");
var mh = yh;
var Sh = class Sh extends e.GenericRecordList {
    static getItemType() {
        return rt
    }
};
r(Sh, "RL_b60c30f70d5c7d39a851eeb74ad499d4");
var Th = Sh;
var nf = class nf extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Echo_req11", "echo_req11Attr", "Echo_req11", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Lr)
        }, !0, Lr)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new nf(new nf.RecordClass({
            echo_req11Attr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "b66f106f-fca3-ec8b-9893-c19faf2ae442"
    }
};
r(nf, "RC_b66f106ffca3ec8b9893c19faf2ae442");
var Su = nf;
Su.init();
var bh = class bh extends e.GenericRecordList {
    static getItemType() {
        return le
    }
};
r(bh, "RL_b6f673b4dc1f733bcacc3d98d65cf048");
var Dh = bh;
var Ah = class Ah extends e.GenericRecordList {
    static getItemType() {
        return ln
    }
};
r(Ah, "RL_b7369d5f4cafbbcd5483c083235b9d49");
var gh = Ah;
var Oh = class Oh extends e.GenericRecordList {
    static getItemType() {
        return ft
    }
};
r(Oh, "RL_b78395d0ac2f16e352960c06dc226372");
var xh = Oh;
var Rh = class Rh extends e.GenericRecordList {
    static getItemType() {
        return ht
    }
};
r(Rh, "RL_b7a05579761da982186db0cb56ca5900");
var vh = Rh;
var uf = class uf extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("HTTPRequest", "hTTPRequestAttr", "HTTPRequest", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new ue)
        }, !0, ue)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new uf(new uf.RecordClass({
            hTTPRequestAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "b7f1349c-e556-88cb-c04c-b6b803b689dd"
    }
};
r(uf, "RC_b7f1349ce55688cbc04cb6b803b689dd");
var Du = uf;
Du.init();
var cf = class cf extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Ownership", "ownershipAttr", "Ownership", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new be)
        }, !0, be)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new cf(new cf.RecordClass({
            ownershipAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "b8272ebc-b560-c4fc-5c96-482b705582ba"
    }
};
r(cf, "RC_b8272ebcb560c4fc5c96482b705582ba");
var bu = cf;
bu.init();
var hh = class hh extends e.GenericRecordList {
    static getItemType() {
        return ze
    }
};
r(hh, "RL_b88c0ed17712805463deb6be1a1ca760");
var Ch = hh;
var Ih = class Ih extends e.GenericRecordList {
    static getItemType() {
        return Pr
    }
};
r(Ih, "RL_b89c914195d1eb859bace1db1e3d63f3");
var wh = Ih;
var Nh = class Nh extends e.GenericRecordList {
    static getItemType() {
        return ro
    }
};
r(Nh, "RL_b903ad96980478d7874f689155c88d6c");
var Ph = Nh;
var Lh = class Lh extends e.GenericRecordList {
    static getItemType() {
        return La
    }
};
r(Lh, "RL_ba16f8261986c6b18df245be53196ced");
var Vh = Lh;
var lf = class lf extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Bank", "bankAttr", "Bank", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new M)
        }, !0, M)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new lf(new lf.RecordClass({
            bankAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "be7352b9-b158-fdb3-f297-1033d42565a6"
    }
};
r(lf, "RC_be7352b9b158fdb3f2971033d42565a6");
var gu = lf;
gu.init();
var Jh = class Jh extends e.GenericRecordList {
    static getItemType() {
        return gu
    }
};
r(Jh, "RL_ba2d4811d5b10bf7869071c115fc7724");
var Gh = Jh;
var df = class df extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("AssessmentResponse", "assessmentResponseAttr", "AssessmentResponse", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new oo)
        }, !0, oo)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new df(new df.RecordClass({
            assessmentResponseAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "bb0ca189-1ae5-9927-0dda-01dce8b71766"
    }
};
r(df, "RC_bb0ca1891ae599270dda01dce8b71766");
var Au = df;
Au.init();
var _h = class _h extends e.GenericRecordList {
    static getItemType() {
        return Gi
    }
};
r(_h, "RL_bb3acec9ee51c7f4799aac90c90128ef");
var Bh = _h;
var pf = class pf extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Api", "apiAttr", "Api", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Vr)
        }, !0, Vr)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new pf(new pf.RecordClass({
            apiAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "cdef44d8-6581-2d5f-122c-87c3e4a61605"
    }
};
r(pf, "RC_cdef44d865812d5f122c87c3e4a61605");
var xu = pf;
xu.init();
var Eh = class Eh extends e.GenericRecordList {
    static getItemType() {
        return xu
    }
};
r(Eh, "RL_bbe2c440b74c8377ca81d2556840a89a");
var kh = Eh;
var $h = class $h extends e.GenericRecordList {
    static getItemType() {
        return ue
    }
};
r($h, "RL_bc8fce7a43e25a8fbc78edae6c3b327a");
var Fh = $h;
var Mh = class Mh extends e.GenericRecordList {
    static getItemType() {
        return mi
    }
};
r(Mh, "RL_be5a886e16881f9049697d324754da74");
var Uh = Mh;
var Hh = class Hh extends e.GenericRecordList {
    static getItemType() {
        return lt
    }
};
r(Hh, "RL_bf51b2a749ab1c5a248d7019c556ff5a");
var qh = Hh;
var ff = class ff extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Set_Financial_Assessment", "set_Financial_AssessmentAttr", "Set_Financial_Assessment", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new ao)
        }, !0, ao)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new ff(new ff.RecordClass({
            set_Financial_AssessmentAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "f3f53373-0e3b-38e3-3f51-970def154551"
    }
};
r(ff, "RC_f3f533730e3b38e33f51970def154551");
var Ou = ff;
Ou.init();
var zh = class zh extends e.GenericRecordList {
    static getItemType() {
        return Ou
    }
};
r(zh, "RL_bf9d4b591d666db95ff5f8501490c138");
var Wh = zh;
var Kh = class Kh extends e.GenericRecordList {
    static getItemType() {
        return ri
    }
};
r(Kh, "RL_bfdb0a00a150c65e1e25049482edba6b");
var jh = Kh;
var Zh = class Zh extends e.GenericRecordList {
    static getItemType() {
        return ao
    }
};
r(Zh, "RL_c10d98e0396eaff1d08672f779ec63cb");
var Yh = Zh;
var Xh = class Xh extends e.GenericRecordList {
    static getItemType() {
        return au
    }
};
r(Xh, "RL_c1b551b639cf44782c03b977f31ed021");
var Qh = Xh;
var mf = class mf extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("NotificationEventResponse", "notificationEventResponseAttr", "NotificationEventResponse", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Ja)
        }, !0, Ja)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new mf(new mf.RecordClass({
            notificationEventResponseAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "cdd09318-1252-d8c3-9658-eb7271017441"
    }
};
r(mf, "RC_cdd093181252d8c39658eb7271017441");
var vu = mf;
vu.init();
var tw = class tw extends e.GenericRecordList {
    static getItemType() {
        return vu
    }
};
r(tw, "RL_c1fc2d91a927b6c04c65f17fe69d7364");
var ew = tw;
var aw = class aw extends e.GenericRecordList {
    static getItemType() {
        return Or
    }
};
r(aw, "RL_c228801268cde38f697e01100ad11a20");
var rw = aw;
var sw = class sw extends e.GenericRecordList {
    static getItemType() {
        return wt
    }
};
r(sw, "RL_c229edfd5a861b3989c3898b88a89f90");
var ow = sw;
var yf = class yf extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Mt5_login_listItem", "mt5_login_listItemAttr", "Mt5_login_listItem", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Hf)
        }, !0, Hf)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new yf(new yf.RecordClass({
            mt5_login_listItemAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "e3b76e5c-6918-ce63-091a-cb36b11f3fe2"
    }
};
r(yf, "RC_e3b76e5c6918ce63091acb36b11f3fe2");
var Ru = yf;
Ru.init();
var iw = class iw extends e.GenericRecordList {
    static getItemType() {
        return Ru
    }
};
r(iw, "RL_c2ff81a5529fadc0682cd0e233934577");
var nw = iw;
var cw = class cw extends e.GenericRecordList {
    static getItemType() {
        return su
    }
};
r(cw, "RL_c336d58dd96d2c1d5470075e96b2dfe2");
var uw = cw;
var dw = class dw extends e.GenericRecordList {
    static getItemType() {
        return it
    }
};
r(dw, "RL_c35bbded731f8ecb695157b429b6b213");
var lw = dw;
var fw = class fw extends e.GenericRecordList {
    static getItemType() {
        return J
    }
};
r(fw, "RL_c3d714c5e2e4483b693c7aff3c4351d0");
var pw = fw;
var yw = class yw extends e.GenericRecordList {
    static getItemType() {
        return Du
    }
};
r(yw, "RL_c4fc3be75543c3c7832c730391e11388");
var mw = yw;
var Tf = class Tf extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("PostAccountListResponse", "postAccountListResponseAttr", "PostAccountListResponse", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Ka)
        }, !0, Ka)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Tf(new Tf.RecordClass({
            postAccountListResponseAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "c567cbac-2969-babe-c315-08d5ba9b8248"
    }
};
r(Tf, "RC_c567cbac2969babec31508d5ba9b8248");
var Cu = Tf;
Cu.init();
var Sw = class Sw extends e.GenericRecordList {
    static getItemType() {
        return yu
    }
};
r(Sw, "RL_c5909a8b1377430a2e36d2ce210bb739");
var Tw = Sw;
var bw = class bw extends e.GenericRecordList {
    static getItemType() {
        return B
    }
};
r(bw, "RL_c5c6c21effa285fee00f8dc17d9ba72f");
var Dw = bw;
var Aw = class Aw extends e.GenericRecordList {
    static getItemType() {
        return Fa
    }
};
r(Aw, "RL_c6a47a1068f494ccd422ebb6efa80b1c");
var gw = Aw;
var Ow = class Ow extends e.GenericRecordList {
    static getItemType() {
        return rr
    }
};
r(Ow, "RL_c6c5bbed4698a9104285c2ffcc29f228");
var xw = Ow;
var Rw = class Rw extends e.GenericRecordList {
    static getItemType() {
        return Wr
    }
};
r(Rw, "RL_c6cf49242e4ce0d88ad753b21a86fe81");
var vw = Rw;
var hw = class hw extends e.GenericRecordList {
    static getItemType() {
        return Na
    }
};
r(hw, "RL_c7f26a72e57a4dddb6b0448d22dc5863");
var Cw = hw;
var Iw = class Iw extends e.GenericRecordList {
    static getItemType() {
        return Fs
    }
};
r(Iw, "RL_c8ec1067f658d445cb4bb406a536d6e4");
var ww = Iw;
var Nw = class Nw extends e.GenericRecordList {
    static getItemType() {
        return eo
    }
};
r(Nw, "RL_c9802391ccf1fcf76850377db0a5a2bd");
var Pw = Nw;
var Sf = class Sf extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Authorize2", "authorize2Attr", "Authorize2", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Va)
        }, !0, Va)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Sf(new Sf.RecordClass({
            authorize2Attr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "ca29307c-32c3-b6ee-4bca-4fca61db0923"
    }
};
r(Sf, "RC_ca29307c32c3b6ee4bca4fca61db0923");
var hu = Sf;
hu.init();
var Lw = class Lw extends e.GenericRecordList {
    static getItemType() {
        return Ie
    }
};
r(Lw, "RL_cad88a69fdf904df26f5066dd5cffb79");
var Vw = Lw;
var Jw = class Jw extends e.GenericRecordList {
    static getItemType() {
        return vi
    }
};
r(Jw, "RL_cb7a85895e8c7191ce89431d283aecb7");
var Gw = Jw;
var _w = class _w extends e.GenericRecordList {
    static getItemType() {
        return Qr
    }
};
r(_w, "RL_cb7f36c20c1100a526f054e4bd5ee331");
var Bw = _w;
var Ew = class Ew extends e.GenericRecordList {
    static getItemType() {
        return xa
    }
};
r(Ew, "RL_cbaa449aac56180c04dc0dfa93e6b55e");
var kw = Ew;
var $w = class $w extends e.GenericRecordList {
    static getItemType() {
        return so
    }
};
r($w, "RL_cbd45ffb64bc9c47450a3b6cf63434c5");
var Fw = $w;
var Mw = class Mw extends e.GenericRecordList {
    static getItemType() {
        return hu
    }
};
r(Mw, "RL_cd7aae7110549eb2398675e1d9a7e14e");
var Uw = Mw;
var Hw = class Hw extends e.GenericRecordList {
    static getItemType() {
        return qt
    }
};
r(Hw, "RL_cead5d196d772d870bc3f7d4fa164d8c");
var qw = Hw;
var zw = class zw extends e.GenericRecordList {
    static getItemType() {
        return he
    }
};
r(zw, "RL_ceeb5cf67227d230352f98416e3a5708");
var Ww = zw;
var Kw = class Kw extends e.GenericRecordList {
    static getItemType() {
        return pt
    }
};
r(Kw, "RL_cf17f57129ad6a4c2ec02e2afc77ae2b");
var jw = Kw;
var Zw = class Zw extends e.GenericRecordList {
    static getItemType() {
        return Ra
    }
};
r(Zw, "RL_cf3e55591f725fd3bc6b2d0d3ee5730f");
var Yw = Zw;
var Df = class Df extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("HTTPRequest2", "hTTPRequest2Attr", "HTTPRequest2", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new pe)
        }, !0, pe)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Df(new Df.RecordClass({
            hTTPRequest2Attr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "d01c18b7-748c-c78e-8ded-cb8dbb27bfa9"
    }
};
r(Df, "RC_d01c18b7748cc78e8dedcb8dbb27bfa9");
var wu = Df;
wu.init();
var Xw = class Xw extends e.GenericRecordList {
    static getItemType() {
        return Rt
    }
};
r(Xw, "RL_d020274c0ef0b03336f86133d39e8e5d");
var Qw = Xw;
var t2 = class t2 extends e.GenericRecordList {
    static getItemType() {
        return bu
    }
};
r(t2, "RL_d085e8d032d69f30c1ff1fcbd1a431a3");
var e2 = t2;
var bf = class bf extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2PPaymentMethodsResponse", "p2PPaymentMethodsResponseAttr", "P2PPaymentMethodsResponse", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Za)
        }, !0, Za)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new bf(new bf.RecordClass({
            p2PPaymentMethodsResponseAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "fbe26d11-e9d7-e815-ab8f-8d312685ebe8"
    }
};
r(bf, "RC_fbe26d11e9d7e815ab8f8d312685ebe8");
var Iu = bf;
Iu.init();
var a2 = class a2 extends e.GenericRecordList {
    static getItemType() {
        return Iu
    }
};
r(a2, "RL_d169ac2c2610bcd30201dd6066aabbc8");
var r2 = a2;
var s2 = class s2 extends e.GenericRecordList {
    static getItemType() {
        return lu
    }
};
r(s2, "RL_d170df24c2e1d399274b953b3ea7ee8d");
var o2 = s2;
var i2 = class i2 extends e.GenericRecordList {
    static getItemType() {
        return Cr
    }
};
r(i2, "RL_d1730959bead5ace9709263653c5c805");
var n2 = i2;
var c2 = class c2 extends e.GenericRecordList {
    static getItemType() {
        return Z
    }
};
r(c2, "RL_d2789538425b9b75ea10631ae0abd383");
var u2 = c2;
var d2 = class d2 extends e.GenericRecordList {
    static getItemType() {
        return oa
    }
};
r(d2, "RL_d2d0068f3a07cb94ca20f9308415ffee");
var l2 = d2;
var gf = class gf extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2PAdvertInfoResponse", "p2PAdvertInfoResponseAttr", "P2PAdvertInfoResponse", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Nr)
        }, !0, Nr)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new gf(new gf.RecordClass({
            p2PAdvertInfoResponseAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "d33f8c00-9e3e-781c-ecef-ae4af6e8d57d"
    }
};
r(gf, "RC_d33f8c009e3e781cecefae4af6e8d57d");
var Pu = gf;
Pu.init();
var f2 = class f2 extends e.GenericRecordList {
    static getItemType() {
        return _a
    }
};
r(f2, "RL_d3a7744852f4b782bcbb3dc9b2b5a3a2");
var p2 = f2;
var Af = class Af extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Risk_level", "risk_levelAttr", "Risk_level", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Rt)
        }, !0, Rt)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Af(new Af.RecordClass({
            risk_levelAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "da31320f-8816-6d86-4fc3-96c0fddbecc9"
    }
};
r(Af, "RC_da31320f88166d864fc396c0fddbecc9");
var Nu = Af;
Nu.init();
var y2 = class y2 extends e.GenericRecordList {
    static getItemType() {
        return Nu
    }
};
r(y2, "RL_d40367d2d21dcbcbaa0f7166365925a3");
var m2 = y2;
var xf = class xf extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Forex", "forexAttr", "Forex", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Ze)
        }, !0, Ze)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new xf(new xf.RecordClass({
            forexAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "d509bf89-cda0-9ba7-8055-eb96d496078b"
    }
};
r(xf, "RC_d509bf89cda09ba78055eb96d496078b");
var Vu = xf;
Vu.init();
var S2 = class S2 extends e.GenericRecordList {
    static getItemType() {
        return Au
    }
};
r(S2, "RL_d5159c26a8f588daf2427ff93eedcebd");
var T2 = S2;
var Of = class Of extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("PostLogoutResponse", "postLogoutResponseAttr", "PostLogoutResponse", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new It)
        }, !0, It)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Of(new Of.RecordClass({
            postLogoutResponseAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "f0c73e6d-bd84-2809-86cd-2f30c5ab1891"
    }
};
r(Of, "RC_f0c73e6dbd84280986cd2f30c5ab1891");
var Lu = Of;
Lu.init();
var b2 = class b2 extends e.GenericRecordList {
    static getItemType() {
        return Lu
    }
};
r(b2, "RL_d6c2b0b2d82cc83f0e12ff8864bc303a");
var D2 = b2;
var A2 = class A2 extends e.GenericRecordList {
    static getItemType() {
        return Ht
    }
};
r(A2, "RL_d7120c737b749736ea0a72e73d61514e");
var g2 = A2;
var O2 = class O2 extends e.GenericRecordList {
    static getItemType() {
        return fu
    }
};
r(O2, "RL_d7b37aab928d287662d2a0dadc210fec");
var x2 = O2;
var R2 = class R2 extends e.GenericRecordList {
    static getItemType() {
        return zo
    }
};
r(R2, "RL_d7c25a5fb9a8943a745839a83027088a");
var v2 = R2;
var h2 = class h2 extends e.GenericRecordList {
    static getItemType() {
        return Su
    }
};
r(h2, "RL_d879fd0f70d45798161ae7b5ea69146c");
var C2 = h2;
var I2 = class I2 extends e.GenericRecordList {
    static getItemType() {
        return Ar
    }
};
r(I2, "RL_d9225646df1b3ea490560d0f68cd306f");
var w2 = I2;
var vf = class vf extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2PCountryListResponse", "p2PCountryListResponseAttr", "P2PCountryListResponse", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new ja)
        }, !0, ja)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new vf(new vf.RecordClass({
            p2PCountryListResponseAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "eb80e7f8-6333-4c54-8fcb-a763018eae6f"
    }
};
r(vf, "RC_eb80e7f863334c548fcba763018eae6f");
var Gu = vf;
Gu.init();
var N2 = class N2 extends e.GenericRecordList {
    static getItemType() {
        return Gu
    }
};
r(N2, "RL_d999f9e69b527a00490f20d6bcd32988");
var P2 = N2;
var L2 = class L2 extends e.GenericRecordList {
    static getItemType() {
        return Le
    }
};
r(L2, "RL_da6c5178f53e986289bf2ed71791858d");
var V2 = L2;
var J2 = class J2 extends e.GenericRecordList {
    static getItemType() {
        return hr
    }
};
r(J2, "RL_da97e9972bbc2e3a4820944c29604e6f");
var G2 = J2;
var _2 = class _2 extends e.GenericRecordList {
    static getItemType() {
        return oi
    }
};
r(_2, "RL_da9f97f6a3c8b98228b608b130222591");
var B2 = _2;
var E2 = class E2 extends e.GenericRecordList {
    static getItemType() {
        return hi
    }
};
r(E2, "RL_db8c7152c23e79d6b562599761b9fd23");
var k2 = E2;
var $2 = class $2 extends e.GenericRecordList {
    static getItemType() {
        return _e
    }
};
r($2, "RL_dba1429f774712c36d3ea0b48ab6b63d");
var F2 = $2;
var M2 = class M2 extends e.GenericRecordList {
    static getItemType() {
        return ki
    }
};
r(M2, "RL_dcf4f925b8df146a94e56ce31fb24160");
var U2 = M2;
var H2 = class H2 extends e.GenericRecordList {
    static getItemType() {
        return ou
    }
};
r(H2, "RL_dd08ea713bebe4875033a5f91c469c77");
var q2 = H2;
var Rf = class Rf extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("White_label_link", "white_label_linkAttr", "White_label_link", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new aa)
        }, !0, aa)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Rf(new Rf.RecordClass({
            white_label_linkAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "dd79bf27-114c-bc81-0592-c451d8bd2280"
    }
};
r(Rf, "RC_dd79bf27114cbc810592c451d8bd2280");
var Ju = Rf;
Ju.init();
var z2 = class z2 extends e.GenericRecordList {
    static getItemType() {
        return mn
    }
};
r(z2, "RL_de09afc3e002b5b30d13a4761423fa1e");
var W2 = z2;
var K2 = class K2 extends e.GenericRecordList {
    static getItemType() {
        return Va
    }
};
r(K2, "RL_df2c3a1ff9c9b2892bfd0324597f5d4e");
var j2 = K2;
var Z2 = class Z2 extends e.GenericRecordList {
    static getItemType() {
        return Xe
    }
};
r(Z2, "RL_dfdebdca8e822b537628659338ad0660");
var Y2 = Z2;
var Cf = class Cf extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("PostAuthorizeResponse", "postAuthorizeResponseAttr", "PostAuthorizeResponse", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new so)
        }, !0, so)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Cf(new Cf.RecordClass({
            postAuthorizeResponseAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "dfe43d1a-19f2-f910-9388-05ce519a6be0"
    }
};
r(Cf, "RC_dfe43d1a19f2f910938805ce519a6be0");
var Bu = Cf;
Bu.init();
var hf = class hf extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Document_type", "document_typeAttr", "Document_type", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new ke)
        }, !0, ke)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new hf(new hf.RecordClass({
            document_typeAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "e0e41cb9-4b03-3378-d915-3e95b9660ef9"
    }
};
r(hf, "RC_e0e41cb94b033378d9153e95b9660ef9");
var _u = hf;
_u.init();
var X2 = class X2 extends e.GenericRecordList {
    static getItemType() {
        return Qt
    }
};
r(X2, "RL_e1278fe9427d99d4150ff61ea3f65e79");
var Q2 = X2;
var tI = class tI extends e.GenericRecordList {
    static getItemType() {
        return Ze
    }
};
r(tI, "RL_e14755a881df87b3e885c798489a1f9a");
var eI = tI;
var aI = class aI extends e.GenericRecordList {
    static getItemType() {
        return Ot
    }
};
r(aI, "RL_e17c98c9ebad9849b38663a52005be50");
var rI = aI;
var sI = class sI extends e.GenericRecordList {
    static getItemType() {
        return da
    }
};
r(sI, "RL_e262f34e8ebc580be4a46070104de21e");
var oI = sI;
var iI = class iI extends e.GenericRecordList {
    static getItemType() {
        return Ca
    }
};
r(iI, "RL_e27fd9e7224bf0c7e999a01ff4028f6a");
var nI = iI;
var cI = class cI extends e.GenericRecordList {
    static getItemType() {
        return Di
    }
};
r(cI, "RL_e377a277aec73abf25e2c35110f340eb");
var uI = cI;
var dI = class dI extends e.GenericRecordList {
    static getItemType() {
        return cu
    }
};
r(dI, "RL_e40d2b9c559a333983e00711676426d8");
var lI = dI;
var fI = class fI extends e.GenericRecordList {
    static getItemType() {
        return $s
    }
};
r(fI, "RL_e42c760f113562d06aa40fd3c0801719");
var pI = fI;
var yI = class yI extends e.GenericRecordList {
    static getItemType() {
        return Nt
    }
};
r(yI, "RL_e4cc4242bd1a5b513b2d0e5945f5ee99");
var mI = yI;
var SI = class SI extends e.GenericRecordList {
    static getItemType() {
        return zi
    }
};
r(SI, "RL_e53ad3844d662ab92dd8c87975a2786f");
var TI = SI;
var bI = class bI extends e.GenericRecordList {
    static getItemType() {
        return fi
    }
};
r(bI, "RL_e5d4eff1d9ba5ba2377f189321ef5ca3");
var DI = bI;
var AI = class AI extends e.GenericRecordList {
    static getItemType() {
        return Qi
    }
};
r(AI, "RL_e689b1d5e863d2210639c8b8940a0d2e");
var gI = AI;
var OI = class OI extends e.GenericRecordList {
    static getItemType() {
        return An
    }
};
r(OI, "RL_e6e5069f4a35d175fdfe79a6d3342703");
var xI = OI;
var RI = class RI extends e.GenericRecordList {
    static getItemType() {
        return uu
    }
};
r(RI, "RL_e6eb0a62197c37db299beb6105b3c02d");
var vI = RI;
var hI = class hI extends e.GenericRecordList {
    static getItemType() {
        return Et
    }
};
r(hI, "RL_e76c00ddf7abece102174559911adf6e");
var CI = hI;
var II = class II extends e.GenericRecordList {
    static getItemType() {
        return ya
    }
};
r(II, "RL_e80a0f2e1d0d40303b1a689b4ad27a7b");
var wI = II;
var NI = class NI extends e.GenericRecordList {
    static getItemType() {
        return fs
    }
};
r(NI, "RL_e84e513163ad816621561ddde34cafa3");
var PI = NI;
var wf = class wf extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("GetTradingPlatformStatusResponse", "getTradingPlatformStatusResponseAttr", "GetTradingPlatformStatusResponse", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new ro)
        }, !0, ro)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new wf(new wf.RecordClass({
            getTradingPlatformStatusResponseAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "ee239f88-c5d7-794f-e9f6-9be69a94411a"
    }
};
r(wf, "RC_ee239f88c5d7794fe9f69be69a94411a");
var ku = wf;
ku.init();
var LI = class LI extends e.GenericRecordList {
    static getItemType() {
        return ku
    }
};
r(LI, "RL_e87e0e80051f6c55e06e3dcb63f790d9");
var VI = LI;
var JI = class JI extends e.GenericRecordList {
    static getItemType() {
        return Er
    }
};
r(JI, "RL_e8c7c8d9b0c15a0f31835e82c0493c59");
var GI = JI;
var _I = class _I extends e.GenericRecordList {
    static getItemType() {
        return ua
    }
};
r(_I, "RL_e9493e2064d4adee404db0ec2ed9ea58");
var BI = _I;
var EI = class EI extends e.GenericRecordList {
    static getItemType() {
        return ai
    }
};
r(EI, "RL_e9715121ffbe4e5204c4a1c3804c7361");
var kI = EI;
var $I = class $I extends e.GenericRecordList {
    static getItemType() {
        return Pt
    }
};
r($I, "RL_e97ff3c0bfb989f1940aae6c80a5b4e2");
var FI = $I;
var MI = class MI extends e.GenericRecordList {
    static getItemType() {
        return ne
    }
};
r(MI, "RL_e99c0d7d3b8c4842b2cb397266586399");
var UI = MI;
var HI = class HI extends e.GenericRecordList {
    static getItemType() {
        return Oe
    }
};
r(HI, "RL_e9b4b68e021e5613bf728dccd1cf9139");
var qI = HI;
var zI = class zI extends e.GenericRecordList {
    static getItemType() {
        return oo
    }
};
r(zI, "RL_e9b8e0faabc7236ff8432ae937c37582");
var WI = zI;
var KI = class KI extends e.GenericRecordList {
    static getItemType() {
        return $r
    }
};
r(KI, "RL_ea01f38fd4ed134d9fe25df7dd6868c6");
var jI = KI;
var ZI = class ZI extends e.GenericRecordList {
    static getItemType() {
        return ra
    }
};
r(ZI, "RL_ea69c6358f758ea1e34787db7dc19db9");
var YI = ZI;
var XI = class XI extends e.GenericRecordList {
    static getItemType() {
        return dn
    }
};
r(XI, "RL_ea6b4a7a90122a1598d490842491288c");
var QI = XI;
var If = class If extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("StatementRequest", "statementRequestAttr", "StatementRequest", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new ea)
        }, !0, ea)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new If(new If.RecordClass({
            statementRequestAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "f9632cc2-4336-eb4b-b7e5-e5f64f7de5b5"
    }
};
r(If, "RC_f9632cc24336eb4bb7e5e5f64f7de5b5");
var Eu = If;
Eu.init();
var t5 = class t5 extends e.GenericRecordList {
    static getItemType() {
        return Eu
    }
};
r(t5, "RL_ea81ff3a6f3a76c2ed12260f624c4969");
var e5 = t5;
var a5 = class a5 extends e.GenericRecordList {
    static getItemType() {
        return Pu
    }
};
r(a5, "RL_eba0c4cf72b2b3e62c746cfba3f154a7");
var r5 = a5;
var s5 = class s5 extends e.GenericRecordList {
    static getItemType() {
        return ha
    }
};
r(s5, "RL_ebfadc626673a2cb97eaa02a96c0f7b1");
var o5 = s5;
var i5 = class i5 extends e.GenericRecordList {
    static getItemType() {
        return ru
    }
};
r(i5, "RL_ec22c8a81ca6b85273257f4da311b491");
var n5 = i5;
var c5 = class c5 extends e.GenericRecordList {
    static getItemType() {
        return Ju
    }
};
r(c5, "RL_ece3ed6e115187092667bb2ed6368718");
var u5 = c5;
var d5 = class d5 extends e.GenericRecordList {
    static getItemType() {
        return Kr
    }
};
r(d5, "RL_ece7ed41a3f28d1c15291a0f58620332");
var l5 = d5;
var f5 = class f5 extends e.GenericRecordList {
    static getItemType() {
        return Vo
    }
};
r(f5, "RL_ed046b9a00e90447bae294a818054036");
var p5 = f5;
var y5 = class y5 extends e.GenericRecordList {
    static getItemType() {
        return Hn
    }
};
r(y5, "RL_ed077587a2a2ae91a6da402a7068b922");
var m5 = y5;
var S5 = class S5 extends e.GenericRecordList {
    static getItemType() {
        return ae
    }
};
r(S5, "RL_ef82d4336772f957497d646848f0733b");
var T5 = S5;
var b5 = class b5 extends e.GenericRecordList {
    static getItemType() {
        return an
    }
};
r(b5, "RL_efa24a85b9574efa4fcc498bf948428b");
var D5 = b5;
var A5 = class A5 extends e.GenericRecordList {
    static getItemType() {
        return ma
    }
};
r(A5, "RL_f078853eb4e1ea502520482773117b08");
var g5 = A5;
var O5 = class O5 extends e.GenericRecordList {
    static getItemType() {
        return zr
    }
};
r(O5, "RL_f09c659879e2269528f7b678199b971f");
var x5 = O5;
var Pf = class Pf extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Echo_req12", "echo_req12Attr", "Echo_req12", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Qa)
        }, !0, Qa)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Pf(new Pf.RecordClass({
            echo_req12Attr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "fcf4341f-7efd-9506-f671-d9240030f6a0"
    }
};
r(Pf, "RC_fcf4341f7efd9506f671d9240030f6a0");
var Fu = Pf;
Fu.init();
var R5 = class R5 extends e.GenericRecordList {
    static getItemType() {
        return Fu
    }
};
r(R5, "RL_f11b3648faafeee87f9baa4118b19aeb");
var v5 = R5;
var h5 = class h5 extends e.GenericRecordList {
    static getItemType() {
        return yi
    }
};
r(h5, "RL_f15b302598caef69c6cdd4e0690795f9");
var C5 = h5;
var I5 = class I5 extends e.GenericRecordList {
    static getItemType() {
        return ge
    }
};
r(I5, "RL_f3b2e91fdf0a2323522d24198d2308a9");
var w5 = I5;
var N5 = class N5 extends e.GenericRecordList {
    static getItemType() {
        return ia
    }
};
r(N5, "RL_f3d5e0456ba6498c43c176da8eb24aac");
var P5 = N5;
var L5 = class L5 extends e.GenericRecordList {
    static getItemType() {
        return Ha
    }
};
r(L5, "RL_f4798657318ea5aa25857d23b6f4d362");
var V5 = L5;
var J5 = class J5 extends e.GenericRecordList {
    static getItemType() {
        return Wi
    }
};
r(J5, "RL_f565e985301ac9dd26dbfb84b70bf745");
var G5 = J5;
var _5 = class _5 extends e.GenericRecordList {
    static getItemType() {
        return Zn
    }
};
r(_5, "RL_f6031c1bbdf2129f541b15130dcc6f35");
var B5 = _5;
var E5 = class E5 extends e.GenericRecordList {
    static getItemType() {
        return du
    }
};
r(E5, "RL_f63f2b83c2121dc349d7190f0745a6cf");
var k5 = E5;
var $5 = class $5 extends e.GenericRecordList {
    static getItemType() {
        return gi
    }
};
r($5, "RL_f7fbc672dcb160d0968ff55ca529958c");
var F5 = $5;
var M5 = class M5 extends e.GenericRecordList {
    static getItemType() {
        return Ia
    }
};
r(M5, "RL_f86ebd36d4538e51189d94807b597707");
var U5 = M5;
var H5 = class H5 extends e.GenericRecordList {
    static getItemType() {
        return Bu
    }
};
r(H5, "RL_f898b92d666caff04b8ec558b53a2f60");
var q5 = H5;
var z5 = class z5 extends e.GenericRecordList {
    static getItemType() {
        return Y
    }
};
r(z5, "RL_f8eb431cfa3719b526bb3d4eaa81a60a");
var W5 = z5;
var K5 = class K5 extends e.GenericRecordList {
    static getItemType() {
        return pa
    }
};
r(K5, "RL_f905ae60fd778c280a86f4a55692cd45");
var j5 = K5;
var Nf = class Nf extends e.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Authorize", "authorizeAttr", "Authorize", !1, !1, e.DataTypes.Record, function() {
            return e.ImmutableBase.getData(new Ya)
        }, !0, Ya)].concat(e.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Nf(new Nf.RecordClass({
            authorizeAttr: e.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "f92c9dfd-eaab-a0d0-6f3a-62c3b604cf58"
    }
};
r(Nf, "RC_f92c9dfdeaaba0d06f3a62c3b604cf58");
var $u = Nf;
$u.init();
var Z5 = class Z5 extends e.GenericRecordList {
    static getItemType() {
        return Ki
    }
};
r(Z5, "RL_f97a03a16fd2375285dc3e9458533295");
var Y5 = Z5;
var X5 = class X5 extends e.GenericRecordList {
    static getItemType() {
        return _u
    }
};
r(X5, "RL_f9cd69a99a23afb6393c39463c23b25f");
var Q5 = X5;
var t4 = class t4 extends e.GenericRecordList {
    static getItemType() {
        return En
    }
};
r(t4, "RL_f9cefb8116fef94f410821fd0b26bf72");
var e4 = t4;
var a4 = class a4 extends e.GenericRecordList {
    static getItemType() {
        return bi
    }
};
r(a4, "RL_fa00e44a222cdab3fe910e0337033680");
var r4 = a4;
var s4 = class s4 extends e.GenericRecordList {
    static getItemType() {
        return ar
    }
};
r(s4, "RL_fa0811c05f47ad6ac421ba30d6fabadb");
var o4 = s4;
var i4 = class i4 extends e.GenericRecordList {
    static getItemType() {
        return Cu
    }
};
r(i4, "RL_fa7dab07e8682b9feaee7f3f61a4e712");
var n4 = i4;
var c4 = class c4 extends e.GenericRecordList {
    static getItemType() {
        return We
    }
};
r(c4, "RL_fbb2fb86c40f3e5602392d2ab7885f06");
var u4 = c4;
var d4 = class d4 extends e.GenericRecordList {
    static getItemType() {
        return wa
    }
};
r(d4, "RL_fbf59dcc654f2f0b7a14e0b382f6c6e6");
var l4 = d4;
var f4 = class f4 extends e.GenericRecordList {
    static getItemType() {
        return wu
    }
};
r(f4, "RL_fbfbc317c1e9a42a1150b702e238264d");
var p4 = f4;
var y4 = class y4 extends e.GenericRecordList {
    static getItemType() {
        return va
    }
};
r(y4, "RL_fc49c3d0746a5ddcc900872f9c42917c");
var m4 = y4;
var S4 = class S4 extends e.GenericRecordList {
    static getItemType() {
        return $u
    }
};
r(S4, "RL_fca3607c6d54863878369f2fe3a05b5b");
var T4 = S4;
var b4 = class b4 extends e.GenericRecordList {
    static getItemType() {
        return nu
    }
};
r(b4, "RL_fced28719a91c598d8625322837974e1");
var D4 = b4;
var A4 = class A4 extends e.GenericRecordList {
    static getItemType() {
        return _n
    }
};
r(A4, "RL_fdb8336efd8c04b2985357fda051ffd2");
var g4 = A4;
var O4 = class O4 extends e.GenericRecordList {
    static getItemType() {
        return Vu
    }
};
r(O4, "RL_fff77ec615be0e1e441a98afc10c6f02");
var x4 = O4;

function v4(o, a, n, p) {
    o.Payload = JSON.stringify({
        account: "all"
    })
}
r(v4, "default");

function R4(o, a, n, p) {
    o.Payload = JSON.stringify({
        categories: ["trading"]
    })
}
r(R4, "default");

function C4(o, a, n, p) {
    o.Payload = JSON.stringify({
        categories: ["wallet"]
    })
}
r(C4, "default");

function h4(o, a, n, p) {
    let i = JSON.parse(o.Data).get_account_status,
        c = i == null ? void 0 : i.status;
    o.Response = JSON.stringify({
        isTradingDisabled: c.some(d => d === "no_trading"),
        isTransferAllowed: !c.some(d => d === "sibling_transfers_blocked")
    })
}
r(h4, "default");

function w4(o, a, n, p) {
    var c, d, y;
    let i = JSON.parse(o.CurrenciesList);
    o.Icon = (y = (d = (c = i.find(T => {
        var f;
        return ((f = T == null ? void 0 : T.Currencies) == null ? void 0 : f.Code) === o.CurrencyCode
    })) == null ? void 0 : c.Currencies) == null ? void 0 : d.Icon) != null ? y : ""
}
r(w4, "default");

function I4(o, a, n, p) {
    let i = getCookiesFields(),
        c = getCookiesObject(i),
        d = getCookieValue("affiliate_tracking"),
        y = getDataObjFromCookies(c, i);
    y.social_signup = o.Provider, d && (y.affiliate_token = d);
    let T;
    String(o.ServerURL).includes("green") ? (T = "https://oauth.deriv.com/oauth2/authorize?", y.app_id = window.location.hostname.includes("staging-hub") ? "16303" : "16929") : (T = "https://" + o.ServerURL + "/oauth2/authorize?", y.app_id = o.AppId), T = T + new URLSearchParams(y).toString(), o.RedirectURL = T
}
r(I4, "default");

function P4(o, a, n, p) {
    var T;
    let i = JSON.parse(o.AccountLists),
        c = JSON.parse(o.Balance),
        d = JSON.parse(o.AvailableWallets),
        y = [...i.map(f => {
            var v, R, I, L;
            let S = f.currency,
                A = f.loginid,
                b = (v = c == null ? void 0 : c.balance) == null ? void 0 : v.accounts,
                x = (I = a.FormatMoney((R = b == null ? void 0 : b[A]) == null ? void 0 : R.balance, S)) == null ? void 0 : I.FormattedNumber;
            return w(h({}, f), {
                is_selected: o.LoginId === f.loginid,
                name: `${S} Wallet`,
                formatted_balance: x ? `${x} ${S}` : `0 ${S}`,
                balance: ((L = b == null ? void 0 : b[A]) == null ? void 0 : L.balance) || 0,
                is_added: !0,
                is_crypto: f.account_type === "crypto"
            })
        }), ...(((T = d == null ? void 0 : d.available_accounts) == null ? void 0 : T.wallets) || []).map(f => {
            let S = f.currency;
            return w(h({}, f), {
                name: `${S} Wallet`,
                is_added: !1,
                is_crypto: f.account_type === "crypto"
            })
        })];
    o.WalletList = JSON.stringify(y)
}
r(P4, "default");

function N4(o, a, n, p) {
    let i = JSON.parse(localStorage.getItem("accountsList"));

    function c(d) {
        for (let y in d)
            if (y.startsWith("CRW")) return y;
        return null
    }
    r(c, "getFirstWallet"), o.ActiveWalletLoginId = c(i)
}
r(N4, "default");

function V4(o, a, n, p) {
    var T;
    let i = JSON.parse(o.AccountLists),
        c = JSON.parse(o.Balance),
        d = JSON.parse(o.AvailableWallets),
        y = [...i.map(f => {
            var v, R, I, L;
            let S = f.currency,
                A = f.loginid,
                b = (v = c == null ? void 0 : c.balance) == null ? void 0 : v.accounts,
                x = (I = a.FormatMoney((R = b == null ? void 0 : b[A]) == null ? void 0 : R.balance, S)) == null ? void 0 : I.FormattedNumber;
            return w(h({}, f), {
                is_selected: o.LoginId === f.loginid,
                name: `${S} Wallet`,
                formatted_balance: x ? `${x} ${S}` : `0 ${S}`,
                balance: ((L = b == null ? void 0 : b[A]) == null ? void 0 : L.balance) || 0,
                is_added: !0,
                is_crypto: f.account_type === "crypto"
            })
        }), ...(((T = d == null ? void 0 : d.available_accounts) == null ? void 0 : T.wallets) || []).map(f => {
            let S = f.currency;
            return w(h({}, f), {
                name: `${S} Wallet`,
                is_added: !1,
                is_crypto: f.account_type === "crypto"
            })
        })];
    o.WalletList = JSON.stringify(y)
}
r(V4, "default");

function L4(o, a, n, p) {
    let i = JSON.parse(localStorage.getItem("accountsList"));

    function c(d) {
        for (let y in d)
            if (y.startsWith("CRW")) return y;
        return null
    }
    r(c, "getFirstWallet"), o.ActiveWalletLoginId = c(i)
}
r(L4, "default");

function G4(o, a, n, p) {
    return new Promise(function(i, c) {
        var R, I, L, De, Uu, V8;
        let d = window.location.hostname === o.PRODUCTION_HOSTNAME,
            y = window.location.hostname === o.STAGING_HOSTNAME,
            T = (L = (I = JSON.parse((R = Cookies.get("website_status")) != null ? R : "{}")) == null ? void 0 : I.clients_country) != null ? L : null,
            f = (V8 = (Uu = JSON.parse((De = Cookies.get("signup_device")) != null ? De : "{}")) == null ? void 0 : Uu.signup_device) != null ? V8 : null,
            S = window.navigator.userLanguage || window.navigator.language,
            A = getCookiesFields(),
            b = getCookiesObject(A),
            x = getDataObjFromCookies(b, A);
        r(() => new Promise((Zf, F8) => {
            var G8, J8, B8, _8;
            let L8 = (G8 = window == null ? void 0 : window.Analytics) == null ? void 0 : G8.Analytics;
            if (L8) {
                let Vf = {};
                d ? Vf = {
                    growthbookKey: o.GROWTHBOOK_PRODUCTION_CLIENT_KEY,
                    growthbookDecryptionKey: o.GROWTHBOOK_PRODUCTION_DECRYPTION_KEY,
                    rudderstackKey: o.RUDDERSTACK_PRODUCTION_KEY
                } : y ? Vf = {
                    growthbookKey: o.GROWTHBOOK_STAGING_CLIENT_KEY,
                    growthbookDecryptionKey: o.GROWTHBOOK_STAGING_DECRYPTION_KEY,
                    rudderstackKey: o.RUDDERSTACK_STAGING_KEY
                } : Vf = {
                    growthbookKey: o.GROWTHBOOK_DEVELOPMENT_CLIENT_KEY,
                    growthbookDecryptionKey: o.GROWTHBOOK_DEVELOPMENT_DECRYPTION_KEY,
                    rudderstackKey: o.RUDDERSTACK_STAGING_KEY
                };
                let $8 = w(h({}, Vf), {
                    growthbookOptions: {
                        navigate: r(Qf => console.log(`Navigating to ${Qf}`), "navigate"),
                        antiFlicker: !1,
                        navigateDelay: 0,
                        attributes: {
                            country: T,
                            device_type: f,
                            user_language: "en",
                            device_language: S,
                            utm_source: x == null ? void 0 : x.utm_source,
                            utm_medium: x == null ? void 0 : x.utm_medium,
                            utm_campaign: x == null ? void 0 : x.utm_campaign,
                            url: window.location.href,
                            is_authorized: o.IS_AUTHORIZED,
                            loggedIn: o.IS_AUTHORIZED,
                            network_type: (J8 = navigator.connection) == null ? void 0 : J8.effectiveType,
                            network_rtt: (B8 = navigator.connection) == null ? void 0 : B8.rtt,
                            network_downlink: (_8 = navigator.connection) == null ? void 0 : _8.downlink
                        }
                    }
                });
                try {
                    L8.initialise($8), Zf()
                } catch (Qf) {
                    console.error("Error during initialisation:", Qf), F8()
                }
            }
        }), "initAnalytics")().then(() => {
            i()
        }).catch(Zf => {
            console.error(Zf), i()
        })
    })
}
r(G4, "default");

function J4(o, a, n, p) {
    window.connectionAliveInterval, r(function() {
        if (!window.DerivAPI) {
            let c = window.location.host == "hub.deriv.com" ? String(o.WebsocketURL).replace("53503", "61554") : o.WebsocketURL;
            window.location.host.includes("dev-hub") && (c = c.replace("53503", "15438"));
            let d = new ReconnectingWebSocket(localStorage.getItem("ws-url") || c);
            d.reconnectInterval = 1e3, d.timeoutInterval = 15e3, d.maxReconnectAttempts = 10, window.DerivAPI = new DerivAPIBasic({
                connection: d
            }), d.readyState === 1 && DerivAPI.send({
                ping: 1
            }), window.___socket = d, d.addEventListener("open", () => {
                window.___socket.readyState === 1 && DerivAPI.send({
                    ping: 1
                }), a.GetWebsiteStatus(), a.SendResidenceList(), window.connectionAliveInterval = setInterval(() => {
                    window.___socket.readyState === 1 && DerivAPI.send({
                        ping: 1
                    })
                }, 25 * 1e3);
                let y = location.pathname.toLowerCase();
                ["/tradershub/", "/tradershub", "/tradershub/signup", "/tradershub/email-verification"].includes(y) || a.SendAuthorize()
            }), d.addEventListener("close", () => {
                clearInterval(window.connectionAliveInterval)
            })
        }
    }, "initializeDerivAPIBasic")()
}
r(J4, "default");

function B4(o, a, n, p) {
    let i = new Date,
        c = i.getUTCDay(),
        d = i.getUTCHours();
    o.IsDowntime = c === 5 || c === 6 || c === 0 && d < 24
}
r(B4, "default");

function _4(o, a, n, p) {
    function i(c, d) {
        let y = document.createElement("script");
        y.onload = function() {
            d && d()
        }, y.src = c, y.async = !0, document.body.appendChild(y)
    }
    r(i, "loadScript"), i(o.URL)
}
r(_4, "default");

function k4(o, a, n) {
    cacheTrackEvents.track({
        name: "ce_real_account_signup_form",
        properties: {
            action: "real_signup_finished",
            form_name: "real_account_signup_form_outsystems"
        }
    })
}
r(k4, "default");

function E4(o, a, n, p) {
    o.Payload = JSON.stringify({
        authorize: o.AuthToken
    })
}
r(E4, "default");

function F4(o, a, n, p) {
    let i = JSON.parse(localStorage.getItem("client.accounts") || JSON.stringify({})),
        c = JSON.parse(o.Response),
        d = c.authorize.account_list.find(A => A.loginid === c.authorize.loginid),
        y = w(h({}, i), {
            [c.authorize.loginid]: w(h({}, d), {
                token: o.Token,
                email: c.authorize.email,
                session_start: new Date().getTime(),
                excluded_until: "",
                landing_company_name: c.authorize.landing_company_name,
                residence: c.authorize.country,
                balance: c.authorize.balance,
                accepted_bch: 0
            })
        }),
        T = c.authorize.loginid,
        f = "https://app.deriv.com";
    window.location.hostname !== "hub.deriv.com" && (f = "https://staging-app.deriv.com"), localStorage.setItem("client.accounts", JSON.stringify(y)), localStorage.setItem("accountsList", JSON.stringify(y));
    let S = document.getElementById("localstorage-sync");
    if (S && (S == null || S.contentWindow.postMessage({
            key: "client.accounts",
            value: JSON.stringify(y)
        }, f), S == null || S.contentWindow.postMessage({
            key: "active_loginid",
            value: T
        }, f)), window.JSCookies) {
        let A = new Date(new Date().getTime() + 6e4);
        JSCookies.set("client.accounts", JSON.stringify(y), {
            domain: ".deriv.com",
            expires: A,
            secure: !0
        }), JSCookies.set("active_loginid", T, {
            domain: ".deriv.com",
            expires: A,
            secure: !0
        })
    }
    setTimeout(() => window.location.hostname === "hub.deriv.com" ? window.location.href = "https://app.deriv.com/redirect?one_time_deposit=true" : window.location.href = "https://staging-app.deriv.com/redirect?one_time_deposit=true", 100)
}
r(F4, "default");

function $4(o, a, n, p) {
    let i = getCookieValue("affiliate_tracking");

    function c() {
        var S;
        let [y, T, f] = String((S = o.DateOfBirth) != null ? S : "01/01/1999").split("/");
        return `${f}-${T.padStart(2,"0")}-${y.padStart(2,"0")}`
    }
    r(c, "parseDateFromDDMMYYYY");
    let d = {
        new_account_maltainvest: 1,
        first_name: o.FirstName,
        last_name: o.LastName,
        salutation: o.Salutation,
        date_of_birth: c(),
        place_of_birth: o.PlaceOfBirth,
        citizen: o.Citizen,
        tax_residence: o.TaxResidence,
        address_line_1: o.Address,
        address_city: o.City,
        phone: o.Phone,
        residence: o.Residence,
        currency: o.Currency,
        employment_status: o.EmploymentStatus,
        account_opening_reason: o.AccountOpeningReason,
        risk_tolerance: o.RiskTolerance,
        fatca_declaration: Number(o.FatcaDeclaration)
    };
    i && (d.affiliate_token = i), o.SkippedEmploymentDetails ? d.tin_skipped = 1 : d.tax_identification_number = o.TIN, Object.keys(d).forEach(y => {
        typeof d[y] == "string" && (d[y] = d[y].trim()), d[y] === "" && delete d[y]
    }), o.Payload = JSON.stringify(d)
}
r($4, "default");

function U4(o, a, n, p) {
    let i = {
        mt5_new_account: 1,
        account_type: o.AccountType,
        email: o.Email,
        leverage: o.Leverage,
        mainPassword: o.Password,
        product: o.Product,
        name: o.Name
    };
    o.Product === "stp" && (i.mt5_account_type = "financial_stp"), o.Product === "financial" && (i.mt5_account_type = "financial"), o.AccountType !== "demo" && o.LandingCompany !== "svg" && (i.company = o.LandingCompany), o.Payload = JSON.stringify(i)
}
r(U4, "default");

function M4(o, a, n) {
    cacheTrackEvents.track({
        name: "ce_real_account_signup_form",
        properties: {
            action: "real_signup_finished",
            form_name: "real_account_signup_form_outsystems"
        }
    })
}
r(M4, "default");

function q4(o, a, n, p) {
    o.Payload = JSON.stringify({
        authorize: o.AuthToken
    })
}
r(q4, "default");

function H4(o, a, n, p) {
    let i = JSON.parse(localStorage.getItem("client.accounts") || JSON.stringify({})),
        c = JSON.parse(o.Response),
        d = c.authorize.account_list.find(S => S.loginid === c.authorize.loginid),
        y = w(h({}, i), {
            [c.authorize.loginid]: w(h({}, d), {
                token: o.Token,
                email: c.authorize.email,
                session_start: new Date().getTime(),
                excluded_until: "",
                landing_company_name: c.authorize.landing_company_name,
                residence: c.authorize.country,
                balance: c.authorize.balance,
                accepted_bch: 0
            })
        }),
        T = c.authorize.loginid,
        f = "https://app.deriv.com";
    if (window.location.hostname !== "hub.deriv.com" && (f = "https://staging-app.deriv.com"), localStorage.setItem("client.accounts", JSON.stringify(y)), localStorage.setItem("accountsList", JSON.stringify(y)), window.JSCookies) {
        let S = new Date(new Date().getTime() + 6e4);
        JSCookies.set("client.accounts", JSON.stringify(y), {
            domain: ".deriv.com",
            expires: S,
            secure: !0
        }), JSCookies.set("active_loginid", T, {
            domain: ".deriv.com",
            expires: S,
            secure: !0
        })
    }
    setTimeout(() => window.location.hostname === "hub.deriv.com" ? window.location.href = "https://app.deriv.com/redirect" : window.location.href = "https://staging-app.deriv.com/redirect", 100)
}
r(H4, "default");

function W4(o, a, n, p) {
    let i = getCookieValue("affiliate_tracking");

    function c() {
        var S;
        let [y, T, f] = String((S = o.DateOfBirth) != null ? S : "01/01/1999").split("/");
        return `${f}-${T.padStart(2,"0")}-${y.padStart(2,"0")}`
    }
    r(c, "parseDateFromDDMMYYYY");
    let d = {
        currency: o.Currency,
        first_name: o.FirstName,
        last_name: o.LastName,
        date_of_birth: c(),
        address_line_1: o.Address,
        address_city: o.City,
        address_state: o.State,
        address_postcode: o.PostCode,
        fatca_declaration: Number(o.FatcaDeclaration),
        residence: o.Residence,
        non_pep_declaration: 1,
        citizen: o.Citizen,
        phone: o.Phone,
        place_of_birth: o.PlaceOfBirth,
        account_opening_reason: o.AccountOpeningReason,
        tax_residence: o.TaxResidence,
        employment_status: o.EmploymentStatus,
        tnc_acceptance: 1
    };
    i && (d.affiliate_token = i), o.SkippedEmploymentDetails ? d.tin_skipped = 1 : d.tax_identification_number = o.TIN, Object.keys(d).forEach(y => {
        typeof d[y] == "string" && (d[y] = d[y].trim()), d[y] === "" && delete d[y]
    }), o.Payload = JSON.stringify(d)
}
r(W4, "default");

function z4(o, a, n, p) {
    let i = getCookieValue("affiliate_tracking");

    function c() {
        var S;
        let [y, T, f] = String((S = o.DateOfBirth) != null ? S : "01/01/1999").split("/");
        return `${f}-${T.padStart(2,"0")}-${y.padStart(2,"0")}`
    }
    r(c, "parseDateFromDDMMYYYY");
    let d = {
        new_account_maltainvest: 1,
        account_opening_reason: o.AccountOpeningReason,
        account_turnover: o.AccountTurnover,
        address_city: o.City,
        address_line_1: o.Address,
        address_postcode: o.PostCode,
        address_state: o.State,
        cfd_experience: o.CFDExperience,
        cfd_frequency: o.CFDFrequency,
        cfd_trading_definition: o.CFDTradingDefinition,
        citizen: o.Citizen,
        currency: o.Currency,
        date_of_birth: c(),
        education_level: o.EducationLevel,
        employment_industry: o.EmploymentIndustry,
        employment_status: o.EmploymentStatus,
        estimated_worth: o.EstimatedWorth,
        fatca_declaration: Number(o.FatcaDeclaration),
        first_name: o.FirstName,
        income_source: o.IncomeSource,
        last_name: o.LastName,
        leverage_impact_trading: o.LeverageImpactTrading,
        leverage_trading_high_risk_stop_loss: o.LeverageTradingHighRiskStopLoss,
        net_income: o.NetIncome,
        occupation: o.Occupation,
        phone: o.Phone,
        place_of_birth: o.PlaceOfBirth,
        required_initial_margin: o.RequiredInitialMargin,
        residence: o.Residence,
        resident_self_declaration: 1,
        risk_tolerance: o.RiskTolerance,
        salutation: o.Salutation,
        source_of_experience: o.SourceOfExperience,
        source_of_wealth: o.SourceOfWealth,
        tax_residence: o.TaxResidence
    };
    i && (d.affiliate_token = i), o.SkippedEmploymentDetails ? d.tin_skipped = 1 : d.tax_identification_number = o.TIN, Object.keys(d).forEach(y => {
        typeof d[y] == "string" && (d[y] = d[y].trim()), d[y] === "" && delete d[y]
    }), o.Payload = JSON.stringify(d)
}
r(z4, "default");

function j4(o, a, n, p) {
    o.Payload = JSON.stringify({
        authorize: o.AuthToken
    })
}
r(j4, "default");

function K4(o, a, n, p) {
    let i = JSON.parse(localStorage.getItem("client.accounts") || JSON.stringify({})),
        c = JSON.parse(o.Response),
        d = c.authorize.account_list.find(A => A.loginid === c.authorize.loginid),
        y = w(h({}, i), {
            [c.authorize.loginid]: w(h({}, d), {
                token: o.Token,
                email: c.authorize.email,
                session_start: new Date().getTime(),
                excluded_until: "",
                landing_company_name: c.authorize.landing_company_name,
                residence: c.authorize.country,
                balance: c.authorize.balance,
                accepted_bch: 0
            })
        }),
        T = c.authorize.loginid,
        f = "https://app.deriv.com";
    window.location.hostname !== "hub.deriv.com" && (f = "https://staging-app.deriv.com"), localStorage.setItem("client.accounts", JSON.stringify(y)), localStorage.setItem("accountsList", JSON.stringify(y));
    let S = document.getElementById("localstorage-sync");
    if (S && (S == null || S.contentWindow.postMessage({
            key: "client.accounts",
            value: JSON.stringify(y)
        }, f), S == null || S.contentWindow.postMessage({
            key: "active_loginid",
            value: T
        }, f)), window.JSCookies) {
        let A = new Date(new Date().getTime() + 6e4);
        JSCookies.set("client.accounts", JSON.stringify(y), {
            domain: ".deriv.com",
            expires: A,
            secure: !0
        }), JSCookies.set("active_loginid", T, {
            domain: ".deriv.com",
            expires: A,
            secure: !0
        })
    }
    setTimeout(() => window.location.hostname === "hub.deriv.com" ? window.location.href = "https://app.deriv.com/redirect?one_time_deposit=true" : window.location.href = "https://staging-app.deriv.com/redirect?one_time_deposit=true", 100)
}
r(K4, "default");

function Y4(o, a, n) {
    cacheTrackEvents.track({
        name: "ce_real_account_signup_form",
        properties: {
            action: "real_signup_finished",
            form_name: "real_account_signup_form_outsystems"
        }
    })
}
r(Y4, "default");

function Z4(o, a, n, p) {
    return new Promise(function(i, c) {
        var A, b, x;
        let d = localStorage.getItem("config.server_url"),
            y = localStorage.getItem("config.app_id"),
            T = {
                en: "en-EN",
                fr: "fr-FR"
            },
            f = (A = o.LangFromLocalStorage) != null ? A : "en-EN",
            S = (b = new URLSearchParams(window.location.search).get("locale")) != null ? b : "";
        S && S !== f && (f = (x = T[S]) != null ? x : "en-EN"), console.log("lang", f), o.Lang = f, d && y ? (o.URL = d, o.AppId = y) : (o.URL = "green.derivws.com", o.AppId = location.hostname === "hub.deriv.com" ? "61554" : location.hostname.includes("dev-hub") ? "15438" : "53503"), i()
    })
}
r(Z4, "default");

function Q4(o, a, n, p) {
    var x, v;
    let i = o.GetOs,
        c = o.Platform,
        d = o.Login,
        y = o.Server,
        T = {
            mt5: {
                ios: "https://download.mql5.com/cdn/mobile/mt5/ios",
                android: "https://download.mql5.com/cdn/mobile/mt5/android",
                osx: "https://download.mql5.com/cdn/web/metaquotes.software.corp/mt5/MetaTrader5.dmg",
                windows: "https://download.mql5.com/cdn/web/deriv.com.limited/mt5/deriv5setup.exe",
                linux: "https://www.metatrader5.com/en/terminal/help/start_advanced/install_linux"
            },
            dxtrade: {
                ios: "https://apps.apple.com/us/app/deriv-x/id1563337503",
                android: "https://play.google.com/store/apps/details?id=com.deriv.dx",
                osx: "https://dx.deriv.com/download-mac",
                windows: "https://dx.deriv.com/download-windows"
            },
            ctrader: {
                ios: "https://apps.apple.com/us/app/deriv-ctrader/id6466996509",
                android: "https://play.google.com/store/apps/details?id=com.deriv.ct",
                osx: "https://getctradermac.com/deriv/ctrader-deriv-setup.dmg",
                windows: "https://getctrader.com/deriv/ctrader-deriv-setup.exe"
            }
        },
        S = (x = {
            mt5: {
                ios: `metatrader5://account?login=${d}&server=${y}`,
                android: `metatrader5://account?login=${d}&server=${y}`
            },
            dxtrade: {
                ios: "derivx://",
                android: "derivx://"
            },
            ctrader: {
                ios: "ctrader://",
                android: "ctrader://"
            }
        } [c]) == null ? void 0 : x[i],
        A = (v = T[c]) == null ? void 0 : v[i];
    window.location.replace(S);
    let b = setTimeout(() => {
        A ? window.location.replace(A) : console.error("Installer URL not found for platform:", c, "and OS:", i)
    }, 4e3);
    document.addEventListener("visibilitychange", function() {
        document.hidden && clearTimeout(b), window.onblur && (clearTimeout(b), document.hidden || (A ? window.location.replace(A) : console.error("Installer URL not found for platform:", c, "and OS:", i)))
    })
}
r(Q4, "default");

function X4(o, a, n, p) {
    let i = JSON.parse(o.Data);
    o.Response = JSON.stringify(i)
}
r(X4, "default");

function e8(o, a, n, p) {
    let i = {
        cashier: o.Cashier,
        provider: "crypto",
        type: "api"
    };
    o.Payload = JSON.stringify(i)
}
r(e8, "default");

function t8(o, a, n, p) {
    let i = JSON.parse(o.Data);
    o.Response = JSON.stringify(i)
}
r(t8, "default");

function r8(o, a, n, p) {
    let i = {
        cashier: "withdraw",
        provider: "crypto",
        type: "api"
    };
    o.DryRun && (i.dry_run = 1), o.VerificationCode && (i.verification_code = o.VerificationCode), o.Address && (i.address = o.Address), o.Amount && (i.amount = o.Amount), o.EstimatedFeeUniqueId && (estimated_fee_unique_id = o.EstimatedFeeUniqueId), o.Payload = JSON.stringify(i)
}
r(r8, "default");

function a8(o, a, n, p) {
    let i = {
        cashier: o.Cashier,
        provider: "doughflow"
    };
    o.verification_code && (i.verification_code = o.verification_code), o.Payload = JSON.stringify(i)
}
r(a8, "default");

function o8(o, a, n, p) {
    o.Payload = JSON.stringify({
        authorize: o.AuthToken
    })
}
r(o8, "default");

function s8(o, a, n, p) {
    o.Payload = JSON.stringify({
        citizen: o.Citizen
    })
}
r(s8, "default");

function n8(o, a, n, p) {
    var c, d, y;
    let i = JSON.parse(o.ResidenceList || JSON.stringify([])).residence_list.find(T => T.value == o.Residence);
    o.IsIDVSupported = !!((y = (d = (c = i == null ? void 0 : i.identity) == null ? void 0 : c.services) == null ? void 0 : d.idv) != null && y.is_country_supported)
}
r(n8, "default");

function i8(o, a, n, p) {
    let i = JSON.parse(o.Response),
        c = i.authorize.loginid,
        d = {
            [c]: w(h({}, i.authorize.account_list[0]), {
                token: o.Token,
                email: i.authorize.email,
                session_start: new Date().getTime(),
                excluded_until: "",
                landing_company_name: i.authorize.landing_company_name,
                residence: i.authorize.country,
                balance: i.authorize.balance,
                accepted_bch: 0
            })
        },
        y = "https://app.deriv.com";
    if (window.location.hostname !== "hub.deriv.com" && (y = "https://staging-app.deriv.com"), localStorage.setItem("client.accounts", JSON.stringify(d)), localStorage.setItem("accountsList", JSON.stringify(d)), window.JSCookies) {
        let T = new Date(new Date().getTime() + 6e4);
        JSCookies.set("client.accounts", JSON.stringify(d), {
            domain: ".deriv.com",
            expires: T,
            secure: !0
        }), JSCookies.set("active_loginid", c, {
            domain: ".deriv.com",
            expires: T,
            secure: !0
        })
    }
    o.ContinueEURealAccountCreation || (o.RedirectToDerivApp || o.IsEU) && setTimeout(() => {
        let T = window.location.hostname;
        if (T === "hub.deriv.com") return o.IsEU ? window.location.href = `https://app.deriv.com/redirect?action=add_account_multiplier&ext_platform_url=https%3A%2F%2F${T}%2Ftradershub` : window.location.href = `https://app.deriv.com/redirect?action=add_account&ext_platform_url=https%3A%2F%2F${T}%2Ftradershub`;
        o.IsEU ? window.location.href = `https://staging-app.deriv.com/redirect?action=add_account_multiplier&ext_platform_url=https%3A%2F%2F${T}%2Ftradershub` : window.location.href = `https://staging-app.deriv.com/redirect?action=add_account&ext_platform_url=https%3A%2F%2F${T}%2Ftradershub`
    }, 100)
}
r(i8, "default");

function u8(o, a, n, p) {
    let i = JSON.parse(o.Response);
    o.IsEU = i.authorize.upgradeable_landing_companies.includes("maltainvest") && i.authorize.upgradeable_landing_companies.length === 1
}
r(u8, "default");

function c8(o, a, n, p) {
    o.OpenInNewTab ? window.open(o.URL, "_blank") : window.location.href = o.URL
}
r(c8, "default");

function l8(o, a, n, p) {
    var c;
    let i = (c = window.Analytics) == null ? void 0 : c.Analytics;
    i && i.identifyEvent(o.UserId)
}
r(l8, "default");

function d8(o, a, n, p) {
    o.Payload = JSON.stringify({
        authorize: o.AuthToken
    })
}
r(d8, "default");

function p8(o, a, n, p) {
    var T, f;
    let i = JSON.parse(o.AuthorizeResponse),
        c = (f = (T = i == null ? void 0 : i.authorize) == null ? void 0 : T.account_list) != null ? f : [],
        d = JSON.parse(localStorage.getItem("accountsList")),
        y = {};
    c.forEach(S => {
        var A, b;
        S.is_disabled || (y[S.loginid] = Object.assign({}, S, {
            token: (b = (A = d[S.loginid]) == null ? void 0 : A.token) != null ? b : ""
        }))
    }), localStorage.setItem("accountsList", JSON.stringify(y)), localStorage.setItem("client.accounts", JSON.stringify(y))
}
r(p8, "default");

function f8(o, a, n, p) {
    var y, T, f, S, A, b, x;
    let i = (x = (b = (A = (S = (f = (T = (y = JSON.parse(o.ResidenceList)) == null ? void 0 : y.residence_list) == null ? void 0 : T.find(v => v.value == o.Citizen)) == null ? void 0 : f.identity) == null ? void 0 : S.services) == null ? void 0 : A.idv) == null ? void 0 : b.documents_supported) != null ? x : {};

    function c(v) {
        for (let [R, I] of Object.entries(i))
            if (I.display_name === v || I.additional && I.additional.display_name === v) return R;
        return null
    }
    r(c, "findKeyByDisplayName");
    let d = {
        document_number: o.DocumentNumber,
        document_type: c(o.DocumentName),
        issuing_country: o.Citizen
    };
    o.AdditionalDocumentNumber && (d.document_additional = o.AdditionalDocumentNumber), o.Payload = JSON.stringify(d)
}
r(f8, "default");

function m8(o, a, n, p) {
    let i = {
        referrer: "https://app.deriv.com/cashier/on-ramp",
        service: o.service
    };
    o.Payload = JSON.stringify(i)
}
r(m8, "default");

function y8(o, a, n, p) {
    let i = JSON.parse(o.Data);
    o.Response = JSON.stringify(i)
}
r(y8, "default");

function T8(o, a, n, p) {
    var c, d;
    let i = "deriv.com";
    (c = window == null ? void 0 : window.JSCookies) == null || c.set("tracking_status", o.IsAccepted ? !0 : "", {
        domain: i
    }), o.IsAccepted || (d = window == null ? void 0 : window.JSCookies) == null || d.set("tracking_status_decline", !0, {
        domain: i
    })
}
r(T8, "default");

function S8(o, a, n, p) {
    let i = {
        description: 1
    };
    o.ActionType && (i.action_type = o.ActionType), o.Limit && (i.limit = o.Limit), o.Payload = JSON.stringify(i)
}
r(S8, "default");

function D8(o, a, n, p) {
    let i = JSON.parse(localStorage.getItem("accountsList"));

    function c(d) {
        for (let y in d)
            if (y.startsWith("CRW")) return y;
        return null
    }
    r(c, "getFirstWallet"), o.ActiveWalletLoginId = c(i)
}
r(D8, "default");

function b8(o, a, n, p) {
    let i = "https://app.deriv.com";
    window.location.hostname !== "hub.deriv.com" && (i = "https://staging-app.deriv.com");
    let c = document.getElementById("localstorage-sync");
    if (c && (c == null || c.contentWindow.postMessage({
            key: "client.accounts",
            value: localStorage.getItem("client.accounts")
        }, i), c == null || c.contentWindow.postMessage({
            key: "active_loginid",
            value: o.ActiveLoginId
        }, i)), window.JSCookies) {
        let d = new Date(new Date().getTime() + 6e4);
        JSCookies.set("client.accounts", localStorage.getItem("client.accounts"), {
            domain: ".deriv.com",
            expires: d,
            secure: !0
        }), JSCookies.set("active_loginid", o.ActiveLoginId, {
            domain: ".deriv.com",
            expires: d,
            secure: !0
        })
    }
    setTimeout(() => {
        if (window.location.hostname === "hub.deriv.com") return window.location.href = "https://app.deriv.com/redirect";
        window.location.href = "https://staging-app.deriv.com/redirect"
    }, 100)
}
r(b8, "default");

function g8(o, a, n, p) {
    o.Payload = JSON.stringify({
        tin_validations: 1,
        tax_residence: o.Residence
    })
}
r(g8, "default");

function A8(o, a, n, p) {
    let i = JSON.parse(o.Data),
        c = (i == null ? void 0 : i.trading_platform_accounts) || [],
        d = JSON.parse(o.CFDAccounts) || [],
        y = c == null ? void 0 : c.map(S => {
            let A = `${o.Platform}_${S.product||"standard"}`,
                b = d.find(x => x.ProductIdentifier === A) || {};
            return w(h({}, S), {
                identifier: A,
                icon: b.Icon || "",
                isAdded: !0,
                label: b.Label || "",
                description: b.Description || ""
            })
        }),
        T = y.filter(({
            account_type: S
        }) => S === "demo"),
        f = y.filter(({
            account_type: S
        }) => S === "real");
    o.DemoAccounts = JSON.stringify(T), o.RealAccounts = JSON.stringify(f)
}
r(A8, "default");

function x8(o, a, n, p) {
    let c = JSON.parse(o.Data).trading_platform_available_accounts || [],
        d = JSON.parse(o.CFDAccounts) || [],
        y = r(A => ({
            rejected: "Failed",
            suspected: "Failed",
            expired: "Failed",
            pending: "In Review",
            verified: "Verified"
        })[A] || "None", "getStatusLabel"),
        T = r(A => {
            let b = {
                    requiresVerification: !0,
                    requiredTIN: A.valid_tin ? "Completed" : "",
                    poaStatusLabel: y(A.poa_status || "none"),
                    poiStatusLabel: y(A.poi_status || "none")
                },
                x = [{
                    order: 1,
                    icon: "/tradershub/img/tradershub.PolaroidUserMd.svg",
                    title: "Verify your identity",
                    description: "Upload an image of your identity document.",
                    statusLabel: b.poiStatusLabel,
                    identifier: "poi",
                    isDisabled: b.poiStatusLabel === "Verified" || b.poiStatusLabel === "In Review",
                    redirectTo: "/Accounts/ProofOfIdentity?platform=tradershub"
                }, {
                    order: 2,
                    icon: "/tradershub/img/tradershub.HouseBlankMD.svg",
                    title: "Confirm your address",
                    description: "Upload an image of your document showing your current address.",
                    statusLabel: b.poaStatusLabel,
                    identifier: "poa",
                    isDisabled: b.poaStatusLabel === "Verified" || b.poaStatusLabel === "In Review",
                    redirectTo: "/Accounts/ProofOfAddress?platform=tradershub"
                }, {
                    order: 3,
                    icon: "/tradershub/img/tradershub.EtfMd.svg",
                    title: "Provide your tax details",
                    description: "Add your employment status and tax information.",
                    statusLabel: b.requiredTIN,
                    identifier: "tax",
                    isDisabled: b.requiredTIN === "Completed",
                    redirectTo: "/account/personal-details#:~:text=Employment%20and%20tax%20information"
                }],
                v = ["Verified", "In Review", "Completed"],
                R = {
                    Verified: 2,
                    "In Review": 1,
                    Completed: 3
                };
            return x.sort((I, L) => {
                let De = v.includes(I.statusLabel),
                    Uu = v.includes(L.statusLabel);
                return De && Uu ? R[I.statusLabel] - R[L.statusLabel] : De === Uu ? I.order - L.order : De ? 1 : -1
            })
        }, "createProfileSetup"),
        S = c.map(A => {
            let b = `${A.platform}_${A.product}`,
                x = d.find(R => R.ProductIdentifier === b),
                v = A.client_kyc_status ? T(A.client_kyc_status) : void 0;
            return w(h({}, A), {
                identifier: b,
                icon: (x == null ? void 0 : x.Icon) || "",
                label: (x == null ? void 0 : x.Label) || "",
                description: (x == null ? void 0 : x.Description) || "",
                profileSetup: v,
                requiresVerification: A.client_kyc_status ? "true" : "false",
                orderId: x == null ? void 0 : x.Id,
                isAdded: !1
            })
        }).filter(A => A.platform === "mt5" ? A.is_default_jurisdiction === "true" : !0).sort((A, b) => (A.orderId || 0) - (b.orderId || 0));
    o.Response = JSON.stringify(S)
}
r(x8, "default");

function O8(o, a, n, p) {
    o.Payload = JSON.stringify({
        trading_platform_new_account: 1,
        account_type: o.AccountType,
        market_type: o.MarketType,
        password: o.Password,
        platform: o.Platform
    })
}
r(O8, "default");

function v8(o, a, n, p) {
    o.Payload = JSON.stringify({
        trading_platform_password_change: 1,
        new_password: o.NewPassword,
        old_password: o.OldPassword,
        platform: o.Platform
    })
}
r(v8, "default");

function R8(o, a, n, p) {
    o.Payload = JSON.stringify({
        trading_platform_password_reset: 1,
        new_password: o.NewPassword,
        platform: o.Platform,
        verification_code: o.VerificationCode
    })
}
r(R8, "default");

function C8(o, a, n, p) {
    let i = {
        country_code: o.TempClientCountry ? o.TempClientCountry : o.ClientCountry,
        app_id: [30767, 19111, 22168, 23789],
        query: ["name", "available_markets", "available_trade_types"]
    };
    o.Payload = JSON.stringify(i)
}
r(C8, "default");

function h8(o, a, n, p) {
    let i = JSON.parse(o.Data),
        c = i == null ? void 0 : i.trading_platform_product_listing,
        d = c[30767],
        y = c[19111],
        T = c[22168],
        f = c[23789];
    o.Response = JSON.stringify({
        ShouldShowDBot: !!(y != null && y.name),
        ShouldShowSmartTrader: !!(T != null && T.name),
        ShouldShowDerivGo: !!(f != null && f.name),
        ShouldShowDTrader: !!(d != null && d.name),
        DTraderAvailableTradeTypes: d.available_trade_types,
        IsTradingAllowed: !!(f != null && f.name) || !!(d != null && d.name) || !!(y != null && y.name) || !!(T != null && T.name)
    })
}
r(h8, "default");

function w8(o, a, n, p) {
    o.Payload = JSON.stringify({
        account_from: o.TransferFrom,
        account_to: o.TransferTo,
        amount: o.Amount,
        currency: o.Currency
    })
}
r(w8, "default");

function I8(o, a, n, p) {
    o.Payload = JSON.stringify({
        verify_email: o.UserEmail,
        type: o.Type
    })
}
r(I8, "default");
var E8 = {};
var t = s,
    N8 = class N8 extends t.Controller.BaseModuleController {
        constructor(a, n, p, i) {
            super(a, n, p, i), this.registerOnApplicationReadyHandler(function() {}, "onApplicationReady$Action")
        }
        get clientActionProxies() {
            return this.hasOwnProperty("_clientActionProxies") || (this._clientActionProxies = {}), this._clientActionProxies
        }
        set clientActionProxies(a) {
            this._clientActionProxies = a
        }
        checktradershubRole$Action(a) {
            var n = new t.SystemStructures.HasRoleResultRec;
            return n.hasRoleOut = t.Authorization.hasRole({
                roleKey: this.roles.tradershub.roleKey
            }), n
        }
        get roles() {
            return this.hasOwnProperty("_roles") || (this._roles = {
                tradershub: {
                    roleKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc.ab2a6b39-1f30-4f20-a069-cf5d18b076f4",
                    roleException: new t.Exceptions.Exceptions.NotRegisteredException("tradershub.Nottradershub", "tradershub role required")
                }
            }), this._roles
        }
        set roles(a) {
            this._roles = a
        }
        get defaultTimeout() {
            return this.hasOwnProperty("_defaultTimeout") || (this._defaultTimeout = 10), this._defaultTimeout
        }
        set defaultTimeout(a) {
            this._defaultTimeout = a
        }
        getDefaultTimeout() {
            return this.defaultTimeout
        }
    };
r(N8, "Controller");
var P8 = N8,
    u = new P8(E8),
    l = u;
u.availableCTraderAccounts$Action = function(o, a) {
    return t.Logger.startActiveSpan("AvailableCTraderAccounts", function(n) {
        return n && (n.setAttribute("code.function", "AvailableCTraderAccounts"), n.setAttribute("outsystems.function.key", "33c4c7dd-25b5-42e0-b3eb-9ea48a4309fb"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_ACTION")), t.Flow.tryFinally(function() {
            a = l.callContext(a);
            var p = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.AvailableCTraderAccounts$vars")));
            p.value.cFDAccountsInLocal = o.clone();
            var i = new t.DataTypes.VariableHolder,
                c = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.AvailableCTraderAccounts$outVars")));
            return t.Flow.executeAsyncFlow(function() {
                return u.default.tradingPlatformAvailableAccounts2$Action("ctrader", p.value.cFDAccountsInLocal, a).then(function(d) {
                    i.value = d
                }).then(function() {
                    c.value.responseOut = i.value.responseOut
                })
            }).then(function() {
                return c.value
            })
        }, function() {
            n && n.end()
        })
    }, 1)
};
u.constructor.registerVariableGroupType("tradershub.AvailableCTraderAccounts$vars", [{
    name: "CFDAccounts",
    attrName: "cFDAccountsInLocal",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.RecordList,
    defaultValue: r(function() {
        return new P
    }, "defaultValue"),
    complexType: P
}]);
u.constructor.registerVariableGroupType("tradershub.AvailableCTraderAccounts$outVars", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.clientActionProxies.availableCTraderAccounts$Action = function(o) {
    return o = o === void 0 ? new P : o, l.executeActionInsideJSNode(u.default.availableCTraderAccounts$Action.bind(l, o), t.Controller.BaseViewController.activeScreen ? t.Controller.BaseViewController.activeScreen.callContext() : void 0, function(a) {
        return {
            Response: t.DataConversion.JSNodeParamConverter.to(a.responseOut, t.DataTypes.DataTypes.Text)
        }
    })
};
u.availableDxtradeAccounts$Action = function(o, a) {
    return t.Logger.startActiveSpan("AvailableDxtradeAccounts", function(n) {
        return n && (n.setAttribute("code.function", "AvailableDxtradeAccounts"), n.setAttribute("outsystems.function.key", "4c03482c-3d22-4905-b21f-714d9b06d281"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_ACTION")), t.Flow.tryFinally(function() {
            a = l.callContext(a);
            var p = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.AvailableDxtradeAccounts$vars")));
            p.value.cFDAccountsInLocal = o.clone();
            var i = new t.DataTypes.VariableHolder,
                c = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.AvailableDxtradeAccounts$outVars")));
            return t.Flow.executeAsyncFlow(function() {
                return u.default.tradingPlatformAvailableAccounts2$Action("dxtrade", p.value.cFDAccountsInLocal, a).then(function(d) {
                    i.value = d
                }).then(function() {
                    c.value.responseOut = i.value.responseOut
                })
            }).then(function() {
                return c.value
            })
        }, function() {
            n && n.end()
        })
    }, 1)
};
u.constructor.registerVariableGroupType("tradershub.AvailableDxtradeAccounts$vars", [{
    name: "CFDAccounts",
    attrName: "cFDAccountsInLocal",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.RecordList,
    defaultValue: r(function() {
        return new P
    }, "defaultValue"),
    complexType: P
}]);
u.constructor.registerVariableGroupType("tradershub.AvailableDxtradeAccounts$outVars", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.clientActionProxies.availableDxtradeAccounts$Action = function(o) {
    return o = o === void 0 ? new P : o, l.executeActionInsideJSNode(u.default.availableDxtradeAccounts$Action.bind(l, o), t.Controller.BaseViewController.activeScreen ? t.Controller.BaseViewController.activeScreen.callContext() : void 0, function(a) {
        return {
            Response: t.DataConversion.JSNodeParamConverter.to(a.responseOut, t.DataTypes.DataTypes.Text)
        }
    })
};
u.availableMT5Accounts$Action = function(o, a) {
    return t.Logger.startActiveSpan("AvailableMT5Accounts", function(n) {
        return n && (n.setAttribute("code.function", "AvailableMT5Accounts"), n.setAttribute("outsystems.function.key", "0231342f-f86b-4a7c-a5fb-779590765537"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_ACTION")), t.Flow.tryFinally(function() {
            a = l.callContext(a);
            var p = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.AvailableMT5Accounts$vars")));
            p.value.cFDAccountsInLocal = o.clone();
            var i = new t.DataTypes.VariableHolder,
                c = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.AvailableMT5Accounts$outVars")));
            return t.Flow.executeAsyncFlow(function() {
                return u.default.tradingPlatformAvailableAccounts2$Action("mt5", p.value.cFDAccountsInLocal, a).then(function(d) {
                    i.value = d
                }).then(function() {
                    c.value.responseOut = i.value.responseOut
                })
            }).then(function() {
                return c.value
            })
        }, function() {
            n && n.end()
        })
    }, 1)
};
u.constructor.registerVariableGroupType("tradershub.AvailableMT5Accounts$vars", [{
    name: "CFDAccounts",
    attrName: "cFDAccountsInLocal",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.RecordList,
    defaultValue: r(function() {
        return new P
    }, "defaultValue"),
    complexType: P
}]);
u.constructor.registerVariableGroupType("tradershub.AvailableMT5Accounts$outVars", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.clientActionProxies.availableMT5Accounts$Action = function(o) {
    return o = o === void 0 ? new P : o, l.executeActionInsideJSNode(u.default.availableMT5Accounts$Action.bind(l, o), t.Controller.BaseViewController.activeScreen ? t.Controller.BaseViewController.activeScreen.callContext() : void 0, function(a) {
        return {
            Response: t.DataConversion.JSNodeParamConverter.to(a.responseOut, t.DataTypes.DataTypes.Text)
        }
    })
};
u.cFDServiceToken$Action = function(o, a) {
    return t.Logger.startActiveSpan("CFDServiceToken", function(n) {
        return n && (n.setAttribute("code.function", "CFDServiceToken"), n.setAttribute("outsystems.function.key", "bddce24c-d100-45f2-99ba-e52f1cc112b8"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_ACTION")), t.Flow.tryFinally(function() {
            a = l.callContext(a);
            var p = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.CFDServiceToken$vars")));
            p.value.platformInLocal = o;
            var i = new t.DataTypes.VariableHolder,
                c = new t.DataTypes.VariableHolder,
                d = new t.DataTypes.VariableHolder,
                y = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.CFDServiceToken$outVars")));
            return t.Flow.executeAsyncFlow(function() {
                return d.value = t.Logger.startActiveSpan("Payload", function(T) {
                    T && (T.setAttribute("code.function", "Payload"), T.setAttribute("outsystems.function.key", "a913906a-9faa-468d-8899-2936ecd86261"), T.setAttribute("outsystems.function.owner.name", "tradershub"), T.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), T.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                    try {
                        return l.safeExecuteJSNode(Sm, "Payload", "CFDServiceToken", {
                            AccountType: t.DataConversion.JSNodeParamConverter.to(g.getAccountType(), t.DataTypes.DataTypes.Text),
                            Platform: t.DataConversion.JSNodeParamConverter.to(p.value.platformInLocal, t.DataTypes.DataTypes.Text),
                            payload: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text)
                        }, function(f) {
                            var S = new(l.constructor.getVariableGroupType("tradershub.CFDServiceToken$payloadJSResult"));
                            return S.payloadOut = t.DataConversion.JSNodeParamConverter.from(f.payload, t.DataTypes.DataTypes.Text), S
                        }, {}, {})
                    } finally {
                        T && T.end()
                    }
                }, 1), u.default.derivApiSendMessage$Action(d.value.payloadOut, "service_token", !1, a).then(function(T) {
                    i.value = T
                }).then(function() {
                    c.value = t.Logger.startActiveSpan("ModifyData", function(T) {
                        T && (T.setAttribute("code.function", "ModifyData"), T.setAttribute("outsystems.function.key", "0adc4a1d-5d51-4056-8789-b0c2f40402ee"), T.setAttribute("outsystems.function.owner.name", "tradershub"), T.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), T.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                        try {
                            return l.safeExecuteJSNode(Tm, "ModifyData", "CFDServiceToken", {
                                Data: t.DataConversion.JSNodeParamConverter.to(i.value.responseOut, t.DataTypes.DataTypes.Text),
                                Response: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text)
                            }, function(f) {
                                var S = new(l.constructor.getVariableGroupType("tradershub.CFDServiceToken$modifyDataJSResult"));
                                return S.responseOut = t.DataConversion.JSNodeParamConverter.from(f.Response, t.DataTypes.DataTypes.Text), S
                            }, {}, {})
                        } finally {
                            T && T.end()
                        }
                    }, 1), y.value.tokenOut = c.value.responseOut, k8.consoleLog$Action(y.value.tokenOut, 0, a)
                })
            }).then(function() {
                return y.value
            })
        }, function() {
            n && n.end()
        })
    }, 1)
};
u.constructor.registerVariableGroupType("tradershub.CFDServiceToken$vars", [{
    name: "Platform",
    attrName: "platformInLocal",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.constructor.registerVariableGroupType("tradershub.CFDServiceToken$modifyDataJSResult", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.constructor.registerVariableGroupType("tradershub.CFDServiceToken$payloadJSResult", [{
    name: "payload",
    attrName: "payloadOut",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.constructor.registerVariableGroupType("tradershub.CFDServiceToken$outVars", [{
    name: "Token",
    attrName: "tokenOut",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.clientActionProxies.cFDServiceToken$Action = function(o) {
    return o = o === void 0 ? "" : o, l.executeActionInsideJSNode(u.default.cFDServiceToken$Action.bind(l, t.DataConversion.JSNodeParamConverter.from(o, t.DataTypes.DataTypes.Text)), t.Controller.BaseViewController.activeScreen ? t.Controller.BaseViewController.activeScreen.callContext() : void 0, function(a) {
        return {
            Token: t.DataConversion.JSNodeParamConverter.to(a.tokenOut, t.DataTypes.DataTypes.Text)
        }
    })
};
u.checkEUTrackingCookies$Action = function(o) {
    return t.Logger.startActiveSpan("CheckEUTrackingCookies", function(a) {
        a && (a.setAttribute("code.function", "CheckEUTrackingCookies"), a.setAttribute("outsystems.function.key", "bc91dfbd-09b4-4843-9256-02fb73eec6d9"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_ACTION"));
        try {
            o = l.callContext(o);
            var n = new t.DataTypes.VariableHolder,
                p = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.CheckEUTrackingCookies$outVars")));
            return n.value = t.Logger.startActiveSpan("CheckCookies", function(i) {
                i && (i.setAttribute("code.function", "CheckCookies"), i.setAttribute("outsystems.function.key", "fba30719-c99c-4de1-af24-672c85b7b011"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                try {
                    return l.safeExecuteJSNode(Dm, "CheckCookies", "CheckEUTrackingCookies", {
                        IsAvailable: t.DataConversion.JSNodeParamConverter.to(!1, t.DataTypes.DataTypes.Boolean)
                    }, function(c) {
                        var d = new(l.constructor.getVariableGroupType("tradershub.CheckEUTrackingCookies$checkCookiesJSResult"));
                        return d.isAvailableOut = t.DataConversion.JSNodeParamConverter.from(c.IsAvailable, t.DataTypes.DataTypes.Boolean), d
                    }, {}, {})
                } finally {
                    i && i.end()
                }
            }, 1), p.value.isAvailableOut = n.value.isAvailableOut, p.value
        } finally {
            a && a.end()
        }
    }, 1)
};
u.constructor.registerVariableGroupType("tradershub.CheckEUTrackingCookies$checkCookiesJSResult", [{
    name: "IsAvailable",
    attrName: "isAvailableOut",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Boolean,
    defaultValue: r(function() {
        return !1
    }, "defaultValue")
}]);
u.constructor.registerVariableGroupType("tradershub.CheckEUTrackingCookies$outVars", [{
    name: "IsAvailable",
    attrName: "isAvailableOut",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Boolean,
    defaultValue: r(function() {
        return !1
    }, "defaultValue")
}]);
u.clientActionProxies.checkEUTrackingCookies$Action = function() {
    return l.executeActionInsideJSNode(u.default.checkEUTrackingCookies$Action.bind(l), t.Controller.BaseViewController.activeScreen ? t.Controller.BaseViewController.activeScreen.callContext() : void 0, function(o) {
        return {
            IsAvailable: t.DataConversion.JSNodeParamConverter.to(o.isAvailableOut, t.DataTypes.DataTypes.Boolean)
        }
    })
};
u.cleanupAfterRealSignup$Action = function(o) {
    return t.Logger.startActiveSpan("CleanupAfterRealSignup", function(a) {
        a && (a.setAttribute("code.function", "CleanupAfterRealSignup"), a.setAttribute("outsystems.function.key", "b78f35fb-90c4-4f04-8cff-cd956979b3e7"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_ACTION"));
        try {
            o = l.callContext(o), g.setRealSignupTaxResidence(t.BuiltinFunctions.nullTextIdentifier()), g.setRealSignupAddress(t.BuiltinFunctions.nullTextIdentifier()), g.setRealSignupAddressPostCode(t.BuiltinFunctions.nullTextIdentifier()), g.setRealSignupAddressState(t.BuiltinFunctions.nullTextIdentifier()), g.setRealSignupAddressTown(t.BuiltinFunctions.nullTextIdentifier()), g.setRealSignupDateofBirth(t.BuiltinFunctions.nullTextIdentifier()), g.setRealSignupFatcaDeclaration(t.BuiltinFunctions.nullTextIdentifier()), g.setRealSignupFirstName(t.BuiltinFunctions.nullTextIdentifier()), g.setRealSignupIDVDocumentName(t.BuiltinFunctions.nullTextIdentifier()), g.setRealSignupIDVDocumentNumber(t.BuiltinFunctions.nullTextIdentifier()), g.setRealSignupLastName(t.BuiltinFunctions.nullTextIdentifier()), g.setSelectedCurrencyCode(t.BuiltinFunctions.nullTextIdentifier()), g.setRealSignupEmployementStatus(t.BuiltinFunctions.nullTextIdentifier()), g.setRealSignupTIDNumber(t.BuiltinFunctions.nullTextIdentifier()), g.setRealSignupTaxIDConfirmation(!1), g.setRealSignupTaxResidenceLabel(t.BuiltinFunctions.nullTextIdentifier()), g.setRealSignupIsIDVSupported(!1), g.setRealSignupSkippedIDV(!1), g.setInitializeRealSignup(!1), g.setRealSignupAccountOpeningReason(t.BuiltinFunctions.nullTextIdentifier()), g.setRealSignupAddressStateLabel(t.BuiltinFunctions.nullTextIdentifier()), g.setRealSignupIDVAdditionalDocumentNumber(t.BuiltinFunctions.nullTextIdentifier()), g.setRealSignupIDVAdditionalDocumentNumberLabel(t.BuiltinFunctions.nullTextIdentifier()), g.setRealSignupPhone(t.BuiltinFunctions.nullTextIdentifier()), g.setRealSignupPlaceOfBirth(t.BuiltinFunctions.nullTextIdentifier()), g.setRealSignupNoTaxInformation(!1);
            return
        } finally {
            a && a.end()
        }
    }, 1)
};
u.clientActionProxies.cleanupAfterRealSignup$Action = function() {
    return l.executeActionInsideJSNode(u.default.cleanupAfterRealSignup$Action.bind(l), t.Controller.BaseViewController.activeScreen ? t.Controller.BaseViewController.activeScreen.callContext() : void 0, function(o) {
        return {}
    })
};
u.cleanupAfterResetPassword$Action = function(o) {
    return t.Logger.startActiveSpan("CleanupAfterResetPassword", function(a) {
        a && (a.setAttribute("code.function", "CleanupAfterResetPassword"), a.setAttribute("outsystems.function.key", "79c1592d-7563-4154-8a77-0f2e1d944bf3"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_ACTION"));
        try {
            o = l.callContext(o), g.setAction(t.BuiltinFunctions.nullTextIdentifier()), g.setCode(t.BuiltinFunctions.nullTextIdentifier()), g.setLang(t.BuiltinFunctions.nullTextIdentifier());
            return
        } finally {
            a && a.end()
        }
    }, 1)
};
u.clientActionProxies.cleanupAfterResetPassword$Action = function() {
    return l.executeActionInsideJSNode(u.default.cleanupAfterResetPassword$Action.bind(l), t.Controller.BaseViewController.activeScreen ? t.Controller.BaseViewController.activeScreen.callContext() : void 0, function(o) {
        return {}
    })
};
u.cleanupAfterSignup$Action = function(o) {
    return t.Logger.startActiveSpan("CleanupAfterSignup", function(a) {
        a && (a.setAttribute("code.function", "CleanupAfterSignup"), a.setAttribute("outsystems.function.key", "d79f7a78-9d51-4173-9cad-5e7e9870332d"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_ACTION"));
        try {
            o = l.callContext(o), g.setAction(t.BuiltinFunctions.nullTextIdentifier()), g.setCode(t.BuiltinFunctions.nullTextIdentifier()), g.setSignupEmail(t.BuiltinFunctions.nullTextIdentifier());
            return
        } finally {
            a && a.end()
        }
    }, 1)
};
u.clientActionProxies.cleanupAfterSignup$Action = function() {
    return l.executeActionInsideJSNode(u.default.cleanupAfterSignup$Action.bind(l), t.Controller.BaseViewController.activeScreen ? t.Controller.BaseViewController.activeScreen.callContext() : void 0, function(o) {
        return {}
    })
};
u.combineAvailableAccounts$Action = function(o, a, n, p) {
    return t.Logger.startActiveSpan("CombineAvailableAccounts", function(i) {
        i && (i.setAttribute("code.function", "CombineAvailableAccounts"), i.setAttribute("outsystems.function.key", "fab9c125-264b-4eeb-8520-efbfd7bc6f8e"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_ACTION"));
        try {
            p = l.callContext(p);
            var c = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.CombineAvailableAccounts$vars")));
            c.value.mT5AccountsInLocal = o.clone(), c.value.cTraderAccountsInLocal = a.clone(), c.value.dXTradeAccountsInLocal = n.clone();
            var d = new t.DataTypes.VariableHolder,
                y = new t.DataTypes.VariableHolder(new t.DataTypes.JSONSerializeOutputType),
                T = new t.DataTypes.VariableHolder(new t.DataTypes.JSONSerializeOutputType),
                f = new t.DataTypes.VariableHolder(new t.DataTypes.JSONSerializeOutputType),
                S = new t.DataTypes.VariableHolder(new(t.Controller.BaseController.getJSONDeserializeOutputType(G))),
                A = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.CombineAvailableAccounts$outVars")));
            return y.value.jSONOut = t.JSONUtils.serializeToJSON(c.value.mT5AccountsInLocal, !1, !1), T.value.jSONOut = t.JSONUtils.serializeToJSON(c.value.cTraderAccountsInLocal, !1, !1), f.value.jSONOut = t.JSONUtils.serializeToJSON(c.value.dXTradeAccountsInLocal, !1, !1), d.value = t.Logger.startActiveSpan("CombineList", function(b) {
                b && (b.setAttribute("code.function", "CombineList"), b.setAttribute("outsystems.function.key", "2e874911-3220-424f-810b-34f63579e762"), b.setAttribute("outsystems.function.owner.name", "tradershub"), b.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), b.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                try {
                    return l.safeExecuteJSNode(bm, "CombineList", "CombineAvailableAccounts", {
                        MT5Accounts: t.DataConversion.JSNodeParamConverter.to(y.value.jSONOut, t.DataTypes.DataTypes.Text),
                        DXTradeAccounts: t.DataConversion.JSNodeParamConverter.to(f.value.jSONOut, t.DataTypes.DataTypes.Text),
                        CTraderAccounts: t.DataConversion.JSNodeParamConverter.to(T.value.jSONOut, t.DataTypes.DataTypes.Text),
                        CombinedList: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text)
                    }, function(x) {
                        var v = new(l.constructor.getVariableGroupType("tradershub.CombineAvailableAccounts$combineListJSResult"));
                        return v.combinedListOut = t.DataConversion.JSNodeParamConverter.from(x.CombinedList, t.DataTypes.DataTypes.Text), v
                    }, {}, {})
                } finally {
                    b && b.end()
                }
            }, 1), S.value.dataOut = t.JSONUtils.deserializeFromJSON(d.value.combinedListOut, G, !1), A.value.combinedListOut = S.value.dataOut, A.value
        } finally {
            i && i.end()
        }
    }, 1)
};
u.constructor.registerVariableGroupType("tradershub.CombineAvailableAccounts$vars", [{
    name: "MT5Accounts",
    attrName: "mT5AccountsInLocal",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.RecordList,
    defaultValue: r(function() {
        return new G
    }, "defaultValue"),
    complexType: G
}, {
    name: "CTraderAccounts",
    attrName: "cTraderAccountsInLocal",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.RecordList,
    defaultValue: r(function() {
        return new G
    }, "defaultValue"),
    complexType: G
}, {
    name: "DXTradeAccounts",
    attrName: "dXTradeAccountsInLocal",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.RecordList,
    defaultValue: r(function() {
        return new G
    }, "defaultValue"),
    complexType: G
}]);
u.constructor.registerVariableGroupType("tradershub.CombineAvailableAccounts$combineListJSResult", [{
    name: "CombinedList",
    attrName: "combinedListOut",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.constructor.registerVariableGroupType("tradershub.CombineAvailableAccounts$outVars", [{
    name: "CombinedList",
    attrName: "combinedListOut",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.RecordList,
    defaultValue: r(function() {
        return new G
    }, "defaultValue"),
    complexType: G
}]);
u.clientActionProxies.combineAvailableAccounts$Action = function(o, a, n) {
    return o = o === void 0 ? new G : o, a = a === void 0 ? new G : a, n = n === void 0 ? new G : n, l.executeActionInsideJSNode(u.default.combineAvailableAccounts$Action.bind(l, o, a, n), t.Controller.BaseViewController.activeScreen ? t.Controller.BaseViewController.activeScreen.callContext() : void 0, function(p) {
        return {
            CombinedList: p.combinedListOut
        }
    })
};
u.combineCreatedAccounts$Action = function(o, a, n, p) {
    return t.Logger.startActiveSpan("CombineCreatedAccounts", function(i) {
        i && (i.setAttribute("code.function", "CombineCreatedAccounts"), i.setAttribute("outsystems.function.key", "2b644053-a8b7-4b62-9f83-d85867ad9988"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_ACTION"));
        try {
            p = l.callContext(p);
            var c = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.CombineCreatedAccounts$vars")));
            c.value.mT5AccountsInLocal = o.clone(), c.value.cTraderAccountsInLocal = a.clone(), c.value.dXTradeAccountsInLocal = n.clone();
            var d = new t.DataTypes.VariableHolder,
                y = new t.DataTypes.VariableHolder(new t.DataTypes.JSONSerializeOutputType),
                T = new t.DataTypes.VariableHolder(new t.DataTypes.JSONSerializeOutputType),
                f = new t.DataTypes.VariableHolder(new t.DataTypes.JSONSerializeOutputType),
                S = new t.DataTypes.VariableHolder(new(t.Controller.BaseController.getJSONDeserializeOutputType(_))),
                A = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.CombineCreatedAccounts$outVars")));
            return T.value.jSONOut = t.JSONUtils.serializeToJSON(c.value.mT5AccountsInLocal, !1, !1), y.value.jSONOut = t.JSONUtils.serializeToJSON(c.value.cTraderAccountsInLocal, !1, !1), f.value.jSONOut = t.JSONUtils.serializeToJSON(c.value.dXTradeAccountsInLocal, !1, !1), d.value = t.Logger.startActiveSpan("CombineList", function(b) {
                b && (b.setAttribute("code.function", "CombineList"), b.setAttribute("outsystems.function.key", "803b8c94-ffe7-431d-b345-238ae78ac61b"), b.setAttribute("outsystems.function.owner.name", "tradershub"), b.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), b.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                try {
                    return l.safeExecuteJSNode(gm, "CombineList", "CombineCreatedAccounts", {
                        CTraderAccounts: t.DataConversion.JSNodeParamConverter.to(y.value.jSONOut, t.DataTypes.DataTypes.Text),
                        MT5Accounts: t.DataConversion.JSNodeParamConverter.to(T.value.jSONOut, t.DataTypes.DataTypes.Text),
                        DXTradeAccounts: t.DataConversion.JSNodeParamConverter.to(f.value.jSONOut, t.DataTypes.DataTypes.Text),
                        CombinedList: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text)
                    }, function(x) {
                        var v = new(l.constructor.getVariableGroupType("tradershub.CombineCreatedAccounts$combineListJSResult"));
                        return v.combinedListOut = t.DataConversion.JSNodeParamConverter.from(x.CombinedList, t.DataTypes.DataTypes.Text), v
                    }, {}, {})
                } finally {
                    b && b.end()
                }
            }, 1), S.value.dataOut = t.JSONUtils.deserializeFromJSON(d.value.combinedListOut, _, !1), A.value.combinedListOut = S.value.dataOut, A.value
        } finally {
            i && i.end()
        }
    }, 1)
};
u.constructor.registerVariableGroupType("tradershub.CombineCreatedAccounts$vars", [{
    name: "MT5Accounts",
    attrName: "mT5AccountsInLocal",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.RecordList,
    defaultValue: r(function() {
        return new _
    }, "defaultValue"),
    complexType: _
}, {
    name: "CTraderAccounts",
    attrName: "cTraderAccountsInLocal",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.RecordList,
    defaultValue: r(function() {
        return new _
    }, "defaultValue"),
    complexType: _
}, {
    name: "DXTradeAccounts",
    attrName: "dXTradeAccountsInLocal",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.RecordList,
    defaultValue: r(function() {
        return new _
    }, "defaultValue"),
    complexType: _
}]);
u.constructor.registerVariableGroupType("tradershub.CombineCreatedAccounts$combineListJSResult", [{
    name: "CombinedList",
    attrName: "combinedListOut",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.constructor.registerVariableGroupType("tradershub.CombineCreatedAccounts$outVars", [{
    name: "CombinedList",
    attrName: "combinedListOut",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.RecordList,
    defaultValue: r(function() {
        return new _
    }, "defaultValue"),
    complexType: _
}]);
u.clientActionProxies.combineCreatedAccounts$Action = function(o, a, n) {
    return o = o === void 0 ? new _ : o, a = a === void 0 ? new _ : a, n = n === void 0 ? new _ : n, l.executeActionInsideJSNode(u.default.combineCreatedAccounts$Action.bind(l, o, a, n), t.Controller.BaseViewController.activeScreen ? t.Controller.BaseViewController.activeScreen.callContext() : void 0, function(p) {
        return {
            CombinedList: p.combinedListOut
        }
    })
};
u.createdCTraderAccounts$Action = function(o, a, n) {
    return t.Logger.startActiveSpan("CreatedCTraderAccounts", function(p) {
        return p && (p.setAttribute("code.function", "CreatedCTraderAccounts"), p.setAttribute("outsystems.function.key", "26f22670-3998-48de-b1f3-a7dce1554fbd"), p.setAttribute("outsystems.function.owner.name", "tradershub"), p.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), p.setAttribute("outsystems.function.type", "CLIENT_ACTION")), t.Flow.tryFinally(function() {
            n = l.callContext(n);
            var i = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.CreatedCTraderAccounts$vars")));
            i.value.cFDAccountsInLocal = o.clone(), i.value.accountTypeInLocal = a;
            var c = new t.DataTypes.VariableHolder,
                d = new t.DataTypes.VariableHolder,
                y = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.CreatedCTraderAccounts$outVars")));
            return t.Flow.executeAsyncFlow(function() {
                return u.default.tradingPlatformAccounts$Action("ctrader", i.value.cFDAccountsInLocal, i.value.accountTypeInLocal, n).then(function(T) {
                    c.value = T
                }).then(function() {
                    d.value = t.Logger.startActiveSpan("GenerateTotalBalance", function(T) {
                        T && (T.setAttribute("code.function", "GenerateTotalBalance"), T.setAttribute("outsystems.function.key", "eb2d545f-b6f4-4703-a7b3-c6a0b63e0e51"), T.setAttribute("outsystems.function.owner.name", "tradershub"), T.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), T.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                        try {
                            return l.safeExecuteJSNode(Pm, "GenerateTotalBalance", "CreatedCTraderAccounts", {
                                Data: t.DataConversion.JSNodeParamConverter.to(c.value.responseOut, t.DataTypes.DataTypes.Text),
                                TotalBalance: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text)
                            }, function(f) {
                                var S = new(l.constructor.getVariableGroupType("tradershub.CreatedCTraderAccounts$generateTotalBalanceJSResult"));
                                return S.totalBalanceOut = t.DataConversion.JSNodeParamConverter.from(f.TotalBalance, t.DataTypes.DataTypes.Text), S
                            }, {
                                FormatMoney: Yf.clientActionProxies.formatMoney$Action
                            }, {})
                        } finally {
                            T && T.end()
                        }
                    }, 1), y.value.responseOut = c.value.responseOut, y.value.totalCTraderBalanceOut = d.value.totalBalanceOut
                })
            }).then(function() {
                return y.value
            })
        }, function() {
            p && p.end()
        })
    }, 1)
};
u.constructor.registerVariableGroupType("tradershub.CreatedCTraderAccounts$vars", [{
    name: "CFDAccounts",
    attrName: "cFDAccountsInLocal",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.RecordList,
    defaultValue: r(function() {
        return new P
    }, "defaultValue"),
    complexType: P
}, {
    name: "AccountType",
    attrName: "accountTypeInLocal",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.constructor.registerVariableGroupType("tradershub.CreatedCTraderAccounts$generateTotalBalanceJSResult", [{
    name: "TotalBalance",
    attrName: "totalBalanceOut",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.constructor.registerVariableGroupType("tradershub.CreatedCTraderAccounts$outVars", [{
    name: "TotalCTraderBalance",
    attrName: "totalCTraderBalanceOut",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.clientActionProxies.createdCTraderAccounts$Action = function(o, a) {
    return o = o === void 0 ? new P : o, a = a === void 0 ? "" : a, l.executeActionInsideJSNode(u.default.createdCTraderAccounts$Action.bind(l, o, t.DataConversion.JSNodeParamConverter.from(a, t.DataTypes.DataTypes.Text)), t.Controller.BaseViewController.activeScreen ? t.Controller.BaseViewController.activeScreen.callContext() : void 0, function(n) {
        return {
            TotalCTraderBalance: t.DataConversion.JSNodeParamConverter.to(n.totalCTraderBalanceOut, t.DataTypes.DataTypes.Text),
            Response: t.DataConversion.JSNodeParamConverter.to(n.responseOut, t.DataTypes.DataTypes.Text)
        }
    })
};
u.createdDxTradeAccounts$Action = function(o, a, n) {
    return t.Logger.startActiveSpan("CreatedDxTradeAccounts", function(p) {
        return p && (p.setAttribute("code.function", "CreatedDxTradeAccounts"), p.setAttribute("outsystems.function.key", "6586794d-2ea8-4ba0-a3dd-57c4a80f6374"), p.setAttribute("outsystems.function.owner.name", "tradershub"), p.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), p.setAttribute("outsystems.function.type", "CLIENT_ACTION")), t.Flow.tryFinally(function() {
            n = l.callContext(n);
            var i = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.CreatedDxTradeAccounts$vars")));
            i.value.cFDAccountsInLocal = o.clone(), i.value.accountTypeInLocal = a;
            var c = new t.DataTypes.VariableHolder,
                d = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.CreatedDxTradeAccounts$outVars")));
            return t.Flow.executeAsyncFlow(function() {
                return u.default.tradingPlatformAccounts$Action("dxtrade", i.value.cFDAccountsInLocal, i.value.accountTypeInLocal, n).then(function(y) {
                    c.value = y
                }).then(function() {
                    d.value.responseOut = c.value.responseOut
                })
            }).then(function() {
                return d.value
            })
        }, function() {
            p && p.end()
        })
    }, 1)
};
u.constructor.registerVariableGroupType("tradershub.CreatedDxTradeAccounts$vars", [{
    name: "CFDAccounts",
    attrName: "cFDAccountsInLocal",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.RecordList,
    defaultValue: r(function() {
        return new P
    }, "defaultValue"),
    complexType: P
}, {
    name: "AccountType",
    attrName: "accountTypeInLocal",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.constructor.registerVariableGroupType("tradershub.CreatedDxTradeAccounts$outVars", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.clientActionProxies.createdDxTradeAccounts$Action = function(o, a) {
    return o = o === void 0 ? new P : o, a = a === void 0 ? "" : a, l.executeActionInsideJSNode(u.default.createdDxTradeAccounts$Action.bind(l, o, t.DataConversion.JSNodeParamConverter.from(a, t.DataTypes.DataTypes.Text)), t.Controller.BaseViewController.activeScreen ? t.Controller.BaseViewController.activeScreen.callContext() : void 0, function(n) {
        return {
            Response: t.DataConversion.JSNodeParamConverter.to(n.responseOut, t.DataTypes.DataTypes.Text)
        }
    })
};
u.createdMT5Accounts$Action = function(o, a, n) {
    return t.Logger.startActiveSpan("CreatedMT5Accounts", function(p) {
        return p && (p.setAttribute("code.function", "CreatedMT5Accounts"), p.setAttribute("outsystems.function.key", "4fe3eef6-9fc1-4afd-8a7a-53033d9e2ee7"), p.setAttribute("outsystems.function.owner.name", "tradershub"), p.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), p.setAttribute("outsystems.function.type", "CLIENT_ACTION")), t.Flow.tryFinally(function() {
            n = l.callContext(n);
            var i = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.CreatedMT5Accounts$vars")));
            i.value.cFDAccountsInLocal = o.clone(), i.value.accountTypeInLocal = a;
            var c = new t.DataTypes.VariableHolder,
                d = new t.DataTypes.VariableHolder,
                y = new t.DataTypes.VariableHolder(new t.DataTypes.JSONSerializeOutputType),
                T = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.CreatedMT5Accounts$outVars")));
            return t.Flow.executeAsyncFlow(function() {
                return u.default.derivApiSendMessage$Action("", "mt5_login_list", !0, n).then(function(f) {
                    c.value = f
                }).then(function() {
                    c.value.isErrorOut ? t.FeedbackMessageService.showFeedbackMessage(c.value.errorMessageOut, 3) : (y.value.jSONOut = t.JSONUtils.serializeToJSON(i.value.cFDAccountsInLocal, !1, !1), d.value = t.Logger.startActiveSpan("ModifyData", function(f) {
                        f && (f.setAttribute("code.function", "ModifyData"), f.setAttribute("outsystems.function.key", "f54523fc-9574-4b91-8430-f974868e8e17"), f.setAttribute("outsystems.function.owner.name", "tradershub"), f.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), f.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                        try {
                            return l.safeExecuteJSNode(Nm, "ModifyData", "CreatedMT5Accounts", {
                                CFDAccounts: t.DataConversion.JSNodeParamConverter.to(y.value.jSONOut, t.DataTypes.DataTypes.Text),
                                Data: t.DataConversion.JSNodeParamConverter.to(c.value.responseOut, t.DataTypes.DataTypes.Text),
                                DemoAccounts: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text),
                                RealAccounts: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text)
                            }, function(S) {
                                var A = new(l.constructor.getVariableGroupType("tradershub.CreatedMT5Accounts$modifyDataJSResult"));
                                return A.demoAccountsOut = t.DataConversion.JSNodeParamConverter.from(S.DemoAccounts, t.DataTypes.DataTypes.Text), A.realAccountsOut = t.DataConversion.JSNodeParamConverter.from(S.RealAccounts, t.DataTypes.DataTypes.Text), A
                            }, {}, {})
                        } finally {
                            f && f.end()
                        }
                    }, 1), i.value.accountTypeInLocal === "demo" ? T.value.responseOut = d.value.demoAccountsOut : T.value.responseOut = d.value.realAccountsOut)
                })
            }).then(function() {
                return T.value
            })
        }, function() {
            p && p.end()
        })
    }, 1)
};
u.constructor.registerVariableGroupType("tradershub.CreatedMT5Accounts$vars", [{
    name: "CFDAccounts",
    attrName: "cFDAccountsInLocal",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.RecordList,
    defaultValue: r(function() {
        return new P
    }, "defaultValue"),
    complexType: P
}, {
    name: "AccountType",
    attrName: "accountTypeInLocal",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.constructor.registerVariableGroupType("tradershub.CreatedMT5Accounts$modifyDataJSResult", [{
    name: "DemoAccounts",
    attrName: "demoAccountsOut",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "RealAccounts",
    attrName: "realAccountsOut",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.constructor.registerVariableGroupType("tradershub.CreatedMT5Accounts$outVars", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.clientActionProxies.createdMT5Accounts$Action = function(o, a) {
    return o = o === void 0 ? new P : o, a = a === void 0 ? "" : a, l.executeActionInsideJSNode(u.default.createdMT5Accounts$Action.bind(l, o, t.DataConversion.JSNodeParamConverter.from(a, t.DataTypes.DataTypes.Text)), t.Controller.BaseViewController.activeScreen ? t.Controller.BaseViewController.activeScreen.callContext() : void 0, function(n) {
        return {
            Response: t.DataConversion.JSNodeParamConverter.to(n.responseOut, t.DataTypes.DataTypes.Text)
        }
    })
};
u.cryptoConfig$Action = function(o) {
    return t.Logger.startActiveSpan("CryptoConfig", function(a) {
        return a && (a.setAttribute("code.function", "CryptoConfig"), a.setAttribute("outsystems.function.key", "fa3ae9fc-f75c-4e0b-b22b-86b64d9c61a9"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_ACTION")), t.Flow.tryFinally(function() {
            o = l.callContext(o);
            var n = new t.DataTypes.VariableHolder,
                p = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.CryptoConfig$outVars")));
            return t.Flow.executeAsyncFlow(function() {
                return u.default.derivApiSendMessage$Action("", "crypto_config", !0, o).then(function(i) {
                    n.value = i
                }).then(function() {
                    n.value.isErrorOut || (p.value.responseOut = n.value.responseOut)
                })
            }).then(function() {
                return p.value
            })
        }, function() {
            a && a.end()
        })
    }, 1)
};
u.constructor.registerVariableGroupType("tradershub.CryptoConfig$outVars", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.clientActionProxies.cryptoConfig$Action = function() {
    return l.executeActionInsideJSNode(u.default.cryptoConfig$Action.bind(l), t.Controller.BaseViewController.activeScreen ? t.Controller.BaseViewController.activeScreen.callContext() : void 0, function(o) {
        return {
            Response: t.DataConversion.JSNodeParamConverter.to(o.responseOut, t.DataTypes.DataTypes.Text)
        }
    })
};
u.cryptoEstimations$Action = function(o, a) {
    return t.Logger.startActiveSpan("CryptoEstimations", function(n) {
        return n && (n.setAttribute("code.function", "CryptoEstimations"), n.setAttribute("outsystems.function.key", "cf1b3298-82d8-4e52-bd22-9c58a434b6e1"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_ACTION")), t.Flow.tryFinally(function() {
            a = l.callContext(a);
            var p = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.CryptoEstimations$vars")));
            p.value.currencyInLocal = o;
            var i = new t.DataTypes.VariableHolder,
                c = new t.DataTypes.VariableHolder,
                d = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.CryptoEstimations$outVars")));
            return t.Flow.executeAsyncFlow(function() {
                return c.value = t.Logger.startActiveSpan("Payload", function(y) {
                    y && (y.setAttribute("code.function", "Payload"), y.setAttribute("outsystems.function.key", "b3c5e1f9-ba5d-4337-9179-de5254965b74"), y.setAttribute("outsystems.function.owner.name", "tradershub"), y.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), y.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                    try {
                        return l.safeExecuteJSNode(Vm, "Payload", "CryptoEstimations", {
                            Currency: t.DataConversion.JSNodeParamConverter.to(p.value.currencyInLocal, t.DataTypes.DataTypes.Text),
                            Payload: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text)
                        }, function(T) {
                            var f = new(l.constructor.getVariableGroupType("tradershub.CryptoEstimations$payloadJSResult"));
                            return f.payloadOut = t.DataConversion.JSNodeParamConverter.from(T.Payload, t.DataTypes.DataTypes.Text), f
                        }, {}, {})
                    } finally {
                        y && y.end()
                    }
                }, 1), u.default.derivApiSendMessage$Action(c.value.payloadOut, "crypto_estimations", !0, a).then(function(y) {
                    i.value = y
                }).then(function() {
                    i.value.isErrorOut || (d.value.responseOut = i.value.responseOut)
                })
            }).then(function() {
                return d.value
            })
        }, function() {
            n && n.end()
        })
    }, 1)
};
u.constructor.registerVariableGroupType("tradershub.CryptoEstimations$vars", [{
    name: "Currency",
    attrName: "currencyInLocal",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.constructor.registerVariableGroupType("tradershub.CryptoEstimations$payloadJSResult", [{
    name: "Payload",
    attrName: "payloadOut",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.constructor.registerVariableGroupType("tradershub.CryptoEstimations$outVars", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.clientActionProxies.cryptoEstimations$Action = function(o) {
    return o = o === void 0 ? "" : o, l.executeActionInsideJSNode(u.default.cryptoEstimations$Action.bind(l, t.DataConversion.JSNodeParamConverter.from(o, t.DataTypes.DataTypes.Text)), t.Controller.BaseViewController.activeScreen ? t.Controller.BaseViewController.activeScreen.callContext() : void 0, function(a) {
        return {
            Response: t.DataConversion.JSNodeParamConverter.to(a.responseOut, t.DataTypes.DataTypes.Text)
        }
    })
};
u.derivApiSendMessage$Action = function(o, a, n, p) {
    return t.Logger.startActiveSpan("DerivApiSendMessage", function(i) {
        return i && (i.setAttribute("code.function", "DerivApiSendMessage"), i.setAttribute("outsystems.function.key", "c0dce4e6-a508-461d-b6bf-99ab076e4629"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_ACTION")), t.Flow.tryFinally(function() {
            p = l.callContext(p);
            var c = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.DerivApiSendMessage$vars")));
            c.value.payloadInLocal = o, c.value.endpointInLocal = a, c.value.authorizeInLocal = n;
            var d = new t.DataTypes.VariableHolder,
                y = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.DerivApiSendMessage$outVars")));
            return t.Flow.executeAsyncFlow(function() {
                return t.Logger.startActiveSpan("SendApiCall", function(T) {
                    T && (T.setAttribute("code.function", "SendApiCall"), T.setAttribute("outsystems.function.key", "cc9421a5-0b57-4156-86f9-1ebe6391c2a1"), T.setAttribute("outsystems.function.owner.name", "tradershub"), T.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), T.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                    try {
                        return l.safeExecuteAsyncJSNode(Lm, "SendApiCall", "DerivApiSendMessage", {
                            Endpoint: t.DataConversion.JSNodeParamConverter.to(c.value.endpointInLocal, t.DataTypes.DataTypes.Text),
                            payload: t.DataConversion.JSNodeParamConverter.to(c.value.payloadInLocal, t.DataTypes.DataTypes.Text),
                            Token: t.DataConversion.JSNodeParamConverter.to(g.getAuthToken(), t.DataTypes.DataTypes.Text),
                            Authorize: t.DataConversion.JSNodeParamConverter.to(c.value.authorizeInLocal, t.DataTypes.DataTypes.Boolean),
                            response: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text),
                            IsError: t.DataConversion.JSNodeParamConverter.to(!1, t.DataTypes.DataTypes.Boolean),
                            ErrorMessage: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text),
                            ErrorCode: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text)
                        }, function(f) {
                            var S = new(l.constructor.getVariableGroupType("tradershub.DerivApiSendMessage$sendApiCallJSResult"));
                            return S.responseOut = t.DataConversion.JSNodeParamConverter.from(f.response, t.DataTypes.DataTypes.Text), S.isErrorOut = t.DataConversion.JSNodeParamConverter.from(f.IsError, t.DataTypes.DataTypes.Boolean), S.errorMessageOut = t.DataConversion.JSNodeParamConverter.from(f.ErrorMessage, t.DataTypes.DataTypes.Text), S.errorCodeOut = t.DataConversion.JSNodeParamConverter.from(f.ErrorCode, t.DataTypes.DataTypes.Text), S
                        }, {}, {})
                    } finally {
                        T && T.end()
                    }
                }, 1).then(function(T) {
                    d.value = T
                }).then(function() {
                    y.value.responseOut = d.value.responseOut, y.value.errorMessageOut = d.value.errorMessageOut, y.value.errorCodeOut = d.value.errorCodeOut, y.value.isErrorOut = d.value.isErrorOut
                })
            }).then(function() {
                return y.value
            })
        }, function() {
            i && i.end()
        })
    }, 1)
};
u.constructor.registerVariableGroupType("tradershub.DerivApiSendMessage$vars", [{
    name: "Payload",
    attrName: "payloadInLocal",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "Endpoint",
    attrName: "endpointInLocal",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "Authorize",
    attrName: "authorizeInLocal",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Boolean,
    defaultValue: r(function() {
        return !1
    }, "defaultValue")
}]);
u.constructor.registerVariableGroupType("tradershub.DerivApiSendMessage$sendApiCallJSResult", [{
    name: "response",
    attrName: "responseOut",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "IsError",
    attrName: "isErrorOut",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Boolean,
    defaultValue: r(function() {
        return !1
    }, "defaultValue")
}, {
    name: "ErrorMessage",
    attrName: "errorMessageOut",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "ErrorCode",
    attrName: "errorCodeOut",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.constructor.registerVariableGroupType("tradershub.DerivApiSendMessage$outVars", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "IsError",
    attrName: "isErrorOut",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Boolean,
    defaultValue: r(function() {
        return !1
    }, "defaultValue")
}, {
    name: "ErrorMessage",
    attrName: "errorMessageOut",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "ErrorCode",
    attrName: "errorCodeOut",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.clientActionProxies.derivApiSendMessage$Action = function(o, a, n) {
    return o = o === void 0 ? "" : o, a = a === void 0 ? "" : a, n = n === void 0 ? !1 : n, l.executeActionInsideJSNode(u.default.derivApiSendMessage$Action.bind(l, t.DataConversion.JSNodeParamConverter.from(o, t.DataTypes.DataTypes.Text), t.DataConversion.JSNodeParamConverter.from(a, t.DataTypes.DataTypes.Text), t.DataConversion.JSNodeParamConverter.from(n, t.DataTypes.DataTypes.Boolean)), t.Controller.BaseViewController.activeScreen ? t.Controller.BaseViewController.activeScreen.callContext() : void 0, function(p) {
        return {
            Response: t.DataConversion.JSNodeParamConverter.to(p.responseOut, t.DataTypes.DataTypes.Text),
            IsError: t.DataConversion.JSNodeParamConverter.to(p.isErrorOut, t.DataTypes.DataTypes.Boolean),
            ErrorMessage: t.DataConversion.JSNodeParamConverter.to(p.errorMessageOut, t.DataTypes.DataTypes.Text),
            ErrorCode: t.DataConversion.JSNodeParamConverter.to(p.errorCodeOut, t.DataTypes.DataTypes.Text)
        }
    })
};
u.doLogin$Action = function(o, a, n) {
    return t.Logger.startActiveSpan("DoLogin", function(p) {
        return p && (p.setAttribute("code.function", "DoLogin"), p.setAttribute("outsystems.function.key", "c45e4ea0-ddd3-4e73-abfc-ba43af7d5ab7"), p.setAttribute("outsystems.function.owner.name", "tradershub"), p.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), p.setAttribute("outsystems.function.type", "CLIENT_ACTION")), t.Flow.tryFinally(function() {
            n = l.callContext(n);
            var i = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.DoLogin$vars")));
            i.value.usernameInLocal = o, i.value.passwordInLocal = a;
            var c = new t.DataTypes.VariableHolder,
                d = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.DoLogin$outVars")));
            return t.Flow.executeAsyncFlow(function() {
                return t.SystemActions.login(i.value.usernameInLocal, i.value.passwordInLocal, n).then(function(y) {
                    c.value = y
                }).then(function() {
                    c.value.userLoginResultOut.successAttr ? d.value.successOut = !0 : c.value.userLoginResultOut.userLoginFailureReasonAttr.invalidCredentialsAttr ? d.value.errorMessageOut = "Invalid credentials." : c.value.userLoginResultOut.userLoginFailureReasonAttr.tooManyFailedLoginAttemptsAttr ? d.value.errorMessageOut = "Too many failed login attempts. Please try again in " + c.value.userLoginResultOut.retryAfterSecondsAttr.toString() + " seconds." : d.value.errorMessageOut = "Login operation failed."
                })
            }).then(function() {
                return d.value
            })
        }, function() {
            p && p.end()
        })
    }, 1)
};
u.constructor.registerVariableGroupType("tradershub.DoLogin$vars", [{
    name: "Username",
    attrName: "usernameInLocal",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "Password",
    attrName: "passwordInLocal",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.constructor.registerVariableGroupType("tradershub.DoLogin$outVars", [{
    name: "Success",
    attrName: "successOut",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Boolean,
    defaultValue: r(function() {
        return !1
    }, "defaultValue")
}, {
    name: "ErrorMessage",
    attrName: "errorMessageOut",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.clientActionProxies.doLogin$Action = function(o, a) {
    return o = o === void 0 ? "" : o, a = a === void 0 ? "" : a, l.executeActionInsideJSNode(u.default.doLogin$Action.bind(l, t.DataConversion.JSNodeParamConverter.from(o, t.DataTypes.DataTypes.Text), t.DataConversion.JSNodeParamConverter.from(a, t.DataTypes.DataTypes.Text)), t.Controller.BaseViewController.activeScreen ? t.Controller.BaseViewController.activeScreen.callContext() : void 0, function(n) {
        return {
            Success: t.DataConversion.JSNodeParamConverter.to(n.successOut, t.DataTypes.DataTypes.Boolean),
            ErrorMessage: t.DataConversion.JSNodeParamConverter.to(n.errorMessageOut, t.DataTypes.DataTypes.Text)
        }
    })
};
u.exchangeRates$Action = function(o, a, n, p) {
    return t.Logger.startActiveSpan("ExchangeRates", function(i) {
        return i && (i.setAttribute("code.function", "ExchangeRates"), i.setAttribute("outsystems.function.key", "a6d5851e-1041-4f5f-b6fc-37bc1c1112dc"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_ACTION")), t.Flow.tryFinally(function() {
            p = l.callContext(p);
            var c = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.ExchangeRates$vars")));
            c.value.baseCurrencyInLocal = o, c.value.targetCurrencyInLocal = a, c.value.loginIdInLocal = n;
            var d = new t.DataTypes.VariableHolder,
                y = new t.DataTypes.VariableHolder,
                T = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.ExchangeRates$outVars")));
            return t.Flow.executeAsyncFlow(function() {
                return y.value = t.Logger.startActiveSpan("Payload", function(f) {
                    f && (f.setAttribute("code.function", "Payload"), f.setAttribute("outsystems.function.key", "d7505d7d-32c5-4f12-ac30-12fa36a5f958"), f.setAttribute("outsystems.function.owner.name", "tradershub"), f.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), f.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                    try {
                        return l.safeExecuteJSNode(Gm, "Payload", "ExchangeRates", {
                            TargetCurrency: t.DataConversion.JSNodeParamConverter.to(c.value.targetCurrencyInLocal, t.DataTypes.DataTypes.Text),
                            LoginId: t.DataConversion.JSNodeParamConverter.to(c.value.loginIdInLocal, t.DataTypes.DataTypes.Text),
                            BaseCurrency: t.DataConversion.JSNodeParamConverter.to(c.value.baseCurrencyInLocal, t.DataTypes.DataTypes.Text),
                            Payload: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text)
                        }, function(S) {
                            var A = new(l.constructor.getVariableGroupType("tradershub.ExchangeRates$payloadJSResult"));
                            return A.payloadOut = t.DataConversion.JSNodeParamConverter.from(S.Payload, t.DataTypes.DataTypes.Text), A
                        }, {}, {})
                    } finally {
                        f && f.end()
                    }
                }, 1), u.default.derivApiSendMessage$Action(y.value.payloadOut, "exchange_rates", !1, p).then(function(f) {
                    d.value = f
                }).then(function() {
                    d.value.isErrorOut || (T.value.responseOut = d.value.responseOut)
                })
            }).then(function() {
                return T.value
            })
        }, function() {
            i && i.end()
        })
    }, 1)
};
u.constructor.registerVariableGroupType("tradershub.ExchangeRates$vars", [{
    name: "BaseCurrency",
    attrName: "baseCurrencyInLocal",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "TargetCurrency",
    attrName: "targetCurrencyInLocal",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "LoginId",
    attrName: "loginIdInLocal",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.constructor.registerVariableGroupType("tradershub.ExchangeRates$payloadJSResult", [{
    name: "Payload",
    attrName: "payloadOut",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.constructor.registerVariableGroupType("tradershub.ExchangeRates$outVars", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.clientActionProxies.exchangeRates$Action = function(o, a, n) {
    return o = o === void 0 ? "" : o, a = a === void 0 ? "" : a, n = n === void 0 ? "" : n, l.executeActionInsideJSNode(u.default.exchangeRates$Action.bind(l, t.DataConversion.JSNodeParamConverter.from(o, t.DataTypes.DataTypes.Text), t.DataConversion.JSNodeParamConverter.from(a, t.DataTypes.DataTypes.Text), t.DataConversion.JSNodeParamConverter.from(n, t.DataTypes.DataTypes.Text)), t.Controller.BaseViewController.activeScreen ? t.Controller.BaseViewController.activeScreen.callContext() : void 0, function(p) {
        return {
            Response: t.DataConversion.JSNodeParamConverter.to(p.responseOut, t.DataTypes.DataTypes.Text)
        }
    })
};
u.featureFlagValueByName$Action = function(o, a) {
    return t.Logger.startActiveSpan("FeatureFlagValueByName", function(n) {
        n && (n.setAttribute("code.function", "FeatureFlagValueByName"), n.setAttribute("outsystems.function.key", "0e4d40fb-5602-4513-bce4-8ab7d1fd80b2"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_ACTION"));
        try {
            a = l.callContext(a);
            var p = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.FeatureFlagValueByName$vars")));
            p.value.nameInLocal = o;
            var i = new t.DataTypes.VariableHolder,
                c = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.FeatureFlagValueByName$outVars")));
            return i.value = t.Logger.startActiveSpan("GetFeatureFlagValueByName", function(d) {
                d && (d.setAttribute("code.function", "GetFeatureFlagValueByName"), d.setAttribute("outsystems.function.key", "acef3fff-9694-4a07-9f1f-9a6295ba7e00"), d.setAttribute("outsystems.function.owner.name", "tradershub"), d.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), d.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                try {
                    return l.safeExecuteJSNode(Jm, "GetFeatureFlagValueByName", "FeatureFlagValueByName", {
                        Name: t.DataConversion.JSNodeParamConverter.to(p.value.nameInLocal, t.DataTypes.DataTypes.Text),
                        IsEnabled: t.DataConversion.JSNodeParamConverter.to(!1, t.DataTypes.DataTypes.Boolean)
                    }, function(y) {
                        var T = new(l.constructor.getVariableGroupType("tradershub.FeatureFlagValueByName$getFeatureFlagValueByNameJSResult"));
                        return T.isEnabledOut = t.DataConversion.JSNodeParamConverter.from(y.IsEnabled, t.DataTypes.DataTypes.Boolean), T
                    }, {}, {})
                } finally {
                    d && d.end()
                }
            }, 1), c.value.isEnabledOut = i.value.isEnabledOut, c.value
        } finally {
            n && n.end()
        }
    }, 1)
};
u.constructor.registerVariableGroupType("tradershub.FeatureFlagValueByName$vars", [{
    name: "Name",
    attrName: "nameInLocal",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.constructor.registerVariableGroupType("tradershub.FeatureFlagValueByName$getFeatureFlagValueByNameJSResult", [{
    name: "IsEnabled",
    attrName: "isEnabledOut",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Boolean,
    defaultValue: r(function() {
        return !1
    }, "defaultValue")
}]);
u.constructor.registerVariableGroupType("tradershub.FeatureFlagValueByName$outVars", [{
    name: "IsEnabled",
    attrName: "isEnabledOut",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Boolean,
    defaultValue: r(function() {
        return !1
    }, "defaultValue")
}]);
u.clientActionProxies.featureFlagValueByName$Action = function(o) {
    return o = o === void 0 ? "" : o, l.executeActionInsideJSNode(u.default.featureFlagValueByName$Action.bind(l, t.DataConversion.JSNodeParamConverter.from(o, t.DataTypes.DataTypes.Text)), t.Controller.BaseViewController.activeScreen ? t.Controller.BaseViewController.activeScreen.callContext() : void 0, function(a) {
        return {
            IsEnabled: t.DataConversion.JSNodeParamConverter.to(a.isEnabledOut, t.DataTypes.DataTypes.Boolean)
        }
    })
};
u.fetchAccountPurposeList$Action = function(o) {
    return t.Logger.startActiveSpan("FetchAccountPurposeList", function(a) {
        return a && (a.setAttribute("code.function", "FetchAccountPurposeList"), a.setAttribute("outsystems.function.key", "2215df33-c1a8-4454-9ea1-837705090efe"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_ACTION")), t.Flow.tryFinally(function() {
            o = l.callContext(o);
            var n = new t.DataTypes.VariableHolder,
                p = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.FetchAccountPurposeList$outVars")));
            return t.Flow.executeAsyncFlow(function() {
                return l.getAccountPurposeAction$ServerAction(o).then(function(i) {
                    n.value = i
                }).then(function() {
                    p.value.accontPurposeListOut = n.value.accountPurposeListOut
                })
            }).then(function() {
                return p.value
            })
        }, function() {
            a && a.end()
        })
    }, 1)
};
u.constructor.registerVariableGroupType("tradershub.FetchAccountPurposeList$outVars", [{
    name: "AccontPurposeList",
    attrName: "accontPurposeListOut",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.RecordList,
    defaultValue: r(function() {
        return new no
    }, "defaultValue"),
    complexType: no
}]);
u.clientActionProxies.fetchAccountPurposeList$Action = function() {
    return l.executeActionInsideJSNode(u.default.fetchAccountPurposeList$Action.bind(l), t.Controller.BaseViewController.activeScreen ? t.Controller.BaseViewController.activeScreen.callContext() : void 0, function(o) {
        return {
            AccontPurposeList: o.accontPurposeListOut
        }
    })
};
u.fetchEmploymentStatusList$Action = function(o) {
    return t.Logger.startActiveSpan("FetchEmploymentStatusList", function(a) {
        return a && (a.setAttribute("code.function", "FetchEmploymentStatusList"), a.setAttribute("outsystems.function.key", "d4eb735e-8cd5-4177-8c12-5e852911ecbd"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_ACTION")), t.Flow.tryFinally(function() {
            o = l.callContext(o);
            var n = new t.DataTypes.VariableHolder,
                p = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.FetchEmploymentStatusList$outVars")));
            return t.Flow.executeAsyncFlow(function() {
                return l.getEmploymentStatusList$ServerAction(o).then(function(i) {
                    n.value = i
                }).then(function() {
                    p.value.employmentStatusListOut = n.value.employmentStatusListOut
                })
            }).then(function() {
                return p.value
            })
        }, function() {
            a && a.end()
        })
    }, 1)
};
u.constructor.registerVariableGroupType("tradershub.FetchEmploymentStatusList$outVars", [{
    name: "EmploymentStatusList",
    attrName: "employmentStatusListOut",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.RecordList,
    defaultValue: r(function() {
        return new to
    }, "defaultValue"),
    complexType: to
}]);
u.clientActionProxies.fetchEmploymentStatusList$Action = function() {
    return l.executeActionInsideJSNode(u.default.fetchEmploymentStatusList$Action.bind(l), t.Controller.BaseViewController.activeScreen ? t.Controller.BaseViewController.activeScreen.callContext() : void 0, function(o) {
        return {
            EmploymentStatusList: o.employmentStatusListOut
        }
    })
};
u.filterAvailableAccounts$Action = function(o, a, n) {
    return t.Logger.startActiveSpan("FilterAvailableAccounts", function(p) {
        p && (p.setAttribute("code.function", "FilterAvailableAccounts"), p.setAttribute("outsystems.function.key", "af8a8643-b247-47d4-a0f1-7ef4708632e4"), p.setAttribute("outsystems.function.owner.name", "tradershub"), p.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), p.setAttribute("outsystems.function.type", "CLIENT_ACTION"));
        try {
            n = l.callContext(n);
            var i = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.FilterAvailableAccounts$vars")));
            i.value.availableAccountsInLocal = o, i.value.createdAccountsInLocal = a;
            var c = new t.DataTypes.VariableHolder,
                d = new t.DataTypes.VariableHolder(new(t.Controller.BaseController.getJSONDeserializeOutputType(G))),
                y = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.FilterAvailableAccounts$outVars")));
            return c.value = t.Logger.startActiveSpan("FilterData", function(T) {
                T && (T.setAttribute("code.function", "FilterData"), T.setAttribute("outsystems.function.key", "e3add474-f258-4787-9f95-00f40e8c1e65"), T.setAttribute("outsystems.function.owner.name", "tradershub"), T.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), T.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                try {
                    return l.safeExecuteJSNode(Bm, "FilterData", "FilterAvailableAccounts", {
                        AvailableAccounts: t.DataConversion.JSNodeParamConverter.to(i.value.availableAccountsInLocal, t.DataTypes.DataTypes.Text),
                        CreatedAccounts: t.DataConversion.JSNodeParamConverter.to(i.value.createdAccountsInLocal, t.DataTypes.DataTypes.Text),
                        FilteredAvailableAccounts: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text)
                    }, function(f) {
                        var S = new(l.constructor.getVariableGroupType("tradershub.FilterAvailableAccounts$filterDataJSResult"));
                        return S.filteredAvailableAccountsOut = t.DataConversion.JSNodeParamConverter.from(f.FilteredAvailableAccounts, t.DataTypes.DataTypes.Text), S
                    }, {}, {})
                } finally {
                    T && T.end()
                }
            }, 1), d.value.dataOut = t.JSONUtils.deserializeFromJSON(c.value.filteredAvailableAccountsOut, G, !1), y.value.filteredAvailableAccountsOut = d.value.dataOut, y.value
        } finally {
            p && p.end()
        }
    }, 1)
};
u.constructor.registerVariableGroupType("tradershub.FilterAvailableAccounts$vars", [{
    name: "AvailableAccounts",
    attrName: "availableAccountsInLocal",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "CreatedAccounts",
    attrName: "createdAccountsInLocal",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.constructor.registerVariableGroupType("tradershub.FilterAvailableAccounts$filterDataJSResult", [{
    name: "FilteredAvailableAccounts",
    attrName: "filteredAvailableAccountsOut",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.constructor.registerVariableGroupType("tradershub.FilterAvailableAccounts$outVars", [{
    name: "FilteredAvailableAccounts",
    attrName: "filteredAvailableAccountsOut",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.RecordList,
    defaultValue: r(function() {
        return new G
    }, "defaultValue"),
    complexType: G
}]);
u.clientActionProxies.filterAvailableAccounts$Action = function(o, a) {
    return o = o === void 0 ? "" : o, a = a === void 0 ? "" : a, l.executeActionInsideJSNode(u.default.filterAvailableAccounts$Action.bind(l, t.DataConversion.JSNodeParamConverter.from(o, t.DataTypes.DataTypes.Text), t.DataConversion.JSNodeParamConverter.from(a, t.DataTypes.DataTypes.Text)), t.Controller.BaseViewController.activeScreen ? t.Controller.BaseViewController.activeScreen.callContext() : void 0, function(n) {
        return {
            FilteredAvailableAccounts: n.filteredAvailableAccountsOut
        }
    })
};
u.gBFeatureFlagValue$Action = function(o, a) {
    return t.Logger.startActiveSpan("GBFeatureFlagValue", function(n) {
        n && (n.setAttribute("code.function", "GBFeatureFlagValue"), n.setAttribute("outsystems.function.key", "38df811d-05d9-4ee7-9c26-fb5975787628"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_ACTION"));
        try {
            a = l.callContext(a);
            var p = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.GBFeatureFlagValue$vars")));
            p.value.featureFlagNameInLocal = o;
            var i = new t.DataTypes.VariableHolder,
                c = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.GBFeatureFlagValue$outVars")));
            return i.value = t.Logger.startActiveSpan("GetFeatureFlagValue", function(d) {
                d && (d.setAttribute("code.function", "GetFeatureFlagValue"), d.setAttribute("outsystems.function.key", "03e49048-d8cd-499d-9ff6-dd561d86ebba"), d.setAttribute("outsystems.function.owner.name", "tradershub"), d.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), d.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                try {
                    return l.safeExecuteJSNode(_m, "GetFeatureFlagValue", "GBFeatureFlagValue", {
                        FeatureFlagName: t.DataConversion.JSNodeParamConverter.to(p.value.featureFlagNameInLocal, t.DataTypes.DataTypes.Text),
                        IsEnabled: t.DataConversion.JSNodeParamConverter.to(!1, t.DataTypes.DataTypes.Boolean)
                    }, function(y) {
                        var T = new(l.constructor.getVariableGroupType("tradershub.GBFeatureFlagValue$getFeatureFlagValueJSResult"));
                        return T.isEnabledOut = t.DataConversion.JSNodeParamConverter.from(y.IsEnabled, t.DataTypes.DataTypes.Boolean), T
                    }, {}, {})
                } finally {
                    d && d.end()
                }
            }, 1), c.value.isEnabledOut = i.value.isEnabledOut, c.value
        } finally {
            n && n.end()
        }
    }, 1)
};
u.constructor.registerVariableGroupType("tradershub.GBFeatureFlagValue$vars", [{
    name: "FeatureFlagName",
    attrName: "featureFlagNameInLocal",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.constructor.registerVariableGroupType("tradershub.GBFeatureFlagValue$getFeatureFlagValueJSResult", [{
    name: "IsEnabled",
    attrName: "isEnabledOut",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Boolean,
    defaultValue: r(function() {
        return !1
    }, "defaultValue")
}]);
u.constructor.registerVariableGroupType("tradershub.GBFeatureFlagValue$outVars", [{
    name: "IsEnabled",
    attrName: "isEnabledOut",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Boolean,
    defaultValue: r(function() {
        return !1
    }, "defaultValue")
}]);
u.clientActionProxies.gBFeatureFlagValue$Action = function(o) {
    return o = o === void 0 ? "" : o, l.executeActionInsideJSNode(u.default.gBFeatureFlagValue$Action.bind(l, t.DataConversion.JSNodeParamConverter.from(o, t.DataTypes.DataTypes.Text)), t.Controller.BaseViewController.activeScreen ? t.Controller.BaseViewController.activeScreen.callContext() : void 0, function(a) {
        return {
            IsEnabled: t.DataConversion.JSNodeParamConverter.to(a.isEnabledOut, t.DataTypes.DataTypes.Boolean)
        }
    })
};
u.generateAvailableAccountsPayload$Action = function(o, a) {
    return t.Logger.startActiveSpan("GenerateAvailableAccountsPayload", function(n) {
        n && (n.setAttribute("code.function", "GenerateAvailableAccountsPayload"), n.setAttribute("outsystems.function.key", "c66fb5d7-1a24-474f-aebe-aeb36ab41bf8"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_ACTION"));
        try {
            a = l.callContext(a);
            var p = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.GenerateAvailableAccountsPayload$vars")));
            p.value.platformInLocal = o;
            var i = new t.DataTypes.VariableHolder,
                c = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.GenerateAvailableAccountsPayload$outVars")));
            return i.value = t.Logger.startActiveSpan("CreatePayload", function(d) {
                d && (d.setAttribute("code.function", "CreatePayload"), d.setAttribute("outsystems.function.key", "4a5ca629-ee6b-4a8a-9db4-6d261ea1ba27"), d.setAttribute("outsystems.function.owner.name", "tradershub"), d.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), d.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                try {
                    return l.safeExecuteJSNode(km, "CreatePayload", "GenerateAvailableAccountsPayload", {
                        CountryCode: t.DataConversion.JSNodeParamConverter.to(g.getClientCountry(), t.DataTypes.DataTypes.Text),
                        Platform: t.DataConversion.JSNodeParamConverter.to(p.value.platformInLocal, t.DataTypes.DataTypes.Text),
                        HasToken: t.DataConversion.JSNodeParamConverter.to(g.getAuthToken() !== t.BuiltinFunctions.nullTextIdentifier(), t.DataTypes.DataTypes.Boolean),
                        Payload: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text)
                    }, function(y) {
                        var T = new(l.constructor.getVariableGroupType("tradershub.GenerateAvailableAccountsPayload$createPayloadJSResult"));
                        return T.payloadOut = t.DataConversion.JSNodeParamConverter.from(y.Payload, t.DataTypes.DataTypes.Text), T
                    }, {}, {})
                } finally {
                    d && d.end()
                }
            }, 1), c.value.payloadOut = i.value.payloadOut, c.value
        } finally {
            n && n.end()
        }
    }, 1)
};
u.constructor.registerVariableGroupType("tradershub.GenerateAvailableAccountsPayload$vars", [{
    name: "Platform",
    attrName: "platformInLocal",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.constructor.registerVariableGroupType("tradershub.GenerateAvailableAccountsPayload$createPayloadJSResult", [{
    name: "Payload",
    attrName: "payloadOut",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.constructor.registerVariableGroupType("tradershub.GenerateAvailableAccountsPayload$outVars", [{
    name: "Payload",
    attrName: "payloadOut",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.clientActionProxies.generateAvailableAccountsPayload$Action = function(o) {
    return o = o === void 0 ? "" : o, l.executeActionInsideJSNode(u.default.generateAvailableAccountsPayload$Action.bind(l, t.DataConversion.JSNodeParamConverter.from(o, t.DataTypes.DataTypes.Text)), t.Controller.BaseViewController.activeScreen ? t.Controller.BaseViewController.activeScreen.callContext() : void 0, function(a) {
        return {
            Payload: t.DataConversion.JSNodeParamConverter.to(a.payloadOut, t.DataTypes.DataTypes.Text)
        }
    })
};
u.getAccountByLoginId$Action = function(o, a) {
    return t.Logger.startActiveSpan("GetAccountByLoginId", function(n) {
        n && (n.setAttribute("code.function", "GetAccountByLoginId"), n.setAttribute("outsystems.function.key", "53b4b606-34d1-4f46-9cc9-e8784d97bd83"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_ACTION"));
        try {
            a = l.callContext(a);
            var p = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.GetAccountByLoginId$vars")));
            p.value.loginIdInLocal = o;
            var i = new t.DataTypes.VariableHolder,
                c = new t.DataTypes.VariableHolder(new(t.Controller.BaseController.getJSONDeserializeOutputType(zu))),
                d = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.GetAccountByLoginId$outVars")));
            return i.value = t.Logger.startActiveSpan("GetAccount", function(y) {
                y && (y.setAttribute("code.function", "GetAccount"), y.setAttribute("outsystems.function.key", "6fba624e-1eb7-4ec1-8727-ac2f7d357432"), y.setAttribute("outsystems.function.owner.name", "tradershub"), y.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), y.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                try {
                    return l.safeExecuteJSNode(Em, "GetAccount", "GetAccountByLoginId", {
                        LoginId: t.DataConversion.JSNodeParamConverter.to(p.value.loginIdInLocal, t.DataTypes.DataTypes.Text),
                        AuthToken: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text),
                        Account: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text)
                    }, function(T) {
                        var f = new(l.constructor.getVariableGroupType("tradershub.GetAccountByLoginId$getAccountJSResult"));
                        return f.authTokenOut = t.DataConversion.JSNodeParamConverter.from(T.AuthToken, t.DataTypes.DataTypes.Text), f.accountOut = t.DataConversion.JSNodeParamConverter.from(T.Account, t.DataTypes.DataTypes.Text), f
                    }, {}, {})
                } finally {
                    y && y.end()
                }
            }, 1), c.value.dataOut = t.JSONUtils.deserializeFromJSON(i.value.accountOut, zu, !1), d.value.tokenOut = i.value.authTokenOut, d.value.accountOut = c.value.dataOut, d.value
        } finally {
            n && n.end()
        }
    }, 1)
};
u.constructor.registerVariableGroupType("tradershub.GetAccountByLoginId$vars", [{
    name: "LoginId",
    attrName: "loginIdInLocal",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.constructor.registerVariableGroupType("tradershub.GetAccountByLoginId$getAccountJSResult", [{
    name: "AuthToken",
    attrName: "authTokenOut",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "Account",
    attrName: "accountOut",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.constructor.registerVariableGroupType("tradershub.GetAccountByLoginId$outVars", [{
    name: "Token",
    attrName: "tokenOut",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "Account",
    attrName: "accountOut",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new zu
    }, "defaultValue"),
    complexType: zu
}]);
u.clientActionProxies.getAccountByLoginId$Action = function(o) {
    return o = o === void 0 ? "" : o, l.executeActionInsideJSNode(u.default.getAccountByLoginId$Action.bind(l, t.DataConversion.JSNodeParamConverter.from(o, t.DataTypes.DataTypes.Text)), t.Controller.BaseViewController.activeScreen ? t.Controller.BaseViewController.activeScreen.callContext() : void 0, function(a) {
        return {
            Token: t.DataConversion.JSNodeParamConverter.to(a.tokenOut, t.DataTypes.DataTypes.Text),
            Account: a.accountOut
        }
    })
};
u.getAccountStatus2$Action = function(o) {
    return t.Logger.startActiveSpan("GetAccountStatus2", function(a) {
        return a && (a.setAttribute("code.function", "GetAccountStatus2"), a.setAttribute("outsystems.function.key", "a1fed692-cdf6-4538-b0fb-4b9ffd00d9df"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_ACTION")), t.Flow.tryFinally(function() {
            o = l.callContext(o);
            var n = new t.DataTypes.VariableHolder,
                p = new t.DataTypes.VariableHolder(new(t.Controller.BaseController.getJSONDeserializeOutputType(q))),
                i = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.GetAccountStatus2$outVars")));
            return t.Flow.executeAsyncFlow(function() {
                return u.default.derivApiSendMessage$Action("", "get_account_status", !1, o).then(function(c) {
                    n.value = c
                }).then(function() {
                    n.value.isErrorOut || (p.value.dataOut = t.JSONUtils.deserializeFromJSON(n.value.responseOut, q, !1), i.value.responseOut = p.value.dataOut)
                })
            }).then(function() {
                return i.value
            })
        }, function() {
            a && a.end()
        })
    }, 1)
};
u.constructor.registerVariableGroupType("tradershub.GetAccountStatus2$outVars", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new q
    }, "defaultValue"),
    complexType: q
}]);
u.clientActionProxies.getAccountStatus2$Action = function() {
    return l.executeActionInsideJSNode(u.default.getAccountStatus2$Action.bind(l), t.Controller.BaseViewController.activeScreen ? t.Controller.BaseViewController.activeScreen.callContext() : void 0, function(o) {
        return {
            Response: o.responseOut
        }
    })
};
u.getAllAccountsBalance$Action = function(o) {
    return t.Logger.startActiveSpan("GetAllAccountsBalance", function(a) {
        return a && (a.setAttribute("code.function", "GetAllAccountsBalance"), a.setAttribute("outsystems.function.key", "7d0e824c-fff7-4dc4-9306-391e1d97d3b0"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_ACTION")), t.Flow.tryFinally(function() {
            o = l.callContext(o);
            var n = new t.DataTypes.VariableHolder,
                p = new t.DataTypes.VariableHolder,
                i = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.GetAllAccountsBalance$outVars")));
            return t.Flow.executeAsyncFlow(function() {
                return p.value = t.Logger.startActiveSpan("Payload", function(c) {
                    c && (c.setAttribute("code.function", "Payload"), c.setAttribute("outsystems.function.key", "e7c0b57e-8444-4bbd-837a-ca9d046b7813"), c.setAttribute("outsystems.function.owner.name", "tradershub"), c.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), c.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                    try {
                        return l.safeExecuteJSNode(v4, "Payload", "GetAllAccountsBalance", {
                            Payload: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text)
                        }, function(d) {
                            var y = new(l.constructor.getVariableGroupType("tradershub.GetAllAccountsBalance$payloadJSResult"));
                            return y.payloadOut = t.DataConversion.JSNodeParamConverter.from(d.Payload, t.DataTypes.DataTypes.Text), y
                        }, {}, {})
                    } finally {
                        c && c.end()
                    }
                }, 1), u.default.derivApiSendMessage$Action(p.value.payloadOut, "balance", !1, o).then(function(c) {
                    n.value = c
                }).then(function() {
                    n.value.isErrorOut || (i.value.responseOut = n.value.responseOut)
                })
            }).then(function() {
                return i.value
            })
        }, function() {
            a && a.end()
        })
    }, 1)
};
u.constructor.registerVariableGroupType("tradershub.GetAllAccountsBalance$payloadJSResult", [{
    name: "Payload",
    attrName: "payloadOut",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.constructor.registerVariableGroupType("tradershub.GetAllAccountsBalance$outVars", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.clientActionProxies.getAllAccountsBalance$Action = function() {
    return l.executeActionInsideJSNode(u.default.getAllAccountsBalance$Action.bind(l), t.Controller.BaseViewController.activeScreen ? t.Controller.BaseViewController.activeScreen.callContext() : void 0, function(o) {
        return {
            Response: t.DataConversion.JSNodeParamConverter.to(o.responseOut, t.DataTypes.DataTypes.Text)
        }
    })
};
u.getAvailableAccounts$Action = function(o) {
    return t.Logger.startActiveSpan("GetAvailableAccounts", function(a) {
        return a && (a.setAttribute("code.function", "GetAvailableAccounts"), a.setAttribute("outsystems.function.key", "b0e44dc8-bedd-4dbf-9abc-ebb884f9a21a"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_ACTION")), t.Flow.tryFinally(function() {
            o = l.callContext(o);
            var n = new t.DataTypes.VariableHolder,
                p = new t.DataTypes.VariableHolder,
                i = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.GetAvailableAccounts$outVars")));
            return t.Flow.executeAsyncFlow(function() {
                return p.value = t.Logger.startActiveSpan("AvailableAccountsPayload", function(c) {
                    c && (c.setAttribute("code.function", "AvailableAccountsPayload"), c.setAttribute("outsystems.function.key", "84c39bfe-f9d1-43e1-a888-354056cc6cd8"), c.setAttribute("outsystems.function.owner.name", "tradershub"), c.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), c.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                    try {
                        return l.safeExecuteJSNode(R4, "AvailableAccountsPayload", "GetAvailableAccounts", {
                            Payload: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text)
                        }, function(d) {
                            var y = new(l.constructor.getVariableGroupType("tradershub.GetAvailableAccounts$availableAccountsPayloadJSResult"));
                            return y.payloadOut = t.DataConversion.JSNodeParamConverter.from(d.Payload, t.DataTypes.DataTypes.Text), y
                        }, {}, {})
                    } finally {
                        c && c.end()
                    }
                }, 1), u.default.derivApiSendMessage$Action(p.value.payloadOut, "available_accounts", !0, o).then(function(c) {
                    n.value = c
                }).then(function() {
                    i.value.responseOut = n.value.responseOut, i.value.errorMessageOut = n.value.errorMessageOut, i.value.errorCodeOut = n.value.errorCodeOut, i.value.isErrorOut = n.value.isErrorOut
                })
            }).then(function() {
                return i.value
            })
        }, function() {
            a && a.end()
        })
    }, 1)
};
u.constructor.registerVariableGroupType("tradershub.GetAvailableAccounts$availableAccountsPayloadJSResult", [{
    name: "Payload",
    attrName: "payloadOut",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.constructor.registerVariableGroupType("tradershub.GetAvailableAccounts$outVars", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "IsError",
    attrName: "isErrorOut",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Boolean,
    defaultValue: r(function() {
        return !1
    }, "defaultValue")
}, {
    name: "ErrorMessage",
    attrName: "errorMessageOut",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "ErrorCode",
    attrName: "errorCodeOut",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.clientActionProxies.getAvailableAccounts$Action = function() {
    return l.executeActionInsideJSNode(u.default.getAvailableAccounts$Action.bind(l), t.Controller.BaseViewController.activeScreen ? t.Controller.BaseViewController.activeScreen.callContext() : void 0, function(o) {
        return {
            Response: t.DataConversion.JSNodeParamConverter.to(o.responseOut, t.DataTypes.DataTypes.Text),
            IsError: t.DataConversion.JSNodeParamConverter.to(o.isErrorOut, t.DataTypes.DataTypes.Boolean),
            ErrorMessage: t.DataConversion.JSNodeParamConverter.to(o.errorMessageOut, t.DataTypes.DataTypes.Text),
            ErrorCode: t.DataConversion.JSNodeParamConverter.to(o.errorCodeOut, t.DataTypes.DataTypes.Text)
        }
    })
};
u.getAvailableWallets$Action = function(o) {
    return t.Logger.startActiveSpan("GetAvailableWallets", function(a) {
        return a && (a.setAttribute("code.function", "GetAvailableWallets"), a.setAttribute("outsystems.function.key", "7cb5f9a5-259d-4a29-b89e-ca4aa3a7303f"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_ACTION")), t.Flow.tryFinally(function() {
            o = l.callContext(o);
            var n = new t.DataTypes.VariableHolder,
                p = new t.DataTypes.VariableHolder,
                i = new t.DataTypes.VariableHolder(new(t.Controller.BaseController.getJSONDeserializeOutputType(Zu))),
                c = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.GetAvailableWallets$outVars")));
            return t.Flow.executeAsyncFlow(function() {
                return p.value = t.Logger.startActiveSpan("Payload", function(d) {
                    d && (d.setAttribute("code.function", "Payload"), d.setAttribute("outsystems.function.key", "528ae6ff-1bbe-4a87-8c91-bbb0217a2c78"), d.setAttribute("outsystems.function.owner.name", "tradershub"), d.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), d.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                    try {
                        return l.safeExecuteJSNode(C4, "Payload", "GetAvailableWallets", {
                            Payload: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text)
                        }, function(y) {
                            var T = new(l.constructor.getVariableGroupType("tradershub.GetAvailableWallets$payloadJSResult"));
                            return T.payloadOut = t.DataConversion.JSNodeParamConverter.from(y.Payload, t.DataTypes.DataTypes.Text), T
                        }, {}, {})
                    } finally {
                        d && d.end()
                    }
                }, 1), u.default.derivApiSendMessage$Action(p.value.payloadOut, "available_accounts", !0, o).then(function(d) {
                    n.value = d
                }).then(function() {
                    n.value.isErrorOut || (i.value.dataOut = t.JSONUtils.deserializeFromJSON(n.value.responseOut, Zu, !1), c.value.responseOut = i.value.dataOut)
                })
            }).then(function() {
                return c.value
            })
        }, function() {
            a && a.end()
        })
    }, 1)
};
u.constructor.registerVariableGroupType("tradershub.GetAvailableWallets$payloadJSResult", [{
    name: "Payload",
    attrName: "payloadOut",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.constructor.registerVariableGroupType("tradershub.GetAvailableWallets$outVars", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new Zu
    }, "defaultValue"),
    complexType: Zu
}]);
u.clientActionProxies.getAvailableWallets$Action = function() {
    return l.executeActionInsideJSNode(u.default.getAvailableWallets$Action.bind(l), t.Controller.BaseViewController.activeScreen ? t.Controller.BaseViewController.activeScreen.callContext() : void 0, function(o) {
        return {
            Response: o.responseOut
        }
    })
};
u.getBackOfficeLocks$Action = function(o) {
    return t.Logger.startActiveSpan("GetBackOfficeLocks", function(a) {
        return a && (a.setAttribute("code.function", "GetBackOfficeLocks"), a.setAttribute("outsystems.function.key", "58aaf94a-cdef-4a0d-b817-77347dbaea81"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_ACTION")), t.Flow.tryFinally(function() {
            o = l.callContext(o);
            var n = new t.DataTypes.VariableHolder,
                p = new t.DataTypes.VariableHolder,
                i = new t.DataTypes.VariableHolder(new(t.Controller.BaseController.getJSONDeserializeOutputType(qu))),
                c = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.GetBackOfficeLocks$outVars")));
            return t.Flow.executeAsyncFlow(function() {
                return u.default.derivApiSendMessage$Action("", "get_account_status", !0, o).then(function(d) {
                    n.value = d
                }).then(function() {
                    n.value.isErrorOut || (p.value = t.Logger.startActiveSpan("JavaScript1", function(d) {
                        d && (d.setAttribute("code.function", "JavaScript1"), d.setAttribute("outsystems.function.key", "44eb25f7-7aee-4337-bad7-4ab403f3ae6f"), d.setAttribute("outsystems.function.owner.name", "tradershub"), d.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), d.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                        try {
                            return l.safeExecuteJSNode(h4, "JavaScript1", "GetBackOfficeLocks", {
                                Data: t.DataConversion.JSNodeParamConverter.to(n.value.responseOut, t.DataTypes.DataTypes.Text),
                                Response: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text)
                            }, function(y) {
                                var T = new(l.constructor.getVariableGroupType("tradershub.GetBackOfficeLocks$javaScript1JSResult"));
                                return T.responseOut = t.DataConversion.JSNodeParamConverter.from(y.Response, t.DataTypes.DataTypes.Text), T
                            }, {}, {})
                        } finally {
                            d && d.end()
                        }
                    }, 1), i.value.dataOut = t.JSONUtils.deserializeFromJSON(p.value.responseOut, qu, !1), c.value.responseOut = i.value.dataOut)
                })
            }).then(function() {
                return c.value
            })
        }, function() {
            a && a.end()
        })
    }, 1)
};
u.constructor.registerVariableGroupType("tradershub.GetBackOfficeLocks$javaScript1JSResult", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.constructor.registerVariableGroupType("tradershub.GetBackOfficeLocks$outVars", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new qu
    }, "defaultValue"),
    complexType: qu
}]);
u.clientActionProxies.getBackOfficeLocks$Action = function() {
    return l.executeActionInsideJSNode(u.default.getBackOfficeLocks$Action.bind(l), t.Controller.BaseViewController.activeScreen ? t.Controller.BaseViewController.activeScreen.callContext() : void 0, function(o) {
        return {
            Response: o.responseOut
        }
    })
};
u.getCurrencyIcon$Action = function(o, a, n) {
    return t.Logger.startActiveSpan("GetCurrencyIcon", function(p) {
        p && (p.setAttribute("code.function", "GetCurrencyIcon"), p.setAttribute("outsystems.function.key", "20c23a84-49b2-448f-8983-9ea514673572"), p.setAttribute("outsystems.function.owner.name", "tradershub"), p.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), p.setAttribute("outsystems.function.type", "CLIENT_ACTION"));
        try {
            n = l.callContext(n);
            var i = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.GetCurrencyIcon$vars")));
            i.value.currencyCodeInLocal = o, i.value.currenciesListInLocal = a;
            var c = new t.DataTypes.VariableHolder,
                d = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.GetCurrencyIcon$outVars")));
            return c.value = t.Logger.startActiveSpan("FilterCurrenciesList", function(y) {
                y && (y.setAttribute("code.function", "FilterCurrenciesList"), y.setAttribute("outsystems.function.key", "af330295-3514-4a61-86db-58380d2430d7"), y.setAttribute("outsystems.function.owner.name", "tradershub"), y.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), y.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                try {
                    return l.safeExecuteJSNode(w4, "FilterCurrenciesList", "GetCurrencyIcon", {
                        CurrencyCode: t.DataConversion.JSNodeParamConverter.to(i.value.currencyCodeInLocal, t.DataTypes.DataTypes.Text),
                        CurrenciesList: t.DataConversion.JSNodeParamConverter.to(i.value.currenciesListInLocal, t.DataTypes.DataTypes.Text),
                        Icon: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text)
                    }, function(T) {
                        var f = new(l.constructor.getVariableGroupType("tradershub.GetCurrencyIcon$filterCurrenciesListJSResult"));
                        return f.iconOut = t.DataConversion.JSNodeParamConverter.from(T.Icon, t.DataTypes.DataTypes.Text), f
                    }, {}, {})
                } finally {
                    y && y.end()
                }
            }, 1), d.value.currencyIconOut = c.value.iconOut, d.value
        } finally {
            p && p.end()
        }
    }, 1)
};
u.constructor.registerVariableGroupType("tradershub.GetCurrencyIcon$vars", [{
    name: "CurrencyCode",
    attrName: "currencyCodeInLocal",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "CurrenciesList",
    attrName: "currenciesListInLocal",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.constructor.registerVariableGroupType("tradershub.GetCurrencyIcon$filterCurrenciesListJSResult", [{
    name: "Icon",
    attrName: "iconOut",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.constructor.registerVariableGroupType("tradershub.GetCurrencyIcon$outVars", [{
    name: "CurrencyIcon",
    attrName: "currencyIconOut",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.clientActionProxies.getCurrencyIcon$Action = function(o, a) {
    return o = o === void 0 ? "" : o, a = a === void 0 ? "" : a, l.executeActionInsideJSNode(u.default.getCurrencyIcon$Action.bind(l, t.DataConversion.JSNodeParamConverter.from(o, t.DataTypes.DataTypes.Text), t.DataConversion.JSNodeParamConverter.from(a, t.DataTypes.DataTypes.Text)), t.Controller.BaseViewController.activeScreen ? t.Controller.BaseViewController.activeScreen.callContext() : void 0, function(n) {
        return {
            CurrencyIcon: t.DataConversion.JSNodeParamConverter.to(n.currencyIconOut, t.DataTypes.DataTypes.Text)
        }
    })
};
u.getSocialLoginRedirectURL$Action = function(o, a) {
    return t.Logger.startActiveSpan("GetSocialLoginRedirectURL", function(n) {
        n && (n.setAttribute("code.function", "GetSocialLoginRedirectURL"), n.setAttribute("outsystems.function.key", "1d5c0f88-75f1-4fea-ac30-629b7e38d258"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_ACTION"));
        try {
            a = l.callContext(a);
            var p = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.GetSocialLoginRedirectURL$vars")));
            p.value.providerInLocal = o;
            var i = new t.DataTypes.VariableHolder,
                c = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.GetSocialLoginRedirectURL$outVars")));
            return i.value = t.Logger.startActiveSpan("AffiliateUTM", function(d) {
                d && (d.setAttribute("code.function", "AffiliateUTM"), d.setAttribute("outsystems.function.key", "499fe2f1-e396-471e-8d66-17eaeb41c84b"), d.setAttribute("outsystems.function.owner.name", "tradershub"), d.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), d.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                try {
                    return l.safeExecuteJSNode(I4, "AffiliateUTM", "GetSocialLoginRedirectURL", {
                        ServerURL: t.DataConversion.JSNodeParamConverter.to(g.getURL(), t.DataTypes.DataTypes.Text),
                        Provider: t.DataConversion.JSNodeParamConverter.to(p.value.providerInLocal, t.DataTypes.DataTypes.Text),
                        AppId: t.DataConversion.JSNodeParamConverter.to(g.getAppId(), t.DataTypes.DataTypes.Text),
                        RedirectURL: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text)
                    }, function(y) {
                        var T = new(l.constructor.getVariableGroupType("tradershub.GetSocialLoginRedirectURL$affiliateUTMJSResult"));
                        return T.redirectURLOut = t.DataConversion.JSNodeParamConverter.from(y.RedirectURL, t.DataTypes.DataTypes.Text), T
                    }, {}, {})
                } finally {
                    d && d.end()
                }
            }, 1), c.value.redirectURLOut = i.value.redirectURLOut, c.value
        } finally {
            n && n.end()
        }
    }, 1)
};
u.constructor.registerVariableGroupType("tradershub.GetSocialLoginRedirectURL$vars", [{
    name: "Provider",
    attrName: "providerInLocal",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.constructor.registerVariableGroupType("tradershub.GetSocialLoginRedirectURL$affiliateUTMJSResult", [{
    name: "RedirectURL",
    attrName: "redirectURLOut",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.constructor.registerVariableGroupType("tradershub.GetSocialLoginRedirectURL$outVars", [{
    name: "RedirectURL",
    attrName: "redirectURLOut",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.clientActionProxies.getSocialLoginRedirectURL$Action = function(o) {
    return o = o === void 0 ? "" : o, l.executeActionInsideJSNode(u.default.getSocialLoginRedirectURL$Action.bind(l, t.DataConversion.JSNodeParamConverter.from(o, t.DataTypes.DataTypes.Text)), t.Controller.BaseViewController.activeScreen ? t.Controller.BaseViewController.activeScreen.callContext() : void 0, function(a) {
        return {
            RedirectURL: t.DataConversion.JSNodeParamConverter.to(a.redirectURLOut, t.DataTypes.DataTypes.Text)
        }
    })
};
u.getWalletsList$Action = function(o) {
    return t.Logger.startActiveSpan("GetWalletsList", function(a) {
        return a && (a.setAttribute("code.function", "GetWalletsList"), a.setAttribute("outsystems.function.key", "a0e42294-c9ce-4d9e-a0e2-5646f5105a66"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_ACTION")), t.Flow.tryFinally(function() {
            o = l.callContext(o);
            var n = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.GetWalletsList$vars"))),
                p = new t.DataTypes.VariableHolder,
                i = new t.DataTypes.VariableHolder,
                c = new t.DataTypes.VariableHolder,
                d = new t.DataTypes.VariableHolder,
                y = new t.DataTypes.VariableHolder,
                T = new t.DataTypes.VariableHolder,
                f = new t.DataTypes.VariableHolder(new t.DataTypes.JSONSerializeOutputType),
                S = new t.DataTypes.VariableHolder(new t.DataTypes.JSONSerializeOutputType),
                A = new t.DataTypes.VariableHolder(new(t.Controller.BaseController.getJSONDeserializeOutputType(ye))),
                b = new t.DataTypes.VariableHolder(new(t.Controller.BaseController.getJSONDeserializeOutputType(ee))),
                x = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.GetWalletsList$outVars")));
            return t.Flow.executeAsyncFlow(function() {
                return A.value.dataOut = t.JSONUtils.deserializeFromJSON(g.getLinkedTo(), ye, !1), A.value.dataOut.isEmpty ? (T.value = t.Logger.startActiveSpan("GetFirstWalletIndex", function(v) {
                    v && (v.setAttribute("code.function", "GetFirstWalletIndex"), v.setAttribute("outsystems.function.key", "0453839b-e7d3-4d49-b060-a7c89898df85"), v.setAttribute("outsystems.function.owner.name", "tradershub"), v.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), v.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                    try {
                        return l.safeExecuteJSNode(N4, "GetFirstWalletIndex", "GetWalletsList", {
                            ActiveWalletLoginId: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text)
                        }, function(R) {
                            var I = new(l.constructor.getVariableGroupType("tradershub.GetWalletsList$getFirstWalletIndexJSResult"));
                            return I.activeWalletLoginIdOut = t.DataConversion.JSNodeParamConverter.from(R.ActiveWalletLoginId, t.DataTypes.DataTypes.Text), I
                        }, {}, {})
                    } finally {
                        v && v.end()
                    }
                }, 1), n.value.activeWalletLoginIdVar = T.value.activeWalletLoginIdOut) : n.value.activeWalletLoginIdVar = A.value.dataOut.getCurrent(o.iterationContext).loginidAttr, u.default.setTokenByLoginId$Action(n.value.activeWalletLoginIdVar, o).then(function(v) {
                    i.value = v
                }).then(function() {
                    return u.default.getAvailableWallets$Action(o).then(function(v) {
                        c.value = v
                    })
                }).then(function() {
                    return p.value = t.SystemActions.listFilter(i.value.responseOut.authorizeAttr.account_listAttr, function(v) {
                        return v.account_categoryAttr === "wallet" && v.is_virtualAttr !== 1
                    }, o), f.value.jSONOut = t.JSONUtils.serializeToJSON(p.value.filteredListOut, !1, !1), S.value.jSONOut = t.JSONUtils.serializeToJSON(c.value.responseOut, !1, !1), u.default.getAllAccountsBalance$Action(o).then(function(v) {
                        d.value = v
                    })
                }).then(function() {
                    y.value = t.Logger.startActiveSpan("WalletLists", function(v) {
                        v && (v.setAttribute("code.function", "WalletLists"), v.setAttribute("outsystems.function.key", "0295ffbb-256a-4aa7-bc55-ec4443551b0f"), v.setAttribute("outsystems.function.owner.name", "tradershub"), v.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), v.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                        try {
                            return l.safeExecuteJSNode(P4, "WalletLists", "GetWalletsList", {
                                Balance: t.DataConversion.JSNodeParamConverter.to(d.value.responseOut, t.DataTypes.DataTypes.Text),
                                AvailableWallets: t.DataConversion.JSNodeParamConverter.to(S.value.jSONOut, t.DataTypes.DataTypes.Text),
                                LoginId: t.DataConversion.JSNodeParamConverter.to(n.value.activeWalletLoginIdVar, t.DataTypes.DataTypes.Text),
                                AccountLists: t.DataConversion.JSNodeParamConverter.to(f.value.jSONOut, t.DataTypes.DataTypes.Text),
                                WalletList: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text)
                            }, function(R) {
                                var I = new(l.constructor.getVariableGroupType("tradershub.GetWalletsList$walletListsJSResult"));
                                return I.walletListOut = t.DataConversion.JSNodeParamConverter.from(R.WalletList, t.DataTypes.DataTypes.Text), I
                            }, {
                                FormatMoney: Yf.clientActionProxies.formatMoney$Action
                            }, {})
                        } finally {
                            v && v.end()
                        }
                    }, 1), b.value.dataOut = t.JSONUtils.deserializeFromJSON(y.value.walletListOut, ee, !1), x.value.walletsListOut = b.value.dataOut
                })
            }).then(function() {
                return x.value
            })
        }, function() {
            a && a.end()
        })
    }, 1)
};
u.constructor.registerVariableGroupType("tradershub.GetWalletsList$vars", [{
    name: "ActiveWalletLoginId",
    attrName: "activeWalletLoginIdVar",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.constructor.registerVariableGroupType("tradershub.GetWalletsList$walletListsJSResult", [{
    name: "WalletList",
    attrName: "walletListOut",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.constructor.registerVariableGroupType("tradershub.GetWalletsList$getFirstWalletIndexJSResult", [{
    name: "ActiveWalletLoginId",
    attrName: "activeWalletLoginIdOut",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.constructor.registerVariableGroupType("tradershub.GetWalletsList$outVars", [{
    name: "WalletsList",
    attrName: "walletsListOut",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.RecordList,
    defaultValue: r(function() {
        return new ee
    }, "defaultValue"),
    complexType: ee
}]);
u.clientActionProxies.getWalletsList$Action = function() {
    return l.executeActionInsideJSNode(u.default.getWalletsList$Action.bind(l), t.Controller.BaseViewController.activeScreen ? t.Controller.BaseViewController.activeScreen.callContext() : void 0, function(o) {
        return {
            WalletsList: o.walletsListOut
        }
    })
};
u.getWalletsListV2$Action = function(o, a) {
    return t.Logger.startActiveSpan("GetWalletsListV2", function(n) {
        return n && (n.setAttribute("code.function", "GetWalletsListV2"), n.setAttribute("outsystems.function.key", "9bd3b431-0c27-45f0-b1dd-32da0957adaf"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_ACTION")), t.Flow.tryFinally(function() {
            a = l.callContext(a);
            var p = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.GetWalletsListV2$vars")));
            p.value.linkedToInLocal = o;
            var i = new t.DataTypes.VariableHolder,
                c = new t.DataTypes.VariableHolder,
                d = new t.DataTypes.VariableHolder,
                y = new t.DataTypes.VariableHolder,
                T = new t.DataTypes.VariableHolder,
                f = new t.DataTypes.VariableHolder,
                S = new t.DataTypes.VariableHolder(new t.DataTypes.JSONSerializeOutputType),
                A = new t.DataTypes.VariableHolder(new t.DataTypes.JSONSerializeOutputType),
                b = new t.DataTypes.VariableHolder(new(t.Controller.BaseController.getJSONDeserializeOutputType(ee))),
                x = new t.DataTypes.VariableHolder(new(t.Controller.BaseController.getJSONDeserializeOutputType(ye))),
                v = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.GetWalletsListV2$outVars")));
            return t.Flow.executeAsyncFlow(function() {
                return x.value.dataOut = t.JSONUtils.deserializeFromJSON(p.value.linkedToInLocal, ye, !1), x.value.dataOut.isEmpty ? (f.value = t.Logger.startActiveSpan("GetFirstWalletIndex", function(R) {
                    R && (R.setAttribute("code.function", "GetFirstWalletIndex"), R.setAttribute("outsystems.function.key", "c4e26e6d-6dfa-4ba5-820e-deddead75fdd"), R.setAttribute("outsystems.function.owner.name", "tradershub"), R.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), R.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                    try {
                        return l.safeExecuteJSNode(L4, "GetFirstWalletIndex", "GetWalletsListV2", {
                            ActiveWalletLoginId: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text)
                        }, function(I) {
                            var L = new(l.constructor.getVariableGroupType("tradershub.GetWalletsListV2$getFirstWalletIndexJSResult"));
                            return L.activeWalletLoginIdOut = t.DataConversion.JSNodeParamConverter.from(I.ActiveWalletLoginId, t.DataTypes.DataTypes.Text), L
                        }, {}, {})
                    } finally {
                        R && R.end()
                    }
                }, 1), p.value.activeWalletLoginIdVar = f.value.activeWalletLoginIdOut) : p.value.activeWalletLoginIdVar = x.value.dataOut.getCurrent(a.iterationContext).loginidAttr, u.default.setTokenByLoginId$Action(p.value.activeWalletLoginIdVar, a).then(function(R) {
                    y.value = R
                }).then(function() {
                    return u.default.getAvailableWallets$Action(a).then(function(R) {
                        d.value = R
                    })
                }).then(function() {
                    return c.value = t.SystemActions.listFilter(y.value.responseOut.authorizeAttr.account_listAttr, function(R) {
                        return R.account_categoryAttr === "wallet" && R.is_virtualAttr !== 1
                    }, a), S.value.jSONOut = t.JSONUtils.serializeToJSON(c.value.filteredListOut, !1, !1), A.value.jSONOut = t.JSONUtils.serializeToJSON(d.value.responseOut, !1, !1), u.default.getAllAccountsBalance$Action(a).then(function(R) {
                        i.value = R
                    })
                }).then(function() {
                    T.value = t.Logger.startActiveSpan("WalletLists", function(R) {
                        R && (R.setAttribute("code.function", "WalletLists"), R.setAttribute("outsystems.function.key", "284dea2f-d956-41ca-a050-b431b8b733c1"), R.setAttribute("outsystems.function.owner.name", "tradershub"), R.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), R.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                        try {
                            return l.safeExecuteJSNode(V4, "WalletLists", "GetWalletsListV2", {
                                LoginId: t.DataConversion.JSNodeParamConverter.to(p.value.activeWalletLoginIdVar, t.DataTypes.DataTypes.Text),
                                AccountLists: t.DataConversion.JSNodeParamConverter.to(S.value.jSONOut, t.DataTypes.DataTypes.Text),
                                Balance: t.DataConversion.JSNodeParamConverter.to(i.value.responseOut, t.DataTypes.DataTypes.Text),
                                AvailableWallets: t.DataConversion.JSNodeParamConverter.to(A.value.jSONOut, t.DataTypes.DataTypes.Text),
                                WalletList: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text)
                            }, function(I) {
                                var L = new(l.constructor.getVariableGroupType("tradershub.GetWalletsListV2$walletListsJSResult"));
                                return L.walletListOut = t.DataConversion.JSNodeParamConverter.from(I.WalletList, t.DataTypes.DataTypes.Text), L
                            }, {
                                FormatMoney: Yf.clientActionProxies.formatMoney$Action
                            }, {})
                        } finally {
                            R && R.end()
                        }
                    }, 1), b.value.dataOut = t.JSONUtils.deserializeFromJSON(T.value.walletListOut, ee, !1), v.value.walletsListOut = b.value.dataOut
                })
            }).then(function() {
                return v.value
            })
        }, function() {
            n && n.end()
        })
    }, 1)
};
u.constructor.registerVariableGroupType("tradershub.GetWalletsListV2$vars", [{
    name: "LinkedTo",
    attrName: "linkedToInLocal",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "ActiveWalletLoginId",
    attrName: "activeWalletLoginIdVar",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.constructor.registerVariableGroupType("tradershub.GetWalletsListV2$walletListsJSResult", [{
    name: "WalletList",
    attrName: "walletListOut",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.constructor.registerVariableGroupType("tradershub.GetWalletsListV2$getFirstWalletIndexJSResult", [{
    name: "ActiveWalletLoginId",
    attrName: "activeWalletLoginIdOut",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.constructor.registerVariableGroupType("tradershub.GetWalletsListV2$outVars", [{
    name: "WalletsList",
    attrName: "walletsListOut",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.RecordList,
    defaultValue: r(function() {
        return new ee
    }, "defaultValue"),
    complexType: ee
}]);
u.clientActionProxies.getWalletsListV2$Action = function(o) {
    return o = o === void 0 ? "" : o, l.executeActionInsideJSNode(u.default.getWalletsListV2$Action.bind(l, t.DataConversion.JSNodeParamConverter.from(o, t.DataTypes.DataTypes.Text)), t.Controller.BaseViewController.activeScreen ? t.Controller.BaseViewController.activeScreen.callContext() : void 0, function(a) {
        return {
            WalletsList: a.walletsListOut
        }
    })
};
u.getWebsiteStatus$Action = function(o) {
    return t.Logger.startActiveSpan("GetWebsiteStatus", function(a) {
        return a && (a.setAttribute("code.function", "GetWebsiteStatus"), a.setAttribute("outsystems.function.key", "39ad24ea-0783-4e1f-b60b-0bfe07b17421"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_ACTION")), t.Flow.tryFinally(function() {
            o = l.callContext(o);
            var n = new t.DataTypes.VariableHolder,
                p = new t.DataTypes.VariableHolder,
                i = new t.DataTypes.VariableHolder(new(t.Controller.BaseController.getJSONDeserializeOutputType(Y))),
                c = new t.DataTypes.VariableHolder(new(t.Controller.BaseController.getJSONDeserializeOutputType(Z)));
            return t.Flow.executeAsyncFlow(function() {
                return u.default.derivApiSendMessage$Action("", "website_status", !1, o).then(function(d) {
                    n.value = d
                }).then(function() {
                    n.value.isErrorOut || (c.value.dataOut = t.JSONUtils.deserializeFromJSON(n.value.responseOut, Z, !1), i.value.dataOut = t.JSONUtils.deserializeFromJSON(g.getRawResidenceListResponse(), Y, !1), p.value = t.SystemActions.listFilter(i.value.dataOut.residence_listAttr, function(d) {
                        return g.getClientCountry() === d.valueAttr
                    }, o), g.setRawWebsiteStatusResponse(n.value.responseOut), g.setClientCountry(c.value.dataOut.website_statusAttr.clients_countryAttr), g.setClientCountryText(p.value.filteredListOut.getCurrent(o.iterationContext).textAttr))
                })
            }).then(function() {})
        }, function() {
            a && a.end()
        })
    }, 1)
};
u.clientActionProxies.getWebsiteStatus$Action = function() {
    return l.executeActionInsideJSNode(u.default.getWebsiteStatus$Action.bind(l), t.Controller.BaseViewController.activeScreen ? t.Controller.BaseViewController.activeScreen.callContext() : void 0, function(o) {
        return {}
    })
};
u.initGrowthbookAndRudderStack$Action = function(o) {
    return t.Logger.startActiveSpan("InitGrowthbookAndRudderStack", function(a) {
        return a && (a.setAttribute("code.function", "InitGrowthbookAndRudderStack"), a.setAttribute("outsystems.function.key", "db966529-7a98-4ff2-98aa-4b6701575cdd"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_ACTION")), t.Flow.tryFinally(function() {
            return o = l.callContext(o), t.Flow.executeAsyncFlow(function() {
                return t.Logger.startActiveSpan("InitAnalytics", function(n) {
                    n && (n.setAttribute("code.function", "InitAnalytics"), n.setAttribute("outsystems.function.key", "25b1b963-0c44-4b92-bfec-f05d8383344a"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                    try {
                        return l.safeExecuteAsyncJSNode(G4, "InitAnalytics", "InitGrowthbookAndRudderStack", {
                            STAGING_HOSTNAME: t.DataConversion.JSNodeParamConverter.to(g.getStagingHostName(), t.DataTypes.DataTypes.Text),
                            RUDDERSTACK_STAGING_KEY: t.DataConversion.JSNodeParamConverter.to("2kxsAsC6mmbYhzD0dXAd9gIlvzC", t.DataTypes.DataTypes.Text),
                            IS_AUTHORIZED: t.DataConversion.JSNodeParamConverter.to(g.getAuthToken() !== t.BuiltinFunctions.nullTextIdentifier(), t.DataTypes.DataTypes.Boolean),
                            RUDDERSTACK_PRODUCTION_KEY: t.DataConversion.JSNodeParamConverter.to("2kxJ1vuvgwx3jXTNURuk7IbxFoW", t.DataTypes.DataTypes.Text),
                            GROWTHBOOK_DEVELOPMENT_DECRYPTION_KEY: t.DataConversion.JSNodeParamConverter.to("vZhhadh108cXmYDuZ5dFJQ==", t.DataTypes.DataTypes.Text),
                            PRODUCTION_HOSTNAME: t.DataConversion.JSNodeParamConverter.to(g.getProductionHostName(), t.DataTypes.DataTypes.Text),
                            GROWTHBOOK_STAGING_CLIENT_KEY: t.DataConversion.JSNodeParamConverter.to("sdk-WrcJdZQomk0uzatG", t.DataTypes.DataTypes.Text),
                            GROWTHBOOK_PRODUCTION_CLIENT_KEY: t.DataConversion.JSNodeParamConverter.to("sdk-0kY5GMkZT2BfvS1t", t.DataTypes.DataTypes.Text),
                            GROWTHBOOK_DEVELOPMENT_CLIENT_KEY: t.DataConversion.JSNodeParamConverter.to("sdk-ukdKPzIqjCEnbAv", t.DataTypes.DataTypes.Text),
                            GROWTHBOOK_STAGING_DECRYPTION_KEY: t.DataConversion.JSNodeParamConverter.to("+zayLeqj1tNv5ve/eTJIGQ==", t.DataTypes.DataTypes.Text),
                            GROWTHBOOK_PRODUCTION_DECRYPTION_KEY: t.DataConversion.JSNodeParamConverter.to("iQ9jnBWrCocmt/5LPogGfw==", t.DataTypes.DataTypes.Text)
                        }, function(p) {}, {}, {})
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }).then(function() {})
        }, function() {
            a && a.end()
        })
    }, 1)
};
u.clientActionProxies.initGrowthbookAndRudderStack$Action = function() {
    return l.executeActionInsideJSNode(u.default.initGrowthbookAndRudderStack$Action.bind(l), t.Controller.BaseViewController.activeScreen ? t.Controller.BaseViewController.activeScreen.callContext() : void 0, function(o) {
        return {}
    })
};
u.initizalizeDerivApi$Action = function(o) {
    return t.Logger.startActiveSpan("InitizalizeDerivApi", function(a) {
        a && (a.setAttribute("code.function", "InitizalizeDerivApi"), a.setAttribute("outsystems.function.key", "d74abbbb-8450-4f49-b362-dd2e8c1e7c50"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_ACTION"));
        try {
            o = l.callContext(o), t.Logger.startActiveSpan("InitializeDerivApi", function(n) {
                n && (n.setAttribute("code.function", "InitializeDerivApi"), n.setAttribute("outsystems.function.key", "b0c52184-c6a5-4064-840e-3ed8f885b369"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                try {
                    return l.safeExecuteJSNode(J4, "InitializeDerivApi", "InitizalizeDerivApi", {
                        WebsocketURL: t.DataConversion.JSNodeParamConverter.to(g.getWebsocketURL(), t.DataTypes.DataTypes.Text)
                    }, function(p) {}, {
                        GetWebsiteStatus: u.default.clientActionProxies.getWebsiteStatus$Action,
                        SendResidenceList: u.default.clientActionProxies.sendResidenceList$Action,
                        SendAuthorize: u.default.clientActionProxies.sendAuthorize$Action
                    }, {})
                } finally {
                    n && n.end()
                }
            }, 1);
            return
        } finally {
            a && a.end()
        }
    }, 1)
};
u.clientActionProxies.initizalizeDerivApi$Action = function() {
    return l.executeActionInsideJSNode(u.default.initizalizeDerivApi$Action.bind(l), t.Controller.BaseViewController.activeScreen ? t.Controller.BaseViewController.activeScreen.callContext() : void 0, function(o) {
        return {}
    })
};
u.isDowntimePeriod$Action = function(o) {
    return t.Logger.startActiveSpan("IsDowntimePeriod", function(a) {
        a && (a.setAttribute("code.function", "IsDowntimePeriod"), a.setAttribute("outsystems.function.key", "49ad1399-c66f-4a65-9aab-3e52be4eefb1"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_ACTION"));
        try {
            o = l.callContext(o);
            var n = new t.DataTypes.VariableHolder,
                p = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.IsDowntimePeriod$outVars")));
            return n.value = t.Logger.startActiveSpan("CheckDowntimePeriod", function(i) {
                i && (i.setAttribute("code.function", "CheckDowntimePeriod"), i.setAttribute("outsystems.function.key", "e96e3c12-61c7-45ec-98ff-32d2669bb00a"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                try {
                    return l.safeExecuteJSNode(B4, "CheckDowntimePeriod", "IsDowntimePeriod", {
                        IsDowntime: t.DataConversion.JSNodeParamConverter.to(!1, t.DataTypes.DataTypes.Boolean)
                    }, function(c) {
                        var d = new(l.constructor.getVariableGroupType("tradershub.IsDowntimePeriod$checkDowntimePeriodJSResult"));
                        return d.isDowntimeOut = t.DataConversion.JSNodeParamConverter.from(c.IsDowntime, t.DataTypes.DataTypes.Boolean), d
                    }, {}, {})
                } finally {
                    i && i.end()
                }
            }, 1), p.value.isDowntimeOut = n.value.isDowntimeOut, p.value
        } finally {
            a && a.end()
        }
    }, 1)
};
u.constructor.registerVariableGroupType("tradershub.IsDowntimePeriod$checkDowntimePeriodJSResult", [{
    name: "IsDowntime",
    attrName: "isDowntimeOut",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Boolean,
    defaultValue: r(function() {
        return !1
    }, "defaultValue")
}]);
u.constructor.registerVariableGroupType("tradershub.IsDowntimePeriod$outVars", [{
    name: "IsDowntime",
    attrName: "isDowntimeOut",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Boolean,
    defaultValue: r(function() {
        return !1
    }, "defaultValue")
}]);
u.clientActionProxies.isDowntimePeriod$Action = function() {
    return l.executeActionInsideJSNode(u.default.isDowntimePeriod$Action.bind(l), t.Controller.BaseViewController.activeScreen ? t.Controller.BaseViewController.activeScreen.callContext() : void 0, function(o) {
        return {
            IsDowntime: t.DataConversion.JSNodeParamConverter.to(o.isDowntimeOut, t.DataTypes.DataTypes.Boolean)
        }
    })
};
u.loadScriptsAsync$Action = function(o, a) {
    return t.Logger.startActiveSpan("LoadScriptsAsync", function(n) {
        n && (n.setAttribute("code.function", "LoadScriptsAsync"), n.setAttribute("outsystems.function.key", "0d62446b-891b-40d9-bbde-107f1b07505e"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_ACTION"));
        try {
            a = l.callContext(a);
            var p = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.LoadScriptsAsync$vars")));
            p.value.uRLInLocal = o, t.Logger.startActiveSpan("LoadScriptsAsync", function(i) {
                i && (i.setAttribute("code.function", "LoadScriptsAsync"), i.setAttribute("outsystems.function.key", "31f6defc-ff4d-4cfb-be26-571eec9a897f"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                try {
                    return l.safeExecuteJSNode(_4, "LoadScriptsAsync", "LoadScriptsAsync", {
                        URL: t.DataConversion.JSNodeParamConverter.to(p.value.uRLInLocal, t.DataTypes.DataTypes.Text)
                    }, function(c) {}, {}, {})
                } finally {
                    i && i.end()
                }
            }, 1);
            return
        } finally {
            n && n.end()
        }
    }, 1)
};
u.constructor.registerVariableGroupType("tradershub.LoadScriptsAsync$vars", [{
    name: "URL",
    attrName: "uRLInLocal",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.clientActionProxies.loadScriptsAsync$Action = function(o) {
    return o = o === void 0 ? "" : o, l.executeActionInsideJSNode(u.default.loadScriptsAsync$Action.bind(l, t.DataConversion.JSNodeParamConverter.from(o, t.DataTypes.DataTypes.Text)), t.Controller.BaseViewController.activeScreen ? t.Controller.BaseViewController.activeScreen.callContext() : void 0, function(a) {
        return {}
    })
};
u.maltainvestPayload$Action = function(o) {
    return t.Logger.startActiveSpan("MaltainvestPayload", function(a) {
        return a && (a.setAttribute("code.function", "MaltainvestPayload"), a.setAttribute("outsystems.function.key", "eb4d9d54-0fd2-4aa7-932f-f0f9b1e735cd"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_ACTION")), t.Flow.tryFinally(function() {
            o = l.callContext(o);
            var n = new t.DataTypes.VariableHolder,
                p = new t.DataTypes.VariableHolder,
                i = new t.DataTypes.VariableHolder,
                c = new t.DataTypes.VariableHolder,
                d = new t.DataTypes.VariableHolder,
                y = new t.DataTypes.VariableHolder(new(t.Controller.BaseController.getJSONDeserializeOutputType(Te))),
                T = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.MaltainvestPayload$outVars")));
            return t.Flow.executeAsyncFlow(function() {
                return u.default.sendGetSetting$Action(o).then(function(f) {
                    n.value = f
                }).then(function() {
                    return d.value = t.Logger.startActiveSpan("NewAccountRealEUPayload", function(f) {
                        f && (f.setAttribute("code.function", "NewAccountRealEUPayload"), f.setAttribute("outsystems.function.key", "6aeed70e-1642-4651-ad21-4a928e0fdcca"), f.setAttribute("outsystems.function.owner.name", "tradershub"), f.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), f.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                        try {
                            return l.safeExecuteJSNode($4, "NewAccountRealEUPayload", "MaltainvestPayload", {
                                TIN: t.DataConversion.JSNodeParamConverter.to(g.getRealSignupTIDNumber(), t.DataTypes.DataTypes.Text),
                                FirstName: t.DataConversion.JSNodeParamConverter.to(g.getRealSignupFirstName(), t.DataTypes.DataTypes.Text),
                                Phone: t.DataConversion.JSNodeParamConverter.to(g.getRealSignupPhone(), t.DataTypes.DataTypes.Text),
                                EmploymentStatus: t.DataConversion.JSNodeParamConverter.to(g.getRealSignupEmployementStatus(), t.DataTypes.DataTypes.Text),
                                AccountOpeningReason: t.DataConversion.JSNodeParamConverter.to(g.getRealSignupAccountOpeningReason(), t.DataTypes.DataTypes.Text),
                                City: t.DataConversion.JSNodeParamConverter.to(g.getRealSignupAddressTown(), t.DataTypes.DataTypes.Text),
                                LastName: t.DataConversion.JSNodeParamConverter.to(g.getRealSignupLastName(), t.DataTypes.DataTypes.Text),
                                TaxResidence: t.DataConversion.JSNodeParamConverter.to(g.getRealSignupTaxResidence(), t.DataTypes.DataTypes.Text),
                                SkippedEmploymentDetails: t.DataConversion.JSNodeParamConverter.to(g.getRealSignupNoTaxInformation(), t.DataTypes.DataTypes.Boolean),
                                RiskTolerance: t.DataConversion.JSNodeParamConverter.to(g.getPotentialLost(), t.DataTypes.DataTypes.Text),
                                Citizen: t.DataConversion.JSNodeParamConverter.to(g.getSelectedCitizenship(), t.DataTypes.DataTypes.Text),
                                Address: t.DataConversion.JSNodeParamConverter.to(g.getRealSignupAddress(), t.DataTypes.DataTypes.Text),
                                Residence: t.DataConversion.JSNodeParamConverter.to(g.getSelectedResidence(), t.DataTypes.DataTypes.Text),
                                FatcaDeclaration: t.DataConversion.JSNodeParamConverter.to(g.getRealSignupFatcaDeclaration(), t.DataTypes.DataTypes.Text),
                                Salutation: t.DataConversion.JSNodeParamConverter.to(g.getSalutation(), t.DataTypes.DataTypes.Text),
                                DateOfBirth: t.DataConversion.JSNodeParamConverter.to(g.getRealSignupDateofBirth(), t.DataTypes.DataTypes.Text),
                                Currency: t.DataConversion.JSNodeParamConverter.to(g.getClientCurrency(), t.DataTypes.DataTypes.Text),
                                PlaceOfBirth: t.DataConversion.JSNodeParamConverter.to(g.getRealSignupPlaceOfBirth(), t.DataTypes.DataTypes.Text),
                                Payload: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text)
                            }, function(S) {
                                var A = new(l.constructor.getVariableGroupType("tradershub.MaltainvestPayload$newAccountRealEUPayloadJSResult"));
                                return A.payloadOut = t.DataConversion.JSNodeParamConverter.from(S.Payload, t.DataTypes.DataTypes.Text), A
                            }, {}, {})
                        } finally {
                            f && f.end()
                        }
                    }, 1), u.default.derivApiSendMessage$Action(d.value.payloadOut, "", !0, o).then(function(f) {
                        p.value = f
                    })
                }).then(function() {
                    return t.Flow.executeSequence(function() {
                        if (p.value.isErrorOut) T.value.errorCodeOut = p.value.errorCodeOut, T.value.errorMessageOut = p.value.errorMessageOut;
                        else return t.FeedbackMessageService.showFeedbackMessage("Account created successfully.", 1), t.Logger.startActiveSpan("RudderStackSuccess", function(f) {
                            f && (f.setAttribute("code.function", "RudderStackSuccess"), f.setAttribute("outsystems.function.key", "29130fab-7cb0-4c7c-a41e-db1ad19cc2ad"), f.setAttribute("outsystems.function.owner.name", "tradershub"), f.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), f.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return l.safeExecuteJSNode(k4, "RudderStackSuccess", "MaltainvestPayload", null, function(S) {}, {}, {})
                            } finally {
                                f && f.end()
                            }
                        }, 1), y.value.dataOut = t.JSONUtils.deserializeFromJSON(p.value.responseOut, Te, !1), g.setAuthToken(y.value.dataOut.new_account_realAttr.oauth_tokenAttr), g.setActiveLoginId(y.value.dataOut.new_account_realAttr.client_idAttr), c.value = t.Logger.startActiveSpan("AuthorizePayload", function(f) {
                            f && (f.setAttribute("code.function", "AuthorizePayload"), f.setAttribute("outsystems.function.key", "413706f1-ea06-4088-97ca-75bdacdeca0c"), f.setAttribute("outsystems.function.owner.name", "tradershub"), f.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), f.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return l.safeExecuteJSNode(E4, "AuthorizePayload", "MaltainvestPayload", {
                                    AuthToken: t.DataConversion.JSNodeParamConverter.to(y.value.dataOut.new_account_realAttr.oauth_tokenAttr, t.DataTypes.DataTypes.Text),
                                    Payload: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text)
                                }, function(S) {
                                    var A = new(l.constructor.getVariableGroupType("tradershub.MaltainvestPayload$authorizePayloadJSResult"));
                                    return A.payloadOut = t.DataConversion.JSNodeParamConverter.from(S.Payload, t.DataTypes.DataTypes.Text), A
                                }, {}, {})
                            } finally {
                                f && f.end()
                            }
                        }, 1), u.default.derivApiSendMessage$Action(c.value.payloadOut, "", !1, o).then(function(f) {
                            i.value = f
                        }).then(function() {
                            u.default.cleanupAfterRealSignup$Action(o), T.value.isSuccessOut = !0, t.Logger.startActiveSpan("SyncLocalStorage", function(f) {
                                f && (f.setAttribute("code.function", "SyncLocalStorage"), f.setAttribute("outsystems.function.key", "52294290-9888-4615-b9b9-a7ddcea8a1c8"), f.setAttribute("outsystems.function.owner.name", "tradershub"), f.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), f.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return l.safeExecuteJSNode(F4, "SyncLocalStorage", "MaltainvestPayload", {
                                        Response: t.DataConversion.JSNodeParamConverter.to(i.value.responseOut, t.DataTypes.DataTypes.Text),
                                        Token: t.DataConversion.JSNodeParamConverter.to(y.value.dataOut.new_account_realAttr.oauth_tokenAttr, t.DataTypes.DataTypes.Text)
                                    }, function(S) {}, {}, {})
                                } finally {
                                    f && f.end()
                                }
                            }, 1)
                        })
                    })
                })
            }).then(function() {
                return T.value
            })
        }, function() {
            a && a.end()
        })
    }, 1)
};
u.constructor.registerVariableGroupType("tradershub.MaltainvestPayload$authorizePayloadJSResult", [{
    name: "Payload",
    attrName: "payloadOut",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.constructor.registerVariableGroupType("tradershub.MaltainvestPayload$newAccountRealEUPayloadJSResult", [{
    name: "Payload",
    attrName: "payloadOut",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.constructor.registerVariableGroupType("tradershub.MaltainvestPayload$outVars", [{
    name: "IsSuccess",
    attrName: "isSuccessOut",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Boolean,
    defaultValue: r(function() {
        return !1
    }, "defaultValue")
}, {
    name: "ErrorCode",
    attrName: "errorCodeOut",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "ErrorMessage",
    attrName: "errorMessageOut",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.clientActionProxies.maltainvestPayload$Action = function() {
    return l.executeActionInsideJSNode(u.default.maltainvestPayload$Action.bind(l), t.Controller.BaseViewController.activeScreen ? t.Controller.BaseViewController.activeScreen.callContext() : void 0, function(o) {
        return {
            IsSuccess: t.DataConversion.JSNodeParamConverter.to(o.isSuccessOut, t.DataTypes.DataTypes.Boolean),
            ErrorCode: t.DataConversion.JSNodeParamConverter.to(o.errorCodeOut, t.DataTypes.DataTypes.Text),
            ErrorMessage: t.DataConversion.JSNodeParamConverter.to(o.errorMessageOut, t.DataTypes.DataTypes.Text)
        }
    })
};
u.mT5NewAccount$Action = function(o, a, n, p, i, c) {
    return t.Logger.startActiveSpan("MT5NewAccount", function(d) {
        return d && (d.setAttribute("code.function", "MT5NewAccount"), d.setAttribute("outsystems.function.key", "25649aa5-7821-4c3c-bbef-ed52f755193c"), d.setAttribute("outsystems.function.owner.name", "tradershub"), d.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), d.setAttribute("outsystems.function.type", "CLIENT_ACTION")), t.Flow.tryFinally(function() {
            c = l.callContext(c);
            var y = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.MT5NewAccount$vars")));
            y.value.passwordInLocal = o, y.value.emailInLocal = a, y.value.nameInLocal = n, y.value.productInLocal = p, y.value.landingCompanyInLocal = i;
            var T = new t.DataTypes.VariableHolder,
                f = new t.DataTypes.VariableHolder,
                S = new t.DataTypes.VariableHolder(new(t.Controller.BaseController.getJSONDeserializeOutputType(X))),
                A = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.MT5NewAccount$outVars")));
            return t.Flow.executeAsyncFlow(function() {
                return f.value = t.Logger.startActiveSpan("Payload", function(b) {
                    b && (b.setAttribute("code.function", "Payload"), b.setAttribute("outsystems.function.key", "24546f6a-3f6a-4633-8995-302083192ecc"), b.setAttribute("outsystems.function.owner.name", "tradershub"), b.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), b.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                    try {
                        return l.safeExecuteJSNode(U4, "Payload", "MT5NewAccount", {
                            Email: t.DataConversion.JSNodeParamConverter.to(y.value.emailInLocal === "" ? "test@gmail.com" : y.value.emailInLocal, t.DataTypes.DataTypes.Email),
                            Name: t.DataConversion.JSNodeParamConverter.to(y.value.nameInLocal === "" ? "John Abc" : y.value.nameInLocal, t.DataTypes.DataTypes.Text),
                            Product: t.DataConversion.JSNodeParamConverter.to(y.value.productInLocal, t.DataTypes.DataTypes.Text),
                            Leverage: t.DataConversion.JSNodeParamConverter.to("100", t.DataTypes.DataTypes.Text),
                            LandingCompany: t.DataConversion.JSNodeParamConverter.to(y.value.landingCompanyInLocal, t.DataTypes.DataTypes.Text),
                            AccountType: t.DataConversion.JSNodeParamConverter.to(g.getAccountType() === "demo" ? g.getAccountType() : y.value.productInLocal === "swap_free" || y.value.productInLocal === "zero_spread" ? "all" : y.value.productInLocal === "standard" ? "gaming" : "financial", t.DataTypes.DataTypes.Text),
                            Password: t.DataConversion.JSNodeParamConverter.to(y.value.passwordInLocal, t.DataTypes.DataTypes.Text),
                            Payload: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text)
                        }, function(x) {
                            var v = new(l.constructor.getVariableGroupType("tradershub.MT5NewAccount$payloadJSResult"));
                            return v.payloadOut = t.DataConversion.JSNodeParamConverter.from(x.Payload, t.DataTypes.DataTypes.Text), v
                        }, {}, {})
                    } finally {
                        b && b.end()
                    }
                }, 1), u.default.derivApiSendMessage$Action(f.value.payloadOut, "mt5_new_account", !0, c).then(function(b) {
                    T.value = b
                }).then(function() {
                    T.value.isErrorOut ? t.FeedbackMessageService.showFeedbackMessage(T.value.errorMessageOut, 3) : (S.value.dataOut = t.JSONUtils.deserializeFromJSON(T.value.responseOut, X, !1), A.value.responseOut = t.DataConversion.JSConversions.typeConvertRecord(S.value.dataOut, new Uf, function(b, x) {
                        return x.echo_reqAttr = b.echo_reqAttr, x.msg_typeAttr = b.msg_typeAttr, x.mt5NewAccountItemAttr.balanceAttr = b.mt5_new_accountAttr.balanceAttr, x.mt5NewAccountItemAttr.currencyAttr = b.mt5_new_accountAttr.currencyAttr, x.mt5NewAccountItemAttr.display_balanceAttr = b.mt5_new_accountAttr.display_balanceAttr, x.mt5NewAccountItemAttr.loginAttr = b.mt5_new_accountAttr.loginAttr, x.mt5NewAccountItemAttr.sub_account_typeAttr = b.mt5_new_accountAttr.sub_account_typeAttr, x
                    }))
                })
            }).then(function() {
                return A.value
            })
        }, function() {
            d && d.end()
        })
    }, 1)
};
u.constructor.registerVariableGroupType("tradershub.MT5NewAccount$vars", [{
    name: "Password",
    attrName: "passwordInLocal",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "Email",
    attrName: "emailInLocal",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Email,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "Name",
    attrName: "nameInLocal",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "Product",
    attrName: "productInLocal",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "LandingCompany",
    attrName: "landingCompanyInLocal",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.constructor.registerVariableGroupType("tradershub.MT5NewAccount$payloadJSResult", [{
    name: "Payload",
    attrName: "payloadOut",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.constructor.registerVariableGroupType("tradershub.MT5NewAccount$outVars", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new Uf
    }, "defaultValue"),
    complexType: Uf
}]);
u.clientActionProxies.mT5NewAccount$Action = function(o, a, n, p, i) {
    return o = o === void 0 ? "" : o, a = a === void 0 ? "" : a, n = n === void 0 ? "" : n, p = p === void 0 ? "" : p, i = i === void 0 ? "" : i, l.executeActionInsideJSNode(u.default.mT5NewAccount$Action.bind(l, t.DataConversion.JSNodeParamConverter.from(o, t.DataTypes.DataTypes.Text), t.DataConversion.JSNodeParamConverter.from(a, t.DataTypes.DataTypes.Email), t.DataConversion.JSNodeParamConverter.from(n, t.DataTypes.DataTypes.Text), t.DataConversion.JSNodeParamConverter.from(p, t.DataTypes.DataTypes.Text), t.DataConversion.JSNodeParamConverter.from(i, t.DataTypes.DataTypes.Text)), t.Controller.BaseViewController.activeScreen ? t.Controller.BaseViewController.activeScreen.callContext() : void 0, function(c) {
        return {
            Response: c.responseOut
        }
    })
};
u.newAccountReal$Action = function(o) {
    return t.Logger.startActiveSpan("NewAccountReal", function(a) {
        return a && (a.setAttribute("code.function", "NewAccountReal"), a.setAttribute("outsystems.function.key", "4d379ae3-5e33-48c0-8ef3-d0d8ff724c2e"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_ACTION")), t.Flow.tryFinally(function() {
            o = l.callContext(o);
            var n = new t.DataTypes.VariableHolder,
                p = new t.DataTypes.VariableHolder,
                i = new t.DataTypes.VariableHolder,
                c = new t.DataTypes.VariableHolder,
                d = new t.DataTypes.VariableHolder,
                y = new t.DataTypes.VariableHolder,
                T = new t.DataTypes.VariableHolder(new(t.Controller.BaseController.getJSONDeserializeOutputType(Te))),
                f = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.NewAccountReal$outVars")));
            return t.Flow.executeAsyncFlow(function() {
                return u.default.sendGetSetting$Action(o).then(function(S) {
                    c.value = S
                }).then(function() {
                    return p.value = u.default.featureFlagValueByName$Action("WalletRealAccountCreation", o), y.value = t.Logger.startActiveSpan("NewAccountRealPayload", function(S) {
                        S && (S.setAttribute("code.function", "NewAccountRealPayload"), S.setAttribute("outsystems.function.key", "f4571a52-e724-40ee-a1c0-dacba9c4c4a8"), S.setAttribute("outsystems.function.owner.name", "tradershub"), S.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), S.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                        try {
                            return l.safeExecuteJSNode(W4, "NewAccountRealPayload", "NewAccountReal", {
                                FirstName: t.DataConversion.JSNodeParamConverter.to(g.getRealSignupFirstName(), t.DataTypes.DataTypes.Text),
                                FatcaDeclaration: t.DataConversion.JSNodeParamConverter.to(g.getRealSignupFatcaDeclaration(), t.DataTypes.DataTypes.Text),
                                TIN: t.DataConversion.JSNodeParamConverter.to(g.getRealSignupTIDNumber(), t.DataTypes.DataTypes.Text),
                                Residence: t.DataConversion.JSNodeParamConverter.to(c.value.getSettingResponseOut.country_codeAttr, t.DataTypes.DataTypes.Text),
                                City: t.DataConversion.JSNodeParamConverter.to(g.getRealSignupAddressTown(), t.DataTypes.DataTypes.Text),
                                Address: t.DataConversion.JSNodeParamConverter.to(g.getRealSignupAddress(), t.DataTypes.DataTypes.Text),
                                SkippedEmploymentDetails: t.DataConversion.JSNodeParamConverter.to(g.getRealSignupNoTaxInformation(), t.DataTypes.DataTypes.Boolean),
                                State: t.DataConversion.JSNodeParamConverter.to(g.getRealSignupAddressState(), t.DataTypes.DataTypes.Text),
                                Citizen: t.DataConversion.JSNodeParamConverter.to(c.value.getSettingResponseOut.citizenAttr, t.DataTypes.DataTypes.Text),
                                Currency: t.DataConversion.JSNodeParamConverter.to(g.getSelectedCurrencyCode(), t.DataTypes.DataTypes.Text),
                                TaxResidence: t.DataConversion.JSNodeParamConverter.to(g.getRealSignupTaxResidence(), t.DataTypes.DataTypes.Text),
                                Phone: t.DataConversion.JSNodeParamConverter.to(g.getRealSignupPhone(), t.DataTypes.DataTypes.Text),
                                DateOfBirth: t.DataConversion.JSNodeParamConverter.to(g.getRealSignupDateofBirth(), t.DataTypes.DataTypes.Text),
                                PlaceOfBirth: t.DataConversion.JSNodeParamConverter.to(g.getRealSignupPlaceOfBirth(), t.DataTypes.DataTypes.Text),
                                LastName: t.DataConversion.JSNodeParamConverter.to(g.getRealSignupLastName(), t.DataTypes.DataTypes.Text),
                                PostCode: t.DataConversion.JSNodeParamConverter.to(g.getRealSignupAddressPostCode(), t.DataTypes.DataTypes.Text),
                                AccountOpeningReason: t.DataConversion.JSNodeParamConverter.to(g.getRealSignupAccountOpeningReason(), t.DataTypes.DataTypes.Text),
                                EmploymentStatus: t.DataConversion.JSNodeParamConverter.to(g.getRealSignupEmployementStatus(), t.DataTypes.DataTypes.Text),
                                Payload: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text)
                            }, function(A) {
                                var b = new(l.constructor.getVariableGroupType("tradershub.NewAccountReal$newAccountRealPayloadJSResult"));
                                return b.payloadOut = t.DataConversion.JSNodeParamConverter.from(A.Payload, t.DataTypes.DataTypes.Text), b
                            }, {}, {})
                        } finally {
                            S && S.end()
                        }
                    }, 1), u.default.derivApiSendMessage$Action(y.value.payloadOut, p.value.isEnabledOut ? "new_account_wallet" : "new_account_real", !0, o).then(function(S) {
                        i.value = S
                    })
                }).then(function() {
                    return t.Flow.executeSequence(function() {
                        if (i.value.isErrorOut) f.value.errorCodeOut = i.value.errorCodeOut, f.value.errorMessageOut = i.value.errorMessageOut;
                        else return t.FeedbackMessageService.showFeedbackMessage("Account created successfully.", 1), t.Logger.startActiveSpan("RudderStackSuccess", function(S) {
                            S && (S.setAttribute("code.function", "RudderStackSuccess"), S.setAttribute("outsystems.function.key", "27135403-6d00-48c8-9f36-82c36d15dde0"), S.setAttribute("outsystems.function.owner.name", "tradershub"), S.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), S.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return l.safeExecuteJSNode(M4, "RudderStackSuccess", "NewAccountReal", null, function(A) {}, {}, {})
                            } finally {
                                S && S.end()
                            }
                        }, 1), T.value.dataOut = t.JSONUtils.deserializeFromJSON(i.value.responseOut, Te, !1), g.setAuthToken(T.value.dataOut.new_account_realAttr.oauth_tokenAttr), g.setActiveLoginId(T.value.dataOut.new_account_realAttr.client_idAttr), d.value = t.Logger.startActiveSpan("AuthorizePayload", function(S) {
                            S && (S.setAttribute("code.function", "AuthorizePayload"), S.setAttribute("outsystems.function.key", "58b4974c-e331-48db-91e5-c6543dea54d7"), S.setAttribute("outsystems.function.owner.name", "tradershub"), S.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), S.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return l.safeExecuteJSNode(q4, "AuthorizePayload", "NewAccountReal", {
                                    AuthToken: t.DataConversion.JSNodeParamConverter.to(T.value.dataOut.new_account_realAttr.oauth_tokenAttr, t.DataTypes.DataTypes.Text),
                                    Payload: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text)
                                }, function(A) {
                                    var b = new(l.constructor.getVariableGroupType("tradershub.NewAccountReal$authorizePayloadJSResult"));
                                    return b.payloadOut = t.DataConversion.JSNodeParamConverter.from(A.Payload, t.DataTypes.DataTypes.Text), b
                                }, {}, {})
                            } finally {
                                S && S.end()
                            }
                        }, 1), u.default.derivApiSendMessage$Action(d.value.payloadOut, "", !1, o).then(function(S) {
                            n.value = S
                        }).then(function() {
                            return u.default.sendIDVDocumentDetails$Action(o)
                        }).then(function() {
                            u.default.cleanupAfterRealSignup$Action(o), f.value.isSuccessOut = !0, t.Logger.startActiveSpan("SyncLocalStorage", function(S) {
                                S && (S.setAttribute("code.function", "SyncLocalStorage"), S.setAttribute("outsystems.function.key", "7ec10959-2f71-4bea-b5d7-91a42e42d043"), S.setAttribute("outsystems.function.owner.name", "tradershub"), S.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), S.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return l.safeExecuteJSNode(H4, "SyncLocalStorage", "NewAccountReal", {
                                        Response: t.DataConversion.JSNodeParamConverter.to(n.value.responseOut, t.DataTypes.DataTypes.Text),
                                        Token: t.DataConversion.JSNodeParamConverter.to(T.value.dataOut.new_account_realAttr.oauth_tokenAttr, t.DataTypes.DataTypes.Text)
                                    }, function(A) {}, {}, {})
                                } finally {
                                    S && S.end()
                                }
                            }, 1)
                        })
                    })
                })
            }).then(function() {
                return f.value
            })
        }, function() {
            a && a.end()
        })
    }, 1)
};
u.constructor.registerVariableGroupType("tradershub.NewAccountReal$authorizePayloadJSResult", [{
    name: "Payload",
    attrName: "payloadOut",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.constructor.registerVariableGroupType("tradershub.NewAccountReal$newAccountRealPayloadJSResult", [{
    name: "Payload",
    attrName: "payloadOut",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.constructor.registerVariableGroupType("tradershub.NewAccountReal$outVars", [{
    name: "IsSuccess",
    attrName: "isSuccessOut",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Boolean,
    defaultValue: r(function() {
        return !1
    }, "defaultValue")
}, {
    name: "ErrorCode",
    attrName: "errorCodeOut",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "ErrorMessage",
    attrName: "errorMessageOut",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.clientActionProxies.newAccountReal$Action = function() {
    return l.executeActionInsideJSNode(u.default.newAccountReal$Action.bind(l), t.Controller.BaseViewController.activeScreen ? t.Controller.BaseViewController.activeScreen.callContext() : void 0, function(o) {
        return {
            IsSuccess: t.DataConversion.JSNodeParamConverter.to(o.isSuccessOut, t.DataTypes.DataTypes.Boolean),
            ErrorCode: t.DataConversion.JSNodeParamConverter.to(o.errorCodeOut, t.DataTypes.DataTypes.Text),
            ErrorMessage: t.DataConversion.JSNodeParamConverter.to(o.errorMessageOut, t.DataTypes.DataTypes.Text)
        }
    })
};
u.newAccountRealEU$Action = function(o) {
    return t.Logger.startActiveSpan("NewAccountRealEU", function(a) {
        return a && (a.setAttribute("code.function", "NewAccountRealEU"), a.setAttribute("outsystems.function.key", "c1b451d1-2f0b-42fb-b00b-e407df5361e3"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_ACTION")), t.Flow.tryFinally(function() {
            o = l.callContext(o);
            var n = new t.DataTypes.VariableHolder,
                p = new t.DataTypes.VariableHolder,
                i = new t.DataTypes.VariableHolder,
                c = new t.DataTypes.VariableHolder,
                d = new t.DataTypes.VariableHolder,
                y = new t.DataTypes.VariableHolder(new(t.Controller.BaseController.getJSONDeserializeOutputType(Te))),
                T = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.NewAccountRealEU$outVars")));
            return t.Flow.executeAsyncFlow(function() {
                return u.default.sendGetSetting$Action(o).then(function(f) {
                    n.value = f
                }).then(function() {
                    return c.value = t.Logger.startActiveSpan("NewAccountRealEUPayload", function(f) {
                        f && (f.setAttribute("code.function", "NewAccountRealEUPayload"), f.setAttribute("outsystems.function.key", "204c52fd-bd8e-454a-83c7-3a8589f007c5"), f.setAttribute("outsystems.function.owner.name", "tradershub"), f.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), f.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                        try {
                            return l.safeExecuteJSNode(z4, "NewAccountRealEUPayload", "NewAccountRealEU", {
                                LeverageImpactTrading: t.DataConversion.JSNodeParamConverter.to(g.getCFDLeverage(), t.DataTypes.DataTypes.Text),
                                EmploymentIndustry: t.DataConversion.JSNodeParamConverter.to(g.getFinancialAssessmentEmploymentIndustry(), t.DataTypes.DataTypes.Text),
                                LastName: t.DataConversion.JSNodeParamConverter.to(g.getRealSignupLastName(), t.DataTypes.DataTypes.Text),
                                Residence: t.DataConversion.JSNodeParamConverter.to(g.getSelectedResidence(), t.DataTypes.DataTypes.Text),
                                PlaceOfBirth: t.DataConversion.JSNodeParamConverter.to(g.getRealSignupPlaceOfBirth(), t.DataTypes.DataTypes.Text),
                                EstimatedWorth: t.DataConversion.JSNodeParamConverter.to(g.getFinancialAssessmentEstimatedWorth(), t.DataTypes.DataTypes.Text),
                                CFDTradingDefinition: t.DataConversion.JSNodeParamConverter.to(g.getCFDAllow(), t.DataTypes.DataTypes.Text),
                                DateOfBirth: t.DataConversion.JSNodeParamConverter.to(g.getRealSignupDateofBirth(), t.DataTypes.DataTypes.Text),
                                PostCode: t.DataConversion.JSNodeParamConverter.to(g.getRealSignupAddressPostCode(), t.DataTypes.DataTypes.Text),
                                RequiredInitialMargin: t.DataConversion.JSNodeParamConverter.to(g.getInitialMargin(), t.DataTypes.DataTypes.Text),
                                TIN: t.DataConversion.JSNodeParamConverter.to(g.getRealSignupTIDNumber(), t.DataTypes.DataTypes.Text),
                                Address: t.DataConversion.JSNodeParamConverter.to(g.getRealSignupAddress(), t.DataTypes.DataTypes.Text),
                                AccountOpeningReason: t.DataConversion.JSNodeParamConverter.to(g.getRealSignupAccountOpeningReason(), t.DataTypes.DataTypes.Text),
                                Citizen: t.DataConversion.JSNodeParamConverter.to(g.getSelectedCitizenship(), t.DataTypes.DataTypes.Text),
                                Phone: t.DataConversion.JSNodeParamConverter.to(g.getRealSignupPhone(), t.DataTypes.DataTypes.Text),
                                TradingFrequencyFinancialInstruments: t.DataConversion.JSNodeParamConverter.to(g.getFinancialTradePastYear(), t.DataTypes.DataTypes.Text),
                                FirstName: t.DataConversion.JSNodeParamConverter.to(g.getRealSignupFirstName(), t.DataTypes.DataTypes.Text),
                                EmploymentStatus: t.DataConversion.JSNodeParamConverter.to(g.getRealSignupEmployementStatus(), t.DataTypes.DataTypes.Text),
                                Salutation: t.DataConversion.JSNodeParamConverter.to(g.getSalutation(), t.DataTypes.DataTypes.Text),
                                City: t.DataConversion.JSNodeParamConverter.to(g.getRealSignupAddressTown(), t.DataTypes.DataTypes.Text),
                                Occupation: t.DataConversion.JSNodeParamConverter.to(g.getFinancialAssessmentOccupation(), t.DataTypes.DataTypes.Text),
                                State: t.DataConversion.JSNodeParamConverter.to(g.getRealSignupAddressState(), t.DataTypes.DataTypes.Text),
                                TaxResidence: t.DataConversion.JSNodeParamConverter.to(g.getRealSignupTaxResidence(), t.DataTypes.DataTypes.Text),
                                SourceOfWealth: t.DataConversion.JSNodeParamConverter.to(g.getFinancialAssessmentSourceOfWealth(), t.DataTypes.DataTypes.Text),
                                NetIncome: t.DataConversion.JSNodeParamConverter.to(g.getFinancialAssessmentNetIncome(), t.DataTypes.DataTypes.Text),
                                CFDFrequency: t.DataConversion.JSNodeParamConverter.to(g.getCFDTradePastYear(), t.DataTypes.DataTypes.Text),
                                SourceOfExperience: t.DataConversion.JSNodeParamConverter.to(g.getFinancialExperience(), t.DataTypes.DataTypes.Text),
                                AccountTurnover: t.DataConversion.JSNodeParamConverter.to(g.getFinancialAssessmentAccountTurnover(), t.DataTypes.DataTypes.Text),
                                LeverageTradingHighRiskStopLoss: t.DataConversion.JSNodeParamConverter.to(g.getRiskManagement(), t.DataTypes.DataTypes.Text),
                                CFDExperience: t.DataConversion.JSNodeParamConverter.to(g.getCFDTradingExperience(), t.DataTypes.DataTypes.Text),
                                RiskTolerance: t.DataConversion.JSNodeParamConverter.to(g.getPotentialLost(), t.DataTypes.DataTypes.Text),
                                FatcaDeclaration: t.DataConversion.JSNodeParamConverter.to(g.getRealSignupFatcaDeclaration(), t.DataTypes.DataTypes.Text),
                                EducationLevel: t.DataConversion.JSNodeParamConverter.to(g.getFinancialAssessmentEducationLevel(), t.DataTypes.DataTypes.Text),
                                IncomeSource: t.DataConversion.JSNodeParamConverter.to(g.getFinancialAssessmentIncomeSource(), t.DataTypes.DataTypes.Text),
                                Currency: t.DataConversion.JSNodeParamConverter.to(g.getClientCurrency(), t.DataTypes.DataTypes.Text),
                                TradingExperienceFinancialInstruments: t.DataConversion.JSNodeParamConverter.to(g.getFinancialExperience(), t.DataTypes.DataTypes.Text),
                                SkippedEmploymentDetails: t.DataConversion.JSNodeParamConverter.to(g.getRealSignupNoTaxInformation(), t.DataTypes.DataTypes.Boolean),
                                Payload: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text)
                            }, function(S) {
                                var A = new(l.constructor.getVariableGroupType("tradershub.NewAccountRealEU$newAccountRealEUPayloadJSResult"));
                                return A.payloadOut = t.DataConversion.JSNodeParamConverter.from(S.Payload, t.DataTypes.DataTypes.Text), A
                            }, {}, {})
                        } finally {
                            f && f.end()
                        }
                    }, 1), u.default.derivApiSendMessage$Action(c.value.payloadOut, "", !0, o).then(function(f) {
                        p.value = f
                    })
                }).then(function() {
                    return t.Flow.executeSequence(function() {
                        if (p.value.isErrorOut) T.value.errorCodeOut = p.value.errorCodeOut, T.value.errorMessageOut = p.value.errorMessageOut;
                        else return t.FeedbackMessageService.showFeedbackMessage("Account created successfully.", 1), t.Logger.startActiveSpan("RudderStackSuccess", function(f) {
                            f && (f.setAttribute("code.function", "RudderStackSuccess"), f.setAttribute("outsystems.function.key", "fcea7a71-b5fe-4d01-a399-0c459433702f"), f.setAttribute("outsystems.function.owner.name", "tradershub"), f.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), f.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return l.safeExecuteJSNode(Y4, "RudderStackSuccess", "NewAccountRealEU", null, function(S) {}, {}, {})
                            } finally {
                                f && f.end()
                            }
                        }, 1), y.value.dataOut = t.JSONUtils.deserializeFromJSON(p.value.responseOut, Te, !1), g.setAuthToken(y.value.dataOut.new_account_realAttr.oauth_tokenAttr), g.setActiveLoginId(y.value.dataOut.new_account_realAttr.client_idAttr), d.value = t.Logger.startActiveSpan("AuthorizePayload", function(f) {
                            f && (f.setAttribute("code.function", "AuthorizePayload"), f.setAttribute("outsystems.function.key", "75398b4e-8b8b-444c-8c7a-f8bb80210bdf"), f.setAttribute("outsystems.function.owner.name", "tradershub"), f.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), f.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return l.safeExecuteJSNode(j4, "AuthorizePayload", "NewAccountRealEU", {
                                    AuthToken: t.DataConversion.JSNodeParamConverter.to(y.value.dataOut.new_account_realAttr.oauth_tokenAttr, t.DataTypes.DataTypes.Text),
                                    Payload: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text)
                                }, function(S) {
                                    var A = new(l.constructor.getVariableGroupType("tradershub.NewAccountRealEU$authorizePayloadJSResult"));
                                    return A.payloadOut = t.DataConversion.JSNodeParamConverter.from(S.Payload, t.DataTypes.DataTypes.Text), A
                                }, {}, {})
                            } finally {
                                f && f.end()
                            }
                        }, 1), u.default.derivApiSendMessage$Action(d.value.payloadOut, "", !1, o).then(function(f) {
                            i.value = f
                        }).then(function() {
                            return u.default.sendIDVDocumentDetails$Action(o)
                        }).then(function() {
                            u.default.cleanupAfterRealSignup$Action(o), T.value.isSuccessOut = !0, t.Logger.startActiveSpan("SyncLocalStorage", function(f) {
                                f && (f.setAttribute("code.function", "SyncLocalStorage"), f.setAttribute("outsystems.function.key", "b1f28c39-1367-4990-9cf4-dd5e1db4443a"), f.setAttribute("outsystems.function.owner.name", "tradershub"), f.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), f.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return l.safeExecuteJSNode(K4, "SyncLocalStorage", "NewAccountRealEU", {
                                        Token: t.DataConversion.JSNodeParamConverter.to(y.value.dataOut.new_account_realAttr.oauth_tokenAttr, t.DataTypes.DataTypes.Text),
                                        Response: t.DataConversion.JSNodeParamConverter.to(i.value.responseOut, t.DataTypes.DataTypes.Text)
                                    }, function(S) {}, {}, {})
                                } finally {
                                    f && f.end()
                                }
                            }, 1)
                        })
                    })
                })
            }).then(function() {
                return T.value
            })
        }, function() {
            a && a.end()
        })
    }, 1)
};
u.constructor.registerVariableGroupType("tradershub.NewAccountRealEU$newAccountRealEUPayloadJSResult", [{
    name: "Payload",
    attrName: "payloadOut",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.constructor.registerVariableGroupType("tradershub.NewAccountRealEU$authorizePayloadJSResult", [{
    name: "Payload",
    attrName: "payloadOut",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.constructor.registerVariableGroupType("tradershub.NewAccountRealEU$outVars", [{
    name: "IsSuccess",
    attrName: "isSuccessOut",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Boolean,
    defaultValue: r(function() {
        return !1
    }, "defaultValue")
}, {
    name: "ErrorCode",
    attrName: "errorCodeOut",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "ErrorMessage",
    attrName: "errorMessageOut",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.clientActionProxies.newAccountRealEU$Action = function() {
    return l.executeActionInsideJSNode(u.default.newAccountRealEU$Action.bind(l), t.Controller.BaseViewController.activeScreen ? t.Controller.BaseViewController.activeScreen.callContext() : void 0, function(o) {
        return {
            IsSuccess: t.DataConversion.JSNodeParamConverter.to(o.isSuccessOut, t.DataTypes.DataTypes.Boolean),
            ErrorCode: t.DataConversion.JSNodeParamConverter.to(o.errorCodeOut, t.DataTypes.DataTypes.Text),
            ErrorMessage: t.DataConversion.JSNodeParamConverter.to(o.errorMessageOut, t.DataTypes.DataTypes.Text)
        }
    })
};
u.onApplicationReady$Action = function(o) {
    var a = this.model,
        n = this.controller,
        p = this.idService;
    return t.Logger.startActiveSpan("OnApplicationReady", function(i) {
        return i && (i.setAttribute("code.function", "OnApplicationReady"), i.setAttribute("outsystems.function.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc.#OnApplicationReady"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "SYSTEM_EVENT")), t.Flow.tryFinally(function() {
            o = n.callContext(o);
            var c = new t.DataTypes.VariableHolder,
                d = new t.DataTypes.VariableHolder;
            return t.Flow.executeAsyncFlow(function() {
                return t.Flow.executeSequence(function() {
                    if (!(t.BuiltinFunctions.index(t.BuiltinFunctions.getBookmarkableURL(), "preload-helper", 0, !1, !0) > -1)) return c.value = tm.addFavicon$Action("/tradershub/favicon.png", o), t.Logger.startActiveSpan("GetConfig", function(y) {
                        y && (y.setAttribute("code.function", "GetConfig"), y.setAttribute("outsystems.function.key", "e75ac88b-c8c0-48f9-92a5-db97155c7216"), y.setAttribute("outsystems.function.owner.name", "tradershub"), y.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), y.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                        try {
                            return n.safeExecuteAsyncJSNode(Z4, "GetConfig", "On Application Ready", {
                                LangFromLocalStorage: t.DataConversion.JSNodeParamConverter.to(t.BuiltinFunctions.getCurrentLocale(), t.DataTypes.DataTypes.Text),
                                URL: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text),
                                AppId: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text),
                                Lang: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text)
                            }, function(T) {
                                var f = new(n.constructor.getVariableGroupType("tradershub.OnApplicationReady$getConfigJSResult"));
                                return f.uRLOut = t.DataConversion.JSNodeParamConverter.from(T.URL, t.DataTypes.DataTypes.Text), f.appIdOut = t.DataConversion.JSNodeParamConverter.from(T.AppId, t.DataTypes.DataTypes.Text), f.langOut = t.DataConversion.JSNodeParamConverter.from(T.Lang, t.DataTypes.DataTypes.Text), f
                            }, {}, {})
                        } finally {
                            y && y.end()
                        }
                    }, 1).then(function(y) {
                        d.value = y
                    }).then(function() {
                        return g.setAppId(d.value.appIdOut), g.setURL(d.value.uRLOut), g.setLanguage(d.value.langOut), u.default.initizalizeDerivApi$Action(o), u.default.initGrowthbookAndRudderStack$Action(o)
                    }).then(function() {
                        return u.default.rudderstackIdentifyEvent$Action("", o), t.SystemActions.requireScript(t.Navigation.VersionedURL.getVersionedUrl("scripts/tradershub.UserScripts.LoadFonts.js"), o)
                    }).then(function() {
                        return t.SystemActions.requireScript(t.Navigation.VersionedURL.getVersionedUrl("scripts/tradershub.UserScripts.DerivDatadog.js"), o)
                    }).then(function() {
                        return t.SystemActions.requireScript(t.Navigation.VersionedURL.getVersionedUrl("scripts/tradershub.UserScripts.TrackJS.js"), o)
                    }).then(function() {
                        return t.SystemActions.requireScript(t.Navigation.VersionedURL.getVersionedUrl("scripts/tradershub.UserScripts.GTM.js"), o)
                    }).then(function() {
                        d.value.langOut !== t.BuiltinFunctions.nullTextIdentifier() && t.SystemActions.setCurrentLocale(g.getLanguage(), o)
                    })
                })
            })
        }, function() {
            i && i.end()
        })
    }, 1)
};
u.constructor.registerVariableGroupType("tradershub.OnApplicationReady$getConfigJSResult", [{
    name: "URL",
    attrName: "uRLOut",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AppId",
    attrName: "appIdOut",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "Lang",
    attrName: "langOut",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.clientActionProxies.onApplicationReady$Action = function() {
    return l.executeActionInsideJSNode(u.default.onApplicationReady$Action.bind(l), t.Controller.BaseViewController.activeScreen ? t.Controller.BaseViewController.activeScreen.callContext() : void 0, function(o) {
        return {}
    })
};
u.openDeepLink$Action = function(o, a, n, p) {
    return t.Logger.startActiveSpan("OpenDeepLink", function(i) {
        i && (i.setAttribute("code.function", "OpenDeepLink"), i.setAttribute("outsystems.function.key", "79b28001-97a9-4fe7-8af7-77b708b30c20"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_ACTION"));
        try {
            p = l.callContext(p);
            var c = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.OpenDeepLink$vars")));
            c.value.platformInLocal = o, c.value.loginInLocal = a, c.value.serverInLocal = n;
            var d = new t.DataTypes.VariableHolder;
            d.value = tm.getOS$Action(t.BuiltinFunctions.getUserAgent(), p), t.Logger.startActiveSpan("MtDeeplinkHandler", function(y) {
                y && (y.setAttribute("code.function", "MtDeeplinkHandler"), y.setAttribute("outsystems.function.key", "7b2e3a8e-9e8f-419c-9186-20cf72b8b101"), y.setAttribute("outsystems.function.owner.name", "tradershub"), y.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), y.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                try {
                    return l.safeExecuteJSNode(Q4, "MtDeeplinkHandler", "OpenDeepLink", {
                        Server: t.DataConversion.JSNodeParamConverter.to(c.value.serverInLocal, t.DataTypes.DataTypes.Text),
                        GetOs: t.DataConversion.JSNodeParamConverter.to(d.value.oSOut, t.DataTypes.DataTypes.Text),
                        Platform: t.DataConversion.JSNodeParamConverter.to(c.value.platformInLocal, t.DataTypes.DataTypes.Text),
                        Login: t.DataConversion.JSNodeParamConverter.to(c.value.loginInLocal, t.DataTypes.DataTypes.Text)
                    }, function(T) {}, {}, {})
                } finally {
                    y && y.end()
                }
            }, 1);
            return
        } finally {
            i && i.end()
        }
    }, 1)
};
u.constructor.registerVariableGroupType("tradershub.OpenDeepLink$vars", [{
    name: "Platform",
    attrName: "platformInLocal",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "Login",
    attrName: "loginInLocal",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "Server",
    attrName: "serverInLocal",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.clientActionProxies.openDeepLink$Action = function(o, a, n) {
    return o = o === void 0 ? "" : o, a = a === void 0 ? "" : a, n = n === void 0 ? "" : n, l.executeActionInsideJSNode(u.default.openDeepLink$Action.bind(l, t.DataConversion.JSNodeParamConverter.from(o, t.DataTypes.DataTypes.Text), t.DataConversion.JSNodeParamConverter.from(a, t.DataTypes.DataTypes.Text), t.DataConversion.JSNodeParamConverter.from(n, t.DataTypes.DataTypes.Text)), t.Controller.BaseViewController.activeScreen ? t.Controller.BaseViewController.activeScreen.callContext() : void 0, function(p) {
        return {}
    })
};
u.postCashierCryptoDeposit$Action = function(o, a) {
    return t.Logger.startActiveSpan("PostCashierCryptoDeposit", function(n) {
        return n && (n.setAttribute("code.function", "PostCashierCryptoDeposit"), n.setAttribute("outsystems.function.key", "3061ec0b-8375-4676-bd2e-6a395f30ec72"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_ACTION")), t.Flow.tryFinally(function() {
            a = l.callContext(a);
            var p = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.PostCashierCryptoDeposit$vars")));
            p.value.cashierInLocal = o;
            var i = new t.DataTypes.VariableHolder,
                c = new t.DataTypes.VariableHolder,
                d = new t.DataTypes.VariableHolder,
                y = new t.DataTypes.VariableHolder(new(t.Controller.BaseController.getJSONDeserializeOutputType(B))),
                T = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.PostCashierCryptoDeposit$outVars")));
            return t.Flow.executeAsyncFlow(function() {
                return d.value = t.Logger.startActiveSpan("Payload", function(f) {
                    f && (f.setAttribute("code.function", "Payload"), f.setAttribute("outsystems.function.key", "8e79ae7b-fdc8-4052-b60c-ffedff1e967c"), f.setAttribute("outsystems.function.owner.name", "tradershub"), f.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), f.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                    try {
                        return l.safeExecuteJSNode(e8, "Payload", "PostCashierCryptoDeposit", {
                            Cashier: t.DataConversion.JSNodeParamConverter.to(p.value.cashierInLocal, t.DataTypes.DataTypes.Text),
                            Payload: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text)
                        }, function(S) {
                            var A = new(l.constructor.getVariableGroupType("tradershub.PostCashierCryptoDeposit$payloadJSResult"));
                            return A.payloadOut = t.DataConversion.JSNodeParamConverter.from(S.Payload, t.DataTypes.DataTypes.Text), A
                        }, {}, {})
                    } finally {
                        f && f.end()
                    }
                }, 1), u.default.derivApiSendMessage$Action(d.value.payloadOut, "cashier", !0, a).then(function(f) {
                    i.value = f
                }).then(function() {
                    i.value.isErrorOut ? T.value.isErrorOut = !0 : (c.value = t.Logger.startActiveSpan("ModifyData", function(f) {
                        f && (f.setAttribute("code.function", "ModifyData"), f.setAttribute("outsystems.function.key", "7c70cf90-f94e-470b-97ba-b58962bb5b06"), f.setAttribute("outsystems.function.owner.name", "tradershub"), f.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), f.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                        try {
                            return l.safeExecuteJSNode(X4, "ModifyData", "PostCashierCryptoDeposit", {
                                Data: t.DataConversion.JSNodeParamConverter.to(i.value.responseOut, t.DataTypes.DataTypes.Text),
                                Response: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text)
                            }, function(S) {
                                var A = new(l.constructor.getVariableGroupType("tradershub.PostCashierCryptoDeposit$modifyDataJSResult"));
                                return A.responseOut = t.DataConversion.JSNodeParamConverter.from(S.Response, t.DataTypes.DataTypes.Text), A
                            }, {}, {})
                        } finally {
                            f && f.end()
                        }
                    }, 1), y.value.dataOut = t.JSONUtils.deserializeFromJSON(c.value.responseOut, B, !1), T.value.responseOut = y.value.dataOut)
                })
            }).then(function() {
                return T.value
            })
        }, function() {
            n && n.end()
        })
    }, 1)
};
u.constructor.registerVariableGroupType("tradershub.PostCashierCryptoDeposit$vars", [{
    name: "Cashier",
    attrName: "cashierInLocal",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "deposit"
    }, "defaultValue")
}]);
u.constructor.registerVariableGroupType("tradershub.PostCashierCryptoDeposit$modifyDataJSResult", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.constructor.registerVariableGroupType("tradershub.PostCashierCryptoDeposit$payloadJSResult", [{
    name: "Payload",
    attrName: "payloadOut",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.constructor.registerVariableGroupType("tradershub.PostCashierCryptoDeposit$outVars", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new B
    }, "defaultValue"),
    complexType: B
}, {
    name: "IsError",
    attrName: "isErrorOut",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Boolean,
    defaultValue: r(function() {
        return !1
    }, "defaultValue")
}]);
u.clientActionProxies.postCashierCryptoDeposit$Action = function(o) {
    return o = o === void 0 ? "deposit" : o, l.executeActionInsideJSNode(u.default.postCashierCryptoDeposit$Action.bind(l, t.DataConversion.JSNodeParamConverter.from(o, t.DataTypes.DataTypes.Text)), t.Controller.BaseViewController.activeScreen ? t.Controller.BaseViewController.activeScreen.callContext() : void 0, function(a) {
        return {
            Response: a.responseOut,
            IsError: t.DataConversion.JSNodeParamConverter.to(a.isErrorOut, t.DataTypes.DataTypes.Boolean)
        }
    })
};
u.postCashierCryptoWithdraw$Action = function(o, a, n, p, i, c) {
    return t.Logger.startActiveSpan("PostCashierCryptoWithdraw", function(d) {
        return d && (d.setAttribute("code.function", "PostCashierCryptoWithdraw"), d.setAttribute("outsystems.function.key", "1951ef44-74f9-4696-97f2-4fbeeadc8632"), d.setAttribute("outsystems.function.owner.name", "tradershub"), d.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), d.setAttribute("outsystems.function.type", "CLIENT_ACTION")), t.Flow.tryFinally(function() {
            c = l.callContext(c);
            var y = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.PostCashierCryptoWithdraw$vars")));
            y.value.verificationCodeInLocal = o, y.value.addressInLocal = a, y.value.amountInLocal = n, y.value.estimatedFeeUniqueIdInLocal = p, y.value.dryRunInLocal = i;
            var T = new t.DataTypes.VariableHolder,
                f = new t.DataTypes.VariableHolder,
                S = new t.DataTypes.VariableHolder,
                A = new t.DataTypes.VariableHolder(new(t.Controller.BaseController.getJSONDeserializeOutputType(B))),
                b = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.PostCashierCryptoWithdraw$outVars")));
            return t.Flow.executeAsyncFlow(function() {
                return S.value = t.Logger.startActiveSpan("Payload", function(x) {
                    x && (x.setAttribute("code.function", "Payload"), x.setAttribute("outsystems.function.key", "ffb1f414-fd4a-4963-b6b6-d431aa42ded5"), x.setAttribute("outsystems.function.owner.name", "tradershub"), x.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), x.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                    try {
                        return l.safeExecuteJSNode(r8, "Payload", "PostCashierCryptoWithdraw", {
                            Amount: t.DataConversion.JSNodeParamConverter.to(y.value.amountInLocal, t.DataTypes.DataTypes.Decimal),
                            EstimatedFeeUniqueId: t.DataConversion.JSNodeParamConverter.to(y.value.estimatedFeeUniqueIdInLocal, t.DataTypes.DataTypes.Text),
                            VerificationCode: t.DataConversion.JSNodeParamConverter.to(y.value.verificationCodeInLocal, t.DataTypes.DataTypes.Text),
                            Address: t.DataConversion.JSNodeParamConverter.to(y.value.addressInLocal, t.DataTypes.DataTypes.Text),
                            DryRun: t.DataConversion.JSNodeParamConverter.to(y.value.dryRunInLocal, t.DataTypes.DataTypes.Boolean),
                            Payload: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text)
                        }, function(v) {
                            var R = new(l.constructor.getVariableGroupType("tradershub.PostCashierCryptoWithdraw$payloadJSResult"));
                            return R.payloadOut = t.DataConversion.JSNodeParamConverter.from(v.Payload, t.DataTypes.DataTypes.Text), R
                        }, {}, {})
                    } finally {
                        x && x.end()
                    }
                }, 1), u.default.derivApiSendMessage$Action(S.value.payloadOut, "cashier", !0, c).then(function(x) {
                    T.value = x
                }).then(function() {
                    T.value.isErrorOut ? b.value.isErrorOut = !0 : (f.value = t.Logger.startActiveSpan("ModifyData", function(x) {
                        x && (x.setAttribute("code.function", "ModifyData"), x.setAttribute("outsystems.function.key", "8bbef8c1-a457-4182-9167-ecf3facf8eee"), x.setAttribute("outsystems.function.owner.name", "tradershub"), x.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), x.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                        try {
                            return l.safeExecuteJSNode(t8, "ModifyData", "PostCashierCryptoWithdraw", {
                                Data: t.DataConversion.JSNodeParamConverter.to(T.value.responseOut, t.DataTypes.DataTypes.Text),
                                Response: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text)
                            }, function(v) {
                                var R = new(l.constructor.getVariableGroupType("tradershub.PostCashierCryptoWithdraw$modifyDataJSResult"));
                                return R.responseOut = t.DataConversion.JSNodeParamConverter.from(v.Response, t.DataTypes.DataTypes.Text), R
                            }, {}, {})
                        } finally {
                            x && x.end()
                        }
                    }, 1), A.value.dataOut = t.JSONUtils.deserializeFromJSON(f.value.responseOut, B, !1), b.value.responseOut = A.value.dataOut)
                })
            }).then(function() {
                return b.value
            })
        }, function() {
            d && d.end()
        })
    }, 1)
};
u.constructor.registerVariableGroupType("tradershub.PostCashierCryptoWithdraw$vars", [{
    name: "VerificationCode",
    attrName: "verificationCodeInLocal",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "Address",
    attrName: "addressInLocal",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "Amount",
    attrName: "amountInLocal",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Decimal,
    defaultValue: r(function() {
        return t.DataTypes.Decimal.defaultValue
    }, "defaultValue")
}, {
    name: "EstimatedFeeUniqueId",
    attrName: "estimatedFeeUniqueIdInLocal",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "DryRun",
    attrName: "dryRunInLocal",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Boolean,
    defaultValue: r(function() {
        return !1
    }, "defaultValue")
}]);
u.constructor.registerVariableGroupType("tradershub.PostCashierCryptoWithdraw$modifyDataJSResult", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.constructor.registerVariableGroupType("tradershub.PostCashierCryptoWithdraw$payloadJSResult", [{
    name: "Payload",
    attrName: "payloadOut",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.constructor.registerVariableGroupType("tradershub.PostCashierCryptoWithdraw$outVars", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new B
    }, "defaultValue"),
    complexType: B
}, {
    name: "IsError",
    attrName: "isErrorOut",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Boolean,
    defaultValue: r(function() {
        return !1
    }, "defaultValue")
}]);
u.clientActionProxies.postCashierCryptoWithdraw$Action = function(o, a, n, p, i) {
    return o = o === void 0 ? "" : o, a = a === void 0 ? "" : a, n = n === void 0 ? t.DataTypes.Decimal.defaultValue : n, p = p === void 0 ? "" : p, i = i === void 0 ? !1 : i, l.executeActionInsideJSNode(u.default.postCashierCryptoWithdraw$Action.bind(l, t.DataConversion.JSNodeParamConverter.from(o, t.DataTypes.DataTypes.Text), t.DataConversion.JSNodeParamConverter.from(a, t.DataTypes.DataTypes.Text), t.DataConversion.JSNodeParamConverter.from(n, t.DataTypes.DataTypes.Decimal), t.DataConversion.JSNodeParamConverter.from(p, t.DataTypes.DataTypes.Text), t.DataConversion.JSNodeParamConverter.from(i, t.DataTypes.DataTypes.Boolean)), t.Controller.BaseViewController.activeScreen ? t.Controller.BaseViewController.activeScreen.callContext() : void 0, function(c) {
        return {
            Response: c.responseOut,
            IsError: t.DataConversion.JSNodeParamConverter.to(c.isErrorOut, t.DataTypes.DataTypes.Boolean)
        }
    })
};
u.postCashierFiat$Action = function(o, a, n) {
    return t.Logger.startActiveSpan("PostCashierFiat", function(p) {
        return p && (p.setAttribute("code.function", "PostCashierFiat"), p.setAttribute("outsystems.function.key", "feb9f7d1-319e-4c2a-a44a-3da22288c570"), p.setAttribute("outsystems.function.owner.name", "tradershub"), p.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), p.setAttribute("outsystems.function.type", "CLIENT_ACTION")), t.Flow.tryFinally(function() {
            n = l.callContext(n);
            var i = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.PostCashierFiat$vars")));
            i.value.cashierInLocal = o, i.value.verificationCodeInLocal = a;
            var c = new t.DataTypes.VariableHolder,
                d = new t.DataTypes.VariableHolder,
                y = new t.DataTypes.VariableHolder(new(t.Controller.BaseController.getJSONDeserializeOutputType(H))),
                T = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.PostCashierFiat$outVars")));
            return t.Flow.executeAsyncFlow(function() {
                return d.value = t.Logger.startActiveSpan("Payload", function(f) {
                    f && (f.setAttribute("code.function", "Payload"), f.setAttribute("outsystems.function.key", "1dce43d8-3a6b-4999-b802-35554769a553"), f.setAttribute("outsystems.function.owner.name", "tradershub"), f.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), f.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                    try {
                        return l.safeExecuteJSNode(a8, "Payload", "PostCashierFiat", {
                            verification_code: t.DataConversion.JSNodeParamConverter.to(i.value.verificationCodeInLocal, t.DataTypes.DataTypes.Text),
                            Cashier: t.DataConversion.JSNodeParamConverter.to(i.value.cashierInLocal, t.DataTypes.DataTypes.Text),
                            Payload: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text)
                        }, function(S) {
                            var A = new(l.constructor.getVariableGroupType("tradershub.PostCashierFiat$payloadJSResult"));
                            return A.payloadOut = t.DataConversion.JSNodeParamConverter.from(S.Payload, t.DataTypes.DataTypes.Text), A
                        }, {}, {})
                    } finally {
                        f && f.end()
                    }
                }, 1), u.default.derivApiSendMessage$Action(d.value.payloadOut, "cashier", !0, n).then(function(f) {
                    c.value = f
                }).then(function() {
                    y.value.dataOut = t.JSONUtils.deserializeFromJSON(c.value.responseOut, H, !1), T.value.responseOut = y.value.dataOut
                })
            }).then(function() {
                return T.value
            })
        }, function() {
            p && p.end()
        })
    }, 1)
};
u.constructor.registerVariableGroupType("tradershub.PostCashierFiat$vars", [{
    name: "Cashier",
    attrName: "cashierInLocal",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return "deposit"
    }, "defaultValue")
}, {
    name: "VerificationCode",
    attrName: "verificationCodeInLocal",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.constructor.registerVariableGroupType("tradershub.PostCashierFiat$payloadJSResult", [{
    name: "Payload",
    attrName: "payloadOut",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.constructor.registerVariableGroupType("tradershub.PostCashierFiat$outVars", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new H
    }, "defaultValue"),
    complexType: H
}]);
u.clientActionProxies.postCashierFiat$Action = function(o, a) {
    return o = o === void 0 ? "deposit" : o, a = a === void 0 ? "" : a, l.executeActionInsideJSNode(u.default.postCashierFiat$Action.bind(l, t.DataConversion.JSNodeParamConverter.from(o, t.DataTypes.DataTypes.Text), t.DataConversion.JSNodeParamConverter.from(a, t.DataTypes.DataTypes.Text)), t.Controller.BaseViewController.activeScreen ? t.Controller.BaseViewController.activeScreen.callContext() : void 0, function(n) {
        return {
            Response: n.responseOut
        }
    })
};
u.postSignupActions$Action = function(o, a) {
    return t.Logger.startActiveSpan("PostSignupActions", function(n) {
        return n && (n.setAttribute("code.function", "PostSignupActions"), n.setAttribute("outsystems.function.key", "3ad98d2f-6ab2-4c90-979b-0c5fd51945bf"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_ACTION")), t.Flow.tryFinally(function() {
            a = l.callContext(a);
            var p = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.PostSignupActions$vars")));
            p.value.redirectToDerivAppInLocal = o;
            var i = new t.DataTypes.VariableHolder,
                c = new t.DataTypes.VariableHolder,
                d = new t.DataTypes.VariableHolder,
                y = new t.DataTypes.VariableHolder,
                T = new t.DataTypes.VariableHolder,
                f = new t.DataTypes.VariableHolder,
                S = new t.DataTypes.VariableHolder(new(t.Controller.BaseController.getJSONDeserializeOutputType(Q))),
                A = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.PostSignupActions$outVars")));
            return t.Flow.executeAsyncFlow(function() {
                return u.default.cleanupAfterSignup$Action(a), d.value = t.Logger.startActiveSpan("AuthorizePayload", function(b) {
                    b && (b.setAttribute("code.function", "AuthorizePayload"), b.setAttribute("outsystems.function.key", "13afd588-1954-4224-b0e7-0027c8897db4"), b.setAttribute("outsystems.function.owner.name", "tradershub"), b.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), b.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                    try {
                        return l.safeExecuteJSNode(o8, "AuthorizePayload", "PostSignupActions", {
                            AuthToken: t.DataConversion.JSNodeParamConverter.to(g.getAuthToken(), t.DataTypes.DataTypes.Text),
                            Payload: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text)
                        }, function(x) {
                            var v = new(l.constructor.getVariableGroupType("tradershub.PostSignupActions$authorizePayloadJSResult"));
                            return v.payloadOut = t.DataConversion.JSNodeParamConverter.from(x.Payload, t.DataTypes.DataTypes.Text), v
                        }, {}, {})
                    } finally {
                        b && b.end()
                    }
                }, 1), u.default.derivApiSendMessage$Action(d.value.payloadOut, "", !1, a).then(function(b) {
                    c.value = b
                }).then(function() {
                    return S.value.dataOut = t.JSONUtils.deserializeFromJSON(c.value.responseOut, Q, !1), u.default.rudderstackIdentifyEvent$Action(t.BuiltinFunctions.longIntegerToText(S.value.dataOut.authorizeAttr.user_idAttr), a), f.value = t.Logger.startActiveSpan("CheckLandingCompany", function(b) {
                        b && (b.setAttribute("code.function", "CheckLandingCompany"), b.setAttribute("outsystems.function.key", "ae4d93d6-d0d4-430c-9506-a777252df7d4"), b.setAttribute("outsystems.function.owner.name", "tradershub"), b.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), b.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                        try {
                            return l.safeExecuteJSNode(u8, "CheckLandingCompany", "PostSignupActions", {
                                Response: t.DataConversion.JSNodeParamConverter.to(c.value.responseOut, t.DataTypes.DataTypes.Text),
                                IsEU: t.DataConversion.JSNodeParamConverter.to(!1, t.DataTypes.DataTypes.Boolean)
                            }, function(x) {
                                var v = new(l.constructor.getVariableGroupType("tradershub.PostSignupActions$checkLandingCompanyJSResult"));
                                return v.isEUOut = t.DataConversion.JSNodeParamConverter.from(x.IsEU, t.DataTypes.DataTypes.Boolean), v
                            }, {}, {})
                        } finally {
                            b && b.end()
                        }
                    }, 1), g.setIsEuUser(f.value.isEUOut), y.value = t.Logger.startActiveSpan("SetAccountSettingsPayload", function(b) {
                        b && (b.setAttribute("code.function", "SetAccountSettingsPayload"), b.setAttribute("outsystems.function.key", "384afeea-b668-416a-9351-9223f20c1281"), b.setAttribute("outsystems.function.owner.name", "tradershub"), b.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), b.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                        try {
                            return l.safeExecuteJSNode(s8, "SetAccountSettingsPayload", "PostSignupActions", {
                                Citizen: t.DataConversion.JSNodeParamConverter.to(g.getSelectedCitizenship(), t.DataTypes.DataTypes.Text),
                                Payload: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text)
                            }, function(x) {
                                var v = new(l.constructor.getVariableGroupType("tradershub.PostSignupActions$setAccountSettingsPayloadJSResult"));
                                return v.payloadOut = t.DataConversion.JSNodeParamConverter.from(x.Payload, t.DataTypes.DataTypes.Text), v
                            }, {}, {})
                        } finally {
                            b && b.end()
                        }
                    }, 1), u.default.setAccountSettings$Action(y.value.payloadOut, a)
                }).then(function() {
                    T.value = t.Logger.startActiveSpan("GetIDVCountry", function(b) {
                        b && (b.setAttribute("code.function", "GetIDVCountry"), b.setAttribute("outsystems.function.key", "a11001ce-bb5f-42d5-929e-056986b91a65"), b.setAttribute("outsystems.function.owner.name", "tradershub"), b.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), b.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                        try {
                            return l.safeExecuteJSNode(n8, "GetIDVCountry", "PostSignupActions", {
                                ResidenceList: t.DataConversion.JSNodeParamConverter.to(g.getRawResidenceListResponse(), t.DataTypes.DataTypes.Text),
                                Residence: t.DataConversion.JSNodeParamConverter.to(g.getSelectedResidence(), t.DataTypes.DataTypes.Text),
                                IsIDVSupported: t.DataConversion.JSNodeParamConverter.to(!1, t.DataTypes.DataTypes.Boolean)
                            }, function(x) {
                                var v = new(l.constructor.getVariableGroupType("tradershub.PostSignupActions$getIDVCountryJSResult"));
                                return v.isIDVSupportedOut = t.DataConversion.JSNodeParamConverter.from(x.IsIDVSupported, t.DataTypes.DataTypes.Boolean), v
                            }, {}, {})
                        } finally {
                            b && b.end()
                        }
                    }, 1), g.setRealSignupIsIDVSupported(T.value.isIDVSupportedOut), A.value.isEUOut = f.value.isEUOut, i.value = u.default.featureFlagValueByName$Action("EURealAccountCreation", a), t.Logger.startActiveSpan("SyncLocalStorage", function(b) {
                        b && (b.setAttribute("code.function", "SyncLocalStorage"), b.setAttribute("outsystems.function.key", "a1df1b67-e680-436e-b1b2-02f91d1441d8"), b.setAttribute("outsystems.function.owner.name", "tradershub"), b.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), b.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                        try {
                            return l.safeExecuteJSNode(i8, "SyncLocalStorage", "PostSignupActions", {
                                ContinueEURealAccountCreation: t.DataConversion.JSNodeParamConverter.to(i.value.isEnabledOut, t.DataTypes.DataTypes.Boolean),
                                RedirectToDerivApp: t.DataConversion.JSNodeParamConverter.to(p.value.redirectToDerivAppInLocal, t.DataTypes.DataTypes.Boolean),
                                IsEU: t.DataConversion.JSNodeParamConverter.to(f.value.isEUOut, t.DataTypes.DataTypes.Boolean),
                                Token: t.DataConversion.JSNodeParamConverter.to(g.getAuthToken(), t.DataTypes.DataTypes.Text),
                                Response: t.DataConversion.JSNodeParamConverter.to(c.value.responseOut, t.DataTypes.DataTypes.Text)
                            }, function(x) {}, {}, {})
                        } finally {
                            b && b.end()
                        }
                    }, 1)
                })
            }).then(function() {
                return A.value
            })
        }, function() {
            n && n.end()
        })
    }, 1)
};
u.constructor.registerVariableGroupType("tradershub.PostSignupActions$vars", [{
    name: "RedirectToDerivApp",
    attrName: "redirectToDerivAppInLocal",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Boolean,
    defaultValue: r(function() {
        return !1
    }, "defaultValue")
}]);
u.constructor.registerVariableGroupType("tradershub.PostSignupActions$authorizePayloadJSResult", [{
    name: "Payload",
    attrName: "payloadOut",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.constructor.registerVariableGroupType("tradershub.PostSignupActions$setAccountSettingsPayloadJSResult", [{
    name: "Payload",
    attrName: "payloadOut",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.constructor.registerVariableGroupType("tradershub.PostSignupActions$getIDVCountryJSResult", [{
    name: "IsIDVSupported",
    attrName: "isIDVSupportedOut",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Boolean,
    defaultValue: r(function() {
        return !1
    }, "defaultValue")
}]);
u.constructor.registerVariableGroupType("tradershub.PostSignupActions$checkLandingCompanyJSResult", [{
    name: "IsEU",
    attrName: "isEUOut",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Boolean,
    defaultValue: r(function() {
        return !1
    }, "defaultValue")
}]);
u.constructor.registerVariableGroupType("tradershub.PostSignupActions$outVars", [{
    name: "IsEU",
    attrName: "isEUOut",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Boolean,
    defaultValue: r(function() {
        return !1
    }, "defaultValue")
}]);
u.clientActionProxies.postSignupActions$Action = function(o) {
    return o = o === void 0 ? !1 : o, l.executeActionInsideJSNode(u.default.postSignupActions$Action.bind(l, t.DataConversion.JSNodeParamConverter.from(o, t.DataTypes.DataTypes.Boolean)), t.Controller.BaseViewController.activeScreen ? t.Controller.BaseViewController.activeScreen.callContext() : void 0, function(a) {
        return {
            IsEU: t.DataConversion.JSNodeParamConverter.to(a.isEUOut, t.DataTypes.DataTypes.Boolean)
        }
    })
};
u.redirectToExternalURL$Action = function(o, a, n) {
    return t.Logger.startActiveSpan("RedirectToExternalURL", function(p) {
        p && (p.setAttribute("code.function", "RedirectToExternalURL"), p.setAttribute("outsystems.function.key", "d109cb8f-87ed-4036-a166-535e83c2c7b6"), p.setAttribute("outsystems.function.owner.name", "tradershub"), p.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), p.setAttribute("outsystems.function.type", "CLIENT_ACTION"));
        try {
            n = l.callContext(n);
            var i = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.RedirectToExternalURL$vars")));
            i.value.uRLInLocal = o, i.value.openInNewTabInLocal = a, t.Logger.startActiveSpan("Redirect", function(c) {
                c && (c.setAttribute("code.function", "Redirect"), c.setAttribute("outsystems.function.key", "91f79fef-b000-4488-8cd3-3793d40c806f"), c.setAttribute("outsystems.function.owner.name", "tradershub"), c.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), c.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                try {
                    return l.safeExecuteJSNode(c8, "Redirect", "RedirectToExternalURL", {
                        URL: t.DataConversion.JSNodeParamConverter.to(i.value.uRLInLocal, t.DataTypes.DataTypes.Text),
                        OpenInNewTab: t.DataConversion.JSNodeParamConverter.to(i.value.openInNewTabInLocal, t.DataTypes.DataTypes.Boolean)
                    }, function(d) {}, {}, {})
                } finally {
                    c && c.end()
                }
            }, 1);
            return
        } finally {
            p && p.end()
        }
    }, 1)
};
u.constructor.registerVariableGroupType("tradershub.RedirectToExternalURL$vars", [{
    name: "URL",
    attrName: "uRLInLocal",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "OpenInNewTab",
    attrName: "openInNewTabInLocal",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Boolean,
    defaultValue: r(function() {
        return !1
    }, "defaultValue")
}]);
u.clientActionProxies.redirectToExternalURL$Action = function(o, a) {
    return o = o === void 0 ? "" : o, a = a === void 0 ? !1 : a, l.executeActionInsideJSNode(u.default.redirectToExternalURL$Action.bind(l, t.DataConversion.JSNodeParamConverter.from(o, t.DataTypes.DataTypes.Text), t.DataConversion.JSNodeParamConverter.from(a, t.DataTypes.DataTypes.Boolean)), t.Controller.BaseViewController.activeScreen ? t.Controller.BaseViewController.activeScreen.callContext() : void 0, function(n) {
        return {}
    })
};
u.rudderstackIdentifyEvent$Action = function(o, a) {
    return t.Logger.startActiveSpan("RudderstackIdentifyEvent", function(n) {
        n && (n.setAttribute("code.function", "RudderstackIdentifyEvent"), n.setAttribute("outsystems.function.key", "fc638f56-ebf5-4d97-b98b-9c11fd8958b6"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_ACTION"));
        try {
            a = l.callContext(a);
            var p = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.RudderstackIdentifyEvent$vars")));
            p.value.userIdInLocal = o, t.Logger.startActiveSpan("JavaScript1", function(i) {
                i && (i.setAttribute("code.function", "JavaScript1"), i.setAttribute("outsystems.function.key", "ba887a5d-7907-4a7f-8ec9-8f90c9fe5cda"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                try {
                    return l.safeExecuteJSNode(l8, "JavaScript1", "RudderstackIdentifyEvent", {
                        UserId: t.DataConversion.JSNodeParamConverter.to(p.value.userIdInLocal, t.DataTypes.DataTypes.Text)
                    }, function(c) {}, {}, {})
                } finally {
                    i && i.end()
                }
            }, 1);
            return
        } finally {
            n && n.end()
        }
    }, 1)
};
u.constructor.registerVariableGroupType("tradershub.RudderstackIdentifyEvent$vars", [{
    name: "UserId",
    attrName: "userIdInLocal",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.clientActionProxies.rudderstackIdentifyEvent$Action = function(o) {
    return o = o === void 0 ? "" : o, l.executeActionInsideJSNode(u.default.rudderstackIdentifyEvent$Action.bind(l, t.DataConversion.JSNodeParamConverter.from(o, t.DataTypes.DataTypes.Text)), t.Controller.BaseViewController.activeScreen ? t.Controller.BaseViewController.activeScreen.callContext() : void 0, function(a) {
        return {}
    })
};
u.sendAuthorize$Action = function(o, a) {
    return t.Logger.startActiveSpan("SendAuthorize", function(n) {
        return n && (n.setAttribute("code.function", "SendAuthorize"), n.setAttribute("outsystems.function.key", "455be5e4-1117-4d84-99cc-decf8bfb75aa"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_ACTION")), t.Flow.tryFinally(function() {
            a = l.callContext(a);
            var p = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.SendAuthorize$vars")));
            p.value.setAccountsListInLocal = o;
            var i = new t.DataTypes.VariableHolder,
                c = new t.DataTypes.VariableHolder,
                d = new t.DataTypes.VariableHolder,
                y = new t.DataTypes.VariableHolder(new(t.Controller.BaseController.getJSONDeserializeOutputType(Q))),
                T = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.SendAuthorize$outVars")));
            return t.Flow.executeAsyncFlow(function() {
                return t.Flow.executeSequence(function() {
                    if (g.getAuthToken() !== t.BuiltinFunctions.nullTextIdentifier()) return d.value = t.Logger.startActiveSpan("AuthorizePayload", function(f) {
                        f && (f.setAttribute("code.function", "AuthorizePayload"), f.setAttribute("outsystems.function.key", "595fd88c-7a31-4f7e-af15-bfcf1efff8ba"), f.setAttribute("outsystems.function.owner.name", "tradershub"), f.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), f.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                        try {
                            return l.safeExecuteJSNode(d8, "AuthorizePayload", "SendAuthorize", {
                                AuthToken: t.DataConversion.JSNodeParamConverter.to(g.getAuthToken(), t.DataTypes.DataTypes.Text),
                                Payload: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text)
                            }, function(S) {
                                var A = new(l.constructor.getVariableGroupType("tradershub.SendAuthorize$authorizePayloadJSResult"));
                                return A.payloadOut = t.DataConversion.JSNodeParamConverter.from(S.Payload, t.DataTypes.DataTypes.Text), A
                            }, {}, {})
                        } finally {
                            f && f.end()
                        }
                    }, 1), u.default.derivApiSendMessage$Action(d.value.payloadOut, "authorize", !1, a).then(function(f) {
                        c.value = f
                    }).then(function() {
                        if (c.value.isErrorOut) throw T.value.isErrorOut = c.value.isErrorOut, T.value.errorMessageOut = c.value.errorMessageOut, g.setAuthToken(t.BuiltinFunctions.nullTextIdentifier()), g.setActiveLoginId(t.BuiltinFunctions.nullTextIdentifier()), new t.Exceptions.Exceptions.InvalidLoginException("Invalid Token");
                        y.value.dataOut = t.JSONUtils.deserializeFromJSON(c.value.responseOut, Q, !1), u.default.rudderstackIdentifyEvent$Action(t.BuiltinFunctions.longIntegerToText(y.value.dataOut.authorizeAttr.user_idAttr), a), i.value = t.SystemActions.listFilter(y.value.dataOut.authorizeAttr.account_listAttr, function(f) {
                            return f.is_disabledAttr === 0
                        }, a), T.value.responseOut = y.value.dataOut, T.value.responseOut.authorizeAttr.account_listAttr = i.value.filteredListOut, g.setClientCurrency(y.value.dataOut.authorizeAttr.currencyAttr), p.value.setAccountsListInLocal && t.Logger.startActiveSpan("SeAccountsList", function(f) {
                            f && (f.setAttribute("code.function", "SeAccountsList"), f.setAttribute("outsystems.function.key", "f3f9ef33-e1b1-4b3f-8b64-1740df2d2164"), f.setAttribute("outsystems.function.owner.name", "tradershub"), f.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), f.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return l.safeExecuteJSNode(p8, "SeAccountsList", "SendAuthorize", {
                                    AuthorizeResponse: t.DataConversion.JSNodeParamConverter.to(c.value.responseOut, t.DataTypes.DataTypes.Text)
                                }, function(S) {}, {}, {})
                            } finally {
                                f && f.end()
                            }
                        }, 1)
                    })
                })
            }).then(function() {
                return T.value
            })
        }, function() {
            n && n.end()
        })
    }, 1)
};
u.constructor.registerVariableGroupType("tradershub.SendAuthorize$vars", [{
    name: "SetAccountsList",
    attrName: "setAccountsListInLocal",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Boolean,
    defaultValue: r(function() {
        return !1
    }, "defaultValue")
}]);
u.constructor.registerVariableGroupType("tradershub.SendAuthorize$authorizePayloadJSResult", [{
    name: "Payload",
    attrName: "payloadOut",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.constructor.registerVariableGroupType("tradershub.SendAuthorize$outVars", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new Q
    }, "defaultValue"),
    complexType: Q
}, {
    name: "IsError",
    attrName: "isErrorOut",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Boolean,
    defaultValue: r(function() {
        return !1
    }, "defaultValue")
}, {
    name: "ErrorMessage",
    attrName: "errorMessageOut",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.clientActionProxies.sendAuthorize$Action = function(o) {
    return o = o === void 0 ? !1 : o, l.executeActionInsideJSNode(u.default.sendAuthorize$Action.bind(l, t.DataConversion.JSNodeParamConverter.from(o, t.DataTypes.DataTypes.Boolean)), t.Controller.BaseViewController.activeScreen ? t.Controller.BaseViewController.activeScreen.callContext() : void 0, function(a) {
        return {
            Response: a.responseOut,
            IsError: t.DataConversion.JSNodeParamConverter.to(a.isErrorOut, t.DataTypes.DataTypes.Boolean),
            ErrorMessage: t.DataConversion.JSNodeParamConverter.to(a.errorMessageOut, t.DataTypes.DataTypes.Text)
        }
    })
};
u.sendGetSetting$Action = function(o) {
    return t.Logger.startActiveSpan("SendGetSetting", function(a) {
        return a && (a.setAttribute("code.function", "SendGetSetting"), a.setAttribute("outsystems.function.key", "5c009e7b-61f7-49d8-82fc-68203484a77c"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_ACTION")), t.Flow.tryFinally(function() {
            o = l.callContext(o);
            var n = new t.DataTypes.VariableHolder,
                p = new t.DataTypes.VariableHolder(new(t.Controller.BaseController.getJSONDeserializeOutputType(em))),
                i = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.SendGetSetting$outVars")));
            return t.Flow.executeAsyncFlow(function() {
                return u.default.derivApiSendMessage$Action("", "get_settings", !0, o).then(function(c) {
                    n.value = c
                }).then(function() {
                    p.value.dataOut = t.JSONUtils.deserializeFromJSON(n.value.responseOut, em, !1), i.value.getSettingResponseOut = t.DataConversion.JSConversions.typeConvertRecord(p.value.dataOut, new $f, function(c, d) {
                        return d = c.get_settingsAttr, d
                    }), i.value.isErrorOut = n.value.isErrorOut, i.value.errorCodeOut = n.value.errorCodeOut, i.value.errorMessageOut = n.value.errorMessageOut
                })
            }).then(function() {
                return i.value
            })
        }, function() {
            a && a.end()
        })
    }, 1)
};
u.constructor.registerVariableGroupType("tradershub.SendGetSetting$outVars", [{
    name: "GetSettingResponse",
    attrName: "getSettingResponseOut",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new $f
    }, "defaultValue"),
    complexType: $f
}, {
    name: "IsError",
    attrName: "isErrorOut",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Boolean,
    defaultValue: r(function() {
        return !1
    }, "defaultValue")
}, {
    name: "ErrorCode",
    attrName: "errorCodeOut",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "ErrorMessage",
    attrName: "errorMessageOut",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.clientActionProxies.sendGetSetting$Action = function() {
    return l.executeActionInsideJSNode(u.default.sendGetSetting$Action.bind(l), t.Controller.BaseViewController.activeScreen ? t.Controller.BaseViewController.activeScreen.callContext() : void 0, function(o) {
        return {
            GetSettingResponse: o.getSettingResponseOut,
            IsError: t.DataConversion.JSNodeParamConverter.to(o.isErrorOut, t.DataTypes.DataTypes.Boolean),
            ErrorCode: t.DataConversion.JSNodeParamConverter.to(o.errorCodeOut, t.DataTypes.DataTypes.Text),
            ErrorMessage: t.DataConversion.JSNodeParamConverter.to(o.errorMessageOut, t.DataTypes.DataTypes.Text)
        }
    })
};
u.sendIDVDocumentDetails$Action = function(o) {
    return t.Logger.startActiveSpan("SendIDVDocumentDetails", function(a) {
        return a && (a.setAttribute("code.function", "SendIDVDocumentDetails"), a.setAttribute("outsystems.function.key", "d6132fde-386e-457a-943b-1661a68800e3"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_ACTION")), t.Flow.tryFinally(function() {
            o = l.callContext(o);
            var n = new t.DataTypes.VariableHolder,
                p = new t.DataTypes.VariableHolder;
            return t.Flow.executeAsyncFlow(function() {
                return t.Flow.executeSequence(function() {
                    if (g.getRealSignupIsIDVSupported() && !g.getRealSignupSkippedIDV()) return p.value = t.Logger.startActiveSpan("IDVPayload", function(i) {
                        i && (i.setAttribute("code.function", "IDVPayload"), i.setAttribute("outsystems.function.key", "297f9739-be7a-49c5-b1de-95740e4b26ae"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                        try {
                            return l.safeExecuteJSNode(f8, "IDVPayload", "SendIDVDocumentDetails", {
                                DocumentName: t.DataConversion.JSNodeParamConverter.to(g.getRealSignupIDVDocumentName(), t.DataTypes.DataTypes.Text),
                                DocumentNumber: t.DataConversion.JSNodeParamConverter.to(g.getRealSignupIDVDocumentNumber(), t.DataTypes.DataTypes.Text),
                                AdditionalDocumentNumber: t.DataConversion.JSNodeParamConverter.to(g.getRealSignupIDVAdditionalDocumentNumber(), t.DataTypes.DataTypes.Text),
                                Citizen: t.DataConversion.JSNodeParamConverter.to(g.getSelectedCitizenship(), t.DataTypes.DataTypes.Text),
                                ResidenceList: t.DataConversion.JSNodeParamConverter.to(g.getRawResidenceListResponse(), t.DataTypes.DataTypes.Text),
                                Payload: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text)
                            }, function(c) {
                                var d = new(l.constructor.getVariableGroupType("tradershub.SendIDVDocumentDetails$iDVPayloadJSResult"));
                                return d.payloadOut = t.DataConversion.JSNodeParamConverter.from(c.Payload, t.DataTypes.DataTypes.Text), d
                            }, {}, {})
                        } finally {
                            i && i.end()
                        }
                    }, 1), u.default.derivApiSendMessage$Action(p.value.payloadOut, "identity_verification_document_add", !1, o).then(function(i) {
                        n.value = i
                    })
                })
            }).then(function() {})
        }, function() {
            a && a.end()
        })
    }, 1)
};
u.constructor.registerVariableGroupType("tradershub.SendIDVDocumentDetails$iDVPayloadJSResult", [{
    name: "Payload",
    attrName: "payloadOut",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.clientActionProxies.sendIDVDocumentDetails$Action = function() {
    return l.executeActionInsideJSNode(u.default.sendIDVDocumentDetails$Action.bind(l), t.Controller.BaseViewController.activeScreen ? t.Controller.BaseViewController.activeScreen.callContext() : void 0, function(o) {
        return {}
    })
};
u.sendResidenceList$Action = function(o, a) {
    return t.Logger.startActiveSpan("SendResidenceList", function(n) {
        return n && (n.setAttribute("code.function", "SendResidenceList"), n.setAttribute("outsystems.function.key", "4c696ebb-bc26-4609-9f8a-ba5b6dec9873"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_ACTION")), t.Flow.tryFinally(function() {
            a = l.callContext(a);
            var p = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.SendResidenceList$vars")));
            p.value.authorizeInLocal = o;
            var i = new t.DataTypes.VariableHolder,
                c = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.SendResidenceList$outVars")));
            return t.Flow.executeAsyncFlow(function() {
                return u.default.derivApiSendMessage$Action("", "residence_list", p.value.authorizeInLocal, a).then(function(d) {
                    i.value = d
                }).then(function() {
                    i.value.isErrorOut || g.setRawResidenceListResponse(i.value.responseOut)
                })
            }).then(function() {
                return c.value
            })
        }, function() {
            n && n.end()
        })
    }, 1)
};
u.constructor.registerVariableGroupType("tradershub.SendResidenceList$vars", [{
    name: "Authorize",
    attrName: "authorizeInLocal",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Boolean,
    defaultValue: r(function() {
        return !1
    }, "defaultValue")
}]);
u.constructor.registerVariableGroupType("tradershub.SendResidenceList$outVars", [{
    name: "ResidentListResponse",
    attrName: "residentListResponseOut",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new Xf
    }, "defaultValue"),
    complexType: Xf
}]);
u.clientActionProxies.sendResidenceList$Action = function(o) {
    return o = o === void 0 ? !1 : o, l.executeActionInsideJSNode(u.default.sendResidenceList$Action.bind(l, t.DataConversion.JSNodeParamConverter.from(o, t.DataTypes.DataTypes.Boolean)), t.Controller.BaseViewController.activeScreen ? t.Controller.BaseViewController.activeScreen.callContext() : void 0, function(a) {
        return {
            ResidentListResponse: a.residentListResponseOut
        }
    })
};
u.serviceToken$Action = function(o) {
    return t.Logger.startActiveSpan("ServiceToken", function(a) {
        return a && (a.setAttribute("code.function", "ServiceToken"), a.setAttribute("outsystems.function.key", "3de37f07-95cf-48e2-add1-348f51dec94d"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_ACTION")), t.Flow.tryFinally(function() {
            o = l.callContext(o);
            var n = new t.DataTypes.VariableHolder,
                p = new t.DataTypes.VariableHolder,
                i = new t.DataTypes.VariableHolder,
                c = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.ServiceToken$outVars")));
            return t.Flow.executeAsyncFlow(function() {
                return p.value = t.Logger.startActiveSpan("Payload", function(d) {
                    d && (d.setAttribute("code.function", "Payload"), d.setAttribute("outsystems.function.key", "88531467-6c34-4883-bf3b-ce2537800492"), d.setAttribute("outsystems.function.owner.name", "tradershub"), d.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), d.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                    try {
                        return l.safeExecuteJSNode(m8, "Payload", "ServiceToken", {
                            service: t.DataConversion.JSNodeParamConverter.to("banxa", t.DataTypes.DataTypes.Text),
                            Payload: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text)
                        }, function(y) {
                            var T = new(l.constructor.getVariableGroupType("tradershub.ServiceToken$payloadJSResult"));
                            return T.payloadOut = t.DataConversion.JSNodeParamConverter.from(y.Payload, t.DataTypes.DataTypes.Text), T
                        }, {}, {})
                    } finally {
                        d && d.end()
                    }
                }, 1), u.default.derivApiSendMessage$Action(p.value.payloadOut, "service_token", !0, o).then(function(d) {
                    n.value = d
                }).then(function() {
                    i.value = t.Logger.startActiveSpan("ModifyData", function(d) {
                        d && (d.setAttribute("code.function", "ModifyData"), d.setAttribute("outsystems.function.key", "baab04ad-d514-40cc-93cb-20e7bdfa3f9c"), d.setAttribute("outsystems.function.owner.name", "tradershub"), d.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), d.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                        try {
                            return l.safeExecuteJSNode(y8, "ModifyData", "ServiceToken", {
                                Data: t.DataConversion.JSNodeParamConverter.to(n.value.responseOut, t.DataTypes.DataTypes.Text),
                                Response: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text)
                            }, function(y) {
                                var T = new(l.constructor.getVariableGroupType("tradershub.ServiceToken$modifyDataJSResult"));
                                return T.responseOut = t.DataConversion.JSNodeParamConverter.from(y.Response, t.DataTypes.DataTypes.Text), T
                            }, {}, {})
                        } finally {
                            d && d.end()
                        }
                    }, 1), c.value.responseOut = i.value.responseOut
                })
            }).then(function() {
                return c.value
            })
        }, function() {
            a && a.end()
        })
    }, 1)
};
u.constructor.registerVariableGroupType("tradershub.ServiceToken$payloadJSResult", [{
    name: "Payload",
    attrName: "payloadOut",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.constructor.registerVariableGroupType("tradershub.ServiceToken$modifyDataJSResult", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.constructor.registerVariableGroupType("tradershub.ServiceToken$outVars", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.clientActionProxies.serviceToken$Action = function() {
    return l.executeActionInsideJSNode(u.default.serviceToken$Action.bind(l), t.Controller.BaseViewController.activeScreen ? t.Controller.BaseViewController.activeScreen.callContext() : void 0, function(o) {
        return {
            Response: t.DataConversion.JSNodeParamConverter.to(o.responseOut, t.DataTypes.DataTypes.Text)
        }
    })
};
u.setAccountSettings$Action = function(o, a) {
    return t.Logger.startActiveSpan("SetAccountSettings", function(n) {
        return n && (n.setAttribute("code.function", "SetAccountSettings"), n.setAttribute("outsystems.function.key", "003c208d-6036-4c7a-8bd8-03fe9b246835"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_ACTION")), t.Flow.tryFinally(function() {
            a = l.callContext(a);
            var p = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.SetAccountSettings$vars")));
            p.value.payloadInLocal = o;
            var i = new t.DataTypes.VariableHolder;
            return t.Flow.executeAsyncFlow(function() {
                return u.default.derivApiSendMessage$Action(p.value.payloadInLocal, "set_settings", !1, a).then(function(c) {
                    i.value = c
                })
            }).then(function() {})
        }, function() {
            n && n.end()
        })
    }, 1)
};
u.constructor.registerVariableGroupType("tradershub.SetAccountSettings$vars", [{
    name: "Payload",
    attrName: "payloadInLocal",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.clientActionProxies.setAccountSettings$Action = function(o) {
    return o = o === void 0 ? "" : o, l.executeActionInsideJSNode(u.default.setAccountSettings$Action.bind(l, t.DataConversion.JSNodeParamConverter.from(o, t.DataTypes.DataTypes.Text)), t.Controller.BaseViewController.activeScreen ? t.Controller.BaseViewController.activeScreen.callContext() : void 0, function(a) {
        return {}
    })
};
u.setEUTrackingCookies$Action = function(o, a) {
    return t.Logger.startActiveSpan("SetEUTrackingCookies", function(n) {
        n && (n.setAttribute("code.function", "SetEUTrackingCookies"), n.setAttribute("outsystems.function.key", "61d90ccb-c40b-4d76-8417-cf04d714c987"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_ACTION"));
        try {
            a = l.callContext(a);
            var p = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.SetEUTrackingCookies$vars")));
            p.value.isAcceptedInLocal = o, t.Logger.startActiveSpan("SetCookie", function(i) {
                i && (i.setAttribute("code.function", "SetCookie"), i.setAttribute("outsystems.function.key", "21acd9db-b4b4-4536-b9c4-8ba2ac6f45bf"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                try {
                    return l.safeExecuteJSNode(T8, "SetCookie", "SetEUTrackingCookies", {
                        IsAccepted: t.DataConversion.JSNodeParamConverter.to(p.value.isAcceptedInLocal, t.DataTypes.DataTypes.Boolean)
                    }, function(c) {}, {}, {})
                } finally {
                    i && i.end()
                }
            }, 1);
            return
        } finally {
            n && n.end()
        }
    }, 1)
};
u.constructor.registerVariableGroupType("tradershub.SetEUTrackingCookies$vars", [{
    name: "IsAccepted",
    attrName: "isAcceptedInLocal",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Boolean,
    defaultValue: r(function() {
        return !1
    }, "defaultValue")
}]);
u.clientActionProxies.setEUTrackingCookies$Action = function(o) {
    return o = o === void 0 ? !1 : o, l.executeActionInsideJSNode(u.default.setEUTrackingCookies$Action.bind(l, t.DataConversion.JSNodeParamConverter.from(o, t.DataTypes.DataTypes.Boolean)), t.Controller.BaseViewController.activeScreen ? t.Controller.BaseViewController.activeScreen.callContext() : void 0, function(a) {
        return {}
    })
};
u.setTokenByLoginId$Action = function(o, a) {
    return t.Logger.startActiveSpan("SetTokenByLoginId", function(n) {
        return n && (n.setAttribute("code.function", "SetTokenByLoginId"), n.setAttribute("outsystems.function.key", "e2859ae0-1557-404d-897d-1b182b9f9c7e"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_ACTION")), t.Flow.tryFinally(function() {
            a = l.callContext(a);
            var p = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.SetTokenByLoginId$vars")));
            p.value.loginIdInLocal = o;
            var i = new t.DataTypes.VariableHolder,
                c = new t.DataTypes.VariableHolder,
                d = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.SetTokenByLoginId$outVars")));
            return t.Flow.executeAsyncFlow(function() {
                return c.value = u.default.getAccountByLoginId$Action(p.value.loginIdInLocal, a), g.setAuthToken(c.value.tokenOut), u.default.sendAuthorize$Action(!1, a).then(function(y) {
                    i.value = y
                }).then(function() {
                    d.value.errorMessageOut = i.value.errorMessageOut, d.value.isErrorOut = i.value.isErrorOut, d.value.responseOut = i.value.responseOut
                })
            }).then(function() {
                return d.value
            })
        }, function() {
            n && n.end()
        })
    }, 1)
};
u.constructor.registerVariableGroupType("tradershub.SetTokenByLoginId$vars", [{
    name: "LoginId",
    attrName: "loginIdInLocal",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.constructor.registerVariableGroupType("tradershub.SetTokenByLoginId$outVars", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new Q
    }, "defaultValue"),
    complexType: Q
}, {
    name: "IsError",
    attrName: "isErrorOut",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Boolean,
    defaultValue: r(function() {
        return !1
    }, "defaultValue")
}, {
    name: "ErrorMessage",
    attrName: "errorMessageOut",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.clientActionProxies.setTokenByLoginId$Action = function(o) {
    return o = o === void 0 ? "" : o, l.executeActionInsideJSNode(u.default.setTokenByLoginId$Action.bind(l, t.DataConversion.JSNodeParamConverter.from(o, t.DataTypes.DataTypes.Text)), t.Controller.BaseViewController.activeScreen ? t.Controller.BaseViewController.activeScreen.callContext() : void 0, function(a) {
        return {
            Response: a.responseOut,
            IsError: t.DataConversion.JSNodeParamConverter.to(a.isErrorOut, t.DataTypes.DataTypes.Boolean),
            ErrorMessage: t.DataConversion.JSNodeParamConverter.to(a.errorMessageOut, t.DataTypes.DataTypes.Text)
        }
    })
};
u.statement$Action = function(o, a, n) {
    return t.Logger.startActiveSpan("Statement", function(p) {
        return p && (p.setAttribute("code.function", "Statement"), p.setAttribute("outsystems.function.key", "e69de0aa-df58-4553-8734-27f52cc8be2a"), p.setAttribute("outsystems.function.owner.name", "tradershub"), p.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), p.setAttribute("outsystems.function.type", "CLIENT_ACTION")), t.Flow.tryFinally(function() {
            n = l.callContext(n);
            var i = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.Statement$vars")));
            i.value.actionTypeInLocal = o, i.value.limitInLocal = a;
            var c = new t.DataTypes.VariableHolder,
                d = new t.DataTypes.VariableHolder,
                y = new t.DataTypes.VariableHolder(new(t.Controller.BaseController.getJSONDeserializeOutputType(ju))),
                T = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.Statement$outVars")));
            return t.Flow.executeAsyncFlow(function() {
                return d.value = t.Logger.startActiveSpan("Payload", function(f) {
                    f && (f.setAttribute("code.function", "Payload"), f.setAttribute("outsystems.function.key", "8f2379ca-0b56-4c42-9245-f85efb5f601e"), f.setAttribute("outsystems.function.owner.name", "tradershub"), f.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), f.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                    try {
                        return l.safeExecuteJSNode(S8, "Payload", "Statement", {
                            ActionType: t.DataConversion.JSNodeParamConverter.to(i.value.actionTypeInLocal, t.DataTypes.DataTypes.Text),
                            Limit: t.DataConversion.JSNodeParamConverter.to(i.value.limitInLocal, t.DataTypes.DataTypes.Text),
                            Payload: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text)
                        }, function(S) {
                            var A = new(l.constructor.getVariableGroupType("tradershub.Statement$payloadJSResult"));
                            return A.payloadOut = t.DataConversion.JSNodeParamConverter.from(S.Payload, t.DataTypes.DataTypes.Text), A
                        }, {}, {})
                    } finally {
                        f && f.end()
                    }
                }, 1), u.default.derivApiSendMessage$Action(d.value.payloadOut, "statement", !0, n).then(function(f) {
                    c.value = f
                }).then(function() {
                    c.value.isErrorOut ? T.value.isErrorOut = !0 : (y.value.dataOut = t.JSONUtils.deserializeFromJSON(c.value.responseOut, ju, !1), T.value.responseOut = y.value.dataOut)
                })
            }).then(function() {
                return T.value
            })
        }, function() {
            p && p.end()
        })
    }, 1)
};
u.constructor.registerVariableGroupType("tradershub.Statement$vars", [{
    name: "ActionType",
    attrName: "actionTypeInLocal",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "Limit",
    attrName: "limitInLocal",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.constructor.registerVariableGroupType("tradershub.Statement$payloadJSResult", [{
    name: "Payload",
    attrName: "payloadOut",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.constructor.registerVariableGroupType("tradershub.Statement$outVars", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new ju
    }, "defaultValue"),
    complexType: ju
}, {
    name: "IsError",
    attrName: "isErrorOut",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Boolean,
    defaultValue: r(function() {
        return !1
    }, "defaultValue")
}]);
u.clientActionProxies.statement$Action = function(o, a) {
    return o = o === void 0 ? "" : o, a = a === void 0 ? "" : a, l.executeActionInsideJSNode(u.default.statement$Action.bind(l, t.DataConversion.JSNodeParamConverter.from(o, t.DataTypes.DataTypes.Text), t.DataConversion.JSNodeParamConverter.from(a, t.DataTypes.DataTypes.Text)), t.Controller.BaseViewController.activeScreen ? t.Controller.BaseViewController.activeScreen.callContext() : void 0, function(n) {
        return {
            Response: n.responseOut,
            IsError: t.DataConversion.JSNodeParamConverter.to(n.isErrorOut, t.DataTypes.DataTypes.Boolean)
        }
    })
};
u.switchWallets$Action = function(o, a) {
    return t.Logger.startActiveSpan("SwitchWallets", function(n) {
        return n && (n.setAttribute("code.function", "SwitchWallets"), n.setAttribute("outsystems.function.key", "c2e8fbe3-3871-4b25-816b-7f36b6022a64"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_ACTION")), t.Flow.tryFinally(function() {
            a = l.callContext(a);
            var p = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.SwitchWallets$vars")));
            p.value.linkedAccountInLocal = o;
            var i = new t.DataTypes.VariableHolder,
                c = new t.DataTypes.VariableHolder,
                d = new t.DataTypes.VariableHolder(new(t.Controller.BaseController.getJSONDeserializeOutputType(ye)));
            return t.Flow.executeAsyncFlow(function() {
                return d.value.dataOut = t.JSONUtils.deserializeFromJSON(p.value.linkedAccountInLocal, ye, !1), d.value.dataOut.isEmpty ? (c.value = t.Logger.startActiveSpan("GetFirstWalletIndex", function(y) {
                    y && (y.setAttribute("code.function", "GetFirstWalletIndex"), y.setAttribute("outsystems.function.key", "5c9d442c-5fb0-46a2-9ead-c929c0afd1ee"), y.setAttribute("outsystems.function.owner.name", "tradershub"), y.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), y.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                    try {
                        return l.safeExecuteJSNode(D8, "GetFirstWalletIndex", "SwitchWallets", {
                            ActiveWalletLoginId: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text)
                        }, function(T) {
                            var f = new(l.constructor.getVariableGroupType("tradershub.SwitchWallets$getFirstWalletIndexJSResult"));
                            return f.activeWalletLoginIdOut = t.DataConversion.JSNodeParamConverter.from(T.ActiveWalletLoginId, t.DataTypes.DataTypes.Text), f
                        }, {}, {})
                    } finally {
                        y && y.end()
                    }
                }, 1), p.value.activeWalletLoginIdVar = c.value.activeWalletLoginIdOut) : p.value.activeWalletLoginIdVar = d.value.dataOut.getCurrent(a.iterationContext).loginidAttr, u.default.setTokenByLoginId$Action(p.value.activeWalletLoginIdVar, a).then(function(y) {
                    i.value = y
                })
            }).then(function() {})
        }, function() {
            n && n.end()
        })
    }, 1)
};
u.constructor.registerVariableGroupType("tradershub.SwitchWallets$vars", [{
    name: "LinkedAccount",
    attrName: "linkedAccountInLocal",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "ActiveWalletLoginId",
    attrName: "activeWalletLoginIdVar",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.constructor.registerVariableGroupType("tradershub.SwitchWallets$getFirstWalletIndexJSResult", [{
    name: "ActiveWalletLoginId",
    attrName: "activeWalletLoginIdOut",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.clientActionProxies.switchWallets$Action = function(o) {
    return o = o === void 0 ? "" : o, l.executeActionInsideJSNode(u.default.switchWallets$Action.bind(l, t.DataConversion.JSNodeParamConverter.from(o, t.DataTypes.DataTypes.Text)), t.Controller.BaseViewController.activeScreen ? t.Controller.BaseViewController.activeScreen.callContext() : void 0, function(a) {
        return {}
    })
};
u.syncAccountInfo$Action = function(o) {
    return t.Logger.startActiveSpan("SyncAccountInfo", function(a) {
        a && (a.setAttribute("code.function", "SyncAccountInfo"), a.setAttribute("outsystems.function.key", "4f9700a2-fd8c-4f80-86d5-acfe5b6a40ec"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_ACTION"));
        try {
            o = l.callContext(o), t.Logger.startActiveSpan("SyncLocalStorage", function(n) {
                n && (n.setAttribute("code.function", "SyncLocalStorage"), n.setAttribute("outsystems.function.key", "7703b8db-e711-48ef-a5ac-5582f694d3f4"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                try {
                    return l.safeExecuteJSNode(b8, "SyncLocalStorage", "SyncAccountInfo", {
                        ActiveLoginId: t.DataConversion.JSNodeParamConverter.to(g.getActiveLoginId(), t.DataTypes.DataTypes.Text)
                    }, function(p) {}, {}, {})
                } finally {
                    n && n.end()
                }
            }, 1);
            return
        } finally {
            a && a.end()
        }
    }, 1)
};
u.clientActionProxies.syncAccountInfo$Action = function() {
    return l.executeActionInsideJSNode(u.default.syncAccountInfo$Action.bind(l), t.Controller.BaseViewController.activeScreen ? t.Controller.BaseViewController.activeScreen.callContext() : void 0, function(o) {
        return {}
    })
};
u.textToBoolean$Action = function(o, a, n) {
    return t.Logger.startActiveSpan("TextToBoolean", function(p) {
        p && (p.setAttribute("code.function", "TextToBoolean"), p.setAttribute("outsystems.function.key", "f3b493d5-ee9f-4656-b884-0ccbd2d6ce3d"), p.setAttribute("outsystems.function.owner.name", "tradershub"), p.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), p.setAttribute("outsystems.function.type", "CLIENT_ACTION"));
        try {
            n = l.callContext(n);
            var i = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.TextToBoolean$vars")));
            i.value.textInLocal = o, i.value.trimInLocal = a;
            var c = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.TextToBoolean$outVars")));
            return c.value.resultOut = t.BuiltinFunctions.length(i.value.trimInLocal ? t.BuiltinFunctions.trim(i.value.textInLocal) : i.value.textInLocal) > 0, c.value
        } finally {
            p && p.end()
        }
    }, 1)
};
u.constructor.registerVariableGroupType("tradershub.TextToBoolean$vars", [{
    name: "Text",
    attrName: "textInLocal",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "Trim",
    attrName: "trimInLocal",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Boolean,
    defaultValue: r(function() {
        return !0
    }, "defaultValue")
}]);
u.constructor.registerVariableGroupType("tradershub.TextToBoolean$outVars", [{
    name: "Result",
    attrName: "resultOut",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Boolean,
    defaultValue: r(function() {
        return !1
    }, "defaultValue")
}]);
u.clientActionProxies.textToBoolean$Action = function(o, a) {
    return o = o === void 0 ? "" : o, a = a === void 0 ? !0 : a, l.executeActionInsideJSNode(u.default.textToBoolean$Action.bind(l, t.DataConversion.JSNodeParamConverter.from(o, t.DataTypes.DataTypes.Text), t.DataConversion.JSNodeParamConverter.from(a, t.DataTypes.DataTypes.Boolean)), t.Controller.BaseViewController.activeScreen ? t.Controller.BaseViewController.activeScreen.callContext() : void 0, function(n) {
        return {
            Result: t.DataConversion.JSNodeParamConverter.to(n.resultOut, t.DataTypes.DataTypes.Boolean)
        }
    })
};
u.tINValidations$Action = function(o, a) {
    return t.Logger.startActiveSpan("TINValidations", function(n) {
        return n && (n.setAttribute("code.function", "TINValidations"), n.setAttribute("outsystems.function.key", "0b96e989-e6c6-41f5-a5d8-9ef95640b888"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_ACTION")), t.Flow.tryFinally(function() {
            a = l.callContext(a);
            var p = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.TINValidations$vars")));
            p.value.residenceInLocal = o;
            var i = new t.DataTypes.VariableHolder,
                c = new t.DataTypes.VariableHolder,
                d = new t.DataTypes.VariableHolder(new(t.Controller.BaseController.getJSONDeserializeOutputType(Hu))),
                y = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.TINValidations$outVars")));
            return t.Flow.executeAsyncFlow(function() {
                return c.value = t.Logger.startActiveSpan("Payload", function(T) {
                    T && (T.setAttribute("code.function", "Payload"), T.setAttribute("outsystems.function.key", "020485cc-83c0-49a1-b6fa-5c09efd9d4b7"), T.setAttribute("outsystems.function.owner.name", "tradershub"), T.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), T.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                    try {
                        return l.safeExecuteJSNode(g8, "Payload", "TINValidations", {
                            Residence: t.DataConversion.JSNodeParamConverter.to(p.value.residenceInLocal, t.DataTypes.DataTypes.Text),
                            Payload: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text)
                        }, function(f) {
                            var S = new(l.constructor.getVariableGroupType("tradershub.TINValidations$payloadJSResult"));
                            return S.payloadOut = t.DataConversion.JSNodeParamConverter.from(f.Payload, t.DataTypes.DataTypes.Text), S
                        }, {}, {})
                    } finally {
                        T && T.end()
                    }
                }, 1), u.default.derivApiSendMessage$Action(c.value.payloadOut, "", !1, a).then(function(T) {
                    i.value = T
                }).then(function() {
                    d.value.dataOut = t.JSONUtils.deserializeFromJSON(i.value.responseOut, Hu, !1), y.value.responseOut = d.value.dataOut, y.value.isErrorOut = i.value.isErrorOut, y.value.errorMessageOut = i.value.errorMessageOut
                })
            }).then(function() {
                return y.value
            })
        }, function() {
            n && n.end()
        })
    }, 1)
};
u.constructor.registerVariableGroupType("tradershub.TINValidations$vars", [{
    name: "Residence",
    attrName: "residenceInLocal",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.constructor.registerVariableGroupType("tradershub.TINValidations$payloadJSResult", [{
    name: "Payload",
    attrName: "payloadOut",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.constructor.registerVariableGroupType("tradershub.TINValidations$outVars", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new Hu
    }, "defaultValue"),
    complexType: Hu
}, {
    name: "IsError",
    attrName: "isErrorOut",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Boolean,
    defaultValue: r(function() {
        return !1
    }, "defaultValue")
}, {
    name: "ErrorMessage",
    attrName: "errorMessageOut",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.clientActionProxies.tINValidations$Action = function(o) {
    return o = o === void 0 ? "" : o, l.executeActionInsideJSNode(u.default.tINValidations$Action.bind(l, t.DataConversion.JSNodeParamConverter.from(o, t.DataTypes.DataTypes.Text)), t.Controller.BaseViewController.activeScreen ? t.Controller.BaseViewController.activeScreen.callContext() : void 0, function(a) {
        return {
            Response: a.responseOut,
            IsError: t.DataConversion.JSNodeParamConverter.to(a.isErrorOut, t.DataTypes.DataTypes.Boolean),
            ErrorMessage: t.DataConversion.JSNodeParamConverter.to(a.errorMessageOut, t.DataTypes.DataTypes.Text)
        }
    })
};
u.tradingPlatformAccounts$Action = function(o, a, n, p) {
    return t.Logger.startActiveSpan("TradingPlatformAccounts", function(i) {
        return i && (i.setAttribute("code.function", "TradingPlatformAccounts"), i.setAttribute("outsystems.function.key", "684fd4a6-e9d0-4790-ae6a-e6dc9094751c"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_ACTION")), t.Flow.tryFinally(function() {
            p = l.callContext(p);
            var c = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.TradingPlatformAccounts$vars")));
            c.value.platformInLocal = o, c.value.cFDAccountsInLocal = a.clone(), c.value.accountTypeInLocal = n;
            var d = new t.DataTypes.VariableHolder,
                y = new t.DataTypes.VariableHolder,
                T = new t.DataTypes.VariableHolder,
                f = new t.DataTypes.VariableHolder(new t.DataTypes.JSONSerializeOutputType),
                S = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.TradingPlatformAccounts$outVars")));
            return t.Flow.executeAsyncFlow(function() {
                return y.value = u.default.generateAvailableAccountsPayload$Action(c.value.platformInLocal, p), u.default.derivApiSendMessage$Action(y.value.payloadOut, "trading_platform_accounts", !0, p).then(function(A) {
                    d.value = A
                }).then(function() {
                    d.value.isErrorOut ? t.FeedbackMessageService.showFeedbackMessage(d.value.errorMessageOut, 3) : (f.value.jSONOut = t.JSONUtils.serializeToJSON(c.value.cFDAccountsInLocal, !1, !1), T.value = t.Logger.startActiveSpan("ModifyData", function(A) {
                        A && (A.setAttribute("code.function", "ModifyData"), A.setAttribute("outsystems.function.key", "105b3d59-7f67-4257-b140-f86b5966e78d"), A.setAttribute("outsystems.function.owner.name", "tradershub"), A.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), A.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                        try {
                            return l.safeExecuteJSNode(A8, "ModifyData", "TradingPlatformAccounts", {
                                Data: t.DataConversion.JSNodeParamConverter.to(d.value.responseOut, t.DataTypes.DataTypes.Text),
                                CFDAccounts: t.DataConversion.JSNodeParamConverter.to(f.value.jSONOut, t.DataTypes.DataTypes.Text),
                                Platform: t.DataConversion.JSNodeParamConverter.to(c.value.platformInLocal, t.DataTypes.DataTypes.Text),
                                DemoAccounts: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text),
                                RealAccounts: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text)
                            }, function(b) {
                                var x = new(l.constructor.getVariableGroupType("tradershub.TradingPlatformAccounts$modifyDataJSResult"));
                                return x.demoAccountsOut = t.DataConversion.JSNodeParamConverter.from(b.DemoAccounts, t.DataTypes.DataTypes.Text), x.realAccountsOut = t.DataConversion.JSNodeParamConverter.from(b.RealAccounts, t.DataTypes.DataTypes.Text), x
                            }, {}, {})
                        } finally {
                            A && A.end()
                        }
                    }, 1), c.value.accountTypeInLocal === "demo" ? S.value.responseOut = T.value.demoAccountsOut : S.value.responseOut = T.value.realAccountsOut)
                })
            }).then(function() {
                return S.value
            })
        }, function() {
            i && i.end()
        })
    }, 1)
};
u.constructor.registerVariableGroupType("tradershub.TradingPlatformAccounts$vars", [{
    name: "Platform",
    attrName: "platformInLocal",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "CFDAccounts",
    attrName: "cFDAccountsInLocal",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.RecordList,
    defaultValue: r(function() {
        return new P
    }, "defaultValue"),
    complexType: P
}, {
    name: "AccountType",
    attrName: "accountTypeInLocal",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.constructor.registerVariableGroupType("tradershub.TradingPlatformAccounts$modifyDataJSResult", [{
    name: "DemoAccounts",
    attrName: "demoAccountsOut",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "RealAccounts",
    attrName: "realAccountsOut",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.constructor.registerVariableGroupType("tradershub.TradingPlatformAccounts$outVars", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.clientActionProxies.tradingPlatformAccounts$Action = function(o, a, n) {
    return o = o === void 0 ? "" : o, a = a === void 0 ? new P : a, n = n === void 0 ? "" : n, l.executeActionInsideJSNode(u.default.tradingPlatformAccounts$Action.bind(l, t.DataConversion.JSNodeParamConverter.from(o, t.DataTypes.DataTypes.Text), a, t.DataConversion.JSNodeParamConverter.from(n, t.DataTypes.DataTypes.Text)), t.Controller.BaseViewController.activeScreen ? t.Controller.BaseViewController.activeScreen.callContext() : void 0, function(p) {
        return {
            Response: t.DataConversion.JSNodeParamConverter.to(p.responseOut, t.DataTypes.DataTypes.Text)
        }
    })
};
u.tradingPlatformAvailableAccounts2$Action = function(o, a, n) {
    return t.Logger.startActiveSpan("TradingPlatformAvailableAccounts2", function(p) {
        return p && (p.setAttribute("code.function", "TradingPlatformAvailableAccounts2"), p.setAttribute("outsystems.function.key", "01d5a153-7eb8-45bd-94b5-01a831412f28"), p.setAttribute("outsystems.function.owner.name", "tradershub"), p.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), p.setAttribute("outsystems.function.type", "CLIENT_ACTION")), t.Flow.tryFinally(function() {
            n = l.callContext(n);
            var i = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.TradingPlatformAvailableAccounts2$vars")));
            i.value.platformInLocal = o, i.value.cFDAccountsInLocal = a.clone();
            var c = new t.DataTypes.VariableHolder,
                d = new t.DataTypes.VariableHolder,
                y = new t.DataTypes.VariableHolder,
                T = new t.DataTypes.VariableHolder(new t.DataTypes.JSONSerializeOutputType),
                f = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.TradingPlatformAvailableAccounts2$outVars")));
            return t.Flow.executeAsyncFlow(function() {
                return d.value = u.default.generateAvailableAccountsPayload$Action(i.value.platformInLocal, n), u.default.derivApiSendMessage$Action(d.value.payloadOut, "trading_platform_available_accounts", g.getAuthToken() !== t.BuiltinFunctions.nullTextIdentifier(), n).then(function(S) {
                    c.value = S
                }).then(function() {
                    c.value.isErrorOut ? t.FeedbackMessageService.showFeedbackMessage(c.value.errorMessageOut, 3) : (T.value.jSONOut = t.JSONUtils.serializeToJSON(i.value.cFDAccountsInLocal, !1, !1), y.value = t.Logger.startActiveSpan("ModifyData", function(S) {
                        S && (S.setAttribute("code.function", "ModifyData"), S.setAttribute("outsystems.function.key", "02962c22-2333-4243-b3dd-2be508c00e84"), S.setAttribute("outsystems.function.owner.name", "tradershub"), S.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), S.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                        try {
                            return l.safeExecuteJSNode(x8, "ModifyData", "TradingPlatformAvailableAccounts2", {
                                Data: t.DataConversion.JSNodeParamConverter.to(c.value.responseOut, t.DataTypes.DataTypes.Text),
                                CFDAccounts: t.DataConversion.JSNodeParamConverter.to(T.value.jSONOut, t.DataTypes.DataTypes.Text),
                                Response: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text)
                            }, function(A) {
                                var b = new(l.constructor.getVariableGroupType("tradershub.TradingPlatformAvailableAccounts2$modifyDataJSResult"));
                                return b.responseOut = t.DataConversion.JSNodeParamConverter.from(A.Response, t.DataTypes.DataTypes.Text), b
                            }, {}, {})
                        } finally {
                            S && S.end()
                        }
                    }, 1), f.value.responseOut = y.value.responseOut)
                })
            }).then(function() {
                return f.value
            })
        }, function() {
            p && p.end()
        })
    }, 1)
};
u.constructor.registerVariableGroupType("tradershub.TradingPlatformAvailableAccounts2$vars", [{
    name: "Platform",
    attrName: "platformInLocal",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "CFDAccounts",
    attrName: "cFDAccountsInLocal",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.RecordList,
    defaultValue: r(function() {
        return new P
    }, "defaultValue"),
    complexType: P
}]);
u.constructor.registerVariableGroupType("tradershub.TradingPlatformAvailableAccounts2$modifyDataJSResult", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.constructor.registerVariableGroupType("tradershub.TradingPlatformAvailableAccounts2$outVars", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.clientActionProxies.tradingPlatformAvailableAccounts2$Action = function(o, a) {
    return o = o === void 0 ? "" : o, a = a === void 0 ? new P : a, l.executeActionInsideJSNode(u.default.tradingPlatformAvailableAccounts2$Action.bind(l, t.DataConversion.JSNodeParamConverter.from(o, t.DataTypes.DataTypes.Text), a), t.Controller.BaseViewController.activeScreen ? t.Controller.BaseViewController.activeScreen.callContext() : void 0, function(n) {
        return {
            Response: t.DataConversion.JSNodeParamConverter.to(n.responseOut, t.DataTypes.DataTypes.Text)
        }
    })
};
u.tradingPlatformNewAccount$Action = function(o, a, n, p) {
    return t.Logger.startActiveSpan("TradingPlatformNewAccount", function(i) {
        return i && (i.setAttribute("code.function", "TradingPlatformNewAccount"), i.setAttribute("outsystems.function.key", "31026782-50e0-4bf6-83ec-a45c6f6d0819"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_ACTION")), t.Flow.tryFinally(function() {
            p = l.callContext(p);
            var c = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.TradingPlatformNewAccount$vars")));
            c.value.marketTypeInLocal = o, c.value.passwordInLocal = a, c.value.platformInLocal = n;
            var d = new t.DataTypes.VariableHolder,
                y = new t.DataTypes.VariableHolder,
                T = new t.DataTypes.VariableHolder(new(t.Controller.BaseController.getJSONDeserializeOutputType(Mu))),
                f = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.TradingPlatformNewAccount$outVars")));
            return t.Flow.executeAsyncFlow(function() {
                return y.value = t.Logger.startActiveSpan("Payload", function(S) {
                    S && (S.setAttribute("code.function", "Payload"), S.setAttribute("outsystems.function.key", "d238539d-28e8-4d50-8461-eb1f4ebf7e50"), S.setAttribute("outsystems.function.owner.name", "tradershub"), S.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), S.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                    try {
                        return l.safeExecuteJSNode(O8, "Payload", "TradingPlatformNewAccount", {
                            MarketType: t.DataConversion.JSNodeParamConverter.to(c.value.marketTypeInLocal, t.DataTypes.DataTypes.Text),
                            Password: t.DataConversion.JSNodeParamConverter.to(c.value.passwordInLocal, t.DataTypes.DataTypes.Text),
                            AccountType: t.DataConversion.JSNodeParamConverter.to(g.getAccountType(), t.DataTypes.DataTypes.Text),
                            Platform: t.DataConversion.JSNodeParamConverter.to(c.value.platformInLocal, t.DataTypes.DataTypes.Text),
                            Payload: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text)
                        }, function(A) {
                            var b = new(l.constructor.getVariableGroupType("tradershub.TradingPlatformNewAccount$payloadJSResult"));
                            return b.payloadOut = t.DataConversion.JSNodeParamConverter.from(A.Payload, t.DataTypes.DataTypes.Text), b
                        }, {}, {})
                    } finally {
                        S && S.end()
                    }
                }, 1), u.default.derivApiSendMessage$Action(y.value.payloadOut, "trading_platform_new_account", !0, p).then(function(S) {
                    d.value = S
                }).then(function() {
                    d.value.isErrorOut ? t.FeedbackMessageService.showFeedbackMessage(d.value.errorMessageOut, 3) : (T.value.dataOut = t.JSONUtils.deserializeFromJSON(d.value.responseOut, Mu, !1), f.value.responseOut = T.value.dataOut)
                })
            }).then(function() {
                return f.value
            })
        }, function() {
            i && i.end()
        })
    }, 1)
};
u.constructor.registerVariableGroupType("tradershub.TradingPlatformNewAccount$vars", [{
    name: "MarketType",
    attrName: "marketTypeInLocal",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "Password",
    attrName: "passwordInLocal",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "Platform",
    attrName: "platformInLocal",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.constructor.registerVariableGroupType("tradershub.TradingPlatformNewAccount$payloadJSResult", [{
    name: "Payload",
    attrName: "payloadOut",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.constructor.registerVariableGroupType("tradershub.TradingPlatformNewAccount$outVars", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new Mu
    }, "defaultValue"),
    complexType: Mu
}]);
u.clientActionProxies.tradingPlatformNewAccount$Action = function(o, a, n) {
    return o = o === void 0 ? "" : o, a = a === void 0 ? "" : a, n = n === void 0 ? "" : n, l.executeActionInsideJSNode(u.default.tradingPlatformNewAccount$Action.bind(l, t.DataConversion.JSNodeParamConverter.from(o, t.DataTypes.DataTypes.Text), t.DataConversion.JSNodeParamConverter.from(a, t.DataTypes.DataTypes.Text), t.DataConversion.JSNodeParamConverter.from(n, t.DataTypes.DataTypes.Text)), t.Controller.BaseViewController.activeScreen ? t.Controller.BaseViewController.activeScreen.callContext() : void 0, function(p) {
        return {
            Response: p.responseOut
        }
    })
};
u.tradingPlatformPasswordChange$Action = function(o, a, n, p) {
    return t.Logger.startActiveSpan("TradingPlatformPasswordChange", function(i) {
        return i && (i.setAttribute("code.function", "TradingPlatformPasswordChange"), i.setAttribute("outsystems.function.key", "2943f009-f5bf-4ca4-971a-b2f5fcf19171"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_ACTION")), t.Flow.tryFinally(function() {
            p = l.callContext(p);
            var c = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.TradingPlatformPasswordChange$vars")));
            c.value.oldPasswordInLocal = o, c.value.platformInLocal = a, c.value.newPasswordInLocal = n;
            var d = new t.DataTypes.VariableHolder,
                y = new t.DataTypes.VariableHolder,
                T = new t.DataTypes.VariableHolder(new(t.Controller.BaseController.getJSONDeserializeOutputType(Wu))),
                f = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.TradingPlatformPasswordChange$outVars")));
            return t.Flow.executeAsyncFlow(function() {
                return y.value = t.Logger.startActiveSpan("Payload", function(S) {
                    S && (S.setAttribute("code.function", "Payload"), S.setAttribute("outsystems.function.key", "14431308-7489-4303-89d2-cfd65281edbb"), S.setAttribute("outsystems.function.owner.name", "tradershub"), S.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), S.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                    try {
                        return l.safeExecuteJSNode(v8, "Payload", "TradingPlatformPasswordChange", {
                            NewPassword: t.DataConversion.JSNodeParamConverter.to(c.value.newPasswordInLocal, t.DataTypes.DataTypes.Text),
                            OldPassword: t.DataConversion.JSNodeParamConverter.to(c.value.oldPasswordInLocal, t.DataTypes.DataTypes.Text),
                            Platform: t.DataConversion.JSNodeParamConverter.to(c.value.platformInLocal, t.DataTypes.DataTypes.Text),
                            Payload: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text)
                        }, function(A) {
                            var b = new(l.constructor.getVariableGroupType("tradershub.TradingPlatformPasswordChange$payloadJSResult"));
                            return b.payloadOut = t.DataConversion.JSNodeParamConverter.from(A.Payload, t.DataTypes.DataTypes.Text), b
                        }, {}, {})
                    } finally {
                        S && S.end()
                    }
                }, 1), u.default.derivApiSendMessage$Action(y.value.payloadOut, "trading_platform_password_change", !0, p).then(function(S) {
                    d.value = S
                }).then(function() {
                    d.value.isErrorOut ? t.FeedbackMessageService.showFeedbackMessage(d.value.errorMessageOut, 3) : (T.value.dataOut = t.JSONUtils.deserializeFromJSON(d.value.responseOut, Wu, !1), f.value.responseOut = T.value.dataOut)
                })
            }).then(function() {
                return f.value
            })
        }, function() {
            i && i.end()
        })
    }, 1)
};
u.constructor.registerVariableGroupType("tradershub.TradingPlatformPasswordChange$vars", [{
    name: "OldPassword",
    attrName: "oldPasswordInLocal",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "Platform",
    attrName: "platformInLocal",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "NewPassword",
    attrName: "newPasswordInLocal",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.constructor.registerVariableGroupType("tradershub.TradingPlatformPasswordChange$payloadJSResult", [{
    name: "Payload",
    attrName: "payloadOut",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.constructor.registerVariableGroupType("tradershub.TradingPlatformPasswordChange$outVars", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new Wu
    }, "defaultValue"),
    complexType: Wu
}]);
u.clientActionProxies.tradingPlatformPasswordChange$Action = function(o, a, n) {
    return o = o === void 0 ? "" : o, a = a === void 0 ? "" : a, n = n === void 0 ? "" : n, l.executeActionInsideJSNode(u.default.tradingPlatformPasswordChange$Action.bind(l, t.DataConversion.JSNodeParamConverter.from(o, t.DataTypes.DataTypes.Text), t.DataConversion.JSNodeParamConverter.from(a, t.DataTypes.DataTypes.Text), t.DataConversion.JSNodeParamConverter.from(n, t.DataTypes.DataTypes.Text)), t.Controller.BaseViewController.activeScreen ? t.Controller.BaseViewController.activeScreen.callContext() : void 0, function(p) {
        return {
            Response: p.responseOut
        }
    })
};
u.tradingPlatformPasswordReset$Action = function(o, a, n, p) {
    return t.Logger.startActiveSpan("TradingPlatformPasswordReset", function(i) {
        return i && (i.setAttribute("code.function", "TradingPlatformPasswordReset"), i.setAttribute("outsystems.function.key", "5989ff75-7905-49a9-9e9c-c736f229ea16"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_ACTION")), t.Flow.tryFinally(function() {
            p = l.callContext(p);
            var c = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.TradingPlatformPasswordReset$vars")));
            c.value.newPasswordInLocal = o, c.value.verificationCodeInLocal = a, c.value.platformInLocal = n;
            var d = new t.DataTypes.VariableHolder,
                y = new t.DataTypes.VariableHolder,
                T = new t.DataTypes.VariableHolder(new(t.Controller.BaseController.getJSONDeserializeOutputType(Yu))),
                f = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.TradingPlatformPasswordReset$outVars")));
            return t.Flow.executeAsyncFlow(function() {
                return y.value = t.Logger.startActiveSpan("Payload", function(S) {
                    S && (S.setAttribute("code.function", "Payload"), S.setAttribute("outsystems.function.key", "72cba9dd-9d34-4a3d-8ce8-5d74f58e97c8"), S.setAttribute("outsystems.function.owner.name", "tradershub"), S.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), S.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                    try {
                        return l.safeExecuteJSNode(R8, "Payload", "TradingPlatformPasswordReset", {
                            NewPassword: t.DataConversion.JSNodeParamConverter.to(c.value.newPasswordInLocal, t.DataTypes.DataTypes.Text),
                            VerificationCode: t.DataConversion.JSNodeParamConverter.to(c.value.verificationCodeInLocal, t.DataTypes.DataTypes.Text),
                            Platform: t.DataConversion.JSNodeParamConverter.to(c.value.platformInLocal, t.DataTypes.DataTypes.Text),
                            Payload: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text)
                        }, function(A) {
                            var b = new(l.constructor.getVariableGroupType("tradershub.TradingPlatformPasswordReset$payloadJSResult"));
                            return b.payloadOut = t.DataConversion.JSNodeParamConverter.from(A.Payload, t.DataTypes.DataTypes.Text), b
                        }, {}, {})
                    } finally {
                        S && S.end()
                    }
                }, 1), u.default.derivApiSendMessage$Action(y.value.payloadOut, "trading_platform_password_reset", !0, p).then(function(S) {
                    d.value = S
                }).then(function() {
                    d.value.isErrorOut ? t.FeedbackMessageService.showFeedbackMessage(d.value.errorMessageOut, 3) : (T.value.dataOut = t.JSONUtils.deserializeFromJSON(d.value.responseOut, Yu, !1), f.value.responseOut = T.value.dataOut)
                })
            }).then(function() {
                return f.value
            })
        }, function() {
            i && i.end()
        })
    }, 1)
};
u.constructor.registerVariableGroupType("tradershub.TradingPlatformPasswordReset$vars", [{
    name: "NewPassword",
    attrName: "newPasswordInLocal",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "VerificationCode",
    attrName: "verificationCodeInLocal",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "Platform",
    attrName: "platformInLocal",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.constructor.registerVariableGroupType("tradershub.TradingPlatformPasswordReset$payloadJSResult", [{
    name: "Payload",
    attrName: "payloadOut",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.constructor.registerVariableGroupType("tradershub.TradingPlatformPasswordReset$outVars", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new Yu
    }, "defaultValue"),
    complexType: Yu
}]);
u.clientActionProxies.tradingPlatformPasswordReset$Action = function(o, a, n) {
    return o = o === void 0 ? "" : o, a = a === void 0 ? "" : a, n = n === void 0 ? "" : n, l.executeActionInsideJSNode(u.default.tradingPlatformPasswordReset$Action.bind(l, t.DataConversion.JSNodeParamConverter.from(o, t.DataTypes.DataTypes.Text), t.DataConversion.JSNodeParamConverter.from(a, t.DataTypes.DataTypes.Text), t.DataConversion.JSNodeParamConverter.from(n, t.DataTypes.DataTypes.Text)), t.Controller.BaseViewController.activeScreen ? t.Controller.BaseViewController.activeScreen.callContext() : void 0, function(p) {
        return {
            Response: p.responseOut
        }
    })
};
u.tradingPlatformProductListing$Action = function(o, a) {
    return t.Logger.startActiveSpan("TradingPlatformProductListing", function(n) {
        return n && (n.setAttribute("code.function", "TradingPlatformProductListing"), n.setAttribute("outsystems.function.key", "7a57ee9e-a715-4b64-9e4e-14523f23e4e7"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_ACTION")), t.Flow.tryFinally(function() {
            a = l.callContext(a);
            var p = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.TradingPlatformProductListing$vars")));
            p.value.countryCodeInLocal = o;
            var i = new t.DataTypes.VariableHolder,
                c = new t.DataTypes.VariableHolder,
                d = new t.DataTypes.VariableHolder,
                y = new t.DataTypes.VariableHolder(new(t.Controller.BaseController.getJSONDeserializeOutputType(Ku))),
                T = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.TradingPlatformProductListing$outVars")));
            return t.Flow.executeAsyncFlow(function() {
                return c.value = t.Logger.startActiveSpan("TradingPlatformPayload", function(f) {
                    f && (f.setAttribute("code.function", "TradingPlatformPayload"), f.setAttribute("outsystems.function.key", "1dfe2961-e737-4b94-b007-6c107a5f4912"), f.setAttribute("outsystems.function.owner.name", "tradershub"), f.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), f.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                    try {
                        return l.safeExecuteJSNode(C8, "TradingPlatformPayload", "TradingPlatformProductListing", {
                            ClientCountry: t.DataConversion.JSNodeParamConverter.to(p.value.countryCodeInLocal, t.DataTypes.DataTypes.Text),
                            TempClientCountry: t.DataConversion.JSNodeParamConverter.to(g.getTempClientCountry(), t.DataTypes.DataTypes.Text),
                            Payload: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text)
                        }, function(S) {
                            var A = new(l.constructor.getVariableGroupType("tradershub.TradingPlatformProductListing$tradingPlatformPayloadJSResult"));
                            return A.payloadOut = t.DataConversion.JSNodeParamConverter.from(S.Payload, t.DataTypes.DataTypes.Text), A
                        }, {}, {})
                    } finally {
                        f && f.end()
                    }
                }, 1), u.default.derivApiSendMessage$Action(c.value.payloadOut, "trading_platform_product_listing", !1, a).then(function(f) {
                    i.value = f
                }).then(function() {
                    i.value.isErrorOut || (d.value = t.Logger.startActiveSpan("ModifyData", function(f) {
                        f && (f.setAttribute("code.function", "ModifyData"), f.setAttribute("outsystems.function.key", "9c5be832-2cf3-4a33-996d-b3a8e2bf6ef3"), f.setAttribute("outsystems.function.owner.name", "tradershub"), f.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), f.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                        try {
                            return l.safeExecuteJSNode(h8, "ModifyData", "TradingPlatformProductListing", {
                                Data: t.DataConversion.JSNodeParamConverter.to(i.value.responseOut, t.DataTypes.DataTypes.Text),
                                Response: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text)
                            }, function(S) {
                                var A = new(l.constructor.getVariableGroupType("tradershub.TradingPlatformProductListing$modifyDataJSResult"));
                                return A.responseOut = t.DataConversion.JSNodeParamConverter.from(S.Response, t.DataTypes.DataTypes.Text), A
                            }, {}, {})
                        } finally {
                            f && f.end()
                        }
                    }, 1), y.value.dataOut = t.JSONUtils.deserializeFromJSON(d.value.responseOut, Ku, !1), T.value.responseOut = y.value.dataOut)
                })
            }).then(function() {
                return T.value
            })
        }, function() {
            n && n.end()
        })
    }, 1)
};
u.constructor.registerVariableGroupType("tradershub.TradingPlatformProductListing$vars", [{
    name: "CountryCode",
    attrName: "countryCodeInLocal",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.constructor.registerVariableGroupType("tradershub.TradingPlatformProductListing$tradingPlatformPayloadJSResult", [{
    name: "Payload",
    attrName: "payloadOut",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.constructor.registerVariableGroupType("tradershub.TradingPlatformProductListing$modifyDataJSResult", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.constructor.registerVariableGroupType("tradershub.TradingPlatformProductListing$outVars", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new Ku
    }, "defaultValue"),
    complexType: Ku
}]);
u.clientActionProxies.tradingPlatformProductListing$Action = function(o) {
    return o = o === void 0 ? "" : o, l.executeActionInsideJSNode(u.default.tradingPlatformProductListing$Action.bind(l, t.DataConversion.JSNodeParamConverter.from(o, t.DataTypes.DataTypes.Text)), t.Controller.BaseViewController.activeScreen ? t.Controller.BaseViewController.activeScreen.callContext() : void 0, function(a) {
        return {
            Response: a.responseOut
        }
    })
};
u.tradingPlatformStatus$Action = function(o) {
    return t.Logger.startActiveSpan("TradingPlatformStatus", function(a) {
        return a && (a.setAttribute("code.function", "TradingPlatformStatus"), a.setAttribute("outsystems.function.key", "1749a397-044e-40dc-8eec-ea7ef7db361a"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_ACTION")), t.Flow.tryFinally(function() {
            o = l.callContext(o);
            var n = new t.DataTypes.VariableHolder,
                p = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.TradingPlatformStatus$outVars")));
            return t.Flow.executeAsyncFlow(function() {
                return u.default.derivApiSendMessage$Action("", "trading_platform_status", !0, o).then(function(i) {
                    n.value = i
                }).then(function() {
                    n.value.isErrorOut ? t.FeedbackMessageService.showFeedbackMessage(n.value.errorMessageOut, 3) : p.value.responseOut = n.value.responseOut
                })
            }).then(function() {
                return p.value
            })
        }, function() {
            a && a.end()
        })
    }, 1)
};
u.constructor.registerVariableGroupType("tradershub.TradingPlatformStatus$outVars", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.clientActionProxies.tradingPlatformStatus$Action = function() {
    return l.executeActionInsideJSNode(u.default.tradingPlatformStatus$Action.bind(l), t.Controller.BaseViewController.activeScreen ? t.Controller.BaseViewController.activeScreen.callContext() : void 0, function(o) {
        return {
            Response: t.DataConversion.JSNodeParamConverter.to(o.responseOut, t.DataTypes.DataTypes.Text)
        }
    })
};
u.transferBetweenAccounts$Action = function(o, a, n, p, i) {
    return t.Logger.startActiveSpan("TransferBetweenAccounts", function(c) {
        return c && (c.setAttribute("code.function", "TransferBetweenAccounts"), c.setAttribute("outsystems.function.key", "977be779-d9cb-4555-8954-2b77d788ad7d"), c.setAttribute("outsystems.function.owner.name", "tradershub"), c.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), c.setAttribute("outsystems.function.type", "CLIENT_ACTION")), t.Flow.tryFinally(function() {
            i = l.callContext(i);
            var d = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.TransferBetweenAccounts$vars")));
            d.value.transferFromInLocal = o, d.value.transferToInLocal = a, d.value.amountInLocal = n, d.value.currencyInLocal = p;
            var y = new t.DataTypes.VariableHolder,
                T = new t.DataTypes.VariableHolder,
                f = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.TransferBetweenAccounts$outVars")));
            return t.Flow.executeAsyncFlow(function() {
                return T.value = t.Logger.startActiveSpan("Payload", function(S) {
                    S && (S.setAttribute("code.function", "Payload"), S.setAttribute("outsystems.function.key", "d1bd591e-12b6-4f74-8a28-20ef06913ea5"), S.setAttribute("outsystems.function.owner.name", "tradershub"), S.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), S.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                    try {
                        return l.safeExecuteJSNode(w8, "Payload", "TransferBetweenAccounts", {
                            Amount: t.DataConversion.JSNodeParamConverter.to(d.value.amountInLocal, t.DataTypes.DataTypes.Currency),
                            TransferTo: t.DataConversion.JSNodeParamConverter.to(d.value.transferToInLocal, t.DataTypes.DataTypes.Text),
                            TransferFrom: t.DataConversion.JSNodeParamConverter.to(d.value.transferFromInLocal, t.DataTypes.DataTypes.Text),
                            Currency: t.DataConversion.JSNodeParamConverter.to(d.value.currencyInLocal, t.DataTypes.DataTypes.Text),
                            Payload: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text)
                        }, function(A) {
                            var b = new(l.constructor.getVariableGroupType("tradershub.TransferBetweenAccounts$payloadJSResult"));
                            return b.payloadOut = t.DataConversion.JSNodeParamConverter.from(A.Payload, t.DataTypes.DataTypes.Text), b
                        }, {}, {})
                    } finally {
                        S && S.end()
                    }
                }, 1), u.default.derivApiSendMessage$Action(T.value.payloadOut, "transfer_between_accounts", !1, i).then(function(S) {
                    y.value = S
                }).then(function() {
                    y.value.isErrorOut ? f.value.isErrorOut = y.value.isErrorOut : f.value.responseOut = y.value.responseOut
                })
            }).then(function() {
                return f.value
            })
        }, function() {
            c && c.end()
        })
    }, 1)
};
u.constructor.registerVariableGroupType("tradershub.TransferBetweenAccounts$vars", [{
    name: "TransferFrom",
    attrName: "transferFromInLocal",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "TransferTo",
    attrName: "transferToInLocal",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "Amount",
    attrName: "amountInLocal",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Currency,
    defaultValue: r(function() {
        return t.DataTypes.Decimal.defaultValue
    }, "defaultValue")
}, {
    name: "Currency",
    attrName: "currencyInLocal",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.constructor.registerVariableGroupType("tradershub.TransferBetweenAccounts$payloadJSResult", [{
    name: "Payload",
    attrName: "payloadOut",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.constructor.registerVariableGroupType("tradershub.TransferBetweenAccounts$outVars", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "IsError",
    attrName: "isErrorOut",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Boolean,
    defaultValue: r(function() {
        return !1
    }, "defaultValue")
}]);
u.clientActionProxies.transferBetweenAccounts$Action = function(o, a, n, p) {
    return o = o === void 0 ? "" : o, a = a === void 0 ? "" : a, n = n === void 0 ? t.DataTypes.Decimal.defaultValue : n, p = p === void 0 ? "" : p, l.executeActionInsideJSNode(u.default.transferBetweenAccounts$Action.bind(l, t.DataConversion.JSNodeParamConverter.from(o, t.DataTypes.DataTypes.Text), t.DataConversion.JSNodeParamConverter.from(a, t.DataTypes.DataTypes.Text), t.DataConversion.JSNodeParamConverter.from(n, t.DataTypes.DataTypes.Currency), t.DataConversion.JSNodeParamConverter.from(p, t.DataTypes.DataTypes.Text)), t.Controller.BaseViewController.activeScreen ? t.Controller.BaseViewController.activeScreen.callContext() : void 0, function(i) {
        return {
            Response: t.DataConversion.JSNodeParamConverter.to(i.responseOut, t.DataTypes.DataTypes.Text),
            IsError: t.DataConversion.JSNodeParamConverter.to(i.isErrorOut, t.DataTypes.DataTypes.Boolean)
        }
    })
};
u.verifyEmail$Action = function(o, a, n) {
    return t.Logger.startActiveSpan("VerifyEmail", function(p) {
        return p && (p.setAttribute("code.function", "VerifyEmail"), p.setAttribute("outsystems.function.key", "0ecaa83f-a500-4b3e-955a-83512e461f11"), p.setAttribute("outsystems.function.owner.name", "tradershub"), p.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), p.setAttribute("outsystems.function.type", "CLIENT_ACTION")), t.Flow.tryFinally(function() {
            n = l.callContext(n);
            var i = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.VerifyEmail$vars")));
            i.value.typeInLocal = o, i.value.userEmailInLocal = a;
            var c = new t.DataTypes.VariableHolder,
                d = new t.DataTypes.VariableHolder,
                y = new t.DataTypes.VariableHolder(new(t.Controller.BaseController.getJSONDeserializeOutputType(E))),
                T = new t.DataTypes.VariableHolder(new(t.Controller.BaseController.getJSONDeserializeOutputType(E))),
                f = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("tradershub.VerifyEmail$outVars")));
            return t.Flow.executeAsyncFlow(function() {
                return d.value = t.Logger.startActiveSpan("VerifyEmailPayload", function(S) {
                    S && (S.setAttribute("code.function", "VerifyEmailPayload"), S.setAttribute("outsystems.function.key", "fdadca14-7a7e-4da4-a2cd-8ece16702e2c"), S.setAttribute("outsystems.function.owner.name", "tradershub"), S.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), S.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                    try {
                        return l.safeExecuteJSNode(I8, "VerifyEmailPayload", "VerifyEmail", {
                            Type: t.DataConversion.JSNodeParamConverter.to(i.value.typeInLocal, t.DataTypes.DataTypes.Text),
                            UserEmail: t.DataConversion.JSNodeParamConverter.to(i.value.userEmailInLocal, t.DataTypes.DataTypes.Email),
                            Payload: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text)
                        }, function(A) {
                            var b = new(l.constructor.getVariableGroupType("tradershub.VerifyEmail$verifyEmailPayloadJSResult"));
                            return b.payloadOut = t.DataConversion.JSNodeParamConverter.from(A.Payload, t.DataTypes.DataTypes.Text), b
                        }, {}, {})
                    } finally {
                        S && S.end()
                    }
                }, 1), u.default.derivApiSendMessage$Action(d.value.payloadOut, "verify_email", !1, n).then(function(S) {
                    c.value = S
                }).then(function() {
                    c.value.isErrorOut ? (y.value.dataOut = t.JSONUtils.deserializeFromJSON(c.value.responseOut, E, !1), f.value.responseOut = y.value.dataOut, f.value.isErrorOut = c.value.isErrorOut) : (T.value.dataOut = t.JSONUtils.deserializeFromJSON(c.value.responseOut, E, !1), f.value.responseOut = T.value.dataOut)
                })
            }).then(function() {
                return f.value
            })
        }, function() {
            p && p.end()
        })
    }, 1)
};
u.constructor.registerVariableGroupType("tradershub.VerifyEmail$vars", [{
    name: "Type",
    attrName: "typeInLocal",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}, {
    name: "UserEmail",
    attrName: "userEmailInLocal",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Email,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.constructor.registerVariableGroupType("tradershub.VerifyEmail$verifyEmailPayloadJSResult", [{
    name: "Payload",
    attrName: "payloadOut",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: r(function() {
        return ""
    }, "defaultValue")
}]);
u.constructor.registerVariableGroupType("tradershub.VerifyEmail$outVars", [{
    name: "Response",
    attrName: "responseOut",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Record,
    defaultValue: r(function() {
        return new E
    }, "defaultValue"),
    complexType: E
}, {
    name: "IsError",
    attrName: "isErrorOut",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Boolean,
    defaultValue: r(function() {
        return !1
    }, "defaultValue")
}]);
u.clientActionProxies.verifyEmail$Action = function(o, a) {
    return o = o === void 0 ? "" : o, a = a === void 0 ? "" : a, l.executeActionInsideJSNode(u.default.verifyEmail$Action.bind(l, t.DataConversion.JSNodeParamConverter.from(o, t.DataTypes.DataTypes.Text), t.DataConversion.JSNodeParamConverter.from(a, t.DataTypes.DataTypes.Email)), t.Controller.BaseViewController.activeScreen ? t.Controller.BaseViewController.activeScreen.callContext() : void 0, function(n) {
        return {
            Response: n.responseOut,
            IsError: t.DataConversion.JSNodeParamConverter.to(n.isErrorOut, t.DataTypes.DataTypes.Boolean)
        }
    })
};
u.getAccountPurposeAction$ServerAction = function(o) {
    var a = this.controller;
    return t.Logger.startActiveSpan("GetAccountPurposeAction", function(n) {
        return n && (n.setAttribute("code.function", "GetAccountPurposeAction"), n.setAttribute("outsystems.function.key", "752d59d0-4e90-4b49-9aa3-94169f658d05"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), t.Flow.tryFinally(function() {
            return a.callServerAction("GetAccountPurposeAction", "screenservices/tradershub/ActionGetAccountPurposeAction", "nlXm9eiYtZeC+guhVFgzPA", {}, a.callContext(o), void 0, void 0, !0).then(function(p) {
                var i = new(a.constructor.getVariableGroupType("tradershub$ActionGetAccountPurposeAction"));
                return i.accountPurposeListOut = t.DataConversion.ServerDataConverter.from(p.AccountPurposeList, no), i
            })
        }, function() {
            n && n.end()
        })
    }, 0)
};
u.constructor.registerVariableGroupType("tradershub$ActionGetAccountPurposeAction", [{
    name: "AccountPurposeList",
    attrName: "accountPurposeListOut",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.RecordList,
    defaultValue: r(function() {
        return new no
    }, "defaultValue"),
    complexType: no
}]);
u.getEmploymentStatusList$ServerAction = function(o) {
    var a = this.controller;
    return t.Logger.startActiveSpan("GetEmploymentStatusList", function(n) {
        return n && (n.setAttribute("code.function", "GetEmploymentStatusList"), n.setAttribute("outsystems.function.key", "b5171021-f65d-4e82-9f90-a92a1d408eac"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), t.Flow.tryFinally(function() {
            return a.callServerAction("GetEmploymentStatusList", "screenservices/tradershub/ActionGetEmploymentStatusList", "b0wIu9JXTNiviy1IS5ibvg", {}, a.callContext(o), void 0, void 0, !0).then(function(p) {
                var i = new(a.constructor.getVariableGroupType("tradershub$ActionGetEmploymentStatusList"));
                return i.employmentStatusListOut = t.DataConversion.ServerDataConverter.from(p.EmploymentStatusList, to), i
            })
        }, function() {
            n && n.end()
        })
    }, 0)
};
u.constructor.registerVariableGroupType("tradershub$ActionGetEmploymentStatusList", [{
    name: "EmploymentStatusList",
    attrName: "employmentStatusListOut",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.RecordList,
    defaultValue: r(function() {
        return new to
    }, "defaultValue"),
    complexType: to
}]);
var $Pe = u;
export {
    g as a, k8 as b, Yf as c, $Pe as d
};