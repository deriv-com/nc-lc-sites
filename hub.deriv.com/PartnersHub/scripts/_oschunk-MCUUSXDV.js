import {
    a as T
} from "./_oschunk-DVBZR6IY.js";
import {
    a as k
} from "./_oschunk-KYGCI7V6.js";
import {
    a as w
} from "./_oschunk-XNSKYLKO.js";
import "./_oschunk-QTRZEJSW.js";
import "./_oschunk-Q5BYWPWW.js";
import "./_oschunk-WGHHTA53.js";
import "./_oschunk-B5ZMBNKS.js";
import "./_oschunk-KURWLJI2.js";
import "./_oschunk-ROAU47YI.js";
import {
    a as A,
    b as C
} from "./_oschunk-JVFXYCKG.js";
import {
    a as y
} from "./_oschunk-LSEX7IF7.js";
import {
    b as O
} from "./_oschunk-2MST7FR4.js";
import {
    b as h
} from "./_oschunk-ZL2HTVZN.js";
import "./_oschunk-D7QQHUMV.js";
import "./_oschunk-MP57J6UO.js";
import "./_oschunk-CLRE6NFZ.js";
import "./_oschunk-P2MIYWR2.js";
import "./_oschunk-N6CDNE7S.js";
import "./_oschunk-MKEU6QPR.js";
import "./_oschunk-DIXRVE4J.js";
import {
    a as E
} from "./_oschunk-JNIYO5MF.js";
import "./_oschunk-I6UUKQBK.js";
import "./_oschunk-C75U7DRJ.js";
import "./_oschunk-JHXZLUP2.js";
import {
    a as P
} from "./_oschunk-F2QOJGMT.js";
import "./_oschunk-IYRDNBIZ.js";
import {
    a as b
} from "./_oschunk-VDU6C3OQ.js";
import "./_oschunk-TWAMG3Q4.js";
import "./_oschunk-LDY7XNSJ.js";
import {
    d as g,
    f as R,
    n as p,
    u as D
} from "./_oschunk-LWMGEL7F.js";
import "./_oschunk-KWCHY67Z.js";
import "./_oschunk-4GXKK3IG.js";
import {
    a as W,
    g as S,
    i as _
} from "./_oschunk-WZHUAZJP.js";
import "./_oschunk-5VU7DWFQ.js";
import "./_oschunk-RILYVCVH.js";
import "./_oschunk-BDI2RWOA.js";
import "./_oschunk-P3RPGEI5.js";
import {
    Fc as f,
    a as x
} from "./_oschunk-7WCOCYFU.js";
import {
    ia as B
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as r,
    h as V
} from "./_oschunk-QHO7QY6K.js";
var a = V(W());
var d = B,
    v = _.PlaceholderContent,
    ie = _.IteratorPlaceholderContent,
    m = class m extends S.BaseWebScreen {
        static get displayName() {
            return "PhNavigation.EventDetail"
        }
        static getAttributes() {
            return {
                codeFunction: "EventDetail",
                functionKey: "bfd62c4e-ebd9-46fa-8cbc-b231eb780247",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/PartnersHub.PHubTest.css", "css/PartnersHub.PhNavigation.EventDetail.css", "css/PartnersHub.PHubTest.extra.css"]
        }
        static getJsDependencies() {
            return ["scripts/PartnersHub.UserScripts.DerivAnalytics.js"]
        }
        static getBlocks() {
            return [w, y, h, E, P, A, C, b, O]
        }
        get modelFactory() {
            return T
        }
        get controllerFactory() {
            return k
        }
        get title() {
            return S.BaseWebScreen.getTranslation("TizWv9nr+kaMvLIx63gCRw#Title", "EventDetail")
        }
        internalRender() {
            let e = this.model,
                s = this.controller,
                i = this.idService,
                u = s.validationService,
                o = this.widgetsRecordProvider,
                n = s.callContext(),
                H = m.ifWidget,
                F = m.textWidget,
                c = m.asPrimitiveValue,
                M = m.getTranslation,
                l = this;
            return a.createElement("div", this.getRootNodeProperties(), a.createElement(w, {
                getOwnerSpan: r(function() {
                    return l.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: r(function() {
                    return l.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    HasCustomMobileHeader: !0,
                    CurrentScreen: x.navigation.events,
                    HasCustomMobileFooter: !0
                },
                events: {
                    _handleError: r(function(t) {
                        s.handleError(t)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: u
                },
                _idProps: {
                    service: i,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: o,
                placeholders: {
                    customMobileHeader: new v(function() {
                        return [a.createElement(y, {
                            getOwnerSpan: r(function() {
                                return l.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: r(function() {
                                return l.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                Title: d.Injector.resolve(d.ServiceNames.TranslationsService).getMessage("EUVqGtn3skCZg157OvNkkQ#Value.318568092.1", "Event details"),
                                ShowRightButton: !0,
                                ShowLeftButton: !0
                            },
                            events: {
                                _handleError: r(function(t) {
                                    s.handleError(t)
                                }, "_handleError"),
                                onClickLeftButton$Action: r(function() {
                                    var t = n.clone();
                                    s.titleBlockBackButtonAction$Action(s.callContext(t))
                                }, "onClickLeftButton$Action"),
                                onClickRightButton$Action: r(function() {
                                    var t = n.clone();
                                    s.titleBlockRightButtonAction$Action(s.callContext(t))
                                }, "onClickRightButton$Action")
                            },
                            _validationProps: {
                                validationService: u
                            },
                            _idProps: {
                                service: i,
                                uuid: "1",
                                alias: "2"
                            },
                            _widgetRecordProvider: o,
                            _dependencies: []
                        })]
                    }),
                    placeholder: new v(function() {
                        return [a.createElement(g, {
                            align: 0,
                            animate: !1,
                            style: "ph-event-details-container",
                            visible: !0,
                            _idProps: {
                                service: i,
                                uuid: "2"
                            },
                            _widgetRecordProvider: o
                        }, a.createElement(g, {
                            align: 0,
                            animate: !1,
                            style: "ph-event-details-header-block",
                            visible: !0,
                            _idProps: {
                                service: i,
                                uuid: "3"
                            },
                            _widgetRecordProvider: o
                        }, a.createElement(h, {
                            getOwnerSpan: r(function() {
                                return l.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: r(function() {
                                return l.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                ShowLeftButton: !0,
                                Title: d.Injector.resolve(d.ServiceNames.TranslationsService).getMessage("zRJqpJbrDkKPf6S4buJ3Pw#Value.318568092.1", "Event details"),
                                ShowRightButton: !1
                            },
                            events: {
                                _handleError: r(function(t) {
                                    s.handleError(t)
                                }, "_handleError"),
                                leftButtonAction$Action: r(function() {
                                    var t = n.clone();
                                    s.titleBlockBackButtonAction$Action(s.callContext(t))
                                }, "leftButtonAction$Action")
                            },
                            _validationProps: {
                                validationService: u
                            },
                            _idProps: {
                                service: i,
                                uuid: "4",
                                alias: "3"
                            },
                            _widgetRecordProvider: o,
                            _dependencies: []
                        })), H(!e.variables.getEventByIdAggr.listOut.isEmpty, !1, this, function() {
                            return [a.createElement(E, {
                                getOwnerSpan: r(function() {
                                    return l.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: r(function() {
                                    return l.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    SkeletonHeight: "162px",
                                    IsLoading: e.variables.isLoadingImagesVar
                                },
                                events: {
                                    _handleError: r(function(t) {
                                        s.handleError(t)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: u
                                },
                                _idProps: {
                                    service: i,
                                    uuid: "5",
                                    alias: "4"
                                },
                                _widgetRecordProvider: o,
                                placeholders: {
                                    content: new v(function() {
                                        return [a.createElement(P, {
                                            getOwnerSpan: r(function() {
                                                return l.getChildSpan("render")
                                            }, "getOwnerSpan"),
                                            getOwnerDisposeSpan: r(function() {
                                                return l.getChildSpan("destroy")
                                            }, "getOwnerDisposeSpan"),
                                            inputs: {},
                                            events: {
                                                _handleError: r(function(t) {
                                                    s.handleError(t)
                                                }, "_handleError")
                                            },
                                            _validationProps: {
                                                validationService: u
                                            },
                                            _idProps: {
                                                service: i,
                                                uuid: "6",
                                                alias: "5"
                                            },
                                            _widgetRecordProvider: o,
                                            placeholders: {
                                                onDesktop: new v(function() {
                                                    return [a.createElement(p, {
                                                        gridProperties: {
                                                            classes: "OSFillParent"
                                                        },
                                                        imageContent: e.variables.eventImagesVar.desktopImageAttr,
                                                        style: "ph-event-details-banner",
                                                        type: 2,
                                                        _idProps: {
                                                            service: i,
                                                            uuid: "7"
                                                        },
                                                        _widgetRecordProvider: o
                                                    })]
                                                }),
                                                onTablet: new v(function() {
                                                    return [a.createElement(p, {
                                                        gridProperties: {
                                                            classes: "OSFillParent"
                                                        },
                                                        imageContent: e.variables.eventImagesVar.desktopImageAttr,
                                                        style: "ph-event-details-banner",
                                                        type: 2,
                                                        _idProps: {
                                                            service: i,
                                                            uuid: "8"
                                                        },
                                                        _widgetRecordProvider: o
                                                    })]
                                                }),
                                                onPhone: new v(function() {
                                                    return [a.createElement(p, {
                                                        gridProperties: {
                                                            classes: "OSFillParent"
                                                        },
                                                        imageContent: e.variables.eventImagesVar.mobileImageAttr,
                                                        style: "ph-event-details-banner",
                                                        type: 2,
                                                        _idProps: {
                                                            service: i,
                                                            uuid: "9"
                                                        },
                                                        _widgetRecordProvider: o
                                                    })]
                                                })
                                            },
                                            _dependencies: [c(e.variables.eventImagesVar.mobileImageAttr), c(e.variables.eventImagesVar.desktopImageAttr)]
                                        })]
                                    })
                                },
                                _dependencies: [c(e.variables.eventImagesVar.mobileImageAttr), c(e.variables.eventImagesVar.desktopImageAttr)]
                            }), a.createElement(g, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "gap: 36px;"
                                },
                                style: "display-flex",
                                visible: !0,
                                _idProps: {
                                    service: i,
                                    uuid: "10"
                                },
                                _widgetRecordProvider: o
                            }, a.createElement(g, {
                                align: 0,
                                animate: !1,
                                style: "gap-base display-flex flex-direction-column flex1",
                                visible: !0,
                                _idProps: {
                                    service: i,
                                    uuid: "11"
                                },
                                _widgetRecordProvider: o
                            }, a.createElement(g, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "display: flex; flex-direction: column; gap: 8px;"
                                },
                                style: "ph-event-details-content",
                                visible: !0,
                                _idProps: {
                                    service: i,
                                    uuid: "12"
                                },
                                _widgetRecordProvider: o
                            }, a.createElement(R, {
                                style: "ph-section-title",
                                value: e.getCachedValue(i.getId("UfNSTa4XrEiVL2OgA9YsBQ.Value"), function() {
                                    return e.variables.getEventByIdAggr.listOut.getCurrent(n.iterationContext).eventAttr.titleAttr + ", " + d.BuiltinFunctions.year(d.BuiltinFunctions.textToDateTime(e.variables.getEventByIdAggr.listOut.getCurrent(n.iterationContext).eventAttr.startDateTimeAttr)).toString()
                                }, function() {
                                    return e.variables.getEventByIdAggr.listOut.getCurrent(n.iterationContext).eventAttr.titleAttr
                                }, function() {
                                    return e.variables.getEventByIdAggr.listOut.getCurrent(n.iterationContext).eventAttr.startDateTimeAttr
                                }),
                                _idProps: {
                                    service: i,
                                    uuid: "13"
                                },
                                _widgetRecordProvider: o,
                                value_dataFetchStatus: d.Model.calculateDataFetchStatus(e.variables.getEventByIdAggr.dataFetchStatusAttr)
                            }), a.createElement(g, {
                                align: 0,
                                animate: !1,
                                style: "hide-on-desktop",
                                visible: !0,
                                _idProps: {
                                    service: i,
                                    uuid: "14"
                                },
                                _widgetRecordProvider: o
                            }, a.createElement(A, {
                                getOwnerSpan: r(function() {
                                    return l.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: r(function() {
                                    return l.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    Data: e.getCachedValue(i.getId("9e4nkUbpAkiPTgaVqt2cUw.Data"), function() {
                                        return function() {
                                            var t = new f;
                                            return t.locationAttr = e.variables.getEventByIdAggr.listOut.getCurrent(n.iterationContext).countryAttr.nameAttr, t.startDateTimeAttr = d.BuiltinFunctions.textToDateTime(e.variables.getEventByIdAggr.listOut.getCurrent(n.iterationContext).eventAttr.startDateTimeAttr), t.timeZoneAttr = e.variables.getEventByIdAggr.listOut.getCurrent(n.iterationContext).countryAttr.timeZoneAttr, t.endDateTimeAttr = d.BuiltinFunctions.textToDateTime(e.variables.getEventByIdAggr.listOut.getCurrent(n.iterationContext).eventAttr.endDateTimeAttr), t.eventModeAttr = e.variables.getEventByIdAggr.listOut.getCurrent(n.iterationContext).eventModeAttr.idAttr.toString(), t
                                        }()
                                    }, function() {
                                        return e.variables.getEventByIdAggr.listOut.getCurrent(n.iterationContext).countryAttr.nameAttr
                                    }, function() {
                                        return e.variables.getEventByIdAggr.listOut.getCurrent(n.iterationContext).eventAttr.startDateTimeAttr
                                    }, function() {
                                        return e.variables.getEventByIdAggr.listOut.getCurrent(n.iterationContext).countryAttr.timeZoneAttr
                                    }, function() {
                                        return e.variables.getEventByIdAggr.listOut.getCurrent(n.iterationContext).eventAttr.endDateTimeAttr
                                    }, function() {
                                        return e.variables.getEventByIdAggr.listOut.getCurrent(n.iterationContext).eventModeAttr.idAttr
                                    }),
                                    _dataInDataFetchStatus: d.Model.calculateDataFetchStatus(e.variables.getEventByIdAggr.dataFetchStatusAttr)
                                },
                                events: {
                                    _handleError: r(function(t) {
                                        s.handleError(t)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: u
                                },
                                _idProps: {
                                    service: i,
                                    uuid: "15",
                                    alias: "6"
                                },
                                _widgetRecordProvider: o,
                                _dependencies: []
                            }))), a.createElement(g, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "text-align: justify;"
                                },
                                style: "ck-content",
                                visible: !0,
                                _idProps: {
                                    service: i,
                                    name: "EventDetails"
                                },
                                _widgetRecordProvider: o
                            }), a.createElement(g, {
                                align: 0,
                                animate: !1,
                                style: "hide-on-desktop",
                                visible: !0,
                                _idProps: {
                                    service: i,
                                    uuid: "17"
                                },
                                _widgetRecordProvider: o
                            }, a.createElement(C, {
                                getOwnerSpan: r(function() {
                                    return l.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: r(function() {
                                    return l.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    EventId: e.variables.eventIdIn
                                },
                                events: {
                                    _handleError: r(function(t) {
                                        s.handleError(t)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: u
                                },
                                _idProps: {
                                    service: i,
                                    uuid: "18",
                                    alias: "7"
                                },
                                _widgetRecordProvider: o,
                                _dependencies: []
                            }))), a.createElement(g, {
                                align: 0,
                                animate: !1,
                                style: "flex-direction-column gap-m hide-on-mobile ph-event-details-right",
                                visible: !0,
                                _idProps: {
                                    service: i,
                                    uuid: "19"
                                },
                                _widgetRecordProvider: o
                            }, a.createElement(A, {
                                getOwnerSpan: r(function() {
                                    return l.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: r(function() {
                                    return l.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    Data: e.getCachedValue(i.getId("ygXgcWf9EUaCq6Gr_depwQ.Data"), function() {
                                        return function() {
                                            var t = new f;
                                            return t.locationAttr = e.variables.getEventByIdAggr.listOut.getCurrent(n.iterationContext).countryAttr.nameAttr, t.startDateTimeAttr = d.BuiltinFunctions.textToDateTime(e.variables.getEventByIdAggr.listOut.getCurrent(n.iterationContext).eventAttr.startDateTimeAttr), t.timeZoneAttr = e.variables.getEventByIdAggr.listOut.getCurrent(n.iterationContext).countryAttr.timeZoneAttr, t.endDateTimeAttr = d.BuiltinFunctions.textToDateTime(e.variables.getEventByIdAggr.listOut.getCurrent(n.iterationContext).eventAttr.endDateTimeAttr), t.eventModeAttr = e.variables.getEventByIdAggr.listOut.getCurrent(n.iterationContext).eventModeAttr.idAttr.toString(), t
                                        }()
                                    }, function() {
                                        return e.variables.getEventByIdAggr.listOut.getCurrent(n.iterationContext).countryAttr.nameAttr
                                    }, function() {
                                        return e.variables.getEventByIdAggr.listOut.getCurrent(n.iterationContext).eventAttr.startDateTimeAttr
                                    }, function() {
                                        return e.variables.getEventByIdAggr.listOut.getCurrent(n.iterationContext).countryAttr.timeZoneAttr
                                    }, function() {
                                        return e.variables.getEventByIdAggr.listOut.getCurrent(n.iterationContext).eventAttr.endDateTimeAttr
                                    }, function() {
                                        return e.variables.getEventByIdAggr.listOut.getCurrent(n.iterationContext).eventModeAttr.idAttr
                                    }),
                                    _dataInDataFetchStatus: d.Model.calculateDataFetchStatus(e.variables.getEventByIdAggr.dataFetchStatusAttr)
                                },
                                events: {
                                    _handleError: r(function(t) {
                                        s.handleError(t)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: u
                                },
                                _idProps: {
                                    service: i,
                                    uuid: "20",
                                    alias: "8"
                                },
                                _widgetRecordProvider: o,
                                _dependencies: []
                            }), a.createElement(b, {
                                getOwnerSpan: r(function() {
                                    return l.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: r(function() {
                                    return l.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    title: d.Injector.resolve(d.ServiceNames.TranslationsService).getMessage("R1kSH49NI0yzPKaLbgo+5Q#Value.233912628.1", "Join us"),
                                    borderRadius: "100px",
                                    Width: "100%",
                                    height: "40px"
                                },
                                events: {
                                    _handleError: r(function(t) {
                                        s.handleError(t)
                                    }, "_handleError"),
                                    onClick$Action: r(function() {
                                        var t = n.clone();
                                        s.stickyButtonBottomOnClick$Action(s.callContext(t))
                                    }, "onClick$Action")
                                },
                                _validationProps: {
                                    validationService: u
                                },
                                _idProps: {
                                    service: i,
                                    uuid: "21",
                                    alias: "9"
                                },
                                _widgetRecordProvider: o,
                                _dependencies: []
                            }), a.createElement(C, {
                                getOwnerSpan: r(function() {
                                    return l.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: r(function() {
                                    return l.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    EventId: e.variables.eventIdIn
                                },
                                events: {
                                    _handleError: r(function(t) {
                                        s.handleError(t)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: u
                                },
                                _idProps: {
                                    service: i,
                                    uuid: "22",
                                    alias: "10"
                                },
                                _widgetRecordProvider: o,
                                _dependencies: []
                            })))]
                        }, function() {
                            return [a.createElement(g, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "text-align: center;"
                                },
                                visible: !0,
                                _idProps: {
                                    service: i,
                                    uuid: "23"
                                },
                                _widgetRecordProvider: o
                            }, a.createElement(D, {
                                style: "ph-text",
                                text: ["Event not available"],
                                _idProps: {
                                    service: i,
                                    uuid: "24"
                                },
                                _widgetRecordProvider: o
                            }))]
                        }))]
                    }),
                    customMobileFooter: new v(function() {
                        return [a.createElement(O, {
                            getOwnerSpan: r(function() {
                                return l.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: r(function() {
                                return l.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                PrimaryButtonLabel: d.Injector.resolve(d.ServiceNames.TranslationsService).getMessage("nudVu+pFCUerGjjGvcmn4w#Value.233912628.1", "Join us")
                            },
                            events: {
                                _handleError: r(function(t) {
                                    s.handleError(t)
                                }, "_handleError"),
                                primaryOnClick$Action: r(function() {
                                    var t = n.clone();
                                    s.stickyButtonBottomOnClick$Action(s.callContext(t))
                                }, "primaryOnClick$Action")
                            },
                            _validationProps: {
                                validationService: u
                            },
                            _idProps: {
                                service: i,
                                uuid: "25",
                                alias: "11"
                            },
                            _widgetRecordProvider: o,
                            placeholders: {
                                customButton: v.Empty
                            },
                            _dependencies: []
                        })]
                    })
                },
                _dependencies: [c(e.variables.eventIdIn), c(e.variables.eventImagesVar.mobileImageAttr), c(e.variables.eventImagesVar.desktopImageAttr), c(e.variables.isLoadingImagesVar), c(e.variables.getEventByIdAggr.dataFetchStatusAttr), c(e.variables.getEventByIdAggr.listOut.getCurrent(n.iterationContext).eventModeAttr.idAttr), c(e.variables.getEventByIdAggr.listOut.getCurrent(n.iterationContext).countryAttr.timeZoneAttr), c(e.variables.getEventByIdAggr.listOut.getCurrent(n.iterationContext).countryAttr.nameAttr), c(e.variables.getEventByIdAggr.listOut.getCurrent(n.iterationContext).eventAttr.endDateTimeAttr), c(e.variables.getEventByIdAggr.listOut.getCurrent(n.iterationContext).eventAttr.startDateTimeAttr), c(e.variables.getEventByIdAggr.listOut.getCurrent(n.iterationContext).eventAttr.titleAttr), c(e.variables.getEventByIdAggr.listOut.isEmpty)]
            }))
        }
    };
r(m, "View");
var I = m,
    ae = I;
export {
    ae as
    default
};