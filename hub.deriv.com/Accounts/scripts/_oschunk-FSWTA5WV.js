import {
    ia as c
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as s
} from "./_oschunk-QHO7QY6K.js";

function p(o, t, i, u) {
    s(n => {
        let a = document.createElement("link");
        a.rel = o.rel, a.type = o.type, a.href = n, document.head.appendChild(a)
    }, "addLinkTag")(o.url)
}
s(p, "default");
var e = c,
    f = class f extends e.Controller.BaseModuleController {
        constructor(t, i, u, r) {
            super(t, i, u, r)
        }
        get clientActionProxies() {
            return this.hasOwnProperty("_clientActionProxies") || (this._clientActionProxies = {}), this._clientActionProxies
        }
        set clientActionProxies(t) {
            this._clientActionProxies = t
        }
        get roles() {
            return this.hasOwnProperty("_roles") || (this._roles = {}), this._roles
        }
        set roles(t) {
            this._roles = t
        }
        get defaultTimeout() {
            return this.hasOwnProperty("_defaultTimeout") || (this._defaultTimeout = 10), this._defaultTimeout
        }
        set defaultTimeout(t) {
            this._defaultTimeout = t
        }
        getDefaultTimeout() {
            return this.defaultTimeout
        }
    };
s(f, "Controller");
var y = f,
    l = new y,
    d = l;
l.linkResources$Action = function(o, t, i, u) {
    return e.Logger.startActiveSpan("LinkResources", function(r) {
        r && (r.setAttribute("code.function", "LinkResources"), r.setAttribute("outsystems.function.key", "d619daac-046a-46ce-af5a-401969d2c28d"), r.setAttribute("outsystems.function.owner.name", "UIKit"), r.setAttribute("outsystems.function.owner.key", "895880e5-5422-4df6-a1a2-263897502224"), r.setAttribute("outsystems.function.type", "CLIENT_ACTION"));
        try {
            u = d.callContext(u);
            var n = new e.DataTypes.VariableHolder(new(d.constructor.getVariableGroupType("UIKit.LinkResources$vars")));
            n.value.uRLInLocal = o, n.value.relationshipInLocal = t, n.value.resourceTypeInLocal = i, e.Logger.startActiveSpan("AddStylesheet", function(a) {
                a && (a.setAttribute("code.function", "AddStylesheet"), a.setAttribute("outsystems.function.key", "099fec11-7f8c-4558-8392-d91a978e2031"), a.setAttribute("outsystems.function.owner.name", "UIKit"), a.setAttribute("outsystems.function.owner.key", "895880e5-5422-4df6-a1a2-263897502224"), a.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                try {
                    return d.safeExecuteJSNode(p, "AddStylesheet", "LinkResources", {
                        rel: e.DataConversion.JSNodeParamConverter.to(n.value.relationshipInLocal, e.DataTypes.DataTypes.Text),
                        url: e.DataConversion.JSNodeParamConverter.to(n.value.uRLInLocal, e.DataTypes.DataTypes.Text),
                        type: e.DataConversion.JSNodeParamConverter.to(n.value.resourceTypeInLocal, e.DataTypes.DataTypes.Text)
                    }, function(g) {}, {}, {})
                } finally {
                    a && a.end()
                }
            }, 1);
            return
        } finally {
            r && r.end()
        }
    }, 1)
};
l.constructor.registerVariableGroupType("UIKit.LinkResources$vars", [{
    name: "URL",
    attrName: "uRLInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: s(function() {
        return ""
    }, "defaultValue")
}, {
    name: "Relationship",
    attrName: "relationshipInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: s(function() {
        return ""
    }, "defaultValue")
}, {
    name: "ResourceType",
    attrName: "resourceTypeInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: s(function() {
        return ""
    }, "defaultValue")
}]);
l.clientActionProxies.linkResources$Action = function(o, t, i) {
    return o = o === void 0 ? "" : o, t = t === void 0 ? "" : t, i = i === void 0 ? "" : i, d.executeActionInsideJSNode(l.default.linkResources$Action.bind(d, e.DataConversion.JSNodeParamConverter.from(o, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(t, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(i, e.DataTypes.DataTypes.Text)), e.Controller.BaseViewController.activeScreen ? e.Controller.BaseViewController.activeScreen.callContext() : void 0, function(u) {
        return {}
    })
};
var v = l;
var T = c,
    m = class m extends T.LanguageResources.BaseMessagesProvider {
        constructor(t) {
            super(t), this.setMessage("Validation.Mandatory", "Required field!"), this.setMessage("Validation.Integer", "Integer expected!"), this.setMessage("Validation.LongInteger", "Integer expected!"), this.setMessage("Validation.Decimal", "Decimal expected!"), this.setMessage("Validation.Currency", "Currency expected!"), this.setMessage("Validation.Date", "Date expected!"), this.setMessage("Validation.Time", "Time expected!"), this.setMessage("Validation.DateTime", "DateTime expected!"), this.setMessage("Validation.Text", "Text expected!"), this.setMessage("Validation.PhoneNumber", "Phone Number expected!"), this.setMessage("Validation.Email", "Email expected!"), this.setMessage("UpgradeComplete", "Your application has been updated to the latest version."), this.setMessage("AppInitError.Generic", "An error occurred while trying to update the app. If you want to retry the update, restart the app."), this.setMessage("AppInitError.Resources", "An error occurred while trying to update the app. If you want to retry the update, restart the app."), this.setMessage("AppInitError.DataModel", "An error occurred while trying to update the app. If you want to retry the update, restart the app. If the problem persists you can reinstall, but all local data will be lost."), this.setMessage("UpgradeRequired", "Your application needs to be updated. Tap here to update."), this.setMessage("UpgradeRequiredDataLoss", "Your application needs to be updated. Unsaved data will be lost. Tap here to update.")
        }
    };
s(m, "MessagesProvider");
var h = m,
    I = new h;
export {
    v as a, I as b
};