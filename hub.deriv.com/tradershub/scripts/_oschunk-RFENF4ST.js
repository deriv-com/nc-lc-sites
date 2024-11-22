import {
    ia as c
} from "./_oschunk-NTQBNJ73.js";
import {
    c as n
} from "./_oschunk-DVBKI63I.js";
var T = {
        staticEntities: {}
    },
    v = T.staticEntities;

function f(a, e, l, r) {
    let {
        errors: u
    } = window.validate(a.ValidationSchema, a.Payload);
    a.Errors = u
}
n(f, "default");
var t = c,
    p = class p extends t.Controller.BaseModuleController {
        constructor(e, l, r, u) {
            super(e, l, r, u)
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
n(p, "Controller");
var d = p,
    i = new d,
    o = i;
i.loadYupScript$Action = function(a) {
    return t.Logger.startActiveSpan("LoadYupScript", function(e) {
        return e && (e.setAttribute("code.function", "LoadYupScript"), e.setAttribute("outsystems.function.key", "e4a3aa27-a622-4822-a173-473a566ba622"), e.setAttribute("outsystems.function.owner.name", "YupValidationsOfficial"), e.setAttribute("outsystems.function.owner.key", "e0162685-1b92-40fe-8f15-36b54a7b8361"), e.setAttribute("outsystems.function.type", "CLIENT_ACTION")), t.Flow.tryFinally(function() {
            return a = o.callContext(a), t.Flow.executeAsyncFlow(function() {
                return t.SystemActions.requireScript(t.Navigation.VersionedURL.getVersionedUrl("scripts/YupValidationsOfficial.UserScripts.YupUMD.js"), a)
            }).then(function() {})
        }, function() {
            e && e.end()
        })
    }, 1)
};
i.clientActionProxies.loadYupScript$Action = function() {
    return o.executeActionInsideJSNode(i.default.loadYupScript$Action.bind(o), t.Controller.BaseViewController.activeScreen ? t.Controller.BaseViewController.activeScreen.callContext() : void 0, function(a) {
        return {}
    })
};
i.yupValidate$Action = function(a, e, l) {
    return t.Logger.startActiveSpan("YupValidate", function(r) {
        r && (r.setAttribute("code.function", "YupValidate"), r.setAttribute("outsystems.function.key", "d03fbead-a852-4d7b-b9dd-85a2c74ba758"), r.setAttribute("outsystems.function.owner.name", "YupValidationsOfficial"), r.setAttribute("outsystems.function.owner.key", "e0162685-1b92-40fe-8f15-36b54a7b8361"), r.setAttribute("outsystems.function.type", "CLIENT_ACTION"));
        try {
            l = o.callContext(l);
            var u = new t.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("YupValidationsOfficial.YupValidate$vars")));
            u.value.validationSchemaInLocal = a, u.value.payloadInLocal = e;
            var y = new t.DataTypes.VariableHolder,
                m = new t.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("YupValidationsOfficial.YupValidate$outVars")));
            return y.value = t.Logger.startActiveSpan("Validate", function(s) {
                s && (s.setAttribute("code.function", "Validate"), s.setAttribute("outsystems.function.key", "c339f52b-28cd-4561-a726-8a039e8626da"), s.setAttribute("outsystems.function.owner.name", "YupValidationsOfficial"), s.setAttribute("outsystems.function.owner.key", "e0162685-1b92-40fe-8f15-36b54a7b8361"), s.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                try {
                    return o.safeExecuteJSNode(f, "Validate", "YupValidate", {
                        Payload: t.DataConversion.JSNodeParamConverter.to(u.value.payloadInLocal, t.DataTypes.DataTypes.Object),
                        ValidationSchema: t.DataConversion.JSNodeParamConverter.to(u.value.validationSchemaInLocal, t.DataTypes.DataTypes.Object),
                        Errors: t.DataConversion.JSNodeParamConverter.to(null, t.DataTypes.DataTypes.Object)
                    }, function(b) {
                        var V = new(o.constructor.getVariableGroupType("YupValidationsOfficial.YupValidate$validateJSResult"));
                        return V.errorsOut = t.DataConversion.JSNodeParamConverter.from(b.Errors, t.DataTypes.DataTypes.Object), V
                    }, {}, {})
                } finally {
                    s && s.end()
                }
            }, 1), m.value.errorsOut = y.value.errorsOut, m.value
        } finally {
            r && r.end()
        }
    }, 1)
};
i.constructor.registerVariableGroupType("YupValidationsOfficial.YupValidate$vars", [{
    name: "ValidationSchema",
    attrName: "validationSchemaInLocal",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Object,
    defaultValue: n(function() {
        return null
    }, "defaultValue")
}, {
    name: "Payload",
    attrName: "payloadInLocal",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Object,
    defaultValue: n(function() {
        return null
    }, "defaultValue")
}]);
i.constructor.registerVariableGroupType("YupValidationsOfficial.YupValidate$validateJSResult", [{
    name: "Errors",
    attrName: "errorsOut",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Object,
    defaultValue: n(function() {
        return null
    }, "defaultValue")
}]);
i.constructor.registerVariableGroupType("YupValidationsOfficial.YupValidate$outVars", [{
    name: "Errors",
    attrName: "errorsOut",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Object,
    defaultValue: n(function() {
        return null
    }, "defaultValue")
}]);
i.clientActionProxies.yupValidate$Action = function(a, e) {
    return a = a === void 0 ? null : a, e = e === void 0 ? null : e, o.executeActionInsideJSNode(i.default.yupValidate$Action.bind(o, t.DataConversion.JSNodeParamConverter.from(a, t.DataTypes.DataTypes.Object), t.DataConversion.JSNodeParamConverter.from(e, t.DataTypes.DataTypes.Object)), t.Controller.BaseViewController.activeScreen ? t.Controller.BaseViewController.activeScreen.callContext() : void 0, function(l) {
        return {
            Errors: t.DataConversion.JSNodeParamConverter.to(l.errorsOut, t.DataTypes.DataTypes.Object)
        }
    })
};
var E = i;
export {
    E as a
};