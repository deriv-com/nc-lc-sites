try {require(["tslib"], function (tslib) {
require(["@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.appDefinition"], function (OSRuntimeCore, RESTAPIWebsocketOfficialAppDefinition) {
var OS = OSRuntimeCore;
OS.ErrorScreen.initializeErrorPage(RESTAPIWebsocketOfficialAppDefinition, OS.Application.default);
});
});
} catch (ex) {
console.error(ex);
}

