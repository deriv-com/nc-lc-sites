import {
    a as f
} from "./_oschunk-QU7KZ3WA.js";
import {
    h as u,
    i as P,
    q as A,
    v as N
} from "./_oschunk-O5KC3WOL.js";
import {
    a as J,
    g as b,
    m as I,
    o as x,
    q as T,
    r as V,
    s as W,
    t as M
} from "./_oschunk-NVHFAAS2.js";
import {
    a as F
} from "./_oschunk-AW35UT34.js";
import {
    G as y,
    Ka as H,
    a as c
} from "./_oschunk-WCMQG33O.js";
import {
    J as _,
    X as S,
    c as t,
    f as q,
    x as R
} from "./_oschunk-DFKJJKI4.js";
var d = S,
    D = class D extends d.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Data", "dataIn", "Data", !0, !1, d.DataTypes.DataTypes.Record, function() {
                return d.DataTypes.ImmutableBase.getData(new y)
            }, !1, y), this.attr("_dataInDataFetchStatus", "_dataInDataFetchStatus", "_dataInDataFetchStatus", !0, !1, d.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(d.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
t(D, "VariablesRecord");
var g = D;
g.init();
var O = class O extends d.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
t(O, "WidgetsRecord");
var w = O,
    v = class v extends d.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return g
        }
        static getWidgetsRecordConstructor() {
            return w
        }
        static get hasValidationWidgets() {
            return v._hasValidationWidgetsValue === void 0 && (v._hasValidationWidgetsValue = void 0), v._hasValidationWidgetsValue
        }
        setInputs(a) {
            "Data" in a && (this.variables.dataIn = a.Data, "_dataInDataFetchStatus" in a && (this.variables._dataInDataFetchStatus = a._dataInDataFetchStatus))
        }
    };
