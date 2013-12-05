//>>built
require({cache:{"url:esriviewer/ui/pointupload/template/PointUploadTemplate.html":"<div>\r\n    <div>\r\n        <div class=\"validCoordsCSVPointUploadContainer\">\r\n            <div class=\"validCoordsCSVPointUploadLbl\">Valid Latitude fields:\r\n                <div class=\"validCoordsCSVPointUploadValue\" data-bind=\"text:validLatFields\"></div>\r\n            </div>\r\n            <div class=\"validCoordsCSVPointUploadContainer\">\r\n                <div class=\"validCoordsCSVPointUploadLbl\">Valid Longitude fields:</div>\r\n                <div class=\"validCoordsCSVPointUploadValue\" data-bind=\"text:validLonFields\"></div>\r\n            </div>\r\n        </div>\r\n        <div class=\"uploadDndContainer threePixelBorderRadius\"\r\n             data-dojo-attach-point=\"uploadDndContainer\">\r\n            <div class=\"uploadImageHtml5DropInner\" data-dojo-attach-point=\"uploadImageHtml5DropInner\">\r\n                <span>Drop CSV</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"}});define("esriviewer/ui/pointupload/PointUploadWidget",["dojo/_base/declare","dojo/text!./template/PointUploadTemplate.html","dojo/topic","dojo/string","dojo/_base/array","dojo/dom-class","dojo/_base/connect","dojo/_base/lang","../base/UITemplatedWidget","esri/geometry/Point","dojox/data/CsvStore","esri/layers/FeatureLayer","esri/InfoTemplate","./model/PointUploadViewModel","esri/geometry/Extent","esri/SpatialReference"],function(_1,_2,_3,_4,_5,_6,_7,_8,_9,_a,_b,_c,_d,_e,_f,_10){return _1([_9],{_defaultLatFields:["lat","latitude","y","ycenter"],_defaultLonFields:["lon","long","longitude","x","xcenter"],templateString:_2,postCreate:function(){this.validLatFields=this._defaultLatFields;this.validLonFields=this._defaultLonFields;this.inherited(arguments);var _11=this.validLatFields.join(", ");var _12=this.validLonFields.join(", ");this.viewModel=new _e();this.viewModel.validLatFields(_11);this.viewModel.validLonFields(_12);ko.applyBindings(this.viewModel,this.domNode);},initListeners:function(){this.inherited(arguments);_7.connect(this.uploadImageHtml5DropInner,"dragleave",this,_8.hitch(this.handleFileDragOut));_7.connect(this.uploadImageHtml5DropInner,"dragover",this,_8.hitch(this.handleFileDragOver));_7.connect(this.uploadImageHtml5DropInner,"drop",this,_8.hitch(this,this.handleFileDropped));},loadViewerConfigurationData:function(){var _13=null;_3.publish(VIEWER_GLOBALS.EVENTS.CONFIGURATION.GET_ENTRY,"pointUploadWidget",function(_14){_13=_14;});if(_13!=null&&_8.isObject(_13)){if(_13.validLatFields!=null&&_8.isArray(_13.validLatFields)){this.validLatFields=_13.validLatFields;}if(_13.validLonFields!=null&&_8.isArray(_13.validLonFields)){this.validLonFields=_13.validLonFields;}}},handleFileDragOut:function(evt){evt.stopPropagation();evt.preventDefault();_6.remove(this.uploadDndContainer,"uploadImageDivYellow");},handleFileDragOver:function(evt){evt.stopPropagation();evt.preventDefault();_6.add(this.uploadDndContainer,"uploadImageDivYellow");evt.dataTransfer.dropEffect="copy";},handleFileDropped:function(evt){evt.stopPropagation();evt.preventDefault();_6.remove(this.uploadDndContainer,"uploadImageDivYellow");var _15=evt.dataTransfer.files;if(_15.length==0){return;}var _16=[];var _17=_15[0].name;if(_15.length>0){_17=_15[0].name;var _18=_15[0].type;if(!(_18===VIEWER_GLOBALS.MIME_TYPES.EXCEL_VND||_18===VIEWER_GLOBALS.MIME_TYPES.TEXT_PLAIN)){_3.publish(VIEWER_GLOBALS.EVENTS.MESSAGING.SHOW,"File must be plain text CSV.");return;}var _19=new FileReader();_19.onload=_8.hitch(this,this._handleFileReadComplete,_19);_19.readAsText(_15[0]);}},_handleFileReadComplete:function(_1a){if(_1a&&_1a.result!=null){this.processCsvData(_1a.result);}},processCsvData:function(_1b){var _1c=_1b.indexOf("\n");var _1d=_4.trim(_1b.substr(0,_1c));var _1e=this._getSeparator(_1d);var _1f=new _b({data:_1b,separator:_1e});var _20=this;_1f.fetch({onComplete:function(_21,_22){var _23=0;var _24=_20._generateFeatureCollectionTemplateCsv(_1f,_21);var _25=_20._generateDefaultPopupInfo(_24);var _26=new _d(_20._buildInfoTemplate(_25));var _27,_28;var _29=_1f.getAttributes(_21[0]);var _2a;_5.forEach(_29,function(_2b){var _2c;_2a=_2b.toLowerCase();_2c=_5.indexOf(_20.validLatFields,_2a);if(_2c!==-1){_27=_2b;}_2c=_5.indexOf(_20.validLonFields,_2a);if(_2c!==-1){_28=_2b;}});var _2d=180;var _2e=90;var _2f=-180;var _30=-90;_5.forEach(_21,function(_31,_32){var _33=_1f.getAttributes(_31),_34={};_5.forEach(_33,function(_35){var _36=Number(_1f.getValue(_31,_35));if(isNaN(_36)){_34[_35]=_1f.getValue(_31,_35);}else{_34[_35]=_36;}});_34["__OBJECTID"]=_23;_23++;var _37=parseFloat(_34[_27]);var _38=parseFloat(_34[_28]);if(isNaN(_37)||isNaN(_38)){return;}if(_37>_30){_30=_37;}if(_37<_2e){_2e=_37;}if(_38>_2f){_2f=_38;}if(_38<_2d){_2d=_38;}var _39=PROJECTION_UTILS.geometryToMapSpatialReference(new _a(_38,_37))[0];var _3a={"geometry":_39.toJson(),"attributes":_34};_24.featureSet.features.push(_3a);});var _3b;if(_2d>_2f||_2d==_2f||_2e>_30||_2e==_30){_2d=-180;_2f=180;_2e=-90;_30=90;}var _3c=new _f(_2d,_2e,_2f,_30,new _10({wkid:4326}));_3b=PROJECTION_UTILS.geometryToMapSpatialReference(_3c)[0];var id="csvLayer_ "+VIEWER_UTILS.generateUUID();var _3d=new _c(_24,{infoTemplate:_26,id:id});_3d.initialExtent=_3b;_3d.name="CSV Layer "+VIEWER_UTILS.getTimeStamp();_3d.__popupInfo=_25;_3.publish(VIEWER_GLOBALS.EVENTS.MAP.LAYERS.ADD,_3d,{isOperationalLayer:true,canRemove:true});_3.publish(VIEWER_GLOBALS.EVENTS.MAP.EXTENT.SET_EXTENT,_3b);_3.publish(VIEWER_GLOBALS.EVENTS.MESSAGING.SHOW,"Layer Added");},onError:function(_3e){_3.publish(VIEWER_GLOBALS.EVENTS.MESSAGING.SHOW,"Error loading CSV data.");}});},_getSeparator:function(_3f){var _40=[",","      ",";","|"];var _41=0;var _42="";_5.forEach(_40,function(_43){var _44=_3f.split(_43).length;if(_44>_41){_41=_44;_42=_43;}});return _42;},_generateFeatureCollectionTemplateCsv:function(_45,_46){var _47={"layerDefinition":null,"featureSet":{"features":[],"geometryType":VIEWER_GLOBALS.ESRI_GEOMETRY_TYPES.POINT}};_47.layerDefinition={"geometryType":VIEWER_GLOBALS.ESRI_GEOMETRY_TYPES.POINT,"objectIdField":"__OBJECTID","type":"Feature Layer","typeIdField":"","drawingInfo":{"renderer":{"type":"simple","symbol":{"type":"esriPMS","url":"http://static.arcgis.com/images/Symbols/Basic/RedSphere.png","imageData":"iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQBQYWludC5ORVQgdjMuNS4xTuc4+QAAB3VJREFUeF7tmPlTlEcexnve94U5mANQbgQSbgiHXHINlxpRIBpRI6wHorLERUmIisKCQWM8cqigESVQS1Kx1piNi4mW2YpbcZONrilE140RCTcy3DDAcL/zbJP8CYPDL+9Ufau7uqb7eZ7P+/a8PS8hwkcgIBAQCAgEBAICAYGAQEAgIBAQCAgEBAICAYGAQEAgIBAQCDx/AoowKXFMUhD3lQrioZaQRVRS+fxl51eBTZUTdZ41U1Rox13/0JF9csGJ05Qv4jSz/YPWohtvLmSKN5iTGGqTm1+rc6weICOBRbZs1UVnrv87T1PUeovxyNsUP9P6n5cpHtCxu24cbrmwKLdj+osWiqrVKhI0xzbmZ7m1SpJ+1pFpvE2DPvGTomOxAoNLLKGLscZYvB10cbYYjrJCb7A5mrxleOBqim+cWJRakZY0JfnD/LieI9V1MrKtwokbrAtU4Vm0A3TJnphJD4B+RxD0u0LA7w7FTE4oprOCMbklEGNrfdGf4IqnQTb4wc0MFTYibZqM7JgjO8ZdJkpMln/sKu16pHZGb7IfptIWg389DPp9kcChWODoMuDdBOhL1JgpisbUvghM7AqFbtNiaFP80RLnhbuBdqi0N+1dbUpWGde9gWpuhFi95yL7sS7BA93JAb+Fn8mh4QujgPeTgb9kAZf3Apd2A+fXQ38yHjOHozB1IAJjOSEY2RSIwVUv4dd4X9wJccGHNrJ7CYQ4GGjLeNNfM+dyvgpzQstKf3pbB2A6m97uBRE0/Ergcxr8hyqg7hrwn0vAtRIKIRX6Y2pMl0RhIj8co9nBGFrvh55l3ngU7YObng7IVnFvGS+BYUpmHziY/Ls2zgP9SX50by/G9N5w6I+ogYvpwK1SoOlHQNsGfWcd9Peqof88B/rTyzF9hAIopAByQzC0JQB9ST5oVnvhnt+LOGsprvUhxNIwa0aY7cGR6Cp7tr8+whkjawIxkRWC6YJI6N+lAKq3Qf/Tx+B77oGfaQc/8hB8w2Xwtw9Bf3kzZspXY/JIDEbfpAB2BKLvVV90Jvjgoac9vpRxE8kciTVCBMMkNirJ7k/tRHyjtxwjKV4Yp3t/6s+R4E+/DH3N6+BrS8E314Dvvg2+/Sb4hxfBf5sP/up2TF3ZhonK1zD6dhwGdwail26DzqgX8MRKiq9ZBpkSkmeYOyPM3m9Jjl+1Z9D8AgNtlAq6bZ70qsZi+q+bwV/7I/hbB8D/dAr8Axq89iz474p/G5++koHJy1sx/lkGdBc2YjA3HF0rHNHuboomuQj/5DgclIvOGCGCYRKFFuTMV7YUAD3VDQaLMfyqBcZORGPy01QKYSNm/rYV/Nd/Av9NHvgbueBrsjDzRQamKKDxT9Kgq1iLkbIUDOSHoiNcgnYHgnYZi+9ZExSbiSoMc2eE2flKcuJLa4KGRQz6/U0wlGaP0feiMH4uFpMXEjBVlYjp6lWY+SSZtim0kulYMiYuJEJXuhTDJ9UYPByOvoIwdCxfgE4bAo0Jh39xLAoVpMwIEQyTyFCQvGpLon9sJ0K3J4OBDDcMH1dj9FQsxkrjMPFRPCbOx2GyfLal9VEcxstioTulxjAFNfROJPqLl6Bnfyg6V7ugz5yBhuHwrZjBdiU5YJg7I8wOpifAKoVIW7uQ3rpOBH2b3ekVjYT2WCRG3o+mIGKgO0OrlIaebU/HYOQDNbQnojB4NJyGD0NPfjA0bwTRE6Q7hsUcWhkWN8yZqSQlWWGECAZLmJfJmbrvVSI8taK37xpbdB/wQW8xPee/8xIGjvlj8IQ/hk4G0JbWcX8MHPVDX4kveoq8ocn3xLM33NCZRcPHOGJYZIKfpQyq7JjHS6yJjcHujLHADgkpuC7h8F8zEVqXSNC2awE69lqhs8AamkO26HrbDt2H7dBVQov2NcW26CiwQtu+BWjdY4n2nZboTbfCmKcCnRyDO/YmyLPnDlHvjDH8G6zhS9/wlEnYR7X00fWrFYuWdVI0ZpuhcbcczW/R2qdAcz6t/bRov4mONeaaoYl+p22rHF0bVNAmKtBvweIXGxNcfFH8eNlC4m6wMWMusEnKpn5hyo48pj9gLe4SNG9QoGGLAk8z5XiaJUd99u8122/IpBA2K9BGg2vWWKAvRYVeLzEa7E1R422m2+MsSTem97nSYnfKyN6/mzATv7AUgqcMrUnmaFlLX3ysM0fj+t/b5lQLtK22QEfyAmiSLKFZpUJ7kBRPXKW4HqCYynWVHKSG2LkyZex1uO1mZM9lKem9Tx9jjY5iNEYo0bKMhn7ZAu0r6H5PpLXCAq0rKJClSjSGynE/QIkrQYqBPe6S2X+AJsY2Ped6iWZk6RlL0c2r5szofRsO9R5S1IfQLRCpQL1aifoYFerpsbkuTImaUJXuXIDiH6/Ys8vm3Mg8L2i20YqsO7fItKLcSXyn0kXccclVqv3MS6at9JU/Ox+ouns+SF6Z4cSupz7l8+z1ucs7LF1AQjOdxfGZzmx8Iu1TRcfnrioICAQEAgIBgYBAQCAgEBAICAQEAgIBgYBAQCAgEBAICAQEAv8H44b/6ZiGvGAAAAAASUVORK5CYII=","contentType":"image/png","width":15,"height":15}}},"fields":[{"name":"__OBJECTID","alias":"__OBJECTID","type":VIEWER_GLOBALS.ESRI_FIELD_TYPES.OBJECT_ID,"editable":false,"domain":null}],"types":[],"capabilities":"Query"};var _48=_45.getAttributes(_46[0]);_5.forEach(_48,function(_49){var _4a=_45.getValue(_46[0],_49);var _4b=Number(_4a);if(isNaN(_4b)){_47.layerDefinition.fields.push({"name":_49,"alias":_49,"type":VIEWER_GLOBALS.ESRI_FIELD_TYPES.STRING,"editable":true,"domain":null});}else{_47.layerDefinition.fields.push({"name":_49,"alias":_49,"type":VIEWER_GLOBALS.ESRI_FIELD_TYPES.DOUBLE,"editable":true,"domain":null});}});return _47;},_generateDefaultPopupInfo:function(_4c){var _4d=_4c.layerDefinition.fields;var _4e={"esriFieldTypeDouble":1,"esriFieldTypeSingle":1};var _4f={"esriFieldTypeInteger":1,"esriFieldTypeSmallInteger":1};var dt={"esriFieldTypeDate":1};var _50=null;var _51=_5.map(_4d,_8.hitch(this,function(_52,_53){if(_52.name.toUpperCase()==="NAME"){_50=_52.name;}var _54=(_52.type!==VIEWER_GLOBALS.ESRI_FIELD_TYPES.OBJECT_ID&&_52.type!==VIEWER_GLOBALS.ESRI_FIELD_TYPES.GLOBAL_ID&&_52.type!==VIEWER_GLOBALS.ESRI_FIELD_TYPES.GEOMETRY);var _55=null;if(_54){var f=_52.name.toLowerCase();var _56=",stretched value,fnode_,tnode_,lpoly_,rpoly_,poly_,subclass,subclass_,rings_ok,rings_nok,";if(_56.indexOf(","+f+",")>-1||f.indexOf("area")>-1||f.indexOf("length")>-1||f.indexOf("shape")>-1||f.indexOf("perimeter")>-1||f.indexOf("objectid")>-1||f.indexOf("_")==f.length-1||f.indexOf("_i")==f.length-2){_54=false;}if(_52.type in _4f){_55={places:0,digitSeparator:true};}else{if(_52.type in _4e){_55={places:2,digitSeparator:true};}else{if(_52.type in dt){_55={dateFormat:"shortDateShortTime"};}}}}return _8.mixin({},{fieldName:_52.name,label:_52.alias,isEditable:false,tooltip:"",visible:_54,format:_55,stringFieldOption:"textbox"});}));return {title:_50?"{"+_50+"}":"",fieldInfos:_51,description:null,showAttachments:false,mediaInfos:[]};},_buildInfoTemplate:function(_57){var _58={content:"<table>"};_5.forEach(_57.fieldInfos,function(_59){if(_59.visible){_58.content+="<tr><td valign='top'>"+_59.label+": </td><td valign='top'>${"+_59.fieldName+"}</td></tr>";}});_58.content+="</table>";return _58;}});});