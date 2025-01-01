import {
    ia as r
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as s
} from "./_oschunk-QHO7QY6K.js";
var a = r,
    h = class h extends a.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Title", "titleIn", "Title", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_titleInDataFetchStatus", "_titleInDataFetchStatus", "_titleInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Description", "descriptionIn", "Description", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_descriptionInDataFetchStatus", "_descriptionInDataFetchStatus", "_descriptionInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Image", "imageIn", "Image", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_imageInDataFetchStatus", "_imageInDataFetchStatus", "_imageInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("DescriptionHead", "descriptionHeadIn", "DescriptionHead", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_descriptionHeadInDataFetchStatus", "_descriptionHeadInDataFetchStatus", "_descriptionHeadInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("HasDivider", "hasDividerIn", "HasDivider", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_hasDividerInDataFetchStatus", "_hasDividerInDataFetchStatus", "_hasDividerInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Icon", "iconIn", "Icon", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_iconInDataFetchStatus", "_iconInDataFetchStatus", "_iconInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("NoImage", "noImageIn", "NoImage", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_noImageInDataFetchStatus", "_noImageInDataFetchStatus", "_noImageInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(a.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
s(h, "VariablesRecord");
var o = h;
o.init();
var d = class d extends a.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
s(d, "WidgetsRecord");
var I = d,
    i = class i extends a.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return o
        }
        static getWidgetsRecordConstructor() {
            return I
        }
        static get hasValidationWidgets() {
            return i._hasValidationWidgetsValue === void 0 && (i._hasValidationWidgetsValue = void 0 || void 0), i._hasValidationWidgetsValue
        }
        setInputs(t) {
            "Title" in t && (this.variables.titleIn = t.Title, "_titleInDataFetchStatus" in t && (this.variables._titleInDataFetchStatus = t._titleInDataFetchStatus)), "Description" in t && (this.variables.descriptionIn = t.Description, "_descriptionInDataFetchStatus" in t && (this.variables._descriptionInDataFetchStatus = t._descriptionInDataFetchStatus)), "Image" in t && (this.variables.imageIn = t.Image, "_imageInDataFetchStatus" in t && (this.variables._imageInDataFetchStatus = t._imageInDataFetchStatus)), "DescriptionHead" in t && (this.variables.descriptionHeadIn = t.DescriptionHead, "_descriptionHeadInDataFetchStatus" in t && (this.variables._descriptionHeadInDataFetchStatus = t._descriptionHeadInDataFetchStatus)), "HasDivider" in t && (this.variables.hasDividerIn = t.HasDivider, "_hasDividerInDataFetchStatus" in t && (this.variables._hasDividerInDataFetchStatus = t._hasDividerInDataFetchStatus)), "Icon" in t && (this.variables.iconIn = t.Icon, "_iconInDataFetchStatus" in t && (this.variables._iconInDataFetchStatus = t._iconInDataFetchStatus)), "NoImage" in t && (this.variables.noImageIn = t.NoImage, "_noImageInDataFetchStatus" in t && (this.variables._noImageInDataFetchStatus = t._noImageInDataFetchStatus))
        }
    };
s(i, "Model");
var c = i;
c._hasValidationWidgetsValue = void 0;
var p = new a.Model.ModelFactory(c);
var e = r,
    m = class m extends e.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("CustomTitle", "customTitleIn", "CustomTitle", !0, !1, e.DataTypes.DataTypes.Text, function() {
                return "You can earn commissions from"
            }, !1), this.attr("_customTitleInDataFetchStatus", "_customTitleInDataFetchStatus", "_customTitleInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("NoImage", "noImageIn", "NoImage", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_noImageInDataFetchStatus", "_noImageInDataFetchStatus", "_noImageInDataFetchStatus", !0, !1, e.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(e.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
s(m, "VariablesRecord");
var l = m;
l.init();
var _ = class _ extends e.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
s(_, "WidgetsRecord");
var f = _,
    n = class n extends e.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return l
        }
        static getWidgetsRecordConstructor() {
            return f
        }
        static get hasValidationWidgets() {
            return n._hasValidationWidgetsValue === void 0 && (n._hasValidationWidgetsValue = void 0 || void 0), n._hasValidationWidgetsValue
        }
        setInputs(t) {
            "CustomTitle" in t && (this.variables.customTitleIn = t.CustomTitle, "_customTitleInDataFetchStatus" in t && (this.variables._customTitleInDataFetchStatus = t._customTitleInDataFetchStatus)), "NoImage" in t && (this.variables.noImageIn = t.NoImage, "_noImageInDataFetchStatus" in t && (this.variables._noImageInDataFetchStatus = t._noImageInDataFetchStatus))
        }
    };
s(n, "Model");
var u = n;
u._hasValidationWidgetsValue = void 0;
var H = new e.Model.ModelFactory(u);
export {
    p as a, H as b
};