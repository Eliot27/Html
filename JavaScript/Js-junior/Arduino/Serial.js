(self.webpackChunkserial_terminal = self.webpackChunkserial_terminal || []).push([[179], {
    607: function(e, t, n) {
        "use strict";
        var r = this && this.__awaiter || function(e, t, n, r) {
            return new (n || (n = Promise))((function(a, o) {
                function i(e) {
                    try {
                        c(r.next(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function s(e) {
                    try {
                        c(r.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function c(e) {
                    var t;
                    e.done ? a(e.value) : (t = e.value,
                    t instanceof n ? t : new n((function(e) {
                        e(t)
                    }
                    ))).then(i, s)
                }
                c((r = r.apply(e, t || [])).next())
            }
            ))
        }
          , a = this && this.__generator || function(e, t) {
            var n, r, a, o, i = {
                label: 0,
                sent: function() {
                    if (1 & a[0])
                        throw a[1];
                    return a[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: s(0),
                throw: s(1),
                return: s(2)
            },
            "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function s(o) {
                return function(s) {
                    return function(o) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; i; )
                            try {
                                if (n = 1,
                                r && (a = 2 & o[0] ? r.return : o[0] ? r.throw || ((a = r.return) && a.call(r),
                                0) : r.next) && !(a = a.call(r, o[1])).done)
                                    return a;
                                switch (r = 0,
                                a && (o = [2 & o[0], a.value]),
                                o[0]) {
                                case 0:
                                case 1:
                                    a = o;
                                    break;
                                case 4:
                                    return i.label++,
                                    {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    i.label++,
                                    r = o[1],
                                    o = [0];
                                    continue;
                                case 7:
                                    o = i.ops.pop(),
                                    i.trys.pop();
                                    continue;
                                default:
                                    if (!((a = (a = i.trys).length > 0 && a[a.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                        i = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!a || o[1] > a[0] && o[1] < a[3])) {
                                        i.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && i.label < a[1]) {
                                        i.label = a[1],
                                        a = o;
                                        break
                                    }
                                    if (a && i.label < a[2]) {
                                        i.label = a[2],
                                        i.ops.push(o);
                                        break
                                    }
                                    a[2] && i.ops.pop(),
                                    i.trys.pop();
                                    continue
                                }
                                o = t.call(e, i)
                            } catch (e) {
                                o = [6, e],
                                r = 0
                            } finally {
                                n = a = 0
                            }
                        if (5 & o[0])
                            throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, s])
                }
            }
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = n(320)
          , i = n(617);
        n(502);
        var s, c, l, u, d, f, v, b, p, h, m = n(391);
        "serviceWorker"in navigator && window.addEventListener("load", (function() {
            return r(void 0, void 0, void 0, (function() {
                var e, t;
                return a(this, (function(n) {
                    switch (n.label) {
                    case 0:
                        return n.trys.push([0, 2, , 3]),
                        [4, navigator.serviceWorker.register("service-worker.js", {
                            scope: "."
                        })];
                    case 1:
                        return e = n.sent(),
                        console.log("SW registered: ", e),
                        [3, 3];
                    case 2:
                        return t = n.sent(),
                        console.log("SW registration failed: ", t),
                        [3, 3];
                    case 3:
                        return [2]
                    }
                }
                ))
            }
            ))
        }
        ));
        var w, g, y = 1, E = new URLSearchParams(window.location.search).has("polyfill"), k = new o.Terminal({
            scrollback: 1e4
        }), I = new i.FitAddon;
        k.loadAddon(I);
        var B = new TextEncoder
          , L = "";
        function R(e) {
            for (var t = 0; t < s.options.length; ++t) {
                var n = s.options[t];
                if ("prompt" !== n.value) {
                    var r = n;
                    if (r.port === e)
                        return r
                }
            }
            return null
        }
        function C(e) {
            var t = document.createElement("option");
            return t.textContent = "Port " + y++,
            t.port = e,
            s.appendChild(t),
            t
        }
        function _() {
            if (!k)
                throw new Error("no terminal instance found");
            if (0 !== k.rows) {
                k.selectAll();
                var e = k.getSelection();
                k.clearSelection();
                var t = URL.createObjectURL(new Blob([(new TextEncoder).encode(e).buffer],{
                    type: "text/plain"
                }))
                  , n = document.createElement("a");
                n.download = "terminal_content_" + (new Date).getTime() + ".txt",
                n.href = t,
                n.click()
            } else
                console.log("No output yet")
        }
        function x() {
            return r(this, void 0, void 0, (function() {
                var e;
                return a(this, (function(t) {
                    switch (t.label) {
                    case 0:
                        if ("prompt" != s.value)
                            return [3, 5];
                        t.label = 1;
                    case 1:
                        return t.trys.push([1, 3, , 4]),
                        [4, (E ? m.serial : navigator.serial).requestPort({})];
                    case 2:
                        return w = t.sent(),
                        [3, 4];
                    case 3:
                        return t.sent(),
                        [2];
                    case 4:
                        return (function(e) {
                            return R(e) || C(e)
                        }(w)).selected = !0,
                        [3, 6];
                    case 5:
                        e = s.selectedOptions[0],
                        w = e.port,
                        t.label = 6;
                    case 6:
                        return [2]
                    }
                }
                ))
            }
            ))
        }
        function O() {
            return "custom" == l.value ? Number.parseInt(u.value) : Number.parseInt(l.value)
        }
        function N() {
            k.writeln("<DISCONNECTED>"),
            s.disabled = !1,
            c.textContent = "Connect",
            l.disabled = !1,
            u.disabled = !1,
            d.disabled = !1,
            f.disabled = !1,
            v.disabled = !1,
            b.disabled = !1,
            w = void 0
        }
        k.onData((function(e) {
            if (p.checked && k.writeUtf8(B.encode(e)),
            null != (null == w ? void 0 : w.writable)) {
                var t = w.writable.getWriter();
                h.checked ? (L += e,
                "\r" === e && (t.write(B.encode(L)),
                t.releaseLock(),
                L = "")) : t.write(B.encode(e)),
                t.releaseLock()
            } else
                console.warn("unable to find writable port")
        }
        )),
        document.addEventListener("DOMContentLoaded", (function() {
            return r(void 0, void 0, void 0, (function() {
                var e, t, n;
                return a(this, (function(o) {
                    switch (o.label) {
                    case 0:
                        return (e = document.getElementById("terminal")) && (k.open(e),
                        I.fit()),
                        document.getElementById("download").addEventListener("click", _),
                        s = document.getElementById("ports"),
                        (c = document.getElementById("connect")).addEventListener("click", (function() {
                            w ? function() {
                                r(this, void 0, void 0, (function() {
                                    var e, t;
                                    return a(this, (function(n) {
                                        switch (n.label) {
                                        case 0:
                                            return e = w,
                                            w = void 0,
                                            g ? [4, g.cancel()] : [3, 2];
                                        case 1:
                                            n.sent(),
                                            n.label = 2;
                                        case 2:
                                            if (!e)
                                                return [3, 6];
                                            n.label = 3;
                                        case 3:
                                            return n.trys.push([3, 5, , 6]),
                                            [4, e.close()];
                                        case 4:
                                            return n.sent(),
                                            [3, 6];
                                        case 5:
                                            return t = n.sent(),
                                            console.error(t),
                                            k.writeln("<ERROR: " + t.message + ">"),
                                            [3, 6];
                                        case 6:
                                            return N(),
                                            [2]
                                        }
                                    }
                                    ))
                                }
                                ))
                            }() : function() {
                                r(this, void 0, void 0, (function() {
                                    var e, t, n, r, o, i;
                                    return a(this, (function(a) {
                                        switch (a.label) {
                                        case 0:
                                            return [4, x()];
                                        case 1:
                                            return a.sent(),
                                            w ? (e = {
                                                baudRate: O(),
                                                dataBits: Number.parseInt(d.value),
                                                parity: f.value,
                                                stopBits: Number.parseInt(v.value),
                                                flowControl: b.checked ? "hardware" : "none",
                                                baudrate: O(),
                                                databits: Number.parseInt(d.value),
                                                stopbits: Number.parseInt(v.value),
                                                rtscts: b.checked
                                            },
                                            console.log(e),
                                            [4, w.open(e)]) : [2];
                                        case 2:
                                            a.sent(),
                                            s.disabled = !0,
                                            c.textContent = "Disconnect",
                                            l.disabled = !0,
                                            u.disabled = !0,
                                            d.disabled = !0,
                                            f.disabled = !0,
                                            v.disabled = !0,
                                            b.disabled = !0,
                                            k.writeln("<CONNECTED>"),
                                            a.label = 3;
                                        case 3:
                                            if (!w || !w.readable)
                                                return [3, 11];
                                            a.label = 4;
                                        case 4:
                                            a.trys.push([4, 9, , 10]),
                                            g = w.readable.getReader(),
                                            a.label = 5;
                                        case 5:
                                            return [4, g.read()];
                                        case 6:
                                            if (t = a.sent(),
                                            n = t.value,
                                            r = t.done,
                                            n && k.writeUtf8(n),
                                            r)
                                                return [3, 8];
                                            a.label = 7;
                                        case 7:
                                            return [3, 5];
                                        case 8:
                                            return g.releaseLock(),
                                            g = void 0,
                                            [3, 10];
                                        case 9:
                                            return o = a.sent(),
                                            console.error(o),
                                            k.writeln("<ERROR: " + o.message + ">"),
                                            [3, 10];
                                        case 10:
                                            return [3, 3];
                                        case 11:
                                            if (!w)
                                                return [3, 16];
                                            a.label = 12;
                                        case 12:
                                            return a.trys.push([12, 14, , 15]),
                                            [4, w.close()];
                                        case 13:
                                            return a.sent(),
                                            [3, 15];
                                        case 14:
                                            return i = a.sent(),
                                            console.error(i),
                                            k.writeln("<ERROR: " + i.message + ">"),
                                            [3, 15];
                                        case 15:
                                            N(),
                                            a.label = 16;
                                        case 16:
                                            return [2]
                                        }
                                    }
                                    ))
                                }
                                ))
                            }()
                        }
                        )),
                        (l = document.getElementById("baudrate")).addEventListener("input", (function() {
                            "custom" == l.value ? u.hidden = !1 : u.hidden = !0
                        }
                        )),
                        u = document.getElementById("custom_baudrate"),
                        d = document.getElementById("databits"),
                        f = document.getElementById("parity"),
                        v = document.getElementById("stopbits"),
                        b = document.getElementById("rtscts"),
                        p = document.getElementById("echo"),
                        h = document.getElementById("enter_flush"),
                        t = document.getElementById("convert_eol"),
                        n = function() {
                            k.setOption("convertEol", t.checked)
                        }
                        ,
                        t.addEventListener("change", n),
                        n(),
                        [4, (E ? m.serial : navigator.serial).getPorts()];
                    case 1:
                        return o.sent().forEach((function(e) {
                            return C(e)
                        }
                        )),
                        E || (navigator.serial.addEventListener("connect", (function(e) {
                            C(e.port || e.target)
                        }
                        )),
                        navigator.serial.addEventListener("disconnect", (function(e) {
                            var t = R(e.port || e.target);
                            t && t.remove()
                        }
                        ))),
                        [2]
                    }
                }
                ))
            }
            ))
        }
        ))
    }
}, e=>{
    "use strict";
    e.O(0, [216], (()=>(607,
    e(e.s = 607)))),
    e.O()
}
]);
