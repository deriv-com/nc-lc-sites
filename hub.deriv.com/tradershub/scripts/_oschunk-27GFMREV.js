import {
    a as y
} from "./_oschunk-AI7WEO6E.js";
import {
    a as C
} from "./_oschunk-OR6UUKYY.js";
import {
    a as f
} from "./_oschunk-4NZKJYN3.js";
import {
    a as S
} from "./_oschunk-MDM6SINN.js";
import "./_oschunk-Z3EGUX6T.js";
import "./_oschunk-NJYKWZYU.js";
import "./_oschunk-SW7FWAXZ.js";
import "./_oschunk-B7RGCJGD.js";
import "./_oschunk-BHZNFATE.js";
import {
    b as R,
    f as w,
    g as u,
    h as O
} from "./_oschunk-HUOHOHZB.js";
import "./_oschunk-Y45M2O2K.js";
import {
    a as A,
    g as p,
    i as P
} from "./_oschunk-6LASTRK7.js";
import "./_oschunk-TIJZDWYD.js";
import {
    a as o
} from "./_oschunk-27GDEXUT.js";
import "./_oschunk-D2MH3QEK.js";
import "./_oschunk-WJ75ZXAT.js";
import "./_oschunk-3WNR72F6.js";
import "./_oschunk-X4K3PA43.js";
import "./_oschunk-HQOLQB4T.js";
import {
    ia as h
} from "./_oschunk-NTQBNJ73.js";
import {
    c as e,
    g as F
} from "./_oschunk-DVBKI63I.js";
var t = F(A());
var x = h,
    E = P.PlaceholderContent,
    G = P.IteratorPlaceholderContent,
    s = class s extends p.BaseWebScreen {
        static get displayName() {
            return "FinancialAssessmentFlow.EducationLevel"
        }
        static getAttributes() {
            return {
                codeFunction: "EducationLevel",
                functionKey: "85bf6205-6cd3-45d0-8e39-821fadee03df",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.FinancialAssessmentFlow.EducationLevel.css", "css/tradershub.AccountCreation.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [S, f]
        }
        get modelFactory() {
            return y
        }
        get controllerFactory() {
            return C
        }
        get title() {
            return p.BaseWebScreen.getTranslation("BWK_hdNs0EWOOYIfre4D3w#Title", "EducationLevel")
        }
        internalRender() {
            let v = this.model,
                i = this.controller,
                n = this.idService,
                m = i.validationService,
                a = this.widgetsRecordProvider,
                _ = i.callContext(),
                V = s.ifWidget,
                c = s.textWidget,
                g = s.asPrimitiveValue,
                d = s.getTranslation,
                l = this;
            return t.createElement("div", this.getRootNodeProperties(), t.createElement(S, {
                getOwnerSpan: e(function() {
                    return l.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: e(function() {
                    return l.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    HideTitle: !0,
                    Title: "Financial assessment"
                },
                events: {
                    _handleError: e(function(r) {
                        i.handleError(r)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: m
                },
                _idProps: {
                    service: n,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: a,
                placeholders: {
                    content: new E(function() {
                        return [t.createElement(f, {
                            getOwnerSpan: e(function() {
                                return l.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: e(function() {
                                return l.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                IsRequired: v.variables.isRequiredVar,
                                Page: "5/8",
                                QuestionText: "Education level"
                            },
                            events: {
                                _handleError: e(function(r) {
                                    i.handleError(r)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: m
                            },
                            _idProps: {
                                service: n,
                                uuid: "1",
                                alias: "2"
                            },
                            _widgetRecordProvider: a,
                            placeholders: {
                                content: new E(function() {
                                    return [t.createElement(w, {
                                        _validationProps: {
                                            validationService: m
                                        },
                                        enabled: !0,
                                        extendedEvents: {
                                            onClick: e(function() {
                                                var r = _.clone();
                                                i.nextOnClick$Action(i.callContext(r))
                                            }, "onClick")
                                        },
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        mandatory: !1,
                                        style: "radio-group",
                                        variable: v.createVariable(x.DataTypes.DataTypes.Text, o.getFinancialAssessmentEducationLevel(), function(r) {
                                            o.setFinancialAssessmentEducationLevel(r)
                                        }),
                                        _idProps: {
                                            service: n,
                                            name: "RadioGroup"
                                        },
                                        _widgetRecordProvider: a
                                    }, t.createElement(u, {
                                        enabled: !0,
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        style: "radio-button",
                                        value: "Primary",
                                        visible: !0,
                                        _idProps: {
                                            service: n,
                                            name: "Primary"
                                        },
                                        _widgetRecordProvider: a
                                    }, c(d("o61V9gnuL0CsIywNqrANVQ#Value", "Primary"))), t.createElement(u, {
                                        enabled: !0,
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        style: "radio-button",
                                        value: "Secondary",
                                        visible: !0,
                                        _idProps: {
                                            service: n,
                                            name: "Secondary"
                                        },
                                        _widgetRecordProvider: a
                                    }, c(d("kXujI_aoaECPwgCqEYCZWA#Value", "Secondary"))), t.createElement(u, {
                                        enabled: !0,
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        style: "radio-button",
                                        value: "Tertiary",
                                        visible: !0,
                                        _idProps: {
                                            service: n,
                                            name: "Tertiary"
                                        },
                                        _widgetRecordProvider: a
                                    }, c(d("mPL1oJTmnU+8O6jWhh2RCA#Value", "Tertiary")))), t.createElement(O, {
                                        align: 0,
                                        animate: !1,
                                        style: "btn-container",
                                        visible: !0,
                                        _idProps: {
                                            service: n,
                                            name: "Next"
                                        },
                                        _widgetRecordProvider: a
                                    }, t.createElement(R, {
                                        enabled: !0,
                                        isDefault: !1,
                                        onClick: e(function() {
                                            var r = _.clone();
                                            i.nextOnClick$Action(i.callContext(r))
                                        }, "onClick"),
                                        style: "btn btn-primary",
                                        visible: !0,
                                        _idProps: {
                                            service: n,
                                            uuid: "7"
                                        },
                                        _widgetRecordProvider: a
                                    }, c(d("AVvJGo2zL0qMGO1+EYfRXQ#Value", "Next"))))]
                                })
                            },
                            _dependencies: [g(o.getFinancialAssessmentEducationLevel())]
                        })]
                    })
                },
                _dependencies: [g(o.getFinancialAssessmentEducationLevel()), g(v.variables.isRequiredVar)]
            }))
        }
    };
e(s, "View");
var b = s,
    $ = b;
export {
    $ as
    default
};