define("SharedUtilities.controller$FormatMoney", ["exports", "@outsystems/runtime-core-js", "SharedUtilities.model", "SharedUtilities.controller", "SharedUtilities.controller$FormatMoney.FormatMoneyFnJS"], function (exports, OSRuntimeCore, SharedUtilitiesModel, SharedUtilitiesController, SharedUtilities_controller_FormatMoney_FormatMoneyFnJS) {
var OS = OSRuntimeCore;
SharedUtilitiesController.default.formatMoney$Action = function (numberIn, currencyIn, localeIn, decimalPlacesIn, callContext) {
return OS.Logger.startActiveSpan("FormatMoney", function (span) {
if(span) {
span.setAttribute("code.function", "FormatMoney");
span.setAttribute("outsystems.function.key", "c374d5d8-16e2-442f-8302-2e7ba999ac19");
span.setAttribute("outsystems.function.owner.name", "SharedUtilities");
span.setAttribute("outsystems.function.owner.key", "7c6899bc-58cf-4ca1-ae7a-761245ed915a");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("SharedUtilities.FormatMoney$vars"))());
vars.value.numberInLocal = numberIn;
vars.value.currencyInLocal = currencyIn;
vars.value.localeInLocal = localeIn;
vars.value.decimalPlacesInLocal = decimalPlacesIn;
var formatMoneyFnJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("SharedUtilities.FormatMoney$outVars"))());
formatMoneyFnJSResult.value = OS.Logger.startActiveSpan("FormatMoneyFn", function (span) {
if(span) {
span.setAttribute("code.function", "FormatMoneyFn");
span.setAttribute("outsystems.function.key", "f4cb7805-03af-4f7b-9e68-e0261fcbdf01");
span.setAttribute("outsystems.function.owner.name", "SharedUtilities");
span.setAttribute("outsystems.function.owner.key", "7c6899bc-58cf-4ca1-ae7a-761245ed915a");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(SharedUtilities_controller_FormatMoney_FormatMoneyFnJS, "FormatMoneyFn", "FormatMoney", {
DecimalPlaces: OS.DataConversion.JSNodeParamConverter.to(vars.value.decimalPlacesInLocal, OS.DataTypes.DataTypes.Text),
Number: OS.DataConversion.JSNodeParamConverter.to(vars.value.numberInLocal, OS.DataTypes.DataTypes.Text),
Locale: OS.DataConversion.JSNodeParamConverter.to(vars.value.localeInLocal, OS.DataTypes.DataTypes.Text),
Currency: OS.DataConversion.JSNodeParamConverter.to(vars.value.currencyInLocal, OS.DataTypes.DataTypes.Text),
FormattedNumber: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("SharedUtilities.FormatMoney$formatMoneyFnJSResult"))();
jsNodeResult.formattedNumberOut = OS.DataConversion.JSNodeParamConverter.from($parameters.FormattedNumber, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
// FormattedNumber = FormatMoneyFn.FormattedNumber
outVars.value.formattedNumberOut = formatMoneyFnJSResult.value.formattedNumberOut;
return outVars.value;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = SharedUtilitiesController.default;
SharedUtilitiesController.default.constructor.registerVariableGroupType("SharedUtilities.FormatMoney$vars", [{
name: "Number",
attrName: "numberInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Currency",
attrName: "currencyInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "USD";
}
}, {
name: "Locale",
attrName: "localeInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "en-US";
}
}, {
name: "DecimalPlaces",
attrName: "decimalPlacesInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
SharedUtilitiesController.default.constructor.registerVariableGroupType("SharedUtilities.FormatMoney$formatMoneyFnJSResult", [{
name: "FormattedNumber",
attrName: "formattedNumberOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
SharedUtilitiesController.default.constructor.registerVariableGroupType("SharedUtilities.FormatMoney$outVars", [{
name: "FormattedNumber",
attrName: "formattedNumberOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
SharedUtilitiesController.default.clientActionProxies.formatMoney$Action = function (numberIn, currencyIn, localeIn, decimalPlacesIn) {
numberIn = (numberIn === undefined) ? "" : numberIn;
currencyIn = (currencyIn === undefined) ? "USD" : currencyIn;
localeIn = (localeIn === undefined) ? "en-US" : localeIn;
decimalPlacesIn = (decimalPlacesIn === undefined) ? "" : decimalPlacesIn;
return controller.executeActionInsideJSNode(SharedUtilitiesController.default.formatMoney$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(numberIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(currencyIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(localeIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(decimalPlacesIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
FormattedNumber: OS.DataConversion.JSNodeParamConverter.to(actionResults.formattedNumberOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("SharedUtilities.controller$FormatMoney.FormatMoneyFnJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
const precision = {
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
    ZWL: 2,
}

const FormatMoney = (number, currency, locale, decimalPlaces) => {
    try {
        const currencyPrecision = precision[currency];
        const fractionDigits = Number(decimalPlaces) || currencyPrecision;
        const formatter = new Intl.NumberFormat(locale, {
            minimumFractionDigits: fractionDigits,
            maximumFractionDigits: fractionDigits,
        });
        return formatter.format(Number(number));
    } catch (e) {
        return number;
    }
};

$parameters.FormattedNumber = FormatMoney($parameters.Number, $parameters.Currency, $parameters.Locale, $parameters.DecimalPlaces);

};
});


define("SharedUtilities.controller$GetPlatformFromURL", ["exports", "@outsystems/runtime-core-js", "SharedUtilities.model", "SharedUtilities.controller", "SharedUtilities.controller$GetPlatformFromURL.GetPlatformFromURLJS"], function (exports, OSRuntimeCore, SharedUtilitiesModel, SharedUtilitiesController, SharedUtilities_controller_GetPlatformFromURL_GetPlatformFromURLJS) {
var OS = OSRuntimeCore;
SharedUtilitiesController.default.getPlatformFromURL$Action = function (domainIn, callContext) {
return OS.Logger.startActiveSpan("GetPlatformFromURL", function (span) {
if(span) {
span.setAttribute("code.function", "GetPlatformFromURL");
span.setAttribute("outsystems.function.key", "2b1e1db3-8a4a-4c0c-ac0a-666dc9c84ac8");
span.setAttribute("outsystems.function.owner.name", "SharedUtilities");
span.setAttribute("outsystems.function.owner.key", "7c6899bc-58cf-4ca1-ae7a-761245ed915a");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("SharedUtilities.GetPlatformFromURL$vars"))());
vars.value.domainInLocal = domainIn;
var getPlatformFromURLJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("SharedUtilities.GetPlatformFromURL$outVars"))());
getPlatformFromURLJSResult.value = OS.Logger.startActiveSpan("GetPlatformFromURL", function (span) {
if(span) {
span.setAttribute("code.function", "GetPlatformFromURL");
span.setAttribute("outsystems.function.key", "6529f40d-dbd6-4772-b963-6e286ac3977c");
span.setAttribute("outsystems.function.owner.name", "SharedUtilities");
span.setAttribute("outsystems.function.owner.key", "7c6899bc-58cf-4ca1-ae7a-761245ed915a");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(SharedUtilities_controller_GetPlatformFromURL_GetPlatformFromURLJS, "GetPlatformFromURL", "GetPlatformFromURL", {
Domain: OS.DataConversion.JSNodeParamConverter.to(vars.value.domainInLocal, OS.DataTypes.DataTypes.Text),
IsStaging: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
IsProduction: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("SharedUtilities.GetPlatformFromURL$getPlatformFromURLJSResult"))();
jsNodeResult.isStagingOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsStaging, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.isProductionOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsProduction, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
// IsStaging = GetPlatformFromURL.IsStaging
outVars.value.isStagingOut = getPlatformFromURLJSResult.value.isStagingOut;
// IsProduction = GetPlatformFromURL.IsProduction
outVars.value.isProductionOut = getPlatformFromURLJSResult.value.isProductionOut;
return outVars.value;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = SharedUtilitiesController.default;
SharedUtilitiesController.default.constructor.registerVariableGroupType("SharedUtilities.GetPlatformFromURL$vars", [{
name: "Domain",
attrName: "domainInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
SharedUtilitiesController.default.constructor.registerVariableGroupType("SharedUtilities.GetPlatformFromURL$getPlatformFromURLJSResult", [{
name: "IsStaging",
attrName: "isStagingOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "IsProduction",
attrName: "isProductionOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
SharedUtilitiesController.default.constructor.registerVariableGroupType("SharedUtilities.GetPlatformFromURL$outVars", [{
name: "IsStaging",
attrName: "isStagingOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "IsProduction",
attrName: "isProductionOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
SharedUtilitiesController.default.clientActionProxies.getPlatformFromURL$Action = function (domainIn) {
domainIn = (domainIn === undefined) ? "" : domainIn;
return controller.executeActionInsideJSNode(SharedUtilitiesController.default.getPlatformFromURL$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(domainIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
IsStaging: OS.DataConversion.JSNodeParamConverter.to(actionResults.isStagingOut, OS.DataTypes.DataTypes.Boolean),
IsProduction: OS.DataConversion.JSNodeParamConverter.to(actionResults.isProductionOut, OS.DataTypes.DataTypes.Boolean)
};
});
};
});

define("SharedUtilities.controller$GetPlatformFromURL.GetPlatformFromURLJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
const domain = $parameters.Domain || window.location.hostname;

$parameters.IsStaging = /^staging-hub\.deriv\.(com|me|be)$/i.test(domain);
$parameters.IsProduction = /^hub\.deriv\.(com|me|be)$/i.test(domain);

};
});


define("SharedUtilities.controller$GetURL", ["exports", "@outsystems/runtime-core-js", "SharedUtilities.model", "SharedUtilities.controller", "SharedUtilities.controller$GetURL.GenerateURLJS"], function (exports, OSRuntimeCore, SharedUtilitiesModel, SharedUtilitiesController, SharedUtilities_controller_GetURL_GenerateURLJS) {
var OS = OSRuntimeCore;
SharedUtilitiesController.default.getURL$Action = function (callContext) {
return OS.Logger.startActiveSpan("GetURL", function (span) {
if(span) {
span.setAttribute("code.function", "GetURL");
span.setAttribute("outsystems.function.key", "caafaf98-52fa-4b40-858d-72d7c552a841");
span.setAttribute("outsystems.function.owner.name", "SharedUtilities");
span.setAttribute("outsystems.function.owner.key", "7c6899bc-58cf-4ca1-ae7a-761245ed915a");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var generateURLJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("SharedUtilities.GetURL$outVars"))());
generateURLJSResult.value = OS.Logger.startActiveSpan("GenerateURL", function (span) {
if(span) {
span.setAttribute("code.function", "GenerateURL");
span.setAttribute("outsystems.function.key", "828130da-46a6-435e-9507-21eea47d8cae");
span.setAttribute("outsystems.function.owner.name", "SharedUtilities");
span.setAttribute("outsystems.function.owner.key", "7c6899bc-58cf-4ca1-ae7a-761245ed915a");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(SharedUtilities_controller_GetURL_GenerateURLJS, "GenerateURL", "GetURL", {
BinaryBotProduction: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
BinaryBotStaging: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
DerivAppProduction: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
DerivAppStaging: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
DerivComProduction: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
DerivComProductionEU: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
DerivComStaging: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
DerivHost: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
SmartTraderProduction: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
SmartTraderStaging: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
DerivP2pProduction: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
DerivP2pStaging: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("SharedUtilities.GetURL$generateURLJSResult"))();
jsNodeResult.binaryBotProductionOut = OS.DataConversion.JSNodeParamConverter.from($parameters.BinaryBotProduction, OS.DataTypes.DataTypes.Text);
jsNodeResult.binaryBotStagingOut = OS.DataConversion.JSNodeParamConverter.from($parameters.BinaryBotStaging, OS.DataTypes.DataTypes.Text);
jsNodeResult.derivAppProductionOut = OS.DataConversion.JSNodeParamConverter.from($parameters.DerivAppProduction, OS.DataTypes.DataTypes.Text);
jsNodeResult.derivAppStagingOut = OS.DataConversion.JSNodeParamConverter.from($parameters.DerivAppStaging, OS.DataTypes.DataTypes.Text);
jsNodeResult.derivComProductionOut = OS.DataConversion.JSNodeParamConverter.from($parameters.DerivComProduction, OS.DataTypes.DataTypes.Text);
jsNodeResult.derivComProductionEUOut = OS.DataConversion.JSNodeParamConverter.from($parameters.DerivComProductionEU, OS.DataTypes.DataTypes.Text);
jsNodeResult.derivComStagingOut = OS.DataConversion.JSNodeParamConverter.from($parameters.DerivComStaging, OS.DataTypes.DataTypes.Text);
jsNodeResult.derivHostOut = OS.DataConversion.JSNodeParamConverter.from($parameters.DerivHost, OS.DataTypes.DataTypes.Text);
jsNodeResult.smartTraderProductionOut = OS.DataConversion.JSNodeParamConverter.from($parameters.SmartTraderProduction, OS.DataTypes.DataTypes.Text);
jsNodeResult.smartTraderStagingOut = OS.DataConversion.JSNodeParamConverter.from($parameters.SmartTraderStaging, OS.DataTypes.DataTypes.Text);
jsNodeResult.derivP2pProductionOut = OS.DataConversion.JSNodeParamConverter.from($parameters.DerivP2pProduction, OS.DataTypes.DataTypes.Text);
jsNodeResult.derivP2pStagingOut = OS.DataConversion.JSNodeParamConverter.from($parameters.DerivP2pStaging, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
// BinaryBotProduction = GenerateURL.BinaryBotProduction
outVars.value.binaryBotProductionOut = generateURLJSResult.value.binaryBotProductionOut;
// BinaryBotStaging = GenerateURL.BinaryBotStaging
outVars.value.binaryBotStagingOut = generateURLJSResult.value.binaryBotStagingOut;
// DerivAppProduction = GenerateURL.DerivAppProduction
outVars.value.derivAppProductionOut = generateURLJSResult.value.derivAppProductionOut;
// DerivAppStaging = GenerateURL.DerivAppStaging
outVars.value.derivAppStagingOut = generateURLJSResult.value.derivAppStagingOut;
// DerivComProduction = GenerateURL.DerivComProduction
outVars.value.derivComProductionOut = generateURLJSResult.value.derivComProductionOut;
// DerivComProductionEU = GenerateURL.DerivComProductionEU
outVars.value.derivComProductionEUOut = generateURLJSResult.value.derivComProductionEUOut;
// DerivComStaging = GenerateURL.DerivComStaging
outVars.value.derivComStagingOut = generateURLJSResult.value.derivComStagingOut;
// DerivHost = GenerateURL.DerivHost
outVars.value.derivHostOut = generateURLJSResult.value.derivHostOut;
// SmartTraderProduction = GenerateURL.SmartTraderProduction
outVars.value.smartTraderProductionOut = generateURLJSResult.value.smartTraderProductionOut;
// SmartTraderStaging = GenerateURL.SmartTraderStaging
outVars.value.smartTraderStagingOut = generateURLJSResult.value.smartTraderStagingOut;
// DerivP2pProduction = GenerateURL.DerivP2pProduction
outVars.value.derivP2pProductionOut = generateURLJSResult.value.derivP2pProductionOut;
// DerivP2pStaging = GenerateURL.DerivP2pStaging
outVars.value.derivP2pStagingOut = generateURLJSResult.value.derivP2pStagingOut;
// DerivWhatsApp = "https://wa.me/35699578341"
outVars.value.derivWhatsAppOut = "https://wa.me/35699578341";
return outVars.value;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = SharedUtilitiesController.default;
SharedUtilitiesController.default.constructor.registerVariableGroupType("SharedUtilities.GetURL$generateURLJSResult", [{
name: "BinaryBotProduction",
attrName: "binaryBotProductionOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "BinaryBotStaging",
attrName: "binaryBotStagingOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "DerivAppProduction",
attrName: "derivAppProductionOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "DerivAppStaging",
attrName: "derivAppStagingOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "DerivComProduction",
attrName: "derivComProductionOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "DerivComProductionEU",
attrName: "derivComProductionEUOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "DerivComStaging",
attrName: "derivComStagingOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "DerivHost",
attrName: "derivHostOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "SmartTraderProduction",
attrName: "smartTraderProductionOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "SmartTraderStaging",
attrName: "smartTraderStagingOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "DerivP2pProduction",
attrName: "derivP2pProductionOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "DerivP2pStaging",
attrName: "derivP2pStagingOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
SharedUtilitiesController.default.constructor.registerVariableGroupType("SharedUtilities.GetURL$outVars", [{
name: "BinaryBotProduction",
attrName: "binaryBotProductionOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "BinaryBotStaging",
attrName: "binaryBotStagingOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "DerivAppProduction",
attrName: "derivAppProductionOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "DerivAppStaging",
attrName: "derivAppStagingOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "DerivComProduction",
attrName: "derivComProductionOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "DerivComProductionEU",
attrName: "derivComProductionEUOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "DerivComStaging",
attrName: "derivComStagingOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "DerivHost",
attrName: "derivHostOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "SmartTraderProduction",
attrName: "smartTraderProductionOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "SmartTraderStaging",
attrName: "smartTraderStagingOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "DerivP2pProduction",
attrName: "derivP2pProductionOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "DerivP2pStaging",
attrName: "derivP2pStagingOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "DerivWhatsApp",
attrName: "derivWhatsAppOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
SharedUtilitiesController.default.clientActionProxies.getURL$Action = function () {
return controller.executeActionInsideJSNode(SharedUtilitiesController.default.getURL$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
BinaryBotProduction: OS.DataConversion.JSNodeParamConverter.to(actionResults.binaryBotProductionOut, OS.DataTypes.DataTypes.Text),
BinaryBotStaging: OS.DataConversion.JSNodeParamConverter.to(actionResults.binaryBotStagingOut, OS.DataTypes.DataTypes.Text),
DerivAppProduction: OS.DataConversion.JSNodeParamConverter.to(actionResults.derivAppProductionOut, OS.DataTypes.DataTypes.Text),
DerivAppStaging: OS.DataConversion.JSNodeParamConverter.to(actionResults.derivAppStagingOut, OS.DataTypes.DataTypes.Text),
DerivComProduction: OS.DataConversion.JSNodeParamConverter.to(actionResults.derivComProductionOut, OS.DataTypes.DataTypes.Text),
DerivComProductionEU: OS.DataConversion.JSNodeParamConverter.to(actionResults.derivComProductionEUOut, OS.DataTypes.DataTypes.Text),
DerivComStaging: OS.DataConversion.JSNodeParamConverter.to(actionResults.derivComStagingOut, OS.DataTypes.DataTypes.Text),
DerivHost: OS.DataConversion.JSNodeParamConverter.to(actionResults.derivHostOut, OS.DataTypes.DataTypes.Text),
SmartTraderProduction: OS.DataConversion.JSNodeParamConverter.to(actionResults.smartTraderProductionOut, OS.DataTypes.DataTypes.Text),
SmartTraderStaging: OS.DataConversion.JSNodeParamConverter.to(actionResults.smartTraderStagingOut, OS.DataTypes.DataTypes.Text),
DerivP2pProduction: OS.DataConversion.JSNodeParamConverter.to(actionResults.derivP2pProductionOut, OS.DataTypes.DataTypes.Text),
DerivP2pStaging: OS.DataConversion.JSNodeParamConverter.to(actionResults.derivP2pStagingOut, OS.DataTypes.DataTypes.Text),
DerivWhatsApp: OS.DataConversion.JSNodeParamConverter.to(actionResults.derivWhatsAppOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("SharedUtilities.controller$GetURL.GenerateURLJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
const deriv = "deriv.com";
const derivMe = "deriv.me";
const derivBe = "deriv.be";

const supportedDomains = [deriv, derivBe, derivMe];
const baseDomain = typeof window !== "undefined" && window.location.hostname.split("hub.")[1];
const domain = supportedDomains.includes(baseDomain) ? baseDomain : deriv;

// deriv URLs
$parameters.BinaryBotProduction = `https://bot.${domain}`;
$parameters.BinaryBotStaging = `https://staging-bot.${domain}`;

$parameters.DerivAppProduction = `https://app.${domain}`;
$parameters.DerivAppStaging = `https://staging-app.${domain}`;

$parameters.DerivComProduction = `https://${domain}`;
$parameters.DerivComProductionEU = `https://eu.${domain}`;
$parameters.DerivComStaging = `https://staging.${domain}`;

$parameters.DerivHost = domain;

$parameters.SmartTraderProduction = `https://smarttrader.${domain}`;
$parameters.SmartTraderStaging = `https://staging-smarttrader.${domain}`;

$parameters.DerivP2pProduction = `https://p2p.${domain}`;
$parameters.DerivP2pStaging = `https://staging-p2p.${domain}`;

};
});


define("SharedUtilities.controller", ["exports", "@outsystems/runtime-core-js", "SharedUtilities.model"], function (exports, OSRuntimeCore, SharedUtilitiesModel) {
var OS = OSRuntimeCore;
var SharedUtilitiesController = exports;
class Controller extends 
OS.Controller.BaseModuleController {
constructor(model, messagesProvider, idService, translationResources) {
super(model, messagesProvider, idService, translationResources);
}

get clientActionProxies() {if(!(this.hasOwnProperty("_clientActionProxies"))) {
this._clientActionProxies = {};
}

return this._clientActionProxies;
}set clientActionProxies(value) {this._clientActionProxies = value;
}


get roles() {if(!(this.hasOwnProperty("_roles"))) {
this._roles = {};
}

return this._roles;
}set roles(value) {this._roles = value;
}

get defaultTimeout() {if(!(this.hasOwnProperty("_defaultTimeout"))) {
this._defaultTimeout = 10;
}

return this._defaultTimeout;
}set defaultTimeout(value) {this._defaultTimeout = value;
}

getDefaultTimeout() {
return SharedUtilitiesController.default.defaultTimeout;
}

}

SharedUtilitiesController.default = new Controller();
});

