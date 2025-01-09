import {
    a as v,
    c as g
} from "./_oschunk-VZCHS3W5.js";
import {
    a as S
} from "./_oschunk-GPNNXU3M.js";
import {
    d as u,
    p as C
} from "./_oschunk-M2CKCDBB.js";
import {
    a as w
} from "./_oschunk-NQZZDANH.js";
import {
    a as F,
    g as R,
    i as f
} from "./_oschunk-WZHUAZJP.js";
import {
    a as A
} from "./_oschunk-TGM73NNA.js";
import {
    a as i,
    o as P
} from "./_oschunk-KZFTAIEG.js";
import {
    le as _
} from "./_oschunk-UATY3RVV.js";
import {
    ia as h
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as t,
    h as I
} from "./_oschunk-QHO7QY6K.js";
var o = I(F());
var O = h; {
    let r = class r extends O.Controller.BaseViewController {
        constructor(e, d, a) {
            super(e, d, a);
            var b = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
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
            return P.defaultTimeout
        }
    };
    t(r, "ControllerInner");
    let p = r;
    H = p
}
var H, D = new O.Controller.ControllerFactory(H, w);
var m = h,
    E = f.PlaceholderContent,
    ee = f.IteratorPlaceholderContent,
    l = class l extends R.BaseWebBlock {
        static get displayName() {
            return "Layouts.AccountSettingsLayout"
        }
        static getAttributes() {
            return {
                codeFunction: "AccountSettingsLayout",
                functionKey: "e5cfaef9-ec98-40d4-a115-4464adafec71",
                functionOwnerName: "Accounts",
                functionOwnerKey: "8a32fa32-34f5-4338-b6db-4f1ce8fdd638",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/Accounts.Layouts.AccountSettingsLayout.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [S, v, g]
        }
        get modelFactory() {
            return A
        }
        get controllerFactory() {
            return D
        }
        get title() {
            return ""
        }
        internalRender() {
            let r = this.model,
                c = this.controller,
                e = this.idService,
                d = c.validationService,
                a = this.widgetsRecordProvider,
                b = c.callContext(),
                L = l.ifWidget,
                M = l.textWidget,
                W = l.asPrimitiveValue,
                U = l.getTranslation,
                s = this;
            return o.createElement("div", this.getRootNodeProperties(), o.createElement(S, {
                getOwnerSpan: t(function() {
                    return s.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: t(function() {
                    return s.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: t(function(n) {
                        c.handleError(n)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: d
                },
                _idProps: {
                    service: e,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: a,
                placeholders: {
                    desktopLayout: new E(function() {
                        return [o.createElement(u, {
                            align: 0,
                            animate: !1,
                            style: "full-height",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "1"
                            },
                            _widgetRecordProvider: a
                        }, o.createElement(u, {
                            align: 0,
                            animate: !0,
                            visible: !i.getIsWorkflow(),
                            _idProps: {
                                service: e,
                                uuid: "2"
                            },
                            _widgetRecordProvider: a
                        }, o.createElement(v, {
                            getOwnerSpan: t(function() {
                                return s.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: t(function() {
                                return s.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: t(function(n) {
                                    c.handleError(n)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: d
                            },
                            _idProps: {
                                service: e,
                                uuid: "3",
                                alias: "2"
                            },
                            _widgetRecordProvider: a,
                            _dependencies: []
                        })), o.createElement(u, {
                            align: 0,
                            animate: !1,
                            style: r.getCachedValue(e.getId("4dL9r20utE+scybbIHgIGg.Style"), function() {
                                return "account-settings--desktop full-width display-grid column-gap-s " + (i.getIsWorkflow() ? "full-height" : "account-settings--desktop-body full-height-minus-header")
                            }, function() {
                                return i.getIsWorkflow()
                            }),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "4"
                            },
                            _widgetRecordProvider: a
                        }, o.createElement(u, {
                            align: 0,
                            animate: !0,
                            visible: !i.getIsWorkflow(),
                            _idProps: {
                                service: e,
                                uuid: "5"
                            },
                            _widgetRecordProvider: a
                        }, o.createElement(g, {
                            getOwnerSpan: t(function() {
                                return s.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: t(function() {
                                return s.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                User: r.getCachedValue(e.getId("efrUq5kPZk674NH0HU+iUA.User"), function() {
                                    return function() {
                                        var n = new _;
                                        return n.nameAttr = i.getUserName(), n.emailAttr = i.getUserEmail(), n
                                    }()
                                }, function() {
                                    return i.getUserName()
                                }, function() {
                                    return i.getUserEmail()
                                }),
                                ActiveSection: r.variables.selectedSectionIn,
                                _activeSectionInDataFetchStatus: m.Model.calculateDataFetchStatus(r.variables._selectedSectionInDataFetchStatus),
                                ActiveMenu: r.variables.selectedMenuIn,
                                _activeMenuInDataFetchStatus: m.Model.calculateDataFetchStatus(r.variables._selectedMenuInDataFetchStatus)
                            },
                            events: {
                                _handleError: t(function(n) {
                                    c.handleError(n)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: d
                            },
                            _idProps: {
                                service: e,
                                uuid: "6",
                                alias: "3"
                            },
                            _widgetRecordProvider: a,
                            _dependencies: []
                        })), o.createElement(C, {
                            align: 0,
                            content: s.props.placeholders.content,
                            _idProps: {
                                service: e,
                                name: "Content"
                            },
                            _widgetRecordProvider: a
                        })))]
                    }),
                    tabletLayout: E.Empty,
                    defaultLayout: new E(function() {
                        return [o.createElement(u, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "8"
                            },
                            _widgetRecordProvider: a
                        }, o.createElement(v, {
                            getOwnerSpan: t(function() {
                                return s.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: t(function() {
                                return s.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: t(function(n) {
                                    c.handleError(n)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: d
                            },
                            _idProps: {
                                service: e,
                                uuid: "9",
                                alias: "4"
                            },
                            _widgetRecordProvider: a,
                            _dependencies: []
                        }), o.createElement(g, {
                            getOwnerSpan: t(function() {
                                return s.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: t(function() {
                                return s.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                ActiveSection: r.variables.selectedSectionIn,
                                _activeSectionInDataFetchStatus: m.Model.calculateDataFetchStatus(r.variables._selectedSectionInDataFetchStatus),
                                ActiveMenu: r.variables.selectedMenuIn,
                                _activeMenuInDataFetchStatus: m.Model.calculateDataFetchStatus(r.variables._selectedMenuInDataFetchStatus),
                                User: r.getCachedValue(e.getId("zK+vYjPhf0aVdyTBdAESJA.User"), function() {
                                    return function() {
                                        var n = new _;
                                        return n.nameAttr = i.getUserName(), n.emailAttr = i.getUserEmail(), n
                                    }()
                                }, function() {
                                    return i.getUserName()
                                }, function() {
                                    return i.getUserEmail()
                                })
                            },
                            events: {
                                _handleError: t(function(n) {
                                    c.handleError(n)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: d
                            },
                            _idProps: {
                                service: e,
                                uuid: "10",
                                alias: "5"
                            },
                            _widgetRecordProvider: a,
                            _dependencies: []
                        }))]
                    })
                }
            }))
        }
    };
t(l, "View");
var y = l,
    te = y;
export {
    te as a
};