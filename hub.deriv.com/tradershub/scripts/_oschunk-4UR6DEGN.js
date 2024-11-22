import {
    a as k
} from "./_oschunk-VNQBABER.js";
import {
    a as U
} from "./_oschunk-EYV5KBVN.js";
import {
    a as y
} from "./_oschunk-2FL724PB.js";
import {
    a as h
} from "./_oschunk-TTT3OLGZ.js";
import {
    a as O
} from "./_oschunk-DOI3HIHZ.js";
import {
    a as P
} from "./_oschunk-WKHTIXJG.js";
import "./_oschunk-XSPTP7OT.js";
import "./_oschunk-BHZNFATE.js";
import {
    a as V,
    b as W,
    h as d,
    j as L,
    p as F,
    q as b,
    r as T,
    s as w,
    t as f,
    u as R,
    y as D
} from "./_oschunk-HUOHOHZB.js";
import "./_oschunk-Y45M2O2K.js";
import {
    a as N,
    g as I,
    i as S
} from "./_oschunk-6LASTRK7.js";
import "./_oschunk-TIJZDWYD.js";
import "./_oschunk-27GDEXUT.js";
import "./_oschunk-D2MH3QEK.js";
import "./_oschunk-WJ75ZXAT.js";
import "./_oschunk-3WNR72F6.js";
import "./_oschunk-X4K3PA43.js";
import "./_oschunk-HQOLQB4T.js";
import {
    ia as x
} from "./_oschunk-NTQBNJ73.js";
import {
    c as n,
    g as A
} from "./_oschunk-DVBKI63I.js";
var t = A(N());
var u = x,
    v = S.PlaceholderContent,
    ee = S.IteratorPlaceholderContent,
    g = class g extends I.BaseWebScreen {
        static get displayName() {
            return "Common.Login"
        }
        static getAttributes() {
            return {
                codeFunction: "Login",
                functionKey: "aa6a2f48-0824-4f02-bbe3-20b08d067bf1",
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
            return [h, P, y, O]
        }
        get modelFactory() {
            return k
        }
        get controllerFactory() {
            return U
        }
        get title() {
            let i = this.model,
                o = this.controller,
                e = this.idService,
                l = o.validationService,
                r = o.callContext(),
                _ = g.asPrimitiveValue,
                E = g.getTranslation,
                p = this;
            return u.Injector.resolve(u.ServiceNames.TranslationsService).getMessage("SC9qqiQIAk+74yCwjQZ78Q#TitleExpression.-2013538399.1", "Log in")
        }
        internalRender() {
            let i = this.model,
                o = this.controller,
                e = this.idService,
                l = o.validationService,
                r = this.widgetsRecordProvider,
                _ = o.callContext(),
                E = g.ifWidget,
                p = g.textWidget,
                c = g.asPrimitiveValue,
                m = g.getTranslation,
                s = this;
            return t.createElement("div", this.getRootNodeProperties(), t.createElement(h, {
                getOwnerSpan: n(function() {
                    return s.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: n(function() {
                    return s.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: n(function(a) {
                        o.handleError(a)
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
                    content: new v(function() {
                        return [t.createElement(d, {
                            align: 0,
                            animate: !1,
                            style: "login-screen",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "1"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(F, {
                            _validationProps: {
                                validationService: l
                            },
                            style: "login-form",
                            _idProps: {
                                service: e,
                                name: "LoginForm"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(d, {
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
                        }, t.createElement(d, {
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
                        }, t.createElement(T, {
                            extendedProperties: {
                                alt: "",
                                style: "height: 100px;"
                            },
                            image: u.Navigation.VersionedURL.getVersionedUrl("img/tradershub.Logo.png"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "5"
                            },
                            _widgetRecordProvider: r
                        })), t.createElement(V, {
                            extendedProperties: {
                                className: "margin-top-base"
                            },
                            tag: "h1",
                            _idProps: {
                                service: e,
                                uuid: "6"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(L, {
                            style: "heading5 text-neutral-8",
                            value: i.getCachedValue(e.getId("fm5_YjxcK025dT1H7+DVeg.Value"), function() {
                                return u.BuiltinFunctions.getAppName()
                            }),
                            _idProps: {
                                service: e,
                                uuid: "7"
                            },
                            _widgetRecordProvider: r
                        }))), t.createElement(d, {
                            align: 0,
                            animate: !1,
                            style: "login-inputs margin-top-m",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "8"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(d, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "9"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(P, {
                            getOwnerSpan: n(function() {
                                return s.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return s.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: n(function(a) {
                                    o.handleError(a)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: l,
                                validationParentId: e.getId("LoginForm")
                            },
                            _idProps: {
                                service: e,
                                uuid: "10",
                                alias: "2"
                            },
                            _widgetRecordProvider: r,
                            placeholders: {
                                label: new v(function() {
                                    return [t.createElement(f, {
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        mandatory: !0,
                                        targetWidget: "Input_Username",
                                        _idProps: {
                                            service: e,
                                            uuid: "11"
                                        },
                                        _widgetRecordProvider: r
                                    }, p(m("qDK+3S3XYEGiMltItsRr8Q#Value", "Email")))]
                                }),
                                input: new v(function() {
                                    return [t.createElement(w, {
                                        _validationProps: {
                                            validationService: l,
                                            validationParentId: e.getId("LoginForm")
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
                                        maxLength: 250,
                                        style: "form-control",
                                        variable: i.createVariable(u.DataTypes.DataTypes.Text, i.variables.userEmailVar, function(a) {
                                            i.variables.userEmailVar = a
                                        }),
                                        _idProps: {
                                            service: e,
                                            name: "Input_Username"
                                        },
                                        _widgetRecordProvider: r
                                    })]
                                })
                            },
                            _dependencies: [c(i.variables.userEmailVar)]
                        })), t.createElement(d, {
                            align: 0,
                            animate: !1,
                            style: "margin-top-base password-input",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "13"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(P, {
                            getOwnerSpan: n(function() {
                                return s.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return s.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: n(function(a) {
                                    o.handleError(a)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: l,
                                validationParentId: e.getId("LoginForm")
                            },
                            _idProps: {
                                service: e,
                                uuid: "14",
                                alias: "3"
                            },
                            _widgetRecordProvider: r,
                            placeholders: {
                                label: new v(function() {
                                    return [t.createElement(f, {
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        mandatory: !0,
                                        targetWidget: "Input_Password",
                                        _idProps: {
                                            service: e,
                                            uuid: "15"
                                        },
                                        _widgetRecordProvider: r
                                    }, p(m("yCHbK0e2FkGfIimm0zgofw#Value", "Password")))]
                                }),
                                input: new v(function() {
                                    return [t.createElement(y, {
                                        getOwnerSpan: n(function() {
                                            return s.getChildSpan("render")
                                        }, "getOwnerSpan"),
                                        getOwnerDisposeSpan: n(function() {
                                            return s.getChildSpan("destroy")
                                        }, "getOwnerDisposeSpan"),
                                        inputs: {
                                            AlignIconRight: !0
                                        },
                                        events: {
                                            _handleError: n(function(a) {
                                                o.handleError(a)
                                            }, "_handleError")
                                        },
                                        _validationProps: {
                                            validationService: l,
                                            validationParentId: e.getId("LoginForm")
                                        },
                                        _idProps: {
                                            service: e,
                                            uuid: "16",
                                            alias: "4"
                                        },
                                        _widgetRecordProvider: r,
                                        placeholders: {
                                            icon: new v(function() {
                                                return [t.createElement(R, {
                                                    enabled: !0,
                                                    onClick: n(function() {
                                                        var a = _.clone();
                                                        o.onTogglePasswordVisibility$Action(o.callContext(a))
                                                    }, "onClick"),
                                                    visible: !0,
                                                    _idProps: {
                                                        service: e,
                                                        uuid: "17"
                                                    },
                                                    _widgetRecordProvider: r
                                                }, E(i.variables.isPasswordVisibleVar, !1, this, function() {
                                                    return [t.createElement(b, {
                                                        icon: "eye-slash",
                                                        iconSize: 0,
                                                        style: "icon",
                                                        visible: !0,
                                                        _idProps: {
                                                            service: e,
                                                            uuid: "18"
                                                        },
                                                        _widgetRecordProvider: r
                                                    })]
                                                }, function() {
                                                    return [t.createElement(b, {
                                                        icon: "eye",
                                                        iconSize: 0,
                                                        style: "icon",
                                                        visible: !0,
                                                        _idProps: {
                                                            service: e,
                                                            uuid: "19"
                                                        },
                                                        _widgetRecordProvider: r
                                                    })]
                                                }))]
                                            }),
                                            input: new v(function() {
                                                return [t.createElement(w, {
                                                    _validationProps: {
                                                        validationService: l,
                                                        validationParentId: e.getId("LoginForm")
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
                                                    maxLength: 0,
                                                    style: "form-control login-password",
                                                    variable: i.createVariable(u.DataTypes.DataTypes.Text, i.variables.passwordVar, function(a) {
                                                        i.variables.passwordVar = a
                                                    }),
                                                    _idProps: {
                                                        service: e,
                                                        name: "Input_Password"
                                                    },
                                                    _widgetRecordProvider: r
                                                })]
                                            })
                                        },
                                        _dependencies: [c(i.variables.passwordVar), c(i.variables.isPasswordVisibleVar)]
                                    })]
                                })
                            },
                            _dependencies: [c(i.variables.passwordVar), c(i.variables.isPasswordVisibleVar)]
                        })), t.createElement(d, {
                            align: 0,
                            animate: !1,
                            style: "margin-top-l",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "21"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(d, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "text-align: right;"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "22"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(R, {
                            enabled: !0,
                            extendedProperties: {
                                tabIndex: "3",
                                "aria-label": "Forgot password? Click here to recover it"
                            },
                            transition: u.Transitions.createTransition(u.Transitions.TransitionAnimation.Default),
                            url: u.Navigation.generateScreenURL("tradershub", "RecoverPasswordRequest", {}),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "23"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(D, {
                            extendedProperties: {
                                "aria-label": "Forgot your password? Click here to recover it"
                            },
                            text: [p(m("ZqnTDiKdrk22FX5AJbVIvw#Value", "Forgot your password?"))],
                            _idProps: {
                                service: e,
                                uuid: "24"
                            },
                            _widgetRecordProvider: r
                        }))))), t.createElement(d, {
                            align: 0,
                            animate: !1,
                            style: "login-button margin-top-l",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "25"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(O, {
                            getOwnerSpan: n(function() {
                                return s.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return s.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                ExtendedClass: "full-width",
                                IsLoading: i.variables.isExecutingVar,
                                ShowLabelOnLoading: !0
                            },
                            events: {
                                _handleError: n(function(a) {
                                    o.handleError(a)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: l,
                                validationParentId: e.getId("LoginForm")
                            },
                            _idProps: {
                                service: e,
                                uuid: "26",
                                alias: "5"
                            },
                            _widgetRecordProvider: r,
                            placeholders: {
                                button: new v(function() {
                                    return [t.createElement(W, {
                                        enabled: !0,
                                        extendedProperties: {
                                            tabIndex: "4"
                                        },
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        isDefault: !0,
                                        onClick: n(function() {
                                            return s.validateWidget(e.getId("LoginForm")), Promise.resolve().then(function() {
                                                var a = _.clone();
                                                return o.loginOnClick$Action(o.callContext(a))
                                            })
                                        }, "onClick"),
                                        style: "btn btn-primary",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "27"
                                        },
                                        _widgetRecordProvider: r
                                    }, t.createElement(d, {
                                        align: 0,
                                        animate: !1,
                                        style: "osui-btn-loading__spinner-animation",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "28"
                                        },
                                        _widgetRecordProvider: r
                                    }), p(m("p_KjAUhTxkykorMMZGMrOg#Value", "Log in")))]
                                })
                            },
                            _dependencies: []
                        }))))]
                    })
                },
                _dependencies: [c(i.variables.isExecutingVar), c(i.variables.passwordVar), c(i.variables.isPasswordVisibleVar), c(i.variables.userEmailVar)]
            }))
        }
    };
n(g, "View");
var C = g,
    te = C;
export {
    te as
    default
};