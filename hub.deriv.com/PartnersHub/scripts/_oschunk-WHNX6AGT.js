import {
    a as T
} from "./_oschunk-SJ55A3TS.js";
import {
    a as b
} from "./_oschunk-6WIUA54E.js";
import "./_oschunk-34ZQDKQE.js";
import {
    a as w
} from "./_oschunk-VLCZXY2Y.js";
import "./_oschunk-S4T4FX3G.js";
import "./_oschunk-SELPP7T7.js";
import "./_oschunk-22UUXQ4S.js";
import "./_oschunk-QCCZFQH6.js";
import "./_oschunk-4YFBPYRH.js";
import "./_oschunk-NR4KXK35.js";
import {
    b as g,
    d as c,
    l as O,
    o as P,
    p as f,
    u
} from "./_oschunk-OO36B6PN.js";
import "./_oschunk-7BKGLZMI.js";
import "./_oschunk-6WALBPGV.js";
import {
    a as E,
    g as m,
    i as v
} from "./_oschunk-IL57OEHH.js";
import "./_oschunk-RFCNRBVT.js";
import "./_oschunk-Y3C3IKDF.js";
import "./_oschunk-CMUJJDSY.js";
import "./_oschunk-DW3HXDMW.js";
import "./_oschunk-PNRBOTIK.js";
import "./_oschunk-JXJHSAQS.js";
import {
    ia as y
} from "./_oschunk-5KJVGEL7.js";
import {
    c as o,
    h as C
} from "./_oschunk-QHO7QY6K.js";
var t = C(E());
var W = y,
    h = v.PlaceholderContent,
    N = v.IteratorPlaceholderContent,
    n = class n extends m.BaseWebScreen {
        static get displayName() {
            return "Developer.AmamTestRest"
        }
        static getAttributes() {
            return {
                codeFunction: "AmamTestRest",
                functionKey: "dbcde4a1-1941-4755-aedf-371ddec41526",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/PartnersHub.PHubTest.css", "css/PartnersHub.Developer.AmamTestRest.css", "css/PartnersHub.PHubTest.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [b]
        }
        get modelFactory() {
            return w
        }
        get controllerFactory() {
            return T
        }
        get title() {
            return m.BaseWebScreen.getTranslation("oeTN20EZVUeu3zcd3sQVJg#Title", "AmamTestRest")
        }
        internalRender() {
            let s = this.model,
                a = this.controller,
                e = this.idService,
                p = a.validationService,
                r = this.widgetsRecordProvider,
                R = a.callContext(),
                V = n.ifWidget,
                d = n.textWidget,
                _ = n.asPrimitiveValue,
                l = n.getTranslation,
                x = this;
            return t.createElement("div", this.getRootNodeProperties(), t.createElement(b, {
                getOwnerSpan: o(function() {
                    return x.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return x.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: o(function(i) {
                        a.handleError(i)
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
                    mainContent: new h(function() {
                        return [t.createElement(O, {
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
                        }, t.createElement(u, {
                            extendedProperties: {
                                style: "font-size: 16px; font-weight: bold;"
                            },
                            text: [d(l("HWpQT2_xsE6CBFCvVr23vw#Value", "Change API Endpoint"))],
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
                                uuid: "4"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(f, {
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
                        }, d(l("668BiAtrh0qFEzyWTJVN_w#Value", "Server"))), t.createElement(P, {
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
                            variable: s.createVariable(W.DataTypes.DataTypes.Text, s.variables.serverURLVar, function(i) {
                                s.variables.serverURLVar = i
                            }),
                            _idProps: {
                                service: e,
                                name: "Server"
                            },
                            _widgetRecordProvider: r
                        }), t.createElement(u, {
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
                                uuid: "8"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(f, {
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
                        }, d(l("jidQpjar20yZW+MM7GCMNA#Value", "User token"))), t.createElement(P, {
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
                            prompt: "User token",
                            style: "form-control",
                            variable: s.createVariable(W.DataTypes.DataTypes.Text, s.variables.userTokenVar, function(i) {
                                s.variables.userTokenVar = i
                            }),
                            _idProps: {
                                service: e,
                                name: "OAuthAppID"
                            },
                            _widgetRecordProvider: r
                        })), t.createElement(c, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "align-items: center; display: flex; gap: 16px;"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "11"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(g, {
                            enabled: !0,
                            isDefault: !1,
                            onClick: o(function() {
                                return Promise.resolve().then(function() {
                                    var i = R.clone();
                                    return a.buttonOnClick$Action(a.callContext(i))
                                })
                            }, "onClick"),
                            style: "submit-button",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "12"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(u, {
                            extendedProperties: {
                                style: "color: #fff; font-size: 14px; font-weight: bold;"
                            },
                            text: [d(l("U3Ya9XVpsE6UksqzSCPWsA#Value", "Submit"))],
                            _idProps: {
                                service: e,
                                uuid: "13"
                            },
                            _widgetRecordProvider: r
                        })), t.createElement(g, {
                            enabled: !0,
                            gridProperties: {
                                marginLeft: "0"
                            },
                            isDefault: !1,
                            onClick: o(function() {
                                var i = R.clone();
                                a.resetEndpoint$Action(a.callContext(i))
                            }, "onClick"),
                            style: "reset-button",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "14"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(u, {
                            extendedProperties: {
                                style: "color: #222; font-size: 14px; font-weight: bold;"
                            },
                            text: [d(l("uvD7belHcUSyXMrGZJWW8w#Value", "Reset to original settings"))],
                            _idProps: {
                                service: e,
                                uuid: "15"
                            },
                            _widgetRecordProvider: r
                        })))))]
                    })
                },
                _dependencies: [_(s.variables.userTokenVar), _(s.variables.serverURLVar)]
            }))
        }
    };
o(n, "View");
var S = n,
    J = S;
export {
    J as
    default
};