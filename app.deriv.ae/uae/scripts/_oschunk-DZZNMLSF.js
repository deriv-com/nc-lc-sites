import {
    W as v,
    c as d
} from "./_oschunk-M5BUVJ72.js";
var J = {
        staticEntities: {}
    },
    P = J.staticEntities;

function b(t, r, u, n) {
    (function() {
        let o = document.querySelector("link[rel='" + t.RelName + "']");
        if (!(t.URL == "" && o == null)) {
            if (t.URL == "") {
                o.remove();
                return
            }
            if (o == null) {
                var a = document.createElement("link");
                a.rel = t.RelName, a.href = t.URL, document.head.appendChild(a);
                return
            }
            o.href = t.URL
        }
    })()
}
d(b, "default");

function x(t, r, u, n) {
    (function() {
        let o = document.querySelector("meta[name='" + t.TagName + "']");
        if (!(t.Value == "" && o == null)) {
            if (t.Value == "") {
                o.remove();
                return
            }
            if (o == null) {
                var a = document.createElement("meta");
                a.name = t.TagName, a.content = t.Value, document.head.appendChild(a);
                return
            }
            o.content = t.Value
        }
    })()
}
d(x, "default");

function N(t, r, u, n) {
    (function() {
        let o = document.querySelector("meta[property='" + t.TagProperty + "']");
        if (!(t.Value == "" && o == null)) {
            if (t.Value == "") {
                o.remove();
                return
            }
            if (o == null) {
                var a = document.createElement("meta");
                a.setAttribute("property", t.TagProperty), a.content = t.Value, document.head.appendChild(a);
                return
            }
            o.content = t.Value
        }
    })()
}
d(N, "default");

function _(t, r, u, n) {
    setTimeout(function() {
        document.title = t.Title
    }, 0)
}
d(_, "default");

function V(t, r, u, n) {
    (function() {
        var o = t.Text,
            a = new RegExp("[^a-zA-Z0-9 ]", "g");
        o = o.replace(a, ""), a = new RegExp(" (?= *\\1)", "g"), o = o.replace(a, " "), a = new RegExp(" ", "g"), t.NormalizedText = o.replace(a, t.SpaceReplacement)
    })()
}
d(V, "default");

