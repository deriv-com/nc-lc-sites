define("CKEditor5.model$ST_5bfde3995cf2e3adc8a8271507944b75Structure", ["exports", "@outsystems/runtime-core-js", "CKEditor5.model"], function(exports, OSRuntimeCore, CKEditor5Model) {
    var OS = OSRuntimeCore; {
        class ST_5bfde3995cf2e3adc8a8271507944b75StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Items", "itemsAttr", "Items", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "heading,|,bold,italic,underline,strikethrough,subscript,superscript,|,removeFormat,|,fontFamily,fontSize,fontBackgroundColor,fontColor,|,bulletedList,numberedList,|,indent,outdent,alignment,|,code,codeBlock,specialCharacters,|,link,imageUpload,mediaEmbed,|,blockQuote,insertTable,tableProperties,tableCellProperties,horizontalLine,undo,redo";
                    }, true),
                    this.attr("ViewportTopOffset", "viewportTopOffsetAttr", "ViewportTopOffset", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true),
                    this.attr("ShouldNotGroupWhenFull", "shouldNotGroupWhenFullAttr", "ShouldNotGroupWhenFull", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return true;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        CKEditor5Model.ST_5bfde3995cf2e3adc8a8271507944b75Structure = ST_5bfde3995cf2e3adc8a8271507944b75StructureInner;

        var ST_5bfde3995cf2e3adc8a8271507944b75Structure = ST_5bfde3995cf2e3adc8a8271507944b75StructureInner;
        ST_5bfde3995cf2e3adc8a8271507944b75Structure.init();
    }
});

define("CKEditor5.model$ST_4b2bacce020294d8c8880f1d6680cd88Structure", ["exports", "@outsystems/runtime-core-js", "CKEditor5.model"], function(exports, OSRuntimeCore, CKEditor5Model) {
    var OS = OSRuntimeCore; {
        class ST_4b2bacce020294d8c8880f1d6680cd88StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Name", "nameAttr", "name", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Label", "labelAttr", "label", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Icon", "iconAttr", "icon", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Value", "valueAttr", "value", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        CKEditor5Model.ST_4b2bacce020294d8c8880f1d6680cd88Structure = ST_4b2bacce020294d8c8880f1d6680cd88StructureInner;

        var ST_4b2bacce020294d8c8880f1d6680cd88Structure = ST_4b2bacce020294d8c8880f1d6680cd88StructureInner;
        ST_4b2bacce020294d8c8880f1d6680cd88Structure.init();
    }
});

define("CKEditor5.model$RL_6a8174118c450ccaba251515e84ce6ab", ["exports", "@outsystems/runtime-core-js", "CKEditor5.model", "CKEditor5.model$ST_4b2bacce020294d8c8880f1d6680cd88Structure"], function(exports, OSRuntimeCore, CKEditor5Model) {
    var OS = OSRuntimeCore;
    class RL_6a8174118c450ccaba251515e84ce6ab extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return CKEditor5Model.ST_4b2bacce020294d8c8880f1d6680cd88Structure;
        }

    }

    CKEditor5Model.RL_6a8174118c450ccaba251515e84ce6ab = RL_6a8174118c450ccaba251515e84ce6ab;

});

define("CKEditor5.model$ST_8ea03ea3df3ad962d2d174fbfdab595aStructure", ["exports", "@outsystems/runtime-core-js", "CKEditor5.model", "CKEditor5.model$ST_4b2bacce020294d8c8880f1d6680cd88Structure", "CKEditor5.model$RL_6a8174118c450ccaba251515e84ce6ab"], function(exports, OSRuntimeCore, CKEditor5Model) {
    var OS = OSRuntimeCore; {
        class ST_8ea03ea3df3ad962d2d174fbfdab595aStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Toolbar", "toolbarAttr", "toolbar", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "\'imageStyle:alignLeft\',\'imageStyle:alignCenter\',\'imageStyle:alignRight\',\'|\',\'imageResize\',\'|\',\'imageTextAlternative\'";
                    }, true),
                    this.attr("Styles", "stylesAttr", "styles", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "\'full\',\'side\',\'alignLeft\',\'alignCenter\',\'alignRight\'";
                    }, true),
                    this.attr("ResizeOptions", "resizeOptionsAttr", "ResizeOptions", false, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new CKEditor5Model.RL_6a8174118c450ccaba251515e84ce6ab());
                    }, true, CKEditor5Model.RL_6a8174118c450ccaba251515e84ce6ab)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        CKEditor5Model.ST_8ea03ea3df3ad962d2d174fbfdab595aStructure = ST_8ea03ea3df3ad962d2d174fbfdab595aStructureInner;

        var ST_8ea03ea3df3ad962d2d174fbfdab595aStructure = ST_8ea03ea3df3ad962d2d174fbfdab595aStructureInner;
        ST_8ea03ea3df3ad962d2d174fbfdab595aStructure.init();
    }
});

