//>>built
require({cache:{"url:esriviewer/theme/sidebarTheme.css":".dijitTitlePaneTitle{font-size:12pt;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAABLCAYAAAC1Iz2+AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAadEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjEwMPRyoQAAAKBJREFUOE+Nx7cNw0AAQ1HuP6ByzlkNBzBcsDjINFR8gg/3fVMhwHVdVPA4z5MKHsdxUOEn9n0nvqP+YNs2Knis60oFj2VZqOAxzzMVAkzTRAWPcRyp8BLDMFAhQN/3VPDouo4KHm3bUsGjaRoqeNR1TQWPqqqo4FGWJRU8iqKggkee51TwyLKMCgHSNKXCSyRJQgWPOI6p8EAURfwGnQc+9GsrqAtrB/gAAAAASUVORK5CYII=) !important;}body.sidebarTheme{background:rgb(147, 206, 222);background:-moz-radial-gradient(center, ellipse cover, rgba(147, 206, 222, 1) 0%, rgba(117, 189, 209, 1) 41%, rgba(73, 165, 191, 1) 100%);background:-webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(0%, rgba(147, 206, 222, 1)), color-stop(41%, rgba(117, 189, 209, 1)), color-stop(100%, rgba(73, 165, 191, 1)));background:-webkit-radial-gradient(center, ellipse cover, rgba(147, 206, 222, 1) 0%, rgba(117, 189, 209, 1) 41%, rgba(73, 165, 191, 1) 100%);background:-o-radial-gradient(center, ellipse cover, rgba(147, 206, 222, 1) 0%, rgba(117, 189, 209, 1) 41%, rgba(73, 165, 191, 1) 100%);background:-ms-radial-gradient(center, ellipse cover, rgba(147, 206, 222, 1) 0%, rgba(117, 189, 209, 1) 41%, rgba(73, 165, 191, 1) 100%);background:radial-gradient(ellipse at center, rgba(147, 206, 222, 1) 0%, rgba(117, 189, 209, 1) 41%, rgba(73, 165, 191, 1) 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr ='#93cede', endColorstr ='#49a5bf', GradientType = 1);}.logolinks a,.sidebarInnerBorderContainerTop{color:white;}.dijitTabContainer{color:#666666;border-radius:10px 10px 10px 10px;}.dijitTab{border-radius:5px 5px 0 0;font-family:tahoma,sans-serif;}.sidebarInnerBorderContainer{margin-right:10px;margin-bottom:10px;}.sidebarInnerBorderContainerTop{height:24px;}.dijitTabContainerTop-tabs{border:0;}"}});define("esriviewer/manager/ViewerManagerSidebar",["dojo/_base/declare","xstyle/css!./../theme/sidebarTheme.css","dojo/topic","./base/ViewerManager"],function(_1,_2,_3,_4){return _1([_4],{createIdentifyWidget:function(){require(["esriviewer/ui/identify/IdentifyWidget"],function(_5){_3.publish(VIEWER_GLOBALS.EVENTS.PLACEMENT.WINDOWLESS.PLACE.IDENTIFY_WIDGET,new _5());});},createMeasureWidget:function(){require(["esriviewer/ui/measure/MeasureWidget"],function(_6){_3.publish(VIEWER_GLOBALS.EVENTS.PLACEMENT.WINDOWLESS.PLACE.MEASURE_WIDGET,new _6());});},createFeatureEditorWidget:function(){require(["esriviewer/ui/editor/FeatureServiceEditor"],function(_7){_3.publish(VIEWER_GLOBALS.EVENTS.PLACEMENT.WINDOWLESS.PLACE.FEATURE_SERVICE_WIDGET,new _7());});},createTimeSliderWidget:function(){require(["esriviewer/ui/time/TimeSliderWidget"],function(_8){_3.publish(VIEWER_GLOBALS.EVENTS.PLACEMENT.WINDOWLESS.PLACE.TIME_SLIDER_WIDGET,new _8());});},createLayersTransparencyWidget:function(){require(["../ui/transparency/LayersTransparencyWidget"],function(_9){_3.publish(VIEWER_GLOBALS.EVENTS.PLACEMENT.WINDOWLESS.PLACE.LAYER_TRANSPARENCY_WIDGET,new _9());});},createConfigureViewerWidget:function(){require(["esriviewer/ui/configure/ConfigureViewerWidget"],function(_a){_3.publish(VIEWER_GLOBALS.EVENTS.PLACEMENT.WINDOWLESS.PLACE.CONFIGURE_WIDGET,new _a());});},createReverseGeocodeWidget:function(){require(["esriviewer/ui/geocode/ReverseGeocodeWidget"],function(_b){_3.publish(VIEWER_GLOBALS.EVENTS.PLACEMENT.WINDOWLESS.PLACE.REVERSE_GEOCODE_WIDGET,new _b());});},createQueryBuilderWidget:function(){require(["esriviewer/ui/query/QueryBuilderWidget"],function(_c){_3.publish(VIEWER_GLOBALS.EVENTS.PLACEMENT.WINDOWLESS.PLACE.QUERY_BUILDER_WIDGET,new _c());});},createDrawWidget:function(){require(["esriviewer/ui/draw/DrawWidget"],function(_d){_3.publish(VIEWER_GLOBALS.EVENTS.PLACEMENT.WINDOWLESS.PLACE.DRAW_WIDGET,new _d());});},createLoggingWidget:function(){require(["esriviewer/ui/logging/LoggingWidget"],function(_e){_3.publish(VIEWER_GLOBALS.EVENTS.PLACEMENT.WINDOWLESS.PLACE.LOGGING_WIDGET,new _e());});},createLayersWidget:function(){require(["esriviewer/ui/layers/LayersWidget"],function(_f){_3.publish(VIEWER_GLOBALS.EVENTS.PLACEMENT.WINDOWLESS.PLACE.LAYERS_WIDGET,new _f());});},createLegendWidget:function(){require(["esriviewer/ui/legend/MapLegendWidget"],function(_10){_3.publish(VIEWER_GLOBALS.EVENTS.PLACEMENT.WINDOWLESS.PLACE.MAP_LEGEND_WIDGET,new _10());});},createZoomToWidget:function(){require(["esriviewer/ui/zoomto/ZoomToWidget"],function(_11){_3.publish(VIEWER_GLOBALS.EVENTS.PLACEMENT.WINDOWLESS.PLACE.ZOOM_TO_WIDGET,new _11());});},createWeatherWidget:function(){require(["esriviewer/ui/weather/conditions/WeatherWidget"],function(_12){_3.publish(VIEWER_GLOBALS.EVENTS.PLACEMENT.WINDOWLESS.PLACE.WEATHER_WIDGET,new _12());});}});});