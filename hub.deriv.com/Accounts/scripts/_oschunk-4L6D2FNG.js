import {
    d as S
} from "./_oschunk-GHBQIAUS.js";
import {
    a as P
} from "./_oschunk-SI24YMBJ.js";
import {
    a as E
} from "./_oschunk-FNNSC7KD.js";
import {
    a as C
} from "./_oschunk-FSPIWF67.js";
import "./_oschunk-FSWTA5WV.js";
import "./_oschunk-VZCHS3W5.js";
import "./_oschunk-ENDX3VJY.js";
import "./_oschunk-FTYAL2B7.js";
import {
    a as y
} from "./_oschunk-GPNNXU3M.js";
import {
    d as s,
    f as W,
    k as h,
    n as O,
    r as l
} from "./_oschunk-M2CKCDBB.js";
import {
    a as U
} from "./_oschunk-YMJU7L7V.js";
import "./_oschunk-JZPYLYYR.js";
import "./_oschunk-DSZRJG3L.js";
import {
    a as I
} from "./_oschunk-2EYFRPDD.js";
import "./_oschunk-FX7ZCYVH.js";
import "./_oschunk-NQZZDANH.js";
import {
    a as T,
    g as A,
    i as w
} from "./_oschunk-WZHUAZJP.js";
import "./_oschunk-XBVY76NY.js";
import "./_oschunk-V2VV7FMU.js";
import "./_oschunk-TGM73NNA.js";
import "./_oschunk-4PNSWRUJ.js";
import "./_oschunk-BTXBTSZ3.js";
import "./_oschunk-5MMGFCSA.js";
import "./_oschunk-ZHFHVHFO.js";
import "./_oschunk-P7KMMADX.js";
import {
    a as V
} from "./_oschunk-KZFTAIEG.js";
import "./_oschunk-UATY3RVV.js";
import {
    ia as x
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as a,
    h as B
} from "./_oschunk-QHO7QY6K.js";
var t = B(T());
var g = x,
    p = w.PlaceholderContent,
    Z = w.IteratorPlaceholderContent,
    m = class m extends A.BaseWebScreen {
        static get displayName() {
            return "MainFlow.UpdateDetails"
        }
        static getAttributes() {
            return {
                codeFunction: "UpdateDetails",
                functionKey: "0b107e8e-ba89-4367-a481-14acba2ee6a6",
                functionOwnerName: "Accounts",
                functionOwnerKey: "8a32fa32-34f5-4338-b6db-4f1ce8fdd638",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/Accounts.DerivAccounts.css", "css/Accounts.MainFlow.UpdateDetails.css", "css/Accounts.DerivAccounts.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [y, C, P, S, E]
        }
        get modelFactory() {
            return U
        }
        get controllerFactory() {
            return I
        }
        get title() {
            return "UpdateDetails"
        }
        internalRender() {
            let i = this.model,
                o = this.controller,
                e = this.idService,
                u = o.validationService,
                r = this.widgetsRecordProvider,
                f = o.callContext(),
                v = m.ifWidget,
                L = m.textWidget,
                c = m.asPrimitiveValue,
                N = m.getTranslation,
                d = this;
            return t.createElement("div", this.getRootNodeProperties(), t.createElement(y, {
                getOwnerSpan: a(function() {
                    return d.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return d.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    IsDesktop: V.getDevice() === "desktop"
                },
                events: {
                    _handleError: a(function(n) {
                        o.handleError(n)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: u
                },
                _idProps: {
                    service: e,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: r,
                placeholders: {
                    desktopLayout: new p(function() {
                        return [t.createElement(C, {
                            getOwnerSpan: a(function() {
                                return d.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: a(function() {
                                return d.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                SelectedSection: "verification"
                            },
                            events: {
                                _handleError: a(function(n) {
                                    o.handleError(n)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: u
                            },
                            _idProps: {
                                service: e,
                                uuid: "1",
                                alias: "2"
                            },
                            _widgetRecordProvider: r,
                            placeholders: {
                                content: new p(function() {
                                    return [v(i.variables.isLoadingVar, !1, this, function() {
                                        return [t.createElement(P, {
                                            getOwnerSpan: a(function() {
                                                return d.getChildSpan("render")
                                            }, "getOwnerSpan"),
                                            getOwnerDisposeSpan: a(function() {
                                                return d.getChildSpan("destroy")
                                            }, "getOwnerDisposeSpan"),
                                            inputs: {},
                                            events: {
                                                _handleError: a(function(n) {
                                                    o.handleError(n)
                                                }, "_handleError")
                                            },
                                            _validationProps: {
                                                validationService: u
                                            },
                                            _idProps: {
                                                service: e,
                                                uuid: "2",
                                                alias: "3"
                                            },
                                            _widgetRecordProvider: r,
                                            _dependencies: []
                                        })]
                                    }, function() {
                                        return [t.createElement(s, {
                                            align: 0,
                                            animate: !1,
                                            style: "update-details__layout",
                                            visible: !0,
                                            _idProps: {
                                                service: e,
                                                uuid: "3"
                                            },
                                            _widgetRecordProvider: r
                                        }, t.createElement(s, {
                                            align: 0,
                                            animate: !0,
                                            style: "margin-bottom-m",
                                            visible: i.getCachedValue(e.getId("ErrorMessage.Visible"), function() {
                                                return i.variables.errorDataVar.codeAttr !== g.BuiltinFunctions.nullTextIdentifier()
                                            }, function() {
                                                return i.variables.errorDataVar.codeAttr
                                            }),
                                            _idProps: {
                                                service: e,
                                                name: "ErrorMessage"
                                            },
                                            _widgetRecordProvider: r
                                        }, t.createElement(s, {
                                            align: 0,
                                            animate: !0,
                                            style: "display-flex padding-s align-items-center column-gap-s error-banner",
                                            visible: i.getCachedValue(e.getId("Errorbanner.Visible"), function() {
                                                return i.variables.errorDataVar.codeAttr !== g.BuiltinFunctions.nullTextIdentifier()
                                            }, function() {
                                                return i.variables.errorDataVar.codeAttr
                                            }),
                                            _idProps: {
                                                service: e,
                                                name: "Errorbanner"
                                            },
                                            _widgetRecordProvider: r
                                        }, t.createElement(h, {
                                            image: g.Navigation.VersionedURL.getVersionedUrl("img/Accounts.StandaloneTriangleExclamationRegularIcon.svg"),
                                            style: "align-self-flex-start",
                                            type: 0,
                                            _idProps: {
                                                service: e,
                                                uuid: "6"
                                            },
                                            _widgetRecordProvider: r
                                        }), v(i.variables.errorDataVar.codeAttr === "DuplicateAccount", !1, this, function() {
                                            return [t.createElement(s, {
                                                align: 0,
                                                animate: !0,
                                                style: "font-size-xs full-width",
                                                visible: i.variables.errorDataVar.codeAttr === "DuplicateAccount",
                                                _idProps: {
                                                    service: e,
                                                    uuid: "7"
                                                },
                                                _widgetRecordProvider: r
                                            }, "These details match an existing profile. If this is a mistake, contact us via ", t.createElement(O, {
                                                enabled: !0,
                                                gridProperties: {
                                                    classes: "ThemeGrid_MarginGutter"
                                                },
                                                onClick: a(function() {
                                                    var n = f.clone();
                                                    o.liveChat_OnClick$Action(o.callContext(n))
                                                }, "onClick"),
                                                style: "font-bold error-banner__link",
                                                visible: !0,
                                                _idProps: {
                                                    service: e,
                                                    uuid: "8"
                                                },
                                                _widgetRecordProvider: r
                                            }, "live chat."))]
                                        }, function() {
                                            return [t.createElement(s, {
                                                align: 0,
                                                animate: !1,
                                                style: "font-size-xs full-width",
                                                visible: !0,
                                                _idProps: {
                                                    service: e,
                                                    uuid: "9"
                                                },
                                                _widgetRecordProvider: r
                                            }, t.createElement(W, {
                                                value: i.variables.errorDataVar.messageAttr,
                                                _idProps: {
                                                    service: e,
                                                    uuid: "10"
                                                },
                                                _widgetRecordProvider: r
                                            }))]
                                        }))), t.createElement(s, {
                                            align: 0,
                                            animate: !1,
                                            style: "update-details__header margin-bottom-m display-flex justify-content-space-between",
                                            visible: !0,
                                            _idProps: {
                                                service: e,
                                                uuid: "11"
                                            },
                                            _widgetRecordProvider: r
                                        }, t.createElement(l, {
                                            style: "font-size-h5 font-bold",
                                            text: ["Update details"],
                                            _idProps: {
                                                service: e,
                                                uuid: "12"
                                            },
                                            _widgetRecordProvider: r
                                        }), t.createElement(O, {
                                            enabled: !0,
                                            gridProperties: {
                                                classes: "ThemeGrid_MarginGutter"
                                            },
                                            onClick: a(function() {
                                                var n = f.clone();
                                                o.onClose$Action(o.callContext(n))
                                            }, "onClick"),
                                            visible: !0,
                                            _idProps: {
                                                service: e,
                                                uuid: "13"
                                            },
                                            _widgetRecordProvider: r
                                        }, t.createElement(h, {
                                            image: g.Navigation.VersionedURL.getVersionedUrl("img/Accounts.StandaloneXmarkRegularIcon.svg"),
                                            type: 0,
                                            _idProps: {
                                                service: e,
                                                uuid: "14"
                                            },
                                            _widgetRecordProvider: r
                                        }))), t.createElement(s, {
                                            align: 0,
                                            animate: !1,
                                            style: "display-flex flex-direction-column margin-bottom-s",
                                            visible: !0,
                                            _idProps: {
                                                service: e,
                                                uuid: "15"
                                            },
                                            _widgetRecordProvider: r
                                        }, t.createElement(s, {
                                            align: 0,
                                            animate: !1,
                                            style: "update-details__message-container",
                                            visible: !0,
                                            _idProps: {
                                                service: e,
                                                name: "MessageInfoContainer"
                                            },
                                            _widgetRecordProvider: r
                                        }, t.createElement(h, {
                                            image: g.Navigation.VersionedURL.getVersionedUrl("img/Accounts.Iconinfo.svg"),
                                            type: 0,
                                            _idProps: {
                                                service: e,
                                                name: "InfoIcon"
                                            },
                                            _widgetRecordProvider: r
                                        }), v(i.variables.shouldUpdateNameVar && i.variables.shouldUpdateDOBVar, !1, this, function() {
                                            return [t.createElement(s, {
                                                align: 0,
                                                animate: !1,
                                                visible: !0,
                                                _idProps: {
                                                    service: e,
                                                    name: "NameDOBError"
                                                },
                                                _widgetRecordProvider: r
                                            }, "Your ", t.createElement(l, {
                                                style: "font-bold",
                                                text: ["name"],
                                                _idProps: {
                                                    service: e,
                                                    uuid: "19"
                                                },
                                                _widgetRecordProvider: r
                                            }), " and ", t.createElement(l, {
                                                style: "font-bold",
                                                text: ["date of birth"],
                                                _idProps: {
                                                    service: e,
                                                    uuid: "20"
                                                },
                                                _widgetRecordProvider: r
                                            }), " must match with the identity document you submitted.")]
                                        }, function() {
                                            return [v(i.variables.shouldUpdateDOBVar, !1, this, function() {
                                                return [t.createElement(s, {
                                                    align: 0,
                                                    animate: !1,
                                                    visible: !0,
                                                    _idProps: {
                                                        service: e,
                                                        name: "DOBinfo"
                                                    },
                                                    _widgetRecordProvider: r
                                                }, "Your ", t.createElement(l, {
                                                    style: "font-bold",
                                                    text: ["date of birth"],
                                                    _idProps: {
                                                        service: e,
                                                        uuid: "22"
                                                    },
                                                    _widgetRecordProvider: r
                                                }), " must match with the identity document you submitted.")]
                                            }, function() {
                                                return [t.createElement(s, {
                                                    align: 0,
                                                    animate: !1,
                                                    visible: !0,
                                                    _idProps: {
                                                        service: e,
                                                        name: "Nameinfo"
                                                    },
                                                    _widgetRecordProvider: r
                                                }, "Your ", t.createElement(l, {
                                                    style: "font-bold",
                                                    text: ["name"],
                                                    _idProps: {
                                                        service: e,
                                                        uuid: "24"
                                                    },
                                                    _widgetRecordProvider: r
                                                }), " must match with the identity document you submitted.")]
                                            })]
                                        }))), t.createElement(S, {
                                            getOwnerSpan: a(function() {
                                                return d.getChildSpan("render")
                                            }, "getOwnerSpan"),
                                            getOwnerDisposeSpan: a(function() {
                                                return d.getChildSpan("destroy")
                                            }, "getOwnerDisposeSpan"),
                                            inputs: {
                                                ShowName: i.variables.shouldUpdateNameVar,
                                                ShowTitle: !1,
                                                IsFormUpdate: !0,
                                                ButtonText: "Submit",
                                                ShowDOB: i.variables.shouldUpdateDOBVar
                                            },
                                            events: {
                                                _handleError: a(function(n) {
                                                    o.handleError(n)
                                                }, "_handleError"),
                                                onPersonalDetailsChange$Action: a(function(n, _, b) {
                                                    var R = f.clone();
                                                    o.onChange$Action(n, _, b, o.callContext(R))
                                                }, "onPersonalDetailsChange$Action"),
                                                handleError$Action: a(function(n) {
                                                    var _ = f.clone();
                                                    o.personalDetailsHandleError$Action(n, o.callContext(_))
                                                }, "handleError$Action")
                                            },
                                            _validationProps: {
                                                validationService: u
                                            },
                                            _idProps: {
                                                service: e,
                                                uuid: "25",
                                                alias: "4"
                                            },
                                            _widgetRecordProvider: r,
                                            _dependencies: []
                                        }))]
                                    })]
                                })
                            },
                            _dependencies: [c(i.variables.shouldUpdateDOBVar), c(i.variables.shouldUpdateNameVar), c(i.variables.errorDataVar.messageAttr), c(i.variables.errorDataVar.codeAttr), c(i.variables.isLoadingVar)]
                        })]
                    }),
                    tabletLayout: p.Empty,
                    defaultLayout: new p(function() {
                        return [t.createElement(E, {
                            getOwnerSpan: a(function() {
                                return d.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: a(function() {
                                return d.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                DisplayCloseButton: !0,
                                DisplayBackButton: !1
                            },
                            events: {
                                _handleError: a(function(n) {
                                    o.handleError(n)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: u
                            },
                            _idProps: {
                                service: e,
                                uuid: "26",
                                alias: "5"
                            },
                            _widgetRecordProvider: r,
                            placeholders: {
                                title: new p(function() {
                                    return [t.createElement(l, {
                                        style: "font-size-h5 font-bold update-details__header",
                                        text: ["Update details"],
                                        _idProps: {
                                            service: e,
                                            uuid: "27"
                                        },
                                        _widgetRecordProvider: r
                                    })]
                                }),
                                sectioncontent: new p(function() {
                                    return [v(i.variables.isLoadingVar, !1, this, function() {
                                        return [t.createElement(P, {
                                            getOwnerSpan: a(function() {
                                                return d.getChildSpan("render")
                                            }, "getOwnerSpan"),
                                            getOwnerDisposeSpan: a(function() {
                                                return d.getChildSpan("destroy")
                                            }, "getOwnerDisposeSpan"),
                                            inputs: {},
                                            events: {
                                                _handleError: a(function(n) {
                                                    o.handleError(n)
                                                }, "_handleError")
                                            },
                                            _validationProps: {
                                                validationService: u
                                            },
                                            _idProps: {
                                                service: e,
                                                uuid: "28",
                                                alias: "6"
                                            },
                                            _widgetRecordProvider: r,
                                            _dependencies: []
                                        })]
                                    }, function() {
                                        return [t.createElement(s, {
                                            align: 0,
                                            animate: !1,
                                            style: "update-details__layout",
                                            visible: !0,
                                            _idProps: {
                                                service: e,
                                                uuid: "29"
                                            },
                                            _widgetRecordProvider: r
                                        }, t.createElement(s, {
                                            align: 0,
                                            animate: !1,
                                            style: "display-flex flex-direction-column margin-bottom-s",
                                            visible: !0,
                                            _idProps: {
                                                service: e,
                                                uuid: "30"
                                            },
                                            _widgetRecordProvider: r
                                        }, t.createElement(s, {
                                            align: 0,
                                            animate: !1,
                                            style: "update-details__message-container",
                                            visible: !0,
                                            _idProps: {
                                                service: e,
                                                name: "MessageInfoContainer2"
                                            },
                                            _widgetRecordProvider: r
                                        }, t.createElement(h, {
                                            image: g.Navigation.VersionedURL.getVersionedUrl("img/Accounts.Iconinfo.svg"),
                                            type: 0,
                                            _idProps: {
                                                service: e,
                                                name: "InfoIcon2"
                                            },
                                            _widgetRecordProvider: r
                                        }), v(i.variables.shouldUpdateNameVar && i.variables.shouldUpdateDOBVar, !1, this, function() {
                                            return [t.createElement(s, {
                                                align: 0,
                                                animate: !1,
                                                visible: !0,
                                                _idProps: {
                                                    service: e,
                                                    name: "Personaldetails2"
                                                },
                                                _widgetRecordProvider: r
                                            }, "Your ", t.createElement(l, {
                                                style: "font-bold",
                                                text: ["name"],
                                                _idProps: {
                                                    service: e,
                                                    uuid: "34"
                                                },
                                                _widgetRecordProvider: r
                                            }), " and ", t.createElement(l, {
                                                style: "font-bold",
                                                text: ["date of birth"],
                                                _idProps: {
                                                    service: e,
                                                    uuid: "35"
                                                },
                                                _widgetRecordProvider: r
                                            }), " must match with the identity document you submitted.")]
                                        }, function() {
                                            return [v(i.variables.shouldUpdateDOBVar, !1, this, function() {
                                                return [t.createElement(s, {
                                                    align: 0,
                                                    animate: !1,
                                                    visible: !0,
                                                    _idProps: {
                                                        service: e,
                                                        name: "DOBinfo2"
                                                    },
                                                    _widgetRecordProvider: r
                                                }, "Your ", t.createElement(l, {
                                                    style: "font-bold",
                                                    text: ["date of birth"],
                                                    _idProps: {
                                                        service: e,
                                                        uuid: "37"
                                                    },
                                                    _widgetRecordProvider: r
                                                }), " must match with the identity document you submitted.")]
                                            }, function() {
                                                return [t.createElement(s, {
                                                    align: 0,
                                                    animate: !1,
                                                    visible: !0,
                                                    _idProps: {
                                                        service: e,
                                                        name: "Nameinfo2"
                                                    },
                                                    _widgetRecordProvider: r
                                                }, "Your ", t.createElement(l, {
                                                    style: "font-bold",
                                                    text: ["name"],
                                                    _idProps: {
                                                        service: e,
                                                        uuid: "39"
                                                    },
                                                    _widgetRecordProvider: r
                                                }), " must match with the identity document you submitted.")]
                                            })]
                                        }))), t.createElement(S, {
                                            getOwnerSpan: a(function() {
                                                return d.getChildSpan("render")
                                            }, "getOwnerSpan"),
                                            getOwnerDisposeSpan: a(function() {
                                                return d.getChildSpan("destroy")
                                            }, "getOwnerDisposeSpan"),
                                            inputs: {
                                                ShowDOB: i.variables.shouldUpdateDOBVar,
                                                ButtonText: "Submit",
                                                IsFormUpdate: !0,
                                                ShowName: i.variables.shouldUpdateNameVar,
                                                ShowTitle: !1
                                            },
                                            events: {
                                                _handleError: a(function(n) {
                                                    o.handleError(n)
                                                }, "_handleError"),
                                                onPersonalDetailsChange$Action: a(function(n, _, b) {
                                                    var R = f.clone();
                                                    o.onChange$Action(n, _, b, o.callContext(R))
                                                }, "onPersonalDetailsChange$Action")
                                            },
                                            _validationProps: {
                                                validationService: u
                                            },
                                            _idProps: {
                                                service: e,
                                                uuid: "40",
                                                alias: "7"
                                            },
                                            _widgetRecordProvider: r,
                                            _dependencies: []
                                        }))]
                                    })]
                                })
                            },
                            _dependencies: [c(i.variables.shouldUpdateDOBVar), c(i.variables.shouldUpdateNameVar), c(i.variables.isLoadingVar)]
                        })]
                    })
                },
                _dependencies: [c(i.variables.shouldUpdateDOBVar), c(i.variables.shouldUpdateNameVar), c(i.variables.errorDataVar.messageAttr), c(i.variables.errorDataVar.codeAttr), c(i.variables.isLoadingVar)]
            }))
        }
    };
a(m, "View");
var D = m,
    ee = D;
export {
    ee as
    default
};