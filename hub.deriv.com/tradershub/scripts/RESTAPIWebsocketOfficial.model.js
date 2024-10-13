define("RESTAPIWebsocketOfficial.model$BasicTypeList<Text>", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class TextList extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OS.DataTypes.DataTypes.Text;
        }

    }

    RESTAPIWebsocketOfficialModel.TextList = TextList;

});

define("RESTAPIWebsocketOfficial.model$ST_9b4c1d7f5790df008534dfd8d1c97a7cStructure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_9b4c1d7f5790df008534dfd8d1c97a7cStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Status", "statusAttr", "status", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new ST_9b4c1d7f5790df008534dfd8d1c97a7cStructure(new ST_9b4c1d7f5790df008534dfd8d1c97a7cStructure.RecordClass({
                    statusAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_9b4c1d7f5790df008534dfd8d1c97a7cStructure = ST_9b4c1d7f5790df008534dfd8d1c97a7cStructureInner;

        var ST_9b4c1d7f5790df008534dfd8d1c97a7cStructure = ST_9b4c1d7f5790df008534dfd8d1c97a7cStructureInner;
        ST_9b4c1d7f5790df008534dfd8d1c97a7cStructure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$ST_15693c4dffeb1c18ce04ec8c251678cfStructure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_9b4c1d7f5790df008534dfd8d1c97a7cStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_15693c4dffeb1c18ce04ec8c251678cfStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("NeedsVerification", "needsVerificationAttr", "needs_verification", false, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
                    }, true, OS.DataTypes.TextList),
                    this.attr("Ownership", "ownershipAttr", "ownership", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_9b4c1d7f5790df008534dfd8d1c97a7cStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_9b4c1d7f5790df008534dfd8d1c97a7cStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_15693c4dffeb1c18ce04ec8c251678cfStructure = ST_15693c4dffeb1c18ce04ec8c251678cfStructureInner;

        var ST_15693c4dffeb1c18ce04ec8c251678cfStructure = ST_15693c4dffeb1c18ce04ec8c251678cfStructureInner;
        ST_15693c4dffeb1c18ce04ec8c251678cfStructure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$ST_41688d261db663d4544900081e65767bStructure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_15693c4dffeb1c18ce04ec8c251678cfStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_41688d261db663d4544900081e65767bStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Authentication", "authenticationAttr", "authentication", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_15693c4dffeb1c18ce04ec8c251678cfStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_15693c4dffeb1c18ce04ec8c251678cfStructure),
                    this.attr("Status", "statusAttr", "status", false, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
                    }, true, OS.DataTypes.TextList)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_41688d261db663d4544900081e65767bStructure = ST_41688d261db663d4544900081e65767bStructureInner;

        var ST_41688d261db663d4544900081e65767bStructure = ST_41688d261db663d4544900081e65767bStructureInner;
        ST_41688d261db663d4544900081e65767bStructure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RC_3183b1f3faf6969c32d1f8eb3c0f8d02", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_41688d261db663d4544900081e65767bStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_3183b1f3faf6969c32d1f8eb3c0f8d02Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("GetAccountStatus", "getAccountStatusAttr", "GetAccountStatus", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_41688d261db663d4544900081e65767bStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_41688d261db663d4544900081e65767bStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_3183b1f3faf6969c32d1f8eb3c0f8d02(new RC_3183b1f3faf6969c32d1f8eb3c0f8d02.RecordClass({
                    getAccountStatusAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_3183b1f3faf6969c32d1f8eb3c0f8d02 = RC_3183b1f3faf6969c32d1f8eb3c0f8d02Inner;

        RC_3183b1f3faf6969c32d1f8eb3c0f8d02Inner._isAnonymousRecord = true;
        RC_3183b1f3faf6969c32d1f8eb3c0f8d02Inner.UniqueId = "3183b1f3-faf6-969c-32d1-f8eb3c0f8d02";
        var RC_3183b1f3faf6969c32d1f8eb3c0f8d02 = RC_3183b1f3faf6969c32d1f8eb3c0f8d02Inner;
        RC_3183b1f3faf6969c32d1f8eb3c0f8d02.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_004e51f9bad0ff9671e9f54d029f6acd", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_3183b1f3faf6969c32d1f8eb3c0f8d02"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_004e51f9bad0ff9671e9f54d029f6acd extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_3183b1f3faf6969c32d1f8eb3c0f8d02;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_004e51f9bad0ff9671e9f54d029f6acd = RL_004e51f9bad0ff9671e9f54d029f6acd;

});

define("RESTAPIWebsocketOfficial.model$ST_66a31b6dc85d7150aaf5da4cc4b359a4Structure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_66a31b6dc85d7150aaf5da4cc4b359a4StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Affiliate_token", "affiliate_tokenAttr", "affiliate_token", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Date_first_contact", "date_first_contactAttr", "date_first_contact", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Gclid_url", "gclid_urlAttr", "gclid_url", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Pa_amount", "pa_amountAttr", "pa_amount", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true),
                    this.attr("Pa_currency", "pa_currencyAttr", "pa_currency", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Pa_loginid", "pa_loginidAttr", "pa_loginid", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Pa_remarks", "pa_remarksAttr", "pa_remarks", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Redirect_to", "redirect_toAttr", "redirect_to", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true),
                    this.attr("Signup_device", "signup_deviceAttr", "signup_device", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Utm_ad_id", "utm_ad_idAttr", "utm_ad_id", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Utm_adgroup_id", "utm_adgroup_idAttr", "utm_adgroup_id", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Utm_adrollclk_id", "utm_adrollclk_idAttr", "utm_adrollclk_id", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Utm_campaign", "utm_campaignAttr", "utm_campaign", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Utm_campaign_id", "utm_campaign_idAttr", "utm_campaign_id", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Utm_content", "utm_contentAttr", "utm_content", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Utm_fbcl_id", "utm_fbcl_idAttr", "utm_fbcl_id", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Utm_gl_client_id", "utm_gl_client_idAttr", "utm_gl_client_id", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Utm_medium", "utm_mediumAttr", "utm_medium", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Utm_msclk_id", "utm_msclk_idAttr", "utm_msclk_id", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Utm_source", "utm_sourceAttr", "utm_source", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Utm_term", "utm_termAttr", "utm_term", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_66a31b6dc85d7150aaf5da4cc4b359a4Structure = ST_66a31b6dc85d7150aaf5da4cc4b359a4StructureInner;

        var ST_66a31b6dc85d7150aaf5da4cc4b359a4Structure = ST_66a31b6dc85d7150aaf5da4cc4b359a4StructureInner;
        ST_66a31b6dc85d7150aaf5da4cc4b359a4Structure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_00e1daf27d32b8b4e98978c4e9e58544", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_66a31b6dc85d7150aaf5da4cc4b359a4Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_00e1daf27d32b8b4e98978c4e9e58544 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_66a31b6dc85d7150aaf5da4cc4b359a4Structure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_00e1daf27d32b8b4e98978c4e9e58544 = RL_00e1daf27d32b8b4e98978c4e9e58544;

});

define("RESTAPIWebsocketOfficial.model$ST_333caa433a680d581b2dfdf80dcbab60Structure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_333caa433a680d581b2dfdf80dcbab60StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Invalid_pattern", "invalid_patternAttr", "invalid_pattern", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new ST_333caa433a680d581b2dfdf80dcbab60Structure(new ST_333caa433a680d581b2dfdf80dcbab60Structure.RecordClass({
                    invalid_patternAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_333caa433a680d581b2dfdf80dcbab60Structure = ST_333caa433a680d581b2dfdf80dcbab60StructureInner;

        var ST_333caa433a680d581b2dfdf80dcbab60Structure = ST_333caa433a680d581b2dfdf80dcbab60StructureInner;
        ST_333caa433a680d581b2dfdf80dcbab60Structure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RC_012b2720fb0dcd442416908af4498cef", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_333caa433a680d581b2dfdf80dcbab60Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
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

        RESTAPIWebsocketOfficialModel.RC_012b2720fb0dcd442416908af4498cef = RC_012b2720fb0dcd442416908af4498cefInner;

        RC_012b2720fb0dcd442416908af4498cefInner._isAnonymousRecord = true;
        RC_012b2720fb0dcd442416908af4498cefInner.UniqueId = "012b2720-fb0d-cd44-2416-908af4498cef";
        var RC_012b2720fb0dcd442416908af4498cef = RC_012b2720fb0dcd442416908af4498cefInner;
        RC_012b2720fb0dcd442416908af4498cef.init();
    }
});

define("RESTAPIWebsocketOfficial.model$ST_af7c8c24e0881fcad517d74c916f7352Structure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_af7c8c24e0881fcad517d74c916f7352StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Amount", "amountAttr", "amount", false, false, OS.DataTypes.DataTypes.Decimal, function() {
                        return OS.DataTypes.Decimal.defaultValue;
                    }, true),
                    this.attr("Currency", "currencyAttr", "currency", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Minimum", "minimumAttr", "minimum", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("Percentage", "percentageAttr", "percentage", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_af7c8c24e0881fcad517d74c916f7352Structure = ST_af7c8c24e0881fcad517d74c916f7352StructureInner;

        var ST_af7c8c24e0881fcad517d74c916f7352Structure = ST_af7c8c24e0881fcad517d74c916f7352StructureInner;
        ST_af7c8c24e0881fcad517d74c916f7352Structure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$ST_1427747d29628e6a194ee75a554479e4Structure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_1427747d29628e6a194ee75a554479e4StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Loginid", "loginidAttr", "loginid", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new ST_1427747d29628e6a194ee75a554479e4Structure(new ST_1427747d29628e6a194ee75a554479e4Structure.RecordClass({
                    loginidAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_1427747d29628e6a194ee75a554479e4Structure = ST_1427747d29628e6a194ee75a554479e4StructureInner;

        var ST_1427747d29628e6a194ee75a554479e4Structure = ST_1427747d29628e6a194ee75a554479e4StructureInner;
        ST_1427747d29628e6a194ee75a554479e4Structure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$ST_bf8a7e4d5139901f795596a5fbda1b90Structure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_af7c8c24e0881fcad517d74c916f7352Structure", "RESTAPIWebsocketOfficial.model$ST_1427747d29628e6a194ee75a554479e4Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_bf8a7e4d5139901f795596a5fbda1b90StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Action_type", "action_typeAttr", "action_type", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Amount", "amountAttr", "amount", false, false, OS.DataTypes.DataTypes.Decimal, function() {
                        return OS.DataTypes.Decimal.defaultValue;
                    }, true),
                    this.attr("App_id", "app_idAttr", "app_id", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("Balance_after", "balance_afterAttr", "balance_after", false, false, OS.DataTypes.DataTypes.Decimal, function() {
                        return OS.DataTypes.Decimal.defaultValue;
                    }, true),
                    this.attr("Fees", "feesAttr", "fees", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_af7c8c24e0881fcad517d74c916f7352Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_af7c8c24e0881fcad517d74c916f7352Structure),
                    this.attr("From", "fromAttr", "from", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_1427747d29628e6a194ee75a554479e4Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_1427747d29628e6a194ee75a554479e4Structure),
                    this.attr("Longcode", "longcodeAttr", "longcode", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("To", "toAttr", "to", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_1427747d29628e6a194ee75a554479e4Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_1427747d29628e6a194ee75a554479e4Structure),
                    this.attr("Transaction_id", "transaction_idAttr", "transaction_id", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("Transaction_time", "transaction_timeAttr", "transaction_time", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_bf8a7e4d5139901f795596a5fbda1b90Structure = ST_bf8a7e4d5139901f795596a5fbda1b90StructureInner;

        var ST_bf8a7e4d5139901f795596a5fbda1b90Structure = ST_bf8a7e4d5139901f795596a5fbda1b90StructureInner;
        ST_bf8a7e4d5139901f795596a5fbda1b90Structure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_1fe22685e54a8e74085b50df987ed7fb", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_bf8a7e4d5139901f795596a5fbda1b90Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_1fe22685e54a8e74085b50df987ed7fb extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_bf8a7e4d5139901f795596a5fbda1b90Structure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_1fe22685e54a8e74085b50df987ed7fb = RL_1fe22685e54a8e74085b50df987ed7fb;

});

define("RESTAPIWebsocketOfficial.model$ST_ae14fa1d3d419850de9a85b162df7c73Structure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_bf8a7e4d5139901f795596a5fbda1b90Structure", "RESTAPIWebsocketOfficial.model$RL_1fe22685e54a8e74085b50df987ed7fb"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_ae14fa1d3d419850de9a85b162df7c73StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Count", "countAttr", "count", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("Transactions", "transactionsAttr", "transactions", false, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.RL_1fe22685e54a8e74085b50df987ed7fb());
                    }, true, RESTAPIWebsocketOfficialModel.RL_1fe22685e54a8e74085b50df987ed7fb)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_ae14fa1d3d419850de9a85b162df7c73Structure = ST_ae14fa1d3d419850de9a85b162df7c73StructureInner;

        var ST_ae14fa1d3d419850de9a85b162df7c73Structure = ST_ae14fa1d3d419850de9a85b162df7c73StructureInner;
        ST_ae14fa1d3d419850de9a85b162df7c73Structure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RC_37b9abdfc5681e060cfccd92139f3527", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_ae14fa1d3d419850de9a85b162df7c73Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_37b9abdfc5681e060cfccd92139f3527Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Statement", "statementAttr", "Statement", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_ae14fa1d3d419850de9a85b162df7c73Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_ae14fa1d3d419850de9a85b162df7c73Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_37b9abdfc5681e060cfccd92139f3527(new RC_37b9abdfc5681e060cfccd92139f3527.RecordClass({
                    statementAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_37b9abdfc5681e060cfccd92139f3527 = RC_37b9abdfc5681e060cfccd92139f3527Inner;

        RC_37b9abdfc5681e060cfccd92139f3527Inner._isAnonymousRecord = true;
        RC_37b9abdfc5681e060cfccd92139f3527Inner.UniqueId = "37b9abdf-c568-1e06-0cfc-cd92139f3527";
        var RC_37b9abdfc5681e060cfccd92139f3527 = RC_37b9abdfc5681e060cfccd92139f3527Inner;
        RC_37b9abdfc5681e060cfccd92139f3527.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_016b438202bb8683ed0088796cbdae5f", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_37b9abdfc5681e060cfccd92139f3527"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_016b438202bb8683ed0088796cbdae5f extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_37b9abdfc5681e060cfccd92139f3527;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_016b438202bb8683ed0088796cbdae5f = RL_016b438202bb8683ed0088796cbdae5f;

});

define("RESTAPIWebsocketOfficial.model$ST_77d1f9105abe302fa373f146c295ea17Structure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_77d1f9105abe302fa373f146c295ea17StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Financial_assessment", "financial_assessmentAttr", "financial_assessment", false, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
                    }, true, OS.DataTypes.TextList)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new ST_77d1f9105abe302fa373f146c295ea17Structure(new ST_77d1f9105abe302fa373f146c295ea17Structure.RecordClass({
                    financial_assessmentAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_77d1f9105abe302fa373f146c295ea17Structure = ST_77d1f9105abe302fa373f146c295ea17StructureInner;

        var ST_77d1f9105abe302fa373f146c295ea17Structure = ST_77d1f9105abe302fa373f146c295ea17StructureInner;
        ST_77d1f9105abe302fa373f146c295ea17Structure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$ST_83fbd707f872e92b597918150eff1f3eStructure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_83fbd707f872e92b597918150eff1f3eStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Mt5", "mt5Attr", "mt5", false, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
                    }, true, OS.DataTypes.TextList),
                    this.attr("Tax_information", "tax_informationAttr", "tax_information", false, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
                    }, true, OS.DataTypes.TextList)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_83fbd707f872e92b597918150eff1f3eStructure = ST_83fbd707f872e92b597918150eff1f3eStructureInner;

        var ST_83fbd707f872e92b597918150eff1f3eStructure = ST_83fbd707f872e92b597918150eff1f3eStructureInner;
        ST_83fbd707f872e92b597918150eff1f3eStructure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$ST_98319758945048a72386b9e9466c220aStructure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_77d1f9105abe302fa373f146c295ea17Structure", "RESTAPIWebsocketOfficial.model$ST_83fbd707f872e92b597918150eff1f3eStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_98319758945048a72386b9e9466c220aStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Signup", "signupAttr", "signup", false, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
                    }, true, OS.DataTypes.TextList),
                    this.attr("Withdrawal", "withdrawalAttr", "withdrawal", false, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
                    }, true, OS.DataTypes.TextList),
                    this.attr("After_first_deposit", "after_first_depositAttr", "after_first_deposit", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_77d1f9105abe302fa373f146c295ea17Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_77d1f9105abe302fa373f146c295ea17Structure),
                    this.attr("Compliance", "complianceAttr", "compliance", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_83fbd707f872e92b597918150eff1f3eStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_83fbd707f872e92b597918150eff1f3eStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_98319758945048a72386b9e9466c220aStructure = ST_98319758945048a72386b9e9466c220aStructureInner;

        var ST_98319758945048a72386b9e9466c220aStructure = ST_98319758945048a72386b9e9466c220aStructureInner;
        ST_98319758945048a72386b9e9466c220aStructure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$ST_839b1aebc8b507d4259e4312bdc21d4bStructure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_839b1aebc8b507d4259e4312bdc21d4bStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Max_leverage", "max_leverageAttr", "max_leverage", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Min_spread", "min_spreadAttr", "min_spread", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_839b1aebc8b507d4259e4312bdc21d4bStructure = ST_839b1aebc8b507d4259e4312bdc21d4bStructureInner;

        var ST_839b1aebc8b507d4259e4312bdc21d4bStructure = ST_839b1aebc8b507d4259e4312bdc21d4bStructureInner;
        ST_839b1aebc8b507d4259e4312bdc21d4bStructure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$ST_9b3eaf42648c2b28591e8ee92b7ce159Structure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_98319758945048a72386b9e9466c220aStructure", "RESTAPIWebsocketOfficial.model$ST_839b1aebc8b507d4259e4312bdc21d4bStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_9b3eaf42648c2b28591e8ee92b7ce159StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Is_default_jurisdiction", "is_default_jurisdictionAttr", "is_default_jurisdiction", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Linkable_landing_companies", "linkable_landing_companiesAttr", "linkable_landing_companies", false, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
                    }, true, OS.DataTypes.TextList),
                    this.attr("Market_type", "market_typeAttr", "market_type", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Name", "nameAttr", "name", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Product", "productAttr", "product", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Requirements", "requirementsAttr", "requirements", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_98319758945048a72386b9e9466c220aStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_98319758945048a72386b9e9466c220aStructure),
                    this.attr("Shortcode", "shortcodeAttr", "shortcode", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Sub_account_type", "sub_account_typeAttr", "sub_account_type", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Instruments", "instrumentsAttr", "instruments", false, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
                    }, true, OS.DataTypes.TextList),
                    this.attr("Jurisdiction", "jurisdictionAttr", "jurisdiction", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Licence_number", "licence_numberAttr", "licence_number", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Product_details", "product_detailsAttr", "product_details", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_839b1aebc8b507d4259e4312bdc21d4bStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_839b1aebc8b507d4259e4312bdc21d4bStructure),
                    this.attr("Regulatory_authority", "regulatory_authorityAttr", "regulatory_authority", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_9b3eaf42648c2b28591e8ee92b7ce159Structure = ST_9b3eaf42648c2b28591e8ee92b7ce159StructureInner;

        var ST_9b3eaf42648c2b28591e8ee92b7ce159Structure = ST_9b3eaf42648c2b28591e8ee92b7ce159StructureInner;
        ST_9b3eaf42648c2b28591e8ee92b7ce159Structure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_016ebe8f15c3060e53dd56f2fea28791", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_9b3eaf42648c2b28591e8ee92b7ce159Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_016ebe8f15c3060e53dd56f2fea28791 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_9b3eaf42648c2b28591e8ee92b7ce159Structure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_016ebe8f15c3060e53dd56f2fea28791 = RL_016ebe8f15c3060e53dd56f2fea28791;

});

define("RESTAPIWebsocketOfficial.model$ST_02211ece4f8ea033ae9a7fa2710f4a32Structure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_02211ece4f8ea033ae9a7fa2710f4a32StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Account_category", "account_categoryAttr", "account_category", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Account_type", "account_typeAttr", "account_type", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Broker", "brokerAttr", "broker", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Created_at", "created_atAttr", "created_at", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("Currency", "currencyAttr", "currency", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Currency_type", "currency_typeAttr", "currency_type", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Is_disabled", "is_disabledAttr", "is_disabled", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("Is_virtual", "is_virtualAttr", "is_virtual", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("Landing_company_name", "landing_company_nameAttr", "landing_company_name", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Loginid", "loginidAttr", "loginid", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_02211ece4f8ea033ae9a7fa2710f4a32Structure = ST_02211ece4f8ea033ae9a7fa2710f4a32StructureInner;

        var ST_02211ece4f8ea033ae9a7fa2710f4a32Structure = ST_02211ece4f8ea033ae9a7fa2710f4a32StructureInner;
        ST_02211ece4f8ea033ae9a7fa2710f4a32Structure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$ST_ae69fbe61d3588d5f7a813905e5dc3aeStructure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_ae69fbe61d3588d5f7a813905e5dc3aeStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("BTC", "bTCAttr", "BTC", false, false, OS.DataTypes.DataTypes.Decimal, function() {
                        return OS.DataTypes.Decimal.defaultValue;
                    }, true),
                    this.attr("ETH", "eTHAttr", "ETH", false, false, OS.DataTypes.DataTypes.Decimal, function() {
                        return OS.DataTypes.Decimal.defaultValue;
                    }, true),
                    this.attr("EUR", "eURAttr", "EUR", false, false, OS.DataTypes.DataTypes.Decimal, function() {
                        return OS.DataTypes.Decimal.defaultValue;
                    }, true),
                    this.attr("GBP", "gBPAttr", "GBP", false, false, OS.DataTypes.DataTypes.Decimal, function() {
                        return OS.DataTypes.Decimal.defaultValue;
                    }, true),
                    this.attr("LTC", "lTCAttr", "LTC", false, false, OS.DataTypes.DataTypes.Decimal, function() {
                        return OS.DataTypes.Decimal.defaultValue;
                    }, true),
                    this.attr("USD", "uSDAttr", "USD", false, false, OS.DataTypes.DataTypes.Decimal, function() {
                        return OS.DataTypes.Decimal.defaultValue;
                    }, true),
                    this.attr("USDC", "uSDCAttr", "USDC", false, false, OS.DataTypes.DataTypes.Decimal, function() {
                        return OS.DataTypes.Decimal.defaultValue;
                    }, true),
                    this.attr("UST", "uSTAttr", "UST", false, false, OS.DataTypes.DataTypes.Decimal, function() {
                        return OS.DataTypes.Decimal.defaultValue;
                    }, true),
                    this.attr("XRP", "xRPAttr", "XRP", false, false, OS.DataTypes.DataTypes.Decimal, function() {
                        return OS.DataTypes.Decimal.defaultValue;
                    }, true),
                    this.attr("EUSDT", "eUSDTAttr", "eUSDT", false, false, OS.DataTypes.DataTypes.Decimal, function() {
                        return OS.DataTypes.Decimal.defaultValue;
                    }, true),
                    this.attr("TUSDT", "tUSDTAttr", "tUSDT", false, false, OS.DataTypes.DataTypes.Decimal, function() {
                        return OS.DataTypes.Decimal.defaultValue;
                    }, true),
                    this.attr("AUD", "aUDAttr", "AUD", false, false, OS.DataTypes.DataTypes.Decimal, function() {
                        return OS.DataTypes.Decimal.defaultValue;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_ae69fbe61d3588d5f7a813905e5dc3aeStructure = ST_ae69fbe61d3588d5f7a813905e5dc3aeStructureInner;

        var ST_ae69fbe61d3588d5f7a813905e5dc3aeStructure = ST_ae69fbe61d3588d5f7a813905e5dc3aeStructureInner;
        ST_ae69fbe61d3588d5f7a813905e5dc3aeStructure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_0253348eb22ed9882ec1d8af3ef0b76e", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_ae69fbe61d3588d5f7a813905e5dc3aeStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_0253348eb22ed9882ec1d8af3ef0b76e extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_ae69fbe61d3588d5f7a813905e5dc3aeStructure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_0253348eb22ed9882ec1d8af3ef0b76e = RL_0253348eb22ed9882ec1d8af3ef0b76e;

});

define("RESTAPIWebsocketOfficial.model$ST_746d074ddcc08e0df3b269ffb1933d5aStructure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_41688d261db663d4544900081e65767bStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_746d074ddcc08e0df3b269ffb1933d5aStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("GetAccountStatus", "getAccountStatusAttr", "get_account_status", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_41688d261db663d4544900081e65767bStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_41688d261db663d4544900081e65767bStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new ST_746d074ddcc08e0df3b269ffb1933d5aStructure(new ST_746d074ddcc08e0df3b269ffb1933d5aStructure.RecordClass({
                    getAccountStatusAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_746d074ddcc08e0df3b269ffb1933d5aStructure = ST_746d074ddcc08e0df3b269ffb1933d5aStructureInner;

        var ST_746d074ddcc08e0df3b269ffb1933d5aStructure = ST_746d074ddcc08e0df3b269ffb1933d5aStructureInner;
        ST_746d074ddcc08e0df3b269ffb1933d5aStructure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_02995be0d4089fecb83f5ff06bf3de7f", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_746d074ddcc08e0df3b269ffb1933d5aStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_02995be0d4089fecb83f5ff06bf3de7f extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_746d074ddcc08e0df3b269ffb1933d5aStructure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_02995be0d4089fecb83f5ff06bf3de7f = RL_02995be0d4089fecb83f5ff06bf3de7f;

});

define("RESTAPIWebsocketOfficial.model$ST_2aa6b158772e078b381113da0ab825f8Structure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_2aa6b158772e078b381113da0ab825f8StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Landing_company", "landing_companyAttr", "landing_company", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new ST_2aa6b158772e078b381113da0ab825f8Structure(new ST_2aa6b158772e078b381113da0ab825f8Structure.RecordClass({
                    landing_companyAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_2aa6b158772e078b381113da0ab825f8Structure = ST_2aa6b158772e078b381113da0ab825f8StructureInner;

        var ST_2aa6b158772e078b381113da0ab825f8Structure = ST_2aa6b158772e078b381113da0ab825f8StructureInner;
        ST_2aa6b158772e078b381113da0ab825f8Structure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$ST_709b151c5172b8ff1042e5fecf4be0ecStructure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_709b151c5172b8ff1042e5fecf4be0ecStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Display_name", "display_nameAttr", "display_name", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Format", "formatAttr", "format", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Lifetime_valid", "lifetime_validAttr", "lifetime_valid", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("Providers", "providersAttr", "providers", false, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
                    }, true, OS.DataTypes.TextList)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_709b151c5172b8ff1042e5fecf4be0ecStructure = ST_709b151c5172b8ff1042e5fecf4be0ecStructureInner;

        var ST_709b151c5172b8ff1042e5fecf4be0ecStructure = ST_709b151c5172b8ff1042e5fecf4be0ecStructureInner;
        ST_709b151c5172b8ff1042e5fecf4be0ecStructure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$ST_3b8df1b0da2c2bbfdff9bb6416b86701Structure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_709b151c5172b8ff1042e5fecf4be0ecStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_3b8df1b0da2c2bbfdff9bb6416b86701StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Nik", "nikAttr", "nik", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_709b151c5172b8ff1042e5fecf4be0ecStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_709b151c5172b8ff1042e5fecf4be0ecStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new ST_3b8df1b0da2c2bbfdff9bb6416b86701Structure(new ST_3b8df1b0da2c2bbfdff9bb6416b86701Structure.RecordClass({
                    nikAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_3b8df1b0da2c2bbfdff9bb6416b86701Structure = ST_3b8df1b0da2c2bbfdff9bb6416b86701StructureInner;

        var ST_3b8df1b0da2c2bbfdff9bb6416b86701Structure = ST_3b8df1b0da2c2bbfdff9bb6416b86701StructureInner;
        ST_3b8df1b0da2c2bbfdff9bb6416b86701Structure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$ST_803bffb999fad6a38040b2086877902eStructure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_709b151c5172b8ff1042e5fecf4be0ecStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_803bffb999fad6a38040b2086877902eStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Display_name", "display_nameAttr", "display_name", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Format", "formatAttr", "format", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Additional", "additionalAttr", "additional", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_709b151c5172b8ff1042e5fecf4be0ecStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_709b151c5172b8ff1042e5fecf4be0ecStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_803bffb999fad6a38040b2086877902eStructure = ST_803bffb999fad6a38040b2086877902eStructureInner;

        var ST_803bffb999fad6a38040b2086877902eStructure = ST_803bffb999fad6a38040b2086877902eStructureInner;
        ST_803bffb999fad6a38040b2086877902eStructure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$ST_e9350867621f419f78bd47d2bb88d9ceStructure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_709b151c5172b8ff1042e5fecf4be0ecStructure", "RESTAPIWebsocketOfficial.model$ST_803bffb999fad6a38040b2086877902eStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_e9350867621f419f78bd47d2bb88d9ceStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Dni", "dniAttr", "dni", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_709b151c5172b8ff1042e5fecf4be0ecStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_709b151c5172b8ff1042e5fecf4be0ecStructure),
                    this.attr("National_id", "national_idAttr", "national_id", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_709b151c5172b8ff1042e5fecf4be0ecStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_709b151c5172b8ff1042e5fecf4be0ecStructure),
                    this.attr("Cpf", "cpfAttr", "cpf", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_709b151c5172b8ff1042e5fecf4be0ecStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_709b151c5172b8ff1042e5fecf4be0ecStructure),
                    this.attr("Passport", "passportAttr", "passport", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_803bffb999fad6a38040b2086877902eStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_803bffb999fad6a38040b2086877902eStructure),
                    this.attr("Aadhaar", "aadhaarAttr", "aadhaar", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_803bffb999fad6a38040b2086877902eStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_803bffb999fad6a38040b2086877902eStructure),
                    this.attr("Drivers_license", "drivers_licenseAttr", "drivers_license", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_709b151c5172b8ff1042e5fecf4be0ecStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_709b151c5172b8ff1042e5fecf4be0ecStructure),
                    this.attr("Epic", "epicAttr", "epic", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_709b151c5172b8ff1042e5fecf4be0ecStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_709b151c5172b8ff1042e5fecf4be0ecStructure),
                    this.attr("Pan", "panAttr", "pan", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_709b151c5172b8ff1042e5fecf4be0ecStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_709b151c5172b8ff1042e5fecf4be0ecStructure),
                    this.attr("Nik", "nikAttr", "nik", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_709b151c5172b8ff1042e5fecf4be0ecStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_709b151c5172b8ff1042e5fecf4be0ecStructure),
                    this.attr("Alien_card", "alien_cardAttr", "alien_card", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_709b151c5172b8ff1042e5fecf4be0ecStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_709b151c5172b8ff1042e5fecf4be0ecStructure),
                    this.attr("Curp", "curpAttr", "curp", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_709b151c5172b8ff1042e5fecf4be0ecStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_709b151c5172b8ff1042e5fecf4be0ecStructure),
                    this.attr("Nin_slip", "nin_slipAttr", "nin_slip", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_709b151c5172b8ff1042e5fecf4be0ecStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_709b151c5172b8ff1042e5fecf4be0ecStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_e9350867621f419f78bd47d2bb88d9ceStructure = ST_e9350867621f419f78bd47d2bb88d9ceStructureInner;

        var ST_e9350867621f419f78bd47d2bb88d9ceStructure = ST_e9350867621f419f78bd47d2bb88d9ceStructureInner;
        ST_e9350867621f419f78bd47d2bb88d9ceStructure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$ST_30cf47a274820f1ac96cf412803888fdStructure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_3b8df1b0da2c2bbfdff9bb6416b86701Structure", "RESTAPIWebsocketOfficial.model$ST_e9350867621f419f78bd47d2bb88d9ceStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_30cf47a274820f1ac96cf412803888fdStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Document_types", "document_typesAttr", "document_types", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_3b8df1b0da2c2bbfdff9bb6416b86701Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_3b8df1b0da2c2bbfdff9bb6416b86701Structure),
                    this.attr("Has_visual_sample", "has_visual_sampleAttr", "has_visual_sample", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("Documents_supported", "documents_supportedAttr", "documents_supported", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_e9350867621f419f78bd47d2bb88d9ceStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_e9350867621f419f78bd47d2bb88d9ceStructure),
                    this.attr("Is_country_supported", "is_country_supportedAttr", "is_country_supported", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_30cf47a274820f1ac96cf412803888fdStructure = ST_30cf47a274820f1ac96cf412803888fdStructureInner;

        var ST_30cf47a274820f1ac96cf412803888fdStructure = ST_30cf47a274820f1ac96cf412803888fdStructureInner;
        ST_30cf47a274820f1ac96cf412803888fdStructure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$ST_628e5221d510e98bcfe00cce5f107d21Structure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_30cf47a274820f1ac96cf412803888fdStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_628e5221d510e98bcfe00cce5f107d21StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Idv", "idvAttr", "idv", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_30cf47a274820f1ac96cf412803888fdStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_30cf47a274820f1ac96cf412803888fdStructure),
                    this.attr("Tax_details_required", "tax_details_requiredAttr", "tax_details_required", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("Tin_format", "tin_formatAttr", "tin_format", false, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
                    }, true, OS.DataTypes.TextList),
                    this.attr("Tin_format_description", "tin_format_descriptionAttr", "tin_format_description", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_628e5221d510e98bcfe00cce5f107d21Structure = ST_628e5221d510e98bcfe00cce5f107d21StructureInner;

        var ST_628e5221d510e98bcfe00cce5f107d21Structure = ST_628e5221d510e98bcfe00cce5f107d21StructureInner;
        ST_628e5221d510e98bcfe00cce5f107d21Structure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$ST_9adaf3e13b31a4c3f4ee4c0b223b00bcStructure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_9adaf3e13b31a4c3f4ee4c0b223b00bcStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Standard", "standardAttr", "standard", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new ST_9adaf3e13b31a4c3f4ee4c0b223b00bcStructure(new ST_9adaf3e13b31a4c3f4ee4c0b223b00bcStructure.RecordClass({
                    standardAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_9adaf3e13b31a4c3f4ee4c0b223b00bcStructure = ST_9adaf3e13b31a4c3f4ee4c0b223b00bcStructureInner;

        var ST_9adaf3e13b31a4c3f4ee4c0b223b00bcStructure = ST_9adaf3e13b31a4c3f4ee4c0b223b00bcStructureInner;
        ST_9adaf3e13b31a4c3f4ee4c0b223b00bcStructure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$ST_5ba9c80e587385c94102779d8eab301cStructure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_9adaf3e13b31a4c3f4ee4c0b223b00bcStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_5ba9c80e587385c94102779d8eab301cStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("All", "allAttr", "all", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_9adaf3e13b31a4c3f4ee4c0b223b00bcStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_9adaf3e13b31a4c3f4ee4c0b223b00bcStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new ST_5ba9c80e587385c94102779d8eab301cStructure(new ST_5ba9c80e587385c94102779d8eab301cStructure.RecordClass({
                    allAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_5ba9c80e587385c94102779d8eab301cStructure = ST_5ba9c80e587385c94102779d8eab301cStructureInner;

        var ST_5ba9c80e587385c94102779d8eab301cStructure = ST_5ba9c80e587385c94102779d8eab301cStructureInner;
        ST_5ba9c80e587385c94102779d8eab301cStructure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$ST_ddeabbcab252c99fc5f083425434b2a7Structure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_ddeabbcab252c99fc5f083425434b2a7StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Only_before_auth", "only_before_authAttr", "only_before_auth", false, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
                    }, true, OS.DataTypes.TextList),
                    this.attr("Personal_details_not_locked", "personal_details_not_lockedAttr", "personal_details_not_locked", false, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
                    }, true, OS.DataTypes.TextList)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_ddeabbcab252c99fc5f083425434b2a7Structure = ST_ddeabbcab252c99fc5f083425434b2a7StructureInner;

        var ST_ddeabbcab252c99fc5f083425434b2a7Structure = ST_ddeabbcab252c99fc5f083425434b2a7StructureInner;
        ST_ddeabbcab252c99fc5f083425434b2a7Structure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$ST_b47d3155c531939aabdd10ec3a99049dStructure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_b47d3155c531939aabdd10ec3a99049dStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Max_payout", "max_payoutAttr", "max_payout", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("Min_stake", "min_stakeAttr", "min_stake", false, false, OS.DataTypes.DataTypes.Decimal, function() {
                        return OS.DataTypes.Decimal.defaultValue;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_b47d3155c531939aabdd10ec3a99049dStructure = ST_b47d3155c531939aabdd10ec3a99049dStructureInner;

        var ST_b47d3155c531939aabdd10ec3a99049dStructure = ST_b47d3155c531939aabdd10ec3a99049dStructureInner;
        ST_b47d3155c531939aabdd10ec3a99049dStructure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$ST_5b838c70a2bbb273d7a479efa1e8ea87Structure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_b47d3155c531939aabdd10ec3a99049dStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_5b838c70a2bbb273d7a479efa1e8ea87StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("AUD", "aUDAttr", "AUD", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_b47d3155c531939aabdd10ec3a99049dStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_b47d3155c531939aabdd10ec3a99049dStructure),
                    this.attr("BTC", "bTCAttr", "BTC", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_b47d3155c531939aabdd10ec3a99049dStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_b47d3155c531939aabdd10ec3a99049dStructure),
                    this.attr("ETH", "eTHAttr", "ETH", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_b47d3155c531939aabdd10ec3a99049dStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_b47d3155c531939aabdd10ec3a99049dStructure),
                    this.attr("EUR", "eURAttr", "EUR", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_b47d3155c531939aabdd10ec3a99049dStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_b47d3155c531939aabdd10ec3a99049dStructure),
                    this.attr("GBP", "gBPAttr", "GBP", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_b47d3155c531939aabdd10ec3a99049dStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_b47d3155c531939aabdd10ec3a99049dStructure),
                    this.attr("LTC", "lTCAttr", "LTC", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_b47d3155c531939aabdd10ec3a99049dStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_b47d3155c531939aabdd10ec3a99049dStructure),
                    this.attr("USD", "uSDAttr", "USD", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_b47d3155c531939aabdd10ec3a99049dStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_b47d3155c531939aabdd10ec3a99049dStructure),
                    this.attr("USDC", "uSDCAttr", "USDC", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_b47d3155c531939aabdd10ec3a99049dStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_b47d3155c531939aabdd10ec3a99049dStructure),
                    this.attr("EUSDT", "eUSDTAttr", "eUSDT", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_b47d3155c531939aabdd10ec3a99049dStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_b47d3155c531939aabdd10ec3a99049dStructure),
                    this.attr("TUSDT", "tUSDTAttr", "tUSDT", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_b47d3155c531939aabdd10ec3a99049dStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_b47d3155c531939aabdd10ec3a99049dStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_5b838c70a2bbb273d7a479efa1e8ea87Structure = ST_5b838c70a2bbb273d7a479efa1e8ea87StructureInner;

        var ST_5b838c70a2bbb273d7a479efa1e8ea87Structure = ST_5b838c70a2bbb273d7a479efa1e8ea87StructureInner;
        ST_5b838c70a2bbb273d7a479efa1e8ea87Structure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$ST_72e91b438c2e206bca7398a7a69902dfStructure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_5b838c70a2bbb273d7a479efa1e8ea87Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_72e91b438c2e206bca7398a7a69902dfStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Commodities", "commoditiesAttr", "commodities", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_5b838c70a2bbb273d7a479efa1e8ea87Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_5b838c70a2bbb273d7a479efa1e8ea87Structure),
                    this.attr("Cryptocurrency", "cryptocurrencyAttr", "cryptocurrency", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_5b838c70a2bbb273d7a479efa1e8ea87Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_5b838c70a2bbb273d7a479efa1e8ea87Structure),
                    this.attr("Forex", "forexAttr", "forex", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_5b838c70a2bbb273d7a479efa1e8ea87Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_5b838c70a2bbb273d7a479efa1e8ea87Structure),
                    this.attr("Indices", "indicesAttr", "indices", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_5b838c70a2bbb273d7a479efa1e8ea87Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_5b838c70a2bbb273d7a479efa1e8ea87Structure),
                    this.attr("Synthetic_index", "synthetic_indexAttr", "synthetic_index", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_5b838c70a2bbb273d7a479efa1e8ea87Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_5b838c70a2bbb273d7a479efa1e8ea87Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_72e91b438c2e206bca7398a7a69902dfStructure = ST_72e91b438c2e206bca7398a7a69902dfStructureInner;

        var ST_72e91b438c2e206bca7398a7a69902dfStructure = ST_72e91b438c2e206bca7398a7a69902dfStructureInner;
        ST_72e91b438c2e206bca7398a7a69902dfStructure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$ST_6cf1ba858957788c000fe8d27578f9c1Structure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_ddeabbcab252c99fc5f083425434b2a7Structure", "RESTAPIWebsocketOfficial.model$ST_72e91b438c2e206bca7398a7a69902dfStructure", "RESTAPIWebsocketOfficial.model$ST_98319758945048a72386b9e9466c220aStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_6cf1ba858957788c000fe8d27578f9c1StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Changeable_fields", "changeable_fieldsAttr", "changeable_fields", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_ddeabbcab252c99fc5f083425434b2a7Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_ddeabbcab252c99fc5f083425434b2a7Structure),
                    this.attr("Country", "countryAttr", "country", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Currency_config", "currency_configAttr", "currency_config", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_72e91b438c2e206bca7398a7a69902dfStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_72e91b438c2e206bca7398a7a69902dfStructure),
                    this.attr("Has_reality_check", "has_reality_checkAttr", "has_reality_check", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("Legal_allowed_contract_categories", "legal_allowed_contract_categoriesAttr", "legal_allowed_contract_categories", false, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
                    }, true, OS.DataTypes.TextList),
                    this.attr("Legal_allowed_currencies", "legal_allowed_currenciesAttr", "legal_allowed_currencies", false, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
                    }, true, OS.DataTypes.TextList),
                    this.attr("Legal_allowed_markets", "legal_allowed_marketsAttr", "legal_allowed_markets", false, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
                    }, true, OS.DataTypes.TextList),
                    this.attr("Legal_default_currency", "legal_default_currencyAttr", "legal_default_currency", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Name", "nameAttr", "name", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Requirements", "requirementsAttr", "requirements", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_98319758945048a72386b9e9466c220aStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_98319758945048a72386b9e9466c220aStructure),
                    this.attr("Shortcode", "shortcodeAttr", "shortcode", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Support_professional_client", "support_professional_clientAttr", "support_professional_client", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("Tin_not_mandatory", "tin_not_mandatoryAttr", "tin_not_mandatory", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_6cf1ba858957788c000fe8d27578f9c1Structure = ST_6cf1ba858957788c000fe8d27578f9c1StructureInner;

        var ST_6cf1ba858957788c000fe8d27578f9c1Structure = ST_6cf1ba858957788c000fe8d27578f9c1StructureInner;
        ST_6cf1ba858957788c000fe8d27578f9c1Structure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$ST_cea376e9e95ae6d491d188174483cdceStructure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_6cf1ba858957788c000fe8d27578f9c1Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_cea376e9e95ae6d491d188174483cdceStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Standard", "standardAttr", "standard", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_6cf1ba858957788c000fe8d27578f9c1Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_6cf1ba858957788c000fe8d27578f9c1Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new ST_cea376e9e95ae6d491d188174483cdceStructure(new ST_cea376e9e95ae6d491d188174483cdceStructure.RecordClass({
                    standardAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_cea376e9e95ae6d491d188174483cdceStructure = ST_cea376e9e95ae6d491d188174483cdceStructureInner;

        var ST_cea376e9e95ae6d491d188174483cdceStructure = ST_cea376e9e95ae6d491d188174483cdceStructureInner;
        ST_cea376e9e95ae6d491d188174483cdceStructure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$ST_6168fd7b9ba43ed0f5fe1ccbd8f82e90Structure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_b47d3155c531939aabdd10ec3a99049dStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_6168fd7b9ba43ed0f5fe1ccbd8f82e90StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("USD", "uSDAttr", "USD", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_b47d3155c531939aabdd10ec3a99049dStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_b47d3155c531939aabdd10ec3a99049dStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new ST_6168fd7b9ba43ed0f5fe1ccbd8f82e90Structure(new ST_6168fd7b9ba43ed0f5fe1ccbd8f82e90Structure.RecordClass({
                    uSDAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_6168fd7b9ba43ed0f5fe1ccbd8f82e90Structure = ST_6168fd7b9ba43ed0f5fe1ccbd8f82e90StructureInner;

        var ST_6168fd7b9ba43ed0f5fe1ccbd8f82e90Structure = ST_6168fd7b9ba43ed0f5fe1ccbd8f82e90StructureInner;
        ST_6168fd7b9ba43ed0f5fe1ccbd8f82e90Structure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$ST_bccc1fae1833449eea329fa137ba885aStructure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_6168fd7b9ba43ed0f5fe1ccbd8f82e90Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_bccc1fae1833449eea329fa137ba885aStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Forex", "forexAttr", "forex", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_6168fd7b9ba43ed0f5fe1ccbd8f82e90Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_6168fd7b9ba43ed0f5fe1ccbd8f82e90Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new ST_bccc1fae1833449eea329fa137ba885aStructure(new ST_bccc1fae1833449eea329fa137ba885aStructure.RecordClass({
                    forexAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_bccc1fae1833449eea329fa137ba885aStructure = ST_bccc1fae1833449eea329fa137ba885aStructureInner;

        var ST_bccc1fae1833449eea329fa137ba885aStructure = ST_bccc1fae1833449eea329fa137ba885aStructureInner;
        ST_bccc1fae1833449eea329fa137ba885aStructure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$ST_159cd2ead3b4ce7cf017e33699885453Structure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_98319758945048a72386b9e9466c220aStructure", "RESTAPIWebsocketOfficial.model$ST_bccc1fae1833449eea329fa137ba885aStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_159cd2ead3b4ce7cf017e33699885453StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Address", "addressAttr", "address", false, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
                    }, true, OS.DataTypes.TextList),
                    this.attr("Country", "countryAttr", "country", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Has_reality_check", "has_reality_checkAttr", "has_reality_check", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("Legal_allowed_currencies", "legal_allowed_currenciesAttr", "legal_allowed_currencies", false, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
                    }, true, OS.DataTypes.TextList),
                    this.attr("Legal_default_currency", "legal_default_currencyAttr", "legal_default_currency", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Name", "nameAttr", "name", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Requirements", "requirementsAttr", "requirements", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_98319758945048a72386b9e9466c220aStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_98319758945048a72386b9e9466c220aStructure),
                    this.attr("Shortcode", "shortcodeAttr", "shortcode", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Support_professional_client", "support_professional_clientAttr", "support_professional_client", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("Tin_not_mandatory", "tin_not_mandatoryAttr", "tin_not_mandatory", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("Currency_config", "currency_configAttr", "currency_config", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_bccc1fae1833449eea329fa137ba885aStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_bccc1fae1833449eea329fa137ba885aStructure),
                    this.attr("Legal_allowed_contract_categories", "legal_allowed_contract_categoriesAttr", "legal_allowed_contract_categories", false, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
                    }, true, OS.DataTypes.TextList)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_159cd2ead3b4ce7cf017e33699885453Structure = ST_159cd2ead3b4ce7cf017e33699885453StructureInner;

        var ST_159cd2ead3b4ce7cf017e33699885453Structure = ST_159cd2ead3b4ce7cf017e33699885453StructureInner;
        ST_159cd2ead3b4ce7cf017e33699885453Structure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$ST_60a5d7a279694c475c6cf2585b652410Structure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_6cf1ba858957788c000fe8d27578f9c1Structure", "RESTAPIWebsocketOfficial.model$ST_159cd2ead3b4ce7cf017e33699885453Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_60a5d7a279694c475c6cf2585b652410StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Swap_free", "swap_freeAttr", "swap_free", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_6cf1ba858957788c000fe8d27578f9c1Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_6cf1ba858957788c000fe8d27578f9c1Structure),
                    this.attr("Zero_spread", "zero_spreadAttr", "zero_spread", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_159cd2ead3b4ce7cf017e33699885453Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_159cd2ead3b4ce7cf017e33699885453Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_60a5d7a279694c475c6cf2585b652410Structure = ST_60a5d7a279694c475c6cf2585b652410StructureInner;

        var ST_60a5d7a279694c475c6cf2585b652410Structure = ST_60a5d7a279694c475c6cf2585b652410StructureInner;
        ST_60a5d7a279694c475c6cf2585b652410Structure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$ST_8ddbf1b6e2eccc5a160b5fab6b9b9b86Structure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_6cf1ba858957788c000fe8d27578f9c1Structure", "RESTAPIWebsocketOfficial.model$ST_159cd2ead3b4ce7cf017e33699885453Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_8ddbf1b6e2eccc5a160b5fab6b9b9b86StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Financial", "financialAttr", "financial", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_6cf1ba858957788c000fe8d27578f9c1Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_6cf1ba858957788c000fe8d27578f9c1Structure),
                    this.attr("Financial_stp", "financial_stpAttr", "financial_stp", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_159cd2ead3b4ce7cf017e33699885453Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_159cd2ead3b4ce7cf017e33699885453Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_8ddbf1b6e2eccc5a160b5fab6b9b9b86Structure = ST_8ddbf1b6e2eccc5a160b5fab6b9b9b86StructureInner;

        var ST_8ddbf1b6e2eccc5a160b5fab6b9b9b86Structure = ST_8ddbf1b6e2eccc5a160b5fab6b9b9b86StructureInner;
        ST_8ddbf1b6e2eccc5a160b5fab6b9b9b86Structure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$ST_d12f6a9e29cbb97250918a3fc7bc632aStructure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_628e5221d510e98bcfe00cce5f107d21Structure", "RESTAPIWebsocketOfficial.model$ST_5ba9c80e587385c94102779d8eab301cStructure", "RESTAPIWebsocketOfficial.model$ST_cea376e9e95ae6d491d188174483cdceStructure", "RESTAPIWebsocketOfficial.model$ST_6cf1ba858957788c000fe8d27578f9c1Structure", "RESTAPIWebsocketOfficial.model$ST_60a5d7a279694c475c6cf2585b652410Structure", "RESTAPIWebsocketOfficial.model$ST_8ddbf1b6e2eccc5a160b5fab6b9b9b86Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_d12f6a9e29cbb97250918a3fc7bc632aStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("All_company", "all_companyAttr", "all_company", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Config", "configAttr", "config", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_628e5221d510e98bcfe00cce5f107d21Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_628e5221d510e98bcfe00cce5f107d21Structure),
                    this.attr("Ctrader", "ctraderAttr", "ctrader", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_5ba9c80e587385c94102779d8eab301cStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_5ba9c80e587385c94102779d8eab301cStructure),
                    this.attr("Derivez", "derivezAttr", "derivez", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_5ba9c80e587385c94102779d8eab301cStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_5ba9c80e587385c94102779d8eab301cStructure),
                    this.attr("Dxtrade_all_company", "dxtrade_all_companyAttr", "dxtrade_all_company", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_cea376e9e95ae6d491d188174483cdceStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_cea376e9e95ae6d491d188174483cdceStructure),
                    this.attr("Financial_company", "financial_companyAttr", "financial_company", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_6cf1ba858957788c000fe8d27578f9c1Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_6cf1ba858957788c000fe8d27578f9c1Structure),
                    this.attr("Gaming_company", "gaming_companyAttr", "gaming_company", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_6cf1ba858957788c000fe8d27578f9c1Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_6cf1ba858957788c000fe8d27578f9c1Structure),
                    this.attr("Id", "idAttr", "id", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Is_idv_supported", "is_idv_supportedAttr", "is_idv_supported", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("Minimum_age", "minimum_ageAttr", "minimum_age", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("Mt_all_company", "mt_all_companyAttr", "mt_all_company", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_60a5d7a279694c475c6cf2585b652410Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_60a5d7a279694c475c6cf2585b652410Structure),
                    this.attr("Mt_financial_company", "mt_financial_companyAttr", "mt_financial_company", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_8ddbf1b6e2eccc5a160b5fab6b9b9b86Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_8ddbf1b6e2eccc5a160b5fab6b9b9b86Structure),
                    this.attr("Mt_gaming_company", "mt_gaming_companyAttr", "mt_gaming_company", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_8ddbf1b6e2eccc5a160b5fab6b9b9b86Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_8ddbf1b6e2eccc5a160b5fab6b9b9b86Structure),
                    this.attr("Name", "nameAttr", "name", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Virtual_company", "virtual_companyAttr", "virtual_company", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_d12f6a9e29cbb97250918a3fc7bc632aStructure = ST_d12f6a9e29cbb97250918a3fc7bc632aStructureInner;

        var ST_d12f6a9e29cbb97250918a3fc7bc632aStructure = ST_d12f6a9e29cbb97250918a3fc7bc632aStructureInner;
        ST_d12f6a9e29cbb97250918a3fc7bc632aStructure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$ST_8517d9c8b73e866553a1a7b806af5079Structure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_8517d9c8b73e866553a1a7b806af5079StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Code", "codeAttr", "code", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Message", "messageAttr", "message", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_8517d9c8b73e866553a1a7b806af5079Structure = ST_8517d9c8b73e866553a1a7b806af5079StructureInner;

        var ST_8517d9c8b73e866553a1a7b806af5079Structure = ST_8517d9c8b73e866553a1a7b806af5079StructureInner;
        ST_8517d9c8b73e866553a1a7b806af5079Structure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$ST_55477c48be760e041c4dbfa365f63009Structure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_2aa6b158772e078b381113da0ab825f8Structure", "RESTAPIWebsocketOfficial.model$ST_d12f6a9e29cbb97250918a3fc7bc632aStructure", "RESTAPIWebsocketOfficial.model$ST_8517d9c8b73e866553a1a7b806af5079Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_55477c48be760e041c4dbfa365f63009StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Echo_req", "echo_reqAttr", "echo_req", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_2aa6b158772e078b381113da0ab825f8Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_2aa6b158772e078b381113da0ab825f8Structure),
                    this.attr("Landing_company", "landing_companyAttr", "landing_company", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_d12f6a9e29cbb97250918a3fc7bc632aStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_d12f6a9e29cbb97250918a3fc7bc632aStructure),
                    this.attr("Msg_type", "msg_typeAttr", "msg_type", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Error", "errorAttr", "Error", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_8517d9c8b73e866553a1a7b806af5079Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_8517d9c8b73e866553a1a7b806af5079Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_55477c48be760e041c4dbfa365f63009Structure = ST_55477c48be760e041c4dbfa365f63009StructureInner;

        var ST_55477c48be760e041c4dbfa365f63009Structure = ST_55477c48be760e041c4dbfa365f63009StructureInner;
        ST_55477c48be760e041c4dbfa365f63009Structure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RC_e16346b05b03d5a8388d39bb24b7660c", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_55477c48be760e041c4dbfa365f63009Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_e16346b05b03d5a8388d39bb24b7660cInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("GetLandingCompanyResponse", "getLandingCompanyResponseAttr", "GetLandingCompanyResponse", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_55477c48be760e041c4dbfa365f63009Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_55477c48be760e041c4dbfa365f63009Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_e16346b05b03d5a8388d39bb24b7660c(new RC_e16346b05b03d5a8388d39bb24b7660c.RecordClass({
                    getLandingCompanyResponseAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_e16346b05b03d5a8388d39bb24b7660c = RC_e16346b05b03d5a8388d39bb24b7660cInner;

        RC_e16346b05b03d5a8388d39bb24b7660cInner._isAnonymousRecord = true;
        RC_e16346b05b03d5a8388d39bb24b7660cInner.UniqueId = "e16346b0-5b03-d5a8-388d-39bb24b7660c";
        var RC_e16346b05b03d5a8388d39bb24b7660c = RC_e16346b05b03d5a8388d39bb24b7660cInner;
        RC_e16346b05b03d5a8388d39bb24b7660c.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_02c7187c7ba98cee9be98803b8e6dc25", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_e16346b05b03d5a8388d39bb24b7660c"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_02c7187c7ba98cee9be98803b8e6dc25 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_e16346b05b03d5a8388d39bb24b7660c;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_02c7187c7ba98cee9be98803b8e6dc25 = RL_02c7187c7ba98cee9be98803b8e6dc25;

});

define("RESTAPIWebsocketOfficial.model$ST_433eb5ffcea5c3c69d4be061c9113711Structure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_433eb5ffcea5c3c69d4be061c9113711StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Status", "statusAttr", "status", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("SupportedDocuments", "supportedDocumentsAttr", "supported_documents", false, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
                    }, true, OS.DataTypes.TextList)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_433eb5ffcea5c3c69d4be061c9113711Structure = ST_433eb5ffcea5c3c69d4be061c9113711StructureInner;

        var ST_433eb5ffcea5c3c69d4be061c9113711Structure = ST_433eb5ffcea5c3c69d4be061c9113711StructureInner;
        ST_433eb5ffcea5c3c69d4be061c9113711Structure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$ST_ec58aaccd7b190d47a2dd7159fa0d866Structure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_ec58aaccd7b190d47a2dd7159fa0d866StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("AvailableServices", "availableServicesAttr", "available_services", false, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
                    }, true, OS.DataTypes.TextList),
                    this.attr("Status", "statusAttr", "status", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("SupportedDocuments", "supportedDocumentsAttr", "supported_documents", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_ec58aaccd7b190d47a2dd7159fa0d866Structure = ST_ec58aaccd7b190d47a2dd7159fa0d866StructureInner;

        var ST_ec58aaccd7b190d47a2dd7159fa0d866Structure = ST_ec58aaccd7b190d47a2dd7159fa0d866StructureInner;
        ST_ec58aaccd7b190d47a2dd7159fa0d866Structure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$ST_50afbe86b1f98695d7a2eacc451587a7Structure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_433eb5ffcea5c3c69d4be061c9113711Structure", "RESTAPIWebsocketOfficial.model$ST_ec58aaccd7b190d47a2dd7159fa0d866Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_50afbe86b1f98695d7a2eacc451587a7StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Address", "addressAttr", "address", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_433eb5ffcea5c3c69d4be061c9113711Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_433eb5ffcea5c3c69d4be061c9113711Structure),
                    this.attr("Identity", "identityAttr", "identity", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_ec58aaccd7b190d47a2dd7159fa0d866Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_ec58aaccd7b190d47a2dd7159fa0d866Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_50afbe86b1f98695d7a2eacc451587a7Structure = ST_50afbe86b1f98695d7a2eacc451587a7StructureInner;

        var ST_50afbe86b1f98695d7a2eacc451587a7Structure = ST_50afbe86b1f98695d7a2eacc451587a7StructureInner;
        ST_50afbe86b1f98695d7a2eacc451587a7Structure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RC_f5490f87f20f20000a36a875dced4a8f", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_50afbe86b1f98695d7a2eacc451587a7Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_f5490f87f20f20000a36a875dced4a8fInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("KYCAuthStatus", "kYCAuthStatusAttr", "KYCAuthStatus", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_50afbe86b1f98695d7a2eacc451587a7Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_50afbe86b1f98695d7a2eacc451587a7Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_f5490f87f20f20000a36a875dced4a8f(new RC_f5490f87f20f20000a36a875dced4a8f.RecordClass({
                    kYCAuthStatusAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_f5490f87f20f20000a36a875dced4a8f = RC_f5490f87f20f20000a36a875dced4a8fInner;

        RC_f5490f87f20f20000a36a875dced4a8fInner._isAnonymousRecord = true;
        RC_f5490f87f20f20000a36a875dced4a8fInner.UniqueId = "f5490f87-f20f-2000-0a36-a875dced4a8f";
        var RC_f5490f87f20f20000a36a875dced4a8f = RC_f5490f87f20f20000a36a875dced4a8fInner;
        RC_f5490f87f20f20000a36a875dced4a8f.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_02fe2e113b5eb9c675da8b940dcff7a8", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_f5490f87f20f20000a36a875dced4a8f"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_02fe2e113b5eb9c675da8b940dcff7a8 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_f5490f87f20f20000a36a875dced4a8f;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_02fe2e113b5eb9c675da8b940dcff7a8 = RL_02fe2e113b5eb9c675da8b940dcff7a8;

});

define("RESTAPIWebsocketOfficial.model$RL_03ad86d8c1630b012ffc7d14eb428cff", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_9adaf3e13b31a4c3f4ee4c0b223b00bcStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_03ad86d8c1630b012ffc7d14eb428cff extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_9adaf3e13b31a4c3f4ee4c0b223b00bcStructure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_03ad86d8c1630b012ffc7d14eb428cff = RL_03ad86d8c1630b012ffc7d14eb428cff;

});

define("RESTAPIWebsocketOfficial.model$ST_b8e5132e8639404a10bb651dc17997bcStructure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_b8e5132e8639404a10bb651dc17997bcStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Cashier", "cashierAttr", "cashier", false, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
                    }, true, OS.DataTypes.TextList),
                    this.attr("Ramp", "rampAttr", "ramp", false, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
                    }, true, OS.DataTypes.TextList)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_b8e5132e8639404a10bb651dc17997bcStructure = ST_b8e5132e8639404a10bb651dc17997bcStructureInner;

        var ST_b8e5132e8639404a10bb651dc17997bcStructure = ST_b8e5132e8639404a10bb651dc17997bcStructureInner;
        ST_b8e5132e8639404a10bb651dc17997bcStructure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$ST_d15d22dc3a60a2e6365116c61a16aaa0Structure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_d15d22dc3a60a2e6365116c61a16aaa0StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Max", "maxAttr", "max", false, false, OS.DataTypes.DataTypes.Decimal, function() {
                        return OS.DataTypes.Decimal.defaultValue;
                    }, true),
                    this.attr("Min", "minAttr", "min", false, false, OS.DataTypes.DataTypes.Decimal, function() {
                        return OS.DataTypes.Decimal.defaultValue;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_d15d22dc3a60a2e6365116c61a16aaa0Structure = ST_d15d22dc3a60a2e6365116c61a16aaa0StructureInner;

        var ST_d15d22dc3a60a2e6365116c61a16aaa0Structure = ST_d15d22dc3a60a2e6365116c61a16aaa0StructureInner;
        ST_d15d22dc3a60a2e6365116c61a16aaa0Structure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$ST_4e063a3cef8e9e085284fb57c1326006Structure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_ae69fbe61d3588d5f7a813905e5dc3aeStructure", "RESTAPIWebsocketOfficial.model$ST_d15d22dc3a60a2e6365116c61a16aaa0Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_4e063a3cef8e9e085284fb57c1326006StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Fees", "feesAttr", "fees", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_ae69fbe61d3588d5f7a813905e5dc3aeStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_ae69fbe61d3588d5f7a813905e5dc3aeStructure),
                    this.attr("Limits", "limitsAttr", "limits", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_d15d22dc3a60a2e6365116c61a16aaa0Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_d15d22dc3a60a2e6365116c61a16aaa0Structure),
                    this.attr("Limits_ctrader", "limits_ctraderAttr", "limits_ctrader", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_d15d22dc3a60a2e6365116c61a16aaa0Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_d15d22dc3a60a2e6365116c61a16aaa0Structure),
                    this.attr("Limits_derivez", "limits_derivezAttr", "limits_derivez", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_d15d22dc3a60a2e6365116c61a16aaa0Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_d15d22dc3a60a2e6365116c61a16aaa0Structure),
                    this.attr("Limits_dxtrade", "limits_dxtradeAttr", "limits_dxtrade", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_d15d22dc3a60a2e6365116c61a16aaa0Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_d15d22dc3a60a2e6365116c61a16aaa0Structure),
                    this.attr("Limits_mt5", "limits_mt5Attr", "limits_mt5", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_d15d22dc3a60a2e6365116c61a16aaa0Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_d15d22dc3a60a2e6365116c61a16aaa0Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_4e063a3cef8e9e085284fb57c1326006Structure = ST_4e063a3cef8e9e085284fb57c1326006StructureInner;

        var ST_4e063a3cef8e9e085284fb57c1326006Structure = ST_4e063a3cef8e9e085284fb57c1326006StructureInner;
        ST_4e063a3cef8e9e085284fb57c1326006Structure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$ST_04eaf04e4147681bc07ba614af4e7e78Structure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_b8e5132e8639404a10bb651dc17997bcStructure", "RESTAPIWebsocketOfficial.model$ST_4e063a3cef8e9e085284fb57c1326006Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_04eaf04e4147681bc07ba614af4e7e78StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Fractional_digits", "fractional_digitsAttr", "fractional_digits", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("Is_deposit_suspended", "is_deposit_suspendedAttr", "is_deposit_suspended", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("Is_suspended", "is_suspendedAttr", "is_suspended", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("Is_withdrawal_suspended", "is_withdrawal_suspendedAttr", "is_withdrawal_suspended", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("Name", "nameAttr", "name", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Platform", "platformAttr", "platform", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_b8e5132e8639404a10bb651dc17997bcStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_b8e5132e8639404a10bb651dc17997bcStructure),
                    this.attr("Stake_default", "stake_defaultAttr", "stake_default", false, false, OS.DataTypes.DataTypes.Decimal, function() {
                        return OS.DataTypes.Decimal.defaultValue;
                    }, true),
                    this.attr("Transfer_between_accounts", "transfer_between_accountsAttr", "transfer_between_accounts", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_4e063a3cef8e9e085284fb57c1326006Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_4e063a3cef8e9e085284fb57c1326006Structure),
                    this.attr("Type", "typeAttr", "type", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_04eaf04e4147681bc07ba614af4e7e78Structure = ST_04eaf04e4147681bc07ba614af4e7e78StructureInner;

        var ST_04eaf04e4147681bc07ba614af4e7e78Structure = ST_04eaf04e4147681bc07ba614af4e7e78StructureInner;
        ST_04eaf04e4147681bc07ba614af4e7e78Structure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$ST_0543ba6e58ccc819d0ba65db33df025eStructure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_0543ba6e58ccc819d0ba65db33df025eStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Wallet", "walletAttr", "wallet", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new ST_0543ba6e58ccc819d0ba65db33df025eStructure(new ST_0543ba6e58ccc819d0ba65db33df025eStructure.RecordClass({
                    walletAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_0543ba6e58ccc819d0ba65db33df025eStructure = ST_0543ba6e58ccc819d0ba65db33df025eStructureInner;

        var ST_0543ba6e58ccc819d0ba65db33df025eStructure = ST_0543ba6e58ccc819d0ba65db33df025eStructureInner;
        ST_0543ba6e58ccc819d0ba65db33df025eStructure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$ST_057fc2ec8b30a53f3233d84a70e95aabStructure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_057fc2ec8b30a53f3233d84a70e95aabStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Value", "valueAttr", "Value", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_057fc2ec8b30a53f3233d84a70e95aabStructure = ST_057fc2ec8b30a53f3233d84a70e95aabStructureInner;

        var ST_057fc2ec8b30a53f3233d84a70e95aabStructure = ST_057fc2ec8b30a53f3233d84a70e95aabStructureInner;
        ST_057fc2ec8b30a53f3233d84a70e95aabStructure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RC_e70e907746052ce92e691c25e5a4ffd3", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_746d074ddcc08e0df3b269ffb1933d5aStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_e70e907746052ce92e691c25e5a4ffd3Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("GetAccountStatusRes", "getAccountStatusResAttr", "GetAccountStatusRes", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_746d074ddcc08e0df3b269ffb1933d5aStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_746d074ddcc08e0df3b269ffb1933d5aStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_e70e907746052ce92e691c25e5a4ffd3(new RC_e70e907746052ce92e691c25e5a4ffd3.RecordClass({
                    getAccountStatusResAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_e70e907746052ce92e691c25e5a4ffd3 = RC_e70e907746052ce92e691c25e5a4ffd3Inner;

        RC_e70e907746052ce92e691c25e5a4ffd3Inner._isAnonymousRecord = true;
        RC_e70e907746052ce92e691c25e5a4ffd3Inner.UniqueId = "e70e9077-4605-2ce9-2e69-1c25e5a4ffd3";
        var RC_e70e907746052ce92e691c25e5a4ffd3 = RC_e70e907746052ce92e691c25e5a4ffd3Inner;
        RC_e70e907746052ce92e691c25e5a4ffd3.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_05831c3634322d723355d086c3117149", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_e70e907746052ce92e691c25e5a4ffd3"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_05831c3634322d723355d086c3117149 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_e70e907746052ce92e691c25e5a4ffd3;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_05831c3634322d723355d086c3117149 = RL_05831c3634322d723355d086c3117149;

});

define("RESTAPIWebsocketOfficial.model$ST_349094d98d9594831ba9e5194411246fStructure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_349094d98d9594831ba9e5194411246fStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Bvi", "bviAttr", "bvi", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("Labuan", "labuanAttr", "labuan", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("Vanuatu", "vanuatuAttr", "vanuatu", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_349094d98d9594831ba9e5194411246fStructure = ST_349094d98d9594831ba9e5194411246fStructureInner;

        var ST_349094d98d9594831ba9e5194411246fStructure = ST_349094d98d9594831ba9e5194411246fStructureInner;
        ST_349094d98d9594831ba9e5194411246fStructure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$ST_55ea19c18b42991c3f5575c063ad7ca7Structure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_349094d98d9594831ba9e5194411246fStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_55ea19c18b42991c3f5575c063ad7ca7StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Default", "defaultAttr", "default", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("Landing_company", "landing_companyAttr", "landing_company", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_349094d98d9594831ba9e5194411246fStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_349094d98d9594831ba9e5194411246fStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_55ea19c18b42991c3f5575c063ad7ca7Structure = ST_55ea19c18b42991c3f5575c063ad7ca7StructureInner;

        var ST_55ea19c18b42991c3f5575c063ad7ca7Structure = ST_55ea19c18b42991c3f5575c063ad7ca7StructureInner;
        ST_55ea19c18b42991c3f5575c063ad7ca7Structure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$ST_1c923b28044712e7268167783ecfdfbeStructure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_1c923b28044712e7268167783ecfdfbeStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Mandatory", "mandatoryAttr", "mandatory", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("Tin_cleaner", "tin_cleanerAttr", "tin_cleaner", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Tin_format", "tin_formatAttr", "tin_format", false, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
                    }, true, OS.DataTypes.TextList),
                    this.attr("Tin_format_description", "tin_format_descriptionAttr", "tin_format_description", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_1c923b28044712e7268167783ecfdfbeStructure = ST_1c923b28044712e7268167783ecfdfbeStructureInner;

        var ST_1c923b28044712e7268167783ecfdfbeStructure = ST_1c923b28044712e7268167783ecfdfbeStructureInner;
        ST_1c923b28044712e7268167783ecfdfbeStructure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$ST_b5282edb36283adb40969ef7004c3e79Structure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_55ea19c18b42991c3f5575c063ad7ca7Structure", "RESTAPIWebsocketOfficial.model$ST_333caa433a680d581b2dfdf80dcbab60Structure", "RESTAPIWebsocketOfficial.model$ST_1c923b28044712e7268167783ecfdfbeStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_b5282edb36283adb40969ef7004c3e79StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Non_participating_jurisdictions", "non_participating_jurisdictionsAttr", "non_participating_jurisdictions", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_55ea19c18b42991c3f5575c063ad7ca7Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_55ea19c18b42991c3f5575c063ad7ca7Structure),
                    this.attr("Postcode", "postcodeAttr", "postcode", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_333caa433a680d581b2dfdf80dcbab60Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_333caa433a680d581b2dfdf80dcbab60Structure),
                    this.attr("Tax", "taxAttr", "tax", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_1c923b28044712e7268167783ecfdfbeStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_1c923b28044712e7268167783ecfdfbeStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_b5282edb36283adb40969ef7004c3e79Structure = ST_b5282edb36283adb40969ef7004c3e79StructureInner;

        var ST_b5282edb36283adb40969ef7004c3e79Structure = ST_b5282edb36283adb40969ef7004c3e79StructureInner;
        ST_b5282edb36283adb40969ef7004c3e79Structure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$ST_c4a5ea0056d7d4d64b0630a9fc26f60bStructure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_c4a5ea0056d7d4d64b0630a9fc26f60bStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Display_name", "display_nameAttr", "display_name", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new ST_c4a5ea0056d7d4d64b0630a9fc26f60bStructure(new ST_c4a5ea0056d7d4d64b0630a9fc26f60bStructure.RecordClass({
                    display_nameAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_c4a5ea0056d7d4d64b0630a9fc26f60bStructure = ST_c4a5ea0056d7d4d64b0630a9fc26f60bStructureInner;

        var ST_c4a5ea0056d7d4d64b0630a9fc26f60bStructure = ST_c4a5ea0056d7d4d64b0630a9fc26f60bStructureInner;
        ST_c4a5ea0056d7d4d64b0630a9fc26f60bStructure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$ST_2aef4efdcc8a8ad935c2f051f3051327Structure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_c4a5ea0056d7d4d64b0630a9fc26f60bStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_2aef4efdcc8a8ad935c2f051f3051327StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("National_identity_card", "national_identity_cardAttr", "national_identity_card", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_c4a5ea0056d7d4d64b0630a9fc26f60bStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_c4a5ea0056d7d4d64b0630a9fc26f60bStructure),
                    this.attr("Passport", "passportAttr", "passport", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_c4a5ea0056d7d4d64b0630a9fc26f60bStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_c4a5ea0056d7d4d64b0630a9fc26f60bStructure),
                    this.attr("Driving_licence", "driving_licenceAttr", "driving_licence", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_c4a5ea0056d7d4d64b0630a9fc26f60bStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_c4a5ea0056d7d4d64b0630a9fc26f60bStructure),
                    this.attr("Residence_permit", "residence_permitAttr", "residence_permit", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_c4a5ea0056d7d4d64b0630a9fc26f60bStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_c4a5ea0056d7d4d64b0630a9fc26f60bStructure),
                    this.attr("Immigration_status_document", "immigration_status_documentAttr", "immigration_status_document", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_c4a5ea0056d7d4d64b0630a9fc26f60bStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_c4a5ea0056d7d4d64b0630a9fc26f60bStructure),
                    this.attr("National_health_insurance_card", "national_health_insurance_cardAttr", "national_health_insurance_card", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_c4a5ea0056d7d4d64b0630a9fc26f60bStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_c4a5ea0056d7d4d64b0630a9fc26f60bStructure),
                    this.attr("Asylum_registration_card", "asylum_registration_cardAttr", "asylum_registration_card", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_c4a5ea0056d7d4d64b0630a9fc26f60bStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_c4a5ea0056d7d4d64b0630a9fc26f60bStructure),
                    this.attr("Visa", "visaAttr", "visa", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_c4a5ea0056d7d4d64b0630a9fc26f60bStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_c4a5ea0056d7d4d64b0630a9fc26f60bStructure),
                    this.attr("Service_identity_card", "service_identity_cardAttr", "service_identity_card", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_c4a5ea0056d7d4d64b0630a9fc26f60bStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_c4a5ea0056d7d4d64b0630a9fc26f60bStructure),
                    this.attr("Voter_id", "voter_idAttr", "voter_id", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_c4a5ea0056d7d4d64b0630a9fc26f60bStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_c4a5ea0056d7d4d64b0630a9fc26f60bStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_2aef4efdcc8a8ad935c2f051f3051327Structure = ST_2aef4efdcc8a8ad935c2f051f3051327StructureInner;

        var ST_2aef4efdcc8a8ad935c2f051f3051327Structure = ST_2aef4efdcc8a8ad935c2f051f3051327StructureInner;
        ST_2aef4efdcc8a8ad935c2f051f3051327Structure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$ST_10e78341d21be3a7dc573dcf4252c9dbStructure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_2aef4efdcc8a8ad935c2f051f3051327Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_10e78341d21be3a7dc573dcf4252c9dbStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Documents_supported", "documents_supportedAttr", "documents_supported", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_2aef4efdcc8a8ad935c2f051f3051327Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_2aef4efdcc8a8ad935c2f051f3051327Structure),
                    this.attr("Is_country_supported", "is_country_supportedAttr", "is_country_supported", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_10e78341d21be3a7dc573dcf4252c9dbStructure = ST_10e78341d21be3a7dc573dcf4252c9dbStructureInner;

        var ST_10e78341d21be3a7dc573dcf4252c9dbStructure = ST_10e78341d21be3a7dc573dcf4252c9dbStructureInner;
        ST_10e78341d21be3a7dc573dcf4252c9dbStructure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$ST_6669f981cb8653c55787de44bdd42a18Structure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_30cf47a274820f1ac96cf412803888fdStructure", "RESTAPIWebsocketOfficial.model$ST_10e78341d21be3a7dc573dcf4252c9dbStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_6669f981cb8653c55787de44bdd42a18StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Idv", "idvAttr", "idv", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_30cf47a274820f1ac96cf412803888fdStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_30cf47a274820f1ac96cf412803888fdStructure),
                    this.attr("Onfido", "onfidoAttr", "onfido", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_10e78341d21be3a7dc573dcf4252c9dbStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_10e78341d21be3a7dc573dcf4252c9dbStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_6669f981cb8653c55787de44bdd42a18Structure = ST_6669f981cb8653c55787de44bdd42a18StructureInner;

        var ST_6669f981cb8653c55787de44bdd42a18Structure = ST_6669f981cb8653c55787de44bdd42a18StructureInner;
        ST_6669f981cb8653c55787de44bdd42a18Structure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$ST_8812c3cbc0a0d322acb5354526a670b4Structure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_6669f981cb8653c55787de44bdd42a18Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_8812c3cbc0a0d322acb5354526a670b4StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Services", "servicesAttr", "services", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_6669f981cb8653c55787de44bdd42a18Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_6669f981cb8653c55787de44bdd42a18Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new ST_8812c3cbc0a0d322acb5354526a670b4Structure(new ST_8812c3cbc0a0d322acb5354526a670b4Structure.RecordClass({
                    servicesAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_8812c3cbc0a0d322acb5354526a670b4Structure = ST_8812c3cbc0a0d322acb5354526a670b4StructureInner;

        var ST_8812c3cbc0a0d322acb5354526a670b4Structure = ST_8812c3cbc0a0d322acb5354526a670b4StructureInner;
        ST_8812c3cbc0a0d322acb5354526a670b4Structure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$ST_a37989da54adde60afe7657f5bc1d06eStructure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_a37989da54adde60afe7657f5bc1d06eStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Accept", "acceptAttr", "accept", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("Message", "messageAttr", "message", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_a37989da54adde60afe7657f5bc1d06eStructure = ST_a37989da54adde60afe7657f5bc1d06eStructureInner;

        var ST_a37989da54adde60afe7657f5bc1d06eStructure = ST_a37989da54adde60afe7657f5bc1d06eStructureInner;
        ST_a37989da54adde60afe7657f5bc1d06eStructure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$ST_d845e9af38689337f2bff5d766253a88Structure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_d845e9af38689337f2bff5d766253a88StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Bvi", "bviAttr", "bvi", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Labuan", "labuanAttr", "labuan", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Vanuatu", "vanuatuAttr", "vanuatu", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_d845e9af38689337f2bff5d766253a88Structure = ST_d845e9af38689337f2bff5d766253a88StructureInner;

        var ST_d845e9af38689337f2bff5d766253a88Structure = ST_d845e9af38689337f2bff5d766253a88StructureInner;
        ST_d845e9af38689337f2bff5d766253a88Structure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$ST_c77c7364c5e093c1d601fe854bbf1fd7Structure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_d845e9af38689337f2bff5d766253a88Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_c77c7364c5e093c1d601fe854bbf1fd7StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Default", "defaultAttr", "default", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Landing_company", "landing_companyAttr", "landing_company", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_d845e9af38689337f2bff5d766253a88Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_d845e9af38689337f2bff5d766253a88Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_c77c7364c5e093c1d601fe854bbf1fd7Structure = ST_c77c7364c5e093c1d601fe854bbf1fd7StructureInner;

        var ST_c77c7364c5e093c1d601fe854bbf1fd7Structure = ST_c77c7364c5e093c1d601fe854bbf1fd7StructureInner;
        ST_c77c7364c5e093c1d601fe854bbf1fd7Structure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$ST_113226709b84b71c70ebd50296313568Structure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_113226709b84b71c70ebd50296313568StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Max_limit", "max_limitAttr", "max_limit", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new ST_113226709b84b71c70ebd50296313568Structure(new ST_113226709b84b71c70ebd50296313568Structure.RecordClass({
                    max_limitAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_113226709b84b71c70ebd50296313568Structure = ST_113226709b84b71c70ebd50296313568StructureInner;

        var ST_113226709b84b71c70ebd50296313568Structure = ST_113226709b84b71c70ebd50296313568StructureInner;
        ST_113226709b84b71c70ebd50296313568Structure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$ST_9eb2d1268b055c9ba20852d2758a5050Structure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_a37989da54adde60afe7657f5bc1d06eStructure", "RESTAPIWebsocketOfficial.model$ST_c77c7364c5e093c1d601fe854bbf1fd7Structure", "RESTAPIWebsocketOfficial.model$ST_113226709b84b71c70ebd50296313568Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_9eb2d1268b055c9ba20852d2758a5050StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Disclaimer", "disclaimerAttr", "disclaimer", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_a37989da54adde60afe7657f5bc1d06eStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_a37989da54adde60afe7657f5bc1d06eStructure),
                    this.attr("Risk_level", "risk_levelAttr", "risk_level", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_c77c7364c5e093c1d601fe854bbf1fd7Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_c77c7364c5e093c1d601fe854bbf1fd7Structure),
                    this.attr("Turnover", "turnoverAttr", "turnover", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_113226709b84b71c70ebd50296313568Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_113226709b84b71c70ebd50296313568Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_9eb2d1268b055c9ba20852d2758a5050Structure = ST_9eb2d1268b055c9ba20852d2758a5050StructureInner;

        var ST_9eb2d1268b055c9ba20852d2758a5050Structure = ST_9eb2d1268b055c9ba20852d2758a5050StructureInner;
        ST_9eb2d1268b055c9ba20852d2758a5050Structure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$ST_bf5d4ab423fae3ff38a977653adc8398Structure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_b5282edb36283adb40969ef7004c3e79Structure", "RESTAPIWebsocketOfficial.model$ST_8812c3cbc0a0d322acb5354526a670b4Structure", "RESTAPIWebsocketOfficial.model$ST_9eb2d1268b055c9ba20852d2758a5050Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_bf5d4ab423fae3ff38a977653adc8398StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Common_reporting_standard", "common_reporting_standardAttr", "common_reporting_standard", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_b5282edb36283adb40969ef7004c3e79Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_b5282edb36283adb40969ef7004c3e79Structure),
                    this.attr("Identity", "identityAttr", "identity", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_8812c3cbc0a0d322acb5354526a670b4Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_8812c3cbc0a0d322acb5354526a670b4Structure),
                    this.attr("Jurisdiction_risk_assessment", "jurisdiction_risk_assessmentAttr", "jurisdiction_risk_assessment", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_9eb2d1268b055c9ba20852d2758a5050Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_9eb2d1268b055c9ba20852d2758a5050Structure),
                    this.attr("Phone_idd", "phone_iddAttr", "phone_idd", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Text", "textAttr", "text", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Value", "valueAttr", "value", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Tin_format", "tin_formatAttr", "tin_format", false, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
                    }, true, OS.DataTypes.TextList),
                    this.attr("Disabled", "disabledAttr", "disabled", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Partner_signup", "partner_signupAttr", "partner_signup", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("Selected", "selectedAttr", "selected", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Account_opening_self_declaration_required", "account_opening_self_declaration_requiredAttr", "account_opening_self_declaration_required", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_bf5d4ab423fae3ff38a977653adc8398Structure = ST_bf5d4ab423fae3ff38a977653adc8398StructureInner;

        var ST_bf5d4ab423fae3ff38a977653adc8398Structure = ST_bf5d4ab423fae3ff38a977653adc8398StructureInner;
        ST_bf5d4ab423fae3ff38a977653adc8398Structure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_071a5687136a6dbeecb0a0d193c188a2", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_bf5d4ab423fae3ff38a977653adc8398Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_071a5687136a6dbeecb0a0d193c188a2 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_bf5d4ab423fae3ff38a977653adc8398Structure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_071a5687136a6dbeecb0a0d193c188a2 = RL_071a5687136a6dbeecb0a0d193c188a2;

});

define("RESTAPIWebsocketOfficial.model$ST_63a473e932ef99f5271718b62399e682Structure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_bf5d4ab423fae3ff38a977653adc8398Structure", "RESTAPIWebsocketOfficial.model$RL_071a5687136a6dbeecb0a0d193c188a2"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_63a473e932ef99f5271718b62399e682StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Residence_list", "residence_listAttr", "residence_list", false, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.RL_071a5687136a6dbeecb0a0d193c188a2());
                    }, true, RESTAPIWebsocketOfficialModel.RL_071a5687136a6dbeecb0a0d193c188a2)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new ST_63a473e932ef99f5271718b62399e682Structure(new ST_63a473e932ef99f5271718b62399e682Structure.RecordClass({
                    residence_listAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_63a473e932ef99f5271718b62399e682Structure = ST_63a473e932ef99f5271718b62399e682StructureInner;

        var ST_63a473e932ef99f5271718b62399e682Structure = ST_63a473e932ef99f5271718b62399e682StructureInner;
        ST_63a473e932ef99f5271718b62399e682Structure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RC_0a5ac3085c044e0c9df151a275033fc0", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_63a473e932ef99f5271718b62399e682Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
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

        RESTAPIWebsocketOfficialModel.RC_0a5ac3085c044e0c9df151a275033fc0 = RC_0a5ac3085c044e0c9df151a275033fc0Inner;

        RC_0a5ac3085c044e0c9df151a275033fc0Inner._isAnonymousRecord = true;
        RC_0a5ac3085c044e0c9df151a275033fc0Inner.UniqueId = "0a5ac308-5c04-4e0c-9df1-51a275033fc0";
        var RC_0a5ac3085c044e0c9df151a275033fc0 = RC_0a5ac3085c044e0c9df151a275033fc0Inner;
        RC_0a5ac3085c044e0c9df151a275033fc0.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_06044e18a6adcb4a057162249eab9621", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_0a5ac3085c044e0c9df151a275033fc0"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_06044e18a6adcb4a057162249eab9621 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_0a5ac3085c044e0c9df151a275033fc0;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_06044e18a6adcb4a057162249eab9621 = RL_06044e18a6adcb4a057162249eab9621;

});

define("RESTAPIWebsocketOfficial.model$ST_ae40a5e8008c1f0252b9952ccf57ee94Structure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_ae40a5e8008c1f0252b9952ccf57ee94StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Logout", "logoutAttr", "logout", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new ST_ae40a5e8008c1f0252b9952ccf57ee94Structure(new ST_ae40a5e8008c1f0252b9952ccf57ee94Structure.RecordClass({
                    logoutAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_ae40a5e8008c1f0252b9952ccf57ee94Structure = ST_ae40a5e8008c1f0252b9952ccf57ee94StructureInner;

        var ST_ae40a5e8008c1f0252b9952ccf57ee94Structure = ST_ae40a5e8008c1f0252b9952ccf57ee94StructureInner;
        ST_ae40a5e8008c1f0252b9952ccf57ee94Structure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$ST_bc9f0cd5cd952aeeadf59ee9a5dfb79aStructure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_ae40a5e8008c1f0252b9952ccf57ee94Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_bc9f0cd5cd952aeeadf59ee9a5dfb79aStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Echo_req", "echo_reqAttr", "echo_req", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_ae40a5e8008c1f0252b9952ccf57ee94Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_ae40a5e8008c1f0252b9952ccf57ee94Structure),
                    this.attr("Logout", "logoutAttr", "logout", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("Msg_type", "msg_typeAttr", "msg_type", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_bc9f0cd5cd952aeeadf59ee9a5dfb79aStructure = ST_bc9f0cd5cd952aeeadf59ee9a5dfb79aStructureInner;

        var ST_bc9f0cd5cd952aeeadf59ee9a5dfb79aStructure = ST_bc9f0cd5cd952aeeadf59ee9a5dfb79aStructureInner;
        ST_bc9f0cd5cd952aeeadf59ee9a5dfb79aStructure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_06622fbce6cdd9c0cef8e5e1e42d7483", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_bc9f0cd5cd952aeeadf59ee9a5dfb79aStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_06622fbce6cdd9c0cef8e5e1e42d7483 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_bc9f0cd5cd952aeeadf59ee9a5dfb79aStructure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_06622fbce6cdd9c0cef8e5e1e42d7483 = RL_06622fbce6cdd9c0cef8e5e1e42d7483;

});

define("RESTAPIWebsocketOfficial.model$RC_7501a1e5933671743a2bbef56326a047", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_b5282edb36283adb40969ef7004c3e79Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
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

        RESTAPIWebsocketOfficialModel.RC_7501a1e5933671743a2bbef56326a047 = RC_7501a1e5933671743a2bbef56326a047Inner;

        RC_7501a1e5933671743a2bbef56326a047Inner._isAnonymousRecord = true;
        RC_7501a1e5933671743a2bbef56326a047Inner.UniqueId = "7501a1e5-9336-7174-3a2b-bef56326a047";
        var RC_7501a1e5933671743a2bbef56326a047 = RC_7501a1e5933671743a2bbef56326a047Inner;
        RC_7501a1e5933671743a2bbef56326a047.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_06ad8081ecdd4854820e95cbc9df15a8", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_7501a1e5933671743a2bbef56326a047"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_06ad8081ecdd4854820e95cbc9df15a8 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_7501a1e5933671743a2bbef56326a047;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_06ad8081ecdd4854820e95cbc9df15a8 = RL_06ad8081ecdd4854820e95cbc9df15a8;

});

define("RESTAPIWebsocketOfficial.model$RC_08d13aa30e14041e8a414b5d62b51845", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_4e063a3cef8e9e085284fb57c1326006Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_08d13aa30e14041e8a414b5d62b51845Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Transfer_between_account", "transfer_between_accountAttr", "Transfer_between_account", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_4e063a3cef8e9e085284fb57c1326006Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_4e063a3cef8e9e085284fb57c1326006Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_08d13aa30e14041e8a414b5d62b51845(new RC_08d13aa30e14041e8a414b5d62b51845.RecordClass({
                    transfer_between_accountAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_08d13aa30e14041e8a414b5d62b51845 = RC_08d13aa30e14041e8a414b5d62b51845Inner;

        RC_08d13aa30e14041e8a414b5d62b51845Inner._isAnonymousRecord = true;
        RC_08d13aa30e14041e8a414b5d62b51845Inner.UniqueId = "08d13aa3-0e14-041e-8a41-4b5d62b51845";
        var RC_08d13aa30e14041e8a414b5d62b51845 = RC_08d13aa30e14041e8a414b5d62b51845Inner;
        RC_08d13aa30e14041e8a414b5d62b51845.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_0706637a7e12b34ea54e4ad5e3fa7774", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_08d13aa30e14041e8a414b5d62b51845"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_0706637a7e12b34ea54e4ad5e3fa7774 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_08d13aa30e14041e8a414b5d62b51845;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_0706637a7e12b34ea54e4ad5e3fa7774 = RL_0706637a7e12b34ea54e4ad5e3fa7774;

});

define("RESTAPIWebsocketOfficial.model$ST_514eb2dd1a273e9cef6da33626bbf692Structure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_514eb2dd1a273e9cef6da33626bbf692StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("new_password", "new_passwordAttr", "new_password", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("platform", "platformAttr", "platform", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("verification_code", "verification_codeAttr", "verification_code", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_514eb2dd1a273e9cef6da33626bbf692Structure = ST_514eb2dd1a273e9cef6da33626bbf692StructureInner;

        var ST_514eb2dd1a273e9cef6da33626bbf692Structure = ST_514eb2dd1a273e9cef6da33626bbf692StructureInner;
        ST_514eb2dd1a273e9cef6da33626bbf692Structure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RC_b95c380c099a10aa1c6c66ff29a6b5ad", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_514eb2dd1a273e9cef6da33626bbf692Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_b95c380c099a10aa1c6c66ff29a6b5adInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("PostTradingPlatformPasswordResetRequest", "postTradingPlatformPasswordResetRequestAttr", "PostTradingPlatformPasswordResetRequest", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_514eb2dd1a273e9cef6da33626bbf692Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_514eb2dd1a273e9cef6da33626bbf692Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_b95c380c099a10aa1c6c66ff29a6b5ad(new RC_b95c380c099a10aa1c6c66ff29a6b5ad.RecordClass({
                    postTradingPlatformPasswordResetRequestAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_b95c380c099a10aa1c6c66ff29a6b5ad = RC_b95c380c099a10aa1c6c66ff29a6b5adInner;

        RC_b95c380c099a10aa1c6c66ff29a6b5adInner._isAnonymousRecord = true;
        RC_b95c380c099a10aa1c6c66ff29a6b5adInner.UniqueId = "b95c380c-099a-10aa-1c6c-66ff29a6b5ad";
        var RC_b95c380c099a10aa1c6c66ff29a6b5ad = RC_b95c380c099a10aa1c6c66ff29a6b5adInner;
        RC_b95c380c099a10aa1c6c66ff29a6b5ad.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_0755631e3e89e106d6250421ad51275f", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_b95c380c099a10aa1c6c66ff29a6b5ad"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_0755631e3e89e106d6250421ad51275f extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_b95c380c099a10aa1c6c66ff29a6b5ad;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_0755631e3e89e106d6250421ad51275f = RL_0755631e3e89e106d6250421ad51275f;

});

define("RESTAPIWebsocketOfficial.model$ST_cef0b20847ad169551dbf51efb01e613Structure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_cef0b20847ad169551dbf51efb01e613StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Trading_platform_password_reset", "trading_platform_password_resetAttr", "trading_platform_password_reset", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("New_password", "new_passwordAttr", "new_password", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Verification_code", "verification_codeAttr", "verification_code", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Platform", "platformAttr", "platform", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Req_id", "req_idAttr", "req_id", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_cef0b20847ad169551dbf51efb01e613Structure = ST_cef0b20847ad169551dbf51efb01e613StructureInner;

        var ST_cef0b20847ad169551dbf51efb01e613Structure = ST_cef0b20847ad169551dbf51efb01e613StructureInner;
        ST_cef0b20847ad169551dbf51efb01e613Structure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$ST_07c55c1e5241bcf8a9665901701e0dbfStructure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_cef0b20847ad169551dbf51efb01e613Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_07c55c1e5241bcf8a9665901701e0dbfStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Echo_req", "echo_reqAttr", "echo_req", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_cef0b20847ad169551dbf51efb01e613Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_cef0b20847ad169551dbf51efb01e613Structure),
                    this.attr("Msg_type", "msg_typeAttr", "msg_type", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Req_id", "req_idAttr", "req_id", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("Trading_platform_password_reset", "trading_platform_password_resetAttr", "trading_platform_password_reset", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_07c55c1e5241bcf8a9665901701e0dbfStructure = ST_07c55c1e5241bcf8a9665901701e0dbfStructureInner;

        var ST_07c55c1e5241bcf8a9665901701e0dbfStructure = ST_07c55c1e5241bcf8a9665901701e0dbfStructureInner;
        ST_07c55c1e5241bcf8a9665901701e0dbfStructure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$ST_d4ed48681c55954edc02f19b0ed492e7Structure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_d4ed48681c55954edc02f19b0ed492e7StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Type", "typeAttr", "type", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Client_password", "client_passwordAttr", "client_password", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Residence", "residenceAttr", "residence", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Verification_code", "verification_codeAttr", "verification_code", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Affiliate_token", "affiliate_tokenAttr", "affiliate_token", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Gclid_url", "gclid_urlAttr", "gclid_url", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Utm_ad_id", "utm_ad_idAttr", "utm_ad_id", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Utm_adgroup_id", "utm_adgroup_idAttr", "utm_adgroup_id", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Utm_adrollclk_id", "utm_adrollclk_idAttr", "utm_adrollclk_id", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Utm_campaign", "utm_campaignAttr", "utm_campaign", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Utm_campaign_id", "utm_campaign_idAttr", "utm_campaign_id", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Utm_content", "utm_contentAttr", "utm_content", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Utm_fbcl_id", "utm_fbcl_idAttr", "utm_fbcl_id", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Utm_gl_client_id", "utm_gl_client_idAttr", "utm_gl_client_id", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Utm_medium", "utm_mediumAttr", "utm_medium", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Utm_msclk_id", "utm_msclk_idAttr", "utm_msclk_id", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Utm_source", "utm_sourceAttr", "utm_source", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Utm_term", "utm_termAttr", "utm_term", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_d4ed48681c55954edc02f19b0ed492e7Structure = ST_d4ed48681c55954edc02f19b0ed492e7StructureInner;

        var ST_d4ed48681c55954edc02f19b0ed492e7Structure = ST_d4ed48681c55954edc02f19b0ed492e7StructureInner;
        ST_d4ed48681c55954edc02f19b0ed492e7Structure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$ST_94d54d268b2cff4f4ed014a5df48da20Structure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_94d54d268b2cff4f4ed014a5df48da20StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Balance", "balanceAttr", "balance", false, false, OS.DataTypes.DataTypes.Decimal, function() {
                        return OS.DataTypes.Decimal.defaultValue;
                    }, true),
                    this.attr("Client_id", "client_idAttr", "client_id", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Currency", "currencyAttr", "currency", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Currency_type", "currency_typeAttr", "currency_type", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Email", "emailAttr", "email", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Oauth_token", "oauth_tokenAttr", "oauth_token", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Refresh_token", "refresh_tokenAttr", "refresh_token", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Type", "typeAttr", "type", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_94d54d268b2cff4f4ed014a5df48da20Structure = ST_94d54d268b2cff4f4ed014a5df48da20StructureInner;

        var ST_94d54d268b2cff4f4ed014a5df48da20Structure = ST_94d54d268b2cff4f4ed014a5df48da20StructureInner;
        ST_94d54d268b2cff4f4ed014a5df48da20Structure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$ST_72900159fa859d96c9b5e8531e637a4cStructure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_d4ed48681c55954edc02f19b0ed492e7Structure", "RESTAPIWebsocketOfficial.model$ST_94d54d268b2cff4f4ed014a5df48da20Structure", "RESTAPIWebsocketOfficial.model$ST_8517d9c8b73e866553a1a7b806af5079Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_72900159fa859d96c9b5e8531e637a4cStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Echo_req", "echo_reqAttr", "echo_req", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_d4ed48681c55954edc02f19b0ed492e7Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_d4ed48681c55954edc02f19b0ed492e7Structure),
                    this.attr("Msg_type", "msg_typeAttr", "msg_type", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("New_account_virtual", "new_account_virtualAttr", "new_account_virtual", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_94d54d268b2cff4f4ed014a5df48da20Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_94d54d268b2cff4f4ed014a5df48da20Structure),
                    this.attr("Error", "errorAttr", "Error", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_8517d9c8b73e866553a1a7b806af5079Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_8517d9c8b73e866553a1a7b806af5079Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_72900159fa859d96c9b5e8531e637a4cStructure = ST_72900159fa859d96c9b5e8531e637a4cStructureInner;

        var ST_72900159fa859d96c9b5e8531e637a4cStructure = ST_72900159fa859d96c9b5e8531e637a4cStructureInner;
        ST_72900159fa859d96c9b5e8531e637a4cStructure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_07d4f66324fea8299f2f66d1b9c5293b", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_72900159fa859d96c9b5e8531e637a4cStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_07d4f66324fea8299f2f66d1b9c5293b extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_72900159fa859d96c9b5e8531e637a4cStructure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_07d4f66324fea8299f2f66d1b9c5293b = RL_07d4f66324fea8299f2f66d1b9c5293b;

});

define("RESTAPIWebsocketOfficial.model$RL_08493c76d04a33db201691368d61ec98", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_e9350867621f419f78bd47d2bb88d9ceStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_08493c76d04a33db201691368d61ec98 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_e9350867621f419f78bd47d2bb88d9ceStructure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_08493c76d04a33db201691368d61ec98 = RL_08493c76d04a33db201691368d61ec98;

});

define("RESTAPIWebsocketOfficial.model$RL_085f95fe6d8c0993316da931c0bd457a", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_c4a5ea0056d7d4d64b0630a9fc26f60bStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_085f95fe6d8c0993316da931c0bd457a extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_c4a5ea0056d7d4d64b0630a9fc26f60bStructure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_085f95fe6d8c0993316da931c0bd457a = RL_085f95fe6d8c0993316da931c0bd457a;

});

define("RESTAPIWebsocketOfficial.model$RC_b654e7cd3dd9ac2b1fbdd9af9d59a56a", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_ec58aaccd7b190d47a2dd7159fa0d866Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_b654e7cd3dd9ac2b1fbdd9af9d59a56aInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("KYC_Identity", "kYC_IdentityAttr", "KYC_Identity", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_ec58aaccd7b190d47a2dd7159fa0d866Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_ec58aaccd7b190d47a2dd7159fa0d866Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_b654e7cd3dd9ac2b1fbdd9af9d59a56a(new RC_b654e7cd3dd9ac2b1fbdd9af9d59a56a.RecordClass({
                    kYC_IdentityAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_b654e7cd3dd9ac2b1fbdd9af9d59a56a = RC_b654e7cd3dd9ac2b1fbdd9af9d59a56aInner;

        RC_b654e7cd3dd9ac2b1fbdd9af9d59a56aInner._isAnonymousRecord = true;
        RC_b654e7cd3dd9ac2b1fbdd9af9d59a56aInner.UniqueId = "b654e7cd-3dd9-ac2b-1fbd-d9af9d59a56a";
        var RC_b654e7cd3dd9ac2b1fbdd9af9d59a56a = RC_b654e7cd3dd9ac2b1fbdd9af9d59a56aInner;
        RC_b654e7cd3dd9ac2b1fbdd9af9d59a56a.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_08d09f34c86e6f5622489301d79ff8a8", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_b654e7cd3dd9ac2b1fbdd9af9d59a56a"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_08d09f34c86e6f5622489301d79ff8a8 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_b654e7cd3dd9ac2b1fbdd9af9d59a56a;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_08d09f34c86e6f5622489301d79ff8a8 = RL_08d09f34c86e6f5622489301d79ff8a8;

});

define("RESTAPIWebsocketOfficial.model$ST_4dc58b9edb8582c76248b762d6650913Structure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_4dc58b9edb8582c76248b762d6650913StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Platform", "platformAttr", "platform", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Req_id", "req_idAttr", "req_id", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("Trading_platform_accounts", "trading_platform_accountsAttr", "trading_platform_accounts", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_4dc58b9edb8582c76248b762d6650913Structure = ST_4dc58b9edb8582c76248b762d6650913StructureInner;

        var ST_4dc58b9edb8582c76248b762d6650913Structure = ST_4dc58b9edb8582c76248b762d6650913StructureInner;
        ST_4dc58b9edb8582c76248b762d6650913Structure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RC_832614e442cb28467f1d84472c884ebb", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_4dc58b9edb8582c76248b762d6650913Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_832614e442cb28467f1d84472c884ebbInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Echo_req10", "echo_req10Attr", "Echo_req10", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_4dc58b9edb8582c76248b762d6650913Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_4dc58b9edb8582c76248b762d6650913Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_832614e442cb28467f1d84472c884ebb(new RC_832614e442cb28467f1d84472c884ebb.RecordClass({
                    echo_req10Attr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_832614e442cb28467f1d84472c884ebb = RC_832614e442cb28467f1d84472c884ebbInner;

        RC_832614e442cb28467f1d84472c884ebbInner._isAnonymousRecord = true;
        RC_832614e442cb28467f1d84472c884ebbInner.UniqueId = "832614e4-42cb-2846-7f1d-84472c884ebb";
        var RC_832614e442cb28467f1d84472c884ebb = RC_832614e442cb28467f1d84472c884ebbInner;
        RC_832614e442cb28467f1d84472c884ebb.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_08ec9fd9082ce97be1a7ef16873ad7f8", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_832614e442cb28467f1d84472c884ebb"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_08ec9fd9082ce97be1a7ef16873ad7f8 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_832614e442cb28467f1d84472c884ebb;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_08ec9fd9082ce97be1a7ef16873ad7f8 = RL_08ec9fd9082ce97be1a7ef16873ad7f8;

});

define("RESTAPIWebsocketOfficial.model$ST_39c69c310b1fed6e6a637381cf367162Structure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_39c69c310b1fed6e6a637381cf367162StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Website_status", "website_statusAttr", "website_status", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new ST_39c69c310b1fed6e6a637381cf367162Structure(new ST_39c69c310b1fed6e6a637381cf367162Structure.RecordClass({
                    website_statusAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_39c69c310b1fed6e6a637381cf367162Structure = ST_39c69c310b1fed6e6a637381cf367162StructureInner;

        var ST_39c69c310b1fed6e6a637381cf367162Structure = ST_39c69c310b1fed6e6a637381cf367162StructureInner;
        ST_39c69c310b1fed6e6a637381cf367162Structure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$ST_ac4f1b4870aba80de82d4c04f7b530ceStructure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_ac4f1b4870aba80de82d4c04f7b530ceStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Applies_to", "applies_toAttr", "applies_to", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Max", "maxAttr", "max", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_ac4f1b4870aba80de82d4c04f7b530ceStructure = ST_ac4f1b4870aba80de82d4c04f7b530ceStructureInner;

        var ST_ac4f1b4870aba80de82d4c04f7b530ceStructure = ST_ac4f1b4870aba80de82d4c04f7b530ceStructureInner;
        ST_ac4f1b4870aba80de82d4c04f7b530ceStructure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$ST_e9af53f34f5d2c71a49407f1ed42d7f7Structure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_e9af53f34f5d2c71a49407f1ed42d7f7StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Applies_to", "applies_toAttr", "applies_to", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Hourly", "hourlyAttr", "hourly", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("Minutely", "minutelyAttr", "minutely", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_e9af53f34f5d2c71a49407f1ed42d7f7Structure = ST_e9af53f34f5d2c71a49407f1ed42d7f7StructureInner;

        var ST_e9af53f34f5d2c71a49407f1ed42d7f7Structure = ST_e9af53f34f5d2c71a49407f1ed42d7f7StructureInner;
        ST_e9af53f34f5d2c71a49407f1ed42d7f7Structure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$ST_af8134183a4bd7e3eec97ada0cf46b5eStructure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_ac4f1b4870aba80de82d4c04f7b530ceStructure", "RESTAPIWebsocketOfficial.model$ST_e9af53f34f5d2c71a49407f1ed42d7f7Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_af8134183a4bd7e3eec97ada0cf46b5eStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Max_proposal_subscription", "max_proposal_subscriptionAttr", "max_proposal_subscription", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_ac4f1b4870aba80de82d4c04f7b530ceStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_ac4f1b4870aba80de82d4c04f7b530ceStructure),
                    this.attr("Max_requestes_general", "max_requestes_generalAttr", "max_requestes_general", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_e9af53f34f5d2c71a49407f1ed42d7f7Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_e9af53f34f5d2c71a49407f1ed42d7f7Structure),
                    this.attr("Max_requests_outcome", "max_requests_outcomeAttr", "max_requests_outcome", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_e9af53f34f5d2c71a49407f1ed42d7f7Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_e9af53f34f5d2c71a49407f1ed42d7f7Structure),
                    this.attr("Max_requests_pricing", "max_requests_pricingAttr", "max_requests_pricing", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_e9af53f34f5d2c71a49407f1ed42d7f7Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_e9af53f34f5d2c71a49407f1ed42d7f7Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_af8134183a4bd7e3eec97ada0cf46b5eStructure = ST_af8134183a4bd7e3eec97ada0cf46b5eStructureInner;

        var ST_af8134183a4bd7e3eec97ada0cf46b5eStructure = ST_af8134183a4bd7e3eec97ada0cf46b5eStructureInner;
        ST_af8134183a4bd7e3eec97ada0cf46b5eStructure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$ST_6eafdf6bd9852632690d0672a511a98fStructure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_b8e5132e8639404a10bb651dc17997bcStructure", "RESTAPIWebsocketOfficial.model$ST_4e063a3cef8e9e085284fb57c1326006Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_6eafdf6bd9852632690d0672a511a98fStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Fractional_digits", "fractional_digitsAttr", "fractional_digits", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("Is_deposit_suspended", "is_deposit_suspendedAttr", "is_deposit_suspended", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("Is_suspended", "is_suspendedAttr", "is_suspended", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("Is_withdrawal_suspended", "is_withdrawal_suspendedAttr", "is_withdrawal_suspended", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("Name", "nameAttr", "name", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Platform", "platformAttr", "platform", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_b8e5132e8639404a10bb651dc17997bcStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_b8e5132e8639404a10bb651dc17997bcStructure),
                    this.attr("Stake_default", "stake_defaultAttr", "stake_default", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("Transfer_between_accounts", "transfer_between_accountsAttr", "transfer_between_accounts", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_4e063a3cef8e9e085284fb57c1326006Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_4e063a3cef8e9e085284fb57c1326006Structure),
                    this.attr("Type", "typeAttr", "type", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_6eafdf6bd9852632690d0672a511a98fStructure = ST_6eafdf6bd9852632690d0672a511a98fStructureInner;

        var ST_6eafdf6bd9852632690d0672a511a98fStructure = ST_6eafdf6bd9852632690d0672a511a98fStructureInner;
        ST_6eafdf6bd9852632690d0672a511a98fStructure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$ST_4fa180d49a839964a4a640104b10a272Structure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_6eafdf6bd9852632690d0672a511a98fStructure", "RESTAPIWebsocketOfficial.model$ST_04eaf04e4147681bc07ba614af4e7e78Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_4fa180d49a839964a4a640104b10a272StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("AUD", "aUDAttr", "AUD", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_6eafdf6bd9852632690d0672a511a98fStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_6eafdf6bd9852632690d0672a511a98fStructure),
                    this.attr("BTC", "bTCAttr", "BTC", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_04eaf04e4147681bc07ba614af4e7e78Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_04eaf04e4147681bc07ba614af4e7e78Structure),
                    this.attr("ETH", "eTHAttr", "ETH", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_04eaf04e4147681bc07ba614af4e7e78Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_04eaf04e4147681bc07ba614af4e7e78Structure),
                    this.attr("EUR", "eURAttr", "EUR", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_6eafdf6bd9852632690d0672a511a98fStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_6eafdf6bd9852632690d0672a511a98fStructure),
                    this.attr("GBP", "gBPAttr", "GBP", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_6eafdf6bd9852632690d0672a511a98fStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_6eafdf6bd9852632690d0672a511a98fStructure),
                    this.attr("LTC", "lTCAttr", "LTC", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_04eaf04e4147681bc07ba614af4e7e78Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_04eaf04e4147681bc07ba614af4e7e78Structure),
                    this.attr("USD", "uSDAttr", "USD", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_6eafdf6bd9852632690d0672a511a98fStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_6eafdf6bd9852632690d0672a511a98fStructure),
                    this.attr("USDC", "uSDCAttr", "USDC", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_04eaf04e4147681bc07ba614af4e7e78Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_04eaf04e4147681bc07ba614af4e7e78Structure),
                    this.attr("UST", "uSTAttr", "UST", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_04eaf04e4147681bc07ba614af4e7e78Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_04eaf04e4147681bc07ba614af4e7e78Structure),
                    this.attr("XRP", "xRPAttr", "XRP", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_04eaf04e4147681bc07ba614af4e7e78Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_04eaf04e4147681bc07ba614af4e7e78Structure),
                    this.attr("EUSDT", "eUSDTAttr", "eUSDT", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_04eaf04e4147681bc07ba614af4e7e78Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_04eaf04e4147681bc07ba614af4e7e78Structure),
                    this.attr("TUSDT", "tUSDTAttr", "tUSDT", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_04eaf04e4147681bc07ba614af4e7e78Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_04eaf04e4147681bc07ba614af4e7e78Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_4fa180d49a839964a4a640104b10a272Structure = ST_4fa180d49a839964a4a640104b10a272StructureInner;

        var ST_4fa180d49a839964a4a640104b10a272Structure = ST_4fa180d49a839964a4a640104b10a272StructureInner;
        ST_4fa180d49a839964a4a640104b10a272Structure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$ST_977d84487e32bee2c1a14da15d247b5fStructure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_977d84487e32bee2c1a14da15d247b5fStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("All", "allAttr", "all", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("Demo", "demoAttr", "demo", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("Real", "realAttr", "real", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_977d84487e32bee2c1a14da15d247b5fStructure = ST_977d84487e32bee2c1a14da15d247b5fStructureInner;

        var ST_977d84487e32bee2c1a14da15d247b5fStructure = ST_977d84487e32bee2c1a14da15d247b5fStructureInner;
        ST_977d84487e32bee2c1a14da15d247b5fStructure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$ST_cd83fe90bac6d8f5fe1d8e3dce9729c1Structure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_cd83fe90bac6d8f5fe1d8e3dce9729c1StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("All", "allAttr", "all", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("Platform", "platformAttr", "platform", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("Server_number", "server_numberAttr", "server_number", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("Deposits", "depositsAttr", "deposits", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("Withdrawals", "withdrawalsAttr", "withdrawals", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_cd83fe90bac6d8f5fe1d8e3dce9729c1Structure = ST_cd83fe90bac6d8f5fe1d8e3dce9729c1StructureInner;

        var ST_cd83fe90bac6d8f5fe1d8e3dce9729c1Structure = ST_cd83fe90bac6d8f5fe1d8e3dce9729c1StructureInner;
        ST_cd83fe90bac6d8f5fe1d8e3dce9729c1Structure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_593060ea0fb9fd453ef904bd5780284a", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_cd83fe90bac6d8f5fe1d8e3dce9729c1Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_593060ea0fb9fd453ef904bd5780284a extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_cd83fe90bac6d8f5fe1d8e3dce9729c1Structure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_593060ea0fb9fd453ef904bd5780284a = RL_593060ea0fb9fd453ef904bd5780284a;

});

define("RESTAPIWebsocketOfficial.model$ST_9d2eeec2f5ab741e3d87ce62bfe442ffStructure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_cd83fe90bac6d8f5fe1d8e3dce9729c1Structure", "RESTAPIWebsocketOfficial.model$RL_593060ea0fb9fd453ef904bd5780284a"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_9d2eeec2f5ab741e3d87ce62bfe442ffStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Demo", "demoAttr", "demo", false, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.RL_593060ea0fb9fd453ef904bd5780284a());
                    }, true, RESTAPIWebsocketOfficialModel.RL_593060ea0fb9fd453ef904bd5780284a),
                    this.attr("Real", "realAttr", "real", false, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.RL_593060ea0fb9fd453ef904bd5780284a());
                    }, true, RESTAPIWebsocketOfficialModel.RL_593060ea0fb9fd453ef904bd5780284a)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_9d2eeec2f5ab741e3d87ce62bfe442ffStructure = ST_9d2eeec2f5ab741e3d87ce62bfe442ffStructureInner;

        var ST_9d2eeec2f5ab741e3d87ce62bfe442ffStructure = ST_9d2eeec2f5ab741e3d87ce62bfe442ffStructureInner;
        ST_9d2eeec2f5ab741e3d87ce62bfe442ffStructure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$ST_af97180714ce3993e80d246ca4429825Structure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_af97180714ce3993e80d246ca4429825StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("BR", "bRAttr", "BR", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("BW", "bWAttr", "BW", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("ID", "iDAttr", "ID", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("IN", "iNAttr", "IN", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("KE", "kEAttr", "KE", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("LK", "lKAttr", "LK", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("NG", "nGAttr", "NG", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("TZ", "tZAttr", "TZ", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("ZA", "zAAttr", "ZA", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("ZW", "zWAttr", "ZW", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("Default", "defaultAttr", "default", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_af97180714ce3993e80d246ca4429825Structure = ST_af97180714ce3993e80d246ca4429825StructureInner;

        var ST_af97180714ce3993e80d246ca4429825Structure = ST_af97180714ce3993e80d246ca4429825StructureInner;
        ST_af97180714ce3993e80d246ca4429825Structure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$ST_d331548db274235fee458e1a8f950858Structure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_af97180714ce3993e80d246ca4429825Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_d331548db274235fee458e1a8f950858StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Initial_deposit_per_country", "initial_deposit_per_countryAttr", "initial_deposit_per_country", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_af97180714ce3993e80d246ca4429825Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_af97180714ce3993e80d246ca4429825Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new ST_d331548db274235fee458e1a8f950858Structure(new ST_d331548db274235fee458e1a8f950858Structure.RecordClass({
                    initial_deposit_per_countryAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_d331548db274235fee458e1a8f950858Structure = ST_d331548db274235fee458e1a8f950858StructureInner;

        var ST_d331548db274235fee458e1a8f950858Structure = ST_d331548db274235fee458e1a8f950858StructureInner;
        ST_d331548db274235fee458e1a8f950858Structure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$ST_bbf8c5d47c5db3fd5346cb42e483a9fdStructure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_af8134183a4bd7e3eec97ada0cf46b5eStructure", "RESTAPIWebsocketOfficial.model$ST_4fa180d49a839964a4a640104b10a272Structure", "RESTAPIWebsocketOfficial.model$ST_977d84487e32bee2c1a14da15d247b5fStructure", "RESTAPIWebsocketOfficial.model$ST_9d2eeec2f5ab741e3d87ce62bfe442ffStructure", "RESTAPIWebsocketOfficial.model$ST_d331548db274235fee458e1a8f950858Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_bbf8c5d47c5db3fd5346cb42e483a9fdStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Api_call_limits", "api_call_limitsAttr", "api_call_limits", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_af8134183a4bd7e3eec97ada0cf46b5eStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_af8134183a4bd7e3eec97ada0cf46b5eStructure),
                    this.attr("Broker_codes", "broker_codesAttr", "broker_codes", false, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
                    }, true, OS.DataTypes.TextList),
                    this.attr("Clients_country", "clients_countryAttr", "clients_country", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Currencies_config", "currencies_configAttr", "currencies_config", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_4fa180d49a839964a4a640104b10a272Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_4fa180d49a839964a4a640104b10a272Structure),
                    this.attr("Dxtrade_status", "dxtrade_statusAttr", "dxtrade_status", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_977d84487e32bee2c1a14da15d247b5fStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_977d84487e32bee2c1a14da15d247b5fStructure),
                    this.attr("Mt5_status", "mt5_statusAttr", "mt5_status", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_9d2eeec2f5ab741e3d87ce62bfe442ffStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_9d2eeec2f5ab741e3d87ce62bfe442ffStructure),
                    this.attr("Payment_agents", "payment_agentsAttr", "payment_agents", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_d331548db274235fee458e1a8f950858Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_d331548db274235fee458e1a8f950858Structure),
                    this.attr("Supported_languages", "supported_languagesAttr", "supported_languages", false, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
                    }, true, OS.DataTypes.TextList),
                    this.attr("Terms_conditions_version", "terms_conditions_versionAttr", "terms_conditions_version", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_bbf8c5d47c5db3fd5346cb42e483a9fdStructure = ST_bbf8c5d47c5db3fd5346cb42e483a9fdStructureInner;

        var ST_bbf8c5d47c5db3fd5346cb42e483a9fdStructure = ST_bbf8c5d47c5db3fd5346cb42e483a9fdStructureInner;
        ST_bbf8c5d47c5db3fd5346cb42e483a9fdStructure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$ST_c864353821feed79663806f3e445d40eStructure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_39c69c310b1fed6e6a637381cf367162Structure", "RESTAPIWebsocketOfficial.model$ST_bbf8c5d47c5db3fd5346cb42e483a9fdStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_c864353821feed79663806f3e445d40eStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Echo_req", "echo_reqAttr", "echo_req", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_39c69c310b1fed6e6a637381cf367162Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_39c69c310b1fed6e6a637381cf367162Structure),
                    this.attr("Msg_type", "msg_typeAttr", "msg_type", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Website_status", "website_statusAttr", "website_status", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_bbf8c5d47c5db3fd5346cb42e483a9fdStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_bbf8c5d47c5db3fd5346cb42e483a9fdStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_c864353821feed79663806f3e445d40eStructure = ST_c864353821feed79663806f3e445d40eStructureInner;

        var ST_c864353821feed79663806f3e445d40eStructure = ST_c864353821feed79663806f3e445d40eStructureInner;
        ST_c864353821feed79663806f3e445d40eStructure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RC_091244483290da7633fe64666de188c0", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_c864353821feed79663806f3e445d40eStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_091244483290da7633fe64666de188c0Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("GetWebsiteStatusResponse", "getWebsiteStatusResponseAttr", "GetWebsiteStatusResponse", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_c864353821feed79663806f3e445d40eStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_c864353821feed79663806f3e445d40eStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_091244483290da7633fe64666de188c0(new RC_091244483290da7633fe64666de188c0.RecordClass({
                    getWebsiteStatusResponseAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_091244483290da7633fe64666de188c0 = RC_091244483290da7633fe64666de188c0Inner;

        RC_091244483290da7633fe64666de188c0Inner._isAnonymousRecord = true;
        RC_091244483290da7633fe64666de188c0Inner.UniqueId = "09124448-3290-da76-33fe-64666de188c0";
        var RC_091244483290da7633fe64666de188c0 = RC_091244483290da7633fe64666de188c0Inner;
        RC_091244483290da7633fe64666de188c0.init();
    }
});

define("RESTAPIWebsocketOfficial.model$ST_091b86786925fd05b892541280481403Structure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_091b86786925fd05b892541280481403StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Platform", "platformAttr", "platform", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Req_id", "req_idAttr", "req_id", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("trading_platform_accounts", "trading_platform_accountsAttr", "trading_platform_accounts", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_091b86786925fd05b892541280481403Structure = ST_091b86786925fd05b892541280481403StructureInner;

        var ST_091b86786925fd05b892541280481403Structure = ST_091b86786925fd05b892541280481403StructureInner;
        ST_091b86786925fd05b892541280481403Structure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$ST_24b97ac8060a9349e09da2d88e1dea00Structure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_24b97ac8060a9349e09da2d88e1dea00StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("New_password", "new_passwordAttr", "new_password", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Verification_code", "verification_codeAttr", "verification_code", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Reset_password", "reset_passwordAttr", "reset_password", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_24b97ac8060a9349e09da2d88e1dea00Structure = ST_24b97ac8060a9349e09da2d88e1dea00StructureInner;

        var ST_24b97ac8060a9349e09da2d88e1dea00Structure = ST_24b97ac8060a9349e09da2d88e1dea00StructureInner;
        ST_24b97ac8060a9349e09da2d88e1dea00Structure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$ST_b8e1602bee02fb2422c9742384775a7bStructure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_24b97ac8060a9349e09da2d88e1dea00Structure", "RESTAPIWebsocketOfficial.model$ST_8517d9c8b73e866553a1a7b806af5079Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_b8e1602bee02fb2422c9742384775a7bStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Echo_req", "echo_reqAttr", "echo_req", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_24b97ac8060a9349e09da2d88e1dea00Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_24b97ac8060a9349e09da2d88e1dea00Structure),
                    this.attr("Msg_type", "msg_typeAttr", "msg_type", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Reset_password", "reset_passwordAttr", "reset_password", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("Error", "errorAttr", "Error", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_8517d9c8b73e866553a1a7b806af5079Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_8517d9c8b73e866553a1a7b806af5079Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_b8e1602bee02fb2422c9742384775a7bStructure = ST_b8e1602bee02fb2422c9742384775a7bStructureInner;

        var ST_b8e1602bee02fb2422c9742384775a7bStructure = ST_b8e1602bee02fb2422c9742384775a7bStructureInner;
        ST_b8e1602bee02fb2422c9742384775a7bStructure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_098222569d614b59c720a7d15f2e16c6", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_b8e1602bee02fb2422c9742384775a7bStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_098222569d614b59c720a7d15f2e16c6 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_b8e1602bee02fb2422c9742384775a7bStructure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_098222569d614b59c720a7d15f2e16c6 = RL_098222569d614b59c720a7d15f2e16c6;

});

define("RESTAPIWebsocketOfficial.model$RC_8e2ccc4cb2bbc580c7d8c36277a3970f", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_349094d98d9594831ba9e5194411246fStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
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

        RESTAPIWebsocketOfficialModel.RC_8e2ccc4cb2bbc580c7d8c36277a3970f = RC_8e2ccc4cb2bbc580c7d8c36277a3970fInner;

        RC_8e2ccc4cb2bbc580c7d8c36277a3970fInner._isAnonymousRecord = true;
        RC_8e2ccc4cb2bbc580c7d8c36277a3970fInner.UniqueId = "8e2ccc4c-b2bb-c580-c7d8-c36277a3970f";
        var RC_8e2ccc4cb2bbc580c7d8c36277a3970f = RC_8e2ccc4cb2bbc580c7d8c36277a3970fInner;
        RC_8e2ccc4cb2bbc580c7d8c36277a3970f.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_09aadf2f3a6cc14ff58d7e91ed9aa591", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_8e2ccc4cb2bbc580c7d8c36277a3970f"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_09aadf2f3a6cc14ff58d7e91ed9aa591 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_8e2ccc4cb2bbc580c7d8c36277a3970f;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_09aadf2f3a6cc14ff58d7e91ed9aa591 = RL_09aadf2f3a6cc14ff58d7e91ed9aa591;

});

define("RESTAPIWebsocketOfficial.model$RC_0af1f162a4f117f1f3e8ae4dce5af0db", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_cea376e9e95ae6d491d188174483cdceStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_0af1f162a4f117f1f3e8ae4dce5af0dbInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Dxtrade_all_company", "dxtrade_all_companyAttr", "Dxtrade_all_company", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_cea376e9e95ae6d491d188174483cdceStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_cea376e9e95ae6d491d188174483cdceStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_0af1f162a4f117f1f3e8ae4dce5af0db(new RC_0af1f162a4f117f1f3e8ae4dce5af0db.RecordClass({
                    dxtrade_all_companyAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_0af1f162a4f117f1f3e8ae4dce5af0db = RC_0af1f162a4f117f1f3e8ae4dce5af0dbInner;

        RC_0af1f162a4f117f1f3e8ae4dce5af0dbInner._isAnonymousRecord = true;
        RC_0af1f162a4f117f1f3e8ae4dce5af0dbInner.UniqueId = "0af1f162-a4f1-17f1-f3e8-ae4dce5af0db";
        var RC_0af1f162a4f117f1f3e8ae4dce5af0db = RC_0af1f162a4f117f1f3e8ae4dce5af0dbInner;
        RC_0af1f162a4f117f1f3e8ae4dce5af0db.init();
    }
});

define("RESTAPIWebsocketOfficial.model$ST_1e4e8e93f82bd7d0c82446a55ed8dee2Structure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_1e4e8e93f82bd7d0c82446a55ed8dee2StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Mt5_login_list", "mt5_login_listAttr", "mt5_login_list", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new ST_1e4e8e93f82bd7d0c82446a55ed8dee2Structure(new ST_1e4e8e93f82bd7d0c82446a55ed8dee2Structure.RecordClass({
                    mt5_login_listAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_1e4e8e93f82bd7d0c82446a55ed8dee2Structure = ST_1e4e8e93f82bd7d0c82446a55ed8dee2StructureInner;

        var ST_1e4e8e93f82bd7d0c82446a55ed8dee2Structure = ST_1e4e8e93f82bd7d0c82446a55ed8dee2StructureInner;
        ST_1e4e8e93f82bd7d0c82446a55ed8dee2Structure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RC_177ce791066fe3e52ef3d9c99be27198", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_1e4e8e93f82bd7d0c82446a55ed8dee2Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_177ce791066fe3e52ef3d9c99be27198Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Echo_req5", "echo_req5Attr", "Echo_req5", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_1e4e8e93f82bd7d0c82446a55ed8dee2Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_1e4e8e93f82bd7d0c82446a55ed8dee2Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_177ce791066fe3e52ef3d9c99be27198(new RC_177ce791066fe3e52ef3d9c99be27198.RecordClass({
                    echo_req5Attr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_177ce791066fe3e52ef3d9c99be27198 = RC_177ce791066fe3e52ef3d9c99be27198Inner;

        RC_177ce791066fe3e52ef3d9c99be27198Inner._isAnonymousRecord = true;
        RC_177ce791066fe3e52ef3d9c99be27198Inner.UniqueId = "177ce791-066f-e3e5-2ef3-d9c99be27198";
        var RC_177ce791066fe3e52ef3d9c99be27198 = RC_177ce791066fe3e52ef3d9c99be27198Inner;
        RC_177ce791066fe3e52ef3d9c99be27198.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_0b481988946c6f5bbb65b67a84007644", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_177ce791066fe3e52ef3d9c99be27198"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_0b481988946c6f5bbb65b67a84007644 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_177ce791066fe3e52ef3d9c99be27198;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_0b481988946c6f5bbb65b67a84007644 = RL_0b481988946c6f5bbb65b67a84007644;

});

define("RESTAPIWebsocketOfficial.model$RC_fbe47240f7e3e38042a8c23b7b2b02e0", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_2aa6b158772e078b381113da0ab825f8Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_fbe47240f7e3e38042a8c23b7b2b02e0Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("GetLandingCompanyRequest", "getLandingCompanyRequestAttr", "GetLandingCompanyRequest", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_2aa6b158772e078b381113da0ab825f8Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_2aa6b158772e078b381113da0ab825f8Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_fbe47240f7e3e38042a8c23b7b2b02e0(new RC_fbe47240f7e3e38042a8c23b7b2b02e0.RecordClass({
                    getLandingCompanyRequestAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_fbe47240f7e3e38042a8c23b7b2b02e0 = RC_fbe47240f7e3e38042a8c23b7b2b02e0Inner;

        RC_fbe47240f7e3e38042a8c23b7b2b02e0Inner._isAnonymousRecord = true;
        RC_fbe47240f7e3e38042a8c23b7b2b02e0Inner.UniqueId = "fbe47240-f7e3-e380-42a8-c23b7b2b02e0";
        var RC_fbe47240f7e3e38042a8c23b7b2b02e0 = RC_fbe47240f7e3e38042a8c23b7b2b02e0Inner;
        RC_fbe47240f7e3e38042a8c23b7b2b02e0.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_0c13bf82c0e754513401b974c717dc2b", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_fbe47240f7e3e38042a8c23b7b2b02e0"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_0c13bf82c0e754513401b974c717dc2b extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_fbe47240f7e3e38042a8c23b7b2b02e0;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_0c13bf82c0e754513401b974c717dc2b = RL_0c13bf82c0e754513401b974c717dc2b;

});

define("RESTAPIWebsocketOfficial.model$RL_0c35eb12ceba02e474ddb698ce43b328", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_057fc2ec8b30a53f3233d84a70e95aabStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_0c35eb12ceba02e474ddb698ce43b328 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_057fc2ec8b30a53f3233d84a70e95aabStructure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_0c35eb12ceba02e474ddb698ce43b328 = RL_0c35eb12ceba02e474ddb698ce43b328;

});

define("RESTAPIWebsocketOfficial.model$RL_0c71b2fc045fad5c4e0f7f80c50bd453", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_77d1f9105abe302fa373f146c295ea17Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_0c71b2fc045fad5c4e0f7f80c50bd453 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_77d1f9105abe302fa373f146c295ea17Structure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_0c71b2fc045fad5c4e0f7f80c50bd453 = RL_0c71b2fc045fad5c4e0f7f80c50bd453;

});

define("RESTAPIWebsocketOfficial.model$ST_26b581032ad004235c0d5c566e39b1dcStructure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_26b581032ad004235c0d5c566e39b1dcStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Trading_platform_status", "trading_platform_statusAttr", "trading_platform_status", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new ST_26b581032ad004235c0d5c566e39b1dcStructure(new ST_26b581032ad004235c0d5c566e39b1dcStructure.RecordClass({
                    trading_platform_statusAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_26b581032ad004235c0d5c566e39b1dcStructure = ST_26b581032ad004235c0d5c566e39b1dcStructureInner;

        var ST_26b581032ad004235c0d5c566e39b1dcStructure = ST_26b581032ad004235c0d5c566e39b1dcStructureInner;
        ST_26b581032ad004235c0d5c566e39b1dcStructure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RC_0d71b623ce5a409adf80e6d9d4a7031e", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_26b581032ad004235c0d5c566e39b1dcStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_0d71b623ce5a409adf80e6d9d4a7031eInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Echo_req2", "echo_req2Attr", "Echo_req2", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_26b581032ad004235c0d5c566e39b1dcStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_26b581032ad004235c0d5c566e39b1dcStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_0d71b623ce5a409adf80e6d9d4a7031e(new RC_0d71b623ce5a409adf80e6d9d4a7031e.RecordClass({
                    echo_req2Attr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_0d71b623ce5a409adf80e6d9d4a7031e = RC_0d71b623ce5a409adf80e6d9d4a7031eInner;

        RC_0d71b623ce5a409adf80e6d9d4a7031eInner._isAnonymousRecord = true;
        RC_0d71b623ce5a409adf80e6d9d4a7031eInner.UniqueId = "0d71b623-ce5a-409a-df80-e6d9d4a7031e";
        var RC_0d71b623ce5a409adf80e6d9d4a7031e = RC_0d71b623ce5a409adf80e6d9d4a7031eInner;
        RC_0d71b623ce5a409adf80e6d9d4a7031e.init();
    }
});

define("RESTAPIWebsocketOfficial.model$ST_ae15e885fd6defd7e40491664a35bff0Structure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_839b1aebc8b507d4259e4312bdc21d4bStructure", "RESTAPIWebsocketOfficial.model$ST_98319758945048a72386b9e9466c220aStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_ae15e885fd6defd7e40491664a35bff0StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Available_count", "available_countAttr", "available_count", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("Instruments", "instrumentsAttr", "instruments", false, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
                    }, true, OS.DataTypes.TextList),
                    this.attr("Jurisdiction", "jurisdictionAttr", "jurisdiction", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Licence_number", "licence_numberAttr", "licence_number", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Linkable_landing_companies", "linkable_landing_companiesAttr", "linkable_landing_companies", false, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
                    }, true, OS.DataTypes.TextList),
                    this.attr("Market_type", "market_typeAttr", "market_type", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Max_count", "max_countAttr", "max_count", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("Name", "nameAttr", "name", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Product_details", "product_detailsAttr", "product_details", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_839b1aebc8b507d4259e4312bdc21d4bStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_839b1aebc8b507d4259e4312bdc21d4bStructure),
                    this.attr("Regulatory_authority", "regulatory_authorityAttr", "regulatory_authority", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Requirements", "requirementsAttr", "requirements", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_98319758945048a72386b9e9466c220aStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_98319758945048a72386b9e9466c220aStructure),
                    this.attr("Shortcode", "shortcodeAttr", "shortcode", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Sub_account_type", "sub_account_typeAttr", "sub_account_type", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_ae15e885fd6defd7e40491664a35bff0Structure = ST_ae15e885fd6defd7e40491664a35bff0StructureInner;

        var ST_ae15e885fd6defd7e40491664a35bff0Structure = ST_ae15e885fd6defd7e40491664a35bff0StructureInner;
        ST_ae15e885fd6defd7e40491664a35bff0Structure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RC_6bc4d28968c6b7a46635811add966ded", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_ae15e885fd6defd7e40491664a35bff0Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_6bc4d28968c6b7a46635811add966dedInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Trading_platform_available_accountItemCtrader", "trading_platform_available_accountItemCtraderAttr", "Trading_platform_available_accountItemCtrader", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_ae15e885fd6defd7e40491664a35bff0Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_ae15e885fd6defd7e40491664a35bff0Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_6bc4d28968c6b7a46635811add966ded(new RC_6bc4d28968c6b7a46635811add966ded.RecordClass({
                    trading_platform_available_accountItemCtraderAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_6bc4d28968c6b7a46635811add966ded = RC_6bc4d28968c6b7a46635811add966dedInner;

        RC_6bc4d28968c6b7a46635811add966dedInner._isAnonymousRecord = true;
        RC_6bc4d28968c6b7a46635811add966dedInner.UniqueId = "6bc4d289-68c6-b7a4-6635-811add966ded";
        var RC_6bc4d28968c6b7a46635811add966ded = RC_6bc4d28968c6b7a46635811add966dedInner;
        RC_6bc4d28968c6b7a46635811add966ded.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_0e22e79825d574ddeb21017d3fee72f5", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_6bc4d28968c6b7a46635811add966ded"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_0e22e79825d574ddeb21017d3fee72f5 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_6bc4d28968c6b7a46635811add966ded;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_0e22e79825d574ddeb21017d3fee72f5 = RL_0e22e79825d574ddeb21017d3fee72f5;

});

define("RESTAPIWebsocketOfficial.model$RC_5a174d6874253917600b578d844943be", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_709b151c5172b8ff1042e5fecf4be0ecStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
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

        RESTAPIWebsocketOfficialModel.RC_5a174d6874253917600b578d844943be = RC_5a174d6874253917600b578d844943beInner;

        RC_5a174d6874253917600b578d844943beInner._isAnonymousRecord = true;
        RC_5a174d6874253917600b578d844943beInner.UniqueId = "5a174d68-7425-3917-600b-578d844943be";
        var RC_5a174d6874253917600b578d844943be = RC_5a174d6874253917600b578d844943beInner;
        RC_5a174d6874253917600b578d844943be.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_0ebbc09ab880f9576c75a250e0dd80b4", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_5a174d6874253917600b578d844943be"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_0ebbc09ab880f9576c75a250e0dd80b4 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_5a174d6874253917600b578d844943be;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_0ebbc09ab880f9576c75a250e0dd80b4 = RL_0ebbc09ab880f9576c75a250e0dd80b4;

});

define("RESTAPIWebsocketOfficial.model$ST_6e7638d850b78b46a75a04e2dcd58f58Structure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_6e7638d850b78b46a75a04e2dcd58f58StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Fractional_digits", "fractional_digitsAttr", "fractional_digits", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new ST_6e7638d850b78b46a75a04e2dcd58f58Structure(new ST_6e7638d850b78b46a75a04e2dcd58f58Structure.RecordClass({
                    fractional_digitsAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_6e7638d850b78b46a75a04e2dcd58f58Structure = ST_6e7638d850b78b46a75a04e2dcd58f58StructureInner;

        var ST_6e7638d850b78b46a75a04e2dcd58f58Structure = ST_6e7638d850b78b46a75a04e2dcd58f58StructureInner;
        ST_6e7638d850b78b46a75a04e2dcd58f58Structure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$ST_123df4fc5615aac2800d1fa4847bc440Structure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_6e7638d850b78b46a75a04e2dcd58f58Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_123df4fc5615aac2800d1fa4847bc440StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("IDR", "iDRAttr", "IDR", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_6e7638d850b78b46a75a04e2dcd58f58Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_6e7638d850b78b46a75a04e2dcd58f58Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new ST_123df4fc5615aac2800d1fa4847bc440Structure(new ST_123df4fc5615aac2800d1fa4847bc440Structure.RecordClass({
                    iDRAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_123df4fc5615aac2800d1fa4847bc440Structure = ST_123df4fc5615aac2800d1fa4847bc440StructureInner;

        var ST_123df4fc5615aac2800d1fa4847bc440Structure = ST_123df4fc5615aac2800d1fa4847bc440StructureInner;
        ST_123df4fc5615aac2800d1fa4847bc440Structure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_126434276122aa915715df7da7c75609", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_af8134183a4bd7e3eec97ada0cf46b5eStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_126434276122aa915715df7da7c75609 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_af8134183a4bd7e3eec97ada0cf46b5eStructure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_126434276122aa915715df7da7c75609 = RL_126434276122aa915715df7da7c75609;

});

define("RESTAPIWebsocketOfficial.model$ST_812466b8d5a9a4a768bb1404c7c0b0e5Structure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_812466b8d5a9a4a768bb1404c7c0b0e5StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Asset_index", "asset_indexAttr", "asset_index", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new ST_812466b8d5a9a4a768bb1404c7c0b0e5Structure(new ST_812466b8d5a9a4a768bb1404c7c0b0e5Structure.RecordClass({
                    asset_indexAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_812466b8d5a9a4a768bb1404c7c0b0e5Structure = ST_812466b8d5a9a4a768bb1404c7c0b0e5StructureInner;

        var ST_812466b8d5a9a4a768bb1404c7c0b0e5Structure = ST_812466b8d5a9a4a768bb1404c7c0b0e5StructureInner;
        ST_812466b8d5a9a4a768bb1404c7c0b0e5Structure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RC_127d33c3734e3f0cecd53087584e156c", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_812466b8d5a9a4a768bb1404c7c0b0e5Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_127d33c3734e3f0cecd53087584e156cInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Echo_req6", "echo_req6Attr", "Echo_req6", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_812466b8d5a9a4a768bb1404c7c0b0e5Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_812466b8d5a9a4a768bb1404c7c0b0e5Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_127d33c3734e3f0cecd53087584e156c(new RC_127d33c3734e3f0cecd53087584e156c.RecordClass({
                    echo_req6Attr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_127d33c3734e3f0cecd53087584e156c = RC_127d33c3734e3f0cecd53087584e156cInner;

        RC_127d33c3734e3f0cecd53087584e156cInner._isAnonymousRecord = true;
        RC_127d33c3734e3f0cecd53087584e156cInner.UniqueId = "127d33c3-734e-3f0c-ecd5-3087584e156c";
        var RC_127d33c3734e3f0cecd53087584e156c = RC_127d33c3734e3f0cecd53087584e156cInner;
        RC_127d33c3734e3f0cecd53087584e156c.init();
    }
});

define("RESTAPIWebsocketOfficial.model$ST_13505e54da5ba49238f8f2a40834f63fStructure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_13505e54da5ba49238f8f2a40834f63fStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Group", "groupAttr", "group", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Location", "locationAttr", "location", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Region", "regionAttr", "region", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Sequence", "sequenceAttr", "sequence", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_13505e54da5ba49238f8f2a40834f63fStructure = ST_13505e54da5ba49238f8f2a40834f63fStructureInner;

        var ST_13505e54da5ba49238f8f2a40834f63fStructure = ST_13505e54da5ba49238f8f2a40834f63fStructureInner;
        ST_13505e54da5ba49238f8f2a40834f63fStructure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_12d1ba6d0f7dc76efbcc2fac29abf585", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_13505e54da5ba49238f8f2a40834f63fStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_12d1ba6d0f7dc76efbcc2fac29abf585 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_13505e54da5ba49238f8f2a40834f63fStructure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_12d1ba6d0f7dc76efbcc2fac29abf585 = RL_12d1ba6d0f7dc76efbcc2fac29abf585;

});

define("RESTAPIWebsocketOfficial.model$RC_334ec8eb11cbb1f900eb82a622de6be5", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_b47d3155c531939aabdd10ec3a99049dStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_334ec8eb11cbb1f900eb82a622de6be5Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("AUD", "aUDAttr", "AUD", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_b47d3155c531939aabdd10ec3a99049dStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_b47d3155c531939aabdd10ec3a99049dStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_334ec8eb11cbb1f900eb82a622de6be5(new RC_334ec8eb11cbb1f900eb82a622de6be5.RecordClass({
                    aUDAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_334ec8eb11cbb1f900eb82a622de6be5 = RC_334ec8eb11cbb1f900eb82a622de6be5Inner;

        RC_334ec8eb11cbb1f900eb82a622de6be5Inner._isAnonymousRecord = true;
        RC_334ec8eb11cbb1f900eb82a622de6be5Inner.UniqueId = "334ec8eb-11cb-b1f9-00eb-82a622de6be5";
        var RC_334ec8eb11cbb1f900eb82a622de6be5 = RC_334ec8eb11cbb1f900eb82a622de6be5Inner;
        RC_334ec8eb11cbb1f900eb82a622de6be5.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_130306c98b85aa803514000e3331edb0", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_334ec8eb11cbb1f900eb82a622de6be5"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_130306c98b85aa803514000e3331edb0 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_334ec8eb11cbb1f900eb82a622de6be5;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_130306c98b85aa803514000e3331edb0 = RL_130306c98b85aa803514000e3331edb0;

});

define("RESTAPIWebsocketOfficial.model$RC_131ec4afe292e50694c2940b1e3c9a73", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_bccc1fae1833449eea329fa137ba885aStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_131ec4afe292e50694c2940b1e3c9a73Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Currency_config2", "currency_config2Attr", "Currency_config2", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_bccc1fae1833449eea329fa137ba885aStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_bccc1fae1833449eea329fa137ba885aStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_131ec4afe292e50694c2940b1e3c9a73(new RC_131ec4afe292e50694c2940b1e3c9a73.RecordClass({
                    currency_config2Attr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_131ec4afe292e50694c2940b1e3c9a73 = RC_131ec4afe292e50694c2940b1e3c9a73Inner;

        RC_131ec4afe292e50694c2940b1e3c9a73Inner._isAnonymousRecord = true;
        RC_131ec4afe292e50694c2940b1e3c9a73Inner.UniqueId = "131ec4af-e292-e506-94c2-940b1e3c9a73";
        var RC_131ec4afe292e50694c2940b1e3c9a73 = RC_131ec4afe292e50694c2940b1e3c9a73Inner;
        RC_131ec4afe292e50694c2940b1e3c9a73.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RC_d54336ec6049dff9c99f14fd62e782c4", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_94d54d268b2cff4f4ed014a5df48da20Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_d54336ec6049dff9c99f14fd62e782c4Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Trading", "tradingAttr", "Trading", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_94d54d268b2cff4f4ed014a5df48da20Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_94d54d268b2cff4f4ed014a5df48da20Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_d54336ec6049dff9c99f14fd62e782c4(new RC_d54336ec6049dff9c99f14fd62e782c4.RecordClass({
                    tradingAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_d54336ec6049dff9c99f14fd62e782c4 = RC_d54336ec6049dff9c99f14fd62e782c4Inner;

        RC_d54336ec6049dff9c99f14fd62e782c4Inner._isAnonymousRecord = true;
        RC_d54336ec6049dff9c99f14fd62e782c4Inner.UniqueId = "d54336ec-6049-dff9-c99f-14fd62e782c4";
        var RC_d54336ec6049dff9c99f14fd62e782c4 = RC_d54336ec6049dff9c99f14fd62e782c4Inner;
        RC_d54336ec6049dff9c99f14fd62e782c4.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_13576b5dee00a62e9c40a0c658db0a38", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_d54336ec6049dff9c99f14fd62e782c4"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_13576b5dee00a62e9c40a0c658db0a38 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_d54336ec6049dff9c99f14fd62e782c4;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_13576b5dee00a62e9c40a0c658db0a38 = RL_13576b5dee00a62e9c40a0c658db0a38;

});

define("RESTAPIWebsocketOfficial.model$ST_412ed7113d9105960615d1c5b5f37301Structure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_412ed7113d9105960615d1c5b5f37301StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Partner_type", "partner_typeAttr", "partner_type", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Platform_url", "platform_urlAttr", "platform_url", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Provider", "providerAttr", "provider", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Website", "websiteAttr", "website", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_412ed7113d9105960615d1c5b5f37301Structure = ST_412ed7113d9105960615d1c5b5f37301StructureInner;

        var ST_412ed7113d9105960615d1c5b5f37301Structure = ST_412ed7113d9105960615d1c5b5f37301StructureInner;
        ST_412ed7113d9105960615d1c5b5f37301Structure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RC_13f257eb273389bc73abe0351586bf1c", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_412ed7113d9105960615d1c5b5f37301Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_13f257eb273389bc73abe0351586bf1cInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Partner_setting", "partner_settingAttr", "Partner_setting", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_412ed7113d9105960615d1c5b5f37301Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_412ed7113d9105960615d1c5b5f37301Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_13f257eb273389bc73abe0351586bf1c(new RC_13f257eb273389bc73abe0351586bf1c.RecordClass({
                    partner_settingAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_13f257eb273389bc73abe0351586bf1c = RC_13f257eb273389bc73abe0351586bf1cInner;

        RC_13f257eb273389bc73abe0351586bf1cInner._isAnonymousRecord = true;
        RC_13f257eb273389bc73abe0351586bf1cInner.UniqueId = "13f257eb-2733-89bc-73ab-e0351586bf1c";
        var RC_13f257eb273389bc73abe0351586bf1c = RC_13f257eb273389bc73abe0351586bf1cInner;
        RC_13f257eb273389bc73abe0351586bf1c.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_13f4e7ea22b9e316259c119567103cf9", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_333caa433a680d581b2dfdf80dcbab60Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_13f4e7ea22b9e316259c119567103cf9 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_333caa433a680d581b2dfdf80dcbab60Structure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_13f4e7ea22b9e316259c119567103cf9 = RL_13f4e7ea22b9e316259c119567103cf9;

});

define("RESTAPIWebsocketOfficial.model$RL_143abbfebca3c373ef0923e4c8b26336", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_cea376e9e95ae6d491d188174483cdceStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_143abbfebca3c373ef0923e4c8b26336 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_cea376e9e95ae6d491d188174483cdceStructure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_143abbfebca3c373ef0923e4c8b26336 = RL_143abbfebca3c373ef0923e4c8b26336;

});

define("RESTAPIWebsocketOfficial.model$RL_14c5bb80b83da1321f2059f42deabf95", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_10e78341d21be3a7dc573dcf4252c9dbStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_14c5bb80b83da1321f2059f42deabf95 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_10e78341d21be3a7dc573dcf4252c9dbStructure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_14c5bb80b83da1321f2059f42deabf95 = RL_14c5bb80b83da1321f2059f42deabf95;

});

define("RESTAPIWebsocketOfficial.model$RL_1659ef22005bb5893eb1c95011619009", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_6e7638d850b78b46a75a04e2dcd58f58Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_1659ef22005bb5893eb1c95011619009 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_6e7638d850b78b46a75a04e2dcd58f58Structure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_1659ef22005bb5893eb1c95011619009 = RL_1659ef22005bb5893eb1c95011619009;

});

define("RESTAPIWebsocketOfficial.model$RL_18994bd1cd31a465f2635a0d68fa478a", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_72e91b438c2e206bca7398a7a69902dfStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_18994bd1cd31a465f2635a0d68fa478a extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_72e91b438c2e206bca7398a7a69902dfStructure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_18994bd1cd31a465f2635a0d68fa478a = RL_18994bd1cd31a465f2635a0d68fa478a;

});

define("RESTAPIWebsocketOfficial.model$ST_47cb5eee6d4ef4327d9bcca9c13fccceStructure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_47cb5eee6d4ef4327d9bcca9c13fccceStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Value", "valueAttr", "Value", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_47cb5eee6d4ef4327d9bcca9c13fccceStructure = ST_47cb5eee6d4ef4327d9bcca9c13fccceStructureInner;

        var ST_47cb5eee6d4ef4327d9bcca9c13fccceStructure = ST_47cb5eee6d4ef4327d9bcca9c13fccceStructureInner;
        ST_47cb5eee6d4ef4327d9bcca9c13fccceStructure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_3d3500211cb1b36e6cbf60493db1facb", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_47cb5eee6d4ef4327d9bcca9c13fccceStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_3d3500211cb1b36e6cbf60493db1facb extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_47cb5eee6d4ef4327d9bcca9c13fccceStructure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_3d3500211cb1b36e6cbf60493db1facb = RL_3d3500211cb1b36e6cbf60493db1facb;

});

define("RESTAPIWebsocketOfficial.model$ST_18a578e4f8f25852aec011d4055e28d1Structure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_47cb5eee6d4ef4327d9bcca9c13fccceStructure", "RESTAPIWebsocketOfficial.model$RL_3d3500211cb1b36e6cbf60493db1facb", "RESTAPIWebsocketOfficial.model$ST_057fc2ec8b30a53f3233d84a70e95aabStructure", "RESTAPIWebsocketOfficial.model$RL_0c35eb12ceba02e474ddb698ce43b328"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_18a578e4f8f25852aec011d4055e28d1StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("BaseURL", "baseURLAttr", "BaseURL", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("URLPath", "uRLPathAttr", "URLPath", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("URLQueryParameters", "uRLQueryParametersAttr", "URLQueryParameters", false, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.RL_3d3500211cb1b36e6cbf60493db1facb());
                    }, true, RESTAPIWebsocketOfficialModel.RL_3d3500211cb1b36e6cbf60493db1facb),
                    this.attr("HTTPMethod", "hTTPMethodAttr", "HTTPMethod", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Headers", "headersAttr", "Headers", false, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.RL_0c35eb12ceba02e474ddb698ce43b328());
                    }, true, RESTAPIWebsocketOfficialModel.RL_0c35eb12ceba02e474ddb698ce43b328),
                    this.attr("RequestText", "requestTextAttr", "RequestText", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("RequestBinary", "requestBinaryAttr", "RequestBinary", false, false, OS.DataTypes.DataTypes.BinaryData, function() {
                        return OS.DataTypes.BinaryData.defaultValue;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_18a578e4f8f25852aec011d4055e28d1Structure = ST_18a578e4f8f25852aec011d4055e28d1StructureInner;

        var ST_18a578e4f8f25852aec011d4055e28d1Structure = ST_18a578e4f8f25852aec011d4055e28d1StructureInner;
        ST_18a578e4f8f25852aec011d4055e28d1Structure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RC_18cf7a633c2eb19c8f4a71d50c228fa8", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_839b1aebc8b507d4259e4312bdc21d4bStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_18cf7a633c2eb19c8f4a71d50c228fa8Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Product_detail", "product_detailAttr", "Product_detail", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_839b1aebc8b507d4259e4312bdc21d4bStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_839b1aebc8b507d4259e4312bdc21d4bStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_18cf7a633c2eb19c8f4a71d50c228fa8(new RC_18cf7a633c2eb19c8f4a71d50c228fa8.RecordClass({
                    product_detailAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_18cf7a633c2eb19c8f4a71d50c228fa8 = RC_18cf7a633c2eb19c8f4a71d50c228fa8Inner;

        RC_18cf7a633c2eb19c8f4a71d50c228fa8Inner._isAnonymousRecord = true;
        RC_18cf7a633c2eb19c8f4a71d50c228fa8Inner.UniqueId = "18cf7a63-3c2e-b19c-8f4a-71d50c228fa8";
        var RC_18cf7a633c2eb19c8f4a71d50c228fa8 = RC_18cf7a633c2eb19c8f4a71d50c228fa8Inner;
        RC_18cf7a633c2eb19c8f4a71d50c228fa8.init();
    }
});

define("RESTAPIWebsocketOfficial.model$ST_84a0cd0731252abf8ed782a87ccaad58Structure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_84a0cd0731252abf8ed782a87ccaad58StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Account_list", "account_listAttr", "account_list", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new ST_84a0cd0731252abf8ed782a87ccaad58Structure(new ST_84a0cd0731252abf8ed782a87ccaad58Structure.RecordClass({
                    account_listAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_84a0cd0731252abf8ed782a87ccaad58Structure = ST_84a0cd0731252abf8ed782a87ccaad58StructureInner;

        var ST_84a0cd0731252abf8ed782a87ccaad58Structure = ST_84a0cd0731252abf8ed782a87ccaad58StructureInner;
        ST_84a0cd0731252abf8ed782a87ccaad58Structure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RC_d748f9b2c2050386449473bdb4b3b0cb", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_84a0cd0731252abf8ed782a87ccaad58Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_d748f9b2c2050386449473bdb4b3b0cbInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Echo_req4", "echo_req4Attr", "Echo_req4", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_84a0cd0731252abf8ed782a87ccaad58Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_84a0cd0731252abf8ed782a87ccaad58Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_d748f9b2c2050386449473bdb4b3b0cb(new RC_d748f9b2c2050386449473bdb4b3b0cb.RecordClass({
                    echo_req4Attr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_d748f9b2c2050386449473bdb4b3b0cb = RC_d748f9b2c2050386449473bdb4b3b0cbInner;

        RC_d748f9b2c2050386449473bdb4b3b0cbInner._isAnonymousRecord = true;
        RC_d748f9b2c2050386449473bdb4b3b0cbInner.UniqueId = "d748f9b2-c205-0386-4494-73bdb4b3b0cb";
        var RC_d748f9b2c2050386449473bdb4b3b0cb = RC_d748f9b2c2050386449473bdb4b3b0cbInner;
        RC_d748f9b2c2050386449473bdb4b3b0cb.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_18e77429a52b049bf869659c0cf9f64f", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_d748f9b2c2050386449473bdb4b3b0cb"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_18e77429a52b049bf869659c0cf9f64f extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_d748f9b2c2050386449473bdb4b3b0cb;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_18e77429a52b049bf869659c0cf9f64f = RL_18e77429a52b049bf869659c0cf9f64f;

});

define("RESTAPIWebsocketOfficial.model$RC_191172c94e64292c8bf1a2dce4b5e876", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_977d84487e32bee2c1a14da15d247b5fStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_191172c94e64292c8bf1a2dce4b5e876Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Dxtrade_status", "dxtrade_statusAttr", "Dxtrade_status", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_977d84487e32bee2c1a14da15d247b5fStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_977d84487e32bee2c1a14da15d247b5fStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_191172c94e64292c8bf1a2dce4b5e876(new RC_191172c94e64292c8bf1a2dce4b5e876.RecordClass({
                    dxtrade_statusAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_191172c94e64292c8bf1a2dce4b5e876 = RC_191172c94e64292c8bf1a2dce4b5e876Inner;

        RC_191172c94e64292c8bf1a2dce4b5e876Inner._isAnonymousRecord = true;
        RC_191172c94e64292c8bf1a2dce4b5e876Inner.UniqueId = "191172c9-4e64-292c-8bf1-a2dce4b5e876";
        var RC_191172c94e64292c8bf1a2dce4b5e876 = RC_191172c94e64292c8bf1a2dce4b5e876Inner;
        RC_191172c94e64292c8bf1a2dce4b5e876.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RC_19aa89641c7398ceacf4370c69126f64", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_1c923b28044712e7268167783ecfdfbeStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
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

        RESTAPIWebsocketOfficialModel.RC_19aa89641c7398ceacf4370c69126f64 = RC_19aa89641c7398ceacf4370c69126f64Inner;

        RC_19aa89641c7398ceacf4370c69126f64Inner._isAnonymousRecord = true;
        RC_19aa89641c7398ceacf4370c69126f64Inner.UniqueId = "19aa8964-1c73-98ce-acf4-370c69126f64";
        var RC_19aa89641c7398ceacf4370c69126f64 = RC_19aa89641c7398ceacf4370c69126f64Inner;
        RC_19aa89641c7398ceacf4370c69126f64.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RC_39bf756e3f1604202cf1d7ac5fb3b260", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_8ddbf1b6e2eccc5a160b5fab6b9b9b86Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_39bf756e3f1604202cf1d7ac5fb3b260Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Mt_financial_company", "mt_financial_companyAttr", "Mt_financial_company", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_8ddbf1b6e2eccc5a160b5fab6b9b9b86Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_8ddbf1b6e2eccc5a160b5fab6b9b9b86Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_39bf756e3f1604202cf1d7ac5fb3b260(new RC_39bf756e3f1604202cf1d7ac5fb3b260.RecordClass({
                    mt_financial_companyAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_39bf756e3f1604202cf1d7ac5fb3b260 = RC_39bf756e3f1604202cf1d7ac5fb3b260Inner;

        RC_39bf756e3f1604202cf1d7ac5fb3b260Inner._isAnonymousRecord = true;
        RC_39bf756e3f1604202cf1d7ac5fb3b260Inner.UniqueId = "39bf756e-3f16-0420-2cf1-d7ac5fb3b260";
        var RC_39bf756e3f1604202cf1d7ac5fb3b260 = RC_39bf756e3f1604202cf1d7ac5fb3b260Inner;
        RC_39bf756e3f1604202cf1d7ac5fb3b260.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_1a2d97d3def0e6b808795f4f98a3a588", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_39bf756e3f1604202cf1d7ac5fb3b260"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_1a2d97d3def0e6b808795f4f98a3a588 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_39bf756e3f1604202cf1d7ac5fb3b260;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_1a2d97d3def0e6b808795f4f98a3a588 = RL_1a2d97d3def0e6b808795f4f98a3a588;

});

define("RESTAPIWebsocketOfficial.model$RC_1b2532ef629f2b3259beb09a3dc495b4", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_0543ba6e58ccc819d0ba65db33df025eStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_1b2532ef629f2b3259beb09a3dc495b4Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Feature_flag", "feature_flagAttr", "Feature_flag", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_0543ba6e58ccc819d0ba65db33df025eStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_0543ba6e58ccc819d0ba65db33df025eStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_1b2532ef629f2b3259beb09a3dc495b4(new RC_1b2532ef629f2b3259beb09a3dc495b4.RecordClass({
                    feature_flagAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_1b2532ef629f2b3259beb09a3dc495b4 = RC_1b2532ef629f2b3259beb09a3dc495b4Inner;

        RC_1b2532ef629f2b3259beb09a3dc495b4Inner._isAnonymousRecord = true;
        RC_1b2532ef629f2b3259beb09a3dc495b4Inner.UniqueId = "1b2532ef-629f-2b32-59be-b09a3dc495b4";
        var RC_1b2532ef629f2b3259beb09a3dc495b4 = RC_1b2532ef629f2b3259beb09a3dc495b4Inner;
        RC_1b2532ef629f2b3259beb09a3dc495b4.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RC_ea9565ddc265550c2d38c39dc154035f", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_113226709b84b71c70ebd50296313568Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
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

        RESTAPIWebsocketOfficialModel.RC_ea9565ddc265550c2d38c39dc154035f = RC_ea9565ddc265550c2d38c39dc154035fInner;

        RC_ea9565ddc265550c2d38c39dc154035fInner._isAnonymousRecord = true;
        RC_ea9565ddc265550c2d38c39dc154035fInner.UniqueId = "ea9565dd-c265-550c-2d38-c39dc154035f";
        var RC_ea9565ddc265550c2d38c39dc154035f = RC_ea9565ddc265550c2d38c39dc154035fInner;
        RC_ea9565ddc265550c2d38c39dc154035f.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_1b71a02dea96d4cd97c73eba8bb674c6", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_ea9565ddc265550c2d38c39dc154035f"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_1b71a02dea96d4cd97c73eba8bb674c6 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_ea9565ddc265550c2d38c39dc154035f;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_1b71a02dea96d4cd97c73eba8bb674c6 = RL_1b71a02dea96d4cd97c73eba8bb674c6;

});

define("RESTAPIWebsocketOfficial.model$ST_a61a52fb9a0db4861b8e2b8110ef16c4Structure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_a61a52fb9a0db4861b8e2b8110ef16c4StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Cashier", "cashierAttr", "cashier", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Provider", "providerAttr", "provider", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Type", "typeAttr", "type", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_a61a52fb9a0db4861b8e2b8110ef16c4Structure = ST_a61a52fb9a0db4861b8e2b8110ef16c4StructureInner;

        var ST_a61a52fb9a0db4861b8e2b8110ef16c4Structure = ST_a61a52fb9a0db4861b8e2b8110ef16c4StructureInner;
        ST_a61a52fb9a0db4861b8e2b8110ef16c4Structure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$ST_8e8af6ab08708eb9bf2a2c09b57c23f5Structure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_a61a52fb9a0db4861b8e2b8110ef16c4Structure", "RESTAPIWebsocketOfficial.model$ST_8517d9c8b73e866553a1a7b806af5079Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_8e8af6ab08708eb9bf2a2c09b57c23f5StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Cashier", "cashierAttr", "cashier", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Echo_req", "echo_reqAttr", "echo_req", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_a61a52fb9a0db4861b8e2b8110ef16c4Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_a61a52fb9a0db4861b8e2b8110ef16c4Structure),
                    this.attr("Msg_type", "msg_typeAttr", "msg_type", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Error", "errorAttr", "error", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_8517d9c8b73e866553a1a7b806af5079Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_8517d9c8b73e866553a1a7b806af5079Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_8e8af6ab08708eb9bf2a2c09b57c23f5Structure = ST_8e8af6ab08708eb9bf2a2c09b57c23f5StructureInner;

        var ST_8e8af6ab08708eb9bf2a2c09b57c23f5Structure = ST_8e8af6ab08708eb9bf2a2c09b57c23f5StructureInner;
        ST_8e8af6ab08708eb9bf2a2c09b57c23f5Structure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_1d3883baf2a25f26e9aa7de12c9a4468", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_8e8af6ab08708eb9bf2a2c09b57c23f5Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_1d3883baf2a25f26e9aa7de12c9a4468 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_8e8af6ab08708eb9bf2a2c09b57c23f5Structure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_1d3883baf2a25f26e9aa7de12c9a4468 = RL_1d3883baf2a25f26e9aa7de12c9a4468;

});

define("RESTAPIWebsocketOfficial.model$ST_a64a97da9ee822b4b21c919739567011Structure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_a64a97da9ee822b4b21c919739567011StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Account_id", "account_idAttr", "account_id", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Account_type", "account_typeAttr", "account_type", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Balance", "balanceAttr", "balance", false, false, OS.DataTypes.DataTypes.Decimal, function() {
                        return OS.DataTypes.Decimal.defaultValue;
                    }, true),
                    this.attr("Currency", "currencyAttr", "currency", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Display_balance", "display_balanceAttr", "display_balance", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Enabled", "enabledAttr", "enabled", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("Landing_company_short", "landing_company_shortAttr", "landing_company_short", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Login", "loginAttr", "login", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Market_type", "market_typeAttr", "market_type", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Platform", "platformAttr", "platform", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_a64a97da9ee822b4b21c919739567011Structure = ST_a64a97da9ee822b4b21c919739567011StructureInner;

        var ST_a64a97da9ee822b4b21c919739567011Structure = ST_a64a97da9ee822b4b21c919739567011StructureInner;
        ST_a64a97da9ee822b4b21c919739567011Structure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_d2e8d01cb1d1df6bef4310379df28149", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_a64a97da9ee822b4b21c919739567011Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_d2e8d01cb1d1df6bef4310379df28149 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_a64a97da9ee822b4b21c919739567011Structure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_d2e8d01cb1d1df6bef4310379df28149 = RL_d2e8d01cb1d1df6bef4310379df28149;

});

define("RESTAPIWebsocketOfficial.model$ST_711f7ad16da273bf9e6563303a17ad00Structure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_4dc58b9edb8582c76248b762d6650913Structure", "RESTAPIWebsocketOfficial.model$ST_a64a97da9ee822b4b21c919739567011Structure", "RESTAPIWebsocketOfficial.model$RL_d2e8d01cb1d1df6bef4310379df28149"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_711f7ad16da273bf9e6563303a17ad00StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Echo_req", "echo_reqAttr", "echo_req", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_4dc58b9edb8582c76248b762d6650913Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_4dc58b9edb8582c76248b762d6650913Structure),
                    this.attr("Msg_type", "msg_typeAttr", "msg_type", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Req_id", "req_idAttr", "req_id", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("Trading_platform_accounts", "trading_platform_accountsAttr", "trading_platform_accounts", false, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.RL_d2e8d01cb1d1df6bef4310379df28149());
                    }, true, RESTAPIWebsocketOfficialModel.RL_d2e8d01cb1d1df6bef4310379df28149)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_711f7ad16da273bf9e6563303a17ad00Structure = ST_711f7ad16da273bf9e6563303a17ad00StructureInner;

        var ST_711f7ad16da273bf9e6563303a17ad00Structure = ST_711f7ad16da273bf9e6563303a17ad00StructureInner;
        ST_711f7ad16da273bf9e6563303a17ad00Structure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_1dae29f574cdcca95ce8a85935b8f3fa", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_711f7ad16da273bf9e6563303a17ad00Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_1dae29f574cdcca95ce8a85935b8f3fa extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_711f7ad16da273bf9e6563303a17ad00Structure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_1dae29f574cdcca95ce8a85935b8f3fa = RL_1dae29f574cdcca95ce8a85935b8f3fa;

});

define("RESTAPIWebsocketOfficial.model$RC_abb032903fc2fb13eceedc8d229aaabf", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_47cb5eee6d4ef4327d9bcca9c13fccceStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_abb032903fc2fb13eceedc8d229aaabfInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("URLQueryParameter", "uRLQueryParameterAttr", "URLQueryParameter", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_47cb5eee6d4ef4327d9bcca9c13fccceStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_47cb5eee6d4ef4327d9bcca9c13fccceStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_abb032903fc2fb13eceedc8d229aaabf(new RC_abb032903fc2fb13eceedc8d229aaabf.RecordClass({
                    uRLQueryParameterAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_abb032903fc2fb13eceedc8d229aaabf = RC_abb032903fc2fb13eceedc8d229aaabfInner;

        RC_abb032903fc2fb13eceedc8d229aaabfInner._isAnonymousRecord = true;
        RC_abb032903fc2fb13eceedc8d229aaabfInner.UniqueId = "abb03290-3fc2-fb13-ecee-dc8d229aaabf";
        var RC_abb032903fc2fb13eceedc8d229aaabf = RC_abb032903fc2fb13eceedc8d229aaabfInner;
        RC_abb032903fc2fb13eceedc8d229aaabf.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_1dbda2318f3d93e22905fba5e14b0956", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_abb032903fc2fb13eceedc8d229aaabf"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_1dbda2318f3d93e22905fba5e14b0956 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_abb032903fc2fb13eceedc8d229aaabf;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_1dbda2318f3d93e22905fba5e14b0956 = RL_1dbda2318f3d93e22905fba5e14b0956;

});

define("RESTAPIWebsocketOfficial.model$RL_1dc527401e57829601dc86609514b95f", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_83fbd707f872e92b597918150eff1f3eStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_1dc527401e57829601dc86609514b95f extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_83fbd707f872e92b597918150eff1f3eStructure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_1dc527401e57829601dc86609514b95f = RL_1dc527401e57829601dc86609514b95f;

});

define("RESTAPIWebsocketOfficial.model$RC_f643b3acfc27a4fecd1e2e4d216ea947", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_cd83fe90bac6d8f5fe1d8e3dce9729c1Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_f643b3acfc27a4fecd1e2e4d216ea947Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("DemoItem", "demoItemAttr", "DemoItem", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_cd83fe90bac6d8f5fe1d8e3dce9729c1Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_cd83fe90bac6d8f5fe1d8e3dce9729c1Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_f643b3acfc27a4fecd1e2e4d216ea947(new RC_f643b3acfc27a4fecd1e2e4d216ea947.RecordClass({
                    demoItemAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_f643b3acfc27a4fecd1e2e4d216ea947 = RC_f643b3acfc27a4fecd1e2e4d216ea947Inner;

        RC_f643b3acfc27a4fecd1e2e4d216ea947Inner._isAnonymousRecord = true;
        RC_f643b3acfc27a4fecd1e2e4d216ea947Inner.UniqueId = "f643b3ac-fc27-a4fe-cd1e-2e4d216ea947";
        var RC_f643b3acfc27a4fecd1e2e4d216ea947 = RC_f643b3acfc27a4fecd1e2e4d216ea947Inner;
        RC_f643b3acfc27a4fecd1e2e4d216ea947.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_1dea2ab8630085ef26828f80f7648065", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_f643b3acfc27a4fecd1e2e4d216ea947"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_1dea2ab8630085ef26828f80f7648065 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_f643b3acfc27a4fecd1e2e4d216ea947;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_1dea2ab8630085ef26828f80f7648065 = RL_1dea2ab8630085ef26828f80f7648065;

});

define("RESTAPIWebsocketOfficial.model$ST_96047f3e265fbed2401212ad81dfa1f4Structure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_96047f3e265fbed2401212ad81dfa1f4StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Get_settings", "get_settingsAttr", "get_settings", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new ST_96047f3e265fbed2401212ad81dfa1f4Structure(new ST_96047f3e265fbed2401212ad81dfa1f4Structure.RecordClass({
                    get_settingsAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_96047f3e265fbed2401212ad81dfa1f4Structure = ST_96047f3e265fbed2401212ad81dfa1f4StructureInner;

        var ST_96047f3e265fbed2401212ad81dfa1f4Structure = ST_96047f3e265fbed2401212ad81dfa1f4StructureInner;
        ST_96047f3e265fbed2401212ad81dfa1f4Structure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$ST_35e76a2e1583feb611523ac6c760c8a9Structure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_35e76a2e1583feb611523ac6c760c8a9StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Account_turnover", "account_turnoverAttr", "account_turnover", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Commodities_trading_experience", "commodities_trading_experienceAttr", "commodities_trading_experience", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Commodities_trading_frequency", "commodities_trading_frequencyAttr", "commodities_trading_frequency", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Education_level", "education_levelAttr", "education_level", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Employment_industry", "employment_industryAttr", "employment_industry", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Employment_status", "employment_statusAttr", "employment_status", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Estimated_worth", "estimated_worthAttr", "estimated_worth", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Forex_trading_experience", "forex_trading_experienceAttr", "forex_trading_experience", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Forex_trading_frequency", "forex_trading_frequencyAttr", "forex_trading_frequency", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Income_source", "income_sourceAttr", "income_source", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Indices_trading_experience", "indices_trading_experienceAttr", "indices_trading_experience", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Indices_trading_frequency", "indices_trading_frequencyAttr", "indices_trading_frequency", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Net_income", "net_incomeAttr", "net_income", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Occupation", "occupationAttr", "occupation", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Other_derivatives_trading_experience", "other_derivatives_trading_experienceAttr", "other_derivatives_trading_experience", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Other_derivatives_trading_frequency", "other_derivatives_trading_frequencyAttr", "other_derivatives_trading_frequency", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Other_instruments_trading_experience", "other_instruments_trading_experienceAttr", "other_instruments_trading_experience", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Other_instruments_trading_frequency", "other_instruments_trading_frequencyAttr", "other_instruments_trading_frequency", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Stocks_trading_experience", "stocks_trading_experienceAttr", "stocks_trading_experience", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Stocks_trading_frequency", "stocks_trading_frequencyAttr", "stocks_trading_frequency", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_35e76a2e1583feb611523ac6c760c8a9Structure = ST_35e76a2e1583feb611523ac6c760c8a9StructureInner;

        var ST_35e76a2e1583feb611523ac6c760c8a9Structure = ST_35e76a2e1583feb611523ac6c760c8a9StructureInner;
        ST_35e76a2e1583feb611523ac6c760c8a9Structure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$ST_ef2ca9573c3bd1e27b35145a902be10bStructure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_ef2ca9573c3bd1e27b35145a902be10bStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Carriers", "carriersAttr", "carriers", false, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
                    }, true, OS.DataTypes.TextList),
                    this.attr("Next_attempt", "next_attemptAttr", "next_attempt", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("Next_email_attempt", "next_email_attemptAttr", "next_email_attempt", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("Next_verify_attempt", "next_verify_attemptAttr", "next_verify_attempt", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("Verified", "verifiedAttr", "verified", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_ef2ca9573c3bd1e27b35145a902be10bStructure = ST_ef2ca9573c3bd1e27b35145a902be10bStructureInner;

        var ST_ef2ca9573c3bd1e27b35145a902be10bStructure = ST_ef2ca9573c3bd1e27b35145a902be10bStructureInner;
        ST_ef2ca9573c3bd1e27b35145a902be10bStructure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$ST_ccbd4ab860fdf3c4690e46bb49937de5Structure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_0543ba6e58ccc819d0ba65db33df025eStructure", "RESTAPIWebsocketOfficial.model$ST_35e76a2e1583feb611523ac6c760c8a9Structure", "RESTAPIWebsocketOfficial.model$ST_ef2ca9573c3bd1e27b35145a902be10bStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_ccbd4ab860fdf3c4690e46bb49937de5StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Account_opening_reason", "account_opening_reasonAttr", "account_opening_reason", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Address_city", "address_cityAttr", "address_city", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Address_line_1", "address_line_1Attr", "address_line_1", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Address_line_2", "address_line_2Attr", "address_line_2", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Address_postcode", "address_postcodeAttr", "address_postcode", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Address_state", "address_stateAttr", "address_state", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Allow_copiers", "allow_copiersAttr", "allow_copiers", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("Citizen", "citizenAttr", "citizen", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Client_tnc_status", "client_tnc_statusAttr", "client_tnc_status", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Country", "countryAttr", "country", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Country_code", "country_codeAttr", "country_code", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Date_of_birth", "date_of_birthAttr", "date_of_birth", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("Dxtrade_user_exception", "dxtrade_user_exceptionAttr", "dxtrade_user_exception", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("Email", "emailAttr", "email", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Email_consent", "email_consentAttr", "email_consent", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("Employment_status", "employment_statusAttr", "employment_status", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Feature_flag", "feature_flagAttr", "feature_flag", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_0543ba6e58ccc819d0ba65db33df025eStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_0543ba6e58ccc819d0ba65db33df025eStructure),
                    this.attr("Financial_assessment", "financial_assessmentAttr", "financial_assessment", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_35e76a2e1583feb611523ac6c760c8a9Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_35e76a2e1583feb611523ac6c760c8a9Structure),
                    this.attr("First_name", "first_nameAttr", "first_name", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Has_secret_answer", "has_secret_answerAttr", "has_secret_answer", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("Immutable_fields", "immutable_fieldsAttr", "immutable_fields", false, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
                    }, true, OS.DataTypes.TextList),
                    this.attr("Is_authenticated_payment_agent", "is_authenticated_payment_agentAttr", "is_authenticated_payment_agent", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("Last_name", "last_nameAttr", "last_name", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Non_pep_declaration", "non_pep_declarationAttr", "non_pep_declaration", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("Phone", "phoneAttr", "phone", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Phone_number_verification", "phone_number_verificationAttr", "phone_number_verification", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_ef2ca9573c3bd1e27b35145a902be10bStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_ef2ca9573c3bd1e27b35145a902be10bStructure),
                    this.attr("Place_of_birth", "place_of_birthAttr", "place_of_birth", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Preferred_language", "preferred_languageAttr", "preferred_language", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Request_professional_status", "request_professional_statusAttr", "request_professional_status", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("Residence", "residenceAttr", "residence", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Salutation", "salutationAttr", "salutation", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Tax_identification_number", "tax_identification_numberAttr", "tax_identification_number", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Tax_residence", "tax_residenceAttr", "tax_residence", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Trading_hub", "trading_hubAttr", "trading_hub", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("User_hash", "user_hashAttr", "user_hash", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_ccbd4ab860fdf3c4690e46bb49937de5Structure = ST_ccbd4ab860fdf3c4690e46bb49937de5StructureInner;

        var ST_ccbd4ab860fdf3c4690e46bb49937de5Structure = ST_ccbd4ab860fdf3c4690e46bb49937de5StructureInner;
        ST_ccbd4ab860fdf3c4690e46bb49937de5Structure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$ST_5fc2e4a935064c1413d6e989e87decd2Structure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_96047f3e265fbed2401212ad81dfa1f4Structure", "RESTAPIWebsocketOfficial.model$ST_ccbd4ab860fdf3c4690e46bb49937de5Structure", "RESTAPIWebsocketOfficial.model$ST_8517d9c8b73e866553a1a7b806af5079Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_5fc2e4a935064c1413d6e989e87decd2StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Echo_req", "echo_reqAttr", "echo_req", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_96047f3e265fbed2401212ad81dfa1f4Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_96047f3e265fbed2401212ad81dfa1f4Structure),
                    this.attr("Get_settings", "get_settingsAttr", "get_settings", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_ccbd4ab860fdf3c4690e46bb49937de5Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_ccbd4ab860fdf3c4690e46bb49937de5Structure),
                    this.attr("Msg_type", "msg_typeAttr", "msg_type", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Error", "errorAttr", "Error", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_8517d9c8b73e866553a1a7b806af5079Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_8517d9c8b73e866553a1a7b806af5079Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_5fc2e4a935064c1413d6e989e87decd2Structure = ST_5fc2e4a935064c1413d6e989e87decd2StructureInner;

        var ST_5fc2e4a935064c1413d6e989e87decd2Structure = ST_5fc2e4a935064c1413d6e989e87decd2StructureInner;
        ST_5fc2e4a935064c1413d6e989e87decd2Structure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RC_a1310fc4b6664d1d807ee5336bf20c28", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_5fc2e4a935064c1413d6e989e87decd2Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_a1310fc4b6664d1d807ee5336bf20c28Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("GetGetSettingsResponse", "getGetSettingsResponseAttr", "GetGetSettingsResponse", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_5fc2e4a935064c1413d6e989e87decd2Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_5fc2e4a935064c1413d6e989e87decd2Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_a1310fc4b6664d1d807ee5336bf20c28(new RC_a1310fc4b6664d1d807ee5336bf20c28.RecordClass({
                    getGetSettingsResponseAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_a1310fc4b6664d1d807ee5336bf20c28 = RC_a1310fc4b6664d1d807ee5336bf20c28Inner;

        RC_a1310fc4b6664d1d807ee5336bf20c28Inner._isAnonymousRecord = true;
        RC_a1310fc4b6664d1d807ee5336bf20c28Inner.UniqueId = "a1310fc4-b666-4d1d-807e-e5336bf20c28";
        var RC_a1310fc4b6664d1d807ee5336bf20c28 = RC_a1310fc4b6664d1d807ee5336bf20c28Inner;
        RC_a1310fc4b6664d1d807ee5336bf20c28.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_1e027ac5f8769ea4d4adbbcc7903f418", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_a1310fc4b6664d1d807ee5336bf20c28"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_1e027ac5f8769ea4d4adbbcc7903f418 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_a1310fc4b6664d1d807ee5336bf20c28;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_1e027ac5f8769ea4d4adbbcc7903f418 = RL_1e027ac5f8769ea4d4adbbcc7903f418;

});

define("RESTAPIWebsocketOfficial.model$ST_4814bb948c1b48da4f5ecccbe35da450Structure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_4814bb948c1b48da4f5ecccbe35da450StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Address", "addressAttr", "address", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new ST_4814bb948c1b48da4f5ecccbe35da450Structure(new ST_4814bb948c1b48da4f5ecccbe35da450Structure.RecordClass({
                    addressAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_4814bb948c1b48da4f5ecccbe35da450Structure = ST_4814bb948c1b48da4f5ecccbe35da450StructureInner;

        var ST_4814bb948c1b48da4f5ecccbe35da450Structure = ST_4814bb948c1b48da4f5ecccbe35da450StructureInner;
        ST_4814bb948c1b48da4f5ecccbe35da450Structure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$ST_1e493399566287dd50f49a441f58a8caStructure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_4814bb948c1b48da4f5ecccbe35da450Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_1e493399566287dd50f49a441f58a8caStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Action", "actionAttr", "action", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Deposit", "depositAttr", "deposit", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_4814bb948c1b48da4f5ecccbe35da450Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_4814bb948c1b48da4f5ecccbe35da450Structure),
                    this.attr("Url", "urlAttr", "url", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_1e493399566287dd50f49a441f58a8caStructure = ST_1e493399566287dd50f49a441f58a8caStructureInner;

        var ST_1e493399566287dd50f49a441f58a8caStructure = ST_1e493399566287dd50f49a441f58a8caStructureInner;
        ST_1e493399566287dd50f49a441f58a8caStructure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_1ee2701fb233e597575036a6d1cfcb5b", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_2aa6b158772e078b381113da0ab825f8Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_1ee2701fb233e597575036a6d1cfcb5b extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_2aa6b158772e078b381113da0ab825f8Structure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_1ee2701fb233e597575036a6d1cfcb5b = RL_1ee2701fb233e597575036a6d1cfcb5b;

});

define("RESTAPIWebsocketOfficial.model$RC_a336dc96fafc2e7ffdb88fdcc24fe482", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_77d1f9105abe302fa373f146c295ea17Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_a336dc96fafc2e7ffdb88fdcc24fe482Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("After_first_deposit", "after_first_depositAttr", "After_first_deposit", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_77d1f9105abe302fa373f146c295ea17Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_77d1f9105abe302fa373f146c295ea17Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_a336dc96fafc2e7ffdb88fdcc24fe482(new RC_a336dc96fafc2e7ffdb88fdcc24fe482.RecordClass({
                    after_first_depositAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_a336dc96fafc2e7ffdb88fdcc24fe482 = RC_a336dc96fafc2e7ffdb88fdcc24fe482Inner;

        RC_a336dc96fafc2e7ffdb88fdcc24fe482Inner._isAnonymousRecord = true;
        RC_a336dc96fafc2e7ffdb88fdcc24fe482Inner.UniqueId = "a336dc96-fafc-2e7f-fdb8-8fdcc24fe482";
        var RC_a336dc96fafc2e7ffdb88fdcc24fe482 = RC_a336dc96fafc2e7ffdb88fdcc24fe482Inner;
        RC_a336dc96fafc2e7ffdb88fdcc24fe482.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_2083bc83b9d077075ef50c2bd63b6965", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_a336dc96fafc2e7ffdb88fdcc24fe482"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_2083bc83b9d077075ef50c2bd63b6965 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_a336dc96fafc2e7ffdb88fdcc24fe482;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_2083bc83b9d077075ef50c2bd63b6965 = RL_2083bc83b9d077075ef50c2bd63b6965;

});

define("RESTAPIWebsocketOfficial.model$RC_6da37637b0593f4ec39cbdb7fca0818f", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_10e78341d21be3a7dc573dcf4252c9dbStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_6da37637b0593f4ec39cbdb7fca0818fInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Onfido", "onfidoAttr", "Onfido", false, false, OS.DataTypes.DataTypes.Record, function() {
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

        RESTAPIWebsocketOfficialModel.RC_6da37637b0593f4ec39cbdb7fca0818f = RC_6da37637b0593f4ec39cbdb7fca0818fInner;

        RC_6da37637b0593f4ec39cbdb7fca0818fInner._isAnonymousRecord = true;
        RC_6da37637b0593f4ec39cbdb7fca0818fInner.UniqueId = "6da37637-b059-3f4e-c39c-bdb7fca0818f";
        var RC_6da37637b0593f4ec39cbdb7fca0818f = RC_6da37637b0593f4ec39cbdb7fca0818fInner;
        RC_6da37637b0593f4ec39cbdb7fca0818f.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_21aa582dbaa7e503639ee59cca230a00", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_6da37637b0593f4ec39cbdb7fca0818f"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_21aa582dbaa7e503639ee59cca230a00 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_6da37637b0593f4ec39cbdb7fca0818f;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_21aa582dbaa7e503639ee59cca230a00 = RL_21aa582dbaa7e503639ee59cca230a00;

});

define("RESTAPIWebsocketOfficial.model$RC_30490951290854c2926b2cf8ec7b4a20", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_9eb2d1268b055c9ba20852d2758a5050Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
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

        RESTAPIWebsocketOfficialModel.RC_30490951290854c2926b2cf8ec7b4a20 = RC_30490951290854c2926b2cf8ec7b4a20Inner;

        RC_30490951290854c2926b2cf8ec7b4a20Inner._isAnonymousRecord = true;
        RC_30490951290854c2926b2cf8ec7b4a20Inner.UniqueId = "30490951-2908-54c2-926b-2cf8ec7b4a20";
        var RC_30490951290854c2926b2cf8ec7b4a20 = RC_30490951290854c2926b2cf8ec7b4a20Inner;
        RC_30490951290854c2926b2cf8ec7b4a20.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_222c4cca834a8b261e24304f207bc884", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_30490951290854c2926b2cf8ec7b4a20"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_222c4cca834a8b261e24304f207bc884 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_30490951290854c2926b2cf8ec7b4a20;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_222c4cca834a8b261e24304f207bc884 = RL_222c4cca834a8b261e24304f207bc884;

});

define("RESTAPIWebsocketOfficial.model$RC_224fc9970e9693b073b49748bfa1459a", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_e9af53f34f5d2c71a49407f1ed42d7f7Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_224fc9970e9693b073b49748bfa1459aInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Max_requestes_general", "max_requestes_generalAttr", "Max_requestes_general", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_e9af53f34f5d2c71a49407f1ed42d7f7Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_e9af53f34f5d2c71a49407f1ed42d7f7Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_224fc9970e9693b073b49748bfa1459a(new RC_224fc9970e9693b073b49748bfa1459a.RecordClass({
                    max_requestes_generalAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_224fc9970e9693b073b49748bfa1459a = RC_224fc9970e9693b073b49748bfa1459aInner;

        RC_224fc9970e9693b073b49748bfa1459aInner._isAnonymousRecord = true;
        RC_224fc9970e9693b073b49748bfa1459aInner.UniqueId = "224fc997-0e96-93b0-73b4-9748bfa1459a";
        var RC_224fc9970e9693b073b49748bfa1459a = RC_224fc9970e9693b073b49748bfa1459aInner;
        RC_224fc9970e9693b073b49748bfa1459a.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RC_2296852fb68ffc0d98bf144361127c38", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_b8e5132e8639404a10bb651dc17997bcStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_2296852fb68ffc0d98bf144361127c38Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Platform", "platformAttr", "Platform", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_b8e5132e8639404a10bb651dc17997bcStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_b8e5132e8639404a10bb651dc17997bcStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_2296852fb68ffc0d98bf144361127c38(new RC_2296852fb68ffc0d98bf144361127c38.RecordClass({
                    platformAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_2296852fb68ffc0d98bf144361127c38 = RC_2296852fb68ffc0d98bf144361127c38Inner;

        RC_2296852fb68ffc0d98bf144361127c38Inner._isAnonymousRecord = true;
        RC_2296852fb68ffc0d98bf144361127c38Inner.UniqueId = "2296852f-b68f-fc0d-98bf-144361127c38";
        var RC_2296852fb68ffc0d98bf144361127c38 = RC_2296852fb68ffc0d98bf144361127c38Inner;
        RC_2296852fb68ffc0d98bf144361127c38.init();
    }
});

define("RESTAPIWebsocketOfficial.model$ST_605da9a1009ce00d8c64718f9c13e284Structure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_605da9a1009ce00d8c64718f9c13e284StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Api", "apiAttr", "api", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("Api_deprecated", "api_deprecatedAttr", "api_deprecated", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("Confirmed", "confirmedAttr", "confirmed", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("Enabled", "enabledAttr", "enabled", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("Exclude_reports", "exclude_reportsAttr", "exclude_reports", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("Expert", "expertAttr", "expert", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("Investor", "investorAttr", "investor", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("Otp_enabled", "otp_enabledAttr", "otp_enabled", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("Password_change", "password_changeAttr", "password_change", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("Push", "pushAttr", "push", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("Readonly", "readonlyAttr", "readonly", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("Reports", "reportsAttr", "reports", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("Reset_pass", "reset_passAttr", "reset_pass", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("Sponsored", "sponsoredAttr", "sponsored", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("Technical", "technicalAttr", "technical", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("Trade_disabled", "trade_disabledAttr", "trade_disabled", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("Trailing", "trailingAttr", "trailing", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_605da9a1009ce00d8c64718f9c13e284Structure = ST_605da9a1009ce00d8c64718f9c13e284StructureInner;

        var ST_605da9a1009ce00d8c64718f9c13e284Structure = ST_605da9a1009ce00d8c64718f9c13e284StructureInner;
        ST_605da9a1009ce00d8c64718f9c13e284Structure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$ST_b3b8308da7c5dcdc42b3f87ca949eb8cStructure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_13505e54da5ba49238f8f2a40834f63fStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_b3b8308da7c5dcdc42b3f87ca949eb8cStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Environment", "environmentAttr", "environment", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Geolocation", "geolocationAttr", "geolocation", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_13505e54da5ba49238f8f2a40834f63fStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_13505e54da5ba49238f8f2a40834f63fStructure),
                    this.attr("Id", "idAttr", "id", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_b3b8308da7c5dcdc42b3f87ca949eb8cStructure = ST_b3b8308da7c5dcdc42b3f87ca949eb8cStructureInner;

        var ST_b3b8308da7c5dcdc42b3f87ca949eb8cStructure = ST_b3b8308da7c5dcdc42b3f87ca949eb8cStructureInner;
        ST_b3b8308da7c5dcdc42b3f87ca949eb8cStructure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$ST_b96e8d04448b693f79e4aebf0b6ee4fbStructure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_b96e8d04448b693f79e4aebf0b6ee4fbStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Android", "androidAttr", "android", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Ios", "iosAttr", "ios", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Webtrader_url", "webtrader_urlAttr", "webtrader_url", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Windows", "windowsAttr", "windows", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_b96e8d04448b693f79e4aebf0b6ee4fbStructure = ST_b96e8d04448b693f79e4aebf0b6ee4fbStructureInner;

        var ST_b96e8d04448b693f79e4aebf0b6ee4fbStructure = ST_b96e8d04448b693f79e4aebf0b6ee4fbStructureInner;
        ST_b96e8d04448b693f79e4aebf0b6ee4fbStructure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$ST_2361699202fda01d7c8ade7cab583650Structure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_605da9a1009ce00d8c64718f9c13e284Structure", "RESTAPIWebsocketOfficial.model$ST_b3b8308da7c5dcdc42b3f87ca949eb8cStructure", "RESTAPIWebsocketOfficial.model$ST_b96e8d04448b693f79e4aebf0b6ee4fbStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_2361699202fda01d7c8ade7cab583650StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Account_type", "account_typeAttr", "account_type", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Balance", "balanceAttr", "balance", false, false, OS.DataTypes.DataTypes.Decimal, function() {
                        return OS.DataTypes.Decimal.defaultValue;
                    }, true),
                    this.attr("Country", "countryAttr", "country", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Currency", "currencyAttr", "currency", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Display_balance", "display_balanceAttr", "display_balance", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Email", "emailAttr", "email", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Group", "groupAttr", "group", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Landing_company", "landing_companyAttr", "landing_company", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Landing_company_short", "landing_company_shortAttr", "landing_company_short", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Leverage", "leverageAttr", "leverage", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("Login", "loginAttr", "login", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Market_type", "market_typeAttr", "market_type", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Name", "nameAttr", "name", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Product", "productAttr", "product", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Request_timestamp", "request_timestampAttr", "request_timestamp", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("Rights", "rightsAttr", "rights", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_605da9a1009ce00d8c64718f9c13e284Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_605da9a1009ce00d8c64718f9c13e284Structure),
                    this.attr("Server", "serverAttr", "server", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Server_info", "server_infoAttr", "server_info", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_b3b8308da7c5dcdc42b3f87ca949eb8cStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_b3b8308da7c5dcdc42b3f87ca949eb8cStructure),
                    this.attr("Sub_account_category", "sub_account_categoryAttr", "sub_account_category", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Sub_account_type", "sub_account_typeAttr", "sub_account_type", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("White_label_links", "white_label_linksAttr", "white_label_links", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_b96e8d04448b693f79e4aebf0b6ee4fbStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_b96e8d04448b693f79e4aebf0b6ee4fbStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_2361699202fda01d7c8ade7cab583650Structure = ST_2361699202fda01d7c8ade7cab583650StructureInner;

        var ST_2361699202fda01d7c8ade7cab583650Structure = ST_2361699202fda01d7c8ade7cab583650StructureInner;
        ST_2361699202fda01d7c8ade7cab583650Structure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$ST_450f06937a42e6bd68832beac9fd4297Structure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_450f06937a42e6bd68832beac9fd4297StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("authorize", "authorizeAttr", "authorize", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new ST_450f06937a42e6bd68832beac9fd4297Structure(new ST_450f06937a42e6bd68832beac9fd4297Structure.RecordClass({
                    authorizeAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_450f06937a42e6bd68832beac9fd4297Structure = ST_450f06937a42e6bd68832beac9fd4297StructureInner;

        var ST_450f06937a42e6bd68832beac9fd4297Structure = ST_450f06937a42e6bd68832beac9fd4297StructureInner;
        ST_450f06937a42e6bd68832beac9fd4297Structure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RC_236b9780ed98eefd23c7d452d5b32785", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_450f06937a42e6bd68832beac9fd4297Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_236b9780ed98eefd23c7d452d5b32785Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("PostAuthorizeRequest", "postAuthorizeRequestAttr", "PostAuthorizeRequest", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_450f06937a42e6bd68832beac9fd4297Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_450f06937a42e6bd68832beac9fd4297Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_236b9780ed98eefd23c7d452d5b32785(new RC_236b9780ed98eefd23c7d452d5b32785.RecordClass({
                    postAuthorizeRequestAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_236b9780ed98eefd23c7d452d5b32785 = RC_236b9780ed98eefd23c7d452d5b32785Inner;

        RC_236b9780ed98eefd23c7d452d5b32785Inner._isAnonymousRecord = true;
        RC_236b9780ed98eefd23c7d452d5b32785Inner.UniqueId = "236b9780-ed98-eefd-23c7-d452d5b32785";
        var RC_236b9780ed98eefd23c7d452d5b32785 = RC_236b9780ed98eefd23c7d452d5b32785Inner;
        RC_236b9780ed98eefd23c7d452d5b32785.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_23c5170e5cae92676806075f1dc0926f", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_26b581032ad004235c0d5c566e39b1dcStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_23c5170e5cae92676806075f1dc0926f extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_26b581032ad004235c0d5c566e39b1dcStructure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_23c5170e5cae92676806075f1dc0926f = RL_23c5170e5cae92676806075f1dc0926f;

});

define("RESTAPIWebsocketOfficial.model$ST_e25657c96fdb654707c20af3bb230787Structure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_e25657c96fdb654707c20af3bb230787StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Platform", "platformAttr", "platform", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Req_id", "req_idAttr", "req_id", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("Trading_platform_available_accounts", "trading_platform_available_accountsAttr", "trading_platform_available_accounts", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Country_code", "country_codeAttr", "country_code", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_e25657c96fdb654707c20af3bb230787Structure = ST_e25657c96fdb654707c20af3bb230787StructureInner;

        var ST_e25657c96fdb654707c20af3bb230787Structure = ST_e25657c96fdb654707c20af3bb230787StructureInner;
        ST_e25657c96fdb654707c20af3bb230787Structure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_e615c73f7c49d5c9a1b81b0e5505c2d5", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_ae15e885fd6defd7e40491664a35bff0Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_e615c73f7c49d5c9a1b81b0e5505c2d5 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_ae15e885fd6defd7e40491664a35bff0Structure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_e615c73f7c49d5c9a1b81b0e5505c2d5 = RL_e615c73f7c49d5c9a1b81b0e5505c2d5;

});

define("RESTAPIWebsocketOfficial.model$ST_a6a60f46ebdfbc286beab7fb13984df8Structure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_e25657c96fdb654707c20af3bb230787Structure", "RESTAPIWebsocketOfficial.model$ST_ae15e885fd6defd7e40491664a35bff0Structure", "RESTAPIWebsocketOfficial.model$RL_e615c73f7c49d5c9a1b81b0e5505c2d5"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_a6a60f46ebdfbc286beab7fb13984df8StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Echo_req", "echo_reqAttr", "echo_req", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_e25657c96fdb654707c20af3bb230787Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_e25657c96fdb654707c20af3bb230787Structure),
                    this.attr("Msg_type", "msg_typeAttr", "msg_type", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("trading_platform_available_accounts", "trading_platform_available_accountsAttr", "trading_platform_available_accounts", false, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.RL_e615c73f7c49d5c9a1b81b0e5505c2d5());
                    }, true, RESTAPIWebsocketOfficialModel.RL_e615c73f7c49d5c9a1b81b0e5505c2d5)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_a6a60f46ebdfbc286beab7fb13984df8Structure = ST_a6a60f46ebdfbc286beab7fb13984df8StructureInner;

        var ST_a6a60f46ebdfbc286beab7fb13984df8Structure = ST_a6a60f46ebdfbc286beab7fb13984df8StructureInner;
        ST_a6a60f46ebdfbc286beab7fb13984df8Structure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_24d00c079b23f7e47e2ee86991545c06", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_a6a60f46ebdfbc286beab7fb13984df8Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_24d00c079b23f7e47e2ee86991545c06 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_a6a60f46ebdfbc286beab7fb13984df8Structure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_24d00c079b23f7e47e2ee86991545c06 = RL_24d00c079b23f7e47e2ee86991545c06;

});

define("RESTAPIWebsocketOfficial.model$RL_25008888c069155597e1a02e1b9ea813", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_803bffb999fad6a38040b2086877902eStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_25008888c069155597e1a02e1b9ea813 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_803bffb999fad6a38040b2086877902eStructure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_25008888c069155597e1a02e1b9ea813 = RL_25008888c069155597e1a02e1b9ea813;

});

define("RESTAPIWebsocketOfficial.model$RC_96175866bef7bdbf74965597575b319c", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_72900159fa859d96c9b5e8531e637a4cStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_96175866bef7bdbf74965597575b319cInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("PostNewAccountVirtualResponse", "postNewAccountVirtualResponseAttr", "PostNewAccountVirtualResponse", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_72900159fa859d96c9b5e8531e637a4cStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_72900159fa859d96c9b5e8531e637a4cStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_96175866bef7bdbf74965597575b319c(new RC_96175866bef7bdbf74965597575b319c.RecordClass({
                    postNewAccountVirtualResponseAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_96175866bef7bdbf74965597575b319c = RC_96175866bef7bdbf74965597575b319cInner;

        RC_96175866bef7bdbf74965597575b319cInner._isAnonymousRecord = true;
        RC_96175866bef7bdbf74965597575b319cInner.UniqueId = "96175866-bef7-bdbf-7496-5597575b319c";
        var RC_96175866bef7bdbf74965597575b319c = RC_96175866bef7bdbf74965597575b319cInner;
        RC_96175866bef7bdbf74965597575b319c.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_2567d50fd0e540a33e71ee0dd4edef5d", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_96175866bef7bdbf74965597575b319c"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_2567d50fd0e540a33e71ee0dd4edef5d extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_96175866bef7bdbf74965597575b319c;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_2567d50fd0e540a33e71ee0dd4edef5d = RL_2567d50fd0e540a33e71ee0dd4edef5d;

});

define("RESTAPIWebsocketOfficial.model$RC_e1b3eaedbd133d4ebfdb497dc119e9c1", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_d12f6a9e29cbb97250918a3fc7bc632aStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_e1b3eaedbd133d4ebfdb497dc119e9c1Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Landing_company", "landing_companyAttr", "Landing_company", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_d12f6a9e29cbb97250918a3fc7bc632aStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_d12f6a9e29cbb97250918a3fc7bc632aStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_e1b3eaedbd133d4ebfdb497dc119e9c1(new RC_e1b3eaedbd133d4ebfdb497dc119e9c1.RecordClass({
                    landing_companyAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_e1b3eaedbd133d4ebfdb497dc119e9c1 = RC_e1b3eaedbd133d4ebfdb497dc119e9c1Inner;

        RC_e1b3eaedbd133d4ebfdb497dc119e9c1Inner._isAnonymousRecord = true;
        RC_e1b3eaedbd133d4ebfdb497dc119e9c1Inner.UniqueId = "e1b3eaed-bd13-3d4e-bfdb-497dc119e9c1";
        var RC_e1b3eaedbd133d4ebfdb497dc119e9c1 = RC_e1b3eaedbd133d4ebfdb497dc119e9c1Inner;
        RC_e1b3eaedbd133d4ebfdb497dc119e9c1.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_25ca4d2fe256f651a7214d9f28b70caa", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_e1b3eaedbd133d4ebfdb497dc119e9c1"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_25ca4d2fe256f651a7214d9f28b70caa extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_e1b3eaedbd133d4ebfdb497dc119e9c1;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_25ca4d2fe256f651a7214d9f28b70caa = RL_25ca4d2fe256f651a7214d9f28b70caa;

});

define("RESTAPIWebsocketOfficial.model$RL_260232560d4d04c2013fce278e787f24", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_b3b8308da7c5dcdc42b3f87ca949eb8cStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_260232560d4d04c2013fce278e787f24 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_b3b8308da7c5dcdc42b3f87ca949eb8cStructure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_260232560d4d04c2013fce278e787f24 = RL_260232560d4d04c2013fce278e787f24;

});

define("RESTAPIWebsocketOfficial.model$ST_b5731219a4e422dad77e0fd7d6ee0cdfStructure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_b5731219a4e422dad77e0fd7d6ee0cdfStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Country", "countryAttr", "country", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("LandingCompanies", "landingCompaniesAttr", "LandingCompanies", false, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
                    }, true, OS.DataTypes.TextList)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_b5731219a4e422dad77e0fd7d6ee0cdfStructure = ST_b5731219a4e422dad77e0fd7d6ee0cdfStructureInner;

        var ST_b5731219a4e422dad77e0fd7d6ee0cdfStructure = ST_b5731219a4e422dad77e0fd7d6ee0cdfStructureInner;
        ST_b5731219a4e422dad77e0fd7d6ee0cdfStructure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RC_264d82ff29428f3cd43ebe0810111d5a", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_b5731219a4e422dad77e0fd7d6ee0cdfStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_264d82ff29428f3cd43ebe0810111d5aInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("KYCAuthStatusRequest", "kYCAuthStatusRequestAttr", "KYCAuthStatusRequest", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_b5731219a4e422dad77e0fd7d6ee0cdfStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_b5731219a4e422dad77e0fd7d6ee0cdfStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_264d82ff29428f3cd43ebe0810111d5a(new RC_264d82ff29428f3cd43ebe0810111d5a.RecordClass({
                    kYCAuthStatusRequestAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_264d82ff29428f3cd43ebe0810111d5a = RC_264d82ff29428f3cd43ebe0810111d5aInner;

        RC_264d82ff29428f3cd43ebe0810111d5aInner._isAnonymousRecord = true;
        RC_264d82ff29428f3cd43ebe0810111d5aInner.UniqueId = "264d82ff-2942-8f3c-d43e-be0810111d5a";
        var RC_264d82ff29428f3cd43ebe0810111d5a = RC_264d82ff29428f3cd43ebe0810111d5aInner;
        RC_264d82ff29428f3cd43ebe0810111d5a.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RC_2827a9b1879137deb3aaa08d45397068", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_4fa180d49a839964a4a640104b10a272Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_2827a9b1879137deb3aaa08d45397068Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Currencies_config", "currencies_configAttr", "Currencies_config", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_4fa180d49a839964a4a640104b10a272Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_4fa180d49a839964a4a640104b10a272Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_2827a9b1879137deb3aaa08d45397068(new RC_2827a9b1879137deb3aaa08d45397068.RecordClass({
                    currencies_configAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_2827a9b1879137deb3aaa08d45397068 = RC_2827a9b1879137deb3aaa08d45397068Inner;

        RC_2827a9b1879137deb3aaa08d45397068Inner._isAnonymousRecord = true;
        RC_2827a9b1879137deb3aaa08d45397068Inner.UniqueId = "2827a9b1-8791-37de-b3aa-a08d45397068";
        var RC_2827a9b1879137deb3aaa08d45397068 = RC_2827a9b1879137deb3aaa08d45397068Inner;
        RC_2827a9b1879137deb3aaa08d45397068.init();
    }
});

define("RESTAPIWebsocketOfficial.model$ST_d5a14f6db075b658d013dc3ad63d0c60Structure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_d5a14f6db075b658d013dc3ad63d0c60StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Asset_indexItem", "asset_indexItemAttr", "__singleArrayAttribute", false, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
                    }, true, OS.DataTypes.TextList)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new ST_d5a14f6db075b658d013dc3ad63d0c60Structure(new ST_d5a14f6db075b658d013dc3ad63d0c60Structure.RecordClass({
                    asset_indexItemAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_d5a14f6db075b658d013dc3ad63d0c60Structure = ST_d5a14f6db075b658d013dc3ad63d0c60StructureInner;

        var ST_d5a14f6db075b658d013dc3ad63d0c60Structure = ST_d5a14f6db075b658d013dc3ad63d0c60StructureInner;
        ST_d5a14f6db075b658d013dc3ad63d0c60Structure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_96ea0e5dbed7b91dda2061420ea7817a", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_d5a14f6db075b658d013dc3ad63d0c60Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_96ea0e5dbed7b91dda2061420ea7817a extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_d5a14f6db075b658d013dc3ad63d0c60Structure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_96ea0e5dbed7b91dda2061420ea7817a = RL_96ea0e5dbed7b91dda2061420ea7817a;

});

define("RESTAPIWebsocketOfficial.model$ST_870defcbb5bf4a58a2a009971edc7d07Structure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_d5a14f6db075b658d013dc3ad63d0c60Structure", "RESTAPIWebsocketOfficial.model$RL_96ea0e5dbed7b91dda2061420ea7817a", "RESTAPIWebsocketOfficial.model$ST_812466b8d5a9a4a768bb1404c7c0b0e5Structure", "RESTAPIWebsocketOfficial.model$ST_8517d9c8b73e866553a1a7b806af5079Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_870defcbb5bf4a58a2a009971edc7d07StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Asset_index", "asset_indexAttr", "asset_index", false, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.RL_96ea0e5dbed7b91dda2061420ea7817a());
                    }, true, RESTAPIWebsocketOfficialModel.RL_96ea0e5dbed7b91dda2061420ea7817a),
                    this.attr("Echo_req", "echo_reqAttr", "echo_req", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_812466b8d5a9a4a768bb1404c7c0b0e5Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_812466b8d5a9a4a768bb1404c7c0b0e5Structure),
                    this.attr("Msg_type", "msg_typeAttr", "msg_type", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Error", "errorAttr", "Error", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_8517d9c8b73e866553a1a7b806af5079Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_8517d9c8b73e866553a1a7b806af5079Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_870defcbb5bf4a58a2a009971edc7d07Structure = ST_870defcbb5bf4a58a2a009971edc7d07StructureInner;

        var ST_870defcbb5bf4a58a2a009971edc7d07Structure = ST_870defcbb5bf4a58a2a009971edc7d07StructureInner;
        ST_870defcbb5bf4a58a2a009971edc7d07Structure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RC_2838f738beb90761e9ec634e42207f58", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_870defcbb5bf4a58a2a009971edc7d07Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_2838f738beb90761e9ec634e42207f58Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("GetAssetIndexResponse", "getAssetIndexResponseAttr", "GetAssetIndexResponse", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_870defcbb5bf4a58a2a009971edc7d07Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_870defcbb5bf4a58a2a009971edc7d07Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_2838f738beb90761e9ec634e42207f58(new RC_2838f738beb90761e9ec634e42207f58.RecordClass({
                    getAssetIndexResponseAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_2838f738beb90761e9ec634e42207f58 = RC_2838f738beb90761e9ec634e42207f58Inner;

        RC_2838f738beb90761e9ec634e42207f58Inner._isAnonymousRecord = true;
        RC_2838f738beb90761e9ec634e42207f58Inner.UniqueId = "2838f738-beb9-0761-e9ec-634e42207f58";
        var RC_2838f738beb90761e9ec634e42207f58 = RC_2838f738beb90761e9ec634e42207f58Inner;
        RC_2838f738beb90761e9ec634e42207f58.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RC_82e915cb61269c2e1fb30ed84469e07b", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_c4a5ea0056d7d4d64b0630a9fc26f60bStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
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

        RESTAPIWebsocketOfficialModel.RC_82e915cb61269c2e1fb30ed84469e07b = RC_82e915cb61269c2e1fb30ed84469e07bInner;

        RC_82e915cb61269c2e1fb30ed84469e07bInner._isAnonymousRecord = true;
        RC_82e915cb61269c2e1fb30ed84469e07bInner.UniqueId = "82e915cb-6126-9c2e-1fb3-0ed84469e07b";
        var RC_82e915cb61269c2e1fb30ed84469e07b = RC_82e915cb61269c2e1fb30ed84469e07bInner;
        RC_82e915cb61269c2e1fb30ed84469e07b.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_29080a69ee1ce69b9b697bf94281f9ff", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_82e915cb61269c2e1fb30ed84469e07b"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_29080a69ee1ce69b9b697bf94281f9ff extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_82e915cb61269c2e1fb30ed84469e07b;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_29080a69ee1ce69b9b697bf94281f9ff = RL_29080a69ee1ce69b9b697bf94281f9ff;

});

define("RESTAPIWebsocketOfficial.model$RC_cd5e42a0793d8eb69fbc5056fff3f372", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_55ea19c18b42991c3f5575c063ad7ca7Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
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

        RESTAPIWebsocketOfficialModel.RC_cd5e42a0793d8eb69fbc5056fff3f372 = RC_cd5e42a0793d8eb69fbc5056fff3f372Inner;

        RC_cd5e42a0793d8eb69fbc5056fff3f372Inner._isAnonymousRecord = true;
        RC_cd5e42a0793d8eb69fbc5056fff3f372Inner.UniqueId = "cd5e42a0-793d-8eb6-9fbc-5056fff3f372";
        var RC_cd5e42a0793d8eb69fbc5056fff3f372 = RC_cd5e42a0793d8eb69fbc5056fff3f372Inner;
        RC_cd5e42a0793d8eb69fbc5056fff3f372.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_296c80117ea3feed92d93a9342c06001", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_cd5e42a0793d8eb69fbc5056fff3f372"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_296c80117ea3feed92d93a9342c06001 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_cd5e42a0793d8eb69fbc5056fff3f372;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_296c80117ea3feed92d93a9342c06001 = RL_296c80117ea3feed92d93a9342c06001;

});

define("RESTAPIWebsocketOfficial.model$ST_d521c1d83421a832ffbd8b853bf43c98Structure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_057fc2ec8b30a53f3233d84a70e95aabStructure", "RESTAPIWebsocketOfficial.model$RL_0c35eb12ceba02e474ddb698ce43b328"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_d521c1d83421a832ffbd8b853bf43c98StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("StatusCode", "statusCodeAttr", "StatusCode", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true),
                    this.attr("StatusLine", "statusLineAttr", "StatusLine", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Headers", "headersAttr", "Headers", false, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.RL_0c35eb12ceba02e474ddb698ce43b328());
                    }, true, RESTAPIWebsocketOfficialModel.RL_0c35eb12ceba02e474ddb698ce43b328),
                    this.attr("ResponseText", "responseTextAttr", "ResponseText", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("ResponseBinary", "responseBinaryAttr", "ResponseBinary", false, false, OS.DataTypes.DataTypes.BinaryData, function() {
                        return OS.DataTypes.BinaryData.defaultValue;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_d521c1d83421a832ffbd8b853bf43c98Structure = ST_d521c1d83421a832ffbd8b853bf43c98StructureInner;

        var ST_d521c1d83421a832ffbd8b853bf43c98Structure = ST_d521c1d83421a832ffbd8b853bf43c98StructureInner;
        ST_d521c1d83421a832ffbd8b853bf43c98Structure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_2b07530ab95955b415e0d47b20046870", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_d521c1d83421a832ffbd8b853bf43c98Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_2b07530ab95955b415e0d47b20046870 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_d521c1d83421a832ffbd8b853bf43c98Structure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_2b07530ab95955b415e0d47b20046870 = RL_2b07530ab95955b415e0d47b20046870;

});

define("RESTAPIWebsocketOfficial.model$RL_2b1a3419eafdbc343d89f210b76f82c7", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_ddeabbcab252c99fc5f083425434b2a7Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_2b1a3419eafdbc343d89f210b76f82c7 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_ddeabbcab252c99fc5f083425434b2a7Structure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_2b1a3419eafdbc343d89f210b76f82c7 = RL_2b1a3419eafdbc343d89f210b76f82c7;

});

define("RESTAPIWebsocketOfficial.model$RL_d214456dc511920f517885542ecb318a", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_2361699202fda01d7c8ade7cab583650Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_d214456dc511920f517885542ecb318a extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_2361699202fda01d7c8ade7cab583650Structure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_d214456dc511920f517885542ecb318a = RL_d214456dc511920f517885542ecb318a;

});

define("RESTAPIWebsocketOfficial.model$ST_2f457e0a5b13526850516eea23ae0e9aStructure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_1e4e8e93f82bd7d0c82446a55ed8dee2Structure", "RESTAPIWebsocketOfficial.model$ST_2361699202fda01d7c8ade7cab583650Structure", "RESTAPIWebsocketOfficial.model$RL_d214456dc511920f517885542ecb318a"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_2f457e0a5b13526850516eea23ae0e9aStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Echo_req", "echo_reqAttr", "echo_req", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_1e4e8e93f82bd7d0c82446a55ed8dee2Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_1e4e8e93f82bd7d0c82446a55ed8dee2Structure),
                    this.attr("Msg_type", "msg_typeAttr", "msg_type", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Mt5_login_list", "mt5_login_listAttr", "mt5_login_list", false, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.RL_d214456dc511920f517885542ecb318a());
                    }, true, RESTAPIWebsocketOfficialModel.RL_d214456dc511920f517885542ecb318a)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_2f457e0a5b13526850516eea23ae0e9aStructure = ST_2f457e0a5b13526850516eea23ae0e9aStructureInner;

        var ST_2f457e0a5b13526850516eea23ae0e9aStructure = ST_2f457e0a5b13526850516eea23ae0e9aStructureInner;
        ST_2f457e0a5b13526850516eea23ae0e9aStructure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RC_5c073669af4d1bb9a059222c06ae3a49", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_2f457e0a5b13526850516eea23ae0e9aStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_5c073669af4d1bb9a059222c06ae3a49Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("GetMT5LoginListResponse", "getMT5LoginListResponseAttr", "GetMT5LoginListResponse", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_2f457e0a5b13526850516eea23ae0e9aStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_2f457e0a5b13526850516eea23ae0e9aStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_5c073669af4d1bb9a059222c06ae3a49(new RC_5c073669af4d1bb9a059222c06ae3a49.RecordClass({
                    getMT5LoginListResponseAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_5c073669af4d1bb9a059222c06ae3a49 = RC_5c073669af4d1bb9a059222c06ae3a49Inner;

        RC_5c073669af4d1bb9a059222c06ae3a49Inner._isAnonymousRecord = true;
        RC_5c073669af4d1bb9a059222c06ae3a49Inner.UniqueId = "5c073669-af4d-1bb9-a059-222c06ae3a49";
        var RC_5c073669af4d1bb9a059222c06ae3a49 = RC_5c073669af4d1bb9a059222c06ae3a49Inner;
        RC_5c073669af4d1bb9a059222c06ae3a49.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_2bc6600c37d3f99d4190f0fccf1bad67", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_5c073669af4d1bb9a059222c06ae3a49"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_2bc6600c37d3f99d4190f0fccf1bad67 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_5c073669af4d1bb9a059222c06ae3a49;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_2bc6600c37d3f99d4190f0fccf1bad67 = RL_2bc6600c37d3f99d4190f0fccf1bad67;

});

define("RESTAPIWebsocketOfficial.model$RC_2bf25d62d530e43a49ce5fb7ed436ea0", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_d5a14f6db075b658d013dc3ad63d0c60Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_2bf25d62d530e43a49ce5fb7ed436ea0Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Asset_indexItem", "asset_indexItemAttr", "Asset_indexItem", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_d5a14f6db075b658d013dc3ad63d0c60Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_d5a14f6db075b658d013dc3ad63d0c60Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_2bf25d62d530e43a49ce5fb7ed436ea0(new RC_2bf25d62d530e43a49ce5fb7ed436ea0.RecordClass({
                    asset_indexItemAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_2bf25d62d530e43a49ce5fb7ed436ea0 = RC_2bf25d62d530e43a49ce5fb7ed436ea0Inner;

        RC_2bf25d62d530e43a49ce5fb7ed436ea0Inner._isAnonymousRecord = true;
        RC_2bf25d62d530e43a49ce5fb7ed436ea0Inner.UniqueId = "2bf25d62-d530-e43a-49ce-5fb7ed436ea0";
        var RC_2bf25d62d530e43a49ce5fb7ed436ea0 = RC_2bf25d62d530e43a49ce5fb7ed436ea0Inner;
        RC_2bf25d62d530e43a49ce5fb7ed436ea0.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RC_f4690c821393576cd1cde60070daa64f", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_a6a60f46ebdfbc286beab7fb13984df8Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_f4690c821393576cd1cde60070daa64fInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("PostTradingPlatformAvailableAccountResponseCtrader", "postTradingPlatformAvailableAccountResponseCtraderAttr", "PostTradingPlatformAvailableAccountResponseCtrader", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_a6a60f46ebdfbc286beab7fb13984df8Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_a6a60f46ebdfbc286beab7fb13984df8Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_f4690c821393576cd1cde60070daa64f(new RC_f4690c821393576cd1cde60070daa64f.RecordClass({
                    postTradingPlatformAvailableAccountResponseCtraderAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_f4690c821393576cd1cde60070daa64f = RC_f4690c821393576cd1cde60070daa64fInner;

        RC_f4690c821393576cd1cde60070daa64fInner._isAnonymousRecord = true;
        RC_f4690c821393576cd1cde60070daa64fInner.UniqueId = "f4690c82-1393-576c-d1cd-e60070daa64f";
        var RC_f4690c821393576cd1cde60070daa64f = RC_f4690c821393576cd1cde60070daa64fInner;
        RC_f4690c821393576cd1cde60070daa64f.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_2d46a49728c41d7be4ec88ca0d4e8266", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_f4690c821393576cd1cde60070daa64f"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_2d46a49728c41d7be4ec88ca0d4e8266 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_f4690c821393576cd1cde60070daa64f;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_2d46a49728c41d7be4ec88ca0d4e8266 = RL_2d46a49728c41d7be4ec88ca0d4e8266;

});

define("RESTAPIWebsocketOfficial.model$RC_441f684d3efba387356554fe17c62bec", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_d15d22dc3a60a2e6365116c61a16aaa0Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_441f684d3efba387356554fe17c62becInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Limit", "limitAttr", "Limit", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_d15d22dc3a60a2e6365116c61a16aaa0Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_d15d22dc3a60a2e6365116c61a16aaa0Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_441f684d3efba387356554fe17c62bec(new RC_441f684d3efba387356554fe17c62bec.RecordClass({
                    limitAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_441f684d3efba387356554fe17c62bec = RC_441f684d3efba387356554fe17c62becInner;

        RC_441f684d3efba387356554fe17c62becInner._isAnonymousRecord = true;
        RC_441f684d3efba387356554fe17c62becInner.UniqueId = "441f684d-3efb-a387-3565-54fe17c62bec";
        var RC_441f684d3efba387356554fe17c62bec = RC_441f684d3efba387356554fe17c62becInner;
        RC_441f684d3efba387356554fe17c62bec.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_2d74cc19c3ab1a029c34be65ea3b289a", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_441f684d3efba387356554fe17c62bec"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_2d74cc19c3ab1a029c34be65ea3b289a extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_441f684d3efba387356554fe17c62bec;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_2d74cc19c3ab1a029c34be65ea3b289a = RL_2d74cc19c3ab1a029c34be65ea3b289a;

});

define("RESTAPIWebsocketOfficial.model$RL_2e550e70d4f60fcf474568418d9dcf73", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_35e76a2e1583feb611523ac6c760c8a9Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_2e550e70d4f60fcf474568418d9dcf73 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_35e76a2e1583feb611523ac6c760c8a9Structure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_2e550e70d4f60fcf474568418d9dcf73 = RL_2e550e70d4f60fcf474568418d9dcf73;

});

define("RESTAPIWebsocketOfficial.model$RC_2e6da4a898d55ae96aab51b6e09d6a22", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_6eafdf6bd9852632690d0672a511a98fStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_2e6da4a898d55ae96aab51b6e09d6a22Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Fiat", "fiatAttr", "Fiat", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_6eafdf6bd9852632690d0672a511a98fStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_6eafdf6bd9852632690d0672a511a98fStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_2e6da4a898d55ae96aab51b6e09d6a22(new RC_2e6da4a898d55ae96aab51b6e09d6a22.RecordClass({
                    fiatAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_2e6da4a898d55ae96aab51b6e09d6a22 = RC_2e6da4a898d55ae96aab51b6e09d6a22Inner;

        RC_2e6da4a898d55ae96aab51b6e09d6a22Inner._isAnonymousRecord = true;
        RC_2e6da4a898d55ae96aab51b6e09d6a22Inner.UniqueId = "2e6da4a8-98d5-5ae9-6aab-51b6e09d6a22";
        var RC_2e6da4a898d55ae96aab51b6e09d6a22 = RC_2e6da4a898d55ae96aab51b6e09d6a22Inner;
        RC_2e6da4a898d55ae96aab51b6e09d6a22.init();
    }
});

define("RESTAPIWebsocketOfficial.model$ST_4820561c523dc84c471446a46147a065Structure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_50afbe86b1f98695d7a2eacc451587a7Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_4820561c523dc84c471446a46147a065StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("KYCAuthStatus", "kYCAuthStatusAttr", "kyc_auth_status", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_50afbe86b1f98695d7a2eacc451587a7Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_50afbe86b1f98695d7a2eacc451587a7Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new ST_4820561c523dc84c471446a46147a065Structure(new ST_4820561c523dc84c471446a46147a065Structure.RecordClass({
                    kYCAuthStatusAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_4820561c523dc84c471446a46147a065Structure = ST_4820561c523dc84c471446a46147a065StructureInner;

        var ST_4820561c523dc84c471446a46147a065Structure = ST_4820561c523dc84c471446a46147a065StructureInner;
        ST_4820561c523dc84c471446a46147a065Structure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RC_98e502ffc9bd24401241ef277fce403c", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_4820561c523dc84c471446a46147a065Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_98e502ffc9bd24401241ef277fce403cInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("KYCAuthStatusResponse", "kYCAuthStatusResponseAttr", "KYCAuthStatusResponse", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_4820561c523dc84c471446a46147a065Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_4820561c523dc84c471446a46147a065Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_98e502ffc9bd24401241ef277fce403c(new RC_98e502ffc9bd24401241ef277fce403c.RecordClass({
                    kYCAuthStatusResponseAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_98e502ffc9bd24401241ef277fce403c = RC_98e502ffc9bd24401241ef277fce403cInner;

        RC_98e502ffc9bd24401241ef277fce403cInner._isAnonymousRecord = true;
        RC_98e502ffc9bd24401241ef277fce403cInner.UniqueId = "98e502ff-c9bd-2440-1241-ef277fce403c";
        var RC_98e502ffc9bd24401241ef277fce403c = RC_98e502ffc9bd24401241ef277fce403cInner;
        RC_98e502ffc9bd24401241ef277fce403c.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_2f1c969e24c9ba731c5c1c39ceea50ec", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_98e502ffc9bd24401241ef277fce403c"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_2f1c969e24c9ba731c5c1c39ceea50ec extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_98e502ffc9bd24401241ef277fce403c;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_2f1c969e24c9ba731c5c1c39ceea50ec = RL_2f1c969e24c9ba731c5c1c39ceea50ec;

});

define("RESTAPIWebsocketOfficial.model$RC_71e7722a7761502e1fc1ee9175838bd9", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_ac4f1b4870aba80de82d4c04f7b530ceStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_71e7722a7761502e1fc1ee9175838bd9Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Max_proposal_subscription", "max_proposal_subscriptionAttr", "Max_proposal_subscription", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_ac4f1b4870aba80de82d4c04f7b530ceStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_ac4f1b4870aba80de82d4c04f7b530ceStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_71e7722a7761502e1fc1ee9175838bd9(new RC_71e7722a7761502e1fc1ee9175838bd9.RecordClass({
                    max_proposal_subscriptionAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_71e7722a7761502e1fc1ee9175838bd9 = RC_71e7722a7761502e1fc1ee9175838bd9Inner;

        RC_71e7722a7761502e1fc1ee9175838bd9Inner._isAnonymousRecord = true;
        RC_71e7722a7761502e1fc1ee9175838bd9Inner.UniqueId = "71e7722a-7761-502e-1fc1-ee9175838bd9";
        var RC_71e7722a7761502e1fc1ee9175838bd9 = RC_71e7722a7761502e1fc1ee9175838bd9Inner;
        RC_71e7722a7761502e1fc1ee9175838bd9.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_2f43bfa975a498b49479ea4ecbc98b48", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_71e7722a7761502e1fc1ee9175838bd9"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_2f43bfa975a498b49479ea4ecbc98b48 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_71e7722a7761502e1fc1ee9175838bd9;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_2f43bfa975a498b49479ea4ecbc98b48 = RL_2f43bfa975a498b49479ea4ecbc98b48;

});

define("RESTAPIWebsocketOfficial.model$ST_2f46c6fecf81fe9d91763f789141eec9Structure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_1e493399566287dd50f49a441f58a8caStructure", "RESTAPIWebsocketOfficial.model$ST_a61a52fb9a0db4861b8e2b8110ef16c4Structure", "RESTAPIWebsocketOfficial.model$ST_8517d9c8b73e866553a1a7b806af5079Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_2f46c6fecf81fe9d91763f789141eec9StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Cashier", "cashierAttr", "cashier", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_1e493399566287dd50f49a441f58a8caStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_1e493399566287dd50f49a441f58a8caStructure),
                    this.attr("Echo_req", "echo_reqAttr", "echo_req", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_a61a52fb9a0db4861b8e2b8110ef16c4Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_a61a52fb9a0db4861b8e2b8110ef16c4Structure),
                    this.attr("Msg_type", "msg_typeAttr", "msg_type", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Error", "errorAttr", "error", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_8517d9c8b73e866553a1a7b806af5079Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_8517d9c8b73e866553a1a7b806af5079Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_2f46c6fecf81fe9d91763f789141eec9Structure = ST_2f46c6fecf81fe9d91763f789141eec9StructureInner;

        var ST_2f46c6fecf81fe9d91763f789141eec9Structure = ST_2f46c6fecf81fe9d91763f789141eec9StructureInner;
        ST_2f46c6fecf81fe9d91763f789141eec9Structure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RC_7a9f1d8fcf08e196ae4fcb70fce3ae4d", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_9d2eeec2f5ab741e3d87ce62bfe442ffStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_7a9f1d8fcf08e196ae4fcb70fce3ae4dInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Mt5_status", "mt5_statusAttr", "Mt5_status", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_9d2eeec2f5ab741e3d87ce62bfe442ffStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_9d2eeec2f5ab741e3d87ce62bfe442ffStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_7a9f1d8fcf08e196ae4fcb70fce3ae4d(new RC_7a9f1d8fcf08e196ae4fcb70fce3ae4d.RecordClass({
                    mt5_statusAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_7a9f1d8fcf08e196ae4fcb70fce3ae4d = RC_7a9f1d8fcf08e196ae4fcb70fce3ae4dInner;

        RC_7a9f1d8fcf08e196ae4fcb70fce3ae4dInner._isAnonymousRecord = true;
        RC_7a9f1d8fcf08e196ae4fcb70fce3ae4dInner.UniqueId = "7a9f1d8f-cf08-e196-ae4f-cb70fce3ae4d";
        var RC_7a9f1d8fcf08e196ae4fcb70fce3ae4d = RC_7a9f1d8fcf08e196ae4fcb70fce3ae4dInner;
        RC_7a9f1d8fcf08e196ae4fcb70fce3ae4d.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_30996d47f459830cdd860ac4090ef40a", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_7a9f1d8fcf08e196ae4fcb70fce3ae4d"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_30996d47f459830cdd860ac4090ef40a extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_7a9f1d8fcf08e196ae4fcb70fce3ae4d;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_30996d47f459830cdd860ac4090ef40a = RL_30996d47f459830cdd860ac4090ef40a;

});

define("RESTAPIWebsocketOfficial.model$RC_30f7e77f4f85f62f55a749d558899db1", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_b8e1602bee02fb2422c9742384775a7bStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_30f7e77f4f85f62f55a749d558899db1Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("PostResetPasswordResponse", "postResetPasswordResponseAttr", "PostResetPasswordResponse", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_b8e1602bee02fb2422c9742384775a7bStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_b8e1602bee02fb2422c9742384775a7bStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_30f7e77f4f85f62f55a749d558899db1(new RC_30f7e77f4f85f62f55a749d558899db1.RecordClass({
                    postResetPasswordResponseAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_30f7e77f4f85f62f55a749d558899db1 = RC_30f7e77f4f85f62f55a749d558899db1Inner;

        RC_30f7e77f4f85f62f55a749d558899db1Inner._isAnonymousRecord = true;
        RC_30f7e77f4f85f62f55a749d558899db1Inner.UniqueId = "30f7e77f-4f85-f62f-55a7-49d558899db1";
        var RC_30f7e77f4f85f62f55a749d558899db1 = RC_30f7e77f4f85f62f55a749d558899db1Inner;
        RC_30f7e77f4f85f62f55a749d558899db1.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RC_31254dd0eceb66de83ea4d3f76038ef7", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_66a31b6dc85d7150aaf5da4cc4b359a4Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_31254dd0eceb66de83ea4d3f76038ef7Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Url_parameter", "url_parameterAttr", "Url_parameter", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_66a31b6dc85d7150aaf5da4cc4b359a4Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_66a31b6dc85d7150aaf5da4cc4b359a4Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_31254dd0eceb66de83ea4d3f76038ef7(new RC_31254dd0eceb66de83ea4d3f76038ef7.RecordClass({
                    url_parameterAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_31254dd0eceb66de83ea4d3f76038ef7 = RC_31254dd0eceb66de83ea4d3f76038ef7Inner;

        RC_31254dd0eceb66de83ea4d3f76038ef7Inner._isAnonymousRecord = true;
        RC_31254dd0eceb66de83ea4d3f76038ef7Inner.UniqueId = "31254dd0-eceb-66de-83ea-4d3f76038ef7";
        var RC_31254dd0eceb66de83ea4d3f76038ef7 = RC_31254dd0eceb66de83ea4d3f76038ef7Inner;
        RC_31254dd0eceb66de83ea4d3f76038ef7.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RC_e693c35b48131a7d9d296aba5185b8c6", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_98319758945048a72386b9e9466c220aStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_e693c35b48131a7d9d296aba5185b8c6Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Requirement", "requirementAttr", "Requirement", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_98319758945048a72386b9e9466c220aStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_98319758945048a72386b9e9466c220aStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_e693c35b48131a7d9d296aba5185b8c6(new RC_e693c35b48131a7d9d296aba5185b8c6.RecordClass({
                    requirementAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_e693c35b48131a7d9d296aba5185b8c6 = RC_e693c35b48131a7d9d296aba5185b8c6Inner;

        RC_e693c35b48131a7d9d296aba5185b8c6Inner._isAnonymousRecord = true;
        RC_e693c35b48131a7d9d296aba5185b8c6Inner.UniqueId = "e693c35b-4813-1a7d-9d29-6aba5185b8c6";
        var RC_e693c35b48131a7d9d296aba5185b8c6 = RC_e693c35b48131a7d9d296aba5185b8c6Inner;
        RC_e693c35b48131a7d9d296aba5185b8c6.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_354382860a4523a089cd5a3761912fe2", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_e693c35b48131a7d9d296aba5185b8c6"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_354382860a4523a089cd5a3761912fe2 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_e693c35b48131a7d9d296aba5185b8c6;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_354382860a4523a089cd5a3761912fe2 = RL_354382860a4523a089cd5a3761912fe2;

});

define("RESTAPIWebsocketOfficial.model$RL_357030bc20ba450abe6756927d50ad98", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_2aef4efdcc8a8ad935c2f051f3051327Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_357030bc20ba450abe6756927d50ad98 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_2aef4efdcc8a8ad935c2f051f3051327Structure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_357030bc20ba450abe6756927d50ad98 = RL_357030bc20ba450abe6756927d50ad98;

});

define("RESTAPIWebsocketOfficial.model$ST_95720c0132c7c8b07166d48790a0a129Structure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_95720c0132c7c8b07166d48790a0a129StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("New_password", "new_passwordAttr", "new_password", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Old_password", "old_passwordAttr", "old_password", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Platform", "platformAttr", "platform", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Trading_platform_password_change", "trading_platform_password_changeAttr", "trading_platform_password_change", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_95720c0132c7c8b07166d48790a0a129Structure = ST_95720c0132c7c8b07166d48790a0a129StructureInner;

        var ST_95720c0132c7c8b07166d48790a0a129Structure = ST_95720c0132c7c8b07166d48790a0a129StructureInner;
        ST_95720c0132c7c8b07166d48790a0a129Structure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_360fcdf4e596d82c75762f808854a5a1", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_95720c0132c7c8b07166d48790a0a129Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_360fcdf4e596d82c75762f808854a5a1 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_95720c0132c7c8b07166d48790a0a129Structure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_360fcdf4e596d82c75762f808854a5a1 = RL_360fcdf4e596d82c75762f808854a5a1;

});

define("RESTAPIWebsocketOfficial.model$RL_36ff7df6547fc6551e99dc50dec2ec00", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_b5731219a4e422dad77e0fd7d6ee0cdfStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_36ff7df6547fc6551e99dc50dec2ec00 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_b5731219a4e422dad77e0fd7d6ee0cdfStructure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_36ff7df6547fc6551e99dc50dec2ec00 = RL_36ff7df6547fc6551e99dc50dec2ec00;

});

define("RESTAPIWebsocketOfficial.model$RC_60071085ccdc1a939c98b76e05aec53e", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_433eb5ffcea5c3c69d4be061c9113711Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_60071085ccdc1a939c98b76e05aec53eInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("KYC_Address", "kYC_AddressAttr", "KYC_Address", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_433eb5ffcea5c3c69d4be061c9113711Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_433eb5ffcea5c3c69d4be061c9113711Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_60071085ccdc1a939c98b76e05aec53e(new RC_60071085ccdc1a939c98b76e05aec53e.RecordClass({
                    kYC_AddressAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_60071085ccdc1a939c98b76e05aec53e = RC_60071085ccdc1a939c98b76e05aec53eInner;

        RC_60071085ccdc1a939c98b76e05aec53eInner._isAnonymousRecord = true;
        RC_60071085ccdc1a939c98b76e05aec53eInner.UniqueId = "60071085-ccdc-1a93-9c98-b76e05aec53e";
        var RC_60071085ccdc1a939c98b76e05aec53e = RC_60071085ccdc1a939c98b76e05aec53eInner;
        RC_60071085ccdc1a939c98b76e05aec53e.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_3860d269e9dd680bb74541283f709b44", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_60071085ccdc1a939c98b76e05aec53e"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_3860d269e9dd680bb74541283f709b44 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_60071085ccdc1a939c98b76e05aec53e;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_3860d269e9dd680bb74541283f709b44 = RL_3860d269e9dd680bb74541283f709b44;

});

define("RESTAPIWebsocketOfficial.model$RL_386f6a281c08d72d0376417e02fe0b4b", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_b5282edb36283adb40969ef7004c3e79Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_386f6a281c08d72d0376417e02fe0b4b extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_b5282edb36283adb40969ef7004c3e79Structure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_386f6a281c08d72d0376417e02fe0b4b = RL_386f6a281c08d72d0376417e02fe0b4b;

});

define("RESTAPIWebsocketOfficial.model$RC_6868d98609c14050d7d73f2cb7e44e62", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_d521c1d83421a832ffbd8b853bf43c98Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_6868d98609c14050d7d73f2cb7e44e62Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("HTTPResponse", "hTTPResponseAttr", "HTTPResponse", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_d521c1d83421a832ffbd8b853bf43c98Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_d521c1d83421a832ffbd8b853bf43c98Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_6868d98609c14050d7d73f2cb7e44e62(new RC_6868d98609c14050d7d73f2cb7e44e62.RecordClass({
                    hTTPResponseAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_6868d98609c14050d7d73f2cb7e44e62 = RC_6868d98609c14050d7d73f2cb7e44e62Inner;

        RC_6868d98609c14050d7d73f2cb7e44e62Inner._isAnonymousRecord = true;
        RC_6868d98609c14050d7d73f2cb7e44e62Inner.UniqueId = "6868d986-09c1-4050-d7d7-3f2cb7e44e62";
        var RC_6868d98609c14050d7d73f2cb7e44e62 = RC_6868d98609c14050d7d73f2cb7e44e62Inner;
        RC_6868d98609c14050d7d73f2cb7e44e62.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_38e2f6aea80afed1f36b3e2c097d68ac", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_6868d98609c14050d7d73f2cb7e44e62"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_38e2f6aea80afed1f36b3e2c097d68ac extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_6868d98609c14050d7d73f2cb7e44e62;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_38e2f6aea80afed1f36b3e2c097d68ac = RL_38e2f6aea80afed1f36b3e2c097d68ac;

});

define("RESTAPIWebsocketOfficial.model$RC_3a2d986a770a9c3e6f1096b16961e5a9", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_af8134183a4bd7e3eec97ada0cf46b5eStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_3a2d986a770a9c3e6f1096b16961e5a9Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Api_call_limit", "api_call_limitAttr", "Api_call_limit", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_af8134183a4bd7e3eec97ada0cf46b5eStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_af8134183a4bd7e3eec97ada0cf46b5eStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_3a2d986a770a9c3e6f1096b16961e5a9(new RC_3a2d986a770a9c3e6f1096b16961e5a9.RecordClass({
                    api_call_limitAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_3a2d986a770a9c3e6f1096b16961e5a9 = RC_3a2d986a770a9c3e6f1096b16961e5a9Inner;

        RC_3a2d986a770a9c3e6f1096b16961e5a9Inner._isAnonymousRecord = true;
        RC_3a2d986a770a9c3e6f1096b16961e5a9Inner.UniqueId = "3a2d986a-770a-9c3e-6f10-96b16961e5a9";
        var RC_3a2d986a770a9c3e6f1096b16961e5a9 = RC_3a2d986a770a9c3e6f1096b16961e5a9Inner;
        RC_3a2d986a770a9c3e6f1096b16961e5a9.init();
    }
});

define("RESTAPIWebsocketOfficial.model$ST_3a8fd8b28bfeab1bd267f04e730ca9e6Structure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_3a8fd8b28bfeab1bd267f04e730ca9e6StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("platform", "platformAttr", "platform", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("country_code", "country_codeAttr", "country_code", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_3a8fd8b28bfeab1bd267f04e730ca9e6Structure = ST_3a8fd8b28bfeab1bd267f04e730ca9e6StructureInner;

        var ST_3a8fd8b28bfeab1bd267f04e730ca9e6Structure = ST_3a8fd8b28bfeab1bd267f04e730ca9e6StructureInner;
        ST_3a8fd8b28bfeab1bd267f04e730ca9e6Structure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RC_3c60a1846470070c1bbae2a1d22163d2", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_628e5221d510e98bcfe00cce5f107d21Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_3c60a1846470070c1bbae2a1d22163d2Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Config", "configAttr", "Config", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_628e5221d510e98bcfe00cce5f107d21Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_628e5221d510e98bcfe00cce5f107d21Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_3c60a1846470070c1bbae2a1d22163d2(new RC_3c60a1846470070c1bbae2a1d22163d2.RecordClass({
                    configAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_3c60a1846470070c1bbae2a1d22163d2 = RC_3c60a1846470070c1bbae2a1d22163d2Inner;

        RC_3c60a1846470070c1bbae2a1d22163d2Inner._isAnonymousRecord = true;
        RC_3c60a1846470070c1bbae2a1d22163d2Inner.UniqueId = "3c60a184-6470-070c-1bba-e2a1d22163d2";
        var RC_3c60a1846470070c1bbae2a1d22163d2 = RC_3c60a1846470070c1bbae2a1d22163d2Inner;
        RC_3c60a1846470070c1bbae2a1d22163d2.init();
    }
});

define("RESTAPIWebsocketOfficial.model$ST_5a8f9ede296ad9cf5b81205656c8b54fStructure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_e25657c96fdb654707c20af3bb230787Structure", "RESTAPIWebsocketOfficial.model$ST_3a8fd8b28bfeab1bd267f04e730ca9e6Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_5a8f9ede296ad9cf5b81205656c8b54fStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Echo_req", "echo_reqAttr", "echo_req", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_e25657c96fdb654707c20af3bb230787Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_e25657c96fdb654707c20af3bb230787Structure),
                    this.attr("Msg_type", "msg_typeAttr", "msg_type", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Req_id", "req_idAttr", "req_id", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("trading_platform_available_accounts", "trading_platform_available_accountsAttr", "trading_platform_accounts", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_3a8fd8b28bfeab1bd267f04e730ca9e6Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_3a8fd8b28bfeab1bd267f04e730ca9e6Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_5a8f9ede296ad9cf5b81205656c8b54fStructure = ST_5a8f9ede296ad9cf5b81205656c8b54fStructureInner;

        var ST_5a8f9ede296ad9cf5b81205656c8b54fStructure = ST_5a8f9ede296ad9cf5b81205656c8b54fStructureInner;
        ST_5a8f9ede296ad9cf5b81205656c8b54fStructure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RC_deb49656ca36ac303bfff5ecbe52b196", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_5a8f9ede296ad9cf5b81205656c8b54fStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_deb49656ca36ac303bfff5ecbe52b196Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("TradingPlatformAvailableAccounts", "tradingPlatformAvailableAccountsAttr", "TradingPlatformAvailableAccounts", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_5a8f9ede296ad9cf5b81205656c8b54fStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_5a8f9ede296ad9cf5b81205656c8b54fStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_deb49656ca36ac303bfff5ecbe52b196(new RC_deb49656ca36ac303bfff5ecbe52b196.RecordClass({
                    tradingPlatformAvailableAccountsAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_deb49656ca36ac303bfff5ecbe52b196 = RC_deb49656ca36ac303bfff5ecbe52b196Inner;

        RC_deb49656ca36ac303bfff5ecbe52b196Inner._isAnonymousRecord = true;
        RC_deb49656ca36ac303bfff5ecbe52b196Inner.UniqueId = "deb49656-ca36-ac30-3bff-f5ecbe52b196";
        var RC_deb49656ca36ac303bfff5ecbe52b196 = RC_deb49656ca36ac303bfff5ecbe52b196Inner;
        RC_deb49656ca36ac303bfff5ecbe52b196.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_3cdb40add777d21caa9a01b033bdd702", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_deb49656ca36ac303bfff5ecbe52b196"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_3cdb40add777d21caa9a01b033bdd702 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_deb49656ca36ac303bfff5ecbe52b196;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_3cdb40add777d21caa9a01b033bdd702 = RL_3cdb40add777d21caa9a01b033bdd702;

});

define("RESTAPIWebsocketOfficial.model$ST_75725e65d106c1568a850780233a08baStructure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_4dc58b9edb8582c76248b762d6650913Structure", "RESTAPIWebsocketOfficial.model$ST_8517d9c8b73e866553a1a7b806af5079Structure", "RESTAPIWebsocketOfficial.model$ST_a64a97da9ee822b4b21c919739567011Structure", "RESTAPIWebsocketOfficial.model$RL_d2e8d01cb1d1df6bef4310379df28149"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_75725e65d106c1568a850780233a08baStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Echo_req", "echo_reqAttr", "echo_req", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_4dc58b9edb8582c76248b762d6650913Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_4dc58b9edb8582c76248b762d6650913Structure),
                    this.attr("Error", "errorAttr", "error", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_8517d9c8b73e866553a1a7b806af5079Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_8517d9c8b73e866553a1a7b806af5079Structure),
                    this.attr("Msg_type", "msg_typeAttr", "msg_type", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Trading_platform_accounts", "trading_platform_accountsAttr", "trading_platform_accounts", false, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.RL_d2e8d01cb1d1df6bef4310379df28149());
                    }, true, RESTAPIWebsocketOfficialModel.RL_d2e8d01cb1d1df6bef4310379df28149)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_75725e65d106c1568a850780233a08baStructure = ST_75725e65d106c1568a850780233a08baStructureInner;

        var ST_75725e65d106c1568a850780233a08baStructure = ST_75725e65d106c1568a850780233a08baStructureInner;
        ST_75725e65d106c1568a850780233a08baStructure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RC_3ce5a0117187c9d1b6ee0d6f65f07553", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_75725e65d106c1568a850780233a08baStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_3ce5a0117187c9d1b6ee0d6f65f07553Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("PostTradingPlatformAccountsResponse", "postTradingPlatformAccountsResponseAttr", "PostTradingPlatformAccountsResponse", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_75725e65d106c1568a850780233a08baStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_75725e65d106c1568a850780233a08baStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_3ce5a0117187c9d1b6ee0d6f65f07553(new RC_3ce5a0117187c9d1b6ee0d6f65f07553.RecordClass({
                    postTradingPlatformAccountsResponseAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_3ce5a0117187c9d1b6ee0d6f65f07553 = RC_3ce5a0117187c9d1b6ee0d6f65f07553Inner;

        RC_3ce5a0117187c9d1b6ee0d6f65f07553Inner._isAnonymousRecord = true;
        RC_3ce5a0117187c9d1b6ee0d6f65f07553Inner.UniqueId = "3ce5a011-7187-c9d1-b6ee-0d6f65f07553";
        var RC_3ce5a0117187c9d1b6ee0d6f65f07553 = RC_3ce5a0117187c9d1b6ee0d6f65f07553Inner;
        RC_3ce5a0117187c9d1b6ee0d6f65f07553.init();
    }
});

define("RESTAPIWebsocketOfficial.model$ST_3d96747747f3d41e23c92ff9ec0f78ebStructure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_3d96747747f3d41e23c92ff9ec0f78ebStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Partner_settings", "partner_settingsAttr", "partner_settings", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new ST_3d96747747f3d41e23c92ff9ec0f78ebStructure(new ST_3d96747747f3d41e23c92ff9ec0f78ebStructure.RecordClass({
                    partner_settingsAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_3d96747747f3d41e23c92ff9ec0f78ebStructure = ST_3d96747747f3d41e23c92ff9ec0f78ebStructureInner;

        var ST_3d96747747f3d41e23c92ff9ec0f78ebStructure = ST_3d96747747f3d41e23c92ff9ec0f78ebStructureInner;
        ST_3d96747747f3d41e23c92ff9ec0f78ebStructure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_3da257b38954975290536b7e144f85a1", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_bbf8c5d47c5db3fd5346cb42e483a9fdStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_3da257b38954975290536b7e144f85a1 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_bbf8c5d47c5db3fd5346cb42e483a9fdStructure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_3da257b38954975290536b7e144f85a1 = RL_3da257b38954975290536b7e144f85a1;

});

define("RESTAPIWebsocketOfficial.model$RL_3dd031951f15020fcf2011e126c45859", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_d331548db274235fee458e1a8f950858Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_3dd031951f15020fcf2011e126c45859 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_d331548db274235fee458e1a8f950858Structure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_3dd031951f15020fcf2011e126c45859 = RL_3dd031951f15020fcf2011e126c45859;

});

define("RESTAPIWebsocketOfficial.model$RL_3ddab8163c31ef065226c1ec689ad1e9", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_113226709b84b71c70ebd50296313568Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_3ddab8163c31ef065226c1ec689ad1e9 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_113226709b84b71c70ebd50296313568Structure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_3ddab8163c31ef065226c1ec689ad1e9 = RL_3ddab8163c31ef065226c1ec689ad1e9;

});

define("RESTAPIWebsocketOfficial.model$RC_3f4d741c30bd5473dc9c679433c442c3", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_2aef4efdcc8a8ad935c2f051f3051327Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_3f4d741c30bd5473dc9c679433c442c3Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Documents_supported2", "documents_supported2Attr", "Documents_supported2", false, false, OS.DataTypes.DataTypes.Record, function() {
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

        RESTAPIWebsocketOfficialModel.RC_3f4d741c30bd5473dc9c679433c442c3 = RC_3f4d741c30bd5473dc9c679433c442c3Inner;

        RC_3f4d741c30bd5473dc9c679433c442c3Inner._isAnonymousRecord = true;
        RC_3f4d741c30bd5473dc9c679433c442c3Inner.UniqueId = "3f4d741c-30bd-5473-dc9c-679433c442c3";
        var RC_3f4d741c30bd5473dc9c679433c442c3 = RC_3f4d741c30bd5473dc9c679433c442c3Inner;
        RC_3f4d741c30bd5473dc9c679433c442c3.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_409d5d24f3ff15709c6eb8292127d3ba", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_a61a52fb9a0db4861b8e2b8110ef16c4Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_409d5d24f3ff15709c6eb8292127d3ba extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_a61a52fb9a0db4861b8e2b8110ef16c4Structure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_409d5d24f3ff15709c6eb8292127d3ba = RL_409d5d24f3ff15709c6eb8292127d3ba;

});

define("RESTAPIWebsocketOfficial.model$RL_4153455d8943850f971d65d82f35900b", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_19aa89641c7398ceacf4370c69126f64"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_4153455d8943850f971d65d82f35900b extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_19aa89641c7398ceacf4370c69126f64;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_4153455d8943850f971d65d82f35900b = RL_4153455d8943850f971d65d82f35900b;

});

define("RESTAPIWebsocketOfficial.model$RL_41e67aa458234493e723d2243db01144", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_224fc9970e9693b073b49748bfa1459a"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_41e67aa458234493e723d2243db01144 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_224fc9970e9693b073b49748bfa1459a;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_41e67aa458234493e723d2243db01144 = RL_41e67aa458234493e723d2243db01144;

});

define("RESTAPIWebsocketOfficial.model$RC_c0258e0f6ca87b3e5e39e33c3e5f0c77", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_2f46c6fecf81fe9d91763f789141eec9Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_c0258e0f6ca87b3e5e39e33c3e5f0c77Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("PostCashierCryptoResponse", "postCashierCryptoResponseAttr", "PostCashierCryptoResponse", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_2f46c6fecf81fe9d91763f789141eec9Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_2f46c6fecf81fe9d91763f789141eec9Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_c0258e0f6ca87b3e5e39e33c3e5f0c77(new RC_c0258e0f6ca87b3e5e39e33c3e5f0c77.RecordClass({
                    postCashierCryptoResponseAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_c0258e0f6ca87b3e5e39e33c3e5f0c77 = RC_c0258e0f6ca87b3e5e39e33c3e5f0c77Inner;

        RC_c0258e0f6ca87b3e5e39e33c3e5f0c77Inner._isAnonymousRecord = true;
        RC_c0258e0f6ca87b3e5e39e33c3e5f0c77Inner.UniqueId = "c0258e0f-6ca8-7b3e-5e39-e33c3e5f0c77";
        var RC_c0258e0f6ca87b3e5e39e33c3e5f0c77 = RC_c0258e0f6ca87b3e5e39e33c3e5f0c77Inner;
        RC_c0258e0f6ca87b3e5e39e33c3e5f0c77.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_42ae10f2ee499169129a9427d0491b08", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_c0258e0f6ca87b3e5e39e33c3e5f0c77"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_42ae10f2ee499169129a9427d0491b08 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_c0258e0f6ca87b3e5e39e33c3e5f0c77;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_42ae10f2ee499169129a9427d0491b08 = RL_42ae10f2ee499169129a9427d0491b08;

});

define("RESTAPIWebsocketOfficial.model$RL_d03621281d953210a5f7643c5f395ddc", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_02211ece4f8ea033ae9a7fa2710f4a32Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_d03621281d953210a5f7643c5f395ddc extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_02211ece4f8ea033ae9a7fa2710f4a32Structure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_d03621281d953210a5f7643c5f395ddc = RL_d03621281d953210a5f7643c5f395ddc;

});

define("RESTAPIWebsocketOfficial.model$ST_42e091eee706086ba45ab77d0ef6821fStructure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_02211ece4f8ea033ae9a7fa2710f4a32Structure", "RESTAPIWebsocketOfficial.model$RL_d03621281d953210a5f7643c5f395ddc", "RESTAPIWebsocketOfficial.model$ST_84a0cd0731252abf8ed782a87ccaad58Structure", "RESTAPIWebsocketOfficial.model$ST_8517d9c8b73e866553a1a7b806af5079Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_42e091eee706086ba45ab77d0ef6821fStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Account_list", "account_listAttr", "account_list", false, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.RL_d03621281d953210a5f7643c5f395ddc());
                    }, true, RESTAPIWebsocketOfficialModel.RL_d03621281d953210a5f7643c5f395ddc),
                    this.attr("Echo_req", "echo_reqAttr", "echo_req", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_84a0cd0731252abf8ed782a87ccaad58Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_84a0cd0731252abf8ed782a87ccaad58Structure),
                    this.attr("Msg_type", "msg_typeAttr", "msg_type", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Error", "errorAttr", "Error", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_8517d9c8b73e866553a1a7b806af5079Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_8517d9c8b73e866553a1a7b806af5079Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_42e091eee706086ba45ab77d0ef6821fStructure = ST_42e091eee706086ba45ab77d0ef6821fStructureInner;

        var ST_42e091eee706086ba45ab77d0ef6821fStructure = ST_42e091eee706086ba45ab77d0ef6821fStructureInner;
        ST_42e091eee706086ba45ab77d0ef6821fStructure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RC_725766536428f47602ca54f05f55b577", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_04eaf04e4147681bc07ba614af4e7e78Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_725766536428f47602ca54f05f55b577Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Crypto", "cryptoAttr", "Crypto", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_04eaf04e4147681bc07ba614af4e7e78Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_04eaf04e4147681bc07ba614af4e7e78Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_725766536428f47602ca54f05f55b577(new RC_725766536428f47602ca54f05f55b577.RecordClass({
                    cryptoAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_725766536428f47602ca54f05f55b577 = RC_725766536428f47602ca54f05f55b577Inner;

        RC_725766536428f47602ca54f05f55b577Inner._isAnonymousRecord = true;
        RC_725766536428f47602ca54f05f55b577Inner.UniqueId = "72576653-6428-f476-02ca-54f05f55b577";
        var RC_725766536428f47602ca54f05f55b577 = RC_725766536428f47602ca54f05f55b577Inner;
        RC_725766536428f47602ca54f05f55b577.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_43065d40fb42cf2e1c75ff4cebf95a65", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_725766536428f47602ca54f05f55b577"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_43065d40fb42cf2e1c75ff4cebf95a65 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_725766536428f47602ca54f05f55b577;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_43065d40fb42cf2e1c75ff4cebf95a65 = RL_43065d40fb42cf2e1c75ff4cebf95a65;

});

define("RESTAPIWebsocketOfficial.model$RC_655de439743f6ef66e4c426b009f58b1", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_e9350867621f419f78bd47d2bb88d9ceStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_655de439743f6ef66e4c426b009f58b1Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Documents_supported", "documents_supportedAttr", "Documents_supported", false, false, OS.DataTypes.DataTypes.Record, function() {
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

        RESTAPIWebsocketOfficialModel.RC_655de439743f6ef66e4c426b009f58b1 = RC_655de439743f6ef66e4c426b009f58b1Inner;

        RC_655de439743f6ef66e4c426b009f58b1Inner._isAnonymousRecord = true;
        RC_655de439743f6ef66e4c426b009f58b1Inner.UniqueId = "655de439-743f-6ef6-6e4c-426b009f58b1";
        var RC_655de439743f6ef66e4c426b009f58b1 = RC_655de439743f6ef66e4c426b009f58b1Inner;
        RC_655de439743f6ef66e4c426b009f58b1.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_431a1d9d775d905a0fa33726ccc368ad", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_655de439743f6ef66e4c426b009f58b1"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_431a1d9d775d905a0fa33726ccc368ad extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_655de439743f6ef66e4c426b009f58b1;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_431a1d9d775d905a0fa33726ccc368ad = RL_431a1d9d775d905a0fa33726ccc368ad;

});

define("RESTAPIWebsocketOfficial.model$RL_43c33c0f3b9a2eb3199ef87eb6b6c7b3", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_55477c48be760e041c4dbfa365f63009Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_43c33c0f3b9a2eb3199ef87eb6b6c7b3 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_55477c48be760e041c4dbfa365f63009Structure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_43c33c0f3b9a2eb3199ef87eb6b6c7b3 = RL_43c33c0f3b9a2eb3199ef87eb6b6c7b3;

});

define("RESTAPIWebsocketOfficial.model$RC_d5f1faf2f682624c1c27e7a932faee50", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_a37989da54adde60afe7657f5bc1d06eStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
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

        RESTAPIWebsocketOfficialModel.RC_d5f1faf2f682624c1c27e7a932faee50 = RC_d5f1faf2f682624c1c27e7a932faee50Inner;

        RC_d5f1faf2f682624c1c27e7a932faee50Inner._isAnonymousRecord = true;
        RC_d5f1faf2f682624c1c27e7a932faee50Inner.UniqueId = "d5f1faf2-f682-624c-1c27-e7a932faee50";
        var RC_d5f1faf2f682624c1c27e7a932faee50 = RC_d5f1faf2f682624c1c27e7a932faee50Inner;
        RC_d5f1faf2f682624c1c27e7a932faee50.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_44cebee119c996a470fbff1d981600f0", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_d5f1faf2f682624c1c27e7a932faee50"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_44cebee119c996a470fbff1d981600f0 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_d5f1faf2f682624c1c27e7a932faee50;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_44cebee119c996a470fbff1d981600f0 = RL_44cebee119c996a470fbff1d981600f0;

});

define("RESTAPIWebsocketOfficial.model$RC_99c0018936e3cec12f037bf056295951", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_e25657c96fdb654707c20af3bb230787Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_99c0018936e3cec12f037bf056295951Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Echo_req9", "echo_req9Attr", "Echo_req9", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_e25657c96fdb654707c20af3bb230787Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_e25657c96fdb654707c20af3bb230787Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_99c0018936e3cec12f037bf056295951(new RC_99c0018936e3cec12f037bf056295951.RecordClass({
                    echo_req9Attr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_99c0018936e3cec12f037bf056295951 = RC_99c0018936e3cec12f037bf056295951Inner;

        RC_99c0018936e3cec12f037bf056295951Inner._isAnonymousRecord = true;
        RC_99c0018936e3cec12f037bf056295951Inner.UniqueId = "99c00189-36e3-cec1-2f03-7bf056295951";
        var RC_99c0018936e3cec12f037bf056295951 = RC_99c0018936e3cec12f037bf056295951Inner;
        RC_99c0018936e3cec12f037bf056295951.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_458a7ae223160b2af1e7ca666afa22e4", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_99c0018936e3cec12f037bf056295951"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_458a7ae223160b2af1e7ca666afa22e4 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_99c0018936e3cec12f037bf056295951;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_458a7ae223160b2af1e7ca666afa22e4 = RL_458a7ae223160b2af1e7ca666afa22e4;

});

define("RESTAPIWebsocketOfficial.model$RL_45f425cbfe3f41d3fac973fe3238818f", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_3c60a1846470070c1bbae2a1d22163d2"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_45f425cbfe3f41d3fac973fe3238818f extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_3c60a1846470070c1bbae2a1d22163d2;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_45f425cbfe3f41d3fac973fe3238818f = RL_45f425cbfe3f41d3fac973fe3238818f;

});

define("RESTAPIWebsocketOfficial.model$ST_89d14f8b4008cb2b12eb9082eeeb95a6Structure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_66a31b6dc85d7150aaf5da4cc4b359a4Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_89d14f8b4008cb2b12eb9082eeeb95a6StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Verify_email", "verify_emailAttr", "verify_email", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Type", "typeAttr", "type", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Url_parameters", "url_parametersAttr", "url_parameters", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_66a31b6dc85d7150aaf5da4cc4b359a4Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_66a31b6dc85d7150aaf5da4cc4b359a4Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_89d14f8b4008cb2b12eb9082eeeb95a6Structure = ST_89d14f8b4008cb2b12eb9082eeeb95a6StructureInner;

        var ST_89d14f8b4008cb2b12eb9082eeeb95a6Structure = ST_89d14f8b4008cb2b12eb9082eeeb95a6StructureInner;
        ST_89d14f8b4008cb2b12eb9082eeeb95a6Structure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$ST_b5532fbd5672db40752d556a46e96eaeStructure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_89d14f8b4008cb2b12eb9082eeeb95a6Structure", "RESTAPIWebsocketOfficial.model$ST_8517d9c8b73e866553a1a7b806af5079Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_b5532fbd5672db40752d556a46e96eaeStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Echo_req", "echo_reqAttr", "echo_req", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_89d14f8b4008cb2b12eb9082eeeb95a6Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_89d14f8b4008cb2b12eb9082eeeb95a6Structure),
                    this.attr("Msg_type", "msg_typeAttr", "msg_type", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Verify_email", "verify_emailAttr", "verify_email", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("Error", "errorAttr", "Error", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_8517d9c8b73e866553a1a7b806af5079Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_8517d9c8b73e866553a1a7b806af5079Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_b5532fbd5672db40752d556a46e96eaeStructure = ST_b5532fbd5672db40752d556a46e96eaeStructureInner;

        var ST_b5532fbd5672db40752d556a46e96eaeStructure = ST_b5532fbd5672db40752d556a46e96eaeStructureInner;
        ST_b5532fbd5672db40752d556a46e96eaeStructure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RC_f6746cbb50b7a6a36f454937aab260b0", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_b5532fbd5672db40752d556a46e96eaeStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_f6746cbb50b7a6a36f454937aab260b0Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("PostVerifyEmailResponse", "postVerifyEmailResponseAttr", "PostVerifyEmailResponse", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_b5532fbd5672db40752d556a46e96eaeStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_b5532fbd5672db40752d556a46e96eaeStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_f6746cbb50b7a6a36f454937aab260b0(new RC_f6746cbb50b7a6a36f454937aab260b0.RecordClass({
                    postVerifyEmailResponseAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_f6746cbb50b7a6a36f454937aab260b0 = RC_f6746cbb50b7a6a36f454937aab260b0Inner;

        RC_f6746cbb50b7a6a36f454937aab260b0Inner._isAnonymousRecord = true;
        RC_f6746cbb50b7a6a36f454937aab260b0Inner.UniqueId = "f6746cbb-50b7-a6a3-6f45-4937aab260b0";
        var RC_f6746cbb50b7a6a36f454937aab260b0 = RC_f6746cbb50b7a6a36f454937aab260b0Inner;
        RC_f6746cbb50b7a6a36f454937aab260b0.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_466fd140517db96d071045e35052d015", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_f6746cbb50b7a6a36f454937aab260b0"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_466fd140517db96d071045e35052d015 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_f6746cbb50b7a6a36f454937aab260b0;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_466fd140517db96d071045e35052d015 = RL_466fd140517db96d071045e35052d015;

});

define("RESTAPIWebsocketOfficial.model$RC_47772cad80dc4a787d65fd52470ca2cd", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_ccbd4ab860fdf3c4690e46bb49937de5Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_47772cad80dc4a787d65fd52470ca2cdInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Get_setting", "get_settingAttr", "Get_setting", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_ccbd4ab860fdf3c4690e46bb49937de5Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_ccbd4ab860fdf3c4690e46bb49937de5Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_47772cad80dc4a787d65fd52470ca2cd(new RC_47772cad80dc4a787d65fd52470ca2cd.RecordClass({
                    get_settingAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_47772cad80dc4a787d65fd52470ca2cd = RC_47772cad80dc4a787d65fd52470ca2cdInner;

        RC_47772cad80dc4a787d65fd52470ca2cdInner._isAnonymousRecord = true;
        RC_47772cad80dc4a787d65fd52470ca2cdInner.UniqueId = "47772cad-80dc-4a78-7d65-fd52470ca2cd";
        var RC_47772cad80dc4a787d65fd52470ca2cd = RC_47772cad80dc4a787d65fd52470ca2cdInner;
        RC_47772cad80dc4a787d65fd52470ca2cd.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RC_99e19ace3996a5f3b75ca1e86886d33d", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_1427747d29628e6a194ee75a554479e4Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_99e19ace3996a5f3b75ca1e86886d33dInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("From", "fromAttr", "From", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_1427747d29628e6a194ee75a554479e4Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_1427747d29628e6a194ee75a554479e4Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_99e19ace3996a5f3b75ca1e86886d33d(new RC_99e19ace3996a5f3b75ca1e86886d33d.RecordClass({
                    fromAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_99e19ace3996a5f3b75ca1e86886d33d = RC_99e19ace3996a5f3b75ca1e86886d33dInner;

        RC_99e19ace3996a5f3b75ca1e86886d33dInner._isAnonymousRecord = true;
        RC_99e19ace3996a5f3b75ca1e86886d33dInner.UniqueId = "99e19ace-3996-a5f3-b75c-a1e86886d33d";
        var RC_99e19ace3996a5f3b75ca1e86886d33d = RC_99e19ace3996a5f3b75ca1e86886d33dInner;
        RC_99e19ace3996a5f3b75ca1e86886d33d.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_47976f4a0ffd4defdfe43b4b464cb87c", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_99e19ace3996a5f3b75ca1e86886d33d"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_47976f4a0ffd4defdfe43b4b464cb87c extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_99e19ace3996a5f3b75ca1e86886d33d;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_47976f4a0ffd4defdfe43b4b464cb87c = RL_47976f4a0ffd4defdfe43b4b464cb87c;

});

define("RESTAPIWebsocketOfficial.model$ST_aebb52c5d802a6aaa646a74179c770faStructure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_aebb52c5d802a6aaa646a74179c770faStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Action_type", "action_typeAttr", "action_type", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Description", "descriptionAttr", "description", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_aebb52c5d802a6aaa646a74179c770faStructure = ST_aebb52c5d802a6aaa646a74179c770faStructureInner;

        var ST_aebb52c5d802a6aaa646a74179c770faStructure = ST_aebb52c5d802a6aaa646a74179c770faStructureInner;
        ST_aebb52c5d802a6aaa646a74179c770faStructure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RC_47cbcea37f9383094a9acfdb35413d95", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_aebb52c5d802a6aaa646a74179c770faStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_47cbcea37f9383094a9acfdb35413d95Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Api2", "api2Attr", "Api2", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_aebb52c5d802a6aaa646a74179c770faStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_aebb52c5d802a6aaa646a74179c770faStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_47cbcea37f9383094a9acfdb35413d95(new RC_47cbcea37f9383094a9acfdb35413d95.RecordClass({
                    api2Attr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_47cbcea37f9383094a9acfdb35413d95 = RC_47cbcea37f9383094a9acfdb35413d95Inner;

        RC_47cbcea37f9383094a9acfdb35413d95Inner._isAnonymousRecord = true;
        RC_47cbcea37f9383094a9acfdb35413d95Inner.UniqueId = "47cbcea3-7f93-8309-4a9a-cfdb35413d95";
        var RC_47cbcea37f9383094a9acfdb35413d95 = RC_47cbcea37f9383094a9acfdb35413d95Inner;
        RC_47cbcea37f9383094a9acfdb35413d95.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RC_d4bf765df28dc44cfc977eebedb13ed3", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_ddeabbcab252c99fc5f083425434b2a7Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_d4bf765df28dc44cfc977eebedb13ed3Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Changeable_field", "changeable_fieldAttr", "Changeable_field", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_ddeabbcab252c99fc5f083425434b2a7Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_ddeabbcab252c99fc5f083425434b2a7Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_d4bf765df28dc44cfc977eebedb13ed3(new RC_d4bf765df28dc44cfc977eebedb13ed3.RecordClass({
                    changeable_fieldAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_d4bf765df28dc44cfc977eebedb13ed3 = RC_d4bf765df28dc44cfc977eebedb13ed3Inner;

        RC_d4bf765df28dc44cfc977eebedb13ed3Inner._isAnonymousRecord = true;
        RC_d4bf765df28dc44cfc977eebedb13ed3Inner.UniqueId = "d4bf765d-f28d-c44c-fc97-7eebedb13ed3";
        var RC_d4bf765df28dc44cfc977eebedb13ed3 = RC_d4bf765df28dc44cfc977eebedb13ed3Inner;
        RC_d4bf765df28dc44cfc977eebedb13ed3.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_481ef41ed0fae7f08c6f7bee79db99dc", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_d4bf765df28dc44cfc977eebedb13ed3"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_481ef41ed0fae7f08c6f7bee79db99dc extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_d4bf765df28dc44cfc977eebedb13ed3;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_481ef41ed0fae7f08c6f7bee79db99dc = RL_481ef41ed0fae7f08c6f7bee79db99dc;

});

define("RESTAPIWebsocketOfficial.model$RL_4887faff529164a4e041bdf0dc5e469f", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_b8e5132e8639404a10bb651dc17997bcStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_4887faff529164a4e041bdf0dc5e469f extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_b8e5132e8639404a10bb651dc17997bcStructure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_4887faff529164a4e041bdf0dc5e469f = RL_4887faff529164a4e041bdf0dc5e469f;

});

define("RESTAPIWebsocketOfficial.model$RC_8349a704d7e4597909befcd4d12d85b4", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_091b86786925fd05b892541280481403Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_8349a704d7e4597909befcd4d12d85b4Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("PostTradingPlatformAccountsRequest", "postTradingPlatformAccountsRequestAttr", "PostTradingPlatformAccountsRequest", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_091b86786925fd05b892541280481403Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_091b86786925fd05b892541280481403Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_8349a704d7e4597909befcd4d12d85b4(new RC_8349a704d7e4597909befcd4d12d85b4.RecordClass({
                    postTradingPlatformAccountsRequestAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_8349a704d7e4597909befcd4d12d85b4 = RC_8349a704d7e4597909befcd4d12d85b4Inner;

        RC_8349a704d7e4597909befcd4d12d85b4Inner._isAnonymousRecord = true;
        RC_8349a704d7e4597909befcd4d12d85b4Inner.UniqueId = "8349a704-d7e4-5979-09be-fcd4d12d85b4";
        var RC_8349a704d7e4597909befcd4d12d85b4 = RC_8349a704d7e4597909befcd4d12d85b4Inner;
        RC_8349a704d7e4597909befcd4d12d85b4.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_495e996e3e491370fac39f81d4d0c440", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_8349a704d7e4597909befcd4d12d85b4"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_495e996e3e491370fac39f81d4d0c440 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_8349a704d7e4597909befcd4d12d85b4;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_495e996e3e491370fac39f81d4d0c440 = RL_495e996e3e491370fac39f81d4d0c440;

});

define("RESTAPIWebsocketOfficial.model$RC_5e1b44d038654ac19cd218a2a7d6a6b8", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_30cf47a274820f1ac96cf412803888fdStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_5e1b44d038654ac19cd218a2a7d6a6b8Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Idv", "idvAttr", "Idv", false, false, OS.DataTypes.DataTypes.Record, function() {
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

        RESTAPIWebsocketOfficialModel.RC_5e1b44d038654ac19cd218a2a7d6a6b8 = RC_5e1b44d038654ac19cd218a2a7d6a6b8Inner;

        RC_5e1b44d038654ac19cd218a2a7d6a6b8Inner._isAnonymousRecord = true;
        RC_5e1b44d038654ac19cd218a2a7d6a6b8Inner.UniqueId = "5e1b44d0-3865-4ac1-9cd2-18a2a7d6a6b8";
        var RC_5e1b44d038654ac19cd218a2a7d6a6b8 = RC_5e1b44d038654ac19cd218a2a7d6a6b8Inner;
        RC_5e1b44d038654ac19cd218a2a7d6a6b8.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_49a4d531de393d17563dea4ec0d88883", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_5e1b44d038654ac19cd218a2a7d6a6b8"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_49a4d531de393d17563dea4ec0d88883 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_5e1b44d038654ac19cd218a2a7d6a6b8;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_49a4d531de393d17563dea4ec0d88883 = RL_49a4d531de393d17563dea4ec0d88883;

});

define("RESTAPIWebsocketOfficial.model$RC_4a76c214f34feb841d0c1a2d8cdbec01", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_35e76a2e1583feb611523ac6c760c8a9Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_4a76c214f34feb841d0c1a2d8cdbec01Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Financial_assessment", "financial_assessmentAttr", "Financial_assessment", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_35e76a2e1583feb611523ac6c760c8a9Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_35e76a2e1583feb611523ac6c760c8a9Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_4a76c214f34feb841d0c1a2d8cdbec01(new RC_4a76c214f34feb841d0c1a2d8cdbec01.RecordClass({
                    financial_assessmentAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_4a76c214f34feb841d0c1a2d8cdbec01 = RC_4a76c214f34feb841d0c1a2d8cdbec01Inner;

        RC_4a76c214f34feb841d0c1a2d8cdbec01Inner._isAnonymousRecord = true;
        RC_4a76c214f34feb841d0c1a2d8cdbec01Inner.UniqueId = "4a76c214-f34f-eb84-1d0c-1a2d8cdbec01";
        var RC_4a76c214f34feb841d0c1a2d8cdbec01 = RC_4a76c214f34feb841d0c1a2d8cdbec01Inner;
        RC_4a76c214f34feb841d0c1a2d8cdbec01.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_4e941b17c99d61ac0f67eb4722e53670", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_127d33c3734e3f0cecd53087584e156c"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_4e941b17c99d61ac0f67eb4722e53670 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_127d33c3734e3f0cecd53087584e156c;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_4e941b17c99d61ac0f67eb4722e53670 = RL_4e941b17c99d61ac0f67eb4722e53670;

});

define("RESTAPIWebsocketOfficial.model$RL_4f9f1230897f0a3e8b129024e1de623d", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_6669f981cb8653c55787de44bdd42a18Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_4f9f1230897f0a3e8b129024e1de623d extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_6669f981cb8653c55787de44bdd42a18Structure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_4f9f1230897f0a3e8b129024e1de623d = RL_4f9f1230897f0a3e8b129024e1de623d;

});

define("RESTAPIWebsocketOfficial.model$RC_5044465528c94ee468cc97cee02c2f31", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_af97180714ce3993e80d246ca4429825Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_5044465528c94ee468cc97cee02c2f31Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Initial_deposit_per_country", "initial_deposit_per_countryAttr", "Initial_deposit_per_country", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_af97180714ce3993e80d246ca4429825Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_af97180714ce3993e80d246ca4429825Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_5044465528c94ee468cc97cee02c2f31(new RC_5044465528c94ee468cc97cee02c2f31.RecordClass({
                    initial_deposit_per_countryAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_5044465528c94ee468cc97cee02c2f31 = RC_5044465528c94ee468cc97cee02c2f31Inner;

        RC_5044465528c94ee468cc97cee02c2f31Inner._isAnonymousRecord = true;
        RC_5044465528c94ee468cc97cee02c2f31Inner.UniqueId = "50444655-28c9-4ee4-68cc-97cee02c2f31";
        var RC_5044465528c94ee468cc97cee02c2f31 = RC_5044465528c94ee468cc97cee02c2f31Inner;
        RC_5044465528c94ee468cc97cee02c2f31.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_4faa698f8fe1178a7e2d85375093f6ee", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_5044465528c94ee468cc97cee02c2f31"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_4faa698f8fe1178a7e2d85375093f6ee extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_5044465528c94ee468cc97cee02c2f31;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_4faa698f8fe1178a7e2d85375093f6ee = RL_4faa698f8fe1178a7e2d85375093f6ee;

});

define("RESTAPIWebsocketOfficial.model$RL_508855d25108765122be317d42e36c82", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_349094d98d9594831ba9e5194411246fStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_508855d25108765122be317d42e36c82 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_349094d98d9594831ba9e5194411246fStructure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_508855d25108765122be317d42e36c82 = RL_508855d25108765122be317d42e36c82;

});

define("RESTAPIWebsocketOfficial.model$RC_a77cae619f7a824ffaa6e30caf3829e5", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_ae69fbe61d3588d5f7a813905e5dc3aeStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_a77cae619f7a824ffaa6e30caf3829e5Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Fee", "feeAttr", "Fee", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_ae69fbe61d3588d5f7a813905e5dc3aeStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_ae69fbe61d3588d5f7a813905e5dc3aeStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_a77cae619f7a824ffaa6e30caf3829e5(new RC_a77cae619f7a824ffaa6e30caf3829e5.RecordClass({
                    feeAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_a77cae619f7a824ffaa6e30caf3829e5 = RC_a77cae619f7a824ffaa6e30caf3829e5Inner;

        RC_a77cae619f7a824ffaa6e30caf3829e5Inner._isAnonymousRecord = true;
        RC_a77cae619f7a824ffaa6e30caf3829e5Inner.UniqueId = "a77cae61-9f7a-824f-faa6-e30caf3829e5";
        var RC_a77cae619f7a824ffaa6e30caf3829e5 = RC_a77cae619f7a824ffaa6e30caf3829e5Inner;
        RC_a77cae619f7a824ffaa6e30caf3829e5.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_51c36384638fb46b29235e79e23007b4", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_a77cae619f7a824ffaa6e30caf3829e5"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_51c36384638fb46b29235e79e23007b4 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_a77cae619f7a824ffaa6e30caf3829e5;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_51c36384638fb46b29235e79e23007b4 = RL_51c36384638fb46b29235e79e23007b4;

});

define("RESTAPIWebsocketOfficial.model$RC_51c73f641f2d05540b68c15e7660196f", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_8812c3cbc0a0d322acb5354526a670b4Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_51c73f641f2d05540b68c15e7660196fInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Identity", "identityAttr", "Identity", false, false, OS.DataTypes.DataTypes.Record, function() {
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

        RESTAPIWebsocketOfficialModel.RC_51c73f641f2d05540b68c15e7660196f = RC_51c73f641f2d05540b68c15e7660196fInner;

        RC_51c73f641f2d05540b68c15e7660196fInner._isAnonymousRecord = true;
        RC_51c73f641f2d05540b68c15e7660196fInner.UniqueId = "51c73f64-1f2d-0554-0b68-c15e7660196f";
        var RC_51c73f641f2d05540b68c15e7660196f = RC_51c73f641f2d05540b68c15e7660196fInner;
        RC_51c73f641f2d05540b68c15e7660196f.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_51cb6ee93d723ed4d67f527a1090ade3", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_977d84487e32bee2c1a14da15d247b5fStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_51cb6ee93d723ed4d67f527a1090ade3 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_977d84487e32bee2c1a14da15d247b5fStructure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_51cb6ee93d723ed4d67f527a1090ade3 = RL_51cb6ee93d723ed4d67f527a1090ade3;

});

define("RESTAPIWebsocketOfficial.model$RL_53248a1b8ab3b0462ffd76c73f4f1eba", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_ccbd4ab860fdf3c4690e46bb49937de5Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_53248a1b8ab3b0462ffd76c73f4f1eba extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_ccbd4ab860fdf3c4690e46bb49937de5Structure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_53248a1b8ab3b0462ffd76c73f4f1eba = RL_53248a1b8ab3b0462ffd76c73f4f1eba;

});

define("RESTAPIWebsocketOfficial.model$ST_9d1062fa4257a03d2f3c4e1f302af3d7Structure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_9d1062fa4257a03d2f3c4e1f302af3d7StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Platform", "platformAttr", "platform", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Status", "statusAttr", "status", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_9d1062fa4257a03d2f3c4e1f302af3d7Structure = ST_9d1062fa4257a03d2f3c4e1f302af3d7StructureInner;

        var ST_9d1062fa4257a03d2f3c4e1f302af3d7Structure = ST_9d1062fa4257a03d2f3c4e1f302af3d7StructureInner;
        ST_9d1062fa4257a03d2f3c4e1f302af3d7Structure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_535207a4cf1e4bc1dcc85faad9d4014e", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_9d1062fa4257a03d2f3c4e1f302af3d7Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_535207a4cf1e4bc1dcc85faad9d4014e extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_9d1062fa4257a03d2f3c4e1f302af3d7Structure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_535207a4cf1e4bc1dcc85faad9d4014e = RL_535207a4cf1e4bc1dcc85faad9d4014e;

});

define("RESTAPIWebsocketOfficial.model$RL_538ff2f1d030482c84c803644c8c1240", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_15693c4dffeb1c18ce04ec8c251678cfStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_538ff2f1d030482c84c803644c8c1240 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_15693c4dffeb1c18ce04ec8c251678cfStructure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_538ff2f1d030482c84c803644c8c1240 = RL_538ff2f1d030482c84c803644c8c1240;

});

define("RESTAPIWebsocketOfficial.model$RC_cb3c04d88b114a075539728cafcde6e0", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_60a5d7a279694c475c6cf2585b652410Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_cb3c04d88b114a075539728cafcde6e0Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Mt_all_company", "mt_all_companyAttr", "Mt_all_company", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_60a5d7a279694c475c6cf2585b652410Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_60a5d7a279694c475c6cf2585b652410Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_cb3c04d88b114a075539728cafcde6e0(new RC_cb3c04d88b114a075539728cafcde6e0.RecordClass({
                    mt_all_companyAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_cb3c04d88b114a075539728cafcde6e0 = RC_cb3c04d88b114a075539728cafcde6e0Inner;

        RC_cb3c04d88b114a075539728cafcde6e0Inner._isAnonymousRecord = true;
        RC_cb3c04d88b114a075539728cafcde6e0Inner.UniqueId = "cb3c04d8-8b11-4a07-5539-728cafcde6e0";
        var RC_cb3c04d88b114a075539728cafcde6e0 = RC_cb3c04d88b114a075539728cafcde6e0Inner;
        RC_cb3c04d88b114a075539728cafcde6e0.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_53c372dc61bea6ee9ca5f8120f4350e8", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_cb3c04d88b114a075539728cafcde6e0"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_53c372dc61bea6ee9ca5f8120f4350e8 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_cb3c04d88b114a075539728cafcde6e0;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_53c372dc61bea6ee9ca5f8120f4350e8 = RL_53c372dc61bea6ee9ca5f8120f4350e8;

});

define("RESTAPIWebsocketOfficial.model$RC_9156a578055ce3e905fa78bea04b423e", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_39c69c310b1fed6e6a637381cf367162Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_9156a578055ce3e905fa78bea04b423eInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Echo_req3", "echo_req3Attr", "Echo_req3", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_39c69c310b1fed6e6a637381cf367162Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_39c69c310b1fed6e6a637381cf367162Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_9156a578055ce3e905fa78bea04b423e(new RC_9156a578055ce3e905fa78bea04b423e.RecordClass({
                    echo_req3Attr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_9156a578055ce3e905fa78bea04b423e = RC_9156a578055ce3e905fa78bea04b423eInner;

        RC_9156a578055ce3e905fa78bea04b423eInner._isAnonymousRecord = true;
        RC_9156a578055ce3e905fa78bea04b423eInner.UniqueId = "9156a578-055c-e3e9-05fa-78bea04b423e";
        var RC_9156a578055ce3e905fa78bea04b423e = RC_9156a578055ce3e905fa78bea04b423eInner;
        RC_9156a578055ce3e905fa78bea04b423e.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_541d7d6fd4a21fe8865c00049e5532a0", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_9156a578055ce3e905fa78bea04b423e"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_541d7d6fd4a21fe8865c00049e5532a0 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_9156a578055ce3e905fa78bea04b423e;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_541d7d6fd4a21fe8865c00049e5532a0 = RL_541d7d6fd4a21fe8865c00049e5532a0;

});

define("RESTAPIWebsocketOfficial.model$RL_545c5578385333732449204f3e942ed0", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_012b2720fb0dcd442416908af4498cef"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_545c5578385333732449204f3e942ed0 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_012b2720fb0dcd442416908af4498cef;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_545c5578385333732449204f3e942ed0 = RL_545c5578385333732449204f3e942ed0;

});

define("RESTAPIWebsocketOfficial.model$RL_560d4c8f65a370a0f5f40af5ea7ad8af", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_2827a9b1879137deb3aaa08d45397068"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_560d4c8f65a370a0f5f40af5ea7ad8af extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_2827a9b1879137deb3aaa08d45397068;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_560d4c8f65a370a0f5f40af5ea7ad8af = RL_560d4c8f65a370a0f5f40af5ea7ad8af;

});

define("RESTAPIWebsocketOfficial.model$RL_5615c834166e52223964bada9f9f6329", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_3b8df1b0da2c2bbfdff9bb6416b86701Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_5615c834166e52223964bada9f9f6329 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_3b8df1b0da2c2bbfdff9bb6416b86701Structure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_5615c834166e52223964bada9f9f6329 = RL_5615c834166e52223964bada9f9f6329;

});

define("RESTAPIWebsocketOfficial.model$ST_5685a40fa48e8876538e1df2a0c39d3eStructure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_5685a40fa48e8876538e1df2a0c39d3eStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Action_type", "action_typeAttr", "action_type", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Description", "descriptionAttr", "description", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("Statement", "statementAttr", "statement", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("Limit", "limitAttr", "limit", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("Offset", "offsetAttr", "offset", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_5685a40fa48e8876538e1df2a0c39d3eStructure = ST_5685a40fa48e8876538e1df2a0c39d3eStructureInner;

        var ST_5685a40fa48e8876538e1df2a0c39d3eStructure = ST_5685a40fa48e8876538e1df2a0c39d3eStructureInner;
        ST_5685a40fa48e8876538e1df2a0c39d3eStructure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RC_56c6ce1b0108db2c43eb2e512b9aa7da", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_d331548db274235fee458e1a8f950858Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_56c6ce1b0108db2c43eb2e512b9aa7daInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Payment_agent", "payment_agentAttr", "Payment_agent", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_d331548db274235fee458e1a8f950858Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_d331548db274235fee458e1a8f950858Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_56c6ce1b0108db2c43eb2e512b9aa7da(new RC_56c6ce1b0108db2c43eb2e512b9aa7da.RecordClass({
                    payment_agentAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_56c6ce1b0108db2c43eb2e512b9aa7da = RC_56c6ce1b0108db2c43eb2e512b9aa7daInner;

        RC_56c6ce1b0108db2c43eb2e512b9aa7daInner._isAnonymousRecord = true;
        RC_56c6ce1b0108db2c43eb2e512b9aa7daInner.UniqueId = "56c6ce1b-0108-db2c-43eb-2e512b9aa7da";
        var RC_56c6ce1b0108db2c43eb2e512b9aa7da = RC_56c6ce1b0108db2c43eb2e512b9aa7daInner;
        RC_56c6ce1b0108db2c43eb2e512b9aa7da.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RC_b7e52722439ab79f06cc9b853e2e0eda", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_a64a97da9ee822b4b21c919739567011Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_b7e52722439ab79f06cc9b853e2e0edaInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Trading_platform_accountItem", "trading_platform_accountItemAttr", "Trading_platform_accountItem", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_a64a97da9ee822b4b21c919739567011Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_a64a97da9ee822b4b21c919739567011Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_b7e52722439ab79f06cc9b853e2e0eda(new RC_b7e52722439ab79f06cc9b853e2e0eda.RecordClass({
                    trading_platform_accountItemAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_b7e52722439ab79f06cc9b853e2e0eda = RC_b7e52722439ab79f06cc9b853e2e0edaInner;

        RC_b7e52722439ab79f06cc9b853e2e0edaInner._isAnonymousRecord = true;
        RC_b7e52722439ab79f06cc9b853e2e0edaInner.UniqueId = "b7e52722-439a-b79f-06cc-9b853e2e0eda";
        var RC_b7e52722439ab79f06cc9b853e2e0eda = RC_b7e52722439ab79f06cc9b853e2e0edaInner;
        RC_b7e52722439ab79f06cc9b853e2e0eda.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_57698c22786db8cfbee18c9cbf33ed66", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_b7e52722439ab79f06cc9b853e2e0eda"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_57698c22786db8cfbee18c9cbf33ed66 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_b7e52722439ab79f06cc9b853e2e0eda;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_57698c22786db8cfbee18c9cbf33ed66 = RL_57698c22786db8cfbee18c9cbf33ed66;

});

define("RESTAPIWebsocketOfficial.model$RL_5a17cb0f64de6697951894cea5524431", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_3f4d741c30bd5473dc9c679433c442c3"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_5a17cb0f64de6697951894cea5524431 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_3f4d741c30bd5473dc9c679433c442c3;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_5a17cb0f64de6697951894cea5524431 = RL_5a17cb0f64de6697951894cea5524431;

});

define("RESTAPIWebsocketOfficial.model$ST_857e70f98678e5b68f53de5829bd685aStructure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_5685a40fa48e8876538e1df2a0c39d3eStructure", "RESTAPIWebsocketOfficial.model$ST_ae14fa1d3d419850de9a85b162df7c73Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_857e70f98678e5b68f53de5829bd685aStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Echo_req", "echo_reqAttr", "echo_req", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_5685a40fa48e8876538e1df2a0c39d3eStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_5685a40fa48e8876538e1df2a0c39d3eStructure),
                    this.attr("Msg_type", "msg_typeAttr", "msg_type", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Statement", "statementAttr", "statement", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_ae14fa1d3d419850de9a85b162df7c73Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_ae14fa1d3d419850de9a85b162df7c73Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_857e70f98678e5b68f53de5829bd685aStructure = ST_857e70f98678e5b68f53de5829bd685aStructureInner;

        var ST_857e70f98678e5b68f53de5829bd685aStructure = ST_857e70f98678e5b68f53de5829bd685aStructureInner;
        ST_857e70f98678e5b68f53de5829bd685aStructure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RC_905d697600d1c54d4a695286706965fc", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_857e70f98678e5b68f53de5829bd685aStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_905d697600d1c54d4a695286706965fcInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("StatementResponse", "statementResponseAttr", "StatementResponse", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_857e70f98678e5b68f53de5829bd685aStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_857e70f98678e5b68f53de5829bd685aStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_905d697600d1c54d4a695286706965fc(new RC_905d697600d1c54d4a695286706965fc.RecordClass({
                    statementResponseAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_905d697600d1c54d4a695286706965fc = RC_905d697600d1c54d4a695286706965fcInner;

        RC_905d697600d1c54d4a695286706965fcInner._isAnonymousRecord = true;
        RC_905d697600d1c54d4a695286706965fcInner.UniqueId = "905d6976-00d1-c54d-4a69-5286706965fc";
        var RC_905d697600d1c54d4a695286706965fc = RC_905d697600d1c54d4a695286706965fcInner;
        RC_905d697600d1c54d4a695286706965fc.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_5c7e4c6a39ce75c4706471fcf0bc97b4", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_905d697600d1c54d4a695286706965fc"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_5c7e4c6a39ce75c4706471fcf0bc97b4 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_905d697600d1c54d4a695286706965fc;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_5c7e4c6a39ce75c4706471fcf0bc97b4 = RL_5c7e4c6a39ce75c4706471fcf0bc97b4;

});

define("RESTAPIWebsocketOfficial.model$RL_5db208bc12424f6e7604bf538be9d9a9", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_56c6ce1b0108db2c43eb2e512b9aa7da"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_5db208bc12424f6e7604bf538be9d9a9 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_56c6ce1b0108db2c43eb2e512b9aa7da;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_5db208bc12424f6e7604bf538be9d9a9 = RL_5db208bc12424f6e7604bf538be9d9a9;

});

define("RESTAPIWebsocketOfficial.model$RL_5f96baf85bbca68a104650af9c95a482", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_450f06937a42e6bd68832beac9fd4297Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_5f96baf85bbca68a104650af9c95a482 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_450f06937a42e6bd68832beac9fd4297Structure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_5f96baf85bbca68a104650af9c95a482 = RL_5f96baf85bbca68a104650af9c95a482;

});

define("RESTAPIWebsocketOfficial.model$RL_617ce086b197e1cd7e2af2a1c0d1c20b", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_ef2ca9573c3bd1e27b35145a902be10bStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_617ce086b197e1cd7e2af2a1c0d1c20b extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_ef2ca9573c3bd1e27b35145a902be10bStructure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_617ce086b197e1cd7e2af2a1c0d1c20b = RL_617ce086b197e1cd7e2af2a1c0d1c20b;

});

define("RESTAPIWebsocketOfficial.model$RC_61df84f9969928991e575f5d3cdeb6cf", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_123df4fc5615aac2800d1fa4847bc440Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_61df84f9969928991e575f5d3cdeb6cfInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Local_currency", "local_currencyAttr", "Local_currency", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_123df4fc5615aac2800d1fa4847bc440Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_123df4fc5615aac2800d1fa4847bc440Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_61df84f9969928991e575f5d3cdeb6cf(new RC_61df84f9969928991e575f5d3cdeb6cf.RecordClass({
                    local_currencyAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_61df84f9969928991e575f5d3cdeb6cf = RC_61df84f9969928991e575f5d3cdeb6cfInner;

        RC_61df84f9969928991e575f5d3cdeb6cfInner._isAnonymousRecord = true;
        RC_61df84f9969928991e575f5d3cdeb6cfInner.UniqueId = "61df84f9-9699-2899-1e57-5f5d3cdeb6cf";
        var RC_61df84f9969928991e575f5d3cdeb6cf = RC_61df84f9969928991e575f5d3cdeb6cfInner;
        RC_61df84f9969928991e575f5d3cdeb6cf.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RC_61e849a6b27c65d4f84da11bc7fcd961", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_b3b8308da7c5dcdc42b3f87ca949eb8cStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_61e849a6b27c65d4f84da11bc7fcd961Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Server_info", "server_infoAttr", "Server_info", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_b3b8308da7c5dcdc42b3f87ca949eb8cStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_b3b8308da7c5dcdc42b3f87ca949eb8cStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_61e849a6b27c65d4f84da11bc7fcd961(new RC_61e849a6b27c65d4f84da11bc7fcd961.RecordClass({
                    server_infoAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_61e849a6b27c65d4f84da11bc7fcd961 = RC_61e849a6b27c65d4f84da11bc7fcd961Inner;

        RC_61e849a6b27c65d4f84da11bc7fcd961Inner._isAnonymousRecord = true;
        RC_61e849a6b27c65d4f84da11bc7fcd961Inner.UniqueId = "61e849a6-b27c-65d4-f84d-a11bc7fcd961";
        var RC_61e849a6b27c65d4f84da11bc7fcd961 = RC_61e849a6b27c65d4f84da11bc7fcd961Inner;
        RC_61e849a6b27c65d4f84da11bc7fcd961.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RC_623a04a7e1c688b7ec133f2b7ca28f8e", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_96047f3e265fbed2401212ad81dfa1f4Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_623a04a7e1c688b7ec133f2b7ca28f8eInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Echo_req", "echo_reqAttr", "Echo_req", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_96047f3e265fbed2401212ad81dfa1f4Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_96047f3e265fbed2401212ad81dfa1f4Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_623a04a7e1c688b7ec133f2b7ca28f8e(new RC_623a04a7e1c688b7ec133f2b7ca28f8e.RecordClass({
                    echo_reqAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_623a04a7e1c688b7ec133f2b7ca28f8e = RC_623a04a7e1c688b7ec133f2b7ca28f8eInner;

        RC_623a04a7e1c688b7ec133f2b7ca28f8eInner._isAnonymousRecord = true;
        RC_623a04a7e1c688b7ec133f2b7ca28f8eInner.UniqueId = "623a04a7-e1c6-88b7-ec13-3f2b7ca28f8e";
        var RC_623a04a7e1c688b7ec133f2b7ca28f8e = RC_623a04a7e1c688b7ec133f2b7ca28f8eInner;
        RC_623a04a7e1c688b7ec133f2b7ca28f8e.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_6389593f218720e640897f2a30c71a02", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_b96e8d04448b693f79e4aebf0b6ee4fbStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_6389593f218720e640897f2a30c71a02 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_b96e8d04448b693f79e4aebf0b6ee4fbStructure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_6389593f218720e640897f2a30c71a02 = RL_6389593f218720e640897f2a30c71a02;

});

define("RESTAPIWebsocketOfficial.model$RL_66079fd510547022662fad21af9161f1", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_96047f3e265fbed2401212ad81dfa1f4Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_66079fd510547022662fad21af9161f1 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_96047f3e265fbed2401212ad81dfa1f4Structure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_66079fd510547022662fad21af9161f1 = RL_66079fd510547022662fad21af9161f1;

});

define("RESTAPIWebsocketOfficial.model$RC_f481c39b6dc571441408fc418f17e793", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_02211ece4f8ea033ae9a7fa2710f4a32Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_f481c39b6dc571441408fc418f17e793Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Account_listItem", "account_listItemAttr", "Account_listItem", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_02211ece4f8ea033ae9a7fa2710f4a32Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_02211ece4f8ea033ae9a7fa2710f4a32Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_f481c39b6dc571441408fc418f17e793(new RC_f481c39b6dc571441408fc418f17e793.RecordClass({
                    account_listItemAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_f481c39b6dc571441408fc418f17e793 = RC_f481c39b6dc571441408fc418f17e793Inner;

        RC_f481c39b6dc571441408fc418f17e793Inner._isAnonymousRecord = true;
        RC_f481c39b6dc571441408fc418f17e793Inner.UniqueId = "f481c39b-6dc5-7144-1408-fc418f17e793";
        var RC_f481c39b6dc571441408fc418f17e793 = RC_f481c39b6dc571441408fc418f17e793Inner;
        RC_f481c39b6dc571441408fc418f17e793.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_6611d2d9fcbfcbfe8fb57800c9eecc82", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_f481c39b6dc571441408fc418f17e793"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_6611d2d9fcbfcbfe8fb57800c9eecc82 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_f481c39b6dc571441408fc418f17e793;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_6611d2d9fcbfcbfe8fb57800c9eecc82 = RL_6611d2d9fcbfcbfe8fb57800c9eecc82;

});

define("RESTAPIWebsocketOfficial.model$ST_e184b5e893ff6633d3c7357dd29941faStructure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_95720c0132c7c8b07166d48790a0a129Structure", "RESTAPIWebsocketOfficial.model$ST_8517d9c8b73e866553a1a7b806af5079Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_e184b5e893ff6633d3c7357dd29941faStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Echo_req", "echo_reqAttr", "echo_req", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_95720c0132c7c8b07166d48790a0a129Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_95720c0132c7c8b07166d48790a0a129Structure),
                    this.attr("Error", "errorAttr", "error", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_8517d9c8b73e866553a1a7b806af5079Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_8517d9c8b73e866553a1a7b806af5079Structure),
                    this.attr("Msg_type", "msg_typeAttr", "msg_type", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Trading_platform_password_change", "trading_platform_password_changeAttr", "trading_platform_password_change", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_e184b5e893ff6633d3c7357dd29941faStructure = ST_e184b5e893ff6633d3c7357dd29941faStructureInner;

        var ST_e184b5e893ff6633d3c7357dd29941faStructure = ST_e184b5e893ff6633d3c7357dd29941faStructureInner;
        ST_e184b5e893ff6633d3c7357dd29941faStructure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RC_6ff4ee45dfc92afe92e4874530f95001", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_e184b5e893ff6633d3c7357dd29941faStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_6ff4ee45dfc92afe92e4874530f95001Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("PostTradingPlatformPasswordChangeResponse", "postTradingPlatformPasswordChangeResponseAttr", "PostTradingPlatformPasswordChangeResponse", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_e184b5e893ff6633d3c7357dd29941faStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_e184b5e893ff6633d3c7357dd29941faStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_6ff4ee45dfc92afe92e4874530f95001(new RC_6ff4ee45dfc92afe92e4874530f95001.RecordClass({
                    postTradingPlatformPasswordChangeResponseAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_6ff4ee45dfc92afe92e4874530f95001 = RC_6ff4ee45dfc92afe92e4874530f95001Inner;

        RC_6ff4ee45dfc92afe92e4874530f95001Inner._isAnonymousRecord = true;
        RC_6ff4ee45dfc92afe92e4874530f95001Inner.UniqueId = "6ff4ee45-dfc9-2afe-92e4-874530f95001";
        var RC_6ff4ee45dfc92afe92e4874530f95001 = RC_6ff4ee45dfc92afe92e4874530f95001Inner;
        RC_6ff4ee45dfc92afe92e4874530f95001.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_66125dc2e07150403638a7f77e4d88ff", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_6ff4ee45dfc92afe92e4874530f95001"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_66125dc2e07150403638a7f77e4d88ff extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_6ff4ee45dfc92afe92e4874530f95001;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_66125dc2e07150403638a7f77e4d88ff = RL_66125dc2e07150403638a7f77e4d88ff;

});

define("RESTAPIWebsocketOfficial.model$RC_fb91f9eab17d134884b2213f47fb4a68", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_9adaf3e13b31a4c3f4ee4c0b223b00bcStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_fb91f9eab17d134884b2213f47fb4a68Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("All", "allAttr", "All", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_9adaf3e13b31a4c3f4ee4c0b223b00bcStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_9adaf3e13b31a4c3f4ee4c0b223b00bcStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_fb91f9eab17d134884b2213f47fb4a68(new RC_fb91f9eab17d134884b2213f47fb4a68.RecordClass({
                    allAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_fb91f9eab17d134884b2213f47fb4a68 = RC_fb91f9eab17d134884b2213f47fb4a68Inner;

        RC_fb91f9eab17d134884b2213f47fb4a68Inner._isAnonymousRecord = true;
        RC_fb91f9eab17d134884b2213f47fb4a68Inner.UniqueId = "fb91f9ea-b17d-1348-84b2-213f47fb4a68";
        var RC_fb91f9eab17d134884b2213f47fb4a68 = RC_fb91f9eab17d134884b2213f47fb4a68Inner;
        RC_fb91f9eab17d134884b2213f47fb4a68.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_6742097cd0e1b80b9f740ab5594fc0b1", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_fb91f9eab17d134884b2213f47fb4a68"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_6742097cd0e1b80b9f740ab5594fc0b1 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_fb91f9eab17d134884b2213f47fb4a68;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_6742097cd0e1b80b9f740ab5594fc0b1 = RL_6742097cd0e1b80b9f740ab5594fc0b1;

});

define("RESTAPIWebsocketOfficial.model$RL_67903d82f67a613e6457850e3fe75a1b", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_514eb2dd1a273e9cef6da33626bbf692Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_67903d82f67a613e6457850e3fe75a1b extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_514eb2dd1a273e9cef6da33626bbf692Structure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_67903d82f67a613e6457850e3fe75a1b = RL_67903d82f67a613e6457850e3fe75a1b;

});

define("RESTAPIWebsocketOfficial.model$RL_687d5246fd214b4298d42d80fa4abd54", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_9d2eeec2f5ab741e3d87ce62bfe442ffStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_687d5246fd214b4298d42d80fa4abd54 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_9d2eeec2f5ab741e3d87ce62bfe442ffStructure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_687d5246fd214b4298d42d80fa4abd54 = RL_687d5246fd214b4298d42d80fa4abd54;

});

define("RESTAPIWebsocketOfficial.model$RL_68d94344bca87ca3c6e8048bda3cfcff", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_89d14f8b4008cb2b12eb9082eeeb95a6Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_68d94344bca87ca3c6e8048bda3cfcff extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_89d14f8b4008cb2b12eb9082eeeb95a6Structure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_68d94344bca87ca3c6e8048bda3cfcff = RL_68d94344bca87ca3c6e8048bda3cfcff;

});

define("RESTAPIWebsocketOfficial.model$RL_6a09e143d0e4a59a21ce23725d2e887e", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_812466b8d5a9a4a768bb1404c7c0b0e5Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_6a09e143d0e4a59a21ce23725d2e887e extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_812466b8d5a9a4a768bb1404c7c0b0e5Structure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_6a09e143d0e4a59a21ce23725d2e887e = RL_6a09e143d0e4a59a21ce23725d2e887e;

});

define("RESTAPIWebsocketOfficial.model$RL_6a534bbcb28aa4f96e8b5853e0208016", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_8ddbf1b6e2eccc5a160b5fab6b9b9b86Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_6a534bbcb28aa4f96e8b5853e0208016 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_8ddbf1b6e2eccc5a160b5fab6b9b9b86Structure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_6a534bbcb28aa4f96e8b5853e0208016 = RL_6a534bbcb28aa4f96e8b5853e0208016;

});

define("RESTAPIWebsocketOfficial.model$RL_6aefb6b34ff9f8b6e1084c5b438522bb", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_4820561c523dc84c471446a46147a065Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_6aefb6b34ff9f8b6e1084c5b438522bb extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_4820561c523dc84c471446a46147a065Structure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_6aefb6b34ff9f8b6e1084c5b438522bb = RL_6aefb6b34ff9f8b6e1084c5b438522bb;

});

define("RESTAPIWebsocketOfficial.model$RC_6afb7faf6b2a5fdc14e3fd34318f5ba5", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_15693c4dffeb1c18ce04ec8c251678cfStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_6afb7faf6b2a5fdc14e3fd34318f5ba5Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Authentication", "authenticationAttr", "Authentication", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_15693c4dffeb1c18ce04ec8c251678cfStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_15693c4dffeb1c18ce04ec8c251678cfStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_6afb7faf6b2a5fdc14e3fd34318f5ba5(new RC_6afb7faf6b2a5fdc14e3fd34318f5ba5.RecordClass({
                    authenticationAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_6afb7faf6b2a5fdc14e3fd34318f5ba5 = RC_6afb7faf6b2a5fdc14e3fd34318f5ba5Inner;

        RC_6afb7faf6b2a5fdc14e3fd34318f5ba5Inner._isAnonymousRecord = true;
        RC_6afb7faf6b2a5fdc14e3fd34318f5ba5Inner.UniqueId = "6afb7faf-6b2a-5fdc-14e3-fd34318f5ba5";
        var RC_6afb7faf6b2a5fdc14e3fd34318f5ba5 = RC_6afb7faf6b2a5fdc14e3fd34318f5ba5Inner;
        RC_6afb7faf6b2a5fdc14e3fd34318f5ba5.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RC_6bf0b0ffc6301cb068818135121fba90", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_bbf8c5d47c5db3fd5346cb42e483a9fdStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_6bf0b0ffc6301cb068818135121fba90Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Website_status", "website_statusAttr", "Website_status", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_bbf8c5d47c5db3fd5346cb42e483a9fdStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_bbf8c5d47c5db3fd5346cb42e483a9fdStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_6bf0b0ffc6301cb068818135121fba90(new RC_6bf0b0ffc6301cb068818135121fba90.RecordClass({
                    website_statusAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_6bf0b0ffc6301cb068818135121fba90 = RC_6bf0b0ffc6301cb068818135121fba90Inner;

        RC_6bf0b0ffc6301cb068818135121fba90Inner._isAnonymousRecord = true;
        RC_6bf0b0ffc6301cb068818135121fba90Inner.UniqueId = "6bf0b0ff-c630-1cb0-6881-8135121fba90";
        var RC_6bf0b0ffc6301cb068818135121fba90 = RC_6bf0b0ffc6301cb068818135121fba90Inner;
        RC_6bf0b0ffc6301cb068818135121fba90.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_6c06f81aeda50ab8c2d5788ceef7d4fc", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_60a5d7a279694c475c6cf2585b652410Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_6c06f81aeda50ab8c2d5788ceef7d4fc extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_60a5d7a279694c475c6cf2585b652410Structure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_6c06f81aeda50ab8c2d5788ceef7d4fc = RL_6c06f81aeda50ab8c2d5788ceef7d4fc;

});

define("RESTAPIWebsocketOfficial.model$RL_6cc055cc55710603767f0fd9910db36c", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_2296852fb68ffc0d98bf144361127c38"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_6cc055cc55710603767f0fd9910db36c extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_2296852fb68ffc0d98bf144361127c38;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_6cc055cc55710603767f0fd9910db36c = RL_6cc055cc55710603767f0fd9910db36c;

});

define("RESTAPIWebsocketOfficial.model$RL_6d35299704f3eec23ed812a5a367da37", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_94d54d268b2cff4f4ed014a5df48da20Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_6d35299704f3eec23ed812a5a367da37 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_94d54d268b2cff4f4ed014a5df48da20Structure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_6d35299704f3eec23ed812a5a367da37 = RL_6d35299704f3eec23ed812a5a367da37;

});

define("RESTAPIWebsocketOfficial.model$RL_6d8078983e84d9f62576b9b597c42453", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_07c55c1e5241bcf8a9665901701e0dbfStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_6d8078983e84d9f62576b9b597c42453 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_07c55c1e5241bcf8a9665901701e0dbfStructure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_6d8078983e84d9f62576b9b597c42453 = RL_6d8078983e84d9f62576b9b597c42453;

});

define("RESTAPIWebsocketOfficial.model$RL_6daa7fd7043bd22e153f9e359a31e19f", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_4e063a3cef8e9e085284fb57c1326006Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_6daa7fd7043bd22e153f9e359a31e19f extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_4e063a3cef8e9e085284fb57c1326006Structure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_6daa7fd7043bd22e153f9e359a31e19f = RL_6daa7fd7043bd22e153f9e359a31e19f;

});

define("RESTAPIWebsocketOfficial.model$RL_6ded88896f4420155f9228fa8926d25d", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_30f7e77f4f85f62f55a749d558899db1"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_6ded88896f4420155f9228fa8926d25d extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_30f7e77f4f85f62f55a749d558899db1;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_6ded88896f4420155f9228fa8926d25d = RL_6ded88896f4420155f9228fa8926d25d;

});

define("RESTAPIWebsocketOfficial.model$RL_6e4709c964d7b46a3afebff315d0d559", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_1e4e8e93f82bd7d0c82446a55ed8dee2Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_6e4709c964d7b46a3afebff315d0d559 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_1e4e8e93f82bd7d0c82446a55ed8dee2Structure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_6e4709c964d7b46a3afebff315d0d559 = RL_6e4709c964d7b46a3afebff315d0d559;

});

define("RESTAPIWebsocketOfficial.model$RC_7096ca0099728124fcaff6ac0bf8440c", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_6669f981cb8653c55787de44bdd42a18Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_7096ca0099728124fcaff6ac0bf8440cInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Service", "serviceAttr", "Service", false, false, OS.DataTypes.DataTypes.Record, function() {
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

        RESTAPIWebsocketOfficialModel.RC_7096ca0099728124fcaff6ac0bf8440c = RC_7096ca0099728124fcaff6ac0bf8440cInner;

        RC_7096ca0099728124fcaff6ac0bf8440cInner._isAnonymousRecord = true;
        RC_7096ca0099728124fcaff6ac0bf8440cInner.UniqueId = "7096ca00-9972-8124-fcaf-f6ac0bf8440c";
        var RC_7096ca0099728124fcaff6ac0bf8440c = RC_7096ca0099728124fcaff6ac0bf8440cInner;
        RC_7096ca0099728124fcaff6ac0bf8440c.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_720c5f8bdedf3ce92188a2fbe493fa9c", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_1427747d29628e6a194ee75a554479e4Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_720c5f8bdedf3ce92188a2fbe493fa9c extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_1427747d29628e6a194ee75a554479e4Structure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_720c5f8bdedf3ce92188a2fbe493fa9c = RL_720c5f8bdedf3ce92188a2fbe493fa9c;

});

define("RESTAPIWebsocketOfficial.model$RC_72deccc4588dd4c59ea212c47055f933", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_bf5d4ab423fae3ff38a977653adc8398Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
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

        RESTAPIWebsocketOfficialModel.RC_72deccc4588dd4c59ea212c47055f933 = RC_72deccc4588dd4c59ea212c47055f933Inner;

        RC_72deccc4588dd4c59ea212c47055f933Inner._isAnonymousRecord = true;
        RC_72deccc4588dd4c59ea212c47055f933Inner.UniqueId = "72deccc4-588d-d4c5-9ea2-12c47055f933";
        var RC_72deccc4588dd4c59ea212c47055f933 = RC_72deccc4588dd4c59ea212c47055f933Inner;
        RC_72deccc4588dd4c59ea212c47055f933.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_7649b6f3b5d31da383ad943effdeab99", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_4dc58b9edb8582c76248b762d6650913Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_7649b6f3b5d31da383ad943effdeab99 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_4dc58b9edb8582c76248b762d6650913Structure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_7649b6f3b5d31da383ad943effdeab99 = RL_7649b6f3b5d31da383ad943effdeab99;

});

define("RESTAPIWebsocketOfficial.model$RC_769b74cf243bca7e23f6d8b3e094aafe", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_83fbd707f872e92b597918150eff1f3eStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_769b74cf243bca7e23f6d8b3e094aafeInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Compliance", "complianceAttr", "Compliance", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_83fbd707f872e92b597918150eff1f3eStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_83fbd707f872e92b597918150eff1f3eStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_769b74cf243bca7e23f6d8b3e094aafe(new RC_769b74cf243bca7e23f6d8b3e094aafe.RecordClass({
                    complianceAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_769b74cf243bca7e23f6d8b3e094aafe = RC_769b74cf243bca7e23f6d8b3e094aafeInner;

        RC_769b74cf243bca7e23f6d8b3e094aafeInner._isAnonymousRecord = true;
        RC_769b74cf243bca7e23f6d8b3e094aafeInner.UniqueId = "769b74cf-243b-ca7e-23f6-d8b3e094aafe";
        var RC_769b74cf243bca7e23f6d8b3e094aafe = RC_769b74cf243bca7e23f6d8b3e094aafeInner;
        RC_769b74cf243bca7e23f6d8b3e094aafe.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_76a4a5b2c454ce7cb9d8436e9849949e", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_1e493399566287dd50f49a441f58a8caStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_76a4a5b2c454ce7cb9d8436e9849949e extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_1e493399566287dd50f49a441f58a8caStructure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_76a4a5b2c454ce7cb9d8436e9849949e = RL_76a4a5b2c454ce7cb9d8436e9849949e;

});

define("RESTAPIWebsocketOfficial.model$RC_854dbd2804fbb731b1468b879331bbde", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_8517d9c8b73e866553a1a7b806af5079Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_854dbd2804fbb731b1468b879331bbdeInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Error", "errorAttr", "Error", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_8517d9c8b73e866553a1a7b806af5079Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_8517d9c8b73e866553a1a7b806af5079Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_854dbd2804fbb731b1468b879331bbde(new RC_854dbd2804fbb731b1468b879331bbde.RecordClass({
                    errorAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_854dbd2804fbb731b1468b879331bbde = RC_854dbd2804fbb731b1468b879331bbdeInner;

        RC_854dbd2804fbb731b1468b879331bbdeInner._isAnonymousRecord = true;
        RC_854dbd2804fbb731b1468b879331bbdeInner.UniqueId = "854dbd28-04fb-b731-b146-8b879331bbde";
        var RC_854dbd2804fbb731b1468b879331bbde = RC_854dbd2804fbb731b1468b879331bbdeInner;
        RC_854dbd2804fbb731b1468b879331bbde.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_77d062a6109acd64f7dab8d805a7e390", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_854dbd2804fbb731b1468b879331bbde"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_77d062a6109acd64f7dab8d805a7e390 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_854dbd2804fbb731b1468b879331bbde;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_77d062a6109acd64f7dab8d805a7e390 = RL_77d062a6109acd64f7dab8d805a7e390;

});

define("RESTAPIWebsocketOfficial.model$RL_79e5f7b3f667162d18056364b5add7d4", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_d4ed48681c55954edc02f19b0ed492e7Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_79e5f7b3f667162d18056364b5add7d4 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_d4ed48681c55954edc02f19b0ed492e7Structure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_79e5f7b3f667162d18056364b5add7d4 = RL_79e5f7b3f667162d18056364b5add7d4;

});

define("RESTAPIWebsocketOfficial.model$RL_7a119d08ddaa03a9adb755d998da5288", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_e9af53f34f5d2c71a49407f1ed42d7f7Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_7a119d08ddaa03a9adb755d998da5288 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_e9af53f34f5d2c71a49407f1ed42d7f7Structure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_7a119d08ddaa03a9adb755d998da5288 = RL_7a119d08ddaa03a9adb755d998da5288;

});

define("RESTAPIWebsocketOfficial.model$RL_7a61959884cd1d97a8df26308775a5c7", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_d845e9af38689337f2bff5d766253a88Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_7a61959884cd1d97a8df26308775a5c7 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_d845e9af38689337f2bff5d766253a88Structure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_7a61959884cd1d97a8df26308775a5c7 = RL_7a61959884cd1d97a8df26308775a5c7;

});

define("RESTAPIWebsocketOfficial.model$ST_7a752455e27bb9ea87d724bbb902dd16Structure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_e25657c96fdb654707c20af3bb230787Structure", "RESTAPIWebsocketOfficial.model$ST_9b3eaf42648c2b28591e8ee92b7ce159Structure", "RESTAPIWebsocketOfficial.model$RL_016ebe8f15c3060e53dd56f2fea28791", "RESTAPIWebsocketOfficial.model$ST_8517d9c8b73e866553a1a7b806af5079Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_7a752455e27bb9ea87d724bbb902dd16StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Echo_req", "echo_reqAttr", "echo_req", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_e25657c96fdb654707c20af3bb230787Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_e25657c96fdb654707c20af3bb230787Structure),
                    this.attr("Msg_type", "msg_typeAttr", "msg_type", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("trading_platform_available_accounts", "trading_platform_available_accountsAttr", "trading_platform_available_accounts", false, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.RL_016ebe8f15c3060e53dd56f2fea28791());
                    }, true, RESTAPIWebsocketOfficialModel.RL_016ebe8f15c3060e53dd56f2fea28791),
                    this.attr("Error", "errorAttr", "error", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_8517d9c8b73e866553a1a7b806af5079Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_8517d9c8b73e866553a1a7b806af5079Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_7a752455e27bb9ea87d724bbb902dd16Structure = ST_7a752455e27bb9ea87d724bbb902dd16StructureInner;

        var ST_7a752455e27bb9ea87d724bbb902dd16Structure = ST_7a752455e27bb9ea87d724bbb902dd16StructureInner;
        ST_7a752455e27bb9ea87d724bbb902dd16Structure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_7aafab926cc9835b50687e3590d16e83", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_4fa180d49a839964a4a640104b10a272Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_7aafab926cc9835b50687e3590d16e83 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_4fa180d49a839964a4a640104b10a272Structure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_7aafab926cc9835b50687e3590d16e83 = RL_7aafab926cc9835b50687e3590d16e83;

});

define("RESTAPIWebsocketOfficial.model$RC_7b274cb5f96a8ac297db685000547ab1", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_9d1062fa4257a03d2f3c4e1f302af3d7Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_7b274cb5f96a8ac297db685000547ab1Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Trading_platform_statusItem", "trading_platform_statusItemAttr", "Trading_platform_statusItem", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_9d1062fa4257a03d2f3c4e1f302af3d7Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_9d1062fa4257a03d2f3c4e1f302af3d7Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_7b274cb5f96a8ac297db685000547ab1(new RC_7b274cb5f96a8ac297db685000547ab1.RecordClass({
                    trading_platform_statusItemAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_7b274cb5f96a8ac297db685000547ab1 = RC_7b274cb5f96a8ac297db685000547ab1Inner;

        RC_7b274cb5f96a8ac297db685000547ab1Inner._isAnonymousRecord = true;
        RC_7b274cb5f96a8ac297db685000547ab1Inner.UniqueId = "7b274cb5-f96a-8ac2-97db-685000547ab1";
        var RC_7b274cb5f96a8ac297db685000547ab1 = RC_7b274cb5f96a8ac297db685000547ab1Inner;
        RC_7b274cb5f96a8ac297db685000547ab1.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RC_7c67e52a2329c05d78ed79fcc452835e", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_13505e54da5ba49238f8f2a40834f63fStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_7c67e52a2329c05d78ed79fcc452835eInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Geolocation", "geolocationAttr", "Geolocation", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_13505e54da5ba49238f8f2a40834f63fStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_13505e54da5ba49238f8f2a40834f63fStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_7c67e52a2329c05d78ed79fcc452835e(new RC_7c67e52a2329c05d78ed79fcc452835e.RecordClass({
                    geolocationAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_7c67e52a2329c05d78ed79fcc452835e = RC_7c67e52a2329c05d78ed79fcc452835eInner;

        RC_7c67e52a2329c05d78ed79fcc452835eInner._isAnonymousRecord = true;
        RC_7c67e52a2329c05d78ed79fcc452835eInner.UniqueId = "7c67e52a-2329-c05d-78ed-79fcc452835e";
        var RC_7c67e52a2329c05d78ed79fcc452835e = RC_7c67e52a2329c05d78ed79fcc452835eInner;
        RC_7c67e52a2329c05d78ed79fcc452835e.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_7c9f790fa5c2ed1fbdf0de41347402fa", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_628e5221d510e98bcfe00cce5f107d21Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_7c9f790fa5c2ed1fbdf0de41347402fa extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_628e5221d510e98bcfe00cce5f107d21Structure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_7c9f790fa5c2ed1fbdf0de41347402fa = RL_7c9f790fa5c2ed1fbdf0de41347402fa;

});

define("RESTAPIWebsocketOfficial.model$RC_7de6f1e2c99800d3c6e1aaeb14f3afdd", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_9b3eaf42648c2b28591e8ee92b7ce159Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_7de6f1e2c99800d3c6e1aaeb14f3afddInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Trading_platform_available_accountItemMT5", "trading_platform_available_accountItemMT5Attr", "Trading_platform_available_accountItemMT5", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_9b3eaf42648c2b28591e8ee92b7ce159Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_9b3eaf42648c2b28591e8ee92b7ce159Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_7de6f1e2c99800d3c6e1aaeb14f3afdd(new RC_7de6f1e2c99800d3c6e1aaeb14f3afdd.RecordClass({
                    trading_platform_available_accountItemMT5Attr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_7de6f1e2c99800d3c6e1aaeb14f3afdd = RC_7de6f1e2c99800d3c6e1aaeb14f3afddInner;

        RC_7de6f1e2c99800d3c6e1aaeb14f3afddInner._isAnonymousRecord = true;
        RC_7de6f1e2c99800d3c6e1aaeb14f3afddInner.UniqueId = "7de6f1e2-c998-00d3-c6e1-aaeb14f3afdd";
        var RC_7de6f1e2c99800d3c6e1aaeb14f3afdd = RC_7de6f1e2c99800d3c6e1aaeb14f3afddInner;
        RC_7de6f1e2c99800d3c6e1aaeb14f3afdd.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_7e823839a7f836a297fa8d09d5b77858", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_264d82ff29428f3cd43ebe0810111d5a"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_7e823839a7f836a297fa8d09d5b77858 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_264d82ff29428f3cd43ebe0810111d5a;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_7e823839a7f836a297fa8d09d5b77858 = RL_7e823839a7f836a297fa8d09d5b77858;

});

define("RESTAPIWebsocketOfficial.model$RL_7ea0e409b1b42e8e6d7ca54869209a73", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_55ea19c18b42991c3f5575c063ad7ca7Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_7ea0e409b1b42e8e6d7ca54869209a73 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_55ea19c18b42991c3f5575c063ad7ca7Structure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_7ea0e409b1b42e8e6d7ca54869209a73 = RL_7ea0e409b1b42e8e6d7ca54869209a73;

});

define("RESTAPIWebsocketOfficial.model$RL_7ec701d4086b9503e816fe47fc7b3996", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_6cf1ba858957788c000fe8d27578f9c1Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_7ec701d4086b9503e816fe47fc7b3996 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_6cf1ba858957788c000fe8d27578f9c1Structure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_7ec701d4086b9503e816fe47fc7b3996 = RL_7ec701d4086b9503e816fe47fc7b3996;

});

define("RESTAPIWebsocketOfficial.model$RC_7f36dbf26349b8c78224f133e993735e", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_1e493399566287dd50f49a441f58a8caStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_7f36dbf26349b8c78224f133e993735eInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Cashier", "cashierAttr", "Cashier", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_1e493399566287dd50f49a441f58a8caStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_1e493399566287dd50f49a441f58a8caStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_7f36dbf26349b8c78224f133e993735e(new RC_7f36dbf26349b8c78224f133e993735e.RecordClass({
                    cashierAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_7f36dbf26349b8c78224f133e993735e = RC_7f36dbf26349b8c78224f133e993735eInner;

        RC_7f36dbf26349b8c78224f133e993735eInner._isAnonymousRecord = true;
        RC_7f36dbf26349b8c78224f133e993735eInner.UniqueId = "7f36dbf2-6349-b8c7-8224-f133e993735e";
        var RC_7f36dbf26349b8c78224f133e993735e = RC_7f36dbf26349b8c78224f133e993735eInner;
        RC_7f36dbf26349b8c78224f133e993735e.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RC_86cda441e1db9e62e574ab54636ea9ea", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_07c55c1e5241bcf8a9665901701e0dbfStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_86cda441e1db9e62e574ab54636ea9eaInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("PostTradingPlatformPasswordResetResponse", "postTradingPlatformPasswordResetResponseAttr", "PostTradingPlatformPasswordResetResponse", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_07c55c1e5241bcf8a9665901701e0dbfStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_07c55c1e5241bcf8a9665901701e0dbfStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_86cda441e1db9e62e574ab54636ea9ea(new RC_86cda441e1db9e62e574ab54636ea9ea.RecordClass({
                    postTradingPlatformPasswordResetResponseAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_86cda441e1db9e62e574ab54636ea9ea = RC_86cda441e1db9e62e574ab54636ea9eaInner;

        RC_86cda441e1db9e62e574ab54636ea9eaInner._isAnonymousRecord = true;
        RC_86cda441e1db9e62e574ab54636ea9eaInner.UniqueId = "86cda441-e1db-9e62-e574-ab54636ea9ea";
        var RC_86cda441e1db9e62e574ab54636ea9ea = RC_86cda441e1db9e62e574ab54636ea9eaInner;
        RC_86cda441e1db9e62e574ab54636ea9ea.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_7f64f8c0aaa300d34c79a90785135151", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_86cda441e1db9e62e574ab54636ea9ea"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_7f64f8c0aaa300d34c79a90785135151 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_86cda441e1db9e62e574ab54636ea9ea;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_7f64f8c0aaa300d34c79a90785135151 = RL_7f64f8c0aaa300d34c79a90785135151;

});

define("RESTAPIWebsocketOfficial.model$RL_802322074908177d1de132f062300275", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_2838f738beb90761e9ec634e42207f58"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_802322074908177d1de132f062300275 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_2838f738beb90761e9ec634e42207f58;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_802322074908177d1de132f062300275 = RL_802322074908177d1de132f062300275;

});

define("RESTAPIWebsocketOfficial.model$RL_81d2bc71eb1c605f53ae134ad3caa1c0", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_8812c3cbc0a0d322acb5354526a670b4Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_81d2bc71eb1c605f53ae134ad3caa1c0 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_8812c3cbc0a0d322acb5354526a670b4Structure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_81d2bc71eb1c605f53ae134ad3caa1c0 = RL_81d2bc71eb1c605f53ae134ad3caa1c0;

});

define("RESTAPIWebsocketOfficial.model$RL_827e6062dd8814ace80f2a3f1a613f76", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_47cbcea37f9383094a9acfdb35413d95"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_827e6062dd8814ace80f2a3f1a613f76 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_47cbcea37f9383094a9acfdb35413d95;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_827e6062dd8814ace80f2a3f1a613f76 = RL_827e6062dd8814ace80f2a3f1a613f76;

});

define("RESTAPIWebsocketOfficial.model$RC_890f16fe63a6b66b2130ac1a285dc1bf", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_d845e9af38689337f2bff5d766253a88Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
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

        RESTAPIWebsocketOfficialModel.RC_890f16fe63a6b66b2130ac1a285dc1bf = RC_890f16fe63a6b66b2130ac1a285dc1bfInner;

        RC_890f16fe63a6b66b2130ac1a285dc1bfInner._isAnonymousRecord = true;
        RC_890f16fe63a6b66b2130ac1a285dc1bfInner.UniqueId = "890f16fe-63a6-b66b-2130-ac1a285dc1bf";
        var RC_890f16fe63a6b66b2130ac1a285dc1bf = RC_890f16fe63a6b66b2130ac1a285dc1bfInner;
        RC_890f16fe63a6b66b2130ac1a285dc1bf.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_855c9279ae87db4555d2fbb8ba90afc5", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_890f16fe63a6b66b2130ac1a285dc1bf"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_855c9279ae87db4555d2fbb8ba90afc5 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_890f16fe63a6b66b2130ac1a285dc1bf;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_855c9279ae87db4555d2fbb8ba90afc5 = RL_855c9279ae87db4555d2fbb8ba90afc5;

});

define("RESTAPIWebsocketOfficial.model$RC_e03efdb95c631545332d9962dd0402d3", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_057fc2ec8b30a53f3233d84a70e95aabStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_e03efdb95c631545332d9962dd0402d3Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("HTTPHeader", "hTTPHeaderAttr", "HTTPHeader", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_057fc2ec8b30a53f3233d84a70e95aabStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_057fc2ec8b30a53f3233d84a70e95aabStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_e03efdb95c631545332d9962dd0402d3(new RC_e03efdb95c631545332d9962dd0402d3.RecordClass({
                    hTTPHeaderAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_e03efdb95c631545332d9962dd0402d3 = RC_e03efdb95c631545332d9962dd0402d3Inner;

        RC_e03efdb95c631545332d9962dd0402d3Inner._isAnonymousRecord = true;
        RC_e03efdb95c631545332d9962dd0402d3Inner.UniqueId = "e03efdb9-5c63-1545-332d-9962dd0402d3";
        var RC_e03efdb95c631545332d9962dd0402d3 = RC_e03efdb95c631545332d9962dd0402d3Inner;
        RC_e03efdb95c631545332d9962dd0402d3.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_85edf15715c5108a5315d804754ce1b4", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_e03efdb95c631545332d9962dd0402d3"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_85edf15715c5108a5315d804754ce1b4 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_e03efdb95c631545332d9962dd0402d3;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_85edf15715c5108a5315d804754ce1b4 = RL_85edf15715c5108a5315d804754ce1b4;

});

define("RESTAPIWebsocketOfficial.model$RC_8688a658a83b6884b85d11d8db4546d3", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_89d14f8b4008cb2b12eb9082eeeb95a6Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_8688a658a83b6884b85d11d8db4546d3Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Account_opening", "account_openingAttr", "Account_opening", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_89d14f8b4008cb2b12eb9082eeeb95a6Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_89d14f8b4008cb2b12eb9082eeeb95a6Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_8688a658a83b6884b85d11d8db4546d3(new RC_8688a658a83b6884b85d11d8db4546d3.RecordClass({
                    account_openingAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_8688a658a83b6884b85d11d8db4546d3 = RC_8688a658a83b6884b85d11d8db4546d3Inner;

        RC_8688a658a83b6884b85d11d8db4546d3Inner._isAnonymousRecord = true;
        RC_8688a658a83b6884b85d11d8db4546d3Inner.UniqueId = "8688a658-a83b-6884-b85d-11d8db4546d3";
        var RC_8688a658a83b6884b85d11d8db4546d3 = RC_8688a658a83b6884b85d11d8db4546d3Inner;
        RC_8688a658a83b6884b85d11d8db4546d3.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_87e06844679358e0f8214e75ce605df1", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_433eb5ffcea5c3c69d4be061c9113711Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_87e06844679358e0f8214e75ce605df1 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_433eb5ffcea5c3c69d4be061c9113711Structure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_87e06844679358e0f8214e75ce605df1 = RL_87e06844679358e0f8214e75ce605df1;

});

define("RESTAPIWebsocketOfficial.model$RL_87e64e62a021a7f641dffaaa73541aa5", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_e184b5e893ff6633d3c7357dd29941faStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_87e64e62a021a7f641dffaaa73541aa5 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_e184b5e893ff6633d3c7357dd29941faStructure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_87e64e62a021a7f641dffaaa73541aa5 = RL_87e64e62a021a7f641dffaaa73541aa5;

});

define("RESTAPIWebsocketOfficial.model$RL_881e0bd330dc44a0f930b17dfa132522", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_7c67e52a2329c05d78ed79fcc452835e"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_881e0bd330dc44a0f930b17dfa132522 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_7c67e52a2329c05d78ed79fcc452835e;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_881e0bd330dc44a0f930b17dfa132522 = RL_881e0bd330dc44a0f930b17dfa132522;

});

define("RESTAPIWebsocketOfficial.model$RL_88893b2b6478ca91e7c481f161053cfa", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_af97180714ce3993e80d246ca4429825Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_88893b2b6478ca91e7c481f161053cfa extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_af97180714ce3993e80d246ca4429825Structure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_88893b2b6478ca91e7c481f161053cfa = RL_88893b2b6478ca91e7c481f161053cfa;

});

define("RESTAPIWebsocketOfficial.model$RL_8972d3be5f5c984833af7ea32d6710e8", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_0d71b623ce5a409adf80e6d9d4a7031e"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_8972d3be5f5c984833af7ea32d6710e8 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_0d71b623ce5a409adf80e6d9d4a7031e;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_8972d3be5f5c984833af7ea32d6710e8 = RL_8972d3be5f5c984833af7ea32d6710e8;

});

define("RESTAPIWebsocketOfficial.model$RL_89efb8ec15cf4e133db42b43e8a70d31", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_8517d9c8b73e866553a1a7b806af5079Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_89efb8ec15cf4e133db42b43e8a70d31 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_8517d9c8b73e866553a1a7b806af5079Structure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_89efb8ec15cf4e133db42b43e8a70d31 = RL_89efb8ec15cf4e133db42b43e8a70d31;

});

define("RESTAPIWebsocketOfficial.model$RL_8b3193777919a00b12740a1aa0e7a669", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_30cf47a274820f1ac96cf412803888fdStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_8b3193777919a00b12740a1aa0e7a669 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_30cf47a274820f1ac96cf412803888fdStructure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_8b3193777919a00b12740a1aa0e7a669 = RL_8b3193777919a00b12740a1aa0e7a669;

});

define("RESTAPIWebsocketOfficial.model$RC_8b362302b5966cedd4e8c7c42d7e46f8", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_ae40a5e8008c1f0252b9952ccf57ee94Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_8b362302b5966cedd4e8c7c42d7e46f8Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Echo_req8", "echo_req8Attr", "Echo_req8", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_ae40a5e8008c1f0252b9952ccf57ee94Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_ae40a5e8008c1f0252b9952ccf57ee94Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_8b362302b5966cedd4e8c7c42d7e46f8(new RC_8b362302b5966cedd4e8c7c42d7e46f8.RecordClass({
                    echo_req8Attr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_8b362302b5966cedd4e8c7c42d7e46f8 = RC_8b362302b5966cedd4e8c7c42d7e46f8Inner;

        RC_8b362302b5966cedd4e8c7c42d7e46f8Inner._isAnonymousRecord = true;
        RC_8b362302b5966cedd4e8c7c42d7e46f8Inner.UniqueId = "8b362302-b596-6ced-d4e8-c7c42d7e46f8";
        var RC_8b362302b5966cedd4e8c7c42d7e46f8 = RC_8b362302b5966cedd4e8c7c42d7e46f8Inner;
        RC_8b362302b5966cedd4e8c7c42d7e46f8.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RC_8ccc091579545400bb5558b597337647", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_803bffb999fad6a38040b2086877902eStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
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

        RESTAPIWebsocketOfficialModel.RC_8ccc091579545400bb5558b597337647 = RC_8ccc091579545400bb5558b597337647Inner;

        RC_8ccc091579545400bb5558b597337647Inner._isAnonymousRecord = true;
        RC_8ccc091579545400bb5558b597337647Inner.UniqueId = "8ccc0915-7954-5400-bb55-58b597337647";
        var RC_8ccc091579545400bb5558b597337647 = RC_8ccc091579545400bb5558b597337647Inner;
        RC_8ccc091579545400bb5558b597337647.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RC_955ccd26a5d98bb43926051cccd6f301", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_af7c8c24e0881fcad517d74c916f7352Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_955ccd26a5d98bb43926051cccd6f301Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("StatementFee", "statementFeeAttr", "StatementFee", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_af7c8c24e0881fcad517d74c916f7352Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_af7c8c24e0881fcad517d74c916f7352Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_955ccd26a5d98bb43926051cccd6f301(new RC_955ccd26a5d98bb43926051cccd6f301.RecordClass({
                    statementFeeAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_955ccd26a5d98bb43926051cccd6f301 = RC_955ccd26a5d98bb43926051cccd6f301Inner;

        RC_955ccd26a5d98bb43926051cccd6f301Inner._isAnonymousRecord = true;
        RC_955ccd26a5d98bb43926051cccd6f301Inner.UniqueId = "955ccd26-a5d9-8bb4-3926-051cccd6f301";
        var RC_955ccd26a5d98bb43926051cccd6f301 = RC_955ccd26a5d98bb43926051cccd6f301Inner;
        RC_955ccd26a5d98bb43926051cccd6f301.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_8d98f970a808a859e46d763c2a9f5e6c", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_955ccd26a5d98bb43926051cccd6f301"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_8d98f970a808a859e46d763c2a9f5e6c extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_955ccd26a5d98bb43926051cccd6f301;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_8d98f970a808a859e46d763c2a9f5e6c = RL_8d98f970a808a859e46d763c2a9f5e6c;

});

define("RESTAPIWebsocketOfficial.model$RL_8e38afd3984d04ce643edcb181b91ae7", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_3a2d986a770a9c3e6f1096b16961e5a9"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_8e38afd3984d04ce643edcb181b91ae7 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_3a2d986a770a9c3e6f1096b16961e5a9;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_8e38afd3984d04ce643edcb181b91ae7 = RL_8e38afd3984d04ce643edcb181b91ae7;

});

define("RESTAPIWebsocketOfficial.model$RC_8f3efc29bef911e74df222fdba36c135", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_605da9a1009ce00d8c64718f9c13e284Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_8f3efc29bef911e74df222fdba36c135Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Right", "rightAttr", "Right", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_605da9a1009ce00d8c64718f9c13e284Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_605da9a1009ce00d8c64718f9c13e284Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_8f3efc29bef911e74df222fdba36c135(new RC_8f3efc29bef911e74df222fdba36c135.RecordClass({
                    rightAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_8f3efc29bef911e74df222fdba36c135 = RC_8f3efc29bef911e74df222fdba36c135Inner;

        RC_8f3efc29bef911e74df222fdba36c135Inner._isAnonymousRecord = true;
        RC_8f3efc29bef911e74df222fdba36c135Inner.UniqueId = "8f3efc29-bef9-11e7-4df2-22fdba36c135";
        var RC_8f3efc29bef911e74df222fdba36c135 = RC_8f3efc29bef911e74df222fdba36c135Inner;
        RC_8f3efc29bef911e74df222fdba36c135.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_904325e5d042a099908ed28253c5b8a6", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_0af1f162a4f117f1f3e8ae4dce5af0db"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_904325e5d042a099908ed28253c5b8a6 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_0af1f162a4f117f1f3e8ae4dce5af0db;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_904325e5d042a099908ed28253c5b8a6 = RL_904325e5d042a099908ed28253c5b8a6;

});

define("RESTAPIWebsocketOfficial.model$RL_90dfebee20aff7c26e30042add874567", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_0543ba6e58ccc819d0ba65db33df025eStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_90dfebee20aff7c26e30042add874567 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_0543ba6e58ccc819d0ba65db33df025eStructure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_90dfebee20aff7c26e30042add874567 = RL_90dfebee20aff7c26e30042add874567;

});

define("RESTAPIWebsocketOfficial.model$RL_91f3ef19dd1007f7116bdf96cd006384", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_5ba9c80e587385c94102779d8eab301cStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_91f3ef19dd1007f7116bdf96cd006384 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_5ba9c80e587385c94102779d8eab301cStructure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_91f3ef19dd1007f7116bdf96cd006384 = RL_91f3ef19dd1007f7116bdf96cd006384;

});

define("RESTAPIWebsocketOfficial.model$RL_9238bba5cbd10e6024ffc4f7cd576720", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_8b362302b5966cedd4e8c7c42d7e46f8"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_9238bba5cbd10e6024ffc4f7cd576720 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_8b362302b5966cedd4e8c7c42d7e46f8;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_9238bba5cbd10e6024ffc4f7cd576720 = RL_9238bba5cbd10e6024ffc4f7cd576720;

});

define("RESTAPIWebsocketOfficial.model$RL_93708d7bb7d0fbdca673f09a924bcdb7", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_2e6da4a898d55ae96aab51b6e09d6a22"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_93708d7bb7d0fbdca673f09a924bcdb7 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_2e6da4a898d55ae96aab51b6e09d6a22;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_93708d7bb7d0fbdca673f09a924bcdb7 = RL_93708d7bb7d0fbdca673f09a924bcdb7;

});

define("RESTAPIWebsocketOfficial.model$RL_94cd9fdaaf1a67a3bfa0e32663c1fe70", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_9b4c1d7f5790df008534dfd8d1c97a7cStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_94cd9fdaaf1a67a3bfa0e32663c1fe70 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_9b4c1d7f5790df008534dfd8d1c97a7cStructure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_94cd9fdaaf1a67a3bfa0e32663c1fe70 = RL_94cd9fdaaf1a67a3bfa0e32663c1fe70;

});

define("RESTAPIWebsocketOfficial.model$RL_958ee6d9719c17433ce81822ca60f4a2", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_4a76c214f34feb841d0c1a2d8cdbec01"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_958ee6d9719c17433ce81822ca60f4a2 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_4a76c214f34feb841d0c1a2d8cdbec01;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_958ee6d9719c17433ce81822ca60f4a2 = RL_958ee6d9719c17433ce81822ca60f4a2;

});

define("RESTAPIWebsocketOfficial.model$RL_97e8f3375611a96a6012eed05d91f59d", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_8ccc091579545400bb5558b597337647"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_97e8f3375611a96a6012eed05d91f59d extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_8ccc091579545400bb5558b597337647;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_97e8f3375611a96a6012eed05d91f59d = RL_97e8f3375611a96a6012eed05d91f59d;

});

define("RESTAPIWebsocketOfficial.model$RL_98f3b8624fe7a466ac7ebfc153dac373", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_236b9780ed98eefd23c7d452d5b32785"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_98f3b8624fe7a466ac7ebfc153dac373 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_236b9780ed98eefd23c7d452d5b32785;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_98f3b8624fe7a466ac7ebfc153dac373 = RL_98f3b8624fe7a466ac7ebfc153dac373;

});

define("RESTAPIWebsocketOfficial.model$RL_996bbb10b9805c390cf8671b30f6d3a4", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_18cf7a633c2eb19c8f4a71d50c228fa8"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_996bbb10b9805c390cf8671b30f6d3a4 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_18cf7a633c2eb19c8f4a71d50c228fa8;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_996bbb10b9805c390cf8671b30f6d3a4 = RL_996bbb10b9805c390cf8671b30f6d3a4;

});

define("RESTAPIWebsocketOfficial.model$RL_9a37b428e209f265109cf020c957ba69", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_ac4f1b4870aba80de82d4c04f7b530ceStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_9a37b428e209f265109cf020c957ba69 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_ac4f1b4870aba80de82d4c04f7b530ceStructure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_9a37b428e209f265109cf020c957ba69 = RL_9a37b428e209f265109cf020c957ba69;

});

define("RESTAPIWebsocketOfficial.model$RL_9b5ff325fa2b1963afc7ac5fe1fefcac", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_42e091eee706086ba45ab77d0ef6821fStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_9b5ff325fa2b1963afc7ac5fe1fefcac extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_42e091eee706086ba45ab77d0ef6821fStructure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_9b5ff325fa2b1963afc7ac5fe1fefcac = RL_9b5ff325fa2b1963afc7ac5fe1fefcac;

});

define("RESTAPIWebsocketOfficial.model$RC_fed8226e055119cda9775f74ac223ef2", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_72e91b438c2e206bca7398a7a69902dfStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_fed8226e055119cda9775f74ac223ef2Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Currency_config", "currency_configAttr", "Currency_config", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_72e91b438c2e206bca7398a7a69902dfStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_72e91b438c2e206bca7398a7a69902dfStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_fed8226e055119cda9775f74ac223ef2(new RC_fed8226e055119cda9775f74ac223ef2.RecordClass({
                    currency_configAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_fed8226e055119cda9775f74ac223ef2 = RC_fed8226e055119cda9775f74ac223ef2Inner;

        RC_fed8226e055119cda9775f74ac223ef2Inner._isAnonymousRecord = true;
        RC_fed8226e055119cda9775f74ac223ef2Inner.UniqueId = "fed8226e-0551-19cd-a977-5f74ac223ef2";
        var RC_fed8226e055119cda9775f74ac223ef2 = RC_fed8226e055119cda9775f74ac223ef2Inner;
        RC_fed8226e055119cda9775f74ac223ef2.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_9b9241a2f74aae5dad6a96c423cf89d8", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_fed8226e055119cda9775f74ac223ef2"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_9b9241a2f74aae5dad6a96c423cf89d8 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_fed8226e055119cda9775f74ac223ef2;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_9b9241a2f74aae5dad6a96c423cf89d8 = RL_9b9241a2f74aae5dad6a96c423cf89d8;

});

define("RESTAPIWebsocketOfficial.model$ST_e5081373b9c17bf97c001a46f1739ffeStructure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_02211ece4f8ea033ae9a7fa2710f4a32Structure", "RESTAPIWebsocketOfficial.model$RL_d03621281d953210a5f7643c5f395ddc", "RESTAPIWebsocketOfficial.model$ST_123df4fc5615aac2800d1fa4847bc440Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_e5081373b9c17bf97c001a46f1739ffeStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Account_list", "account_listAttr", "account_list", false, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.RL_d03621281d953210a5f7643c5f395ddc());
                    }, true, RESTAPIWebsocketOfficialModel.RL_d03621281d953210a5f7643c5f395ddc),
                    this.attr("Balance", "balanceAttr", "balance", false, false, OS.DataTypes.DataTypes.Decimal, function() {
                        return OS.DataTypes.Decimal.defaultValue;
                    }, true),
                    this.attr("Country", "countryAttr", "country", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Currency", "currencyAttr", "currency", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Email", "emailAttr", "email", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Fullname", "fullnameAttr", "fullname", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Is_virtual", "is_virtualAttr", "is_virtual", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("Landing_company_fullname", "landing_company_fullnameAttr", "landing_company_fullname", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Landing_company_name", "landing_company_nameAttr", "landing_company_name", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Local_currencies", "local_currenciesAttr", "local_currencies", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_123df4fc5615aac2800d1fa4847bc440Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_123df4fc5615aac2800d1fa4847bc440Structure),
                    this.attr("Loginid", "loginidAttr", "loginid", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Preferred_language", "preferred_languageAttr", "preferred_language", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Scopes", "scopesAttr", "scopes", false, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
                    }, true, OS.DataTypes.TextList),
                    this.attr("Upgradeable_landing_companies", "upgradeable_landing_companiesAttr", "upgradeable_landing_companies", false, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
                    }, true, OS.DataTypes.TextList),
                    this.attr("User_id", "user_idAttr", "user_id", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_e5081373b9c17bf97c001a46f1739ffeStructure = ST_e5081373b9c17bf97c001a46f1739ffeStructureInner;

        var ST_e5081373b9c17bf97c001a46f1739ffeStructure = ST_e5081373b9c17bf97c001a46f1739ffeStructureInner;
        ST_e5081373b9c17bf97c001a46f1739ffeStructure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_9ba938eac8f7611815bf878625e7d65e", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_e5081373b9c17bf97c001a46f1739ffeStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_9ba938eac8f7611815bf878625e7d65e extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_e5081373b9c17bf97c001a46f1739ffeStructure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_9ba938eac8f7611815bf878625e7d65e = RL_9ba938eac8f7611815bf878625e7d65e;

});

define("RESTAPIWebsocketOfficial.model$RL_9bbf3501c857fa771241aed7c9717166", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_51c73f641f2d05540b68c15e7660196f"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_9bbf3501c857fa771241aed7c9717166 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_51c73f641f2d05540b68c15e7660196f;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_9bbf3501c857fa771241aed7c9717166 = RL_9bbf3501c857fa771241aed7c9717166;

});

define("RESTAPIWebsocketOfficial.model$RL_9c3b367f2c06676be4f28fe9c7a59a38", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_8688a658a83b6884b85d11d8db4546d3"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_9c3b367f2c06676be4f28fe9c7a59a38 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_8688a658a83b6884b85d11d8db4546d3;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_9c3b367f2c06676be4f28fe9c7a59a38 = RL_9c3b367f2c06676be4f28fe9c7a59a38;

});

define("RESTAPIWebsocketOfficial.model$RL_9d69b2d3ce2ad95c00706adc74706b15", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_bccc1fae1833449eea329fa137ba885aStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_9d69b2d3ce2ad95c00706adc74706b15 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_bccc1fae1833449eea329fa137ba885aStructure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_9d69b2d3ce2ad95c00706adc74706b15 = RL_9d69b2d3ce2ad95c00706adc74706b15;

});

define("RESTAPIWebsocketOfficial.model$RL_9da5c6764fa38cdbc45ffab2fe9a4d33", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_5685a40fa48e8876538e1df2a0c39d3eStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_9da5c6764fa38cdbc45ffab2fe9a4d33 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_5685a40fa48e8876538e1df2a0c39d3eStructure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_9da5c6764fa38cdbc45ffab2fe9a4d33 = RL_9da5c6764fa38cdbc45ffab2fe9a4d33;

});

define("RESTAPIWebsocketOfficial.model$RC_9ea5c08ae16800a64582da5745fe48cf", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_4814bb948c1b48da4f5ecccbe35da450Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_9ea5c08ae16800a64582da5745fe48cfInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Deposit", "depositAttr", "Deposit", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_4814bb948c1b48da4f5ecccbe35da450Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_4814bb948c1b48da4f5ecccbe35da450Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_9ea5c08ae16800a64582da5745fe48cf(new RC_9ea5c08ae16800a64582da5745fe48cf.RecordClass({
                    depositAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_9ea5c08ae16800a64582da5745fe48cf = RC_9ea5c08ae16800a64582da5745fe48cfInner;

        RC_9ea5c08ae16800a64582da5745fe48cfInner._isAnonymousRecord = true;
        RC_9ea5c08ae16800a64582da5745fe48cfInner.UniqueId = "9ea5c08a-e168-00a6-4582-da5745fe48cf";
        var RC_9ea5c08ae16800a64582da5745fe48cf = RC_9ea5c08ae16800a64582da5745fe48cfInner;
        RC_9ea5c08ae16800a64582da5745fe48cf.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_9e1ff0949548eb09d4dbb455a422d959", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_9ea5c08ae16800a64582da5745fe48cf"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_9e1ff0949548eb09d4dbb455a422d959 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_9ea5c08ae16800a64582da5745fe48cf;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_9e1ff0949548eb09d4dbb455a422d959 = RL_9e1ff0949548eb09d4dbb455a422d959;

});

define("RESTAPIWebsocketOfficial.model$RL_9f7e64e3acb92ada6c7cc1def60ee7ce", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_1b2532ef629f2b3259beb09a3dc495b4"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_9f7e64e3acb92ada6c7cc1def60ee7ce extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_1b2532ef629f2b3259beb09a3dc495b4;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_9f7e64e3acb92ada6c7cc1def60ee7ce = RL_9f7e64e3acb92ada6c7cc1def60ee7ce;

});

define("RESTAPIWebsocketOfficial.model$RC_9fdefb1423ae0af9c1d321109b8695e4", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_ef2ca9573c3bd1e27b35145a902be10bStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_9fdefb1423ae0af9c1d321109b8695e4Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Phone_number_verification", "phone_number_verificationAttr", "Phone_number_verification", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_ef2ca9573c3bd1e27b35145a902be10bStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_ef2ca9573c3bd1e27b35145a902be10bStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_9fdefb1423ae0af9c1d321109b8695e4(new RC_9fdefb1423ae0af9c1d321109b8695e4.RecordClass({
                    phone_number_verificationAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_9fdefb1423ae0af9c1d321109b8695e4 = RC_9fdefb1423ae0af9c1d321109b8695e4Inner;

        RC_9fdefb1423ae0af9c1d321109b8695e4Inner._isAnonymousRecord = true;
        RC_9fdefb1423ae0af9c1d321109b8695e4Inner.UniqueId = "9fdefb14-23ae-0af9-c1d3-21109b8695e4";
        var RC_9fdefb1423ae0af9c1d321109b8695e4 = RC_9fdefb1423ae0af9c1d321109b8695e4Inner;
        RC_9fdefb1423ae0af9c1d321109b8695e4.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_a08f65ffe8aa106df28c69272e328037", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_412ed7113d9105960615d1c5b5f37301Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_a08f65ffe8aa106df28c69272e328037 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_412ed7113d9105960615d1c5b5f37301Structure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_a08f65ffe8aa106df28c69272e328037 = RL_a08f65ffe8aa106df28c69272e328037;

});

define("RESTAPIWebsocketOfficial.model$RL_a269dfd9a948aad7cbddba837f8c095f", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_31254dd0eceb66de83ea4d3f76038ef7"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_a269dfd9a948aad7cbddba837f8c095f extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_31254dd0eceb66de83ea4d3f76038ef7;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_a269dfd9a948aad7cbddba837f8c095f = RL_a269dfd9a948aad7cbddba837f8c095f;

});

define("RESTAPIWebsocketOfficial.model$RL_a2a3d623cff8db0b23d39b4d88a9486f", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_9fdefb1423ae0af9c1d321109b8695e4"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_a2a3d623cff8db0b23d39b4d88a9486f extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_9fdefb1423ae0af9c1d321109b8695e4;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_a2a3d623cff8db0b23d39b4d88a9486f = RL_a2a3d623cff8db0b23d39b4d88a9486f;

});

define("RESTAPIWebsocketOfficial.model$RC_a5fc3d62312a89b32ae393e0571bcad7", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_d4ed48681c55954edc02f19b0ed492e7Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_a5fc3d62312a89b32ae393e0571bcad7Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("PostNewAccountVirtualRequest", "postNewAccountVirtualRequestAttr", "PostNewAccountVirtualRequest", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_d4ed48681c55954edc02f19b0ed492e7Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_d4ed48681c55954edc02f19b0ed492e7Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_a5fc3d62312a89b32ae393e0571bcad7(new RC_a5fc3d62312a89b32ae393e0571bcad7.RecordClass({
                    postNewAccountVirtualRequestAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_a5fc3d62312a89b32ae393e0571bcad7 = RC_a5fc3d62312a89b32ae393e0571bcad7Inner;

        RC_a5fc3d62312a89b32ae393e0571bcad7Inner._isAnonymousRecord = true;
        RC_a5fc3d62312a89b32ae393e0571bcad7Inner.UniqueId = "a5fc3d62-312a-89b3-2ae3-93e0571bcad7";
        var RC_a5fc3d62312a89b32ae393e0571bcad7 = RC_a5fc3d62312a89b32ae393e0571bcad7Inner;
        RC_a5fc3d62312a89b32ae393e0571bcad7.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_a6ed4fd2e7e0b79f06fecc8c65713a43", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_3d96747747f3d41e23c92ff9ec0f78ebStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_a6ed4fd2e7e0b79f06fecc8c65713a43 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_3d96747747f3d41e23c92ff9ec0f78ebStructure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_a6ed4fd2e7e0b79f06fecc8c65713a43 = RL_a6ed4fd2e7e0b79f06fecc8c65713a43;

});

define("RESTAPIWebsocketOfficial.model$RL_a7094b4040c9bc1f29f799c201256c99", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_091244483290da7633fe64666de188c0"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_a7094b4040c9bc1f29f799c201256c99 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_091244483290da7633fe64666de188c0;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_a7094b4040c9bc1f29f799c201256c99 = RL_a7094b4040c9bc1f29f799c201256c99;

});

define("RESTAPIWebsocketOfficial.model$RC_a83c53501675e1b1a92dce121c194a38", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_bf8a7e4d5139901f795596a5fbda1b90Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_a83c53501675e1b1a92dce121c194a38Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("TransactionItem", "transactionItemAttr", "TransactionItem", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_bf8a7e4d5139901f795596a5fbda1b90Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_bf8a7e4d5139901f795596a5fbda1b90Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_a83c53501675e1b1a92dce121c194a38(new RC_a83c53501675e1b1a92dce121c194a38.RecordClass({
                    transactionItemAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_a83c53501675e1b1a92dce121c194a38 = RC_a83c53501675e1b1a92dce121c194a38Inner;

        RC_a83c53501675e1b1a92dce121c194a38Inner._isAnonymousRecord = true;
        RC_a83c53501675e1b1a92dce121c194a38Inner.UniqueId = "a83c5350-1675-e1b1-a92d-ce121c194a38";
        var RC_a83c53501675e1b1a92dce121c194a38 = RC_a83c53501675e1b1a92dce121c194a38Inner;
        RC_a83c53501675e1b1a92dce121c194a38.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_a85951adc11db15827205a4c30d6e88f", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_50afbe86b1f98695d7a2eacc451587a7Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_a85951adc11db15827205a4c30d6e88f extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_50afbe86b1f98695d7a2eacc451587a7Structure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_a85951adc11db15827205a4c30d6e88f = RL_a85951adc11db15827205a4c30d6e88f;

});

define("RESTAPIWebsocketOfficial.model$RC_a8681099a96d9738667779eaaccedc4a", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_6e7638d850b78b46a75a04e2dcd58f58Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_a8681099a96d9738667779eaaccedc4aInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("IDR", "iDRAttr", "IDR", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_6e7638d850b78b46a75a04e2dcd58f58Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_6e7638d850b78b46a75a04e2dcd58f58Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_a8681099a96d9738667779eaaccedc4a(new RC_a8681099a96d9738667779eaaccedc4a.RecordClass({
                    iDRAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_a8681099a96d9738667779eaaccedc4a = RC_a8681099a96d9738667779eaaccedc4aInner;

        RC_a8681099a96d9738667779eaaccedc4aInner._isAnonymousRecord = true;
        RC_a8681099a96d9738667779eaaccedc4aInner.UniqueId = "a8681099-a96d-9738-6677-79eaaccedc4a";
        var RC_a8681099a96d9738667779eaaccedc4a = RC_a8681099a96d9738667779eaaccedc4aInner;
        RC_a8681099a96d9738667779eaaccedc4a.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_a8b7c276560c35af141714ac8a51d257", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_47772cad80dc4a787d65fd52470ca2cd"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_a8b7c276560c35af141714ac8a51d257 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_47772cad80dc4a787d65fd52470ca2cd;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_a8b7c276560c35af141714ac8a51d257 = RL_a8b7c276560c35af141714ac8a51d257;

});

define("RESTAPIWebsocketOfficial.model$RC_a9755f38b0542dfb6acdd8617637c169", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_24b97ac8060a9349e09da2d88e1dea00Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_a9755f38b0542dfb6acdd8617637c169Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("PostResetPasswordRequest", "postResetPasswordRequestAttr", "PostResetPasswordRequest", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_24b97ac8060a9349e09da2d88e1dea00Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_24b97ac8060a9349e09da2d88e1dea00Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_a9755f38b0542dfb6acdd8617637c169(new RC_a9755f38b0542dfb6acdd8617637c169.RecordClass({
                    postResetPasswordRequestAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_a9755f38b0542dfb6acdd8617637c169 = RC_a9755f38b0542dfb6acdd8617637c169Inner;

        RC_a9755f38b0542dfb6acdd8617637c169Inner._isAnonymousRecord = true;
        RC_a9755f38b0542dfb6acdd8617637c169Inner.UniqueId = "a9755f38-b054-2dfb-6acd-d8617637c169";
        var RC_a9755f38b0542dfb6acdd8617637c169 = RC_a9755f38b0542dfb6acdd8617637c169Inner;
        RC_a9755f38b0542dfb6acdd8617637c169.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_a9ea31b939f652b4b427fa383c80cdbb", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_98319758945048a72386b9e9466c220aStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_a9ea31b939f652b4b427fa383c80cdbb extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_98319758945048a72386b9e9466c220aStructure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_a9ea31b939f652b4b427fa383c80cdbb = RL_a9ea31b939f652b4b427fa383c80cdbb;

});

define("RESTAPIWebsocketOfficial.model$ST_d1246d83c419f598cf8e4e18d5276097Structure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_d1246d83c419f598cf8e4e18d5276097StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("new_password", "new_passwordAttr", "new_password", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("old_password", "old_passwordAttr", "old_password", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("platform", "platformAttr", "platform", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_d1246d83c419f598cf8e4e18d5276097Structure = ST_d1246d83c419f598cf8e4e18d5276097StructureInner;

        var ST_d1246d83c419f598cf8e4e18d5276097Structure = ST_d1246d83c419f598cf8e4e18d5276097StructureInner;
        ST_d1246d83c419f598cf8e4e18d5276097Structure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RC_b7ccb1d374819fabb1f3fad7a6c0dd99", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_d1246d83c419f598cf8e4e18d5276097Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_b7ccb1d374819fabb1f3fad7a6c0dd99Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("PostTradingPlatformPasswordChangeRequest", "postTradingPlatformPasswordChangeRequestAttr", "PostTradingPlatformPasswordChangeRequest", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_d1246d83c419f598cf8e4e18d5276097Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_d1246d83c419f598cf8e4e18d5276097Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_b7ccb1d374819fabb1f3fad7a6c0dd99(new RC_b7ccb1d374819fabb1f3fad7a6c0dd99.RecordClass({
                    postTradingPlatformPasswordChangeRequestAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_b7ccb1d374819fabb1f3fad7a6c0dd99 = RC_b7ccb1d374819fabb1f3fad7a6c0dd99Inner;

        RC_b7ccb1d374819fabb1f3fad7a6c0dd99Inner._isAnonymousRecord = true;
        RC_b7ccb1d374819fabb1f3fad7a6c0dd99Inner.UniqueId = "b7ccb1d3-7481-9fab-b1f3-fad7a6c0dd99";
        var RC_b7ccb1d374819fabb1f3fad7a6c0dd99 = RC_b7ccb1d374819fabb1f3fad7a6c0dd99Inner;
        RC_b7ccb1d374819fabb1f3fad7a6c0dd99.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_aa768f1f5f08fea3fa4adb58f7814e07", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_b7ccb1d374819fabb1f3fad7a6c0dd99"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_aa768f1f5f08fea3fa4adb58f7814e07 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_b7ccb1d374819fabb1f3fad7a6c0dd99;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_aa768f1f5f08fea3fa4adb58f7814e07 = RL_aa768f1f5f08fea3fa4adb58f7814e07;

});

define("RESTAPIWebsocketOfficial.model$RL_aae9a3766bc818ac211c0ea434d05161", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_4814bb948c1b48da4f5ecccbe35da450Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_aae9a3766bc818ac211c0ea434d05161 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_4814bb948c1b48da4f5ecccbe35da450Structure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_aae9a3766bc818ac211c0ea434d05161 = RL_aae9a3766bc818ac211c0ea434d05161;

});

define("RESTAPIWebsocketOfficial.model$RL_abbb06caa2dc3007694c8b499e93ac42", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_5fc2e4a935064c1413d6e989e87decd2Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_abbb06caa2dc3007694c8b499e93ac42 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_5fc2e4a935064c1413d6e989e87decd2Structure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_abbb06caa2dc3007694c8b499e93ac42 = RL_abbb06caa2dc3007694c8b499e93ac42;

});

define("RESTAPIWebsocketOfficial.model$ST_e89429535bbc3a843fdfa9ff6a750a5fStructure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_3d96747747f3d41e23c92ff9ec0f78ebStructure", "RESTAPIWebsocketOfficial.model$ST_8517d9c8b73e866553a1a7b806af5079Structure", "RESTAPIWebsocketOfficial.model$ST_412ed7113d9105960615d1c5b5f37301Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_e89429535bbc3a843fdfa9ff6a750a5fStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Echo_req", "echo_reqAttr", "echo_req", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_3d96747747f3d41e23c92ff9ec0f78ebStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_3d96747747f3d41e23c92ff9ec0f78ebStructure),
                    this.attr("Error", "errorAttr", "error", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_8517d9c8b73e866553a1a7b806af5079Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_8517d9c8b73e866553a1a7b806af5079Structure),
                    this.attr("Msg_type", "msg_typeAttr", "msg_type", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Partner_settings", "partner_settingsAttr", "partner_settings", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_412ed7113d9105960615d1c5b5f37301Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_412ed7113d9105960615d1c5b5f37301Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_e89429535bbc3a843fdfa9ff6a750a5fStructure = ST_e89429535bbc3a843fdfa9ff6a750a5fStructureInner;

        var ST_e89429535bbc3a843fdfa9ff6a750a5fStructure = ST_e89429535bbc3a843fdfa9ff6a750a5fStructureInner;
        ST_e89429535bbc3a843fdfa9ff6a750a5fStructure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RC_d69d31319b581746ce9d01515b7635df", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_e89429535bbc3a843fdfa9ff6a750a5fStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_d69d31319b581746ce9d01515b7635dfInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("GetPartnerSettingsResponse", "getPartnerSettingsResponseAttr", "GetPartnerSettingsResponse", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_e89429535bbc3a843fdfa9ff6a750a5fStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_e89429535bbc3a843fdfa9ff6a750a5fStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_d69d31319b581746ce9d01515b7635df(new RC_d69d31319b581746ce9d01515b7635df.RecordClass({
                    getPartnerSettingsResponseAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_d69d31319b581746ce9d01515b7635df = RC_d69d31319b581746ce9d01515b7635dfInner;

        RC_d69d31319b581746ce9d01515b7635dfInner._isAnonymousRecord = true;
        RC_d69d31319b581746ce9d01515b7635dfInner.UniqueId = "d69d3131-9b58-1746-ce9d-01515b7635df";
        var RC_d69d31319b581746ce9d01515b7635df = RC_d69d31319b581746ce9d01515b7635dfInner;
        RC_d69d31319b581746ce9d01515b7635df.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_ac6093dc6d88ec6d2280dfd00ae486ca", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_d69d31319b581746ce9d01515b7635df"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_ac6093dc6d88ec6d2280dfd00ae486ca extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_d69d31319b581746ce9d01515b7635df;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_ac6093dc6d88ec6d2280dfd00ae486ca = RL_ac6093dc6d88ec6d2280dfd00ae486ca;

});

define("RESTAPIWebsocketOfficial.model$RC_aca073df88d40d31252fa904cba1bb39", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_6cf1ba858957788c000fe8d27578f9c1Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_aca073df88d40d31252fa904cba1bb39Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Standard", "standardAttr", "Standard", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_6cf1ba858957788c000fe8d27578f9c1Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_6cf1ba858957788c000fe8d27578f9c1Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_aca073df88d40d31252fa904cba1bb39(new RC_aca073df88d40d31252fa904cba1bb39.RecordClass({
                    standardAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_aca073df88d40d31252fa904cba1bb39 = RC_aca073df88d40d31252fa904cba1bb39Inner;

        RC_aca073df88d40d31252fa904cba1bb39Inner._isAnonymousRecord = true;
        RC_aca073df88d40d31252fa904cba1bb39Inner.UniqueId = "aca073df-88d4-0d31-252f-a904cba1bb39";
        var RC_aca073df88d40d31252fa904cba1bb39 = RC_aca073df88d40d31252fa904cba1bb39Inner;
        RC_aca073df88d40d31252fa904cba1bb39.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RC_ad1368b49b01cac105fab51dcf07c686", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_8e8af6ab08708eb9bf2a2c09b57c23f5Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_ad1368b49b01cac105fab51dcf07c686Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("PostCashierFiatResponse", "postCashierFiatResponseAttr", "PostCashierFiatResponse", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_8e8af6ab08708eb9bf2a2c09b57c23f5Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_8e8af6ab08708eb9bf2a2c09b57c23f5Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_ad1368b49b01cac105fab51dcf07c686(new RC_ad1368b49b01cac105fab51dcf07c686.RecordClass({
                    postCashierFiatResponseAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_ad1368b49b01cac105fab51dcf07c686 = RC_ad1368b49b01cac105fab51dcf07c686Inner;

        RC_ad1368b49b01cac105fab51dcf07c686Inner._isAnonymousRecord = true;
        RC_ad1368b49b01cac105fab51dcf07c686Inner.UniqueId = "ad1368b4-9b01-cac1-05fa-b51dcf07c686";
        var RC_ad1368b49b01cac105fab51dcf07c686 = RC_ad1368b49b01cac105fab51dcf07c686Inner;
        RC_ad1368b49b01cac105fab51dcf07c686.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RC_ad160031f42d1788007448cccfc906ac", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_7a752455e27bb9ea87d724bbb902dd16Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_ad160031f42d1788007448cccfc906acInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("PostTradingPlatformAvailableAccountResponseMT5", "postTradingPlatformAvailableAccountResponseMT5Attr", "PostTradingPlatformAvailableAccountResponseMT5", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_7a752455e27bb9ea87d724bbb902dd16Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_7a752455e27bb9ea87d724bbb902dd16Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_ad160031f42d1788007448cccfc906ac(new RC_ad160031f42d1788007448cccfc906ac.RecordClass({
                    postTradingPlatformAvailableAccountResponseMT5Attr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_ad160031f42d1788007448cccfc906ac = RC_ad160031f42d1788007448cccfc906acInner;

        RC_ad160031f42d1788007448cccfc906acInner._isAnonymousRecord = true;
        RC_ad160031f42d1788007448cccfc906acInner.UniqueId = "ad160031-f42d-1788-0074-48cccfc906ac";
        var RC_ad160031f42d1788007448cccfc906ac = RC_ad160031f42d1788007448cccfc906acInner;
        RC_ad160031f42d1788007448cccfc906ac.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RC_ada7ae2f7fcadfe9ad4cb9dbd1c4caf8", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_159cd2ead3b4ce7cf017e33699885453Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_ada7ae2f7fcadfe9ad4cb9dbd1c4caf8Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Zero_spread", "zero_spreadAttr", "Zero_spread", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_159cd2ead3b4ce7cf017e33699885453Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_159cd2ead3b4ce7cf017e33699885453Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_ada7ae2f7fcadfe9ad4cb9dbd1c4caf8(new RC_ada7ae2f7fcadfe9ad4cb9dbd1c4caf8.RecordClass({
                    zero_spreadAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_ada7ae2f7fcadfe9ad4cb9dbd1c4caf8 = RC_ada7ae2f7fcadfe9ad4cb9dbd1c4caf8Inner;

        RC_ada7ae2f7fcadfe9ad4cb9dbd1c4caf8Inner._isAnonymousRecord = true;
        RC_ada7ae2f7fcadfe9ad4cb9dbd1c4caf8Inner.UniqueId = "ada7ae2f-7fca-dfe9-ad4c-b9dbd1c4caf8";
        var RC_ada7ae2f7fcadfe9ad4cb9dbd1c4caf8 = RC_ada7ae2f7fcadfe9ad4cb9dbd1c4caf8Inner;
        RC_ada7ae2f7fcadfe9ad4cb9dbd1c4caf8.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RC_e62fa91ce8ed0a38e810cad8c726da2f", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_5b838c70a2bbb273d7a479efa1e8ea87Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_e62fa91ce8ed0a38e810cad8c726da2fInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Commodity", "commodityAttr", "Commodity", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_5b838c70a2bbb273d7a479efa1e8ea87Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_5b838c70a2bbb273d7a479efa1e8ea87Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_e62fa91ce8ed0a38e810cad8c726da2f(new RC_e62fa91ce8ed0a38e810cad8c726da2f.RecordClass({
                    commodityAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_e62fa91ce8ed0a38e810cad8c726da2f = RC_e62fa91ce8ed0a38e810cad8c726da2fInner;

        RC_e62fa91ce8ed0a38e810cad8c726da2fInner._isAnonymousRecord = true;
        RC_e62fa91ce8ed0a38e810cad8c726da2fInner.UniqueId = "e62fa91c-e8ed-0a38-e810-cad8c726da2f";
        var RC_e62fa91ce8ed0a38e810cad8c726da2f = RC_e62fa91ce8ed0a38e810cad8c726da2fInner;
        RC_e62fa91ce8ed0a38e810cad8c726da2f.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_aecf700fcd9c0ef5df9dda4dac8947af", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_e62fa91ce8ed0a38e810cad8c726da2f"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_aecf700fcd9c0ef5df9dda4dac8947af extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_e62fa91ce8ed0a38e810cad8c726da2f;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_aecf700fcd9c0ef5df9dda4dac8947af = RL_aecf700fcd9c0ef5df9dda4dac8947af;

});

define("RESTAPIWebsocketOfficial.model$RL_b045e9b0e4d1bde192865267e3d1c52b", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_7f36dbf26349b8c78224f133e993735e"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_b045e9b0e4d1bde192865267e3d1c52b extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_7f36dbf26349b8c78224f133e993735e;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_b045e9b0e4d1bde192865267e3d1c52b = RL_b045e9b0e4d1bde192865267e3d1c52b;

});

define("RESTAPIWebsocketOfficial.model$RL_b12f7a71666929e6ceec6559f200d213", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_1c923b28044712e7268167783ecfdfbeStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_b12f7a71666929e6ceec6559f200d213 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_1c923b28044712e7268167783ecfdfbeStructure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_b12f7a71666929e6ceec6559f200d213 = RL_b12f7a71666929e6ceec6559f200d213;

});

define("RESTAPIWebsocketOfficial.model$RL_b15112cdeeac0d3ba922a9de50cd9ca3", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_b5532fbd5672db40752d556a46e96eaeStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_b15112cdeeac0d3ba922a9de50cd9ca3 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_b5532fbd5672db40752d556a46e96eaeStructure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_b15112cdeeac0d3ba922a9de50cd9ca3 = RL_b15112cdeeac0d3ba922a9de50cd9ca3;

});

define("RESTAPIWebsocketOfficial.model$RC_b17c3526d6deec2ea51fe6ca6895e3ea", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_95720c0132c7c8b07166d48790a0a129Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_b17c3526d6deec2ea51fe6ca6895e3eaInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Echo_req7", "echo_req7Attr", "Echo_req7", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_95720c0132c7c8b07166d48790a0a129Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_95720c0132c7c8b07166d48790a0a129Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_b17c3526d6deec2ea51fe6ca6895e3ea(new RC_b17c3526d6deec2ea51fe6ca6895e3ea.RecordClass({
                    echo_req7Attr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_b17c3526d6deec2ea51fe6ca6895e3ea = RC_b17c3526d6deec2ea51fe6ca6895e3eaInner;

        RC_b17c3526d6deec2ea51fe6ca6895e3eaInner._isAnonymousRecord = true;
        RC_b17c3526d6deec2ea51fe6ca6895e3eaInner.UniqueId = "b17c3526-d6de-ec2e-a51f-e6ca6895e3ea";
        var RC_b17c3526d6deec2ea51fe6ca6895e3ea = RC_b17c3526d6deec2ea51fe6ca6895e3eaInner;
        RC_b17c3526d6deec2ea51fe6ca6895e3ea.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RC_f1102e0e903c36b89dd3a8ad41701e5f", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_3a8fd8b28bfeab1bd267f04e730ca9e6Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_f1102e0e903c36b89dd3a8ad41701e5fInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("PostTradingPlatformAvailableAccountsRequest", "postTradingPlatformAvailableAccountsRequestAttr", "PostTradingPlatformAvailableAccountsRequest", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_3a8fd8b28bfeab1bd267f04e730ca9e6Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_3a8fd8b28bfeab1bd267f04e730ca9e6Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_f1102e0e903c36b89dd3a8ad41701e5f(new RC_f1102e0e903c36b89dd3a8ad41701e5f.RecordClass({
                    postTradingPlatformAvailableAccountsRequestAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_f1102e0e903c36b89dd3a8ad41701e5f = RC_f1102e0e903c36b89dd3a8ad41701e5fInner;

        RC_f1102e0e903c36b89dd3a8ad41701e5fInner._isAnonymousRecord = true;
        RC_f1102e0e903c36b89dd3a8ad41701e5fInner.UniqueId = "f1102e0e-903c-36b8-9dd3-a8ad41701e5f";
        var RC_f1102e0e903c36b89dd3a8ad41701e5f = RC_f1102e0e903c36b89dd3a8ad41701e5fInner;
        RC_f1102e0e903c36b89dd3a8ad41701e5f.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_b180a59f8f5def3150ec40c96b1bacf2", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_f1102e0e903c36b89dd3a8ad41701e5f"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_b180a59f8f5def3150ec40c96b1bacf2 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_f1102e0e903c36b89dd3a8ad41701e5f;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_b180a59f8f5def3150ec40c96b1bacf2 = RL_b180a59f8f5def3150ec40c96b1bacf2;

});

define("RESTAPIWebsocketOfficial.model$RC_b1f9a62aa1eb0e7979aaceb89243cea9", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_5ba9c80e587385c94102779d8eab301cStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_b1f9a62aa1eb0e7979aaceb89243cea9Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("AllAccountTypePlatforms", "allAccountTypePlatformsAttr", "AllAccountTypePlatforms", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_5ba9c80e587385c94102779d8eab301cStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_5ba9c80e587385c94102779d8eab301cStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_b1f9a62aa1eb0e7979aaceb89243cea9(new RC_b1f9a62aa1eb0e7979aaceb89243cea9.RecordClass({
                    allAccountTypePlatformsAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_b1f9a62aa1eb0e7979aaceb89243cea9 = RC_b1f9a62aa1eb0e7979aaceb89243cea9Inner;

        RC_b1f9a62aa1eb0e7979aaceb89243cea9Inner._isAnonymousRecord = true;
        RC_b1f9a62aa1eb0e7979aaceb89243cea9Inner.UniqueId = "b1f9a62a-a1eb-0e79-79aa-ceb89243cea9";
        var RC_b1f9a62aa1eb0e7979aaceb89243cea9 = RC_b1f9a62aa1eb0e7979aaceb89243cea9Inner;
        RC_b1f9a62aa1eb0e7979aaceb89243cea9.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_b2061216c3d82010dc8c3226204dac46", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_7de6f1e2c99800d3c6e1aaeb14f3afdd"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_b2061216c3d82010dc8c3226204dac46 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_7de6f1e2c99800d3c6e1aaeb14f3afdd;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_b2061216c3d82010dc8c3226204dac46 = RL_b2061216c3d82010dc8c3226204dac46;

});

define("RESTAPIWebsocketOfficial.model$RL_b2117356ef65d3231f992a69f03538c4", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_75725e65d106c1568a850780233a08baStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_b2117356ef65d3231f992a69f03538c4 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_75725e65d106c1568a850780233a08baStructure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_b2117356ef65d3231f992a69f03538c4 = RL_b2117356ef65d3231f992a69f03538c4;

});

define("RESTAPIWebsocketOfficial.model$RL_b36cbf00535b19d854633a6aebe03044", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_7b274cb5f96a8ac297db685000547ab1"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_b36cbf00535b19d854633a6aebe03044 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_7b274cb5f96a8ac297db685000547ab1;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_b36cbf00535b19d854633a6aebe03044 = RL_b36cbf00535b19d854633a6aebe03044;

});

define("RESTAPIWebsocketOfficial.model$RL_b412922a0a29f17092810fe62dd48743", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_191172c94e64292c8bf1a2dce4b5e876"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_b412922a0a29f17092810fe62dd48743 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_191172c94e64292c8bf1a2dce4b5e876;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_b412922a0a29f17092810fe62dd48743 = RL_b412922a0a29f17092810fe62dd48743;

});

define("RESTAPIWebsocketOfficial.model$RL_b50ecc69bf1d35f5563a812d2e69bf9c", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_d1246d83c419f598cf8e4e18d5276097Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_b50ecc69bf1d35f5563a812d2e69bf9c extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_d1246d83c419f598cf8e4e18d5276097Structure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_b50ecc69bf1d35f5563a812d2e69bf9c = RL_b50ecc69bf1d35f5563a812d2e69bf9c;

});

define("RESTAPIWebsocketOfficial.model$RL_b60c30f70d5c7d39a851eeb74ad499d4", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_d12f6a9e29cbb97250918a3fc7bc632aStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_b60c30f70d5c7d39a851eeb74ad499d4 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_d12f6a9e29cbb97250918a3fc7bc632aStructure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_b60c30f70d5c7d39a851eeb74ad499d4 = RL_b60c30f70d5c7d39a851eeb74ad499d4;

});

define("RESTAPIWebsocketOfficial.model$RC_b66f106ffca3ec8b9893c19faf2ae442", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_711f7ad16da273bf9e6563303a17ad00Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_b66f106ffca3ec8b9893c19faf2ae442Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Echo_req11", "echo_req11Attr", "Echo_req11", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_711f7ad16da273bf9e6563303a17ad00Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_711f7ad16da273bf9e6563303a17ad00Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_b66f106ffca3ec8b9893c19faf2ae442(new RC_b66f106ffca3ec8b9893c19faf2ae442.RecordClass({
                    echo_req11Attr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_b66f106ffca3ec8b9893c19faf2ae442 = RC_b66f106ffca3ec8b9893c19faf2ae442Inner;

        RC_b66f106ffca3ec8b9893c19faf2ae442Inner._isAnonymousRecord = true;
        RC_b66f106ffca3ec8b9893c19faf2ae442Inner.UniqueId = "b66f106f-fca3-ec8b-9893-c19faf2ae442";
        var RC_b66f106ffca3ec8b9893c19faf2ae442 = RC_b66f106ffca3ec8b9893c19faf2ae442Inner;
        RC_b66f106ffca3ec8b9893c19faf2ae442.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_b6f673b4dc1f733bcacc3d98d65cf048", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_aebb52c5d802a6aaa646a74179c770faStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_b6f673b4dc1f733bcacc3d98d65cf048 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_aebb52c5d802a6aaa646a74179c770faStructure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_b6f673b4dc1f733bcacc3d98d65cf048 = RL_b6f673b4dc1f733bcacc3d98d65cf048;

});

define("RESTAPIWebsocketOfficial.model$RL_b7369d5f4cafbbcd5483c083235b9d49", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_3ce5a0117187c9d1b6ee0d6f65f07553"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_b7369d5f4cafbbcd5483c083235b9d49 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_3ce5a0117187c9d1b6ee0d6f65f07553;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_b7369d5f4cafbbcd5483c083235b9d49 = RL_b7369d5f4cafbbcd5483c083235b9d49;

});

define("RESTAPIWebsocketOfficial.model$RL_b7a05579761da982186db0cb56ca5900", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_9eb2d1268b055c9ba20852d2758a5050Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_b7a05579761da982186db0cb56ca5900 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_9eb2d1268b055c9ba20852d2758a5050Structure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_b7a05579761da982186db0cb56ca5900 = RL_b7a05579761da982186db0cb56ca5900;

});

define("RESTAPIWebsocketOfficial.model$RC_b7f1349ce55688cbc04cb6b803b689dd", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_18a578e4f8f25852aec011d4055e28d1Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_b7f1349ce55688cbc04cb6b803b689ddInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("HTTPRequest", "hTTPRequestAttr", "HTTPRequest", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_18a578e4f8f25852aec011d4055e28d1Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_18a578e4f8f25852aec011d4055e28d1Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_b7f1349ce55688cbc04cb6b803b689dd(new RC_b7f1349ce55688cbc04cb6b803b689dd.RecordClass({
                    hTTPRequestAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_b7f1349ce55688cbc04cb6b803b689dd = RC_b7f1349ce55688cbc04cb6b803b689ddInner;

        RC_b7f1349ce55688cbc04cb6b803b689ddInner._isAnonymousRecord = true;
        RC_b7f1349ce55688cbc04cb6b803b689ddInner.UniqueId = "b7f1349c-e556-88cb-c04c-b6b803b689dd";
        var RC_b7f1349ce55688cbc04cb6b803b689dd = RC_b7f1349ce55688cbc04cb6b803b689ddInner;
        RC_b7f1349ce55688cbc04cb6b803b689dd.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RC_b8272ebcb560c4fc5c96482b705582ba", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_9b4c1d7f5790df008534dfd8d1c97a7cStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_b8272ebcb560c4fc5c96482b705582baInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Ownership", "ownershipAttr", "Ownership", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_9b4c1d7f5790df008534dfd8d1c97a7cStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_9b4c1d7f5790df008534dfd8d1c97a7cStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_b8272ebcb560c4fc5c96482b705582ba(new RC_b8272ebcb560c4fc5c96482b705582ba.RecordClass({
                    ownershipAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_b8272ebcb560c4fc5c96482b705582ba = RC_b8272ebcb560c4fc5c96482b705582baInner;

        RC_b8272ebcb560c4fc5c96482b705582baInner._isAnonymousRecord = true;
        RC_b8272ebcb560c4fc5c96482b705582baInner.UniqueId = "b8272ebc-b560-c4fc-5c96-482b705582ba";
        var RC_b8272ebcb560c4fc5c96482b705582ba = RC_b8272ebcb560c4fc5c96482b705582baInner;
        RC_b8272ebcb560c4fc5c96482b705582ba.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_b88c0ed17712805463deb6be1a1ca760", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_5b838c70a2bbb273d7a479efa1e8ea87Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_b88c0ed17712805463deb6be1a1ca760 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_5b838c70a2bbb273d7a479efa1e8ea87Structure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_b88c0ed17712805463deb6be1a1ca760 = RL_b88c0ed17712805463deb6be1a1ca760;

});

define("RESTAPIWebsocketOfficial.model$ST_e3b9823599cdef8012785f8875d8da38Structure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_26b581032ad004235c0d5c566e39b1dcStructure", "RESTAPIWebsocketOfficial.model$ST_9d1062fa4257a03d2f3c4e1f302af3d7Structure", "RESTAPIWebsocketOfficial.model$RL_535207a4cf1e4bc1dcc85faad9d4014e"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_e3b9823599cdef8012785f8875d8da38StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Echo_req", "echo_reqAttr", "echo_req", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_26b581032ad004235c0d5c566e39b1dcStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_26b581032ad004235c0d5c566e39b1dcStructure),
                    this.attr("Msg_type", "msg_typeAttr", "msg_type", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Trading_platform_status", "trading_platform_statusAttr", "trading_platform_status", false, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.RL_535207a4cf1e4bc1dcc85faad9d4014e());
                    }, true, RESTAPIWebsocketOfficialModel.RL_535207a4cf1e4bc1dcc85faad9d4014e)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_e3b9823599cdef8012785f8875d8da38Structure = ST_e3b9823599cdef8012785f8875d8da38StructureInner;

        var ST_e3b9823599cdef8012785f8875d8da38Structure = ST_e3b9823599cdef8012785f8875d8da38StructureInner;
        ST_e3b9823599cdef8012785f8875d8da38Structure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_b903ad96980478d7874f689155c88d6c", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_e3b9823599cdef8012785f8875d8da38Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_b903ad96980478d7874f689155c88d6c extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_e3b9823599cdef8012785f8875d8da38Structure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_b903ad96980478d7874f689155c88d6c = RL_b903ad96980478d7874f689155c88d6c;

});

define("RESTAPIWebsocketOfficial.model$RC_cdef44d865812d5f122c87c3e4a61605", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_a61a52fb9a0db4861b8e2b8110ef16c4Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_cdef44d865812d5f122c87c3e4a61605Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Api", "apiAttr", "Api", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_a61a52fb9a0db4861b8e2b8110ef16c4Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_a61a52fb9a0db4861b8e2b8110ef16c4Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_cdef44d865812d5f122c87c3e4a61605(new RC_cdef44d865812d5f122c87c3e4a61605.RecordClass({
                    apiAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_cdef44d865812d5f122c87c3e4a61605 = RC_cdef44d865812d5f122c87c3e4a61605Inner;

        RC_cdef44d865812d5f122c87c3e4a61605Inner._isAnonymousRecord = true;
        RC_cdef44d865812d5f122c87c3e4a61605Inner.UniqueId = "cdef44d8-6581-2d5f-122c-87c3e4a61605";
        var RC_cdef44d865812d5f122c87c3e4a61605 = RC_cdef44d865812d5f122c87c3e4a61605Inner;
        RC_cdef44d865812d5f122c87c3e4a61605.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_bbe2c440b74c8377ca81d2556840a89a", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_cdef44d865812d5f122c87c3e4a61605"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_bbe2c440b74c8377ca81d2556840a89a extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_cdef44d865812d5f122c87c3e4a61605;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_bbe2c440b74c8377ca81d2556840a89a = RL_bbe2c440b74c8377ca81d2556840a89a;

});

define("RESTAPIWebsocketOfficial.model$RL_bc8fce7a43e25a8fbc78edae6c3b327a", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_18a578e4f8f25852aec011d4055e28d1Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_bc8fce7a43e25a8fbc78edae6c3b327a extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_18a578e4f8f25852aec011d4055e28d1Structure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_bc8fce7a43e25a8fbc78edae6c3b327a = RL_bc8fce7a43e25a8fbc78edae6c3b327a;

});

define("RESTAPIWebsocketOfficial.model$RL_be5a886e16881f9049697d324754da74", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_6bf0b0ffc6301cb068818135121fba90"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_be5a886e16881f9049697d324754da74 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_6bf0b0ffc6301cb068818135121fba90;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_be5a886e16881f9049697d324754da74 = RL_be5a886e16881f9049697d324754da74;

});

define("RESTAPIWebsocketOfficial.model$RL_bfdb0a00a150c65e1e25049482edba6b", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_61df84f9969928991e575f5d3cdeb6cf"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_bfdb0a00a150c65e1e25049482edba6b extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_61df84f9969928991e575f5d3cdeb6cf;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_bfdb0a00a150c65e1e25049482edba6b = RL_bfdb0a00a150c65e1e25049482edba6b;

});

define("RESTAPIWebsocketOfficial.model$RL_c1b551b639cf44782c03b977f31ed021", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_a5fc3d62312a89b32ae393e0571bcad7"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_c1b551b639cf44782c03b977f31ed021 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_a5fc3d62312a89b32ae393e0571bcad7;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_c1b551b639cf44782c03b977f31ed021 = RL_c1b551b639cf44782c03b977f31ed021;

});

define("RESTAPIWebsocketOfficial.model$RL_c229edfd5a861b3989c3898b88a89f90", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_ae40a5e8008c1f0252b9952ccf57ee94Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_c229edfd5a861b3989c3898b88a89f90 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_ae40a5e8008c1f0252b9952ccf57ee94Structure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_c229edfd5a861b3989c3898b88a89f90 = RL_c229edfd5a861b3989c3898b88a89f90;

});

define("RESTAPIWebsocketOfficial.model$RC_e3b76e5c6918ce63091acb36b11f3fe2", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_2361699202fda01d7c8ade7cab583650Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_e3b76e5c6918ce63091acb36b11f3fe2Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Mt5_login_listItem", "mt5_login_listItemAttr", "Mt5_login_listItem", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_2361699202fda01d7c8ade7cab583650Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_2361699202fda01d7c8ade7cab583650Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_e3b76e5c6918ce63091acb36b11f3fe2(new RC_e3b76e5c6918ce63091acb36b11f3fe2.RecordClass({
                    mt5_login_listItemAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_e3b76e5c6918ce63091acb36b11f3fe2 = RC_e3b76e5c6918ce63091acb36b11f3fe2Inner;

        RC_e3b76e5c6918ce63091acb36b11f3fe2Inner._isAnonymousRecord = true;
        RC_e3b76e5c6918ce63091acb36b11f3fe2Inner.UniqueId = "e3b76e5c-6918-ce63-091a-cb36b11f3fe2";
        var RC_e3b76e5c6918ce63091acb36b11f3fe2 = RC_e3b76e5c6918ce63091acb36b11f3fe2Inner;
        RC_e3b76e5c6918ce63091acb36b11f3fe2.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_c2ff81a5529fadc0682cd0e233934577", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_e3b76e5c6918ce63091acb36b11f3fe2"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_c2ff81a5529fadc0682cd0e233934577 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_e3b76e5c6918ce63091acb36b11f3fe2;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_c2ff81a5529fadc0682cd0e233934577 = RL_c2ff81a5529fadc0682cd0e233934577;

});

define("RESTAPIWebsocketOfficial.model$RL_c336d58dd96d2c1d5470075e96b2dfe2", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_a8681099a96d9738667779eaaccedc4a"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_c336d58dd96d2c1d5470075e96b2dfe2 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_a8681099a96d9738667779eaaccedc4a;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_c336d58dd96d2c1d5470075e96b2dfe2 = RL_c336d58dd96d2c1d5470075e96b2dfe2;

});

define("RESTAPIWebsocketOfficial.model$RL_c35bbded731f8ecb695157b429b6b213", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_ec58aaccd7b190d47a2dd7159fa0d866Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_c35bbded731f8ecb695157b429b6b213 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_ec58aaccd7b190d47a2dd7159fa0d866Structure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_c35bbded731f8ecb695157b429b6b213 = RL_c35bbded731f8ecb695157b429b6b213;

});

define("RESTAPIWebsocketOfficial.model$RL_c4fc3be75543c3c7832c730391e11388", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_b7f1349ce55688cbc04cb6b803b689dd"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_c4fc3be75543c3c7832c730391e11388 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_b7f1349ce55688cbc04cb6b803b689dd;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_c4fc3be75543c3c7832c730391e11388 = RL_c4fc3be75543c3c7832c730391e11388;

});

define("RESTAPIWebsocketOfficial.model$RC_c567cbac2969babec31508d5ba9b8248", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_42e091eee706086ba45ab77d0ef6821fStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_c567cbac2969babec31508d5ba9b8248Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("PostAccountListResponse", "postAccountListResponseAttr", "PostAccountListResponse", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_42e091eee706086ba45ab77d0ef6821fStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_42e091eee706086ba45ab77d0ef6821fStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_c567cbac2969babec31508d5ba9b8248(new RC_c567cbac2969babec31508d5ba9b8248.RecordClass({
                    postAccountListResponseAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_c567cbac2969babec31508d5ba9b8248 = RC_c567cbac2969babec31508d5ba9b8248Inner;

        RC_c567cbac2969babec31508d5ba9b8248Inner._isAnonymousRecord = true;
        RC_c567cbac2969babec31508d5ba9b8248Inner.UniqueId = "c567cbac-2969-babe-c315-08d5ba9b8248";
        var RC_c567cbac2969babec31508d5ba9b8248 = RC_c567cbac2969babec31508d5ba9b8248Inner;
        RC_c567cbac2969babec31508d5ba9b8248.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_c5909a8b1377430a2e36d2ce210bb739", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_b1f9a62aa1eb0e7979aaceb89243cea9"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_c5909a8b1377430a2e36d2ce210bb739 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_b1f9a62aa1eb0e7979aaceb89243cea9;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_c5909a8b1377430a2e36d2ce210bb739 = RL_c5909a8b1377430a2e36d2ce210bb739;

});

define("RESTAPIWebsocketOfficial.model$RL_c5c6c21effa285fee00f8dc17d9ba72f", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_2f46c6fecf81fe9d91763f789141eec9Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_c5c6c21effa285fee00f8dc17d9ba72f extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_2f46c6fecf81fe9d91763f789141eec9Structure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_c5c6c21effa285fee00f8dc17d9ba72f = RL_c5c6c21effa285fee00f8dc17d9ba72f;

});

define("RESTAPIWebsocketOfficial.model$RL_c7f26a72e57a4dddb6b0448d22dc5863", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_857e70f98678e5b68f53de5829bd685aStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_c7f26a72e57a4dddb6b0448d22dc5863 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_857e70f98678e5b68f53de5829bd685aStructure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_c7f26a72e57a4dddb6b0448d22dc5863 = RL_c7f26a72e57a4dddb6b0448d22dc5863;

});

define("RESTAPIWebsocketOfficial.model$RL_c8ec1067f658d445cb4bb406a536d6e4", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_2bf25d62d530e43a49ce5fb7ed436ea0"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_c8ec1067f658d445cb4bb406a536d6e4 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_2bf25d62d530e43a49ce5fb7ed436ea0;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_c8ec1067f658d445cb4bb406a536d6e4 = RL_c8ec1067f658d445cb4bb406a536d6e4;

});

define("RESTAPIWebsocketOfficial.model$RL_c9802391ccf1fcf76850377db0a5a2bd", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_7a752455e27bb9ea87d724bbb902dd16Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_c9802391ccf1fcf76850377db0a5a2bd extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_7a752455e27bb9ea87d724bbb902dd16Structure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_c9802391ccf1fcf76850377db0a5a2bd = RL_c9802391ccf1fcf76850377db0a5a2bd;

});

define("RESTAPIWebsocketOfficial.model$RL_cad88a69fdf904df26f5066dd5cffb79", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_ae14fa1d3d419850de9a85b162df7c73Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_cad88a69fdf904df26f5066dd5cffb79 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_ae14fa1d3d419850de9a85b162df7c73Structure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_cad88a69fdf904df26f5066dd5cffb79 = RL_cad88a69fdf904df26f5066dd5cffb79;

});

define("RESTAPIWebsocketOfficial.model$RL_cb7f36c20c1100a526f054e4bd5ee331", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_870defcbb5bf4a58a2a009971edc7d07Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_cb7f36c20c1100a526f054e4bd5ee331 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_870defcbb5bf4a58a2a009971edc7d07Structure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_cb7f36c20c1100a526f054e4bd5ee331 = RL_cb7f36c20c1100a526f054e4bd5ee331;

});

define("RESTAPIWebsocketOfficial.model$ST_f502318fbe2f943e6cfbba125766780aStructure", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_e5081373b9c17bf97c001a46f1739ffeStructure", "RESTAPIWebsocketOfficial.model$ST_450f06937a42e6bd68832beac9fd4297Structure", "RESTAPIWebsocketOfficial.model$ST_8517d9c8b73e866553a1a7b806af5079Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class ST_f502318fbe2f943e6cfbba125766780aStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Authorize", "authorizeAttr", "authorize", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_e5081373b9c17bf97c001a46f1739ffeStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_e5081373b9c17bf97c001a46f1739ffeStructure),
                    this.attr("Echo_req", "echo_reqAttr", "echo_req", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_450f06937a42e6bd68832beac9fd4297Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_450f06937a42e6bd68832beac9fd4297Structure),
                    this.attr("Msg_type", "msg_typeAttr", "msg_type", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Error", "errorAttr", "error", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_8517d9c8b73e866553a1a7b806af5079Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_8517d9c8b73e866553a1a7b806af5079Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        RESTAPIWebsocketOfficialModel.ST_f502318fbe2f943e6cfbba125766780aStructure = ST_f502318fbe2f943e6cfbba125766780aStructureInner;

        var ST_f502318fbe2f943e6cfbba125766780aStructure = ST_f502318fbe2f943e6cfbba125766780aStructureInner;
        ST_f502318fbe2f943e6cfbba125766780aStructure.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_cbd45ffb64bc9c47450a3b6cf63434c5", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_f502318fbe2f943e6cfbba125766780aStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_cbd45ffb64bc9c47450a3b6cf63434c5 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_f502318fbe2f943e6cfbba125766780aStructure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_cbd45ffb64bc9c47450a3b6cf63434c5 = RL_cbd45ffb64bc9c47450a3b6cf63434c5;

});

define("RESTAPIWebsocketOfficial.model$RL_cead5d196d772d870bc3f7d4fa164d8c", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_6eafdf6bd9852632690d0672a511a98fStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_cead5d196d772d870bc3f7d4fa164d8c extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_6eafdf6bd9852632690d0672a511a98fStructure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_cead5d196d772d870bc3f7d4fa164d8c = RL_cead5d196d772d870bc3f7d4fa164d8c;

});

define("RESTAPIWebsocketOfficial.model$RL_ceea93824bcd8ed549fcfcd4e2f5b807", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_cef0b20847ad169551dbf51efb01e613Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_ceea93824bcd8ed549fcfcd4e2f5b807 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_cef0b20847ad169551dbf51efb01e613Structure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_ceea93824bcd8ed549fcfcd4e2f5b807 = RL_ceea93824bcd8ed549fcfcd4e2f5b807;

});

define("RESTAPIWebsocketOfficial.model$RL_ceeb5cf67227d230352f98416e3a5708", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_af7c8c24e0881fcad517d74c916f7352Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_ceeb5cf67227d230352f98416e3a5708 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_af7c8c24e0881fcad517d74c916f7352Structure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_ceeb5cf67227d230352f98416e3a5708 = RL_ceeb5cf67227d230352f98416e3a5708;

});

define("RESTAPIWebsocketOfficial.model$RL_d020274c0ef0b03336f86133d39e8e5d", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_c77c7364c5e093c1d601fe854bbf1fd7Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_d020274c0ef0b03336f86133d39e8e5d extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_c77c7364c5e093c1d601fe854bbf1fd7Structure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_d020274c0ef0b03336f86133d39e8e5d = RL_d020274c0ef0b03336f86133d39e8e5d;

});

define("RESTAPIWebsocketOfficial.model$RL_d085e8d032d69f30c1ff1fcbd1a431a3", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_b8272ebcb560c4fc5c96482b705582ba"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_d085e8d032d69f30c1ff1fcbd1a431a3 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_b8272ebcb560c4fc5c96482b705582ba;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_d085e8d032d69f30c1ff1fcbd1a431a3 = RL_d085e8d032d69f30c1ff1fcbd1a431a3;

});

define("RESTAPIWebsocketOfficial.model$RL_d170df24c2e1d399274b953b3ea7ee8d", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_ad160031f42d1788007448cccfc906ac"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_d170df24c2e1d399274b953b3ea7ee8d extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_ad160031f42d1788007448cccfc906ac;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_d170df24c2e1d399274b953b3ea7ee8d = RL_d170df24c2e1d399274b953b3ea7ee8d;

});

define("RESTAPIWebsocketOfficial.model$RL_d1730959bead5ace9709263653c5c805", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_84a0cd0731252abf8ed782a87ccaad58Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_d1730959bead5ace9709263653c5c805 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_84a0cd0731252abf8ed782a87ccaad58Structure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_d1730959bead5ace9709263653c5c805 = RL_d1730959bead5ace9709263653c5c805;

});

define("RESTAPIWebsocketOfficial.model$RL_d2789538425b9b75ea10631ae0abd383", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_c864353821feed79663806f3e445d40eStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_d2789538425b9b75ea10631ae0abd383 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_c864353821feed79663806f3e445d40eStructure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_d2789538425b9b75ea10631ae0abd383 = RL_d2789538425b9b75ea10631ae0abd383;

});

define("RESTAPIWebsocketOfficial.model$RL_d2d0068f3a07cb94ca20f9308415ffee", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_2f457e0a5b13526850516eea23ae0e9aStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_d2d0068f3a07cb94ca20f9308415ffee extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_2f457e0a5b13526850516eea23ae0e9aStructure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_d2d0068f3a07cb94ca20f9308415ffee = RL_d2d0068f3a07cb94ca20f9308415ffee;

});

define("RESTAPIWebsocketOfficial.model$RL_d3a7744852f4b782bcbb3dc9b2b5a3a2", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_123df4fc5615aac2800d1fa4847bc440Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_d3a7744852f4b782bcbb3dc9b2b5a3a2 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_123df4fc5615aac2800d1fa4847bc440Structure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_d3a7744852f4b782bcbb3dc9b2b5a3a2 = RL_d3a7744852f4b782bcbb3dc9b2b5a3a2;

});

define("RESTAPIWebsocketOfficial.model$RC_da31320f88166d864fc396c0fddbecc9", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_c77c7364c5e093c1d601fe854bbf1fd7Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
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

        RESTAPIWebsocketOfficialModel.RC_da31320f88166d864fc396c0fddbecc9 = RC_da31320f88166d864fc396c0fddbecc9Inner;

        RC_da31320f88166d864fc396c0fddbecc9Inner._isAnonymousRecord = true;
        RC_da31320f88166d864fc396c0fddbecc9Inner.UniqueId = "da31320f-8816-6d86-4fc3-96c0fddbecc9";
        var RC_da31320f88166d864fc396c0fddbecc9 = RC_da31320f88166d864fc396c0fddbecc9Inner;
        RC_da31320f88166d864fc396c0fddbecc9.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_d40367d2d21dcbcbaa0f7166365925a3", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_da31320f88166d864fc396c0fddbecc9"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_d40367d2d21dcbcbaa0f7166365925a3 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_da31320f88166d864fc396c0fddbecc9;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_d40367d2d21dcbcbaa0f7166365925a3 = RL_d40367d2d21dcbcbaa0f7166365925a3;

});

define("RESTAPIWebsocketOfficial.model$RC_d509bf89cda09ba78055eb96d496078b", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_6168fd7b9ba43ed0f5fe1ccbd8f82e90Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_d509bf89cda09ba78055eb96d496078bInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Forex", "forexAttr", "Forex", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_6168fd7b9ba43ed0f5fe1ccbd8f82e90Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_6168fd7b9ba43ed0f5fe1ccbd8f82e90Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_d509bf89cda09ba78055eb96d496078b(new RC_d509bf89cda09ba78055eb96d496078b.RecordClass({
                    forexAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_d509bf89cda09ba78055eb96d496078b = RC_d509bf89cda09ba78055eb96d496078bInner;

        RC_d509bf89cda09ba78055eb96d496078bInner._isAnonymousRecord = true;
        RC_d509bf89cda09ba78055eb96d496078bInner.UniqueId = "d509bf89-cda0-9ba7-8055-eb96d496078b";
        var RC_d509bf89cda09ba78055eb96d496078b = RC_d509bf89cda09ba78055eb96d496078bInner;
        RC_d509bf89cda09ba78055eb96d496078b.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RC_f0c73e6dbd84280986cd2f30c5ab1891", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_bc9f0cd5cd952aeeadf59ee9a5dfb79aStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_f0c73e6dbd84280986cd2f30c5ab1891Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("PostLogoutResponse", "postLogoutResponseAttr", "PostLogoutResponse", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_bc9f0cd5cd952aeeadf59ee9a5dfb79aStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_bc9f0cd5cd952aeeadf59ee9a5dfb79aStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_f0c73e6dbd84280986cd2f30c5ab1891(new RC_f0c73e6dbd84280986cd2f30c5ab1891.RecordClass({
                    postLogoutResponseAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_f0c73e6dbd84280986cd2f30c5ab1891 = RC_f0c73e6dbd84280986cd2f30c5ab1891Inner;

        RC_f0c73e6dbd84280986cd2f30c5ab1891Inner._isAnonymousRecord = true;
        RC_f0c73e6dbd84280986cd2f30c5ab1891Inner.UniqueId = "f0c73e6d-bd84-2809-86cd-2f30c5ab1891";
        var RC_f0c73e6dbd84280986cd2f30c5ab1891 = RC_f0c73e6dbd84280986cd2f30c5ab1891Inner;
        RC_f0c73e6dbd84280986cd2f30c5ab1891.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_d6c2b0b2d82cc83f0e12ff8864bc303a", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_f0c73e6dbd84280986cd2f30c5ab1891"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_d6c2b0b2d82cc83f0e12ff8864bc303a extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_f0c73e6dbd84280986cd2f30c5ab1891;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_d6c2b0b2d82cc83f0e12ff8864bc303a = RL_d6c2b0b2d82cc83f0e12ff8864bc303a;

});

define("RESTAPIWebsocketOfficial.model$RL_d7120c737b749736ea0a72e73d61514e", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_04eaf04e4147681bc07ba614af4e7e78Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_d7120c737b749736ea0a72e73d61514e extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_04eaf04e4147681bc07ba614af4e7e78Structure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_d7120c737b749736ea0a72e73d61514e = RL_d7120c737b749736ea0a72e73d61514e;

});

define("RESTAPIWebsocketOfficial.model$RL_d7b37aab928d287662d2a0dadc210fec", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_b17c3526d6deec2ea51fe6ca6895e3ea"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_d7b37aab928d287662d2a0dadc210fec extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_b17c3526d6deec2ea51fe6ca6895e3ea;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_d7b37aab928d287662d2a0dadc210fec = RL_d7b37aab928d287662d2a0dadc210fec;

});

define("RESTAPIWebsocketOfficial.model$RL_d7c25a5fb9a8943a745839a83027088a", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_131ec4afe292e50694c2940b1e3c9a73"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_d7c25a5fb9a8943a745839a83027088a extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_131ec4afe292e50694c2940b1e3c9a73;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_d7c25a5fb9a8943a745839a83027088a = RL_d7c25a5fb9a8943a745839a83027088a;

});

define("RESTAPIWebsocketOfficial.model$RL_d879fd0f70d45798161ae7b5ea69146c", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_b66f106ffca3ec8b9893c19faf2ae442"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_d879fd0f70d45798161ae7b5ea69146c extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_b66f106ffca3ec8b9893c19faf2ae442;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_d879fd0f70d45798161ae7b5ea69146c = RL_d879fd0f70d45798161ae7b5ea69146c;

});

define("RESTAPIWebsocketOfficial.model$RL_da6c5178f53e986289bf2ed71791858d", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_839b1aebc8b507d4259e4312bdc21d4bStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_da6c5178f53e986289bf2ed71791858d extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_839b1aebc8b507d4259e4312bdc21d4bStructure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_da6c5178f53e986289bf2ed71791858d = RL_da6c5178f53e986289bf2ed71791858d;

});

define("RESTAPIWebsocketOfficial.model$RL_da9f97f6a3c8b98228b608b130222591", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_623a04a7e1c688b7ec133f2b7ca28f8e"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_da9f97f6a3c8b98228b608b130222591 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_623a04a7e1c688b7ec133f2b7ca28f8e;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_da9f97f6a3c8b98228b608b130222591 = RL_da9f97f6a3c8b98228b608b130222591;

});

define("RESTAPIWebsocketOfficial.model$RL_dba1429f774712c36d3ea0b48ab6b63d", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_709b151c5172b8ff1042e5fecf4be0ecStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_dba1429f774712c36d3ea0b48ab6b63d extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_709b151c5172b8ff1042e5fecf4be0ecStructure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_dba1429f774712c36d3ea0b48ab6b63d = RL_dba1429f774712c36d3ea0b48ab6b63d;

});

define("RESTAPIWebsocketOfficial.model$RL_dd08ea713bebe4875033a5f91c469c77", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_a83c53501675e1b1a92dce121c194a38"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_dd08ea713bebe4875033a5f91c469c77 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_a83c53501675e1b1a92dce121c194a38;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_dd08ea713bebe4875033a5f91c469c77 = RL_dd08ea713bebe4875033a5f91c469c77;

});

define("RESTAPIWebsocketOfficial.model$RC_dd79bf27114cbc810592c451d8bd2280", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_b96e8d04448b693f79e4aebf0b6ee4fbStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_dd79bf27114cbc810592c451d8bd2280Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("White_label_link", "white_label_linkAttr", "White_label_link", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_b96e8d04448b693f79e4aebf0b6ee4fbStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_b96e8d04448b693f79e4aebf0b6ee4fbStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_dd79bf27114cbc810592c451d8bd2280(new RC_dd79bf27114cbc810592c451d8bd2280.RecordClass({
                    white_label_linkAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_dd79bf27114cbc810592c451d8bd2280 = RC_dd79bf27114cbc810592c451d8bd2280Inner;

        RC_dd79bf27114cbc810592c451d8bd2280Inner._isAnonymousRecord = true;
        RC_dd79bf27114cbc810592c451d8bd2280Inner.UniqueId = "dd79bf27-114c-bc81-0592-c451d8bd2280";
        var RC_dd79bf27114cbc810592c451d8bd2280 = RC_dd79bf27114cbc810592c451d8bd2280Inner;
        RC_dd79bf27114cbc810592c451d8bd2280.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_dfdebdca8e822b537628659338ad0660", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_159cd2ead3b4ce7cf017e33699885453Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_dfdebdca8e822b537628659338ad0660 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_159cd2ead3b4ce7cf017e33699885453Structure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_dfdebdca8e822b537628659338ad0660 = RL_dfdebdca8e822b537628659338ad0660;

});

define("RESTAPIWebsocketOfficial.model$RC_dfe43d1a19f2f910938805ce519a6be0", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_f502318fbe2f943e6cfbba125766780aStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_dfe43d1a19f2f910938805ce519a6be0Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("PostAuthorizeResponse", "postAuthorizeResponseAttr", "PostAuthorizeResponse", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_f502318fbe2f943e6cfbba125766780aStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_f502318fbe2f943e6cfbba125766780aStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_dfe43d1a19f2f910938805ce519a6be0(new RC_dfe43d1a19f2f910938805ce519a6be0.RecordClass({
                    postAuthorizeResponseAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_dfe43d1a19f2f910938805ce519a6be0 = RC_dfe43d1a19f2f910938805ce519a6be0Inner;

        RC_dfe43d1a19f2f910938805ce519a6be0Inner._isAnonymousRecord = true;
        RC_dfe43d1a19f2f910938805ce519a6be0Inner.UniqueId = "dfe43d1a-19f2-f910-9388-05ce519a6be0";
        var RC_dfe43d1a19f2f910938805ce519a6be0 = RC_dfe43d1a19f2f910938805ce519a6be0Inner;
        RC_dfe43d1a19f2f910938805ce519a6be0.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RC_e0e41cb94b033378d9153e95b9660ef9", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_3b8df1b0da2c2bbfdff9bb6416b86701Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
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

        RESTAPIWebsocketOfficialModel.RC_e0e41cb94b033378d9153e95b9660ef9 = RC_e0e41cb94b033378d9153e95b9660ef9Inner;

        RC_e0e41cb94b033378d9153e95b9660ef9Inner._isAnonymousRecord = true;
        RC_e0e41cb94b033378d9153e95b9660ef9Inner.UniqueId = "e0e41cb9-4b03-3378-d915-3e95b9660ef9";
        var RC_e0e41cb94b033378d9153e95b9660ef9 = RC_e0e41cb94b033378d9153e95b9660ef9Inner;
        RC_e0e41cb94b033378d9153e95b9660ef9.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_e1278fe9427d99d4150ff61ea3f65e79", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_24b97ac8060a9349e09da2d88e1dea00Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_e1278fe9427d99d4150ff61ea3f65e79 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_24b97ac8060a9349e09da2d88e1dea00Structure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_e1278fe9427d99d4150ff61ea3f65e79 = RL_e1278fe9427d99d4150ff61ea3f65e79;

});

define("RESTAPIWebsocketOfficial.model$RL_e14755a881df87b3e885c798489a1f9a", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_6168fd7b9ba43ed0f5fe1ccbd8f82e90Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_e14755a881df87b3e885c798489a1f9a extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_6168fd7b9ba43ed0f5fe1ccbd8f82e90Structure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_e14755a881df87b3e885c798489a1f9a = RL_e14755a881df87b3e885c798489a1f9a;

});

define("RESTAPIWebsocketOfficial.model$RL_e17c98c9ebad9849b38663a52005be50", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_a37989da54adde60afe7657f5bc1d06eStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_e17c98c9ebad9849b38663a52005be50 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_a37989da54adde60afe7657f5bc1d06eStructure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_e17c98c9ebad9849b38663a52005be50 = RL_e17c98c9ebad9849b38663a52005be50;

});

define("RESTAPIWebsocketOfficial.model$RL_e27fd9e7224bf0c7e999a01ff4028f6a", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_091b86786925fd05b892541280481403Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_e27fd9e7224bf0c7e999a01ff4028f6a extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_091b86786925fd05b892541280481403Structure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_e27fd9e7224bf0c7e999a01ff4028f6a = RL_e27fd9e7224bf0c7e999a01ff4028f6a;

});

define("RESTAPIWebsocketOfficial.model$RL_e377a277aec73abf25e2c35110f340eb", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_72deccc4588dd4c59ea212c47055f933"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_e377a277aec73abf25e2c35110f340eb extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_72deccc4588dd4c59ea212c47055f933;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_e377a277aec73abf25e2c35110f340eb = RL_e377a277aec73abf25e2c35110f340eb;

});

define("RESTAPIWebsocketOfficial.model$RC_e3ab321471af4ded6c61cc352ee47ad1", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_cef0b20847ad169551dbf51efb01e613Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_e3ab321471af4ded6c61cc352ee47ad1Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("TradingPlatformPasswordReset", "tradingPlatformPasswordResetAttr", "TradingPlatformPasswordReset", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_cef0b20847ad169551dbf51efb01e613Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_cef0b20847ad169551dbf51efb01e613Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_e3ab321471af4ded6c61cc352ee47ad1(new RC_e3ab321471af4ded6c61cc352ee47ad1.RecordClass({
                    tradingPlatformPasswordResetAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_e3ab321471af4ded6c61cc352ee47ad1 = RC_e3ab321471af4ded6c61cc352ee47ad1Inner;

        RC_e3ab321471af4ded6c61cc352ee47ad1Inner._isAnonymousRecord = true;
        RC_e3ab321471af4ded6c61cc352ee47ad1Inner.UniqueId = "e3ab3214-71af-4ded-6c61-cc352ee47ad1";
        var RC_e3ab321471af4ded6c61cc352ee47ad1 = RC_e3ab321471af4ded6c61cc352ee47ad1Inner;
        RC_e3ab321471af4ded6c61cc352ee47ad1.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_e40d2b9c559a333983e00711676426d8", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_ad1368b49b01cac105fab51dcf07c686"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_e40d2b9c559a333983e00711676426d8 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_ad1368b49b01cac105fab51dcf07c686;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_e40d2b9c559a333983e00711676426d8 = RL_e40d2b9c559a333983e00711676426d8;

});

define("RESTAPIWebsocketOfficial.model$RL_e4cc4242bd1a5b513b2d0e5945f5ee99", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_d15d22dc3a60a2e6365116c61a16aaa0Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_e4cc4242bd1a5b513b2d0e5945f5ee99 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_d15d22dc3a60a2e6365116c61a16aaa0Structure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_e4cc4242bd1a5b513b2d0e5945f5ee99 = RL_e4cc4242bd1a5b513b2d0e5945f5ee99;

});

define("RESTAPIWebsocketOfficial.model$RL_e4faad65a5799477101b50d791cb6c4b", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_13f257eb273389bc73abe0351586bf1c"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_e4faad65a5799477101b50d791cb6c4b extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_13f257eb273389bc73abe0351586bf1c;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_e4faad65a5799477101b50d791cb6c4b = RL_e4faad65a5799477101b50d791cb6c4b;

});

define("RESTAPIWebsocketOfficial.model$RL_e5d4eff1d9ba5ba2377f189321ef5ca3", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_6afb7faf6b2a5fdc14e3fd34318f5ba5"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_e5d4eff1d9ba5ba2377f189321ef5ca3 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_6afb7faf6b2a5fdc14e3fd34318f5ba5;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_e5d4eff1d9ba5ba2377f189321ef5ca3 = RL_e5d4eff1d9ba5ba2377f189321ef5ca3;

});

define("RESTAPIWebsocketOfficial.model$RL_e6eb0a62197c37db299beb6105b3c02d", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_aca073df88d40d31252fa904cba1bb39"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_e6eb0a62197c37db299beb6105b3c02d extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_aca073df88d40d31252fa904cba1bb39;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_e6eb0a62197c37db299beb6105b3c02d = RL_e6eb0a62197c37db299beb6105b3c02d;

});

define("RESTAPIWebsocketOfficial.model$RL_e76c00ddf7abece102174559911adf6e", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_39c69c310b1fed6e6a637381cf367162Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_e76c00ddf7abece102174559911adf6e extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_39c69c310b1fed6e6a637381cf367162Structure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_e76c00ddf7abece102174559911adf6e = RL_e76c00ddf7abece102174559911adf6e;

});

define("RESTAPIWebsocketOfficial.model$RL_e80a0f2e1d0d40303b1a689b4ad27a7b", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_5a8f9ede296ad9cf5b81205656c8b54fStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_e80a0f2e1d0d40303b1a689b4ad27a7b extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_5a8f9ede296ad9cf5b81205656c8b54fStructure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_e80a0f2e1d0d40303b1a689b4ad27a7b = RL_e80a0f2e1d0d40303b1a689b4ad27a7b;

});

define("RESTAPIWebsocketOfficial.model$RC_ee239f88c5d7794fe9f69be69a94411a", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_e3b9823599cdef8012785f8875d8da38Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_ee239f88c5d7794fe9f69be69a94411aInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("GetTradingPlatformStatusResponse", "getTradingPlatformStatusResponseAttr", "GetTradingPlatformStatusResponse", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_e3b9823599cdef8012785f8875d8da38Structure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_e3b9823599cdef8012785f8875d8da38Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_ee239f88c5d7794fe9f69be69a94411a(new RC_ee239f88c5d7794fe9f69be69a94411a.RecordClass({
                    getTradingPlatformStatusResponseAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_ee239f88c5d7794fe9f69be69a94411a = RC_ee239f88c5d7794fe9f69be69a94411aInner;

        RC_ee239f88c5d7794fe9f69be69a94411aInner._isAnonymousRecord = true;
        RC_ee239f88c5d7794fe9f69be69a94411aInner.UniqueId = "ee239f88-c5d7-794f-e9f6-9be69a94411a";
        var RC_ee239f88c5d7794fe9f69be69a94411a = RC_ee239f88c5d7794fe9f69be69a94411aInner;
        RC_ee239f88c5d7794fe9f69be69a94411a.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_e87e0e80051f6c55e06e3dcb63f790d9", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_ee239f88c5d7794fe9f69be69a94411a"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_e87e0e80051f6c55e06e3dcb63f790d9 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_ee239f88c5d7794fe9f69be69a94411a;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_e87e0e80051f6c55e06e3dcb63f790d9 = RL_e87e0e80051f6c55e06e3dcb63f790d9;

});

define("RESTAPIWebsocketOfficial.model$RL_e9715121ffbe4e5204c4a1c3804c7361", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_61e849a6b27c65d4f84da11bc7fcd961"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_e9715121ffbe4e5204c4a1c3804c7361 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_61e849a6b27c65d4f84da11bc7fcd961;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_e9715121ffbe4e5204c4a1c3804c7361 = RL_e9715121ffbe4e5204c4a1c3804c7361;

});

define("RESTAPIWebsocketOfficial.model$RL_e9b4b68e021e5613bf728dccd1cf9139", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_41688d261db663d4544900081e65767bStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_e9b4b68e021e5613bf728dccd1cf9139 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_41688d261db663d4544900081e65767bStructure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_e9b4b68e021e5613bf728dccd1cf9139 = RL_e9b4b68e021e5613bf728dccd1cf9139;

});

define("RESTAPIWebsocketOfficial.model$RL_ea69c6358f758ea1e34787db7dc19db9", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_605da9a1009ce00d8c64718f9c13e284Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_ea69c6358f758ea1e34787db7dc19db9 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_605da9a1009ce00d8c64718f9c13e284Structure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_ea69c6358f758ea1e34787db7dc19db9 = RL_ea69c6358f758ea1e34787db7dc19db9;

});

define("RESTAPIWebsocketOfficial.model$RC_f9632cc24336eb4bb7e5e5f64f7de5b5", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_5685a40fa48e8876538e1df2a0c39d3eStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_f9632cc24336eb4bb7e5e5f64f7de5b5Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("StatementRequest", "statementRequestAttr", "StatementRequest", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_5685a40fa48e8876538e1df2a0c39d3eStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_5685a40fa48e8876538e1df2a0c39d3eStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_f9632cc24336eb4bb7e5e5f64f7de5b5(new RC_f9632cc24336eb4bb7e5e5f64f7de5b5.RecordClass({
                    statementRequestAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_f9632cc24336eb4bb7e5e5f64f7de5b5 = RC_f9632cc24336eb4bb7e5e5f64f7de5b5Inner;

        RC_f9632cc24336eb4bb7e5e5f64f7de5b5Inner._isAnonymousRecord = true;
        RC_f9632cc24336eb4bb7e5e5f64f7de5b5Inner.UniqueId = "f9632cc2-4336-eb4b-b7e5-e5f64f7de5b5";
        var RC_f9632cc24336eb4bb7e5e5f64f7de5b5 = RC_f9632cc24336eb4bb7e5e5f64f7de5b5Inner;
        RC_f9632cc24336eb4bb7e5e5f64f7de5b5.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_ea81ff3a6f3a76c2ed12260f624c4969", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_f9632cc24336eb4bb7e5e5f64f7de5b5"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_ea81ff3a6f3a76c2ed12260f624c4969 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_f9632cc24336eb4bb7e5e5f64f7de5b5;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_ea81ff3a6f3a76c2ed12260f624c4969 = RL_ea81ff3a6f3a76c2ed12260f624c4969;

});

define("RESTAPIWebsocketOfficial.model$RL_ece3ed6e115187092667bb2ed6368718", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_dd79bf27114cbc810592c451d8bd2280"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_ece3ed6e115187092667bb2ed6368718 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_dd79bf27114cbc810592c451d8bd2280;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_ece3ed6e115187092667bb2ed6368718 = RL_ece3ed6e115187092667bb2ed6368718;

});

define("RESTAPIWebsocketOfficial.model$RL_f067ae7af5eafa7f1242db8deda5f8c4", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_e89429535bbc3a843fdfa9ff6a750a5fStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_f067ae7af5eafa7f1242db8deda5f8c4 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_e89429535bbc3a843fdfa9ff6a750a5fStructure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_f067ae7af5eafa7f1242db8deda5f8c4 = RL_f067ae7af5eafa7f1242db8deda5f8c4;

});

define("RESTAPIWebsocketOfficial.model$RL_f078853eb4e1ea502520482773117b08", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_3a8fd8b28bfeab1bd267f04e730ca9e6Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_f078853eb4e1ea502520482773117b08 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_3a8fd8b28bfeab1bd267f04e730ca9e6Structure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_f078853eb4e1ea502520482773117b08 = RL_f078853eb4e1ea502520482773117b08;

});

define("RESTAPIWebsocketOfficial.model$RL_f09c659879e2269528f7b678199b971f", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_e25657c96fdb654707c20af3bb230787Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_f09c659879e2269528f7b678199b971f extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_e25657c96fdb654707c20af3bb230787Structure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_f09c659879e2269528f7b678199b971f = RL_f09c659879e2269528f7b678199b971f;

});

define("RESTAPIWebsocketOfficial.model$RC_fcf4341f7efd9506f671d9240030f6a0", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_3d96747747f3d41e23c92ff9ec0f78ebStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_fcf4341f7efd9506f671d9240030f6a0Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Echo_req12", "echo_req12Attr", "Echo_req12", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_3d96747747f3d41e23c92ff9ec0f78ebStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_3d96747747f3d41e23c92ff9ec0f78ebStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_fcf4341f7efd9506f671d9240030f6a0(new RC_fcf4341f7efd9506f671d9240030f6a0.RecordClass({
                    echo_req12Attr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_fcf4341f7efd9506f671d9240030f6a0 = RC_fcf4341f7efd9506f671d9240030f6a0Inner;

        RC_fcf4341f7efd9506f671d9240030f6a0Inner._isAnonymousRecord = true;
        RC_fcf4341f7efd9506f671d9240030f6a0Inner.UniqueId = "fcf4341f-7efd-9506-f671-d9240030f6a0";
        var RC_fcf4341f7efd9506f671d9240030f6a0 = RC_fcf4341f7efd9506f671d9240030f6a0Inner;
        RC_fcf4341f7efd9506f671d9240030f6a0.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_f11b3648faafeee87f9baa4118b19aeb", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_fcf4341f7efd9506f671d9240030f6a0"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_f11b3648faafeee87f9baa4118b19aeb extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_fcf4341f7efd9506f671d9240030f6a0;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_f11b3648faafeee87f9baa4118b19aeb = RL_f11b3648faafeee87f9baa4118b19aeb;

});

define("RESTAPIWebsocketOfficial.model$RL_f15b302598caef69c6cdd4e0690795f9", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_7096ca0099728124fcaff6ac0bf8440c"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_f15b302598caef69c6cdd4e0690795f9 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_7096ca0099728124fcaff6ac0bf8440c;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_f15b302598caef69c6cdd4e0690795f9 = RL_f15b302598caef69c6cdd4e0690795f9;

});

define("RESTAPIWebsocketOfficial.model$RL_f565e985301ac9dd26dbfb84b70bf745", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_8f3efc29bef911e74df222fdba36c135"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_f565e985301ac9dd26dbfb84b70bf745 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_8f3efc29bef911e74df222fdba36c135;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_f565e985301ac9dd26dbfb84b70bf745 = RL_f565e985301ac9dd26dbfb84b70bf745;

});

define("RESTAPIWebsocketOfficial.model$RL_f61c6f02c5c68df8a996828a465a3da2", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_e3ab321471af4ded6c61cc352ee47ad1"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_f61c6f02c5c68df8a996828a465a3da2 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_e3ab321471af4ded6c61cc352ee47ad1;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_f61c6f02c5c68df8a996828a465a3da2 = RL_f61c6f02c5c68df8a996828a465a3da2;

});

define("RESTAPIWebsocketOfficial.model$RL_f63f2b83c2121dc349d7190f0745a6cf", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_ada7ae2f7fcadfe9ad4cb9dbd1c4caf8"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_f63f2b83c2121dc349d7190f0745a6cf extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_ada7ae2f7fcadfe9ad4cb9dbd1c4caf8;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_f63f2b83c2121dc349d7190f0745a6cf = RL_f63f2b83c2121dc349d7190f0745a6cf;

});

define("RESTAPIWebsocketOfficial.model$RL_f898b92d666caff04b8ec558b53a2f60", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_dfe43d1a19f2f910938805ce519a6be0"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_f898b92d666caff04b8ec558b53a2f60 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_dfe43d1a19f2f910938805ce519a6be0;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_f898b92d666caff04b8ec558b53a2f60 = RL_f898b92d666caff04b8ec558b53a2f60;

});

define("RESTAPIWebsocketOfficial.model$RL_f8eb431cfa3719b526bb3d4eaa81a60a", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_63a473e932ef99f5271718b62399e682Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_f8eb431cfa3719b526bb3d4eaa81a60a extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_63a473e932ef99f5271718b62399e682Structure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_f8eb431cfa3719b526bb3d4eaa81a60a = RL_f8eb431cfa3719b526bb3d4eaa81a60a;

});

define("RESTAPIWebsocketOfficial.model$RC_f92c9dfdeaaba0d06f3a62c3b604cf58", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_e5081373b9c17bf97c001a46f1739ffeStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore; {
        class RC_f92c9dfdeaaba0d06f3a62c3b604cf58Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Authorize", "authorizeAttr", "Authorize", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketOfficialModel.ST_e5081373b9c17bf97c001a46f1739ffeStructure());
                    }, true, RESTAPIWebsocketOfficialModel.ST_e5081373b9c17bf97c001a46f1739ffeStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_f92c9dfdeaaba0d06f3a62c3b604cf58(new RC_f92c9dfdeaaba0d06f3a62c3b604cf58.RecordClass({
                    authorizeAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        RESTAPIWebsocketOfficialModel.RC_f92c9dfdeaaba0d06f3a62c3b604cf58 = RC_f92c9dfdeaaba0d06f3a62c3b604cf58Inner;

        RC_f92c9dfdeaaba0d06f3a62c3b604cf58Inner._isAnonymousRecord = true;
        RC_f92c9dfdeaaba0d06f3a62c3b604cf58Inner.UniqueId = "f92c9dfd-eaab-a0d0-6f3a-62c3b604cf58";
        var RC_f92c9dfdeaaba0d06f3a62c3b604cf58 = RC_f92c9dfdeaaba0d06f3a62c3b604cf58Inner;
        RC_f92c9dfdeaaba0d06f3a62c3b604cf58.init();
    }
});

define("RESTAPIWebsocketOfficial.model$RL_f9cd69a99a23afb6393c39463c23b25f", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_e0e41cb94b033378d9153e95b9660ef9"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_f9cd69a99a23afb6393c39463c23b25f extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_e0e41cb94b033378d9153e95b9660ef9;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_f9cd69a99a23afb6393c39463c23b25f = RL_f9cd69a99a23afb6393c39463c23b25f;

});

define("RESTAPIWebsocketOfficial.model$RL_fa00e44a222cdab3fe910e0337033680", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_769b74cf243bca7e23f6d8b3e094aafe"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_fa00e44a222cdab3fe910e0337033680 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_769b74cf243bca7e23f6d8b3e094aafe;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_fa00e44a222cdab3fe910e0337033680 = RL_fa00e44a222cdab3fe910e0337033680;

});

define("RESTAPIWebsocketOfficial.model$RL_fa7dab07e8682b9feaee7f3f61a4e712", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_c567cbac2969babec31508d5ba9b8248"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_fa7dab07e8682b9feaee7f3f61a4e712 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_c567cbac2969babec31508d5ba9b8248;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_fa7dab07e8682b9feaee7f3f61a4e712 = RL_fa7dab07e8682b9feaee7f3f61a4e712;

});

define("RESTAPIWebsocketOfficial.model$RL_fbb2fb86c40f3e5602392d2ab7885f06", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$ST_b47d3155c531939aabdd10ec3a99049dStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_fbb2fb86c40f3e5602392d2ab7885f06 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.ST_b47d3155c531939aabdd10ec3a99049dStructure;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_fbb2fb86c40f3e5602392d2ab7885f06 = RL_fbb2fb86c40f3e5602392d2ab7885f06;

});

define("RESTAPIWebsocketOfficial.model$RL_fca3607c6d54863878369f2fe3a05b5b", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_f92c9dfdeaaba0d06f3a62c3b604cf58"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_fca3607c6d54863878369f2fe3a05b5b extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_f92c9dfdeaaba0d06f3a62c3b604cf58;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_fca3607c6d54863878369f2fe3a05b5b = RL_fca3607c6d54863878369f2fe3a05b5b;

});

define("RESTAPIWebsocketOfficial.model$RL_fced28719a91c598d8625322837974e1", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_a9755f38b0542dfb6acdd8617637c169"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_fced28719a91c598d8625322837974e1 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_a9755f38b0542dfb6acdd8617637c169;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_fced28719a91c598d8625322837974e1 = RL_fced28719a91c598d8625322837974e1;

});

define("RESTAPIWebsocketOfficial.model$RL_fff77ec615be0e1e441a98afc10c6f02", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocketOfficial.model", "RESTAPIWebsocketOfficial.model$RC_d509bf89cda09ba78055eb96d496078b"], function(exports, OSRuntimeCore, RESTAPIWebsocketOfficialModel) {
    var OS = OSRuntimeCore;
    class RL_fff77ec615be0e1e441a98afc10c6f02 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return RESTAPIWebsocketOfficialModel.RC_d509bf89cda09ba78055eb96d496078b;
        }

    }

    RESTAPIWebsocketOfficialModel.RL_fff77ec615be0e1e441a98afc10c6f02 = RL_fff77ec615be0e1e441a98afc10c6f02;

});

define("RESTAPIWebsocketOfficial.model", ["exports", "@outsystems/runtime-core-js"], function(exports, OSRuntimeCore) {
    var OS = OSRuntimeCore;
    var RESTAPIWebsocketOfficialModel = exports;
    Object.defineProperty(RESTAPIWebsocketOfficialModel, "module", {
        get: function() {
            return OS.ApplicationInfo.getModules()["7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017"];
        }
    });

    RESTAPIWebsocketOfficialModel.staticEntities = {};
});