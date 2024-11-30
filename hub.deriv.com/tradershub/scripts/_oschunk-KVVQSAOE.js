import {
    a as T
} from "./_oschunk-V232M4QO.js";
import {
    a as D
} from "./_oschunk-Y6SVZWZJ.js";
import "./_oschunk-S244237N.js";
import {
    a as y
} from "./_oschunk-SUJQFUF5.js";
import "./_oschunk-LJVZHBJJ.js";
import "./_oschunk-SZLIT7QD.js";
import "./_oschunk-DNFEHUWC.js";
import "./_oschunk-BHZNFATE.js";
import {
    b as f,
    h as d,
    i as F,
    j as w,
    m as V,
    n as R,
    o as h,
    p as W,
    r as L,
    s as C,
    t as E,
    x as I
} from "./_oschunk-WAXNMQCP.js";
import "./_oschunk-LHY3WMNC.js";
import {
    a as K,
    g as x,
    i as S
} from "./_oschunk-J7LCUWB3.js";
import "./_oschunk-ESOYZIPG.js";
import {
    a as P
} from "./_oschunk-XMOR6XCC.js";
import "./_oschunk-H7UK4VZM.js";
import "./_oschunk-JSVFHRDW.js";
import "./_oschunk-LUKJNVXR.js";
import "./_oschunk-X4K3PA43.js";
import "./_oschunk-44PT7RP7.js";
import {
    ia as A
} from "./_oschunk-NTQBNJ73.js";
import {
    c as l,
    g as H
} from "./_oschunk-DVBKI63I.js";
var t = H(K());
var c = A,
    B = S.PlaceholderContent,
    M = S.IteratorPlaceholderContent,
    g = class g extends x.BaseWebScreen {
        static get displayName() {
            return "MainFlow.Endpoint"
        }
        static getAttributes() {
            return {
                codeFunction: "Endpoint",
                functionKey: "08443d37-9f2d-4a30-922c-a4072ffa3a61",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.MainFlow.Endpoint.css", "css/tradershub.AccountCreation.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [y]
        }
        get modelFactory() {
            return T
        }
        get controllerFactory() {
            return D
        }
        get title() {
            let e = this.model,
                n = this.controller,
                a = this.idService,
                v = n.validationService,
                r = n.callContext(),
                m = g.asPrimitiveValue,
                k = g.getTranslation,
                u = this;
            return c.Injector.resolve(c.ServiceNames.TranslationsService).getMessage("Nz1ECC2fMEqSLKQHL_o6YQ#TitleExpression.1629896911.1", "Endpoint | Deriv")
        }
        internalRender() {
            let e = this.model,
                n = this.controller,
                a = this.idService,
                v = n.validationService,
                r = this.widgetsRecordProvider,
                m = n.callContext(),
                k = g.ifWidget,
                u = g.textWidget,
                s = g.asPrimitiveValue,
                p = g.getTranslation,
                b = this;
            return t.createElement("div", this.getRootNodeProperties(), t.createElement(y, {
                getOwnerSpan: l(function() {
                    return b.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: l(function() {
                    return b.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: l(function(i) {
                        n.handleError(i)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: v
                },
                _idProps: {
                    service: a,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: r,
                placeholders: {
                    mainContent: new B(function() {
                        return [t.createElement(d, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "background: ; height: auto; text-align: left;"
                            },
                            style: "modal ",
                            visible: !0,
                            _idProps: {
                                service: a,
                                name: "MainContainer"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(d, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-right: 16px;"
                            },
                            gridProperties: {
                                marginLeft: "16px"
                            },
                            style: "display-flex flex-direction-column gap-m",
                            visible: !0,
                            _idProps: {
                                service: a,
                                name: "ContentContainer"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(d, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: a,
                                uuid: "3"
                            },
                            _widgetRecordProvider: r
                        }, u(p("0pzc0E9tEkKafaLsKv+uSw#Value", "Change API endpoint"))), t.createElement(W, {
                            _validationProps: {
                                validationService: v
                            },
                            extendedProperties: {
                                style: "border-width: 0px; padding: 0px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "form card",
                            _idProps: {
                                service: a,
                                name: "Form1"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(d, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: a,
                                uuid: "5"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(E, {
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            mandatory: !0,
                            targetWidget: "Input_URL",
                            _idProps: {
                                service: a,
                                uuid: "6"
                            },
                            _widgetRecordProvider: r
                        }, u(p("AEXNPcgQakKnKjJOkOVzrA#Value", "URL"))), t.createElement(C, {
                            _validationProps: {
                                validationService: v,
                                validationParentId: a.getId("Form1")
                            },
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            inputType: 0,
                            mandatory: !0,
                            maxLength: 50,
                            style: "form-control",
                            variable: e.createVariable(c.DataTypes.DataTypes.Text, e.variables.uRLVar, function(i) {
                                e.variables.uRLVar = i
                            }),
                            _idProps: {
                                service: a,
                                name: "Input_URL"
                            },
                            _widgetRecordProvider: r
                        })), t.createElement(d, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: a,
                                uuid: "8"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(E, {
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            mandatory: !0,
                            targetWidget: "Input_AppId",
                            _idProps: {
                                service: a,
                                uuid: "9"
                            },
                            _widgetRecordProvider: r
                        }, u(p("_jEEKfVxaUqriZ1u9xhKpw#Value", "App Id"))), t.createElement(C, {
                            _validationProps: {
                                validationService: v,
                                validationParentId: a.getId("Form1")
                            },
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            inputType: 0,
                            mandatory: !0,
                            maxLength: 50,
                            style: "form-control",
                            variable: e.createVariable(c.DataTypes.DataTypes.Text, e.variables.appIdVar, function(i) {
                                e.variables.appIdVar = i
                            }),
                            _idProps: {
                                service: a,
                                name: "Input_AppId"
                            },
                            _widgetRecordProvider: r
                        })), t.createElement(d, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: a,
                                uuid: "11"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(f, {
                            enabled: !0,
                            isDefault: !0,
                            onClick: l(function() {
                                b.validateWidget(a.getId("Form1"));
                                var i = m.clone();
                                n.saveOnClick$Action(n.callContext(i))
                            }, "onClick"),
                            style: "btn btn-primary full-width",
                            visible: !0,
                            _idProps: {
                                service: a,
                                uuid: "12"
                            },
                            _widgetRecordProvider: r
                        }, u(p("MV8ukmNCwE26Dfhf2CcJQA#Value", "Save"))))), t.createElement(f, {
                            enabled: !0,
                            isDefault: !1,
                            onClick: l(function() {
                                var i = m.clone();
                                n.resetOnClick$Action(n.callContext(i))
                            }, "onClick"),
                            style: "btn",
                            visible: !0,
                            _idProps: {
                                service: a,
                                uuid: "13"
                            },
                            _widgetRecordProvider: r
                        }, u(p("XwjnmG0C5k6E0fljXSpEbA#Value", "Reset"))), t.createElement(d, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: a,
                                name: "LanguageSwitcherContainer"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(F, {
                            _validationProps: {
                                validationService: v
                            },
                            dropdownMode: 1,
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            list: e.variables.getLanguagesByEnabledAggr.listOut,
                            mandatory: !1,
                            onChange: l(function() {
                                return Promise.resolve().then(function() {
                                    var i = m.clone();
                                    return n.onSwitchLanguage$Action(n.callContext(i))
                                })
                            }, "onChange"),
                            style: "dropdown",
                            values: l(function(i) {
                                return i.languagesAttr.codeAttr
                            }, "values"),
                            variable: e.createVariable(c.DataTypes.DataTypes.Text, P.getLanguage(), function(i) {
                                P.setLanguage(i)
                            }),
                            _idProps: {
                                service: a,
                                name: "LanguageSwitcherDropdown"
                            },
                            _widgetRecordProvider: r,
                            list_dataFetchStatus: c.Model.calculateDataFetchStatus(e.variables.getLanguagesByEnabledAggr.dataFetchStatusAttr),
                            placeholders: {
                                content: new M(function(i, o) {
                                    return [t.createElement(d, {
                                        align: 0,
                                        animate: !1,
                                        extendedProperties: {
                                            style: "align-items: center; display: flex; gap: 10px;"
                                        },
                                        style: "",
                                        visible: !0,
                                        _idProps: {
                                            service: i,
                                            uuid: "16"
                                        },
                                        _widgetRecordProvider: r,
                                        _dependencies: [s(e.variables.getLanguagesByEnabledAggr.dataFetchStatusAttr), s(e.variables.getLanguagesByEnabledAggr.listOut.getCurrent(o.iterationContext).languagesAttr.nameAttr), s(e.variables.getLanguagesByEnabledAggr.listOut.getCurrent(o.iterationContext).languagesAttr.iconAttr)]
                                    }, t.createElement(L, {
                                        gridProperties: {
                                            width: "30px"
                                        },
                                        type: 1,
                                        url: e.variables.getLanguagesByEnabledAggr.listOut.getCurrent(o.iterationContext).languagesAttr.iconAttr,
                                        _idProps: {
                                            service: i,
                                            uuid: "17"
                                        },
                                        _widgetRecordProvider: r,
                                        url_dataFetchStatus: c.Model.calculateDataFetchStatus(e.variables.getLanguagesByEnabledAggr.dataFetchStatusAttr)
                                    }), t.createElement(w, {
                                        extendedProperties: {
                                            style: "overflow: visible; text-overflow: unset;"
                                        },
                                        gridProperties: {
                                            classes: "ThemeGrid_MarginGutter"
                                        },
                                        value: e.variables.getLanguagesByEnabledAggr.listOut.getCurrent(o.iterationContext).languagesAttr.nameAttr,
                                        _idProps: {
                                            service: i,
                                            uuid: "18"
                                        },
                                        _widgetRecordProvider: r,
                                        value_dataFetchStatus: c.Model.calculateDataFetchStatus(e.variables.getLanguagesByEnabledAggr.dataFetchStatusAttr)
                                    }))]
                                }, m, a, "1")
                            },
                            _dependencies: [s(e.variables.getLanguagesByEnabledAggr.dataFetchStatusAttr)]
                        })), t.createElement(d, {
                            align: 0,
                            animate: !0,
                            visible: !e.variables.featureFlagsVar.isEmpty,
                            _idProps: {
                                service: a,
                                uuid: "19"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(V, {
                            showHeader: !0,
                            source: e.variables.featureFlagsVar,
                            style: "table",
                            styleHeader: "table-header",
                            styleRow: "table-row",
                            _idProps: {
                                service: a,
                                uuid: "20"
                            },
                            _widgetRecordProvider: r,
                            placeholders: {
                                headerRow: new B(function() {
                                    return [t.createElement(R, {
                                        _idProps: {
                                            service: a,
                                            uuid: "21"
                                        },
                                        _widgetRecordProvider: r,
                                        _dependencies: []
                                    }, u(p("FawrB0ncP0yh8_O65T6_HA#Value", "Flag Name"))), t.createElement(R, {
                                        extendedProperties: {
                                            style: "text-align: center"
                                        },
                                        _idProps: {
                                            service: a,
                                            uuid: "22"
                                        },
                                        _widgetRecordProvider: r,
                                        _dependencies: []
                                    }, u(p("A4Xjk+9CgEm9m3gqtwXjHw#Value", "Enabled")))]
                                }),
                                row: new M(function(i, o) {
                                    return [t.createElement(h, {
                                        _idProps: {
                                            service: i,
                                            uuid: "23"
                                        },
                                        _widgetRecordProvider: r,
                                        _dependencies: [s(e.variables.featureFlagsVar.getCurrent(o.iterationContext).nameAttr)]
                                    }, t.createElement(w, {
                                        value: e.variables.featureFlagsVar.getCurrent(o.iterationContext).nameAttr,
                                        _idProps: {
                                            service: i,
                                            uuid: "24"
                                        },
                                        _widgetRecordProvider: r
                                    })), t.createElement(h, {
                                        _idProps: {
                                            service: i,
                                            uuid: "25"
                                        },
                                        _widgetRecordProvider: r,
                                        _dependencies: [s(e.variables.featureFlagsVar.getCurrent(o.iterationContext).enabledAttr)]
                                    }, t.createElement(d, {
                                        align: 2,
                                        animate: !1,
                                        visible: !0,
                                        _idProps: {
                                            service: i,
                                            uuid: "26"
                                        },
                                        _widgetRecordProvider: r
                                    }, t.createElement(I, {
                                        _validationProps: {
                                            validationService: v
                                        },
                                        enabled: !0,
                                        onChange: l(function() {
                                            var _ = o.clone();
                                            n.switchOnChange$Action(e.variables.featureFlagsVar.getCurrent(o.iterationContext).nameAttr, n.callContext(_))
                                        }, "onChange"),
                                        style: "switch",
                                        variable: e.createVariable(c.DataTypes.DataTypes.Boolean, e.variables.featureFlagsVar.getCurrent(o.iterationContext).enabledAttr, function(_) {
                                            e.variables.featureFlagsVar.getCurrent(o.iterationContext).enabledAttr = _
                                        }),
                                        _idProps: {
                                            service: i,
                                            name: "Switch1"
                                        },
                                        _widgetRecordProvider: r
                                    })))]
                                }, m, a, "2_0")
                            },
                            _dependencies: []
                        }))))]
                    })
                },
                _dependencies: [s(e.variables.featureFlagsVar), s(e.variables.getLanguagesByEnabledAggr.dataFetchStatusAttr), s(e.variables.getLanguagesByEnabledAggr.listOut), s(P.getLanguage()), s(e.variables.appIdVar), s(e.variables.uRLVar)]
            }))
        }
    };
l(g, "View");
var O = g,
    G = O;
export {
    G as
    default
};