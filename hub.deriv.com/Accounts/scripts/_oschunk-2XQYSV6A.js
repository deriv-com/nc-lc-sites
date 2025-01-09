import {
    b as k,
    g as J,
    j as W
} from "./_oschunk-KZFTAIEG.js";
import {
    Eg as we,
    Xb as R
} from "./_oschunk-UATY3RVV.js";
import {
    ia as f
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as a
} from "./_oschunk-QHO7QY6K.js";
var m = f,
    j = class j extends m.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("CurrentStep", "currentStepIn", "CurrentStep", !0, !1, m.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("_currentStepInDataFetchStatus", "_currentStepInDataFetchStatus", "_currentStepInDataFetchStatus", !0, !1, m.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Title", "titleIn", "Title", !0, !1, m.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_titleInDataFetchStatus", "_titleInDataFetchStatus", "_titleInDataFetchStatus", !0, !1, m.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(m.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(j, "VariablesRecord");
var C = j;
C.init();
var K = class K extends m.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(K, "WidgetsRecord");
var H = K,
    v = class v extends m.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return C
        }
        static getWidgetsRecordConstructor() {
            return H
        }
        static get hasValidationWidgets() {
            return v._hasValidationWidgetsValue === void 0 && (v._hasValidationWidgetsValue = void 0), v._hasValidationWidgetsValue
        }
        setInputs(e) {
            "CurrentStep" in e && (this.variables.currentStepIn = e.CurrentStep, "_currentStepInDataFetchStatus" in e && (this.variables._currentStepInDataFetchStatus = e._currentStepInDataFetchStatus)), "Title" in e && (this.variables.titleIn = e.Title, "_titleInDataFetchStatus" in e && (this.variables._titleInDataFetchStatus = e._titleInDataFetchStatus))
        }
    };
a(v, "Model");
var _ = v;
_._hasValidationWidgetsValue = void 0;
var Ge = new m.Model.ModelFactory(_);
var p = f,
    Y = class Y extends p.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("ShouldDisplayExitConfimModal", "shouldDisplayExitConfimModalVar", "ShouldDisplayExitConfimModal", !0, !1, p.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("ShouldDisplayBackButton", "shouldDisplayBackButtonIn", "ShouldDisplayBackButton", !0, !1, p.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_shouldDisplayBackButtonInDataFetchStatus", "_shouldDisplayBackButtonInDataFetchStatus", "_shouldDisplayBackButtonInDataFetchStatus", !0, !1, p.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Title", "titleIn", "Title", !0, !1, p.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_titleInDataFetchStatus", "_titleInDataFetchStatus", "_titleInDataFetchStatus", !0, !1, p.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ShouldDisplayClose", "shouldDisplayCloseIn", "ShouldDisplayClose", !0, !1, p.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("_shouldDisplayCloseInDataFetchStatus", "_shouldDisplayCloseInDataFetchStatus", "_shouldDisplayCloseInDataFetchStatus", !0, !1, p.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ExitConfimModalHeading", "exitConfimModalHeadingIn", "ExitConfimModalHeading", !0, !1, p.DataTypes.DataTypes.Text, function() {
                return "Exit identity verification"
            }, !1), this.attr("_exitConfimModalHeadingInDataFetchStatus", "_exitConfimModalHeadingInDataFetchStatus", "_exitConfimModalHeadingInDataFetchStatus", !0, !1, p.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(p.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(Y, "VariablesRecord");
var V = Y;
V.init();
var q = class q extends p.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(q, "WidgetsRecord");
var Q = q,
    g = class g extends p.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return V
        }
        static getWidgetsRecordConstructor() {
            return Q
        }
        static get hasValidationWidgets() {
            return g._hasValidationWidgetsValue === void 0 && (g._hasValidationWidgetsValue = void 0), g._hasValidationWidgetsValue
        }
        setInputs(e) {
            "ShouldDisplayBackButton" in e && (this.variables.shouldDisplayBackButtonIn = e.ShouldDisplayBackButton, "_shouldDisplayBackButtonInDataFetchStatus" in e && (this.variables._shouldDisplayBackButtonInDataFetchStatus = e._shouldDisplayBackButtonInDataFetchStatus)), "Title" in e && (this.variables.titleIn = e.Title, "_titleInDataFetchStatus" in e && (this.variables._titleInDataFetchStatus = e._titleInDataFetchStatus)), "ShouldDisplayClose" in e && (this.variables.shouldDisplayCloseIn = e.ShouldDisplayClose, "_shouldDisplayCloseInDataFetchStatus" in e && (this.variables._shouldDisplayCloseInDataFetchStatus = e._shouldDisplayCloseInDataFetchStatus)), "ExitConfimModalHeading" in e && (this.variables.exitConfimModalHeadingIn = e.ExitConfimModalHeading, "_exitConfimModalHeadingInDataFetchStatus" in e && (this.variables._exitConfimModalHeadingInDataFetchStatus = e._exitConfimModalHeadingInDataFetchStatus))
        }
    };
a(g, "Model");
var w = g;
w._hasValidationWidgetsValue = void 0;
var Ee = new p.Model.ModelFactory(w);
var S = f,
    Z = class Z extends S.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("IsVertical", "isVerticalIn", "IsVertical", !0, !1, S.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isVerticalInDataFetchStatus", "_isVerticalInDataFetchStatus", "_isVerticalInDataFetchStatus", !0, !1, S.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", !0, !1, S.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", !0, !1, S.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(S.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(Z, "VariablesRecord");
var A = Z;
A.init();
var ee = class ee extends S.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(ee, "WidgetsRecord");
var X = ee,
    te = class te extends S.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return A
        }
        static getWidgetsRecordConstructor() {
            return X
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(e) {
            "IsVertical" in e && (this.variables.isVerticalIn = e.IsVertical, "_isVerticalInDataFetchStatus" in e && (this.variables._isVerticalInDataFetchStatus = e._isVerticalInDataFetchStatus)), "ExtendedClass" in e && (this.variables.extendedClassIn = e.ExtendedClass, "_extendedClassInDataFetchStatus" in e && (this.variables._extendedClassInDataFetchStatus = e._extendedClassInDataFetchStatus))
        }
    };
a(te, "Model");
var B = te;
B._hasValidationWidgetsValue = void 0;
var We = new S.Model.ModelFactory(B);
var h = f,
    se = class se extends h.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Status", "statusIn", "Status", !0, !1, h.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_statusInDataFetchStatus", "_statusInDataFetchStatus", "_statusInDataFetchStatus", !0, !1, h.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("UseTopLabel", "useTopLabelIn", "UseTopLabel", !0, !1, h.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_useTopLabelInDataFetchStatus", "_useTopLabelInDataFetchStatus", "_useTopLabelInDataFetchStatus", !0, !1, h.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", !0, !1, h.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", !0, !1, h.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(h.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(se, "VariablesRecord");
var O = se;
O.init();
var ie = class ie extends h.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(ie, "WidgetsRecord");
var ae = ie,
    re = class re extends h.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return O
        }
        static getWidgetsRecordConstructor() {
            return ae
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(e) {
            "Status" in e && (this.variables.statusIn = e.Status, "_statusInDataFetchStatus" in e && (this.variables._statusInDataFetchStatus = e._statusInDataFetchStatus)), "UseTopLabel" in e && (this.variables.useTopLabelIn = e.UseTopLabel, "_useTopLabelInDataFetchStatus" in e && (this.variables._useTopLabelInDataFetchStatus = e._useTopLabelInDataFetchStatus)), "ExtendedClass" in e && (this.variables.extendedClassIn = e.ExtendedClass, "_extendedClassInDataFetchStatus" in e && (this.variables._extendedClassInDataFetchStatus = e._extendedClassInDataFetchStatus))
        }
    };
a(re, "Model");
var M = re;
M._hasValidationWidgetsValue = void 0;
var Qe = new h.Model.ModelFactory(M);

function ne(i, e, s, r) {
    i.Binary = i.Base64
}
a(ne, "default");

function le(i, e, s, r) {
    i.Base64 = i.Binary
}
a(le, "default");
var t = f,
    ue = class ue extends t.Controller.BaseModuleController {
        constructor(e, s, r, o) {
            super(e, s, r, o)
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
a(ue, "Controller");
var oe = ue,
    n = new oe,
    l = n;
n.base64ToBinary$Action = function(i, e) {
    return t.Logger.startActiveSpan("Base64ToBinary", function(s) {
        s && (s.setAttribute("code.function", "Base64ToBinary"), s.setAttribute("outsystems.function.key", "567055a4-9494-48b1-a3eb-32ecc9f8155f"), s.setAttribute("outsystems.function.owner.name", "DerivDroppableFileUploadOfficial"), s.setAttribute("outsystems.function.owner.key", "322ccb89-ea0b-4950-a9bb-02ac51742785"), s.setAttribute("outsystems.function.type", "CLIENT_ACTION"));
        try {
            e = l.callContext(e);
            var r = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("DerivDroppableFileUploadOfficial.Base64ToBinary$vars")));
            r.value.base64InLocal = i;
            var o = new t.DataTypes.VariableHolder,
                c = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("DerivDroppableFileUploadOfficial.Base64ToBinary$outVars")));
            return o.value = t.Logger.startActiveSpan("GetAsBinary", function(u) {
                u && (u.setAttribute("code.function", "GetAsBinary"), u.setAttribute("outsystems.function.key", "32245d81-365e-4d10-bb05-ad51305b2df2"), u.setAttribute("outsystems.function.owner.name", "DerivDroppableFileUploadOfficial"), u.setAttribute("outsystems.function.owner.key", "322ccb89-ea0b-4950-a9bb-02ac51742785"), u.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                try {
                    return l.safeExecuteJSNode(ne, "GetAsBinary", "Base64ToBinary", {
                        Base64: t.DataConversion.JSNodeParamConverter.to(r.value.base64InLocal, t.DataTypes.DataTypes.Text),
                        Binary: t.DataConversion.JSNodeParamConverter.to(t.DataTypes.BinaryData.defaultValue, t.DataTypes.DataTypes.BinaryData)
                    }, function(d) {
                        var F = new(l.constructor.getVariableGroupType("DerivDroppableFileUploadOfficial.Base64ToBinary$getAsBinaryJSResult"));
                        return F.binaryOut = t.DataConversion.JSNodeParamConverter.from(d.Binary, t.DataTypes.DataTypes.BinaryData), F
                    }, {}, {})
                } finally {
                    u && u.end()
                }
            }, 1), c.value.binaryOut = o.value.binaryOut, c.value
        } finally {
            s && s.end()
        }
    }, 1)
};
n.constructor.registerVariableGroupType("DerivDroppableFileUploadOfficial.Base64ToBinary$vars", [{
    name: "Base64",
    attrName: "base64InLocal",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: a(function() {
        return ""
    }, "defaultValue")
}]);
n.constructor.registerVariableGroupType("DerivDroppableFileUploadOfficial.Base64ToBinary$getAsBinaryJSResult", [{
    name: "Binary",
    attrName: "binaryOut",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.BinaryData,
    defaultValue: a(function() {
        return t.DataTypes.BinaryData.defaultValue
    }, "defaultValue")
}]);
n.constructor.registerVariableGroupType("DerivDroppableFileUploadOfficial.Base64ToBinary$outVars", [{
    name: "Binary",
    attrName: "binaryOut",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.BinaryData,
    defaultValue: a(function() {
        return t.DataTypes.BinaryData.defaultValue
    }, "defaultValue")
}]);
n.clientActionProxies.base64ToBinary$Action = function(i) {
    return i = i === void 0 ? "" : i, l.executeActionInsideJSNode(n.default.base64ToBinary$Action.bind(l, t.DataConversion.JSNodeParamConverter.from(i, t.DataTypes.DataTypes.Text)), t.Controller.BaseViewController.activeScreen ? t.Controller.BaseViewController.activeScreen.callContext() : void 0, function(e) {
        return {
            Binary: t.DataConversion.JSNodeParamConverter.to(e.binaryOut, t.DataTypes.DataTypes.BinaryData)
        }
    })
};
n.binaryToBase64$Action = function(i, e) {
    return t.Logger.startActiveSpan("BinaryToBase64", function(s) {
        s && (s.setAttribute("code.function", "BinaryToBase64"), s.setAttribute("outsystems.function.key", "7f94f50a-b29a-433e-87c9-4ca770b624da"), s.setAttribute("outsystems.function.owner.name", "DerivDroppableFileUploadOfficial"), s.setAttribute("outsystems.function.owner.key", "322ccb89-ea0b-4950-a9bb-02ac51742785"), s.setAttribute("outsystems.function.type", "CLIENT_ACTION"));
        try {
            e = l.callContext(e);
            var r = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("DerivDroppableFileUploadOfficial.BinaryToBase64$vars")));
            r.value.binaryInLocal = i;
            var o = new t.DataTypes.VariableHolder,
                c = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("DerivDroppableFileUploadOfficial.BinaryToBase64$outVars")));
            return o.value = t.Logger.startActiveSpan("BinaryToBase64", function(u) {
                u && (u.setAttribute("code.function", "BinaryToBase64"), u.setAttribute("outsystems.function.key", "a9415b01-2050-4ec5-a393-56fffb14d077"), u.setAttribute("outsystems.function.owner.name", "DerivDroppableFileUploadOfficial"), u.setAttribute("outsystems.function.owner.key", "322ccb89-ea0b-4950-a9bb-02ac51742785"), u.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                try {
                    return l.safeExecuteJSNode(le, "BinaryToBase64", "BinaryToBase64", {
                        Binary: t.DataConversion.JSNodeParamConverter.to(r.value.binaryInLocal, t.DataTypes.DataTypes.BinaryData),
                        Base64: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text)
                    }, function(d) {
                        var F = new(l.constructor.getVariableGroupType("DerivDroppableFileUploadOfficial.BinaryToBase64$binaryToBase64JSResult"));
                        return F.base64Out = t.DataConversion.JSNodeParamConverter.from(d.Base64, t.DataTypes.DataTypes.Text), F
                    }, {}, {})
                } finally {
                    u && u.end()
                }
            }, 1), c.value.base64Out = o.value.base64Out, c.value
        } finally {
            s && s.end()
        }
    }, 1)
};
n.constructor.registerVariableGroupType("DerivDroppableFileUploadOfficial.BinaryToBase64$vars", [{
    name: "Binary",
    attrName: "binaryInLocal",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.BinaryData,
    defaultValue: a(function() {
        return t.DataTypes.BinaryData.defaultValue
    }, "defaultValue")
}]);
n.constructor.registerVariableGroupType("DerivDroppableFileUploadOfficial.BinaryToBase64$binaryToBase64JSResult", [{
    name: "Base64",
    attrName: "base64Out",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: a(function() {
        return ""
    }, "defaultValue")
}]);
n.constructor.registerVariableGroupType("DerivDroppableFileUploadOfficial.BinaryToBase64$outVars", [{
    name: "Base64",
    attrName: "base64Out",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: a(function() {
        return ""
    }, "defaultValue")
}]);
n.clientActionProxies.binaryToBase64$Action = function(i) {
    return i = i === void 0 ? t.DataTypes.BinaryData.defaultValue : i, l.executeActionInsideJSNode(n.default.binaryToBase64$Action.bind(l, t.DataConversion.JSNodeParamConverter.from(i, t.DataTypes.DataTypes.BinaryData)), t.Controller.BaseViewController.activeScreen ? t.Controller.BaseViewController.activeScreen.callContext() : void 0, function(e) {
        return {
            Base64: t.DataConversion.JSNodeParamConverter.to(e.base64Out, t.DataTypes.DataTypes.Text)
        }
    })
};
n.file_Validate$Action = function(i, e, s, r, o, c) {
    return t.Logger.startActiveSpan("File_Validate", function(u) {
        return u && (u.setAttribute("code.function", "File_Validate"), u.setAttribute("outsystems.function.key", "c998bb39-e78a-458e-8c67-a5e95085a836"), u.setAttribute("outsystems.function.owner.name", "DerivDroppableFileUploadOfficial"), u.setAttribute("outsystems.function.owner.key", "322ccb89-ea0b-4950-a9bb-02ac51742785"), u.setAttribute("outsystems.function.type", "CLIENT_ACTION")), t.Flow.tryFinally(function() {
            c = l.callContext(c);
            var d = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("DerivDroppableFileUploadOfficial.File_Validate$vars")));
            d.value.fileSizeInLocal = i, d.value.filesMaxSizeInLocal = e, d.value.fileContentInLocal = s, d.value.acceptedFileTypesInLocal = r, d.value.fileTypeInLocal = o;
            var F = new t.DataTypes.VariableHolder,
                _e = new t.DataTypes.VariableHolder,
                Ve = new t.DataTypes.VariableHolder,
                I = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("DerivDroppableFileUploadOfficial.File_Validate$outVars")));
            return t.Flow.executeAsyncFlow(function() {
                return n.default.getMaxSizeFileAllowed$Action(c).then(function(Oe) {
                    Ve.value = Oe
                }).then(function() {
                    if (d.value.fileSizeInLocal <= Ve.value.maxFileSizeAllowedOut) {
                        if (d.value.filesMaxSizeInLocal !== 0 && (F.value = n.default.validateFileSize$Action(d.value.fileSizeInLocal, d.value.filesMaxSizeInLocal, c), !F.value.isValidOut)) return I.value.errorOut.successAttr = !1, I.value.errorOut.errorMessageAttr = "File exceeds the max file size defined!", t.Flow.returnAsync(I.value);
                        if (d.value.acceptedFileTypesInLocal !== "" && (_e.value = n.default.validateFileType$Action(d.value.fileTypeInLocal, d.value.acceptedFileTypesInLocal, c), !_e.value.isValidOut)) return I.value.errorOut.successAttr = !1, I.value.errorOut.errorMessageAttr = "FIle doesn't correspond to the accepted files type to accept", t.Flow.returnAsync(I.value);
                        I.value.validBase64Out = t.BuiltinFunctions.substr(d.value.fileContentInLocal, t.BuiltinFunctions.index(d.value.fileContentInLocal, ",", 0, !1, !1) + 1, t.BuiltinFunctions.length(d.value.fileContentInLocal)), I.value.errorOut.successAttr = !0
                    } else I.value.errorOut.successAttr = !1, I.value.errorOut.errorMessageAttr = "File exceeds the max file size allowed!"
                })
            }).then(function() {
                return I.value
            })
        }, function() {
            u && u.end()
        })
    }, 1)
};
n.constructor.registerVariableGroupType("DerivDroppableFileUploadOfficial.File_Validate$vars", [{
    name: "FileSize",
    attrName: "fileSizeInLocal",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Integer,
    defaultValue: a(function() {
        return 0
    }, "defaultValue")
}, {
    name: "FilesMaxSize",
    attrName: "filesMaxSizeInLocal",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Integer,
    defaultValue: a(function() {
        return 0
    }, "defaultValue")
}, {
    name: "FileContent",
    attrName: "fileContentInLocal",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: a(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AcceptedFileTypes",
    attrName: "acceptedFileTypesInLocal",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: a(function() {
        return ""
    }, "defaultValue")
}, {
    name: "FileType",
    attrName: "fileTypeInLocal",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: a(function() {
        return ""
    }, "defaultValue")
}]);
n.constructor.registerVariableGroupType("DerivDroppableFileUploadOfficial.File_Validate$outVars", [{
    name: "ValidBase64",
    attrName: "validBase64Out",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: a(function() {
        return ""
    }, "defaultValue")
}, {
    name: "Error",
    attrName: "errorOut",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Record,
    defaultValue: a(function() {
        return new R
    }, "defaultValue"),
    complexType: R
}]);
n.clientActionProxies.file_Validate$Action = function(i, e, s, r, o) {
    return i = i === void 0 ? 0 : i, e = e === void 0 ? 0 : e, s = s === void 0 ? "" : s, r = r === void 0 ? "" : r, o = o === void 0 ? "" : o, l.executeActionInsideJSNode(n.default.file_Validate$Action.bind(l, t.DataConversion.JSNodeParamConverter.from(i, t.DataTypes.DataTypes.Integer), t.DataConversion.JSNodeParamConverter.from(e, t.DataTypes.DataTypes.Integer), t.DataConversion.JSNodeParamConverter.from(s, t.DataTypes.DataTypes.Text), t.DataConversion.JSNodeParamConverter.from(r, t.DataTypes.DataTypes.Text), t.DataConversion.JSNodeParamConverter.from(o, t.DataTypes.DataTypes.Text)), t.Controller.BaseViewController.activeScreen ? t.Controller.BaseViewController.activeScreen.callContext() : void 0, function(c) {
        return {
            ValidBase64: t.DataConversion.JSNodeParamConverter.to(c.validBase64Out, t.DataTypes.DataTypes.Text),
            Error: c.errorOut
        }
    })
};
n.getMaxSizeFileAllowed$Action = function(i) {
    return t.Logger.startActiveSpan("GetMaxSizeFileAllowed", function(e) {
        return e && (e.setAttribute("code.function", "GetMaxSizeFileAllowed"), e.setAttribute("outsystems.function.key", "bc6c6078-9335-4883-9083-ecd27280482a"), e.setAttribute("outsystems.function.owner.name", "DerivDroppableFileUploadOfficial"), e.setAttribute("outsystems.function.owner.key", "322ccb89-ea0b-4950-a9bb-02ac51742785"), e.setAttribute("outsystems.function.type", "CLIENT_ACTION")), t.Flow.tryFinally(function() {
            i = l.callContext(i);
            var s = new t.DataTypes.VariableHolder,
                r = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("DerivDroppableFileUploadOfficial.GetMaxSizeFileAllowed$outVars")));
            return t.Flow.executeAsyncFlow(function() {
                return l.getMaxFileSizeAllowed$ServerAction(i).then(function(o) {
                    s.value = o
                }).then(function() {
                    r.value.maxFileSizeAllowedOut = s.value.maxFileSizeAllowedOut
                })
            }).then(function() {
                return r.value
            })
        }, function() {
            e && e.end()
        })
    }, 1)
};
n.constructor.registerVariableGroupType("DerivDroppableFileUploadOfficial.GetMaxSizeFileAllowed$outVars", [{
    name: "MaxFileSizeAllowed",
    attrName: "maxFileSizeAllowedOut",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Integer,
    defaultValue: a(function() {
        return 0
    }, "defaultValue")
}]);
n.clientActionProxies.getMaxSizeFileAllowed$Action = function() {
    return l.executeActionInsideJSNode(n.default.getMaxSizeFileAllowed$Action.bind(l), t.Controller.BaseViewController.activeScreen ? t.Controller.BaseViewController.activeScreen.callContext() : void 0, function(i) {
        return {
            MaxFileSizeAllowed: t.DataConversion.JSNodeParamConverter.to(i.maxFileSizeAllowedOut, t.DataTypes.DataTypes.Integer)
        }
    })
};
n.validateFileSize$Action = function(i, e, s) {
    return t.Logger.startActiveSpan("ValidateFileSize", function(r) {
        r && (r.setAttribute("code.function", "ValidateFileSize"), r.setAttribute("outsystems.function.key", "498b7710-48a2-4957-8541-22f97f020f1a"), r.setAttribute("outsystems.function.owner.name", "DerivDroppableFileUploadOfficial"), r.setAttribute("outsystems.function.owner.key", "322ccb89-ea0b-4950-a9bb-02ac51742785"), r.setAttribute("outsystems.function.type", "CLIENT_ACTION"));
        try {
            s = l.callContext(s);
            var o = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("DerivDroppableFileUploadOfficial.ValidateFileSize$vars")));
            o.value.fileSizeInLocal = i, o.value.maxFileSizeInLocal = e;
            var c = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("DerivDroppableFileUploadOfficial.ValidateFileSize$outVars")));
            return c.value.isValidOut = o.value.fileSizeInLocal <= o.value.maxFileSizeInLocal, c.value
        } finally {
            r && r.end()
        }
    }, 1)
};
n.constructor.registerVariableGroupType("DerivDroppableFileUploadOfficial.ValidateFileSize$vars", [{
    name: "FileSize",
    attrName: "fileSizeInLocal",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Integer,
    defaultValue: a(function() {
        return 0
    }, "defaultValue")
}, {
    name: "MaxFileSize",
    attrName: "maxFileSizeInLocal",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Integer,
    defaultValue: a(function() {
        return 0
    }, "defaultValue")
}]);
n.constructor.registerVariableGroupType("DerivDroppableFileUploadOfficial.ValidateFileSize$outVars", [{
    name: "IsValid",
    attrName: "isValidOut",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Boolean,
    defaultValue: a(function() {
        return !1
    }, "defaultValue")
}]);
n.clientActionProxies.validateFileSize$Action = function(i, e) {
    return i = i === void 0 ? 0 : i, e = e === void 0 ? 0 : e, l.executeActionInsideJSNode(n.default.validateFileSize$Action.bind(l, t.DataConversion.JSNodeParamConverter.from(i, t.DataTypes.DataTypes.Integer), t.DataConversion.JSNodeParamConverter.from(e, t.DataTypes.DataTypes.Integer)), t.Controller.BaseViewController.activeScreen ? t.Controller.BaseViewController.activeScreen.callContext() : void 0, function(s) {
        return {
            IsValid: t.DataConversion.JSNodeParamConverter.to(s.isValidOut, t.DataTypes.DataTypes.Boolean)
        }
    })
};
n.validateFileType$Action = function(i, e, s) {
    return t.Logger.startActiveSpan("ValidateFileType", function(r) {
        r && (r.setAttribute("code.function", "ValidateFileType"), r.setAttribute("outsystems.function.key", "fee83227-c761-47af-aedb-35b33f8d3d0e"), r.setAttribute("outsystems.function.owner.name", "DerivDroppableFileUploadOfficial"), r.setAttribute("outsystems.function.owner.key", "322ccb89-ea0b-4950-a9bb-02ac51742785"), r.setAttribute("outsystems.function.type", "CLIENT_ACTION"));
        try {
            s = l.callContext(s);
            var o = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("DerivDroppableFileUploadOfficial.ValidateFileType$vars")));
            o.value.fileTypeInLocal = i, o.value.acceptedFileTypesInLocal = e;
            var c = new t.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("DerivDroppableFileUploadOfficial.ValidateFileType$outVars")));
            return t.BuiltinFunctions.index(o.value.acceptedFileTypesInLocal, "image/*", 0, !1, !1) !== -1 && t.BuiltinFunctions.index(o.value.fileTypeInLocal, "image/", 0, !1, !1) !== -1 ? (c.value.isValidOut = !0, c.value) : (c.value.isValidOut = t.BuiltinFunctions.index(o.value.acceptedFileTypesInLocal, o.value.fileTypeInLocal, 0, !1, !0) !== -1, c.value)
        } finally {
            r && r.end()
        }
    }, 1)
};
n.constructor.registerVariableGroupType("DerivDroppableFileUploadOfficial.ValidateFileType$vars", [{
    name: "FileType",
    attrName: "fileTypeInLocal",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: a(function() {
        return ""
    }, "defaultValue")
}, {
    name: "AcceptedFileTypes",
    attrName: "acceptedFileTypesInLocal",
    mandatory: !0,
    dataType: t.DataTypes.DataTypes.Text,
    defaultValue: a(function() {
        return ""
    }, "defaultValue")
}]);
n.constructor.registerVariableGroupType("DerivDroppableFileUploadOfficial.ValidateFileType$outVars", [{
    name: "IsValid",
    attrName: "isValidOut",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Boolean,
    defaultValue: a(function() {
        return !1
    }, "defaultValue")
}]);
n.clientActionProxies.validateFileType$Action = function(i, e) {
    return i = i === void 0 ? "" : i, e = e === void 0 ? "" : e, l.executeActionInsideJSNode(n.default.validateFileType$Action.bind(l, t.DataConversion.JSNodeParamConverter.from(i, t.DataTypes.DataTypes.Text), t.DataConversion.JSNodeParamConverter.from(e, t.DataTypes.DataTypes.Text)), t.Controller.BaseViewController.activeScreen ? t.Controller.BaseViewController.activeScreen.callContext() : void 0, function(s) {
        return {
            IsValid: t.DataConversion.JSNodeParamConverter.to(s.isValidOut, t.DataTypes.DataTypes.Boolean)
        }
    })
};
n.getMaxFileSizeAllowed$ServerAction = function(i) {
    var e = this.controller;
    return t.Logger.startActiveSpan("GetMaxFileSizeAllowed", function(s) {
        return s && (s.setAttribute("code.function", "GetMaxFileSizeAllowed"), s.setAttribute("outsystems.function.key", "c4212b4c-c9c8-43f4-b461-5d934790286e"), s.setAttribute("outsystems.function.owner.name", "DerivDroppableFileUploadOfficial"), s.setAttribute("outsystems.function.owner.key", "322ccb89-ea0b-4950-a9bb-02ac51742785"), s.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), t.Flow.tryFinally(function() {
            return e.callServerAction("GetMaxFileSizeAllowed", "screenservices/DerivDroppableFileUploadOfficial/ActionGetMaxFileSizeAllowed", "rvgRI6fLemNYcx7AwpKugQ", {}, e.callContext(i), void 0, void 0, !1).then(function(r) {
                var o = new(e.constructor.getVariableGroupType("DerivDroppableFileUploadOfficial$ActionGetMaxFileSizeAllowed"));
                return o.maxFileSizeAllowedOut = t.DataConversion.ServerDataConverter.from(r.MaxFileSizeAllowed, t.DataTypes.DataTypes.Integer), o
            })
        }, function() {
            s && s.end()
        })
    }, 0)
};
n.constructor.registerVariableGroupType("DerivDroppableFileUploadOfficial$ActionGetMaxFileSizeAllowed", [{
    name: "MaxFileSizeAllowed",
    attrName: "maxFileSizeAllowedOut",
    mandatory: !1,
    dataType: t.DataTypes.DataTypes.Integer,
    defaultValue: a(function() {
        return 0
    }, "defaultValue")
}]);
var it = n;
var y = f,
    fe = class fe extends y.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Internal_configs", "internal_configsVar", "Internal_configs", !0, !1, y.DataTypes.DataTypes.Record, function() {
                return y.DataTypes.ImmutableBase.getData(new W)
            }, !1, W), this.attr("RowItemsDesktop", "rowItemsDesktopIn", "RowItemsDesktop", !0, !1, y.DataTypes.DataTypes.Integer, function() {
                return 4
            }, !1), this.attr("_rowItemsDesktopInDataFetchStatus", "_rowItemsDesktopInDataFetchStatus", "_rowItemsDesktopInDataFetchStatus", !0, !1, y.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("RowItemsTablet", "rowItemsTabletIn", "RowItemsTablet", !0, !1, y.DataTypes.DataTypes.Integer, function() {
                return 3
            }, !1), this.attr("_rowItemsTabletInDataFetchStatus", "_rowItemsTabletInDataFetchStatus", "_rowItemsTabletInDataFetchStatus", !0, !1, y.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("RowItemsPhone", "rowItemsPhoneIn", "RowItemsPhone", !0, !1, y.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("_rowItemsPhoneInDataFetchStatus", "_rowItemsPhoneInDataFetchStatus", "_rowItemsPhoneInDataFetchStatus", !0, !1, y.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ItemsGap", "itemsGapIn", "ItemsGap", !0, !1, y.DataTypes.DataTypes.Text, function() {
                return we.space.base
            }, !1), this.attr("_itemsGapInDataFetchStatus", "_itemsGapInDataFetchStatus", "_itemsGapInDataFetchStatus", !0, !1, y.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", !0, !1, y.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", !0, !1, y.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(y.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(fe, "VariablesRecord");
var L = fe;
L.init();
var De = class De extends y.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(De, "WidgetsRecord");
var ce = De,
    ye = class ye extends y.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return L
        }
        static getWidgetsRecordConstructor() {
            return ce
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(e) {
            "RowItemsDesktop" in e && (this.variables.rowItemsDesktopIn = e.RowItemsDesktop, "_rowItemsDesktopInDataFetchStatus" in e && (this.variables._rowItemsDesktopInDataFetchStatus = e._rowItemsDesktopInDataFetchStatus)), "RowItemsTablet" in e && (this.variables.rowItemsTabletIn = e.RowItemsTablet, "_rowItemsTabletInDataFetchStatus" in e && (this.variables._rowItemsTabletInDataFetchStatus = e._rowItemsTabletInDataFetchStatus)), "RowItemsPhone" in e && (this.variables.rowItemsPhoneIn = e.RowItemsPhone, "_rowItemsPhoneInDataFetchStatus" in e && (this.variables._rowItemsPhoneInDataFetchStatus = e._rowItemsPhoneInDataFetchStatus)), "ItemsGap" in e && (this.variables.itemsGapIn = e.ItemsGap, "_itemsGapInDataFetchStatus" in e && (this.variables._itemsGapInDataFetchStatus = e._itemsGapInDataFetchStatus)), "ExtendedClass" in e && (this.variables.extendedClassIn = e.ExtendedClass, "_extendedClassInDataFetchStatus" in e && (this.variables._extendedClassInDataFetchStatus = e._extendedClassInDataFetchStatus))
        }
    };
a(ye, "Model");
var P = ye;
P._hasValidationWidgetsValue = void 0;
var ot = new y.Model.ModelFactory(P);
var b = f,
    Ie = class Ie extends b.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("UsePadding", "usePaddingIn", "UsePadding", !0, !1, b.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("_usePaddingInDataFetchStatus", "_usePaddingInDataFetchStatus", "_usePaddingInDataFetchStatus", !0, !1, b.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", !0, !1, b.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", !0, !1, b.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(b.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(Ie, "VariablesRecord");
var G = Ie;
G.init();
var he = class he extends b.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(he, "WidgetsRecord");
var pe = he,
    me = class me extends b.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return G
        }
        static getWidgetsRecordConstructor() {
            return pe
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(e) {
            "UsePadding" in e && (this.variables.usePaddingIn = e.UsePadding, "_usePaddingInDataFetchStatus" in e && (this.variables._usePaddingInDataFetchStatus = e._usePaddingInDataFetchStatus)), "ExtendedClass" in e && (this.variables.extendedClassIn = e.ExtendedClass, "_extendedClassInDataFetchStatus" in e && (this.variables._extendedClassInDataFetchStatus = e._extendedClassInDataFetchStatus))
        }
    };
a(me, "Model");
var U = me;
U._hasValidationWidgetsValue = void 0;
var dt = new b.Model.ModelFactory(U);
var D = f,
    be = class be extends D.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("ViewImageList", "viewImageListVar", "ViewImageList", !0, !1, D.DataTypes.DataTypes.RecordList, function() {
                return D.DataTypes.ImmutableBase.getData(new k)
            }, !1, k), this.attr("DroppedFile", "droppedFileVar", "DroppedFile", !0, !1, D.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("AcceptedFileTypes", "acceptedFileTypesIn", "AcceptedFileTypes", !0, !1, D.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_acceptedFileTypesInDataFetchStatus", "_acceptedFileTypesInDataFetchStatus", "_acceptedFileTypesInDataFetchStatus", !0, !1, D.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("FilesMaxSize", "filesMaxSizeIn", "FilesMaxSize", !0, !1, D.DataTypes.DataTypes.Integer, function() {
                return 0
            }, !1), this.attr("_filesMaxSizeInDataFetchStatus", "_filesMaxSizeInDataFetchStatus", "_filesMaxSizeInDataFetchStatus", !0, !1, D.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ShowImagePreview", "showImagePreviewIn", "ShowImagePreview", !0, !1, D.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_showImagePreviewInDataFetchStatus", "_showImagePreviewInDataFetchStatus", "_showImagePreviewInDataFetchStatus", !0, !1, D.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Multipe", "multipeIn", "Multipe", !0, !1, D.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_multipeInDataFetchStatus", "_multipeInDataFetchStatus", "_multipeInDataFetchStatus", !0, !1, D.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ElementId", "elementIdIn", "ElementId", !0, !1, D.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_elementIdInDataFetchStatus", "_elementIdInDataFetchStatus", "_elementIdInDataFetchStatus", !0, !1, D.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(D.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(be, "VariablesRecord");
var N = be;
N.init();
var Fe = class Fe extends D.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(Fe, "WidgetsRecord");
var Se = Fe,
    x = class x extends D.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return N
        }
        static getWidgetsRecordConstructor() {
            return Se
        }
        static get hasValidationWidgets() {
            return x._hasValidationWidgetsValue === void 0 && (x._hasValidationWidgetsValue = void 0 || void 0), x._hasValidationWidgetsValue
        }
        setInputs(e) {
            "AcceptedFileTypes" in e && (this.variables.acceptedFileTypesIn = e.AcceptedFileTypes, "_acceptedFileTypesInDataFetchStatus" in e && (this.variables._acceptedFileTypesInDataFetchStatus = e._acceptedFileTypesInDataFetchStatus)), "FilesMaxSize" in e && (this.variables.filesMaxSizeIn = e.FilesMaxSize, "_filesMaxSizeInDataFetchStatus" in e && (this.variables._filesMaxSizeInDataFetchStatus = e._filesMaxSizeInDataFetchStatus)), "ShowImagePreview" in e && (this.variables.showImagePreviewIn = e.ShowImagePreview, "_showImagePreviewInDataFetchStatus" in e && (this.variables._showImagePreviewInDataFetchStatus = e._showImagePreviewInDataFetchStatus)), "Multipe" in e && (this.variables.multipeIn = e.Multipe, "_multipeInDataFetchStatus" in e && (this.variables._multipeInDataFetchStatus = e._multipeInDataFetchStatus)), "ElementId" in e && (this.variables.elementIdIn = e.ElementId, "_elementIdInDataFetchStatus" in e && (this.variables._elementIdInDataFetchStatus = e._elementIdInDataFetchStatus))
        }
    };
a(x, "Model");
var z = x;
z._hasValidationWidgetsValue = void 0;
var yt = new D.Model.ModelFactory(z);
var T = f,
    ge = class ge extends T.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Internal_Configs", "internal_ConfigsVar", "Internal_Configs", !0, !1, T.DataTypes.DataTypes.Record, function() {
                return T.DataTypes.ImmutableBase.getData(new J)
            }, !1, J), this.attr("IsLoading", "isLoadingIn", "IsLoading", !0, !1, T.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isLoadingInDataFetchStatus", "_isLoadingInDataFetchStatus", "_isLoadingInDataFetchStatus", !0, !1, T.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ShowLabelOnLoading", "showLabelOnLoadingIn", "ShowLabelOnLoading", !0, !1, T.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_showLabelOnLoadingInDataFetchStatus", "_showLabelOnLoadingInDataFetchStatus", "_showLabelOnLoadingInDataFetchStatus", !0, !1, T.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", !0, !1, T.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", !0, !1, T.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(T.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(ge, "VariablesRecord");
var $ = ge;
$.init();
var xe = class xe extends T.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(xe, "WidgetsRecord");
var ve = xe,
    Ce = class Ce extends T.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return $
        }
        static getWidgetsRecordConstructor() {
            return ve
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(e) {
            "IsLoading" in e && (this.variables.isLoadingIn = e.IsLoading, "_isLoadingInDataFetchStatus" in e && (this.variables._isLoadingInDataFetchStatus = e._isLoadingInDataFetchStatus)), "ShowLabelOnLoading" in e && (this.variables.showLabelOnLoadingIn = e.ShowLabelOnLoading, "_showLabelOnLoadingInDataFetchStatus" in e && (this.variables._showLabelOnLoadingInDataFetchStatus = e._showLabelOnLoadingInDataFetchStatus)), "ExtendedClass" in e && (this.variables.extendedClassIn = e.ExtendedClass, "_extendedClassInDataFetchStatus" in e && (this.variables._extendedClassInDataFetchStatus = e._extendedClassInDataFetchStatus))
        }
    };
a(Ce, "Model");
var E = Ce;
E._hasValidationWidgetsValue = void 0;
var ht = new T.Model.ModelFactory(E);
export {
    Ge as a, We as b, Qe as c, Ee as d, it as e, ot as f, dt as g, yt as h, ht as i
};