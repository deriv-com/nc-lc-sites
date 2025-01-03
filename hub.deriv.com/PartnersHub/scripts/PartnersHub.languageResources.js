define("PartnersHub.languageResources", ["@outsystems/runtime-core-js", "PartnersHub.languageResources.translationsResources"], function(OSRuntimeCore, PartnersHubLanguageResources_translationsResources) {
    var OS = OSRuntimeCore;
    class MessagesProvider extends
    OS.LanguageResources.BaseMessagesProvider {
        constructor(translationResources) {
            super(translationResources);
            this.setMessage("Validation.Mandatory", "This field is required.");
            this.setMessage("Validation.Integer", "Enter a valid integer.");
            this.setMessage("Validation.LongInteger", "Enter a valid integer.");
            this.setMessage("Validation.Decimal", "Enter a valid decimal.");
            this.setMessage("Validation.Currency", "Enter a valid currency.");
            this.setMessage("Validation.Date", "Enter a valid date.");
            this.setMessage("Validation.Time", "Enter a valid time.");
            this.setMessage("Validation.DateTime", "Enter a valid date and time.");
            this.setMessage("Validation.Text", "Enter a valid text.");
            this.setMessage("Validation.PhoneNumber", "Enter a valid phone number.");
            this.setMessage("Validation.Email", "");
            this.setMessage("UpgradeComplete", "");
            this.setMessage("AppInitError.Generic", "An error occurred while trying to update the app. If you want to retry the update, restart the app.");
            this.setMessage("AppInitError.Resources", "An error occurred while trying to update the app. If you want to retry the update, restart the app.");
            this.setMessage("AppInitError.DataModel", "An error occurred while trying to update the app. If you want to retry the update, restart the app. If the problem persists you can reinstall, but all local data will be lost.");
            this.setMessage("UpgradeRequired", "Your application needs to be updated. Click here to update.");
            this.setMessage("UpgradeRequiredDataLoss", "Your application needs to be updated. Unsaved data will be lost. Click here to update.");
        }

    }

    return new MessagesProvider(PartnersHubLanguageResources_translationsResources);
});

define("PartnersHub.languageResources.translationsResources.ar-001", [], function() {
    return {
        "Validation.Currency": "يرجى إدخال عملة صحيحة.",
        "Validation.DateTime": "يرجى إدخال تاريخ ووقت صالحين.",
        "Validation.Date": "يرجى إدخال تاريخ صحيح.",
        "Validation.Decimal": "يرجى إدخال رقم عشري صحيح.",
        "Validation.Integer": "يرجى إدخال عدد صحيح صالح.",
        "Validation.LongInteger": "يرجى إدخال عدد صحيح صالح.",
        "Validation.Mandatory": "هذا الحقل مطلوب.",
        "SfiHlQXuikKB0jvgobHczA#NumericPasswordValidatorMsg": "يرجى إدخال كلمة مرور صحيحة تحتوي على أرقام.",
        "Validation.PhoneNumber": "يرجى إدخال رقم هاتف صحيح.",
        "Validation.Text": "يرجى إدخال نص صحيح.",
        "Validation.Time": "يرجى إدخال وقت صحيح.",
        "AppInitError.Generic": "حدث خطأ أثناء محاولة تحديث التطبيق. إذا كنت ترغب في إعادة المحاولة، يرجى إعادة تشغيل التطبيق.",
        "AppInitError.DataModel": "حدث خطأ أثناء محاولة تحديث التطبيق. إذا كنت ترغب في إعادة المحاولة، يرجى إعادة تشغيل التطبيق. إذا استمرت المشكلة، يمكنك إعادة تثبيت التطبيق، لكنك ستفقد جميع البيانات المحلية.\n\n",
        "AppInitError.Resources": "حدث خطأ أثناء محاولة تحديث التطبيق. إذا كنت ترغب في إعادة المحاولة، يرجى إعادة تشغيل التطبيق.",
        "UpgradeRequiredDataLoss": "يحتاج تطبيقك إلى التحديث. ستفقد البيانات غير المحفوظة. انقر هنا للتحديث.",
        "UpgradeRequired": "يحتاج تطبيقك إلى تحديث. انقر هنا للتحديث."
    };
});

