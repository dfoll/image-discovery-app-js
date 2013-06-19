define([
    "dojo/_base/declare",
    "dojo/topic",
    "dojo/_base/lang",
    "dojo/dom-class",
    "esriviewer/ui/window/WindowWidget",
    "./ImageryExportDownloadListWidget"

],
    function (declare, topic, lang, domClass, WindowWidget, ImageryExportDownloadListWidget) {
        return declare(
            [WindowWidget],
            {
                defaultPositioning: {
                    x: 200,
                    y: 50
                },
                windowWidth: "310px",
                windowHeaderText: "Your Files Have Been Prepared",
                windowIconAltText: "Your Files Have Been Prepared",
                positioningParamName: "downloadItems",
                windowIconClass: "commonIcons16 success",
                constructor: function (params) {
                    lang.mixin(this, params || {});
                },
                postCreate: function () {
                    this.inherited(arguments);
                    this.downloadListWidget = new ImageryExportDownloadListWidget();
                    this.setContent(this.downloadListWidget.domNode);
                },
                show: function (downloadList) {
                    if (downloadList != null) {
                        this.downloadListWidget.setDownloadList(downloadList);
                    }
                    this.inherited(arguments);
                },
                hide: function () {
                    if (this.downloadListWidget) {
                        this.downloadListWidget.clearDownloadList();
                    }
                    this.inherited(arguments);
                }



            });

    });