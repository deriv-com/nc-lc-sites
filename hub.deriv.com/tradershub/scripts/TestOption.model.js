define("TestOption.model$RC_012b2720fb0dcd442416908af4498cef", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "TestOption.model", "RESTAPIWebsocketOfficial.model$ST_333caa433a680d581b2dfdf80dcbab60Structure", "TestOption.referencesHealth", "TestOption.referencesHealth$RESTAPIWebsocketOfficial"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, TestOptionModel) {
    var OS = OSRuntimeCore; {
        class RC_012b2720fb0dcd442416908af4498cefInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Postcode", "postcodeAttr", "Postcode", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_333caa433a680d581b2dfdf80dcbab60Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_333caa433a680d581b2dfdf80dcbab60Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_012b2720fb0dcd442416908af4498cef(new RC_012b2720fb0dcd442416908af4498cef.RecordClass({
                    postcodeAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        TestOptionModel.RC_012b2720fb0dcd442416908af4498cef = RC_012b2720fb0dcd442416908af4498cefInner;

        RC_012b2720fb0dcd442416908af4498cefInner._isAnonymousRecord = true;
        RC_012b2720fb0dcd442416908af4498cefInner.UniqueId = "012b2720-fb0d-cd44-2416-908af4498cef";
        var RC_012b2720fb0dcd442416908af4498cef = RC_012b2720fb0dcd442416908af4498cefInner;
        RC_012b2720fb0dcd442416908af4498cef.init();
    }
});

define("TestOption.model$RC_9589ecc0629788c2aca6b47bcbae782c", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "TestOption.model", "OutSystemsUI.model$EN_bc915b2fa9297a72fb4d1b227ebe2573EntityRecord", "TestOption.referencesHealth", "TestOption.referencesHealth$OutSystemsUI"], function(exports, OSRuntimeCore, OutSystemsUIModel, TestOptionModel) {
    var OS = OSRuntimeCore; {
        class RC_9589ecc0629788c2aca6b47bcbae782cInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Space", "spaceAttr", "Space", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_bc915b2fa9297a72fb4d1b227ebe2573EntityRecord());
                    }, true, OutSystemsUIModel.EN_bc915b2fa9297a72fb4d1b227ebe2573EntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_9589ecc0629788c2aca6b47bcbae782c(new RC_9589ecc0629788c2aca6b47bcbae782c.RecordClass({
                    spaceAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        TestOptionModel.RC_9589ecc0629788c2aca6b47bcbae782c = RC_9589ecc0629788c2aca6b47bcbae782cInner;

        RC_9589ecc0629788c2aca6b47bcbae782cInner._isAnonymousRecord = true;
        RC_9589ecc0629788c2aca6b47bcbae782cInner.UniqueId = "9589ecc0-6297-88c2-aca6-b47bcbae782c";
        var RC_9589ecc0629788c2aca6b47bcbae782c = RC_9589ecc0629788c2aca6b47bcbae782cInner;
        RC_9589ecc0629788c2aca6b47bcbae782c.init();
    }
});

define("TestOption.model$RL_021cf4e3f37562560ed722ed4a5446c1", ["exports", "@outsystems/runtime-core-js", "TestOption.model", "TestOption.model$RC_9589ecc0629788c2aca6b47bcbae782c"], function(exports, OSRuntimeCore, TestOptionModel) {
    var OS = OSRuntimeCore;
    class RL_021cf4e3f37562560ed722ed4a5446c1 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return TestOptionModel.RC_9589ecc0629788c2aca6b47bcbae782c;
        }

    }

    TestOptionModel.RL_021cf4e3f37562560ed722ed4a5446c1 = RL_021cf4e3f37562560ed722ed4a5446c1;

});

define("TestOption.model$BasicTypeList<Text>", ["exports", "@outsystems/runtime-core-js", "TestOption.model"], function(exports, OSRuntimeCore, TestOptionModel) {
    var OS = OSRuntimeCore;
    class TextList extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OS.DataTypes.DataTypes.Text;
        }

    }

    TestOptionModel.TextList = TextList;

});

define("TestOption.model$RL_071a5687136a6dbeecb0a0d193c188a2", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "TestOption.model", "RESTAPIWebsocketOfficial.model$ST_bf5d4ab423fae3ff38a977653adc8398Structure", "TestOption.referencesHealth", "TestOption.referencesHealth$RESTAPIWebsocketOfficial"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, TestOptionModel) {
    var OS = OSRuntimeCore;
    class RL_071a5687136a6dbeecb0a0d193c188a2 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_bf5d4ab423fae3ff38a977653adc8398Structure;
        }

    }

    TestOptionModel.RL_071a5687136a6dbeecb0a0d193c188a2 = RL_071a5687136a6dbeecb0a0d193c188a2;

});

define("TestOption.model$RC_0a5ac3085c044e0c9df151a275033fc0", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "TestOption.model", "RESTAPIWebsocketOfficial.model$ST_63a473e932ef99f5271718b62399e682Structure", "TestOption.referencesHealth", "TestOption.referencesHealth$RESTAPIWebsocketOfficial"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, TestOptionModel) {
    var OS = OSRuntimeCore; {
        class RC_0a5ac3085c044e0c9df151a275033fc0Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("GetResidenceListResponse", "getResidenceListResponseAttr", "GetResidenceListResponse", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_63a473e932ef99f5271718b62399e682Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_63a473e932ef99f5271718b62399e682Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_0a5ac3085c044e0c9df151a275033fc0(new RC_0a5ac3085c044e0c9df151a275033fc0.RecordClass({
                    getResidenceListResponseAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        TestOptionModel.RC_0a5ac3085c044e0c9df151a275033fc0 = RC_0a5ac3085c044e0c9df151a275033fc0Inner;

        RC_0a5ac3085c044e0c9df151a275033fc0Inner._isAnonymousRecord = true;
        RC_0a5ac3085c044e0c9df151a275033fc0Inner.UniqueId = "0a5ac308-5c04-4e0c-9df1-51a275033fc0";
        var RC_0a5ac3085c044e0c9df151a275033fc0 = RC_0a5ac3085c044e0c9df151a275033fc0Inner;
        RC_0a5ac3085c044e0c9df151a275033fc0.init();
    }
});

define("TestOption.model$RL_06044e18a6adcb4a057162249eab9621", ["exports", "@outsystems/runtime-core-js", "TestOption.model", "TestOption.model$RC_0a5ac3085c044e0c9df151a275033fc0"], function(exports, OSRuntimeCore, TestOptionModel) {
    var OS = OSRuntimeCore;
    class RL_06044e18a6adcb4a057162249eab9621 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return TestOptionModel.RC_0a5ac3085c044e0c9df151a275033fc0;
        }

    }

    TestOptionModel.RL_06044e18a6adcb4a057162249eab9621 = RL_06044e18a6adcb4a057162249eab9621;

});

define("TestOption.model$RC_7501a1e5933671743a2bbef56326a047", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "TestOption.model", "RESTAPIWebsocketOfficial.model$ST_b5282edb36283adb40969ef7004c3e79Structure", "TestOption.referencesHealth", "TestOption.referencesHealth$RESTAPIWebsocketOfficial"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, TestOptionModel) {
    var OS = OSRuntimeCore; {
        class RC_7501a1e5933671743a2bbef56326a047Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Common_reporting_standard", "common_reporting_standardAttr", "Common_reporting_standard", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_b5282edb36283adb40969ef7004c3e79Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_b5282edb36283adb40969ef7004c3e79Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_7501a1e5933671743a2bbef56326a047(new RC_7501a1e5933671743a2bbef56326a047.RecordClass({
                    common_reporting_standardAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        TestOptionModel.RC_7501a1e5933671743a2bbef56326a047 = RC_7501a1e5933671743a2bbef56326a047Inner;

        RC_7501a1e5933671743a2bbef56326a047Inner._isAnonymousRecord = true;
        RC_7501a1e5933671743a2bbef56326a047Inner.UniqueId = "7501a1e5-9336-7174-3a2b-bef56326a047";
        var RC_7501a1e5933671743a2bbef56326a047 = RC_7501a1e5933671743a2bbef56326a047Inner;
        RC_7501a1e5933671743a2bbef56326a047.init();
    }
});

define("TestOption.model$RL_06ad8081ecdd4854820e95cbc9df15a8", ["exports", "@outsystems/runtime-core-js", "TestOption.model", "TestOption.model$RC_7501a1e5933671743a2bbef56326a047"], function(exports, OSRuntimeCore, TestOptionModel) {
    var OS = OSRuntimeCore;
    class RL_06ad8081ecdd4854820e95cbc9df15a8 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return TestOptionModel.RC_7501a1e5933671743a2bbef56326a047;
        }

    }

    TestOptionModel.RL_06ad8081ecdd4854820e95cbc9df15a8 = RL_06ad8081ecdd4854820e95cbc9df15a8;

});

define("TestOption.model$ST_071faca83108779d9cc29003158a563bStructure", ["exports", "@outsystems/runtime-core-js", "TestOption.model"], function(exports, OSRuntimeCore, TestOptionModel) {
    var OS = OSRuntimeCore; {
        class ST_071faca83108779d9cc29003158a563bStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Stars", "starsAttr", "stars", false, false, OS.DataTypes.DataTypes.Decimal, function() {
                        return OS.DataTypes.Decimal.defaultValue;
                    }, true),
                    this.attr("TrustScore", "trustScoreAttr", "trustScore", false, false, OS.DataTypes.DataTypes.Decimal, function() {
                        return OS.DataTypes.Decimal.defaultValue;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        TestOptionModel.ST_071faca83108779d9cc29003158a563bStructure = ST_071faca83108779d9cc29003158a563bStructureInner;

        var ST_071faca83108779d9cc29003158a563bStructure = ST_071faca83108779d9cc29003158a563bStructureInner;
        ST_071faca83108779d9cc29003158a563bStructure.init();
    }
});

define("TestOption.model$RL_08493c76d04a33db201691368d61ec98", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "TestOption.model", "RESTAPIWebsocketOfficial.model$ST_e9350867621f419f78bd47d2bb88d9ceStructure", "TestOption.referencesHealth", "TestOption.referencesHealth$RESTAPIWebsocketOfficial"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, TestOptionModel) {
    var OS = OSRuntimeCore;
    class RL_08493c76d04a33db201691368d61ec98 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_e9350867621f419f78bd47d2bb88d9ceStructure;
        }

    }

    TestOptionModel.RL_08493c76d04a33db201691368d61ec98 = RL_08493c76d04a33db201691368d61ec98;

});

define("TestOption.model$RL_085f95fe6d8c0993316da931c0bd457a", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "TestOption.model", "RESTAPIWebsocketOfficial.model$ST_c4a5ea0056d7d4d64b0630a9fc26f60bStructure", "TestOption.referencesHealth", "TestOption.referencesHealth$RESTAPIWebsocketOfficial"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, TestOptionModel) {
    var OS = OSRuntimeCore;
    class RL_085f95fe6d8c0993316da931c0bd457a extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_c4a5ea0056d7d4d64b0630a9fc26f60bStructure;
        }

    }

    TestOptionModel.RL_085f95fe6d8c0993316da931c0bd457a = RL_085f95fe6d8c0993316da931c0bd457a;

});

