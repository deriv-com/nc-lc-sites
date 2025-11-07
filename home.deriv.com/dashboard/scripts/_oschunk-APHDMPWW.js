import {
    Ka as L,
    a as T
} from "./_oschunk-WCMQG33O.js";
import {
    X as b,
    c as u,
    w as y
} from "./_oschunk-DFKJJKI4.js";
var m = {
    staticEntities: {}
};
m.staticEntities.consoleErrorType = {};
Object.defineProperty(m.staticEntities.consoleErrorType, "error", {
    get: u(function() {
        return 2
    }, "get")
});
Object.defineProperty(m.staticEntities.consoleErrorType, "warning", {
    get: u(function() {
        return 1
    }, "get")
});
Object.defineProperty(m.staticEntities.consoleErrorType, "information", {
    get: u(function() {
        return 0
    }, "get")
});
var d = m.staticEntities;
var p = class p extends y.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Id", "idAttr", "Id", !0, !1, y.DataTypes.Integer, function() {
            return 0
        }, !0), this.attr("Label", "labelAttr", "Label", !0, !1, y.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Order", "orderAttr", "Order", !0, !1, y.DataTypes.Integer, function() {
            return 0
        }, !0), this.attr("Is_Active", "is_ActiveAttr", "Is_Active", !0, !1, y.DataTypes.Boolean, function() {
            return !1
        }, !0)].concat(y.GenericRecord.attributesToDeclare.call(this))
    }
    static get $runtimeName() {
        return "ConsoleErrorType"
    }
};
u(p, "EN_95096fd7ce0528eba549110f4ff009ffEntityRecord");
var A = p;
A.init();

function w(i, e, c, l) {
    console.error(i.Message)
}
u(w, "default");

function S(i, e, c, l) {
    console.warn(i.Message)
}
u(S, "default");

function D(i, e, c, l) {
    console.log(i.Message)
}
u(D, "default");

function x(i, e, c, l) {
    console.warn(i.Message, JSON.parse(i.JSON))
}
u(x, "default");

function v(i, e, c, l) {
    console.error(i.Message, JSON.parse(i.JSON))
}
u(v, "default");

