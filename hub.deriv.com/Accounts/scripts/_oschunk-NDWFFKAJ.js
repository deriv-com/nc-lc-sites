import {
    a as l
} from "./_oschunk-5VBAT4J5.js";
import {
    a as d
} from "./_oschunk-RRXYGK6F.js";
import {
    a as n
} from "./_oschunk-FSPIWF67.js";
import "./_oschunk-VZCHS3W5.js";
import "./_oschunk-ENDX3VJY.js";
import "./_oschunk-FTYAL2B7.js";
import "./_oschunk-GPNNXU3M.js";
import "./_oschunk-M2CKCDBB.js";
import "./_oschunk-FX7ZCYVH.js";
import "./_oschunk-NQZZDANH.js";
import {
    a as g,
    g as a,
    i as o
} from "./_oschunk-WZHUAZJP.js";
import "./_oschunk-TGM73NNA.js";
import "./_oschunk-4PNSWRUJ.js";
import "./_oschunk-BTXBTSZ3.js";
import "./_oschunk-5MMGFCSA.js";
import "./_oschunk-ZHFHVHFO.js";
import "./_oschunk-P7KMMADX.js";
import "./_oschunk-KZFTAIEG.js";
import "./_oschunk-UATY3RVV.js";
import "./_oschunk-3RH6DZJJ.js";
import {
    c as t,
    h as v
} from "./_oschunk-QHO7QY6K.js";
var c = v(g());
var S = o.PlaceholderContent,
    M = o.IteratorPlaceholderContent,
    e = class e extends a.BaseWebScreen {
        static get displayName() {
            return "MainFlow.Profile"
        }
        static getAttributes() {
            return {
                codeFunction: "Profile",
                functionKey: "c50d9987-fa8c-44b7-82cd-a127b9f9937f",
                functionOwnerName: "Accounts",
                functionOwnerKey: "8a32fa32-34f5-4338-b6db-4f1ce8fdd638",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/Accounts.DerivAccounts.css", "css/Accounts.DerivAccounts.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [n]
        }
        get modelFactory() {
            return l
        }
        get controllerFactory() {
            return d
        }
        get title() {
            return "Profile"
        }
        internalRender() {
            let P = this.model,
                r = this.controller,
                u = this.idService,
                m = r.validationService,
                f = this.widgetsRecordProvider,
                h = r.callContext(),
                w = e.ifWidget,
                O = e.textWidget,
                A = e.asPrimitiveValue,
                _ = e.getTranslation,
                s = this;
            return c.createElement("div", this.getRootNodeProperties(), c.createElement(n, {
                getOwnerSpan: t(function() {
                    return s.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: t(function() {
                    return s.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    SelectedSection: "profile",
                    SelectedMenu: "account"
                },
                events: {
                    _handleError: t(function(p) {
                        r.handleError(p)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: m
                },
                _idProps: {
                    service: u,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: f,
                placeholders: {
                    content: S.Empty
                },
                _dependencies: []
            }))
        }
    };
t(e, "View");
var i = e,
    I = i;
export {
    I as
    default
};