define("TestOption.model$RC_8e2ccc4cb2bbc580c7d8c36277a3970f", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "TestOption.model", "RESTAPIWebsocketOfficial.model$ST_349094d98d9594831ba9e5194411246fStructure", "TestOption.referencesHealth", "TestOption.referencesHealth$RESTAPIWebsocketOfficial"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, TestOptionModel) {
    var OS = OSRuntimeCore; {
        class RC_8e2ccc4cb2bbc580c7d8c36277a3970fInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("NonParticipatingJurisdiction_LandingCompany", "nonParticipatingJurisdiction_LandingCompanyAttr", "NonParticipatingJurisdiction_LandingCompany", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_349094d98d9594831ba9e5194411246fStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_349094d98d9594831ba9e5194411246fStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_8e2ccc4cb2bbc580c7d8c36277a3970f(new RC_8e2ccc4cb2bbc580c7d8c36277a3970f.RecordClass({
                    nonParticipatingJurisdiction_LandingCompanyAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        TestOptionModel.RC_8e2ccc4cb2bbc580c7d8c36277a3970f = RC_8e2ccc4cb2bbc580c7d8c36277a3970fInner;

        RC_8e2ccc4cb2bbc580c7d8c36277a3970fInner._isAnonymousRecord = true;
        RC_8e2ccc4cb2bbc580c7d8c36277a3970fInner.UniqueId = "8e2ccc4c-b2bb-c580-c7d8-c36277a3970f";
        var RC_8e2ccc4cb2bbc580c7d8c36277a3970f = RC_8e2ccc4cb2bbc580c7d8c36277a3970fInner;
        RC_8e2ccc4cb2bbc580c7d8c36277a3970f.init();
    }
});

define("TestOption.model$RL_09aadf2f3a6cc14ff58d7e91ed9aa591", ["exports", "@outsystems/runtime-core-js", "TestOption.model", "TestOption.model$RC_8e2ccc4cb2bbc580c7d8c36277a3970f"], function(exports, OSRuntimeCore, TestOptionModel) {
    var OS = OSRuntimeCore;
    class RL_09aadf2f3a6cc14ff58d7e91ed9aa591 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return TestOptionModel.RC_8e2ccc4cb2bbc580c7d8c36277a3970f;
        }

    }

    TestOptionModel.RL_09aadf2f3a6cc14ff58d7e91ed9aa591 = RL_09aadf2f3a6cc14ff58d7e91ed9aa591;

});

define("TestOption.model$RC_5a174d6874253917600b578d844943be", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "TestOption.model", "RESTAPIWebsocketOfficial.model$ST_709b151c5172b8ff1042e5fecf4be0ecStructure", "TestOption.referencesHealth", "TestOption.referencesHealth$RESTAPIWebsocketOfficial"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, TestOptionModel) {
    var OS = OSRuntimeCore; {
        class RC_5a174d6874253917600b578d844943beInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Nik", "nikAttr", "Nik", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_709b151c5172b8ff1042e5fecf4be0ecStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_709b151c5172b8ff1042e5fecf4be0ecStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_5a174d6874253917600b578d844943be(new RC_5a174d6874253917600b578d844943be.RecordClass({
                    nikAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        TestOptionModel.RC_5a174d6874253917600b578d844943be = RC_5a174d6874253917600b578d844943beInner;

        RC_5a174d6874253917600b578d844943beInner._isAnonymousRecord = true;
        RC_5a174d6874253917600b578d844943beInner.UniqueId = "5a174d68-7425-3917-600b-578d844943be";
        var RC_5a174d6874253917600b578d844943be = RC_5a174d6874253917600b578d844943beInner;
        RC_5a174d6874253917600b578d844943be.init();
    }
});

define("TestOption.model$RL_0ebbc09ab880f9576c75a250e0dd80b4", ["exports", "@outsystems/runtime-core-js", "TestOption.model", "TestOption.model$RC_5a174d6874253917600b578d844943be"], function(exports, OSRuntimeCore, TestOptionModel) {
    var OS = OSRuntimeCore;
    class RL_0ebbc09ab880f9576c75a250e0dd80b4 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return TestOptionModel.RC_5a174d6874253917600b578d844943be;
        }

    }

    TestOptionModel.RL_0ebbc09ab880f9576c75a250e0dd80b4 = RL_0ebbc09ab880f9576c75a250e0dd80b4;

});

define("TestOption.model$RL_13f4e7ea22b9e316259c119567103cf9", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "TestOption.model", "RESTAPIWebsocketOfficial.model$ST_333caa433a680d581b2dfdf80dcbab60Structure", "TestOption.referencesHealth", "TestOption.referencesHealth$RESTAPIWebsocketOfficial"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, TestOptionModel) {
    var OS = OSRuntimeCore;
    class RL_13f4e7ea22b9e316259c119567103cf9 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_333caa433a680d581b2dfdf80dcbab60Structure;
        }

    }

    TestOptionModel.RL_13f4e7ea22b9e316259c119567103cf9 = RL_13f4e7ea22b9e316259c119567103cf9;

});

define("TestOption.model$RL_14c5bb80b83da1321f2059f42deabf95", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "TestOption.model", "RESTAPIWebsocketOfficial.model$ST_10e78341d21be3a7dc573dcf4252c9dbStructure", "TestOption.referencesHealth", "TestOption.referencesHealth$RESTAPIWebsocketOfficial"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, TestOptionModel) {
    var OS = OSRuntimeCore;
    class RL_14c5bb80b83da1321f2059f42deabf95 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_10e78341d21be3a7dc573dcf4252c9dbStructure;
        }

    }

    TestOptionModel.RL_14c5bb80b83da1321f2059f42deabf95 = RL_14c5bb80b83da1321f2059f42deabf95;

});

define("TestOption.model$RL_157fced35d515bf7b615f06f3ed59864", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "TestOption.model", "OutSystemsUI.model$EN_bc915b2fa9297a72fb4d1b227ebe2573EntityRecord", "TestOption.referencesHealth", "TestOption.referencesHealth$OutSystemsUI"], function(exports, OSRuntimeCore, OutSystemsUIModel, TestOptionModel) {
    var OS = OSRuntimeCore;
    class RL_157fced35d515bf7b615f06f3ed59864 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.EN_bc915b2fa9297a72fb4d1b227ebe2573EntityRecord;
        }

    }

    TestOptionModel.RL_157fced35d515bf7b615f06f3ed59864 = RL_157fced35d515bf7b615f06f3ed59864;

});

define("TestOption.model$RC_19aa89641c7398ceacf4370c69126f64", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "TestOption.model", "RESTAPIWebsocketOfficial.model$ST_1c923b28044712e7268167783ecfdfbeStructure", "TestOption.referencesHealth", "TestOption.referencesHealth$RESTAPIWebsocketOfficial"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, TestOptionModel) {
    var OS = OSRuntimeCore; {
        class RC_19aa89641c7398ceacf4370c69126f64Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Tax", "taxAttr", "Tax", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_1c923b28044712e7268167783ecfdfbeStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_1c923b28044712e7268167783ecfdfbeStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_19aa89641c7398ceacf4370c69126f64(new RC_19aa89641c7398ceacf4370c69126f64.RecordClass({
                    taxAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        TestOptionModel.RC_19aa89641c7398ceacf4370c69126f64 = RC_19aa89641c7398ceacf4370c69126f64Inner;

        RC_19aa89641c7398ceacf4370c69126f64Inner._isAnonymousRecord = true;
        RC_19aa89641c7398ceacf4370c69126f64Inner.UniqueId = "19aa8964-1c73-98ce-acf4-370c69126f64";
        var RC_19aa89641c7398ceacf4370c69126f64 = RC_19aa89641c7398ceacf4370c69126f64Inner;
        RC_19aa89641c7398ceacf4370c69126f64.init();
    }
});

define("TestOption.model$RL_19efe67c3ea3fa4b4b07aaa801b42f8c", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "TestOption.model", "OutSystemsUI.model$EN_52e55d60c515b6016f81404afb220594EntityRecord", "TestOption.referencesHealth", "TestOption.referencesHealth$OutSystemsUI"], function(exports, OSRuntimeCore, OutSystemsUIModel, TestOptionModel) {
    var OS = OSRuntimeCore;
    class RL_19efe67c3ea3fa4b4b07aaa801b42f8c extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.EN_52e55d60c515b6016f81404afb220594EntityRecord;
        }

    }

    TestOptionModel.RL_19efe67c3ea3fa4b4b07aaa801b42f8c = RL_19efe67c3ea3fa4b4b07aaa801b42f8c;

});

define("TestOption.model$RL_1a3d69aa423d764681f454d0f73b9b2d", ["exports", "@outsystems/runtime-core-js", "TestOption.model", "TestOption.model$ST_071faca83108779d9cc29003158a563bStructure"], function(exports, OSRuntimeCore, TestOptionModel) {
    var OS = OSRuntimeCore;
    class RL_1a3d69aa423d764681f454d0f73b9b2d extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return TestOptionModel.ST_071faca83108779d9cc29003158a563bStructure;
        }

    }

    TestOptionModel.RL_1a3d69aa423d764681f454d0f73b9b2d = RL_1a3d69aa423d764681f454d0f73b9b2d;

});

define("TestOption.model$RC_ea9565ddc265550c2d38c39dc154035f", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "TestOption.model", "RESTAPIWebsocketOfficial.model$ST_113226709b84b71c70ebd50296313568Structure", "TestOption.referencesHealth", "TestOption.referencesHealth$RESTAPIWebsocketOfficial"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, TestOptionModel) {
    var OS = OSRuntimeCore; {
        class RC_ea9565ddc265550c2d38c39dc154035fInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Turnover", "turnoverAttr", "Turnover", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_113226709b84b71c70ebd50296313568Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_113226709b84b71c70ebd50296313568Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_ea9565ddc265550c2d38c39dc154035f(new RC_ea9565ddc265550c2d38c39dc154035f.RecordClass({
                    turnoverAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        TestOptionModel.RC_ea9565ddc265550c2d38c39dc154035f = RC_ea9565ddc265550c2d38c39dc154035fInner;

        RC_ea9565ddc265550c2d38c39dc154035fInner._isAnonymousRecord = true;
        RC_ea9565ddc265550c2d38c39dc154035fInner.UniqueId = "ea9565dd-c265-550c-2d38-c39dc154035f";
        var RC_ea9565ddc265550c2d38c39dc154035f = RC_ea9565ddc265550c2d38c39dc154035fInner;
        RC_ea9565ddc265550c2d38c39dc154035f.init();
    }
});

define("TestOption.model$RL_1b71a02dea96d4cd97c73eba8bb674c6", ["exports", "@outsystems/runtime-core-js", "TestOption.model", "TestOption.model$RC_ea9565ddc265550c2d38c39dc154035f"], function(exports, OSRuntimeCore, TestOptionModel) {
    var OS = OSRuntimeCore;
    class RL_1b71a02dea96d4cd97c73eba8bb674c6 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return TestOptionModel.RC_ea9565ddc265550c2d38c39dc154035f;
        }

    }

    TestOptionModel.RL_1b71a02dea96d4cd97c73eba8bb674c6 = RL_1b71a02dea96d4cd97c73eba8bb674c6;

});

define("TestOption.model$RC_6da37637b0593f4ec39cbdb7fca0818f", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "TestOption.model", "RESTAPIWebsocketOfficial.model$ST_10e78341d21be3a7dc573dcf4252c9dbStructure", "TestOption.referencesHealth", "TestOption.referencesHealth$RESTAPIWebsocketOfficial"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, TestOptionModel) {
    var OS = OSRuntimeCore; {
        class RC_6da37637b0593f4ec39cbdb7fca0818fInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Onfido", "onfidoAttr", "Onfido2", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_10e78341d21be3a7dc573dcf4252c9dbStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_10e78341d21be3a7dc573dcf4252c9dbStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_6da37637b0593f4ec39cbdb7fca0818f(new RC_6da37637b0593f4ec39cbdb7fca0818f.RecordClass({
                    onfidoAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        TestOptionModel.RC_6da37637b0593f4ec39cbdb7fca0818f = RC_6da37637b0593f4ec39cbdb7fca0818fInner;

        RC_6da37637b0593f4ec39cbdb7fca0818fInner._isAnonymousRecord = true;
        RC_6da37637b0593f4ec39cbdb7fca0818fInner.UniqueId = "6da37637-b059-3f4e-c39c-bdb7fca0818f";
        var RC_6da37637b0593f4ec39cbdb7fca0818f = RC_6da37637b0593f4ec39cbdb7fca0818fInner;
        RC_6da37637b0593f4ec39cbdb7fca0818f.init();
    }
});

define("TestOption.model$RL_21aa582dbaa7e503639ee59cca230a00", ["exports", "@outsystems/runtime-core-js", "TestOption.model", "TestOption.model$RC_6da37637b0593f4ec39cbdb7fca0818f"], function(exports, OSRuntimeCore, TestOptionModel) {
    var OS = OSRuntimeCore;
    class RL_21aa582dbaa7e503639ee59cca230a00 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return TestOptionModel.RC_6da37637b0593f4ec39cbdb7fca0818f;
        }

    }

    TestOptionModel.RL_21aa582dbaa7e503639ee59cca230a00 = RL_21aa582dbaa7e503639ee59cca230a00;

});

define("TestOption.model$RC_30490951290854c2926b2cf8ec7b4a20", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "TestOption.model", "RESTAPIWebsocketOfficial.model$ST_9eb2d1268b055c9ba20852d2758a5050Structure", "TestOption.referencesHealth", "TestOption.referencesHealth$RESTAPIWebsocketOfficial"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, TestOptionModel) {
    var OS = OSRuntimeCore; {
        class RC_30490951290854c2926b2cf8ec7b4a20Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Jurisdiction_risk_assessment", "jurisdiction_risk_assessmentAttr", "Jurisdiction_risk_assessment", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_9eb2d1268b055c9ba20852d2758a5050Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_9eb2d1268b055c9ba20852d2758a5050Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_30490951290854c2926b2cf8ec7b4a20(new RC_30490951290854c2926b2cf8ec7b4a20.RecordClass({
                    jurisdiction_risk_assessmentAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        TestOptionModel.RC_30490951290854c2926b2cf8ec7b4a20 = RC_30490951290854c2926b2cf8ec7b4a20Inner;

        RC_30490951290854c2926b2cf8ec7b4a20Inner._isAnonymousRecord = true;
        RC_30490951290854c2926b2cf8ec7b4a20Inner.UniqueId = "30490951-2908-54c2-926b-2cf8ec7b4a20";
        var RC_30490951290854c2926b2cf8ec7b4a20 = RC_30490951290854c2926b2cf8ec7b4a20Inner;
        RC_30490951290854c2926b2cf8ec7b4a20.init();
    }
});