define("PartnersHub.languageResources.translationsResources.de-DE", [], function() {
    return {
        "Validation.Currency": "Geben Sie eine gültige Währung ein.",
        "Validation.DateTime": "Geben Sie ein gültiges Datum und eine gültige Uhrzeit ein.",
        "Validation.Date": "Geben Sie ein gültiges Datum ein.",
        "Validation.Decimal": "Geben Sie eine gültige Dezimalzahl ein.",
        "Validation.Integer": "Geben Sie eine gültige Ganzzahl ein.",
        "Validation.LongInteger": "Geben Sie eine gültige Ganzzahl ein.",
        "Validation.Mandatory": "Dieses Feld ist erforderlich.",
        "SfiHlQXuikKB0jvgobHczA#NumericPasswordValidatorMsg": "Geben Sie ein gültiges numerisches Passwort ein.",
        "Validation.PhoneNumber": "Geben Sie eine gültige Telefonnummer ein.",
        "Validation.Text": "Geben Sie einen gültigen Text ein.",
        "Validation.Time": "Geben Sie eine gültige Uhrzeit ein.",
        "AppInitError.Generic": "Beim Versuch, die App zu aktualisieren, ist ein Fehler aufgetreten. Wenn Sie das Update erneut versuchen möchten, starten Sie die App neu.",
        "AppInitError.DataModel": "Beim Versuch, die App zu aktualisieren, ist ein Fehler aufgetreten. Wenn Sie das Update erneut versuchen möchten, starten Sie die App neu. Wenn das Problem weiterhin besteht, können Sie die App neu installieren, aber alle lokalen Daten gehen verloren.",
        "AppInitError.Resources": "Beim Versuch, die App zu aktualisieren, ist ein Fehler aufgetreten. Wenn Sie das Update erneut versuchen möchten, starten Sie die App neu.",
        "UpgradeRequiredDataLoss": "Ihre Anwendung muss aktualisiert werden. Nicht gespeicherte Daten gehen verloren. Klicken Sie hier, um zu aktualisieren.",
        "UpgradeRequired": "Ihre Anwendung muss aktualisiert werden. Klicken Sie hier, um sie zu aktualisieren."
    };
});

define("PartnersHub.languageResources.translationsResources.es-ES", [], function() {
    return {
        "Validation.Currency": "Introduce una moneda válida.",
        "Validation.DateTime": "Introduce una fecha y hora válidas.",
        "Validation.Date": "Introduce una fecha válida.",
        "Validation.Decimal": "Introduce un decimal válido.",
        "Validation.Integer": "Introduce un número entero válido.",
        "Validation.LongInteger": "Introduce un número entero válido.",
        "Validation.Mandatory": "Este campo es obligatorio.",
        "SfiHlQXuikKB0jvgobHczA#NumericPasswordValidatorMsg": "Introduce una contraseña numérica válida.",
        "Validation.PhoneNumber": "Introduce un número de teléfono válido.",
        "Validation.Text": "Ingresa un texto válido.",
        "Validation.Time": "Introduce una hora válida.",
        "AppInitError.Generic": "Ocurrió un error al intentar actualizar la aplicación. Si deseas intentar actualizar de nuevo, reinicia la aplicación.",
        "AppInitError.DataModel": "Ocurrió un error al intentar actualizar la aplicación. Si deseas intentar la actualización nuevamente, reinicia la aplicación. Si el problema persiste, puedes reinstalarla, pero se perderán todos los datos locales.",
        "AppInitError.Resources": "Ocurrió un error al intentar actualizar la aplicación. Si deseas intentar la actualización nuevamente, reinicia la aplicación.",
        "UpgradeRequiredDataLoss": "Tu aplicación necesita ser actualizada. Los datos no guardados se perderán. Haz clic aquí para actualizar.",
        "UpgradeRequired": "Tu aplicación necesita ser actualizada. Haz clic aquí para actualizar."
    };
});

define("PartnersHub.languageResources.translationsResources.fr-FR", [], function() {
    return {
        "Validation.Currency": "Entrez une devise valide.",
        "Validation.DateTime": "Entrez une date et une heure valides.",
        "Validation.Date": "Entrez une date valide.",
        "Validation.Decimal": "Entrez un nombre décimal valide.",
        "Validation.Integer": "Entrez un nombre entier valide.",
        "Validation.LongInteger": "Entrez un nombre entier valide.",
        "Validation.Mandatory": "Champ obligatoire.",
        "SfiHlQXuikKB0jvgobHczA#NumericPasswordValidatorMsg": "Entrez un mot de passe numérique valide.",
        "Validation.PhoneNumber": "Entrez un numéro de téléphone valide.",
        "Validation.Text": "Entrez un texte valide.",
        "Validation.Time": "Entrez une heure valide.",
        "AppInitError.Generic": "Une erreur est survenue lors de la tentative de mise à jour de l\'application. Si vous souhaitez réessayer la mise à jour, redémarrez l\'application.",
        "AppInitError.DataModel": "Une erreur est survenue lors de la tentative de mise à jour de l\'application. Si vous souhaitez réessayer la mise à jour, redémarrez l\'application. Si le problème persiste, vous pouvez la réinstaller, mais toutes les données locales seront perdues.",
        "AppInitError.Resources": "Une erreur est survenue lors de la tentative de mise à jour de l\'application. Si vous souhaitez réessayer la mise à jour, redémarrez l\'application.",
        "UpgradeRequiredDataLoss": "Votre application nécessite une mise à jour. Les données non enregistrées seront perdues. Cliquez ici pour mettre à jour.",
        "UpgradeRequired": "Votre application nécessite une mise à jour. Les données non enregistrées seront perdues. Cliquez ici pour mettre à jour."
    };
});

