const trackEvent = (eventName, eventProperties) => {
    const trackToAnalytics = () => {
        Analytics.Analytics.trackEvent(eventName, eventProperties);
    };

    const cacheEvent = () => {
        const storedEvents = Cookies.get('cached_analytics_events');
        let eventQueue = [];

        if (storedEvents) {
            try {
                eventQueue = JSON.parse(storedEvents);
            } catch (error) {
                console.error("Error parsing cached events:", error);
                eventQueue = [];
            }
        }

        eventQueue.push({
            name: eventName,
            properties: eventProperties
        });

        // Store updated events in the cookie
        Cookies.set('cached_analytics_events', JSON.stringify(eventQueue));
    };

    // Check if the analytics object is available and ready
    if (typeof Analytics !== 'undefined' && Analytics.Analytics) {
        trackToAnalytics();
    } else {
        cacheEvent();
    }
};