define("TestOption.model$RL_222c4cca834a8b261e24304f207bc884", ["exports", "@outsystems/runtime-core-js", "TestOption.model", "TestOption.model$RC_30490951290854c2926b2cf8ec7b4a20"], function(exports, OSRuntimeCore, TestOptionModel) {
    var OS = OSRuntimeCore;
    class RL_222c4cca834a8b261e24304f207bc884 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return TestOptionModel.RC_30490951290854c2926b2cf8ec7b4a20;
        }

    }

    TestOptionModel.RL_222c4cca834a8b261e24304f207bc884 = RL_222c4cca834a8b261e24304f207bc884;

});

define("TestOption.model$RL_25008888c069155597e1a02e1b9ea813", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "TestOption.model", "RESTAPIWebsocketOfficial.model$ST_803bffb999fad6a38040b2086877902eStructure", "TestOption.referencesHealth", "TestOption.referencesHealth$RESTAPIWebsocketOfficial"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, TestOptionModel) {
    var OS = OSRuntimeCore;
    class RL_25008888c069155597e1a02e1b9ea813 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_803bffb999fad6a38040b2086877902eStructure;
        }

    }

    TestOptionModel.RL_25008888c069155597e1a02e1b9ea813 = RL_25008888c069155597e1a02e1b9ea813;

});

define("TestOption.model$RC_ca426fec0751e5b6dcf015e9fdc2120e", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "TestOption.model", "OutSystemsUI.model$EN_a14a98f7fea6a66cbe59ce2905b45c09EntityRecord", "TestOption.referencesHealth", "TestOption.referencesHealth$OutSystemsUI"], function(exports, OSRuntimeCore, OutSystemsUIModel, TestOptionModel) {
    var OS = OSRuntimeCore; {
        class RC_ca426fec0751e5b6dcf015e9fdc2120eInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Size", "sizeAttr", "Size", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_a14a98f7fea6a66cbe59ce2905b45c09EntityRecord());
                    }, true, OutSystemsUIModel.EN_a14a98f7fea6a66cbe59ce2905b45c09EntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_ca426fec0751e5b6dcf015e9fdc2120e(new RC_ca426fec0751e5b6dcf015e9fdc2120e.RecordClass({
                    sizeAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        TestOptionModel.RC_ca426fec0751e5b6dcf015e9fdc2120e = RC_ca426fec0751e5b6dcf015e9fdc2120eInner;

        RC_ca426fec0751e5b6dcf015e9fdc2120eInner._isAnonymousRecord = true;
        RC_ca426fec0751e5b6dcf015e9fdc2120eInner.UniqueId = "ca426fec-0751-e5b6-dcf0-15e9fdc2120e";
        var RC_ca426fec0751e5b6dcf015e9fdc2120e = RC_ca426fec0751e5b6dcf015e9fdc2120eInner;
        RC_ca426fec0751e5b6dcf015e9fdc2120e.init();
    }
});

define("TestOption.model$RL_27a81319ef1cef112a91632cbf388562", ["exports", "@outsystems/runtime-core-js", "TestOption.model", "TestOption.model$RC_ca426fec0751e5b6dcf015e9fdc2120e"], function(exports, OSRuntimeCore, TestOptionModel) {
    var OS = OSRuntimeCore;
    class RL_27a81319ef1cef112a91632cbf388562 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return TestOptionModel.RC_ca426fec0751e5b6dcf015e9fdc2120e;
        }

    }

    TestOptionModel.RL_27a81319ef1cef112a91632cbf388562 = RL_27a81319ef1cef112a91632cbf388562;

});

define("TestOption.model$RC_82e915cb61269c2e1fb30ed84469e07b", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "TestOption.model", "RESTAPIWebsocketOfficial.model$ST_c4a5ea0056d7d4d64b0630a9fc26f60bStructure", "TestOption.referencesHealth", "TestOption.referencesHealth$RESTAPIWebsocketOfficial"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, TestOptionModel) {
    var OS = OSRuntimeCore; {
        class RC_82e915cb61269c2e1fb30ed84469e07bInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("National_identity_card", "national_identity_cardAttr", "National_identity_card", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_c4a5ea0056d7d4d64b0630a9fc26f60bStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_c4a5ea0056d7d4d64b0630a9fc26f60bStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_82e915cb61269c2e1fb30ed84469e07b(new RC_82e915cb61269c2e1fb30ed84469e07b.RecordClass({
                    national_identity_cardAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        TestOptionModel.RC_82e915cb61269c2e1fb30ed84469e07b = RC_82e915cb61269c2e1fb30ed84469e07bInner;

        RC_82e915cb61269c2e1fb30ed84469e07bInner._isAnonymousRecord = true;
        RC_82e915cb61269c2e1fb30ed84469e07bInner.UniqueId = "82e915cb-6126-9c2e-1fb3-0ed84469e07b";
        var RC_82e915cb61269c2e1fb30ed84469e07b = RC_82e915cb61269c2e1fb30ed84469e07bInner;
        RC_82e915cb61269c2e1fb30ed84469e07b.init();
    }
});

define("TestOption.model$RL_29080a69ee1ce69b9b697bf94281f9ff", ["exports", "@outsystems/runtime-core-js", "TestOption.model", "TestOption.model$RC_82e915cb61269c2e1fb30ed84469e07b"], function(exports, OSRuntimeCore, TestOptionModel) {
    var OS = OSRuntimeCore;
    class RL_29080a69ee1ce69b9b697bf94281f9ff extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return TestOptionModel.RC_82e915cb61269c2e1fb30ed84469e07b;
        }

    }

    TestOptionModel.RL_29080a69ee1ce69b9b697bf94281f9ff = RL_29080a69ee1ce69b9b697bf94281f9ff;

});

define("TestOption.model$RC_cd5e42a0793d8eb69fbc5056fff3f372", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "TestOption.model", "RESTAPIWebsocketOfficial.model$ST_55ea19c18b42991c3f5575c063ad7ca7Structure", "TestOption.referencesHealth", "TestOption.referencesHealth$RESTAPIWebsocketOfficial"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, TestOptionModel) {
    var OS = OSRuntimeCore; {
        class RC_cd5e42a0793d8eb69fbc5056fff3f372Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Non_participating_jurisdiction", "non_participating_jurisdictionAttr", "Non_participating_jurisdiction", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_55ea19c18b42991c3f5575c063ad7ca7Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_55ea19c18b42991c3f5575c063ad7ca7Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_cd5e42a0793d8eb69fbc5056fff3f372(new RC_cd5e42a0793d8eb69fbc5056fff3f372.RecordClass({
                    non_participating_jurisdictionAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        TestOptionModel.RC_cd5e42a0793d8eb69fbc5056fff3f372 = RC_cd5e42a0793d8eb69fbc5056fff3f372Inner;

        RC_cd5e42a0793d8eb69fbc5056fff3f372Inner._isAnonymousRecord = true;
        RC_cd5e42a0793d8eb69fbc5056fff3f372Inner.UniqueId = "cd5e42a0-793d-8eb6-9fbc-5056fff3f372";
        var RC_cd5e42a0793d8eb69fbc5056fff3f372 = RC_cd5e42a0793d8eb69fbc5056fff3f372Inner;
        RC_cd5e42a0793d8eb69fbc5056fff3f372.init();
    }
});

define("TestOption.model$RL_296c80117ea3feed92d93a9342c06001", ["exports", "@outsystems/runtime-core-js", "TestOption.model", "TestOption.model$RC_cd5e42a0793d8eb69fbc5056fff3f372"], function(exports, OSRuntimeCore, TestOptionModel) {
    var OS = OSRuntimeCore;
    class RL_296c80117ea3feed92d93a9342c06001 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return TestOptionModel.RC_cd5e42a0793d8eb69fbc5056fff3f372;
        }

    }

    TestOptionModel.RL_296c80117ea3feed92d93a9342c06001 = RL_296c80117ea3feed92d93a9342c06001;

});

define("TestOption.model$ST_d018318373a23012db6d09a8bc11c438Structure", ["exports", "@outsystems/runtime-core-js", "TestOption.model"], function(exports, OSRuntimeCore, TestOptionModel) {
    var OS = OSRuntimeCore; {
        class ST_d018318373a23012db6d09a8bc11c438StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Referring", "referringAttr", "referring", false, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
                    }, true, OS.DataTypes.TextList),
                    this.attr("Identifying", "identifyingAttr", "identifying", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        TestOptionModel.ST_d018318373a23012db6d09a8bc11c438Structure = ST_d018318373a23012db6d09a8bc11c438StructureInner;

        var ST_d018318373a23012db6d09a8bc11c438Structure = ST_d018318373a23012db6d09a8bc11c438StructureInner;
        ST_d018318373a23012db6d09a8bc11c438Structure.init();
    }
});

define("TestOption.model$RC_2f1fa286086ef49a57d42b377e43e2fe", ["exports", "@outsystems/runtime-core-js", "TestOption.model", "TestOption.model$ST_d018318373a23012db6d09a8bc11c438Structure"], function(exports, OSRuntimeCore, TestOptionModel) {
    var OS = OSRuntimeCore; {
        class RC_2f1fa286086ef49a57d42b377e43e2feInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new TestOptionModel.ST_d018318373a23012db6d09a8bc11c438Structure());
                    }, true, TestOptionModel.ST_d018318373a23012db6d09a8bc11c438Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_2f1fa286086ef49a57d42b377e43e2fe(new RC_2f1fa286086ef49a57d42b377e43e2fe.RecordClass({
                    nameAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        TestOptionModel.RC_2f1fa286086ef49a57d42b377e43e2fe = RC_2f1fa286086ef49a57d42b377e43e2feInner;

        RC_2f1fa286086ef49a57d42b377e43e2feInner._isAnonymousRecord = true;
        RC_2f1fa286086ef49a57d42b377e43e2feInner.UniqueId = "2f1fa286-086e-f49a-57d4-2b377e43e2fe";
        var RC_2f1fa286086ef49a57d42b377e43e2fe = RC_2f1fa286086ef49a57d42b377e43e2feInner;
        RC_2f1fa286086ef49a57d42b377e43e2fe.init();
    }
});

define("TestOption.model$RL_357030bc20ba450abe6756927d50ad98", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "TestOption.model", "RESTAPIWebsocketOfficial.model$ST_2aef4efdcc8a8ad935c2f051f3051327Structure", "TestOption.referencesHealth", "TestOption.referencesHealth$RESTAPIWebsocketOfficial"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, TestOptionModel) {
    var OS = OSRuntimeCore;
    class RL_357030bc20ba450abe6756927d50ad98 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_2aef4efdcc8a8ad935c2f051f3051327Structure;
        }

    }

    TestOptionModel.RL_357030bc20ba450abe6756927d50ad98 = RL_357030bc20ba450abe6756927d50ad98;

});

define("TestOption.model$RL_386f6a281c08d72d0376417e02fe0b4b", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "TestOption.model", "RESTAPIWebsocketOfficial.model$ST_b5282edb36283adb40969ef7004c3e79Structure", "TestOption.referencesHealth", "TestOption.referencesHealth$RESTAPIWebsocketOfficial"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, TestOptionModel) {
    var OS = OSRuntimeCore;
    class RL_386f6a281c08d72d0376417e02fe0b4b extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_b5282edb36283adb40969ef7004c3e79Structure;
        }

    }

    TestOptionModel.RL_386f6a281c08d72d0376417e02fe0b4b = RL_386f6a281c08d72d0376417e02fe0b4b;

});

define("TestOption.model$RL_3ddab8163c31ef065226c1ec689ad1e9", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "TestOption.model", "RESTAPIWebsocketOfficial.model$ST_113226709b84b71c70ebd50296313568Structure", "TestOption.referencesHealth", "TestOption.referencesHealth$RESTAPIWebsocketOfficial"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, TestOptionModel) {
    var OS = OSRuntimeCore;
    class RL_3ddab8163c31ef065226c1ec689ad1e9 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_113226709b84b71c70ebd50296313568Structure;
        }

    }

    TestOptionModel.RL_3ddab8163c31ef065226c1ec689ad1e9 = RL_3ddab8163c31ef065226c1ec689ad1e9;

});

