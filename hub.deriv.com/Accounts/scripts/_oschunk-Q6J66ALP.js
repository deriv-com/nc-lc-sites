import {
    Eg as M
} from "./_oschunk-UATY3RVV.js";
import {
    ia as i
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as e
} from "./_oschunk-QHO7QY6K.js";
var a = i,
    W = class W extends a.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Digit1", "digit1Var", "Digit1", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("Digit2", "digit2Var", "Digit2", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("Digit3", "digit3Var", "Digit3", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("Digit4", "digit4Var", "Digit4", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("Digit5", "digit5Var", "Digit5", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("Digit6", "digit6Var", "Digit6", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("ErrorMessage", "errorMessageIn", "ErrorMessage", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_errorMessageInDataFetchStatus", "_errorMessageInDataFetchStatus", "_errorMessageInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(a.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(W, "VariablesRecord");
var g = W;
g.init();
var A = class A extends a.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            I1: a.Model.ValidationWidgetRecord,
            I2: a.Model.ValidationWidgetRecord,
            I3: a.Model.ValidationWidgetRecord,
            I4: a.Model.ValidationWidgetRecord,
            I5: a.Model.ValidationWidgetRecord,
            I6: a.Model.ValidationWidgetRecord
        }
    }
};
e(A, "WidgetsRecord");
var V = A,
    G = class G extends a.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return g
        }
        static getWidgetsRecordConstructor() {
            return V
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(t) {
            "ErrorMessage" in t && (this.variables.errorMessageIn = t.ErrorMessage, "_errorMessageInDataFetchStatus" in t && (this.variables._errorMessageInDataFetchStatus = t._errorMessageInDataFetchStatus))
        }
    };
e(G, "Model");
var y = G;
y._hasValidationWidgetsValue = void 0;
var ft = new a.Model.ModelFactory(y);
var s = i,
    Q = class Q extends s.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Number", "numberIn", "Number", !0, !1, s.DataTypes.DataTypes.LongInteger, function() {
                return s.DataTypes.LongInteger.defaultValue
            }, !1), this.attr("_numberInDataFetchStatus", "_numberInDataFetchStatus", "_numberInDataFetchStatus", !0, !1, s.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Color", "colorIn", "Color", !0, !1, s.DataTypes.DataTypes.Text, function() {
                return M.color.primary
            }, !1), this.attr("_colorInDataFetchStatus", "_colorInDataFetchStatus", "_colorInDataFetchStatus", !0, !1, s.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Size", "sizeIn", "Size", !0, !1, s.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_sizeInDataFetchStatus", "_sizeInDataFetchStatus", "_sizeInDataFetchStatus", !0, !1, s.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Shape", "shapeIn", "Shape", !0, !1, s.DataTypes.DataTypes.Text, function() {
                return M.shape.rounded
            }, !1), this.attr("_shapeInDataFetchStatus", "_shapeInDataFetchStatus", "_shapeInDataFetchStatus", !0, !1, s.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("IsLight", "isLightIn", "IsLight", !0, !1, s.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isLightInDataFetchStatus", "_isLightInDataFetchStatus", "_isLightInDataFetchStatus", !0, !1, s.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", !0, !1, s.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", !0, !1, s.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(s.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(Q, "VariablesRecord");
var p = Q;
p.init();
var w = class w extends s.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(w, "WidgetsRecord");
var E = w,
    L = class L extends s.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return p
        }
        static getWidgetsRecordConstructor() {
            return E
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "Number" in t && (this.variables.numberIn = t.Number, "_numberInDataFetchStatus" in t && (this.variables._numberInDataFetchStatus = t._numberInDataFetchStatus)), "Color" in t && (this.variables.colorIn = t.Color, "_colorInDataFetchStatus" in t && (this.variables._colorInDataFetchStatus = t._colorInDataFetchStatus)), "Size" in t && (this.variables.sizeIn = t.Size, "_sizeInDataFetchStatus" in t && (this.variables._sizeInDataFetchStatus = t._sizeInDataFetchStatus)), "Shape" in t && (this.variables.shapeIn = t.Shape, "_shapeInDataFetchStatus" in t && (this.variables._shapeInDataFetchStatus = t._shapeInDataFetchStatus)), "IsLight" in t && (this.variables.isLightIn = t.IsLight, "_isLightInDataFetchStatus" in t && (this.variables._isLightInDataFetchStatus = t._isLightInDataFetchStatus)), "ExtendedClass" in t && (this.variables.extendedClassIn = t.ExtendedClass, "_extendedClassInDataFetchStatus" in t && (this.variables._extendedClassInDataFetchStatus = t._extendedClassInDataFetchStatus))
        }
    };