define("CKEditor5.model$ST_63463f853d198ce5881204eb2c89a6abStructure", ["exports", "@outsystems/runtime-core-js", "CKEditor5.model"], function(exports, OSRuntimeCore, CKEditor5Model) {
    var OS = OSRuntimeCore; {
        class ST_63463f853d198ce5881204eb2c89a6abStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("RemoveProviders", "removeProvidersAttr", "removeProviders", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "\'instagram\',\'twitter\',\'googleMaps\',\'flickr\',\'facebook\'";
                    }, true),
                    this.attr("PreviewsInData", "previewsInDataAttr", "previewsInData", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return true;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        CKEditor5Model.ST_63463f853d198ce5881204eb2c89a6abStructure = ST_63463f853d198ce5881204eb2c89a6abStructureInner;

        var ST_63463f853d198ce5881204eb2c89a6abStructure = ST_63463f853d198ce5881204eb2c89a6abStructureInner;
        ST_63463f853d198ce5881204eb2c89a6abStructure.init();
    }
});

define("CKEditor5.model$ST_80c26522a5e6b185515ba7206e57c574Structure", ["exports", "@outsystems/runtime-core-js", "CKEditor5.model"], function(exports, OSRuntimeCore, CKEditor5Model) {
    var OS = OSRuntimeCore; {
        class ST_80c26522a5e6b185515ba7206e57c574StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("IsEnabled", "isEnabledAttr", "IsEnabled", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return true;
                    }, true),
                    this.attr("DebounceTimeout", "debounceTimeoutAttr", "DebounceTimeout", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 250;
                    }, true),
                    this.attr("SendContent", "sendContentAttr", "SendContent", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return true;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        CKEditor5Model.ST_80c26522a5e6b185515ba7206e57c574Structure = ST_80c26522a5e6b185515ba7206e57c574StructureInner;

        var ST_80c26522a5e6b185515ba7206e57c574Structure = ST_80c26522a5e6b185515ba7206e57c574StructureInner;
        ST_80c26522a5e6b185515ba7206e57c574Structure.init();
    }
});

define("CKEditor5.model$ST_a2bcc072fefcdb59f87761cc9a85c0b2Structure", ["exports", "@outsystems/runtime-core-js", "CKEditor5.model"], function(exports, OSRuntimeCore, CKEditor5Model) {
    var OS = OSRuntimeCore; {
        class ST_a2bcc072fefcdb59f87761cc9a85c0b2StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("IsEnabled", "isEnabledAttr", "IsEnabled", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return true;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new ST_a2bcc072fefcdb59f87761cc9a85c0b2Structure(new ST_a2bcc072fefcdb59f87761cc9a85c0b2Structure.RecordClass({
                    isEnabledAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        CKEditor5Model.ST_a2bcc072fefcdb59f87761cc9a85c0b2Structure = ST_a2bcc072fefcdb59f87761cc9a85c0b2StructureInner;

        var ST_a2bcc072fefcdb59f87761cc9a85c0b2Structure = ST_a2bcc072fefcdb59f87761cc9a85c0b2StructureInner;
        ST_a2bcc072fefcdb59f87761cc9a85c0b2Structure.init();
    }
});

define("CKEditor5.model$ST_ad9b7619e5e1acd5ad5b6c201e3216f2Structure", ["exports", "@outsystems/runtime-core-js", "CKEditor5.model", "CKEditor5.model$ST_80c26522a5e6b185515ba7206e57c574Structure", "CKEditor5.model$ST_a2bcc072fefcdb59f87761cc9a85c0b2Structure"], function(exports, OSRuntimeCore, CKEditor5Model) {
    var OS = OSRuntimeCore; {
        class ST_ad9b7619e5e1acd5ad5b6c201e3216f2StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("OnContentChanged", "onContentChangedAttr", "OnContentChanged", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new CKEditor5Model.ST_80c26522a5e6b185515ba7206e57c574Structure());
                    }, true, CKEditor5Model.ST_80c26522a5e6b185515ba7206e57c574Structure),
                    this.attr("WordCountOnUpdate", "wordCountOnUpdateAttr", "WordCountOnUpdate", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new CKEditor5Model.ST_a2bcc072fefcdb59f87761cc9a85c0b2Structure());
                    }, true, CKEditor5Model.ST_a2bcc072fefcdb59f87761cc9a85c0b2Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        CKEditor5Model.ST_ad9b7619e5e1acd5ad5b6c201e3216f2Structure = ST_ad9b7619e5e1acd5ad5b6c201e3216f2StructureInner;

        var ST_ad9b7619e5e1acd5ad5b6c201e3216f2Structure = ST_ad9b7619e5e1acd5ad5b6c201e3216f2StructureInner;
        ST_ad9b7619e5e1acd5ad5b6c201e3216f2Structure.init();
    }
});

define("CKEditor5.model$ST_f71bbe9099673506a6fbf96e145c451cStructure", ["exports", "@outsystems/runtime-core-js", "CKEditor5.model", "CKEditor5.model$ST_5bfde3995cf2e3adc8a8271507944b75Structure", "CKEditor5.model$ST_8ea03ea3df3ad962d2d174fbfdab595aStructure", "CKEditor5.model$ST_63463f853d198ce5881204eb2c89a6abStructure", "CKEditor5.model$ST_ad9b7619e5e1acd5ad5b6c201e3216f2Structure"], function(exports, OSRuntimeCore, CKEditor5Model) {
    var OS = OSRuntimeCore; {
        class ST_f71bbe9099673506a6fbf96e145c451cStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("MinHeight", "minHeightAttr", "MinHeight", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "300px";
                    }, true),
                    this.attr("MaxHeight", "maxHeightAttr", "MaxHeight", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "300px";
                    }, true),
                    this.attr("Toolbar", "toolbarAttr", "Toolbar", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new CKEditor5Model.ST_5bfde3995cf2e3adc8a8271507944b75Structure());
                    }, true, CKEditor5Model.ST_5bfde3995cf2e3adc8a8271507944b75Structure),
                    this.attr("Image", "imageAttr", "Image", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new CKEditor5Model.ST_8ea03ea3df3ad962d2d174fbfdab595aStructure());
                    }, true, CKEditor5Model.ST_8ea03ea3df3ad962d2d174fbfdab595aStructure),
                    this.attr("MediaEmbed", "mediaEmbedAttr", "MediaEmbed", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new CKEditor5Model.ST_63463f853d198ce5881204eb2c89a6abStructure());
                    }, true, CKEditor5Model.ST_63463f853d198ce5881204eb2c89a6abStructure),
                    this.attr("OpenLinksInNewTab", "openLinksInNewTabAttr", "OpenLinksInNewTab", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return true;
                    }, true),
                    this.attr("Events", "eventsAttr", "Events", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new CKEditor5Model.ST_ad9b7619e5e1acd5ad5b6c201e3216f2Structure());
                    }, true, CKEditor5Model.ST_ad9b7619e5e1acd5ad5b6c201e3216f2Structure),
                    this.attr("LicenseKey", "licenseKeyAttr", "LicenseKey", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        CKEditor5Model.ST_f71bbe9099673506a6fbf96e145c451cStructure = ST_f71bbe9099673506a6fbf96e145c451cStructureInner;

        var ST_f71bbe9099673506a6fbf96e145c451cStructure = ST_f71bbe9099673506a6fbf96e145c451cStructureInner;
        ST_f71bbe9099673506a6fbf96e145c451cStructure.init();
    }
});

