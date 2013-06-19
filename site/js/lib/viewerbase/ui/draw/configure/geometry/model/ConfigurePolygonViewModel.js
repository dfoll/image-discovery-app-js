//>>built
define("esriviewer/ui/draw/configure/geometry/model/ConfigurePolygonViewModel",["dojo/_base/declare","esri/symbols/SimpleLineSymbol","esri/symbols/SimpleFillSymbol"],function(_1,_2,_3){return _1([],{fillStyles:ko.observableArray([{value:_3.STYLE_BACKWARD_DIAGONAL,label:"Backward Diagonal"},{value:_3.STYLE_CROSS,label:"Cross"},{value:_3.STYLE_DIAGONAL_CROSS,label:"Diagonal Cross"},{value:_3.STYLE_FORWARD_DIAGONAL,label:"Forward Diagonal"},{value:_3.STYLE_HORIZONTAL,label:"Horizontal Lines"},{value:_3.STYLE_SOLID,label:"Solid"},{value:_3.STYLE_VERTICAL,label:"Vertical Lines"},{value:_3.STYLE_NULL,label:"None"}]),outlineStyles:ko.observableArray([{value:_2.STYLE_DASH,label:"Dashed Line"},{value:_2.STYLE_DASHDOT,label:"Dash Dot Line"},{value:_2.STYLE_DASHDOTDOT,label:"Dash Dot Dot Line"},{value:_2.STYLE_DOT,label:"Dotted Line"},{value:_2.STYLE_SOLID,label:"Solid Line"},{value:_2.STYLE_NULL,label:"None"}]),outlineWidths:ko.observableArray([1,2,3,4,5,6,7,8,9,10,15,20,25,30,40,50]),angles:ko.observableArray([0,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85]),constructor:function(){this.selectedFillStyle=ko.observable(_3.STYLE_SOLID);this.selectedOutlineStyle=ko.observable(_2.STYLE_SOLID);this.selectedAngle=ko.observable(0);this.selectedOutlineWidth=ko.observable(1);this.outlineColorActive=ko.observable(true);this.fillColorActive=ko.observable(false);},setOutlineColorMode:function(){this.outlineColorActive(true);this.fillColorActive(false);},setFillColorMode:function(){this.outlineColorActive(false);this.fillColorActive(true);}});});