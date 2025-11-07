import {
    a as oe
} from "./_oschunk-4INYM4LX.js";
import {
    b as te
} from "./_oschunk-A7PCBR4A.js";
import "./_oschunk-3UX5CTV3.js";
import {
    a as Z
} from "./_oschunk-LLB25ACX.js";
import {
    a as re
} from "./_oschunk-CS5PY5ZF.js";
import "./_oschunk-Q5H2JROI.js";
import "./_oschunk-J3DG2BKZ.js";
import "./_oschunk-24WIHVSN.js";
import {
    h as f,
    i as L,
    q as S,
    t as U,
    x as O
} from "./_oschunk-O5KC3WOL.js";
import {
    a as Fe,
    g as K,
    m as Oe,
    n as Re,
    q as ke,
    r as Ie,
    s as Y,
    t as ee
} from "./_oschunk-NVHFAAS2.js";
import {
    a as he
} from "./_oschunk-AW35UT34.js";
import "./_oschunk-APHDMPWW.js";
import {
    Ga as R,
    Ka as E,
    a as B,
    b as z
} from "./_oschunk-WCMQG33O.js";
import {
    X as h,
    c as d,
    d as Pe,
    f as Ue,
    i as W,
    n as P,
    o as x,
    q as _,
    w as A,
    x as N,
    y as xe
} from "./_oschunk-DFKJJKI4.js";
var He = {
        staticEntities: {}
    },
    qe = He.staticEntities;
var F = {
    staticEntities: {}
};
F.staticEntities.mobile_OperatingSystem = {};
Object.defineProperty(F.staticEntities.mobile_OperatingSystem, "other", {
    get: d(function() {
        return "Other"
    }, "get")
});
Object.defineProperty(F.staticEntities.mobile_OperatingSystem, "windows", {
    get: d(function() {
        return "Windows"
    }, "get")
});
Object.defineProperty(F.staticEntities.mobile_OperatingSystem, "iOS", {
    get: d(function() {
        return "iOS"
    }, "get")
});
Object.defineProperty(F.staticEntities.mobile_OperatingSystem, "android", {
    get: d(function() {
        return "Android"
    }, "get")
});
var q = F.staticEntities;
var ie = class ie extends A.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("ErrorCode", "errorCodeAttr", "ErrorCode", !1, !1, A.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("ErrorMessage", "errorMessageAttr", "ErrorMessage", !1, !1, A.DataTypes.Text, function() {
            return ""
        }, !0)].concat(A.GenericRecord.attributesToDeclare.call(this))
    }
    static get $runtimeName() {
        return "Error"
    }
};
d(ie, "ST_e17c093645b6df840d3423fc6893e70fStructure");
var G = ie;
G.init();
var ae = class ae extends A.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("PluginName", "pluginNameAttr", "PluginName", !1, !1, A.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("MobileOperatingSystemId", "mobileOperatingSystemIdAttr", "MobileOperatingSystemId", !1, !1, A.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("License", "licenseAttr", "License", !1, !1, A.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("SubscriptionKey", "subscriptionKeyAttr", "SubscriptionKey", !1, !1, A.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("SubscriptionToken", "subscriptionTokenAttr", "SubscriptionToken", !1, !1, A.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("UpdatedBy", "updatedByAttr", "UpdatedBy", !1, !1, A.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("LastUpdate", "lastUpdateAttr", "LastUpdate", !1, !1, A.DataTypes.DateTime, function() {
            return A.DateTime.defaultValue
        }, !0)].concat(A.GenericRecord.attributesToDeclare.call(this))
    }
    static get $runtimeName() {
        return "PluginLicense"
    }
};
d(ae, "ST_3695e3f105edfc9bb9d7bc5568b9b2f5Structure");
var Q = ae;
Q.init();
var ne = class ne extends A.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Label", "labelAttr", "Label", !0, !1, A.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Order", "orderAttr", "Order", !0, !1, A.DataTypes.Integer, function() {
            return 0
        }, !0), this.attr("Is_Active", "is_ActiveAttr", "Is_Active", !0, !1, A.DataTypes.Boolean, function() {
            return !1
        }, !0)].concat(A.GenericRecord.attributesToDeclare.call(this))
    }
    static get $runtimeName() {
        return "Mobile_OperatingSystem"
    }
};
d(ne, "EN_589575018eea7445e67437e5e372d5fbEntityRecord");
var J = ne;
J.init();

function se(c, i, a, t) {
    console.log("> " + c.Component + ": " + c.Text)
}
d(se, "default");

function le(c, i, a, t) {
    c.deviceHwId = device.uuid
}
d(le, "default");

function ue(c, i, a, t) {
    c.PlatformId = cordova.platformId
}
d(ue, "default");

function ce(c, i, a, t) {
    c.UserAgent = navigator.userAgent
}
d(ce, "default");

function de(c, i, a, t) {
    return new Promise(function(e, r) {
        define !== void 0 && Pe !== void 0 && i.RequireScript(c.LegacyScriptURL), i.RequireScript(c.ScriptURL).then(function() {
            e()
        })
    })
}
d(de, "default");

function ge(c, i, a, t) {
    typeof cordova == "undefined" ? c.CordovaLoaded = !1 : c.CordovaLoaded = !0
}
d(ge, "default");
var n = h,
    pe = class pe extends n.Controller.BaseModuleController {
        constructor(i, a, t, e) {
            super(i, a, t, e)
        }
        get clientActionProxies() {
            return this.hasOwnProperty("_clientActionProxies") || (this._clientActionProxies = {}), this._clientActionProxies
        }
        set clientActionProxies(i) {
            this._clientActionProxies = i
        }
        get roles() {
            return this.hasOwnProperty("_roles") || (this._roles = {}), this._roles
        }
        set roles(i) {
            this._roles = i
        }
        get defaultTimeout() {
            return this.hasOwnProperty("_defaultTimeout") || (this._defaultTimeout = 10), this._defaultTimeout
        }
        set defaultTimeout(i) {
            this._defaultTimeout = i
        }
        getDefaultTimeout() {
            return this.defaultTimeout
        }
    };
d(pe, "Controller");
var fe = pe,
    y = new fe,
    v = y;
