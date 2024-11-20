define("PartnersHub.Events.EventDetails.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "CloneAWSSignatureVersion4.model", "PartnersHub.controller", "PartnersHub.Layouts.LayoutContainer.mvc$model", "OutSystemsUI.Adaptive.DisplayOnDevice.mvc$model", "PartnersHub.Common.Headers.mvc$model", "PartnersHub.Common.NewHeaderTitleBlock.mvc$model", "PartnersHub.Common.SkeletonLoader.mvc$model", "PartnersHub.Common.TitleBlock.mvc$model", "PartnersHub.Events.EventLocationDateTime.mvc$model", "PartnersHub.Events.SpeakersBlock.mvc$model", "CustomComponentsOfficial.ButtonVariants.PrimaryButton.mvc$model", "PartnersHub.Common.StickyButtonBottom.mvc$model", "CloneAWSSignatureVersion4.model$ST_49dc3bc2d063241aae5dd3879dfa11a4Structure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$CloneAWSSignatureVersion4", "PartnersHub.model$ST_9f1e67525baf02c5f10f80cc2f462aacStructure", "PartnersHub.model$ST_23ff1d290ec4691b1c668ad437100cd0Structure", "PartnersHub.controller$RudderstackTrackEvent", "PartnersHub.controller$RedirectToExternalNewTab", "CloneAWSSignatureVersion4.model$ST_2a7ac328ca1ac01bfb70fc00237a0973Structure", "CloneAWSSignatureVersion4.model$ST_5aac4e0eb05c7f4c7f14409f9c2e3d4dStructure", "PartnersHub.model$RC_b93f5c57f06e1ce1f61cc2fdbe0d7c52", "PartnersHub.model$RL_ece689df05adbd14fd8c52f51e2c24dc"], function(OSRuntimeCore, PartnersHubModel, CloneAWSSignatureVersion4Model, PartnersHubController, PartnersHub_Layouts_LayoutContainer_mvcModel, OutSystemsUI_Adaptive_DisplayOnDevice_mvcModel, PartnersHub_Common_Headers_mvcModel, PartnersHub_Common_NewHeaderTitleBlock_mvcModel, PartnersHub_Common_SkeletonLoader_mvcModel, PartnersHub_Common_TitleBlock_mvcModel, PartnersHub_Events_EventLocationDateTime_mvcModel, PartnersHub_Events_SpeakersBlock_mvcModel, CustomComponentsOfficial_ButtonVariants_PrimaryButton_mvcModel, PartnersHub_Common_StickyButtonBottom_mvcModel) {
    var OS = OSRuntimeCore; {
        class GetEventByIdAggrRecInner extends
        OS.Model.AggregateRecord {
            static attributesToDeclare() {
                return [].concat(OS.Model.AggregateRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new GetEventByIdAggrRec(new GetEventByIdAggrRec.RecordClass({
                    RecordListType: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        GetEventByIdAggrRecInner.RecordListType = PartnersHubModel.RL_ece689df05adbd14fd8c52f51e2c24dc;
        var GetEventByIdAggrRec = GetEventByIdAggrRecInner;
        GetEventByIdAggrRec.init();
    }


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("IsLoading", "isLoadingVar", "IsLoading", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return true;
                    }, false),
                    this.attr("EventImages", "eventImagesVar", "EventImages", true, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new CloneAWSSignatureVersion4Model.ST_49dc3bc2d063241aae5dd3879dfa11a4Structure());
                    }, false, CloneAWSSignatureVersion4Model.ST_49dc3bc2d063241aae5dd3879dfa11a4Structure),
                    this.attr("IsLoadingImages", "isLoadingImagesVar", "IsLoadingImages", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return true;
                    }, false),
                    this.attr("EventId", "eventIdIn", "EventId", true, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, false),
                    this.attr("_eventIdInDataFetchStatus", "_eventIdInDataFetchStatus", "_eventIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false),
                    this.attr("GetEventById", "getEventByIdAggr", "GetEventById", true, true, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new GetEventByIdAggrRec());
                    }, true, GetEventByIdAggrRec)
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
                Model._hasValidationWidgetsValue = (((((((((PartnersHub_Layouts_LayoutContainer_mvcModel.hasValidationWidgets || OutSystemsUI_Adaptive_DisplayOnDevice_mvcModel.hasValidationWidgets) || PartnersHub_Common_Headers_mvcModel.hasValidationWidgets) || PartnersHub_Common_NewHeaderTitleBlock_mvcModel.hasValidationWidgets) || PartnersHub_Common_SkeletonLoader_mvcModel.hasValidationWidgets) || PartnersHub_Common_TitleBlock_mvcModel.hasValidationWidgets) || PartnersHub_Events_EventLocationDateTime_mvcModel.hasValidationWidgets) || PartnersHub_Events_SpeakersBlock_mvcModel.hasValidationWidgets) || CustomComponentsOfficial_ButtonVariants_PrimaryButton_mvcModel.hasValidationWidgets) || PartnersHub_Common_StickyButtonBottom_mvcModel.hasValidationWidgets);
            }

            return Model._hasValidationWidgetsValue;
        }
        setInputs(inputs) {
            if ("EventId" in inputs) {
                this.variables.eventIdIn = OS.DataConversion.ServerDataConverter.from(inputs.EventId, OS.DataTypes.DataTypes.LongInteger);
            }

        }

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("PartnersHub.Events.EventDetails.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "CloneAWSSignatureVersion4.model", "react", "@outsystems/runtime-view-js", "PartnersHub.Events.EventDetails.mvc$model", "PartnersHub.Events.EventDetails.mvc$controller", "PartnersHub.clientVariables", "PartnersHub.Layouts.LayoutContainer.mvc$view", "@outsystems/runtime-widgets-js", "OutSystemsUI.Adaptive.DisplayOnDevice.mvc$view", "PartnersHub.Common.Headers.mvc$view", "PartnersHub.Common.NewHeaderTitleBlock.mvc$view", "PartnersHub.Common.SkeletonLoader.mvc$view", "PartnersHub.Common.TitleBlock.mvc$view", "PartnersHub.Events.EventLocationDateTime.mvc$view", "PartnersHub.Events.SpeakersBlock.mvc$view", "CustomComponentsOfficial.ButtonVariants.PrimaryButton.mvc$view", "PartnersHub.Common.StickyButtonBottom.mvc$view", "CloneAWSSignatureVersion4.model$ST_49dc3bc2d063241aae5dd3879dfa11a4Structure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$CloneAWSSignatureVersion4", "PartnersHub.model$ST_9f1e67525baf02c5f10f80cc2f462aacStructure", "PartnersHub.model$ST_23ff1d290ec4691b1c668ad437100cd0Structure", "PartnersHub.controller$RudderstackTrackEvent", "PartnersHub.controller$RedirectToExternalNewTab", "CloneAWSSignatureVersion4.model$ST_2a7ac328ca1ac01bfb70fc00237a0973Structure", "CloneAWSSignatureVersion4.model$ST_5aac4e0eb05c7f4c7f14409f9c2e3d4dStructure", "PartnersHub.model$RC_b93f5c57f06e1ce1f61cc2fdbe0d7c52", "PartnersHub.model$RL_ece689df05adbd14fd8c52f51e2c24dc"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, CloneAWSSignatureVersion4Model, React, OSView, PartnersHub_Events_EventDetails_mvc_model, PartnersHub_Events_EventDetails_mvc_controller, PartnersHubClientVariables, PartnersHub_Layouts_LayoutContainer_mvc_view, OSWidgets, OutSystemsUI_Adaptive_DisplayOnDevice_mvc_view, PartnersHub_Common_Headers_mvc_view, PartnersHub_Common_NewHeaderTitleBlock_mvc_view, PartnersHub_Common_SkeletonLoader_mvc_view, PartnersHub_Common_TitleBlock_mvc_view, PartnersHub_Events_EventLocationDateTime_mvc_view, PartnersHub_Events_SpeakersBlock_mvc_view, CustomComponentsOfficial_ButtonVariants_PrimaryButton_mvc_view, PartnersHub_Common_StickyButtonBottom_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() {
            return "Events.EventDetails";
        }

        static getAttributes() {
            return {
                codeFunction: "EventDetails",
                functionKey: "9d53f2b6-a18b-4d87-8408-c0f4386f1572",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/PartnersHub.PHubTest.css", "css/PartnersHub.Events.EventDetails.css", "css/PartnersHub.PHubTest.extra.css"];
        }

        static getJsDependencies() {
            return ["scripts/PartnersHub.DerivAnalytics.js"];
        }

        static getBlocks() {
            return [PartnersHub_Layouts_LayoutContainer_mvc_view, OutSystemsUI_Adaptive_DisplayOnDevice_mvc_view, PartnersHub_Common_Headers_mvc_view, PartnersHub_Common_NewHeaderTitleBlock_mvc_view, PartnersHub_Common_SkeletonLoader_mvc_view, PartnersHub_Common_TitleBlock_mvc_view, PartnersHub_Events_EventLocationDateTime_mvc_view, PartnersHub_Events_SpeakersBlock_mvc_view, CustomComponentsOfficial_ButtonVariants_PrimaryButton_mvc_view, PartnersHub_Common_StickyButtonBottom_mvc_view];
        }

        get modelFactory() {
            return PartnersHub_Events_EventDetails_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_Events_EventDetails_mvc_controller;
        }

        get title() {


            return OSView.BaseView.BaseWebScreen.getTranslation("tvJTnYuhh02ECMD0OG8Vcg#Title", "EventDetails");
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(PartnersHub_Layouts_LayoutContainer_mvc_view, {
                getOwnerSpan: function() {
                    return _this.getChildSpan("render");
                },
                getOwnerDisposeSpan: function() {
                    return _this.getChildSpan("destroy");
                },
                inputs: {
                    StickyFooter: true
                },
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
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                placeholders: {
                    header: new PlaceholderContent(function() {
                        return [React.createElement(OutSystemsUI_Adaptive_DisplayOnDevice_mvc_view, {
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
                                uuid: "1",
                                alias: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                onDesktop: new PlaceholderContent(function() {
                                    return [React.createElement(PartnersHub_Common_Headers_mvc_view, {
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
                                            uuid: "2",
                                            alias: "3"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        _dependencies: []
                                    })];
                                }),
                                onTablet: new PlaceholderContent(function() {
                                    return [React.createElement(PartnersHub_Common_NewHeaderTitleBlock_mvc_view, {
                                        getOwnerSpan: function() {
                                            return _this.getChildSpan("render");
                                        },
                                        getOwnerDisposeSpan: function() {
                                            return _this.getChildSpan("destroy");
                                        },
                                        inputs: {
                                            Title: OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("tsmnET5cO0ivOl3ppmYOXA#Value.318568092.1", "Event details"),
                                            ShowPreviousButton: true
                                        },
                                        events: {
                                            _handleError: function(ex) {
                                                controller.handleError(ex);
                                            },
                                            onClickBackButton$Action: function() {
                                                var eventHandlerContext = callContext.clone();
                                                controller.titleBlockBackButtonAction$Action(controller.callContext(eventHandlerContext));

                                                ;
                                            },
                                            onClickCloseButton$Action: function() {
                                                var eventHandlerContext = callContext.clone();
                                                controller.titleBlockCloseButtonAction$Action(controller.callContext(eventHandlerContext));

                                                ;
                                            }
                                        },
                                        _validationProps: {
                                            validationService: validationService
                                        },
                                        _idProps: {
                                            service: idService,
                                            uuid: "3",
                                            alias: "4"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        _dependencies: []
                                    })];
                                }),
                                onPhone: new PlaceholderContent(function() {
                                    return [React.createElement(PartnersHub_Common_NewHeaderTitleBlock_mvc_view, {
                                        getOwnerSpan: function() {
                                            return _this.getChildSpan("render");
                                        },
                                        getOwnerDisposeSpan: function() {
                                            return _this.getChildSpan("destroy");
                                        },
                                        inputs: {
                                            Title: OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("a5wZqJsbVkGhbk8Mk1L12Q#Value.318568092.1", "Event details"),
                                            ShowPreviousButton: true
                                        },
                                        events: {
                                            _handleError: function(ex) {
                                                controller.handleError(ex);
                                            },
                                            onClickCloseButton$Action: function() {
                                                var eventHandlerContext = callContext.clone();
                                                controller.titleBlockCloseButtonAction$Action(controller.callContext(eventHandlerContext));

                                                ;
                                            },
                                            onClickBackButton$Action: function() {
                                                var eventHandlerContext = callContext.clone();
                                                controller.titleBlockBackButtonAction$Action(controller.callContext(eventHandlerContext));

                                                ;
                                            }
                                        },
                                        _validationProps: {
                                            validationService: validationService
                                        },
                                        _idProps: {
                                            service: idService,
                                            uuid: "4",
                                            alias: "5"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        _dependencies: []
                                    })];
                                })
                            },
                            _dependencies: []
                        })];
                    }),
                    content: new PlaceholderContent(function() {
                        return [React.createElement(PartnersHub_Common_SkeletonLoader_mvc_view, {
                            getOwnerSpan: function() {
                                return _this.getChildSpan("render");
                            },
                            getOwnerDisposeSpan: function() {
                                return _this.getChildSpan("destroy");
                            },
                            inputs: {
                                IsLoading: model.variables.isLoadingVar
                            },
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
                                alias: "6"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                content: new PlaceholderContent(function() {
                                    return [React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        style: "ph-event-details-container",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "6"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        style: "ph-event-details-header-block",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "7"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(PartnersHub_Common_TitleBlock_mvc_view, {
                                        getOwnerSpan: function() {
                                            return _this.getChildSpan("render");
                                        },
                                        getOwnerDisposeSpan: function() {
                                            return _this.getChildSpan("destroy");
                                        },
                                        inputs: {
                                            ShowPreviousButton: true,
                                            Title: OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("zKQaYwKo0Eqr6GV8gKuL+g#Value.318568092.1", "Event details")
                                        },
                                        events: {
                                            _handleError: function(ex) {
                                                controller.handleError(ex);
                                            },
                                            backButtonAction$Action: function() {
                                                var eventHandlerContext = callContext.clone();
                                                controller.titleBlockBackButtonAction$Action(controller.callContext(eventHandlerContext));

                                                ;
                                            },
                                            closeButtonAction$Action: function() {
                                                var eventHandlerContext = callContext.clone();
                                                controller.titleBlockCloseButtonAction$Action(controller.callContext(eventHandlerContext));

                                                ;
                                            }
                                        },
                                        _validationProps: {
                                            validationService: validationService
                                        },
                                        _idProps: {
                                            service: idService,
                                            uuid: "8",
                                            alias: "7"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        _dependencies: []
                                    })), $if(!(model.variables.getEventByIdAggr.listOut.isEmpty), false, this, function() {
                                        return [React.createElement(PartnersHub_Common_SkeletonLoader_mvc_view, {
                                            getOwnerSpan: function() {
                                                return _this.getChildSpan("render");
                                            },
                                            getOwnerDisposeSpan: function() {
                                                return _this.getChildSpan("destroy");
                                            },
                                            inputs: {
                                                IsLoading: model.variables.isLoadingImagesVar,
                                                SkeletonHeight: "162px"
                                            },
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
                                                uuid: "9",
                                                alias: "8"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider,
                                            placeholders: {
                                                content: new PlaceholderContent(function() {
                                                    return [React.createElement(OSWidgets.Image, {
                                                        gridProperties: {
                                                            classes: "OSFillParent"
                                                        },
                                                        imageContent: model.variables.eventImagesVar.desktopImageAttr,
                                                        style: "ph-event-details-banner",
                                                        type: /*Binary*/ 2,
                                                        _idProps: {
                                                            service: idService,
                                                            uuid: "10"
                                                        },
                                                        _widgetRecordProvider: widgetsRecordProvider
                                                    })];
                                                })
                                            },
                                            _dependencies: [asPrimitiveValue(model.variables.eventImagesVar.desktopImageAttr)]
                                        }), React.createElement(OSWidgets.Container, {
                                            align: /*Default*/ 0,
                                            animate: false,
                                            extendedProperties: {
                                                style: "gap: 36px;"
                                            },
                                            style: "display-flex",
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                uuid: "11"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, React.createElement(OSWidgets.Container, {
                                            align: /*Default*/ 0,
                                            animate: false,
                                            style: "gap-base display-flex flex-direction-column flex1",
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                uuid: "12"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, React.createElement(OSWidgets.Container, {
                                            align: /*Default*/ 0,
                                            animate: false,
                                            extendedProperties: {
                                                style: "display: flex; flex-direction: column; gap: 8px;"
                                            },
                                            style: "ph-event-details-content",
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                uuid: "13"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, React.createElement(OSWidgets.Expression, {
                                            style: "ph-section-title",
                                            value: model.getCachedValue(idService.getId("9D11JWuFykiyml3jEj1sRQ.Value"), function() {
                                                return ((model.variables.getEventByIdAggr.listOut.getCurrent(callContext.iterationContext).eventAttr.titleAttr + ", ") + (OS.BuiltinFunctions.year(OS.BuiltinFunctions.textToDateTime(model.variables.getEventByIdAggr.listOut.getCurrent(callContext.iterationContext).eventAttr.dateTimeAttr))).toString());
                                            }, function() {
                                                return model.variables.getEventByIdAggr.listOut.getCurrent(callContext.iterationContext).eventAttr.titleAttr;
                                            }, function() {
                                                return model.variables.getEventByIdAggr.listOut.getCurrent(callContext.iterationContext).eventAttr.dateTimeAttr;
                                            }),
                                            _idProps: {
                                                service: idService,
                                                uuid: "14"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider,
                                            value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getEventByIdAggr.dataFetchStatusAttr)
                                        }), React.createElement(OSWidgets.Container, {
                                            align: /*Default*/ 0,
                                            animate: false,
                                            style: "hide-on-desktop",
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                uuid: "15"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, React.createElement(PartnersHub_Events_EventLocationDateTime_mvc_view, {
                                            getOwnerSpan: function() {
                                                return _this.getChildSpan("render");
                                            },
                                            getOwnerDisposeSpan: function() {
                                                return _this.getChildSpan("destroy");
                                            },
                                            inputs: {
                                                Data: model.getCachedValue(idService.getId("ZnOFOrroeUCdlI7HzIcc0g.Data"), function() {
                                                    return function() {
                                                        var rec = new PartnersHubModel.ST_9f1e67525baf02c5f10f80cc2f462aacStructure();
                                                        rec.locationAttr = model.variables.getEventByIdAggr.listOut.getCurrent(callContext.iterationContext).countryAttr.nameAttr;
                                                        rec.dateTimeAttr = OS.BuiltinFunctions.textToDateTime(model.variables.getEventByIdAggr.listOut.getCurrent(callContext.iterationContext).eventAttr.dateTimeAttr);
                                                        rec.timeZoneAttr = model.variables.getEventByIdAggr.listOut.getCurrent(callContext.iterationContext).countryAttr.timeZoneAttr;
                                                        return rec;
                                                    }();
                                                }, function() {
                                                    return model.variables.getEventByIdAggr.listOut.getCurrent(callContext.iterationContext).countryAttr.nameAttr;
                                                }, function() {
                                                    return model.variables.getEventByIdAggr.listOut.getCurrent(callContext.iterationContext).eventAttr.dateTimeAttr;
                                                }, function() {
                                                    return model.variables.getEventByIdAggr.listOut.getCurrent(callContext.iterationContext).countryAttr.timeZoneAttr;
                                                }),
                                                _dataInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getEventByIdAggr.dataFetchStatusAttr)
                                            },
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
                                                uuid: "16",
                                                alias: "9"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider,
                                            _dependencies: []
                                        }))), React.createElement(OSWidgets.Container, {
                                            align: /*Default*/ 0,
                                            animate: false,
                                            extendedProperties: {
                                                style: "text-align: justify;"
                                            },
                                            style: "ck-content",
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                name: "EventDetails"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }), React.createElement(OSWidgets.Container, {
                                            align: /*Default*/ 0,
                                            animate: false,
                                            style: "hide-on-desktop",
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                uuid: "18"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, React.createElement(PartnersHub_Events_SpeakersBlock_mvc_view, {
                                            getOwnerSpan: function() {
                                                return _this.getChildSpan("render");
                                            },
                                            getOwnerDisposeSpan: function() {
                                                return _this.getChildSpan("destroy");
                                            },
                                            inputs: {
                                                EventId: model.variables.eventIdIn
                                            },
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
                                                uuid: "19",
                                                alias: "10"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider,
                                            _dependencies: []
                                        }))), React.createElement(OSWidgets.Container, {
                                            align: /*Default*/ 0,
                                            animate: false,
                                            style: "flex-direction-column gap-m hide-on-mobile",
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                uuid: "20"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, React.createElement(PartnersHub_Events_EventLocationDateTime_mvc_view, {
                                            getOwnerSpan: function() {
                                                return _this.getChildSpan("render");
                                            },
                                            getOwnerDisposeSpan: function() {
                                                return _this.getChildSpan("destroy");
                                            },
                                            inputs: {
                                                Data: model.getCachedValue(idService.getId("klv4D34BiUyXCJ7nF46lHw.Data"), function() {
                                                    return function() {
                                                        var rec = new PartnersHubModel.ST_9f1e67525baf02c5f10f80cc2f462aacStructure();
                                                        rec.locationAttr = model.variables.getEventByIdAggr.listOut.getCurrent(callContext.iterationContext).countryAttr.nameAttr;
                                                        rec.dateTimeAttr = OS.BuiltinFunctions.textToDateTime(model.variables.getEventByIdAggr.listOut.getCurrent(callContext.iterationContext).eventAttr.dateTimeAttr);
                                                        rec.timeZoneAttr = model.variables.getEventByIdAggr.listOut.getCurrent(callContext.iterationContext).countryAttr.timeZoneAttr;
                                                        return rec;
                                                    }();
                                                }, function() {
                                                    return model.variables.getEventByIdAggr.listOut.getCurrent(callContext.iterationContext).countryAttr.nameAttr;
                                                }, function() {
                                                    return model.variables.getEventByIdAggr.listOut.getCurrent(callContext.iterationContext).eventAttr.dateTimeAttr;
                                                }, function() {
                                                    return model.variables.getEventByIdAggr.listOut.getCurrent(callContext.iterationContext).countryAttr.timeZoneAttr;
                                                }),
                                                _dataInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getEventByIdAggr.dataFetchStatusAttr)
                                            },
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
                                                uuid: "21",
                                                alias: "11"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider,
                                            _dependencies: []
                                        }), React.createElement(CustomComponentsOfficial_ButtonVariants_PrimaryButton_mvc_view, {
                                            getOwnerSpan: function() {
                                                return _this.getChildSpan("render");
                                            },
                                            getOwnerDisposeSpan: function() {
                                                return _this.getChildSpan("destroy");
                                            },
                                            inputs: {
                                                title: OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("vRm_Xrocm0qshos2KUA2WA#Value.233912628.1", "Join us"),
                                                height: "40px",
                                                borderRadius: "100px",
                                                Width: "100%"
                                            },
                                            events: {
                                                _handleError: function(ex) {
                                                    controller.handleError(ex);
                                                },
                                                onClick$Action: function() {
                                                    var eventHandlerContext = callContext.clone();
                                                    controller.stickyButtonBottomOnClick$Action(controller.callContext(eventHandlerContext));

                                                    ;
                                                }
                                            },
                                            _validationProps: {
                                                validationService: validationService
                                            },
                                            _idProps: {
                                                service: idService,
                                                uuid: "22",
                                                alias: "12"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider,
                                            _dependencies: []
                                        }), React.createElement(PartnersHub_Events_SpeakersBlock_mvc_view, {
                                            getOwnerSpan: function() {
                                                return _this.getChildSpan("render");
                                            },
                                            getOwnerDisposeSpan: function() {
                                                return _this.getChildSpan("destroy");
                                            },
                                            inputs: {
                                                EventId: model.variables.eventIdIn
                                            },
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
                                                uuid: "23",
                                                alias: "13"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider,
                                            _dependencies: []
                                        })))];
                                    }, function() {
                                        return [React.createElement(OSWidgets.Container, {
                                            align: /*Default*/ 0,
                                            animate: false,
                                            extendedProperties: {
                                                style: "text-align: center;"
                                            },
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                uuid: "24"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, React.createElement(OSWidgets.Text, {
                                            style: "ph-text",
                                            text: ["Event not available"],
                                            _idProps: {
                                                service: idService,
                                                uuid: "25"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }))];
                                    }))];
                                })
                            },
                            _dependencies: [asPrimitiveValue(model.variables.eventIdIn), asPrimitiveValue(model.variables.eventImagesVar.desktopImageAttr), asPrimitiveValue(model.variables.isLoadingImagesVar), asPrimitiveValue(model.variables.getEventByIdAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getEventByIdAggr.listOut.getCurrent(callContext.iterationContext).countryAttr.timeZoneAttr), asPrimitiveValue(model.variables.getEventByIdAggr.listOut.getCurrent(callContext.iterationContext).countryAttr.nameAttr), asPrimitiveValue(model.variables.getEventByIdAggr.listOut.getCurrent(callContext.iterationContext).eventAttr.dateTimeAttr), asPrimitiveValue(model.variables.getEventByIdAggr.listOut.getCurrent(callContext.iterationContext).eventAttr.titleAttr), asPrimitiveValue(model.variables.getEventByIdAggr.listOut.isEmpty)]
                        })];
                    }),
                    footer: new PlaceholderContent(function() {
                        return [React.createElement(PartnersHub_Common_StickyButtonBottom_mvc_view, {
                            getOwnerSpan: function() {
                                return _this.getChildSpan("render");
                            },
                            getOwnerDisposeSpan: function() {
                                return _this.getChildSpan("destroy");
                            },
                            inputs: {
                                Label: OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("VWslWT2HPESKigtC1HF7bA#Value.233912628.1", "Join us")
                            },
                            events: {
                                _handleError: function(ex) {
                                    controller.handleError(ex);
                                },
                                onClick$Action: function() {
                                    var eventHandlerContext = callContext.clone();
                                    controller.stickyButtonBottomOnClick$Action(controller.callContext(eventHandlerContext));

                                    ;
                                }
                            },
                            _validationProps: {
                                validationService: validationService
                            },
                            _idProps: {
                                service: idService,
                                uuid: "26",
                                alias: "14"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.eventIdIn), asPrimitiveValue(model.variables.eventImagesVar.desktopImageAttr), asPrimitiveValue(model.variables.isLoadingImagesVar), asPrimitiveValue(model.variables.getEventByIdAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getEventByIdAggr.listOut.getCurrent(callContext.iterationContext).countryAttr.timeZoneAttr), asPrimitiveValue(model.variables.getEventByIdAggr.listOut.getCurrent(callContext.iterationContext).countryAttr.nameAttr), asPrimitiveValue(model.variables.getEventByIdAggr.listOut.getCurrent(callContext.iterationContext).eventAttr.dateTimeAttr), asPrimitiveValue(model.variables.getEventByIdAggr.listOut.getCurrent(callContext.iterationContext).eventAttr.titleAttr), asPrimitiveValue(model.variables.getEventByIdAggr.listOut.isEmpty), asPrimitiveValue(model.variables.isLoadingVar)]
            }));
        }
    }

    return View;
});
define("PartnersHub.Events.EventDetails.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "CloneAWSSignatureVersion4.model", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.Events.EventDetails.mvc$translationsResources", "PartnersHub.Events.controller", "PartnersHub.Events.EventDetails.mvc$controller.SetHTMLContent.JavaScript1JS", "CloneAWSSignatureVersion4.model$ST_49dc3bc2d063241aae5dd3879dfa11a4Structure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$CloneAWSSignatureVersion4", "PartnersHub.model$ST_9f1e67525baf02c5f10f80cc2f462aacStructure", "PartnersHub.model$ST_23ff1d290ec4691b1c668ad437100cd0Structure", "PartnersHub.controller$RudderstackTrackEvent", "PartnersHub.controller$RedirectToExternalNewTab", "CloneAWSSignatureVersion4.model$ST_2a7ac328ca1ac01bfb70fc00237a0973Structure", "CloneAWSSignatureVersion4.model$ST_5aac4e0eb05c7f4c7f14409f9c2e3d4dStructure", "PartnersHub.model$RC_b93f5c57f06e1ce1f61cc2fdbe0d7c52", "PartnersHub.model$RL_ece689df05adbd14fd8c52f51e2c24dc"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, CloneAWSSignatureVersion4Model, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_Events_EventDetails_mvc_TranslationsResources, PartnersHub_EventsController, PartnersHub_Events_EventDetails_mvc_controller_SetHTMLContent_JavaScript1JS) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, PartnersHub_Events_EventDetails_mvc_TranslationsResources);
                var controller = this.controller;
                this.clientActionProxies = {};
                this.dataFetchDependenciesOriginal = {
                    getEventById$AggrRefresh: 0
                };
                this.dataFetchDependentsGraph = {
                    getEventById$AggrRefresh: []
                };
                this.shouldSendClientVarsToDataSources = true;
            }

            // Server Actions - Methods
            get getImage$ServerAction() {
                if (!(this.hasOwnProperty("_getImage$ServerAction"))) {
                    this._getImage$ServerAction = function(bucketObjectIn, callContext) {
                        var controller = this.controller;
                        return OS.Logger.startActiveSpan("GetImage", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "GetImage");
                                span.setAttribute("outsystems.function.key", "e685222a-663e-4f5c-820d-16fd548ee409");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL");
                            }

                            return OS.Flow.tryFinally(function() {
                                var inputs = {
                                    BucketObject: OS.DataConversion.ServerDataConverter.to(bucketObjectIn, OS.DataTypes.DataTypes.Record)
                                };
                                return controller.callServerAction("GetImage", "screenservices/PartnersHub/Events/EventDetails/ActionGetImage", "ULoHOeBreyU_Ww8a99xVaw", inputs, controller.callContext(callContext), undefined, undefined, true).then(function(outputs) {
                                    var executeServerActionResult = new(controller.constructor.getVariableGroupType("PartnersHub.Events.EventDetails$ActionGetImage"))();
                                    executeServerActionResult.eventImagesOut = OS.DataConversion.ServerDataConverter.from(outputs.EventImages, CloneAWSSignatureVersion4Model.ST_49dc3bc2d063241aae5dd3879dfa11a4Structure);
                                    return executeServerActionResult;
                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 0);
                    };
                }

                return this._getImage$ServerAction;
            }
            set getImage$ServerAction(value) {
                this._getImage$ServerAction = value;
            }


            // Aggregates and Data Actions
            get getEventById$AggrRefresh() {
                if (!(this.hasOwnProperty("_getEventById$AggrRefresh"))) {
                    this._getEventById$AggrRefresh = function() {
                        var innerBody = function(maxRecords, startIndex, callContext) {
                            var model = this.model;
                            var controller = this.controller;
                            var callContext = controller.callContext(callContext);
                            return controller.callAggregateWithStartIndexAndClientVars("ScreenDataSetGetEventById", "screenservices/PartnersHub/Events/EventDetails/ScreenDataSetGetEventById", "EcDNIiZm_pro1LzRTLtGAQ", maxRecords, startIndex, function(b) {
                                model.variables.getEventByIdAggr.dataFetchStatusAttr = b;
                            }, function(json) {
                                model.variables.getEventByIdAggr.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getEventByIdAggr.constructor));
                            }, undefined, undefined, undefined, callContext, PartnersHubClientVariables, true).then(function() {
                                return controller._getEventByIdOnAfterFetch$Action(controller.callContext(callContext));
                            });
                        }.bind(this);
                        return OS.Logger.startActiveSpan("GetEventById", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "GetEventById");
                                span.setAttribute("outsystems.function.key", "e4875d26-1c15-438b-b1d7-a0fdfbed31f2");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_AGGREGATE_CALL");
                            }

                            return OS.Flow.tryFinally(function() {
                                return innerBody();
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 0);

                    };
                }

                return this._getEventById$AggrRefresh;
            }
            set getEventById$AggrRefresh(value) {
                this._getEventById$AggrRefresh = value;
            }


            get dataFetchActionNames() {
                if (!(this.hasOwnProperty("_dataFetchActionNames"))) {
                    this._dataFetchActionNames = ["getEventById$AggrRefresh"];
                }

                return this._dataFetchActionNames;
            }
            set dataFetchActionNames(value) {
                this._dataFetchActionNames = value;
            }

            // Client Actions - Methods
            get _titleBlockBackButtonAction$Action() {
                if (!(this.hasOwnProperty("__titleBlockBackButtonAction$Action"))) {
                    this.__titleBlockBackButtonAction$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("TitleBlockBackButtonAction", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "TitleBlockBackButtonAction");
                                span.setAttribute("outsystems.function.key", "0b21883c-7711-4539-9699-775d70489d61");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("TitleBlockBackButtonAction");
                                callContext = controller.callContext(callContext);
                                // Execute Action: RudderstackTrackEvent
                                PartnersHubController.default.rudderstackTrackEvent$Action(function() {
                                    var rec = new PartnersHubModel.ST_23ff1d290ec4691b1c668ad437100cd0Structure();
                                    rec.actionAttr = "click_cta";
                                    rec.cta_nameAttr = "back icon";
                                    rec.cta_placementAttr = "Event details back button";
                                    return rec;
                                }(), "ce_partnershub_form", callContext);
                                // Destination: (PreviousScreen)
                                return OS.Navigation.navigateBack(OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.None), callContext, true);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__titleBlockBackButtonAction$Action;
            }
            set _titleBlockBackButtonAction$Action(value) {
                this.__titleBlockBackButtonAction$Action = value;
            }

            get _stickyButtonBottomOnClick$Action() {
                if (!(this.hasOwnProperty("__stickyButtonBottomOnClick$Action"))) {
                    this.__stickyButtonBottomOnClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("StickyButtonBottomOnClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "StickyButtonBottomOnClick");
                                span.setAttribute("outsystems.function.key", "1123b390-0bd1-4578-a3cf-d69150292589");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("StickyButtonBottomOnClick");
                                callContext = controller.callContext(callContext);
                                // Execute Action: RudderstackTrackEvent
                                PartnersHubController.default.rudderstackTrackEvent$Action(function() {
                                    var rec = new PartnersHubModel.ST_23ff1d290ec4691b1c668ad437100cd0Structure();
                                    rec.actionAttr = "click_cta";
                                    rec.cta_nameAttr = OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("QmP2ciXdCEqEy+z0yoHrgw#Value.233912628.1", "Join us");
                                    rec.cta_placementAttr = OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("M6keuTViDkCGVYz7fgSPgw#Value.-480393540.1", "event details");
                                    return rec;
                                }(), "ce_partnershub_form", callContext);
                                // Execute Action: RedirectToExternalNewTab
                                PartnersHubController.default.redirectToExternalNewTab$Action(model.variables.getEventByIdAggr.listOut.getCurrent(callContext.iterationContext).eventAttr.urlAttr, callContext);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__stickyButtonBottomOnClick$Action;
            }
            set _stickyButtonBottomOnClick$Action(value) {
                this.__stickyButtonBottomOnClick$Action = value;
            }

            get _setHTMLContent$Action() {
                if (!(this.hasOwnProperty("__setHTMLContent$Action"))) {
                    this.__setHTMLContent$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("SetHTMLContent", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "SetHTMLContent");
                                span.setAttribute("outsystems.function.key", "33e25a02-158d-47f4-8da8-792abf736dc5");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("SetHTMLContent");
                                callContext = controller.callContext(callContext);
                                OS.Logger.startActiveSpan("JavaScript1", function(span) {
                                    if (span) {
                                        span.setAttribute("code.function", "JavaScript1");
                                        span.setAttribute("outsystems.function.key", "7ffb8e1f-bab2-45d6-96a0-51476e81567b");
                                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                    }

                                    try {
                                        return controller.safeExecuteJSNode(PartnersHub_Events_EventDetails_mvc_controller_SetHTMLContent_JavaScript1JS, "JavaScript1", "SetHTMLContent", {
                                            Value: OS.DataConversion.JSNodeParamConverter.to(model.variables.getEventByIdAggr.listOut.getCurrent(callContext.iterationContext).eventAttr.descriptionAttr, OS.DataTypes.DataTypes.Text),
                                            ContainerId: OS.DataConversion.JSNodeParamConverter.to(idService.getId("EventDetails"), OS.DataTypes.DataTypes.Text)
                                        }, function($parameters) {}, {}, {});
                                    } finally {
                                        if (span) {
                                            span.end();
                                        }

                                    }

                                }, 1);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__setHTMLContent$Action;
            }
            set _setHTMLContent$Action(value) {
                this.__setHTMLContent$Action = value;
            }

            get _titleBlockCloseButtonAction$Action() {
                if (!(this.hasOwnProperty("__titleBlockCloseButtonAction$Action"))) {
                    this.__titleBlockCloseButtonAction$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("TitleBlockCloseButtonAction", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "TitleBlockCloseButtonAction");
                                span.setAttribute("outsystems.function.key", "6b89c428-73b6-4128-81de-fb75ae7996df");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("TitleBlockCloseButtonAction");
                                callContext = controller.callContext(callContext);
                                // Execute Action: RudderstackTrackEvent
                                PartnersHubController.default.rudderstackTrackEvent$Action(function() {
                                    var rec = new PartnersHubModel.ST_23ff1d290ec4691b1c668ad437100cd0Structure();
                                    rec.actionAttr = "click_cta";
                                    rec.cta_nameAttr = "close icon";
                                    rec.cta_placementAttr = "Event details close button";
                                    return rec;
                                }(), "ce_partnershub_form", callContext);
                                // Destination: /PartnersHub/PartnersHubDashboard
                                return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("PartnersHub", "PartnersHubDashboard", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.None), callContext, true);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__titleBlockCloseButtonAction$Action;
            }
            set _titleBlockCloseButtonAction$Action(value) {
                this.__titleBlockCloseButtonAction$Action = value;
            }

            get _onRender$Action() {
                if (!(this.hasOwnProperty("__onRender$Action"))) {
                    this.__onRender$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnRender", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnRender");
                                span.setAttribute("outsystems.function.key", "96f47c92-7950-4f4b-b610-9301579d99f9");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnRender");
                                callContext = controller.callContext(callContext);
                                // Execute Action: SetHTMLContent
                                controller._setHTMLContent$Action(callContext);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__onRender$Action;
            }
            set _onRender$Action(value) {
                this.__onRender$Action = value;
            }

            get _getEventByIdOnAfterFetch$Action() {
                if (!(this.hasOwnProperty("__getEventByIdOnAfterFetch$Action"))) {
                    this.__getEventByIdOnAfterFetch$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("GetEventByIdOnAfterFetch", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "GetEventByIdOnAfterFetch");
                                span.setAttribute("outsystems.function.key", "b15ef23d-ef3e-42b3-bfa9-2c49da6ebfd1");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("GetEventByIdOnAfterFetch");
                                callContext = controller.callContext(callContext);
                                var getImageVar = new OS.DataTypes.VariableHolder();
                                return OS.Flow.executeAsyncFlow(function() {
                                    // Execute Action: SetHTMLContent
                                    controller._setHTMLContent$Action(callContext);
                                    // IsLoading = False
                                    model.variables.isLoadingVar = false;
                                    // Execute Action: GetImage
                                    model.flush();
                                    return controller.getImage$ServerAction(function() {
                                        var rec = new CloneAWSSignatureVersion4Model.ST_2a7ac328ca1ac01bfb70fc00237a0973Structure();
                                        rec.idAttr = model.variables.getEventByIdAggr.listOut.getCurrent(callContext.iterationContext).eventAttr.idAttr;
                                        rec.fileNamesAttr = function() {
                                            var rec = new CloneAWSSignatureVersion4Model.ST_5aac4e0eb05c7f4c7f14409f9c2e3d4dStructure();
                                            rec.desktopImageNameAttr = model.variables.getEventByIdAggr.listOut.getCurrent(callContext.iterationContext).eventAttr.desktopImageAttr;
                                            rec.mobileImageNameAttr = model.variables.getEventByIdAggr.listOut.getCurrent(callContext.iterationContext).eventAttr.mobileImageAttr;
                                            return rec;
                                        }();
                                        return rec;
                                    }(), callContext).then(function(value) {
                                        getImageVar.value = value;
                                    }).then(function() {
                                        // EventImages = GetImage.EventImages
                                        model.variables.eventImagesVar = getImageVar.value.eventImagesOut;
                                        // IsLoadingImages = False
                                        model.variables.isLoadingImagesVar = false;
                                    });
                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 1);
                    };
                }

                return this.__getEventByIdOnAfterFetch$Action;
            }
            set _getEventByIdOnAfterFetch$Action(value) {
                this.__getEventByIdOnAfterFetch$Action = value;
            }


            titleBlockBackButtonAction$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("TitleBlockBackButtonAction__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "TitleBlockBackButtonAction");
                        span.setAttribute("outsystems.function.key", "0b21883c-7711-4539-9699-775d70489d61");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._titleBlockBackButtonAction$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            stickyButtonBottomOnClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("StickyButtonBottomOnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "StickyButtonBottomOnClick");
                        span.setAttribute("outsystems.function.key", "1123b390-0bd1-4578-a3cf-d69150292589");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._stickyButtonBottomOnClick$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            setHTMLContent$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("SetHTMLContent__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "SetHTMLContent");
                        span.setAttribute("outsystems.function.key", "33e25a02-158d-47f4-8da8-792abf736dc5");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._setHTMLContent$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            titleBlockCloseButtonAction$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("TitleBlockCloseButtonAction__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "TitleBlockCloseButtonAction");
                        span.setAttribute("outsystems.function.key", "6b89c428-73b6-4128-81de-fb75ae7996df");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._titleBlockCloseButtonAction$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            onRender$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnRender__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnRender");
                        span.setAttribute("outsystems.function.key", "96f47c92-7950-4f4b-b610-9301579d99f9");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._onRender$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            getEventByIdOnAfterFetch$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("GetEventByIdOnAfterFetch__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "GetEventByIdOnAfterFetch");
                        span.setAttribute("outsystems.function.key", "b15ef23d-ef3e-42b3-bfa9-2c49da6ebfd1");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._getEventByIdOnAfterFetch$Action, callContext);
                    }, function() {
                        if (span) {
                            span.end();
                        }

                    });
                }, 0);

            }


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
                    this._onRenderEventHandler = function(callContext) {
                        var controller = this.controller;
                        var model = this.model;
                        var idService = this.idService;

                        return controller.onRender$Action(callContext);

                    };
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
                        return PartnersHub_EventsController.default.handleError(ex, this.callContext());
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
        Controller.registerVariableGroupType("PartnersHub.Events.EventDetails$ActionGetImage", [{
            name: "EventImages",
            attrName: "eventImagesOut",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Record,
            defaultValue: function() {
                return new CloneAWSSignatureVersion4Model.ST_49dc3bc2d063241aae5dd3879dfa11a4Structure();
            },
            complexType: CloneAWSSignatureVersion4Model.ST_49dc3bc2d063241aae5dd3879dfa11a4Structure
        }]);

        // Client Actions - Variables

    }
    return new OS.Controller.ControllerFactory(Controller, PartnersHubLanguageResources);
});

define("PartnersHub.Events.EventDetails.mvc$controller.SetHTMLContent.JavaScript1JS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        if ($parameters.Value !== null) {
            const element = document.getElementById($parameters.ContainerId);

            if (element) {
                element.innerHTML = $parameters.Value;
            }
        }
    };
});


define("PartnersHub.Events.EventDetails.mvc$translationsResources.ar-001", [], function() {
    return {
        "VWslWT2HPESKigtC1HF7bA#Value.233912628.1": "انضم إلينا",
        "vRm_Xrocm0qshos2KUA2WA#Value.233912628.1": "انضم إلينا",
        "zKQaYwKo0Eqr6GV8gKuL+g#Value.318568092.1": "تفاصيل الحدث",
        "a5wZqJsbVkGhbk8Mk1L12Q#Value.318568092.1": "تفاصيل الحدث",
        "tsmnET5cO0ivOl3ppmYOXA#Value.318568092.1": "تفاصيل الحدث",
        "M6keuTViDkCGVYz7fgSPgw#Value.-480393540.1": "تفاصيل الحدث",
        "QmP2ciXdCEqEy+z0yoHrgw#Value.233912628.1": "انضم إلينا"
    };
});

define("PartnersHub.Events.EventDetails.mvc$translationsResources.de-DE", [], function() {
    return {
        "VWslWT2HPESKigtC1HF7bA#Value.233912628.1": "Mach mit",
        "vRm_Xrocm0qshos2KUA2WA#Value.233912628.1": "Mach mit",
        "zKQaYwKo0Eqr6GV8gKuL+g#Value.318568092.1": "Veranstaltungsdetails",
        "a5wZqJsbVkGhbk8Mk1L12Q#Value.318568092.1": "Veranstaltungsdetails",
        "tsmnET5cO0ivOl3ppmYOXA#Value.318568092.1": "Veranstaltungsdetails",
        "M6keuTViDkCGVYz7fgSPgw#Value.-480393540.1": "Veranstaltungsdetails",
        "QmP2ciXdCEqEy+z0yoHrgw#Value.233912628.1": "Mach mit"
    };
});

define("PartnersHub.Events.EventDetails.mvc$translationsResources.es-ES", [], function() {
    return {
        "VWslWT2HPESKigtC1HF7bA#Value.233912628.1": "Únete a nosotros",
        "vRm_Xrocm0qshos2KUA2WA#Value.233912628.1": "Únete a nosotros",
        "zKQaYwKo0Eqr6GV8gKuL+g#Value.318568092.1": "Detalles del evento",
        "a5wZqJsbVkGhbk8Mk1L12Q#Value.318568092.1": "Detalles del evento",
        "tsmnET5cO0ivOl3ppmYOXA#Value.318568092.1": "Detalles del evento",
        "M6keuTViDkCGVYz7fgSPgw#Value.-480393540.1": "Detalles del evento",
        "QmP2ciXdCEqEy+z0yoHrgw#Value.233912628.1": "Únete a nosotros"
    };
});

define("PartnersHub.Events.EventDetails.mvc$translationsResources.fr-FR", [], function() {
    return {
        "VWslWT2HPESKigtC1HF7bA#Value.233912628.1": "Rejoignez-nous",
        "vRm_Xrocm0qshos2KUA2WA#Value.233912628.1": "Rejoignez-nous",
        "zKQaYwKo0Eqr6GV8gKuL+g#Value.318568092.1": "Détails de l\'événement",
        "a5wZqJsbVkGhbk8Mk1L12Q#Value.318568092.1": "Détails de l\'événement",
        "tsmnET5cO0ivOl3ppmYOXA#Value.318568092.1": "Détails de l\'événement",
        "M6keuTViDkCGVYz7fgSPgw#Value.-480393540.1": "Détails de l\'événement",
        "QmP2ciXdCEqEy+z0yoHrgw#Value.233912628.1": "Rejoignez-nous"
    };
});

define("PartnersHub.Events.EventDetails.mvc$translationsResources.it-IT", [], function() {
    return {
        "VWslWT2HPESKigtC1HF7bA#Value.233912628.1": "Unisciti a noi",
        "vRm_Xrocm0qshos2KUA2WA#Value.233912628.1": "Unisciti a noi",
        "zKQaYwKo0Eqr6GV8gKuL+g#Value.318568092.1": "Dettagli dell\'evento",
        "a5wZqJsbVkGhbk8Mk1L12Q#Value.318568092.1": "Dettagli dell\'evento",
        "tsmnET5cO0ivOl3ppmYOXA#Value.318568092.1": "Dettagli dell\'evento",
        "M6keuTViDkCGVYz7fgSPgw#Value.-480393540.1": "Dettagli dell\'evento",
        "QmP2ciXdCEqEy+z0yoHrgw#Value.233912628.1": "Unisciti a noi"
    };
});

define("PartnersHub.Events.EventDetails.mvc$translationsResources.pl-PL", [], function() {
    return {
        "VWslWT2HPESKigtC1HF7bA#Value.233912628.1": "Dołącz do nas",
        "vRm_Xrocm0qshos2KUA2WA#Value.233912628.1": "Dołącz do nas",
        "zKQaYwKo0Eqr6GV8gKuL+g#Value.318568092.1": "Szczegóły wydarzenia",
        "a5wZqJsbVkGhbk8Mk1L12Q#Value.318568092.1": "Szczegóły wydarzenia",
        "tsmnET5cO0ivOl3ppmYOXA#Value.318568092.1": "Szczegóły wydarzenia",
        "M6keuTViDkCGVYz7fgSPgw#Value.-480393540.1": "Szczegóły wydarzenia",
        "QmP2ciXdCEqEy+z0yoHrgw#Value.233912628.1": "Dołącz do nas"
    };
});

define("PartnersHub.Events.EventDetails.mvc$translationsResources.pt-PT", [], function() {
    return {
        "VWslWT2HPESKigtC1HF7bA#Value.233912628.1": "Junte-se a nós",
        "vRm_Xrocm0qshos2KUA2WA#Value.233912628.1": "Junte-se a nós",
        "zKQaYwKo0Eqr6GV8gKuL+g#Value.318568092.1": "Detalhes do evento",
        "a5wZqJsbVkGhbk8Mk1L12Q#Value.318568092.1": "Detalhes do evento",
        "tsmnET5cO0ivOl3ppmYOXA#Value.318568092.1": "Detalhes do evento",
        "M6keuTViDkCGVYz7fgSPgw#Value.-480393540.1": "Detalhes do evento",
        "QmP2ciXdCEqEy+z0yoHrgw#Value.233912628.1": "Junte-se a nós"
    };
});

define("PartnersHub.Events.EventDetails.mvc$translationsResources.ru-RU", [], function() {
    return {
        "VWslWT2HPESKigtC1HF7bA#Value.233912628.1": "Присоединяйтесь к нам",
        "vRm_Xrocm0qshos2KUA2WA#Value.233912628.1": "Присоединяйтесь к нам",
        "zKQaYwKo0Eqr6GV8gKuL+g#Value.318568092.1": "Подробности мероприятия",
        "a5wZqJsbVkGhbk8Mk1L12Q#Value.318568092.1": "Подробности мероприятия",
        "tsmnET5cO0ivOl3ppmYOXA#Value.318568092.1": "Подробности мероприятия",
        "M6keuTViDkCGVYz7fgSPgw#Value.-480393540.1": "Подробности мероприятия",
        "QmP2ciXdCEqEy+z0yoHrgw#Value.233912628.1": "Присоединяйтесь к нам"
    };
});

define("PartnersHub.Events.EventDetails.mvc$translationsResources", ["exports", "PartnersHub.Events.EventDetails.mvc$translationsResources.ar-001", "PartnersHub.Events.EventDetails.mvc$translationsResources.de-DE", "PartnersHub.Events.EventDetails.mvc$translationsResources.es-ES", "PartnersHub.Events.EventDetails.mvc$translationsResources.fr-FR", "PartnersHub.Events.EventDetails.mvc$translationsResources.it-IT", "PartnersHub.Events.EventDetails.mvc$translationsResources.pl-PL", "PartnersHub.Events.EventDetails.mvc$translationsResources.pt-PT", "PartnersHub.Events.EventDetails.mvc$translationsResources.ru-RU"], function(exports, PartnersHub_Events_EventDetails_mvc_translationsResources_ar001, PartnersHub_Events_EventDetails_mvc_translationsResources_deDE, PartnersHub_Events_EventDetails_mvc_translationsResources_esES, PartnersHub_Events_EventDetails_mvc_translationsResources_frFR, PartnersHub_Events_EventDetails_mvc_translationsResources_itIT, PartnersHub_Events_EventDetails_mvc_translationsResources_plPL, PartnersHub_Events_EventDetails_mvc_translationsResources_ptPT, PartnersHub_Events_EventDetails_mvc_translationsResources_ruRU) {
    return {
        "ar-001": {
            "translations": PartnersHub_Events_EventDetails_mvc_translationsResources_ar001,
            "isRTL": true
        },
        "de-DE": {
            "translations": PartnersHub_Events_EventDetails_mvc_translationsResources_deDE,
            "isRTL": false
        },
        "es-ES": {
            "translations": PartnersHub_Events_EventDetails_mvc_translationsResources_esES,
            "isRTL": false
        },
        "fr-FR": {
            "translations": PartnersHub_Events_EventDetails_mvc_translationsResources_frFR,
            "isRTL": false
        },
        "it-IT": {
            "translations": PartnersHub_Events_EventDetails_mvc_translationsResources_itIT,
            "isRTL": false
        },
        "pl-PL": {
            "translations": PartnersHub_Events_EventDetails_mvc_translationsResources_plPL,
            "isRTL": false
        },
        "pt-PT": {
            "translations": PartnersHub_Events_EventDetails_mvc_translationsResources_ptPT,
            "isRTL": false
        },
        "ru-RU": {
            "translations": PartnersHub_Events_EventDetails_mvc_translationsResources_ruRU,
            "isRTL": false
        }
    };
});