define("TestOption.model$RC_3f4d741c30bd5473dc9c679433c442c3", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "TestOption.model", "RESTAPIWebsocketOfficial.model$ST_2aef4efdcc8a8ad935c2f051f3051327Structure", "TestOption.referencesHealth", "TestOption.referencesHealth$RESTAPIWebsocketOfficial"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, TestOptionModel) {
    var OS = OSRuntimeCore; {
        class RC_3f4d741c30bd5473dc9c679433c442c3Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Documents_supported2", "documents_supported2Attr", "Documents_supported3", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_2aef4efdcc8a8ad935c2f051f3051327Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_2aef4efdcc8a8ad935c2f051f3051327Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_3f4d741c30bd5473dc9c679433c442c3(new RC_3f4d741c30bd5473dc9c679433c442c3.RecordClass({
                    documents_supported2Attr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        TestOptionModel.RC_3f4d741c30bd5473dc9c679433c442c3 = RC_3f4d741c30bd5473dc9c679433c442c3Inner;

        RC_3f4d741c30bd5473dc9c679433c442c3Inner._isAnonymousRecord = true;
        RC_3f4d741c30bd5473dc9c679433c442c3Inner.UniqueId = "3f4d741c-30bd-5473-dc9c-679433c442c3";
        var RC_3f4d741c30bd5473dc9c679433c442c3 = RC_3f4d741c30bd5473dc9c679433c442c3Inner;
        RC_3f4d741c30bd5473dc9c679433c442c3.init();
    }
});

define("TestOption.model$RL_4153455d8943850f971d65d82f35900b", ["exports", "@outsystems/runtime-core-js", "TestOption.model", "TestOption.model$RC_19aa89641c7398ceacf4370c69126f64"], function(exports, OSRuntimeCore, TestOptionModel) {
    var OS = OSRuntimeCore;
    class RL_4153455d8943850f971d65d82f35900b extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return TestOptionModel.RC_19aa89641c7398ceacf4370c69126f64;
        }

    }

    TestOptionModel.RL_4153455d8943850f971d65d82f35900b = RL_4153455d8943850f971d65d82f35900b;

});

define("TestOption.model$ST_c45616c54e159e1d36ad93eb2ce042faStructure", ["exports", "@outsystems/runtime-core-js", "TestOption.model"], function(exports, OSRuntimeCore, TestOptionModel) {
    var OS = OSRuntimeCore; {
        class ST_c45616c54e159e1d36ad93eb2ce042faStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Total", "totalAttr", "total", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("UsedForTrustScoreCalculation", "usedForTrustScoreCalculationAttr", "usedForTrustScoreCalculation", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("OneStar", "oneStarAttr", "oneStar", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("TwoStars", "twoStarsAttr", "twoStars", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("ThreeStars", "threeStarsAttr", "threeStars", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("FourStars", "fourStarsAttr", "fourStars", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("FiveStars", "fiveStarsAttr", "fiveStars", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        TestOptionModel.ST_c45616c54e159e1d36ad93eb2ce042faStructure = ST_c45616c54e159e1d36ad93eb2ce042faStructureInner;

        var ST_c45616c54e159e1d36ad93eb2ce042faStructure = ST_c45616c54e159e1d36ad93eb2ce042faStructureInner;
        ST_c45616c54e159e1d36ad93eb2ce042faStructure.init();
    }
});

define("TestOption.model$RC_4269919ca89fe70e97b62528dc7b74af", ["exports", "@outsystems/runtime-core-js", "TestOption.model", "TestOption.model$ST_c45616c54e159e1d36ad93eb2ce042faStructure"], function(exports, OSRuntimeCore, TestOptionModel) {
    var OS = OSRuntimeCore; {
        class RC_4269919ca89fe70e97b62528dc7b74afInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("NumberOfReview", "numberOfReviewAttr", "NumberOfReview", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new TestOptionModel.ST_c45616c54e159e1d36ad93eb2ce042faStructure());
                    }, true, TestOptionModel.ST_c45616c54e159e1d36ad93eb2ce042faStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_4269919ca89fe70e97b62528dc7b74af(new RC_4269919ca89fe70e97b62528dc7b74af.RecordClass({
                    numberOfReviewAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        TestOptionModel.RC_4269919ca89fe70e97b62528dc7b74af = RC_4269919ca89fe70e97b62528dc7b74afInner;

        RC_4269919ca89fe70e97b62528dc7b74afInner._isAnonymousRecord = true;
        RC_4269919ca89fe70e97b62528dc7b74afInner.UniqueId = "4269919c-a89f-e70e-97b6-2528dc7b74af";
        var RC_4269919ca89fe70e97b62528dc7b74af = RC_4269919ca89fe70e97b62528dc7b74afInner;
        RC_4269919ca89fe70e97b62528dc7b74af.init();
    }
});

define("TestOption.model$RC_655de439743f6ef66e4c426b009f58b1", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "TestOption.model", "RESTAPIWebsocketOfficial.model$ST_e9350867621f419f78bd47d2bb88d9ceStructure", "TestOption.referencesHealth", "TestOption.referencesHealth$RESTAPIWebsocketOfficial"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, TestOptionModel) {
    var OS = OSRuntimeCore; {
        class RC_655de439743f6ef66e4c426b009f58b1Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Documents_supported", "documents_supportedAttr", "Documents_supported4", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_e9350867621f419f78bd47d2bb88d9ceStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_e9350867621f419f78bd47d2bb88d9ceStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_655de439743f6ef66e4c426b009f58b1(new RC_655de439743f6ef66e4c426b009f58b1.RecordClass({
                    documents_supportedAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        TestOptionModel.RC_655de439743f6ef66e4c426b009f58b1 = RC_655de439743f6ef66e4c426b009f58b1Inner;

        RC_655de439743f6ef66e4c426b009f58b1Inner._isAnonymousRecord = true;
        RC_655de439743f6ef66e4c426b009f58b1Inner.UniqueId = "655de439-743f-6ef6-6e4c-426b009f58b1";
        var RC_655de439743f6ef66e4c426b009f58b1 = RC_655de439743f6ef66e4c426b009f58b1Inner;
        RC_655de439743f6ef66e4c426b009f58b1.init();
    }
});

define("TestOption.model$RL_431a1d9d775d905a0fa33726ccc368ad", ["exports", "@outsystems/runtime-core-js", "TestOption.model", "TestOption.model$RC_655de439743f6ef66e4c426b009f58b1"], function(exports, OSRuntimeCore, TestOptionModel) {
    var OS = OSRuntimeCore;
    class RL_431a1d9d775d905a0fa33726ccc368ad extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return TestOptionModel.RC_655de439743f6ef66e4c426b009f58b1;
        }

    }

    TestOptionModel.RL_431a1d9d775d905a0fa33726ccc368ad = RL_431a1d9d775d905a0fa33726ccc368ad;

});

define("TestOption.model$RC_d5f1faf2f682624c1c27e7a932faee50", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "TestOption.model", "RESTAPIWebsocketOfficial.model$ST_a37989da54adde60afe7657f5bc1d06eStructure", "TestOption.referencesHealth", "TestOption.referencesHealth$RESTAPIWebsocketOfficial"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, TestOptionModel) {
    var OS = OSRuntimeCore; {
        class RC_d5f1faf2f682624c1c27e7a932faee50Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Disclaimer", "disclaimerAttr", "Disclaimer", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_a37989da54adde60afe7657f5bc1d06eStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_a37989da54adde60afe7657f5bc1d06eStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_d5f1faf2f682624c1c27e7a932faee50(new RC_d5f1faf2f682624c1c27e7a932faee50.RecordClass({
                    disclaimerAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        TestOptionModel.RC_d5f1faf2f682624c1c27e7a932faee50 = RC_d5f1faf2f682624c1c27e7a932faee50Inner;

        RC_d5f1faf2f682624c1c27e7a932faee50Inner._isAnonymousRecord = true;
        RC_d5f1faf2f682624c1c27e7a932faee50Inner.UniqueId = "d5f1faf2-f682-624c-1c27-e7a932faee50";
        var RC_d5f1faf2f682624c1c27e7a932faee50 = RC_d5f1faf2f682624c1c27e7a932faee50Inner;
        RC_d5f1faf2f682624c1c27e7a932faee50.init();
    }
});

define("TestOption.model$RL_44cebee119c996a470fbff1d981600f0", ["exports", "@outsystems/runtime-core-js", "TestOption.model", "TestOption.model$RC_d5f1faf2f682624c1c27e7a932faee50"], function(exports, OSRuntimeCore, TestOptionModel) {
    var OS = OSRuntimeCore;
    class RL_44cebee119c996a470fbff1d981600f0 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return TestOptionModel.RC_d5f1faf2f682624c1c27e7a932faee50;
        }

    }

    TestOptionModel.RL_44cebee119c996a470fbff1d981600f0 = RL_44cebee119c996a470fbff1d981600f0;

});

define("TestOption.model$RC_5e1b44d038654ac19cd218a2a7d6a6b8", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "TestOption.model", "RESTAPIWebsocketOfficial.model$ST_30cf47a274820f1ac96cf412803888fdStructure", "TestOption.referencesHealth", "TestOption.referencesHealth$RESTAPIWebsocketOfficial"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, TestOptionModel) {
    var OS = OSRuntimeCore; {
        class RC_5e1b44d038654ac19cd218a2a7d6a6b8Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Idv", "idvAttr", "Idv2", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_30cf47a274820f1ac96cf412803888fdStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_30cf47a274820f1ac96cf412803888fdStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_5e1b44d038654ac19cd218a2a7d6a6b8(new RC_5e1b44d038654ac19cd218a2a7d6a6b8.RecordClass({
                    idvAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        TestOptionModel.RC_5e1b44d038654ac19cd218a2a7d6a6b8 = RC_5e1b44d038654ac19cd218a2a7d6a6b8Inner;

        RC_5e1b44d038654ac19cd218a2a7d6a6b8Inner._isAnonymousRecord = true;
        RC_5e1b44d038654ac19cd218a2a7d6a6b8Inner.UniqueId = "5e1b44d0-3865-4ac1-9cd2-18a2a7d6a6b8";
        var RC_5e1b44d038654ac19cd218a2a7d6a6b8 = RC_5e1b44d038654ac19cd218a2a7d6a6b8Inner;
        RC_5e1b44d038654ac19cd218a2a7d6a6b8.init();
    }
});

define("TestOption.model$RL_49a4d531de393d17563dea4ec0d88883", ["exports", "@outsystems/runtime-core-js", "TestOption.model", "TestOption.model$RC_5e1b44d038654ac19cd218a2a7d6a6b8"], function(exports, OSRuntimeCore, TestOptionModel) {
    var OS = OSRuntimeCore;
    class RL_49a4d531de393d17563dea4ec0d88883 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return TestOptionModel.RC_5e1b44d038654ac19cd218a2a7d6a6b8;
        }

    }

    TestOptionModel.RL_49a4d531de393d17563dea4ec0d88883 = RL_49a4d531de393d17563dea4ec0d88883;

});

define("TestOption.model$RL_4f9f1230897f0a3e8b129024e1de623d", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "TestOption.model", "RESTAPIWebsocketOfficial.model$ST_6669f981cb8653c55787de44bdd42a18Structure", "TestOption.referencesHealth", "TestOption.referencesHealth$RESTAPIWebsocketOfficial"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, TestOptionModel) {
    var OS = OSRuntimeCore;
    class RL_4f9f1230897f0a3e8b129024e1de623d extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_6669f981cb8653c55787de44bdd42a18Structure;
        }

    }

    TestOptionModel.RL_4f9f1230897f0a3e8b129024e1de623d = RL_4f9f1230897f0a3e8b129024e1de623d;

});

define("TestOption.model$RL_508855d25108765122be317d42e36c82", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "TestOption.model", "RESTAPIWebsocketOfficial.model$ST_349094d98d9594831ba9e5194411246fStructure", "TestOption.referencesHealth", "TestOption.referencesHealth$RESTAPIWebsocketOfficial"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, TestOptionModel) {
    var OS = OSRuntimeCore;
    class RL_508855d25108765122be317d42e36c82 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_349094d98d9594831ba9e5194411246fStructure;
        }

    }

    TestOptionModel.RL_508855d25108765122be317d42e36c82 = RL_508855d25108765122be317d42e36c82;

});

define("TestOption.model$RC_51c73f641f2d05540b68c15e7660196f", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "TestOption.model", "RESTAPIWebsocketOfficial.model$ST_8812c3cbc0a0d322acb5354526a670b4Structure", "TestOption.referencesHealth", "TestOption.referencesHealth$RESTAPIWebsocketOfficial"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, TestOptionModel) {
    var OS = OSRuntimeCore; {
        class RC_51c73f641f2d05540b68c15e7660196fInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Identity", "identityAttr", "Identity2", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_8812c3cbc0a0d322acb5354526a670b4Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_8812c3cbc0a0d322acb5354526a670b4Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_51c73f641f2d05540b68c15e7660196f(new RC_51c73f641f2d05540b68c15e7660196f.RecordClass({
                    identityAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        TestOptionModel.RC_51c73f641f2d05540b68c15e7660196f = RC_51c73f641f2d05540b68c15e7660196fInner;

        RC_51c73f641f2d05540b68c15e7660196fInner._isAnonymousRecord = true;
        RC_51c73f641f2d05540b68c15e7660196fInner.UniqueId = "51c73f64-1f2d-0554-0b68-c15e7660196f";
        var RC_51c73f641f2d05540b68c15e7660196f = RC_51c73f641f2d05540b68c15e7660196fInner;
        RC_51c73f641f2d05540b68c15e7660196f.init();
    }
});

