import {
    a as Z
} from "./_oschunk-LRRVK5UI.js";
import {
    a as J
} from "./_oschunk-3HGSK7MY.js";
import "./_oschunk-TPECJ72M.js";
import {
    a as k,
    b as M,
    c as I,
    d as F,
    e as L,
    f as $,
    g as U,
    h as H,
    i as B,
    j as N,
    k as z,
    l as G,
    m as j
} from "./_oschunk-WEAGBNUF.js";
import "./_oschunk-FLQXSIWE.js";
import {
    a as T
} from "./_oschunk-BCSV5WA3.js";
import "./_oschunk-AFJAHMER.js";
import "./_oschunk-ZPOVFLPT.js";
import "./_oschunk-I2ZHC7XU.js";
import "./_oschunk-O2UMTF2I.js";
import "./_oschunk-ZSU2JK2M.js";
import {
    a as D
} from "./_oschunk-2XEJTRYG.js";
import "./_oschunk-4KUIOJTQ.js";
import "./_oschunk-3DUHVNXP.js";
import {
    b as W
} from "./_oschunk-G7GFWP74.js";
import "./_oschunk-5ETXRNLC.js";
import "./_oschunk-OQXPOKCG.js";
import "./_oschunk-3ONGJG7U.js";
import "./_oschunk-T6VVD72L.js";
import "./_oschunk-O5AQVDN2.js";
import "./_oschunk-4SG3ZAXH.js";
import "./_oschunk-MOYCBUII.js";
import "./_oschunk-NYD6CGWS.js";
import "./_oschunk-EROCOLS7.js";
import {
    b as R,
    h as s,
    j as x,
    k as w,
    q as Y,
    r as p,
    u as V,
    v as h,
    y as P
} from "./_oschunk-42NACYKQ.js";
import "./_oschunk-2M7PXTSQ.js";
import {
    a as ee,
    g as A,
    i as O
} from "./_oschunk-RKYF3TWC.js";
import "./_oschunk-K7AFM7ZW.js";
import {
    a as l
} from "./_oschunk-DOFMR6EA.js";
import "./_oschunk-2ZI4JQLD.js";
import "./_oschunk-IKZJT3AP.js";
import "./_oschunk-X4K3PA43.js";
import {
    a as q
} from "./_oschunk-MSUVGI3L.js";
import {
    ia as Q
} from "./_oschunk-2JKANR6M.js";
import {
    c as o,
    g as X
} from "./_oschunk-DVBKI63I.js";
var t = X(ee());
var g = Q,
    y = O.PlaceholderContent,
    E = O.IteratorPlaceholderContent,
    b = class b extends A.BaseWebScreen {
        static get displayName() {
            return "CFDFlows.CFDs"
        }
        static getAttributes() {
            return {
                codeFunction: "CFDs",
                functionKey: "fbf7d1b9-f76f-4b1f-bad1-5f8f38e21344",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.CFDFlows.CFDs.css", "css/tradershub.AccountCreation.extra.css"]
        }
        static getJsDependencies() {
            return ["scripts/tradershub.UserScripts.JSCookie.js"]
        }
        static getBlocks() {
            return [W, T, D, I, F, L, $, U, H, B, N, z, G, j, k, M]
        }
        get modelFactory() {
            return Z
        }
        get controllerFactory() {
            return J
        }
        get title() {
            return A.BaseWebScreen.getTranslation("udH3+2_3H0u60V+POOITRA#Title", "CFDs")
        }
        internalRender() {
            let a = this.model,
                n = this.controller,
                e = this.idService,
                m = n.validationService,
                r = this.widgetsRecordProvider,
                d = n.callContext(),
                S = b.ifWidget,
                _ = b.textWidget,
                v = b.asPrimitiveValue,
                C = b.getTranslation,
                u = this;
            return t.createElement("div", this.getRootNodeProperties(), t.createElement(W, {
                getOwnerSpan: o(function() {
                    return u.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return u.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: o(function(i) {
                        n.handleError(i)
                    }, "_handleError"),
                    closeModalEvent$Action: o(function() {
                        var i = d.clone();
                        n.closeModal$Action(n.callContext(i))
                    }, "closeModalEvent$Action")
                },
                _validationProps: {
                    validationService: m
                },
                _idProps: {
                    service: e,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: r,
                placeholders: {
                    content: new y(function() {
                        return [t.createElement(s, {
                            align: 0,
                            animate: !0,
                            visible: a.getCachedValue(e.getId("LoggedOutBlocks.Visible"), function() {
                                return l.getAuthToken() === g.BuiltinFunctions.nullTextIdentifier()
                            }, function() {
                                return l.getAuthToken()
                            }),
                            _idProps: {
                                service: e,
                                name: "LoggedOutBlocks"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(T, {
                            getOwnerSpan: o(function() {
                                return u.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return u.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: o(function(i) {
                                    n.handleError(i)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: m
                            },
                            _idProps: {
                                service: e,
                                uuid: "2",
                                alias: "2"
                            },
                            _widgetRecordProvider: r,
                            _dependencies: []
                        })), t.createElement(s, {
                            align: 0,
                            animate: !0,
                            visible: a.getCachedValue(e.getId("LoggedInBlocks.Visible"), function() {
                                return l.getAuthToken() !== g.BuiltinFunctions.nullTextIdentifier()
                            }, function() {
                                return l.getAuthToken()
                            }),
                            _idProps: {
                                service: e,
                                name: "LoggedInBlocks"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(D, {
                            getOwnerSpan: o(function() {
                                return u.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return u.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                PageTitle: "CFDs trading",
                                Description: "Trade bigger positions with less capital on a wide range of global markets."
                            },
                            events: {
                                _handleError: o(function(i) {
                                    n.handleError(i)
                                }, "_handleError"),
                                onDemoClick$Action: o(function() {
                                    return Promise.resolve().then(function() {
                                        var i = d.clone();
                                        return n.setDemoValue$Action(n.callContext(i))
                                    })
                                }, "onDemoClick$Action"),
                                onRealClick$Action: o(function() {
                                    return Promise.resolve().then(function() {
                                        var i = d.clone();
                                        return n.setRealValue$Action(n.callContext(i))
                                    })
                                }, "onRealClick$Action")
                            },
                            _validationProps: {
                                validationService: m
                            },
                            _idProps: {
                                service: e,
                                uuid: "4",
                                alias: "3"
                            },
                            _widgetRecordProvider: r,
                            placeholders: {
                                rightSectionPlaceholder: y.Empty
                            },
                            _dependencies: []
                        }), t.createElement(I, {
                            getOwnerSpan: o(function() {
                                return u.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return u.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                IsPasswordSet: a.getCachedValue(e.getId("T53OS16oUUOqevHOkMwYrA.IsPasswordSet"), function() {
                                    return a.variables.selectedAvailableAccountVar.platformAttr === "mt5" ? a.variables.isMt5PasswordSetVar : a.variables.isDxtradePasswordSetVar
                                }, function() {
                                    return a.variables.selectedAvailableAccountVar.platformAttr
                                }, function() {
                                    return a.variables.isMt5PasswordSetVar
                                }, function() {
                                    return a.variables.isDxtradePasswordSetVar
                                }),
                                SelectedAccount: a.variables.selectedAvailableAccountVar,
                                IsVisible: l.getShowModal() === "ShowPasswordModal"
                            },
                            events: {
                                _handleError: o(function(i) {
                                    n.handleError(i)
                                }, "_handleError"),
                                needsKYCEvent$Action: o(function() {
                                    var i = d.clone();
                                    n.onNeedKYC$Action(n.callContext(i))
                                }, "needsKYCEvent$Action"),
                                refetchMT5Event$Action: o(function() {
                                    return Promise.resolve().then(function() {
                                        var i = d.clone();
                                        return n.onAccountCreated$Action("mt5", n.callContext(i))
                                    })
                                }, "refetchMT5Event$Action"),
                                forgotPasswordEvent$Action: o(function() {
                                    return Promise.resolve().then(function() {
                                        var i = d.clone();
                                        return n.handleForgotPassword$Action(n.callContext(i))
                                    })
                                }, "forgotPasswordEvent$Action"),
                                refetchDxtradeEvent$Action: o(function() {
                                    return Promise.resolve().then(function() {
                                        var i = d.clone();
                                        return n.onAccountCreated$Action("dxtrade", n.callContext(i))
                                    })
                                }, "refetchDxtradeEvent$Action"),
                                closeEvent$Action: o(function() {
                                    var i = d.clone();
                                    n.closeModal$Action(n.callContext(i))
                                }, "closeEvent$Action")
                            },
                            _validationProps: {
                                validationService: m
                            },
                            _idProps: {
                                service: e,
                                uuid: "5",
                                alias: "4"
                            },
                            _widgetRecordProvider: r,
                            _dependencies: []
                        }), t.createElement(F, {
                            getOwnerSpan: o(function() {
                                return u.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return u.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                IsVisible: l.getShowModal() === "EmailSentModal"
                            },
                            events: {
                                _handleError: o(function(i) {
                                    n.handleError(i)
                                }, "_handleError"),
                                closeEvent$Action: o(function() {
                                    var i = d.clone();
                                    n.closeModal$Action(n.callContext(i))
                                }, "closeEvent$Action"),
                                resendEmailEvent$Action: o(function() {
                                    return Promise.resolve().then(function() {
                                        var i = d.clone();
                                        return n.handleForgotPassword$Action(n.callContext(i))
                                    })
                                }, "resendEmailEvent$Action")
                            },
                            _validationProps: {
                                validationService: m
                            },
                            _idProps: {
                                service: e,
                                uuid: "6",
                                alias: "5"
                            },
                            _widgetRecordProvider: r,
                            _dependencies: []
                        }), t.createElement(L, {
                            getOwnerSpan: o(function() {
                                return u.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return u.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                Platform: a.getCachedValue(e.getId("jWUh8Cwvn0q3J6N3CILsDw.Platform"), function() {
                                    return l.getTradingPlatformDxtradePasswordReset() !== "" ? "dxtrade" : l.getTradingPlatformMt5PasswordReset() !== "" ? "mt5" : ""
                                }, function() {
                                    return l.getTradingPlatformDxtradePasswordReset()
                                }, function() {
                                    return l.getTradingPlatformMt5PasswordReset()
                                }),
                                IsVisible: a.getCachedValue(e.getId("jWUh8Cwvn0q3J6N3CILsDw.IsVisible"), function() {
                                    return l.getTradingPlatformDxtradePasswordReset() !== g.BuiltinFunctions.nullTextIdentifier() || l.getTradingPlatformMt5PasswordReset() !== g.BuiltinFunctions.nullTextIdentifier() || l.getShowModal() === "ShowResetPasswordModal"
                                }, function() {
                                    return l.getTradingPlatformDxtradePasswordReset()
                                }, function() {
                                    return l.getTradingPlatformMt5PasswordReset()
                                }, function() {
                                    return l.getShowModal()
                                })
                            },
                            events: {
                                _handleError: o(function(i) {
                                    n.handleError(i)
                                }, "_handleError"),
                                closeEvent$Action: o(function() {
                                    var i = d.clone();
                                    n.closeModal$Action(n.callContext(i))
                                }, "closeEvent$Action")
                            },
                            _validationProps: {
                                validationService: m
                            },
                            _idProps: {
                                service: e,
                                uuid: "7",
                                alias: "6"
                            },
                            _widgetRecordProvider: r,
                            _dependencies: []
                        }), t.createElement(h, {
                            extendedProperties: {
                                style: "padding: 16px;"
                            },
                            showPopup: l.getShowModal() === "ShowCTraderTradeModal",
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
                                    n.closeModal$Action(n.callContext(i))
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
                            text: [_(C("Oc1ebWbvikePv166h9X0pQ#Value", "Account details"))],
                            _idProps: {
                                service: e,
                                uuid: "10"
                            },
                            _widgetRecordProvider: r
                        }), t.createElement(p, {
                            gridProperties: {
                                classes: "ThemeGrid_MarginGutter"
                            },
                            image: g.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standaloneSMClose.svg"),
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
                        }, t.createElement(p, {
                            image: g.Navigation.VersionedURL.getVersionedUrl("img/tradershub.derivctrader.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "16"
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
                                uuid: "17"
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
                        }), S(a.variables.accountCreationLoadingVar, !1, this, function() {
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
                                    uuid: "19"
                                },
                                _widgetRecordProvider: r
                            })]
                        }, function() {
                            return [t.createElement(x, {
                                value: "Total balance: " + a.variables.totalCTraderBalanceVar,
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
                        }, t.createElement(R, {
                            enabled: !a.variables.accountCreationLoadingVar,
                            isDefault: !1,
                            onClick: o(function() {
                                return Promise.resolve().then(function() {
                                    var i = d.clone();
                                    return n.transferOnClick$Action((l.getAccountType() === "demo" ? "CTD" : "CTR") + a.variables.createdCtraderAccountsVar.getCurrent(d.iterationContext).loginAttr, n.callContext(i))
                                })
                            }, "onClick"),
                            style: "btn-primary transfer-btn cursor-pointer",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "22"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(p, {
                            image: g.Navigation.VersionedURL.getVersionedUrl("img/tradershub.StandaloneSMArrowUpArrowDown.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "23"
                            },
                            _widgetRecordProvider: r
                        }), t.createElement(P, {
                            style: "",
                            text: [_(C("nmjoky_hmEmAA01EwZiZfQ#Value", "Transfer"))],
                            _idProps: {
                                service: e,
                                uuid: "24"
                            },
                            _widgetRecordProvider: r
                        })))), S(a.variables.accountCreationLoadingVar, !1, this, function() {
                            return [t.createElement(s, {
                                align: 0,
                                animate: !1,
                                style: "list list-group",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "25"
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
                                    uuid: "26"
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
                                    uuid: "27"
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
                                    uuid: "28"
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
                                    uuid: "29"
                                },
                                _widgetRecordProvider: r
                            }))]
                        }, function() {
                            return [t.createElement(w, {
                                animateItems: !0,
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                mode: 0,
                                source: a.variables.createdCtraderAccountsVar,
                                style: "list list-group",
                                tag: "div",
                                _idProps: {
                                    service: e,
                                    name: "CreatedCtraderAccount"
                                },
                                _widgetRecordProvider: r,
                                placeholders: {
                                    content: new E(function(i, c) {
                                        return [t.createElement(s, {
                                            align: 0,
                                            animate: !1,
                                            style: "ctrader-list-item",
                                            visible: !0,
                                            _idProps: {
                                                service: i,
                                                uuid: "31"
                                            },
                                            _widgetRecordProvider: r,
                                            _dependencies: [v(a.variables.createdCtraderAccountsVar.getCurrent(c.iterationContext).currencyAttr), v(a.variables.createdCtraderAccountsVar.getCurrent(c.iterationContext).display_balanceAttr), v(a.variables.createdCtraderAccountsVar.getCurrent(c.iterationContext).loginAttr)]
                                        }, t.createElement(x, {
                                            value: a.variables.createdCtraderAccountsVar.getCurrent(c.iterationContext).loginAttr,
                                            _idProps: {
                                                service: i,
                                                name: "AccountId"
                                            },
                                            _widgetRecordProvider: r
                                        }), t.createElement(x, {
                                            gridProperties: {
                                                classes: "ThemeGrid_MarginGutter"
                                            },
                                            value: a.variables.createdCtraderAccountsVar.getCurrent(c.iterationContext).display_balanceAttr + " " + a.variables.createdCtraderAccountsVar.getCurrent(c.iterationContext).currencyAttr,
                                            _idProps: {
                                                service: i,
                                                name: "Balance2"
                                            },
                                            _widgetRecordProvider: r
                                        }))]
                                    }, d, e, "1")
                                },
                                _dependencies: []
                            })]
                        }), S(l.getAccountType() === "real" && a.variables.cTraderAvailableAccountsCountVar > 0 && !a.variables.accountCreationLoadingVar, !1, this, function() {
                            return [t.createElement(s, {
                                align: 0,
                                animate: !1,
                                extendedEvents: {
                                    onClick: o(function() {
                                        return Promise.resolve().then(function() {
                                            var i = d.clone();
                                            return n.cTraderAccountCreation$Action(a.variables.selectedAccountVar.market_typeAttr, "svg", n.callContext(i))
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
                            }, t.createElement(p, {
                                image: g.Navigation.VersionedURL.getVersionedUrl("img/tradershub.StandaloneSMCirclePlus.svg"),
                                type: 0,
                                _idProps: {
                                    service: e,
                                    uuid: "35"
                                },
                                _widgetRecordProvider: r
                            }), t.createElement(P, {
                                extendedProperties: {
                                    style: "font-size: 12px; margin-left: 8px;"
                                },
                                text: [_(C("EZXm1i3O20W1oEejDONKbA#Value", "Get another cTrader account"))],
                                _idProps: {
                                    service: e,
                                    uuid: "36"
                                },
                                _widgetRecordProvider: r
                            }))]
                        }, function() {
                            return []
                        }), t.createElement($, {
                            getOwnerSpan: o(function() {
                                return u.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return u.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: o(function(i) {
                                    n.handleError(i)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: m
                            },
                            _idProps: {
                                service: e,
                                uuid: "37",
                                alias: "7"
                            },
                            _widgetRecordProvider: r,
                            _dependencies: []
                        }), t.createElement(U, {
                            getOwnerSpan: o(function() {
                                return u.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return u.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                IsDowntime: a.variables.isDowntimeVar,
                                InfoMessage: g.Injector.resolve(g.ServiceNames.TranslationsService).getMessage("ndrK343o50iVYiha1GhLXA#Value.1054975282.1", "Scheduled downtime: Monthly on the first Saturday, 07:00-10:00 GMT. Service may be affected.")
                            },
                            events: {
                                _handleError: o(function(i) {
                                    n.handleError(i)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: m
                            },
                            _idProps: {
                                service: e,
                                uuid: "38",
                                alias: "8"
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
                        }, t.createElement(R, {
                            enabled: !a.variables.accountCreationLoadingVar,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            isDefault: !1,
                            onClick: o(function() {
                                return Promise.resolve().then(function() {
                                    var i = d.clone();
                                    return n.ctraderWebTerminalOnClick$Action(n.callContext(i))
                                })
                            }, "onClick"),
                            style: "btn btn-primary",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "40"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(p, {
                            image: g.Navigation.VersionedURL.getVersionedUrl("img/tradershub.GlobeSM.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "41"
                            },
                            _widgetRecordProvider: r
                        }), t.createElement(P, {
                            extendedProperties: {
                                style: "font-size: 16px; margin-left: 8px;"
                            },
                            text: [_(C("4mCqd7467kqHL8fXM_qdWw#Value", "cTrader web terminal"))],
                            _idProps: {
                                service: e,
                                uuid: "42"
                            },
                            _widgetRecordProvider: r
                        })), t.createElement(V, {
                            enabled: !a.variables.accountCreationLoadingVar,
                            extendedProperties: {
                                target: "_blank",
                                style: "border-color: #101213; border-radius: 100px; border-style: solid; border-width: 1px; height: 48px; margin-top: 16px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            onClick: o(function() {
                                var i = d.clone();
                                n.ctraderAppOnClick$Action(n.callContext(i))
                            }, "onClick"),
                            style: "display-flex align-items-center justify-content-center",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "43"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(p, {
                            image: g.Navigation.VersionedURL.getVersionedUrl("img/tradershub.LaptopSM.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "44"
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
                                uuid: "45"
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
                                uuid: "46"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(P, {
                            extendedProperties: {
                                style: "color: #101213; font-size: 12px;"
                            },
                            text: [_(C("Q5eT0LgtuEWrz5_R6VT5cg#Value", "Also available on "))],
                            _idProps: {
                                service: e,
                                uuid: "47"
                            },
                            _widgetRecordProvider: r
                        }), t.createElement(V, {
                            enabled: !0,
                            extendedProperties: {
                                target: "_blank"
                            },
                            gridProperties: {
                                marginLeft: "4px"
                            },
                            style: "hide-text-decoration",
                            transition: g.Transitions.createTransition(g.Transitions.TransitionAnimation.Fade),
                            url: g.Navigation.generateScreenURL("https://getctradermac.com/deriv/ctrader-deriv-setup.dmg", {}),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "48"
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
                                uuid: "49"
                            },
                            _widgetRecordProvider: r
                        })), t.createElement(P, {
                            extendedProperties: {
                                style: "color: #101213; font-size: 12px;"
                            },
                            text: ["."],
                            _idProps: {
                                service: e,
                                uuid: "50"
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
                                uuid: "51"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(p, {
                            extendedProperties: {
                                style: "height: 80px; margin-bottom: 8px;"
                            },
                            gridProperties: {
                                width: "80px"
                            },
                            image: g.Navigation.VersionedURL.getVersionedUrl("img/tradershub.CTraderQRCode.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "52"
                            },
                            _widgetRecordProvider: r
                        }), t.createElement(P, {
                            extendedProperties: {
                                style: "color: #333333; font-size: 12px;"
                            },
                            text: [_(C("95bWoOTEqE6NHBDNR98HCQ#Value", "Scan to download the mobile app."))],
                            _idProps: {
                                service: e,
                                uuid: "53"
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
                        }, t.createElement(R, {
                            enabled: !a.variables.accountCreationLoadingVar,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            isDefault: !1,
                            onClick: o(function() {
                                var i = d.clone();
                                n.ctraderAppOnClick$Action(n.callContext(i))
                            }, "onClick"),
                            style: "btn btn-primary",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "55"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(p, {
                            image: g.Navigation.VersionedURL.getVersionedUrl("img/tradershub.MobileNotchSM.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "56"
                            },
                            _widgetRecordProvider: r
                        }), t.createElement(P, {
                            extendedProperties: {
                                style: "font-size: 16px; margin-left: 8px;"
                            },
                            text: [_(C("A_vPHnagH0uwsyZKsH8lAw#Value", "cTrader app"))],
                            _idProps: {
                                service: e,
                                uuid: "57"
                            },
                            _widgetRecordProvider: r
                        }))))), t.createElement(H, {
                            getOwnerSpan: o(function() {
                                return u.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return u.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                IsDowntime: a.variables.isDowntimeVar,
                                IsVisible: l.getShowModal() === "ShowMT5TradeModal",
                                SelectedAccount: a.variables.selectedAccountVar
                            },
                            events: {
                                _handleError: o(function(i) {
                                    n.handleError(i)
                                }, "_handleError"),
                                closeEvent$Action: o(function() {
                                    var i = d.clone();
                                    n.closeModal$Action(n.callContext(i))
                                }, "closeEvent$Action"),
                                forgotPasswordEvent$Action: o(function() {
                                    return Promise.resolve().then(function() {
                                        var i = d.clone();
                                        return n.handleForgotPassword$Action(n.callContext(i))
                                    })
                                }, "forgotPasswordEvent$Action")
                            },
                            _validationProps: {
                                validationService: m
                            },
                            _idProps: {
                                service: e,
                                uuid: "58",
                                alias: "9"
                            },
                            _widgetRecordProvider: r,
                            _dependencies: []
                        }), t.createElement(B, {
                            getOwnerSpan: o(function() {
                                return u.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return u.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                IsDowntime: a.variables.isDowntimeVar,
                                IsVisible: l.getShowModal() === "ShowDxtradeTradeModal",
                                SelectedAccount: a.variables.selectedAccountVar
                            },
                            events: {
                                _handleError: o(function(i) {
                                    n.handleError(i)
                                }, "_handleError"),
                                closeEvent$Action: o(function() {
                                    var i = d.clone();
                                    n.closeModal$Action(n.callContext(i))
                                }, "closeEvent$Action"),
                                forgotPasswordEvent$Action: o(function() {
                                    return Promise.resolve().then(function() {
                                        var i = d.clone();
                                        return n.handleForgotPassword$Action(n.callContext(i))
                                    })
                                }, "forgotPasswordEvent$Action")
                            },
                            _validationProps: {
                                validationService: m
                            },
                            _idProps: {
                                service: e,
                                uuid: "59",
                                alias: "10"
                            },
                            _widgetRecordProvider: r,
                            _dependencies: []
                        }), t.createElement(h, {
                            showPopup: l.getShowModal() === "ShowVerificationModal",
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
                                    n.closeModal$Action(n.callContext(i))
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
                            text: [_(C("hCD8to9DK0ie4dlE+Q3ODg#Value", "Complete profile setup"))],
                            _idProps: {
                                service: e,
                                uuid: "62"
                            },
                            _widgetRecordProvider: r
                        }), t.createElement(p, {
                            extendedEvents: {
                                onClick: o(function() {
                                    var i = d.clone();
                                    n.closeModal$Action(n.callContext(i))
                                }, "onClick")
                            },
                            gridProperties: {
                                classes: "ThemeGrid_MarginGutter"
                            },
                            image: g.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standaloneSMClose.svg"),
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
                                uuid: "64"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(x, {
                            value: g.Injector.resolve(g.ServiceNames.TranslationsService).getMessage("AJGcop+xW0WCvOjRMsPPZg#ValueExpression.-513209657.1", "To enable your MT5 ") + a.variables.selectedAccountVar.labelAttr + g.Injector.resolve(g.ServiceNames.TranslationsService).getMessage("AJGcop+xW0WCvOjRMsPPZg#ValueExpression.489677834.1", " account, complete these steps."),
                            _idProps: {
                                service: e,
                                uuid: "65"
                            },
                            _widgetRecordProvider: r
                        }), t.createElement(w, {
                            animateItems: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            mode: 0,
                            source: a.variables.profileSetupVar,
                            style: "list list-group",
                            tag: "div",
                            _idProps: {
                                service: e,
                                uuid: "66"
                            },
                            _widgetRecordProvider: r,
                            placeholders: {
                                content: new E(function(i, c) {
                                    return [t.createElement(N, {
                                        getOwnerSpan: o(function() {
                                            return u.getChildSpan("render")
                                        }, "getOwnerSpan"),
                                        getOwnerDisposeSpan: o(function() {
                                            return u.getChildSpan("destroy")
                                        }, "getOwnerDisposeSpan"),
                                        inputs: {
                                            Status: a.variables.profileSetupVar.getCurrent(c.iterationContext).statusLabelAttr,
                                            Description: a.variables.profileSetupVar.getCurrent(c.iterationContext).descriptionAttr,
                                            Icon: a.variables.profileSetupVar.getCurrent(c.iterationContext).iconAttr,
                                            Title: a.variables.profileSetupVar.getCurrent(c.iterationContext).titleAttr,
                                            IsDisabled: a.variables.profileSetupVar.getCurrent(c.iterationContext).isDisabledAttr
                                        },
                                        events: {
                                            _handleError: o(function(f) {
                                                n.handleError(f)
                                            }, "_handleError"),
                                            redirectToEvent$Action: o(function() {
                                                return Promise.resolve().then(function() {
                                                    var f = c.clone();
                                                    return n.redirectToKYC$Action(a.variables.profileSetupVar.getCurrent(c.iterationContext).identifierAttr === "poi" ? "proof-of-identity" : a.variables.profileSetupVar.getCurrent(c.iterationContext).identifierAttr === "poa" ? "proof-of-address" : "personal-details", n.callContext(f))
                                                })
                                            }, "redirectToEvent$Action")
                                        },
                                        _validationProps: {
                                            validationService: m
                                        },
                                        _idProps: {
                                            service: i,
                                            uuid: "67",
                                            alias: "11"
                                        },
                                        _widgetRecordProvider: r,
                                        _dependencies: []
                                    })]
                                }, d, e, "2")
                            },
                            _dependencies: []
                        }))), t.createElement(z, {
                            getOwnerSpan: o(function() {
                                return u.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return u.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                IsVisible: l.getShowModal() === "ShowBOLocksModal",
                                status: a.getCachedValue(e.getId("FRHCTa2vLEaD83qmWeQQGg.status"), function() {
                                    return a.variables.selectedAccountVar.statusAttr !== g.BuiltinFunctions.nullTextIdentifier() ? a.variables.selectedAccountVar.statusAttr : "under_maintenance"
                                }, function() {
                                    return a.variables.selectedAccountVar.statusAttr
                                })
                            },
                            events: {
                                _handleError: o(function(i) {
                                    n.handleError(i)
                                }, "_handleError"),
                                closeBOLockModal$Action: o(function() {
                                    var i = d.clone();
                                    n.closeModal$Action(n.callContext(i))
                                }, "closeBOLockModal$Action")
                            },
                            _validationProps: {
                                validationService: m
                            },
                            _idProps: {
                                service: e,
                                uuid: "68",
                                alias: "12"
                            },
                            _widgetRecordProvider: r,
                            _dependencies: []
                        }), t.createElement(G, {
                            getOwnerSpan: o(function() {
                                return u.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return u.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                IsVisible: l.getShowModal() === "CompleteYourProfile"
                            },
                            events: {
                                _handleError: o(function(i) {
                                    n.handleError(i)
                                }, "_handleError"),
                                closeEvent$Action: o(function() {
                                    var i = d.clone();
                                    n.closeModal$Action(n.callContext(i))
                                }, "closeEvent$Action"),
                                updateProfile$Action: o(function() {
                                    return Promise.resolve().then(function() {
                                        var i = d.clone();
                                        return n.redirectToKYC$Action("personal-details", n.callContext(i))
                                    })
                                }, "updateProfile$Action")
                            },
                            _validationProps: {
                                validationService: m
                            },
                            _idProps: {
                                service: e,
                                uuid: "69",
                                alias: "13"
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
                        }, t.createElement(h, {
                            extendedProperties: {
                                style: "height: 100%; margin-top: 0px; padding: 16px;"
                            },
                            showPopup: l.getShowModal() === "SelectAWalletModal",
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
                                    n.closeModal$Action(n.callContext(i))
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
                        }), t.createElement(p, {
                            extendedEvents: {
                                onClick: o(function() {
                                    var i = d.clone();
                                    n.closeModal$Action(n.callContext(i))
                                }, "onClick")
                            },
                            gridProperties: {
                                classes: "ThemeGrid_MarginGutter"
                            },
                            image: g.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standaloneSMClose.svg"),
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
                                        return n.addNewWalletOnClick$Action("USD", n.callContext(i))
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
                        }, t.createElement(p, {
                            gridProperties: {
                                width: "24px"
                            },
                            image: g.Navigation.VersionedURL.getVersionedUrl("img/tradershub.currencyusd.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "78"
                            },
                            _widgetRecordProvider: r
                        }), "US dollar (USD)"), t.createElement(s, {
                            align: 0,
                            animate: !1,
                            extendedEvents: {
                                onClick: o(function() {
                                    return Promise.resolve().then(function() {
                                        var i = d.clone();
                                        return n.addNewWalletOnClick$Action("EUR", n.callContext(i))
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
                        }, t.createElement(p, {
                            gridProperties: {
                                width: "24px"
                            },
                            image: g.Navigation.VersionedURL.getVersionedUrl("img/tradershub.currency_eur.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "80"
                            },
                            _widgetRecordProvider: r
                        }), "Euro (EUR)"), t.createElement(s, {
                            align: 0,
                            animate: !1,
                            extendedEvents: {
                                onClick: o(function() {
                                    return Promise.resolve().then(function() {
                                        var i = d.clone();
                                        return n.addNewWalletOnClick$Action("GBP", n.callContext(i))
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
                        }, t.createElement(p, {
                            gridProperties: {
                                width: "24px"
                            },
                            image: g.Navigation.VersionedURL.getVersionedUrl("img/tradershub.gbp.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "82"
                            },
                            _widgetRecordProvider: r
                        }), "Pound Sterling (GBP)"))), t.createElement(j, {
                            getOwnerSpan: o(function() {
                                return u.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return u.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                ShowHandler: !0,
                                Shape: q.shape.rounded
                            },
                            events: {
                                _handleError: o(function(i) {
                                    n.handleError(i)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: m
                            },
                            _idProps: {
                                service: e,
                                name: "SelectWalletBottomSheet",
                                alias: "14"
                            },
                            _widgetRecordProvider: r,
                            placeholders: {
                                topBar: new y(function() {
                                    return [t.createElement(s, {
                                        align: 0,
                                        animate: !1,
                                        extendedEvents: {
                                            onClick: o(function() {
                                                var i = d.clone();
                                                n.closeBottomSheet$Action(n.callContext(i))
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
                                            uuid: "85"
                                        },
                                        _widgetRecordProvider: r
                                    }))]
                                }),
                                content: new y(function() {
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
                                            uuid: "87"
                                        },
                                        _widgetRecordProvider: r
                                    }, t.createElement(x, {
                                        extendedProperties: {
                                            style: "font-size: 16px;"
                                        },
                                        value: "To trade CFDs, choose a Wallet in your preferred currency from the options below.",
                                        _idProps: {
                                            service: e,
                                            uuid: "88"
                                        },
                                        _widgetRecordProvider: r
                                    })), t.createElement(s, {
                                        align: 0,
                                        animate: !1,
                                        extendedEvents: {
                                            onClick: o(function() {
                                                return Promise.resolve().then(function() {
                                                    var i = d.clone();
                                                    return n.addNewWalletOnClick$Action("USD", n.callContext(i))
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
                                    }, t.createElement(p, {
                                        gridProperties: {
                                            width: "24px"
                                        },
                                        image: g.Navigation.VersionedURL.getVersionedUrl("img/tradershub.currencyusd.svg"),
                                        type: 0,
                                        _idProps: {
                                            service: e,
                                            uuid: "90"
                                        },
                                        _widgetRecordProvider: r
                                    }), "US dollar (USD)"), t.createElement(s, {
                                        align: 0,
                                        animate: !1,
                                        extendedEvents: {
                                            onClick: o(function() {
                                                return Promise.resolve().then(function() {
                                                    var i = d.clone();
                                                    return n.addNewWalletOnClick$Action("EUR", n.callContext(i))
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
                                    }, t.createElement(p, {
                                        gridProperties: {
                                            width: "24px"
                                        },
                                        image: g.Navigation.VersionedURL.getVersionedUrl("img/tradershub.currency_eur.svg"),
                                        type: 0,
                                        _idProps: {
                                            service: e,
                                            uuid: "92"
                                        },
                                        _widgetRecordProvider: r
                                    }), "Euro (EUR)"), t.createElement(s, {
                                        align: 0,
                                        animate: !1,
                                        extendedEvents: {
                                            onClick: o(function() {
                                                return Promise.resolve().then(function() {
                                                    var i = d.clone();
                                                    return n.addNewWalletOnClick$Action("GBP", n.callContext(i))
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
                                    }, t.createElement(p, {
                                        gridProperties: {
                                            width: "24px"
                                        },
                                        image: g.Navigation.VersionedURL.getVersionedUrl("img/tradershub.gbp.svg"),
                                        type: 0,
                                        _idProps: {
                                            service: e,
                                            uuid: "94"
                                        },
                                        _widgetRecordProvider: r
                                    }), "Pound Sterling (GBP)"))]
                                })
                            },
                            _dependencies: []
                        }))), t.createElement(s, {
                            align: 0,
                            animate: !0,
                            extendedProperties: {
                                style: "margin-top: 24px;"
                            },
                            visible: a.getCachedValue(e.getId("MyAccountsContainer.Visible"), function() {
                                return l.getAuthToken() !== g.BuiltinFunctions.nullTextIdentifier() && !a.variables.dataLoadingVar && a.variables.createdCFDAccountsVar.length > 0
                            }, function() {
                                return l.getAuthToken()
                            }, function() {
                                return a.variables.dataLoadingVar
                            }, function() {
                                return a.variables.createdCFDAccountsVar.length
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
                            text: [_(C("yy02T41dgk2_5ZwMlKD4vQ#Value", "My accounts"))],
                            _idProps: {
                                service: e,
                                uuid: "96"
                            },
                            _widgetRecordProvider: r
                        }), S(a.variables.dataLoadingVar, !1, this, function() {
                            return [t.createElement(s, {
                                align: 0,
                                animate: !1,
                                style: "available-accounts__container",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    name: "MyAccountsLoader"
                                },
                                _widgetRecordProvider: r
                            }, t.createElement(s, {
                                align: 0,
                                animate: !1,
                                style: "skeleton my-account-loader",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "98"
                                },
                                _widgetRecordProvider: r
                            }), t.createElement(s, {
                                align: 0,
                                animate: !1,
                                style: "skeleton my-account-loader",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "99"
                                },
                                _widgetRecordProvider: r
                            }), t.createElement(s, {
                                align: 0,
                                animate: !1,
                                style: "skeleton my-account-loader",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "100"
                                },
                                _widgetRecordProvider: r
                            }))]
                        }, function() {
                            return [t.createElement(w, {
                                animateItems: !1,
                                extendedProperties: {
                                    "disable-virtualization": "True"
                                },
                                mode: 0,
                                source: a.variables.createdCFDAccountsVar,
                                style: "available-accounts__container",
                                tag: "div",
                                _idProps: {
                                    service: e,
                                    name: "MyAccountsCardsList"
                                },
                                _widgetRecordProvider: r,
                                placeholders: {
                                    content: new E(function(i, c) {
                                        return [t.createElement(k, {
                                            getOwnerSpan: o(function() {
                                                return u.getChildSpan("render")
                                            }, "getOwnerSpan"),
                                            getOwnerDisposeSpan: o(function() {
                                                return u.getChildSpan("destroy")
                                            }, "getOwnerDisposeSpan"),
                                            inputs: {
                                                ProductIcon: a.variables.createdCFDAccountsVar.getCurrent(c.iterationContext).iconAttr,
                                                Status: a.variables.createdCFDAccountsVar.getCurrent(c.iterationContext).statusAttr,
                                                Name: a.variables.createdCFDAccountsVar.getCurrent(c.iterationContext).labelAttr,
                                                Balance: a.getCachedValue(i.getId("3YgtuzZnC0eQpKKcPogfxQ.Balance"), function() {
                                                    return a.variables.createdCFDAccountsVar.getCurrent(c.iterationContext).identifierAttr === "ctrader_standard" ? l.getTotalCTraderBalance() + " " + a.variables.createdCFDAccountsVar.getCurrent(c.iterationContext).currencyAttr : a.variables.createdCFDAccountsVar.getCurrent(c.iterationContext).display_balanceAttr + " " + a.variables.createdCFDAccountsVar.getCurrent(c.iterationContext).currencyAttr
                                                }, function() {
                                                    return a.variables.createdCFDAccountsVar.getCurrent(c.iterationContext).identifierAttr
                                                }, function() {
                                                    return l.getTotalCTraderBalance()
                                                }, function() {
                                                    return a.variables.createdCFDAccountsVar.getCurrent(c.iterationContext).currencyAttr
                                                }, function() {
                                                    return a.variables.createdCFDAccountsVar.getCurrent(c.iterationContext).display_balanceAttr
                                                })
                                            },
                                            events: {
                                                _handleError: o(function(f) {
                                                    n.handleError(f)
                                                }, "_handleError"),
                                                needVerificationEvent$Action: o(function() {
                                                    return Promise.resolve().then(function() {
                                                        var f = c.clone();
                                                        return n.statusBadgeOnClick$Action(n.callContext(f))
                                                    })
                                                }, "needVerificationEvent$Action"),
                                                onClickEvent$Action: o(function() {
                                                    var f = c.clone();
                                                    n.createdAccountOnClick$Action(n.callContext(f))
                                                }, "onClickEvent$Action")
                                            },
                                            _validationProps: {
                                                validationService: m
                                            },
                                            _idProps: {
                                                service: i,
                                                uuid: "102",
                                                alias: "15"
                                            },
                                            _widgetRecordProvider: r,
                                            _dependencies: []
                                        })]
                                    }, d, e, "3")
                                },
                                _dependencies: [v(l.getTotalCTraderBalance())]
                            })]
                        })), S(a.variables.dataLoadingVar, !1, this, function() {
                            return [t.createElement(s, {
                                align: 0,
                                animate: !1,
                                style: "available-accounts__container",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    name: "AvailableAccountsLoader"
                                },
                                _widgetRecordProvider: r
                            }, t.createElement(s, {
                                align: 0,
                                animate: !1,
                                style: "skeleton available-accounts-loader",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "104"
                                },
                                _widgetRecordProvider: r
                            }), t.createElement(s, {
                                align: 0,
                                animate: !1,
                                style: "skeleton available-accounts-loader",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "105"
                                },
                                _widgetRecordProvider: r
                            }), t.createElement(s, {
                                align: 0,
                                animate: !1,
                                style: "skeleton available-accounts-loader",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "106"
                                },
                                _widgetRecordProvider: r
                            }), t.createElement(s, {
                                align: 0,
                                animate: !1,
                                style: "skeleton available-accounts-loader",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "107"
                                },
                                _widgetRecordProvider: r
                            }), t.createElement(s, {
                                align: 0,
                                animate: !1,
                                style: "skeleton available-accounts-loader",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "108"
                                },
                                _widgetRecordProvider: r
                            }))]
                        }, function() {
                            return [t.createElement(s, {
                                align: 0,
                                animate: !0,
                                extendedProperties: {
                                    style: "margin-top: 24px;"
                                },
                                style: "display-flex align-items-center justify-content-space-between",
                                visible: a.getCachedValue(e.getId("AvailableAccountsHeader.Visible"), function() {
                                    return a.variables.dataLoadingVar ? !0 : a.variables.availableCFDAccountsVar.length > 0
                                }, function() {
                                    return a.variables.dataLoadingVar
                                }, function() {
                                    return a.variables.availableCFDAccountsVar.length
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
                                text: [_(C("_KRA6vQMHUGg6UrhIcqn7w#Value", "Available accounts"))],
                                _idProps: {
                                    service: e,
                                    uuid: "110"
                                },
                                _widgetRecordProvider: r
                            }), t.createElement(s, {
                                align: 0,
                                animate: !0,
                                extendedEvents: {
                                    onClick: o(function() {
                                        var i = d.clone();
                                        n.goToAccountSpecification$Action(n.callContext(i))
                                    }, "onClick")
                                },
                                visible: !a.variables.dataLoadingVar,
                                _idProps: {
                                    service: e,
                                    name: "ViewSpecificationsContainer"
                                },
                                _widgetRecordProvider: r
                            }, t.createElement(P, {
                                extendedProperties: {
                                    style: "color: #101213; font-size: 12px;"
                                },
                                text: [_(C("sIvR6mT+uUK4PvmR6Q2z9g#Value", "View specifications"))],
                                _idProps: {
                                    service: e,
                                    uuid: "112"
                                },
                                _widgetRecordProvider: r
                            }), t.createElement(Y, {
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
                                    uuid: "113"
                                },
                                _widgetRecordProvider: r
                            }))), t.createElement(w, {
                                animateItems: !1,
                                extendedProperties: {
                                    "disable-virtualization": "True"
                                },
                                mode: 0,
                                source: a.variables.availableCFDAccountsVar,
                                style: "available-accounts__container",
                                tag: "div",
                                _idProps: {
                                    service: e,
                                    name: "AvailableAccountsCardsList"
                                },
                                _widgetRecordProvider: r,
                                placeholders: {
                                    content: new E(function(i, c) {
                                        return [t.createElement(M, {
                                            getOwnerSpan: o(function() {
                                                return u.getChildSpan("render")
                                            }, "getOwnerSpan"),
                                            getOwnerDisposeSpan: o(function() {
                                                return u.getChildSpan("destroy")
                                            }, "getOwnerDisposeSpan"),
                                            inputs: {
                                                ProductIcon: a.variables.availableCFDAccountsVar.getCurrent(c.iterationContext).iconAttr,
                                                ProductDescription: a.variables.availableCFDAccountsVar.getCurrent(c.iterationContext).descriptionAttr,
                                                ProductName: a.variables.availableCFDAccountsVar.getCurrent(c.iterationContext).labelAttr
                                            },
                                            events: {
                                                _handleError: o(function(f) {
                                                    n.handleError(f)
                                                }, "_handleError"),
                                                onClickEvent$Action: o(function() {
                                                    return Promise.resolve().then(function() {
                                                        var f = c.clone();
                                                        return n.availableAccountOnClick$Action(n.callContext(f))
                                                    })
                                                }, "onClickEvent$Action")
                                            },
                                            _validationProps: {
                                                validationService: m
                                            },
                                            _idProps: {
                                                service: i,
                                                uuid: "115",
                                                alias: "16"
                                            },
                                            _widgetRecordProvider: r,
                                            _dependencies: []
                                        })]
                                    }, d, e, "4")
                                },
                                _dependencies: []
                            })]
                        })]
                    })
                },
                _dependencies: [v(a.variables.availableCFDAccountsVar), v(a.variables.createdCFDAccountsVar), v(a.variables.dataLoadingVar), v(a.variables.profileSetupVar), v(a.variables.selectedAccountVar), v(a.variables.isDowntimeVar), v(a.variables.cTraderAvailableAccountsCountVar), v(l.getAccountType()), v(a.variables.createdCtraderAccountsVar), v(a.variables.totalCTraderBalanceVar), v(a.variables.accountCreationLoadingVar), v(l.getTradingPlatformMt5PasswordReset()), v(l.getTradingPlatformDxtradePasswordReset()), v(l.getShowModal()), v(a.variables.isDxtradePasswordSetVar), v(a.variables.isMt5PasswordSetVar), v(a.variables.selectedAvailableAccountVar), v(l.getAuthToken())]
            }))
        }
    };
o(b, "View");
var K = b,
    Ae = K;
export {
    Ae as
    default
};