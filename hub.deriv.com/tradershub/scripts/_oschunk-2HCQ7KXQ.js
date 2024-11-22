import {
    a as C
} from "./_oschunk-NFOSUYFK.js";
import {
    a as k
} from "./_oschunk-CNHSYEXW.js";
import "./_oschunk-V3NL2V45.js";
import {
    a as L
} from "./_oschunk-ZSCN2CGL.js";
import "./_oschunk-UK73WSZT.js";
import "./_oschunk-XFSPMJPV.js";
import "./_oschunk-CJZXGA6I.js";
import {
    a as h
} from "./_oschunk-RRERX77H.js";
import "./_oschunk-MZYHHGAU.js";
import "./_oschunk-MDH7HMYN.js";
import "./_oschunk-HBEXL7KK.js";
import "./_oschunk-NJYKWZYU.js";
import "./_oschunk-SW7FWAXZ.js";
import "./_oschunk-BHZNFATE.js";
import {
    b,
    h as i,
    j as P,
    k as V,
    l as A,
    r as u,
    y as p
} from "./_oschunk-HUOHOHZB.js";
import "./_oschunk-Y45M2O2K.js";
import {
    a as z,
    g as E,
    i as W
} from "./_oschunk-6LASTRK7.js";
import "./_oschunk-TIJZDWYD.js";
import "./_oschunk-27GDEXUT.js";
import {
    a as m
} from "./_oschunk-D2MH3QEK.js";
import "./_oschunk-WJ75ZXAT.js";
import "./_oschunk-3WNR72F6.js";
import "./_oschunk-X4K3PA43.js";
import "./_oschunk-HQOLQB4T.js";
import {
    ia as S
} from "./_oschunk-NTQBNJ73.js";
import {
    c as o,
    g as T
} from "./_oschunk-DVBKI63I.js";
var e = T(z());
var l = S,
    x = W.PlaceholderContent,
    D = W.IteratorPlaceholderContent,
    v = class v extends E.BaseWebScreen {
        static get displayName() {
            return "WalletFlows.Wallets"
        }
        static getAttributes() {
            return {
                codeFunction: "Wallets",
                functionKey: "1089ee43-f5d0-45b1-99c6-5fafb2195171",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.WalletFlows.Wallets.css", "css/tradershub.AccountCreation.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [h, C]
        }
        get modelFactory() {
            return k
        }
        get controllerFactory() {
            return L
        }
        get title() {
            let a = this.model,
                n = this.controller,
                r = this.idService,
                y = n.validationService,
                t = n.callContext(),
                d = v.asPrimitiveValue,
                f = v.getTranslation,
                _ = this;
            return "Wallets"
        }
        internalRender() {
            let a = this.model,
                n = this.controller,
                r = this.idService,
                y = n.validationService,
                t = this.widgetsRecordProvider,
                d = n.callContext(),
                f = v.ifWidget,
                _ = v.textWidget,
                g = v.asPrimitiveValue,
                w = v.getTranslation,
                R = this;
            return e.createElement("div", this.getRootNodeProperties(), e.createElement(h, {
                getOwnerSpan: o(function() {
                    return R.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return R.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: o(function(s) {
                        n.handleError(s)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: y
                },
                _idProps: {
                    service: r,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: t,
                placeholders: {
                    content: new x(function() {
                        return [e.createElement(i, {
                            align: 0,
                            animate: !1,
                            style: "wallet-heading-container",
                            visible: !0,
                            _idProps: {
                                service: r,
                                name: "WalletSwitcher"
                            },
                            _widgetRecordProvider: t
                        }, e.createElement(p, {
                            style: "wallet-heading-title",
                            text: ["My Wallets"],
                            _idProps: {
                                service: r,
                                uuid: "2"
                            },
                            _widgetRecordProvider: t
                        })), e.createElement(i, {
                            align: 0,
                            animate: !1,
                            style: "wallet-container",
                            visible: !0,
                            _idProps: {
                                service: r,
                                name: "WalletContent"
                            },
                            _widgetRecordProvider: t
                        }, e.createElement(i, {
                            align: 0,
                            animate: !1,
                            style: "wallet-left-side",
                            visible: !0,
                            _idProps: {
                                service: r,
                                name: "LeftContent"
                            },
                            _widgetRecordProvider: t
                        }, f(a.variables.isLoadingVar, !1, this, function() {
                            return [e.createElement(i, {
                                align: 0,
                                animate: !1,
                                style: "wallet-header-skeleton wallet-skeleton",
                                visible: !0,
                                _idProps: {
                                    service: r,
                                    uuid: "5"
                                },
                                _widgetRecordProvider: t
                            })]
                        }, function() {
                            return [e.createElement(i, {
                                align: 0,
                                animate: !1,
                                extendedEvents: {
                                    onClick: o(function() {
                                        var s = d.clone();
                                        n.walletHeaderOnClick$Action(n.callContext(s))
                                    }, "onClick")
                                },
                                style: "wallet-header wallet-header-primary",
                                visible: !0,
                                _idProps: {
                                    service: r,
                                    name: "WalletHeader"
                                },
                                _widgetRecordProvider: t
                            }, e.createElement(i, {
                                align: 0,
                                animate: !1,
                                style: "wallet-header-info-wrapper",
                                visible: !0,
                                _idProps: {
                                    service: r,
                                    name: "WalletHeaderInfoWrapper"
                                },
                                _widgetRecordProvider: t
                            }, e.createElement(i, {
                                align: 0,
                                animate: !1,
                                style: "wallet-header-currency-icon",
                                visible: !0,
                                _idProps: {
                                    service: r,
                                    uuid: "8"
                                },
                                _widgetRecordProvider: t
                            }, e.createElement(u, {
                                type: 1,
                                url: a.variables.activeWalletVar.iconAttr,
                                _idProps: {
                                    service: r,
                                    uuid: "9"
                                },
                                _widgetRecordProvider: t
                            })), e.createElement(i, {
                                align: 0,
                                animate: !1,
                                style: "flex-1",
                                visible: !0,
                                _idProps: {
                                    service: r,
                                    uuid: "10"
                                },
                                _widgetRecordProvider: t
                            }, e.createElement(i, {
                                align: 0,
                                animate: !1,
                                style: "display-flex flex-direction-column",
                                visible: !0,
                                _idProps: {
                                    service: r,
                                    uuid: "11"
                                },
                                _widgetRecordProvider: t
                            }, e.createElement(P, {
                                style: a.getCachedValue(r.getId("1ukwUKv2zkW0DNrTl4JakQ.Style"), function() {
                                    return m.isDesktop$Action(d).isDesktopOut ? "font-size-s" : "font-size-xs"
                                }),
                                value: a.variables.activeWalletVar.nameAttr,
                                _idProps: {
                                    service: r,
                                    uuid: "12"
                                },
                                _widgetRecordProvider: t
                            }), e.createElement(P, {
                                extendedProperties: {
                                    style: "font-size: 20px;"
                                },
                                gridProperties: {
                                    marginLeft: "0px"
                                },
                                style: "font-bold heading5 full-width",
                                value: a.variables.activeWalletVar.formattedBalanceAttr,
                                _idProps: {
                                    service: r,
                                    uuid: "13"
                                },
                                _widgetRecordProvider: t
                            }))), e.createElement(i, {
                                align: 0,
                                animate: !1,
                                visible: a.getCachedValue(r.getId("VFwAheGyjku4M5hTVBQ+XA.Visible"), function() {
                                    return !m.isDesktop$Action(d).isDesktopOut
                                }),
                                _idProps: {
                                    service: r,
                                    uuid: "14"
                                },
                                _widgetRecordProvider: t
                            }, e.createElement(u, {
                                extendedEvents: {
                                    onClick: o(function() {
                                        var s = d.clone();
                                        n.onClick$Action(n.callContext(s))
                                    }, "onClick")
                                },
                                image: l.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standalone_chevron_right_md.svg"),
                                style: "cursor-pointer",
                                type: 0,
                                _idProps: {
                                    service: r,
                                    uuid: "15"
                                },
                                _widgetRecordProvider: t
                            }))), e.createElement(i, {
                                align: 0,
                                animate: !1,
                                style: "wallet-header-actions",
                                visible: !0,
                                _idProps: {
                                    service: r,
                                    name: "WalletHeaderActions"
                                },
                                _widgetRecordProvider: t
                            }, e.createElement(i, {
                                align: 0,
                                animate: !1,
                                style: "display-flex flex-direction-column align-items-center",
                                visible: !0,
                                _idProps: {
                                    service: r,
                                    uuid: "17"
                                },
                                _widgetRecordProvider: t
                            }, e.createElement(b, {
                                enabled: !0,
                                isDefault: !1,
                                onClick: o(function() {
                                    return Promise.resolve().then(function() {
                                        var s = d.clone();
                                        return n.depositbtnOnClick$Action(n.callContext(s))
                                    })
                                }, "onClick"),
                                style: "wallet-header-btn wallet-header-btn-primary",
                                visible: !0,
                                _idProps: {
                                    service: r,
                                    name: "DepositBtn2"
                                },
                                _widgetRecordProvider: t
                            }, e.createElement(u, {
                                image: l.Navigation.VersionedURL.getVersionedUrl("img/tradershub.plussmwhite.svg"),
                                type: 0,
                                _idProps: {
                                    service: r,
                                    uuid: "19"
                                },
                                _widgetRecordProvider: t
                            })), e.createElement(p, {
                                extendedProperties: {
                                    style: "font-size: 12px;"
                                },
                                style: "margin-top-xs",
                                text: [_(w("gcJUiGquMUWqpLcbsdW73w#Value", "Deposit"))],
                                _idProps: {
                                    service: r,
                                    uuid: "20"
                                },
                                _widgetRecordProvider: t
                            })), e.createElement(i, {
                                align: 0,
                                animate: !1,
                                style: "display-flex flex-direction-column align-items-center",
                                visible: !0,
                                _idProps: {
                                    service: r,
                                    uuid: "21"
                                },
                                _widgetRecordProvider: t
                            }, e.createElement(b, {
                                enabled: !0,
                                extendedProperties: {
                                    style: "border-color: #101213; border-width: 1px; margin-bottom: 0px; margin-right: 0px; margin-top: 0px;"
                                },
                                gridProperties: {
                                    marginLeft: "0px"
                                },
                                isDefault: !1,
                                onClick: o(function() {
                                    return Promise.resolve().then(function() {
                                        var s = d.clone();
                                        return n.withdrawbtnOnClick$Action(n.callContext(s))
                                    })
                                }, "onClick"),
                                style: "wallet-header-btn",
                                visible: !0,
                                _idProps: {
                                    service: r,
                                    name: "WithdrawBtn3"
                                },
                                _widgetRecordProvider: t
                            }, e.createElement(u, {
                                image: l.Navigation.VersionedURL.getVersionedUrl("img/tradershub.minussm.svg"),
                                type: 0,
                                _idProps: {
                                    service: r,
                                    uuid: "23"
                                },
                                _widgetRecordProvider: t
                            })), e.createElement(p, {
                                extendedProperties: {
                                    style: "font-size: 12px;"
                                },
                                style: "margin-top-xs",
                                text: [_(w("TQspuQyAvkSRgErcd8fcBA#Value", "Withdraw"))],
                                _idProps: {
                                    service: r,
                                    uuid: "24"
                                },
                                _widgetRecordProvider: t
                            })), e.createElement(i, {
                                align: 0,
                                animate: !1,
                                style: "display-flex flex-direction-column align-items-center",
                                visible: !0,
                                _idProps: {
                                    service: r,
                                    uuid: "25"
                                },
                                _widgetRecordProvider: t
                            }, e.createElement(b, {
                                enabled: !0,
                                extendedProperties: {
                                    style: "border-color: #101213; border-width: 1px; padding: 0px 16px 0px 16px;"
                                },
                                isDefault: !1,
                                onClick: o(function() {
                                    try {
                                        l.Navigation.navigateTo(l.Navigation.generateScreenURL("tradershub", "wallets/transfer", {
                                            WalletsAccountList: l.DataConversion.ServerDataConverter.to(a.variables.serializeAddMoreWaleltsListVar, l.DataTypes.DataTypes.Text)
                                        }), l.Transitions.createTransition(l.Transitions.TransitionAnimation.Default), null, !0)
                                    } catch (s) {
                                        if (s.name !== "RedirectOccurredException") throw s
                                    }
                                }, "onClick"),
                                style: "wallet-header-btn",
                                visible: !0,
                                _idProps: {
                                    service: r,
                                    name: "TransferBtn2"
                                },
                                _widgetRecordProvider: t
                            }, e.createElement(u, {
                                extendedProperties: {
                                    style: "color: #222;"
                                },
                                image: l.Navigation.VersionedURL.getVersionedUrl("img/tradershub.arrowuparrowdownsm.svg"),
                                type: 0,
                                _idProps: {
                                    service: r,
                                    uuid: "27"
                                },
                                _widgetRecordProvider: t
                            })), e.createElement(p, {
                                extendedProperties: {
                                    style: "font-size: 12px;"
                                },
                                style: "margin-top-xs",
                                text: [_(w("SdHIl6tDZEWkp0OR+ao6XQ#Value", "Transfer"))],
                                _idProps: {
                                    service: r,
                                    uuid: "28"
                                },
                                _widgetRecordProvider: t
                            })), e.createElement(i, {
                                align: 0,
                                animate: !1,
                                visible: a.getCachedValue(r.getId("u+fJY0xzhECxkM21RmE4lQ.Visible"), function() {
                                    return m.isDesktop$Action(d).isDesktopOut
                                }),
                                _idProps: {
                                    service: r,
                                    uuid: "29"
                                },
                                _widgetRecordProvider: t
                            }, e.createElement(u, {
                                extendedEvents: {
                                    onClick: o(function() {
                                        var s = d.clone();
                                        n.onClick$Action(n.callContext(s))
                                    }, "onClick")
                                },
                                image: l.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standalone_chevron_right_md.svg"),
                                style: "cursor-pointer",
                                type: 0,
                                _idProps: {
                                    service: r,
                                    uuid: "30"
                                },
                                _widgetRecordProvider: t
                            }))))]
                        }), e.createElement(i, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: r,
                                name: "MoreWallet"
                            },
                            _widgetRecordProvider: t
                        }, e.createElement(p, {
                            extendedProperties: {
                                style: "font-size: 16px; font-weight: bold;"
                            },
                            text: ["More wallets"],
                            _idProps: {
                                service: r,
                                uuid: "32"
                            },
                            _widgetRecordProvider: t
                        }), e.createElement(i, {
                            align: 0,
                            animate: !1,
                            style: "full-width full-height margin-top-base",
                            visible: !0,
                            _idProps: {
                                service: r,
                                uuid: "33"
                            },
                            _widgetRecordProvider: t
                        }, f(a.variables.isLoadingVar, !1, this, function() {
                            return [e.createElement(i, {
                                align: 0,
                                animate: !1,
                                style: "wallets-add-more-section",
                                visible: !0,
                                _idProps: {
                                    service: r,
                                    uuid: "34"
                                },
                                _widgetRecordProvider: t
                            }, e.createElement(i, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "border-radius: 8px;"
                                },
                                style: "wallets-add-more-cards wallet-skeleton",
                                visible: !0,
                                _idProps: {
                                    service: r,
                                    uuid: "35"
                                },
                                _widgetRecordProvider: t
                            }), e.createElement(i, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "border-radius: 8px;"
                                },
                                style: "wallets-add-more-cards wallet-skeleton",
                                visible: !0,
                                _idProps: {
                                    service: r,
                                    uuid: "36"
                                },
                                _widgetRecordProvider: t
                            }), e.createElement(i, {
                                align: 0,
                                animate: !0,
                                extendedProperties: {
                                    style: "border-radius: 8px;"
                                },
                                style: "wallets-add-more-cards wallet-skeleton",
                                visible: a.getCachedValue(r.getId("hKcSI6yYIEyqQfGijTGgLw.Visible"), function() {
                                    return m.isDesktop$Action(d).isDesktopOut
                                }),
                                _idProps: {
                                    service: r,
                                    uuid: "37"
                                },
                                _widgetRecordProvider: t
                            }), e.createElement(i, {
                                align: 0,
                                animate: !0,
                                extendedProperties: {
                                    style: "border-radius: 8px;"
                                },
                                style: "wallets-add-more-cards wallet-skeleton",
                                visible: a.getCachedValue(r.getId("T7h+73AXFUOYYXYXXcJUQA.Visible"), function() {
                                    return m.isDesktop$Action(d).isDesktopOut
                                }),
                                _idProps: {
                                    service: r,
                                    uuid: "38"
                                },
                                _widgetRecordProvider: t
                            }), e.createElement(i, {
                                align: 0,
                                animate: !0,
                                extendedProperties: {
                                    style: "border-radius: 8px;"
                                },
                                style: "wallets-add-more-cards wallet-skeleton",
                                visible: a.getCachedValue(r.getId("SjAtx3aBMEao39WjhV6zpA.Visible"), function() {
                                    return m.isDesktop$Action(d).isDesktopOut
                                }),
                                _idProps: {
                                    service: r,
                                    uuid: "39"
                                },
                                _widgetRecordProvider: t
                            }), e.createElement(i, {
                                align: 0,
                                animate: !0,
                                extendedProperties: {
                                    style: "border-radius: 8px;"
                                },
                                style: "wallets-add-more-cards wallet-skeleton",
                                visible: a.getCachedValue(r.getId("ew8F6HTgt0KuCFg2MIipEA.Visible"), function() {
                                    return m.isDesktop$Action(d).isDesktopOut
                                }),
                                _idProps: {
                                    service: r,
                                    uuid: "40"
                                },
                                _widgetRecordProvider: t
                            }))]
                        }, function() {
                            return [e.createElement(V, {
                                animateItems: !0,
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                mode: 0,
                                source: a.variables.deserializeAddMoreWalletsListVar,
                                style: "wallets-add-more-section",
                                tag: "div",
                                _idProps: {
                                    service: r,
                                    uuid: "41"
                                },
                                _widgetRecordProvider: t,
                                placeholders: {
                                    content: new D(function(s, c) {
                                        return [e.createElement(A, {
                                            extendedProperties: {
                                                style: "border-color: #F1F3F5; border-radius: 8px; border-style: solid; border-width: 1px; font-size: 12px; font-weight: normal;"
                                            },
                                            onClick: o(function() {
                                                return Promise.resolve().then(function() {
                                                    var I = c.clone();
                                                    return n.walletCardOnClick$Action(n.callContext(I))
                                                })
                                            }, "onClick"),
                                            style: '"list-item"',
                                            triggerActionOnFullSwipeLeft: !0,
                                            triggerActionOnFullSwipeRight: !0,
                                            _idProps: {
                                                service: s,
                                                name: "ListItem1"
                                            },
                                            _widgetRecordProvider: t,
                                            placeholders: {
                                                leftActions: x.Empty,
                                                content: new x(function() {
                                                    return [f(a.variables.deserializeAddMoreWalletsListVar.getCurrent(c.iterationContext).is_addedAttr, !1, this, function() {
                                                        return [e.createElement(i, {
                                                            align: 0,
                                                            animate: !1,
                                                            style: "background-neutral-1 padding-base display-flex flex-direction-column gap-base wallets-add-more-cards cursor-pointer",
                                                            visible: !0,
                                                            _idProps: {
                                                                service: s,
                                                                uuid: "43"
                                                            },
                                                            _widgetRecordProvider: t
                                                        }, e.createElement(i, {
                                                            align: 0,
                                                            animate: !1,
                                                            style: "display-flex justify-content-space-between align-items-center",
                                                            visible: !0,
                                                            _idProps: {
                                                                service: s,
                                                                uuid: "44"
                                                            },
                                                            _widgetRecordProvider: t
                                                        }, e.createElement(u, {
                                                            extendedProperties: {
                                                                style: "height: 24px;"
                                                            },
                                                            gridProperties: {
                                                                width: "24px"
                                                            },
                                                            type: 1,
                                                            url: a.variables.deserializeAddMoreWalletsListVar.getCurrent(c.iterationContext).iconAttr,
                                                            _idProps: {
                                                                service: s,
                                                                uuid: "45"
                                                            },
                                                            _widgetRecordProvider: t
                                                        }), e.createElement(u, {
                                                            gridProperties: {
                                                                classes: "ThemeGrid_MarginGutter"
                                                            },
                                                            image: l.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standalone_chevron_right_sm.svg"),
                                                            type: 0,
                                                            _idProps: {
                                                                service: s,
                                                                uuid: "46"
                                                            },
                                                            _widgetRecordProvider: t
                                                        })), e.createElement(i, {
                                                            align: 0,
                                                            animate: !1,
                                                            style: "display-flex flex-direction-column full-width",
                                                            visible: !0,
                                                            _idProps: {
                                                                service: s,
                                                                uuid: "47"
                                                            },
                                                            _widgetRecordProvider: t
                                                        }, e.createElement(P, {
                                                            extendedProperties: {
                                                                style: "font-size: 12px;"
                                                            },
                                                            value: a.variables.deserializeAddMoreWalletsListVar.getCurrent(c.iterationContext).nameAttr,
                                                            _idProps: {
                                                                service: s,
                                                                uuid: "48"
                                                            },
                                                            _widgetRecordProvider: t
                                                        }), e.createElement(P, {
                                                            extendedProperties: {
                                                                style: "font-size: 12px; font-weight: bold;"
                                                            },
                                                            gridProperties: {
                                                                marginLeft: "0px"
                                                            },
                                                            value: a.variables.deserializeAddMoreWalletsListVar.getCurrent(c.iterationContext).formattedBalanceAttr,
                                                            _idProps: {
                                                                service: s,
                                                                uuid: "49"
                                                            },
                                                            _widgetRecordProvider: t
                                                        })))]
                                                    }, function() {
                                                        return [e.createElement(i, {
                                                            align: 0,
                                                            animate: !1,
                                                            style: "padding-base display-flex flex-direction-column gap-base wallets-add-more-cards cursor-pointer",
                                                            visible: !0,
                                                            _idProps: {
                                                                service: s,
                                                                uuid: "50"
                                                            },
                                                            _widgetRecordProvider: t
                                                        }, e.createElement(i, {
                                                            align: 0,
                                                            animate: !1,
                                                            style: "display-flex justify-content-space-between align-items-center",
                                                            visible: !0,
                                                            _idProps: {
                                                                service: s,
                                                                uuid: "51"
                                                            },
                                                            _widgetRecordProvider: t
                                                        }, e.createElement(u, {
                                                            extendedProperties: {
                                                                style: "height: 24px;"
                                                            },
                                                            gridProperties: {
                                                                width: "24px"
                                                            },
                                                            type: 1,
                                                            url: a.variables.deserializeAddMoreWalletsListVar.getCurrent(c.iterationContext).iconAttr,
                                                            _idProps: {
                                                                service: s,
                                                                uuid: "52"
                                                            },
                                                            _widgetRecordProvider: t
                                                        }), e.createElement(u, {
                                                            gridProperties: {
                                                                classes: "ThemeGrid_MarginGutter",
                                                                width: "32px"
                                                            },
                                                            image: l.Navigation.VersionedURL.getVersionedUrl("img/tradershub.circleplusmd.svg"),
                                                            type: 0,
                                                            _idProps: {
                                                                service: s,
                                                                uuid: "53"
                                                            },
                                                            _widgetRecordProvider: t
                                                        })), e.createElement(i, {
                                                            align: 0,
                                                            animate: !1,
                                                            style: "display-flex flex-direction-column full-width",
                                                            visible: !0,
                                                            _idProps: {
                                                                service: s,
                                                                uuid: "54"
                                                            },
                                                            _widgetRecordProvider: t
                                                        }, e.createElement(P, {
                                                            extendedProperties: {
                                                                style: "font-size: 12px;"
                                                            },
                                                            value: a.variables.deserializeAddMoreWalletsListVar.getCurrent(c.iterationContext).nameAttr,
                                                            _idProps: {
                                                                service: s,
                                                                uuid: "55"
                                                            },
                                                            _widgetRecordProvider: t
                                                        })))]
                                                    })]
                                                }),
                                                rightActions: x.Empty
                                            },
                                            _dependencies: [g(a.variables.deserializeAddMoreWalletsListVar.getCurrent(c.iterationContext).formattedBalanceAttr), g(a.variables.deserializeAddMoreWalletsListVar.getCurrent(c.iterationContext).nameAttr), g(a.variables.deserializeAddMoreWalletsListVar.getCurrent(c.iterationContext).iconAttr), g(a.variables.deserializeAddMoreWalletsListVar.getCurrent(c.iterationContext).is_addedAttr)]
                                        })]
                                    }, d, r, "1")
                                },
                                _dependencies: []
                            })]
                        })))), e.createElement(i, {
                            align: 0,
                            animate: !1,
                            style: "wallets-recent-transactions",
                            visible: !0,
                            _idProps: {
                                service: r,
                                name: "WalletRecentTransaction"
                            },
                            _widgetRecordProvider: t
                        }, e.createElement(i, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: r,
                                name: "TransactionsWrapper"
                            },
                            _widgetRecordProvider: t
                        }, e.createElement(p, {
                            extendedProperties: {
                                style: "font-size: 16px;"
                            },
                            style: "font-bold",
                            text: ["Recent transactions"],
                            _idProps: {
                                service: r,
                                uuid: "58"
                            },
                            _widgetRecordProvider: t
                        }), e.createElement(i, {
                            align: 0,
                            animate: !1,
                            style: "margin-top-base",
                            visible: !0,
                            _idProps: {
                                service: r,
                                uuid: "59"
                            },
                            _widgetRecordProvider: t
                        }, f(a.variables.isLoadingVar, !1, this, function() {
                            return [e.createElement(i, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "border-radius: 8px;"
                                },
                                style: "wallets-recent-transactions-skeleton wallet-skeleton",
                                visible: !0,
                                _idProps: {
                                    service: r,
                                    uuid: "60"
                                },
                                _widgetRecordProvider: t
                            })]
                        }, function() {
                            return [f(a.variables.transactionsVar.isEmpty, !1, this, function() {
                                return [e.createElement(i, {
                                    align: 0,
                                    animate: !1,
                                    style: "display-flex flex-direction-column align-items-center justify-content-center",
                                    visible: !0,
                                    _idProps: {
                                        service: r,
                                        name: "EmptyTransactionContainer"
                                    },
                                    _widgetRecordProvider: t
                                }, e.createElement(p, {
                                    extendedProperties: {
                                        style: "border-color: #6a7178; font-size: 14px;"
                                    },
                                    text: [_(w("0N1NgjOCaEauNiGFFzpGqA#Value", "No transactions found"))],
                                    _idProps: {
                                        service: r,
                                        uuid: "62"
                                    },
                                    _widgetRecordProvider: t
                                }))]
                            }, function() {
                                return [e.createElement(C, {
                                    getOwnerSpan: o(function() {
                                        return R.getChildSpan("render")
                                    }, "getOwnerSpan"),
                                    getOwnerDisposeSpan: o(function() {
                                        return R.getChildSpan("destroy")
                                    }, "getOwnerDisposeSpan"),
                                    inputs: {
                                        TransactionsList: a.variables.transactionsVar
                                    },
                                    events: {
                                        _handleError: o(function(s) {
                                            n.handleError(s)
                                        }, "_handleError")
                                    },
                                    _validationProps: {
                                        validationService: y
                                    },
                                    _idProps: {
                                        service: r,
                                        uuid: "63",
                                        alias: "2"
                                    },
                                    _widgetRecordProvider: t,
                                    _dependencies: []
                                })]
                            })]
                        })))))]
                    })
                },
                _dependencies: [g(a.variables.transactionsVar), g(a.variables.deserializeAddMoreWalletsListVar), g(a.variables.activeWalletVar.formattedBalanceAttr), g(a.variables.activeWalletVar.nameAttr), g(a.variables.activeWalletVar.iconAttr), g(a.variables.isLoadingVar)]
            }))
        }
    };
o(v, "View");
var O = v,
    K = O;
export {
    K as
    default
};