define("TestOption.model$RL_545c5578385333732449204f3e942ed0", ["exports", "@outsystems/runtime-core-js", "TestOption.model", "TestOption.model$RC_012b2720fb0dcd442416908af4498cef"], function(exports, OSRuntimeCore, TestOptionModel) {
    var OS = OSRuntimeCore;
    class RL_545c5578385333732449204f3e942ed0 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return TestOptionModel.RC_012b2720fb0dcd442416908af4498cef;
        }

    }

    TestOptionModel.RL_545c5578385333732449204f3e942ed0 = RL_545c5578385333732449204f3e942ed0;

});

define("TestOption.model$RL_5615c834166e52223964bada9f9f6329", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "TestOption.model", "RESTAPIWebsocketOfficial.model$ST_3b8df1b0da2c2bbfdff9bb6416b86701Structure", "TestOption.referencesHealth", "TestOption.referencesHealth$RESTAPIWebsocketOfficial"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, TestOptionModel) {
    var OS = OSRuntimeCore;
    class RL_5615c834166e52223964bada9f9f6329 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_3b8df1b0da2c2bbfdff9bb6416b86701Structure;
        }

    }

    TestOptionModel.RL_5615c834166e52223964bada9f9f6329 = RL_5615c834166e52223964bada9f9f6329;

});

define("TestOption.model$RL_5a17cb0f64de6697951894cea5524431", ["exports", "@outsystems/runtime-core-js", "TestOption.model", "TestOption.model$RC_3f4d741c30bd5473dc9c679433c442c3"], function(exports, OSRuntimeCore, TestOptionModel) {
    var OS = OSRuntimeCore;
    class RL_5a17cb0f64de6697951894cea5524431 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return TestOptionModel.RC_3f4d741c30bd5473dc9c679433c442c3;
        }

    }

    TestOptionModel.RL_5a17cb0f64de6697951894cea5524431 = RL_5a17cb0f64de6697951894cea5524431;

});

define("TestOption.model$RC_5f28219a5e30fb90023fcbc295513e7c", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "TestOption.model", "OutSystemsUI.model$EN_5d1279724e719322292e34ef3c5500a0EntityRecord", "TestOption.referencesHealth", "TestOption.referencesHealth$OutSystemsUI"], function(exports, OSRuntimeCore, OutSystemsUIModel, TestOptionModel) {
    var OS = OSRuntimeCore; {
        class RC_5f28219a5e30fb90023fcbc295513e7cInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Position", "positionAttr", "Position", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_5d1279724e719322292e34ef3c5500a0EntityRecord());
                    }, true, OutSystemsUIModel.EN_5d1279724e719322292e34ef3c5500a0EntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_5f28219a5e30fb90023fcbc295513e7c(new RC_5f28219a5e30fb90023fcbc295513e7c.RecordClass({
                    positionAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        TestOptionModel.RC_5f28219a5e30fb90023fcbc295513e7c = RC_5f28219a5e30fb90023fcbc295513e7cInner;

        RC_5f28219a5e30fb90023fcbc295513e7cInner._isAnonymousRecord = true;
        RC_5f28219a5e30fb90023fcbc295513e7cInner.UniqueId = "5f28219a-5e30-fb90-023f-cbc295513e7c";
        var RC_5f28219a5e30fb90023fcbc295513e7c = RC_5f28219a5e30fb90023fcbc295513e7cInner;
        RC_5f28219a5e30fb90023fcbc295513e7c.init();
    }
});

define("TestOption.model$RL_5ba41fd2555db2daaba8da89df34a9b8", ["exports", "@outsystems/runtime-core-js", "TestOption.model", "TestOption.model$RC_5f28219a5e30fb90023fcbc295513e7c"], function(exports, OSRuntimeCore, TestOptionModel) {
    var OS = OSRuntimeCore;
    class RL_5ba41fd2555db2daaba8da89df34a9b8 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return TestOptionModel.RC_5f28219a5e30fb90023fcbc295513e7c;
        }

    }

    TestOptionModel.RL_5ba41fd2555db2daaba8da89df34a9b8 = RL_5ba41fd2555db2daaba8da89df34a9b8;

});

define("TestOption.model$RL_5ddf9a7e5d07e2f9a3a8f4f679e3090c", ["exports", "@outsystems/runtime-core-js", "TestOption.model", "TestOption.model$RC_2f1fa286086ef49a57d42b377e43e2fe"], function(exports, OSRuntimeCore, TestOptionModel) {
    var OS = OSRuntimeCore;
    class RL_5ddf9a7e5d07e2f9a3a8f4f679e3090c extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return TestOptionModel.RC_2f1fa286086ef49a57d42b377e43e2fe;
        }

    }

    TestOptionModel.RL_5ddf9a7e5d07e2f9a3a8f4f679e3090c = RL_5ddf9a7e5d07e2f9a3a8f4f679e3090c;

});

define("TestOption.model$RC_ab84a98a3ac9de80e9278e5b21681a23", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "TestOption.model", "OutSystemsUI.model$EN_52e55d60c515b6016f81404afb220594EntityRecord", "TestOption.referencesHealth", "TestOption.referencesHealth$OutSystemsUI"], function(exports, OSRuntimeCore, OutSystemsUIModel, TestOptionModel) {
    var OS = OSRuntimeCore; {
        class RC_ab84a98a3ac9de80e9278e5b21681a23Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Trigger", "triggerAttr", "Trigger", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_52e55d60c515b6016f81404afb220594EntityRecord());
                    }, true, OutSystemsUIModel.EN_52e55d60c515b6016f81404afb220594EntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_ab84a98a3ac9de80e9278e5b21681a23(new RC_ab84a98a3ac9de80e9278e5b21681a23.RecordClass({
                    triggerAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        TestOptionModel.RC_ab84a98a3ac9de80e9278e5b21681a23 = RC_ab84a98a3ac9de80e9278e5b21681a23Inner;

        RC_ab84a98a3ac9de80e9278e5b21681a23Inner._isAnonymousRecord = true;
        RC_ab84a98a3ac9de80e9278e5b21681a23Inner.UniqueId = "ab84a98a-3ac9-de80-e927-8e5b21681a23";
        var RC_ab84a98a3ac9de80e9278e5b21681a23 = RC_ab84a98a3ac9de80e9278e5b21681a23Inner;
        RC_ab84a98a3ac9de80e9278e5b21681a23.init();
    }
});

define("TestOption.model$RL_6534465d8eaff1ed770420b9742876dc", ["exports", "@outsystems/runtime-core-js", "TestOption.model", "TestOption.model$RC_ab84a98a3ac9de80e9278e5b21681a23"], function(exports, OSRuntimeCore, TestOptionModel) {
    var OS = OSRuntimeCore;
    class RL_6534465d8eaff1ed770420b9742876dc extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return TestOptionModel.RC_ab84a98a3ac9de80e9278e5b21681a23;
        }

    }

    TestOptionModel.RL_6534465d8eaff1ed770420b9742876dc = RL_6534465d8eaff1ed770420b9742876dc;

});

define("TestOption.model$RL_687fb2cd5d428840020299399d3d7ee9", ["exports", "@outsystems/runtime-core-js", "TestOption.model", "TestOption.model$ST_c45616c54e159e1d36ad93eb2ce042faStructure"], function(exports, OSRuntimeCore, TestOptionModel) {
    var OS = OSRuntimeCore;
    class RL_687fb2cd5d428840020299399d3d7ee9 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return TestOptionModel.ST_c45616c54e159e1d36ad93eb2ce042faStructure;
        }

    }

    TestOptionModel.RL_687fb2cd5d428840020299399d3d7ee9 = RL_687fb2cd5d428840020299399d3d7ee9;

});

define("TestOption.model$ST_c36261fd765e83fd0333780cb7114940Structure", ["exports", "@outsystems/runtime-core-js", "TestOption.model"], function(exports, OSRuntimeCore, TestOptionModel) {
    var OS = OSRuntimeCore; {
        class ST_c36261fd765e83fd0333780cb7114940StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Href", "hrefAttr", "href", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Rel", "relAttr", "rel", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Method", "methodAttr", "method", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        TestOptionModel.ST_c36261fd765e83fd0333780cb7114940Structure = ST_c36261fd765e83fd0333780cb7114940StructureInner;

        var ST_c36261fd765e83fd0333780cb7114940Structure = ST_c36261fd765e83fd0333780cb7114940StructureInner;
        ST_c36261fd765e83fd0333780cb7114940Structure.init();
    }
});

define("TestOption.model$RL_ac3f87904a841589f9d496635135f367", ["exports", "@outsystems/runtime-core-js", "TestOption.model", "TestOption.model$ST_c36261fd765e83fd0333780cb7114940Structure"], function(exports, OSRuntimeCore, TestOptionModel) {
    var OS = OSRuntimeCore;
    class RL_ac3f87904a841589f9d496635135f367 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return TestOptionModel.ST_c36261fd765e83fd0333780cb7114940Structure;
        }

    }

    TestOptionModel.RL_ac3f87904a841589f9d496635135f367 = RL_ac3f87904a841589f9d496635135f367;

});

define("TestOption.model$ST_c17e2a53c59b5eb4fe40f073c24160f5Structure", ["exports", "@outsystems/runtime-core-js", "TestOption.model", "TestOption.model$ST_d018318373a23012db6d09a8bc11c438Structure", "TestOption.model$ST_071faca83108779d9cc29003158a563bStructure", "TestOption.model$ST_c45616c54e159e1d36ad93eb2ce042faStructure", "TestOption.model$ST_c36261fd765e83fd0333780cb7114940Structure", "TestOption.model$RL_ac3f87904a841589f9d496635135f367"], function(exports, OSRuntimeCore, TestOptionModel) {
    var OS = OSRuntimeCore; {
        class ST_c17e2a53c59b5eb4fe40f073c24160f5StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Id", "idAttr", "id", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Country", "countryAttr", "country", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("DisplayName", "displayNameAttr", "displayName", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Name", "nameAttr", "name", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new TestOptionModel.ST_d018318373a23012db6d09a8bc11c438Structure());
                    }, true, TestOptionModel.ST_d018318373a23012db6d09a8bc11c438Structure),
                    this.attr("Score", "scoreAttr", "score", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new TestOptionModel.ST_071faca83108779d9cc29003158a563bStructure());
                    }, true, TestOptionModel.ST_071faca83108779d9cc29003158a563bStructure),
                    this.attr("Status", "statusAttr", "status", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("WebsiteUrl", "websiteUrlAttr", "websiteUrl", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("NumberOfReviews", "numberOfReviewsAttr", "numberOfReviews", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new TestOptionModel.ST_c45616c54e159e1d36ad93eb2ce042faStructure());
                    }, true, TestOptionModel.ST_c45616c54e159e1d36ad93eb2ce042faStructure),
                    this.attr("Links", "linksAttr", "links", false, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new TestOptionModel.RL_ac3f87904a841589f9d496635135f367());
                    }, true, TestOptionModel.RL_ac3f87904a841589f9d496635135f367)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        TestOptionModel.ST_c17e2a53c59b5eb4fe40f073c24160f5Structure = ST_c17e2a53c59b5eb4fe40f073c24160f5StructureInner;

        var ST_c17e2a53c59b5eb4fe40f073c24160f5Structure = ST_c17e2a53c59b5eb4fe40f073c24160f5StructureInner;
        ST_c17e2a53c59b5eb4fe40f073c24160f5Structure.init();
    }
});

define("TestOption.model$RL_69e6beb13f64708fbb5262de2629a712", ["exports", "@outsystems/runtime-core-js", "TestOption.model", "TestOption.model$ST_c17e2a53c59b5eb4fe40f073c24160f5Structure"], function(exports, OSRuntimeCore, TestOptionModel) {
    var OS = OSRuntimeCore;
    class RL_69e6beb13f64708fbb5262de2629a712 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return TestOptionModel.ST_c17e2a53c59b5eb4fe40f073c24160f5Structure;
        }

    }

    TestOptionModel.RL_69e6beb13f64708fbb5262de2629a712 = RL_69e6beb13f64708fbb5262de2629a712;

});

define("TestOption.model$RC_7096ca0099728124fcaff6ac0bf8440c", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "TestOption.model", "RESTAPIWebsocketOfficial.model$ST_6669f981cb8653c55787de44bdd42a18Structure", "TestOption.referencesHealth", "TestOption.referencesHealth$RESTAPIWebsocketOfficial"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, TestOptionModel) {
    var OS = OSRuntimeCore; {
        class RC_7096ca0099728124fcaff6ac0bf8440cInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Service", "serviceAttr", "Service2", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_6669f981cb8653c55787de44bdd42a18Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_6669f981cb8653c55787de44bdd42a18Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_7096ca0099728124fcaff6ac0bf8440c(new RC_7096ca0099728124fcaff6ac0bf8440c.RecordClass({
                    serviceAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        TestOptionModel.RC_7096ca0099728124fcaff6ac0bf8440c = RC_7096ca0099728124fcaff6ac0bf8440cInner;

        RC_7096ca0099728124fcaff6ac0bf8440cInner._isAnonymousRecord = true;
        RC_7096ca0099728124fcaff6ac0bf8440cInner.UniqueId = "7096ca00-9972-8124-fcaf-f6ac0bf8440c";
        var RC_7096ca0099728124fcaff6ac0bf8440c = RC_7096ca0099728124fcaff6ac0bf8440cInner;
        RC_7096ca0099728124fcaff6ac0bf8440c.init();
    }
});

