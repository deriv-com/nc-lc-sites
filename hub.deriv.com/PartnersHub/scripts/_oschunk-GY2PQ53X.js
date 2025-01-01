import {
    a as x
} from "./_oschunk-DAX3AVYJ.js";
import {
    a as b
} from "./_oschunk-6AFKWBZG.js";
import "./_oschunk-N6CDNE7S.js";
import "./_oschunk-WBJVRGUU.js";
import "./_oschunk-MKEU6QPR.js";
import {
    a as D
} from "./_oschunk-MYO2UFA7.js";
import {
    a as F
} from "./_oschunk-EQ2IHWRP.js";
import "./_oschunk-WSNUVXT3.js";
import "./_oschunk-F2QOJGMT.js";
import "./_oschunk-IYRDNBIZ.js";
import {
    a as _
} from "./_oschunk-YOT65SU7.js";
import "./_oschunk-6BFNTJQ7.js";
import "./_oschunk-VDU6C3OQ.js";
import "./_oschunk-TWAMG3Q4.js";
import "./_oschunk-LDY7XNSJ.js";
import {
    b as V,
    d as c,
    m as O,
    n as E,
    o as I,
    q as W,
    u as f
} from "./_oschunk-LWMGEL7F.js";
import "./_oschunk-KWCHY67Z.js";
import "./_oschunk-4GXKK3IG.js";
import {
    a as H,
    g as P,
    i as w
} from "./_oschunk-WZHUAZJP.js";
import "./_oschunk-QPRDDNSX.js";
import "./_oschunk-5VU7DWFQ.js";
import "./_oschunk-RILYVCVH.js";
import {
    a as v
} from "./_oschunk-BDI2RWOA.js";
import "./_oschunk-P3RPGEI5.js";
import "./_oschunk-7WCOCYFU.js";
import {
    ia as R
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as s,
    h as T
} from "./_oschunk-QHO7QY6K.js";
var t = T(H());
var u = R,
    S = w.PlaceholderContent,
    q = w.IteratorPlaceholderContent,
    d = class d extends P.BaseWebScreen {
        static get displayName() {
            return "RealAccountCreationFlow.CFDCommission"
        }
        static getAttributes() {
            return {
                codeFunction: "CFDCommission",
                functionKey: "af57d98b-3886-4cfb-8ce5-cdf0fb3e8572",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/PartnersHub.PHubTest.css", "css/PartnersHub.PHubTest.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [b, _, x]
        }
        get modelFactory() {
            return D
        }
        get controllerFactory() {
            return F
        }
        get title() {
            return P.BaseWebScreen.getTranslation("i9lXr4Y4+0yM5c3w+z6Fcg#Title", "CFDCommission")
        }
        internalRender() {
            let e = this.model,
                a = this.controller,
                r = this.idService,
                p = a.validationService,
                i = this.widgetsRecordProvider,
                y = a.callContext(),
                C = d.ifWidget,
                g = d.textWidget,
                o = d.asPrimitiveValue,
                m = d.getTranslation,
                l = this;
            return t.createElement("div", this.getRootNodeProperties(), t.createElement(b, {
                getOwnerSpan: s(function() {
                    return l.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: s(function() {
                    return l.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: s(function(n) {
                        a.handleError(n)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: p
                },
                _idProps: {
                    service: r,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: i,
                placeholders: {
                    mainContent: new S(function() {
                        return [C(v.getIsDesktop(), !1, this, function() {
                            return [t.createElement(c, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "align-items: flex-start; background: #fff; border-radius: 8px; display: flex; flex-direction: column; gap: 24px; padding: 24px;"
                                },
                                gridProperties: {
                                    classes: "OSInline"
                                },
                                visible: !0,
                                _idProps: {
                                    service: r,
                                    uuid: "1"
                                },
                                _widgetRecordProvider: i
                            }, t.createElement(f, {
                                extendedProperties: {
                                    style: "font-size: 16px; font-weight: bold;"
                                },
                                text: [g(m("w5Et4V_7ekuNEFI541nGmg#Value", "To enable CFDs commission, set up your MT5 password"))],
                                _idProps: {
                                    service: r,
                                    uuid: "2"
                                },
                                _widgetRecordProvider: i
                            }), t.createElement(c, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "gap: 10px;"
                                },
                                style: "password-input",
                                visible: !0,
                                _idProps: {
                                    service: r,
                                    uuid: "3"
                                },
                                _widgetRecordProvider: i
                            }, t.createElement(f, {
                                extendedProperties: {
                                    style: "margin-bottom: 0px; margin-top: 0px;"
                                },
                                text: [g(m("Hb9Gdw4u8Eeak153q49qYA#Value", "Password"))],
                                _idProps: {
                                    service: r,
                                    uuid: "4"
                                },
                                _widgetRecordProvider: i
                            }), t.createElement(_, {
                                getOwnerSpan: s(function() {
                                    return l.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: s(function() {
                                    return l.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    AlignIconRight: !0
                                },
                                events: {
                                    _handleError: s(function(n) {
                                        a.handleError(n)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: p
                                },
                                _idProps: {
                                    service: r,
                                    name: "DesktopPasswordField",
                                    alias: "2"
                                },
                                _widgetRecordProvider: i,
                                placeholders: {
                                    icon: new S(function() {
                                        return [t.createElement(c, {
                                            align: 0,
                                            animate: !1,
                                            extendedProperties: {
                                                style: "z-index: 3;"
                                            },
                                            style: "password-input__icon--right",
                                            visible: !0,
                                            _idProps: {
                                                service: r,
                                                uuid: "6"
                                            },
                                            _widgetRecordProvider: i
                                        }, t.createElement(W, {
                                            enabled: !0,
                                            extendedProperties: {
                                                style: "height: 24px;"
                                            },
                                            gridProperties: {
                                                width: "auto",
                                                marginLeft: "0"
                                            },
                                            onClick: s(function() {
                                                var n = y.clone();
                                                a.onTogglePasswordVisibility$Action(a.callContext(n))
                                            }, "onClick"),
                                            visible: !0,
                                            _idProps: {
                                                service: r,
                                                uuid: "7"
                                            },
                                            _widgetRecordProvider: i
                                        }, C(!e.variables.isPasswordVisibleVar, !1, this, function() {
                                            return [t.createElement(E, {
                                                extendedProperties: {
                                                    style: "height: 24px;"
                                                },
                                                image: u.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.ic_eye.png"),
                                                type: 0,
                                                _idProps: {
                                                    service: r,
                                                    uuid: "8"
                                                },
                                                _widgetRecordProvider: i
                                            })]
                                        }, function() {
                                            return [t.createElement(O, {
                                                icon: "eye",
                                                iconSize: 0,
                                                style: "icon",
                                                visible: !0,
                                                _idProps: {
                                                    service: r,
                                                    uuid: "9"
                                                },
                                                _widgetRecordProvider: i
                                            })]
                                        })))]
                                    }),
                                    input: new S(function() {
                                        return [t.createElement(c, {
                                            align: 0,
                                            animate: !1,
                                            extendedProperties: {
                                                style: "margin-bottom: 0px;"
                                            },
                                            gridProperties: {
                                                classes: "OSInline"
                                            },
                                            style: "",
                                            visible: !0,
                                            _idProps: {
                                                service: r,
                                                uuid: "10"
                                            },
                                            _widgetRecordProvider: i
                                        }, t.createElement(I, {
                                            _validationProps: {
                                                validationService: p
                                            },
                                            enabled: !0,
                                            extendedProperties: {
                                                tabIndex: "2",
                                                autoFocus: "True",
                                                style: "border: 1px solid rgba(0, 0, 0, 0.08); border-radius: 16px; height: 56px; margin-bottom: 0px; padding-bottom: 5px; padding-right: var(--space-xl); padding-top: 5px;"
                                            },
                                            gridProperties: {
                                                width: "430px"
                                            },
                                            inputType: 1,
                                            mandatory: !0,
                                            maxLength: 0,
                                            prompt: u.Injector.resolve(u.ServiceNames.TranslationsService).getMessage("ryfwHuhUXEaeQiOWlRR9vQ#ValueExpression.1281629883.1", "Password"),
                                            style: e.getCachedValue(r.getId("CreatePasswordInput.Style"), function() {
                                                return u.BuiltinFunctions.length(e.variables.passwordVar) === 0 ? "password-input__field" : e.variables.isPasswordValidVar ? "password-input__field password-input__field--success" : "password-input__field password-input__field--failure"
                                            }, function() {
                                                return e.variables.passwordVar
                                            }, function() {
                                                return e.variables.isPasswordValidVar
                                            }),
                                            variable: e.createVariable(u.DataTypes.DataTypes.Text, e.variables.passwordVar, function(n) {
                                                e.variables.passwordVar = n
                                            }),
                                            _idProps: {
                                                service: r,
                                                name: "CreatePasswordInput"
                                            },
                                            _widgetRecordProvider: i
                                        }))]
                                    })
                                },
                                _dependencies: [o(e.variables.isPasswordValidVar), o(e.variables.passwordVar), o(e.variables.isPasswordVisibleVar)]
                            })), t.createElement(x, {
                                getOwnerSpan: s(function() {
                                    return l.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: s(function() {
                                    return l.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    Password: e.variables.passwordVar,
                                    Length: 8
                                },
                                events: {
                                    _handleError: s(function(n) {
                                        a.handleError(n)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: p
                                },
                                _idProps: {
                                    service: r,
                                    uuid: "12",
                                    alias: "3"
                                },
                                _widgetRecordProvider: i,
                                _dependencies: []
                            }), t.createElement(V, {
                                enabled: !0,
                                extendedProperties: {
                                    style: "display: flex; height: 40px;"
                                },
                                gridProperties: {
                                    classes: "ThemeGrid_MarginGutter"
                                },
                                isDefault: !1,
                                onClick: s(function() {
                                    var n = y.clone();
                                    a.primaryButtononClick$Action(a.callContext(n))
                                }, "onClick"),
                                style: "",
                                visible: !0,
                                _idProps: {
                                    service: r,
                                    uuid: "13"
                                },
                                _widgetRecordProvider: i
                            }, g(m("D7GIKBcNckmFNlI5AzX_eg#Value", "Create password"))))]
                        }, function() {
                            return []
                        })]
                    })
                },
                _dependencies: [o(e.variables.isPasswordValidVar), o(e.variables.passwordVar), o(e.variables.isPasswordVisibleVar), o(v.getIsDesktop())]
            }))
        }
    };
s(d, "View");
var h = d,
    Q = h;
export {
    Q as
    default
};