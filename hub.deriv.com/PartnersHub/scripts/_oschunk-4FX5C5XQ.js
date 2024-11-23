import {
    a as w
} from "./_oschunk-3NBZP24N.js";
import {
    a as C
} from "./_oschunk-N6YNAP46.js";
import "./_oschunk-Y5O4QSGP.js";
import {
    a as p
} from "./_oschunk-DTG7ZD5O.js";
import {
    a as S
} from "./_oschunk-NQ24OQU5.js";
import "./_oschunk-CXNBRKWX.js";
import "./_oschunk-6QQ7UHYS.js";
import {
    a as P
} from "./_oschunk-3FJD3ZUN.js";
import "./_oschunk-GPU7XYUR.js";
import {
    a as m
} from "./_oschunk-FO4UPS6K.js";
import "./_oschunk-XLHEEBMK.js";
import "./_oschunk-QLPTYLG6.js";
import "./_oschunk-ANY3DTL7.js";
import "./_oschunk-QCCZFQH6.js";
import "./_oschunk-4YFBPYRH.js";
import "./_oschunk-NR4KXK35.js";
import {
    d as c
} from "./_oschunk-OO36B6PN.js";
import "./_oschunk-7BKGLZMI.js";
import "./_oschunk-6WALBPGV.js";
import {
    a as x,
    g,
    i as f
} from "./_oschunk-IL57OEHH.js";
import "./_oschunk-Y3C3IKDF.js";
import "./_oschunk-CMUJJDSY.js";
import "./_oschunk-DW3HXDMW.js";
import "./_oschunk-PNRBOTIK.js";
import {
    Fa as v
} from "./_oschunk-JXJHSAQS.js";
import "./_oschunk-5KJVGEL7.js";
import {
    c as t,
    h
} from "./_oschunk-QHO7QY6K.js";
var i = h(x());
var l = f.PlaceholderContent,
    L = f.IteratorPlaceholderContent,
    s = class s extends g.BaseWebScreen {
        static get displayName() {
            return "ForgotPassword.TokenExpired"
        }
        static getAttributes() {
            return {
                codeFunction: "TokenExpired",
                functionKey: "25d4875a-79d8-4246-bcc7-86b55cb5187f",
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
            return [S, m, p, P]
        }
        get modelFactory() {
            return w
        }
        get controllerFactory() {
            return C
        }
        get title() {
            return g.BaseWebScreen.getTranslation("WofUJdh5RkK8x4a1XLUYfw#Title", "TokenExpired")
        }
        internalRender() {
            let b = this.model,
                r = this.controller,
                n = this.idService,
                d = r.validationService,
                a = this.widgetsRecordProvider,
                u = r.callContext(),
                E = s.ifWidget,
                y = s.textWidget,
                O = s.asPrimitiveValue,
                R = s.getTranslation,
                o = this;
            return i.createElement("div", this.getRootNodeProperties(), i.createElement(S, {
                getOwnerSpan: t(function() {
                    return o.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: t(function() {
                    return o.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: t(function(e) {
                        r.handleError(e)
                    }, "_handleError"),
                    event$Action: t(function() {
                        var e = u.clone();
                        r.closePage$Action(r.callContext(e))
                    }, "event$Action")
                },
                _validationProps: {
                    validationService: d
                },
                _idProps: {
                    service: n,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: a,
                placeholders: {
                    mainContent: new l(function() {
                        return [i.createElement(m, {
                            getOwnerSpan: t(function() {
                                return o.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: t(function() {
                                return o.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: t(function(e) {
                                    r.handleError(e)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: d
                            },
                            _idProps: {
                                service: n,
                                uuid: "1",
                                alias: "2"
                            },
                            _widgetRecordProvider: a,
                            placeholders: {
                                desktopContent: new l(function() {
                                    return [i.createElement(c, {
                                        align: 0,
                                        animate: !1,
                                        extendedProperties: {
                                            style: "background-color: #ffffff;"
                                        },
                                        style: "login-screen",
                                        visible: !0,
                                        _idProps: {
                                            service: n,
                                            uuid: "2"
                                        },
                                        _widgetRecordProvider: a
                                    }, i.createElement(c, {
                                        align: 0,
                                        animate: !1,
                                        extendedProperties: {
                                            style: "background-color: #fff; border: 1px solid #dee2e6; border-radius: 8px; margin-top: 0px; padding: 24px 16px;"
                                        },
                                        gridProperties: {
                                            classes: "OSInline",
                                            width: "388px"
                                        },
                                        style: "signup",
                                        visible: !0,
                                        _idProps: {
                                            service: n,
                                            uuid: "3"
                                        },
                                        _widgetRecordProvider: a
                                    }, i.createElement(p, {
                                        getOwnerSpan: t(function() {
                                            return o.getChildSpan("render")
                                        }, "getOwnerSpan"),
                                        getOwnerDisposeSpan: t(function() {
                                            return o.getChildSpan("destroy")
                                        }, "getOwnerDisposeSpan"),
                                        inputs: {
                                            title: "Email verification link expired",
                                            description: "Request a new one.",
                                            type: b.getCachedValue(n.getId("AlertTokenExpired.type"), function() {
                                                return function() {
                                                    var e = new v;
                                                    return e.isWarningAttr = !0, e
                                                }()
                                            })
                                        },
                                        events: {
                                            _handleError: t(function(e) {
                                                r.handleError(e)
                                            }, "_handleError"),
                                            actionHandler$Action: t(function() {
                                                return Promise.resolve().then(function() {
                                                    var e = u.clone();
                                                    return r.sendEmailEvent$Action(r.callContext(e))
                                                })
                                            }, "actionHandler$Action")
                                        },
                                        _validationProps: {
                                            validationService: d
                                        },
                                        _idProps: {
                                            service: n,
                                            name: "AlertTokenExpired",
                                            alias: "3"
                                        },
                                        _widgetRecordProvider: a,
                                        _dependencies: []
                                    })))]
                                }),
                                tabletContent: l.Empty,
                                mobileContent: new l(function() {
                                    return [i.createElement(P, {
                                        getOwnerSpan: t(function() {
                                            return o.getChildSpan("render")
                                        }, "getOwnerSpan"),
                                        getOwnerDisposeSpan: t(function() {
                                            return o.getChildSpan("destroy")
                                        }, "getOwnerDisposeSpan"),
                                        inputs: {
                                            HasBackButton: !1,
                                            HasCloseIcon: !0,
                                            Title: "Link expired"
                                        },
                                        events: {
                                            _handleError: t(function(e) {
                                                r.handleError(e)
                                            }, "_handleError"),
                                            onClose$Action: t(function() {
                                                var e = u.clone();
                                                r.closePage$Action(r.callContext(e))
                                            }, "onClose$Action")
                                        },
                                        _validationProps: {
                                            validationService: d
                                        },
                                        _idProps: {
                                            service: n,
                                            uuid: "5",
                                            alias: "4"
                                        },
                                        _widgetRecordProvider: a,
                                        placeholders: {
                                            content: new l(function() {
                                                return [i.createElement(c, {
                                                    align: 0,
                                                    animate: !1,
                                                    extendedProperties: {
                                                        style: "display: flex; justify-content: center; padding: 100px 16px;"
                                                    },
                                                    visible: !0,
                                                    _idProps: {
                                                        service: n,
                                                        uuid: "6"
                                                    },
                                                    _widgetRecordProvider: a
                                                }, i.createElement(c, {
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
                                                        service: n,
                                                        uuid: "7"
                                                    },
                                                    _widgetRecordProvider: a
                                                }, i.createElement(p, {
                                                    getOwnerSpan: t(function() {
                                                        return o.getChildSpan("render")
                                                    }, "getOwnerSpan"),
                                                    getOwnerDisposeSpan: t(function() {
                                                        return o.getChildSpan("destroy")
                                                    }, "getOwnerDisposeSpan"),
                                                    inputs: {
                                                        title: "Email verification link expired",
                                                        type: b.getCachedValue(n.getId("h4uyvPKkFU2oIGn2kKbqKA.type"), function() {
                                                            return function() {
                                                                var e = new v;
                                                                return e.isWarningAttr = !0, e
                                                            }()
                                                        }),
                                                        description: "Request a new one."
                                                    },
                                                    events: {
                                                        _handleError: t(function(e) {
                                                            r.handleError(e)
                                                        }, "_handleError"),
                                                        actionHandler$Action: t(function() {
                                                            return Promise.resolve().then(function() {
                                                                var e = u.clone();
                                                                return r.sendEmailEvent$Action(r.callContext(e))
                                                            })
                                                        }, "actionHandler$Action")
                                                    },
                                                    _validationProps: {
                                                        validationService: d
                                                    },
                                                    _idProps: {
                                                        service: n,
                                                        uuid: "8",
                                                        alias: "5"
                                                    },
                                                    _widgetRecordProvider: a,
                                                    _dependencies: []
                                                })))]
                                            })
                                        },
                                        _dependencies: []
                                    })]
                                })
                            },
                            _dependencies: []
                        })]
                    })
                },
                _dependencies: []
            }))
        }
    };
t(s, "View");
var _ = s,
    U = _;
export {
    U as
    default
};