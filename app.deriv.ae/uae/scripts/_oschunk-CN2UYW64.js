import {
    W as g,
    c as i,
    v as m
} from "./_oschunk-M5BUVJ72.js";
var y = {
    staticEntities: {}
};
y.staticEntities.mobile_OperatingSystem = {};
Object.defineProperty(y.staticEntities.mobile_OperatingSystem, "other", {
    get: i(function() {
        return "Other"
    }, "get")
});
Object.defineProperty(y.staticEntities.mobile_OperatingSystem, "windows", {
    get: i(function() {
        return "Windows"
    }, "get")
});
Object.defineProperty(y.staticEntities.mobile_OperatingSystem, "iOS", {
    get: i(function() {
        return "iOS"
    }, "get")
});
Object.defineProperty(y.staticEntities.mobile_OperatingSystem, "android", {
    get: i(function() {
        return "Android"
    }, "get")
});
y.staticEntities.mobile_Framework = {};
Object.defineProperty(y.staticEntities.mobile_Framework, "none", {
    get: i(function() {
        return 3
    }, "get")
});
Object.defineProperty(y.staticEntities.mobile_Framework, "cordova", {
    get: i(function() {
        return 2
    }, "get")
});
Object.defineProperty(y.staticEntities.mobile_Framework, "capacitor", {
    get: i(function() {
        return 1
    }, "get")
});
var b = y.staticEntities;
var D = class D extends m.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("ErrorCode", "errorCodeAttr", "ErrorCode", !1, !1, m.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("ErrorMessage", "errorMessageAttr", "ErrorMessage", !1, !1, m.DataTypes.Text, function() {
            return ""
        }, !0)].concat(m.GenericRecord.attributesToDeclare.call(this))
    }
    static get $runtimeName() {
        return "Error"
    }
};
i(D, "ST_e17c093645b6df840d3423fc6893e70fStructure");
var A = D;
A.init();
var S = class S extends m.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Id", "idAttr", "Id", !0, !1, m.DataTypes.Integer, function() {
            return 0
        }, !0), this.attr("Label", "labelAttr", "Label", !0, !1, m.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Order", "orderAttr", "Order", !0, !1, m.DataTypes.Integer, function() {
            return 0
        }, !0), this.attr("Is_Active", "is_ActiveAttr", "Is_Active", !0, !1, m.DataTypes.Boolean, function() {
            return !1
        }, !0)].concat(m.GenericRecord.attributesToDeclare.call(this))
    }
    static get $runtimeName() {
        return "Mobile_Framework"
    }
};
i(S, "EN_bb686eb57343bcf4040084fac21e7ee9EntityRecord");
var v = S;
v.init();
var w = class w extends m.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("PluginName", "pluginNameAttr", "PluginName", !1, !1, m.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("MobileOperatingSystemId", "mobileOperatingSystemIdAttr", "MobileOperatingSystemId", !1, !1, m.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("License", "licenseAttr", "License", !1, !1, m.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("SubscriptionKey", "subscriptionKeyAttr", "SubscriptionKey", !1, !1, m.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("SubscriptionToken", "subscriptionTokenAttr", "SubscriptionToken", !1, !1, m.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("UpdatedBy", "updatedByAttr", "UpdatedBy", !1, !1, m.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("LastUpdate", "lastUpdateAttr", "LastUpdate", !1, !1, m.DataTypes.DateTime, function() {
            return m.DateTime.defaultValue
        }, !0)].concat(m.GenericRecord.attributesToDeclare.call(this))
    }
    static get $runtimeName() {
        return "PluginLicense"
    }
};
i(w, "ST_3695e3f105edfc9bb9d7bc5568b9b2f5Structure");
var T = w;
T.init();
var P = class P extends m.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Label", "labelAttr", "Label", !0, !1, m.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Order", "orderAttr", "Order", !0, !1, m.DataTypes.Integer, function() {
            return 0
        }, !0), this.attr("Is_Active", "is_ActiveAttr", "Is_Active", !0, !1, m.DataTypes.Boolean, function() {
            return !1
        }, !0)].concat(m.GenericRecord.attributesToDeclare.call(this))
    }
    static get $runtimeName() {
        return "Mobile_OperatingSystem"
    }
};
i(P, "EN_589575018eea7445e67437e5e372d5fbEntityRecord");
var C = P;
C.init();

function x(o, t, s, f) {
    console.log("> " + o.Component + ": " + o.Text)
}
i(x, "default");

function O(o, t, s, f) {
    o.deviceHwId = device.uuid
}
i(O, "default");

function I(o, t, s, f) {
    typeof Capacitor != "undefined" ? o.MobileFramework = "capacitor" : typeof cordova != "undefined" ? o.MobileFramework = "cordova" : o.MobileFramework = "none"
}
i(I, "default");

