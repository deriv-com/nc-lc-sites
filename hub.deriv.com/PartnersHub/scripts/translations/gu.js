(function(i) {
    const t = i["gu"] = i["gu"] || {};
    t.dictionary = Object.assign(t.dictionary || {}, {
        "Block quote": " વિચાર ટાંકો",
        Bold: "ઘાટુ - બોલ્ડ્",
        Code: "",
        Italic: "ત્રાંસુ - ઇટલિક્",
        Strikethrough: "",
        Subscript: "",
        Superscript: "",
        Underline: "નીચે લિટી - અન્ડરલાઇન્"
    });
    t.getPluralForm = function(i) {
        return i != 1
    }
})(window.CKEDITOR_TRANSLATIONS || (window.CKEDITOR_TRANSLATIONS = {}));