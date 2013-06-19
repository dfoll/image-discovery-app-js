//>>built
define("esriviewer/ui/layers/model/LayersWidgetViewModel",["dojo/_base/declare","dojo/topic","dojo/Evented"],function(_1,_2,_3){return _1([_3],{ADD_LAYERS_VISIBLE:"addLayersVisible",constructor:function(){this.firstAddLayersDisplay=true;this.layersListVisible=ko.observable(true);this.addlayersVisible=ko.observable(false);this.persistedLayersVisible=ko.observable(false);this.showWKIDInAddLayers=ko.observable(true);this.showUserPersistedLayersIcon=ko.observable(true);this.viewerWKID=ko.observable("");},showLayersList:function(){this.layersListVisible(true);this.addlayersVisible(false);this.persistedLayersVisible(false);},showAddLayers:function(){if(this.addlayersVisible()){return;}if(this.firstAddLayersDisplay){var _4=null;_2.publish(VIEWER_GLOBALS.EVENTS.MAP.EXTENT.GET_EXTENT,function(_5){_4=_5;});if(_4&&_4.spatialReference&&_4.spatialReference.wkid!=null){this.viewerWKID(_4.spatialReference.wkid.toString());}this.firstAddLayersDisplay=false;}this.layersListVisible(false);this.addlayersVisible(true);this.persistedLayersVisible(false);this.emit(this.ADD_LAYERS_VISIBLE);},showUserPersistedLayers:function(){this.layersListVisible(false);this.addlayersVisible(false);this.persistedLayersVisible(true);}});});