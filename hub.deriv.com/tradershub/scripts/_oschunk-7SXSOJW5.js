import {
    a
} from "./_oschunk-FJ4JOM3W.js";
import {
    a as c
} from "./_oschunk-MYI3BKA3.js";
import "./_oschunk-2M7PXTSQ.js";
import {
    a as f,
    g as n,
    i as r
} from "./_oschunk-RKYF3TWC.js";
import "./_oschunk-K7AFM7ZW.js";
import "./_oschunk-DOFMR6EA.js";
import "./_oschunk-2ZI4JQLD.js";
import "./_oschunk-IKZJT3AP.js";
import "./_oschunk-X4K3PA43.js";
import "./_oschunk-MSUVGI3L.js";
import {
    ia as i
} from "./_oschunk-2JKANR6M.js";
import {
    c as s,
    g as C
} from "./_oschunk-DVBKI63I.js";
var d = C(f());
var l = i,
    H = r.PlaceholderContent,
    N = r.IteratorPlaceholderContent,
    e = class e extends n.BaseWebScreen {
        static get displayName() {
            return "Common.PreloadHelper"
        }
        static getAttributes() {
            return {
                codeFunction: "PreloadHelper",
                functionKey: "82bca23e-9584-4622-8234-c87ea7844b41",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.AccountCreation.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return []
        }
        get modelFactory() {
            return a
        }
        get controllerFactory() {
            return c
        }
        get title() {
            let m = this.model,
                t = this.controller,
                u = this.idService,
                v = t.validationService,
                h = t.callContext(),
                g = e.asPrimitiveValue,
                p = e.getTranslation,
                S = this;
            return l.Injector.resolve(l.ServiceNames.TranslationsService).getMessage("PqK8goSVIkaCNMh+p4RLQQ#TitleExpression.1885050341.1", "Preload Helper")
        }
        internalRender() {
            let m = this.model,
                t = this.controller,
                u = this.idService,
                v = t.validationService,
                h = this.widgetsRecordProvider,
                g = t.callContext(),
                p = e.ifWidget,
                S = e.textWidget,
                P = e.asPrimitiveValue,
                b = e.getTranslation,
                x = this;
            return d.createElement("div", this.getRootNodeProperties())
        }
    };
s(e, "View");
var o = e,
    W = o;
export {
    W as
    default
};