define("CKEditor5.model$RC_79433899b212fccaa361acac6415d487", ["exports", "@outsystems/runtime-core-js", "CKEditor5.model", "CKEditor5.model$ST_f71bbe9099673506a6fbf96e145c451cStructure"], function(exports, OSRuntimeCore, CKEditor5Model) {
    var OS = OSRuntimeCore; {
        class RC_79433899b212fccaa361acac6415d487Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Configuration", "configurationAttr", "Configuration", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new CKEditor5Model.ST_f71bbe9099673506a6fbf96e145c451cStructure());
                    }, true, CKEditor5Model.ST_f71bbe9099673506a6fbf96e145c451cStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_79433899b212fccaa361acac6415d487(new RC_79433899b212fccaa361acac6415d487.RecordClass({
                    configurationAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        CKEditor5Model.RC_79433899b212fccaa361acac6415d487 = RC_79433899b212fccaa361acac6415d487Inner;

        RC_79433899b212fccaa361acac6415d487Inner._isAnonymousRecord = true;
        RC_79433899b212fccaa361acac6415d487Inner.UniqueId = "79433899-b212-fcca-a361-acac6415d487";
        var RC_79433899b212fccaa361acac6415d487 = RC_79433899b212fccaa361acac6415d487Inner;
        RC_79433899b212fccaa361acac6415d487.init();
    }
});

define("CKEditor5.model$RL_030705d4d0ff9fad34ae494d24379c3c", ["exports", "@outsystems/runtime-core-js", "CKEditor5.model", "CKEditor5.model$RC_79433899b212fccaa361acac6415d487"], function(exports, OSRuntimeCore, CKEditor5Model) {
    var OS = OSRuntimeCore;
    class RL_030705d4d0ff9fad34ae494d24379c3c extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return CKEditor5Model.RC_79433899b212fccaa361acac6415d487;
        }

    }

    CKEditor5Model.RL_030705d4d0ff9fad34ae494d24379c3c = RL_030705d4d0ff9fad34ae494d24379c3c;

});

define("CKEditor5.model$RL_0dc856b30518af991d9428be125114ec", ["exports", "@outsystems/runtime-core-js", "CKEditor5.model", "CKEditor5.model$ST_ad9b7619e5e1acd5ad5b6c201e3216f2Structure"], function(exports, OSRuntimeCore, CKEditor5Model) {
    var OS = OSRuntimeCore;
    class RL_0dc856b30518af991d9428be125114ec extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return CKEditor5Model.ST_ad9b7619e5e1acd5ad5b6c201e3216f2Structure;
        }

    }

    CKEditor5Model.RL_0dc856b30518af991d9428be125114ec = RL_0dc856b30518af991d9428be125114ec;

});

