import {
    a as E
} from "./_oschunk-6WIUA54E.js";
import {
    a as h
} from "./_oschunk-AYRLSY2M.js";
import {
    a as W
} from "./_oschunk-VTBVZWH4.js";
import "./_oschunk-34ZQDKQE.js";
import "./_oschunk-S4T4FX3G.js";
import "./_oschunk-SELPP7T7.js";
import "./_oschunk-22UUXQ4S.js";
import "./_oschunk-QCCZFQH6.js";
import "./_oschunk-4YFBPYRH.js";
import "./_oschunk-NR4KXK35.js";
import {
    b as f,
    d as c,
    l as F,
    o as w,
    p as v,
    t as S,
    u as d
} from "./_oschunk-OO36B6PN.js";
import "./_oschunk-7BKGLZMI.js";
import "./_oschunk-6WALBPGV.js";
import {
    a as T,
    g as _,
    i as R
} from "./_oschunk-IL57OEHH.js";
import "./_oschunk-RFCNRBVT.js";
import "./_oschunk-Y3C3IKDF.js";
import "./_oschunk-CMUJJDSY.js";
import {
    a as o
} from "./_oschunk-DW3HXDMW.js";
import "./_oschunk-PNRBOTIK.js";
import "./_oschunk-JXJHSAQS.js";
import {
    ia as O
} from "./_oschunk-5KJVGEL7.js";
import {
    c as g,
    h as C
} from "./_oschunk-QHO7QY6K.js";
var t = C(T());
var m = O,
    V = R.PlaceholderContent,
    Q = R.IteratorPlaceholderContent,
    u = class u extends _.BaseWebScreen {
        static get displayName() {
            return "Developer.Endpoint"
        }
        static getAttributes() {
            return {
                codeFunction: "Endpoint",
                functionKey: "7b7d13a7-3209-4d57-ba43-275e8f5a99bc",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/PartnersHub.PHubTest.css", "css/PartnersHub.Developer.Endpoint.css", "css/PartnersHub.PHubTest.extra.css"]
        }
        static getJsDependencies() {
            return ["scripts/PartnersHub.UserScripts.DerivAnalytics.js"]
        }
        static getBlocks() {
            return [E]
        }
        get modelFactory() {
            return h
        }
        get controllerFactory() {
            return W
        }
        get title() {
            return _.BaseWebScreen.getTranslation("pxN9ewkyV026Qydej1qZvA#Title", "Endpoint")
        }
        internalRender() {
            let a = this.model,
                l = this.controller,
                e = this.idService,
                p = l.validationService,
                r = this.widgetsRecordProvider,
                b = l.callContext(),
                D = u.ifWidget,
                s = u.textWidget,
                P = u.asPrimitiveValue,
                n = u.getTranslation,
                x = this;
            return t.createElement("div", this.getRootNodeProperties(), t.createElement(E, {
                getOwnerSpan: g(function() {
                    return x.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: g(function() {
                    return x.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: g(function(i) {
                        l.handleError(i)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: p
                },
                _idProps: {
                    service: e,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: r,
                placeholders: {
                    mainContent: new V(function() {
                        return [t.createElement(F, {
                            _validationProps: {
                                validationService: p
                            },
                            extendedProperties: {
                                style: "display: flex; justify-content: center;"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "",
                            _idProps: {
                                service: e,
                                name: "Form1"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(c, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "display: flex; flex-direction: column; gap: 12px;"
                            },
                            gridProperties: {
                                classes: "OSInline",
                                width: "auto"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "2"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(d, {
                            extendedProperties: {
                                style: "font-size: 16px; font-weight: bold;"
                            },
                            text: [s(n("xq6aFQV3i0GlkG17lS85RA#Value", "Change API Endpoint"))],
                            _idProps: {
                                service: e,
                                uuid: "3"
                            },
                            _widgetRecordProvider: r
                        }), t.createElement(c, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "Server2"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(v, {
                            extendedProperties: {
                                style: "margin-bottom: 4px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            _idProps: {
                                service: e,
                                uuid: "5"
                            },
                            _widgetRecordProvider: r
                        }, s(n("DWYZMDPB40Oa+r4IbtgTyg#Value", "Server"))), t.createElement(w, {
                            _validationProps: {
                                validationService: p,
                                validationParentId: e.getId("Form1")
                            },
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            inputType: 0,
                            mandatory: !1,
                            maxLength: 50,
                            prompt: "Server",
                            style: "form-control",
                            variable: a.createVariable(m.DataTypes.DataTypes.Text, a.variables.serverURLVar, function(i) {
                                a.variables.serverURLVar = i
                            }),
                            _idProps: {
                                service: e,
                                name: "Server"
                            },
                            _widgetRecordProvider: r
                        }), t.createElement(d, {
                            extendedProperties: {
                                style: "color: #999; font-size: 10px; margin-left: 8px;"
                            },
                            text: ["e.g. green.derivws.com"],
                            _idProps: {
                                service: e,
                                uuid: "7"
                            },
                            _widgetRecordProvider: r
                        })), t.createElement(c, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "AppID"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(v, {
                            extendedProperties: {
                                style: "margin-bottom: 4px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            _idProps: {
                                service: e,
                                uuid: "9"
                            },
                            _widgetRecordProvider: r
                        }, s(n("tYSnXt74LEe+5+sVcqPLpw#Value", "OAuth App ID"))), t.createElement(w, {
                            _validationProps: {
                                validationService: p,
                                validationParentId: e.getId("Form1")
                            },
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            inputType: 0,
                            mandatory: !1,
                            maxLength: 50,
                            prompt: "Server",
                            style: "form-control",
                            variable: a.createVariable(m.DataTypes.DataTypes.Text, a.variables.oAuthAppID2Var, function(i) {
                                a.variables.oAuthAppID2Var = i
                            }),
                            _idProps: {
                                service: e,
                                name: "OAuthAppID"
                            },
                            _widgetRecordProvider: r
                        }), t.createElement(v, {
                            extendedProperties: {
                                style: "color: #999; display: flex; font-size: 10px; margin-bottom: 4px; margin-top: 2px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent",
                                marginLeft: "8px"
                            },
                            _idProps: {
                                service: e,
                                uuid: "11"
                            },
                            _widgetRecordProvider: r
                        }, s(n("jso1GJeBzkmbFB0QlMBT5Q#Value", "Register an ")), t.createElement(c, {
                            align: 0,
                            animate: !1,
                            extendedEvents: {
                                onClick: g(function() {
                                    var i = b.clone();
                                    l.onClick$Action(l.callContext(i))
                                }, "onClick")
                            },
                            extendedProperties: {
                                style: "cursor: pointer;"
                            },
                            gridProperties: {
                                marginLeft: "4px"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "12"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(d, {
                            extendedProperties: {
                                style: "text-decoration: underline;"
                            },
                            text: [s(n("ZIpQdKMSh029jJ2Kl8HJIg#Value", "app ID"))],
                            _idProps: {
                                service: e,
                                uuid: "13"
                            },
                            _widgetRecordProvider: r
                        })), t.createElement(d, {
                            extendedProperties: {
                                style: "margin-left: 4px;"
                            },
                            text: [s(n("40bWnUM0M0qjslHd09SpUw#Value", "to use the above server for logging in."))],
                            _idProps: {
                                service: e,
                                uuid: "14"
                            },
                            _widgetRecordProvider: r
                        }))), t.createElement(c, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "align-items: center; display: flex; gap: 16px;"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "SubmitButtons"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(f, {
                            enabled: !0,
                            isDefault: !1,
                            onClick: g(function() {
                                x.validateWidget(e.getId("Form1"));
                                var i = b.clone();
                                l.buttonOnClick$Action(l.callContext(i))
                            }, "onClick"),
                            style: "submit-button",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "16"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(d, {
                            extendedProperties: {
                                style: "color: #fff; font-size: 14px; font-weight: bold;"
                            },
                            text: [s(n("KIeuFldrS0KldY+5Z10Nrw#Value", "Submit"))],
                            _idProps: {
                                service: e,
                                uuid: "17"
                            },
                            _widgetRecordProvider: r
                        })), t.createElement(f, {
                            enabled: !0,
                            gridProperties: {
                                marginLeft: "0"
                            },
                            isDefault: !1,
                            onClick: g(function() {
                                var i = b.clone();
                                l.resetEndpoint$Action(l.callContext(i))
                            }, "onClick"),
                            style: "reset-button",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "18"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(d, {
                            extendedProperties: {
                                style: "color: #222; font-size: 14px; font-weight: bold;"
                            },
                            text: [s(n("z4E221d1vEeR43uMRxpE+A#Value", "Reset to original settings"))],
                            _idProps: {
                                service: e,
                                uuid: "19"
                            },
                            _widgetRecordProvider: r
                        }))), t.createElement(c, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "align-items: center; display: flex;"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "FeatureFlag"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(v, {
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            _idProps: {
                                service: e,
                                uuid: "21"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(d, {
                            text: [s(n("NkzbLfXeBUerQrAW2zsQfA#Value", "Language Switcher"))],
                            _idProps: {
                                service: e,
                                name: "LanguageSwitcherLabel"
                            },
                            _widgetRecordProvider: r
                        })), t.createElement(S, {
                            _validationProps: {
                                validationService: p,
                                validationParentId: e.getId("Form1")
                            },
                            enabled: !0,
                            style: "switch",
                            variable: a.createVariable(m.DataTypes.DataTypes.Boolean, o.getisLanguageSwitcherEnabledFF(), function(i) {
                                o.setisLanguageSwitcherEnabledFF(i)
                            }),
                            _idProps: {
                                service: e,
                                name: "LanguageSwitcherToggle"
                            },
                            _widgetRecordProvider: r
                        })), t.createElement(c, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "align-items: center; display: flex;"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "EventFilterFeatureFlag"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(v, {
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            _idProps: {
                                service: e,
                                uuid: "25"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(d, {
                            text: [s(n("Bq5kIkxsoEKJiNkxeyeg4Q#Value", "Event Filter"))],
                            _idProps: {
                                service: e,
                                name: "CFDCommssion3"
                            },
                            _widgetRecordProvider: r
                        })), t.createElement(S, {
                            _validationProps: {
                                validationService: p,
                                validationParentId: e.getId("Form1")
                            },
                            enabled: !0,
                            style: "switch",
                            variable: a.createVariable(m.DataTypes.DataTypes.Boolean, o.getisEventFilterEnabledFF(), function(i) {
                                o.setisEventFilterEnabledFF(i)
                            }),
                            _idProps: {
                                service: e,
                                name: "EventFilterToggle"
                            },
                            _widgetRecordProvider: r
                        })), t.createElement(c, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "align-items: center; display: flex;"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "EventUnpublishFeatureFlag"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(v, {
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            _idProps: {
                                service: e,
                                uuid: "29"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(d, {
                            text: [s(n("ziEuACfu6U+lGvqYofBi3A#Value", "Show Unpublish Event"))],
                            _idProps: {
                                service: e,
                                name: "CFDCommssion2"
                            },
                            _widgetRecordProvider: r
                        })), t.createElement(S, {
                            _validationProps: {
                                validationService: p,
                                validationParentId: e.getId("Form1")
                            },
                            enabled: !0,
                            style: "switch",
                            variable: a.createVariable(m.DataTypes.DataTypes.Boolean, o.getshowUnpublishEventFF(), function(i) {
                                o.setshowUnpublishEventFF(i)
                            }),
                            _idProps: {
                                service: e,
                                name: "CFDCommissionToggle2"
                            },
                            _widgetRecordProvider: r
                        }))))]
                    })
                },
                _dependencies: [P(o.getshowUnpublishEventFF()), P(o.getisEventFilterEnabledFF()), P(o.getisLanguageSwitcherEnabledFF()), P(a.variables.oAuthAppID2Var), P(a.variables.serverURLVar)]
            }))
        }
    };
g(u, "View");
var y = u,
    K = y;
export {
    K as
    default
};