import {
    b as L
} from "./_oschunk-CN2UYW64.js";
import {
    a as z
} from "./_oschunk-RTFWHKPU.js";
import {
    a as J
} from "./_oschunk-6K5EBY3W.js";
import {
    a as W
} from "./_oschunk-SFRA456L.js";
import "./_oschunk-L6JZD7VU.js";
import {
    a as O
} from "./_oschunk-6MV3R6MR.js";
import {
    a as U
} from "./_oschunk-SNXHD6UR.js";
import "./_oschunk-RVD4FS25.js";
import "./_oschunk-4SYOXZNK.js";
import "./_oschunk-YB2J7GTX.js";
import "./_oschunk-HFW3V2GI.js";
import {
    a as me
} from "./_oschunk-LLAHPWP3.js";
import "./_oschunk-YVFTECWM.js";
import {
    f as m,
    h as x,
    n as D,
    p as S,
    r as ye,
    u as H
} from "./_oschunk-VR5BNL2K.js";
import {
    a as we,
    g as B,
    m as de,
    n as pe,
    q as fe,
    r as ve,
    s as M,
    t as $
} from "./_oschunk-4VHUVDBV.js";
import {
    a as ce
} from "./_oschunk-KXORGPRQ.js";
import "./_oschunk-ZM75JAVW.js";
import {
    E as R,
    Ea as k,
    Qb as ue,
    Sb as w,
    a as se,
    db as le,
    ub as P
} from "./_oschunk-Z7QRTJDJ.js";
import {
    W as A,
    c as i,
    e as Pe,
    m as ie,
    n as ae,
    p as E
} from "./_oschunk-M5BUVJ72.js";
var he = {
        staticEntities: {}
    },
    Ae = he.staticEntities;

function G(f, u, c, e) {
    return new Promise(function(t, o) {
        function n() {
            f.Success = !0, t()
        }
        i(n, "onSuccess");

        function a(p) {
            f.Success = !1, t()
        }
        i(a, "onError"), cordova.plugins.clipboard.clear(n, a)
    })
}
i(G, "default");

function K(f, u, c, e) {
    return new Promise(function(t, o) {
        function n() {
            f.Success = !0, t()
        }
        i(n, "onSuccess");

        function a(p) {
            f.Success = !1, f.ErrorMessage = p, t()
        }
        i(a, "onError"), cordova.plugins.clipboard.copy(f.String)
    })
}
i(K, "default");

function j(f, u, c, e) {
    function t(n) {
        var a = document.createElement("textarea");
        a.value = n, a.style.top = "0", a.style.left = "0", a.style.position = "fixed", document.body.appendChild(a), a.focus(), a.select();
        try {
            var p = document.execCommand("copy"),
                _ = p ? "successful" : "unsuccessful";
            console.log("Fallback: Copying text command was " + _), f.Success = p
        } catch (s) {
            console.error("Fallback: Oops, unable to copy", s), f.Success = !1, f.ErrorMessage = s
        }
        document.body.removeChild(a)
    }
    i(t, "fallbackCopyTextToClipboard");

    function o(n) {
        if (!navigator.clipboard) {
            t(n);
            return
        }
        navigator.clipboard.writeText(n).then(function() {
            console.log("Async: Copying to clipboard was successful!"), f.Success = !0
        }, function(a) {
            console.error("Async: Could not copy text: ", a), console.log("Will try to fallback"), t(n)
        })
    }
    i(o, "copyTextToClipboard"), o(f.String)
}
i(j, "default");

function Q(f, u, c, e) {
    return new Promise(function(t, o) {
        function n(p) {
            f.String = p, f.Success = !0, t()
        }
        i(n, "onSuccess");

        function a(p) {
            f.Success = !1, t()
        }
        i(a, "onError"), cordova.plugins.clipboard.paste(n, a)
    })
}
i(Q, "default");
var r = A,
    Z = class Z extends r.Controller.BaseModuleController {
        constructor(u, c, e, t) {
            super(u, c, e, t)
        }
        get clientActionProxies() {
            return this.hasOwnProperty("_clientActionProxies") || (this._clientActionProxies = {}), this._clientActionProxies
        }
        set clientActionProxies(u) {
            this._clientActionProxies = u
        }
        get roles() {
            return this.hasOwnProperty("_roles") || (this._roles = {}), this._roles
        }
        set roles(u) {
            this._roles = u
        }
        get defaultTimeout() {
            return this.hasOwnProperty("_defaultTimeout") || (this._defaultTimeout = 10), this._defaultTimeout
        }
        set defaultTimeout(u) {
            this._defaultTimeout = u
        }
        getDefaultTimeout() {
            return this.defaultTimeout
        }
    };
i(Z, "Controller");
var q = Z,
    C = new q,
    g = C;
