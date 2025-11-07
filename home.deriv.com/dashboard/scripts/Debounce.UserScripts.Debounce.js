function osDebounce(func, widgetId, debounceDelay) {

    var debounceTimer;

    var setDebounce = function() {
        if (debounceDelay === 0) {
            return
        }
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(func, debounceDelay);
    };

    var widget = document.getElementById(widgetId);
    widgettype = widget.type;

    //console.log(widgettype);

    switch (widgettype) {
        case "text":
        case "textarea":
        case "password":
        case "email":
        case "number":
        case "search":
            widget.removeEventListener('input', setDebounce, false);
            widget.addEventListener('input', setDebounce, false);
            // console.log('debounce type 1');
            break;
        case "radio":
        case "checkbox":
        case "date":
            // outsystem specific types from here....
        case "datetime-local":
            widget.removeEventListener('change', setDebounce, false)
            widget.addEventListener('change', setDebounce, false);
            // console.log('debounce type 2');
            break;
        default:
            console.warn('Debounce: Unsupported html/widget type detected. Type is', widgettype);
    }
}