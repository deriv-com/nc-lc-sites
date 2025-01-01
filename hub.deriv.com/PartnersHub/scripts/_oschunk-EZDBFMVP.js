import {
    a as j
} from "./_oschunk-Y3NC4ZGN.js";
import {
    a as B
} from "./_oschunk-XNSKYLKO.js";
import "./_oschunk-QTRZEJSW.js";
import "./_oschunk-Q5BYWPWW.js";
import "./_oschunk-WGHHTA53.js";
import "./_oschunk-B5ZMBNKS.js";
import {
    a as Z
} from "./_oschunk-LIFJPTF7.js";
import {
    a as A
} from "./_oschunk-4VSQOIBE.js";
import {
    a as D
} from "./_oschunk-F3FP5HB2.js";
import {
    a as I
} from "./_oschunk-KURWLJI2.js";
import "./_oschunk-ROAU47YI.js";
import "./_oschunk-2MST7FR4.js";
import {
    a as R,
    b as V
} from "./_oschunk-ZL2HTVZN.js";
import "./_oschunk-CLRE6NFZ.js";
import "./_oschunk-P2MIYWR2.js";
import "./_oschunk-N6CDNE7S.js";
import "./_oschunk-MKEU6QPR.js";
import "./_oschunk-454LWTJN.js";
import "./_oschunk-DIXRVE4J.js";
import {
    a as L
} from "./_oschunk-JNIYO5MF.js";
import "./_oschunk-I6UUKQBK.js";
import "./_oschunk-C75U7DRJ.js";
import "./_oschunk-JHXZLUP2.js";
import "./_oschunk-VDU6C3OQ.js";
import "./_oschunk-TWAMG3Q4.js";
import "./_oschunk-LDY7XNSJ.js";
import {
    c as O,
    d as v,
    f,
    g as C,
    n as U,
    p as T,
    u as S
} from "./_oschunk-LWMGEL7F.js";
import "./_oschunk-KWCHY67Z.js";
import "./_oschunk-4GXKK3IG.js";
import {
    a as Q,
    g as E,
    i as x
} from "./_oschunk-WZHUAZJP.js";
import "./_oschunk-5VU7DWFQ.js";
import "./_oschunk-RILYVCVH.js";
import {
    a as F
} from "./_oschunk-BDI2RWOA.js";
import "./_oschunk-P3RPGEI5.js";
import {
    Ue as $,
    a as H,
    rd as k,
    sd as N,
    yf as z
} from "./_oschunk-7WCOCYFU.js";
import {
    ia as W
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as n,
    h as K
} from "./_oschunk-QHO7QY6K.js";
var i = K(Q());
var o = W,
    b = x.PlaceholderContent,
    _ = x.IteratorPlaceholderContent,
    h = class h extends E.BaseWebScreen {
        static get displayName() {
            return "PhNavigation.AllEvents"
        }
        static getAttributes() {
            return {
                codeFunction: "AllEvents",
                functionKey: "1555786f-84f5-41d4-8c20-a81a9314e65b",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/PartnersHub.PHubTest.css", "css/PartnersHub.PhNavigation.AllEvents.css", "css/PartnersHub.PHubTest.extra.css"]
        }
        static getJsDependencies() {
            return ["scripts/PartnersHub.UserScripts.DerivAnalytics.js"]
        }
        static getBlocks() {
            return [B, I, A, V, L, D, R]
        }
        get modelFactory() {
            return Z
        }
        get controllerFactory() {
            return j
        }
        get title() {
            return E.BaseWebScreen.getTranslation("b3hVFfWE1EGMIKgakxTmWw#Title", "AllEvents")
        }
        internalRender() {
            let e = this.model,
                l = this.controller,
                d = this.idService,
                p = l.validationService,
                a = this.widgetsRecordProvider,
                g = l.callContext(),
                m = h.ifWidget,
                P = h.textWidget,
                s = h.asPrimitiveValue,
                y = h.getTranslation,
                u = this;
            return i.createElement("div", this.getRootNodeProperties(), i.createElement(B, {
                getOwnerSpan: n(function() {
                    return u.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: n(function() {
                    return u.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    CurrentScreen: H.navigation.events
                },
                events: {
                    _handleError: n(function(t) {
                        l.handleError(t)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: p
                },
                _idProps: {
                    service: d,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: a,
                placeholders: {
                    customMobileHeader: b.Empty,
                    placeholder: new b(function() {
                        return [i.createElement(I, {
                            getOwnerSpan: n(function() {
                                return u.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return u.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                FooterInfo: e.getCachedValue(d.getId("m_EN8cJ0l06SIa9TkVFm+Q.FooterInfo"), function() {
                                    return function() {
                                        var t = new $;
                                        return t.primaryButtonLabelAttr = o.Injector.resolve(o.ServiceNames.TranslationsService).getMessage("fx1MCzsMgUGyM+ahvQLM6A#Value.63476558.1", "Apply"), t.secondaryButtonLabelAttr = o.Injector.resolve(o.ServiceNames.TranslationsService).getMessage("NL31kW1FYU6sBEzuCAeYqw#Value.731508014.1", "Clear all"), t.shouldHideOnDesktopAttr = !1, t
                                    }()
                                }),
                                HeaderInfo: e.getCachedValue(d.getId("m_EN8cJ0l06SIa9TkVFm+Q.HeaderInfo"), function() {
                                    return function() {
                                        var t = new z;
                                        return t.showLeftButtonAttr = !1, t.showRightButtonAttr = !0, t.titleAttr = o.Injector.resolve(o.ServiceNames.TranslationsService).getMessage("tTeyRzF7mkK6VfpLJlKMuA#Value.810105819.1", "Filters"), t
                                    }()
                                }),
                                IsSidebarOpen: e.variables.isSidebarOpenVar,
                                ContentClassName: "display-flex flex-direction-column gap-base"
                            },
                            events: {
                                _handleError: n(function(t) {
                                    l.handleError(t)
                                }, "_handleError"),
                                primaryButtonAction$Action: n(function() {
                                    var t = g.clone();
                                    l.onClickApplyFilter$Action(l.callContext(t))
                                }, "primaryButtonAction$Action"),
                                setModalId$Action: n(function(t) {
                                    var r = g.clone();
                                    l.setModalId$Action(t, l.callContext(r))
                                }, "setModalId$Action"),
                                headerRightButtonAction$Action: n(function() {
                                    var t = g.clone();
                                    l.toggleSidebar$Action(l.callContext(t))
                                }, "headerRightButtonAction$Action"),
                                toggleSidebar$Action: n(function(t, r) {
                                    var c = g.clone();
                                    l.toggleSidebarVariable$Action(l.callContext(c))
                                }, "toggleSidebar$Action"),
                                secondaryButtonAction$Action: n(function() {
                                    var t = g.clone();
                                    l.onClickClearAllFilter$Action(l.callContext(t))
                                }, "secondaryButtonAction$Action")
                            },
                            _validationProps: {
                                validationService: p
                            },
                            _idProps: {
                                service: d,
                                uuid: "1",
                                alias: "2"
                            },
                            _widgetRecordProvider: a,
                            placeholders: {
                                customHeader: b.Empty,
                                bodyContent: new b(function() {
                                    return [i.createElement(v, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex flex-direction-column gap-s",
                                        visible: !0,
                                        _idProps: {
                                            service: d,
                                            uuid: "2"
                                        },
                                        _widgetRecordProvider: a
                                    }, i.createElement(S, {
                                        style: "ph-section-16-title",
                                        text: [P(y("WRKnrF_pLUKuTHuUHbTTeA#Value", "Event"))],
                                        _idProps: {
                                            service: d,
                                            uuid: "3"
                                        },
                                        _widgetRecordProvider: a
                                    }), i.createElement(v, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex gap-s padding-y-s overflow-horizontal",
                                        visible: !0,
                                        _idProps: {
                                            service: d,
                                            uuid: "4"
                                        },
                                        _widgetRecordProvider: a
                                    }, i.createElement(A, {
                                        getOwnerSpan: n(function() {
                                            return u.getChildSpan("render")
                                        }, "getOwnerSpan"),
                                        getOwnerDisposeSpan: n(function() {
                                            return u.getChildSpan("destroy")
                                        }, "getOwnerDisposeSpan"),
                                        inputs: {
                                            Label: o.Injector.resolve(o.ServiceNames.TranslationsService).getMessage("3e53IzpKu0eXSP54gzknCA#Value.65921.1", "All"),
                                            Icon: "",
                                            IsSelected: e.getCachedValue(d.getId("Z2zxIWlFt0GwvL5NlC9mQg.IsSelected"), function() {
                                                return e.variables.eventFiltersVar.eventTypesFilterAttr.eventTypeIdAttr === o.BuiltinFunctions.nullIdentifier()
                                            }, function() {
                                                return e.variables.eventFiltersVar.eventTypesFilterAttr.eventTypeIdAttr
                                            })
                                        },
                                        events: {
                                            _handleError: n(function(t) {
                                                l.handleError(t)
                                            }, "_handleError"),
                                            onClick$Action: n(function() {
                                                var t = g.clone();
                                                l.eventTypeOnClick$Action(o.BuiltinFunctions.integerToLongInteger(0), l.callContext(t))
                                            }, "onClick$Action")
                                        },
                                        _validationProps: {
                                            validationService: p
                                        },
                                        _idProps: {
                                            service: d,
                                            uuid: "5",
                                            alias: "3"
                                        },
                                        _widgetRecordProvider: a,
                                        _dependencies: []
                                    }), i.createElement(C, {
                                        animateItems: !0,
                                        extendedProperties: {
                                            "disable-virtualization": "True"
                                        },
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        mode: 0,
                                        source: e.variables.getEventTypesAggr.listOut,
                                        style: "display-flex gap-s",
                                        tag: "div",
                                        _idProps: {
                                            service: d,
                                            uuid: "6"
                                        },
                                        _widgetRecordProvider: a,
                                        source_dataFetchStatus: o.Model.calculateDataFetchStatus(e.variables.getEventTypesAggr.dataFetchStatusAttr),
                                        placeholders: {
                                            content: new _(function(t, r) {
                                                return [i.createElement(A, {
                                                    getOwnerSpan: n(function() {
                                                        return u.getChildSpan("render")
                                                    }, "getOwnerSpan"),
                                                    getOwnerDisposeSpan: n(function() {
                                                        return u.getChildSpan("destroy")
                                                    }, "getOwnerDisposeSpan"),
                                                    inputs: {
                                                        Icon: "",
                                                        IsSelected: e.variables.getEventTypesAggr.listOut.getCurrent(r.iterationContext).selectedAttr === !0,
                                                        _isSelectedInDataFetchStatus: o.Model.calculateDataFetchStatus(e.variables.getEventTypesAggr.dataFetchStatusAttr),
                                                        Label: e.variables.getEventTypesAggr.listOut.getCurrent(r.iterationContext).eventModeAttr.labelAttr + " events",
                                                        _labelInDataFetchStatus: o.Model.calculateDataFetchStatus(e.variables.getEventTypesAggr.dataFetchStatusAttr)
                                                    },
                                                    events: {
                                                        _handleError: n(function(c) {
                                                            l.handleError(c)
                                                        }, "_handleError"),
                                                        onClick$Action: n(function() {
                                                            var c = r.clone();
                                                            l.eventTypeOnClick$Action(o.BuiltinFunctions.integerToLongInteger(e.variables.getEventTypesAggr.listOut.getCurrent(r.iterationContext).eventModeAttr.idAttr), l.callContext(c))
                                                        }, "onClick$Action")
                                                    },
                                                    _validationProps: {
                                                        validationService: p
                                                    },
                                                    _idProps: {
                                                        service: t,
                                                        uuid: "7",
                                                        alias: "4"
                                                    },
                                                    _widgetRecordProvider: a,
                                                    _dependencies: []
                                                })]
                                            }, g, d, "1")
                                        },
                                        _dependencies: [s(e.variables.getEventTypesAggr.dataFetchStatusAttr)]
                                    }))), m(o.BuiltinFunctions.identifierToInteger(e.variables.eventFiltersVar.eventTypesFilterAttr.eventTypeIdAttr) === 0 || o.BuiltinFunctions.identifierToInteger(e.variables.eventFiltersVar.eventTypesFilterAttr.eventTypeIdAttr) === 2, !1, this, function() {
                                        return [i.createElement(S, {
                                            style: "ph-section-16-title",
                                            text: [P(y("2lA3O7z9v0uUjgitripwuA#Value", "Language"))],
                                            _idProps: {
                                                service: d,
                                                uuid: "8"
                                            },
                                            _widgetRecordProvider: a
                                        }), i.createElement(C, {
                                            animateItems: !0,
                                            extendedProperties: {
                                                "disable-virtualization": "True"
                                            },
                                            gridProperties: {
                                                classes: "OSFillParent"
                                            },
                                            mode: 0,
                                            source: e.variables.getLanguagesByEnabledAggr.listOut,
                                            style: "display-flex flex-direction-column gap-s",
                                            tag: "div",
                                            _idProps: {
                                                service: d,
                                                name: "LanguageList"
                                            },
                                            _widgetRecordProvider: a,
                                            source_dataFetchStatus: o.Model.calculateDataFetchStatus(e.variables.getLanguagesByEnabledAggr.dataFetchStatusAttr),
                                            placeholders: {
                                                content: new _(function(t, r) {
                                                    return [i.createElement(v, {
                                                        align: 0,
                                                        animate: !1,
                                                        style: "display-flex justify-content-space-between align-items-center padding-y-s",
                                                        visible: !0,
                                                        _idProps: {
                                                            service: t,
                                                            name: "EachLanguageContainer"
                                                        },
                                                        _widgetRecordProvider: a,
                                                        _dependencies: [s(e.variables.getLanguagesByEnabledAggr.dataFetchStatusAttr), s(e.variables.getLanguagesByEnabledAggr.listOut.getCurrent(r.iterationContext).selectedAttr), s(e.variables.getLanguagesByEnabledAggr.listOut.getCurrent(r.iterationContext).languagesAttr.nameAttr)]
                                                    }, i.createElement(T, {
                                                        gridProperties: {
                                                            classes: "OSFillParent"
                                                        },
                                                        style: "cursor-pointer",
                                                        targetWidget: "LanguageCheckbox",
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "11"
                                                        },
                                                        _widgetRecordProvider: a
                                                    }, i.createElement(f, {
                                                        style: "ph-text",
                                                        value: e.variables.getLanguagesByEnabledAggr.listOut.getCurrent(r.iterationContext).languagesAttr.nameAttr,
                                                        _idProps: {
                                                            service: t,
                                                            name: "Language"
                                                        },
                                                        _widgetRecordProvider: a,
                                                        value_dataFetchStatus: o.Model.calculateDataFetchStatus(e.variables.getLanguagesByEnabledAggr.dataFetchStatusAttr)
                                                    })), i.createElement(v, {
                                                        align: 0,
                                                        animate: !1,
                                                        extendedProperties: {
                                                            style: "height: 24px;"
                                                        },
                                                        gridProperties: {
                                                            classes: "OSInline",
                                                            width: "24px"
                                                        },
                                                        visible: !0,
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "13"
                                                        },
                                                        _widgetRecordProvider: a
                                                    }, i.createElement(O, {
                                                        _validationProps: {
                                                            validationService: p
                                                        },
                                                        enabled: !0,
                                                        extendedProperties: {
                                                            "disable-virtualization": "True"
                                                        },
                                                        style: "ph-checkbox",
                                                        variable: e.createVariable(o.DataTypes.DataTypes.Boolean, e.variables.getLanguagesByEnabledAggr.listOut.getCurrent(r.iterationContext).selectedAttr, function(c) {
                                                            e.variables.getLanguagesByEnabledAggr.listOut.getCurrent(r.iterationContext).selectedAttr = c
                                                        }),
                                                        _idProps: {
                                                            service: t,
                                                            name: "LanguageCheckbox"
                                                        },
                                                        _widgetRecordProvider: a,
                                                        variable_dataFetchStatus: o.Model.calculateDataFetchStatus(e.variables.getLanguagesByEnabledAggr.dataFetchStatusAttr)
                                                    })))]
                                                }, g, d, "2")
                                            },
                                            _dependencies: [s(e.variables.getLanguagesByEnabledAggr.dataFetchStatusAttr)]
                                        })]
                                    }, function() {
                                        return []
                                    }), m(o.BuiltinFunctions.identifierToInteger(e.variables.eventFiltersVar.eventTypesFilterAttr.eventTypeIdAttr) === 0 || o.BuiltinFunctions.identifierToInteger(e.variables.eventFiltersVar.eventTypesFilterAttr.eventTypeIdAttr) === 1, !1, this, function() {
                                        return [i.createElement(S, {
                                            style: "ph-section-16-title",
                                            text: [P(y("BIAQ0lr4DUCQSUWix07hBw#Value", "Location"))],
                                            _idProps: {
                                                service: d,
                                                uuid: "15"
                                            },
                                            _widgetRecordProvider: a
                                        }), i.createElement(C, {
                                            animateItems: !0,
                                            extendedProperties: {
                                                "disable-virtualization": "True"
                                            },
                                            gridProperties: {
                                                classes: "OSFillParent"
                                            },
                                            mode: 0,
                                            source: e.variables.getCountriesAggr.listOut,
                                            style: "display-flex flex-direction-column gap-s",
                                            tag: "div",
                                            _idProps: {
                                                service: d,
                                                name: "LocationList"
                                            },
                                            _widgetRecordProvider: a,
                                            source_dataFetchStatus: o.Model.calculateDataFetchStatus(e.variables.getCountriesAggr.dataFetchStatusAttr),
                                            placeholders: {
                                                content: new _(function(t, r) {
                                                    return [i.createElement(v, {
                                                        align: 0,
                                                        animate: !1,
                                                        style: "display-flex justify-content-space-between align-items-center padding-y-s",
                                                        visible: !0,
                                                        _idProps: {
                                                            service: t,
                                                            name: "EachLanguageContainer2"
                                                        },
                                                        _widgetRecordProvider: a,
                                                        _dependencies: [s(e.variables.getCountriesAggr.dataFetchStatusAttr), s(e.variables.getCountriesAggr.listOut.getCurrent(r.iterationContext).selectedAttr), s(e.variables.getCountriesAggr.listOut.getCurrent(r.iterationContext).countryAttr.nameAttr)]
                                                    }, i.createElement(T, {
                                                        gridProperties: {
                                                            classes: "OSFillParent"
                                                        },
                                                        style: "cursor-pointer",
                                                        targetWidget: "LocationCheckbox",
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "18"
                                                        },
                                                        _widgetRecordProvider: a
                                                    }, i.createElement(f, {
                                                        style: "ph-text",
                                                        value: e.variables.getCountriesAggr.listOut.getCurrent(r.iterationContext).countryAttr.nameAttr,
                                                        _idProps: {
                                                            service: t,
                                                            name: "Location"
                                                        },
                                                        _widgetRecordProvider: a,
                                                        value_dataFetchStatus: o.Model.calculateDataFetchStatus(e.variables.getCountriesAggr.dataFetchStatusAttr)
                                                    })), i.createElement(v, {
                                                        align: 0,
                                                        animate: !1,
                                                        extendedProperties: {
                                                            style: "height: 24px;"
                                                        },
                                                        gridProperties: {
                                                            classes: "OSInline",
                                                            width: "24px"
                                                        },
                                                        visible: !0,
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "20"
                                                        },
                                                        _widgetRecordProvider: a
                                                    }, i.createElement(O, {
                                                        _validationProps: {
                                                            validationService: p
                                                        },
                                                        enabled: !0,
                                                        extendedProperties: {
                                                            "disable-virtualization": "True"
                                                        },
                                                        style: "ph-checkbox",
                                                        variable: e.createVariable(o.DataTypes.DataTypes.Boolean, e.variables.getCountriesAggr.listOut.getCurrent(r.iterationContext).selectedAttr, function(c) {
                                                            e.variables.getCountriesAggr.listOut.getCurrent(r.iterationContext).selectedAttr = c
                                                        }),
                                                        _idProps: {
                                                            service: t,
                                                            name: "LocationCheckbox"
                                                        },
                                                        _widgetRecordProvider: a,
                                                        variable_dataFetchStatus: o.Model.calculateDataFetchStatus(e.variables.getCountriesAggr.dataFetchStatusAttr)
                                                    })))]
                                                }, g, d, "3")
                                            },
                                            _dependencies: [s(e.variables.getCountriesAggr.dataFetchStatusAttr)]
                                        })]
                                    }, function() {
                                        return []
                                    })]
                                }),
                                customButton: b.Empty
                            },
                            _dependencies: [s(e.variables.getCountriesAggr.listOut), s(e.variables.getLanguagesByEnabledAggr.listOut), s(e.variables.getCountriesAggr.dataFetchStatusAttr), s(e.variables.getLanguagesByEnabledAggr.dataFetchStatusAttr), s(e.variables.getEventTypesAggr.dataFetchStatusAttr), s(e.variables.getEventTypesAggr.listOut), s(e.variables.eventFiltersVar.eventTypesFilterAttr.eventTypeIdAttr)]
                        }), i.createElement(v, {
                            align: 0,
                            animate: !1,
                            style: "ph-event-page-container",
                            visible: !0,
                            _idProps: {
                                service: d,
                                uuid: "22"
                            },
                            _widgetRecordProvider: a
                        }, i.createElement(V, {
                            getOwnerSpan: n(function() {
                                return u.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return u.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                Title: o.Injector.resolve(o.ServiceNames.TranslationsService).getMessage("BpN_AkP1EkOQYCwqxif2gg#Value.-1578876803.1", "Upcoming events"),
                                ShowRightButton: F.getisEventFilterEnabledFF(),
                                ShowLeftButton: !1,
                                CustomRightIcon: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M0 13C0 12.5938 0.3125 12.25 0.75 12.25H2.59375C2.90625 11.25 3.875 10.5 5 10.5C6.09375 10.5 7.0625 11.25 7.375 12.25H15.25C15.6562 12.25 16 12.5938 16 13C16 13.4375 15.6562 13.75 15.25 13.75H7.375C7.0625 14.7812 6.09375 15.5 5 15.5C3.875 15.5 2.90625 14.7812 2.59375 13.75H0.75C0.3125 13.75 0 13.4375 0 13ZM4 13C4 13.5625 4.4375 14 5 14C5.53125 14 6 13.5625 6 13C6 12.4688 5.53125 12 5 12C4.4375 12 4 12.4688 4 13ZM10 8C10 8.5625 10.4375 9 11 9C11.5312 9 12 8.5625 12 8C12 7.46875 11.5312 7 11 7C10.4375 7 10 7.46875 10 8ZM11 5.5C12.0938 5.5 13.0625 6.25 13.375 7.25H15.25C15.6562 7.25 16 7.59375 16 8C16 8.4375 15.6562 8.75 15.25 8.75H13.375C13.0625 9.78125 12.0938 10.5 11 10.5C9.875 10.5 8.90625 9.78125 8.59375 8.75H0.75C0.3125 8.75 0 8.4375 0 8C0 7.59375 0.3125 7.25 0.75 7.25H8.59375C8.90625 6.25 9.875 5.5 11 5.5ZM6 4C6.53125 4 7 3.5625 7 3C7 2.46875 6.53125 2 6 2C5.4375 2 5 2.46875 5 3C5 3.5625 5.4375 4 6 4ZM8.375 2.25H15.25C15.6562 2.25 16 2.59375 16 3C16 3.4375 15.6562 3.75 15.25 3.75H8.375C8.0625 4.78125 7.09375 5.5 6 5.5C4.875 5.5 3.90625 4.78125 3.59375 3.75H0.75C0.3125 3.75 0 3.4375 0 3C0 2.59375 0.3125 2.25 0.75 2.25H3.59375C3.90625 1.25 4.875 0.5 6 0.5C7.09375 0.5 8.0625 1.25 8.375 2.25Z" fill="black" fill-opacity="0.72"/>\r
</svg>\r
`
                            },
                            events: {
                                _handleError: n(function(t) {
                                    l.handleError(t)
                                }, "_handleError"),
                                rightButtonAction$Action: n(function() {
                                    var t = g.clone();
                                    l.toggleSidebar$Action(l.callContext(t))
                                }, "rightButtonAction$Action")
                            },
                            _validationProps: {
                                validationService: p
                            },
                            _idProps: {
                                service: d,
                                uuid: "23",
                                alias: "5"
                            },
                            _widgetRecordProvider: a,
                            _dependencies: []
                        }), i.createElement(L, {
                            getOwnerSpan: n(function() {
                                return u.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return u.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                ClassName: "ph-event-page-container",
                                IsLoading: e.variables.isLoadingVar
                            },
                            events: {
                                _handleError: n(function(t) {
                                    l.handleError(t)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: p
                            },
                            _idProps: {
                                service: d,
                                uuid: "24",
                                alias: "6"
                            },
                            _widgetRecordProvider: a,
                            placeholders: {
                                content: new b(function() {
                                    return [m(e.variables.eventFiltersVar.eventTypesFilterAttr.eventTypeLabelAttr !== o.BuiltinFunctions.nullTextIdentifier() || e.variables.eventFiltersVar.eventLanguagesFilterAttr.length > 0 || e.variables.eventFiltersVar.eventLocationFilterAttr.length > 0, !1, this, function() {
                                        return [i.createElement(v, {
                                            align: 0,
                                            animate: !1,
                                            style: "ph-event-chip-container",
                                            visible: !0,
                                            _idProps: {
                                                service: d,
                                                uuid: "25"
                                            },
                                            _widgetRecordProvider: a
                                        }, m(e.variables.eventFiltersVar.eventTypesFilterAttr.eventTypeLabelAttr !== o.BuiltinFunctions.nullTextIdentifier(), !1, this, function() {
                                            return [i.createElement(A, {
                                                getOwnerSpan: n(function() {
                                                    return u.getChildSpan("render")
                                                }, "getOwnerSpan"),
                                                getOwnerDisposeSpan: n(function() {
                                                    return u.getChildSpan("destroy")
                                                }, "getOwnerDisposeSpan"),
                                                inputs: {
                                                    Icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M14.9883 9.92578L12.6445 12.2695L14.9688 14.5938C15.1641 14.7695 15.1641 15.0625 14.9688 15.2383C14.793 15.4336 14.5 15.4336 14.3242 15.2383L11.9805 12.9141L9.65625 15.2383C9.48047 15.4336 9.1875 15.4336 9.01172 15.2383C8.81641 15.0625 8.81641 14.7695 9.01172 14.5742L11.3359 12.25L9.01172 9.92578C8.81641 9.75 8.81641 9.45703 9.01172 9.26172C9.1875 9.08594 9.48047 9.08594 9.67578 9.26172L12 11.6055L14.3242 9.28125C14.5 9.08594 14.793 9.08594 14.9883 9.28125C15.1641 9.45703 15.1641 9.75 14.9883 9.92578Z" fill="white"/>\r
</svg>`,
                                                    IsSelected: !0,
                                                    Label: e.variables.eventFiltersVar.eventTypesFilterAttr.eventTypeLabelAttr + " events"
                                                },
                                                events: {
                                                    _handleError: n(function(t) {
                                                        l.handleError(t)
                                                    }, "_handleError"),
                                                    onClickIcon$Action: n(function() {
                                                        var t = g.clone();
                                                        l.chipOnClick$Action(-1, o.BuiltinFunctions.integerToLongInteger(e.variables.eventFiltersVar.eventTypesFilterAttr.eventTypeIdAttr), "event_type", l.callContext(t))
                                                    }, "onClickIcon$Action")
                                                },
                                                _validationProps: {
                                                    validationService: p
                                                },
                                                _idProps: {
                                                    service: d,
                                                    uuid: "26",
                                                    alias: "7"
                                                },
                                                _widgetRecordProvider: a,
                                                _dependencies: []
                                            })]
                                        }, function() {
                                            return []
                                        }), m(e.variables.eventFiltersVar.eventLanguagesFilterAttr.length > 0, !1, this, function() {
                                            return [i.createElement(C, {
                                                animateItems: !0,
                                                extendedProperties: {
                                                    "disable-virtualization": "True"
                                                },
                                                gridProperties: {
                                                    width: "auto"
                                                },
                                                mode: 0,
                                                source: e.variables.eventFiltersVar.eventLanguagesFilterAttr,
                                                style: "display-flex gap-s",
                                                tag: "div",
                                                _idProps: {
                                                    service: d,
                                                    uuid: "27"
                                                },
                                                _widgetRecordProvider: a,
                                                placeholders: {
                                                    content: new _(function(t, r) {
                                                        return [i.createElement(A, {
                                                            getOwnerSpan: n(function() {
                                                                return u.getChildSpan("render")
                                                            }, "getOwnerSpan"),
                                                            getOwnerDisposeSpan: n(function() {
                                                                return u.getChildSpan("destroy")
                                                            }, "getOwnerDisposeSpan"),
                                                            inputs: {
                                                                Label: e.variables.eventFiltersVar.eventLanguagesFilterAttr.getCurrent(r.iterationContext).languagesLabelAttr,
                                                                IsSelected: !0,
                                                                Icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M14.9883 9.92578L12.6445 12.2695L14.9688 14.5938C15.1641 14.7695 15.1641 15.0625 14.9688 15.2383C14.793 15.4336 14.5 15.4336 14.3242 15.2383L11.9805 12.9141L9.65625 15.2383C9.48047 15.4336 9.1875 15.4336 9.01172 15.2383C8.81641 15.0625 8.81641 14.7695 9.01172 14.5742L11.3359 12.25L9.01172 9.92578C8.81641 9.75 8.81641 9.45703 9.01172 9.26172C9.1875 9.08594 9.48047 9.08594 9.67578 9.26172L12 11.6055L14.3242 9.28125C14.5 9.08594 14.793 9.08594 14.9883 9.28125C15.1641 9.45703 15.1641 9.75 14.9883 9.92578Z" fill="white"/>\r
</svg>`
                                                            },
                                                            events: {
                                                                _handleError: n(function(c) {
                                                                    l.handleError(c)
                                                                }, "_handleError"),
                                                                onClickIcon$Action: n(function() {
                                                                    var c = r.clone();
                                                                    l.chipOnClick$Action(e.variables.eventFiltersVar.eventLanguagesFilterAttr.getCurrentRowNumber(r.iterationContext), o.BuiltinFunctions.integerToLongInteger(e.variables.eventFiltersVar.eventLanguagesFilterAttr.getCurrent(r.iterationContext).languagesIdAttr), "language", l.callContext(c))
                                                                }, "onClickIcon$Action")
                                                            },
                                                            _validationProps: {
                                                                validationService: p
                                                            },
                                                            _idProps: {
                                                                service: t,
                                                                uuid: "28",
                                                                alias: "8"
                                                            },
                                                            _widgetRecordProvider: a,
                                                            _dependencies: []
                                                        })]
                                                    }, g, d, "4")
                                                },
                                                _dependencies: []
                                            })]
                                        }, function() {
                                            return []
                                        }), m(e.variables.eventFiltersVar.eventLocationFilterAttr.length > 0, !1, this, function() {
                                            return [i.createElement(C, {
                                                animateItems: !0,
                                                extendedProperties: {
                                                    "disable-virtualization": "True"
                                                },
                                                gridProperties: {
                                                    width: "auto"
                                                },
                                                mode: 0,
                                                source: e.variables.eventFiltersVar.eventLocationFilterAttr,
                                                style: "display-flex gap-s",
                                                tag: "div",
                                                _idProps: {
                                                    service: d,
                                                    uuid: "29"
                                                },
                                                _widgetRecordProvider: a,
                                                placeholders: {
                                                    content: new _(function(t, r) {
                                                        return [i.createElement(A, {
                                                            getOwnerSpan: n(function() {
                                                                return u.getChildSpan("render")
                                                            }, "getOwnerSpan"),
                                                            getOwnerDisposeSpan: n(function() {
                                                                return u.getChildSpan("destroy")
                                                            }, "getOwnerDisposeSpan"),
                                                            inputs: {
                                                                Label: e.variables.eventFiltersVar.eventLocationFilterAttr.getCurrent(r.iterationContext).eventLocationLabelAttr,
                                                                Icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M14.9883 9.92578L12.6445 12.2695L14.9688 14.5938C15.1641 14.7695 15.1641 15.0625 14.9688 15.2383C14.793 15.4336 14.5 15.4336 14.3242 15.2383L11.9805 12.9141L9.65625 15.2383C9.48047 15.4336 9.1875 15.4336 9.01172 15.2383C8.81641 15.0625 8.81641 14.7695 9.01172 14.5742L11.3359 12.25L9.01172 9.92578C8.81641 9.75 8.81641 9.45703 9.01172 9.26172C9.1875 9.08594 9.48047 9.08594 9.67578 9.26172L12 11.6055L14.3242 9.28125C14.5 9.08594 14.793 9.08594 14.9883 9.28125C15.1641 9.45703 15.1641 9.75 14.9883 9.92578Z" fill="white"/>\r
</svg>`,
                                                                IsSelected: !0
                                                            },
                                                            events: {
                                                                _handleError: n(function(c) {
                                                                    l.handleError(c)
                                                                }, "_handleError"),
                                                                onClick$Action: n(function() {
                                                                    var c = r.clone();
                                                                    l.chipOnClick$Action(e.variables.eventFiltersVar.eventLocationFilterAttr.getCurrentRowNumber(r.iterationContext), e.variables.eventFiltersVar.eventLocationFilterAttr.getCurrent(r.iterationContext).eventLocationIdAttr, "country", l.callContext(c))
                                                                }, "onClick$Action")
                                                            },
                                                            _validationProps: {
                                                                validationService: p
                                                            },
                                                            _idProps: {
                                                                service: t,
                                                                uuid: "30",
                                                                alias: "9"
                                                            },
                                                            _widgetRecordProvider: a,
                                                            _dependencies: []
                                                        })]
                                                    }, g, d, "5")
                                                },
                                                _dependencies: []
                                            })]
                                        }, function() {
                                            return []
                                        }))]
                                    }, function() {
                                        return []
                                    }), m(e.variables.eventsDataVar.isEmpty, !1, this, function() {
                                        return [i.createElement(v, {
                                            align: 0,
                                            animate: !1,
                                            style: "display-flex flex-direction-column gap-m align-items-center",
                                            visible: !0,
                                            _idProps: {
                                                service: d,
                                                uuid: "31"
                                            },
                                            _widgetRecordProvider: a
                                        }, i.createElement(U, {
                                            gridProperties: {
                                                width: "128px"
                                            },
                                            image: o.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.no_event.png"),
                                            type: 0,
                                            _idProps: {
                                                service: d,
                                                uuid: "32"
                                            },
                                            _widgetRecordProvider: a
                                        }), i.createElement(v, {
                                            align: 0,
                                            animate: !1,
                                            style: "display-flex flex-direction-column gap-s text-align-center",
                                            visible: !0,
                                            _idProps: {
                                                service: d,
                                                uuid: "33"
                                            },
                                            _widgetRecordProvider: a
                                        }, i.createElement(S, {
                                            style: "ph-section-title",
                                            text: [P(y("23RpM+rqiU+zrWz0Db6USw#Value", "No events available"))],
                                            _idProps: {
                                                service: d,
                                                uuid: "34"
                                            },
                                            _widgetRecordProvider: a
                                        }), i.createElement(S, {
                                            style: "ph-text",
                                            text: [P(y("JufhvxIDX0CRyuqE9+afhA#Value", "Try different filters or check back later. "))],
                                            _idProps: {
                                                service: d,
                                                uuid: "35"
                                            },
                                            _widgetRecordProvider: a
                                        })))]
                                    }, function() {
                                        return [i.createElement(C, {
                                            animateItems: !0,
                                            extendedProperties: {
                                                "disable-virtualization": "True"
                                            },
                                            gridProperties: {
                                                classes: "OSFillParent"
                                            },
                                            mode: 0,
                                            source: e.variables.eventsDataVar,
                                            style: "ph-event-list ph-event-grid-three",
                                            tag: "div",
                                            _idProps: {
                                                service: d,
                                                name: "EventList"
                                            },
                                            _widgetRecordProvider: a,
                                            placeholders: {
                                                content: new _(function(t, r) {
                                                    return [i.createElement(v, {
                                                        align: 0,
                                                        animate: !1,
                                                        extendedEvents: {
                                                            onClick: n(function() {
                                                                var c = r.clone();
                                                                l.onClickEvent$Action(e.variables.eventsDataVar.getCurrent(r.iterationContext).eventAttr.idAttr, l.callContext(c))
                                                            }, "onClick")
                                                        },
                                                        style: "ph-event-card-container",
                                                        visible: !0,
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "37"
                                                        },
                                                        _widgetRecordProvider: a,
                                                        _dependencies: [s(e.variables.eventsDataVar.getCurrent(r.iterationContext).eventModeAttr.idAttr), s(e.variables.eventsDataVar.getCurrent(r.iterationContext).countryAttr.nameAttr), s(e.variables.eventsDataVar.getCurrent(r.iterationContext).countryAttr.timeZoneAttr), s(e.variables.eventsDataVar.getCurrent(r.iterationContext).eventAttr.startDateTimeAttr), s(e.variables.eventsDataVar.getCurrent(r.iterationContext).eventAttr.endDateTimeAttr), s(e.variables.eventsDataVar.getCurrent(r.iterationContext).eventAttr.titleAttr), s(e.variables.eventsDataVar.getCurrent(r.iterationContext).eventAttr.mobileImageAttr), s(e.variables.eventsDataVar.getCurrent(r.iterationContext).eventAttr.idAttr)]
                                                    }, i.createElement(D, {
                                                        getOwnerSpan: n(function() {
                                                            return u.getChildSpan("render")
                                                        }, "getOwnerSpan"),
                                                        getOwnerDisposeSpan: n(function() {
                                                            return u.getChildSpan("destroy")
                                                        }, "getOwnerDisposeSpan"),
                                                        inputs: {
                                                            EventDetails: e.getCachedValue(t.getId("hi985Zoj40OIA6naEoXTlg.EventDetails"), function() {
                                                                return function() {
                                                                    var c = new N;
                                                                    return c.idAttr = e.variables.eventsDataVar.getCurrent(r.iterationContext).eventAttr.idAttr, c.fileNamesAttr = function() {
                                                                        var w = new k;
                                                                        return w.desktopImageNameAttr = "", w.mobileImageNameAttr = e.variables.eventsDataVar.getCurrent(r.iterationContext).eventAttr.mobileImageAttr, w
                                                                    }(), c
                                                                }()
                                                            }, function() {
                                                                return e.variables.eventsDataVar.getCurrent(r.iterationContext).eventAttr.idAttr
                                                            }, function() {
                                                                return e.variables.eventsDataVar.getCurrent(r.iterationContext).eventAttr.mobileImageAttr
                                                            })
                                                        },
                                                        events: {
                                                            _handleError: n(function(c) {
                                                                l.handleError(c)
                                                            }, "_handleError")
                                                        },
                                                        _validationProps: {
                                                            validationService: p
                                                        },
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "38",
                                                            alias: "10"
                                                        },
                                                        _widgetRecordProvider: a,
                                                        _dependencies: []
                                                    }), i.createElement(v, {
                                                        align: 0,
                                                        animate: !1,
                                                        style: "ph-event-card-info padding-base",
                                                        visible: !0,
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "39"
                                                        },
                                                        _widgetRecordProvider: a
                                                    }, i.createElement(v, {
                                                        align: 0,
                                                        animate: !1,
                                                        style: "display-flex flex-direction-column ph-event-card-details-container",
                                                        visible: !0,
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "40"
                                                        },
                                                        _widgetRecordProvider: a
                                                    }, i.createElement(f, {
                                                        extendedProperties: {
                                                            style: "color: var(--Neutral-Neutral-10, #101213); font-size: 14px; font-weight: 700; line-height: 22px; margin-bottom: 4px;"
                                                        },
                                                        value: e.variables.eventsDataVar.getCurrent(r.iterationContext).eventAttr.titleAttr,
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "41"
                                                        },
                                                        _widgetRecordProvider: a
                                                    }), i.createElement(f, {
                                                        extendedProperties: {
                                                            style: "color: var(--Neutral-Neutral-10, #101213); font-size: 12px; font-weight: 400; line-height: 18px;"
                                                        },
                                                        gridProperties: {
                                                            marginLeft: "0"
                                                        },
                                                        value: e.getCachedValue(t.getId("o8AOwr_DVU66fFh7DKv9Ew.Value"), function() {
                                                            return (e.variables.eventsDataVar.getCurrent(r.iterationContext).eventAttr.endDateTimeAttr === o.BuiltinFunctions.nullTextIdentifier() ? o.BuiltinFunctions.formatDateTime(o.BuiltinFunctions.textToDateTime(e.variables.eventsDataVar.getCurrent(r.iterationContext).eventAttr.startDateTimeAttr), "d MMM, HH:mm") + " " + e.variables.eventsDataVar.getCurrent(r.iterationContext).countryAttr.timeZoneAttr : o.BuiltinFunctions.formatDateTime(o.BuiltinFunctions.textToDateTime(e.variables.eventsDataVar.getCurrent(r.iterationContext).eventAttr.startDateTimeAttr), "d MMM") + " - " + o.BuiltinFunctions.formatDateTime(o.BuiltinFunctions.textToDateTime(e.variables.eventsDataVar.getCurrent(r.iterationContext).eventAttr.endDateTimeAttr), "d MMM")) + ", " + o.BuiltinFunctions.year(o.BuiltinFunctions.textToDateTime(e.variables.eventsDataVar.getCurrent(r.iterationContext).eventAttr.startDateTimeAttr)).toString()
                                                        }, function() {
                                                            return e.variables.eventsDataVar.getCurrent(r.iterationContext).eventAttr.endDateTimeAttr
                                                        }, function() {
                                                            return e.variables.eventsDataVar.getCurrent(r.iterationContext).eventAttr.startDateTimeAttr
                                                        }, function() {
                                                            return e.variables.eventsDataVar.getCurrent(r.iterationContext).countryAttr.timeZoneAttr
                                                        }),
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "42"
                                                        },
                                                        _widgetRecordProvider: a
                                                    }), i.createElement(f, {
                                                        extendedProperties: {
                                                            style: "color: var(--Neutral-Neutral-10, #101213); font-size: 12px; font-weight: 400; line-height: 18px;"
                                                        },
                                                        gridProperties: {
                                                            marginLeft: "0"
                                                        },
                                                        value: e.getCachedValue(t.getId("mB0_9BVlxUWXloJIjbrldQ.Value"), function() {
                                                            return o.BuiltinFunctions.identifierToInteger(e.variables.eventsDataVar.getCurrent(r.iterationContext).eventModeAttr.idAttr) === 1 ? e.variables.eventsDataVar.getCurrent(r.iterationContext).countryAttr.nameAttr : "Zoom"
                                                        }, function() {
                                                            return e.variables.eventsDataVar.getCurrent(r.iterationContext).eventModeAttr.idAttr
                                                        }, function() {
                                                            return e.variables.eventsDataVar.getCurrent(r.iterationContext).countryAttr.nameAttr
                                                        }),
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "43"
                                                        },
                                                        _widgetRecordProvider: a
                                                    })), i.createElement(R, {
                                                        getOwnerSpan: n(function() {
                                                            return u.getChildSpan("render")
                                                        }, "getOwnerSpan"),
                                                        getOwnerDisposeSpan: n(function() {
                                                            return u.getChildSpan("destroy")
                                                        }, "getOwnerDisposeSpan"),
                                                        inputs: {
                                                            SVGCode: `<svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M7.34375 6.65625C7.53125 6.84375 7.53125 7.1875 7.34375 7.375L1.34375 13.375C1.15625 13.5625 0.8125 13.5625 0.625 13.375C0.4375 13.1875 0.4375 12.8438 0.625 12.6562L6.28125 7L0.625 1.375C0.4375 1.1875 0.4375 0.84375 0.625 0.65625C0.8125 0.46875 1.15625 0.46875 1.34375 0.65625L7.34375 6.65625Z" fill="#101213"/>\r
</svg>`
                                                        },
                                                        events: {
                                                            _handleError: n(function(c) {
                                                                l.handleError(c)
                                                            }, "_handleError")
                                                        },
                                                        _validationProps: {
                                                            validationService: p
                                                        },
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "44",
                                                            alias: "11"
                                                        },
                                                        _widgetRecordProvider: a,
                                                        _dependencies: []
                                                    })))]
                                                }, g, d, "6")
                                            },
                                            _dependencies: []
                                        })]
                                    })]
                                })
                            },
                            _dependencies: [s(e.variables.eventsDataVar), s(e.variables.eventFiltersVar.eventLocationFilterAttr), s(e.variables.eventFiltersVar.eventLanguagesFilterAttr), s(e.variables.eventFiltersVar.eventTypesFilterAttr.eventTypeIdAttr), s(e.variables.eventFiltersVar.eventTypesFilterAttr.eventTypeLabelAttr)]
                        }))]
                    }),
                    customMobileFooter: b.Empty
                },
                _dependencies: [s(e.variables.eventsDataVar), s(e.variables.isLoadingVar), s(F.getisEventFilterEnabledFF()), s(e.variables.getCountriesAggr.listOut), s(e.variables.getLanguagesByEnabledAggr.listOut), s(e.variables.getCountriesAggr.dataFetchStatusAttr), s(e.variables.getLanguagesByEnabledAggr.dataFetchStatusAttr), s(e.variables.getEventTypesAggr.dataFetchStatusAttr), s(e.variables.getEventTypesAggr.listOut), s(e.variables.eventFiltersVar.eventLocationFilterAttr), s(e.variables.eventFiltersVar.eventLanguagesFilterAttr), s(e.variables.eventFiltersVar.eventTypesFilterAttr.eventTypeLabelAttr), s(e.variables.eventFiltersVar.eventTypesFilterAttr.eventTypeIdAttr), s(e.variables.isSidebarOpenVar)]
            }))
        }
    };
n(h, "View");
var M = h,
    ve = M;
export {
    ve as
    default
};