//>>built
require({cache:{"url:esriviewer/ui/layers/template/LayersTransparencySliderTemplate.html":"<div>\r\n    <div\r\n            data-dojo-type=\"dijit/form/HorizontalSlider\"\r\n            data-dojo-attach-event=\"onChange: handleTransparencyChange\"\r\n            data-dojo-props=\"value:0,\r\n        minimum: 0,\r\n        maximum:100,\r\n        intermediateChanges:true,\r\n        showButtons:false\">\r\n        <div data-dojo-type=\"dijit/form/HorizontalRule\" container=\"bottomDecoration\"\r\n             class=\"layerTransSliderRuleLblContainer\"\r\n             count=11></div>\r\n        <ol data-dojo-type=\"dijit/form/HorizontalRuleLabels\" container=\"bottomDecoration\"\r\n            class=\"layerTransSliderRuleLbls\">\r\n            <li>0%</li>\r\n            <li>20%</li>\r\n            <li>40%</li>\r\n            <li>50%</li>\r\n            <li>60%</li>\r\n            <li>80%</li>\r\n            <li>100%</li>\r\n        </ol>\r\n    </div>\r\n\r\n</div>"}});define("esriviewer/ui/layers/LayersTransparencySliderWidget",["dojo/_base/declare","dojo/text!./template/LayersTransparencySliderTemplate.html","dojo/topic","dojo/_base/lang","../base/UITemplatedWidget","dijit/form/HorizontalSlider","dijit/form/HorizontalRule","dijit/form/HorizontalRuleLabels"],function(_1,_2,_3,_4,_5,_6,_7,_8){return _1([_5],{templateString:_2,handleTransparencyChange:function(_9){_3.publish(VIEWER_GLOBALS.EVENTS.MAP.LAYERS.TRANSPARENCY.SET,(_9*0.01));}});});