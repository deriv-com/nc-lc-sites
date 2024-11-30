import {
    a as w
} from "./_oschunk-XY45CPWI.js";
import "./_oschunk-QXMEMWPP.js";
import {
    a as y
} from "./_oschunk-ITC36N2D.js";
import {
    a as m
} from "./_oschunk-SUJQFUF5.js";
import "./_oschunk-LJVZHBJJ.js";
import "./_oschunk-SZLIT7QD.js";
import "./_oschunk-DNFEHUWC.js";
import "./_oschunk-BHZNFATE.js";
import {
    b as R,
    h as a,
    r as b,
    y as g
} from "./_oschunk-WAXNMQCP.js";
import "./_oschunk-LHY3WMNC.js";
import {
    a as E,
    g as P,
    i as u
} from "./_oschunk-J7LCUWB3.js";
import "./_oschunk-ESOYZIPG.js";
import "./_oschunk-XMOR6XCC.js";
import {
    a as x
} from "./_oschunk-H7UK4VZM.js";
import "./_oschunk-JSVFHRDW.js";
import "./_oschunk-LUKJNVXR.js";
import "./_oschunk-X4K3PA43.js";
import "./_oschunk-44PT7RP7.js";
import {
    ia as h
} from "./_oschunk-NTQBNJ73.js";
import {
    c as s,
    g as O
} from "./_oschunk-DVBKI63I.js";
var e = O(E());
var n = h,
    V = u.PlaceholderContent,
    M = u.IteratorPlaceholderContent,
    r = class r extends P.BaseWebScreen {
        static get displayName() {
            return "Signup.VerificationLinkExpired"
        }
        static getAttributes() {
            return {
                codeFunction: "VerificationLinkExpired",
                functionKey: "139ccba7-b526-4e22-9671-6ae5f2e72260",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.Signup.VerificationLinkExpired.css", "css/tradershub.AccountCreation.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [m]
        }
        get modelFactory() {
            return y
        }
        get controllerFactory() {
            return w
        }
        get title() {
            let C = this.model,
                o = this.controller,
                t = this.idService,
                v = o.validationService,
                i = o.callContext(),
                f = r.asPrimitiveValue,
                _ = r.getTranslation,
                c = this;
            return n.Injector.resolve(n.ServiceNames.TranslationsService).getMessage("p8ucEya1Ik6WcWrl8uciYA#TitleExpression.929560286.1", "Verification link expired | Deriv")
        }
        internalRender() {
            let C = this.model,
                o = this.controller,
                t = this.idService,
                v = o.validationService,
                i = this.widgetsRecordProvider,
                f = o.callContext(),
                _ = r.ifWidget,
                c = r.textWidget,
                W = r.asPrimitiveValue,
                l = r.getTranslation,
                S = this;
            return e.createElement("div", this.getRootNodeProperties(), e.createElement(m, {
                getOwnerSpan: s(function() {
                    return S.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: s(function() {
                    return S.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    NoContentMiddle: !0
                },
                events: {
                    _handleError: s(function(d) {
                        o.handleError(d)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: v
                },
                _idProps: {
                    service: t,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: i,
                placeholders: {
                    mainContent: new V(function() {
                        return [e.createElement(a, {
                            align: 0,
                            animate: !1,
                            style: "padding-y-m padding-x-base full-width content-container",
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "1"
                            },
                            _widgetRecordProvider: i
                        }, e.createElement(a, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "text-align: center;"
                            },
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "2"
                            },
                            _widgetRecordProvider: i
                        }, e.createElement(b, {
                            extendedProperties: {
                                style: "margin-bottom: 24px;"
                            },
                            image: n.Navigation.VersionedURL.getVersionedUrl("img/tradershub.warning.svg"),
                            type: 0,
                            _idProps: {
                                service: t,
                                uuid: "3"
                            },
                            _widgetRecordProvider: i
                        })), e.createElement(a, {
                            align: 0,
                            animate: !1,
                            style: "display-flex flex-direction-column justify-content-center align-items-center gap-s",
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "4"
                            },
                            _widgetRecordProvider: i
                        }, e.createElement(g, {
                            extendedProperties: {
                                style: "font-weight: 700;" + (x.isPhone$Action(f).isPhoneOut ? "font-size: 18px;" : "font-size: 20px")
                            },
                            style: "link-expired-heading",
                            text: [c(l("XE1yNfRdJ0iwXRRCn6CYPg#Value", "Email verification link expired"))],
                            _idProps: {
                                service: t,
                                uuid: "5"
                            },
                            _widgetRecordProvider: i
                        }), e.createElement(g, {
                            extendedProperties: {
                                style: "font-size: 16px;"
                            },
                            text: [c(l("Qz3kVnpsxkWctevjeSCALQ#Value", "Request a new one."))],
                            _idProps: {
                                service: t,
                                uuid: "6"
                            },
                            _widgetRecordProvider: i
                        })), e.createElement(a, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-top: 24px; padding: 0px;"
                            },
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "7"
                            },
                            _widgetRecordProvider: i
                        }, e.createElement(R, {
                            enabled: !0,
                            isDefault: !1,
                            onClick: s(function() {
                                try {
                                    n.Navigation.navigateTo(n.Navigation.generateScreenURL("tradershub", "signup", {}), n.Transitions.createTransition(n.Transitions.TransitionAnimation.Default), null, !0)
                                } catch (d) {
                                    if (d.name !== "RedirectOccurredException") throw d
                                }
                            }, "onClick"),
                            style: "btn btn-primary full-width",
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "8"
                            },
                            _widgetRecordProvider: i
                        }, c(l("ami+Wu5n+UeeTU8tRrHI6w#Value", "Resend email")))))]
                    })
                },
                _dependencies: []
            }))
        }
    };
s(r, "View");
var p = r,
    j = p;
export {
    j as
    default
};