define("CKEditor5.model$RL_4d8a97df13a7539a1a0177dbcd05fbb2", ["exports", "@outsystems/runtime-core-js", "CKEditor5.model"], function(exports, OSRuntimeCore, CKEditor5Model) {
    var OS = OSRuntimeCore;
    class TextList extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OS.DataTypes.DataTypes.Text;
        }

    }

    CKEditor5Model.TextList = TextList;

});

define("CKEditor5.model$ST_3e32785ee0bb0e04b1e3245437f73bc1Structure", ["exports", "@outsystems/runtime-core-js", "CKEditor5.model"], function(exports, OSRuntimeCore, CKEditor5Model) {
    var OS = OSRuntimeCore; {
        class ST_3e32785ee0bb0e04b1e3245437f73bc1StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Language", "languageAttr", "language", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Toolbar", "toolbarAttr", "toolbar", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Plugins", "pluginsAttr", "plugins", false, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
                    }, true, OS.DataTypes.TextList)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        CKEditor5Model.ST_3e32785ee0bb0e04b1e3245437f73bc1Structure = ST_3e32785ee0bb0e04b1e3245437f73bc1StructureInner;

        var ST_3e32785ee0bb0e04b1e3245437f73bc1Structure = ST_3e32785ee0bb0e04b1e3245437f73bc1StructureInner;
        ST_3e32785ee0bb0e04b1e3245437f73bc1Structure.init();
    }
});

define("CKEditor5.model$RC_95b02708c37ca756b699fa189dabc262", ["exports", "@outsystems/runtime-core-js", "CKEditor5.model", "CKEditor5.model$ST_3e32785ee0bb0e04b1e3245437f73bc1Structure"], function(exports, OSRuntimeCore, CKEditor5Model) {
    var OS = OSRuntimeCore; {
        class RC_95b02708c37ca756b699fa189dabc262Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("EditorConfiguration", "editorConfigurationAttr", "EditorConfiguration", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new CKEditor5Model.ST_3e32785ee0bb0e04b1e3245437f73bc1Structure());
                    }, true, CKEditor5Model.ST_3e32785ee0bb0e04b1e3245437f73bc1Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_95b02708c37ca756b699fa189dabc262(new RC_95b02708c37ca756b699fa189dabc262.RecordClass({
                    editorConfigurationAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        CKEditor5Model.RC_95b02708c37ca756b699fa189dabc262 = RC_95b02708c37ca756b699fa189dabc262Inner;

        RC_95b02708c37ca756b699fa189dabc262Inner._isAnonymousRecord = true;
        RC_95b02708c37ca756b699fa189dabc262Inner.UniqueId = "95b02708-c37c-a756-b699-fa189dabc262";
        var RC_95b02708c37ca756b699fa189dabc262 = RC_95b02708c37ca756b699fa189dabc262Inner;
        RC_95b02708c37ca756b699fa189dabc262.init();
    }
});

define("CKEditor5.model$RL_1b4cfdb6d099b5a83c4b95f14add3deb", ["exports", "@outsystems/runtime-core-js", "CKEditor5.model", "CKEditor5.model$RC_95b02708c37ca756b699fa189dabc262"], function(exports, OSRuntimeCore, CKEditor5Model) {
    var OS = OSRuntimeCore;
    class RL_1b4cfdb6d099b5a83c4b95f14add3deb extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return CKEditor5Model.RC_95b02708c37ca756b699fa189dabc262;
        }

    }

    CKEditor5Model.RL_1b4cfdb6d099b5a83c4b95f14add3deb = RL_1b4cfdb6d099b5a83c4b95f14add3deb;

});

define("CKEditor5.model$RL_1de83e3f1bfde5126ce186a1f38590ff", ["exports", "@outsystems/runtime-core-js", "CKEditor5.model", "CKEditor5.model$ST_80c26522a5e6b185515ba7206e57c574Structure"], function(exports, OSRuntimeCore, CKEditor5Model) {
    var OS = OSRuntimeCore;
    class RL_1de83e3f1bfde5126ce186a1f38590ff extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return CKEditor5Model.ST_80c26522a5e6b185515ba7206e57c574Structure;
        }

    }

    CKEditor5Model.RL_1de83e3f1bfde5126ce186a1f38590ff = RL_1de83e3f1bfde5126ce186a1f38590ff;

});

