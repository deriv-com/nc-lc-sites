import {
    d as s,
    k as u,
    n as m,
    p as g
} from "./_oschunk-M2CKCDBB.js";
import {
    a as R
} from "./_oschunk-NQZZDANH.js";
import {
    a as A,
    g as P,
    i as d
} from "./_oschunk-WZHUAZJP.js";
import {
    a as S
} from "./_oschunk-V2VV7FMU.js";
import {
    o as E
} from "./_oschunk-KZFTAIEG.js";
import {
    ia as l
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as a,
    h as w
} from "./_oschunk-QHO7QY6K.js";
var n = w(A());
var b = l; {
    let i = class i extends b.Controller.BaseViewController {
        constructor(e, f, t) {
            super(e, f, t);
            var H = this.controller;
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
            return E.defaultTimeout
        }
    };
    a(i, "ControllerInner");
    let c = i;
    C = c
}
var C, O = new b.Controller.ControllerFactory(C, R);
var o = l,
    X = d.PlaceholderContent,
    j = d.IteratorPlaceholderContent,
    r = class r extends P.BaseWebBlock {
        static get displayName() {
            return "Layouts.MobileSectionContentLayout"
        }
        static getAttributes() {
            return {
                codeFunction: "MobileSectionContentLayout",
                functionKey: "2f894190-280d-491e-a50c-fd54b0bb0b46",
                functionOwnerName: "Accounts",
                functionOwnerKey: "8a32fa32-34f5-4338-b6db-4f1ce8fdd638",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/Accounts.Layouts.MobileSectionContentLayout.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return []
        }
        get modelFactory() {
            return S
        }
        get controllerFactory() {
            return O
        }
        get title() {
            return ""
        }
        internalRender() {
            let i = this.model,
                v = this.controller,
                e = this.idService,
                f = v.validationService,
                t = this.widgetsRecordProvider,
                H = v.callContext(),
                p = r.ifWidget,
                W = r.textWidget,
                L = r.asPrimitiveValue,
                D = r.getTranslation,
                _ = this;
            return n.createElement("div", this.getRootNodeProperties(), n.createElement(s, {
                align: 0,
                animate: !1,
                style: "mobile-section",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: t
            }, n.createElement(s, {
                align: 0,
                animate: !1,
                style: "mobile-section-seperator",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "1"
                },
                _widgetRecordProvider: t
            }, n.createElement(s, {
                align: 0,
                animate: !1,
                style: "display-flex column-gap-base mobile-section-title-layout align-items-center",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "2"
                },
                _widgetRecordProvider: t
            }, p(i.variables.displayBackButtonIn, !1, this, function() {
                return [n.createElement(m, {
                    enabled: !0,
                    transition: o.Transitions.createTransition(o.Transitions.TransitionAnimation.Default),
                    url: o.Navigation.generateScreenURL("Accounts", "AccountSettings", {}),
                    visible: !0,
                    _idProps: {
                        service: e,
                        name: "Backbutton"
                    },
                    _widgetRecordProvider: t
                }, n.createElement(u, {
                    image: o.Navigation.VersionedURL.getVersionedUrl("img/Accounts.StandaloneArrowLeftBoldIcon.svg"),
                    style: "mobile-section-title--img",
                    type: 0,
                    _idProps: {
                        service: e,
                        uuid: "4"
                    },
                    _widgetRecordProvider: t
                }))]
            }, function() {
                return []
            }), n.createElement(g, {
                align: 0,
                content: _.props.placeholders.title,
                style: "mobile-section-heading--title",
                _idProps: {
                    service: e,
                    name: "Title"
                },
                _widgetRecordProvider: t
            }), p(i.variables.displayCloseButtonIn, !1, this, function() {
                return [n.createElement(m, {
                    enabled: !0,
                    onClick: a(function() {
                        try {
                            o.Navigation.navigateBack(null, null, !0)
                        } catch (y) {
                            if (y.name !== "RedirectOccurredException") throw y
                        }
                    }, "onClick"),
                    visible: !0,
                    _idProps: {
                        service: e,
                        name: "Closebutton"
                    },
                    _widgetRecordProvider: t
                }, n.createElement(u, {
                    image: o.Navigation.VersionedURL.getVersionedUrl("img/Accounts.StandaloneXmarkRegularIcon.svg"),
                    style: "mobile-section-title--img",
                    type: 0,
                    _idProps: {
                        service: e,
                        uuid: "7"
                    },
                    _widgetRecordProvider: t
                }))]
            }, function() {
                return []
            }))), n.createElement(s, {
                align: 0,
                animate: !1,
                style: "mobile-section--content",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "8"
                },
                _widgetRecordProvider: t
            }, n.createElement(g, {
                align: 0,
                content: _.props.placeholders.sectioncontent,
                style: "full-height",
                _idProps: {
                    service: e,
                    name: "Sectioncontent"
                },
                _widgetRecordProvider: t
            }))))
        }
    };
a(r, "View");
var h = r,
    q = h;
export {
    q as a
};