import {
    a as _
} from "./_oschunk-TTT3OLGZ.js";
import {
    a as R
} from "./_oschunk-DOI3HIHZ.js";
import {
    a as S
} from "./_oschunk-WKHTIXJG.js";
import "./_oschunk-XSPTP7OT.js";
import "./_oschunk-BHZNFATE.js";
import {
    a as O,
    b as C,
    h as a,
    p as y,
    r as E,
    s as x,
    t as W,
    u as V
} from "./_oschunk-HUOHOHZB.js";
import {
    a as I
} from "./_oschunk-YE36UAON.js";
import {
    a as L
} from "./_oschunk-FPO5XLQE.js";
import "./_oschunk-Y45M2O2K.js";
import {
    a as F,
    g as f,
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
    ia as h
} from "./_oschunk-NTQBNJ73.js";
import {
    c as i,
    g as A
} from "./_oschunk-DVBKI63I.js";
var t = A(F());
var u = h,
    m = P.PlaceholderContent,
    j = P.IteratorPlaceholderContent,
    s = class s extends f.BaseWebScreen {
        static get displayName() {
            return "Common.RecoverPasswordRequest"
        }
        static getAttributes() {
            return {
                codeFunction: "RecoverPasswordRequest",
                functionKey: "3fea9ba6-0c6b-4fe7-ab2e-65022a9839c0",
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
            return [_, S, R]
        }
        get modelFactory() {
            return I
        }
        get controllerFactory() {
            return L
        }
        get title() {
            let d = this.model,
                n = this.controller,
                e = this.idService,
                g = n.validationService,
                r = n.callContext(),
                b = s.asPrimitiveValue,
                T = s.getTranslation,
                l = this;
            return u.Injector.resolve(u.ServiceNames.TranslationsService).getMessage("ppvqP2sM50+rLmUCKpg5wA#TitleExpression.1539801591.1", "Recover password")
        }
        internalRender() {
            let d = this.model,
                n = this.controller,
                e = this.idService,
                g = n.validationService,
                r = this.widgetsRecordProvider,
                b = n.callContext(),
                T = s.ifWidget,
                l = s.textWidget,
                p = s.asPrimitiveValue,
                v = s.getTranslation,
                c = this;
            return t.createElement("div", this.getRootNodeProperties(), t.createElement(_, {
                getOwnerSpan: i(function() {
                    return c.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: i(function() {
                    return c.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: i(function(o) {
                        n.handleError(o)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: g
                },
                _idProps: {
                    service: e,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: r,
                placeholders: {
                    content: new m(function() {
                        return [t.createElement(a, {
                            align: 0,
                            animate: !1,
                            style: "login-screen",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "1"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(y, {
                            _validationProps: {
                                validationService: g
                            },
                            style: "login-form",
                            _idProps: {
                                service: e,
                                name: "RecoverPasswordForm"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(a, {
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
                        }, t.createElement(a, {
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
                        }, t.createElement(E, {
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
                        })), t.createElement(O, {
                            extendedProperties: {
                                className: "margin-top-base text-neutral-8"
                            },
                            tag: "h5",
                            _idProps: {
                                service: e,
                                uuid: "6"
                            },
                            _widgetRecordProvider: r
                        }, l(v("YkmG5_QATkSEW2787SKgvg#Value", "Forgot your password?"))), t.createElement(a, {
                            align: 0,
                            animate: !1,
                            style: "margin-top-s",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "7"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(a, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "8"
                            },
                            _widgetRecordProvider: r
                        }, l(v("70mE3canp0eMGAjJbbLBUg#Value", "Don't worry, we'll send you an email with instructions."))))), t.createElement(a, {
                            align: 0,
                            animate: !1,
                            style: "login-inputs margin-top-m",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "9"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(S, {
                            getOwnerSpan: i(function() {
                                return c.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: i(function() {
                                return c.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: i(function(o) {
                                    n.handleError(o)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: g,
                                validationParentId: e.getId("RecoverPasswordForm")
                            },
                            _idProps: {
                                service: e,
                                uuid: "10",
                                alias: "2"
                            },
                            _widgetRecordProvider: r,
                            placeholders: {
                                label: new m(function() {
                                    return [t.createElement(W, {
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        mandatory: !0,
                                        targetWidget: "Input_Email",
                                        _idProps: {
                                            service: e,
                                            uuid: "11"
                                        },
                                        _widgetRecordProvider: r
                                    }, l(v("9KAkoQwQdUqTW+OsCHiWkA#Value", "Email")))]
                                }),
                                input: new m(function() {
                                    return [t.createElement(x, {
                                        _validationProps: {
                                            validationService: g,
                                            validationParentId: e.getId("RecoverPasswordForm")
                                        },
                                        enabled: !0,
                                        extendedProperties: {
                                            tabIndex: "1"
                                        },
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        inputType: 7,
                                        mandatory: !0,
                                        maxLength: 250,
                                        style: "form-control",
                                        variable: d.createVariable(u.DataTypes.DataTypes.Email, d.variables.emailVar, function(o) {
                                            d.variables.emailVar = o
                                        }),
                                        _idProps: {
                                            service: e,
                                            name: "Input_Email"
                                        },
                                        _widgetRecordProvider: r
                                    })]
                                })
                            },
                            _dependencies: [p(d.variables.emailVar)]
                        })), t.createElement(a, {
                            align: 0,
                            animate: !1,
                            style: "login-button margin-top-l",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "13"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(R, {
                            getOwnerSpan: i(function() {
                                return c.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: i(function() {
                                return c.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                ExtendedClass: "full-width",
                                IsLoading: d.variables.isExecutingVar
                            },
                            events: {
                                _handleError: i(function(o) {
                                    n.handleError(o)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: g,
                                validationParentId: e.getId("RecoverPasswordForm")
                            },
                            _idProps: {
                                service: e,
                                uuid: "14",
                                alias: "3"
                            },
                            _widgetRecordProvider: r,
                            placeholders: {
                                button: new m(function() {
                                    return [t.createElement(C, {
                                        enabled: !0,
                                        extendedProperties: {
                                            tabIndex: "2"
                                        },
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        isDefault: !0,
                                        onClick: i(function() {
                                            return c.validateWidget(e.getId("RecoverPasswordForm")), Promise.resolve().then(function() {
                                                var o = b.clone();
                                                return n.resetPasswordOnClick$Action(n.callContext(o))
                                            })
                                        }, "onClick"),
                                        style: "btn btn-primary",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "15"
                                        },
                                        _widgetRecordProvider: r
                                    }, t.createElement(a, {
                                        align: 0,
                                        animate: !1,
                                        style: "osui-btn-loading__spinner-animation",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "16"
                                        },
                                        _widgetRecordProvider: r
                                    }), l(v("g2hmwzo5HUW5So+cLVujgw#Value", "Reset password")))]
                                })
                            },
                            _dependencies: []
                        })), t.createElement(a, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "text-align: center;"
                            },
                            style: "margin-top-m",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "17"
                            },
                            _widgetRecordProvider: r
                        }, l(v("SSZdvN4LY0mknFVm_QDoDA#Value", "Not in the right place?")), t.createElement(V, {
                            enabled: !0,
                            extendedProperties: {
                                tabIndex: "3",
                                "aria-label": "Go to login page"
                            },
                            gridProperties: {
                                classes: "ThemeGrid_MarginGutter"
                            },
                            transition: u.Transitions.createTransition(u.Transitions.TransitionAnimation.Default),
                            url: u.Navigation.generateScreenURL("tradershub", "CommonLogin", {}),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "18"
                            },
                            _widgetRecordProvider: r
                        }, l(v("3cAzE2Oh9ECwxvvUAuXtsg#Value", "Go to login."))))))]
                    })
                },
                _dependencies: [p(d.variables.isExecutingVar), p(d.variables.emailVar)]
            }))
        }
    };
i(s, "View");
var w = s,
    $ = w;
export {
    $ as
    default
};