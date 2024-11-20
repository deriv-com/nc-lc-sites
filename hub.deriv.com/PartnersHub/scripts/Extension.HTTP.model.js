define("Extension.HTTP.model$UserLanguageRec", ["exports", "@outsystems/runtime-core-js", "Extension.HTTP.model"], function(exports, OSRuntimeCore, Extension_HTTPModel) {
    var OS = OSRuntimeCore; {
        class UserLanguageRecInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Value", "valueAttr", "Value", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new UserLanguageRec(new UserLanguageRec.RecordClass({
                    valueAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        Extension_HTTPModel.UserLanguageRec = UserLanguageRecInner;

        var UserLanguageRec = UserLanguageRecInner;
        UserLanguageRec.init();
    }
});

define("Extension.HTTP.model$RCUserLanguageRecord", ["exports", "@outsystems/runtime-core-js", "Extension.HTTP.model", "Extension.HTTP.model$UserLanguageRec"], function(exports, OSRuntimeCore, Extension_HTTPModel) {
    var OS = OSRuntimeCore; {
        class RCUserLanguageRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("UserLanguage", "userLanguageAttr", "UserLanguage", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new Extension_HTTPModel.UserLanguageRec());
                    }, true, Extension_HTTPModel.UserLanguageRec)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RCUserLanguageRecord(new RCUserLanguageRecord.RecordClass({
                    userLanguageAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        Extension_HTTPModel.RCUserLanguageRecord = RCUserLanguageRecordInner;

        RCUserLanguageRecordInner._isAnonymousRecord = true;
        RCUserLanguageRecordInner.UniqueId = "0d91522b-fe98-b8e2-225c-65a8c955d8b3";
        var RCUserLanguageRecord = RCUserLanguageRecordInner;
        RCUserLanguageRecord.init();
    }
});

define("Extension.HTTP.model$RequestFileRec", ["exports", "@outsystems/runtime-core-js", "Extension.HTTP.model"], function(exports, OSRuntimeCore, Extension_HTTPModel) {
    var OS = OSRuntimeCore; {
        class RequestFileRecInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("FileName", "fileNameAttr", "FileName", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("FileType", "fileTypeAttr", "FileType", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("FileSize", "fileSizeAttr", "FileSize", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true),
                    this.attr("BinaryContent", "binaryContentAttr", "BinaryContent", true, false, OS.DataTypes.DataTypes.BinaryData, function() {
                        return OS.DataTypes.BinaryData.defaultValue;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        Extension_HTTPModel.RequestFileRec = RequestFileRecInner;

        var RequestFileRec = RequestFileRecInner;
        RequestFileRec.init();
    }
});

define("Extension.HTTP.model$RCRequestFileRecord", ["exports", "@outsystems/runtime-core-js", "Extension.HTTP.model", "Extension.HTTP.model$RequestFileRec"], function(exports, OSRuntimeCore, Extension_HTTPModel) {
    var OS = OSRuntimeCore; {
        class RCRequestFileRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("RequestFile", "requestFileAttr", "RequestFile", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new Extension_HTTPModel.RequestFileRec());
                    }, true, Extension_HTTPModel.RequestFileRec)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RCRequestFileRecord(new RCRequestFileRecord.RecordClass({
                    requestFileAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        Extension_HTTPModel.RCRequestFileRecord = RCRequestFileRecordInner;

        RCRequestFileRecordInner._isAnonymousRecord = true;
        RCRequestFileRecordInner.UniqueId = "b9403ff6-84fc-9a29-84e6-29b52108bc4c";
        var RCRequestFileRecord = RCRequestFileRecordInner;
        RCRequestFileRecord.init();
    }
});

define("Extension.HTTP.model$RLRequestFileRecordList", ["exports", "@outsystems/runtime-core-js", "Extension.HTTP.model", "Extension.HTTP.model$RCRequestFileRecord"], function(exports, OSRuntimeCore, Extension_HTTPModel) {
    var OS = OSRuntimeCore;
    class RLRequestFileRecordList extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return Extension_HTTPModel.RCRequestFileRecord;
        }

    }

    Extension_HTTPModel.RLRequestFileRecordList = RLRequestFileRecordList;

});

define("Extension.HTTP.model$RLRequestFileList", ["exports", "@outsystems/runtime-core-js", "Extension.HTTP.model", "Extension.HTTP.model$RequestFileRec"], function(exports, OSRuntimeCore, Extension_HTTPModel) {
    var OS = OSRuntimeCore;
    class RLRequestFileList extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return Extension_HTTPModel.RequestFileRec;
        }

    }

    Extension_HTTPModel.RLRequestFileList = RLRequestFileList;

});

define("Extension.HTTP.model$RLUserLanguageList", ["exports", "@outsystems/runtime-core-js", "Extension.HTTP.model", "Extension.HTTP.model$UserLanguageRec"], function(exports, OSRuntimeCore, Extension_HTTPModel) {
    var OS = OSRuntimeCore;
    class RLUserLanguageList extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return Extension_HTTPModel.UserLanguageRec;
        }

    }

    Extension_HTTPModel.RLUserLanguageList = RLUserLanguageList;

});

define("Extension.HTTP.model$RLUserLanguageRecordList", ["exports", "@outsystems/runtime-core-js", "Extension.HTTP.model", "Extension.HTTP.model$RCUserLanguageRecord"], function(exports, OSRuntimeCore, Extension_HTTPModel) {
    var OS = OSRuntimeCore;
    class RLUserLanguageRecordList extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return Extension_HTTPModel.RCUserLanguageRecord;
        }

    }

    Extension_HTTPModel.RLUserLanguageRecordList = RLUserLanguageRecordList;

});

define("Extension.HTTP.model", ["exports", "@outsystems/runtime-core-js"], function(exports, OSRuntimeCore) {
    var OS = OSRuntimeCore;
    var Extension_HTTPModel = exports;
});