/*!
 * Virtual Select v1.0.46
 * https://sa-si-dev.github.io/virtual-select
 * Licensed under MIT (https://github.com/sa-si-dev/virtual-select/blob/master/LICENSE)
 */
! function() {
    "use strict";

    function e(e) {
        return function(e) {
            if (Array.isArray(e)) return t(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || function(e, i) {
            if (e) {
                if ("string" == typeof e) return t(e, i);
                var o = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === o && e.constructor && (o = e.constructor.name), "Map" === o || "Set" === o ? Array.from(e) : "Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? t(e, i) : void 0
            }
        }(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function t(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var i = 0, o = new Array(t); i < t; i++) o[i] = e[i];
        return o
    }

    function i(e) {
        return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, i(e)
    }

    function o(e, t) {
        for (var o = 0; o < t.length; o++) {
            var s = t[o];
            s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, (n = s.key, r = void 0, r = function(e, t) {
                if ("object" !== i(e) || null === e) return e;
                var o = e[Symbol.toPrimitive];
                if (void 0 !== o) {
                    var s = o.call(e, t || "default");
                    if ("object" !== i(s)) return s;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(n, "string"), "symbol" === i(r) ? r : String(r)), s)
        }
        var n, r
    }
    var s = function() {
        function t() {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t)
        }
        var s, n, r;
        return s = t, r = [{
            key: "getString",
            value: function(e) {
                return e || 0 === e ? e.toString() : ""
            }
        }, {
            key: "convertToBoolean",
            value: function(e) {
                return !0 === e || "true" === e || !1 !== e && "false" !== e && arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
            }
        }, {
            key: "isEmpty",
            value: function(e) {
                var t = !1;
                return e ? Array.isArray(e) ? 0 === e.length && (t = !0) : "object" === i(e) && 0 === Object.keys(e).length && (t = !0) : t = !0, t
            }
        }, {
            key: "isNotEmpty",
            value: function(e) {
                return !this.isEmpty(e)
            }
        }, {
            key: "removeItemFromArray",
            value: function(t, i) {
                var o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (!Array.isArray(t) || !t.length) return t;
                var s = o ? e(t) : t,
                    n = s.indexOf(i);
                return -1 !== n && s.splice(n, 1), s
            }
        }, {
            key: "removeArrayEmpty",
            value: function(e) {
                return Array.isArray(e) && e.length ? e.filter((function(e) {
                    return !!e
                })) : []
            }
        }, {
            key: "getRandomInt",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    i = Math.ceil(t),
                    o = Math.floor(e);
                return Math.floor(Math.random() * (o - i - 1)) + i
            }
        }, {
            key: "regexEscape",
            value: function(e) {
                return e.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")
            }
        }, {
            key: "normalizeString",
            value: function(e) {
                return e.normalize("NFD").replace(/[^\w]/g, "")
            }
        }, {
            key: "willTextOverflow",
            value: function(e, t) {
                var i = document.createElement("div");
                i.style.position = "absolute", i.style.visibility = "hidden", i.style.whiteSpace = "nowrap", i.style.fontSize = window.getComputedStyle(e).fontSize, i.style.fontFamily = window.getComputedStyle(e).fontFamily, i.textContent = t, document.body.appendChild(i);
                var o = i.clientWidth;
                return document.body.removeChild(i), o > e.clientWidth
            }
        }, {
            key: "replaceDoubleQuotesWithHTML",
            value: function(e) {
                return e.replace(/"/g, "&quot;")
            }
        }, {
            key: "containsHTML",
            value: function(e) {
                return /<[a-z][\s\S]*>/i.test(e)
            }
        }], (n = null) && o(s.prototype, n), r && o(s, r), Object.defineProperty(s, "prototype", {
            writable: !1
        }), t
    }();

    function n(e) {
        return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, n(e)
    }

    function r(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            var i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != i) {
                var o, s, n, r, a = [],
                    l = !0,
                    u = !1;
                try {
                    if (n = (i = i.call(e)).next, 0 === t) {
                        if (Object(i) !== i) return;
                        l = !1
                    } else
                        for (; !(l = (o = n.call(i)).done) && (a.push(o.value), a.length !== t); l = !0);
                } catch (e) {
                    u = !0, s = e
                } finally {
                    try {
                        if (!l && null != i.return && (r = i.return(), Object(r) !== r)) return
                    } finally {
                        if (u) throw s
                    }
                }
                return a
            }
        }(e, t) || l(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function a(e) {
        return function(e) {
            if (Array.isArray(e)) return u(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || l(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function l(e, t) {
        if (e) {
            if ("string" == typeof e) return u(e, t);
            var i = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === i && e.constructor && (i = e.constructor.name), "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? u(e, t) : void 0
        }
    }

    function u(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var i = 0, o = new Array(t); i < t; i++) o[i] = e[i];
        return o
    }

    function c(e, t) {
        for (var i = 0; i < t.length; i++) {
            var o = t[i];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, (s = o.key, r = void 0, r = function(e, t) {
                if ("object" !== n(e) || null === e) return e;
                var i = e[Symbol.toPrimitive];
                if (void 0 !== i) {
                    var o = i.call(e, t || "default");
                    if ("object" !== n(o)) return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(s, "string"), "symbol" === n(r) ? r : String(r)), o)
        }
        var s, r
    }
    var p = function() {
        function e() {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e)
        }
        var t, i, o;
        return t = e, o = [{
            key: "addClass",
            value: function(t, i) {
                if (t) {
                    var o = i.split(" ");
                    e.getElements(t).forEach((function(e) {
                        var t;
                        (t = e.classList).add.apply(t, a(o))
                    }))
                }
            }
        }, {
            key: "removeClass",
            value: function(t, i) {
                if (t) {
                    var o = i.split(" ");
                    e.getElements(t).forEach((function(e) {
                        var t;
                        (t = e.classList).remove.apply(t, a(o))
                    }))
                }
            }
        }, {
            key: "toggleClass",
            value: function(t, i, o) {
                var s;
                t && (void 0 !== o && (s = Boolean(o)), e.getElements(t).forEach((function(e) {
                    e.classList.toggle(i, s)
                })))
            }
        }, {
            key: "hasClass",
            value: function(e, t) {
                return !!e && e.classList.contains(t)
            }
        }, {
            key: "hasEllipsis",
            value: function(e) {
                return !!e && e.scrollWidth > e.offsetWidth
            }
        }, {
            key: "getData",
            value: function(e, t, i) {
                if (e) {
                    var o = e ? e.dataset[t] : "";
                    return "number" === i ? o = parseFloat(o) || 0 : "true" === o ? o = !0 : "false" === o && (o = !1), o
                }
            }
        }, {
            key: "setData",
            value: function(e, t, i) {
                e && (e.dataset[t] = i)
            }
        }, {
            key: "setAttr",
            value: function(e, t, i) {
                e && e.setAttribute(t, i)
            }
        }, {
            key: "setAttrFromEle",
            value: function(e, t, i, o) {
                var s = {};
                i.forEach((function(t) {
                    s[t] = e.getAttribute(t)
                })), i.forEach((function(e) {
                    var i = s[e];
                    (i || -1 !== o.indexOf(e) && "" === i) && t.setAttribute(e, i)
                }))
            }
        }, {
            key: "setStyle",
            value: function(e, t, i) {
                e && (e.style[t] = i)
            }
        }, {
            key: "setStyles",
            value: function(e, t) {
                e && t && Object.keys(t).forEach((function(i) {
                    e.style[i] = t[i]
                }))
            }
        }, {
            key: "setAria",
            value: function(e, t, i) {
                var o = t;
                "role" !== o && (o = "aria-".concat(o)), e.setAttribute(o, i)
            }
        }, {
            key: "getElements",
            value: function(e) {
                return e ? void 0 === e.forEach ? [e] : e : []
            }
        }, {
            key: "getElementsBySelector",
            value: function() {
                var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                    o = void 0 !== i ? i : document;
                return "" !== t && (e = o.querySelectorAll(t)), void 0 !== e ? Array.from(e) : []
            }
        }, {
            key: "addEvent",
            value: function(t, i, o) {
                t && s.removeArrayEmpty(i.split(" ")).forEach((function(i) {
                    e.getElements(t).forEach((function(e) {
                        e.addEventListener(i, o)
                    }))
                }))
            }
        }, {
            key: "dispatchEvent",
            value: function(t, i) {
                var o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (t) {
                    var s = e.getElements(t);
                    setTimeout((function() {
                        s.forEach((function(e) {
                            e.dispatchEvent(new CustomEvent(i, {
                                bubbles: o
                            }))
                        }))
                    }), 0)
                }
            }
        }, {
            key: "getAttributesText",
            value: function(e) {
                var t = "";
                return e ? (Object.entries(e).forEach((function(e) {
                    var i = r(e, 2),
                        o = i[0],
                        s = i[1];
                    void 0 !== s && (t += " ".concat(o, '="').concat(s, '" '))
                })), t) : t
            }
        }, {
            key: "convertPropToDataAttr",
            value: function(e) {
                return e ? "data-".concat(e).replace(/([A-Z])/g, "-$1").toLowerCase() : ""
            }
        }, {
            key: "changeTabIndex",
            value: function(t, i) {
                t ? e.getElements(t).forEach((function(e) {
                    e.tabIndex = i
                })) : console.log(t, "Invalid element provided.")
            }
        }, {
            key: "removeEvent",
            value: function(t, i, o) {
                t && e.getElements(t).forEach((function(e) {
                    e.removeEventListener(i, o)
                }))
            }
        }], (i = null) && c(t.prototype, i), o && c(t, o), Object.defineProperty(t, "prototype", {
            writable: !1
        }), e
    }();

    function h(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            t && (o = o.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), i.push.apply(i, o)
        }
        return i
    }

    function d(e) {
        for (var t = 1; t < arguments.length; t++) {
            var i = null != arguments[t] ? arguments[t] : {};
            t % 2 ? h(Object(i), !0).forEach((function(t) {
                v(e, t, i[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : h(Object(i)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
            }))
        }
        return e
    }

    function v(e, t, i) {
        return (t = S(t)) in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = i, e
    }

    function f(e) {
        return f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, f(e)
    }

    function y(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            var i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != i) {
                var o, s, n, r, a = [],
                    l = !0,
                    u = !1;
                try {
                    if (n = (i = i.call(e)).next, 0 === t) {
                        if (Object(i) !== i) return;
                        l = !1
                    } else
                        for (; !(l = (o = n.call(i)).done) && (a.push(o.value), a.length !== t); l = !0);
                } catch (e) {
                    u = !0, s = e
                } finally {
                    try {
                        if (!l && null != i.return && (r = i.return(), Object(r) !== r)) return
                    } finally {
                        if (u) throw s
                    }
                }
                return a
            }
        }(e, t) || m(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function b(e) {
        return function(e) {
            if (Array.isArray(e)) return g(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || m(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function m(e, t) {
        if (e) {
            if ("string" == typeof e) return g(e, t);
            var i = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === i && e.constructor && (i = e.constructor.name), "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? g(e, t) : void 0
        }
    }

    function g(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var i = 0, o = new Array(t); i < t; i++) o[i] = e[i];
        return o
    }

    function O(e, t) {
        for (var i = 0; i < t.length; i++) {
            var o = t[i];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, S(o.key), o)
        }
    }

    function S(e) {
        var t = function(e, t) {
            if ("object" !== f(e) || null === e) return e;
            var i = e[Symbol.toPrimitive];
            if (void 0 !== i) {
                var o = i.call(e, t || "default");
                if ("object" !== f(o)) return o;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return ("string" === t ? String : Number)(e)
        }(e, "string");
        return "symbol" === f(t) ? t : String(t)
    }
    var x, w = {
            13: "onEnterPress",
            38: "onUpArrowPress",
            40: "onDownArrowPress",
            46: "onBackspaceOrDeletePress",
            8: "onBackspaceOrDeletePress"
        },
        k = ["autofocus", "disabled", "multiple", "required"],
        C = ["autofocus", "class", "disabled", "id", "multiple", "name", "placeholder", "required"],
        E = ["additionalClasses", "additionalDropboxClasses", "additionalDropboxContainerClasses", "additionalToggleButtonClasses", "aliasKey", "allOptionsSelectedText", "allowNewOption", "alwaysShowSelectedOptionsCount", "alwaysShowSelectedOptionsLabel", "ariaLabelledby", "ariaLabelText", "ariaLabelClearButtonText", "autoSelectFirstOption", "clearButtonText", "descriptionKey", "disableAllOptionsSelectedText", "disableOptionGroupCheckbox", "disableSelectAll", "disableValidation", "dropboxWidth", "dropboxWrapper", "emptyValue", "enableSecureText", "focusSelectedOptionOnOpen", "hasOptionDescription", "hideClearButton", "hideValueTooltipOnSelectAll", "keepAlwaysOpen", "labelKey", "markSearchResults", "maxValues", "maxWidth", "minValues", "moreText", "noOfDisplayValues", "noOptionsText", "noSearchResultsText", "optionHeight", "optionSelectedText", "optionsCount", "optionsSelectedText", "popupDropboxBreakpoint", "popupPosition", "position", "search", "searchByStartsWith", "searchDelay", "searchFormLabel", "searchGroup", "searchNormalize", "searchPlaceholderText", "selectAllOnlyVisible", "selectAllText", "setValueAsArray", "showDropboxAsPopup", "showOptionsOnlyOnSearch", "showSelectedOptionsFirst", "showValueAsTags", "silentInitialValueSet", "textDirection", "tooltipAlignment", "tooltipFontSize", "tooltipMaxWidth", "updatePositionThrottle", "useGroupValue", "valueKey", "zIndex"],
        $ = function() {
            function e(t) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e);
                try {
                    this.createSecureTextElements(), this.setProps(t), this.setDisabledOptions(t.disabledOptions), this.setOptions(t.options), this.render()
                } catch (e) {
                    console.warn("Couldn't initiate Virtual Select"), console.error(e)
                }
            }
            var t, i, o;
            return t = e, i = [{
                key: "render",
                value: function() {
                    if (this.$ele) {
                        var e = this.uniqueId,
                            t = "vscomp-wrapper",
                            i = "vscomp-toggle-button",
                            o = this.showValueAsTags ? "" : this.getTooltipAttrText(this.placeholder, !0, !0),
                            s = this.getTooltipAttrText(this.clearButtonText),
                            n = this.ariaLabelledby ? 'aria-labelledby="'.concat(this.ariaLabelledby, '"') : "",
                            r = this.ariaLabelText ? 'aria-label="'.concat(this.ariaLabelText, '"') : "",
                            a = this.ariaLabelClearButtonText ? 'aria-label="'.concat(this.ariaLabelClearButtonText, '"') : "",
                            l = !1;
                        this.additionalClasses && (t += " ".concat(this.additionalClasses)), this.additionalToggleButtonClasses && (i += " ".concat(this.additionalToggleButtonClasses)), this.multiple && (t += " multiple", this.disableSelectAll || (t += " has-select-all")), this.hideClearButton || (t += " has-clear-button"), this.keepAlwaysOpen ? (t += " keep-always-open", l = !0) : t += " closed", this.showAsPopup && (t += " show-as-popup"), this.hasSearch && (t += " has-search-input"), this.showValueAsTags && (t += " show-value-as-tags"), this.textDirection && (t += " text-direction-".concat(this.textDirection)), this.popupPosition && (t += " popup-position-".concat(this.popupPosition.toLowerCase()));
                        var u = '<div id="vscomp-ele-wrapper-'.concat(e, '" class="vscomp-ele-wrapper ').concat(t, '" tabindex="0"\n        role="combobox" aria-haspopup="listbox" aria-controls="vscomp-dropbox-container-').concat(e, '"\n        aria-expanded="').concat(l, '" ').concat(n, " ").concat(r, '>\n        <input type="hidden" name="').concat(this.name, '" class="vscomp-hidden-input">\n        <div class="').concat(i, '">\n          <div class="vscomp-value" ').concat(o, ">\n            ").concat(this.placeholder, '\n          </div>\n          <div class="vscomp-arrow"></div>\n          <div class="vscomp-clear-button toggle-button-child" ').concat(s, ' \n          tabindex="0" ').concat(a, '>\n            <i class="vscomp-clear-icon"></i>\n          </div>\n        </div>\n\n        ').concat(this.renderDropbox({
                            wrapperClasses: t
                        }), "\n      </div>");
                        this.$ele.innerHTML = u, this.$body = document.querySelector("body"), this.$wrapper = this.$ele.querySelector(".vscomp-wrapper"), this.hasDropboxWrapper ? (this.$allWrappers = [this.$wrapper, this.$dropboxWrapper], this.$dropboxContainer = this.$dropboxWrapper.querySelector(".vscomp-dropbox-container"), p.addClass(this.$dropboxContainer, "pop-comp-wrapper")) : (this.$allWrappers = [this.$wrapper], this.$dropboxContainer = this.$wrapper.querySelector(".vscomp-dropbox-container")), this.$toggleButton = this.$ele.querySelector(".vscomp-toggle-button"), this.$clearButton = this.$ele.querySelector(".vscomp-clear-button"), this.$valueText = this.$ele.querySelector(".vscomp-value"), this.$hiddenInput = this.$ele.querySelector(".vscomp-hidden-input"), this.$dropbox = this.$dropboxContainer.querySelector(".vscomp-dropbox"), this.$dropboxCloseButton = this.$dropboxContainer.querySelector(".vscomp-dropbox-close-button"), this.$dropboxContainerBottom = this.$dropboxContainer.querySelector(".vscomp-dropbox-container-bottom"), this.$dropboxContainerTop = this.$dropboxContainer.querySelector(".vscomp-dropbox-container-top"), this.$search = this.$dropboxContainer.querySelector(".vscomp-search-wrapper"), this.$optionsContainer = this.$dropboxContainer.querySelector(".vscomp-options-container"), this.$optionsList = this.$dropboxContainer.querySelector(".vscomp-options-list"), this.$options = this.$dropboxContainer.querySelector(".vscomp-options"), this.$noOptions = this.$dropboxContainer.querySelector(".vscomp-no-options"), this.$noSearchResults = this.$dropboxContainer.querySelector(".vscomp-no-search-results"), this.afterRenderWrapper()
                    }
                }
            }, {
                key: "renderDropbox",
                value: function(e) {
                    var t = e.wrapperClasses,
                        i = "self" !== this.dropboxWrapper ? document.querySelector(this.dropboxWrapper) : null,
                        o = "vscomp-dropbox";
                    this.additionalDropboxClasses && (o += " ".concat(this.additionalDropboxClasses));
                    var s = "vscomp-dropbox-container";
                    this.additionalDropboxContainerClasses && (s += " ".concat(this.additionalDropboxContainerClasses));
                    var n = '<div id="vscomp-dropbox-container-'.concat(this.uniqueId, '" role="listbox" class="').concat(s, '">\n        <div class="vscomp-dropbox-container-top" aria-hidden="true" tabindex="0">&nbsp;</div>\n        <div class="').concat(o, '">\n          <div class="vscomp-search-wrapper"></div>\n\n          <div class="vscomp-options-container">\n            <div class="vscomp-options-loader"></div>\n\n            <div class="vscomp-options-list">\n              <div class="vscomp-options"></div>\n            </div>\n          </div>\n\n          <div class="vscomp-options-bottom-freezer"></div>\n          <div class="vscomp-no-options">').concat(this.noOptionsText, '</div>\n          <div class="vscomp-no-search-results">').concat(this.noSearchResultsText, '</div>\n\n          <span class="vscomp-dropbox-close-button"><i class="vscomp-clear-icon"></i></span>\n        </div>\n        <div class="vscomp-dropbox-container-bottom" aria-hidden="true" tabindex="0">&nbsp;</div>\n      </div>');
                    if (i) {
                        var r = document.createElement("div");
                        return this.$dropboxWrapper = r, this.hasDropboxWrapper = !0, r.innerHTML = n, i.appendChild(r), p.addClass(r, "vscomp-dropbox-wrapper ".concat(t)), ""
                    }
                    return this.hasDropboxWrapper = !1, n
                }
            }, {
                key: "renderOptions",
                value: function() {
                    var e, t = this,
                        i = "",
                        o = this.getVisibleOptions(),
                        n = "",
                        r = "",
                        a = !(!this.markSearchResults || !this.searchValue),
                        l = this.labelRenderer,
                        u = this.disableOptionGroupCheckbox,
                        c = this.uniqueId,
                        p = this.searchGroup,
                        h = "function" == typeof l,
                        d = s.convertToBoolean,
                        v = "";
                    if (a && (e = new RegExp("(".concat(s.regexEscape(this.searchValue), ")(?!([^<]+)?>)"), "gi")), this.multiple && (n = '<span class="checkbox-icon"></span>'), this.allowNewOption) {
                        var f = this.getTooltipAttrText("New Option");
                        r = '<span class="vscomp-new-option-icon" '.concat(f, "></span>")
                    }
                    o.forEach((function(o) {
                        var s, f = o.index,
                            y = "vscomp-option",
                            b = t.getTooltipAttrText("", !0, !0),
                            m = n,
                            g = "",
                            O = "",
                            S = "",
                            x = "",
                            w = "-1",
                            k = d(o.isSelected),
                            C = "";
                        if (o.classNames && (y += " ".concat(o.classNames)), o.isFocused && (w = "0", y += " focused"), o.isDisabled && (y += " disabled", C = 'aria-disabled="true"'), o.isGroupTitle && (v = o.label, y += " group-title", u && (m = "")), k && (y += " selected"), o.isGroupOption) {
                            var E = "";
                            y += " group-option", S = 'data-group-index="'.concat(o.groupIndex, '"'), o.customData ? (v = void 0 !== o.customData.group_name ? "".concat(o.customData.group_name, ", ") : "", E = void 0 !== o.customData.description ? " ".concat(o.customData.description, ",") : "", x = 'aria-label="'.concat(v, " ").concat(o.label, ", ").concat(E, '"')) : x = 'aria-label="'.concat(v, ", ").concat(o.label, '"')
                        }
                        s = h ? l(o) : o.label, o.description && (O = '<div class="vscomp-option-description" '.concat(b, ">").concat(o.description, "</div>")), o.isCurrentNew ? (y += " current-new", g += r) : !a || o.isGroupTitle && !p || (s = s.replace(e, "<mark>$1</mark>")), i += '<div role="option" aria-selected="'.concat(k, '" id="vscomp-option-').concat(c, "-").concat(f, '"\n          class="').concat(y, '" data-value="').concat(o.value, '" data-index="').concat(f, '" data-visible-index="').concat(o.visibleIndex, '"\n          tabindex=').concat(w, " ").concat(S, " ").concat(C, " ").concat(x, "\n        >\n          ").concat(m, '\n          <span class="vscomp-option-text" ').concat(b, ">\n            ").concat(s, "\n          </span>\n          ").concat(O, "\n          ").concat(g, "\n        </div>")
                    })), v = "", this.$options.innerHTML = i, this.$visibleOptions = this.$options.querySelectorAll(".vscomp-option"), this.afterRenderOptions()
                }
            }, {
                key: "renderSearch",
                value: function() {
                    if (this.hasSearchContainer) {
                        var e = "",
                            t = "";
                        this.multiple && !this.disableSelectAll && (e = '<span class="vscomp-toggle-all-button">\n          <span class="checkbox-icon vscomp-toggle-all-checkbox"></span>\n          <span class="vscomp-toggle-all-label">'.concat(this.selectAllText, "</span>\n        </span>")), this.hasSearch && (t = '<label for="vscomp-search-input-'.concat(this.uniqueId, '" class="vscomp-search-label"\n        id="vscomp-search-label-').concat(this.uniqueId, '"\n      >\n        ').concat(this.searchFormLabel, '\n      </label>\n      <input type="text" class="vscomp-search-input" placeholder="').concat(this.searchPlaceholderText, '"\n        id="vscomp-search-input-').concat(this.uniqueId, '">\n      <span class="vscomp-search-clear">&times;</span>'));
                        var i = '<div class="vscomp-search-container">\n        '.concat(e, "\n        ").concat(t, "\n      </div>");
                        this.$search.innerHTML = i, this.$searchInput = this.$dropboxContainer.querySelector(".vscomp-search-input"), this.$searchClear = this.$dropboxContainer.querySelector(".vscomp-search-clear"), this.$toggleAllButton = this.$dropboxContainer.querySelector(".vscomp-toggle-all-button"), this.$toggleAllCheckbox = this.$dropboxContainer.querySelector(".vscomp-toggle-all-checkbox"), this.addEvent(this.$searchInput, "input", "onSearch"), this.addEvent(this.$searchClear, "click", "onSearchClear"), this.addEvent(this.$toggleAllButton, "click", "onToggleAllOptions"), this.addEvent(this.$dropboxContainerBottom, "focus", "onDropboxContainerTopOrBottomFocus"), this.addEvent(this.$dropboxContainerTop, "focus", "onDropboxContainerTopOrBottomFocus")
                    }
                }
            }, {
                key: "addEvents",
                value: function() {
                    this.addEvent(document, "click", "onDocumentClick"), this.addEvent(this.$allWrappers, "keydown", "onKeyDown"), this.addEvent(this.$toggleButton, "click", "onToggleButtonClick"), this.addEvent(this.$clearButton, "click keydown", "onClearButtonClick"), this.addEvent(this.$dropboxContainer, "click", "onDropboxContainerClick"), this.addEvent(this.$dropboxCloseButton, "click", "onDropboxCloseButtonClick"), this.addEvent(this.$optionsContainer, "scroll", "onOptionsScroll"), this.addEvent(this.$options, "click", "onOptionsClick"), this.addEvent(this.$options, "mouseover", "onOptionsMouseOver"), this.addEvent(this.$options, "touchmove", "onOptionsTouchMove"), this.addMutationObserver()
                }
            }, {
                key: "addEvent",
                value: function(e, t, i) {
                    var o = this;
                    e && s.removeArrayEmpty(t.split(" ")).forEach((function(t) {
                        var s = "".concat(i, "-").concat(t),
                            n = o.events[s];
                        n || (n = o[i].bind(o), o.events[s] = n), p.addEvent(e, t, n)
                    }))
                }
            }, {
                key: "removeEvents",
                value: function() {
                    this.removeEvent(document, "click", "onDocumentClick"), this.removeEvent(this.$allWrappers, "keydown", "onKeyDown"), this.removeEvent(this.$toggleButton, "click", "onToggleButtonClick"), this.removeEvent(this.$clearButton, "click keydown", "onClearButtonClick"), this.removeEvent(this.$dropboxContainer, "click", "onDropboxContainerClick"), this.removeEvent(this.$dropboxCloseButton, "click", "onDropboxCloseButtonClick"), this.removeEvent(this.$optionsContainer, "scroll", "onOptionsScroll"), this.removeEvent(this.$options, "click", "onOptionsClick"), this.removeEvent(this.$options, "mouseover", "onOptionsMouseOver"), this.removeEvent(this.$options, "touchmove", "onOptionsTouchMove"), this.removeMutationObserver()
                }
            }, {
                key: "removeEvent",
                value: function(e, t, i) {
                    var o = this;
                    e && s.removeArrayEmpty(t.split(" ")).forEach((function(t) {
                        var s = "".concat(i, "-").concat(t),
                            n = o.events[s];
                        n && p.removeEvent(e, t, n)
                    }))
                }
            }, {
                key: "onDocumentClick",
                value: function(e) {
                    var t = e.target.closest(".vscomp-wrapper");
                    t !== this.$wrapper && t !== this.$dropboxWrapper && this.isOpened() && this.closeDropbox()
                }
            }, {
                key: "onKeyDown",
                value: function(e) {
                    var t = e.which || e.keyCode,
                        i = w[t];
                    if (document.activeElement === this.$searchInput && e.shiftKey && 9 === t) return e.preventDefault(), void(this.keepAlwaysOpen ? this.$dropboxContainerTop.focus() : (this.closeDropbox(), this.$wrapper.focus()));
                    if (document.activeElement === this.$searchInput && 9 === t) return e.preventDefault(), void this.focusFirstVisibleOption();
                    if (27 === t || "Escape" === e.key) {
                        var o = this.showAsPopup ? this.$wrapper : this.$dropboxWrapper;
                        if ((document.activeElement === o || o.contains(document.activeElement)) && !this.keepAlwaysOpen) return this.closeDropbox(), void this.$wrapper.focus()
                    }
                    i && this[i](e)
                }
            }, {
                key: "onEnterPress",
                value: function(e) {
                    e.preventDefault(), this.isOpened() ? this.selectFocusedOption() : !1 === this.$ele.disabled && this.openDropbox()
                }
            }, {
                key: "onDownArrowPress",
                value: function(e) {
                    e.preventDefault(), this.isOpened() ? this.focusOption({
                        direction: "next"
                    }) : this.openDropbox()
                }
            }, {
                key: "onUpArrowPress",
                value: function(e) {
                    e.preventDefault(), this.isOpened() ? this.focusOption({
                        direction: "previous"
                    }) : this.openDropbox()
                }
            }, {
                key: "onBackspaceOrDeletePress",
                value: function(e) {
                    e.target === this.$wrapper && (e.preventDefault(), this.selectedValues.length > 0 && this.reset())
                }
            }, {
                key: "onToggleButtonClick",
                value: function(e) {
                    var t = e.target;
                    t.closest(".vscomp-value-tag-clear-button") ? this.removeValue(t.closest(".vscomp-value-tag")) : t.closest(".toggle-button-child") || this.toggleDropbox()
                }
            }, {
                key: "onClearButtonClick",
                value: function(e) {
                    "click" === e.type ? this.reset() : "keydown" !== e.type || "Enter" !== e.code && "Space" !== e.code || (e.stopPropagation(), this.reset())
                }
            }, {
                key: "onOptionsScroll",
                value: function() {
                    this.setVisibleOptions()
                }
            }, {
                key: "onOptionsClick",
                value: function(e) {
                    var t = e.target.closest(".vscomp-option");
                    t && !p.hasClass(t, "disabled") && (p.hasClass(t, "group-title") ? this.onGroupTitleClick(t) : this.selectOption(t, {
                        event: e
                    }))
                }
            }, {
                key: "onGroupTitleClick",
                value: function(e) {
                    if (e && this.multiple && !this.disableOptionGroupCheckbox) {
                        var t = !p.hasClass(e, "selected");
                        this.toggleGroupTitleCheckbox(e, t), this.toggleGroupOptions(e, t)
                    }
                }
            }, {
                key: "onDropboxContainerClick",
                value: function(e) {
                    e.target.closest(".vscomp-dropbox") || this.closeDropbox()
                }
            }, {
                key: "onDropboxCloseButtonClick",
                value: function() {
                    this.closeDropbox()
                }
            }, {
                key: "onOptionsMouseOver",
                value: function(e) {
                    var t = e.target.closest(".vscomp-option");
                    t && this.isOpened() && (p.hasClass(t, "disabled") || p.hasClass(t, "group-title") ? this.removeOptionFocus() : this.focusOption({
                        $option: t
                    }))
                }
            }, {
                key: "onOptionsTouchMove",
                value: function() {
                    this.removeOptionFocus()
                }
            }, {
                key: "onSearch",
                value: function(e) {
                    e.stopPropagation(), this.setSearchValue(e.target.value, !0)
                }
            }, {
                key: "onSearchClear",
                value: function() {
                    this.setSearchValue(""), this.focusSearchInput()
                }
            }, {
                key: "onToggleAllOptions",
                value: function() {
                    this.toggleAllOptions()
                }
            }, {
                key: "onDropboxContainerTopOrBottomFocus",
                value: function() {
                    this.closeDropbox()
                }
            }, {
                key: "onResize",
                value: function() {
                    this.setOptionsContainerHeight(!0)
                }
            }, {
                key: "addMutationObserver",
                value: function() {
                    var e = this;
                    if (this.hasDropboxWrapper) {
                        var t = this.$ele;
                        this.mutationObserver = new MutationObserver((function(i) {
                            var o = !1,
                                s = !1;
                            i.forEach((function(e) {
                                o || (o = b(e.addedNodes).some((function(e) {
                                    return !(e !== t && !e.contains(t))
                                }))), s || (s = b(e.removedNodes).some((function(e) {
                                    return !(e !== t && !e.contains(t))
                                })))
                            })), s && !o && e.destroy()
                        })), this.mutationObserver.observe(document.querySelector("body"), {
                            childList: !0,
                            subtree: !0
                        })
                    }
                }
            }, {
                key: "removeMutationObserver",
                value: function() {
                    this.mutationObserver.disconnect()
                }
            }, {
                key: "beforeValueSet",
                value: function(e) {
                    this.toggleAllOptionsClass(!e && void 0)
                }
            }, {
                key: "beforeSelectNewValue",
                value: function() {
                    var e = this,
                        t = this.getNewOption(),
                        i = t.index;
                    this.newValues.push(t.value), this.setOptionProp(i, "isCurrentNew", !1), this.setOptionProp(i, "isNew", !0), setTimeout((function() {
                        e.setSearchValue(""), e.focusSearchInput()
                    }), 0)
                }
            }, {
                key: "afterRenderWrapper",
                value: function() {
                    p.addClass(this.$ele, "vscomp-ele"), this.renderSearch(), this.setEleStyles(), this.setDropboxStyles(), this.setOptionsHeight(), this.setVisibleOptions(), this.setOptionsContainerHeight(), this.addEvents(), this.setEleProps(), this.keepAlwaysOpen || this.showAsPopup || this.initDropboxPopover(), this.initialSelectedValue ? this.setValueMethod(this.initialSelectedValue, this.silentInitialValueSet) : this.autoSelectFirstOption && this.visibleOptions.length && this.setValueMethod(this.visibleOptions[0].value, this.silentInitialValueSet), this.showOptionsOnlyOnSearch && this.setSearchValue("", !1, !0), this.initialDisabled && this.disable(), this.autofocus && this.focus()
                }
            }, {
                key: "afterRenderOptions",
                value: function() {
                    var e = this.getVisibleOptions(),
                        t = !this.options.length && !this.hasServerSearch,
                        i = !t && !e.length;
                    if ((!this.allowNewOption || this.hasServerSearch || this.showOptionsOnlyOnSearch) && (p.toggleClass(this.$allWrappers, "has-no-search-results", i), i ? (p.setAttr(this.$noSearchResults, "tabindex", "0"), p.setAttr(this.$noSearchResults, "aria-hidden", "false")) : (p.setAttr(this.$noSearchResults, "tabindex", "-1"), p.setAttr(this.$noSearchResults, "aria-hidden", "true"))), p.toggleClass(this.$allWrappers, "has-no-options", t), t ? (p.setAttr(this.$noOptions, "tabindex", "0"), p.setAttr(this.$noOptions, "aria-hidden", "false")) : (p.setAttr(this.$noOptions, "tabindex", "-1"), p.setAttr(this.$noOptions, "aria-hidden", "true")), this.setOptionAttr(), this.setOptionsPosition(), this.setOptionsTooltip(), document.activeElement !== this.$searchInput) {
                        var o = p.getElementsBySelector(".focused", this.$dropboxContainer)[0];
                        void 0 !== o && o.focus()
                    }
                }
            }, {
                key: "afterSetOptionsContainerHeight",
                value: function(e) {
                    e && this.showAsPopup && this.setVisibleOptions()
                }
            }, {
                key: "afterSetSearchValue",
                value: function() {
                    var e = this;
                    this.hasServerSearch ? (clearInterval(this.serverSearchTimeout), this.serverSearchTimeout = setTimeout((function() {
                        e.serverSearch()
                    }), this.searchDelay)) : this.setVisibleOptionsCount(), this.selectAllOnlyVisible && this.toggleAllOptionsClass(), this.focusOption({
                        focusFirst: !0
                    })
                }
            }, {
                key: "afterSetVisibleOptionsCount",
                value: function() {
                    this.scrollToTop(), this.setOptionsHeight(), this.setVisibleOptions(), this.updatePosition()
                }
            }, {
                key: "afterValueSet",
                value: function() {
                    this.scrollToTop(), this.setSearchValue(""), this.renderOptions()
                }
            }, {
                key: "afterSetOptions",
                value: function(e) {
                    e && this.setSelectedProp(), this.setOptionsHeight(), this.setVisibleOptions(), this.showOptionsOnlyOnSearch && this.setSearchValue("", !1, !0), e || this.reset()
                }
            }, {
                key: "setProps",
                value: function(e) {
                    var t = this.setDefaultProps(e);
                    this.setPropsFromElementAttr(t);
                    var i = s.convertToBoolean;
                    this.$ele = t.ele, this.dropboxWrapper = t.dropboxWrapper, this.valueKey = t.valueKey, this.labelKey = t.labelKey, this.descriptionKey = t.descriptionKey, this.aliasKey = t.aliasKey, this.optionHeightText = t.optionHeight, this.optionHeight = parseFloat(this.optionHeightText), this.multiple = i(t.multiple), this.hasSearch = i(t.search), this.searchByStartsWith = i(t.searchByStartsWith), this.searchGroup = i(t.searchGroup), this.hideClearButton = i(t.hideClearButton), this.autoSelectFirstOption = i(t.autoSelectFirstOption), this.hasOptionDescription = i(t.hasOptionDescription), this.silentInitialValueSet = i(t.silentInitialValueSet), this.allowNewOption = i(t.allowNewOption), this.markSearchResults = i(t.markSearchResults), this.showSelectedOptionsFirst = i(t.showSelectedOptionsFirst), this.disableSelectAll = i(t.disableSelectAll), this.keepAlwaysOpen = i(t.keepAlwaysOpen), this.showDropboxAsPopup = i(t.showDropboxAsPopup), this.hideValueTooltipOnSelectAll = i(t.hideValueTooltipOnSelectAll), this.showOptionsOnlyOnSearch = i(t.showOptionsOnlyOnSearch), this.selectAllOnlyVisible = i(t.selectAllOnlyVisible), this.alwaysShowSelectedOptionsCount = i(t.alwaysShowSelectedOptionsCount), this.alwaysShowSelectedOptionsLabel = i(t.alwaysShowSelectedOptionsLabel), this.disableAllOptionsSelectedText = i(t.disableAllOptionsSelectedText), this.showValueAsTags = i(t.showValueAsTags), this.disableOptionGroupCheckbox = i(t.disableOptionGroupCheckbox), this.enableSecureText = i(t.enableSecureText), this.setValueAsArray = i(t.setValueAsArray), this.disableValidation = i(t.disableValidation), this.initialDisabled = i(t.disabled), this.required = i(t.required), this.autofocus = i(t.autofocus), this.useGroupValue = i(t.useGroupValue), this.focusSelectedOptionOnOpen = i(t.focusSelectedOptionOnOpen), this.noOptionsText = t.noOptionsText, this.noSearchResultsText = t.noSearchResultsText, this.selectAllText = t.selectAllText, this.searchNormalize = t.searchNormalize, this.searchPlaceholderText = t.searchPlaceholderText, this.searchFormLabel = t.searchFormLabel, this.optionsSelectedText = t.optionsSelectedText, this.optionSelectedText = t.optionSelectedText, this.allOptionsSelectedText = t.allOptionsSelectedText, this.clearButtonText = t.clearButtonText, this.moreText = t.moreText, this.placeholder = t.placeholder, this.position = t.position, this.textDirection = t.textDirection, this.dropboxWidth = t.dropboxWidth, this.tooltipFontSize = t.tooltipFontSize, this.tooltipAlignment = t.tooltipAlignment, this.tooltipMaxWidth = t.tooltipMaxWidth, this.updatePositionThrottle = t.updatePositionThrottle, this.noOfDisplayValues = parseInt(t.noOfDisplayValues), this.zIndex = parseInt(t.zIndex), this.maxValues = parseInt(t.maxValues), this.minValues = parseInt(t.minValues), this.name = this.secureText(t.name), this.additionalClasses = t.additionalClasses, this.additionalDropboxClasses = t.additionalDropboxClasses, this.additionalDropboxContainerClasses = t.additionalDropboxContainerClasses, this.additionalToggleButtonClasses = t.additionalToggleButtonClasses, this.popupDropboxBreakpoint = t.popupDropboxBreakpoint, this.popupPosition = t.popupPosition, this.onServerSearch = t.onServerSearch, this.labelRenderer = t.labelRenderer, this.selectedLabelRenderer = t.selectedLabelRenderer, this.initialSelectedValue = 0 === t.selectedValue ? "0" : t.selectedValue, this.emptyValue = t.emptyValue, this.ariaLabelledby = t.ariaLabelledby, this.ariaLabelText = t.ariaLabelText, this.ariaLabelClearButtonText = t.ariaLabelClearButtonText, this.maxWidth = t.maxWidth, this.searchDelay = t.searchDelay, this.selectedValues = [], this.selectedOptions = [], this.newValues = [], this.events = {}, this.tooltipEnterDelay = 200, this.searchValue = "", this.searchValueOriginal = "", this.isAllSelected = !1, (void 0 === t.search && this.multiple || this.allowNewOption || this.showOptionsOnlyOnSearch) && (this.hasSearch = !0), this.hasServerSearch = "function" == typeof this.onServerSearch, (this.maxValues || this.hasServerSearch || this.showOptionsOnlyOnSearch) && (this.disableSelectAll = !0, this.disableOptionGroupCheckbox = !0), this.keepAlwaysOpen && (this.dropboxWrapper = "self"), this.showAsPopup = this.showDropboxAsPopup && !this.keepAlwaysOpen && window.innerWidth <= parseFloat(this.popupDropboxBreakpoint), this.hasSearchContainer = this.hasSearch || this.multiple && !this.disableSelectAll, this.optionsCount = this.getOptionsCount(t.optionsCount), this.halfOptionsCount = Math.ceil(this.optionsCount / 2), this.optionsHeight = this.getOptionsHeight(), this.uniqueId = this.getUniqueId()
                }
            }, {
                key: "setDefaultProps",
                value: function(e) {
                    var t = {
                        dropboxWrapper: "self",
                        valueKey: "value",
                        labelKey: "label",
                        descriptionKey: "description",
                        aliasKey: "alias",
                        ariaLabelText: "Options list",
                        ariaLabelClearButtonText: "Clear button",
                        optionsCount: 5,
                        noOfDisplayValues: 50,
                        optionHeight: "40px",
                        noOptionsText: "No options found",
                        noSearchResultsText: "No results found",
                        selectAllText: "Select All",
                        searchNormalize: !1,
                        searchPlaceholderText: "Search...",
                        searchFormLabel: "Search",
                        clearButtonText: "Clear",
                        moreText: "more...",
                        optionsSelectedText: "options selected",
                        optionSelectedText: "option selected",
                        allOptionsSelectedText: "All",
                        placeholder: "Select",
                        position: "bottom left",
                        zIndex: e.keepAlwaysOpen ? 1 : 2,
                        tooltipFontSize: "14px",
                        tooltipAlignment: "center",
                        tooltipMaxWidth: "300px",
                        updatePositionThrottle: 100,
                        name: "",
                        additionalClasses: "",
                        additionalDropboxClasses: "",
                        additionalDropboxContainerClasses: "",
                        additionalToggleButtonClasses: "",
                        maxValues: 0,
                        showDropboxAsPopup: !0,
                        popupDropboxBreakpoint: "576px",
                        popupPosition: "center",
                        hideValueTooltipOnSelectAll: !0,
                        emptyValue: "",
                        searchDelay: 300,
                        focusSelectedOptionOnOpen: !0
                    };
                    return e.hasOptionDescription && (t.optionsCount = 4, t.optionHeight = "50px"), Object.assign(t, e)
                }
            }, {
                key: "setPropsFromElementAttr",
                value: function(e) {
                    var t = e.ele;
                    Object.keys(x).forEach((function(i) {
                        var o = t.getAttribute(i); - 1 === k.indexOf(i) || "" !== o && "true" !== o || (o = !0), o && (e[x[i]] = o)
                    }))
                }
            }, {
                key: "setEleProps",
                value: function() {
                    var t = this.$ele;
                    t.virtualSelect = this, t.value = this.multiple ? [] : "", t.name = this.name, t.disabled = !1, t.required = this.required, t.autofocus = this.autofocus, t.multiple = this.multiple, t.form = t.closest("form"), t.reset = e.reset, t.setValue = e.setValueMethod, t.setOptions = e.setOptionsMethod, t.setDisabledOptions = e.setDisabledOptionsMethod, t.setEnabledOptions = e.setEnabledOptionsMethod, t.toggleSelectAll = e.toggleSelectAll, t.isAllSelected = e.isAllSelected, t.addOption = e.addOptionMethod, t.getNewValue = e.getNewValueMethod, t.getDisplayValue = e.getDisplayValueMethod, t.getSelectedOptions = e.getSelectedOptionsMethod, t.getDisabledOptions = e.getDisabledOptionsMethod, t.open = e.openMethod, t.close = e.closeMethod, t.focus = e.focusMethod, t.enable = e.enableMethod, t.disable = e.disableMethod, t.destroy = e.destroyMethod, t.validate = e.validateMethod, t.toggleRequired = e.toggleRequiredMethod, this.hasDropboxWrapper && (this.$dropboxWrapper.virtualSelect = this)
                }
            }, {
                key: "setValueMethod",
                value: function(e, t) {
                    var i = {},
                        o = {},
                        s = [],
                        n = this.multiple,
                        r = e;
                    if (r) {
                        if (Array.isArray(r) || (r = [r]), n) {
                            var a = this.maxValues;
                            a && r.length > a && r.splice(a)
                        } else r.length > 1 && (r = [r[0]]);
                        r = r.map((function(e) {
                            return e || 0 === e ? e.toString() : ""
                        })), this.useGroupValue && (r = this.setGroupOptionsValue(r)), r.forEach((function(e, t) {
                            i[e] = !0, o[e] = t
                        })), this.allowNewOption && r && this.setNewOptionsFromValue(r)
                    }
                    if (this.options.forEach((function(e) {
                            !0 !== i[e.value] || e.isDisabled || e.isGroupTitle ? e.isSelected = !1 : (e.isSelected = !0, s.push(e.value))
                        })), n) this.hasOptionGroup && this.setGroupsSelectedProp(), s.sort((function(e, t) {
                        return o[e] - o[t]
                    }));
                    else {
                        var l = y(s, 1);
                        s = l[0]
                    }
                    this.beforeValueSet(), this.setValue(s, {
                        disableEvent: t
                    }), this.afterValueSet()
                }
            }, {
                key: "setGroupOptionsValue",
                value: function(e) {
                    var t = [],
                        i = {},
                        o = {};
                    return e.forEach((function(e) {
                        o[e] = !0
                    })), this.options.forEach((function(e) {
                        var s = e.value,
                            n = !0 === o[s];
                        e.isGroupTitle ? n && (i[e.index] = !0) : (n || i[e.groupIndex]) && t.push(s)
                    })), t
                }
            }, {
                key: "setGroupsSelectedProp",
                value: function() {
                    var e = this.isAllGroupOptionsSelected.bind(this);
                    this.options.forEach((function(t) {
                        t.isGroupTitle && (t.isSelected = e(t.index))
                    }))
                }
            }, {
                key: "setOptionsMethod",
                value: function(e, t) {
                    this.setOptions(e), this.afterSetOptions(t)
                }
            }, {
                key: "setDisabledOptionsMethod",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    this.setDisabledOptions(e, !0), t || (this.setValueMethod(null), this.toggleAllOptionsClass()), this.setVisibleOptions()
                }
            }, {
                key: "setDisabledOptions",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        i = [];
                    if (e)
                        if (!0 === e) t && this.options.forEach((function(e) {
                            return e.isDisabled = !0, i.push(e.value), e
                        }));
                        else {
                            i = e.map((function(e) {
                                return e.toString()
                            }));
                            var o = {};
                            i.forEach((function(e) {
                                o[e] = !0
                            })), t && this.options.forEach((function(e) {
                                return e.isDisabled = !0 === o[e.value], e
                            }))
                        }
                    else t && this.options.forEach((function(e) {
                        return e.isDisabled = !1, e
                    }));
                    this.disabledOptions = i
                }
            }, {
                key: "setEnabledOptionsMethod",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    this.setEnabledOptions(e), t || (this.setValueMethod(null), this.toggleAllOptionsClass()), this.setVisibleOptions()
                }
            }, {
                key: "setEnabledOptions",
                value: function(e) {
                    if (void 0 !== e) {
                        var t = [];
                        if (!0 === e) this.options.forEach((function(e) {
                            return e.isDisabled = !1, e
                        }));
                        else {
                            var i = {};
                            e.forEach((function(e) {
                                i[e] = !0
                            })), this.options.forEach((function(e) {
                                var o = !0 !== i[e.value];
                                return e.isDisabled = o, o && t.push(e.value), e
                            }))
                        }
                        this.disabledOptions = t
                    }
                }
            }, {
                key: "setOptions",
                value: function() {
                    var e = this,
                        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                        i = [],
                        o = this.disabledOptions.length,
                        n = this.valueKey,
                        r = this.labelKey,
                        a = this.descriptionKey,
                        l = this.aliasKey,
                        u = this.hasOptionDescription,
                        c = s.getString,
                        p = s.convertToBoolean,
                        h = this.secureText.bind(this),
                        d = this.getAlias.bind(this),
                        y = 0,
                        b = !1,
                        m = {},
                        g = !1;
                    this.disabledOptions.forEach((function(e) {
                        m[e] = !0
                    })), Array.isArray(t) && t.forEach((function t(O) {
                        var S;
                        "object" !== f(O) && (v(S = {}, n, O), v(S, r, O), O = S);
                        var x = h(c(O[n])),
                            w = h(c(O[r])),
                            k = O.options,
                            C = !!k,
                            E = {
                                index: y,
                                value: x,
                                label: w,
                                labelNormalized: e.searchNormalize ? s.normalizeString(w).toLowerCase() : w.toLowerCase(),
                                alias: d(O[l]),
                                isVisible: p(O.isVisible, !0),
                                isNew: O.isNew || !1,
                                isGroupTitle: C,
                                classNames: O.classNames
                            };
                        if (g || "" !== x || (g = !0), o && (E.isDisabled = !0 === m[x]), O.isGroupOption && (E.isGroupOption = !0, E.groupIndex = O.groupIndex), u && (E.description = h(c(O[a]))), O.customData && (E.customData = O.customData), i.push(E), y += 1, C) {
                            var $ = E.index;
                            b = !0, k.forEach((function(e) {
                                e.isGroupOption = !0, e.groupIndex = $, t(e)
                            }))
                        }
                    }));
                    var O = i.length,
                        S = this.$ele;
                    S.options = i, S.length = O, this.options = i, this.visibleOptionsCount = O, this.lastOptionIndex = O - 1, this.newValues = [], this.hasOptionGroup = b, this.hasEmptyValueOption = g, this.setSortedOptions()
                }
            }, {
                key: "setServerOptions",
                value: function() {
                    var e = this,
                        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    this.setOptionsMethod(t, !0);
                    var i = this.selectedOptions,
                        o = this.options,
                        s = !1;
                    if (i.length) {
                        var n = {};
                        s = !0, o.forEach((function(e) {
                            n[e.value] = !0
                        })), i.forEach((function(e) {
                            !0 !== n[e.value] && (e.isVisible = !1, o.push(e))
                        })), this.setOptionsMethod(o, !0)
                    }
                    this.allowNewOption && this.searchValue && (o.some((function(t) {
                        return t.label.toLowerCase() === e.searchValue
                    })) || (s = !0, this.setNewOption())), s ? (this.setVisibleOptionsCount(), this.multiple && this.toggleAllOptionsClass(), this.setValueText()) : this.updatePosition(), this.setVisibleOptionsCount(), p.removeClass(this.$allWrappers, "server-searching")
                }
            }, {
                key: "setSelectedOptions",
                value: function() {
                    this.selectedOptions = this.options.filter((function(e) {
                        return e.isSelected
                    }))
                }
            }, {
                key: "setSortedOptions",
                value: function() {
                    var e = b(this.options);
                    this.showSelectedOptionsFirst && this.selectedValues.length && (e = this.hasOptionGroup ? this.sortOptionsGroup(e) : this.sortOptions(e)), this.sortedOptions = e
                }
            }, {
                key: "setVisibleOptions",
                value: function() {
                    var e = b(this.sortedOptions),
                        t = 2 * this.optionsCount,
                        i = this.getVisibleStartIndex(),
                        o = this.getNewOption(),
                        s = i + t - 1,
                        n = 0;
                    o && (o.visibleIndex = n, n += 1), e = e.filter((function(e) {
                        var t = !1;
                        return e.isVisible && !e.isCurrentNew && (t = n >= i && n <= s, e.visibleIndex = n, n += 1), t
                    })), o && (e = [o].concat(b(e))), this.visibleOptions = e, this.visibleOptionsCount = e.length, this.renderOptions()
                }
            }, {
                key: "setOptionsPosition",
                value: function(e) {
                    var t = parseInt((e || this.getVisibleStartIndex()) * this.optionHeight);
                    this.$options.style.transform = "translate3d(0, ".concat(t, "px, 0)"), p.setData(this.$options, "top", t)
                }
            }, {
                key: "setOptionsTooltip",
                value: function() {
                    var e = this,
                        t = this.getVisibleOptions(),
                        i = this.hasOptionDescription;
                    t.forEach((function(t) {
                        var o = e.$dropboxContainer.querySelector('.vscomp-option[data-index="'.concat(t.index, '"]'));
                        p.setData(o.querySelector(".vscomp-option-text"), "tooltip", t.label), i && p.setData(o.querySelector(".vscomp-option-description"), "tooltip", t.description)
                    }))
                }
            }, {
                key: "setValue",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        i = t.disableEvent,
                        o = void 0 !== i && i,
                        n = t.disableValidation,
                        r = void 0 !== n && n;
                    this.hasEmptyValueOption && "" === e || e ? Array.isArray(e) ? this.selectedValues = b(e) : this.selectedValues = [e] : this.selectedValues = [];
                    var a = this.getValue();
                    this.$ele.value = a, this.$hiddenInput.value = this.getInputValue(a), this.isMaxValuesSelected = !!(this.maxValues && this.maxValues <= this.selectedValues.length), this.toggleAllOptionsClass(), this.setValueText(), p.toggleClass(this.$allWrappers, "has-value", s.isNotEmpty(this.selectedValues)), p.toggleClass(this.$allWrappers, "max-value-selected", this.isMaxValuesSelected), r || this.validate(), o || p.dispatchEvent(this.$ele, "change", !0)
                }
            }, {
                key: "setValueText",
                value: function() {
                    var e = this,
                        t = this.multiple,
                        i = this.selectedValues,
                        o = this.noOfDisplayValues,
                        n = this.showValueAsTags,
                        r = this.$valueText,
                        a = this.selectedLabelRenderer,
                        l = [],
                        u = [],
                        c = i.length,
                        h = 0,
                        d = this.isAllSelected && !this.hasServerSearch && !this.disableAllOptionsSelectedText && !n;
                    if (d && this.hideValueTooltipOnSelectAll) r.innerHTML = "".concat(this.allOptionsSelectedText, " (").concat(c, ")");
                    else {
                        this.getSelectedOptions({
                            fullDetails: !0,
                            keepSelectionOrder: !0
                        }).some((function(t) {
                            if (t.isCurrentNew) return !1;
                            if (h >= o) return !0;
                            var i = t.label;
                            if ("function" == typeof a && (i = a(t)), l.push(i), h += 1, n) {
                                var c = s.willTextOverflow(r.parentElement, i) ? e.getTooltipAttrText(i, !1, !0) : "",
                                    p = '<span class="vscomp-value-tag" data-index="'.concat(t.index, '" ').concat(c, '>\n                  <span class="vscomp-value-tag-content">').concat(i, '</span>\n                  <span class="vscomp-value-tag-clear-button">\n                    <i class="vscomp-clear-icon"></i>\n                  </span>\n                </span>');
                                u.push(p)
                            } else u.push(i);
                            return !1
                        }));
                        var v = c - o;
                        v > 0 && u.push('<span class="vscomp-value-tag more-value-count">+ '.concat(v, " ").concat(this.moreText, "</span>"));
                        var f = l.join(", ");
                        if ("" === f) r.innerHTML = this.placeholder;
                        else if (r.innerHTML = f, t) {
                            var y = this.maxValues;
                            if (this.alwaysShowSelectedOptionsCount || p.hasEllipsis(r) || y || n) {
                                var b = '<span class="vscomp-selected-value-count">'.concat(c, "</span>");
                                if (y && (b += ' / <span class="vscomp-max-value-count">'.concat(y, "</span>")), d) r.innerHTML = "".concat(this.allOptionsSelectedText, " (").concat(c, ")");
                                else if (n) r.innerHTML = u.join(""), this.$valueTags = r.querySelectorAll(".vscomp-value-tag"), this.setValueTagAttr();
                                else if (!this.alwaysShowSelectedOptionsLabel) {
                                    var m = 1 === c ? this.optionSelectedText : this.optionsSelectedText;
                                    r.innerHTML = "".concat(b, " ").concat(m)
                                }
                            } else u = []
                        }
                    }
                    var g = "";
                    0 === c ? g = this.placeholder : n || (g = u.join(", ")), n || p.setData(r, "tooltip", g), t && (n ? this.updatePosition() : p.setData(r, "tooltipEllipsisOnly", 0 === c))
                }
            }, {
                key: "setSearchValue",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if (e !== this.searchValueOriginal || i) {
                        t || (this.$searchInput.value = e);
                        var o = e.replace(/\\/g, "").toLowerCase().trim();
                        this.searchValue = o, this.searchValueOriginal = e, p.toggleClass(this.$allWrappers, "has-search-value", e), this.afterSetSearchValue()
                    }
                }
            }, {
                key: "setVisibleOptionsCount",
                value: function() {
                    var e, t = 0,
                        i = !1,
                        o = this.searchGroup,
                        n = this.showOptionsOnlyOnSearch,
                        r = this.searchByStartsWith,
                        a = this.searchValue;
                    a = this.searchNormalize ? s.normalizeString(a) : a;
                    var l = this.isOptionVisible.bind(this);
                    this.hasOptionGroup && (e = this.getVisibleOptionGroupsMapping(a)), this.options.forEach((function(s) {
                        var u;
                        s.isCurrentNew || (n && !a ? (s.isVisible = !1, u = {
                            isVisible: !1,
                            hasExactOption: !1
                        }) : u = l({
                            data: s,
                            searchValue: a,
                            hasExactOption: i,
                            visibleOptionGroupsMapping: e,
                            searchGroup: o,
                            searchByStartsWith: r
                        }), u.isVisible && (t += 1), i || (i = u.hasExactOption))
                    })), this.allowNewOption && (a && !i ? (this.setNewOption(), t += 1) : this.removeNewOption()), this.visibleOptionsCount = t, this.afterSetVisibleOptionsCount()
                }
            }, {
                key: "setOptionProp",
                value: function(e, t, i) {
                    this.options[e] && (this.options[e][t] = i)
                }
            }, {
                key: "setOptionsHeight",
                value: function() {
                    this.$optionsList.style.height = "".concat(this.optionHeight * this.visibleOptionsCount, "px")
                }
            }, {
                key: "setOptionsContainerHeight",
                value: function(e) {
                    var t;
                    e ? this.showAsPopup && (this.optionsCount = this.getOptionsCount(), this.halfOptionsCount = Math.ceil(this.optionsCount / 2), t = this.getOptionsHeight(), this.optionsHeight = t) : (t = this.optionsHeight, this.keepAlwaysOpen && (p.setStyle(this.$noOptions, "height", t), p.setStyle(this.$noSearchResults, "height", t))), p.setStyle(this.$optionsContainer, "max-height", t), this.afterSetOptionsContainerHeight(e)
                }
            }, {
                key: "setNewOption",
                value: function(e) {
                    var t = e || this.searchValueOriginal.trim();
                    if (t) {
                        var i = this.getNewOption();
                        if (i) {
                            var o = i.index;
                            this.setOptionProp(o, "value", this.secureText(t)), this.setOptionProp(o, "label", this.secureText(t))
                        } else {
                            var s = {
                                value: t,
                                label: t
                            };
                            e ? (s.isNew = !0, this.newValues.push(t)) : s.isCurrentNew = !0, this.addOption(s)
                        }
                    }
                }
            }, {
                key: "setSelectedProp",
                value: function() {
                    var e = {};
                    this.selectedValues.forEach((function(t) {
                        e[t] = !0
                    })), this.options.forEach((function(t) {
                        !0 === e[t.value] && (t.isSelected = !0)
                    }))
                }
            }, {
                key: "setNewOptionsFromValue",
                value: function(e) {
                    if (e) {
                        var t = this.setNewOption.bind(this),
                            i = {};
                        this.options.forEach((function(e) {
                            i[e.value] = !0
                        })), e.forEach((function(e) {
                            e && !0 !== i[e] && t(e)
                        }))
                    }
                }
            }, {
                key: "setDropboxWrapperWidth",
                value: function() {
                    if (!this.showAsPopup) {
                        var e = this.dropboxWidth || "".concat(this.$wrapper.offsetWidth, "px");
                        p.setStyle(this.$dropboxContainer, "max-width", e)
                    }
                }
            }, {
                key: "setEleStyles",
                value: function() {
                    var e = this.maxWidth,
                        t = {};
                    e && (t["max-width"] = e), p.setStyles(this.$ele, t)
                }
            }, {
                key: "setDropboxStyles",
                value: function() {
                    var e = this.dropboxWidth,
                        t = {},
                        i = {
                            "z-index": this.zIndex
                        };
                    e && (this.showAsPopup ? t["max-width"] = e : i.width = e), p.setStyles(this.$dropboxContainer, i), p.setStyles(this.$dropbox, t)
                }
            }, {
                key: "setOptionAttr",
                value: function() {
                    var e = this.$visibleOptions,
                        t = this.options,
                        i = "".concat(this.optionHeight, "px"),
                        o = p.setStyle,
                        s = p.getData,
                        n = p.setData;
                    e && e.length && e.forEach((function(e) {
                        var r = t[s(e, "index")];
                        o(e, "height", i), n(e, "value", r.value)
                    }))
                }
            }, {
                key: "setValueTagAttr",
                value: function() {
                    var e = this.$valueTags;
                    if (e && e.length) {
                        var t = p.getData,
                            i = p.setData,
                            o = this.options;
                        e.forEach((function(e) {
                            var s = t(e, "index");
                            if (void 0 !== s) {
                                var n = o[s];
                                i(e, "value", n.value)
                            }
                        }))
                    }
                }
            }, {
                key: "setScrollTop",
                value: function() {
                    var e = this.selectedValues;
                    if (!this.showSelectedOptionsFirst && this.focusSelectedOptionOnOpen && 0 !== e.length) {
                        var t, i = {};
                        e.forEach((function(e) {
                            i[e] = !0
                        })), this.options.some((function(e) {
                            return !!i[e.value] && (t = e.visibleIndex, !0)
                        })), t && (this.$optionsContainer.scrollTop = this.optionHeight * t)
                    }
                }
            }, {
                key: "getVisibleOptions",
                value: function() {
                    return this.visibleOptions || []
                }
            }, {
                key: "getValue",
                value: function() {
                    return this.multiple ? this.useGroupValue ? this.getGroupValue() : this.selectedValues : this.selectedValues[0] || ""
                }
            }, {
                key: "getGroupValue",
                value: function() {
                    var e = [],
                        t = {};
                    return this.options.forEach((function(i) {
                        if (i.isSelected) {
                            var o = i.value;
                            i.isGroupTitle ? o && (t[i.index] = !0, e.push(o)) : !0 !== t[i.groupIndex] && e.push(o)
                        }
                    })), e
                }
            }, {
                key: "getInputValue",
                value: function(e) {
                    var t = e;
                    return t && t.length ? this.setValueAsArray && this.multiple && (t = JSON.stringify(t)) : t = this.emptyValue, t
                }
            }, {
                key: "getFirstVisibleOptionIndex",
                value: function() {
                    return Math.ceil(this.$optionsContainer.scrollTop / this.optionHeight)
                }
            }, {
                key: "getVisibleStartIndex",
                value: function() {
                    var e = this.getFirstVisibleOptionIndex() - this.halfOptionsCount;
                    return e < 0 && (e = 0), e
                }
            }, {
                key: "getTooltipAttrText",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        o = {
                            "data-tooltip": (s.containsHTML(e) ? s.replaceDoubleQuotesWithHTML(e) : e) || "",
                            "data-tooltip-enter-delay": this.tooltipEnterDelay,
                            "data-tooltip-z-index": this.zIndex,
                            "data-tooltip-font-size": this.tooltipFontSize,
                            "data-tooltip-alignment": this.tooltipAlignment,
                            "data-tooltip-max-width": this.tooltipMaxWidth,
                            "data-tooltip-ellipsis-only": t,
                            "data-tooltip-allow-html": i
                        };
                    return p.getAttributesText(o)
                }
            }, {
                key: "getOptionObj",
                value: function(e) {
                    if (e) {
                        var t = s.getString,
                            i = this.secureText.bind(this);
                        return {
                            index: e.index,
                            value: i(t(e.value)),
                            label: i(t(e.label)),
                            description: i(t(e.description)),
                            alias: this.getAlias(e.alias),
                            isCurrentNew: e.isCurrentNew || !1,
                            isNew: e.isNew || !1,
                            isVisible: !0
                        }
                    }
                }
            }, {
                key: "getNewOption",
                value: function() {
                    var e = this.options[this.lastOptionIndex];
                    if (e && e.isCurrentNew) return e
                }
            }, {
                key: "getOptionIndex",
                value: function(e) {
                    var t;
                    return this.options.some((function(i) {
                        return i.value === e && (t = i.index, !0)
                    })), t
                }
            }, {
                key: "getNewValue",
                value: function() {
                    var e = {};
                    this.newValues.forEach((function(t) {
                        e[t] = !0
                    }));
                    var t = this.selectedValues.filter((function(t) {
                        return !0 === e[t]
                    }));
                    return this.multiple ? t : t[0]
                }
            }, {
                key: "getAlias",
                value: function(e) {
                    var t = e;
                    return t && (t = (t = Array.isArray(t) ? t.join(",") : t.toString().trim()).toLowerCase()), t || ""
                }
            }, {
                key: "getDisplayValue",
                value: function() {
                    var e = [];
                    return this.options.forEach((function(t) {
                        t.isSelected && e.push(t.label)
                    })), this.multiple ? e : e[0] || ""
                }
            }, {
                key: "getSelectedOptions",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.fullDetails,
                        i = void 0 !== t && t,
                        o = e.keepSelectionOrder,
                        s = void 0 !== o && o,
                        n = this.valueKey,
                        r = this.labelKey,
                        a = this.selectedValues,
                        l = [];
                    if (this.options.forEach((function(e) {
                            if (e.isSelected && !e.isGroupTitle)
                                if (i) l.push(e);
                                else {
                                    var t, o = (v(t = {}, n, e.value), v(t, r, e.label), t);
                                    e.isNew && (o.isNew = !0), e.customData && (o.customData = e.customData), l.push(o)
                                }
                        })), s) {
                        var u = {};
                        a.forEach((function(e, t) {
                            u[e] = t
                        })), l.sort((function(e, t) {
                            return u[e.value] - u[t.value]
                        }))
                    }
                    return this.multiple || i ? l : l[0]
                }
            }, {
                key: "getDisabledOptions",
                value: function() {
                    var e = this.valueKey,
                        t = this.labelKey,
                        i = this.disabledOptions,
                        o = {},
                        s = [];
                    return i.forEach((function(e) {
                        o[e] = !0
                    })), this.options.forEach((function(i) {
                        var n, r = i.value,
                            a = i.label;
                        o[r] && s.push((v(n = {}, e, r), v(n, t, a), n))
                    })), s
                }
            }, {
                key: "getVisibleOptionGroupsMapping",
                value: function(e) {
                    var t = this.options,
                        i = {},
                        o = this.isOptionVisible.bind(this);
                    return (t = this.structureOptionGroup(t)).forEach((function(t) {
                        i[t.index] = t.options.some((function(t) {
                            return o({
                                data: t,
                                searchValue: e
                            }).isVisible
                        }))
                    })), i
                }
            }, {
                key: "getOptionsCount",
                value: function(e) {
                    var t;
                    if (this.showAsPopup) {
                        var i = 80 * window.innerHeight / 100 - 48;
                        this.hasSearchContainer && (i -= 40), t = Math.floor(i / this.optionHeight)
                    } else t = parseInt(e);
                    return t
                }
            }, {
                key: "getOptionsHeight",
                value: function() {
                    return "".concat(this.optionsCount * this.optionHeight, "px")
                }
            }, {
                key: "getSibling",
                value: function(e, t) {
                    var i = "next" === t ? "nextElementSibling" : "previousElementSibling",
                        o = e;
                    do {
                        o && (o = o[i])
                    } while (p.hasClass(o, "disabled") || p.hasClass(o, "group-title"));
                    return o
                }
            }, {
                key: "getUniqueId",
                value: function() {
                    var e = s.getRandomInt(1e4);
                    return document.querySelector("#vscomp-ele-wrapper-".concat(e)) ? this.getUniqueId() : e
                }
            }, {
                key: "initDropboxPopover",
                value: function() {
                    var e = {
                        ele: this.$ele,
                        target: this.$dropboxContainer,
                        position: this.position,
                        zIndex: this.zIndex,
                        margin: 4,
                        transitionDistance: 30,
                        hideArrowIcon: !0,
                        disableManualAction: !0,
                        disableUpdatePosition: !this.hasDropboxWrapper,
                        updatePositionThrottle: this.updatePositionThrottle,
                        afterShow: this.afterShowPopper.bind(this),
                        afterHide: this.afterHidePopper.bind(this)
                    };
                    this.dropboxPopover = new PopoverComponent(e)
                }
            }, {
                key: "openDropbox",
                value: function(e) {
                    this.isSilentOpen = e, e ? p.setStyle(this.$dropboxContainer, "display", "inline-flex") : (p.dispatchEvent(this.$ele, "beforeOpen"), p.setAria(this.$wrapper, "expanded", !0)), this.setDropboxWrapperWidth(), p.removeClass(this.$allWrappers, "closed"), p.changeTabIndex(this.$allWrappers, 0), this.dropboxPopover && !e ? this.dropboxPopover.show() : this.afterShowPopper()
                }
            }, {
                key: "afterShowPopper",
                value: function() {
                    var e = this.isSilentOpen;
                    this.isSilentOpen = !1, e || (this.moveSelectedOptionsFirst(), this.setScrollTop(), p.addClass(this.$allWrappers, "focused"), this.showAsPopup ? (p.addClass(this.$body, "vscomp-popup-active"), this.isPopupActive = !0) : this.focusElementOnOpen(), p.dispatchEvent(this.$ele, "afterOpen"))
                }
            }, {
                key: "closeDropbox",
                value: function(e) {
                    this.isSilentClose = e, this.keepAlwaysOpen ? this.removeOptionFocus() : (e ? p.setStyle(this.$dropboxContainer, "display", "") : (p.dispatchEvent(this.$ele, "beforeClose"), p.setAria(this.$wrapper, "expanded", !1), p.setAria(this.$wrapper, "activedescendant", "")), this.dropboxPopover && !e ? this.dropboxPopover.hide() : this.afterHidePopper())
                }
            }, {
                key: "afterHidePopper",
                value: function() {
                    var e = this.isSilentClose;
                    this.isSilentClose = !1, p.removeClass(this.$allWrappers, "focused"), this.removeOptionFocus(), !e && this.isPopupActive && (p.removeClass(this.$body, "vscomp-popup-active"), this.isPopupActive = !1), p.addClass(this.$allWrappers, "closed"), e || (p.dispatchEvent(this.$ele, "afterClose"), (this.initialSelectedValue && 0 === this.initialSelectedValue.length || this.selectedValues.length > 0) && this.focus())
                }
            }, {
                key: "moveSelectedOptionsFirst",
                value: function() {
                    this.showSelectedOptionsFirst && (this.setSortedOptions(), this.$optionsContainer.scrollTop && this.selectedValues.length ? this.scrollToTop() : this.setVisibleOptions())
                }
            }, {
                key: "toggleDropbox",
                value: function() {
                    this.isOpened() ? this.closeDropbox() : this.openDropbox()
                }
            }, {
                key: "updatePosition",
                value: function() {
                    this.dropboxPopover && this.isOpened() && this.$ele.updatePosition()
                }
            }, {
                key: "isOpened",
                value: function() {
                    return !p.hasClass(this.$wrapper, "closed")
                }
            }, {
                key: "focusSearchInput",
                value: function() {
                    var e = this.$searchInput;
                    e && e.focus()
                }
            }, {
                key: "focusElementOnOpen",
                value: function() {
                    var e = this.$searchInput,
                        t = !this.options.length && !this.hasServerSearch;
                    if (e) t && !this.allowNewOption ? (p.setAttr(e, "disabled", ""), this.$noOptions.focus()) : (e.removeAttribute("disabled"), e.focus());
                    else {
                        var i = this.$dropbox.querySelector('[tabindex="0"]');
                        void 0 !== p.getData(i, "index") ? this.focusOption({
                            direction: "next"
                        }) : i ? i.focus() : this.focusFirstVisibleOption()
                    }
                }
            }, {
                key: "focusFirstVisibleOption",
                value: function() {
                    var e = this.$optionsContainer.querySelector("[data-index='".concat(this.getFirstVisibleOptionIndex(), "']"));
                    e ? (p.hasClass(e, "group-title") && (e = this.getSibling(e, "next")), p.setAttr(e, "tabindex", "0"), this.$optionsContainer.scrollTop = this.optionHeight * this.getFirstVisibleOptionIndex(), this.focusOption({
                        focusFirst: !0
                    }), e.focus()) : (e = this.$dropbox.querySelector('[tabindex="0"]')) && e.focus()
                }
            }, {
                key: "focusOption",
                value: function() {
                    var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        i = t.direction,
                        o = t.$option,
                        s = t.focusFirst,
                        n = this.$dropboxContainer.querySelector(".vscomp-option.focused");
                    if (o) e = o;
                    else if (!n || s) {
                        var r = this.getFirstVisibleOptionIndex();
                        e = this.$dropboxContainer.querySelector('.vscomp-option[data-visible-index="'.concat(r, '"]')), (p.hasClass(e, "disabled") || p.hasClass(e, "group-title")) && (e = this.getSibling(e, "next"))
                    } else e = this.getSibling(n, i);
                    e && e !== n && (n && this.toggleOptionFocusedState(n, !1), this.toggleOptionFocusedState(e, !0), this.toggleFocusedProp(p.getData(e, "index"), !0), this.moveFocusedOptionToView(e))
                }
            }, {
                key: "moveFocusedOptionToView",
                value: function(e) {
                    var t = e || this.$dropboxContainer.querySelector(".vscomp-option.focused");
                    if (t) {
                        var i, o = this.$optionsContainer.getBoundingClientRect(),
                            s = t.getBoundingClientRect(),
                            n = o.top,
                            r = o.bottom,
                            a = o.height,
                            l = s.top,
                            u = s.bottom,
                            c = s.height,
                            h = t.offsetTop,
                            d = p.getData(this.$options, "top", "number");
                        n > l ? i = h + d : r < u && (i = h - a + c + d), void 0 !== i && (this.$optionsContainer.scrollTop = i)
                    }
                }
            }, {
                key: "removeOptionFocus",
                value: function() {
                    var e = this.$dropboxContainer.querySelector(".vscomp-option.focused");
                    e && (this.toggleOptionFocusedState(e, !1), this.toggleFocusedProp(null))
                }
            }, {
                key: "selectOption",
                value: function(e) {
                    var t = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).event;
                    if (e) {
                        var i = !p.hasClass(e, "selected");
                        if (i) {
                            if (this.multiple && this.isMaxValuesSelected) return
                        } else if (!this.multiple) return void this.closeDropbox();
                        var o = this.selectedValues,
                            n = p.getData(e, "value"),
                            r = p.getData(e, "index", "number"),
                            a = p.hasClass(e, "current-new"),
                            l = !1,
                            u = this.lastSelectedOptionIndex;
                        if (this.lastSelectedOptionIndex = null, this.toggleSelectedProp(r, i), i) {
                            if (this.multiple) o.push(n), this.toggleAllOptionsClass(), this.toggleGroupOptionsParent(e), t && t.shiftKey && (l = !0);
                            else {
                                o.length && this.toggleSelectedProp(this.getOptionIndex(o[0]), !1), o = [n];
                                var c = this.$dropboxContainer.querySelector(".vscomp-option.selected");
                                c && this.toggleOptionSelectedState(c, !1), this.closeDropbox(), a || this.setSearchValue("")
                            }
                            this.lastSelectedOptionIndex = r, this.toggleOptionSelectedState(e)
                        } else this.multiple && (this.toggleOptionSelectedState(e), s.removeItemFromArray(o, n), this.toggleAllOptionsClass(!1), this.toggleGroupOptionsParent(e, !1));
                        a && this.beforeSelectNewValue(), this.setValue(o), l && this.selectRangeOptions(u, r)
                    }
                }
            }, {
                key: "selectFocusedOption",
                value: function() {
                    this.selectOption(this.$dropboxContainer.querySelector(".vscomp-option.focused"))
                }
            }, {
                key: "selectRangeOptions",
                value: function(e, t) {
                    var i = this;
                    if ("number" == typeof e && !this.maxValues) {
                        var o, s, n = this.selectedValues,
                            r = this.hasOptionGroup,
                            a = {};
                        if (e < t ? (o = e, s = t) : (o = t, s = e), this.options.forEach((function(e) {
                                if (!e.isDisabled && !e.isGroupTitle && e.isVisible && !e.isSelected) {
                                    var t = e.index;
                                    if (t > o && t < s) {
                                        if (r) {
                                            var i = e.groupIndex;
                                            "number" == typeof i && (a[i] = !0)
                                        }
                                        e.isSelected = !0, n.push(e.value)
                                    }
                                }
                            })), this.toggleAllOptionsClass(), this.setValue(n), (a = Object.keys(a)).length) {
                            var l = this.toggleGroupTitleProp.bind(this);
                            a.forEach((function(e) {
                                l(parseInt(e))
                            }))
                        }
                        setTimeout((function() {
                            i.renderOptions()
                        }), 0)
                    }
                }
            }, {
                key: "toggleAllOptions",
                value: function(e) {
                    if (this.multiple && !this.disableSelectAll) {
                        var t = "boolean" == typeof isSelected ? e : !p.hasClass(this.$toggleAllCheckbox, "checked"),
                            i = [],
                            o = this.selectAllOnlyVisible;
                        this.options.forEach((function(e) {
                            var s = e;
                            if (!s.isDisabled && !s.isCurrentNew) {
                                var n = s.isVisible,
                                    r = s.isSelected;
                                !t && (!o || n || !r) || t && o && !n && !r ? s.isSelected = !1 : (s.isSelected = !0, s.isGroupTitle || i.push(s.value))
                            }
                        })), this.toggleAllOptionsClass(t), this.setValue(i), this.renderOptions()
                    }
                }
            }, {
                key: "toggleAllOptionsClass",
                value: function(e) {
                    if (this.multiple) {
                        var t = !1;
                        "boolean" == typeof e || (e = this.isAllOptionsSelected()), !e && this.selectAllOnlyVisible && "" !== this.searchValue && (this.visibleOptionsCount > 0 || "" === this.searchValue) && (t = this.isAllOptionsSelected(!0)), p.toggleClass(this.$toggleAllCheckbox, "checked", e || t), this.isAllSelected = e
                    }
                }
            }, {
                key: "isAllOptionsSelected",
                value: function(e) {
                    var t = !1;
                    return this.options.length && this.selectedValues.length && (t = !this.options.some((function(t) {
                        return !t.isSelected && !t.isDisabled && !t.isGroupTitle && (!e || t.isVisible)
                    }))), t
                }
            }, {
                key: "isAllGroupOptionsSelected",
                value: function(e) {
                    var t = !1;
                    return this.options.length && (t = !this.options.some((function(t) {
                        return !t.isSelected && !t.isDisabled && !t.isGroupTitle && t.groupIndex === e
                    }))), t
                }
            }, {
                key: "toggleGroupOptionsParent",
                value: function(e, t) {
                    if (this.hasOptionGroup && !this.disableOptionGroupCheckbox && e) {
                        var i = p.getData(e, "groupIndex");
                        void 0 !== i && (i = parseInt(i));
                        var o = this.$options.querySelector('.vscomp-option[data-index="'.concat(i, '"]')),
                            s = "boolean" == typeof t ? t : this.isAllGroupOptionsSelected(i);
                        this.toggleGroupTitleCheckbox(o, s), this.toggleGroupTitleProp(i, s)
                    }
                }
            }, {
                key: "toggleGroupTitleProp",
                value: function(e, t) {
                    var i = "boolean" == typeof t ? t : this.isAllGroupOptionsSelected(e);
                    this.toggleSelectedProp(e, i)
                }
            }, {
                key: "toggleGroupOptions",
                value: function(e, t) {
                    var i = this;
                    if (this.hasOptionGroup && !this.disableOptionGroupCheckbox && e) {
                        var o = p.getData(e, "index", "number"),
                            n = this.selectedValues,
                            r = this.selectAllOnlyVisible,
                            a = {},
                            l = s.removeItemFromArray;
                        n.forEach((function(e) {
                            a[e] = !0
                        })), this.options.forEach((function(e) {
                            if (!e.isDisabled && e.groupIndex === o) {
                                var i = e.value;
                                !t || r && !e.isVisible ? (e.isSelected = !1, a[i] && l(n, i)) : (e.isSelected = !0, a[i] || n.push(i))
                            }
                        })), this.toggleAllOptionsClass(!!t && null), this.setValue(n), setTimeout((function() {
                            i.renderOptions()
                        }), 0)
                    }
                }
            }, {
                key: "toggleGroupTitleCheckbox",
                value: function(e, t) {
                    if (e) {
                        var i = p.getData(e, "index", "number");
                        this.toggleSelectedProp(i, t), this.toggleOptionSelectedState(e, t)
                    }
                }
            }, {
                key: "toggleFocusedProp",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    this.focusedOptionIndex && this.setOptionProp(this.focusedOptionIndex, "isFocused", !1), this.setOptionProp(e, "isFocused", t), this.focusedOptionIndex = e
                }
            }, {
                key: "toggleSelectedProp",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    this.setOptionProp(e, "isSelected", t)
                }
            }, {
                key: "scrollToTop",
                value: function() {
                    var e = !this.isOpened();
                    e && this.openDropbox(!0), this.$optionsContainer.scrollTop > 0 && (this.$optionsContainer.scrollTop = 0), e && this.closeDropbox(!0)
                }
            }, {
                key: "reset",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    this.options.forEach((function(e) {
                        e.isSelected = !1
                    })), this.beforeValueSet(!0), this.setValue(null, {
                        disableEvent: t,
                        disableValidation: e
                    }), this.afterValueSet(), e && p.removeClass(this.$allWrappers, "has-error"), p.dispatchEvent(this.$ele, "reset")
                }
            }, {
                key: "addOption",
                value: function(e, t) {
                    if (e) {
                        this.lastOptionIndex += 1;
                        var i = this.getOptionObj(d(d({}, e), {}, {
                            index: this.lastOptionIndex
                        }));
                        this.options.push(i), this.sortedOptions.push(i), t && (this.visibleOptionsCount += 1, this.afterSetOptions())
                    }
                }
            }, {
                key: "removeOption",
                value: function(e) {
                    (e || 0 === e) && (this.options.splice(e, 1), this.lastOptionIndex -= 1)
                }
            }, {
                key: "removeNewOption",
                value: function() {
                    var e = this.getNewOption();
                    e && this.removeOption(e.index)
                }
            }, {
                key: "sortOptions",
                value: function(e) {
                    return e.sort((function(e, t) {
                        var i = e.isSelected || e.isAnySelected,
                            o = t.isSelected || t.isAnySelected;
                        return i || o ? i && (!o || e.index < t.index) ? -1 : 1 : 0
                    }))
                }
            }, {
                key: "sortOptionsGroup",
                value: function(e) {
                    var t = this.sortOptions.bind(this),
                        i = this.structureOptionGroup(e);
                    return i.forEach((function(e) {
                        var i = e.options;
                        e.isAnySelected = i.some((function(e) {
                            return e.isSelected
                        })), e.isAnySelected && t(i)
                    })), t(i), this.destructureOptionGroup(i)
                }
            }, {
                key: "isOptionVisible",
                value: function(e) {
                    var t = e.data,
                        i = e.searchValue,
                        o = e.hasExactOption,
                        s = e.visibleOptionGroupsMapping,
                        n = e.searchGroup,
                        r = e.searchByStartsWith,
                        a = t.value.toLowerCase(),
                        l = this.searchNormalize ? t.labelNormalized : t.label.toLowerCase(),
                        u = t.description,
                        c = t.alias,
                        p = r ? l.startsWith(i) : l.includes(i);
                    return !t.isGroupTitle || n && p || (p = s[t.index]), r || !c || p || (p = c.includes(i)), r || !u || p || (p = u.toLowerCase().includes(i)), t.isVisible = p, o || (o = l === i || a === i), {
                        isVisible: p,
                        hasExactOption: o
                    }
                }
            }, {
                key: "structureOptionGroup",
                value: function(e) {
                    var t = [],
                        i = {};
                    return e.forEach((function(e) {
                        if (e.isGroupTitle) {
                            var o = [];
                            e.options = o, i[e.index] = o, t.push(e)
                        }
                    })), e.forEach((function(e) {
                        e.isGroupOption && i[e.groupIndex].push(e)
                    })), t
                }
            }, {
                key: "destructureOptionGroup",
                value: function(e) {
                    var t = [];
                    return e.forEach((function(e) {
                        t.push(e), t = t.concat(e.options)
                    })), t
                }
            }, {
                key: "serverSearch",
                value: function() {
                    p.removeClass(this.$allWrappers, "has-no-search-results"), p.addClass(this.$allWrappers, "server-searching"), this.setSelectedOptions(), this.onServerSearch(this.searchValue, this)
                }
            }, {
                key: "removeValue",
                value: function(e) {
                    var t = this.selectedValues,
                        i = p.getData(e, "value");
                    s.removeItemFromArray(t, i), this.setValueMethod(t)
                }
            }, {
                key: "focus",
                value: function() {
                    this.$wrapper.focus()
                }
            }, {
                key: "enable",
                value: function() {
                    this.$ele.disabled = !1, this.$ele.removeAttribute("disabled"), this.$hiddenInput.removeAttribute("disabled"), p.setAria(this.$wrapper, "disabled", !1), p.changeTabIndex(this.$wrapper, 0)
                }
            }, {
                key: "disable",
                value: function() {
                    this.$ele.disabled = !0, this.$ele.setAttribute("disabled", ""), this.$hiddenInput.setAttribute("disabled", ""), p.setAria(this.$wrapper, "disabled", !0), p.changeTabIndex(this.$wrapper, -1), this.$wrapper.blur()
                }
            }, {
                key: "validate",
                value: function() {
                    if (this.disableValidation) return !0;
                    var e = !1,
                        t = this.selectedValues,
                        i = this.minValues;
                    return this.required && (s.isEmpty(t) || this.multiple && i && t.length < i) && (e = !0), p.toggleClass(this.$allWrappers, "has-error", e), !e
                }
            }, {
                key: "destroy",
                value: function() {
                    var e = this.$ele;
                    e.virtualSelect = void 0, e.value = void 0, e.innerHTML = "", this.hasDropboxWrapper && (this.$dropboxWrapper.remove(), this.removeEvents()), this.dropboxPopover && this.dropboxPopover.destroy(), p.removeClass(e, "vscomp-ele")
                }
            }, {
                key: "createSecureTextElements",
                value: function() {
                    this.$secureDiv = document.createElement("div"), this.$secureText = document.createTextNode(""), this.$secureDiv.appendChild(this.$secureText)
                }
            }, {
                key: "secureText",
                value: function(e) {
                    return e && this.enableSecureText ? (this.$secureText.nodeValue = e, this.$secureDiv.innerHTML) : e
                }
            }, {
                key: "toggleRequired",
                value: function(e) {
                    this.required = s.convertToBoolean(e), this.$ele.required = this.required
                }
            }, {
                key: "toggleOptionSelectedState",
                value: function(e, t) {
                    var i = t;
                    void 0 === i && (i = !p.hasClass(e, "selected")), p.toggleClass(e, "selected", i), p.setAria(e, "selected", i)
                }
            }, {
                key: "toggleOptionFocusedState",
                value: function(e, t) {
                    e && (p.toggleClass(e, "focused", t), p.setAttr(e, "tabindex", t ? "0" : "-1"), document.activeElement !== this.$searchInput && e.focus(), t && p.setAria(this.$wrapper, "activedescendant", e.id))
                }
            }], o = [{
                key: "init",
                value: function(t) {
                    var i = t.ele;
                    if (i) {
                        var o = !1;
                        if ("string" == typeof i) {
                            var s = (i = document.querySelectorAll(i)).length;
                            if (0 === s) return;
                            1 === s && (o = !0)
                        }
                        void 0 !== i.length && void 0 !== i.forEach || (i = [i], o = !0);
                        var n = [];
                        return i.forEach((function(i) {
                            i.virtualSelect ? n.push(i.virtualSelect) : (t.ele = i, "SELECT" === i.tagName && e.setPropsFromSelect(t), n.push(new e(t)))
                        })), o ? n[0] : n
                    }
                }
            }, {
                key: "getAttrProps",
                value: function() {
                    var e = p.convertPropToDataAttr,
                        t = {};
                    return C.forEach((function(e) {
                        t[e] = e
                    })), E.forEach((function(i) {
                        t[e(i)] = i
                    })), t
                }
            }, {
                key: "setPropsFromSelect",
                value: function(e) {
                    var t = e.ele,
                        i = [],
                        o = [],
                        s = function e(t) {
                            var s = [];
                            return Array.from(t.children).forEach((function(t) {
                                var n = t.value,
                                    r = {
                                        value: n
                                    };
                                "OPTGROUP" === t.tagName ? (r.label = t.getAttribute("label"), r.options = e(t)) : r.label = t.innerHTML, s.push(r), t.disabled && i.push(n), t.selected && o.push(n)
                            })), s
                        }(t),
                        n = document.createElement("div");
                    p.setAttrFromEle(t, n, Object.keys(x), k), t.parentNode.insertBefore(n, t), t.remove(), e.ele = n, e.options = s, e.disabledOptions = i, e.selectedValue = o
                }
            }, {
                key: "onFormReset",
                value: function(e) {
                    var t = e.target.closest("form");
                    t && t.querySelectorAll(".vscomp-ele-wrapper").forEach((function(e) {
                        e.parentElement.virtualSelect.reset(!0)
                    }))
                }
            }, {
                key: "onFormSubmit",
                value: function(t) {
                    e.validate(t.target.closest("form")) || t.preventDefault()
                }
            }, {
                key: "validate",
                value: function(e) {
                    if (!e) return !0;
                    var t = !1;
                    return e.querySelectorAll(".vscomp-ele-wrapper").forEach((function(e) {
                        var i = e.parentElement.virtualSelect.validate();
                        t || i || (t = !0)
                    })), !t
                }
            }, {
                key: "reset",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    this.virtualSelect.reset(e, t)
                }
            }, {
                key: "setValueMethod",
                value: function() {
                    var e;
                    (e = this.virtualSelect).setValueMethod.apply(e, arguments)
                }
            }, {
                key: "setOptionsMethod",
                value: function() {
                    var e;
                    (e = this.virtualSelect).setOptionsMethod.apply(e, arguments)
                }
            }, {
                key: "setDisabledOptionsMethod",
                value: function() {
                    var e;
                    (e = this.virtualSelect).setDisabledOptionsMethod.apply(e, arguments)
                }
            }, {
                key: "setEnabledOptionsMethod",
                value: function() {
                    var e;
                    (e = this.virtualSelect).setEnabledOptionsMethod.apply(e, arguments)
                }
            }, {
                key: "toggleSelectAll",
                value: function(e) {
                    this.virtualSelect.toggleAllOptions(e)
                }
            }, {
                key: "isAllSelected",
                value: function() {
                    return this.virtualSelect.isAllSelected
                }
            }, {
                key: "addOptionMethod",
                value: function(e) {
                    this.virtualSelect.addOption(e, !0)
                }
            }, {
                key: "getNewValueMethod",
                value: function() {
                    return this.virtualSelect.getNewValue()
                }
            }, {
                key: "getDisplayValueMethod",
                value: function() {
                    return this.virtualSelect.getDisplayValue()
                }
            }, {
                key: "getSelectedOptionsMethod",
                value: function(e) {
                    return this.virtualSelect.getSelectedOptions(e)
                }
            }, {
                key: "getDisabledOptionsMethod",
                value: function() {
                    return this.virtualSelect.getDisabledOptions()
                }
            }, {
                key: "openMethod",
                value: function() {
                    return this.virtualSelect.openDropbox()
                }
            }, {
                key: "closeMethod",
                value: function() {
                    return this.virtualSelect.closeDropbox()
                }
            }, {
                key: "focusMethod",
                value: function() {
                    return this.virtualSelect.focus()
                }
            }, {
                key: "enableMethod",
                value: function() {
                    return this.virtualSelect.enable()
                }
            }, {
                key: "disableMethod",
                value: function() {
                    return this.virtualSelect.disable()
                }
            }, {
                key: "destroyMethod",
                value: function() {
                    return this.virtualSelect.destroy()
                }
            }, {
                key: "validateMethod",
                value: function() {
                    return this.virtualSelect.validate()
                }
            }, {
                key: "toggleRequiredMethod",
                value: function(e) {
                    return this.virtualSelect.toggleRequired(e)
                }
            }, {
                key: "onResizeMethod",
                value: function() {
                    document.querySelectorAll(".vscomp-ele-wrapper").forEach((function(e) {
                        e.parentElement.virtualSelect.onResize()
                    }))
                }
            }], i && O(t.prototype, i), o && O(t, o), Object.defineProperty(t, "prototype", {
                writable: !1
            }), e
        }();
    document.addEventListener("reset", $.onFormReset), document.addEventListener("submit", $.onFormSubmit), window.addEventListener("resize", $.onResizeMethod), x = $.getAttrProps(), window.VirtualSelect = $, "undefined" != typeof NodeList && NodeList.prototype && !NodeList.prototype.forEach && (NodeList.prototype.forEach = Array.prototype.forEach)
}(),
function() {
    "use strict";

    function e(e) {
        return function(e) {
            if (Array.isArray(e)) return t(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || function(e, i) {
            if (e) {
                if ("string" == typeof e) return t(e, i);
                var o = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === o && e.constructor && (o = e.constructor.name), "Map" === o || "Set" === o ? Array.from(e) : "Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? t(e, i) : void 0
            }
        }(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function t(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var i = 0, o = new Array(t); i < t; i++) o[i] = e[i];
        return o
    }
    var i = function() {
            function t() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t)
            }
            var i;
            return i = [{
                key: "addClass",
                value: function(i, o) {
                    i && (o = o.split(" "), t.getElements(i).forEach((function(t) {
                        var i;
                        (i = t.classList).add.apply(i, e(o))
                    })))
                }
            }, {
                key: "removeClass",
                value: function(i, o) {
                    i && (o = o.split(" "), t.getElements(i).forEach((function(t) {
                        var i;
                        (i = t.classList).remove.apply(i, e(o))
                    })))
                }
            }, {
                key: "getElements",
                value: function(e) {
                    if (e) return void 0 === e.forEach && (e = [e]), e
                }
            }, {
                key: "getMoreVisibleSides",
                value: function(e) {
                    if (!e) return {};
                    var t = e.getBoundingClientRect(),
                        i = window.innerWidth,
                        o = window.innerHeight,
                        s = t.left,
                        n = t.top;
                    return {
                        horizontal: s > i - s - t.width ? "left" : "right",
                        vertical: n > o - n - t.height ? "top" : "bottom"
                    }
                }
            }, {
                key: "getAbsoluteCoords",
                value: function(e) {
                    if (e) {
                        var t = e.getBoundingClientRect(),
                            i = window.pageXOffset,
                            o = window.pageYOffset;
                        return {
                            width: t.width,
                            height: t.height,
                            top: t.top + o,
                            right: t.right + i,
                            bottom: t.bottom + o,
                            left: t.left + i
                        }
                    }
                }
            }, {
                key: "getCoords",
                value: function(e) {
                    return e ? e.getBoundingClientRect() : {}
                }
            }, {
                key: "getData",
                value: function(e, t, i) {
                    if (e) {
                        var o = e ? e.dataset[t] : "";
                        return "number" === i ? o = parseFloat(o) || 0 : "true" === o ? o = !0 : "false" === o && (o = !1), o
                    }
                }
            }, {
                key: "setData",
                value: function(e, t, i) {
                    e && (e.dataset[t] = i)
                }
            }, {
                key: "setStyle",
                value: function(e, t, i) {
                    e && (e.style[t] = i)
                }
            }, {
                key: "show",
                value: function(e) {
                    var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "block";
                    t.setStyle(e, "display", i)
                }
            }, {
                key: "hide",
                value: function(e) {
                    t.setStyle(e, "display", "none")
                }
            }, {
                key: "getHideableParent",
                value: function(e) {
                    for (var t, i = e.parentElement; i;) {
                        var o = getComputedStyle(i).overflow;
                        if (-1 !== o.indexOf("scroll") || -1 !== o.indexOf("auto")) {
                            t = i;
                            break
                        }
                        i = i.parentElement
                    }
                    return t
                }
            }], i && function(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var o = t[i];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }(t, i), t
        }(),
        o = ["top", "bottom", "left", "right"].map((function(e) {
            return "position-".concat(e)
        })),
        s = {
            top: "rotate(180deg)",
            left: "rotate(90deg)",
            right: "rotate(-90deg)"
        },
        n = function() {
            function e(t) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e);
                try {
                    this.setProps(t), this.init()
                } catch (e) {
                    console.warn("Couldn't initiate popper"), console.error(e)
                }
            }
            var t;
            return t = [{
                key: "init",
                value: function() {
                    var e = this.$popperEle;
                    e && this.$triggerEle && (i.setStyle(e, "zIndex", this.zIndex), this.setPosition())
                }
            }, {
                key: "setProps",
                value: function(e) {
                    var t = (e = this.setDefaultProps(e)).position ? e.position.toLowerCase() : "auto";
                    if (this.$popperEle = e.$popperEle, this.$triggerEle = e.$triggerEle, this.$arrowEle = e.$arrowEle, this.margin = parseFloat(e.margin), this.offset = parseFloat(e.offset), this.enterDelay = parseFloat(e.enterDelay), this.exitDelay = parseFloat(e.exitDelay), this.showDuration = parseFloat(e.showDuration), this.hideDuration = parseFloat(e.hideDuration), this.transitionDistance = parseFloat(e.transitionDistance), this.zIndex = parseFloat(e.zIndex), this.afterShowCallback = e.afterShow, this.afterHideCallback = e.afterHide, this.hasArrow = !!this.$arrowEle, -1 !== t.indexOf(" ")) {
                        var i = t.split(" ");
                        this.position = i[0], this.secondaryPosition = i[1]
                    } else this.position = t
                }
            }, {
                key: "setDefaultProps",
                value: function(e) {
                    return Object.assign({
                        position: "auto",
                        margin: 8,
                        offset: 5,
                        enterDelay: 0,
                        exitDelay: 0,
                        showDuration: 300,
                        hideDuration: 200,
                        transitionDistance: 10,
                        zIndex: 1
                    }, e)
                }
            }, {
                key: "setPosition",
                value: function() {
                    i.show(this.$popperEle, "inline-flex");
                    var e, t, n, r = window.innerWidth,
                        a = window.innerHeight,
                        l = i.getAbsoluteCoords(this.$popperEle),
                        u = i.getAbsoluteCoords(this.$triggerEle),
                        c = l.width,
                        p = l.height,
                        h = l.top,
                        d = l.right,
                        v = l.bottom,
                        f = l.left,
                        y = u.width,
                        b = u.height,
                        m = u.top,
                        g = u.right,
                        O = u.bottom,
                        S = u.left,
                        x = m - h,
                        w = S - f,
                        k = w,
                        C = x,
                        E = this.position,
                        $ = this.secondaryPosition,
                        A = y / 2 - c / 2,
                        T = b / 2 - p / 2,
                        D = this.margin,
                        V = this.transitionDistance,
                        P = window.scrollY - h,
                        I = a + P,
                        M = window.scrollX - f,
                        F = r + M,
                        L = this.offset;
                    L && (P += L, I -= L, M += L, F -= L), "auto" === E && (E = i.getMoreVisibleSides(this.$triggerEle).vertical);
                    var G = {
                            top: {
                                top: C - p - D,
                                left: k + A
                            },
                            bottom: {
                                top: C + b + D,
                                left: k + A
                            },
                            right: {
                                top: C + T,
                                left: k + y + D
                            },
                            left: {
                                top: C + T,
                                left: k - c - D
                            }
                        },
                        H = G[E];
                    if (C = H.top, k = H.left, $ && ("top" === $ ? C = x : "bottom" === $ ? C = x + b - p : "left" === $ ? k = w : "right" === $ && (k = w + y - c)), k < M ? "left" === E ? n = "right" : k = M + f > g ? g - f : M : k + c > F && ("right" === E ? n = "left" : k = F + f < S ? S - d : F - c), C < P ? "top" === E ? n = "bottom" : C = P + h > O ? O - h : P : C + p > I && ("bottom" === E ? n = "top" : C = I + h < m ? m - v : I - p), n) {
                        var N = G[n];
                        "top" === (E = n) || "bottom" === E ? C = N.top : "left" !== E && "right" !== E || (k = N.left)
                    }
                    "top" === E ? (e = C + V, t = k) : "right" === E ? (e = C, t = k - V) : "left" === E ? (e = C, t = k + V) : (e = C - V, t = k);
                    var j = "translate3d(".concat(parseInt(t), "px, ").concat(parseInt(e), "px, 0)");
                    if (i.setStyle(this.$popperEle, "transform", j), i.setData(this.$popperEle, "fromLeft", t), i.setData(this.$popperEle, "fromTop", e), i.setData(this.$popperEle, "top", C), i.setData(this.$popperEle, "left", k), i.removeClass(this.$popperEle, o.join(" ")), i.addClass(this.$popperEle, "position-".concat(E)), this.hasArrow) {
                        var W = 0,
                            B = 0,
                            q = k + f,
                            R = C + h,
                            z = this.$arrowEle.offsetWidth / 2,
                            K = s[E] || "";
                        "top" === E || "bottom" === E ? (W = y / 2 + S - q) < z ? W = z : W > c - z && (W = c - z) : "left" !== E && "right" !== E || ((B = b / 2 + m - R) < z ? B = z : B > p - z && (B = p - z)), i.setStyle(this.$arrowEle, "transform", "translate3d(".concat(parseInt(W), "px, ").concat(parseInt(B), "px, 0) ").concat(K))
                    }
                    i.hide(this.$popperEle)
                }
            }, {
                key: "resetPosition",
                value: function() {
                    i.setStyle(this.$popperEle, "transform", "none"), this.setPosition()
                }
            }, {
                key: "show",
                value: function() {
                    var e = this,
                        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        o = t.resetPosition,
                        s = t.data;
                    clearTimeout(this.exitDelayTimeout), clearTimeout(this.hideDurationTimeout), o && this.resetPosition(), this.enterDelayTimeout = setTimeout((function() {
                        var t = i.getData(e.$popperEle, "left"),
                            o = i.getData(e.$popperEle, "top"),
                            n = "translate3d(".concat(parseInt(t), "px, ").concat(parseInt(o), "px, 0)"),
                            r = e.showDuration;
                        i.show(e.$popperEle, "inline-flex"), i.getCoords(e.$popperEle), i.setStyle(e.$popperEle, "transitionDuration", r + "ms"), i.setStyle(e.$popperEle, "transform", n), i.setStyle(e.$popperEle, "opacity", 1), e.showDurationTimeout = setTimeout((function() {
                            "function" == typeof e.afterShowCallback && e.afterShowCallback(s)
                        }), r)
                    }), this.enterDelay)
                }
            }, {
                key: "hide",
                value: function() {
                    var e = this,
                        t = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).data;
                    clearTimeout(this.enterDelayTimeout), clearTimeout(this.showDurationTimeout), this.exitDelayTimeout = setTimeout((function() {
                        if (e.$popperEle) {
                            var o = parseInt(i.getData(e.$popperEle, "fromLeft")),
                                s = parseInt(i.getData(e.$popperEle, "fromTop")),
                                n = "translate3d(".concat(o, "px, ").concat(s, "px, 0)"),
                                r = e.hideDuration;
                            i.setStyle(e.$popperEle, "transitionDuration", r + "ms"), i.setStyle(e.$popperEle, "transform", n), i.setStyle(e.$popperEle, "opacity", 0), e.hideDurationTimeout = setTimeout((function() {
                                i.hide(e.$popperEle), "function" == typeof e.afterHideCallback && e.afterHideCallback(t)
                            }), r)
                        }
                    }), this.exitDelay)
                }
            }, {
                key: "updatePosition",
                value: function() {
                    i.setStyle(this.$popperEle, "transitionDuration", "0ms"), this.resetPosition();
                    var e = parseInt(i.getData(this.$popperEle, "left")),
                        t = parseInt(i.getData(this.$popperEle, "top"));
                    i.show(this.$popperEle, "inline-flex"), i.setStyle(this.$popperEle, "transform", "translate3d(".concat(e, "px, ").concat(t, "px, 0)"))
                }
            }], t && function(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var o = t[i];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }(e.prototype, t), e
        }();
    window.PopperComponent = n
}(),
function() {
    "use strict";

    function e(t) {
        return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(t)
    }

    function t(e, t) {
        for (var o = 0; o < t.length; o++) {
            var s = t[o];
            s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, i(s.key), s)
        }
    }

    function i(t) {
        var i = function(t, i) {
            if ("object" != e(t) || !t) return t;
            var o = t[Symbol.toPrimitive];
            if (void 0 !== o) {
                var s = o.call(t, "string");
                if ("object" != e(s)) return s;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(t)
        }(t);
        return "symbol" == e(i) ? i : i + ""
    }
    var o = function() {
        return e = function e() {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e)
        }, i = [{
            key: "convertToBoolean",
            value: function(e) {
                return !0 === e || "true" === e || !1 !== e && "false" !== e && arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
            }
        }, {
            key: "removeArrayEmpty",
            value: function(e) {
                return Array.isArray(e) && e.length ? e.filter((function(e) {
                    return !!e
                })) : []
            }
        }, {
            key: "throttle",
            value: function(e, t) {
                var i, o = 0;
                return function() {
                    for (var s = arguments.length, n = new Array(s), r = 0; r < s; r++) n[r] = arguments[r];
                    var a = (new Date).getTime(),
                        l = t - (a - o);
                    clearTimeout(i), l <= 0 ? (o = a, e.apply(void 0, n)) : i = setTimeout((function() {
                        e.apply(void 0, n)
                    }), l)
                }
            }
        }], i && t(e, i), Object.defineProperty(e, "prototype", {
            writable: !1
        }), e;
        var e, i
    }();

    function s(e) {
        return s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, s(e)
    }

    function n(e) {
        return function(e) {
            if (Array.isArray(e)) return r(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return r(e, t);
                var i = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === i && e.constructor && (i = e.constructor.name), "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? r(e, t) : void 0
            }
        }(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function r(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var i = 0, o = new Array(t); i < t; i++) o[i] = e[i];
        return o
    }

    function a(e, t) {
        for (var i = 0; i < t.length; i++) {
            var o = t[i];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, l(o.key), o)
        }
    }

    function l(e) {
        var t = function(e, t) {
            if ("object" != s(e) || !e) return e;
            var i = e[Symbol.toPrimitive];
            if (void 0 !== i) {
                var o = i.call(e, "string");
                if ("object" != s(o)) return o;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(e)
        }(e);
        return "symbol" == s(t) ? t : t + ""
    }
    var u = function() {
        function e() {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e)
        }
        return t = e, i = [{
            key: "addClass",
            value: function(t, i) {
                t && (i = i.split(" "), e.getElements(t).forEach((function(e) {
                    var t;
                    (t = e.classList).add.apply(t, n(i))
                })))
            }
        }, {
            key: "removeClass",
            value: function(t, i) {
                t && (i = i.split(" "), e.getElements(t).forEach((function(e) {
                    var t;
                    (t = e.classList).remove.apply(t, n(i))
                })))
            }
        }, {
            key: "hasClass",
            value: function(e, t) {
                return !!e && e.classList.contains(t)
            }
        }, {
            key: "getElement",
            value: function(e) {
                return e && ("string" == typeof e ? e = document.querySelector(e) : void 0 !== e.length && (e = e[0])), e || null
            }
        }, {
            key: "getElements",
            value: function(e) {
                if (e) return void 0 === e.forEach && (e = [e]), e
            }
        }, {
            key: "addEvent",
            value: function(t, i, o) {
                e.addOrRemoveEvent(t, i, o, "add")
            }
        }, {
            key: "removeEvent",
            value: function(t, i, o) {
                e.addOrRemoveEvent(t, i, o, "remove")
            }
        }, {
            key: "addOrRemoveEvent",
            value: function(t, i, s, n) {
                t && (i = o.removeArrayEmpty(i.split(" "))).forEach((function(i) {
                    (t = e.getElements(t)).forEach((function(e) {
                        "add" === n ? e.addEventListener(i, s) : e.removeEventListener(i, s)
                    }))
                }))
            }
        }, {
            key: "getScrollableParents",
            value: function(e) {
                if (!e) return [];
                for (var t = [window], i = e.parentElement; i;) {
                    var o = getComputedStyle(i).overflow; - 1 === o.indexOf("scroll") && -1 === o.indexOf("auto") || t.push(i), i = i.parentElement
                }
                return t
            }
        }, {
            key: "convertPropToDataAttr",
            value: function(e) {
                return e ? "data-popover-".concat(e).replace(/([A-Z])/g, "-$1").toLowerCase() : ""
            }
        }], i && a(t, i), Object.defineProperty(t, "prototype", {
            writable: !1
        }), t;
        var t, i
    }();

    function c(e) {
        return c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, c(e)
    }

    function p(e, t) {
        for (var i = 0; i < t.length; i++) {
            var o = t[i];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, h(o.key), o)
        }
    }

    function h(e) {
        var t = function(e, t) {
            if ("object" != c(e) || !e) return e;
            var i = e[Symbol.toPrimitive];
            if (void 0 !== i) {
                var o = i.call(e, "string");
                if ("object" != c(o)) return o;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(e)
        }(e);
        return "symbol" == c(t) ? t : t + ""
    }
    var d, v = {
            27: "onEscPress"
        },
        f = ["target", "position", "margin", "offset", "enterDelay", "exitDelay", "showDuration", "hideDuration", "transitionDistance", "updatePositionThrottle", "zIndex", "hideOnOuterClick", "showOnHover", "hideArrowIcon", "disableManualAction", "disableUpdatePosition"],
        y = function() {
            function e(t) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e);
                try {
                    this.setProps(t), this.init()
                } catch (e) {
                    console.warn("Couldn't initiate Popover component"), console.error(e)
                }
            }
            return t = e, s = [{
                key: "init",
                value: function(t) {
                    var i = t.ele;
                    if (i) {
                        var o = !1;
                        if ("string" == typeof i) {
                            if (!(i = document.querySelectorAll(i))) return;
                            1 === i.length && (o = !0)
                        }
                        void 0 === i.length && (i = [i], o = !0);
                        var s = [];
                        return i.forEach((function(i) {
                            t.ele = i, e.destroy(i), s.push(new e(t))
                        })), o ? s[0] : s
                    }
                }
            }, {
                key: "destroy",
                value: function(e) {
                    if (e) {
                        var t = e.popComp;
                        t && t.destroy()
                    }
                }
            }, {
                key: "showMethod",
                value: function() {
                    this.popComp.show()
                }
            }, {
                key: "hideMethod",
                value: function() {
                    this.popComp.hide()
                }
            }, {
                key: "updatePositionMethod",
                value: function() {
                    this.popComp.popper.updatePosition()
                }
            }, {
                key: "getAttrProps",
                value: function() {
                    var e = u.convertPropToDataAttr,
                        t = {};
                    return f.forEach((function(i) {
                        t[e(i)] = i
                    })), t
                }
            }], (i = [{
                key: "init",
                value: function() {
                    this.$popover && (this.setElementProps(), this.renderArrow(), this.initPopper(), this.addEvents())
                }
            }, {
                key: "getEvents",
                value: function() {
                    var e = [{
                        $ele: document,
                        event: "click",
                        method: "onDocumentClick"
                    }, {
                        $ele: document,
                        event: "keydown",
                        method: "onDocumentKeyDown"
                    }];
                    return this.disableManualAction || (e.push({
                        $ele: this.$ele,
                        event: "click",
                        method: "onTriggerEleClick"
                    }), this.showOnHover && (e.push({
                        $ele: this.$ele,
                        event: "mouseenter",
                        method: "onTriggerEleMouseEnter"
                    }), e.push({
                        $ele: this.$ele,
                        event: "mouseleave",
                        method: "onTriggerEleMouseLeave"
                    }))), e
                }
            }, {
                key: "addOrRemoveEvents",
                value: function(e) {
                    var t = this;
                    this.getEvents().forEach((function(i) {
                        t.addOrRemoveEvent({
                            action: e,
                            $ele: i.$ele,
                            events: i.event,
                            method: i.method
                        })
                    }))
                }
            }, {
                key: "addEvents",
                value: function() {
                    this.addOrRemoveEvents("add")
                }
            }, {
                key: "removeEvents",
                value: function() {
                    this.addOrRemoveEvents("remove"), this.removeScrollEventListeners(), this.removeResizeEventListeners()
                }
            }, {
                key: "addOrRemoveEvent",
                value: function(e) {
                    var t = this,
                        i = e.action,
                        s = e.$ele,
                        n = e.events,
                        r = e.method,
                        a = e.throttle;
                    s && (n = o.removeArrayEmpty(n.split(" "))).forEach((function(e) {
                        var n = "".concat(r, "-").concat(e),
                            l = t.events[n];
                        l || (l = t[r].bind(t), a && (l = o.throttle(l, a)), t.events[n] = l), "add" === i ? u.addEvent(s, e, l) : u.removeEvent(s, e, l)
                    }))
                }
            }, {
                key: "addScrollEventListeners",
                value: function() {
                    this.$scrollableElems = u.getScrollableParents(this.$ele), this.addOrRemoveEvent({
                        action: "add",
                        $ele: this.$scrollableElems,
                        events: "scroll",
                        method: "onAnyParentScroll",
                        throttle: this.updatePositionThrottle
                    })
                }
            }, {
                key: "removeScrollEventListeners",
                value: function() {
                    this.$scrollableElems && (this.addOrRemoveEvent({
                        action: "remove",
                        $ele: this.$scrollableElems,
                        events: "scroll",
                        method: "onAnyParentScroll"
                    }), this.$scrollableElems = null)
                }
            }, {
                key: "addResizeEventListeners",
                value: function() {
                    this.addOrRemoveEvent({
                        action: "add",
                        $ele: window,
                        events: "resize",
                        method: "onResize",
                        throttle: this.updatePositionThrottle
                    })
                }
            }, {
                key: "removeResizeEventListeners",
                value: function() {
                    this.addOrRemoveEvent({
                        action: "remove",
                        $ele: window,
                        events: "resize",
                        method: "onResize"
                    })
                }
            }, {
                key: "onAnyParentScroll",
                value: function() {
                    this.popper.updatePosition()
                }
            }, {
                key: "onResize",
                value: function() {
                    this.popper.updatePosition()
                }
            }, {
                key: "onDocumentClick",
                value: function(e) {
                    var t = e.target,
                        i = t.closest(".pop-comp-ele"),
                        o = t.closest(".pop-comp-wrapper");
                    this.hideOnOuterClick && i !== this.$ele && o !== this.$popover && this.hide()
                }
            }, {
                key: "onDocumentKeyDown",
                value: function(e) {
                    var t = e.which || e.keyCode,
                        i = v[t];
                    i && this[i](e)
                }
            }, {
                key: "onEscPress",
                value: function() {
                    this.hideOnOuterClick && this.hide()
                }
            }, {
                key: "onTriggerEleClick",
                value: function() {
                    this.toggle()
                }
            }, {
                key: "onTriggerEleMouseEnter",
                value: function() {
                    this.show()
                }
            }, {
                key: "onTriggerEleMouseLeave",
                value: function() {
                    this.hide()
                }
            }, {
                key: "setProps",
                value: function(e) {
                    e = this.setDefaultProps(e), this.setPropsFromElementAttr(e);
                    var t = o.convertToBoolean;
                    this.$ele = e.ele, this.target = e.target, this.position = e.position, this.margin = parseFloat(e.margin), this.offset = parseFloat(e.offset), this.enterDelay = parseFloat(e.enterDelay), this.exitDelay = parseFloat(e.exitDelay), this.showDuration = parseFloat(e.showDuration), this.hideDuration = parseFloat(e.hideDuration), this.transitionDistance = parseFloat(e.transitionDistance), this.updatePositionThrottle = parseFloat(e.updatePositionThrottle), this.zIndex = parseFloat(e.zIndex), this.hideOnOuterClick = t(e.hideOnOuterClick), this.showOnHover = t(e.showOnHover), this.hideArrowIcon = t(e.hideArrowIcon), this.disableManualAction = t(e.disableManualAction), this.disableUpdatePosition = t(e.disableUpdatePosition), this.beforeShowCallback = e.beforeShow, this.afterShowCallback = e.afterShow, this.beforeHideCallback = e.beforeHide, this.afterHideCallback = e.afterHide, this.events = {}, this.$popover = u.getElement(this.target)
                }
            }, {
                key: "setDefaultProps",
                value: function(e) {
                    return Object.assign({
                        position: "auto",
                        margin: 8,
                        offset: 5,
                        enterDelay: 0,
                        exitDelay: 0,
                        showDuration: 300,
                        hideDuration: 200,
                        transitionDistance: 10,
                        updatePositionThrottle: 100,
                        zIndex: 1,
                        hideOnOuterClick: !0,
                        showOnHover: !1,
                        hideArrowIcon: !1,
                        disableManualAction: !1,
                        disableUpdatePosition: !1
                    }, e)
                }
            }, {
                key: "setPropsFromElementAttr",
                value: function(e) {
                    var t = e.ele;
                    for (var i in d) {
                        var o = t.getAttribute(i);
                        o && (e[d[i]] = o)
                    }
                }
            }, {
                key: "setElementProps",
                value: function() {
                    var t = this.$ele;
                    t.popComp = this, t.show = e.showMethod, t.hide = e.hideMethod, t.updatePosition = e.updatePositionMethod, u.addClass(this.$ele, "pop-comp-ele"), u.addClass(this.$popover, "pop-comp-wrapper")
                }
            }, {
                key: "getOtherTriggerPopComp",
                value: function() {
                    var e, t = this.$popover.popComp;
                    return t && t.$ele !== this.$ele && (e = t), e
                }
            }, {
                key: "initPopper",
                value: function() {
                    var e = {
                        $popperEle: this.$popover,
                        $triggerEle: this.$ele,
                        $arrowEle: this.$arrowEle,
                        position: this.position,
                        margin: this.margin,
                        offset: this.offset,
                        enterDelay: this.enterDelay,
                        exitDelay: this.exitDelay,
                        showDuration: this.showDuration,
                        hideDuration: this.hideDuration,
                        transitionDistance: this.transitionDistance,
                        zIndex: this.zIndex,
                        afterShow: this.afterShow.bind(this),
                        afterHide: this.afterHide.bind(this)
                    };
                    this.popper = new PopperComponent(e)
                }
            }, {
                key: "beforeShow",
                value: function() {
                    "function" == typeof this.beforeShowCallback && this.beforeShowCallback(this)
                }
            }, {
                key: "beforeHide",
                value: function() {
                    "function" == typeof this.beforeHideCallback && this.beforeHideCallback(this)
                }
            }, {
                key: "show",
                value: function() {
                    this.isShown() || (this.isShownForOtherTrigger() ? this.showAfterOtherHide() : (u.addClass(this.$popover, "pop-comp-disable-events"), this.$popover.popComp = this, this.beforeShow(), this.popper.show({
                        resetPosition: !0
                    }), u.addClass(this.$ele, "pop-comp-active")))
                }
            }, {
                key: "hide",
                value: function() {
                    this.isShown() && (this.beforeHide(), this.popper.hide(), this.removeScrollEventListeners(), this.removeResizeEventListeners())
                }
            }, {
                key: "toggle",
                value: function(e) {
                    void 0 === e && (e = !this.isShown()), e ? this.show() : this.hide()
                }
            }, {
                key: "isShown",
                value: function() {
                    return u.hasClass(this.$ele, "pop-comp-active")
                }
            }, {
                key: "isShownForOtherTrigger",
                value: function() {
                    var e = this.getOtherTriggerPopComp();
                    return !!e && e.isShown()
                }
            }, {
                key: "showAfterOtherHide",
                value: function() {
                    var e = this,
                        t = this.getOtherTriggerPopComp();
                    if (t) {
                        var i = t.exitDelay + t.hideDuration + 100;
                        setTimeout((function() {
                            e.show()
                        }), i)
                    }
                }
            }, {
                key: "afterShow",
                value: function() {
                    var e = this;
                    this.showOnHover ? setTimeout((function() {
                        u.removeClass(e.$popover, "pop-comp-disable-events")
                    }), 2e3) : u.removeClass(this.$popover, "pop-comp-disable-events"), this.disableUpdatePosition || (this.addScrollEventListeners(), this.addResizeEventListeners()), "function" == typeof this.afterShowCallback && this.afterShowCallback(this)
                }
            }, {
                key: "afterHide",
                value: function() {
                    u.removeClass(this.$ele, "pop-comp-active"), "function" == typeof this.afterHideCallback && this.afterHideCallback(this)
                }
            }, {
                key: "renderArrow",
                value: function() {
                    if (!this.hideArrowIcon) {
                        var e = this.$popover.querySelector(".pop-comp-arrow");
                        e || (this.$popover.insertAdjacentHTML("afterbegin", '<i class="pop-comp-arrow"></i>'), e = this.$popover.querySelector(".pop-comp-arrow")), this.$arrowEle = e
                    }
                }
            }, {
                key: "destroy",
                value: function() {
                    this.removeEvents()
                }
            }]) && p(t.prototype, i), s && p(t, s), Object.defineProperty(t, "prototype", {
                writable: !1
            }), t;
            var t, i, s
        }();
    d = y.getAttrProps(), window.PopoverComponent = y
}();