define("CKEditor5.model$RC_d4517e8130429a73dee74c98ee12f2d9", ["exports", "@outsystems/runtime-core-js", "CKEditor5.model", "CKEditor5.model$ST_8ea03ea3df3ad962d2d174fbfdab595aStructure"], function(exports, OSRuntimeCore, CKEditor5Model) {
    var OS = OSRuntimeCore; {
        class RC_d4517e8130429a73dee74c98ee12f2d9Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Image", "imageAttr", "Image", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new CKEditor5Model.ST_8ea03ea3df3ad962d2d174fbfdab595aStructure());
                    }, true, CKEditor5Model.ST_8ea03ea3df3ad962d2d174fbfdab595aStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_d4517e8130429a73dee74c98ee12f2d9(new RC_d4517e8130429a73dee74c98ee12f2d9.RecordClass({
                    imageAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        CKEditor5Model.RC_d4517e8130429a73dee74c98ee12f2d9 = RC_d4517e8130429a73dee74c98ee12f2d9Inner;

        RC_d4517e8130429a73dee74c98ee12f2d9Inner._isAnonymousRecord = true;
        RC_d4517e8130429a73dee74c98ee12f2d9Inner.UniqueId = "d4517e81-3042-9a73-dee7-4c98ee12f2d9";
        var RC_d4517e8130429a73dee74c98ee12f2d9 = RC_d4517e8130429a73dee74c98ee12f2d9Inner;
        RC_d4517e8130429a73dee74c98ee12f2d9.init();
    }
});

define("CKEditor5.model$RL_35be57d3dcb427cc87c59241045a8bf5", ["exports", "@outsystems/runtime-core-js", "CKEditor5.model", "CKEditor5.model$RC_d4517e8130429a73dee74c98ee12f2d9"], function(exports, OSRuntimeCore, CKEditor5Model) {
    var OS = OSRuntimeCore;
    class RL_35be57d3dcb427cc87c59241045a8bf5 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return CKEditor5Model.RC_d4517e8130429a73dee74c98ee12f2d9;
        }

    }

    CKEditor5Model.RL_35be57d3dcb427cc87c59241045a8bf5 = RL_35be57d3dcb427cc87c59241045a8bf5;

});

define("CKEditor5.model$RC_b6a6f9bec2bfcd978ee19538d80c50bf", ["exports", "@outsystems/runtime-core-js", "CKEditor5.model", "CKEditor5.model$ST_a2bcc072fefcdb59f87761cc9a85c0b2Structure"], function(exports, OSRuntimeCore, CKEditor5Model) {
    var OS = OSRuntimeCore; {
        class RC_b6a6f9bec2bfcd978ee19538d80c50bfInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("EventConfigurationWordCount", "eventConfigurationWordCountAttr", "EventConfigurationWordCount", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new CKEditor5Model.ST_a2bcc072fefcdb59f87761cc9a85c0b2Structure());
                    }, true, CKEditor5Model.ST_a2bcc072fefcdb59f87761cc9a85c0b2Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_b6a6f9bec2bfcd978ee19538d80c50bf(new RC_b6a6f9bec2bfcd978ee19538d80c50bf.RecordClass({
                    eventConfigurationWordCountAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        CKEditor5Model.RC_b6a6f9bec2bfcd978ee19538d80c50bf = RC_b6a6f9bec2bfcd978ee19538d80c50bfInner;

        RC_b6a6f9bec2bfcd978ee19538d80c50bfInner._isAnonymousRecord = true;
        RC_b6a6f9bec2bfcd978ee19538d80c50bfInner.UniqueId = "b6a6f9be-c2bf-cd97-8ee1-9538d80c50bf";
        var RC_b6a6f9bec2bfcd978ee19538d80c50bf = RC_b6a6f9bec2bfcd978ee19538d80c50bfInner;
        RC_b6a6f9bec2bfcd978ee19538d80c50bf.init();
    }
});

define("CKEditor5.model$RL_3c4fb177ca89c3e49e83cea4f499abfc", ["exports", "@outsystems/runtime-core-js", "CKEditor5.model", "CKEditor5.model$RC_b6a6f9bec2bfcd978ee19538d80c50bf"], function(exports, OSRuntimeCore, CKEditor5Model) {
    var OS = OSRuntimeCore;
    class RL_3c4fb177ca89c3e49e83cea4f499abfc extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return CKEditor5Model.RC_b6a6f9bec2bfcd978ee19538d80c50bf;
        }

    }

    CKEditor5Model.RL_3c4fb177ca89c3e49e83cea4f499abfc = RL_3c4fb177ca89c3e49e83cea4f499abfc;

});

define("CKEditor5.model$RL_406532c441f596f200e9525cd5738e58", ["exports", "@outsystems/runtime-core-js", "CKEditor5.model", "CKEditor5.model$ST_a2bcc072fefcdb59f87761cc9a85c0b2Structure"], function(exports, OSRuntimeCore, CKEditor5Model) {
    var OS = OSRuntimeCore;
    class RL_406532c441f596f200e9525cd5738e58 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return CKEditor5Model.ST_a2bcc072fefcdb59f87761cc9a85c0b2Structure;
        }

    }

    CKEditor5Model.RL_406532c441f596f200e9525cd5738e58 = RL_406532c441f596f200e9525cd5738e58;

});

