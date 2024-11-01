define("PartnersHub.Layouts.LayoutContainer.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.Common.LoaderBlock.mvc$model"], function(OSRuntimeCore, PartnersHubModel, PartnersHub_Common_LoaderBlock_mvcModel) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("StickyHeader", "stickyHeaderIn", "StickyHeader", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("_stickyHeaderInDataFetchStatus", "_stickyHeaderInDataFetchStatus", "_stickyHeaderInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false),
                    this.attr("StickyFooter", "stickyFooterIn", "StickyFooter", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("_stickyFooterInDataFetchStatus", "_stickyFooterInDataFetchStatus", "_stickyFooterInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        var VariablesRecord = VariablesRecordInner;
        VariablesRecord.init();
    }
    class WidgetsRecord extends
    OS.Model.BaseWidgetRecordMap {
        static getWidgetsType() {
            return {};
        }

    }

    class Model extends
    OS.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return VariablesRecord;
        }

        static getWidgetsRecordConstructor() {
            return WidgetsRecord;
        }

        static get hasValidationWidgets() {
            if ((Model._hasValidationWidgetsValue === undefined)) {
                Model._hasValidationWidgetsValue = PartnersHub_Common_LoaderBlock_mvcModel.hasValidationWidgets;
            }

            return Model._hasValidationWidgetsValue;
        }
        setInputs(inputs) {
            if ("StickyHeader" in inputs) {
                this.variables.stickyHeaderIn = inputs.StickyHeader;
                if ("_stickyHeaderInDataFetchStatus" in inputs) {
                    this.variables._stickyHeaderInDataFetchStatus = inputs._stickyHeaderInDataFetchStatus;
                }

            }

            if ("StickyFooter" in inputs) {
                this.variables.stickyFooterIn = inputs.StickyFooter;
                if ("_stickyFooterInDataFetchStatus" in inputs) {
                    this.variables._stickyFooterInDataFetchStatus = inputs._stickyFooterInDataFetchStatus;
                }

            }

        }

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("PartnersHub.Layouts.LayoutContainer.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "react", "@outsystems/runtime-view-js", "PartnersHub.Layouts.LayoutContainer.mvc$model", "PartnersHub.Layouts.LayoutContainer.mvc$controller", "PartnersHub.clientVariables", "@outsystems/runtime-widgets-js", "PartnersHub.Common.LoaderBlock.mvc$view"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, React, OSView, PartnersHub_Layouts_LayoutContainer_mvc_model, PartnersHub_Layouts_LayoutContainer_mvc_controller, PartnersHubClientVariables, OSWidgets, PartnersHub_Common_LoaderBlock_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() {
            return "Layouts.LayoutContainer";
        }

        static getAttributes() {
            return {
                codeFunction: "LayoutContainer",
                functionKey: "915b877a-ff71-4340-97a3-8109eb46f379",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.Layouts.LayoutContainer.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [PartnersHub_Common_LoaderBlock_mvc_view];
        }

        get modelFactory() {
            return PartnersHub_Layouts_LayoutContainer_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_Layouts_LayoutContainer_mvc_controller;
        }

        get title() {


            return "";
        }

        internalRender() {
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            var validationService = controller.validationService;
            var widgetsRecordProvider = this.widgetsRecordProvider;
            var callContext = controller.callContext();
            var $if = View.ifWidget;
            var $text = View.textWidget;
            var asPrimitiveValue = View.asPrimitiveValue;
            var getTranslation = View.getTranslation;
            var _this = this;

            return React.createElement("div", this.getRootNodeProperties(), $if(PartnersHubClientVariables.getIsAppReady(), false, this, function() {
                return [React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    style: "ph-main-body",
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "0"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Placeholder, {
                    align: /*Default*/ 0,
                    content: _this.props.placeholders.header,
                    style: model.getCachedValue(idService.getId("Header.Style"), function() {
                        return ((model.variables.stickyHeaderIn) ? ("ph-main-layout-sticky-header") : (""));
                    }, function() {
                        return model.variables.stickyHeaderIn;
                    }),
                    _idProps: {
                        service: idService,
                        name: "Header"
                    },
                    _widgetRecordProvider: widgetsRecordProvider,
                    style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._stickyHeaderInDataFetchStatus)
                }), React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    style: "ph-main-layout-container",
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "2"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Placeholder, {
                    align: /*Default*/ 0,
                    content: _this.props.placeholders.content,
                    _idProps: {
                        service: idService,
                        name: "Content"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                })), React.createElement(OSWidgets.Placeholder, {
                    align: /*Default*/ 0,
                    content: _this.props.placeholders.footer,
                    style: model.getCachedValue(idService.getId("Footer.Style"), function() {
                        return ((model.variables.stickyFooterIn) ? ("ph-main-layout-sticky-footer") : (""));
                    }, function() {
                        return model.variables.stickyFooterIn;
                    }),
                    _idProps: {
                        service: idService,
                        name: "Footer"
                    },
                    _widgetRecordProvider: widgetsRecordProvider,
                    style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._stickyFooterInDataFetchStatus)
                }))];
            }, function() {
                return [React.createElement(PartnersHub_Common_LoaderBlock_mvc_view, {
                    getOwnerSpan: function() {
                        return _this.getChildSpan("render");
                    },
                    getOwnerDisposeSpan: function() {
                        return _this.getChildSpan("destroy");
                    },
                    inputs: {},
                    events: {
                        _handleError: function(ex) {
                            controller.handleError(ex);
                        }
                    },
                    _validationProps: {
                        validationService: validationService
                    },
                    _idProps: {
                        service: idService,
                        uuid: "5",
                        alias: "1"
                    },
                    _widgetRecordProvider: widgetsRecordProvider,
                    _dependencies: []
                })];
            }));
        }
    }

    return View;
});
define("PartnersHub.Layouts.LayoutContainer.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.Layouts.LayoutContainer.mvc$translationsResources"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_Layouts_LayoutContainer_mvc_TranslationsResources) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, PartnersHub_Layouts_LayoutContainer_mvc_TranslationsResources);
                var controller = this.controller;
                this.clientActionProxies = {};
                this.dataFetchDependenciesOriginal = {};
                this.dataFetchDependentsGraph = {};
                this.shouldSendClientVarsToDataSources = false;
            }

            // Server Actions - Methods

            // Aggregates and Data Actions

            get dataFetchActionNames() {
                if (!(this.hasOwnProperty("_dataFetchActionNames"))) {
                    this._dataFetchActionNames = [];
                }

                return this._dataFetchActionNames;
            }
            set dataFetchActionNames(value) {
                this._dataFetchActionNames = value;
            }

            // Client Actions - Methods


            // Event Handler Actions
            get onInitializeEventHandler() {
                if (!(this.hasOwnProperty("_onInitializeEventHandler"))) {
                    this._onInitializeEventHandler = null;
                }

                return this._onInitializeEventHandler;
            }
            set onInitializeEventHandler(value) {
                this._onInitializeEventHandler = value;
            }

            get onReadyEventHandler() {
                if (!(this.hasOwnProperty("_onReadyEventHandler"))) {
                    this._onReadyEventHandler = null;
                }

                return this._onReadyEventHandler;
            }
            set onReadyEventHandler(value) {
                this._onReadyEventHandler = value;
            }

            get onRenderEventHandler() {
                if (!(this.hasOwnProperty("_onRenderEventHandler"))) {
                    this._onRenderEventHandler = null;
                }

                return this._onRenderEventHandler;
            }
            set onRenderEventHandler(value) {
                this._onRenderEventHandler = value;
            }

            get onDestroyEventHandler() {
                if (!(this.hasOwnProperty("_onDestroyEventHandler"))) {
                    this._onDestroyEventHandler = null;
                }

                return this._onDestroyEventHandler;
            }
            set onDestroyEventHandler(value) {
                this._onDestroyEventHandler = value;
            }

            get onParametersChangedEventHandler() {
                if (!(this.hasOwnProperty("_onParametersChangedEventHandler"))) {
                    this._onParametersChangedEventHandler = null;
                }

                return this._onParametersChangedEventHandler;
            }
            set onParametersChangedEventHandler(value) {
                this._onParametersChangedEventHandler = value;
            }

            get handleError() {
                if (!(this.hasOwnProperty("_handleError"))) {
                    this._handleError = function(ex) {
                        return controller.handleError(ex);
                    };
                }

                return this._handleError;
            }
            set handleError(value) {
                this._handleError = value;
            }

            static checkPermissions() {}

            getDefaultTimeout() {
                return PartnersHubController.default.defaultTimeout;
            }

        }

        var Controller = ControllerInner;
        // Server Actions - Variables

        // Client Actions - Variables

    }
    return new OS.Controller.ControllerFactory(Controller, PartnersHubLanguageResources);
});


define("PartnersHub.Layouts.LayoutContainer.mvc$translationsResources", ["exports"], function(exports) {
    return {};
});