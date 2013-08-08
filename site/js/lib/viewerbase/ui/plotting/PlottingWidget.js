//>>built
require({cache:{"url:esriviewer/ui/plotting/theme/PlottingWidgetTheme.css":".plottingWindowContent{padding-top:0 !important;}.plotPointsActionContainer{margin-top:10px;text-align:right;margin-right:5px;border-top:1px solid #DFDFDF;padding-top:5px;}.plottingTabContainer{margin-bottom:10px !important;}.plottingHeader{margin-bottom:10px;}.plotPointZoomLevelContainer{float:left;margin-top:5px;}.searchByBoundsHeaderLbl, .pointBufferHeaderLbl{text-align:left;margin:5px 0 3px 10px;font-size:10pt;}.searchByBoundsInputLbl{font-size:9pt;margin-left:7px;margin-right:2px;}.searchByBoundsInputDMSLbl{font-size:9pt;}.searchByBoundsActionContainer{float:right;margin-right:5%;margin-top:10px;}.searchByBoundsDescriptionLbl{font-size:9pt;text-align:left;margin-left:10%;}.searchByUTMEntry{margin:5px 0 5px 20%;text-align:left;}.searchByBoundsInputUTMLbl{float:left;width:80px;font-size:9pt;}.searchByBoundsRadioLbl{vertical-align:middle;}.searchByBoundsContentsContainer{margin-top:10px;}.searchByPointUnitsSelect{margin:10px 0;}.searchByPointDistanceContainer{margin-top:10px;}","url:esriviewer/ui/plotting/template/PlottingWidgetTemplate.html":"<div>\r\n    <div class=\"defaultTabContainer plottingTabContainer\" data-dojo-attach-point=\"layersTabContainer\">\r\n        <span data-bind=\"click:showPlotDD, css: {selectedTab: plotDDVisible}\">DD</span>\r\n        <span data-bind=\"click:showPlotDMS, css: {selectedTab: plotDMSVisible}\">DMS</span>\r\n        <span data-bind=\"click:showPlotUTM, css: {selectedTab: plotUTMVisible}\">UTM</span>\r\n        <span data-bind=\"click:showPlotMGRS, css: {selectedTab: plotMGRSVisible}\">MGRS</span>\r\n    </div>\r\n    <div data-bind=\"visible:plotDDVisible\" data-dojo-attach-point=\"plotDDContainer\">\r\n    </div>\r\n    <div data-bind=\"visible:plotDMSVisible\" data-dojo-attach-point=\"plotDMSContainer\">\r\n    </div>\r\n    <div data-bind=\"visible:plotUTMVisible\" data-dojo-attach-point=\"plotUTMContainer\">\r\n    </div>\r\n    <div data-bind=\"visible:plotMGRSVisible\" data-dojo-attach-point=\"plotMGRSContainer\">\r\n    </div>\r\n\r\n    <div class=\" plotPointsActionContainer\">\r\n        <span class=\"plotPointZoomLevelContainer\">\r\n                <span class=\"plotPointZoomLevelLabel\">Zoom Level:</span>\r\n                <select data-bind=\"options: zoomLevels ,value:selectedZoomLevel\"></select>\r\n            </span>\r\n        <span data-dojo-type=\"dijit/form/Button\" data-dojo-attach-point=\"clearButtonButton\"\r\n              data-dojo-attach-event=\"onClick:clearGraphic\">Clear</span>\r\n        <span data-dojo-type=\"dijit/form/Button\" data-dojo-attach-point=\"plottingButton\"\r\n              data-dojo-attach-event=\"onClick:plotPoint\">Plot</span>\r\n\r\n    </div>\r\n</div>"}});define("esriviewer/ui/plotting/PlottingWidget",["dojo/_base/declare","xstyle/css!./theme/PlottingWidgetTheme.css","dojo/text!./template/PlottingWidgetTemplate.html","dojo/_base/lang","dojo/topic","../base/UITemplatedWidget","./model/PlottingViewModel","./base/PlotDecimalDegreesWidget","./base/PlotDMSWidget","./base/PlotUTMWidget","./base/PlotMGRSWidget","esri/geometry/Point","esri/symbols/PictureMarkerSymbol","esri/graphic","dijit/form/Button"],function(_1,_2,_3,_4,_5,_6,_7,_8,_9,_a,_b,_c,_d,_e,_f){return _1([_6],{symbolUrl:"images/symbols/BluePin1LargeB.png",templateString:_3,postCreate:function(){this.inherited(arguments);this.handlePlotPointCallback=_4.hitch(this,this._handlePlotPoint);this.viewModel=new _7();_5.publish(VIEWER_GLOBALS.EVENTS.MAP.LEVEL.GET_LEVEL_COUNT,_4.hitch(this,this.setZoomLevelCount));this.viewModel.on("tabChanged",_4.hitch(this,this.handleCheckCurrentTabValid));ko.applyBindings(this.viewModel,this.domNode);this.createPlottingWidgets();this.handleCheckCurrentTabValid();this.initSymbology();},initListeners:function(){this.inherited(arguments);_5.subscribe(VIEWER_GLOBALS.EVENTS.MAP.LEVEL.LEVEL_COUNT_CHANGED,_4.hitch(this,this.setZoomLevelCount));},setZoomLevelCount:function(_10){this.viewModel.zoomLevels.removeAll();if(_10==null||!_4.isObject(_10)||_10.current==null||_10.count==null){return;}else{for(var i=0;i<_10.count;i++){this.viewModel.zoomLevels.push(i+1);}this.viewModel.selectedZoomLevel(_10.current);}},loadViewerConfigurationData:function(){this.inherited(arguments);var _11=null;_5.publish(VIEWER_GLOBALS.EVENTS.CONFIGURATION.GET_ENTRY,"plottingWidget",function(_12){_11=_12;});if(_11!=null&&_4.isObject(_11)&&_11.symbolUrl!=null){this.symbolUrl=_11.symbolUrl;}},createPlottingWidgets:function(){this.checkValidBoundsCallback=_4.hitch(this,this.handleCheckValidBoundsInput);this.createDDContent();this.createDMSContent();this.createUTMContent();this.createMGRSContent();},createDDContent:function(){this.ddWidget=new _8();this.ddWidget.on("valuesChanged",this.checkValidBoundsCallback);this.ddWidget.placeAt(this.plotDDContainer);},createMGRSContent:function(){this.mgrsWidget=new _b();this.mgrsWidget.on("valuesChanged",this.checkValidBoundsCallback);this.mgrsWidget.placeAt(this.plotMGRSContainer);},createDMSContent:function(){this.dmsWidget=new _9();this.dmsWidget.on("valuesChanged",this.checkValidBoundsCallback);this.dmsWidget.placeAt(this.plotDMSContainer);},createUTMContent:function(){this.utmWidget=new _a();this.utmWidget.on("valuesChanged",this.checkValidBoundsCallback);this.utmWidget.placeAt(this.plotUTMContainer);},handleCheckCurrentTabValid:function(){var _13=this.getCurrentVisiblePlottingWidget();if(_13){this.handleCheckValidBoundsInput(_13.isValid());}},handleCheckValidBoundsInput:function(_14){this.plottingButton.set("disabled",!_14);},plotPoint:function(){var _15=this.getCurrentVisiblePlottingWidget();if(_15){var pt=_15.getPoint().then(this.handlePlotPointCallback);}},_handlePlotPoint:function(pt){this.clearGraphic();if(pt==null){return;}if(_4.isArray(pt)&&pt.length>0){pt=pt[0];}else{if(!pt instanceof _c){return;}}this.currentGraphic=new _e(pt,this.pointSymbol);_5.publish(VIEWER_GLOBALS.EVENTS.MAP.GRAPHICS.ADD,this.currentGraphic);var _16={};var _17=this.viewModel.selectedZoomLevel();if(_17==null||_17==""){_16.deepest=true;}else{_16.zoomLevel=parseInt(_17,10);}_5.publish(VIEWER_GLOBALS.EVENTS.MAP.EXTENT.PAN_TO,pt,_16);},getCurrentVisiblePlottingWidget:function(){var _18;if(this.viewModel.plotDDVisible()){_18=this.ddWidget;}if(this.viewModel.plotDMSVisible()){_18=this.dmsWidget;}if(this.viewModel.plotUTMVisible()){_18=this.utmWidget;}if(this.viewModel.plotMGRSVisible()){_18=this.mgrsWidget;}return _18;},initSymbology:function(){this.pointSymbol=new _d(this.symbolUrl,32,32).setOffset(0,15);},clearGraphic:function(){if(this.currentGraphic){_5.publish(VIEWER_GLOBALS.EVENTS.MAP.GRAPHICS.REMOVE,this.currentGraphic);this.currentGraphic=null;}}});});