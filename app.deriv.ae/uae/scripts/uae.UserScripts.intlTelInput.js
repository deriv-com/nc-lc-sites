/*
 * International Telephone Input v17.0.12
 * https://github.com/jackocnr/intl-tel-input.git
 * Licensed under the MIT license
 */

// wrap in UMD
(function(factory) {
    if (typeof module === "object" && module.exports) module.exports = factory();
    else window.intlTelInput = factory();
})(function(undefined) {
    "use strict";
    return function() {
        // Array of country objects for the flag dropdown.
        // Here is the criteria for the plugin to support a given country/territory
        // - It has an iso2 code: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
        // - It has it's own country calling code (it is not a sub-region of another country): https://en.wikipedia.org/wiki/List_of_country_calling_codes
        // - It has a flag in the region-flags project: https://github.com/behdad/region-flags/tree/gh-pages/png
        // - It is supported by libphonenumber (it must be listed on this page): https://github.com/googlei18n/libphonenumber/blob/master/resources/ShortNumberMetadata.xml
        // Each country array has the following information:
        // [
        //    Country name,
        //    iso2 code,
        //    International dial code,
        //    Order (if >1 country with same dial code),
        //    Area codes
        // ]
        //         var allCountries = 
        //         [
        //   ["Andorra", "ad", "376", 1],
        //   ["United Arab Emirates", "ae", "971", 1],
        //   ["Afghanistan", "af", "93", 1],
        //   ["Antigua And Barbuda", "ag", "1", 1, ["268"]],
        //   ["Anguilla", "ai", "1", 2, ["264"]],
        //   ["Albania", "al", "355", 1],
        //   ["Armenia", "am", "374", 1],
        //   ["Angola", "ao", "244", 1],
        //   ["Antarctica", "aq", "672", 1, ["1"]],
        //   ["Argentina", "ar", "54", 1],
        //   ["American Samoa", "as", "1", 3, ["684"]],
        //   ["Austria", "at", "43", 1],
        //   ["Australia", "au", "61", 1],
        //   ["Aruba", "aw", "297", 1],
        //   ["Aland Islands", "ax", "358", 1, ["18"]],
        //   ["Azerbaijan", "az", "994", 1],
        //   ["Bosnia and Herzegovina", "ba", "387", 1],
        //   ["Barbados", "bb", "1", 4, ["246"]],
        //   ["Bangladesh", "bd", "880", 1],
        //   ["Belgium", "be", "32", 1],
        //   ["Burkina Faso", "bf", "226", 1],
        //   ["Bulgaria", "bg", "359", 1],
        //   ["Bahrain", "bh", "973", 1],
        //   ["Burundi", "bi", "257", 1],
        //   ["Benin", "bj", "229", 1],
        //   ["Saint Barthelemy", "bl", "590", 1, ["590"]],
        //   ["Bermuda", "bm", "1", 5, ["441"]],
        //   ["Brunei", "bn", "673", 1],
        //   ["Bolivia", "bo", "591", 1],
        //   ["Bonaire, Sint Eustatius And Saba", "bq", "599", 1, ["318", "319", "416", "417", "418", "419", "420", "421", "422", "423", "424", "425", "426", "427", "428", "429", "430", "431", "432", "433", "434", "435", "436", "437", "438", "439", "440", "441", "442", "443", "444", "445", "446", "447", "448", "449", "450", "451", "452", "453"]],
        //   ["Curacao", "cw", "599", 2, ["9"]],
        //   ["Brazil", "br", "55", 1],
        //   ["Bahamas", "bs", "1", 6, ["242"]],
        //   ["Bhutan", "bt", "975", 1],
        //   ["Botswana", "bw", "267", 1],
        //   ["Belarus", "by", "375", 1],
        //   ["Belize", "bz", "501", 1],
        //   ["Canada", "ca", "1", 7],
        //   ["Cocos (Keeling) Islands", "cc", "61", 2],
        //   ["Congo - Kinshasa", "cd", "243", 1],
        //   ["Central African Republic", "cf", "236", 1],
        //   ["Congo - Brazzaville", "cg", "242", 1],
        //   ["Switzerland", "ch", "41", 1],
        //   ["Cote d'Ivoire", "ci", "225", 1],
        //   ["Cook Islands", "ck", "682", 1],
        //   ["Chile", "cl", "56", 1],
        //   ["Cameroon", "cm", "237", 1],
        //   ["China", "cn", "86", 1],
        //   ["Colombia", "co", "57", 1],
        //   ["Costa Rica", "cr", "506", 1],
        //   ["Cuba", "cu", "53", 1],
        //   ["Cape Verde", "cv", "238", 1],
        //   ["Christmas Island", "cx", "61", 3],
        //   ["Cyprus", "cy", "357", 1],
        //   ["Czech Republic", "cz", "420", 1],
        //   ["Germany", "de", "49", 1],
        //   ["Djibouti", "dj", "253", 1],
        //   ["Denmark", "dk", "45", 1],
        //   ["Dominica", "dm", "1", 8, ["767"]],
        //   ["Dominican Republic", "do", "1", 9, ["809", "829", "849"]],
        //   ["Algeria", "dz", "213", 1],
        //   ["Ecuador", "ec", "593", 1],
        //   ["Estonia", "ee", "372", 1],
        //   ["Egypt", "eg", "20", 1],
        //   ["Western Sahara", "eh", "212", 1, ["5288", "5289"]],
        //   ["Morocco", "ma", "212", 2],
        //   ["Eritrea", "er", "291", 1],
        //   ["Spain", "es", "34", 1],
        //   ["Eswatini", "sz", "268", 1],
        //   ["Ethiopia", "et", "251", 1],
        //   ["Fiji", "fj", "679", 1],
        //   ["Finland", "fi", "358"],
        //   ["Falkland Islands", "fk", "500", 1],
        //   ["Micronesia", "fm", "691", 1],
        //   ["Faroe Islands", "fo", "298", 1],
        //   ["France", "fr", "33", 1],
        //   ["Gabon", "ga", "241", 1],
        //   ["United Kingdom", "gb", "44", 1],
        //   ["Grenada", "gd", "1", 10, ["473"]],
        //   ["Georgia", "ge", "995", 1],
        //   ["French Guiana", "gf", "594", 1],
        //   ["Guernsey", "gg", "44", 2, ["1481"]],
        //   ["Ghana", "gh", "233", 1],
        //   ["Gibraltar", "gi", "350", 1],
        //   ["Greenland", "gl", "299", 1],
        //   ["Gambia", "gm", "220", 1],
        //   ["Guinea", "gn", "224", 1],
        //   ["Guadeloupe", "gp", "590", 2, ["690", "691", "692", "693", "694", "695", "696", "697", "698", "699"]],
        //   ["Equatorial Guinea", "gq", "240", 1],
        //   ["Greece", "gr", "30", 1],
        //   ["South Georgia & South Sandwich Islands", "gs", "500", 2],
        //   ["Guatemala", "gt", "502", 1],
        //   ["Guam", "gu", "1", 11, ["671"]],
        //   ["Guinea-Bissau", "gw", "245", 1],
        //   ["Guyana", "gy", "592", 1],
        //   ["Hong Kong SAR China", "hk", "852", 1],
        //   ["Honduras", "hn", "504", 1],
        //   ["Croatia", "hr", "385", 1],
        //   ["Haiti", "ht", "509", 1],
        //   ["Hungary", "hu", "36", 1],
        //   ["Indonesia", "id", "62", 1],
        //   ["Ireland", "ie", "353", 1],
        //   ["Israel", "il", "972", 1],
        //   ["Isle of Man", "im", "44", 3, ["1624"]],
        //   ["India", "in", "91", 1],
        //   ["British Indian Ocean Territory", "io", "246", 1],
        //   ["Iraq", "iq", "964", 1],
        //   ["Iran", "ir", "98", 1],
        //   ["Iceland", "is", "354", 1],
        //   ["Italy", "it", "39", 1],
        //   ["Jersey", "je", "44", 4, ["1534"]],
        //   ["Jamaica", "jm", "1", 12, ["876", "658"]],
        //   ["Jordan", "jo", "962", 1],
        //   ["Japan", "jp", "81", 1],
        //   ["Kenya", "ke", "254", 1],
        //   ["Kyrgyzstan", "kg", "996", 1],
        //   ["Cambodia", "kh", "855", 1],
        //   ["Kiribati", "ki", "686", 1],
        //   ["Comoros", "km", "269", 1],
        //   ["Saint Kitts and Nevis", "kn", "1", 13, ["869"]],
        //   ["North Korea", "kp", "850", 1],
        //   ["South Korea", "kr", "82", 1],
        //   ["Kuwait", "kw", "965", 1],
        //   ["Cayman Islands", "ky", "1", 14, ["345"]],
        //   ["Kazakhstan", "kz", "7", 1, ["6", "7"]],
        //   ["Russia", "ru", "7", 2],
        //   ["Laos", "la", "856", 1],
        //   ["Lebanon", "lb", "961", 1],
        //   ["Saint Lucia", "lc", "1", 15, ["758"]],
        //   ["Liechtenstein", "li", "423", 1],
        //   ["Sri Lanka", "lk", "94", 1],
        //   ["Liberia", "lr", "231", 1],
        //   ["Lesotho", "ls", "266", 1],
        //   ["Lithuania", "lt", "370", 1],
        //   ["Luxembourg", "lu", "352", 1],
        //   ["Latvia", "lv", "371", 1],
        //   ["Libya", "ly", "218", 1],
        //   ["Monaco", "mc", "377", 1],
        //   ["Moldova", "md", "373", 1],
        //   ["Montenegro", "me", "382", 1],
        //   ["Saint Martin", "mf", "590", 3, ["690"]],
        //   ["Madagascar", "mg", "261", 1],
        //   ["Marshall Islands", "mh", "692", 1],
        //   ["Mali", "ml", "223", 1],
        //   ["Myanmar (Burma)", "mm", "95", 1],
        //   ["Mongolia", "mn", "976", 1],
        //   ["Macao", "mo", "853", 1],
        //   ["North Macedonia", "mk", "389", 1],
        //   ["Northern Mariana Islands", "mp", "1", 16, ["670"]],
        //   ["Martinique", "mq", "596", 1],
        //   ["Mauritania", "mr", "222", 1],
        //   ["Montserrat", "ms", "1", 17, ["664"]],
        //   ["Malta", "mt", "356", 1],
        //   ["Mauritius", "mu", "230", 1],
        //   ["Maldives", "mv", "960", 1],
        //   ["Malawi", "mw", "265", 1],
        //   ["Mexico", "mx", "52", 1],
        //   ["Malaysia", "my", "60", 1],
        //   ["Mozambique", "mz", "258", 1],
        //   ["Namibia", "na", "264", 1],
        //   ["New Caledonia", "nc", "687", 1],
        //   ["Niger", "ne", "227", 1],
        //   ["Norfolk Island", "nf", "672", 2, ["3"]],
        //   ["Nigeria", "ng", "234", 1],
        //   ["Nicaragua", "ni", "505", 1],
        //   ["Netherlands", "nl", "31", 1],
        //   ["Norway", "no", "47", 1],
        //   ["Nepal", "np", "977", 1],
        //   ["Nauru", "nr", "674", 1],
        //   ["Niue", "nu", "683", 1],
        //   ["New Zealand", "nz", "64", 1],
        //   ["Oman", "om", "968", 1],
        //   ["Panama", "pa", "507", 1],
        //   ["Peru", "pe", "51", 1],
        //   ["French Polynesia", "pf", "689", 1],
        //   ["Papua New Guinea", "pg", "675", 1],
        //   ["Philippines", "ph", "63", 1],
        //   ["Pakistan", "pk", "92", 1],
        //   ["Poland", "pl", "48", 1],
        //   ["Saint Pierre and Miquelon", "pm", "508", 1],
        //   ["Pitcairn Islands", "pn", "649", 1],
        //   ["Puerto Rico", "pr", "1", 18, ["787", "939"]],
        //   ["Palestinian Territories", "ps", "970", 1],
        //   ["Portugal", "pt", "351", 1],
        //   ["Palau", "pw", "680", 1],
        //   ["Paraguay", "py", "595", 1],
        //   ["Qatar", "qa", "974", 1],
        //   ["Reunion", "re", "262", 1],
        //   ["Romania", "ro", "40", 1],
        //   ["Serbia", "rs", "381", 1],
        //   ["Rwanda", "rw", "250", 1],
        //   ["Saudi Arabia", "sa", "966", 1],
        //   ["Solomon Islands", "sb", "677", 1],
        //   ["Seychelles", "sc", "248", 1],
        //   ["Sudan", "sd", "249", 1],
        //   ["Sweden", "se", "46", 1],
        //   ["Singapore", "sg", "65", 1],
        //   ["Saint Helena", "sh", "290", 1],
        //   ["Slovenia", "si", "386", 1],
        //   ["Svalbard and Jan Mayen", "sj", "47", 2, ["79"]],
        //   ["Slovakia", "sk", "421", 1],
        //   ["Sierra Leone", "sl", "232", 1],
        //   ["San Marino", "sm", "378", 1],
        //   ["Senegal", "sn", "221", 1],
        //   ["Somalia", "so", "252", 1],
        //   ["Suriname", "sr", "597", 1],
        //   ["South Sudan", "ss", "211", 1],
        //   ["Sao Tome and Principe", "st", "239", 1],
        //   ["El Salvador", "sv", "503", 1],
        //   ["Sint Maarten", "sx", "1", 19, ["721"]],
        //   ["Syria", "sy", "963", 1],
        //   ["Turks and Caicos Islands", "tc", "1", 20, ["649"]],
        //   ["Chad", "td", "235", 1],
        //   ["Togo", "tg", "228", 1],
        //   ["Thailand", "th", "66", 1],
        //   ["Tajikistan", "tj", "992", 1],
        //   ["Tokelau", "tk", "690", 1],
        //   ["Timor-Leste", "tl", "670", 1],
        //   ["Turkmenistan", "tm", "993", 1],
        //   ["Tunisia", "tn", "216", 1],
        //   ["Tonga", "to", "676", 1],
        //   ["Turkey", "tr", "90", 1],
        //   ["Trinidad and Tobago", "tt", "1", 21, ["868"]],
        //   ["Tuvalu", "tv", "688", 1],
        //   ["Taiwan", "tw", "886", 1],
        //   ["Tanzania", "tz", "255", 1],
        //   ["Ukraine", "ua", "380", 1],
        //   ["Uganda", "ug", "256", 1],
        //   ["United States", "us", "1", 22],
        //   ["Uruguay", "uy", "598", 1],
        //   ["Uzbekistan", "uz", "998", 1],
        //   ["Vatican City", "va", "39", 2],
        //   ["St. Vincent & Grenadines", "vc", "1", 23, ["784"]],
        //   ["Venezuela", "ve", "58", 1],
        //   ["Virgin Islands (British)", "vg", "1", 24, ["284"]],
        //   ["Virgin Islands (US)", "vi", "1", 25, ["340"]],
        //   ["Vietnam", "vn", "84", 1],
        //   ["Vanuatu", "vu", "678", 1],
        //   ["Wallis and Futuna", "wf", "681", 1],
        //   ["Samoa", "ws", "685", 1],
        //   ["Yemen", "ye", "967", 1],
        //   ["Mayotte", "yt", "262", 2],
        //   ["South Africa", "za", "27", 1],
        //   ["Zambia", "zm", "260", 1],
        //   ["Zimbabwe", "zw", "263", 1]
        // ];
        var allCountries = [
            ["Andorra", "ad", "376", 1, undefined, "أندورا"],
            ["United Arab Emirates", "ae", "971", 1, undefined, "الإمارات العربية المتحدة"],
            ["Afghanistan", "af", "93", 1, undefined, "أفغانستان"],
            ["Antigua And Barbuda", "ag", "1", 1, ["268"], "أنتيغوا وباربودا"],
            ["Anguilla", "ai", "1", 2, ["264"], "أنغويلا"],
            ["Albania", "al", "355", 1, undefined, "ألبانيا"],
            ["Armenia", "am", "374", 1, undefined, "أرمينيا"],
            ["Angola", "ao", "244", 1, undefined, "أنغولا"],
            ["Antarctica", "aq", "672", 1, ["1"], "القارة القطبية الجنوبية"],
            ["Argentina", "ar", "54", 1, undefined, "الأرجنتين"],
            ["American Samoa", "as", "1", 3, ["684"], "ساموا الأمريكية"],
            ["Austria", "at", "43", 1, undefined, "النمسا"],
            ["Australia", "au", "61", 1, undefined, "أستراليا"],
            ["Aruba", "aw", "297", 1, undefined, "أروبا"],
            ["Aland Islands", "ax", "358", 1, ["18"], "جزر أولاند"],
            ["Azerbaijan", "az", "994", 1, undefined, "أذربيجان"],
            ["Bosnia and Herzegovina", "ba", "387", 1, undefined, "البوسنة والهرسك"],
            ["Barbados", "bb", "1", 4, ["246"], "باربادوس"],
            ["Bangladesh", "bd", "880", 1, undefined, "بنغلاديش"],
            ["Belgium", "be", "32", 1, undefined, "بلجيكا"],
            ["Burkina Faso", "bf", "226", 1, undefined, "بوركينا فاسو"],
            ["Bulgaria", "bg", "359", 1, undefined, "بلغاريا"],
            ["Bahrain", "bh", "973", 1, undefined, "البحرين"],
            ["Burundi", "bi", "257", 1, undefined, "بوروندي"],
            ["Benin", "bj", "229", 1, undefined, "بنين"],
            ["Saint Barthelemy", "bl", "590", 1, ["590"], "سان بارتيلمي"],
            ["Bermuda", "bm", "1", 5, ["441"], "برمودا"],
            ["Brunei", "bn", "673", 1, undefined, "بروناي"],
            ["Bolivia", "bo", "591", 1, undefined, "بوليفيا"],
            ["Bonaire, Sint Eustatius And Saba", "bq", "599", 1, ["318", "319", "416", "417", "418", "419", "420", "421", "422", "423", "424", "425", "426", "427", "428", "429", "430", "431", "432", "433", "434", "435", "436", "437", "438", "439", "440", "441", "442", "443", "444", "445", "446", "447", "448", "449", "450", "451", "452", "453"], "الجزر الكاريبية الهولندية"],
            ["Curacao", "cw", "599", 2, ["9"], "كوراساو"],
            ["Brazil", "br", "55", 1, undefined, "البرازيل"],
            ["Bahamas", "bs", "1", 6, ["242"], "باهاماس"],
            ["Bhutan", "bt", "975", 1, undefined, "بوتان"],
            ["Botswana", "bw", "267", 1, undefined, "بوتسوانا"],
            ["Belarus", "by", "375", 1, undefined, "روسيا البيضاء"],
            ["Belize", "bz", "501", 1, undefined, "بليز"],
            ["Canada", "ca", "1", 7, undefined, "كندا"],
            ["Cocos (Keeling) Islands", "cc", "61", 2, undefined, "جزر كوكوس"],
            ["Congo - Kinshasa", "cd", "243", 1, undefined, "جمهورية الكونغو الديمقراطية"],
            ["Central African Republic", "cf", "236", 1, undefined, "جمهورية أفريقيا الوسطى"],
            ["Congo - Brazzaville", "cg", "242", 1, undefined, "جمهورية الكونغو"],
            ["Switzerland", "ch", "41", 1, undefined, "سويسرا"],
            ["Cote d'Ivoire", "ci", "225", 1, undefined, "ساحل العاج"],
            ["Cook Islands", "ck", "682", 1, undefined, "جزر كوك"],
            ["Chile", "cl", "56", 1, undefined, "تشيلي"],
            ["Cameroon", "cm", "237", 1, undefined, "الكاميرون"],
            ["China", "cn", "86", 1, undefined, "الصين"],
            ["Colombia", "co", "57", 1, undefined, "كولومبيا"],
            ["Costa Rica", "cr", "506", 1, undefined, "كوستاريكا"],
            ["Cuba", "cu", "53", 1, undefined, "كوبا"],
            ["Cape Verde", "cv", "238", 1, undefined, "الرأس الأخضر"],
            ["Christmas Island", "cx", "61", 3, undefined, "جزيرة عيد الميلاد"],
            ["Cyprus", "cy", "357", 1, undefined, "قبرص"],
            ["Czech Republic", "cz", "420", 1, undefined, "جمهورية التشيك"],
            ["Germany", "de", "49", 1, undefined, "ألمانيا"],
            ["Djibouti", "dj", "253", 1, undefined, "جيبوتي"],
            ["Denmark", "dk", "45", 1, undefined, "الدنمارك"],
            ["Dominica", "dm", "1", 8, ["767"], "دومينيكا"],
            ["Dominican Republic", "do", "1", 9, ["809", "829", "849"], "جمهورية الدومينيكان"],
            ["Algeria", "dz", "213", 1, undefined, "الجزائر"],
            ["Ecuador", "ec", "593", 1, undefined, "الإكوادور"],
            ["Estonia", "ee", "372", 1, undefined, "إستونيا"],
            ["Egypt", "eg", "20", 1, undefined, "مصر"],
            ["Western Sahara", "eh", "212", 1, ["5288", "5289"], "الصحراء الغربية"],
            ["Morocco", "ma", "212", 2, undefined, "المغرب"],
            ["Eritrea", "er", "291", 1, undefined, "إريتريا"],
            ["Spain", "es", "34", 1, undefined, "إسبانيا"],
            ["Eswatini", "sz", "268", 1, undefined, "سوازيلاند"],
            ["Ethiopia", "et", "251", 1, undefined, "إثيوبيا"],
            ["Fiji", "fj", "679", 1, undefined, "فيجي"],
            ["Finland", "fi", "358", undefined, undefined, "فنلندا"],
            ["Falkland Islands", "fk", "500", 1, undefined, "جزر فوكلاند"],
            ["Micronesia", "fm", "691", 1, undefined, "ولايات ميكرونيسيا المتحدة"],
            ["Faroe Islands", "fo", "298", 1, undefined, "جزر فارو"],
            ["France", "fr", "33", 1, undefined, "فرنسا"],
            ["Gabon", "ga", "241", 1, undefined, "الغابون"],
            ["United Kingdom", "gb", "44", 1, undefined, "المملكة المتحدة"],
            ["Grenada", "gd", "1", 10, ["473"], "غرينادا"],
            ["Georgia", "ge", "995", 1, undefined, "جورجيا"],
            ["French Guiana", "gf", "594", 1, undefined, "غويانا الفرنسية"],
            ["Guernsey", "gg", "44", 2, ["1481"], "غيرنزي"],
            ["Ghana", "gh", "233", 1, undefined, "غانا"],
            ["Gibraltar", "gi", "350", 1, undefined, "جبل طارق"],
            ["Greenland", "gl", "299", 1, undefined, "جرينلاند"],
            ["Gambia", "gm", "220", 1, undefined, "غامبيا"],
            ["Guinea", "gn", "224", 1, undefined, "غينيا"],
            ["Guadeloupe", "gp", "590", 2, ["690", "691", "692", "693", "694", "695", "696", "697", "698", "699"], "غوادلوب"],
            ["Equatorial Guinea", "gq", "240", 1, undefined, "غينيا الاستوائية"],
            ["Greece", "gr", "30", 1, undefined, "اليونان"],
            ["South Georgia & South Sandwich Islands", "gs", "500", 2, undefined, "جورجيا الجنوبية وجزر ساندويتش الجنوبية"],
            ["Guatemala", "gt", "502", 1, undefined, "غواتيمالا"],
            ["Guam", "gu", "1", 11, ["671"], "غوام"],
            ["Guinea-Bissau", "gw", "245", 1, undefined, "غينيا بيساو"],
            ["Guyana", "gy", "592", 1, undefined, "غيانا"],
            ["Hong Kong SAR China", "hk", "852", 1, undefined, "هونغ كونغ"],
            ["Honduras", "hn", "504", 1, undefined, "هندوراس"],
            ["Croatia", "hr", "385", 1, undefined, "كرواتيا"],
            ["Haiti", "ht", "509", 1, undefined, "هايتي"],
            ["Hungary", "hu", "36", 1, undefined, "المجر"],
            ["Indonesia", "id", "62", 1, undefined, "إندونيسيا"],
            ["Ireland", "ie", "353", 1, undefined, "أيرلندا"],
            ["Israel", "il", "972", 1, undefined, "إسرائيل"],
            ["Isle of Man", "im", "44", 3, ["1624"], "جزيرة مان"],
            ["India", "in", "91", 1, undefined, "الهند"],
            ["British Indian Ocean Territory", "io", "246", 1, undefined, "إقليم المحيط الهندي البريطاني"],
            ["Iraq", "iq", "964", 1, undefined, "العراق"],
            ["Iran", "ir", "98", 1, undefined, "إيران"],
            ["Iceland", "is", "354", 1, undefined, "آيسلندا"],
            ["Italy", "it", "39", 1, undefined, "إيطاليا"],
            ["Jersey", "je", "44", 4, ["1534"], "جيرزي"],
            ["Jamaica", "jm", "1", 12, ["876", "658"], "جامايكا"],
            ["Jordan", "jo", "962", 1, undefined, "الأردن"],
            ["Japan", "jp", "81", 1, undefined, "اليابان"],
            ["Kenya", "ke", "254", 1, undefined, "كينيا"],
            ["Kyrgyzstan", "kg", "996", 1, undefined, "قيرغيزستان"],
            ["Cambodia", "kh", "855", 1, undefined, "كمبوديا"],
            ["Kiribati", "ki", "686", 1, undefined, "كيريباتي"],
            ["Comoros", "km", "269", 1, undefined, "جزر القمر"],
            ["Saint Kitts and Nevis", "kn", "1", 13, ["869"], "سانت كيتس ونيفيس"],
            ["North Korea", "kp", "850", 1, undefined, "كوريا الشمالية"],
            ["South Korea", "kr", "82", 1, undefined, "كوريا الجنوبية"],
            ["Kuwait", "kw", "965", 1, undefined, "الكويت"],
            ["Cayman Islands", "ky", "1", 14, ["345"], "جزر كايمان"],
            ["Kazakhstan", "kz", "7", 1, ["6", "7"], "كازاخستان"],
            ["Russia", "ru", "7", 2, undefined, "روسيا"],
            ["Laos", "la", "856", 1, undefined, "لاوس"],
            ["Lebanon", "lb", "961", 1, undefined, "لبنان"],
            ["Saint Lucia", "lc", "1", 15, ["758"], "سانت لوسيا"],
            ["Liechtenstein", "li", "423", 1, undefined, "ليختنشتاين"],
            ["Sri Lanka", "lk", "94", 1, undefined, "سريلانكا"],
            ["Liberia", "lr", "231", 1, undefined, "ليبيريا"],
            ["Lesotho", "ls", "266", 1, undefined, "ليسوتو"],
            ["Lithuania", "lt", "370", 1, undefined, "ليتوانيا"],
            ["Luxembourg", "lu", "352", 1, undefined, "لوكسمبورغ"],
            ["Latvia", "lv", "371", 1, undefined, "لاتفيا"],
            ["Libya", "ly", "218", 1, undefined, "ليبيا"],
            ["Monaco", "mc", "377", 1, undefined, "موناكو"],
            ["Moldova", "md", "373", 1, undefined, "مولدوفا"],
            ["Montenegro", "me", "382", 1, undefined, "الجبل الأسود"],
            ["Saint Martin", "mf", "590", 3, ["690"], "سانت مارتن (الجزء الفرنسي)"],
            ["Madagascar", "mg", "261", 1, undefined, "مدغشقر"],
            ["Marshall Islands", "mh", "692", 1, undefined, "جزر مارشال"],
            ["Mali", "ml", "223", 1, undefined, "مالي"],
            ["Myanmar (Burma)", "mm", "95", 1, undefined, "بورما"],
            ["Mongolia", "mn", "976", 1, undefined, "منغوليا"],
            ["Macao", "mo", "853", 1, undefined, "ماكاو"],
            ["North Macedonia", "mk", "389", 1, undefined, "مقدونيا الشمالية"],
            ["Northern Mariana Islands", "mp", "1", 16, ["670"], "جزر ماريانا الشمالية"],
            ["Martinique", "mq", "596", 1, undefined, "مارتينيك"],
            ["Mauritania", "mr", "222", 1, undefined, "موريتانيا"],
            ["Montserrat", "ms", "1", 17, ["664"], "مونتسرات"],
            ["Malta", "mt", "356", 1, undefined, "مالطا"],
            ["Mauritius", "mu", "230", 1, undefined, "موريشيوس"],
            ["Maldives", "mv", "960", 1, undefined, "جزر المالديف"],
            ["Malawi", "mw", "265", 1, undefined, "مالاوي"],
            ["Mexico", "mx", "52", 1, undefined, "المكسيك"],
            ["Malaysia", "my", "60", 1, undefined, "ماليزيا"],
            ["Mozambique", "mz", "258", 1, undefined, "موزمبيق"],
            ["Namibia", "na", "264", 1, undefined, "ناميبيا"],
            ["New Caledonia", "nc", "687", 1, undefined, "كاليدونيا الجديدة"],
            ["Niger", "ne", "227", 1, undefined, "النيجر"],
            ["Norfolk Island", "nf", "672", 2, ["3"], "جزيرة نورفولك"],
            ["Nigeria", "ng", "234", 1, undefined, "نيجيريا"],
            ["Nicaragua", "ni", "505", 1, undefined, "نيكاراغوا"],
            ["Netherlands", "nl", "31", 1, undefined, "هولندا"],
            ["Norway", "no", "47", 1, undefined, "النرويج"],
            ["Nepal", "np", "977", 1, undefined, "نيبال"],
            ["Nauru", "nr", "674", 1, undefined, "ناورو"],
            ["Niue", "nu", "683", 1, undefined, "نييوي"],
            ["New Zealand", "nz", "64", 1, undefined, "نيوزيلندا"],
            ["Oman", "om", "968", 1, undefined, "عمان"],
            ["Panama", "pa", "507", 1, undefined, "بنما"],
            ["Peru", "pe", "51", 1, undefined, "بيرو"],
            ["French Polynesia", "pf", "689", 1, undefined, "بولينزيا الفرنسية"],
            ["Papua New Guinea", "pg", "675", 1, undefined, "بابوا غينيا الجديدة"],
            ["Philippines", "ph", "63", 1, undefined, "الفلبين"],
            ["Pakistan", "pk", "92", 1, undefined, "باكستان"],
            ["Poland", "pl", "48", 1, undefined, "بولندا"],
            ["Saint Pierre and Miquelon", "pm", "508", 1, undefined, "سان بيير وميكلون"],
            ["Pitcairn Islands", "pn", "649", 1, undefined, "جزر بيتكيرن"],
            ["Puerto Rico", "pr", "1", 18, ["787", "939"], "بورتوريكو"],
            ["Palestinian Territories", "ps", "970", 1, undefined, "فلسطين"],
            ["Portugal", "pt", "351", 1, undefined, "البرتغال"],
            ["Palau", "pw", "680", 1, undefined, "بالاو"],
            ["Paraguay", "py", "595", 1, undefined, "باراغواي"],
            ["Qatar", "qa", "974", 1, undefined, "قطر"],
            ["Reunion", "re", "262", 1, undefined, "لا ريونيون"],
            ["Romania", "ro", "40", 1, undefined, "رومانيا"],
            ["Serbia", "rs", "381", 1, undefined, "صربيا"],
            ["Rwanda", "rw", "250", 1, undefined, "رواندا"],
            ["Saudi Arabia", "sa", "966", 1, undefined, "السعودية"],
            ["Solomon Islands", "sb", "677", 1, undefined, "جزر سليمان"],
            ["Seychelles", "sc", "248", 1, undefined, "سيشل"],
            ["Sudan", "sd", "249", 1, undefined, "السودان"],
            ["Sweden", "se", "46", 1, undefined, "السويد"],
            ["Singapore", "sg", "65", 1, undefined, "سنغافورة"],
            ["Saint Helena", "sh", "290", 1, undefined, "سانت هيلينا وأسينشين وتريستان دا كونا"],
            ["Slovenia", "si", "386", 1, undefined, "سلوفينيا"],
            ["Svalbard and Jan Mayen", "sj", "47", 2, ["79"], "سفالبارد ويان ماين"],
            ["Slovakia", "sk", "421", 1, undefined, "سلوفاكيا"],
            ["Sierra Leone", "sl", "232", 1, undefined, "سيراليون"],
            ["San Marino", "sm", "378", 1, undefined, "سان مارينو"],
            ["Senegal", "sn", "221", 1, undefined, "السنغال"],
            ["Somalia", "so", "252", 1, undefined, "الصومال"],
            ["Suriname", "sr", "597", 1, undefined, "سورينام"],
            ["South Sudan", "ss", "211", 1, undefined, "جنوب السودان"],
            ["Sao Tome and Principe", "st", "239", 1, undefined, "ساو تومي وبرينسيب"],
            ["El Salvador", "sv", "503", 1, undefined, "السلفادور"],
            ["Sint Maarten", "sx", "1", 19, ["721"], "سانت مارتن (الجزء الهولندي)"],
            ["Syria", "sy", "963", 1, undefined, "سوريا"],
            ["Turks and Caicos Islands", "tc", "1", 20, ["649"], "جزر توركس وكايكوس"],
            ["Chad", "td", "235", 1, undefined, "تشاد"],
            ["Togo", "tg", "228", 1, undefined, "توغو"],
            ["Thailand", "th", "66", 1, undefined, "تايلاند"],
            ["Tajikistan", "tj", "992", 1, undefined, "طاجيكستان"],
            ["Tokelau", "tk", "690", 1, undefined, "توكيلاو"],
            ["Timor-Leste", "tl", "670", 1, undefined, "تيمور الشرقية"],
            ["Turkmenistan", "tm", "993", 1, undefined, "تركمانستان"],
            ["Tunisia", "tn", "216", 1, undefined, "تونس"],
            ["Tonga", "to", "676", 1, undefined, "تونغا"],
            ["Turkey", "tr", "90", 1, undefined, "تركيا"],
            ["Trinidad and Tobago", "tt", "1", 21, ["868"], "ترينيداد وتوباغو"],
            ["Tuvalu", "tv", "688", 1, undefined, "توفالو"],
            ["Taiwan", "tw", "886", 1, undefined, "تايوان"],
            ["Tanzania", "tz", "255", 1, undefined, "تانزانيا"],
            ["Ukraine", "ua", "380", 1, undefined, "أوكرانيا"],
            ["Uganda", "ug", "256", 1, undefined, "أوغندا"],
            ["United States", "us", "1", 22, undefined, "الولايات المتحدة"],
            ["Uruguay", "uy", "598", 1, undefined, "الأوروغواي"],
            ["Uzbekistan", "uz", "998", 1, undefined, "أوزبكستان"],
            ["Vatican City", "va", "39", 2, undefined, "الفاتيكان"],
            ["St. Vincent & Grenadines", "vc", "1", 23, ["784"], "سانت فينسنت والغرينادين"],
            ["Venezuela", "ve", "58", 1, undefined, "فنزويلا"],
            ["Virgin Islands (British)", "vg", "1", 24, ["284"], "جزر العذراء البريطانية"],
            ["Virgin Islands (US)", "vi", "1", 25, ["340"], "جزر العذراء الأمريكية"],
            ["Vietnam", "vn", "84", 1, undefined, "فيتنام"],
            ["Vanuatu", "vu", "678", 1, undefined, "فانواتو"],
            ["Wallis and Futuna", "wf", "681", 1, undefined, "والس وفوتونا"],
            ["Samoa", "ws", "685", 1, undefined, "ساموا"],
            ["Yemen", "ye", "967", 1, undefined, "اليمن"],
            ["Mayotte", "yt", "262", 2, undefined, "مايوت"],
            ["South Africa", "za", "27", 1, undefined, "جنوب أفريقيا"],
            ["Zambia", "zm", "260", 1, undefined, "زامبيا"],
            ["Zimbabwe", "zw", "263", 1, undefined, "زيمبابوي"]
        ];


        // loop over all of the countries above, restructuring the data to be objects with named keys
        for (var i = 0; i < allCountries.length; i++) {
            var c = allCountries[i];
            allCountries[i] = {
                name: c[0],
                nameAr: c[5],
                iso2: c[1],
                dialCode: c[2],
                priority: c[3] || 0,
                areaCodes: c[4] || null
            };
        }
        "use strict";

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        function _defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        function _createClass(Constructor, protoProps, staticProps) {
            if (protoProps) _defineProperties(Constructor.prototype, protoProps);
            if (staticProps) _defineProperties(Constructor, staticProps);
            return Constructor;
        }
        var intlTelInputGlobals = {
            getInstance: function getInstance(input) {
                var id = input.getAttribute("data-intl-tel-input-id");
                return window.intlTelInputGlobals.instances[id];
            },
            instances: {},
            // using a global like this allows us to mock it in the tests
            documentReady: function documentReady() {
                return document.readyState === "complete";
            }
        };
        if (typeof window === "object") window.intlTelInputGlobals = intlTelInputGlobals;
        // these vars persist through all instances of the plugin
        var id = 0;
        var defaults = {
            // whether or not to allow the dropdown
            allowDropdown: true,
            // if there is just a dial code in the input: remove it on blur
            autoHideDialCode: true,
            // add a placeholder in the input with an example number for the selected country
            autoPlaceholder: "polite",
            // modify the parentClass
            customContainer: "",
            // modify the auto placeholder
            customPlaceholder: null,
            // append menu to specified element
            dropdownContainer: null,
            // don't display these countries
            excludeCountries: [],
            // format the input value during initialisation and on setNumber
            formatOnDisplay: true,
            // geoIp lookup function
            geoIpLookup: null,
            // inject a hidden input with this name, and on submit, populate it with the result of getNumber
            hiddenInput: "",
            // initial country
            initialCountry: "",
            // localized country names e.g. { 'de': 'Deutschland' }
            localizedCountries: null,
            // don't insert international dial codes
            nationalMode: true,
            // display only these countries
            onlyCountries: [],
            // number type to use for placeholders
            placeholderNumberType: "MOBILE",
            // the countries at the top of the list. defaults to united states and united kingdom
            preferredCountries: ["us", "gb"],
            // display the country dial code next to the selected flag so it's not part of the typed number
            separateDialCode: false,
            // specify the path to the libphonenumber script to enable validation/formatting
            utilsScript: ""
        };
        // https://en.wikipedia.org/wiki/List_of_North_American_Numbering_Plan_area_codes#Non-geographic_area_codes
        var regionlessNanpNumbers = ["800", "822", "833", "844", "855", "866", "877", "880", "881", "882", "883", "884", "885", "886", "887", "888", "889"];
        // utility function to iterate over an object. can't use Object.entries or native forEach because
        // of IE11
        var forEachProp = function forEachProp(obj, callback) {
            var keys = Object.keys(obj);
            for (var i = 0; i < keys.length; i++) {
                callback(keys[i], obj[keys[i]]);
            }
        };
        // run a method on each instance of the plugin
        var forEachInstance = function forEachInstance(method) {
            forEachProp(window.intlTelInputGlobals.instances, function(key) {
                window.intlTelInputGlobals.instances[key][method]();
            });
        };
        // this is our plugin class that we will create an instance of
        // eslint-disable-next-line no-unused-vars
        var Iti = /*#__PURE__*/
            function() {
                function Iti(input, options) {
                    var _this = this;
                    _classCallCheck(this, Iti);
                    this.id = id++;
                    this.telInput = input;
                    this.activeItem = null;
                    this.highlightedItem = null;
                    // process specified options / defaults
                    // alternative to Object.assign, which isn't supported by IE11
                    var customOptions = options || {};
                    this.options = {};
                    forEachProp(defaults, function(key, value) {
                        _this.options[key] = customOptions.hasOwnProperty(key) ? customOptions[key] : value;
                    });
                    this.hadInitialPlaceholder = Boolean(input.getAttribute("placeholder"));
                }
                _createClass(Iti, [{
                    key: "_init",
                    value: function _init() {
                        var _this2 = this;
                        // if in nationalMode, disable options relating to dial codes
                        if (this.options.nationalMode) this.options.autoHideDialCode = false;
                        // if separateDialCode then doesn't make sense to A) insert dial code into input
                        // (autoHideDialCode), and B) display national numbers (because we're displaying the country
                        // dial code next to them)
                        if (this.options.separateDialCode) {
                            this.options.autoHideDialCode = this.options.nationalMode = false;
                        }
                        // we cannot just test screen size as some smartphones/website meta tags will report desktop
                        // resolutions
                        // Note: for some reason jasmine breaks if you put this in the main Plugin function with the
                        // rest of these declarations
                        // Note: to target Android Mobiles (and not Tablets), we must find 'Android' and 'Mobile'
                        this.isMobile = /Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                        if (this.isMobile) {
                            // trigger the mobile dropdown css
                            document.body.classList.add("iti-mobile");
                            // on mobile, we want a full screen dropdown, so we must append it to the body
                            if (!this.options.dropdownContainer) this.options.dropdownContainer = document.body;
                        }
                        // these promises get resolved when their individual requests complete
                        // this way the dev can do something like iti.promise.then(...) to know when all requests are
                        // complete
                        if (typeof Promise !== "undefined") {
                            var autoCountryPromise = new Promise(function(resolve, reject) {
                                _this2.resolveAutoCountryPromise = resolve;
                                _this2.rejectAutoCountryPromise = reject;
                            });
                            var utilsScriptPromise = new Promise(function(resolve, reject) {
                                _this2.resolveUtilsScriptPromise = resolve;
                                _this2.rejectUtilsScriptPromise = reject;
                            });
                            this.promise = Promise.all([autoCountryPromise, utilsScriptPromise]);
                        } else {
                            // prevent errors when Promise doesn't exist
                            this.resolveAutoCountryPromise = this.rejectAutoCountryPromise = function() {};
                            this.resolveUtilsScriptPromise = this.rejectUtilsScriptPromise = function() {};
                        }
                        // in various situations there could be no country selected initially, but we need to be able
                        // to assume this variable exists
                        this.selectedCountryData = {};
                        // process all the data: onlyCountries, excludeCountries, preferredCountries etc
                        this._processCountryData();
                        // generate the markup
                        this._generateMarkup();
                        // set the initial state of the input value and the selected flag
                        this._setInitialState();
                        // start all of the event listeners: autoHideDialCode, input keydown, selectedFlag click
                        this._initListeners();
                        // utils script, and auto country
                        this._initRequests();
                    }
                }, {
                    key: "_processCountryData",
                    value: function _processCountryData() {
                        // process onlyCountries or excludeCountries array if present
                        this._processAllCountries();
                        // process the countryCodes map
                        this._processCountryCodes();
                        // process the preferredCountries
                        this._processPreferredCountries();
                        // translate countries according to localizedCountries option
                        if (this.options.localizedCountries) this._translateCountriesByLocale();
                        // sort countries by name
                        if (this.options.onlyCountries.length) {
                            this.countries.sort(this._countryNameSort);
                        }
                    }
                }, {
                    key: "_addCountryCode",
                    value: function _addCountryCode(iso2, countryCode, priority) {
                        if (countryCode.length > this.countryCodeMaxLen) {
                            this.countryCodeMaxLen = countryCode.length;
                        }
                        if (!this.countryCodes.hasOwnProperty(countryCode)) {
                            this.countryCodes[countryCode] = [];
                        }
                        // bail if we already have this country for this countryCode
                        for (var i = 0; i < this.countryCodes[countryCode].length; i++) {
                            if (this.countryCodes[countryCode][i] === iso2) return;
                        }
                        // check for undefined as 0 is falsy
                        var index = priority !== undefined ? priority : this.countryCodes[countryCode].length;
                        this.countryCodes[countryCode][index] = iso2;
                    }
                }, {
                    key: "_processAllCountries",
                    value: function _processAllCountries() {
                        if (this.options.onlyCountries.length) {
                            var lowerCaseOnlyCountries = this.options.onlyCountries.map(function(country) {
                                return country.toLowerCase();
                            });
                            this.countries = allCountries.filter(function(country) {
                                return lowerCaseOnlyCountries.indexOf(country.iso2) > -1;
                            });
                        } else if (this.options.excludeCountries.length) {
                            var lowerCaseExcludeCountries = this.options.excludeCountries.map(function(country) {
                                return country.toLowerCase();
                            });
                            this.countries = allCountries.filter(function(country) {
                                return lowerCaseExcludeCountries.indexOf(country.iso2) === -1;
                            });
                        } else {
                            this.countries = allCountries;
                        }
                    }
                }, {
                    key: "_translateCountriesByLocale",
                    value: function _translateCountriesByLocale() {
                        for (var i = 0; i < this.countries.length; i++) {
                            var iso = this.countries[i].iso2.toLowerCase();
                            if (this.options.localizedCountries.hasOwnProperty(iso)) {
                                this.countries[i].nameAr = this.options.localizedCountries[iso];
                            }
                        }
                    }
                }, {
                    key: "_countryNameSort",
                    value: function _countryNameSort(a, b) {
                        return a.name.localeCompare(b.name);
                    }
                }, {
                    key: "_processCountryCodes",
                    value: function _processCountryCodes() {
                        this.countryCodeMaxLen = 0;
                        // here we store just dial codes
                        this.dialCodes = {};
                        // here we store "country codes" (both dial codes and their area codes)
                        this.countryCodes = {};
                        // first: add dial codes
                        for (var i = 0; i < this.countries.length; i++) {
                            var c = this.countries[i];
                            if (!this.dialCodes[c.dialCode]) this.dialCodes[c.dialCode] = true;
                            this._addCountryCode(c.iso2, c.dialCode, c.priority);
                        }
                        // next: add area codes
                        // this is a second loop over countries, to make sure we have all of the "root" countries
                        // already in the map, so that we can access them, as each time we add an area code substring
                        // to the map, we also need to include the "root" country's code, as that also matches
                        for (var _i = 0; _i < this.countries.length; _i++) {
                            var _c = this.countries[_i];
                            // area codes
                            if (_c.areaCodes) {
                                var rootCountryCode = this.countryCodes[_c.dialCode][0];
                                // for each area code
                                for (var j = 0; j < _c.areaCodes.length; j++) {
                                    var areaCode = _c.areaCodes[j];
                                    // for each digit in the area code to add all partial matches as well
                                    for (var k = 1; k < areaCode.length; k++) {
                                        var partialDialCode = _c.dialCode + areaCode.substr(0, k);
                                        // start with the root country, as that also matches this dial code
                                        this._addCountryCode(rootCountryCode, partialDialCode);
                                        this._addCountryCode(_c.iso2, partialDialCode);
                                    }
                                    // add the full area code
                                    this._addCountryCode(_c.iso2, _c.dialCode + areaCode);
                                }
                            }
                        }
                    }
                }, {
                    key: "_processPreferredCountries",
                    value: function _processPreferredCountries() {
                        this.preferredCountries = [];
                        for (var i = 0; i < this.options.preferredCountries.length; i++) {
                            var countryCode = this.options.preferredCountries[i].toLowerCase();
                            var countryData = this._getCountryData(countryCode, false, true);
                            if (countryData) this.preferredCountries.push(countryData);
                        }
                    }
                }, {
                    key: "_createEl",
                    value: function _createEl(name, attrs, container) {
                        var el = document.createElement(name);
                        if (attrs) forEachProp(attrs, function(key, value) {
                            return el.setAttribute(key, value);
                        });
                        if (container) container.appendChild(el);
                        return el;
                    }
                }, {
                    key: "_generateMarkup",
                    value: function _generateMarkup() {
                        var _markupThis = this;
                        // if autocomplete does not exist on the element and its form, then
                        // prevent autocomplete as there's no safe, cross-browser event we can react to, so it can
                        // easily put the plugin in an inconsistent state e.g. the wrong flag selected for the
                        // autocompleted number, which on submit could mean wrong number is saved (esp in nationalMode)
                        if (!this.telInput.hasAttribute("autocomplete") && !(this.telInput.form && this.telInput.form.hasAttribute("autocomplete"))) {
                            this.telInput.setAttribute("autocomplete", "off");
                        }
                        // containers (mostly for positioning)
                        var parentClass = "iti";
                        if (this.options.allowDropdown) parentClass += " iti--allow-dropdown";
                        if (this.options.separateDialCode) parentClass += " iti--separate-dial-code";
                        if (this.options.customContainer) {
                            parentClass += " ";
                            parentClass += this.options.customContainer;
                        }
                        var wrapper = this._createEl("div", {
                            "class": parentClass
                        });

                        this.telInput.parentNode.insertBefore(wrapper, this.telInput)

                        this.flagsContainer = this._createEl("div", {
                            "class": "iti__flag-container",
                            "id": "iti__dropdown-container"
                        }, wrapper);
                        wrapper.appendChild(this.telInput);

                        // selected flag (displayed to left of input)
                        this.selectedFlag = this._createEl("div", {
                            "class": "iti__selected-flag",
                            role: "combobox",
                            "aria-controls": "iti-".concat(this.id, "__country-listbox"),
                            "aria-owns": "iti-".concat(this.id, "__country-listbox"),
                            "aria-expanded": "false"
                        }, this.flagsContainer);

                        this.selectedFlagInner = this._createEl("div", {
                            "class": "iti__flag"
                        }, this.selectedFlag);

                        if (this.options.separateDialCode) {
                            this.selectedDialCode = this._createEl("div", {
                                "class": "iti__selected-dial-code"
                            }, this.selectedFlag);
                        }

                        if (this.options.allowDropdown) {
                            // make element focusable and tab navigable
                            this.selectedFlag.setAttribute("tabindex", "0");

                            this.dropdownArrow = this._createEl("div", {
                                "class": "iti__arrow"
                            }, this.selectedFlag);

                            // country dropdown: preferred countries, then divider, then all countries
                            this.dropdownContainer = this._createEl("div", {
                                "class": "iti__country-list iti__hide"
                            });

                            this.searchInputContainer = this._createEl("div", {
                                "class": "iti__search-container",
                            })

                            this.searchInput = this._createEl("input", {
                                "class": "iti__country-search",
                                "placeholder": "Search country or code",
                            }, wrapper);

                            this.dropdownContainer.appendChild(this.searchInputContainer);
                            this.searchInputContainer.appendChild(this.searchInput);

                            this.countryList = this._createEl("ul", {
                                "class": "iti__country-content",
                                id: "iti-".concat(this.id, "__country-listbox"),
                                role: "listbox",
                                "aria-label": "List of countries"
                            });
                            this.dropdownContainer.appendChild(this.countryList);

                            if (this.preferredCountries.length) {
                                this._appendListItems(this.preferredCountries, "iti__preferred", true);
                                this._createEl("li", {
                                    "class": "iti__divider",
                                    role: "separator",
                                    "aria-disabled": "true"
                                }, this.countryList);
                            }
                            this._appendListItems(this.countries, "iti__standard");
                            // create dropdownContainer markup
                            if (this.options.dropdownContainer) {
                                this.dropdown = this._createEl("div", {
                                    "class": "iti iti--container"
                                });
                                this.dropdown.appendChild(this.dropdownContainer);
                            } else {
                                this.flagsContainer.appendChild(this.dropdownContainer);
                            }
                        }

                        if (this.options.hiddenInput) {
                            var hiddenInputName = this.options.hiddenInput;
                            var name = this.telInput.getAttribute("name");
                            if (name) {
                                var i = name.lastIndexOf("[");
                                // if input name contains square brackets, then give the hidden input the same name,
                                // replacing the contents of the last set of brackets with the given hiddenInput name
                                if (i !== -1) hiddenInputName = "".concat(name.substr(0, i), "[").concat(hiddenInputName, "]");
                            }
                            this.hiddenInput = this._createEl("input", {
                                type: "hidden",
                                name: hiddenInputName
                            });
                            wrapper.appendChild(this.hiddenInput);
                        }
                    }
                }, {
                    key: "_appendListItems",
                    value: function _appendListItems(countries, className, preferred) {
                        // we create so many DOM elements, it is faster to build a temp string
                        // and then add everything to the DOM in one go at the end
                        var tmp = "";

                        var lang = window.currentLanguage ? window.currentLanguage.toLowerCase() : "";
                        var isArabic = lang === "ar" || lang.startsWith("ar-");
                        // for each country
                        for (var i = 0; i < countries.length; i++) {
                            var c = countries[i];
                            var idSuffix = preferred ? "-preferred" : "";
                            // open the list item
                            tmp += "<li class='iti__country ".concat(className, "' tabIndex='-1' id='iti-").concat(this.id, "__item-").concat(c.iso2).concat(idSuffix, "' role='option' data-dial-code='").concat(c.dialCode, "' data-country-code='").concat(c.iso2, "' aria-selected='false'>");
                            // add the flag
                            tmp += "<div class='iti__flag-box'><div class='iti__flag iti__".concat(c.iso2, "'></div></div>");
                            // and the country name and dial code
                            // tmp += "<span class='iti__country-name'>".concat(c.name.substr(0, c.name.indexOf(" (") !== -1 ? c.name.indexOf(" (") : c.name.length), "</span>");
                            tmp += "<span class='iti__country-name'>" +
                                (isArabic && c.nameAr ?
                                    c.nameAr :
                                    c.name.substr(0, c.name.indexOf(" (") !== -1 ? c.name.indexOf(" (") : c.name.length)
                                ) +
                                "</span>";
                            tmp += "<span class='iti__dial-code'>+".concat(c.dialCode, "</span>");
                            // close the list item
                            tmp += "</li>";
                        }
                        this.countryList.insertAdjacentHTML("beforeend", tmp);
                    }
                }, {
                    key: "_setInitialState",
                    value: function _setInitialState() {
                        // fix firefox bug: when first load page (with input with value set to number with intl dial
                        // code) and initialising plugin removes the dial code from the input, then refresh page,
                        // and we try to init plugin again but this time on number without dial code so get grey flag
                        var attributeValue = this.telInput.getAttribute("value");
                        var inputValue = this.telInput.value;
                        var useAttribute = attributeValue && attributeValue.charAt(0) === "+" && (!inputValue || inputValue.charAt(0) !== "+");
                        var val = useAttribute ? attributeValue : inputValue;
                        var dialCode = this._getDialCode(val);
                        var isRegionlessNanp = this._isRegionlessNanp(val);
                        var _this$options = this.options,
                            initialCountry = _this$options.initialCountry,
                            nationalMode = _this$options.nationalMode,
                            autoHideDialCode = _this$options.autoHideDialCode,
                            separateDialCode = _this$options.separateDialCode;
                        // if we already have a dial code, and it's not a regionlessNanp, we can go ahead and set the
                        // flag, else fall back to the default country
                        if (dialCode && !isRegionlessNanp) {
                            this._updateFlagFromNumber(val);
                        } else if (initialCountry !== "auto") {
                            // see if we should select a flag
                            if (initialCountry) {
                                this._setFlag(initialCountry.toLowerCase());
                            } else {
                                if (dialCode && isRegionlessNanp) {
                                    // has intl dial code, is regionless nanp, and no initialCountry, so default to US
                                    this._setFlag("us");
                                } else {
                                    // no dial code and no initialCountry, so default to first in list
                                    this.defaultCountry = this.preferredCountries.length ? this.preferredCountries[0].iso2 : this.countries[0].iso2;
                                    if (!val) {
                                        this._setFlag(this.defaultCountry);
                                    }
                                }
                            }
                            // if empty and no nationalMode and no autoHideDialCode then insert the default dial code
                            if (!val && !nationalMode && !autoHideDialCode && !separateDialCode) {
                                this.telInput.value = "+".concat(this.selectedCountryData.dialCode);
                            }
                        }
                        // NOTE: if initialCountry is set to auto, that will be handled separately
                        // format - note this wont be run after _updateDialCode as that's only called if no val
                        if (val) this._updateValFromNumber(val);
                    }
                }, {
                    key: "_initListeners",
                    value: function _initListeners() {
                        this._initKeyListeners();
                        if (this.options.autoHideDialCode) this._initBlurListeners();
                        if (this.options.allowDropdown) this._initDropdownListeners();
                        if (this.hiddenInput) this._initHiddenInputListener();
                    }
                }, {
                    key: "_initHiddenInputListener",
                    value: function _initHiddenInputListener() {
                        var _this3 = this;
                        this._handleHiddenInputSubmit = function() {
                            _this3.hiddenInput.value = _this3.getNumber();
                        };
                        if (this.telInput.form) this.telInput.form.addEventListener("submit", this._handleHiddenInputSubmit);
                    }
                }, {
                    key: "_getClosestLabel",
                    value: function _getClosestLabel() {
                        var el = this.telInput;
                        while (el && el.tagName !== "LABEL") {
                            el = el.parentNode;
                        }
                        return el;
                    }
                }, {
                    key: "_initDropdownListeners",
                    value: function _initDropdownListeners() {
                        var _this4 = this;
                        // hack for input nested inside label (which is valid markup): clicking the selected-flag to
                        // open the dropdown would then automatically trigger a 2nd click on the input which would
                        // close it again
                        this._handleLabelClick = function(e) {
                            // if the dropdown is closed, then focus the input, else ignore the click
                            if (_this4.dropdownContainer.classList.contains("iti__hide")) _this4.telInput.focus();
                            else e.preventDefault();
                        };
                        var label = this._getClosestLabel();
                        if (label) label.addEventListener("click", this._handleLabelClick);
                        // toggle country dropdown on click
                        this._handleClickSelectedFlag = function() {
                            // only intercept this event if we're opening the dropdown
                            // else let it bubble up to the top ("click-off-to-close" listener)
                            // we cannot just stopPropagation as it may be needed to close another instance
                            if (_this4.dropdownContainer.classList.contains("iti__hide") && !_this4.telInput.disabled && !_this4.telInput.readOnly) {
                                _this4._showDropdown();
                            }
                        };
                        this.selectedFlag.addEventListener("click", this._handleClickSelectedFlag);
                        // open dropdown list if currently focused
                        this._handleFlagsContainerKeydown = function(e) {
                            var isDropdownHidden = _this4.dropdownContainer.classList.contains("iti__hide");
                            if (isDropdownHidden && ["ArrowUp", "Up", "ArrowDown", "Down", " ", "Enter"].indexOf(e.key) !== -1) {
                                // prevent form from being submitted if "ENTER" was pressed
                                e.preventDefault();
                                // prevent event from being handled again by document
                                e.stopPropagation();
                                _this4._showDropdown();
                            }
                            // allow navigation from dropdown to input on TAB
                            if (e.key === "Tab") _this4._closeDropdown();
                        };
                        this.flagsContainer.addEventListener("keydown", this._handleFlagsContainerKeydown);
                    }
                }, {
                    key: "_initRequests",
                    value: function _initRequests() {
                        var _this5 = this;
                        // if the user has specified the path to the utils script, fetch it on window.load, else resolve
                        if (this.options.utilsScript && !window.intlTelInputUtils) {
                            // if the plugin is being initialised after the window.load event has already been fired
                            if (window.intlTelInputGlobals.documentReady()) {
                                window.intlTelInputGlobals.loadUtils(this.options.utilsScript);
                            } else {
                                // wait until the load event so we don't block any other requests e.g. the flags image
                                window.addEventListener("load", function() {
                                    window.intlTelInputGlobals.loadUtils(_this5.options.utilsScript);
                                });
                            }
                        } else this.resolveUtilsScriptPromise();
                        if (this.options.initialCountry === "auto") this._loadAutoCountry();
                        else this.resolveAutoCountryPromise();
                    }
                }, {
                    key: "_loadAutoCountry",
                    value: function _loadAutoCountry() {
                        // 3 options:
                        // 1) already loaded (we're done)
                        // 2) not already started loading (start)
                        // 3) already started loading (do nothing - just wait for loading callback to fire)
                        if (window.intlTelInputGlobals.autoCountry) {
                            this.handleAutoCountry();
                        } else if (!window.intlTelInputGlobals.startedLoadingAutoCountry) {
                            // don't do this twice!
                            window.intlTelInputGlobals.startedLoadingAutoCountry = true;
                            if (typeof this.options.geoIpLookup === "function") {
                                this.options.geoIpLookup(function(countryCode) {
                                    window.intlTelInputGlobals.autoCountry = countryCode.toLowerCase();
                                    // tell all instances the auto country is ready
                                    // TODO: this should just be the current instances
                                    // UPDATE: use setTimeout in case their geoIpLookup function calls this callback straight
                                    // away (e.g. if they have already done the geo ip lookup somewhere else). Using
                                    // setTimeout means that the current thread of execution will finish before executing
                                    // this, which allows the plugin to finish initialising.
                                    setTimeout(function() {
                                        return forEachInstance("handleAutoCountry");
                                    });
                                }, function() {
                                    return forEachInstance("rejectAutoCountryPromise");
                                });
                            }
                        }
                    }
                }, {
                    key: "_initKeyListeners",
                    value: function _initKeyListeners() {
                        var _this6 = this;
                        // update flag on keyup
                        this._handleKeyupEvent = function() {
                            // if (_this6._updateFlagFromNumber(_this6.telInput.value)) {
                            //     _this6._triggerCountryChange();
                            // }
                        };
                        this.telInput.addEventListener("keyup", this._handleKeyupEvent);
                        // update flag on cut/paste events (now supported in all major browsers)
                        this._handleClipboardEvent = function() {
                            // hack because "paste" event is fired before input is updated
                            setTimeout(_this6._handleKeyupEvent);
                        };
                        this.telInput.addEventListener("cut", this._handleClipboardEvent);
                        this.telInput.addEventListener("paste", this._handleClipboardEvent);
                    }
                }, {
                    key: "_cap",
                    value: function _cap(number) {
                        var max = this.telInput.getAttribute("maxlength");
                        return max && number.length > max ? number.substr(0, max) : number;
                    }
                }, {
                    key: "_initBlurListeners",
                    value: function _initBlurListeners() {
                        var _this7 = this;
                        // on blur or form submit: if just a dial code then remove it
                        this._handleSubmitOrBlurEvent = function() {
                            _this7._removeEmptyDialCode();
                        };
                        if (this.telInput.form) this.telInput.form.addEventListener("submit", this._handleSubmitOrBlurEvent);
                        this.telInput.addEventListener("blur", this._handleSubmitOrBlurEvent);
                    }
                }, {
                    key: "_removeEmptyDialCode",
                    value: function _removeEmptyDialCode() {
                        if (this.telInput.value.charAt(0) === "+") {
                            var numeric = this._getNumeric(this.telInput.value);
                            // if just a plus, or if just a dial code
                            if (!numeric || this.selectedCountryData.dialCode === numeric) {
                                this.telInput.value = "";
                            }
                        }
                    }
                }, {
                    key: "_getNumeric",
                    value: function _getNumeric(s) {
                        return s.replace(/\D/g, "");
                    }
                }, {
                    key: "_trigger",
                    value: function _trigger(name) {
                        // have to use old school document.createEvent as IE11 doesn't support `new Event()` syntax
                        var e = document.createEvent("Event");
                        e.initEvent(name, true, true);
                        // can bubble, and is cancellable
                        this.telInput.dispatchEvent(e);
                    }
                }, {
                    key: "_showDropdown",
                    value: function _showDropdown() {
                        this.dropdownContainer.classList.remove("iti__hide");
                        this.selectedFlag.setAttribute("aria-expanded", "true");
                        this._setDropdownPosition();
                        // update highlighting and scroll to active list item
                        if (this.activeItem) {
                            this._highlightListItem(this.activeItem, false);
                            this._scrollTo(this.activeItem, true);
                        }
                        // bind all the dropdown-related listeners: mouseover, click, click-off, keydown
                        this._bindDropdownListeners();
                        // update the arrow
                        this.dropdownArrow.classList.add("iti__arrow--up");
                        this._trigger("open:countrydropdown");
                        // focus input
                        this.searchInput.focus()
                    }
                }, {
                    key: "_toggleClass",
                    value: function _toggleClass(el, className, shouldHaveClass) {
                        if (shouldHaveClass && !el.classList.contains(className)) el.classList.add(className);
                        else if (!shouldHaveClass && el.classList.contains(className)) el.classList.remove(className);
                    }
                }, {
                    key: "_setDropdownPosition",
                    value: function _setDropdownPosition() {
                        var _this8 = this;
                        if (this.options.dropdownContainer) {
                            this.options.dropdownContainer.appendChild(this.dropdown);
                        }
                        if (!this.isMobile) {
                            var pos = this.telInput.getBoundingClientRect();
                            // windowTop from https://stackoverflow.com/a/14384091/217866
                            var windowTop = window.pageYOffset || document.documentElement.scrollTop;
                            var inputTop = pos.top + windowTop;
                            var dropdownHeight = this.countryList.offsetHeight;
                            // dropdownFitsBelow = (dropdownBottom < windowBottom)
                            var dropdownFitsBelow = inputTop + this.telInput.offsetHeight + dropdownHeight < windowTop + window.innerHeight;
                            var dropdownFitsAbove = inputTop - dropdownHeight > windowTop;
                            // by default, the dropdown will be below the input. If we want to position it above the
                            // input, we add the dropup class.
                            this._toggleClass(this.countryList, "iti__country-list--dropup", !dropdownFitsBelow && dropdownFitsAbove);
                            // if dropdownContainer is enabled, calculate postion
                            if (this.options.dropdownContainer) {
                                // by default the dropdown will be directly over the input because it's not in the flow.
                                // If we want to position it below, we need to add some extra top value.
                                var extraTop = !dropdownFitsBelow && dropdownFitsAbove ? 0 : this.telInput.offsetHeight;
                                // calculate placement
                                this.dropdown.style.top = "".concat(inputTop + extraTop, "px");
                                this.dropdown.style.left = "".concat(pos.left + document.body.scrollLeft, "px");
                                // close menu on window scroll
                                this._handleWindowScroll = function() {
                                    return _this8._closeDropdown();
                                };
                                window.addEventListener("scroll", this._handleWindowScroll);
                            }
                        }
                    }
                }, {
                    key: "_getClosestListItem",
                    value: function _getClosestListItem(target) {
                        var el = target;
                        while (el && el !== this.countryList && !el.classList.contains("iti__country")) {
                            el = el.parentNode;
                        }
                        // if we reached the countryList element, then return null
                        return el === this.countryList ? null : el;
                    }
                }, {
                    key: "_bindDropdownListeners",
                    value: function _bindDropdownListeners() {
                        var _this9 = this;
                        // when mouse over a list item, just highlight that one
                        // we add the class "highlight", so if they hit "enter" we know which one to select
                        this._handleMouseoverCountryList = function(e) {
                            // handle event delegation, as we're listening for this event on the countryList
                            var listItem = _this9._getClosestListItem(e.target);
                            if (listItem) _this9._highlightListItem(listItem, false);
                        };
                        this.countryList.addEventListener("mouseover", this._handleMouseoverCountryList);
                        // listen for country selection
                        this._handleClickCountryList = function(e) {
                            var listItem = _this9._getClosestListItem(e.target);
                            if (listItem) _this9._selectListItem(listItem);
                        };
                        this.countryList.addEventListener("click", this._handleClickCountryList);
                        // click off to close
                        // (except when this initial opening click is bubbling up)
                        // we cannot just stopPropagation as it may be needed to close another instance
                        var isOpening = true;
                        this._handleClickOffToClose = function(e) {
                            if (_this9.searchInput.contains(e.target)) return;
                            if (!isOpening) _this9._closeDropdown();
                            isOpening = false;
                        };
                        document.documentElement.addEventListener("click", this._handleClickOffToClose);
                        // listen for up/down scrolling, enter to select, or letters to jump to country name.
                        // use keydown as keypress doesn't fire for non-char keys and we want to catch if they
                        // just hit down and hold it to scroll down (no keyup event).
                        // listen on the document because that's where key events are triggered if no input has focus

                        this._handleSearchInput = function(e) {
                            var query = e.target.value.toLowerCase().trim(); // Get input value
                            _this9._searchForCountry(query); // Run search function
                        }

                        this.searchInput.addEventListener("input", this._handleSearchInput);

                        var query = "";
                        this._handleKeydownOnDropdown = function(e) {
                            if (e.key === "ArrowUp" || e.key === "Up" || e.key === "ArrowDown" || e.key === "Down") {
                                _this9._handleUpDownKey(e.key);
                            } else if (e.key === "Enter") {
                                _this9._handleEnterKey();
                            } else if (e.key === "Escape") {
                                _this9._closeDropdown();
                            } else if (/^[a-zA-ZÀ-ÿа-яА-Я ]$/.test(e.key)) {
                                _this9._searchForCountry(query);
                            }
                        };
                        document.addEventListener("keydown", this._handleKeydownOnDropdown);
                    }
                }, {
                    key: "_handleUpDownKey",
                    value: function _handleUpDownKey(key) {
                        var next = key === "ArrowUp" || key === "Up" ? this.highlightedItem.previousElementSibling : this.highlightedItem.nextElementSibling;
                        if (next) {
                            // skip the divider
                            if (next.classList.contains("iti__divider")) {
                                next = key === "ArrowUp" || key === "Up" ? next.previousElementSibling : next.nextElementSibling;
                            }
                            this._highlightListItem(next, true);
                        }
                    }
                }, {
                    key: "_handleEnterKey",
                    value: function _handleEnterKey() {
                        if (this.highlightedItem) this._selectListItem(this.highlightedItem);
                    }
                }, {
                    key: "_searchForCountry",
                    value: function _searchForCountry(query) {
                        // Normalize query for dial code search: remove leading "+" or "00"
                        var normalizedDialSearch = query.replace(/^\+/, "").replace(/^00/, "");

                        for (var i = 0; i < this.countries.length; i++) {
                            var country = this.countries[i];

                            // Check if search is in country name
                            // var nameMatches = this._startsWith(country.name, query);
                            var nameMatches = this._startsWith(country.name, query) ||
                                (country.nameAr && this._startsWith(country.nameAr, query));

                            // Check if normalized query matches dial code
                            var dialMatches = this._startsWith(country.dialCode, normalizedDialSearch);

                            if (nameMatches || (normalizedDialSearch && dialMatches)) {
                                var listItem = this.countryList.querySelector(
                                    "#iti-" + this.id + "__item-" + country.iso2
                                );
                                // highlight and scroll
                                this._highlightListItem(listItem, false);
                                this._scrollTo(listItem, true);
                                break;
                            }
                        }
                    }
                }, {
                    key: "_startsWith",
                    value: function _startsWith(a, b) {
                        return a.substr(0, b.length).toLowerCase() === b;
                    }
                }, {
                    key: "_updateValFromNumber",
                    value: function _updateValFromNumber(originalNumber) {
                        var number = originalNumber;
                        if (this.options.formatOnDisplay && window.intlTelInputUtils && this.selectedCountryData) {
                            var useNational = !this.options.separateDialCode && (this.options.nationalMode || number.charAt(0) !== "+");
                            var _intlTelInputUtils$nu = intlTelInputUtils.numberFormat,
                                NATIONAL = _intlTelInputUtils$nu.NATIONAL,
                                INTERNATIONAL = _intlTelInputUtils$nu.INTERNATIONAL;
                            var format = useNational ? NATIONAL : INTERNATIONAL;
                            number = intlTelInputUtils.formatNumber(number, this.selectedCountryData.iso2, format);
                        }
                        number = this._beforeSetNumber(number);
                        this.telInput.value = number;
                    }
                }, {
                    key: "_updateFlagFromNumber",
                    value: function _updateFlagFromNumber(originalNumber) {
                        // if we're in nationalMode and we already have US/Canada selected, make sure the number starts
                        // with a +1 so _getDialCode will be able to extract the area code
                        // update: if we dont yet have selectedCountryData, but we're here (trying to update the flag
                        // from the number), that means we're initialising the plugin with a number that already has a
                        // dial code, so fine to ignore this bit
                        var number = originalNumber;
                        var selectedDialCode = this.selectedCountryData.dialCode;
                        var isNanp = selectedDialCode === "1";
                        if (number && this.options.nationalMode && isNanp && number.charAt(0) !== "+") {
                            if (number.charAt(0) !== "1") number = "1".concat(number);
                            number = "+".concat(number);
                        }
                        // update flag if user types area code for another country
                        if (this.options.separateDialCode && selectedDialCode && number.charAt(0) !== "+") {
                            number = "+".concat(selectedDialCode).concat(number);
                        }
                        // try and extract valid dial code from input
                        var dialCode = this._getDialCode(number, true);
                        var numeric = this._getNumeric(number);
                        var countryCode = null;
                        if (dialCode) {
                            var countryCodes = this.countryCodes[this._getNumeric(dialCode)];
                            // check if the right country is already selected. this should be false if the number is
                            // longer than the matched dial code because in this case we need to make sure that if
                            // there are multiple country matches, that the first one is selected (note: we could
                            // just check that here, but it requires the same loop that we already have later)
                            var alreadySelected = countryCodes.indexOf(this.selectedCountryData.iso2) !== -1 && numeric.length <= dialCode.length - 1;
                            var isRegionlessNanpNumber = selectedDialCode === "1" && this._isRegionlessNanp(numeric);
                            // only update the flag if:
                            // A) NOT (we currently have a NANP flag selected, and the number is a regionlessNanp)
                            // AND
                            // B) the right country is not already selected
                            if (!isRegionlessNanpNumber && !alreadySelected) {
                                // if using onlyCountries option, countryCodes[0] may be empty, so we must find the first
                                // non-empty index
                                for (var j = 0; j < countryCodes.length; j++) {
                                    if (countryCodes[j]) {
                                        countryCode = countryCodes[j];
                                        break;
                                    }
                                }
                            }
                        } else if (number.charAt(0) === "+" && numeric.length) {
                            // invalid dial code, so empty
                            // Note: use getNumeric here because the number has not been formatted yet, so could contain
                            // bad chars
                            countryCode = "";
                        } else if (!number || number === "+") {
                            // empty, or just a plus, so default
                            countryCode = this.defaultCountry;
                        }
                        if (countryCode !== null) {
                            return this._setFlag(countryCode);
                        }
                        return false;
                    }
                }, {
                    key: "_isRegionlessNanp",
                    value: function _isRegionlessNanp(number) {
                        var numeric = this._getNumeric(number);
                        if (numeric.charAt(0) === "1") {
                            var areaCode = numeric.substr(1, 3);
                            return regionlessNanpNumbers.indexOf(areaCode) !== -1;
                        }
                        return false;
                    }
                }, {
                    key: "_highlightListItem",
                    value: function _highlightListItem(listItem, shouldFocus) {
                        var prevItem = this.highlightedItem;
                        if (prevItem) prevItem.classList.remove("iti__highlight");
                        this.highlightedItem = listItem;
                        this.highlightedItem.classList.add("iti__highlight");
                        if (shouldFocus) this.highlightedItem.focus();
                    }
                }, {
                    key: "_getCountryData",
                    value: function _getCountryData(countryCode, ignoreOnlyCountriesOption, allowFail) {
                        var countryList = ignoreOnlyCountriesOption ? allCountries : this.countries;
                        for (var i = 0; i < countryList.length; i++) {
                            if (countryList[i].iso2 === countryCode) {
                                return countryList[i];
                            }
                        }
                        if (allowFail) {
                            return null;
                        }
                        throw new Error("No country data for '".concat(countryCode, "'"));
                    }
                }, {
                    key: "_setFlag",
                    value: function _setFlag(countryCode) {
                        var prevCountry = this.selectedCountryData.iso2 ? this.selectedCountryData : {};
                        // do this first as it will throw an error and stop if countryCode is invalid
                        this.selectedCountryData = countryCode ? this._getCountryData(countryCode, false, false) : {};
                        // update the defaultCountry - we only need the iso2 from now on, so just store that
                        if (this.selectedCountryData.iso2) {
                            this.defaultCountry = this.selectedCountryData.iso2;
                        }
                        this.selectedFlagInner.setAttribute("class", "iti__flag iti__".concat(countryCode));
                        // update the selected country's title attribute
                        var title = countryCode ? "".concat(this.selectedCountryData.name, ": +").concat(this.selectedCountryData.dialCode) : "Unknown";
                        this.selectedFlag.setAttribute("title", title);
                        if (this.options.separateDialCode) {
                            var dialCode = this.selectedCountryData.dialCode ? "+".concat(this.selectedCountryData.dialCode) : "";
                            this.selectedDialCode.innerHTML = dialCode;
                            // offsetWidth is zero if input is in a hidden container during initialisation
                            var selectedFlagWidth = this.selectedFlag.offsetWidth || this._getHiddenSelectedFlagWidth();
                            // add 6px of padding after the grey selected-dial-code box, as this is what we use in the css
                            this.telInput.style.paddingLeft = "".concat(selectedFlagWidth + 6, "px");
                        }
                        // and the input's placeholder
                        this._updatePlaceholder();
                        // update the active list item
                        if (this.options.allowDropdown) {
                            var prevItem = this.activeItem;
                            if (prevItem) {
                                prevItem.classList.remove("iti__active");
                                prevItem.setAttribute("aria-selected", "false");
                            }
                            if (countryCode) {
                                // check if there is a preferred item first, else fall back to standard
                                var nextItem = this.countryList.querySelector("#iti-".concat(this.id, "__item-").concat(countryCode, "-preferred")) || this.countryList.querySelector("#iti-".concat(this.id, "__item-").concat(countryCode));
                                nextItem.setAttribute("aria-selected", "true");
                                nextItem.classList.add("iti__active");
                                this.activeItem = nextItem;
                                this.selectedFlag.setAttribute("aria-activedescendant", nextItem.getAttribute("id"));
                            }
                        }
                        // return if the flag has changed or not
                        return prevCountry.iso2 !== countryCode;
                    }
                }, {
                    key: "_getHiddenSelectedFlagWidth",
                    value: function _getHiddenSelectedFlagWidth() {
                        // to get the right styling to apply, all we need is a shallow clone of the container,
                        // and then to inject a deep clone of the selectedFlag element
                        var containerClone = this.telInput.parentNode.cloneNode();
                        containerClone.style.visibility = "hidden";
                        document.body.appendChild(containerClone);
                        var flagsContainerClone = this.flagsContainer.cloneNode();
                        containerClone.appendChild(flagsContainerClone);
                        var selectedFlagClone = this.selectedFlag.cloneNode(true);
                        flagsContainerClone.appendChild(selectedFlagClone);
                        var width = selectedFlagClone.offsetWidth;
                        containerClone.parentNode.removeChild(containerClone);
                        return width;
                    }
                }, {
                    key: "_updatePlaceholder",
                    value: function _updatePlaceholder() {
                        var shouldSetPlaceholder = this.options.autoPlaceholder === "aggressive" || !this.hadInitialPlaceholder && this.options.autoPlaceholder === "polite";
                        if (window.intlTelInputUtils && shouldSetPlaceholder) {
                            var numberType = intlTelInputUtils.numberType[this.options.placeholderNumberType];
                            var placeholder = this.selectedCountryData.iso2 ? intlTelInputUtils.getExampleNumber(this.selectedCountryData.iso2, this.options.nationalMode, numberType) : "";
                            placeholder = this._beforeSetNumber(placeholder);
                            if (typeof this.options.customPlaceholder === "function") {
                                placeholder = this.options.customPlaceholder(placeholder, this.selectedCountryData);
                            }
                            this.telInput.setAttribute("placeholder", placeholder);
                        }
                    }
                }, {
                    key: "_selectListItem",
                    value: function _selectListItem(listItem) {
                        // update selected flag and active list item
                        var flagChanged = this._setFlag(listItem.getAttribute("data-country-code"));
                        this._closeDropdown();
                        this._updateDialCode(listItem.getAttribute("data-dial-code"), true);
                        // focus the input
                        this.telInput.focus();
                        // put cursor at end - this fix is required for FF and IE11 (with nationalMode=false i.e. auto
                        // inserting dial code), who try to put the cursor at the beginning the first time
                        var len = this.telInput.value.length;
                        this.telInput.setSelectionRange(len, len);
                        if (flagChanged) {
                            this._triggerCountryChange();
                        }
                    }
                }, {
                    key: "_closeDropdown",
                    value: function _closeDropdown() {
                        this.dropdownContainer.classList.add("iti__hide");
                        this.selectedFlag.setAttribute("aria-expanded", "false");
                        // update the arrow
                        this.dropdownArrow.classList.remove("iti__arrow--up");
                        // unbind key events
                        this.searchInput.value = "";
                        document.removeEventListener("keydown", this._handleKeydownOnDropdown);
                        document.documentElement.removeEventListener("click", this._handleClickOffToClose);
                        this.dropdownContainer.removeEventListener("mouseover", this._handleMouseoverCountryList);
                        this.dropdownContainer.removeEventListener("click", this._handleClickCountryList);
                        // remove menu from container
                        if (this.options.dropdownContainer) {
                            if (!this.isMobile) window.removeEventListener("scroll", this._handleWindowScroll);
                            if (this.dropdown.parentNode) this.dropdown.parentNode.removeChild(this.dropdown);
                        }
                        this._trigger("close:countrydropdown");
                    }
                }, {
                    key: "_scrollTo",
                    value: function _scrollTo(element, middle) {
                        var container = this.countryList;
                        // windowTop from https://stackoverflow.com/a/14384091/217866
                        var windowTop = window.pageYOffset || document.documentElement.scrollTop;
                        var containerHeight = container.offsetHeight;
                        var containerTop = container.getBoundingClientRect().top + windowTop;
                        var containerBottom = containerTop + containerHeight;
                        var elementHeight = element.offsetHeight;
                        var elementTop = element.getBoundingClientRect().top + windowTop;
                        var elementBottom = elementTop + elementHeight;
                        var newScrollTop = elementTop - containerTop + container.scrollTop;
                        var middleOffset = containerHeight / 2 - elementHeight / 2;
                        if (elementTop < containerTop) {
                            // scroll up
                            if (middle) newScrollTop -= middleOffset;
                            container.scrollTop = newScrollTop;
                        } else if (elementBottom > containerBottom) {
                            // scroll down
                            if (middle) newScrollTop += middleOffset;
                            var heightDifference = containerHeight - elementHeight;
                            container.scrollTop = newScrollTop - heightDifference;
                        }
                    }
                }, {
                    key: "_updateDialCode",
                    value: function _updateDialCode(newDialCodeBare, hasSelectedListItem) {
                        var inputVal = this.telInput.value;
                        // save having to pass this every time
                        var newDialCode = "+".concat(newDialCodeBare);
                        var newNumber;
                        if (inputVal.charAt(0) === "+") {
                            // there's a plus so we're dealing with a replacement (doesn't matter if nationalMode or not)
                            var prevDialCode = this._getDialCode(inputVal);
                            if (prevDialCode) {
                                // current number contains a valid dial code, so replace it
                                newNumber = inputVal.replace(prevDialCode, newDialCode);
                            } else {
                                // current number contains an invalid dial code, so ditch it
                                // (no way to determine where the invalid dial code ends and the rest of the number begins)
                                newNumber = newDialCode;
                            }
                        } else if (this.options.nationalMode || this.options.separateDialCode) {
                            // don't do anything
                            return;
                        } else {
                            // nationalMode is disabled
                            if (inputVal) {
                                // there is an existing value with no dial code: prefix the new dial code
                                newNumber = newDialCode + inputVal;
                            } else if (hasSelectedListItem || !this.options.autoHideDialCode) {
                                // no existing value and either they've just selected a list item, or autoHideDialCode is
                                // disabled: insert new dial code
                                newNumber = newDialCode;
                            } else {
                                return;
                            }
                        }
                        this.telInput.value = newNumber;
                    }
                }, {
                    key: "_getDialCode",
                    value: function _getDialCode(number, includeAreaCode) {
                        var dialCode = "";
                        // only interested in international numbers (starting with a plus)
                        if (number.charAt(0) === "+") {
                            var numericChars = "";
                            // iterate over chars
                            for (var i = 0; i < number.length; i++) {
                                var c = number.charAt(i);
                                // if char is number (https://stackoverflow.com/a/8935649/217866)
                                if (!isNaN(parseInt(c, 10))) {
                                    numericChars += c;
                                    // if current numericChars make a valid dial code
                                    if (includeAreaCode) {
                                        if (this.countryCodes[numericChars]) {
                                            // store the actual raw string (useful for matching later)
                                            dialCode = number.substr(0, i + 1);
                                        }
                                    } else {
                                        if (this.dialCodes[numericChars]) {
                                            dialCode = number.substr(0, i + 1);
                                            // if we're just looking for a dial code, we can break as soon as we find one
                                            break;
                                        }
                                    }
                                    // stop searching as soon as we can - in this case when we hit max len
                                    if (numericChars.length === this.countryCodeMaxLen) {
                                        break;
                                    }
                                }
                            }
                        }
                        return dialCode;
                    }
                }, {
                    key: "_getFullNumber",
                    value: function _getFullNumber() {
                        var val = this.telInput.value.trim();
                        var dialCode = this.selectedCountryData.dialCode;
                        var prefix;
                        var numericVal = this._getNumeric(val);
                        if (this.options.separateDialCode && val.charAt(0) !== "+" && dialCode && numericVal) {
                            // when using separateDialCode, it is visible so is effectively part of the typed number
                            prefix = "+".concat(dialCode);
                        } else {
                            prefix = "";
                        }
                        return prefix + val;
                    }
                }, {
                    key: "_beforeSetNumber",
                    value: function _beforeSetNumber(originalNumber) {
                        var number = originalNumber;
                        if (this.options.separateDialCode) {
                            var dialCode = this._getDialCode(number);
                            // if there is a valid dial code
                            if (dialCode) {
                                // in case _getDialCode returned an area code as well
                                dialCode = "+".concat(this.selectedCountryData.dialCode);
                                // a lot of numbers will have a space separating the dial code and the main number, and
                                // some NANP numbers will have a hyphen e.g. +1 684-733-1234 - in both cases we want to get
                                // rid of it
                                // NOTE: don't just trim all non-numerics as may want to preserve an open parenthesis etc
                                var start = number[dialCode.length] === " " || number[dialCode.length] === "-" ? dialCode.length + 1 : dialCode.length;
                                number = number.substr(start);
                            }
                        }
                        return this._cap(number);
                    }
                }, {
                    key: "_triggerCountryChange",
                    value: function _triggerCountryChange() {
                        this._trigger("countrychange");
                    }
                }, {
                    key: "handleAutoCountry",
                    value: function handleAutoCountry() {
                        if (this.options.initialCountry === "auto") {
                            // we must set this even if there is an initial val in the input: in case the initial val is
                            // invalid and they delete it - they should see their auto country
                            this.defaultCountry = window.intlTelInputGlobals.autoCountry;
                            // if there's no initial value in the input, then update the flag
                            if (!this.telInput.value) {
                                this.setCountry(this.defaultCountry);
                            }
                            this.resolveAutoCountryPromise();
                        }
                    }
                }, {
                    key: "handleUtils",
                    value: function handleUtils() {
                        // if the request was successful
                        if (window.intlTelInputUtils) {
                            // if there's an initial value in the input, then format it
                            if (this.telInput.value) {
                                this._updateValFromNumber(this.telInput.value);
                            }
                            this._updatePlaceholder();
                        }
                        this.resolveUtilsScriptPromise();
                    }
                }, {
                    key: "destroy",
                    value: function destroy() {
                        var form = this.telInput.form;
                        if (this.options.allowDropdown) {
                            // make sure the dropdown is closed (and unbind listeners)
                            this._closeDropdown();
                            this.selectedFlag.removeEventListener("click", this._handleClickSelectedFlag);
                            this.flagsContainer.removeEventListener("keydown", this._handleFlagsContainerKeydown);
                            // label click hack
                            var label = this._getClosestLabel();
                            if (label) label.removeEventListener("click", this._handleLabelClick);
                            // clear input when dropdown is closed
                            this.searchInput.value = "";
                            this.searchInput.removeEventListener("input", this._handleSearchInput);
                        }
                        // unbind hiddenInput listeners
                        if (this.hiddenInput && form) form.removeEventListener("submit", this._handleHiddenInputSubmit);
                        // unbind autoHideDialCode listeners
                        if (this.options.autoHideDialCode) {
                            if (form) form.removeEventListener("submit", this._handleSubmitOrBlurEvent);
                            this.telInput.removeEventListener("blur", this._handleSubmitOrBlurEvent);
                        }
                        // unbind key events, and cut/paste events
                        this.telInput.removeEventListener("keyup", this._handleKeyupEvent);
                        this.telInput.removeEventListener("cut", this._handleClipboardEvent);
                        this.telInput.removeEventListener("paste", this._handleClipboardEvent);

                        // remove attribute of id instance: data-intl-tel-input-id
                        this.telInput.removeAttribute("data-intl-tel-input-id");
                        // remove markup (but leave the original input)
                        var wrapper = this.telInput.parentNode;
                        wrapper.parentNode.insertBefore(this.telInput, wrapper);
                        wrapper.parentNode.removeChild(wrapper);
                        delete window.intlTelInputGlobals.instances[this.id];
                    }
                }, {
                    key: "getExtension",
                    value: function getExtension() {
                        if (window.intlTelInputUtils) {
                            return intlTelInputUtils.getExtension(this._getFullNumber(), this.selectedCountryData.iso2);
                        }
                        return "";
                    }
                }, {
                    key: "getNumber",
                    value: function getNumber(format) {
                        if (window.intlTelInputUtils) {
                            var iso2 = this.selectedCountryData.iso2;
                            return intlTelInputUtils.formatNumber(this._getFullNumber(), iso2, format);
                        }
                        return "";
                    }
                }, {
                    key: "getNumberType",
                    value: function getNumberType() {
                        if (window.intlTelInputUtils) {
                            return intlTelInputUtils.getNumberType(this._getFullNumber(), this.selectedCountryData.iso2);
                        }
                        return -99;
                    }
                }, {
                    key: "getSelectedCountryData",
                    value: function getSelectedCountryData() {
                        return this.selectedCountryData;
                    }
                }, {
                    key: "getValidationError",
                    value: function getValidationError() {
                        if (window.intlTelInputUtils) {
                            var iso2 = this.selectedCountryData.iso2;
                            return intlTelInputUtils.getValidationError(this._getFullNumber(), iso2);
                        }
                        return -99;
                    }
                }, {
                    key: "isValidNumber",
                    value: function isValidNumber() {
                        var val = this._getFullNumber().trim();
                        var countryCode = this.options.nationalMode ? this.selectedCountryData.iso2 : "";
                        return window.intlTelInputUtils ? intlTelInputUtils.isValidNumber(val, countryCode) : null;
                    }
                }, {
                    key: "setCountry",
                    value: function setCountry(originalCountryCode) {
                        var countryCode = originalCountryCode.toLowerCase();
                        // check if already selected
                        if (!this.selectedFlagInner.classList.contains("iti__".concat(countryCode))) {
                            this._setFlag(countryCode);
                            this._updateDialCode(this.selectedCountryData.dialCode, false);
                            this._triggerCountryChange();
                        }
                    }
                }, {
                    key: "setNumber",
                    value: function setNumber(number) {
                        // we must update the flag first, which updates this.selectedCountryData, which is used for
                        // formatting the number before displaying it
                        var flagChanged = this._updateFlagFromNumber(number);
                        this._updateValFromNumber(number);
                        if (flagChanged) {
                            this._triggerCountryChange();
                        }
                    }
                }, {
                    key: "setPlaceholderNumberType",
                    value: function setPlaceholderNumberType(type) {
                        this.options.placeholderNumberType = type;
                        this._updatePlaceholder();
                    }
                }]);
                return Iti;
            }();
        /********************
         *  STATIC METHODS
         ********************/
        // get the country data object
        intlTelInputGlobals.getCountryData = function() {
            return allCountries;
        };
        // inject a <script> element to load utils.js
        var injectScript = function injectScript(path, handleSuccess, handleFailure) {
            // inject a new script element into the page
            var script = document.createElement("script");
            script.onload = function() {
                forEachInstance("handleUtils");
                if (handleSuccess) handleSuccess();
            };
            script.onerror = function() {
                forEachInstance("rejectUtilsScriptPromise");
                if (handleFailure) handleFailure();
            };
            script.className = "iti-load-utils";
            script.async = true;
            script.src = path;
            document.body.appendChild(script);
        };
        // load the utils script
        intlTelInputGlobals.loadUtils = function(path) {
            // 2 options:
            // 1) not already started loading (start)
            // 2) already started loading (do nothing - just wait for the onload callback to fire, which will
            // trigger handleUtils on all instances, invoking their resolveUtilsScriptPromise functions)
            if (!window.intlTelInputUtils && !window.intlTelInputGlobals.startedLoadingUtilsScript) {
                // only do this once
                window.intlTelInputGlobals.startedLoadingUtilsScript = true;
                // if we have promises, then return a promise
                if (typeof Promise !== "undefined") {
                    return new Promise(function(resolve, reject) {
                        return injectScript(path, resolve, reject);
                    });
                }
                injectScript(path);
            }
            return null;
        };
        // default options
        intlTelInputGlobals.defaults = defaults;
        // version
        intlTelInputGlobals.version = "17.0.12";
        // convenience wrapper
        return function(input, options) {

            var iti = new Iti(input, options);
            iti._init();
            input.setAttribute("data-intl-tel-input-id", iti.id);
            window.intlTelInputGlobals.instances[iti.id] = iti;
            return iti;
        };
    }();
});