function N(o, t, s, f) {
    o.PlatformId = cordova.platformId
}
i(N, "default");

function L(o, t, s, f) {
    o.PlatformId = Capacitor.getPlatform()
}
i(L, "default");

function k(o, t, s, f) {
    o.UserAgent = navigator.userAgent
}
i(k, "default");

function E(o, t, s, f) {
    return new Promise(function(l, n) {
        t.RequireScript(o.ScriptURL).then(function() {
            l()
        })
    })
}
i(E, "default");

function G(o, t, s, f) {
    typeof cordova == "undefined" ? o.CordovaLoaded = !1 : o.CordovaLoaded = !0
}
i(G, "default");
var e = g,
    V = class V extends e.Controller.BaseModuleController {
        constructor(t, s, f, l) {
            super(t, s, f, l)
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
i(V, "Controller");
var $ = V,
    a = new $,
    u = a;
a.consoleLog$Action = function(o, t, s) {
    return e.Logger.startActiveSpan("ConsoleLog", function(f) {
        f && (f.setAttribute("code.function", "ConsoleLog"), f.setAttribute("outsystems.function.key", "c35d27cb-a320-4eeb-83d3-d469c3192e77"), f.setAttribute("outsystems.function.owner.name", "CommonPlugin"), f.setAttribute("outsystems.function.owner.key", "8b0ceaeb-05b8-4921-bf46-e0d6c66e8472"), f.setAttribute("outsystems.function.type", "CLIENT_ACTION"));
        try {
            s = u.callContext(s);
            var l = new e.DataTypes.VariableHolder(new(u.constructor.getVariableGroupType("CommonPlugin.ConsoleLog$vars")));
            l.value.componentInLocal = o, l.value.textInLocal = t;
            var n = new e.DataTypes.VariableHolder(new e.DataTypes.ErrorHandlerOutputType);
            try {
                e.Logger.startActiveSpan("WriteToConsole", function(r) {
                    r && (r.setAttribute("code.function", "WriteToConsole"), r.setAttribute("outsystems.function.key", "bfb166a0-02f5-4750-9981-faaca436aa60"), r.setAttribute("outsystems.function.owner.name", "CommonPlugin"), r.setAttribute("outsystems.function.owner.key", "8b0ceaeb-05b8-4921-bf46-e0d6c66e8472"), r.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                    try {
                        return u.safeExecuteJSNode(x, "WriteToConsole", "ConsoleLog", {
                            Component: e.DataConversion.JSNodeParamConverter.to(l.value.componentInLocal, e.DataTypes.DataTypes.Text),
                            Text: e.DataConversion.JSNodeParamConverter.to(l.value.textInLocal, e.DataTypes.DataTypes.Text)
                        }, function(c) {}, {}, {})
                    } finally {
                        r && r.end()
                    }
                }, 1)
            } catch (r) {
                (function() {
                    if (e.Logger.debug("ConsoleLog.ConsoleLog", e.Exceptions.getMessage(r)), !e.Exceptions.isSystem(r)) return e.Logger.error(null, r, null, null, 1), n.value.exceptionMessageAttr = e.Exceptions.getMessage(r), e.Logger.startActiveSpan("AllExceptions", function(c) {
                        c && (c.setAttribute("code.function", "AllExceptions"), c.setAttribute("outsystems.function.key", "9bf65634-9c93-41b7-8831-bc5aed552f65"), c.setAttribute("outsystems.function.owner.name", "CommonPlugin"), c.setAttribute("outsystems.function.owner.key", "8b0ceaeb-05b8-4921-bf46-e0d6c66e8472"), c.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER"));
                        try {
                            return
                        } finally {
                            c && c.end()
                        }
                    }, 1);
                    throw r
                })()
            }
            return
        } finally {
            f && f.end()
        }
    }, 1)
};
a.constructor.registerVariableGroupType("CommonPlugin.ConsoleLog$vars", [{
    name: "Component",
    attrName: "componentInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: i(function() {
        return ""
    }, "defaultValue")
}, {
    name: "Text",
    attrName: "textInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: i(function() {
        return ""
    }, "defaultValue")
}]);
a.clientActionProxies.consoleLog$Action = function(o, t) {
    return o = o === void 0 ? "" : o, t = t === void 0 ? "" : t, u.executeActionInsideJSNode(a.default.consoleLog$Action.bind(u, e.DataConversion.JSNodeParamConverter.from(o, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(t, e.DataTypes.DataTypes.Text)), e.Controller.BaseViewController.activeScreen ? e.Controller.BaseViewController.activeScreen.callContext() : void 0, function(s) {
        return {}
    })
};
a.getDeviceID$Action = function(o) {
    return e.Logger.startActiveSpan("GetDeviceID", function(t) {
        t && (t.setAttribute("code.function", "GetDeviceID"), t.setAttribute("outsystems.function.key", "8ce5aa0d-fbf8-4130-b781-ffd404bdff0d"), t.setAttribute("outsystems.function.owner.name", "CommonPlugin"), t.setAttribute("outsystems.function.owner.key", "8b0ceaeb-05b8-4921-bf46-e0d6c66e8472"), t.setAttribute("outsystems.function.type", "CLIENT_ACTION"));
        try {
            o = u.callContext(o);
            var s = new e.DataTypes.VariableHolder,
                f = new e.DataTypes.VariableHolder(new(u.constructor.getVariableGroupType("CommonPlugin.GetDeviceID$outVars")));
            return s.value = e.Logger.startActiveSpan("GetDeviceHwId", function(l) {
                l && (l.setAttribute("code.function", "GetDeviceHwId"), l.setAttribute("outsystems.function.key", "1152799f-4ff5-496f-a80e-d3243dc38c9a"), l.setAttribute("outsystems.function.owner.name", "CommonPlugin"), l.setAttribute("outsystems.function.owner.key", "8b0ceaeb-05b8-4921-bf46-e0d6c66e8472"), l.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                try {
                    return u.safeExecuteJSNode(O, "GetDeviceHwId", "GetDeviceID", {
                        deviceHwId: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text)
                    }, function(n) {
                        var r = new(u.constructor.getVariableGroupType("CommonPlugin.GetDeviceID$getDeviceHwIdJSResult"));
                        return r.deviceHwIdOut = e.DataConversion.JSNodeParamConverter.from(n.deviceHwId, e.DataTypes.DataTypes.Text), r
                    }, {}, {})
                } finally {
                    l && l.end()
                }
            }, 1), f.value.deviceHwIdOut = s.value.deviceHwIdOut, f.value
        } finally {
            t && t.end()
        }
    }, 1)
};
a.constructor.registerVariableGroupType("CommonPlugin.GetDeviceID$getDeviceHwIdJSResult", [{
    name: "deviceHwId",
    attrName: "deviceHwIdOut",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: i(function() {
        return ""
    }, "defaultValue")
}]);
a.constructor.registerVariableGroupType("CommonPlugin.GetDeviceID$outVars", [{
    name: "DeviceHwId",
    attrName: "deviceHwIdOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: i(function() {
        return ""
    }, "defaultValue")
}]);
a.clientActionProxies.getDeviceID$Action = function() {
    return u.executeActionInsideJSNode(a.default.getDeviceID$Action.bind(u), e.Controller.BaseViewController.activeScreen ? e.Controller.BaseViewController.activeScreen.callContext() : void 0, function(o) {
        return {
            DeviceHwId: e.DataConversion.JSNodeParamConverter.to(o.deviceHwIdOut, e.DataTypes.DataTypes.Text)
        }
    })
};
a.getNativeMobileFramework$Action = function(o) {
    return e.Logger.startActiveSpan("GetNativeMobileFramework", function(t) {
        t && (t.setAttribute("code.function", "GetNativeMobileFramework"), t.setAttribute("outsystems.function.key", "be93b15f-956c-47e8-9702-9f3fa55fcea3"), t.setAttribute("outsystems.function.owner.name", "CommonPlugin"), t.setAttribute("outsystems.function.owner.key", "8b0ceaeb-05b8-4921-bf46-e0d6c66e8472"), t.setAttribute("outsystems.function.type", "CLIENT_ACTION"));
        try {
            o = u.callContext(o);
            var s = new e.DataTypes.VariableHolder(new e.DataTypes.ErrorHandlerOutputType),
                f = new e.DataTypes.VariableHolder,
                l = new e.DataTypes.VariableHolder(new(u.constructor.getVariableGroupType("CommonPlugin.GetNativeMobileFramework$outVars")));
            try {
                f.value = e.Logger.startActiveSpan("CheckMobileFramework", function(n) {
                    n && (n.setAttribute("code.function", "CheckMobileFramework"), n.setAttribute("outsystems.function.key", "3ee9f9b1-52d5-4267-96b6-ff9fbf2d213d"), n.setAttribute("outsystems.function.owner.name", "CommonPlugin"), n.setAttribute("outsystems.function.owner.key", "8b0ceaeb-05b8-4921-bf46-e0d6c66e8472"), n.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                    try {
                        return u.safeExecuteJSNode(I, "CheckMobileFramework", "GetNativeMobileFramework", {
                            MobileFramework: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text)
                        }, function(r) {
                            var c = new(u.constructor.getVariableGroupType("CommonPlugin.GetNativeMobileFramework$checkMobileFrameworkJSResult"));
                            return c.mobileFrameworkOut = e.DataConversion.JSNodeParamConverter.from(r.MobileFramework, e.DataTypes.DataTypes.Text), c
                        }, {}, {})
                    } finally {
                        n && n.end()
                    }
                }, 1), f.value.mobileFrameworkOut === "capacitor" ? l.value.mobileFrameworkIdOut = b.mobile_Framework.capacitor : f.value.mobileFrameworkOut === "cordova" ? l.value.mobileFrameworkIdOut = b.mobile_Framework.cordova : l.value.mobileFrameworkIdOut = b.mobile_Framework.none
            } catch (n) {
                (function() {
                    if (e.Logger.debug("GetNativeMobileFramework.GetNativeMobileFramework", e.Exceptions.getMessage(n)), !e.Exceptions.isSystem(n)) return e.Logger.error(null, n, null, null, 1), s.value.exceptionMessageAttr = e.Exceptions.getMessage(n), e.Logger.startActiveSpan("AllExceptions", function(r) {
                        r && (r.setAttribute("code.function", "AllExceptions"), r.setAttribute("outsystems.function.key", "aabde78a-28d5-49c2-9f68-f61655c52449"), r.setAttribute("outsystems.function.owner.name", "CommonPlugin"), r.setAttribute("outsystems.function.owner.key", "8b0ceaeb-05b8-4921-bf46-e0d6c66e8472"), r.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER"));
                        try {
                            return a.default.consoleLog$Action("CommonPlugins", s.value.exceptionMessageAttr, o), l.value
                        } finally {
                            r && r.end()
                        }
                    }, 1);
                    throw n
                })()
            }
            return l.value
        } finally {
            t && t.end()
        }
    }, 1)
};
a.constructor.registerVariableGroupType("CommonPlugin.GetNativeMobileFramework$checkMobileFrameworkJSResult", [{
    name: "MobileFramework",
    attrName: "mobileFrameworkOut",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: i(function() {
        return ""
    }, "defaultValue")
}]);
a.constructor.registerVariableGroupType("CommonPlugin.GetNativeMobileFramework$outVars", [{
    name: "MobileFrameworkId",
    attrName: "mobileFrameworkIdOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Integer,
    defaultValue: i(function() {
        return 0
    }, "defaultValue")
}]);
a.clientActionProxies.getNativeMobileFramework$Action = function() {
    return u.executeActionInsideJSNode(a.default.getNativeMobileFramework$Action.bind(u), e.Controller.BaseViewController.activeScreen ? e.Controller.BaseViewController.activeScreen.callContext() : void 0, function(o) {
        return {
            MobileFrameworkId: o.mobileFrameworkIdOut
        }
    })
};
a.getOperatingSystem$Action = function(o) {
    return e.Logger.startActiveSpan("GetOperatingSystem", function(t) {
        t && (t.setAttribute("code.function", "GetOperatingSystem"), t.setAttribute("outsystems.function.key", "0ddcece8-e300-485d-a4a7-082d559d4f76"), t.setAttribute("outsystems.function.owner.name", "CommonPlugin"), t.setAttribute("outsystems.function.owner.key", "8b0ceaeb-05b8-4921-bf46-e0d6c66e8472"), t.setAttribute("outsystems.function.type", "CLIENT_ACTION"));
        try {
            o = u.callContext(o);
            var s = new e.DataTypes.VariableHolder(new e.DataTypes.ErrorHandlerOutputType),
                f = new e.DataTypes.VariableHolder,
                l = new e.DataTypes.VariableHolder(new(u.constructor.getVariableGroupType("CommonPlugin.GetOperatingSystem$outVars")));
            try {
                f.value = a.default.getPlatform$Action(o), f.value.platformOut === "android" ? l.value.operatingSystemsIdOut = b.mobile_OperatingSystem.android : f.value.platformOut === "ios" ? l.value.operatingSystemsIdOut = b.mobile_OperatingSystem.iOS : l.value.operatingSystemsIdOut = b.mobile_OperatingSystem.other
            } catch (n) {
                (function() {
                    if (e.Logger.debug("GetOperatingSystem.GetOperatingSystem", e.Exceptions.getMessage(n)), !e.Exceptions.isSystem(n)) return e.Logger.error(null, n, null, null, 1), s.value.exceptionMessageAttr = e.Exceptions.getMessage(n), e.Logger.startActiveSpan("AllExceptions", function(r) {
                        r && (r.setAttribute("code.function", "AllExceptions"), r.setAttribute("outsystems.function.key", "2e4e2fb1-2cf6-4074-8949-c365e37cfdde"), r.setAttribute("outsystems.function.owner.name", "CommonPlugin"), r.setAttribute("outsystems.function.owner.key", "8b0ceaeb-05b8-4921-bf46-e0d6c66e8472"), r.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER"));
                        try {
                            return a.default.consoleLog$Action("CommonPlugins", s.value.exceptionMessageAttr, o), l.value
                        } finally {
                            r && r.end()
                        }
                    }, 1);
                    throw n
                })()
            }
            return l.value
        } finally {
            t && t.end()
        }
    }, 1)
};
a.constructor.registerVariableGroupType("CommonPlugin.GetOperatingSystem$outVars", [{
    name: "OperatingSystemsId",
    attrName: "operatingSystemsIdOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: i(function() {
        return ""
    }, "defaultValue")
}]);
a.clientActionProxies.getOperatingSystem$Action = function() {
    return u.executeActionInsideJSNode(a.default.getOperatingSystem$Action.bind(u), e.Controller.BaseViewController.activeScreen ? e.Controller.BaseViewController.activeScreen.callContext() : void 0, function(o) {
        return {
            OperatingSystemsId: o.operatingSystemsIdOut
        }
    })
};
a.getPlatform$Action = function(o) {
    return e.Logger.startActiveSpan("GetPlatform", function(t) {
        t && (t.setAttribute("code.function", "GetPlatform"), t.setAttribute("outsystems.function.key", "c35ba9a1-2e0b-4b5f-a2b5-c77d3709882d"), t.setAttribute("outsystems.function.owner.name", "CommonPlugin"), t.setAttribute("outsystems.function.owner.key", "8b0ceaeb-05b8-4921-bf46-e0d6c66e8472"), t.setAttribute("outsystems.function.type", "CLIENT_ACTION"));
        try {
            o = u.callContext(o);
            var s = new e.DataTypes.VariableHolder(new e.DataTypes.ErrorHandlerOutputType),
                f = new e.DataTypes.VariableHolder,
                l = new e.DataTypes.VariableHolder,
                n = new e.DataTypes.VariableHolder,
                r = new e.DataTypes.VariableHolder(new(u.constructor.getVariableGroupType("CommonPlugin.GetPlatform$outVars")));
            try {
                f.value = a.default.getNativeMobileFramework$Action(o), f.value.mobileFrameworkIdOut === b.mobile_Framework.capacitor ? (n.value = e.Logger.startActiveSpan("RunCapacitor", function(c) {
                    c && (c.setAttribute("code.function", "RunCapacitor"), c.setAttribute("outsystems.function.key", "de502a1b-14f4-4bd3-98bd-b7d6102f0c3d"), c.setAttribute("outsystems.function.owner.name", "CommonPlugin"), c.setAttribute("outsystems.function.owner.key", "8b0ceaeb-05b8-4921-bf46-e0d6c66e8472"), c.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                    try {
                        return u.safeExecuteJSNode(L, "RunCapacitor", "GetPlatform", {
                            PlatformId: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text)
                        }, function(d) {
                            var p = new(u.constructor.getVariableGroupType("CommonPlugin.GetPlatform$runCapacitorJSResult"));
                            return p.platformIdOut = e.DataConversion.JSNodeParamConverter.from(d.PlatformId, e.DataTypes.DataTypes.Text), p
                        }, {}, {})
                    } finally {
                        c && c.end()
                    }
                }, 1), r.value.platformOut = e.BuiltinFunctions.toLower(n.value.platformIdOut)) : (l.value = e.Logger.startActiveSpan("RunCordova", function(c) {
                    c && (c.setAttribute("code.function", "RunCordova"), c.setAttribute("outsystems.function.key", "54c0d3f1-1342-4031-ad41-01c4f95d60be"), c.setAttribute("outsystems.function.owner.name", "CommonPlugin"), c.setAttribute("outsystems.function.owner.key", "8b0ceaeb-05b8-4921-bf46-e0d6c66e8472"), c.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                    try {
                        return u.safeExecuteJSNode(N, "RunCordova", "GetPlatform", {
                            PlatformId: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text)
                        }, function(d) {
                            var p = new(u.constructor.getVariableGroupType("CommonPlugin.GetPlatform$runCordovaJSResult"));
                            return p.platformIdOut = e.DataConversion.JSNodeParamConverter.from(d.PlatformId, e.DataTypes.DataTypes.Text), p
                        }, {}, {})
                    } finally {
                        c && c.end()
                    }
                }, 1), r.value.platformOut = e.BuiltinFunctions.toLower(l.value.platformIdOut))
            } catch (c) {
                (function() {
                    if (e.Logger.debug("GetPlatform.GetPlatform", e.Exceptions.getMessage(c)), !e.Exceptions.isSystem(c)) return e.Logger.error(null, c, null, null, 1), s.value.exceptionMessageAttr = e.Exceptions.getMessage(c), e.Logger.startActiveSpan("AllExceptions", function(d) {
                        d && (d.setAttribute("code.function", "AllExceptions"), d.setAttribute("outsystems.function.key", "7f1c3dc1-3711-4b66-9ea4-7a4776d91963"), d.setAttribute("outsystems.function.owner.name", "CommonPlugin"), d.setAttribute("outsystems.function.owner.key", "8b0ceaeb-05b8-4921-bf46-e0d6c66e8472"), d.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER"));
                        try {
                            return a.default.consoleLog$Action("CommonPlugins", s.value.exceptionMessageAttr, o), r.value
                        } finally {
                            d && d.end()
                        }
                    }, 1);
                    throw c
                })()
            }
            return r.value
        } finally {
            t && t.end()
        }
    }, 1)
};
a.constructor.registerVariableGroupType("CommonPlugin.GetPlatform$runCordovaJSResult", [{
    name: "PlatformId",
    attrName: "platformIdOut",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: i(function() {
        return ""
    }, "defaultValue")
}]);
a.constructor.registerVariableGroupType("CommonPlugin.GetPlatform$runCapacitorJSResult", [{
    name: "PlatformId",
    attrName: "platformIdOut",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: i(function() {
        return ""
    }, "defaultValue")
}]);
a.constructor.registerVariableGroupType("CommonPlugin.GetPlatform$outVars", [{
    name: "Platform",
    attrName: "platformOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: i(function() {
        return ""
    }, "defaultValue")
}]);
a.clientActionProxies.getPlatform$Action = function() {
    return u.executeActionInsideJSNode(a.default.getPlatform$Action.bind(u), e.Controller.BaseViewController.activeScreen ? e.Controller.BaseViewController.activeScreen.callContext() : void 0, function(o) {
        return {
            Platform: e.DataConversion.JSNodeParamConverter.to(o.platformOut, e.DataTypes.DataTypes.Text)
        }
    })
};
a.getUserAgent$Action = function(o) {
    return e.Logger.startActiveSpan("GetUserAgent", function(t) {
        t && (t.setAttribute("code.function", "GetUserAgent"), t.setAttribute("outsystems.function.key", "3b5c9047-8325-486c-95ed-b63beb268365"), t.setAttribute("outsystems.function.owner.name", "CommonPlugin"), t.setAttribute("outsystems.function.owner.key", "8b0ceaeb-05b8-4921-bf46-e0d6c66e8472"), t.setAttribute("outsystems.function.type", "CLIENT_ACTION"));
        try {
            o = u.callContext(o);
            var s = new e.DataTypes.VariableHolder(new e.DataTypes.ErrorHandlerOutputType),
                f = new e.DataTypes.VariableHolder,
                l = new e.DataTypes.VariableHolder(new(u.constructor.getVariableGroupType("CommonPlugin.GetUserAgent$outVars")));
            try {
                f.value = e.Logger.startActiveSpan("GettingUA", function(n) {
                    n && (n.setAttribute("code.function", "GettingUA"), n.setAttribute("outsystems.function.key", "87fa54ab-f667-4584-9a03-cf7ab66e736d"), n.setAttribute("outsystems.function.owner.name", "CommonPlugin"), n.setAttribute("outsystems.function.owner.key", "8b0ceaeb-05b8-4921-bf46-e0d6c66e8472"), n.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                    try {
                        return u.safeExecuteJSNode(k, "GettingUA", "GetUserAgent", {
                            UserAgent: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text)
                        }, function(r) {
                            var c = new(u.constructor.getVariableGroupType("CommonPlugin.GetUserAgent$gettingUAJSResult"));
                            return c.userAgentOut = e.DataConversion.JSNodeParamConverter.from(r.UserAgent, e.DataTypes.DataTypes.Text), c
                        }, {}, {})
                    } finally {
                        n && n.end()
                    }
                }, 1), l.value.userAgentOut = f.value.userAgentOut
            } catch (n) {
                (function() {
                    if (e.Logger.debug("GetUserAgent.GetUserAgent", e.Exceptions.getMessage(n)), !e.Exceptions.isSystem(n)) return e.Logger.error(null, n, null, null, 1), s.value.exceptionMessageAttr = e.Exceptions.getMessage(n), e.Logger.startActiveSpan("AllExceptions", function(r) {
                        r && (r.setAttribute("code.function", "AllExceptions"), r.setAttribute("outsystems.function.key", "5df45868-4e12-42d1-a272-1e19c6935c51"), r.setAttribute("outsystems.function.owner.name", "CommonPlugin"), r.setAttribute("outsystems.function.owner.key", "8b0ceaeb-05b8-4921-bf46-e0d6c66e8472"), r.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER"));
                        try {
                            return a.default.consoleLog$Action("CommonPlugins", s.value.exceptionMessageAttr, o), l.value
                        } finally {
                            r && r.end()
                        }
                    }, 1);
                    throw n
                })()
            }
            return l.value
        } finally {
            t && t.end()
        }
    }, 1)
};
a.constructor.registerVariableGroupType("CommonPlugin.GetUserAgent$gettingUAJSResult", [{
    name: "UserAgent",
    attrName: "userAgentOut",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: i(function() {
        return ""
    }, "defaultValue")
}]);
a.constructor.registerVariableGroupType("CommonPlugin.GetUserAgent$outVars", [{
    name: "UserAgent",
    attrName: "userAgentOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: i(function() {
        return ""
    }, "defaultValue")
}]);
a.clientActionProxies.getUserAgent$Action = function() {
    return u.executeActionInsideJSNode(a.default.getUserAgent$Action.bind(u), e.Controller.BaseViewController.activeScreen ? e.Controller.BaseViewController.activeScreen.callContext() : void 0, function(o) {
        return {
            UserAgent: e.DataConversion.JSNodeParamConverter.to(o.userAgentOut, e.DataTypes.DataTypes.Text)
        }
    })
};
a.initPluginManager$Action = function(o) {
    return e.Logger.startActiveSpan("InitPluginManager", function(t) {
        return t && (t.setAttribute("code.function", "InitPluginManager"), t.setAttribute("outsystems.function.key", "757925da-a635-4bf5-97e2-26bfdb5ef508"), t.setAttribute("outsystems.function.owner.name", "CommonPlugin"), t.setAttribute("outsystems.function.owner.key", "8b0ceaeb-05b8-4921-bf46-e0d6c66e8472"), t.setAttribute("outsystems.function.type", "CLIENT_ACTION")), e.Flow.tryFinally(function() {
            return o = u.callContext(o), e.Flow.executeAsyncFlow(function() {
                return e.Logger.startActiveSpan("InitScript", function(s) {
                    s && (s.setAttribute("code.function", "InitScript"), s.setAttribute("outsystems.function.key", "72931d81-801f-406a-8a0c-b64a88bfba13"), s.setAttribute("outsystems.function.owner.name", "CommonPlugin"), s.setAttribute("outsystems.function.owner.key", "8b0ceaeb-05b8-4921-bf46-e0d6c66e8472"), s.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                    try {
                        return u.safeExecuteAsyncJSNode(E, "InitScript", "InitPluginManager", {
                            ScriptURL: e.DataConversion.JSNodeParamConverter.to(e.Navigation.VersionedURL.getVersionedUrl("scripts/CommonPlugin.UserScripts.PluginManager.js"), e.DataTypes.DataTypes.Text)
                        }, function(f) {}, {
                            RequireScript: e.SystemActions.requireScript
                        }, {})
                    } finally {
                        s && s.end()
                    }
                }, 1)
            }).then(function() {})
        }, function() {
            t && t.end()
        })
    }, 1)
};
a.clientActionProxies.initPluginManager$Action = function() {
    return u.executeActionInsideJSNode(a.default.initPluginManager$Action.bind(u), e.Controller.BaseViewController.activeScreen ? e.Controller.BaseViewController.activeScreen.callContext() : void 0, function(o) {
        return {}
    })
};
a.isCordovaDefined$Action = function(o) {
    return e.Logger.startActiveSpan("IsCordovaDefined", function(t) {
        t && (t.setAttribute("code.function", "IsCordovaDefined"), t.setAttribute("outsystems.function.key", "8c87ec43-13fd-4b76-88db-6888733c440c"), t.setAttribute("outsystems.function.owner.name", "CommonPlugin"), t.setAttribute("outsystems.function.owner.key", "8b0ceaeb-05b8-4921-bf46-e0d6c66e8472"), t.setAttribute("outsystems.function.type", "CLIENT_ACTION"));
        try {
            o = u.callContext(o);
            var s = new e.DataTypes.VariableHolder(new e.DataTypes.ErrorHandlerOutputType),
                f = new e.DataTypes.VariableHolder,
                l = new e.DataTypes.VariableHolder(new(u.constructor.getVariableGroupType("CommonPlugin.IsCordovaDefined$outVars")));
            try {
                f.value = e.Logger.startActiveSpan("CheckCordova", function(n) {
                    n && (n.setAttribute("code.function", "CheckCordova"), n.setAttribute("outsystems.function.key", "aee26cbc-81f8-4f80-904e-c9e294dbb126"), n.setAttribute("outsystems.function.owner.name", "CommonPlugin"), n.setAttribute("outsystems.function.owner.key", "8b0ceaeb-05b8-4921-bf46-e0d6c66e8472"), n.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                    try {
                        return u.safeExecuteJSNode(G, "CheckCordova", "IsCordovaDefined", {
                            CordovaLoaded: e.DataConversion.JSNodeParamConverter.to(!1, e.DataTypes.DataTypes.Boolean)
                        }, function(r) {
                            var c = new(u.constructor.getVariableGroupType("CommonPlugin.IsCordovaDefined$checkCordovaJSResult"));
                            return c.cordovaLoadedOut = e.DataConversion.JSNodeParamConverter.from(r.CordovaLoaded, e.DataTypes.DataTypes.Boolean), c
                        }, {}, {})
                    } finally {
                        n && n.end()
                    }
                }, 1), l.value.isLoadedOut = f.value.cordovaLoadedOut
            } catch (n) {
                (function() {
                    if (e.Logger.debug("IsCordovaDefined.IsCordovaDefined", e.Exceptions.getMessage(n)), !e.Exceptions.isSystem(n)) return e.Logger.error(null, n, null, null, 1), s.value.exceptionMessageAttr = e.Exceptions.getMessage(n), e.Logger.startActiveSpan("AllExceptions", function(r) {
                        r && (r.setAttribute("code.function", "AllExceptions"), r.setAttribute("outsystems.function.key", "bf2b641c-c4fc-45f1-825d-597463c5606a"), r.setAttribute("outsystems.function.owner.name", "CommonPlugin"), r.setAttribute("outsystems.function.owner.key", "8b0ceaeb-05b8-4921-bf46-e0d6c66e8472"), r.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER"));
                        try {
                            return a.default.consoleLog$Action("CommonPlugins", s.value.exceptionMessageAttr, o), l.value
                        } finally {
                            r && r.end()
                        }
                    }, 1);
                    throw n
                })()
            }
            return l.value
        } finally {
            t && t.end()
        }
    }, 1)
};
a.constructor.registerVariableGroupType("CommonPlugin.IsCordovaDefined$checkCordovaJSResult", [{
    name: "CordovaLoaded",
    attrName: "cordovaLoadedOut",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Boolean,
    defaultValue: i(function() {
        return !1
    }, "defaultValue")
}]);
a.constructor.registerVariableGroupType("CommonPlugin.IsCordovaDefined$outVars", [{
    name: "IsLoaded",
    attrName: "isLoadedOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Boolean,
    defaultValue: i(function() {
        return !1
    }, "defaultValue")
}]);
a.clientActionProxies.isCordovaDefined$Action = function() {
    return u.executeActionInsideJSNode(a.default.isCordovaDefined$Action.bind(u), e.Controller.BaseViewController.activeScreen ? e.Controller.BaseViewController.activeScreen.callContext() : void 0, function(o) {
        return {
            IsLoaded: e.DataConversion.JSNodeParamConverter.to(o.isLoadedOut, e.DataTypes.DataTypes.Boolean)
        }
    })
};
a.publicStructs$Action = function(o) {
    return e.Logger.startActiveSpan("PublicStructs", function(t) {
        t && (t.setAttribute("code.function", "PublicStructs"), t.setAttribute("outsystems.function.key", "0526454a-a53b-4160-b638-7c502e07f867"), t.setAttribute("outsystems.function.owner.name", "CommonPlugin"), t.setAttribute("outsystems.function.owner.key", "8b0ceaeb-05b8-4921-bf46-e0d6c66e8472"), t.setAttribute("outsystems.function.type", "CLIENT_ACTION"));
        try {
            o = u.callContext(o);
            var s = new e.DataTypes.VariableHolder(new(u.constructor.getVariableGroupType("CommonPlugin.PublicStructs$outVars")));
            return s.value
        } finally {
            t && t.end()
        }
    }, 1)
};
a.constructor.registerVariableGroupType("CommonPlugin.PublicStructs$outVars", [{
    name: "Error",
    attrName: "errorOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: i(function() {
        return new A
    }, "defaultValue"),
    complexType: A
}, {
    name: "PluginLicense",
    attrName: "pluginLicenseOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Record,
    defaultValue: i(function() {
        return new T
    }, "defaultValue"),
    complexType: T
}]);
a.clientActionProxies.publicStructs$Action = function() {
    return u.executeActionInsideJSNode(a.default.publicStructs$Action.bind(u), e.Controller.BaseViewController.activeScreen ? e.Controller.BaseViewController.activeScreen.callContext() : void 0, function(o) {
        return {
            Error: o.errorOut,
            PluginLicense: o.pluginLicenseOut
        }
    })
};
var Ie = a;
export {
    A as a, Ie as b
};