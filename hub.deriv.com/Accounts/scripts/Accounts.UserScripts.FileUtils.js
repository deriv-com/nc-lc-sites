! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = "undefined" != typeof globalThis ? globalThis : e || self).FileUtils = {})
}(this, (function(e) {
    "use strict";
    const t = 2560,
        n = .9,
        a = e => new Promise((a => {
            var r;
            r = e.type, /\.(png|jpg|jpeg|gif|pdf)$/gi.test(r ?? "") ? (e => new Promise((t => {
                const n = new FileReader;
                n.readAsDataURL(e), n.onloadend = () => {
                    t({
                        src: n.result?.toString() || "",
                        filename: e.name
                    })
                }
            })))(e).then((e => {
                (({
                    src: e,
                    filename: a,
                    options: r
                }) => {
                    const {
                        maxWidth: i = t,
                        quality: o = n
                    } = r || {};
                    return new Promise(((n, r) => {
                        const s = new Image;
                        s.src = e, s.onload = () => {
                            const e = document.createElement("canvas"),
                                l = e.getContext("2d");
                            if (!(l && l instanceof CanvasRenderingContext2D)) return r(new Error("Failed to get 2D context"));
                            if (s.naturalWidth > i) {
                                const n = t,
                                    a = n / s.naturalWidth;
                                e.width = n, e.height = s.naturalHeight * a
                            } else e.width = s.naturalWidth, e.height = s.naturalHeight;
                            l.fillStyle = "transparent", l.fillRect(0, 0, e.width, e.height), l.save(), l.drawImage(s, 0, 0, e.width, e.height), e.toBlob((e => {
                                if (!e) return;
                                const t = a.replace(/\.[^/.]+$/, ".jpg"),
                                    r = new Blob([e], {
                                        type: "image/jpeg"
                                    });
                                r.lastModifiedDate = Date.now(), r.name = t, n(r)
                            }), "image/jpeg", o)
                        }
                    }))
                })(e).then(a)
            })) : a(e)
        })),
        r = e => (e.split("/")[1] || (e.name.match(/\.([\w\d]+)$/) || [])[1] || "").toUpperCase(),
        i = e => {
            const t = new FileReader;
            return new Promise((n => {
                t.onload = () => {
                    const a = {
                        filename: e.name,
                        buffer: t.result,
                        fileSize: e.size
                    };
                    console.log("In lib: ", a, e), n(a)
                }, t.onerror = () => {
                    n({
                        message: `Unable to read file ${e.name}`
                    })
                }, t.readAsArrayBuffer(e)
            }))
        };
    e.compressImageFile = a, e.generateChunks = (e, {
        chunkSize: t = 16384
    }) => {
        const n = [];
        for (let a = 0; a < e.length; a++) {
            const r = e[a];
            a % t == 0 ? n.push([r]) : n[n.length - 1].push(r)
        }
        return n.map((e => new Uint8Array(e))).concat(new Uint8Array([]))
    }, e.generateFileMetaData = async e => {
        const t = await a(e.fileContent),
            n = await i(t),
            o = new Uint8Array(n.buffer),
            s = md5(Array.from(o));
        return {
            document_format: r(e.type),
            expected_checksum: s,
            file_size: o.length,
            passthrough: {
                document_upload: !0
            }
        }
    }, e.getFormatFromMIME = r, e.numToUint8Array = e => {
        const t = new Uint8Array(4);
        return new DataView(t.buffer).setUint32(0, e), t
    }, e.readFile = i
}));