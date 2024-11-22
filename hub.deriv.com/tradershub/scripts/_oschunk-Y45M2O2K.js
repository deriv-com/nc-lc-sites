import {
    ia as s
} from "./_oschunk-NTQBNJ73.js";
import {
    c as a
} from "./_oschunk-DVBKI63I.js";
var n = {
        "Validation.Email": "Entrez une adresse e-mail valide.",
        "Validation.Mandatory": "Ce champ est requis."
    },
    r = {
        "fr-FR": {
            translations: n,
            isRTL: !1
        }
    };
var o = s,
    t = class t extends o.LanguageResources.BaseMessagesProvider {
        constructor(i) {
            super(i), this.setMessage("Validation.Mandatory", "This field is required."), this.setMessage("Validation.Integer", "Enter a valid integer."), this.setMessage("Validation.LongInteger", "Enter a valid integer."), this.setMessage("Validation.Decimal", "Enter a valid decimal."), this.setMessage("Validation.Currency", "Enter a valid currency."), this.setMessage("Validation.Date", "Enter a valid date."), this.setMessage("Validation.Time", "Enter a valid time."), this.setMessage("Validation.DateTime", "Enter a valid date and time."), this.setMessage("Validation.Text", "Enter a valid text."), this.setMessage("Validation.PhoneNumber", "Enter a valid phone number."), this.setMessage("Validation.Email", "Enter a valid email."), this.setMessage("UpgradeComplete", ""), this.setMessage("AppInitError.Generic", "An error occurred while trying to update the app. If you want to retry the update, restart the app."), this.setMessage("AppInitError.Resources", "An error occurred while trying to update the app. If you want to retry the update, restart the app."), this.setMessage("AppInitError.DataModel", "An error occurred while trying to update the app. If you want to retry the update, restart the app. If the problem persists you can reinstall, but all local data will be lost."), this.setMessage("UpgradeRequired", "Your application needs to be updated. Click here to update."), this.setMessage("UpgradeRequiredDataLoss", "Your application needs to be updated. Unsaved data will be lost. Click here to update.")
        }
    };
a(t, "MessagesProvider");
var e = t,
    p = new e(r);
export {
    p as a
};