define("PartnersHub.languageResources.translationsResources.it-IT", [], function() {
    return {
        "Validation.Currency": "Inserisci una valuta valida.",
        "Validation.DateTime": "Inserisci una data e un\'ora valide.",
        "Validation.Date": "Inserisci una data valida.",
        "Validation.Decimal": "Inserisci un decimale valido.",
        "Validation.Integer": "Inserisci un numero intero valido.",
        "Validation.LongInteger": "Inserisci un numero intero valido.",
        "Validation.Mandatory": "Questo campo è obbligatorio.",
        "SfiHlQXuikKB0jvgobHczA#NumericPasswordValidatorMsg": "Inserisci una password numerica valida.",
        "Validation.PhoneNumber": "Inserisci un numero di telefono valido.",
        "Validation.Text": "Inserisci un testo valido.",
        "Validation.Time": "Inserisci un orario valido.",
        "AppInitError.Generic": "Si è verificato un errore durante il tentativo di aggiornare l\'app. Se desideri riprovare l\'aggiornamento, riavvia l\'app.",
        "AppInitError.DataModel": "Si è verificato un errore durante il tentativo di aggiornare l\'app. Se vuoi riprovare l\'aggiornamento, riavvia l\'app. Se il problema persiste, puoi reinstallarla, ma tutti i dati locali andranno persi.",
        "AppInitError.Resources": "Si è verificato un errore durante il tentativo di aggiornare l\'app. Se desideri riprovare l\'aggiornamento, riavvia l\'app.",
        "UpgradeRequiredDataLoss": "La tua applicazione deve essere aggiornata. I dati non salvati verranno persi. Clicca qui per aggiornare.",
        "UpgradeRequired": "La tua applicazione deve essere aggiornata. Clicca qui per aggiornare."
    };
});

define("PartnersHub.languageResources.translationsResources.pl-PL", [], function() {
    return {
        "Validation.Currency": "Wprowadź prawidłową walutę.",
        "Validation.DateTime": "Wprowadź poprawną datę i godzinę.",
        "Validation.Date": "Wprowadź poprawną datę.",
        "Validation.Decimal": "Wprowadź prawidłową liczbę dziesiętną.",
        "Validation.Integer": "Wprowadź prawidłową liczbę całkowitą.",
        "Validation.LongInteger": "Wprowadź prawidłową liczbę całkowitą.",
        "Validation.Mandatory": "To pole jest wymagane.",
        "SfiHlQXuikKB0jvgobHczA#NumericPasswordValidatorMsg": "Wprowadź prawidłowe hasło numeryczne.",
        "Validation.PhoneNumber": "Wprowadź prawidłowy numer telefonu.",
        "Validation.Text": "Wprowadź prawidłowy tekst.",
        "Validation.Time": "Wprowadź poprawny czas.",
        "AppInitError.Generic": "Wystąpił błąd podczas próby aktualizacji aplikacji. Jeśli chcesz spróbować ponownie, uruchom aplikację jeszcze raz.",
        "AppInitError.DataModel": "Wystąpił błąd podczas próby aktualizacji aplikacji. Jeśli chcesz spróbować ponownie, uruchom aplikację jeszcze raz. Jeśli problem będzie się powtarzał, możesz ją ponownie zainstalować, ale wszystkie dane lokalne zostaną utracone.",
        "AppInitError.Resources": "Wystąpił błąd podczas próby aktualizacji aplikacji. Jeśli chcesz spróbować ponownie, uruchom aplikację jeszcze raz.",
        "UpgradeRequiredDataLoss": "Twoja aplikacja wymaga aktualizacji. Niezapisane dane zostaną utracone. Kliknij tutaj, aby zaktualizować.",
        "UpgradeRequired": "Twoja aplikacja wymaga aktualizacji. Kliknij tutaj, aby zaktualizować."
    };
});