function g(t, r, u, n) {
    (function() {
        var o = t.Text;
        t.TextWithoutDiacritics = o.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    })()
}
d(g, "default");
var e = v,
    L = class L extends e.Controller.BaseModuleController {
        constructor(r, u, n, o) {
            super(r, u, n, o)
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
d(L, "Controller");
var C = L,
    i = new C,
    s = i;
i.metadata_AddLinkValueName$Action = function(t, r, u) {
    return e.Logger.startActiveSpan("Metadata_AddLinkValueName", function(n) {
        n && (n.setAttribute("code.function", "Metadata_AddLinkValueName"), n.setAttribute("outsystems.function.key", "2407bf26-bf88-4c42-97a2-87a2c3fb733e"), n.setAttribute("outsystems.function.owner.name", "SEOUtilsonSteroids"), n.setAttribute("outsystems.function.owner.key", "033be712-560a-434f-a3d5-aabb4c9e1cfc"), n.setAttribute("outsystems.function.type", "CLIENT_ACTION"));
        try {
            u = s.callContext(u);
            var o = new e.DataTypes.VariableHolder(new(s.constructor.getVariableGroupType("SEOUtilsonSteroids.Metadata_AddLinkValueName$vars")));
            o.value.linkRelInLocal = t, o.value.valueInLocal = r, e.Logger.startActiveSpan("JS_AddMetadataTag", function(a) {
                a && (a.setAttribute("code.function", "JS_AddMetadataTag"), a.setAttribute("outsystems.function.key", "c0429bcf-d932-42de-9b93-771785c070ea"), a.setAttribute("outsystems.function.owner.name", "SEOUtilsonSteroids"), a.setAttribute("outsystems.function.owner.key", "033be712-560a-434f-a3d5-aabb4c9e1cfc"), a.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                try {
                    return s.safeExecuteJSNode(b, "JS_AddMetadataTag", "Metadata_AddLinkValueName", {
                        URL: e.DataConversion.JSNodeParamConverter.to(o.value.valueInLocal, e.DataTypes.DataTypes.Text),
                        RelName: e.DataConversion.JSNodeParamConverter.to(o.value.linkRelInLocal, e.DataTypes.DataTypes.Text)
                    }, function(l) {}, {}, {})
                } finally {
                    a && a.end()
                }
            }, 1);
            return
        } finally {
            n && n.end()
        }
    }, 1)
};
i.constructor.registerVariableGroupType("SEOUtilsonSteroids.Metadata_AddLinkValueName$vars", [{
    name: "LinkRel",
    attrName: "linkRelInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: d(function() {
        return ""
    }, "defaultValue")
}, {
    name: "Value",
    attrName: "valueInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: d(function() {
        return ""
    }, "defaultValue")
}]);
i.clientActionProxies.metadata_AddLinkValueName$Action = function(t, r) {
    return t = t === void 0 ? "" : t, r = r === void 0 ? "" : r, s.executeActionInsideJSNode(i.default.metadata_AddLinkValueName$Action.bind(s, e.DataConversion.JSNodeParamConverter.from(t, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(r, e.DataTypes.DataTypes.Text)), e.Controller.BaseViewController.activeScreen ? e.Controller.BaseViewController.activeScreen.callContext() : void 0, function(u) {
        return {}
    })
};
i.metadata_AddTagValueName$Action = function(t, r, u) {
    return e.Logger.startActiveSpan("Metadata_AddTagValueName", function(n) {
        n && (n.setAttribute("code.function", "Metadata_AddTagValueName"), n.setAttribute("outsystems.function.key", "fb0519f0-5d03-4c42-b42c-0c7dcef1f61e"), n.setAttribute("outsystems.function.owner.name", "SEOUtilsonSteroids"), n.setAttribute("outsystems.function.owner.key", "033be712-560a-434f-a3d5-aabb4c9e1cfc"), n.setAttribute("outsystems.function.type", "CLIENT_ACTION"));
        try {
            u = s.callContext(u);
            var o = new e.DataTypes.VariableHolder(new(s.constructor.getVariableGroupType("SEOUtilsonSteroids.Metadata_AddTagValueName$vars")));
            o.value.tagNameInLocal = t, o.value.valueInLocal = r, e.Logger.startActiveSpan("JS_AddMetadataTag", function(a) {
                a && (a.setAttribute("code.function", "JS_AddMetadataTag"), a.setAttribute("outsystems.function.key", "0247059d-50b9-4f6c-af4f-4aeb4bb210f6"), a.setAttribute("outsystems.function.owner.name", "SEOUtilsonSteroids"), a.setAttribute("outsystems.function.owner.key", "033be712-560a-434f-a3d5-aabb4c9e1cfc"), a.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                try {
                    return s.safeExecuteJSNode(x, "JS_AddMetadataTag", "Metadata_AddTagValueName", {
                        Value: e.DataConversion.JSNodeParamConverter.to(o.value.valueInLocal, e.DataTypes.DataTypes.Text),
                        TagName: e.DataConversion.JSNodeParamConverter.to(o.value.tagNameInLocal, e.DataTypes.DataTypes.Text)
                    }, function(l) {}, {}, {})
                } finally {
                    a && a.end()
                }
            }, 1);
            return
        } finally {
            n && n.end()
        }
    }, 1)
};
i.constructor.registerVariableGroupType("SEOUtilsonSteroids.Metadata_AddTagValueName$vars", [{
    name: "TagName",
    attrName: "tagNameInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: d(function() {
        return ""
    }, "defaultValue")
}, {
    name: "Value",
    attrName: "valueInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: d(function() {
        return ""
    }, "defaultValue")
}]);
i.clientActionProxies.metadata_AddTagValueName$Action = function(t, r) {
    return t = t === void 0 ? "" : t, r = r === void 0 ? "" : r, s.executeActionInsideJSNode(i.default.metadata_AddTagValueName$Action.bind(s, e.DataConversion.JSNodeParamConverter.from(t, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(r, e.DataTypes.DataTypes.Text)), e.Controller.BaseViewController.activeScreen ? e.Controller.BaseViewController.activeScreen.callContext() : void 0, function(u) {
        return {}
    })
};
i.metadata_AddTagValueProperty$Action = function(t, r, u) {
    return e.Logger.startActiveSpan("Metadata_AddTagValueProperty", function(n) {
        n && (n.setAttribute("code.function", "Metadata_AddTagValueProperty"), n.setAttribute("outsystems.function.key", "c111707b-bc4c-4016-baec-421d505ddef2"), n.setAttribute("outsystems.function.owner.name", "SEOUtilsonSteroids"), n.setAttribute("outsystems.function.owner.key", "033be712-560a-434f-a3d5-aabb4c9e1cfc"), n.setAttribute("outsystems.function.type", "CLIENT_ACTION"));
        try {
            u = s.callContext(u);
            var o = new e.DataTypes.VariableHolder(new(s.constructor.getVariableGroupType("SEOUtilsonSteroids.Metadata_AddTagValueProperty$vars")));
            o.value.tagPropertyInLocal = t, o.value.valueInLocal = r, e.Logger.startActiveSpan("JS_AddMetadataTag", function(a) {
                a && (a.setAttribute("code.function", "JS_AddMetadataTag"), a.setAttribute("outsystems.function.key", "6f85dfdb-c1be-44a7-8e5f-d9ca20192989"), a.setAttribute("outsystems.function.owner.name", "SEOUtilsonSteroids"), a.setAttribute("outsystems.function.owner.key", "033be712-560a-434f-a3d5-aabb4c9e1cfc"), a.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                try {
                    return s.safeExecuteJSNode(N, "JS_AddMetadataTag", "Metadata_AddTagValueProperty", {
                        TagProperty: e.DataConversion.JSNodeParamConverter.to(o.value.tagPropertyInLocal, e.DataTypes.DataTypes.Text),
                        Value: e.DataConversion.JSNodeParamConverter.to(o.value.valueInLocal, e.DataTypes.DataTypes.Text)
                    }, function(l) {}, {}, {})
                } finally {
                    a && a.end()
                }
            }, 1);
            return
        } finally {
            n && n.end()
        }
    }, 1)
};
i.constructor.registerVariableGroupType("SEOUtilsonSteroids.Metadata_AddTagValueProperty$vars", [{
    name: "TagProperty",
    attrName: "tagPropertyInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: d(function() {
        return ""
    }, "defaultValue")
}, {
    name: "Value",
    attrName: "valueInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: d(function() {
        return ""
    }, "defaultValue")
}]);
i.clientActionProxies.metadata_AddTagValueProperty$Action = function(t, r) {
    return t = t === void 0 ? "" : t, r = r === void 0 ? "" : r, s.executeActionInsideJSNode(i.default.metadata_AddTagValueProperty$Action.bind(s, e.DataConversion.JSNodeParamConverter.from(t, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(r, e.DataTypes.DataTypes.Text)), e.Controller.BaseViewController.activeScreen ? e.Controller.BaseViewController.activeScreen.callContext() : void 0, function(u) {
        return {}
    })
};
i.metadata_AddToPage$Action = function(t, r, u, n, o, a, l, f, m, y, S, A, T) {
    return e.Logger.startActiveSpan("Metadata_AddToPage", function(p) {
        p && (p.setAttribute("code.function", "Metadata_AddToPage"), p.setAttribute("outsystems.function.key", "aaec599c-c70b-404d-af37-e4f427b66cc2"), p.setAttribute("outsystems.function.owner.name", "SEOUtilsonSteroids"), p.setAttribute("outsystems.function.owner.key", "033be712-560a-434f-a3d5-aabb4c9e1cfc"), p.setAttribute("outsystems.function.type", "CLIENT_ACTION"));
        try {
            T = s.callContext(T);
            var c = new e.DataTypes.VariableHolder(new(s.constructor.getVariableGroupType("SEOUtilsonSteroids.Metadata_AddToPage$vars")));
            c.value.titleInLocal = t, c.value.descriptionInLocal = r, c.value.oGTitleInLocal = u, c.value.oGDescriptionInLocal = n, c.value.oGURLInLocal = o, c.value.oGImageURLInLocal = a, c.value.oGSiteNameInLocal = l, c.value.oGTypeInLocal = f, c.value.keywordsInLocal = m, c.value.blockCrawlingInLocal = y, c.value.useViewportInLocal = S, c.value.canonicalLinkInLocal = A, c.value.titleInLocal !== "" && e.Logger.startActiveSpan("JS_AddTitle", function(D) {
                D && (D.setAttribute("code.function", "JS_AddTitle"), D.setAttribute("outsystems.function.key", "0d13f162-878b-406d-9de4-c86f0723776e"), D.setAttribute("outsystems.function.owner.name", "SEOUtilsonSteroids"), D.setAttribute("outsystems.function.owner.key", "033be712-560a-434f-a3d5-aabb4c9e1cfc"), D.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                try {
                    return s.safeExecuteJSNode(_, "JS_AddTitle", "Metadata_AddToPage", {
                        Title: e.DataConversion.JSNodeParamConverter.to(c.value.titleInLocal, e.DataTypes.DataTypes.Text)
                    }, function(O) {}, {}, {})
                } finally {
                    D && D.end()
                }
            }, 1), i.default.metadata_AddTagValueName$Action("description", c.value.descriptionInLocal, T), i.default.metadata_AddTagValueProperty$Action("og:title", c.value.oGTitleInLocal, T), i.default.metadata_AddTagValueProperty$Action("og:description", c.value.oGDescriptionInLocal, T), i.default.metadata_AddTagValueProperty$Action("og:url", c.value.oGURLInLocal, T), i.default.metadata_AddTagValueProperty$Action("og:image", c.value.oGImageURLInLocal, T), i.default.metadata_AddTagValueProperty$Action("og:site_name", c.value.oGSiteNameInLocal, T), i.default.metadata_AddTagValueProperty$Action("og:type", c.value.oGTypeInLocal, T), i.default.metadata_AddTagValueName$Action("keywords", c.value.keywordsInLocal, T), i.default.metadata_AddTagValueName$Action("robots", c.value.blockCrawlingInLocal ? "noindex, nofollow" : "", T), i.default.metadata_AddTagValueName$Action("viewport", c.value.useViewportInLocal ? "width=device-width, initial-scale=1.0" : "", T), i.default.metadata_AddLinkValueName$Action("canonical", c.value.canonicalLinkInLocal, T);
            return
        } finally {
            p && p.end()
        }
    }, 1)
};
i.constructor.registerVariableGroupType("SEOUtilsonSteroids.Metadata_AddToPage$vars", [{
    name: "Title",
    attrName: "titleInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: d(function() {
        return ""
    }, "defaultValue")
}, {
    name: "Description",
    attrName: "descriptionInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: d(function() {
        return ""
    }, "defaultValue")
}, {
    name: "OGTitle",
    attrName: "oGTitleInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: d(function() {
        return ""
    }, "defaultValue")
}, {
    name: "OGDescription",
    attrName: "oGDescriptionInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: d(function() {
        return ""
    }, "defaultValue")
}, {
    name: "OGURL",
    attrName: "oGURLInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: d(function() {
        return ""
    }, "defaultValue")
}, {
    name: "OGImageURL",
    attrName: "oGImageURLInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: d(function() {
        return ""
    }, "defaultValue")
}, {
    name: "OGSiteName",
    attrName: "oGSiteNameInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: d(function() {
        return ""
    }, "defaultValue")
}, {
    name: "OGType",
    attrName: "oGTypeInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: d(function() {
        return ""
    }, "defaultValue")
}, {
    name: "Keywords",
    attrName: "keywordsInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: d(function() {
        return ""
    }, "defaultValue")
}, {
    name: "BlockCrawling",
    attrName: "blockCrawlingInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Boolean,
    defaultValue: d(function() {
        return !1
    }, "defaultValue")
}, {
    name: "UseViewport",
    attrName: "useViewportInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Boolean,
    defaultValue: d(function() {
        return !0
    }, "defaultValue")
}, {
    name: "CanonicalLink",
    attrName: "canonicalLinkInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: d(function() {
        return ""
    }, "defaultValue")
}]);
i.clientActionProxies.metadata_AddToPage$Action = function(t, r, u, n, o, a, l, f, m, y, S, A) {
    return t = t === void 0 ? "" : t, r = r === void 0 ? "" : r, u = u === void 0 ? "" : u, n = n === void 0 ? "" : n, o = o === void 0 ? "" : o, a = a === void 0 ? "" : a, l = l === void 0 ? "" : l, f = f === void 0 ? "" : f, m = m === void 0 ? "" : m, y = y === void 0 ? !1 : y, S = S === void 0 ? !0 : S, A = A === void 0 ? "" : A, s.executeActionInsideJSNode(i.default.metadata_AddToPage$Action.bind(s, e.DataConversion.JSNodeParamConverter.from(t, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(r, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(u, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(n, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(o, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(a, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(l, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(f, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(m, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(y, e.DataTypes.DataTypes.Boolean), e.DataConversion.JSNodeParamConverter.from(S, e.DataTypes.DataTypes.Boolean), e.DataConversion.JSNodeParamConverter.from(A, e.DataTypes.DataTypes.Text)), e.Controller.BaseViewController.activeScreen ? e.Controller.BaseViewController.activeScreen.callContext() : void 0, function(T) {
        return {}
    })
};
i.text_Normalize$Action = function(t, r, u) {
    return e.Logger.startActiveSpan("Text_Normalize", function(n) {
        n && (n.setAttribute("code.function", "Text_Normalize"), n.setAttribute("outsystems.function.key", "77f7ab44-4331-469d-b232-7da0ee7a3edb"), n.setAttribute("outsystems.function.owner.name", "SEOUtilsonSteroids"), n.setAttribute("outsystems.function.owner.key", "033be712-560a-434f-a3d5-aabb4c9e1cfc"), n.setAttribute("outsystems.function.type", "CLIENT_ACTION"));
        try {
            u = s.callContext(u);
            var o = new e.DataTypes.VariableHolder(new(s.constructor.getVariableGroupType("SEOUtilsonSteroids.Text_Normalize$vars")));
            o.value.textInLocal = t, o.value.spaceReplacementInLocal = r;
            var a = new e.DataTypes.VariableHolder,
                l = new e.DataTypes.VariableHolder(new(s.constructor.getVariableGroupType("SEOUtilsonSteroids.Text_Normalize$outVars")));
            return a.value = e.Logger.startActiveSpan("JS_Normalize", function(f) {
                f && (f.setAttribute("code.function", "JS_Normalize"), f.setAttribute("outsystems.function.key", "58d279d2-9a12-4e88-870c-255b3eda50f2"), f.setAttribute("outsystems.function.owner.name", "SEOUtilsonSteroids"), f.setAttribute("outsystems.function.owner.key", "033be712-560a-434f-a3d5-aabb4c9e1cfc"), f.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                try {
                    return s.safeExecuteJSNode(V, "JS_Normalize", "Text_Normalize", {
                        SpaceReplacement: e.DataConversion.JSNodeParamConverter.to(o.value.spaceReplacementInLocal, e.DataTypes.DataTypes.Text),
                        Text: e.DataConversion.JSNodeParamConverter.to(i.default.text_RemoveDiacritics$Action(e.BuiltinFunctions.trim(o.value.textInLocal), u).textWithoutDiacriticsOut, e.DataTypes.DataTypes.Text),
                        NormalizedText: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text)
                    }, function(m) {
                        var y = new(s.constructor.getVariableGroupType("SEOUtilsonSteroids.Text_Normalize$jS_NormalizeJSResult"));
                        return y.normalizedTextOut = e.DataConversion.JSNodeParamConverter.from(m.NormalizedText, e.DataTypes.DataTypes.Text), y
                    }, {}, {})
                } finally {
                    f && f.end()
                }
            }, 1), l.value.normalizedTextOut = e.BuiltinFunctions.toLower(a.value.normalizedTextOut), l.value
        } finally {
            n && n.end()
        }
    }, 1)
};
i.constructor.registerVariableGroupType("SEOUtilsonSteroids.Text_Normalize$vars", [{
    name: "Text",
    attrName: "textInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: d(function() {
        return ""
    }, "defaultValue")
}, {
    name: "SpaceReplacement",
    attrName: "spaceReplacementInLocal",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: d(function() {
        return "-"
    }, "defaultValue")
}]);
i.constructor.registerVariableGroupType("SEOUtilsonSteroids.Text_Normalize$jS_NormalizeJSResult", [{
    name: "NormalizedText",
    attrName: "normalizedTextOut",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: d(function() {
        return ""
    }, "defaultValue")
}]);
i.constructor.registerVariableGroupType("SEOUtilsonSteroids.Text_Normalize$outVars", [{
    name: "NormalizedText",
    attrName: "normalizedTextOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: d(function() {
        return ""
    }, "defaultValue")
}]);
i.clientActionProxies.text_Normalize$Action = function(t, r) {
    return t = t === void 0 ? "" : t, r = r === void 0 ? "-" : r, s.executeActionInsideJSNode(i.default.text_Normalize$Action.bind(s, e.DataConversion.JSNodeParamConverter.from(t, e.DataTypes.DataTypes.Text), e.DataConversion.JSNodeParamConverter.from(r, e.DataTypes.DataTypes.Text)), e.Controller.BaseViewController.activeScreen ? e.Controller.BaseViewController.activeScreen.callContext() : void 0, function(u) {
        return {
            NormalizedText: e.DataConversion.JSNodeParamConverter.to(u.normalizedTextOut, e.DataTypes.DataTypes.Text)
        }
    })
};
i.text_RemoveDiacritics$Action = function(t, r) {
    return e.Logger.startActiveSpan("Text_RemoveDiacritics", function(u) {
        u && (u.setAttribute("code.function", "Text_RemoveDiacritics"), u.setAttribute("outsystems.function.key", "9208efd0-a081-43a6-b853-f92a6f37fb33"), u.setAttribute("outsystems.function.owner.name", "SEOUtilsonSteroids"), u.setAttribute("outsystems.function.owner.key", "033be712-560a-434f-a3d5-aabb4c9e1cfc"), u.setAttribute("outsystems.function.type", "CLIENT_ACTION"));
        try {
            r = s.callContext(r);
            var n = new e.DataTypes.VariableHolder(new(s.constructor.getVariableGroupType("SEOUtilsonSteroids.Text_RemoveDiacritics$vars")));
            n.value.textInLocal = t;
            var o = new e.DataTypes.VariableHolder,
                a = new e.DataTypes.VariableHolder(new(s.constructor.getVariableGroupType("SEOUtilsonSteroids.Text_RemoveDiacritics$outVars")));
            return o.value = e.Logger.startActiveSpan("JS_RemoveDiacritics", function(l) {
                l && (l.setAttribute("code.function", "JS_RemoveDiacritics"), l.setAttribute("outsystems.function.key", "d9ffb20e-51d6-4d10-989e-abdc88d210a9"), l.setAttribute("outsystems.function.owner.name", "SEOUtilsonSteroids"), l.setAttribute("outsystems.function.owner.key", "033be712-560a-434f-a3d5-aabb4c9e1cfc"), l.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                try {
                    return s.safeExecuteJSNode(g, "JS_RemoveDiacritics", "Text_RemoveDiacritics", {
                        Text: e.DataConversion.JSNodeParamConverter.to(n.value.textInLocal, e.DataTypes.DataTypes.Text),
                        TextWithoutDiacritics: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text)
                    }, function(f) {
                        var m = new(s.constructor.getVariableGroupType("SEOUtilsonSteroids.Text_RemoveDiacritics$jS_RemoveDiacriticsJSResult"));
                        return m.textWithoutDiacriticsOut = e.DataConversion.JSNodeParamConverter.from(f.TextWithoutDiacritics, e.DataTypes.DataTypes.Text), m
                    }, {}, {})
                } finally {
                    l && l.end()
                }
            }, 1), a.value.textWithoutDiacriticsOut = o.value.textWithoutDiacriticsOut, a.value
        } finally {
            u && u.end()
        }
    }, 1)
};
i.constructor.registerVariableGroupType("SEOUtilsonSteroids.Text_RemoveDiacritics$vars", [{
    name: "Text",
    attrName: "textInLocal",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: d(function() {
        return ""
    }, "defaultValue")
}]);
i.constructor.registerVariableGroupType("SEOUtilsonSteroids.Text_RemoveDiacritics$jS_RemoveDiacriticsJSResult", [{
    name: "TextWithoutDiacritics",
    attrName: "textWithoutDiacriticsOut",
    mandatory: !0,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: d(function() {
        return ""
    }, "defaultValue")
}]);
i.constructor.registerVariableGroupType("SEOUtilsonSteroids.Text_RemoveDiacritics$outVars", [{
    name: "TextWithoutDiacritics",
    attrName: "textWithoutDiacriticsOut",
    mandatory: !1,
    dataType: e.DataTypes.DataTypes.Text,
    defaultValue: d(function() {
        return ""
    }, "defaultValue")
}]);
i.clientActionProxies.text_RemoveDiacritics$Action = function(t) {
    return t = t === void 0 ? "" : t, s.executeActionInsideJSNode(i.default.text_RemoveDiacritics$Action.bind(s, e.DataConversion.JSNodeParamConverter.from(t, e.DataTypes.DataTypes.Text)), e.Controller.BaseViewController.activeScreen ? e.Controller.BaseViewController.activeScreen.callContext() : void 0, function(r) {
        return {
            TextWithoutDiacritics: e.DataConversion.JSNodeParamConverter.to(r.textWithoutDiacriticsOut, e.DataTypes.DataTypes.Text)
        }
    })
};
var ie = i;
export {
    ie as a
};