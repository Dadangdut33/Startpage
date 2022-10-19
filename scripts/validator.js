/*!
 * Copyright (c) 2018 Chris O'Hara <cohara87@gmail.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

// * This file is modified from the original library, to get only the isURL function
"use strict";

var x = {
		protocols: ["http", "https", "ftp"],
		require_tld: !0,
		require_protocol: !1,
		require_host: !0,
		require_port: !1,
		require_valid_protocol: !0,
		allow_underscores: !1,
		allow_trailing_dot: !1,
		allow_protocol_relative_urls: !1,
		allow_fragments: !0,
		allow_query_components: !0,
		validate_length: !0,
	},
	V = /^\[([^\]]+)\](?::([0-9]+))?$/;

function B(t, e) {
	var r,
		n = 0 < arguments.length && void 0 !== t ? t : {},
		i = 1 < arguments.length ? e : void 0;
	for (r in i) void 0 === n[r] && (n[r] = i[r]);
	return n;
}

function C(t, e) {
	l(t), (e = B(e, D)).allow_trailing_dot && "." === t[t.length - 1] && (t = t.substring(0, t.length - 1));
	var r = (t = !0 === e.allow_wildcard && 0 === t.indexOf("*.") ? t.substring(2) : t).split("."),
		t = r[r.length - 1];
	if (e.require_tld) {
		if (r.length < 2) return !1;
		if (!/^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i.test(t)) return !1;
		if (/\s/.test(t)) return !1;
	}
	return (
		!(!e.allow_numeric_tld && /^\d+$/.test(t)) &&
		r.every(function (t) {
			return !(63 < t.length) && !!/^[a-z_\u00a1-\uffff0-9-]+$/i.test(t) && !/[\uff01-\uff5e]/.test(t) && !/^-|-$/.test(t) && !(!e.allow_underscores && /_/.test(t));
		})
	);
}

var D = { require_tld: !0, allow_underscores: !1, allow_trailing_dot: !1, allow_numeric_tld: !1, allow_wildcard: !1 };

function i(t) {
	return (i =
		"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
			? function (t) {
					return typeof t;
			  }
			: function (t) {
					return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
			  })(t);
}

function l(t) {
	if (!("string" == typeof t || t instanceof String)) {
		var e = i(t);
		throw (null === t ? (e = "null") : "object" === e && (e = t.constructor.name), new TypeError("Expected a string but received a ".concat(e)));
	}
}

function k(t, e) {
	for (var r, n = 0; n < e.length; n++) {
		var i = e[n];
		if (t === i || ((r = i), "[object RegExp]" === Object.prototype.toString.call(r) && i.test(t))) return !0;
	}
	return !1;
}

function P(t) {
	var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "";
	return (
		l(t),
		(e = String(e))
			? "4" === e
				? !!O.test(t) &&
				  t.split(".").sort(function (t, e) {
						return t - e;
				  })[3] <= 255
				: "6" === e && !!H.test(t)
			: P(t, 4) || P(t, 6)
	);
}

var T = "(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])",
	G = "(".concat(T, "[.]){3}").concat(T),
	O = new RegExp("^".concat(G, "$")),
	_ = "(?:[0-9a-fA-F]{1,4})",
	H = new RegExp(
		"^(" +
			"(?:".concat(_, ":){7}(?:").concat(_, "|:)|") +
			"(?:".concat(_, ":){6}(?:").concat(G, "|:").concat(_, "|:)|") +
			"(?:".concat(_, ":){5}(?::").concat(G, "|(:").concat(_, "){1,2}|:)|") +
			"(?:".concat(_, ":){4}(?:(:").concat(_, "){0,1}:").concat(G, "|(:").concat(_, "){1,3}|:)|") +
			"(?:".concat(_, ":){3}(?:(:").concat(_, "){0,2}:").concat(G, "|(:").concat(_, "){1,4}|:)|") +
			"(?:".concat(_, ":){2}(?:(:").concat(_, "){0,3}:").concat(G, "|(:").concat(_, "){1,5}|:)|") +
			"(?:".concat(_, ":){1}(?:(:").concat(_, "){0,4}:").concat(G, "|(:").concat(_, "){1,6}|:)|") +
			"(?::((?::".concat(_, "){0,5}:").concat(G, "|(?::").concat(_, "){1,7}|:))") +
			")(%[0-9a-zA-Z-.:]{1,})?$"
	);

export default function isURL(url, option) {
	if ((l(url), !url || /[\s<>]/.test(url))) return !1;
	if (0 === url.indexOf("mailto:")) return !1;
	if ((option = B(option, x)).validate_length && 2083 <= url.length) return !1;
	if (!option.allow_fragments && url.includes("#")) return !1;
	if (!option.allow_query_components && (url.includes("?") || url.includes("&"))) return !1;
	var r,
		n,
		i = url.split("#");
	if (1 < (i = (url = (i = (url = i.shift()).split("?")).shift()).split("://")).length) {
		if (((r = i.shift().toLowerCase()), option.require_valid_protocol && -1 === option.protocols.indexOf(r))) return !1;
	} else {
		if (option.require_protocol) return !1;
		if ("//" === url.substr(0, 2)) {
			if (!option.allow_protocol_relative_urls) return !1;
			i[0] = url.substr(2);
		}
	}
	if ("" === (url = i.join("://"))) return !1;
	if ("" === (url = (i = url.split("/")).shift()) && !option.require_host) return !0;
	if (1 < (i = url.split("@")).length) {
		if (option.disallow_auth) return !1;
		if ("" === i[0]) return !1;
		if (0 <= (c = i.shift()).indexOf(":") && 2 < c.split(":").length) return !1;
		var a = u(c.split(":"), 2),
			o = a[0],
			s = a[1];
		if ("" === o && "" === s) return !1;
	}
	var c = null,
		a = null;
	if (((s = (o = i.join("@")).match(V)) ? ((n = ""), (a = s[1]), (c = s[2] || null)) : ((n = (i = o.split(":")).shift()), i.length && (c = i.join(":"))), null !== c && 0 < c.length)) {
		if (((i = parseInt(c, 10)), !/^[0-9]+$/.test(c) || i <= 0 || 65535 < i)) return !1;
	} else if (option.require_port) return !1;
	return option.host_whitelist ? k(n, option.host_whitelist) : !!(P(n) || C(n, option) || (a && P(a, 6))) && ((n = n || a), !option.host_blacklist || !k(n, option.host_blacklist));
}
