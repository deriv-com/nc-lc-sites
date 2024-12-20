import {
    a as X
} from "./_oschunk-AKWMHGFM.js";
import "./_oschunk-XBOQBJKW.js";
import {
    a as J
} from "./_oschunk-VPLP4OZF.js";
import {
    a as D
} from "./_oschunk-REKE2HUI.js";
import "./_oschunk-ETP52G4K.js";
import {
    a as M,
    b as k,
    c as F,
    d as L,
    e as U,
    f as $,
    g as H,
    h as B,
    i as N,
    j as z,
    k as G,
    l as j,
    m as K
} from "./_oschunk-SAZT64O3.js";
import "./_oschunk-34QHXKVM.js";
import {
    a as T,
    b as I
} from "./_oschunk-TL2WBRT5.js";
import "./_oschunk-5ZGJAYBW.js";
import "./_oschunk-HVBO7UJ7.js";
import "./_oschunk-LS2CNLHX.js";
import {
    a as W
} from "./_oschunk-ZGZGC7WW.js";
import "./_oschunk-GSA6MIEZ.js";
import "./_oschunk-F6RKQFZ3.js";
import "./_oschunk-UKFA3NWH.js";
import "./_oschunk-JQFVB4UX.js";
import "./_oschunk-ZOYETE4I.js";
import "./_oschunk-CCRNOUNW.js";
import "./_oschunk-PASQVAVD.js";
import "./_oschunk-TMT5K6IM.js";
import "./_oschunk-U5BVDMC7.js";
import "./_oschunk-GRCLOXGJ.js";
import "./_oschunk-VWJXDAKN.js";
import {
    b as R,
    h as s,
    j as x,
    k as S,
    q as Z,
    r as m,
    u as V,
    v as h,
    y as P
} from "./_oschunk-E7JQAU4J.js";
import "./_oschunk-5N5TJ3ES.js";
import {
    a as te,
    g as A,
    i as O
} from "./_oschunk-T77XORCW.js";
import "./_oschunk-2TPJE4AL.js";
import {
    a as g
} from "./_oschunk-VADNKVBQ.js";
import "./_oschunk-OOUVJ7PM.js";
import "./_oschunk-ZKKCTARK.js";
import "./_oschunk-X4K3PA43.js";
import {
    a as q
} from "./_oschunk-KG7LSUIA.js";
import {
    ia as Y
} from "./_oschunk-5EPHB76O.js";
import {
    c as o,
    g as ee
} from "./_oschunk-DVBKI63I.js";
var t = ee(te());
var l = Y,
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
            return [W, T, D, F, L, U, $, H, B, N, z, G, j, K, M, k, I]
        }
        get modelFactory() {
            return J
        }
        get controllerFactory() {
            return X
        }
        get title() {
            return A.BaseWebScreen.getTranslation("udH3+2_3H0u60V+POOITRA#Title", "CFDs")
        }
        internalRender() {
            let n = this.model,
                a = this.controller,
                e = this.idService,
                p = a.validationService,
                r = this.widgetsRecordProvider,
                d = a.callContext(),
                w = b.ifWidget,
                f = b.textWidget,
                v = b.asPrimitiveValue,
                _ = b.getTranslation,
                c = this;
            return t.createElement("div", this.getRootNodeProperties(), t.createElement(W, {
                getOwnerSpan: o(function() {
                    return c.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return c.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: o(function(i) {
                        a.handleError(i)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: p
                },
                _idProps: {
                    service: e,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: r,
                placeholders: {
                    content: new y(function() {
                        return [t.createElement(T, {
                            getOwnerSpan: o(function() {
                                return c.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return c.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: o(function(i) {
                                    a.handleError(i)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: p
                            },
                            _idProps: {
                                service: e,
                                uuid: "1",
                                alias: "2"
                            },
                            _widgetRecordProvider: r,
                            _dependencies: []
                        }), t.createElement(s, {
                            align: 0,
                            animate: !0,
                            visible: n.getCachedValue(e.getId("LoggedInBlocks.Visible"), function() {
                                return g.getAuthToken() !== l.BuiltinFunctions.nullTextIdentifier()
                            }, function() {
                                return g.getAuthToken()
                            }),
                            _idProps: {
                                service: e,
                                name: "LoggedInBlocks"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(D, {
                            getOwnerSpan: o(function() {
                                return c.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return c.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                PageTitle: "CFDs trading",
                                Description: "Trade bigger positions with less capital on a wide range of global markets."
                            },
                            events: {
                                _handleError: o(function(i) {
                                    a.handleError(i)
                                }, "_handleError"),
                                onDemoClick$Action: o(function() {
                                    return Promise.resolve().then(function() {
                                        var i = d.clone();
                                        return a.setDemoValue$Action(a.callContext(i))
                                    })
                                }, "onDemoClick$Action"),
                                onRealClick$Action: o(function() {
                                    return Promise.resolve().then(function() {
                                        var i = d.clone();
                                        return a.setRealValue$Action(a.callContext(i))
                                    })
                                }, "onRealClick$Action")
                            },
                            _validationProps: {
                                validationService: p
                            },
                            _idProps: {
                                service: e,
                                uuid: "3",
                                alias: "3"
                            },
                            _widgetRecordProvider: r,
                            placeholders: {
                                rightSectionPlaceholder: y.Empty
                            },
                            _dependencies: []
                        }), t.createElement(F, {
                            getOwnerSpan: o(function() {
                                return c.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return c.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                IsPasswordSet: n.getCachedValue(e.getId("T53OS16oUUOqevHOkMwYrA.IsPasswordSet"), function() {
                                    return n.variables.selectedAvailableAccountVar.platformAttr === "mt5" ? n.variables.isMt5PasswordSetVar : n.variables.isDxtradePasswordSetVar
                                }, function() {
                                    return n.variables.selectedAvailableAccountVar.platformAttr
                                }, function() {
                                    return n.variables.isMt5PasswordSetVar
                                }, function() {
                                    return n.variables.isDxtradePasswordSetVar
                                }),
                                SelectedAccount: n.variables.selectedAvailableAccountVar,
                                IsVisible: n.variables.showModalVar === "ShowPasswordModal"
                            },
                            events: {
                                _handleError: o(function(i) {
                                    a.handleError(i)
                                }, "_handleError"),
                                needsKYCEvent$Action: o(function() {
                                    var i = d.clone();
                                    a.onNeedKYC$Action(a.callContext(i))
                                }, "needsKYCEvent$Action"),
                                refetchMT5Event$Action: o(function() {
                                    return Promise.resolve().then(function() {
                                        var i = d.clone();
                                        return a.onAccountCreated$Action("mt5", a.callContext(i))
                                    })
                                }, "refetchMT5Event$Action"),
                                forgotPasswordEvent$Action: o(function() {
                                    return Promise.resolve().then(function() {
                                        var i = d.clone();
                                        return a.handleForgotPassword$Action(a.callContext(i))
                                    })
                                }, "forgotPasswordEvent$Action"),
                                refetchDxtradeEvent$Action: o(function() {
                                    return Promise.resolve().then(function() {
                                        var i = d.clone();
                                        return a.onAccountCreated$Action("dxtrade", a.callContext(i))
                                    })
                                }, "refetchDxtradeEvent$Action"),
                                closeEvent$Action: o(function() {
                                    var i = d.clone();
                                    a.closeModal$Action(a.callContext(i))
                                }, "closeEvent$Action")
                            },
                            _validationProps: {
                                validationService: p
                            },
                            _idProps: {
                                service: e,
                                uuid: "4",
                                alias: "4"
                            },
                            _widgetRecordProvider: r,
                            _dependencies: []
                        }), t.createElement(L, {
                            getOwnerSpan: o(function() {
                                return c.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return c.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                IsVisible: n.variables.showModalVar === "EmailSentModal"
                            },
                            events: {
                                _handleError: o(function(i) {
                                    a.handleError(i)
                                }, "_handleError"),
                                closeEvent$Action: o(function() {
                                    var i = d.clone();
                                    a.closeModal$Action(a.callContext(i))
                                }, "closeEvent$Action"),
                                resendEmailEvent$Action: o(function() {
                                    return Promise.resolve().then(function() {
                                        var i = d.clone();
                                        return a.handleForgotPassword$Action(a.callContext(i))
                                    })
                                }, "resendEmailEvent$Action")
                            },
                            _validationProps: {
                                validationService: p
                            },
                            _idProps: {
                                service: e,
                                uuid: "5",
                                alias: "5"
                            },
                            _widgetRecordProvider: r,
                            _dependencies: []
                        }), t.createElement(U, {
                            getOwnerSpan: o(function() {
                                return c.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return c.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                Platform: n.getCachedValue(e.getId("jWUh8Cwvn0q3J6N3CILsDw.Platform"), function() {
                                    return g.getTradingPlatformDxtradePasswordReset() !== "" ? "dxtrade" : g.getTradingPlatformMt5PasswordReset() !== "" ? "mt5" : ""
                                }, function() {
                                    return g.getTradingPlatformDxtradePasswordReset()
                                }, function() {
                                    return g.getTradingPlatformMt5PasswordReset()
                                }),
                                IsVisible: n.getCachedValue(e.getId("jWUh8Cwvn0q3J6N3CILsDw.IsVisible"), function() {
                                    return g.getTradingPlatformDxtradePasswordReset() !== l.BuiltinFunctions.nullTextIdentifier() || g.getTradingPlatformMt5PasswordReset() !== l.BuiltinFunctions.nullTextIdentifier() || n.variables.showModalVar === "ShowResetPasswordModal"
                                }, function() {
                                    return g.getTradingPlatformDxtradePasswordReset()
                                }, function() {
                                    return g.getTradingPlatformMt5PasswordReset()
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
                                validationService: p
                            },
                            _idProps: {
                                service: e,
                                uuid: "6",
                                alias: "6"
                            },
                            _widgetRecordProvider: r,
                            _dependencies: []
                        }), t.createElement(h, {
                            extendedProperties: {
                                style: "padding: 16px;"
                            },
                            showPopup: n.variables.showModalVar === "ShowCTraderTradeModal",
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
                            text: [f(_("Oc1ebWbvikePv166h9X0pQ#Value", "Account details"))],
                            _idProps: {
                                service: e,
                                uuid: "9"
                            },
                            _widgetRecordProvider: r
                        }), t.createElement(m, {
                            gridProperties: {
                                classes: "ThemeGrid_MarginGutter"
                            },
                            image: l.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standaloneSMClose.svg"),
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
                            image: l.Navigation.VersionedURL.getVersionedUrl("img/tradershub.derivctrader.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "15"
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
                                uuid: "16"
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
                        }), w(n.variables.accountCreationLoadingVar, !1, this, function() {
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
                                    uuid: "18"
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
                        }, t.createElement(R, {
                            enabled: !n.variables.accountCreationLoadingVar,
                            isDefault: !1,
                            onClick: o(function() {
                                try {
                                    l.Navigation.navigateTo(l.Navigation.generateScreenURL("tradershub", "wallets/transfer/:to?", {
                                        to: l.DataConversion.ServerDataConverter.to((g.getAccountType() === "demo" ? "CTD" : "CTR") + n.variables.createdCtraderAccountsVar.getCurrent(d.iterationContext).loginAttr, l.DataTypes.DataTypes.Text)
                                    }), l.Transitions.createTransition(l.Transitions.TransitionAnimation.Fade), null, !0)
                                } catch (i) {
                                    if (i.name !== "RedirectOccurredException") throw i
                                }
                            }, "onClick"),
                            style: "btn-primary transfer-btn cursor-pointer",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "21"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(m, {
                            image: l.Navigation.VersionedURL.getVersionedUrl("img/tradershub.StandaloneSMArrowUpArrowDown.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "22"
                            },
                            _widgetRecordProvider: r
                        }), t.createElement(P, {
                            style: "",
                            text: [f(_("nmjoky_hmEmAA01EwZiZfQ#Value", "Transfer"))],
                            _idProps: {
                                service: e,
                                uuid: "23"
                            },
                            _widgetRecordProvider: r
                        })))), w(n.variables.accountCreationLoadingVar, !1, this, function() {
                            return [t.createElement(s, {
                                align: 0,
                                animate: !1,
                                style: "list list-group",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "24"
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
                                    uuid: "25"
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
                                    content: new E(function(i, u) {
                                        return [t.createElement(s, {
                                            align: 0,
                                            animate: !1,
                                            style: "ctrader-list-item",
                                            visible: !0,
                                            _idProps: {
                                                service: i,
                                                uuid: "30"
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
                                    }, d, e, "1")
                                },
                                _dependencies: []
                            })]
                        }), w(g.getAccountType() === "real" && n.variables.cTraderAvailableAccountsCountVar > 0 && !n.variables.accountCreationLoadingVar, !1, this, function() {
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
                                image: l.Navigation.VersionedURL.getVersionedUrl("img/tradershub.StandaloneSMCirclePlus.svg"),
                                type: 0,
                                _idProps: {
                                    service: e,
                                    uuid: "34"
                                },
                                _widgetRecordProvider: r
                            }), t.createElement(P, {
                                extendedProperties: {
                                    style: "font-size: 12px; margin-left: 8px;"
                                },
                                text: [f(_("EZXm1i3O20W1oEejDONKbA#Value", "Get another cTrader account"))],
                                _idProps: {
                                    service: e,
                                    uuid: "35"
                                },
                                _widgetRecordProvider: r
                            }))]
                        }, function() {
                            return []
                        }), t.createElement($, {
                            getOwnerSpan: o(function() {
                                return c.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return c.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: o(function(i) {
                                    a.handleError(i)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: p
                            },
                            _idProps: {
                                service: e,
                                uuid: "36",
                                alias: "7"
                            },
                            _widgetRecordProvider: r,
                            _dependencies: []
                        }), t.createElement(H, {
                            getOwnerSpan: o(function() {
                                return c.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return c.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                IsDowntime: n.variables.isDowntimeVar,
                                InfoMessage: l.Injector.resolve(l.ServiceNames.TranslationsService).getMessage("ndrK343o50iVYiha1GhLXA#Value.1054975282.1", "Scheduled downtime: Monthly on the first Saturday, 07:00-10:00 GMT. Service may be affected.")
                            },
                            events: {
                                _handleError: o(function(i) {
                                    a.handleError(i)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: p
                            },
                            _idProps: {
                                service: e,
                                uuid: "37",
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
                                uuid: "39"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(m, {
                            image: l.Navigation.VersionedURL.getVersionedUrl("img/tradershub.GlobeSM.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "40"
                            },
                            _widgetRecordProvider: r
                        }), t.createElement(P, {
                            extendedProperties: {
                                style: "font-size: 16px; margin-left: 8px;"
                            },
                            text: [f(_("4mCqd7467kqHL8fXM_qdWw#Value", "cTrader web terminal"))],
                            _idProps: {
                                service: e,
                                uuid: "41"
                            },
                            _widgetRecordProvider: r
                        })), t.createElement(V, {
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
                                uuid: "42"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(m, {
                            image: l.Navigation.VersionedURL.getVersionedUrl("img/tradershub.LaptopSM.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "43"
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
                                uuid: "44"
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
                                uuid: "45"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(P, {
                            extendedProperties: {
                                style: "color: #101213; font-size: 12px;"
                            },
                            text: [f(_("Q5eT0LgtuEWrz5_R6VT5cg#Value", "Also available on "))],
                            _idProps: {
                                service: e,
                                uuid: "46"
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
                            transition: l.Transitions.createTransition(l.Transitions.TransitionAnimation.Fade),
                            url: l.Navigation.generateScreenURL("https://getctradermac.com/deriv/ctrader-deriv-setup.dmg", {}),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "47"
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
                                uuid: "48"
                            },
                            _widgetRecordProvider: r
                        })), t.createElement(P, {
                            extendedProperties: {
                                style: "color: #101213; font-size: 12px;"
                            },
                            text: ["."],
                            _idProps: {
                                service: e,
                                uuid: "49"
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
                                uuid: "50"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(m, {
                            extendedProperties: {
                                style: "height: 80px; margin-bottom: 8px;"
                            },
                            gridProperties: {
                                width: "80px"
                            },
                            image: l.Navigation.VersionedURL.getVersionedUrl("img/tradershub.CTraderQRCode.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "51"
                            },
                            _widgetRecordProvider: r
                        }), t.createElement(P, {
                            extendedProperties: {
                                style: "color: #333333; font-size: 12px;"
                            },
                            text: [f(_("95bWoOTEqE6NHBDNR98HCQ#Value", "Scan to download the mobile app."))],
                            _idProps: {
                                service: e,
                                uuid: "52"
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
                                uuid: "54"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(m, {
                            image: l.Navigation.VersionedURL.getVersionedUrl("img/tradershub.MobileNotchSM.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "55"
                            },
                            _widgetRecordProvider: r
                        }), t.createElement(P, {
                            extendedProperties: {
                                style: "font-size: 16px; margin-left: 8px;"
                            },
                            text: [f(_("A_vPHnagH0uwsyZKsH8lAw#Value", "cTrader app"))],
                            _idProps: {
                                service: e,
                                uuid: "56"
                            },
                            _widgetRecordProvider: r
                        }))))), t.createElement(B, {
                            getOwnerSpan: o(function() {
                                return c.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return c.getChildSpan("destroy")
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
                                validationService: p
                            },
                            _idProps: {
                                service: e,
                                uuid: "57",
                                alias: "9"
                            },
                            _widgetRecordProvider: r,
                            _dependencies: []
                        }), t.createElement(N, {
                            getOwnerSpan: o(function() {
                                return c.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return c.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                IsDowntime: n.variables.isDowntimeVar,
                                IsVisible: n.variables.showModalVar === "ShowDxtradeTradeModal",
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
                                validationService: p
                            },
                            _idProps: {
                                service: e,
                                uuid: "58",
                                alias: "10"
                            },
                            _widgetRecordProvider: r,
                            _dependencies: []
                        }), t.createElement(h, {
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
                            text: [f(_("hCD8to9DK0ie4dlE+Q3ODg#Value", "Complete profile setup"))],
                            _idProps: {
                                service: e,
                                uuid: "61"
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
                            image: l.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standaloneSMClose.svg"),
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
                                uuid: "63"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(x, {
                            value: l.Injector.resolve(l.ServiceNames.TranslationsService).getMessage("AJGcop+xW0WCvOjRMsPPZg#ValueExpression.-513209657.1", "To enable your MT5 ") + n.variables.selectedAccountVar.labelAttr + l.Injector.resolve(l.ServiceNames.TranslationsService).getMessage("AJGcop+xW0WCvOjRMsPPZg#ValueExpression.489677834.1", " account, complete these steps."),
                            _idProps: {
                                service: e,
                                uuid: "64"
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
                                uuid: "65"
                            },
                            _widgetRecordProvider: r,
                            placeholders: {
                                content: new E(function(i, u) {
                                    return [t.createElement(z, {
                                        getOwnerSpan: o(function() {
                                            return c.getChildSpan("render")
                                        }, "getOwnerSpan"),
                                        getOwnerDisposeSpan: o(function() {
                                            return c.getChildSpan("destroy")
                                        }, "getOwnerDisposeSpan"),
                                        inputs: {
                                            Status: n.variables.profileSetupVar.getCurrent(u.iterationContext).statusLabelAttr,
                                            Description: n.variables.profileSetupVar.getCurrent(u.iterationContext).descriptionAttr,
                                            Icon: n.variables.profileSetupVar.getCurrent(u.iterationContext).iconAttr,
                                            Title: n.variables.profileSetupVar.getCurrent(u.iterationContext).titleAttr,
                                            IsDisabled: n.variables.profileSetupVar.getCurrent(u.iterationContext).isDisabledAttr
                                        },
                                        events: {
                                            _handleError: o(function(C) {
                                                a.handleError(C)
                                            }, "_handleError"),
                                            redirectToEvent$Action: o(function() {
                                                return Promise.resolve().then(function() {
                                                    var C = u.clone();
                                                    return a.redirectToKYC$Action(n.variables.profileSetupVar.getCurrent(u.iterationContext).identifierAttr === "poi" ? "proof-of-identity" : n.variables.profileSetupVar.getCurrent(u.iterationContext).identifierAttr === "poa" ? "proof-of-address" : "personal-details", a.callContext(C))
                                                })
                                            }, "redirectToEvent$Action")
                                        },
                                        _validationProps: {
                                            validationService: p
                                        },
                                        _idProps: {
                                            service: i,
                                            uuid: "66",
                                            alias: "11"
                                        },
                                        _widgetRecordProvider: r,
                                        _dependencies: []
                                    })]
                                }, d, e, "2")
                            },
                            _dependencies: []
                        }))), t.createElement(G, {
                            getOwnerSpan: o(function() {
                                return c.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return c.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                IsVisible: n.variables.showModalVar === "ShowBOLocksModal",
                                status: n.getCachedValue(e.getId("FRHCTa2vLEaD83qmWeQQGg.status"), function() {
                                    return n.variables.selectedAccountVar.statusAttr !== l.BuiltinFunctions.nullTextIdentifier() ? n.variables.selectedAccountVar.statusAttr : "under_maintenance"
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
                                validationService: p
                            },
                            _idProps: {
                                service: e,
                                uuid: "67",
                                alias: "12"
                            },
                            _widgetRecordProvider: r,
                            _dependencies: []
                        }), t.createElement(j, {
                            getOwnerSpan: o(function() {
                                return c.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return c.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                IsVisible: n.variables.showModalVar === "CompleteYourProfile"
                            },
                            events: {
                                _handleError: o(function(i) {
                                    a.handleError(i)
                                }, "_handleError"),
                                closeEvent$Action: o(function() {
                                    var i = d.clone();
                                    a.closeModal$Action(a.callContext(i))
                                }, "closeEvent$Action"),
                                updateProfile$Action: o(function() {
                                    return Promise.resolve().then(function() {
                                        var i = d.clone();
                                        return a.redirectToKYC$Action("account/personal-details", a.callContext(i))
                                    })
                                }, "updateProfile$Action")
                            },
                            _validationProps: {
                                validationService: p
                            },
                            _idProps: {
                                service: e,
                                uuid: "68",
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
                            image: l.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standaloneSMClose.svg"),
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
                            image: l.Navigation.VersionedURL.getVersionedUrl("img/tradershub.currencyusd.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "77"
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
                            image: l.Navigation.VersionedURL.getVersionedUrl("img/tradershub.currency_eur.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "79"
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
                            image: l.Navigation.VersionedURL.getVersionedUrl("img/tradershub.gbp.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "81"
                            },
                            _widgetRecordProvider: r
                        }), "Pound Sterling (GBP)"))), t.createElement(K, {
                            getOwnerSpan: o(function() {
                                return c.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return c.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                ShowHandler: !0,
                                Shape: q.shape.rounded
                            },
                            events: {
                                _handleError: o(function(i) {
                                    a.handleError(i)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: p
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
                                            uuid: "84"
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
                                            uuid: "86"
                                        },
                                        _widgetRecordProvider: r
                                    }, t.createElement(x, {
                                        extendedProperties: {
                                            style: "font-size: 16px;"
                                        },
                                        value: "To trade CFDs, choose a Wallet in your preferred currency from the options below.",
                                        _idProps: {
                                            service: e,
                                            uuid: "87"
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
                                        image: l.Navigation.VersionedURL.getVersionedUrl("img/tradershub.currencyusd.svg"),
                                        type: 0,
                                        _idProps: {
                                            service: e,
                                            uuid: "89"
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
                                        image: l.Navigation.VersionedURL.getVersionedUrl("img/tradershub.currency_eur.svg"),
                                        type: 0,
                                        _idProps: {
                                            service: e,
                                            uuid: "91"
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
                                        image: l.Navigation.VersionedURL.getVersionedUrl("img/tradershub.gbp.svg"),
                                        type: 0,
                                        _idProps: {
                                            service: e,
                                            uuid: "93"
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
                            visible: n.getCachedValue(e.getId("MyAccountsContainer.Visible"), function() {
                                return g.getAuthToken() !== l.BuiltinFunctions.nullTextIdentifier() && !n.variables.dataLoadingVar && !n.variables.createdCFDAccountsVar.isEmpty
                            }, function() {
                                return g.getAuthToken()
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
                            text: [f(_("yy02T41dgk2_5ZwMlKD4vQ#Value", "My accounts"))],
                            _idProps: {
                                service: e,
                                uuid: "95"
                            },
                            _widgetRecordProvider: r
                        }), w(n.variables.dataLoadingVar, !1, this, function() {
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
                                    uuid: "97"
                                },
                                _widgetRecordProvider: r
                            }), t.createElement(s, {
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
                                    content: new E(function(i, u) {
                                        return [t.createElement(M, {
                                            getOwnerSpan: o(function() {
                                                return c.getChildSpan("render")
                                            }, "getOwnerSpan"),
                                            getOwnerDisposeSpan: o(function() {
                                                return c.getChildSpan("destroy")
                                            }, "getOwnerDisposeSpan"),
                                            inputs: {
                                                ProductIcon: n.variables.createdCFDAccountsVar.getCurrent(u.iterationContext).iconAttr,
                                                Status: n.variables.createdCFDAccountsVar.getCurrent(u.iterationContext).statusAttr,
                                                Name: n.variables.createdCFDAccountsVar.getCurrent(u.iterationContext).labelAttr,
                                                Balance: n.getCachedValue(i.getId("3YgtuzZnC0eQpKKcPogfxQ.Balance"), function() {
                                                    return n.variables.createdCFDAccountsVar.getCurrent(u.iterationContext).identifierAttr === "ctrader_standard" ? g.getTotalCTraderBalance() + " " + n.variables.createdCFDAccountsVar.getCurrent(u.iterationContext).currencyAttr : n.variables.createdCFDAccountsVar.getCurrent(u.iterationContext).display_balanceAttr + " " + n.variables.createdCFDAccountsVar.getCurrent(u.iterationContext).currencyAttr
                                                }, function() {
                                                    return n.variables.createdCFDAccountsVar.getCurrent(u.iterationContext).identifierAttr
                                                }, function() {
                                                    return g.getTotalCTraderBalance()
                                                }, function() {
                                                    return n.variables.createdCFDAccountsVar.getCurrent(u.iterationContext).currencyAttr
                                                }, function() {
                                                    return n.variables.createdCFDAccountsVar.getCurrent(u.iterationContext).display_balanceAttr
                                                })
                                            },
                                            events: {
                                                _handleError: o(function(C) {
                                                    a.handleError(C)
                                                }, "_handleError"),
                                                onClickEvent$Action: o(function() {
                                                    var C = u.clone();
                                                    a.createdAccountOnClick$Action(a.callContext(C))
                                                }, "onClickEvent$Action")
                                            },
                                            _validationProps: {
                                                validationService: p
                                            },
                                            _idProps: {
                                                service: i,
                                                uuid: "101",
                                                alias: "15"
                                            },
                                            _widgetRecordProvider: r,
                                            _dependencies: []
                                        })]
                                    }, d, e, "3")
                                },
                                _dependencies: [v(g.getTotalCTraderBalance())]
                            })]
                        })), w(n.variables.dataLoadingVar, !1, this, function() {
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
                                    uuid: "103"
                                },
                                _widgetRecordProvider: r
                            }), t.createElement(s, {
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
                            }))]
                        }, function() {
                            return [t.createElement(s, {
                                align: 0,
                                animate: !0,
                                extendedProperties: {
                                    style: "margin-top: 24px;"
                                },
                                style: "display-flex align-items-center justify-content-space-between",
                                visible: n.getCachedValue(e.getId("AvailableAccountsHeader.Visible"), function() {
                                    return n.variables.dataLoadingVar ? !0 : n.variables.availableCFDAccountsVar.length > 0
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
                                text: [f(_("GWu4U1FTV0ykKmGiI13DIg#Value", "Available accounts"))],
                                _idProps: {
                                    service: e,
                                    uuid: "109"
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
                                text: [f(_("GXl9uOcG20akNT_DdQ3Ixg#Value", "View specifications"))],
                                _idProps: {
                                    service: e,
                                    uuid: "111"
                                },
                                _widgetRecordProvider: r
                            }), t.createElement(Z, {
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
                                    uuid: "112"
                                },
                                _widgetRecordProvider: r
                            }))), t.createElement(S, {
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
                                    content: new E(function(i, u) {
                                        return [t.createElement(k, {
                                            getOwnerSpan: o(function() {
                                                return c.getChildSpan("render")
                                            }, "getOwnerSpan"),
                                            getOwnerDisposeSpan: o(function() {
                                                return c.getChildSpan("destroy")
                                            }, "getOwnerDisposeSpan"),
                                            inputs: {
                                                ProductName: n.variables.availableCFDAccountsVar.getCurrent(u.iterationContext).labelAttr,
                                                ProductIcon: n.variables.availableCFDAccountsVar.getCurrent(u.iterationContext).iconAttr,
                                                ProductDescription: n.variables.availableCFDAccountsVar.getCurrent(u.iterationContext).descriptionAttr
                                            },
                                            events: {
                                                _handleError: o(function(C) {
                                                    a.handleError(C)
                                                }, "_handleError"),
                                                onClickEvent$Action: o(function() {
                                                    return Promise.resolve().then(function() {
                                                        var C = u.clone();
                                                        return a.availableAccountOnClick$Action(a.callContext(C))
                                                    })
                                                }, "onClickEvent$Action")
                                            },
                                            _validationProps: {
                                                validationService: p
                                            },
                                            _idProps: {
                                                service: i,
                                                uuid: "114",
                                                alias: "16"
                                            },
                                            _widgetRecordProvider: r,
                                            _dependencies: []
                                        })]
                                    }, d, e, "4")
                                },
                                _dependencies: []
                            })]
                        }), t.createElement(I, {
                            getOwnerSpan: o(function() {
                                return c.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return c.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                IsVisible: n.variables.showModalVar === "ShowRestrictedCountryWarningModal"
                            },
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
                                validationService: p
                            },
                            _idProps: {
                                service: e,
                                uuid: "115",
                                alias: "17"
                            },
                            _widgetRecordProvider: r,
                            _dependencies: []
                        })]
                    })
                },
                _dependencies: [v(n.variables.availableCFDAccountsVar), v(n.variables.createdCFDAccountsVar), v(n.variables.dataLoadingVar), v(n.variables.profileSetupVar), v(n.variables.selectedAccountVar), v(n.variables.isDowntimeVar), v(n.variables.cTraderAvailableAccountsCountVar), v(g.getAccountType()), v(n.variables.createdCtraderAccountsVar), v(n.variables.totalCTraderBalanceVar), v(n.variables.accountCreationLoadingVar), v(g.getTradingPlatformMt5PasswordReset()), v(g.getTradingPlatformDxtradePasswordReset()), v(n.variables.showModalVar), v(n.variables.isDxtradePasswordSetVar), v(n.variables.isMt5PasswordSetVar), v(n.variables.selectedAvailableAccountVar), v(g.getAuthToken())]
            }))
        }
    };
o(b, "View");
var Q = b,
    We = Q;
export {
    We as
    default
};