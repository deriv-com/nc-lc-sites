import {
    a as B,
    b as k
} from "./_oschunk-ZT43PV7Z.js";
import {
    a as z
} from "./_oschunk-IZ5PXUOH.js";
import {
    a as E
} from "./_oschunk-ZP2LGY5A.js";
import "./_oschunk-5LFNVMPX.js";
import {
    a as L
} from "./_oschunk-FNNSC7KD.js";
import {
    a as b
} from "./_oschunk-FSPIWF67.js";
import "./_oschunk-VZCHS3W5.js";
import "./_oschunk-ENDX3VJY.js";
import {
    a as y
} from "./_oschunk-FTYAL2B7.js";
import {
    a as O
} from "./_oschunk-GPNNXU3M.js";
import {
    d as g,
    r as I
} from "./_oschunk-M2CKCDBB.js";
import "./_oschunk-FX7ZCYVH.js";
import {
    a as W
} from "./_oschunk-NQZZDANH.js";
import {
    a as $,
    g as A,
    i as f
} from "./_oschunk-WZHUAZJP.js";
import "./_oschunk-V2VV7FMU.js";
import "./_oschunk-TGM73NNA.js";
import "./_oschunk-4PNSWRUJ.js";
import "./_oschunk-BTXBTSZ3.js";
import "./_oschunk-5MMGFCSA.js";
import "./_oschunk-ZHFHVHFO.js";
import "./_oschunk-P7KMMADX.js";
import {
    a as N,
    o as F
} from "./_oschunk-KZFTAIEG.js";
import "./_oschunk-UATY3RVV.js";
import {
    ia as S
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as t,
    h as V
} from "./_oschunk-QHO7QY6K.js";
var c = V($());
var u = V($());
var l = S; {
    let h = class h extends l.Controller.BaseViewController {
        constructor(e, o, n) {
            super(e, o, n);
            var a = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _verificationListItemSelectedItem$Action() {
            return this.hasOwnProperty("__verificationListItemSelectedItem$Action") || (this.__verificationListItemSelectedItem$Action = function(e, o) {
                var n = this.model,
                    a = this.controller,
                    T = this.idService;
                return l.Logger.startActiveSpan("VerificationListItemSelectedItem", function(d) {
                    d && (d.setAttribute("code.function", "VerificationListItemSelectedItem"), d.setAttribute("outsystems.function.key", "6a37fb6e-1d12-497e-9b16-2d58e32ffded"), d.setAttribute("outsystems.function.owner.name", "Accounts"), d.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), d.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        a.ensureControllerAlive("VerificationListItemSelectedItem"), o = a.callContext(o);
                        var _ = new l.DataTypes.VariableHolder(new(a.constructor.getVariableGroupType("Accounts.Assessments.AssessmentItems.VerificationListItemSelectedItem$vars")));
                        if (_.value.refInLocal = e, _.value.refInLocal === "trading") return l.Navigation.navigateTo(l.Navigation.generateScreenURL("Accounts", "TradingAssessment", {}), l.Transitions.createTransition(l.Transitions.TransitionAnimation.Default), o, !0)
                    } finally {
                        d && d.end()
                    }
                }, 1)
            }), this.__verificationListItemSelectedItem$Action
        }
        set _verificationListItemSelectedItem$Action(e) {
            this.__verificationListItemSelectedItem$Action = e
        }
        verificationListItemSelectedItem$Action(e, o) {
            var n = this.controller;
            return l.Logger.startActiveSpan("VerificationListItemSelectedItem__proxy", function(a) {
                a && (a.setAttribute("code.function", "VerificationListItemSelectedItem"), a.setAttribute("outsystems.function.key", "6a37fb6e-1d12-497e-9b16-2d58e32ffded"), a.setAttribute("outsystems.function.owner.name", "Accounts"), a.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._verificationListItemSelectedItem$Action, o, e)
                } finally {
                    a && a.end()
                }
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(e) {
            this._onInitializeEventHandler = e
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = null), this._onReadyEventHandler
        }
        set onReadyEventHandler(e) {
            this._onReadyEventHandler = e
        }
        get onRenderEventHandler() {
            return this.hasOwnProperty("_onRenderEventHandler") || (this._onRenderEventHandler = null), this._onRenderEventHandler
        }
        set onRenderEventHandler(e) {
            this._onRenderEventHandler = e
        }
        get onDestroyEventHandler() {
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = null), this._onDestroyEventHandler
        }
        set onDestroyEventHandler(e) {
            this._onDestroyEventHandler = e
        }
        get onParametersChangedEventHandler() {
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = null), this._onParametersChangedEventHandler
        }
        set onParametersChangedEventHandler(e) {
            this._onParametersChangedEventHandler = e
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(e) {
                return controller.handleError(e)
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return F.defaultTimeout
        }
    };
    t(h, "ControllerInner");
    let C = h;
    D = C, D.registerVariableGroupType("Accounts.Assessments.AssessmentItems.VerificationListItemSelectedItem$vars", [{
        name: "Ref",
        attrName: "refInLocal",
        mandatory: !0,
        dataType: l.DataTypes.DataTypes.Text,
        defaultValue: t(function() {
            return ""
        }, "defaultValue")
    }])
}
var D, M = new l.Controller.ControllerFactory(D, W);
var w = f.PlaceholderContent,
    ae = f.IteratorPlaceholderContent,
    m = class m extends A.BaseWebBlock {
        static get displayName() {
            return "Assessments.AssessmentItems"
        }
        static getAttributes() {
            return {
                codeFunction: "AssessmentItems",
                functionKey: "7ae60434-1ced-4c4a-a132-87f6af1418d6",
                functionOwnerName: "Accounts",
                functionOwnerKey: "8a32fa32-34f5-4338-b6db-4f1ce8fdd638",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [E, y]
        }
        get modelFactory() {
            return B
        }
        get controllerFactory() {
            return M
        }
        get title() {
            return ""
        }
        internalRender() {
            let h = this.model,
                s = this.controller,
                e = this.idService,
                o = s.validationService,
                n = this.widgetsRecordProvider,
                a = s.callContext(),
                T = m.ifWidget,
                d = m.textWidget,
                _ = m.asPrimitiveValue,
                U = m.getTranslation,
                i = this;
            return u.createElement("div", this.getRootNodeProperties(), u.createElement(g, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: n
            }, u.createElement(E, {
                getOwnerSpan: t(function() {
                    return i.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: t(function() {
                    return i.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Ref: "trading",
                    IsDisabled: N.getLandingCompanyCode() !== "maltainvest"
                },
                events: {
                    _handleError: t(function(r) {
                        s.handleError(r)
                    }, "_handleError"),
                    selectedItem$Action: t(function(r) {
                        var R = a.clone();
                        s.verificationListItemSelectedItem$Action(r, s.callContext(R))
                    }, "selectedItem$Action")
                },
                _validationProps: {
                    validationService: o
                },
                _idProps: {
                    service: e,
                    uuid: "1",
                    alias: "1"
                },
                _widgetRecordProvider: n,
                placeholders: {
                    text: new w(function() {
                        return ["Trading assessment"]
                    }),
                    badge: w.Empty
                },
                _dependencies: []
            }), u.createElement(y, {
                getOwnerSpan: t(function() {
                    return i.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: t(function() {
                    return i.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: t(function(r) {
                        s.handleError(r)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: o
                },
                _idProps: {
                    service: e,
                    uuid: "2",
                    alias: "2"
                },
                _widgetRecordProvider: n,
                _dependencies: []
            }), u.createElement(E, {
                getOwnerSpan: t(function() {
                    return i.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: t(function() {
                    return i.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Ref: "financial"
                },
                events: {
                    _handleError: t(function(r) {
                        s.handleError(r)
                    }, "_handleError"),
                    selectedItem$Action: t(function(r) {
                        var R = a.clone();
                        s.verificationListItemSelectedItem$Action(r, s.callContext(R))
                    }, "selectedItem$Action")
                },
                _validationProps: {
                    validationService: o
                },
                _idProps: {
                    service: e,
                    uuid: "3",
                    alias: "3"
                },
                _widgetRecordProvider: n,
                placeholders: {
                    text: new w(function() {
                        return ["Financial assessment"]
                    }),
                    badge: w.Empty
                },
                _dependencies: []
            }), u.createElement(y, {
                getOwnerSpan: t(function() {
                    return i.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: t(function() {
                    return i.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: t(function(r) {
                        s.handleError(r)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: o
                },
                _idProps: {
                    service: e,
                    uuid: "4",
                    alias: "4"
                },
                _widgetRecordProvider: n,
                _dependencies: []
            })))
        }
    };
t(m, "View");
var H = m,
    P = H;
var p = f.PlaceholderContent,
    Ae = f.IteratorPlaceholderContent,
    v = class v extends A.BaseWebScreen {
        static get displayName() {
            return "MainFlow.Assessments"
        }
        static getAttributes() {
            return {
                codeFunction: "Assessments",
                functionKey: "e3d4b880-b42c-4c9c-84d7-97fbac1db1a4",
                functionOwnerName: "Accounts",
                functionOwnerKey: "8a32fa32-34f5-4338-b6db-4f1ce8fdd638",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/Accounts.DerivAccounts.css", "css/Accounts.MainFlow.Assessments.css", "css/Accounts.DerivAccounts.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [O, b, P, L]
        }
        get modelFactory() {
            return k
        }
        get controllerFactory() {
            return z
        }
        get title() {
            return "Assessments"
        }
        internalRender() {
            let h = this.model,
                s = this.controller,
                e = this.idService,
                o = s.validationService,
                n = this.widgetsRecordProvider,
                a = s.callContext(),
                T = v.ifWidget,
                d = v.textWidget,
                _ = v.asPrimitiveValue,
                U = v.getTranslation,
                i = this;
            return c.createElement("div", this.getRootNodeProperties(), c.createElement(O, {
                getOwnerSpan: t(function() {
                    return i.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: t(function() {
                    return i.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: t(function(r) {
                        s.handleError(r)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: o
                },
                _idProps: {
                    service: e,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: n,
                placeholders: {
                    desktopLayout: new p(function() {
                        return [c.createElement(b, {
                            getOwnerSpan: t(function() {
                                return i.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: t(function() {
                                return i.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                SelectedSection: "assessments"
                            },
                            events: {
                                _handleError: t(function(r) {
                                    s.handleError(r)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: o
                            },
                            _idProps: {
                                service: e,
                                uuid: "1",
                                alias: "2"
                            },
                            _widgetRecordProvider: n,
                            placeholders: {
                                content: new p(function() {
                                    return [c.createElement(g, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex flex-direction-column row-gap-s assessment-content",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "2"
                                        },
                                        _widgetRecordProvider: n
                                    }, c.createElement(I, {
                                        style: "font-size-h5 font-bold",
                                        text: ["Assessments"],
                                        _idProps: {
                                            service: e,
                                            uuid: "3"
                                        },
                                        _widgetRecordProvider: n
                                    }), c.createElement(P, {
                                        getOwnerSpan: t(function() {
                                            return i.getChildSpan("render")
                                        }, "getOwnerSpan"),
                                        getOwnerDisposeSpan: t(function() {
                                            return i.getChildSpan("destroy")
                                        }, "getOwnerDisposeSpan"),
                                        inputs: {},
                                        events: {
                                            _handleError: t(function(r) {
                                                s.handleError(r)
                                            }, "_handleError")
                                        },
                                        _validationProps: {
                                            validationService: o
                                        },
                                        _idProps: {
                                            service: e,
                                            uuid: "4",
                                            alias: "3"
                                        },
                                        _widgetRecordProvider: n,
                                        _dependencies: []
                                    }))]
                                })
                            },
                            _dependencies: []
                        })]
                    }),
                    tabletLayout: p.Empty,
                    defaultLayout: new p(function() {
                        return [c.createElement(L, {
                            getOwnerSpan: t(function() {
                                return i.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: t(function() {
                                return i.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                DisplayCloseButton: !1,
                                DisplayBackButton: !0
                            },
                            events: {
                                _handleError: t(function(r) {
                                    s.handleError(r)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: o
                            },
                            _idProps: {
                                service: e,
                                uuid: "5",
                                alias: "4"
                            },
                            _widgetRecordProvider: n,
                            placeholders: {
                                title: new p(function() {
                                    return [c.createElement(I, {
                                        style: "font-size-h6 font-bold",
                                        text: ["Assessment"],
                                        _idProps: {
                                            service: e,
                                            uuid: "6"
                                        },
                                        _widgetRecordProvider: n
                                    })]
                                }),
                                sectioncontent: new p(function() {
                                    return [c.createElement(g, {
                                        align: 0,
                                        animate: !1,
                                        style: "assessment-section__items",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "7"
                                        },
                                        _widgetRecordProvider: n
                                    }, c.createElement(P, {
                                        getOwnerSpan: t(function() {
                                            return i.getChildSpan("render")
                                        }, "getOwnerSpan"),
                                        getOwnerDisposeSpan: t(function() {
                                            return i.getChildSpan("destroy")
                                        }, "getOwnerDisposeSpan"),
                                        inputs: {},
                                        events: {
                                            _handleError: t(function(r) {
                                                s.handleError(r)
                                            }, "_handleError")
                                        },
                                        _validationProps: {
                                            validationService: o
                                        },
                                        _idProps: {
                                            service: e,
                                            uuid: "8",
                                            alias: "5"
                                        },
                                        _widgetRecordProvider: n,
                                        _dependencies: []
                                    }))]
                                })
                            },
                            _dependencies: []
                        })]
                    })
                },
                _dependencies: []
            }))
        }
    };
t(v, "View");
var x = v,
    ye = x;
export {
    ye as
    default
};