C.clearClipboard$Action = function(f) {
    return r.Logger.startActiveSpan("ClearClipboard", function(u) {
        return u && (u.setAttribute("code.function", "ClearClipboard"), u.setAttribute("outsystems.function.key", "b702e4ed-f1bc-4f44-b5d0-1b8563f65e96"), u.setAttribute("outsystems.function.owner.name", "CopyToClipboard_Plugin"), u.setAttribute("outsystems.function.owner.key", "3b67978a-5c60-4af4-96fb-9cb44324ad6a"), u.setAttribute("outsystems.function.type", "CLIENT_ACTION")), r.Flow.tryFinally(function() {
            f = g.callContext(f);
            var c = new r.DataTypes.VariableHolder,
                e = new r.DataTypes.VariableHolder,
                t = new r.DataTypes.VariableHolder,
                o = new r.DataTypes.VariableHolder(new(g.constructor.getVariableGroupType("CopyToClipboard_Plugin.ClearClipboard$outVars")));
            return r.Flow.executeAsyncFlow(function() {
                return e.value = L.isCordovaDefined$Action(f), r.Flow.executeSequence(function() {
                    if (e.value.isLoadedOut) return r.Logger.startActiveSpan("ClearClipboard", function(n) {
                        n && (n.setAttribute("code.function", "ClearClipboard"), n.setAttribute("outsystems.function.key", "647a409a-eac6-4b6c-bda9-6cd49788055f"), n.setAttribute("outsystems.function.owner.name", "CopyToClipboard_Plugin"), n.setAttribute("outsystems.function.owner.key", "3b67978a-5c60-4af4-96fb-9cb44324ad6a"), n.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                        try {
                            return g.safeExecuteAsyncJSNode(G, "ClearClipboard", "ClearClipboard", {
                                Success: r.DataConversion.JSNodeParamConverter.to(!1, r.DataTypes.DataTypes.Boolean)
                            }, function(a) {
                                var p = new(g.constructor.getVariableGroupType("CopyToClipboard_Plugin.ClearClipboard$clearClipboardJSResult"));
                                return p.successOut = r.DataConversion.JSNodeParamConverter.from(a.Success, r.DataTypes.DataTypes.Boolean), p
                            }, {}, {})
                        } finally {
                            n && n.end()
                        }
                    }, 1).then(function(n) {
                        t.value = n
                    }).then(function() {
                        o.value.successOut = t.value.successOut
                    });
                    c.value = C.default.copyToClipboard_Browser$Action("", f), o.value.successOut = c.value.successOut
                })
            }).then(function() {
                return o.value
            })
        }, function() {
            u && u.end()
        })
    }, 1)
};
C.constructor.registerVariableGroupType("CopyToClipboard_Plugin.ClearClipboard$clearClipboardJSResult", [{
    name: "Success",
    attrName: "successOut",
    mandatory: !0,
    dataType: r.DataTypes.DataTypes.Boolean,
    defaultValue: i(function() {
        return !1
    }, "defaultValue")
}]);
C.constructor.registerVariableGroupType("CopyToClipboard_Plugin.ClearClipboard$outVars", [{
    name: "Success",
    attrName: "successOut",
    mandatory: !1,
    dataType: r.DataTypes.DataTypes.Boolean,
    defaultValue: i(function() {
        return !1
    }, "defaultValue")
}]);
C.clientActionProxies.clearClipboard$Action = function() {
    return g.executeActionInsideJSNode(C.default.clearClipboard$Action.bind(g), r.Controller.BaseViewController.activeScreen ? r.Controller.BaseViewController.activeScreen.callContext() : void 0, function(f) {
        return {
            Success: r.DataConversion.JSNodeParamConverter.to(f.successOut, r.DataTypes.DataTypes.Boolean)
        }
    })
};
C.copyToClipboard$Action = function(f, u) {
    return r.Logger.startActiveSpan("CopyToClipboard", function(c) {
        return c && (c.setAttribute("code.function", "CopyToClipboard"), c.setAttribute("outsystems.function.key", "4329396b-a1f9-4d8d-b128-4ffb6fdb0fb9"), c.setAttribute("outsystems.function.owner.name", "CopyToClipboard_Plugin"), c.setAttribute("outsystems.function.owner.key", "3b67978a-5c60-4af4-96fb-9cb44324ad6a"), c.setAttribute("outsystems.function.type", "CLIENT_ACTION")), r.Flow.tryFinally(function() {
            u = g.callContext(u);
            var e = new r.DataTypes.VariableHolder(new(g.constructor.getVariableGroupType("CopyToClipboard_Plugin.CopyToClipboard$vars")));
            e.value.stringInLocal = f;
            var t = new r.DataTypes.VariableHolder,
                o = new r.DataTypes.VariableHolder,
                n = new r.DataTypes.VariableHolder,
                a = new r.DataTypes.VariableHolder(new(g.constructor.getVariableGroupType("CopyToClipboard_Plugin.CopyToClipboard$outVars")));
            return r.Flow.executeAsyncFlow(function() {
                return t.value = L.isCordovaDefined$Action(u), r.Flow.executeSequence(function() {
                    if (t.value.isLoadedOut) return r.Logger.startActiveSpan("CopyToClipboard", function(p) {
                        p && (p.setAttribute("code.function", "CopyToClipboard"), p.setAttribute("outsystems.function.key", "2b4da277-ca25-4232-aa4d-b262fda6f080"), p.setAttribute("outsystems.function.owner.name", "CopyToClipboard_Plugin"), p.setAttribute("outsystems.function.owner.key", "3b67978a-5c60-4af4-96fb-9cb44324ad6a"), p.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                        try {
                            return g.safeExecuteAsyncJSNode(K, "CopyToClipboard", "CopyToClipboard", {
                                String: r.DataConversion.JSNodeParamConverter.to(e.value.stringInLocal, r.DataTypes.DataTypes.Text),
                                Success: r.DataConversion.JSNodeParamConverter.to(!1, r.DataTypes.DataTypes.Boolean),
                                ErrorMessage: r.DataConversion.JSNodeParamConverter.to("", r.DataTypes.DataTypes.Text)
                            }, function(_) {
                                var s = new(g.constructor.getVariableGroupType("CopyToClipboard_Plugin.CopyToClipboard$copyToClipboardJSResult"));
                                return s.successOut = r.DataConversion.JSNodeParamConverter.from(_.Success, r.DataTypes.DataTypes.Boolean), s.errorMessageOut = r.DataConversion.JSNodeParamConverter.from(_.ErrorMessage, r.DataTypes.DataTypes.Text), s
                            }, {}, {})
                        } finally {
                            p && p.end()
                        }
                    }, 1).then(function(p) {
                        n.value = p
                    }).then(function() {
                        a.value.successOut = n.value.successOut, a.value.errorMessageOut = n.value.errorMessageOut
                    });
                    o.value = C.default.copyToClipboard_Browser$Action(e.value.stringInLocal, u), a.value.successOut = o.value.successOut, a.value.errorMessageOut = o.value.errorMessageOut
                })
            }).then(function() {
                return a.value
            })
        }, function() {
            c && c.end()
        })
    }, 1)
};
C.constructor.registerVariableGroupType("CopyToClipboard_Plugin.CopyToClipboard$vars", [{
    name: "String",
    attrName: "stringInLocal",
    mandatory: !0,
    dataType: r.DataTypes.DataTypes.Text,
    defaultValue: i(function() {
        return ""
    }, "defaultValue")
}]);
C.constructor.registerVariableGroupType("CopyToClipboard_Plugin.CopyToClipboard$copyToClipboardJSResult", [{
    name: "Success",
    attrName: "successOut",
    mandatory: !0,
    dataType: r.DataTypes.DataTypes.Boolean,
    defaultValue: i(function() {
        return !1
    }, "defaultValue")
}, {
    name: "ErrorMessage",
    attrName: "errorMessageOut",
    mandatory: !0,
    dataType: r.DataTypes.DataTypes.Text,
    defaultValue: i(function() {
        return ""
    }, "defaultValue")
}]);
C.constructor.registerVariableGroupType("CopyToClipboard_Plugin.CopyToClipboard$outVars", [{
    name: "Success",
    attrName: "successOut",
    mandatory: !1,
    dataType: r.DataTypes.DataTypes.Boolean,
    defaultValue: i(function() {
        return !1
    }, "defaultValue")
}, {
    name: "ErrorMessage",
    attrName: "errorMessageOut",
    mandatory: !1,
    dataType: r.DataTypes.DataTypes.Text,
    defaultValue: i(function() {
        return ""
    }, "defaultValue")
}]);
C.clientActionProxies.copyToClipboard$Action = function(f) {
    return f = f === void 0 ? "" : f, g.executeActionInsideJSNode(C.default.copyToClipboard$Action.bind(g, r.DataConversion.JSNodeParamConverter.from(f, r.DataTypes.DataTypes.Text)), r.Controller.BaseViewController.activeScreen ? r.Controller.BaseViewController.activeScreen.callContext() : void 0, function(u) {
        return {
            Success: r.DataConversion.JSNodeParamConverter.to(u.successOut, r.DataTypes.DataTypes.Boolean),
            ErrorMessage: r.DataConversion.JSNodeParamConverter.to(u.errorMessageOut, r.DataTypes.DataTypes.Text)
        }
    })
};
C.copyToClipboard_Browser$Action = function(f, u) {
    return r.Logger.startActiveSpan("CopyToClipboard_Browser", function(c) {
        c && (c.setAttribute("code.function", "CopyToClipboard_Browser"), c.setAttribute("outsystems.function.key", "c2fb94d6-a996-4ef1-8ea3-998865db2d9d"), c.setAttribute("outsystems.function.owner.name", "CopyToClipboard_Plugin"), c.setAttribute("outsystems.function.owner.key", "3b67978a-5c60-4af4-96fb-9cb44324ad6a"), c.setAttribute("outsystems.function.type", "CLIENT_ACTION"));
        try {
            u = g.callContext(u);
            var e = new r.DataTypes.VariableHolder(new(g.constructor.getVariableGroupType("CopyToClipboard_Plugin.CopyToClipboard_Browser$vars")));
            e.value.stringInLocal = f;
            var t = new r.DataTypes.VariableHolder,
                o = new r.DataTypes.VariableHolder(new(g.constructor.getVariableGroupType("CopyToClipboard_Plugin.CopyToClipboard_Browser$outVars")));
            return t.value = r.Logger.startActiveSpan("JS_CopyToClipboard_Browser", function(n) {
                n && (n.setAttribute("code.function", "JS_CopyToClipboard_Browser"), n.setAttribute("outsystems.function.key", "34383adf-ab9d-410a-b1a2-869c597544fa"), n.setAttribute("outsystems.function.owner.name", "CopyToClipboard_Plugin"), n.setAttribute("outsystems.function.owner.key", "3b67978a-5c60-4af4-96fb-9cb44324ad6a"), n.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                try {
                    return g.safeExecuteJSNode(j, "JS_CopyToClipboard_Browser", "CopyToClipboard_Browser", {
                        String: r.DataConversion.JSNodeParamConverter.to(e.value.stringInLocal, r.DataTypes.DataTypes.Text),
                        Success: r.DataConversion.JSNodeParamConverter.to(!1, r.DataTypes.DataTypes.Boolean),
                        ErrorMessage: r.DataConversion.JSNodeParamConverter.to("", r.DataTypes.DataTypes.Text)
                    }, function(a) {
                        var p = new(g.constructor.getVariableGroupType("CopyToClipboard_Plugin.CopyToClipboard_Browser$jS_CopyToClipboard_BrowserJSResult"));
                        return p.successOut = r.DataConversion.JSNodeParamConverter.from(a.Success, r.DataTypes.DataTypes.Boolean), p.errorMessageOut = r.DataConversion.JSNodeParamConverter.from(a.ErrorMessage, r.DataTypes.DataTypes.Text), p
                    }, {}, {})
                } finally {
                    n && n.end()
                }
            }, 1), o.value.successOut = !0, o.value.errorMessageOut = t.value.errorMessageOut, o.value
        } finally {
            c && c.end()
        }
    }, 1)
};
C.constructor.registerVariableGroupType("CopyToClipboard_Plugin.CopyToClipboard_Browser$vars", [{
    name: "String",
    attrName: "stringInLocal",
    mandatory: !0,
    dataType: r.DataTypes.DataTypes.Text,
    defaultValue: i(function() {
        return ""
    }, "defaultValue")
}]);
C.constructor.registerVariableGroupType("CopyToClipboard_Plugin.CopyToClipboard_Browser$jS_CopyToClipboard_BrowserJSResult", [{
    name: "Success",
    attrName: "successOut",
    mandatory: !0,
    dataType: r.DataTypes.DataTypes.Boolean,
    defaultValue: i(function() {
        return !1
    }, "defaultValue")
}, {
    name: "ErrorMessage",
    attrName: "errorMessageOut",
    mandatory: !0,
    dataType: r.DataTypes.DataTypes.Text,
    defaultValue: i(function() {
        return ""
    }, "defaultValue")
}]);
C.constructor.registerVariableGroupType("CopyToClipboard_Plugin.CopyToClipboard_Browser$outVars", [{
    name: "Success",
    attrName: "successOut",
    mandatory: !1,
    dataType: r.DataTypes.DataTypes.Boolean,
    defaultValue: i(function() {
        return !1
    }, "defaultValue")
}, {
    name: "ErrorMessage",
    attrName: "errorMessageOut",
    mandatory: !1,
    dataType: r.DataTypes.DataTypes.Text,
    defaultValue: i(function() {
        return ""
    }, "defaultValue")
}]);
C.clientActionProxies.copyToClipboard_Browser$Action = function(f) {
    return f = f === void 0 ? "" : f, g.executeActionInsideJSNode(C.default.copyToClipboard_Browser$Action.bind(g, r.DataConversion.JSNodeParamConverter.from(f, r.DataTypes.DataTypes.Text)), r.Controller.BaseViewController.activeScreen ? r.Controller.BaseViewController.activeScreen.callContext() : void 0, function(u) {
        return {
            Success: r.DataConversion.JSNodeParamConverter.to(u.successOut, r.DataTypes.DataTypes.Boolean),
            ErrorMessage: r.DataConversion.JSNodeParamConverter.to(u.errorMessageOut, r.DataTypes.DataTypes.Text)
        }
    })
};
C.pasteFromClipboard$Action = function(f) {
    return r.Logger.startActiveSpan("PasteFromClipboard", function(u) {
        return u && (u.setAttribute("code.function", "PasteFromClipboard"), u.setAttribute("outsystems.function.key", "2317f4c6-b46b-49d9-b952-f3ab9ab160e4"), u.setAttribute("outsystems.function.owner.name", "CopyToClipboard_Plugin"), u.setAttribute("outsystems.function.owner.key", "3b67978a-5c60-4af4-96fb-9cb44324ad6a"), u.setAttribute("outsystems.function.type", "CLIENT_ACTION")), r.Flow.tryFinally(function() {
            f = g.callContext(f);
            var c = new r.DataTypes.VariableHolder,
                e = new r.DataTypes.VariableHolder,
                t = new r.DataTypes.VariableHolder(new(g.constructor.getVariableGroupType("CopyToClipboard_Plugin.PasteFromClipboard$outVars")));
            return r.Flow.executeAsyncFlow(function() {
                return c.value = L.isCordovaDefined$Action(f), r.Flow.executeSequence(function() {
                    if (c.value.isLoadedOut) return r.Logger.startActiveSpan("PasteFromClipboard", function(o) {
                        o && (o.setAttribute("code.function", "PasteFromClipboard"), o.setAttribute("outsystems.function.key", "553a1a56-c7ea-4688-843b-98da2e4d39bf"), o.setAttribute("outsystems.function.owner.name", "CopyToClipboard_Plugin"), o.setAttribute("outsystems.function.owner.key", "3b67978a-5c60-4af4-96fb-9cb44324ad6a"), o.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                        try {
                            return g.safeExecuteAsyncJSNode(Q, "PasteFromClipboard", "PasteFromClipboard", {
                                String: r.DataConversion.JSNodeParamConverter.to("", r.DataTypes.DataTypes.Text),
                                Success: r.DataConversion.JSNodeParamConverter.to(!1, r.DataTypes.DataTypes.Boolean)
                            }, function(n) {
                                var a = new(g.constructor.getVariableGroupType("CopyToClipboard_Plugin.PasteFromClipboard$pasteFromClipboardJSResult"));
                                return a.stringOut = r.DataConversion.JSNodeParamConverter.from(n.String, r.DataTypes.DataTypes.Text), a.successOut = r.DataConversion.JSNodeParamConverter.from(n.Success, r.DataTypes.DataTypes.Boolean), a
                            }, {}, {})
                        } finally {
                            o && o.end()
                        }
                    }, 1).then(function(o) {
                        e.value = o
                    }).then(function() {
                        t.value.stringOut = e.value.stringOut, t.value.successOut = e.value.successOut
                    });
                    r.FeedbackMessageService.showFeedbackMessage("Feature not implemented in browser mode.", 0), t.value.successOut = !1
                })
            }).then(function() {
                return t.value
            })
        }, function() {
            u && u.end()
        })
    }, 1)
};
C.constructor.registerVariableGroupType("CopyToClipboard_Plugin.PasteFromClipboard$pasteFromClipboardJSResult", [{
    name: "String",
    attrName: "stringOut",
    mandatory: !0,
    dataType: r.DataTypes.DataTypes.Text,
    defaultValue: i(function() {
        return ""
    }, "defaultValue")
}, {
    name: "Success",
    attrName: "successOut",
    mandatory: !0,
    dataType: r.DataTypes.DataTypes.Boolean,
    defaultValue: i(function() {
        return !1
    }, "defaultValue")
}]);
C.constructor.registerVariableGroupType("CopyToClipboard_Plugin.PasteFromClipboard$outVars", [{
    name: "String",
    attrName: "stringOut",
    mandatory: !1,
    dataType: r.DataTypes.DataTypes.Text,
    defaultValue: i(function() {
        return ""
    }, "defaultValue")
}, {
    name: "Success",
    attrName: "successOut",
    mandatory: !1,
    dataType: r.DataTypes.DataTypes.Boolean,
    defaultValue: i(function() {
        return !1
    }, "defaultValue")
}]);
C.clientActionProxies.pasteFromClipboard$Action = function() {
    return g.executeActionInsideJSNode(C.default.pasteFromClipboard$Action.bind(g), r.Controller.BaseViewController.activeScreen ? r.Controller.BaseViewController.activeScreen.callContext() : void 0, function(f) {
        return {
            String: r.DataConversion.JSNodeParamConverter.to(f.stringOut, r.DataTypes.DataTypes.Text),
            Success: r.DataConversion.JSNodeParamConverter.to(f.successOut, r.DataTypes.DataTypes.Boolean)
        }
    })
};
var ge = C;
var Ee = {
        "rrCuDbdKHEKX_kMr66gyGQ#Value": "\u0646\u0633\u064A\u062A \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631\u061F",
        "E++reQVWLkOb9fnk6vi65A#Value": "\u0645\u0639\u0631\u0641 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644",
        "7mNorIqY7UuTExJCpNS64A#Value": "\u0627\u0644\u062E\u0627\u062F\u0645",
        "++MiqcmKlUuKl4I6MMHEGw#Value": "\u0648\u0633\u064A\u0637",
        "QQl91MHylEO3aKI8Yep6wA#Value": "\u062A\u0641\u0627\u0635\u064A\u0644 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644",
        "o8X+DLK0B0+wt4TOIB6kcA#Value": "\u0646\u0633\u064A\u062A \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631\u061F",
        "SUOzsPU7u0aAdvEeULZBZg#Value": "\u0645\u0639\u0631\u0641 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644",
        "FIlim2FuMkCjKk5DP4iCIQ#Value": "\u0627\u0644\u062E\u0627\u062F\u0645",
        "EqdmVzcVdEyifEGAiW6PnA#Value": "\u0648\u0633\u064A\u0637",
        "RZWA+C8RMkqnEQB9n7MVEg#Value": "\u062A\u0641\u0627\u0635\u064A\u0644 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644",
        "gXcWO6LkhEqP9OcIttMvWQ#Value.-1366193183.1": "\u062A\u0645 \u0627\u0644\u0646\u0633\u062E \u0625\u0644\u0649 \u0627\u0644\u062D\u0627\u0641\u0638\u0629.",
        "U1Gp2OEZxUSe_xchC0KGeA#Title": "\u062A\u0641\u0627\u0635\u064A\u0644 \u062A\u0633\u062C\u064A\u0644 \u062F\u062E\u0648\u0644 MT5 | Deriv",
        "U1Gp2OEZxUSe_xchC0KGeA#TitleExpression.1609868915.1": "\u062A\u0641\u0627\u0635\u064A\u0644 \u062A\u0633\u062C\u064A\u0644 \u062F\u062E\u0648\u0644 MT5 | Deriv"
    },
    Ce = {
        "ar-001": {
            translations: Ee,
            isRTL: !0
        }
    };

function X(f, u, c) {
    sessionStorage.setItem("previousUrl", window.location.href)
}
i(X, "default");
var l = A; {
    let u = class u extends l.Controller.BaseViewController {
        constructor(e, t, o) {
            super(e, t, o, Ce);
            var n = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get postReauthenticate$ServerAction() {
            return this.hasOwnProperty("_postReauthenticate$ServerAction") || (this._postReauthenticate$ServerAction = function(e, t, o) {
                var n = this.controller;
                return l.Logger.startActiveSpan("PostReauthenticate", function(a) {
                    return a && (a.setAttribute("code.function", "PostReauthenticate"), a.setAttribute("outsystems.function.key", "5e977e4b-8319-4ac8-9d22-8d42df2cae9e"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), l.Flow.tryFinally(function() {
                        var p = {
                            Authorization: l.DataConversion.ServerDataConverter.to(e, l.DataTypes.DataTypes.Text),
                            Request: l.DataConversion.ServerDataConverter.to(t, l.DataTypes.DataTypes.Record)
                        };
                        return n.callServerAction("PostReauthenticate", "screenservices/uae/MT5Flow/MT5LoginDetailsScreen/ActionPostReauthenticate", "S69aQEfUk0OI0ZMkCVpxSA", p, n.callContext(o), void 0, void 0, !0).then(function(_) {
                            var s = new(n.constructor.getVariableGroupType("uae.MT5Flow.MT5LoginDetailsScreen$ActionPostReauthenticate"));
                            return s.responseOut = l.DataConversion.ServerDataConverter.from(_.Response, k), s
                        })
                    }, function() {
                        a && a.end()
                    })
                }, 0)
            }), this._postReauthenticate$ServerAction
        }
        set postReauthenticate$ServerAction(e) {
            this._postReauthenticate$ServerAction = e
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onCloseBtnEvent$Action() {
            return this.hasOwnProperty("__onCloseBtnEvent$Action") || (this.__onCloseBtnEvent$Action = function(e) {
                var t = this.model,
                    o = this.controller,
                    n = this.idService;
                return l.Logger.startActiveSpan("OnCloseBtnEvent", function(a) {
                    a && (a.setAttribute("code.function", "OnCloseBtnEvent"), a.setAttribute("outsystems.function.key", "07edafb2-1705-4221-bc0a-921247fc3c11"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        o.ensureControllerAlive("OnCloseBtnEvent"), e = o.callContext(e);
                        var p = new l.DataTypes.VariableHolder;
                        return p.value = w.getAccountDetailsInputs$Action(e), l.Navigation.navigateTo(l.Navigation.generateScreenURL("uae", "mt5/account-details", {
                            is_demo: l.DataConversion.ServerDataConverter.to(p.value.accountDetailsInputsOut.is_demoAttr, l.DataTypes.DataTypes.Boolean)
                        }), l.Transitions.createTransition(l.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }), this.__onCloseBtnEvent$Action
        }
        set _onCloseBtnEvent$Action(e) {
            this.__onCloseBtnEvent$Action = e
        }
        get _rateLimitPopupButtonClick$Action() {
            return this.hasOwnProperty("__rateLimitPopupButtonClick$Action") || (this.__rateLimitPopupButtonClick$Action = function(e) {
                var t = this.model,
                    o = this.controller,
                    n = this.idService;
                return l.Logger.startActiveSpan("RateLimitPopupButtonClick", function(a) {
                    a && (a.setAttribute("code.function", "RateLimitPopupButtonClick"), a.setAttribute("outsystems.function.key", "12feaa23-0586-4800-b5db-bc3f1fe7c667"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        o.ensureControllerAlive("RateLimitPopupButtonClick"), e = o.callContext(e), t.variables.showRateLimitPopupVar = !1
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }), this.__rateLimitPopupButtonClick$Action
        }
        set _rateLimitPopupButtonClick$Action(e) {
            this.__rateLimitPopupButtonClick$Action = e
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(e) {
                var t = this.model,
                    o = this.controller,
                    n = this.idService;
                return l.Logger.startActiveSpan("OnInitialize", function(a) {
                    a && (a.setAttribute("code.function", "OnInitialize"), a.setAttribute("outsystems.function.key", "3e43839d-9b2f-470b-bcc2-6f3d1efe22f9"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        o.ensureControllerAlive("OnInitialize"), e = o.callContext(e);
                        var p = new l.DataTypes.VariableHolder(new(l.Controller.BaseController.getJSONDeserializeOutputType(R)));
                        p.value.dataOut = l.JSONUtils.deserializeFromJSON(P.getSelectedAccountDetails(), R, !1), t.variables.mt5LoginIdVar = p.value.dataOut.platform_account_idAttr, t.variables.mt5BrokerVar = p.value.dataOut.brokerAttr, t.variables.mt5ServerVar = p.value.dataOut.descriptionAttr, t.variables.sendingOTPVar = !1
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(e) {
            this.__onInitialize$Action = e
        }
        get _onForgotPasswordClick$Action() {
            return this.hasOwnProperty("__onForgotPasswordClick$Action") || (this.__onForgotPasswordClick$Action = function(e) {
                var t = this.model,
                    o = this.controller,
                    n = this.idService;
                return l.Logger.startActiveSpan("OnForgotPasswordClick", function(a) {
                    return a && (a.setAttribute("code.function", "OnForgotPasswordClick"), a.setAttribute("outsystems.function.key", "a042c23a-e7b8-4542-ad3a-460d6a42c047"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), l.Flow.tryFinally(function() {
                        o.ensureControllerAlive("OnForgotPasswordClick"), e = o.callContext(e);
                        var p = new l.DataTypes.VariableHolder(new l.DataTypes.ErrorHandlerOutputType),
                            _ = new l.DataTypes.VariableHolder,
                            s = new l.DataTypes.VariableHolder,
                            T = new l.DataTypes.VariableHolder,
                            b = new l.DataTypes.VariableHolder(new(l.Controller.BaseController.getJSONDeserializeOutputType(R)));
                        return l.Flow.executeAsyncFlow(function() {
                            return T.value = w.getUserMetaData$Action(e), t.variables.sendingOTPVar = !0, b.value.dataOut = l.JSONUtils.deserializeFromJSON(P.getSelectedAccountDetails(), R, !1), s.value = w.getAuth$Action(e), t.flush(), o.postReauthenticate$ServerAction(s.value.tokenOut, (function() {
                                var y = new le;
                                return y.emailAttr = P.getProvider() === "email" ? T.value.userMetadataOut.emailAttr : "", y.phoneAttr = P.getProvider() === "phone" ? T.value.userMetadataOut.phoneAttr !== l.BuiltinFunctions.nullTextIdentifier() && l.BuiltinFunctions.substr(T.value.userMetadataOut.phoneAttr, 0, 1) !== "+" ? "+" + T.value.userMetadataOut.phoneAttr : T.value.userMetadataOut.phoneAttr : "", y.otp_typeAttr = "mt5_password_change", y.preferred_languageAttr = l.BuiltinFunctions.toLower(w.languageMapper$Action(e).charCodeOut), y.typeAttr = b.value.dataOut.platform_typeAttr, y
                            })(), e).then(function(y) {
                                _.value = y
                            }).then(function() {
                                if (_.value.responseOut.errorsAttr.getCurrent(e.iterationContext).codeAttr === "RateLimit") t.variables.sendingOTPVar = !1, P.setTimestamp(l.BuiltinFunctions.nullTextIdentifier()), t.variables.showRateLimitPopupVar = !0;
                                else return t.variables.sendingOTPVar = !1, P.setTimestamp(l.BuiltinFunctions.nullTextIdentifier()), l.Logger.startActiveSpan("StoreNavigationUrl", function(y) {
                                    y && (y.setAttribute("code.function", "StoreNavigationUrl"), y.setAttribute("outsystems.function.key", "228d950e-f34a-43fe-b53d-46aacc71209b"), y.setAttribute("outsystems.function.owner.name", "uae"), y.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), y.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                    try {
                                        return o.safeExecuteJSNode(X, "StoreNavigationUrl", "OnForgotPasswordClick", null, function(v) {}, {}, {})
                                    } finally {
                                        y && y.end()
                                    }
                                }, 1), P.setCode(l.BuiltinFunctions.nullTextIdentifier()), P.setVerificationProvider(P.getProvider()), l.Flow.returnAsync(l.Navigation.navigateTo(l.Navigation.generateScreenURL("uae", "mt5/reset-password", {
                                    from: l.DataConversion.ServerDataConverter.to("mt5_account_details", l.DataTypes.DataTypes.Text)
                                }), l.Transitions.createTransition(l.Transitions.TransitionAnimation.Default), e, !0))
                            })
                        }).catch(function(y) {
                            if (l.Logger.debug("MT5LoginDetailsScreen.OnForgotPasswordClick", l.Exceptions.getMessage(y)), !l.Exceptions.isSystem(y)) return l.Logger.error(null, y, null, null, 1), p.value.exceptionMessageAttr = l.Exceptions.getMessage(y), l.Logger.startActiveSpan("AllExceptions", function(v) {
                                return v && (v.setAttribute("code.function", "AllExceptions"), v.setAttribute("outsystems.function.key", "e9382b0b-e247-40e3-bf7c-ec029e5ba405"), v.setAttribute("outsystems.function.owner.name", "uae"), v.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), v.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER")), l.Flow.tryFinally(function() {
                                    return l.Flow.executeAsyncFlow(function() {
                                        return t.variables.sendingOTPVar = !1, l.Flow.returnAsync()
                                    })
                                }, function() {
                                    v && v.end()
                                })
                            }, 1);
                            throw y
                        })
                    }, function() {
                        a && a.end()
                    })
                }, 1)
            }), this.__onForgotPasswordClick$Action
        }
        set _onForgotPasswordClick$Action(e) {
            this.__onForgotPasswordClick$Action = e
        }
        get _copyOnClick$Action() {
            return this.hasOwnProperty("__copyOnClick$Action") || (this.__copyOnClick$Action = function(e, t) {
                var o = this.model,
                    n = this.controller,
                    a = this.idService;
                return l.Logger.startActiveSpan("CopyOnClick", function(p) {
                    return p && (p.setAttribute("code.function", "CopyOnClick"), p.setAttribute("outsystems.function.key", "afdfa0c3-d631-4fb7-86aa-3daa648f71f3"), p.setAttribute("outsystems.function.owner.name", "uae"), p.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), p.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), l.Flow.tryFinally(function() {
                        n.ensureControllerAlive("CopyOnClick"), t = n.callContext(t);
                        var _ = new l.DataTypes.VariableHolder(new(n.constructor.getVariableGroupType("uae.MT5Flow.MT5LoginDetailsScreen.CopyOnClick$vars")));
                        _.value.valueInLocal = e;
                        var s = new l.DataTypes.VariableHolder,
                            T = new l.DataTypes.VariableHolder;
                        return l.Flow.executeAsyncFlow(function() {
                            return o.flush(), ge.copyToClipboard$Action(_.value.valueInLocal, t).then(function(b) {
                                T.value = b
                            }).then(function() {
                                T.value.successOut && (s.value = w.getToastConfig$Action(t), me.iziToast_Show$Action("", l.Injector.resolve(l.ServiceNames.TranslationsService).getMessage("gXcWO6LkhEqP9OcIttMvWQ#Value.-1366193183.1", "Copied to clipboard."), se.iziToast_Position.topCenter, s.value.configOut, t))
                            })
                        })
                    }, function() {
                        p && p.end()
                    })
                }, 1)
            }), this.__copyOnClick$Action
        }
        set _copyOnClick$Action(e) {
            this.__copyOnClick$Action = e
        }
        onCloseBtnEvent$Action(e) {
            var t = this.controller;
            return l.Logger.startActiveSpan("OnCloseBtnEvent__proxy", function(o) {
                o && (o.setAttribute("code.function", "OnCloseBtnEvent"), o.setAttribute("outsystems.function.key", "07edafb2-1705-4221-bc0a-921247fc3c11"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onCloseBtnEvent$Action, e)
                } finally {
                    o && o.end()
                }
            }, 0)
        }
        rateLimitPopupButtonClick$Action(e) {
            var t = this.controller;
            return l.Logger.startActiveSpan("RateLimitPopupButtonClick__proxy", function(o) {
                o && (o.setAttribute("code.function", "RateLimitPopupButtonClick"), o.setAttribute("outsystems.function.key", "12feaa23-0586-4800-b5db-bc3f1fe7c667"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._rateLimitPopupButtonClick$Action, e)
                } finally {
                    o && o.end()
                }
            }, 0)
        }
        onInitialize$Action(e) {
            var t = this.controller;
            return l.Logger.startActiveSpan("OnInitialize__proxy", function(o) {
                o && (o.setAttribute("code.function", "OnInitialize"), o.setAttribute("outsystems.function.key", "3e43839d-9b2f-470b-bcc2-6f3d1efe22f9"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onInitialize$Action, e)
                } finally {
                    o && o.end()
                }
            }, 0)
        }
        onForgotPasswordClick$Action(e) {
            var t = this.controller;
            return l.Logger.startActiveSpan("OnForgotPasswordClick__proxy", function(o) {
                return o && (o.setAttribute("code.function", "OnForgotPasswordClick"), o.setAttribute("outsystems.function.key", "a042c23a-e7b8-4542-ad3a-460d6a42c047"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), l.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._onForgotPasswordClick$Action, e)
                }, function() {
                    o && o.end()
                })
            }, 0)
        }
        copyOnClick$Action(e, t) {
            var o = this.controller;
            return l.Logger.startActiveSpan("CopyOnClick__proxy", function(n) {
                return n && (n.setAttribute("code.function", "CopyOnClick"), n.setAttribute("outsystems.function.key", "afdfa0c3-d631-4fb7-86aa-3daa648f71f3"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), l.Flow.tryFinally(function() {
                    return o.safeExecuteClientAction(o._copyOnClick$Action, t, e)
                }, function() {
                    n && n.end()
                })
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(e) {
                var t = this.controller,
                    o = this.model,
                    n = this.idService;
                return t.onInitialize$Action(e)
            }), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(e) {
            this._onInitializeEventHandler = e
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = null), this._onReadyEventHandler
        }
        set onReadyEventHandler(e) {
            this._onReadyEventHandler = e
        }
        get onRenderEventHandler() {
            return this.hasOwnProperty("_onRenderEventHandler") || (this._onRenderEventHandler = null), this._onRenderEventHandler
        }
        set onRenderEventHandler(e) {
            this._onRenderEventHandler = e
        }
        get onDestroyEventHandler() {
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = null), this._onDestroyEventHandler
        }
        set onDestroyEventHandler(e) {
            this._onDestroyEventHandler = e
        }
        get onParametersChangedEventHandler() {
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = null), this._onParametersChangedEventHandler
        }
        set onParametersChangedEventHandler(e) {
            this._onParametersChangedEventHandler = e
        }
        get onSyncStartEventHandler() {
            return this.hasOwnProperty("_onSyncStartEventHandler") || (this._onSyncStartEventHandler = null), this._onSyncStartEventHandler
        }
        set onSyncStartEventHandler(e) {
            this._onSyncStartEventHandler = e
        }
        get onSyncCompleteEventHandler() {
            return this.hasOwnProperty("_onSyncCompleteEventHandler") || (this._onSyncCompleteEventHandler = null), this._onSyncCompleteEventHandler
        }
        set onSyncCompleteEventHandler(e) {
            this._onSyncCompleteEventHandler = e
        }
        get onSyncErrorEventHandler() {
            return this.hasOwnProperty("_onSyncErrorEventHandler") || (this._onSyncErrorEventHandler = null), this._onSyncErrorEventHandler
        }
        set onSyncErrorEventHandler(e) {
            this._onSyncErrorEventHandler = e
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(e) {
                return z.default.handleError(e, this.callContext())
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return w.defaultTimeout
        }
    };
    i(u, "ControllerInner");
    let f = u;
    N = f, N.registerVariableGroupType("uae.MT5Flow.MT5LoginDetailsScreen$ActionPostReauthenticate", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: !1,
        dataType: l.DataTypes.DataTypes.Record,
        defaultValue: i(function() {
            return new k
        }, "defaultValue"),
        complexType: k
    }]), N.registerVariableGroupType("uae.MT5Flow.MT5LoginDetailsScreen.CopyOnClick$vars", [{
        name: "value",
        attrName: "valueInLocal",
        mandatory: !0,
        dataType: l.DataTypes.DataTypes.Text,
        defaultValue: i(function() {
            return ""
        }, "defaultValue")
    }])
}
var N, Y = new l.Controller.ControllerFactory(N, ce);
var d = Pe(we());
var h = A,
    re = class re extends h.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("sendingOTP", "sendingOTPVar", "sendingOTP", !0, !1, h.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("mt5Broker", "mt5BrokerVar", "mt5Broker", !0, !1, h.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("mt5LoginId", "mt5LoginIdVar", "mt5LoginId", !0, !1, h.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("mt5Server", "mt5ServerVar", "mt5Server", !0, !1, h.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("showRateLimitPopup", "showRateLimitPopupVar", "showRateLimitPopup", !0, !1, h.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1)].concat(h.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
i(re, "VariablesRecord");
var F = re;
F.init();
var oe = class oe extends h.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
i(oe, "WidgetsRecord");
var ee = oe,
    V = class V extends h.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return F
        }
        static getWidgetsRecordConstructor() {
            return ee
        }
        static get hasValidationWidgets() {
            return V._hasValidationWidgetsValue === void 0 && (V._hasValidationWidgetsValue = void 0 || void 0 || void 0 || void 0), V._hasValidationWidgetsValue
        }
        setInputs(u) {}
    };
i(V, "Model");
var I = V;
I._hasValidationWidgetsValue = void 0;
var te = new h.Model.ModelFactory(I);
var ne = B.PlaceholderContent,
    Ht = B.IteratorPlaceholderContent,
    De = i(function() {
        var f = pe(function(u) {
            var c = u.model,
                e = u.controller,
                t = u.controller.idService,
                o = e.validationService,
                n = e.callContext(),
                a = M,
                p = $,
                _ = {
                    props: u,
                    validateWidget: i(function(v) {
                        u.validateWidget(u, v)
                    }, "validateWidget")
                },
                s = c,
                T = ve,
                b = fe,
                y = de();
            return d.createElement("div", u.rootNodeProperties, T(ue.isDesktop$Action(n).isDesktopOut, !1, this, function() {
                return [d.createElement(U, {
                    getOwnerSpan: i(function() {
                        return y.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: i(function() {
                        return y.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        ShowBackbutton: !1,
                        ShowInfoButton: !1,
                        ShowClosebutton: !0
                    },
                    events: {
                        _handleError: i(function(v) {
                            e.handleError(v)
                        }, "_handleError"),
                        closeBtnEvent$Action: i(function() {
                            var v = typeof n != "undefined" && n !== null ? n.clone() : e.callContext().clone();
                            e.onCloseBtnEvent$Action(e.callContext(v))
                        }, "closeBtnEvent$Action")
                    },
                    _validationProps: {
                        validationService: o
                    },
                    _idProps: {
                        service: t,
                        uuid: "0",
                        alias: "1"
                    },
                    _widgetRecordProvider: s,
                    placeholders: {
                        contentbody: new ne(function() {
                            return [d.createElement(m, {
                                align: 0,
                                animate: !1,
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "1"
                                },
                                _widgetRecordProvider: s
                            }, d.createElement(S, {
                                extendedProperties: {
                                    style: "color: var(--text-brandPrimaryProminent, #00375C); font-size: 20px; font-style: normal; font-weight: 900; line-height: normal; margin-bottom: 24px;"
                                },
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                _idProps: {
                                    service: t,
                                    uuid: "2"
                                },
                                _widgetRecordProvider: s
                            }, b(p("RZWA+C8RMkqnEQB9n7MVEg#Value", "Login details"))), d.createElement(m, {
                                align: 0,
                                animate: !1,
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "3"
                                },
                                _widgetRecordProvider: s
                            }, d.createElement(m, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "margin-bottom: 16px;"
                                },
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    name: "DetailsContainer2"
                                },
                                _widgetRecordProvider: s
                            }, d.createElement(m, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "display: flex; justify-content: space-between;"
                                },
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    name: "Broker2"
                                },
                                _widgetRecordProvider: s
                            }, d.createElement(m, {
                                align: 0,
                                animate: !1,
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "6"
                                },
                                _widgetRecordProvider: s
                            }, d.createElement(S, {
                                extendedProperties: {
                                    style: "color: var(--text-subtle, rgba(0, 0, 0, 0.48)); font-size: 14px; font-style: normal; font-weight: 400; line-height: 22px;"
                                },
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                _idProps: {
                                    service: t,
                                    uuid: "7"
                                },
                                _widgetRecordProvider: s
                            }, b(p("EqdmVzcVdEyifEGAiW6PnA#Value", "Broker"))), d.createElement(x, {
                                extendedProperties: {
                                    style: "color: var(--text-prominent, rgba(0, 0, 0, 0.96)); font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px;"
                                },
                                value: c.getCachedValue(t.getId("OnP2SVK6102YVTkXnoIS9A.Value"), function() {
                                    return w.translate$Action(c.variables.mt5BrokerVar, n).translatedTextOut
                                }, function() {
                                    return c.variables.mt5BrokerVar
                                }),
                                _idProps: {
                                    service: t,
                                    uuid: "8"
                                },
                                _widgetRecordProvider: s
                            })), d.createElement(D, {
                                extendedEvents: {
                                    onClick: i(function() {
                                        return Promise.resolve().then(function() {
                                            var v = typeof n != "undefined" && n !== null ? n.clone() : e.callContext().clone();
                                            return e.copyOnClick$Action(c.variables.mt5BrokerVar, e.callContext(v))
                                        })
                                    }, "onClick")
                                },
                                extendedProperties: {
                                    style: "cursor: pointer;"
                                },
                                image: E.VersionedURL.getVersionedUrl("img/uae.ic_copy.svg"),
                                type: 0,
                                _idProps: {
                                    service: t,
                                    name: "brokerCopy2"
                                },
                                _widgetRecordProvider: s
                            })), d.createElement(O, {
                                getOwnerSpan: i(function() {
                                    return y.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: i(function() {
                                    return y.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {},
                                events: {
                                    _handleError: i(function(v) {
                                        e.handleError(v)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: o
                                },
                                _idProps: {
                                    service: t,
                                    uuid: "10",
                                    alias: "2"
                                },
                                _widgetRecordProvider: s,
                                _dependencies: []
                            }), d.createElement(m, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "display: flex; justify-content: space-between;"
                                },
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    name: "Server2"
                                },
                                _widgetRecordProvider: s
                            }, d.createElement(m, {
                                align: 0,
                                animate: !1,
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "12"
                                },
                                _widgetRecordProvider: s
                            }, d.createElement(S, {
                                extendedProperties: {
                                    style: "color: var(--text-subtle, rgba(0, 0, 0, 0.48)); font-size: 14px; font-style: normal; font-weight: 400; line-height: 22px;"
                                },
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                _idProps: {
                                    service: t,
                                    uuid: "13"
                                },
                                _widgetRecordProvider: s
                            }, b(p("FIlim2FuMkCjKk5DP4iCIQ#Value", "Server"))), d.createElement(x, {
                                extendedProperties: {
                                    style: "color: var(--text-prominent, rgba(0, 0, 0, 0.96)); font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px;"
                                },
                                value: c.variables.mt5ServerVar,
                                _idProps: {
                                    service: t,
                                    uuid: "14"
                                },
                                _widgetRecordProvider: s
                            })), d.createElement(D, {
                                extendedEvents: {
                                    onClick: i(function() {
                                        return Promise.resolve().then(function() {
                                            var v = typeof n != "undefined" && n !== null ? n.clone() : e.callContext().clone();
                                            return e.copyOnClick$Action(c.variables.mt5ServerVar, e.callContext(v))
                                        })
                                    }, "onClick")
                                },
                                extendedProperties: {
                                    style: "cursor: pointer;"
                                },
                                image: E.VersionedURL.getVersionedUrl("img/uae.ic_copy.svg"),
                                type: 0,
                                _idProps: {
                                    service: t,
                                    name: "serverCopy2"
                                },
                                _widgetRecordProvider: s
                            })), d.createElement(O, {
                                getOwnerSpan: i(function() {
                                    return y.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: i(function() {
                                    return y.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {},
                                events: {
                                    _handleError: i(function(v) {
                                        e.handleError(v)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: o
                                },
                                _idProps: {
                                    service: t,
                                    uuid: "16",
                                    alias: "3"
                                },
                                _widgetRecordProvider: s,
                                _dependencies: []
                            }), d.createElement(m, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "display: flex; justify-content: space-between;"
                                },
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    name: "LoginId2"
                                },
                                _widgetRecordProvider: s
                            }, d.createElement(m, {
                                align: 0,
                                animate: !1,
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "18"
                                },
                                _widgetRecordProvider: s
                            }, d.createElement(S, {
                                extendedProperties: {
                                    style: "color: var(--text-subtle, rgba(0, 0, 0, 0.48)); font-size: 14px; font-style: normal; font-weight: 400; line-height: 22px;"
                                },
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                _idProps: {
                                    service: t,
                                    uuid: "19"
                                },
                                _widgetRecordProvider: s
                            }, b(p("SUOzsPU7u0aAdvEeULZBZg#Value", "Login ID"))), d.createElement(x, {
                                extendedProperties: {
                                    style: "color: var(--text-prominent, rgba(0, 0, 0, 0.96)); font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px;"
                                },
                                value: c.variables.mt5LoginIdVar,
                                _idProps: {
                                    service: t,
                                    uuid: "20"
                                },
                                _widgetRecordProvider: s
                            })), d.createElement(D, {
                                extendedEvents: {
                                    onClick: i(function() {
                                        return Promise.resolve().then(function() {
                                            var v = typeof n != "undefined" && n !== null ? n.clone() : e.callContext().clone();
                                            return e.copyOnClick$Action(c.variables.mt5LoginIdVar, e.callContext(v))
                                        })
                                    }, "onClick")
                                },
                                extendedProperties: {
                                    style: "cursor: pointer;"
                                },
                                image: E.VersionedURL.getVersionedUrl("img/uae.ic_copy.svg"),
                                type: 0,
                                _idProps: {
                                    service: t,
                                    name: "loginCopy2"
                                },
                                _widgetRecordProvider: s
                            })), d.createElement(O, {
                                getOwnerSpan: i(function() {
                                    return y.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: i(function() {
                                    return y.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {},
                                events: {
                                    _handleError: i(function(v) {
                                        e.handleError(v)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: o
                                },
                                _idProps: {
                                    service: t,
                                    uuid: "22",
                                    alias: "4"
                                },
                                _widgetRecordProvider: s,
                                _dependencies: []
                            }), d.createElement(m, {
                                align: 0,
                                animate: !0,
                                extendedEvents: {
                                    onClick: i(function() {
                                        return Promise.resolve().then(function() {
                                            var v = typeof n != "undefined" && n !== null ? n.clone() : e.callContext().clone();
                                            return e.onForgotPasswordClick$Action(e.callContext(v))
                                        })
                                    }, "onClick")
                                },
                                extendedProperties: {
                                    style: "margin-bottom: 0px; padding: 2px 0px 2px 0px; text-align: end;"
                                },
                                visible: c.variables.sendingOTPVar === !1,
                                _idProps: {
                                    service: t,
                                    uuid: "23"
                                },
                                _widgetRecordProvider: s
                            }, d.createElement(S, {
                                extendedProperties: {
                                    style: "text-align: end;"
                                },
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                style: "cursor-pointer",
                                _idProps: {
                                    service: t,
                                    uuid: "24"
                                },
                                _widgetRecordProvider: s
                            }, d.createElement(H, {
                                extendedProperties: {
                                    style: "color: var(--button-black-tertiary-label, #000); font-size: 12px; font-style: normal; font-weight: 700; line-height: 18px; text-align: end; text-decoration-line: underline; text-decoration-skip-ink: none; text-decoration-style: solid; text-decoration-thickness: auto; text-underline-offset: auto; text-underline-position: from-font;"
                                },
                                style: "cursor-pointer",
                                text: [b(p("o8X+DLK0B0+wt4TOIB6kcA#Value", "Forgot password?"))],
                                _idProps: {
                                    service: t,
                                    uuid: "25"
                                },
                                _widgetRecordProvider: s
                            }))), d.createElement(m, {
                                align: 0,
                                animate: !0,
                                extendedProperties: {
                                    style: "display: flex; flex-direction: row-reverse;"
                                },
                                visible: c.variables.sendingOTPVar === !0,
                                _idProps: {
                                    service: t,
                                    uuid: "26"
                                },
                                _widgetRecordProvider: s
                            }, d.createElement(m, {
                                align: 0,
                                animate: !1,
                                gridProperties: {
                                    classes: "OSInline"
                                },
                                style: "spinner",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "27"
                                },
                                _widgetRecordProvider: s
                            })))))]
                        })
                    },
                    _dependencies: [a(c.variables.sendingOTPVar), a(c.variables.mt5LoginIdVar), a(c.variables.mt5ServerVar), a(c.variables.mt5BrokerVar)]
                })]
            }, function() {
                return [d.createElement(W, {
                    getOwnerSpan: i(function() {
                        return y.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: i(function() {
                        return y.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        has_close_icon: !0,
                        hasRighAction: !1,
                        has_back_button: !1
                    },
                    events: {
                        _handleError: i(function(v) {
                            e.handleError(v)
                        }, "_handleError"),
                        closeEvent$Action: i(function() {
                            var v = typeof n != "undefined" && n !== null ? n.clone() : e.callContext().clone();
                            e.onCloseBtnEvent$Action(e.callContext(v))
                        }, "closeEvent$Action")
                    },
                    _validationProps: {
                        validationService: o
                    },
                    _idProps: {
                        service: t,
                        uuid: "28",
                        alias: "5"
                    },
                    _widgetRecordProvider: s,
                    placeholders: {
                        content: new ne(function() {
                            return [d.createElement(m, {
                                align: 0,
                                animate: !1,
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "29"
                                },
                                _widgetRecordProvider: s
                            }, d.createElement(S, {
                                extendedProperties: {
                                    style: "color: var(--text-brandPrimaryProminent, #00375C); font-size: 20px; font-style: normal; font-weight: 900; line-height: normal; margin-bottom: 24px;"
                                },
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                _idProps: {
                                    service: t,
                                    uuid: "30"
                                },
                                _widgetRecordProvider: s
                            }, b(p("QQl91MHylEO3aKI8Yep6wA#Value", "Login details"))), d.createElement(m, {
                                align: 0,
                                animate: !1,
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "31"
                                },
                                _widgetRecordProvider: s
                            }, d.createElement(m, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "margin-bottom: 16px;"
                                },
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    name: "DetailsContainer"
                                },
                                _widgetRecordProvider: s
                            }, d.createElement(m, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "display: flex; justify-content: space-between;"
                                },
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    name: "Broker"
                                },
                                _widgetRecordProvider: s
                            }, d.createElement(m, {
                                align: 0,
                                animate: !1,
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "34"
                                },
                                _widgetRecordProvider: s
                            }, d.createElement(S, {
                                extendedProperties: {
                                    style: "color: var(--text-subtle, rgba(0, 0, 0, 0.48)); font-size: 14px; font-style: normal; font-weight: 400; line-height: 22px;"
                                },
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                _idProps: {
                                    service: t,
                                    uuid: "35"
                                },
                                _widgetRecordProvider: s
                            }, b(p("++MiqcmKlUuKl4I6MMHEGw#Value", "Broker"))), d.createElement(x, {
                                extendedProperties: {
                                    style: "color: var(--text-prominent, rgba(0, 0, 0, 0.96)); font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px;"
                                },
                                value: c.getCachedValue(t.getId("zC+dvQEI6Ue54cR_5C6DjQ.Value"), function() {
                                    return w.translate$Action(c.variables.mt5BrokerVar, n).translatedTextOut
                                }, function() {
                                    return c.variables.mt5BrokerVar
                                }),
                                _idProps: {
                                    service: t,
                                    uuid: "36"
                                },
                                _widgetRecordProvider: s
                            })), d.createElement(D, {
                                extendedEvents: {
                                    onClick: i(function() {
                                        return Promise.resolve().then(function() {
                                            var v = typeof n != "undefined" && n !== null ? n.clone() : e.callContext().clone();
                                            return e.copyOnClick$Action(c.variables.mt5BrokerVar, e.callContext(v))
                                        })
                                    }, "onClick")
                                },
                                image: E.VersionedURL.getVersionedUrl("img/uae.ic_copy.svg"),
                                type: 0,
                                _idProps: {
                                    service: t,
                                    name: "brokerCopy"
                                },
                                _widgetRecordProvider: s
                            })), d.createElement(O, {
                                getOwnerSpan: i(function() {
                                    return y.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: i(function() {
                                    return y.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {},
                                events: {
                                    _handleError: i(function(v) {
                                        e.handleError(v)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: o
                                },
                                _idProps: {
                                    service: t,
                                    uuid: "38",
                                    alias: "6"
                                },
                                _widgetRecordProvider: s,
                                _dependencies: []
                            }), d.createElement(m, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "display: flex; justify-content: space-between;"
                                },
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    name: "Server"
                                },
                                _widgetRecordProvider: s
                            }, d.createElement(m, {
                                align: 0,
                                animate: !1,
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "40"
                                },
                                _widgetRecordProvider: s
                            }, d.createElement(S, {
                                extendedProperties: {
                                    style: "color: var(--text-subtle, rgba(0, 0, 0, 0.48)); font-size: 14px; font-style: normal; font-weight: 400; line-height: 22px;"
                                },
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                _idProps: {
                                    service: t,
                                    uuid: "41"
                                },
                                _widgetRecordProvider: s
                            }, b(p("7mNorIqY7UuTExJCpNS64A#Value", "Server"))), d.createElement(x, {
                                extendedProperties: {
                                    style: "color: var(--text-prominent, rgba(0, 0, 0, 0.96)); font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px;"
                                },
                                value: c.variables.mt5ServerVar,
                                _idProps: {
                                    service: t,
                                    uuid: "42"
                                },
                                _widgetRecordProvider: s
                            })), d.createElement(D, {
                                extendedEvents: {
                                    onClick: i(function() {
                                        return Promise.resolve().then(function() {
                                            var v = typeof n != "undefined" && n !== null ? n.clone() : e.callContext().clone();
                                            return e.copyOnClick$Action(c.variables.mt5ServerVar, e.callContext(v))
                                        })
                                    }, "onClick")
                                },
                                image: E.VersionedURL.getVersionedUrl("img/uae.ic_copy.svg"),
                                type: 0,
                                _idProps: {
                                    service: t,
                                    name: "serverCopy"
                                },
                                _widgetRecordProvider: s
                            })), d.createElement(O, {
                                getOwnerSpan: i(function() {
                                    return y.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: i(function() {
                                    return y.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {},
                                events: {
                                    _handleError: i(function(v) {
                                        e.handleError(v)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: o
                                },
                                _idProps: {
                                    service: t,
                                    uuid: "44",
                                    alias: "7"
                                },
                                _widgetRecordProvider: s,
                                _dependencies: []
                            }), d.createElement(m, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "display: flex; justify-content: space-between;"
                                },
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    name: "LoginId"
                                },
                                _widgetRecordProvider: s
                            }, d.createElement(m, {
                                align: 0,
                                animate: !1,
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "46"
                                },
                                _widgetRecordProvider: s
                            }, d.createElement(S, {
                                extendedProperties: {
                                    style: "color: var(--text-subtle, rgba(0, 0, 0, 0.48)); font-size: 14px; font-style: normal; font-weight: 400; line-height: 22px;"
                                },
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                _idProps: {
                                    service: t,
                                    uuid: "47"
                                },
                                _widgetRecordProvider: s
                            }, b(p("E++reQVWLkOb9fnk6vi65A#Value", "Login ID"))), d.createElement(x, {
                                extendedProperties: {
                                    style: "color: var(--text-prominent, rgba(0, 0, 0, 0.96)); font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px;"
                                },
                                value: c.variables.mt5LoginIdVar,
                                _idProps: {
                                    service: t,
                                    uuid: "48"
                                },
                                _widgetRecordProvider: s
                            })), d.createElement(D, {
                                extendedEvents: {
                                    onClick: i(function() {
                                        return Promise.resolve().then(function() {
                                            var v = typeof n != "undefined" && n !== null ? n.clone() : e.callContext().clone();
                                            return e.copyOnClick$Action(c.variables.mt5LoginIdVar, e.callContext(v))
                                        })
                                    }, "onClick")
                                },
                                image: E.VersionedURL.getVersionedUrl("img/uae.ic_copy.svg"),
                                type: 0,
                                _idProps: {
                                    service: t,
                                    name: "loginCopy"
                                },
                                _widgetRecordProvider: s
                            })), d.createElement(O, {
                                getOwnerSpan: i(function() {
                                    return y.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: i(function() {
                                    return y.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {},
                                events: {
                                    _handleError: i(function(v) {
                                        e.handleError(v)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: o
                                },
                                _idProps: {
                                    service: t,
                                    uuid: "50",
                                    alias: "8"
                                },
                                _widgetRecordProvider: s,
                                _dependencies: []
                            }), d.createElement(m, {
                                align: 0,
                                animate: !0,
                                extendedEvents: {
                                    onClick: i(function() {
                                        return Promise.resolve().then(function() {
                                            var v = typeof n != "undefined" && n !== null ? n.clone() : e.callContext().clone();
                                            return e.onForgotPasswordClick$Action(e.callContext(v))
                                        })
                                    }, "onClick")
                                },
                                extendedProperties: {
                                    style: "margin-bottom: 0px; padding: 2px 0px 2px 0px; text-align: end;"
                                },
                                visible: c.variables.sendingOTPVar === !1,
                                _idProps: {
                                    service: t,
                                    uuid: "51"
                                },
                                _widgetRecordProvider: s
                            }, d.createElement(S, {
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                _idProps: {
                                    service: t,
                                    uuid: "52"
                                },
                                _widgetRecordProvider: s
                            }, d.createElement(H, {
                                extendedProperties: {
                                    style: "color: var(--button-black-tertiary-label, #000); font-size: 12px; font-style: normal; font-weight: 700; line-height: 18px; text-align: end; text-decoration-line: underline; text-decoration-skip-ink: none; text-decoration-style: solid; text-decoration-thickness: auto; text-underline-offset: auto; text-underline-position: from-font;"
                                },
                                text: [b(p("rrCuDbdKHEKX_kMr66gyGQ#Value", "Forgot password?"))],
                                _idProps: {
                                    service: t,
                                    uuid: "53"
                                },
                                _widgetRecordProvider: s
                            }))), d.createElement(m, {
                                align: 0,
                                animate: !0,
                                extendedProperties: {
                                    style: "display: flex; flex-direction: row-reverse;"
                                },
                                visible: c.variables.sendingOTPVar === !0,
                                _idProps: {
                                    service: t,
                                    uuid: "54"
                                },
                                _widgetRecordProvider: s
                            }, d.createElement(m, {
                                align: 0,
                                animate: !1,
                                gridProperties: {
                                    classes: "OSInline"
                                },
                                style: "spinner",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "55"
                                },
                                _widgetRecordProvider: s
                            })))))]
                        }),
                        footer: ne.Empty
                    },
                    _dependencies: [a(c.variables.sendingOTPVar), a(c.variables.mt5LoginIdVar), a(c.variables.mt5ServerVar), a(c.variables.mt5BrokerVar)]
                })]
            }), d.createElement(ye, {
                extendedProperties: {
                    style: "width: 328px;"
                },
                showPopup: c.variables.showRateLimitPopupVar,
                style: "popup-dialog padding-base",
                _idProps: {
                    service: t,
                    uuid: "56"
                },
                _widgetRecordProvider: s
            }, d.createElement(m, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "57"
                },
                _widgetRecordProvider: s
            }, d.createElement(J, {
                getOwnerSpan: i(function() {
                    return y.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: i(function() {
                    return y.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: i(function(v) {
                        e.handleError(v)
                    }, "_handleError"),
                    buttonClick$Action: i(function() {
                        var v = typeof n != "undefined" && n !== null ? n.clone() : e.callContext().clone();
                        e.rateLimitPopupButtonClick$Action(e.callContext(v))
                    }, "buttonClick$Action")
                },
                _validationProps: {
                    validationService: o
                },
                _idProps: {
                    service: t,
                    uuid: "58",
                    alias: "9"
                },
                _widgetRecordProvider: s,
                _dependencies: []
            }))))
        }, {
            topLevelComponent: !0,
            getAttributes: i(function() {
                return {
                    codeFunction: "MT5LoginDetailsScreen",
                    functionKey: "d8a95153-19e1-44c5-9eff-17210b428678",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "MT5Flow.MT5LoginDetailsScreen",
            modelFactory: te,
            controllerFactory: Y,
            getTitle: i(function(u) {
                var c = u.model,
                    e = u.controller,
                    t = u.controller.idService,
                    o = e.validationService,
                    n = e.callContext(),
                    a = M,
                    p = $,
                    _ = {
                        props: u,
                        validateWidget: i(function(s) {
                            u.validateWidget(u, s)
                        }, "validateWidget")
                    };
                return ie.resolve(ae.TranslationsService).getMessage("U1Gp2OEZxUSe_xchC0KGeA#TitleExpression.1609868915.1", "MT5 login details | Deriv")
            }, "getTitle")
        });
        return f.getCssDependencies = function() {
            return ["css/OutSystemsUI.OutSystemsUI.css", "css/uae.ChampionApp.css", "css/uae.MT5Flow.MT5LoginDetailsScreen.css", "css/uae.ChampionApp.extra.css", "css/OutSystemsReactWidgets.css"]
        }, f.getJsDependencies = function() {
            return []
        }, f.getBlocks = function() {
            return [U, O, W, J]
        }, f
    }, "componentFactory"),
    Ve = De();
export {
    Y as controllerModule, te as modelModule, Ve as viewModule, z as webFlowControllerModule
};