e(L, "Model");
var _ = L;
_._hasValidationWidgetsValue = void 0;
var mt = new s.Model.ModelFactory(_);
var u = i,
    U = class U extends u.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Value", "valueIn", "Value", !0, !1, u.DataTypes.DataTypes.Integer, function() {
                return 0
            }, !1), this.attr("_valueInDataFetchStatus", "_valueInDataFetchStatus", "_valueInDataFetchStatus", !0, !1, u.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Text", "textIn", "Text", !0, !1, u.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_textInDataFetchStatus", "_textInDataFetchStatus", "_textInDataFetchStatus", !0, !1, u.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(u.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(U, "VariablesRecord");
var S = U;
S.init();
var P = class P extends u.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(P, "WidgetsRecord");
var B = P,
    D = class D extends u.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return S
        }
        static getWidgetsRecordConstructor() {
            return B
        }
        static get hasValidationWidgets() {
            return D._hasValidationWidgetsValue === void 0 && (D._hasValidationWidgetsValue = void 0), D._hasValidationWidgetsValue
        }
        setInputs(t) {
            "Value" in t && (this.variables.valueIn = t.Value, "_valueInDataFetchStatus" in t && (this.variables._valueInDataFetchStatus = t._valueInDataFetchStatus)), "Text" in t && (this.variables.textIn = t.Text, "_textInDataFetchStatus" in t && (this.variables._textInDataFetchStatus = t._textInDataFetchStatus))
        }
    };
e(D, "Model");
var x = D;
x._hasValidationWidgetsValue = void 0;
var gt = new u.Model.ModelFactory(x);
var rt = {
        staticEntities: {}
    },
    it = rt.staticEntities;

