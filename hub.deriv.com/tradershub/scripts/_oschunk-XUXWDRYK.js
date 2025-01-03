import {
    a as W
} from "./_oschunk-ZJFS7533.js";
import {
    a as V
} from "./_oschunk-5OFKU65X.js";
import "./_oschunk-AGISAFBQ.js";
import {
    a as S
} from "./_oschunk-72W6T2YH.js";
import {
    a as h
} from "./_oschunk-5RFODUCB.js";
import "./_oschunk-DMYYSU2E.js";
import "./_oschunk-OW5V4P4X.js";
import "./_oschunk-DNFEHUWC.js";
import {
    a as f
} from "./_oschunk-DOI3HIHZ.js";
import "./_oschunk-BHZNFATE.js";
import {
    b as O,
    h as o,
    p as E,
    r as p,
    s as I,
    u as w,
    y as _
} from "./_oschunk-HUOHOHZB.js";
import "./_oschunk-Y45M2O2K.js";
import {
    a as U,
    g as x,
    i as P
} from "./_oschunk-6LASTRK7.js";
import "./_oschunk-TIJZDWYD.js";
import "./_oschunk-27GDEXUT.js";
import "./_oschunk-D2MH3QEK.js";
import "./_oschunk-WJ75ZXAT.js";
import "./_oschunk-3WNR72F6.js";
import "./_oschunk-X4K3PA43.js";
import "./_oschunk-HQOLQB4T.js";
import {
    ia as C
} from "./_oschunk-NTQBNJ73.js";
import {
    c as s,
    g as L
} from "./_oschunk-DVBKI63I.js";
var t = L(U());
var d = C,
    T = P.PlaceholderContent,
    Z = P.IteratorPlaceholderContent,
    l = class l extends x.BaseWebScreen {
        static get displayName() {
            return "Signup.CreatePassword"
        }
        static getAttributes() {
            return {
                codeFunction: "CreatePassword",
                functionKey: "609944cc-98be-46ba-b99c-ba649bf86e17",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.Signup.CreatePassword.css", "css/tradershub.AccountCreation.extra.css"]
        }
        static getJsDependencies() {
            return ["scripts/tradershub.UserScripts.JSCookie.js"]
        }
        static getBlocks() {
            return [h, S, f]
        }
        get modelFactory() {
            return W
        }
        get controllerFactory() {
            return V
        }
        get title() {
            let i = this.model,
                n = this.controller,
                e = this.idService,
                c = n.validationService,
                r = n.callContext(),
                g = l.asPrimitiveValue,
                y = l.getTranslation,
                m = this;
            return d.Injector.resolve(d.ServiceNames.TranslationsService).getMessage("zESZYL6Yuka5nLpkm_huFw#TitleExpression.-1261959591.1", "Create Password | Deriv")
        }
        internalRender() {
            let i = this.model,
                n = this.controller,
                e = this.idService,
                c = n.validationService,
                r = this.widgetsRecordProvider,
                g = n.callContext(),
                y = l.ifWidget,
                m = l.textWidget,
                v = l.asPrimitiveValue,
                R = l.getTranslation,
                u = this;
            return t.createElement("div", this.getRootNodeProperties(), t.createElement(h, {
                getOwnerSpan: s(function() {
                    return u.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: s(function() {
                    return u.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: s(function(a) {
                        n.handleError(a)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: c
                },
                _idProps: {
                    service: e,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: r,
                placeholders: {
                    mainContent: new T(function() {
                        return [t.createElement(o, {
                            align: 0,
                            animate: !1,
                            style: "main-container",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "1"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(o, {
                            align: 0,
                            animate: !1,
                            style: "deriv-25years-logo-container",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "LeftSideContainer"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(p, {
                            image: d.Navigation.VersionedURL.getVersionedUrl("img/tradershub.deriv25years.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "3"
                            },
                            _widgetRecordProvider: r
                        })), t.createElement(o, {
                            align: 0,
                            animate: !1,
                            gridProperties: {
                                classes: "ThemeGrid_Width11"
                            },
                            style: "password-container",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "RightSideContainer"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(o, {
                            align: 0,
                            animate: !1,
                            style: "content-container",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "5"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(o, {
                            align: 0,
                            animate: !1,
                            style: "back-arrow-container",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "6"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(w, {
                            enabled: !0,
                            extendedProperties: {
                                style: "height: 20px;"
                            },
                            transition: d.Transitions.createTransition(d.Transitions.TransitionAnimation.Default),
                            url: d.Navigation.generateScreenURL("tradershub", "signup/citizenship", {}),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "7"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(p, {
                            extendedProperties: {
                                style: "height: 24px; margin-top: 0px;"
                            },
                            gridProperties: {
                                width: "24px"
                            },
                            image: d.Navigation.VersionedURL.getVersionedUrl("img/tradershub.leftArrow.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "8"
                            },
                            _widgetRecordProvider: r
                        }))), t.createElement(o, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "9"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(o, {
                            align: 0,
                            animate: !1,
                            style: "header-content-container",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "10"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(o, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-right: 16px;"
                            },
                            gridProperties: {
                                marginLeft: "16px"
                            },
                            style: "display-flex align-items-center gap-s",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "11"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(w, {
                            enabled: !0,
                            style: "back-arrow-mobile display-flex",
                            transition: d.Transitions.createTransition(d.Transitions.TransitionAnimation.Default),
                            url: d.Navigation.generateScreenURL("tradershub", "signup/citizenship", {}),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "12"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(p, {
                            extendedProperties: {
                                style: "height: 24px; margin-top: 0px;"
                            },
                            gridProperties: {
                                width: "24px"
                            },
                            image: d.Navigation.VersionedURL.getVersionedUrl("img/tradershub.leftArrow.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "13"
                            },
                            _widgetRecordProvider: r
                        })), t.createElement(_, {
                            extendedProperties: {
                                style: "font-size: 20px; font-weight: bold; margin-left: 0px;"
                            },
                            style: "password-title",
                            text: [m(R("YJKZmdYnkk6t92M0SJoU_g#Value", "Password"))],
                            _idProps: {
                                service: e,
                                uuid: "14"
                            },
                            _widgetRecordProvider: r
                        }))), t.createElement(o, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "color: #F1F3F5; height: 2px; margin-bottom: 12px; margin-top: 12px;"
                            },
                            style: "border-bottom-s divider",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "Divider"
                            },
                            _widgetRecordProvider: r
                        }), t.createElement(o, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-right: 16px;"
                            },
                            gridProperties: {
                                marginLeft: "16px"
                            },
                            style: "display-flex flex-direction-column gap-m",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "ContentContainer"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(E, {
                            _validationProps: {
                                validationService: c
                            },
                            extendedProperties: {
                                style: "border-width: 0px; margin-top: 8px; padding: 0px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: '"form card"',
                            _idProps: {
                                service: e,
                                name: "Form"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(o, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-top: 0px;"
                            },
                            style: i.getCachedValue(e.getId("Oo_E6oDIh0+hYMfdnKKmWA.Style"), function() {
                                return i.widgets.get(e.getId("Input_password")).validAttr ? "" : "margin-bottom-l"
                            }, function() {
                                return i.widgets.get(e.getId("Input_password")).validAttr
                            }),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "18"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(o, {
                            align: 0,
                            animate: !1,
                            style: "position-relative",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "19"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(I, {
                            _validationProps: {
                                validationService: c,
                                validationParentId: e.getId("Form")
                            },
                            enabled: !0,
                            extendedEvents: {
                                onBlur: s(function() {
                                    var a = g.clone();
                                    n.validate$Action(n.callContext(a))
                                }, "onBlur")
                            },
                            extendedProperties: {
                                type: i.getCachedValue(e.getId("Input_password.type"), function() {
                                    return i.variables.showPasswordVar ? "text" : "password"
                                }, function() {
                                    return i.variables.showPasswordVar
                                })
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            inputType: 1,
                            mandatory: !0,
                            maxLength: 50,
                            prompt: "Enter your password",
                            style: i.getCachedValue(e.getId("Input_password.Style"), function() {
                                return i.widgets.get(e.getId("Input_password")).validAttr === !1 ? "form-control input-field-error" : "form-control input-field input-field"
                            }, function() {
                                return i.widgets.get(e.getId("Input_password")).validAttr
                            }),
                            variable: i.createVariable(d.DataTypes.DataTypes.Text, i.variables.passwordVar, function(a) {
                                i.variables.passwordVar = a
                            }),
                            _idProps: {
                                service: e,
                                name: "Input_password"
                            },
                            _widgetRecordProvider: r
                        }), y(i.variables.showPasswordVar, !1, this, function() {
                            return [t.createElement(p, {
                                extendedEvents: {
                                    onClick: s(function() {
                                        var a = g.clone();
                                        n.onClickShowPassword$Action(n.callContext(a))
                                    }, "onClick")
                                },
                                image: d.Navigation.VersionedURL.getVersionedUrl("img/tradershub.eyeunsplash.svg"),
                                style: i.getCachedValue(e.getId("d6TDXpmCeU+W0c1mnu6JnA.Style"), function() {
                                    return i.widgets.get(e.getId("Input_password")).validAttr === !1 ? "position-absolute absolute-center-right eye-image-style-error" : "position-absolute absolute-center-right eye-image-style"
                                }, function() {
                                    return i.widgets.get(e.getId("Input_password")).validAttr
                                }),
                                type: 0,
                                _idProps: {
                                    service: e,
                                    uuid: "21"
                                },
                                _widgetRecordProvider: r
                            })]
                        }, function() {
                            return [t.createElement(p, {
                                extendedEvents: {
                                    onClick: s(function() {
                                        var a = g.clone();
                                        n.onClickShowPassword$Action(n.callContext(a))
                                    }, "onClick")
                                },
                                image: d.Navigation.VersionedURL.getVersionedUrl("img/tradershub.eyeslashsm.svg"),
                                style: i.getCachedValue(e.getId("C3W+6SAd5EiPTMhEB_W9Kw.Style"), function() {
                                    return i.widgets.get(e.getId("Input_password")).validAttr === !1 ? "position-absolute absolute-center-right eye-image-style-error" : "position-absolute absolute-center-right eye-image-style"
                                }, function() {
                                    return i.widgets.get(e.getId("Input_password")).validAttr
                                }),
                                type: 0,
                                _idProps: {
                                    service: e,
                                    uuid: "22"
                                },
                                _widgetRecordProvider: r
                            })]
                        }))), t.createElement(o, {
                            align: 0,
                            animate: !1,
                            gridProperties: {
                                classes: "OSInline",
                                width: "fill"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "23"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(S, {
                            getOwnerSpan: s(function() {
                                return u.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: s(function() {
                                return u.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                Length: 8,
                                Type: "CREATE",
                                Password: i.variables.passwordVar
                            },
                            events: {
                                _handleError: s(function(a) {
                                    n.handleError(a)
                                }, "_handleError"),
                                compliant$Action: s(function(a) {
                                    var A = g.clone();
                                    n.passwordPolicyCompliant$Action(a, n.callContext(A))
                                }, "compliant$Action")
                            },
                            _validationProps: {
                                validationService: c,
                                validationParentId: e.getId("Form")
                            },
                            _idProps: {
                                service: e,
                                uuid: "24",
                                alias: "2"
                            },
                            _widgetRecordProvider: r,
                            _dependencies: []
                        })), t.createElement(o, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-top: 24px;"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "25"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(f, {
                            getOwnerSpan: s(function() {
                                return u.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: s(function() {
                                return u.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                IsLoading: i.variables.isExecutingVar,
                                ExtendedClass: "full-width",
                                ShowLabelOnLoading: !0
                            },
                            events: {
                                _handleError: s(function(a) {
                                    n.handleError(a)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: c,
                                validationParentId: e.getId("Form")
                            },
                            _idProps: {
                                service: e,
                                uuid: "26",
                                alias: "3"
                            },
                            _widgetRecordProvider: r,
                            placeholders: {
                                button: new T(function() {
                                    return [t.createElement(O, {
                                        enabled: !i.variables.isExecutingVar,
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        isDefault: !0,
                                        onClick: s(function() {
                                            return Promise.resolve().then(function() {
                                                var a = g.clone();
                                                return n.createPasswordOnClick$Action(n.callContext(a))
                                            })
                                        }, "onClick"),
                                        style: "btn btn-primary full-width",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "27"
                                        },
                                        _widgetRecordProvider: r
                                    }, t.createElement(o, {
                                        align: 0,
                                        animate: !1,
                                        style: "osui-btn-loading__spinner-animation",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "28"
                                        },
                                        _widgetRecordProvider: r
                                    }), t.createElement(_, {
                                        extendedProperties: {
                                            style: "font-size: 16px;"
                                        },
                                        text: [m(R("4Fz_roe66ka8TosagmeQgg#Value", "Create password"))],
                                        _idProps: {
                                            service: e,
                                            uuid: "29"
                                        },
                                        _widgetRecordProvider: r
                                    }))]
                                })
                            },
                            _dependencies: [v(i.variables.isExecutingVar)]
                        }))))))))]
                    })
                },
                _dependencies: [v(i.variables.isExecutingVar), v(i.variables.showPasswordVar), v(i.variables.passwordVar), v(i.widgets.get(e.getId("Input_password")).validAttr)]
            }))
        }
    };
s(l, "View");
var b = l,
    G = b;
export {
    G as
    default
};