import {
    W as l,
    c as n,
    f as m
} from "./_oschunk-M5BUVJ72.js";
var T = {
        staticEntities: {}
    },
    C = T.staticEntities;

function c(r, t, o, a) {
    return new Promise(function(i, p) {
        let S = n(y => new Promise(A => setTimeout(A, y)), "sleep");
        m(null, null, function*() {
            yield S(r.ms), i()
        })
    })
}
n(c, "default");
var e = l,
    d = class d extends e.Controller.BaseModuleController {
        constructor(t, o, a, i) {
            super(t, o, a, i)
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
n(d, "Controller");
var f = d,
    s = new f,
    u = s;
s.sleep$Action = function(r, t) {
    return e.Logger.startActiveSpan("Sleep", function(o) {
        return o && (o.setAttribute("code.function", "Sleep"), o.setAttribute("outsystems.function.key", "83bd990a-60c4-4076-9460-e8353a3a97d1"), o.setAttribute("outsystems.function.owner.name", "SleepClientSide"), o.setAttribute("outsystems.function.owner.key", "3d61746a-11af-4a48-8f6c-ad4a5143a923"), o.setAttribute("outsystems.function.type", "CLIENT_ACTION")), e.Flow.tryFinally(function() {
            t = u.callContext(t);
            var a = new e.DataTypes.VariableHolder(new(u.constructor.getVariableGroupType("SleepClientSide.Sleep$vars")));
            return a.value.msInLocal = r, e.Flow.executeAsyncFlow(function() {
                return e.Logger.startActiveSpan("Sleep", function(i) {
                    i && (i.setAttribute("code.function", "Sleep"), i.setAttribute("outsystems.function.key", "d66cc6b9-d3e8-48d2-8c7e-cd03ef87bf73"), i.setAttribute("outsystems.function.owner.name", "SleepClientSide"), i.setAttribute("outsystems.function.owner.key", "3d61746a-11af-4a48-8f6c-ad4a5143a923"), i.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                    try {
                        return u.safeExecuteAsyncJSNode(c, "Sleep", "Sleep", {
                            ms: e.DataConversion.JSNodeParamConverter.to(a.value.msInLocal, e.DataTypes.DataTypes.Text)
                        }, function(p) {}, {}, {})
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }).then(function() {})
        }, function() {
            o && o.end()
        })
    }, 1)
};
s.constructor.registerVariableGroupType("SleepClientSide.Sleep$vars", [{
    name: "ms",
    attrName: "msInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: n(function() {
        return ""
    }, "defaultValue")
}]);
s.clientActionProxies.sleep$Action = function(r) {
    return r = r === void 0 ? "" : r, u.executeActionInsideJSNode(s.default.sleep$Action.bind(u, e.DataConversion.JSNodeParamConverter.from(r, e.DataTypes.DataTypes.Text)), e.Controller.BaseViewController.activeScreen ? e.Controller.BaseViewController.activeScreen.callContext() : void 0, function(t) {
        return {}
    })
};
var V = s;
export {
    V as a
};