define("TestOption.model$RC_72deccc4588dd4c59ea212c47055f933", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "TestOption.model", "RESTAPIWebsocketOfficial.model$ST_bf5d4ab423fae3ff38a977653adc8398Structure", "TestOption.referencesHealth", "TestOption.referencesHealth$RESTAPIWebsocketOfficial"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, TestOptionModel) {
    var OS = OSRuntimeCore; {
        class RC_72deccc4588dd4c59ea212c47055f933Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Residence_listItem", "residence_listItemAttr", "Residence_listItem", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_bf5d4ab423fae3ff38a977653adc8398Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_bf5d4ab423fae3ff38a977653adc8398Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_72deccc4588dd4c59ea212c47055f933(new RC_72deccc4588dd4c59ea212c47055f933.RecordClass({
                    residence_listItemAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        TestOptionModel.RC_72deccc4588dd4c59ea212c47055f933 = RC_72deccc4588dd4c59ea212c47055f933Inner;

        RC_72deccc4588dd4c59ea212c47055f933Inner._isAnonymousRecord = true;
        RC_72deccc4588dd4c59ea212c47055f933Inner.UniqueId = "72deccc4-588d-d4c5-9ea2-12c47055f933";
        var RC_72deccc4588dd4c59ea212c47055f933 = RC_72deccc4588dd4c59ea212c47055f933Inner;
        RC_72deccc4588dd4c59ea212c47055f933.init();
    }
});

define("TestOption.model$RL_7a61959884cd1d97a8df26308775a5c7", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "TestOption.model", "RESTAPIWebsocketOfficial.model$ST_d845e9af38689337f2bff5d766253a88Structure", "TestOption.referencesHealth", "TestOption.referencesHealth$RESTAPIWebsocketOfficial"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, TestOptionModel) {
    var OS = OSRuntimeCore;
    class RL_7a61959884cd1d97a8df26308775a5c7 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_d845e9af38689337f2bff5d766253a88Structure;
        }

    }

    TestOptionModel.RL_7a61959884cd1d97a8df26308775a5c7 = RL_7a61959884cd1d97a8df26308775a5c7;

});

define("TestOption.model$RL_7ea0e409b1b42e8e6d7ca54869209a73", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "TestOption.model", "RESTAPIWebsocketOfficial.model$ST_55ea19c18b42991c3f5575c063ad7ca7Structure", "TestOption.referencesHealth", "TestOption.referencesHealth$RESTAPIWebsocketOfficial"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, TestOptionModel) {
    var OS = OSRuntimeCore;
    class RL_7ea0e409b1b42e8e6d7ca54869209a73 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_55ea19c18b42991c3f5575c063ad7ca7Structure;
        }

    }

    TestOptionModel.RL_7ea0e409b1b42e8e6d7ca54869209a73 = RL_7ea0e409b1b42e8e6d7ca54869209a73;

});

define("TestOption.model$RL_81d2bc71eb1c605f53ae134ad3caa1c0", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "TestOption.model", "RESTAPIWebsocketOfficial.model$ST_8812c3cbc0a0d322acb5354526a670b4Structure", "TestOption.referencesHealth", "TestOption.referencesHealth$RESTAPIWebsocketOfficial"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, TestOptionModel) {
    var OS = OSRuntimeCore;
    class RL_81d2bc71eb1c605f53ae134ad3caa1c0 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_8812c3cbc0a0d322acb5354526a670b4Structure;
        }

    }

    TestOptionModel.RL_81d2bc71eb1c605f53ae134ad3caa1c0 = RL_81d2bc71eb1c605f53ae134ad3caa1c0;

});

define("TestOption.model$RC_890f16fe63a6b66b2130ac1a285dc1bf", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "TestOption.model", "RESTAPIWebsocketOfficial.model$ST_d845e9af38689337f2bff5d766253a88Structure", "TestOption.referencesHealth", "TestOption.referencesHealth$RESTAPIWebsocketOfficial"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, TestOptionModel) {
    var OS = OSRuntimeCore; {
        class RC_890f16fe63a6b66b2130ac1a285dc1bfInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("RiskLevel_LandingCompany", "riskLevel_LandingCompanyAttr", "RiskLevel_LandingCompany", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_d845e9af38689337f2bff5d766253a88Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_d845e9af38689337f2bff5d766253a88Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_890f16fe63a6b66b2130ac1a285dc1bf(new RC_890f16fe63a6b66b2130ac1a285dc1bf.RecordClass({
                    riskLevel_LandingCompanyAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        TestOptionModel.RC_890f16fe63a6b66b2130ac1a285dc1bf = RC_890f16fe63a6b66b2130ac1a285dc1bfInner;

        RC_890f16fe63a6b66b2130ac1a285dc1bfInner._isAnonymousRecord = true;
        RC_890f16fe63a6b66b2130ac1a285dc1bfInner.UniqueId = "890f16fe-63a6-b66b-2130-ac1a285dc1bf";
        var RC_890f16fe63a6b66b2130ac1a285dc1bf = RC_890f16fe63a6b66b2130ac1a285dc1bfInner;
        RC_890f16fe63a6b66b2130ac1a285dc1bf.init();
    }
});

define("TestOption.model$RL_855c9279ae87db4555d2fbb8ba90afc5", ["exports", "@outsystems/runtime-core-js", "TestOption.model", "TestOption.model$RC_890f16fe63a6b66b2130ac1a285dc1bf"], function(exports, OSRuntimeCore, TestOptionModel) {
    var OS = OSRuntimeCore;
    class RL_855c9279ae87db4555d2fbb8ba90afc5 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return TestOptionModel.RC_890f16fe63a6b66b2130ac1a285dc1bf;
        }

    }

    TestOptionModel.RL_855c9279ae87db4555d2fbb8ba90afc5 = RL_855c9279ae87db4555d2fbb8ba90afc5;

});

define("TestOption.model$RC_87351e3b0fa2ca59cf6c6749c6405006", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "TestOption.model", "OutSystemsUI.model$EN_849d11ab47adc426b5ce8d8c815c4fbfEntityRecord", "TestOption.referencesHealth", "TestOption.referencesHealth$OutSystemsUI"], function(exports, OSRuntimeCore, OutSystemsUIModel, TestOptionModel) {
    var OS = OSRuntimeCore; {
        class RC_87351e3b0fa2ca59cf6c6749c6405006Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Color", "colorAttr", "Color", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_849d11ab47adc426b5ce8d8c815c4fbfEntityRecord());
                    }, true, OutSystemsUIModel.EN_849d11ab47adc426b5ce8d8c815c4fbfEntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_87351e3b0fa2ca59cf6c6749c6405006(new RC_87351e3b0fa2ca59cf6c6749c6405006.RecordClass({
                    colorAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        TestOptionModel.RC_87351e3b0fa2ca59cf6c6749c6405006 = RC_87351e3b0fa2ca59cf6c6749c6405006Inner;

        RC_87351e3b0fa2ca59cf6c6749c6405006Inner._isAnonymousRecord = true;
        RC_87351e3b0fa2ca59cf6c6749c6405006Inner.UniqueId = "87351e3b-0fa2-ca59-cf6c-6749c6405006";
        var RC_87351e3b0fa2ca59cf6c6749c6405006 = RC_87351e3b0fa2ca59cf6c6749c6405006Inner;
        RC_87351e3b0fa2ca59cf6c6749c6405006.init();
    }
});

define("TestOption.model$RL_8add23b891a53c086b7017fd4cdd211b", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "TestOption.model", "OutSystemsUI.model$EN_a14a98f7fea6a66cbe59ce2905b45c09EntityRecord", "TestOption.referencesHealth", "TestOption.referencesHealth$OutSystemsUI"], function(exports, OSRuntimeCore, OutSystemsUIModel, TestOptionModel) {
    var OS = OSRuntimeCore;
    class RL_8add23b891a53c086b7017fd4cdd211b extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.EN_a14a98f7fea6a66cbe59ce2905b45c09EntityRecord;
        }

    }

    TestOptionModel.RL_8add23b891a53c086b7017fd4cdd211b = RL_8add23b891a53c086b7017fd4cdd211b;

});

define("TestOption.model$RL_8b3193777919a00b12740a1aa0e7a669", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "TestOption.model", "RESTAPIWebsocketOfficial.model$ST_30cf47a274820f1ac96cf412803888fdStructure", "TestOption.referencesHealth", "TestOption.referencesHealth$RESTAPIWebsocketOfficial"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, TestOptionModel) {
    var OS = OSRuntimeCore;
    class RL_8b3193777919a00b12740a1aa0e7a669 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_30cf47a274820f1ac96cf412803888fdStructure;
        }

    }

    TestOptionModel.RL_8b3193777919a00b12740a1aa0e7a669 = RL_8b3193777919a00b12740a1aa0e7a669;

});

define("TestOption.model$RC_8ccc091579545400bb5558b597337647", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "TestOption.model", "RESTAPIWebsocketOfficial.model$ST_803bffb999fad6a38040b2086877902eStructure", "TestOption.referencesHealth", "TestOption.referencesHealth$RESTAPIWebsocketOfficial"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, TestOptionModel) {
    var OS = OSRuntimeCore; {
        class RC_8ccc091579545400bb5558b597337647Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Passport", "passportAttr", "Passport", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_803bffb999fad6a38040b2086877902eStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_803bffb999fad6a38040b2086877902eStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_8ccc091579545400bb5558b597337647(new RC_8ccc091579545400bb5558b597337647.RecordClass({
                    passportAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        TestOptionModel.RC_8ccc091579545400bb5558b597337647 = RC_8ccc091579545400bb5558b597337647Inner;

        RC_8ccc091579545400bb5558b597337647Inner._isAnonymousRecord = true;
        RC_8ccc091579545400bb5558b597337647Inner.UniqueId = "8ccc0915-7954-5400-bb55-58b597337647";
        var RC_8ccc091579545400bb5558b597337647 = RC_8ccc091579545400bb5558b597337647Inner;
        RC_8ccc091579545400bb5558b597337647.init();
    }
});

define("TestOption.model$RC_f4575fa8420f17fe2af7078b51ca1523", ["exports", "@outsystems/runtime-core-js", "TestOption.model", "TestOption.model$ST_071faca83108779d9cc29003158a563bStructure"], function(exports, OSRuntimeCore, TestOptionModel) {
    var OS = OSRuntimeCore; {
        class RC_f4575fa8420f17fe2af7078b51ca1523Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Score", "scoreAttr", "Score", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new TestOptionModel.ST_071faca83108779d9cc29003158a563bStructure());
                    }, true, TestOptionModel.ST_071faca83108779d9cc29003158a563bStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_f4575fa8420f17fe2af7078b51ca1523(new RC_f4575fa8420f17fe2af7078b51ca1523.RecordClass({
                    scoreAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        TestOptionModel.RC_f4575fa8420f17fe2af7078b51ca1523 = RC_f4575fa8420f17fe2af7078b51ca1523Inner;

        RC_f4575fa8420f17fe2af7078b51ca1523Inner._isAnonymousRecord = true;
        RC_f4575fa8420f17fe2af7078b51ca1523Inner.UniqueId = "f4575fa8-420f-17fe-2af7-078b51ca1523";
        var RC_f4575fa8420f17fe2af7078b51ca1523 = RC_f4575fa8420f17fe2af7078b51ca1523Inner;
        RC_f4575fa8420f17fe2af7078b51ca1523.init();
    }
});

define("TestOption.model$RL_8ef8a24f57d2a5e2c33e754849b8e249", ["exports", "@outsystems/runtime-core-js", "TestOption.model", "TestOption.model$RC_f4575fa8420f17fe2af7078b51ca1523"], function(exports, OSRuntimeCore, TestOptionModel) {
    var OS = OSRuntimeCore;
    class RL_8ef8a24f57d2a5e2c33e754849b8e249 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return TestOptionModel.RC_f4575fa8420f17fe2af7078b51ca1523;
        }

    }

    TestOptionModel.RL_8ef8a24f57d2a5e2c33e754849b8e249 = RL_8ef8a24f57d2a5e2c33e754849b8e249;

});

define("TestOption.model$RL_97e8f3375611a96a6012eed05d91f59d", ["exports", "@outsystems/runtime-core-js", "TestOption.model", "TestOption.model$RC_8ccc091579545400bb5558b597337647"], function(exports, OSRuntimeCore, TestOptionModel) {
    var OS = OSRuntimeCore;
    class RL_97e8f3375611a96a6012eed05d91f59d extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return TestOptionModel.RC_8ccc091579545400bb5558b597337647;
        }

    }

    TestOptionModel.RL_97e8f3375611a96a6012eed05d91f59d = RL_97e8f3375611a96a6012eed05d91f59d;

});

