import {
    W as y,
    c as e,
    v as T
} from "./_oschunk-M5BUVJ72.js";
var u = {
    staticEntities: {}
};
u.staticEntities.iziToast_Position = {};
Object.defineProperty(u.staticEntities.iziToast_Position, "bottomCenter", {
    get: e(function() {
        return "bottomCenter"
    }, "get")
});
Object.defineProperty(u.staticEntities.iziToast_Position, "bottomLeft", {
    get: e(function() {
        return "bottomLeft"
    }, "get")
});
Object.defineProperty(u.staticEntities.iziToast_Position, "center", {
    get: e(function() {
        return "center"
    }, "get")
});
Object.defineProperty(u.staticEntities.iziToast_Position, "topCenter", {
    get: e(function() {
        return "topCenter"
    }, "get")
});
Object.defineProperty(u.staticEntities.iziToast_Position, "topLeft", {
    get: e(function() {
        return "topLeft"
    }, "get")
});
Object.defineProperty(u.staticEntities.iziToast_Position, "topRight", {
    get: e(function() {
        return "topRight"
    }, "get")
});
Object.defineProperty(u.staticEntities.iziToast_Position, "bottomRight", {
    get: e(function() {
        return "bottomRight"
    }, "get")
});
var P = u.staticEntities;
var m = class m extends T.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Position", "positionAttr", "Position", !0, !1, T.DataTypes.Text, function() {
            return ""
        }, !0)].concat(T.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(i) {
        return new m(new m.RecordClass({
            positionAttr: T.ImmutableBase.getData(i)
        }))
    }
    static get $runtimeName() {
        return "iziToast_Position"
    }
};
e(m, "EN_57efb7c2ddb3d910b28cb468aa3c0c2bEntityRecord");
var p = m;
p.init();

function S(o, i, r, s) {
    let l = {
            title: o.Title,
            message: o.Message,
            position: o.Position
        },
        n = JSON.parse(o.OtherSettings),
        a = Object.assign(l, n);
    console.log(a), iziToast.show(a)
}
e(S, "default");
var t = y,
    D = class D extends t.Controller.BaseModuleController {
        constructor(i, r, s, l) {
            super(i, r, s, l)
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
e(D, "Controller");
var h = D,
    f = new h,
    d = f;
f.iziToast_Show$Action = function(o, i, r, s, l) {
    return t.Logger.startActiveSpan("iziToast_Show", function(n) {
        n && (n.setAttribute("code.function", "iziToast_Show"), n.setAttribute("outsystems.function.key", "5cfb9b05-2e33-437b-9a3f-53719f095ef3"), n.setAttribute("outsystems.function.owner.name", "iziToast"), n.setAttribute("outsystems.function.owner.key", "4bb7c1d3-7175-4fd0-a1f9-a888b337636b"), n.setAttribute("outsystems.function.type", "CLIENT_ACTION"));
        try {
            l = d.callContext(l);
            var a = new t.DataTypes.VariableHolder(new(d.constructor.getVariableGroupType("iziToast.iziToast_Show$vars")));
            a.value.titleInLocal = o, a.value.messageInLocal = i, a.value.iziToast_PositionIdInLocal = r, a.value.otherSettingsInLocal = s, t.Logger.startActiveSpan("Show", function(c) {
                c && (c.setAttribute("code.function", "Show"), c.setAttribute("outsystems.function.key", "6f53438c-ee21-4aa2-acf4-fffec0115565"), c.setAttribute("outsystems.function.owner.name", "iziToast"), c.setAttribute("outsystems.function.owner.key", "4bb7c1d3-7175-4fd0-a1f9-a888b337636b"), c.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                try {
                    return d.safeExecuteJSNode(S, "Show", "iziToast_Show", {
                        Title: t.DataConversion.JSNodeParamConverter.to(a.value.titleInLocal, t.DataTypes.DataTypes.Text),
                        Message: t.DataConversion.JSNodeParamConverter.to(a.value.messageInLocal, t.DataTypes.DataTypes.Text),
                        Position: t.DataConversion.JSNodeParamConverter.to(a.value.iziToast_PositionIdInLocal, t.DataTypes.DataTypes.Text),
                        OtherSettings: t.DataConversion.JSNodeParamConverter.to(a.value.otherSettingsInLocal, t.DataTypes.DataTypes.Text)
                    }, function(b) {}, {}, {})
                } finally {
                    c && c.end()
                }
            }, 1);
            return
        } finally {
            n && n.end()
        }
    }, 1)
};
f.constructor.registerVariableGroupType("iziToast.iziToast_Show$vars", [{
    name: "Title",
    attrName: "titleInLocal",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: e(function() {
        return ""
    }, "defaultValue")
}, {
    name: "Message",
    attrName: "messageInLocal",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: e(function() {
        return ""
    }, "defaultValue")
}, {
    name: "iziToast_PositionId",
    attrName: "iziToast_PositionIdInLocal",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: e(function() {
        return ""
    }, "defaultValue")
}, {
    name: "OtherSettings",
    attrName: "otherSettingsInLocal",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: e(function() {
        return ""
    }, "defaultValue")
}]);
f.clientActionProxies.iziToast_Show$Action = function(o, i, r, s) {
    return o = o === void 0 ? "" : o, i = i === void 0 ? "" : i, r = r === void 0 ? "" : r, s = s === void 0 ? "" : s, d.executeActionInsideJSNode(f.default.iziToast_Show$Action.bind(d, t.DataConversion.JSNodeParamConverter.from(o, t.DataTypes.DataTypes.Text), t.DataConversion.JSNodeParamConverter.from(i, t.DataTypes.DataTypes.Text), r, t.DataConversion.JSNodeParamConverter.from(s, t.DataTypes.DataTypes.Text)), t.Controller.BaseViewController.activeScreen ? t.Controller.BaseViewController.activeScreen.callContext() : void 0, function(l) {
        return {}
    })
};
var I = f;
export {
    I as a
};