function z(o, t, h, n) {
    function c(l) {
        return new QRCode(document.getElementById(o.Id), {
            text: l,
            width: 256,
            height: 256,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        })
    }
    e(c, "generateQrCode"), qrCode == null ? qrCode = c(o.Text) : qrCode.makeCode(o.Text)
}
e(z, "default");
var r = i,
    H = class H extends r.Controller.BaseModuleController {
        constructor(t, h, n, c) {
            super(t, h, n, c)
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
e(H, "Controller");
var k = H,
    m = new k,
    I = m;
m.generateQR$Action = function(o, t, h) {
    return r.Logger.startActiveSpan("GenerateQR", function(n) {
        n && (n.setAttribute("code.function", "GenerateQR"), n.setAttribute("outsystems.function.key", "a4f41524-34a3-427a-b923-9231f38d2796"), n.setAttribute("outsystems.function.owner.name", "QRGenerator"), n.setAttribute("outsystems.function.owner.key", "2e2477c2-f018-4e3c-aa24-c1b8e91f464a"), n.setAttribute("outsystems.function.type", "CLIENT_ACTION"));
        try {
            h = I.callContext(h);
            var c = new r.DataTypes.VariableHolder(new(I.constructor.getVariableGroupType("QRGenerator.GenerateQR$vars")));
            c.value.containerIDInLocal = o, c.value.textInLocal = t, r.Logger.startActiveSpan("Generate_QR", function(l) {
                l && (l.setAttribute("code.function", "Generate_QR"), l.setAttribute("outsystems.function.key", "c04fe66b-02b3-4cec-abed-6eee989425a1"), l.setAttribute("outsystems.function.owner.name", "QRGenerator"), l.setAttribute("outsystems.function.owner.key", "2e2477c2-f018-4e3c-aa24-c1b8e91f464a"), l.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                try {
                    return I.safeExecuteJSNode(z, "Generate_QR", "GenerateQR", {
                        Id: r.DataConversion.JSNodeParamConverter.to(c.value.containerIDInLocal, r.DataTypes.DataTypes.Text),
                        Text: r.DataConversion.JSNodeParamConverter.to(c.value.textInLocal, r.DataTypes.DataTypes.Text)
                    }, function(nt) {}, {}, {})
                } finally {
                    l && l.end()
                }
            }, 1);
            return
        } finally {
            n && n.end()
        }
    }, 1)
};
m.constructor.registerVariableGroupType("QRGenerator.GenerateQR$vars", [{
    name: "ContainerID",
    attrName: "containerIDInLocal",
    mandatory: !0,
    dataType: r.DataTypes.DataTypes.Text,
    defaultValue: e(function() {
        return ""
    }, "defaultValue")
}, {
    name: "Text",
    attrName: "textInLocal",
    mandatory: !0,
    dataType: r.DataTypes.DataTypes.Text,
    defaultValue: e(function() {
        return ""
    }, "defaultValue")
}]);
m.clientActionProxies.generateQR$Action = function(o, t) {
    return o = o === void 0 ? "" : o, t = t === void 0 ? "" : t, I.executeActionInsideJSNode(m.default.generateQR$Action.bind(I, r.DataConversion.JSNodeParamConverter.from(o, r.DataTypes.DataTypes.Text), r.DataConversion.JSNodeParamConverter.from(t, r.DataTypes.DataTypes.Text)), r.Controller.BaseViewController.activeScreen ? r.Controller.BaseViewController.activeScreen.callContext() : void 0, function(h) {
        return {}
    })
};
var Gt = m;
var f = i,
    K = class K extends f.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Text", "textIn", "Text", !0, !1, f.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_textInDataFetchStatus", "_textInDataFetchStatus", "_textInDataFetchStatus", !0, !1, f.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(f.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(K, "VariablesRecord");
var F = K;
F.init();
var q = class q extends f.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(q, "WidgetsRecord");
var J = q,
    j = class j extends f.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return F
        }
        static getWidgetsRecordConstructor() {
            return J
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "Text" in t && (this.variables.textIn = t.Text, "_textInDataFetchStatus" in t && (this.variables._textInDataFetchStatus = t._textInDataFetchStatus))
        }
    };
e(j, "Model");
var v = j;
v._hasValidationWidgetsValue = void 0;
var Lt = new f.Model.ModelFactory(v);
var d = i,
    Y = class Y extends d.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("IsNextClicked", "isNextClickedVar", "IsNextClicked", !0, !1, d.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("HasEnabled2Fa", "hasEnabled2FaIn", "HasEnabled2Fa", !0, !1, d.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_hasEnabled2FaInDataFetchStatus", "_hasEnabled2FaInDataFetchStatus", "_hasEnabled2FaInDataFetchStatus", !0, !1, d.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(d.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(Y, "VariablesRecord");
var C = Y;
C.init();
var Z = class Z extends d.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(Z, "WidgetsRecord");
var X = Z,
    T = class T extends d.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return C
        }
        static getWidgetsRecordConstructor() {
            return X
        }
        static get hasValidationWidgets() {
            return T._hasValidationWidgetsValue === void 0 && (T._hasValidationWidgetsValue = void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0), T._hasValidationWidgetsValue
        }
        setInputs(t) {
            "HasEnabled2Fa" in t && (this.variables.hasEnabled2FaIn = t.HasEnabled2Fa, "_hasEnabled2FaInDataFetchStatus" in t && (this.variables._hasEnabled2FaInDataFetchStatus = t._hasEnabled2FaInDataFetchStatus))
        }
    };
e(T, "Model");
var b = T;
b._hasValidationWidgetsValue = void 0;
var Ut = new d.Model.ModelFactory(b);
export {
    ft as a, mt as b, gt as c, Gt as d, Lt as e, Ut as f
};