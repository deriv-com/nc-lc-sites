import {
    a as l
} from "./_oschunk-DHB43ZAR.js";
import {
    a as v
} from "./_oschunk-G2TNQSPZ.js";
import "./_oschunk-QVB5H2VB.js";
import {
    a as S
} from "./_oschunk-O7NFR2X2.js";
import {
    a as s
} from "./_oschunk-3XHELSFS.js";
import "./_oschunk-5DW66ZV2.js";
import "./_oschunk-MQYFLHOB.js";
import "./_oschunk-MUB32TUL.js";
import "./_oschunk-ND5NIK2B.js";
import "./_oschunk-4YFBPYRH.js";
import "./_oschunk-NR4KXK35.js";
import "./_oschunk-5HXBKFJV.js";
import "./_oschunk-J6YOU2SX.js";
import "./_oschunk-D7X2Q6KG.js";
import "./_oschunk-6WALBPGV.js";
import {
    a as P,
    g as c,
    i as a
} from "./_oschunk-2Q3BG5XZ.js";
import "./_oschunk-BFQJHNK7.js";
import "./_oschunk-RO5KMNGS.js";
import "./_oschunk-UVWOQOAC.js";
import "./_oschunk-RFCNRBVT.js";
import "./_oschunk-Y3C3IKDF.js";
import "./_oschunk-GP4JCHX2.js";
import "./_oschunk-FZ6FUHBV.js";
import "./_oschunk-S5DOOZ7G.js";
import "./_oschunk-5FYEKNKX.js";
import "./_oschunk-5KJVGEL7.js";
import {
    c as e,
    h as f
} from "./_oschunk-QHO7QY6K.js";
var i = f(P());
var C = a.PlaceholderContent,
    D = a.IteratorPlaceholderContent,
    t = class t extends c.BaseWebScreen {
        static get displayName() {
            return "RealAccountCreation.AccountTypeScreen"
        }
        static getAttributes() {
            return {
                codeFunction: "AccountTypeScreen",
                functionKey: "928b03ff-65f0-420b-b506-106b8e9bda09",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/PartnersHub.PHubTest.css", "css/PartnersHub.PHubTest.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [s, l]
        }
        get modelFactory() {
            return v
        }
        get controllerFactory() {
            return S
        }
        get title() {
            return c.BaseWebScreen.getTranslation("_wOLkvBlC0K1BhBrjpvaCQ#Title", "AccountTypeScreen")
        }
        internalRender() {
            let b = this.model,
                r = this.controller,
                u = this.idService,
                p = r.validationService,
                m = this.widgetsRecordProvider,
                g = r.callContext(),
                _ = t.ifWidget,
                h = t.textWidget,
                w = t.asPrimitiveValue,
                y = t.getTranslation,
                o = this;
            return i.createElement("div", this.getRootNodeProperties(), i.createElement(s, {
                getOwnerSpan: e(function() {
                    return o.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: e(function() {
                    return o.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: e(function(n) {
                        r.handleError(n)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: p
                },
                _idProps: {
                    service: u,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: m,
                placeholders: {
                    content: new C(function() {
                        return [i.createElement(l, {
                            getOwnerSpan: e(function() {
                                return o.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: e(function() {
                                return o.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: e(function(n) {
                                    r.handleError(n)
                                }, "_handleError"),
                                onClickEvent$Action: e(function() {
                                    var n = g.clone();
                                    r.accountTypeBlockOnClickEvent$Action(r.callContext(n))
                                }, "onClickEvent$Action")
                            },
                            _validationProps: {
                                validationService: p
                            },
                            _idProps: {
                                service: u,
                                uuid: "1",
                                alias: "2"
                            },
                            _widgetRecordProvider: m,
                            _dependencies: []
                        })]
                    })
                },
                _dependencies: []
            }))
        }
    };
e(t, "View");
var d = t,
    F = d;
export {
    F as
    default
};