import {
    a as m,
    c as p
} from "./_oschunk-VZCHS3W5.js";
import "./_oschunk-ENDX3VJY.js";
import "./_oschunk-FTYAL2B7.js";
import {
    a as l
} from "./_oschunk-GPNNXU3M.js";
import {
    d as w
} from "./_oschunk-M2CKCDBB.js";
import {
    a as h
} from "./_oschunk-D2D4RIGC.js";
import {
    a as y
} from "./_oschunk-F5EON53A.js";
import "./_oschunk-FX7ZCYVH.js";
import "./_oschunk-NQZZDANH.js";
import {
    a as C,
    g as _,
    i as u
} from "./_oschunk-WZHUAZJP.js";
import "./_oschunk-4PNSWRUJ.js";
import "./_oschunk-BTXBTSZ3.js";
import "./_oschunk-5MMGFCSA.js";
import "./_oschunk-ZHFHVHFO.js";
import "./_oschunk-P7KMMADX.js";
import {
    a as r
} from "./_oschunk-KZFTAIEG.js";
import {
    le as S
} from "./_oschunk-UATY3RVV.js";
import "./_oschunk-3RH6DZJJ.js";
import {
    c as e,
    h as P
} from "./_oschunk-QHO7QY6K.js";
var i = P(C());
var g = u.PlaceholderContent,
    k = u.IteratorPlaceholderContent,
    n = class n extends _.BaseWebScreen {
        static get displayName() {
            return "MainFlow.AccountSettings"
        }
        static getAttributes() {
            return {
                codeFunction: "AccountSettings",
                functionKey: "196522a3-25db-4fb9-a009-27e9eddce88b",
                functionOwnerName: "Accounts",
                functionOwnerKey: "8a32fa32-34f5-4338-b6db-4f1ce8fdd638",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/Accounts.DerivAccounts.css", "css/Accounts.DerivAccounts.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [l, m, p]
        }
        get modelFactory() {
            return h
        }
        get controllerFactory() {
            return y
        }
        get title() {
            return "AccountSettings"
        }
        internalRender() {
            let A = this.model,
                s = this.controller,
                c = this.idService,
                d = s.validationService,
                a = this.widgetsRecordProvider,
                O = s.callContext(),
                E = n.ifWidget,
                R = n.textWidget,
                f = n.asPrimitiveValue,
                b = n.getTranslation,
                o = this;
            return i.createElement("div", this.getRootNodeProperties(), i.createElement(l, {
                getOwnerSpan: e(function() {
                    return o.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: e(function() {
                    return o.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: e(function(t) {
                        s.handleError(t)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: d
                },
                _idProps: {
                    service: c,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: a,
                placeholders: {
                    desktopLayout: g.Empty,
                    tabletLayout: g.Empty,
                    defaultLayout: new g(function() {
                        return [i.createElement(w, {
                            align: 0,
                            animate: !1,
                            style: "display-grid ",
                            visible: !0,
                            _idProps: {
                                service: c,
                                uuid: "1"
                            },
                            _widgetRecordProvider: a
                        }, i.createElement(m, {
                            getOwnerSpan: e(function() {
                                return o.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: e(function() {
                                return o.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: e(function(t) {
                                    s.handleError(t)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: d
                            },
                            _idProps: {
                                service: c,
                                uuid: "2",
                                alias: "2"
                            },
                            _widgetRecordProvider: a,
                            _dependencies: []
                        }), i.createElement(p, {
                            getOwnerSpan: e(function() {
                                return o.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: e(function() {
                                return o.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                User: A.getCachedValue(c.getId("sFBN0umFuk2BtuwVdvPaSw.User"), function() {
                                    return function() {
                                        var t = new S;
                                        return t.nameAttr = r.getUserName(), t.emailAttr = r.getUserEmail(), t
                                    }()
                                }, function() {
                                    return r.getUserName()
                                }, function() {
                                    return r.getUserEmail()
                                }),
                                ActiveMenu: "account"
                            },
                            events: {
                                _handleError: e(function(t) {
                                    s.handleError(t)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: d
                            },
                            _idProps: {
                                service: c,
                                uuid: "3",
                                alias: "3"
                            },
                            _widgetRecordProvider: a,
                            _dependencies: []
                        }))]
                    })
                },
                _dependencies: [f(r.getUserEmail()), f(r.getUserName())]
            }))
        }
    };
e(n, "View");
var v = n,
    K = v;
export {
    K as
    default
};