define("CKEditor5.model$RL_49266b3969a9c1e099987a324fdfe4a7", ["exports", "@outsystems/runtime-core-js", "CKEditor5.model", "CKEditor5.model$ST_63463f853d198ce5881204eb2c89a6abStructure"], function(exports, OSRuntimeCore, CKEditor5Model) {
    var OS = OSRuntimeCore;
    class RL_49266b3969a9c1e099987a324fdfe4a7 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return CKEditor5Model.ST_63463f853d198ce5881204eb2c89a6abStructure;
        }

    }

    CKEditor5Model.RL_49266b3969a9c1e099987a324fdfe4a7 = RL_49266b3969a9c1e099987a324fdfe4a7;

});

define("CKEditor5.model$RC_5339ab4016e3f1eb5b07f0afda1da2ff", ["exports", "@outsystems/runtime-core-js", "CKEditor5.model", "CKEditor5.model$ST_63463f853d198ce5881204eb2c89a6abStructure"], function(exports, OSRuntimeCore, CKEditor5Model) {
    var OS = OSRuntimeCore; {
        class RC_5339ab4016e3f1eb5b07f0afda1da2ffInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("MediaEmbed", "mediaEmbedAttr", "MediaEmbed", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new CKEditor5Model.ST_63463f853d198ce5881204eb2c89a6abStructure());
                    }, true, CKEditor5Model.ST_63463f853d198ce5881204eb2c89a6abStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_5339ab4016e3f1eb5b07f0afda1da2ff(new RC_5339ab4016e3f1eb5b07f0afda1da2ff.RecordClass({
                    mediaEmbedAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        CKEditor5Model.RC_5339ab4016e3f1eb5b07f0afda1da2ff = RC_5339ab4016e3f1eb5b07f0afda1da2ffInner;

        RC_5339ab4016e3f1eb5b07f0afda1da2ffInner._isAnonymousRecord = true;
        RC_5339ab4016e3f1eb5b07f0afda1da2ffInner.UniqueId = "5339ab40-16e3-f1eb-5b07-f0afda1da2ff";
        var RC_5339ab4016e3f1eb5b07f0afda1da2ff = RC_5339ab4016e3f1eb5b07f0afda1da2ffInner;
        RC_5339ab4016e3f1eb5b07f0afda1da2ff.init();
    }
});

define("CKEditor5.model$RL_53ae4249dda83cd1ea78072d480c196c", ["exports", "@outsystems/runtime-core-js", "CKEditor5.model", "CKEditor5.model$ST_8ea03ea3df3ad962d2d174fbfdab595aStructure"], function(exports, OSRuntimeCore, CKEditor5Model) {
    var OS = OSRuntimeCore;
    class RL_53ae4249dda83cd1ea78072d480c196c extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return CKEditor5Model.ST_8ea03ea3df3ad962d2d174fbfdab595aStructure;
        }

    }

    CKEditor5Model.RL_53ae4249dda83cd1ea78072d480c196c = RL_53ae4249dda83cd1ea78072d480c196c;

});