y.consoleLog$Action = function(c, i, a) {
    return n.Logger.startActiveSpan("ConsoleLog", function(t) {
        t && (t.setAttribute("code.function", "ConsoleLog"), t.setAttribute("outsystems.function.key", "c35d27cb-a320-4eeb-83d3-d469c3192e77"), t.setAttribute("outsystems.function.owner.name", "CommonPlugin"), t.setAttribute("outsystems.function.owner.key", "8b0ceaeb-05b8-4921-bf46-e0d6c66e8472"), t.setAttribute("outsystems.function.type", "CLIENT_ACTION"));
        try {
            a = v.callContext(a);
            var e = new n.DataTypes.VariableHolder(new(v.constructor.getVariableGroupType("CommonPlugin.ConsoleLog$vars")));
            e.value.componentInLocal = c, e.value.textInLocal = i;
            var r = new n.DataTypes.VariableHolder(new n.DataTypes.ErrorHandlerOutputType);
            try {
                n.Logger.startActiveSpan("WriteToConsole", function(o) {
                    o && (o.setAttribute("code.function", "WriteToConsole"), o.setAttribute("outsystems.function.key", "bfb166a0-02f5-4750-9981-faaca436aa60"), o.setAttribute("outsystems.function.owner.name", "CommonPlugin"), o.setAttribute("outsystems.function.owner.key", "8b0ceaeb-05b8-4921-bf46-e0d6c66e8472"), o.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                    try {
                        return v.safeExecuteJSNode(se, "WriteToConsole", "ConsoleLog", {
                            Component: n.DataConversion.JSNodeParamConverter.to(e.value.componentInLocal, n.DataTypes.DataTypes.Text),
                            Text: n.DataConversion.JSNodeParamConverter.to(e.value.textInLocal, n.DataTypes.DataTypes.Text)
                        }, function(l) {}, {}, {})
                    } finally {
                        o && o.end()
                    }
                }, 1)
            } catch (o) {
                (function() {
                    if (n.Logger.debug("ConsoleLog.ConsoleLog", n.Exceptions.getMessage(o)), !n.Exceptions.isSystem(o)) return n.Logger.error(null, o, null, null, 1), r.value.exceptionMessageAttr = n.Exceptions.getMessage(o), n.Logger.startActiveSpan("AllExceptions", function(l) {
                        l && (l.setAttribute("code.function", "AllExceptions"), l.setAttribute("outsystems.function.key", "9bf65634-9c93-41b7-8831-bc5aed552f65"), l.setAttribute("outsystems.function.owner.name", "CommonPlugin"), l.setAttribute("outsystems.function.owner.key", "8b0ceaeb-05b8-4921-bf46-e0d6c66e8472"), l.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER"));
                        try {
                            return
                        } finally {
                            l && l.end()
                        }
                    }, 1);
                    throw o
                })()
            }
            return
        } finally {
            t && t.end()
        }
    }, 1)
};
y.constructor.registerVariableGroupType("CommonPlugin.ConsoleLog$vars", [{
    name: "Component",
    attrName: "componentInLocal",
    mandatory: !0,
    dataType: n.DataTypes.DataTypes.Text,
    defaultValue: d(function() {
        return ""
    }, "defaultValue")
}, {
    name: "Text",
    attrName: "textInLocal",
    mandatory: !0,
    dataType: n.DataTypes.DataTypes.Text,
    defaultValue: d(function() {
        return ""
    }, "defaultValue")
}]);
y.clientActionProxies.consoleLog$Action = function(c, i) {
    return c = c === void 0 ? "" : c, i = i === void 0 ? "" : i, v.executeActionInsideJSNode(y.default.consoleLog$Action.bind(v, n.DataConversion.JSNodeParamConverter.from(c, n.DataTypes.DataTypes.Text), n.DataConversion.JSNodeParamConverter.from(i, n.DataTypes.DataTypes.Text)), n.Controller.BaseViewController.activeScreen ? n.Controller.BaseViewController.activeScreen.callContext() : void 0, function(a) {
        return {}
    })
};
y.getDeviceID$Action = function(c) {
    return n.Logger.startActiveSpan("GetDeviceID", function(i) {
        i && (i.setAttribute("code.function", "GetDeviceID"), i.setAttribute("outsystems.function.key", "8ce5aa0d-fbf8-4130-b781-ffd404bdff0d"), i.setAttribute("outsystems.function.owner.name", "CommonPlugin"), i.setAttribute("outsystems.function.owner.key", "8b0ceaeb-05b8-4921-bf46-e0d6c66e8472"), i.setAttribute("outsystems.function.type", "CLIENT_ACTION"));
        try {
            c = v.callContext(c);
            var a = new n.DataTypes.VariableHolder,
                t = new n.DataTypes.VariableHolder(new(v.constructor.getVariableGroupType("CommonPlugin.GetDeviceID$outVars")));
            return a.value = n.Logger.startActiveSpan("GetDeviceHwId", function(e) {
                e && (e.setAttribute("code.function", "GetDeviceHwId"), e.setAttribute("outsystems.function.key", "1152799f-4ff5-496f-a80e-d3243dc38c9a"), e.setAttribute("outsystems.function.owner.name", "CommonPlugin"), e.setAttribute("outsystems.function.owner.key", "8b0ceaeb-05b8-4921-bf46-e0d6c66e8472"), e.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                try {
                    return v.safeExecuteJSNode(le, "GetDeviceHwId", "GetDeviceID", {
                        deviceHwId: n.DataConversion.JSNodeParamConverter.to("", n.DataTypes.DataTypes.Text)
                    }, function(r) {
                        var o = new(v.constructor.getVariableGroupType("CommonPlugin.GetDeviceID$getDeviceHwIdJSResult"));
                        return o.deviceHwIdOut = n.DataConversion.JSNodeParamConverter.from(r.deviceHwId, n.DataTypes.DataTypes.Text), o
                    }, {}, {})
                } finally {
                    e && e.end()
                }
            }, 1), t.value.deviceHwIdOut = a.value.deviceHwIdOut, t.value
        } finally {
            i && i.end()
        }
    }, 1)
};
y.constructor.registerVariableGroupType("CommonPlugin.GetDeviceID$getDeviceHwIdJSResult", [{
    name: "deviceHwId",
    attrName: "deviceHwIdOut",
    mandatory: !0,
    dataType: n.DataTypes.DataTypes.Text,
    defaultValue: d(function() {
        return ""
    }, "defaultValue")
}]);
y.constructor.registerVariableGroupType("CommonPlugin.GetDeviceID$outVars", [{
    name: "DeviceHwId",
    attrName: "deviceHwIdOut",
    mandatory: !1,
    dataType: n.DataTypes.DataTypes.Text,
    defaultValue: d(function() {
        return ""
    }, "defaultValue")
}]);
y.clientActionProxies.getDeviceID$Action = function() {
    return v.executeActionInsideJSNode(y.default.getDeviceID$Action.bind(v), n.Controller.BaseViewController.activeScreen ? n.Controller.BaseViewController.activeScreen.callContext() : void 0, function(c) {
        return {
            DeviceHwId: n.DataConversion.JSNodeParamConverter.to(c.deviceHwIdOut, n.DataTypes.DataTypes.Text)
        }
    })
};
y.getOperatingSystem$Action = function(c) {
    return n.Logger.startActiveSpan("GetOperatingSystem", function(i) {
        i && (i.setAttribute("code.function", "GetOperatingSystem"), i.setAttribute("outsystems.function.key", "0ddcece8-e300-485d-a4a7-082d559d4f76"), i.setAttribute("outsystems.function.owner.name", "CommonPlugin"), i.setAttribute("outsystems.function.owner.key", "8b0ceaeb-05b8-4921-bf46-e0d6c66e8472"), i.setAttribute("outsystems.function.type", "CLIENT_ACTION"));
        try {
            c = v.callContext(c);
            var a = new n.DataTypes.VariableHolder(new n.DataTypes.ErrorHandlerOutputType),
                t = new n.DataTypes.VariableHolder,
                e = new n.DataTypes.VariableHolder(new(v.constructor.getVariableGroupType("CommonPlugin.GetOperatingSystem$outVars")));
            try {
                t.value = y.default.getPlatform$Action(c), t.value.platformOut === "android" ? e.value.operatingSystemsIdOut = q.mobile_OperatingSystem.android : t.value.platformOut === "ios" ? e.value.operatingSystemsIdOut = q.mobile_OperatingSystem.iOS : e.value.operatingSystemsIdOut = q.mobile_OperatingSystem.other
            } catch (r) {
                (function() {
                    if (n.Logger.debug("GetOperatingSystem.GetOperatingSystem", n.Exceptions.getMessage(r)), !n.Exceptions.isSystem(r)) return n.Logger.error(null, r, null, null, 1), a.value.exceptionMessageAttr = n.Exceptions.getMessage(r), n.Logger.startActiveSpan("AllExceptions", function(o) {
                        o && (o.setAttribute("code.function", "AllExceptions"), o.setAttribute("outsystems.function.key", "2e4e2fb1-2cf6-4074-8949-c365e37cfdde"), o.setAttribute("outsystems.function.owner.name", "CommonPlugin"), o.setAttribute("outsystems.function.owner.key", "8b0ceaeb-05b8-4921-bf46-e0d6c66e8472"), o.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER"));
                        try {
                            return y.default.consoleLog$Action("CommonPlugins", a.value.exceptionMessageAttr, c), e.value
                        } finally {
                            o && o.end()
                        }
                    }, 1);
                    throw r
                })()
            }
            return e.value
        } finally {
            i && i.end()
        }
    }, 1)
};
y.constructor.registerVariableGroupType("CommonPlugin.GetOperatingSystem$outVars", [{
    name: "OperatingSystemsId",
    attrName: "operatingSystemsIdOut",
    mandatory: !1,
    dataType: n.DataTypes.DataTypes.Text,
    defaultValue: d(function() {
        return ""
    }, "defaultValue")
}]);
y.clientActionProxies.getOperatingSystem$Action = function() {
    return v.executeActionInsideJSNode(y.default.getOperatingSystem$Action.bind(v), n.Controller.BaseViewController.activeScreen ? n.Controller.BaseViewController.activeScreen.callContext() : void 0, function(c) {
        return {
            OperatingSystemsId: c.operatingSystemsIdOut
        }
    })
};
y.getPlatform$Action = function(c) {
    return n.Logger.startActiveSpan("GetPlatform", function(i) {
        i && (i.setAttribute("code.function", "GetPlatform"), i.setAttribute("outsystems.function.key", "c35ba9a1-2e0b-4b5f-a2b5-c77d3709882d"), i.setAttribute("outsystems.function.owner.name", "CommonPlugin"), i.setAttribute("outsystems.function.owner.key", "8b0ceaeb-05b8-4921-bf46-e0d6c66e8472"), i.setAttribute("outsystems.function.type", "CLIENT_ACTION"));
        try {
            c = v.callContext(c);
            var a = new n.DataTypes.VariableHolder(new n.DataTypes.ErrorHandlerOutputType),
                t = new n.DataTypes.VariableHolder,
                e = new n.DataTypes.VariableHolder(new(v.constructor.getVariableGroupType("CommonPlugin.GetPlatform$outVars")));
            try {
                t.value = n.Logger.startActiveSpan("RunCordova", function(r) {
                    r && (r.setAttribute("code.function", "RunCordova"), r.setAttribute("outsystems.function.key", "7a4d9871-e03e-4201-9151-3c0023fb61e4"), r.setAttribute("outsystems.function.owner.name", "CommonPlugin"), r.setAttribute("outsystems.function.owner.key", "8b0ceaeb-05b8-4921-bf46-e0d6c66e8472"), r.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                    try {
                        return v.safeExecuteJSNode(ue, "RunCordova", "GetPlatform", {
                            PlatformId: n.DataConversion.JSNodeParamConverter.to("", n.DataTypes.DataTypes.Text)
                        }, function(o) {
                            var l = new(v.constructor.getVariableGroupType("CommonPlugin.GetPlatform$runCordovaJSResult"));
                            return l.platformIdOut = n.DataConversion.JSNodeParamConverter.from(o.PlatformId, n.DataTypes.DataTypes.Text), l
                        }, {}, {})
                    } finally {
                        r && r.end()
                    }
                }, 1), e.value.platformOut = n.BuiltinFunctions.toLower(t.value.platformIdOut)
            } catch (r) {
                (function() {
                    if (n.Logger.debug("GetPlatform.GetPlatform", n.Exceptions.getMessage(r)), !n.Exceptions.isSystem(r)) return n.Logger.error(null, r, null, null, 1), a.value.exceptionMessageAttr = n.Exceptions.getMessage(r), n.Logger.startActiveSpan("AllExceptions", function(o) {
                        o && (o.setAttribute("code.function", "AllExceptions"), o.setAttribute("outsystems.function.key", "7f1c3dc1-3711-4b66-9ea4-7a4776d91963"), o.setAttribute("outsystems.function.owner.name", "CommonPlugin"), o.setAttribute("outsystems.function.owner.key", "8b0ceaeb-05b8-4921-bf46-e0d6c66e8472"), o.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER"));
                        try {
                            return y.default.consoleLog$Action("CommonPlugins", a.value.exceptionMessageAttr, c), e.value
                        } finally {
                            o && o.end()
                        }
                    }, 1);
                    throw r
                })()
            }
            return e.value
        } finally {
            i && i.end()
        }
    }, 1)
};
y.constructor.registerVariableGroupType("CommonPlugin.GetPlatform$runCordovaJSResult", [{
    name: "PlatformId",
    attrName: "platformIdOut",
    mandatory: !0,
    dataType: n.DataTypes.DataTypes.Text,
    defaultValue: d(function() {
        return ""
    }, "defaultValue")
}]);
y.constructor.registerVariableGroupType("CommonPlugin.GetPlatform$outVars", [{
    name: "Platform",
    attrName: "platformOut",
    mandatory: !1,
    dataType: n.DataTypes.DataTypes.Text,
    defaultValue: d(function() {
        return ""
    }, "defaultValue")
}]);
y.clientActionProxies.getPlatform$Action = function() {
    return v.executeActionInsideJSNode(y.default.getPlatform$Action.bind(v), n.Controller.BaseViewController.activeScreen ? n.Controller.BaseViewController.activeScreen.callContext() : void 0, function(c) {
        return {
            Platform: n.DataConversion.JSNodeParamConverter.to(c.platformOut, n.DataTypes.DataTypes.Text)
        }
    })
};
y.getUserAgent$Action = function(c) {
    return n.Logger.startActiveSpan("GetUserAgent", function(i) {
        i && (i.setAttribute("code.function", "GetUserAgent"), i.setAttribute("outsystems.function.key", "3b5c9047-8325-486c-95ed-b63beb268365"), i.setAttribute("outsystems.function.owner.name", "CommonPlugin"), i.setAttribute("outsystems.function.owner.key", "8b0ceaeb-05b8-4921-bf46-e0d6c66e8472"), i.setAttribute("outsystems.function.type", "CLIENT_ACTION"));
        try {
            c = v.callContext(c);
            var a = new n.DataTypes.VariableHolder(new n.DataTypes.ErrorHandlerOutputType),
                t = new n.DataTypes.VariableHolder,
                e = new n.DataTypes.VariableHolder(new(v.constructor.getVariableGroupType("CommonPlugin.GetUserAgent$outVars")));
            try {
                t.value = n.Logger.startActiveSpan("GettingUA", function(r) {
                    r && (r.setAttribute("code.function", "GettingUA"), r.setAttribute("outsystems.function.key", "87fa54ab-f667-4584-9a03-cf7ab66e736d"), r.setAttribute("outsystems.function.owner.name", "CommonPlugin"), r.setAttribute("outsystems.function.owner.key", "8b0ceaeb-05b8-4921-bf46-e0d6c66e8472"), r.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                    try {
                        return v.safeExecuteJSNode(ce, "GettingUA", "GetUserAgent", {
                            UserAgent: n.DataConversion.JSNodeParamConverter.to("", n.DataTypes.DataTypes.Text)
                        }, function(o) {
                            var l = new(v.constructor.getVariableGroupType("CommonPlugin.GetUserAgent$gettingUAJSResult"));
                            return l.userAgentOut = n.DataConversion.JSNodeParamConverter.from(o.UserAgent, n.DataTypes.DataTypes.Text), l
                        }, {}, {})
                    } finally {
                        r && r.end()
                    }
                }, 1), e.value.userAgentOut = t.value.userAgentOut
            } catch (r) {
                (function() {
                    if (n.Logger.debug("GetUserAgent.GetUserAgent", n.Exceptions.getMessage(r)), !n.Exceptions.isSystem(r)) return n.Logger.error(null, r, null, null, 1), a.value.exceptionMessageAttr = n.Exceptions.getMessage(r), n.Logger.startActiveSpan("AllExceptions", function(o) {
                        o && (o.setAttribute("code.function", "AllExceptions"), o.setAttribute("outsystems.function.key", "5df45868-4e12-42d1-a272-1e19c6935c51"), o.setAttribute("outsystems.function.owner.name", "CommonPlugin"), o.setAttribute("outsystems.function.owner.key", "8b0ceaeb-05b8-4921-bf46-e0d6c66e8472"), o.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER"));
                        try {
                            return y.default.consoleLog$Action("CommonPlugins", a.value.exceptionMessageAttr, c), e.value
                        } finally {
                            o && o.end()
                        }
                    }, 1);
                    throw r
                })()
            }
            return e.value
        } finally {
            i && i.end()
        }
    }, 1)
};
y.constructor.registerVariableGroupType("CommonPlugin.GetUserAgent$gettingUAJSResult", [{
    name: "UserAgent",
    attrName: "userAgentOut",
    mandatory: !0,
    dataType: n.DataTypes.DataTypes.Text,
    defaultValue: d(function() {
        return ""
    }, "defaultValue")
}]);
y.constructor.registerVariableGroupType("CommonPlugin.GetUserAgent$outVars", [{
    name: "UserAgent",
    attrName: "userAgentOut",
    mandatory: !1,
    dataType: n.DataTypes.DataTypes.Text,
    defaultValue: d(function() {
        return ""
    }, "defaultValue")
}]);
y.clientActionProxies.getUserAgent$Action = function() {
    return v.executeActionInsideJSNode(y.default.getUserAgent$Action.bind(v), n.Controller.BaseViewController.activeScreen ? n.Controller.BaseViewController.activeScreen.callContext() : void 0, function(c) {
        return {
            UserAgent: n.DataConversion.JSNodeParamConverter.to(c.userAgentOut, n.DataTypes.DataTypes.Text)
        }
    })
};
y.initPluginManager$Action = function(c) {
    return n.Logger.startActiveSpan("InitPluginManager", function(i) {
        return i && (i.setAttribute("code.function", "InitPluginManager"), i.setAttribute("outsystems.function.key", "757925da-a635-4bf5-97e2-26bfdb5ef508"), i.setAttribute("outsystems.function.owner.name", "CommonPlugin"), i.setAttribute("outsystems.function.owner.key", "8b0ceaeb-05b8-4921-bf46-e0d6c66e8472"), i.setAttribute("outsystems.function.type", "CLIENT_ACTION")), n.Flow.tryFinally(function() {
            return c = v.callContext(c), n.Flow.executeAsyncFlow(function() {
                return n.Logger.startActiveSpan("InitScript", function(a) {
                    a && (a.setAttribute("code.function", "InitScript"), a.setAttribute("outsystems.function.key", "72931d81-801f-406a-8a0c-b64a88bfba13"), a.setAttribute("outsystems.function.owner.name", "CommonPlugin"), a.setAttribute("outsystems.function.owner.key", "8b0ceaeb-05b8-4921-bf46-e0d6c66e8472"), a.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                    try {
                        return v.safeExecuteAsyncJSNode(de, "InitScript", "InitPluginManager", {
                            ScriptURL: n.DataConversion.JSNodeParamConverter.to(n.Navigation.VersionedURL.getVersionedUrl("scripts/CommonPlugin.UserScripts.PluginManager.js"), n.DataTypes.DataTypes.Text),
                            LegacyScriptURL: n.DataConversion.JSNodeParamConverter.to(n.Navigation.VersionedURL.getVersionedUrl("scripts/CommonPlugin.UserScripts.Legacy_PluginManager.js"), n.DataTypes.DataTypes.Text)
                        }, function(t) {}, {
                            RequireScript: n.SystemActions.requireScript
                        }, {})
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }).then(function() {})
        }, function() {
            i && i.end()
        })
    }, 1)
};
y.clientActionProxies.initPluginManager$Action = function() {
    return v.executeActionInsideJSNode(y.default.initPluginManager$Action.bind(v), n.Controller.BaseViewController.activeScreen ? n.Controller.BaseViewController.activeScreen.callContext() : void 0, function(c) {
        return {}
    })
};
y.isCordovaDefined$Action = function(c) {
    return n.Logger.startActiveSpan("IsCordovaDefined", function(i) {
        i && (i.setAttribute("code.function", "IsCordovaDefined"), i.setAttribute("outsystems.function.key", "8c87ec43-13fd-4b76-88db-6888733c440c"), i.setAttribute("outsystems.function.owner.name", "CommonPlugin"), i.setAttribute("outsystems.function.owner.key", "8b0ceaeb-05b8-4921-bf46-e0d6c66e8472"), i.setAttribute("outsystems.function.type", "CLIENT_ACTION"));
        try {
            c = v.callContext(c);
            var a = new n.DataTypes.VariableHolder(new n.DataTypes.ErrorHandlerOutputType),
                t = new n.DataTypes.VariableHolder,
                e = new n.DataTypes.VariableHolder(new(v.constructor.getVariableGroupType("CommonPlugin.IsCordovaDefined$outVars")));
            try {
                t.value = n.Logger.startActiveSpan("CheckCordova", function(r) {
                    r && (r.setAttribute("code.function", "CheckCordova"), r.setAttribute("outsystems.function.key", "aee26cbc-81f8-4f80-904e-c9e294dbb126"), r.setAttribute("outsystems.function.owner.name", "CommonPlugin"), r.setAttribute("outsystems.function.owner.key", "8b0ceaeb-05b8-4921-bf46-e0d6c66e8472"), r.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                    try {
                        return v.safeExecuteJSNode(ge, "CheckCordova", "IsCordovaDefined", {
                            CordovaLoaded: n.DataConversion.JSNodeParamConverter.to(!1, n.DataTypes.DataTypes.Boolean)
                        }, function(o) {
                            var l = new(v.constructor.getVariableGroupType("CommonPlugin.IsCordovaDefined$checkCordovaJSResult"));
                            return l.cordovaLoadedOut = n.DataConversion.JSNodeParamConverter.from(o.CordovaLoaded, n.DataTypes.DataTypes.Boolean), l
                        }, {}, {})
                    } finally {
                        r && r.end()
                    }
                }, 1), e.value.isLoadedOut = t.value.cordovaLoadedOut
            } catch (r) {
                (function() {
                    if (n.Logger.debug("IsCordovaDefined.IsCordovaDefined", n.Exceptions.getMessage(r)), !n.Exceptions.isSystem(r)) return n.Logger.error(null, r, null, null, 1), a.value.exceptionMessageAttr = n.Exceptions.getMessage(r), n.Logger.startActiveSpan("AllExceptions", function(o) {
                        o && (o.setAttribute("code.function", "AllExceptions"), o.setAttribute("outsystems.function.key", "bf2b641c-c4fc-45f1-825d-597463c5606a"), o.setAttribute("outsystems.function.owner.name", "CommonPlugin"), o.setAttribute("outsystems.function.owner.key", "8b0ceaeb-05b8-4921-bf46-e0d6c66e8472"), o.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER"));
                        try {
                            return y.default.consoleLog$Action("CommonPlugins", a.value.exceptionMessageAttr, c), e.value
                        } finally {
                            o && o.end()
                        }
                    }, 1);
                    throw r
                })()
            }
            return e.value
        } finally {
            i && i.end()
        }
    }, 1)
};
y.constructor.registerVariableGroupType("CommonPlugin.IsCordovaDefined$checkCordovaJSResult", [{
    name: "CordovaLoaded",
    attrName: "cordovaLoadedOut",
    mandatory: !0,
    dataType: n.DataTypes.DataTypes.Boolean,
    defaultValue: d(function() {
        return !1
    }, "defaultValue")
}]);
y.constructor.registerVariableGroupType("CommonPlugin.IsCordovaDefined$outVars", [{
    name: "IsLoaded",
    attrName: "isLoadedOut",
    mandatory: !1,
    dataType: n.DataTypes.DataTypes.Boolean,
    defaultValue: d(function() {
        return !1
    }, "defaultValue")
}]);
y.clientActionProxies.isCordovaDefined$Action = function() {
    return v.executeActionInsideJSNode(y.default.isCordovaDefined$Action.bind(v), n.Controller.BaseViewController.activeScreen ? n.Controller.BaseViewController.activeScreen.callContext() : void 0, function(c) {
        return {
            IsLoaded: n.DataConversion.JSNodeParamConverter.to(c.isLoadedOut, n.DataTypes.DataTypes.Boolean)
        }
    })
};
y.publicStructs$Action = function(c) {
    return n.Logger.startActiveSpan("PublicStructs", function(i) {
        i && (i.setAttribute("code.function", "PublicStructs"), i.setAttribute("outsystems.function.key", "0526454a-a53b-4160-b638-7c502e07f867"), i.setAttribute("outsystems.function.owner.name", "CommonPlugin"), i.setAttribute("outsystems.function.owner.key", "8b0ceaeb-05b8-4921-bf46-e0d6c66e8472"), i.setAttribute("outsystems.function.type", "CLIENT_ACTION"));
        try {
            c = v.callContext(c);
            var a = new n.DataTypes.VariableHolder(new(v.constructor.getVariableGroupType("CommonPlugin.PublicStructs$outVars")));
            return a.value
        } finally {
            i && i.end()
        }
    }, 1)
};
y.constructor.registerVariableGroupType("CommonPlugin.PublicStructs$outVars", [{
    name: "Error",
    attrName: "errorOut",
    mandatory: !1,
    dataType: n.DataTypes.DataTypes.Record,
    defaultValue: d(function() {
        return new G
    }, "defaultValue"),
    complexType: G
}, {
    name: "PluginLicense",
    attrName: "pluginLicenseOut",
    mandatory: !1,
    dataType: n.DataTypes.DataTypes.Record,
    defaultValue: d(function() {
        return new Q
    }, "defaultValue"),
    complexType: Q
}]);
y.clientActionProxies.publicStructs$Action = function() {
    return v.executeActionInsideJSNode(y.default.publicStructs$Action.bind(v), n.Controller.BaseViewController.activeScreen ? n.Controller.BaseViewController.activeScreen.callContext() : void 0, function(c) {
        return {
            Error: c.errorOut,
            PluginLicense: c.pluginLicenseOut
        }
    })
};
var X = y;

function me(c, i, a, t) {
    return new Promise(function(e, r) {
        function o() {
            c.Success = !0, e()
        }
        d(o, "onSuccess");

        function l(p) {
            c.Success = !1, e()
        }
        d(l, "onError"), cordova.plugins.clipboard.clear(o, l)
    })
}
d(me, "default");

function ye(c, i, a, t) {
    return new Promise(function(e, r) {
        function o() {
            c.Success = !0, e()
        }
        d(o, "onSuccess");

        function l(p) {
            c.Success = !1, c.ErrorMessage = p, e()
        }
        d(l, "onError"), cordova.plugins.clipboard.copy(c.String)
    })
}
d(ye, "default");

function ve(c, i, a, t) {
    function e(o) {
        var l = document.createElement("textarea");
        l.value = o, l.style.top = "0", l.style.left = "0", l.style.position = "fixed", document.body.appendChild(l), l.focus(), l.select();
        try {
            var p = document.execCommand("copy"),
                k = p ? "successful" : "unsuccessful";
            console.log("Fallback: Copying text command was " + k), c.Success = p
        } catch (s) {
            console.error("Fallback: Oops, unable to copy", s), c.Success = !1, c.ErrorMessage = s
        }
        document.body.removeChild(l)
    }
    d(e, "fallbackCopyTextToClipboard");

    function r(o) {
        if (!navigator.clipboard) {
            e(o);
            return
        }
        navigator.clipboard.writeText(o).then(function() {
            console.log("Async: Copying to clipboard was successful!"), c.Success = !0
        }, function(l) {
            console.error("Async: Could not copy text: ", l), console.log("Will try to fallback"), e(o)
        })
    }
    d(r, "copyTextToClipboard"), r(c.String)
}
d(ve, "default");

function be(c, i, a, t) {
    return new Promise(function(e, r) {
        function o(p) {
            c.String = p, c.Success = !0, e()
        }
        d(o, "onSuccess");

        function l(p) {
            c.Success = !1, e()
        }
        d(l, "onError"), cordova.plugins.clipboard.paste(o, l)
    })
}
d(be, "default");
var g = h,
    Ee = class Ee extends g.Controller.BaseModuleController {
        constructor(i, a, t, e) {
            super(i, a, t, e)
        }
        get clientActionProxies() {
            return this.hasOwnProperty("_clientActionProxies") || (this._clientActionProxies = {}), this._clientActionProxies
        }
        set clientActionProxies(i) {
            this._clientActionProxies = i
        }
        get roles() {
            return this.hasOwnProperty("_roles") || (this._roles = {}), this._roles
        }
        set roles(i) {
            this._roles = i
        }
        get defaultTimeout() {
            return this.hasOwnProperty("_defaultTimeout") || (this._defaultTimeout = 10), this._defaultTimeout
        }
        set defaultTimeout(i) {
            this._defaultTimeout = i
        }
        getDefaultTimeout() {
            return this.defaultTimeout
        }
    };
d(Ee, "Controller");
var _e = Ee,
    V = new _e,
    C = V;
V.clearClipboard$Action = function(c) {
    return g.Logger.startActiveSpan("ClearClipboard", function(i) {
        return i && (i.setAttribute("code.function", "ClearClipboard"), i.setAttribute("outsystems.function.key", "b702e4ed-f1bc-4f44-b5d0-1b8563f65e96"), i.setAttribute("outsystems.function.owner.name", "CopyToClipboard_Plugin"), i.setAttribute("outsystems.function.owner.key", "3b67978a-5c60-4af4-96fb-9cb44324ad6a"), i.setAttribute("outsystems.function.type", "CLIENT_ACTION")), g.Flow.tryFinally(function() {
            c = C.callContext(c);
            var a = new g.DataTypes.VariableHolder,
                t = new g.DataTypes.VariableHolder,
                e = new g.DataTypes.VariableHolder,
                r = new g.DataTypes.VariableHolder(new(C.constructor.getVariableGroupType("CopyToClipboard_Plugin.ClearClipboard$outVars")));
            return g.Flow.executeAsyncFlow(function() {
                return t.value = X.isCordovaDefined$Action(c), g.Flow.executeSequence(function() {
                    if (t.value.isLoadedOut) return g.Logger.startActiveSpan("ClearClipboard", function(o) {
                        o && (o.setAttribute("code.function", "ClearClipboard"), o.setAttribute("outsystems.function.key", "647a409a-eac6-4b6c-bda9-6cd49788055f"), o.setAttribute("outsystems.function.owner.name", "CopyToClipboard_Plugin"), o.setAttribute("outsystems.function.owner.key", "3b67978a-5c60-4af4-96fb-9cb44324ad6a"), o.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                        try {
                            return C.safeExecuteAsyncJSNode(me, "ClearClipboard", "ClearClipboard", {
                                Success: g.DataConversion.JSNodeParamConverter.to(!1, g.DataTypes.DataTypes.Boolean)
                            }, function(l) {
                                var p = new(C.constructor.getVariableGroupType("CopyToClipboard_Plugin.ClearClipboard$clearClipboardJSResult"));
                                return p.successOut = g.DataConversion.JSNodeParamConverter.from(l.Success, g.DataTypes.DataTypes.Boolean), p
                            }, {}, {})
                        } finally {
                            o && o.end()
                        }
                    }, 1).then(function(o) {
                        e.value = o
                    }).then(function() {
                        r.value.successOut = e.value.successOut
                    });
                    a.value = V.default.copyToClipboard_Browser$Action("", c), r.value.successOut = a.value.successOut
                })
            }).then(function() {
                return r.value
            })
        }, function() {
            i && i.end()
        })
    }, 1)
};
V.constructor.registerVariableGroupType("CopyToClipboard_Plugin.ClearClipboard$clearClipboardJSResult", [{
    name: "Success",
    attrName: "successOut",
    mandatory: !0,
    dataType: g.DataTypes.DataTypes.Boolean,
    defaultValue: d(function() {
        return !1
    }, "defaultValue")
}]);
V.constructor.registerVariableGroupType("CopyToClipboard_Plugin.ClearClipboard$outVars", [{
    name: "Success",
    attrName: "successOut",
    mandatory: !1,
    dataType: g.DataTypes.DataTypes.Boolean,
    defaultValue: d(function() {
        return !1
    }, "defaultValue")
}]);
V.clientActionProxies.clearClipboard$Action = function() {
    return C.executeActionInsideJSNode(V.default.clearClipboard$Action.bind(C), g.Controller.BaseViewController.activeScreen ? g.Controller.BaseViewController.activeScreen.callContext() : void 0, function(c) {
        return {
            Success: g.DataConversion.JSNodeParamConverter.to(c.successOut, g.DataTypes.DataTypes.Boolean)
        }
    })
};
V.copyToClipboard$Action = function(c, i) {
    return g.Logger.startActiveSpan("CopyToClipboard", function(a) {
        return a && (a.setAttribute("code.function", "CopyToClipboard"), a.setAttribute("outsystems.function.key", "4329396b-a1f9-4d8d-b128-4ffb6fdb0fb9"), a.setAttribute("outsystems.function.owner.name", "CopyToClipboard_Plugin"), a.setAttribute("outsystems.function.owner.key", "3b67978a-5c60-4af4-96fb-9cb44324ad6a"), a.setAttribute("outsystems.function.type", "CLIENT_ACTION")), g.Flow.tryFinally(function() {
            i = C.callContext(i);
            var t = new g.DataTypes.VariableHolder(new(C.constructor.getVariableGroupType("CopyToClipboard_Plugin.CopyToClipboard$vars")));
            t.value.stringInLocal = c;
            var e = new g.DataTypes.VariableHolder,
                r = new g.DataTypes.VariableHolder,
                o = new g.DataTypes.VariableHolder,
                l = new g.DataTypes.VariableHolder(new(C.constructor.getVariableGroupType("CopyToClipboard_Plugin.CopyToClipboard$outVars")));
            return g.Flow.executeAsyncFlow(function() {
                return e.value = X.isCordovaDefined$Action(i), g.Flow.executeSequence(function() {
                    if (e.value.isLoadedOut) return g.Logger.startActiveSpan("CopyToClipboard", function(p) {
                        p && (p.setAttribute("code.function", "CopyToClipboard"), p.setAttribute("outsystems.function.key", "2b4da277-ca25-4232-aa4d-b262fda6f080"), p.setAttribute("outsystems.function.owner.name", "CopyToClipboard_Plugin"), p.setAttribute("outsystems.function.owner.key", "3b67978a-5c60-4af4-96fb-9cb44324ad6a"), p.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                        try {
                            return C.safeExecuteAsyncJSNode(ye, "CopyToClipboard", "CopyToClipboard", {
                                String: g.DataConversion.JSNodeParamConverter.to(t.value.stringInLocal, g.DataTypes.DataTypes.Text),
                                Success: g.DataConversion.JSNodeParamConverter.to(!1, g.DataTypes.DataTypes.Boolean),
                                ErrorMessage: g.DataConversion.JSNodeParamConverter.to("", g.DataTypes.DataTypes.Text)
                            }, function(k) {
                                var s = new(C.constructor.getVariableGroupType("CopyToClipboard_Plugin.CopyToClipboard$copyToClipboardJSResult"));
                                return s.successOut = g.DataConversion.JSNodeParamConverter.from(k.Success, g.DataTypes.DataTypes.Boolean), s.errorMessageOut = g.DataConversion.JSNodeParamConverter.from(k.ErrorMessage, g.DataTypes.DataTypes.Text), s
                            }, {}, {})
                        } finally {
                            p && p.end()
                        }
                    }, 1).then(function(p) {
                        o.value = p
                    }).then(function() {
                        l.value.successOut = o.value.successOut, l.value.errorMessageOut = o.value.errorMessageOut
                    });
                    r.value = V.default.copyToClipboard_Browser$Action(t.value.stringInLocal, i), l.value.successOut = r.value.successOut, l.value.errorMessageOut = r.value.errorMessageOut
                })
            }).then(function() {
                return l.value
            })
        }, function() {
            a && a.end()
        })
    }, 1)
};
V.constructor.registerVariableGroupType("CopyToClipboard_Plugin.CopyToClipboard$vars", [{
    name: "String",
    attrName: "stringInLocal",
    mandatory: !0,
    dataType: g.DataTypes.DataTypes.Text,
    defaultValue: d(function() {
        return ""
    }, "defaultValue")
}]);
V.constructor.registerVariableGroupType("CopyToClipboard_Plugin.CopyToClipboard$copyToClipboardJSResult", [{
    name: "Success",
    attrName: "successOut",
    mandatory: !0,
    dataType: g.DataTypes.DataTypes.Boolean,
    defaultValue: d(function() {
        return !1
    }, "defaultValue")
}, {
    name: "ErrorMessage",
    attrName: "errorMessageOut",
    mandatory: !0,
    dataType: g.DataTypes.DataTypes.Text,
    defaultValue: d(function() {
        return ""
    }, "defaultValue")
}]);
V.constructor.registerVariableGroupType("CopyToClipboard_Plugin.CopyToClipboard$outVars", [{
    name: "Success",
    attrName: "successOut",
    mandatory: !1,
    dataType: g.DataTypes.DataTypes.Boolean,
    defaultValue: d(function() {
        return !1
    }, "defaultValue")
}, {
    name: "ErrorMessage",
    attrName: "errorMessageOut",
    mandatory: !1,
    dataType: g.DataTypes.DataTypes.Text,
    defaultValue: d(function() {
        return ""
    }, "defaultValue")
}]);
V.clientActionProxies.copyToClipboard$Action = function(c) {
    return c = c === void 0 ? "" : c, C.executeActionInsideJSNode(V.default.copyToClipboard$Action.bind(C, g.DataConversion.JSNodeParamConverter.from(c, g.DataTypes.DataTypes.Text)), g.Controller.BaseViewController.activeScreen ? g.Controller.BaseViewController.activeScreen.callContext() : void 0, function(i) {
        return {
            Success: g.DataConversion.JSNodeParamConverter.to(i.successOut, g.DataTypes.DataTypes.Boolean),
            ErrorMessage: g.DataConversion.JSNodeParamConverter.to(i.errorMessageOut, g.DataTypes.DataTypes.Text)
        }
    })
};
V.copyToClipboard_Browser$Action = function(c, i) {
    return g.Logger.startActiveSpan("CopyToClipboard_Browser", function(a) {
        a && (a.setAttribute("code.function", "CopyToClipboard_Browser"), a.setAttribute("outsystems.function.key", "c2fb94d6-a996-4ef1-8ea3-998865db2d9d"), a.setAttribute("outsystems.function.owner.name", "CopyToClipboard_Plugin"), a.setAttribute("outsystems.function.owner.key", "3b67978a-5c60-4af4-96fb-9cb44324ad6a"), a.setAttribute("outsystems.function.type", "CLIENT_ACTION"));
        try {
            i = C.callContext(i);
            var t = new g.DataTypes.VariableHolder(new(C.constructor.getVariableGroupType("CopyToClipboard_Plugin.CopyToClipboard_Browser$vars")));
            t.value.stringInLocal = c;
            var e = new g.DataTypes.VariableHolder,
                r = new g.DataTypes.VariableHolder(new(C.constructor.getVariableGroupType("CopyToClipboard_Plugin.CopyToClipboard_Browser$outVars")));
            return e.value = g.Logger.startActiveSpan("JS_CopyToClipboard_Browser", function(o) {
                o && (o.setAttribute("code.function", "JS_CopyToClipboard_Browser"), o.setAttribute("outsystems.function.key", "34383adf-ab9d-410a-b1a2-869c597544fa"), o.setAttribute("outsystems.function.owner.name", "CopyToClipboard_Plugin"), o.setAttribute("outsystems.function.owner.key", "3b67978a-5c60-4af4-96fb-9cb44324ad6a"), o.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                try {
                    return C.safeExecuteJSNode(ve, "JS_CopyToClipboard_Browser", "CopyToClipboard_Browser", {
                        String: g.DataConversion.JSNodeParamConverter.to(t.value.stringInLocal, g.DataTypes.DataTypes.Text),
                        Success: g.DataConversion.JSNodeParamConverter.to(!1, g.DataTypes.DataTypes.Boolean),
                        ErrorMessage: g.DataConversion.JSNodeParamConverter.to("", g.DataTypes.DataTypes.Text)
                    }, function(l) {
                        var p = new(C.constructor.getVariableGroupType("CopyToClipboard_Plugin.CopyToClipboard_Browser$jS_CopyToClipboard_BrowserJSResult"));
                        return p.successOut = g.DataConversion.JSNodeParamConverter.from(l.Success, g.DataTypes.DataTypes.Boolean), p.errorMessageOut = g.DataConversion.JSNodeParamConverter.from(l.ErrorMessage, g.DataTypes.DataTypes.Text), p
                    }, {}, {})
                } finally {
                    o && o.end()
                }
            }, 1), r.value.successOut = !0, r.value.errorMessageOut = e.value.errorMessageOut, r.value
        } finally {
            a && a.end()
        }
    }, 1)
};
V.constructor.registerVariableGroupType("CopyToClipboard_Plugin.CopyToClipboard_Browser$vars", [{
    name: "String",
    attrName: "stringInLocal",
    mandatory: !0,
    dataType: g.DataTypes.DataTypes.Text,
    defaultValue: d(function() {
        return ""
    }, "defaultValue")
}]);
V.constructor.registerVariableGroupType("CopyToClipboard_Plugin.CopyToClipboard_Browser$jS_CopyToClipboard_BrowserJSResult", [{
    name: "Success",
    attrName: "successOut",
    mandatory: !0,
    dataType: g.DataTypes.DataTypes.Boolean,
    defaultValue: d(function() {
        return !1
    }, "defaultValue")
}, {
    name: "ErrorMessage",
    attrName: "errorMessageOut",
    mandatory: !0,
    dataType: g.DataTypes.DataTypes.Text,
    defaultValue: d(function() {
        return ""
    }, "defaultValue")
}]);
V.constructor.registerVariableGroupType("CopyToClipboard_Plugin.CopyToClipboard_Browser$outVars", [{
    name: "Success",
    attrName: "successOut",
    mandatory: !1,
    dataType: g.DataTypes.DataTypes.Boolean,
    defaultValue: d(function() {
        return !1
    }, "defaultValue")
}, {
    name: "ErrorMessage",
    attrName: "errorMessageOut",
    mandatory: !1,
    dataType: g.DataTypes.DataTypes.Text,
    defaultValue: d(function() {
        return ""
    }, "defaultValue")
}]);
V.clientActionProxies.copyToClipboard_Browser$Action = function(c) {
    return c = c === void 0 ? "" : c, C.executeActionInsideJSNode(V.default.copyToClipboard_Browser$Action.bind(C, g.DataConversion.JSNodeParamConverter.from(c, g.DataTypes.DataTypes.Text)), g.Controller.BaseViewController.activeScreen ? g.Controller.BaseViewController.activeScreen.callContext() : void 0, function(i) {
        return {
            Success: g.DataConversion.JSNodeParamConverter.to(i.successOut, g.DataTypes.DataTypes.Boolean),
            ErrorMessage: g.DataConversion.JSNodeParamConverter.to(i.errorMessageOut, g.DataTypes.DataTypes.Text)
        }
    })
};
V.pasteFromClipboard$Action = function(c) {
    return g.Logger.startActiveSpan("PasteFromClipboard", function(i) {
        return i && (i.setAttribute("code.function", "PasteFromClipboard"), i.setAttribute("outsystems.function.key", "2317f4c6-b46b-49d9-b952-f3ab9ab160e4"), i.setAttribute("outsystems.function.owner.name", "CopyToClipboard_Plugin"), i.setAttribute("outsystems.function.owner.key", "3b67978a-5c60-4af4-96fb-9cb44324ad6a"), i.setAttribute("outsystems.function.type", "CLIENT_ACTION")), g.Flow.tryFinally(function() {
            c = C.callContext(c);
            var a = new g.DataTypes.VariableHolder,
                t = new g.DataTypes.VariableHolder,
                e = new g.DataTypes.VariableHolder(new(C.constructor.getVariableGroupType("CopyToClipboard_Plugin.PasteFromClipboard$outVars")));
            return g.Flow.executeAsyncFlow(function() {
                return a.value = X.isCordovaDefined$Action(c), g.Flow.executeSequence(function() {
                    if (a.value.isLoadedOut) return g.Logger.startActiveSpan("PasteFromClipboard", function(r) {
                        r && (r.setAttribute("code.function", "PasteFromClipboard"), r.setAttribute("outsystems.function.key", "553a1a56-c7ea-4688-843b-98da2e4d39bf"), r.setAttribute("outsystems.function.owner.name", "CopyToClipboard_Plugin"), r.setAttribute("outsystems.function.owner.key", "3b67978a-5c60-4af4-96fb-9cb44324ad6a"), r.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                        try {
                            return C.safeExecuteAsyncJSNode(be, "PasteFromClipboard", "PasteFromClipboard", {
                                String: g.DataConversion.JSNodeParamConverter.to("", g.DataTypes.DataTypes.Text),
                                Success: g.DataConversion.JSNodeParamConverter.to(!1, g.DataTypes.DataTypes.Boolean)
                            }, function(o) {
                                var l = new(C.constructor.getVariableGroupType("CopyToClipboard_Plugin.PasteFromClipboard$pasteFromClipboardJSResult"));
                                return l.stringOut = g.DataConversion.JSNodeParamConverter.from(o.String, g.DataTypes.DataTypes.Text), l.successOut = g.DataConversion.JSNodeParamConverter.from(o.Success, g.DataTypes.DataTypes.Boolean), l
                            }, {}, {})
                        } finally {
                            r && r.end()
                        }
                    }, 1).then(function(r) {
                        t.value = r
                    }).then(function() {
                        e.value.stringOut = t.value.stringOut, e.value.successOut = t.value.successOut
                    });
                    g.FeedbackMessageService.showFeedbackMessage("Feature not implemented in browser mode.", 0), e.value.successOut = !1
                })
            }).then(function() {
                return e.value
            })
        }, function() {
            i && i.end()
        })
    }, 1)
};
V.constructor.registerVariableGroupType("CopyToClipboard_Plugin.PasteFromClipboard$pasteFromClipboardJSResult", [{
    name: "String",
    attrName: "stringOut",
    mandatory: !0,
    dataType: g.DataTypes.DataTypes.Text,
    defaultValue: d(function() {
        return ""
    }, "defaultValue")
}, {
    name: "Success",
    attrName: "successOut",
    mandatory: !0,
    dataType: g.DataTypes.DataTypes.Boolean,
    defaultValue: d(function() {
        return !1
    }, "defaultValue")
}]);
V.constructor.registerVariableGroupType("CopyToClipboard_Plugin.PasteFromClipboard$outVars", [{
    name: "String",
    attrName: "stringOut",
    mandatory: !1,
    dataType: g.DataTypes.DataTypes.Text,
    defaultValue: d(function() {
        return ""
    }, "defaultValue")
}, {
    name: "Success",
    attrName: "successOut",
    mandatory: !1,
    dataType: g.DataTypes.DataTypes.Boolean,
    defaultValue: d(function() {
        return !1
    }, "defaultValue")
}]);
V.clientActionProxies.pasteFromClipboard$Action = function() {
    return C.executeActionInsideJSNode(V.default.pasteFromClipboard$Action.bind(C), g.Controller.BaseViewController.activeScreen ? g.Controller.BaseViewController.activeScreen.callContext() : void 0, function(c) {
        return {
            String: g.DataConversion.JSNodeParamConverter.to(c.stringOut, g.DataTypes.DataTypes.Text),
            Success: g.DataConversion.JSNodeParamConverter.to(c.successOut, g.DataTypes.DataTypes.Boolean)
        }
    })
};
var Le = V;
var Xe = {
        "XaXL7pzEwEu3kkGo8zrgmQ#Value": "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C",
        "DvEj62PcXkSwcXZoSxKtUg#Value": "\u0627\u0644\u062F\u0631\u062F\u0634\u0629 \u0627\u0644\u0645\u0628\u0627\u0634\u0631\u0629",
        "HJsvSvQAf0elC8g1TEPlYA#Value": "\u0645\u0631\u0643\u0632 \u0627\u0644\u0645\u0633\u0627\u0639\u062F\u0629",
        "g76_92uzwUW01UFWJWwQlQ#Value": "\u0627\u0644\u062F\u0639\u0645",
        "4IO49Ta8OEO2AE5sYZ5mCw#Value": "\u0627\u0644\u0644\u063A\u0629",
        "143FeSKoJkqIe+8S_aFYgw#Value": "\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631",
        "PljL8_i5VUS2Lu1WA74cGg#Value": "\u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A",
        "T_W45EHI_0GPkcO6EuXwug#ValueExpression.-1929739544.1": "\u062A\u0645 \u0627\u0644\u062A\u062D\u0642\u0642",
        "T_W45EHI_0GPkcO6EuXwug#ValueExpression.1331383955.1": "\u0642\u064A\u062F \u0627\u0644\u0645\u0631\u0627\u062C\u0639\u0629",
        "T_W45EHI_0GPkcO6EuXwug#ValueExpression.1525309569.1": "\u063A\u064A\u0631 \u0645\u0648\u062B\u0642",
        "T_W45EHI_0GPkcO6EuXwug#ValueExpression.2096857181.1": "\u0641\u0634\u0644",
        "j_lF7tuE4EC6dV_gaU6hjA#Value": "\u0625\u062B\u0628\u0627\u062A \u0627\u0644\u0639\u0646\u0648\u0627\u0646",
        "eZqNdo5RS0+ys7wRCn0_+Q#ValueExpression.-1929739544.1": "\u062A\u0645 \u0627\u0644\u062A\u062D\u0642\u0642",
        "eZqNdo5RS0+ys7wRCn0_+Q#ValueExpression.1331383955.1": "\u0642\u064A\u062F \u0627\u0644\u0645\u0631\u0627\u062C\u0639\u0629",
        "eZqNdo5RS0+ys7wRCn0_+Q#ValueExpression.1525309569.1": "\u063A\u064A\u0631 \u0645\u0648\u062B\u0642",
        "eZqNdo5RS0+ys7wRCn0_+Q#ValueExpression.2096857181.1": "\u0641\u0634\u0644",
        "qcv_hi5hN0y7VubFwhgOqg#Value": "\u0625\u062B\u0628\u0627\u062A \u0627\u0644\u0647\u0648\u064A\u0629",
        "ky6Dm7fdPkyH37yOtA0dhQ#Value": "\u0627\u0644\u062A\u062D\u0642\u0642",
        "eichUFUDEkW6OvPLlQqeyg#Value": "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0645\u0646\u0632\u0644",
        "IAeq+gjbqkWCOfl_xRLNTQ#ValueExpression.983442814.1": "\u063A\u064A\u0631 \u0645\u0643\u062A\u0645\u0644",
        "ccdAmxBwJkGeAx0MRB8aoA#Value": "\u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0634\u062E\u0635\u064A\u0629",
        "oQ80g0zk20Knlwawyu5oRA#Value": "\u0639\u0646\u0643",
        "nbLtW7mN_kGqHGFfgL3BCg#ValueExpression.420875151.1": "\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u062A\u0639\u0631\u064A\u0641\u064A: {{0}}",
        "kejLBGIYj0yhVA1qmw4vIg#ValueExpression.-1397214398.1": "\u0645\u0631\u062D\u0628\u064B\u0627",
        "Pt54xSQwgEW9LRZxBRQrRA#ValueExpression.-1397214398.1": "\u0645\u0631\u062D\u0628\u064B\u0627",
        "ZTJoaDibI0K+vL_L7DXG4g#Value.254712920.1": "\u062A\u0645 \u0646\u0633\u062E \u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u0639\u0627\u0631.",
        "FA98vp9QMUGEkZoNBLfmhg#Title": "\u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0634\u062E\u0635\u064A",
        "FA98vp9QMUGEkZoNBLfmhg#TitleExpression.1355227529.1": "\u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0634\u062E\u0635\u064A"
    },
    $e = {
        "XaXL7pzEwEu3kkGo8zrgmQ#Value": "\u09B2\u0997\u0986\u0989\u099F",
        "DvEj62PcXkSwcXZoSxKtUg#Value": "\u09B2\u09BE\u0987\u09AD \u099A\u09CD\u09AF\u09BE\u099F",
        "HJsvSvQAf0elC8g1TEPlYA#Value": "\u09B8\u09B9\u09BE\u09AF\u09BC\u09A4\u09BE \u0995\u09C7\u09A8\u09CD\u09A6\u09CD\u09B0",
        "g76_92uzwUW01UFWJWwQlQ#Value": "\u09B8\u09AE\u09B0\u09CD\u09A5\u09A8",
        "4IO49Ta8OEO2AE5sYZ5mCw#Value": "\u09AD\u09BE\u09B7\u09BE",
        "143FeSKoJkqIe+8S_aFYgw#Value": "\u09AA\u09BE\u09B8\u0993\u09AF\u09BC\u09BE\u09B0\u09CD\u09A1",
        "PljL8_i5VUS2Lu1WA74cGg#Value": "\u09B8\u09C7\u099F\u09BF\u0982\u09B8",
        "T_W45EHI_0GPkcO6EuXwug#ValueExpression.-1929739544.1": "\u09AA\u09CD\u09B0\u09AE\u09BE\u09A3\u09BF\u09A4",
        "T_W45EHI_0GPkcO6EuXwug#ValueExpression.1331383955.1": "\u09AA\u09B0\u09CD\u09AF\u09BE\u09B2\u09CB\u099A\u09A8\u09BE\u09DF",
        "T_W45EHI_0GPkcO6EuXwug#ValueExpression.1525309569.1": "\u09AF\u09BE\u099A\u09BE\u0987 \u0995\u09B0\u09BE \u09B9\u09AF\u09BC\u09A8\u09BF",
        "T_W45EHI_0GPkcO6EuXwug#ValueExpression.2096857181.1": "\u09AC\u09CD\u09AF\u09B0\u09CD\u09A5 \u09B9\u09AF\u09BC\u09C7\u099B\u09C7",
        "j_lF7tuE4EC6dV_gaU6hjA#Value": "\u09A0\u09BF\u0995\u09BE\u09A8\u09BE\u09B0 \u09AA\u09CD\u09B0\u09AE\u09BE\u09A3",
        "eZqNdo5RS0+ys7wRCn0_+Q#ValueExpression.-1929739544.1": "\u09AA\u09CD\u09B0\u09AE\u09BE\u09A3\u09BF\u09A4",
        "eZqNdo5RS0+ys7wRCn0_+Q#ValueExpression.1331383955.1": "\u09AA\u09B0\u09CD\u09AF\u09BE\u09B2\u09CB\u099A\u09A8\u09BE\u09DF",
        "eZqNdo5RS0+ys7wRCn0_+Q#ValueExpression.1525309569.1": "\u09AF\u09BE\u099A\u09BE\u0987 \u0995\u09B0\u09BE \u09B9\u09AF\u09BC\u09A8\u09BF",
        "eZqNdo5RS0+ys7wRCn0_+Q#ValueExpression.2096857181.1": "\u09AC\u09CD\u09AF\u09B0\u09CD\u09A5 \u09B9\u09AF\u09BC\u09C7\u099B\u09C7",
        "qcv_hi5hN0y7VubFwhgOqg#Value": "\u09AA\u09B0\u09BF\u099A\u09AF\u09BC\u09C7\u09B0 \u09AA\u09CD\u09B0\u09AE\u09BE\u09A3",
        "ky6Dm7fdPkyH37yOtA0dhQ#Value": "\u09A8\u09BF\u09B6\u09CD\u099A\u09BF\u09A4\u0995\u09B0\u09A3",
        "eichUFUDEkW6OvPLlQqeyg#Value": "\u09AC\u09BE\u09A1\u09BC\u09BF\u09B0 \u09A0\u09BF\u0995\u09BE\u09A8\u09BE",
        "IAeq+gjbqkWCOfl_xRLNTQ#ValueExpression.983442814.1": "\u0985\u09B8\u09AE\u09CD\u09AA\u09C2\u09B0\u09CD\u09A3",
        "ccdAmxBwJkGeAx0MRB8aoA#Value": "\u09AC\u09CD\u09AF\u0995\u09CD\u09A4\u09BF\u0997\u09A4 \u09AC\u09BF\u09AC\u09B0\u09A3",
        "oQ80g0zk20Knlwawyu5oRA#Value": "\u0986\u09AA\u09A8\u09BE\u09B0 \u09B8\u09AE\u09CD\u09AA\u09B0\u09CD\u0995\u09C7",
        "nbLtW7mN_kGqHGFfgL3BCg#ValueExpression.420875151.1": "\u0986\u0987\u09A1\u09BF: {{0}}",
        "kejLBGIYj0yhVA1qmw4vIg#ValueExpression.-1397214398.1": "\u09B8\u09CD\u09AC\u09BE\u0997\u09A4\u09AE",
        "Pt54xSQwgEW9LRZxBRQrRA#ValueExpression.-1397214398.1": "\u09B8\u09CD\u09AC\u09BE\u0997\u09A4\u09AE",
        "ZTJoaDibI0K+vL_L7DXG4g#Value.254712920.1": "\u0989\u09AA\u09BE\u09A7\u09BF \u0995\u09AA\u09BF \u0995\u09B0\u09BE \u09B9\u09AF\u09BC\u09C7\u099B\u09C7\u0964",
        "FA98vp9QMUGEkZoNBLfmhg#Title": "\u09AA\u09CD\u09B0\u09CB\u09AB\u09BE\u0987\u09B2",
        "FA98vp9QMUGEkZoNBLfmhg#TitleExpression.1355227529.1": "\u09AA\u09CD\u09B0\u09CB\u09AB\u09BE\u0987\u09B2"
    },
    je = {
        "XaXL7pzEwEu3kkGo8zrgmQ#Value": "Ausloggen",
        "DvEj62PcXkSwcXZoSxKtUg#Value": "Live-Chat",
        "HJsvSvQAf0elC8g1TEPlYA#Value": "Hilfecenter",
        "g76_92uzwUW01UFWJWwQlQ#Value": "Unterst\xFCtzung",
        "4IO49Ta8OEO2AE5sYZ5mCw#Value": "Sprache",
        "143FeSKoJkqIe+8S_aFYgw#Value": "Passwort",
        "PljL8_i5VUS2Lu1WA74cGg#Value": "Einstellungen",
        "T_W45EHI_0GPkcO6EuXwug#ValueExpression.-1929739544.1": "Verifiziert",
        "T_W45EHI_0GPkcO6EuXwug#ValueExpression.1331383955.1": "In \xDCberpr\xFCfung",
        "T_W45EHI_0GPkcO6EuXwug#ValueExpression.1525309569.1": "Nicht verifiziert",
        "T_W45EHI_0GPkcO6EuXwug#ValueExpression.2096857181.1": "Fehlgeschlagen",
        "j_lF7tuE4EC6dV_gaU6hjA#Value": "Adressnachweis",
        "eZqNdo5RS0+ys7wRCn0_+Q#ValueExpression.-1929739544.1": "Verifiziert",
        "eZqNdo5RS0+ys7wRCn0_+Q#ValueExpression.1331383955.1": "In \xDCberpr\xFCfung",
        "eZqNdo5RS0+ys7wRCn0_+Q#ValueExpression.1525309569.1": "Nicht verifiziert",
        "eZqNdo5RS0+ys7wRCn0_+Q#ValueExpression.2096857181.1": "Fehlgeschlagen",
        "qcv_hi5hN0y7VubFwhgOqg#Value": "Identit\xE4tsnachweis",
        "ky6Dm7fdPkyH37yOtA0dhQ#Value": "Verifikation",
        "eichUFUDEkW6OvPLlQqeyg#Value": "Heimadresse",
        "IAeq+gjbqkWCOfl_xRLNTQ#ValueExpression.983442814.1": "Unvollst\xE4ndig",
        "ccdAmxBwJkGeAx0MRB8aoA#Value": "Pers\xF6nliche Angaben",
        "oQ80g0zk20Knlwawyu5oRA#Value": "\xDCber dich",
        "nbLtW7mN_kGqHGFfgL3BCg#ValueExpression.420875151.1": "ID: {{0}}",
        "kejLBGIYj0yhVA1qmw4vIg#ValueExpression.-1397214398.1": "Willkommen",
        "Pt54xSQwgEW9LRZxBRQrRA#ValueExpression.-1397214398.1": "Willkommen",
        "ZTJoaDibI0K+vL_L7DXG4g#Value.254712920.1": "Nickname kopiert.",
        "FA98vp9QMUGEkZoNBLfmhg#Title": "Profil",
        "FA98vp9QMUGEkZoNBLfmhg#TitleExpression.1355227529.1": "Profil"
    },
    Me = {
        "XaXL7pzEwEu3kkGo8zrgmQ#Value": "Cerrar sesi\xF3n",
        "DvEj62PcXkSwcXZoSxKtUg#Value": "Chat en vivo",
        "HJsvSvQAf0elC8g1TEPlYA#Value": "Centro de ayuda",
        "g76_92uzwUW01UFWJWwQlQ#Value": "Soporte",
        "4IO49Ta8OEO2AE5sYZ5mCw#Value": "Idioma",
        "143FeSKoJkqIe+8S_aFYgw#Value": "Contrase\xF1a",
        "PljL8_i5VUS2Lu1WA74cGg#Value": "Configuraci\xF3n",
        "T_W45EHI_0GPkcO6EuXwug#ValueExpression.-1929739544.1": "Verificado",
        "T_W45EHI_0GPkcO6EuXwug#ValueExpression.1331383955.1": "En revisi\xF3n",
        "T_W45EHI_0GPkcO6EuXwug#ValueExpression.1525309569.1": "No verificado",
        "T_W45EHI_0GPkcO6EuXwug#ValueExpression.2096857181.1": "Fallido",
        "j_lF7tuE4EC6dV_gaU6hjA#Value": "Comprobante de direcci\xF3n",
        "eZqNdo5RS0+ys7wRCn0_+Q#ValueExpression.-1929739544.1": "Verificado",
        "eZqNdo5RS0+ys7wRCn0_+Q#ValueExpression.1331383955.1": "En revisi\xF3n",
        "eZqNdo5RS0+ys7wRCn0_+Q#ValueExpression.1525309569.1": "No verificado",
        "eZqNdo5RS0+ys7wRCn0_+Q#ValueExpression.2096857181.1": "Fallido",
        "qcv_hi5hN0y7VubFwhgOqg#Value": "Comprobante de identidad",
        "ky6Dm7fdPkyH37yOtA0dhQ#Value": "Verificaci\xF3n",
        "eichUFUDEkW6OvPLlQqeyg#Value": "Direcci\xF3n de domicilio",
        "IAeq+gjbqkWCOfl_xRLNTQ#ValueExpression.983442814.1": "Incompleto",
        "ccdAmxBwJkGeAx0MRB8aoA#Value": "Datos personales",
        "oQ80g0zk20Knlwawyu5oRA#Value": "Sobre ti",
        "nbLtW7mN_kGqHGFfgL3BCg#ValueExpression.420875151.1": "ID: {{0}}",
        "kejLBGIYj0yhVA1qmw4vIg#ValueExpression.-1397214398.1": "Bienvenido",
        "Pt54xSQwgEW9LRZxBRQrRA#ValueExpression.-1397214398.1": "Bienvenido",
        "ZTJoaDibI0K+vL_L7DXG4g#Value.254712920.1": "Apodo copiado.",
        "FA98vp9QMUGEkZoNBLfmhg#Title": "Perfil",
        "FA98vp9QMUGEkZoNBLfmhg#TitleExpression.1355227529.1": "Perfil"
    },
    ze = {
        "XaXL7pzEwEu3kkGo8zrgmQ#Value": "D\xE9connexion",
        "DvEj62PcXkSwcXZoSxKtUg#Value": "Chat en direct",
        "HJsvSvQAf0elC8g1TEPlYA#Value": "Centre d\u2019aide",
        "g76_92uzwUW01UFWJWwQlQ#Value": "Support",
        "4IO49Ta8OEO2AE5sYZ5mCw#Value": "Langue",
        "143FeSKoJkqIe+8S_aFYgw#Value": "Mot de passe",
        "PljL8_i5VUS2Lu1WA74cGg#Value": "Param\xE8tres",
        "T_W45EHI_0GPkcO6EuXwug#ValueExpression.-1929739544.1": "V\xE9rifi\xE9",
        "T_W45EHI_0GPkcO6EuXwug#ValueExpression.1331383955.1": "En cours d'examen",
        "T_W45EHI_0GPkcO6EuXwug#ValueExpression.1525309569.1": "Non v\xE9rifi\xE9",
        "T_W45EHI_0GPkcO6EuXwug#ValueExpression.2096857181.1": "\xC9chou\xE9",
        "j_lF7tuE4EC6dV_gaU6hjA#Value": "Justificatif de domicile",
        "eZqNdo5RS0+ys7wRCn0_+Q#ValueExpression.-1929739544.1": "V\xE9rifi\xE9",
        "eZqNdo5RS0+ys7wRCn0_+Q#ValueExpression.1331383955.1": "En cours d'examen",
        "eZqNdo5RS0+ys7wRCn0_+Q#ValueExpression.1525309569.1": "Non v\xE9rifi\xE9",
        "eZqNdo5RS0+ys7wRCn0_+Q#ValueExpression.2096857181.1": "\xC9chou\xE9",
        "qcv_hi5hN0y7VubFwhgOqg#Value": "Justificatif d\u2019identit\xE9",
        "ky6Dm7fdPkyH37yOtA0dhQ#Value": "V\xE9rification",
        "eichUFUDEkW6OvPLlQqeyg#Value": "Adresse de domicile",
        "IAeq+gjbqkWCOfl_xRLNTQ#ValueExpression.983442814.1": "Incomplet",
        "ccdAmxBwJkGeAx0MRB8aoA#Value": "D\xE9tails personnels",
        "oQ80g0zk20Knlwawyu5oRA#Value": "\xC0 propos de vous",
        "nbLtW7mN_kGqHGFfgL3BCg#ValueExpression.420875151.1": "ID : {{0}}",
        "kejLBGIYj0yhVA1qmw4vIg#ValueExpression.-1397214398.1": "Bienvenue",
        "Pt54xSQwgEW9LRZxBRQrRA#ValueExpression.-1397214398.1": "Bienvenue",
        "ZTJoaDibI0K+vL_L7DXG4g#Value.254712920.1": "Surnom copi\xE9.",
        "FA98vp9QMUGEkZoNBLfmhg#Title": "Profil",
        "FA98vp9QMUGEkZoNBLfmhg#TitleExpression.1355227529.1": "Profil"
    },
    Ke = {
        "XaXL7pzEwEu3kkGo8zrgmQ#Value": "Esci",
        "DvEj62PcXkSwcXZoSxKtUg#Value": "Chat dal vivo",
        "HJsvSvQAf0elC8g1TEPlYA#Value": "Centro assistenza",
        "g76_92uzwUW01UFWJWwQlQ#Value": "Supporto",
        "4IO49Ta8OEO2AE5sYZ5mCw#Value": "Lingua",
        "143FeSKoJkqIe+8S_aFYgw#Value": "Password",
        "PljL8_i5VUS2Lu1WA74cGg#Value": "Impostazioni",
        "T_W45EHI_0GPkcO6EuXwug#ValueExpression.-1929739544.1": "Verificato",
        "T_W45EHI_0GPkcO6EuXwug#ValueExpression.1331383955.1": "In revisione",
        "T_W45EHI_0GPkcO6EuXwug#ValueExpression.1525309569.1": "Non verificato",
        "T_W45EHI_0GPkcO6EuXwug#ValueExpression.2096857181.1": "Fallito",
        "j_lF7tuE4EC6dV_gaU6hjA#Value": "Prova di indirizzo",
        "eZqNdo5RS0+ys7wRCn0_+Q#ValueExpression.-1929739544.1": "Verificato",
        "eZqNdo5RS0+ys7wRCn0_+Q#ValueExpression.1331383955.1": "In revisione",
        "eZqNdo5RS0+ys7wRCn0_+Q#ValueExpression.1525309569.1": "Non verificato",
        "eZqNdo5RS0+ys7wRCn0_+Q#ValueExpression.2096857181.1": "Fallito",
        "qcv_hi5hN0y7VubFwhgOqg#Value": "Prova di identit\xE0",
        "ky6Dm7fdPkyH37yOtA0dhQ#Value": "Verifica",
        "eichUFUDEkW6OvPLlQqeyg#Value": "Indirizzo di casa",
        "IAeq+gjbqkWCOfl_xRLNTQ#ValueExpression.983442814.1": "Incompleto",
        "ccdAmxBwJkGeAx0MRB8aoA#Value": "Dettagli personali",
        "oQ80g0zk20Knlwawyu5oRA#Value": "Su di te",
        "nbLtW7mN_kGqHGFfgL3BCg#ValueExpression.420875151.1": "ID: {{0}}",
        "kejLBGIYj0yhVA1qmw4vIg#ValueExpression.-1397214398.1": "Benvenuto",
        "Pt54xSQwgEW9LRZxBRQrRA#ValueExpression.-1397214398.1": "Benvenuto",
        "ZTJoaDibI0K+vL_L7DXG4g#Value.254712920.1": "Soprannome copiato.",
        "FA98vp9QMUGEkZoNBLfmhg#Title": "Profilo",
        "FA98vp9QMUGEkZoNBLfmhg#TitleExpression.1355227529.1": "Profilo"
    },
    Ye = {
        "XaXL7pzEwEu3kkGo8zrgmQ#Value": "\u1785\u17B6\u1780\u1785\u17C1\u1789",
        "DvEj62PcXkSwcXZoSxKtUg#Value": "\u1787\u1787\u17C2\u1780\u1795\u17D2\u1791\u17B6\u179B\u17CB",
        "HJsvSvQAf0elC8g1TEPlYA#Value": "\u1798\u178E\u17D2\u178C\u179B\u1787\u17C6\u1793\u17BD\u1799",
        "g76_92uzwUW01UFWJWwQlQ#Value": "\u1782\u17B6\u17C6\u1791\u17D2\u179A",
        "4IO49Ta8OEO2AE5sYZ5mCw#Value": "\u1797\u17B6\u179F\u17B6",
        "143FeSKoJkqIe+8S_aFYgw#Value": "\u1796\u17B6\u1780\u17D2\u1799\u179F\u1798\u17D2\u1784\u17B6\u178F\u17CB",
        "PljL8_i5VUS2Lu1WA74cGg#Value": "\u1780\u17B6\u179A\u1780\u17C6\u178E\u178F\u17CB",
        "T_W45EHI_0GPkcO6EuXwug#ValueExpression.-1929739544.1": "\u1794\u17B6\u1793\u1795\u17D2\u1791\u17C0\u1784\u1795\u17D2\u1791\u17B6\u178F\u17CB",
        "T_W45EHI_0GPkcO6EuXwug#ValueExpression.1331383955.1": "\u1780\u17C6\u1796\u17BB\u1784\u1796\u17B7\u1793\u17B7\u178F\u17D2\u1799",
        "T_W45EHI_0GPkcO6EuXwug#ValueExpression.1525309569.1": "\u1798\u17B7\u1793\u1794\u17B6\u1793\u1795\u17D2\u1791\u17C0\u1784\u1795\u17D2\u1791\u17B6\u178F\u17CB",
        "T_W45EHI_0GPkcO6EuXwug#ValueExpression.2096857181.1": "\u1794\u17B6\u1793\u1794\u179A\u17B6\u1787\u17D0\u1799",
        "j_lF7tuE4EC6dV_gaU6hjA#Value": "\u1797\u179F\u17D2\u178F\u17BB\u178F\u17B6\u1784\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793",
        "eZqNdo5RS0+ys7wRCn0_+Q#ValueExpression.-1929739544.1": "\u1794\u17B6\u1793\u1795\u17D2\u1791\u17C0\u1784\u1795\u17D2\u1791\u17B6\u178F\u17CB",
        "eZqNdo5RS0+ys7wRCn0_+Q#ValueExpression.1331383955.1": "\u1780\u17C6\u1796\u17BB\u1784\u1796\u17B7\u1793\u17B7\u178F\u17D2\u1799",
        "eZqNdo5RS0+ys7wRCn0_+Q#ValueExpression.1525309569.1": "\u1798\u17B7\u1793\u1794\u17B6\u1793\u1795\u17D2\u1791\u17C0\u1784\u1795\u17D2\u1791\u17B6\u178F\u17CB",
        "eZqNdo5RS0+ys7wRCn0_+Q#ValueExpression.2096857181.1": "\u1794\u17B6\u1793\u1794\u179A\u17B6\u1787\u17D0\u1799",
        "qcv_hi5hN0y7VubFwhgOqg#Value": "\u1797\u179F\u17D2\u178F\u17BB\u178F\u17B6\u1784\u17A2\u178F\u17D2\u178F\u179F\u1789\u17D2\u1789\u17B6\u178E",
        "ky6Dm7fdPkyH37yOtA0dhQ#Value": "\u1780\u17B6\u179A\u1795\u17D2\u1791\u17C0\u1784\u1795\u17D2\u1791\u17B6\u178F\u17CB",
        "eichUFUDEkW6OvPLlQqeyg#Value": "\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793\u1795\u17D2\u1791\u17C7",
        "IAeq+gjbqkWCOfl_xRLNTQ#ValueExpression.983442814.1": "\u1798\u17B7\u1793\u179F\u1798\u17D2\u1794\u17BC\u179A\u178E\u17CD",
        "ccdAmxBwJkGeAx0MRB8aoA#Value": "\u1796\u17D0\u178F\u17CC\u1798\u17B6\u1793\u1795\u17D2\u1791\u17B6\u179B\u17CB\u1781\u17D2\u179B\u17BD\u1793",
        "oQ80g0zk20Knlwawyu5oRA#Value": "\u17A2\u17C6\u1796\u17B8\u17A2\u17D2\u1793\u1780",
        "nbLtW7mN_kGqHGFfgL3BCg#ValueExpression.420875151.1": "\u179B\u17C1\u1781\u179F\u1798\u17D2\u1782\u17B6\u179B\u17CB: {{0}}",
        "kejLBGIYj0yhVA1qmw4vIg#ValueExpression.-1397214398.1": "\u179F\u17BC\u1798\u179F\u17D2\u179C\u17B6\u1782\u1798\u1793\u17CD",
        "Pt54xSQwgEW9LRZxBRQrRA#ValueExpression.-1397214398.1": "\u179F\u17BC\u1798\u179F\u17D2\u179C\u17B6\u1782\u1798\u1793\u17CD",
        "ZTJoaDibI0K+vL_L7DXG4g#Value.254712920.1": "\u1788\u17D2\u1798\u17C4\u17C7\u17A0\u17C5\u1780\u17D2\u179A\u17C5\u178F\u17D2\u179A\u17BC\u179C\u1794\u17B6\u1793\u1785\u1798\u17D2\u179B\u1784\u17D4",
        "FA98vp9QMUGEkZoNBLfmhg#Title": "\u1794\u17D2\u179A\u179C\u178F\u17D2\u178F\u17B7\u179A\u17BC\u1794",
        "FA98vp9QMUGEkZoNBLfmhg#TitleExpression.1355227529.1": "\u1794\u17D2\u179A\u179C\u178F\u17D2\u178F\u17B7\u179A\u17BC\u1794"
    },
    et = {
        "XaXL7pzEwEu3kkGo8zrgmQ#Value": "\uB85C\uADF8\uC544\uC6C3",
        "DvEj62PcXkSwcXZoSxKtUg#Value": "\uB77C\uC774\uBE0C \uCC44\uD305",
        "HJsvSvQAf0elC8g1TEPlYA#Value": "\uB3C4\uC6C0\uB9D0 \uC13C\uD130",
        "g76_92uzwUW01UFWJWwQlQ#Value": "\uC9C0\uC6D0",
        "4IO49Ta8OEO2AE5sYZ5mCw#Value": "\uC5B8\uC5B4",
        "143FeSKoJkqIe+8S_aFYgw#Value": "\uBE44\uBC00\uBC88\uD638",
        "PljL8_i5VUS2Lu1WA74cGg#Value": "\uC124\uC815",
        "T_W45EHI_0GPkcO6EuXwug#ValueExpression.-1929739544.1": "\uD655\uC778\uB428",
        "T_W45EHI_0GPkcO6EuXwug#ValueExpression.1331383955.1": "\uAC80\uD1A0 \uC911",
        "T_W45EHI_0GPkcO6EuXwug#ValueExpression.1525309569.1": "\uAC80\uC99D\uB418\uC9C0 \uC54A\uC74C",
        "T_W45EHI_0GPkcO6EuXwug#ValueExpression.2096857181.1": "\uC2E4\uD328\uD568",
        "j_lF7tuE4EC6dV_gaU6hjA#Value": "\uC8FC\uC18C \uC99D\uBA85",
        "eZqNdo5RS0+ys7wRCn0_+Q#ValueExpression.-1929739544.1": "\uD655\uC778\uB428",
        "eZqNdo5RS0+ys7wRCn0_+Q#ValueExpression.1331383955.1": "\uAC80\uD1A0 \uC911",
        "eZqNdo5RS0+ys7wRCn0_+Q#ValueExpression.1525309569.1": "\uAC80\uC99D\uB418\uC9C0 \uC54A\uC74C",
        "eZqNdo5RS0+ys7wRCn0_+Q#ValueExpression.2096857181.1": "\uC2E4\uD328\uD568",
        "qcv_hi5hN0y7VubFwhgOqg#Value": "\uC2E0\uBD84\uC99D\uBA85\uC11C",
        "ky6Dm7fdPkyH37yOtA0dhQ#Value": "\uC778\uC99D",
        "eichUFUDEkW6OvPLlQqeyg#Value": "\uC9D1 \uC8FC\uC18C",
        "IAeq+gjbqkWCOfl_xRLNTQ#ValueExpression.983442814.1": "\uBD88\uC644\uC804",
        "ccdAmxBwJkGeAx0MRB8aoA#Value": "\uAC1C\uC778\uC815\uBCF4",
        "oQ80g0zk20Knlwawyu5oRA#Value": "\uB2F9\uC2E0\uC5D0 \uB300\uD574",
        "nbLtW7mN_kGqHGFfgL3BCg#ValueExpression.420875151.1": "ID: {{0}}",
        "kejLBGIYj0yhVA1qmw4vIg#ValueExpression.-1397214398.1": "\uD658\uC601\uD569\uB2C8\uB2E4",
        "Pt54xSQwgEW9LRZxBRQrRA#ValueExpression.-1397214398.1": "\uD658\uC601\uD569\uB2C8\uB2E4",
        "ZTJoaDibI0K+vL_L7DXG4g#Value.254712920.1": "\uBCC4\uBA85 \uBCF5\uC0AC\uB428.",
        "FA98vp9QMUGEkZoNBLfmhg#Title": "\uD504\uB85C\uD544",
        "FA98vp9QMUGEkZoNBLfmhg#TitleExpression.1355227529.1": "\uD504\uB85C\uD544"
    },
    tt = {
        "XaXL7pzEwEu3kkGo8zrgmQ#Value": "\u0413\u0430\u0440\u0430\u0445",
        "DvEj62PcXkSwcXZoSxKtUg#Value": "\u0410\u043C\u044C\u0434 \u0447\u0430\u0442",
        "HJsvSvQAf0elC8g1TEPlYA#Value": "\u0422\u0443\u0441\u043B\u0430\u043C\u0436\u0438\u0439\u043D \u0442\u04E9\u0432",
        "g76_92uzwUW01UFWJWwQlQ#Value": "\u0414\u044D\u043C\u0436\u043B\u044D\u0433",
        "4IO49Ta8OEO2AE5sYZ5mCw#Value": "\u0425\u044D\u043B",
        "143FeSKoJkqIe+8S_aFYgw#Value": "\u041D\u0443\u0443\u0446 \u04AF\u0433",
        "PljL8_i5VUS2Lu1WA74cGg#Value": "\u0422\u043E\u0445\u0438\u0440\u0433\u043E\u043E",
        "T_W45EHI_0GPkcO6EuXwug#ValueExpression.-1929739544.1": "\u0411\u0430\u0442\u0430\u043B\u0433\u0430\u0430\u0436\u0441\u0430\u043D",
        "T_W45EHI_0GPkcO6EuXwug#ValueExpression.1331383955.1": "\u0428\u0430\u043B\u0433\u0430\u0436 \u0431\u0430\u0439\u043D\u0430",
        "T_W45EHI_0GPkcO6EuXwug#ValueExpression.1525309569.1": "\u0411\u0430\u0442\u0430\u043B\u0433\u0430\u0430\u0436\u0441\u0430\u043D\u0433\u04AF\u0439",
        "T_W45EHI_0GPkcO6EuXwug#ValueExpression.2096857181.1": "\u0410\u043C\u0436\u0438\u043B\u0442\u0433\u04AF\u0439 \u0431\u043E\u043B\u0441\u043E\u043D",
        "j_lF7tuE4EC6dV_gaU6hjA#Value": "\u0425\u0430\u044F\u0433\u0438\u0439\u043D \u043D\u043E\u0442\u043E\u043B\u0433\u043E\u043E",
        "eZqNdo5RS0+ys7wRCn0_+Q#ValueExpression.-1929739544.1": "\u0411\u0430\u0442\u0430\u043B\u0433\u0430\u0430\u0436\u0441\u0430\u043D",
        "eZqNdo5RS0+ys7wRCn0_+Q#ValueExpression.1331383955.1": "\u0428\u0430\u043B\u0433\u0430\u0436 \u0431\u0430\u0439\u043D\u0430",
        "eZqNdo5RS0+ys7wRCn0_+Q#ValueExpression.1525309569.1": "\u0411\u0430\u0442\u0430\u043B\u0433\u0430\u0430\u0436\u0441\u0430\u043D\u0433\u04AF\u0439",
        "eZqNdo5RS0+ys7wRCn0_+Q#ValueExpression.2096857181.1": "\u0410\u043C\u0436\u0438\u043B\u0442\u0433\u04AF\u0439 \u0431\u043E\u043B\u0441\u043E\u043D",
        "qcv_hi5hN0y7VubFwhgOqg#Value": "\u04AE\u043D\u044D\u043C\u043B\u044D\u0445\u0438\u0439\u043D \u043D\u043E\u0442\u043E\u043B\u0433\u043E\u043E",
        "ky6Dm7fdPkyH37yOtA0dhQ#Value": "\u0411\u0430\u0442\u0430\u043B\u0433\u0430\u0430\u0436\u0443\u0443\u043B\u0430\u043B\u0442",
        "eichUFUDEkW6OvPLlQqeyg#Value": "\u0411\u0430\u0439\u0440\u044B\u043D\u0445\u0438\u0439\u043D \u0445\u0430\u044F\u0433",
        "IAeq+gjbqkWCOfl_xRLNTQ#ValueExpression.983442814.1": "\u0414\u0443\u0443\u0441\u0433\u0430\u0430\u0433\u04AF\u0439",
        "ccdAmxBwJkGeAx0MRB8aoA#Value": "\u0425\u0443\u0432\u0438\u0439\u043D \u043C\u044D\u0434\u044D\u044D\u043B\u044D\u043B",
        "oQ80g0zk20Knlwawyu5oRA#Value": "\u0422\u0430\u043D\u0438 \u0442\u0430\u043B\u0430\u0430\u0440",
        "nbLtW7mN_kGqHGFfgL3BCg#ValueExpression.420875151.1": "ID: {{0}}",
        "kejLBGIYj0yhVA1qmw4vIg#ValueExpression.-1397214398.1": "\u0422\u0443\u0448 \u0438\u0440\u0441\u044D\u043D\u0434 \u0431\u0430\u044F\u0440\u043B\u0430\u043B\u0430\u0430",
        "Pt54xSQwgEW9LRZxBRQrRA#ValueExpression.-1397214398.1": "\u0422\u0443\u0448 \u0438\u0440\u0441\u044D\u043D\u0434 \u0431\u0430\u044F\u0440\u043B\u0430\u043B\u0430\u0430",
        "ZTJoaDibI0K+vL_L7DXG4g#Value.254712920.1": "\u0422\u043E\u0432\u0447 \u043D\u044D\u0440 \u0445\u0443\u0443\u043B\u0441\u0430\u043D.",
        "FA98vp9QMUGEkZoNBLfmhg#Title": "\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB",
        "FA98vp9QMUGEkZoNBLfmhg#TitleExpression.1355227529.1": "\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB"
    },
    rt = {
        "XaXL7pzEwEu3kkGo8zrgmQ#Value": "Wyloguj si\u0119",
        "DvEj62PcXkSwcXZoSxKtUg#Value": "Czat na \u017Cywo",
        "HJsvSvQAf0elC8g1TEPlYA#Value": "Centrum pomocy",
        "g76_92uzwUW01UFWJWwQlQ#Value": "Wsparcie",
        "4IO49Ta8OEO2AE5sYZ5mCw#Value": "J\u0119zyk",
        "143FeSKoJkqIe+8S_aFYgw#Value": "Has\u0142o",
        "PljL8_i5VUS2Lu1WA74cGg#Value": "Ustawienia",
        "T_W45EHI_0GPkcO6EuXwug#ValueExpression.-1929739544.1": "Zweryfikowano",
        "T_W45EHI_0GPkcO6EuXwug#ValueExpression.1331383955.1": "W recenzji",
        "T_W45EHI_0GPkcO6EuXwug#ValueExpression.1525309569.1": "Niezweryfikowany",
        "T_W45EHI_0GPkcO6EuXwug#ValueExpression.2096857181.1": "Niepowodzenie",
        "j_lF7tuE4EC6dV_gaU6hjA#Value": "Dow\xF3d adresu",
        "eZqNdo5RS0+ys7wRCn0_+Q#ValueExpression.-1929739544.1": "Zweryfikowano",
        "eZqNdo5RS0+ys7wRCn0_+Q#ValueExpression.1331383955.1": "W recenzji",
        "eZqNdo5RS0+ys7wRCn0_+Q#ValueExpression.1525309569.1": "Niezweryfikowany",
        "eZqNdo5RS0+ys7wRCn0_+Q#ValueExpression.2096857181.1": "Niepowodzenie",
        "qcv_hi5hN0y7VubFwhgOqg#Value": "Dow\xF3d to\u017Csamo\u015Bci",
        "ky6Dm7fdPkyH37yOtA0dhQ#Value": "Weryfikacja",
        "eichUFUDEkW6OvPLlQqeyg#Value": "Adres zamieszkania",
        "IAeq+gjbqkWCOfl_xRLNTQ#ValueExpression.983442814.1": "Niekompletne",
        "ccdAmxBwJkGeAx0MRB8aoA#Value": "Dane osobowe",
        "oQ80g0zk20Knlwawyu5oRA#Value": "O Tobie",
        "nbLtW7mN_kGqHGFfgL3BCg#ValueExpression.420875151.1": "ID: {{0}}",
        "kejLBGIYj0yhVA1qmw4vIg#ValueExpression.-1397214398.1": "Witamy",
        "Pt54xSQwgEW9LRZxBRQrRA#ValueExpression.-1397214398.1": "Witamy",
        "ZTJoaDibI0K+vL_L7DXG4g#Value.254712920.1": "Pseudonim skopiowany.",
        "FA98vp9QMUGEkZoNBLfmhg#Title": "Profil",
        "FA98vp9QMUGEkZoNBLfmhg#TitleExpression.1355227529.1": "Profil"
    },
    ot = {
        "XaXL7pzEwEu3kkGo8zrgmQ#Value": "Sair",
        "DvEj62PcXkSwcXZoSxKtUg#Value": "Chat ao vivo",
        "HJsvSvQAf0elC8g1TEPlYA#Value": "Centro de ajuda",
        "g76_92uzwUW01UFWJWwQlQ#Value": "Suporte",
        "4IO49Ta8OEO2AE5sYZ5mCw#Value": "Idioma",
        "143FeSKoJkqIe+8S_aFYgw#Value": "Palavra-passe",
        "PljL8_i5VUS2Lu1WA74cGg#Value": "Configura\xE7\xF5es",
        "T_W45EHI_0GPkcO6EuXwug#ValueExpression.-1929739544.1": "Verificado",
        "T_W45EHI_0GPkcO6EuXwug#ValueExpression.1331383955.1": "Em revis\xE3o",
        "T_W45EHI_0GPkcO6EuXwug#ValueExpression.1525309569.1": "N\xE3o verificado",
        "T_W45EHI_0GPkcO6EuXwug#ValueExpression.2096857181.1": "Falhou",
        "j_lF7tuE4EC6dV_gaU6hjA#Value": "Comprovativo de morada",
        "eZqNdo5RS0+ys7wRCn0_+Q#ValueExpression.-1929739544.1": "Verificado",
        "eZqNdo5RS0+ys7wRCn0_+Q#ValueExpression.1331383955.1": "Em revis\xE3o",
        "eZqNdo5RS0+ys7wRCn0_+Q#ValueExpression.1525309569.1": "N\xE3o verificado",
        "eZqNdo5RS0+ys7wRCn0_+Q#ValueExpression.2096857181.1": "Falhou",
        "qcv_hi5hN0y7VubFwhgOqg#Value": "Comprovativo de identidade",
        "ky6Dm7fdPkyH37yOtA0dhQ#Value": "Verifica\xE7\xE3o",
        "eichUFUDEkW6OvPLlQqeyg#Value": "Morada",
        "IAeq+gjbqkWCOfl_xRLNTQ#ValueExpression.983442814.1": "Incompleto",
        "ccdAmxBwJkGeAx0MRB8aoA#Value": "Dados pessoais",
        "oQ80g0zk20Knlwawyu5oRA#Value": "Sobre voc\xEA",
        "nbLtW7mN_kGqHGFfgL3BCg#ValueExpression.420875151.1": "ID: {{0}}",
        "kejLBGIYj0yhVA1qmw4vIg#ValueExpression.-1397214398.1": "Bem-vindo",
        "Pt54xSQwgEW9LRZxBRQrRA#ValueExpression.-1397214398.1": "Bem-vindo",
        "ZTJoaDibI0K+vL_L7DXG4g#Value.254712920.1": "Apelido copiado.",
        "FA98vp9QMUGEkZoNBLfmhg#Title": "Perfil",
        "FA98vp9QMUGEkZoNBLfmhg#TitleExpression.1355227529.1": "Perfil"
    },
    it = {
        "XaXL7pzEwEu3kkGo8zrgmQ#Value": "\u0412\u044B\u0439\u0442\u0438",
        "DvEj62PcXkSwcXZoSxKtUg#Value": "\u041E\u043D\u043B\u0430\u0439\u043D-\u0447\u0430\u0442",
        "HJsvSvQAf0elC8g1TEPlYA#Value": "\u0426\u0435\u043D\u0442\u0440 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0438",
        "g76_92uzwUW01UFWJWwQlQ#Value": "\u041F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430",
        "4IO49Ta8OEO2AE5sYZ5mCw#Value": "\u042F\u0437\u044B\u043A",
        "143FeSKoJkqIe+8S_aFYgw#Value": "\u041F\u0430\u0440\u043E\u043B\u044C",
        "PljL8_i5VUS2Lu1WA74cGg#Value": "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",
        "T_W45EHI_0GPkcO6EuXwug#ValueExpression.-1929739544.1": "\u041F\u0440\u043E\u0432\u0435\u0440\u0435\u043D\u043E",
        "T_W45EHI_0GPkcO6EuXwug#ValueExpression.1331383955.1": "\u0412 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0435 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438",
        "T_W45EHI_0GPkcO6EuXwug#ValueExpression.1525309569.1": "\u041D\u0435\u0432\u0435\u0440\u0438\u0444\u0438\u0446\u0438\u0440\u043E\u0432\u0430\u043D\u043E",
        "T_W45EHI_0GPkcO6EuXwug#ValueExpression.2096857181.1": "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C",
        "j_lF7tuE4EC6dV_gaU6hjA#Value": "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u0435 \u0430\u0434\u0440\u0435\u0441\u0430",
        "eZqNdo5RS0+ys7wRCn0_+Q#ValueExpression.-1929739544.1": "\u041F\u0440\u043E\u0432\u0435\u0440\u0435\u043D\u043E",
        "eZqNdo5RS0+ys7wRCn0_+Q#ValueExpression.1331383955.1": "\u0412 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0435 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438",
        "eZqNdo5RS0+ys7wRCn0_+Q#ValueExpression.1525309569.1": "\u041D\u0435\u0432\u0435\u0440\u0438\u0444\u0438\u0446\u0438\u0440\u043E\u0432\u0430\u043D\u043E",
        "eZqNdo5RS0+ys7wRCn0_+Q#ValueExpression.2096857181.1": "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C",
        "qcv_hi5hN0y7VubFwhgOqg#Value": "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u0435 \u043B\u0438\u0447\u043D\u043E\u0441\u0442\u0438",
        "ky6Dm7fdPkyH37yOtA0dhQ#Value": "\u0412\u0435\u0440\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044F",
        "eichUFUDEkW6OvPLlQqeyg#Value": "\u0410\u0434\u0440\u0435\u0441 \u043F\u0440\u043E\u0436\u0438\u0432\u0430\u043D\u0438\u044F",
        "IAeq+gjbqkWCOfl_xRLNTQ#ValueExpression.983442814.1": "\u041D\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043E",
        "ccdAmxBwJkGeAx0MRB8aoA#Value": "\u041B\u0438\u0447\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435",
        "oQ80g0zk20Knlwawyu5oRA#Value": "\u041E \u0432\u0430\u0441",
        "nbLtW7mN_kGqHGFfgL3BCg#ValueExpression.420875151.1": "ID: {{0}}",
        "kejLBGIYj0yhVA1qmw4vIg#ValueExpression.-1397214398.1": "\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C",
        "Pt54xSQwgEW9LRZxBRQrRA#ValueExpression.-1397214398.1": "\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C",
        "ZTJoaDibI0K+vL_L7DXG4g#Value.254712920.1": "\u041D\u0438\u043A\u043D\u0435\u0439\u043C \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D.",
        "FA98vp9QMUGEkZoNBLfmhg#Title": "\u041F\u0440\u043E\u0444\u0438\u043B\u044C",
        "FA98vp9QMUGEkZoNBLfmhg#TitleExpression.1355227529.1": "\u041F\u0440\u043E\u0444\u0438\u043B\u044C"
    },
    at = {
        "XaXL7pzEwEu3kkGo8zrgmQ#Value": "\u0DB4\u0DD2\u0DA7\u0DC0\u0DD3\u0DB8",
        "DvEj62PcXkSwcXZoSxKtUg#Value": "\u0DC3\u0DA2\u0DD3\u0DC0\u0DD3 \u0DC3\u0D82\u0DC0\u0DCF\u0DAF\u0DBA",
        "HJsvSvQAf0elC8g1TEPlYA#Value": "\u0D8B\u0DAF\u0DC0\u0DCA \u0DB8\u0DB0\u0DCA\u200D\u0DBA\u0DC3\u0DCA\u0DAE\u0DCF\u0DB1\u0DBA",
        "g76_92uzwUW01UFWJWwQlQ#Value": "\u0DC3\u0DC4\u0DBA\u0DDD\u0D9C\u0DD3\u0DAD\u0DCF\u0DC0",
        "4IO49Ta8OEO2AE5sYZ5mCw#Value": "\u0DB7\u0DCF\u0DC2\u0DCF\u0DC0",
        "143FeSKoJkqIe+8S_aFYgw#Value": "\u0DB8\u0DD4\u0DBB\u0DB4\u0DAF\u0DBA",
        "PljL8_i5VUS2Lu1WA74cGg#Value": "\u0DC3\u0DD0\u0D9A\u0DC3\u0DD4\u0DB8\u0DCA",
        "T_W45EHI_0GPkcO6EuXwug#ValueExpression.-1929739544.1": "\u0DAD\u0DC4\u0DC0\u0DD4\u0DBB\u0DD4 \u0D9A\u0DC5",
        "T_W45EHI_0GPkcO6EuXwug#ValueExpression.1331383955.1": "\u0DC3\u0DB8\u0DCF\u0DBD\u0DDD\u0DA0\u0DB1\u0DBA \u0DBA\u0DA7\u0DAD\u0DDA",
        "T_W45EHI_0GPkcO6EuXwug#ValueExpression.1525309569.1": "\u0DAD\u0DC4\u0DC0\u0DD4\u0DBB\u0DD4 \u0D9A\u0DBB \u0DB1\u0DDC\u0DB8\u0DD0\u0DAD",
        "T_W45EHI_0GPkcO6EuXwug#ValueExpression.2096857181.1": "\u0D85\u0DC3\u0DCF\u0DBB\u0DCA\u0DAE\u0D9A\u0DBA\u0DD2",
        "j_lF7tuE4EC6dV_gaU6hjA#Value": "\u0DBD\u0DD2\u0DB4\u0DD2\u0DB1\u0DBA\u0DDA \u0DC3\u0DCF\u0D9A\u0DCA\u0DC2\u0DD2\u0DBA",
        "eZqNdo5RS0+ys7wRCn0_+Q#ValueExpression.-1929739544.1": "\u0DAD\u0DC4\u0DC0\u0DD4\u0DBB\u0DD4 \u0D9A\u0DC5",
        "eZqNdo5RS0+ys7wRCn0_+Q#ValueExpression.1331383955.1": "\u0DC3\u0DB8\u0DCF\u0DBD\u0DDD\u0DA0\u0DB1\u0DBA \u0DBA\u0DA7\u0DAD\u0DDA",
        "eZqNdo5RS0+ys7wRCn0_+Q#ValueExpression.1525309569.1": "\u0DAD\u0DC4\u0DC0\u0DD4\u0DBB\u0DD4 \u0D9A\u0DBB \u0DB1\u0DDC\u0DB8\u0DD0\u0DAD",
        "eZqNdo5RS0+ys7wRCn0_+Q#ValueExpression.2096857181.1": "\u0D85\u0DC3\u0DCF\u0DBB\u0DCA\u0DAE\u0D9A\u0DBA\u0DD2",
        "qcv_hi5hN0y7VubFwhgOqg#Value": "\u0DC4\u0DD0\u0DB3\u0DD4\u0DB1\u0DD4\u0DB8\u0DCA\u0DB4\u0DAD\u0DDA \u0DC3\u0DCF\u0D9A\u0DCA\u0DC2\u0DD2\u0DBA",
        "ky6Dm7fdPkyH37yOtA0dhQ#Value": "\u0DAD\u0DC4\u0DC0\u0DD4\u0DBB\u0DD4 \u0D9A\u0DD2\u0DBB\u0DD3\u0DB8",
        "eichUFUDEkW6OvPLlQqeyg#Value": "\u0DB1\u0DD2\u0DC0\u0DC3\u0DDA \u0DBD\u0DD2\u0DB4\u0DD2\u0DB1\u0DBA",
        "IAeq+gjbqkWCOfl_xRLNTQ#ValueExpression.983442814.1": "\u0DB1\u0DDC\u0DC3\u0DB8\u0DCA\u0DB4\u0DD4\u0DBB\u0DCA\u0DAB\u0DBA\u0DD2",
        "ccdAmxBwJkGeAx0MRB8aoA#Value": "\u0DB4\u0DD4\u0DAF\u0DCA\u0D9C\u0DBD\u0DD2\u0D9A \u0DC0\u0DD2\u0DC3\u0DCA\u0DAD\u0DBB",
        "oQ80g0zk20Knlwawyu5oRA#Value": "\u0D94\u0DB6 \u0D9C\u0DD0\u0DB1",
        "nbLtW7mN_kGqHGFfgL3BCg#ValueExpression.420875151.1": "\u0DC4\u0DD0\u0DB3\u0DD2\u0DB1\u0DD4\u0DB8\u0DCA \u0D85\u0D82\u0D9A\u0DBA: {{0}}",
        "kejLBGIYj0yhVA1qmw4vIg#ValueExpression.-1397214398.1": "\u0DC3\u0DCF\u0DAF\u0DBB\u0DBA\u0DD9\u0DB1\u0DCA \u0DB4\u0DD2\u0DC5\u0DD2\u0D9C\u0DB1\u0DD2\u0DB8\u0DD4",
        "Pt54xSQwgEW9LRZxBRQrRA#ValueExpression.-1397214398.1": "\u0DC3\u0DCF\u0DAF\u0DBB\u0DBA\u0DD9\u0DB1\u0DCA \u0DB4\u0DD2\u0DC5\u0DD2\u0D9C\u0DB1\u0DD2\u0DB8\u0DD4",
        "ZTJoaDibI0K+vL_L7DXG4g#Value.254712920.1": "\u0D85\u0DB1\u0DCA\u0DC0\u0DBB\u0DCA\u0DAE \u0DB1\u0DCF\u0DB8\u0DBA \u0DB4\u0DD2\u0DA7\u0DB4\u0DAD\u0DCA \u0D9A\u0DBB\u0DB1 \u0DBD\u0DAF\u0DD3.",
        "FA98vp9QMUGEkZoNBLfmhg#Title": "\u0DB4\u0DCA\u200D\u0DBB\u0DDC\u0DC6\u0DBA\u0DD2\u0DBD\u0DBA",
        "FA98vp9QMUGEkZoNBLfmhg#TitleExpression.1355227529.1": "\u0DB4\u0DCA\u200D\u0DBB\u0DDC\u0DC6\u0DBA\u0DD2\u0DBD\u0DBA"
    },
    nt = {
        "XaXL7pzEwEu3kkGo8zrgmQ#Value": "Toka nje",
        "DvEj62PcXkSwcXZoSxKtUg#Value": "Gumzo la moja kwa moja",
        "HJsvSvQAf0elC8g1TEPlYA#Value": "Kituo cha msaada",
        "g76_92uzwUW01UFWJWwQlQ#Value": "Msaada",
        "4IO49Ta8OEO2AE5sYZ5mCw#Value": "Lugha",
        "143FeSKoJkqIe+8S_aFYgw#Value": "Nenosiri",
        "PljL8_i5VUS2Lu1WA74cGg#Value": "Mipangilio",
        "T_W45EHI_0GPkcO6EuXwug#ValueExpression.-1929739544.1": "Imethibitishwa",
        "T_W45EHI_0GPkcO6EuXwug#ValueExpression.1331383955.1": "Inakaguliwa",
        "T_W45EHI_0GPkcO6EuXwug#ValueExpression.1525309569.1": "Haijathibitishwa",
        "T_W45EHI_0GPkcO6EuXwug#ValueExpression.2096857181.1": "Imeshindwa",
        "j_lF7tuE4EC6dV_gaU6hjA#Value": "Ushahidi wa anuani",
        "eZqNdo5RS0+ys7wRCn0_+Q#ValueExpression.-1929739544.1": "Imethibitishwa",
        "eZqNdo5RS0+ys7wRCn0_+Q#ValueExpression.1331383955.1": "Inakaguliwa",
        "eZqNdo5RS0+ys7wRCn0_+Q#ValueExpression.1525309569.1": "Haijathibitishwa",
        "eZqNdo5RS0+ys7wRCn0_+Q#ValueExpression.2096857181.1": "Imeshindwa",
        "qcv_hi5hN0y7VubFwhgOqg#Value": "Ushahidi wa kitambulisho",
        "ky6Dm7fdPkyH37yOtA0dhQ#Value": "Uthibitisho",
        "eichUFUDEkW6OvPLlQqeyg#Value": "Anwani ya nyumbani",
        "IAeq+gjbqkWCOfl_xRLNTQ#ValueExpression.983442814.1": "Haijakamilika",
        "ccdAmxBwJkGeAx0MRB8aoA#Value": "Maelezo binafsi",
        "oQ80g0zk20Knlwawyu5oRA#Value": "Kuhusu wewe",
        "nbLtW7mN_kGqHGFfgL3BCg#ValueExpression.420875151.1": "Kitambulisho: {{0}}",
        "kejLBGIYj0yhVA1qmw4vIg#ValueExpression.-1397214398.1": "Karibu",
        "Pt54xSQwgEW9LRZxBRQrRA#ValueExpression.-1397214398.1": "Karibu",
        "ZTJoaDibI0K+vL_L7DXG4g#Value.254712920.1": "Jina la utani limekiliwa.",
        "FA98vp9QMUGEkZoNBLfmhg#Title": "Wasifu",
        "FA98vp9QMUGEkZoNBLfmhg#TitleExpression.1355227529.1": "Wasifu"
    },
    st = {
        "XaXL7pzEwEu3kkGo8zrgmQ#Value": "\u0BB5\u0BC6\u0BB3\u0BBF\u0BAF\u0BC7\u0BB1\u0BB5\u0BC1\u0BAE\u0BCD",
        "DvEj62PcXkSwcXZoSxKtUg#Value": "\u0BA8\u0BC7\u0BB0\u0B9F\u0BBF \u0BAA\u0BC7\u0B9A\u0BCD\u0B9A\u0BC1",
        "HJsvSvQAf0elC8g1TEPlYA#Value": "\u0B89\u0BA4\u0BB5\u0BBF \u0BAE\u0BC8\u0BAF\u0BAE\u0BCD",
        "g76_92uzwUW01UFWJWwQlQ#Value": "\u0B86\u0BA4\u0BB0\u0BB5\u0BC1",
        "4IO49Ta8OEO2AE5sYZ5mCw#Value": "\u0BAE\u0BCA\u0BB4\u0BBF",
        "143FeSKoJkqIe+8S_aFYgw#Value": "\u0B95\u0B9F\u0BB5\u0BC1\u0B9A\u0BCD\u0B9A\u0BC6\u0BBE\u0BB2\u0BCD",
        "PljL8_i5VUS2Lu1WA74cGg#Value": "\u0B85\u0BAE\u0BC8\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BCD",
        "T_W45EHI_0GPkcO6EuXwug#ValueExpression.-1929739544.1": "\u0B89\u0BA3\u0BCD\u0BAE\u0BC1\u0BA4\u0BB2\u0BC8\u0BAE\u0BCD",
        "T_W45EHI_0GPkcO6EuXwug#ValueExpression.1331383955.1": "\u0BAE\u0BA4\u0BBF\u0BAA\u0BCD\u0BAA\u0BBE\u0BAF\u0BCD\u0BB5\u0BC1 \u0BA8\u0B9F \u0632\u0648\u0631\u0BA4\u0BCD\u0BA4\u0BBF\u0BB2\u0BCD",
        "T_W45EHI_0GPkcO6EuXwug#ValueExpression.1525309569.1": "\u0B89\u0BB1\u0BC1\u0BA4\u0BBF \u0B9A\u0BC6\u0BAF\u0BCD\u0BAF\u0BAA\u0BCD\u0BAA\u0B9F\u0BB5\u0BBF\u0BB2\u0BCD\u0BB2\u0BC8",
        "T_W45EHI_0GPkcO6EuXwug#ValueExpression.2096857181.1": "\u0BA4\u0B9F\u0BC1\u0B95\u0BCD\u0B95\u0BC1\u0BAE\u0BCD",
        "j_lF7tuE4EC6dV_gaU6hjA#Value": "\u0BAE\u0BC1\u0B95\u0BB5\u0BB0\u0BBF\u0BAF\u0BBF\u0BA9\u0BCD \u0B9A\u0BBE\u0BA9\u0BCD\u0BB1\u0BC1",
        "eZqNdo5RS0+ys7wRCn0_+Q#ValueExpression.-1929739544.1": "\u0B89\u0BA3\u0BCD\u0BAE\u0BC1\u0BA4\u0BB2\u0BC8\u0BAE\u0BCD",
        "eZqNdo5RS0+ys7wRCn0_+Q#ValueExpression.1331383955.1": "\u0BAE\u0BA4\u0BBF\u0BAA\u0BCD\u0BAA\u0BBE\u0BAF\u0BCD\u0BB5\u0BC1 \u0BA8\u0B9F \u0632\u0648\u0631\u0BA4\u0BCD\u0BA4\u0BBF\u0BB2\u0BCD",
        "eZqNdo5RS0+ys7wRCn0_+Q#ValueExpression.1525309569.1": "\u0B89\u0BB1\u0BC1\u0BA4\u0BBF \u0B9A\u0BC6\u0BAF\u0BCD\u0BAF\u0BAA\u0BCD\u0BAA\u0B9F\u0BB5\u0BBF\u0BB2\u0BCD\u0BB2\u0BC8",
        "eZqNdo5RS0+ys7wRCn0_+Q#ValueExpression.2096857181.1": "\u0BA4\u0B9F\u0BC1\u0B95\u0BCD\u0B95\u0BC1\u0BAE\u0BCD",
        "qcv_hi5hN0y7VubFwhgOqg#Value": "\u0B85\u0B9F\u0BC8\u0BAF\u0BBE\u0BB3\u0BAE\u0BCD \u0B9A\u0BBE\u0BA9\u0BCD\u0BB1\u0BBF\u0BA4\u0BB4\u0BCD",
        "ky6Dm7fdPkyH37yOtA0dhQ#Value": "\u0B9A\u0BCD \u0B9A\u0BB0\u0BBF\u0BAA\u0BBE\u0BB0\u0BCD\u0BAA\u0BCD\u0BAA\u0BC1",
        "eichUFUDEkW6OvPLlQqeyg#Value": "\u0BB5\u0BC0\u0B9F\u0BCD\u0B9F\u0BBF\u0BA9\u0BCD \u0BAE\u0BC1\u0B95\u0BB5\u0BB0\u0BBF",
        "IAeq+gjbqkWCOfl_xRLNTQ#ValueExpression.983442814.1": "\u0BAE\u0BC1\u0BB4\u0BC1\u0BAE\u0BC8\u0BAF\u0BBF\u0BB2\u0BCD\u0BB2\u0BBE\u0BA4\u0BA4\u0BC1",
        "ccdAmxBwJkGeAx0MRB8aoA#Value": "\u0BA4\u0BA9\u0BBF\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F \u0BB5\u0BBF\u0BB5\u0BB0\u0B99\u0BCD\u0B95\u0BB3\u0BCD",
        "oQ80g0zk20Knlwawyu5oRA#Value": "\u0B89\u0B99\u0BCD\u0B95\u0BB3\u0BC8\u0BAA\u0BCD \u0BAA\u0BB1\u0BCD\u0BB1\u0BBF",
        "nbLtW7mN_kGqHGFfgL3BCg#ValueExpression.420875151.1": "\u0B85\u0B9F\u0BC8\u0BAF\u0BBE\u0BB3\u0BAE\u0BCD: {{0}}",
        "kejLBGIYj0yhVA1qmw4vIg#ValueExpression.-1397214398.1": "\u0BB5\u0BB0\u0BB5\u0BC7\u0BB1\u0BCD\u0B95\u0BBF\u0BB1\u0BCB\u0BAE\u0BCD",
        "Pt54xSQwgEW9LRZxBRQrRA#ValueExpression.-1397214398.1": "\u0BB5\u0BB0\u0BB5\u0BC7\u0BB1\u0BCD\u0B95\u0BBF\u0BB1\u0BCB\u0BAE\u0BCD",
        "ZTJoaDibI0K+vL_L7DXG4g#Value.254712920.1": "\u0BAA\u0BC7\u0BB0\u0BC1\u0BB0\u0BC8\u0BAF\u0BC8 \u0BA8\u0B95\u0BB2\u0BC6\u0B9F\u0BC1\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1.",
        "FA98vp9QMUGEkZoNBLfmhg#Title": "\u0B9A\u0BC1\u0BAF\u0BB5\u0BBF\u0BB5\u0BB0\u0BAE\u0BCD",
        "FA98vp9QMUGEkZoNBLfmhg#TitleExpression.1355227529.1": "\u0B9A\u0BC1\u0BAF\u0BB5\u0BBF\u0BB5\u0BB0\u0BAE\u0BCD"
    },
    lt = {
        "XaXL7pzEwEu3kkGo8zrgmQ#Value": "\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E23\u0E30\u0E1A\u0E1A",
        "DvEj62PcXkSwcXZoSxKtUg#Value": "\u0E41\u0E0A\u0E17\u0E2A\u0E14",
        "HJsvSvQAf0elC8g1TEPlYA#Value": "\u0E28\u0E39\u0E19\u0E22\u0E4C\u0E0A\u0E48\u0E27\u0E22\u0E40\u0E2B\u0E25\u0E37\u0E2D",
        "g76_92uzwUW01UFWJWwQlQ#Value": "\u0E01\u0E32\u0E23\u0E2A\u0E19\u0E31\u0E1A\u0E2A\u0E19\u0E38\u0E19",
        "4IO49Ta8OEO2AE5sYZ5mCw#Value": "\u0E20\u0E32\u0E29\u0E32",
        "143FeSKoJkqIe+8S_aFYgw#Value": "\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19",
        "PljL8_i5VUS2Lu1WA74cGg#Value": "\u0E01\u0E32\u0E23\u0E15\u0E31\u0E49\u0E07\u0E04\u0E48\u0E32",
        "T_W45EHI_0GPkcO6EuXwug#ValueExpression.-1929739544.1": "\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E41\u0E25\u0E49\u0E27",
        "T_W45EHI_0GPkcO6EuXwug#ValueExpression.1331383955.1": "\u0E23\u0E30\u0E2B\u0E27\u0E48\u0E32\u0E07\u0E01\u0E32\u0E23\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A",
        "T_W45EHI_0GPkcO6EuXwug#ValueExpression.1525309569.1": "\u0E22\u0E31\u0E07\u0E44\u0E21\u0E48\u0E44\u0E14\u0E49\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A",
        "T_W45EHI_0GPkcO6EuXwug#ValueExpression.2096857181.1": "\u0E25\u0E49\u0E21\u0E40\u0E2B\u0E25\u0E27",
        "j_lF7tuE4EC6dV_gaU6hjA#Value": "\u0E2B\u0E25\u0E31\u0E01\u0E10\u0E32\u0E19\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48",
        "eZqNdo5RS0+ys7wRCn0_+Q#ValueExpression.-1929739544.1": "\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E41\u0E25\u0E49\u0E27",
        "eZqNdo5RS0+ys7wRCn0_+Q#ValueExpression.1331383955.1": "\u0E23\u0E30\u0E2B\u0E27\u0E48\u0E32\u0E07\u0E01\u0E32\u0E23\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A",
        "eZqNdo5RS0+ys7wRCn0_+Q#ValueExpression.1525309569.1": "\u0E22\u0E31\u0E07\u0E44\u0E21\u0E48\u0E44\u0E14\u0E49\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A",
        "eZqNdo5RS0+ys7wRCn0_+Q#ValueExpression.2096857181.1": "\u0E25\u0E49\u0E21\u0E40\u0E2B\u0E25\u0E27",
        "qcv_hi5hN0y7VubFwhgOqg#Value": "\u0E2B\u0E25\u0E31\u0E01\u0E10\u0E32\u0E19\u0E41\u0E2A\u0E14\u0E07\u0E15\u0E31\u0E27\u0E15\u0E19",
        "ky6Dm7fdPkyH37yOtA0dhQ#Value": "\u0E01\u0E32\u0E23\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A",
        "eichUFUDEkW6OvPLlQqeyg#Value": "\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48\u0E1A\u0E49\u0E32\u0E19",
        "IAeq+gjbqkWCOfl_xRLNTQ#ValueExpression.983442814.1": "\u0E44\u0E21\u0E48\u0E2A\u0E21\u0E1A\u0E39\u0E23\u0E13\u0E4C",
        "ccdAmxBwJkGeAx0MRB8aoA#Value": "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E2A\u0E48\u0E27\u0E19\u0E15\u0E31\u0E27",
        "oQ80g0zk20Knlwawyu5oRA#Value": "\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E01\u0E31\u0E1A\u0E04\u0E38\u0E13",
        "nbLtW7mN_kGqHGFfgL3BCg#ValueExpression.420875151.1": "\u0E23\u0E2B\u0E31\u0E2A\u0E1B\u0E23\u0E30\u0E08\u0E33\u0E15\u0E31\u0E27: {{0}}",
        "kejLBGIYj0yhVA1qmw4vIg#ValueExpression.-1397214398.1": "\u0E22\u0E34\u0E19\u0E14\u0E35\u0E15\u0E49\u0E2D\u0E19\u0E23\u0E31\u0E1A",
        "Pt54xSQwgEW9LRZxBRQrRA#ValueExpression.-1397214398.1": "\u0E22\u0E34\u0E19\u0E14\u0E35\u0E15\u0E49\u0E2D\u0E19\u0E23\u0E31\u0E1A",
        "ZTJoaDibI0K+vL_L7DXG4g#Value.254712920.1": "\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E25\u0E48\u0E19\u0E04\u0E31\u0E14\u0E25\u0E2D\u0E01\u0E41\u0E25\u0E49\u0E27",
        "FA98vp9QMUGEkZoNBLfmhg#Title": "\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C",
        "FA98vp9QMUGEkZoNBLfmhg#TitleExpression.1355227529.1": "\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C"
    },
    ut = {
        "XaXL7pzEwEu3kkGo8zrgmQ#Value": "\xC7\u0131k\u0131\u015F yap",
        "DvEj62PcXkSwcXZoSxKtUg#Value": "Canl\u0131 sohbet",
        "HJsvSvQAf0elC8g1TEPlYA#Value": "Yard\u0131m merkezi",
        "g76_92uzwUW01UFWJWwQlQ#Value": "Destek",
        "4IO49Ta8OEO2AE5sYZ5mCw#Value": "Dil",
        "143FeSKoJkqIe+8S_aFYgw#Value": "Parola",
        "PljL8_i5VUS2Lu1WA74cGg#Value": "Ayarlar",
        "T_W45EHI_0GPkcO6EuXwug#ValueExpression.-1929739544.1": "Do\u011Fruland\u0131",
        "T_W45EHI_0GPkcO6EuXwug#ValueExpression.1331383955.1": "\u0130nceleme alt\u0131nda",
        "T_W45EHI_0GPkcO6EuXwug#ValueExpression.1525309569.1": "Do\u011Frulanmad\u0131",
        "T_W45EHI_0GPkcO6EuXwug#ValueExpression.2096857181.1": "Ba\u015Far\u0131s\u0131z",
        "j_lF7tuE4EC6dV_gaU6hjA#Value": "Adres kan\u0131t\u0131",
        "eZqNdo5RS0+ys7wRCn0_+Q#ValueExpression.-1929739544.1": "Do\u011Fruland\u0131",
        "eZqNdo5RS0+ys7wRCn0_+Q#ValueExpression.1331383955.1": "\u0130nceleme alt\u0131nda",
        "eZqNdo5RS0+ys7wRCn0_+Q#ValueExpression.1525309569.1": "Do\u011Frulanmad\u0131",
        "eZqNdo5RS0+ys7wRCn0_+Q#ValueExpression.2096857181.1": "Ba\u015Far\u0131s\u0131z",
        "qcv_hi5hN0y7VubFwhgOqg#Value": "Kimlik kan\u0131t\u0131",
        "ky6Dm7fdPkyH37yOtA0dhQ#Value": "Do\u011Frulama",
        "eichUFUDEkW6OvPLlQqeyg#Value": "Ev adresi",
        "IAeq+gjbqkWCOfl_xRLNTQ#ValueExpression.983442814.1": "Eksik",
        "ccdAmxBwJkGeAx0MRB8aoA#Value": "Ki\u015Fisel bilgiler",
        "oQ80g0zk20Knlwawyu5oRA#Value": "Hakk\u0131nda",
        "nbLtW7mN_kGqHGFfgL3BCg#ValueExpression.420875151.1": "Kimlik: {{0}}",
        "kejLBGIYj0yhVA1qmw4vIg#ValueExpression.-1397214398.1": "Ho\u015Fgeldiniz",
        "Pt54xSQwgEW9LRZxBRQrRA#ValueExpression.-1397214398.1": "Ho\u015Fgeldiniz",
        "ZTJoaDibI0K+vL_L7DXG4g#Value.254712920.1": "Takma isim kopyaland\u0131.",
        "FA98vp9QMUGEkZoNBLfmhg#Title": "Profil",
        "FA98vp9QMUGEkZoNBLfmhg#TitleExpression.1355227529.1": "Profil"
    },
    ct = {
        "XaXL7pzEwEu3kkGo8zrgmQ#Value": "Chiqish",
        "DvEj62PcXkSwcXZoSxKtUg#Value": "Jonli chat",
        "HJsvSvQAf0elC8g1TEPlYA#Value": "Yordam markazi",
        "g76_92uzwUW01UFWJWwQlQ#Value": "Qo\u2018llab-quvvatlash",
        "4IO49Ta8OEO2AE5sYZ5mCw#Value": "Til",
        "143FeSKoJkqIe+8S_aFYgw#Value": "Parol",
        "PljL8_i5VUS2Lu1WA74cGg#Value": "Sozlamalar",
        "T_W45EHI_0GPkcO6EuXwug#ValueExpression.-1929739544.1": "Tasdiqlangan",
        "T_W45EHI_0GPkcO6EuXwug#ValueExpression.1331383955.1": "Ko'rib chiqilmoqda",
        "T_W45EHI_0GPkcO6EuXwug#ValueExpression.1525309569.1": "Tasdiqlanmagan",
        "T_W45EHI_0GPkcO6EuXwug#ValueExpression.2096857181.1": "Muvaffaqiyatsiz",
        "j_lF7tuE4EC6dV_gaU6hjA#Value": "Manzilni tasdiqlash",
        "eZqNdo5RS0+ys7wRCn0_+Q#ValueExpression.-1929739544.1": "Tasdiqlangan",
        "eZqNdo5RS0+ys7wRCn0_+Q#ValueExpression.1331383955.1": "Ko'rib chiqilmoqda",
        "eZqNdo5RS0+ys7wRCn0_+Q#ValueExpression.1525309569.1": "Tasdiqlanmagan",
        "eZqNdo5RS0+ys7wRCn0_+Q#ValueExpression.2096857181.1": "Muvaffaqiyatsiz",
        "qcv_hi5hN0y7VubFwhgOqg#Value": "Shaxsni tasdiqlash",
        "ky6Dm7fdPkyH37yOtA0dhQ#Value": "Tasdiqlash",
        "eichUFUDEkW6OvPLlQqeyg#Value": "Uy manzili",
        "IAeq+gjbqkWCOfl_xRLNTQ#ValueExpression.983442814.1": "To\u2018liq emas",
        "ccdAmxBwJkGeAx0MRB8aoA#Value": "Shaxsiy ma'lumotlar",
        "oQ80g0zk20Knlwawyu5oRA#Value": "Siz haqingizda",
        "nbLtW7mN_kGqHGFfgL3BCg#ValueExpression.420875151.1": "ID: {{0}}",
        "kejLBGIYj0yhVA1qmw4vIg#ValueExpression.-1397214398.1": "Xush kelibsiz",
        "Pt54xSQwgEW9LRZxBRQrRA#ValueExpression.-1397214398.1": "Xush kelibsiz",
        "ZTJoaDibI0K+vL_L7DXG4g#Value.254712920.1": "Taxallus nusxa olindi.",
        "FA98vp9QMUGEkZoNBLfmhg#Title": "Profil",
        "FA98vp9QMUGEkZoNBLfmhg#TitleExpression.1355227529.1": "Profil"
    },
    dt = {
        "XaXL7pzEwEu3kkGo8zrgmQ#Value": "Chiqish",
        "DvEj62PcXkSwcXZoSxKtUg#Value": "Jonli chat",
        "HJsvSvQAf0elC8g1TEPlYA#Value": "Yordam markazi",
        "g76_92uzwUW01UFWJWwQlQ#Value": "Qo\u2018llab-quvvatlash",
        "4IO49Ta8OEO2AE5sYZ5mCw#Value": "Til",
        "143FeSKoJkqIe+8S_aFYgw#Value": "Parol",
        "PljL8_i5VUS2Lu1WA74cGg#Value": "Sozlamalar",
        "T_W45EHI_0GPkcO6EuXwug#ValueExpression.-1929739544.1": "Tasdiqlangan",
        "T_W45EHI_0GPkcO6EuXwug#ValueExpression.1331383955.1": "Ko'rib chiqilmoqda",
        "T_W45EHI_0GPkcO6EuXwug#ValueExpression.1525309569.1": "Tasdiqlanmagan",
        "T_W45EHI_0GPkcO6EuXwug#ValueExpression.2096857181.1": "Muvaffaqiyatsiz",
        "j_lF7tuE4EC6dV_gaU6hjA#Value": "Manzilni tasdiqlash",
        "eZqNdo5RS0+ys7wRCn0_+Q#ValueExpression.-1929739544.1": "Tasdiqlangan",
        "eZqNdo5RS0+ys7wRCn0_+Q#ValueExpression.1331383955.1": "Ko'rib chiqilmoqda",
        "eZqNdo5RS0+ys7wRCn0_+Q#ValueExpression.1525309569.1": "Tasdiqlanmagan",
        "eZqNdo5RS0+ys7wRCn0_+Q#ValueExpression.2096857181.1": "Muvaffaqiyatsiz",
        "qcv_hi5hN0y7VubFwhgOqg#Value": "Shaxsni tasdiqlash",
        "ky6Dm7fdPkyH37yOtA0dhQ#Value": "Tasdiqlash",
        "eichUFUDEkW6OvPLlQqeyg#Value": "Uy manzili",
        "IAeq+gjbqkWCOfl_xRLNTQ#ValueExpression.983442814.1": "To\u2018liq emas",
        "ccdAmxBwJkGeAx0MRB8aoA#Value": "Shaxsiy ma'lumotlar",
        "oQ80g0zk20Knlwawyu5oRA#Value": "Siz haqingizda",
        "nbLtW7mN_kGqHGFfgL3BCg#ValueExpression.420875151.1": "ID: {{0}}",
        "kejLBGIYj0yhVA1qmw4vIg#ValueExpression.-1397214398.1": "Xush kelibsiz",
        "Pt54xSQwgEW9LRZxBRQrRA#ValueExpression.-1397214398.1": "Xush kelibsiz",
        "ZTJoaDibI0K+vL_L7DXG4g#Value.254712920.1": "Taxallus nusxa olindi.",
        "FA98vp9QMUGEkZoNBLfmhg#Title": "Profil",
        "FA98vp9QMUGEkZoNBLfmhg#TitleExpression.1355227529.1": "Profil"
    },
    gt = {
        "XaXL7pzEwEu3kkGo8zrgmQ#Value": "\u0110\u0103ng xu\u1EA5t",
        "DvEj62PcXkSwcXZoSxKtUg#Value": "Tr\xF2 chuy\u1EC7n tr\u1EF1c ti\u1EBFp",
        "HJsvSvQAf0elC8g1TEPlYA#Value": "Trung t\xE2m h\u1ED7 tr\u1EE3",
        "g76_92uzwUW01UFWJWwQlQ#Value": "H\u1ED7 tr\u1EE3",
        "4IO49Ta8OEO2AE5sYZ5mCw#Value": "Ng\xF4n ng\u1EEF",
        "143FeSKoJkqIe+8S_aFYgw#Value": "M\u1EADt kh\u1EA9u",
        "PljL8_i5VUS2Lu1WA74cGg#Value": "C\xE0i \u0111\u1EB7t",
        "T_W45EHI_0GPkcO6EuXwug#ValueExpression.-1929739544.1": "\u0110\xE3 x\xE1c minh",
        "T_W45EHI_0GPkcO6EuXwug#ValueExpression.1331383955.1": "\u0110ang xem x\xE9t",
        "T_W45EHI_0GPkcO6EuXwug#ValueExpression.1525309569.1": "Ch\u01B0a \u0111\u01B0\u1EE3c x\xE1c minh",
        "T_W45EHI_0GPkcO6EuXwug#ValueExpression.2096857181.1": "Th\u1EA5t b\u1EA1i",
        "j_lF7tuE4EC6dV_gaU6hjA#Value": "B\u1EB1ng ch\u1EE9ng \u0111\u1ECBa ch\u1EC9",
        "eZqNdo5RS0+ys7wRCn0_+Q#ValueExpression.-1929739544.1": "\u0110\xE3 x\xE1c minh",
        "eZqNdo5RS0+ys7wRCn0_+Q#ValueExpression.1331383955.1": "\u0110ang xem x\xE9t",
        "eZqNdo5RS0+ys7wRCn0_+Q#ValueExpression.1525309569.1": "Ch\u01B0a \u0111\u01B0\u1EE3c x\xE1c minh",
        "eZqNdo5RS0+ys7wRCn0_+Q#ValueExpression.2096857181.1": "Th\u1EA5t b\u1EA1i",
        "qcv_hi5hN0y7VubFwhgOqg#Value": "B\u1EB1ng ch\u1EE9ng danh t\xEDnh",
        "ky6Dm7fdPkyH37yOtA0dhQ#Value": "X\xE1c minh",
        "eichUFUDEkW6OvPLlQqeyg#Value": "\u0110\u1ECBa ch\u1EC9 nh\xE0",
        "IAeq+gjbqkWCOfl_xRLNTQ#ValueExpression.983442814.1": "Ch\u01B0a ho\xE0n ch\u1EC9nh",
        "ccdAmxBwJkGeAx0MRB8aoA#Value": "Th\xF4ng tin c\xE1 nh\xE2n",
        "oQ80g0zk20Knlwawyu5oRA#Value": "V\u1EC1 b\u1EA1n",
        "nbLtW7mN_kGqHGFfgL3BCg#ValueExpression.420875151.1": "ID: {{0}}",
        "kejLBGIYj0yhVA1qmw4vIg#ValueExpression.-1397214398.1": "Ch\xE0o m\u1EEBng b\u1EA1n",
        "Pt54xSQwgEW9LRZxBRQrRA#ValueExpression.-1397214398.1": "Ch\xE0o m\u1EEBng b\u1EA1n",
        "ZTJoaDibI0K+vL_L7DXG4g#Value.254712920.1": "Bi\u1EC7t danh \u0111\xE3 sao ch\xE9p.",
        "FA98vp9QMUGEkZoNBLfmhg#Title": "H\u1ED3 s\u01A1",
        "FA98vp9QMUGEkZoNBLfmhg#TitleExpression.1355227529.1": "H\u1ED3 s\u01A1"
    },
    ft = {
        "XaXL7pzEwEu3kkGo8zrgmQ#Value": "\u9000\u51FA\u767B\u5F55",
        "DvEj62PcXkSwcXZoSxKtUg#Value": "\u5728\u7EBF\u804A\u5929",
        "HJsvSvQAf0elC8g1TEPlYA#Value": "\u5E2E\u52A9\u4E2D\u5FC3",
        "g76_92uzwUW01UFWJWwQlQ#Value": "\u652F\u6301",
        "4IO49Ta8OEO2AE5sYZ5mCw#Value": "\u8BED\u8A00",
        "143FeSKoJkqIe+8S_aFYgw#Value": "\u5BC6\u7801",
        "PljL8_i5VUS2Lu1WA74cGg#Value": "\u8BBE\u7F6E",
        "T_W45EHI_0GPkcO6EuXwug#ValueExpression.-1929739544.1": "\u5DF2\u9A8C\u8BC1",
        "T_W45EHI_0GPkcO6EuXwug#ValueExpression.1331383955.1": "\u5BA1\u6838\u4E2D",
        "T_W45EHI_0GPkcO6EuXwug#ValueExpression.1525309569.1": "\u672A\u9A8C\u8BC1",
        "T_W45EHI_0GPkcO6EuXwug#ValueExpression.2096857181.1": "\u5931\u8D25",
        "j_lF7tuE4EC6dV_gaU6hjA#Value": "\u5730\u5740\u8BC1\u660E",
        "eZqNdo5RS0+ys7wRCn0_+Q#ValueExpression.-1929739544.1": "\u5DF2\u9A8C\u8BC1",
        "eZqNdo5RS0+ys7wRCn0_+Q#ValueExpression.1331383955.1": "\u5BA1\u6838\u4E2D",
        "eZqNdo5RS0+ys7wRCn0_+Q#ValueExpression.1525309569.1": "\u672A\u9A8C\u8BC1",
        "eZqNdo5RS0+ys7wRCn0_+Q#ValueExpression.2096857181.1": "\u5931\u8D25",
        "qcv_hi5hN0y7VubFwhgOqg#Value": "\u8EAB\u4EFD\u8BC1\u660E",
        "ky6Dm7fdPkyH37yOtA0dhQ#Value": "\u9A8C\u8BC1",
        "eichUFUDEkW6OvPLlQqeyg#Value": "\u5BB6\u5EAD\u4F4F\u5740",
        "IAeq+gjbqkWCOfl_xRLNTQ#ValueExpression.983442814.1": "\u4E0D\u5B8C\u6574",
        "ccdAmxBwJkGeAx0MRB8aoA#Value": "\u4E2A\u4EBA\u4FE1\u606F",
        "oQ80g0zk20Knlwawyu5oRA#Value": "\u5173\u4E8E\u4F60",
        "nbLtW7mN_kGqHGFfgL3BCg#ValueExpression.420875151.1": "\u7F16\u53F7\uFF1A{{0}}",
        "kejLBGIYj0yhVA1qmw4vIg#ValueExpression.-1397214398.1": "\u6B22\u8FCE",
        "Pt54xSQwgEW9LRZxBRQrRA#ValueExpression.-1397214398.1": "\u6B22\u8FCE",
        "ZTJoaDibI0K+vL_L7DXG4g#Value.254712920.1": "\u6635\u79F0\u5DF2\u590D\u5236\u3002",
        "FA98vp9QMUGEkZoNBLfmhg#Title": "\u4E2A\u4EBA\u8D44\u6599",
        "FA98vp9QMUGEkZoNBLfmhg#TitleExpression.1355227529.1": "\u4E2A\u4EBA\u8D44\u6599"
    },
    pt = {
        "XaXL7pzEwEu3kkGo8zrgmQ#Value": "\u767B\u51FA",
        "DvEj62PcXkSwcXZoSxKtUg#Value": "\u5373\u6642\u804A\u5929",
        "HJsvSvQAf0elC8g1TEPlYA#Value": "\u5E6B\u52A9\u4E2D\u5FC3",
        "g76_92uzwUW01UFWJWwQlQ#Value": "\u652F\u63F4",
        "4IO49Ta8OEO2AE5sYZ5mCw#Value": "\u8A9E\u8A00",
        "143FeSKoJkqIe+8S_aFYgw#Value": "\u5BC6\u78BC",
        "PljL8_i5VUS2Lu1WA74cGg#Value": "\u8A2D\u5B9A",
        "T_W45EHI_0GPkcO6EuXwug#ValueExpression.-1929739544.1": "\u5DF2\u9A57\u8B49",
        "T_W45EHI_0GPkcO6EuXwug#ValueExpression.1331383955.1": "\u5BE9\u6838\u4E2D",
        "T_W45EHI_0GPkcO6EuXwug#ValueExpression.1525309569.1": "\u672A\u9A57\u8B49",
        "T_W45EHI_0GPkcO6EuXwug#ValueExpression.2096857181.1": "\u5931\u6557",
        "j_lF7tuE4EC6dV_gaU6hjA#Value": "\u5730\u5740\u8B49\u660E",
        "eZqNdo5RS0+ys7wRCn0_+Q#ValueExpression.-1929739544.1": "\u5DF2\u9A57\u8B49",
        "eZqNdo5RS0+ys7wRCn0_+Q#ValueExpression.1331383955.1": "\u5BE9\u6838\u4E2D",
        "eZqNdo5RS0+ys7wRCn0_+Q#ValueExpression.1525309569.1": "\u672A\u9A57\u8B49",
        "eZqNdo5RS0+ys7wRCn0_+Q#ValueExpression.2096857181.1": "\u5931\u6557",
        "qcv_hi5hN0y7VubFwhgOqg#Value": "\u8EAB\u4EFD\u8B49\u660E",
        "ky6Dm7fdPkyH37yOtA0dhQ#Value": "\u9A57\u8B49",
        "eichUFUDEkW6OvPLlQqeyg#Value": "\u5BB6\u5EAD\u4F4F\u5740",
        "IAeq+gjbqkWCOfl_xRLNTQ#ValueExpression.983442814.1": "\u4E0D\u5B8C\u6574",
        "ccdAmxBwJkGeAx0MRB8aoA#Value": "\u500B\u4EBA\u8CC7\u6599",
        "oQ80g0zk20Knlwawyu5oRA#Value": "\u95DC\u65BC\u4F60",
        "nbLtW7mN_kGqHGFfgL3BCg#ValueExpression.420875151.1": "ID: {{0}}",
        "kejLBGIYj0yhVA1qmw4vIg#ValueExpression.-1397214398.1": "\u6B61\u8FCE",
        "Pt54xSQwgEW9LRZxBRQrRA#ValueExpression.-1397214398.1": "\u6B61\u8FCE",
        "ZTJoaDibI0K+vL_L7DXG4g#Value.254712920.1": "\u66B1\u7A31\u5DF2\u8907\u88FD\u3002",
        "FA98vp9QMUGEkZoNBLfmhg#Title": "\u500B\u4EBA\u8CC7\u6599",
        "FA98vp9QMUGEkZoNBLfmhg#TitleExpression.1355227529.1": "\u500B\u4EBA\u8CC7\u6599"
    },
    De = {
        "ar-001": {
            translations: Xe,
            isRTL: !0
        },
        "bn-BD": {
            translations: $e,
            isRTL: !1
        },
        "de-DE": {
            translations: je,
            isRTL: !1
        },
        "es-ES": {
            translations: Me,
            isRTL: !1
        },
        "fr-FR": {
            translations: ze,
            isRTL: !1
        },
        "it-IT": {
            translations: Ke,
            isRTL: !1
        },
        "km-KH": {
            translations: Ye,
            isRTL: !1
        },
        "ko-KR": {
            translations: et,
            isRTL: !1
        },
        "mn-MN": {
            translations: tt,
            isRTL: !1
        },
        "pl-PL": {
            translations: rt,
            isRTL: !1
        },
        "pt-PT": {
            translations: ot,
            isRTL: !1
        },
        "ru-RU": {
            translations: it,
            isRTL: !1
        },
        "si-LK": {
            translations: at,
            isRTL: !1
        },
        "sw-KE": {
            translations: nt,
            isRTL: !1
        },
        "ta-IN": {
            translations: st,
            isRTL: !1
        },
        "th-TH": {
            translations: lt,
            isRTL: !1
        },
        "tr-TR": {
            translations: ut,
            isRTL: !1
        },
        "uz-Latn-UZ": {
            translations: ct,
            isRTL: !1
        },
        "uz-UZ": {
            translations: dt,
            isRTL: !1
        },
        "vi-VN": {
            translations: gt,
            isRTL: !1
        },
        "zh-CN": {
            translations: ft,
            isRTL: !1
        },
        "zh-TW": {
            translations: pt,
            isRTL: !1
        }
    };

function Ce(c, i, a) {
    window.open("https://trade.deriv.com/help-centre")
}
d(Ce, "default");
var m = h; {
    let i = class i extends m.Controller.BaseViewController {
        constructor(t, e, r) {
            super(t, e, r, De);
            var o = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(t) {
            this._dataFetchActionNames = t
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(t) {
                var e = this.model,
                    r = this.controller,
                    o = this.idService;
                return m.Logger.startActiveSpan("OnReady", function(l) {
                    return l && (l.setAttribute("code.function", "OnReady"), l.setAttribute("outsystems.function.key", "503821dd-fd90-4256-91b5-0123b32e6bbb"), l.setAttribute("outsystems.function.owner.name", "dashboard"), l.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), l.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), m.Flow.tryFinally(function() {
                        r.ensureControllerAlive("OnReady"), t = r.callContext(t);
                        var p = new m.DataTypes.VariableHolder,
                            k = new m.DataTypes.VariableHolder,
                            s = new m.DataTypes.VariableHolder,
                            D = new m.DataTypes.VariableHolder,
                            w = new m.DataTypes.VariableHolder,
                            I = new m.DataTypes.VariableHolder;
                        return m.Flow.executeAsyncFlow(function() {
                            return e.variables.isLoadingVar = !0, e.flush(), E.isLanguageSwitcherEnabled$Action(t).then(function(b) {
                                D.value = b
                            }).then(function() {
                                return e.variables.languageSwitcherEnabledVar = D.value.isEnabledOut, e.flush(), E.gET_PII_ClientProfile$Action(t).then(function(b) {
                                    w.value = b
                                })
                            }).then(function() {
                                return e.flush(), E.gET_ClientOnboardingStatus$Action(t).then(function(b) {
                                    s.value = b
                                })
                            }).then(function() {
                                return e.variables.nicknameVar = w.value.responseOut.dataAttr.nicknameAttr, e.variables.emailVar = w.value.responseOut.dataAttr.emailAttr, e.variables.fullNameVar = w.value.responseOut.dataAttr.first_nameAttr + " " + w.value.responseOut.dataAttr.last_nameAttr, e.variables.firstNameVar = w.value.responseOut.dataAttr.first_nameAttr, e.variables.onboardingStatusResponseVar = s.value.responseOut, e.flush(), E.gET_ClientKYCStatus$Action(t).then(function(b) {
                                    I.value = b
                                })
                            }).then(function() {
                                p.value = m.SystemActions.listFilter(I.value.responseOut.dataAttr, function(b) {
                                    return b.kyc_stepAttr === "poi"
                                }, t), k.value = m.SystemActions.listFilter(I.value.responseOut.dataAttr, function(b) {
                                    return b.kyc_stepAttr === "poa"
                                }, t), e.variables.pOIStatusVar = p.value.filteredListOut.getCurrent(t.iterationContext).statusAttr, e.variables.pOAStatusVar = k.value.filteredListOut.getCurrent(t.iterationContext).statusAttr, e.variables.isLoadingVar = !1
                            })
                        })
                    }, function() {
                        l && l.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(t) {
            this.__onReady$Action = t
        }
        get _copyValue$Action() {
            return this.hasOwnProperty("__copyValue$Action") || (this.__copyValue$Action = function(t) {
                var e = this.model,
                    r = this.controller,
                    o = this.idService;
                return m.Logger.startActiveSpan("CopyValue", function(l) {
                    return l && (l.setAttribute("code.function", "CopyValue"), l.setAttribute("outsystems.function.key", "51bc2a53-759e-483b-8a57-d8e1cabf4061"), l.setAttribute("outsystems.function.owner.name", "dashboard"), l.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), l.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), m.Flow.tryFinally(function() {
                        r.ensureControllerAlive("CopyValue"), t = r.callContext(t);
                        var p = new m.DataTypes.VariableHolder;
                        return m.Flow.executeAsyncFlow(function() {
                            return e.flush(), Le.copyToClipboard$Action(e.variables.nicknameVar, t).then(function(k) {
                                p.value = k
                            }).then(function() {
                                E.toasterSuccess$Action(m.Injector.resolve(m.ServiceNames.TranslationsService).getMessage("ZTJoaDibI0K+vL_L7DXG4g#Value.254712920.1", "Nickname copied."), t)
                            })
                        })
                    }, function() {
                        l && l.end()
                    })
                }, 1)
            }), this.__copyValue$Action
        }
        set _copyValue$Action(t) {
            this.__copyValue$Action = t
        }
        get _logOutOnClick$Action() {
            return this.hasOwnProperty("__logOutOnClick$Action") || (this.__logOutOnClick$Action = function(t) {
                var e = this.model,
                    r = this.controller,
                    o = this.idService;
                return m.Logger.startActiveSpan("LogOutOnClick", function(l) {
                    return l && (l.setAttribute("code.function", "LogOutOnClick"), l.setAttribute("outsystems.function.key", "a697dd83-5b5f-4bd8-a375-3e0e5e7699a1"), l.setAttribute("outsystems.function.owner.name", "dashboard"), l.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), l.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), m.Flow.tryFinally(function() {
                        return r.ensureControllerAlive("LogOutOnClick"), t = r.callContext(t), m.Flow.executeAsyncFlow(function() {
                            return e.flush(), E.pOST_Logout$Action(t)
                        })
                    }, function() {
                        l && l.end()
                    })
                }, 1)
            }), this.__logOutOnClick$Action
        }
        set _logOutOnClick$Action(t) {
            this.__logOutOnClick$Action = t
        }
        get _backbuttonOnClick$Action() {
            return this.hasOwnProperty("__backbuttonOnClick$Action") || (this.__backbuttonOnClick$Action = function(t) {
                var e = this.model,
                    r = this.controller,
                    o = this.idService;
                return m.Logger.startActiveSpan("BackbuttonOnClick", function(l) {
                    l && (l.setAttribute("code.function", "BackbuttonOnClick"), l.setAttribute("outsystems.function.key", "b7b43439-fff0-4af9-a23b-0908acf46af6"), l.setAttribute("outsystems.function.owner.name", "dashboard"), l.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), l.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return r.ensureControllerAlive("BackbuttonOnClick"), t = r.callContext(t), m.Navigation.navigateTo(m.Navigation.generateScreenURL("dashboard", "home", {}), m.Transitions.createTransition(m.Transitions.TransitionAnimation.None), t, !0)
                    } finally {
                        l && l.end()
                    }
                }, 1)
            }), this.__backbuttonOnClick$Action
        }
        set _backbuttonOnClick$Action(t) {
            this.__backbuttonOnClick$Action = t
        }
        get _redirectToHelpCenter$Action() {
            return this.hasOwnProperty("__redirectToHelpCenter$Action") || (this.__redirectToHelpCenter$Action = function(t) {
                var e = this.model,
                    r = this.controller,
                    o = this.idService;
                return m.Logger.startActiveSpan("RedirectToHelpCenter", function(l) {
                    l && (l.setAttribute("code.function", "RedirectToHelpCenter"), l.setAttribute("outsystems.function.key", "c8a9ae2c-10af-4efd-a70e-a5ef05e13344"), l.setAttribute("outsystems.function.owner.name", "dashboard"), l.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), l.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("RedirectToHelpCenter"), t = r.callContext(t), m.Logger.startActiveSpan("JavaScript1", function(p) {
                            p && (p.setAttribute("code.function", "JavaScript1"), p.setAttribute("outsystems.function.key", "1486c428-73c6-4e69-ae57-42b0a8501fb2"), p.setAttribute("outsystems.function.owner.name", "dashboard"), p.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), p.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return r.safeExecuteJSNode(Ce, "JavaScript1", "RedirectToHelpCenter", null, function(k) {}, {}, {})
                            } finally {
                                p && p.end()
                            }
                        }, 1)
                    } finally {
                        l && l.end()
                    }
                }, 1)
            }), this.__redirectToHelpCenter$Action
        }
        set _redirectToHelpCenter$Action(t) {
            this.__redirectToHelpCenter$Action = t
        }
        get _connectIntercom$Action() {
            return this.hasOwnProperty("__connectIntercom$Action") || (this.__connectIntercom$Action = function(t) {
                var e = this.model,
                    r = this.controller,
                    o = this.idService;
                return m.Logger.startActiveSpan("ConnectIntercom", function(l) {
                    return l && (l.setAttribute("code.function", "ConnectIntercom"), l.setAttribute("outsystems.function.key", "e4effaed-1b8b-4242-a7e9-6d957abe9b56"), l.setAttribute("outsystems.function.owner.name", "dashboard"), l.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), l.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), m.Flow.tryFinally(function() {
                        return r.ensureControllerAlive("ConnectIntercom"), t = r.callContext(t), m.Flow.executeAsyncFlow(function() {
                            return e.flush(), E.openIntercom$Action(t)
                        })
                    }, function() {
                        l && l.end()
                    })
                }, 1)
            }), this.__connectIntercom$Action
        }
        set _connectIntercom$Action(t) {
            this.__connectIntercom$Action = t
        }
        get _isPOIpending$Action() {
            return this.hasOwnProperty("__isPOIpending$Action") || (this.__isPOIpending$Action = function(t) {
                var e = this.model,
                    r = this.controller,
                    o = this.idService;
                return m.Logger.startActiveSpan("IsPOIpending", function(l) {
                    l && (l.setAttribute("code.function", "IsPOIpending"), l.setAttribute("outsystems.function.key", "f5c7aef9-658e-4111-9e47-eec843eca7c4"), l.setAttribute("outsystems.function.owner.name", "dashboard"), l.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), l.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return r.ensureControllerAlive("IsPOIpending"), t = r.callContext(t), e.variables.pOIStatusVar === "none" ? m.Navigation.navigateTo(m.Navigation.generateScreenURL("dashboard", "kyc/confirm-detail", {}), m.Transitions.createTransition(m.Transitions.TransitionAnimation.Default), t, !0) : m.Navigation.navigateTo(m.Navigation.generateScreenURL("dashboard", "kyc/identity", {}), m.Transitions.createTransition(m.Transitions.TransitionAnimation.Default), t, !0)
                    } finally {
                        l && l.end()
                    }
                }, 1)
            }), this.__isPOIpending$Action
        }
        set _isPOIpending$Action(t) {
            this.__isPOIpending$Action = t
        }
        onReady$Action(t) {
            var e = this.controller;
            return m.Logger.startActiveSpan("OnReady__proxy", function(r) {
                return r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "503821dd-fd90-4256-91b5-0123b32e6bbb"), r.setAttribute("outsystems.function.owner.name", "dashboard"), r.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), m.Flow.tryFinally(function() {
                    return e.safeExecuteClientAction(e._onReady$Action, t)
                }, function() {
                    r && r.end()
                })
            }, 0)
        }
        copyValue$Action(t) {
            var e = this.controller;
            return m.Logger.startActiveSpan("CopyValue__proxy", function(r) {
                return r && (r.setAttribute("code.function", "CopyValue"), r.setAttribute("outsystems.function.key", "51bc2a53-759e-483b-8a57-d8e1cabf4061"), r.setAttribute("outsystems.function.owner.name", "dashboard"), r.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), m.Flow.tryFinally(function() {
                    return e.safeExecuteClientAction(e._copyValue$Action, t)
                }, function() {
                    r && r.end()
                })
            }, 0)
        }
        logOutOnClick$Action(t) {
            var e = this.controller;
            return m.Logger.startActiveSpan("LogOutOnClick__proxy", function(r) {
                return r && (r.setAttribute("code.function", "LogOutOnClick"), r.setAttribute("outsystems.function.key", "a697dd83-5b5f-4bd8-a375-3e0e5e7699a1"), r.setAttribute("outsystems.function.owner.name", "dashboard"), r.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), m.Flow.tryFinally(function() {
                    return e.safeExecuteClientAction(e._logOutOnClick$Action, t)
                }, function() {
                    r && r.end()
                })
            }, 0)
        }
        backbuttonOnClick$Action(t) {
            var e = this.controller;
            return m.Logger.startActiveSpan("BackbuttonOnClick__proxy", function(r) {
                r && (r.setAttribute("code.function", "BackbuttonOnClick"), r.setAttribute("outsystems.function.key", "b7b43439-fff0-4af9-a23b-0908acf46af6"), r.setAttribute("outsystems.function.owner.name", "dashboard"), r.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return e.safeExecuteClientAction(e._backbuttonOnClick$Action, t)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        redirectToHelpCenter$Action(t) {
            var e = this.controller;
            return m.Logger.startActiveSpan("RedirectToHelpCenter__proxy", function(r) {
                r && (r.setAttribute("code.function", "RedirectToHelpCenter"), r.setAttribute("outsystems.function.key", "c8a9ae2c-10af-4efd-a70e-a5ef05e13344"), r.setAttribute("outsystems.function.owner.name", "dashboard"), r.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return e.safeExecuteClientAction(e._redirectToHelpCenter$Action, t)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        connectIntercom$Action(t) {
            var e = this.controller;
            return m.Logger.startActiveSpan("ConnectIntercom__proxy", function(r) {
                return r && (r.setAttribute("code.function", "ConnectIntercom"), r.setAttribute("outsystems.function.key", "e4effaed-1b8b-4242-a7e9-6d957abe9b56"), r.setAttribute("outsystems.function.owner.name", "dashboard"), r.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), m.Flow.tryFinally(function() {
                    return e.safeExecuteClientAction(e._connectIntercom$Action, t)
                }, function() {
                    r && r.end()
                })
            }, 0)
        }
        isPOIpending$Action(t) {
            var e = this.controller;
            return m.Logger.startActiveSpan("IsPOIpending__proxy", function(r) {
                r && (r.setAttribute("code.function", "IsPOIpending"), r.setAttribute("outsystems.function.key", "f5c7aef9-658e-4111-9e47-eec843eca7c4"), r.setAttribute("outsystems.function.owner.name", "dashboard"), r.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return e.safeExecuteClientAction(e._isPOIpending$Action, t)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(t) {
            this._onInitializeEventHandler = t
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(t) {
                var e = this.controller,
                    r = this.model,
                    o = this.idService;
                return e.onReady$Action(t)
            }), this._onReadyEventHandler
        }
        set onReadyEventHandler(t) {
            this._onReadyEventHandler = t
        }
        get onRenderEventHandler() {
            return this.hasOwnProperty("_onRenderEventHandler") || (this._onRenderEventHandler = null), this._onRenderEventHandler
        }
        set onRenderEventHandler(t) {
            this._onRenderEventHandler = t
        }
        get onDestroyEventHandler() {
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = null), this._onDestroyEventHandler
        }
        set onDestroyEventHandler(t) {
            this._onDestroyEventHandler = t
        }
        get onParametersChangedEventHandler() {
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = null), this._onParametersChangedEventHandler
        }
        set onParametersChangedEventHandler(t) {
            this._onParametersChangedEventHandler = t
        }
        get onSyncStartEventHandler() {
            return this.hasOwnProperty("_onSyncStartEventHandler") || (this._onSyncStartEventHandler = null), this._onSyncStartEventHandler
        }
        set onSyncStartEventHandler(t) {
            this._onSyncStartEventHandler = t
        }
        get onSyncCompleteEventHandler() {
            return this.hasOwnProperty("_onSyncCompleteEventHandler") || (this._onSyncCompleteEventHandler = null), this._onSyncCompleteEventHandler
        }
        set onSyncCompleteEventHandler(t) {
            this._onSyncCompleteEventHandler = t
        }
        get onSyncErrorEventHandler() {
            return this.hasOwnProperty("_onSyncErrorEventHandler") || (this._onSyncErrorEventHandler = null), this._onSyncErrorEventHandler
        }
        set onSyncErrorEventHandler(t) {
            this._onSyncErrorEventHandler = t
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(t) {
                return re.default.handleError(t, this.callContext())
            }), this._handleError
        }
        set handleError(t) {
            this._handleError = t
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return E.defaultTimeout
        }
    };
    d(i, "ControllerInner");
    let c = i;
    Ne = c
}
var Ne, Ve = new m.Controller.ControllerFactory(Ne, he);
var u = Ue(Fe());
var T = h,
    we = class we extends T.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Nickname", "nicknameVar", "Nickname", !0, !1, T.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("Email", "emailVar", "Email", !0, !1, T.DataTypes.DataTypes.Email, function() {
                return ""
            }, !1), this.attr("FullName", "fullNameVar", "FullName", !0, !1, T.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("FirstName", "firstNameVar", "FirstName", !0, !1, T.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("OnboardingStatusResponse", "onboardingStatusResponseVar", "OnboardingStatusResponse", !0, !1, T.DataTypes.DataTypes.Record, function() {
                return T.DataTypes.ImmutableBase.getData(new z)
            }, !1, z), this.attr("POIStatus", "pOIStatusVar", "POIStatus", !0, !1, T.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("POAStatus", "pOAStatusVar", "POAStatus", !0, !1, T.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("IsLoading", "isLoadingVar", "IsLoading", !0, !1, T.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("LanguageSwitcherEnabled", "languageSwitcherEnabledVar", "LanguageSwitcherEnabled", !0, !1, T.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1)].concat(T.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
d(we, "VariablesRecord");
var $ = we;
$.init();
var Te = class Te extends T.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
d(Te, "WidgetsRecord");
var Se = Te,
    H = class H extends T.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return $
        }
        static getWidgetsRecordConstructor() {
            return Se
        }
        static get hasValidationWidgets() {
            return H._hasValidationWidgetsValue === void 0 && (H._hasValidationWidgetsValue = void 0 || void 0 || void 0), H._hasValidationWidgetsValue
        }
        setInputs(i) {}
    };
d(H, "Model");
var j = H;
j._hasValidationWidgetsValue = void 0;
var Ae = new T.Model.ModelFactory(j);
var M = K.PlaceholderContent,
    ao = K.IteratorPlaceholderContent,
    vt = d(function() {
        var c = Re(function(i) {
            var a = i.model,
                t = i.controller,
                e = i.controller.idService,
                r = t.validationService,
                o = t.callContext(),
                l = Y,
                p = ee,
                k = {
                    props: i,
                    validateWidget: d(function(b) {
                        i.validateWidget(i, b)
                    }, "validateWidget")
                },
                s = a,
                D = Ie,
                w = ke,
                I = Oe();
            return u.createElement("div", i.rootNodeProperties, u.createElement(te, {
                getOwnerSpan: d(function() {
                    return I.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: d(function() {
                    return I.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Screen: "HOME",
                    IsBottomNavVisible: !0,
                    HasGuide: !1
                },
                events: {
                    _handleError: d(function(b) {
                        t.handleError(b)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: r
                },
                _idProps: {
                    service: e,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: s,
                placeholders: {
                    header: M.Empty,
                    heroContent: new M(function() {
                        return [D(R.isDesktop$Action(o).isDesktopOut, !1, this, function() {
                            return [u.createElement(f, {
                                align: 0,
                                animate: !1,
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "1"
                                },
                                _widgetRecordProvider: s
                            }, u.createElement(f, {
                                align: 0,
                                animate: !1,
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "2"
                                },
                                _widgetRecordProvider: s
                            }, u.createElement(f, {
                                align: 0,
                                animate: !1,
                                style: "BackIcon-mobile_container",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    name: "BackIcon2"
                                },
                                _widgetRecordProvider: s
                            }, u.createElement(f, {
                                align: 0,
                                animate: !1,
                                extendedEvents: {
                                    onClick: d(function() {
                                        var b = typeof o != "undefined" && o !== null ? o.clone() : t.callContext().clone();
                                        t.backbuttonOnClick$Action(t.callContext(b))
                                    }, "onClick")
                                },
                                gridProperties: {
                                    classes: "OSInline"
                                },
                                style: "back-button rotate-180",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    name: "Backbutton2"
                                },
                                _widgetRecordProvider: s
                            }, u.createElement(S, {
                                image: _.VersionedURL.getVersionedUrl("img/dashboard.icon_11_.svg"),
                                type: 0,
                                _idProps: {
                                    service: e,
                                    uuid: "5"
                                },
                                _widgetRecordProvider: s
                            })))), u.createElement(f, {
                                align: 0,
                                animate: !1,
                                style: "icon_container_desktop",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "6"
                                },
                                _widgetRecordProvider: s
                            }, u.createElement(f, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "padding-left: 20px;"
                                },
                                style: "avatar",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "7"
                                },
                                _widgetRecordProvider: s
                            }, D(a.variables.onboardingStatusResponseVar.dataAttr.profileAttr.statusAttr === "complete", !1, this, function() {
                                return [u.createElement(f, {
                                    align: 0,
                                    animate: !1,
                                    extendedProperties: {
                                        style: "height: 80px;"
                                    },
                                    gridProperties: {
                                        classes: "OSInline",
                                        width: "80px"
                                    },
                                    style: "avatar__icon back-button",
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        uuid: "8"
                                    },
                                    _widgetRecordProvider: s
                                }, u.createElement(Z, {
                                    getOwnerSpan: d(function() {
                                        return I.getChildSpan("render")
                                    }, "getOwnerSpan"),
                                    getOwnerDisposeSpan: d(function() {
                                        return I.getChildSpan("destroy")
                                    }, "getOwnerDisposeSpan"),
                                    inputs: {
                                        Name: a.getCachedValue(e.getId("f9jvb0LM+0qKIqkxH42CYg.Name"), function() {
                                            return a.variables.firstNameVar === N.nullTextIdentifier() ? E.savedAuthInfo$Action(o).responseOut.dataAttr.userAttr.emailAttr : a.variables.fullNameVar
                                        }, function() {
                                            return a.variables.firstNameVar
                                        }, function() {
                                            return a.variables.fullNameVar
                                        }),
                                        ExtendedClass: "profileicon avatar2",
                                        Shape: B.shape.rounded
                                    },
                                    events: {
                                        _handleError: d(function(b) {
                                            t.handleError(b)
                                        }, "_handleError")
                                    },
                                    _validationProps: {
                                        validationService: r
                                    },
                                    _idProps: {
                                        service: e,
                                        uuid: "9",
                                        alias: "2"
                                    },
                                    _widgetRecordProvider: s,
                                    _dependencies: []
                                }))]
                            }, function() {
                                return [u.createElement(f, {
                                    align: 0,
                                    animate: !1,
                                    extendedProperties: {
                                        style: "height: 80px;"
                                    },
                                    gridProperties: {
                                        classes: "OSInline",
                                        width: "80px"
                                    },
                                    style: "avatar__icon back-button",
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        uuid: "10"
                                    },
                                    _widgetRecordProvider: s
                                }, u.createElement(S, {
                                    image: _.VersionedURL.getVersionedUrl("img/dashboard.circleuserxl.svg"),
                                    type: 0,
                                    _idProps: {
                                        service: e,
                                        uuid: "11"
                                    },
                                    _widgetRecordProvider: s
                                }))]
                            })), u.createElement(f, {
                                align: 0,
                                animate: !1,
                                gridProperties: {
                                    marginLeft: "24px"
                                },
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "12"
                                },
                                _widgetRecordProvider: s
                            }, D(a.variables.onboardingStatusResponseVar.dataAttr.profileAttr.statusAttr === "complete", !1, this, function() {
                                return [u.createElement(L, {
                                    extendedProperties: {
                                        style: "color: #fff; font-size: 16px; font-weight: 800;"
                                    },
                                    style: "nickname_text_desktop",
                                    value: a.variables.fullNameVar,
                                    _idProps: {
                                        service: e,
                                        uuid: "13"
                                    },
                                    _widgetRecordProvider: s
                                }), u.createElement(f, {
                                    align: 0,
                                    animate: !0,
                                    extendedEvents: {
                                        onClick: d(function() {
                                            return Promise.resolve().then(function() {
                                                var b = typeof o != "undefined" && o !== null ? o.clone() : t.callContext().clone();
                                                return t.copyValue$Action(t.callContext(b))
                                            })
                                        }, "onClick")
                                    },
                                    extendedProperties: {
                                        style: "color: #FFFFFF \xB7 72%; display: flex; gap: 5px; height: 24px;"
                                    },
                                    style: "pill",
                                    visible: a.variables.nicknameVar !== "",
                                    _idProps: {
                                        service: e,
                                        uuid: "14"
                                    },
                                    _widgetRecordProvider: s
                                }, u.createElement(S, {
                                    extendedProperties: {
                                        style: "height: 18px;"
                                    },
                                    gridProperties: {
                                        width: "11px"
                                    },
                                    image: _.VersionedURL.getVersionedUrl("img/dashboard.icon_15_.svg"),
                                    type: 0,
                                    _idProps: {
                                        service: e,
                                        uuid: "15"
                                    },
                                    _widgetRecordProvider: s
                                }), u.createElement(L, {
                                    extendedProperties: {
                                        style: "color: var(--component-tag-label-color-default, rgba(255, 255, 255, 0.72)); font-size: 12px; font-style: normal; font-weight: 400;"
                                    },
                                    gridProperties: {
                                        classes: "ThemeGrid_MarginGutter"
                                    },
                                    value: "@" + a.variables.nicknameVar,
                                    _idProps: {
                                        service: e,
                                        uuid: "16"
                                    },
                                    _widgetRecordProvider: s
                                }))]
                            }, function() {
                                return [u.createElement(L, {
                                    extendedProperties: {
                                        style: "color: #fff; font-size: 16px; font-weight: 800;"
                                    },
                                    style: "nickname_text_desktop",
                                    value: P.resolve(x.TranslationsService).getMessage("Pt54xSQwgEW9LRZxBRQrRA#ValueExpression.-1397214398.1", "Welcome"),
                                    _idProps: {
                                        service: e,
                                        uuid: "17"
                                    },
                                    _widgetRecordProvider: s
                                }), u.createElement(f, {
                                    align: 0,
                                    animate: !0,
                                    extendedEvents: {
                                        onClick: d(function() {
                                            return Promise.resolve().then(function() {
                                                var b = typeof o != "undefined" && o !== null ? o.clone() : t.callContext().clone();
                                                return t.copyValue$Action(t.callContext(b))
                                            })
                                        }, "onClick")
                                    },
                                    extendedProperties: {
                                        style: "color: #FFFFFF \xB7 72%; display: flex; gap: 5px; height: 24px;"
                                    },
                                    style: "pill",
                                    visible: a.variables.nicknameVar !== "",
                                    _idProps: {
                                        service: e,
                                        uuid: "18"
                                    },
                                    _widgetRecordProvider: s
                                }, u.createElement(S, {
                                    extendedProperties: {
                                        style: "height: 18px;"
                                    },
                                    gridProperties: {
                                        width: "11px"
                                    },
                                    image: _.VersionedURL.getVersionedUrl("img/dashboard.icon_15_.svg"),
                                    type: 0,
                                    _idProps: {
                                        service: e,
                                        uuid: "19"
                                    },
                                    _widgetRecordProvider: s
                                }), u.createElement(L, {
                                    extendedProperties: {
                                        style: "color: var(--component-tag-label-color-default, rgba(255, 255, 255, 0.72)); font-size: 12px; font-style: normal; font-weight: 400;"
                                    },
                                    gridProperties: {
                                        classes: "ThemeGrid_MarginGutter"
                                    },
                                    value: "@" + a.variables.nicknameVar,
                                    _idProps: {
                                        service: e,
                                        uuid: "20"
                                    },
                                    _widgetRecordProvider: s
                                }))]
                            }))))]
                        }, function() {
                            return [u.createElement(f, {
                                align: 0,
                                animate: !1,
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "21"
                                },
                                _widgetRecordProvider: s
                            }, u.createElement(f, {
                                align: 0,
                                animate: !1,
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "22"
                                },
                                _widgetRecordProvider: s
                            }, u.createElement(f, {
                                align: 0,
                                animate: !0,
                                style: "BackIcon-mobile_container",
                                visible: a.getCachedValue(e.getId("BackIcon.Visible"), function() {
                                    return !R.isDesktop$Action(o).isDesktopOut
                                }),
                                _idProps: {
                                    service: e,
                                    name: "BackIcon"
                                },
                                _widgetRecordProvider: s
                            }, u.createElement(f, {
                                align: 0,
                                animate: !1,
                                extendedEvents: {
                                    onClick: d(function() {
                                        var b = typeof o != "undefined" && o !== null ? o.clone() : t.callContext().clone();
                                        t.backbuttonOnClick$Action(t.callContext(b))
                                    }, "onClick")
                                },
                                gridProperties: {
                                    classes: "OSInline"
                                },
                                style: "back-button",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    name: "Backbutton"
                                },
                                _widgetRecordProvider: s
                            }, u.createElement(S, {
                                image: _.VersionedURL.getVersionedUrl("img/dashboard.icon_11_.svg"),
                                type: 0,
                                _idProps: {
                                    service: e,
                                    uuid: "25"
                                },
                                _widgetRecordProvider: s
                            })))), u.createElement(f, {
                                align: 0,
                                animate: !1,
                                style: "icon_container",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "26"
                                },
                                _widgetRecordProvider: s
                            }, u.createElement(f, {
                                align: 0,
                                animate: !1,
                                style: "avatar",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "27"
                                },
                                _widgetRecordProvider: s
                            }, D(a.variables.onboardingStatusResponseVar.dataAttr.profileAttr.statusAttr === "complete", !1, this, function() {
                                return [u.createElement(f, {
                                    align: 0,
                                    animate: !1,
                                    extendedProperties: {
                                        style: "height: 80px;"
                                    },
                                    gridProperties: {
                                        classes: "OSInline",
                                        width: "80px"
                                    },
                                    style: "avatar__icon back-button",
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        uuid: "28"
                                    },
                                    _widgetRecordProvider: s
                                }, u.createElement(Z, {
                                    getOwnerSpan: d(function() {
                                        return I.getChildSpan("render")
                                    }, "getOwnerSpan"),
                                    getOwnerDisposeSpan: d(function() {
                                        return I.getChildSpan("destroy")
                                    }, "getOwnerDisposeSpan"),
                                    inputs: {
                                        Size: B.size.medium,
                                        Name: a.getCachedValue(e.getId("name.Name"), function() {
                                            return a.variables.firstNameVar === N.nullTextIdentifier() ? E.savedAuthInfo$Action(o).responseOut.dataAttr.userAttr.emailAttr : a.variables.fullNameVar
                                        }, function() {
                                            return a.variables.firstNameVar
                                        }, function() {
                                            return a.variables.fullNameVar
                                        }),
                                        Shape: B.shape.rounded,
                                        ExtendedClass: "profileicon avatar2"
                                    },
                                    events: {
                                        _handleError: d(function(b) {
                                            t.handleError(b)
                                        }, "_handleError")
                                    },
                                    _validationProps: {
                                        validationService: r
                                    },
                                    _idProps: {
                                        service: e,
                                        name: "name",
                                        alias: "3"
                                    },
                                    _widgetRecordProvider: s,
                                    _dependencies: []
                                }))]
                            }, function() {
                                return [u.createElement(f, {
                                    align: 0,
                                    animate: !1,
                                    extendedProperties: {
                                        style: "height: 80px;"
                                    },
                                    gridProperties: {
                                        classes: "OSInline",
                                        width: "80px"
                                    },
                                    style: "avatar__icon back-button",
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        uuid: "30"
                                    },
                                    _widgetRecordProvider: s
                                }, u.createElement(S, {
                                    image: _.VersionedURL.getVersionedUrl("img/dashboard.circleuserxl.svg"),
                                    type: 0,
                                    _idProps: {
                                        service: e,
                                        uuid: "31"
                                    },
                                    _widgetRecordProvider: s
                                }))]
                            }))), u.createElement(f, {
                                align: 0,
                                animate: !1,
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "32"
                                },
                                _widgetRecordProvider: s
                            }, D(a.variables.onboardingStatusResponseVar.dataAttr.profileAttr.statusAttr === "complete", !1, this, function() {
                                return [u.createElement(L, {
                                    extendedProperties: {
                                        style: "color: #fff;"
                                    },
                                    style: "nickname_text",
                                    value: a.variables.fullNameVar,
                                    _idProps: {
                                        service: e,
                                        uuid: "33"
                                    },
                                    _widgetRecordProvider: s
                                })]
                            }, function() {
                                return [u.createElement(L, {
                                    extendedProperties: {
                                        style: "color: #fff; font-size: 16px; font-weight: 800;"
                                    },
                                    style: "nickname_text",
                                    value: P.resolve(x.TranslationsService).getMessage("kejLBGIYj0yhVA1qmw4vIg#ValueExpression.-1397214398.1", "Welcome"),
                                    _idProps: {
                                        service: e,
                                        uuid: "34"
                                    },
                                    _widgetRecordProvider: s
                                })]
                            })), u.createElement(f, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "display: flex; flex-direction: row; justify-content: center; padding-bottom: 24px;"
                                },
                                style: "container-dark",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "35"
                                },
                                _widgetRecordProvider: s
                            }, u.createElement(f, {
                                align: 0,
                                animate: !1,
                                visible: !1,
                                _idProps: {
                                    service: e,
                                    uuid: "36"
                                },
                                _widgetRecordProvider: s
                            }, u.createElement(L, {
                                extendedProperties: {
                                    style: "color: #FFFFFF \xB7 72%;"
                                },
                                style: "email_text chip",
                                value: a.getCachedValue(e.getId("EZI79XpTrEK8RTilYjKAhw.Value"), function() {
                                    return E.localize$Action(P.resolve(x.TranslationsService).getMessage("nbLtW7mN_kGqHGFfgL3BCg#ValueExpression.420875151.1", "ID: {{0}}"), a.variables.fullNameVar, "", "", "", "", o).translatedStringOut
                                }, function() {
                                    return a.variables.fullNameVar
                                }),
                                _idProps: {
                                    service: e,
                                    uuid: "37"
                                },
                                _widgetRecordProvider: s
                            })), u.createElement(f, {
                                align: 0,
                                animate: !0,
                                extendedEvents: {
                                    onClick: d(function() {
                                        return Promise.resolve().then(function() {
                                            var b = typeof o != "undefined" && o !== null ? o.clone() : t.callContext().clone();
                                            return t.copyValue$Action(t.callContext(b))
                                        })
                                    }, "onClick")
                                },
                                extendedProperties: {
                                    style: "color: #FFFFFF \xB7 72%; display: flex; gap: 5px; height: 24px;"
                                },
                                style: "pill",
                                visible: a.variables.nicknameVar !== "",
                                _idProps: {
                                    service: e,
                                    uuid: "38"
                                },
                                _widgetRecordProvider: s
                            }, u.createElement(S, {
                                extendedProperties: {
                                    style: "height: 18px;"
                                },
                                gridProperties: {
                                    width: "11px"
                                },
                                image: _.VersionedURL.getVersionedUrl("img/dashboard.icon_15_.svg"),
                                type: 0,
                                _idProps: {
                                    service: e,
                                    uuid: "39"
                                },
                                _widgetRecordProvider: s
                            }), u.createElement(L, {
                                extendedProperties: {
                                    style: "color: var(--component-tag-label-color-default, rgba(255, 255, 255, 0.72)); font-size: 12px; font-style: normal; font-weight: 400;"
                                },
                                gridProperties: {
                                    classes: "ThemeGrid_MarginGutter"
                                },
                                value: "@" + a.variables.nicknameVar,
                                _idProps: {
                                    service: e,
                                    uuid: "40"
                                },
                                _widgetRecordProvider: s
                            }))))]
                        })]
                    }),
                    mainContent: new M(function() {
                        return [u.createElement(f, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "padding-bottom: 50px;"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "41"
                            },
                            _widgetRecordProvider: s
                        }, u.createElement(f, {
                            align: 0,
                            animate: !1,
                            style: "section_title",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "42"
                            },
                            _widgetRecordProvider: s
                        }, u.createElement(O, {
                            style: "title_style",
                            text: [w(p("oQ80g0zk20Knlwawyu5oRA#Value", "About you"))],
                            _idProps: {
                                service: e,
                                uuid: "43"
                            },
                            _widgetRecordProvider: s
                        })), u.createElement(U, {
                            enabled: !0,
                            transition: W.createTransition(W.TransitionAnimation.Default),
                            url: _.generateScreenURL("dashboard", "details", {}),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "44"
                            },
                            _widgetRecordProvider: s
                        }, u.createElement(f, {
                            align: 0,
                            animate: !1,
                            style: "main-item",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "45"
                            },
                            _widgetRecordProvider: s
                        }, u.createElement(f, {
                            align: 0,
                            animate: !1,
                            style: "list-content",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "46"
                            },
                            _widgetRecordProvider: s
                        }, u.createElement(S, {
                            image: _.VersionedURL.getVersionedUrl("img/dashboard.iconLeft_5_.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "47"
                            },
                            _widgetRecordProvider: s
                        }), u.createElement(f, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "48"
                            },
                            _widgetRecordProvider: s
                        }, u.createElement(O, {
                            extendedProperties: {
                                style: "color: #222; font-size: 16px;"
                            },
                            text: [w(p("ccdAmxBwJkGeAx0MRB8aoA#Value", "Personal details"))],
                            _idProps: {
                                service: e,
                                uuid: "49"
                            },
                            _widgetRecordProvider: s
                        }), u.createElement(f, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "50"
                            },
                            _widgetRecordProvider: s
                        }, D(a.variables.onboardingStatusResponseVar.dataAttr.profileAttr.statusAttr === "incomplete", !1, this, function() {
                            return [u.createElement(L, {
                                extendedProperties: {
                                    style: "color: rgba(0, 0, 0, 0.48); font-size: 12px; font-weight: 400;"
                                },
                                value: P.resolve(x.TranslationsService).getMessage("IAeq+gjbqkWCOfl_xRLNTQ#ValueExpression.983442814.1", "Incomplete"),
                                _idProps: {
                                    service: e,
                                    uuid: "51"
                                },
                                _widgetRecordProvider: s
                            })]
                        }, function() {
                            return []
                        })))), u.createElement(S, {
                            extendedProperties: {
                                style: "padding-inline-end: 30px;"
                            },
                            image: _.VersionedURL.getVersionedUrl("img/dashboard.iconChevron_1_.svg"),
                            style: "rotate-180 chevron-image",
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "52"
                            },
                            _widgetRecordProvider: s
                        }))), u.createElement(f, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "border-bottom: 1px solid #e5e7eb; height: 2px; margin-inline-start: 65px;"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "53"
                            },
                            _widgetRecordProvider: s
                        }), u.createElement(U, {
                            enabled: !0,
                            extendedProperties: {
                                style: "border-color: #222;"
                            },
                            transition: W.createTransition(W.TransitionAnimation.Default),
                            url: _.generateScreenURL("dashboard", "address", {}),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "54"
                            },
                            _widgetRecordProvider: s
                        }, u.createElement(f, {
                            align: 0,
                            animate: !1,
                            style: "main-item",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "55"
                            },
                            _widgetRecordProvider: s
                        }, u.createElement(f, {
                            align: 0,
                            animate: !1,
                            style: "list-content",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "56"
                            },
                            _widgetRecordProvider: s
                        }, u.createElement(S, {
                            image: _.VersionedURL.getVersionedUrl("img/dashboard.iconLeft_6_.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "57"
                            },
                            _widgetRecordProvider: s
                        }), u.createElement(O, {
                            extendedProperties: {
                                style: "color: #222; font-size: 16px;"
                            },
                            text: [w(p("eichUFUDEkW6OvPLlQqeyg#Value", "Home address"))],
                            _idProps: {
                                service: e,
                                uuid: "58"
                            },
                            _widgetRecordProvider: s
                        })), u.createElement(S, {
                            extendedProperties: {
                                style: "padding-inline-end: 30px;"
                            },
                            image: _.VersionedURL.getVersionedUrl("img/dashboard.iconChevron_1_.svg"),
                            style: "rotate-180 chevron-image",
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "59"
                            },
                            _widgetRecordProvider: s
                        }))), u.createElement(f, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "border-bottom: 1px solid #e5e7eb; height: 2px; margin-inline-start: 65px;"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "60"
                            },
                            _widgetRecordProvider: s
                        }), u.createElement(f, {
                            align: 0,
                            animate: !1,
                            style: "section_title",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "61"
                            },
                            _widgetRecordProvider: s
                        }, u.createElement(O, {
                            style: "title_style",
                            text: [w(p("ky6Dm7fdPkyH37yOtA0dhQ#Value", "Verification"))],
                            _idProps: {
                                service: e,
                                uuid: "62"
                            },
                            _widgetRecordProvider: s
                        })), u.createElement(U, {
                            enabled: !a.variables.isLoadingVar,
                            onClick: d(function() {
                                var b = typeof o != "undefined" && o !== null ? o.clone() : t.callContext().clone();
                                t.isPOIpending$Action(t.callContext(b))
                            }, "onClick"),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "63"
                            },
                            _widgetRecordProvider: s
                        }, u.createElement(f, {
                            align: 0,
                            animate: !1,
                            style: "main-item",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "64"
                            },
                            _widgetRecordProvider: s
                        }, u.createElement(f, {
                            align: 0,
                            animate: !1,
                            style: "list-content",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "65"
                            },
                            _widgetRecordProvider: s
                        }, u.createElement(S, {
                            image: _.VersionedURL.getVersionedUrl("img/dashboard.iconLeft_8_.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "66"
                            },
                            _widgetRecordProvider: s
                        }), u.createElement(f, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "67"
                            },
                            _widgetRecordProvider: s
                        }, u.createElement(O, {
                            extendedProperties: {
                                style: "color: #222; font-size: 16px;"
                            },
                            text: [w(p("qcv_hi5hN0y7VubFwhgOqg#Value", "Proof of identity"))],
                            _idProps: {
                                service: e,
                                uuid: "68"
                            },
                            _widgetRecordProvider: s
                        }), u.createElement(f, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "69"
                            },
                            _widgetRecordProvider: s
                        }, D(a.variables.isLoadingVar, !1, this, function() {
                            return [u.createElement(f, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "height: 24px;"
                                },
                                gridProperties: {
                                    classes: "OSInline",
                                    width: "75%"
                                },
                                style: "skeleton",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "70"
                                },
                                _widgetRecordProvider: s
                            })]
                        }, function() {
                            return [u.createElement(L, {
                                extendedProperties: {
                                    style: "font-size: 12px; font-weight: 400;"
                                },
                                style: a.getCachedValue(e.getId("jou_Qh1OZ0SrcjtK8BPeGA.Style"), function() {
                                    return E.getClientKYCStatusDisplay$Action(a.variables.pOIStatusVar, o).statusDisplayOut === "Verified" ? "status-success" : E.getClientKYCStatusDisplay$Action(a.variables.pOIStatusVar, o).statusDisplayOut === "In review" ? "status-review" : E.getClientKYCStatusDisplay$Action(a.variables.pOIStatusVar, o).statusDisplayOut === "Failed" ? "status-failed" : "status-Unverified"
                                }, function() {
                                    return a.variables.pOIStatusVar
                                }),
                                value: a.getCachedValue(e.getId("jou_Qh1OZ0SrcjtK8BPeGA.Value"), function() {
                                    return N.toLower(E.getClientKYCStatusDisplay$Action(a.variables.pOIStatusVar, o).statusDisplayOut) === "verified" ? P.resolve(x.TranslationsService).getMessage("eZqNdo5RS0+ys7wRCn0_+Q#ValueExpression.-1929739544.1", "Verified") : N.toLower(E.getClientKYCStatusDisplay$Action(a.variables.pOIStatusVar, o).statusDisplayOut) === "in review" ? P.resolve(x.TranslationsService).getMessage("eZqNdo5RS0+ys7wRCn0_+Q#ValueExpression.1331383955.1", "In review") : N.toLower(E.getClientKYCStatusDisplay$Action(a.variables.pOIStatusVar, o).statusDisplayOut) === "failed" ? P.resolve(x.TranslationsService).getMessage("eZqNdo5RS0+ys7wRCn0_+Q#ValueExpression.2096857181.1", "Failed") : N.toLower(E.getClientKYCStatusDisplay$Action(a.variables.pOIStatusVar, o).statusDisplayOut) === "unverified" ? P.resolve(x.TranslationsService).getMessage("eZqNdo5RS0+ys7wRCn0_+Q#ValueExpression.1525309569.1", "Unverified") : E.getClientKYCStatusDisplay$Action(a.variables.pOIStatusVar, o).statusDisplayOut
                                }, function() {
                                    return a.variables.pOIStatusVar
                                }),
                                _idProps: {
                                    service: e,
                                    uuid: "71"
                                },
                                _widgetRecordProvider: s
                            })]
                        })))), u.createElement(S, {
                            extendedProperties: {
                                style: "padding-inline-end: 30px;"
                            },
                            image: _.VersionedURL.getVersionedUrl("img/dashboard.iconChevron_1_.svg"),
                            style: "rotate-180 chevron-image",
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "72"
                            },
                            _widgetRecordProvider: s
                        }))), u.createElement(f, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "border-bottom: 1px solid #e5e7eb; height: 2px; margin-inline-start: 65px;"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "73"
                            },
                            _widgetRecordProvider: s
                        }), u.createElement(U, {
                            enabled: !0,
                            transition: W.createTransition(W.TransitionAnimation.Default),
                            url: _.generateScreenURL("dashboard", "kyc/address", {}),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "74"
                            },
                            _widgetRecordProvider: s
                        }, u.createElement(f, {
                            align: 0,
                            animate: !1,
                            style: "main-item",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "75"
                            },
                            _widgetRecordProvider: s
                        }, u.createElement(f, {
                            align: 0,
                            animate: !1,
                            style: "list-content",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "76"
                            },
                            _widgetRecordProvider: s
                        }, u.createElement(S, {
                            image: _.VersionedURL.getVersionedUrl("img/dashboard.iconLeft_9_.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "77"
                            },
                            _widgetRecordProvider: s
                        }), u.createElement(f, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "78"
                            },
                            _widgetRecordProvider: s
                        }, u.createElement(O, {
                            extendedProperties: {
                                style: "color: #222; font-size: 16px;"
                            },
                            text: [w(p("j_lF7tuE4EC6dV_gaU6hjA#Value", "Proof of address"))],
                            _idProps: {
                                service: e,
                                uuid: "79"
                            },
                            _widgetRecordProvider: s
                        }), u.createElement(f, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "80"
                            },
                            _widgetRecordProvider: s
                        }, D(a.variables.isLoadingVar, !1, this, function() {
                            return [u.createElement(f, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "height: 24px;"
                                },
                                gridProperties: {
                                    classes: "OSInline",
                                    width: "75%"
                                },
                                style: "skeleton",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "81"
                                },
                                _widgetRecordProvider: s
                            })]
                        }, function() {
                            return [u.createElement(L, {
                                extendedProperties: {
                                    style: "font-size: 12px; font-weight: 400;"
                                },
                                style: a.getCachedValue(e.getId("wZ9FJRIkLEGSMsBtrLvsKw.Style"), function() {
                                    return E.getClientKYCStatusDisplay$Action(a.variables.pOAStatusVar, o).statusDisplayOut === "Verified" ? "status-success" : E.getClientKYCStatusDisplay$Action(a.variables.pOAStatusVar, o).statusDisplayOut === "In review" ? "status-review" : E.getClientKYCStatusDisplay$Action(a.variables.pOAStatusVar, o).statusDisplayOut === "Failed" ? "status-failed" : "status-Unverified"
                                }, function() {
                                    return a.variables.pOAStatusVar
                                }),
                                value: a.getCachedValue(e.getId("wZ9FJRIkLEGSMsBtrLvsKw.Value"), function() {
                                    return N.toLower(E.getClientKYCStatusDisplay$Action(a.variables.pOAStatusVar, o).statusDisplayOut) === "verified" ? P.resolve(x.TranslationsService).getMessage("T_W45EHI_0GPkcO6EuXwug#ValueExpression.-1929739544.1", "Verified") : N.toLower(E.getClientKYCStatusDisplay$Action(a.variables.pOAStatusVar, o).statusDisplayOut) === "in review" ? P.resolve(x.TranslationsService).getMessage("T_W45EHI_0GPkcO6EuXwug#ValueExpression.1331383955.1", "In review") : N.toLower(E.getClientKYCStatusDisplay$Action(a.variables.pOAStatusVar, o).statusDisplayOut) === "failed" ? P.resolve(x.TranslationsService).getMessage("T_W45EHI_0GPkcO6EuXwug#ValueExpression.2096857181.1", "Failed") : N.toLower(E.getClientKYCStatusDisplay$Action(a.variables.pOAStatusVar, o).statusDisplayOut) === "unverified" ? P.resolve(x.TranslationsService).getMessage("T_W45EHI_0GPkcO6EuXwug#ValueExpression.1525309569.1", "Unverified") : E.getClientKYCStatusDisplay$Action(a.variables.pOAStatusVar, o).statusDisplayOut
                                }, function() {
                                    return a.variables.pOAStatusVar
                                }),
                                _idProps: {
                                    service: e,
                                    uuid: "82"
                                },
                                _widgetRecordProvider: s
                            })]
                        })))), u.createElement(S, {
                            extendedProperties: {
                                style: "padding-inline-end: 30px;"
                            },
                            image: _.VersionedURL.getVersionedUrl("img/dashboard.iconChevron_1_.svg"),
                            style: "rotate-180 chevron-image",
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "83"
                            },
                            _widgetRecordProvider: s
                        }))), u.createElement(f, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "border-bottom: 1px solid #e5e7eb; height: 2px; margin-inline-start: 65px;"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "84"
                            },
                            _widgetRecordProvider: s
                        }), u.createElement(f, {
                            align: 0,
                            animate: !1,
                            style: "section_title",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "85"
                            },
                            _widgetRecordProvider: s
                        }, u.createElement(O, {
                            style: "title_style",
                            text: [w(p("PljL8_i5VUS2Lu1WA74cGg#Value", "Settings"))],
                            _idProps: {
                                service: e,
                                uuid: "86"
                            },
                            _widgetRecordProvider: s
                        })), u.createElement(U, {
                            enabled: !0,
                            extendedProperties: {
                                style: "border-color: #222;"
                            },
                            transition: W.createTransition(W.TransitionAnimation.Default),
                            url: _.generateScreenURL("dashboard", "verify-reset-password", {
                                type: xe.ServerDataConverter.to("email", A.DataTypes.Text)
                            }),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "87"
                            },
                            _widgetRecordProvider: s
                        }, u.createElement(f, {
                            align: 0,
                            animate: !1,
                            style: "main-item",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "88"
                            },
                            _widgetRecordProvider: s
                        }, u.createElement(f, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "border-color: #222;"
                            },
                            style: "list-content",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "89"
                            },
                            _widgetRecordProvider: s
                        }, u.createElement(S, {
                            image: _.VersionedURL.getVersionedUrl("img/dashboard.iconLeft_10_.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "90"
                            },
                            _widgetRecordProvider: s
                        }), u.createElement(O, {
                            extendedProperties: {
                                style: "border-color: #222; color: #222; font-size: 16px;"
                            },
                            text: [w(p("143FeSKoJkqIe+8S_aFYgw#Value", "Password"))],
                            _idProps: {
                                service: e,
                                uuid: "91"
                            },
                            _widgetRecordProvider: s
                        })), u.createElement(S, {
                            extendedProperties: {
                                style: "padding-inline-end: 30px;"
                            },
                            image: _.VersionedURL.getVersionedUrl("img/dashboard.iconChevron_1_.svg"),
                            style: "rotate-180 chevron-image",
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "92"
                            },
                            _widgetRecordProvider: s
                        }))), u.createElement(f, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "border-bottom: 1px solid #e5e7eb; height: 2px; margin-inline-start: 65px;"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "93"
                            },
                            _widgetRecordProvider: s
                        }), u.createElement(oe, {
                            getOwnerSpan: d(function() {
                                return I.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: d(function() {
                                return I.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: d(function(b) {
                                    t.handleError(b)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: r
                            },
                            _idProps: {
                                service: e,
                                uuid: "94",
                                alias: "4"
                            },
                            _widgetRecordProvider: s,
                            placeholders: {
                                content: new M(function() {
                                    return [u.createElement(f, {
                                        align: 0,
                                        animate: !0,
                                        style: "main-item cursor-pointer",
                                        visible: a.variables.languageSwitcherEnabledVar,
                                        _idProps: {
                                            service: e,
                                            uuid: "95"
                                        },
                                        _widgetRecordProvider: s
                                    }, u.createElement(f, {
                                        align: 0,
                                        animate: !1,
                                        style: "list-content",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "96"
                                        },
                                        _widgetRecordProvider: s
                                    }, u.createElement(S, {
                                        image: _.VersionedURL.getVersionedUrl("img/dashboard.iconLeft_11_.svg"),
                                        type: 0,
                                        _idProps: {
                                            service: e,
                                            uuid: "97"
                                        },
                                        _widgetRecordProvider: s
                                    }), u.createElement(O, {
                                        extendedProperties: {
                                            style: "border-color: #000; color: #222; font-size: 16px;"
                                        },
                                        text: [w(p("4IO49Ta8OEO2AE5sYZ5mCw#Value", "Language"))],
                                        _idProps: {
                                            service: e,
                                            uuid: "98"
                                        },
                                        _widgetRecordProvider: s
                                    })), u.createElement(S, {
                                        extendedProperties: {
                                            style: "padding-inline-end: 30px;"
                                        },
                                        image: _.VersionedURL.getVersionedUrl("img/dashboard.iconChevron_1_.svg"),
                                        style: "rotate-180 chevron-image",
                                        type: 0,
                                        _idProps: {
                                            service: e,
                                            uuid: "99"
                                        },
                                        _widgetRecordProvider: s
                                    }))]
                                })
                            },
                            _dependencies: [l(a.variables.languageSwitcherEnabledVar)]
                        }), u.createElement(f, {
                            align: 0,
                            animate: !0,
                            extendedProperties: {
                                style: "border-bottom: 1px solid #e5e7eb; height: 2px; margin-inline-start: 65px;"
                            },
                            visible: a.variables.languageSwitcherEnabledVar,
                            _idProps: {
                                service: e,
                                uuid: "100"
                            },
                            _widgetRecordProvider: s
                        }), u.createElement(f, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "background: #eef2f6; divider {width: 100%; height: 3px;"
                            },
                            visible: !1,
                            _idProps: {
                                service: e,
                                uuid: "101"
                            },
                            _widgetRecordProvider: s
                        }), u.createElement(f, {
                            align: 0,
                            animate: !0,
                            style: "section_title",
                            visible: a.getCachedValue(e.getId("gUhAb_y90kanGdeINMm8og.Visible"), function() {
                                return R.isPhone$Action(o).isPhoneOut || R.isTablet$Action(o).isTabletOut
                            }),
                            _idProps: {
                                service: e,
                                uuid: "102"
                            },
                            _widgetRecordProvider: s
                        }, u.createElement(O, {
                            style: "title_style",
                            text: [w(p("g76_92uzwUW01UFWJWwQlQ#Value", "Support"))],
                            _idProps: {
                                service: e,
                                uuid: "103"
                            },
                            _widgetRecordProvider: s
                        })), u.createElement(f, {
                            align: 0,
                            animate: !0,
                            style: "main-item",
                            visible: a.getCachedValue(e.getId("HFbpT7HuEkGZUrbBbp91hA.Visible"), function() {
                                return R.isPhone$Action(o).isPhoneOut || R.isTablet$Action(o).isTabletOut
                            }),
                            _idProps: {
                                service: e,
                                uuid: "104"
                            },
                            _widgetRecordProvider: s
                        }, u.createElement(f, {
                            align: 0,
                            animate: !1,
                            extendedEvents: {
                                onClick: d(function() {
                                    var b = typeof o != "undefined" && o !== null ? o.clone() : t.callContext().clone();
                                    t.redirectToHelpCenter$Action(t.callContext(b))
                                }, "onClick")
                            },
                            style: "list-content",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "105"
                            },
                            _widgetRecordProvider: s
                        }, u.createElement(S, {
                            extendedProperties: {
                                style: "height: 24px;"
                            },
                            gridProperties: {
                                width: "24px"
                            },
                            image: _.VersionedURL.getVersionedUrl("img/dashboard.iconLeft_3_.png"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "106"
                            },
                            _widgetRecordProvider: s
                        }), u.createElement(O, {
                            extendedProperties: {
                                style: "font-size: 16px;"
                            },
                            text: [w(p("HJsvSvQAf0elC8g1TEPlYA#Value", "Help centre"))],
                            _idProps: {
                                service: e,
                                uuid: "107"
                            },
                            _widgetRecordProvider: s
                        })), u.createElement(S, {
                            extendedProperties: {
                                style: "padding-inline-end: 30px;"
                            },
                            image: _.VersionedURL.getVersionedUrl("img/dashboard.iconChevron_1_.svg"),
                            style: "rotate-180 chevron-image",
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "108"
                            },
                            _widgetRecordProvider: s
                        })), u.createElement(f, {
                            align: 0,
                            animate: !0,
                            extendedProperties: {
                                style: "border-bottom: 1px solid #e5e7eb; height: 2px; margin-inline-start: 65px;"
                            },
                            visible: a.getCachedValue(e.getId("ZTGDOwBcK0q4c4vkMCQksw.Visible"), function() {
                                return R.isPhone$Action(o).isPhoneOut || R.isTablet$Action(o).isTabletOut
                            }),
                            _idProps: {
                                service: e,
                                uuid: "109"
                            },
                            _widgetRecordProvider: s
                        }), u.createElement(f, {
                            align: 0,
                            animate: !0,
                            style: "main-item",
                            visible: a.getCachedValue(e.getId("60ib9e6bA0Wlu4yi94SJOg.Visible"), function() {
                                return R.isPhone$Action(o).isPhoneOut || R.isTablet$Action(o).isTabletOut
                            }),
                            _idProps: {
                                service: e,
                                uuid: "110"
                            },
                            _widgetRecordProvider: s
                        }, u.createElement(f, {
                            align: 0,
                            animate: !1,
                            extendedEvents: {
                                onClick: d(function() {
                                    return Promise.resolve().then(function() {
                                        var b = typeof o != "undefined" && o !== null ? o.clone() : t.callContext().clone();
                                        return t.connectIntercom$Action(t.callContext(b))
                                    })
                                }, "onClick")
                            },
                            style: "list-content",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "111"
                            },
                            _widgetRecordProvider: s
                        }, u.createElement(S, {
                            image: _.VersionedURL.getVersionedUrl("img/dashboard.iconLeft_12_.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "112"
                            },
                            _widgetRecordProvider: s
                        }), u.createElement(O, {
                            extendedProperties: {
                                style: "font-size: 16px;"
                            },
                            text: [w(p("DvEj62PcXkSwcXZoSxKtUg#Value", "Live chat"))],
                            _idProps: {
                                service: e,
                                uuid: "113"
                            },
                            _widgetRecordProvider: s
                        })), u.createElement(S, {
                            extendedProperties: {
                                style: "padding-inline-end: 30px;"
                            },
                            image: _.VersionedURL.getVersionedUrl("img/dashboard.iconChevron_1_.svg"),
                            style: "rotate-180 chevron-image",
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "114"
                            },
                            _widgetRecordProvider: s
                        })), u.createElement(f, {
                            align: 0,
                            animate: !0,
                            extendedProperties: {
                                style: "border-bottom: 1px solid #e5e7eb; height: 2px; margin-inline-start: 65px;"
                            },
                            visible: a.getCachedValue(e.getId("2UNdFeF9JESA0NS+c1VzTA.Visible"), function() {
                                return R.isPhone$Action(o).isPhoneOut || R.isTablet$Action(o).isTabletOut
                            }),
                            _idProps: {
                                service: e,
                                uuid: "115"
                            },
                            _widgetRecordProvider: s
                        }), u.createElement(f, {
                            align: 0,
                            animate: !1,
                            style: "main-item",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "116"
                            },
                            _widgetRecordProvider: s
                        }, u.createElement(f, {
                            align: 0,
                            animate: !1,
                            extendedEvents: {
                                onClick: d(function() {
                                    return Promise.resolve().then(function() {
                                        var b = typeof o != "undefined" && o !== null ? o.clone() : t.callContext().clone();
                                        return t.logOutOnClick$Action(t.callContext(b))
                                    })
                                }, "onClick")
                            },
                            style: "list-content",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "117"
                            },
                            _widgetRecordProvider: s
                        }, u.createElement(S, {
                            extendedProperties: {
                                style: "height: 24px;"
                            },
                            gridProperties: {
                                width: "24px"
                            },
                            image: _.VersionedURL.getVersionedUrl("img/dashboard.iconLeft_2_2.png"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "118"
                            },
                            _widgetRecordProvider: s
                        }), u.createElement(O, {
                            extendedProperties: {
                                style: "border-color: #ff4450; color: #ff4450; font-size: 16px;"
                            },
                            text: [w(p("XaXL7pzEwEu3kkGo8zrgmQ#Value", "Log out"))],
                            _idProps: {
                                service: e,
                                uuid: "119"
                            },
                            _widgetRecordProvider: s
                        }))))]
                    })
                },
                _dependencies: [l(a.variables.languageSwitcherEnabledVar), l(a.variables.pOAStatusVar), l(a.variables.pOIStatusVar), l(a.variables.isLoadingVar), l(a.variables.nicknameVar), l(a.variables.fullNameVar), l(a.variables.firstNameVar), l(a.variables.onboardingStatusResponseVar.dataAttr.profileAttr.statusAttr)]
            }))
        }, {
            topLevelComponent: !0,
            getAttributes: d(function() {
                return {
                    codeFunction: "Profile",
                    functionKey: "be7c0f14-509f-4131-8491-9a0d04b7e686",
                    functionOwnerName: "dashboard",
                    functionOwnerKey: "bbed91b8-a741-4694-b61f-b0ef761ba4e2",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "UserProfile.Profile",
            modelFactory: Ae,
            controllerFactory: Ve,
            getTitle: d(function(i) {
                var a = i.model,
                    t = i.controller,
                    e = i.controller.idService,
                    r = t.validationService,
                    o = t.callContext(),
                    l = Y,
                    p = ee,
                    k = {
                        props: i,
                        validateWidget: d(function(s) {
                            i.validateWidget(i, s)
                        }, "validateWidget")
                    };
                return P.resolve(x.TranslationsService).getMessage("FA98vp9QMUGEkZoNBLfmhg#TitleExpression.1355227529.1", "Profile")
            }, "getTitle")
        });
        return c.getCssDependencies = function() {
            return ["css/OutSystemsUI.OutSystemsUI.css", "css/dashboard.DerivV2.css", "css/dashboard.UserProfile.Profile.css", "css/dashboard.DerivV2.extra.css", "css/OutSystemsReactWidgets.css"]
        }, c.getJsDependencies = function() {
            return []
        }, c.getBlocks = function() {
            return [te, Z, oe]
        }, c
    }, "componentFactory"),
    bt = vt();
export {
    Ve as controllerModule, Ae as modelModule, bt as viewModule, re as webFlowControllerModule
};