define("TestOption.model$RL_9bbf3501c857fa771241aed7c9717166", ["exports", "@outsystems/runtime-core-js", "TestOption.model", "TestOption.model$RC_51c73f641f2d05540b68c15e7660196f"], function(exports, OSRuntimeCore, TestOptionModel) {
    var OS = OSRuntimeCore;
    class RL_9bbf3501c857fa771241aed7c9717166 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return TestOptionModel.RC_51c73f641f2d05540b68c15e7660196f;
        }

    }

    TestOptionModel.RL_9bbf3501c857fa771241aed7c9717166 = RL_9bbf3501c857fa771241aed7c9717166;

});

define("TestOption.model$RL_9e8eb507fc82c7005600a2499b6a668c", ["exports", "@outsystems/runtime-core-js", "TestOption.model", "TestOption.model$RC_87351e3b0fa2ca59cf6c6749c6405006"], function(exports, OSRuntimeCore, TestOptionModel) {
    var OS = OSRuntimeCore;
    class RL_9e8eb507fc82c7005600a2499b6a668c extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return TestOptionModel.RC_87351e3b0fa2ca59cf6c6749c6405006;
        }

    }

    TestOptionModel.RL_9e8eb507fc82c7005600a2499b6a668c = RL_9e8eb507fc82c7005600a2499b6a668c;

});

define("TestOption.model$RC_b8dcdbbbca3dd9364db5649239c16f05", ["exports", "@outsystems/runtime-core-js", "TestOption.model", "TestOption.model$ST_c36261fd765e83fd0333780cb7114940Structure"], function(exports, OSRuntimeCore, TestOptionModel) {
    var OS = OSRuntimeCore; {
        class RC_b8dcdbbbca3dd9364db5649239c16f05Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("LinkItem", "linkItemAttr", "LinkItem", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new TestOptionModel.ST_c36261fd765e83fd0333780cb7114940Structure());
                    }, true, TestOptionModel.ST_c36261fd765e83fd0333780cb7114940Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_b8dcdbbbca3dd9364db5649239c16f05(new RC_b8dcdbbbca3dd9364db5649239c16f05.RecordClass({
                    linkItemAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        TestOptionModel.RC_b8dcdbbbca3dd9364db5649239c16f05 = RC_b8dcdbbbca3dd9364db5649239c16f05Inner;

        RC_b8dcdbbbca3dd9364db5649239c16f05Inner._isAnonymousRecord = true;
        RC_b8dcdbbbca3dd9364db5649239c16f05Inner.UniqueId = "b8dcdbbb-ca3d-d936-4db5-649239c16f05";
        var RC_b8dcdbbbca3dd9364db5649239c16f05 = RC_b8dcdbbbca3dd9364db5649239c16f05Inner;
        RC_b8dcdbbbca3dd9364db5649239c16f05.init();
    }
});

define("TestOption.model$RL_9ec1151af5e00ea82f93557a2b27b162", ["exports", "@outsystems/runtime-core-js", "TestOption.model", "TestOption.model$RC_b8dcdbbbca3dd9364db5649239c16f05"], function(exports, OSRuntimeCore, TestOptionModel) {
    var OS = OSRuntimeCore;
    class RL_9ec1151af5e00ea82f93557a2b27b162 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return TestOptionModel.RC_b8dcdbbbca3dd9364db5649239c16f05;
        }

    }

    TestOptionModel.RL_9ec1151af5e00ea82f93557a2b27b162 = RL_9ec1151af5e00ea82f93557a2b27b162;

});

define("TestOption.model$RL_b12f7a71666929e6ceec6559f200d213", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "TestOption.model", "RESTAPIWebsocketOfficial.model$ST_1c923b28044712e7268167783ecfdfbeStructure", "TestOption.referencesHealth", "TestOption.referencesHealth$RESTAPIWebsocketOfficial"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, TestOptionModel) {
    var OS = OSRuntimeCore;
    class RL_b12f7a71666929e6ceec6559f200d213 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_1c923b28044712e7268167783ecfdfbeStructure;
        }

    }

    TestOptionModel.RL_b12f7a71666929e6ceec6559f200d213 = RL_b12f7a71666929e6ceec6559f200d213;

});

define("TestOption.model$RL_b7a05579761da982186db0cb56ca5900", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "TestOption.model", "RESTAPIWebsocketOfficial.model$ST_9eb2d1268b055c9ba20852d2758a5050Structure", "TestOption.referencesHealth", "TestOption.referencesHealth$RESTAPIWebsocketOfficial"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, TestOptionModel) {
    var OS = OSRuntimeCore;
    class RL_b7a05579761da982186db0cb56ca5900 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_9eb2d1268b055c9ba20852d2758a5050Structure;
        }

    }

    TestOptionModel.RL_b7a05579761da982186db0cb56ca5900 = RL_b7a05579761da982186db0cb56ca5900;

});

define("TestOption.model$RL_d020274c0ef0b03336f86133d39e8e5d", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "TestOption.model", "RESTAPIWebsocketOfficial.model$ST_c77c7364c5e093c1d601fe854bbf1fd7Structure", "TestOption.referencesHealth", "TestOption.referencesHealth$RESTAPIWebsocketOfficial"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, TestOptionModel) {
    var OS = OSRuntimeCore;
    class RL_d020274c0ef0b03336f86133d39e8e5d extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_c77c7364c5e093c1d601fe854bbf1fd7Structure;
        }

    }

    TestOptionModel.RL_d020274c0ef0b03336f86133d39e8e5d = RL_d020274c0ef0b03336f86133d39e8e5d;

});

define("TestOption.model$RC_d0c5186435c6e13a4cea5b3198558ec0", ["exports", "@outsystems/runtime-core-js", "TestOption.model", "TestOption.model$ST_c17e2a53c59b5eb4fe40f073c24160f5Structure"], function(exports, OSRuntimeCore, TestOptionModel) {
    var OS = OSRuntimeCore; {
        class RC_d0c5186435c6e13a4cea5b3198558ec0Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("GetFindResponse", "getFindResponseAttr", "GetFindResponse", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new TestOptionModel.ST_c17e2a53c59b5eb4fe40f073c24160f5Structure());
                    }, true, TestOptionModel.ST_c17e2a53c59b5eb4fe40f073c24160f5Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_d0c5186435c6e13a4cea5b3198558ec0(new RC_d0c5186435c6e13a4cea5b3198558ec0.RecordClass({
                    getFindResponseAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        TestOptionModel.RC_d0c5186435c6e13a4cea5b3198558ec0 = RC_d0c5186435c6e13a4cea5b3198558ec0Inner;

        RC_d0c5186435c6e13a4cea5b3198558ec0Inner._isAnonymousRecord = true;
        RC_d0c5186435c6e13a4cea5b3198558ec0Inner.UniqueId = "d0c51864-35c6-e13a-4cea-5b3198558ec0";
        var RC_d0c5186435c6e13a4cea5b3198558ec0 = RC_d0c5186435c6e13a4cea5b3198558ec0Inner;
        RC_d0c5186435c6e13a4cea5b3198558ec0.init();
    }
});

define("TestOption.model$RL_d24415aae8bc2d864868eb4166823bd0", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "TestOption.model", "OutSystemsUI.model$EN_849d11ab47adc426b5ce8d8c815c4fbfEntityRecord", "TestOption.referencesHealth", "TestOption.referencesHealth$OutSystemsUI"], function(exports, OSRuntimeCore, OutSystemsUIModel, TestOptionModel) {
    var OS = OSRuntimeCore;
    class RL_d24415aae8bc2d864868eb4166823bd0 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.EN_849d11ab47adc426b5ce8d8c815c4fbfEntityRecord;
        }

    }

    TestOptionModel.RL_d24415aae8bc2d864868eb4166823bd0 = RL_d24415aae8bc2d864868eb4166823bd0;

});

define("TestOption.model$RC_da31320f88166d864fc396c0fddbecc9", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "TestOption.model", "RESTAPIWebsocketOfficial.model$ST_c77c7364c5e093c1d601fe854bbf1fd7Structure", "TestOption.referencesHealth", "TestOption.referencesHealth$RESTAPIWebsocketOfficial"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, TestOptionModel) {
    var OS = OSRuntimeCore; {
        class RC_da31320f88166d864fc396c0fddbecc9Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Risk_level", "risk_levelAttr", "Risk_level", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_c77c7364c5e093c1d601fe854bbf1fd7Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_c77c7364c5e093c1d601fe854bbf1fd7Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_da31320f88166d864fc396c0fddbecc9(new RC_da31320f88166d864fc396c0fddbecc9.RecordClass({
                    risk_levelAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        TestOptionModel.RC_da31320f88166d864fc396c0fddbecc9 = RC_da31320f88166d864fc396c0fddbecc9Inner;

        RC_da31320f88166d864fc396c0fddbecc9Inner._isAnonymousRecord = true;
        RC_da31320f88166d864fc396c0fddbecc9Inner.UniqueId = "da31320f-8816-6d86-4fc3-96c0fddbecc9";
        var RC_da31320f88166d864fc396c0fddbecc9 = RC_da31320f88166d864fc396c0fddbecc9Inner;
        RC_da31320f88166d864fc396c0fddbecc9.init();
    }
});

define("TestOption.model$RL_d40367d2d21dcbcbaa0f7166365925a3", ["exports", "@outsystems/runtime-core-js", "TestOption.model", "TestOption.model$RC_da31320f88166d864fc396c0fddbecc9"], function(exports, OSRuntimeCore, TestOptionModel) {
    var OS = OSRuntimeCore;
    class RL_d40367d2d21dcbcbaa0f7166365925a3 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return TestOptionModel.RC_da31320f88166d864fc396c0fddbecc9;
        }

    }

    TestOptionModel.RL_d40367d2d21dcbcbaa0f7166365925a3 = RL_d40367d2d21dcbcbaa0f7166365925a3;

});

define("TestOption.model$RL_d7cde0d346486a854aee07525f121a90", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "TestOption.model", "OutSystemsUI.model$EN_5d1279724e719322292e34ef3c5500a0EntityRecord", "TestOption.referencesHealth", "TestOption.referencesHealth$OutSystemsUI"], function(exports, OSRuntimeCore, OutSystemsUIModel, TestOptionModel) {
    var OS = OSRuntimeCore;
    class RL_d7cde0d346486a854aee07525f121a90 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.EN_5d1279724e719322292e34ef3c5500a0EntityRecord;
        }

    }

    TestOptionModel.RL_d7cde0d346486a854aee07525f121a90 = RL_d7cde0d346486a854aee07525f121a90;

});

define("TestOption.model$RL_dba1429f774712c36d3ea0b48ab6b63d", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "TestOption.model", "RESTAPIWebsocketOfficial.model$ST_709b151c5172b8ff1042e5fecf4be0ecStructure", "TestOption.referencesHealth", "TestOption.referencesHealth$RESTAPIWebsocketOfficial"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, TestOptionModel) {
    var OS = OSRuntimeCore;
    class RL_dba1429f774712c36d3ea0b48ab6b63d extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_709b151c5172b8ff1042e5fecf4be0ecStructure;
        }

    }

    TestOptionModel.RL_dba1429f774712c36d3ea0b48ab6b63d = RL_dba1429f774712c36d3ea0b48ab6b63d;

});

define("TestOption.model$RC_e0e41cb94b033378d9153e95b9660ef9", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "TestOption.model", "RESTAPIWebsocketOfficial.model$ST_3b8df1b0da2c2bbfdff9bb6416b86701Structure", "TestOption.referencesHealth", "TestOption.referencesHealth$RESTAPIWebsocketOfficial"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, TestOptionModel) {
    var OS = OSRuntimeCore; {
        class RC_e0e41cb94b033378d9153e95b9660ef9Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Document_type", "document_typeAttr", "Document_type", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_3b8df1b0da2c2bbfdff9bb6416b86701Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_3b8df1b0da2c2bbfdff9bb6416b86701Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_e0e41cb94b033378d9153e95b9660ef9(new RC_e0e41cb94b033378d9153e95b9660ef9.RecordClass({
                    document_typeAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        TestOptionModel.RC_e0e41cb94b033378d9153e95b9660ef9 = RC_e0e41cb94b033378d9153e95b9660ef9Inner;

        RC_e0e41cb94b033378d9153e95b9660ef9Inner._isAnonymousRecord = true;
        RC_e0e41cb94b033378d9153e95b9660ef9Inner.UniqueId = "e0e41cb9-4b03-3378-d915-3e95b9660ef9";
        var RC_e0e41cb94b033378d9153e95b9660ef9 = RC_e0e41cb94b033378d9153e95b9660ef9Inner;
        RC_e0e41cb94b033378d9153e95b9660ef9.init();
    }
});

