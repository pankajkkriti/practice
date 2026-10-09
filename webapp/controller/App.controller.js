sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    "use strict";

    return Controller.extend(
        "com.aarti.practice.controller.App",
        {
            onInit: function () {
                // Initial application setup will be added
                // in upcoming classes.
            },

            onViewEmployees: function () {
                MessageToast.show(
                    "Employee List will be added in the next class."
                );
            },

            onNotificationPress: function () {
                MessageToast.show(
                    "You do not have any new notifications."
                );
            },

            onUserPress: function () {
                MessageToast.show(
                    "User profile functionality will be added later."
                );
            }
        }
    );
});