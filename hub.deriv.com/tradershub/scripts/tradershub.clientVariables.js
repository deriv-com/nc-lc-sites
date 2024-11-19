define("tradershub.clientVariables", ["@outsystems/runtime-core-js"], function (OSRuntimeCore) {
var OS = OSRuntimeCore;
var clientVarsService;
class ClientVariables {
constructor() {
clientVarsService = OS.Injector.resolve(OS.ServiceNames.ClientVariablesService);
}

getIsResetPasswordValid() {
return clientVarsService.getVariable("IsResetPasswordValid", "tradershub", OS.DataTypes.DataTypes.Boolean);
}

setIsResetPasswordValid(value) {
return clientVarsService.setVariable("IsResetPasswordValid", "tradershub", OS.DataTypes.DataTypes.Boolean, value);
}

getToken() {
return clientVarsService.getVariable("Token", "tradershub", OS.DataTypes.DataTypes.Text);
}

setToken(value) {
return clientVarsService.setVariable("Token", "tradershub", OS.DataTypes.DataTypes.Text, value);
}

getRealSignupFatcaDeclaration() {
return clientVarsService.getVariable("RealSignupFatcaDeclaration", "tradershub", OS.DataTypes.DataTypes.Text, "0");
}

setRealSignupFatcaDeclaration(value) {
return clientVarsService.setVariable("RealSignupFatcaDeclaration", "tradershub", OS.DataTypes.DataTypes.Text, value);
}

getCode() {
return clientVarsService.getVariable("Code", "tradershub", OS.DataTypes.DataTypes.Text);
}

setCode(value) {
return clientVarsService.setVariable("Code", "tradershub", OS.DataTypes.DataTypes.Text, value);
}

getFinancialExperience() {
return clientVarsService.getVariable("FinancialExperience", "tradershub", OS.DataTypes.DataTypes.Text);
}

setFinancialExperience(value) {
return clientVarsService.setVariable("FinancialExperience", "tradershub", OS.DataTypes.DataTypes.Text, value);
}

getCFDLeverage() {
return clientVarsService.getVariable("CFDLeverage", "tradershub", OS.DataTypes.DataTypes.Text);
}

setCFDLeverage(value) {
return clientVarsService.setVariable("CFDLeverage", "tradershub", OS.DataTypes.DataTypes.Text, value);
}

getRealSignupDateofBirth() {
return clientVarsService.getVariable("RealSignupDateofBirth", "tradershub", OS.DataTypes.DataTypes.Text);
}

setRealSignupDateofBirth(value) {
return clientVarsService.setVariable("RealSignupDateofBirth", "tradershub", OS.DataTypes.DataTypes.Text, value);
}

getFinancialAssessmentNetIncome() {
return clientVarsService.getVariable("FinancialAssessmentNetIncome", "tradershub", OS.DataTypes.DataTypes.Text);
}

setFinancialAssessmentNetIncome(value) {
return clientVarsService.setVariable("FinancialAssessmentNetIncome", "tradershub", OS.DataTypes.DataTypes.Text, value);
}

getFinancialAssessmentSourceOfWealth() {
return clientVarsService.getVariable("FinancialAssessmentSourceOfWealth", "tradershub", OS.DataTypes.DataTypes.Text);
}

setFinancialAssessmentSourceOfWealth(value) {
return clientVarsService.setVariable("FinancialAssessmentSourceOfWealth", "tradershub", OS.DataTypes.DataTypes.Text, value);
}

getRealSignupTaxResidence() {
return clientVarsService.getVariable("RealSignupTaxResidence", "tradershub", OS.DataTypes.DataTypes.Text);
}

setRealSignupTaxResidence(value) {
return clientVarsService.setVariable("RealSignupTaxResidence", "tradershub", OS.DataTypes.DataTypes.Text, value);
}

getRealSignupPassedStepCount() {
return clientVarsService.getVariable("RealSignupPassedStepCount", "tradershub", OS.DataTypes.DataTypes.Integer);
}

setRealSignupPassedStepCount(value) {
return clientVarsService.setVariable("RealSignupPassedStepCount", "tradershub", OS.DataTypes.DataTypes.Integer, value);
}

getFinancialAssessmentIncomeSource() {
return clientVarsService.getVariable("FinancialAssessmentIncomeSource", "tradershub", OS.DataTypes.DataTypes.Text);
}

setFinancialAssessmentIncomeSource(value) {
return clientVarsService.setVariable("FinancialAssessmentIncomeSource", "tradershub", OS.DataTypes.DataTypes.Text, value);
}

getCreatedCFDRealAccounts() {
return clientVarsService.getVariable("CreatedCFDRealAccounts", "tradershub", OS.DataTypes.DataTypes.Text);
}

setCreatedCFDRealAccounts(value) {
return clientVarsService.setVariable("CreatedCFDRealAccounts", "tradershub", OS.DataTypes.DataTypes.Text, value);
}

getRealSignupIsIDVSupported() {
return clientVarsService.getVariable("RealSignupIsIDVSupported", "tradershub", OS.DataTypes.DataTypes.Boolean, false);
}

setRealSignupIsIDVSupported(value) {
return clientVarsService.setVariable("RealSignupIsIDVSupported", "tradershub", OS.DataTypes.DataTypes.Boolean, value);
}

getRealSignupAccountOpeningReason() {
return clientVarsService.getVariable("RealSignupAccountOpeningReason", "tradershub", OS.DataTypes.DataTypes.Text);
}

setRealSignupAccountOpeningReason(value) {
return clientVarsService.setVariable("RealSignupAccountOpeningReason", "tradershub", OS.DataTypes.DataTypes.Text, value);
}

getSelectedCurrencyCode() {
return clientVarsService.getVariable("SelectedCurrencyCode", "tradershub", OS.DataTypes.DataTypes.Text);
}

setSelectedCurrencyCode(value) {
return clientVarsService.setVariable("SelectedCurrencyCode", "tradershub", OS.DataTypes.DataTypes.Text, value);
}

getIsEuUser() {
return clientVarsService.getVariable("IsEuUser", "tradershub", OS.DataTypes.DataTypes.Boolean);
}

setIsEuUser(value) {
return clientVarsService.setVariable("IsEuUser", "tradershub", OS.DataTypes.DataTypes.Boolean, value);
}

getProductionHostName() {
return clientVarsService.getVariable("ProductionHostName", "tradershub", OS.DataTypes.DataTypes.Text, "hub.deriv.com");
}

setProductionHostName(value) {
return clientVarsService.setVariable("ProductionHostName", "tradershub", OS.DataTypes.DataTypes.Text, value);
}

getRawLandingCompanyResponse() {
return clientVarsService.getVariable("RawLandingCompanyResponse", "tradershub", OS.DataTypes.DataTypes.Text);
}

setRawLandingCompanyResponse(value) {
return clientVarsService.setVariable("RawLandingCompanyResponse", "tradershub", OS.DataTypes.DataTypes.Text, value);
}

getRealSignupEmployementStatus() {
return clientVarsService.getVariable("RealSignupEmployementStatus", "tradershub", OS.DataTypes.DataTypes.Text);
}

setRealSignupEmployementStatus(value) {
return clientVarsService.setVariable("RealSignupEmployementStatus", "tradershub", OS.DataTypes.DataTypes.Text, value);
}

getUserPhotoURL() {
return clientVarsService.getVariable("UserPhotoURL", "tradershub", OS.DataTypes.DataTypes.Text);
}

setUserPhotoURL(value) {
return clientVarsService.setVariable("UserPhotoURL", "tradershub", OS.DataTypes.DataTypes.Text, value);
}

getResetPasswordLinkExpired() {
return clientVarsService.getVariable("ResetPasswordLinkExpired", "tradershub", OS.DataTypes.DataTypes.Boolean);
}

setResetPasswordLinkExpired(value) {
return clientVarsService.setVariable("ResetPasswordLinkExpired", "tradershub", OS.DataTypes.DataTypes.Boolean, value);
}

getAppId() {
return clientVarsService.getVariable("AppId", "tradershub", OS.DataTypes.DataTypes.Text, "61554");
}

setAppId(value) {
return clientVarsService.setVariable("AppId", "tradershub", OS.DataTypes.DataTypes.Text, value);
}

getRealSignupAddress() {
return clientVarsService.getVariable("RealSignupAddress", "tradershub", OS.DataTypes.DataTypes.Text);
}

setRealSignupAddress(value) {
return clientVarsService.setVariable("RealSignupAddress", "tradershub", OS.DataTypes.DataTypes.Text, value);
}

getIsSpain() {
return clientVarsService.getVariable("IsSpain", "tradershub", OS.DataTypes.DataTypes.Boolean);
}

setIsSpain(value) {
return clientVarsService.setVariable("IsSpain", "tradershub", OS.DataTypes.DataTypes.Boolean, value);
}

getCFDAllow() {
return clientVarsService.getVariable("CFDAllow", "tradershub", OS.DataTypes.DataTypes.Text);
}

setCFDAllow(value) {
return clientVarsService.setVariable("CFDAllow", "tradershub", OS.DataTypes.DataTypes.Text, value);
}

getAccountType() {
return clientVarsService.getVariable("AccountType", "tradershub", OS.DataTypes.DataTypes.Text, "real");
}

setAccountType(value) {
return clientVarsService.setVariable("AccountType", "tradershub", OS.DataTypes.DataTypes.Text, value);
}

getLastURL() {
return clientVarsService.getVariable("LastURL", "tradershub", OS.DataTypes.DataTypes.Text);
}

setLastURL(value) {
return clientVarsService.setVariable("LastURL", "tradershub", OS.DataTypes.DataTypes.Text, value);
}

getTempClientCountry() {
return clientVarsService.getVariable("TempClientCountry", "tradershub", OS.DataTypes.DataTypes.Text);
}

setTempClientCountry(value) {
return clientVarsService.setVariable("TempClientCountry", "tradershub", OS.DataTypes.DataTypes.Text, value);
}

getWebsocketURL() {
return clientVarsService.getVariable("WebsocketURL", "tradershub", OS.DataTypes.DataTypes.Text, "wss://green.derivws.com/websockets/v3?app_id=53503&l=EN&brand=deriv");
}

setWebsocketURL(value) {
return clientVarsService.setVariable("WebsocketURL", "tradershub", OS.DataTypes.DataTypes.Text, value);
}

getCFDTradePastYear() {
return clientVarsService.getVariable("CFDTradePastYear", "tradershub", OS.DataTypes.DataTypes.Text);
}

setCFDTradePastYear(value) {
return clientVarsService.setVariable("CFDTradePastYear", "tradershub", OS.DataTypes.DataTypes.Text, value);
}

getRealSignupCurrentStep() {
return clientVarsService.getVariable("RealSignupCurrentStep", "tradershub", OS.DataTypes.DataTypes.Integer, 1);
}

setRealSignupCurrentStep(value) {
return clientVarsService.setVariable("RealSignupCurrentStep", "tradershub", OS.DataTypes.DataTypes.Integer, value);
}

getRiskManagement() {
return clientVarsService.getVariable("RiskManagement", "tradershub", OS.DataTypes.DataTypes.Text);
}

setRiskManagement(value) {
return clientVarsService.setVariable("RiskManagement", "tradershub", OS.DataTypes.DataTypes.Text, value);
}

getRealSignupFirstName() {
return clientVarsService.getVariable("RealSignupFirstName", "tradershub", OS.DataTypes.DataTypes.Text);
}

setRealSignupFirstName(value) {
return clientVarsService.setVariable("RealSignupFirstName", "tradershub", OS.DataTypes.DataTypes.Text, value);
}

getLinkedTo() {
return clientVarsService.getVariable("LinkedTo", "tradershub", OS.DataTypes.DataTypes.Text);
}

setLinkedTo(value) {
return clientVarsService.setVariable("LinkedTo", "tradershub", OS.DataTypes.DataTypes.Text, value);
}

getSalutation() {
return clientVarsService.getVariable("Salutation", "tradershub", OS.DataTypes.DataTypes.Text);
}

setSalutation(value) {
return clientVarsService.setVariable("Salutation", "tradershub", OS.DataTypes.DataTypes.Text, value);
}

getRawResidenceListResponse() {
return clientVarsService.getVariable("RawResidenceListResponse", "tradershub", OS.DataTypes.DataTypes.Text, "");
}

setRawResidenceListResponse(value) {
return clientVarsService.setVariable("RawResidenceListResponse", "tradershub", OS.DataTypes.DataTypes.Text, value);
}

getFinancialAssessmentEmploymentIndustry() {
return clientVarsService.getVariable("FinancialAssessmentEmploymentIndustry", "tradershub", OS.DataTypes.DataTypes.Text);
}

setFinancialAssessmentEmploymentIndustry(value) {
return clientVarsService.setVariable("FinancialAssessmentEmploymentIndustry", "tradershub", OS.DataTypes.DataTypes.Text, value);
}

getCreatedCFDDemoAccounts() {
return clientVarsService.getVariable("CreatedCFDDemoAccounts", "tradershub", OS.DataTypes.DataTypes.Text);
}

setCreatedCFDDemoAccounts(value) {
return clientVarsService.setVariable("CreatedCFDDemoAccounts", "tradershub", OS.DataTypes.DataTypes.Text, value);
}

getFinancialAssessmentEstimatedWorth() {
return clientVarsService.getVariable("FinancialAssessmentEstimatedWorth", "tradershub", OS.DataTypes.DataTypes.Text);
}

setFinancialAssessmentEstimatedWorth(value) {
return clientVarsService.setVariable("FinancialAssessmentEstimatedWorth", "tradershub", OS.DataTypes.DataTypes.Text, value);
}

getClientCountry() {
return clientVarsService.getVariable("ClientCountry", "tradershub", OS.DataTypes.DataTypes.Text, "");
}

setClientCountry(value) {
return clientVarsService.setVariable("ClientCountry", "tradershub", OS.DataTypes.DataTypes.Text, value);
}

getUserName() {
return clientVarsService.getVariable("UserName", "tradershub", OS.DataTypes.DataTypes.Text, "John Doe");
}

setUserName(value) {
return clientVarsService.setVariable("UserName", "tradershub", OS.DataTypes.DataTypes.Text, value);
}

getSignupEmail() {
return clientVarsService.getVariable("SignupEmail", "tradershub", OS.DataTypes.DataTypes.Text, "test@gmail.com");
}

setSignupEmail(value) {
return clientVarsService.setVariable("SignupEmail", "tradershub", OS.DataTypes.DataTypes.Text, value);
}

getDemoLoginId() {
return clientVarsService.getVariable("DemoLoginId", "tradershub", OS.DataTypes.DataTypes.Text);
}

setDemoLoginId(value) {
return clientVarsService.setVariable("DemoLoginId", "tradershub", OS.DataTypes.DataTypes.Text, value);
}

getAction() {
return clientVarsService.getVariable("Action", "tradershub", OS.DataTypes.DataTypes.Text);
}

setAction(value) {
return clientVarsService.setVariable("Action", "tradershub", OS.DataTypes.DataTypes.Text, value);
}

getRealSignupAddressState() {
return clientVarsService.getVariable("RealSignupAddressState", "tradershub", OS.DataTypes.DataTypes.Text);
}

setRealSignupAddressState(value) {
return clientVarsService.setVariable("RealSignupAddressState", "tradershub", OS.DataTypes.DataTypes.Text, value);
}

getDefaultWebsocketURL() {
return clientVarsService.getVariable("DefaultWebsocketURL", "tradershub", OS.DataTypes.DataTypes.Text, "wss://green.derivws.com/websockets/v3?app_id=53503&l=EN&brand=deriv");
}

setDefaultWebsocketURL(value) {
return clientVarsService.setVariable("DefaultWebsocketURL", "tradershub", OS.DataTypes.DataTypes.Text, value);
}

getRealSignupTaxResidenceLabel() {
return clientVarsService.getVariable("RealSignupTaxResidenceLabel", "tradershub", OS.DataTypes.DataTypes.Text);
}

setRealSignupTaxResidenceLabel(value) {
return clientVarsService.setVariable("RealSignupTaxResidenceLabel", "tradershub", OS.DataTypes.DataTypes.Text, value);
}

getURL() {
return clientVarsService.getVariable("URL", "tradershub", OS.DataTypes.DataTypes.Text, "green.derivws.com");
}

setURL(value) {
return clientVarsService.setVariable("URL", "tradershub", OS.DataTypes.DataTypes.Text, value);
}

getCFDTradingExperience() {
return clientVarsService.getVariable("CFDTradingExperience", "tradershub", OS.DataTypes.DataTypes.Text);
}

setCFDTradingExperience(value) {
return clientVarsService.setVariable("CFDTradingExperience", "tradershub", OS.DataTypes.DataTypes.Text, value);
}

getRealSignupIDVAdditionalDocumentNumberLabel() {
return clientVarsService.getVariable("RealSignupIDVAdditionalDocumentNumberLabel", "tradershub", OS.DataTypes.DataTypes.Text);
}

setRealSignupIDVAdditionalDocumentNumberLabel(value) {
return clientVarsService.setVariable("RealSignupIDVAdditionalDocumentNumberLabel", "tradershub", OS.DataTypes.DataTypes.Text, value);
}

getPotentialLost() {
return clientVarsService.getVariable("PotentialLost", "tradershub", OS.DataTypes.DataTypes.Text);
}

setPotentialLost(value) {
return clientVarsService.setVariable("PotentialLost", "tradershub", OS.DataTypes.DataTypes.Text, value);
}

getSelectedProduct() {
return clientVarsService.getVariable("SelectedProduct", "tradershub", OS.DataTypes.DataTypes.Text, "");
}

setSelectedProduct(value) {
return clientVarsService.setVariable("SelectedProduct", "tradershub", OS.DataTypes.DataTypes.Text, value);
}

getRawWebsiteStatusResponse() {
return clientVarsService.getVariable("RawWebsiteStatusResponse", "tradershub", OS.DataTypes.DataTypes.Text, "");
}

setRawWebsiteStatusResponse(value) {
return clientVarsService.setVariable("RawWebsiteStatusResponse", "tradershub", OS.DataTypes.DataTypes.Text, value);
}

getSelectedResidence() {
return clientVarsService.getVariable("SelectedResidence", "tradershub", OS.DataTypes.DataTypes.Text);
}

setSelectedResidence(value) {
return clientVarsService.setVariable("SelectedResidence", "tradershub", OS.DataTypes.DataTypes.Text, value);
}

getKnowledgeAnExperience() {
return clientVarsService.getVariable("KnowledgeAnExperience", "tradershub", OS.DataTypes.DataTypes.Text);
}

setKnowledgeAnExperience(value) {
return clientVarsService.setVariable("KnowledgeAnExperience", "tradershub", OS.DataTypes.DataTypes.Text, value);
}

getSelectedCitizenship() {
return clientVarsService.getVariable("SelectedCitizenship", "tradershub", OS.DataTypes.DataTypes.Text);
}

setSelectedCitizenship(value) {
return clientVarsService.setVariable("SelectedCitizenship", "tradershub", OS.DataTypes.DataTypes.Text, value);
}

getRealSignupAddressTown() {
return clientVarsService.getVariable("RealSignupAddressTown", "tradershub", OS.DataTypes.DataTypes.Text);
}

setRealSignupAddressTown(value) {
return clientVarsService.setVariable("RealSignupAddressTown", "tradershub", OS.DataTypes.DataTypes.Text, value);
}

getRealSignupIDVDocumentNumber() {
return clientVarsService.getVariable("RealSignupIDVDocumentNumber", "tradershub", OS.DataTypes.DataTypes.Text);
}

setRealSignupIDVDocumentNumber(value) {
return clientVarsService.setVariable("RealSignupIDVDocumentNumber", "tradershub", OS.DataTypes.DataTypes.Text, value);
}

getConfirmedNotResident() {
return clientVarsService.getVariable("ConfirmedNotResident", "tradershub", OS.DataTypes.DataTypes.Boolean);
}

setConfirmedNotResident(value) {
return clientVarsService.setVariable("ConfirmedNotResident", "tradershub", OS.DataTypes.DataTypes.Boolean, value);
}

getStagingHostName() {
return clientVarsService.getVariable("StagingHostName", "tradershub", OS.DataTypes.DataTypes.Text, "staging-hub.deriv.com");
}

setStagingHostName(value) {
return clientVarsService.setVariable("StagingHostName", "tradershub", OS.DataTypes.DataTypes.Text, value);
}

getLang() {
return clientVarsService.getVariable("Lang", "tradershub", OS.DataTypes.DataTypes.Text, "EN");
}

setLang(value) {
return clientVarsService.setVariable("Lang", "tradershub", OS.DataTypes.DataTypes.Text, value);
}

getActiveLoginId() {
return clientVarsService.getVariable("ActiveLoginId", "tradershub", OS.DataTypes.DataTypes.Text);
}

setActiveLoginId(value) {
return clientVarsService.setVariable("ActiveLoginId", "tradershub", OS.DataTypes.DataTypes.Text, value);
}

getClientCountryText() {
return clientVarsService.getVariable("ClientCountryText", "tradershub", OS.DataTypes.DataTypes.Text, "");
}

setClientCountryText(value) {
return clientVarsService.setVariable("ClientCountryText", "tradershub", OS.DataTypes.DataTypes.Text, value);
}

getRealSignupPlaceOfBirth() {
return clientVarsService.getVariable("RealSignupPlaceOfBirth", "tradershub", OS.DataTypes.DataTypes.Text);
}

setRealSignupPlaceOfBirth(value) {
return clientVarsService.setVariable("RealSignupPlaceOfBirth", "tradershub", OS.DataTypes.DataTypes.Text, value);
}

getRealSignupAddressPostCode() {
return clientVarsService.getVariable("RealSignupAddressPostCode", "tradershub", OS.DataTypes.DataTypes.Text);
}

setRealSignupAddressPostCode(value) {
return clientVarsService.setVariable("RealSignupAddressPostCode", "tradershub", OS.DataTypes.DataTypes.Text, value);
}

getClientCurrency() {
return clientVarsService.getVariable("ClientCurrency", "tradershub", OS.DataTypes.DataTypes.Text);
}

setClientCurrency(value) {
return clientVarsService.setVariable("ClientCurrency", "tradershub", OS.DataTypes.DataTypes.Text, value);
}

getAuthToken() {
return clientVarsService.getVariable("AuthToken", "tradershub", OS.DataTypes.DataTypes.Text, "");
}

setAuthToken(value) {
return clientVarsService.setVariable("AuthToken", "tradershub", OS.DataTypes.DataTypes.Text, value);
}

getRealSignupAddressStateLabel() {
return clientVarsService.getVariable("RealSignupAddressStateLabel", "tradershub", OS.DataTypes.DataTypes.Text);
}

setRealSignupAddressStateLabel(value) {
return clientVarsService.setVariable("RealSignupAddressStateLabel", "tradershub", OS.DataTypes.DataTypes.Text, value);
}

getSelectedResidenceLabel() {
return clientVarsService.getVariable("SelectedResidenceLabel", "tradershub", OS.DataTypes.DataTypes.Text);
}

setSelectedResidenceLabel(value) {
return clientVarsService.setVariable("SelectedResidenceLabel", "tradershub", OS.DataTypes.DataTypes.Text, value);
}

getFinancialAssessmentOccupation() {
return clientVarsService.getVariable("FinancialAssessmentOccupation", "tradershub", OS.DataTypes.DataTypes.Text);
}

setFinancialAssessmentOccupation(value) {
return clientVarsService.setVariable("FinancialAssessmentOccupation", "tradershub", OS.DataTypes.DataTypes.Text, value);
}

getRealSignupStateList() {
return clientVarsService.getVariable("RealSignupStateList", "tradershub", OS.DataTypes.DataTypes.Text);
}

setRealSignupStateList(value) {
return clientVarsService.setVariable("RealSignupStateList", "tradershub", OS.DataTypes.DataTypes.Text, value);
}

getRealSignupTIDNumber() {
return clientVarsService.getVariable("RealSignupTIDNumber", "tradershub", OS.DataTypes.DataTypes.Text);
}

setRealSignupTIDNumber(value) {
return clientVarsService.setVariable("RealSignupTIDNumber", "tradershub", OS.DataTypes.DataTypes.Text, value);
}

getInitialMargin() {
return clientVarsService.getVariable("InitialMargin", "tradershub", OS.DataTypes.DataTypes.Text);
}

setInitialMargin(value) {
return clientVarsService.setVariable("InitialMargin", "tradershub", OS.DataTypes.DataTypes.Text, value);
}

getActiveWallet() {
return clientVarsService.getVariable("ActiveWallet", "tradershub", OS.DataTypes.DataTypes.Text);
}

setActiveWallet(value) {
return clientVarsService.setVariable("ActiveWallet", "tradershub", OS.DataTypes.DataTypes.Text, value);
}

getRealSignupTaxIDConfirmation() {
return clientVarsService.getVariable("RealSignupTaxIDConfirmation", "tradershub", OS.DataTypes.DataTypes.Boolean, false);
}

setRealSignupTaxIDConfirmation(value) {
return clientVarsService.setVariable("RealSignupTaxIDConfirmation", "tradershub", OS.DataTypes.DataTypes.Boolean, value);
}

getRealSignupNoTaxInformation() {
return clientVarsService.getVariable("RealSignupNoTaxInformation", "tradershub", OS.DataTypes.DataTypes.Boolean);
}

setRealSignupNoTaxInformation(value) {
return clientVarsService.setVariable("RealSignupNoTaxInformation", "tradershub", OS.DataTypes.DataTypes.Boolean, value);
}

getRealSignupLastName() {
return clientVarsService.getVariable("RealSignupLastName", "tradershub", OS.DataTypes.DataTypes.Text);
}

setRealSignupLastName(value) {
return clientVarsService.setVariable("RealSignupLastName", "tradershub", OS.DataTypes.DataTypes.Text, value);
}

getResetPasswordEmailSent() {
return clientVarsService.getVariable("ResetPasswordEmailSent", "tradershub", OS.DataTypes.DataTypes.Boolean, false);
}

setResetPasswordEmailSent(value) {
return clientVarsService.setVariable("ResetPasswordEmailSent", "tradershub", OS.DataTypes.DataTypes.Boolean, value);
}

getRealSignupPhone() {
return clientVarsService.getVariable("RealSignupPhone", "tradershub", OS.DataTypes.DataTypes.Text);
}

setRealSignupPhone(value) {
return clientVarsService.setVariable("RealSignupPhone", "tradershub", OS.DataTypes.DataTypes.Text, value);
}

getFinancialAssessmentEducationLevel() {
return clientVarsService.getVariable("FinancialAssessmentEducationLevel", "tradershub", OS.DataTypes.DataTypes.Text);
}

setFinancialAssessmentEducationLevel(value) {
return clientVarsService.setVariable("FinancialAssessmentEducationLevel", "tradershub", OS.DataTypes.DataTypes.Text, value);
}

getFinancialAssessmentAccountTurnover() {
return clientVarsService.getVariable("FinancialAssessmentAccountTurnover", "tradershub", OS.DataTypes.DataTypes.Text);
}

setFinancialAssessmentAccountTurnover(value) {
return clientVarsService.setVariable("FinancialAssessmentAccountTurnover", "tradershub", OS.DataTypes.DataTypes.Text, value);
}

getRealSignupSkippedIDV() {
return clientVarsService.getVariable("RealSignupSkippedIDV", "tradershub", OS.DataTypes.DataTypes.Boolean);
}

setRealSignupSkippedIDV(value) {
return clientVarsService.setVariable("RealSignupSkippedIDV", "tradershub", OS.DataTypes.DataTypes.Boolean, value);
}

getFinancialTradePastYear() {
return clientVarsService.getVariable("FinancialTradePastYear", "tradershub", OS.DataTypes.DataTypes.Text);
}

setFinancialTradePastYear(value) {
return clientVarsService.setVariable("FinancialTradePastYear", "tradershub", OS.DataTypes.DataTypes.Text, value);
}

getInitializeRealSignup() {
return clientVarsService.getVariable("InitializeRealSignup", "tradershub", OS.DataTypes.DataTypes.Boolean);
}

setInitializeRealSignup(value) {
return clientVarsService.setVariable("InitializeRealSignup", "tradershub", OS.DataTypes.DataTypes.Boolean, value);
}

getRealSignupIDVDocumentName() {
return clientVarsService.getVariable("RealSignupIDVDocumentName", "tradershub", OS.DataTypes.DataTypes.Text);
}

setRealSignupIDVDocumentName(value) {
return clientVarsService.setVariable("RealSignupIDVDocumentName", "tradershub", OS.DataTypes.DataTypes.Text, value);
}

getRealSignupIDVAdditionalDocumentNumber() {
return clientVarsService.getVariable("RealSignupIDVAdditionalDocumentNumber", "tradershub", OS.DataTypes.DataTypes.Text);
}

setRealSignupIDVAdditionalDocumentNumber(value) {
return clientVarsService.setVariable("RealSignupIDVAdditionalDocumentNumber", "tradershub", OS.DataTypes.DataTypes.Text, value);
}

serialize() {
return {
IsResetPasswordValid: OS.DataConversion.ServerDataConverter.to(this.getIsResetPasswordValid(), OS.DataTypes.DataTypes.Boolean),
Token: OS.DataConversion.ServerDataConverter.to(this.getToken(), OS.DataTypes.DataTypes.Text),
RealSignupFatcaDeclaration: OS.DataConversion.ServerDataConverter.to(this.getRealSignupFatcaDeclaration(), OS.DataTypes.DataTypes.Text),
Code: OS.DataConversion.ServerDataConverter.to(this.getCode(), OS.DataTypes.DataTypes.Text),
FinancialExperience: OS.DataConversion.ServerDataConverter.to(this.getFinancialExperience(), OS.DataTypes.DataTypes.Text),
CFDLeverage: OS.DataConversion.ServerDataConverter.to(this.getCFDLeverage(), OS.DataTypes.DataTypes.Text),
RealSignupDateofBirth: OS.DataConversion.ServerDataConverter.to(this.getRealSignupDateofBirth(), OS.DataTypes.DataTypes.Text),
FinancialAssessmentNetIncome: OS.DataConversion.ServerDataConverter.to(this.getFinancialAssessmentNetIncome(), OS.DataTypes.DataTypes.Text),
FinancialAssessmentSourceOfWealth: OS.DataConversion.ServerDataConverter.to(this.getFinancialAssessmentSourceOfWealth(), OS.DataTypes.DataTypes.Text),
RealSignupTaxResidence: OS.DataConversion.ServerDataConverter.to(this.getRealSignupTaxResidence(), OS.DataTypes.DataTypes.Text),
RealSignupPassedStepCount: OS.DataConversion.ServerDataConverter.to(this.getRealSignupPassedStepCount(), OS.DataTypes.DataTypes.Integer),
FinancialAssessmentIncomeSource: OS.DataConversion.ServerDataConverter.to(this.getFinancialAssessmentIncomeSource(), OS.DataTypes.DataTypes.Text),
CreatedCFDRealAccounts: OS.DataConversion.ServerDataConverter.to(this.getCreatedCFDRealAccounts(), OS.DataTypes.DataTypes.Text),
RealSignupIsIDVSupported: OS.DataConversion.ServerDataConverter.to(this.getRealSignupIsIDVSupported(), OS.DataTypes.DataTypes.Boolean),
RealSignupAccountOpeningReason: OS.DataConversion.ServerDataConverter.to(this.getRealSignupAccountOpeningReason(), OS.DataTypes.DataTypes.Text),
SelectedCurrencyCode: OS.DataConversion.ServerDataConverter.to(this.getSelectedCurrencyCode(), OS.DataTypes.DataTypes.Text),
IsEuUser: OS.DataConversion.ServerDataConverter.to(this.getIsEuUser(), OS.DataTypes.DataTypes.Boolean),
ProductionHostName: OS.DataConversion.ServerDataConverter.to(this.getProductionHostName(), OS.DataTypes.DataTypes.Text),
RawLandingCompanyResponse: OS.DataConversion.ServerDataConverter.to(this.getRawLandingCompanyResponse(), OS.DataTypes.DataTypes.Text),
RealSignupEmployementStatus: OS.DataConversion.ServerDataConverter.to(this.getRealSignupEmployementStatus(), OS.DataTypes.DataTypes.Text),
UserPhotoURL: OS.DataConversion.ServerDataConverter.to(this.getUserPhotoURL(), OS.DataTypes.DataTypes.Text),
ResetPasswordLinkExpired: OS.DataConversion.ServerDataConverter.to(this.getResetPasswordLinkExpired(), OS.DataTypes.DataTypes.Boolean),
AppId: OS.DataConversion.ServerDataConverter.to(this.getAppId(), OS.DataTypes.DataTypes.Text),
RealSignupAddress: OS.DataConversion.ServerDataConverter.to(this.getRealSignupAddress(), OS.DataTypes.DataTypes.Text),
IsSpain: OS.DataConversion.ServerDataConverter.to(this.getIsSpain(), OS.DataTypes.DataTypes.Boolean),
CFDAllow: OS.DataConversion.ServerDataConverter.to(this.getCFDAllow(), OS.DataTypes.DataTypes.Text),
AccountType: OS.DataConversion.ServerDataConverter.to(this.getAccountType(), OS.DataTypes.DataTypes.Text),
LastURL: OS.DataConversion.ServerDataConverter.to(this.getLastURL(), OS.DataTypes.DataTypes.Text),
TempClientCountry: OS.DataConversion.ServerDataConverter.to(this.getTempClientCountry(), OS.DataTypes.DataTypes.Text),
WebsocketURL: OS.DataConversion.ServerDataConverter.to(this.getWebsocketURL(), OS.DataTypes.DataTypes.Text),
CFDTradePastYear: OS.DataConversion.ServerDataConverter.to(this.getCFDTradePastYear(), OS.DataTypes.DataTypes.Text),
RealSignupCurrentStep: OS.DataConversion.ServerDataConverter.to(this.getRealSignupCurrentStep(), OS.DataTypes.DataTypes.Integer),
RiskManagement: OS.DataConversion.ServerDataConverter.to(this.getRiskManagement(), OS.DataTypes.DataTypes.Text),
RealSignupFirstName: OS.DataConversion.ServerDataConverter.to(this.getRealSignupFirstName(), OS.DataTypes.DataTypes.Text),
LinkedTo: OS.DataConversion.ServerDataConverter.to(this.getLinkedTo(), OS.DataTypes.DataTypes.Text),
Salutation: OS.DataConversion.ServerDataConverter.to(this.getSalutation(), OS.DataTypes.DataTypes.Text),
RawResidenceListResponse: OS.DataConversion.ServerDataConverter.to(this.getRawResidenceListResponse(), OS.DataTypes.DataTypes.Text),
FinancialAssessmentEmploymentIndustry: OS.DataConversion.ServerDataConverter.to(this.getFinancialAssessmentEmploymentIndustry(), OS.DataTypes.DataTypes.Text),
CreatedCFDDemoAccounts: OS.DataConversion.ServerDataConverter.to(this.getCreatedCFDDemoAccounts(), OS.DataTypes.DataTypes.Text),
FinancialAssessmentEstimatedWorth: OS.DataConversion.ServerDataConverter.to(this.getFinancialAssessmentEstimatedWorth(), OS.DataTypes.DataTypes.Text),
ClientCountry: OS.DataConversion.ServerDataConverter.to(this.getClientCountry(), OS.DataTypes.DataTypes.Text),
UserName: OS.DataConversion.ServerDataConverter.to(this.getUserName(), OS.DataTypes.DataTypes.Text),
SignupEmail: OS.DataConversion.ServerDataConverter.to(this.getSignupEmail(), OS.DataTypes.DataTypes.Text),
DemoLoginId: OS.DataConversion.ServerDataConverter.to(this.getDemoLoginId(), OS.DataTypes.DataTypes.Text),
Action: OS.DataConversion.ServerDataConverter.to(this.getAction(), OS.DataTypes.DataTypes.Text),
RealSignupAddressState: OS.DataConversion.ServerDataConverter.to(this.getRealSignupAddressState(), OS.DataTypes.DataTypes.Text),
DefaultWebsocketURL: OS.DataConversion.ServerDataConverter.to(this.getDefaultWebsocketURL(), OS.DataTypes.DataTypes.Text),
RealSignupTaxResidenceLabel: OS.DataConversion.ServerDataConverter.to(this.getRealSignupTaxResidenceLabel(), OS.DataTypes.DataTypes.Text),
URL: OS.DataConversion.ServerDataConverter.to(this.getURL(), OS.DataTypes.DataTypes.Text),
CFDTradingExperience: OS.DataConversion.ServerDataConverter.to(this.getCFDTradingExperience(), OS.DataTypes.DataTypes.Text),
RealSignupIDVAdditionalDocumentNumberLabel: OS.DataConversion.ServerDataConverter.to(this.getRealSignupIDVAdditionalDocumentNumberLabel(), OS.DataTypes.DataTypes.Text),
PotentialLost: OS.DataConversion.ServerDataConverter.to(this.getPotentialLost(), OS.DataTypes.DataTypes.Text),
SelectedProduct: OS.DataConversion.ServerDataConverter.to(this.getSelectedProduct(), OS.DataTypes.DataTypes.Text),
RawWebsiteStatusResponse: OS.DataConversion.ServerDataConverter.to(this.getRawWebsiteStatusResponse(), OS.DataTypes.DataTypes.Text),
SelectedResidence: OS.DataConversion.ServerDataConverter.to(this.getSelectedResidence(), OS.DataTypes.DataTypes.Text),
KnowledgeAnExperience: OS.DataConversion.ServerDataConverter.to(this.getKnowledgeAnExperience(), OS.DataTypes.DataTypes.Text),
SelectedCitizenship: OS.DataConversion.ServerDataConverter.to(this.getSelectedCitizenship(), OS.DataTypes.DataTypes.Text),
RealSignupAddressTown: OS.DataConversion.ServerDataConverter.to(this.getRealSignupAddressTown(), OS.DataTypes.DataTypes.Text),
RealSignupIDVDocumentNumber: OS.DataConversion.ServerDataConverter.to(this.getRealSignupIDVDocumentNumber(), OS.DataTypes.DataTypes.Text),
ConfirmedNotResident: OS.DataConversion.ServerDataConverter.to(this.getConfirmedNotResident(), OS.DataTypes.DataTypes.Boolean),
StagingHostName: OS.DataConversion.ServerDataConverter.to(this.getStagingHostName(), OS.DataTypes.DataTypes.Text),
Lang: OS.DataConversion.ServerDataConverter.to(this.getLang(), OS.DataTypes.DataTypes.Text),
ActiveLoginId: OS.DataConversion.ServerDataConverter.to(this.getActiveLoginId(), OS.DataTypes.DataTypes.Text),
ClientCountryText: OS.DataConversion.ServerDataConverter.to(this.getClientCountryText(), OS.DataTypes.DataTypes.Text),
RealSignupPlaceOfBirth: OS.DataConversion.ServerDataConverter.to(this.getRealSignupPlaceOfBirth(), OS.DataTypes.DataTypes.Text),
RealSignupAddressPostCode: OS.DataConversion.ServerDataConverter.to(this.getRealSignupAddressPostCode(), OS.DataTypes.DataTypes.Text),
ClientCurrency: OS.DataConversion.ServerDataConverter.to(this.getClientCurrency(), OS.DataTypes.DataTypes.Text),
AuthToken: OS.DataConversion.ServerDataConverter.to(this.getAuthToken(), OS.DataTypes.DataTypes.Text),
RealSignupAddressStateLabel: OS.DataConversion.ServerDataConverter.to(this.getRealSignupAddressStateLabel(), OS.DataTypes.DataTypes.Text),
SelectedResidenceLabel: OS.DataConversion.ServerDataConverter.to(this.getSelectedResidenceLabel(), OS.DataTypes.DataTypes.Text),
FinancialAssessmentOccupation: OS.DataConversion.ServerDataConverter.to(this.getFinancialAssessmentOccupation(), OS.DataTypes.DataTypes.Text),
RealSignupStateList: OS.DataConversion.ServerDataConverter.to(this.getRealSignupStateList(), OS.DataTypes.DataTypes.Text),
RealSignupTIDNumber: OS.DataConversion.ServerDataConverter.to(this.getRealSignupTIDNumber(), OS.DataTypes.DataTypes.Text),
InitialMargin: OS.DataConversion.ServerDataConverter.to(this.getInitialMargin(), OS.DataTypes.DataTypes.Text),
ActiveWallet: OS.DataConversion.ServerDataConverter.to(this.getActiveWallet(), OS.DataTypes.DataTypes.Text),
RealSignupTaxIDConfirmation: OS.DataConversion.ServerDataConverter.to(this.getRealSignupTaxIDConfirmation(), OS.DataTypes.DataTypes.Boolean),
RealSignupNoTaxInformation: OS.DataConversion.ServerDataConverter.to(this.getRealSignupNoTaxInformation(), OS.DataTypes.DataTypes.Boolean),
RealSignupLastName: OS.DataConversion.ServerDataConverter.to(this.getRealSignupLastName(), OS.DataTypes.DataTypes.Text),
ResetPasswordEmailSent: OS.DataConversion.ServerDataConverter.to(this.getResetPasswordEmailSent(), OS.DataTypes.DataTypes.Boolean),
RealSignupPhone: OS.DataConversion.ServerDataConverter.to(this.getRealSignupPhone(), OS.DataTypes.DataTypes.Text),
FinancialAssessmentEducationLevel: OS.DataConversion.ServerDataConverter.to(this.getFinancialAssessmentEducationLevel(), OS.DataTypes.DataTypes.Text),
FinancialAssessmentAccountTurnover: OS.DataConversion.ServerDataConverter.to(this.getFinancialAssessmentAccountTurnover(), OS.DataTypes.DataTypes.Text),
RealSignupSkippedIDV: OS.DataConversion.ServerDataConverter.to(this.getRealSignupSkippedIDV(), OS.DataTypes.DataTypes.Boolean),
FinancialTradePastYear: OS.DataConversion.ServerDataConverter.to(this.getFinancialTradePastYear(), OS.DataTypes.DataTypes.Text),
InitializeRealSignup: OS.DataConversion.ServerDataConverter.to(this.getInitializeRealSignup(), OS.DataTypes.DataTypes.Boolean),
RealSignupIDVDocumentName: OS.DataConversion.ServerDataConverter.to(this.getRealSignupIDVDocumentName(), OS.DataTypes.DataTypes.Text),
RealSignupIDVAdditionalDocumentNumber: OS.DataConversion.ServerDataConverter.to(this.getRealSignupIDVAdditionalDocumentNumber(), OS.DataTypes.DataTypes.Text)
};
}

}

return new ClientVariables();
});