function h(i, e, c, l) {
    console.log(i.Message, JSON.parse(i.JSON))
}
u(h, "default");
var t = b,
    O = class O extends t.Controller.BaseModuleController {
        constructor(e, c, l, a) {
            super(e, c, l, a)
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
u(O, "Controller");
var N = O,
    g = new N,
    f = g;
g.consoleLog$Action = function(i, e, c) {
    return t.Logger.startActiveSpan("ConsoleLog", function(l) {
        l && (l.setAttribute("code.function", "ConsoleLog"), l.setAttribute("outsystems.function.key", "e2f8b8a5-ee74-4626-a173-bbe216185bcf"), l.setAttribute("outsystems.function.owner.name", "BrowserConsoleLogging"), l.setAttribute("outsystems.function.owner.key", "7f7c3cd2-279d-4fb8-b978-c1ee91ff0d4f"), l.setAttribute("outsystems.function.type", "CLIENT_ACTION"));
        try {
            c = f.callContext(c);
            var a = new t.DataTypes.VariableHolder(new(f.constructor.getVariableGroupType("BrowserConsoleLogging.ConsoleLog$vars")));
            if (a.value.messageInLocal = i, a.value.consoleErrorTypeIdInLocal = e, a.value.consoleErrorTypeIdInLocal === d.consoleErrorType.warning) t.Logger.startActiveSpan("ConsoleWarning", function(o) {
                o && (o.setAttribute("code.function", "ConsoleWarning"), o.setAttribute("outsystems.function.key", "bf6592bc-1aef-4870-8ad7-45751683c39b"), o.setAttribute("outsystems.function.owner.name", "BrowserConsoleLogging"), o.setAttribute("outsystems.function.owner.key", "7f7c3cd2-279d-4fb8-b978-c1ee91ff0d4f"), o.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                try {
                    return f.safeExecuteJSNode(S, "ConsoleWarning", "ConsoleLog", {
                        Message: t.DataConversion.JSNodeParamConverter.to(a.value.messageInLocal, t.DataTypes.DataTypes.Text)
                    }, function(s) {}, {}, {})
                } finally {
                    o && o.end()
                }
            }, 1);
            else if (a.value.consoleErrorTypeIdInLocal === d.consoleErrorType.error) t.Logger.startActiveSpan("ConsoleError", function(o) {
                o && (o.setAttribute("code.function", "ConsoleError"), o.setAttribute("outsystems.function.key", "15283603-ef47-43b3-8c56-62dc688de6fb"), o.setAttribute("outsystems.function.owner.name", "BrowserConsoleLogging"), o.setAttribute("outsystems.function.owner.key", "7f7c3cd2-279d-4fb8-b978-c1ee91ff0d4f"), o.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                try {
                    return f.safeExecuteJSNode(w, "ConsoleError", "ConsoleLog", {
                        Message: t.DataConversion.JSNodeParamConverter.to(a.value.messageInLocal, t.DataTypes.DataTypes.Text)
                    }, function(s) {}, {}, {})
                } finally {
                    o && o.end()
                }
            }, 1);
            else if (a.value.consoleErrorTypeIdInLocal === d.consoleErrorType.information) t.Logger.startActiveSpan("ConsoleLog", function(o) {
                o && (o.setAttribute("code.function", "ConsoleLog"), o.setAttribute("outsystems.function.key", "d0a74f3e-fc2e-4714-8a43-c9d2c1d8afbc"), o.setAttribute("outsystems.function.owner.name", "BrowserConsoleLogging"), o.setAttribute("outsystems.function.owner.key", "7f7c3cd2-279d-4fb8-b978-c1ee91ff0d4f"), o.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                try {
                    return f.safeExecuteJSNode(D, "ConsoleLog", "ConsoleLog", {
                        Message: t.DataConversion.JSNodeParamConverter.to(a.value.messageInLocal, t.DataTypes.DataTypes.Text)
                    }, function(s) {}, {}, {})
                } finally {
                    o && o.end()
                }
            }, 1);
            else throw new t.Exceptions.Exceptions.AbortActivityChangeException("Unknown Console Error Type");
            return
        } finally {
            l && l.end()
        }
    }, 1)
};
g.constructor.registerVariableGroupType("BrowserConsoleLogging.ConsoleLog$vars", [{
    name: "Message",
    attrName: "messageInLocal",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: u(function() {
        return ""
    }, "defaultValue")
}, {
    name: "ConsoleErrorTypeId",
    attrName: "consoleErrorTypeIdInLocal",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Integer,
    defaultValue: u(function() {
        return 0
    }, "defaultValue")
}]);
g.clientActionProxies.consoleLog$Action = function(i, e) {
    return i = i === void 0 ? "" : i, e = e === void 0 ? 0 : e, f.executeActionInsideJSNode(g.default.consoleLog$Action.bind(f, t.DataConversion.JSNodeParamConverter.from(i, t.DataTypes.DataTypes.Text), e), t.Controller.BaseViewController.activeScreen ? t.Controller.BaseViewController.activeScreen.callContext() : void 0, function(c) {
        return {}
    })
};
g.consoleLogWithJSON$Action = function(i, e, c, l) {
    return t.Logger.startActiveSpan("ConsoleLogWithJSON", function(a) {
        a && (a.setAttribute("code.function", "ConsoleLogWithJSON"), a.setAttribute("outsystems.function.key", "78d556b2-b25c-4559-a937-2c0f92d16178"), a.setAttribute("outsystems.function.owner.name", "BrowserConsoleLogging"), a.setAttribute("outsystems.function.owner.key", "7f7c3cd2-279d-4fb8-b978-c1ee91ff0d4f"), a.setAttribute("outsystems.function.type", "CLIENT_ACTION"));
        try {
            l = f.callContext(l);
            var o = new t.DataTypes.VariableHolder(new(f.constructor.getVariableGroupType("BrowserConsoleLogging.ConsoleLogWithJSON$vars")));
            if (o.value.messageInLocal = i, o.value.jSONInLocal = e, o.value.consoleErrorTypeIdInLocal = c, o.value.consoleErrorTypeIdInLocal === d.consoleErrorType.warning) t.Logger.startActiveSpan("ConsoleWarning", function(s) {
                s && (s.setAttribute("code.function", "ConsoleWarning"), s.setAttribute("outsystems.function.key", "5820d063-aeb6-4024-a596-19767ed071b2"), s.setAttribute("outsystems.function.owner.name", "BrowserConsoleLogging"), s.setAttribute("outsystems.function.owner.key", "7f7c3cd2-279d-4fb8-b978-c1ee91ff0d4f"), s.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                try {
                    return f.safeExecuteJSNode(x, "ConsoleWarning", "ConsoleLogWithJSON", {
                        JSON: t.DataConversion.JSNodeParamConverter.to(o.value.jSONInLocal, t.DataTypes.DataTypes.Text),
                        Message: t.DataConversion.JSNodeParamConverter.to(o.value.messageInLocal, t.DataTypes.DataTypes.Text)
                    }, function(C) {}, {}, {})
                } finally {
                    s && s.end()
                }
            }, 1);
            else if (o.value.consoleErrorTypeIdInLocal === d.consoleErrorType.error) t.Logger.startActiveSpan("ConsoleError", function(s) {
                s && (s.setAttribute("code.function", "ConsoleError"), s.setAttribute("outsystems.function.key", "70d0bf71-aa95-4209-8fe7-975d172058b4"), s.setAttribute("outsystems.function.owner.name", "BrowserConsoleLogging"), s.setAttribute("outsystems.function.owner.key", "7f7c3cd2-279d-4fb8-b978-c1ee91ff0d4f"), s.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                try {
                    return f.safeExecuteJSNode(v, "ConsoleError", "ConsoleLogWithJSON", {
                        JSON: t.DataConversion.JSNodeParamConverter.to(o.value.jSONInLocal, t.DataTypes.DataTypes.Text),
                        Message: t.DataConversion.JSNodeParamConverter.to(o.value.messageInLocal, t.DataTypes.DataTypes.Text)
                    }, function(C) {}, {}, {})
                } finally {
                    s && s.end()
                }
            }, 1);
            else if (o.value.consoleErrorTypeIdInLocal === d.consoleErrorType.information) t.Logger.startActiveSpan("ConsoleLog", function(s) {
                s && (s.setAttribute("code.function", "ConsoleLog"), s.setAttribute("outsystems.function.key", "fbae0ce4-79c8-49c2-8029-f03b2e611bfb"), s.setAttribute("outsystems.function.owner.name", "BrowserConsoleLogging"), s.setAttribute("outsystems.function.owner.key", "7f7c3cd2-279d-4fb8-b978-c1ee91ff0d4f"), s.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                try {
                    return f.safeExecuteJSNode(h, "ConsoleLog", "ConsoleLogWithJSON", {
                        JSON: t.DataConversion.JSNodeParamConverter.to(o.value.jSONInLocal, t.DataTypes.DataTypes.Text),
                        Message: t.DataConversion.JSNodeParamConverter.to(o.value.messageInLocal, t.DataTypes.DataTypes.Text)
                    }, function(C) {}, {}, {})
                } finally {
                    s && s.end()
                }
            }, 1);
            else throw new t.Exceptions.Exceptions.AbortActivityChangeException("Unknown Console Error Type");
            return
        } finally {
            a && a.end()
        }
    }, 1)
};
g.constructor.registerVariableGroupType("BrowserConsoleLogging.ConsoleLogWithJSON$vars", [{
    name: "Message",
    attrName: "messageInLocal",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: u(function() {
        return ""
    }, "defaultValue")
}, {
    name: "JSON",
    attrName: "jSONInLocal",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: u(function() {
        return ""
    }, "defaultValue")
}, {
    name: "ConsoleErrorTypeId",
    attrName: "consoleErrorTypeIdInLocal",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Integer,
    defaultValue: u(function() {
        return 0
    }, "defaultValue")
}]);
g.clientActionProxies.consoleLogWithJSON$Action = function(i, e, c) {
    return i = i === void 0 ? "" : i, e = e === void 0 ? "" : e, c = c === void 0 ? 0 : c, f.executeActionInsideJSNode(g.default.consoleLogWithJSON$Action.bind(f, t.DataConversion.JSNodeParamConverter.from(i, t.DataTypes.DataTypes.Text), t.DataConversion.JSNodeParamConverter.from(e, t.DataTypes.DataTypes.Text), c), t.Controller.BaseViewController.activeScreen ? t.Controller.BaseViewController.activeScreen.callContext() : void 0, function(l) {
        return {}
    })
};
var E = g;
var M = {};
var r = b,
    _ = class _ extends r.Controller.BaseController {
        getDefaultTimeout() {
            return L.defaultTimeout
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(e, c) {
                var l = this.controller;
                return r.Logger.startActiveSpan("OnException", function(a) {
                    a && (a.setAttribute("code.function", "OnException"), a.setAttribute("outsystems.function.key", "1a118907-e7fa-4938-90a2-703c8abe0fca.#FlowExceptionHandler"), a.setAttribute("outsystems.function.owner.name", "dashboard"), a.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), a.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER"));
                    try {
                        var o = new r.DataTypes.VariableHolder(new r.DataTypes.ErrorHandlerOutputType),
                            s = new r.DataTypes.VariableHolder(new r.DataTypes.ErrorHandlerOutputType),
                            C = new r.DataTypes.VariableHolder(new r.DataTypes.ErrorHandlerOutputType),
                            I = new r.DataTypes.VariableHolder(new r.DataTypes.ErrorHandlerOutputType);
                        if (r.Logger.debug("Common.OnException", r.Exceptions.getMessage(e)), r.ErrorHandling.ignoreError(e, c)) return r.ErrorHandling.IGNORED_ERROR_RESULT;
                        try {
                            if (r.Logger.debug("Common.OnException", r.Exceptions.getMessage(e)), r.Exceptions.isInstanceOf(e, r.Exceptions.Exceptions.UserException, "dashboard.Unauthorized")) return r.Logger.error(null, e, null, null, 1), C.value.exceptionMessageAttr = r.Exceptions.getMessage(e), r.Logger.startActiveSpan("Unauthorized", function(n) {
                                n && (n.setAttribute("code.function", "Unauthorized"), n.setAttribute("outsystems.function.key", "578a7c19-d8d4-4dc5-a263-f77b0be1cd0d"), n.setAttribute("outsystems.function.owner.name", "dashboard"), n.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), n.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER"));
                                try {
                                    L.client_Logout$Action(c);
                                    return
                                } finally {
                                    n && n.end()
                                }
                            }, 1);
                            if (r.Exceptions.isInstanceOf(e, r.Exceptions.Exceptions.DataBaseException)) return r.Logger.error(null, e, null, null, 1), s.value.exceptionMessageAttr = r.Exceptions.getMessage(e), r.Logger.startActiveSpan("DataBaseException", function(n) {
                                n && (n.setAttribute("code.function", "DataBaseException"), n.setAttribute("outsystems.function.key", "44c56eca-8792-4354-8872-391470dce2a3"), n.setAttribute("outsystems.function.owner.name", "dashboard"), n.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), n.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER"));
                                try {
                                    E.consoleLog$Action("Database error: " + s.value.exceptionMessageAttr, T.consoleErrorType.error, c);
                                    return
                                } finally {
                                    n && n.end()
                                }
                            }, 1);
                            if (r.Exceptions.isInstanceOf(e, r.Exceptions.Exceptions.CommunicationException)) return r.Logger.error(null, e, null, null, 1), I.value.exceptionMessageAttr = r.Exceptions.getMessage(e), r.Logger.startActiveSpan("CommunicationException", function(n) {
                                n && (n.setAttribute("code.function", "CommunicationException"), n.setAttribute("outsystems.function.key", "9f3a4c50-96da-4e7b-99b9-25a7b45412e3"), n.setAttribute("outsystems.function.owner.name", "dashboard"), n.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), n.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER"));
                                try {
                                    E.consoleLog$Action("Communication error: " + I.value.exceptionMessageAttr, T.consoleErrorType.error, c);
                                    return
                                } finally {
                                    n && n.end()
                                }
                            }, 1);
                            if (!r.Exceptions.isSystem(e)) return r.Logger.error(null, e, null, null, 1), o.value.exceptionMessageAttr = r.Exceptions.getMessage(e), r.Logger.startActiveSpan("AllExceptions", function(n) {
                                n && (n.setAttribute("code.function", "AllExceptions"), n.setAttribute("outsystems.function.key", "22e99060-a32a-4cfa-acb6-7bd2cacb7ce1"), n.setAttribute("outsystems.function.owner.name", "dashboard"), n.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), n.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER"));
                                try {
                                    E.consoleLog$Action(o.value.exceptionMessageAttr, T.consoleErrorType.error, c);
                                    return
                                } finally {
                                    n && n.end()
                                }
                            }, 1);
                            throw e
                        } catch (n) {
                            return r.Logger.debug("Common.OnException", r.Exceptions.getMessage(e)), r.ErrorHandling.defaultErrorHandler(n, c)
                        }
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
    };
u(_, "Controller");
var J = _,
    Le = new J(M);
export {
    E as a, Le as b
};