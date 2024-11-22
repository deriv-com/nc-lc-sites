import {
    a as C
} from "./_oschunk-ATOOAW6I.js";
import {
    a as A
} from "./_oschunk-2GZAO7GM.js";
import "./_oschunk-EFUSIMB4.js";
import {
    a as f
} from "./_oschunk-RRERX77H.js";
import "./_oschunk-HBEXL7KK.js";
import "./_oschunk-NJYKWZYU.js";
import "./_oschunk-SW7FWAXZ.js";
import "./_oschunk-BHZNFATE.js";
import {
    h as a,
    j as b,
    k as w,
    l as h,
    r as u,
    u as S,
    y
} from "./_oschunk-HUOHOHZB.js";
import "./_oschunk-Y45M2O2K.js";
import {
    a as I,
    g as v,
    i as p
} from "./_oschunk-6LASTRK7.js";
import "./_oschunk-TIJZDWYD.js";
import "./_oschunk-27GDEXUT.js";
import "./_oschunk-D2MH3QEK.js";
import "./_oschunk-WJ75ZXAT.js";
import "./_oschunk-3WNR72F6.js";
import "./_oschunk-X4K3PA43.js";
import "./_oschunk-HQOLQB4T.js";
import {
    ia as R
} from "./_oschunk-NTQBNJ73.js";
import {
    c as o,
    g as M
} from "./_oschunk-DVBKI63I.js";
var e = M(I());
var g = R,
    m = p.PlaceholderContent,
    F = p.IteratorPlaceholderContent,
    d = class d extends v.BaseWebScreen {
        static get displayName() {
            return "MainFlow.AddMoreAccount"
        }
        static getAttributes() {
            return {
                codeFunction: "AddMoreAccount",
                functionKey: "de40aa49-71ae-4f57-98a5-28fc3207d7a0",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.MainFlow.AddMoreAccount.css", "css/tradershub.AccountCreation.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [f]
        }
        get modelFactory() {
            return C
        }
        get controllerFactory() {
            return A
        }
        get title() {
            return v.BaseWebScreen.getTranslation("SapA3q5xV0+YpSj8MgfXoA#Title", "AddMoreAccount")
        }
        internalRender() {
            let n = this.model,
                c = this.controller,
                r = this.idService,
                O = c.validationService,
                t = this.widgetsRecordProvider,
                x = c.callContext(),
                E = d.ifWidget,
                W = d.textWidget,
                l = d.asPrimitiveValue,
                V = d.getTranslation,
                _ = this;
            return e.createElement("div", this.getRootNodeProperties(), e.createElement(f, {
                getOwnerSpan: o(function() {
                    return _.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return _.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: o(function(i) {
                        c.handleError(i)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: O
                },
                _idProps: {
                    service: r,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: t,
                placeholders: {
                    content: new m(function() {
                        return [e.createElement(a, {
                            align: 0,
                            animate: !1,
                            style: "add-more-accounts_header",
                            visible: !0,
                            _idProps: {
                                service: r,
                                name: "HeaderContainer"
                            },
                            _widgetRecordProvider: t
                        }, e.createElement(S, {
                            enabled: !0,
                            onClick: o(function() {
                                try {
                                    g.Navigation.navigateBack(null, null, !0)
                                } catch (i) {
                                    if (i.name !== "RedirectOccurredException") throw i
                                }
                            }, "onClick"),
                            style: "",
                            visible: !0,
                            _idProps: {
                                service: r,
                                uuid: "2"
                            },
                            _widgetRecordProvider: t
                        }, e.createElement(a, {
                            align: 0,
                            animate: !1,
                            style: "display-flex align-items-center justify-content-space-between",
                            visible: !0,
                            _idProps: {
                                service: r,
                                name: "Header"
                            },
                            _widgetRecordProvider: t
                        }, e.createElement(a, {
                            align: 0,
                            animate: !1,
                            style: "display-flex align-items-center",
                            visible: !0,
                            _idProps: {
                                service: r,
                                name: "Left"
                            },
                            _widgetRecordProvider: t
                        }, e.createElement(a, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-right: 16px;"
                            },
                            style: "display-flex align-items-center justify-content-center",
                            visible: !0,
                            _idProps: {
                                service: r,
                                name: "Arrow"
                            },
                            _widgetRecordProvider: t
                        }, e.createElement(u, {
                            image: g.Navigation.VersionedURL.getVersionedUrl("img/tradershub.arrowleft.svg"),
                            type: 0,
                            _idProps: {
                                service: r,
                                uuid: "6"
                            },
                            _widgetRecordProvider: t
                        })), e.createElement(y, {
                            extendedProperties: {
                                style: "color: #272B30; font-size: 18px; font-weight: bold;"
                            },
                            text: [W(V("F0t1v8lfSECi5gyVgpCp5A#Value", "Add more accounts"))],
                            _idProps: {
                                service: r,
                                uuid: "7"
                            },
                            _widgetRecordProvider: t
                        })), e.createElement(a, {
                            align: 0,
                            animate: !1,
                            style: "show-close-icon",
                            visible: !0,
                            _idProps: {
                                service: r,
                                name: "Right"
                            },
                            _widgetRecordProvider: t
                        }, e.createElement(u, {
                            image: g.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standaloneSMClose.svg"),
                            type: 0,
                            _idProps: {
                                service: r,
                                uuid: "9"
                            },
                            _widgetRecordProvider: t
                        }))))), e.createElement(a, {
                            align: 0,
                            animate: !1,
                            style: "add-more-accounts_content",
                            visible: !0,
                            _idProps: {
                                service: r,
                                name: "CurrenciesContainer"
                            },
                            _widgetRecordProvider: t
                        }, E(n.variables.isLoadingVar, !1, this, function() {
                            return [e.createElement(a, {
                                align: 0,
                                animate: !1,
                                style: "add-more-accounts_item skeleton",
                                visible: !0,
                                _idProps: {
                                    service: r,
                                    uuid: "11"
                                },
                                _widgetRecordProvider: t
                            })]
                        }, function() {
                            return [e.createElement(w, {
                                animateItems: !0,
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                mode: 0,
                                source: n.variables.availableAccountsVar,
                                style: "list list-group",
                                tag: "div",
                                _idProps: {
                                    service: r,
                                    uuid: "12"
                                },
                                _widgetRecordProvider: t,
                                placeholders: {
                                    content: new F(function(i, s) {
                                        return [e.createElement(h, {
                                            onClick: o(function() {
                                                return Promise.resolve().then(function() {
                                                    var L = s.clone();
                                                    return c.addNewAccountAction$Action(c.callContext(L))
                                                })
                                            }, "onClick"),
                                            style: '"list-item"',
                                            triggerActionOnFullSwipeLeft: !0,
                                            triggerActionOnFullSwipeRight: !0,
                                            _idProps: {
                                                service: i,
                                                name: "ListItem1"
                                            },
                                            _widgetRecordProvider: t,
                                            placeholders: {
                                                leftActions: m.Empty,
                                                content: new m(function() {
                                                    return [e.createElement(a, {
                                                        align: 0,
                                                        animate: !1,
                                                        gridProperties: {
                                                            classes: "OSInline"
                                                        },
                                                        style: "add-more-accounts_item",
                                                        visible: !0,
                                                        _idProps: {
                                                            service: i,
                                                            uuid: "14"
                                                        },
                                                        _widgetRecordProvider: t
                                                    }, e.createElement(a, {
                                                        align: 0,
                                                        animate: !1,
                                                        style: "display-flex align-items-center",
                                                        visible: !0,
                                                        _idProps: {
                                                            service: i,
                                                            name: "LeftSide"
                                                        },
                                                        _widgetRecordProvider: t
                                                    }, e.createElement(a, {
                                                        align: 0,
                                                        animate: !1,
                                                        extendedProperties: {
                                                            style: "border-radius: 100%; height: 24px; margin-right: 8px; overflow: hidden;"
                                                        },
                                                        gridProperties: {
                                                            classes: "OSInline",
                                                            width: "24px"
                                                        },
                                                        visible: !0,
                                                        _idProps: {
                                                            service: i,
                                                            name: "IconContainer"
                                                        },
                                                        _widgetRecordProvider: t
                                                    }, e.createElement(u, {
                                                        type: 1,
                                                        url: n.variables.availableAccountsVar.getCurrent(s.iterationContext).iconAttr,
                                                        _idProps: {
                                                            service: i,
                                                            uuid: "17"
                                                        },
                                                        _widgetRecordProvider: t
                                                    })), e.createElement(b, {
                                                        extendedProperties: {
                                                            style: "color: #101213; font-size: 14px;"
                                                        },
                                                        value: n.variables.availableAccountsVar.getCurrent(s.iterationContext).nameAttr + " (" + n.variables.availableAccountsVar.getCurrent(s.iterationContext).codeAttr + ")",
                                                        _idProps: {
                                                            service: i,
                                                            name: "CurrencyName"
                                                        },
                                                        _widgetRecordProvider: t
                                                    })), e.createElement(a, {
                                                        align: 0,
                                                        animate: !1,
                                                        gridProperties: {
                                                            marginLeft: "8px"
                                                        },
                                                        style: "display-flex align-items-center justify-content-center",
                                                        visible: !0,
                                                        _idProps: {
                                                            service: i,
                                                            name: "RightSide"
                                                        },
                                                        _widgetRecordProvider: t
                                                    }, e.createElement(u, {
                                                        image: g.Navigation.VersionedURL.getVersionedUrl("img/tradershub.CirclePlusMd2.svg"),
                                                        type: 0,
                                                        _idProps: {
                                                            service: i,
                                                            uuid: "20"
                                                        },
                                                        _widgetRecordProvider: t
                                                    })))]
                                                }),
                                                rightActions: m.Empty
                                            },
                                            _dependencies: [l(n.variables.availableAccountsVar.getCurrent(s.iterationContext).codeAttr), l(n.variables.availableAccountsVar.getCurrent(s.iterationContext).nameAttr), l(n.variables.availableAccountsVar.getCurrent(s.iterationContext).iconAttr)]
                                        })]
                                    }, x, r, "1")
                                },
                                _dependencies: []
                            })]
                        }))]
                    })
                },
                _dependencies: [l(n.variables.availableAccountsVar), l(n.variables.isLoadingVar)]
            }))
        }
    };
o(d, "View");
var P = d,
    z = P;
export {
    z as
    default
};