t(v, "Model");
var E = v;
E._hasValidationWidgetsValue = void 0;
var z = new d.Model.ModelFactory(E);
var i = q(J());
var k = {};
var G = S; {
    let a = class a extends G.Controller.BaseViewController {
        constructor(e, n, p) {
            super(e, n, p, k);
            var K = this.controller;
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
        get onSyncStartEventHandler() {
            return this.hasOwnProperty("_onSyncStartEventHandler") || (this._onSyncStartEventHandler = null), this._onSyncStartEventHandler
        }
        set onSyncStartEventHandler(e) {
            this._onSyncStartEventHandler = e
        }
        get onSyncCompleteEventHandler() {
            return this.hasOwnProperty("_onSyncCompleteEventHandler") || (this._onSyncCompleteEventHandler = null), this._onSyncCompleteEventHandler
        }
        set onSyncCompleteEventHandler(e) {
            this._onSyncCompleteEventHandler = e
        }
        get onSyncErrorEventHandler() {
            return this.hasOwnProperty("_onSyncErrorEventHandler") || (this._onSyncErrorEventHandler = null), this._onSyncErrorEventHandler
        }
        set onSyncErrorEventHandler(e) {
            this._onSyncErrorEventHandler = e
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
            return H.defaultTimeout
        }
    };
    t(a, "ControllerInner");
    let s = a;
    L = s
}
var L, U = new G.Controller.ControllerFactory(L, F);
var C = b.PlaceholderContent,
    Ee = b.IteratorPlaceholderContent,
    Q = t(function() {
        var s = x(function(a) {
            var r = a.model,
                e = a.controller,
                n = a.controller.idService,
                p = e.validationService,
                K = e.callContext(),
                m = W,
                X = M,
                $ = {
                    props: a,
                    validateWidget: t(function(l) {
                        a.validateWidget(a, l)
                    }, "validateWidget")
                },
                o = r,
                Y = V,
                Z = T,
                h = I();
            return i.createElement("div", a.rootNodeProperties, i.createElement(u, {
                align: 0,
                animate: !1,
                style: "cfd-success-popup",
                visible: !0,
                _idProps: {
                    service: n,
                    uuid: "0"
                },
                _widgetRecordProvider: o
            }, i.createElement(u, {
                align: 0,
                animate: !1,
                style: "cfd-success-popup__header",
                visible: !0,
                _idProps: {
                    service: n,
                    name: "Header"
                },
                _widgetRecordProvider: o
            }, i.createElement(f, {
                getOwnerSpan: t(function() {
                    return h.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: t(function() {
                    return h.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Delay: 1e3,
                    AnimationType: c.animationType.bottomToTop,
                    Speed: c.speed.normal
                },
                events: {
                    _handleError: t(function(l) {
                        e.handleError(l)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: p
                },
                _idProps: {
                    service: n,
                    uuid: "2",
                    alias: "1"
                },
                _widgetRecordProvider: o,
                placeholders: {
                    content: new C(function() {
                        return [i.createElement(A, {
                            extendedProperties: {
                                style: "height: auto;"
                            },
                            gridProperties: {
                                width: "250px"
                            },
                            type: 1,
                            url: r.variables.dataIn.iconAttr,
                            _idProps: {
                                service: n,
                                uuid: "3"
                            },
                            _widgetRecordProvider: o,
                            url_dataFetchStatus: _.calculateDataFetchStatus(r.variables._dataInDataFetchStatus)
                        })]
                    })
                },
                _dependencies: [m(r.variables._dataInDataFetchStatus), m(r.variables.dataIn.iconAttr)]
            })), i.createElement(u, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: n,
                    name: "Content"
                },
                _widgetRecordProvider: o
            }, i.createElement(f, {
                getOwnerSpan: t(function() {
                    return h.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: t(function() {
                    return h.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    AnimationType: c.animationType.fadeIn,
                    Delay: 1500,
                    Speed: c.speed.slow
                },
                events: {
                    _handleError: t(function(l) {
                        e.handleError(l)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: p
                },
                _idProps: {
                    service: n,
                    uuid: "5",
                    alias: "2"
                },
                _widgetRecordProvider: o,
                placeholders: {
                    content: new C(function() {
                        return [i.createElement(u, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "text-align: center;"
                            },
                            style: "display-flex flex-direction-column align-items-center gap-s",
                            visible: !0,
                            _idProps: {
                                service: n,
                                uuid: "6"
                            },
                            _widgetRecordProvider: o
                        }, i.createElement(P, {
                            style: "cfd-success-popup__title",
                            value: r.variables.dataIn.titleAttr,
                            _idProps: {
                                service: n,
                                uuid: "7"
                            },
                            _widgetRecordProvider: o,
                            value_dataFetchStatus: _.calculateDataFetchStatus(r.variables._dataInDataFetchStatus)
                        }), i.createElement(u, {
                            align: 0,
                            animate: !0,
                            visible: r.getCachedValue(n.getId("z8u1NDrhcEGMDV7CRquOkw.Visible"), function() {
                                return r.variables.dataIn.descriptionAttr !== R.nullTextIdentifier()
                            }, function() {
                                return r.variables.dataIn.descriptionAttr
                            }),
                            _idProps: {
                                service: n,
                                uuid: "8"
                            },
                            _widgetRecordProvider: o,
                            visible_dataFetchStatus: _.calculateDataFetchStatus(r.variables._dataInDataFetchStatus)
                        }, i.createElement(P, {
                            extendedProperties: {
                                style: "margin-bottom: 0px; margin-right: 0px; margin-top: 0px;"
                            },
                            gridProperties: {
                                marginLeft: "0px"
                            },
                            style: "full-width text-align-center text-neutral-6",
                            value: r.variables.dataIn.descriptionAttr,
                            _idProps: {
                                service: n,
                                uuid: "9"
                            },
                            _widgetRecordProvider: o,
                            value_dataFetchStatus: _.calculateDataFetchStatus(r.variables._dataInDataFetchStatus)
                        })))]
                    })
                },
                _dependencies: [m(r.variables._dataInDataFetchStatus), m(r.variables.dataIn.descriptionAttr), m(r.variables.dataIn.titleAttr)]
            })), i.createElement(u, {
                align: 0,
                animate: !1,
                style: "cfd-success-popup__footer",
                visible: !0,
                _idProps: {
                    service: n,
                    name: "Footer"
                },
                _widgetRecordProvider: o
            }, i.createElement(f, {
                getOwnerSpan: t(function() {
                    return h.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: t(function() {
                    return h.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Speed: c.speed.slow,
                    AnimationType: c.animationType.fadeIn,
                    Delay: 2e3
                },
                events: {
                    _handleError: t(function(l) {
                        e.handleError(l)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: p
                },
                _idProps: {
                    service: n,
                    uuid: "11",
                    alias: "3"
                },
                _widgetRecordProvider: o,
                placeholders: {
                    content: new C(function() {
                        return [i.createElement(N, {
                            align: 0,
                            content: $.props.placeholders.footerButton,
                            style: "cfd-success-popup__footer--btn",
                            _idProps: {
                                service: n,
                                name: "FooterButton"
                            },
                            _widgetRecordProvider: o
                        })]
                    })
                }
            }))))
        }, {
            topLevelComponent: !1,
            getAttributes: t(function() {
                return {
                    codeFunction: "CFDNewSuccess",
                    functionKey: "6bbf7f66-9bca-4be1-af4c-2d4199c6dcce",
                    functionOwnerName: "dashboard",
                    functionOwnerKey: "bbed91b8-a741-4694-b61f-b0ef761ba4e2",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "CFDs.CFDNewSuccess",
            modelFactory: z,
            controllerFactory: U
        });
        return s.getCssDependencies = function() {
            return ["css/dashboard.CFDs.CFDNewSuccess.css", "css/OutSystemsReactWidgets.css"]
        }, s.getJsDependencies = function() {
            return []
        }, s.getBlocks = function() {
            return [f]
        }, s
    }, "componentFactory"),
    ye = Q();
export {
    ye as a
};