define("PartnersHub.languageResources.translationsResources.pt-PT", [], function() {
    return {
        "Validation.Currency": "Introduza uma moeda válida.",
        "Validation.DateTime": "Insira uma data e hora válidas.",
        "Validation.Date": "Insira uma data válida.",
        "Validation.Decimal": "Introduza um número decimal válido.",
        "Validation.Integer": "Introduza um número inteiro válido.",
        "Validation.LongInteger": "Introduza um número inteiro válido.",
        "Validation.Mandatory": "Este campo é de preenchimento obrigatório.",
        "SfiHlQXuikKB0jvgobHczA#NumericPasswordValidatorMsg": "Introduza uma palavra-passe numérica válida.",
        "Validation.PhoneNumber": "Introduza um número de telefone válido.",
        "Validation.Text": "Introduza um texto válido.",
        "Validation.Time": "Introduza um horário válido.",
        "AppInitError.Generic": "Ocorreu um erro ao tentar atualizar a aplicação. Se desejar tentar novamente, reinicie a aplicação.",
        "AppInitError.DataModel": "Ocorreu um erro ao tentar atualizar a aplicação. Se quiser tentar de novo, reinicie a aplicação. Caso o erro persista, pode reinstalá-la, mas todos os dados locais serão apagados.",
        "AppInitError.Resources": "Ocorreu um erro ao tentar atualizar a aplicação. Se quiser tentar de novo, reinicie a aplicação.",
        "UpgradeRequiredDataLoss": "A sua aplicação necessita de uma atualização. Os dados não guardados serão perdidos. Clique aqui para atualizar.",
        "UpgradeRequired": "A sua aplicação necessita de ser atualizada. Clique aqui para atualizar."
    };
});

define("PartnersHub.languageResources.translationsResources.ru-RU", [], function() {
    return {
        "Validation.Currency": "Введите корректную валюту.",
        "Validation.DateTime": "Введите корректную дату и время.",
        "Validation.Date": "Введите корректную дату.",
        "Validation.Decimal": "Введите корректное десятичное число.",
        "Validation.Integer": "Введите корректное целое число.",
        "Validation.LongInteger": "Введите корректное целое число.",
        "Validation.Mandatory": "Это поле обязательно для заполнения.",
        "SfiHlQXuikKB0jvgobHczA#NumericPasswordValidatorMsg": "Введите корректный числовой пароль.",
        "Validation.PhoneNumber": "Введите корректный номер телефона.",
        "Validation.Text": "Введите корректный текст.",
        "Validation.Time": "Введите корректное время.",
        "AppInitError.Generic": "Произошла ошибка при обновлении приложения. Если хотите повторить попытку, перезапустите приложение.",
        "AppInitError.DataModel": "Произошла ошибка при обновлении приложения. Если хотите повторить попытку, перезапустите приложение. Если проблема сохраняется, вы можете переустановить приложение, но все локальные данные будут потеряны.",
        "AppInitError.Resources": "Произошла ошибка при обновлении приложения. Если хотите повторить попытку, перезапустите приложение.",
        "UpgradeRequiredDataLoss": "Приложение необходимо обновить. Несохраненные данные будут утеряны. Нажмите здесь, чтобы обновить.",
        "UpgradeRequired": "Приложение необходимо обновить. Нажмите здесь, чтобы обновить."
    };
});

define("PartnersHub.languageResources.translationsResources", ["exports", "PartnersHub.languageResources.translationsResources.ar-001", "PartnersHub.languageResources.translationsResources.de-DE", "PartnersHub.languageResources.translationsResources.es-ES", "PartnersHub.languageResources.translationsResources.fr-FR", "PartnersHub.languageResources.translationsResources.it-IT", "PartnersHub.languageResources.translationsResources.pl-PL", "PartnersHub.languageResources.translationsResources.pt-PT", "PartnersHub.languageResources.translationsResources.ru-RU"], function(exports, PartnersHub_languageResources_translationsResources_ar001, PartnersHub_languageResources_translationsResources_deDE, PartnersHub_languageResources_translationsResources_esES, PartnersHub_languageResources_translationsResources_frFR, PartnersHub_languageResources_translationsResources_itIT, PartnersHub_languageResources_translationsResources_plPL, PartnersHub_languageResources_translationsResources_ptPT, PartnersHub_languageResources_translationsResources_ruRU) {
    return {
        "ar-001": {
            "translations": PartnersHub_languageResources_translationsResources_ar001,
            "isRTL": true
        },
        "de-DE": {
            "translations": PartnersHub_languageResources_translationsResources_deDE,
            "isRTL": false
        },
        "es-ES": {
            "translations": PartnersHub_languageResources_translationsResources_esES,
            "isRTL": false
        },
        "fr-FR": {
            "translations": PartnersHub_languageResources_translationsResources_frFR,
            "isRTL": false
        },
        "it-IT": {
            "translations": PartnersHub_languageResources_translationsResources_itIT,
            "isRTL": false
        },
        "pl-PL": {
            "translations": PartnersHub_languageResources_translationsResources_plPL,
            "isRTL": false
        },
        "pt-PT": {
            "translations": PartnersHub_languageResources_translationsResources_ptPT,
            "isRTL": false
        },
        "ru-RU": {
            "translations": PartnersHub_languageResources_translationsResources_ruRU,
            "isRTL": false
        }
    };
});