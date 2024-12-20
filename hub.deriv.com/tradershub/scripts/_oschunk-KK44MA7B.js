import {
    a as V
} from "./_oschunk-OOIMPSNW.js";
import {
    a as D
} from "./_oschunk-DA7O3JNB.js";
import {
    a as U
} from "./_oschunk-WR6GSNDN.js";
import {
    a as R
} from "./_oschunk-K3RQALHW.js";
import {
    a as h
} from "./_oschunk-LURWXPZ6.js";
import {
    a as E
} from "./_oschunk-XUOYGXO3.js";
import "./_oschunk-LT6VIXXX.js";
import "./_oschunk-Y6X7VSM6.js";
import "./_oschunk-JGA2446S.js";
import {
    a as y
} from "./_oschunk-GAD6BM2D.js";
import {
    a as _
} from "./_oschunk-WK4I2H6N.js";
import "./_oschunk-VWJXDAKN.js";
import {
    b as T,
    h as P,
    p as F,
    q as w,
    s as f,
    t as S,
    u as b,
    y as A
} from "./_oschunk-E7JQAU4J.js";
import "./_oschunk-5N5TJ3ES.js";
import {
    a as N,
    g as W,
    i as O
} from "./_oschunk-T77XORCW.js";
import "./_oschunk-2TPJE4AL.js";
import "./_oschunk-VADNKVBQ.js";
import "./_oschunk-OOUVJ7PM.js";
import "./_oschunk-ZKKCTARK.js";
import "./_oschunk-X4K3PA43.js";
import "./_oschunk-KG7LSUIA.js";
import {
    ia as I
} from "./_oschunk-5EPHB76O.js";
import {
    c as i,
    g as B
} from "./_oschunk-DVBKI63I.js";
var n = B(N());
var p = I,
    l = O.PlaceholderContent,
    ie = O.IteratorPlaceholderContent,
    u = class u extends W.BaseWebScreen {
        static get displayName() {
            return "Common.ChangePassword"
        }
        static getAttributes() {
            return {
                codeFunction: "ChangePassword",
                functionKey: "e3781629-a18d-40a3-a680-8c697e181700",
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
            return [E, V, _, h, R, y]
        }
        get modelFactory() {
            return D
        }
        get controllerFactory() {
            return U
        }
        get title() {
            let r = this.model,
                o = this.controller,
                e = this.idService,
                c = o.validationService,
                a = o.callContext(),
                v = u.asPrimitiveValue,
                C = u.getTranslation,
                g = this;
            return p.Injector.resolve(p.ServiceNames.TranslationsService).getMessage("KRZ4442ho0CmgIxpfhgXAA#TitleExpression.244737259.1", "Change password")
        }
        internalRender() {
            let r = this.model,
                o = this.controller,
                e = this.idService,
                c = o.validationService,
                a = this.widgetsRecordProvider,
                v = o.callContext(),
                C = u.ifWidget,
                g = u.textWidget,
                s = u.asPrimitiveValue,
                m = u.getTranslation,
                d = this;
            return n.createElement("div", this.getRootNodeProperties(), n.createElement(E, {
                getOwnerSpan: i(function() {
                    return d.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: i(function() {
                    return d.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: i(function(t) {
                        o.handleError(t)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: c
                },
                _idProps: {
                    service: e,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: a,
                placeholders: {
                    breadcrumbs: new l(function() {
                        return [n.createElement(b, {
                            enabled: !0,
                            transition: p.Transitions.createTransition(p.Transitions.TransitionAnimation.Default),
                            url: p.Navigation.generateScreenURL("tradershub", "UserProfile", {}),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "1"
                            },
                            _widgetRecordProvider: a
                        }, n.createElement(w, {
                            icon: "angle-left",
                            iconSize: 0,
                            style: "icon",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "2"
                            },
                            _widgetRecordProvider: a
                        }), n.createElement(A, {
                            extendedProperties: {
                                style: "margin-left: 5px;"
                            },
                            text: [g(m("wCubOd1o8EWngEEcQZkHUg#Value", "Back to profile"))],
                            _idProps: {
                                service: e,
                                uuid: "3"
                            },
                            _widgetRecordProvider: a
                        }))]
                    }),
                    title: new l(function() {
                        return [g(m("6jR9Gqgm5Ueq0OUOVa5xUQ#Value", "Change your password"))]
                    }),
                    actions: l.Empty,
                    mainContent: new l(function() {
                        return [n.createElement(V, {
                            getOwnerSpan: i(function() {
                                return d.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: i(function() {
                                return d.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: i(function(t) {
                                    o.handleError(t)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: c
                            },
                            _idProps: {
                                service: e,
                                uuid: "4",
                                alias: "2"
                            },
                            _widgetRecordProvider: a,
                            placeholders: {
                                column1: new l(function() {
                                    return [n.createElement(F, {
                                        _validationProps: {
                                            validationService: c
                                        },
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        style: "form card",
                                        _idProps: {
                                            service: e,
                                            name: "Form"
                                        },
                                        _widgetRecordProvider: a
                                    }, n.createElement(P, {
                                        align: 0,
                                        animate: !1,
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "6"
                                        },
                                        _widgetRecordProvider: a
                                    }, n.createElement(_, {
                                        getOwnerSpan: i(function() {
                                            return d.getChildSpan("render")
                                        }, "getOwnerSpan"),
                                        getOwnerDisposeSpan: i(function() {
                                            return d.getChildSpan("destroy")
                                        }, "getOwnerDisposeSpan"),
                                        inputs: {},
                                        events: {
                                            _handleError: i(function(t) {
                                                o.handleError(t)
                                            }, "_handleError")
                                        },
                                        _validationProps: {
                                            validationService: c,
                                            validationParentId: e.getId("Form")
                                        },
                                        _idProps: {
                                            service: e,
                                            uuid: "7",
                                            alias: "3"
                                        },
                                        _widgetRecordProvider: a,
                                        placeholders: {
                                            label: new l(function() {
                                                return [n.createElement(S, {
                                                    gridProperties: {
                                                        classes: "OSFillParent"
                                                    },
                                                    mandatory: !0,
                                                    targetWidget: "Input_OldPassword",
                                                    _idProps: {
                                                        service: e,
                                                        uuid: "8"
                                                    },
                                                    _widgetRecordProvider: a
                                                }, g(m("BYvic0iNMkiP6WjAsSwHJg#Value", "Current password")))]
                                            }),
                                            input: new l(function() {
                                                return [n.createElement(f, {
                                                    _validationProps: {
                                                        validationService: c,
                                                        validationParentId: e.getId("Form")
                                                    },
                                                    enabled: !0,
                                                    extendedProperties: {
                                                        autoComplete: "current-password",
                                                        tabIndex: "1"
                                                    },
                                                    gridProperties: {
                                                        classes: "OSFillParent"
                                                    },
                                                    inputType: 1,
                                                    mandatory: !0,
                                                    maxLength: 256,
                                                    onChange: i(function() {
                                                        var t = v.clone();
                                                        o.input_OldPasswordOnChange$Action(o.callContext(t))
                                                    }, "onChange"),
                                                    style: "form-control",
                                                    variable: r.createVariable(p.DataTypes.DataTypes.Text, r.variables.oldPasswordVar, function(t) {
                                                        r.variables.oldPasswordVar = t
                                                    }),
                                                    _idProps: {
                                                        service: e,
                                                        name: "Input_OldPassword"
                                                    },
                                                    _widgetRecordProvider: a
                                                })]
                                            })
                                        },
                                        _dependencies: [s(r.variables.oldPasswordVar)]
                                    })), n.createElement(P, {
                                        align: 0,
                                        animate: !1,
                                        style: "margin-top-base",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "10"
                                        },
                                        _widgetRecordProvider: a
                                    }, n.createElement(_, {
                                        getOwnerSpan: i(function() {
                                            return d.getChildSpan("render")
                                        }, "getOwnerSpan"),
                                        getOwnerDisposeSpan: i(function() {
                                            return d.getChildSpan("destroy")
                                        }, "getOwnerDisposeSpan"),
                                        inputs: {},
                                        events: {
                                            _handleError: i(function(t) {
                                                o.handleError(t)
                                            }, "_handleError")
                                        },
                                        _validationProps: {
                                            validationService: c,
                                            validationParentId: e.getId("Form")
                                        },
                                        _idProps: {
                                            service: e,
                                            uuid: "11",
                                            alias: "4"
                                        },
                                        _widgetRecordProvider: a,
                                        placeholders: {
                                            label: new l(function() {
                                                return [n.createElement(S, {
                                                    gridProperties: {
                                                        classes: "OSFillParent"
                                                    },
                                                    mandatory: !0,
                                                    targetWidget: "Input_NewPassword",
                                                    _idProps: {
                                                        service: e,
                                                        uuid: "12"
                                                    },
                                                    _widgetRecordProvider: a
                                                }, g(m("MBfigjbMyk2GnnxrepNJ7w#Value", "New password")))]
                                            }),
                                            input: new l(function() {
                                                return [n.createElement(h, {
                                                    getOwnerSpan: i(function() {
                                                        return d.getChildSpan("render")
                                                    }, "getOwnerSpan"),
                                                    getOwnerDisposeSpan: i(function() {
                                                        return d.getChildSpan("destroy")
                                                    }, "getOwnerDisposeSpan"),
                                                    inputs: {
                                                        ExtendedClass: "padding-left-none",
                                                        AlignIconRight: !0
                                                    },
                                                    events: {
                                                        _handleError: i(function(t) {
                                                            o.handleError(t)
                                                        }, "_handleError")
                                                    },
                                                    _validationProps: {
                                                        validationService: c,
                                                        validationParentId: e.getId("Form")
                                                    },
                                                    _idProps: {
                                                        service: e,
                                                        uuid: "13",
                                                        alias: "5"
                                                    },
                                                    _widgetRecordProvider: a,
                                                    placeholders: {
                                                        icon: new l(function() {
                                                            return [n.createElement(b, {
                                                                enabled: !0,
                                                                onClick: i(function() {
                                                                    var t = v.clone();
                                                                    o.onToggleNewPasswordVisibility$Action(o.callContext(t))
                                                                }, "onClick"),
                                                                visible: !0,
                                                                _idProps: {
                                                                    service: e,
                                                                    uuid: "14"
                                                                },
                                                                _widgetRecordProvider: a
                                                            }, C(r.variables.isPasswordVisibleVar, !1, this, function() {
                                                                return [n.createElement(w, {
                                                                    icon: "eye-slash",
                                                                    iconSize: 0,
                                                                    style: "icon",
                                                                    visible: !0,
                                                                    _idProps: {
                                                                        service: e,
                                                                        uuid: "15"
                                                                    },
                                                                    _widgetRecordProvider: a
                                                                })]
                                                            }, function() {
                                                                return [n.createElement(w, {
                                                                    icon: "eye",
                                                                    iconSize: 0,
                                                                    style: "icon",
                                                                    visible: !0,
                                                                    _idProps: {
                                                                        service: e,
                                                                        uuid: "16"
                                                                    },
                                                                    _widgetRecordProvider: a
                                                                })]
                                                            }))]
                                                        }),
                                                        input: new l(function() {
                                                            return [n.createElement(f, {
                                                                _validationProps: {
                                                                    validationService: c,
                                                                    validationParentId: e.getId("Form")
                                                                },
                                                                enabled: !0,
                                                                extendedProperties: {
                                                                    autoComplete: "new-password",
                                                                    tabIndex: "2",
                                                                    style: "padding-bottom: 0px; padding-left: 0px; padding-right: var(--space-xl); padding-top: 0px;"
                                                                },
                                                                gridProperties: {
                                                                    classes: "OSFillParent"
                                                                },
                                                                inputType: 1,
                                                                mandatory: !0,
                                                                maxLength: 256,
                                                                style: "form-control login-password padding-left-none",
                                                                variable: r.createVariable(p.DataTypes.DataTypes.Text, r.variables.newPasswordVar, function(t) {
                                                                    r.variables.newPasswordVar = t
                                                                }),
                                                                _idProps: {
                                                                    service: e,
                                                                    name: "Input_NewPassword"
                                                                },
                                                                _widgetRecordProvider: a
                                                            })]
                                                        })
                                                    },
                                                    _dependencies: [s(r.variables.newPasswordVar), s(r.variables.isPasswordVisibleVar)]
                                                })]
                                            })
                                        },
                                        _dependencies: [s(r.variables.newPasswordVar), s(r.variables.isPasswordVisibleVar)]
                                    })), n.createElement(R, {
                                        getOwnerSpan: i(function() {
                                            return d.getChildSpan("render")
                                        }, "getOwnerSpan"),
                                        getOwnerDisposeSpan: i(function() {
                                            return d.getChildSpan("destroy")
                                        }, "getOwnerDisposeSpan"),
                                        inputs: {
                                            Password: r.variables.newPasswordVar
                                        },
                                        events: {
                                            _handleError: i(function(t) {
                                                o.handleError(t)
                                            }, "_handleError"),
                                            compliant$Action: i(function(t) {
                                                var L = v.clone();
                                                o.passwordPolicyCompliant$Action(t, o.callContext(L))
                                            }, "compliant$Action")
                                        },
                                        _validationProps: {
                                            validationService: c,
                                            validationParentId: e.getId("Form")
                                        },
                                        _idProps: {
                                            service: e,
                                            uuid: "18",
                                            alias: "6"
                                        },
                                        _widgetRecordProvider: a,
                                        _dependencies: []
                                    }), n.createElement(P, {
                                        align: 0,
                                        animate: !1,
                                        style: "margin-top-base",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "19"
                                        },
                                        _widgetRecordProvider: a
                                    }, n.createElement(_, {
                                        getOwnerSpan: i(function() {
                                            return d.getChildSpan("render")
                                        }, "getOwnerSpan"),
                                        getOwnerDisposeSpan: i(function() {
                                            return d.getChildSpan("destroy")
                                        }, "getOwnerDisposeSpan"),
                                        inputs: {},
                                        events: {
                                            _handleError: i(function(t) {
                                                o.handleError(t)
                                            }, "_handleError")
                                        },
                                        _validationProps: {
                                            validationService: c,
                                            validationParentId: e.getId("Form")
                                        },
                                        _idProps: {
                                            service: e,
                                            uuid: "20",
                                            alias: "7"
                                        },
                                        _widgetRecordProvider: a,
                                        placeholders: {
                                            label: new l(function() {
                                                return [n.createElement(S, {
                                                    gridProperties: {
                                                        classes: "OSFillParent"
                                                    },
                                                    mandatory: !0,
                                                    targetWidget: "Input_ConfirmPassword",
                                                    _idProps: {
                                                        service: e,
                                                        uuid: "21"
                                                    },
                                                    _widgetRecordProvider: a
                                                }, g(m("3Zyu6HHlq0STeMAHdlBoAg#Value", "Confirm password")))]
                                            }),
                                            input: new l(function() {
                                                return [n.createElement(h, {
                                                    getOwnerSpan: i(function() {
                                                        return d.getChildSpan("render")
                                                    }, "getOwnerSpan"),
                                                    getOwnerDisposeSpan: i(function() {
                                                        return d.getChildSpan("destroy")
                                                    }, "getOwnerDisposeSpan"),
                                                    inputs: {
                                                        ExtendedClass: "padding-left-none",
                                                        AlignIconRight: !0
                                                    },
                                                    events: {
                                                        _handleError: i(function(t) {
                                                            o.handleError(t)
                                                        }, "_handleError")
                                                    },
                                                    _validationProps: {
                                                        validationService: c,
                                                        validationParentId: e.getId("Form")
                                                    },
                                                    _idProps: {
                                                        service: e,
                                                        uuid: "22",
                                                        alias: "8"
                                                    },
                                                    _widgetRecordProvider: a,
                                                    placeholders: {
                                                        icon: new l(function() {
                                                            return [n.createElement(b, {
                                                                enabled: !0,
                                                                onClick: i(function() {
                                                                    var t = v.clone();
                                                                    o.onToggleConfirmPasswordVisibility$Action(o.callContext(t))
                                                                }, "onClick"),
                                                                visible: !0,
                                                                _idProps: {
                                                                    service: e,
                                                                    uuid: "23"
                                                                },
                                                                _widgetRecordProvider: a
                                                            }, C(r.variables.isPasswordVisibleVar, !1, this, function() {
                                                                return [n.createElement(w, {
                                                                    icon: "eye-slash",
                                                                    iconSize: 0,
                                                                    style: "icon",
                                                                    visible: !0,
                                                                    _idProps: {
                                                                        service: e,
                                                                        uuid: "24"
                                                                    },
                                                                    _widgetRecordProvider: a
                                                                })]
                                                            }, function() {
                                                                return [n.createElement(w, {
                                                                    icon: "eye",
                                                                    iconSize: 0,
                                                                    style: "icon",
                                                                    visible: !0,
                                                                    _idProps: {
                                                                        service: e,
                                                                        uuid: "25"
                                                                    },
                                                                    _widgetRecordProvider: a
                                                                })]
                                                            }))]
                                                        }),
                                                        input: new l(function() {
                                                            return [n.createElement(f, {
                                                                _validationProps: {
                                                                    validationService: c,
                                                                    validationParentId: e.getId("Form")
                                                                },
                                                                enabled: !0,
                                                                extendedProperties: {
                                                                    tabIndex: "3",
                                                                    style: "padding-bottom: 0px; padding-left: 0px; padding-right: var(--space-xl); padding-top: 0px;"
                                                                },
                                                                gridProperties: {
                                                                    classes: "OSFillParent"
                                                                },
                                                                inputType: 1,
                                                                mandatory: !0,
                                                                maxLength: 256,
                                                                onChange: i(function() {
                                                                    var t = v.clone();
                                                                    o.input_ConfirmPasswordOnChange$Action(o.callContext(t))
                                                                }, "onChange"),
                                                                style: "form-control login-password padding-left-none",
                                                                variable: r.createVariable(p.DataTypes.DataTypes.Text, r.variables.confirmPasswordVar, function(t) {
                                                                    r.variables.confirmPasswordVar = t
                                                                }),
                                                                _idProps: {
                                                                    service: e,
                                                                    name: "Input_ConfirmPassword"
                                                                },
                                                                _widgetRecordProvider: a
                                                            })]
                                                        })
                                                    },
                                                    _dependencies: [s(r.variables.confirmPasswordVar), s(r.variables.isPasswordVisibleVar)]
                                                })]
                                            })
                                        },
                                        _dependencies: [s(r.variables.confirmPasswordVar), s(r.variables.isPasswordVisibleVar)]
                                    })), n.createElement(P, {
                                        align: 0,
                                        animate: !1,
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "27"
                                        },
                                        _widgetRecordProvider: a
                                    }, n.createElement(y, {
                                        getOwnerSpan: i(function() {
                                            return d.getChildSpan("render")
                                        }, "getOwnerSpan"),
                                        getOwnerDisposeSpan: i(function() {
                                            return d.getChildSpan("destroy")
                                        }, "getOwnerDisposeSpan"),
                                        inputs: {
                                            ExtendedClass: "full-width",
                                            IsLoading: r.variables.isExecutingVar
                                        },
                                        events: {
                                            _handleError: i(function(t) {
                                                o.handleError(t)
                                            }, "_handleError")
                                        },
                                        _validationProps: {
                                            validationService: c,
                                            validationParentId: e.getId("Form")
                                        },
                                        _idProps: {
                                            service: e,
                                            uuid: "28",
                                            alias: "9"
                                        },
                                        _widgetRecordProvider: a,
                                        placeholders: {
                                            button: new l(function() {
                                                return [n.createElement(T, {
                                                    enabled: r.variables.isButtonEnabledVar,
                                                    extendedProperties: {
                                                        tabIndex: "4"
                                                    },
                                                    gridProperties: {
                                                        classes: "OSFillParent"
                                                    },
                                                    isDefault: !0,
                                                    onClick: i(function() {
                                                        return d.validateWidget(e.getId("Form")), Promise.resolve().then(function() {
                                                            var t = v.clone();
                                                            return o.setNewPasswordOnClick$Action(o.callContext(t))
                                                        })
                                                    }, "onClick"),
                                                    style: "btn btn-primary margin-top-l",
                                                    visible: !0,
                                                    _idProps: {
                                                        service: e,
                                                        uuid: "29"
                                                    },
                                                    _widgetRecordProvider: a
                                                }, n.createElement(P, {
                                                    align: 0,
                                                    animate: !1,
                                                    style: "osui-btn-loading__spinner-animation",
                                                    visible: !0,
                                                    _idProps: {
                                                        service: e,
                                                        uuid: "30"
                                                    },
                                                    _widgetRecordProvider: a
                                                }), g(m("5N+sd0hFqUeYlA4hxRTJxQ#Value", "Set new password")))]
                                            })
                                        },
                                        _dependencies: [s(r.variables.isButtonEnabledVar)]
                                    })))]
                                }),
                                column2: l.Empty
                            },
                            _dependencies: [s(r.variables.isButtonEnabledVar), s(r.variables.isExecutingVar), s(r.variables.confirmPasswordVar), s(r.variables.newPasswordVar), s(r.variables.isPasswordVisibleVar), s(r.variables.oldPasswordVar)]
                        })]
                    }),
                    footer: l.Empty
                },
                _dependencies: [s(r.variables.isButtonEnabledVar), s(r.variables.isExecutingVar), s(r.variables.confirmPasswordVar), s(r.variables.newPasswordVar), s(r.variables.isPasswordVisibleVar), s(r.variables.oldPasswordVar)]
            }))
        }
    };
i(u, "View");
var x = u,
    ne = x;
export {
    ne as
    default
};