! function(e, n) {
    "function" == typeof define && define.amd ? define([], n) : "undefined" != typeof module && module.exports ? module.exports = n() : e.ReconnectingWebSocket = n()
}(this, function() {
    if ("WebSocket" in window) return e.prototype.onopen = function(e) {}, e.prototype.onclose = function(e) {}, e.prototype.onconnecting = function(e) {}, e.prototype.onmessage = function(e) {}, e.prototype.onerror = function(e) {}, e.debugAll = !1, e.CONNECTING = WebSocket.CONNECTING, e.OPEN = WebSocket.OPEN, e.CLOSING = WebSocket.CLOSING, e.CLOSED = WebSocket.CLOSED, e;

    function e(n, t, o) {
        var c, i = {
            debug: !1,
            automaticOpen: !0,
            reconnectInterval: 1e3,
            maxReconnectInterval: 3e4,
            reconnectDecay: 1.5,
            timeoutInterval: 2e3,
            maxReconnectAttempts: null,
            binaryType: "blob"
        };
        for (var r in o || (o = {}), i) void 0 !== o[r] ? this[r] = o[r] : this[r] = i[r];
        this.url = n, this.reconnectAttempts = 0, this.readyState = WebSocket.CONNECTING, this.protocol = null;
        var s = this,
            a = !1,
            u = !1,
            d = document.createElement("div");

        function l(e, n) {
            var t = document.createEvent("CustomEvent");
            return t.initCustomEvent(e, !1, !1, n), t
        }
        d.addEventListener("open", function(e) {
            s.onopen(e)
        }), d.addEventListener("close", function(e) {
            s.onclose(e)
        }), d.addEventListener("connecting", function(e) {
            s.onconnecting(e)
        }), d.addEventListener("message", function(e) {
            s.onmessage(e)
        }), d.addEventListener("error", function(e) {
            s.onerror(e)
        }), this.addEventListener = d.addEventListener.bind(d), this.removeEventListener = d.removeEventListener.bind(d), this.dispatchEvent = d.dispatchEvent.bind(d), this.open = function(n) {
            if ((c = new WebSocket(s.url, t || [])).binaryType = this.binaryType, n) {
                if (this.maxReconnectAttempts && this.reconnectAttempts > this.maxReconnectAttempts) return
            } else d.dispatchEvent(l("connecting")), this.reconnectAttempts = 0;
            (s.debug || e.debugAll) && console.debug("ReconnectingWebSocket", "attempt-connect", s.url);
            var o = c,
                i = setTimeout(function() {
                    (s.debug || e.debugAll) && console.debug("ReconnectingWebSocket", "connection-timeout", s.url), u = !0, o.close(), u = !1
                }, s.timeoutInterval);
            c.onopen = function(t) {
                clearTimeout(i), (s.debug || e.debugAll) && console.debug("ReconnectingWebSocket", "onopen", s.url), s.protocol = c.protocol, s.readyState = WebSocket.OPEN, s.reconnectAttempts = 0;
                var o = l("open");
                o.isReconnect = n, n = !1, d.dispatchEvent(o)
            }, c.onclose = function(t) {
                if (clearTimeout(i), c = null, a) s.readyState = WebSocket.CLOSED, d.dispatchEvent(l("close"));
                else {
                    s.readyState = WebSocket.CONNECTING;
                    var o = l("connecting");
                    o.code = t.code, o.reason = t.reason, o.wasClean = t.wasClean, d.dispatchEvent(o), n || u || ((s.debug || e.debugAll) && console.debug("ReconnectingWebSocket", "onclose", s.url), d.dispatchEvent(l("close")));
                    var i = s.reconnectInterval * Math.pow(s.reconnectDecay, s.reconnectAttempts);
                    setTimeout(function() {
                        s.reconnectAttempts++, s.open(!0)
                    }, i > s.maxReconnectInterval ? s.maxReconnectInterval : i)
                }
            }, c.onmessage = function(n) {
                (s.debug || e.debugAll) && console.debug("ReconnectingWebSocket", "onmessage", s.url, n.data);
                var t = l("message");
                t.data = n.data, d.dispatchEvent(t)
            }, c.onerror = function(n) {
                (s.debug || e.debugAll) && console.debug("ReconnectingWebSocket", "onerror", s.url, n), d.dispatchEvent(l("error"))
            }
        }, !0 == this.automaticOpen && this.open(!1), this.send = function(n) {
            if (c && c.readyState === WebSocket.OPEN) return (s.debug || e.debugAll) && console.debug("ReconnectingWebSocket", "send", s.url, n), c.send(n)
        }, this.close = function(e, n) {
            void 0 === e && (e = 1e3), a = !0, c && c.close(e, n)
        }, this.refresh = function() {
            c && c.close()
        }
    }
});