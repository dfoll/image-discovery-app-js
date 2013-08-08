//>>built
require({cache:{"url:esriviewer/ui/plotting/base/templates/PlotMGRSTemplate.html":"<div>\r\n    <div class=\"plottingHeader\">Plot by MGRS</div>\r\n    <span class=\"searchByBoundsInputLbl\">MGRS:</span>\r\n              <span data-dojo-attach-point=\"mgrsInput\"\r\n                    data-dojo-attach-event=\"onKeyUp: handleValueChange\"\r\n                    data-dojo-type=\"dijit/form/TextBox\"\r\n                    style=\"width:${boundsNumberBoxWidth}\"></span>\r\n</div>"}});define("esriviewer/ui/plotting/base/PlotMGRSWidget",["dojo/_base/declare","dojo/text!./templates/PlotMGRSTemplate.html","dojo/Deferred","./BasePlottingWidget","dijit/form/TextBox"],function(_1,_2,_3,_4,_5){return _1([_4],{boundsNumberBoxWidth:"12em",templateString:_2,handleValueChange:function(){return this.onValuesChanged(this.isValid());},isValid:function(){var _6=this.mgrsInput.get("value");return _6!=null&&_6!="";},getPoint:function(){var _7=new _3();var _8=this.mgrsInput.get("value");var pt=PROJECTION_UTILS.USNGtoLL(_8);if(!isNaN(pt.x)&&!isNaN(pt.y)){_7.resolve(PROJECTION_UTILS.geometryToMapSpatialReference(pt));}else{_7.resolve(null);}return _7.promise;}});});