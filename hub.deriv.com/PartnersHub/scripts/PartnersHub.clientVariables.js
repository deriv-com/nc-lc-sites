define("PartnersHub.clientVariables", ["@outsystems/runtime-core-js"], function(OSRuntimeCore) {
    var OS = OSRuntimeCore;
    var clientVarsService;
    class ClientVariables {
        constructor() {
            clientVarsService = OS.Injector.resolve(OS.ServiceNames.ClientVariablesService);
        }

        getSignupEmail() {
            return clientVarsService.getVariable("SignupEmail", "PartnersHub", OS.DataTypes.DataTypes.Text);
        }

        setSignupEmail(value) {
            return clientVarsService.setVariable("SignupEmail", "PartnersHub", OS.DataTypes.DataTypes.Text, value);
        }

        getWebsiteStatusResponse() {
            return clientVarsService.getVariable("WebsiteStatusResponse", "PartnersHub", OS.DataTypes.DataTypes.Text);
        }

        setWebsiteStatusResponse(value) {
            return clientVarsService.setVariable("WebsiteStatusResponse", "PartnersHub", OS.DataTypes.DataTypes.Text, value);
        }

        getIsCountryUnavailable() {
            return clientVarsService.getVariable("IsCountryUnavailable", "PartnersHub", OS.DataTypes.DataTypes.Boolean, true);
        }

        setIsCountryUnavailable(value) {
            return clientVarsService.setVariable("IsCountryUnavailable", "PartnersHub", OS.DataTypes.DataTypes.Boolean, value);
        }

        getisEventSectionEnabledFF() {
            return clientVarsService.getVariable("isEventSectionEnabledFF", "PartnersHub", OS.DataTypes.DataTypes.Boolean, false);
        }

        setisEventSectionEnabledFF(value) {
            return clientVarsService.setVariable("isEventSectionEnabledFF", "PartnersHub", OS.DataTypes.DataTypes.Boolean, value);
        }

        getRealSignupIndividualWebsite() {
            return clientVarsService.getVariable("RealSignupIndividualWebsite", "PartnersHub", OS.DataTypes.DataTypes.Text);
        }

        setRealSignupIndividualWebsite(value) {
            return clientVarsService.setVariable("RealSignupIndividualWebsite", "PartnersHub", OS.DataTypes.DataTypes.Text, value);
        }

        getRealSignupFirstName() {
            return clientVarsService.getVariable("RealSignupFirstName", "PartnersHub", OS.DataTypes.DataTypes.Text);
        }

        setRealSignupFirstName(value) {
            return clientVarsService.setVariable("RealSignupFirstName", "PartnersHub", OS.DataTypes.DataTypes.Text, value);
        }

        getRealSignupAddress() {
            return clientVarsService.getVariable("RealSignupAddress", "PartnersHub", OS.DataTypes.DataTypes.Text);
        }

        setRealSignupAddress(value) {
            return clientVarsService.setVariable("RealSignupAddress", "PartnersHub", OS.DataTypes.DataTypes.Text, value);
        }

        getSelectedAccountType() {
            return clientVarsService.getVariable("SelectedAccountType", "PartnersHub", OS.DataTypes.DataTypes.Text);
        }

        setSelectedAccountType(value) {
            return clientVarsService.setVariable("SelectedAccountType", "PartnersHub", OS.DataTypes.DataTypes.Text, value);
        }

        getRealSignupCurrentStep() {
            return clientVarsService.getVariable("RealSignupCurrentStep", "PartnersHub", OS.DataTypes.DataTypes.Integer, 1);
        }

        setRealSignupCurrentStep(value) {
            return clientVarsService.setVariable("RealSignupCurrentStep", "PartnersHub", OS.DataTypes.DataTypes.Integer, value);
        }

        getRealSignupLastName() {
            return clientVarsService.getVariable("RealSignupLastName", "PartnersHub", OS.DataTypes.DataTypes.Text);
        }

        setRealSignupLastName(value) {
            return clientVarsService.setVariable("RealSignupLastName", "PartnersHub", OS.DataTypes.DataTypes.Text, value);
        }

        getIsMobile() {
            return clientVarsService.getVariable("IsMobile", "PartnersHub", OS.DataTypes.DataTypes.Boolean);
        }

        setIsMobile(value) {
            return clientVarsService.setVariable("IsMobile", "PartnersHub", OS.DataTypes.DataTypes.Boolean, value);
        }

        getisCommisionsPlansEnabledFF() {
            return clientVarsService.getVariable("isCommisionsPlansEnabledFF", "PartnersHub", OS.DataTypes.DataTypes.Boolean, true);
        }

        setisCommisionsPlansEnabledFF(value) {
            return clientVarsService.setVariable("isCommisionsPlansEnabledFF", "PartnersHub", OS.DataTypes.DataTypes.Boolean, value);
        }

        getRealSignupTINCheckboxError() {
            return clientVarsService.getVariable("RealSignupTINCheckboxError", "PartnersHub", OS.DataTypes.DataTypes.Boolean);
        }

        setRealSignupTINCheckboxError(value) {
            return clientVarsService.setVariable("RealSignupTINCheckboxError", "PartnersHub", OS.DataTypes.DataTypes.Boolean, value);
        }

        getRealSignupIDVDocumentName() {
            return clientVarsService.getVariable("RealSignupIDVDocumentName", "PartnersHub", OS.DataTypes.DataTypes.Text);
        }

        setRealSignupIDVDocumentName(value) {
            return clientVarsService.setVariable("RealSignupIDVDocumentName", "PartnersHub", OS.DataTypes.DataTypes.Text, value);
        }

        getStagingHostName() {
            return clientVarsService.getVariable("StagingHostName", "PartnersHub", OS.DataTypes.DataTypes.Text, "staging-hub.deriv.com");
        }

        setStagingHostName(value) {
            return clientVarsService.setVariable("StagingHostName", "PartnersHub", OS.DataTypes.DataTypes.Text, value);
        }

        getInitialGetSettingsEmail() {
            return clientVarsService.getVariable("InitialGetSettingsEmail", "PartnersHub", OS.DataTypes.DataTypes.Text);
        }

        setInitialGetSettingsEmail(value) {
            return clientVarsService.setVariable("InitialGetSettingsEmail", "PartnersHub", OS.DataTypes.DataTypes.Text, value);
        }

        getRealSignupNoTaxIdentificationNumber() {
            return clientVarsService.getVariable("RealSignupNoTaxIdentificationNumber", "PartnersHub", OS.DataTypes.DataTypes.Boolean);
        }

        setRealSignupNoTaxIdentificationNumber(value) {
            return clientVarsService.setVariable("RealSignupNoTaxIdentificationNumber", "PartnersHub", OS.DataTypes.DataTypes.Boolean, value);
        }

        getRealSignupisCheckboxError() {
            return clientVarsService.getVariable("RealSignupisCheckboxError", "PartnersHub", OS.DataTypes.DataTypes.Boolean);
        }

        setRealSignupisCheckboxError(value) {
            return clientVarsService.setVariable("RealSignupisCheckboxError", "PartnersHub", OS.DataTypes.DataTypes.Boolean, value);
        }

        getRealSignupEmploymentStatus() {
            return clientVarsService.getVariable("RealSignupEmploymentStatus", "PartnersHub", OS.DataTypes.DataTypes.Text);
        }

        setRealSignupEmploymentStatus(value) {
            return clientVarsService.setVariable("RealSignupEmploymentStatus", "PartnersHub", OS.DataTypes.DataTypes.Text, value);
        }

        getStagingAppId() {
            return clientVarsService.getVariable("StagingAppId", "PartnersHub", OS.DataTypes.DataTypes.Text, "62573");
        }

        setStagingAppId(value) {
            return clientVarsService.setVariable("StagingAppId", "PartnersHub", OS.DataTypes.DataTypes.Text, value);
        }

        getRealSignupAccountPurpose() {
            return clientVarsService.getVariable("RealSignupAccountPurpose", "PartnersHub", OS.DataTypes.DataTypes.Text);
        }

        setRealSignupAccountPurpose(value) {
            return clientVarsService.setVariable("RealSignupAccountPurpose", "PartnersHub", OS.DataTypes.DataTypes.Text, value);
        }

        getRealSignupCompanyRegistrationNumber() {
            return clientVarsService.getVariable("RealSignupCompanyRegistrationNumber", "PartnersHub", OS.DataTypes.DataTypes.Text);
        }

        setRealSignupCompanyRegistrationNumber(value) {
            return clientVarsService.setVariable("RealSignupCompanyRegistrationNumber", "PartnersHub", OS.DataTypes.DataTypes.Text, value);
        }

        getRealSignupIsIDVSupported() {
            return clientVarsService.getVariable("RealSignupIsIDVSupported", "PartnersHub", OS.DataTypes.DataTypes.Boolean);
        }

        setRealSignupIsIDVSupported(value) {
            return clientVarsService.setVariable("RealSignupIsIDVSupported", "PartnersHub", OS.DataTypes.DataTypes.Boolean, value);
        }

        getshowCFDCommisionBanner() {
            return clientVarsService.getVariable("showCFDCommisionBanner", "PartnersHub", OS.DataTypes.DataTypes.Boolean, false);
        }

        setshowCFDCommisionBanner(value) {
            return clientVarsService.setVariable("showCFDCommisionBanner", "PartnersHub", OS.DataTypes.DataTypes.Boolean, value);
        }

        getRealSignupCompanyName() {
            return clientVarsService.getVariable("RealSignupCompanyName", "PartnersHub", OS.DataTypes.DataTypes.Text);
        }

        setRealSignupCompanyName(value) {
            return clientVarsService.setVariable("RealSignupCompanyName", "PartnersHub", OS.DataTypes.DataTypes.Text, value);
        }

        getRealSignupTaxResidence() {
            return clientVarsService.getVariable("RealSignupTaxResidence", "PartnersHub", OS.DataTypes.DataTypes.Text);
        }

        setRealSignupTaxResidence(value) {
            return clientVarsService.setVariable("RealSignupTaxResidence", "PartnersHub", OS.DataTypes.DataTypes.Text, value);
        }

        getemail() {
            return clientVarsService.getVariable("email", "PartnersHub", OS.DataTypes.DataTypes.Text);
        }

        setemail(value) {
            return clientVarsService.setVariable("email", "PartnersHub", OS.DataTypes.DataTypes.Text, value);
        }

        getLastURL() {
            return clientVarsService.getVariable("LastURL", "PartnersHub", OS.DataTypes.DataTypes.Text);
        }

        setLastURL(value) {
            return clientVarsService.setVariable("LastURL", "PartnersHub", OS.DataTypes.DataTypes.Text, value);
        }

        getRealSignupTINCheckbox() {
            return clientVarsService.getVariable("RealSignupTINCheckbox", "PartnersHub", OS.DataTypes.DataTypes.Boolean, false);
        }

        setRealSignupTINCheckbox(value) {
            return clientVarsService.setVariable("RealSignupTINCheckbox", "PartnersHub", OS.DataTypes.DataTypes.Boolean, value);
        }

        getAppId() {
            return clientVarsService.getVariable("AppId", "PartnersHub", OS.DataTypes.DataTypes.Text, "");
        }

        setAppId(value) {
            return clientVarsService.setVariable("AppId", "PartnersHub", OS.DataTypes.DataTypes.Text, value);
        }

        getIsNotAPartner() {
            return clientVarsService.getVariable("IsNotAPartner", "PartnersHub", OS.DataTypes.DataTypes.Boolean);
        }

        setIsNotAPartner(value) {
            return clientVarsService.setVariable("IsNotAPartner", "PartnersHub", OS.DataTypes.DataTypes.Boolean, value);
        }

        getRealSignupPlaceOfBirth() {
            return clientVarsService.getVariable("RealSignupPlaceOfBirth", "PartnersHub", OS.DataTypes.DataTypes.Text);
        }

        setRealSignupPlaceOfBirth(value) {
            return clientVarsService.setVariable("RealSignupPlaceOfBirth", "PartnersHub", OS.DataTypes.DataTypes.Text, value);
        }

        getRealSignupTaxIdentificationNumber() {
            return clientVarsService.getVariable("RealSignupTaxIdentificationNumber", "PartnersHub", OS.DataTypes.DataTypes.Text, "");
        }

        setRealSignupTaxIdentificationNumber(value) {
            return clientVarsService.setVariable("RealSignupTaxIdentificationNumber", "PartnersHub", OS.DataTypes.DataTypes.Text, value);
        }

        getRealSignupIDVAdditionalDocumentNumber() {
            return clientVarsService.getVariable("RealSignupIDVAdditionalDocumentNumber", "PartnersHub", OS.DataTypes.DataTypes.Text);
        }

        setRealSignupIDVAdditionalDocumentNumber(value) {
            return clientVarsService.setVariable("RealSignupIDVAdditionalDocumentNumber", "PartnersHub", OS.DataTypes.DataTypes.Text, value);
        }

        getCode() {
            return clientVarsService.getVariable("Code", "PartnersHub", OS.DataTypes.DataTypes.Text);
        }

        setCode(value) {
            return clientVarsService.setVariable("Code", "PartnersHub", OS.DataTypes.DataTypes.Text, value);
        }

        getIsCheckingAuthentication() {
            return clientVarsService.getVariable("IsCheckingAuthentication", "PartnersHub", OS.DataTypes.DataTypes.Boolean);
        }

        setIsCheckingAuthentication(value) {
            return clientVarsService.setVariable("IsCheckingAuthentication", "PartnersHub", OS.DataTypes.DataTypes.Boolean, value);
        }

        getRealSignupPostalZip() {
            return clientVarsService.getVariable("RealSignupPostalZip", "PartnersHub", OS.DataTypes.DataTypes.Text);
        }

        setRealSignupPostalZip(value) {
            return clientVarsService.setVariable("RealSignupPostalZip", "PartnersHub", OS.DataTypes.DataTypes.Text, value);
        }

        getisCompleteMyProfileEnabledFF() {
            return clientVarsService.getVariable("isCompleteMyProfileEnabledFF", "PartnersHub", OS.DataTypes.DataTypes.Boolean, false);
        }

        setisCompleteMyProfileEnabledFF(value) {
            return clientVarsService.setVariable("isCompleteMyProfileEnabledFF", "PartnersHub", OS.DataTypes.DataTypes.Boolean, value);
        }

        getIsAppReady() {
            return clientVarsService.getVariable("IsAppReady", "PartnersHub", OS.DataTypes.DataTypes.Boolean, false);
        }

        setIsAppReady(value) {
            return clientVarsService.setVariable("IsAppReady", "PartnersHub", OS.DataTypes.DataTypes.Boolean, value);
        }

        getWebsitePlatformUrl() {
            return clientVarsService.getVariable("WebsitePlatformUrl", "PartnersHub", OS.DataTypes.DataTypes.Text);
        }

        setWebsitePlatformUrl(value) {
            return clientVarsService.setVariable("WebsitePlatformUrl", "PartnersHub", OS.DataTypes.DataTypes.Text, value);
        }

        getisIDVMobileDocumentNumberContainerVisible() {
            return clientVarsService.getVariable("isIDVMobileDocumentNumberContainerVisible", "PartnersHub", OS.DataTypes.DataTypes.Boolean, false);
        }

        setisIDVMobileDocumentNumberContainerVisible(value) {
            return clientVarsService.setVariable("isIDVMobileDocumentNumberContainerVisible", "PartnersHub", OS.DataTypes.DataTypes.Boolean, value);
        }

        getRealSignupStateProvince() {
            return clientVarsService.getVariable("RealSignupStateProvince", "PartnersHub", OS.DataTypes.DataTypes.Text);
        }

        setRealSignupStateProvince(value) {
            return clientVarsService.setVariable("RealSignupStateProvince", "PartnersHub", OS.DataTypes.DataTypes.Text, value);
        }

        getCurrentStepperPage() {
            return clientVarsService.getVariable("CurrentStepperPage", "PartnersHub", OS.DataTypes.DataTypes.Integer, 1);
        }

        setCurrentStepperPage(value) {
            return clientVarsService.setVariable("CurrentStepperPage", "PartnersHub", OS.DataTypes.DataTypes.Integer, value);
        }

        getname() {
            return clientVarsService.getVariable("name", "PartnersHub", OS.DataTypes.DataTypes.Text);
        }

        setname(value) {
            return clientVarsService.setVariable("name", "PartnersHub", OS.DataTypes.DataTypes.Text, value);
        }

        getResetEmail() {
            return clientVarsService.getVariable("ResetEmail", "PartnersHub", OS.DataTypes.DataTypes.Email);
        }

        setResetEmail(value) {
            return clientVarsService.setVariable("ResetEmail", "PartnersHub", OS.DataTypes.DataTypes.Email, value);
        }

        getIsPhoneNumberVerified() {
            return clientVarsService.getVariable("IsPhoneNumberVerified", "PartnersHub", OS.DataTypes.DataTypes.LongInteger);
        }

        setIsPhoneNumberVerified(value) {
            return clientVarsService.setVariable("IsPhoneNumberVerified", "PartnersHub", OS.DataTypes.DataTypes.LongInteger, value);
        }

        getIsResetEmailSent() {
            return clientVarsService.getVariable("IsResetEmailSent", "PartnersHub", OS.DataTypes.DataTypes.Boolean);
        }

        setIsResetEmailSent(value) {
            return clientVarsService.setVariable("IsResetEmailSent", "PartnersHub", OS.DataTypes.DataTypes.Boolean, value);
        }

        getProductionAppId() {
            return clientVarsService.getVariable("ProductionAppId", "PartnersHub", OS.DataTypes.DataTypes.Text, "62837");
        }

        setProductionAppId(value) {
            return clientVarsService.setVariable("ProductionAppId", "PartnersHub", OS.DataTypes.DataTypes.Text, value);
        }

        getisLanguageSwitcherEnabledFF() {
            return clientVarsService.getVariable("isLanguageSwitcherEnabledFF", "PartnersHub", OS.DataTypes.DataTypes.Boolean, false);
        }

        setisLanguageSwitcherEnabledFF(value) {
            return clientVarsService.setVariable("isLanguageSwitcherEnabledFF", "PartnersHub", OS.DataTypes.DataTypes.Boolean, value);
        }

        getRealSignupTownCity() {
            return clientVarsService.getVariable("RealSignupTownCity", "PartnersHub", OS.DataTypes.DataTypes.Text);
        }

        setRealSignupTownCity(value) {
            return clientVarsService.setVariable("RealSignupTownCity", "PartnersHub", OS.DataTypes.DataTypes.Text, value);
        }

        getisDateOfBirthVisible() {
            return clientVarsService.getVariable("isDateOfBirthVisible", "PartnersHub", OS.DataTypes.DataTypes.Boolean, false);
        }

        setisDateOfBirthVisible(value) {
            return clientVarsService.setVariable("isDateOfBirthVisible", "PartnersHub", OS.DataTypes.DataTypes.Boolean, value);
        }

        getSelectedCurrencyCode() {
            return clientVarsService.getVariable("SelectedCurrencyCode", "PartnersHub", OS.DataTypes.DataTypes.Text);
        }

        setSelectedCurrencyCode(value) {
            return clientVarsService.setVariable("SelectedCurrencyCode", "PartnersHub", OS.DataTypes.DataTypes.Text, value);
        }

        getRealSignupPhoneNumber() {
            return clientVarsService.getVariable("RealSignupPhoneNumber", "PartnersHub", OS.DataTypes.DataTypes.Text);
        }

        setRealSignupPhoneNumber(value) {
            return clientVarsService.setVariable("RealSignupPhoneNumber", "PartnersHub", OS.DataTypes.DataTypes.Text, value);
        }

        getLanguage() {
            return clientVarsService.getVariable("Language", "PartnersHub", OS.DataTypes.DataTypes.Text);
        }

        setLanguage(value) {
            return clientVarsService.setVariable("Language", "PartnersHub", OS.DataTypes.DataTypes.Text, value);
        }

        getIsDesktop() {
            return clientVarsService.getVariable("IsDesktop", "PartnersHub", OS.DataTypes.DataTypes.Boolean);
        }

        setIsDesktop(value) {
            return clientVarsService.setVariable("IsDesktop", "PartnersHub", OS.DataTypes.DataTypes.Boolean, value);
        }

        getRealSignupIDVDocumentNumber() {
            return clientVarsService.getVariable("RealSignupIDVDocumentNumber", "PartnersHub", OS.DataTypes.DataTypes.Text);
        }

        setRealSignupIDVDocumentNumber(value) {
            return clientVarsService.setVariable("RealSignupIDVDocumentNumber", "PartnersHub", OS.DataTypes.DataTypes.Text, value);
        }

        getRealSignupDateofBirth() {
            return clientVarsService.getVariable("RealSignupDateofBirth", "PartnersHub", OS.DataTypes.DataTypes.Text);
        }

        setRealSignupDateofBirth(value) {
            return clientVarsService.setVariable("RealSignupDateofBirth", "PartnersHub", OS.DataTypes.DataTypes.Text, value);
        }

        getRealSignupEmploymentDetailMobileScreen() {
            return clientVarsService.getVariable("RealSignupEmploymentDetailMobileScreen", "PartnersHub", OS.DataTypes.DataTypes.Text, "status_list");
        }

        setRealSignupEmploymentDetailMobileScreen(value) {
            return clientVarsService.setVariable("RealSignupEmploymentDetailMobileScreen", "PartnersHub", OS.DataTypes.DataTypes.Text, value);
        }

        getRealSignupCompanyWebsite() {
            return clientVarsService.getVariable("RealSignupCompanyWebsite", "PartnersHub", OS.DataTypes.DataTypes.Text);
        }

        setRealSignupCompanyWebsite(value) {
            return clientVarsService.setVariable("RealSignupCompanyWebsite", "PartnersHub", OS.DataTypes.DataTypes.Text, value);
        }

        getisCFDCommissionsPlanFormEnabledFF() {
            return clientVarsService.getVariable("isCFDCommissionsPlanFormEnabledFF", "PartnersHub", OS.DataTypes.DataTypes.Boolean);
        }

        setisCFDCommissionsPlanFormEnabledFF(value) {
            return clientVarsService.setVariable("isCFDCommissionsPlanFormEnabledFF", "PartnersHub", OS.DataTypes.DataTypes.Boolean, value);
        }

        getProductionHostName() {
            return clientVarsService.getVariable("ProductionHostName", "PartnersHub", OS.DataTypes.DataTypes.Text, "hub.deriv.com");
        }

        setProductionHostName(value) {
            return clientVarsService.setVariable("ProductionHostName", "PartnersHub", OS.DataTypes.DataTypes.Text, value);
        }

        getisCFDPasswordCreationSucceeded() {
            return clientVarsService.getVariable("isCFDPasswordCreationSucceeded", "PartnersHub", OS.DataTypes.DataTypes.Boolean);
        }

        setisCFDPasswordCreationSucceeded(value) {
            return clientVarsService.setVariable("isCFDPasswordCreationSucceeded", "PartnersHub", OS.DataTypes.DataTypes.Boolean, value);
        }

        getClientCountry() {
            return clientVarsService.getVariable("ClientCountry", "PartnersHub", OS.DataTypes.DataTypes.Text);
        }

        setClientCountry(value) {
            return clientVarsService.setVariable("ClientCountry", "PartnersHub", OS.DataTypes.DataTypes.Text, value);
        }

        getIsSnackBarVisible() {
            return clientVarsService.getVariable("IsSnackBarVisible", "PartnersHub", OS.DataTypes.DataTypes.Boolean, false);
        }

        setIsSnackBarVisible(value) {
            return clientVarsService.setVariable("IsSnackBarVisible", "PartnersHub", OS.DataTypes.DataTypes.Boolean, value);
        }

        getisRealAccountCreationLoading() {
            return clientVarsService.getVariable("isRealAccountCreationLoading", "PartnersHub", OS.DataTypes.DataTypes.Boolean, false);
        }

        setisRealAccountCreationLoading(value) {
            return clientVarsService.setVariable("isRealAccountCreationLoading", "PartnersHub", OS.DataTypes.DataTypes.Boolean, value);
        }

        getProgressBarLength() {
            return clientVarsService.getVariable("ProgressBarLength", "PartnersHub", OS.DataTypes.DataTypes.Integer, 12);
        }

        setProgressBarLength(value) {
            return clientVarsService.setVariable("ProgressBarLength", "PartnersHub", OS.DataTypes.DataTypes.Integer, value);
        }

        getshowCFDCommissionModal() {
            return clientVarsService.getVariable("showCFDCommissionModal", "PartnersHub", OS.DataTypes.DataTypes.Boolean, false);
        }

        setshowCFDCommissionModal(value) {
            return clientVarsService.setVariable("showCFDCommissionModal", "PartnersHub", OS.DataTypes.DataTypes.Boolean, value);
        }

        getCurrentStepTitle() {
            return clientVarsService.getVariable("CurrentStepTitle", "PartnersHub", OS.DataTypes.DataTypes.Text, "Account type");
        }

        setCurrentStepTitle(value) {
            return clientVarsService.setVariable("CurrentStepTitle", "PartnersHub", OS.DataTypes.DataTypes.Text, value);
        }

        getshowUnpublishEventFF() {
            return clientVarsService.getVariable("showUnpublishEventFF", "PartnersHub", OS.DataTypes.DataTypes.Boolean, false);
        }

        setshowUnpublishEventFF(value) {
            return clientVarsService.setVariable("showUnpublishEventFF", "PartnersHub", OS.DataTypes.DataTypes.Boolean, value);
        }

        getWebsocketURL() {
            return clientVarsService.getVariable("WebsocketURL", "PartnersHub", OS.DataTypes.DataTypes.Text, "wss://green.derivws.com/websockets/v3?app_id= 62837&l=EN&brand=deriv");
        }

        setWebsocketURL(value) {
            return clientVarsService.setVariable("WebsocketURL", "PartnersHub", OS.DataTypes.DataTypes.Text, value);
        }

        getServer() {
            return clientVarsService.getVariable("Server", "PartnersHub", OS.DataTypes.DataTypes.Text, "green.derivws.com");
        }

        setServer(value) {
            return clientVarsService.setVariable("Server", "PartnersHub", OS.DataTypes.DataTypes.Text, value);
        }

        getisCFDPasswordCreationFailed() {
            return clientVarsService.getVariable("isCFDPasswordCreationFailed", "PartnersHub", OS.DataTypes.DataTypes.Boolean);
        }

        setisCFDPasswordCreationFailed(value) {
            return clientVarsService.setVariable("isCFDPasswordCreationFailed", "PartnersHub", OS.DataTypes.DataTypes.Boolean, value);
        }

        serialize() {
            return {
                SignupEmail: OS.DataConversion.ServerDataConverter.to(this.getSignupEmail(), OS.DataTypes.DataTypes.Text),
                WebsiteStatusResponse: OS.DataConversion.ServerDataConverter.to(this.getWebsiteStatusResponse(), OS.DataTypes.DataTypes.Text),
                IsCountryUnavailable: OS.DataConversion.ServerDataConverter.to(this.getIsCountryUnavailable(), OS.DataTypes.DataTypes.Boolean),
                isEventSectionEnabledFF: OS.DataConversion.ServerDataConverter.to(this.getisEventSectionEnabledFF(), OS.DataTypes.DataTypes.Boolean),
                RealSignupIndividualWebsite: OS.DataConversion.ServerDataConverter.to(this.getRealSignupIndividualWebsite(), OS.DataTypes.DataTypes.Text),
                RealSignupFirstName: OS.DataConversion.ServerDataConverter.to(this.getRealSignupFirstName(), OS.DataTypes.DataTypes.Text),
                RealSignupAddress: OS.DataConversion.ServerDataConverter.to(this.getRealSignupAddress(), OS.DataTypes.DataTypes.Text),
                SelectedAccountType: OS.DataConversion.ServerDataConverter.to(this.getSelectedAccountType(), OS.DataTypes.DataTypes.Text),
                RealSignupCurrentStep: OS.DataConversion.ServerDataConverter.to(this.getRealSignupCurrentStep(), OS.DataTypes.DataTypes.Integer),
                RealSignupLastName: OS.DataConversion.ServerDataConverter.to(this.getRealSignupLastName(), OS.DataTypes.DataTypes.Text),
                IsMobile: OS.DataConversion.ServerDataConverter.to(this.getIsMobile(), OS.DataTypes.DataTypes.Boolean),
                isCommisionsPlansEnabledFF: OS.DataConversion.ServerDataConverter.to(this.getisCommisionsPlansEnabledFF(), OS.DataTypes.DataTypes.Boolean),
                RealSignupTINCheckboxError: OS.DataConversion.ServerDataConverter.to(this.getRealSignupTINCheckboxError(), OS.DataTypes.DataTypes.Boolean),
                RealSignupIDVDocumentName: OS.DataConversion.ServerDataConverter.to(this.getRealSignupIDVDocumentName(), OS.DataTypes.DataTypes.Text),
                StagingHostName: OS.DataConversion.ServerDataConverter.to(this.getStagingHostName(), OS.DataTypes.DataTypes.Text),
                InitialGetSettingsEmail: OS.DataConversion.ServerDataConverter.to(this.getInitialGetSettingsEmail(), OS.DataTypes.DataTypes.Text),
                RealSignupNoTaxIdentificationNumber: OS.DataConversion.ServerDataConverter.to(this.getRealSignupNoTaxIdentificationNumber(), OS.DataTypes.DataTypes.Boolean),
                RealSignupisCheckboxError: OS.DataConversion.ServerDataConverter.to(this.getRealSignupisCheckboxError(), OS.DataTypes.DataTypes.Boolean),
                RealSignupEmploymentStatus: OS.DataConversion.ServerDataConverter.to(this.getRealSignupEmploymentStatus(), OS.DataTypes.DataTypes.Text),
                StagingAppId: OS.DataConversion.ServerDataConverter.to(this.getStagingAppId(), OS.DataTypes.DataTypes.Text),
                RealSignupAccountPurpose: OS.DataConversion.ServerDataConverter.to(this.getRealSignupAccountPurpose(), OS.DataTypes.DataTypes.Text),
                RealSignupCompanyRegistrationNumber: OS.DataConversion.ServerDataConverter.to(this.getRealSignupCompanyRegistrationNumber(), OS.DataTypes.DataTypes.Text),
                RealSignupIsIDVSupported: OS.DataConversion.ServerDataConverter.to(this.getRealSignupIsIDVSupported(), OS.DataTypes.DataTypes.Boolean),
                showCFDCommisionBanner: OS.DataConversion.ServerDataConverter.to(this.getshowCFDCommisionBanner(), OS.DataTypes.DataTypes.Boolean),
                RealSignupCompanyName: OS.DataConversion.ServerDataConverter.to(this.getRealSignupCompanyName(), OS.DataTypes.DataTypes.Text),
                RealSignupTaxResidence: OS.DataConversion.ServerDataConverter.to(this.getRealSignupTaxResidence(), OS.DataTypes.DataTypes.Text),
                email: OS.DataConversion.ServerDataConverter.to(this.getemail(), OS.DataTypes.DataTypes.Text),
                LastURL: OS.DataConversion.ServerDataConverter.to(this.getLastURL(), OS.DataTypes.DataTypes.Text),
                RealSignupTINCheckbox: OS.DataConversion.ServerDataConverter.to(this.getRealSignupTINCheckbox(), OS.DataTypes.DataTypes.Boolean),
                AppId: OS.DataConversion.ServerDataConverter.to(this.getAppId(), OS.DataTypes.DataTypes.Text),
                IsNotAPartner: OS.DataConversion.ServerDataConverter.to(this.getIsNotAPartner(), OS.DataTypes.DataTypes.Boolean),
                RealSignupPlaceOfBirth: OS.DataConversion.ServerDataConverter.to(this.getRealSignupPlaceOfBirth(), OS.DataTypes.DataTypes.Text),
                RealSignupTaxIdentificationNumber: OS.DataConversion.ServerDataConverter.to(this.getRealSignupTaxIdentificationNumber(), OS.DataTypes.DataTypes.Text),
                RealSignupIDVAdditionalDocumentNumber: OS.DataConversion.ServerDataConverter.to(this.getRealSignupIDVAdditionalDocumentNumber(), OS.DataTypes.DataTypes.Text),
                Code: OS.DataConversion.ServerDataConverter.to(this.getCode(), OS.DataTypes.DataTypes.Text),
                IsCheckingAuthentication: OS.DataConversion.ServerDataConverter.to(this.getIsCheckingAuthentication(), OS.DataTypes.DataTypes.Boolean),
                RealSignupPostalZip: OS.DataConversion.ServerDataConverter.to(this.getRealSignupPostalZip(), OS.DataTypes.DataTypes.Text),
                isCompleteMyProfileEnabledFF: OS.DataConversion.ServerDataConverter.to(this.getisCompleteMyProfileEnabledFF(), OS.DataTypes.DataTypes.Boolean),
                IsAppReady: OS.DataConversion.ServerDataConverter.to(this.getIsAppReady(), OS.DataTypes.DataTypes.Boolean),
                WebsitePlatformUrl: OS.DataConversion.ServerDataConverter.to(this.getWebsitePlatformUrl(), OS.DataTypes.DataTypes.Text),
                isIDVMobileDocumentNumberContainerVisible: OS.DataConversion.ServerDataConverter.to(this.getisIDVMobileDocumentNumberContainerVisible(), OS.DataTypes.DataTypes.Boolean),
                RealSignupStateProvince: OS.DataConversion.ServerDataConverter.to(this.getRealSignupStateProvince(), OS.DataTypes.DataTypes.Text),
                CurrentStepperPage: OS.DataConversion.ServerDataConverter.to(this.getCurrentStepperPage(), OS.DataTypes.DataTypes.Integer),
                name: OS.DataConversion.ServerDataConverter.to(this.getname(), OS.DataTypes.DataTypes.Text),
                ResetEmail: OS.DataConversion.ServerDataConverter.to(this.getResetEmail(), OS.DataTypes.DataTypes.Email),
                IsPhoneNumberVerified: OS.DataConversion.ServerDataConverter.to(this.getIsPhoneNumberVerified(), OS.DataTypes.DataTypes.LongInteger),
                IsResetEmailSent: OS.DataConversion.ServerDataConverter.to(this.getIsResetEmailSent(), OS.DataTypes.DataTypes.Boolean),
                ProductionAppId: OS.DataConversion.ServerDataConverter.to(this.getProductionAppId(), OS.DataTypes.DataTypes.Text),
                isLanguageSwitcherEnabledFF: OS.DataConversion.ServerDataConverter.to(this.getisLanguageSwitcherEnabledFF(), OS.DataTypes.DataTypes.Boolean),
                RealSignupTownCity: OS.DataConversion.ServerDataConverter.to(this.getRealSignupTownCity(), OS.DataTypes.DataTypes.Text),
                isDateOfBirthVisible: OS.DataConversion.ServerDataConverter.to(this.getisDateOfBirthVisible(), OS.DataTypes.DataTypes.Boolean),
                SelectedCurrencyCode: OS.DataConversion.ServerDataConverter.to(this.getSelectedCurrencyCode(), OS.DataTypes.DataTypes.Text),
                RealSignupPhoneNumber: OS.DataConversion.ServerDataConverter.to(this.getRealSignupPhoneNumber(), OS.DataTypes.DataTypes.Text),
                Language: OS.DataConversion.ServerDataConverter.to(this.getLanguage(), OS.DataTypes.DataTypes.Text),
                IsDesktop: OS.DataConversion.ServerDataConverter.to(this.getIsDesktop(), OS.DataTypes.DataTypes.Boolean),
                RealSignupIDVDocumentNumber: OS.DataConversion.ServerDataConverter.to(this.getRealSignupIDVDocumentNumber(), OS.DataTypes.DataTypes.Text),
                RealSignupDateofBirth: OS.DataConversion.ServerDataConverter.to(this.getRealSignupDateofBirth(), OS.DataTypes.DataTypes.Text),
                RealSignupEmploymentDetailMobileScreen: OS.DataConversion.ServerDataConverter.to(this.getRealSignupEmploymentDetailMobileScreen(), OS.DataTypes.DataTypes.Text),
                RealSignupCompanyWebsite: OS.DataConversion.ServerDataConverter.to(this.getRealSignupCompanyWebsite(), OS.DataTypes.DataTypes.Text),
                isCFDCommissionsPlanFormEnabledFF: OS.DataConversion.ServerDataConverter.to(this.getisCFDCommissionsPlanFormEnabledFF(), OS.DataTypes.DataTypes.Boolean),
                ProductionHostName: OS.DataConversion.ServerDataConverter.to(this.getProductionHostName(), OS.DataTypes.DataTypes.Text),
                isCFDPasswordCreationSucceeded: OS.DataConversion.ServerDataConverter.to(this.getisCFDPasswordCreationSucceeded(), OS.DataTypes.DataTypes.Boolean),
                ClientCountry: OS.DataConversion.ServerDataConverter.to(this.getClientCountry(), OS.DataTypes.DataTypes.Text),
                IsSnackBarVisible: OS.DataConversion.ServerDataConverter.to(this.getIsSnackBarVisible(), OS.DataTypes.DataTypes.Boolean),
                isRealAccountCreationLoading: OS.DataConversion.ServerDataConverter.to(this.getisRealAccountCreationLoading(), OS.DataTypes.DataTypes.Boolean),
                ProgressBarLength: OS.DataConversion.ServerDataConverter.to(this.getProgressBarLength(), OS.DataTypes.DataTypes.Integer),
                showCFDCommissionModal: OS.DataConversion.ServerDataConverter.to(this.getshowCFDCommissionModal(), OS.DataTypes.DataTypes.Boolean),
                CurrentStepTitle: OS.DataConversion.ServerDataConverter.to(this.getCurrentStepTitle(), OS.DataTypes.DataTypes.Text),
                showUnpublishEventFF: OS.DataConversion.ServerDataConverter.to(this.getshowUnpublishEventFF(), OS.DataTypes.DataTypes.Boolean),
                WebsocketURL: OS.DataConversion.ServerDataConverter.to(this.getWebsocketURL(), OS.DataTypes.DataTypes.Text),
                Server: OS.DataConversion.ServerDataConverter.to(this.getServer(), OS.DataTypes.DataTypes.Text),
                isCFDPasswordCreationFailed: OS.DataConversion.ServerDataConverter.to(this.getisCFDPasswordCreationFailed(), OS.DataTypes.DataTypes.Boolean)
            };
        }

    }

    return new ClientVariables();
});