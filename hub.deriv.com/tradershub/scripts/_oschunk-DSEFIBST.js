import {
    a as U
} from "./_oschunk-TZYWUPCN.js";
import {
    a as V
} from "./_oschunk-MX22HJYU.js";
import {
    a as _
} from "./_oschunk-OOIMPSNW.js";
import {
    a as C
} from "./_oschunk-XUOYGXO3.js";
import "./_oschunk-LT6VIXXX.js";
import "./_oschunk-Y6X7VSM6.js";
import "./_oschunk-JGA2446S.js";
import {
    a as P
} from "./_oschunk-WK4I2H6N.js";
import "./_oschunk-VWJXDAKN.js";
import {
    b as E,
    h as b,
    j as x,
    p as I,
    s as R,
    t as h,
    u as B
} from "./_oschunk-E7JQAU4J.js";
import "./_oschunk-5N5TJ3ES.js";
import {
    a as W,
    g as w,
    i as f
} from "./_oschunk-T77XORCW.js";
import "./_oschunk-2TPJE4AL.js";
import "./_oschunk-VADNKVBQ.js";
import "./_oschunk-OOUVJ7PM.js";
import "./_oschunk-ZKKCTARK.js";
import "./_oschunk-X4K3PA43.js";
import {
    a as y
} from "./_oschunk-KG7LSUIA.js";
import {
    ia as O
} from "./_oschunk-5EPHB76O.js";
import {
    c as n,
    g as F
} from "./_oschunk-DVBKI63I.js";
var r = F(W());
var u = O,
    d = f.PlaceholderContent,
    z = f.IteratorPlaceholderContent,
    c = class c extends w.BaseWebScreen {
        static get displayName() {
            return "Common.UserProfile"
        }
        static getAttributes() {
            return {
                codeFunction: "UserProfile",
                functionKey: "d1f92804-a4fa-4d9e-a9cd-6ae1223130e4",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.AccountCreation.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [C, _, P]
        }
        get modelFactory() {
            return U
        }
        get controllerFactory() {
            return V
        }
        get title() {
            let e = this.model,
                s = this.controller,
                t = this.idService,
                m = s.validationService,
                a = s.callContext(),
                o = c.asPrimitiveValue,
                S = c.getTranslation,
                v = this;
            return u.Injector.resolve(u.ServiceNames.TranslationsService).getMessage("BCj50fqknk2pzWrhIjEw5A#TitleExpression.-777369892.1", "Your profile")
        }
        internalRender() {
            let e = this.model,
                s = this.controller,
                t = this.idService,
                m = s.validationService,
                a = this.widgetsRecordProvider,
                o = s.callContext(),
                S = c.ifWidget,
                v = c.textWidget,
                i = c.asPrimitiveValue,
                p = c.getTranslation,
                g = this;
            return r.createElement("div", this.getRootNodeProperties(), r.createElement(C, {
                getOwnerSpan: n(function() {
                    return g.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: n(function() {
                    return g.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: n(function(l) {
                        s.handleError(l)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: m
                },
                _idProps: {
                    service: t,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: a,
                placeholders: {
                    breadcrumbs: d.Empty,
                    title: new d(function() {
                        return [v(p("p2BRIdDiM0u9QmUgGEZ+eg#Value", "Your profile"))]
                    }),
                    actions: new d(function() {
                        return [S(e.variables.isExternalVar, !1, this, function() {
                            return []
                        }, function() {
                            return [r.createElement(B, {
                                enabled: !0,
                                transition: u.Transitions.createTransition(u.Transitions.TransitionAnimation.Default),
                                url: u.Navigation.generateScreenURL("tradershub", "ChangePassword", {}),
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "1"
                                },
                                _widgetRecordProvider: a
                            }, v(p("CC+GcxKJA0WGIoSdH+66Dw#Value", "Change your password")))]
                        })]
                    }),
                    mainContent: new d(function() {
                        return [r.createElement(I, {
                            _validationProps: {
                                validationService: m
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "form card",
                            _idProps: {
                                service: t,
                                name: "Form"
                            },
                            _widgetRecordProvider: a
                        }, r.createElement(_, {
                            getOwnerSpan: n(function() {
                                return g.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return g.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                PhoneBehavior: y.breakColumns.all
                            },
                            events: {
                                _handleError: n(function(l) {
                                    s.handleError(l)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: m,
                                validationParentId: t.getId("Form")
                            },
                            _idProps: {
                                service: t,
                                uuid: "3",
                                alias: "2"
                            },
                            _widgetRecordProvider: a,
                            placeholders: {
                                column1: new d(function() {
                                    return [r.createElement(b, {
                                        align: 0,
                                        animate: !1,
                                        style: "margin-bottom-m",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "4"
                                        },
                                        _widgetRecordProvider: a
                                    }, r.createElement(h, {
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        _idProps: {
                                            service: t,
                                            name: "EmailLabel"
                                        },
                                        _widgetRecordProvider: a
                                    }, v(p("OGG8gySjFk2Kx4j_mw0Hzw#Value", "Email"))), r.createElement(x, {
                                        value: e.variables.getUserByIdAggr.listOut.getCurrent(o.iterationContext).userAttr.emailAttr,
                                        _idProps: {
                                            service: t,
                                            uuid: "6"
                                        },
                                        _widgetRecordProvider: a,
                                        value_dataFetchStatus: u.Model.calculateDataFetchStatus(e.variables.getUserByIdAggr.dataFetchStatusAttr)
                                    })), r.createElement(b, {
                                        align: 0,
                                        animate: !1,
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "7"
                                        },
                                        _widgetRecordProvider: a
                                    }, r.createElement(P, {
                                        getOwnerSpan: n(function() {
                                            return g.getChildSpan("render")
                                        }, "getOwnerSpan"),
                                        getOwnerDisposeSpan: n(function() {
                                            return g.getChildSpan("destroy")
                                        }, "getOwnerDisposeSpan"),
                                        inputs: {},
                                        events: {
                                            _handleError: n(function(l) {
                                                s.handleError(l)
                                            }, "_handleError")
                                        },
                                        _validationProps: {
                                            validationService: m,
                                            validationParentId: t.getId("Form")
                                        },
                                        _idProps: {
                                            service: t,
                                            uuid: "8",
                                            alias: "3"
                                        },
                                        _widgetRecordProvider: a,
                                        placeholders: {
                                            label: new d(function() {
                                                return [r.createElement(h, {
                                                    gridProperties: {
                                                        classes: "OSFillParent"
                                                    },
                                                    _idProps: {
                                                        service: t,
                                                        name: "NameLabel"
                                                    },
                                                    _widgetRecordProvider: a
                                                }, v(p("ig1Naf1fU0imQgQDJfJNhw#Value", "Name")))]
                                            }),
                                            input: new d(function() {
                                                return [r.createElement(R, {
                                                    _validationProps: {
                                                        validationService: m,
                                                        validationParentId: t.getId("Form")
                                                    },
                                                    enabled: !e.variables.isExternalVar,
                                                    extendedProperties: {
                                                        tabIndex: "1"
                                                    },
                                                    gridProperties: {
                                                        classes: "OSFillParent"
                                                    },
                                                    inputType: 0,
                                                    mandatory: !0,
                                                    maxLength: 0,
                                                    onChange: n(function() {
                                                        var l = o.clone();
                                                        s.input_NameOnChange$Action(s.callContext(l))
                                                    }, "onChange"),
                                                    style: "form-control",
                                                    variable: e.createVariable(u.DataTypes.DataTypes.Text, e.variables.getUserByIdAggr.listOut.getCurrent(o.iterationContext).userAttr.nameAttr, function(l) {
                                                        e.variables.getUserByIdAggr.listOut.getCurrent(o.iterationContext).userAttr.nameAttr = l
                                                    }),
                                                    _idProps: {
                                                        service: t,
                                                        name: "Input_Name"
                                                    },
                                                    _widgetRecordProvider: a,
                                                    variable_dataFetchStatus: u.Model.calculateDataFetchStatus(e.variables.getUserByIdAggr.dataFetchStatusAttr)
                                                })]
                                            })
                                        },
                                        _dependencies: [i(e.variables.isExternalVar), i(e.variables.getUserByIdAggr.dataFetchStatusAttr), i(e.variables.getUserByIdAggr.listOut.getCurrent(o.iterationContext).userAttr.nameAttr)]
                                    })), S(e.variables.isExternalVar, !1, this, function() {
                                        return []
                                    }, function() {
                                        return [r.createElement(E, {
                                            enabled: e.variables.isButtonEnabledVar,
                                            extendedProperties: {
                                                tabIndex: "2"
                                            },
                                            isDefault: !0,
                                            onClick: n(function() {
                                                return g.validateWidget(t.getId("Form")), Promise.resolve().then(function() {
                                                    var l = o.clone();
                                                    return s.saveChangesOnClick$Action(s.callContext(l))
                                                })
                                            }, "onClick"),
                                            style: "btn btn-primary",
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                name: "SaveChangesButton"
                                            },
                                            _widgetRecordProvider: a
                                        }, v(p("goGC0Dzn50uVKpTfkT+PXg#Value", "Save changes")))]
                                    })]
                                }),
                                column2: d.Empty
                            },
                            _dependencies: [i(e.variables.isButtonEnabledVar), i(e.variables.isExternalVar), i(e.variables.getUserByIdAggr.dataFetchStatusAttr), i(e.variables.getUserByIdAggr.listOut.getCurrent(o.iterationContext).userAttr.nameAttr), i(e.variables.getUserByIdAggr.listOut.getCurrent(o.iterationContext).userAttr.emailAttr)]
                        }))]
                    }),
                    footer: d.Empty
                },
                _dependencies: [i(e.variables.isButtonEnabledVar), i(e.variables.getUserByIdAggr.dataFetchStatusAttr), i(e.variables.getUserByIdAggr.listOut.getCurrent(o.iterationContext).userAttr.nameAttr), i(e.variables.getUserByIdAggr.listOut.getCurrent(o.iterationContext).userAttr.emailAttr), i(e.variables.isExternalVar)]
            }))
        }
    };
n(c, "View");
var A = c,
    Q = A;
export {
    Q as
    default
};