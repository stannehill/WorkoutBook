/*! jQuery v1.7 jquery.com | jquery.org/license */
(function (a, b) {
    function cA(a) {
        return f.isWindow(a) ? a : a.nodeType === 9 ? a.defaultView || a.parentWindow : !1
    }
    function cx(a) {
        if (!cm[a]) {
            var b = c.body,
                d = f("<" + a + ">").appendTo(b),
                e = d.css("display");
            d.remove();
            if (e === "none" || e === "") {
                cn || (cn = c.createElement("iframe"), cn.frameBorder = cn.width = cn.height = 0), b.appendChild(cn);
                if (!co || !cn.createElement) {
                    co = (cn.contentWindow || cn.contentDocument).document, co.write((c.compatMode === "CSS1Compat" ? "<!doctype html>" : "") + "<html><body>"), co.close()
                }
                d = co.createElement(a), co.body.appendChild(d), e = f.css(d, "display"), b.removeChild(cn)
            }
            cm[a] = e
        }
        return cm[a]
    }
    function cw(a, b) {
        var c = {};
        f.each(cs.concat.apply([], cs.slice(0, b)), function () {
            c[this] = a
        });
        return c
    }
    function cv() {
        ct = b
    }
    function cu() {
        setTimeout(cv, 0);
        return ct = f.now()
    }
    function cl() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }
    function ck() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }
    function ce(a, c) {
        a.dataFilter && (c = a.dataFilter(c, a.dataType));
        var d = a.dataTypes,
            e = {},
            g, h, i = d.length,
            j, k = d[0],
            l, m, n, o, p;
        for (g = 1; g < i; g++) {
            if (g === 1) {
                for (h in a.converters) {
                    typeof h == "string" && (e[h.toLowerCase()] = a.converters[h])
                }
            }
            l = k, k = d[g];
            if (k === "*") {
                k = l
            } else {
                if (l !== "*" && l !== k) {
                    m = l + " " + k, n = e[m] || e["* " + k];
                    if (!n) {
                        p = b;
                        for (o in e) {
                            j = o.split(" ");
                            if (j[0] === l || j[0] === "*") {
                                p = e[j[1] + " " + k];
                                if (p) {
                                    o = e[o], o === !0 ? n = p : p === !0 && (n = o);
                                    break
                                }
                            }
                        }
                    }!n && !p && f.error("No conversion from " + m.replace(" ", " to ")), n !== !0 && (c = n ? n(c) : p(o(c)))
                }
            }
        }
        return c
    }
    function cd(a, c, d) {
        var e = a.contents,
            f = a.dataTypes,
            g = a.responseFields,
            h, i, j, k;
        for (i in g) {
            i in d && (c[g[i]] = d[i])
        }
        while (f[0] === "*") {
            f.shift(), h === b && (h = a.mimeType || c.getResponseHeader("content-type"))
        }
        if (h) {
            for (i in e) {
                if (e[i] && e[i].test(h)) {
                    f.unshift(i);
                    break
                }
            }
        }
        if (f[0] in d) {
            j = f[0]
        } else {
            for (i in d) {
                if (!f[0] || a.converters[i + " " + f[0]]) {
                    j = i;
                    break
                }
                k || (k = i)
            }
            j = j || k
        }
        if (j) {
            j !== f[0] && f.unshift(j);
            return d[j]
        }
    }
    function cc(a, b, c, d) {
        if (f.isArray(b)) {
            f.each(b, function (b, e) {
                c || bG.test(a) ? d(a, e) : cc(a + "[" + (typeof e == "object" || f.isArray(e) ? b : "") + "]", e, c, d)
            })
        } else {
            if (!c && b != null && typeof b == "object") {
                for (var e in b) {
                    cc(a + "[" + e + "]", b[e], c, d)
                }
            } else {
                d(a, b)
            }
        }
    }
    function cb(a, c) {
        var d, e, g = f.ajaxSettings.flatOptions || {};
        for (d in c) {
            c[d] !== b && ((g[d] ? a : e || (e = {}))[d] = c[d])
        }
        e && f.extend(!0, a, e)
    }
    function ca(a, c, d, e, f, g) {
        f = f || c.dataTypes[0], g = g || {}, g[f] = !0;
        var h = a[f],
            i = 0,
            j = h ? h.length : 0,
            k = a === bV,
            l;
        for (; i < j && (k || !l); i++) {
            l = h[i](c, d, e), typeof l == "string" && (!k || g[l] ? l = b : (c.dataTypes.unshift(l), l = ca(a, c, d, e, l, g)))
        }(k || !l) && !g["*"] && (l = ca(a, c, d, e, "*", g));
        return l
    }
    function b_(a) {
        return function (b, c) {
            typeof b != "string" && (c = b, b = "*");
            if (f.isFunction(c)) {
                var d = b.toLowerCase().split(bR),
                    e = 0,
                    g = d.length,
                    h, i, j;
                for (; e < g; e++) {
                    h = d[e], j = /^\+/.test(h), j && (h = h.substr(1) || "*"), i = a[h] = a[h] || [], i[j ? "unshift" : "push"](c)
                }
            }
        }
    }
    function bE(a, b, c) {
        var d = b === "width" ? a.offsetWidth : a.offsetHeight,
            e = b === "width" ? bz : bA;
        if (d > 0) {
            c !== "border" && f.each(e, function () {
                c || (d -= parseFloat(f.css(a, "padding" + this)) || 0), c === "margin" ? d += parseFloat(f.css(a, c + this)) || 0 : d -= parseFloat(f.css(a, "border" + this + "Width")) || 0
            });
            return d + "px"
        }
        d = bB(a, b, b);
        if (d < 0 || d == null) {
            d = a.style[b] || 0
        }
        d = parseFloat(d) || 0, c && f.each(e, function () {
            d += parseFloat(f.css(a, "padding" + this)) || 0, c !== "padding" && (d += parseFloat(f.css(a, "border" + this + "Width")) || 0), c === "margin" && (d += parseFloat(f.css(a, c + this)) || 0)
        });
        return d + "px"
    }
    function br(a, b) {
        b.src ? f.ajax({
            url: b.src,
            async: !1,
            dataType: "script"
        }) : f.globalEval((b.text || b.textContent || b.innerHTML || "").replace(bi, "/*$0*/")), b.parentNode && b.parentNode.removeChild(b)
    }
    function bq(a) {
        var b = (a.nodeName || "").toLowerCase();
        b === "input" ? bp(a) : b !== "script" && typeof a.getElementsByTagName != "undefined" && f.grep(a.getElementsByTagName("input"), bp)
    }
    function bp(a) {
        if (a.type === "checkbox" || a.type === "radio") {
            a.defaultChecked = a.checked
        }
    }
    function bo(a) {
        return typeof a.getElementsByTagName != "undefined" ? a.getElementsByTagName("*") : typeof a.querySelectorAll != "undefined" ? a.querySelectorAll("*") : []
    }
    function bn(a, b) {
        var c;
        if (b.nodeType === 1) {
            b.clearAttributes && b.clearAttributes(), b.mergeAttributes && b.mergeAttributes(a), c = b.nodeName.toLowerCase();
            if (c === "object") {
                b.outerHTML = a.outerHTML
            } else {
                if (c !== "input" || a.type !== "checkbox" && a.type !== "radio") {
                    if (c === "option") {
                        b.selected = a.defaultSelected
                    } else {
                        if (c === "input" || c === "textarea") {
                            b.defaultValue = a.defaultValue
                        }
                    }
                } else {
                    a.checked && (b.defaultChecked = b.checked = a.checked), b.value !== a.value && (b.value = a.value)
                }
            }
            b.removeAttribute(f.expando)
        }
    }
    function bm(a, b) {
        if (b.nodeType === 1 && !! f.hasData(a)) {
            var c, d, e, g = f._data(a),
                h = f._data(b, g),
                i = g.events;
            if (i) {
                delete h.handle, h.events = {};
                for (c in i) {
                    for (d = 0, e = i[c].length; d < e; d++) {
                        f.event.add(b, c + (i[c][d].namespace ? "." : "") + i[c][d].namespace, i[c][d], i[c][d].data)
                    }
                }
            }
            h.data && (h.data = f.extend({}, h.data))
        }
    }
    function bl(a, b) {
        return f.nodeName(a, "table") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }
    function X(a) {
        var b = Y.split(" "),
            c = a.createDocumentFragment();
        if (c.createElement) {
            while (b.length) {
                c.createElement(b.pop())
            }
        }
        return c
    }
    function W(a, b, c) {
        b = b || 0;
        if (f.isFunction(b)) {
            return f.grep(a, function (a, d) {
                var e = !! b.call(a, d, a);
                return e === c
            })
        }
        if (b.nodeType) {
            return f.grep(a, function (a, d) {
                return a === b === c
            })
        }
        if (typeof b == "string") {
            var d = f.grep(a, function (a) {
                return a.nodeType === 1
            });
            if (R.test(b)) {
                return f.filter(b, d, !c)
            }
            b = f.filter(b, d)
        }
        return f.grep(a, function (a, d) {
            return f.inArray(a, b) >= 0 === c
        })
    }
    function V(a) {
        return !a || !a.parentNode || a.parentNode.nodeType === 11
    }
    function N() {
        return !0
    }
    function M() {
        return !1
    }
    function n(a, b, c) {
        var d = b + "defer",
            e = b + "queue",
            g = b + "mark",
            h = f._data(a, d);
        h && (c === "queue" || !f._data(a, e)) && (c === "mark" || !f._data(a, g)) && setTimeout(function () {
            !f._data(a, e) && !f._data(a, g) && (f.removeData(a, d, !0), h.fire())
        }, 0)
    }
    function m(a) {
        for (var b in a) {
            if (b === "data" && f.isEmptyObject(a[b])) {
                continue
            }
            if (b !== "toJSON") {
                return !1
            }
        }
        return !0
    }
    function l(a, c, d) {
        if (d === b && a.nodeType === 1) {
            var e = "data-" + c.replace(k, "-$1").toLowerCase();
            d = a.getAttribute(e);
            if (typeof d == "string") {
                try {
                    d = d === "true" ? !0 : d === "false" ? !1 : d === "null" ? null : f.isNumeric(d) ? parseFloat(d) : j.test(d) ? f.parseJSON(d) : d
                } catch (g) {}
                f.data(a, c, d)
            } else {
                d = b
            }
        }
        return d
    }
    function h(a) {
        var b = g[a] = {},
            c, d;
        a = a.split(/\s+/);
        for (c = 0, d = a.length; c < d; c++) {
            b[a[c]] = !0
        }
        return b
    }
    var c = a.document,
        d = a.navigator,
        e = a.location,
        f = function () {
            function K() {
                if (!e.isReady) {
                    try {
                        c.documentElement.doScroll("left")
                    } catch (a) {
                        setTimeout(K, 1);
                        return
                    }
                    e.ready()
                }
            }
            var e = function (a, b) {
                    return new e.fn.init(a, b, h)
                },
                f = a.jQuery,
                g = a.$,
                h, i = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
                j = /\S/,
                k = /^\s+/,
                l = /\s+$/,
                m = /\d/,
                n = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
                o = /^[\],:{}\s]*$/,
                p = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                q = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                r = /(?:^|:|,)(?:\s*\[)+/g,
                s = /(webkit)[ \/]([\w.]+)/,
                t = /(opera)(?:.*version)?[ \/]([\w.]+)/,
                u = /(msie) ([\w.]+)/,
                v = /(mozilla)(?:.*? rv:([\w.]+))?/,
                w = /-([a-z]|[0-9])/ig,
                x = /^-ms-/,
                y = function (a, b) {
                    return (b + "").toUpperCase()
                },
                z = d.userAgent,
                A, B, C, D = Object.prototype.toString,
                E = Object.prototype.hasOwnProperty,
                F = Array.prototype.push,
                G = Array.prototype.slice,
                H = String.prototype.trim,
                I = Array.prototype.indexOf,
                J = {};
            e.fn = e.prototype = {
                constructor: e,
                init: function (a, d, f) {
                    var g, h, j, k;
                    if (!a) {
                        return this
                    }
                    if (a.nodeType) {
                        this.context = this[0] = a, this.length = 1;
                        return this
                    }
                    if (a === "body" && !d && c.body) {
                        this.context = c, this[0] = c.body, this.selector = a, this.length = 1;
                        return this
                    }
                    if (typeof a == "string") {
                        a.charAt(0) !== "<" || a.charAt(a.length - 1) !== ">" || a.length < 3 ? g = i.exec(a) : g = [null, a, null];
                        if (g && (g[1] || !d)) {
                            if (g[1]) {
                                d = d instanceof e ? d[0] : d, k = d ? d.ownerDocument || d : c, j = n.exec(a), j ? e.isPlainObject(d) ? (a = [c.createElement(j[1])], e.fn.attr.call(a, d, !0)) : a = [k.createElement(j[1])] : (j = e.buildFragment([g[1]], [k]), a = (j.cacheable ? e.clone(j.fragment) : j.fragment).childNodes);
                                return e.merge(this, a)
                            }
                            h = c.getElementById(g[2]);
                            if (h && h.parentNode) {
                                if (h.id !== g[2]) {
                                    return f.find(a)
                                }
                                this.length = 1, this[0] = h
                            }
                            this.context = c, this.selector = a;
                            return this
                        }
                        return !d || d.jquery ? (d || f).find(a) : this.constructor(d).find(a)
                    }
                    if (e.isFunction(a)) {
                        return f.ready(a)
                    }
                    a.selector !== b && (this.selector = a.selector, this.context = a.context);
                    return e.makeArray(a, this)
                },
                selector: "",
                jquery: "1.7",
                length: 0,
                size: function () {
                    return this.length
                },
                toArray: function () {
                    return G.call(this, 0)
                },
                get: function (a) {
                    return a == null ? this.toArray() : a < 0 ? this[this.length + a] : this[a]
                },
                pushStack: function (a, b, c) {
                    var d = this.constructor();
                    e.isArray(a) ? F.apply(d, a) : e.merge(d, a), d.prevObject = this, d.context = this.context, b === "find" ? d.selector = this.selector + (this.selector ? " " : "") + c : b && (d.selector = this.selector + "." + b + "(" + c + ")");
                    return d
                },
                each: function (a, b) {
                    return e.each(this, a, b)
                },
                ready: function (a) {
                    e.bindReady(), B.add(a);
                    return this
                },
                eq: function (a) {
                    return a === -1 ? this.slice(a) : this.slice(a, +a + 1)
                },
                first: function () {
                    return this.eq(0)
                },
                last: function () {
                    return this.eq(-1)
                },
                slice: function () {
                    return this.pushStack(G.apply(this, arguments), "slice", G.call(arguments).join(","))
                },
                map: function (a) {
                    return this.pushStack(e.map(this, function (b, c) {
                        return a.call(b, c, b)
                    }))
                },
                end: function () {
                    return this.prevObject || this.constructor(null)
                },
                push: F,
                sort: [].sort,
                splice: [].splice
            }, e.fn.init.prototype = e.fn, e.extend = e.fn.extend = function () {
                var a, c, d, f, g, h, i = arguments[0] || {},
                    j = 1,
                    k = arguments.length,
                    l = !1;
                typeof i == "boolean" && (l = i, i = arguments[1] || {}, j = 2), typeof i != "object" && !e.isFunction(i) && (i = {}), k === j && (i = this, --j);
                for (; j < k; j++) {
                    if ((a = arguments[j]) != null) {
                        for (c in a) {
                            d = i[c], f = a[c];
                            if (i === f) {
                                continue
                            }
                            l && f && (e.isPlainObject(f) || (g = e.isArray(f))) ? (g ? (g = !1, h = d && e.isArray(d) ? d : []) : h = d && e.isPlainObject(d) ? d : {}, i[c] = e.extend(l, h, f)) : f !== b && (i[c] = f)
                        }
                    }
                }
                return i
            }, e.extend({
                noConflict: function (b) {
                    a.$ === e && (a.$ = g), b && a.jQuery === e && (a.jQuery = f);
                    return e
                },
                isReady: !1,
                readyWait: 1,
                holdReady: function (a) {
                    a ? e.readyWait++ : e.ready(!0)
                },
                ready: function (a) {
                    if (a === !0 && !--e.readyWait || a !== !0 && !e.isReady) {
                        if (!c.body) {
                            return setTimeout(e.ready, 1)
                        }
                        e.isReady = !0;
                        if (a !== !0 && --e.readyWait > 0) {
                            return
                        }
                        B.fireWith(c, [e]), e.fn.trigger && e(c).trigger("ready").unbind("ready")
                    }
                },
                bindReady: function () {
                    if (!B) {
                        B = e.Callbacks("once memory");
                        if (c.readyState === "complete") {
                            return setTimeout(e.ready, 1)
                        }
                        if (c.addEventListener) {
                            c.addEventListener("DOMContentLoaded", C, !1), a.addEventListener("load", e.ready, !1)
                        } else {
                            if (c.attachEvent) {
                                c.attachEvent("onreadystatechange", C), a.attachEvent("onload", e.ready);
                                var b = !1;
                                try {
                                    b = a.frameElement == null
                                } catch (d) {}
                                c.documentElement.doScroll && b && K()
                            }
                        }
                    }
                },
                isFunction: function (a) {
                    return e.type(a) === "function"
                },
                isArray: Array.isArray ||
                function (a) {
                    return e.type(a) === "array"
                },
                isWindow: function (a) {
                    return a && typeof a == "object" && "setInterval" in a
                },
                isNumeric: function (a) {
                    return a != null && m.test(a) && !isNaN(a)
                },
                type: function (a) {
                    return a == null ? String(a) : J[D.call(a)] || "object"
                },
                isPlainObject: function (a) {
                    if (!a || e.type(a) !== "object" || a.nodeType || e.isWindow(a)) {
                        return !1
                    }
                    try {
                        if (a.constructor && !E.call(a, "constructor") && !E.call(a.constructor.prototype, "isPrototypeOf")) {
                            return !1
                        }
                    } catch (c) {
                        return !1
                    }
                    var d;
                    for (d in a) {}
                    return d === b || E.call(a, d)
                },
                isEmptyObject: function (a) {
                    for (var b in a) {
                        return !1
                    }
                    return !0
                },
                error: function (a) {
                    throw a
                },
                parseJSON: function (b) {
                    if (typeof b != "string" || !b) {
                        return null
                    }
                    b = e.trim(b);
                    if (a.JSON && a.JSON.parse) {
                        return a.JSON.parse(b)
                    }
                    if (o.test(b.replace(p, "@").replace(q, "]").replace(r, ""))) {
                        return (new Function("return " + b))()
                    }
                    e.error("Invalid JSON: " + b)
                },
                parseXML: function (c) {
                    var d, f;
                    try {
                        a.DOMParser ? (f = new DOMParser, d = f.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(c))
                    } catch (g) {
                        d = b
                    }(!d || !d.documentElement || d.getElementsByTagName("parsererror").length) && e.error("Invalid XML: " + c);
                    return d
                },
                noop: function () {},
                globalEval: function (b) {
                    b && j.test(b) && (a.execScript ||
                    function (b) {
                        a.eval.call(a, b)
                    })(b)
                },
                camelCase: function (a) {
                    return a.replace(x, "ms-").replace(w, y)
                },
                nodeName: function (a, b) {
                    return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
                },
                each: function (a, c, d) {
                    var f, g = 0,
                        h = a.length,
                        i = h === b || e.isFunction(a);
                    if (d) {
                        if (i) {
                            for (f in a) {
                                if (c.apply(a[f], d) === !1) {
                                    break
                                }
                            }
                        } else {
                            for (; g < h;) {
                                if (c.apply(a[g++], d) === !1) {
                                    break
                                }
                            }
                        }
                    } else {
                        if (i) {
                            for (f in a) {
                                if (c.call(a[f], f, a[f]) === !1) {
                                    break
                                }
                            }
                        } else {
                            for (; g < h;) {
                                if (c.call(a[g], g, a[g++]) === !1) {
                                    break
                                }
                            }
                        }
                    }
                    return a
                },
                trim: H ?
                function (a) {
                    return a == null ? "" : H.call(a)
                } : function (a) {
                    return a == null ? "" : (a + "").replace(k, "").replace(l, "")
                },
                makeArray: function (a, b) {
                    var c = b || [];
                    if (a != null) {
                        var d = e.type(a);
                        a.length == null || d === "string" || d === "function" || d === "regexp" || e.isWindow(a) ? F.call(c, a) : e.merge(c, a)
                    }
                    return c
                },
                inArray: function (a, b, c) {
                    var d;
                    if (b) {
                        if (I) {
                            return I.call(b, a, c)
                        }
                        d = b.length, c = c ? c < 0 ? Math.max(0, d + c) : c : 0;
                        for (; c < d; c++) {
                            if (c in b && b[c] === a) {
                                return c
                            }
                        }
                    }
                    return -1
                },
                merge: function (a, c) {
                    var d = a.length,
                        e = 0;
                    if (typeof c.length == "number") {
                        for (var f = c.length; e < f; e++) {
                            a[d++] = c[e]
                        }
                    } else {
                        while (c[e] !== b) {
                            a[d++] = c[e++]
                        }
                    }
                    a.length = d;
                    return a
                },
                grep: function (a, b, c) {
                    var d = [],
                        e;
                    c = !! c;
                    for (var f = 0, g = a.length; f < g; f++) {
                        e = !! b(a[f], f), c !== e && d.push(a[f])
                    }
                    return d
                },
                map: function (a, c, d) {
                    var f, g, h = [],
                        i = 0,
                        j = a.length,
                        k = a instanceof e || j !== b && typeof j == "number" && (j > 0 && a[0] && a[j - 1] || j === 0 || e.isArray(a));
                    if (k) {
                        for (; i < j; i++) {
                            f = c(a[i], i, d), f != null && (h[h.length] = f)
                        }
                    } else {
                        for (g in a) {
                            f = c(a[g], g, d), f != null && (h[h.length] = f)
                        }
                    }
                    return h.concat.apply([], h)
                },
                guid: 1,
                proxy: function (a, c) {
                    if (typeof c == "string") {
                        var d = a[c];
                        c = a, a = d
                    }
                    if (!e.isFunction(a)) {
                        return b
                    }
                    var f = G.call(arguments, 2),
                        g = function () {
                            return a.apply(c, f.concat(G.call(arguments)))
                        };
                    g.guid = a.guid = a.guid || g.guid || e.guid++;
                    return g
                },
                access: function (a, c, d, f, g, h) {
                    var i = a.length;
                    if (typeof c == "object") {
                        for (var j in c) {
                            e.access(a, j, c[j], f, g, d)
                        }
                        return a
                    }
                    if (d !== b) {
                        f = !h && f && e.isFunction(d);
                        for (var k = 0; k < i; k++) {
                            g(a[k], c, f ? d.call(a[k], k, g(a[k], c)) : d, h)
                        }
                        return a
                    }
                    return i ? g(a[0], c) : b
                },
                now: function () {
                    return (new Date).getTime()
                },
                uaMatch: function (a) {
                    a = a.toLowerCase();
                    var b = s.exec(a) || t.exec(a) || u.exec(a) || a.indexOf("compatible") < 0 && v.exec(a) || [];
                    return {
                        browser: b[1] || "",
                        version: b[2] || "0"
                    }
                },
                sub: function () {
                    function a(b, c) {
                        return new a.fn.init(b, c)
                    }
                    e.extend(!0, a, this), a.superclass = this, a.fn = a.prototype = this(), a.fn.constructor = a, a.sub = this.sub, a.fn.init = function (d, f) {
                        f && f instanceof e && !(f instanceof a) && (f = a(f));
                        return e.fn.init.call(this, d, f, b)
                    }, a.fn.init.prototype = a.fn;
                    var b = a(c);
                    return a
                },
                browser: {}
            }), e.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (a, b) {
                J["[object " + b + "]"] = b.toLowerCase()
            }), A = e.uaMatch(z), A.browser && (e.browser[A.browser] = !0, e.browser.version = A.version), e.browser.webkit && (e.browser.safari = !0), j.test(" ") && (k = /^[\s\xA0]+/, l = /[\s\xA0]+$/), h = e(c), c.addEventListener ? C = function () {
                c.removeEventListener("DOMContentLoaded", C, !1), e.ready()
            } : c.attachEvent && (C = function () {
                c.readyState === "complete" && (c.detachEvent("onreadystatechange", C), e.ready())
            }), typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function () {
                return e
            });
            return e
        }(),
        g = {};
    f.Callbacks = function (a) {
        a = a ? g[a] || h(a) : {};
        var c = [],
            d = [],
            e, i, j, k, l, m = function (b) {
                var d, e, g, h, i;
                for (d = 0, e = b.length; d < e; d++) {
                    g = b[d], h = f.type(g), h === "array" ? m(g) : h === "function" && (!a.unique || !o.has(g)) && c.push(g)
                }
            },
            n = function (b, f) {
                f = f || [], e = !a.memory || [b, f], i = !0, l = j || 0, j = 0, k = c.length;
                for (; c && l < k; l++) {
                    if (c[l].apply(b, f) === !1 && a.stopOnFalse) {
                        e = !0;
                        break
                    }
                }
                i = !1, c && (a.once ? e === !0 ? o.disable() : c = [] : d && d.length && (e = d.shift(), o.fireWith(e[0], e[1])))
            },
            o = {
                add: function () {
                    if (c) {
                        var a = c.length;
                        m(arguments), i ? k = c.length : e && e !== !0 && (j = a, n(e[0], e[1]))
                    }
                    return this
                },
                remove: function () {
                    if (c) {
                        var b = arguments,
                            d = 0,
                            e = b.length;
                        for (; d < e; d++) {
                            for (var f = 0; f < c.length; f++) {
                                if (b[d] === c[f]) {
                                    i && f <= k && (k--, f <= l && l--), c.splice(f--, 1);
                                    if (a.unique) {
                                        break
                                    }
                                }
                            }
                        }
                    }
                    return this
                },
                has: function (a) {
                    if (c) {
                        var b = 0,
                            d = c.length;
                        for (; b < d; b++) {
                            if (a === c[b]) {
                                return !0
                            }
                        }
                    }
                    return !1
                },
                empty: function () {
                    c = [];
                    return this
                },
                disable: function () {
                    c = d = e = b;
                    return this
                },
                disabled: function () {
                    return !c
                },
                lock: function () {
                    d = b, (!e || e === !0) && o.disable();
                    return this
                },
                locked: function () {
                    return !d
                },
                fireWith: function (b, c) {
                    d && (i ? a.once || d.push([b, c]) : (!a.once || !e) && n(b, c));
                    return this
                },
                fire: function () {
                    o.fireWith(this, arguments);
                    return this
                },
                fired: function () {
                    return !!e
                }
            };
        return o
    };
    var i = [].slice;
    f.extend({
        Deferred: function (a) {
            var b = f.Callbacks("once memory"),
                c = f.Callbacks("once memory"),
                d = f.Callbacks("memory"),
                e = "pending",
                g = {
                    resolve: b,
                    reject: c,
                    notify: d
                },
                h = {
                    done: b.add,
                    fail: c.add,
                    progress: d.add,
                    state: function () {
                        return e
                    },
                    isResolved: b.fired,
                    isRejected: c.fired,
                    then: function (a, b, c) {
                        i.done(a).fail(b).progress(c);
                        return this
                    },
                    always: function () {
                        return i.done.apply(i, arguments).fail.apply(i, arguments)
                    },
                    pipe: function (a, b, c) {
                        return f.Deferred(function (d) {
                            f.each({
                                done: [a, "resolve"],
                                fail: [b, "reject"],
                                progress: [c, "notify"]
                            }, function (a, b) {
                                var c = b[0],
                                    e = b[1],
                                    g;
                                f.isFunction(c) ? i[a](function () {
                                    g = c.apply(this, arguments), g && f.isFunction(g.promise) ? g.promise().then(d.resolve, d.reject, d.notify) : d[e + "With"](this === i ? d : this, [g])
                                }) : i[a](d[e])
                            })
                        }).promise()
                    },
                    promise: function (a) {
                        if (a == null) {
                            a = h
                        } else {
                            for (var b in h) {
                                a[b] = h[b]
                            }
                        }
                        return a
                    }
                },
                i = h.promise({}),
                j;
            for (j in g) {
                i[j] = g[j].fire, i[j + "With"] = g[j].fireWith
            }
            i.done(function () {
                e = "resolved"
            }, c.disable, d.lock).fail(function () {
                e = "rejected"
            }, b.disable, d.lock), a && a.call(i, i);
            return i
        },
        when: function (a) {
            function m(a) {
                return function (b) {
                    e[a] = arguments.length > 1 ? i.call(arguments, 0) : b, j.notifyWith(k, e)
                }
            }
            function l(a) {
                return function (c) {
                    b[a] = arguments.length > 1 ? i.call(arguments, 0) : c, --g || j.resolveWith(j, b)
                }
            }
            var b = i.call(arguments, 0),
                c = 0,
                d = b.length,
                e = Array(d),
                g = d,
                h = d,
                j = d <= 1 && a && f.isFunction(a.promise) ? a : f.Deferred(),
                k = j.promise();
            if (d > 1) {
                for (; c < d; c++) {
                    b[c] && b[c].promise && f.isFunction(b[c].promise) ? b[c].promise().then(l(c), j.reject, m(c)) : --g
                }
                g || j.resolveWith(j, b)
            } else {
                j !== a && j.resolveWith(j, d ? [a] : [])
            }
            return k
        }
    }), f.support = function () {
        var a = c.createElement("div"),
            b = c.documentElement,
            d, e, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u;
        a.setAttribute("className", "t"), a.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/><nav></nav>", d = a.getElementsByTagName("*"), e = a.getElementsByTagName("a")[0];
        if (!d || !d.length || !e) {
            return {}
        }
        g = c.createElement("select"), h = g.appendChild(c.createElement("option")), i = a.getElementsByTagName("input")[0], k = {
            leadingWhitespace: a.firstChild.nodeType === 3,
            tbody: !a.getElementsByTagName("tbody").length,
            htmlSerialize: !! a.getElementsByTagName("link").length,
            style: /top/.test(e.getAttribute("style")),
            hrefNormalized: e.getAttribute("href") === "/a",
            opacity: /^0.55/.test(e.style.opacity),
            cssFloat: !! e.style.cssFloat,
            unknownElems: !! a.getElementsByTagName("nav").length,
            checkOn: i.value === "on",
            optSelected: h.selected,
            getSetAttribute: a.className !== "t",
            enctype: !! c.createElement("form").enctype,
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0
        }, i.checked = !0, k.noCloneChecked = i.cloneNode(!0).checked, g.disabled = !0, k.optDisabled = !h.disabled;
        try {
            delete a.test
        } catch (v) {
            k.deleteExpando = !1
        }!a.addEventListener && a.attachEvent && a.fireEvent && (a.attachEvent("onclick", function () {
            k.noCloneEvent = !1
        }), a.cloneNode(!0).fireEvent("onclick")), i = c.createElement("input"), i.value = "t", i.setAttribute("type", "radio"), k.radioValue = i.value === "t", i.setAttribute("checked", "checked"), a.appendChild(i), l = c.createDocumentFragment(), l.appendChild(a.lastChild), k.checkClone = l.cloneNode(!0).cloneNode(!0).lastChild.checked, a.innerHTML = "", a.style.width = a.style.paddingLeft = "1px", m = c.getElementsByTagName("body")[0], o = c.createElement(m ? "div" : "body"), p = {
            visibility: "hidden",
            width: 0,
            height: 0,
            border: 0,
            margin: 0,
            background: "none"
        }, m && f.extend(p, {
            position: "absolute",
            left: "-999px",
            top: "-999px"
        });
        for (t in p) {
            o.style[t] = p[t]
        }
        o.appendChild(a), n = m || b, n.insertBefore(o, n.firstChild), k.appendChecked = i.checked, k.boxModel = a.offsetWidth === 2, "zoom" in a.style && (a.style.display = "inline", a.style.zoom = 1, k.inlineBlockNeedsLayout = a.offsetWidth === 2, a.style.display = "", a.innerHTML = "<div style='width:4px;'></div>", k.shrinkWrapBlocks = a.offsetWidth !== 2), a.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>", q = a.getElementsByTagName("td"), u = q[0].offsetHeight === 0, q[0].style.display = "", q[1].style.display = "none", k.reliableHiddenOffsets = u && q[0].offsetHeight === 0, a.innerHTML = "", c.defaultView && c.defaultView.getComputedStyle && (j = c.createElement("div"), j.style.width = "0", j.style.marginRight = "0", a.appendChild(j), k.reliableMarginRight = (parseInt((c.defaultView.getComputedStyle(j, null) || {
            marginRight: 0
        }).marginRight, 10) || 0) === 0);
        if (a.attachEvent) {
            for (t in {
                submit: 1,
                change: 1,
                focusin: 1
            }) {
                s = "on" + t, u = s in a, u || (a.setAttribute(s, "return;"), u = typeof a[s] == "function"), k[t + "Bubbles"] = u
            }
        }
        f(function () {
            var a, b, d, e, g, h, i = 1,
                j = "position:absolute;top:0;left:0;width:1px;height:1px;margin:0;",
                l = "visibility:hidden;border:0;",
                n = "style='" + j + "border:5px solid #000;padding:0;'",
                p = "<div " + n + "><div></div></div><table " + n + " cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
            m = c.getElementsByTagName("body")[0];
            !m || (a = c.createElement("div"), a.style.cssText = l + "width:0;height:0;position:static;top:0;margin-top:" + i + "px", m.insertBefore(a, m.firstChild), o = c.createElement("div"), o.style.cssText = j + l, o.innerHTML = p, a.appendChild(o), b = o.firstChild, d = b.firstChild, g = b.nextSibling.firstChild.firstChild, h = {
                doesNotAddBorder: d.offsetTop !== 5,
                doesAddBorderForTableAndCells: g.offsetTop === 5
            }, d.style.position = "fixed", d.style.top = "20px", h.fixedPosition = d.offsetTop === 20 || d.offsetTop === 15, d.style.position = d.style.top = "", b.style.overflow = "hidden", b.style.position = "relative", h.subtractsBorderForOverflowNotVisible = d.offsetTop === -5, h.doesNotIncludeMarginInBodyOffset = m.offsetTop !== i, m.removeChild(a), o = a = null, f.extend(k, h))
        }), o.innerHTML = "", n.removeChild(o), o = l = g = h = m = j = a = i = null;
        return k
    }(), f.boxModel = f.support.boxModel;
    var j = /^(?:\{.*\}|\[.*\])$/,
        k = /([A-Z])/g;
    f.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + (f.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function (a) {
            a = a.nodeType ? f.cache[a[f.expando]] : a[f.expando];
            return !!a && !m(a)
        },
        data: function (a, c, d, e) {
            if ( !! f.acceptData(a)) {
                var g, h, i, j = f.expando,
                    k = typeof c == "string",
                    l = a.nodeType,
                    m = l ? f.cache : a,
                    n = l ? a[f.expando] : a[f.expando] && f.expando,
                    o = c === "events";
                if ((!n || !m[n] || !o && !e && !m[n].data) && k && d === b) {
                    return
                }
                n || (l ? a[f.expando] = n = ++f.uuid : n = f.expando), m[n] || (m[n] = {}, l || (m[n].toJSON = f.noop));
                if (typeof c == "object" || typeof c == "function") {
                    e ? m[n] = f.extend(m[n], c) : m[n].data = f.extend(m[n].data, c)
                }
                g = h = m[n], e || (h.data || (h.data = {}), h = h.data), d !== b && (h[f.camelCase(c)] = d);
                if (o && !h[c]) {
                    return g.events
                }
                k ? (i = h[c], i == null && (i = h[f.camelCase(c)])) : i = h;
                return i
            }
        },
        removeData: function (a, b, c) {
            if ( !! f.acceptData(a)) {
                var d, e, g, h = f.expando,
                    i = a.nodeType,
                    j = i ? f.cache : a,
                    k = i ? a[f.expando] : f.expando;
                if (!j[k]) {
                    return
                }
                if (b) {
                    d = c ? j[k] : j[k].data;
                    if (d) {
                        f.isArray(b) ? b = b : b in d ? b = [b] : (b = f.camelCase(b), b in d ? b = [b] : b = b.split(" "));
                        for (e = 0, g = b.length; e < g; e++) {
                            delete d[b[e]]
                        }
                        if (!(c ? m : f.isEmptyObject)(d)) {
                            return
                        }
                    }
                }
                if (!c) {
                    delete j[k].data;
                    if (!m(j[k])) {
                        return
                    }
                }
                f.support.deleteExpando || !j.setInterval ? delete j[k] : j[k] = null, i && (f.support.deleteExpando ? delete a[f.expando] : a.removeAttribute ? a.removeAttribute(f.expando) : a[f.expando] = null)
            }
        },
        _data: function (a, b, c) {
            return f.data(a, b, c, !0)
        },
        acceptData: function (a) {
            if (a.nodeName) {
                var b = f.noData[a.nodeName.toLowerCase()];
                if (b) {
                    return b !== !0 && a.getAttribute("classid") === b
                }
            }
            return !0
        }
    }), f.fn.extend({
        data: function (a, c) {
            var d, e, g, h = null;
            if (typeof a == "undefined") {
                if (this.length) {
                    h = f.data(this[0]);
                    if (this[0].nodeType === 1 && !f._data(this[0], "parsedAttrs")) {
                        e = this[0].attributes;
                        for (var i = 0, j = e.length; i < j; i++) {
                            g = e[i].name, g.indexOf("data-") === 0 && (g = f.camelCase(g.substring(5)), l(this[0], g, h[g]))
                        }
                        f._data(this[0], "parsedAttrs", !0)
                    }
                }
                return h
            }
            if (typeof a == "object") {
                return this.each(function () {
                    f.data(this, a)
                })
            }
            d = a.split("."), d[1] = d[1] ? "." + d[1] : "";
            if (c === b) {
                h = this.triggerHandler("getData" + d[1] + "!", [d[0]]), h === b && this.length && (h = f.data(this[0], a), h = l(this[0], a, h));
                return h === b && d[1] ? this.data(d[0]) : h
            }
            return this.each(function () {
                var b = f(this),
                    e = [d[0], c];
                b.triggerHandler("setData" + d[1] + "!", e), f.data(this, a, c), b.triggerHandler("changeData" + d[1] + "!", e)
            })
        },
        removeData: function (a) {
            return this.each(function () {
                f.removeData(this, a)
            })
        }
    }), f.extend({
        _mark: function (a, b) {
            a && (b = (b || "fx") + "mark", f._data(a, b, (f._data(a, b) || 0) + 1))
        },
        _unmark: function (a, b, c) {
            a !== !0 && (c = b, b = a, a = !1);
            if (b) {
                c = c || "fx";
                var d = c + "mark",
                    e = a ? 0 : (f._data(b, d) || 1) - 1;
                e ? f._data(b, d, e) : (f.removeData(b, d, !0), n(b, c, "mark"))
            }
        },
        queue: function (a, b, c) {
            var d;
            if (a) {
                b = (b || "fx") + "queue", d = f._data(a, b), c && (!d || f.isArray(c) ? d = f._data(a, b, f.makeArray(c)) : d.push(c));
                return d || []
            }
        },
        dequeue: function (a, b) {
            b = b || "fx";
            var c = f.queue(a, b),
                d = c.shift(),
                e = {};
            d === "inprogress" && (d = c.shift()), d && (b === "fx" && c.unshift("inprogress"), f._data(a, b + ".run", e), d.call(a, function () {
                f.dequeue(a, b)
            }, e)), c.length || (f.removeData(a, b + "queue " + b + ".run", !0), n(a, b, "queue"))
        }
    }), f.fn.extend({
        queue: function (a, c) {
            typeof a != "string" && (c = a, a = "fx");
            if (c === b) {
                return f.queue(this[0], a)
            }
            return this.each(function () {
                var b = f.queue(this, a, c);
                a === "fx" && b[0] !== "inprogress" && f.dequeue(this, a)
            })
        },
        dequeue: function (a) {
            return this.each(function () {
                f.dequeue(this, a)
            })
        },
        delay: function (a, b) {
            a = f.fx ? f.fx.speeds[a] || a : a, b = b || "fx";
            return this.queue(b, function (b, c) {
                var d = setTimeout(b, a);
                c.stop = function () {
                    clearTimeout(d)
                }
            })
        },
        clearQueue: function (a) {
            return this.queue(a || "fx", [])
        },
        promise: function (a, c) {
            function m() {
                --h || d.resolveWith(e, [e])
            }
            typeof a != "string" && (c = a, a = b), a = a || "fx";
            var d = f.Deferred(),
                e = this,
                g = e.length,
                h = 1,
                i = a + "defer",
                j = a + "queue",
                k = a + "mark",
                l;
            while (g--) {
                if (l = f.data(e[g], i, b, !0) || (f.data(e[g], j, b, !0) || f.data(e[g], k, b, !0)) && f.data(e[g], i, f.Callbacks("once memory"), !0)) {
                    h++, l.add(m)
                }
            }
            m();
            return d.promise()
        }
    });
    var o = /[\n\t\r]/g,
        p = /\s+/,
        q = /\r/g,
        r = /^(?:button|input)$/i,
        s = /^(?:button|input|object|select|textarea)$/i,
        t = /^a(?:rea)?$/i,
        u = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        v = f.support.getSetAttribute,
        w, x, y;
    f.fn.extend({
        attr: function (a, b) {
            return f.access(this, a, b, !0, f.attr)
        },
        removeAttr: function (a) {
            return this.each(function () {
                f.removeAttr(this, a)
            })
        },
        prop: function (a, b) {
            return f.access(this, a, b, !0, f.prop)
        },
        removeProp: function (a) {
            a = f.propFix[a] || a;
            return this.each(function () {
                try {
                    this[a] = b, delete this[a]
                } catch (c) {}
            })
        },
        addClass: function (a) {
            var b, c, d, e, g, h, i;
            if (f.isFunction(a)) {
                return this.each(function (b) {
                    f(this).addClass(a.call(this, b, this.className))
                })
            }
            if (a && typeof a == "string") {
                b = a.split(p);
                for (c = 0, d = this.length; c < d; c++) {
                    e = this[c];
                    if (e.nodeType === 1) {
                        if (!e.className && b.length === 1) {
                            e.className = a
                        } else {
                            g = " " + e.className + " ";
                            for (h = 0, i = b.length; h < i; h++) {~g.indexOf(" " + b[h] + " ") || (g += b[h] + " ")
                            }
                            e.className = f.trim(g)
                        }
                    }
                }
            }
            return this
        },
        removeClass: function (a) {
            var c, d, e, g, h, i, j;
            if (f.isFunction(a)) {
                return this.each(function (b) {
                    f(this).removeClass(a.call(this, b, this.className))
                })
            }
            if (a && typeof a == "string" || a === b) {
                c = (a || "").split(p);
                for (d = 0, e = this.length; d < e; d++) {
                    g = this[d];
                    if (g.nodeType === 1 && g.className) {
                        if (a) {
                            h = (" " + g.className + " ").replace(o, " ");
                            for (i = 0, j = c.length; i < j; i++) {
                                h = h.replace(" " + c[i] + " ", " ")
                            }
                            g.className = f.trim(h)
                        } else {
                            g.className = ""
                        }
                    }
                }
            }
            return this
        },
        toggleClass: function (a, b) {
            var c = typeof a,
                d = typeof b == "boolean";
            if (f.isFunction(a)) {
                return this.each(function (c) {
                    f(this).toggleClass(a.call(this, c, this.className, b), b)
                })
            }
            return this.each(function () {
                if (c === "string") {
                    var e, g = 0,
                        h = f(this),
                        i = b,
                        j = a.split(p);
                    while (e = j[g++]) {
                        i = d ? i : !h.hasClass(e), h[i ? "addClass" : "removeClass"](e)
                    }
                } else {
                    if (c === "undefined" || c === "boolean") {
                        this.className && f._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : f._data(this, "__className__") || ""
                    }
                }
            })
        },
        hasClass: function (a) {
            var b = " " + a + " ",
                c = 0,
                d = this.length;
            for (; c < d; c++) {
                if (this[c].nodeType === 1 && (" " + this[c].className + " ").replace(o, " ").indexOf(b) > -1) {
                    return !0
                }
            }
            return !1
        },
        val: function (a) {
            var c, d, e, g = this[0];
            if (!arguments.length) {
                if (g) {
                    c = f.valHooks[g.nodeName.toLowerCase()] || f.valHooks[g.type];
                    if (c && "get" in c && (d = c.get(g, "value")) !== b) {
                        return d
                    }
                    d = g.value;
                    return typeof d == "string" ? d.replace(q, "") : d == null ? "" : d
                }
                return b
            }
            e = f.isFunction(a);
            return this.each(function (d) {
                var g = f(this),
                    h;
                if (this.nodeType === 1) {
                    e ? h = a.call(this, d, g.val()) : h = a, h == null ? h = "" : typeof h == "number" ? h += "" : f.isArray(h) && (h = f.map(h, function (a) {
                        return a == null ? "" : a + ""
                    })), c = f.valHooks[this.nodeName.toLowerCase()] || f.valHooks[this.type];
                    if (!c || !("set" in c) || c.set(this, h, "value") === b) {
                        this.value = h
                    }
                }
            })
        }
    }), f.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var b = a.attributes.value;
                    return !b || b.specified ? a.value : a.text
                }
            },
            select: {
                get: function (a) {
                    var b, c, d, e, g = a.selectedIndex,
                        h = [],
                        i = a.options,
                        j = a.type === "select-one";
                    if (g < 0) {
                        return null
                    }
                    c = j ? g : 0, d = j ? g + 1 : i.length;
                    for (; c < d; c++) {
                        e = i[c];
                        if (e.selected && (f.support.optDisabled ? !e.disabled : e.getAttribute("disabled") === null) && (!e.parentNode.disabled || !f.nodeName(e.parentNode, "optgroup"))) {
                            b = f(e).val();
                            if (j) {
                                return b
                            }
                            h.push(b)
                        }
                    }
                    if (j && !h.length && i.length) {
                        return f(i[g]).val()
                    }
                    return h
                },
                set: function (a, b) {
                    var c = f.makeArray(b);
                    f(a).find("option").each(function () {
                        this.selected = f.inArray(f(this).val(), c) >= 0
                    }), c.length || (a.selectedIndex = -1);
                    return c
                }
            }
        },
        attrFn: {
            val: !0,
            css: !0,
            html: !0,
            text: !0,
            data: !0,
            width: !0,
            height: !0,
            offset: !0
        },
        attr: function (a, c, d, e) {
            var g, h, i, j = a.nodeType;
            if (!a || j === 3 || j === 8 || j === 2) {
                return b
            }
            if (e && c in f.attrFn) {
                return f(a)[c](d)
            }
            if (!("getAttribute" in a)) {
                return f.prop(a, c, d)
            }
            i = j !== 1 || !f.isXMLDoc(a), i && (c = c.toLowerCase(), h = f.attrHooks[c] || (u.test(c) ? x : w));
            if (d !== b) {
                if (d === null) {
                    f.removeAttr(a, c);
                    return b
                }
                if (h && "set" in h && i && (g = h.set(a, d, c)) !== b) {
                    return g
                }
                a.setAttribute(c, "" + d);
                return d
            }
            if (h && "get" in h && i && (g = h.get(a, c)) !== null) {
                return g
            }
            g = a.getAttribute(c);
            return g === null ? b : g
        },
        removeAttr: function (a, b) {
            var c, d, e, g, h = 0;
            if (a.nodeType === 1) {
                d = (b || "").split(p), g = d.length;
                for (; h < g; h++) {
                    e = d[h].toLowerCase(), c = f.propFix[e] || e, f.attr(a, e, ""), a.removeAttribute(v ? e : c), u.test(e) && c in a && (a[c] = !1)
                }
            }
        },
        attrHooks: {
            type: {
                set: function (a, b) {
                    if (r.test(a.nodeName) && a.parentNode) {
                        f.error("type property can't be changed")
                    } else {
                        if (!f.support.radioValue && b === "radio" && f.nodeName(a, "input")) {
                            var c = a.value;
                            a.setAttribute("type", b), c && (a.value = c);
                            return b
                        }
                    }
                }
            },
            value: {
                get: function (a, b) {
                    if (w && f.nodeName(a, "button")) {
                        return w.get(a, b)
                    }
                    return b in a ? a.value : null
                },
                set: function (a, b, c) {
                    if (w && f.nodeName(a, "button")) {
                        return w.set(a, b, c)
                    }
                    a.value = b
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function (a, c, d) {
            var e, g, h, i = a.nodeType;
            if (!a || i === 3 || i === 8 || i === 2) {
                return b
            }
            h = i !== 1 || !f.isXMLDoc(a), h && (c = f.propFix[c] || c, g = f.propHooks[c]);
            return d !== b ? g && "set" in g && (e = g.set(a, d, c)) !== b ? e : a[c] = d : g && "get" in g && (e = g.get(a, c)) !== null ? e : a[c]
        },
        propHooks: {
            tabIndex: {
                get: function (a) {
                    var c = a.getAttributeNode("tabindex");
                    return c && c.specified ? parseInt(c.value, 10) : s.test(a.nodeName) || t.test(a.nodeName) && a.href ? 0 : b
                }
            }
        }
    }), f.attrHooks.tabindex = f.propHooks.tabIndex, x = {
        get: function (a, c) {
            var d, e = f.prop(a, c);
            return e === !0 || typeof e != "boolean" && (d = a.getAttributeNode(c)) && d.nodeValue !== !1 ? c.toLowerCase() : b
        },
        set: function (a, b, c) {
            var d;
            b === !1 ? f.removeAttr(a, c) : (d = f.propFix[c] || c, d in a && (a[d] = !0), a.setAttribute(c, c.toLowerCase()));
            return c
        }
    }, v || (y = {
        name: !0,
        id: !0
    }, w = f.valHooks.button = {
        get: function (a, c) {
            var d;
            d = a.getAttributeNode(c);
            return d && (y[c] ? d.nodeValue !== "" : d.specified) ? d.nodeValue : b
        },
        set: function (a, b, d) {
            var e = a.getAttributeNode(d);
            e || (e = c.createAttribute(d), a.setAttributeNode(e));
            return e.nodeValue = b + ""
        }
    }, f.attrHooks.tabindex.set = w.set, f.each(["width", "height"], function (a, b) {
        f.attrHooks[b] = f.extend(f.attrHooks[b], {
            set: function (a, c) {
                if (c === "") {
                    a.setAttribute(b, "auto");
                    return c
                }
            }
        })
    }), f.attrHooks.contenteditable = {
        get: w.get,
        set: function (a, b, c) {
            b === "" && (b = "false"), w.set(a, b, c)
        }
    }), f.support.hrefNormalized || f.each(["href", "src", "width", "height"], function (a, c) {
        f.attrHooks[c] = f.extend(f.attrHooks[c], {
            get: function (a) {
                var d = a.getAttribute(c, 2);
                return d === null ? b : d
            }
        })
    }), f.support.style || (f.attrHooks.style = {
        get: function (a) {
            return a.style.cssText.toLowerCase() || b
        },
        set: function (a, b) {
            return a.style.cssText = "" + b
        }
    }), f.support.optSelected || (f.propHooks.selected = f.extend(f.propHooks.selected, {
        get: function (a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
            return null
        }
    })), f.support.enctype || (f.propFix.enctype = "encoding"), f.support.checkOn || f.each(["radio", "checkbox"], function () {
        f.valHooks[this] = {
            get: function (a) {
                return a.getAttribute("value") === null ? "on" : a.value
            }
        }
    }), f.each(["radio", "checkbox"], function () {
        f.valHooks[this] = f.extend(f.valHooks[this], {
            set: function (a, b) {
                if (f.isArray(b)) {
                    return a.checked = f.inArray(f(a).val(), b) >= 0
                }
            }
        })
    });
    var z = /\.(.*)$/,
        A = /^(?:textarea|input|select)$/i,
        B = /\./g,
        C = / /g,
        D = /[^\w\s.|`]/g,
        E = /^([^\.]*)?(?:\.(.+))?$/,
        F = /\bhover(\.\S+)?/,
        G = /^key/,
        H = /^(?:mouse|contextmenu)|click/,
        I = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,
        J = function (a) {
            var b = I.exec(a);
            b && (b[1] = (b[1] || "").toLowerCase(), b[3] = b[3] && new RegExp("(?:^|\\s)" + b[3] + "(?:\\s|$)"));
            return b
        },
        K = function (a, b) {
            return (!b[1] || a.nodeName.toLowerCase() === b[1]) && (!b[2] || a.id === b[2]) && (!b[3] || b[3].test(a.className))
        },
        L = function (a) {
            return f.event.special.hover ? a : a.replace(F, "mouseenter$1 mouseleave$1")
        };
    f.event = {
        add: function (a, c, d, e, g) {
            var h, i, j, k, l, m, n, o, p, q, r, s;
            if (!(a.nodeType === 3 || a.nodeType === 8 || !c || !d || !(h = f._data(a)))) {
                d.handler && (p = d, d = p.handler), d.guid || (d.guid = f.guid++), j = h.events, j || (h.events = j = {}), i = h.handle, i || (h.handle = i = function (a) {
                    return typeof f != "undefined" && (!a || f.event.triggered !== a.type) ? f.event.dispatch.apply(i.elem, arguments) : b
                }, i.elem = a), c = L(c).split(" ");
                for (k = 0; k < c.length; k++) {
                    l = E.exec(c[k]) || [], m = l[1], n = (l[2] || "").split(".").sort(), s = f.event.special[m] || {}, m = (g ? s.delegateType : s.bindType) || m, s = f.event.special[m] || {}, o = f.extend({
                        type: m,
                        origType: l[1],
                        data: e,
                        handler: d,
                        guid: d.guid,
                        selector: g,
                        namespace: n.join(".")
                    }, p), g && (o.quick = J(g), !o.quick && f.expr.match.POS.test(g) && (o.isPositional = !0)), r = j[m];
                    if (!r) {
                        r = j[m] = [], r.delegateCount = 0;
                        if (!s.setup || s.setup.call(a, e, n, i) === !1) {
                            a.addEventListener ? a.addEventListener(m, i, !1) : a.attachEvent && a.attachEvent("on" + m, i)
                        }
                    }
                    s.add && (s.add.call(a, o), o.handler.guid || (o.handler.guid = d.guid)), g ? r.splice(r.delegateCount++, 0, o) : r.push(o), f.event.global[m] = !0
                }
                a = null
            }
        },
        global: {},
        remove: function (a, b, c, d) {
            var e = f.hasData(a) && f._data(a),
                g, h, i, j, k, l, m, n, o, p, q;
            if ( !! e && !! (m = e.events)) {
                b = L(b || "").split(" ");
                for (g = 0; g < b.length; g++) {
                    h = E.exec(b[g]) || [], i = h[1], j = h[2];
                    if (!i) {
                        j = j ? "." + j : "";
                        for (l in m) {
                            f.event.remove(a, l + j, c, d)
                        }
                        return
                    }
                    n = f.event.special[i] || {}, i = (d ? n.delegateType : n.bindType) || i, p = m[i] || [], k = p.length, j = j ? new RegExp("(^|\\.)" + j.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null;
                    if (c || j || d || n.remove) {
                        for (l = 0; l < p.length; l++) {
                            q = p[l];
                            if (!c || c.guid === q.guid) {
                                if (!j || j.test(q.namespace)) {
                                    if (!d || d === q.selector || d === "**" && q.selector) {
                                        p.splice(l--, 1), q.selector && p.delegateCount--, n.remove && n.remove.call(a, q)
                                    }
                                }
                            }
                        }
                    } else {
                        p.length = 0
                    }
                    p.length === 0 && k !== p.length && ((!n.teardown || n.teardown.call(a, j) === !1) && f.removeEvent(a, i, e.handle), delete m[i])
                }
                f.isEmptyObject(m) && (o = e.handle, o && (o.elem = null), f.removeData(a, ["events", "handle"], !0))
            }
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function (c, d, e, g) {
            if (!e || e.nodeType !== 3 && e.nodeType !== 8) {
                var h = c.type || c,
                    i = [],
                    j, k, l, m, n, o, p, q, r, s;
                h.indexOf("!") >= 0 && (h = h.slice(0, -1), k = !0), h.indexOf(".") >= 0 && (i = h.split("."), h = i.shift(), i.sort());
                if ((!e || f.event.customEvent[h]) && !f.event.global[h]) {
                    return
                }
                c = typeof c == "object" ? c[f.expando] ? c : new f.Event(h, c) : new f.Event(h), c.type = h, c.isTrigger = !0, c.exclusive = k, c.namespace = i.join("."), c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + i.join("\\.(?:.*\\.)?") + "(\\.|$)") : null, o = h.indexOf(":") < 0 ? "on" + h : "", (g || !e) && c.preventDefault();
                if (!e) {
                    j = f.cache;
                    for (l in j) {
                        j[l].events && j[l].events[h] && f.event.trigger(c, d, j[l].handle.elem, !0)
                    }
                    return
                }
                c.result = b, c.target || (c.target = e), d = d != null ? f.makeArray(d) : [], d.unshift(c), p = f.event.special[h] || {};
                if (p.trigger && p.trigger.apply(e, d) === !1) {
                    return
                }
                r = [
                    [e, p.bindType || h]
                ];
                if (!g && !p.noBubble && !f.isWindow(e)) {
                    s = p.delegateType || h, n = null;
                    for (m = e.parentNode; m; m = m.parentNode) {
                        r.push([m, s]), n = m
                    }
                    n && n === e.ownerDocument && r.push([n.defaultView || n.parentWindow || a, s])
                }
                for (l = 0; l < r.length; l++) {
                    m = r[l][0], c.type = r[l][1], q = (f._data(m, "events") || {})[c.type] && f._data(m, "handle"), q && q.apply(m, d), q = o && m[o], q && f.acceptData(m) && q.apply(m, d);
                    if (c.isPropagationStopped()) {
                        break
                    }
                }
                c.type = h, c.isDefaultPrevented() || (!p._default || p._default.apply(e.ownerDocument, d) === !1) && (h !== "click" || !f.nodeName(e, "a")) && f.acceptData(e) && o && e[h] && (h !== "focus" && h !== "blur" || c.target.offsetWidth !== 0) && !f.isWindow(e) && (n = e[o], n && (e[o] = null), f.event.triggered = h, e[h](), f.event.triggered = b, n && (e[o] = n));
                return c.result
            }
        },
        dispatch: function (c) {
            c = f.event.fix(c || a.event);
            var d = (f._data(this, "events") || {})[c.type] || [],
                e = d.delegateCount,
                g = [].slice.call(arguments, 0),
                h = !c.exclusive && !c.namespace,
                i = (f.event.special[c.type] || {}).handle,
                j = [],
                k, l, m, n, o, p, q, r, s, t, u;
            g[0] = c, c.delegateTarget = this;
            if (e && !c.target.disabled && (!c.button || c.type !== "click")) {
                for (m = c.target; m != this; m = m.parentNode || this) {
                    o = {}, q = [];
                    for (k = 0; k < e; k++) {
                        r = d[k], s = r.selector, t = o[s], r.isPositional ? t = (t || (o[s] = f(s))).index(m) >= 0 : t === b && (t = o[s] = r.quick ? K(m, r.quick) : f(m).is(s)), t && q.push(r)
                    }
                    q.length && j.push({
                        elem: m,
                        matches: q
                    })
                }
            }
            d.length > e && j.push({
                elem: this,
                matches: d.slice(e)
            });
            for (k = 0; k < j.length && !c.isPropagationStopped(); k++) {
                p = j[k], c.currentTarget = p.elem;
                for (l = 0; l < p.matches.length && !c.isImmediatePropagationStopped(); l++) {
                    r = p.matches[l];
                    if (h || !c.namespace && !r.namespace || c.namespace_re && c.namespace_re.test(r.namespace)) {
                        c.data = r.data, c.handleObj = r, n = (i || r.handler).apply(p.elem, g), n !== b && (c.result = n, n === !1 && (c.preventDefault(), c.stopPropagation()))
                    }
                }
            }
            return c.result
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (a, b) {
                a.which == null && (a.which = b.charCode != null ? b.charCode : b.keyCode);
                return a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement wheelDelta".split(" "),
            filter: function (a, d) {
                var e, f, g, h = d.button,
                    i = d.fromElement;
                a.pageX == null && d.clientX != null && (e = a.target.ownerDocument || c, f = e.documentElement, g = e.body, a.pageX = d.clientX + (f && f.scrollLeft || g && g.scrollLeft || 0) - (f && f.clientLeft || g && g.clientLeft || 0), a.pageY = d.clientY + (f && f.scrollTop || g && g.scrollTop || 0) - (f && f.clientTop || g && g.clientTop || 0)), !a.relatedTarget && i && (a.relatedTarget = i === a.target ? d.toElement : i), !a.which && h !== b && (a.which = h & 1 ? 1 : h & 2 ? 3 : h & 4 ? 2 : 0);
                return a
            }
        },
        fix: function (a) {
            if (a[f.expando]) {
                return a
            }
            var d, e, g = a,
                h = f.event.fixHooks[a.type] || {},
                i = h.props ? this.props.concat(h.props) : this.props;
            a = f.Event(g);
            for (d = i.length; d;) {
                e = i[--d], a[e] = g[e]
            }
            a.target || (a.target = g.srcElement || c), a.target.nodeType === 3 && (a.target = a.target.parentNode), a.metaKey === b && (a.metaKey = a.ctrlKey);
            return h.filter ? h.filter(a, g) : a
        },
        special: {
            ready: {
                setup: f.bindReady
            },
            focus: {
                delegateType: "focusin",
                noBubble: !0
            },
            blur: {
                delegateType: "focusout",
                noBubble: !0
            },
            beforeunload: {
                setup: function (a, b, c) {
                    f.isWindow(this) && (this.onbeforeunload = c)
                },
                teardown: function (a, b) {
                    this.onbeforeunload === b && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function (a, b, c, d) {
            var e = f.extend(new f.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? f.event.trigger(e, null, b) : f.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, f.event.handle = f.event.dispatch, f.removeEvent = c.removeEventListener ?
    function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    } : function (a, b, c) {
        a.detachEvent && a.detachEvent("on" + b, c)
    }, f.Event = function (a, b) {
        if (!(this instanceof f.Event)) {
            return new f.Event(a, b)
        }
        a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? N : M) : this.type = a, b && f.extend(this, b), this.timeStamp = a && a.timeStamp || f.now(), this[f.expando] = !0
    }, f.Event.prototype = {
        preventDefault: function () {
            this.isDefaultPrevented = N;
            var a = this.originalEvent;
            !a || (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function () {
            this.isPropagationStopped = N;
            var a = this.originalEvent;
            !a || (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = N, this.stopPropagation()
        },
        isDefaultPrevented: M,
        isPropagationStopped: M,
        isImmediatePropagationStopped: M
    }, f.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function (a, b) {
        f.event.special[a] = f.event.special[b] = {
            delegateType: b,
            bindType: b,
            handle: function (a) {
                var b = this,
                    c = a.relatedTarget,
                    d = a.handleObj,
                    e = d.selector,
                    g, h;
                if (!c || d.origType === a.type || c !== b && !f.contains(b, c)) {
                    g = a.type, a.type = d.origType, h = d.handler.apply(this, arguments), a.type = g
                }
                return h
            }
        }
    }), f.support.submitBubbles || (f.event.special.submit = {
        setup: function () {
            if (f.nodeName(this, "form")) {
                return !1
            }
            f.event.add(this, "click._submit keypress._submit", function (a) {
                var c = a.target,
                    d = f.nodeName(c, "input") || f.nodeName(c, "button") ? c.form : b;
                d && !d._submit_attached && (f.event.add(d, "submit._submit", function (a) {
                    this.parentNode && f.event.simulate("submit", this.parentNode, a, !0)
                }), d._submit_attached = !0)
            })
        },
        teardown: function () {
            if (f.nodeName(this, "form")) {
                return !1
            }
            f.event.remove(this, "._submit")
        }
    }), f.support.changeBubbles || (f.event.special.change = {
        setup: function () {
            if (A.test(this.nodeName)) {
                if (this.type === "checkbox" || this.type === "radio") {
                    f.event.add(this, "propertychange._change", function (a) {
                        a.originalEvent.propertyName === "checked" && (this._just_changed = !0)
                    }), f.event.add(this, "click._change", function (a) {
                        this._just_changed && (this._just_changed = !1, f.event.simulate("change", this, a, !0))
                    })
                }
                return !1
            }
            f.event.add(this, "beforeactivate._change", function (a) {
                var b = a.target;
                A.test(b.nodeName) && !b._change_attached && (f.event.add(b, "change._change", function (a) {
                    this.parentNode && !a.isSimulated && f.event.simulate("change", this.parentNode, a, !0)
                }), b._change_attached = !0)
            })
        },
        handle: function (a) {
            var b = a.target;
            if (this !== b || a.isSimulated || a.isTrigger || b.type !== "radio" && b.type !== "checkbox") {
                return a.handleObj.handler.apply(this, arguments)
            }
        },
        teardown: function () {
            f.event.remove(this, "._change");
            return A.test(this.nodeName)
        }
    }), f.support.focusinBubbles || f.each({
        focus: "focusin",
        blur: "focusout"
    }, function (a, b) {
        var d = 0,
            e = function (a) {
                f.event.simulate(b, a.target, f.event.fix(a), !0)
            };
        f.event.special[b] = {
            setup: function () {
                d++ === 0 && c.addEventListener(a, e, !0)
            },
            teardown: function () {
                --d === 0 && c.removeEventListener(a, e, !0)
            }
        }
    }), f.fn.extend({
        on: function (a, c, d, e, g) {
            var h, i;
            if (typeof a == "object") {
                typeof c != "string" && (d = c, c = b);
                for (i in a) {
                    this.on(i, c, d, a[i], g)
                }
                return this
            }
            d == null && e == null ? (e = c, d = c = b) : e == null && (typeof c == "string" ? (e = d, d = b) : (e = d, d = c, c = b));
            if (e === !1) {
                e = M
            } else {
                if (!e) {
                    return this
                }
            }
            g === 1 && (h = e, e = function (a) {
                f().off(a);
                return h.apply(this, arguments)
            }, e.guid = h.guid || (h.guid = f.guid++));
            return this.each(function () {
                f.event.add(this, a, e, d, c)
            })
        },
        one: function (a, b, c, d) {
            return this.on.call(this, a, b, c, d, 1)
        },
        off: function (a, c, d) {
            if (a && a.preventDefault && a.handleObj) {
                var e = a.handleObj;
                f(a.delegateTarget).off(e.namespace ? e.type + "." + e.namespace : e.type, e.selector, e.handler);
                return this
            }
            if (typeof a == "object") {
                for (var g in a) {
                    this.off(g, c, a[g])
                }
                return this
            }
            if (c === !1 || typeof c == "function") {
                d = c, c = b
            }
            d === !1 && (d = M);
            return this.each(function () {
                f.event.remove(this, a, d, c)
            })
        },
        bind: function (a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function (a, b) {
            return this.off(a, null, b)
        },
        live: function (a, b, c) {
            f(this.context).on(a, this.selector, b, c);
            return this
        },
        die: function (a, b) {
            f(this.context).off(a, this.selector || "**", b);
            return this
        },
        delegate: function (a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function (a, b, c) {
            return arguments.length == 1 ? this.off(a, "**") : this.off(b, a, c)
        },
        trigger: function (a, b) {
            return this.each(function () {
                f.event.trigger(a, b, this)
            })
        },
        triggerHandler: function (a, b) {
            if (this[0]) {
                return f.event.trigger(a, b, this[0], !0)
            }
        },
        toggle: function (a) {
            var b = arguments,
                c = a.guid || f.guid++,
                d = 0,
                e = function (c) {
                    var e = (f._data(this, "lastToggle" + a.guid) || 0) % d;
                    f._data(this, "lastToggle" + a.guid, e + 1), c.preventDefault();
                    return b[e].apply(this, arguments) || !1
                };
            e.guid = c;
            while (d < b.length) {
                b[d++].guid = c
            }
            return this.click(e)
        },
        hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    }), f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
        f.fn[b] = function (a, c) {
            c == null && (c = a, a = null);
            return arguments.length > 0 ? this.bind(b, a, c) : this.trigger(b)
        }, f.attrFn && (f.attrFn[b] = !0), G.test(b) && (f.event.fixHooks[b] = f.event.keyHooks), H.test(b) && (f.event.fixHooks[b] = f.event.mouseHooks)
    }), function () {
        function x(a, b, c, e, f, g) {
            for (var h = 0, i = e.length; h < i; h++) {
                var j = e[h];
                if (j) {
                    var k = !1;
                    j = j[a];
                    while (j) {
                        if (j[d] === c) {
                            k = e[j.sizset];
                            break
                        }
                        if (j.nodeType === 1) {
                            g || (j[d] = c, j.sizset = h);
                            if (typeof b != "string") {
                                if (j === b) {
                                    k = !0;
                                    break
                                }
                            } else {
                                if (m.filter(b, [j]).length > 0) {
                                    k = j;
                                    break
                                }
                            }
                        }
                        j = j[a]
                    }
                    e[h] = k
                }
            }
        }
        function w(a, b, c, e, f, g) {
            for (var h = 0, i = e.length; h < i; h++) {
                var j = e[h];
                if (j) {
                    var k = !1;
                    j = j[a];
                    while (j) {
                        if (j[d] === c) {
                            k = e[j.sizset];
                            break
                        }
                        j.nodeType === 1 && !g && (j[d] = c, j.sizset = h);
                        if (j.nodeName.toLowerCase() === b) {
                            k = j;
                            break
                        }
                        j = j[a]
                    }
                    e[h] = k
                }
            }
        }
        var a = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
            d = "sizcache" + (Math.random() + "").replace(".", ""),
            e = 0,
            g = Object.prototype.toString,
            h = !1,
            i = !0,
            j = /\\/g,
            k = /\r\n/g,
            l = /\W/;
        [0, 0].sort(function () {
            i = !1;
            return 0
        });
        var m = function (b, d, e, f) {
                e = e || [], d = d || c;
                var h = d;
                if (d.nodeType !== 1 && d.nodeType !== 9) {
                    return []
                }
                if (!b || typeof b != "string") {
                    return e
                }
                var i, j, k, l, n, q, r, t, u = !0,
                    v = m.isXML(d),
                    w = [],
                    x = b;
                do {
                    a.exec(""), i = a.exec(x);
                    if (i) {
                        x = i[3], w.push(i[1]);
                        if (i[2]) {
                            l = i[3];
                            break
                        }
                    }
                } while (i);
                if (w.length > 1 && p.exec(b)) {
                    if (w.length === 2 && o.relative[w[0]]) {
                        j = y(w[0] + w[1], d, f)
                    } else {
                        j = o.relative[w[0]] ? [d] : m(w.shift(), d);
                        while (w.length) {
                            b = w.shift(), o.relative[b] && (b += w.shift()), j = y(b, j, f)
                        }
                    }
                } else {
                    !f && w.length > 1 && d.nodeType === 9 && !v && o.match.ID.test(w[0]) && !o.match.ID.test(w[w.length - 1]) && (n = m.find(w.shift(), d, v), d = n.expr ? m.filter(n.expr, n.set)[0] : n.set[0]);
                    if (d) {
                        n = f ? {
                            expr: w.pop(),
                            set: s(f)
                        } : m.find(w.pop(), w.length === 1 && (w[0] === "~" || w[0] === "+") && d.parentNode ? d.parentNode : d, v), j = n.expr ? m.filter(n.expr, n.set) : n.set, w.length > 0 ? k = s(j) : u = !1;
                        while (w.length) {
                            q = w.pop(), r = q, o.relative[q] ? r = w.pop() : q = "", r == null && (r = d), o.relative[q](k, r, v)
                        }
                    } else {
                        k = w = []
                    }
                }
                k || (k = j), k || m.error(q || b);
                if (g.call(k) === "[object Array]") {
                    if (!u) {
                        e.push.apply(e, k)
                    } else {
                        if (d && d.nodeType === 1) {
                            for (t = 0; k[t] != null; t++) {
                                k[t] && (k[t] === !0 || k[t].nodeType === 1 && m.contains(d, k[t])) && e.push(j[t])
                            }
                        } else {
                            for (t = 0; k[t] != null; t++) {
                                k[t] && k[t].nodeType === 1 && e.push(j[t])
                            }
                        }
                    }
                } else {
                    s(k, e)
                }
                l && (m(l, h, e, f), m.uniqueSort(e));
                return e
            };
        m.uniqueSort = function (a) {
            if (u) {
                h = i, a.sort(u);
                if (h) {
                    for (var b = 1; b < a.length; b++) {
                        a[b] === a[b - 1] && a.splice(b--, 1)
                    }
                }
            }
            return a
        }, m.matches = function (a, b) {
            return m(a, null, null, b)
        }, m.matchesSelector = function (a, b) {
            return m(b, null, null, [a]).length > 0
        }, m.find = function (a, b, c) {
            var d, e, f, g, h, i;
            if (!a) {
                return []
            }
            for (e = 0, f = o.order.length; e < f; e++) {
                h = o.order[e];
                if (g = o.leftMatch[h].exec(a)) {
                    i = g[1], g.splice(1, 1);
                    if (i.substr(i.length - 1) !== "\\") {
                        g[1] = (g[1] || "").replace(j, ""), d = o.find[h](g, b, c);
                        if (d != null) {
                            a = a.replace(o.match[h], "");
                            break
                        }
                    }
                }
            }
            d || (d = typeof b.getElementsByTagName != "undefined" ? b.getElementsByTagName("*") : []);
            return {
                set: d,
                expr: a
            }
        }, m.filter = function (a, c, d, e) {
            var f, g, h, i, j, k, l, n, p, q = a,
                r = [],
                s = c,
                t = c && c[0] && m.isXML(c[0]);
            while (a && c.length) {
                for (h in o.filter) {
                    if ((f = o.leftMatch[h].exec(a)) != null && f[2]) {
                        k = o.filter[h], l = f[1], g = !1, f.splice(1, 1);
                        if (l.substr(l.length - 1) === "\\") {
                            continue
                        }
                        s === r && (r = []);
                        if (o.preFilter[h]) {
                            f = o.preFilter[h](f, s, d, r, e, t);
                            if (!f) {
                                g = i = !0
                            } else {
                                if (f === !0) {
                                    continue
                                }
                            }
                        }
                        if (f) {
                            for (n = 0;
                            (j = s[n]) != null; n++) {
                                j && (i = k(j, f, n, s), p = e ^ i, d && i != null ? p ? g = !0 : s[n] = !1 : p && (r.push(j), g = !0))
                            }
                        }
                        if (i !== b) {
                            d || (s = r), a = a.replace(o.match[h], "");
                            if (!g) {
                                return []
                            }
                            break
                        }
                    }
                }
                if (a === q) {
                    if (g == null) {
                        m.error(a)
                    } else {
                        break
                    }
                }
                q = a
            }
            return s
        }, m.error = function (a) {
            throw "Syntax error, unrecognized expression: " + a
        };
        var n = m.getText = function (a) {
                var b, c, d = a.nodeType,
                    e = "";
                if (d) {
                    if (d === 1) {
                        if (typeof a.textContent == "string") {
                            return a.textContent
                        }
                        if (typeof a.innerText == "string") {
                            return a.innerText.replace(k, "")
                        }
                        for (a = a.firstChild; a; a = a.nextSibling) {
                            e += n(a)
                        }
                    } else {
                        if (d === 3 || d === 4) {
                            return a.nodeValue
                        }
                    }
                } else {
                    for (b = 0; c = a[b]; b++) {
                        c.nodeType !== 8 && (e += n(c))
                    }
                }
                return e
            },
            o = m.selectors = {
                order: ["ID", "NAME", "TAG"],
                match: {
                    ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                    CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                    NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                    ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                    TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                    CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                    POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                    PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
                },
                leftMatch: {},
                attrMap: {
                    "class": "className",
                    "for": "htmlFor"
                },
                attrHandle: {
                    href: function (a) {
                        return a.getAttribute("href")
                    },
                    type: function (a) {
                        return a.getAttribute("type")
                    }
                },
                relative: {
                    "+": function (a, b) {
                        var c = typeof b == "string",
                            d = c && !l.test(b),
                            e = c && !d;
                        d && (b = b.toLowerCase());
                        for (var f = 0, g = a.length, h; f < g; f++) {
                            if (h = a[f]) {
                                while ((h = h.previousSibling) && h.nodeType !== 1) {}
                                a[f] = e || h && h.nodeName.toLowerCase() === b ? h || !1 : h === b
                            }
                        }
                        e && m.filter(b, a, !0)
                    },
                    ">": function (a, b) {
                        var c, d = typeof b == "string",
                            e = 0,
                            f = a.length;
                        if (d && !l.test(b)) {
                            b = b.toLowerCase();
                            for (; e < f; e++) {
                                c = a[e];
                                if (c) {
                                    var g = c.parentNode;
                                    a[e] = g.nodeName.toLowerCase() === b ? g : !1
                                }
                            }
                        } else {
                            for (; e < f; e++) {
                                c = a[e], c && (a[e] = d ? c.parentNode : c.parentNode === b)
                            }
                            d && m.filter(b, a, !0)
                        }
                    },
                    "": function (a, b, c) {
                        var d, f = e++,
                            g = x;
                        typeof b == "string" && !l.test(b) && (b = b.toLowerCase(), d = b, g = w), g("parentNode", b, f, a, d, c)
                    },
                    "~": function (a, b, c) {
                        var d, f = e++,
                            g = x;
                        typeof b == "string" && !l.test(b) && (b = b.toLowerCase(), d = b, g = w), g("previousSibling", b, f, a, d, c)
                    }
                },
                find: {
                    ID: function (a, b, c) {
                        if (typeof b.getElementById != "undefined" && !c) {
                            var d = b.getElementById(a[1]);
                            return d && d.parentNode ? [d] : []
                        }
                    },
                    NAME: function (a, b) {
                        if (typeof b.getElementsByName != "undefined") {
                            var c = [],
                                d = b.getElementsByName(a[1]);
                            for (var e = 0, f = d.length; e < f; e++) {
                                d[e].getAttribute("name") === a[1] && c.push(d[e])
                            }
                            return c.length === 0 ? null : c
                        }
                    },
                    TAG: function (a, b) {
                        if (typeof b.getElementsByTagName != "undefined") {
                            return b.getElementsByTagName(a[1])
                        }
                    }
                },
                preFilter: {
                    CLASS: function (a, b, c, d, e, f) {
                        a = " " + a[1].replace(j, "") + " ";
                        if (f) {
                            return a
                        }
                        for (var g = 0, h;
                        (h = b[g]) != null; g++) {
                            h && (e ^ (h.className && (" " + h.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a) >= 0) ? c || d.push(h) : c && (b[g] = !1))
                        }
                        return !1
                    },
                    ID: function (a) {
                        return a[1].replace(j, "")
                    },
                    TAG: function (a, b) {
                        return a[1].replace(j, "").toLowerCase()
                    },
                    CHILD: function (a) {
                        if (a[1] === "nth") {
                            a[2] || m.error(a[0]), a[2] = a[2].replace(/^\+|\s*/g, "");
                            var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2] === "even" && "2n" || a[2] === "odd" && "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
                            a[2] = b[1] + (b[2] || 1) - 0, a[3] = b[3] - 0
                        } else {
                            a[2] && m.error(a[0])
                        }
                        a[0] = e++;
                        return a
                    },
                    ATTR: function (a, b, c, d, e, f) {
                        var g = a[1] = a[1].replace(j, "");
                        !f && o.attrMap[g] && (a[1] = o.attrMap[g]), a[4] = (a[4] || a[5] || "").replace(j, ""), a[2] === "~=" && (a[4] = " " + a[4] + " ");
                        return a
                    },
                    PSEUDO: function (b, c, d, e, f) {
                        if (b[1] === "not") {
                            if ((a.exec(b[3]) || "").length > 1 || /^\w/.test(b[3])) {
                                b[3] = m(b[3], null, null, c)
                            } else {
                                var g = m.filter(b[3], c, d, !0 ^ f);
                                d || e.push.apply(e, g);
                                return !1
                            }
                        } else {
                            if (o.match.POS.test(b[0]) || o.match.CHILD.test(b[0])) {
                                return !0
                            }
                        }
                        return b
                    },
                    POS: function (a) {
                        a.unshift(!0);
                        return a
                    }
                },
                filters: {
                    enabled: function (a) {
                        return a.disabled === !1 && a.type !== "hidden"
                    },
                    disabled: function (a) {
                        return a.disabled === !0
                    },
                    checked: function (a) {
                        return a.checked === !0
                    },
                    selected: function (a) {
                        a.parentNode && a.parentNode.selectedIndex;
                        return a.selected === !0
                    },
                    parent: function (a) {
                        return !!a.firstChild
                    },
                    empty: function (a) {
                        return !a.firstChild
                    },
                    has: function (a, b, c) {
                        return !!m(c[3], a).length
                    },
                    header: function (a) {
                        return /h\d/i.test(a.nodeName)
                    },
                    text: function (a) {
                        var b = a.getAttribute("type"),
                            c = a.type;
                        return a.nodeName.toLowerCase() === "input" && "text" === c && (b === c || b === null)
                    },
                    radio: function (a) {
                        return a.nodeName.toLowerCase() === "input" && "radio" === a.type
                    },
                    checkbox: function (a) {
                        return a.nodeName.toLowerCase() === "input" && "checkbox" === a.type
                    },
                    file: function (a) {
                        return a.nodeName.toLowerCase() === "input" && "file" === a.type
                    },
                    password: function (a) {
                        return a.nodeName.toLowerCase() === "input" && "password" === a.type
                    },
                    submit: function (a) {
                        var b = a.nodeName.toLowerCase();
                        return (b === "input" || b === "button") && "submit" === a.type
                    },
                    image: function (a) {
                        return a.nodeName.toLowerCase() === "input" && "image" === a.type
                    },
                    reset: function (a) {
                        var b = a.nodeName.toLowerCase();
                        return (b === "input" || b === "button") && "reset" === a.type
                    },
                    button: function (a) {
                        var b = a.nodeName.toLowerCase();
                        return b === "input" && "button" === a.type || b === "button"
                    },
                    input: function (a) {
                        return /input|select|textarea|button/i.test(a.nodeName)
                    },
                    focus: function (a) {
                        return a === a.ownerDocument.activeElement
                    }
                },
                setFilters: {
                    first: function (a, b) {
                        return b === 0
                    },
                    last: function (a, b, c, d) {
                        return b === d.length - 1
                    },
                    even: function (a, b) {
                        return b % 2 === 0
                    },
                    odd: function (a, b) {
                        return b % 2 === 1
                    },
                    lt: function (a, b, c) {
                        return b < c[3] - 0
                    },
                    gt: function (a, b, c) {
                        return b > c[3] - 0
                    },
                    nth: function (a, b, c) {
                        return c[3] - 0 === b
                    },
                    eq: function (a, b, c) {
                        return c[3] - 0 === b
                    }
                },
                filter: {
                    PSEUDO: function (a, b, c, d) {
                        var e = b[1],
                            f = o.filters[e];
                        if (f) {
                            return f(a, c, b, d)
                        }
                        if (e === "contains") {
                            return (a.textContent || a.innerText || n([a]) || "").indexOf(b[3]) >= 0
                        }
                        if (e === "not") {
                            var g = b[3];
                            for (var h = 0, i = g.length; h < i; h++) {
                                if (g[h] === a) {
                                    return !1
                                }
                            }
                            return !0
                        }
                        m.error(e)
                    },
                    CHILD: function (a, b) {
                        var c, e, f, g, h, i, j, k = b[1],
                            l = a;
                        switch (k) {
                        case "only":
                        case "first":
                            while (l = l.previousSibling) {
                                if (l.nodeType === 1) {
                                    return !1
                                }
                            }
                            if (k === "first") {
                                return !0
                            }
                            l = a;
                        case "last":
                            while (l = l.nextSibling) {
                                if (l.nodeType === 1) {
                                    return !1
                                }
                            }
                            return !0;
                        case "nth":
                            c = b[2], e = b[3];
                            if (c === 1 && e === 0) {
                                return !0
                            }
                            f = b[0], g = a.parentNode;
                            if (g && (g[d] !== f || !a.nodeIndex)) {
                                i = 0;
                                for (l = g.firstChild; l; l = l.nextSibling) {
                                    l.nodeType === 1 && (l.nodeIndex = ++i)
                                }
                                g[d] = f
                            }
                            j = a.nodeIndex - e;
                            return c === 0 ? j === 0 : j % c === 0 && j / c >= 0
                        }
                    },
                    ID: function (a, b) {
                        return a.nodeType === 1 && a.getAttribute("id") === b
                    },
                    TAG: function (a, b) {
                        return b === "*" && a.nodeType === 1 || !! a.nodeName && a.nodeName.toLowerCase() === b
                    },
                    CLASS: function (a, b) {
                        return (" " + (a.className || a.getAttribute("class")) + " ").indexOf(b) > -1
                    },
                    ATTR: function (a, b) {
                        var c = b[1],
                            d = m.attr ? m.attr(a, c) : o.attrHandle[c] ? o.attrHandle[c](a) : a[c] != null ? a[c] : a.getAttribute(c),
                            e = d + "",
                            f = b[2],
                            g = b[4];
                        return d == null ? f === "!=" : !f && m.attr ? d != null : f === "=" ? e === g : f === "*=" ? e.indexOf(g) >= 0 : f === "~=" ? (" " + e + " ").indexOf(g) >= 0 : g ? f === "!=" ? e !== g : f === "^=" ? e.indexOf(g) === 0 : f === "$=" ? e.substr(e.length - g.length) === g : f === "|=" ? e === g || e.substr(0, g.length + 1) === g + "-" : !1 : e && d !== !1
                    },
                    POS: function (a, b, c, d) {
                        var e = b[2],
                            f = o.setFilters[e];
                        if (f) {
                            return f(a, c, b, d)
                        }
                    }
                }
            },
            p = o.match.POS,
            q = function (a, b) {
                return "\\" + (b - 0 + 1)
            };
        for (var r in o.match) {
            o.match[r] = new RegExp(o.match[r].source + /(?![^\[]*\])(?![^\(]*\))/.source), o.leftMatch[r] = new RegExp(/(^(?:.|\r|\n)*?)/.source + o.match[r].source.replace(/\\(\d+)/g, q))
        }
        var s = function (a, b) {
                a = Array.prototype.slice.call(a, 0);
                if (b) {
                    b.push.apply(b, a);
                    return b
                }
                return a
            };
        try {
            Array.prototype.slice.call(c.documentElement.childNodes, 0)[0].nodeType
        } catch (t) {
            s = function (a, b) {
                var c = 0,
                    d = b || [];
                if (g.call(a) === "[object Array]") {
                    Array.prototype.push.apply(d, a)
                } else {
                    if (typeof a.length == "number") {
                        for (var e = a.length; c < e; c++) {
                            d.push(a[c])
                        }
                    } else {
                        for (; a[c]; c++) {
                            d.push(a[c])
                        }
                    }
                }
                return d
            }
        }
        var u, v;
        c.documentElement.compareDocumentPosition ? u = function (a, b) {
            if (a === b) {
                h = !0;
                return 0
            }
            if (!a.compareDocumentPosition || !b.compareDocumentPosition) {
                return a.compareDocumentPosition ? -1 : 1
            }
            return a.compareDocumentPosition(b) & 4 ? -1 : 1
        } : (u = function (a, b) {
            if (a === b) {
                h = !0;
                return 0
            }
            if (a.sourceIndex && b.sourceIndex) {
                return a.sourceIndex - b.sourceIndex
            }
            var c, d, e = [],
                f = [],
                g = a.parentNode,
                i = b.parentNode,
                j = g;
            if (g === i) {
                return v(a, b)
            }
            if (!g) {
                return -1
            }
            if (!i) {
                return 1
            }
            while (j) {
                e.unshift(j), j = j.parentNode
            }
            j = i;
            while (j) {
                f.unshift(j), j = j.parentNode
            }
            c = e.length, d = f.length;
            for (var k = 0; k < c && k < d; k++) {
                if (e[k] !== f[k]) {
                    return v(e[k], f[k])
                }
            }
            return k === c ? v(a, f[k], -1) : v(e[k], b, 1)
        }, v = function (a, b, c) {
            if (a === b) {
                return c
            }
            var d = a.nextSibling;
            while (d) {
                if (d === b) {
                    return -1
                }
                d = d.nextSibling
            }
            return 1
        }), function () {
            var a = c.createElement("div"),
                d = "script" + (new Date).getTime(),
                e = c.documentElement;
            a.innerHTML = "<a name='" + d + "'/>", e.insertBefore(a, e.firstChild), c.getElementById(d) && (o.find.ID = function (a, c, d) {
                if (typeof c.getElementById != "undefined" && !d) {
                    var e = c.getElementById(a[1]);
                    return e ? e.id === a[1] || typeof e.getAttributeNode != "undefined" && e.getAttributeNode("id").nodeValue === a[1] ? [e] : b : []
                }
            }, o.filter.ID = function (a, b) {
                var c = typeof a.getAttributeNode != "undefined" && a.getAttributeNode("id");
                return a.nodeType === 1 && c && c.nodeValue === b
            }), e.removeChild(a), e = a = null
        }(), function () {
            var a = c.createElement("div");
            a.appendChild(c.createComment("")), a.getElementsByTagName("*").length > 0 && (o.find.TAG = function (a, b) {
                var c = b.getElementsByTagName(a[1]);
                if (a[1] === "*") {
                    var d = [];
                    for (var e = 0; c[e]; e++) {
                        c[e].nodeType === 1 && d.push(c[e])
                    }
                    c = d
                }
                return c
            }), a.innerHTML = "<a href='#'></a>", a.firstChild && typeof a.firstChild.getAttribute != "undefined" && a.firstChild.getAttribute("href") !== "#" && (o.attrHandle.href = function (a) {
                return a.getAttribute("href", 2)
            }), a = null
        }(), c.querySelectorAll &&
        function () {
            var a = m,
                b = c.createElement("div"),
                d = "__sizzle__";
            b.innerHTML = "<p class='TEST'></p>";
            if (!b.querySelectorAll || b.querySelectorAll(".TEST").length !== 0) {
                m = function (b, e, f, g) {
                    e = e || c;
                    if (!g && !m.isXML(e)) {
                        var h = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);
                        if (h && (e.nodeType === 1 || e.nodeType === 9)) {
                            if (h[1]) {
                                return s(e.getElementsByTagName(b), f)
                            }
                            if (h[2] && o.find.CLASS && e.getElementsByClassName) {
                                return s(e.getElementsByClassName(h[2]), f)
                            }
                        }
                        if (e.nodeType === 9) {
                            if (b === "body" && e.body) {
                                return s([e.body], f)
                            }
                            if (h && h[3]) {
                                var i = e.getElementById(h[3]);
                                if (!i || !i.parentNode) {
                                    return s([], f)
                                }
                                if (i.id === h[3]) {
                                    return s([i], f)
                                }
                            }
                            try {
                                return s(e.querySelectorAll(b), f)
                            } catch (j) {}
                        } else {
                            if (e.nodeType === 1 && e.nodeName.toLowerCase() !== "object") {
                                var k = e,
                                    l = e.getAttribute("id"),
                                    n = l || d,
                                    p = e.parentNode,
                                    q = /^\s*[+~]/.test(b);
                                l ? n = n.replace(/'/g, "\\$&") : e.setAttribute("id", n), q && p && (e = e.parentNode);
                                try {
                                    if (!q || p) {
                                        return s(e.querySelectorAll("[id='" + n + "'] " + b), f)
                                    }
                                } catch (r) {} finally {
                                    l || k.removeAttribute("id")
                                }
                            }
                        }
                    }
                    return a(b, e, f, g)
                };
                for (var e in a) {
                    m[e] = a[e]
                }
                b = null
            }
        }(), function () {
            var a = c.documentElement,
                b = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.msMatchesSelector;
            if (b) {
                var d = !b.call(c.createElement("div"), "div"),
                    e = !1;
                try {
                    b.call(c.documentElement, "[test!='']:sizzle")
                } catch (f) {
                    e = !0
                }
                m.matchesSelector = function (a, c) {
                    c = c.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
                    if (!m.isXML(a)) {
                        try {
                            if (e || !o.match.PSEUDO.test(c) && !/!=/.test(c)) {
                                var f = b.call(a, c);
                                if (f || !d || a.document && a.document.nodeType !== 11) {
                                    return f
                                }
                            }
                        } catch (g) {}
                    }
                    return m(c, null, null, [a]).length > 0
                }
            }
        }(), function () {
            var a = c.createElement("div");
            a.innerHTML = "<div class='test e'></div><div class='test'></div>";
            if ( !! a.getElementsByClassName && a.getElementsByClassName("e").length !== 0) {
                a.lastChild.className = "e";
                if (a.getElementsByClassName("e").length === 1) {
                    return
                }
                o.order.splice(1, 0, "CLASS"), o.find.CLASS = function (a, b, c) {
                    if (typeof b.getElementsByClassName != "undefined" && !c) {
                        return b.getElementsByClassName(a[1])
                    }
                }, a = null
            }
        }(), c.documentElement.contains ? m.contains = function (a, b) {
            return a !== b && (a.contains ? a.contains(b) : !0)
        } : c.documentElement.compareDocumentPosition ? m.contains = function (a, b) {
            return !!(a.compareDocumentPosition(b) & 16)
        } : m.contains = function () {
            return !1
        }, m.isXML = function (a) {
            var b = (a ? a.ownerDocument || a : 0).documentElement;
            return b ? b.nodeName !== "HTML" : !1
        };
        var y = function (a, b, c) {
                var d, e = [],
                    f = "",
                    g = b.nodeType ? [b] : b;
                while (d = o.match.PSEUDO.exec(a)) {
                    f += d[0], a = a.replace(o.match.PSEUDO, "")
                }
                a = o.relative[a] ? a + "*" : a;
                for (var h = 0, i = g.length; h < i; h++) {
                    m(a, g[h], e, c)
                }
                return m.filter(f, e)
            };
        m.attr = f.attr, m.selectors.attrMap = {}, f.find = m, f.expr = m.selectors, f.expr[":"] = f.expr.filters, f.unique = m.uniqueSort, f.text = m.getText, f.isXMLDoc = m.isXML, f.contains = m.contains
    }();
    var O = /Until$/,
        P = /^(?:parents|prevUntil|prevAll)/,
        Q = /,/,
        R = /^.[^:#\[\.,]*$/,
        S = Array.prototype.slice,
        T = f.expr.match.POS,
        U = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    f.fn.extend({
        find: function (a) {
            var b = this,
                c, d;
            if (typeof a != "string") {
                return f(a).filter(function () {
                    for (c = 0, d = b.length; c < d; c++) {
                        if (f.contains(b[c], this)) {
                            return !0
                        }
                    }
                })
            }
            var e = this.pushStack("", "find", a),
                g, h, i;
            for (c = 0, d = this.length; c < d; c++) {
                g = e.length, f.find(a, this[c], e);
                if (c > 0) {
                    for (h = g; h < e.length; h++) {
                        for (i = 0; i < g; i++) {
                            if (e[i] === e[h]) {
                                e.splice(h--, 1);
                                break
                            }
                        }
                    }
                }
            }
            return e
        },
        has: function (a) {
            var b = f(a);
            return this.filter(function () {
                for (var a = 0, c = b.length; a < c; a++) {
                    if (f.contains(this, b[a])) {
                        return !0
                    }
                }
            })
        },
        not: function (a) {
            return this.pushStack(W(this, a, !1), "not", a)
        },
        filter: function (a) {
            return this.pushStack(W(this, a, !0), "filter", a)
        },
        is: function (a) {
            return !!a && (typeof a == "string" ? T.test(a) ? f(a, this.context).index(this[0]) >= 0 : f.filter(a, this).length > 0 : this.filter(a).length > 0)
        },
        closest: function (a, b) {
            var c = [],
                d, e, g = this[0];
            if (f.isArray(a)) {
                var h = 1;
                while (g && g.ownerDocument && g !== b) {
                    for (d = 0; d < a.length; d++) {
                        f(g).is(a[d]) && c.push({
                            selector: a[d],
                            elem: g,
                            level: h
                        })
                    }
                    g = g.parentNode, h++
                }
                return c
            }
            var i = T.test(a) || typeof a != "string" ? f(a, b || this.context) : 0;
            for (d = 0, e = this.length; d < e; d++) {
                g = this[d];
                while (g) {
                    if (i ? i.index(g) > -1 : f.find.matchesSelector(g, a)) {
                        c.push(g);
                        break
                    }
                    g = g.parentNode;
                    if (!g || !g.ownerDocument || g === b || g.nodeType === 11) {
                        break
                    }
                }
            }
            c = c.length > 1 ? f.unique(c) : c;
            return this.pushStack(c, "closest", a)
        },
        index: function (a) {
            if (!a) {
                return this[0] && this[0].parentNode ? this.prevAll().length : -1
            }
            if (typeof a == "string") {
                return f.inArray(this[0], f(a))
            }
            return f.inArray(a.jquery ? a[0] : a, this)
        },
        add: function (a, b) {
            var c = typeof a == "string" ? f(a, b) : f.makeArray(a && a.nodeType ? [a] : a),
                d = f.merge(this.get(), c);
            return this.pushStack(V(c[0]) || V(d[0]) ? d : f.unique(d))
        },
        andSelf: function () {
            return this.add(this.prevObject)
        }
    }), f.each({
        parent: function (a) {
            var b = a.parentNode;
            return b && b.nodeType !== 11 ? b : null
        },
        parents: function (a) {
            return f.dir(a, "parentNode")
        },
        parentsUntil: function (a, b, c) {
            return f.dir(a, "parentNode", c)
        },
        next: function (a) {
            return f.nth(a, 2, "nextSibling")
        },
        prev: function (a) {
            return f.nth(a, 2, "previousSibling")
        },
        nextAll: function (a) {
            return f.dir(a, "nextSibling")
        },
        prevAll: function (a) {
            return f.dir(a, "previousSibling")
        },
        nextUntil: function (a, b, c) {
            return f.dir(a, "nextSibling", c)
        },
        prevUntil: function (a, b, c) {
            return f.dir(a, "previousSibling", c)
        },
        siblings: function (a) {
            return f.sibling(a.parentNode.firstChild, a)
        },
        children: function (a) {
            return f.sibling(a.firstChild)
        },
        contents: function (a) {
            return f.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : f.makeArray(a.childNodes)
        }
    }, function (a, b) {
        f.fn[a] = function (c, d) {
            var e = f.map(this, b, c),
                g = S.call(arguments);
            O.test(a) || (d = c), d && typeof d == "string" && (e = f.filter(d, e)), e = this.length > 1 && !U[a] ? f.unique(e) : e, (this.length > 1 || Q.test(d)) && P.test(a) && (e = e.reverse());
            return this.pushStack(e, a, g.join(","))
        }
    }), f.extend({
        filter: function (a, b, c) {
            c && (a = ":not(" + a + ")");
            return b.length === 1 ? f.find.matchesSelector(b[0], a) ? [b[0]] : [] : f.find.matches(a, b)
        },
        dir: function (a, c, d) {
            var e = [],
                g = a[c];
            while (g && g.nodeType !== 9 && (d === b || g.nodeType !== 1 || !f(g).is(d))) {
                g.nodeType === 1 && e.push(g), g = g[c]
            }
            return e
        },
        nth: function (a, b, c, d) {
            b = b || 1;
            var e = 0;
            for (; a; a = a[c]) {
                if (a.nodeType === 1 && ++e === b) {
                    break
                }
            }
            return a
        },
        sibling: function (a, b) {
            var c = [];
            for (; a; a = a.nextSibling) {
                a.nodeType === 1 && a !== b && c.push(a)
            }
            return c
        }
    });
    var Y = "abbr article aside audio canvas datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
        Z = / jQuery\d+="(?:\d+|null)"/g,
        $ = /^\s+/,
        _ = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
        ba = /<([\w:]+)/,
        bb = /<tbody/i,
        bc = /<|&#?\w+;/,
        bd = /<(?:script|style)/i,
        be = /<(?:script|object|embed|option|style)/i,
        bf = new RegExp("<(?:" + Y.replace(" ", "|") + ")", "i"),
        bg = /checked\s*(?:[^=]|=\s*.checked.)/i,
        bh = /\/(java|ecma)script/i,
        bi = /^\s*<!(?:\[CDATA\[|\-\-)/,
        bj = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        },
        bk = X(c);
    bj.optgroup = bj.option, bj.tbody = bj.tfoot = bj.colgroup = bj.caption = bj.thead, bj.th = bj.td, f.support.htmlSerialize || (bj._default = [1, "div<div>", "</div>"]), f.fn.extend({
        text: function (a) {
            if (f.isFunction(a)) {
                return this.each(function (b) {
                    var c = f(this);
                    c.text(a.call(this, b, c.text()))
                })
            }
            if (typeof a != "object" && a !== b) {
                return this.empty().append((this[0] && this[0].ownerDocument || c).createTextNode(a))
            }
            return f.text(this)
        },
        wrapAll: function (a) {
            if (f.isFunction(a)) {
                return this.each(function (b) {
                    f(this).wrapAll(a.call(this, b))
                })
            }
            if (this[0]) {
                var b = f(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                    var a = this;
                    while (a.firstChild && a.firstChild.nodeType === 1) {
                        a = a.firstChild
                    }
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function (a) {
            if (f.isFunction(a)) {
                return this.each(function (b) {
                    f(this).wrapInner(a.call(this, b))
                })
            }
            return this.each(function () {
                var b = f(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function (a) {
            return this.each(function () {
                f(this).wrapAll(a)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                f.nodeName(this, "body") || f(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function () {
            return this.domManip(arguments, !0, function (a) {
                this.nodeType === 1 && this.appendChild(a)
            })
        },
        prepend: function () {
            return this.domManip(arguments, !0, function (a) {
                this.nodeType === 1 && this.insertBefore(a, this.firstChild)
            })
        },
        before: function () {
            if (this[0] && this[0].parentNode) {
                return this.domManip(arguments, !1, function (a) {
                    this.parentNode.insertBefore(a, this)
                })
            }
            if (arguments.length) {
                var a = f(arguments[0]);
                a.push.apply(a, this.toArray());
                return this.pushStack(a, "before", arguments)
            }
        },
        after: function () {
            if (this[0] && this[0].parentNode) {
                return this.domManip(arguments, !1, function (a) {
                    this.parentNode.insertBefore(a, this.nextSibling)
                })
            }
            if (arguments.length) {
                var a = this.pushStack(this, "after", arguments);
                a.push.apply(a, f(arguments[0]).toArray());
                return a
            }
        },
        remove: function (a, b) {
            for (var c = 0, d;
            (d = this[c]) != null; c++) {
                if (!a || f.filter(a, [d]).length) {
                    !b && d.nodeType === 1 && (f.cleanData(d.getElementsByTagName("*")), f.cleanData([d])), d.parentNode && d.parentNode.removeChild(d)
                }
            }
            return this
        },
        empty: function () {
            for (var a = 0, b;
            (b = this[a]) != null; a++) {
                b.nodeType === 1 && f.cleanData(b.getElementsByTagName("*"));
                while (b.firstChild) {
                    b.removeChild(b.firstChild)
                }
            }
            return this
        },
        clone: function (a, b) {
            a = a == null ? !1 : a, b = b == null ? a : b;
            return this.map(function () {
                return f.clone(this, a, b)
            })
        },
        html: function (a) {
            if (a === b) {
                return this[0] && this[0].nodeType === 1 ? this[0].innerHTML.replace(Z, "") : null
            }
            if (typeof a == "string" && !bd.test(a) && (f.support.leadingWhitespace || !$.test(a)) && !bj[(ba.exec(a) || ["", ""])[1].toLowerCase()]) {
                a = a.replace(_, "<$1></$2>");
                try {
                    for (var c = 0, d = this.length; c < d; c++) {
                        this[c].nodeType === 1 && (f.cleanData(this[c].getElementsByTagName("*")), this[c].innerHTML = a)
                    }
                } catch (e) {
                    this.empty().append(a)
                }
            } else {
                f.isFunction(a) ? this.each(function (b) {
                    var c = f(this);
                    c.html(a.call(this, b, c.html()))
                }) : this.empty().append(a)
            }
            return this
        },
        replaceWith: function (a) {
            if (this[0] && this[0].parentNode) {
                if (f.isFunction(a)) {
                    return this.each(function (b) {
                        var c = f(this),
                            d = c.html();
                        c.replaceWith(a.call(this, b, d))
                    })
                }
                typeof a != "string" && (a = f(a).detach());
                return this.each(function () {
                    var b = this.nextSibling,
                        c = this.parentNode;
                    f(this).remove(), b ? f(b).before(a) : f(c).append(a)
                })
            }
            return this.length ? this.pushStack(f(f.isFunction(a) ? a() : a), "replaceWith", a) : this
        },
        detach: function (a) {
            return this.remove(a, !0)
        },
        domManip: function (a, c, d) {
            var e, g, h, i, j = a[0],
                k = [];
            if (!f.support.checkClone && arguments.length === 3 && typeof j == "string" && bg.test(j)) {
                return this.each(function () {
                    f(this).domManip(a, c, d, !0)
                })
            }
            if (f.isFunction(j)) {
                return this.each(function (e) {
                    var g = f(this);
                    a[0] = j.call(this, e, c ? g.html() : b), g.domManip(a, c, d)
                })
            }
            if (this[0]) {
                i = j && j.parentNode, f.support.parentNode && i && i.nodeType === 11 && i.childNodes.length === this.length ? e = {
                    fragment: i
                } : e = f.buildFragment(a, this, k), h = e.fragment, h.childNodes.length === 1 ? g = h = h.firstChild : g = h.firstChild;
                if (g) {
                    c = c && f.nodeName(g, "tr");
                    for (var l = 0, m = this.length, n = m - 1; l < m; l++) {
                        d.call(c ? bl(this[l], g) : this[l], e.cacheable || m > 1 && l < n ? f.clone(h, !0, !0) : h)
                    }
                }
                k.length && f.each(k, br)
            }
            return this
        }
    }), f.buildFragment = function (a, b, d) {
        var e, g, h, i, j = a[0];
        b && b[0] && (i = b[0].ownerDocument || b[0]), i.createDocumentFragment || (i = c), a.length === 1 && typeof j == "string" && j.length < 512 && i === c && j.charAt(0) === "<" && !be.test(j) && (f.support.checkClone || !bg.test(j)) && !f.support.unknownElems && bf.test(j) && (g = !0, h = f.fragments[j], h && h !== 1 && (e = h)), e || (e = i.createDocumentFragment(), f.clean(a, i, e, d)), g && (f.fragments[j] = h ? e : 1);
        return {
            fragment: e,
            cacheable: g
        }
    }, f.fragments = {}, f.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (a, b) {
        f.fn[a] = function (c) {
            var d = [],
                e = f(c),
                g = this.length === 1 && this[0].parentNode;
            if (g && g.nodeType === 11 && g.childNodes.length === 1 && e.length === 1) {
                e[b](this[0]);
                return this
            }
            for (var h = 0, i = e.length; h < i; h++) {
                var j = (h > 0 ? this.clone(!0) : this).get();
                f(e[h])[b](j), d = d.concat(j)
            }
            return this.pushStack(d, a, e.selector)
        }
    }), f.extend({
        clone: function (a, b, c) {
            var d = a.cloneNode(!0),
                e, g, h;
            if ((!f.support.noCloneEvent || !f.support.noCloneChecked) && (a.nodeType === 1 || a.nodeType === 11) && !f.isXMLDoc(a)) {
                bn(a, d), e = bo(a), g = bo(d);
                for (h = 0; e[h]; ++h) {
                    g[h] && bn(e[h], g[h])
                }
            }
            if (b) {
                bm(a, d);
                if (c) {
                    e = bo(a), g = bo(d);
                    for (h = 0; e[h]; ++h) {
                        bm(e[h], g[h])
                    }
                }
            }
            e = g = null;
            return d
        },
        clean: function (a, b, d, e) {
            var g;
            b = b || c, typeof b.createElement == "undefined" && (b = b.ownerDocument || b[0] && b[0].ownerDocument || c);
            var h = [],
                i;
            for (var j = 0, k;
            (k = a[j]) != null; j++) {
                typeof k == "number" && (k += "");
                if (!k) {
                    continue
                }
                if (typeof k == "string") {
                    if (!bc.test(k)) {
                        k = b.createTextNode(k)
                    } else {
                        k = k.replace(_, "<$1></$2>");
                        var l = (ba.exec(k) || ["", ""])[1].toLowerCase(),
                            m = bj[l] || bj._default,
                            n = m[0],
                            o = b.createElement("div");
                        b === c ? bk.appendChild(o) : X(b).appendChild(o), o.innerHTML = m[1] + k + m[2];
                        while (n--) {
                            o = o.lastChild
                        }
                        if (!f.support.tbody) {
                            var p = bb.test(k),
                                q = l === "table" && !p ? o.firstChild && o.firstChild.childNodes : m[1] === "<table>" && !p ? o.childNodes : [];
                            for (i = q.length - 1; i >= 0; --i) {
                                f.nodeName(q[i], "tbody") && !q[i].childNodes.length && q[i].parentNode.removeChild(q[i])
                            }
                        }!f.support.leadingWhitespace && $.test(k) && o.insertBefore(b.createTextNode($.exec(k)[0]), o.firstChild), k = o.childNodes
                    }
                }
                var r;
                if (!f.support.appendChecked) {
                    if (k[0] && typeof (r = k.length) == "number") {
                        for (i = 0; i < r; i++) {
                            bq(k[i])
                        }
                    } else {
                        bq(k)
                    }
                }
                k.nodeType ? h.push(k) : h = f.merge(h, k)
            }
            if (d) {
                g = function (a) {
                    return !a.type || bh.test(a.type)
                };
                for (j = 0; h[j]; j++) {
                    if (e && f.nodeName(h[j], "script") && (!h[j].type || h[j].type.toLowerCase() === "text/javascript")) {
                        e.push(h[j].parentNode ? h[j].parentNode.removeChild(h[j]) : h[j])
                    } else {
                        if (h[j].nodeType === 1) {
                            var s = f.grep(h[j].getElementsByTagName("script"), g);
                            h.splice.apply(h, [j + 1, 0].concat(s))
                        }
                        d.appendChild(h[j])
                    }
                }
            }
            return h
        },
        cleanData: function (a) {
            var b, c, d = f.cache,
                e = f.event.special,
                g = f.support.deleteExpando;
            for (var h = 0, i;
            (i = a[h]) != null; h++) {
                if (i.nodeName && f.noData[i.nodeName.toLowerCase()]) {
                    continue
                }
                c = i[f.expando];
                if (c) {
                    b = d[c];
                    if (b && b.events) {
                        for (var j in b.events) {
                            e[j] ? f.event.remove(i, j) : f.removeEvent(i, j, b.handle)
                        }
                        b.handle && (b.handle.elem = null)
                    }
                    g ? delete i[f.expando] : i.removeAttribute && i.removeAttribute(f.expando), delete d[c]
                }
            }
        }
    });
    var bs = /alpha\([^)]*\)/i,
        bt = /opacity=([^)]*)/,
        bu = /([A-Z]|^ms)/g,
        bv = /^-?\d+(?:px)?$/i,
        bw = /^-?\d/,
        bx = /^([\-+])=([\-+.\de]+)/,
        by = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        bz = ["Left", "Right"],
        bA = ["Top", "Bottom"],
        bB, bC, bD;
    f.fn.css = function (a, c) {
        if (arguments.length === 2 && c === b) {
            return this
        }
        return f.access(this, a, c, !0, function (a, c, d) {
            return d !== b ? f.style(a, c, d) : f.css(a, c)
        })
    }, f.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = bB(a, "opacity", "opacity");
                        return c === "" ? "1" : c
                    }
                    return a.style.opacity
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": f.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (a, c, d, e) {
            if ( !! a && a.nodeType !== 3 && a.nodeType !== 8 && !! a.style) {
                var g, h, i = f.camelCase(c),
                    j = a.style,
                    k = f.cssHooks[i];
                c = f.cssProps[i] || i;
                if (d === b) {
                    if (k && "get" in k && (g = k.get(a, !1, e)) !== b) {
                        return g
                    }
                    return j[c]
                }
                h = typeof d, h === "string" && (g = bx.exec(d)) && (d = +(g[1] + 1) * +g[2] + parseFloat(f.css(a, c)), h = "number");
                if (d == null || h === "number" && isNaN(d)) {
                    return
                }
                h === "number" && !f.cssNumber[i] && (d += "px");
                if (!k || !("set" in k) || (d = k.set(a, d)) !== b) {
                    try {
                        j[c] = d
                    } catch (l) {}
                }
            }
        },
        css: function (a, c, d) {
            var e, g;
            c = f.camelCase(c), g = f.cssHooks[c], c = f.cssProps[c] || c, c === "cssFloat" && (c = "float");
            if (g && "get" in g && (e = g.get(a, !0, d)) !== b) {
                return e
            }
            if (bB) {
                return bB(a, c)
            }
        },
        swap: function (a, b, c) {
            var d = {};
            for (var e in b) {
                d[e] = a.style[e], a.style[e] = b[e]
            }
            c.call(a);
            for (e in b) {
                a.style[e] = d[e]
            }
        }
    }), f.curCSS = f.css, f.each(["height", "width"], function (a, b) {
        f.cssHooks[b] = {
            get: function (a, c, d) {
                var e;
                if (c) {
                    if (a.offsetWidth !== 0) {
                        return bE(a, b, d)
                    }
                    f.swap(a, by, function () {
                        e = bE(a, b, d)
                    });
                    return e
                }
            },
            set: function (a, b) {
                if (!bv.test(b)) {
                    return b
                }
                b = parseFloat(b);
                if (b >= 0) {
                    return b + "px"
                }
            }
        }
    }), f.support.opacity || (f.cssHooks.opacity = {
        get: function (a, b) {
            return bt.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : b ? "1" : ""
        },
        set: function (a, b) {
            var c = a.style,
                d = a.currentStyle,
                e = f.isNumeric(b) ? "alpha(opacity=" + b * 100 + ")" : "",
                g = d && d.filter || c.filter || "";
            c.zoom = 1;
            if (b >= 1 && f.trim(g.replace(bs, "")) === "") {
                c.removeAttribute("filter");
                if (d && !d.filter) {
                    return
                }
            }
            c.filter = bs.test(g) ? g.replace(bs, e) : g + " " + e
        }
    }), f(function () {
        f.support.reliableMarginRight || (f.cssHooks.marginRight = {
            get: function (a, b) {
                var c;
                f.swap(a, {
                    display: "inline-block"
                }, function () {
                    b ? c = bB(a, "margin-right", "marginRight") : c = a.style.marginRight
                });
                return c
            }
        })
    }), c.defaultView && c.defaultView.getComputedStyle && (bC = function (a, c) {
        var d, e, g;
        c = c.replace(bu, "-$1").toLowerCase();
        if (!(e = a.ownerDocument.defaultView)) {
            return b
        }
        if (g = e.getComputedStyle(a, null)) {
            d = g.getPropertyValue(c), d === "" && !f.contains(a.ownerDocument.documentElement, a) && (d = f.style(a, c))
        }
        return d
    }), c.documentElement.currentStyle && (bD = function (a, b) {
        var c, d, e, f = a.currentStyle && a.currentStyle[b],
            g = a.style;
        f === null && g && (e = g[b]) && (f = e), !bv.test(f) && bw.test(f) && (c = g.left, d = a.runtimeStyle && a.runtimeStyle.left, d && (a.runtimeStyle.left = a.currentStyle.left), g.left = b === "fontSize" ? "1em" : f || 0, f = g.pixelLeft + "px", g.left = c, d && (a.runtimeStyle.left = d));
        return f === "" ? "auto" : f
    }), bB = bC || bD, f.expr && f.expr.filters && (f.expr.filters.hidden = function (a) {
        var b = a.offsetWidth,
            c = a.offsetHeight;
        return b === 0 && c === 0 || !f.support.reliableHiddenOffsets && (a.style && a.style.display || f.css(a, "display")) === "none"
    }, f.expr.filters.visible = function (a) {
        return !f.expr.filters.hidden(a)
    });
    var bF = /%20/g,
        bG = /\[\]$/,
        bH = /\r?\n/g,
        bI = /#.*$/,
        bJ = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        bK = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        bL = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
        bM = /^(?:GET|HEAD)$/,
        bN = /^\/\//,
        bO = /\?/,
        bP = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        bQ = /^(?:select|textarea)/i,
        bR = /\s+/,
        bS = /([?&])_=[^&]*/,
        bT = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
        bU = f.fn.load,
        bV = {},
        bW = {},
        bX, bY, bZ = ["*/"] + ["*"];
    try {
        bX = e.href
    } catch (b$) {
        bX = c.createElement("a"), bX.href = "", bX = bX.href
    }
    bY = bT.exec(bX.toLowerCase()) || [], f.fn.extend({
        load: function (a, c, d) {
            if (typeof a != "string" && bU) {
                return bU.apply(this, arguments)
            }
            if (!this.length) {
                return this
            }
            var e = a.indexOf(" ");
            if (e >= 0) {
                var g = a.slice(e, a.length);
                a = a.slice(0, e)
            }
            var h = "GET";
            c && (f.isFunction(c) ? (d = c, c = b) : typeof c == "object" && (c = f.param(c, f.ajaxSettings.traditional), h = "POST"));
            var i = this;
            f.ajax({
                url: a,
                type: h,
                dataType: "html",
                data: c,
                complete: function (a, b, c) {
                    c = a.responseText, a.isResolved() && (a.done(function (a) {
                        c = a
                    }), i.html(g ? f("<div>").append(c.replace(bP, "")).find(g) : c)), d && i.each(d, [c, b, a])
                }
            });
            return this
        },
        serialize: function () {
            return f.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                return this.elements ? f.makeArray(this.elements) : this
            }).filter(function () {
                return this.name && !this.disabled && (this.checked || bQ.test(this.nodeName) || bK.test(this.type))
            }).map(function (a, b) {
                var c = f(this).val();
                return c == null ? null : f.isArray(c) ? f.map(c, function (a, c) {
                    return {
                        name: b.name,
                        value: a.replace(bH, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(bH, "\r\n")
                }
            }).get()
        }
    }), f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (a, b) {
        f.fn[b] = function (a) {
            return this.bind(b, a)
        }
    }), f.each(["get", "post"], function (a, c) {
        f[c] = function (a, d, e, g) {
            f.isFunction(d) && (g = g || e, e = d, d = b);
            return f.ajax({
                type: c,
                url: a,
                data: d,
                success: e,
                dataType: g
            })
        }
    }), f.extend({
        getScript: function (a, c) {
            return f.get(a, b, c, "script")
        },
        getJSON: function (a, b, c) {
            return f.get(a, b, c, "json")
        },
        ajaxSetup: function (a, b) {
            b ? cb(a, f.ajaxSettings) : (b = a, a = f.ajaxSettings), cb(a, b);
            return a
        },
        ajaxSettings: {
            url: bX,
            isLocal: bL.test(bY[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": bZ
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": a.String,
                "text html": !0,
                "text json": f.parseJSON,
                "text xml": f.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: b_(bV),
        ajaxTransport: b_(bW),
        ajax: function (a, c) {
            function w(a, c, l, m) {
                if (s !== 2) {
                    s = 2, q && clearTimeout(q), p = b, n = m || "", v.readyState = a > 0 ? 4 : 0;
                    var o, r, u, w = c,
                        x = l ? cd(d, v, l) : b,
                        y, z;
                    if (a >= 200 && a < 300 || a === 304) {
                        if (d.ifModified) {
                            if (y = v.getResponseHeader("Last-Modified")) {
                                f.lastModified[k] = y
                            }
                            if (z = v.getResponseHeader("Etag")) {
                                f.etag[k] = z
                            }
                        }
                        if (a === 304) {
                            w = "notmodified", o = !0
                        } else {
                            try {
                                r = ce(d, x), w = "success", o = !0
                            } catch (A) {
                                w = "parsererror", u = A
                            }
                        }
                    } else {
                        u = w;
                        if (!w || a) {
                            w = "error", a < 0 && (a = 0)
                        }
                    }
                    v.status = a, v.statusText = "" + (c || w), o ? h.resolveWith(e, [r, w, v]) : h.rejectWith(e, [v, w, u]), v.statusCode(j), j = b, t && g.trigger("ajax" + (o ? "Success" : "Error"), [v, d, o ? r : u]), i.fireWith(e, [v, w]), t && (g.trigger("ajaxComplete", [v, d]), --f.active || f.event.trigger("ajaxStop"))
                }
            }
            typeof a == "object" && (c = a, a = b), c = c || {};
            var d = f.ajaxSetup({}, c),
                e = d.context || d,
                g = e !== d && (e.nodeType || e instanceof f) ? f(e) : f.event,
                h = f.Deferred(),
                i = f.Callbacks("once memory"),
                j = d.statusCode || {},
                k, l = {},
                m = {},
                n, o, p, q, r, s = 0,
                t, u, v = {
                    readyState: 0,
                    setRequestHeader: function (a, b) {
                        if (!s) {
                            var c = a.toLowerCase();
                            a = m[c] = m[c] || a, l[a] = b
                        }
                        return this
                    },
                    getAllResponseHeaders: function () {
                        return s === 2 ? n : null
                    },
                    getResponseHeader: function (a) {
                        var c;
                        if (s === 2) {
                            if (!o) {
                                o = {};
                                while (c = bJ.exec(n)) {
                                    o[c[1].toLowerCase()] = c[2]
                                }
                            }
                            c = o[a.toLowerCase()]
                        }
                        return c === b ? null : c
                    },
                    overrideMimeType: function (a) {
                        s || (d.mimeType = a);
                        return this
                    },
                    abort: function (a) {
                        a = a || "abort", p && p.abort(a), w(0, a);
                        return this
                    }
                };
            h.promise(v), v.success = v.done, v.error = v.fail, v.complete = i.add, v.statusCode = function (a) {
                if (a) {
                    var b;
                    if (s < 2) {
                        for (b in a) {
                            j[b] = [j[b], a[b]]
                        }
                    } else {
                        b = a[v.status], v.then(b, b)
                    }
                }
                return this
            }, d.url = ((a || d.url) + "").replace(bI, "").replace(bN, bY[1] + "//"), d.dataTypes = f.trim(d.dataType || "*").toLowerCase().split(bR), d.crossDomain == null && (r = bT.exec(d.url.toLowerCase()), d.crossDomain = !(!r || r[1] == bY[1] && r[2] == bY[2] && (r[3] || (r[1] === "http:" ? 80 : 443)) == (bY[3] || (bY[1] === "http:" ? 80 : 443)))), d.data && d.processData && typeof d.data != "string" && (d.data = f.param(d.data, d.traditional)), ca(bV, d, c, v);
            if (s === 2) {
                return !1
            }
            t = d.global, d.type = d.type.toUpperCase(), d.hasContent = !bM.test(d.type), t && f.active++ === 0 && f.event.trigger("ajaxStart");
            if (!d.hasContent) {
                d.data && (d.url += (bO.test(d.url) ? "&" : "?") + d.data, delete d.data), k = d.url;
                if (d.cache === !1) {
                    var x = f.now(),
                        y = d.url.replace(bS, "$1_=" + x);
                    d.url = y + (y === d.url ? (bO.test(d.url) ? "&" : "?") + "_=" + x : "")
                }
            }(d.data && d.hasContent && d.contentType !== !1 || c.contentType) && v.setRequestHeader("Content-Type", d.contentType), d.ifModified && (k = k || d.url, f.lastModified[k] && v.setRequestHeader("If-Modified-Since", f.lastModified[k]), f.etag[k] && v.setRequestHeader("If-None-Match", f.etag[k])), v.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + (d.dataTypes[0] !== "*" ? ", " + bZ + "; q=0.01" : "") : d.accepts["*"]);
            for (u in d.headers) {
                v.setRequestHeader(u, d.headers[u])
            }
            if (d.beforeSend && (d.beforeSend.call(e, v, d) === !1 || s === 2)) {
                v.abort();
                return !1
            }
            for (u in {
                success: 1,
                error: 1,
                complete: 1
            }) {
                v[u](d[u])
            }
            p = ca(bW, d, c, v);
            if (!p) {
                w(-1, "No Transport")
            } else {
                v.readyState = 1, t && g.trigger("ajaxSend", [v, d]), d.async && d.timeout > 0 && (q = setTimeout(function () {
                    v.abort("timeout")
                }, d.timeout));
                try {
                    s = 1, p.send(l, w)
                } catch (z) {
                    s < 2 ? w(-1, z) : f.error(z)
                }
            }
            return v
        },
        param: function (a, c) {
            var d = [],
                e = function (a, b) {
                    b = f.isFunction(b) ? b() : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
                };
            c === b && (c = f.ajaxSettings.traditional);
            if (f.isArray(a) || a.jquery && !f.isPlainObject(a)) {
                f.each(a, function () {
                    e(this.name, this.value)
                })
            } else {
                for (var g in a) {
                    cc(g, a[g], c, e)
                }
            }
            return d.join("&").replace(bF, "+")
        }
    }), f.extend({
        active: 0,
        lastModified: {},
        etag: {}
    });
    var cf = f.now(),
        cg = /(\=)\?(&|$)|\?\?/i;
    f.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            return f.expando + "_" + cf++
        }
    }), f.ajaxPrefilter("json jsonp", function (b, c, d) {
        var e = b.contentType === "application/x-www-form-urlencoded" && typeof b.data == "string";
        if (b.dataTypes[0] === "jsonp" || b.jsonp !== !1 && (cg.test(b.url) || e && cg.test(b.data))) {
            var g, h = b.jsonpCallback = f.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback,
                i = a[h],
                j = b.url,
                k = b.data,
                l = "$1" + h + "$2";
            b.jsonp !== !1 && (j = j.replace(cg, l), b.url === j && (e && (k = k.replace(cg, l)), b.data === k && (j += (/\?/.test(j) ? "&" : "?") + b.jsonp + "=" + h))), b.url = j, b.data = k, a[h] = function (a) {
                g = [a]
            }, d.always(function () {
                a[h] = i, g && f.isFunction(i) && a[h](g[0])
            }), b.converters["script json"] = function () {
                g || f.error(h + " was not called");
                return g[0]
            }, b.dataTypes[0] = "json";
            return "script"
        }
    }), f.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function (a) {
                f.globalEval(a);
                return a
            }
        }
    }), f.ajaxPrefilter("script", function (a) {
        a.cache === b && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), f.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var d, e = c.head || c.getElementsByTagName("head")[0] || c.documentElement;
            return {
                send: function (f, g) {
                    d = c.createElement("script"), d.async = "async", a.scriptCharset && (d.charset = a.scriptCharset), d.src = a.url, d.onload = d.onreadystatechange = function (a, c) {
                        if (c || !d.readyState || /loaded|complete/.test(d.readyState)) {
                            d.onload = d.onreadystatechange = null, e && d.parentNode && e.removeChild(d), d = b, c || g(200, "success")
                        }
                    }, e.insertBefore(d, e.firstChild)
                },
                abort: function () {
                    d && d.onload(0, 1)
                }
            }
        }
    });
    var ch = a.ActiveXObject ?
    function () {
        for (var a in cj) {
            cj[a](0, 1)
        }
    } : !1, ci = 0, cj;
    f.ajaxSettings.xhr = a.ActiveXObject ?
    function () {
        return !this.isLocal && ck() || cl()
    } : ck, function (a) {
        f.extend(f.support, {
            ajax: !! a,
            cors: !! a && "withCredentials" in a
        })
    }(f.ajaxSettings.xhr()), f.support.ajax && f.ajaxTransport(function (c) {
        if (!c.crossDomain || f.support.cors) {
            var d;
            return {
                send: function (e, g) {
                    var h = c.xhr(),
                        i, j;
                    c.username ? h.open(c.type, c.url, c.async, c.username, c.password) : h.open(c.type, c.url, c.async);
                    if (c.xhrFields) {
                        for (j in c.xhrFields) {
                            h[j] = c.xhrFields[j]
                        }
                    }
                    c.mimeType && h.overrideMimeType && h.overrideMimeType(c.mimeType), !c.crossDomain && !e["X-Requested-With"] && (e["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (j in e) {
                            h.setRequestHeader(j, e[j])
                        }
                    } catch (k) {}
                    h.send(c.hasContent && c.data || null), d = function (a, e) {
                        var j, k, l, m, n;
                        try {
                            if (d && (e || h.readyState === 4)) {
                                d = b, i && (h.onreadystatechange = f.noop, ch && delete cj[i]);
                                if (e) {
                                    h.readyState !== 4 && h.abort()
                                } else {
                                    j = h.status, l = h.getAllResponseHeaders(), m = {}, n = h.responseXML, n && n.documentElement && (m.xml = n), m.text = h.responseText;
                                    try {
                                        k = h.statusText
                                    } catch (o) {
                                        k = ""
                                    }!j && c.isLocal && !c.crossDomain ? j = m.text ? 200 : 404 : j === 1223 && (j = 204)
                                }
                            }
                        } catch (p) {
                            e || g(-1, p)
                        }
                        m && g(j, k, m, l)
                    }, !c.async || h.readyState === 4 ? d() : (i = ++ci, ch && (cj || (cj = {}, f(a).unload(ch)), cj[i] = d), h.onreadystatechange = d)
                },
                abort: function () {
                    d && d(0, 1)
                }
            }
        }
    });
    var cm = {},
        cn, co, cp = /^(?:toggle|show|hide)$/,
        cq = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
        cr, cs = [
            ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
            ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
            ["opacity"]
        ],
        ct;
    f.fn.extend({
        show: function (a, b, c) {
            var d, e;
            if (a || a === 0) {
                return this.animate(cw("show", 3), a, b, c)
            }
            for (var g = 0, h = this.length; g < h; g++) {
                d = this[g], d.style && (e = d.style.display, !f._data(d, "olddisplay") && e === "none" && (e = d.style.display = ""), e === "" && f.css(d, "display") === "none" && f._data(d, "olddisplay", cx(d.nodeName)))
            }
            for (g = 0; g < h; g++) {
                d = this[g];
                if (d.style) {
                    e = d.style.display;
                    if (e === "" || e === "none") {
                        d.style.display = f._data(d, "olddisplay") || ""
                    }
                }
            }
            return this
        },
        hide: function (a, b, c) {
            if (a || a === 0) {
                return this.animate(cw("hide", 3), a, b, c)
            }
            var d, e, g = 0,
                h = this.length;
            for (; g < h; g++) {
                d = this[g], d.style && (e = f.css(d, "display"), e !== "none" && !f._data(d, "olddisplay") && f._data(d, "olddisplay", e))
            }
            for (g = 0; g < h; g++) {
                this[g].style && (this[g].style.display = "none")
            }
            return this
        },
        _toggle: f.fn.toggle,
        toggle: function (a, b, c) {
            var d = typeof a == "boolean";
            f.isFunction(a) && f.isFunction(b) ? this._toggle.apply(this, arguments) : a == null || d ? this.each(function () {
                var b = d ? a : f(this).is(":hidden");
                f(this)[b ? "show" : "hide"]()
            }) : this.animate(cw("toggle", 3), a, b, c);
            return this
        },
        fadeTo: function (a, b, c, d) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function (a, b, c, d) {
            function g() {
                e.queue === !1 && f._mark(this);
                var b = f.extend({}, e),
                    c = this.nodeType === 1,
                    d = c && f(this).is(":hidden"),
                    g, h, i, j, k, l, m, n, o;
                b.animatedProperties = {};
                for (i in a) {
                    g = f.camelCase(i), i !== g && (a[g] = a[i], delete a[i]), h = a[g], f.isArray(h) ? (b.animatedProperties[g] = h[1], h = a[g] = h[0]) : b.animatedProperties[g] = b.specialEasing && b.specialEasing[g] || b.easing || "swing";
                    if (h === "hide" && d || h === "show" && !d) {
                        return b.complete.call(this)
                    }
                    c && (g === "height" || g === "width") && (b.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], f.css(this, "display") === "inline" && f.css(this, "float") === "none" && (!f.support.inlineBlockNeedsLayout || cx(this.nodeName) === "inline" ? this.style.display = "inline-block" : this.style.zoom = 1))
                }
                b.overflow != null && (this.style.overflow = "hidden");
                for (i in a) {
                    j = new f.fx(this, b, i), h = a[i], cp.test(h) ? (o = f._data(this, "toggle" + i) || (h === "toggle" ? d ? "show" : "hide" : 0), o ? (f._data(this, "toggle" + i, o === "show" ? "hide" : "show"), j[o]()) : j[h]()) : (k = cq.exec(h), l = j.cur(), k ? (m = parseFloat(k[2]), n = k[3] || (f.cssNumber[i] ? "" : "px"), n !== "px" && (f.style(this, i, (m || 1) + n), l = (m || 1) / j.cur() * l, f.style(this, i, l + n)), k[1] && (m = (k[1] === "-=" ? -1 : 1) * m + l), j.custom(l, m, n)) : j.custom(l, h, ""))
                }
                return !0
            }
            var e = f.speed(b, c, d);
            if (f.isEmptyObject(a)) {
                return this.each(e.complete, [!1])
            }
            a = f.extend({}, a);
            return e.queue === !1 ? this.each(g) : this.queue(e.queue, g)
        },
        stop: function (a, c, d) {
            typeof a != "string" && (d = c, c = a, a = b), c && a !== !1 && this.queue(a || "fx", []);
            return this.each(function () {
                function h(a, b, c) {
                    var e = b[c];
                    f.removeData(a, c, !0), e.stop(d)
                }
                var b, c = !1,
                    e = f.timers,
                    g = f._data(this);
                d || f._unmark(!0, this);
                if (a == null) {
                    for (b in g) {
                        g[b].stop && b.indexOf(".run") === b.length - 4 && h(this, g, b)
                    }
                } else {
                    g[b = a + ".run"] && g[b].stop && h(this, g, b)
                }
                for (b = e.length; b--;) {
                    e[b].elem === this && (a == null || e[b].queue === a) && (d ? e[b](!0) : e[b].saveState(), c = !0, e.splice(b, 1))
                }(!d || !c) && f.dequeue(this, a)
            })
        }
    }), f.each({
        slideDown: cw("show", 1),
        slideUp: cw("hide", 1),
        slideToggle: cw("toggle", 1),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (a, b) {
        f.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), f.extend({
        speed: function (a, b, c) {
            var d = a && typeof a == "object" ? f.extend({}, a) : {
                complete: c || !c && b || f.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !f.isFunction(b) && b
            };
            d.duration = f.fx.off ? 0 : typeof d.duration == "number" ? d.duration : d.duration in f.fx.speeds ? f.fx.speeds[d.duration] : f.fx.speeds._default;
            if (d.queue == null || d.queue === !0) {
                d.queue = "fx"
            }
            d.old = d.complete, d.complete = function (a) {
                f.isFunction(d.old) && d.old.call(this), d.queue ? f.dequeue(this, d.queue) : a !== !1 && f._unmark(this)
            };
            return d
        },
        easing: {
            linear: function (a, b, c, d) {
                return c + d * a
            },
            swing: function (a, b, c, d) {
                return (-Math.cos(a * Math.PI) / 2 + 0.5) * d + c
            }
        },
        timers: [],
        fx: function (a, b, c) {
            this.options = b, this.elem = a, this.prop = c, b.orig = b.orig || {}
        }
    }), f.fx.prototype = {
        update: function () {
            this.options.step && this.options.step.call(this.elem, this.now, this), (f.fx.step[this.prop] || f.fx.step._default)(this)
        },
        cur: function () {
            if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null)) {
                return this.elem[this.prop]
            }
            var a, b = f.css(this.elem, this.prop);
            return isNaN(a = parseFloat(b)) ? !b || b === "auto" ? 0 : b : a
        },
        custom: function (a, c, d) {
            function h(a) {
                return e.step(a)
            }
            var e = this,
                g = f.fx;
            this.startTime = ct || cu(), this.end = c, this.now = this.start = a, this.pos = this.state = 0, this.unit = d || this.unit || (f.cssNumber[this.prop] ? "" : "px"), h.queue = this.options.queue, h.elem = this.elem, h.saveState = function () {
                e.options.hide && f._data(e.elem, "fxshow" + e.prop) === b && f._data(e.elem, "fxshow" + e.prop, e.start)
            }, h() && f.timers.push(h) && !cr && (cr = setInterval(g.tick, g.interval))
        },
        show: function () {
            var a = f._data(this.elem, "fxshow" + this.prop);
            this.options.orig[this.prop] = a || f.style(this.elem, this.prop), this.options.show = !0, a !== b ? this.custom(this.cur(), a) : this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur()), f(this.elem).show()
        },
        hide: function () {
            this.options.orig[this.prop] = f._data(this.elem, "fxshow" + this.prop) || f.style(this.elem, this.prop), this.options.hide = !0, this.custom(this.cur(), 0)
        },
        step: function (a) {
            var b, c, d, e = ct || cu(),
                g = !0,
                h = this.elem,
                i = this.options;
            if (a || e >= i.duration + this.startTime) {
                this.now = this.end, this.pos = this.state = 1, this.update(), i.animatedProperties[this.prop] = !0;
                for (b in i.animatedProperties) {
                    i.animatedProperties[b] !== !0 && (g = !1)
                }
                if (g) {
                    i.overflow != null && !f.support.shrinkWrapBlocks && f.each(["", "X", "Y"], function (a, b) {
                        h.style["overflow" + b] = i.overflow[a]
                    }), i.hide && f(h).hide();
                    if (i.hide || i.show) {
                        for (b in i.animatedProperties) {
                            f.style(h, b, i.orig[b]), f.removeData(h, "fxshow" + b, !0), f.removeData(h, "toggle" + b, !0)
                        }
                    }
                    d = i.complete, d && (i.complete = !1, d.call(h))
                }
                return !1
            }
            i.duration == Infinity ? this.now = e : (c = e - this.startTime, this.state = c / i.duration, this.pos = f.easing[i.animatedProperties[this.prop]](this.state, c, 0, 1, i.duration), this.now = this.start + (this.end - this.start) * this.pos), this.update();
            return !0
        }
    }, f.extend(f.fx, {
        tick: function () {
            var a, b = f.timers,
                c = 0;
            for (; c < b.length; c++) {
                a = b[c], !a() && b[c] === a && b.splice(c--, 1)
            }
            b.length || f.fx.stop()
        },
        interval: 13,
        stop: function () {
            clearInterval(cr), cr = null
        },
        speeds: {
            slow: 600,
            fast: 200,
            _default: 400
        },
        step: {
            opacity: function (a) {
                f.style(a.elem, "opacity", a.now)
            },
            _default: function (a) {
                a.elem.style && a.elem.style[a.prop] != null ? a.elem.style[a.prop] = a.now + a.unit : a.elem[a.prop] = a.now
            }
        }
    }), f.each(["width", "height"], function (a, b) {
        f.fx.step[b] = function (a) {
            f.style(a.elem, b, Math.max(0, a.now))
        }
    }), f.expr && f.expr.filters && (f.expr.filters.animated = function (a) {
        return f.grep(f.timers, function (b) {
            return a === b.elem
        }).length
    });
    var cy = /^t(?:able|d|h)$/i,
        cz = /^(?:body|html)$/i;
    "getBoundingClientRect" in c.documentElement ? f.fn.offset = function (a) {
        var b = this[0],
            c;
        if (a) {
            return this.each(function (b) {
                f.offset.setOffset(this, a, b)
            })
        }
        if (!b || !b.ownerDocument) {
            return null
        }
        if (b === b.ownerDocument.body) {
            return f.offset.bodyOffset(b)
        }
        try {
            c = b.getBoundingClientRect()
        } catch (d) {}
        var e = b.ownerDocument,
            g = e.documentElement;
        if (!c || !f.contains(g, b)) {
            return c ? {
                top: c.top,
                left: c.left
            } : {
                top: 0,
                left: 0
            }
        }
        var h = e.body,
            i = cA(e),
            j = g.clientTop || h.clientTop || 0,
            k = g.clientLeft || h.clientLeft || 0,
            l = i.pageYOffset || f.support.boxModel && g.scrollTop || h.scrollTop,
            m = i.pageXOffset || f.support.boxModel && g.scrollLeft || h.scrollLeft,
            n = c.top + l - j,
            o = c.left + m - k;
        return {
            top: n,
            left: o
        }
    } : f.fn.offset = function (a) {
        var b = this[0];
        if (a) {
            return this.each(function (b) {
                f.offset.setOffset(this, a, b)
            })
        }
        if (!b || !b.ownerDocument) {
            return null
        }
        if (b === b.ownerDocument.body) {
            return f.offset.bodyOffset(b)
        }
        var c, d = b.offsetParent,
            e = b,
            g = b.ownerDocument,
            h = g.documentElement,
            i = g.body,
            j = g.defaultView,
            k = j ? j.getComputedStyle(b, null) : b.currentStyle,
            l = b.offsetTop,
            m = b.offsetLeft;
        while ((b = b.parentNode) && b !== i && b !== h) {
            if (f.support.fixedPosition && k.position === "fixed") {
                break
            }
            c = j ? j.getComputedStyle(b, null) : b.currentStyle, l -= b.scrollTop, m -= b.scrollLeft, b === d && (l += b.offsetTop, m += b.offsetLeft, f.support.doesNotAddBorder && (!f.support.doesAddBorderForTableAndCells || !cy.test(b.nodeName)) && (l += parseFloat(c.borderTopWidth) || 0, m += parseFloat(c.borderLeftWidth) || 0), e = d, d = b.offsetParent), f.support.subtractsBorderForOverflowNotVisible && c.overflow !== "visible" && (l += parseFloat(c.borderTopWidth) || 0, m += parseFloat(c.borderLeftWidth) || 0), k = c
        }
        if (k.position === "relative" || k.position === "static") {
            l += i.offsetTop, m += i.offsetLeft
        }
        f.support.fixedPosition && k.position === "fixed" && (l += Math.max(h.scrollTop, i.scrollTop), m += Math.max(h.scrollLeft, i.scrollLeft));
        return {
            top: l,
            left: m
        }
    }, f.offset = {
        bodyOffset: function (a) {
            var b = a.offsetTop,
                c = a.offsetLeft;
            f.support.doesNotIncludeMarginInBodyOffset && (b += parseFloat(f.css(a, "marginTop")) || 0, c += parseFloat(f.css(a, "marginLeft")) || 0);
            return {
                top: b,
                left: c
            }
        },
        setOffset: function (a, b, c) {
            var d = f.css(a, "position");
            d === "static" && (a.style.position = "relative");
            var e = f(a),
                g = e.offset(),
                h = f.css(a, "top"),
                i = f.css(a, "left"),
                j = (d === "absolute" || d === "fixed") && f.inArray("auto", [h, i]) > -1,
                k = {},
                l = {},
                m, n;
            j ? (l = e.position(), m = l.top, n = l.left) : (m = parseFloat(h) || 0, n = parseFloat(i) || 0), f.isFunction(b) && (b = b.call(a, c, g)), b.top != null && (k.top = b.top - g.top + m), b.left != null && (k.left = b.left - g.left + n), "using" in b ? b.using.call(a, k) : e.css(k)
        }
    }, f.fn.extend({
        position: function () {
            if (!this[0]) {
                return null
            }
            var a = this[0],
                b = this.offsetParent(),
                c = this.offset(),
                d = cz.test(b[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : b.offset();
            c.top -= parseFloat(f.css(a, "marginTop")) || 0, c.left -= parseFloat(f.css(a, "marginLeft")) || 0, d.top += parseFloat(f.css(b[0], "borderTopWidth")) || 0, d.left += parseFloat(f.css(b[0], "borderLeftWidth")) || 0;
            return {
                top: c.top - d.top,
                left: c.left - d.left
            }
        },
        offsetParent: function () {
            return this.map(function () {
                var a = this.offsetParent || c.body;
                while (a && !cz.test(a.nodeName) && f.css(a, "position") === "static") {
                    a = a.offsetParent
                }
                return a
            })
        }
    }), f.each(["Left", "Top"], function (a, c) {
        var d = "scroll" + c;
        f.fn[d] = function (c) {
            var e, g;
            if (c === b) {
                e = this[0];
                if (!e) {
                    return null
                }
                g = cA(e);
                return g ? "pageXOffset" in g ? g[a ? "pageYOffset" : "pageXOffset"] : f.support.boxModel && g.document.documentElement[d] || g.document.body[d] : e[d]
            }
            return this.each(function () {
                g = cA(this), g ? g.scrollTo(a ? f(g).scrollLeft() : c, a ? c : f(g).scrollTop()) : this[d] = c
            })
        }
    }), f.each(["Height", "Width"], function (a, c) {
        var d = c.toLowerCase();
        f.fn["inner" + c] = function () {
            var a = this[0];
            return a ? a.style ? parseFloat(f.css(a, d, "padding")) : this[d]() : null
        }, f.fn["outer" + c] = function (a) {
            var b = this[0];
            return b ? b.style ? parseFloat(f.css(b, d, a ? "margin" : "border")) : this[d]() : null
        }, f.fn[d] = function (a) {
            var e = this[0];
            if (!e) {
                return a == null ? null : this
            }
            if (f.isFunction(a)) {
                return this.each(function (b) {
                    var c = f(this);
                    c[d](a.call(this, b, c[d]()))
                })
            }
            if (f.isWindow(e)) {
                var g = e.document.documentElement["client" + c],
                    h = e.document.body;
                return e.document.compatMode === "CSS1Compat" && g || h && h["client" + c] || g
            }
            if (e.nodeType === 9) {
                return Math.max(e.documentElement["client" + c], e.body["scroll" + c], e.documentElement["scroll" + c], e.body["offset" + c], e.documentElement["offset" + c])
            }
            if (a === b) {
                var i = f.css(e, d),
                    j = parseFloat(i);
                return f.isNumeric(j) ? j : i
            }
            return this.css(d, typeof a == "string" ? a : a + "px")
        }
    }), a.jQuery = a.$ = f
})(window);
(function () {
    function V(b, n, m) {
        if (b === n) {
            return b !== 0 || 1 / b == 1 / n
        }
        if (b == null || n == null) {
            return b === n
        }
        if (b._chain) {
            b = b._wrapped
        }
        if (n._chain) {
            n = n._wrapped
        }
        if (b.isEqual && ah.isFunction(b.isEqual)) {
            return b.isEqual(n)
        }
        if (n.isEqual && ah.isFunction(n.isEqual)) {
            return n.isEqual(b)
        }
        var l = ad.call(b);
        if (l != ad.call(n)) {
            return false
        }
        switch (l) {
        case "[object String]":
            return b == String(n);
        case "[object Number]":
            return b != +b ? n != +n : b == 0 ? 1 / b == 1 / n : b == +n;
        case "[object Date]":
        case "[object Boolean]":
            return +b == +n;
        case "[object RegExp]":
            return b.source == n.source && b.global == n.global && b.multiline == n.multiline && b.ignoreCase == n.ignoreCase
        }
        if (typeof b != "object" || typeof n != "object") {
            return false
        }
        for (var k = m.length; k--;) {
            if (m[k] == b) {
                return true
            }
        }
        m.push(b);
        var k = 0,
            j = true;
        if (l == "[object Array]") {
            if (k = b.length, j = k == n.length) {
                for (; k--;) {
                    if (!(j = k in b == k in n && V(b[k], n[k], m))) {
                        break
                    }
                }
            }
        } else {
            if ("constructor" in b != "constructor" in n || b.constructor != n.constructor) {
                return false
            }
            for (var i in b) {
                if (ac.call(b, i) && (k++, !(j = ac.call(n, i) && V(b[i], n[i], m)))) {
                    break
                }
            }
            if (j) {
                for (i in n) {
                    if (ac.call(n, i) && !k--) {
                        break
                    }
                }
                j = !k
            }
        }
        m.pop();
        return j
    }
    var T = this,
        N = T._,
        aa = {},
        ae = Array.prototype,
        Z = Object.prototype,
        ag = ae.slice,
        h = ae.unshift,
        ad = Z.toString,
        ac = Z.hasOwnProperty,
        L = ae.forEach,
        g = ae.map,
        e = ae.reduce,
        c = ae.reduceRight,
        Y = ae.filter,
        X = ae.every,
        U = ae.some,
        W = ae.indexOf,
        S = ae.lastIndexOf,
        Z = Array.isArray,
        f = Object.keys,
        R = Function.prototype.bind,
        ah = function (b) {
            return new ab(b)
        };
    if (typeof exports !== "undefined") {
        if (typeof module !== "undefined" && module.exports) {
            exports = module.exports = ah
        }
        exports._ = ah
    } else {
        T._ = ah
    }
    ah.VERSION = "1.3.0";
    var af = ah.each = ah.forEach = function (j, m, i) {
            if (j != null) {
                if (L && j.forEach === L) {
                    j.forEach(m, i)
                } else {
                    if (j.length === +j.length) {
                        for (var l = 0, k = j.length; l < k; l++) {
                            if (l in j && m.call(i, j[l], l, j) === aa) {
                                break
                            }
                        }
                    } else {
                        for (l in j) {
                            if (ac.call(j, l) && m.call(i, j[l], l, j) === aa) {
                                break
                            }
                        }
                    }
                }
            }
        };
    ah.map = function (j, l, i) {
        var k = [];
        if (j == null) {
            return k
        }
        if (g && j.map === g) {
            return j.map(l, i)
        }
        af(j, function (b, n, m) {
            k[k.length] = l.call(i, b, n, m)
        });
        if (j.length === +j.length) {
            k.length = j.length
        }
        return k
    };
    ah.reduce = ah.foldl = ah.inject = function (b, l, k, j) {
        var i = arguments.length > 2;
        b == null && (b = []);
        if (e && b.reduce === e) {
            return j && (l = ah.bind(l, j)), i ? b.reduce(l, k) : b.reduce(l)
        }
        af(b, function (n, m, o) {
            i ? k = l.call(j, k, n, m, o) : (k = n, i = true)
        });
        if (!i) {
            throw new TypeError("Reduce of empty array with no initial value")
        }
        return k
    };
    ah.reduceRight = ah.foldr = function (b, m, l, k) {
        var j = arguments.length > 2;
        b == null && (b = []);
        if (c && b.reduceRight === c) {
            return k && (m = ah.bind(m, k)), j ? b.reduceRight(m, l) : b.reduceRight(m)
        }
        var i = ah.toArray(b).reverse();
        k && !j && (m = ah.bind(m, k));
        return j ? ah.reduce(i, m, l, k) : ah.reduce(i, m)
    };
    ah.find = ah.detect = function (j, l, i) {
        var k;
        Q(j, function (b, n, m) {
            if (l.call(i, b, n, m)) {
                return k = b, true
            }
        });
        return k
    };
    ah.filter = ah.select = function (j, l, i) {
        var k = [];
        if (j == null) {
            return k
        }
        if (Y && j.filter === Y) {
            return j.filter(l, i)
        }
        af(j, function (b, n, m) {
            l.call(i, b, n, m) && (k[k.length] = b)
        });
        return k
    };
    ah.reject = function (j, l, i) {
        var k = [];
        if (j == null) {
            return k
        }
        af(j, function (b, n, m) {
            l.call(i, b, n, m) || (k[k.length] = b)
        });
        return k
    };
    ah.every = ah.all = function (j, l, i) {
        var k = true;
        if (j == null) {
            return k
        }
        if (X && j.every === X) {
            return j.every(l, i)
        }
        af(j, function (b, n, m) {
            if (!(k = k && l.call(i, b, n, m))) {
                return aa
            }
        });
        return k
    };
    var Q = ah.some = ah.any = function (b, k, j) {
            k || (k = ah.identity);
            var i = false;
            if (b == null) {
                return i
            }
            if (U && b.some === U) {
                return b.some(k, j)
            }
            af(b, function (m, l, n) {
                if (i || (i = k.call(j, m, l, n))) {
                    return aa
                }
            });
            return !!i
        };
    ah.include = ah.contains = function (j, k) {
        var i = false;
        if (j == null) {
            return i
        }
        return W && j.indexOf === W ? j.indexOf(k) != -1 : i = Q(j, function (b) {
            return b === k
        })
    };
    ah.invoke = function (b, j) {
        var i = ag.call(arguments, 2);
        return ah.map(b, function (k) {
            return (ah.isFunction(j) ? j || k : k[j]).apply(k, i)
        })
    };
    ah.pluck = function (b, i) {
        return ah.map(b, function (j) {
            return j[i]
        })
    };
    ah.max = function (b, k, j) {
        if (!k && ah.isArray(b)) {
            return Math.max.apply(Math, b)
        }
        if (!k && ah.isEmpty(b)) {
            return -Infinity
        }
        var i = {
            computed: -Infinity
        };
        af(b, function (m, l, n) {
            l = k ? k.call(j, m, l, n) : m;
            l >= i.computed && (i = {
                value: m,
                computed: l
            })
        });
        return i.value
    };
    ah.min = function (b, k, j) {
        if (!k && ah.isArray(b)) {
            return Math.min.apply(Math, b)
        }
        if (!k && ah.isEmpty(b)) {
            return Infinity
        }
        var i = {
            computed: Infinity
        };
        af(b, function (m, l, n) {
            l = k ? k.call(j, m, l, n) : m;
            l < i.computed && (i = {
                value: m,
                computed: l
            })
        });
        return i.value
    };
    ah.shuffle = function (j) {
        var k = [],
            i;
        af(j, function (b, l) {
            l == 0 ? k[0] = b : (i = Math.floor(Math.random() * (l + 1)), k[l] = k[i], k[i] = b)
        });
        return k
    };
    ah.sortBy = function (b, j, i) {
        return ah.pluck(ah.map(b, function (l, k, m) {
            return {
                value: l,
                criteria: j.call(i, l, k, m)
            }
        }).sort(function (l, k) {
            var n = l.criteria,
                m = k.criteria;
            return n < m ? -1 : n > m ? 1 : 0
        }), "value")
    };
    ah.groupBy = function (b, k) {
        var j = {},
            i = ah.isFunction(k) ? k : function (l) {
                return l[k]
            };
        af(b, function (m, l) {
            var n = i(m, l);
            (j[n] || (j[n] = [])).push(m)
        });
        return j
    };
    ah.sortedIndex = function (b, m, l) {
        l || (l = ah.identity);
        for (var k = 0, j = b.length; k < j;) {
            var i = k + j >> 1;
            l(b[i]) < l(m) ? k = i + 1 : j = i
        }
        return k
    };
    ah.toArray = function (b) {
        return !b ? [] : b.toArray ? b.toArray() : ah.isArray(b) ? ag.call(b) : ah.isArguments(b) ? ag.call(b) : ah.values(b)
    };
    ah.size = function (b) {
        return ah.toArray(b).length
    };
    ah.first = ah.head = function (j, i, k) {
        return i != null && !k ? ag.call(j, 0, i) : j[0]
    };
    ah.initial = function (j, i, k) {
        return ag.call(j, 0, j.length - (i == null || k ? 1 : i))
    };
    ah.last = function (j, i, k) {
        return i != null && !k ? ag.call(j, Math.max(j.length - i, 0)) : j[j.length - 1]
    };
    ah.rest = ah.tail = function (j, i, k) {
        return ag.call(j, i == null || k ? 1 : i)
    };
    ah.compact = function (b) {
        return ah.filter(b, function (i) {
            return !!i
        })
    };
    ah.flatten = function (b, i) {
        return ah.reduce(b, function (j, k) {
            if (ah.isArray(k)) {
                return j.concat(i ? k : ah.flatten(k))
            }
            j[j.length] = k;
            return j
        }, [])
    };
    ah.without = function (b) {
        return ah.difference(b, ag.call(arguments, 1))
    };
    ah.uniq = ah.unique = function (b, k, j) {
        var j = j ? ah.map(b, j) : b,
            i = [];
        ah.reduce(j, function (n, m, l) {
            if (0 == l || (k === true ? ah.last(n) != m : !ah.include(n, m))) {
                n[n.length] = m, i[i.length] = b[l]
            }
            return n
        }, []);
        return i
    };
    ah.union = function () {
        return ah.uniq(ah.flatten(arguments, true))
    };
    ah.intersection = ah.intersect = function (b) {
        var i = ag.call(arguments, 1);
        return ah.filter(ah.uniq(b), function (j) {
            return ah.every(i, function (k) {
                return ah.indexOf(k, j) >= 0
            })
        })
    };
    ah.difference = function (b) {
        var i = ah.flatten(ag.call(arguments, 1));
        return ah.filter(b, function (j) {
            return !ah.include(i, j)
        })
    };
    ah.zip = function () {
        for (var b = ag.call(arguments), k = ah.max(ah.pluck(b, "length")), j = Array(k), i = 0; i < k; i++) {
            j[i] = ah.pluck(b, "" + i)
        }
        return j
    };
    ah.indexOf = function (b, k, j) {
        if (b == null) {
            return -1
        }
        var i;
        if (j) {
            return j = ah.sortedIndex(b, k), b[j] === k ? j : -1
        }
        if (W && b.indexOf === W) {
            return b.indexOf(k)
        }
        for (j = 0, i = b.length; j < i; j++) {
            if (j in b && b[j] === k) {
                return j
            }
        }
        return -1
    };
    ah.lastIndexOf = function (j, i) {
        if (j == null) {
            return -1
        }
        if (S && j.lastIndexOf === S) {
            return j.lastIndexOf(i)
        }
        for (var k = j.length; k--;) {
            if (k in j && j[k] === i) {
                return k
            }
        }
        return -1
    };
    ah.range = function (j, i, n) {
        arguments.length <= 1 && (i = j || 0, j = 0);
        for (var n = arguments[2] || 1, m = Math.max(Math.ceil((i - j) / n), 0), l = 0, k = Array(m); l < m;) {
            k[l++] = j, j += n
        }
        return k
    };
    var P = function () {};
    ah.bind = function (b, k) {
        var j, i;
        if (b.bind === R && R) {
            return R.apply(b, ag.call(arguments, 1))
        }
        if (!ah.isFunction(b)) {
            throw new TypeError
        }
        i = ag.call(arguments, 2);
        return j = function () {
            if (!(this instanceof j)) {
                return b.apply(k, i.concat(ag.call(arguments)))
            }
            P.prototype = b.prototype;
            var l = new P,
                m = b.apply(l, i.concat(ag.call(arguments)));
            return Object(m) === m ? m : l
        }
    };
    ah.bindAll = function (b) {
        var i = ag.call(arguments, 1);
        i.length == 0 && (i = ah.functions(b));
        af(i, function (j) {
            b[j] = ah.bind(b[j], b)
        });
        return b
    };
    ah.memoize = function (b, j) {
        var i = {};
        j || (j = ah.identity);
        return function () {
            var k = j.apply(this, arguments);
            return ac.call(i, k) ? i[k] : i[k] = b.apply(this, arguments)
        }
    };
    ah.delay = function (j, i) {
        var k = ag.call(arguments, 2);
        return setTimeout(function () {
            return j.apply(j, k)
        }, i)
    };
    ah.defer = function (b) {
        return ah.delay.apply(ah, [b, 1].concat(ag.call(arguments, 1)))
    };
    ah.throttle = function (b, p) {
        var o, n, m, l, k, j = ah.debounce(function () {
            k = l = false
        }, p);
        return function () {
            o = this;
            n = arguments;
            var i;
            m || (m = setTimeout(function () {
                m = null;
                k && b.apply(o, n);
                j()
            }, p));
            l ? k = true : b.apply(o, n);
            j();
            l = true
        }
    };
    ah.debounce = function (j, i) {
        var k;
        return function () {
            var l = this,
                b = arguments;
            clearTimeout(k);
            k = setTimeout(function () {
                k = null;
                j.apply(l, b)
            }, i)
        }
    };
    ah.once = function (j) {
        var i = false,
            k;
        return function () {
            if (i) {
                return k
            }
            i = true;
            return k = j.apply(this, arguments)
        }
    };
    ah.wrap = function (j, i) {
        return function () {
            var b = [j].concat(ag.call(arguments, 0));
            return i.apply(this, b)
        }
    };
    ah.compose = function () {
        var b = arguments;
        return function () {
            for (var i = arguments, j = b.length - 1; j >= 0; j--) {
                i = [b[j].apply(this, i)]
            }
            return i[0]
        }
    };
    ah.after = function (j, i) {
        return j <= 0 ? i() : function () {
            if (--j < 1) {
                return i.apply(this, arguments)
            }
        }
    };
    ah.keys = f ||
    function (j) {
        if (j !== Object(j)) {
            throw new TypeError("Invalid object")
        }
        var i = [],
            k;
        for (k in j) {
            ac.call(j, k) && (i[i.length] = k)
        }
        return i
    };
    ah.values = function (b) {
        return ah.map(b, ah.identity)
    };
    ah.functions = ah.methods = function (b) {
        var j = [],
            i;
        for (i in b) {
            ah.isFunction(b[i]) && j.push(i)
        }
        return j.sort()
    };
    ah.extend = function (b) {
        af(ag.call(arguments, 1), function (i) {
            for (var j in i) {
                i[j] !== void 0 && (b[j] = i[j])
            }
        });
        return b
    };
    ah.defaults = function (b) {
        af(ag.call(arguments, 1), function (i) {
            for (var j in i) {
                b[j] == null && (b[j] = i[j])
            }
        });
        return b
    };
    ah.clone = function (b) {
        return !ah.isObject(b) ? b : ah.isArray(b) ? b.slice() : ah.extend({}, b)
    };
    ah.tap = function (j, i) {
        i(j);
        return j
    };
    ah.isEqual = function (j, i) {
        return V(j, i, [])
    };
    ah.isEmpty = function (b) {
        if (ah.isArray(b) || ah.isString(b)) {
            return b.length === 0
        }
        for (var i in b) {
            if (ac.call(b, i)) {
                return false
            }
        }
        return true
    };
    ah.isElement = function (b) {
        return !!(b && b.nodeType == 1)
    };
    ah.isArray = Z ||
    function (b) {
        return ad.call(b) == "[object Array]"
    };
    ah.isObject = function (b) {
        return b === Object(b)
    };
    ah.isArguments = function (b) {
        return ad.call(b) == "[object Arguments]"
    };
    if (!ah.isArguments(arguments)) {
        ah.isArguments = function (b) {
            return !(!b || !ac.call(b, "callee"))
        }
    }
    ah.isFunction = function (b) {
        return ad.call(b) == "[object Function]"
    };
    ah.isString = function (b) {
        return ad.call(b) == "[object String]"
    };
    ah.isNumber = function (b) {
        return ad.call(b) == "[object Number]"
    };
    ah.isNaN = function (b) {
        return b !== b
    };
    ah.isBoolean = function (b) {
        return b === true || b === false || ad.call(b) == "[object Boolean]"
    };
    ah.isDate = function (b) {
        return ad.call(b) == "[object Date]"
    };
    ah.isRegExp = function (b) {
        return ad.call(b) == "[object RegExp]"
    };
    ah.isNull = function (b) {
        return b === null
    };
    ah.isUndefined = function (b) {
        return b === void 0
    };
    ah.noConflict = function () {
        T._ = N;
        return this
    };
    ah.identity = function (b) {
        return b
    };
    ah.times = function (j, i, l) {
        for (var k = 0; k < j; k++) {
            i.call(l, k)
        }
    };
    ah.escape = function (b) {
        return ("" + b).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;")
    };
    ah.mixin = function (b) {
        af(ah.functions(b), function (i) {
            d(i, ah[i] = b[i])
        })
    };
    var a = 0;
    ah.uniqueId = function (j) {
        var i = a++;
        return j ? j + i : i
    };
    ah.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var O = /.^/;
    ah.template = function (b, k) {
        var j = ah.templateSettings,
            j = "var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('" + b.replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(j.escape || O, function (m, l) {
                return "',_.escape(" + l.replace(/\\'/g, "'") + "),'"
            }).replace(j.interpolate || O, function (m, l) {
                return "'," + l.replace(/\\'/g, "'") + ",'"
            }).replace(j.evaluate || O, function (m, l) {
                return "');" + l.replace(/\\'/g, "'").replace(/[\r\n\t]/g, " ").replace(/\\\\/g, "\\") + ";__p.push('"
            }).replace(/\r/g, "\\r").replace(/\n/g, "\\n").replace(/\t/g, "\\t") + "');}return __p.join('');",
            i = new Function("obj", "_", j);
        return k ? i(k, ah) : function (l) {
            return i.call(this, l, ah)
        }
    };
    ah.chain = function (b) {
        return ah(b).chain()
    };
    var ab = function (b) {
            this._wrapped = b
        };
    ah.prototype = ab.prototype;
    var M = function (b, i) {
            return i ? ah(b).chain() : b
        },
        d = function (b, i) {
            ab.prototype[b] = function () {
                var j = ag.call(arguments);
                h.call(j, this._wrapped);
                return M(i.apply(ah, j), this._chain)
            }
        };
    ah.mixin(ah);
    af("pop,push,reverse,shift,sort,splice,unshift".split(","), function (j) {
        var i = ae[j];
        ab.prototype[j] = function () {
            var k = this._wrapped;
            i.apply(k, arguments);
            var b = k.length;
            (j == "shift" || j == "splice") && b === 0 && delete k[0];
            return M(k, this._chain)
        }
    });
    af(["concat", "join", "slice"], function (j) {
        var i = ae[j];
        ab.prototype[j] = function () {
            return M(i.apply(this._wrapped, arguments), this._chain)
        }
    });
    ab.prototype.chain = function () {
        this._chain = true;
        return this
    };
    ab.prototype.value = function () {
        return this._wrapped
    }
}).call(this);
(function () {
    var I = this,
        A = I.Backbone,
        L;
    L = typeof exports !== "undefined" ? exports : I.Backbone = {};
    L.VERSION = "0.5.3";
    var K = I._;
    if (!K && typeof require !== "undefined") {
        K = require("underscore")._
    }
    var J = I.jQuery || I.Zepto;
    L.noConflict = function () {
        I.Backbone = A;
        return this
    };
    L.emulateHTTP = !1;
    L.emulateJSON = !1;
    L.Events = {
        bind: function (f, e, h) {
            var g = this._callbacks || (this._callbacks = {});
            (g[f] || (g[f] = [])).push([e, h]);
            return this
        },
        unbind: function (g, f) {
            var j;
            if (g) {
                if (j = this._callbacks) {
                    if (f) {
                        j = j[g];
                        if (!j) {
                            return this
                        }
                        for (var i = 0, h = j.length; i < h; i++) {
                            if (j[i] && f === j[i][0]) {
                                j[i] = null;
                                break
                            }
                        }
                    } else {
                        j[g] = []
                    }
                }
            } else {
                this._callbacks = {}
            }
            return this
        },
        trigger: function (j) {
            var i, p, o, n, m = 2;
            if (!(p = this._callbacks)) {
                return this
            }
            for (; m--;) {
                if (i = m ? j : "all", i = p[i]) {
                    for (var l = 0, k = i.length; l < k; l++) {
                        (o = i[l]) ? (n = m ? Array.prototype.slice.call(arguments, 1) : arguments, o[0].apply(o[1] || this, n)) : (i.splice(l, 1), l--, k--)
                    }
                }
            }
            return this
        }
    };
    L.Model = function (f, e) {
        var g;
        f || (f = {});
        if (g = this.defaults) {
            K.isFunction(g) && (g = g.call(this)), f = K.extend({}, g, f)
        }
        this.attributes = {};
        this._escapedAttributes = {};
        this.cid = K.uniqueId("c");
        this.set(f, {
            silent: !0
        });
        this._changed = !1;
        this._previousAttributes = K.clone(this.attributes);
        if (e && e.collection) {
            this.collection = e.collection
        }
        this.initialize(f, e)
    };
    K.extend(L.Model.prototype, L.Events, {
        _previousAttributes: null,
        _changed: !1,
        idAttribute: "id",
        initialize: function () {},
        toJSON: function () {
            return K.clone(this.attributes)
        },
        get: function (e) {
            return this.attributes[e]
        },
        escape: function (f) {
            var e;
            if (e = this._escapedAttributes[f]) {
                return e
            }
            e = this.attributes[f];
            return this._escapedAttributes[f] = (e == null ? "" : "" + e).replace(/&(?!\w+;|#\d+;|#x[\da-f]+;)/gi, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;")
        },
        has: function (e) {
            return this.attributes[e] != null
        },
        set: function (i, f) {
            f || (f = {});
            if (!i) {
                return this
            }
            if (i.attributes) {
                i = i.attributes
            }
            var n = this.attributes,
                m = this._escapedAttributes;
            if (!f.silent && this.validate && !this._performValidation(i, f)) {
                return !1
            }
            if (this.idAttribute in i) {
                this.id = i[this.idAttribute]
            }
            var l = this._changing;
            this._changing = !0;
            for (var k in i) {
                var j = i[k];
                if (!K.isEqual(n[k], j)) {
                    n[k] = j, delete m[k], this._changed = !0, f.silent || this.trigger("change:" + k, this, j, f)
                }
            }!l && !f.silent && this._changed && this.change(f);
            this._changing = !1;
            return this
        },
        unset: function (f, e) {
            if (!(f in this.attributes)) {
                return this
            }
            e || (e = {});
            var g = {};
            g[f] = void 0;
            if (!e.silent && this.validate && !this._performValidation(g, e)) {
                return !1
            }
            delete this.attributes[f];
            delete this._escapedAttributes[f];
            f == this.idAttribute && delete this.id;
            this._changed = !0;
            e.silent || (this.trigger("change:" + f, this, void 0, e), this.change(e));
            return this
        },
        clear: function (f) {
            f || (f = {});
            var e, h = this.attributes,
                g = {};
            for (e in h) {
                g[e] = void 0
            }
            if (!f.silent && this.validate && !this._performValidation(g, f)) {
                return !1
            }
            this.attributes = {};
            this._escapedAttributes = {};
            this._changed = !0;
            if (!f.silent) {
                for (e in h) {
                    this.trigger("change:" + e, this, void 0, f)
                }
                this.change(f)
            }
            return this
        },
        fetch: function (f) {
            f || (f = {});
            var e = this,
                g = f.success;
            f.success = function (j, i, h) {
                if (!e.set(e.parse(j, h), f)) {
                    return !1
                }
                g && g(e, j)
            };
            f.error = H(f.error, e, f);
            return (this.sync || L.sync).call(this, "read", this, f)
        },
        save: function (g, e) {
            e || (e = {});
            if (g && !this.set(g, e)) {
                return !1
            }
            var j = this,
                i = e.success;
            e.success = function (k, m, l) {
                if (!j.set(j.parse(k, l), e)) {
                    return !1
                }
                i && i(j, k, l)
            };
            e.error = H(e.error, j, e);
            var h = this.isNew() ? "create" : "update";
            return (this.sync || L.sync).call(this, h, this, e)
        },
        destroy: function (f) {
            f || (f = {});
            if (this.isNew()) {
                return this.trigger("destroy", this, this.collection, f)
            }
            var e = this,
                g = f.success;
            f.success = function (h) {
                e.trigger("destroy", e, e.collection, f);
                g && g(e, h)
            };
            f.error = H(f.error, e, f);
            return (this.sync || L.sync).call(this, "delete", this, f)
        },
        url: function () {
            var e = F(this.collection) || this.urlRoot || E();
            if (this.isNew()) {
                return e
            }
            return e + (e.charAt(e.length - 1) == "/" ? "" : "/") + encodeURIComponent(this.id)
        },
        parse: function (e) {
            return e
        },
        clone: function () {
            return new this.constructor(this)
        },
        isNew: function () {
            return this.id == null
        },
        change: function (e) {
            this.trigger("change", this, e);
            this._previousAttributes = K.clone(this.attributes);
            this._changed = !1
        },
        hasChanged: function (e) {
            if (e) {
                return this._previousAttributes[e] != this.attributes[e]
            }
            return this._changed
        },
        changedAttributes: function (f) {
            f || (f = this.attributes);
            var e = this._previousAttributes,
                h = !1,
                g;
            for (g in f) {
                K.isEqual(e[g], f[g]) || (h = h || {}, h[g] = f[g])
            }
            return h
        },
        previous: function (e) {
            if (!e || !this._previousAttributes) {
                return null
            }
            return this._previousAttributes[e]
        },
        previousAttributes: function () {
            return K.clone(this._previousAttributes)
        },
        _performValidation: function (f, e) {
            var g = this.validate(f);
            if (g) {
                return e.error ? e.error(this, g, e) : this.trigger("error", this, g, e), !1
            }
            return !0
        }
    });
    L.Collection = function (f, e) {
        e || (e = {});
        if (e.comparator) {
            this.comparator = e.comparator
        }
        K.bindAll(this, "_onModelEvent", "_removeReference");
        this._reset();
        f && this.reset(f, {
            silent: !0
        });
        this.initialize.apply(this, arguments)
    };
    K.extend(L.Collection.prototype, L.Events, {
        model: L.Model,
        initialize: function () {},
        toJSON: function () {
            return this.map(function (e) {
                return e.toJSON()
            })
        },
        add: function (f, e) {
            if (K.isArray(f)) {
                for (var h = 0, g = f.length; h < g; h++) {
                    this._add(f[h], e)
                }
            } else {
                this._add(f, e)
            }
            return this
        },
        remove: function (f, e) {
            if (K.isArray(f)) {
                for (var h = 0, g = f.length; h < g; h++) {
                    this._remove(f[h], e)
                }
            } else {
                this._remove(f, e)
            }
            return this
        },
        get: function (e) {
            if (e == null) {
                return null
            }
            return this._byId[e.id != null ? e.id : e]
        },
        getByCid: function (e) {
            return e && this._byCid[e.cid || e]
        },
        at: function (e) {
            return this.models[e]
        },
        sort: function (e) {
            e || (e = {});
            if (!this.comparator) {
                throw Error("Cannot sort a set without a comparator")
            }
            this.models = this.sortBy(this.comparator);
            e.silent || this.trigger("reset", this, e);
            return this
        },
        pluck: function (e) {
            return K.map(this.models, function (f) {
                return f.get(e)
            })
        },
        reset: function (f, e) {
            f || (f = []);
            e || (e = {});
            this.each(this._removeReference);
            this._reset();
            this.add(f, {
                silent: !0
            });
            e.silent || this.trigger("reset", this, e);
            return this
        },
        fetch: function (f) {
            f || (f = {});
            var e = this,
                g = f.success;
            f.success = function (j, h, i) {
                e[f.add ? "add" : "reset"](e.parse(j, i), f);
                g && g(e, j)
            };
            f.error = H(f.error, e, f);
            return (this.sync || L.sync).call(this, "read", this, f)
        },
        create: function (f, e) {
            var h = this;
            e || (e = {});
            f = this._prepareModel(f, e);
            if (!f) {
                return !1
            }
            var g = e.success;
            e.success = function (i, k, j) {
                h.add(i, e);
                g && g(i, k, j)
            };
            f.save(null, e);
            return f
        },
        parse: function (e) {
            return e
        },
        chain: function () {
            return K(this.models).chain()
        },
        _reset: function () {
            this.length = 0;
            this.models = [];
            this._byId = {};
            this._byCid = {}
        },
        _prepareModel: function (f, e) {
            if (f instanceof L.Model) {
                if (!f.collection) {
                    f.collection = this
                }
            } else {
                var g = f;
                f = new this.model(g, {
                    collection: this
                });
                f.validate && !f._performValidation(g, e) && (f = !1)
            }
            return f
        },
        _add: function (f, e) {
            e || (e = {});
            f = this._prepareModel(f, e);
            if (!f) {
                return !1
            }
            var g = this.getByCid(f);
            if (g) {
                throw Error(["Can't add the same model to a set twice", g.id])
            }
            this._byId[f.id] = f;
            this._byCid[f.cid] = f;
            this.models.splice(e.at != null ? e.at : this.comparator ? this.sortedIndex(f, this.comparator) : this.length, 0, f);
            f.bind("all", this._onModelEvent);
            this.length++;
            e.silent || f.trigger("add", f, this, e);
            return f
        },
        _remove: function (f, e) {
            e || (e = {});
            f = this.getByCid(f) || this.get(f);
            if (!f) {
                return null
            }
            delete this._byId[f.id];
            delete this._byCid[f.cid];
            this.models.splice(this.indexOf(f), 1);
            this.length--;
            e.silent || f.trigger("remove", f, this, e);
            this._removeReference(f);
            return f
        },
        _removeReference: function (e) {
            this == e.collection && delete e.collection;
            e.unbind("all", this._onModelEvent)
        },
        _onModelEvent: function (f, e, h, g) {
            (f == "add" || f == "remove") && h != this || (f == "destroy" && this._remove(e, g), e && f === "change:" + e.idAttribute && (delete this._byId[e.previous(e.idAttribute)], this._byId[e.id] = e), this.trigger.apply(this, arguments))
        }
    });
    K.each(["forEach", "each", "map", "reduce", "reduceRight", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "sortBy", "sortedIndex", "toArray", "size", "first", "rest", "last", "without", "indexOf", "lastIndexOf", "isEmpty", "groupBy"], function (e) {
        L.Collection.prototype[e] = function () {
            return K[e].apply(K, [this.models].concat(K.toArray(arguments)))
        }
    });
    L.Router = function (e) {
        e || (e = {});
        if (e.routes) {
            this.routes = e.routes
        }
        this._bindRoutes();
        this.initialize.apply(this, arguments)
    };
    var z = /:([\w\d]+)/g,
        y = /\*([\w\d]+)/g,
        x = /[-[\]{}()+?.,\\^$|#\s]/g;
    K.extend(L.Router.prototype, L.Events, {
        initialize: function () {},
        route: function (f, e, g) {
            L.history || (L.history = new L.History);
            K.isRegExp(f) || (f = this._routeToRegExp(f));
            L.history.route(f, K.bind(function (h) {
                h = this._extractParameters(f, h);
                g.apply(this, h);
                this.trigger.apply(this, ["route:" + e].concat(h))
            }, this))
        },
        navigate: function (f, e) {
            L.history.navigate(f, e)
        },
        _bindRoutes: function () {
            if (this.routes) {
                var f = [],
                    e;
                for (e in this.routes) {
                    f.unshift([e, this.routes[e]])
                }
                e = 0;
                for (var g = f.length; e < g; e++) {
                    this.route(f[e][0], f[e][1], this[f[e][1]])
                }
            }
        },
        _routeToRegExp: function (e) {
            e = e.replace(x, "\\$&").replace(z, "([^/]*)").replace(y, "(.*?)");
            return RegExp("^" + e + "$")
        },
        _extractParameters: function (f, e) {
            return f.exec(e).slice(1)
        }
    });
    L.History = function () {
        this.handlers = [];
        K.bindAll(this, "checkUrl")
    };
    var G = /^#*/,
        d = /msie [\w.]+/,
        D = !1;
    K.extend(L.History.prototype, {
        interval: 50,
        getFragment: function (f, e) {
            if (f == null) {
                if (this._hasPushState || e) {
                    f = window.location.pathname;
                    var g = window.location.search;
                    g && (f += g);
                    f.indexOf(this.options.root) == 0 && (f = f.substr(this.options.root.length))
                } else {
                    f = window.location.hash
                }
            }
            return decodeURIComponent(f.replace(G, ""))
        },
        start: function (f) {
            if (D) {
                throw Error("Backbone.history has already been started")
            }
            this.options = K.extend({}, {
                root: "/"
            }, this.options, f);
            this._wantsPushState = !! this.options.pushState;
            this._hasPushState = !(!this.options.pushState || !window.history || !window.history.pushState);
            f = this.getFragment();
            var e = document.documentMode;
            if (e = d.exec(navigator.userAgent.toLowerCase()) && (!e || e <= 7)) {
                this.iframe = J('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow, this.navigate(f)
            }
            this._hasPushState ? J(window).bind("popstate", this.checkUrl) : "onhashchange" in window && !e ? J(window).bind("hashchange", this.checkUrl) : setInterval(this.checkUrl, this.interval);
            this.fragment = f;
            D = !0;
            f = window.location;
            e = f.pathname == this.options.root;
            if (this._wantsPushState && !this._hasPushState && !e) {
                return this.fragment = this.getFragment(null, !0), window.location.replace(this.options.root + "#" + this.fragment), !0
            } else {
                if (this._wantsPushState && this._hasPushState && e && f.hash) {
                    this.fragment = f.hash.replace(G, ""), window.history.replaceState({}, document.title, f.protocol + "//" + f.host + this.options.root + this.fragment)
                }
            }
            if (!this.options.silent) {
                return this.loadUrl()
            }
        },
        route: function (f, e) {
            this.handlers.unshift({
                route: f,
                callback: e
            })
        },
        checkUrl: function () {
            var e = this.getFragment();
            e == this.fragment && this.iframe && (e = this.getFragment(this.iframe.location.hash));
            if (e == this.fragment || e == decodeURIComponent(this.fragment)) {
                return !1
            }
            this.iframe && this.navigate(e);
            this.loadUrl() || this.loadUrl(window.location.hash)
        },
        loadUrl: function (f) {
            var e = this.fragment = this.getFragment(f);
            return K.any(this.handlers, function (g) {
                if (g.route.test(e)) {
                    return g.callback(e), !0
                }
            })
        },
        navigate: function (f, e) {
            var h = (f || "").replace(G, "");
            if (!(this.fragment == h || this.fragment == decodeURIComponent(h))) {
                if (this._hasPushState) {
                    var g = window.location;
                    h.indexOf(this.options.root) != 0 && (h = this.options.root + h);
                    this.fragment = h;
                    window.history.pushState({}, document.title, g.protocol + "//" + g.host + h)
                } else {
                    if (window.location.hash = this.fragment = h, this.iframe && h != this.getFragment(this.iframe.location.hash)) {
                        this.iframe.document.open().close(), this.iframe.location.hash = h
                    }
                }
                e && this.loadUrl(f)
            }
        }
    });
    L.View = function (e) {
        this.cid = K.uniqueId("view");
        this._configure(e || {});
        this._ensureElement();
        this.delegateEvents();
        this.initialize.apply(this, arguments)
    };
    var c = /^(\S+)\s*(.*)$/,
        C = ["model", "collection", "el", "id", "attributes", "className", "tagName"];
    K.extend(L.View.prototype, L.Events, {
        tagName: "div",
        $: function (e) {
            return J(e, this.el)
        },
        initialize: function () {},
        render: function () {
            return this
        },
        remove: function () {
            J(this.el).remove();
            return this
        },
        make: function (f, e, g) {
            f = document.createElement(f);
            e && J(f).attr(e);
            g && J(f).html(g);
            return f
        },
        delegateEvents: function (g) {
            if (g || (g = this.events)) {
                for (var f in K.isFunction(g) && (g = g.call(this)), J(this.el).unbind(".delegateEvents" + this.cid), g) {
                    var j = this[g[f]];
                    if (!j) {
                        throw Error('Event "' + g[f] + '" does not exist')
                    }
                    var i = f.match(c),
                        h = i[1];
                    i = i[2];
                    j = K.bind(j, this);
                    h += ".delegateEvents" + this.cid;
                    i === "" ? J(this.el).bind(h, j) : J(this.el).delegate(i, h, j)
                }
            }
        },
        _configure: function (f) {
            this.options && (f = K.extend({}, this.options, f));
            for (var e = 0, h = C.length; e < h; e++) {
                var g = C[e];
                f[g] && (this[g] = f[g])
            }
            this.options = f
        },
        _ensureElement: function () {
            if (this.el) {
                if (K.isString(this.el)) {
                    this.el = J(this.el).get(0)
                }
            } else {
                var e = this.attributes || {};
                if (this.id) {
                    e.id = this.id
                }
                if (this.className) {
                    e["class"] = this.className
                }
                this.el = this.make(this.tagName, e)
            }
        }
    });
    L.Model.extend = L.Collection.extend = L.Router.extend = L.View.extend = function (f, e) {
        var g = b(this, f, e);
        g.extend = this.extend;
        return g
    };
    var a = {
        create: "POST",
        update: "PUT",
        "delete": "DELETE",
        read: "GET"
    };
    L.sync = function (f, e, h) {
        var g = a[f];
        h = K.extend({
            type: g,
            dataType: "json"
        }, h);
        if (!h.url) {
            h.url = F(e) || E()
        }
        if (!h.data && e && (f == "create" || f == "update")) {
            h.contentType = "application/json", h.data = JSON.stringify(e.toJSON())
        }
        if (L.emulateJSON) {
            h.contentType = "application/x-www-form-urlencoded", h.data = h.data ? {
                model: h.data
            } : {}
        }
        if (L.emulateHTTP && (g === "PUT" || g === "DELETE")) {
            if (L.emulateJSON) {
                h.data._method = g
            }
            h.type = "POST";
            h.beforeSend = function (i) {
                i.setRequestHeader("X-HTTP-Method-Override", g)
            }
        }
        if (h.type !== "GET" && !L.emulateJSON) {
            h.processData = !1
        }
        return J.ajax(h)
    };
    var B = function () {},
        b = function (f, e, h) {
            var g;
            g = e && e.hasOwnProperty("constructor") ? e.constructor : function () {
                return f.apply(this, arguments)
            };
            K.extend(g, f);
            B.prototype = f.prototype;
            g.prototype = new B;
            e && K.extend(g.prototype, e);
            h && K.extend(g, h);
            g.prototype.constructor = g;
            g.__super__ = f.prototype;
            return g
        },
        F = function (e) {
            if (!e || !e.url) {
                return null
            }
            return K.isFunction(e.url) ? e.url() : e.url
        },
        E = function () {
            throw Error('A "url" property or function must be specified')
        },
        H = function (f, e, g) {
            return function (h) {
                f ? f(e, h, g) : e.trigger("error", e, h, g)
            }
        }
}).call(this);

function S4() {
    return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1)
}
function guid() {
    return S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4()
}
window.Store = function (d) {
    this.name = d;
    var c = localStorage.getItem(this.name);
    this.records = c && c.split(",") || []
}, _.extend(Store.prototype, {
    save: function () {
        localStorage.setItem(this.name, this.records.join(","))
    },
    create: function (b) {
        return b.id || (b.id = b.attributes.id = guid()), localStorage.setItem(this.name + "-" + b.id, JSON.stringify(b)), this.records.push(b.id.toString()), this.save(), b
    },
    update: function (b) {
        return localStorage.setItem(this.name + "-" + b.id, JSON.stringify(b)), _.include(this.records, b.id.toString()) || this.records.push(b.id.toString()), this.save(), b
    },
    find: function (b) {
        return JSON.parse(localStorage.getItem(this.name + "-" + b.id))
    },
    findAll: function () {
        return _.map(this.records, function (b) {
            return JSON.parse(localStorage.getItem(this.name + "-" + b))
        }, this)
    },
    destroy: function (b) {
        return localStorage.removeItem(this.name + "-" + b.id), this.records = _.reject(this.records, function (a) {
            return a == b.id.toString()
        }), this.save(), b
    }
}), Backbone.localSync = function (h, g, l, k) {
    typeof l == "function" && (l = {
        success: l,
        error: k
    });
    var j, i = g.localStorage || g.collection.localStorage;
    switch (h) {
    case "read":
        j = g.id != undefined ? i.find(g) : i.findAll();
        break;
    case "create":
        j = i.create(g);
        break;
    case "update":
        j = i.update(g);
        break;
    case "delete":
        j = i.destroy(g)
    }
    j ? l.success(j) : l.error("Record not found")
}, Backbone.ajaxSync = Backbone.sync, Backbone.sync = Backbone.localSync;
(function (au) {
    var aL;
    au.fn.emptyForce = function () {
        for (var b = 0, a;
        (a = au(this)[b]) != null; b++) {
            if (a.nodeType === 1) {
                jQuery.cleanData(a.getElementsByTagName("*"))
            }
            if (au.jqplot_use_excanvas) {
                a.outerHTML = ""
            } else {
                while (a.firstChild) {
                    a.removeChild(a.firstChild)
                }
            }
            a = null
        }
        return au(this)
    };
    au.fn.removeChildForce = function (a) {
        while (a.firstChild) {
            this.removeChildForce(a.firstChild);
            a.removeChild(a.firstChild)
        }
    };
    au.jqplot = function (b, e, g) {
        var f, h;
        if (g == null) {
            if (jQuery.isArray(e)) {
                f = e;
                h = null
            } else {
                if (typeof (e) === "object") {
                    f = null;
                    h = e
                }
            }
        } else {
            f = e;
            h = g
        }
        var c = new an();
        au("#" + b).removeClass("jqplot-error");
        if (au.jqplot.config.catchErrors) {
            try {
                c.init(b, f, h);
                c.draw();
                c.themeEngine.init.call(c);
                return c
            } catch (d) {
                var a = au.jqplot.config.errorMessage || d.message;
                au("#" + b).append('<div class="jqplot-error-message">' + a + "</div>");
                au("#" + b).addClass("jqplot-error");
                document.getElementById(b).style.background = au.jqplot.config.errorBackground;
                document.getElementById(b).style.border = au.jqplot.config.errorBorder;
                document.getElementById(b).style.fontFamily = au.jqplot.config.errorFontFamily;
                document.getElementById(b).style.fontSize = au.jqplot.config.errorFontSize;
                document.getElementById(b).style.fontStyle = au.jqplot.config.errorFontStyle;
                document.getElementById(b).style.fontWeight = au.jqplot.config.errorFontWeight
            }
        } else {
            c.init(b, f, h);
            c.draw();
            c.themeEngine.init.call(c);
            return c
        }
    };
    au.jqplot.version = "1.0.0b2_r1012";
    au.jqplot.CanvasManager = function () {
        if (typeof au.jqplot.CanvasManager.canvases == "undefined") {
            au.jqplot.CanvasManager.canvases = [];
            au.jqplot.CanvasManager.free = []
        }
        var a = [];
        this.getCanvas = function () {
            var c;
            var d = true;
            if (!au.jqplot.use_excanvas) {
                for (var b = 0, e = au.jqplot.CanvasManager.canvases.length; b < e; b++) {
                    if (au.jqplot.CanvasManager.free[b] === true) {
                        d = false;
                        c = au.jqplot.CanvasManager.canvases[b];
                        au.jqplot.CanvasManager.free[b] = false;
                        a.push(b);
                        break
                    }
                }
            }
            if (d) {
                c = document.createElement("canvas");
                a.push(au.jqplot.CanvasManager.canvases.length);
                au.jqplot.CanvasManager.canvases.push(c);
                au.jqplot.CanvasManager.free.push(false)
            }
            return c
        };
        this.initCanvas = function (b) {
            if (au.jqplot.use_excanvas) {
                return window.G_vmlCanvasManager.initElement(b)
            }
            return b
        };
        this.freeAllCanvases = function () {
            for (var b = 0, c = a.length; b < c; b++) {
                this.freeCanvas(a[b])
            }
            a = []
        };
        this.freeCanvas = function (c) {
            if (au.jqplot.use_excanvas && window.G_vmlCanvasManager.uninitElement !== aL) {
                window.G_vmlCanvasManager.uninitElement(au.jqplot.CanvasManager.canvases[c]);
                au.jqplot.CanvasManager.canvases[c] = null
            } else {
                var b = au.jqplot.CanvasManager.canvases[c];
                b.getContext("2d").clearRect(0, 0, b.width, b.height);
                au(b).unbind().removeAttr("class").removeAttr("style");
                au(b).css({
                    left: "",
                    top: "",
                    position: ""
                });
                b.width = 0;
                b.height = 0;
                au.jqplot.CanvasManager.free[c] = true
            }
        }
    };
    au.jqplot.log = function () {
        if (window.console) {
            window.console.log.apply(window.console, arguments)
        }
    };
    au.jqplot.config = {
        addDomReference: false,
        enablePlugins: false,
        defaultHeight: 300,
        defaultWidth: 400,
        UTCAdjust: false,
        timezoneOffset: new Date(new Date().getTimezoneOffset() * 60000),
        errorMessage: "",
        errorBackground: "",
        errorBorder: "",
        errorFontFamily: "",
        errorFontSize: "",
        errorFontStyle: "",
        errorFontWeight: "",
        catchErrors: false,
        defaultTickFormatString: "%.1f",
        defaultColors: ["#333333", "#EAA228", "#c5b47f", "#579575", "#839557", "#958c12", "#953579", "#4b5de4", "#d8b83f", "#ff5800", "#0085cc", "#c747a3", "#cddf54", "#FBD178", "#26B4E3", "#bd70c7"],
        defaultNegativeColors: ["#498991", "#C08840", "#9F9274", "#546D61", "#646C4A", "#6F6621", "#6E3F5F", "#4F64B0", "#A89050", "#C45923", "#187399", "#945381", "#959E5C", "#C7AF7B", "#478396", "#907294"],
        dashLength: 4,
        gapLength: 4,
        dotGapLength: 2.5,
        srcLocation: "jqplot/src/",
        pluginLocation: "jqplot/src/plugins/"
    };
    au.jqplot.arrayMax = function (a) {
        return Math.max.apply(Math, a)
    };
    au.jqplot.arrayMin = function (a) {
        return Math.min.apply(Math, a)
    };
    au.jqplot.enablePlugins = au.jqplot.config.enablePlugins;
    au.jqplot.support_canvas = function () {
        if (typeof au.jqplot.support_canvas.result == "undefined") {
            au.jqplot.support_canvas.result = !! document.createElement("canvas").getContext
        }
        return au.jqplot.support_canvas.result
    };
    au.jqplot.support_canvas_text = function () {
        if (typeof au.jqplot.support_canvas_text.result == "undefined") {
            if (window.G_vmlCanvasManager !== aL && window.G_vmlCanvasManager._version > 887) {
                au.jqplot.support_canvas_text.result = true
            } else {
                au.jqplot.support_canvas_text.result = !! (document.createElement("canvas").getContext && typeof document.createElement("canvas").getContext("2d").fillText == "function")
            }
        }
        return au.jqplot.support_canvas_text.result
    };
    au.jqplot.use_excanvas = (au.browser.msie && !au.jqplot.support_canvas()) ? true : false;
    au.jqplot.preInitHooks = [];
    au.jqplot.postInitHooks = [];
    au.jqplot.preParseOptionsHooks = [];
    au.jqplot.postParseOptionsHooks = [];
    au.jqplot.preDrawHooks = [];
    au.jqplot.postDrawHooks = [];
    au.jqplot.preDrawSeriesHooks = [];
    au.jqplot.postDrawSeriesHooks = [];
    au.jqplot.preDrawLegendHooks = [];
    au.jqplot.addLegendRowHooks = [];
    au.jqplot.preSeriesInitHooks = [];
    au.jqplot.postSeriesInitHooks = [];
    au.jqplot.preParseSeriesOptionsHooks = [];
    au.jqplot.postParseSeriesOptionsHooks = [];
    au.jqplot.eventListenerHooks = [];
    au.jqplot.preDrawSeriesShadowHooks = [];
    au.jqplot.postDrawSeriesShadowHooks = [];
    au.jqplot.ElemContainer = function () {
        this._elem;
        this._plotWidth;
        this._plotHeight;
        this._plotDimensions = {
            height: null,
            width: null
        }
    };
    au.jqplot.ElemContainer.prototype.createElement = function (d, b, f, e, a) {
        this._offsets = b;
        var g = f || "jqplot";
        var c = document.createElement(d);
        this._elem = au(c);
        this._elem.addClass(g);
        this._elem.css(e);
        this._elem.attr(a);
        c = null;
        return this._elem
    };
    au.jqplot.ElemContainer.prototype.getWidth = function () {
        if (this._elem) {
            return this._elem.outerWidth(true)
        } else {
            return null
        }
    };
    au.jqplot.ElemContainer.prototype.getHeight = function () {
        if (this._elem) {
            return this._elem.outerHeight(true)
        } else {
            return null
        }
    };
    au.jqplot.ElemContainer.prototype.getPosition = function () {
        if (this._elem) {
            return this._elem.position()
        } else {
            return {
                top: null,
                left: null,
                bottom: null,
                right: null
            }
        }
    };
    au.jqplot.ElemContainer.prototype.getTop = function () {
        return this.getPosition().top
    };
    au.jqplot.ElemContainer.prototype.getLeft = function () {
        return this.getPosition().left
    };
    au.jqplot.ElemContainer.prototype.getBottom = function () {
        return this._elem.css("bottom")
    };
    au.jqplot.ElemContainer.prototype.getRight = function () {
        return this._elem.css("right")
    };

    function aK(a) {
        au.jqplot.ElemContainer.call(this);
        this.name = a;
        this._series = [];
        this.show = false;
        this.tickRenderer = au.jqplot.AxisTickRenderer;
        this.tickOptions = {};
        this.labelRenderer = au.jqplot.AxisLabelRenderer;
        this.labelOptions = {};
        this.label = null;
        this.showLabel = true;
        this.min = null;
        this.max = null;
        this.autoscale = false;
        this.pad = 1.2;
        this.padMax = null;
        this.padMin = null;
        this.ticks = [];
        this.numberTicks;
        this.tickInterval;
        this.renderer = au.jqplot.LinearAxisRenderer;
        this.rendererOptions = {};
        this.showTicks = true;
        this.showTickMarks = true;
        this.showMinorTicks = true;
        this.drawMajorGridlines = true;
        this.drawMinorGridlines = false;
        this.drawMajorTickMarks = true;
        this.drawMinorTickMarks = true;
        this.useSeriesColor = false;
        this.borderWidth = null;
        this.borderColor = null;
        this._dataBounds = {
            min: null,
            max: null
        };
        this._intervalStats = [];
        this._offsets = {
            min: null,
            max: null
        };
        this._ticks = [];
        this._label = null;
        this.syncTicks = null;
        this.tickSpacing = 75;
        this._min = null;
        this._max = null;
        this._tickInterval = null;
        this._numberTicks = null;
        this.__ticks = null;
        this._options = {}
    }
    aK.prototype = new au.jqplot.ElemContainer();
    aK.prototype.constructor = aK;
    aK.prototype.init = function () {
        this.renderer = new this.renderer();
        this.tickOptions.axis = this.name;
        if (this.tickOptions.showMark == null) {
            this.tickOptions.showMark = this.showTicks
        }
        if (this.tickOptions.showMark == null) {
            this.tickOptions.showMark = this.showTickMarks
        }
        if (this.tickOptions.showLabel == null) {
            this.tickOptions.showLabel = this.showTicks
        }
        if (this.label == null || this.label == "") {
            this.showLabel = false
        } else {
            this.labelOptions.label = this.label
        }
        if (this.showLabel == false) {
            this.labelOptions.show = false
        }
        if (this.pad == 0) {
            this.pad = 1
        }
        if (this.padMax == 0) {
            this.padMax = 1
        }
        if (this.padMin == 0) {
            this.padMin = 1
        }
        if (this.padMax == null) {
            this.padMax = (this.pad - 1) / 2 + 1
        }
        if (this.padMin == null) {
            this.padMin = (this.pad - 1) / 2 + 1
        }
        this.pad = this.padMax + this.padMin - 1;
        if (this.min != null || this.max != null) {
            this.autoscale = false
        }
        if (this.syncTicks == null && this.name.indexOf("y") > -1) {
            this.syncTicks = true
        } else {
            if (this.syncTicks == null) {
                this.syncTicks = false
            }
        }
        this.renderer.init.call(this, this.rendererOptions)
    };
    aK.prototype.draw = function (b, a) {
        if (this.__ticks) {
            this.__ticks = null
        }
        return this.renderer.draw.call(this, b, a)
    };
    aK.prototype.set = function () {
        this.renderer.set.call(this)
    };
    aK.prototype.pack = function (a, b) {
        if (this.show) {
            this.renderer.pack.call(this, a, b)
        }
        if (this._min == null) {
            this._min = this.min;
            this._max = this.max;
            this._tickInterval = this.tickInterval;
            this._numberTicks = this.numberTicks;
            this.__ticks = this._ticks
        }
    };
    aK.prototype.reset = function () {
        this.renderer.reset.call(this)
    };
    aK.prototype.resetScale = function (a) {
        au.extend(true, this, {
            min: null,
            max: null,
            numberTicks: null,
            tickInterval: null,
            _ticks: [],
            ticks: []
        }, a);
        this.resetDataBounds()
    };
    aK.prototype.resetDataBounds = function () {
        var b = this._dataBounds;
        b.min = null;
        b.max = null;
        var h, a, d;
        var g = (this.show) ? true : false;
        for (var e = 0; e < this._series.length; e++) {
            a = this._series[e];
            if (a.show) {
                d = a._plotData;
                if (a._type === "line" && a.renderer.bands.show && this.name.charAt(0) !== "x") {
                    d = [
                        [0, a.renderer.bands._min],
                        [1, a.renderer.bands._max]
                    ]
                }
                var i = 1,
                    c = 1;
                if (a._type != null && a._type == "ohlc") {
                    i = 3;
                    c = 2
                }
                for (var f = 0, h = d.length; f < h; f++) {
                    if (this.name == "xaxis" || this.name == "x2axis") {
                        if ((d[f][0] != null && d[f][0] < b.min) || b.min == null) {
                            b.min = d[f][0]
                        }
                        if ((d[f][0] != null && d[f][0] > b.max) || b.max == null) {
                            b.max = d[f][0]
                        }
                    } else {
                        if ((d[f][i] != null && d[f][i] < b.min) || b.min == null) {
                            b.min = d[f][i]
                        }
                        if ((d[f][c] != null && d[f][c] > b.max) || b.max == null) {
                            b.max = d[f][c]
                        }
                    }
                }
                if (g && a.renderer.constructor !== au.jqplot.BarRenderer) {
                    g = false
                } else {
                    if (g && this._options.hasOwnProperty("forceTickAt0") && this._options.forceTickAt0 == false) {
                        g = false
                    } else {
                        if (g && a.renderer.constructor === au.jqplot.BarRenderer) {
                            if (a.barDirection == "vertical" && this.name != "xaxis" && this.name != "x2axis") {
                                if (this._options.pad != null || this._options.padMin != null) {
                                    g = false
                                }
                            } else {
                                if (a.barDirection == "horizontal" && (this.name == "xaxis" || this.name == "x2axis")) {
                                    if (this._options.pad != null || this._options.padMin != null) {
                                        g = false
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        if (g && this.renderer.constructor === au.jqplot.LinearAxisRenderer && b.min >= 0) {
            this.padMin = 1;
            this.forceTickAt0 = true
        }
    };

    function aP(a) {
        au.jqplot.ElemContainer.call(this);
        this.show = false;
        this.location = "ne";
        this.labels = [];
        this.showLabels = true;
        this.showSwatches = true;
        this.placement = "insideGrid";
        this.xoffset = 0;
        this.yoffset = 0;
        this.border;
        this.background;
        this.textColor;
        this.fontFamily;
        this.fontSize;
        this.rowSpacing = "0.5em";
        this.renderer = au.jqplot.TableLegendRenderer;
        this.rendererOptions = {};
        this.preDraw = false;
        this.marginTop = null;
        this.marginRight = null;
        this.marginBottom = null;
        this.marginLeft = null;
        this.escapeHtml = false;
        this._series = [];
        au.extend(true, this, a)
    }
    aP.prototype = new au.jqplot.ElemContainer();
    aP.prototype.constructor = aP;
    aP.prototype.setOptions = function (a) {
        au.extend(true, this, a);
        if (this.placement == "inside") {
            this.placement = "insideGrid"
        }
        if (this.xoffset > 0) {
            if (this.placement == "insideGrid") {
                switch (this.location) {
                case "nw":
                case "w":
                case "sw":
                    if (this.marginLeft == null) {
                        this.marginLeft = this.xoffset + "px"
                    }
                    this.marginRight = "0px";
                    break;
                case "ne":
                case "e":
                case "se":
                default:
                    if (this.marginRight == null) {
                        this.marginRight = this.xoffset + "px"
                    }
                    this.marginLeft = "0px";
                    break
                }
            } else {
                if (this.placement == "outside") {
                    switch (this.location) {
                    case "nw":
                    case "w":
                    case "sw":
                        if (this.marginRight == null) {
                            this.marginRight = this.xoffset + "px"
                        }
                        this.marginLeft = "0px";
                        break;
                    case "ne":
                    case "e":
                    case "se":
                    default:
                        if (this.marginLeft == null) {
                            this.marginLeft = this.xoffset + "px"
                        }
                        this.marginRight = "0px";
                        break
                    }
                }
            }
            this.xoffset = 0
        }
        if (this.yoffset > 0) {
            if (this.placement == "outside") {
                switch (this.location) {
                case "sw":
                case "s":
                case "se":
                    if (this.marginTop == null) {
                        this.marginTop = this.yoffset + "px"
                    }
                    this.marginBottom = "0px";
                    break;
                case "ne":
                case "n":
                case "nw":
                default:
                    if (this.marginBottom == null) {
                        this.marginBottom = this.yoffset + "px"
                    }
                    this.marginTop = "0px";
                    break
                }
            } else {
                if (this.placement == "insideGrid") {
                    switch (this.location) {
                    case "sw":
                    case "s":
                    case "se":
                        if (this.marginBottom == null) {
                            this.marginBottom = this.yoffset + "px"
                        }
                        this.marginTop = "0px";
                        break;
                    case "ne":
                    case "n":
                    case "nw":
                    default:
                        if (this.marginTop == null) {
                            this.marginTop = this.yoffset + "px"
                        }
                        this.marginBottom = "0px";
                        break
                    }
                }
            }
            this.yoffset = 0
        }
    };
    aP.prototype.init = function () {
        this.renderer = new this.renderer();
        this.renderer.init.call(this, this.rendererOptions)
    };
    aP.prototype.draw = function (a) {
        for (var b = 0; b < au.jqplot.preDrawLegendHooks.length; b++) {
            au.jqplot.preDrawLegendHooks[b].call(this, a)
        }
        return this.renderer.draw.call(this, a)
    };
    aP.prototype.pack = function (a) {
        this.renderer.pack.call(this, a)
    };

    function aI(a) {
        au.jqplot.ElemContainer.call(this);
        this.text = a;
        this.show = true;
        this.fontFamily;
        this.fontSize;
        this.textAlign;
        this.textColor;
        this.renderer = au.jqplot.DivTitleRenderer;
        this.rendererOptions = {};
        this.escapeHtml = false
    }
    aI.prototype = new au.jqplot.ElemContainer();
    aI.prototype.constructor = aI;
    aI.prototype.init = function () {
        this.renderer = new this.renderer();
        this.renderer.init.call(this, this.rendererOptions)
    };
    aI.prototype.draw = function (a) {
        return this.renderer.draw.call(this, a)
    };
    aI.prototype.pack = function () {
        this.renderer.pack.call(this)
    };

    function am() {
        au.jqplot.ElemContainer.call(this);
        this.show = true;
        this.xaxis = "xaxis";
        this._xaxis;
        this.yaxis = "yaxis";
        this._yaxis;
        this.gridBorderWidth = 2;
        this.renderer = au.jqplot.LineRenderer;
        this.rendererOptions = {};
        this.data = [];
        this.gridData = [];
        this.label = "";
        this.showLabel = true;
        this.color;
        this.negativeColor;
        this.lineWidth = 2.5;
        this.lineJoin = "round";
        this.lineCap = "round";
        this.linePattern = "solid";
        this.shadow = true;
        this.shadowAngle = 45;
        this.shadowOffset = 1.25;
        this.shadowDepth = 3;
        this.shadowAlpha = "0.1";
        this.breakOnNull = false;
        this.markerRenderer = au.jqplot.MarkerRenderer;
        this.markerOptions = {};
        this.showLine = true;
        this.showMarker = true;
        this.index;
        this.fill = false;
        this.fillColor;
        this.fillAlpha;
        this.fillAndStroke = false;
        this.disableStack = false;
        this._stack = false;
        this.neighborThreshold = 4;
        this.fillToZero = false;
        this.fillToValue = 0;
        this.fillAxis = "y";
        this.useNegativeColors = true;
        this._stackData = [];
        this._plotData = [];
        this._plotValues = {
            x: [],
            y: []
        };
        this._intervals = {
            x: {},
            y: {}
        };
        this._prevPlotData = [];
        this._prevGridData = [];
        this._stackAxis = "y";
        this._primaryAxis = "_xaxis";
        this.canvas = new au.jqplot.GenericCanvas();
        this.shadowCanvas = new au.jqplot.GenericCanvas();
        this.plugins = {};
        this._sumy = 0;
        this._sumx = 0;
        this._type = ""
    }
    am.prototype = new au.jqplot.ElemContainer();
    am.prototype.constructor = am;
    am.prototype.init = function (e, a, c) {
        this.index = e;
        this.gridBorderWidth = a;
        var b = this.data;
        var f = [],
            d;
        for (d = 0; d < b.length; d++) {
            if (!this.breakOnNull) {
                if (b[d] == null || b[d][0] == null || b[d][1] == null) {
                    continue
                } else {
                    f.push(b[d])
                }
            } else {
                f.push(b[d])
            }
        }
        this.data = f;
        if (!this.color && this.show) {
            this.color = c.colorGenerator.get(this.index)
        }
        if (!this.negativeColor && this.show) {
            this.negativeColor = c.negativeColorGenerator.get(this.index)
        }
        if (!this.fillColor) {
            this.fillColor = this.color
        }
        if (this.fillAlpha) {
            var g = au.jqplot.normalize2rgb(this.fillColor);
            var g = au.jqplot.getColorComponents(g);
            this.fillColor = "rgba(" + g[0] + "," + g[1] + "," + g[2] + "," + this.fillAlpha + ")"
        }
        this.renderer = new this.renderer();
        this.renderer.init.call(this, this.rendererOptions, c);
        this.markerRenderer = new this.markerRenderer();
        if (!this.markerOptions.color) {
            this.markerOptions.color = this.color
        }
        if (this.markerOptions.show == null) {
            this.markerOptions.show = this.showMarker
        }
        this.showMarker = this.markerOptions.show;
        this.markerRenderer.init(this.markerOptions)
    };
    am.prototype.draw = function (a, d, b) {
        var f = (d == aL) ? {} : d;
        a = (a == aL) ? this.canvas._ctx : a;
        var g, c, e;
        for (g = 0; g < au.jqplot.preDrawSeriesHooks.length; g++) {
            au.jqplot.preDrawSeriesHooks[g].call(this, a, f)
        }
        if (this.show) {
            this.renderer.setGridData.call(this, b);
            if (!f.preventJqPlotSeriesDrawTrigger) {
                au(a.canvas).trigger("jqplotSeriesDraw", [this.data, this.gridData])
            }
            c = [];
            if (f.data) {
                c = f.data
            } else {
                if (!this._stack) {
                    c = this.data
                } else {
                    c = this._plotData
                }
            }
            e = f.gridData || this.renderer.makeGridData.call(this, c, b);
            if (this._type === "line" && this.renderer.smooth && this.renderer._smoothedData.length) {
                e = this.renderer._smoothedData
            }
            this.renderer.draw.call(this, a, e, f, b)
        }
        for (g = 0; g < au.jqplot.postDrawSeriesHooks.length; g++) {
            au.jqplot.postDrawSeriesHooks[g].call(this, a, f, b)
        }
        a = d = b = g = c = e = null
    };
    am.prototype.drawShadow = function (a, d, b) {
        var f = (d == aL) ? {} : d;
        a = (a == aL) ? this.shadowCanvas._ctx : a;
        var g, c, e;
        for (g = 0; g < au.jqplot.preDrawSeriesShadowHooks.length; g++) {
            au.jqplot.preDrawSeriesShadowHooks[g].call(this, a, f)
        }
        if (this.shadow) {
            this.renderer.setGridData.call(this, b);
            c = [];
            if (f.data) {
                c = f.data
            } else {
                if (!this._stack) {
                    c = this.data
                } else {
                    c = this._plotData
                }
            }
            e = f.gridData || this.renderer.makeGridData.call(this, c, b);
            this.renderer.drawShadow.call(this, a, e, f)
        }
        for (g = 0; g < au.jqplot.postDrawSeriesShadowHooks.length; g++) {
            au.jqplot.postDrawSeriesShadowHooks[g].call(this, a, f)
        }
        a = d = b = g = c = e = null
    };
    am.prototype.toggleDisplay = function (b) {
        var c, a;
        if (b.data.series) {
            c = b.data.series
        } else {
            c = this
        }
        if (b.data.speed) {
            a = b.data.speed
        }
        if (a) {
            if (c.canvas._elem.is(":hidden")) {
                c.canvas._elem.removeClass("jqplot-series-hidden");
                if (c.shadowCanvas._elem) {
                    c.shadowCanvas._elem.fadeIn(a)
                }
                c.canvas._elem.fadeIn(a);
                c.canvas._elem.nextAll(".jqplot-point-label.jqplot-series-" + c.index).fadeIn(a)
            } else {
                c.canvas._elem.addClass("jqplot-series-hidden");
                if (c.shadowCanvas._elem) {
                    c.shadowCanvas._elem.fadeOut(a)
                }
                c.canvas._elem.fadeOut(a);
                c.canvas._elem.nextAll(".jqplot-point-label.jqplot-series-" + c.index).fadeOut(a)
            }
        } else {
            if (c.canvas._elem.is(":hidden")) {
                c.canvas._elem.removeClass("jqplot-series-hidden");
                if (c.shadowCanvas._elem) {
                    c.shadowCanvas._elem.show()
                }
                c.canvas._elem.show();
                c.canvas._elem.nextAll(".jqplot-point-label.jqplot-series-" + c.index).show()
            } else {
                c.canvas._elem.addClass("jqplot-series-hidden");
                if (c.shadowCanvas._elem) {
                    c.shadowCanvas._elem.hide()
                }
                c.canvas._elem.hide();
                c.canvas._elem.nextAll(".jqplot-point-label.jqplot-series-" + c.index).hide()
            }
        }
    };

    function at() {
        au.jqplot.ElemContainer.call(this);
        this.drawGridlines = true;
        this.gridLineColor = "#cccccc";
        this.gridLineWidth = 1;
        this.background = "#fffdf6";
        this.borderColor = "#999999";
        this.borderWidth = 2;
        this.drawBorder = true;
        this.shadow = true;
        this.shadowAngle = 45;
        this.shadowOffset = 1.5;
        this.shadowWidth = 3;
        this.shadowDepth = 3;
        this.shadowColor = null;
        this.shadowAlpha = "0.07";
        this._left;
        this._top;
        this._right;
        this._bottom;
        this._width;
        this._height;
        this._axes = [];
        this.renderer = au.jqplot.CanvasGridRenderer;
        this.rendererOptions = {};
        this._offsets = {
            top: null,
            bottom: null,
            left: null,
            right: null
        }
    }
    at.prototype = new au.jqplot.ElemContainer();
    at.prototype.constructor = at;
    at.prototype.init = function () {
        this.renderer = new this.renderer();
        this.renderer.init.call(this, this.rendererOptions)
    };
    at.prototype.createElement = function (b, a) {
        this._offsets = b;
        return this.renderer.createElement.call(this, a)
    };
    at.prototype.draw = function () {
        this.renderer.draw.call(this)
    };
    au.jqplot.GenericCanvas = function () {
        au.jqplot.ElemContainer.call(this);
        this._ctx
    };
    au.jqplot.GenericCanvas.prototype = new au.jqplot.ElemContainer();
    au.jqplot.GenericCanvas.prototype.constructor = au.jqplot.GenericCanvas;
    au.jqplot.GenericCanvas.prototype.createElement = function (b, d, e, a) {
        this._offsets = b;
        var f = "jqplot";
        if (d != aL) {
            f = d
        }
        var c;
        c = a.canvasManager.getCanvas();
        if (e != null) {
            this._plotDimensions = e
        }
        c.width = this._plotDimensions.width - this._offsets.left - this._offsets.right;
        c.height = this._plotDimensions.height - this._offsets.top - this._offsets.bottom;
        this._elem = au(c);
        this._elem.css({
            position: "absolute",
            left: this._offsets.left,
            top: this._offsets.top
        });
        this._elem.addClass(f);
        c = a.canvasManager.initCanvas(c);
        c = null;
        return this._elem
    };
    au.jqplot.GenericCanvas.prototype.setContext = function () {
        this._ctx = this._elem.get(0).getContext("2d");
        return this._ctx
    };
    au.jqplot.GenericCanvas.prototype.resetCanvas = function () {
        if (this._elem) {
            if (au.jqplot.use_excanvas && window.G_vmlCanvasManager.uninitElement !== aL) {
                window.G_vmlCanvasManager.uninitElement(this._elem.get(0))
            }
            this._elem.emptyForce()
        }
        this._ctx = null
    };
    au.jqplot.HooksManager = function () {
        this.hooks = [];
        this.args = []
    };
    au.jqplot.HooksManager.prototype.addOnce = function (b, d) {
        d = d || [];
        var a = false;
        for (var c = 0, e = this.hooks.length; c < e; c++) {
            if (this.hooks[c][0] == b) {
                a = true
            }
        }
        if (!a) {
            this.hooks.push(b);
            this.args.push(d)
        }
    };
    au.jqplot.HooksManager.prototype.add = function (a, b) {
        b = b || [];
        this.hooks.push(a);
        this.args.push(b)
    };
    au.jqplot.EventListenerManager = function () {
        this.hooks = []
    };
    au.jqplot.EventListenerManager.prototype.addOnce = function (b, c) {
        var a = false,
            d, e;
        for (var e = 0, f = this.hooks.length; e < f; e++) {
            d = this.hooks[e];
            if (d[0] == b && d[1] == c) {
                a = true
            }
        }
        if (!a) {
            this.hooks.push([b, c])
        }
    };
    au.jqplot.EventListenerManager.prototype.add = function (a, b) {
        this.hooks.push([a, b])
    };
    var ak = ["yMidAxis", "xaxis", "yaxis", "x2axis", "y2axis", "y3axis", "y4axis", "y5axis", "y6axis", "y7axis", "y8axis", "y9axis"];

    function an() {
        this.animate = false;
        this.animateReplot = false;
        this.axes = {
            xaxis: new aK("xaxis"),
            yaxis: new aK("yaxis"),
            x2axis: new aK("x2axis"),
            y2axis: new aK("y2axis"),
            y3axis: new aK("y3axis"),
            y4axis: new aK("y4axis"),
            y5axis: new aK("y5axis"),
            y6axis: new aK("y6axis"),
            y7axis: new aK("y7axis"),
            y8axis: new aK("y8axis"),
            y9axis: new aK("y9axis"),
            yMidAxis: new aK("yMidAxis")
        };
        this.baseCanvas = new au.jqplot.GenericCanvas();
        this.captureRightClick = false;
        this.data = [];
        this.dataRenderer;
        this.dataRendererOptions;
        this.defaults = {
            axesDefaults: {},
            axes: {
                xaxis: {},
                yaxis: {},
                x2axis: {},
                y2axis: {},
                y3axis: {},
                y4axis: {},
                y5axis: {},
                y6axis: {},
                y7axis: {},
                y8axis: {},
                y9axis: {},
                yMidAxis: {}
            },
            seriesDefaults: {},
            series: []
        };
        this.defaultAxisStart = 1;
        this.drawIfHidden = false;
        this.eventCanvas = new au.jqplot.GenericCanvas();
        this.fillBetween = {
            series1: null,
            series2: null,
            color: null,
            baseSeries: 0,
            fill: true
        };
        this.fontFamily;
        this.fontSize;
        this.grid = new at();
        this.legend = new aP();
        this.negativeSeriesColors = au.jqplot.config.defaultNegativeColors;
        this.noDataIndicator = {
            show: false,
            indicator: "Loading Data...",
            axes: {
                xaxis: {
                    min: 0,
                    max: 10,
                    tickInterval: 2,
                    show: true
                },
                yaxis: {
                    min: 0,
                    max: 12,
                    tickInterval: 3,
                    show: true
                }
            }
        };
        this.options = {};
        this.previousSeriesStack = [];
        this.plugins = {};
        this.series = [];
        this.seriesStack = [];
        this.seriesColors = au.jqplot.config.defaultColors;
        this.sortData = true;
        this.stackSeries = false;
        this.syncXTicks = true;
        this.syncYTicks = true;
        this.target = null;
        this.targetId = null;
        this.textColor;
        this.title = new aI();
        this._drawCount = 0;
        this._sumy = 0;
        this._sumx = 0;
        this._stackData = [];
        this._plotData = [];
        this._width = null;
        this._height = null;
        this._plotDimensions = {
            height: null,
            width: null
        };
        this._gridPadding = {
            top: null,
            right: null,
            bottom: null,
            left: null
        };
        this._defaultGridPadding = {
            top: 10,
            right: 10,
            bottom: 23,
            left: 10
        };
        this._addDomReference = au.jqplot.config.addDomReference;
        this.preInitHooks = new au.jqplot.HooksManager();
        this.postInitHooks = new au.jqplot.HooksManager();
        this.preParseOptionsHooks = new au.jqplot.HooksManager();
        this.postParseOptionsHooks = new au.jqplot.HooksManager();
        this.preDrawHooks = new au.jqplot.HooksManager();
        this.postDrawHooks = new au.jqplot.HooksManager();
        this.preDrawSeriesHooks = new au.jqplot.HooksManager();
        this.postDrawSeriesHooks = new au.jqplot.HooksManager();
        this.preDrawLegendHooks = new au.jqplot.HooksManager();
        this.addLegendRowHooks = new au.jqplot.HooksManager();
        this.preSeriesInitHooks = new au.jqplot.HooksManager();
        this.postSeriesInitHooks = new au.jqplot.HooksManager();
        this.preParseSeriesOptionsHooks = new au.jqplot.HooksManager();
        this.postParseSeriesOptionsHooks = new au.jqplot.HooksManager();
        this.eventListenerHooks = new au.jqplot.EventListenerManager();
        this.preDrawSeriesShadowHooks = new au.jqplot.HooksManager();
        this.postDrawSeriesShadowHooks = new au.jqplot.HooksManager();
        this.colorGenerator = new au.jqplot.ColorGenerator();
        this.negativeColorGenerator = new au.jqplot.ColorGenerator();
        this.canvasManager = new au.jqplot.CanvasManager();
        this.themeEngine = new au.jqplot.ThemeEngine();
        var b = 0;
        this.init = function (g, j, e) {
            e = e || {};
            for (var i = 0; i < au.jqplot.preInitHooks.length; i++) {
                au.jqplot.preInitHooks[i].call(this, g, j, e)
            }
            for (var i = 0; i < this.preInitHooks.hooks.length; i++) {
                this.preInitHooks.hooks[i].call(this, g, j, e)
            }
            this.targetId = "#" + g;
            this.target = au("#" + g);
            if (this._addDomReference) {
                this.target.data("jqplot_plot", this)
            }
            this.target.removeClass("jqplot-error");
            if (!this.target.get(0)) {
                throw "No plot target specified"
            }
            if (this.target.css("position") == "static") {
                this.target.css("position", "relative")
            }
            if (!this.target.hasClass("jqplot-target")) {
                this.target.addClass("jqplot-target")
            }
            if (!this.target.height()) {
                var h;
                if (e && e.height) {
                    h = parseInt(e.height, 10)
                } else {
                    if (this.target.attr("data-height")) {
                        h = parseInt(this.target.attr("data-height"), 10)
                    } else {
                        h = parseInt(au.jqplot.config.defaultHeight, 10)
                    }
                }
                this._height = h;
                this.target.css("height", h + "px")
            } else {
                this._height = h = this.target.height()
            }
            if (!this.target.width()) {
                var f;
                if (e && e.width) {
                    f = parseInt(e.width, 10)
                } else {
                    if (this.target.attr("data-width")) {
                        f = parseInt(this.target.attr("data-width"), 10)
                    } else {
                        f = parseInt(au.jqplot.config.defaultWidth, 10)
                    }
                }
                this._width = f;
                this.target.css("width", f + "px")
            } else {
                this._width = f = this.target.width()
            }
            this._plotDimensions.height = this._height;
            this._plotDimensions.width = this._width;
            this.grid._plotDimensions = this._plotDimensions;
            this.title._plotDimensions = this._plotDimensions;
            this.baseCanvas._plotDimensions = this._plotDimensions;
            this.eventCanvas._plotDimensions = this._plotDimensions;
            this.legend._plotDimensions = this._plotDimensions;
            if (this._height <= 0 || this._width <= 0 || !this._height || !this._width) {
                throw "Canvas dimension not set"
            }
            if (e.dataRenderer && jQuery.isFunction(e.dataRenderer)) {
                if (e.dataRendererOptions) {
                    this.dataRendererOptions = e.dataRendererOptions
                }
                this.dataRenderer = e.dataRenderer;
                j = this.dataRenderer(j, this, this.dataRendererOptions)
            }
            if (e.noDataIndicator && jQuery.isPlainObject(e.noDataIndicator)) {
                au.extend(true, this.noDataIndicator, e.noDataIndicator)
            }
            if (j == null || jQuery.isArray(j) == false || j.length == 0 || jQuery.isArray(j[0]) == false || j[0].length == 0) {
                if (this.noDataIndicator.show == false) {
                    throw {
                        name: "DataError",
                        message: "No data to plot."
                    }
                } else {
                    for (var n in this.noDataIndicator.axes) {
                        for (var l in this.noDataIndicator.axes[n]) {
                            this.axes[n][l] = this.noDataIndicator.axes[n][l]
                        }
                    }
                    this.postDrawHooks.add(function () {
                        var s = this.eventCanvas.getHeight();
                        var p = this.eventCanvas.getWidth();
                        var q = au('<div class="jqplot-noData-container" style="position:absolute;"></div>');
                        this.target.append(q);
                        q.height(s);
                        q.width(p);
                        q.css("top", this.eventCanvas._offsets.top);
                        q.css("left", this.eventCanvas._offsets.left);
                        var t = au('<div class="jqplot-noData-contents" style="text-align:center; position:relative; margin-left:auto; margin-right:auto;"></div>');
                        q.append(t);
                        t.html(this.noDataIndicator.indicator);
                        var o = t.height();
                        var r = t.width();
                        t.height(o);
                        t.width(r);
                        t.css("top", (s - o) / 2 + "px")
                    })
                }
            }
            this.data = j;
            this.parseOptions(e);
            if (this.textColor) {
                this.target.css("color", this.textColor)
            }
            if (this.fontFamily) {
                this.target.css("font-family", this.fontFamily)
            }
            if (this.fontSize) {
                this.target.css("font-size", this.fontSize)
            }
            this.title.init();
            this.legend.init();
            this._sumy = 0;
            this._sumx = 0;
            for (var i = 0; i < this.series.length; i++) {
                this.seriesStack.push(i);
                this.previousSeriesStack.push(i);
                this.series[i].shadowCanvas._plotDimensions = this._plotDimensions;
                this.series[i].canvas._plotDimensions = this._plotDimensions;
                for (var k = 0; k < au.jqplot.preSeriesInitHooks.length; k++) {
                    au.jqplot.preSeriesInitHooks[k].call(this.series[i], g, j, this.options.seriesDefaults, this.options.series[i], this)
                }
                for (var k = 0; k < this.preSeriesInitHooks.hooks.length; k++) {
                    this.preSeriesInitHooks.hooks[k].call(this.series[i], g, j, this.options.seriesDefaults, this.options.series[i], this)
                }
                this.populatePlotData(this.series[i], i);
                this.series[i]._plotDimensions = this._plotDimensions;
                this.series[i].init(i, this.grid.borderWidth, this);
                for (var k = 0; k < au.jqplot.postSeriesInitHooks.length; k++) {
                    au.jqplot.postSeriesInitHooks[k].call(this.series[i], g, j, this.options.seriesDefaults, this.options.series[i], this)
                }
                for (var k = 0; k < this.postSeriesInitHooks.hooks.length; k++) {
                    this.postSeriesInitHooks.hooks[k].call(this.series[i], g, j, this.options.seriesDefaults, this.options.series[i], this)
                }
                this._sumy += this.series[i]._sumy;
                this._sumx += this.series[i]._sumx
            }
            var m;
            for (var i = 0; i < 12; i++) {
                m = ak[i];
                this.axes[m]._plotDimensions = this._plotDimensions;
                this.axes[m].init();
                if (this.axes[m].borderColor == null) {
                    if (m.charAt(0) !== "x" && this.axes[m].useSeriesColor === true && this.axes[m].show) {
                        this.axes[m].borderColor = this.axes[m]._series[0].color
                    } else {
                        this.axes[m].borderColor = this.grid.borderColor
                    }
                }
            }
            if (this.sortData) {
                d(this.series)
            }
            this.grid.init();
            this.grid._axes = this.axes;
            this.legend._series = this.series;
            for (var i = 0; i < au.jqplot.postInitHooks.length; i++) {
                au.jqplot.postInitHooks[i].call(this, g, j, e)
            }
            for (var i = 0; i < this.postInitHooks.hooks.length; i++) {
                this.postInitHooks.hooks[i].call(this, g, j, e)
            }
        };
        this.resetAxesScale = function (i, g) {
            var e = g || {};
            var j = i || this.axes;
            if (j === true) {
                j = this.axes
            }
            if (jQuery.isArray(j)) {
                for (var f = 0; f < j.length; f++) {
                    this.axes[j[f]].resetScale(e[j[f]])
                }
            } else {
                if (typeof (j) === "object") {
                    for (var h in j) {
                        this.axes[h].resetScale(e[h])
                    }
                }
            }
        };
        this.reInitialize = function () {
            this._height = this.target.height();
            this._width = this.target.width();
            if (this._height <= 0 || this._width <= 0 || !this._height || !this._width) {
                throw "Target dimension not set"
            }
            this._plotDimensions.height = this._height;
            this._plotDimensions.width = this._width;
            this.grid._plotDimensions = this._plotDimensions;
            this.title._plotDimensions = this._plotDimensions;
            this.baseCanvas._plotDimensions = this._plotDimensions;
            this.eventCanvas._plotDimensions = this._plotDimensions;
            this.legend._plotDimensions = this._plotDimensions;
            for (var i in this.axes) {
                this.axes[i]._plotWidth = this._width;
                this.axes[i]._plotHeight = this._height
            }
            this.title._plotWidth = this._width;
            if (this.textColor) {
                this.target.css("color", this.textColor)
            }
            if (this.fontFamily) {
                this.target.css("font-family", this.fontFamily)
            }
            if (this.fontSize) {
                this.target.css("font-size", this.fontSize)
            }
            this._sumy = 0;
            this._sumx = 0;
            for (var e = 0; e < this.series.length; e++) {
                this.populatePlotData(this.series[e], e);
                if (this.series[e]._type === "line" && this.series[e].renderer.bands.show) {
                    this.series[e].renderer.initBands.call(this.series[e], this.series[e].renderer.options, this)
                }
                this.series[e]._plotDimensions = this._plotDimensions;
                this.series[e].canvas._plotDimensions = this._plotDimensions;
                this._sumy += this.series[e]._sumy;
                this._sumx += this.series[e]._sumx
            }
            var g;
            for (var h = 0; h < 12; h++) {
                g = ak[h];
                var f = this.axes[g]._ticks;
                for (var e = 0; e < f.length; e++) {
                    var j = f[e]._elem;
                    if (j) {
                        if (au.jqplot.use_excanvas && window.G_vmlCanvasManager.uninitElement !== aL) {
                            window.G_vmlCanvasManager.uninitElement(j.get(0))
                        }
                        j.emptyForce();
                        j = null;
                        f._elem = null
                    }
                }
                f = null;
                this.axes[g]._plotDimensions = this._plotDimensions;
                this.axes[g]._ticks = []
            }
            if (this.sortData) {
                d(this.series)
            }
            this.grid._axes = this.axes;
            this.legend._series = this.series
        };

        function d(k) {
            var g, f, e, o, h;
            for (var j = 0; j < k.length; j++) {
                var n;
                var i = [k[j].data, k[j]._stackData, k[j]._plotData, k[j]._prevPlotData];
                for (var m = 0; m < 4; m++) {
                    n = true;
                    g = i[m];
                    if (k[j]._stackAxis == "x") {
                        for (var l = 0; l < g.length; l++) {
                            if (typeof (g[l][1]) != "number") {
                                n = false;
                                break
                            }
                        }
                        if (n) {
                            g.sort(function (p, q) {
                                return p[1] - q[1]
                            })
                        }
                    } else {
                        for (var l = 0; l < g.length; l++) {
                            if (typeof (g[l][0]) != "number") {
                                n = false;
                                break
                            }
                        }
                        if (n) {
                            g.sort(function (p, q) {
                                return p[0] - q[0]
                            })
                        }
                    }
                }
            }
        }
        this.populatePlotData = function (k, j) {
            this._plotData = [];
            this._stackData = [];
            k._stackData = [];
            k._plotData = [];
            var g = {
                x: [],
                y: []
            };
            if (this.stackSeries && !k.disableStack) {
                k._stack = true;
                var i = k._stackAxis == "x" ? 0 : 1;
                var h = i ? 0 : 1;
                var f = au.extend(true, [], k.data);
                var e = au.extend(true, [], k.data);
                for (var m = 0; m < j; m++) {
                    var o = this.series[m].data;
                    for (var n = 0; n < o.length; n++) {
                        f[n][0] += o[n][0];
                        f[n][1] += o[n][1];
                        e[n][i] += o[n][i]
                    }
                }
                for (var l = 0; l < e.length; l++) {
                    g.x.push(e[l][0]);
                    g.y.push(e[l][1])
                }
                this._plotData.push(e);
                this._stackData.push(f);
                k._stackData = f;
                k._plotData = e;
                k._plotValues = g
            } else {
                for (var l = 0; l < k.data.length; l++) {
                    g.x.push(k.data[l][0]);
                    g.y.push(k.data[l][1])
                }
                this._stackData.push(k.data);
                this.series[j]._stackData = k.data;
                this._plotData.push(k.data);
                k._plotData = k.data;
                k._plotValues = g
            }
            if (j > 0) {
                k._prevPlotData = this.series[j - 1]._plotData
            }
            k._sumy = 0;
            k._sumx = 0;
            for (l = k.data.length - 1; l > -1; l--) {
                k._sumy += k.data[l][1];
                k._sumx += k.data[l][0]
            }
        };
        this.getNextSeriesColor = (function (f) {
            var g = 0;
            var e = f.seriesColors;
            return function () {
                if (g < e.length) {
                    return e[g++]
                } else {
                    g = 0;
                    return e[g++]
                }
            }
        })(this);
        this.parseOptions = function (e) {
            for (var j = 0; j < this.preParseOptionsHooks.hooks.length; j++) {
                this.preParseOptionsHooks.hooks[j].call(this, e)
            }
            for (var j = 0; j < au.jqplot.preParseOptionsHooks.length; j++) {
                au.jqplot.preParseOptionsHooks[j].call(this, e)
            }
            this.options = au.extend(true, {}, this.defaults, e);
            var p = this.options;
            this.animate = p.animate;
            this.animateReplot = p.animateReplot;
            this.stackSeries = p.stackSeries;
            if (au.isPlainObject(p.fillBetween)) {
                var f = ["series1", "series2", "color", "baseSeries", "fill"],
                    i;
                for (var j = 0, l = f.length; j < l; j++) {
                    i = f[j];
                    if (p.fillBetween[i] != null) {
                        this.fillBetween[i] = p.fillBetween[i]
                    }
                }
            }
            if (p.seriesColors) {
                this.seriesColors = p.seriesColors
            }
            if (p.negativeSeriesColors) {
                this.negativeSeriesColors = p.negativeSeriesColors
            }
            if (p.captureRightClick) {
                this.captureRightClick = p.captureRightClick
            }
            this.defaultAxisStart = (e && e.defaultAxisStart != null) ? e.defaultAxisStart : this.defaultAxisStart;
            this.colorGenerator.setColors(this.seriesColors);
            this.negativeColorGenerator.setColors(this.negativeSeriesColors);
            au.extend(true, this._gridPadding, p.gridPadding);
            this.sortData = (p.sortData != null) ? p.sortData : this.sortData;
            for (var j = 0; j < 12; j++) {
                var o = ak[j];
                var m = this.axes[o];
                m._options = au.extend(true, {}, p.axesDefaults, p.axes[o]);
                au.extend(true, m, p.axesDefaults, p.axes[o]);
                m._plotWidth = this._width;
                m._plotHeight = this._height
            }
            var g = function (t, q, s) {
                    var r = [];
                    var u;
                    q = q || "vertical";
                    if (!jQuery.isArray(t[0])) {
                        for (u = 0; u < t.length; u++) {
                            if (q == "vertical") {
                                r.push([s + u, t[u]])
                            } else {
                                r.push([t[u], s + u])
                            }
                        }
                    } else {
                        au.extend(true, r, t)
                    }
                    return r
                };
            var h = 0;
            for (var j = 0; j < this.data.length; j++) {
                var f = new am();
                for (var k = 0; k < au.jqplot.preParseSeriesOptionsHooks.length; k++) {
                    au.jqplot.preParseSeriesOptionsHooks[k].call(f, this.options.seriesDefaults, this.options.series[j])
                }
                for (var k = 0; k < this.preParseSeriesOptionsHooks.hooks.length; k++) {
                    this.preParseSeriesOptionsHooks.hooks[k].call(f, this.options.seriesDefaults, this.options.series[j])
                }
                au.extend(true, f, {
                    seriesColors: this.seriesColors,
                    negativeSeriesColors: this.negativeSeriesColors
                }, this.options.seriesDefaults, this.options.series[j], {
                    rendererOptions: {
                        animation: {
                            show: this.animate
                        }
                    }
                });
                var n = "vertical";
                if (f.renderer === au.jqplot.BarRenderer && f.rendererOptions && f.rendererOptions.barDirection == "horizontal" && f.transposeData === true) {
                    n = "horizontal"
                }
                f.data = g(this.data[j], n, this.defaultAxisStart);
                switch (f.xaxis) {
                case "xaxis":
                    f._xaxis = this.axes.xaxis;
                    break;
                case "x2axis":
                    f._xaxis = this.axes.x2axis;
                    break;
                default:
                    break
                }
                f._yaxis = this.axes[f.yaxis];
                f._xaxis._series.push(f);
                f._yaxis._series.push(f);
                if (f.show) {
                    f._xaxis.show = true;
                    f._yaxis.show = true
                }
                if (!f.label) {
                    f.label = "Series " + (j + 1).toString()
                }
                this.series.push(f);
                for (var k = 0; k < au.jqplot.postParseSeriesOptionsHooks.length; k++) {
                    au.jqplot.postParseSeriesOptionsHooks[k].call(this.series[j], this.options.seriesDefaults, this.options.series[j])
                }
                for (var k = 0; k < this.postParseSeriesOptionsHooks.hooks.length; k++) {
                    this.postParseSeriesOptionsHooks.hooks[k].call(this.series[j], this.options.seriesDefaults, this.options.series[j])
                }
            }
            au.extend(true, this.grid, this.options.grid);
            for (var j = 0; j < 12; j++) {
                var o = ak[j];
                var m = this.axes[o];
                if (m.borderWidth == null) {
                    m.borderWidth = this.grid.borderWidth
                }
            }
            if (typeof this.options.title == "string") {
                this.title.text = this.options.title
            } else {
                if (typeof this.options.title == "object") {
                    au.extend(true, this.title, this.options.title)
                }
            }
            this.title._plotWidth = this._width;
            this.legend.setOptions(this.options.legend);
            for (var j = 0; j < au.jqplot.postParseOptionsHooks.length; j++) {
                au.jqplot.postParseOptionsHooks[j].call(this, e)
            }
            for (var j = 0; j < this.postParseOptionsHooks.hooks.length; j++) {
                this.postParseOptionsHooks.hooks[j].call(this, e)
            }
        };
        this.destroy = function () {
            this.canvasManager.freeAllCanvases();
            if (this.eventCanvas && this.eventCanvas._elem) {
                this.eventCanvas._elem.unbind()
            }
            this.target.empty();
            this.target[0].innerHTML = ""
        };
        this.replot = function (g) {
            var f = g || {};
            var h = (f.clear === false) ? false : true;
            var e = f.resetAxes || false;
            this.target.trigger("jqplotPreReplot");
            if (h) {
                this.destroy()
            }
            this.reInitialize();
            if (e) {
                this.resetAxesScale(e, f.axes)
            }
            this.draw();
            this.target.trigger("jqplotPostReplot")
        };
        this.redraw = function (g) {
            g = (g != null) ? g : true;
            this.target.trigger("jqplotPreRedraw");
            if (g) {
                this.canvasManager.freeAllCanvases();
                this.eventCanvas._elem.unbind();
                this.target.empty()
            }
            for (var e in this.axes) {
                this.axes[e]._ticks = []
            }
            for (var f = 0; f < this.series.length; f++) {
                this.populatePlotData(this.series[f], f)
            }
            this._sumy = 0;
            this._sumx = 0;
            for (f = 0; f < this.series.length; f++) {
                this._sumy += this.series[f]._sumy;
                this._sumx += this.series[f]._sumx
            }
            this.draw();
            this.target.trigger("jqplotPostRedraw")
        };
        this.draw = function () {
            if (this.drawIfHidden || this.target.is(":visible")) {
                this.target.trigger("jqplotPreDraw");
                var r, e, f, A;
                for (r = 0, f = au.jqplot.preDrawHooks.length; r < f; r++) {
                    au.jqplot.preDrawHooks[r].call(this)
                }
                for (r = 0, f = this.preDrawHooks.length; r < f; r++) {
                    this.preDrawHooks.hooks[r].apply(this, this.preDrawSeriesHooks.args[r])
                }
                this.target.append(this.baseCanvas.createElement({
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                }, "jqplot-base-canvas", null, this));
                this.baseCanvas.setContext();
                this.target.append(this.title.draw());
                this.title.pack({
                    top: 0,
                    left: 0
                });
                var j = this.legend.draw();
                var D = {
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0
                };
                if (this.legend.placement == "outsideGrid") {
                    this.target.append(j);
                    switch (this.legend.location) {
                    case "n":
                        D.top += this.legend.getHeight();
                        break;
                    case "s":
                        D.bottom += this.legend.getHeight();
                        break;
                    case "ne":
                    case "e":
                    case "se":
                        D.right += this.legend.getWidth();
                        break;
                    case "nw":
                    case "w":
                    case "sw":
                        D.left += this.legend.getWidth();
                        break;
                    default:
                        D.right += this.legend.getWidth();
                        break
                    }
                    j = j.detach()
                }
                var x = this.axes;
                var h;
                for (r = 0; r < 12; r++) {
                    h = ak[r];
                    this.target.append(x[h].draw(this.baseCanvas._ctx, this));
                    x[h].set()
                }
                if (x.yaxis.show) {
                    D.left += x.yaxis.getWidth()
                }
                var t = ["y2axis", "y3axis", "y4axis", "y5axis", "y6axis", "y7axis", "y8axis", "y9axis"];
                var p = [0, 0, 0, 0, 0, 0, 0, 0];
                var i = 0;
                var k;
                for (k = 0; k < 8; k++) {
                    if (x[t[k]].show) {
                        i += x[t[k]].getWidth();
                        p[k] = i
                    }
                }
                D.right += i;
                if (x.x2axis.show) {
                    D.top += x.x2axis.getHeight()
                }
                if (this.title.show) {
                    D.top += this.title.getHeight()
                }
                if (x.xaxis.show) {
                    D.bottom += x.xaxis.getHeight()
                }
                if (this.options.gridDimensions && au.isPlainObject(this.options.gridDimensions)) {
                    var w = parseInt(this.options.gridDimensions.width, 10) || 0;
                    var o = parseInt(this.options.gridDimensions.height, 10) || 0;
                    var B = (this._width - D.left - D.right - w) / 2;
                    var m = (this._height - D.top - D.bottom - o) / 2;
                    if (m >= 0 && B >= 0) {
                        D.top += m;
                        D.bottom += m;
                        D.left += B;
                        D.right += B
                    }
                }
                var C = ["top", "bottom", "left", "right"];
                for (var k in C) {
                    if (this._gridPadding[C[k]] == null && D[C[k]] > 0) {
                        this._gridPadding[C[k]] = D[C[k]]
                    } else {
                        if (this._gridPadding[C[k]] == null) {
                            this._gridPadding[C[k]] = this._defaultGridPadding[C[k]]
                        }
                    }
                }
                var l = (this.legend.placement == "outsideGrid") ? {
                    top: this.title.getHeight(),
                    left: 0,
                    right: 0,
                    bottom: 0
                } : this._gridPadding;
                x.xaxis.pack({
                    position: "absolute",
                    bottom: this._gridPadding.bottom - x.xaxis.getHeight(),
                    left: 0,
                    width: this._width
                }, {
                    min: this._gridPadding.left,
                    max: this._width - this._gridPadding.right
                });
                x.yaxis.pack({
                    position: "absolute",
                    top: 0,
                    left: this._gridPadding.left - x.yaxis.getWidth(),
                    height: this._height
                }, {
                    min: this._height - this._gridPadding.bottom,
                    max: this._gridPadding.top
                });
                x.x2axis.pack({
                    position: "absolute",
                    top: this._gridPadding.top - x.x2axis.getHeight(),
                    left: 0,
                    width: this._width
                }, {
                    min: this._gridPadding.left,
                    max: this._width - this._gridPadding.right
                });
                for (r = 8; r > 0; r--) {
                    x[t[r - 1]].pack({
                        position: "absolute",
                        top: 0,
                        right: this._gridPadding.right - p[r - 1]
                    }, {
                        min: this._height - this._gridPadding.bottom,
                        max: this._gridPadding.top
                    })
                }
                var v = (this._width - this._gridPadding.left - this._gridPadding.right) / 2 + this._gridPadding.left - x.yMidAxis.getWidth() / 2;
                x.yMidAxis.pack({
                    position: "absolute",
                    top: 0,
                    left: v,
                    zIndex: 9,
                    textAlign: "center"
                }, {
                    min: this._height - this._gridPadding.bottom,
                    max: this._gridPadding.top
                });
                this.target.append(this.grid.createElement(this._gridPadding, this));
                this.grid.draw();
                var y = this.series;
                var n = y.length;
                for (r = 0, f = n; r < f; r++) {
                    e = this.seriesStack[r];
                    this.target.append(y[e].shadowCanvas.createElement(this._gridPadding, "jqplot-series-shadowCanvas", null, this));
                    y[e].shadowCanvas.setContext();
                    y[e].shadowCanvas._elem.data("seriesIndex", e)
                }
                for (r = 0, f = n; r < f; r++) {
                    e = this.seriesStack[r];
                    this.target.append(y[e].canvas.createElement(this._gridPadding, "jqplot-series-canvas", null, this));
                    y[e].canvas.setContext();
                    y[e].canvas._elem.data("seriesIndex", e)
                }
                this.target.append(this.eventCanvas.createElement(this._gridPadding, "jqplot-event-canvas", null, this));
                this.eventCanvas.setContext();
                this.eventCanvas._ctx.fillStyle = "rgba(0,0,0,0)";
                this.eventCanvas._ctx.fillRect(0, 0, this.eventCanvas._ctx.canvas.width, this.eventCanvas._ctx.canvas.height);
                this.bindCustomEvents();
                if (this.legend.preDraw) {
                    this.eventCanvas._elem.before(j);
                    this.legend.pack(l);
                    if (this.legend._elem) {
                        this.drawSeries({
                            legendInfo: {
                                location: this.legend.location,
                                placement: this.legend.placement,
                                width: this.legend.getWidth(),
                                height: this.legend.getHeight(),
                                xoffset: this.legend.xoffset,
                                yoffset: this.legend.yoffset
                            }
                        })
                    } else {
                        this.drawSeries()
                    }
                } else {
                    this.drawSeries();
                    if (n) {
                        au(y[n - 1].canvas._elem).after(j)
                    }
                    this.legend.pack(l)
                }
                for (var r = 0, f = au.jqplot.eventListenerHooks.length; r < f; r++) {
                    this.eventCanvas._elem.bind(au.jqplot.eventListenerHooks[r][0], {
                        plot: this
                    }, au.jqplot.eventListenerHooks[r][1])
                }
                for (var r = 0, f = this.eventListenerHooks.hooks.length; r < f; r++) {
                    this.eventCanvas._elem.bind(this.eventListenerHooks.hooks[r][0], {
                        plot: this
                    }, this.eventListenerHooks.hooks[r][1])
                }
                var q = this.fillBetween;
                if (q.fill && q.series1 !== q.series2 && q.series1 < n && q.series2 < n && y[q.series1]._type === "line" && y[q.series2]._type === "line") {
                    this.doFillBetweenLines()
                }
                for (var r = 0, f = au.jqplot.postDrawHooks.length; r < f; r++) {
                    au.jqplot.postDrawHooks[r].call(this)
                }
                for (var r = 0, f = this.postDrawHooks.hooks.length; r < f; r++) {
                    this.postDrawHooks.hooks[r].apply(this, this.postDrawHooks.args[r])
                }
                if (this.target.is(":visible")) {
                    this._drawCount += 1
                }
                var u, s, g, z;
                for (r = 0, f = n; r < f; r++) {
                    u = y[r];
                    s = u.renderer;
                    g = ".jqplot-point-label.jqplot-series-" + r;
                    if (s.animation && s.animation._supported && s.animation.show && (this._drawCount < 2 || this.animateReplot)) {
                        z = this.target.find(g);
                        z.stop(true, true).hide();
                        u.canvas._elem.stop(true, true).hide();
                        u.shadowCanvas._elem.stop(true, true).hide();
                        u.canvas._elem.jqplotEffect("blind", {
                            mode: "show",
                            direction: s.animation.direction
                        }, s.animation.speed);
                        u.shadowCanvas._elem.jqplotEffect("blind", {
                            mode: "show",
                            direction: s.animation.direction
                        }, s.animation.speed);
                        z.fadeIn(s.animation.speed * 0.8)
                    }
                }
                z = null;
                this.target.trigger("jqplotPostDraw", [this])
            }
        };
        an.prototype.doFillBetweenLines = function () {
            var o = this.fillBetween;
            var f = o.series1;
            var h = o.series2;
            var g = (f < h) ? f : h;
            var i = (h > f) ? h : f;
            var k = this.series[g];
            var l = this.series[i];
            if (l.renderer.smooth) {
                var m = l.renderer._smoothedData.slice(0).reverse()
            } else {
                var m = l.gridData.slice(0).reverse()
            }
            if (k.renderer.smooth) {
                var j = k.renderer._smoothedData.concat(m)
            } else {
                var j = k.gridData.concat(m)
            }
            var n = (o.color !== null) ? o.color : this.series[f].fillColor;
            var e = (o.baseSeries !== null) ? o.baseSeries : g;
            var p = this.series[e].renderer.shapeRenderer;
            var q = {
                fillStyle: n,
                fill: true,
                closePath: true
            };
            p.draw(k.shadowCanvas._ctx, j, q)
        };
        this.bindCustomEvents = function () {
            this.eventCanvas._elem.bind("click", {
                plot: this
            }, this.onClick);
            this.eventCanvas._elem.bind("dblclick", {
                plot: this
            }, this.onDblClick);
            this.eventCanvas._elem.bind("mousedown", {
                plot: this
            }, this.onMouseDown);
            this.eventCanvas._elem.bind("mousemove", {
                plot: this
            }, this.onMouseMove);
            this.eventCanvas._elem.bind("mouseenter", {
                plot: this
            }, this.onMouseEnter);
            this.eventCanvas._elem.bind("mouseleave", {
                plot: this
            }, this.onMouseLeave);
            if (this.captureRightClick) {
                this.eventCanvas._elem.bind("mouseup", {
                    plot: this
                }, this.onRightClick);
                this.eventCanvas._elem.get(0).oncontextmenu = function () {
                    return false
                }
            } else {
                this.eventCanvas._elem.bind("mouseup", {
                    plot: this
                }, this.onMouseUp)
            }
        };

        function c(e) {
            var f = e.data.plot;
            var j = f.eventCanvas._elem.offset();
            var g = {
                x: e.pageX - j.left,
                y: e.pageY - j.top
            };
            var i = {
                xaxis: null,
                yaxis: null,
                x2axis: null,
                y2axis: null,
                y3axis: null,
                y4axis: null,
                y5axis: null,
                y6axis: null,
                y7axis: null,
                y8axis: null,
                y9axis: null,
                yMidAxis: null
            };
            var h = ["xaxis", "yaxis", "x2axis", "y2axis", "y3axis", "y4axis", "y5axis", "y6axis", "y7axis", "y8axis", "y9axis", "yMidAxis"];
            var m = f.axes;
            var l, k;
            for (l = 11; l > 0; l--) {
                k = h[l - 1];
                if (m[k].show) {
                    i[k] = m[k].series_p2u(g[k.charAt(0)])
                }
            }
            return {
                offsets: j,
                gridPos: g,
                dataPos: i
            }
        }
        function a(x, w) {
            var s = w.series;
            var z, A, B, G, F, L, M, n, p, k, j, K;
            var C, y, E, r, N, I;
            var v, H;
            for (B = w.seriesStack.length - 1; B >= 0; B--) {
                z = w.seriesStack[B];
                G = s[z];
                switch (G.renderer.constructor) {
                case au.jqplot.BarRenderer:
                case au.jqplot.PyramidRenderer:
                    L = x.x;
                    M = x.y;
                    for (A = 0; A < G._barPoints.length; A++) {
                        N = G._barPoints[A];
                        E = G.gridData[A];
                        if (L > N[0][0] && L < N[2][0] && M > N[2][1] && M < N[0][1]) {
                            return {
                                seriesIndex: G.index,
                                pointIndex: A,
                                gridData: E,
                                data: G.data[A],
                                points: G._barPoints[A]
                            }
                        }
                    }
                    break;
                case au.jqplot.DonutRenderer:
                    k = G.startAngle / 180 * Math.PI;
                    L = x.x - G._center[0];
                    M = x.y - G._center[1];
                    F = Math.sqrt(Math.pow(L, 2) + Math.pow(M, 2));
                    if (L > 0 && -M >= 0) {
                        n = 2 * Math.PI - Math.atan(-M / L)
                    } else {
                        if (L > 0 && -M < 0) {
                            n = -Math.atan(-M / L)
                        } else {
                            if (L < 0) {
                                n = Math.PI - Math.atan(-M / L)
                            } else {
                                if (L == 0 && -M > 0) {
                                    n = 3 * Math.PI / 2
                                } else {
                                    if (L == 0 && -M < 0) {
                                        n = Math.PI / 2
                                    } else {
                                        if (L == 0 && M == 0) {
                                            n = 0
                                        }
                                    }
                                }
                            }
                        }
                    }
                    if (k) {
                        n -= k;
                        if (n < 0) {
                            n += 2 * Math.PI
                        } else {
                            if (n > 2 * Math.PI) {
                                n -= 2 * Math.PI
                            }
                        }
                    }
                    p = G.sliceMargin / 180 * Math.PI;
                    if (F < G._radius && F > G._innerRadius) {
                        for (A = 0; A < G.gridData.length; A++) {
                            j = (A > 0) ? G.gridData[A - 1][1] + p : p;
                            K = G.gridData[A][1];
                            if (n > j && n < K) {
                                return {
                                    seriesIndex: G.index,
                                    pointIndex: A,
                                    gridData: G.gridData[A],
                                    data: G.data[A]
                                }
                            }
                        }
                    }
                    break;
                case au.jqplot.PieRenderer:
                    k = G.startAngle / 180 * Math.PI;
                    L = x.x - G._center[0];
                    M = x.y - G._center[1];
                    F = Math.sqrt(Math.pow(L, 2) + Math.pow(M, 2));
                    if (L > 0 && -M >= 0) {
                        n = 2 * Math.PI - Math.atan(-M / L)
                    } else {
                        if (L > 0 && -M < 0) {
                            n = -Math.atan(-M / L)
                        } else {
                            if (L < 0) {
                                n = Math.PI - Math.atan(-M / L)
                            } else {
                                if (L == 0 && -M > 0) {
                                    n = 3 * Math.PI / 2
                                } else {
                                    if (L == 0 && -M < 0) {
                                        n = Math.PI / 2
                                    } else {
                                        if (L == 0 && M == 0) {
                                            n = 0
                                        }
                                    }
                                }
                            }
                        }
                    }
                    if (k) {
                        n -= k;
                        if (n < 0) {
                            n += 2 * Math.PI
                        } else {
                            if (n > 2 * Math.PI) {
                                n -= 2 * Math.PI
                            }
                        }
                    }
                    p = G.sliceMargin / 180 * Math.PI;
                    if (F < G._radius) {
                        for (A = 0; A < G.gridData.length; A++) {
                            j = (A > 0) ? G.gridData[A - 1][1] + p : p;
                            K = G.gridData[A][1];
                            if (n > j && n < K) {
                                return {
                                    seriesIndex: G.index,
                                    pointIndex: A,
                                    gridData: G.gridData[A],
                                    data: G.data[A]
                                }
                            }
                        }
                    }
                    break;
                case au.jqplot.BubbleRenderer:
                    L = x.x;
                    M = x.y;
                    var e = null;
                    if (G.show) {
                        for (var A = 0; A < G.gridData.length; A++) {
                            E = G.gridData[A];
                            y = Math.sqrt((L - E[0]) * (L - E[0]) + (M - E[1]) * (M - E[1]));
                            if (y <= E[2] && (y <= C || C == null)) {
                                C = y;
                                e = {
                                    seriesIndex: z,
                                    pointIndex: A,
                                    gridData: E,
                                    data: G.data[A]
                                }
                            }
                        }
                        if (e != null) {
                            return e
                        }
                    }
                    break;
                case au.jqplot.FunnelRenderer:
                    L = x.x;
                    M = x.y;
                    var J = G._vertices,
                        t = J[0],
                        u = J[J.length - 1],
                        q, f, l;

                    function D(U, S, T) {
                        var P = (S[1] - T[1]) / (S[0] - T[0]);
                        var Q = S[1] - P * S[0];
                        var R = U + S[1];
                        return [(R - Q) / P, R]
                    }
                    q = D(M, t[0], u[3]);
                    f = D(M, t[1], u[2]);
                    for (A = 0; A < J.length; A++) {
                        l = J[A];
                        if (M >= l[0][1] && M <= l[3][1] && L >= q[0] && L <= f[0]) {
                            return {
                                seriesIndex: G.index,
                                pointIndex: A,
                                gridData: null,
                                data: G.data[A]
                            }
                        }
                    }
                    break;
                case au.jqplot.LineRenderer:
                    L = x.x;
                    M = x.y;
                    F = G.renderer;
                    if (G.show) {
                        if ((G.fill || (G.renderer.bands.show && G.renderer.bands.fill)) && (!w.plugins.highlighter || !w.plugins.highlighter.show)) {
                            var m = false;
                            if (L > G._boundingBox[0][0] && L < G._boundingBox[1][0] && M > G._boundingBox[1][1] && M < G._boundingBox[0][1]) {
                                var g = G._areaPoints.length;
                                var O;
                                var A = g - 1;
                                for (var O = 0; O < g; O++) {
                                    var h = [G._areaPoints[O][0], G._areaPoints[O][1]];
                                    var i = [G._areaPoints[A][0], G._areaPoints[A][1]];
                                    if (h[1] < M && i[1] >= M || i[1] < M && h[1] >= M) {
                                        if (h[0] + (M - h[1]) / (i[1] - h[1]) * (i[0] - h[0]) < L) {
                                            m = !m
                                        }
                                    }
                                    A = O
                                }
                            }
                            if (m) {
                                return {
                                    seriesIndex: z,
                                    pointIndex: null,
                                    gridData: G.gridData,
                                    data: G.data,
                                    points: G._areaPoints
                                }
                            }
                            break
                        } else {
                            H = G.markerRenderer.size / 2 + G.neighborThreshold;
                            v = (H > 0) ? H : 0;
                            for (var A = 0; A < G.gridData.length; A++) {
                                E = G.gridData[A];
                                if (F.constructor == au.jqplot.OHLCRenderer) {
                                    if (F.candleStick) {
                                        var o = G._yaxis.series_u2p;
                                        if (L >= E[0] - F._bodyWidth / 2 && L <= E[0] + F._bodyWidth / 2 && M >= o(G.data[A][2]) && M <= o(G.data[A][3])) {
                                            return {
                                                seriesIndex: z,
                                                pointIndex: A,
                                                gridData: E,
                                                data: G.data[A]
                                            }
                                        }
                                    } else {
                                        if (!F.hlc) {
                                            var o = G._yaxis.series_u2p;
                                            if (L >= E[0] - F._tickLength && L <= E[0] + F._tickLength && M >= o(G.data[A][2]) && M <= o(G.data[A][3])) {
                                                return {
                                                    seriesIndex: z,
                                                    pointIndex: A,
                                                    gridData: E,
                                                    data: G.data[A]
                                                }
                                            }
                                        } else {
                                            var o = G._yaxis.series_u2p;
                                            if (L >= E[0] - F._tickLength && L <= E[0] + F._tickLength && M >= o(G.data[A][1]) && M <= o(G.data[A][2])) {
                                                return {
                                                    seriesIndex: z,
                                                    pointIndex: A,
                                                    gridData: E,
                                                    data: G.data[A]
                                                }
                                            }
                                        }
                                    }
                                } else {
                                    if (E[0] != null && E[1] != null) {
                                        y = Math.sqrt((L - E[0]) * (L - E[0]) + (M - E[1]) * (M - E[1]));
                                        if (y <= v && (y <= C || C == null)) {
                                            C = y;
                                            return {
                                                seriesIndex: z,
                                                pointIndex: A,
                                                gridData: E,
                                                data: G.data[A]
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    break;
                default:
                    L = x.x;
                    M = x.y;
                    F = G.renderer;
                    if (G.show) {
                        H = G.markerRenderer.size / 2 + G.neighborThreshold;
                        v = (H > 0) ? H : 0;
                        for (var A = 0; A < G.gridData.length; A++) {
                            E = G.gridData[A];
                            if (F.constructor == au.jqplot.OHLCRenderer) {
                                if (F.candleStick) {
                                    var o = G._yaxis.series_u2p;
                                    if (L >= E[0] - F._bodyWidth / 2 && L <= E[0] + F._bodyWidth / 2 && M >= o(G.data[A][2]) && M <= o(G.data[A][3])) {
                                        return {
                                            seriesIndex: z,
                                            pointIndex: A,
                                            gridData: E,
                                            data: G.data[A]
                                        }
                                    }
                                } else {
                                    if (!F.hlc) {
                                        var o = G._yaxis.series_u2p;
                                        if (L >= E[0] - F._tickLength && L <= E[0] + F._tickLength && M >= o(G.data[A][2]) && M <= o(G.data[A][3])) {
                                            return {
                                                seriesIndex: z,
                                                pointIndex: A,
                                                gridData: E,
                                                data: G.data[A]
                                            }
                                        }
                                    } else {
                                        var o = G._yaxis.series_u2p;
                                        if (L >= E[0] - F._tickLength && L <= E[0] + F._tickLength && M >= o(G.data[A][1]) && M <= o(G.data[A][2])) {
                                            return {
                                                seriesIndex: z,
                                                pointIndex: A,
                                                gridData: E,
                                                data: G.data[A]
                                            }
                                        }
                                    }
                                }
                            } else {
                                y = Math.sqrt((L - E[0]) * (L - E[0]) + (M - E[1]) * (M - E[1]));
                                if (y <= v && (y <= C || C == null)) {
                                    C = y;
                                    return {
                                        seriesIndex: z,
                                        pointIndex: A,
                                        gridData: E,
                                        data: G.data[A]
                                    }
                                }
                            }
                        }
                    }
                    break
                }
            }
            return null
        }
        this.onClick = function (f) {
            var g = c(f);
            var i = f.data.plot;
            var e = a(g.gridPos, i);
            var h = jQuery.Event("jqplotClick");
            h.pageX = f.pageX;
            h.pageY = f.pageY;
            au(this).trigger(h, [g.gridPos, g.dataPos, e, i])
        };
        this.onDblClick = function (f) {
            var g = c(f);
            var i = f.data.plot;
            var e = a(g.gridPos, i);
            var h = jQuery.Event("jqplotDblClick");
            h.pageX = f.pageX;
            h.pageY = f.pageY;
            au(this).trigger(h, [g.gridPos, g.dataPos, e, i])
        };
        this.onMouseDown = function (f) {
            var g = c(f);
            var i = f.data.plot;
            var e = a(g.gridPos, i);
            var h = jQuery.Event("jqplotMouseDown");
            h.pageX = f.pageX;
            h.pageY = f.pageY;
            au(this).trigger(h, [g.gridPos, g.dataPos, e, i])
        };
        this.onMouseUp = function (e) {
            var f = c(e);
            var g = jQuery.Event("jqplotMouseUp");
            g.pageX = e.pageX;
            g.pageY = e.pageY;
            au(this).trigger(g, [f.gridPos, f.dataPos, null, e.data.plot])
        };
        this.onRightClick = function (f) {
            var g = c(f);
            var i = f.data.plot;
            var e = a(g.gridPos, i);
            if (i.captureRightClick) {
                if (f.which == 3) {
                    var h = jQuery.Event("jqplotRightClick");
                    h.pageX = f.pageX;
                    h.pageY = f.pageY;
                    au(this).trigger(h, [g.gridPos, g.dataPos, e, i])
                } else {
                    var h = jQuery.Event("jqplotMouseUp");
                    h.pageX = f.pageX;
                    h.pageY = f.pageY;
                    au(this).trigger(h, [g.gridPos, g.dataPos, e, i])
                }
            }
        };
        this.onMouseMove = function (f) {
            var g = c(f);
            var i = f.data.plot;
            var e = a(g.gridPos, i);
            var h = jQuery.Event("jqplotMouseMove");
            h.pageX = f.pageX;
            h.pageY = f.pageY;
            au(this).trigger(h, [g.gridPos, g.dataPos, e, i])
        };
        this.onMouseEnter = function (f) {
            var g = c(f);
            var e = f.data.plot;
            var h = jQuery.Event("jqplotMouseEnter");
            h.pageX = f.pageX;
            h.pageY = f.pageY;
            h.relatedTarget = f.relatedTarget;
            au(this).trigger(h, [g.gridPos, g.dataPos, null, e])
        };
        this.onMouseLeave = function (f) {
            var g = c(f);
            var e = f.data.plot;
            var h = jQuery.Event("jqplotMouseLeave");
            h.pageX = f.pageX;
            h.pageY = f.pageY;
            h.relatedTarget = f.relatedTarget;
            au(this).trigger(h, [g.gridPos, g.dataPos, null, e])
        };
        this.drawSeries = function (f, h) {
            var i, e, g;
            h = (typeof (f) === "number" && h == null) ? f : h;
            f = (typeof (f) === "object") ? f : {};
            if (h != aL) {
                e = this.series[h];
                g = e.shadowCanvas._ctx;
                g.clearRect(0, 0, g.canvas.width, g.canvas.height);
                e.drawShadow(g, f, this);
                g = e.canvas._ctx;
                g.clearRect(0, 0, g.canvas.width, g.canvas.height);
                e.draw(g, f, this);
                if (e.renderer.constructor == au.jqplot.BezierCurveRenderer) {
                    if (h < this.series.length - 1) {
                        this.drawSeries(h + 1)
                    }
                }
            } else {
                for (i = 0; i < this.series.length; i++) {
                    e = this.series[i];
                    g = e.shadowCanvas._ctx;
                    g.clearRect(0, 0, g.canvas.width, g.canvas.height);
                    e.drawShadow(g, f, this);
                    g = e.canvas._ctx;
                    g.clearRect(0, 0, g.canvas.width, g.canvas.height);
                    e.draw(g, f, this)
                }
            }
            f = h = i = e = g = null
        };
        this.moveSeriesToFront = function (g) {
            g = parseInt(g, 10);
            var i = au.inArray(g, this.seriesStack);
            if (i == -1) {
                return
            }
            if (i == this.seriesStack.length - 1) {
                this.previousSeriesStack = this.seriesStack.slice(0);
                return
            }
            var h = this.seriesStack[this.seriesStack.length - 1];
            var e = this.series[g].canvas._elem.detach();
            var f = this.series[g].shadowCanvas._elem.detach();
            this.series[h].shadowCanvas._elem.after(f);
            this.series[h].canvas._elem.after(e);
            this.previousSeriesStack = this.seriesStack.slice(0);
            this.seriesStack.splice(i, 1);
            this.seriesStack.push(g)
        };
        this.moveSeriesToBack = function (g) {
            g = parseInt(g, 10);
            var i = au.inArray(g, this.seriesStack);
            if (i == 0 || i == -1) {
                return
            }
            var h = this.seriesStack[0];
            var e = this.series[g].canvas._elem.detach();
            var f = this.series[g].shadowCanvas._elem.detach();
            this.series[h].shadowCanvas._elem.before(f);
            this.series[h].canvas._elem.before(e);
            this.previousSeriesStack = this.seriesStack.slice(0);
            this.seriesStack.splice(i, 1);
            this.seriesStack.unshift(g)
        };
        this.restorePreviousSeriesOrder = function () {
            var i, j, k, e, f, h, g;
            if (this.seriesStack == this.previousSeriesStack) {
                return
            }
            for (i = 1; i < this.previousSeriesStack.length; i++) {
                h = this.previousSeriesStack[i];
                g = this.previousSeriesStack[i - 1];
                k = this.series[h].canvas._elem.detach();
                e = this.series[h].shadowCanvas._elem.detach();
                this.series[g].shadowCanvas._elem.after(e);
                this.series[g].canvas._elem.after(k)
            }
            f = this.seriesStack.slice(0);
            this.seriesStack = this.previousSeriesStack.slice(0);
            this.previousSeriesStack = f
        };
        this.restoreOriginalSeriesOrder = function () {
            var i, e, h = [],
                f, g;
            for (i = 0; i < this.series.length; i++) {
                h.push(i)
            }
            if (this.seriesStack == h) {
                return
            }
            this.previousSeriesStack = this.seriesStack.slice(0);
            this.seriesStack = h;
            for (i = 1; i < this.seriesStack.length; i++) {
                f = this.series[i].canvas._elem.detach();
                g = this.series[i].shadowCanvas._elem.detach();
                this.series[i - 1].shadowCanvas._elem.after(g);
                this.series[i - 1].canvas._elem.after(f)
            }
        };
        this.activateTheme = function (e) {
            this.themeEngine.activate(this, e)
        }
    }
    au.jqplot.computeHighlightColors = function (f) {
        var d;
        if (jQuery.isArray(f)) {
            d = [];
            for (var b = 0; b < f.length; b++) {
                var c = au.jqplot.getColorComponents(f[b]);
                var g = [c[0], c[1], c[2]];
                var a = g[0] + g[1] + g[2];
                for (var e = 0; e < 3; e++) {
                    g[e] = (a > 660) ? g[e] * 0.85 : 0.73 * g[e] + 90;
                    g[e] = parseInt(g[e], 10);
                    (g[e] > 255) ? 255 : g[e]
                }
                g[3] = 0.3 + 0.35 * c[3];
                d.push("rgba(" + g[0] + "," + g[1] + "," + g[2] + "," + g[3] + ")")
            }
        } else {
            var c = au.jqplot.getColorComponents(f);
            var g = [c[0], c[1], c[2]];
            var a = g[0] + g[1] + g[2];
            for (var e = 0; e < 3; e++) {
                g[e] = (a > 660) ? g[e] * 0.85 : 0.73 * g[e] + 90;
                g[e] = parseInt(g[e], 10);
                (g[e] > 255) ? 255 : g[e]
            }
            g[3] = 0.3 + 0.35 * c[3];
            d = "rgba(" + g[0] + "," + g[1] + "," + g[2] + "," + g[3] + ")"
        }
        return d
    };
    au.jqplot.ColorGenerator = function (a) {
        a = a || au.jqplot.config.defaultColors;
        var b = 0;
        this.next = function () {
            if (b < a.length) {
                return a[b++]
            } else {
                b = 0;
                return a[b++]
            }
        };
        this.previous = function () {
            if (b > 0) {
                return a[b--]
            } else {
                b = a.length - 1;
                return a[b]
            }
        };
        this.get = function (c) {
            var d = c - a.length * Math.floor(c / a.length);
            return a[d]
        };
        this.setColors = function (c) {
            a = c
        };
        this.reset = function () {
            b = 0
        };
        this.getIndex = function () {
            return b
        };
        this.setIndex = function (c) {
            b = c
        }
    };
    au.jqplot.hex2rgb = function (a, c) {
        a = a.replace("#", "");
        if (a.length == 3) {
            a = a.charAt(0) + a.charAt(0) + a.charAt(1) + a.charAt(1) + a.charAt(2) + a.charAt(2)
        }
        var b;
        b = "rgba(" + parseInt(a.slice(0, 2), 16) + ", " + parseInt(a.slice(2, 4), 16) + ", " + parseInt(a.slice(4, 6), 16);
        if (c) {
            b += ", " + c
        }
        b += ")";
        return b
    };
    au.jqplot.rgb2hex = function (a) {
        var d = /rgba?\( *([0-9]{1,3}\.?[0-9]*%?) *, *([0-9]{1,3}\.?[0-9]*%?) *, *([0-9]{1,3}\.?[0-9]*%?) *(?:, *[0-9.]*)?\)/;
        var f = a.match(d);
        var b = "#";
        for (var c = 1; c < 4; c++) {
            var e;
            if (f[c].search(/%/) != -1) {
                e = parseInt(255 * f[c] / 100, 10).toString(16);
                if (e.length == 1) {
                    e = "0" + e
                }
            } else {
                e = parseInt(f[c], 10).toString(16);
                if (e.length == 1) {
                    e = "0" + e
                }
            }
            b += e
        }
        return b
    };
    au.jqplot.normalize2rgb = function (a, b) {
        if (a.search(/^ *rgba?\(/) != -1) {
            return a
        } else {
            if (a.search(/^ *#?[0-9a-fA-F]?[0-9a-fA-F]/) != -1) {
                return au.jqplot.hex2rgb(a, b)
            } else {
                throw "invalid color spec"
            }
        }
    };
    au.jqplot.getColorComponents = function (a) {
        a = au.jqplot.colorKeywordMap[a] || a;
        var c = au.jqplot.normalize2rgb(a);
        var d = /rgba?\( *([0-9]{1,3}\.?[0-9]*%?) *, *([0-9]{1,3}\.?[0-9]*%?) *, *([0-9]{1,3}\.?[0-9]*%?) *,? *([0-9.]* *)?\)/;
        var f = c.match(d);
        var e = [];
        for (var b = 1; b < 4; b++) {
            if (f[b].search(/%/) != -1) {
                e[b - 1] = parseInt(255 * f[b] / 100, 10)
            } else {
                e[b - 1] = parseInt(f[b], 10)
            }
        }
        e[3] = parseFloat(f[4]) ? parseFloat(f[4]) : 1;
        return e
    };
    au.jqplot.colorKeywordMap = {
        aliceblue: "rgb(240, 248, 255)",
        antiquewhite: "rgb(250, 235, 215)",
        aqua: "rgb( 0, 255, 255)",
        aquamarine: "rgb(127, 255, 212)",
        azure: "rgb(240, 255, 255)",
        beige: "rgb(245, 245, 220)",
        bisque: "rgb(255, 228, 196)",
        black: "rgb( 0, 0, 0)",
        blanchedalmond: "rgb(255, 235, 205)",
        blue: "rgb( 0, 0, 255)",
        blueviolet: "rgb(138, 43, 226)",
        brown: "rgb(165, 42, 42)",
        burlywood: "rgb(222, 184, 135)",
        cadetblue: "rgb( 95, 158, 160)",
        chartreuse: "rgb(127, 255, 0)",
        chocolate: "rgb(210, 105, 30)",
        coral: "rgb(255, 127, 80)",
        cornflowerblue: "rgb(100, 149, 237)",
        cornsilk: "rgb(255, 248, 220)",
        crimson: "rgb(220, 20, 60)",
        cyan: "rgb( 0, 255, 255)",
        darkblue: "rgb( 0, 0, 139)",
        darkcyan: "rgb( 0, 139, 139)",
        darkgoldenrod: "rgb(184, 134, 11)",
        darkgray: "rgb(169, 169, 169)",
        darkgreen: "rgb( 0, 100, 0)",
        darkgrey: "rgb(169, 169, 169)",
        darkkhaki: "rgb(189, 183, 107)",
        darkmagenta: "rgb(139, 0, 139)",
        darkolivegreen: "rgb( 85, 107, 47)",
        darkorange: "rgb(255, 140, 0)",
        darkorchid: "rgb(153, 50, 204)",
        darkred: "rgb(139, 0, 0)",
        darksalmon: "rgb(233, 150, 122)",
        darkseagreen: "rgb(143, 188, 143)",
        darkslateblue: "rgb( 72, 61, 139)",
        darkslategray: "rgb( 47, 79, 79)",
        darkslategrey: "rgb( 47, 79, 79)",
        darkturquoise: "rgb( 0, 206, 209)",
        darkviolet: "rgb(148, 0, 211)",
        deeppink: "rgb(255, 20, 147)",
        deepskyblue: "rgb( 0, 191, 255)",
        dimgray: "rgb(105, 105, 105)",
        dimgrey: "rgb(105, 105, 105)",
        dodgerblue: "rgb( 30, 144, 255)",
        firebrick: "rgb(178, 34, 34)",
        floralwhite: "rgb(255, 250, 240)",
        forestgreen: "rgb( 34, 139, 34)",
        fuchsia: "rgb(255, 0, 255)",
        gainsboro: "rgb(220, 220, 220)",
        ghostwhite: "rgb(248, 248, 255)",
        gold: "rgb(255, 215, 0)",
        goldenrod: "rgb(218, 165, 32)",
        gray: "rgb(128, 128, 128)",
        grey: "rgb(128, 128, 128)",
        green: "rgb( 0, 128, 0)",
        greenyellow: "rgb(173, 255, 47)",
        honeydew: "rgb(240, 255, 240)",
        hotpink: "rgb(255, 105, 180)",
        indianred: "rgb(205, 92, 92)",
        indigo: "rgb( 75, 0, 130)",
        ivory: "rgb(255, 255, 240)",
        khaki: "rgb(240, 230, 140)",
        lavender: "rgb(230, 230, 250)",
        lavenderblush: "rgb(255, 240, 245)",
        lawngreen: "rgb(124, 252, 0)",
        lemonchiffon: "rgb(255, 250, 205)",
        lightblue: "rgb(173, 216, 230)",
        lightcoral: "rgb(240, 128, 128)",
        lightcyan: "rgb(224, 255, 255)",
        lightgoldenrodyellow: "rgb(250, 250, 210)",
        lightgray: "rgb(211, 211, 211)",
        lightgreen: "rgb(144, 238, 144)",
        lightgrey: "rgb(211, 211, 211)",
        lightpink: "rgb(255, 182, 193)",
        lightsalmon: "rgb(255, 160, 122)",
        lightseagreen: "rgb( 32, 178, 170)",
        lightskyblue: "rgb(135, 206, 250)",
        lightslategray: "rgb(119, 136, 153)",
        lightslategrey: "rgb(119, 136, 153)",
        lightsteelblue: "rgb(176, 196, 222)",
        lightyellow: "rgb(255, 255, 224)",
        lime: "rgb( 0, 255, 0)",
        limegreen: "rgb( 50, 205, 50)",
        linen: "rgb(250, 240, 230)",
        magenta: "rgb(255, 0, 255)",
        maroon: "rgb(128, 0, 0)",
        mediumaquamarine: "rgb(102, 205, 170)",
        mediumblue: "rgb( 0, 0, 205)",
        mediumorchid: "rgb(186, 85, 211)",
        mediumpurple: "rgb(147, 112, 219)",
        mediumseagreen: "rgb( 60, 179, 113)",
        mediumslateblue: "rgb(123, 104, 238)",
        mediumspringgreen: "rgb( 0, 250, 154)",
        mediumturquoise: "rgb( 72, 209, 204)",
        mediumvioletred: "rgb(199, 21, 133)",
        midnightblue: "rgb( 25, 25, 112)",
        mintcream: "rgb(245, 255, 250)",
        mistyrose: "rgb(255, 228, 225)",
        moccasin: "rgb(255, 228, 181)",
        navajowhite: "rgb(255, 222, 173)",
        navy: "rgb( 0, 0, 128)",
        oldlace: "rgb(253, 245, 230)",
        olive: "rgb(128, 128, 0)",
        olivedrab: "rgb(107, 142, 35)",
        orange: "rgb(255, 165, 0)",
        orangered: "rgb(255, 69, 0)",
        orchid: "rgb(218, 112, 214)",
        palegoldenrod: "rgb(238, 232, 170)",
        palegreen: "rgb(152, 251, 152)",
        paleturquoise: "rgb(175, 238, 238)",
        palevioletred: "rgb(219, 112, 147)",
        papayawhip: "rgb(255, 239, 213)",
        peachpuff: "rgb(255, 218, 185)",
        peru: "rgb(205, 133, 63)",
        pink: "rgb(255, 192, 203)",
        plum: "rgb(221, 160, 221)",
        powderblue: "rgb(176, 224, 230)",
        purple: "rgb(128, 0, 128)",
        red: "rgb(255, 0, 0)",
        rosybrown: "rgb(188, 143, 143)",
        royalblue: "rgb( 65, 105, 225)",
        saddlebrown: "rgb(139, 69, 19)",
        salmon: "rgb(250, 128, 114)",
        sandybrown: "rgb(244, 164, 96)",
        seagreen: "rgb( 46, 139, 87)",
        seashell: "rgb(255, 245, 238)",
        sienna: "rgb(160, 82, 45)",
        silver: "rgb(192, 192, 192)",
        skyblue: "rgb(135, 206, 235)",
        slateblue: "rgb(106, 90, 205)",
        slategray: "rgb(112, 128, 144)",
        slategrey: "rgb(112, 128, 144)",
        snow: "rgb(255, 250, 250)",
        springgreen: "rgb( 0, 255, 127)",
        steelblue: "rgb( 70, 130, 180)",
        tan: "rgb(210, 180, 140)",
        teal: "rgb( 0, 128, 128)",
        thistle: "rgb(216, 191, 216)",
        tomato: "rgb(255, 99, 71)",
        turquoise: "rgb( 64, 224, 208)",
        violet: "rgb(238, 130, 238)",
        wheat: "rgb(245, 222, 179)",
        white: "rgb(255, 255, 255)",
        whitesmoke: "rgb(245, 245, 245)",
        yellow: "rgb(255, 255, 0)",
        yellowgreen: "rgb(154, 205, 50)"
    };
    au.jqplot.AxisLabelRenderer = function (a) {
        au.jqplot.ElemContainer.call(this);
        this.axis;
        this.show = true;
        this.label = "";
        this.fontFamily = null;
        this.fontSize = null;
        this.textColor = null;
        this._elem;
        this.escapeHTML = false;
        au.extend(true, this, a)
    };
    au.jqplot.AxisLabelRenderer.prototype = new au.jqplot.ElemContainer();
    au.jqplot.AxisLabelRenderer.prototype.constructor = au.jqplot.AxisLabelRenderer;
    au.jqplot.AxisLabelRenderer.prototype.init = function (a) {
        au.extend(true, this, a)
    };
    au.jqplot.AxisLabelRenderer.prototype.draw = function (b, a) {
        if (this._elem) {
            this._elem.emptyForce();
            this._elem = null
        }
        this._elem = au('<div style="position:absolute;" class="jqplot-' + this.axis + '-label"></div>');
        if (Number(this.label)) {
            this._elem.css("white-space", "nowrap")
        }
        if (!this.escapeHTML) {
            this._elem.html(this.label)
        } else {
            this._elem.text(this.label)
        }
        if (this.fontFamily) {
            this._elem.css("font-family", this.fontFamily)
        }
        if (this.fontSize) {
            this._elem.css("font-size", this.fontSize)
        }
        if (this.textColor) {
            this._elem.css("color", this.textColor)
        }
        return this._elem
    };
    au.jqplot.AxisLabelRenderer.prototype.pack = function () {};
    au.jqplot.AxisTickRenderer = function (a) {
        au.jqplot.ElemContainer.call(this);
        this.mark = "outside";
        this.axis;
        this.showMark = true;
        this.showGridline = true;
        this.isMinorTick = false;
        this.size = 4;
        this.markSize = 6;
        this.show = true;
        this.showLabel = true;
        this.label = null;
        this.value = null;
        this._styles = {};
        this.formatter = au.jqplot.DefaultTickFormatter;
        this.prefix = "";
        this.formatString = "";
        this.fontFamily;
        this.fontSize;
        this.textColor;
        this.escapeHTML = false;
        this._elem;
        this._breakTick = false;
        au.extend(true, this, a)
    };
    au.jqplot.AxisTickRenderer.prototype.init = function (a) {
        au.extend(true, this, a)
    };
    au.jqplot.AxisTickRenderer.prototype = new au.jqplot.ElemContainer();
    au.jqplot.AxisTickRenderer.prototype.constructor = au.jqplot.AxisTickRenderer;
    au.jqplot.AxisTickRenderer.prototype.setTick = function (c, a, b) {
        this.value = c;
        this.axis = a;
        if (b) {
            this.isMinorTick = true
        }
        return this
    };
    au.jqplot.AxisTickRenderer.prototype.draw = function () {
        if (this.label === null) {
            this.label = this.prefix + this.formatter(this.formatString, this.value)
        }
        var a = {
            position: "absolute"
        };
        if (Number(this.label)) {
            a.whitSpace = "nowrap"
        }
        if (this._elem) {
            this._elem.emptyForce();
            this._elem = null
        }
        this._elem = au(document.createElement("div"));
        this._elem.addClass("jqplot-" + this.axis + "-tick");
        if (!this.escapeHTML) {
            this._elem.html(this.label)
        } else {
            this._elem.text(this.label)
        }
        this._elem.css(a);
        for (var b in this._styles) {
            this._elem.css(b, this._styles[b])
        }
        if (this.fontFamily) {
            this._elem.css("font-family", this.fontFamily)
        }
        if (this.fontSize) {
            this._elem.css("font-size", this.fontSize)
        }
        if (this.textColor) {
            this._elem.css("color", this.textColor)
        }
        if (this._breakTick) {
            this._elem.addClass("jqplot-breakTick")
        }
        return this._elem
    };
    au.jqplot.DefaultTickFormatter = function (b, a) {
        if (typeof a == "number") {
            if (!b) {
                b = au.jqplot.config.defaultTickFormatString
            }
            return au.jqplot.sprintf(b, a)
        } else {
            return String(a)
        }
    };
    au.jqplot.AxisTickRenderer.prototype.pack = function () {};
    au.jqplot.CanvasGridRenderer = function () {
        this.shadowRenderer = new au.jqplot.ShadowRenderer()
    };
    au.jqplot.CanvasGridRenderer.prototype.init = function (a) {
        this._ctx;
        au.extend(true, this, a);
        var b = {
            lineJoin: "miter",
            lineCap: "round",
            fill: false,
            isarc: false,
            angle: this.shadowAngle,
            offset: this.shadowOffset,
            alpha: this.shadowAlpha,
            depth: this.shadowDepth,
            lineWidth: this.shadowWidth,
            closePath: false,
            strokeStyle: this.shadowColor
        };
        this.renderer.shadowRenderer.init(b)
    };
    au.jqplot.CanvasGridRenderer.prototype.createElement = function (a) {
        var b;
        if (this._elem) {
            if (au.jqplot.use_excanvas && window.G_vmlCanvasManager.uninitElement !== aL) {
                b = this._elem.get(0);
                window.G_vmlCanvasManager.uninitElement(b);
                b = null
            }
            this._elem.emptyForce();
            this._elem = null
        }
        b = a.canvasManager.getCanvas();
        var d = this._plotDimensions.width;
        var c = this._plotDimensions.height;
        b.width = d;
        b.height = c;
        this._elem = au(b);
        this._elem.addClass("jqplot-grid-canvas");
        this._elem.css({
            position: "absolute",
            left: 0,
            top: 0
        });
        b = a.canvasManager.initCanvas(b);
        this._top = this._offsets.top;
        this._bottom = c - this._offsets.bottom;
        this._left = this._offsets.left;
        this._right = d - this._offsets.right;
        this._width = this._right - this._left;
        this._height = this._bottom - this._top;
        b = null;
        return this._elem
    };
    au.jqplot.CanvasGridRenderer.prototype.draw = function () {
        this._ctx = this._elem.get(0).getContext("2d");
        var j = this._ctx;
        var g = this._axes;
        j.save();
        j.clearRect(0, 0, this._plotDimensions.width, this._plotDimensions.height);
        j.fillStyle = this.backgroundColor || this.background;
        j.fillRect(this._left, this._top, this._width, this._height);
        j.save();
        j.lineJoin = "miter";
        j.lineCap = "butt";
        j.lineWidth = this.gridLineWidth;
        j.strokeStyle = this.gridLineColor;
        var d, e, m, l;
        var p = ["xaxis", "yaxis", "x2axis", "y2axis"];
        for (var f = 4; f > 0; f--) {
            var a = p[f - 1];
            var u = g[a];
            var c = u._ticks;
            var k = c.length;
            if (u.show) {
                if (u.drawBaseline) {
                    var b = {};
                    if (u.baselineWidth !== null) {
                        b.lineWidth = u.baselineWidth
                    }
                    if (u.baselineColor !== null) {
                        b.strokeStyle = u.baselineColor
                    }
                    switch (a) {
                    case "xaxis":
                        n(this._left, this._bottom, this._right, this._bottom, b);
                        break;
                    case "yaxis":
                        n(this._left, this._bottom, this._left, this._top, b);
                        break;
                    case "x2axis":
                        n(this._left, this._bottom, this._right, this._bottom, b);
                        break;
                    case "y2axis":
                        n(this._right, this._bottom, this._right, this._top, b);
                        break
                    }
                }
                for (var i = k; i > 0; i--) {
                    var o = c[i - 1];
                    if (o.show) {
                        var r = Math.round(u.u2p(o.value)) + 0.5;
                        switch (a) {
                        case "xaxis":
                            if (o.showGridline && this.drawGridlines && ((!o.isMinorTick && u.drawMajorGridlines) || (o.isMinorTick && u.drawMinorGridlines))) {
                                n(r, this._top, r, this._bottom)
                            }
                            if (o.showMark && o.mark && ((!o.isMinorTick && u.drawMajorTickMarks) || (o.isMinorTick && u.drawMinorTickMarks))) {
                                m = o.markSize;
                                l = o.mark;
                                var r = Math.round(u.u2p(o.value)) + 0.5;
                                switch (l) {
                                case "outside":
                                    d = this._bottom;
                                    e = this._bottom + m;
                                    break;
                                case "inside":
                                    d = this._bottom - m;
                                    e = this._bottom;
                                    break;
                                case "cross":
                                    d = this._bottom - m;
                                    e = this._bottom + m;
                                    break;
                                default:
                                    d = this._bottom;
                                    e = this._bottom + m;
                                    break
                                }
                                if (this.shadow) {
                                    this.renderer.shadowRenderer.draw(j, [
                                        [r, d],
                                        [r, e]
                                    ], {
                                        lineCap: "butt",
                                        lineWidth: this.gridLineWidth,
                                        offset: this.gridLineWidth * 0.75,
                                        depth: 2,
                                        fill: false,
                                        closePath: false
                                    })
                                }
                                n(r, d, r, e)
                            }
                            break;
                        case "yaxis":
                            if (o.showGridline && this.drawGridlines && ((!o.isMinorTick && u.drawMajorGridlines) || (o.isMinorTick && u.drawMinorGridlines))) {
                                n(this._right, r, this._left, r)
                            }
                            if (o.showMark && o.mark && ((!o.isMinorTick && u.drawMajorTickMarks) || (o.isMinorTick && u.drawMinorTickMarks))) {
                                m = o.markSize;
                                l = o.mark;
                                var r = Math.round(u.u2p(o.value)) + 0.5;
                                switch (l) {
                                case "outside":
                                    d = this._left - m;
                                    e = this._left;
                                    break;
                                case "inside":
                                    d = this._left;
                                    e = this._left + m;
                                    break;
                                case "cross":
                                    d = this._left - m;
                                    e = this._left + m;
                                    break;
                                default:
                                    d = this._left - m;
                                    e = this._left;
                                    break
                                }
                                if (this.shadow) {
                                    this.renderer.shadowRenderer.draw(j, [
                                        [d, r],
                                        [e, r]
                                    ], {
                                        lineCap: "butt",
                                        lineWidth: this.gridLineWidth * 1.5,
                                        offset: this.gridLineWidth * 0.75,
                                        fill: false,
                                        closePath: false
                                    })
                                }
                                n(d, r, e, r, {
                                    strokeStyle: u.borderColor
                                })
                            }
                            break;
                        case "x2axis":
                            if (o.showGridline && this.drawGridlines && ((!o.isMinorTick && u.drawMajorGridlines) || (o.isMinorTick && u.drawMinorGridlines))) {
                                n(r, this._bottom, r, this._top)
                            }
                            if (o.showMark && o.mark && ((!o.isMinorTick && u.drawMajorTickMarks) || (o.isMinorTick && u.drawMinorTickMarks))) {
                                m = o.markSize;
                                l = o.mark;
                                var r = Math.round(u.u2p(o.value)) + 0.5;
                                switch (l) {
                                case "outside":
                                    d = this._top - m;
                                    e = this._top;
                                    break;
                                case "inside":
                                    d = this._top;
                                    e = this._top + m;
                                    break;
                                case "cross":
                                    d = this._top - m;
                                    e = this._top + m;
                                    break;
                                default:
                                    d = this._top - m;
                                    e = this._top;
                                    break
                                }
                                if (this.shadow) {
                                    this.renderer.shadowRenderer.draw(j, [
                                        [r, d],
                                        [r, e]
                                    ], {
                                        lineCap: "butt",
                                        lineWidth: this.gridLineWidth,
                                        offset: this.gridLineWidth * 0.75,
                                        depth: 2,
                                        fill: false,
                                        closePath: false
                                    })
                                }
                                n(r, d, r, e)
                            }
                            break;
                        case "y2axis":
                            if (o.showGridline && this.drawGridlines && ((!o.isMinorTick && u.drawMajorGridlines) || (o.isMinorTick && u.drawMinorGridlines))) {
                                n(this._left, r, this._right, r)
                            }
                            if (o.showMark && o.mark && ((!o.isMinorTick && u.drawMajorTickMarks) || (o.isMinorTick && u.drawMinorTickMarks))) {
                                m = o.markSize;
                                l = o.mark;
                                var r = Math.round(u.u2p(o.value)) + 0.5;
                                switch (l) {
                                case "outside":
                                    d = this._right;
                                    e = this._right + m;
                                    break;
                                case "inside":
                                    d = this._right - m;
                                    e = this._right;
                                    break;
                                case "cross":
                                    d = this._right - m;
                                    e = this._right + m;
                                    break;
                                default:
                                    d = this._right;
                                    e = this._right + m;
                                    break
                                }
                                if (this.shadow) {
                                    this.renderer.shadowRenderer.draw(j, [
                                        [d, r],
                                        [e, r]
                                    ], {
                                        lineCap: "butt",
                                        lineWidth: this.gridLineWidth * 1.5,
                                        offset: this.gridLineWidth * 0.75,
                                        fill: false,
                                        closePath: false
                                    })
                                }
                                n(d, r, e, r, {
                                    strokeStyle: u.borderColor
                                })
                            }
                            break;
                        default:
                            break
                        }
                    }
                }
                o = null
            }
            u = null;
            c = null
        }
        p = ["y3axis", "y4axis", "y5axis", "y6axis", "y7axis", "y8axis", "y9axis", "yMidAxis"];
        for (var f = 7; f > 0; f--) {
            var u = g[p[f - 1]];
            var c = u._ticks;
            if (u.show) {
                var t = c[u.numberTicks - 1];
                var q = c[0];
                var s = u.getLeft();
                var h = [
                    [s, t.getTop() + t.getHeight() / 2],
                    [s, q.getTop() + q.getHeight() / 2 + 1]
                ];
                if (this.shadow) {
                    this.renderer.shadowRenderer.draw(j, h, {
                        lineCap: "butt",
                        fill: false,
                        closePath: false
                    })
                }
                n(h[0][0], h[0][1], h[1][0], h[1][1], {
                    lineCap: "butt",
                    strokeStyle: u.borderColor,
                    lineWidth: u.borderWidth
                });
                for (var i = c.length; i > 0; i--) {
                    var o = c[i - 1];
                    m = o.markSize;
                    l = o.mark;
                    var r = Math.round(u.u2p(o.value)) + 0.5;
                    if (o.showMark && o.mark) {
                        switch (l) {
                        case "outside":
                            d = s;
                            e = s + m;
                            break;
                        case "inside":
                            d = s - m;
                            e = s;
                            break;
                        case "cross":
                            d = s - m;
                            e = s + m;
                            break;
                        default:
                            d = s;
                            e = s + m;
                            break
                        }
                        h = [
                            [d, r],
                            [e, r]
                        ];
                        if (this.shadow) {
                            this.renderer.shadowRenderer.draw(j, h, {
                                lineCap: "butt",
                                lineWidth: this.gridLineWidth * 1.5,
                                offset: this.gridLineWidth * 0.75,
                                fill: false,
                                closePath: false
                            })
                        }
                        n(d, r, e, r, {
                            strokeStyle: u.borderColor
                        })
                    }
                    o = null
                }
                q = null
            }
            u = null;
            c = null
        }
        j.restore();

        function n(x, z, w, y, v) {
            j.save();
            v = v || {};
            if (v.lineWidth == null || v.lineWidth != 0) {
                au.extend(true, j, v);
                j.beginPath();
                j.moveTo(x, z);
                j.lineTo(w, y);
                j.stroke();
                j.restore()
            }
        }
        if (this.shadow) {
            var h = [
                [this._left, this._bottom],
                [this._right, this._bottom],
                [this._right, this._top]
            ];
            this.renderer.shadowRenderer.draw(j, h)
        }
        if (this.borderWidth != 0 && this.drawBorder) {
            n(this._left, this._top, this._right, this._top, {
                lineCap: "round",
                strokeStyle: g.x2axis.borderColor,
                lineWidth: g.x2axis.borderWidth
            });
            n(this._right, this._top, this._right, this._bottom, {
                lineCap: "round",
                strokeStyle: g.y2axis.borderColor,
                lineWidth: g.y2axis.borderWidth
            });
            n(this._right, this._bottom, this._left, this._bottom, {
                lineCap: "round",
                strokeStyle: g.xaxis.borderColor,
                lineWidth: g.xaxis.borderWidth
            });
            n(this._left, this._bottom, this._left, this._top, {
                lineCap: "round",
                strokeStyle: g.yaxis.borderColor,
                lineWidth: g.yaxis.borderWidth
            })
        }
        j.restore();
        j = null;
        g = null
    };
    au.jqplot.DivTitleRenderer = function () {};
    au.jqplot.DivTitleRenderer.prototype.init = function (a) {
        au.extend(true, this, a)
    };
    au.jqplot.DivTitleRenderer.prototype.draw = function () {
        if (this._elem) {
            this._elem.emptyForce();
            this._elem = null
        }
        var a = this.renderer;
        var b = document.createElement("div");
        this._elem = au(b);
        this._elem.addClass("jqplot-title");
        if (!this.text) {
            this.show = false;
            this._elem.height(0);
            this._elem.width(0)
        } else {
            if (this.text) {
                var d;
                if (this.color) {
                    d = this.color
                } else {
                    if (this.textColor) {
                        d = this.textColor
                    }
                }
                var c = {
                    position: "absolute",
                    top: "0px",
                    left: "0px"
                };
                if (this._plotWidth) {
                    c.width = this._plotWidth + "px"
                }
                if (this.fontSize) {
                    c.fontSize = this.fontSize
                }
                if (typeof this.textAlign === "string") {
                    c.textAlign = this.textAlign
                } else {
                    c.textAlign = "center"
                }
                if (d) {
                    c.color = d
                }
                if (this.paddingBottom) {
                    c.paddingBottom = this.paddingBottom
                }
                if (this.fontFamily) {
                    c.fontFamily = this.fontFamily
                }
                this._elem.css(c);
                if (this.escapeHtml) {
                    this._elem.text(this.text)
                } else {
                    this._elem.html(this.text)
                }
            }
        }
        b = null;
        return this._elem
    };
    au.jqplot.DivTitleRenderer.prototype.pack = function () {};
    var aO = 0.1;
    au.jqplot.LinePattern = function (b, g) {
        var h = {
            dotted: [aO, au.jqplot.config.dotGapLength],
            dashed: [au.jqplot.config.dashLength, au.jqplot.config.gapLength],
            solid: null
        };
        if (typeof g === "string") {
            if (g[0] === "." || g[0] === "-") {
                var a = g;
                g = [];
                for (var i = 0, l = a.length; i < l; i++) {
                    if (a[i] === ".") {
                        g.push(aO)
                    } else {
                        if (a[i] === "-") {
                            g.push(au.jqplot.config.dashLength)
                        } else {
                            continue
                        }
                    }
                    g.push(au.jqplot.config.gapLength)
                }
            } else {
                g = h[g]
            }
        }
        if (!(g && g.length)) {
            return b
        }
        var m = 0;
        var f = g[0];
        var d = 0;
        var e = 0;
        var j = 0;
        var p = 0;
        var c = function (r, q) {
                b.moveTo(r, q);
                d = r;
                e = q;
                j = r;
                p = q
            };
        var n = function (r, s) {
                var u = b.lineWidth;
                var w = r - d;
                var q = s - e;
                var v = Math.sqrt(w * w + q * q);
                if ((v > 0) && (u > 0)) {
                    w /= v;
                    q /= v;
                    while (true) {
                        var t = u * f;
                        if (t < v) {
                            d += t * w;
                            e += t * q;
                            if ((m & 1) == 0) {
                                b.lineTo(d, e)
                            } else {
                                b.moveTo(d, e)
                            }
                            v -= t;
                            m++;
                            if (m >= g.length) {
                                m = 0
                            }
                            f = g[m]
                        } else {
                            d = r;
                            e = s;
                            if ((m & 1) == 0) {
                                b.lineTo(d, e)
                            } else {
                                b.moveTo(d, e)
                            }
                            f -= v / u;
                            break
                        }
                    }
                }
            };
        var o = function () {
                b.beginPath()
            };
        var k = function () {
                n(j, p)
            };
        return {
            moveTo: c,
            lineTo: n,
            beginPath: o,
            closePath: k
        }
    };
    au.jqplot.LineRenderer = function () {
        this.shapeRenderer = new au.jqplot.ShapeRenderer();
        this.shadowRenderer = new au.jqplot.ShadowRenderer()
    };
    au.jqplot.LineRenderer.prototype.init = function (f, a) {
        f = f || {};
        this._type = "line";
        this.renderer.animation = {
            show: false,
            direction: "left",
            speed: 2500,
            _supported: true
        };
        this.renderer.smooth = false;
        this.renderer.tension = null;
        this.renderer.constrainSmoothing = true;
        this.renderer._smoothedData = [];
        this.renderer._smoothedPlotData = [];
        this.renderer._hiBandGridData = [];
        this.renderer._lowBandGridData = [];
        this.renderer._hiBandSmoothedData = [];
        this.renderer._lowBandSmoothedData = [];
        this.renderer.bandData = [];
        this.renderer.bands = {
            show: false,
            hiData: [],
            lowData: [],
            color: this.color,
            showLines: false,
            fill: true,
            fillColor: null,
            _min: null,
            _max: null,
            interval: "3%"
        };
        var c = {
            highlightMouseOver: f.highlightMouseOver,
            highlightMouseDown: f.highlightMouseDown,
            highlightColor: f.highlightColor
        };
        delete(f.highlightMouseOver);
        delete(f.highlightMouseDown);
        delete(f.highlightColor);
        au.extend(true, this.renderer, f);
        this.renderer.options = f;
        if (this.renderer.bandData.length > 1 && (!f.bands || f.bands.show == null)) {
            this.renderer.bands.show = true
        } else {
            if (f.bands && f.bands.show == null && f.bands.interval != null) {
                this.renderer.bands.show = true
            }
        }
        if (this.fill) {
            this.renderer.bands.show = false
        }
        if (this.renderer.bands.show) {
            this.renderer.initBands.call(this, this.renderer.options, a)
        }
        if (this._stack) {
            this.renderer.smooth = false
        }
        var b = {
            lineJoin: this.lineJoin,
            lineCap: this.lineCap,
            fill: this.fill,
            isarc: false,
            strokeStyle: this.color,
            fillStyle: this.fillColor,
            lineWidth: this.lineWidth,
            linePattern: this.linePattern,
            closePath: this.fill
        };
        this.renderer.shapeRenderer.init(b);
        var e = f.shadowOffset;
        if (e == null) {
            if (this.lineWidth > 2.5) {
                e = 1.25 * (1 + (Math.atan((this.lineWidth / 2.5)) / 0.785398163 - 1) * 0.6)
            } else {
                e = 1.25 * Math.atan((this.lineWidth / 2.5)) / 0.785398163
            }
        }
        var g = {
            lineJoin: this.lineJoin,
            lineCap: this.lineCap,
            fill: this.fill,
            isarc: false,
            angle: this.shadowAngle,
            offset: e,
            alpha: this.shadowAlpha,
            depth: this.shadowDepth,
            lineWidth: this.lineWidth,
            linePattern: this.linePattern,
            closePath: this.fill
        };
        this.renderer.shadowRenderer.init(g);
        this._areaPoints = [];
        this._boundingBox = [
            [],
            []
        ];
        if (!this.isTrendline && this.fill || this.renderer.bands.show) {
            this.highlightMouseOver = true;
            this.highlightMouseDown = false;
            this.highlightColor = null;
            if (c.highlightMouseDown && c.highlightMouseOver == null) {
                c.highlightMouseOver = false
            }
            au.extend(true, this, {
                highlightMouseOver: c.highlightMouseOver,
                highlightMouseDown: c.highlightMouseDown,
                highlightColor: c.highlightColor
            });
            if (!this.highlightColor) {
                var d = (this.renderer.bands.show) ? this.renderer.bands.fillColor : this.fillColor;
                this.highlightColor = au.jqplot.computeHighlightColors(d)
            }
            if (this.highlighter) {
                this.highlighter.show = false
            }
        }
        if (!this.isTrendline && a) {
            a.plugins.lineRenderer = {};
            a.postInitHooks.addOnce(aH);
            a.postDrawHooks.addOnce(ab);
            a.eventListenerHooks.addOnce("jqplotMouseMove", aW);
            a.eventListenerHooks.addOnce("jqplotMouseDown", aZ);
            a.eventListenerHooks.addOnce("jqplotMouseUp", ac);
            a.eventListenerHooks.addOnce("jqplotClick", aX);
            a.eventListenerHooks.addOnce("jqplotRightClick", aN)
        }
    };
    au.jqplot.LineRenderer.prototype.initBands = function (r, h) {
        var q = r.bandData || [];
        var o = this.renderer.bands;
        o.hiData = [];
        o.lowData = [];
        var b = this.data;
        o._max = null;
        o._min = null;
        if (q.length == 2) {
            if (au.isArray(q[0][0])) {
                var n;
                var u = 0,
                    k = 0;
                for (var g = 0, j = q[0].length; g < j; g++) {
                    n = q[0][g];
                    if ((n[1] != null && n[1] > o._max) || o._max == null) {
                        o._max = n[1]
                    }
                    if ((n[1] != null && n[1] < o._min) || o._min == null) {
                        o._min = n[1]
                    }
                }
                for (var g = 0, j = q[1].length; g < j; g++) {
                    n = q[1][g];
                    if ((n[1] != null && n[1] > o._max) || o._max == null) {
                        o._max = n[1];
                        k = 1
                    }
                    if ((n[1] != null && n[1] < o._min) || o._min == null) {
                        o._min = n[1];
                        u = 1
                    }
                }
                if (k === u) {
                    o.show = false
                }
                o.hiData = q[k];
                o.lowData = q[u]
            } else {
                if (q[0].length === b.length && q[1].length === b.length) {
                    var s = (q[0][0] > q[1][0]) ? 0 : 1;
                    var a = (s) ? 0 : 1;
                    for (var g = 0, j = b.length; g < j; g++) {
                        o.hiData.push([b[g][0], q[s][g]]);
                        o.lowData.push([b[g][0], q[a][g]])
                    }
                } else {
                    o.show = false
                }
            }
        } else {
            if (q.length > 2 && !au.isArray(q[0][0])) {
                var s = (q[0][0] > q[0][1]) ? 0 : 1;
                var a = (s) ? 0 : 1;
                for (var g = 0, j = q.length; g < j; g++) {
                    o.hiData.push([b[g][0], q[g][s]]);
                    o.lowData.push([b[g][0], q[g][a]])
                }
            } else {
                var l = o.interval;
                var c = null;
                var d = null;
                var t = null;
                var i = null;
                if (au.isArray(l)) {
                    c = l[0];
                    d = l[1]
                } else {
                    c = l
                }
                if (isNaN(c)) {
                    if (c.charAt(c.length - 1) === "%") {
                        t = "multiply";
                        c = parseFloat(c) / 100 + 1
                    }
                } else {
                    c = parseFloat(c);
                    t = "add"
                }
                if (d !== null && isNaN(d)) {
                    if (d.charAt(d.length - 1) === "%") {
                        i = "multiply";
                        d = parseFloat(d) / 100 + 1
                    }
                } else {
                    if (d !== null) {
                        d = parseFloat(d);
                        i = "add"
                    }
                }
                if (c !== null) {
                    if (d === null) {
                        d = -c;
                        i = t;
                        if (i === "multiply") {
                            d += 2
                        }
                    }
                    if (c < d) {
                        var f = c;
                        c = d;
                        d = f;
                        f = t;
                        t = i;
                        i = f
                    }
                    for (var g = 0, j = b.length; g < j; g++) {
                        switch (t) {
                        case "add":
                            o.hiData.push([b[g][0], b[g][1] + c]);
                            break;
                        case "multiply":
                            o.hiData.push([b[g][0], b[g][1] * c]);
                            break
                        }
                        switch (i) {
                        case "add":
                            o.lowData.push([b[g][0], b[g][1] + d]);
                            break;
                        case "multiply":
                            o.lowData.push([b[g][0], b[g][1] * d]);
                            break
                        }
                    }
                } else {
                    o.show = false
                }
            }
        }
        var p = o.hiData;
        var m = o.lowData;
        for (var g = 0, j = p.length; g < j; g++) {
            if ((p[g][1] != null && p[g][1] > o._max) || o._max == null) {
                o._max = p[g][1]
            }
        }
        for (var g = 0, j = m.length; g < j; g++) {
            if ((m[g][1] != null && m[g][1] < o._min) || o._min == null) {
                o._min = m[g][1]
            }
        }
        if (o.fillColor === null) {
            var e = au.jqplot.getColorComponents(o.color);
            e[3] = e[3] * 0.5;
            o.fillColor = "rgba(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + e[3] + ")"
        }
    };

    function av(a, b) {
        return (3.4182054 + b) * Math.pow(a, -0.3534992)
    }
    function aS(a, b) {
        var c = Math.sqrt(Math.pow((b[0] - a[0]), 2) + Math.pow((b[1] - a[1]), 2));
        return 5.7648 * Math.log(c) + 7.4456
    }
    function aG(b) {
        var a = (Math.exp(2 * b) - 1) / (Math.exp(2 * b) + 1);
        return a
    }
    function aw(h) {
        var q = this.renderer.smooth;
        var c = this.canvas.getWidth();
        var v = this._xaxis.series_p2u;
        var m = this._yaxis.series_p2u;
        var a = null;
        var w = null;
        var g = h.length / c;
        var z = [];
        var j = [];
        if (!isNaN(parseFloat(q))) {
            a = parseFloat(q)
        } else {
            a = av(g, 0.5)
        }
        var n = [];
        var y = [];
        for (var b = 0, f = h.length; b < f; b++) {
            n.push(h[b][1]);
            y.push(h[b][0])
        }
        function o(D, C) {
            if (D - C == 0) {
                return Math.pow(10, 10)
            } else {
                return D - C
            }
        }
        var l, r, s, t;
        var B = h.length - 1;
        for (var x = 1, e = h.length; x < e; x++) {
            var A = [];
            var p = [];
            for (var d = 0; d < 2; d++) {
                var b = x - 1 + d;
                if (b == 0 || b == B) {
                    A[d] = Math.pow(10, 10)
                } else {
                    if (n[b + 1] - n[b] == 0 || n[b] - n[b - 1] == 0) {
                        A[d] = 0
                    } else {
                        if (((y[b + 1] - y[b]) / (n[b + 1] - n[b]) + (y[b] - y[b - 1]) / (n[b] - n[b - 1])) == 0) {
                            A[d] = 0
                        } else {
                            if ((n[b + 1] - n[b]) * (n[b] - n[b - 1]) < 0) {
                                A[d] = 0
                            } else {
                                A[d] = 2 / (o(y[b + 1], y[b]) / (n[b + 1] - n[b]) + o(y[b], y[b - 1]) / (n[b] - n[b - 1]))
                            }
                        }
                    }
                }
            }
            if (x == 1) {
                A[0] = 3 / 2 * (n[1] - n[0]) / o(y[1], y[0]) - A[1] / 2
            } else {
                if (x == B) {
                    A[1] = 3 / 2 * (n[B] - n[B - 1]) / o(y[B], y[B - 1]) - A[0] / 2
                }
            }
            p[0] = -2 * (A[1] + 2 * A[0]) / o(y[x], y[x - 1]) + 6 * (n[x] - n[x - 1]) / Math.pow(o(y[x], y[x - 1]), 2);
            p[1] = 2 * (2 * A[1] + A[0]) / o(y[x], y[x - 1]) - 6 * (n[x] - n[x - 1]) / Math.pow(o(y[x], y[x - 1]), 2);
            t = 1 / 6 * (p[1] - p[0]) / o(y[x], y[x - 1]);
            s = 1 / 2 * (y[x] * p[0] - y[x - 1] * p[1]) / o(y[x], y[x - 1]);
            r = (n[x] - n[x - 1] - s * (Math.pow(y[x], 2) - Math.pow(y[x - 1], 2)) - t * (Math.pow(y[x], 3) - Math.pow(y[x - 1], 3))) / o(y[x], y[x - 1]);
            l = n[x - 1] - r * y[x - 1] - s * Math.pow(y[x - 1], 2) - t * Math.pow(y[x - 1], 3);
            var i = (y[x] - y[x - 1]) / a;
            var k, u;
            for (var d = 0, f = a; d < f; d++) {
                k = [];
                u = y[x - 1] + d * i;
                k.push(u);
                k.push(l + r * u + s * Math.pow(u, 2) + t * Math.pow(u, 3));
                z.push(k);
                j.push([v(k[0]), m(k[1])])
            }
        }
        z.push(h[b]);
        j.push([v(h[b][0]), m(h[b][1])]);
        return [z, j]
    }
    function aA(p) {
        var q = this.renderer.smooth;
        var y = this.renderer.tension;
        var x = this.canvas.getWidth();
        var L = this._xaxis.series_p2u;
        var o = this._yaxis.series_p2u;
        var K = null;
        var J = null;
        var z = null;
        var E = null;
        var G = null;
        var m = null;
        var B = null;
        var s = null;
        var I, H, c, d, f, h;
        var u, w, k, l;
        var e, g, F;
        var j = [];
        var v = [];
        var t = p.length / x;
        var A, i, a, M, b;
        var n = [];
        var r = [];
        if (!isNaN(parseFloat(q))) {
            K = parseFloat(q)
        } else {
            K = av(t, 0.5)
        }
        if (!isNaN(parseFloat(y))) {
            y = parseFloat(y)
        }
        for (var C = 0, D = p.length - 1; C < D; C++) {
            if (y === null) {
                m = Math.abs((p[C + 1][1] - p[C][1]) / (p[C + 1][0] - p[C][0]));
                A = 0.3;
                i = 0.6;
                a = (i - A) / 2;
                M = 2.5;
                b = -1.4;
                s = m / M + b;
                E = a * aG(s) - a * aG(b) + A;
                if (C > 0) {
                    B = Math.abs((p[C][1] - p[C - 1][1]) / (p[C][0] - p[C - 1][0]))
                }
                s = B / M + b;
                G = a * aG(s) - a * aG(b) + A;
                z = (E + G) / 2
            } else {
                z = y
            }
            for (I = 0; I < K; I++) {
                H = I / K;
                c = (1 + 2 * H) * Math.pow((1 - H), 2);
                d = H * Math.pow((1 - H), 2);
                f = Math.pow(H, 2) * (3 - 2 * H);
                h = Math.pow(H, 2) * (H - 1);
                if (p[C - 1]) {
                    u = z * (p[C + 1][0] - p[C - 1][0]);
                    w = z * (p[C + 1][1] - p[C - 1][1])
                } else {
                    u = z * (p[C + 1][0] - p[C][0]);
                    w = z * (p[C + 1][1] - p[C][1])
                }
                if (p[C + 2]) {
                    k = z * (p[C + 2][0] - p[C][0]);
                    l = z * (p[C + 2][1] - p[C][1])
                } else {
                    k = z * (p[C + 1][0] - p[C][0]);
                    l = z * (p[C + 1][1] - p[C][1])
                }
                e = c * p[C][0] + f * p[C + 1][0] + d * u + h * k;
                g = c * p[C][1] + f * p[C + 1][1] + d * w + h * l;
                F = [e, g];
                n.push(F);
                r.push([L(e), o(g)])
            }
        }
        n.push(p[D]);
        r.push([L(p[D][0]), o(p[D][1])]);
        return [n, r]
    }
    au.jqplot.LineRenderer.prototype.setGridData = function (b) {
        var f = this._xaxis.series_u2p;
        var j = this._yaxis.series_u2p;
        var e = this._plotData;
        var a = this._prevPlotData;
        this.gridData = [];
        this._prevGridData = [];
        this.renderer._smoothedData = [];
        this.renderer._smoothedPlotData = [];
        this.renderer._hiBandGridData = [];
        this.renderer._lowBandGridData = [];
        this.renderer._hiBandSmoothedData = [];
        this.renderer._lowBandSmoothedData = [];
        var g = this.renderer.bands;
        var i = false;
        for (var d = 0, h = this.data.length; d < h; d++) {
            if (e[d][0] != null && e[d][1] != null) {
                this.gridData.push([f.call(this._xaxis, e[d][0]), j.call(this._yaxis, e[d][1])])
            } else {
                if (e[d][0] == null) {
                    i = true;
                    this.gridData.push([null, j.call(this._yaxis, e[d][1])])
                } else {
                    if (e[d][1] == null) {
                        i = true;
                        this.gridData.push([f.call(this._xaxis, e[d][0]), null])
                    }
                }
            }
            if (a[d] != null && a[d][0] != null && a[d][1] != null) {
                this._prevGridData.push([f.call(this._xaxis, a[d][0]), j.call(this._yaxis, a[d][1])])
            } else {
                if (a[d] != null && a[d][0] == null) {
                    this._prevGridData.push([null, j.call(this._yaxis, a[d][1])])
                } else {
                    if (a[d] != null && a[d][0] != null && a[d][1] == null) {
                        this._prevGridData.push([f.call(this._xaxis, a[d][0]), null])
                    }
                }
            }
        }
        if (i) {
            this.renderer.smooth = false;
            if (this._type === "line") {
                g.show = false
            }
        }
        if (this._type === "line" && g.show) {
            for (var d = 0, h = g.hiData.length; d < h; d++) {
                this.renderer._hiBandGridData.push([f.call(this._xaxis, g.hiData[d][0]), j.call(this._yaxis, g.hiData[d][1])])
            }
            for (var d = 0, h = g.lowData.length; d < h; d++) {
                this.renderer._lowBandGridData.push([f.call(this._xaxis, g.lowData[d][0]), j.call(this._yaxis, g.lowData[d][1])])
            }
        }
        if (this._type === "line" && this.renderer.smooth && this.gridData.length > 2) {
            var c;
            if (this.renderer.constrainSmoothing) {
                c = aw.call(this, this.gridData);
                this.renderer._smoothedData = c[0];
                this.renderer._smoothedPlotData = c[1];
                if (g.show) {
                    c = aw.call(this, this.renderer._hiBandGridData);
                    this.renderer._hiBandSmoothedData = c[0];
                    c = aw.call(this, this.renderer._lowBandGridData);
                    this.renderer._lowBandSmoothedData = c[0]
                }
                c = null
            } else {
                c = aA.call(this, this.gridData);
                this.renderer._smoothedData = c[0];
                this.renderer._smoothedPlotData = c[1];
                if (g.show) {
                    c = aA.call(this, this.renderer._hiBandGridData);
                    this.renderer._hiBandSmoothedData = c[0];
                    c = aA.call(this, this.renderer._lowBandGridData);
                    this.renderer._lowBandSmoothedData = c[0]
                }
                c = null
            }
        }
    };
    au.jqplot.LineRenderer.prototype.makeGridData = function (d, b) {
        var f = this._xaxis.series_u2p;
        var k = this._yaxis.series_u2p;
        var a = [];
        var i = [];
        this.renderer._smoothedData = [];
        this.renderer._smoothedPlotData = [];
        this.renderer._hiBandGridData = [];
        this.renderer._lowBandGridData = [];
        this.renderer._hiBandSmoothedData = [];
        this.renderer._lowBandSmoothedData = [];
        var g = this.renderer.bands;
        var j = false;
        for (var e = 0; e < d.length; e++) {
            if (d[e][0] != null && d[e][1] != null) {
                a.push([f.call(this._xaxis, d[e][0]), k.call(this._yaxis, d[e][1])])
            } else {
                if (d[e][0] == null) {
                    j = true;
                    a.push([null, k.call(this._yaxis, d[e][1])])
                } else {
                    if (d[e][1] == null) {
                        j = true;
                        a.push([f.call(this._xaxis, d[e][0]), null])
                    }
                }
            }
        }
        if (j) {
            this.renderer.smooth = false;
            if (this._type === "line") {
                g.show = false
            }
        }
        if (this._type === "line" && g.show) {
            for (var e = 0, h = g.hiData.length; e < h; e++) {
                this.renderer._hiBandGridData.push([f.call(this._xaxis, g.hiData[e][0]), k.call(this._yaxis, g.hiData[e][1])])
            }
            for (var e = 0, h = g.lowData.length; e < h; e++) {
                this.renderer._lowBandGridData.push([f.call(this._xaxis, g.lowData[e][0]), k.call(this._yaxis, g.lowData[e][1])])
            }
        }
        if (this._type === "line" && this.renderer.smooth && a.length > 2) {
            var c;
            if (this.renderer.constrainSmoothing) {
                c = aw.call(this, a);
                this.renderer._smoothedData = c[0];
                this.renderer._smoothedPlotData = c[1];
                if (g.show) {
                    c = aw.call(this, this.renderer._hiBandGridData);
                    this.renderer._hiBandSmoothedData = c[0];
                    c = aw.call(this, this.renderer._lowBandGridData);
                    this.renderer._lowBandSmoothedData = c[0]
                }
                c = null
            } else {
                c = aA.call(this, a);
                this.renderer._smoothedData = c[0];
                this.renderer._smoothedPlotData = c[1];
                if (g.show) {
                    c = aA.call(this, this.renderer._hiBandGridData);
                    this.renderer._hiBandSmoothedData = c[0];
                    c = aA.call(this, this.renderer._lowBandGridData);
                    this.renderer._lowBandSmoothedData = c[0]
                }
                c = null
            }
        }
        return a
    };
    au.jqplot.LineRenderer.prototype.draw = function (n, k, C, e) {
        var d;
        var u = au.extend(true, {}, C);
        var A = (u.shadow != aL) ? u.shadow : this.shadow;
        var j = (u.showLine != aL) ? u.showLine : this.showLine;
        var g = (u.fill != aL) ? u.fill : this.fill;
        var D = (u.fillAndStroke != aL) ? u.fillAndStroke : this.fillAndStroke;
        var t, l, q, b;
        n.save();
        if (k.length) {
            if (j) {
                if (g) {
                    if (this.fillToZero) {
                        var a = this.negativeColor;
                        if (!this.useNegativeColors) {
                            a = u.fillStyle
                        }
                        var w = false;
                        var v = u.fillStyle;
                        if (D) {
                            var m = k.slice(0)
                        }
                        if (this.index == 0 || !this._stack) {
                            var p = [];
                            var f = (this.renderer.smooth) ? this.renderer._smoothedPlotData : this._plotData;
                            this._areaPoints = [];
                            var o = this._yaxis.series_u2p(this.fillToValue);
                            var B = this._xaxis.series_u2p(this.fillToValue);
                            u.closePath = true;
                            if (this.fillAxis == "y") {
                                p.push([k[0][0], o]);
                                this._areaPoints.push([k[0][0], o]);
                                for (var d = 0; d < k.length - 1; d++) {
                                    p.push(k[d]);
                                    this._areaPoints.push(k[d]);
                                    if (f[d][1] * f[d + 1][1] < 0) {
                                        if (f[d][1] < 0) {
                                            w = true;
                                            u.fillStyle = a
                                        } else {
                                            w = false;
                                            u.fillStyle = v
                                        }
                                        var x = k[d][0] + (k[d + 1][0] - k[d][0]) * (o - k[d][1]) / (k[d + 1][1] - k[d][1]);
                                        p.push([x, o]);
                                        this._areaPoints.push([x, o]);
                                        if (A) {
                                            this.renderer.shadowRenderer.draw(n, p, u)
                                        }
                                        this.renderer.shapeRenderer.draw(n, p, u);
                                        p = [
                                            [x, o]
                                        ]
                                    }
                                }
                                if (f[k.length - 1][1] < 0) {
                                    w = true;
                                    u.fillStyle = a
                                } else {
                                    w = false;
                                    u.fillStyle = v
                                }
                                p.push(k[k.length - 1]);
                                this._areaPoints.push(k[k.length - 1]);
                                p.push([k[k.length - 1][0], o]);
                                this._areaPoints.push([k[k.length - 1][0], o])
                            }
                            if (A) {
                                this.renderer.shadowRenderer.draw(n, p, u)
                            }
                            this.renderer.shapeRenderer.draw(n, p, u)
                        } else {
                            var r = this._prevGridData;
                            for (var d = r.length; d > 0; d--) {
                                k.push(r[d - 1])
                            }
                            if (A) {
                                this.renderer.shadowRenderer.draw(n, k, u)
                            }
                            this._areaPoints = k;
                            this.renderer.shapeRenderer.draw(n, k, u)
                        }
                    } else {
                        if (D) {
                            var m = k.slice(0)
                        }
                        if (this.index == 0 || !this._stack) {
                            var z = n.canvas.height;
                            k.unshift([k[0][0], z]);
                            var c = k.length;
                            k.push([k[c - 1][0], z])
                        } else {
                            var r = this._prevGridData;
                            for (var d = r.length; d > 0; d--) {
                                k.push(r[d - 1])
                            }
                        }
                        this._areaPoints = k;
                        if (A) {
                            this.renderer.shadowRenderer.draw(n, k, u)
                        }
                        this.renderer.shapeRenderer.draw(n, k, u)
                    }
                    if (D) {
                        var i = au.extend(true, {}, u, {
                            fill: false,
                            closePath: false
                        });
                        this.renderer.shapeRenderer.draw(n, m, i);
                        if (this.markerRenderer.show) {
                            if (this.renderer.smooth) {
                                m = this.gridData
                            }
                            for (d = 0; d < m.length; d++) {
                                this.markerRenderer.draw(m[d][0], m[d][1], n, u.markerOptions)
                            }
                        }
                    }
                } else {
                    if (this.renderer.bands.show) {
                        var y;
                        var h = au.extend(true, {}, u);
                        if (this.renderer.bands.showLines) {
                            y = (this.renderer.smooth) ? this.renderer._hiBandSmoothedData : this.renderer._hiBandGridData;
                            this.renderer.shapeRenderer.draw(n, y, u);
                            y = (this.renderer.smooth) ? this.renderer._lowBandSmoothedData : this.renderer._lowBandGridData;
                            this.renderer.shapeRenderer.draw(n, y, h)
                        }
                        if (this.renderer.bands.fill) {
                            if (this.renderer.smooth) {
                                y = this.renderer._hiBandSmoothedData.concat(this.renderer._lowBandSmoothedData.reverse())
                            } else {
                                y = this.renderer._hiBandGridData.concat(this.renderer._lowBandGridData.reverse())
                            }
                            this._areaPoints = y;
                            h.closePath = true;
                            h.fill = true;
                            h.fillStyle = this.renderer.bands.fillColor;
                            this.renderer.shapeRenderer.draw(n, y, h)
                        }
                    }
                    if (A) {
                        this.renderer.shadowRenderer.draw(n, k, u)
                    }
                    this.renderer.shapeRenderer.draw(n, k, u)
                }
            }
            var t = q = l = b = null;
            for (d = 0; d < this._areaPoints.length; d++) {
                var s = this._areaPoints[d];
                if (t > s[0] || t == null) {
                    t = s[0]
                }
                if (b < s[1] || b == null) {
                    b = s[1]
                }
                if (q < s[0] || q == null) {
                    q = s[0]
                }
                if (l > s[1] || l == null) {
                    l = s[1]
                }
            }
            if (this.type === "line" && this.renderer.bands.show) {
                b = this._yaxis.series_u2p(this.renderer.bands._min);
                l = this._yaxis.series_u2p(this.renderer.bands._max)
            }
            this._boundingBox = [
                [t, b],
                [q, l]
            ];
            if (this.markerRenderer.show && !g) {
                if (this.renderer.smooth) {
                    k = this.gridData
                }
                for (d = 0; d < k.length; d++) {
                    if (k[d][0] != null && k[d][1] != null) {
                        this.markerRenderer.draw(k[d][0], k[d][1], n, u.markerOptions)
                    }
                }
            }
        }
        n.restore()
    };
    au.jqplot.LineRenderer.prototype.drawShadow = function (c, a, b) {};

    function aH(a, b, d) {
        for (var c = 0; c < this.series.length; c++) {
            if (this.series[c].renderer.constructor == au.jqplot.LineRenderer) {
                if (this.series[c].highlightMouseOver) {
                    this.series[c].highlightMouseDown = false
                }
            }
        }
    }
    function ab() {
        if (this.plugins.lineRenderer && this.plugins.lineRenderer.highlightCanvas) {
            this.plugins.lineRenderer.highlightCanvas.resetCanvas();
            this.plugins.lineRenderer.highlightCanvas = null
        }
        this.plugins.lineRenderer.highlightedSeriesIndex = null;
        this.plugins.lineRenderer.highlightCanvas = new au.jqplot.GenericCanvas();
        this.eventCanvas._elem.before(this.plugins.lineRenderer.highlightCanvas.createElement(this._gridPadding, "jqplot-lineRenderer-highlight-canvas", this._plotDimensions, this));
        this.plugins.lineRenderer.highlightCanvas.setContext();
        this.eventCanvas._elem.bind("mouseleave", {
            plot: this
        }, function (a) {
            af(a.data.plot)
        })
    }
    function ad(a, b, d, e) {
        var f = a.series[b];
        var g = a.plugins.lineRenderer.highlightCanvas;
        g._ctx.clearRect(0, 0, g._ctx.canvas.width, g._ctx.canvas.height);
        f._highlightedPoint = d;
        a.plugins.lineRenderer.highlightedSeriesIndex = b;
        var c = {
            fillStyle: f.highlightColor
        };
        if (f.type === "line" && f.renderer.bands.show) {
            c.fill = true;
            c.closePath = true
        }
        f.renderer.shapeRenderer.draw(g._ctx, e, c);
        g = null
    }
    function af(a) {
        var c = a.plugins.lineRenderer.highlightCanvas;
        c._ctx.clearRect(0, 0, c._ctx.canvas.width, c._ctx.canvas.height);
        for (var b = 0; b < a.series.length; b++) {
            a.series[b]._highlightedPoint = null
        }
        a.plugins.lineRenderer.highlightedSeriesIndex = null;
        a.target.trigger("jqplotDataUnhighlight");
        c = null
    }
    function aW(d, e, a, b, c) {
        if (b) {
            var f = [b.seriesIndex, b.pointIndex, b.data];
            var g = jQuery.Event("jqplotDataMouseOver");
            g.pageX = d.pageX;
            g.pageY = d.pageY;
            c.target.trigger(g, f);
            if (c.series[f[0]].highlightMouseOver && !(f[0] == c.plugins.lineRenderer.highlightedSeriesIndex)) {
                var h = jQuery.Event("jqplotDataHighlight");
                h.pageX = d.pageX;
                h.pageY = d.pageY;
                c.target.trigger(h, f);
                ad(c, b.seriesIndex, b.pointIndex, b.points)
            }
        } else {
            if (b == null) {
                af(c)
            }
        }
    }
    function aZ(d, e, a, b, c) {
        if (b) {
            var f = [b.seriesIndex, b.pointIndex, b.data];
            if (c.series[f[0]].highlightMouseDown && !(f[0] == c.plugins.lineRenderer.highlightedSeriesIndex)) {
                var g = jQuery.Event("jqplotDataHighlight");
                g.pageX = d.pageX;
                g.pageY = d.pageY;
                c.target.trigger(g, f);
                ad(c, b.seriesIndex, b.pointIndex, b.points)
            }
        } else {
            if (b == null) {
                af(c)
            }
        }
    }
    function ac(d, e, a, b, c) {
        var f = c.plugins.lineRenderer.highlightedSeriesIndex;
        if (f != null && c.series[f].highlightMouseDown) {
            af(c)
        }
    }
    function aX(d, e, a, b, c) {
        if (b) {
            var f = [b.seriesIndex, b.pointIndex, b.data];
            var g = jQuery.Event("jqplotDataClick");
            g.pageX = d.pageX;
            g.pageY = d.pageY;
            c.target.trigger(g, f)
        }
    }
    function aN(d, e, a, b, c) {
        if (b) {
            var f = [b.seriesIndex, b.pointIndex, b.data];
            var h = c.plugins.lineRenderer.highlightedSeriesIndex;
            if (h != null && c.series[h].highlightMouseDown) {
                af(c)
            }
            var g = jQuery.Event("jqplotDataRightClick");
            g.pageX = d.pageX;
            g.pageY = d.pageY;
            c.target.trigger(g, f)
        }
    }
    au.jqplot.LinearAxisRenderer = function () {};
    au.jqplot.LinearAxisRenderer.prototype.init = function (a) {
        this.breakPoints = null;
        this.breakTickLabel = "&asymp;";
        this.drawBaseline = true;
        this.baselineWidth = null;
        this.baselineColor = null;
        this.forceTickAt0 = false;
        this.forceTickAt100 = false;
        this.tickInset = 0;
        this.minorTicks = 0;
        this.alignTicks = false;
        this._autoFormatString = "";
        this._overrideFormatString = false;
        this._scalefact = 1;
        au.extend(true, this, a);
        if (this.breakPoints) {
            if (!au.isArray(this.breakPoints)) {
                this.breakPoints = null
            } else {
                if (this.breakPoints.length < 2 || this.breakPoints[1] <= this.breakPoints[0]) {
                    this.breakPoints = null
                }
            }
        }
        if (this.numberTicks != null && this.numberTicks < 2) {
            this.numberTicks = 2
        }
        this.resetDataBounds()
    };
    au.jqplot.LinearAxisRenderer.prototype.draw = function (h, a) {
        if (this.show) {
            this.renderer.createTicks.call(this, a);
            var b = 0;
            var g;
            if (this._elem) {
                this._elem.emptyForce();
                this._elem = null
            }
            this._elem = au(document.createElement("div"));
            this._elem.addClass("jqplot-axis jqplot-" + this.name);
            this._elem.css("position", "absolute");
            if (this.name == "xaxis" || this.name == "x2axis") {
                this._elem.width(this._plotDimensions.width)
            } else {
                this._elem.height(this._plotDimensions.height)
            }
            this.labelOptions.axis = this.name;
            this._label = new this.labelRenderer(this.labelOptions);
            if (this._label.show) {
                var c = this._label.draw(h, a);
                c.appendTo(this._elem);
                c = null
            }
            var d = this._ticks;
            var e;
            for (var f = 0; f < d.length; f++) {
                e = d[f];
                if (e.show && e.showLabel && (!e.isMinorTick || this.showMinorTicks)) {
                    this._elem.append(e.draw(h, a))
                }
            }
            e = null;
            d = null
        }
        return this._elem
    };
    au.jqplot.LinearAxisRenderer.prototype.reset = function () {
        this.min = this._options.min;
        this.max = this._options.max;
        this.tickInterval = this._options.tickInterval;
        this.numberTicks = this._options.numberTicks;
        this._autoFormatString = "";
        if (this._overrideFormatString && this.tickOptions && this.tickOptions.formatString) {
            this.tickOptions.formatString = ""
        }
    };
    au.jqplot.LinearAxisRenderer.prototype.set = function () {
        var a = 0;
        var f;
        var g = 0;
        var b = 0;
        var h = (this._label == null) ? false : this._label.show;
        if (this.show) {
            var c = this._ticks;
            var d;
            for (var e = 0; e < c.length; e++) {
                d = c[e];
                if (!d._breakTick && d.show && d.showLabel && (!d.isMinorTick || this.showMinorTicks)) {
                    if (this.name == "xaxis" || this.name == "x2axis") {
                        f = d._elem.outerHeight(true)
                    } else {
                        f = d._elem.outerWidth(true)
                    }
                    if (f > a) {
                        a = f
                    }
                }
            }
            d = null;
            c = null;
            if (h) {
                g = this._label._elem.outerWidth(true);
                b = this._label._elem.outerHeight(true)
            }
            if (this.name == "xaxis") {
                a = a + b;
                this._elem.css({
                    height: a + "px",
                    left: "0px",
                    bottom: "0px"
                })
            } else {
                if (this.name == "x2axis") {
                    a = a + b;
                    this._elem.css({
                        height: a + "px",
                        left: "0px",
                        top: "0px"
                    })
                } else {
                    if (this.name == "yaxis") {
                        a = a + g;
                        this._elem.css({
                            width: a + "px",
                            left: "0px",
                            top: "0px"
                        });
                        if (h && this._label.constructor == au.jqplot.AxisLabelRenderer) {
                            this._label._elem.css("width", g + "px")
                        }
                    } else {
                        a = a + g;
                        this._elem.css({
                            width: a + "px",
                            right: "0px",
                            top: "0px"
                        });
                        if (h && this._label.constructor == au.jqplot.AxisLabelRenderer) {
                            this._label._elem.css("width", g + "px")
                        }
                    }
                }
            }
        }
    };
    au.jqplot.LinearAxisRenderer.prototype.createTicks = function (v) {
        var L = this._ticks;
        var U = this.ticks;
        var g = this.name;
        var e = this._dataBounds;
        var x = (this.name.charAt(0) === "x") ? this._plotDimensions.width : this._plotDimensions.height;
        var r;
        var z, W;
        var p, q;
        var B, E;
        var X = this.min;
        var A = this.max;
        var I = this.numberTicks;
        var Y = this.tickInterval;
        var s = 30;
        this._scalefact = (Math.max(x, s + 1) - s) / 300;
        if (U.length) {
            for (E = 0; E < U.length; E++) {
                var Q = U[E];
                var K = new this.tickRenderer(this.tickOptions);
                if (au.isArray(Q)) {
                    K.value = Q[0];
                    if (this.breakPoints) {
                        if (Q[0] == this.breakPoints[0]) {
                            K.label = this.breakTickLabel;
                            K._breakTick = true;
                            K.showGridline = false;
                            K.showMark = false
                        } else {
                            if (Q[0] > this.breakPoints[0] && Q[0] <= this.breakPoints[1]) {
                                K.show = false;
                                K.showGridline = false;
                                K.label = Q[1]
                            } else {
                                K.label = Q[1]
                            }
                        }
                    } else {
                        K.label = Q[1]
                    }
                    K.setTick(Q[0], this.name);
                    this._ticks.push(K)
                } else {
                    if (au.isPlainObject(Q)) {
                        au.extend(true, K, Q);
                        K.axis = this.name;
                        this._ticks.push(K)
                    } else {
                        K.value = Q;
                        if (this.breakPoints) {
                            if (Q == this.breakPoints[0]) {
                                K.label = this.breakTickLabel;
                                K._breakTick = true;
                                K.showGridline = false;
                                K.showMark = false
                            } else {
                                if (Q > this.breakPoints[0] && Q <= this.breakPoints[1]) {
                                    K.show = false;
                                    K.showGridline = false
                                }
                            }
                        }
                        K.setTick(Q, this.name);
                        this._ticks.push(K)
                    }
                }
            }
            this.numberTicks = U.length;
            this.min = this._ticks[0].value;
            this.max = this._ticks[this.numberTicks - 1].value;
            this.tickInterval = (this.max - this.min) / (this.numberTicks - 1)
        } else {
            if (g == "xaxis" || g == "x2axis") {
                x = this._plotDimensions.width
            } else {
                x = this._plotDimensions.height
            }
            var i = this.numberTicks;
            if (this.alignTicks) {
                if (this.name === "x2axis" && v.axes.xaxis.show) {
                    i = v.axes.xaxis.numberTicks
                } else {
                    if (this.name.charAt(0) === "y" && this.name !== "yaxis" && this.name !== "yMidAxis" && v.axes.yaxis.show) {
                        i = v.axes.yaxis.numberTicks
                    }
                }
            }
            z = ((this.min != null) ? this.min : e.min);
            W = ((this.max != null) ? this.max : e.max);
            var k = W - z;
            var M, h;
            var m;
            if (this.tickOptions == null || !this.tickOptions.formatString) {
                this._overrideFormatString = true
            }
            if (this.min == null && this.max == null && this.tickInterval == null && !this.autoscale) {
                if (this.forceTickAt0) {
                    if (z > 0) {
                        z = 0
                    }
                    if (W < 0) {
                        W = 0
                    }
                }
                if (this.forceTickAt100) {
                    if (z > 100) {
                        z = 100
                    }
                    if (W < 100) {
                        W = 100
                    }
                }
                var P = au.jqplot.LinearTickGenerator(z, W, this._scalefact, i);
                var j = z + k * (this.padMin - 1);
                var O = W - k * (this.padMax - 1);
                if (z < j || W > O) {
                    j = z - k * (this.padMin - 1);
                    O = W + k * (this.padMax - 1);
                    P = au.jqplot.LinearTickGenerator(j, O, this._scalefact, i)
                }
                this.min = P[0];
                this.max = P[1];
                this.numberTicks = P[2];
                this._autoFormatString = P[3];
                this.tickInterval = P[4]
            } else {
                if (z == W) {
                    var w = 0.05;
                    if (z > 0) {
                        w = Math.max(Math.log(z) / Math.LN10, 0.05)
                    }
                    z -= w;
                    W += w
                }
                if (this.autoscale && this.min == null && this.max == null) {
                    var u, t, n;
                    var d = false;
                    var R = false;
                    var f = {
                        min: null,
                        max: null,
                        average: null,
                        stddev: null
                    };
                    for (var E = 0; E < this._series.length; E++) {
                        var J = this._series[E];
                        var c = (J.fillAxis == "x") ? J._xaxis.name : J._yaxis.name;
                        if (this.name == c) {
                            var N = J._plotValues[J.fillAxis];
                            var a = N[0];
                            var D = N[0];
                            for (var F = 1; F < N.length; F++) {
                                if (N[F] < a) {
                                    a = N[F]
                                } else {
                                    if (N[F] > D) {
                                        D = N[F]
                                    }
                                }
                            }
                            var l = (D - a) / D;
                            if (J.renderer.constructor == au.jqplot.BarRenderer) {
                                if (a >= 0 && (J.fillToZero || l > 0.1)) {
                                    d = true
                                } else {
                                    d = false;
                                    if (J.fill && J.fillToZero && a < 0 && D > 0) {
                                        R = true
                                    } else {
                                        R = false
                                    }
                                }
                            } else {
                                if (J.fill) {
                                    if (a >= 0 && (J.fillToZero || l > 0.1)) {
                                        d = true
                                    } else {
                                        if (a < 0 && D > 0 && J.fillToZero) {
                                            d = false;
                                            R = true
                                        } else {
                                            d = false;
                                            R = false
                                        }
                                    }
                                } else {
                                    if (a < 0) {
                                        d = false
                                    }
                                }
                            }
                        }
                    }
                    if (d) {
                        this.numberTicks = 2 + Math.ceil((x - (this.tickSpacing - 1)) / this.tickSpacing);
                        this.min = 0;
                        X = 0;
                        t = W / (this.numberTicks - 1);
                        m = Math.pow(10, Math.abs(Math.floor(Math.log(t) / Math.LN10)));
                        if (t / m == parseInt(t / m, 10)) {
                            t += m
                        }
                        this.tickInterval = Math.ceil(t / m) * m;
                        this.max = this.tickInterval * (this.numberTicks - 1)
                    } else {
                        if (R) {
                            this.numberTicks = 2 + Math.ceil((x - (this.tickSpacing - 1)) / this.tickSpacing);
                            var V = Math.ceil(Math.abs(z) / k * (this.numberTicks - 1));
                            var Z = this.numberTicks - 1 - V;
                            t = Math.max(Math.abs(z / V), Math.abs(W / Z));
                            m = Math.pow(10, Math.abs(Math.floor(Math.log(t) / Math.LN10)));
                            this.tickInterval = Math.ceil(t / m) * m;
                            this.max = this.tickInterval * Z;
                            this.min = -this.tickInterval * V
                        } else {
                            if (this.numberTicks == null) {
                                if (this.tickInterval) {
                                    this.numberTicks = 3 + Math.ceil(k / this.tickInterval)
                                } else {
                                    this.numberTicks = 2 + Math.ceil((x - (this.tickSpacing - 1)) / this.tickSpacing)
                                }
                            }
                            if (this.tickInterval == null) {
                                t = k / (this.numberTicks - 1);
                                if (t < 1) {
                                    m = Math.pow(10, Math.abs(Math.floor(Math.log(t) / Math.LN10)))
                                } else {
                                    m = 1
                                }
                                this.tickInterval = Math.ceil(t * m * this.pad) / m
                            } else {
                                m = 1 / this.tickInterval
                            }
                            u = this.tickInterval * (this.numberTicks - 1);
                            n = (u - k) / 2;
                            if (this.min == null) {
                                this.min = Math.floor(m * (z - n)) / m
                            }
                            if (this.max == null) {
                                this.max = this.min + u
                            }
                        }
                    }
                    var b = au.jqplot.getSignificantFigures(this.tickInterval);
                    var S;
                    if (b.digitsLeft >= b.significantDigits) {
                        S = "%d"
                    } else {
                        var m = Math.max(0, 5 - b.digitsLeft);
                        m = Math.min(m, b.digitsRight);
                        S = "%." + m + "f"
                    }
                    this._autoFormatString = S
                } else {
                    M = (this.min != null) ? this.min : z - k * (this.padMin - 1);
                    h = (this.max != null) ? this.max : W + k * (this.padMax - 1);
                    k = h - M;
                    if (this.numberTicks == null) {
                        if (this.tickInterval != null) {
                            this.numberTicks = Math.ceil((h - M) / this.tickInterval) + 1
                        } else {
                            if (x > 100) {
                                this.numberTicks = parseInt(3 + (x - 100) / 75, 10)
                            } else {
                                this.numberTicks = 2
                            }
                        }
                    }
                    if (this.tickInterval == null) {
                        this.tickInterval = k / (this.numberTicks - 1)
                    }
                    if (this.max == null) {
                        h = M + this.tickInterval * (this.numberTicks - 1)
                    }
                    if (this.min == null) {
                        M = h - this.tickInterval * (this.numberTicks - 1)
                    }
                    var b = au.jqplot.getSignificantFigures(this.tickInterval);
                    var S;
                    if (b.digitsLeft >= b.significantDigits) {
                        S = "%d"
                    } else {
                        var m = Math.max(0, 5 - b.digitsLeft);
                        m = Math.min(m, b.digitsRight);
                        S = "%." + m + "f"
                    }
                    this._autoFormatString = S;
                    this.min = M;
                    this.max = h
                }
                if (this.renderer.constructor == au.jqplot.LinearAxisRenderer && this._autoFormatString == "") {
                    k = this.max - this.min;
                    var y = new this.tickRenderer(this.tickOptions);
                    var T = y.formatString || au.jqplot.config.defaultTickFormatString;
                    var T = T.match(au.jqplot.sprintf.regex)[0];
                    var C = 0;
                    if (T) {
                        if (T.search(/[fFeEgGpP]/) > -1) {
                            var G = T.match(/\%\.(\d{0,})?[eEfFgGpP]/);
                            if (G) {
                                C = parseInt(G[1], 10)
                            } else {
                                C = 6
                            }
                        } else {
                            if (T.search(/[di]/) > -1) {
                                C = 0
                            }
                        }
                        var o = Math.pow(10, -C);
                        if (this.tickInterval < o) {
                            if (I == null && Y == null) {
                                this.tickInterval = o;
                                if (A == null && X == null) {
                                    this.min = Math.floor(this._dataBounds.min / o) * o;
                                    if (this.min == this._dataBounds.min) {
                                        this.min = this._dataBounds.min - this.tickInterval
                                    }
                                    this.max = Math.ceil(this._dataBounds.max / o) * o;
                                    if (this.max == this._dataBounds.max) {
                                        this.max = this._dataBounds.max + this.tickInterval
                                    }
                                    var H = (this.max - this.min) / this.tickInterval;
                                    H = H.toFixed(11);
                                    H = Math.ceil(H);
                                    this.numberTicks = H + 1
                                } else {
                                    if (A == null) {
                                        var H = (this._dataBounds.max - this.min) / this.tickInterval;
                                        H = H.toFixed(11);
                                        this.numberTicks = Math.ceil(H) + 2;
                                        this.max = this.min + this.tickInterval * (this.numberTicks - 1)
                                    } else {
                                        if (X == null) {
                                            var H = (this.max - this._dataBounds.min) / this.tickInterval;
                                            H = H.toFixed(11);
                                            this.numberTicks = Math.ceil(H) + 2;
                                            this.min = this.max - this.tickInterval * (this.numberTicks - 1)
                                        } else {
                                            this.numberTicks = Math.ceil((A - X) / this.tickInterval) + 1;
                                            this.min = Math.floor(X * Math.pow(10, C)) / Math.pow(10, C);
                                            this.max = Math.ceil(A * Math.pow(10, C)) / Math.pow(10, C);
                                            this.numberTicks = Math.ceil((this.max - this.min) / this.tickInterval) + 1
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (this._overrideFormatString && this._autoFormatString != "") {
                this.tickOptions = this.tickOptions || {};
                this.tickOptions.formatString = this._autoFormatString
            }
            var K, aa;
            for (var E = 0; E < this.numberTicks; E++) {
                B = this.min + E * this.tickInterval;
                K = new this.tickRenderer(this.tickOptions);
                K.setTick(B, this.name);
                this._ticks.push(K);
                if (E < this.numberTicks - 1) {
                    for (var F = 0; F < this.minorTicks; F++) {
                        B += this.tickInterval / (this.minorTicks + 1);
                        aa = au.extend(true, {}, this.tickOptions, {
                            name: this.name,
                            value: B,
                            label: "",
                            isMinorTick: true
                        });
                        K = new this.tickRenderer(aa);
                        this._ticks.push(K)
                    }
                }
                K = null
            }
        }
        if (this.tickInset) {
            this.min = this.min - this.tickInset * this.tickInterval;
            this.max = this.max + this.tickInset * this.tickInterval
        }
        L = null
    };
    au.jqplot.LinearAxisRenderer.prototype.resetTickValues = function (a) {
        if (au.isArray(a) && a.length == this._ticks.length) {
            var b;
            for (var c = 0; c < a.length; c++) {
                b = this._ticks[c];
                b.value = a[c];
                b.label = b.formatter(b.formatString, a[c]);
                b.label = b.prefix + b.label;
                b._elem.html(b.label)
            }
            b = null;
            this.min = au.jqplot.arrayMin(a);
            this.max = au.jqplot.arrayMax(a);
            this.pack()
        }
    };
    au.jqplot.LinearAxisRenderer.prototype.pack = function (p, q) {
        p = p || {};
        q = q || this._offsets;
        var b = this._ticks;
        var f = this.max;
        var g = this.min;
        var k = q.max;
        var m = q.min;
        var i = (this._label == null) ? false : this._label.show;
        for (var h in p) {
            this._elem.css(h, p[h])
        }
        this._offsets = q;
        var o = k - m;
        var n = f - g;
        if (this.breakPoints) {
            n = n - this.breakPoints[1] + this.breakPoints[0];
            this.p2u = function (s) {
                return (s - m) * n / o + g
            };
            this.u2p = function (s) {
                if (s > this.breakPoints[0] && s < this.breakPoints[1]) {
                    s = this.breakPoints[0]
                }
                if (s <= this.breakPoints[0]) {
                    return (s - g) * o / n + m
                } else {
                    return (s - this.breakPoints[1] + this.breakPoints[0] - g) * o / n + m
                }
            };
            if (this.name.charAt(0) == "x") {
                this.series_u2p = function (s) {
                    if (s > this.breakPoints[0] && s < this.breakPoints[1]) {
                        s = this.breakPoints[0]
                    }
                    if (s <= this.breakPoints[0]) {
                        return (s - g) * o / n
                    } else {
                        return (s - this.breakPoints[1] + this.breakPoints[0] - g) * o / n
                    }
                };
                this.series_p2u = function (s) {
                    return s * n / o + g
                }
            } else {
                this.series_u2p = function (s) {
                    if (s > this.breakPoints[0] && s < this.breakPoints[1]) {
                        s = this.breakPoints[0]
                    }
                    if (s >= this.breakPoints[1]) {
                        return (s - f) * o / n
                    } else {
                        return (s + this.breakPoints[1] - this.breakPoints[0] - f) * o / n
                    }
                };
                this.series_p2u = function (s) {
                    return s * n / o + f
                }
            }
        } else {
            this.p2u = function (s) {
                return (s - m) * n / o + g
            };
            this.u2p = function (s) {
                return (s - g) * o / n + m
            };
            if (this.name == "xaxis" || this.name == "x2axis") {
                this.series_u2p = function (s) {
                    return (s - g) * o / n
                };
                this.series_p2u = function (s) {
                    return s * n / o + g
                }
            } else {
                this.series_u2p = function (s) {
                    return (s - f) * o / n
                };
                this.series_p2u = function (s) {
                    return s * n / o + f
                }
            }
        }
        if (this.show) {
            if (this.name == "xaxis" || this.name == "x2axis") {
                for (var e = 0; e < b.length; e++) {
                    var j = b[e];
                    if (j.show && j.showLabel) {
                        var r;
                        if (j.constructor == au.jqplot.CanvasAxisTickRenderer && j.angle) {
                            var c = (this.name == "xaxis") ? 1 : -1;
                            switch (j.labelPosition) {
                            case "auto":
                                if (c * j.angle < 0) {
                                    r = -j.getWidth() + j._textRenderer.height * Math.sin(-j._textRenderer.angle) / 2
                                } else {
                                    r = -j._textRenderer.height * Math.sin(j._textRenderer.angle) / 2
                                }
                                break;
                            case "end":
                                r = -j.getWidth() + j._textRenderer.height * Math.sin(-j._textRenderer.angle) / 2;
                                break;
                            case "start":
                                r = -j._textRenderer.height * Math.sin(j._textRenderer.angle) / 2;
                                break;
                            case "middle":
                                r = -j.getWidth() / 2 + j._textRenderer.height * Math.sin(-j._textRenderer.angle) / 2;
                                break;
                            default:
                                r = -j.getWidth() / 2 + j._textRenderer.height * Math.sin(-j._textRenderer.angle) / 2;
                                break
                            }
                        } else {
                            r = -j.getWidth() / 2
                        }
                        var a = this.u2p(j.value) + r + "px";
                        j._elem.css("left", a);
                        j.pack()
                    }
                }
                if (i) {
                    var l = this._label._elem.outerWidth(true);
                    this._label._elem.css("left", m + o / 2 - l / 2 + "px");
                    if (this.name == "xaxis") {
                        this._label._elem.css("bottom", "0px")
                    } else {
                        this._label._elem.css("top", "0px")
                    }
                    this._label.pack()
                }
            } else {
                for (var e = 0; e < b.length; e++) {
                    var j = b[e];
                    if (j.show && j.showLabel) {
                        var r;
                        if (j.constructor == au.jqplot.CanvasAxisTickRenderer && j.angle) {
                            var c = (this.name == "yaxis") ? 1 : -1;
                            switch (j.labelPosition) {
                            case "auto":
                            case "end":
                                if (c * j.angle < 0) {
                                    r = -j._textRenderer.height * Math.cos(-j._textRenderer.angle) / 2
                                } else {
                                    r = -j.getHeight() + j._textRenderer.height * Math.cos(j._textRenderer.angle) / 2
                                }
                                break;
                            case "start":
                                if (j.angle > 0) {
                                    r = -j._textRenderer.height * Math.cos(-j._textRenderer.angle) / 2
                                } else {
                                    r = -j.getHeight() + j._textRenderer.height * Math.cos(j._textRenderer.angle) / 2
                                }
                                break;
                            case "middle":
                                r = -j.getHeight() / 2;
                                break;
                            default:
                                r = -j.getHeight() / 2;
                                break
                            }
                        } else {
                            r = -j.getHeight() / 2
                        }
                        var a = this.u2p(j.value) + r + "px";
                        j._elem.css("top", a);
                        j.pack()
                    }
                }
                if (i) {
                    var d = this._label._elem.outerHeight(true);
                    this._label._elem.css("top", k - o / 2 - d / 2 + "px");
                    if (this.name == "yaxis") {
                        this._label._elem.css("left", "0px")
                    } else {
                        this._label._elem.css("right", "0px")
                    }
                    this._label.pack()
                }
            }
        }
        b = null
    };

    function aV(b) {
        var c;
        b = Math.abs(b);
        if (b >= 10) {
            c = "%d"
        } else {
            if (b > 1) {
                if (b === parseInt(b, 10)) {
                    c = "%d"
                } else {
                    c = "%.1f"
                }
            } else {
                var a = -Math.floor(Math.log(b) / Math.LN10);
                c = "%." + a + "f"
            }
        }
        return c
    }
    var a2 = [0.1, 0.2, 0.3, 0.4, 0.5, 0.8, 1, 2, 3, 4, 5];
    var a1 = function (a) {
            var b = a2.indexOf(a);
            if (b > 0) {
                return a2[b - 1]
            } else {
                return a2[a2.length - 1] / 100
            }
        };
    var aU = function (a) {
            var b = a2.indexOf(a);
            if (b < a2.length - 1) {
                return a2[b + 1]
            } else {
                return a2[0] * 100
            }
        };

    function a0(m, e, f) {
        var h = Math.floor(f / 2);
        var p = Math.ceil(f * 1.5);
        var n = Number.MAX_VALUE;
        var q = (e - m);
        var b;
        var i;
        var g;
        var c;
        var k;
        var a = au.jqplot.getSignificantFigures;
        var j;
        var d;
        for (var l = 0, o = p - h + 1; l < o; l++) {
            j = h + l;
            b = q / (j - 1);
            i = a(b);
            b = Math.abs(f - j) + i.digitsRight;
            if (b < n) {
                n = b;
                g = j;
                d = i.digitsRight
            } else {
                if (b === n) {
                    if (i.digitsRight < d) {
                        g = j;
                        d = i.digitsRight
                    }
                }
            }
        }
        c = Math.max(d, Math.max(a(m).digitsRight, a(e).digitsRight));
        if (c === 0) {
            k = "%d"
        } else {
            k = "%." + c + "f"
        }
        b = q / (g - 1);
        return [m, e, g, k, b]
    }
    function ai(e, b) {
        b = b || 7;
        var c = e / (b - 1);
        var d = Math.pow(10, Math.floor(Math.log(c) / Math.LN10));
        var a = c / d;
        var f;
        if (d < 1) {
            if (a > 5) {
                f = 10 * d
            } else {
                if (a > 2) {
                    f = 5 * d
                } else {
                    if (a > 1) {
                        f = 2 * d
                    } else {
                        f = d
                    }
                }
            }
        } else {
            if (a > 5) {
                f = 10 * d
            } else {
                if (a > 4) {
                    f = 5 * d
                } else {
                    if (a > 3) {
                        f = 4 * d
                    } else {
                        if (a > 2) {
                            f = 3 * d
                        } else {
                            if (a > 1) {
                                f = 2 * d
                            } else {
                                f = d
                            }
                        }
                    }
                }
            }
        }
        return f
    }
    function ao(e, f) {
        f = f || 1;
        var c = Math.floor(Math.log(e) / Math.LN10);
        var a = Math.pow(10, c);
        var b = e / a;
        var d;
        b = b / f;
        if (b <= 0.38) {
            d = 0.1
        } else {
            if (b <= 1.6) {
                d = 0.2
            } else {
                if (b <= 4) {
                    d = 0.5
                } else {
                    if (b <= 8) {
                        d = 1
                    } else {
                        if (b <= 16) {
                            d = 2
                        } else {
                            d = 5
                        }
                    }
                }
            }
        }
        return d * a
    }
    function aJ(e, f) {
        var c = Math.floor(Math.log(e) / Math.LN10);
        var a = Math.pow(10, c);
        var b = e / a;
        var g;
        var d;
        b = b / f;
        if (b <= 0.38) {
            d = 0.1
        } else {
            if (b <= 1.6) {
                d = 0.2
            } else {
                if (b <= 4) {
                    d = 0.5
                } else {
                    if (b <= 8) {
                        d = 1
                    } else {
                        if (b <= 16) {
                            d = 2
                        } else {
                            d = 5
                        }
                    }
                }
            }
        }
        g = d * a;
        return [g, d, a]
    }
    au.jqplot.LinearTickGenerator = function (d, c, g, f) {
        if (d === c) {
            c = (c) ? 0 : 1
        }
        g = g || 1;
        if (c < d) {
            var b = c;
            c = d;
            d = b
        }
        var h = [];
        var a = ao(c - d, g);
        if (f == null) {
            h[0] = Math.floor(d / a) * a;
            h[1] = Math.ceil(c / a) * a;
            h[2] = Math.round((h[1] - h[0]) / a + 1);
            h[3] = aV(a);
            h[4] = a
        } else {
            var e = [];
            e[0] = Math.floor(d / a) * a;
            e[1] = Math.ceil(c / a) * a;
            e[2] = Math.round((e[1] - e[0]) / a + 1);
            e[3] = aV(a);
            e[4] = a;
            if (e[2] === f) {
                h = e
            } else {
                var i = ai(e[1] - e[0], f);
                h[0] = e[0];
                h[2] = f;
                h[4] = i;
                h[3] = aV(i);
                h[1] = h[0] + (h[2] - 1) * h[4]
            }
        }
        return h
    };
    au.jqplot.LinearTickGenerator.bestLinearInterval = ao;
    au.jqplot.LinearTickGenerator.bestInterval = ai;
    au.jqplot.LinearTickGenerator.bestLinearComponents = aJ;
    au.jqplot.LinearTickGenerator.bestConstrainedInterval = a0;
    au.jqplot.MarkerRenderer = function (a) {
        this.show = true;
        this.style = "filledCircle";
        this.lineWidth = 2;
        this.size = 9;
        this.color = "#666666";
        this.shadow = true;
        this.shadowAngle = 45;
        this.shadowOffset = 1;
        this.shadowDepth = 3;
        this.shadowAlpha = "0.07";
        this.shadowRenderer = new au.jqplot.ShadowRenderer();
        this.shapeRenderer = new au.jqplot.ShapeRenderer();
        au.extend(true, this, a)
    };
    au.jqplot.MarkerRenderer.prototype.init = function (c) {
        au.extend(true, this, c);
        var a = {
            angle: this.shadowAngle,
            offset: this.shadowOffset,
            alpha: this.shadowAlpha,
            lineWidth: this.lineWidth,
            depth: this.shadowDepth,
            closePath: true
        };
        if (this.style.indexOf("filled") != -1) {
            a.fill = true
        }
        if (this.style.indexOf("ircle") != -1) {
            a.isarc = true;
            a.closePath = false
        }
        this.shadowRenderer.init(a);
        var b = {
            fill: false,
            isarc: false,
            strokeStyle: this.color,
            fillStyle: this.color,
            lineWidth: this.lineWidth,
            closePath: true
        };
        if (this.style.indexOf("filled") != -1) {
            b.fill = true
        }
        if (this.style.indexOf("ircle") != -1) {
            b.isarc = true;
            b.closePath = false
        }
        this.shapeRenderer.init(b)
    };
    au.jqplot.MarkerRenderer.prototype.drawDiamond = function (g, h, d, e, b) {
        var i = 1.2;
        var a = this.size / 2 / i;
        var c = this.size / 2 * i;
        var f = [
            [g - a, h],
            [g, h + c],
            [g + a, h],
            [g, h - c]
        ];
        if (this.shadow) {
            this.shadowRenderer.draw(d, f)
        }
        this.shapeRenderer.draw(d, f, b)
    };
    au.jqplot.MarkerRenderer.prototype.drawPlus = function (h, i, e, f, b) {
        var j = 1;
        var a = this.size / 2 * j;
        var d = this.size / 2 * j;
        var c = [
            [h, i - d],
            [h, i + d]
        ];
        var g = [
            [h + a, i],
            [h - a, i]
        ];
        var k = au.extend(true, {}, this.options, {
            closePath: false
        });
        if (this.shadow) {
            this.shadowRenderer.draw(e, c, {
                closePath: false
            });
            this.shadowRenderer.draw(e, g, {
                closePath: false
            })
        }
        this.shapeRenderer.draw(e, c, k);
        this.shapeRenderer.draw(e, g, k)
    };
    au.jqplot.MarkerRenderer.prototype.drawX = function (h, i, e, f, b) {
        var j = 1;
        var a = this.size / 2 * j;
        var d = this.size / 2 * j;
        var k = au.extend(true, {}, this.options, {
            closePath: false
        });
        var c = [
            [h - a, i - d],
            [h + a, i + d]
        ];
        var g = [
            [h - a, i + d],
            [h + a, i - d]
        ];
        if (this.shadow) {
            this.shadowRenderer.draw(e, c, {
                closePath: false
            });
            this.shadowRenderer.draw(e, g, {
                closePath: false
            })
        }
        this.shapeRenderer.draw(e, c, k);
        this.shapeRenderer.draw(e, g, k)
    };
    au.jqplot.MarkerRenderer.prototype.drawDash = function (g, h, d, e, b) {
        var i = 1;
        var a = this.size / 2 * i;
        var c = this.size / 2 * i;
        var f = [
            [g - a, h],
            [g + a, h]
        ];
        if (this.shadow) {
            this.shadowRenderer.draw(d, f)
        }
        this.shapeRenderer.draw(d, f, b)
    };
    au.jqplot.MarkerRenderer.prototype.drawLine = function (a, b, f, c, e) {
        var d = [a, b];
        if (this.shadow) {
            this.shadowRenderer.draw(f, d)
        }
        this.shapeRenderer.draw(f, d, e)
    };
    au.jqplot.MarkerRenderer.prototype.drawSquare = function (g, h, d, e, b) {
        var i = 1;
        var a = this.size / 2 / i;
        var c = this.size / 2 * i;
        var f = [
            [g - a, h - c],
            [g - a, h + c],
            [g + a, h + c],
            [g + a, h - c]
        ];
        if (this.shadow) {
            this.shadowRenderer.draw(d, f)
        }
        this.shapeRenderer.draw(d, f, b)
    };
    au.jqplot.MarkerRenderer.prototype.drawCircle = function (g, a, e, b, d) {
        var h = this.size / 2;
        var f = 2 * Math.PI;
        var c = [g, a, h, 0, f, true];
        if (this.shadow) {
            this.shadowRenderer.draw(e, c)
        }
        this.shapeRenderer.draw(e, c, d)
    };
    au.jqplot.MarkerRenderer.prototype.draw = function (d, a, c, b) {
        b = b || {};
        if (b.show == null || b.show != false) {
            if (b.color && !b.fillStyle) {
                b.fillStyle = b.color
            }
            if (b.color && !b.strokeStyle) {
                b.strokeStyle = b.color
            }
            switch (this.style) {
            case "diamond":
                this.drawDiamond(d, a, c, false, b);
                break;
            case "filledDiamond":
                this.drawDiamond(d, a, c, true, b);
                break;
            case "circle":
                this.drawCircle(d, a, c, false, b);
                break;
            case "filledCircle":
                this.drawCircle(d, a, c, true, b);
                break;
            case "square":
                this.drawSquare(d, a, c, false, b);
                break;
            case "filledSquare":
                this.drawSquare(d, a, c, true, b);
                break;
            case "x":
                this.drawX(d, a, c, true, b);
                break;
            case "plus":
                this.drawPlus(d, a, c, true, b);
                break;
            case "dash":
                this.drawDash(d, a, c, true, b);
                break;
            case "line":
                this.drawLine(d, a, c, false, b);
                break;
            default:
                this.drawDiamond(d, a, c, false, b);
                break
            }
        }
    };
    au.jqplot.ShadowRenderer = function (a) {
        this.angle = 45;
        this.offset = 1;
        this.alpha = 0.07;
        this.lineWidth = 1.5;
        this.lineJoin = "miter";
        this.lineCap = "round";
        this.closePath = false;
        this.fill = false;
        this.depth = 3;
        this.strokeStyle = "rgba(0,0,0,0.1)";
        this.isarc = false;
        au.extend(true, this, a)
    };
    au.jqplot.ShadowRenderer.prototype.init = function (a) {
        au.extend(true, this, a)
    };
    au.jqplot.ShadowRenderer.prototype.draw = function (c, e, a) {
        c.save();
        var p = (a != null) ? a : {};
        var d = (p.fill != null) ? p.fill : this.fill;
        var h = (p.fillRect != null) ? p.fillRect : this.fillRect;
        var i = (p.closePath != null) ? p.closePath : this.closePath;
        var l = (p.offset != null) ? p.offset : this.offset;
        var n = (p.alpha != null) ? p.alpha : this.alpha;
        var j = (p.depth != null) ? p.depth : this.depth;
        var b = (p.isarc != null) ? p.isarc : this.isarc;
        var g = (p.linePattern != null) ? p.linePattern : this.linePattern;
        c.lineWidth = (p.lineWidth != null) ? p.lineWidth : this.lineWidth;
        c.lineJoin = (p.lineJoin != null) ? p.lineJoin : this.lineJoin;
        c.lineCap = (p.lineCap != null) ? p.lineCap : this.lineCap;
        c.strokeStyle = p.strokeStyle || this.strokeStyle || "rgba(0,0,0," + n + ")";
        c.fillStyle = p.fillStyle || this.fillStyle || "rgba(0,0,0," + n + ")";
        for (var m = 0; m < j; m++) {
            var f = au.jqplot.LinePattern(c, g);
            c.translate(Math.cos(this.angle * Math.PI / 180) * l, Math.sin(this.angle * Math.PI / 180) * l);
            f.beginPath();
            if (b) {
                c.arc(e[0], e[1], e[2], e[3], e[4], true)
            } else {
                if (h) {
                    if (h) {
                        c.fillRect(e[0], e[1], e[2], e[3])
                    }
                } else {
                    if (e && e.length) {
                        var o = true;
                        for (var k = 0; k < e.length; k++) {
                            if (e[k][0] != null && e[k][1] != null) {
                                if (o) {
                                    f.moveTo(e[k][0], e[k][1]);
                                    o = false
                                } else {
                                    f.lineTo(e[k][0], e[k][1])
                                }
                            } else {
                                o = true
                            }
                        }
                    }
                }
            }
            if (i) {
                f.closePath()
            }
            if (d) {
                c.fill()
            } else {
                c.stroke()
            }
        }
        c.restore()
    };
    au.jqplot.ShapeRenderer = function (a) {
        this.lineWidth = 1.5;
        this.linePattern = "solid";
        this.lineJoin = "miter";
        this.lineCap = "round";
        this.closePath = false;
        this.fill = false;
        this.isarc = false;
        this.fillRect = false;
        this.strokeRect = false;
        this.clearRect = false;
        this.strokeStyle = "#999999";
        this.fillStyle = "#999999";
        au.extend(true, this, a)
    };
    au.jqplot.ShapeRenderer.prototype.init = function (a) {
        au.extend(true, this, a)
    };
    au.jqplot.ShapeRenderer.prototype.draw = function (c, e, a) {
        c.save();
        var n = (a != null) ? a : {};
        var d = (n.fill != null) ? n.fill : this.fill;
        var i = (n.closePath != null) ? n.closePath : this.closePath;
        var h = (n.fillRect != null) ? n.fillRect : this.fillRect;
        var k = (n.strokeRect != null) ? n.strokeRect : this.strokeRect;
        var m = (n.clearRect != null) ? n.clearRect : this.clearRect;
        var b = (n.isarc != null) ? n.isarc : this.isarc;
        var g = (n.linePattern != null) ? n.linePattern : this.linePattern;
        var f = au.jqplot.LinePattern(c, g);
        c.lineWidth = n.lineWidth || this.lineWidth;
        c.lineJoin = n.lineJoin || this.lineJoin;
        c.lineCap = n.lineCap || this.lineCap;
        c.strokeStyle = (n.strokeStyle || n.color) || this.strokeStyle;
        c.fillStyle = n.fillStyle || this.fillStyle;
        c.beginPath();
        if (b) {
            c.arc(e[0], e[1], e[2], e[3], e[4], true);
            if (i) {
                c.closePath()
            }
            if (d) {
                c.fill()
            } else {
                c.stroke()
            }
            c.restore();
            return
        } else {
            if (m) {
                c.clearRect(e[0], e[1], e[2], e[3]);
                c.restore();
                return
            } else {
                if (h || k) {
                    if (h) {
                        c.fillRect(e[0], e[1], e[2], e[3])
                    }
                    if (k) {
                        c.strokeRect(e[0], e[1], e[2], e[3]);
                        c.restore();
                        return
                    }
                } else {
                    if (e && e.length) {
                        var l = true;
                        for (var j = 0; j < e.length; j++) {
                            if (e[j][0] != null && e[j][1] != null) {
                                if (l) {
                                    f.moveTo(e[j][0], e[j][1]);
                                    l = false
                                } else {
                                    f.lineTo(e[j][0], e[j][1])
                                }
                            } else {
                                l = true
                            }
                        }
                        if (i) {
                            f.closePath()
                        }
                        if (d) {
                            c.fill()
                        } else {
                            c.stroke()
                        }
                    }
                }
            }
        }
        c.restore()
    };
    au.jqplot.TableLegendRenderer = function () {};
    au.jqplot.TableLegendRenderer.prototype.init = function (a) {
        au.extend(true, this, a)
    };
    au.jqplot.TableLegendRenderer.prototype.addrow = function (a, g, j, c) {
        var f = (j) ? this.rowSpacing + "px" : "0px";
        var b;
        var h;
        var i;
        var d;
        var e;
        i = document.createElement("tr");
        b = au(i);
        b.addClass("jqplot-table-legend");
        i = null;
        if (c) {
            b.prependTo(this._elem)
        } else {
            b.appendTo(this._elem)
        }
        if (this.showSwatches) {
            h = au(document.createElement("td"));
            h.addClass("jqplot-table-legend jqplot-table-legend-swatch");
            h.css({
                textAlign: "center",
                paddingTop: f
            });
            d = au(document.createElement("div"));
            d.addClass("jqplot-table-legend-swatch-outline");
            e = au(document.createElement("div"));
            e.addClass("jqplot-table-legend-swatch");
            e.css({
                backgroundColor: g,
                borderColor: g
            });
            b.append(h.append(d.append(e)))
        }
        if (this.showLabels) {
            h = au(document.createElement("td"));
            h.addClass("jqplot-table-legend jqplot-table-legend-label");
            h.css("paddingTop", f);
            b.append(h);
            if (this.escapeHtml) {
                h.text(a)
            } else {
                h.html(a)
            }
        }
        h = null;
        d = null;
        e = null;
        b = null;
        i = null
    };
    au.jqplot.TableLegendRenderer.prototype.draw = function () {
        if (this._elem) {
            this._elem.emptyForce();
            this._elem = null
        }
        if (this.show) {
            var f = this._series;
            var j = document.createElement("table");
            this._elem = au(j);
            this._elem.addClass("jqplot-table-legend");
            var a = {
                position: "absolute"
            };
            if (this.background) {
                a.background = this.background
            }
            if (this.border) {
                a.border = this.border
            }
            if (this.fontSize) {
                a.fontSize = this.fontSize
            }
            if (this.fontFamily) {
                a.fontFamily = this.fontFamily
            }
            if (this.textColor) {
                a.textColor = this.textColor
            }
            if (this.marginTop != null) {
                a.marginTop = this.marginTop
            }
            if (this.marginBottom != null) {
                a.marginBottom = this.marginBottom
            }
            if (this.marginLeft != null) {
                a.marginLeft = this.marginLeft
            }
            if (this.marginRight != null) {
                a.marginRight = this.marginRight
            }
            var k = false,
                d = false,
                b;
            for (var e = 0; e < f.length; e++) {
                b = f[e];
                if (b._stack || b.renderer.constructor == au.jqplot.BezierCurveRenderer) {
                    d = true
                }
                if (b.show && b.showLabel) {
                    var g = this.labels[e] || b.label.toString();
                    if (g) {
                        var i = b.color;
                        if (d && e < f.length - 1) {
                            k = true
                        } else {
                            if (d && e == f.length - 1) {
                                k = false
                            }
                        }
                        this.renderer.addrow.call(this, g, i, k, d);
                        k = true
                    }
                    for (var h = 0; h < au.jqplot.addLegendRowHooks.length; h++) {
                        var c = au.jqplot.addLegendRowHooks[h].call(this, b);
                        if (c) {
                            this.renderer.addrow.call(this, c.label, c.color, k);
                            k = true
                        }
                    }
                    g = null
                }
            }
        }
        return this._elem
    };
    au.jqplot.TableLegendRenderer.prototype.pack = function (a) {
        if (this.show) {
            if (this.placement == "insideGrid") {
                switch (this.location) {
                case "nw":
                    var b = a.left;
                    var c = a.top;
                    this._elem.css("left", b);
                    this._elem.css("top", c);
                    break;
                case "n":
                    var b = (a.left + (this._plotDimensions.width - a.right)) / 2 - this.getWidth() / 2;
                    var c = a.top;
                    this._elem.css("left", b);
                    this._elem.css("top", c);
                    break;
                case "ne":
                    var b = a.right;
                    var c = a.top;
                    this._elem.css({
                        right: b,
                        top: c
                    });
                    break;
                case "e":
                    var b = a.right;
                    var c = (a.top + (this._plotDimensions.height - a.bottom)) / 2 - this.getHeight() / 2;
                    this._elem.css({
                        right: b,
                        top: c
                    });
                    break;
                case "se":
                    var b = a.right;
                    var c = a.bottom;
                    this._elem.css({
                        right: b,
                        bottom: c
                    });
                    break;
                case "s":
                    var b = (a.left + (this._plotDimensions.width - a.right)) / 2 - this.getWidth() / 2;
                    var c = a.bottom;
                    this._elem.css({
                        left: b,
                        bottom: c
                    });
                    break;
                case "sw":
                    var b = a.left;
                    var c = a.bottom;
                    this._elem.css({
                        left: b,
                        bottom: c
                    });
                    break;
                case "w":
                    var b = a.left;
                    var c = (a.top + (this._plotDimensions.height - a.bottom)) / 2 - this.getHeight() / 2;
                    this._elem.css({
                        left: b,
                        top: c
                    });
                    break;
                default:
                    var b = a.right;
                    var c = a.bottom;
                    this._elem.css({
                        right: b,
                        bottom: c
                    });
                    break
                }
            } else {
                if (this.placement == "outside") {
                    switch (this.location) {
                    case "nw":
                        var b = this._plotDimensions.width - a.left;
                        var c = a.top;
                        this._elem.css("right", b);
                        this._elem.css("top", c);
                        break;
                    case "n":
                        var b = (a.left + (this._plotDimensions.width - a.right)) / 2 - this.getWidth() / 2;
                        var c = this._plotDimensions.height - a.top;
                        this._elem.css("left", b);
                        this._elem.css("bottom", c);
                        break;
                    case "ne":
                        var b = this._plotDimensions.width - a.right;
                        var c = a.top;
                        this._elem.css({
                            left: b,
                            top: c
                        });
                        break;
                    case "e":
                        var b = this._plotDimensions.width - a.right;
                        var c = (a.top + (this._plotDimensions.height - a.bottom)) / 2 - this.getHeight() / 2;
                        this._elem.css({
                            left: b,
                            top: c
                        });
                        break;
                    case "se":
                        var b = this._plotDimensions.width - a.right;
                        var c = a.bottom;
                        this._elem.css({
                            left: b,
                            bottom: c
                        });
                        break;
                    case "s":
                        var b = (a.left + (this._plotDimensions.width - a.right)) / 2 - this.getWidth() / 2;
                        var c = this._plotDimensions.height - a.bottom;
                        this._elem.css({
                            left: b,
                            top: c
                        });
                        break;
                    case "sw":
                        var b = this._plotDimensions.width - a.left;
                        var c = a.bottom;
                        this._elem.css({
                            right: b,
                            bottom: c
                        });
                        break;
                    case "w":
                        var b = this._plotDimensions.width - a.left;
                        var c = (a.top + (this._plotDimensions.height - a.bottom)) / 2 - this.getHeight() / 2;
                        this._elem.css({
                            right: b,
                            top: c
                        });
                        break;
                    default:
                        var b = a.right;
                        var c = a.bottom;
                        this._elem.css({
                            right: b,
                            bottom: c
                        });
                        break
                    }
                } else {
                    switch (this.location) {
                    case "nw":
                        this._elem.css({
                            left: 0,
                            top: a.top
                        });
                        break;
                    case "n":
                        var b = (a.left + (this._plotDimensions.width - a.right)) / 2 - this.getWidth() / 2;
                        this._elem.css({
                            left: b,
                            top: a.top
                        });
                        break;
                    case "ne":
                        this._elem.css({
                            right: 0,
                            top: a.top
                        });
                        break;
                    case "e":
                        var c = (a.top + (this._plotDimensions.height - a.bottom)) / 2 - this.getHeight() / 2;
                        this._elem.css({
                            right: a.right,
                            top: c
                        });
                        break;
                    case "se":
                        this._elem.css({
                            right: a.right,
                            bottom: a.bottom
                        });
                        break;
                    case "s":
                        var b = (a.left + (this._plotDimensions.width - a.right)) / 2 - this.getWidth() / 2;
                        this._elem.css({
                            left: b,
                            bottom: a.bottom
                        });
                        break;
                    case "sw":
                        this._elem.css({
                            left: a.left,
                            bottom: a.bottom
                        });
                        break;
                    case "w":
                        var c = (a.top + (this._plotDimensions.height - a.bottom)) / 2 - this.getHeight() / 2;
                        this._elem.css({
                            left: a.left,
                            top: c
                        });
                        break;
                    default:
                        this._elem.css({
                            right: a.right,
                            bottom: a.bottom
                        });
                        break
                    }
                }
            }
        }
    };
    au.jqplot.ThemeEngine = function () {
        this.themes = {};
        this.activeTheme = null
    };
    au.jqplot.ThemeEngine.prototype.init = function () {
        var d = new au.jqplot.Theme({
            _name: "Default"
        });
        var a, f, b;
        for (a in d.target) {
            if (a == "textColor") {
                d.target[a] = this.target.css("color")
            } else {
                d.target[a] = this.target.css(a)
            }
        }
        if (this.title.show && this.title._elem) {
            for (a in d.title) {
                if (a == "textColor") {
                    d.title[a] = this.title._elem.css("color")
                } else {
                    d.title[a] = this.title._elem.css(a)
                }
            }
        }
        for (a in d.grid) {
            d.grid[a] = this.grid[a]
        }
        if (d.grid.backgroundColor == null && this.grid.background != null) {
            d.grid.backgroundColor = this.grid.background
        }
        if (this.legend.show && this.legend._elem) {
            for (a in d.legend) {
                if (a == "textColor") {
                    d.legend[a] = this.legend._elem.css("color")
                } else {
                    d.legend[a] = this.legend._elem.css(a)
                }
            }
        }
        var e;
        for (f = 0; f < this.series.length; f++) {
            e = this.series[f];
            if (e.renderer.constructor == au.jqplot.LineRenderer) {
                d.series.push(new aQ())
            } else {
                if (e.renderer.constructor == au.jqplot.BarRenderer) {
                    d.series.push(new al())
                } else {
                    if (e.renderer.constructor == au.jqplot.PieRenderer) {
                        d.series.push(new aY())
                    } else {
                        if (e.renderer.constructor == au.jqplot.DonutRenderer) {
                            d.series.push(new az())
                        } else {
                            if (e.renderer.constructor == au.jqplot.FunnelRenderer) {
                                d.series.push(new ag())
                            } else {
                                if (e.renderer.constructor == au.jqplot.MeterGaugeRenderer) {
                                    d.series.push(new aD())
                                } else {
                                    d.series.push({})
                                }
                            }
                        }
                    }
                }
            }
            for (a in d.series[f]) {
                d.series[f][a] = e[a]
            }
        }
        var g, c;
        for (a in this.axes) {
            c = this.axes[a];
            g = d.axes[a] = new ap();
            g.borderColor = c.borderColor;
            g.borderWidth = c.borderWidth;
            if (c._ticks && c._ticks[0]) {
                for (b in g.ticks) {
                    if (c._ticks[0].hasOwnProperty(b)) {
                        g.ticks[b] = c._ticks[0][b]
                    } else {
                        if (c._ticks[0]._elem) {
                            g.ticks[b] = c._ticks[0]._elem.css(b)
                        }
                    }
                }
            }
            if (c._label && c._label.show) {
                for (b in g.label) {
                    if (c._label[b]) {
                        g.label[b] = c._label[b]
                    } else {
                        if (c._label._elem) {
                            if (b == "textColor") {
                                g.label[b] = c._label._elem.css("color")
                            } else {
                                g.label[b] = c._label._elem.css(b)
                            }
                        }
                    }
                }
            }
        }
        this.themeEngine._add(d);
        this.themeEngine.activeTheme = this.themeEngine.themes[d._name]
    };
    au.jqplot.ThemeEngine.prototype.get = function (a) {
        if (!a) {
            return this.activeTheme
        } else {
            return this.themes[a]
        }
    };

    function aq(a, b) {
        return a - b
    }
    au.jqplot.ThemeEngine.prototype.getThemeNames = function () {
        var b = [];
        for (var a in this.themes) {
            b.push(a)
        }
        return b.sort(aq)
    };
    au.jqplot.ThemeEngine.prototype.getThemes = function () {
        var c = [];
        var d = [];
        for (var a in this.themes) {
            c.push(a)
        }
        c.sort(aq);
        for (var b = 0; b < c.length; b++) {
            d.push(this.themes[c[b]])
        }
        return d
    };
    au.jqplot.ThemeEngine.prototype.activate = function (f, a) {
        var s = false;
        if (!a && this.activeTheme && this.activeTheme._name) {
            a = this.activeTheme._name
        }
        if (!this.themes.hasOwnProperty(a)) {
            throw new Error("No theme of that name")
        } else {
            var n = this.themes[a];
            this.activeTheme = n;
            var b, h = false,
                i = false;
            var r = ["xaxis", "x2axis", "yaxis", "y2axis"];
            for (e = 0; e < r.length; e++) {
                var m = r[e];
                if (n.axesStyles.borderColor != null) {
                    f.axes[m].borderColor = n.axesStyles.borderColor
                }
                if (n.axesStyles.borderWidth != null) {
                    f.axes[m].borderWidth = n.axesStyles.borderWidth
                }
            }
            for (var c in f.axes) {
                var p = f.axes[c];
                if (p.show) {
                    var j = n.axes[c] || {};
                    var l = n.axesStyles;
                    var o = au.jqplot.extend(true, {}, j, l);
                    b = (n.axesStyles.borderColor != null) ? n.axesStyles.borderColor : o.borderColor;
                    if (o.borderColor != null) {
                        p.borderColor = o.borderColor;
                        s = true
                    }
                    b = (n.axesStyles.borderWidth != null) ? n.axesStyles.borderWidth : o.borderWidth;
                    if (o.borderWidth != null) {
                        p.borderWidth = o.borderWidth;
                        s = true
                    }
                    if (p._ticks && p._ticks[0]) {
                        for (var q in o.ticks) {
                            b = o.ticks[q];
                            if (b != null) {
                                p.tickOptions[q] = b;
                                p._ticks = [];
                                s = true
                            }
                        }
                    }
                    if (p._label && p._label.show) {
                        for (var q in o.label) {
                            b = o.label[q];
                            if (b != null) {
                                p.labelOptions[q] = b;
                                s = true
                            }
                        }
                    }
                }
            }
            for (var g in n.grid) {
                if (n.grid[g] != null) {
                    f.grid[g] = n.grid[g]
                }
            }
            if (!s) {
                f.grid.draw()
            }
            if (f.legend.show) {
                for (g in n.legend) {
                    if (n.legend[g] != null) {
                        f.legend[g] = n.legend[g]
                    }
                }
            }
            if (f.title.show) {
                for (g in n.title) {
                    if (n.title[g] != null) {
                        f.title[g] = n.title[g]
                    }
                }
            }
            var e;
            for (e = 0; e < n.series.length; e++) {
                var k = {};
                var d = false;
                for (g in n.series[e]) {
                    b = (n.seriesStyles[g] != null) ? n.seriesStyles[g] : n.series[e][g];
                    if (b != null) {
                        k[g] = b;
                        if (g == "color") {
                            f.series[e].renderer.shapeRenderer.fillStyle = b;
                            f.series[e].renderer.shapeRenderer.strokeStyle = b;
                            f.series[e][g] = b
                        } else {
                            if ((g == "lineWidth") || (g == "linePattern")) {
                                f.series[e].renderer.shapeRenderer[g] = b;
                                f.series[e][g] = b
                            } else {
                                if (g == "markerOptions") {
                                    aj(f.series[e].markerOptions, b);
                                    aj(f.series[e].markerRenderer, b)
                                } else {
                                    f.series[e][g] = b
                                }
                            }
                        }
                        s = true
                    }
                }
            }
            if (s) {
                f.target.empty();
                f.draw()
            }
            for (g in n.target) {
                if (n.target[g] != null) {
                    f.target.css(g, n.target[g])
                }
            }
        }
    };
    au.jqplot.ThemeEngine.prototype._add = function (a, b) {
        if (b) {
            a._name = b
        }
        if (!a._name) {
            a._name = Date.parse(new Date())
        }
        if (!this.themes.hasOwnProperty(a._name)) {
            this.themes[a._name] = a
        } else {
            throw new Error("jqplot.ThemeEngine Error: Theme already in use")
        }
    };
    au.jqplot.ThemeEngine.prototype.remove = function (a) {
        if (a == "Default") {
            return false
        }
        return delete this.themes[a]
    };
    au.jqplot.ThemeEngine.prototype.newTheme = function (c, a) {
        if (typeof (c) == "object") {
            a = a || c;
            c = null
        }
        if (a && a._name) {
            c = a._name
        } else {
            c = c || Date.parse(new Date())
        }
        var b = this.copy(this.themes.Default._name, c);
        au.jqplot.extend(b, a);
        return b
    };

    function aF(a) {
        if (a == null || typeof (a) != "object") {
            return a
        }
        var c = new a.constructor();
        for (var b in a) {
            c[b] = aF(a[b])
        }
        return c
    }
    au.jqplot.clone = aF;

    function aj(a, b) {
        if (b == null || typeof (b) != "object") {
            return
        }
        for (var c in b) {
            if (c == "highlightColors") {
                a[c] = aF(b[c])
            }
            if (b[c] != null && typeof (b[c]) == "object") {
                if (!a.hasOwnProperty(c)) {
                    a[c] = {}
                }
                aj(a[c], b[c])
            } else {
                a[c] = b[c]
            }
        }
    }
    au.jqplot.merge = aj;
    au.jqplot.extend = function () {
        var c = arguments[0] || {},
            e = 1,
            d = arguments.length,
            h = false,
            f;
        if (typeof c === "boolean") {
            h = c;
            c = arguments[1] || {};
            e = 2
        }
        if (typeof c !== "object" && !toString.call(c) === "[object Function]") {
            c = {}
        }
        for (; e < d; e++) {
            if ((f = arguments[e]) != null) {
                for (var g in f) {
                    var b = c[g],
                        a = f[g];
                    if (c === a) {
                        continue
                    }
                    if (h && a && typeof a === "object" && !a.nodeType) {
                        c[g] = au.jqplot.extend(h, b || (a.length != null ? [] : {}), a)
                    } else {
                        if (a !== aL) {
                            c[g] = a
                        }
                    }
                }
            }
        }
        return c
    };
    au.jqplot.ThemeEngine.prototype.rename = function (b, c) {
        if (b == "Default" || c == "Default") {
            throw new Error("jqplot.ThemeEngine Error: Cannot rename from/to Default")
        }
        if (this.themes.hasOwnProperty(c)) {
            throw new Error("jqplot.ThemeEngine Error: New name already in use.")
        } else {
            if (this.themes.hasOwnProperty(b)) {
                var a = this.copy(b, c);
                this.remove(b);
                return a
            }
        }
        throw new Error("jqplot.ThemeEngine Error: Old name or new name invalid")
    };
    au.jqplot.ThemeEngine.prototype.copy = function (e, c, a) {
        if (c == "Default") {
            throw new Error("jqplot.ThemeEngine Error: Cannot copy over Default theme")
        }
        if (!this.themes.hasOwnProperty(e)) {
            var d = "jqplot.ThemeEngine Error: Source name invalid";
            throw new Error(d)
        }
        if (this.themes.hasOwnProperty(c)) {
            var d = "jqplot.ThemeEngine Error: Target name invalid";
            throw new Error(d)
        } else {
            var b = aF(this.themes[e]);
            b._name = c;
            au.jqplot.extend(true, b, a);
            this._add(b);
            return b
        }
    };
    au.jqplot.Theme = function (b, a) {
        if (typeof (b) == "object") {
            a = a || b;
            b = null
        }
        b = b || Date.parse(new Date());
        this._name = b;
        this.target = {
            backgroundColor: null
        };
        this.legend = {
            textColor: null,
            fontFamily: null,
            fontSize: null,
            border: null,
            background: null
        };
        this.title = {
            textColor: null,
            fontFamily: null,
            fontSize: null,
            textAlign: null
        };
        this.seriesStyles = {};
        this.series = [];
        this.grid = {
            drawGridlines: null,
            gridLineColor: null,
            gridLineWidth: null,
            backgroundColor: null,
            borderColor: null,
            borderWidth: null,
            shadow: null
        };
        this.axesStyles = {
            label: {},
            ticks: {}
        };
        this.axes = {};
        if (typeof (a) == "string") {
            this._name = a
        } else {
            if (typeof (a) == "object") {
                au.jqplot.extend(true, this, a)
            }
        }
    };
    var ap = function () {
            this.borderColor = null;
            this.borderWidth = null;
            this.ticks = new aR();
            this.label = new aM()
        };
    var aR = function () {
            this.show = null;
            this.showGridline = null;
            this.showLabel = null;
            this.showMark = null;
            this.size = null;
            this.textColor = null;
            this.whiteSpace = null;
            this.fontSize = null;
            this.fontFamily = null
        };
    var aM = function () {
            this.textColor = null;
            this.whiteSpace = null;
            this.fontSize = null;
            this.fontFamily = null;
            this.fontWeight = null
        };
    var aQ = function () {
            this.color = null;
            this.lineWidth = null;
            this.linePattern = null;
            this.shadow = null;
            this.fillColor = null;
            this.showMarker = null;
            this.markerOptions = new ax()
        };
    var ax = function () {
            this.show = null;
            this.style = null;
            this.lineWidth = null;
            this.size = null;
            this.color = null;
            this.shadow = null
        };
    var al = function () {
            this.color = null;
            this.seriesColors = null;
            this.lineWidth = null;
            this.shadow = null;
            this.barPadding = null;
            this.barMargin = null;
            this.barWidth = null;
            this.highlightColors = null
        };
    var aY = function () {
            this.seriesColors = null;
            this.padding = null;
            this.sliceMargin = null;
            this.fill = null;
            this.shadow = null;
            this.startAngle = null;
            this.lineWidth = null;
            this.highlightColors = null
        };
    var az = function () {
            this.seriesColors = null;
            this.padding = null;
            this.sliceMargin = null;
            this.fill = null;
            this.shadow = null;
            this.startAngle = null;
            this.lineWidth = null;
            this.innerDiameter = null;
            this.thickness = null;
            this.ringMargin = null;
            this.highlightColors = null
        };
    var ag = function () {
            this.color = null;
            this.lineWidth = null;
            this.shadow = null;
            this.padding = null;
            this.sectionMargin = null;
            this.seriesColors = null;
            this.highlightColors = null
        };
    var aD = function () {
            this.padding = null;
            this.backgroundColor = null;
            this.ringColor = null;
            this.tickColor = null;
            this.ringWidth = null;
            this.intervalColors = null;
            this.intervalInnerRadius = null;
            this.intervalOuterRadius = null;
            this.hubRadius = null;
            this.needleThickness = null;
            this.needlePad = null
        };
    au.fn.jqplotChildText = function () {
        return au(this).contents().filter(function () {
            return this.nodeType == 3
        }).text()
    };
    au.fn.jqplotGetComputedFontStyle = function () {
        var b = window.getComputedStyle ? window.getComputedStyle(this[0]) : this[0].currentStyle;
        var d = b["font-style"] ? ["font-style", "font-weight", "font-size", "font-family"] : ["fontStyle", "fontWeight", "fontSize", "fontFamily"];
        var a = [];
        for (var c = 0; c < d.length; ++c) {
            var e = String(b[d[c]]);
            if (e && e != "normal") {
                a.push(e)
            }
        }
        return a.join(" ")
    };
    au.fn.jqplotToImageCanvas = function (t) {
        t = t || {};
        var i = (t.x_offset == null) ? 0 : t.x_offset;
        var g = (t.y_offset == null) ? 0 : t.y_offset;
        var r = (t.backgroundColor == null) ? "rgb(255,255,255)" : t.backgroundColor;
        if (au(this).width() == 0 || au(this).height() == 0) {
            return null
        }
        if (!au.jqplot.support_canvas) {
            return null
        }
        var p = document.createElement("canvas");
        var d = au(this).outerHeight(true);
        var k = au(this).outerWidth(true);
        var q = au(this).offset();
        var o = q.left;
        var m = q.top;
        var j = 0,
            l = 0;
        var f = ["jqplot-table-legend", "jqplot-xaxis-tick", "jqplot-x2axis-tick", "jqplot-yaxis-tick", "jqplot-y2axis-tick", "jqplot-y3axis-tick", "jqplot-y4axis-tick", "jqplot-y5axis-tick", "jqplot-y6axis-tick", "jqplot-y7axis-tick", "jqplot-y8axis-tick", "jqplot-y9axis-tick", "jqplot-xaxis-label", "jqplot-x2axis-label", "jqplot-yaxis-label", "jqplot-y2axis-label", "jqplot-y3axis-label", "jqplot-y4axis-label", "jqplot-y5axis-label", "jqplot-y6axis-label", "jqplot-y7axis-label", "jqplot-y8axis-label", "jqplot-y9axis-label"];
        var n, v, u, c;
        for (var e in f) {
            au(this).find("." + f[e]).each(function () {
                n = au(this).offset().top - m;
                v = au(this).offset().left - o;
                c = v + au(this).outerWidth(true) + j;
                u = n + au(this).outerHeight(true) + l;
                if (v < -j) {
                    k = k - j - v;
                    j = -v
                }
                if (n < -l) {
                    d = d - l - n;
                    l = -n
                }
                if (c > k) {
                    k = c
                }
                if (u > d) {
                    d = u
                }
            })
        }
        p.width = k + Number(i);
        p.height = d + Number(g);
        var s = p.getContext("2d");
        s.save();
        s.fillStyle = r;
        s.fillRect(0, 0, p.width, p.height);
        s.restore();
        s.translate(j, l);
        s.textAlign = "left";
        s.textBaseline = "top";

        function b(x) {
            var w = parseInt(au(x).css("line-height"), 10);
            if (isNaN(w)) {
                w = parseInt(au(x).css("font-size"), 10) * 1.2
            }
            return w
        }
        function a(K, M, I, F, x, E) {
            var L = b(K);
            var B = au(K).innerWidth();
            var A = au(K).innerHeight();
            var y = I.split(/\s+/);
            var J = y.length;
            var w = "";
            var z = [];
            var G = x;
            var H = F;
            for (var C = 0; C < J; C++) {
                w += y[C];
                if (M.measureText(w).width > B) {
                    z.push(C);
                    w = ""
                }
            }
            if (z.length === 0) {
                if (au(K).css("textAlign") === "center") {
                    H = F + (E - M.measureText(w).width) / 2 - j
                }
                M.fillText(I, H, x)
            } else {
                w = y.slice(0, z[0]).join(" ");
                if (au(K).css("textAlign") === "center") {
                    H = F + (E - M.measureText(w).width) / 2 - j
                }
                M.fillText(w, H, G);
                G += L;
                for (var C = 1, D = z.length; C < D; C++) {
                    w = y.slice(z[C - 1], z[C]).join(" ");
                    if (au(K).css("textAlign") === "center") {
                        H = F + (E - M.measureText(w).width) / 2 - j
                    }
                    M.fillText(w, H, G);
                    G += L
                }
                w = y.slice(z[C - 1], y.length).join(" ");
                if (au(K).css("textAlign") === "center") {
                    H = F + (E - M.measureText(w).width) / 2 - j
                }
                M.fillText(w, H, G)
            }
        }
        function h(E, B, G) {
            var x = E.tagName.toLowerCase();
            var F = au(E).position();
            var A = window.getComputedStyle ? window.getComputedStyle(E) : E.currentStyle;
            var C = B + F.left + parseInt(A.marginLeft, 10) + parseInt(A.borderLeftWidth, 10) + parseInt(A.paddingLeft, 10);
            var z = G + F.top + parseInt(A.marginTop, 10) + parseInt(A.borderTopWidth, 10) + parseInt(A.paddingTop, 10);
            var y = p.width;
            if ((x == "div" || x == "span") && !au(E).hasClass("jqplot-highlighter-tooltip")) {
                au(E).children().each(function () {
                    h(this, C, z)
                });
                var w = au(E).jqplotChildText();
                if (w) {
                    s.font = au(E).jqplotGetComputedFontStyle();
                    s.fillStyle = au(E).css("color");
                    a(E, s, w, C, z, y)
                }
            } else {
                if (x === "table" && au(E).hasClass("jqplot-table-legend")) {
                    s.strokeStyle = au(E).css("border-top-color");
                    s.fillStyle = au(E).css("background-color");
                    s.fillRect(C, z, au(E).innerWidth(), au(E).innerHeight());
                    if (parseInt(au(E).css("border-top-width"), 10) > 0) {
                        s.strokeRect(C, z, au(E).innerWidth(), au(E).innerHeight())
                    }
                    au(E).find("div.jqplot-table-legend-swatch-outline").each(function () {
                        var H = au(this);
                        s.strokeStyle = H.css("border-top-color");
                        var L = C + H.position().left;
                        var K = z + H.position().top;
                        s.strokeRect(L, K, H.innerWidth(), H.innerHeight());
                        L += parseInt(H.css("padding-left"), 10);
                        K += parseInt(H.css("padding-top"), 10);
                        var I = H.innerHeight() - 2 * parseInt(H.css("padding-top"), 10);
                        var M = H.innerWidth() - 2 * parseInt(H.css("padding-left"), 10);
                        var J = H.children("div.jqplot-table-legend-swatch");
                        s.fillStyle = J.css("background-color");
                        s.fillRect(L, K, M, I)
                    });
                    au(E).find("td.jqplot-table-legend-label").each(function () {
                        var H = au(this);
                        var J = C + H.position().left;
                        var I = z + H.position().top + parseInt(H.css("padding-top"), 10);
                        s.font = H.jqplotGetComputedFontStyle();
                        s.fillStyle = H.css("color");
                        s.fillText(H.text(), J, I)
                    });
                    var D = null
                } else {
                    if (x == "canvas") {
                        s.drawImage(E, C, z)
                    }
                }
            }
        }
        au(this).children().each(function () {
            h(this, i, g)
        });
        return p
    };
    au.fn.jqplotToImageStr = function (a) {
        var b = au(this).jqplotToImageCanvas(a);
        if (b) {
            return b.toDataURL("image/png")
        } else {
            return null
        }
    };
    au.fn.jqplotToImageElem = function (c) {
        var b = document.createElement("img");
        var a = au(this).jqplotToImageStr(c);
        b.src = a;
        return b
    };
    au.fn.jqplotToImageElemStr = function (b) {
        var a = "<img src=" + au(this).jqplotToImageStr(b) + " />";
        return a
    };
    au.fn.jqplotSaveImage = function () {
        var a = au(this).jqplotToImageStr({});
        if (a) {
            window.location.href = a.replace("image/png", "image/octet-stream")
        }
    };
    au.fn.jqplotViewImage = function () {
        var b = au(this).jqplotToImageElemStr({});
        var a = au(this).jqplotToImageStr({});
        if (b) {
            var c = window.open("");
            c.document.open("image/png");
            c.document.write(b);
            c.document.close();
            c = null
        }
    };
    var aC = function () {
            this.syntax = aC.config.syntax;
            this._type = "jsDate";
            this.proxy = new Date();
            this.options = {};
            this.locale = aC.regional.getLocale();
            this.formatString = "";
            this.defaultCentury = aC.config.defaultCentury;
            switch (arguments.length) {
            case 0:
                break;
            case 1:
                if (aT(arguments[0]) == "[object Object]" && arguments[0]._type != "jsDate") {
                    var a = this.options = arguments[0];
                    this.syntax = a.syntax || this.syntax;
                    this.defaultCentury = a.defaultCentury || this.defaultCentury;
                    this.proxy = aC.createDate(a.date)
                } else {
                    this.proxy = aC.createDate(arguments[0])
                }
                break;
            default:
                var c = [];
                for (var b = 0; b < arguments.length; b++) {
                    c.push(arguments[b])
                }
                this.proxy = new Date();
                this.proxy.setFullYear.apply(this.proxy, c.slice(0, 3));
                if (c.slice(3).length) {
                    this.proxy.setHours.apply(this.proxy, c.slice(3))
                }
                break
            }
        };
    aC.config = {
        defaultLocale: "en",
        syntax: "perl",
        defaultCentury: 1900
    };
    aC.prototype.add = function (a, b) {
        var c = aB[b] || aB.day;
        if (typeof c == "number") {
            this.proxy.setTime(this.proxy.getTime() + (c * a))
        } else {
            c.add(this, a)
        }
        return this
    };
    aC.prototype.clone = function () {
        return new aC(this.proxy.getTime())
    };
    aC.prototype.getUtcOffset = function () {
        return this.proxy.getTimezoneOffset() * 60000
    };
    aC.prototype.diff = function (d, a, e) {
        d = new aC(d);
        if (d === null) {
            return null
        }
        var c = aB[a] || aB.day;
        if (typeof c == "number") {
            var b = (this.proxy.getTime() - d.proxy.getTime()) / c
        } else {
            var b = c.diff(this.proxy, d.proxy)
        }
        return (e ? b : Math[b > 0 ? "floor" : "ceil"](b))
    };
    aC.prototype.getAbbrDayName = function () {
        return aC.regional[this.locale]["dayNamesShort"][this.proxy.getDay()]
    };
    aC.prototype.getAbbrMonthName = function () {
        return aC.regional[this.locale]["monthNamesShort"][this.proxy.getMonth()]
    };
    aC.prototype.getAMPM = function () {
        return this.proxy.getHours() >= 12 ? "PM" : "AM"
    };
    aC.prototype.getAmPm = function () {
        return this.proxy.getHours() >= 12 ? "pm" : "am"
    };
    aC.prototype.getCentury = function () {
        return parseInt(this.proxy.getFullYear() / 100, 10)
    };
    aC.prototype.getDate = function () {
        return this.proxy.getDate()
    };
    aC.prototype.getDay = function () {
        return this.proxy.getDay()
    };
    aC.prototype.getDayOfWeek = function () {
        var a = this.proxy.getDay();
        return a === 0 ? 7 : a
    };
    aC.prototype.getDayOfYear = function () {
        var a = this.proxy;
        var b = a - new Date("" + a.getFullYear() + "/1/1 GMT");
        b += a.getTimezoneOffset() * 60000;
        a = null;
        return parseInt(b / 60000 / 60 / 24, 10) + 1
    };
    aC.prototype.getDayName = function () {
        return aC.regional[this.locale]["dayNames"][this.proxy.getDay()]
    };
    aC.prototype.getFullWeekOfYear = function () {
        var a = this.proxy;
        var d = this.getDayOfYear();
        var b = 6 - a.getDay();
        var c = parseInt((d + b) / 7, 10);
        return c
    };
    aC.prototype.getFullYear = function () {
        return this.proxy.getFullYear()
    };
    aC.prototype.getGmtOffset = function () {
        var b = this.proxy.getTimezoneOffset() / 60;
        var a = b < 0 ? "+" : "-";
        b = Math.abs(b);
        return a + ar(Math.floor(b), 2) + ":" + ar((b % 1) * 60, 2)
    };
    aC.prototype.getHours = function () {
        return this.proxy.getHours()
    };
    aC.prototype.getHours12 = function () {
        var a = this.proxy.getHours();
        return a > 12 ? a - 12 : (a == 0 ? 12 : a)
    };
    aC.prototype.getIsoWeek = function () {
        var a = this.proxy;
        var b = a.getWeekOfYear();
        var d = (new Date("" + a.getFullYear() + "/1/1")).getDay();
        var c = b + (d > 4 || d <= 1 ? 0 : 1);
        if (c == 53 && (new Date("" + a.getFullYear() + "/12/31")).getDay() < 4) {
            c = 1
        } else {
            if (c === 0) {
                a = new aC(new Date("" + (a.getFullYear() - 1) + "/12/31"));
                c = a.getIsoWeek()
            }
        }
        a = null;
        return c
    };
    aC.prototype.getMilliseconds = function () {
        return this.proxy.getMilliseconds()
    };
    aC.prototype.getMinutes = function () {
        return this.proxy.getMinutes()
    };
    aC.prototype.getMonth = function () {
        return this.proxy.getMonth()
    };
    aC.prototype.getMonthName = function () {
        return aC.regional[this.locale]["monthNames"][this.proxy.getMonth()]
    };
    aC.prototype.getMonthNumber = function () {
        return this.proxy.getMonth() + 1
    };
    aC.prototype.getSeconds = function () {
        return this.proxy.getSeconds()
    };
    aC.prototype.getShortYear = function () {
        return this.proxy.getYear() % 100
    };
    aC.prototype.getTime = function () {
        return this.proxy.getTime()
    };
    aC.prototype.getTimezoneAbbr = function () {
        return this.proxy.toString().replace(/^.*\(([^)]+)\)$/, "$1")
    };
    aC.prototype.getTimezoneName = function () {
        var a = /(?:\((.+)\)$| ([A-Z]{3}) )/.exec(this.toString());
        return a[1] || a[2] || "GMT" + this.getGmtOffset()
    };
    aC.prototype.getTimezoneOffset = function () {
        return this.proxy.getTimezoneOffset()
    };
    aC.prototype.getWeekOfYear = function () {
        var c = this.getDayOfYear();
        var a = 7 - this.getDayOfWeek();
        var b = parseInt((c + a) / 7, 10);
        return b
    };
    aC.prototype.getUnix = function () {
        return Math.round(this.proxy.getTime() / 1000, 0)
    };
    aC.prototype.getYear = function () {
        return this.proxy.getYear()
    };
    aC.prototype.next = function (a) {
        a = a || "day";
        return this.clone().add(1, a)
    };
    aC.prototype.set = function () {
        switch (arguments.length) {
        case 0:
            this.proxy = new Date();
            break;
        case 1:
            if (aT(arguments[0]) == "[object Object]" && arguments[0]._type != "jsDate") {
                var a = this.options = arguments[0];
                this.syntax = a.syntax || this.syntax;
                this.defaultCentury = a.defaultCentury || this.defaultCentury;
                this.proxy = aC.createDate(a.date)
            } else {
                this.proxy = aC.createDate(arguments[0])
            }
            break;
        default:
            var c = [];
            for (var b = 0; b < arguments.length; b++) {
                c.push(arguments[b])
            }
            this.proxy = new Date();
            this.proxy.setFullYear.apply(this.proxy, c.slice(0, 3));
            if (c.slice(3).length) {
                this.proxy.setHours.apply(this.proxy, c.slice(3))
            }
            break
        }
        return this
    };
    aC.prototype.setDate = function (a) {
        this.proxy.setDate(a);
        return this
    };
    aC.prototype.setFullYear = function () {
        this.proxy.setFullYear.apply(this.proxy, arguments);
        return this
    };
    aC.prototype.setHours = function () {
        this.proxy.setHours.apply(this.proxy, arguments);
        return this
    };
    aC.prototype.setMilliseconds = function (a) {
        this.proxy.setMilliseconds(a);
        return this
    };
    aC.prototype.setMinutes = function () {
        this.proxy.setMinutes.apply(this.proxy, arguments);
        return this
    };
    aC.prototype.setMonth = function () {
        this.proxy.setMonth.apply(this.proxy, arguments);
        return this
    };
    aC.prototype.setSeconds = function () {
        this.proxy.setSeconds.apply(this.proxy, arguments);
        return this
    };
    aC.prototype.setTime = function (a) {
        this.proxy.setTime(a);
        return this
    };
    aC.prototype.setYear = function () {
        this.proxy.setYear.apply(this.proxy, arguments);
        return this
    };
    aC.prototype.strftime = function (a) {
        a = a || this.formatString || aC.regional[this.locale]["formatString"];
        return aC.strftime(this, a, this.syntax)
    };
    aC.prototype.toString = function () {
        return this.proxy.toString()
    };
    aC.prototype.toYmdInt = function () {
        return (this.proxy.getFullYear() * 10000) + (this.getMonthNumber() * 100) + this.proxy.getDate()
    };
    aC.regional = {
        en: {
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            formatString: "%Y-%m-%d %H:%M:%S"
        },
        fr: {
            monthNames: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
            monthNamesShort: ["Jan", "Fév", "Mar", "Avr", "Mai", "Jun", "Jul", "Aoû", "Sep", "Oct", "Nov", "Déc"],
            dayNames: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
            dayNamesShort: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
            formatString: "%Y-%m-%d %H:%M:%S"
        },
        de: {
            monthNames: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
            monthNamesShort: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
            dayNames: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
            dayNamesShort: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
            formatString: "%Y-%m-%d %H:%M:%S"
        },
        es: {
            monthNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
            monthNamesShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
            dayNames: ["Domingo", "Lunes", "Martes", "Mi&eacute;rcoles", "Jueves", "Viernes", "S&aacute;bado"],
            dayNamesShort: ["Dom", "Lun", "Mar", "Mi&eacute;", "Juv", "Vie", "S&aacute;b"],
            formatString: "%Y-%m-%d %H:%M:%S"
        },
        ru: {
            monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
            monthNamesShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
            dayNames: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
            dayNamesShort: ["вск", "пнд", "втр", "срд", "чтв", "птн", "сбт"],
            formatString: "%Y-%m-%d %H:%M:%S"
        },
        ar: {
            monthNames: ["كانون الثاني", "شباط", "آذار", "نيسان", "آذار", "حزيران", "تموز", "آب", "أيلول", "تشرين الأول", "تشرين الثاني", "كانون الأول"],
            monthNamesShort: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
            dayNames: ["السبت", "الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة"],
            dayNamesShort: ["سبت", "أحد", "اثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة"],
            formatString: "%Y-%m-%d %H:%M:%S"
        },
        pt: {
            monthNames: ["Janeiro", "Fevereiro", "Mar&ccedil;o", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
            monthNamesShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
            dayNames: ["Domingo", "Segunda-feira", "Ter&ccedil;a-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "S&aacute;bado"],
            dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "S&aacute;b"],
            formatString: "%Y-%m-%d %H:%M:%S"
        },
        "pt-BR": {
            monthNames: ["Janeiro", "Fevereiro", "Mar&ccedil;o", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
            monthNamesShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
            dayNames: ["Domingo", "Segunda-feira", "Ter&ccedil;a-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "S&aacute;bado"],
            dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "S&aacute;b"],
            formatString: "%Y-%m-%d %H:%M:%S"
        }
    };
    aC.regional["en-US"] = aC.regional["en-GB"] = aC.regional.en;
    aC.regional.getLocale = function () {
        var a = aC.config.defaultLocale;
        if (document && document.getElementsByTagName("html") && document.getElementsByTagName("html")[0].lang) {
            a = document.getElementsByTagName("html")[0].lang;
            if (!aC.regional.hasOwnProperty(a)) {
                a = aC.config.defaultLocale
            }
        }
        return a
    };
    var aE = 24 * 60 * 60 * 1000;
    var ar = function (d, a) {
            d = String(d);
            var c = a - d.length;
            var b = String(Math.pow(10, c)).slice(1);
            return b.concat(d)
        };
    var aB = {
        millisecond: 1,
        second: 1000,
        minute: 60 * 1000,
        hour: 60 * 60 * 1000,
        day: aE,
        week: 7 * aE,
        month: {
            add: function (a, c) {
                aB.year.add(a, Math[c > 0 ? "floor" : "ceil"](c / 12));
                var b = a.getMonth() + (c % 12);
                if (b == 12) {
                    b = 0;
                    a.setYear(a.getFullYear() + 1)
                } else {
                    if (b == -1) {
                        b = 11;
                        a.setYear(a.getFullYear() - 1)
                    }
                }
                a.setMonth(b)
            },
            diff: function (a, c) {
                var e = a.getFullYear() - c.getFullYear();
                var d = a.getMonth() - c.getMonth() + (e * 12);
                var b = a.getDate() - c.getDate();
                return d + (b / 30)
            }
        },
        year: {
            add: function (a, b) {
                a.setYear(a.getFullYear() + Math[b > 0 ? "floor" : "ceil"](b))
            },
            diff: function (a, b) {
                return aB.month.diff(a, b) / 12
            }
        }
    };
    for (var ah in aB) {
        if (ah.substring(ah.length - 1) != "s") {
            aB[ah + "s"] = aB[ah]
        }
    }
    var ay = function (a, b, d) {
            if (aC.formats[d]["shortcuts"][b]) {
                return aC.strftime(a, aC.formats[d]["shortcuts"][b], d)
            } else {
                var e = (aC.formats[d]["codes"][b] || "").split(".");
                var c = a["get" + e[0]] ? a["get" + e[0]]() : "";
                if (e[1]) {
                    c = ar(c, e[1])
                }
                return c
            }
        };
    aC.strftime = function (c, f, g, b) {
        var h = "perl";
        var d = aC.regional.getLocale();
        if (g && aC.formats.hasOwnProperty(g)) {
            h = g
        } else {
            if (g && aC.regional.hasOwnProperty(g)) {
                d = g
            }
        }
        if (b && aC.formats.hasOwnProperty(b)) {
            h = b
        } else {
            if (b && aC.regional.hasOwnProperty(b)) {
                d = b
            }
        }
        if (aT(c) != "[object Object]" || c._type != "jsDate") {
            c = new aC(c);
            c.locale = d
        }
        if (!f) {
            f = c.formatString || aC.regional[d]["formatString"]
        }
        var i = f || "%Y-%m-%d",
            a = "",
            e;
        while (i.length > 0) {
            if (e = i.match(aC.formats[h].codes.matcher)) {
                a += i.slice(0, e.index);
                a += (e[1] || "") + ay(c, e[2], h);
                i = i.slice(e.index + e[0].length)
            } else {
                a += i;
                i = ""
            }
        }
        return a
    };
    aC.formats = {
        ISO: "%Y-%m-%dT%H:%M:%S.%N%G",
        SQL: "%Y-%m-%d %H:%M:%S"
    };
    aC.formats.perl = {
        codes: {
            matcher: /()%(#?(%|[a-z]))/i,
            Y: "FullYear",
            y: "ShortYear.2",
            m: "MonthNumber.2",
            "#m": "MonthNumber",
            B: "MonthName",
            b: "AbbrMonthName",
            d: "Date.2",
            "#d": "Date",
            e: "Date",
            A: "DayName",
            a: "AbbrDayName",
            w: "Day",
            H: "Hours.2",
            "#H": "Hours",
            I: "Hours12.2",
            "#I": "Hours12",
            p: "AMPM",
            M: "Minutes.2",
            "#M": "Minutes",
            S: "Seconds.2",
            "#S": "Seconds",
            s: "Unix",
            N: "Milliseconds.3",
            "#N": "Milliseconds",
            O: "TimezoneOffset",
            Z: "TimezoneName",
            G: "GmtOffset"
        },
        shortcuts: {
            F: "%Y-%m-%d",
            T: "%H:%M:%S",
            X: "%H:%M:%S",
            x: "%m/%d/%y",
            D: "%m/%d/%y",
            "#c": "%a %b %e %H:%M:%S %Y",
            v: "%e-%b-%Y",
            R: "%H:%M",
            r: "%I:%M:%S %p",
            t: "\t",
            n: "\n",
            "%": "%"
        }
    };
    aC.formats.php = {
        codes: {
            matcher: /()%((%|[a-z]))/i,
            a: "AbbrDayName",
            A: "DayName",
            d: "Date.2",
            e: "Date",
            j: "DayOfYear.3",
            u: "DayOfWeek",
            w: "Day",
            U: "FullWeekOfYear.2",
            V: "IsoWeek.2",
            W: "WeekOfYear.2",
            b: "AbbrMonthName",
            B: "MonthName",
            m: "MonthNumber.2",
            h: "AbbrMonthName",
            C: "Century.2",
            y: "ShortYear.2",
            Y: "FullYear",
            H: "Hours.2",
            I: "Hours12.2",
            l: "Hours12",
            p: "AMPM",
            P: "AmPm",
            M: "Minutes.2",
            S: "Seconds.2",
            s: "Unix",
            O: "TimezoneOffset",
            z: "GmtOffset",
            Z: "TimezoneAbbr"
        },
        shortcuts: {
            D: "%m/%d/%y",
            F: "%Y-%m-%d",
            T: "%H:%M:%S",
            X: "%H:%M:%S",
            x: "%m/%d/%y",
            R: "%H:%M",
            r: "%I:%M:%S %p",
            t: "\t",
            n: "\n",
            "%": "%"
        }
    };
    aC.createDate = function (j) {
        if (j == null) {
            return new Date()
        }
        if (j instanceof Date) {
            return j
        }
        if (typeof j == "number") {
            return new Date(j)
        }
        var e = String(j).replace(/^\s*(.+)\s*$/g, "$1");
        e = e.replace(/^([0-9]{1,4})-([0-9]{1,2})-([0-9]{1,4})/, "$1/$2/$3");
        e = e.replace(/^(3[01]|[0-2]?\d)[-\/]([a-z]{3,})[-\/](\d{4})/i, "$1 $2 $3");
        var f = e.match(/^(3[01]|[0-2]?\d)[-\/]([a-z]{3,})[-\/](\d{2})\D*/i);
        if (f && f.length > 3) {
            var a = parseFloat(f[3]);
            var g = aC.config.defaultCentury + a;
            g = String(g);
            e = e.replace(/^(3[01]|[0-2]?\d)[-\/]([a-z]{3,})[-\/](\d{2})\D*/i, f[1] + " " + f[2] + " " + g)
        }
        f = e.match(/^([0-9]{1,2})[-\/]([0-9]{1,2})[-\/]([0-9]{1,2})[^0-9]/);

        function b(s, t) {
            var n = parseFloat(t[1]);
            var o = parseFloat(t[2]);
            var p = parseFloat(t[3]);
            var q = aC.config.defaultCentury;
            var u, v, m, r;
            if (n > 31) {
                v = p;
                m = o;
                u = q + n
            } else {
                v = o;
                m = n;
                u = q + p
            }
            r = m + "/" + v + "/" + u;
            return s.replace(/^([0-9]{1,2})[-\/]([0-9]{1,2})[-\/]([0-9]{1,2})/, r)
        }
        if (f && f.length > 3) {
            e = b(e, f)
        }
        var f = e.match(/^([0-9]{1,2})[-\/]([0-9]{1,2})[-\/]([0-9]{1,2})$/);
        if (f && f.length > 3) {
            e = b(e, f)
        }
        var h = 0;
        var k = aC.matchers.length;
        var c, l, d = e,
            i;
        while (h < k) {
            l = Date.parse(d);
            if (!isNaN(l)) {
                return new Date(l)
            }
            c = aC.matchers[h];
            if (typeof c == "function") {
                i = c.call(aC, d);
                if (i instanceof Date) {
                    return i
                }
            } else {
                d = e.replace(c[0], c[1])
            }
            h++
        }
        return NaN
    };
    aC.daysInMonth = function (b, a) {
        if (a == 2) {
            return new Date(b, 1, 29).getDate() == 29 ? 29 : 28
        }
        return [aL, 31, aL, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][a]
    };
    aC.matchers = [
        [/(3[01]|[0-2]\d)\s*\.\s*(1[0-2]|0\d)\s*\.\s*([1-9]\d{3})/, "$2/$1/$3"],
        [/([1-9]\d{3})\s*-\s*(1[0-2]|0\d)\s*-\s*(3[01]|[0-2]\d)/, "$2/$3/$1"], function (a) {
            var c = a.match(/^(?:(.+)\s+)?([012]?\d)(?:\s*\:\s*(\d\d))?(?:\s*\:\s*(\d\d(\.\d*)?))?\s*(am|pm)?\s*$/i);
            if (c) {
                if (c[1]) {
                    var b = this.createDate(c[1]);
                    if (isNaN(b)) {
                        return
                    }
                } else {
                    var b = new Date();
                    b.setMilliseconds(0)
                }
                var d = parseFloat(c[2]);
                if (c[6]) {
                    d = c[6].toLowerCase() == "am" ? (d == 12 ? 0 : d) : (d == 12 ? 12 : d + 12)
                }
                b.setHours(d, parseInt(c[3] || 0, 10), parseInt(c[4] || 0, 10), ((parseFloat(c[5] || 0)) || 0) * 1000);
                return b
            } else {
                return a
            }
        }, function (a) {
            var c = a.match(/^(?:(.+))[T|\s+]([012]\d)(?:\:(\d\d))(?:\:(\d\d))(?:\.\d+)([\+\-]\d\d\:\d\d)$/i);
            if (c) {
                if (c[1]) {
                    var b = this.createDate(c[1]);
                    if (isNaN(b)) {
                        return
                    }
                } else {
                    var b = new Date();
                    b.setMilliseconds(0)
                }
                var d = parseFloat(c[2]);
                b.setHours(d, parseInt(c[3], 10), parseInt(c[4], 10), parseFloat(c[5]) * 1000);
                return b
            } else {
                return a
            }
        }, function (e) {
            var g = e.match(/^([0-3]?\d)\s*[-\/.\s]{1}\s*([a-zA-Z]{3,9})\s*[-\/.\s]{1}\s*([0-3]?\d)$/);
            if (g) {
                var f = new Date();
                var d = aC.config.defaultCentury;
                var b = parseFloat(g[1]);
                var c = parseFloat(g[3]);
                var h, i, a;
                if (b > 31) {
                    i = c;
                    h = d + b
                } else {
                    i = b;
                    h = d + c
                }
                var a = ae(g[2], aC.regional[aC.regional.getLocale()]["monthNamesShort"]);
                if (a == -1) {
                    a = ae(g[2], aC.regional[aC.regional.getLocale()]["monthNames"])
                }
                f.setFullYear(h, a, i);
                f.setHours(0, 0, 0, 0);
                return f
            } else {
                return e
            }
        }];

    function ae(b, a) {
        if (a.indexOf) {
            return a.indexOf(b)
        }
        for (var d = 0, c = a.length; d < c; d++) {
            if (a[d] === b) {
                return d
            }
        }
        return -1
    }
    function aT(a) {
        if (a === null) {
            return "[object Null]"
        }
        return Object.prototype.toString.call(a)
    }
    au.jsDate = aC;
    au.jqplot.sprintf = function () {
        function b(i, m, l, j) {
            var k = (i.length >= m) ? "" : Array(1 + m - i.length >>> 0).join(l);
            return j ? i + k : k + i
        }
        function e(i) {
            var j = new String(i);
            for (var k = 10; k > 0; k--) {
                if (j == (j = j.replace(/^(\d+)(\d{3})/, "$1" + au.jqplot.sprintf.thousandsSeparator + "$2"))) {
                    break
                }
            }
            return j
        }
        function f(k, l, i, n, m, o) {
            var j = n - k.length;
            if (j > 0) {
                var p = " ";
                if (o) {
                    p = "&nbsp;"
                }
                if (i || !m) {
                    k = b(k, n, p, i)
                } else {
                    k = k.slice(0, l.length) + b("", j, "0", true) + k.slice(l.length)
                }
            }
            return k
        }
        function a(i, p, k, o, q, l, j, m) {
            var n = i >>> 0;
            k = k && n && {
                "2": "0b",
                "8": "0",
                "16": "0x"
            }[p] || "";
            i = k + b(n.toString(p), l || 0, "0", false);
            return f(i, k, o, q, j, m)
        }
        function h(j, i, l, n, k, m) {
            if (n != null) {
                j = j.slice(0, n)
            }
            return f(j, "", i, l, k, m)
        }
        var g = arguments,
            d = 0,
            c = g[d++];
        return c.replace(au.jqplot.sprintf.regex, function (p, x, v, o, l, u, A) {
            if (p == "%%") {
                return "%"
            }
            var m = false,
                s = "",
                q = false,
                r = false,
                z = false,
                B = false;
            for (var w = 0; v && w < v.length; w++) {
                switch (v.charAt(w)) {
                case " ":
                    s = " ";
                    break;
                case "+":
                    s = "+";
                    break;
                case "-":
                    m = true;
                    break;
                case "0":
                    q = true;
                    break;
                case "#":
                    r = true;
                    break;
                case "&":
                    z = true;
                    break;
                case "'":
                    B = true;
                    break
                }
            }
            if (!o) {
                o = 0
            } else {
                if (o == "*") {
                    o = +g[d++]
                } else {
                    if (o.charAt(0) == "*") {
                        o = +g[o.slice(1, -1)]
                    } else {
                        o = +o
                    }
                }
            }
            if (o < 0) {
                o = -o;
                m = true
            }
            if (!isFinite(o)) {
                throw new Error("$.jqplot.sprintf: (minimum-)width must be finite")
            }
            if (!u) {
                u = "fFeE".indexOf(A) > -1 ? 6 : (A == "d") ? 0 : void(0)
            } else {
                if (u == "*") {
                    u = +g[d++]
                } else {
                    if (u.charAt(0) == "*") {
                        u = +g[u.slice(1, -1)]
                    } else {
                        u = +u
                    }
                }
            }
            var j = x ? g[x.slice(0, -1)] : g[d++];
            switch (A) {
            case "s":
                if (j == null) {
                    return ""
                }
                return h(String(j), m, o, u, q, z);
            case "c":
                return h(String.fromCharCode(+j), m, o, u, q, z);
            case "b":
                return a(j, 2, r, m, o, u, q, z);
            case "o":
                return a(j, 8, r, m, o, u, q, z);
            case "x":
                return a(j, 16, r, m, o, u, q, z);
            case "X":
                return a(j, 16, r, m, o, u, q, z).toUpperCase();
            case "u":
                return a(j, 10, r, m, o, u, q, z);
            case "i":
                var D = parseInt(+j, 10);
                if (isNaN(D)) {
                    return ""
                }
                var y = D < 0 ? "-" : s;
                var t = B ? e(String(Math.abs(D))) : String(Math.abs(D));
                j = y + b(t, u, "0", false);
                return f(j, y, m, o, q, z);
            case "d":
                var D = Math.round(+j);
                if (isNaN(D)) {
                    return ""
                }
                var y = D < 0 ? "-" : s;
                var t = B ? e(String(Math.abs(D))) : String(Math.abs(D));
                j = y + b(t, u, "0", false);
                return f(j, y, m, o, q, z);
            case "e":
            case "E":
            case "f":
            case "F":
            case "g":
            case "G":
                var D = +j;
                if (isNaN(D)) {
                    return ""
                }
                var y = D < 0 ? "-" : s;
                var C = ["toExponential", "toFixed", "toPrecision"]["efg".indexOf(A.toLowerCase())];
                var n = ["toString", "toUpperCase"]["eEfFgG".indexOf(A) % 2];
                var t = Math.abs(D)[C](u);
                t = B ? e(t) : t;
                j = y + t;
                return f(j, y, m, o, q, z)[n]();
            case "p":
            case "P":
                var D = +j;
                if (isNaN(D)) {
                    return ""
                }
                var y = D < 0 ? "-" : s;
                var k = String(Number(Math.abs(D)).toExponential()).split(/e|E/);
                var E = (k[0].indexOf(".") != -1) ? k[0].length - 1 : k[0].length;
                var i = (k[1] < 0) ? -k[1] - 1 : 0;
                if (Math.abs(D) < 1) {
                    if (E + i <= u) {
                        j = y + Math.abs(D).toPrecision(E)
                    } else {
                        if (E <= u - 1) {
                            j = y + Math.abs(D).toExponential(E - 1)
                        } else {
                            j = y + Math.abs(D).toExponential(u - 1)
                        }
                    }
                } else {
                    var F = (E <= u) ? E : u;
                    j = y + Math.abs(D).toPrecision(F)
                }
                var n = ["toString", "toUpperCase"]["pP".indexOf(A) % 2];
                return f(j, y, m, o, q, z)[n]();
            case "n":
                return "";
            default:
                return p
            }
        })
    };
    au.jqplot.sprintf.thousandsSeparator = ",";
    au.jqplot.sprintf.regex = /%%|%(\d+\$)?([-+#0&\' ]*)(\*\d+\$|\*|\d+)?(\.(\*\d+\$|\*|\d+))?([nAscboxXuidfegpEGP])/g;
    au.jqplot.getSignificantFigures = function (c) {
        var a = String(Number(Math.abs(c)).toExponential()).split(/e|E/);
        var b = (a[0].indexOf(".") != -1) ? a[0].length - 1 : a[0].length;
        var f = (a[1] < 0) ? -a[1] - 1 : 0;
        var g = parseInt(a[1], 10);
        var e = (g + 1 > 0) ? g + 1 : 0;
        var d = (b <= e) ? 0 : b - g - 1;
        return {
            significantDigits: b,
            digitsLeft: e,
            digitsRight: d,
            zeros: f,
            exponent: g
        }
    };
    au.jqplot.getPrecision = function (a) {
        return au.jqplot.getSignificantFigures(a).digitsRight
    }
})(jQuery);
var backCompat = $.uiBackCompat !== false;
$.jqplot.effects = {
    effect: {}
};
var dataSpace = "jqplot.storage.";
$.extend($.jqplot.effects, {
    version: "1.9pre",
    save: function (d, f) {
        for (var e = 0; e < f.length; e++) {
            if (f[e] !== null) {
                d.data(dataSpace + f[e], d[0].style[f[e]])
            }
        }
    },
    restore: function (d, f) {
        for (var e = 0; e < f.length; e++) {
            if (f[e] !== null) {
                d.css(f[e], d.data(dataSpace + f[e]))
            }
        }
    },
    setMode: function (d, c) {
        if (c === "toggle") {
            c = d.is(":hidden") ? "show" : "hide"
        }
        return c
    },
    createWrapper: function (f) {
        if (f.parent().is(".ui-effects-wrapper")) {
            return f.parent()
        }
        var j = {
            width: f.outerWidth(true),
            height: f.outerHeight(true),
            "float": f.css("float")
        },
            h = $("<div></div>").addClass("ui-effects-wrapper").css({
                fontSize: "100%",
                background: "transparent",
                border: "none",
                margin: 0,
                padding: 0
            }),
            g = {
                width: f.width(),
                height: f.height()
            },
            i = document.activeElement;
        f.wrap(h);
        if (f[0] === i || $.contains(f[0], i)) {
            $(i).focus()
        }
        h = f.parent();
        if (f.css("position") === "static") {
            h.css({
                position: "relative"
            });
            f.css({
                position: "relative"
            })
        } else {
            $.extend(j, {
                position: f.css("position"),
                zIndex: f.css("z-index")
            });
            $.each(["top", "left", "bottom", "right"], function (b, a) {
                j[a] = f.css(a);
                if (isNaN(parseInt(j[a], 10))) {
                    j[a] = "auto"
                }
            });
            f.css({
                position: "relative",
                top: 0,
                left: 0,
                right: "auto",
                bottom: "auto"
            })
        }
        f.css(g);
        return h.css(j).show()
    },
    removeWrapper: function (d) {
        var c = document.activeElement;
        if (d.parent().is(".ui-effects-wrapper")) {
            d.parent().replaceWith(d);
            if (d[0] === c || $.contains(d[0], c)) {
                $(c).focus()
            }
        }
        return d
    }
});

function _normalizeArguments(e, f, h, g) {
    if ($.isPlainObject(e)) {
        return e
    }
    e = {
        effect: e
    };
    if (f === undefined) {
        f = {}
    }
    if ($.isFunction(f)) {
        g = f;
        h = null;
        f = {}
    }
    if ($.type(f) === "number" || $.fx.speeds[f]) {
        g = h;
        h = f;
        f = {}
    }
    if ($.isFunction(h)) {
        g = h;
        h = null
    }
    if (f) {
        $.extend(e, f)
    }
    h = h || f.duration;
    e.duration = $.fx.off ? 0 : typeof h === "number" ? h : h in $.fx.speeds ? $.fx.speeds[h] : $.fx.speeds._default;
    e.complete = g || f.complete;
    return e
}
function standardSpeed(b) {
    if (!b || typeof b === "number" || $.fx.speeds[b]) {
        return true
    }
    if (typeof b === "string" && !$.jqplot.effects.effect[b]) {
        if (backCompat && $.jqplot.effects[b]) {
            return false
        }
        return true
    }
    return false
}
$.fn.extend({
    jqplotEffect: function (l, k, s, m) {
        var n = _normalizeArguments.apply(this, arguments),
            q = n.mode,
            p = n.queue,
            o = $.jqplot.effects.effect[n.effect],
            t = !o && backCompat && $.jqplot.effects[n.effect];
        if ($.fx.off || !(o || t)) {
            if (q) {
                return this[q](n.duration, n.complete)
            } else {
                return this.each(function () {
                    if (n.complete) {
                        n.complete.call(this)
                    }
                })
            }
        }
        function r(a) {
            var e = $(this),
                b = n.complete,
                d = n.mode;

            function c() {
                if ($.isFunction(b)) {
                    b.call(e[0])
                }
                if ($.isFunction(a)) {
                    a()
                }
            }
            if (e.is(":hidden") ? d === "hide" : d === "show") {
                c()
            } else {
                o.call(e[0], n, c)
            }
        }
        if (o) {
            return p === false ? this.each(r) : this.queue(p || "fx", r)
        } else {
            return t.call(this, {
                options: n,
                duration: n.duration,
                callback: n.complete,
                mode: n.mode
            })
        }
    }
});
var rvertical = /up|down|vertical/,
    rpositivemotion = /up|left|vertical|horizontal/;
$.jqplot.effects.effect.blind = function (B, w) {
    var A = $(this),
        t = ["position", "top", "bottom", "left", "right", "height", "width"],
        v = $.jqplot.effects.setMode(A, B.mode || "hide"),
        r = B.direction || "up",
        y = rvertical.test(r),
        z = y ? "height" : "width",
        u = y ? "top" : "left",
        o = rpositivemotion.test(r),
        x = {},
        q = v === "show",
        C, D, s;
    if (A.parent().is(".ui-effects-wrapper")) {
        $.jqplot.effects.save(A.parent(), t)
    } else {
        $.jqplot.effects.save(A, t)
    }
    A.show();
    s = parseInt(A.css("top"), 10);
    C = $.jqplot.effects.createWrapper(A).css({
        overflow: "hidden"
    });
    D = y ? C[z]() + s : C[z]();
    x[z] = q ? String(D) : "0";
    if (!o) {
        A.css(y ? "bottom" : "right", 0).css(y ? "top" : "left", "").css({
            position: "absolute"
        });
        x[u] = q ? "0" : String(D)
    }
    if (q) {
        C.css(z, 0);
        if (!o) {
            C.css(u, D)
        }
    }
    C.animate(x, {
        duration: B.duration,
        easing: B.easing,
        queue: false,
        complete: function () {
            if (v === "hide") {
                A.hide()
            }
            $.jqplot.effects.restore(A, t);
            $.jqplot.effects.removeWrapper(A);
            w()
        }
    })
};
(function (e) {
    var d = (e.browser.msie ? "paste" : "input") + ".mask",
        f = window.orientation != undefined;
    e.mask = {
        definitions: {
            9: "[0-9]",
            a: "[A-Za-z]",
            "*": "[A-Za-z0-9]"
        },
        dataName: "rawMaskFn"
    }, e.fn.extend({
        caret: function (h, g) {
            if (this.length != 0) {
                if (typeof h == "number") {
                    g = typeof g == "number" ? g : h;
                    return this.each(function () {
                        if (this.setSelectionRange) {
                            this.setSelectionRange(h, g)
                        } else {
                            if (this.createTextRange) {
                                var a = this.createTextRange();
                                a.collapse(!0), a.moveEnd("character", g), a.moveStart("character", h), a.select()
                            }
                        }
                    })
                }
                if (this[0].setSelectionRange) {
                    h = this[0].selectionStart, g = this[0].selectionEnd
                } else {
                    if (document.selection && document.selection.createRange) {
                        var i = document.selection.createRange();
                        h = 0 - i.duplicate().moveStart("character", -100000), g = h + i.text.length
                    }
                }
                return {
                    begin: h,
                    end: g
                }
            }
        },
        unmask: function () {
            return this.trigger("unmask")
        },
        mask: function (p, o) {
            if (!p && this.length > 0) {
                var n = e(this[0]);
                return n.data(e.mask.dataName)()
            }
            o = e.extend({
                placeholder: "_",
                completed: null
            }, o);
            var m = e.mask.definitions,
                l = [],
                c = p.length,
                b = null,
                a = p.length;
            e.each(p.split(""), function (h, g) {
                g == "?" ? (a--, c = h) : m[g] ? (l.push(new RegExp(m[g])), b == null && (b = l.length - 1)) : l.push(null)
            });
            return this.trigger("unmask").each(function () {
                function z(s) {
                    var r = y.val(),
                        v = -1;
                    for (var u = 0, t = 0; u < a; u++) {
                        if (l[u]) {
                            x[u] = o.placeholder;
                            while (t++ < r.length) {
                                var q = r.charAt(t - 1);
                                if (l[u].test(q)) {
                                    x[u] = q, v = u;
                                    break
                                }
                            }
                            if (t > r.length) {
                                break
                            }
                        } else {
                            x[u] == r.charAt(t) && u != c && (t++, v = u)
                        }
                    }
                    if (!s && v + 1 < c) {
                        y.val(""), B(0, a)
                    } else {
                        if (s || v + 1 >= c) {
                            A(), s || y.val(y.val().substring(0, v + 1))
                        }
                    }
                    return c ? u : b
                }
                function A() {
                    return y.val(x.join("")).val()
                }
                function B(r, q) {
                    for (var s = r; s < q && s < a; s++) {
                        l[s] && (x[s] = o.placeholder)
                    }
                }
                function C(r) {
                    var q = r.which,
                        v = y.caret();
                    if (r.ctrlKey || r.altKey || r.metaKey || q < 32) {
                        return !0
                    }
                    if (q) {
                        v.end - v.begin != 0 && (B(v.begin, v.end), i(v.begin, v.end - 1));
                        var u = k(v.begin - 1);
                        if (u < a) {
                            var t = String.fromCharCode(q);
                            if (l[u].test(t)) {
                                h(u), x[u] = t, A();
                                var s = k(u);
                                y.caret(s), o.completed && s >= a && o.completed.call(y)
                            }
                        }
                        return !1
                    }
                }
                function g(r) {
                    var q = r.which;
                    if (q == 8 || q == 46 || f && q == 127) {
                        var u = y.caret(),
                            t = u.begin,
                            s = u.end;
                        s - t == 0 && (t = q != 46 ? j(t) : s = k(t - 1), s = q == 46 ? k(s) : s), B(t, s), i(t, s - 1);
                        return !1
                    }
                    if (q == 27) {
                        y.val(w), y.caret(0, z());
                        return !1
                    }
                }
                function h(r) {
                    for (var q = r, u = o.placeholder; q < a; q++) {
                        if (l[q]) {
                            var t = k(q),
                                s = x[q];
                            x[q] = u;
                            if (t < a && l[t].test(s)) {
                                u = s
                            } else {
                                break
                            }
                        }
                    }
                }
                function i(r, q) {
                    if (!(r < 0)) {
                        for (var t = r, s = k(q); t < a; t++) {
                            if (l[t]) {
                                if (s < a && l[t].test(x[s])) {
                                    x[t] = x[s], x[s] = o.placeholder
                                } else {
                                    break
                                }
                                s = k(s)
                            }
                        }
                        A(), y.caret(Math.max(b, r))
                    }
                }
                function j(q) {
                    while (--q >= 0 && !l[q]) {}
                    return q
                }
                function k(q) {
                    while (++q <= a && !l[q]) {}
                    return q
                }
                var y = e(this),
                    x = e.map(p.split(""), function (r, q) {
                        if (r != "?") {
                            return m[r] ? o.placeholder : r
                        }
                    }),
                    w = y.val();
                y.data(e.mask.dataName, function () {
                    return e.map(x, function (r, q) {
                        return l[q] && r != o.placeholder ? r : null
                    }).join("")
                }), y.attr("readonly") || y.one("unmask", function () {
                    y.unbind(".mask").removeData(e.mask.dataName)
                }).bind("focus.mask", function () {
                    w = y.val();
                    var q = z();
                    A();
                    var r = function () {
                            q == p.length ? y.caret(0, q) : y.caret(q)
                        };
                    (e.browser.msie ? r : function () {
                        setTimeout(r, 0)
                    })()
                }).bind("blur.mask", function () {
                    z(), y.val() != w && y.change()
                }).bind("keydown.mask", g).bind("keypress.mask", C).bind(d, function () {
                    setTimeout(function () {
                        y.caret(z(!0))
                    }, 0)
                }), z()
            })
        }
    })
})(jQuery);
$(function () {
    window.MetricModel = Backbone.Model.extend({
        defaults: {
            increasing: "",
            decreasing: "",
            type: "",
            toNumeric: function (a) {
                return parseInt(a)
            },
            fromNumeric: function (a) {
                return parseInt(a)
            },
            example: "",
            error: "Sorry, numbers only.",
            label: ""
        }
    });
    window.MetricsCollection = Backbone.Collection.extend({
        model: MetricModel,
        find_by_type: function (a) {
            return _(this.filter(function (b) {
                return b.get("type") == a
            })[0])._wrapped
        }
    });
    window.WorkoutModel = Backbone.Model.extend({
        defaults: {
            metric_type: "",
            title: ""
        },
        entries: function () {
            return entries.find_by_workout_id(this.get("id"))
        },
        metric: function () {
            return metrics.find_by_type(this.get("metric_type"))
        },
        average: function () {
            var b = 0;
            var a = this.metric();
            var c = this.get("value");
            var d = this.entries();
            d.each(function (e) {
                var f = e.get("value");
                b += a.attributes.toNumeric(f)
            });
            return Math.round(b / d._wrapped.length)
        },
        compare: function (f, b) {
            var a = this.metric();
            var c = a.attributes.toNumeric(f);
            var e = a.attributes.toNumeric(b);
            var g = (e - c);
            if (g > 0) {
                var d = Math.round(100 - (e / c) * 100) * -1 + "% " + a.get("increasing")
            } else {
                var d = Math.round(100 - (e / c) * 100) + "% " + a.get("decreasing")
            }
            if (g < 0) {
                g *= -1
            }
            return {
                change: a.attributes.fromNumeric(g),
                percent_change: d
            }
        }
    });
    window.WorkoutsCollection = Backbone.Collection.extend({
        model: WorkoutModel,
        localStorage: new Store("workouts")
    });
    window.EntryModel = Backbone.Model.extend({
        defaults: {
            workout_id: "",
            metric_type: "",
            value: "",
            date: new Date()
        }
    });
    window.EntryCollection = Backbone.Collection.extend({
        model: EntryModel,
        localStorage: new Store("entries"),
        find_by_workout_id: function (a) {
            return _(this.filter(function (b) {
                return b.get("workout_id") == a
            }))
        }
    });
    window.WorkoutView = Backbone.View.extend({
        tagName: "div",
        className: "workout row",
        template: _.template($("#workout-template").html()),
        events: {
            "keypress input": "enter_pressed",
            "click button": "new_entry",
            "focus input": "set_default",
            "click .delete-entry": "delete_entry",
            "click .delete-workout": "delete_workout"
        },
        initialize: function () {
            this.bind("new-entry", function () {
                this.draw_graph();
                this.update_info()
            }, this);
            this.render()
        },
        render: function () {
            $(this.el).html(this.template(this.model));
            $("#workouts").append(this.el);
            $(".time").mask("99:99:99", {
                placeholder: "0"
            });
            this.draw_graph();
            this.update_info();
            return this
        },
        delete_workout: function (a) {
            if (confirm("Are you sure you want to delete this workout and it's entries?")) {
                $("#" + this.model.get("id")).parent().remove();
                this.model.destroy()
            }
            return false
        },
        delete_entry: function (c) {
            if (confirm("Are you sure you want to delete this entry?")) {
                var a = $(c.target).attr("data-id");
                var b = entries.get(a);
                b.destroy();
                $("#entry-" + a).remove();
                this.update_info();
                this.draw_graph()
            }
            return false
        },
        enter_pressed: function (a) {
            if (a.keyCode == 13) {
                this.new_entry()
            }
        },
        new_entry: function (c) {
            var a = this.$("input");
            var d = parseInt(a.val());
            if(isNaN(d)){
                a.val(this.model.metric().get("error"));
                return false;
            };
            var b = entries.create({
                value: d,
                workout_id: this.model.get("id")
            });
            a.val(this.model.metric().get("example"));
            a.blur();
            this.$("tbody").append('<tr id="entry-' + b.get("id") + '"><td>' + new Date().toDateString() + "</td><td>" + d + '</td><td><a href="#" class="delete-entry" data-id="' + b.get("id") + '">X</a></td></tr>');
            this.$("table").show();
            this.$(".no-entries").hide();
            this.trigger("new-entry")
        },
        set_default: function () {
            this.$("input").val(this.model.metric().get("example"))
        },
        update_info: function () {
            if (this.model.entries()._wrapped.length > 1) {
                var a = _.template($("#workout-info-template").html());
                this.$("#info-" + this.model.id).html(a(this.model));
                this.$("#info-" + this.model.id).show()
            }
        },
        draw_graph: function () {
            if (this.model.entries()._wrapped.length > 1) {
                var d = "graph-" + this.model.get("id");
                $("#" + d).show().html("");
                var a = this.model.entries();
                var c = this.model.metric();
                var b = [];
                a.each(function (f) {
                    b.push(c.attributes.toNumeric(f.get("value")))
                });
                var e = $.jqplot(d, [b], {
                    axes: {
                        xaxis: {
                            tickOptions: {
                                formatString: " "
                            }
                        },
                        yaxis: {
                            tickOptions: {
                                formatString: " "
                            }
                        }
                    },
                    grid: {
                        background: "#f0f0f0"
                    }
                })
            }
        }
    });
    window.NewWorkoutView = Backbone.View.extend({
        el: $("#app"),
        template: _.template($("#new-workout-template").html()),
        events: {
            "submit #new-workout-form": "create_workout"
        },
        render: function () {
            $(this.el).html(this.template(window.metrics));
            return this
        },
        create_workout: function () {
            console.log("called!");
            var b = this.$('#new-workout-form input[name="title"]').val();
            var a = this.$('#new-workout-form select[name="metric_type"]').val();
            var c = workouts.create({
                title: b,
                metric_type: a
            });
            $(this.el).html();
            router.navigate("/", true);
            return false
        }
    });
    window.AppView = Backbone.View.extend({
        el: $("#app"),
        template: _.template($("#app-template").html()),
        initialize: function () {
            window.workouts = new WorkoutsCollection();
            window.entries = new EntryCollection();
            workouts.fetch();
            entries.fetch();
            window.metrics = new MetricsCollection([{
                type: "Time",
                increasing: "slower",
                decreasing: "faster",
                toNumeric: function (d) {
                    var c = d.split(/:|\./);
                    var e = parseInt(c[2]);
                    var b = parseInt(c[1]) * 60;
                    var a = parseInt(c[0]) * 60;
                    isNaN(e) ? e = 0 : e = e;
                    isNaN(b) ? b = 0 : b = b;
                    isNaN(a) ? a = 0 : a = a;
                    return e + b + a
                },
                fromNumeric: function (c) {
                    var a = parseInt(c / 3600);
                    var b = parseInt((c - a * 3600) / 60);
                    var e = c - (a * 3600) - (b * 60);
                    var d = [];
                    _.each([a, b, e], function (f) {
                        if (f < 10) {
                            d.push("0" + f)
                        } else {
                            d.push(f)
                        }
                    });
                    return d[0] + ":" + d[1] + ":" + d[2]
                },
                example: "00:00:00"
            }, {
                type: "Weight (lbs)",
                increasing: "heavier",
                decreasing: "lighter",
                label: "lbs"
            }, {
                type: "Weight (kg)",
                increasing: "heavier",
                decreasing: "lighter",
                label: "kg"
            }, {
                type: "Repetitions",
                increasing: "more",
                decreasing: "less",
                label: "reps"
            }])
        },
        render: function () {
            this.el.html(this.template());
            workouts.each(function (a) {
                new WorkoutView({
                    model: a
                })
            });
            return this
        },
        addOne: function (a) {
            new WorkoutView({
                model: a
            })
        }
    });
    window.Router = Backbone.Router.extend({
        routes: {
            "": "home",
            "/": "home",
            "/new-workout": "new_workout",
            "/clear-storage": "clear_storage"
        },
        home: function (b, a) {
            window.app.render()
        },
        new_workout: function (b, a) {
            if (window.new_workout) {
                window.new_workout.render()
            } else {
                new_workout = new NewWorkoutView();
                window.new_workout.render()
            }
        },
        clear_storage: function (b, a) {
            if (workouts.length) {
                workouts.each(function (c) {
                    if (confirm("Do you want to remove this workout?\n" + c.attributes)) {
                        c.destroy()
                    }
                })
            }
            if (entries.length) {
                entries.each(function (c) {
                    if (confirm("Do you want to remove this entry?\n" + c.attributes)) {
                        c.destroy()
                    }
                })
            }
            this.navigate("/", true)
        }
    });
    window.app = new AppView();
    window.router = new Router();
    Backbone.history.start()
});
if (navigator.standalone === undefined || !! navigator.standalone) {
    window.applicationCache.addEventListener("updateready", function () {
        window.applicationCache.swapCache()
    }, false);
    if (navigator.userAgent.match(/Android/i)) {
        window.addEventListener("load", function () {
            window.scrollTo(0, 1)
        }, false)
    }
};