define("CKEditor5.model$RC_6156215385b3ed8dd1c809d98991666f", ["exports", "@outsystems/runtime-core-js", "CKEditor5.model", "CKEditor5.model$ST_5bfde3995cf2e3adc8a8271507944b75Structure"], function(exports, OSRuntimeCore, CKEditor5Model) {
    var OS = OSRuntimeCore; {
        class RC_6156215385b3ed8dd1c809d98991666fInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Toolbar", "toolbarAttr", "Toolbar", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new CKEditor5Model.ST_5bfde3995cf2e3adc8a8271507944b75Structure());
                    }, true, CKEditor5Model.ST_5bfde3995cf2e3adc8a8271507944b75Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_6156215385b3ed8dd1c809d98991666f(new RC_6156215385b3ed8dd1c809d98991666f.RecordClass({
                    toolbarAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        CKEditor5Model.RC_6156215385b3ed8dd1c809d98991666f = RC_6156215385b3ed8dd1c809d98991666fInner;

        RC_6156215385b3ed8dd1c809d98991666fInner._isAnonymousRecord = true;
        RC_6156215385b3ed8dd1c809d98991666fInner.UniqueId = "61562153-85b3-ed8d-d1c8-09d98991666f";
        var RC_6156215385b3ed8dd1c809d98991666f = RC_6156215385b3ed8dd1c809d98991666fInner;
        RC_6156215385b3ed8dd1c809d98991666f.init();
    }
});

define("CKEditor5.model$RC_70ccc08f93a318f9b43968abe310a6c2", ["exports", "@outsystems/runtime-core-js", "CKEditor5.model", "CKEditor5.model$ST_4b2bacce020294d8c8880f1d6680cd88Structure"], function(exports, OSRuntimeCore, CKEditor5Model) {
    var OS = OSRuntimeCore; {
        class RC_70ccc08f93a318f9b43968abe310a6c2Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("ResizeOption", "resizeOptionAttr", "ResizeOption", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new CKEditor5Model.ST_4b2bacce020294d8c8880f1d6680cd88Structure());
                    }, true, CKEditor5Model.ST_4b2bacce020294d8c8880f1d6680cd88Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_70ccc08f93a318f9b43968abe310a6c2(new RC_70ccc08f93a318f9b43968abe310a6c2.RecordClass({
                    resizeOptionAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        CKEditor5Model.RC_70ccc08f93a318f9b43968abe310a6c2 = RC_70ccc08f93a318f9b43968abe310a6c2Inner;

        RC_70ccc08f93a318f9b43968abe310a6c2Inner._isAnonymousRecord = true;
        RC_70ccc08f93a318f9b43968abe310a6c2Inner.UniqueId = "70ccc08f-93a3-18f9-b439-68abe310a6c2";
        var RC_70ccc08f93a318f9b43968abe310a6c2 = RC_70ccc08f93a318f9b43968abe310a6c2Inner;
        RC_70ccc08f93a318f9b43968abe310a6c2.init();
    }
});

define("CKEditor5.model$RL_727f8fb3beca198f3337487ee1c702ed", ["exports", "@outsystems/runtime-core-js", "CKEditor5.model", "CKEditor5.model$RC_5339ab4016e3f1eb5b07f0afda1da2ff"], function(exports, OSRuntimeCore, CKEditor5Model) {
    var OS = OSRuntimeCore;
    class RL_727f8fb3beca198f3337487ee1c702ed extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return CKEditor5Model.RC_5339ab4016e3f1eb5b07f0afda1da2ff;
        }

    }

    CKEditor5Model.RL_727f8fb3beca198f3337487ee1c702ed = RL_727f8fb3beca198f3337487ee1c702ed;

});

define("CKEditor5.model$RL_7b278d7295243e82652634e6d9e3ed7f", ["exports", "@outsystems/runtime-core-js", "CKEditor5.model", "CKEditor5.model$ST_3e32785ee0bb0e04b1e3245437f73bc1Structure"], function(exports, OSRuntimeCore, CKEditor5Model) {
    var OS = OSRuntimeCore;
    class RL_7b278d7295243e82652634e6d9e3ed7f extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return CKEditor5Model.ST_3e32785ee0bb0e04b1e3245437f73bc1Structure;
        }

    }

    CKEditor5Model.RL_7b278d7295243e82652634e6d9e3ed7f = RL_7b278d7295243e82652634e6d9e3ed7f;

});

define("CKEditor5.model$RL_9fa8485349a63184fd37718ce88533ed", ["exports", "@outsystems/runtime-core-js", "CKEditor5.model", "CKEditor5.model$ST_f71bbe9099673506a6fbf96e145c451cStructure"], function(exports, OSRuntimeCore, CKEditor5Model) {
    var OS = OSRuntimeCore;
    class RL_9fa8485349a63184fd37718ce88533ed extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return CKEditor5Model.ST_f71bbe9099673506a6fbf96e145c451cStructure;
        }

    }

    CKEditor5Model.RL_9fa8485349a63184fd37718ce88533ed = RL_9fa8485349a63184fd37718ce88533ed;

});

define("CKEditor5.model$RL_a6e8666d7dfe0062e07c65b9f4bbe791", ["exports", "@outsystems/runtime-core-js", "CKEditor5.model", "CKEditor5.model$ST_5bfde3995cf2e3adc8a8271507944b75Structure"], function(exports, OSRuntimeCore, CKEditor5Model) {
    var OS = OSRuntimeCore;
    class RL_a6e8666d7dfe0062e07c65b9f4bbe791 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return CKEditor5Model.ST_5bfde3995cf2e3adc8a8271507944b75Structure;
        }

    }

    CKEditor5Model.RL_a6e8666d7dfe0062e07c65b9f4bbe791 = RL_a6e8666d7dfe0062e07c65b9f4bbe791;

});

