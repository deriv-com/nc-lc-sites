define("PartnerEventManagement.model$EN_09463e6707d58df93aeeef6ddf271e0dEntityRecord", ["exports", "@outsystems/runtime-core-js", "PartnerEventManagement.model"], function(exports, OSRuntimeCore, PartnerEventManagementModel) {
    var OS = OSRuntimeCore; {
        class EN_09463e6707d58df93aeeef6ddf271e0dEntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("TimeZone", "timeZoneAttr", "TimeZone", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        PartnerEventManagementModel.EN_09463e6707d58df93aeeef6ddf271e0dEntityRecord = EN_09463e6707d58df93aeeef6ddf271e0dEntityRecordInner;

        var EN_09463e6707d58df93aeeef6ddf271e0dEntityRecord = EN_09463e6707d58df93aeeef6ddf271e0dEntityRecordInner;
        EN_09463e6707d58df93aeeef6ddf271e0dEntityRecord.init();
    }
});

define("PartnerEventManagement.model$EN_7710952ed757fea535b17cc3f62e943cEntityRecord", ["exports", "@outsystems/runtime-core-js", "PartnerEventManagement.model"], function(exports, OSRuntimeCore, PartnerEventManagementModel) {
    var OS = OSRuntimeCore; {
        class EN_7710952ed757fea535b17cc3f62e943cEntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("ImageName", "imageNameAttr", "ImageName", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("SpeakerRoleId", "speakerRoleIdAttr", "SpeakerRoleId", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        PartnerEventManagementModel.EN_7710952ed757fea535b17cc3f62e943cEntityRecord = EN_7710952ed757fea535b17cc3f62e943cEntityRecordInner;

        var EN_7710952ed757fea535b17cc3f62e943cEntityRecord = EN_7710952ed757fea535b17cc3f62e943cEntityRecordInner;
        EN_7710952ed757fea535b17cc3f62e943cEntityRecord.init();
    }
});

define("PartnerEventManagement.model$EN_1ed9d30a04c6983dfd25cb2bf738a03bEntityRecord", ["exports", "@outsystems/runtime-core-js", "PartnerEventManagement.model"], function(exports, OSRuntimeCore, PartnerEventManagementModel) {
    var OS = OSRuntimeCore; {
        class EN_1ed9d30a04c6983dfd25cb2bf738a03bEntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("Role", "roleAttr", "Role", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        PartnerEventManagementModel.EN_1ed9d30a04c6983dfd25cb2bf738a03bEntityRecord = EN_1ed9d30a04c6983dfd25cb2bf738a03bEntityRecordInner;

        var EN_1ed9d30a04c6983dfd25cb2bf738a03bEntityRecord = EN_1ed9d30a04c6983dfd25cb2bf738a03bEntityRecordInner;
        EN_1ed9d30a04c6983dfd25cb2bf738a03bEntityRecord.init();
    }
});

define("PartnerEventManagement.model$EN_5fe01be53a95c3d6f80a6694bc22455aEntityRecord", ["exports", "@outsystems/runtime-core-js", "PartnerEventManagement.model"], function(exports, OSRuntimeCore, PartnerEventManagementModel) {
    var OS = OSRuntimeCore; {
        class EN_5fe01be53a95c3d6f80a6694bc22455aEntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("EventId", "eventIdAttr", "EventId", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("EventSpeakerId", "eventSpeakerIdAttr", "EventSpeakerId", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        PartnerEventManagementModel.EN_5fe01be53a95c3d6f80a6694bc22455aEntityRecord = EN_5fe01be53a95c3d6f80a6694bc22455aEntityRecordInner;

        var EN_5fe01be53a95c3d6f80a6694bc22455aEntityRecord = EN_5fe01be53a95c3d6f80a6694bc22455aEntityRecordInner;
        EN_5fe01be53a95c3d6f80a6694bc22455aEntityRecord.init();
    }
});

define("PartnerEventManagement.model$EN_f95392f2815efea8bab83c5950c7808fEntityRecord", ["exports", "@outsystems/runtime-core-js", "PartnerEventManagement.model"], function(exports, OSRuntimeCore, PartnerEventManagementModel) {
    var OS = OSRuntimeCore; {
        class EN_f95392f2815efea8bab83c5950c7808fEntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("DesktopImage", "desktopImageAttr", "DesktopImage", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("MobileImage", "mobileImageAttr", "MobileImage", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Title", "titleAttr", "Title", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Description", "descriptionAttr", "Description", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("DateTime", "dateTimeAttr", "DateTime", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Url", "urlAttr", "Url", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Published", "publishedAttr", "Published", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("EventTypeId", "eventTypeIdAttr", "EventTypeId", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("LanguageId", "languageIdAttr", "LanguageId", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true),
                    this.attr("CountryId", "countryIdAttr", "CountryId", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        PartnerEventManagementModel.EN_f95392f2815efea8bab83c5950c7808fEntityRecord = EN_f95392f2815efea8bab83c5950c7808fEntityRecordInner;

        var EN_f95392f2815efea8bab83c5950c7808fEntityRecord = EN_f95392f2815efea8bab83c5950c7808fEntityRecordInner;
        EN_f95392f2815efea8bab83c5950c7808fEntityRecord.init();
    }
});

define("PartnerEventManagement.model$EN_8ce803cf87988828ab54aa3ac3da6f8fEntityRecord", ["exports", "@outsystems/runtime-core-js", "PartnerEventManagement.model"], function(exports, OSRuntimeCore, PartnerEventManagementModel) {
    var OS = OSRuntimeCore; {
        class EN_8ce803cf87988828ab54aa3ac3da6f8fEntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("Type", "typeAttr", "Type", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        PartnerEventManagementModel.EN_8ce803cf87988828ab54aa3ac3da6f8fEntityRecord = EN_8ce803cf87988828ab54aa3ac3da6f8fEntityRecordInner;

        var EN_8ce803cf87988828ab54aa3ac3da6f8fEntityRecord = EN_8ce803cf87988828ab54aa3ac3da6f8fEntityRecordInner;
        EN_8ce803cf87988828ab54aa3ac3da6f8fEntityRecord.init();
    }
});

define("PartnerEventManagement.model", ["exports", "@outsystems/runtime-core-js"], function(exports, OSRuntimeCore) {
    var OS = OSRuntimeCore;
    var PartnerEventManagementModel = exports;
    Object.defineProperty(PartnerEventManagementModel, "module", {
        get: function() {
            return OS.ApplicationInfo.getModules()["c6f0b4a1-1c6a-4022-8aac-de9462a5356f"];
        }
    });

    PartnerEventManagementModel.staticEntities = {};
});