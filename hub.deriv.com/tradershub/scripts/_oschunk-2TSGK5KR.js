import {
    a as x
} from "./_oschunk-YMTPAAM2.js";
import {
    a as V
} from "./_oschunk-6FZHKQ27.js";
import "./_oschunk-OOA3SUUU.js";
import {
    a as p
} from "./_oschunk-367MCH7Z.js";
import "./_oschunk-V52U2IZU.js";
import "./_oschunk-MOYCBUII.js";
import "./_oschunk-NYD6CGWS.js";
import "./_oschunk-EROCOLS7.js";
import {
    h as u,
    j as _,
    k as A,
    l as w,
    r as y,
    t as O
} from "./_oschunk-42NACYKQ.js";
import "./_oschunk-2M7PXTSQ.js";
import {
    a as D,
    g as R,
    i as d
} from "./_oschunk-RKYF3TWC.js";
import "./_oschunk-K7AFM7ZW.js";
import "./_oschunk-DOFMR6EA.js";
import "./_oschunk-2ZI4JQLD.js";
import "./_oschunk-IKZJT3AP.js";
import "./_oschunk-X4K3PA43.js";
import {
    wd as C
} from "./_oschunk-MSUVGI3L.js";
import {
    ia as S
} from "./_oschunk-2JKANR6M.js";
import {
    c as a,
    g as L
} from "./_oschunk-DVBKI63I.js";
var t = L(D());
var g = S,
    l = d.PlaceholderContent,
    I = d.IteratorPlaceholderContent,
    i = class i extends R.BaseWebScreen {
        static get displayName() {
            return "RealAccountCreationMobile.PersonalDetailsAccountPurpose"
        }
        static getAttributes() {
            return {
                codeFunction: "PersonalDetailsAccountPurpose",
                functionKey: "ae14d2e6-5127-45ac-8a1f-8eec0453e09a",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.RealAccountCreationMobile.PersonalDetailsAccountPurpose.css", "css/tradershub.AccountCreation.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [p]
        }
        get modelFactory() {
            return x
        }
        get controllerFactory() {
            return V
        }
        get title() {
            let s = this.model,
                o = this.controller,
                n = this.idService,
                v = o.validationService,
                r = o.callContext(),
                P = i.asPrimitiveValue,
                E = i.getTranslation,
                b = this;
            return g.Injector.resolve(g.ServiceNames.TranslationsService).getMessage("5tIUridRrEWKH47sBFPgmg#TitleExpression.-545367396.1", "Personal details | Deriv")
        }
        internalRender() {
            let s = this.model,
                o = this.controller,
                n = this.idService,
                v = o.validationService,
                r = this.widgetsRecordProvider,
                P = o.callContext(),
                E = i.ifWidget,
                b = i.textWidget,
                h = i.asPrimitiveValue,
                F = i.getTranslation,
                f = this;
            return t.createElement("div", this.getRootNodeProperties(), t.createElement(p, {
                getOwnerSpan: a(function() {
                    return f.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return f.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Analytics: s.getCachedValue(n.getId("MdGYiAATDkiqhs7AD2BdqA.Analytics"), function() {
                        return function() {
                            var e = new C;
                            return e.stepCodenameAttr = "personal_details", e.stepNumberAttr = "1", e
                        }()
                    }),
                    Title: "Personal details"
                },
                events: {
                    _handleError: a(function(e) {
                        o.handleError(e)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: v
                },
                _idProps: {
                    service: n,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: r,
                placeholders: {
                    content: new l(function() {
                        return [t.createElement(u, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: n,
                                uuid: "1"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(O, {
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            _idProps: {
                                service: n,
                                uuid: "2"
                            },
                            _widgetRecordProvider: r
                        }, b(F("magvm8LDEkqQTh5s_xxCVQ#Value", "Select your account purpose"))), t.createElement(A, {
                            animateItems: !0,
                            extendedProperties: {
                                style: "margin-top: 16px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            mode: 0,
                            source: s.variables.accountPurposeListVar,
                            style: "list list-group display-flex flex-direction-column gap-base",
                            tag: "div",
                            _idProps: {
                                service: n,
                                uuid: "3"
                            },
                            _widgetRecordProvider: r,
                            placeholders: {
                                content: new I(function(e, c) {
                                    return [t.createElement(w, {
                                        extendedProperties: {
                                            style: "background-color: #F8F9FA; border-color: #F1F3F5; border-radius: 4px; border-style: solid; border-width: 1px; cursor: pointer; padding: 16px;"
                                        },
                                        onClick: a(function() {
                                            var W = c.clone();
                                            o.listItemOnClick$Action(s.variables.accountPurposeListVar.getCurrent(c.iterationContext), o.callContext(W))
                                        }, "onClick"),
                                        style: "list-item",
                                        triggerActionOnFullSwipeLeft: !1,
                                        triggerActionOnFullSwipeRight: !1,
                                        _idProps: {
                                            service: e,
                                            name: "AccountPurposeListItem"
                                        },
                                        _widgetRecordProvider: r,
                                        placeholders: {
                                            leftActions: l.Empty,
                                            content: new l(function() {
                                                return [t.createElement(u, {
                                                    align: 0,
                                                    animate: !1,
                                                    style: "display-flex justify-content-space-between align-items-center ",
                                                    visible: !0,
                                                    _idProps: {
                                                        service: e,
                                                        uuid: "5"
                                                    },
                                                    _widgetRecordProvider: r
                                                }, t.createElement(_, {
                                                    extendedProperties: {
                                                        style: "font-weight: 500;"
                                                    },
                                                    gridProperties: {
                                                        classes: "OSFillParent"
                                                    },
                                                    value: s.variables.accountPurposeListVar.getCurrent(c.iterationContext).labelAttr,
                                                    _idProps: {
                                                        service: e,
                                                        uuid: "6"
                                                    },
                                                    _widgetRecordProvider: r
                                                }), t.createElement(y, {
                                                    image: g.Navigation.VersionedURL.getVersionedUrl("img/tradershub.iconarrow.svg"),
                                                    type: 0,
                                                    _idProps: {
                                                        service: e,
                                                        uuid: "7"
                                                    },
                                                    _widgetRecordProvider: r
                                                }))]
                                            }),
                                            rightActions: l.Empty
                                        },
                                        _dependencies: [h(s.variables.accountPurposeListVar.getCurrent(c.iterationContext).labelAttr)]
                                    })]
                                }, P, n, "1")
                            },
                            _dependencies: []
                        }))]
                    })
                },
                _dependencies: [h(s.variables.accountPurposeListVar)]
            }))
        }
    };
a(i, "View");
var m = i,
    j = m;
export {
    j as
    default
};