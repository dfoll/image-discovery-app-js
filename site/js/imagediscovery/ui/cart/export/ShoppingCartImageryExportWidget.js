define([
    "dojo/_base/declare",
    "dojo/topic",
    "dojo/_base/lang",
    "../../export/ImageryExportWidget"
],
    function (declare, topic, lang, ImageryExportWidget) {
        return declare(
            [ImageryExportWidget],
            {
                imageryExportDownloadWindowTitle: "Checkout Complete",
                getDownloadObjectIds: function () {
                    var objectIds = [];
                    topic.publish(IMAGERY_GLOBALS.EVENTS.CART.GET_ADDED_OBJECT_IDS, function (objIdsArr) {
                        objectIds = objIdsArr;
                    });
                    if (objectIds == null || !lang.isArray(objectIds) || objectIds.length == 0) {
                        topic.publish(VIEWER_GLOBALS.EVENTS.MESSAGING.SHOW, "There is nothing in your cart");
                        VIEWER_UTILS.log("Could not download cart. The cart is empty", VIEWER_GLOBALS.LOG_TYPE.WARNING);

                        //clear the imagery export download window
                        if (this.imageryExportDownloadWindow &&
                            this.imageryExportDownloadWindow.downloadListWidget
                            ) {
                            this.imageryExportDownloadWindow.downloadListWidget.clearDownloadList();
                        }
                        return null;


                    }
                    return objectIds;
                }
            });
    });