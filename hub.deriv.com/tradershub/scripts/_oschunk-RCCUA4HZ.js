import {
    a as te
} from "./_oschunk-3DPYNMEL.js";
import {
    a as re
} from "./_oschunk-GUY3TYN5.js";
import {
    a as I
} from "./_oschunk-JRX4BBTN.js";
import {
    a as $,
    b as V,
    c as L,
    d as B,
    e as H,
    f as N,
    g as z,
    h as G,
    i as j,
    j as K,
    k as q,
    l as J,
    m as Q
} from "./_oschunk-WEAGBNUF.js";
import "./_oschunk-FLQXSIWE.js";
import {
    a as U
} from "./_oschunk-BCSV5WA3.js";
import "./_oschunk-AFJAHMER.js";
import "./_oschunk-34HQTIPL.js";
import "./_oschunk-ZPOVFLPT.js";
import "./_oschunk-I2ZHC7XU.js";
import "./_oschunk-O2UMTF2I.js";
import "./_oschunk-6VVIEPJK.js";
import "./_oschunk-ZSU2JK2M.js";
import {
    a as F
} from "./_oschunk-4KUIOJTQ.js";
import {
    a as M
} from "./_oschunk-3DUHVNXP.js";
import {
    a as D,
    b as k
} from "./_oschunk-G7GFWP74.js";
import "./_oschunk-5ETXRNLC.js";
import "./_oschunk-3ONGJG7U.js";
import "./_oschunk-T6VVD72L.js";
import "./_oschunk-O5AQVDN2.js";
import "./_oschunk-4SG3ZAXH.js";
import "./_oschunk-MOYCBUII.js";
import "./_oschunk-NYD6CGWS.js";
import "./_oschunk-EROCOLS7.js";
import {
    b as y,
    h as s,
    j as x,
    k as S,
    q as ee,
    r as m,
    u as A,
    v as O,
    y as P
} from "./_oschunk-42NACYKQ.js";
import "./_oschunk-2M7PXTSQ.js";
import {
    a as ne,
    g as W,
    i as T
} from "./_oschunk-RKYF3TWC.js";
import "./_oschunk-K7AFM7ZW.js";
import {
    a as p
} from "./_oschunk-DOFMR6EA.js";
import {
    l as Z
} from "./_oschunk-2ZI4JQLD.js";
import "./_oschunk-IKZJT3AP.js";
import "./_oschunk-X4K3PA43.js";
import {
    a as E
} from "./_oschunk-MSUVGI3L.js";
import {
    ia as Y
} from "./_oschunk-2JKANR6M.js";
import {
    c as o,
    g as ie
} from "./_oschunk-DVBKI63I.js";
var t = ie(ne());
var c = Y,
    R = T.PlaceholderContent,
    h = T.IteratorPlaceholderContent,
    w = class w extends W.BaseWebScreen {
        static get displayName() {
            return "BFFPocFlow.AggregatedCFDs"
        }
        static getAttributes() {
            return {
                codeFunction: "AggregatedCFDs",
                functionKey: "af08f0a6-bd2b-44a0-905c-25d2d7930c03",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.BFFPocFlow.AggregatedCFDs.css", "css/tradershub.AccountCreation.extra.css"]
        }
        static getJsDependencies() {
            return ["scripts/tradershub.UserScripts.JSCookie.js"]
        }
        static getBlocks() {
            return [k, I, U, M, F, $, V, D, L, B, H, N, z, G, j, K, q, J, Q]
        }
        get modelFactory() {
            return te
        }
        get controllerFactory() {
            return re
        }
        get title() {
            return W.BaseWebScreen.getTranslation("pvAIryu9oESQXCXS15MMAw#Title", "AggregatedCFDs")
        }
        internalRender() {
            let n = this.model,
                a = this.controller,
                e = this.idService,
                g = a.validationService,
                r = this.widgetsRecordProvider,
                d = a.callContext(),
                b = w.ifWidget,
                _ = w.textWidget,
                v = w.asPrimitiveValue,
                C = w.getTranslation,
                l = this;
            return t.createElement("div", this.getRootNodeProperties(), t.createElement(k, {
                getOwnerSpan: o(function() {
                    return l.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return l.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: o(function(i) {
                        a.handleError(i)
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
                    content: new R(function() {
                        return [t.createElement(I, {
                            getOwnerSpan: o(function() {
                                return l.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return l.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                title: "Clear cache"
                            },
                            events: {
                                _handleError: o(function(i) {
                                    a.handleError(i)
                                }, "_handleError"),
                                onClick$Action: o(function() {
                                    var i = d.clone();
                                    a.onClickClearCache$Action(a.callContext(i))
                                }, "onClick$Action")
                            },
                            _validationProps: {
                                validationService: g
                            },
                            _idProps: {
                                service: e,
                                uuid: "1",
                                alias: "2"
                            },
                            _widgetRecordProvider: r,
                            _dependencies: []
                        }), b(n.variables.hasRealAccountVar, !1, this, function() {
                            return []
                        }, function() {
                            return [t.createElement(A, {
                                enabled: !0,
                                extendedProperties: {
                                    style: "text-decoration: none;"
                                },
                                gridProperties: {
                                    classes: "OSFillParent",
                                    marginLeft: "0"
                                },
                                transition: c.Transitions.createTransition(c.Transitions.TransitionAnimation.Default),
                                url: c.Navigation.generateScreenURL("tradershub", "currency-selection", {}),
                                visible: !n.variables.dataLoadingVar,
                                _idProps: {
                                    service: e,
                                    uuid: "2"
                                },
                                _widgetRecordProvider: r
                            }, t.createElement(s, {
                                align: 0,
                                animate: !1,
                                style: "demo-blue-container",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    name: "BlueContainer"
                                },
                                _widgetRecordProvider: r
                            }, t.createElement(P, {
                                extendedProperties: {
                                    style: "color: #101213; font-weight: 400;"
                                },
                                text: [_(C("UtuEq+X9JEy5bH0x_Nexfg#Value", "Fill in your account details to make your first deposit."))],
                                _idProps: {
                                    service: e,
                                    uuid: "4"
                                },
                                _widgetRecordProvider: r
                            }), t.createElement(s, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "padding: 0 11px;"
                                },
                                gridProperties: {
                                    marginLeft: "4px"
                                },
                                style: "display-flex align-items-center justify-content-center",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    name: "ChevronIcon"
                                },
                                _widgetRecordProvider: r
                            }, t.createElement(m, {
                                image: c.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standalone_chevron_right_sm.svg"),
                                type: 0,
                                _idProps: {
                                    service: e,
                                    uuid: "6"
                                },
                                _widgetRecordProvider: r
                            }))))]
                        }), t.createElement(U, {
                            getOwnerSpan: o(function() {
                                return l.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return l.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: o(function(i) {
                                    a.handleError(i)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: g
                            },
                            _idProps: {
                                service: e,
                                uuid: "7",
                                alias: "3"
                            },
                            _widgetRecordProvider: r,
                            _dependencies: []
                        }), t.createElement(s, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-bottom: 0px;"
                            },
                            style: "header-container",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "Header"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(s, {
                            align: 0,
                            animate: !1,
                            style: "display-flex align-items-center",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "Title"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(P, {
                            style: "main-title",
                            text: [_(C("hr5sF3e7RU270+MSG1C0gA#Value", "CFDs trading"))],
                            _idProps: {
                                service: e,
                                name: "CFDsTrading"
                            },
                            _widgetRecordProvider: r
                        }), t.createElement(M, {
                            getOwnerSpan: o(function() {
                                return l.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return l.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                Position: n.getCachedValue(e.getId("8_1zqidlwk6PYDDh14q1hw.Position"), function() {
                                    return Z.isDesktop$Action(d).isDesktopOut ? E.position.right : E.position.bottom
                                })
                            },
                            events: {
                                _handleError: o(function(i) {
                                    a.handleError(i)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: g
                            },
                            _idProps: {
                                service: e,
                                uuid: "11",
                                alias: "4"
                            },
                            _widgetRecordProvider: r,
                            placeholders: {
                                content: new R(function() {
                                    return [t.createElement(s, {
                                        align: 0,
                                        animate: !1,
                                        extendedProperties: {
                                            style: "margin-top: 8px;"
                                        },
                                        gridProperties: {
                                            marginLeft: "8px"
                                        },
                                        style: "display-flex align-items-center justify-content-center",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "12"
                                        },
                                        _widgetRecordProvider: r
                                    }, t.createElement(m, {
                                        image: c.Navigation.VersionedURL.getVersionedUrl("img/tradershub.info.svg"),
                                        type: 0,
                                        _idProps: {
                                            service: e,
                                            uuid: "13"
                                        },
                                        _widgetRecordProvider: r
                                    }))]
                                }),
                                tooltip: new R(function() {
                                    return [t.createElement(P, {
                                        extendedProperties: {
                                            style: "line-height: 21px;"
                                        },
                                        text: [_(C("xR4iZjfNlE2cOeF3a+rAgA#Value", "Trade bigger positions with less capital on a wide range of global markets."))],
                                        _idProps: {
                                            service: e,
                                            uuid: "14"
                                        },
                                        _widgetRecordProvider: r
                                    })]
                                })
                            },
                            _dependencies: []
                        })), t.createElement(F, {
                            getOwnerSpan: o(function() {
                                return l.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return l.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: o(function(i) {
                                    a.handleError(i)
                                }, "_handleError"),
                                demoClickEvent$Action: o(function() {
                                    return Promise.resolve().then(function() {
                                        var i = d.clone();
                                        return a.setDemoValue$Action(a.callContext(i))
                                    })
                                }, "demoClickEvent$Action"),
                                realClickEvent$Action: o(function() {
                                    return Promise.resolve().then(function() {
                                        var i = d.clone();
                                        return a.setRealValue$Action(a.callContext(i))
                                    })
                                }, "realClickEvent$Action")
                            },
                            _validationProps: {
                                validationService: g
                            },
                            _idProps: {
                                service: e,
                                uuid: "15",
                                alias: "5"
                            },
                            _widgetRecordProvider: r,
                            _dependencies: []
                        })), t.createElement(s, {
                            align: 0,
                            animate: !0,
                            visible: !n.variables.dataLoadingVar,
                            _idProps: {
                                service: e,
                                uuid: "16"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(s, {
                            align: 0,
                            animate: !0,
                            extendedProperties: {
                                style: "margin-top: 24px;"
                            },
                            visible: n.getCachedValue(e.getId("MyAccountsContainer.Visible"), function() {
                                return p.getAuthToken() !== c.BuiltinFunctions.nullTextIdentifier() && !n.variables.dataLoadingVar && !n.variables.createdCFDAccountsVar.isEmpty
                            }, function() {
                                return p.getAuthToken()
                            }, function() {
                                return n.variables.dataLoadingVar
                            }, function() {
                                return n.variables.createdCFDAccountsVar.isEmpty
                            }),
                            _idProps: {
                                service: e,
                                name: "MyAccountsContainer"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(P, {
                            extendedProperties: {
                                style: "font-size: 16px; font-weight: bold;"
                            },
                            text: [_(C("x_i23GmmIk2gS1IA7MLAFw#Value", "My accounts"))],
                            _idProps: {
                                service: e,
                                uuid: "18"
                            },
                            _widgetRecordProvider: r
                        }), b(n.variables.dataLoadingVar, !1, this, function() {
                            return [t.createElement(s, {
                                align: 0,
                                animate: !1,
                                style: "available-accounts__container",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "19"
                                },
                                _widgetRecordProvider: r
                            }, t.createElement(s, {
                                align: 0,
                                animate: !1,
                                style: "skeleton my-account-loader",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "20"
                                },
                                _widgetRecordProvider: r
                            }), t.createElement(s, {
                                align: 0,
                                animate: !1,
                                style: "skeleton my-account-loader",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "21"
                                },
                                _widgetRecordProvider: r
                            }), t.createElement(s, {
                                align: 0,
                                animate: !1,
                                style: "skeleton my-account-loader",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "22"
                                },
                                _widgetRecordProvider: r
                            }))]
                        }, function() {
                            return [t.createElement(S, {
                                animateItems: !1,
                                extendedProperties: {
                                    "disable-virtualization": "True"
                                },
                                mode: 0,
                                source: n.variables.createdCFDAccountsVar,
                                style: "available-accounts__container",
                                tag: "div",
                                _idProps: {
                                    service: e,
                                    name: "MyAccountsCardsList"
                                },
                                _widgetRecordProvider: r,
                                placeholders: {
                                    content: new h(function(i, u) {
                                        return [t.createElement($, {
                                            getOwnerSpan: o(function() {
                                                return l.getChildSpan("render")
                                            }, "getOwnerSpan"),
                                            getOwnerDisposeSpan: o(function() {
                                                return l.getChildSpan("destroy")
                                            }, "getOwnerDisposeSpan"),
                                            inputs: {
                                                ProductIcon: n.variables.createdCFDAccountsVar.getCurrent(u.iterationContext).iconAttr,
                                                Status: n.variables.createdCFDAccountsVar.getCurrent(u.iterationContext).statusAttr,
                                                Name: n.variables.createdCFDAccountsVar.getCurrent(u.iterationContext).labelAttr,
                                                Balance: n.getCachedValue(i.getId("UZtcObUvj0GsVPkcTkUt8Q.Balance"), function() {
                                                    return n.variables.createdCFDAccountsVar.getCurrent(u.iterationContext).identifierAttr === "ctrader_standard" ? p.getTotalCTraderBalance() : n.variables.createdCFDAccountsVar.getCurrent(u.iterationContext).display_balanceAttr + " " + n.variables.createdCFDAccountsVar.getCurrent(u.iterationContext).currencyAttr
                                                }, function() {
                                                    return n.variables.createdCFDAccountsVar.getCurrent(u.iterationContext).identifierAttr
                                                }, function() {
                                                    return p.getTotalCTraderBalance()
                                                }, function() {
                                                    return n.variables.createdCFDAccountsVar.getCurrent(u.iterationContext).display_balanceAttr
                                                }, function() {
                                                    return n.variables.createdCFDAccountsVar.getCurrent(u.iterationContext).currencyAttr
                                                })
                                            },
                                            events: {
                                                _handleError: o(function(f) {
                                                    a.handleError(f)
                                                }, "_handleError"),
                                                needVerificationEvent$Action: o(function() {
                                                    var f = u.clone();
                                                    a.createdAccountOnClick$Action(a.callContext(f))
                                                }, "needVerificationEvent$Action"),
                                                onClickEvent$Action: o(function() {
                                                    var f = u.clone();
                                                    a.createdAccountOnClick$Action(a.callContext(f))
                                                }, "onClickEvent$Action")
                                            },
                                            _validationProps: {
                                                validationService: g
                                            },
                                            _idProps: {
                                                service: i,
                                                uuid: "24",
                                                alias: "6"
                                            },
                                            _widgetRecordProvider: r,
                                            _dependencies: []
                                        })]
                                    }, d, e, "1")
                                },
                                _dependencies: [v(p.getTotalCTraderBalance())]
                            })]
                        })), t.createElement(s, {
                            align: 0,
                            animate: !0,
                            extendedProperties: {
                                style: "margin-top: 24px;"
                            },
                            style: "display-flex align-items-center justify-content-space-between",
                            visible: n.getCachedValue(e.getId("AvailableAccountsHeader.Visible"), function() {
                                return n.variables.isEmptyVar || n.variables.dataLoadingVar ? !0 : n.variables.availableCFDAccountsVar.length > 0
                            }, function() {
                                return n.variables.isEmptyVar
                            }, function() {
                                return n.variables.dataLoadingVar
                            }, function() {
                                return n.variables.availableCFDAccountsVar.length
                            }),
                            _idProps: {
                                service: e,
                                name: "AvailableAccountsHeader"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(P, {
                            extendedProperties: {
                                style: "font-size: 16px; font-weight: bold;"
                            },
                            text: [_(C("AzmKbCX0gUeKwrutYrGM8w#Value", "Available accounts"))],
                            _idProps: {
                                service: e,
                                uuid: "26"
                            },
                            _widgetRecordProvider: r
                        }), t.createElement(s, {
                            align: 0,
                            animate: !0,
                            extendedEvents: {
                                onClick: o(function() {
                                    var i = d.clone();
                                    a.goToAccountSpecification$Action(a.callContext(i))
                                }, "onClick")
                            },
                            visible: !n.variables.dataLoadingVar,
                            _idProps: {
                                service: e,
                                name: "ViewSpecificationsContainer"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(P, {
                            extendedProperties: {
                                style: "color: #101213; font-size: 12px;"
                            },
                            text: [_(C("59PasdO3dUu2uTtApYxIOw#Value", "View specifications"))],
                            _idProps: {
                                service: e,
                                uuid: "28"
                            },
                            _widgetRecordProvider: r
                        }), t.createElement(ee, {
                            extendedProperties: {
                                style: "color: #101213;"
                            },
                            gridProperties: {
                                marginLeft: "4.5px"
                            },
                            icon: "angle-right",
                            iconSize: 0,
                            style: "icon",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "29"
                            },
                            _widgetRecordProvider: r
                        })))), b(n.variables.isEmptyVar, !1, this, function() {
                            return [t.createElement(S, {
                                animateItems: !1,
                                extendedProperties: {
                                    "disable-virtualization": "True"
                                },
                                mode: 0,
                                source: n.variables.availableCFDAccountsVar,
                                style: "available-accounts__container",
                                tag: "div",
                                _idProps: {
                                    service: e,
                                    name: "EmptyAvailableAccountsCardsList"
                                },
                                _widgetRecordProvider: r,
                                placeholders: {
                                    content: new h(function(i, u) {
                                        return [t.createElement(V, {
                                            getOwnerSpan: o(function() {
                                                return l.getChildSpan("render")
                                            }, "getOwnerSpan"),
                                            getOwnerDisposeSpan: o(function() {
                                                return l.getChildSpan("destroy")
                                            }, "getOwnerDisposeSpan"),
                                            inputs: {
                                                ProductDescription: n.variables.availableCFDAccountsVar.getCurrent(u.iterationContext).descriptionAttr,
                                                ProductIcon: n.variables.availableCFDAccountsVar.getCurrent(u.iterationContext).iconAttr,
                                                ProductName: n.variables.availableCFDAccountsVar.getCurrent(u.iterationContext).labelAttr
                                            },
                                            events: {
                                                _handleError: o(function(f) {
                                                    a.handleError(f)
                                                }, "_handleError"),
                                                onClickEvent$Action: o(function() {
                                                    return Promise.resolve().then(function() {
                                                        var f = u.clone();
                                                        return a.availableAccountOnClick$Action(a.callContext(f))
                                                    })
                                                }, "onClickEvent$Action")
                                            },
                                            _validationProps: {
                                                validationService: g
                                            },
                                            _idProps: {
                                                service: i,
                                                uuid: "31",
                                                alias: "7"
                                            },
                                            _widgetRecordProvider: r,
                                            _dependencies: []
                                        })]
                                    }, d, e, "2")
                                },
                                _dependencies: []
                            })]
                        }, function() {
                            return [b(n.variables.dataLoadingVar, !1, this, function() {
                                return [t.createElement(s, {
                                    align: 0,
                                    animate: !1,
                                    style: "available-accounts__container",
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        uuid: "32"
                                    },
                                    _widgetRecordProvider: r
                                }, t.createElement(s, {
                                    align: 0,
                                    animate: !1,
                                    style: "skeleton available-accounts-loader",
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        uuid: "33"
                                    },
                                    _widgetRecordProvider: r
                                }), t.createElement(s, {
                                    align: 0,
                                    animate: !1,
                                    style: "skeleton available-accounts-loader",
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        uuid: "34"
                                    },
                                    _widgetRecordProvider: r
                                }), t.createElement(s, {
                                    align: 0,
                                    animate: !1,
                                    style: "skeleton available-accounts-loader",
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        uuid: "35"
                                    },
                                    _widgetRecordProvider: r
                                }), t.createElement(s, {
                                    align: 0,
                                    animate: !1,
                                    style: "skeleton available-accounts-loader",
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        uuid: "36"
                                    },
                                    _widgetRecordProvider: r
                                }), t.createElement(s, {
                                    align: 0,
                                    animate: !1,
                                    style: "skeleton available-accounts-loader",
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        uuid: "37"
                                    },
                                    _widgetRecordProvider: r
                                }))]
                            }, function() {
                                return [t.createElement(S, {
                                    animateItems: !1,
                                    extendedProperties: {
                                        "disable-virtualization": "True"
                                    },
                                    mode: 0,
                                    source: n.variables.availableCFDAccountsVar,
                                    style: "available-accounts__container",
                                    tag: "div",
                                    _idProps: {
                                        service: e,
                                        name: "AvailableAccountsCardsList"
                                    },
                                    _widgetRecordProvider: r,
                                    placeholders: {
                                        content: new h(function(i, u) {
                                            return [t.createElement(V, {
                                                getOwnerSpan: o(function() {
                                                    return l.getChildSpan("render")
                                                }, "getOwnerSpan"),
                                                getOwnerDisposeSpan: o(function() {
                                                    return l.getChildSpan("destroy")
                                                }, "getOwnerDisposeSpan"),
                                                inputs: {
                                                    ProductDescription: n.variables.availableCFDAccountsVar.getCurrent(u.iterationContext).descriptionAttr,
                                                    ProductName: n.variables.availableCFDAccountsVar.getCurrent(u.iterationContext).labelAttr,
                                                    ProductIcon: n.variables.availableCFDAccountsVar.getCurrent(u.iterationContext).iconAttr
                                                },
                                                events: {
                                                    _handleError: o(function(f) {
                                                        a.handleError(f)
                                                    }, "_handleError"),
                                                    onClickEvent$Action: o(function() {
                                                        return Promise.resolve().then(function() {
                                                            var f = u.clone();
                                                            return a.availableAccountOnClick$Action(a.callContext(f))
                                                        })
                                                    }, "onClickEvent$Action")
                                                },
                                                _validationProps: {
                                                    validationService: g
                                                },
                                                _idProps: {
                                                    service: i,
                                                    uuid: "39",
                                                    alias: "8"
                                                },
                                                _widgetRecordProvider: r,
                                                _dependencies: []
                                            })]
                                        }, d, e, "3")
                                    },
                                    _dependencies: []
                                })]
                            })]
                        }), t.createElement(D, {
                            getOwnerSpan: o(function() {
                                return l.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return l.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: o(function(i) {
                                    a.handleError(i)
                                }, "_handleError"),
                                onCloseClick$Action: o(function() {
                                    var i = d.clone();
                                    a.closeModal$Action(a.callContext(i))
                                }, "onCloseClick$Action")
                            },
                            _validationProps: {
                                validationService: g
                            },
                            _idProps: {
                                service: e,
                                uuid: "40",
                                alias: "9"
                            },
                            _widgetRecordProvider: r,
                            _dependencies: []
                        }), t.createElement(L, {
                            getOwnerSpan: o(function() {
                                return l.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return l.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                SelectedAccount: n.variables.selectedAvailableAccountVar,
                                IsVisible: n.variables.showModalVar === "ShowPasswordModal",
                                IsPasswordSet: n.getCachedValue(e.getId("d2Q43l9vwUKxPdJrE1u4ZA.IsPasswordSet"), function() {
                                    return n.variables.selectedAvailableAccountVar.platformAttr === "mt5" ? n.variables.isMt5PasswordSetVar : n.variables.isDxtradePasswordSetVar
                                }, function() {
                                    return n.variables.selectedAvailableAccountVar.platformAttr
                                }, function() {
                                    return n.variables.isMt5PasswordSetVar
                                }, function() {
                                    return n.variables.isDxtradePasswordSetVar
                                })
                            },
                            events: {
                                _handleError: o(function(i) {
                                    a.handleError(i)
                                }, "_handleError"),
                                refetchDxtradeEvent$Action: o(function() {
                                    return Promise.resolve().then(function() {
                                        var i = d.clone();
                                        return a.onAccountCreated$Action("dxtrade", a.callContext(i))
                                    })
                                }, "refetchDxtradeEvent$Action"),
                                refetchMT5Event$Action: o(function() {
                                    return Promise.resolve().then(function() {
                                        var i = d.clone();
                                        return a.onAccountCreated$Action("mt5", a.callContext(i))
                                    })
                                }, "refetchMT5Event$Action"),
                                needsKYCEvent$Action: o(function() {
                                    var i = d.clone();
                                    a.onNeedKYC$Action(a.callContext(i))
                                }, "needsKYCEvent$Action"),
                                forgotPasswordEvent$Action: o(function() {
                                    return Promise.resolve().then(function() {
                                        var i = d.clone();
                                        return a.handleForgotPassword$Action(a.callContext(i))
                                    })
                                }, "forgotPasswordEvent$Action"),
                                closeEvent$Action: o(function() {
                                    var i = d.clone();
                                    a.closeModal$Action(a.callContext(i))
                                }, "closeEvent$Action")
                            },
                            _validationProps: {
                                validationService: g
                            },
                            _idProps: {
                                service: e,
                                uuid: "41",
                                alias: "10"
                            },
                            _widgetRecordProvider: r,
                            _dependencies: []
                        }), t.createElement(B, {
                            getOwnerSpan: o(function() {
                                return l.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return l.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                IsVisible: n.variables.showModalVar === "EmailSentModal"
                            },
                            events: {
                                _handleError: o(function(i) {
                                    a.handleError(i)
                                }, "_handleError"),
                                resendEmailEvent$Action: o(function() {
                                    return Promise.resolve().then(function() {
                                        var i = d.clone();
                                        return a.handleForgotPassword$Action(a.callContext(i))
                                    })
                                }, "resendEmailEvent$Action"),
                                closeEvent$Action: o(function() {
                                    var i = d.clone();
                                    a.closeModal$Action(a.callContext(i))
                                }, "closeEvent$Action")
                            },
                            _validationProps: {
                                validationService: g
                            },
                            _idProps: {
                                service: e,
                                uuid: "42",
                                alias: "11"
                            },
                            _widgetRecordProvider: r,
                            _dependencies: []
                        }), t.createElement(H, {
                            getOwnerSpan: o(function() {
                                return l.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return l.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                Platform: n.getCachedValue(e.getId("uMrRyso+OE67HbcHTzlUdg.Platform"), function() {
                                    return p.getTradingPlatformDxtradePasswordReset() !== c.BuiltinFunctions.nullTextIdentifier() ? "dxtrade" : p.getTradingPlatformMt5PasswordReset() !== c.BuiltinFunctions.nullTextIdentifier() ? "mt5" : ""
                                }, function() {
                                    return p.getTradingPlatformDxtradePasswordReset()
                                }, function() {
                                    return p.getTradingPlatformMt5PasswordReset()
                                }),
                                IsVisible: n.getCachedValue(e.getId("uMrRyso+OE67HbcHTzlUdg.IsVisible"), function() {
                                    return p.getTradingPlatformDxtradePasswordReset() !== c.BuiltinFunctions.nullTextIdentifier() || p.getTradingPlatformMt5PasswordReset() !== c.BuiltinFunctions.nullTextIdentifier() || n.variables.showModalVar === "ShowResetPasswordModal"
                                }, function() {
                                    return p.getTradingPlatformDxtradePasswordReset()
                                }, function() {
                                    return p.getTradingPlatformMt5PasswordReset()
                                }, function() {
                                    return n.variables.showModalVar
                                })
                            },
                            events: {
                                _handleError: o(function(i) {
                                    a.handleError(i)
                                }, "_handleError"),
                                closeEvent$Action: o(function() {
                                    var i = d.clone();
                                    a.closeModal$Action(a.callContext(i))
                                }, "closeEvent$Action")
                            },
                            _validationProps: {
                                validationService: g
                            },
                            _idProps: {
                                service: e,
                                uuid: "43",
                                alias: "12"
                            },
                            _widgetRecordProvider: r,
                            _dependencies: []
                        }), t.createElement(O, {
                            extendedProperties: {
                                style: "padding: 16px;"
                            },
                            showPopup: n.variables.showModalVar === "ShowCtraderTradeModal",
                            style: "popup-dialog full-height-popup position-relative vertical-scroll",
                            _idProps: {
                                service: e,
                                name: "CTraderTradeModal"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(s, {
                            align: 0,
                            animate: !1,
                            extendedEvents: {
                                onClick: o(function() {
                                    var i = d.clone();
                                    a.closeModal$Action(a.callContext(i))
                                }, "onClick")
                            },
                            extendedProperties: {
                                style: "border-color: #E9ECEF; border-style: none none solid none; border-width: 0px 0px 1px 0px; padding: 14px 16px;"
                            },
                            style: "display-flex align-items-center justify-content-space-between",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "CTraderModalHeader"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(P, {
                            extendedProperties: {
                                style: "font-size: 18px; font-weight: bold;"
                            },
                            text: [_(C("OCz0hXmuWkyl8t70dVamrA#Value", "Account details"))],
                            _idProps: {
                                service: e,
                                uuid: "46"
                            },
                            _widgetRecordProvider: r
                        }), t.createElement(m, {
                            gridProperties: {
                                classes: "ThemeGrid_MarginGutter"
                            },
                            image: c.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standaloneSMClose.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                name: "CloseIcon"
                            },
                            _widgetRecordProvider: r
                        })), t.createElement(s, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "padding: 16px;"
                            },
                            style: "cTrader-content",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "Content"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(s, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "padding: 16px 0;"
                            },
                            style: "display-flex align-items-center justify-content-space-between",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "ProductDetailsContainer"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(s, {
                            align: 0,
                            animate: !1,
                            style: "display-flex align-items-center",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "LeftSide"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(s, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "height: 32px;"
                            },
                            gridProperties: {
                                classes: "OSInline",
                                width: "32px"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "Icon"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(m, {
                            image: c.Navigation.VersionedURL.getVersionedUrl("img/tradershub.derivctrader.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "52"
                            },
                            _widgetRecordProvider: r
                        })), t.createElement(s, {
                            align: 0,
                            animate: !1,
                            gridProperties: {
                                marginLeft: "16px"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "53"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(x, {
                            extendedProperties: {
                                style: "font-size: 16px; font-weight: bold;"
                            },
                            style: "display-block",
                            value: "Deriv cTrader",
                            _idProps: {
                                service: e,
                                name: "ProductName"
                            },
                            _widgetRecordProvider: r
                        }), b(n.variables.accountCreationLoadingVar, !1, this, function() {
                            return [t.createElement(s, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "border-radius: 4px; height: 22px;"
                                },
                                gridProperties: {
                                    classes: "OSInline",
                                    width: "103px"
                                },
                                style: "skeleton",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "55"
                                },
                                _widgetRecordProvider: r
                            })]
                        }, function() {
                            return [t.createElement(x, {
                                value: "Total balance: " + n.variables.totalCTraderBalanceVar,
                                _idProps: {
                                    service: e,
                                    name: "Balance"
                                },
                                _widgetRecordProvider: r
                            })]
                        }))), t.createElement(s, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "RightSide"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(y, {
                            enabled: !n.variables.accountCreationLoadingVar,
                            isDefault: !1,
                            onClick: o(function() {
                                try {
                                    c.Navigation.navigateTo(c.Navigation.generateScreenURL("tradershub", "wallets", {}), c.Transitions.createTransition(c.Transitions.TransitionAnimation.Fade), null, !0)
                                } catch (i) {
                                    if (i.name !== "RedirectOccurredException") throw i
                                }
                            }, "onClick"),
                            style: "btn-primary transfer-btn cursor-pointer",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "58"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(m, {
                            image: c.Navigation.VersionedURL.getVersionedUrl("img/tradershub.StandaloneSMArrowUpArrowDown.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "59"
                            },
                            _widgetRecordProvider: r
                        }), t.createElement(P, {
                            style: "",
                            text: [_(C("Uf5OBOrWnECoHZ4vpRHwPQ#Value", "Transfer"))],
                            _idProps: {
                                service: e,
                                uuid: "60"
                            },
                            _widgetRecordProvider: r
                        })))), b(n.variables.accountCreationLoadingVar, !1, this, function() {
                            return [t.createElement(s, {
                                align: 0,
                                animate: !1,
                                style: "list list-group",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "61"
                                },
                                _widgetRecordProvider: r
                            }, t.createElement(s, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "border-radius: 4px; height: 42px; margin-top: 8px;"
                                },
                                style: "skeleton",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "62"
                                },
                                _widgetRecordProvider: r
                            }), t.createElement(s, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "border-radius: 4px; height: 42px; margin-top: 8px;"
                                },
                                style: "skeleton",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "63"
                                },
                                _widgetRecordProvider: r
                            }), t.createElement(s, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "border-radius: 4px; height: 42px; margin-top: 8px;"
                                },
                                style: "skeleton",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "64"
                                },
                                _widgetRecordProvider: r
                            }), t.createElement(s, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "border-radius: 4px; height: 42px; margin-top: 8px;"
                                },
                                style: "skeleton",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "65"
                                },
                                _widgetRecordProvider: r
                            }))]
                        }, function() {
                            return [t.createElement(S, {
                                animateItems: !0,
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                mode: 0,
                                source: n.variables.createdCtraderAccountsVar,
                                style: "list list-group",
                                tag: "div",
                                _idProps: {
                                    service: e,
                                    name: "CreatedCtraderAccount"
                                },
                                _widgetRecordProvider: r,
                                placeholders: {
                                    content: new h(function(i, u) {
                                        return [t.createElement(s, {
                                            align: 0,
                                            animate: !1,
                                            style: "ctrader-list-item",
                                            visible: !0,
                                            _idProps: {
                                                service: i,
                                                uuid: "67"
                                            },
                                            _widgetRecordProvider: r,
                                            _dependencies: [v(n.variables.createdCtraderAccountsVar.getCurrent(u.iterationContext).currencyAttr), v(n.variables.createdCtraderAccountsVar.getCurrent(u.iterationContext).display_balanceAttr), v(n.variables.createdCtraderAccountsVar.getCurrent(u.iterationContext).loginAttr)]
                                        }, t.createElement(x, {
                                            value: n.variables.createdCtraderAccountsVar.getCurrent(u.iterationContext).loginAttr,
                                            _idProps: {
                                                service: i,
                                                name: "AccountId"
                                            },
                                            _widgetRecordProvider: r
                                        }), t.createElement(x, {
                                            gridProperties: {
                                                classes: "ThemeGrid_MarginGutter"
                                            },
                                            value: n.variables.createdCtraderAccountsVar.getCurrent(u.iterationContext).display_balanceAttr + " " + n.variables.createdCtraderAccountsVar.getCurrent(u.iterationContext).currencyAttr,
                                            _idProps: {
                                                service: i,
                                                name: "Balance2"
                                            },
                                            _widgetRecordProvider: r
                                        }))]
                                    }, d, e, "4")
                                },
                                _dependencies: []
                            })]
                        }), b(p.getAccountType() === "real" && n.variables.cTraderAvailableAccountsCountVar > 0 && !n.variables.accountCreationLoadingVar, !1, this, function() {
                            return [t.createElement(s, {
                                align: 0,
                                animate: !1,
                                extendedEvents: {
                                    onClick: o(function() {
                                        return Promise.resolve().then(function() {
                                            var i = d.clone();
                                            return a.cTraderAccountCreation$Action(n.variables.selectedAccountVar.market_typeAttr, "svg", a.callContext(i))
                                        })
                                    }, "onClick")
                                },
                                style: "add-another-account",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    name: "AddAnotherAccount"
                                },
                                _widgetRecordProvider: r
                            }, t.createElement(m, {
                                image: c.Navigation.VersionedURL.getVersionedUrl("img/tradershub.StandaloneSMCirclePlus.svg"),
                                type: 0,
                                _idProps: {
                                    service: e,
                                    uuid: "71"
                                },
                                _widgetRecordProvider: r
                            }), t.createElement(P, {
                                extendedProperties: {
                                    style: "font-size: 12px; margin-left: 8px;"
                                },
                                text: [_(C("rTRSwoFKKEKAGR1loRTOKg#Value", "Get another cTrader account"))],
                                _idProps: {
                                    service: e,
                                    uuid: "72"
                                },
                                _widgetRecordProvider: r
                            }))]
                        }, function() {
                            return []
                        }), t.createElement(N, {
                            getOwnerSpan: o(function() {
                                return l.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return l.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: o(function(i) {
                                    a.handleError(i)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: g
                            },
                            _idProps: {
                                service: e,
                                uuid: "73",
                                alias: "13"
                            },
                            _widgetRecordProvider: r,
                            _dependencies: []
                        }), t.createElement(z, {
                            getOwnerSpan: o(function() {
                                return l.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return l.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                IsDowntime: n.variables.isDowntimeVar,
                                InfoMessage: c.Injector.resolve(c.ServiceNames.TranslationsService).getMessage("SZXn4Qwm+UyjqaIt1JAK9Q#Value.1054975282.1", "Scheduled downtime: Monthly on the first Saturday, 07:00-10:00 GMT. Service may be affected.")
                            },
                            events: {
                                _handleError: o(function(i) {
                                    a.handleError(i)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: g
                            },
                            _idProps: {
                                service: e,
                                uuid: "74",
                                alias: "14"
                            },
                            _widgetRecordProvider: r,
                            _dependencies: []
                        }), t.createElement(s, {
                            align: 0,
                            animate: !1,
                            style: "ctrader-redirections-desktop",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "DesktopView"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(y, {
                            enabled: !n.variables.accountCreationLoadingVar,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            isDefault: !1,
                            onClick: o(function() {
                                return Promise.resolve().then(function() {
                                    var i = d.clone();
                                    return a.ctraderWebTerminalOnClick$Action(a.callContext(i))
                                })
                            }, "onClick"),
                            style: "btn btn-primary",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "76"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(m, {
                            image: c.Navigation.VersionedURL.getVersionedUrl("img/tradershub.GlobeSM.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "77"
                            },
                            _widgetRecordProvider: r
                        }), t.createElement(P, {
                            extendedProperties: {
                                style: "font-size: 16px; margin-left: 8px;"
                            },
                            text: [_(C("6TjMUvHPwUS+xNrg2ludqA#Value", "cTrader web terminal"))],
                            _idProps: {
                                service: e,
                                uuid: "78"
                            },
                            _widgetRecordProvider: r
                        })), t.createElement(A, {
                            enabled: !n.variables.accountCreationLoadingVar,
                            extendedProperties: {
                                target: "_blank",
                                style: "border-color: #101213; border-radius: 100px; border-style: solid; border-width: 1px; height: 48px; margin-top: 16px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            onClick: o(function() {
                                var i = d.clone();
                                a.ctraderAppOnClick$Action(a.callContext(i))
                            }, "onClick"),
                            style: "display-flex align-items-center justify-content-center",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "79"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(m, {
                            image: c.Navigation.VersionedURL.getVersionedUrl("img/tradershub.LaptopSM.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "80"
                            },
                            _widgetRecordProvider: r
                        }), t.createElement(P, {
                            extendedProperties: {
                                style: "color: #101213; font-size: 16px; margin-left: 8px; margin-top: 1px;"
                            },
                            style: "hide-text-decoration",
                            text: ["cTrader app"],
                            _idProps: {
                                service: e,
                                uuid: "81"
                            },
                            _widgetRecordProvider: r
                        })), t.createElement(s, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-top: 16px;"
                            },
                            style: "display-flex align-items-center",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "82"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(P, {
                            extendedProperties: {
                                style: "color: #101213; font-size: 12px;"
                            },
                            text: [_(C("ziprPFD7EkSdo7J5KDfmWg#Value", "Also available on "))],
                            _idProps: {
                                service: e,
                                uuid: "83"
                            },
                            _widgetRecordProvider: r
                        }), t.createElement(A, {
                            enabled: !0,
                            extendedProperties: {
                                target: "_blank"
                            },
                            gridProperties: {
                                marginLeft: "4px"
                            },
                            style: "hide-text-decoration",
                            transition: c.Transitions.createTransition(c.Transitions.TransitionAnimation.Fade),
                            url: c.Navigation.generateScreenURL("https://getctradermac.com/deriv/ctrader-deriv-setup.dmg", {}),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "84"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(P, {
                            extendedProperties: {
                                style: "color: #101213; font-size: 12px; text-decoration: underline;"
                            },
                            style: "cursor-pointer",
                            text: ["macOS"],
                            _idProps: {
                                service: e,
                                uuid: "85"
                            },
                            _widgetRecordProvider: r
                        })), t.createElement(P, {
                            extendedProperties: {
                                style: "color: #101213; font-size: 12px;"
                            },
                            text: ["."],
                            _idProps: {
                                service: e,
                                uuid: "86"
                            },
                            _widgetRecordProvider: r
                        })), t.createElement(s, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "border-color: #F1F3F5; border-radius: 4px; border-style: solid; border-width: 1px; margin-top: 16px; padding: 8px;"
                            },
                            style: "display-flex align-items-center flex-direction-column",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "87"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(m, {
                            extendedProperties: {
                                style: "height: 80px; margin-bottom: 8px;"
                            },
                            gridProperties: {
                                width: "80px"
                            },
                            image: c.Navigation.VersionedURL.getVersionedUrl("img/tradershub.CTraderQRCode.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "88"
                            },
                            _widgetRecordProvider: r
                        }), t.createElement(P, {
                            extendedProperties: {
                                style: "color: #333333; font-size: 12px;"
                            },
                            text: [_(C("0e2EeJnN8kq1qWvcZh_mqQ#Value", "Scan to download the mobile app."))],
                            _idProps: {
                                service: e,
                                uuid: "89"
                            },
                            _widgetRecordProvider: r
                        }))), t.createElement(s, {
                            align: 0,
                            animate: !1,
                            style: "mobile-btn",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "MobileView"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(y, {
                            enabled: !n.variables.accountCreationLoadingVar,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            isDefault: !1,
                            onClick: o(function() {
                                var i = d.clone();
                                a.ctraderAppOnClick$Action(a.callContext(i))
                            }, "onClick"),
                            style: "btn btn-primary",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "91"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(m, {
                            image: c.Navigation.VersionedURL.getVersionedUrl("img/tradershub.MobileNotchSM.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "92"
                            },
                            _widgetRecordProvider: r
                        }), t.createElement(P, {
                            extendedProperties: {
                                style: "font-size: 16px; margin-left: 8px;"
                            },
                            text: [_(C("hfFybrN+3EKEJmcq_zJFjw#Value", "cTrader app"))],
                            _idProps: {
                                service: e,
                                uuid: "93"
                            },
                            _widgetRecordProvider: r
                        }))))), t.createElement(G, {
                            getOwnerSpan: o(function() {
                                return l.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return l.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                IsDowntime: n.variables.isDowntimeVar,
                                IsVisible: n.variables.showModalVar === "ShowMT5TradeModal",
                                SelectedAccount: n.variables.selectedAccountVar
                            },
                            events: {
                                _handleError: o(function(i) {
                                    a.handleError(i)
                                }, "_handleError"),
                                closeEvent$Action: o(function() {
                                    var i = d.clone();
                                    a.closeModal$Action(a.callContext(i))
                                }, "closeEvent$Action"),
                                forgotPasswordEvent$Action: o(function() {
                                    return Promise.resolve().then(function() {
                                        var i = d.clone();
                                        return a.handleForgotPassword$Action(a.callContext(i))
                                    })
                                }, "forgotPasswordEvent$Action")
                            },
                            _validationProps: {
                                validationService: g
                            },
                            _idProps: {
                                service: e,
                                uuid: "94",
                                alias: "15"
                            },
                            _widgetRecordProvider: r,
                            _dependencies: []
                        }), t.createElement(j, {
                            getOwnerSpan: o(function() {
                                return l.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return l.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                SelectedAccount: n.variables.selectedAccountVar,
                                IsDowntime: n.variables.isDowntimeVar,
                                IsVisible: n.variables.showModalVar === "ShowDxtradeTradeModal"
                            },
                            events: {
                                _handleError: o(function(i) {
                                    a.handleError(i)
                                }, "_handleError"),
                                closeEvent$Action: o(function() {
                                    var i = d.clone();
                                    a.closeModal$Action(a.callContext(i))
                                }, "closeEvent$Action"),
                                forgotPasswordEvent$Action: o(function() {
                                    return Promise.resolve().then(function() {
                                        var i = d.clone();
                                        return a.handleForgotPassword$Action(a.callContext(i))
                                    })
                                }, "forgotPasswordEvent$Action")
                            },
                            _validationProps: {
                                validationService: g
                            },
                            _idProps: {
                                service: e,
                                uuid: "95",
                                alias: "16"
                            },
                            _widgetRecordProvider: r,
                            _dependencies: []
                        }), t.createElement(O, {
                            showPopup: n.variables.showModalVar === "ShowVerificationModal",
                            style: "popup-dialog full-height-popup",
                            _idProps: {
                                service: e,
                                name: "CompleteProfileSetupPopup"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(s, {
                            align: 0,
                            animate: !1,
                            extendedEvents: {
                                onClick: o(function() {
                                    var i = d.clone();
                                    a.closeModal$Action(a.callContext(i))
                                }, "onClick")
                            },
                            extendedProperties: {
                                style: "border-color: #E9ECEF; border-style: none none solid none; border-width: 0px 0px 1px 0px; padding: 14px 16px;"
                            },
                            style: "display-flex align-items-center justify-content-space-between",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "ModalHeader"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(P, {
                            extendedProperties: {
                                style: "font-size: 18px; font-weight: bold;"
                            },
                            text: [_(C("xXAVh9qEtUyqxzPQu4w1sg#Value", "Complete profile setup"))],
                            _idProps: {
                                service: e,
                                uuid: "98"
                            },
                            _widgetRecordProvider: r
                        }), t.createElement(m, {
                            extendedEvents: {
                                onClick: o(function() {
                                    var i = d.clone();
                                    a.closeModal$Action(a.callContext(i))
                                }, "onClick")
                            },
                            gridProperties: {
                                classes: "ThemeGrid_MarginGutter"
                            },
                            image: c.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standaloneSMClose.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                name: "CloseIcon2"
                            },
                            _widgetRecordProvider: r
                        })), t.createElement(s, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "padding: 16px;"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "100"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(x, {
                            value: c.Injector.resolve(c.ServiceNames.TranslationsService).getMessage("II53sjRiIkuTXIFqvDcfDw#ValueExpression.-513209657.1", "To enable your MT5 ") + n.variables.selectedAccountVar.labelAttr + c.Injector.resolve(c.ServiceNames.TranslationsService).getMessage("II53sjRiIkuTXIFqvDcfDw#ValueExpression.489677834.1", " account, complete these steps."),
                            _idProps: {
                                service: e,
                                uuid: "101"
                            },
                            _widgetRecordProvider: r
                        }), t.createElement(S, {
                            animateItems: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            mode: 0,
                            source: n.variables.profileSetupVar,
                            style: "list list-group",
                            tag: "div",
                            _idProps: {
                                service: e,
                                uuid: "102"
                            },
                            _widgetRecordProvider: r,
                            placeholders: {
                                content: new h(function(i, u) {
                                    return [t.createElement(K, {
                                        getOwnerSpan: o(function() {
                                            return l.getChildSpan("render")
                                        }, "getOwnerSpan"),
                                        getOwnerDisposeSpan: o(function() {
                                            return l.getChildSpan("destroy")
                                        }, "getOwnerDisposeSpan"),
                                        inputs: {
                                            Icon: n.variables.profileSetupVar.getCurrent(u.iterationContext).iconAttr,
                                            Description: n.variables.profileSetupVar.getCurrent(u.iterationContext).descriptionAttr,
                                            IsDisabled: n.variables.profileSetupVar.getCurrent(u.iterationContext).isDisabledAttr,
                                            Status: n.variables.profileSetupVar.getCurrent(u.iterationContext).statusLabelAttr,
                                            Title: n.variables.profileSetupVar.getCurrent(u.iterationContext).titleAttr
                                        },
                                        events: {
                                            _handleError: o(function(f) {
                                                a.handleError(f)
                                            }, "_handleError"),
                                            redirectToEvent$Action: o(function() {
                                                return Promise.resolve().then(function() {
                                                    var f = u.clone();
                                                    return a.redirectToKYC$Action(n.variables.profileSetupVar.getCurrent(u.iterationContext).identifierAttr === "poi" ? "proof-of-identity" : n.variables.profileSetupVar.getCurrent(u.iterationContext).identifierAttr === "poa" ? "proof-of-address" : "personal-details", a.callContext(f))
                                                })
                                            }, "redirectToEvent$Action")
                                        },
                                        _validationProps: {
                                            validationService: g
                                        },
                                        _idProps: {
                                            service: i,
                                            uuid: "103",
                                            alias: "17"
                                        },
                                        _widgetRecordProvider: r,
                                        _dependencies: []
                                    })]
                                }, d, e, "5")
                            },
                            _dependencies: []
                        }))), t.createElement(q, {
                            getOwnerSpan: o(function() {
                                return l.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return l.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                IsVisible: n.variables.showModalVar === "ShowBOLocksModal",
                                status: n.getCachedValue(e.getId("CDOpJh+uPEuN8QUSO+rRSg.status"), function() {
                                    return n.variables.selectedAccountVar.statusAttr !== c.BuiltinFunctions.nullTextIdentifier() ? n.variables.selectedAccountVar.statusAttr : "under_maintenance"
                                }, function() {
                                    return n.variables.selectedAccountVar.statusAttr
                                })
                            },
                            events: {
                                _handleError: o(function(i) {
                                    a.handleError(i)
                                }, "_handleError"),
                                closeBOLockModal$Action: o(function() {
                                    var i = d.clone();
                                    a.closeModal$Action(a.callContext(i))
                                }, "closeBOLockModal$Action")
                            },
                            _validationProps: {
                                validationService: g
                            },
                            _idProps: {
                                service: e,
                                uuid: "104",
                                alias: "18"
                            },
                            _widgetRecordProvider: r,
                            _dependencies: []
                        }), t.createElement(J, {
                            getOwnerSpan: o(function() {
                                return l.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return l.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                IsVisible: n.variables.showModalVar === "CompleteYourProfile"
                            },
                            events: {
                                _handleError: o(function(i) {
                                    a.handleError(i)
                                }, "_handleError"),
                                updateProfile$Action: o(function() {
                                    return Promise.resolve().then(function() {
                                        var i = d.clone();
                                        return a.redirectToKYC$Action("account/personal-details", a.callContext(i))
                                    })
                                }, "updateProfile$Action"),
                                closeEvent$Action: o(function() {
                                    var i = d.clone();
                                    a.closeModal$Action(a.callContext(i))
                                }, "closeEvent$Action")
                            },
                            _validationProps: {
                                validationService: g
                            },
                            _idProps: {
                                service: e,
                                uuid: "105",
                                alias: "19"
                            },
                            _widgetRecordProvider: r,
                            _dependencies: []
                        }), t.createElement(s, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "NoFiatWallet"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(O, {
                            extendedProperties: {
                                style: "height: 100%; margin-top: 0px; padding: 16px;"
                            },
                            showPopup: n.variables.showModalVar === "SelectAWalletModal",
                            style: "full-height-popup display-flex flex-direction-column gap-m",
                            _idProps: {
                                service: e,
                                name: "SelectWalletDesktopPopup"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(s, {
                            align: 0,
                            animate: !1,
                            extendedEvents: {
                                onClick: o(function() {
                                    var i = d.clone();
                                    a.closeModal$Action(a.callContext(i))
                                }, "onClick")
                            },
                            extendedProperties: {
                                style: "padding: 16px;"
                            },
                            style: "display-flex justify-content-space-between align-items-center",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "SelectWalletHeader"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(x, {
                            extendedProperties: {
                                style: "font-size: 18px; font-weight: bold;"
                            },
                            value: "Select a Wallet",
                            _idProps: {
                                service: e,
                                name: "SelectWallet"
                            },
                            _widgetRecordProvider: r
                        }), t.createElement(m, {
                            extendedEvents: {
                                onClick: o(function() {
                                    var i = d.clone();
                                    a.closeModal$Action(a.callContext(i))
                                }, "onClick")
                            },
                            gridProperties: {
                                classes: "ThemeGrid_MarginGutter"
                            },
                            image: c.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standaloneSMClose.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                name: "CloseIcon3"
                            },
                            _widgetRecordProvider: r
                        })), t.createElement(s, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "padding: 16px;"
                            },
                            style: "display-flex flex-direction-column display-flex flex-1 gap-m",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "SelectWalletContent"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(x, {
                            extendedProperties: {
                                style: "font-size: 16px;"
                            },
                            value: "To trade CFDs, choose a Wallet in your preferred currency from the options below.",
                            _idProps: {
                                service: e,
                                name: "SelectWalletDescription"
                            },
                            _widgetRecordProvider: r
                        }), t.createElement(s, {
                            align: 0,
                            animate: !1,
                            extendedEvents: {
                                onClick: o(function() {
                                    return Promise.resolve().then(function() {
                                        var i = d.clone();
                                        return a.addNewWalletOnClick$Action("USD", a.callContext(i))
                                    })
                                }, "onClick")
                            },
                            extendedProperties: {
                                style: "background-color: #f3f6f8; border-radius: 4px; font-size: 16px; padding: 16px;"
                            },
                            style: "display-flex column-gap-m align-items-center",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "USD"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(m, {
                            gridProperties: {
                                width: "24px"
                            },
                            image: c.Navigation.VersionedURL.getVersionedUrl("img/tradershub.currencyusd.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "114"
                            },
                            _widgetRecordProvider: r
                        }), "US dollar (USD)"), t.createElement(s, {
                            align: 0,
                            animate: !1,
                            extendedEvents: {
                                onClick: o(function() {
                                    return Promise.resolve().then(function() {
                                        var i = d.clone();
                                        return a.addNewWalletOnClick$Action("EUR", a.callContext(i))
                                    })
                                }, "onClick")
                            },
                            extendedProperties: {
                                style: "background-color: #f3f6f8; border-radius: 4px; font-size: 16px; padding: 16px;"
                            },
                            style: "display-flex column-gap-m align-items-center",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "EUR"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(m, {
                            gridProperties: {
                                width: "24px"
                            },
                            image: c.Navigation.VersionedURL.getVersionedUrl("img/tradershub.currency_eur.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "116"
                            },
                            _widgetRecordProvider: r
                        }), "Euro (EUR)"), t.createElement(s, {
                            align: 0,
                            animate: !1,
                            extendedEvents: {
                                onClick: o(function() {
                                    return Promise.resolve().then(function() {
                                        var i = d.clone();
                                        return a.addNewWalletOnClick$Action("GBP", a.callContext(i))
                                    })
                                }, "onClick")
                            },
                            extendedProperties: {
                                style: "background-color: #f3f6f8; border-radius: 4px; font-size: 16px; padding: 16px;"
                            },
                            style: "display-flex column-gap-m align-items-center",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "GBP"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(m, {
                            gridProperties: {
                                width: "24px"
                            },
                            image: c.Navigation.VersionedURL.getVersionedUrl("img/tradershub.gbp.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "118"
                            },
                            _widgetRecordProvider: r
                        }), "Pound Sterling (GBP)"))), t.createElement(Q, {
                            getOwnerSpan: o(function() {
                                return l.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return l.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                ShowHandler: !0,
                                Shape: E.shape.rounded
                            },
                            events: {
                                _handleError: o(function(i) {
                                    a.handleError(i)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: g
                            },
                            _idProps: {
                                service: e,
                                name: "SelectWalletBottomSheet",
                                alias: "20"
                            },
                            _widgetRecordProvider: r,
                            placeholders: {
                                topBar: new R(function() {
                                    return [t.createElement(s, {
                                        align: 0,
                                        animate: !1,
                                        extendedEvents: {
                                            onClick: o(function() {
                                                var i = d.clone();
                                                a.closeBottomSheet$Action(a.callContext(i))
                                            }, "onClick")
                                        },
                                        extendedProperties: {
                                            style: "text-align: left;"
                                        },
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            name: "SelectWalletHeaderContainer"
                                        },
                                        _widgetRecordProvider: r
                                    }, t.createElement(x, {
                                        extendedProperties: {
                                            style: "font-size: 18px; font-weight: bold;"
                                        },
                                        value: "Select a Wallet",
                                        _idProps: {
                                            service: e,
                                            uuid: "121"
                                        },
                                        _widgetRecordProvider: r
                                    }))]
                                }),
                                content: new R(function() {
                                    return [t.createElement(s, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex flex-direction-column display-flex flex-1 gap-m",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            name: "WalletsList"
                                        },
                                        _widgetRecordProvider: r
                                    }, t.createElement(s, {
                                        align: 0,
                                        animate: !1,
                                        extendedProperties: {
                                            style: "text-align: left;"
                                        },
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "123"
                                        },
                                        _widgetRecordProvider: r
                                    }, t.createElement(x, {
                                        extendedProperties: {
                                            style: "font-size: 16px;"
                                        },
                                        value: "To trade CFDs, choose a Wallet in your preferred currency from the options below.",
                                        _idProps: {
                                            service: e,
                                            uuid: "124"
                                        },
                                        _widgetRecordProvider: r
                                    })), t.createElement(s, {
                                        align: 0,
                                        animate: !1,
                                        extendedEvents: {
                                            onClick: o(function() {
                                                return Promise.resolve().then(function() {
                                                    var i = d.clone();
                                                    return a.addNewWalletOnClick$Action("USD", a.callContext(i))
                                                })
                                            }, "onClick")
                                        },
                                        extendedProperties: {
                                            style: "background-color: #f3f6f8; border-radius: 4px; font-size: 16px; padding: 16px;"
                                        },
                                        style: "display-flex column-gap-m align-items-center",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            name: "USD2"
                                        },
                                        _widgetRecordProvider: r
                                    }, t.createElement(m, {
                                        gridProperties: {
                                            width: "24px"
                                        },
                                        image: c.Navigation.VersionedURL.getVersionedUrl("img/tradershub.currencyusd.svg"),
                                        type: 0,
                                        _idProps: {
                                            service: e,
                                            uuid: "126"
                                        },
                                        _widgetRecordProvider: r
                                    }), "US dollar (USD)"), t.createElement(s, {
                                        align: 0,
                                        animate: !1,
                                        extendedEvents: {
                                            onClick: o(function() {
                                                return Promise.resolve().then(function() {
                                                    var i = d.clone();
                                                    return a.addNewWalletOnClick$Action("EUR", a.callContext(i))
                                                })
                                            }, "onClick")
                                        },
                                        extendedProperties: {
                                            style: "background-color: #f3f6f8; border-radius: 4px; font-size: 16px; padding: 16px;"
                                        },
                                        style: "display-flex column-gap-m align-items-center",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            name: "EUR2"
                                        },
                                        _widgetRecordProvider: r
                                    }, t.createElement(m, {
                                        gridProperties: {
                                            width: "24px"
                                        },
                                        image: c.Navigation.VersionedURL.getVersionedUrl("img/tradershub.currency_eur.svg"),
                                        type: 0,
                                        _idProps: {
                                            service: e,
                                            uuid: "128"
                                        },
                                        _widgetRecordProvider: r
                                    }), "Euro (EUR)"), t.createElement(s, {
                                        align: 0,
                                        animate: !1,
                                        extendedEvents: {
                                            onClick: o(function() {
                                                return Promise.resolve().then(function() {
                                                    var i = d.clone();
                                                    return a.addNewWalletOnClick$Action("GBP", a.callContext(i))
                                                })
                                            }, "onClick")
                                        },
                                        extendedProperties: {
                                            style: "background-color: #f3f6f8; border-radius: 4px; font-size: 16px; padding: 16px;"
                                        },
                                        style: "display-flex column-gap-m align-items-center",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            name: "GBP2"
                                        },
                                        _widgetRecordProvider: r
                                    }, t.createElement(m, {
                                        gridProperties: {
                                            width: "24px"
                                        },
                                        image: c.Navigation.VersionedURL.getVersionedUrl("img/tradershub.gbp.svg"),
                                        type: 0,
                                        _idProps: {
                                            service: e,
                                            uuid: "130"
                                        },
                                        _widgetRecordProvider: r
                                    }), "Pound Sterling (GBP)"))]
                                })
                            },
                            _dependencies: []
                        }))]
                    })
                },
                _dependencies: [v(n.variables.profileSetupVar), v(n.variables.selectedAccountVar), v(n.variables.isDowntimeVar), v(n.variables.cTraderAvailableAccountsCountVar), v(p.getAccountType()), v(n.variables.createdCtraderAccountsVar), v(n.variables.accountCreationLoadingVar), v(p.getTradingPlatformMt5PasswordReset()), v(p.getTradingPlatformDxtradePasswordReset()), v(n.variables.isDxtradePasswordSetVar), v(n.variables.isMt5PasswordSetVar), v(n.variables.showModalVar), v(n.variables.selectedAvailableAccountVar), v(n.variables.availableCFDAccountsVar), v(n.variables.isEmptyVar), v(p.getTotalCTraderBalance()), v(n.variables.createdCFDAccountsVar), v(p.getAuthToken()), v(n.variables.dataLoadingVar), v(n.variables.hasRealAccountVar)]
            }))
        }
    };
o(w, "View");
var X = w,
    Me = X;
export {
    Me as
    default
};