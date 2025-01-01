import {
    Zh as d
} from "./_oschunk-MSUVGI3L.js";
import {
    ia as y,
    v as u
} from "./_oschunk-2JKANR6M.js";
import {
    c as o
} from "./_oschunk-DVBKI63I.js";
var C = {
    staticEntities: {}
};
C.staticEntities.consoleErrorType = {};
Object.defineProperty(C.staticEntities.consoleErrorType, "error", {
    get: o(function() {
        return 2
    }, "get")
});
Object.defineProperty(C.staticEntities.consoleErrorType, "warning", {
    get: o(function() {
        return 1
    }, "get")
});
Object.defineProperty(C.staticEntities.consoleErrorType, "information", {
    get: o(function() {
        return 0
    }, "get")
});
var g = C.staticEntities;
var T = class T extends u.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("ConsoleErrorType", "consoleErrorTypeAttr", "ConsoleErrorType", !1, !1, u.DataTypes.Record, function() {
            return u.ImmutableBase.getData(new d)
        }, !0, d)].concat(u.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(r) {
        return new T(new T.RecordClass({
            consoleErrorTypeAttr: u.ImmutableBase.getData(r)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "5e259c61-591c-7234-3b58-87d8b4ce62b5"
    }
};
o(T, "RC_5e259c61591c72343b5887d8b4ce62b5");
var m = T;
m.init();
var p = class p extends u.GenericRecordList {
    static getItemType() {
        return m
    }
};
o(p, "RL_422c5cc1eb56f188f2e407af881395ae");
var b = p;
var A = class A extends u.GenericRecordList {
    static getItemType() {
        return d
    }
};
o(A, "RL_9cb00801b4a261afbddde8f0eaaf25f3");
var L = A;

function S(s, r, c, i) {
    console.error(s.Message)
}
o(S, "default");

function w(s, r, c, i) {
    console.warn(s.Message)
}
o(w, "default");

function E(s, r, c, i) {
    console.log(s.Message)
}
o(E, "default");

function x(s, r, c, i) {
    console.warn(s.Message, JSON.parse(s.JSON))
}
o(x, "default");

function D(s, r, c, i) {
    console.error(s.Message, JSON.parse(s.JSON))
}
o(D, "default");

function N(s, r, c, i) {
    console.log(s.Message, JSON.parse(s.JSON))
}
o(N, "default");
var e = y,
    v = class v extends e.Controller.BaseModuleController {
        constructor(r, c, i, a) {
            super(r, c, i, a)
        }
        get clientActionProxies() {
            return this.hasOwnProperty("_clientActionProxies") || (this._clientActionProxies = {}), this._clientActionProxies
        }
        set clientActionProxies(r) {
            this._clientActionProxies = r
        }
        get roles() {
            return this.hasOwnProperty("_roles") || (this._roles = {}), this._roles
        }
        set roles(r) {
            this._roles = r
        }
        get defaultTimeout() {
            return this.hasOwnProperty("_defaultTimeout") || (this._defaultTimeout = 10), this._defaultTimeout
        }
        set defaultTimeout(r) {
            this._defaultTimeout = r
        }
        getDefaultTimeout() {
            return this.defaultTimeout
        }
    };
o(v, "Controller");
var J = v,
    f = new J,
    l = f;
f.consoleLog$Action = function(s, r, c) {
    return e.Logger.startActiveSpan("ConsoleLog", function(i) {
        i && (i.setAttribute("code.function", "ConsoleLog"), i.setAttribute("outsystems.function.key", "e2f8b8a5-ee74-4626-a173-bbe216185bcf"), i.setAttribute("outsystems.function.owner.name", "BrowserConsoleLogging"), i.setAttribute("outsystems.function.owner.key", "7f7c3cd2-279d-4fb8-b978-c1ee91ff0d4f"), i.setAttribute("outsystems.function.type", "CLIENT_ACTION"));
        try {
            c = l.callContext(c);
            var a = new e.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("BrowserConsoleLogging.ConsoleLog$vars")));
            if (a.value.messageInLocal = s, a.value.consoleErrorTypeIdInLocal = r, a.value.consoleErrorTypeIdInLocal === g.consoleErrorType.warning) e.Logger.startActiveSpan("ConsoleWarning", function(t) {
                t && (t.setAttribute("code.function", "ConsoleWarning"), t.setAttribute("outsystems.function.key", "bf6592bc-1aef-4870-8ad7-45751683c39b"), t.setAttribute("outsystems.function.owner.name", "BrowserConsoleLogging"), t.setAttribute("outsystems.function.owner.key", "7f7c3cd2-279d-4fb8-b978-c1ee91ff0d4f"), t.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                try {
                    return l.safeExecuteJSNode(w, "ConsoleWarning", "ConsoleLog", {
                        Message: e.DataConversion.JSNodeParamConverter.to(a.value.messageInLocal, e.DataTypes.DataTypes.Text)
                    }, function(n) {}, {}, {})
                } finally {
                    t && t.end()
                }
            }, 1);
            else if (a.value.consoleErrorTypeIdInLocal === g.consoleErrorType.error) e.Logger.startActiveSpan("ConsoleError", function(t) {
                t && (t.setAttribute("code.function", "ConsoleError"), t.setAttribute("outsystems.function.key", "15283603-ef47-43b3-8c56-62dc688de6fb"), t.setAttribute("outsystems.function.owner.name", "BrowserConsoleLogging"), t.setAttribute("outsystems.function.owner.key", "7f7c3cd2-279d-4fb8-b978-c1ee91ff0d4f"), t.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                try {
                    return l.safeExecuteJSNode(S, "ConsoleError", "ConsoleLog", {
                        Message: e.DataConversion.JSNodeParamConverter.to(a.value.messageInLocal, e.DataTypes.DataTypes.Text)
                    }, function(n) {}, {}, {})
                } finally {
                    t && t.end()
                }
            }, 1);
            else if (a.value.consoleErrorTypeIdInLocal === g.consoleErrorType.information) e.Logger.startActiveSpan("ConsoleLog", function(t) {
                t && (t.setAttribute("code.function", "ConsoleLog"), t.setAttribute("outsystems.function.key", "d0a74f3e-fc2e-4714-8a43-c9d2c1d8afbc"), t.setAttribute("outsystems.function.owner.name", "BrowserConsoleLogging"), t.setAttribute("outsystems.function.owner.key", "7f7c3cd2-279d-4fb8-b978-c1ee91ff0d4f"), t.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                try {
                    return l.safeExecuteJSNode(E, "ConsoleLog", "ConsoleLog", {
                        Message: e.DataConversion.JSNodeParamConverter.to(a.value.messageInLocal, e.DataTypes.DataTypes.Text)
                    }, function(n) {}, {}, {})
                } finally {
                    t && t.end()
                }
            }, 1);
            else throw new e.Exceptions.Exceptions.AbortActivityChangeException("Unknown Console Error Type");
            return
        } finally {
            i && i.end()
        }
    }, 1)
};
f.constructor.registerVariableGroupType("BrowserConsoleLogging.ConsoleLog$vars", [{
    name: "Message",
    attrName: "messageInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: o(function() {
        return ""
    }, "defaultValue")
}, {
    name: "ConsoleErrorTypeId",
    attrName: "consoleErrorTypeIdInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Integer,
    defaultValue: o(function() {
        return 0
    }, "defaultValue")
}]);
f.clientActionProxies.consoleLog$Action = function(s, r) {
    return s = s === void 0 ? "" : s, r = r === void 0 ? 0 : r, l.executeActionInsideJSNode(f.default.consoleLog$Action.bind(l, e.DataConversion.JSNodeParamConverter.from(s, e.DataTypes.DataTypes.Text), r), e.Controller.BaseViewController.activeScreen ? e.Controller.BaseViewController.activeScreen.callContext() : void 0, function(c) {
        return {}
    })
};
f.consoleLogWithJSON$Action = function(s, r, c, i) {
    return e.Logger.startActiveSpan("ConsoleLogWithJSON", function(a) {
        a && (a.setAttribute("code.function", "ConsoleLogWithJSON"), a.setAttribute("outsystems.function.key", "78d556b2-b25c-4559-a937-2c0f92d16178"), a.setAttribute("outsystems.function.owner.name", "BrowserConsoleLogging"), a.setAttribute("outsystems.function.owner.key", "7f7c3cd2-279d-4fb8-b978-c1ee91ff0d4f"), a.setAttribute("outsystems.function.type", "CLIENT_ACTION"));
        try {
            i = l.callContext(i);
            var t = new e.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("BrowserConsoleLogging.ConsoleLogWithJSON$vars")));
            if (t.value.messageInLocal = s, t.value.jSONInLocal = r, t.value.consoleErrorTypeIdInLocal = c, t.value.consoleErrorTypeIdInLocal === g.consoleErrorType.warning) e.Logger.startActiveSpan("ConsoleWarning", function(n) {
                n && (n.setAttribute("code.function", "ConsoleWarning"), n.setAttribute("outsystems.function.key", "5820d063-aeb6-4024-a596-19767ed071b2"), n.setAttribute("outsystems.function.owner.name", "BrowserConsoleLogging"), n.setAttribute("outsystems.function.owner.key", "7f7c3cd2-279d-4fb8-b978-c1ee91ff0d4f"), n.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                try {
                    return l.safeExecuteJSNode(x, "ConsoleWarning", "ConsoleLogWithJSON", {
                        JSON: e.DataConversion.JSNodeParamConverter.to(t.value.jSONInLocal, e.DataTypes.DataTypes.Text),
                        Message: e.DataConversion.JSNodeParamConverter.to(t.value.messageInLocal, e.DataTypes.DataTypes.Text)
                    }, function(O) {}, {}, {})
                } finally {
                    n && n.end()
                }
            }, 1);
            else if (t.value.consoleErrorTypeIdInLocal === g.consoleErrorType.error) e.Logger.startActiveSpan("ConsoleError", function(n) {
                n && (n.setAttribute("code.function", "ConsoleError"), n.setAttribute("outsystems.function.key", "70d0bf71-aa95-4209-8fe7-975d172058b4"), n.setAttribute("outsystems.function.owner.name", "BrowserConsoleLogging"), n.setAttribute("outsystems.function.owner.key", "7f7c3cd2-279d-4fb8-b978-c1ee91ff0d4f"), n.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                try {
                    return l.safeExecuteJSNode(D, "ConsoleError", "ConsoleLogWithJSON", {
                        JSON: e.DataConversion.JSNodeParamConverter.to(t.value.jSONInLocal, e.DataTypes.DataTypes.Text),
                        Message: e.DataConversion.JSNodeParamConverter.to(t.value.messageInLocal, e.DataTypes.DataTypes.Text)
                    }, function(O) {}, {}, {})
                } finally {
                    n && n.end()
                }
            }, 1);
            else if (t.value.consoleErrorTypeIdInLocal === g.consoleErrorType.information) e.Logger.startActiveSpan("ConsoleLog", function(n) {
                n && (n.setAttribute("code.function", "ConsoleLog"), n.setAttribute("outsystems.function.key", "fbae0ce4-79c8-49c2-8029-f03b2e611bfb"), n.setAttribute("outsystems.function.owner.name", "BrowserConsoleLogging"), n.setAttribute("outsystems.function.owner.key", "7f7c3cd2-279d-4fb8-b978-c1ee91ff0d4f"), n.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                try {
                    return l.safeExecuteJSNode(N, "ConsoleLog", "ConsoleLogWithJSON", {
                        JSON: e.DataConversion.JSNodeParamConverter.to(t.value.jSONInLocal, e.DataTypes.DataTypes.Text),
                        Message: e.DataConversion.JSNodeParamConverter.to(t.value.messageInLocal, e.DataTypes.DataTypes.Text)
                    }, function(O) {}, {}, {})
                } finally {
                    n && n.end()
                }
            }, 1);
            else throw new e.Exceptions.Exceptions.AbortActivityChangeException("Unknown Console Error Type");
            return
        } finally {
            a && a.end()
        }
    }, 1)
};
f.constructor.registerVariableGroupType("BrowserConsoleLogging.ConsoleLogWithJSON$vars", [{
    name: "Message",
    attrName: "messageInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: o(function() {
        return ""
    }, "defaultValue")
}, {
    name: "JSON",
    attrName: "jSONInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: o(function() {
        return ""
    }, "defaultValue")
}, {
    name: "ConsoleErrorTypeId",
    attrName: "consoleErrorTypeIdInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Integer,
    defaultValue: o(function() {
        return 0
    }, "defaultValue")
}]);
f.clientActionProxies.consoleLogWithJSON$Action = function(s, r, c) {
    return s = s === void 0 ? "" : s, r = r === void 0 ? "" : r, c = c === void 0 ? 0 : c, l.executeActionInsideJSNode(f.default.consoleLogWithJSON$Action.bind(l, e.DataConversion.JSNodeParamConverter.from(s, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(r, e.DataTypes.DataTypes.Text), c), e.Controller.BaseViewController.activeScreen ? e.Controller.BaseViewController.activeScreen.callContext() : void 0, function(i) {
        return {}
    })
};
var be = f;
export {
    be as a
};