define("CKEditor5.model$RC_b0a57b01a74be3b92b231d73bb336948", ["exports", "@outsystems/runtime-core-js", "CKEditor5.model", "CKEditor5.model$ST_80c26522a5e6b185515ba7206e57c574Structure"], function(exports, OSRuntimeCore, CKEditor5Model) {
    var OS = OSRuntimeCore; {
        class RC_b0a57b01a74be3b92b231d73bb336948Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("EventConfigurationOnContentChanged", "eventConfigurationOnContentChangedAttr", "EventConfigurationOnContentChanged", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new CKEditor5Model.ST_80c26522a5e6b185515ba7206e57c574Structure());
                    }, true, CKEditor5Model.ST_80c26522a5e6b185515ba7206e57c574Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_b0a57b01a74be3b92b231d73bb336948(new RC_b0a57b01a74be3b92b231d73bb336948.RecordClass({
                    eventConfigurationOnContentChangedAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        CKEditor5Model.RC_b0a57b01a74be3b92b231d73bb336948 = RC_b0a57b01a74be3b92b231d73bb336948Inner;

        RC_b0a57b01a74be3b92b231d73bb336948Inner._isAnonymousRecord = true;
        RC_b0a57b01a74be3b92b231d73bb336948Inner.UniqueId = "b0a57b01-a74b-e3b9-2b23-1d73bb336948";
        var RC_b0a57b01a74be3b92b231d73bb336948 = RC_b0a57b01a74be3b92b231d73bb336948Inner;
        RC_b0a57b01a74be3b92b231d73bb336948.init();
    }
});

define("CKEditor5.model$RC_cf552ddd740409abc329876fe6c1e17a", ["exports", "@outsystems/runtime-core-js", "CKEditor5.model", "CKEditor5.model$ST_ad9b7619e5e1acd5ad5b6c201e3216f2Structure"], function(exports, OSRuntimeCore, CKEditor5Model) {
    var OS = OSRuntimeCore; {
        class RC_cf552ddd740409abc329876fe6c1e17aInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Events", "eventsAttr", "Events", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new CKEditor5Model.ST_ad9b7619e5e1acd5ad5b6c201e3216f2Structure());
                    }, true, CKEditor5Model.ST_ad9b7619e5e1acd5ad5b6c201e3216f2Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_cf552ddd740409abc329876fe6c1e17a(new RC_cf552ddd740409abc329876fe6c1e17a.RecordClass({
                    eventsAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        CKEditor5Model.RC_cf552ddd740409abc329876fe6c1e17a = RC_cf552ddd740409abc329876fe6c1e17aInner;

        RC_cf552ddd740409abc329876fe6c1e17aInner._isAnonymousRecord = true;
        RC_cf552ddd740409abc329876fe6c1e17aInner.UniqueId = "cf552ddd-7404-09ab-c329-876fe6c1e17a";
        var RC_cf552ddd740409abc329876fe6c1e17a = RC_cf552ddd740409abc329876fe6c1e17aInner;
        RC_cf552ddd740409abc329876fe6c1e17a.init();
    }
});

define("CKEditor5.model$RL_bc276dbe22fcd4229f1b807f7ff01aa2", ["exports", "@outsystems/runtime-core-js", "CKEditor5.model", "CKEditor5.model$RC_cf552ddd740409abc329876fe6c1e17a"], function(exports, OSRuntimeCore, CKEditor5Model) {
    var OS = OSRuntimeCore;
    class RL_bc276dbe22fcd4229f1b807f7ff01aa2 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return CKEditor5Model.RC_cf552ddd740409abc329876fe6c1e17a;
        }

    }

    CKEditor5Model.RL_bc276dbe22fcd4229f1b807f7ff01aa2 = RL_bc276dbe22fcd4229f1b807f7ff01aa2;

});

define("CKEditor5.model$RL_bfcfb6f9bb216587409ed69c5ca21923", ["exports", "@outsystems/runtime-core-js", "CKEditor5.model", "CKEditor5.model$RC_b0a57b01a74be3b92b231d73bb336948"], function(exports, OSRuntimeCore, CKEditor5Model) {
    var OS = OSRuntimeCore;
    class RL_bfcfb6f9bb216587409ed69c5ca21923 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return CKEditor5Model.RC_b0a57b01a74be3b92b231d73bb336948;
        }

    }

    CKEditor5Model.RL_bfcfb6f9bb216587409ed69c5ca21923 = RL_bfcfb6f9bb216587409ed69c5ca21923;

});

define("CKEditor5.model$RL_ce6456bef7d74be7b3256d6276518b80", ["exports", "@outsystems/runtime-core-js", "CKEditor5.model", "CKEditor5.model$RC_70ccc08f93a318f9b43968abe310a6c2"], function(exports, OSRuntimeCore, CKEditor5Model) {
    var OS = OSRuntimeCore;
    class RL_ce6456bef7d74be7b3256d6276518b80 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return CKEditor5Model.RC_70ccc08f93a318f9b43968abe310a6c2;
        }

    }

    CKEditor5Model.RL_ce6456bef7d74be7b3256d6276518b80 = RL_ce6456bef7d74be7b3256d6276518b80;

});

define("CKEditor5.model$RL_f61bef79250d4104279e444b11fd756e", ["exports", "@outsystems/runtime-core-js", "CKEditor5.model", "CKEditor5.model$RC_6156215385b3ed8dd1c809d98991666f"], function(exports, OSRuntimeCore, CKEditor5Model) {
    var OS = OSRuntimeCore;
    class RL_f61bef79250d4104279e444b11fd756e extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return CKEditor5Model.RC_6156215385b3ed8dd1c809d98991666f;
        }

    }

    CKEditor5Model.RL_f61bef79250d4104279e444b11fd756e = RL_f61bef79250d4104279e444b11fd756e;

});

define("CKEditor5.model", ["exports", "@outsystems/runtime-core-js"], function(exports, OSRuntimeCore) {
    var OS = OSRuntimeCore;
    var CKEditor5Model = exports;
    Object.defineProperty(CKEditor5Model, "module", {
        get: function() {
            return OS.ApplicationInfo.getModules()["7420e1a7-3bd0-4404-a272-0fa858992a2b"];
        }
    });

    CKEditor5Model.staticEntities = {};
});