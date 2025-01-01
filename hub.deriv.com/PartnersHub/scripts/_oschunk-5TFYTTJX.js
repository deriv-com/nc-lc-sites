import {
    a as C
} from "./_oschunk-GMD42G54.js";
import {
    a as F
} from "./_oschunk-67Y6AKKJ.js";
import "./_oschunk-NPJTP2VQ.js";
import {
    a as E
} from "./_oschunk-7UFMUAAC.js";
import "./_oschunk-P4MP6R5V.js";
import {
    a as b
} from "./_oschunk-GEKR2PWI.js";
import "./_oschunk-N5HEACS4.js";
import {
    a as S
} from "./_oschunk-DD6SH73A.js";
import "./_oschunk-F2QOJGMT.js";
import "./_oschunk-HQNDBRSO.js";
import "./_oschunk-IYRDNBIZ.js";
import "./_oschunk-TWAMG3Q4.js";
import "./_oschunk-LDY7XNSJ.js";
import {
    b as w,
    d,
    l as x,
    o as y,
    p as _,
    u as g
} from "./_oschunk-LWMGEL7F.js";
import "./_oschunk-KWCHY67Z.js";
import "./_oschunk-4GXKK3IG.js";
import {
    a as T,
    g as v,
    i as f
} from "./_oschunk-WZHUAZJP.js";
import "./_oschunk-RILYVCVH.js";
import "./_oschunk-BDI2RWOA.js";
import "./_oschunk-P3RPGEI5.js";
import "./_oschunk-7WCOCYFU.js";
import {
    ia as O
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as o,
    h as V
} from "./_oschunk-QHO7QY6K.js";
var t = V(T());
var W = O,
    m = f.PlaceholderContent,
    J = f.IteratorPlaceholderContent,
    p = class p extends v.BaseWebScreen {
        static get displayName() {
            return "ForgotPassword.ForgotPassword"
        }
        static getAttributes() {
            return {
                codeFunction: "ForgotPassword",
                functionKey: "bb171220-c824-47ef-90f5-daf3f0e40dd8",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/PartnersHub.PHubTest.css", "css/PartnersHub.ForgotPassword.ForgotPassword.css", "css/PartnersHub.PHubTest.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [E, S, b]
        }
        get modelFactory() {
            return C
        }
        get controllerFactory() {
            return F
        }
        get title() {
            return v.BaseWebScreen.getTranslation("IBIXuyTI70eQ9drz8OQN2A#Title", "ForgotPassword")
        }
        internalRender() {
            let s = this.model,
                a = this.controller,
                e = this.idService,
                l = a.validationService,
                r = this.widgetsRecordProvider,
                h = a.callContext(),
                I = p.ifWidget,
                c = p.textWidget,
                P = p.asPrimitiveValue,
                u = p.getTranslation,
                n = this;
            return t.createElement("div", this.getRootNodeProperties(), t.createElement(E, {
                getOwnerSpan: o(function() {
                    return n.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return n.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: o(function(i) {
                        a.handleError(i)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: l
                },
                _idProps: {
                    service: e,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: r,
                placeholders: {
                    mainContent: new m(function() {
                        return [t.createElement(S, {
                            getOwnerSpan: o(function() {
                                return n.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return n.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: o(function(i) {
                                    a.handleError(i)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: l
                            },
                            _idProps: {
                                service: e,
                                uuid: "1",
                                alias: "2"
                            },
                            _widgetRecordProvider: r,
                            placeholders: {
                                desktopContent: new m(function() {
                                    return [t.createElement(d, {
                                        align: 0,
                                        animate: !1,
                                        extendedProperties: {
                                            style: "background-color: #ffffff;"
                                        },
                                        style: "login-screen",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "2"
                                        },
                                        _widgetRecordProvider: r
                                    }, t.createElement(d, {
                                        align: 0,
                                        animate: !1,
                                        extendedProperties: {
                                            style: "border: 1px solid #dee2e6; border-radius: 8px; margin-top: 0px;"
                                        },
                                        gridProperties: {
                                            classes: "OSInline",
                                            width: "420px"
                                        },
                                        style: "signup",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "3"
                                        },
                                        _widgetRecordProvider: r
                                    }, t.createElement(x, {
                                        _validationProps: {
                                            validationService: l
                                        },
                                        extendedProperties: {
                                            style: "background-color: #fff; border-width: 0px;"
                                        },
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        style: "form card",
                                        _idProps: {
                                            service: e,
                                            name: "ResetPasswordEmailForm"
                                        },
                                        _widgetRecordProvider: r
                                    }, t.createElement(d, {
                                        align: 0,
                                        animate: !1,
                                        extendedProperties: {
                                            style: "display: flex; flex-direction: column;"
                                        },
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "5"
                                        },
                                        _widgetRecordProvider: r
                                    }, t.createElement(d, {
                                        align: 0,
                                        animate: !1,
                                        extendedProperties: {
                                            style: "align-items: center; display: flex;"
                                        },
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "6"
                                        },
                                        _widgetRecordProvider: r
                                    }, t.createElement(g, {
                                        extendedProperties: {
                                            style: "color: #333; font-size: 24px; font-style: normal; font-weight: 700; line-height: normal;"
                                        },
                                        text: [c(u("YDh0MyyAak+VvW7qL38MXw#Value", "Forgot password"))],
                                        _idProps: {
                                            service: e,
                                            uuid: "7"
                                        },
                                        _widgetRecordProvider: r
                                    })), t.createElement(g, {
                                        extendedProperties: {
                                            style: "color: #333; font-size: 14px; font-style: normal; font-weight: 400; line-height: 24px; margin-top: 16px;"
                                        },
                                        text: [c(u("rLgXlSTML0WrzZUE8llzYg#Value", "We\u2019ll email you instructions to reset your password."))],
                                        _idProps: {
                                            service: e,
                                            uuid: "8"
                                        },
                                        _widgetRecordProvider: r
                                    })), t.createElement(_, {
                                        extendedProperties: {
                                            style: "margin-top: 24px;"
                                        },
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        _idProps: {
                                            service: e,
                                            uuid: "9"
                                        },
                                        _widgetRecordProvider: r
                                    }, t.createElement(g, {
                                        extendedProperties: {
                                            style: "color: #4F575E; font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px; margin-top: 0px;"
                                        },
                                        text: [c(u("5zG3vVwLSUmzxK8J2_EDJQ#Value", "Email"))],
                                        _idProps: {
                                            service: e,
                                            uuid: "10"
                                        },
                                        _widgetRecordProvider: r
                                    })), t.createElement(y, {
                                        _validationProps: {
                                            validationService: l,
                                            validationParentId: e.getId("ResetPasswordEmailForm")
                                        },
                                        enabled: !0,
                                        extendedProperties: {
                                            style: "border-radius: 8px; height: 48px;"
                                        },
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        inputType: 7,
                                        mandatory: !0,
                                        maxLength: 50,
                                        prompt: "Enter your email",
                                        style: "form-control",
                                        variable: s.createVariable(W.DataTypes.DataTypes.Email, s.variables.forgotPasswordEmailVar, function(i) {
                                            s.variables.forgotPasswordEmailVar = i
                                        }),
                                        _idProps: {
                                            service: e,
                                            name: "EmailInput"
                                        },
                                        _widgetRecordProvider: r
                                    }), t.createElement(w, {
                                        enabled: !0,
                                        extendedProperties: {
                                            style: "border-radius: 100px; height: 48px;"
                                        },
                                        gridProperties: {
                                            width: "100%"
                                        },
                                        isDefault: !0,
                                        onClick: o(function() {
                                            return n.validateWidget(e.getId("ResetPasswordEmailForm")), Promise.resolve().then(function() {
                                                var i = h.clone();
                                                return a.sendEmailEvent$Action(a.callContext(i))
                                            })
                                        }, "onClick"),
                                        style: "btn btn-primary",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "12"
                                        },
                                        _widgetRecordProvider: r
                                    }, c(u("vX58_Fqy6UG10yQ9Z1cm7w#Value", "Send email"))))))]
                                }),
                                tabletContent: m.Empty,
                                mobileContent: new m(function() {
                                    return [t.createElement(b, {
                                        getOwnerSpan: o(function() {
                                            return n.getChildSpan("render")
                                        }, "getOwnerSpan"),
                                        getOwnerDisposeSpan: o(function() {
                                            return n.getChildSpan("destroy")
                                        }, "getOwnerDisposeSpan"),
                                        inputs: {
                                            HasBackButton: !1,
                                            Title: "Forgot password",
                                            HasCloseIcon: !1
                                        },
                                        events: {
                                            _handleError: o(function(i) {
                                                a.handleError(i)
                                            }, "_handleError")
                                        },
                                        _validationProps: {
                                            validationService: l
                                        },
                                        _idProps: {
                                            service: e,
                                            uuid: "13",
                                            alias: "3"
                                        },
                                        _widgetRecordProvider: r,
                                        placeholders: {
                                            content: new m(function() {
                                                return [t.createElement(d, {
                                                    align: 0,
                                                    animate: !1,
                                                    extendedProperties: {
                                                        style: "display: flex; justify-content: center;"
                                                    },
                                                    visible: !0,
                                                    _idProps: {
                                                        service: e,
                                                        uuid: "14"
                                                    },
                                                    _widgetRecordProvider: r
                                                }, t.createElement(d, {
                                                    align: 0,
                                                    animate: !1,
                                                    extendedProperties: {
                                                        style: "background-color: #fff; border-color: #fff; border-radius: 8px; margin-top: 0px;"
                                                    },
                                                    gridProperties: {
                                                        classes: "OSInline",
                                                        width: "100%"
                                                    },
                                                    style: "signup",
                                                    visible: !0,
                                                    _idProps: {
                                                        service: e,
                                                        uuid: "15"
                                                    },
                                                    _widgetRecordProvider: r
                                                }, t.createElement(x, {
                                                    _validationProps: {
                                                        validationService: l
                                                    },
                                                    extendedProperties: {
                                                        style: "background-color: #fff; border-width: 0px;"
                                                    },
                                                    gridProperties: {
                                                        classes: "OSFillParent"
                                                    },
                                                    style: "form card",
                                                    _idProps: {
                                                        service: e,
                                                        name: "ResetPasswordEmailForm2"
                                                    },
                                                    _widgetRecordProvider: r
                                                }, t.createElement(d, {
                                                    align: 0,
                                                    animate: !1,
                                                    extendedProperties: {
                                                        style: "display: flex; flex-direction: column;"
                                                    },
                                                    visible: !0,
                                                    _idProps: {
                                                        service: e,
                                                        uuid: "17"
                                                    },
                                                    _widgetRecordProvider: r
                                                }, t.createElement(g, {
                                                    extendedProperties: {
                                                        style: "color: #333; font-size: 14px; font-style: normal; font-weight: 400; line-height: 24px;"
                                                    },
                                                    text: [c(u("FWCTvECwVEi6umdPrnYO+g#Value", "We\u2019ll email you instructions to reset your password."))],
                                                    _idProps: {
                                                        service: e,
                                                        uuid: "18"
                                                    },
                                                    _widgetRecordProvider: r
                                                })), t.createElement(_, {
                                                    extendedProperties: {
                                                        style: "margin-top: 24px;"
                                                    },
                                                    gridProperties: {
                                                        classes: "OSFillParent"
                                                    },
                                                    _idProps: {
                                                        service: e,
                                                        uuid: "19"
                                                    },
                                                    _widgetRecordProvider: r
                                                }, t.createElement(g, {
                                                    extendedProperties: {
                                                        style: "color: #4F575E; font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px; margin-top: 0px;"
                                                    },
                                                    text: [c(u("sXKPoLUybE2FHFmsCMZ4yg#Value", "Email"))],
                                                    _idProps: {
                                                        service: e,
                                                        uuid: "20"
                                                    },
                                                    _widgetRecordProvider: r
                                                })), t.createElement(y, {
                                                    _validationProps: {
                                                        validationService: l,
                                                        validationParentId: e.getId("ResetPasswordEmailForm2")
                                                    },
                                                    enabled: !0,
                                                    gridProperties: {
                                                        classes: "OSFillParent"
                                                    },
                                                    inputType: 7,
                                                    mandatory: !0,
                                                    maxLength: 50,
                                                    prompt: "Enter your email",
                                                    style: "form-control",
                                                    variable: s.createVariable(W.DataTypes.DataTypes.Email, s.variables.forgotPasswordEmailVar, function(i) {
                                                        s.variables.forgotPasswordEmailVar = i
                                                    }),
                                                    _idProps: {
                                                        service: e,
                                                        name: "EmailinputMobile"
                                                    },
                                                    _widgetRecordProvider: r
                                                }), t.createElement(w, {
                                                    enabled: !0,
                                                    extendedProperties: {
                                                        style: "border-radius: 100px; height: 40px;"
                                                    },
                                                    isDefault: !0,
                                                    onClick: o(function() {
                                                        return n.validateWidget(e.getId("ResetPasswordEmailForm2")), Promise.resolve().then(function() {
                                                            var i = h.clone();
                                                            return a.sendEmailEvent$Action(a.callContext(i))
                                                        })
                                                    }, "onClick"),
                                                    style: "btn btn-primary full-width",
                                                    visible: !0,
                                                    _idProps: {
                                                        service: e,
                                                        uuid: "22"
                                                    },
                                                    _widgetRecordProvider: r
                                                }, c(u("0B5RuWgJTUiealfNUe3R0A#Value", "Send email"))))))]
                                            })
                                        },
                                        _dependencies: [P(s.variables.forgotPasswordEmailVar)]
                                    })]
                                })
                            },
                            _dependencies: [P(s.variables.forgotPasswordEmailVar)]
                        })]
                    })
                },
                _dependencies: [P(s.variables.forgotPasswordEmailVar)]
            }))
        }
    };
o(p, "View");
var R = p,
    K = R;
export {
    K as
    default
};