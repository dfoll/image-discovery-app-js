//>>built
require({cache:{"url:esriviewer/ui/transparency/template/LayersTransparencyWidget.html":"<div class=\"layerTransparencyContent\">\r\n    <div data-dojo-attach-point=\"layersTransparencyContentHeader\"></div>\r\n    <div data-dojo-attach-point=\"layersTransparencySliderContent\" class=\"layerTransparencyContent\"></div>\r\n</div>","url:esriviewer/ui/transparency/theme/layersTransparencyWidgetTheme.css":".transparencySliderLayerName{padding-bottom:10px;font-size:9pt;}.layerTransparencyContent{width:100%;}.layerTransparencyContent{height:100%;}.layerTransparencySliderEntry{height:70px;margin:10px 0;padding:5px;font-size:7pt;}.layerTransparencyWindowContent{height:80% !important;overflow:auto;overflow-x:hidden;}"}});define("esriviewer/ui/transparency/LayersTransparencyWidget",["dojo/_base/declare","dojo/text!./template/LayersTransparencyWidget.html","xstyle/css!./theme/layersTransparencyWidgetTheme.css","dojo/topic","dojo/on","dojo/_base/lang","../base/UITemplatedWidget","dojo/dom-construct","./base/LayerSliderWidget"],function(_1,_2,_3,_4,on,_5,_6,_7,_8){return _1([_6],{templateString:_2,constructor:function(){this.sliderCache={};},postCreate:function(){this.inherited(arguments);this.populateLayers();},initListeners:function(){this.inherited(arguments);_4.subscribe(VIEWER_GLOBALS.EVENTS.MAP.LAYERS.ADDED,_5.hitch(this,this.addLayer));_4.subscribe(VIEWER_GLOBALS.EVENTS.MAP.LAYERS.REMOVED,_5.hitch(this,this.handleLayerRemoved));},addLayer:function(_9){if(this.sliderCache[_9.id]==null){var _a=new _8({layer:_9,label:_9.name});this.sliderCache[_9.id]=_a;_7.place(_a.domNode,this.layersTransparencySliderContent);}},handleLayerRemoved:function(_b){if(_b){if(this.sliderCache[_b.id]!=null){var _c=this.sliderCache[_b.id];_c.destroy();delete this.sliderCache[_b.id];}}},populateLayers:function(){_4.publish(VIEWER_GLOBALS.EVENTS.MAP.LAYERS.OPERATIONAL.GET,_5.hitch(this,function(_d){var _e;for(var i=0;i<_d.length;i++){_e=_d[i];this.addLayer(_e);}}));}});});