define("Extension.Text.model$TextRec", ["exports", "@outsystems/runtime-core-js", "Extension.Text.model"], function(exports, OSRuntimeCore, Extension_TextModel) {
    var OS = OSRuntimeCore; {
        class TextRecInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Value", "valueAttr", "Value", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new TextRec(new TextRec.RecordClass({
                    valueAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        Extension_TextModel.TextRec = TextRecInner;

        var TextRec = TextRecInner;
        TextRec.init();
    }
});

define("Extension.Text.model$RCTextRecord", ["exports", "@outsystems/runtime-core-js", "Extension.Text.model", "Extension.Text.model$TextRec"], function(exports, OSRuntimeCore, Extension_TextModel) {
    var OS = OSRuntimeCore; {
        class RCTextRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Text", "textAttr", "Text", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new Extension_TextModel.TextRec());
                    }, true, Extension_TextModel.TextRec)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RCTextRecord(new RCTextRecord.RecordClass({
                    textAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        Extension_TextModel.RCTextRecord = RCTextRecordInner;

        RCTextRecordInner._isAnonymousRecord = true;
        RCTextRecordInner.UniqueId = "0d84b59e-ff89-87c4-71ae-b49dfa9f2c39";
        var RCTextRecord = RCTextRecordInner;
        RCTextRecord.init();
    }
});

define("Extension.Text.model$RLTextList", ["exports", "@outsystems/runtime-core-js", "Extension.Text.model", "Extension.Text.model$TextRec"], function(exports, OSRuntimeCore, Extension_TextModel) {
    var OS = OSRuntimeCore;
    class RLTextList extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return Extension_TextModel.TextRec;
        }

    }

    Extension_TextModel.RLTextList = RLTextList;

});

define("Extension.Text.model$RLTextRecordList", ["exports", "@outsystems/runtime-core-js", "Extension.Text.model", "Extension.Text.model$RCTextRecord"], function(exports, OSRuntimeCore, Extension_TextModel) {
    var OS = OSRuntimeCore;
    class RLTextRecordList extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return Extension_TextModel.RCTextRecord;
        }

    }

    Extension_TextModel.RLTextRecordList = RLTextRecordList;

});

define("Extension.Text.model", ["exports", "@outsystems/runtime-core-js"], function(exports, OSRuntimeCore) {
    var OS = OSRuntimeCore;
    var Extension_TextModel = exports;
});