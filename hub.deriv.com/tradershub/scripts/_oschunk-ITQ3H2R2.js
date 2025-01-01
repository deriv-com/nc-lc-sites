import {
    a as I
} from "./_oschunk-IH4NZPL7.js";
import {
    a as T
} from "./_oschunk-A6RIYCRW.js";
import {
    a as R
} from "./_oschunk-ALAP5CBN.js";
import "./_oschunk-QVXOCHAU.js";
import {
    a as _
} from "./_oschunk-OQ7YPNNN.js";
import "./_oschunk-VK5GKM6S.js";
import {
    a as S
} from "./_oschunk-KAPVGQYZ.js";
import "./_oschunk-EROCOLS7.js";
import {
    a as O,
    b as C,
    h as n,
    p as y,
    r as E,
    s as x,
    t as W,
    u as V
} from "./_oschunk-42NACYKQ.js";
import "./_oschunk-2M7PXTSQ.js";
import {
    a as F,
    g as f,
    i as P
} from "./_oschunk-RKYF3TWC.js";
import "./_oschunk-K7AFM7ZW.js";
import "./_oschunk-DOFMR6EA.js";
import "./_oschunk-2ZI4JQLD.js";
import "./_oschunk-IKZJT3AP.js";
import "./_oschunk-X4K3PA43.js";
import "./_oschunk-MSUVGI3L.js";
import {
    ia as h
} from "./_oschunk-2JKANR6M.js";
import {
    c as i,
    g as A
} from "./_oschunk-DVBKI63I.js";
var t = A(F());
var s = h,
    m = P.PlaceholderContent,
    H = P.IteratorPlaceholderContent,
    d = class d extends f.BaseWebScreen {
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
            return T
        }
        get title() {
            let l = this.model,
                a = this.controller,
                e = this.idService,
                g = a.validationService,
                r = a.callContext(),
                b = d.asPrimitiveValue,
                L = d.getTranslation,
                c = this;
            return s.Injector.resolve(s.ServiceNames.TranslationsService).getMessage("ppvqP2sM50+rLmUCKpg5wA#TitleExpression.1539801591.1", "Recover password")
        }
        internalRender() {
            let l = this.model,
                a = this.controller,
                e = this.idService,
                g = a.validationService,
                r = this.widgetsRecordProvider,
                b = a.callContext(),
                L = d.ifWidget,
                c = d.textWidget,
                p = d.asPrimitiveValue,
                v = d.getTranslation,
                u = this;
            return t.createElement("div", this.getRootNodeProperties(), t.createElement(_, {
                getOwnerSpan: i(function() {
                    return u.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: i(function() {
                    return u.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: i(function(o) {
                        a.handleError(o)
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
                        return [t.createElement(n, {
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
                        }, t.createElement(n, {
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
                        }, t.createElement(n, {
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
                            image: s.Navigation.VersionedURL.getVersionedUrl("img/tradershub.Logo.png"),
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
                        }, c(v("YkmG5_QATkSEW2787SKgvg#Value", "Forgot your password?"))), t.createElement(n, {
                            align: 0,
                            animate: !1,
                            style: "margin-top-s",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "7"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(n, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "8"
                            },
                            _widgetRecordProvider: r
                        }, c(v("70mE3canp0eMGAjJbbLBUg#Value", "Don't worry, we'll send you an email with instructions."))))), t.createElement(n, {
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
                                return u.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: i(function() {
                                return u.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: i(function(o) {
                                    a.handleError(o)
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
                                    }, c(v("9KAkoQwQdUqTW+OsCHiWkA#Value", "Email")))]
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
                                        variable: l.createVariable(s.DataTypes.DataTypes.Email, l.variables.emailVar, function(o) {
                                            l.variables.emailVar = o
                                        }),
                                        _idProps: {
                                            service: e,
                                            name: "Input_Email"
                                        },
                                        _widgetRecordProvider: r
                                    })]
                                })
                            },
                            _dependencies: [p(l.variables.emailVar)]
                        })), t.createElement(n, {
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
                                return u.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: i(function() {
                                return u.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                ExtendedClass: "full-width",
                                IsLoading: l.variables.isExecutingVar
                            },
                            events: {
                                _handleError: i(function(o) {
                                    a.handleError(o)
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
                                            return u.validateWidget(e.getId("RecoverPasswordForm")), Promise.resolve().then(function() {
                                                var o = b.clone();
                                                return a.resetPasswordOnClick$Action(a.callContext(o))
                                            })
                                        }, "onClick"),
                                        style: "btn btn-primary",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "15"
                                        },
                                        _widgetRecordProvider: r
                                    }, t.createElement(n, {
                                        align: 0,
                                        animate: !1,
                                        style: "osui-btn-loading__spinner-animation",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "16"
                                        },
                                        _widgetRecordProvider: r
                                    }), c(v("g2hmwzo5HUW5So+cLVujgw#Value", "Reset password")))]
                                })
                            },
                            _dependencies: []
                        })), t.createElement(n, {
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
                        }, c(v("SSZdvN4LY0mknFVm_QDoDA#Value", "Not in the right place?")), t.createElement(V, {
                            enabled: !0,
                            extendedProperties: {
                                tabIndex: "3",
                                "aria-label": s.Injector.resolve(s.ServiceNames.TranslationsService).getMessage("jE2i+SQhBUiXpgaKzt6rDg#Value.1537763987.1", "Go to login page")
                            },
                            gridProperties: {
                                classes: "ThemeGrid_MarginGutter"
                            },
                            transition: s.Transitions.createTransition(s.Transitions.TransitionAnimation.Default),
                            url: s.Navigation.generateScreenURL("tradershub", "CommonLogin", {}),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "18"
                            },
                            _widgetRecordProvider: r
                        }, c(v("3cAzE2Oh9ECwxvvUAuXtsg#Value", "Go to login."))))))]
                    })
                },
                _dependencies: [p(l.variables.isExecutingVar), p(l.variables.emailVar)]
            }))
        }
    };
i(d, "View");
var w = d,
    z = w;
export {
    z as
    default
};