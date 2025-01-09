import {
    a as u
} from "./_oschunk-4KQJW2FJ.js";
import "./_oschunk-IBUKHOCS.js";
import "./_oschunk-7TZ3KR6K.js";
import {
    a as S
} from "./_oschunk-RJZAI3RU.js";
import {
    a as m
} from "./_oschunk-FNNSC7KD.js";
import {
    a as v
} from "./_oschunk-FSPIWF67.js";
import "./_oschunk-FSWTA5WV.js";
import "./_oschunk-VZCHS3W5.js";
import "./_oschunk-ENDX3VJY.js";
import "./_oschunk-FTYAL2B7.js";
import {
    a as p
} from "./_oschunk-GPNNXU3M.js";
import {
    d as w,
    r as h
} from "./_oschunk-M2CKCDBB.js";
import "./_oschunk-FX7ZCYVH.js";
import "./_oschunk-NQZZDANH.js";
import {
    a as P,
    g as f,
    i as l
} from "./_oschunk-WZHUAZJP.js";
import {
    a as g
} from "./_oschunk-27X553NQ.js";
import "./_oschunk-Q6J66ALP.js";
import "./_oschunk-YIVLIJ7Z.js";
import "./_oschunk-NRRLMT6C.js";
import "./_oschunk-XBVY76NY.js";
import "./_oschunk-V2VV7FMU.js";
import "./_oschunk-TGM73NNA.js";
import "./_oschunk-4PNSWRUJ.js";
import "./_oschunk-BTXBTSZ3.js";
import "./_oschunk-5MMGFCSA.js";
import "./_oschunk-ZHFHVHFO.js";
import "./_oschunk-P7KMMADX.js";
import "./_oschunk-KZFTAIEG.js";
import "./_oschunk-UATY3RVV.js";
import "./_oschunk-3RH6DZJJ.js";
import {
    c as e,
    h as y
} from "./_oschunk-QHO7QY6K.js";
var r = y(P());
var a = l.PlaceholderContent,
    U = l.IteratorPlaceholderContent,
    s = class s extends f.BaseWebScreen {
        static get displayName() {
            return "MainFlow.TwoFactorAuthentication"
        }
        static getAttributes() {
            return {
                codeFunction: "TwoFactorAuthentication",
                functionKey: "06448e21-69fd-47b7-b936-d16b82c1fa80",
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
            return [p, v, u, m]
        }
        get modelFactory() {
            return g
        }
        get controllerFactory() {
            return S
        }
        get title() {
            return "TwoFactorAuthentication"
        }
        internalRender() {
            let C = this.model,
                i = this.controller,
                o = this.idService,
                d = i.validationService,
                c = this.widgetsRecordProvider,
                O = i.callContext(),
                A = s.ifWidget,
                R = s.textWidget,
                E = s.asPrimitiveValue,
                D = s.getTranslation,
                t = this;
            return r.createElement("div", this.getRootNodeProperties(), r.createElement(p, {
                getOwnerSpan: e(function() {
                    return t.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: e(function() {
                    return t.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: e(function(n) {
                        i.handleError(n)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: d
                },
                _idProps: {
                    service: o,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: c,
                placeholders: {
                    desktopLayout: new a(function() {
                        return [r.createElement(v, {
                            getOwnerSpan: e(function() {
                                return t.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: e(function() {
                                return t.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                SelectedSection: "security"
                            },
                            events: {
                                _handleError: e(function(n) {
                                    i.handleError(n)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: d
                            },
                            _idProps: {
                                service: o,
                                uuid: "1",
                                alias: "2"
                            },
                            _widgetRecordProvider: c,
                            placeholders: {
                                content: new a(function() {
                                    return [r.createElement(u, {
                                        getOwnerSpan: e(function() {
                                            return t.getChildSpan("render")
                                        }, "getOwnerSpan"),
                                        getOwnerDisposeSpan: e(function() {
                                            return t.getChildSpan("destroy")
                                        }, "getOwnerDisposeSpan"),
                                        inputs: {},
                                        events: {
                                            _handleError: e(function(n) {
                                                i.handleError(n)
                                            }, "_handleError")
                                        },
                                        _validationProps: {
                                            validationService: d
                                        },
                                        _idProps: {
                                            service: o,
                                            uuid: "2",
                                            alias: "3"
                                        },
                                        _widgetRecordProvider: c,
                                        _dependencies: []
                                    })]
                                })
                            },
                            _dependencies: []
                        })]
                    }),
                    tabletLayout: a.Empty,
                    defaultLayout: new a(function() {
                        return [r.createElement(m, {
                            getOwnerSpan: e(function() {
                                return t.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: e(function() {
                                return t.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                DisplayCloseButton: !1,
                                DisplayBackButton: !0
                            },
                            events: {
                                _handleError: e(function(n) {
                                    i.handleError(n)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: d
                            },
                            _idProps: {
                                service: o,
                                uuid: "3",
                                alias: "4"
                            },
                            _widgetRecordProvider: c,
                            placeholders: {
                                title: new a(function() {
                                    return [r.createElement(h, {
                                        style: "font-size-h6 font-bold",
                                        text: ["Security"],
                                        _idProps: {
                                            service: o,
                                            name: "Security"
                                        },
                                        _widgetRecordProvider: c
                                    })]
                                }),
                                sectioncontent: new a(function() {
                                    return [r.createElement(w, {
                                        align: 0,
                                        animate: !1,
                                        style: "security-section__items",
                                        visible: !0,
                                        _idProps: {
                                            service: o,
                                            uuid: "5"
                                        },
                                        _widgetRecordProvider: c
                                    }, r.createElement(u, {
                                        getOwnerSpan: e(function() {
                                            return t.getChildSpan("render")
                                        }, "getOwnerSpan"),
                                        getOwnerDisposeSpan: e(function() {
                                            return t.getChildSpan("destroy")
                                        }, "getOwnerDisposeSpan"),
                                        inputs: {},
                                        events: {
                                            _handleError: e(function(n) {
                                                i.handleError(n)
                                            }, "_handleError")
                                        },
                                        _validationProps: {
                                            validationService: d
                                        },
                                        _idProps: {
                                            service: o,
                                            uuid: "6",
                                            alias: "5"
                                        },
                                        _widgetRecordProvider: c,
                                        _dependencies: []
                                    }))]
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
e(s, "View");
var _ = s,
    $ = _;
export {
    $ as
    default
};