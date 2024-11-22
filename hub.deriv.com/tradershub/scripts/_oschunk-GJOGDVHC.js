import {
    a as v
} from "./_oschunk-H3LQHUL5.js";
import {
    a as h
} from "./_oschunk-2H3GKILR.js";
import "./_oschunk-EFUSIMB4.js";
import {
    a as o
} from "./_oschunk-NJYKWZYU.js";
import "./_oschunk-SW7FWAXZ.js";
import "./_oschunk-HUOHOHZB.js";
import "./_oschunk-Y45M2O2K.js";
import {
    a as O,
    g as u,
    i
} from "./_oschunk-6LASTRK7.js";
import "./_oschunk-TIJZDWYD.js";
import "./_oschunk-27GDEXUT.js";
import "./_oschunk-D2MH3QEK.js";
import "./_oschunk-WJ75ZXAT.js";
import "./_oschunk-3WNR72F6.js";
import "./_oschunk-X4K3PA43.js";
import "./_oschunk-HQOLQB4T.js";
import {
    ia as m
} from "./_oschunk-NTQBNJ73.js";
import {
    c as r,
    g as C
} from "./_oschunk-DVBKI63I.js";
var s = C(O());
var g = m,
    I = i.PlaceholderContent,
    A = i.IteratorPlaceholderContent,
    e = class e extends u.BaseWebScreen {
        static get displayName() {
            return "MainFlow.Redirect"
        }
        static getAttributes() {
            return {
                codeFunction: "Redirect",
                functionKey: "6a8e0613-4971-4362-bac0-cb2c96573e78",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.MainFlow.Redirect.css", "css/tradershub.AccountCreation.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [o]
        }
        get modelFactory() {
            return v
        }
        get controllerFactory() {
            return h
        }
        get title() {
            let S = this.model,
                t = this.controller,
                c = this.idService,
                a = t.validationService,
                d = t.callContext(),
                p = e.asPrimitiveValue,
                f = e.getTranslation,
                b = this;
            return g.Injector.resolve(g.ServiceNames.TranslationsService).getMessage("EwaOanFJYkO6wMssllc+eA#TitleExpression.-708286336.1", "Redirecting | Deriv")
        }
        internalRender() {
            let S = this.model,
                t = this.controller,
                c = this.idService,
                a = t.validationService,
                d = this.widgetsRecordProvider,
                p = t.callContext(),
                f = e.ifWidget,
                b = e.textWidget,
                R = e.asPrimitiveValue,
                P = e.getTranslation,
                l = this;
            return s.createElement("div", this.getRootNodeProperties(), s.createElement(o, {
                getOwnerSpan: r(function() {
                    return l.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: r(function() {
                    return l.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: r(function(w) {
                        t.handleError(w)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: a
                },
                _idProps: {
                    service: c,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: d,
                _dependencies: []
            }))
        }
    };
r(e, "View");
var n = e,
    B = n;
export {
    B as
    default
};