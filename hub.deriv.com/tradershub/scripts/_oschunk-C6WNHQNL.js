import {
    a as O
} from "./_oschunk-GY22XIW4.js";
import {
    a as R
} from "./_oschunk-5D6SYFW4.js";
import {
    a as T
} from "./_oschunk-MGHWSOGW.js";
import {
    a as C
} from "./_oschunk-6XCUH7KW.js";
import {
    a as E
} from "./_oschunk-R6D7EMWY.js";
import {
    a as w
} from "./_oschunk-UQP5ZIHO.js";
import "./_oschunk-XSPTP7OT.js";
import "./_oschunk-BHZNFATE.js";
import {
    a as F,
    b as D,
    h as c,
    p as L,
    q as _,
    r as A,
    s as f,
    t as b,
    u as S
} from "./_oschunk-WAXNMQCP.js";
import "./_oschunk-LHY3WMNC.js";
import {
    a as k,
    g as V,
    i as y
} from "./_oschunk-J7LCUWB3.js";
import {
    a as W
} from "./_oschunk-UVIEERLQ.js";
import "./_oschunk-ESOYZIPG.js";
import "./_oschunk-XMOR6XCC.js";
import "./_oschunk-H7UK4VZM.js";
import "./_oschunk-JSVFHRDW.js";
import "./_oschunk-LUKJNVXR.js";
import "./_oschunk-X4K3PA43.js";
import "./_oschunk-44PT7RP7.js";
import {
    ia as x
} from "./_oschunk-NTQBNJ73.js";
import {
    c as a,
    g as U
} from "./_oschunk-DVBKI63I.js";
var t = U(k());
var v = x,
    u = y.PlaceholderContent,
    re = y.IteratorPlaceholderContent,
    m = class m extends V.BaseWebScreen {
        static get displayName() {
            return "Common.RecoverPasswordReset"
        }
        static getAttributes() {
            return {
                codeFunction: "RecoverPasswordReset",
                functionKey: "0e04d04c-3857-48b3-b59d-04051d40722c",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.AccountCreation.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [C, w, R, O, E]
        }
        get modelFactory() {
            return W
        }
        get controllerFactory() {
            return T
        }
        get title() {
            let i = this.model,
                o = this.controller,
                e = this.idService,
                l = o.validationService,
                r = o.callContext(),
                P = m.asPrimitiveValue,
                h = m.getTranslation,
                p = this;
            return v.Injector.resolve(v.ServiceNames.TranslationsService).getMessage("TNAEDlc4s0i1nQQFHUByLA#TitleExpression.-787762664.1", "Set a new password")
        }
        internalRender() {
            let i = this.model,
                o = this.controller,
                e = this.idService,
                l = o.validationService,
                r = this.widgetsRecordProvider,
                P = o.callContext(),
                h = m.ifWidget,
                p = m.textWidget,
                s = m.asPrimitiveValue,
                g = m.getTranslation,
                d = this;
            return t.createElement("div", this.getRootNodeProperties(), t.createElement(C, {
                getOwnerSpan: a(function() {
                    return d.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return d.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: a(function(n) {
                        o.handleError(n)
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
                    content: new u(function() {
                        return [t.createElement(c, {
                            align: 0,
                            animate: !1,
                            style: "login-screen",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "1"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(L, {
                            _validationProps: {
                                validationService: l
                            },
                            style: "login-form",
                            _idProps: {
                                service: e,
                                name: "PasswordResetForm"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(c, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "text-align: center;"
                            },
                            style: "login-logo",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "3"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(c, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "text-align: center;"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "4"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(A, {
                            extendedProperties: {
                                alt: "",
                                style: "height: 100px;"
                            },
                            image: v.Navigation.VersionedURL.getVersionedUrl("img/tradershub.Logo.png"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "5"
                            },
                            _widgetRecordProvider: r
                        })), t.createElement(F, {
                            extendedProperties: {
                                className: "margin-top-base text-neutral-8"
                            },
                            tag: "h5",
                            _idProps: {
                                service: e,
                                uuid: "6"
                            },
                            _widgetRecordProvider: r
                        }, p(g("RyWkZ2V37k6kDAl2adJqXw#Value", "Reset password"))), t.createElement(c, {
                            align: 0,
                            animate: !1,
                            style: "margin-top-s",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "7"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(c, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "8"
                            },
                            _widgetRecordProvider: r
                        }, p(g("k4KVmCe6QEaS0B56phl+9g#Value", `If the entered email is correct, we'll send a verification code to that email.
Please enter the code below to verify your identity.
`))))), t.createElement(c, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "9"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(c, {
                            align: 0,
                            animate: !1,
                            style: "login-inputs margin-top-m",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "10"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(w, {
                            getOwnerSpan: a(function() {
                                return d.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: a(function() {
                                return d.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: a(function(n) {
                                    o.handleError(n)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: l,
                                validationParentId: e.getId("PasswordResetForm")
                            },
                            _idProps: {
                                service: e,
                                uuid: "11",
                                alias: "2"
                            },
                            _widgetRecordProvider: r,
                            placeholders: {
                                label: new u(function() {
                                    return [t.createElement(b, {
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        mandatory: !0,
                                        targetWidget: "Input_Email",
                                        _idProps: {
                                            service: e,
                                            uuid: "12"
                                        },
                                        _widgetRecordProvider: r
                                    }, p(g("QL1mqWwGjE2zCHgcaf2iCA#Value", "Email")))]
                                }),
                                input: new u(function() {
                                    return [t.createElement(f, {
                                        _validationProps: {
                                            validationService: l,
                                            validationParentId: e.getId("PasswordResetForm")
                                        },
                                        enabled: !1,
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        inputType: 7,
                                        mandatory: !0,
                                        maxLength: 250,
                                        prompt: "mary.smith@acme.com",
                                        style: "form-control",
                                        variable: i.createVariable(v.DataTypes.DataTypes.Email, i.variables.emailIn, function(n) {
                                            i.variables.emailIn = n
                                        }),
                                        _idProps: {
                                            service: e,
                                            name: "Input_Email"
                                        },
                                        _widgetRecordProvider: r
                                    })]
                                })
                            },
                            _dependencies: [s(i.variables.emailIn)]
                        })), t.createElement(c, {
                            align: 0,
                            animate: !1,
                            style: "login-inputs margin-top-m",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "14"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(w, {
                            getOwnerSpan: a(function() {
                                return d.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: a(function() {
                                return d.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: a(function(n) {
                                    o.handleError(n)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: l,
                                validationParentId: e.getId("PasswordResetForm")
                            },
                            _idProps: {
                                service: e,
                                uuid: "15",
                                alias: "3"
                            },
                            _widgetRecordProvider: r,
                            placeholders: {
                                label: new u(function() {
                                    return [t.createElement(b, {
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        mandatory: !0,
                                        targetWidget: "Input_Code",
                                        _idProps: {
                                            service: e,
                                            uuid: "16"
                                        },
                                        _widgetRecordProvider: r
                                    }, p(g("fyHM5Gx3wkWMLqJccQoLnw#Value", "Verification code")))]
                                }),
                                input: new u(function() {
                                    return [t.createElement(f, {
                                        _validationProps: {
                                            validationService: l,
                                            validationParentId: e.getId("PasswordResetForm")
                                        },
                                        enabled: !0,
                                        extendedProperties: {
                                            tabIndex: "1"
                                        },
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        inputType: 0,
                                        mandatory: !0,
                                        maxLength: 0,
                                        onChange: a(function() {
                                            var n = P.clone();
                                            o.input_CodeOnChange$Action(o.callContext(n))
                                        }, "onChange"),
                                        style: "form-control",
                                        variable: i.createVariable(v.DataTypes.DataTypes.Text, i.variables.verificationCodeIn, function(n) {
                                            i.variables.verificationCodeIn = n
                                        }),
                                        _idProps: {
                                            service: e,
                                            name: "Input_Code"
                                        },
                                        _widgetRecordProvider: r
                                    })]
                                })
                            },
                            _dependencies: [s(i.variables.verificationCodeIn)]
                        })), t.createElement(c, {
                            align: 0,
                            animate: !1,
                            style: "margin-top-base password-input",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "18"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(w, {
                            getOwnerSpan: a(function() {
                                return d.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: a(function() {
                                return d.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: a(function(n) {
                                    o.handleError(n)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: l,
                                validationParentId: e.getId("PasswordResetForm")
                            },
                            _idProps: {
                                service: e,
                                uuid: "19",
                                alias: "4"
                            },
                            _widgetRecordProvider: r,
                            placeholders: {
                                label: new u(function() {
                                    return [t.createElement(b, {
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        mandatory: !0,
                                        targetWidget: "Input_NewPassword",
                                        _idProps: {
                                            service: e,
                                            uuid: "20"
                                        },
                                        _widgetRecordProvider: r
                                    }, p(g("WrZQ2WIh0UejDSX42KwiwA#Value", "New password")))]
                                }),
                                input: new u(function() {
                                    return [t.createElement(R, {
                                        getOwnerSpan: a(function() {
                                            return d.getChildSpan("render")
                                        }, "getOwnerSpan"),
                                        getOwnerDisposeSpan: a(function() {
                                            return d.getChildSpan("destroy")
                                        }, "getOwnerDisposeSpan"),
                                        inputs: {
                                            AlignIconRight: !0
                                        },
                                        events: {
                                            _handleError: a(function(n) {
                                                o.handleError(n)
                                            }, "_handleError")
                                        },
                                        _validationProps: {
                                            validationService: l,
                                            validationParentId: e.getId("PasswordResetForm")
                                        },
                                        _idProps: {
                                            service: e,
                                            uuid: "21",
                                            alias: "5"
                                        },
                                        _widgetRecordProvider: r,
                                        placeholders: {
                                            icon: new u(function() {
                                                return [t.createElement(S, {
                                                    enabled: !0,
                                                    onClick: a(function() {
                                                        var n = P.clone();
                                                        o.onToggleNewPasswordVisibility$Action(o.callContext(n))
                                                    }, "onClick"),
                                                    visible: !0,
                                                    _idProps: {
                                                        service: e,
                                                        uuid: "22"
                                                    },
                                                    _widgetRecordProvider: r
                                                }, h(i.variables.isPasswordVisibleVar, !1, this, function() {
                                                    return [t.createElement(_, {
                                                        icon: "eye-slash",
                                                        iconSize: 0,
                                                        style: "icon",
                                                        visible: !0,
                                                        _idProps: {
                                                            service: e,
                                                            uuid: "23"
                                                        },
                                                        _widgetRecordProvider: r
                                                    })]
                                                }, function() {
                                                    return [t.createElement(_, {
                                                        icon: "eye",
                                                        iconSize: 0,
                                                        style: "icon",
                                                        visible: !0,
                                                        _idProps: {
                                                            service: e,
                                                            uuid: "24"
                                                        },
                                                        _widgetRecordProvider: r
                                                    })]
                                                }))]
                                            }),
                                            input: new u(function() {
                                                return [t.createElement(f, {
                                                    _validationProps: {
                                                        validationService: l,
                                                        validationParentId: e.getId("PasswordResetForm")
                                                    },
                                                    enabled: !0,
                                                    extendedProperties: {
                                                        tabIndex: "2",
                                                        style: "padding-bottom: 0px; padding-left: 0px; padding-right: var(--space-xl); padding-top: 0px;"
                                                    },
                                                    gridProperties: {
                                                        classes: "OSFillParent"
                                                    },
                                                    inputType: 1,
                                                    mandatory: !0,
                                                    maxLength: 256,
                                                    style: "form-control login-password",
                                                    variable: i.createVariable(v.DataTypes.DataTypes.Text, i.variables.newPasswordVar, function(n) {
                                                        i.variables.newPasswordVar = n
                                                    }),
                                                    _idProps: {
                                                        service: e,
                                                        name: "Input_NewPassword"
                                                    },
                                                    _widgetRecordProvider: r
                                                })]
                                            })
                                        },
                                        _dependencies: [s(i.variables.newPasswordVar), s(i.variables.isPasswordVisibleVar)]
                                    })]
                                })
                            },
                            _dependencies: [s(i.variables.newPasswordVar), s(i.variables.isPasswordVisibleVar)]
                        })), t.createElement(O, {
                            getOwnerSpan: a(function() {
                                return d.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: a(function() {
                                return d.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                Password: i.variables.newPasswordVar
                            },
                            events: {
                                _handleError: a(function(n) {
                                    o.handleError(n)
                                }, "_handleError"),
                                compliant$Action: a(function(n) {
                                    var N = P.clone();
                                    o.passwordPolicyCompliant$Action(n, o.callContext(N))
                                }, "compliant$Action")
                            },
                            _validationProps: {
                                validationService: l,
                                validationParentId: e.getId("PasswordResetForm")
                            },
                            _idProps: {
                                service: e,
                                uuid: "26",
                                alias: "6"
                            },
                            _widgetRecordProvider: r,
                            _dependencies: []
                        }), t.createElement(c, {
                            align: 0,
                            animate: !1,
                            style: "margin-top-base password-input",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "27"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(w, {
                            getOwnerSpan: a(function() {
                                return d.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: a(function() {
                                return d.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: a(function(n) {
                                    o.handleError(n)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: l,
                                validationParentId: e.getId("PasswordResetForm")
                            },
                            _idProps: {
                                service: e,
                                uuid: "28",
                                alias: "7"
                            },
                            _widgetRecordProvider: r,
                            placeholders: {
                                label: new u(function() {
                                    return [t.createElement(b, {
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        mandatory: !0,
                                        targetWidget: "Input_ConfirmPassword",
                                        _idProps: {
                                            service: e,
                                            uuid: "29"
                                        },
                                        _widgetRecordProvider: r
                                    }, p(g("D8SnzXdRCEuo2QnLs_vGRw#Value", "Confirm password")))]
                                }),
                                input: new u(function() {
                                    return [t.createElement(R, {
                                        getOwnerSpan: a(function() {
                                            return d.getChildSpan("render")
                                        }, "getOwnerSpan"),
                                        getOwnerDisposeSpan: a(function() {
                                            return d.getChildSpan("destroy")
                                        }, "getOwnerDisposeSpan"),
                                        inputs: {
                                            AlignIconRight: !0
                                        },
                                        events: {
                                            _handleError: a(function(n) {
                                                o.handleError(n)
                                            }, "_handleError")
                                        },
                                        _validationProps: {
                                            validationService: l,
                                            validationParentId: e.getId("PasswordResetForm")
                                        },
                                        _idProps: {
                                            service: e,
                                            uuid: "30",
                                            alias: "8"
                                        },
                                        _widgetRecordProvider: r,
                                        placeholders: {
                                            icon: new u(function() {
                                                return [t.createElement(S, {
                                                    enabled: !0,
                                                    onClick: a(function() {
                                                        var n = P.clone();
                                                        o.onToggleConfirmPasswordVisibility$Action(o.callContext(n))
                                                    }, "onClick"),
                                                    visible: !0,
                                                    _idProps: {
                                                        service: e,
                                                        uuid: "31"
                                                    },
                                                    _widgetRecordProvider: r
                                                }, h(i.variables.isConfirmPasswordVisibleVar, !1, this, function() {
                                                    return [t.createElement(_, {
                                                        icon: "eye-slash",
                                                        iconSize: 0,
                                                        style: "icon",
                                                        visible: !0,
                                                        _idProps: {
                                                            service: e,
                                                            uuid: "32"
                                                        },
                                                        _widgetRecordProvider: r
                                                    })]
                                                }, function() {
                                                    return [t.createElement(_, {
                                                        icon: "eye",
                                                        iconSize: 0,
                                                        style: "icon",
                                                        visible: !0,
                                                        _idProps: {
                                                            service: e,
                                                            uuid: "33"
                                                        },
                                                        _widgetRecordProvider: r
                                                    })]
                                                }))]
                                            }),
                                            input: new u(function() {
                                                return [t.createElement(f, {
                                                    _validationProps: {
                                                        validationService: l,
                                                        validationParentId: e.getId("PasswordResetForm")
                                                    },
                                                    enabled: !0,
                                                    extendedProperties: {
                                                        tabIndex: "3",
                                                        style: "padding-bottom: 0px; padding-left: 0px; padding-right: var(--space-xl); padding-top: 0px;"
                                                    },
                                                    gridProperties: {
                                                        classes: "OSFillParent"
                                                    },
                                                    inputType: 1,
                                                    mandatory: !0,
                                                    maxLength: 256,
                                                    onChange: a(function() {
                                                        var n = P.clone();
                                                        o.input_ConfirmPasswordOnChange$Action(o.callContext(n))
                                                    }, "onChange"),
                                                    style: "form-control login-password",
                                                    variable: i.createVariable(v.DataTypes.DataTypes.Text, i.variables.confirmPasswordVar, function(n) {
                                                        i.variables.confirmPasswordVar = n
                                                    }),
                                                    _idProps: {
                                                        service: e,
                                                        name: "Input_ConfirmPassword"
                                                    },
                                                    _widgetRecordProvider: r
                                                })]
                                            })
                                        },
                                        _dependencies: [s(i.variables.confirmPasswordVar), s(i.variables.isConfirmPasswordVisibleVar)]
                                    })]
                                })
                            },
                            _dependencies: [s(i.variables.confirmPasswordVar), s(i.variables.isConfirmPasswordVisibleVar)]
                        }))), t.createElement(c, {
                            align: 0,
                            animate: !1,
                            style: "login-button margin-top-l",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "35"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(E, {
                            getOwnerSpan: a(function() {
                                return d.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: a(function() {
                                return d.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                ExtendedClass: "full-width",
                                IsLoading: i.variables.isExecutingVar
                            },
                            events: {
                                _handleError: a(function(n) {
                                    o.handleError(n)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: l,
                                validationParentId: e.getId("PasswordResetForm")
                            },
                            _idProps: {
                                service: e,
                                uuid: "36",
                                alias: "9"
                            },
                            _widgetRecordProvider: r,
                            placeholders: {
                                button: new u(function() {
                                    return [t.createElement(D, {
                                        enabled: i.variables.isButtonEnabledVar,
                                        extendedProperties: {
                                            tabIndex: "4"
                                        },
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        isDefault: !0,
                                        onClick: a(function() {
                                            return d.validateWidget(e.getId("PasswordResetForm")), Promise.resolve().then(function() {
                                                var n = P.clone();
                                                return o.savePasswordOnClick$Action(o.callContext(n))
                                            })
                                        }, "onClick"),
                                        style: "btn btn-primary",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "37"
                                        },
                                        _widgetRecordProvider: r
                                    }, t.createElement(c, {
                                        align: 0,
                                        animate: !1,
                                        style: "osui-btn-loading__spinner-animation",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "38"
                                        },
                                        _widgetRecordProvider: r
                                    }), p(g("lDd0coklNEO+7t7X5YyfQA#Value", "Save password")))]
                                })
                            },
                            _dependencies: [s(i.variables.isButtonEnabledVar)]
                        })), t.createElement(c, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "text-align: center;"
                            },
                            style: "margin-top-m",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "39"
                            },
                            _widgetRecordProvider: r
                        }, p(g("U+g_NOruNkeUZxEnphvXbQ#Value", "Not in the right place?")), t.createElement(S, {
                            enabled: !0,
                            extendedProperties: {
                                tabIndex: "5",
                                "aria-label": v.Injector.resolve(v.ServiceNames.TranslationsService).getMessage("mad8_Rbm30avbxZyJLBJ+w#Value.1537763987.1", "Go to login page")
                            },
                            gridProperties: {
                                classes: "ThemeGrid_MarginGutter"
                            },
                            transition: v.Transitions.createTransition(v.Transitions.TransitionAnimation.Default),
                            url: v.Navigation.generateScreenURL("tradershub", "CommonLogin", {}),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "40"
                            },
                            _widgetRecordProvider: r
                        }, p(g("4LDnfyb9g0GaneMelrpuhg#Value", "Go to login."))))))]
                    })
                },
                _dependencies: [s(i.variables.isButtonEnabledVar), s(i.variables.isExecutingVar), s(i.variables.confirmPasswordVar), s(i.variables.isConfirmPasswordVisibleVar), s(i.variables.newPasswordVar), s(i.variables.isPasswordVisibleVar), s(i.variables.verificationCodeIn), s(i.variables.emailIn)]
            }))
        }
    };
a(m, "View");
var I = m,
    ie = I;
export {
    ie as
    default
};