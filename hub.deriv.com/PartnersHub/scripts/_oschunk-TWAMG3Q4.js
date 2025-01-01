import {
    ia as s
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as i
} from "./_oschunk-QHO7QY6K.js";
var o = s,
    u = class u extends o.Controller.BaseModuleController {
        constructor(e, d, p, h) {
            super(e, d, p, h)
        }
        get clientActionProxies() {
            return this.hasOwnProperty("_clientActionProxies") || (this._clientActionProxies = {}), this._clientActionProxies
        }
        set clientActionProxies(e) {
            this._clientActionProxies = e
        }
        get roles() {
            return this.hasOwnProperty("_roles") || (this._roles = {}), this._roles
        }
        set roles(e) {
            this._roles = e
        }
        get defaultTimeout() {
            return this.hasOwnProperty("_defaultTimeout") || (this._defaultTimeout = 10), this._defaultTimeout
        }
        set defaultTimeout(e) {
            this._defaultTimeout = e
        }
        getDefaultTimeout() {
            return this.defaultTimeout
        }
    };
i(u, "Controller");
var a = u,
    t = new a,
    n = t;
t.action1$Action = function(r) {
    return o.Logger.startActiveSpan("Action1", function(e) {
        e && (e.setAttribute("code.function", "Action1"), e.setAttribute("outsystems.function.key", "3d93f678-f62e-4363-ac90-dfca65339bf8"), e.setAttribute("outsystems.function.owner.name", "CustomComponentsOfficial"), e.setAttribute("outsystems.function.owner.key", "4ba8c4d5-5fe2-407e-a6bd-5a0385565b69"), e.setAttribute("outsystems.function.type", "CLIENT_ACTION"));
        try {
            r = n.callContext(r);
            return
        } finally {
            e && e.end()
        }
    }, 1)
};
t.clientActionProxies.action1$Action = function() {
    return n.executeActionInsideJSNode(t.default.action1$Action.bind(n), o.Controller.BaseViewController.activeScreen ? o.Controller.BaseViewController.activeScreen.callContext() : void 0, function(r) {
        return {}
    })
};
var g = t;
var f = s,
    c = class c extends f.LanguageResources.BaseMessagesProvider {
        constructor(e) {
            super(e), this.setMessage("Validation.Mandatory", "Required field!"), this.setMessage("Validation.Integer", "Integer expected!"), this.setMessage("Validation.LongInteger", "Integer expected!"), this.setMessage("Validation.Decimal", "Decimal expected!"), this.setMessage("Validation.Currency", "Currency expected!"), this.setMessage("Validation.Date", "Date expected!"), this.setMessage("Validation.Time", "Time expected!"), this.setMessage("Validation.DateTime", "DateTime expected!"), this.setMessage("Validation.Text", "Text expected!"), this.setMessage("Validation.PhoneNumber", "Phone Number expected!"), this.setMessage("Validation.Email", "Email expected!"), this.setMessage("UpgradeComplete", "Your application has been updated to the latest version."), this.setMessage("AppInitError.Generic", "An error occurred while trying to update the app. If you want to retry the update, restart the app."), this.setMessage("AppInitError.Resources", "An error occurred while trying to update the app. If you want to retry the update, restart the app."), this.setMessage("AppInitError.DataModel", "An error occurred while trying to update the app. If you want to retry the update, restart the app. If the problem persists you can reinstall, but all local data will be lost."), this.setMessage("UpgradeRequired", "Your application needs to be updated. Tap here to update."), this.setMessage("UpgradeRequiredDataLoss", "Your application needs to be updated. Unsaved data will be lost. Tap here to update.")
        }
    };
i(c, "MessagesProvider");
var l = c,
    y = new l;
export {
    g as a, y as b
};