define("TestOption.model$RL_e17c98c9ebad9849b38663a52005be50", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "TestOption.model", "RESTAPIWebsocketOfficial.model$ST_a37989da54adde60afe7657f5bc1d06eStructure", "TestOption.referencesHealth", "TestOption.referencesHealth$RESTAPIWebsocketOfficial"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, TestOptionModel) {
    var OS = OSRuntimeCore;
    class RL_e17c98c9ebad9849b38663a52005be50 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_a37989da54adde60afe7657f5bc1d06eStructure;
        }

    }

    TestOptionModel.RL_e17c98c9ebad9849b38663a52005be50 = RL_e17c98c9ebad9849b38663a52005be50;

});

define("TestOption.model$RL_e377a277aec73abf25e2c35110f340eb", ["exports", "@outsystems/runtime-core-js", "TestOption.model", "TestOption.model$RC_72deccc4588dd4c59ea212c47055f933"], function(exports, OSRuntimeCore, TestOptionModel) {
    var OS = OSRuntimeCore;
    class RL_e377a277aec73abf25e2c35110f340eb extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return TestOptionModel.RC_72deccc4588dd4c59ea212c47055f933;
        }

    }

    TestOptionModel.RL_e377a277aec73abf25e2c35110f340eb = RL_e377a277aec73abf25e2c35110f340eb;

});

define("TestOption.model$RL_f15b302598caef69c6cdd4e0690795f9", ["exports", "@outsystems/runtime-core-js", "TestOption.model", "TestOption.model$RC_7096ca0099728124fcaff6ac0bf8440c"], function(exports, OSRuntimeCore, TestOptionModel) {
    var OS = OSRuntimeCore;
    class RL_f15b302598caef69c6cdd4e0690795f9 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return TestOptionModel.RC_7096ca0099728124fcaff6ac0bf8440c;
        }

    }

    TestOptionModel.RL_f15b302598caef69c6cdd4e0690795f9 = RL_f15b302598caef69c6cdd4e0690795f9;

});

define("TestOption.model$RL_f1766ca2c24d7ab3ba0e8b5c694ed993", ["exports", "@outsystems/runtime-core-js", "TestOption.model", "TestOption.model$RC_d0c5186435c6e13a4cea5b3198558ec0"], function(exports, OSRuntimeCore, TestOptionModel) {
    var OS = OSRuntimeCore;
    class RL_f1766ca2c24d7ab3ba0e8b5c694ed993 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return TestOptionModel.RC_d0c5186435c6e13a4cea5b3198558ec0;
        }

    }

    TestOptionModel.RL_f1766ca2c24d7ab3ba0e8b5c694ed993 = RL_f1766ca2c24d7ab3ba0e8b5c694ed993;

});

define("TestOption.model$RL_f3628f0b59cf5462304c3ee554b26911", ["exports", "@outsystems/runtime-core-js", "TestOption.model", "TestOption.model$RC_4269919ca89fe70e97b62528dc7b74af"], function(exports, OSRuntimeCore, TestOptionModel) {
    var OS = OSRuntimeCore;
    class RL_f3628f0b59cf5462304c3ee554b26911 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return TestOptionModel.RC_4269919ca89fe70e97b62528dc7b74af;
        }

    }

    TestOptionModel.RL_f3628f0b59cf5462304c3ee554b26911 = RL_f3628f0b59cf5462304c3ee554b26911;

});

define("TestOption.model$RL_f7b72ce0535929c46c80c80b2b36c95b", ["exports", "@outsystems/runtime-core-js", "TestOption.model", "TestOption.model$ST_d018318373a23012db6d09a8bc11c438Structure"], function(exports, OSRuntimeCore, TestOptionModel) {
    var OS = OSRuntimeCore;
    class RL_f7b72ce0535929c46c80c80b2b36c95b extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return TestOptionModel.ST_d018318373a23012db6d09a8bc11c438Structure;
        }

    }

    TestOptionModel.RL_f7b72ce0535929c46c80c80b2b36c95b = RL_f7b72ce0535929c46c80c80b2b36c95b;

});

define("TestOption.model$RL_f8eb431cfa3719b526bb3d4eaa81a60a", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "TestOption.model", "RESTAPIWebsocketOfficial.model$ST_63a473e932ef99f5271718b62399e682Structure", "TestOption.referencesHealth", "TestOption.referencesHealth$RESTAPIWebsocketOfficial"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel, TestOptionModel) {
    var OS = OSRuntimeCore;
    class RL_f8eb431cfa3719b526bb3d4eaa81a60a extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_63a473e932ef99f5271718b62399e682Structure;
        }

    }

    TestOptionModel.RL_f8eb431cfa3719b526bb3d4eaa81a60a = RL_f8eb431cfa3719b526bb3d4eaa81a60a;

});

define("TestOption.model$RL_f9cd69a99a23afb6393c39463c23b25f", ["exports", "@outsystems/runtime-core-js", "TestOption.model", "TestOption.model$RC_e0e41cb94b033378d9153e95b9660ef9"], function(exports, OSRuntimeCore, TestOptionModel) {
    var OS = OSRuntimeCore;
    class RL_f9cd69a99a23afb6393c39463c23b25f extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return TestOptionModel.RC_e0e41cb94b033378d9153e95b9660ef9;
        }

    }

    TestOptionModel.RL_f9cd69a99a23afb6393c39463c23b25f = RL_f9cd69a99a23afb6393c39463c23b25f;

});

define("TestOption.model", ["exports", "@outsystems/runtime-core-js"], function(exports, OSRuntimeCore) {
    var OS = OSRuntimeCore;
    var TestOptionModel = exports;
    Object.defineProperty(TestOptionModel, "module", {
        get: function() {
            return OS.ApplicationInfo.getModules()["95c8cd0d-e615-4470-a689-ff1a80162972"];
        }
    });

    TestOptionModel.staticEntities = {};
    TestOptionModel.staticEntities.size = {};
    var getSizeRecord = function(record) {
        return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["1ac110b4-8964-470b-a6b2-81ae4a6b5bde"][record];
    };
    Object.defineProperty(TestOptionModel.staticEntities.size, "medium", {
        get: function() {
            return "medium";
        }
    });

    Object.defineProperty(TestOptionModel.staticEntities.size, "small", {
        get: function() {
            return "small";
        }
    });

    TestOptionModel.staticEntities.position = {};
    var getPositionRecord = function(record) {
        return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["83c073e8-bac2-4122-9772-aa6e122a5d36"][record];
    };
    Object.defineProperty(TestOptionModel.staticEntities.position, "top", {
        get: function() {
            return "top";
        }
    });

    Object.defineProperty(TestOptionModel.staticEntities.position, "left", {
        get: function() {
            return "left";
        }
    });

    Object.defineProperty(TestOptionModel.staticEntities.position, "bottomRight", {
        get: function() {
            return "bottom-right";
        }
    });

    Object.defineProperty(TestOptionModel.staticEntities.position, "bottomLeft", {
        get: function() {
            return "bottom-left";
        }
    });

    Object.defineProperty(TestOptionModel.staticEntities.position, "right", {
        get: function() {
            return "right";
        }
    });

    Object.defineProperty(TestOptionModel.staticEntities.position, "topLeft", {
        get: function() {
            return "top-left";
        }
    });

    Object.defineProperty(TestOptionModel.staticEntities.position, "topRight", {
        get: function() {
            return "top-right";
        }
    });

    Object.defineProperty(TestOptionModel.staticEntities.position, "center", {
        get: function() {
            return "center";
        }
    });

    Object.defineProperty(TestOptionModel.staticEntities.position, "bottom", {
        get: function() {
            return "bottom";
        }
    });

    TestOptionModel.staticEntities.trigger = {};
    var getTriggerRecord = function(record) {
        return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["8f0912ba-c626-4795-90a6-5311e2b970cb"][record];
    };
    Object.defineProperty(TestOptionModel.staticEntities.trigger, "onClick", {
        get: function() {
            return "onclick";
        }
    });

    Object.defineProperty(TestOptionModel.staticEntities.trigger, "onHover", {
        get: function() {
            return "onhover";
        }
    });

    TestOptionModel.staticEntities.space = {};
    var getSpaceRecord = function(record) {
        return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["8fb3d471-82a4-439c-9cc1-0555dfa91451"][record];
    };
    Object.defineProperty(TestOptionModel.staticEntities.space, "large", {
        get: function() {
            return "l";
        }
    });

    Object.defineProperty(TestOptionModel.staticEntities.space, "medium", {
        get: function() {
            return "m";
        }
    });

    Object.defineProperty(TestOptionModel.staticEntities.space, "xXLarge", {
        get: function() {
            return "xxl";
        }
    });

    Object.defineProperty(TestOptionModel.staticEntities.space, "extraSmall", {
        get: function() {
            return "xs";
        }
    });

    Object.defineProperty(TestOptionModel.staticEntities.space, "small", {
        get: function() {
            return "s";
        }
    });

    Object.defineProperty(TestOptionModel.staticEntities.space, "base", {
        get: function() {
            return "base";
        }
    });

    Object.defineProperty(TestOptionModel.staticEntities.space, "extraLarge", {
        get: function() {
            return "xl";
        }
    });

    Object.defineProperty(TestOptionModel.staticEntities.space, "none", {
        get: function() {
            return "none";
        }
    });

    TestOptionModel.staticEntities.color = {};
    var getColorRecord = function(record) {
        return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["cb6d1da7-26d4-45d9-bc22-9a4c482e6ce2"][record];
    };
    Object.defineProperty(TestOptionModel.staticEntities.color, "neutral9", {
        get: function() {
            return "neutral-9";
        }
    });

    Object.defineProperty(TestOptionModel.staticEntities.color, "grape", {
        get: function() {
            return "grape";
        }
    });

    Object.defineProperty(TestOptionModel.staticEntities.color, "neutral7", {
        get: function() {
            return "neutral-7";
        }
    });

    Object.defineProperty(TestOptionModel.staticEntities.color, "neutral10", {
        get: function() {
            return "neutral-10";
        }
    });

    Object.defineProperty(TestOptionModel.staticEntities.color, "teal", {
        get: function() {
            return "teal";
        }
    });

    Object.defineProperty(TestOptionModel.staticEntities.color, "primary", {
        get: function() {
            return "primary";
        }
    });

    Object.defineProperty(TestOptionModel.staticEntities.color, "neutral4", {
        get: function() {
            return "neutral-4";
        }
    });

    Object.defineProperty(TestOptionModel.staticEntities.color, "neutral8", {
        get: function() {
            return "neutral-8";
        }
    });

    Object.defineProperty(TestOptionModel.staticEntities.color, "indigo", {
        get: function() {
            return "indigo";
        }
    });

    Object.defineProperty(TestOptionModel.staticEntities.color, "orange", {
        get: function() {
            return "orange";
        }
    });

    Object.defineProperty(TestOptionModel.staticEntities.color, "lime", {
        get: function() {
            return "lime";
        }
    });

    Object.defineProperty(TestOptionModel.staticEntities.color, "cyan", {
        get: function() {
            return "cyan";
        }
    });

    Object.defineProperty(TestOptionModel.staticEntities.color, "secondary", {
        get: function() {
            return "secondary";
        }
    });

    Object.defineProperty(TestOptionModel.staticEntities.color, "neutral6", {
        get: function() {
            return "neutral-6";
        }
    });

    Object.defineProperty(TestOptionModel.staticEntities.color, "yellow", {
        get: function() {
            return "yellow";
        }
    });

    Object.defineProperty(TestOptionModel.staticEntities.color, "neutral2", {
        get: function() {
            return "neutral-2";
        }
    });

    Object.defineProperty(TestOptionModel.staticEntities.color, "neutral1", {
        get: function() {
            return "neutral-1";
        }
    });

    Object.defineProperty(TestOptionModel.staticEntities.color, "neutral3", {
        get: function() {
            return "neutral-3";
        }
    });

    Object.defineProperty(TestOptionModel.staticEntities.color, "transparent", {
        get: function() {
            return "transparent";
        }
    });

    Object.defineProperty(TestOptionModel.staticEntities.color, "violet", {
        get: function() {
            return "violet";
        }
    });

    Object.defineProperty(TestOptionModel.staticEntities.color, "blue", {
        get: function() {
            return "blue";
        }
    });

    Object.defineProperty(TestOptionModel.staticEntities.color, "neutral5", {
        get: function() {
            return "neutral-5";
        }
    });

    Object.defineProperty(TestOptionModel.staticEntities.color, "red", {
        get: function() {
            return "red";
        }
    });

    Object.defineProperty(TestOptionModel.staticEntities.color, "pink", {
        get: function() {
            return "pink";
        }
    });

    Object.defineProperty(TestOptionModel.staticEntities.color, "green", {
        get: function() {
            return "green";
        }
    });

    Object.defineProperty(TestOptionModel.staticEntities.color, "neutral0", {
        get: function() {
            return "neutral-0";
        }
    });

});