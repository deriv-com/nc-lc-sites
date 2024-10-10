try {require(["tslib"], function (tslib) {
require(["@outsystems/runtime-core-js", "YupValidationsOfficial.appDefinition"], function (OSRuntimeCore, YupValidationsOfficialAppDefinition) {
var OS = OSRuntimeCore;
OS.ErrorScreen.initializeErrorPage(YupValidationsOfficialAppDefinition, OS.Application.default);
});
});
} catch (ex) {
console.error(ex);
}

