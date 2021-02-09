// ### server injected code ###
var gigya = window.gigya;
/*if (typeof gigya == 'undefined' || !gigya.isGigya) {
    gigya = {isGigya: true};
}*/
gigya = {
    isGigya: true
};
gigya.apiKey = '3_3RNlByb_Fj2r_dY2FAE-FlCGhrBcFQj5TaSQsfvSt-8kuSRvK11npXlgZPlDqICQ';
gigya.defaultApiDomain = 'gigya.com';
gigya.dataCenter = 'eu1';
gigya.build = {
    "number": 11690,
    "version": "latest"
};
gigya.gmidVersion = 'ver4';

if (typeof gigya.partnerSettings == 'undefined') {
    gigya.partnerSettings = {
        "authMode": "cookie",
        "globalConf": "{\n    // A comma-delimited list of provider names to enable.\n    enabledProviders: '*',\n\n    // Define the language of Gigya's user interface and error message.\n    lang: 'en',\n    \n    customLang: {\n            \"fr-ch\":{\n                account_is_disabled: 'New Custom Error',\n                password_must_contain_at_least: 'This is new custom text',\n                num_characters_total: '%num this is also custom text',\n                password_does_not_meet_complexity_requirements: 'error in English',\n                invalid_login_or_password: 'custom error',\n                email_address_is_invalid: 'custom error FRANCES'\n            },\n            \"it-ch\":{\n                account_is_disabled: 'New Custom Error',\n                password_must_contain_at_least: 'This is new custom text',\n                num_characters_total: '%num this is also custom text',\n                password_does_not_meet_complexity_requirements: 'error in English',\n                invalid_login_or_password: 'custom error',\n                email_address_is_invalid: 'custom error ITALIANO'\n            },\n            \"de-ch\":{\n                account_is_disabled: 'New Custom Error',\n                password_must_contain_at_least: 'This is new custom text',\n                num_characters_total: '%num this is also custom text',\n                password_does_not_meet_complexity_requirements: 'error in English',\n                invalid_login_or_password: 'custom error',\n                email_address_is_invalid: 'custom error ALEMAN'\n            }\n        },\n    \n    // Bind globally to events\n    // See: http://developers.gigya.com/display/GD/Events#Events-OverridingtheDefaultEventMap\n    customEventMap: {\n        eventMap: [{\n            events: '*',\n            args: [function(e) {\n                return e;\n            }],\n            method: function(e) {\n                if (e.fullEventName === 'login') {\n                    // Handle login event here.\n                } else if (e.fullEventName === 'logout') {\n                    // Handle logout event here.\n                }\n            }\n        }]\n    }\n}",
        "captchaProvider": "Google",
        "invisibleRecaptcha": {
            "siteKey": "6LfuCiwUAAAAACWvqC2sUz4coFBf1CtVF_jdj-9M"
        },
        "plugins": {
            "connectWithoutLoginBehavior": "loginExistingUser",
            "defaultRegScreenSet": "",
            "defaultMobileRegScreenSet": "",
            "sessionExpiration": 0,
            "rememberSessionExpiration": 0,
            "apiDomain": "eu1.gigya.com"
        },
        "blockJsonpFallback": true,
        "silentDeprecatedEndpoints": true,
        "silentDeprecatedPlugins": true,
        "ssoKey": "3_5Ufqvmggv154jBgpcEDvPY5oF5WlYjm6U51C_62Mboe6uoNhQv8cJ5kJlxr8Lidq",
        "baseDomains": "victor.gigya-cs.com,herokuapp.com"
    };
}
gigya.providersConfig = {
    "facebook": {
        "appID": "626108487583023",
        "version": "v2.0"
    },
    "googlePlus": {
        "clientId": "10464331611-3jktvsc8bhto2ufoknq25cs1om7251qe.apps.googleusercontent.com",
        "scopes": "email https://www.googleapis.com/auth/plus.login"
    }
};
gigya.samlConfig = {
    "errorPageURL": null,
    "proxyPageURL": null
};

gigya.errorReport = {
    "enabled": true,
    "probability": 1
};
gigya.gmidVersion = 'ver4';
gigya.bypassCaptchaV1 = true;

if (gigya.canary && gigya.canary.isActive) {} else if (gigya.__initialized) {
    console.warn('**** gigya.js loaded twice ****');
} else {
    gigya.__initialized = true;
    // ### end server injected code ###
    // API adapters
    /*! For license information please see gigya.adapters.web.min.js.LICENSE.txt */
    ! function(e) {
        var t = {};

        function i(n) {
            if (t[n]) return t[n].exports;
            var o = t[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return e[n].call(o.exports, o, o.exports, i), o.l = !0, o.exports
        }
        i.m = e, i.c = t, i.d = function(e, t, n) {
            i.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: n
            })
        }, i.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, i.t = function(e, t) {
            if (1 & t && (e = i(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if (i.r(n), Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                for (var o in e) i.d(n, o, function(t) {
                    return e[t]
                }.bind(null, o));
            return n
        }, i.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return i.d(t, "a", t), t
        }, i.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, i.p = "", i(i.s = 251)
    }({
        0: function(e, t, i) {
            "use strict";
            i.r(t),
                function(e) {
                    i.d(t, "__extends", (function() {
                        return o
                    })), i.d(t, "__assign", (function() {
                        return r
                    })), i.d(t, "__rest", (function() {
                        return a
                    })), i.d(t, "__decorate", (function() {
                        return s
                    })), i.d(t, "__param", (function() {
                        return u
                    })), i.d(t, "__metadata", (function() {
                        return c
                    })), i.d(t, "__awaiter", (function() {
                        return g
                    })), i.d(t, "__generator", (function() {
                        return d
                    })), i.d(t, "__exportStar", (function() {
                        return l
                    })), i.d(t, "__values", (function() {
                        return p
                    })), i.d(t, "__read", (function() {
                        return f
                    })), i.d(t, "__spread", (function() {
                        return h
                    })), i.d(t, "__spreadArrays", (function() {
                        return w
                    })), i.d(t, "__await", (function() {
                        return y
                    })), i.d(t, "__asyncGenerator", (function() {
                        return m
                    })), i.d(t, "__asyncDelegator", (function() {
                        return v
                    })), i.d(t, "__asyncValues", (function() {
                        return _
                    })), i.d(t, "__makeTemplateObject", (function() {
                        return b
                    })), i.d(t, "__importStar", (function() {
                        return S
                    })), i.d(t, "__importDefault", (function() {
                        return I
                    })), i.d(t, "__classPrivateFieldGet", (function() {
                        return k
                    })), i.d(t, "__classPrivateFieldSet", (function() {
                        return x
                    }));
                    var n = function(e, t) {
                        return (n = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(e, t) {
                                e.__proto__ = t
                            } || function(e, t) {
                                for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i])
                            })(e, t)
                    };

                    function o(e, t) {
                        function i() {
                            this.constructor = e
                        }
                        n(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
                    }
                    var r = function() {
                        return (r = e || function(e) {
                            for (var t, i = 1, n = arguments.length; i < n; i++)
                                for (var o in t = arguments[i]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                            return e
                        }).apply(this, arguments)
                    };

                    function a(e, t) {
                        var i = {};
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (i[n] = e[n]);
                        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                            var o = 0;
                            for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (i[n[o]] = e[n[o]])
                        }
                        return i
                    }

                    function s(e, t, i, n) {
                        var o, r = arguments.length,
                            a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
                        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, n);
                        else
                            for (var s = e.length - 1; s >= 0; s--)(o = e[s]) && (a = (r < 3 ? o(a) : r > 3 ? o(t, i, a) : o(t, i)) || a);
                        return r > 3 && a && Object.defineProperty(t, i, a), a
                    }

                    function u(e, t) {
                        return function(i, n) {
                            t(i, n, e)
                        }
                    }

                    function c(e, t) {
                        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
                    }

                    function g(e, t, i, n) {
                        return new(i || (i = gigya.Promise))((function(o, r) {
                            function a(e) {
                                try {
                                    u(n.next(e))
                                } catch (e) {
                                    r(e)
                                }
                            }

                            function s(e) {
                                try {
                                    u(n.throw(e))
                                } catch (e) {
                                    r(e)
                                }
                            }

                            function u(e) {
                                var t;
                                e.done ? o(e.value) : (t = e.value, t instanceof i ? t : new i((function(e) {
                                    e(t)
                                }))).then(a, s)
                            }
                            u((n = n.apply(e, t || [])).next())
                        }))
                    }

                    function d(e, t) {
                        var i, n, o, r, a = {
                            label: 0,
                            sent: function() {
                                if (1 & o[0]) throw o[1];
                                return o[1]
                            },
                            trys: [],
                            ops: []
                        };
                        return r = {
                            next: s(0),
                            throw: s(1),
                            return: s(2)
                        }, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                            return this
                        }), r;

                        function s(r) {
                            return function(s) {
                                return function(r) {
                                    if (i) throw new TypeError("Generator is already executing.");
                                    for (; a;) try {
                                        if (i = 1, n && (o = 2 & r[0] ? n.return : r[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, r[1])).done) return o;
                                        switch (n = 0, o && (r = [2 & r[0], o.value]), r[0]) {
                                            case 0:
                                            case 1:
                                                o = r;
                                                break;
                                            case 4:
                                                return a.label++, {
                                                    value: r[1],
                                                    done: !1
                                                };
                                            case 5:
                                                a.label++, n = r[1], r = [0];
                                                continue;
                                            case 7:
                                                r = a.ops.pop(), a.trys.pop();
                                                continue;
                                            default:
                                                if (!(o = a.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== r[0] && 2 !== r[0])) {
                                                    a = 0;
                                                    continue
                                                }
                                                if (3 === r[0] && (!o || r[1] > o[0] && r[1] < o[3])) {
                                                    a.label = r[1];
                                                    break
                                                }
                                                if (6 === r[0] && a.label < o[1]) {
                                                    a.label = o[1], o = r;
                                                    break
                                                }
                                                if (o && a.label < o[2]) {
                                                    a.label = o[2], a.ops.push(r);
                                                    break
                                                }
                                                o[2] && a.ops.pop(), a.trys.pop();
                                                continue
                                        }
                                        r = t.call(e, a)
                                    } catch (e) {
                                        r = [6, e], n = 0
                                    } finally {
                                        i = o = 0
                                    }
                                    if (5 & r[0]) throw r[1];
                                    return {
                                        value: r[0] ? r[1] : void 0,
                                        done: !0
                                    }
                                }([r, s])
                            }
                        }
                    }

                    function l(e, t) {
                        for (var i in e) t.hasOwnProperty(i) || (t[i] = e[i])
                    }

                    function p(e) {
                        var t = "function" == typeof Symbol && Symbol.iterator,
                            i = t && e[t],
                            n = 0;
                        if (i) return i.call(e);
                        if (e && "number" == typeof e.length) return {
                            next: function() {
                                return e && n >= e.length && (e = void 0), {
                                    value: e && e[n++],
                                    done: !e
                                }
                            }
                        };
                        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
                    }

                    function f(e, t) {
                        var i = "function" == typeof Symbol && e[Symbol.iterator];
                        if (!i) return e;
                        var n, o, r = i.call(e),
                            a = [];
                        try {
                            for (;
                                (void 0 === t || t-- > 0) && !(n = r.next()).done;) a.push(n.value)
                        } catch (e) {
                            o = {
                                error: e
                            }
                        } finally {
                            try {
                                n && !n.done && (i = r.return) && i.call(r)
                            } finally {
                                if (o) throw o.error
                            }
                        }
                        return a
                    }

                    function h() {
                        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(f(arguments[t]));
                        return e
                    }

                    function w() {
                        for (var e = 0, t = 0, i = arguments.length; t < i; t++) e += arguments[t].length;
                        var n = Array(e),
                            o = 0;
                        for (t = 0; t < i; t++)
                            for (var r = arguments[t], a = 0, s = r.length; a < s; a++, o++) n[o] = r[a];
                        return n
                    }

                    function y(e) {
                        return this instanceof y ? (this.v = e, this) : new y(e)
                    }

                    function m(e, t, i) {
                        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                        var n, o = i.apply(e, t || []),
                            r = [];
                        return n = {}, a("next"), a("throw"), a("return"), n[Symbol.asyncIterator] = function() {
                            return this
                        }, n;

                        function a(e) {
                            o[e] && (n[e] = function(t) {
                                return new gigya.Promise((function(i, n) {
                                    r.push([e, t, i, n]) > 1 || s(e, t)
                                }))
                            })
                        }

                        function s(e, t) {
                            try {
                                (i = o[e](t)).value instanceof y ? gigya.Promise.resolve(i.value.v).then(u, c) : g(r[0][2], i)
                            } catch (e) {
                                g(r[0][3], e)
                            }
                            var i
                        }

                        function u(e) {
                            s("next", e)
                        }

                        function c(e) {
                            s("throw", e)
                        }

                        function g(e, t) {
                            e(t), r.shift(), r.length && s(r[0][0], r[0][1])
                        }
                    }

                    function v(e) {
                        var t, i;
                        return t = {}, n("next"), n("throw", (function(e) {
                            throw e
                        })), n("return"), t[Symbol.iterator] = function() {
                            return this
                        }, t;

                        function n(n, o) {
                            t[n] = e[n] ? function(t) {
                                return (i = !i) ? {
                                    value: y(e[n](t)),
                                    done: "return" === n
                                } : o ? o(t) : t
                            } : o
                        }
                    }

                    function _(e) {
                        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                        var t, i = e[Symbol.asyncIterator];
                        return i ? i.call(e) : (e = p(e), t = {}, n("next"), n("throw"), n("return"), t[Symbol.asyncIterator] = function() {
                            return this
                        }, t);

                        function n(i) {
                            t[i] = e[i] && function(t) {
                                return new gigya.Promise((function(n, o) {
                                    (function(e, t, i, n) {
                                        gigya.Promise.resolve(n).then((function(t) {
                                            e({
                                                value: t,
                                                done: i
                                            })
                                        }), t)
                                    })(n, o, (t = e[i](t)).done, t.value)
                                }))
                            }
                        }
                    }

                    function b(e, t) {
                        return Object.defineProperty ? Object.defineProperty(e, "raw", {
                            value: t
                        }) : e.raw = t, e
                    }

                    function S(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var i in e) Object.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                        return t.default = e, t
                    }

                    function I(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }

                    function k(e, t) {
                        if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
                        return t.get(e)
                    }

                    function x(e, t, i) {
                        if (!t.has(e)) throw new TypeError("attempted to set private field on non-instance");
                        return t.set(e, i), i
                    }
                }.call(this, i(0).__assign)
        },
        11: function(e, t, i) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = i(6),
                o = i(8),
                r = i(2),
                a = ["socialize", "accounts", "fidm", "gm", "comments", "gcs", "ids", "ds", "gscounters"];

            function s(e, t, i) {
                void 0 === t && (t = window.gigya.dataCenter), void 0 === i && (i = window.gigya.defaultApiDomain);
                var n = t + "." + i;
                return e ? e + "." + n : n
            }

            function u(e, t, i, n) {
                return void 0 === e && (e = window.gigya.partnerSettings && window.gigya.partnerSettings.customAPIDomainPrefix), void 0 === t && (t = r.localInfo.baseDomain), void 0 === i && (i = window.gigya.dataCenter), void 0 === n && (n = window.gigya.defaultApiDomain), e && t && t !== n ? e + "." + t : s(void 0, i, n)
            }
            t.apiDomainFactory = function(e, t) {
                void 0 === e && (e = u()), void 0 === t && (t = window.gigya.defaultApiDomain);
                var i = n.Uri.parse(e).isIn(n.Uri.parse(t));
                return function(t) {
                    if (t && i) {
                        var n = t.split(".")[0];
                        return -1 == a.indexOf(n) && (window.gigya.logger.error("trying to send request to an invalid domain"), n = a[0]), n + "." + e
                    }
                    return e
                }
            }, t.getGigyaDomain = s, t.getBaseDomain = function(e, t, i) {
                if (void 0 === e && (e = window.gigya.partnerSettings.baseDomains), void 0 === t && (t = location.hostname), void 0 === i && (i = ["gigya.com", "gigya-api.cn", window.gigya.defaultApiDomain]), !t) return "";
                "string" == typeof e && (e = e.split(","));
                var r = n.Uri.parse(t);
                i && (e = e.concat(i));
                for (var a = 0, s = e; a < s.length; a++) {
                    var u = s[a],
                        c = o.replaceAll(u, "*", ""),
                        g = n.Uri.parse(c);
                    if (g && r.isIn(g)) return g.isForSubDomains() ? r.domain : g.domain
                }
                return r.domain
            }, t.resolveApiDomain = u, t.resolveChinaApiDomain = function(e, t) {
                return ["sapcdm.cn", "gigya-api.cn"].indexOf(e) >= 0 ? (null == t ? void 0 : t.indexOf("sapcdm.cn")) >= 0 ? "sapcdm.cn" : "gigya-api.cn" : e
            }
        },
        12: function(e, t, i) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = i(2),
                o = i(20),
                r = function() {
                    function e(e) {
                        void 0 === e && (e = new o.CookieStore), this._cookieStore = e
                    }
                    return e.prototype.set = function(e, t, i, o, r) {
                        null == o && (o = this.getDefaultDomain());
                        var a = r ? "" : "/",
                            s = this._getExpirationInMs(i),
                            u = null;
                        null != s && (u = new Date).setTime(u.getTime() + s);
                        var c = this._setCookieInternal(e, t, a, u, o),
                            g = !s || s > 0;
                        if (g === c) return !0;
                        var d = n.localInfo.pageDomain;
                        return (c = this._setCookieInternal(e, t, a, u, d)) === g
                    }, e.prototype.get = function(e) {
                        return this._cookieStore.getCookie(e)
                    }, e.prototype.remove = function(e, t) {
                        void 0 === t && (t = n.localInfo.pageDomain), this._removeFromBaseDomains(e, t), this.set(e, "", -1, "", !1), this.set(e, "", -1, "", !0)
                    }, e.prototype.getInfiniteExpirationTimeInSeconds = function() {
                        return 31536e3
                    }, e.prototype.canSaveCookie = function() {
                        try {
                            return this.set(e.testCookieName, "true", 1, null, null)
                        } catch (e) {
                            return !1
                        }
                    }, e.prototype.getDefaultDomain = function(e, t) {
                        return void 0 === e && (e = n.localInfo.pageDomain), void 0 === t && (t = n.localInfo.baseDomain || ""), t.length > 0 && e.length >= t.length && e.lastIndexOf(t) === e.length - t.length ? t : e
                    }, e.prototype._getExpirationInMs = function(e) {
                        return null == e || "" === e || isNaN(e) ? 1e3 * this.getInfiniteExpirationTimeInSeconds() : 0 == e ? null : 1e3 * e
                    }, e.prototype._setCookieInternal = function(t, i, o, r, a) {
                        var s, u = 0 === (null !== (s = null === n.localInfo || void 0 === n.localInfo ? void 0 : n.localInfo.protocol) && void 0 !== s ? s : document.location.protocol).indexOf("https"),
                            c = e._getSameSiteMode();
                        return this._cookieStore.setCookie(t, i, {
                            path: o,
                            expires: r,
                            domain: a,
                            sameSite: c,
                            secure: u
                        }), !!this.get(t) || !!c && (this._cookieStore.setCookie(t, i, {
                            path: o,
                            expires: r,
                            domain: a,
                            secure: u
                        }), !!this.get(t) && (window.gigya.logger.report("Cookie established only without sameSite mode", {
                            name: t,
                            value: i,
                            sameSiteMode: c
                        }, !1), !0))
                    }, e.prototype._removeFromBaseDomains = function(e, t) {
                        for (var i = t.split("."), n = 0; n < i.length - 1; n++) {
                            var o = i.slice(n).join(".");
                            this.set(e, "", -1, o, !1), this.set(e, "", -1, o, !0)
                        }
                    }, e._getSameSiteMode = function() {
                        if (!e._disallowSameSiteMode()) return "None"
                    }, e._disallowSameSiteMode = function() {
                        var e, t, i = null !== (e = null === n.localInfo || void 0 === n.localInfo ? void 0 : n.localInfo.protocol) && void 0 !== e ? e : document.location.protocol,
                            o = null !== (t = null === n.localInfo || void 0 === n.localInfo ? void 0 : n.localInfo.userAgent) && void 0 !== t ? t : navigator.userAgent.toLowerCase();
                        return !(0 === i.indexOf("https")) || !o || o.indexOf("CPU iPhone OS 12") > -1 || o.indexOf("iPad; CPU OS 12") > -1 || o.indexOf("Macintosh; Intel Mac OS X 10_14") > -1 && o.indexOf("Version/") > -1 && o.indexOf("Safari") > -1 || o.indexOf("Chrome/5") > -1 && o.indexOf("Chrome/6") > -1
                    }, e.testCookieName = "gig3pctest", e
                }();
            t.CookieUtils = r, t.default = new r
        },
        132: function(e, t, i) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = i(0),
                o = i(57),
                r = function() {
                    function e(e, t, i, n, r, a) {
                        var s = this;
                        void 0 === t && (t = 6e4), void 0 === i && (i = o.generateId), void 0 === n && (n = o.createIframe), void 0 === r && (r = function() {
                            return new gigya.Promise((function(e) {
                                document.body ? e(document.body) : document.addEventListener("DOMContentLoaded", (function() {
                                    return e(document.body)
                                }))
                            }))
                        }), void 0 === a && (a = window), this.url = e, this.timeout = t, this._idCreator = i, this._iframeCreator = n, this.getIframeHost = r, this._win = a, this._pendingReqs = [], this._mutationObservers = [], this.onResponse = function(e) {
                            var t = window.gigya.utils.JSON.parse(e.data);
                            t && s._pendingReqs[t.id] && s.validateOrigin(e.origin) && (s._pendingReqs[t.id](t), delete s._pendingReqs[t.id])
                        }
                    }
                    return Object.defineProperty(e.prototype, "isInit", {
                        get: function() {
                            return Boolean(this._iframe)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), e.prototype.init = function() {
                        var e = this;
                        return this.isInit ? gigya.Promise.reject("proxy already initialized") : new gigya.Promise((function(t, i) {
                            e._iframe = e._iframeCreator(), e._iframe.src = e.url, e.getIframeHost().then((function(n) {
                                e._iframeHost = n, e._iframeHost.appendChild(e._iframe), window.gigya.logger.isEnabled && e.startObservingIFrameRemoval();
                                var o = e._win.setTimeout((function() {
                                        return i("proxy init timeout")
                                    }), e.timeout),
                                    r = function(n) {
                                        if (e.validateOrigin(n.origin)) {
                                            var a = e._tryParseResponse(n.data);
                                            if (null == a ? void 0 : a.signal) switch (e._win.clearTimeout(o), e._win.removeEventListener("message", r, !0), a.signal) {
                                                case "listening":
                                                    e._win.addEventListener("message", e.onResponse, !0), t(a.res);
                                                    break;
                                                case "error":
                                                case "stop":
                                                    i(a.res);
                                                    break;
                                                default:
                                                    i("unsupported response")
                                            }
                                        }
                                    };
                                e._win.addEventListener("message", r, !0)
                            }))
                        }))
                    }, e.prototype.validateOrigin = function(e) {
                        return o.validateOrigin(this._iframe.src, e)
                    }, e.prototype.postToIFrame = function(e) {
                        var t = this.registerMessage(e),
                            i = "object" == typeof e ? JSON.stringify(e) : e;
                        return this._iframe.contentWindow.postMessage(i, this._iframe.src), t
                    }, e.prototype.registerMessage = function(e, t) {
                        var i = this;
                        return void 0 === t && (t = this.timeout), new gigya.Promise((function(n, o) {
                            var r = i._win.setTimeout((function() {
                                o("proxy request timeout")
                            }), t);
                            i._pendingReqs[e.id] = function(e) {
                                i._win.clearTimeout(r), "error" === e.signal ? o(e.res) : n(e.res)
                            }
                        }))
                    }, e.prototype.sendRequest = function(e, t) {
                        return this.postToIFrame({
                            id: this._idCreator(),
                            methodName: e,
                            params: t
                        })
                    }, e.prototype.stop = function(e) {
                        return void 0 === e && (e = !1), n.__awaiter(this, void 0, void 0, (function() {
                            var t, i;
                            return n.__generator(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        if (this.isInit) return [3, 1];
                                        throw "proxy is not active";
                                    case 1:
                                        t = void 0, n.label = 2;
                                    case 2:
                                        return n.trys.push([2, 4, 5, 6]), [4, this.postToIFrame({
                                            id: this._idCreator(),
                                            signal: "stop"
                                        })];
                                    case 3:
                                        return [2, n.sent()];
                                    case 4:
                                        throw i = n.sent(), t = i, i;
                                    case 5:
                                        return t && !e || (this._mutationObservers && this._mutationObservers.length && this.stopObservingIFrameRemoval(), this._win.removeEventListener("message", this.onResponse, !0), this._iframeHost.removeChild(this._iframe), delete this._iframe), [7];
                                    case 6:
                                        return [2]
                                }
                            }))
                        }))
                    }, e.prototype.wrapWith = function(e) {
                        var t;
                        if ("function" == typeof e) t = o.getAllClassMethodsNames(e);
                        else if (e instanceof Array) t = e;
                        else {
                            if ("object" != typeof e) throw "unsupported type for wrapper";
                            t = Object.keys(e)
                        }
                        return this.proxyFromKeys(t)
                    }, e.prototype.proxyFromKeys = function(e) {
                        var t = this,
                            i = {};
                        return e.forEach((function(e) {
                            return i[e] = function() {
                                for (var i = [], n = 0; n < arguments.length; n++) i[n] = arguments[n];
                                return t.sendRequest(e, i)
                            }
                        })), i
                    }, e.prototype.startObservingIFrameRemoval = function() {
                        for (var e = this._iframe; e.parentElement;) this.addMutationObserver(e), e = e.parentElement
                    }, e.prototype.stopObservingIFrameRemoval = function() {
                        this._mutationObservers.forEach((function(e) {
                            e && e.disconnect && e.disconnect()
                        })), this._mutationObservers = []
                    }, e.prototype.addMutationObserver = function(e) {
                        var t = this,
                            i = new MutationObserver((function(i) {
                                for (var n = 0, o = i; n < o.length; n++) {
                                    var r = o[n];
                                    if ("childList" == r.type && r.removedNodes.length)
                                        for (var a = 0; a < r.removedNodes.length; a++) {
                                            if (r.removedNodes.item(a) === e) return window.gigya.logger.warn("### Gigya's service proxy has been unexpectedly detached from the DOM. This may cause unexpected behavior including a complete loss of service. ###"), void t.stopObservingIFrameRemoval()
                                        }
                                }
                            }));
                        i.observe(e.parentElement, {
                            childList: !0,
                            subtree: !1
                        }), this._mutationObservers.push(i)
                    }, e.prototype._tryParseResponse = function(e) {
                        try {
                            return JSON.parse(e)
                        } catch (t) {
                            window.gigya.logger.warn("received message with invalid format", {
                                data: e
                            })
                        }
                    }, e
                }();
            t.ServiceProxy = r
        },
        133: function(e, t, i) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = i(0),
                o = function(e) {
                    function t(t, i, n, o) {
                        void 0 === o && (o = {});
                        var r = e.call(this, window.gigya.defaultApiDomain, t, i, o) || this;
                        return r.methodName = t, r.params = i, r.callback = n, r.settings = o, r
                    }
                    return n.__extends(t, e), t.prototype.sendAction = function(e) {
                        window.gigya.utils.object.add(this.params, this.getAuthParams()), window.gigya._.apiAdapters.web.apiService.sendRequest(this.json()).then(this.callback).catch((function(e) {
                            return console.error(e)
                        }))
                    }, t.prototype.json = function() {
                        return {
                            methodName: this.methodName,
                            params: this.params,
                            settings: this.settings
                        }
                    }, t
                }(i(90).BaseRequest);
            t.ApiRequest = o
        },
        134: function(e, t, i) {
            (function(e) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var n = i(0),
                    o = i(90),
                    r = i(63),
                    a = function(t) {
                        function i(e, i, n, o, r, a) {
                            void 0 === a && (a = {});
                            var s = t.call(this, i, n, o, a) || this;
                            return s.id = e, s.baseUrl = i, s.methodName = n, s.params = o, s.callback = r, s.settings = a, s.windowName = s.methodName.replace(/\./g, "_").replace(/\//g, "") + "_" + (new Date).getTime(), s.requestID = s.windowName + (new Date).getTime(), s
                        }
                        return n.__extends(i, t), i.prototype.beforeRequest = function() {}, i.prototype.afterResponse = function(e) {
                            e.dontClose && "false" !== e.dontClose || window.gigya.utils.win.close(this.windowName), this.callback(e)
                        }, i.prototype.getAuthFlow = function() {
                            return window.gigya.localInfo.isWindowsPhone || window.gigya.localInfo.isFacebookBrowser ? "redirect" : this.params.authFlow ? this.params.authFlow : "popup"
                        }, i.prototype.getServerParamsString = function() {
                            var e = this.getServerParams();
                            e.state = this.getState(this.requestID, this.methodName, this.getAuthFlow()), this.settings.oauthMode === r.OAuthMode.Sso && (delete e.context, "redirect" != this.getAuthFlow() && e.redirectURL && window.gigya.logger.warn('redirectURL is valid only for "Redirect" auth flow')), window.gigya.utils.object.add(e, this.getAuthParams());
                            var t = window.gigya._.apiAdapter.getGmidTicket();
                            return t && (e.gmidTicket = t), this.sentLoginToken = e.login_token, window.gigya.utils.keyValue.serialize(e)
                        }, i.prototype.sendAction = function() {
                            var e = this;
                            this.beforeRequest();
                            var t, i = this.getServerParamsString();
                            this.params.provider && (t = window.gigya.socialize._getProviderByName(this.params.provider));
                            var n = {
                                menubar: 0,
                                resizable: 1,
                                scrollbars: 1,
                                width: t ? t.width : void 0,
                                height: t ? t.height : void 0
                            };
                            this.params.enablePopupLocation ? (n.location = 1, n.toolbar = 1) : n.toolbar = 0;
                            var o = this.methodName.split("."),
                                r = this.params.originalMethodName || o[o.length - 1];
                            window.gigya.reports.report(r, this.params.APIKey, this.params.cid, this.params.source, this.params.sourceData, {
                                sn: t ? t.toString() : null
                            });
                            var a = this.getUrl() + "?" + i;
                            "redirect" === this.getAuthFlow() ? window.top.document.location.href = a : (window.gigya.utils.xd.addMessageListener(this.requestID, this.params, !0, (function(t) {
                                e.afterResponse(t)
                            })), window.gigya.utils.win.open(a, this.windowName, n))
                        }, Object.defineProperty(i.prototype, "domain", {
                            get: function() {
                                return document.location.href.split("?")[0].split("#")[0]
                            },
                            enumerable: !0,
                            configurable: !0
                        }), i.prototype.getServerParams = function() {
                            var e;
                            switch (null === (e = this.settings) || void 0 === e ? void 0 : e.oauthMode) {
                                case r.OAuthMode.Sso:
                                    return this._normalizeParamsForSSO();
                                case r.OAuthMode.Social:
                                default:
                                    return this._normalizeParamsForSocial()
                            }
                        }, i.prototype.getState = function(e, t, i) {
                            var n;
                            switch (null === (n = this.settings) || void 0 === n ? void 0 : n.oauthMode) {
                                case r.OAuthMode.Sso:
                                    return this._createSSOStateParam(e, t, i);
                                case r.OAuthMode.Social:
                                default:
                                    return this._createSocialStateParam(e, t, i)
                            }
                        }, i.prototype._normalizeParamsForSSO = function() {
                            return e({
                                APIKey: window.gigya.apiKey,
                                redirectURL: window.top.document.location.href
                            }, this.params)
                        }, i.prototype._normalizeParamsForSocial = function() {
                            var e = {};
                            for (var t in this.params) 0 !== t.indexOf("x_") && null != this.params[t] && (e["x_" + t] = this.params[t], delete e[t]);
                            e.x_APIKey && (e.client_id = e.x_APIKey, delete e.x_APIKey), e.x_oauth_token && (e.oauth_token = e.x_oauth_token, delete e.x_oauth_token), e.redirect_uri = "/GS/AfterLogin.aspx", e.response_type = this.params.authCodeOnly ? "code" : "server_token", e.x_sdk = "js_" + window.gigya.build.version;
                            var i = window.gigya.utils.cookie.get("_gigRefUid_" + this.params.APIKey);
                            return i && (e.x_refUID = i), delete e.redirectURL, e
                        }, i.prototype._createSSOStateParam = function(e, t, i) {
                            var n = this._state;
                            return n.id = e, n.context = this.params.context || {}, n.gig_actions = "sso.login", n.authFlow = i || "redirect", decodeURIComponent(JSON.stringify(n))
                        }, i.prototype._createSocialStateParam = function(e, t, i) {
                            var n = this._state;
                            return n.id = e, "redirect" === i && (n.sourceURL = window.top.document.location.href, this.params.redirectURL ? (n.redirectURL = window.gigya.utils.URL.addParamsToURL(this.params.redirectURL, {
                                gig_events: window.gigya.events.global.getEventsForOperation(t)
                            }), this.params.redirectMethod && (n.redirectMethod = this.params.redirectMethod), n.addUserInfo = !0) : n.sourceURL = window.gigya.utils.URL.addParamsToURL(n.sourceURL, {
                                gig_events: window.gigya.events.global.getEventsForOperation(t)
                            })), this.params.provider && "facebook" == this.params.provider.toLowerCase() && (n.invite = this.params.invite), window.gigya.utils.keyValue.serialize(n)
                        }, Object.defineProperty(i.prototype, "_messagingMethod", {
                            get: function() {
                                return window.gigya.localInfo.isIE11 && window.indexedDB || window.gigya.localInfo.isAndroid && this.params.provider && "line" == this.params.provider.toLowerCase() ? window.gigya._.MessagingMethod.LocalStorageListener : window.gigya.localInfo.messagingMethod
                            },
                            enumerable: !0,
                            configurable: !0
                        }), Object.defineProperty(i.prototype, "_lid", {
                            get: function() {
                                return window.gigya.thisScript.globalConf.legacyCrossSiteMethod && "localstorage" !== window.gigya.thisScript.globalConf.legacyCrossSiteMethod.toLowerCase() || window.gigya.localInfo.isIE && window.navigator.msDoNotTrack ? window.gigya.thisScript.globalConf.legacyCrossSiteMethod + ":" + window.gigya.utils.xd._flashListenerID : window.gigya.utils.xd._flashListenerID
                            },
                            enumerable: !0,
                            configurable: !0
                        }), Object.defineProperty(i.prototype, "_state", {
                            get: function() {
                                return {
                                    domain: this._domain,
                                    lid: this._lid,
                                    messaging: this._messagingMethod
                                }
                            },
                            enumerable: !0,
                            configurable: !0
                        }), Object.defineProperty(i.prototype, "_domain", {
                            get: function() {
                                return document.location.href.split("?")[0].split("#")[0]
                            },
                            enumerable: !0,
                            configurable: !0
                        }), i
                    }(o.BaseRequest);
                t.OauthRequest = a
            }).call(this, i(0).__assign)
        },
        135: function(e, t, i) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = i(0),
                o = i(44),
                r = i(58);

            function a(e) {
                return void 0 === e && (e = window.gigya.thisScript.APIKey), n.__awaiter(this, void 0, void 0, (function() {
                    var t = this;
                    return n.__generator(this, (function(i) {
                        return window.gigya.logger.info("sync login token from group"), [2, new gigya.Promise((function(i) {
                            r.getGroupToken({
                                callback: function(r) {
                                    return n.__awaiter(t, void 0, void 0, (function() {
                                        return n.__generator(this, (function(t) {
                                            switch (t.label) {
                                                case 0:
                                                    return [4, o.setFromSsoResponse(r, e)];
                                                case 1:
                                                    return t.sent(), i(o.get(e)), [2]
                                            }
                                        }))
                                    }))
                                }
                            })
                        }))]
                    }))
                }))
            }
            t.hasSession = function() {
                var e, t, i, r;
                return n.__awaiter(this, void 0, void 0, (function() {
                    var s, u, c;
                    return n.__generator(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return s = window.gigya.logger.group("hasSession"), u = (null === (t = null === (e = window.gigya.thisScript) || void 0 === e ? void 0 : e.globalConf) || void 0 === t ? void 0 : t.APIKey) || (null === (i = window.gigya.thisScript) || void 0 === i ? void 0 : i.APIKey), window.gigya.logger.info("checking session exist for apiKey: " + u), (null === (r = window.gigya.thisScript) || void 0 === r ? void 0 : r.APIKey) !== u && window.gigya.logger.info("effective apiKey for checking session and the apiKey that the script was loaded with are different"), window.gigya.partnerSettings.ssoKey ? (window.gigya.logger.info("SSO group, sync login token from group"), [4, a(u)]) : [3, 2];
                            case 1:
                                n.sent(), n.label = 2;
                            case 2:
                                return o.get(u) ? window.gigya._.apiAdapters.isSessionVerified ? (window.gigya.logger.info("login token exist and session is already verified, session is valid"), s.end(), [2, !0]) : (window.gigya.logger.info("login token exist and session is not verified, verifying session..."), [2, new gigya.Promise((function(e) {
                                    window.gigya.accounts.verifyLogin({
                                        APIKey: u,
                                        callback: function(t) {
                                            window.gigya._.apiAdapters.isSessionVerified = 0 == (null == t ? void 0 : t.errorCode), window.gigya.logger.info(window.gigya._.apiAdapters.isSessionVerified ? "session verified" : "session is not verified"), s.end(), e(window.gigya._.apiAdapters.isSessionVerified)
                                        }
                                    })
                                }))]) : (c = window.gigya.utils.URL.getParamsFromURL(document.location.href)).errorCode && c.regToken ? (window.gigya.logger.info("user is returned from redirect, wait for login completion"), s.end(), [2, new gigya.Promise((function(e) {
                                    window.gigya.accounts.addEventHandlers({
                                        onLogin: function() {
                                            return e(!0)
                                        }
                                    })
                                }))]) : (window.gigya.logger.info("login token doesn't exist"), s.end(), [2, !1])
                        }
                    }))
                }))
            }, t.syncGroupToken = a
        },
        14: function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = 0;

            function n(e) {
                var n, o, r, a, s = null !== (o = null === (n = window.gigya.thisScript) || void 0 === n ? void 0 : n.baseDomain) && void 0 !== o ? o : "",
                    u = null !== (a = null === (r = window.gigya.thisScript) || void 0 === r ? void 0 : r.protocol) && void 0 !== a ? a : "https";
                if (!s || /cdns?\.gigya\.com$/.test(s)) {
                    var c = t.CDN_HOSTS[u];
                    c.length <= i && (i = 0), s = c[i++]
                }
                return e && 0 !== e.indexOf("/") && (e = "/" + e), u + "://" + s + (e || "")
            }
            t.CDN_HOSTS = {
                http: ["cdn.gigya.com", "cdn1.gigya.com", "cdn2.gigya.com", "cdn3.gigya.com"],
                https: ["cdns.gigya.com", "cdns1.gigya.com", "cdns2.gigya.com", "cdns3.gigya.com"]
            }, t.getCdnResource = n, t.getImgCdnResource = function() {
                return n("/gs/i/")
            }
        },
        16: function(e, t, i) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = i(0),
                o = i(3),
                r = i(2),
                a = i(12),
                s = function() {
                    function e() {}
                    return e.getName = function() {
                        return "AbstractAdapter"
                    }, e.prototype.setObject = function(e, t) {
                        this.setItem(e, o.serialize(t))
                    }, e.prototype.getObject = function(e, t) {
                        return o.deserialize(this.getItem(e), t)
                    }, e.prototype.isPersistent = function() {
                        return !0
                    }, e
                }();
            t.AbstractLocalStorageAdapter = s;
            var u = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.isLoaded = !1, t
                }
                return n.__extends(t, e), t.prototype.isReady = function() {
                    return this.isLoaded
                }, t.prototype.waitForService = function(e) {
                    var t = this;
                    this.isReady() ? e() : setTimeout((function() {
                        return t.waitForService(e)
                    }), 50)
                }, t
            }(s);
            t.AbstractAsyncLocalStorageAdapter = u;
            var c = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return n.__extends(t, e), t.prototype.getItem = function(e) {
                        return this.storage[e]
                    }, t.prototype.setItem = function(e, t, i) {
                        try {
                            this.storage[e] = t
                        } catch (e) {}
                    }, t.prototype.removeItem = function(e) {
                        this.storage.removeItem(e)
                    }, t
                }(s),
                g = function(e) {
                    function t() {
                        var t = e.call(this) || this;
                        return t.storage = window.localStorage, t
                    }
                    return n.__extends(t, e), t.getName = function() {
                        return "LocalStorageAdapter"
                    }, t.isAvailable = function() {
                        return r.localInfo.supportsLocalStorage
                    }, t
                }(c),
                d = function(e) {
                    function t() {
                        var t = e.call(this) || this;
                        return t.storage = window.sessionStorage, t
                    }
                    return n.__extends(t, e), t.getName = function() {
                        return "SessionStorageAdapter"
                    }, t.isAvailable = function() {
                        return r.localInfo.supportsSessionStorage
                    }, t
                }(c),
                l = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return n.__extends(t, e), t.isAvailable = function() {
                        return r.localInfo.isFF && window.globalStorage
                    }, t.getName = function() {
                        return "FirefoxStorageAdapter"
                    }, t.prototype.getItem = function(e) {
                        return window.globalStorage[location.hostname][e]
                    }, t.prototype.setItem = function(e, t, i) {
                        try {
                            window.globalStorage[location.hostname][e] = t
                        } catch (e) {}
                    }, t.prototype.removeItem = function(e) {
                        delete window.globalStorage[location.hostname][e]
                    }, t
                }(s),
                p = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return n.__extends(t, e), t.isAvailable = function() {
                        return a.default.canSaveCookie()
                    }, t.getName = function() {
                        return "CookieStorageAdapter"
                    }, t.prototype.getItem = function(e) {
                        return a.default.get(e)
                    }, t.prototype.setItem = function(e, t, i, n) {
                        a.default.set(e, t, i, n)
                    }, t.prototype.removeItem = function(e) {
                        a.default.remove(e)
                    }, t
                }(s);
            t.CookieStorageAdapter = p;
            var f = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.memory = {}, t
                }
                return n.__extends(t, e), t.isAvailable = function() {
                    return !0
                }, t.getName = function() {
                    return "MemoryStorageAdapter"
                }, t.prototype.getItem = function(e) {
                    return this.memory[e]
                }, t.prototype.setItem = function(e, t, i) {
                    this.memory[e] = t
                }, t.prototype.removeItem = function(e) {
                    delete this.memory[e]
                }, t.prototype.isPersistent = function() {
                    return !1
                }, t
            }(s);

            function h(e) {
                var i = e.getName() || e.name;
                return t.instances[i] || (t.instances[i] = new e), t.instances[i]
            }

            function w(e) {
                for (var i, n = 0, o = t.adapters; n < o.length; n++) {
                    var r = o[n];
                    if (r.isAvailable()) {
                        if (r.prototype instanceof u && !e) continue;
                        i = h(r);
                        break
                    }
                }
                return i || (i = h(f)), e && (i instanceof u ? i.waitForService((function() {
                    e(i)
                })) : e(i)), i
            }
            t.MemoryStorageAdapter = f, t.adapters = [g, d, l, p, f], t.instances = {}, t.initializeAdapter = h, t.waitForService = w;
            var y = w();
            t.getItem = function(e) {
                return y.getItem(e)
            }, t.setItem = function(e, t, i) {
                return y.setItem(e, t, i)
            }, t.removeItem = function(e) {
                return y.removeItem(e)
            }, t.setObject = function(e, t) {
                return y.setObject(e, t)
            }, t.getObject = function(e, t) {
                return y.getObject(e, t)
            }
        },
        2: function(e, t, i) {
            var n, o;
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = i(11),
                a = navigator.userAgent.toLowerCase();
            t.localInfo = {
                isXhrEnabled: !0,
                baseDomain: "",
                isBrowserSupportsFilesAPI: "function" == typeof FileReader || "object" == typeof FileReader,
                initTime: new Date,
                version: 0,
                pageDomain: document.location.hostname,
                protocol: "http:" == document.location.protocol ? "http" : "https",
                userAgent: a,
                isWin: -1 != a.indexOf("win"),
                isIE: -1 != a.indexOf("msie") || -1 != a.indexOf("mozilla") && -1 != a.indexOf("trident"),
                isIE6: -1 != a.indexOf("msie 6."),
                isIE7: -1 != a.indexOf("msie 7."),
                isIE8: -1 != a.indexOf("msie 8."),
                isIE9: -1 != a.indexOf("msie 9."),
                isIE10: -1 != a.indexOf("msie 10."),
                isIE11: -1 != a.indexOf("mozilla") && -1 != a.indexOf("trident/7.0"),
                isEdgeLegacy: -1 != a.indexOf("edge"),
                isEdge: RegExp(/edg(?!e)/).test(a),
                isIOS: -1 != a.indexOf("iphone") || -1 != a.indexOf("ipad") || -1 != a.indexOf("ipod"),
                isSafari534: -1 != a.indexOf("safari/534"),
                isWeChat: -1 != a.indexOf("micromessenger"),
                iosVersion: -1 != a.indexOf("applewebkit") && -1 != a.indexOf("version/") ? parseInt(a.split("version/")[1].split(" ")[0]) : 0,
                isAndroid: -1 != a.indexOf("android"),
                isAndroidBrowser: function(e) {
                    if (-1 === e.indexOf("mozilla/5.0")) return !1;
                    if (-1 === e.indexOf("android 4")) return !1;
                    if (-1 === e.indexOf("applewebkit")) return !1;
                    if (-1 !== e.indexOf("windows phone")) return !1;
                    var t = /chrome\/(\d+)/.exec(e);
                    return !t || parseInt(t[1]) < 20
                }(a),
                currentBrowser: "",
                androidVersion: -1 != a.indexOf("android") ? parseFloat(a.slice(a.indexOf("android") + 8)) : 0,
                isChrome: -1 != a.indexOf("chrome") && -1 == a.indexOf("edg"),
                isGoogleBot: -1 != a.indexOf("googlebot"),
                isFF: -1 != a.indexOf("firefox"),
                isOpera: -1 != a.indexOf("opera"),
                isSafari: navigator.appVersion && -1 != navigator.appVersion.toLowerCase().indexOf("safari") && -1 == navigator.appVersion.toLowerCase().indexOf("chrome") && -1 == a.indexOf("android"),
                isIOSWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),
                isIOSChrome: -1 != a.indexOf("crios"),
                isMAC: navigator.appVersion && -1 != navigator.appVersion.toLowerCase().indexOf("mac"),
                isWindowsPhone: -1 != a.indexOf("windows phone"),
                isFacebookBrowser: -1 != a.indexOf("fban") || -1 != a.indexOf("fbav"),
                supportsPostMessage: null != window.postMessage && (-1 == a.indexOf("msie") || -1 != a.indexOf("iemobile")),
                supportsLocalStorage: !1,
                supportsSessionStorage: !1,
                supportsFlash: function() {
                    var e = !1;
                    try {
                        if (navigator.mimeTypes && null != navigator.mimeTypes["application/x-shockwave-flash"] && navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin) e = !0;
                        else new ActiveXObject("ShockwaveFlash.ShockwaveFlash") && (e = !0)
                    } catch (e) {}
                    return e
                }(),
                quirksMode: "BackCompat" == document.compatMode && -1 != a.indexOf("msie"),
                backCompat: "BackCompat" == document.compatMode,
                isMobile: function() {
                    var e = ["iphone", "ipod", "android", "midp", "240x320", "blackberry", "netfront", "nokia", "panasonic", "portalmmm", "sharp", "sie-", "sonyericsson", "symbian", "windows ce", "benq", "mda", "mot-", "opera mini", "philips", "pocket pc", "sagem", "samsung", "htc"];
                    for (var t in e)
                        if (-1 != a.indexOf(e[t])) return !0;
                    return !1
                }(),
                isMobileApp: function() {
                    if (!document.getElementsByTagName) return !1;
                    for (var e = document.getElementsByTagName("meta"), t = 0; t < e.length; t++)
                        if ("viewport" == e[t].getAttribute("name")) {
                            var i = e[t].getAttribute("content");
                            if (i && -1 !== i.indexOf("width=device-width")) return !0
                        } return !1
                }(),
                isNativeMobileApp: !1,
                isTouch: function() {
                    if ("ontouchstart" in window) return !0;
                    if ("onmsgesturechange" in window) try {
                        return new ActiveXObject("htmlfile"), !1
                    } catch (e) {
                        return !0
                    }
                    return !1
                }(),
                isOnLine: function() {
                    return navigator.onLine
                },
                messagingMethod: 1
            };
            var s = function(e) {
                try {
                    var t = window[e];
                    if (!t) return !1;
                    var i = "_gig_localStorage_test",
                        n = "just checking for localStorage";
                    t.setItem(i, n);
                    var o = t.getItem(i) === n;
                    return t.removeItem(i), o
                } catch (e) {
                    return !1
                }
            };
            t.localInfo.supportsLocalStorage = s("localStorage"), t.localInfo.supportsSessionStorage = s("sessionStorage"), t.localInfo.isMAC = t.localInfo.isMAC && !t.localInfo.isIOS;
            var u = t.localInfo.isWin ? "windows" : t.localInfo.isWindowsPhone ? "winphone" : t.localInfo.isIOS ? "ios-v" + t.localInfo.iosVersion : t.localInfo.isMAC ? "mac" : t.localInfo.isAndroid ? "android" : "";
            u && (u += " ");
            var c, g = t.localInfo.isChrome ? "chrome" : t.localInfo.isFF ? "firefox" : t.localInfo.isSafari ? "safari" : t.localInfo.isEdge ? "edge" : t.localInfo.isEdgeLegacy ? "edge legacy" : t.localInfo.isIE11 ? "ie11" : t.localInfo.isIE10 ? "ie10" : t.localInfo.isIE9 ? "ie9" : t.localInfo.isIE8 ? "ie8" : "";
            t.localInfo.currentBrowser = u + g, (null === (o = null === (n = window.gigya.partnerSettings) || void 0 === n ? void 0 : n.baseDomains) || void 0 === o ? void 0 : o.length) ? c = window.gigya.partnerSettings.baseDomains : (window.self === window.top && window.gigya.logger.warn("gigya: missing base domains for site"), c = [document.location.hostname]), t.localInfo.baseDomain = r.getBaseDomain(c)
        },
        20: function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = function() {
                function e(e) {
                    void 0 === e && (e = window), this._win = e
                }
                return e.prototype.setCookie = function(e, t, i) {
                    var n = e + "=" + escape(t);
                    i.path && (n += "; path=" + i.path), i.expires && (n += "; expires=" + i.expires.toUTCString()), i.domain && -1 != i.domain.indexOf(".") && (n += "; domain=" + i.domain), i.sameSite && (n += "; sameSite=" + i.sameSite), i.secure && (n += "; secure"), this._win.document.cookie = n
                }, e.prototype.getCookie = function(e) {
                    e = e.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1").replace(/^[ \t]+|[ \t]+$/g, "");
                    var t = new RegExp("(?:^|;)\\s?" + e + "=(.*?)(?:;|$)"),
                        i = this._win.document.cookie.match(t);
                    return i && unescape(i[1])
                }, e
            }();
            t.CookieStore = i
        },
        21: function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = {};

            function n(e) {
                if (!i[e]) return !1;
                for (var t in i[e].ids) return !0;
                return !1
            }

            function o(e, t, n) {
                i[e] || (i[e] = {
                    q: [],
                    ids: {}
                }), i[e].q.push({
                    func: t,
                    args: n
                })
            }
            t._servicesStatus = function() {
                var e = {};
                for (var t in i) {
                    var o = n(t);
                    e[t] = o ? {
                        active: !0,
                        waitingFor: i[t].ids,
                        queuedCount: i[t].q.length
                    } : {
                        active: !1
                    }
                }
                return e
            }, t.isActive = n, t.release = function(e, t) {
                if (window.gigya.logger.debug("releasing " + t + " queue by " + e), i[t] && (delete i[t].ids[e], !n(t))) {
                    var o = i[t].q;
                    for (i[t].q = []; o.length > 0;) {
                        var r = o.splice(0, 1)[0];
                        try {
                            r.func.apply(this, r.args)
                        } catch (i) {
                            "object" == typeof console && console.log && console.log("Gigya: Exception while invoking queued method (" + t + ": " + e + ")")
                        }
                        if (n(t)) {
                            i[t].q = o;
                            break
                        }
                    }
                }
            }, t.hold = function(e, t) {
                window.gigya.logger.debug("locking queue " + t + " by " + e), i[t] || (i[t] = {
                    q: [],
                    ids: {}
                }), i[t].ids[e] = !0
            }, t.waitFor = o, t.queueForExecution = function(e, t, i) {
                i = i || [], n(e) ? o(e, t, i) : t.apply(this, i)
            }
        },
        23: function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = function() {
                function e() {}
                return Object.defineProperty(e.prototype, "_toggles", {
                    get: function() {
                        var e, t;
                        return (null === (t = null === (e = window.gigya.thisScript) || void 0 === e ? void 0 : e.globalConf) || void 0 === t ? void 0 : t.toggles) || {}
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.has = function(e) {
                    return void 0 !== this._toggles[e]
                }, e.prototype.get = function(e) {
                    return this._toggles[e]
                }, e.prototype.isOn = function(e) {
                    return this.has(e) && this.get(e)
                }, e
            }();
            t.default = new i
        },
        251: function(e, t, i) {
            (function(e) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var n = i(67),
                    o = i(86),
                    r = i(132),
                    a = i(57),
                    s = i(68),
                    u = i(43),
                    c = i(32),
                    g = i(88),
                    d = i(89),
                    l = i(37),
                    p = i(133),
                    f = i(90),
                    h = i(134),
                    w = i(58),
                    y = i(44),
                    m = i(252);
                i(253), window.gigya.services || (window.gigya.services = {}), window.gigya.services.proxy || (window.gigya.services.proxy = {}), window.gigya.services.proxy.utils || (window.gigya.services.proxy.utils = {}), window.gigya._ || (window.gigya._ = {}), window.gigya._.apiAdapters || (window.gigya._.apiAdapters = {}), window.gigya._.apiAdapters.web || (window.gigya._.apiAdapters.web = {}), window.gigya._.apiAdapters.web.sso || (window.gigya._.apiAdapters.web.sso = {}), window.gigya._.apiAdapters.web.tokenStore || (window.gigya._.apiAdapters.web.tokenStore = {}), e(window.gigya.services.proxy, n, o, r), e(window.gigya.services.proxy.utils, a), e(window.gigya.services, s, u, c), e(window.gigya, l, g, d), e(window.gigya._.apiAdapters.web, p, f, h, m), e(window.gigya._.apiAdapters.web.sso, w), e(window.gigya._.apiAdapters.web.tokenStore, y)
            }).call(this, i(0).__assign)
        },
        252: function(e, t, i) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = i(0),
                o = i(44),
                r = i(58),
                a = i(133),
                s = i(134),
                u = i(132),
                c = i(68),
                g = i(16),
                d = i(91);
            window.gigya.isGigya || (window.gigya.isGigya = !0), t.webAdapterName = "Web", t.newApiAdapter = function(e) {
                return new l(e, new g.CookieStorageAdapter)
            };
            var l = function() {
                function e(e, i) {
                    this.adapterSettings = e, this._storage = i, this.name = t.webAdapterName
                }
                return e.prototype.getStorage = function() {
                    return this._storage
                }, e.prototype.init = function(e, t) {
                    return void 0 === t && (t = 0), n.__awaiter(this, void 0, void 0, (function() {
                        var i, a, s, u, c, g, l, p, f, h, w, y, m, v, _ = this;
                        return n.__generator(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    i = "gig_bootstrap_" + window.gigya.thisScript.APIKey, n.label = 1;
                                case 1:
                                    return n.trys.push([1, 8, , 11]), a = d.GmidProvider.getGmidBootstrapIndicationToken(window.gigya), s = this.getStorage().getItem(i) === a, window.gigya.logger.info("has bootstrapped: " + s), u = window.gigya.logger.group("create api service"), c = window.gigya._.apiAdapters.web, g = this, [4, this.createApiService(s)];
                                case 2:
                                    c.apiService = g._apiService = n.sent(), u.end(), l = d.GmidProvider.shouldRegenerateGmid(window.gigya, this.hasSessionToken()), p = void 0, n.label = 3;
                                case 3:
                                    return n.trys.push([3, 5, , 6]), [4, this._apiService.bootstrap(l)];
                                case 4:
                                    return p = n.sent(), [3, 6];
                                case 5:
                                    return f = n.sent(), window.gigya.logger.error("error bootstrapping sdk", {
                                        type: "webSdkBootstrap failed",
                                        scope: "ApiService.bootstrap",
                                        ex: f
                                    }), window.gigya.events.global.dispatchWhenHandlersAdded(["accounts.error", "socialize.error"], {
                                        status: "FAIL_TO_BOOTSTRAP",
                                        statusMessage: "Web SDK bootstrap failure - APIService bootstrap",
                                        errorCode: 500026,
                                        errorMessage: "Web SDK bootstrap failure: " + (f.message || f)
                                    }), [3, 6];
                                case 6:
                                    return p && p.ticketInfo ? this.setGmidTicket(p.ticketInfo) : s ? s && l && (a = d.GmidProvider.getGmidBootstrapIndicationToken(window.gigya, d.GmidProvider.VersionSearchStrategy.configFirst), this.getStorage().setItem(i, a), window.gigya.logger.info("Cookie _gigya_ver* regenerated: " + a)) : (this.getStorage().setItem(i, a), window.gigya.logger.info("Cookie _gigya_ver* bootstrapped: " + a)), window.gigya.utils.functions.createAlias("gigya.auth.loginToken.get", o.get), window.gigya.partnerSettings.ssoKey && window.gigya.canary && window.gigya.canary.config.probability && this.syncCanaryWithSSO(), [4, new gigya.Promise((function(e) {
                                        return _.isSessionValid(void 0, (function(t) {
                                            return e(t)
                                        }))
                                    }))];
                                case 7:
                                    return (h = n.sent()) && window.gigya.services.accountService.verifyLogin().then((function(e) {
                                        e || window.gigya.events.global.dispatch({
                                            eventName: "logout,accounts.logout"
                                        })
                                    })), this.checkReturnFromURL(), window.gigya.logger.info("user is " + (h ? "" : "not ") + "logged-in"), window.gigya.partnerSettings.ssoKey ? (window.gigya.logger.info("sso group sync - " + window.gigya.partnerSettings.ssoKey), w = function(t) {
                                        o.setFromSsoResponse(t), e()
                                    }, h ? (y = o.get(), r.checkTokenRenew({
                                        loginToken: y,
                                        callback: w
                                    })) : r.getGroupToken({
                                        callback: w
                                    })) : e(), [3, 11];
                                case 8:
                                    return m = n.sent(), t > 0 ? [4, this.init(e, t - 1)] : [3, 10];
                                case 9:
                                    return [2, n.sent()];
                                case 10:
                                    return window.gigya.logger.error("error bootstrapping sdk", {
                                        type: "bootstrap failed",
                                        scope: "WebAdapter.init",
                                        error: m
                                    }), window.gigya.logger.debug("removing bootstrap indication"), this.getStorage().removeItem(i), v = {
                                        status: "FAIL_TO_BOOTSTRAP",
                                        statusMessage: "Web SDK failed to bootstrap",
                                        errorCode: 500026,
                                        errorMessage: "Web SDK failed to bootstrap: " + (m.message || m)
                                    }, window.gigya.events.dispatchErrorFromResponse({
                                        eventName: "init"
                                    }, v), window.gigya.events.global.dispatchWhenHandlersAdded(["accounts.error", "socialize.error"], v), e(), [3, 11];
                                case 11:
                                    return [2]
                            }
                        }))
                    }))
                }, e.prototype.syncCanaryWithSSO = function() {
                    var e = this,
                        t = this.getStorage().getItem(window.gigya.canary.config.cookiesNames.isCanary),
                        i = this.getStorage().getItem(window.gigya.canary.config.cookiesNames.version);
                    r.syncCanaryIndication({
                        isCanary: t,
                        canaryVersion: i,
                        callback: function(n) {
                            n && 0 === n.errorCode && (n.isCanary && n.isCanary !== t && e.getStorage().setItem(window.gigya.canary.config.cookiesNames.isCanary, n.isCanary), n.canaryVersion && n.canaryVersion !== i && e.getStorage().setItem(window.gigya.canary.config.cookiesNames.version, n.canaryVersion))
                        }
                    })
                }, e.prototype.createApiService = function(e) {
                    return n.__awaiter(this, void 0, void 0, (function() {
                        var t, i, o, r, a, s, g, d;
                        return n.__generator(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return t = window.gigya.thisScript.globalConf.storageProtocolOverride || "https", i = window.gigya.thisScript.globalConf.storageDomainOverride || "cdns." + window.gigya.dataCenter + "." + window.gigya.defaultApiDomain, o = window.gigya.logger.configKey + "=" + encodeURIComponent(JSON.stringify(window.gigya.logger.getConfig())), r = t + "://" + i + "/gs/webSdk/Api.aspx?apiKey=" + encodeURIComponent(window.gigya.thisScript.APIKey) + "&version=" + window.gigya.build.version + "&build=" + window.gigya.build.number + "#origin=" + document.location.href + "&" + o, window.gigya.logger.info("opening api frame"), a = new u.ServiceProxy(r), window.gigya.logger.info("creating api service"), [4, a.init()];
                                case 1:
                                    return s = n.sent(), window.gigya.partnerSettings.plugins.apiDomain = s.apiDomain, window.gigya._.getApiDomain = window.gigya._.apiDomainFactory(s.apiDomain, window.gigya.defaultApiDomain), g = window.gigya._.Uri.parse(s.apiDomain), window.gigya.logger.info("api domain is: " + g), window.gigya.logger.info("api domain is " + (s.isGroupApiDomain ? "" : "not ") + "group domain"), d = "false" === window.gigya.thisScript.URLParams.bootstrap, !g.isBaseOf(r) || d || window.gigya.thisScript.globalConf.storageDomainOverride ? (window.gigya.logger.info("closing api frame"), a.stop(!0).then((function() {
                                        return window.gigya.logger.info("api frame closed")
                                    })), d ? e = !0 : s.hasGroupApiDomainChanged && (e = !1), window.gigya.logger.info("create and work with api service from top frame"), [2, new c.ApiService(window.gigya.thisScript.APIKey, e, {
                                        originDomain: location.href,
                                        isGroupApiDomain: s.isGroupApiDomain,
                                        getApiDomain: window.gigya._.getApiDomain,
                                        isApiDomainFirstParty: !0,
                                        hasGroupApiDomainChanged: !1
                                    })]) : (window.gigya.logger.info("api domain is gigya's so keep working with frame"), [2, a.wrapWith(c.ApiService)])
                            }
                        }))
                    }))
                }, e.prototype.isSessionValid = function(e, t) {
                    var i = this;
                    void 0 === e && (e = {}), o.setFromGAC(e, (function() {
                        t && t(i.hasSessionToken(e))
                    }))
                }, e.prototype.hasSessionToken = function(e) {
                    return void 0 === e && (e = {}), null != o.get(e.APIKey) || null != e.oauth_token
                }, e.prototype.registerForNamespaceEvents = function(e) {}, e.prototype.onPluginEvent = function(e) {}, e.prototype.onJSLog = function(e, t) {}, e.prototype.sendRequest = function(e, t, i, n) {
                    var o = this;
                    void 0 === n && (n = {}), this.beforeRequest(e, t, n);
                    var r = new a.ApiRequest(e, t, (function(e) {
                        ! function(e, t) {
                            o.afterResponse(r, e, (function() {
                                "function" == typeof t && t(window.gigya.utils.object.clone(e, !0))
                            }))
                        }(e, i)
                    }), n);
                    r.send(), window.gigya._.logoutMethods[e] && window.gigya._.logoutBehaviour.logoutBeforeServerResponse && this.clearSession(t)
                }, e.prototype.clearSession = function(e, t) {
                    o.remove(e.APIKey), t && t()
                }, e.prototype.setGltexpFromSSO = function(e) {
                    return void 0 === e && (e = window.gigya.thisScript.APIKey), window.gigya.partnerSettings.ssoKey && !o.isValidGltExp() ? new gigya.Promise((function(e) {
                        r.getLoginTokenExp({
                            callback: function(t) {
                                var i = !1;
                                t && 0 == t.errorCode && t.gltexp && o.isValidGltExp(t.gltexp) && (o.setGltexp(t.gltexp), i = !0), e(i)
                            }
                        })
                    })) : gigya.Promise.resolve(!1)
                }, e.prototype.sendOauthRequest = function(e, t, i, n) {
                    var o = this;
                    this.beforeRequest(e, t, n);
                    var r = "https://" + window.gigya._.getApiDomain("socialize"),
                        a = new s.OauthRequest("", r, e, t, (function(e) {
                            o.afterResponse(a, e, (function(e) {
                                "0" != e.errorCode ? i(e) : o._apiService.bootstrap().then((function(t) {
                                    o.setGmidTicket(t.ticketInfo), i(e)
                                }))
                            }))
                        }), n);
                    a.send()
                }, e.prototype.beforeRequest = function(e, t, i) {
                    var n, r;
                    void 0 === i && (i = {}), (i.clearSession || i.clearSessionCondition && i.clearSessionCondition(t)) && (window.gigya.logger.info("clearing session before request for " + e), o.remove(t.APIKey)), -2 === Number(t.sessionExpiration) && (null === (r = null === (n = window.gigya.thisScript) || void 0 === n ? void 0 : n.globalConf) || void 0 === r ? void 0 : r.storageDomainOverride) && (window.gigya.logger.info("session expiration -2 was converted to 1 year fixed expiration"), t.sessionExpiration = window.gigya.utils.cookie.getInfiniteExpirationTimeInSeconds())
                }, e.prototype.afterResponse = function(e, t, i) {
                    return n.__awaiter(this, void 0, void 0, (function() {
                        var o = this;
                        return n.__generator(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return "Missing cookie" != t.errorDetails && "Session is invalid (Missing DeviceId)" != t.errorDetails && "Missing required parameter: gcid or ucid cookie" != t.errorDetails ? [3, 2] : (window.gigya.logger.info("missing cookie error - forcing bootstrap"), [4, this._apiService.bootstrap(!0)]);
                                case 1:
                                    return n.sent(), window.gigya.logger.info("resending request"), e.send(), [2];
                                case 2:
                                    this.handleTokenResponse(e, t, (function() {
                                        o.logoutSsoIfNeeded(e, t, (function() {
                                            i(t)
                                        }))
                                    })), n.label = 3;
                                case 3:
                                    return [2]
                            }
                        }))
                    }))
                }, e.prototype.onSDKEvent = function(e) {}, e.prototype.getTokenParam = function(e, t) {
                    return o.getTokenParam(e, t)
                }, e.prototype.checkReturnFromURL = function() {
                    var e = window.gigya.utils.URL.getParamsFromURL(document.location.href);
                    "sso.login" === e.gig_actions && this.syncSsoLogin(window.gigya.utils.object.removePropertiesPrefix(e, "gig_")), e.gig_events && 0 == e.errorCode && null != o.get() && (window.gigya.logger.info("returned from redirection with error code"), r.setGroupTokenFromResponse(o.get(), e.expires_in, (function(t) {
                        var i = e.gig_events.split(","); - 1 !== window.gigya.utils.array.indexOf(i, "accounts.login") ? window.gigya.accounts.getAccountInfo({
                            extraProfileFields: "samlData",
                            include: window.gigya.utils.stringUtils.mergeCommaSeparatedValues("profile,data,userinfo", window.gigya.thisScript.globalConf.include),
                            callback: function(e) {
                                var t = {
                                    errorCode: 0,
                                    eventName: "accounts.login"
                                };
                                if (window.gigya.utils.object.extractProperties(e, t, "signature|UIDSig|timestamp|UIDSignature|signatureTimestamp|UID|profile|data|id_token"), window.gigya.events.global.dispatchWhenHandlerAdded(t), -1 !== window.gigya.utils.array.indexOf(i, "socialize.login")) {
                                    var n = window.gigya._.addUserInfoToEvent(e, {
                                        errorCode: 0,
                                        eventName: "socialize.login"
                                    }, !0);
                                    window.gigya.events.global.dispatchWhenHandlerAdded(n)
                                }
                            }
                        }) : window.gigya.socialize.getUserInfo({
                            signIDs: !0,
                            extraFields: "samlData",
                            callback: function(e) {
                                for (var t = 0; t < i.length; t++) {
                                    var n = window.gigya._.addUserInfoToEvent(e, {
                                        errorCode: 0,
                                        eventName: i[t]
                                    }, !0);
                                    window.gigya.events.global.dispatchWhenHandlerAdded(n)
                                }
                            }
                        })
                    })))
                }, e.prototype.setNewLoginTokenFromResponse = function(t, i, a) {
                    return n.__awaiter(this, void 0, void 0, (function() {
                        var s, u, c, g;
                        return n.__generator(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return (s = i.sessionInfo ? i.sessionInfo.login_token : i.login_token) ? this.isFakeToken(s) ? (window.gigya.logger.info("fake login token returned (no gmid) - forcing bootstrap"), [4, this._apiService.bootstrap(!0)]) : [3, 2] : [3, 3];
                                case 1:
                                    return n.sent(), window.gigya.logger.info("resending the login request"), t.send(), [2];
                                case 2:
                                    return u = null != i.sessionInfo ? i.sessionInfo.expires_in : i.expires_in, c = t.params.sessionExpiration, (!u || 0 == u) && c < 0 && (u = window.gigya.utils.cookie.getInfiniteExpirationTimeInSeconds()), g = t.params.APIKey, window.gigya.utils.toggles.isOn(e.serverGltToggleName) ? this.setLoginTokenIfNotExist(g, s, u, c) : o.set(g, s, u, c), this.getStorage().removeItem("gltexp_" + t.params.APIKey), window.gigya.reports.trackAddressBarShares(), r.setGroupTokenFromResponse(s, u, a), [3, 4];
                                case 3:
                                    a(), n.label = 4;
                                case 4:
                                    return [2]
                            }
                        }))
                    }))
                }, e.prototype.setLoginTokenIfNotExist = function(e, t, i, n) {
                    o.get(e) && o.get(e) === t ? window.gigya.logger.info("glt cookie was set by server", {
                        login_token: t
                    }) : (o.set(e, t, i, n), window.gigya.logger.info("glt cookie was set by javascript", {
                        login_token: t
                    }))
                }, e.prototype.isFakeToken = function(e) {
                    return "ffs" == e.split(".")[1]
                }, e.prototype.onInvalidTokenResponse = function(e, t) {
                    var i = this;
                    e.paramsLoginToken ? t() : r.getGroupToken({
                        callback: function(n) {
                            n && n.login_token && n.login_token.split("|")[0] !== e.sentLoginToken && !e.paramsLoginToken ? i._apiService.bootstrap().then((function(t) {
                                o.setFromSsoResponse(n, e.params.APIKey), e.params.login_token = void 0, e.send()
                            }), (function(e) {})) : (o.remove(e.params.APIKey), e.settings.requiresSession() ? t() : (delete e.params.login_token, delete e.sentLoginToken, e.send(t)))
                        }
                    })
                }, e.prototype.handleTokenResponse = function(e, t, i) {
                    var n = this;
                    if (403030 == (t = window.gigya.utils.object.clone(t)).errorCode) {
                        if (this.shouldWaitForService(e, t)) return
                    } else 409012 == t.errorCode && (this._gmidTicket = null, window.gigya.utils.localStorage.removeItem("_gig_gmidt"));
                    e.sentLoginToken && window.gigya._.logoutMethods[e.methodName] && 0 == t.errorCode && t.logoutActiveSession && this.clearSession(e.params), window.gigya.partnerSettings.ssoKey && e.sentLoginToken && 0 == t.errorCode && e.params.loginTokenExp && r.setLoginTokenExp({
                        loginTokenExp: e.params.loginTokenExp
                    }), this.setNewLoginTokenFromResponse(e, t, (function() {
                        e.sentLoginToken && 403005 == t.errorCode ? n.onInvalidTokenResponse(e, i) : i()
                    }))
                }, e.prototype.logoutSsoIfNeeded = function(e, t, i) {
                    var n = this;
                    window.gigya.partnerSettings.ssoKey && window.gigya._.logoutMethods[e.methodName] && 0 == t.errorCode && t.logoutActiveSession && document.location.href != window.gigya.partnerSettings.ssoLogoutUrl ? r.logout({
                        callback: function(o) {
                            var r;
                            void 0 !== e.params.sustainLogoutURLs && (r = !e.params.sustainLogoutURLs), n.loadLogoutUrls(o.logoutURLs, i, {
                                UID: t.UID,
                                UIDSignature: t.UIDSignature,
                                signatureTimestamp: t.signatureTimestamp
                            }, r)
                        }
                    }) : i()
                }, e.prototype.loadLogoutUrls = function(e, t, i, n) {
                    for (var o = 0, r = e ? e.split(",") : [], a = function() {
                            ++o > r.length && t()
                        }, s = 0; s < r.length; s++)
                        if (r[s]) {
                            var u = window.gigya.utils.URL.addParamsToURL(r[s], i);
                            this.loadLogoutUrl(u, a, n)
                        } else a();
                    a()
                }, e.prototype.loadLogoutUrl = function(e, t, i) {
                    void 0 === i && (i = 5e3);
                    var n = document.createElement("iframe");
                    n.src = e, n.style.position = "absolute", n.style.top = "-1000px", n.style.left = "-1000px";
                    var o = !1,
                        r = function() {
                            o = !0, !1 !== i && n.parentElement.removeChild(n), t()
                        };
                    window.setTimeout((function() {
                        o || r()
                    }), i), n.onload = function() {
                        r()
                    }, window.gigya.utils.DOM.appendToBody(n)
                }, e.prototype.shouldWaitForService = function(e, t) {
                    return !!e.params.retryPossible && (e.params.retryPossible = !1, window.gigya.external.facebook.runWhenLoaded((function() {
                        e.send()
                    })), !0)
                }, e.prototype.getGmidTicket = function() {
                    return this._gmidTicket && this.refreshGmidTicket(), this._gmidTicket
                }, e.prototype.refreshGmidTicket = function() {
                    var e = this;
                    this._apiService.getGmidTicket(!0).then((function(t) {
                        return e.setGmidTicket(t)
                    }))
                }, e.prototype.setGmidTicket = function(e) {
                    var t = this;
                    if (e && e.gmidTicket) {
                        window.gigya.logger.info("set gmidTicket (set auto-refresh)"), this._gmidTicket = e.gmidTicket;
                        var i = this.calculateGmidTicketNextRun(e.expirationTime);
                        setTimeout((function() {
                            return t.refreshGmidTicket()
                        }), i)
                    } else window.gigya.logger.info("clean gmidTicket"), delete this._gmidTicket
                }, e.prototype.calculateGmidTicketNextRun = function(e) {
                    return new Date(e).getTime() - (new Date).getTime()
                }, e.prototype.syncSsoLogin = function(e) {
                    var t;
                    for (var i in e) void 0 === t && (t = {}), t[i] = e[i];
                    o.dispatchLoginEvent({
                        context: t
                    })
                }, e.serverGltToggleName = "enableServerGLT", e
            }();
            t.WebAdapter = l
        },
        253: function(e, t, i) {
            var n = this;
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = i(0),
                r = i(5),
                a = i(21),
                s = i(254),
                u = i(255),
                c = i(135),
                g = i(256);
            r.createAlias("gigya.setAccountResidency", s.setAccountResidency), r.createAlias("gigya.setGroupContext", u.setGroupContext), r.createAlias("gigya.setSSOToken", u.setSSOToken), r.createAlias("gigya.syncGroupGltExp", u.syncGroupGltExp), r.createAlias("gigya.hasSession", (function() {
                return o.__awaiter(n, void 0, void 0, (function() {
                    return o.__generator(this, (function(e) {
                        return [2, new gigya.Promise((function(e) {
                            a.queueForExecution("API", (function() {
                                return c.hasSession().then(e)
                            }))
                        }))]
                    }))
                }))
            })), r.createAlias("gigya.sso.login", g.ssoLogin), r.createAlias("gigya.sso.continue", (function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                a.queueForExecution("API", g.continueSso, e)
            }))
        },
        254: function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = ["us1", "eu1", "au1", "ru1", "cn1", "il1"];
            t.setAccountResidency = function(e) {
                if (e && -1 == i.indexOf(e.toLowerCase())) return window.gigya.logger.warn("invalid residency", {
                    dataCenter: e
                });
                window.gigya.globalAccount.dataCenter = e
            }
        },
        255: function(e, t, i) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = i(0),
                o = i(58),
                r = i(44);
            t.setGroupContext = function(e) {
                o.setGroupContextCookie({
                    groupContext: e
                })
            }, t.setSSOToken = function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return n.__awaiter(this, void 0, void 0, (function() {
                    var t, i;
                    return n.__generator(this, (function(n) {
                        return t = window.gigya.utils.object.merge([window.gigya.thisScript.globalConf, e]), i = t.redirectURL || document.location.href, window.gigya.utils.HTTP.redirect(i, [{}], "GET", "_top"), [2]
                    }))
                }))
            }, t.syncGroupGltExp = function(e) {
                return void 0 === e && (e = r.getGltexpCookie()), window.gigya.partnerSettings.ssoKey ? new gigya.Promise((function(t) {
                    return o.setLoginTokenExp({
                        loginTokenExp: e,
                        callback: t
                    }, !1)
                })).then((function(t) {
                    var i = t.gltexp && t.gltexp !== e;
                    return i && r.setGltexp(t.gltexp), {
                        hasChanged: i,
                        oldExpiration: window.gigya.utils.gltexp.getMillis(e),
                        newExpiration: window.gigya.utils.gltexp.getMillis(t.gltexp || e)
                    }
                })) : gigya.Promise.resolve()
            }
        },
        256: function(e, t, i) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = i(0),
                o = i(44),
                r = i(135),
                a = i(41);

            function s() {
                var e, t;
                return window.gigya.partnerSettings.ssoKey ? !!(null === (t = null === (e = window.gigya.thisScript) || void 0 === e ? void 0 : e.globalConf) || void 0 === t ? void 0 : t.storageDomainOverride) || (window.gigya.logger.warn("Central login page must configure storageDomainOverride in webSDK Configuration"), !1) : (window.gigya.logger.warn("Not in SSO Group"), !1)
            }
            t.ssoLogin = function(e) {
                void 0 === e && (e = {}), s() && window.gigya.accounts.sso.login(e)
            }, t.continueSso = function(e) {
                var t, i, u;
                return void 0 === e && (e = {}), n.__awaiter(this, void 0, void 0, (function() {
                    var c, g, d, l, p, f;
                    return n.__generator(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return c = window.gigya.logger.group("sso.continue"), s() ? (g = window.gigya.getUrlParam("ssoToken")) ? (d = (null === (i = null === (t = window.gigya.thisScript) || void 0 === t ? void 0 : t.globalConf) || void 0 === i ? void 0 : i.APIKey) || (null === (u = window.gigya.thisScript) || void 0 === u ? void 0 : u.APIKey), (p = o.get(d)) ? [3, 2] : [4, r.syncGroupToken(d)]) : (window.gigya.logger.warn("ssoToken must be present in the url"), [2, c.end()]) : [2, c.end()];
                            case 1:
                                p = n.sent(), n.label = 2;
                            case 2:
                                return (l = p) ? (f = {
                                    ssoToken: g,
                                    login_token: l,
                                    APIKey: d
                                }, e.sdk = "js_" + window.gigya.build.version, window.gigya.logger.info("redirect to sso.continue with params: ", f), c.end(), a.redirect("https://" + window.gigya._.getApiDomain() + "/accounts.sso.continue", [f, e], "POST"), [2]) : (window.gigya.logger.warn("can't continue with SSO login, missing local session"), [2, c.end()])
                        }
                    }))
                }))
            }
        },
        29: function(e, t) {
            function i() {
                var e = 0,
                    t = 0;
                return "number" == typeof window.pageYOffset ? (t = window.pageYOffset, e = window.pageXOffset) : document.body && (document.body.scrollLeft || document.body.scrollTop) ? (t = document.body.scrollTop, e = document.body.scrollLeft) : document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop) && (t = document.documentElement.scrollTop, e = document.documentElement.scrollLeft), {
                    left: e,
                    top: t
                }
            }

            function n() {
                var e, t, i = document.documentElement,
                    n = document.body;
                return window.innerHeight ? (e = window.innerHeight, t = window.innerWidth) : (0 == (e = i.clientHeight) && (e = n.clientHeight), 0 == (t = i.clientWidth) && (t = n.clientWidth)), {
                    w: t,
                    h: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getScroll = i, t.getFullSize = function() {
                var e = document.documentElement,
                    t = document.body,
                    i = e.clientHeight;
                0 == i && (i = t.clientHeight);
                var n = e.clientWidth;
                return 0 == n && (n = t.clientWidth), {
                    w: n,
                    h: i
                }
            }, t.getOrientation = function() {
                var e = parseInt(window.orientation || "0");
                return e < 0 && (e += 360), e
            }, t.getInnerSize = n, t.getMiddleCenter = function() {
                var e = i(),
                    t = n();
                return {
                    top: e.top + Math.floor(t.h / 2),
                    left: e.left + Math.floor(t.w / 2)
                }
            }, t.isRectHorizontallyVisible = function(e) {
                var t = i(),
                    o = n();
                return e.left >= t.left && e.right <= t.left + o.w
            }, t.isRectFullyVisible = function(e) {
                var t = i(),
                    o = n();
                return e.top >= t.top && e.bottom <= t.top + o.h && e.left >= t.left && e.right <= t.left + o.w
            }, t.scrollIntoView = function(e) {
                e && e.scrollIntoView && e.scrollIntoView()
            }
        },
        3: function(module, exports) {
            function serialize(e, t, i, n, o) {
                if (void 0 === t && (t = !1), void 0 === i && (i = !1), void 0 === n && (n = 0), void 0 === o && (o = 20), window.gigya.localInfo.isIE8) {
                    if (n || (n = 0), n > o) return "[Too deep]";
                    var r = "",
                        a = "",
                        s = "";
                    if (i) {
                        s = "\t", a = "\n";
                        for (var u = 0; u < n + 1; u++) r += s
                    }
                    var c = typeof e;
                    if ("function" == c) return c.toString();
                    if ("object" != c || null === e) return "string" == c && (e = '"' + e.replace(/(\"|\\)/g, "\\$1").replace(/\r\n|\r|\n/g, "\\n") + '"'), String(e);
                    var g, d, l = [],
                        p = e && e.constructor == Array;
                    if (p)
                        for (u = 0; u < e.length; u++) c = typeof(d = e[u]), null == d || "undefined" == c ? d = "" : "string" == c ? d = '"' + d.replace(/(\"|\\)/g, "\\$1").replace(/\r\n|\r|\n/g, "\\n") + '"' : "function" == c ? d = t ? "Function" : "" : d.parentNode && d.innerHTML ? d = "HTMLElement" : d.constructor == Date ? d = "" : "object" == c && null !== d && (d = serialize(d, t, i, n + 1)), "" != String(d) && l.push(r + s + String(d));
                    else
                        for (g in e) c = typeof(d = e[g]), null == d || "undefined" == c ? d = String(d) : "string" == c ? d = '"' + d.replace(/(\"|\\)/g, "\\$1").replace(/\r\n|\r|\n/g, "\\n") + '"' : "function" == c ? d = t ? "Function" : "" : d.parentNode && d.innerHTML ? d = "HTMLElement" : d.constructor == Date ? d = "" : "object" == c && null !== d && (d = a + serialize(d, t, i, n + 1)), "" != String(d) && l.push(r + s + '"' + g.replace(/(\"|\\)/g, "\\$1").replace(/\r\n|\r|\n/g, "\\n") + '":' + String(d));
                    return a + r + (p ? "[" : "{") + a + l.join("," + a) + a + r + (p ? "]" : "}")
                }
                return window.JSON.stringify(e)
            }

            function deserialize(json, defaultValue, scope) {
                if (!json || !json.replace(/^\s+|\s+$/g, "")) return defaultValue || {};
                try {
                    var keys = [],
                        values = [];
                    if (scope)
                        for (var key in scope) keys.push(key), values.push(scope[key]);
                    var fn = eval("(function(" + keys.join(",") + ") { return " + json.trim() + "; })");
                    return fn.apply(void 0, values)
                } catch (e) {
                    return console.warn("Error deserializing JavaScript", e), defaultValue || {}
                }
            }

            function parse(e, t) {
                if (window.gigya.localInfo.isIE8) return deserialize(e, t);
                try {
                    return window.JSON.parse(e)
                } catch (e) {
                    return t || {}
                }
            }
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.serialize = serialize, exports.deserialize = deserialize, exports.parse = parse
        },
        32: function(e, t) {
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e) {
                    e.GET = "GET", e.POST = "POST"
                }(t.RequestType || (t.RequestType = {}))
        },
        37: function(e, t, i) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = i(0),
                o = i(32),
                r = i(2),
                a = function() {
                    function e(e, t, i, n) {
                        var o = this;
                        void 0 === n && (n = {}), this.baseDomain = e, this.method = t, this.params = i, this.settings = n, this.retry = 0, this.getUrl = function() {
                            return window.gigya._.Uri.parse(o.baseDomain + "/" + o.method)
                        }
                    }
                    return e.prototype.send = function(e) {
                        return n.__awaiter(this, void 0, void 0, (function() {
                            return n.__generator(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        if (!r.localInfo.isOnLine()) return [2, this.networkErrorResponse()];
                                        if (this._isRequestPathManipulated()) return window.gigya.logger.warn("Aborting Request for " + this.method + ". Path manipulation detected."), [2];
                                        try {
                                            this.params = window.gigya.utils.object.decodeObjectKeys(this.params)
                                        } catch (e) {
                                            return window.gigya.logger.error("Request API Error - Failed to decode object keys", {
                                                exception: e,
                                                requestParams: JSON.stringify(this.params)
                                            }), [2]
                                        }
                                        return this.addDefaultParams(), [4, this.performSend(this._getRequestType(), e)];
                                    case 1:
                                        return [2, t.sent()]
                                }
                            }))
                        }))
                    }, e.prototype.handleResponse = function(e) {
                        var t = this;
                        if (this.settings.cacheTimeout && window.gigya.utils.sessionCache.set(this.getCacheKey(), 0 == e.errorCode ? e : null), null != this.retryTimerID && window.clearTimeout(this.retryTimerID), 100001 != e.errorCode) return this.dispose(), e;
                        var i = this._getDataPendingTimeout(this.retry++);
                        i > 0 && window.setTimeout((function() {
                            t.send()
                        }), i)
                    }, e.prototype.getCacheKey = function() {
                        return this.method + "_" + window.gigya.utils.keyValue.serialize(this.params)
                    }, e.prototype.getFullUrl = function() {
                        return this.getUrl().addToSearch(this._getFlattenParams()).href
                    }, e.prototype._isRequestPathManipulated = function() {
                        return this.getUrl().href.toLowerCase() !== (this.baseDomain + "/" + this.method).toLowerCase() || this.getUrl().search.length > 0
                    }, e.prototype.addDefaultParams = function() {
                        this.params.sdk = "js_" + window.gigya.build.version
                    }, e.prototype._getRequestUrlLength = function() {
                        return (this.getUrl().href + window.gigya.utils.keyValue.serialize(this._getFlattenParams())).length
                    }, e.prototype._getUrlLengthFields = function() {
                        var e = 0;
                        return (window.gigya.localInfo.isIE || window.gigya.localInfo.isEdgeLegacy) && (e = 2048), {
                            extraLength: e,
                            maxLength: 4096
                        }
                    }, e.prototype._getDataPendingTimeout = function(e) {
                        return e <= 4 ? 500 : e <= 8 ? 1e3 : e <= 21 ? 2e3 : e <= 39 ? 5e3 : -1
                    }, e.prototype._getRequestType = function() {
                        var e = this._getRequestUrlLength(),
                            t = this._getUrlLengthFields();
                        return e + t.extraLength <= t.maxLength && !this.settings.forcePost ? o.RequestType.GET : o.RequestType.POST
                    }, e.prototype._getFlattenParams = function() {
                        return window.gigya.utils.keyValue.deserialize(window.gigya.utils.keyValue.serialize(this.params))
                    }, e
                }();
            t.Request = a
        },
        4: function(e, t, i) {
            (function(e) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var n = i(3),
                    o = i(23);

                function r(e, t, i) {
                    if (!t) return e;
                    for (var n = e, o = t.split("."), r = 0; r < o.length; r++) {
                        var a = o[r],
                            s = null;
                        a.match(/\[[0-9]+]/) && (s = Number(a.match(/\[[0-9]+]/)[0].replace(/[\[\]]/g, ""))), a = a.split(/\[[0-9]+]/).join("");
                        var u = (s || 0 === s) && n[a] ? n[a][s] : n[a];
                        if (i && !n[a] ? n[a] = {} : i && !u && !1 !== u && (n[a] = []), !u && !1 !== u) return null;
                        n = u
                    }
                    return n
                }

                function a(e, t, i, n, r, s) {
                    if (void 0 === n && (n = 20), void 0 === r && (r = 0), r > n) return null;
                    if (void 0 === e || null == e) return o.default.isOn("removeUndefinedProperties") ? e : null;
                    if ("function" == typeof e && i) return null;
                    if (e.constructor == Array) {
                        for (var u = [], c = 0; c < e.length; c++) i && "function" == typeof e[c] || (u[c] = t ? a(e[c], t, i, n, r + 1, s) : e[c]);
                        return u
                    }
                    if ("object" == typeof e) {
                        var g = {};
                        for (var d in e) s && "context" == d || i && "function" == typeof e[d] || (g[d] = t ? a(e[d], t, i, n, r + 1, s) : e[d]);
                        return g
                    }
                    return e
                }

                function s(e, t, i) {
                    if (null != e) {
                        if (null == t && (t = {}), e.constructor == Array)
                            for (var n = 0; n < e.length; n++) s(e[n], t, i);
                        else if (i) {
                            var o = i.split("|"),
                                r = {};
                            for (var u in e) r[u.toLowerCase()] = 1;
                            for (var c = 0; c < o.length; c++) {
                                var g = o[c];
                                r[g.toLowerCase()] && (t[g] = e[g])
                            }
                        } else t = a(e, !1);
                        return t
                    }
                }
                t.removeUndefined = function(e) {
                    var t = {};
                    for (var i in e) null != e[i] && null != e[i] && (t[i] = e[i]);
                    return t
                }, t.expressionHelper = function(e) {
                    return e = e || {}, {
                        getField: function(t) {
                            if (t) {
                                var i, n = t.split("."),
                                    o = e;
                                for (i = 0; i < n.length; ++i) {
                                    if (null == o[n[i]]) return;
                                    o = o[n[i]]
                                }
                                return o
                            }
                        }
                    }
                }, t.getPropertyBySerializedName = r, t.setPropertyBySerializedName = function(e, t, i) {
                    var n = t.split("."),
                        o = n.pop();
                    r(e, n.join("."), !0)[o] = i
                }, t.add = function(e, t, i) {
                    for (var n in t) i && void 0 !== e[n] || (e[n] = t[n])
                }, t.getHash = function(e) {
                    var t = [];
                    for (var i in e) {
                        var o;
                        "object" == typeof e[i] ? o = n.serialize(e[i], !1) : e[i] && (o = e[i].toString()), t.push(i + "=" + o)
                    }
                    return t.sort().join("&")
                }, t.getMurmurHash = function(e, t) {
                    var i, n, o, r, a, s, u, c;
                    for (t || (t = 0), i = 3 & e.length, n = e.length - i, o = t, a = 3432918353, s = 461845907, c = 0; c < n;) u = 255 & e.charCodeAt(c) | (255 & e.charCodeAt(++c)) << 8 | (255 & e.charCodeAt(++c)) << 16 | (255 & e.charCodeAt(++c)) << 24, ++c, o = 27492 + (65535 & (r = 5 * (65535 & (o = (o ^= u = (65535 & (u = (u = (65535 & u) * a + (((u >>> 16) * a & 65535) << 16) & 4294967295) << 15 | u >>> 17)) * s + (((u >>> 16) * s & 65535) << 16) & 4294967295) << 13 | o >>> 19)) + ((5 * (o >>> 16) & 65535) << 16) & 4294967295)) + ((58964 + (r >>> 16) & 65535) << 16);
                    switch (u = 0, i) {
                        case 3:
                            u ^= (255 & e.charCodeAt(c + 2)) << 16;
                        case 2:
                            u ^= (255 & e.charCodeAt(c + 1)) << 8;
                        case 1:
                            o ^= u = (65535 & (u = (u = (65535 & (u ^= 255 & e.charCodeAt(c))) * a + (((u >>> 16) * a & 65535) << 16) & 4294967295) << 15 | u >>> 17)) * s + (((u >>> 16) * s & 65535) << 16) & 4294967295
                    }
                    return o ^= e.length, o = 2246822507 * (65535 & (o ^= o >>> 16)) + ((2246822507 * (o >>> 16) & 65535) << 16) & 4294967295, o = 3266489909 * (65535 & (o ^= o >>> 13)) + ((3266489909 * (o >>> 16) & 65535) << 16) & 4294967295, (o ^= o >>> 16) >>> 0
                }, t.clone = a, t.merge = function e(t, i) {
                    for (var n = {}, o = 0; o < t.length; o++)
                        if (t[o] && t[o].length)
                            for (var r = 0; r < t[o].length; r++)
                                for (var a in t[o][r]) n[a] = t[o][r][a];
                        else if (i)
                        for (var a in t[o]) "object" != typeof n[a] || n[a] instanceof Array ? n[a] = t[o][a] : n[a] = e([n[a], t[o][a]], !0);
                    else
                        for (var a in t[o]) n[a] = t[o][a];
                    return n
                }, t.unflatten = function(e) {
                    if (Object(e) !== e || Array.isArray(e)) return e;
                    var t = {};
                    for (var i in e) {
                        for (var n = t, o = "", r = i.replace(/\[([0-9])]/, ".$1").split("."), a = 0; a < r.length; a++) {
                            var s = !isNaN(Number(r[a]));
                            n = n[o] || (n[o] = s ? [] : {}), o = r[a]
                        }
                        n[o] = e[i]
                    }
                    return t[""] || {}
                }, t.flatten = function(e, t) {
                    void 0 === t && (t = !1);
                    var i = {};
                    return function e(n, o) {
                        if (Object(n) !== n) i[o] = n;
                        else if (Array.isArray(n)) {
                            for (var r = n.length, a = 0; a < r; a++) {
                                var s = t ? o + "[" + a + "]" : o + "." + a;
                                e(n[a], o ? s : String(a))
                            }
                            0 === r && (i[o] = [])
                        } else {
                            var u = !0;
                            for (var c in n) u = !1, e(n[c], o ? o + "." + c : c);
                            u && "" !== o && (i[o] = {})
                        }
                    }(e, ""), i
                }, t.extractProperties = s, t.extractProperty = function(e, t) {
                    return s(e, void 0, t)[t]
                }, t.parseToObject = function(e) {
                    try {
                        var t = window.JSON.parse(e);
                        if ("object" == typeof t) return t
                    } catch (e) {}
                }, t.removePropertiesPrefix = function(t, i) {
                    return void 0 === t && (t = {}), void 0 === i && (i = ""), Object.keys(t).reduce((function(n, o) {
                        var r;
                        return e(n, ((r = {})[o.replace(i, "")] = t[o], r))
                    }), {})
                }, t.normalizeObjectKeysToLowerCase = function(e) {
                    for (var t in e) e[t.toLowerCase()] = e[t];
                    return e
                }, t.decodeObjectKeys = function(e) {
                    var t = {};
                    for (var i in e) {
                        for (var n = i; - 1 !== n.indexOf("%");) n = decodeURIComponent(n);
                        t[n] = e[i]
                    }
                    return t
                }
            }).call(this, i(0).__assign)
        },
        41: function(e, t, i) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = i(4),
                o = i(9),
                r = i(6);
            t.redirect = function(e, t, i, a, s) {
                if (void 0 === s && (s = window.document), i && "post" == i.toLowerCase()) {
                    var u = s.createElement("form"),
                        c = [];
                    u.setAttribute("accept-charset", "UTF-8"), u.setAttribute("method", "POST"), u.setAttribute("action", e), a && u.setAttribute("target", a);
                    var g = n.merge(t);
                    for (var d in g) "number" != typeof g[d] && "boolean" != typeof g[d] && "string" != typeof g[d] || "eventName" == d || c.push('<textarea name="' + encodeURIComponent(d) + '">' + g[d].toString().replace(/\&/g, "&amp;") + "</textarea>");
                    u.innerHTML = c.join(""), u.style.display = "none", o.appendToBody(u, s), u.submit()
                } else {
                    for (var l = new r.Uri(e), p = {}, f = 0; f < t.length; f++) {
                        var h = t[f];
                        for (var w in h)
                            if (h.hasOwnProperty(w)) {
                                var y = h[w];
                                p[w] = y
                            }
                    }
                    l.addToSearch(p), s.location.href = l.toString()
                }
            }
        },
        43: function(e, t, i) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = i(2),
                o = function() {
                    function e(e, t, i) {
                        void 0 === e && (e = window.gigya.partnerSettings.ssoKey), void 0 === t && (t = window.gigya.utils.localStorage.initializeAdapter(window.gigya.utils.localStorage.CookieStorageAdapter)), void 0 === i && (i = n.localInfo.pageDomain), this._ssoKey = e, this._storage = t, this._pageDomain = i, this._cookieName = "apiDomain_" + this._ssoKey
                    }
                    return e.prototype.get = function() {
                        return this._ssoKey ? this._storage.getItem(this._cookieName) : void 0
                    }, e.prototype.set = function(e) {
                        this._ssoKey && (window.gigya.logger.info("setting as group api domain for " + this._ssoKey), this._storage.removeItem(this._cookieName), this._storage.setItem(this._cookieName, e, void 0, this._pageDomain))
                    }, e
                }();
            t.GroupApiDomainService = o
        },
        44: function(e, t, i) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n, o = i(0),
                r = i(58),
                a = {};

            function s(e) {
                return void 0 === e && (e = window.gigya.thisScript.APIKey), window.gigya.utils.cookie.get("gltexp_" + e)
            }

            function u(e) {
                return void 0 === e && (e = window.gigya.thisScript.APIKey), e ? "glt_" + e : "_gig_lt"
            }

            function c(e) {
                void 0 === e && (e = window.gigya.thisScript.APIKey);
                var t = window.gigya.utils.cookie.get(u(e));
                return t ? t.split("|")[0] : null
            }

            function g(e, t, i, o) {
                window.gigya.utils.localStorage.removeItem("gigyaSettings"), window.gigya.logger.info("setting a new login token"), e || (e = window.gigya.thisScript.APIKey), e ? (window.gigya.utils.cookie.set("glt_" + e, t, i), window.gigya.utils.cookie.remove("gac_" + e)) : window.gigya.utils.cookie.set("_gig_lt", t, i), n = o
            }

            function d(e) {
                return void 0 === e && (e = {}), o.__awaiter(this, void 0, void 0, (function() {
                    var t = this;
                    return o.__generator(this, (function(i) {
                        return [2, new gigya.Promise((function(i) {
                            window.gigya.utils.queue.hold("verifyLogin", "API"), window.gigya.accounts.verifyLogin({
                                ignoreApiQueue: !0,
                                suppressLoginEvent: !0,
                                include: window.gigya.utils.stringUtils.mergeCommaSeparatedValues("profile,data", window.gigya.thisScript.globalConf.include),
                                extraProfileFields: "samlData",
                                callback: function(n) {
                                    window.gigya.utils.queue.release("verifyLogin", "API"), window.gigya._.apiAdapters.isSessionVerified = 0 == n.errorCode;
                                    var r = n.source;
                                    window.gigya.events.global.dispatchWhenHandlerAdded({
                                        eventName: "socialize.login"
                                    }, null, (function(t, i) {
                                        window.gigya.socialize.getUserInfo({
                                            signIDs: !0,
                                            extraFields: "samlData",
                                            callback: function(o) {
                                                t || (t = {}), t = window.gigya.utils.object.merge([t, e]), 0 == n.errorCode && 0 == o.errorCode ? ((t = window.gigya._.addUserInfoToEvent(o, {
                                                    eventName: "login"
                                                }, !0)).source = r, t.newUser = !1, t.provider = "site", t.loginMode = "standard", t.user && (t.user.errorCode = o.errorCode, t.user.callId = o.callId)) : t.cancel = !0, i(t)
                                            }
                                        })
                                    })), window.gigya.events.global.dispatchWhenHandlerAdded({
                                        eventName: "accounts.login"
                                    }, null, (function(i, r) {
                                        return o.__awaiter(t, void 0, void 0, (function() {
                                            return o.__generator(this, (function(t) {
                                                switch (t.label) {
                                                    case 0:
                                                        return i || (i = {}), i = window.gigya.utils.object.merge([i, e]), 0 != n.errorCode ? [3, 3] : (i.eventName = "accounts.login", n.UID ? [3, 2] : [4, new gigya.Promise((function(e) {
                                                            return window.gigya.accounts.getAccountInfo({
                                                                callback: e,
                                                                include: window.gigya.utils.stringUtils.mergeCommaSeparatedValues("profile,data", window.gigya.thisScript.globalConf.include)
                                                            })
                                                        }))]);
                                                    case 1:
                                                        n = t.sent(), t.label = 2;
                                                    case 2:
                                                        return window.gigya.utils.object.extractProperties(n, i, "signature|UIDSig|timestamp|UIDSignature|signatureTimestamp|UID|profile|data|dataCenter|id_token|groups"), [3, 4];
                                                    case 3:
                                                        i.cancel = !0, t.label = 4;
                                                    case 4:
                                                        return r(i), [2]
                                                }
                                            }))
                                        }))
                                    })), i()
                                }
                            })
                        }))]
                    }))
                }))
            }

            function l(e) {
                void 0 === e && (e = window.gigya.thisScript.APIKey), window.gigya.partnerSettings.ssoKey && (window.gigya.logger.info("removing group login token"), r.removeGroupToken()), c(e) && window.gigya.logger.info("removing login token"), window.gigya.utils.cookie.remove("glt_" + e), window.gigya.utils.cookie.remove("_gig_lt"), window.gigya.utils.cookie.remove("gltexp_" + e)
            }

            function p() {
                var e = window.gigya.utils.cookie.getDefaultDomain();
                return window.gigya.utils.stringUtils.endsWith(e, window.gigya.defaultApiDomain)
            }
            t.activeNamespaces = {}, t.isValidGltExp = function(e) {
                return void 0 === e && (e = s()), !e || window.gigya.utils.gltexp.isValid(e)
            }, t.getGltexpCookie = s, t.setGltexp = function(e, t) {
                void 0 === t && (t = window.gigya.thisScript.APIKey), e && !p() && (window.gigya.utils.cookie.remove("gltexp_" + t), window.gigya.utils.cookie.set("gltexp_" + t, e))
            }, t.get = c, t.set = g, t.getCurrentSessionExpiration = function() {
                return n
            }, t.setFromGAC = function(e, t) {
                if (window.gigya.thisScript.APIKey) {
                    var i = window.gigya.utils.cookie.get("gac_" + window.gigya.thisScript.APIKey);
                    if (i && !e.neverTryGAC) {
                        if ('"' === i.charAt(0) && '"' === i.charAt(i.length - 1) && (i = i.substring(1, i.length - 1)), a[i]) return void t();
                        a[i] = !0, window.gigya.socialize.updateRefUID(), window.gigya.socialize.notifyLogin({
                            ignoreApiQueue: !0,
                            neverTryGAC: !0,
                            authCode: i,
                            APIKey: window.gigya.thisScript.APIKey,
                            client_id: window.gigya.thisScript.APIKey
                        }, {
                            callback: function() {
                                window.gigya.utils.cookie.remove("gac_" + window.gigya.thisScript.APIKey), t(), window.gigya.socialize.refreshUI({
                                    neverTryGAC: !0
                                })
                            }
                        })
                    } else t()
                } else t()
            }, t.setFromSsoResponse = function(e, t) {
                return void 0 === t && (t = window.gigya.thisScript.APIKey), o.__awaiter(this, void 0, void 0, (function() {
                    var i = this;
                    return o.__generator(this, (function(n) {
                        return [2, new gigya.Promise((function(n) {
                            return o.__awaiter(i, void 0, void 0, (function() {
                                var i, r, a;
                                return o.__generator(this, (function(o) {
                                    switch (o.label) {
                                        case 0:
                                            if (!e) return [2];
                                            switch (e.errorCode) {
                                                case 403005:
                                                    return [3, 1];
                                                case 403025:
                                                    return [3, 2];
                                                case 403032:
                                                case 0:
                                                    return [3, 3];
                                                case 500026:
                                                    return [3, 5]
                                            }
                                            return [3, 6];
                                        case 1:
                                            return window.gigya.logger.info("no group session found"), l(t), [3, 7];
                                        case 2:
                                            return window.gigya.logger.info("existing group session was revoked"), l(t), window.gigya.events.global.dispatchWhenHandlerAdded({
                                                eventName: "accounts.logout"
                                            }), window.gigya.events.global.dispatchWhenHandlerAdded({
                                                eventName: "logout"
                                            }), [3, 7];
                                        case 3:
                                            return e.login_token ? (window.gigya.logger.info("new session from group"), i = void 0, r = void 0, e.groupContext && (r = JSON.parse(e.groupContext)), p() || (i = e.gltexp ? window.gigya.utils.cookie.getInfiniteExpirationTimeInSeconds() : e.expires_in, g(t, e.login_token, i), a = "gltexp_" + t, e.gltexp && !window.gigya.utils.cookie.get(a) && window.gigya.utils.cookie.set(a, e.gltexp)), [4, d({
                                                expires_in: i,
                                                groupContext: r
                                            })]) : [2];
                                        case 4:
                                            return o.sent(), [3, 7];
                                        case 5:
                                            return window.gigya.logger.error("gigya: error loading sso frame", {
                                                res: e
                                            }), window.gigya.events.global.dispatchWhenHandlersAdded(["accounts.error", "socialize.error"], e), [3, 7];
                                        case 6:
                                            throw window.gigya.logger.error("sso: unsupported response"), "gigya: unsupported response from sso";
                                        case 7:
                                            return n(), [2]
                                    }
                                }))
                            }))
                        }))]
                    }))
                }))
            }, t.dispatchLoginEvent = d, t.remove = l, t.getTokenParam = function(e, t) {
                var i = window.gigya.utils.cookie.get(u(e));
                if (i) {
                    var n = i.split("|");
                    return n.length > 1 ? window.gigya.utils.keyValue.deserialize(n[1])[t] : null
                }
            }
        },
        5: function(module, exports, __webpack_require__) {
            Object.defineProperty(exports, "__esModule", {
                value: !0
            });
            var DOMUtils = __webpack_require__(9),
                cdn_1 = __webpack_require__(14),
                LocalInfo_1 = __webpack_require__(2);

            function callFunction(name, arParams) {
                var fn = eval(name),
                    arParts = name.split(".");
                arParts.splice(arParts.length - 1, 1);
                var scope = eval(arParts.join("."));
                fn.apply(scope, arParams)
            }

            function invokeOnPageLoad(e, t) {
                if (!document.readyState && document.body || "complete" === document.readyState || !t && "interactive" === document.readyState && document.body) e();
                else {
                    var i = !1,
                        n = function() {
                            i || (i = !0, e())
                        };
                    window.setTimeout(n, 2e4), DOMUtils.addEventListener(window, "load", n), DOMUtils.addEventListener(document, "DOMContentLoaded", n)
                }
            }

            function createAlias(e, t) {
                for (var i = e.split("."), n = window, o = 0; o < i.length - 1; o++) {
                    var r = i[o];
                    n[r] || (n[r] = {}), n = n[r]
                }
                n[i[i.length - 1]] = t
            }

            function debounce(e, t) {
                var i = void 0;
                return function() {
                    void 0 !== i && clearTimeout(i), i = setTimeout((function() {
                        i = void 0, e()
                    }), t)
                }
            }

            function addSrcToIFrameIfNeeded(e, t) {
                void 0 === t && (t = cdn_1.getCdnResource("/")), (LocalInfo_1.localInfo.isIOSWebView || LocalInfo_1.localInfo.isIOS && LocalInfo_1.localInfo.isWeChat) && e.setAttribute("src", t)
            }
            exports.callFunction = callFunction, exports.invokeOnPageLoad = invokeOnPageLoad, exports.createAlias = createAlias, exports.debounce = debounce, exports.addSrcToIFrameIfNeeded = addSrcToIFrameIfNeeded
        },
        57: function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getParentUrl = function(e, t) {
                return void 0 === e && (e = window), void 0 === t && (t = document), e.location != e.parent.location ? t.referrer : t.location.href
            }, t.getBodyElement = function(e) {
                return void 0 === e && (e = document), new gigya.Promise((function(t) {
                    e.body ? t(e.body) : e.addEventListener("DOMContentLoaded", (function() {
                        return t(e.body)
                    }))
                }))
            }, t.validateOrigin = function(e, t) {
                return 0 === e.toLowerCase().indexOf(t.toLowerCase())
            }, t.createIframe = function(e) {
                void 0 === e && (e = document);
                var t = e.createElement("iframe");
                return t.style.position = "absolute", t.style.height = "0px", t.style.width = "0px", t.style.display = "none", t.title = "Api Service", t.setAttribute("aria-hidden", "true"), t
            };
            var i = 1;
            t.generateId = function() {
                return String(i++)
            }, t.getAllClassMethodsNames = function(e) {
                var t = [],
                    i = function(e) {
                        return !!e.prototype
                    }(e) ? e.prototype : e;
                do {
                    try {
                        var n = Object.getOwnPropertyNames(i).map((function(e) {
                            return e.toString()
                        })).sort().filter((function(e, n, o) {
                            return "function" == typeof i[e] && "constructor" !== e && (0 == n || e !== o[n - 1]) && -1 === t.indexOf(e)
                        }));
                        t = t.concat(n)
                    } catch (e) {
                        for (var o = Object.getOwnPropertyNames(i).map((function(e) {
                                return e.toString()
                            })).sort(), r = (n = [], 0); r < o.length; r++) {
                            var a = o[r];
                            "function" != typeof i[a] || "constructor" === a || 0 != r && a === o[r - 1] || -1 !== t.indexOf(a) || n.push(a)
                        }
                        t = t.concat(n)
                    }
                } while ((i = Object.getPrototypeOf(i)) && Object.getPrototypeOf(i));
                return t
            }
        },
        58: function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = 0;

            function n(e, n) {
                if (window.gigya.partnerSettings.ssoKey) {
                    var o, r, a;
                    o = n ? window.gigya.utils.object.clone(n) : {};
                    var s = function(e) {
                        window.gigya.logger.debug("cleaning sso iframe"), r.parentNode.removeChild(r), clearTimeout(a), e && (e.errorCode && "string" == typeof e.errorCode && (e.errorCode = Number(e.errorCode)), e.expires_in && "string" == typeof e.expires_in && (e.expires_in = Number(e.expires_in))), n && n.callback && n.callback(e)
                    };
                    o.m = e, o.d = window.gigya.localInfo.protocol + "://" + document.location.hostname, document.location.port && (o.d += ":" + document.location.port), o.callbackID = "gig_sso_cb" + (new Date).getTime() + "_" + i++, o.sAPIKey = window.gigya.thisScript.APIKey, o[window.gigya.logger.configKey] = JSON.stringify(window.gigya.logger.getConfig());
                    var u = window.gigya.utils.keyValue.serialize(o),
                        c = function(i) {
                            void 0 === i && (i = 0), window.gigya.utils.xd.addMessageListener(o.callbackID, {}, !1, s, window.gigya._.MessagingMethod.PostMessage), r = function(e) {
                                var t = document.createElement("iframe");
                                window.gigya.localInfo.isIOS || window.gigya.localInfo.isIOSChrome || window.gigya.localInfo.isAndroid ? (t.style.width = "0px", t.style.height = "0px", t.style.display = "none") : (t.style.width = "30px", t.style.height = "10px", t.style.position = "absolute", t.style.top = "-1000px", t.style.left = "-1000px");
                                return t.id = "gig_sso_" + e, window.gigya.utils.functions.addSrcToIFrameIfNeeded(t), t
                            }(o.callbackID);
                            var n = function() {
                                a = setTimeout((function() {
                                    i <= 0 ? window.gigya.logger.error("SSO Communication Timeout", {
                                        IE11PrivateMode: window.gigya.localInfo.isIE11 && !window.indexedDB,
                                        mode: e
                                    }) : (window.gigya.utils.xd.removeMessageListener(o.callbackID), window.gigya.utils.DOM.removeElement(r), c(i - 1))
                                }), t._requestTimeout);
                                var s = window.gigya.utils.keyValue.serialize({
                                    APIKey: window.gigya.partnerSettings.ssoKey,
                                    ssoSegment: window.gigya.partnerSettings.ssoSegment || "",
                                    version: window.gigya.build.version,
                                    build: window.gigya.build.number || -1
                                });
                                r.src = "https://" + (window.gigya.thisScript.globalConf.storageDomainOverride || window.gigya._.getGigyaDomain("cdns")) + "/gs/sso.htm?" + s + "#" + u, window.gigya.utils.DOM.removeEventListener(r, "load", n)
                            };
                            window.gigya.utils.DOM.addEventListener(r, "load", n), window.gigya.logger.debug("opening sso iframe", o), document.body ? window.gigya.utils.DOM.appendToBody(r) : window.gigya.utils.functions.invokeOnPageLoad((function() {
                                return window.gigya.utils.DOM.appendToBody(r)
                            }))
                        };
                    c(3)
                } else n && n.callback && n.callback({})
            }

            function o(e) {
                e.gltexp || (e.gltexp = window.gigya.utils.cookie.get("gltexp_" + window.gigya.thisScript.APIKey)), n("setToken", e)
            }
            t._requestTimeout = 3e3, t._request = n, t.getGroupToken = function(e) {
                window.gigya.logger.info("trying to get sso group login token"), n("getToken", {
                    callback: function(i) {
                        t._storedLoginTokenExp = i.gltexp, e && e.callback && e.callback(i)
                    }
                })
            }, t.setGroupTokenFromResponse = function(e, t, i) {
                var n;
                if (0 === (t = "string" == typeof t && t ? Number(t) : t)) n = 0;
                else {
                    var r = void 0;
                    r = t ? 1e3 * Number(t) : 47304e7, n = Date.now() + r
                }
                o({
                    lt: e,
                    expiration: n,
                    callback: i
                })
            }, t.setGroupToken = o, t.logout = function(e) {
                n("logout", e)
            }, t.removeGroupToken = function(e) {
                n("removeToken", e)
            }, t.setLoginTokenExp = function(e, i) {
                void 0 === i && (i = !0), i && t._storedLoginTokenExp && e.loginTokenExp === t._storedLoginTokenExp ? e.callback && e.callback({
                    gltexp: t._storedLoginTokenExp
                }) : (t._storedLoginTokenExp = e.loginTokenExp, n("setLoginTokenExp", e))
            }, t.getLoginTokenExp = function(e) {
                n("getLoginTokenExp", e)
            }, t.checkTokenRenew = function(e) {
                window.gigya.logger.info("verifying login token with sso group"), n("checkTokenRenew", e)
            }, t.syncCanaryIndication = function(e) {
                n("syncCanaryIndication", e)
            }, t.setGroupContextCookie = function(e) {
                n("setGroupContext", e)
            }
        },
        6: function(e, t, i) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = i(0),
                o = i(8),
                r = function() {
                    function e(e, t) {
                        void 0 === t && (t = !0), this._anchor = document.createElement("a");
                        var i = "http:" == document.location.protocol ? "http" : "https";
                        t && -1 === e.indexOf("://") && "/" !== e.charAt(0) && (e = i + "://" + e), this._anchor.href = e
                    }
                    return Object.defineProperty(e.prototype, "domain", {
                        get: function() {
                            return this._anchor.hostname
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "path", {
                        get: function() {
                            return this._anchor.pathname
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "href", {
                        get: function() {
                            return this._anchor.href
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "search", {
                        get: function() {
                            return this._anchor.search.slice(1)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "hash", {
                        get: function() {
                            return this._anchor.hash.slice(1)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), e.prototype.toString = function() {
                        return this._anchor.href
                    }, e.prototype.addToSearch = function(e) {
                        for (var t in e) {
                            var i = e[t];
                            if (("boolean" == typeof i || "number" == typeof i || "string" == typeof i) && "eventName" != t) {
                                var n = this._anchor.search ? "&" : "";
                                this._anchor.search += "" + n + t + "=" + encodeURIComponent(e[t])
                            }
                        }
                        return this
                    }, e.prototype.fetch = function(e) {
                        return void 0 === e && (e = 0), n.__awaiter(this, void 0, void 0, (function() {
                            var t, i;
                            return n.__generator(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        return n.trys.push([0, 5, , 8]), window.fetch ? [4, this.browserFetch()] : [3, 2];
                                    case 1:
                                        return t = n.sent(), [3, 4];
                                    case 2:
                                        return [4, this.xhr()];
                                    case 3:
                                        t = n.sent(), n.label = 4;
                                    case 4:
                                        return [2, t];
                                    case 5:
                                        if (i = n.sent(), e <= 0) throw new Error("fetch failed: " + i);
                                        return [4, this.delay(1)];
                                    case 6:
                                        return n.sent(), [4, this.fetch(e - 1)];
                                    case 7:
                                        return [2, n.sent()];
                                    case 8:
                                        return [2]
                                }
                            }))
                        }))
                    }, e.prototype.isBaseOf = function(t) {
                        return e.parse(t).isIn(this)
                    }, e.prototype.isIn = function(t) {
                        return "string" == typeof t && (t = e.parse(t)), (this.domain == t.domain || this.isSubDomainOf(t)) && (!t.path || 0 == this.path.indexOf(t.path))
                    }, e.prototype.isForSubDomains = function() {
                        return 0 == this.domain.indexOf(".")
                    }, e.prototype.isSubDomainOf = function(e) {
                        var t = "";
                        return e.isForSubDomains() || (t = "."), t += e.domain, o.endsWith(this.domain, t)
                    }, e.parse = function(t, i) {
                        if (void 0 === i && (i = !0), t) return new e(t, i)
                    }, e.prototype.browserFetch = function() {
                        return n.__awaiter(this, void 0, void 0, (function() {
                            var e, t;
                            return n.__generator(this, (function(i) {
                                switch (i.label) {
                                    case 0:
                                        return e = this.toString(), [4, window.fetch(e)];
                                    case 1:
                                        if (!(t = i.sent()).ok) throw new Error("fetch failed");
                                        return [2, t.json()]
                                }
                            }))
                        }))
                    }, e.prototype.xhr = function() {
                        var e = this.toString();
                        return new gigya.Promise((function(t, i) {
                            var n = new XMLHttpRequest;
                            n.open("GET", e), n.send(), n.onerror = i, n.onload = function() {
                                if (4 !== n.readyState || 200 !== n.status) return i("xhr failed - " + n.status + " - " + n.statusText);
                                try {
                                    var e = JSON.parse(n.responseText);
                                    return t(e)
                                } catch (e) {
                                    return i(e)
                                }
                            }
                        }))
                    }, e.prototype.delay = function(e) {
                        return n.__awaiter(this, void 0, void 0, (function() {
                            return n.__generator(this, (function(t) {
                                return [2, new gigya.Promise((function(t) {
                                    return setTimeout(t, e)
                                }))]
                            }))
                        }))
                    }, e
                }();
            t.Uri = r
        },
        63: function(e, t) {
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.isSessionVerified = !1,
                function(e) {
                    e[e.Social = 0] = "Social", e[e.Sso = 1] = "Sso"
                }(t.OAuthMode || (t.OAuthMode = {}))
        },
        67: function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isSignalRequest = function(e) {
                return Boolean(e.signal)
            }
        },
        68: function(e, t, i) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = i(0),
                o = i(43),
                r = i(87);
            t.TokenKeys = {
                GMID: "gig_gmid",
                UCID: "gig_ucid",
                GMID_TICKET: "gmidTicket",
                GMID_TICKET_EXPIRATION_TIME: "gmidTicketExpiration"
            };
            var a = function() {
                function e(e, t, i, n, a, s) {
                    void 0 === n && (n = new o.GroupApiDomainService), void 0 === a && (a = new r.RequestProvider), this._apiKey = e, this._hasGmid = t, this._domainResolver = i, this._groupApiDomainService = n, this._requestProvider = a, s && (this._storage = s)
                }
                return e.prototype.getApiDomain = function(e) {
                    return n.__awaiter(this, void 0, void 0, (function() {
                        return n.__generator(this, (function(t) {
                            return [2, this._domainResolver.getApiDomain(e)]
                        }))
                    }))
                }, e.prototype.bootstrap = function(e) {
                    return void 0 === e && (e = !1), n.__awaiter(this, void 0, void 0, (function() {
                        var t, i, o, r, a;
                        return n.__generator(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return t = window.gigya.logger.group("bootstrap api service"), this._storage ? [3, 2] : (window.gigya.logger.debug("init storage"), i = this, [4, new gigya.Promise((function(e) {
                                        window.gigya.utils.localStorage.waitForService((function(t) {
                                            e(t)
                                        }))
                                    }))]);
                                case 1:
                                    i._storage = n.sent(), n.label = 2;
                                case 2:
                                    return !this._hasGmid || e ? [3, 3] : (window.gigya.logger.info("already has gmid"), [3, 10]);
                                case 3:
                                    if (window.gigya.logger.info(this._hasGmid ? "forcing bootstrap" : "no gmid set"), this._useStorage || !this.canSaveGmidAsCookie()) return [3, 8];
                                    window.gigya.logger.info("save gmid as cookie"), n.label = 4;
                                case 4:
                                    return n.trys.push([4, 6, , 7]), [4, this.sendRequest({
                                        methodName: "accounts.webSdkBootstrap",
                                        params: {
                                            apiKey: this._apiKey
                                        }
                                    })];
                                case 5:
                                    if (0 !== (o = n.sent()).errorCode) throw "error bootstrapping sdk\n" + JSON.stringify(o, null, 4);
                                    return [3, 7];
                                case 6:
                                    throw r = n.sent(), new Error("accounts.webSdkBootstrap failed: " + r);
                                case 7:
                                    return [3, 10];
                                case 8:
                                    return window.gigya.logger.info("save gmid in storage"), [4, this.setupWithStorage()];
                                case 9:
                                    n.sent(), this._useStorage = !0, n.label = 10;
                                case 10:
                                    return this._useStorage ? [4, this.getGmidTicket()] : [3, 12];
                                case 11:
                                    return a = n.sent(), [3, 13];
                                case 12:
                                    this.cleanStorage(), n.label = 13;
                                case 13:
                                    return t.end(), [2, {
                                        ticketInfo: a
                                    }]
                            }
                        }))
                    }))
                }, e.prototype.setGroupApiDomain = function(e) {
                    return n.__awaiter(this, void 0, void 0, (function() {
                        return n.__generator(this, (function(t) {
                            return window.gigya._.getBaseDomain(window.gigya.partnerSettings.baseDomains, this._domainResolver.originDomain, ["gigya.com", "gigya-api.cn", window.gigya.defaultApiDomain]) === window.gigya.defaultApiDomain && this._groupApiDomainService.set(e), [2]
                        }))
                    }))
                }, e.prototype.canSaveGmidAsCookie = function() {
                    return this._domainResolver.isApiDomainFirstParty || window.gigya.utils.cookie.canSaveCookie()
                }, e.prototype.sendRequest = function(e) {
                    return n.__awaiter(this, void 0, void 0, (function() {
                        var i, o, r, a;
                        return n.__generator(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return e ? (i = e.methodName, (o = window.gigya.utils.object.clone(e.params, !0, !0)).pageURL = this._domainResolver.originDomain, this._useStorage && (o.gmid = this._storage.getItem(t.TokenKeys.GMID), o.ucid = this._storage.getItem(t.TokenKeys.UCID)), a = "https://", [4, this.getApiDomain(i)]) : (window.gigya.logger.error("ApiService: request data must has methodName and params"), [2]);
                                case 1:
                                    return r = a + n.sent(), [4, this._requestProvider.send(r, i, o, e.settings)];
                                case 2:
                                    return [2, n.sent()]
                            }
                        }))
                    }))
                }, e.prototype.setupWithStorage = function() {
                    return n.__awaiter(this, void 0, void 0, (function() {
                        var e, i, o, r;
                        return n.__generator(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return e = Boolean(this._storage.getItem(t.TokenKeys.GMID)), i = parseInt(this._storage.getItem(t.TokenKeys.GMID_TICKET_EXPIRATION_TIME)), e ? [3, 2] : (window.gigya.logger.info("getting gmid by endpoint"), [4, this.getIds()]);
                                case 1:
                                    if (!(o = n.sent()).gcid || !o.ucid) throw "ApiService getIDs: the request to the endpoint failed";
                                    return window.gigya.logger.info("setting gmid in storage"), this._storage.setItem(t.TokenKeys.GMID, o.gcid), this._storage.setItem(t.TokenKeys.UCID, o.ucid), r = this.createTicketResponse(o.gmidTicket), this.updateGmidTicket(r), [3, 3];
                                case 2:
                                    window.gigya.utils.validation.isLaterThanNow(i) ? window.gigya.logger.info("already has gmid in storage") : this.refreshGmidTicketFromServer(), n.label = 3;
                                case 3:
                                    return [2]
                            }
                        }))
                    }))
                }, e.prototype.getGmidTicket = function(e) {
                    return void 0 === e && (e = !1), n.__awaiter(this, void 0, void 0, (function() {
                        var i, o;
                        return n.__generator(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return (i = this._storage.getItem(t.TokenKeys.GMID_TICKET)) || e ? [3, 1] : [2, void 0];
                                case 1:
                                    return o = parseInt(this._storage.getItem(t.TokenKeys.GMID_TICKET_EXPIRATION_TIME)), !e && i && window.gigya.utils.validation.isLaterThanNow(o) ? [2, {
                                        gmidTicket: i,
                                        expirationTime: parseInt(this._storage.getItem(t.TokenKeys.GMID_TICKET_EXPIRATION_TIME))
                                    }] : [3, 2];
                                case 2:
                                    return this.deleteGmidTicket(), [4, this.refreshGmidTicketFromServer()];
                                case 3:
                                    return [2, n.sent()]
                            }
                        }))
                    }))
                }, e.prototype.refreshGmidTicketFromServer = function() {
                    return n.__awaiter(this, void 0, void 0, (function() {
                        var e;
                        return n.__generator(this, (function(i) {
                            switch (i.label) {
                                case 0:
                                    return window.gigya.logger.info("refreshing gmid ticket"), [4, this.createGmidTicket(this._storage.getItem(t.TokenKeys.GMID))];
                                case 1:
                                    return (e = i.sent()) && e.gmidTicket && this.updateGmidTicket(e), [2, e]
                            }
                        }))
                    }))
                }, e.prototype.updateGmidTicket = function(e) {
                    window.gigya.logger.info("updating gmid ticket", e), this._storage.setItem(t.TokenKeys.GMID_TICKET, e.gmidTicket), this._storage.setItem(t.TokenKeys.GMID_TICKET_EXPIRATION_TIME, String(e.expirationTime))
                }, e.prototype.deleteGmidTicket = function() {
                    this._storage.removeItem(t.TokenKeys.GMID_TICKET), this._storage.removeItem(t.TokenKeys.GMID_TICKET_EXPIRATION_TIME)
                }, e.prototype.cleanStorage = function() {
                    this._storage.removeItem(t.TokenKeys.GMID), this._storage.removeItem(t.TokenKeys.UCID), this.deleteGmidTicket()
                }, e.prototype.getIds = function() {
                    return this.sendRequest({
                        methodName: "socialize.getIDs",
                        params: {
                            APIKey: this._apiKey,
                            includeTicket: !0
                        }
                    })
                }, e.prototype.createGmidTicket = function(e, t) {
                    var i = this;
                    void 0 === t && (t = window.gigya.partnerSettings.gmidTicketExpiration || 3600);
                    var n = {
                        apiKey: this._apiKey,
                        expires: t
                    };
                    return e && (n.gmid = e), this.sendRequest({
                        methodName: "socialize.getGmidTicket",
                        params: n
                    }).then((function(e) {
                        if (e && e.gmidTicket) return i.createTicketResponse(e.gmidTicket);
                        window.gigya.logger.error("Failed to establish gmidTicket", {
                            response: JSON.stringify(e),
                            method: "socialize.getGmidTicket"
                        }), i.deleteGmidTicket()
                    }))
                }, e.prototype.createTicketResponse = function(e) {
                    var t = new Date;
                    return t.setHours(t.getHours() + 1), {
                        gmidTicket: e,
                        expirationTime: t.getTime()
                    }
                }, e
            }();
            t.ApiService = a
        },
        8: function(e, t) {
            function i(e) {
                return e.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1")
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.trim = function(e) {
                return e.replace(/^\s*(\S*(.*\S)?)\s*$/, "$1")
            }, t.format = function(e) {
                for (var t = [], i = 1; i < arguments.length; i++) t[i - 1] = arguments[i];
                for (var n = 0; n < arguments.length - 1; n++) null != arguments[n + 1] && (e = e.split("{" + n + "}").join(arguments[n + 1]));
                return e
            }, t.capitalize = function(e) {
                return e.substring(0, 1).toUpperCase() + e.substring(1)
            }, t.endsWith = function(e, t) {
                return -1 !== e.indexOf(t, e.length - t.length)
            }, t.escapeRegExp = i, t.replaceAll = function(e, t, n) {
                return t ? e.replace(new RegExp(i(t), "g"), n) : e
            }, t.mergeCommaSeparatedValues = function(e, t) {
                void 0 === e && (e = ""), void 0 === t && (t = "");
                var i = e.concat(",", t).split(",");
                return window.gigya.utils.array.getUniqueValues(i).filter((function(e) {
                    return e
                })).join(",")
            }
        },
        86: function(e, t, i) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = i(0),
                o = i(57),
                r = i(67),
                a = function() {
                    function e(e, t, i, a, s) {
                        var u = this;
                        void 0 === t && (t = o.getParentUrl()), void 0 === i && (i = o.getAllClassMethodsNames(e)), void 0 === a && (a = window.parent), void 0 === s && (s = window), this._service = e, this.origin = t, this._allowedMethods = i, this._target = a, this._win = s, this.stopCancellers = [], this._listening = !1, this.onRequest = function(e) {
                            return n.__awaiter(u, void 0, void 0, (function() {
                                var t, i;
                                return n.__generator(this, (function(n) {
                                    switch (n.label) {
                                        case 0:
                                            if (!o.validateOrigin(this.origin, e.origin)) return [3, 7];
                                            t = JSON.parse(e.data), n.label = 1;
                                        case 1:
                                            return n.trys.push([1, 6, , 7]), r.isSignalRequest(t) ? [4, this.handleSignalRequest(t)] : [3, 3];
                                        case 2:
                                            return n.sent(), [3, 5];
                                        case 3:
                                            return [4, this.handleProxyRequest(t)];
                                        case 4:
                                            n.sent(), n.label = 5;
                                        case 5:
                                            return [3, 7];
                                        case 6:
                                            return i = n.sent(), this.postError({
                                                res: i.message || i,
                                                id: t.id
                                            }), [3, 7];
                                        case 7:
                                            return [2]
                                    }
                                }))
                            }))
                        }
                    }
                    return Object.defineProperty(e.prototype, "isListening", {
                        get: function() {
                            return this._listening
                        },
                        enumerable: !0,
                        configurable: !0
                    }), e.prototype.listen = function(e) {
                        var t = this;
                        this.isListening || this._win.setTimeout((function() {
                            t._win.addEventListener("message", t.onRequest, !0), t.postMessage({
                                id: void 0,
                                signal: "listening",
                                res: e
                            }), t._listening = !0
                        }), 1)
                    }, e.prototype.postError = function(e) {
                        e.signal = "error", this.postMessage(e)
                    }, e.prototype.stopListen = function() {
                        this.isListening && (this._win.removeEventListener("message", this.onRequest, !0), this._listening = !1)
                    }, e.prototype.handleSignalRequest = function(e) {
                        return n.__awaiter(this, void 0, void 0, (function() {
                            var t, i, o;
                            return n.__generator(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        switch (e.signal) {
                                            case "stop":
                                                return [3, 1]
                                        }
                                        return [3, 7];
                                    case 1:
                                        return [4, this.getCancelResult()];
                                    case 2:
                                        return t = n.sent(), i = void 0, t ? [3, 5] : (this.stopListen(), o = void 0, this.onStop && (o = this.onStop()).then ? [4, o] : [3, 4]);
                                    case 3:
                                        o = n.sent(), n.label = 4;
                                    case 4:
                                        return i = {
                                            id: e.id,
                                            signal: "stop",
                                            res: o
                                        }, [3, 6];
                                    case 5:
                                        i = {
                                            id: e.id,
                                            signal: "error",
                                            res: t
                                        }, n.label = 6;
                                    case 6:
                                        return this.postMessage(i), [3, 8];
                                    case 7:
                                        return [3, 8];
                                    case 8:
                                        return [2]
                                }
                            }))
                        }))
                    }, e.prototype.getCancelResult = function() {
                        return n.__awaiter(this, void 0, void 0, (function() {
                            var e, t, i, o;
                            return n.__generator(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        e = 0, t = this.stopCancellers, n.label = 1;
                                    case 1:
                                        return e < t.length ? (i = t[e], (o = i()).then ? [4, o] : [3, 3]) : [3, 5];
                                    case 2:
                                        o = n.sent(), n.label = 3;
                                    case 3:
                                        if (o) return [2, o];
                                        n.label = 4;
                                    case 4:
                                        return e++, [3, 1];
                                    case 5:
                                        return [2, void 0]
                                }
                            }))
                        }))
                    }, e.prototype.handleProxyRequest = function(e) {
                        return n.__awaiter(this, void 0, void 0, (function() {
                            var t;
                            return n.__generator(this, (function(i) {
                                switch (i.label) {
                                    case 0:
                                        return this.validateRequest(e), [4, this.forwardToService(e)];
                                    case 1:
                                        return t = i.sent(), this.postMessage({
                                            id: e.id,
                                            res: t
                                        }), [2]
                                }
                            }))
                        }))
                    }, e.prototype.validateRequest = function(e) {
                        if (!e.id || !e.methodName || this._allowedMethods.indexOf(e.methodName) < 0) throw "proxy request in invalid format"
                    }, e.prototype.forwardToService = function(e) {
                        return n.__awaiter(this, void 0, void 0, (function() {
                            var t, i;
                            return n.__generator(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        return t = this._service[e.methodName], (i = t.apply(this._service, e.params)) && i.then ? [4, i] : [3, 2];
                                    case 1:
                                        i = n.sent(), n.label = 2;
                                    case 2:
                                        return [2, i]
                                }
                            }))
                        }))
                    }, e.prototype.postMessage = function(e) {
                        var t = "object" == typeof e ? JSON.stringify(e) : e;
                        this._target.postMessage(t, this.origin)
                    }, e
                }();
            t.ProxyListener = a
        },
        87: function(e, t, i) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = i(0),
                o = function() {
                    function e(e, t, i, n) {
                        void 0 === e && (e = window.gigya.XhrRequest), void 0 === t && (t = window.gigya.JsonpRequest), void 0 === i && (i = 1e4), void 0 === n && (n = window), this._xhrRequest = e, this._jsonpRequest = t, this.timeout = i, this._win = n
                    }
                    return e.prototype.send = function(e, t, i, o) {
                        return n.__awaiter(this, void 0, void 0, (function() {
                            var r = this;
                            return n.__generator(this, (function(n) {
                                return [2, new gigya.Promise((function(n, a) {
                                    var s = r._win.setTimeout((function() {
                                            return a("API request timeout")
                                        }), r.timeout),
                                        u = function(e) {
                                            r._win.clearTimeout(s), n(r._validateAndHandleResponse(e))
                                        };
                                    if (!window.gigya.localInfo.isXhrEnabled || r._isXhrNotSupported(t)) new r._jsonpRequest(e, t, i, u, o).send();
                                    else try {
                                        new r._xhrRequest(e, t, i, o).send().then(n).catch((function(n) {
                                            r._fallbackToJsonPIfAllowed(e, t, i, o, u, n)
                                        }))
                                    } catch (n) {
                                        r._fallbackToJsonPIfAllowed(e, t, i, o, u, n)
                                    }
                                }))]
                            }))
                        }))
                    }, e.prototype._fallbackToJsonPIfAllowed = function(e, t, i, n, o, r) {
                        if (window.gigya.partnerSettings.blockJsonpFallback) return o(r);
                        window.gigya.localInfo.isXhrEnabled = !1, window.gigya.logger.report("XHR request failed, fallback to JsonP", {
                            methodName: t,
                            params: i,
                            settings: n,
                            error: r
                        }), new this._jsonpRequest(e, t, i, o, n).send()
                    }, e.prototype._validateAndHandleResponse = function(e) {
                        var t = window.gigya.utils.JSON.serialize(e);
                        return window.gigya.utils.JSON.deserialize(t, void 0) || (e = {
                            errorCode: 400004,
                            errorMessage: "Invalid parameter format.\nOne of the parameters of this request has been set with a value which is not in the expected format."
                        }), e
                    }, e.prototype._isXhrNotSupported = function(e) {
                        for (var t = !1, i = 0, n = ["gscounters", "ids", "ds", "gcs", "comments", "gm"]; i < n.length; i++) {
                            var o = n[i];
                            0 === e.indexOf(o) && (t = !0)
                        }
                        return t
                    }, e
                }();
            t.RequestProvider = o
        },
        88: function(e, t, i) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = i(0),
                o = i(32),
                r = i(37),
                a = "gigyaRequestForms_" + Date.now();

            function s(e, t) {
                if (!t && e && (t = e.context), t) {
                    var i = u[t];
                    if (i) {
                        var n = i.handleResponse(e);
                        i.inProgress = !1, i.callback(n)
                    }
                }
            }
            t.callback = s;
            var u = {},
                c = function(e) {
                    function t(t, i, n, o, r, a) {
                        void 0 === r && (r = {}), void 0 === a && (a = function(e, t, i) {
                            var n = i.jsSdkRequestId;
                            if (n) return n;
                            if (i.disableCache || window.gigya.localInfo.isSafari || window.gigya.localInfo.isIE10 && e.indexOf("accounts.getAccountInfo") > -1) return "R" + (new Date).getTime() + "_" + Math.random();
                            var o = window.gigya.utils.object.clone(t);
                            for (var r in o) o.hasOwnProperty(r) && (0 !== r.indexOf("fb_") && "source" !== r && "sourceData" !== r || delete o[r]);
                            return "R" + window.gigya.utils.object.getMurmurHash(e + window.gigya.utils.object.getHash(o))
                        }(i, n, r));
                        var s = e.call(this, t, i, n, r) || this;
                        return s.callback = o, s.id = a, s.ifrName = "gigyaPostIframe_" + (new Date).getTime(), s
                    }
                    return n.__extends(t, e), t.prototype.performSend = function(e, t) {
                        if (!this.inProgress && (this.inProgress = !0, this.updatePendingRequestObject(), !this.isRequestCached(t))) switch (e) {
                            case o.RequestType.GET:
                                window.gigya.utils.script.load(this.getFullUrl());
                                break;
                            case o.RequestType.POST:
                                this.postRequest();
                                break;
                            default:
                                return
                        }
                    }, t.prototype.isRequestCached = function(e) {
                        var t = this;
                        if (!e && this.settings.cacheTimeout) {
                            var i = this.getCacheKey();
                            return window.gigya.utils.sessionCache.get(i, this.settings.cacheTimeout, (function(e) {
                                e ? (delete t.settings.cacheTimeout, s(e, t.id)) : (t.inProgress = !1, t.send(!0))
                            })), !0
                        }
                        return !1
                    }, t.prototype.addDefaultParams = function() {
                        e.prototype.addDefaultParams.call(this), this.params.format = "jsonp", this.params.callback = "gigya.callback", this.params.context = this.id
                    }, t.prototype.updatePendingRequestObject = function() {
                        u[this.id] = this
                    }, t.prototype.dispose = function() {
                        delete u[this.id], this.postContainerElem && window.gigya.utils.DOM.removeElement(this.postContainerElem), delete this.postContainerElem
                    }, t.prototype.networkErrorResponse = function() {
                        u[this.id] || (u[this.id] = this), s({
                            context: this.id,
                            errorCode: 500026,
                            errorMessage: "Network_error"
                        })
                    }, t.prototype.createParamFormElements = function() {
                        var e = document.createDocumentFragment();
                        for (var t in this.params) {
                            var i = window.gigya.utils.DOM.createElementWithAttributes("textarea", {
                                name: t,
                                value: "object" == typeof this.params[t] ? window.gigya.utils.URL.URLEncode(window.gigya.utils.JSON.serialize(this.params[t])) : this.params[t]
                            });
                            e.appendChild(i)
                        }
                        return e
                    }, t.prototype.getPostContainer = function() {
                        var e, t = this;
                        if (!this.postContainerElem) {
                            e = document.createElement("span");
                            var i, n = this.ifrName + "form",
                                o = this.id,
                                r = window.gigya.utils.DOM.createElementWithAttributes("form", {
                                    acceptCharset: "UTF-8",
                                    id: n,
                                    method: "post",
                                    action: this.getUrl() + "?context=" + this.id + "&&saveResponseID=" + this.id,
                                    target: this.ifrName
                                }),
                                a = window.gigya.utils.DOM.createElementWithAttributes("input", {
                                    type: "hidden",
                                    name: "utf8",
                                    value: "&#x2713;"
                                }),
                                s = window.gigya.utils.DOM.createElementWithAttributes("input", {
                                    type: "submit"
                                });
                            r.appendChild(this.createParamFormElements()), r.appendChild(a), r.appendChild(s), e.appendChild(r);
                            var u = window.gigya.utils.DOM.createElement("iframe", this.ifrName);
                            u.setAttribute("id", this.ifrName), window.gigya.utils.functions.addSrcToIFrameIfNeeded(u), window.gigya.utils.DOM.addEventListener(u, "load", (function() {
                                i ? t.getSavedFormResponse(o) : (window.setTimeout((function() {
                                    var e = document.getElementById(n);
                                    e && e.submit()
                                }), 10), i = !0)
                            })), e.appendChild(u), this.postContainerElem = e
                        }
                        return e
                    }, t.prototype.getSavedFormResponse = function(e) {
                        var i, n = this;
                        new t(this.baseDomain, "socialize.getSavedResponse", {
                            APIKey: this.params.APIKey,
                            saveResponseID: this.id,
                            ucid: this.params.ucid,
                            pageURL: null === (i = this.params.pageURL) || void 0 === i ? void 0 : i.substr(0, 1e3),
                            noAuth: !0,
                            sdk: "js_" + window.gigya.build.version
                        }, (function(e) {
                            var t = n.handleResponse(e);
                            n.callback(t)
                        }), void 0, e).send()
                    }, t.prototype.postRequest = function() {
                        var e = this;
                        window.gigya.utils.functions.invokeOnPageLoad((function() {
                            var t = document.getElementById(a);
                            null == t && ((t = document.createElement("span")).id = a, t.style.display = "none", window.gigya.utils.DOM.appendToBody(t));
                            var i = e.getPostContainer();
                            t.appendChild(i)
                        }))
                    }, t
                }(r.Request);
            t.JsonpRequest = c
        },
        89: function(e, t, i) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = i(0),
                o = i(37),
                r = i(32),
                a = function(e) {
                    function t(t, i, n, o) {
                        void 0 === o && (o = {});
                        var r = e.call(this, t, i, n, o) || this;
                        return r.xhttp = new XMLHttpRequest, r
                    }
                    return n.__extends(t, e), t.prototype.performSend = function(e, t) {
                        var i = this;
                        return new gigya.Promise((function(t, n) {
                            var o, a = i.getFullUrl(),
                                s = {};
                            i.xhttp.onload = function() {
                                return i.onRequestLoad(t, n)
                            }, i.xhttp.onerror = function() {
                                return n(i.createErrorFromResponse("XHR_FAILURE - http request onerror event"))
                            }, i.xhttp.withCredentials = !0, e === r.RequestType.POST && (a = i.getUrl().href, o = window.gigya.utils.keyValue.serialize(i.params), s["Content-Type"] = "application/x-www-form-urlencoded"), i.xhttp.open(e, a, !0), Object.keys(s).forEach((function(e) {
                                i.xhttp.setRequestHeader(e, s[e])
                            })), i.xhttp.send(o)
                        }))
                    }, t.prototype.onRequestLoad = function(e, t) {
                        var i = {};
                        if (4 === this.xhttp.readyState && 200 === this.xhttp.status) {
                            try {
                                i = JSON.parse(this.xhttp.responseText)
                            } catch (e) {
                                window.gigya.logger.report("XHR_FAILURE - failed to parse the response object", {
                                    responseText: this.xhttp.responseText
                                })
                            }
                            e(this.handleResponse(i))
                        } else t(this.createErrorFromResponse("XHR_FAILURE - http request failed"))
                    }, t.prototype.createErrorFromResponse = function(e) {
                        return {
                            errorMessage: e,
                            status: this.xhttp.status,
                            readyState: this.xhttp.readyState,
                            responseText: this.xhttp.responseText
                        }
                    }, t.prototype.addDefaultParams = function() {
                        e.prototype.addDefaultParams.call(this), this.params.format = "json"
                    }, t.prototype.networkErrorResponse = function() {
                        return this.handleResponse({
                            errorCode: 500026,
                            errorMessage: "Network_error"
                        })
                    }, t.prototype.dispose = function() {}, t
                }(o.Request);
            t.XhrRequest = a
        },
        9: function(e, t, i) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = i(2),
                o = i(29),
                r = i(5);
            t._popupContainers = [], t._pseudoContainers = [];
            var a = 999999999,
                s = null;

            function u() {
                return ++a
            }

            function c(e, t, i) {
                e && i && (e.addEventListener ? e.addEventListener(t, i, !0) : e.attachEvent("on" + t, i))
            }

            function g(e, t, i) {
                i && (e.removeEventListener ? e.removeEventListener(t, i, !0) : e.detachEvent("on" + t, i))
            }

            function d() {
                s && (g(window, "hashchange", s), s = null, window.location.hash = window.location.hash.replace("|gigyaMobileDialog", ""))
            }

            function l(e, t) {
                void 0 === t && (t = window.document), t.body && (t.body.insertBefore && t.body.firstChild ? t.body.insertBefore(e, t.body.firstChild) : t.body.appendChild(e))
            }

            function p(e) {
                var t = [];
                return "string" == typeof e.className && (t = e.className.split(" ")), t
            }

            function f(e, t) {
                if (!e) return !1;
                if (!t) return !0;
                if (!e.className) return !1;
                for (var i = !1, n = p(e), o = 0; o < n.length; o++)
                    if (n[o] === t) {
                        i = !0;
                        break
                    } return i
            }
            t.getNextZIndex = u, t.getGigyaScriptElement = function(e) {
                for (var t, i = document.getElementsByTagName("script"), n = /\/\/cdn(s)?\.(ru1\.)?gigya.com/, o = i.length - 1; o >= 0; o--) {
                    var r = i[o],
                        a = r.src.toLowerCase();
                    if ("" !== a)
                        if (n.test(a) || a.indexOf("?apikey=") > -1)
                            if (0 === e.length || e.some((function(e) {
                                    return a.indexOf(e) > -1
                                }))) {
                                t = r;
                                break
                            }
                }
                return t
            }, t.dispatch = function(e, t) {
                var i;
                try {
                    i = new Event(t)
                } catch (e) {
                    (i = document.createEvent("CustomEvent")).initCustomEvent(t, !0, !0, {})
                }
                e.dispatchEvent(i)
            }, t.addButtonSubmitListener = function(e, t, i, n) {
                void 0 === i && (i = "click"), e && (e.setAttribute("role", "button"), "-1" != e.getAttribute("tabindex") && e.setAttribute("tabindex", "0"), c(e, i, (function(e) {
                    return t(e)
                })), c(e, "keydown", (function(e) {
                    13 == (e.which || e.keyCode) && (e.preventDefault(), t(e))
                })))
            }, t.addEventListener = c, t.removeEventListener = g, t.disableDefaultEventHandling = function(e) {
                e.preventDefault ? e.preventDefault() : window.event && (window.event.returnValue = !1)
            }, t.addDialogBackListener = function(e) {
                d(), s = function(t) {
                    t && t.newURL && -1 == t.newURL.indexOf("|gigyaMobileDialog") && (e(t), d())
                }, window.setTimeout((function() {
                    -1 == window.location.hash.indexOf("|gigyaMobileDialog") && (window.location.hash = window.location.hash + "|gigyaMobileDialog"), c(window, "hashchange", s)
                }), 50)
            }, t._removeDialogBackListener = d, t.appendToBody = l, t.removeElement = function(e) {
                e && e.parentElement && e.parentElement.removeChild(e)
            }, t.isChildOf = function(e, t) {
                for (var i = e.parentNode; i;) {
                    if (t == i) return !0;
                    i = i.parentNode
                }
                return !1
            }, t.isVisible = function(e) {
                for (; e;) {
                    var t = getComputedStyle(e);
                    if ("none" === t.display || "hidden" === t.visibility) return !1;
                    e = e.parentElement
                }
                return !0
            }, t.getCenteredDivID = function(e) {
                return "gig_" + n.localInfo.initTime.getTime().toString() + "_" + e
            }, t.createElementWithAttributes = function(e, t) {
                var i = document.createElement(e);
                if (t)
                    for (var n in t) i[n] = t[n];
                return i
            }, t.createTopLevelDiv = function(e) {
                var t = document.createElement("div");
                return null != t.style.zIndex && (t.style.zIndex = "" + u()), t.innerHTML = "", e && (t.id = e), document.body && (document.body.insertBefore && document.body.firstChild ? document.body.insertBefore(t, document.body.firstChild) : document.body.appendChild && document.body.appendChild(t)), t
            }, t.hideByID = function(e) {
                var t = document.getElementById(e);
                t && (t.style.display = "none")
            }, t.showByID = function(e) {
                var t = document.getElementById(e);
                t && (t.style.display = n.localInfo.isIE6 ? "TD" == t.tagName ? "table-cell" : "TR" == t.tagName || "TABLE" == t.tagName ? "" : "block" : "")
            }, t.clearByID = function(e) {
                try {
                    var t = document.getElementById(e);
                    null != t && (t.innerHTML = "")
                } catch (e) {}
            }, t.getHTMLSize = function(e, t) {
                var i = document.createElement("div");
                i.style.position = "absolute", i.style.left = "-1000px", i.innerHTML = e, t.appendChild(i);
                var n = i.offsetWidth,
                    o = i.offsetHeight;
                return i.parentNode.removeChild(i), {
                    w: n,
                    h: o
                }
            }, t.getElementsByClass = function(e, t, i) {
                if (!e) return [];
                var n = [];
                i && f(e, t) && n.push(e);
                for (var o = e.getElementsByTagName("*"), r = 0; r < o.length; r++) f(o[r], t) && n.push(o[r]);
                return n || []
            }, t.getElementsByAttribute = function(e, t, i, n) {
                for (var o = [], r = e.getElementsByTagName(t), a = 0; a < r.length; a++) r[a].getAttribute(i) == n && o.push(r[a]);
                return o
            }, t.getElementPosition = function(e) {
                if (!e) return {
                    left: 0,
                    top: 0,
                    bottom: 0,
                    right: 0
                };
                var t = e.getBoundingClientRect(),
                    i = o.getScroll(),
                    n = t.left + i.left,
                    r = t.top + i.top;
                return {
                    left: n,
                    top: r,
                    right: n + t.width,
                    bottom: r + t.height
                }
            }, t.addClassToElement = function(e, t) {
                if (e) {
                    var i = e.className ? p(e) : [],
                        n = i.length,
                        o = t.split(" ");
                    for (var r in o) {
                        var a = !1;
                        if (!o[r]) break;
                        for (var s in i)
                            if (i[s] === o[r]) {
                                a = !0;
                                break
                            } a || i.push(o[r])
                    }
                    i.length !== n && (e.className = i.join(" "))
                }
            }, t.removeClassFromElement = function(e, t, i) {
                if (void 0 === i && (i = !1), e) {
                    for (var n = p(e), o = n.length - 1; o >= 0; o--)(n[o] === t || i && -1 !== n[o].indexOf(t)) && n.splice(o, 1);
                    e.className = n.join(" ")
                }
            }, t.getClassNames = p, t.isElementClass = f, t.cancelEvent = function(e) {
                e && ("cancelable" in e ? e.preventDefault() : e.returnValue = !1)
            }, t.createElement = function(e, t) {
                var i = document.createElement("div");
                return t = t || "", i.innerHTML = "<" + e + ' name="' + t + '" id="' + t + '"></' + e + ">", i.firstChild
            }, t.setSize = function(e, t, i, n) {
                if (null != e && null != e.style) {
                    if (t) {
                        var r = (t = "" + t).indexOf("%") > 0;
                        if (!isNaN(t) || r) {
                            var a = "" + (r ? t : t + "px");
                            e.style.width != a && (e.style.width = a)
                        }
                    }
                    if (i) {
                        var s = (i = "" + i).indexOf("%") > 0;
                        if (!isNaN(t) || s) {
                            var c = "" + (s ? i : i + "px");
                            e.style.height !== c && (e.style.height = c)
                        }
                    }
                    if (n && t && i) {
                        (null == e.style.zIndex || n) && (e.style.zIndex = "" + u());
                        var g = o.getInnerSize(),
                            d = o.getScroll(),
                            l = d.top,
                            p = d.left;
                        e.style.top = Math.max(0, l + Math.floor((g.h - i) / 2)) + "px", e.style.left = Math.max(0, p + Math.floor((g.w - t) / 2)) + "px", e.style.visibility = ""
                    }
                }
            }, t.createHiddenIframe = function(e) {
                var t = document.createElement("iframe");
                return t.src = e, t.style.width = "30px", t.style.height = "10px", t.style.position = "absolute", t.style.top = "-1000px", t.style.left = "-1000px", document.body ? l(t) : r.invokeOnPageLoad((function() {
                    l(t)
                })), t
            }, t.attributeEncode = function(e) {
                return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\"/g, "&quot;").replace(/\'/g, "&#39;")
            }, t.manipulateAttributes = function(e, t, i, n) {
                void 0 === n && (n = function() {
                    return !0
                }), e.forEach((function(e) {
                    e.attributes && Array.prototype.slice.call(e.attributes).forEach((function(e) {
                        n(e) && (e.value = e.value.replace(t, i))
                    }))
                }))
            }, t.textNodesUnder = function(e) {
                for (var t, i = [], n = document.createTreeWalker(e, NodeFilter.SHOW_TEXT, null, !1); t = n.nextNode();) i.push(t);
                return i
            }, t.isHTMLBooleanAttribute = function(e) {
                return ["autocomplete", "autofocus", "checked", "disabled", "hidden", "readonly", "required", "selected"].indexOf(e) > -1
            }, t.isBelongToGigyaFieldset = function e(t) {
                return !(!t || t instanceof HTMLFormElement) && (!!f(t.parentElement, "gigya-fieldset") || e(t.parentElement))
            }
        },
        90: function(e, t, i) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = i(44),
                o = function() {
                    function e(e, t, i, n, o) {
                        void 0 === n && (n = {}), void 0 === o && (o = 5), this.baseUrl = e, this.methodName = t, this.params = i, this.settings = n, this._maxTries = o, this._tries = 0, this.params.sdk = "js_" + window.gigya.build.version
                    }
                    return e.prototype.getUrl = function() {
                        return this.baseUrl + "/" + this.methodName
                    }, e.prototype.send = function(e) {
                        this._tries++, this._tries <= this._maxTries ? this.sendAction() : e && e()
                    }, e.prototype.getAuthParams = function() {
                        var e = {};
                        if (this.params.oauth_token) this.params.authMode = "token";
                        else if (!this.params.noAuth && !this.params.regToken) {
                            var t = n.get(this.params.APIKey);
                            if (t) {
                                this.sentLoginToken = t;
                                var i = n.getGltexpCookie(this.params.APIKey);
                                null != i && (e.loginTokenExp = i), e.login_token = t
                            }
                            e.authMode = "cookie"
                        }
                        return delete this.params.noAuth, window.gigya.localInfo.isAndroidBrowser && (delete this.params.login_token, delete this.params.loginTokenExp, delete this.params.authMode), e
                    }, e
                }();
            t.BaseRequest = o
        },
        91: function(e, t) {
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e) {
                    var t, i;

                    function n(e) {
                        var i = e.utils.getParamValue(document.cookie, "hasGmid", ";");
                        return {
                            isV3: i === t.ver3,
                            isV4: i === t.ver4,
                            hasGmid: i
                        }
                    }

                    function o(e, t) {
                        void 0 === t && (t = i.cookieFirst);
                        var o = n(e);
                        return t == i.cookieFirst ? o.hasGmid || e.gmidVersion || "ver3" : e.gmidVersion || o.hasGmid || "ver3"
                    }

                    function r(e) {
                        var t = n(e);
                        return Boolean(t.hasGmid) && t.isV4
                    }! function(e) {
                        e.ver2 = "ver2", e.ver3 = "ver3", e.ver4 = "ver4"
                    }(t = e.HasGmid || (e.HasGmid = {})),
                    function(e) {
                        e.cookieFirst = "cookieFirst", e.configFirst = "configFirst"
                    }(i = e.VersionSearchStrategy || (e.VersionSearchStrategy = {})), e.getHasGmidParam = n, e.getGmidBootstrapIndicationToken = function(e, t) {
                        void 0 === t && (t = i.cookieFirst);
                        var n = o(e, t);
                        return (e.partnerSettings.customAPIDomainPrefix || "_gigya") + "_" + n
                    }, e.getActualGmidVersion = o, e.shouldRegenerateGmid = function(e, t) {
                        var i = r(e);
                        return !t && !i
                    }, e.hasLatestGmidVersion = r
                }(t.GmidProvider || (t.GmidProvider = {}))
        }
    });
    /*! For license information please see gigya.adapters.mobile.min.js.LICENSE.txt */
    ! function(e) {
        var t = {};

        function n(o) {
            if (t[o]) return t[o].exports;
            var i = t[o] = {
                i: o,
                l: !1,
                exports: {}
            };
            return e[o].call(i.exports, i, i.exports, n), i.l = !0, i.exports
        }
        n.m = e, n.c = t, n.d = function(e, t, o) {
            n.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: o
            })
        }, n.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, n.t = function(e, t) {
            if (1 & t && (e = n(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var o = Object.create(null);
            if (n.r(o), Object.defineProperty(o, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                for (var i in e) n.d(o, i, function(t) {
                    return e[t]
                }.bind(null, i));
            return o
        }, n.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return n.d(t, "a", t), t
        }, n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, n.p = "", n(n.s = 248)
    }({
        0: function(e, t, n) {
            "use strict";
            n.r(t),
                function(e) {
                    n.d(t, "__extends", (function() {
                        return i
                    })), n.d(t, "__assign", (function() {
                        return r
                    })), n.d(t, "__rest", (function() {
                        return a
                    })), n.d(t, "__decorate", (function() {
                        return s
                    })), n.d(t, "__param", (function() {
                        return u
                    })), n.d(t, "__metadata", (function() {
                        return c
                    })), n.d(t, "__awaiter", (function() {
                        return l
                    })), n.d(t, "__generator", (function() {
                        return f
                    })), n.d(t, "__exportStar", (function() {
                        return d
                    })), n.d(t, "__values", (function() {
                        return p
                    })), n.d(t, "__read", (function() {
                        return g
                    })), n.d(t, "__spread", (function() {
                        return h
                    })), n.d(t, "__spreadArrays", (function() {
                        return m
                    })), n.d(t, "__await", (function() {
                        return y
                    })), n.d(t, "__asyncGenerator", (function() {
                        return v
                    })), n.d(t, "__asyncDelegator", (function() {
                        return w
                    })), n.d(t, "__asyncValues", (function() {
                        return b
                    })), n.d(t, "__makeTemplateObject", (function() {
                        return _
                    })), n.d(t, "__importStar", (function() {
                        return S
                    })), n.d(t, "__importDefault", (function() {
                        return O
                    })), n.d(t, "__classPrivateFieldGet", (function() {
                        return x
                    })), n.d(t, "__classPrivateFieldSet", (function() {
                        return I
                    }));
                    var o = function(e, t) {
                        return (o = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(e, t) {
                                e.__proto__ = t
                            } || function(e, t) {
                                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                            })(e, t)
                    };

                    function i(e, t) {
                        function n() {
                            this.constructor = e
                        }
                        o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                    }
                    var r = function() {
                        return (r = e || function(e) {
                            for (var t, n = 1, o = arguments.length; n < o; n++)
                                for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                            return e
                        }).apply(this, arguments)
                    };

                    function a(e, t) {
                        var n = {};
                        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
                        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                            var i = 0;
                            for (o = Object.getOwnPropertySymbols(e); i < o.length; i++) t.indexOf(o[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[i]) && (n[o[i]] = e[o[i]])
                        }
                        return n
                    }

                    function s(e, t, n, o) {
                        var i, r = arguments.length,
                            a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
                        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
                        else
                            for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
                        return r > 3 && a && Object.defineProperty(t, n, a), a
                    }

                    function u(e, t) {
                        return function(n, o) {
                            t(n, o, e)
                        }
                    }

                    function c(e, t) {
                        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
                    }

                    function l(e, t, n, o) {
                        return new(n || (n = gigya.Promise))((function(i, r) {
                            function a(e) {
                                try {
                                    u(o.next(e))
                                } catch (e) {
                                    r(e)
                                }
                            }

                            function s(e) {
                                try {
                                    u(o.throw(e))
                                } catch (e) {
                                    r(e)
                                }
                            }

                            function u(e) {
                                var t;
                                e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                    e(t)
                                }))).then(a, s)
                            }
                            u((o = o.apply(e, t || [])).next())
                        }))
                    }

                    function f(e, t) {
                        var n, o, i, r, a = {
                            label: 0,
                            sent: function() {
                                if (1 & i[0]) throw i[1];
                                return i[1]
                            },
                            trys: [],
                            ops: []
                        };
                        return r = {
                            next: s(0),
                            throw: s(1),
                            return: s(2)
                        }, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                            return this
                        }), r;

                        function s(r) {
                            return function(s) {
                                return function(r) {
                                    if (n) throw new TypeError("Generator is already executing.");
                                    for (; a;) try {
                                        if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done) return i;
                                        switch (o = 0, i && (r = [2 & r[0], i.value]), r[0]) {
                                            case 0:
                                            case 1:
                                                i = r;
                                                break;
                                            case 4:
                                                return a.label++, {
                                                    value: r[1],
                                                    done: !1
                                                };
                                            case 5:
                                                a.label++, o = r[1], r = [0];
                                                continue;
                                            case 7:
                                                r = a.ops.pop(), a.trys.pop();
                                                continue;
                                            default:
                                                if (!(i = a.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== r[0] && 2 !== r[0])) {
                                                    a = 0;
                                                    continue
                                                }
                                                if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                                                    a.label = r[1];
                                                    break
                                                }
                                                if (6 === r[0] && a.label < i[1]) {
                                                    a.label = i[1], i = r;
                                                    break
                                                }
                                                if (i && a.label < i[2]) {
                                                    a.label = i[2], a.ops.push(r);
                                                    break
                                                }
                                                i[2] && a.ops.pop(), a.trys.pop();
                                                continue
                                        }
                                        r = t.call(e, a)
                                    } catch (e) {
                                        r = [6, e], o = 0
                                    } finally {
                                        n = i = 0
                                    }
                                    if (5 & r[0]) throw r[1];
                                    return {
                                        value: r[0] ? r[1] : void 0,
                                        done: !0
                                    }
                                }([r, s])
                            }
                        }
                    }

                    function d(e, t) {
                        for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n])
                    }

                    function p(e) {
                        var t = "function" == typeof Symbol && Symbol.iterator,
                            n = t && e[t],
                            o = 0;
                        if (n) return n.call(e);
                        if (e && "number" == typeof e.length) return {
                            next: function() {
                                return e && o >= e.length && (e = void 0), {
                                    value: e && e[o++],
                                    done: !e
                                }
                            }
                        };
                        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
                    }

                    function g(e, t) {
                        var n = "function" == typeof Symbol && e[Symbol.iterator];
                        if (!n) return e;
                        var o, i, r = n.call(e),
                            a = [];
                        try {
                            for (;
                                (void 0 === t || t-- > 0) && !(o = r.next()).done;) a.push(o.value)
                        } catch (e) {
                            i = {
                                error: e
                            }
                        } finally {
                            try {
                                o && !o.done && (n = r.return) && n.call(r)
                            } finally {
                                if (i) throw i.error
                            }
                        }
                        return a
                    }

                    function h() {
                        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(g(arguments[t]));
                        return e
                    }

                    function m() {
                        for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
                        var o = Array(e),
                            i = 0;
                        for (t = 0; t < n; t++)
                            for (var r = arguments[t], a = 0, s = r.length; a < s; a++, i++) o[i] = r[a];
                        return o
                    }

                    function y(e) {
                        return this instanceof y ? (this.v = e, this) : new y(e)
                    }

                    function v(e, t, n) {
                        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                        var o, i = n.apply(e, t || []),
                            r = [];
                        return o = {}, a("next"), a("throw"), a("return"), o[Symbol.asyncIterator] = function() {
                            return this
                        }, o;

                        function a(e) {
                            i[e] && (o[e] = function(t) {
                                return new gigya.Promise((function(n, o) {
                                    r.push([e, t, n, o]) > 1 || s(e, t)
                                }))
                            })
                        }

                        function s(e, t) {
                            try {
                                (n = i[e](t)).value instanceof y ? gigya.Promise.resolve(n.value.v).then(u, c) : l(r[0][2], n)
                            } catch (e) {
                                l(r[0][3], e)
                            }
                            var n
                        }

                        function u(e) {
                            s("next", e)
                        }

                        function c(e) {
                            s("throw", e)
                        }

                        function l(e, t) {
                            e(t), r.shift(), r.length && s(r[0][0], r[0][1])
                        }
                    }

                    function w(e) {
                        var t, n;
                        return t = {}, o("next"), o("throw", (function(e) {
                            throw e
                        })), o("return"), t[Symbol.iterator] = function() {
                            return this
                        }, t;

                        function o(o, i) {
                            t[o] = e[o] ? function(t) {
                                return (n = !n) ? {
                                    value: y(e[o](t)),
                                    done: "return" === o
                                } : i ? i(t) : t
                            } : i
                        }
                    }

                    function b(e) {
                        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                        var t, n = e[Symbol.asyncIterator];
                        return n ? n.call(e) : (e = p(e), t = {}, o("next"), o("throw"), o("return"), t[Symbol.asyncIterator] = function() {
                            return this
                        }, t);

                        function o(n) {
                            t[n] = e[n] && function(t) {
                                return new gigya.Promise((function(o, i) {
                                    (function(e, t, n, o) {
                                        gigya.Promise.resolve(o).then((function(t) {
                                            e({
                                                value: t,
                                                done: n
                                            })
                                        }), t)
                                    })(o, i, (t = e[n](t)).done, t.value)
                                }))
                            }
                        }
                    }

                    function _(e, t) {
                        return Object.defineProperty ? Object.defineProperty(e, "raw", {
                            value: t
                        }) : e.raw = t, e
                    }

                    function S(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                        return t.default = e, t
                    }

                    function O(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }

                    function x(e, t) {
                        if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
                        return t.get(e)
                    }

                    function I(e, t, n) {
                        if (!t.has(e)) throw new TypeError("attempted to set private field on non-instance");
                        return t.set(e, n), n
                    }
                }.call(this, n(0).__assign)
        },
        11: function(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = n(6),
                i = n(8),
                r = n(2),
                a = ["socialize", "accounts", "fidm", "gm", "comments", "gcs", "ids", "ds", "gscounters"];

            function s(e, t, n) {
                void 0 === t && (t = window.gigya.dataCenter), void 0 === n && (n = window.gigya.defaultApiDomain);
                var o = t + "." + n;
                return e ? e + "." + o : o
            }

            function u(e, t, n, o) {
                return void 0 === e && (e = window.gigya.partnerSettings && window.gigya.partnerSettings.customAPIDomainPrefix), void 0 === t && (t = r.localInfo.baseDomain), void 0 === n && (n = window.gigya.dataCenter), void 0 === o && (o = window.gigya.defaultApiDomain), e && t && t !== o ? e + "." + t : s(void 0, n, o)
            }
            t.apiDomainFactory = function(e, t) {
                void 0 === e && (e = u()), void 0 === t && (t = window.gigya.defaultApiDomain);
                var n = o.Uri.parse(e).isIn(o.Uri.parse(t));
                return function(t) {
                    if (t && n) {
                        var o = t.split(".")[0];
                        return -1 == a.indexOf(o) && (window.gigya.logger.error("trying to send request to an invalid domain"), o = a[0]), o + "." + e
                    }
                    return e
                }
            }, t.getGigyaDomain = s, t.getBaseDomain = function(e, t, n) {
                if (void 0 === e && (e = window.gigya.partnerSettings.baseDomains), void 0 === t && (t = location.hostname), void 0 === n && (n = ["gigya.com", "gigya-api.cn", window.gigya.defaultApiDomain]), !t) return "";
                "string" == typeof e && (e = e.split(","));
                var r = o.Uri.parse(t);
                n && (e = e.concat(n));
                for (var a = 0, s = e; a < s.length; a++) {
                    var u = s[a],
                        c = i.replaceAll(u, "*", ""),
                        l = o.Uri.parse(c);
                    if (l && r.isIn(l)) return l.isForSubDomains() ? r.domain : l.domain
                }
                return r.domain
            }, t.resolveApiDomain = u, t.resolveChinaApiDomain = function(e, t) {
                return ["sapcdm.cn", "gigya-api.cn"].indexOf(e) >= 0 ? (null == t ? void 0 : t.indexOf("sapcdm.cn")) >= 0 ? "sapcdm.cn" : "gigya-api.cn" : e
            }
        },
        12: function(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = n(2),
                i = n(20),
                r = function() {
                    function e(e) {
                        void 0 === e && (e = new i.CookieStore), this._cookieStore = e
                    }
                    return e.prototype.set = function(e, t, n, i, r) {
                        null == i && (i = this.getDefaultDomain());
                        var a = r ? "" : "/",
                            s = this._getExpirationInMs(n),
                            u = null;
                        null != s && (u = new Date).setTime(u.getTime() + s);
                        var c = this._setCookieInternal(e, t, a, u, i),
                            l = !s || s > 0;
                        if (l === c) return !0;
                        var f = o.localInfo.pageDomain;
                        return (c = this._setCookieInternal(e, t, a, u, f)) === l
                    }, e.prototype.get = function(e) {
                        return this._cookieStore.getCookie(e)
                    }, e.prototype.remove = function(e, t) {
                        void 0 === t && (t = o.localInfo.pageDomain), this._removeFromBaseDomains(e, t), this.set(e, "", -1, "", !1), this.set(e, "", -1, "", !0)
                    }, e.prototype.getInfiniteExpirationTimeInSeconds = function() {
                        return 31536e3
                    }, e.prototype.canSaveCookie = function() {
                        try {
                            return this.set(e.testCookieName, "true", 1, null, null)
                        } catch (e) {
                            return !1
                        }
                    }, e.prototype.getDefaultDomain = function(e, t) {
                        return void 0 === e && (e = o.localInfo.pageDomain), void 0 === t && (t = o.localInfo.baseDomain || ""), t.length > 0 && e.length >= t.length && e.lastIndexOf(t) === e.length - t.length ? t : e
                    }, e.prototype._getExpirationInMs = function(e) {
                        return null == e || "" === e || isNaN(e) ? 1e3 * this.getInfiniteExpirationTimeInSeconds() : 0 == e ? null : 1e3 * e
                    }, e.prototype._setCookieInternal = function(t, n, i, r, a) {
                        var s, u = 0 === (null !== (s = null === o.localInfo || void 0 === o.localInfo ? void 0 : o.localInfo.protocol) && void 0 !== s ? s : document.location.protocol).indexOf("https"),
                            c = e._getSameSiteMode();
                        return this._cookieStore.setCookie(t, n, {
                            path: i,
                            expires: r,
                            domain: a,
                            sameSite: c,
                            secure: u
                        }), !!this.get(t) || !!c && (this._cookieStore.setCookie(t, n, {
                            path: i,
                            expires: r,
                            domain: a,
                            secure: u
                        }), !!this.get(t) && (window.gigya.logger.report("Cookie established only without sameSite mode", {
                            name: t,
                            value: n,
                            sameSiteMode: c
                        }, !1), !0))
                    }, e.prototype._removeFromBaseDomains = function(e, t) {
                        for (var n = t.split("."), o = 0; o < n.length - 1; o++) {
                            var i = n.slice(o).join(".");
                            this.set(e, "", -1, i, !1), this.set(e, "", -1, i, !0)
                        }
                    }, e._getSameSiteMode = function() {
                        if (!e._disallowSameSiteMode()) return "None"
                    }, e._disallowSameSiteMode = function() {
                        var e, t, n = null !== (e = null === o.localInfo || void 0 === o.localInfo ? void 0 : o.localInfo.protocol) && void 0 !== e ? e : document.location.protocol,
                            i = null !== (t = null === o.localInfo || void 0 === o.localInfo ? void 0 : o.localInfo.userAgent) && void 0 !== t ? t : navigator.userAgent.toLowerCase();
                        return !(0 === n.indexOf("https")) || !i || i.indexOf("CPU iPhone OS 12") > -1 || i.indexOf("iPad; CPU OS 12") > -1 || i.indexOf("Macintosh; Intel Mac OS X 10_14") > -1 && i.indexOf("Version/") > -1 && i.indexOf("Safari") > -1 || i.indexOf("Chrome/5") > -1 && i.indexOf("Chrome/6") > -1
                    }, e.testCookieName = "gig3pctest", e
                }();
            t.CookieUtils = r, t.default = new r
        },
        16: function(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = n(0),
                i = n(3),
                r = n(2),
                a = n(12),
                s = function() {
                    function e() {}
                    return e.getName = function() {
                        return "AbstractAdapter"
                    }, e.prototype.setObject = function(e, t) {
                        this.setItem(e, i.serialize(t))
                    }, e.prototype.getObject = function(e, t) {
                        return i.deserialize(this.getItem(e), t)
                    }, e.prototype.isPersistent = function() {
                        return !0
                    }, e
                }();
            t.AbstractLocalStorageAdapter = s;
            var u = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.isLoaded = !1, t
                }
                return o.__extends(t, e), t.prototype.isReady = function() {
                    return this.isLoaded
                }, t.prototype.waitForService = function(e) {
                    var t = this;
                    this.isReady() ? e() : setTimeout((function() {
                        return t.waitForService(e)
                    }), 50)
                }, t
            }(s);
            t.AbstractAsyncLocalStorageAdapter = u;
            var c = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return o.__extends(t, e), t.prototype.getItem = function(e) {
                        return this.storage[e]
                    }, t.prototype.setItem = function(e, t, n) {
                        try {
                            this.storage[e] = t
                        } catch (e) {}
                    }, t.prototype.removeItem = function(e) {
                        this.storage.removeItem(e)
                    }, t
                }(s),
                l = function(e) {
                    function t() {
                        var t = e.call(this) || this;
                        return t.storage = window.localStorage, t
                    }
                    return o.__extends(t, e), t.getName = function() {
                        return "LocalStorageAdapter"
                    }, t.isAvailable = function() {
                        return r.localInfo.supportsLocalStorage
                    }, t
                }(c),
                f = function(e) {
                    function t() {
                        var t = e.call(this) || this;
                        return t.storage = window.sessionStorage, t
                    }
                    return o.__extends(t, e), t.getName = function() {
                        return "SessionStorageAdapter"
                    }, t.isAvailable = function() {
                        return r.localInfo.supportsSessionStorage
                    }, t
                }(c),
                d = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return o.__extends(t, e), t.isAvailable = function() {
                        return r.localInfo.isFF && window.globalStorage
                    }, t.getName = function() {
                        return "FirefoxStorageAdapter"
                    }, t.prototype.getItem = function(e) {
                        return window.globalStorage[location.hostname][e]
                    }, t.prototype.setItem = function(e, t, n) {
                        try {
                            window.globalStorage[location.hostname][e] = t
                        } catch (e) {}
                    }, t.prototype.removeItem = function(e) {
                        delete window.globalStorage[location.hostname][e]
                    }, t
                }(s),
                p = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return o.__extends(t, e), t.isAvailable = function() {
                        return a.default.canSaveCookie()
                    }, t.getName = function() {
                        return "CookieStorageAdapter"
                    }, t.prototype.getItem = function(e) {
                        return a.default.get(e)
                    }, t.prototype.setItem = function(e, t, n, o) {
                        a.default.set(e, t, n, o)
                    }, t.prototype.removeItem = function(e) {
                        a.default.remove(e)
                    }, t
                }(s);
            t.CookieStorageAdapter = p;
            var g = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.memory = {}, t
                }
                return o.__extends(t, e), t.isAvailable = function() {
                    return !0
                }, t.getName = function() {
                    return "MemoryStorageAdapter"
                }, t.prototype.getItem = function(e) {
                    return this.memory[e]
                }, t.prototype.setItem = function(e, t, n) {
                    this.memory[e] = t
                }, t.prototype.removeItem = function(e) {
                    delete this.memory[e]
                }, t.prototype.isPersistent = function() {
                    return !1
                }, t
            }(s);

            function h(e) {
                var n = e.getName() || e.name;
                return t.instances[n] || (t.instances[n] = new e), t.instances[n]
            }

            function m(e) {
                for (var n, o = 0, i = t.adapters; o < i.length; o++) {
                    var r = i[o];
                    if (r.isAvailable()) {
                        if (r.prototype instanceof u && !e) continue;
                        n = h(r);
                        break
                    }
                }
                return n || (n = h(g)), e && (n instanceof u ? n.waitForService((function() {
                    e(n)
                })) : e(n)), n
            }
            t.MemoryStorageAdapter = g, t.adapters = [l, f, d, p, g], t.instances = {}, t.initializeAdapter = h, t.waitForService = m;
            var y = m();
            t.getItem = function(e) {
                return y.getItem(e)
            }, t.setItem = function(e, t, n) {
                return y.setItem(e, t, n)
            }, t.removeItem = function(e) {
                return y.removeItem(e)
            }, t.setObject = function(e, t) {
                return y.setObject(e, t)
            }, t.getObject = function(e, t) {
                return y.getObject(e, t)
            }
        },
        2: function(e, t, n) {
            var o, i;
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(11),
                a = navigator.userAgent.toLowerCase();
            t.localInfo = {
                isXhrEnabled: !0,
                baseDomain: "",
                isBrowserSupportsFilesAPI: "function" == typeof FileReader || "object" == typeof FileReader,
                initTime: new Date,
                version: 0,
                pageDomain: document.location.hostname,
                protocol: "http:" == document.location.protocol ? "http" : "https",
                userAgent: a,
                isWin: -1 != a.indexOf("win"),
                isIE: -1 != a.indexOf("msie") || -1 != a.indexOf("mozilla") && -1 != a.indexOf("trident"),
                isIE6: -1 != a.indexOf("msie 6."),
                isIE7: -1 != a.indexOf("msie 7."),
                isIE8: -1 != a.indexOf("msie 8."),
                isIE9: -1 != a.indexOf("msie 9."),
                isIE10: -1 != a.indexOf("msie 10."),
                isIE11: -1 != a.indexOf("mozilla") && -1 != a.indexOf("trident/7.0"),
                isEdgeLegacy: -1 != a.indexOf("edge"),
                isEdge: RegExp(/edg(?!e)/).test(a),
                isIOS: -1 != a.indexOf("iphone") || -1 != a.indexOf("ipad") || -1 != a.indexOf("ipod"),
                isSafari534: -1 != a.indexOf("safari/534"),
                isWeChat: -1 != a.indexOf("micromessenger"),
                iosVersion: -1 != a.indexOf("applewebkit") && -1 != a.indexOf("version/") ? parseInt(a.split("version/")[1].split(" ")[0]) : 0,
                isAndroid: -1 != a.indexOf("android"),
                isAndroidBrowser: function(e) {
                    if (-1 === e.indexOf("mozilla/5.0")) return !1;
                    if (-1 === e.indexOf("android 4")) return !1;
                    if (-1 === e.indexOf("applewebkit")) return !1;
                    if (-1 !== e.indexOf("windows phone")) return !1;
                    var t = /chrome\/(\d+)/.exec(e);
                    return !t || parseInt(t[1]) < 20
                }(a),
                currentBrowser: "",
                androidVersion: -1 != a.indexOf("android") ? parseFloat(a.slice(a.indexOf("android") + 8)) : 0,
                isChrome: -1 != a.indexOf("chrome") && -1 == a.indexOf("edg"),
                isGoogleBot: -1 != a.indexOf("googlebot"),
                isFF: -1 != a.indexOf("firefox"),
                isOpera: -1 != a.indexOf("opera"),
                isSafari: navigator.appVersion && -1 != navigator.appVersion.toLowerCase().indexOf("safari") && -1 == navigator.appVersion.toLowerCase().indexOf("chrome") && -1 == a.indexOf("android"),
                isIOSWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),
                isIOSChrome: -1 != a.indexOf("crios"),
                isMAC: navigator.appVersion && -1 != navigator.appVersion.toLowerCase().indexOf("mac"),
                isWindowsPhone: -1 != a.indexOf("windows phone"),
                isFacebookBrowser: -1 != a.indexOf("fban") || -1 != a.indexOf("fbav"),
                supportsPostMessage: null != window.postMessage && (-1 == a.indexOf("msie") || -1 != a.indexOf("iemobile")),
                supportsLocalStorage: !1,
                supportsSessionStorage: !1,
                supportsFlash: function() {
                    var e = !1;
                    try {
                        if (navigator.mimeTypes && null != navigator.mimeTypes["application/x-shockwave-flash"] && navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin) e = !0;
                        else new ActiveXObject("ShockwaveFlash.ShockwaveFlash") && (e = !0)
                    } catch (e) {}
                    return e
                }(),
                quirksMode: "BackCompat" == document.compatMode && -1 != a.indexOf("msie"),
                backCompat: "BackCompat" == document.compatMode,
                isMobile: function() {
                    var e = ["iphone", "ipod", "android", "midp", "240x320", "blackberry", "netfront", "nokia", "panasonic", "portalmmm", "sharp", "sie-", "sonyericsson", "symbian", "windows ce", "benq", "mda", "mot-", "opera mini", "philips", "pocket pc", "sagem", "samsung", "htc"];
                    for (var t in e)
                        if (-1 != a.indexOf(e[t])) return !0;
                    return !1
                }(),
                isMobileApp: function() {
                    if (!document.getElementsByTagName) return !1;
                    for (var e = document.getElementsByTagName("meta"), t = 0; t < e.length; t++)
                        if ("viewport" == e[t].getAttribute("name")) {
                            var n = e[t].getAttribute("content");
                            if (n && -1 !== n.indexOf("width=device-width")) return !0
                        } return !1
                }(),
                isNativeMobileApp: !1,
                isTouch: function() {
                    if ("ontouchstart" in window) return !0;
                    if ("onmsgesturechange" in window) try {
                        return new ActiveXObject("htmlfile"), !1
                    } catch (e) {
                        return !0
                    }
                    return !1
                }(),
                isOnLine: function() {
                    return navigator.onLine
                },
                messagingMethod: 1
            };
            var s = function(e) {
                try {
                    var t = window[e];
                    if (!t) return !1;
                    var n = "_gig_localStorage_test",
                        o = "just checking for localStorage";
                    t.setItem(n, o);
                    var i = t.getItem(n) === o;
                    return t.removeItem(n), i
                } catch (e) {
                    return !1
                }
            };
            t.localInfo.supportsLocalStorage = s("localStorage"), t.localInfo.supportsSessionStorage = s("sessionStorage"), t.localInfo.isMAC = t.localInfo.isMAC && !t.localInfo.isIOS;
            var u = t.localInfo.isWin ? "windows" : t.localInfo.isWindowsPhone ? "winphone" : t.localInfo.isIOS ? "ios-v" + t.localInfo.iosVersion : t.localInfo.isMAC ? "mac" : t.localInfo.isAndroid ? "android" : "";
            u && (u += " ");
            var c, l = t.localInfo.isChrome ? "chrome" : t.localInfo.isFF ? "firefox" : t.localInfo.isSafari ? "safari" : t.localInfo.isEdge ? "edge" : t.localInfo.isEdgeLegacy ? "edge legacy" : t.localInfo.isIE11 ? "ie11" : t.localInfo.isIE10 ? "ie10" : t.localInfo.isIE9 ? "ie9" : t.localInfo.isIE8 ? "ie8" : "";
            t.localInfo.currentBrowser = u + l, (null === (i = null === (o = window.gigya.partnerSettings) || void 0 === o ? void 0 : o.baseDomains) || void 0 === i ? void 0 : i.length) ? c = window.gigya.partnerSettings.baseDomains : (window.self === window.top && window.gigya.logger.warn("gigya: missing base domains for site"), c = [document.location.hostname]), t.localInfo.baseDomain = r.getBaseDomain(c)
        },
        20: function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = function() {
                function e(e) {
                    void 0 === e && (e = window), this._win = e
                }
                return e.prototype.setCookie = function(e, t, n) {
                    var o = e + "=" + escape(t);
                    n.path && (o += "; path=" + n.path), n.expires && (o += "; expires=" + n.expires.toUTCString()), n.domain && -1 != n.domain.indexOf(".") && (o += "; domain=" + n.domain), n.sameSite && (o += "; sameSite=" + n.sameSite), n.secure && (o += "; secure"), this._win.document.cookie = o
                }, e.prototype.getCookie = function(e) {
                    e = e.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1").replace(/^[ \t]+|[ \t]+$/g, "");
                    var t = new RegExp("(?:^|;)\\s?" + e + "=(.*?)(?:;|$)"),
                        n = this._win.document.cookie.match(t);
                    return n && unescape(n[1])
                }, e
            }();
            t.CookieStore = n
        },
        248: function(e, t, n) {
            (function(e) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var o = n(249),
                    i = n(250);
                window.gigya._ || (window.gigya._ = {}), window.gigya._.apiAdapters || (window.gigya._.apiAdapters = {}), window.gigya._.apiAdapters.mobile || (window.gigya._.apiAdapters.mobile = {}), e(window.gigya._.apiAdapters.mobile, o, i)
            }).call(this, n(0).__assign)
        },
        249: function(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = n(0),
                i = n(16);
            t.newApiAdapter = function(e) {
                return new s(e)
            }, t.mobileCallbacks = {};
            var r = ["is_session_valid", "send_request", "send_oauth_request", "get_ids", "on_plugin_event", "on_custom_event", "register_for_namespace_events"],
                a = {
                    logLevel: []
                },
                s = function() {
                    function e(e) {
                        this.nativeProxy = e, this._storage = new i.MemoryStorageAdapter, this.name = "Mobile"
                    }
                    return e.prototype.getStorage = function() {
                        return this._storage
                    }, e.prototype.init = function(e) {
                        return o.__awaiter(this, void 0, void 0, (function() {
                            var t = this;
                            return o.__generator(this, (function(n) {
                                return this.nativeProxy && "function" == typeof this.nativeProxy.getFeatures ? this.features = window.gigya.utils.JSON.deserialize(this.nativeProxy.getFeatures()) : this.features = r, this.nativeProxy && "function" == typeof this.nativeProxy.getSettings ? (this.settings = window.gigya.utils.JSON.deserialize(this.nativeProxy.getSettings()), this.settings.logLevel = window.gigya.utils.array.getArrayFromString(this.settings.logLevel || a.logLevel.join(","), ",")) : this.settings = a, this.nativeProxy && "function" == typeof this.nativeProxy.getObfuscationStrategy && (this.obfuscationStrategy = this.nativeProxy.getObfuscationStrategy()), window.gigya._.getApiDomain = window.gigya._.apiDomainFactory(window.gigya.partnerSettings.plugins.apiDomain, window.gigya.defaultApiDomain), window.gigya.events.addMap({
                                    defaultMethod: function(e) {
                                        t.onPluginEvent(e)
                                    },
                                    eventMap: [{
                                        events: "*",
                                        args: ["$event"]
                                    }]
                                }), this.sendToMobile("get_ids", {}, (function(n) {
                                    for (var o in t.ucid = n.ucid, t.gcid = n.gcid, window.gigya.events.global._activeNamespaces) t.registerForNamespaceEvents(o);
                                    e()
                                })), [2]
                            }))
                        }))
                    }, e.prototype.getTokenParam = function(e, t) {
                        return ""
                    }, e.prototype.onPluginEvent = function(e) {
                        e.isGlobal || this.sendToMobile("on_plugin_event", e)
                    }, e.prototype.onCustomEvent = function(e) {
                        this.sendToMobile("on_custom_event", e)
                    }, e.prototype.onJSLog = function(e, t) {
                        if (this.isLogLevelSupported(e)) {
                            var n = {
                                logType: e,
                                logInfo: t
                            };
                            this.sendToMobile("on_js_log", n)
                        }
                    }, e.prototype.registerForNamespaceEvents = function(e) {
                        this.sendToMobile("register_for_namespace_events", {
                            namespace: e
                        })
                    }, e.prototype.getGmidTicket = function(e) {
                        if (e) {
                            return this.sendRequest("socialize.getGmidTicket", {
                                expires: 30
                            }, (function(t) {
                                e(t.gmidTicket)
                            }), {
                                forceHttps: !0
                            }), ""
                        }
                    }, e.prototype.clearSession = function(e, t) {
                        this.sendToMobile("clear_session", e, t)
                    }, e.prototype.isSessionValid = function(e, t) {
                        this.sendToMobile("is_session_valid", {}, t)
                    }, e.prototype.sendRequest = function(e, t, n, o) {
                        this.sendToMobile("send_request", t, n, e, o)
                    }, e.prototype.sendOauthRequest = function(e, t, n, o) {
                        this.sendToMobile("send_oauth_request", t, n, e, o)
                    }, e.prototype.sendToMobile = function(e, n, o, i, r) {
                        var a = this;
                        if (void 0 === i && (i = ""), this.isActionSupported(e)) {
                            n && delete n.APIKey;
                            var s = "";
                            o && (s = (new Date).getTime() + "_" + Math.random(), t.mobileCallbacks[s] = function(e) {
                                o(a.unobfuscate(e, !0)), delete t.mobileCallbacks[s]
                            });
                            var u = this.obfuscate(window.gigya.utils.keyValue.serialize(n)),
                                c = window.gigya.utils.keyValue.serialize(r),
                                l = "callbackID=" + s + "&params=" + encodeURIComponent(u) + "&settings=" + encodeURIComponent(c);
                            if (this.nativeProxy.sendToMobile) {
                                if (!this.nativeProxy.sendToMobile(e, i, l)) {
                                    var f = "The Native Mobile SDK does not support feature " + e;
                                    window.gigya.logger.error(f), t.mobileCallbacks[s]({
                                        errorCode: 400096,
                                        errorMessage: f
                                    })
                                }
                            } else this.sendWithIframe(e, i, l, s)
                        } else o && o({
                            errorCode: 400096,
                            errorMessage: "Mobile SDK does not support feature " + e
                        })
                    }, e.prototype.sendWithIframe = function(e, n, o, i) {
                        var r = document.createElement("iframe");

                        function a() {
                            if (r) try {
                                document.documentElement.removeChild(r), r.remove()
                            } catch (e) {}
                        }
                        if (r.style.display = "none", r.src = "gsapi://" + e + "/" + n + "?" + o, i && t.mobileCallbacks[i]) {
                            var s = t.mobileCallbacks[i];
                            t.mobileCallbacks[i] = function(e) {
                                s(e), a()
                            }
                        } else window.setTimeout((function() {
                            return a()
                        }), 300);
                        window.setTimeout((function() {
                            return document.documentElement.appendChild(r)
                        }), 0)
                    }, e.prototype.onSDKEvent = function(e) {
                        e && e.user && window.gigya._.convertIdentitiesArrayToObject(e.user), window.gigya.events.global.dispatch(e)
                    }, e.prototype.isActionSupported = function(e) {
                        return !!e && window.gigya.utils.array.indexOf(this.features, e) > -1
                    }, e.prototype.isLogLevelSupported = function(e) {
                        return -1 != window.gigya.utils.array.indexOf(this.settings.logLevel, "*") || -1 != window.gigya.utils.array.indexOf(this.settings.logLevel, e)
                    }, e.prototype.setGltexpFromSSO = function(e) {
                        return gigya.Promise.resolve(!1)
                    }, e.prototype.obfuscate = function(e) {
                        return "base64" === this.obfuscationStrategy ? btoa(e) : e
                    }, e.prototype.unobfuscate = function(e, t) {
                        if ("base64" === this.obfuscationStrategy) {
                            var n = atob(e);
                            return t ? JSON.parse(n) : n
                        }
                        return e
                    }, e
                }();
            t.MobileAdapter = s
        },
        250: function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.showPlugin = function(e, t) {
                var n = e.split("."),
                    o = n.splice(n.length - 1, 1)[0];
                n.length || (n = ["socialize"]), "commentsUI" == e && (n = ["comments"]);
                var i = "show" + window.gigya.utils.stringUtils.capitalize(o);
                n.push(i);
                for (var r = window.gigya; r && n.length;) r = r[n.shift()];
                if ("function" != typeof r) return window.gigya.events.dispatchInvalidParamError(window.gigya.utils.object.merge([{
                    plugin: e
                }, t]), "plugin");
                r(t)
            }
        },
        3: function(module, exports) {
            function serialize(e, t, n, o, i) {
                if (void 0 === t && (t = !1), void 0 === n && (n = !1), void 0 === o && (o = 0), void 0 === i && (i = 20), window.gigya.localInfo.isIE8) {
                    if (o || (o = 0), o > i) return "[Too deep]";
                    var r = "",
                        a = "",
                        s = "";
                    if (n) {
                        s = "\t", a = "\n";
                        for (var u = 0; u < o + 1; u++) r += s
                    }
                    var c = typeof e;
                    if ("function" == c) return c.toString();
                    if ("object" != c || null === e) return "string" == c && (e = '"' + e.replace(/(\"|\\)/g, "\\$1").replace(/\r\n|\r|\n/g, "\\n") + '"'), String(e);
                    var l, f, d = [],
                        p = e && e.constructor == Array;
                    if (p)
                        for (u = 0; u < e.length; u++) c = typeof(f = e[u]), null == f || "undefined" == c ? f = "" : "string" == c ? f = '"' + f.replace(/(\"|\\)/g, "\\$1").replace(/\r\n|\r|\n/g, "\\n") + '"' : "function" == c ? f = t ? "Function" : "" : f.parentNode && f.innerHTML ? f = "HTMLElement" : f.constructor == Date ? f = "" : "object" == c && null !== f && (f = serialize(f, t, n, o + 1)), "" != String(f) && d.push(r + s + String(f));
                    else
                        for (l in e) c = typeof(f = e[l]), null == f || "undefined" == c ? f = String(f) : "string" == c ? f = '"' + f.replace(/(\"|\\)/g, "\\$1").replace(/\r\n|\r|\n/g, "\\n") + '"' : "function" == c ? f = t ? "Function" : "" : f.parentNode && f.innerHTML ? f = "HTMLElement" : f.constructor == Date ? f = "" : "object" == c && null !== f && (f = a + serialize(f, t, n, o + 1)), "" != String(f) && d.push(r + s + '"' + l.replace(/(\"|\\)/g, "\\$1").replace(/\r\n|\r|\n/g, "\\n") + '":' + String(f));
                    return a + r + (p ? "[" : "{") + a + d.join("," + a) + a + r + (p ? "]" : "}")
                }
                return window.JSON.stringify(e)
            }

            function deserialize(json, defaultValue, scope) {
                if (!json || !json.replace(/^\s+|\s+$/g, "")) return defaultValue || {};
                try {
                    var keys = [],
                        values = [];
                    if (scope)
                        for (var key in scope) keys.push(key), values.push(scope[key]);
                    var fn = eval("(function(" + keys.join(",") + ") { return " + json.trim() + "; })");
                    return fn.apply(void 0, values)
                } catch (e) {
                    return console.warn("Error deserializing JavaScript", e), defaultValue || {}
                }
            }

            function parse(e, t) {
                if (window.gigya.localInfo.isIE8) return deserialize(e, t);
                try {
                    return window.JSON.parse(e)
                } catch (e) {
                    return t || {}
                }
            }
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.serialize = serialize, exports.deserialize = deserialize, exports.parse = parse
        },
        6: function(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = n(0),
                i = n(8),
                r = function() {
                    function e(e, t) {
                        void 0 === t && (t = !0), this._anchor = document.createElement("a");
                        var n = "http:" == document.location.protocol ? "http" : "https";
                        t && -1 === e.indexOf("://") && "/" !== e.charAt(0) && (e = n + "://" + e), this._anchor.href = e
                    }
                    return Object.defineProperty(e.prototype, "domain", {
                        get: function() {
                            return this._anchor.hostname
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "path", {
                        get: function() {
                            return this._anchor.pathname
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "href", {
                        get: function() {
                            return this._anchor.href
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "search", {
                        get: function() {
                            return this._anchor.search.slice(1)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "hash", {
                        get: function() {
                            return this._anchor.hash.slice(1)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), e.prototype.toString = function() {
                        return this._anchor.href
                    }, e.prototype.addToSearch = function(e) {
                        for (var t in e) {
                            var n = e[t];
                            if (("boolean" == typeof n || "number" == typeof n || "string" == typeof n) && "eventName" != t) {
                                var o = this._anchor.search ? "&" : "";
                                this._anchor.search += "" + o + t + "=" + encodeURIComponent(e[t])
                            }
                        }
                        return this
                    }, e.prototype.fetch = function(e) {
                        return void 0 === e && (e = 0), o.__awaiter(this, void 0, void 0, (function() {
                            var t, n;
                            return o.__generator(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        return o.trys.push([0, 5, , 8]), window.fetch ? [4, this.browserFetch()] : [3, 2];
                                    case 1:
                                        return t = o.sent(), [3, 4];
                                    case 2:
                                        return [4, this.xhr()];
                                    case 3:
                                        t = o.sent(), o.label = 4;
                                    case 4:
                                        return [2, t];
                                    case 5:
                                        if (n = o.sent(), e <= 0) throw new Error("fetch failed: " + n);
                                        return [4, this.delay(1)];
                                    case 6:
                                        return o.sent(), [4, this.fetch(e - 1)];
                                    case 7:
                                        return [2, o.sent()];
                                    case 8:
                                        return [2]
                                }
                            }))
                        }))
                    }, e.prototype.isBaseOf = function(t) {
                        return e.parse(t).isIn(this)
                    }, e.prototype.isIn = function(t) {
                        return "string" == typeof t && (t = e.parse(t)), (this.domain == t.domain || this.isSubDomainOf(t)) && (!t.path || 0 == this.path.indexOf(t.path))
                    }, e.prototype.isForSubDomains = function() {
                        return 0 == this.domain.indexOf(".")
                    }, e.prototype.isSubDomainOf = function(e) {
                        var t = "";
                        return e.isForSubDomains() || (t = "."), t += e.domain, i.endsWith(this.domain, t)
                    }, e.parse = function(t, n) {
                        if (void 0 === n && (n = !0), t) return new e(t, n)
                    }, e.prototype.browserFetch = function() {
                        return o.__awaiter(this, void 0, void 0, (function() {
                            var e, t;
                            return o.__generator(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        return e = this.toString(), [4, window.fetch(e)];
                                    case 1:
                                        if (!(t = n.sent()).ok) throw new Error("fetch failed");
                                        return [2, t.json()]
                                }
                            }))
                        }))
                    }, e.prototype.xhr = function() {
                        var e = this.toString();
                        return new gigya.Promise((function(t, n) {
                            var o = new XMLHttpRequest;
                            o.open("GET", e), o.send(), o.onerror = n, o.onload = function() {
                                if (4 !== o.readyState || 200 !== o.status) return n("xhr failed - " + o.status + " - " + o.statusText);
                                try {
                                    var e = JSON.parse(o.responseText);
                                    return t(e)
                                } catch (e) {
                                    return n(e)
                                }
                            }
                        }))
                    }, e.prototype.delay = function(e) {
                        return o.__awaiter(this, void 0, void 0, (function() {
                            return o.__generator(this, (function(t) {
                                return [2, new gigya.Promise((function(t) {
                                    return setTimeout(t, e)
                                }))]
                            }))
                        }))
                    }, e
                }();
            t.Uri = r
        },
        8: function(e, t) {
            function n(e) {
                return e.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1")
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.trim = function(e) {
                return e.replace(/^\s*(\S*(.*\S)?)\s*$/, "$1")
            }, t.format = function(e) {
                for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                for (var o = 0; o < arguments.length - 1; o++) null != arguments[o + 1] && (e = e.split("{" + o + "}").join(arguments[o + 1]));
                return e
            }, t.capitalize = function(e) {
                return e.substring(0, 1).toUpperCase() + e.substring(1)
            }, t.endsWith = function(e, t) {
                return -1 !== e.indexOf(t, e.length - t.length)
            }, t.escapeRegExp = n, t.replaceAll = function(e, t, o) {
                return t ? e.replace(new RegExp(n(t), "g"), o) : e
            }, t.mergeCommaSeparatedValues = function(e, t) {
                void 0 === e && (e = ""), void 0 === t && (t = "");
                var n = e.concat(",", t).split(",");
                return window.gigya.utils.array.getUniqueValues(n).filter((function(e) {
                    return e
                })).join(",")
            }
        }
    });
    // end API adapters
    /*! For license information please see gigya.min.js.LICENSE.txt */
    ! function(e) {
        var t = {};

        function i(n) {
            if (t[n]) return t[n].exports;
            var o = t[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return e[n].call(o.exports, o, o.exports, i), o.l = !0, o.exports
        }
        i.m = e, i.c = t, i.d = function(e, t, n) {
            i.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: n
            })
        }, i.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, i.t = function(e, t) {
            if (1 & t && (e = i(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if (i.r(n), Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                for (var o in e) i.d(n, o, function(t) {
                    return e[t]
                }.bind(null, o));
            return n
        }, i.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return i.d(t, "a", t), t
        }, i.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, i.p = "", i(i.s = 182)
    }([function(e, t, i) {
        "use strict";
        i.r(t),
            function(e) {
                i.d(t, "__extends", (function() {
                    return o
                })), i.d(t, "__assign", (function() {
                    return r
                })), i.d(t, "__rest", (function() {
                    return a
                })), i.d(t, "__decorate", (function() {
                    return s
                })), i.d(t, "__param", (function() {
                    return c
                })), i.d(t, "__metadata", (function() {
                    return l
                })), i.d(t, "__awaiter", (function() {
                    return u
                })), i.d(t, "__generator", (function() {
                    return g
                })), i.d(t, "__exportStar", (function() {
                    return d
                })), i.d(t, "__values", (function() {
                    return p
                })), i.d(t, "__read", (function() {
                    return f
                })), i.d(t, "__spread", (function() {
                    return h
                })), i.d(t, "__spreadArrays", (function() {
                    return m
                })), i.d(t, "__await", (function() {
                    return w
                })), i.d(t, "__asyncGenerator", (function() {
                    return v
                })), i.d(t, "__asyncDelegator", (function() {
                    return y
                })), i.d(t, "__asyncValues", (function() {
                    return b
                })), i.d(t, "__makeTemplateObject", (function() {
                    return _
                })), i.d(t, "__importStar", (function() {
                    return S
                })), i.d(t, "__importDefault", (function() {
                    return I
                })), i.d(t, "__classPrivateFieldGet", (function() {
                    return A
                })), i.d(t, "__classPrivateFieldSet", (function() {
                    return P
                }));
                var n = function(e, t) {
                    return (n = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i])
                        })(e, t)
                };

                function o(e, t) {
                    function i() {
                        this.constructor = e
                    }
                    n(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
                }
                var r = function() {
                    return (r = e || function(e) {
                        for (var t, i = 1, n = arguments.length; i < n; i++)
                            for (var o in t = arguments[i]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }).apply(this, arguments)
                };

                function a(e, t) {
                    var i = {};
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (i[n] = e[n]);
                    if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                        var o = 0;
                        for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (i[n[o]] = e[n[o]])
                    }
                    return i
                }

                function s(e, t, i, n) {
                    var o, r = arguments.length,
                        a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, n);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(o = e[s]) && (a = (r < 3 ? o(a) : r > 3 ? o(t, i, a) : o(t, i)) || a);
                    return r > 3 && a && Object.defineProperty(t, i, a), a
                }

                function c(e, t) {
                    return function(i, n) {
                        t(i, n, e)
                    }
                }

                function l(e, t) {
                    if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
                }

                function u(e, t, i, n) {
                    return new(i || (i = gigya.Promise))((function(o, r) {
                        function a(e) {
                            try {
                                c(n.next(e))
                            } catch (e) {
                                r(e)
                            }
                        }

                        function s(e) {
                            try {
                                c(n.throw(e))
                            } catch (e) {
                                r(e)
                            }
                        }

                        function c(e) {
                            var t;
                            e.done ? o(e.value) : (t = e.value, t instanceof i ? t : new i((function(e) {
                                e(t)
                            }))).then(a, s)
                        }
                        c((n = n.apply(e, t || [])).next())
                    }))
                }

                function g(e, t) {
                    var i, n, o, r, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return r = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    }, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                        return this
                    }), r;

                    function s(r) {
                        return function(s) {
                            return function(r) {
                                if (i) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (i = 1, n && (o = 2 & r[0] ? n.return : r[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, r[1])).done) return o;
                                    switch (n = 0, o && (r = [2 & r[0], o.value]), r[0]) {
                                        case 0:
                                        case 1:
                                            o = r;
                                            break;
                                        case 4:
                                            return a.label++, {
                                                value: r[1],
                                                done: !1
                                            };
                                        case 5:
                                            a.label++, n = r[1], r = [0];
                                            continue;
                                        case 7:
                                            r = a.ops.pop(), a.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = a.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== r[0] && 2 !== r[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === r[0] && (!o || r[1] > o[0] && r[1] < o[3])) {
                                                a.label = r[1];
                                                break
                                            }
                                            if (6 === r[0] && a.label < o[1]) {
                                                a.label = o[1], o = r;
                                                break
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2], a.ops.push(r);
                                                break
                                            }
                                            o[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    r = t.call(e, a)
                                } catch (e) {
                                    r = [6, e], n = 0
                                } finally {
                                    i = o = 0
                                }
                                if (5 & r[0]) throw r[1];
                                return {
                                    value: r[0] ? r[1] : void 0,
                                    done: !0
                                }
                            }([r, s])
                        }
                    }
                }

                function d(e, t) {
                    for (var i in e) t.hasOwnProperty(i) || (t[i] = e[i])
                }

                function p(e) {
                    var t = "function" == typeof Symbol && Symbol.iterator,
                        i = t && e[t],
                        n = 0;
                    if (i) return i.call(e);
                    if (e && "number" == typeof e.length) return {
                        next: function() {
                            return e && n >= e.length && (e = void 0), {
                                value: e && e[n++],
                                done: !e
                            }
                        }
                    };
                    throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
                }

                function f(e, t) {
                    var i = "function" == typeof Symbol && e[Symbol.iterator];
                    if (!i) return e;
                    var n, o, r = i.call(e),
                        a = [];
                    try {
                        for (;
                            (void 0 === t || t-- > 0) && !(n = r.next()).done;) a.push(n.value)
                    } catch (e) {
                        o = {
                            error: e
                        }
                    } finally {
                        try {
                            n && !n.done && (i = r.return) && i.call(r)
                        } finally {
                            if (o) throw o.error
                        }
                    }
                    return a
                }

                function h() {
                    for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(f(arguments[t]));
                    return e
                }

                function m() {
                    for (var e = 0, t = 0, i = arguments.length; t < i; t++) e += arguments[t].length;
                    var n = Array(e),
                        o = 0;
                    for (t = 0; t < i; t++)
                        for (var r = arguments[t], a = 0, s = r.length; a < s; a++, o++) n[o] = r[a];
                    return n
                }

                function w(e) {
                    return this instanceof w ? (this.v = e, this) : new w(e)
                }

                function v(e, t, i) {
                    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                    var n, o = i.apply(e, t || []),
                        r = [];
                    return n = {}, a("next"), a("throw"), a("return"), n[Symbol.asyncIterator] = function() {
                        return this
                    }, n;

                    function a(e) {
                        o[e] && (n[e] = function(t) {
                            return new gigya.Promise((function(i, n) {
                                r.push([e, t, i, n]) > 1 || s(e, t)
                            }))
                        })
                    }

                    function s(e, t) {
                        try {
                            (i = o[e](t)).value instanceof w ? gigya.Promise.resolve(i.value.v).then(c, l) : u(r[0][2], i)
                        } catch (e) {
                            u(r[0][3], e)
                        }
                        var i
                    }

                    function c(e) {
                        s("next", e)
                    }

                    function l(e) {
                        s("throw", e)
                    }

                    function u(e, t) {
                        e(t), r.shift(), r.length && s(r[0][0], r[0][1])
                    }
                }

                function y(e) {
                    var t, i;
                    return t = {}, n("next"), n("throw", (function(e) {
                        throw e
                    })), n("return"), t[Symbol.iterator] = function() {
                        return this
                    }, t;

                    function n(n, o) {
                        t[n] = e[n] ? function(t) {
                            return (i = !i) ? {
                                value: w(e[n](t)),
                                done: "return" === n
                            } : o ? o(t) : t
                        } : o
                    }
                }

                function b(e) {
                    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                    var t, i = e[Symbol.asyncIterator];
                    return i ? i.call(e) : (e = p(e), t = {}, n("next"), n("throw"), n("return"), t[Symbol.asyncIterator] = function() {
                        return this
                    }, t);

                    function n(i) {
                        t[i] = e[i] && function(t) {
                            return new gigya.Promise((function(n, o) {
                                (function(e, t, i, n) {
                                    gigya.Promise.resolve(n).then((function(t) {
                                        e({
                                            value: t,
                                            done: i
                                        })
                                    }), t)
                                })(n, o, (t = e[i](t)).done, t.value)
                            }))
                        }
                    }
                }

                function _(e, t) {
                    return Object.defineProperty ? Object.defineProperty(e, "raw", {
                        value: t
                    }) : e.raw = t, e
                }

                function S(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var i in e) Object.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                    return t.default = e, t
                }

                function I(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }

                function A(e, t) {
                    if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
                    return t.get(e)
                }

                function P(e, t, i) {
                    if (!t.has(e)) throw new TypeError("attempted to set private field on non-instance");
                    return t.set(e, i), i
                }
            }.call(this, i(0).__assign)
    }, , function(e, t, i) {
        var n, o;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = i(11),
            a = navigator.userAgent.toLowerCase();
        t.localInfo = {
            isXhrEnabled: !0,
            baseDomain: "",
            isBrowserSupportsFilesAPI: "function" == typeof FileReader || "object" == typeof FileReader,
            initTime: new Date,
            version: 0,
            pageDomain: document.location.hostname,
            protocol: "http:" == document.location.protocol ? "http" : "https",
            userAgent: a,
            isWin: -1 != a.indexOf("win"),
            isIE: -1 != a.indexOf("msie") || -1 != a.indexOf("mozilla") && -1 != a.indexOf("trident"),
            isIE6: -1 != a.indexOf("msie 6."),
            isIE7: -1 != a.indexOf("msie 7."),
            isIE8: -1 != a.indexOf("msie 8."),
            isIE9: -1 != a.indexOf("msie 9."),
            isIE10: -1 != a.indexOf("msie 10."),
            isIE11: -1 != a.indexOf("mozilla") && -1 != a.indexOf("trident/7.0"),
            isEdgeLegacy: -1 != a.indexOf("edge"),
            isEdge: RegExp(/edg(?!e)/).test(a),
            isIOS: -1 != a.indexOf("iphone") || -1 != a.indexOf("ipad") || -1 != a.indexOf("ipod"),
            isSafari534: -1 != a.indexOf("safari/534"),
            isWeChat: -1 != a.indexOf("micromessenger"),
            iosVersion: -1 != a.indexOf("applewebkit") && -1 != a.indexOf("version/") ? parseInt(a.split("version/")[1].split(" ")[0]) : 0,
            isAndroid: -1 != a.indexOf("android"),
            isAndroidBrowser: function(e) {
                if (-1 === e.indexOf("mozilla/5.0")) return !1;
                if (-1 === e.indexOf("android 4")) return !1;
                if (-1 === e.indexOf("applewebkit")) return !1;
                if (-1 !== e.indexOf("windows phone")) return !1;
                var t = /chrome\/(\d+)/.exec(e);
                return !t || parseInt(t[1]) < 20
            }(a),
            currentBrowser: "",
            androidVersion: -1 != a.indexOf("android") ? parseFloat(a.slice(a.indexOf("android") + 8)) : 0,
            isChrome: -1 != a.indexOf("chrome") && -1 == a.indexOf("edg"),
            isGoogleBot: -1 != a.indexOf("googlebot"),
            isFF: -1 != a.indexOf("firefox"),
            isOpera: -1 != a.indexOf("opera"),
            isSafari: navigator.appVersion && -1 != navigator.appVersion.toLowerCase().indexOf("safari") && -1 == navigator.appVersion.toLowerCase().indexOf("chrome") && -1 == a.indexOf("android"),
            isIOSWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),
            isIOSChrome: -1 != a.indexOf("crios"),
            isMAC: navigator.appVersion && -1 != navigator.appVersion.toLowerCase().indexOf("mac"),
            isWindowsPhone: -1 != a.indexOf("windows phone"),
            isFacebookBrowser: -1 != a.indexOf("fban") || -1 != a.indexOf("fbav"),
            supportsPostMessage: null != window.postMessage && (-1 == a.indexOf("msie") || -1 != a.indexOf("iemobile")),
            supportsLocalStorage: !1,
            supportsSessionStorage: !1,
            supportsFlash: function() {
                var e = !1;
                try {
                    if (navigator.mimeTypes && null != navigator.mimeTypes["application/x-shockwave-flash"] && navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin) e = !0;
                    else new ActiveXObject("ShockwaveFlash.ShockwaveFlash") && (e = !0)
                } catch (e) {}
                return e
            }(),
            quirksMode: "BackCompat" == document.compatMode && -1 != a.indexOf("msie"),
            backCompat: "BackCompat" == document.compatMode,
            isMobile: function() {
                var e = ["iphone", "ipod", "android", "midp", "240x320", "blackberry", "netfront", "nokia", "panasonic", "portalmmm", "sharp", "sie-", "sonyericsson", "symbian", "windows ce", "benq", "mda", "mot-", "opera mini", "philips", "pocket pc", "sagem", "samsung", "htc"];
                for (var t in e)
                    if (-1 != a.indexOf(e[t])) return !0;
                return !1
            }(),
            isMobileApp: function() {
                if (!document.getElementsByTagName) return !1;
                for (var e = document.getElementsByTagName("meta"), t = 0; t < e.length; t++)
                    if ("viewport" == e[t].getAttribute("name")) {
                        var i = e[t].getAttribute("content");
                        if (i && -1 !== i.indexOf("width=device-width")) return !0
                    } return !1
            }(),
            isNativeMobileApp: !1,
            isTouch: function() {
                if ("ontouchstart" in window) return !0;
                if ("onmsgesturechange" in window) try {
                    return new ActiveXObject("htmlfile"), !1
                } catch (e) {
                    return !0
                }
                return !1
            }(),
            isOnLine: function() {
                return navigator.onLine
            },
            messagingMethod: 1
        };
        var s = function(e) {
            try {
                var t = window[e];
                if (!t) return !1;
                var i = "_gig_localStorage_test",
                    n = "just checking for localStorage";
                t.setItem(i, n);
                var o = t.getItem(i) === n;
                return t.removeItem(i), o
            } catch (e) {
                return !1
            }
        };
        t.localInfo.supportsLocalStorage = s("localStorage"), t.localInfo.supportsSessionStorage = s("sessionStorage"), t.localInfo.isMAC = t.localInfo.isMAC && !t.localInfo.isIOS;
        var c = t.localInfo.isWin ? "windows" : t.localInfo.isWindowsPhone ? "winphone" : t.localInfo.isIOS ? "ios-v" + t.localInfo.iosVersion : t.localInfo.isMAC ? "mac" : t.localInfo.isAndroid ? "android" : "";
        c && (c += " ");
        var l, u = t.localInfo.isChrome ? "chrome" : t.localInfo.isFF ? "firefox" : t.localInfo.isSafari ? "safari" : t.localInfo.isEdge ? "edge" : t.localInfo.isEdgeLegacy ? "edge legacy" : t.localInfo.isIE11 ? "ie11" : t.localInfo.isIE10 ? "ie10" : t.localInfo.isIE9 ? "ie9" : t.localInfo.isIE8 ? "ie8" : "";
        t.localInfo.currentBrowser = c + u, (null === (o = null === (n = window.gigya.partnerSettings) || void 0 === n ? void 0 : n.baseDomains) || void 0 === o ? void 0 : o.length) ? l = window.gigya.partnerSettings.baseDomains : (window.self === window.top && window.gigya.logger.warn("gigya: missing base domains for site"), l = [document.location.hostname]), t.localInfo.baseDomain = r.getBaseDomain(l)
    }, function(module, exports) {
        function serialize(e, t, i, n, o) {
            if (void 0 === t && (t = !1), void 0 === i && (i = !1), void 0 === n && (n = 0), void 0 === o && (o = 20), window.gigya.localInfo.isIE8) {
                if (n || (n = 0), n > o) return "[Too deep]";
                var r = "",
                    a = "",
                    s = "";
                if (i) {
                    s = "\t", a = "\n";
                    for (var c = 0; c < n + 1; c++) r += s
                }
                var l = typeof e;
                if ("function" == l) return l.toString();
                if ("object" != l || null === e) return "string" == l && (e = '"' + e.replace(/(\"|\\)/g, "\\$1").replace(/\r\n|\r|\n/g, "\\n") + '"'), String(e);
                var u, g, d = [],
                    p = e && e.constructor == Array;
                if (p)
                    for (c = 0; c < e.length; c++) l = typeof(g = e[c]), null == g || "undefined" == l ? g = "" : "string" == l ? g = '"' + g.replace(/(\"|\\)/g, "\\$1").replace(/\r\n|\r|\n/g, "\\n") + '"' : "function" == l ? g = t ? "Function" : "" : g.parentNode && g.innerHTML ? g = "HTMLElement" : g.constructor == Date ? g = "" : "object" == l && null !== g && (g = serialize(g, t, i, n + 1)), "" != String(g) && d.push(r + s + String(g));
                else
                    for (u in e) l = typeof(g = e[u]), null == g || "undefined" == l ? g = String(g) : "string" == l ? g = '"' + g.replace(/(\"|\\)/g, "\\$1").replace(/\r\n|\r|\n/g, "\\n") + '"' : "function" == l ? g = t ? "Function" : "" : g.parentNode && g.innerHTML ? g = "HTMLElement" : g.constructor == Date ? g = "" : "object" == l && null !== g && (g = a + serialize(g, t, i, n + 1)), "" != String(g) && d.push(r + s + '"' + u.replace(/(\"|\\)/g, "\\$1").replace(/\r\n|\r|\n/g, "\\n") + '":' + String(g));
                return a + r + (p ? "[" : "{") + a + d.join("," + a) + a + r + (p ? "]" : "}")
            }
            return window.JSON.stringify(e)
        }

        function deserialize(json, defaultValue, scope) {
            if (!json || !json.replace(/^\s+|\s+$/g, "")) return defaultValue || {};
            try {
                var keys = [],
                    values = [];
                if (scope)
                    for (var key in scope) keys.push(key), values.push(scope[key]);
                var fn = eval("(function(" + keys.join(",") + ") { return " + json.trim() + "; })");
                return fn.apply(void 0, values)
            } catch (e) {
                return console.warn("Error deserializing JavaScript", e), defaultValue || {}
            }
        }

        function parse(e, t) {
            if (window.gigya.localInfo.isIE8) return deserialize(e, t);
            try {
                return window.JSON.parse(e)
            } catch (e) {
                return t || {}
            }
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.serialize = serialize, exports.deserialize = deserialize, exports.parse = parse
    }, function(e, t, i) {
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = i(3),
                o = i(23);

            function r(e, t, i) {
                if (!t) return e;
                for (var n = e, o = t.split("."), r = 0; r < o.length; r++) {
                    var a = o[r],
                        s = null;
                    a.match(/\[[0-9]+]/) && (s = Number(a.match(/\[[0-9]+]/)[0].replace(/[\[\]]/g, ""))), a = a.split(/\[[0-9]+]/).join("");
                    var c = (s || 0 === s) && n[a] ? n[a][s] : n[a];
                    if (i && !n[a] ? n[a] = {} : i && !c && !1 !== c && (n[a] = []), !c && !1 !== c) return null;
                    n = c
                }
                return n
            }

            function a(e, t, i, n, r, s) {
                if (void 0 === n && (n = 20), void 0 === r && (r = 0), r > n) return null;
                if (void 0 === e || null == e) return o.default.isOn("removeUndefinedProperties") ? e : null;
                if ("function" == typeof e && i) return null;
                if (e.constructor == Array) {
                    for (var c = [], l = 0; l < e.length; l++) i && "function" == typeof e[l] || (c[l] = t ? a(e[l], t, i, n, r + 1, s) : e[l]);
                    return c
                }
                if ("object" == typeof e) {
                    var u = {};
                    for (var g in e) s && "context" == g || i && "function" == typeof e[g] || (u[g] = t ? a(e[g], t, i, n, r + 1, s) : e[g]);
                    return u
                }
                return e
            }

            function s(e, t, i) {
                if (null != e) {
                    if (null == t && (t = {}), e.constructor == Array)
                        for (var n = 0; n < e.length; n++) s(e[n], t, i);
                    else if (i) {
                        var o = i.split("|"),
                            r = {};
                        for (var c in e) r[c.toLowerCase()] = 1;
                        for (var l = 0; l < o.length; l++) {
                            var u = o[l];
                            r[u.toLowerCase()] && (t[u] = e[u])
                        }
                    } else t = a(e, !1);
                    return t
                }
            }
            t.removeUndefined = function(e) {
                var t = {};
                for (var i in e) null != e[i] && null != e[i] && (t[i] = e[i]);
                return t
            }, t.expressionHelper = function(e) {
                return e = e || {}, {
                    getField: function(t) {
                        if (t) {
                            var i, n = t.split("."),
                                o = e;
                            for (i = 0; i < n.length; ++i) {
                                if (null == o[n[i]]) return;
                                o = o[n[i]]
                            }
                            return o
                        }
                    }
                }
            }, t.getPropertyBySerializedName = r, t.setPropertyBySerializedName = function(e, t, i) {
                var n = t.split("."),
                    o = n.pop();
                r(e, n.join("."), !0)[o] = i
            }, t.add = function(e, t, i) {
                for (var n in t) i && void 0 !== e[n] || (e[n] = t[n])
            }, t.getHash = function(e) {
                var t = [];
                for (var i in e) {
                    var o;
                    "object" == typeof e[i] ? o = n.serialize(e[i], !1) : e[i] && (o = e[i].toString()), t.push(i + "=" + o)
                }
                return t.sort().join("&")
            }, t.getMurmurHash = function(e, t) {
                var i, n, o, r, a, s, c, l;
                for (t || (t = 0), i = 3 & e.length, n = e.length - i, o = t, a = 3432918353, s = 461845907, l = 0; l < n;) c = 255 & e.charCodeAt(l) | (255 & e.charCodeAt(++l)) << 8 | (255 & e.charCodeAt(++l)) << 16 | (255 & e.charCodeAt(++l)) << 24, ++l, o = 27492 + (65535 & (r = 5 * (65535 & (o = (o ^= c = (65535 & (c = (c = (65535 & c) * a + (((c >>> 16) * a & 65535) << 16) & 4294967295) << 15 | c >>> 17)) * s + (((c >>> 16) * s & 65535) << 16) & 4294967295) << 13 | o >>> 19)) + ((5 * (o >>> 16) & 65535) << 16) & 4294967295)) + ((58964 + (r >>> 16) & 65535) << 16);
                switch (c = 0, i) {
                    case 3:
                        c ^= (255 & e.charCodeAt(l + 2)) << 16;
                    case 2:
                        c ^= (255 & e.charCodeAt(l + 1)) << 8;
                    case 1:
                        o ^= c = (65535 & (c = (c = (65535 & (c ^= 255 & e.charCodeAt(l))) * a + (((c >>> 16) * a & 65535) << 16) & 4294967295) << 15 | c >>> 17)) * s + (((c >>> 16) * s & 65535) << 16) & 4294967295
                }
                return o ^= e.length, o = 2246822507 * (65535 & (o ^= o >>> 16)) + ((2246822507 * (o >>> 16) & 65535) << 16) & 4294967295, o = 3266489909 * (65535 & (o ^= o >>> 13)) + ((3266489909 * (o >>> 16) & 65535) << 16) & 4294967295, (o ^= o >>> 16) >>> 0
            }, t.clone = a, t.merge = function e(t, i) {
                for (var n = {}, o = 0; o < t.length; o++)
                    if (t[o] && t[o].length)
                        for (var r = 0; r < t[o].length; r++)
                            for (var a in t[o][r]) n[a] = t[o][r][a];
                    else if (i)
                    for (var a in t[o]) "object" != typeof n[a] || n[a] instanceof Array ? n[a] = t[o][a] : n[a] = e([n[a], t[o][a]], !0);
                else
                    for (var a in t[o]) n[a] = t[o][a];
                return n
            }, t.unflatten = function(e) {
                if (Object(e) !== e || Array.isArray(e)) return e;
                var t = {};
                for (var i in e) {
                    for (var n = t, o = "", r = i.replace(/\[([0-9])]/, ".$1").split("."), a = 0; a < r.length; a++) {
                        var s = !isNaN(Number(r[a]));
                        n = n[o] || (n[o] = s ? [] : {}), o = r[a]
                    }
                    n[o] = e[i]
                }
                return t[""] || {}
            }, t.flatten = function(e, t) {
                void 0 === t && (t = !1);
                var i = {};
                return function e(n, o) {
                    if (Object(n) !== n) i[o] = n;
                    else if (Array.isArray(n)) {
                        for (var r = n.length, a = 0; a < r; a++) {
                            var s = t ? o + "[" + a + "]" : o + "." + a;
                            e(n[a], o ? s : String(a))
                        }
                        0 === r && (i[o] = [])
                    } else {
                        var c = !0;
                        for (var l in n) c = !1, e(n[l], o ? o + "." + l : l);
                        c && "" !== o && (i[o] = {})
                    }
                }(e, ""), i
            }, t.extractProperties = s, t.extractProperty = function(e, t) {
                return s(e, void 0, t)[t]
            }, t.parseToObject = function(e) {
                try {
                    var t = window.JSON.parse(e);
                    if ("object" == typeof t) return t
                } catch (e) {}
            }, t.removePropertiesPrefix = function(t, i) {
                return void 0 === t && (t = {}), void 0 === i && (i = ""), Object.keys(t).reduce((function(n, o) {
                    var r;
                    return e(n, ((r = {})[o.replace(i, "")] = t[o], r))
                }), {})
            }, t.normalizeObjectKeysToLowerCase = function(e) {
                for (var t in e) e[t.toLowerCase()] = e[t];
                return e
            }, t.decodeObjectKeys = function(e) {
                var t = {};
                for (var i in e) {
                    for (var n = i; - 1 !== n.indexOf("%");) n = decodeURIComponent(n);
                    t[n] = e[i]
                }
                return t
            }
        }).call(this, i(0).__assign)
    }, function(module, exports, __webpack_require__) {
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var DOMUtils = __webpack_require__(9),
            cdn_1 = __webpack_require__(14),
            LocalInfo_1 = __webpack_require__(2);

        function callFunction(name, arParams) {
            var fn = eval(name),
                arParts = name.split(".");
            arParts.splice(arParts.length - 1, 1);
            var scope = eval(arParts.join("."));
            fn.apply(scope, arParams)
        }

        function invokeOnPageLoad(e, t) {
            if (!document.readyState && document.body || "complete" === document.readyState || !t && "interactive" === document.readyState && document.body) e();
            else {
                var i = !1,
                    n = function() {
                        i || (i = !0, e())
                    };
                window.setTimeout(n, 2e4), DOMUtils.addEventListener(window, "load", n), DOMUtils.addEventListener(document, "DOMContentLoaded", n)
            }
        }

        function createAlias(e, t) {
            for (var i = e.split("."), n = window, o = 0; o < i.length - 1; o++) {
                var r = i[o];
                n[r] || (n[r] = {}), n = n[r]
            }
            n[i[i.length - 1]] = t
        }

        function debounce(e, t) {
            var i = void 0;
            return function() {
                void 0 !== i && clearTimeout(i), i = setTimeout((function() {
                    i = void 0, e()
                }), t)
            }
        }

        function addSrcToIFrameIfNeeded(e, t) {
            void 0 === t && (t = cdn_1.getCdnResource("/")), (LocalInfo_1.localInfo.isIOSWebView || LocalInfo_1.localInfo.isIOS && LocalInfo_1.localInfo.isWeChat) && e.setAttribute("src", t)
        }
        exports.callFunction = callFunction, exports.invokeOnPageLoad = invokeOnPageLoad, exports.createAlias = createAlias, exports.debounce = debounce, exports.addSrcToIFrameIfNeeded = addSrcToIFrameIfNeeded
    }, function(e, t, i) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i(0),
            o = i(8),
            r = function() {
                function e(e, t) {
                    void 0 === t && (t = !0), this._anchor = document.createElement("a");
                    var i = "http:" == document.location.protocol ? "http" : "https";
                    t && -1 === e.indexOf("://") && "/" !== e.charAt(0) && (e = i + "://" + e), this._anchor.href = e
                }
                return Object.defineProperty(e.prototype, "domain", {
                    get: function() {
                        return this._anchor.hostname
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "path", {
                    get: function() {
                        return this._anchor.pathname
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "href", {
                    get: function() {
                        return this._anchor.href
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "search", {
                    get: function() {
                        return this._anchor.search.slice(1)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "hash", {
                    get: function() {
                        return this._anchor.hash.slice(1)
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.toString = function() {
                    return this._anchor.href
                }, e.prototype.addToSearch = function(e) {
                    for (var t in e) {
                        var i = e[t];
                        if (("boolean" == typeof i || "number" == typeof i || "string" == typeof i) && "eventName" != t) {
                            var n = this._anchor.search ? "&" : "";
                            this._anchor.search += "" + n + t + "=" + encodeURIComponent(e[t])
                        }
                    }
                    return this
                }, e.prototype.fetch = function(e) {
                    return void 0 === e && (e = 0), n.__awaiter(this, void 0, void 0, (function() {
                        var t, i;
                        return n.__generator(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return n.trys.push([0, 5, , 8]), window.fetch ? [4, this.browserFetch()] : [3, 2];
                                case 1:
                                    return t = n.sent(), [3, 4];
                                case 2:
                                    return [4, this.xhr()];
                                case 3:
                                    t = n.sent(), n.label = 4;
                                case 4:
                                    return [2, t];
                                case 5:
                                    if (i = n.sent(), e <= 0) throw new Error("fetch failed: " + i);
                                    return [4, this.delay(1)];
                                case 6:
                                    return n.sent(), [4, this.fetch(e - 1)];
                                case 7:
                                    return [2, n.sent()];
                                case 8:
                                    return [2]
                            }
                        }))
                    }))
                }, e.prototype.isBaseOf = function(t) {
                    return e.parse(t).isIn(this)
                }, e.prototype.isIn = function(t) {
                    return "string" == typeof t && (t = e.parse(t)), (this.domain == t.domain || this.isSubDomainOf(t)) && (!t.path || 0 == this.path.indexOf(t.path))
                }, e.prototype.isForSubDomains = function() {
                    return 0 == this.domain.indexOf(".")
                }, e.prototype.isSubDomainOf = function(e) {
                    var t = "";
                    return e.isForSubDomains() || (t = "."), t += e.domain, o.endsWith(this.domain, t)
                }, e.parse = function(t, i) {
                    if (void 0 === i && (i = !0), t) return new e(t, i)
                }, e.prototype.browserFetch = function() {
                    return n.__awaiter(this, void 0, void 0, (function() {
                        var e, t;
                        return n.__generator(this, (function(i) {
                            switch (i.label) {
                                case 0:
                                    return e = this.toString(), [4, window.fetch(e)];
                                case 1:
                                    if (!(t = i.sent()).ok) throw new Error("fetch failed");
                                    return [2, t.json()]
                            }
                        }))
                    }))
                }, e.prototype.xhr = function() {
                    var e = this.toString();
                    return new gigya.Promise((function(t, i) {
                        var n = new XMLHttpRequest;
                        n.open("GET", e), n.send(), n.onerror = i, n.onload = function() {
                            if (4 !== n.readyState || 200 !== n.status) return i("xhr failed - " + n.status + " - " + n.statusText);
                            try {
                                var e = JSON.parse(n.responseText);
                                return t(e)
                            } catch (e) {
                                return i(e)
                            }
                        }
                    }))
                }, e.prototype.delay = function(e) {
                    return n.__awaiter(this, void 0, void 0, (function() {
                        return n.__generator(this, (function(t) {
                            return [2, new gigya.Promise((function(t) {
                                return setTimeout(t, e)
                            }))]
                        }))
                    }))
                }, e
            }();
        t.Uri = r
    }, , function(e, t) {
        function i(e) {
            return e.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.trim = function(e) {
            return e.replace(/^\s*(\S*(.*\S)?)\s*$/, "$1")
        }, t.format = function(e) {
            for (var t = [], i = 1; i < arguments.length; i++) t[i - 1] = arguments[i];
            for (var n = 0; n < arguments.length - 1; n++) null != arguments[n + 1] && (e = e.split("{" + n + "}").join(arguments[n + 1]));
            return e
        }, t.capitalize = function(e) {
            return e.substring(0, 1).toUpperCase() + e.substring(1)
        }, t.endsWith = function(e, t) {
            return -1 !== e.indexOf(t, e.length - t.length)
        }, t.escapeRegExp = i, t.replaceAll = function(e, t, n) {
            return t ? e.replace(new RegExp(i(t), "g"), n) : e
        }, t.mergeCommaSeparatedValues = function(e, t) {
            void 0 === e && (e = ""), void 0 === t && (t = "");
            var i = e.concat(",", t).split(",");
            return window.gigya.utils.array.getUniqueValues(i).filter((function(e) {
                return e
            })).join(",")
        }
    }, function(e, t, i) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i(2),
            o = i(29),
            r = i(5);
        t._popupContainers = [], t._pseudoContainers = [];
        var a = 999999999,
            s = null;

        function c() {
            return ++a
        }

        function l(e, t, i) {
            e && i && (e.addEventListener ? e.addEventListener(t, i, !0) : e.attachEvent("on" + t, i))
        }

        function u(e, t, i) {
            i && (e.removeEventListener ? e.removeEventListener(t, i, !0) : e.detachEvent("on" + t, i))
        }

        function g() {
            s && (u(window, "hashchange", s), s = null, window.location.hash = window.location.hash.replace("|gigyaMobileDialog", ""))
        }

        function d(e, t) {
            void 0 === t && (t = window.document), t.body && (t.body.insertBefore && t.body.firstChild ? t.body.insertBefore(e, t.body.firstChild) : t.body.appendChild(e))
        }

        function p(e) {
            var t = [];
            return "string" == typeof e.className && (t = e.className.split(" ")), t
        }

        function f(e, t) {
            if (!e) return !1;
            if (!t) return !0;
            if (!e.className) return !1;
            for (var i = !1, n = p(e), o = 0; o < n.length; o++)
                if (n[o] === t) {
                    i = !0;
                    break
                } return i
        }
        t.getNextZIndex = c, t.getGigyaScriptElement = function(e) {
            for (var t, i = document.getElementsByTagName("script"), n = /\/\/cdn(s)?\.(ru1\.)?gigya.com/, o = i.length - 1; o >= 0; o--) {
                var r = i[o],
                    a = r.src.toLowerCase();
                if ("" !== a)
                    if (n.test(a) || a.indexOf("?apikey=") > -1)
                        if (0 === e.length || e.some((function(e) {
                                return a.indexOf(e) > -1
                            }))) {
                            t = r;
                            break
                        }
            }
            return t
        }, t.dispatch = function(e, t) {
            var i;
            try {
                i = new Event(t)
            } catch (e) {
                (i = document.createEvent("CustomEvent")).initCustomEvent(t, !0, !0, {})
            }
            e.dispatchEvent(i)
        }, t.addButtonSubmitListener = function(e, t, i, n) {
            void 0 === i && (i = "click"), e && (e.setAttribute("role", "button"), "-1" != e.getAttribute("tabindex") && e.setAttribute("tabindex", "0"), l(e, i, (function(e) {
                return t(e)
            })), l(e, "keydown", (function(e) {
                13 == (e.which || e.keyCode) && (e.preventDefault(), t(e))
            })))
        }, t.addEventListener = l, t.removeEventListener = u, t.disableDefaultEventHandling = function(e) {
            e.preventDefault ? e.preventDefault() : window.event && (window.event.returnValue = !1)
        }, t.addDialogBackListener = function(e) {
            g(), s = function(t) {
                t && t.newURL && -1 == t.newURL.indexOf("|gigyaMobileDialog") && (e(t), g())
            }, window.setTimeout((function() {
                -1 == window.location.hash.indexOf("|gigyaMobileDialog") && (window.location.hash = window.location.hash + "|gigyaMobileDialog"), l(window, "hashchange", s)
            }), 50)
        }, t._removeDialogBackListener = g, t.appendToBody = d, t.removeElement = function(e) {
            e && e.parentElement && e.parentElement.removeChild(e)
        }, t.isChildOf = function(e, t) {
            for (var i = e.parentNode; i;) {
                if (t == i) return !0;
                i = i.parentNode
            }
            return !1
        }, t.isVisible = function(e) {
            for (; e;) {
                var t = getComputedStyle(e);
                if ("none" === t.display || "hidden" === t.visibility) return !1;
                e = e.parentElement
            }
            return !0
        }, t.getCenteredDivID = function(e) {
            return "gig_" + n.localInfo.initTime.getTime().toString() + "_" + e
        }, t.createElementWithAttributes = function(e, t) {
            var i = document.createElement(e);
            if (t)
                for (var n in t) i[n] = t[n];
            return i
        }, t.createTopLevelDiv = function(e) {
            var t = document.createElement("div");
            return null != t.style.zIndex && (t.style.zIndex = "" + c()), t.innerHTML = "", e && (t.id = e), document.body && (document.body.insertBefore && document.body.firstChild ? document.body.insertBefore(t, document.body.firstChild) : document.body.appendChild && document.body.appendChild(t)), t
        }, t.hideByID = function(e) {
            var t = document.getElementById(e);
            t && (t.style.display = "none")
        }, t.showByID = function(e) {
            var t = document.getElementById(e);
            t && (t.style.display = n.localInfo.isIE6 ? "TD" == t.tagName ? "table-cell" : "TR" == t.tagName || "TABLE" == t.tagName ? "" : "block" : "")
        }, t.clearByID = function(e) {
            try {
                var t = document.getElementById(e);
                null != t && (t.innerHTML = "")
            } catch (e) {}
        }, t.getHTMLSize = function(e, t) {
            var i = document.createElement("div");
            i.style.position = "absolute", i.style.left = "-1000px", i.innerHTML = e, t.appendChild(i);
            var n = i.offsetWidth,
                o = i.offsetHeight;
            return i.parentNode.removeChild(i), {
                w: n,
                h: o
            }
        }, t.getElementsByClass = function(e, t, i) {
            if (!e) return [];
            var n = [];
            i && f(e, t) && n.push(e);
            for (var o = e.getElementsByTagName("*"), r = 0; r < o.length; r++) f(o[r], t) && n.push(o[r]);
            return n || []
        }, t.getElementsByAttribute = function(e, t, i, n) {
            for (var o = [], r = e.getElementsByTagName(t), a = 0; a < r.length; a++) r[a].getAttribute(i) == n && o.push(r[a]);
            return o
        }, t.getElementPosition = function(e) {
            if (!e) return {
                left: 0,
                top: 0,
                bottom: 0,
                right: 0
            };
            var t = e.getBoundingClientRect(),
                i = o.getScroll(),
                n = t.left + i.left,
                r = t.top + i.top;
            return {
                left: n,
                top: r,
                right: n + t.width,
                bottom: r + t.height
            }
        }, t.addClassToElement = function(e, t) {
            if (e) {
                var i = e.className ? p(e) : [],
                    n = i.length,
                    o = t.split(" ");
                for (var r in o) {
                    var a = !1;
                    if (!o[r]) break;
                    for (var s in i)
                        if (i[s] === o[r]) {
                            a = !0;
                            break
                        } a || i.push(o[r])
                }
                i.length !== n && (e.className = i.join(" "))
            }
        }, t.removeClassFromElement = function(e, t, i) {
            if (void 0 === i && (i = !1), e) {
                for (var n = p(e), o = n.length - 1; o >= 0; o--)(n[o] === t || i && -1 !== n[o].indexOf(t)) && n.splice(o, 1);
                e.className = n.join(" ")
            }
        }, t.getClassNames = p, t.isElementClass = f, t.cancelEvent = function(e) {
            e && ("cancelable" in e ? e.preventDefault() : e.returnValue = !1)
        }, t.createElement = function(e, t) {
            var i = document.createElement("div");
            return t = t || "", i.innerHTML = "<" + e + ' name="' + t + '" id="' + t + '"></' + e + ">", i.firstChild
        }, t.setSize = function(e, t, i, n) {
            if (null != e && null != e.style) {
                if (t) {
                    var r = (t = "" + t).indexOf("%") > 0;
                    if (!isNaN(t) || r) {
                        var a = "" + (r ? t : t + "px");
                        e.style.width != a && (e.style.width = a)
                    }
                }
                if (i) {
                    var s = (i = "" + i).indexOf("%") > 0;
                    if (!isNaN(t) || s) {
                        var l = "" + (s ? i : i + "px");
                        e.style.height !== l && (e.style.height = l)
                    }
                }
                if (n && t && i) {
                    (null == e.style.zIndex || n) && (e.style.zIndex = "" + c());
                    var u = o.getInnerSize(),
                        g = o.getScroll(),
                        d = g.top,
                        p = g.left;
                    e.style.top = Math.max(0, d + Math.floor((u.h - i) / 2)) + "px", e.style.left = Math.max(0, p + Math.floor((u.w - t) / 2)) + "px", e.style.visibility = ""
                }
            }
        }, t.createHiddenIframe = function(e) {
            var t = document.createElement("iframe");
            return t.src = e, t.style.width = "30px", t.style.height = "10px", t.style.position = "absolute", t.style.top = "-1000px", t.style.left = "-1000px", document.body ? d(t) : r.invokeOnPageLoad((function() {
                d(t)
            })), t
        }, t.attributeEncode = function(e) {
            return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\"/g, "&quot;").replace(/\'/g, "&#39;")
        }, t.manipulateAttributes = function(e, t, i, n) {
            void 0 === n && (n = function() {
                return !0
            }), e.forEach((function(e) {
                e.attributes && Array.prototype.slice.call(e.attributes).forEach((function(e) {
                    n(e) && (e.value = e.value.replace(t, i))
                }))
            }))
        }, t.textNodesUnder = function(e) {
            for (var t, i = [], n = document.createTreeWalker(e, NodeFilter.SHOW_TEXT, null, !1); t = n.nextNode();) i.push(t);
            return i
        }, t.isHTMLBooleanAttribute = function(e) {
            return ["autocomplete", "autofocus", "checked", "disabled", "hidden", "readonly", "required", "selected"].indexOf(e) > -1
        }, t.isBelongToGigyaFieldset = function e(t) {
            return !(!t || t instanceof HTMLFormElement) && (!!f(t.parentElement, "gigya-fieldset") || e(t.parentElement))
        }
    }, function(e, t, i) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i(18),
            o = i(4);

        function r(e) {
            return decodeURIComponent(e.replace(/\+/g, " "))
        }

        function a(e, t) {
            return e && -1 !== e.indexOf("?") ? n.deserialize(e.split("#")[0].split("?")[1], "&", t) : {}
        }
        t.URLEncode = function(e) {
            return encodeURIComponent(e)
        }, t.URLDecode = r, t.URLDecodeRecursive = function(e) {
            for (var t = "", i = e; i != t;) i = r(t = i);
            return i
        }, t.getParamsFromURL = a, t.getParamValueFromURL = function(e, t, i) {
            if (null == t || "" == t) return i;
            var n = t.indexOf("?");
            if (-1 === n) return i;
            var o = "&" + t.substr(n + 1),
                r = o.toLowerCase().indexOf("&" + e.toLowerCase() + "=");
            if (-1 === r) return i;
            var a = o.substr(r + (1 + e.length + 1)) + "&";
            return r = a.indexOf("&"), a.substr(0, r)
        }, t.addParamsToURL = function(e, t) {
            var i = a(e);
            o.add(i, t);
            var r = e.split("#"),
                s = r[0].split("?")[0] + "?" + n.serialize(i, "&");
            return r.length > 1 && (s += "#" + r[1]), s
        }
    }, function(e, t, i) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i(6),
            o = i(8),
            r = i(2),
            a = ["socialize", "accounts", "fidm", "gm", "comments", "gcs", "ids", "ds", "gscounters"];

        function s(e, t, i) {
            void 0 === t && (t = window.gigya.dataCenter), void 0 === i && (i = window.gigya.defaultApiDomain);
            var n = t + "." + i;
            return e ? e + "." + n : n
        }

        function c(e, t, i, n) {
            return void 0 === e && (e = window.gigya.partnerSettings && window.gigya.partnerSettings.customAPIDomainPrefix), void 0 === t && (t = r.localInfo.baseDomain), void 0 === i && (i = window.gigya.dataCenter), void 0 === n && (n = window.gigya.defaultApiDomain), e && t && t !== n ? e + "." + t : s(void 0, i, n)
        }
        t.apiDomainFactory = function(e, t) {
            void 0 === e && (e = c()), void 0 === t && (t = window.gigya.defaultApiDomain);
            var i = n.Uri.parse(e).isIn(n.Uri.parse(t));
            return function(t) {
                if (t && i) {
                    var n = t.split(".")[0];
                    return -1 == a.indexOf(n) && (window.gigya.logger.error("trying to send request to an invalid domain"), n = a[0]), n + "." + e
                }
                return e
            }
        }, t.getGigyaDomain = s, t.getBaseDomain = function(e, t, i) {
            if (void 0 === e && (e = window.gigya.partnerSettings.baseDomains), void 0 === t && (t = location.hostname), void 0 === i && (i = ["gigya.com", "gigya-api.cn", window.gigya.defaultApiDomain]), !t) return "";
            "string" == typeof e && (e = e.split(","));
            var r = n.Uri.parse(t);
            i && (e = e.concat(i));
            for (var a = 0, s = e; a < s.length; a++) {
                var c = s[a],
                    l = o.replaceAll(c, "*", ""),
                    u = n.Uri.parse(l);
                if (u && r.isIn(u)) return u.isForSubDomains() ? r.domain : u.domain
            }
            return r.domain
        }, t.resolveApiDomain = c, t.resolveChinaApiDomain = function(e, t) {
            return ["sapcdm.cn", "gigya-api.cn"].indexOf(e) >= 0 ? (null == t ? void 0 : t.indexOf("sapcdm.cn")) >= 0 ? "sapcdm.cn" : "gigya-api.cn" : e
        }
    }, function(e, t, i) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i(2),
            o = i(20),
            r = function() {
                function e(e) {
                    void 0 === e && (e = new o.CookieStore), this._cookieStore = e
                }
                return e.prototype.set = function(e, t, i, o, r) {
                    null == o && (o = this.getDefaultDomain());
                    var a = r ? "" : "/",
                        s = this._getExpirationInMs(i),
                        c = null;
                    null != s && (c = new Date).setTime(c.getTime() + s);
                    var l = this._setCookieInternal(e, t, a, c, o),
                        u = !s || s > 0;
                    if (u === l) return !0;
                    var g = n.localInfo.pageDomain;
                    return (l = this._setCookieInternal(e, t, a, c, g)) === u
                }, e.prototype.get = function(e) {
                    return this._cookieStore.getCookie(e)
                }, e.prototype.remove = function(e, t) {
                    void 0 === t && (t = n.localInfo.pageDomain), this._removeFromBaseDomains(e, t), this.set(e, "", -1, "", !1), this.set(e, "", -1, "", !0)
                }, e.prototype.getInfiniteExpirationTimeInSeconds = function() {
                    return 31536e3
                }, e.prototype.canSaveCookie = function() {
                    try {
                        return this.set(e.testCookieName, "true", 1, null, null)
                    } catch (e) {
                        return !1
                    }
                }, e.prototype.getDefaultDomain = function(e, t) {
                    return void 0 === e && (e = n.localInfo.pageDomain), void 0 === t && (t = n.localInfo.baseDomain || ""), t.length > 0 && e.length >= t.length && e.lastIndexOf(t) === e.length - t.length ? t : e
                }, e.prototype._getExpirationInMs = function(e) {
                    return null == e || "" === e || isNaN(e) ? 1e3 * this.getInfiniteExpirationTimeInSeconds() : 0 == e ? null : 1e3 * e
                }, e.prototype._setCookieInternal = function(t, i, o, r, a) {
                    var s, c = 0 === (null !== (s = null === n.localInfo || void 0 === n.localInfo ? void 0 : n.localInfo.protocol) && void 0 !== s ? s : document.location.protocol).indexOf("https"),
                        l = e._getSameSiteMode();
                    return this._cookieStore.setCookie(t, i, {
                        path: o,
                        expires: r,
                        domain: a,
                        sameSite: l,
                        secure: c
                    }), !!this.get(t) || !!l && (this._cookieStore.setCookie(t, i, {
                        path: o,
                        expires: r,
                        domain: a,
                        secure: c
                    }), !!this.get(t) && (window.gigya.logger.report("Cookie established only without sameSite mode", {
                        name: t,
                        value: i,
                        sameSiteMode: l
                    }, !1), !0))
                }, e.prototype._removeFromBaseDomains = function(e, t) {
                    for (var i = t.split("."), n = 0; n < i.length - 1; n++) {
                        var o = i.slice(n).join(".");
                        this.set(e, "", -1, o, !1), this.set(e, "", -1, o, !0)
                    }
                }, e._getSameSiteMode = function() {
                    if (!e._disallowSameSiteMode()) return "None"
                }, e._disallowSameSiteMode = function() {
                    var e, t, i = null !== (e = null === n.localInfo || void 0 === n.localInfo ? void 0 : n.localInfo.protocol) && void 0 !== e ? e : document.location.protocol,
                        o = null !== (t = null === n.localInfo || void 0 === n.localInfo ? void 0 : n.localInfo.userAgent) && void 0 !== t ? t : navigator.userAgent.toLowerCase();
                    return !(0 === i.indexOf("https")) || !o || o.indexOf("CPU iPhone OS 12") > -1 || o.indexOf("iPad; CPU OS 12") > -1 || o.indexOf("Macintosh; Intel Mac OS X 10_14") > -1 && o.indexOf("Version/") > -1 && o.indexOf("Safari") > -1 || o.indexOf("Chrome/5") > -1 && o.indexOf("Chrome/6") > -1
                }, e.testCookieName = "gig3pctest", e
            }();
        t.CookieUtils = r, t.default = new r
    }, , function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = 0;

        function n(e) {
            var n, o, r, a, s = null !== (o = null === (n = window.gigya.thisScript) || void 0 === n ? void 0 : n.baseDomain) && void 0 !== o ? o : "",
                c = null !== (a = null === (r = window.gigya.thisScript) || void 0 === r ? void 0 : r.protocol) && void 0 !== a ? a : "https";
            if (!s || /cdns?\.gigya\.com$/.test(s)) {
                var l = t.CDN_HOSTS[c];
                l.length <= i && (i = 0), s = l[i++]
            }
            return e && 0 !== e.indexOf("/") && (e = "/" + e), c + "://" + s + (e || "")
        }
        t.CDN_HOSTS = {
            http: ["cdn.gigya.com", "cdn1.gigya.com", "cdn2.gigya.com", "cdn3.gigya.com"],
            https: ["cdns.gigya.com", "cdns1.gigya.com", "cdns2.gigya.com", "cdns3.gigya.com"]
        }, t.getCdnResource = n, t.getImgCdnResource = function() {
            return n("/gs/i/")
        }
    }, , function(e, t, i) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i(0),
            o = i(3),
            r = i(2),
            a = i(12),
            s = function() {
                function e() {}
                return e.getName = function() {
                    return "AbstractAdapter"
                }, e.prototype.setObject = function(e, t) {
                    this.setItem(e, o.serialize(t))
                }, e.prototype.getObject = function(e, t) {
                    return o.deserialize(this.getItem(e), t)
                }, e.prototype.isPersistent = function() {
                    return !0
                }, e
            }();
        t.AbstractLocalStorageAdapter = s;
        var c = function(e) {
            function t() {
                var t = e.call(this) || this;
                return t.isLoaded = !1, t
            }
            return n.__extends(t, e), t.prototype.isReady = function() {
                return this.isLoaded
            }, t.prototype.waitForService = function(e) {
                var t = this;
                this.isReady() ? e() : setTimeout((function() {
                    return t.waitForService(e)
                }), 50)
            }, t
        }(s);
        t.AbstractAsyncLocalStorageAdapter = c;
        var l = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return n.__extends(t, e), t.prototype.getItem = function(e) {
                    return this.storage[e]
                }, t.prototype.setItem = function(e, t, i) {
                    try {
                        this.storage[e] = t
                    } catch (e) {}
                }, t.prototype.removeItem = function(e) {
                    this.storage.removeItem(e)
                }, t
            }(s),
            u = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.storage = window.localStorage, t
                }
                return n.__extends(t, e), t.getName = function() {
                    return "LocalStorageAdapter"
                }, t.isAvailable = function() {
                    return r.localInfo.supportsLocalStorage
                }, t
            }(l),
            g = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.storage = window.sessionStorage, t
                }
                return n.__extends(t, e), t.getName = function() {
                    return "SessionStorageAdapter"
                }, t.isAvailable = function() {
                    return r.localInfo.supportsSessionStorage
                }, t
            }(l),
            d = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return n.__extends(t, e), t.isAvailable = function() {
                    return r.localInfo.isFF && window.globalStorage
                }, t.getName = function() {
                    return "FirefoxStorageAdapter"
                }, t.prototype.getItem = function(e) {
                    return window.globalStorage[location.hostname][e]
                }, t.prototype.setItem = function(e, t, i) {
                    try {
                        window.globalStorage[location.hostname][e] = t
                    } catch (e) {}
                }, t.prototype.removeItem = function(e) {
                    delete window.globalStorage[location.hostname][e]
                }, t
            }(s),
            p = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return n.__extends(t, e), t.isAvailable = function() {
                    return a.default.canSaveCookie()
                }, t.getName = function() {
                    return "CookieStorageAdapter"
                }, t.prototype.getItem = function(e) {
                    return a.default.get(e)
                }, t.prototype.setItem = function(e, t, i, n) {
                    a.default.set(e, t, i, n)
                }, t.prototype.removeItem = function(e) {
                    a.default.remove(e)
                }, t
            }(s);
        t.CookieStorageAdapter = p;
        var f = function(e) {
            function t() {
                var t = e.call(this) || this;
                return t.memory = {}, t
            }
            return n.__extends(t, e), t.isAvailable = function() {
                return !0
            }, t.getName = function() {
                return "MemoryStorageAdapter"
            }, t.prototype.getItem = function(e) {
                return this.memory[e]
            }, t.prototype.setItem = function(e, t, i) {
                this.memory[e] = t
            }, t.prototype.removeItem = function(e) {
                delete this.memory[e]
            }, t.prototype.isPersistent = function() {
                return !1
            }, t
        }(s);

        function h(e) {
            var i = e.getName() || e.name;
            return t.instances[i] || (t.instances[i] = new e), t.instances[i]
        }

        function m(e) {
            for (var i, n = 0, o = t.adapters; n < o.length; n++) {
                var r = o[n];
                if (r.isAvailable()) {
                    if (r.prototype instanceof c && !e) continue;
                    i = h(r);
                    break
                }
            }
            return i || (i = h(f)), e && (i instanceof c ? i.waitForService((function() {
                e(i)
            })) : e(i)), i
        }
        t.MemoryStorageAdapter = f, t.adapters = [u, g, d, p, f], t.instances = {}, t.initializeAdapter = h, t.waitForService = m;
        var w = m();
        t.getItem = function(e) {
            return w.getItem(e)
        }, t.setItem = function(e, t, i) {
            return w.setItem(e, t, i)
        }, t.removeItem = function(e) {
            return w.removeItem(e)
        }, t.setObject = function(e, t) {
            return w.setObject(e, t)
        }, t.getObject = function(e, t) {
            return w.getObject(e, t)
        }
    }, , function(e, t, i) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i(10),
            o = i(3);
        t.serialize = function(e, t) {
            var i = [];
            for (var r in t || (t = "&"), e) switch (typeof e[r]) {
                case "function":
                    break;
                case "object":
                    null != e[r] && i.push(r + "=" + n.URLEncode(o.serialize(e[r])));
                    break;
                case "undefined":
                    break;
                default:
                    i.push(r + "=" + n.URLEncode(e[r]))
            }
            return i.join(t)
        }, t.deserialize = function(e, t, i, o) {
            var r = {};
            if (!e) return r;
            t || (t = "&");
            for (var a = e.split(t), s = 0; s < a.length; s++) {
                var c = a[s],
                    l = c.indexOf("=");
                if (-1 === l) {
                    r[u = i ? c.toLowerCase() : c] = "1"
                } else {
                    var u = c.substr(0, l);
                    i && (u = u.toLowerCase());
                    var g = c.substr(l + 1).replace(/\+/g, " ");
                    try {
                        r[u] = o ? unescape(g) : n.URLDecode(g)
                    } catch (e) {
                        r[u] = unescape(g)
                    }
                }
            }
            return r
        }
    }, function(e, t) {
        function i(e, t) {
            for (var i = 0; i < e.length; ++i) t(e[i], i, e)
        }

        function n(e, t) {
            for (var i = 0; i < e.length; ++i)
                if (t(e[i], i, e)) return !0;
            return !1
        }

        function o(e, t) {
            var i = -1;
            return n(e, (function(e, n, o) {
                return !!t(e, n, o) && (i = n, !0)
            })), i
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.indexOf = function(e, t) {
            for (var i = 0; i < e.length; i++)
                if (e[i] == t) return i;
            return -1
        }, t.clone = function(e) {
            for (var t = [], i = 0; i < e.length; i++) t[i] = e[i];
            return t
        }, t.removeByValue = function(e, t) {
            if (e)
                for (var i = e.length - 1; i >= 0; i--) e[i] == t && e.splice(i, 1)
        }, t.removeByProperty = function(e, t, i) {
            if (e)
                for (var n = e.length - 1; n >= 0; n--) e[n][t] == i && e.splice(n, 1)
        }, t.getArrayFromString = function(e, t, i) {
            return e && "string" == typeof e ? (i && (e = e.toLowerCase()), (e = e.replace(/[ ]/g, "").replace(/,,/g, ",")) ? e.split(t) : []) : []
        }, t.intersect = function(e) {
            for (var t = [], i = 1; i < arguments.length; i++) t[i - 1] = arguments[i];
            if (null == e) return [];
            for (var n = [], o = arguments.length, r = 0, a = e.length; r < a; r++) {
                var s = e[r];
                if (-1 == this.indexOf(n, s)) {
                    for (var c = 1; c < o; c++) {
                        var l = arguments[c];
                        if (null == l || -1 == this.indexOf(l, s)) break
                    }
                    c === o && n.push(s)
                }
            }
            return n
        }, t.lastIndexOf = function(e, t, i) {
            void 0 === i && (i = 0);
            for (var n = e.length; --n >= i;)
                if (e[n] === t) return n;
            return -1
        }, t.forEach = i, t.forEachProp = function(e, t) {
            for (var i in e) e.hasOwnProperty(i) && t(e[i], i, e)
        }, t.some = n, t.every = function(e, t) {
            for (var i = 0; i < e.length; ++i)
                if (!t(e[i], i, e)) return !1;
            return !0
        }, t.everyProp = function(e, t) {
            for (var i in e)
                if (e.hasOwnProperty(i) && !t(e[i], i, e)) return !1;
            return !0
        }, t.map = function(e, t) {
            var n = new Array;
            return i(e, (function(e, i, o) {
                return n.push(t(e, i, o))
            })), n
        }, t.firstIndex = o, t.first = function(e, t) {
            return e[o(e, t)]
        }, t.getAllEnumValues = function(e) {
            var t = [];
            for (var i in e) "number" == typeof e[i] && t.push(e[i]);
            return t
        }, t.getUniqueValues = function(e) {
            for (var t = 0; t < e.length; ++t)
                for (var i = t + 1; i < e.length; i++) e[t] === e[i] && e.splice(i, 1);
            return e
        }
    }, function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function() {
            function e(e) {
                void 0 === e && (e = window), this._win = e
            }
            return e.prototype.setCookie = function(e, t, i) {
                var n = e + "=" + escape(t);
                i.path && (n += "; path=" + i.path), i.expires && (n += "; expires=" + i.expires.toUTCString()), i.domain && -1 != i.domain.indexOf(".") && (n += "; domain=" + i.domain), i.sameSite && (n += "; sameSite=" + i.sameSite), i.secure && (n += "; secure"), this._win.document.cookie = n
            }, e.prototype.getCookie = function(e) {
                e = e.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1").replace(/^[ \t]+|[ \t]+$/g, "");
                var t = new RegExp("(?:^|;)\\s?" + e + "=(.*?)(?:;|$)"),
                    i = this._win.document.cookie.match(t);
                return i && unescape(i[1])
            }, e
        }();
        t.CookieStore = i
    }, function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = {};

        function n(e) {
            if (!i[e]) return !1;
            for (var t in i[e].ids) return !0;
            return !1
        }

        function o(e, t, n) {
            i[e] || (i[e] = {
                q: [],
                ids: {}
            }), i[e].q.push({
                func: t,
                args: n
            })
        }
        t._servicesStatus = function() {
            var e = {};
            for (var t in i) {
                var o = n(t);
                e[t] = o ? {
                    active: !0,
                    waitingFor: i[t].ids,
                    queuedCount: i[t].q.length
                } : {
                    active: !1
                }
            }
            return e
        }, t.isActive = n, t.release = function(e, t) {
            if (window.gigya.logger.debug("releasing " + t + " queue by " + e), i[t] && (delete i[t].ids[e], !n(t))) {
                var o = i[t].q;
                for (i[t].q = []; o.length > 0;) {
                    var r = o.splice(0, 1)[0];
                    try {
                        r.func.apply(this, r.args)
                    } catch (i) {
                        "object" == typeof console && console.log && console.log("Gigya: Exception while invoking queued method (" + t + ": " + e + ")")
                    }
                    if (n(t)) {
                        i[t].q = o;
                        break
                    }
                }
            }
        }, t.hold = function(e, t) {
            window.gigya.logger.debug("locking queue " + t + " by " + e), i[t] || (i[t] = {
                q: [],
                ids: {}
            }), i[t].ids[e] = !0
        }, t.waitFor = o, t.queueForExecution = function(e, t, i) {
            i = i || [], n(e) ? o(e, t, i) : t.apply(this, i)
        }
    }, function(e, t) {
        function i(e, t, i) {
            void 0 === i && (i = "&");
            var n = e.match(new RegExp(t + "=([^" + i + "]*)"));
            return n ? n[1] : null
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.getParamValue = i, t.getReqParamValue = function(e, t) {
            var n = i(e, t);
            return n ? decodeURIComponent(n) : null
        }
    }, function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function() {
            function e() {}
            return Object.defineProperty(e.prototype, "_toggles", {
                get: function() {
                    var e, t;
                    return (null === (t = null === (e = window.gigya.thisScript) || void 0 === e ? void 0 : e.globalConf) || void 0 === t ? void 0 : t.toggles) || {}
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.has = function(e) {
                return void 0 !== this._toggles[e]
            }, e.prototype.get = function(e) {
                return this._toggles[e]
            }, e.prototype.isOn = function(e) {
                return this.has(e) && this.get(e)
            }, e
        }();
        t.default = new i
    }, , function(e, t, i) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = i(6),
            r = i(2),
            a = i(19),
            s = i(5),
            c = i(9),
            l = i(14),
            u = {};

        function g(e) {
            return e.replace(/^http(s?):\/\/cdn(s?)[0-9]*.gigya.com\//, "http$1://cdn$2.gigya.com/")
        }

        function d(e, t, i, n, c, l) {
            var d;
            if (void 0 === c && (c = 5e3), 0 === e.indexOf("//") && (e = r.localInfo.protocol + ":" + e), n) {
                var p = g(e);
                if (u[p]) return void(u[p].loaded ? (window.gigya.logger.debug("script was already loaded:", {
                    src: e
                }), i && i()) : (u[p].onLoad.push(i), u[p].onError.push(t)));
                d = u[p] = {
                    loaded: !1,
                    onLoad: [i],
                    onError: [t]
                }, l && l.length > 0 && a.forEach(l, (function(e) {
                    u[e] = d
                }))
            } else d = {
                loaded: !1,
                onLoad: [i],
                onError: [t]
            };
            var f = function() {
                var t = document.createElement("script");
                t.async = !0, t.type = "text/javascript", t.charset = "UTF-8";
                var i = !1,
                    n = function() {
                        if (!i) {
                            if (d.onLoad && d.onLoad.length)
                                for (var e = 0; e < d.onLoad.length; e++) "function" == typeof d.onLoad[e] && d.onLoad[e]();
                            d.loaded = !0, d.onError = d.onLoad = null, i = !0, !0 === c && (c = 0), !1 !== c && setTimeout((function() {
                                t.parentNode && t.parentNode.removeChild(t)
                            }), c)
                        }
                    };
                t.onload = n, t.onreadystatechange = function() {
                    "loaded" === this.readyState && n()
                }, t.onerror = function() {
                    for (var t = 0; t < d.onError.length; t++) "function" == typeof d.onError[t] && d.onError[t]();
                    delete u[e]
                };
                var a = document.getElementsByTagName("head");
                a && a.length > 0 && a[0].appendChild(t);
                var s = function() {
                    var i, n, r = new RegExp("^https?://cdns?.*" + window.gigya.defaultApiDomain).test(e) ? (i = e, (n = o.Uri.parse(i)).addToSearch({
                        version: window.gigya.build.version
                    }), n.toString()) : e;
                    t.src = r
                };
                r.localInfo.iosVersion >= 6 ? s() : setTimeout(s, 1)
            };
            r.localInfo.isIE ? s.invokeOnPageLoad(f) : f()
        }
        t.isLoaded = function(e) {
                var t = g(e);
                return Boolean(u[t] && u[t].loaded)
            }, t.load = d,
            function(e) {
                e[e.script = 0] = "script", e[e.image = 1] = "image", e[e.iframe = 2] = "iframe"
            }(n = t.ResourceTypes || (t.ResourceTypes = {})), t.triggerResource = function(e, t, i, o) {
                switch (void 0 === i && (i = n.image), void 0 === o && (o = 5e3), i) {
                    case n.script:
                        d(e, t, t, !1, o);
                        break;
                    case n.image:
                        ! function(e, t) {
                            var i = new Image,
                                n = !1;
                            i.onload = i.onerror = function() {
                                n || (n = !0, t())
                            }, i.src = e
                        }(e, t);
                        break;
                    case n.iframe:
                        ! function(e, t, i) {
                            void 0 === i && (i = 5e3);
                            var n = document.createElement("iframe");
                            n.style.width = "30px", n.style.height = "10px", n.style.position = "absolute", n.style.top = "-1000px", n.style.left = "-1000px", !0 === i && (i = 0);
                            var o = function(e) {
                                var n;
                                !(n = e && e.srcElement ? e.srcElement : e && e.target ? e.target : this).loaded && n.parentNode && (n.loaded = !0, t(), !1 !== i && window.setTimeout((function() {
                                    try {
                                        document.body.removeChild(n)
                                    } catch (e) {}
                                }), i))
                            };
                            c.addEventListener(n, "load", o), c.addEventListener(n, "error", o), n.onload = function(e) {
                                o(e)
                            }, n.onerror = o, n.src = e, c.appendToBody(n)
                        }(e, t, o);
                        break;
                    default:
                        throw new Error("Unsupported resource type")
                }
            }, t.loadService = function(e, t, i) {
                var n = l.getCdnResource() + "/js/gigya.services." + e + ".js";
                d(n, (function() {
                    "object" == typeof console && console.error && (console.error("error loading gigya service " + e + " from url: " + n), t && t())
                }), i, !0)
            }
    }, function(e, t, i) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i(2),
            o = i(16),
            r = i(3),
            a = i(4),
            s = i(10);

        function c(e) {
            if (null != e.identities) {
                if (e.identities.constructor == Array) {
                    var t = e.identities;
                    e.identities = {};
                    for (var i = 0; i < t.length; i++) e.identities[t[i].provider] = new window.gigya.socialize.Identity(t[i])
                }
            } else e.identities = {}
        }! function(e) {
            e[e.LocalStorageListener = 0] = "LocalStorageListener", e[e.PostMessage = 1] = "PostMessage", e[e.Flash = 2] = "Flash"
        }(t.MessagingMethod || (t.MessagingMethod = {})), t.checkCompleteRegistration = function(e, t, i, o) {
            var r, a, s = !1;
            if (206005 == e.errorCode) window.gigya.logger.info("finalizing registration after email verification"), s = !0, window.gigya.accounts.finalizeRegistration({
                regToken: e.regToken,
                ignoreApiQueue: !0,
                callback: o
            });
            else if (!t.ignoreInterruptions && !t.dontHandleScreenSet && ((e.regToken || t.regToken) && (200010 == e.errorCode || 403043 == e.errorCode) || 206001 == e.errorCode || 206002 == e.errorCode || 206003 == e.errorCode || 403101 == e.errorCode || 403102 == e.errorCode || 403110 == e.errorCode || 403100 == e.errorCode || 206006 == e.errorCode)) {
                var c;
                403110 == e.errorCode && (a = !0, c = !0), t.defaultMobileRegScreenSet && n.localInfo.isMobile ? r = t.defaultMobileRegScreenSet : t.defaultRegScreenSet && (r = t.defaultRegScreenSet)
            }
            r ? (window.gigya.logger.info("showing screenset '" + r + "' for errorCode " + e.errorCode), window.gigya.logger.group(r), window.gigya.accounts.showScreenSet({
                ignoreApiQueue: !0,
                newModal: c,
                screenSet: r,
                initialMethod: i,
                initialResponse: e,
                suppressLoginEvent: t.suppressLoginEvent,
                onError: function(t) {
                    o(e)
                },
                onHide: function(t) {
                    if (window.gigya.logger.groupEnd(r), "finished" === t.reason && t.user) {
                        var i = {
                            errorCode: 0,
                            userInfo: t.user,
                            source: t.source
                        };
                        o(i, !0, a)
                    } else o(e)
                }
            })) : s || o(e)
        }, t.getGigyaSettings = function(e) {
            var t = o.getObject("gigyaSettings");
            return r.serialize(t[e])
        }, t.setGigyaSettings = function(e, t) {
            var i, n = o.getObject("gigyaSettings", ((i = {})[e] = {}, i));
            for (var a in t) n[e][a] = t[a];
            o.setItem("gigyaSettings", r.serialize(n))
        }, t.delGigyaSettings = function(e) {
            if (e) {
                var t = o.getObject("gigyaSettings");
                t && (delete t[e], o.setItem("gigyaSettings", r.serialize(t)))
            } else o.removeItem("gigyaSettings")
        }, t.handleSpecialFields = function(e) {
            var t = window.gigya.socialize.Collection,
                i = function(e, t) {
                    for (var i = [], n = 0, o = e[n]; o;) i.push(new t(o)), i[n].identities && c(i[n]), o = e[++n];
                    return i
                };
            if (e.photos && (e.photos = new t(e.photos, "photoID")), e.albums && (e.albums = new t(e.albums, "albumID")), e.contacts && (e.contacts = new t(i(e.contacts, window.gigya.socialize.Contact), "email")), e.friend && (e.friend = new t(i(e.friend, window.gigya.socialize.Friend), "UID")), e.user && (e.user = new window.gigya.socialize.User(e.user)), e.friends && e.friends instanceof Array) {
                for (var n = [], o = 0; o < e.friends.length; o++) n.push(e.friends[o].UID);
                e.UIDs = n.join(","), e.friends = new t(i(e.friends, window.gigya.socialize.Friend), "UID")
            }
        }, t.convertIdentitiesArrayToObject = c, t.addUserInfoToEvent = function(e, t, i, n) {
            var o = e.user || e.userInfo;
            return null == t && (t = {}), null != o && (t.user = a.clone(o), null != e.isLoggedIn && (t.user.isLoggedIn = e.isLoggedIn), null != e.isSiteUID && (t.user.isSiteUID = e.isSiteUID), null != e.iRank && (t.user.iRank = e.iRank)), i && (a.extractProperties(e, t, "signature|UIDSig|timestamp|UIDSignature|signatureTimestamp|UID|signKeysUIDSignature|dataCenter|id_token|groups"), null != t.user && (t.UID = o.UID, t.isSiteUID = o.isSiteUID)), t
        }, t.sendEmailNative = function(e) {
            var t = e.userAction || {},
                i = t.title || "",
                n = t.linkBack || "";
            document.location.href = "mailto:?to=&subject=" + s.URLEncode(i) + "&body=" + s.URLEncode(n), window.gigya.socialize.sendEmail(e, {
                dontSendEmail: !0
            })
        }
    }, , , function(e, t) {
        function i() {
            var e = 0,
                t = 0;
            return "number" == typeof window.pageYOffset ? (t = window.pageYOffset, e = window.pageXOffset) : document.body && (document.body.scrollLeft || document.body.scrollTop) ? (t = document.body.scrollTop, e = document.body.scrollLeft) : document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop) && (t = document.documentElement.scrollTop, e = document.documentElement.scrollLeft), {
                left: e,
                top: t
            }
        }

        function n() {
            var e, t, i = document.documentElement,
                n = document.body;
            return window.innerHeight ? (e = window.innerHeight, t = window.innerWidth) : (0 == (e = i.clientHeight) && (e = n.clientHeight), 0 == (t = i.clientWidth) && (t = n.clientWidth)), {
                w: t,
                h: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.getScroll = i, t.getFullSize = function() {
            var e = document.documentElement,
                t = document.body,
                i = e.clientHeight;
            0 == i && (i = t.clientHeight);
            var n = e.clientWidth;
            return 0 == n && (n = t.clientWidth), {
                w: n,
                h: i
            }
        }, t.getOrientation = function() {
            var e = parseInt(window.orientation || "0");
            return e < 0 && (e += 360), e
        }, t.getInnerSize = n, t.getMiddleCenter = function() {
            var e = i(),
                t = n();
            return {
                top: e.top + Math.floor(t.h / 2),
                left: e.left + Math.floor(t.w / 2)
            }
        }, t.isRectHorizontallyVisible = function(e) {
            var t = i(),
                o = n();
            return e.left >= t.left && e.right <= t.left + o.w
        }, t.isRectFullyVisible = function(e) {
            var t = i(),
                o = n();
            return e.top >= t.top && e.bottom <= t.top + o.h && e.left >= t.left && e.right <= t.left + o.w
        }, t.scrollIntoView = function(e) {
            e && e.scrollIntoView && e.scrollIntoView()
        }
    }, function(e, t, i) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i(0),
            o = i(19),
            r = i(40),
            a = i(4),
            s = i(26),
            c = i(50);

        function l(e) {
            return "on" === e.substring(0, 2) ? e : "on" + e.substring(0, 1).toUpperCase() + e.substring(1)
        }
        var u = {},
            g = {};

        function d(e, t) {
            var i = 0,
                n = e.isInternal,
                o = e.eventName.split(",");
            r.addLog('Dispatching global event "' + e.eventName + '" with this event object', e);
            for (var g = 0; g < o.length; g++) {
                var d = o[g].split("."),
                    p = d.length > 1 ? d.shift() : "socialize",
                    f = d[0],
                    h = p + "_" + l(f),
                    m = a.clone(u[h]) || [],
                    w = a.clone(e);
                w.isGlobal = !0, w.eventName = f, w.fullEventName = o[g], t && (t.source && (w.source = t.source), t.sourceData && (w.sourceData = t.sourceData), t.context && (w.context = t.context));
                var v = ["component"];
                n || v.push("other");
                for (var y = 0; y < v.length; y++)
                    for (var b = v[y], _ = 0; _ < m.length; _++) {
                        var S = m[_];
                        if (S.type == b) {
                            var I = a.clone(w);
                            !I.context && S.context && (I.context = S.context), I.context || delete I.context, "component" !== b && (i++, s.handleSpecialFields(I)), S.params && S.params.signKey && (I.UIDSignature = e.signKeysUIDSignature[S.params.signKey], delete I.signKeysUIDSignature);
                            try {
                                S.handler(I)
                            } catch (t) {
                                r.addLog('Error while trying to invoke "' + e.eventName + '" global event handler', t)
                            }
                        }
                    }
                n || c._dispatchFromMaps(w, !0);
                var A = window.GenesisExchange_Gigya,
                    P = window.gigya_omniture_conf,
                    C = window.myOmnitureIntegrationFunc;
                if (!n && void 0 !== A && void 0 !== P && "socialize" == p) new A(P).processAction(w), void 0 !== C && C(P, w)
            }
            return i
        }

        function p(e, t, i) {
            void 0 === t && (t = {});
            var n = e.eventName.split("."),
                o = n.length > 1 ? n.shift() : "socialize",
                r = n[0];
            f(e, t, i, (function(n) {
                if (0 == n) {
                    var a = "on" + r.substring(0, 1).toUpperCase() + r.substring(1),
                        s = o + "_" + a;
                    g[s] || (g[s] = []), g[s].push({
                        eventObj: e,
                        params: t,
                        preProcess: i
                    })
                }
            }))
        }

        function f(e, t, i, n) {
            var o = function(e) {
                var i = 0;
                e.cancel || (i = d(e, t)), n && n(i)
            };
            i ? i(e, o) : o(e)
        }
        t._activeNamespaces = {}, t.add = function(e, t, i, n, o, r) {
            void 0 === i && (i = "other"), void 0 === o && (o = "socialize");
            var a = o + "_" + l(e);
            u[a] || (u[a] = []);
            var s = {
                handler: t,
                type: i,
                context: n,
                params: r,
                fullEventName: a
            };
            u[a].push(s), !this._activeNamespaces[o] && window.gigya._.apiAdapter && window.gigya._.apiAdapter.registerForNamespaceEvents(o), this._activeNamespaces[o] = 1;
            var c = g[a];
            if (c && "other" == i) {
                g[a] = [];
                for (var d = 0; d < c.length; d++) {
                    var p = c[d];
                    f(p.eventObj, p.params, p.preProcess)
                }
            }
            return s
        }, t.remove = function(e, t) {
            u[e] && o.removeByValue(u[e], t)
        }, t.dispatch = d, t.dispatchWhenHandlerAdded = p, t.dispatchWhenHandlersAdded = function(e, t, i, o) {
            void 0 === i && (i = {});
            for (var r = 0, a = e; r < a.length; r++) {
                var s = a[r];
                p(n.__assign({
                    eventName: s
                }, t), i, o)
            }
        }, t.getEventsForOperation = function(e) {
            var t = [];
            return -1 != e.toLowerCase().indexOf("login") ? (this._activeNamespaces.socialize && t.push("socialize.login"), this._activeNamespaces.accounts && t.push("accounts.login")) : -1 != e.toLowerCase().indexOf("addconnection") && this._activeNamespaces.socialize && t.push("socialize.connectionAdded"), t.join(",")
        }
    }, function(e, t, i) {
        var n;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = i(0),
            r = i(52),
            a = i(22);
        t.gigErrorReport = "gigErrorReport";
        var s = {
                logLevel: r.LogLevel.disabled,
                clientMuteLevel: 0,
                logTheme: 1
            },
            c = ((n = {})[0] = [""], n[1] = ["38f689", "009FD4", "b381b3", "71b6ef", "64c162", "977bd8", "d168a4", "4c71d2", "84b466", "7d638a", "799fb7", "8fdf98", "dc7767", "0a70f5", "38b159", "af721b", "bfaf6f"], n[2] = ["40806A", "003636", "9B59B6", "DB0A5B", "7928A1", "522032", "0000E0", "00202A", "000036", "005555", "1D781D", "4F5A65", "765AB0", "000000", "3C1362", "000060", "591D77"], n),
            l = r.LogLevel.warn,
            u = function(e) {
                for (var t = [], i = 1; i < arguments.length; i++) t[i - 1] = arguments[i]
            },
            g = function() {
                function e(e) {
                    this._global = e, this._groupsStack = [], this._currColorIdx = 0, this.configKey = "gig_loggerConfig", this._console = this._global.console, this.isEnabled && this.overrideClientLogs()
                }
                return e.prototype.getConfig = function() {
                    return this._config || (this._config = this.readLoggerConfigFromHash() || this.readLoggerConfigFromCookie() || s), this._config
                }, Object.defineProperty(e.prototype, "isEnabled", {
                    get: function() {
                        return this.getConfig().logLevel > r.LogLevel.disabled
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "logLevel", {
                    get: function() {
                        return this.getConfig().logLevel
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "palette", {
                    get: function() {
                        return c[this.getConfig().logTheme]
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.getNextColor = function() {
                    return 0 === this.getConfig().logTheme ? "" : (this._currColorIdx >= this.palette.length && (this._currColorIdx = 0), "#" + this.palette[this._currColorIdx++])
                }, Object.defineProperty(e.prototype, "currentGroup", {
                    get: function() {
                        return this._groupsStack[this._groupsStack.length - 1]
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.readLoggerConfigFromHash = function() {
                    var e = null,
                        t = a.getReqParamValue(location.hash, this.configKey);
                    if (t) try {
                        e = JSON.parse(decodeURIComponent(t))
                    } catch (e) {
                        console.error("[Gigya]: exception while trying to parse logger config from hash", e)
                    }
                    return e
                }, e.prototype.readLoggerConfigFromCookie = function() {
                    try {
                        var e = null,
                            t = a.getParamValue(document.cookie, this.configKey, ";");
                        if (t) try {
                            e = JSON.parse(t)
                        } catch (e) {
                            console.error("[Gigya]: exception while trying to parse logger config from cookie", e)
                        }
                        return e
                    } catch (e) {
                        return
                    }
                }, e.prototype.setLoggerConfigCookie = function(e) {
                    document.cookie = this.configKey + "=" + JSON.stringify(e)
                }, e.prototype.overrideClientLogs = function() {
                    var e = this,
                        t = this._global.Proxy;
                    if (t) switch (this.getConfig().clientMuteLevel) {
                        case 0:
                            break;
                        case 2:
                            this._global.console = new t(this._global.console, {
                                get: function() {
                                    return u
                                }
                            });
                            break;
                        case 1:
                        default:
                            this._global.console = new t(this._global.console, {
                                get: function(t, i) {
                                    return -1 !== ["group", "groupCollapsed", "groupEnd"].indexOf(i) ? function() {
                                        for (var t, n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                                        return (t = e._console).log.apply(t, o.__spreadArrays(["client has called console." + i], n))
                                    } : t[i]
                                }
                            })
                    }
                }, e.prototype.getFormattedLogArgs = function(e, t) {
                    return void 0 === e && (e = ""), void 0 === t && (t = this.currentGroup), {
                        text: t ? "%c█" + e : "%c" + e,
                        css: t ? "color: " + t.color + ";" : ""
                    }
                }, e.prototype.restoreHangingGroups = function(e) {
                    for (; e.length;) {
                        var t = e.shift();
                        this._groupsStack.push(t);
                        var i = this.getFormattedLogArgs(" %c[RESTORED - " + t.groupTitle + "]");
                        this._console.groupCollapsed(i.text, i.css, "color: #b0b0b0b0;")
                    }
                }, e.prototype.endGroup = function(e) {
                    var t = this.getFormattedLogArgs(" [END - " + e.groupTitle + "]", e);
                    this._console.log(t.text, t.css), this._console.groupEnd()
                }, e.prototype.log = function(e) {
                    if (this.isEnabled && e >= this.logLevel || e >= l && this.logLevel < l) {
                        var t = r.LogLevel[e],
                            i = e === r.LogLevel.debug ? r.LogLevel[r.LogLevel.info] : t,
                            n = this.getFormattedLogArgs(" %c[" + t + "]");
                        return this._console[i].bind(this._console, n.text, n.css, e <= r.LogLevel.info ? "color: #b0b0b0b0;" : "")
                    }
                    return u
                }, e.prototype.getJsonFromError = function(e) {
                    return {
                        name: e.name,
                        message: e.message,
                        stack: e.stack
                    }
                }, e.prototype.errorParser = function(e) {
                    var t = this;
                    return JSON.parse(JSON.stringify(e, (function(e, i) {
                        return i instanceof Error ? t.getJsonFromError(i) : i
                    })))
                }, Object.defineProperty(e.prototype, "debug", {
                    get: function() {
                        return this.log(r.LogLevel.debug)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "info", {
                    get: function() {
                        return this.log(r.LogLevel.info)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "warn", {
                    get: function() {
                        return this.log(r.LogLevel.warn)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "error", {
                    get: function() {
                        var e = this;
                        return function(t, i) {
                            i && "object" == typeof i && (i = e.errorParser(i)), e.log(r.LogLevel.error).apply(e, [t].concat([i])), e.report(t, i)
                        }
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.group = function(e, t) {
                    var i = this;
                    if (void 0 === t && (t = !0), this.isEnabled) {
                        var n = this.getNextColor();
                        this._groupsStack.push({
                            groupTitle: e,
                            color: n
                        });
                        var o = this.getFormattedLogArgs(" [START - " + e + "]");
                        ! function() {
                            for (var e, n, o = [], r = 0; r < arguments.length; r++) o[r] = arguments[r];
                            t ? (e = i._console).groupCollapsed.apply(e, o) : (n = i._console).group.apply(n, o)
                        }(o.text, o.css)
                    }
                    return {
                        end: function() {
                            return i.groupEnd(e)
                        },
                        endWhen: function(t) {
                            "function" == typeof t && (t = t()), t && t.then ? t.then((function() {
                                return i.groupEnd(e)
                            })) : i.groupEnd(e)
                        }
                    }
                }, e.prototype.groupEnd = function(e) {
                    if (this.isEnabled) {
                        for (var t = [], i = this._groupsStack.pop(); i.groupTitle !== e && this._groupsStack.length;) t.unshift(i), i = this._groupsStack.pop(), this._console.groupEnd();
                        this.endGroup(i), t.length && this.restoreHangingGroups(t)
                    }
                }, e.prototype.enable = function(e, t, i) {
                    void 0 === e && (e = r.LogLevel.info), void 0 === t && (t = 1), void 0 === i && (i = 1), this.setLoggerConfigCookie({
                        logLevel: e,
                        clientMuteLevel: t,
                        logTheme: i
                    })
                }, e.prototype.disable = function() {
                    this.setLoggerConfigCookie({
                        logLevel: r.LogLevel.disabled,
                        clientMuteLevel: s.clientMuteLevel,
                        logTheme: s.logTheme
                    })
                }, e
            }();
        t.BaseLogger = g
    }, , , function(e, t) {
        var i;
        i = function() {
            return this
        }();
        try {
            i = i || new Function("return this")()
        } catch (e) {
            "object" == typeof window && (i = window)
        }
        e.exports = i
    }, function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.isExplicitTrue = function(e) {
            var t = ("" + e).toLowerCase();
            return "true" == t || "1" == t
        }, t.isExplicitFalse = function(e) {
            var t = ("" + e).toLowerCase();
            return "false" == t || "0" == t
        }, t.isLaterThanNow = function(e) {
            return e > (new Date).getTime()
        }, t.allDefinedOrAllUndefined = function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            var i = e.some((function(e) {
                    return void 0 === e
                })),
                n = e.some((function(e) {
                    return void 0 !== e
                }));
            return n && !i || !n && i
        }
    }, function(e, t, i) {
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = i(5),
                o = /\/\/cdn(s)?\.(ru1\.)?gigya.com/,
                r = ["gigya.js", "socialize.js", "socialize2.js", "gsjssdk.js"];

            function a(t) {
                void 0 === t && (t = {}), window.gigya.logger.info("globalConf is updated", {
                    updateObject: t
                }), e(window.gigya.thisScript.globalConf || {}, t)
            }
            t.getGigyaScriptElement = function() {
                for (var e, t = document.getElementsByTagName("script"), i = function(i) {
                        var n = t[i],
                            a = n.src.toLowerCase();
                        if ("" !== a && ((o.test(a) || a.indexOf("?apikey=") > -1) && (0 === r.length || r.some((function(e) {
                                return a.indexOf(e) > -1
                            }))))) return e = n, "break"
                    }, n = t.length - 1; n >= 0; n--) {
                    if ("break" === i(n)) break
                }
                return e
            }, t.updateConfiguration = a, n.createAlias("gigya.updateConfiguration", a)
        }).call(this, i(0).__assign)
    }, , , , function(e, t, i) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i(4),
            o = i(3),
            r = i(19),
            a = i(25),
            s = i(14),
            c = i(5),
            l = i(12);

        function u() {
            var e = !window.gigya.localInfo.isNativeMobileApp && l.default.get("_gig_dbgConsole_log");
            return void 0 !== e && null != e ? "1" === e : t.selectedConsoleLogLevels.length > 0
        }

        function g(e, i, a) {
            if (void 0 === a && (a = !1), u() || a) {
                var s, c = e;
                if (null != (i = n.clone(i, !0, !1, 4, null, !0)) && (c += ":" + ("object" == typeof i ? "\n" : "") + o.serialize(i, !0, !0)), a && "object" == typeof console && console.log && console.log(c), u()) t._log.push(c), document.getElementById("gigya_log"), s = -1 != r.indexOf(t.CONSOLE_LOG_LEVELS, e) ? e : "log", window.gigya._.apiAdapter.onJSLog(s, c)
            }
        }

        function d() {
            a.load(s.getCdnResource("/js/gigya.services.socialize.plugins.log.min.js"), null, (function() {}), !0)
        }

        function p() {}

        function f() {}
        t.CONSOLE_LOG_LEVELS = ["debug", "info", "log", "warn", "error"], t.selectedConsoleLogLevels = [], t._log = [], t.enable = function() {
            l.default.set("_gig_dbgConsole_log", "1", null)
        }, t.disable = function() {
            l.default.set("_gig_dbgConsole_log", "0", null)
        }, t._isEnabled = u, t.addLog = g, t.logCall = function(e, t, i) {
            i || (i = t.lastSource), g("Calling " + e + (i && i != e ? " for " + i : "") + (t.source && i != t.source ? " initiated from " + t.source : "") + " with these params", t)
        }, t.debug = d, t.showLog = function() {
            a.load(s.getCdnResource("/js/gigya.services.socialize.plugins.log.min.js"), null, (function() {}), !0)
        }, t.show = p, t.showConfig = f, c.createAlias("gigya.debug", d)
    }, function(e, t, i) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i(4),
            o = i(9),
            r = i(6);
        t.redirect = function(e, t, i, a, s) {
            if (void 0 === s && (s = window.document), i && "post" == i.toLowerCase()) {
                var c = s.createElement("form"),
                    l = [];
                c.setAttribute("accept-charset", "UTF-8"), c.setAttribute("method", "POST"), c.setAttribute("action", e), a && c.setAttribute("target", a);
                var u = n.merge(t);
                for (var g in u) "number" != typeof u[g] && "boolean" != typeof u[g] && "string" != typeof u[g] || "eventName" == g || l.push('<textarea name="' + encodeURIComponent(g) + '">' + u[g].toString().replace(/\&/g, "&amp;") + "</textarea>");
                c.innerHTML = l.join(""), c.style.display = "none", o.appendToBody(c, s), c.submit()
            } else {
                for (var d = new r.Uri(e), p = {}, f = 0; f < t.length; f++) {
                    var h = t[f];
                    for (var m in h)
                        if (h.hasOwnProperty(m)) {
                            var w = h[m];
                            p[m] = w
                        }
                }
                d.addToSearch(p), s.location.href = d.toString()
            }
        }
    }, function(e, t, i) {
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = i(51),
                o = i(54);
            window.gigya.logger || e(window.gigya, {
                logger: window === window.top ? new n.ParentLogger : new o.IFrameLogger
            })
        }).call(this, i(0).__assign)
    }, , , , , function(e, t, i) {
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = i(48);
            e(window.gigya, {
                Promise: n
            })
        }).call(this, i(0).__assign)
    }, function(e, t, i) {
        (function(t, i) {
            var n;
            n = function() {
                "use strict";

                function e(e) {
                    return "function" == typeof e
                }
                var n = Array.isArray ? Array.isArray : function(e) {
                        return "[object Array]" === Object.prototype.toString.call(e)
                    },
                    o = 0,
                    r = void 0,
                    a = void 0,
                    s = function(e, t) {
                        f[o] = e, f[o + 1] = t, 2 === (o += 2) && (a ? a(h) : b())
                    },
                    c = "undefined" != typeof window ? window : void 0,
                    l = c || {},
                    u = l.MutationObserver || l.WebKitMutationObserver,
                    g = "undefined" == typeof self && void 0 !== t && "[object process]" === {}.toString.call(t),
                    d = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel;

                function p() {
                    var e = setTimeout;
                    return function() {
                        return e(h, 1)
                    }
                }
                var f = new Array(1e3);

                function h() {
                    for (var e = 0; e < o; e += 2)(0, f[e])(f[e + 1]), f[e] = void 0, f[e + 1] = void 0;
                    o = 0
                }
                var m, w, v, y, b = void 0;

                function _(e, t) {
                    var i = this,
                        n = new this.constructor(A);
                    void 0 === n[I] && U(n);
                    var o = i._state;
                    if (o) {
                        var r = arguments[o - 1];
                        s((function() {
                            return O(o, n, r, i._result)
                        }))
                    } else L(i, n, e, t);
                    return n
                }

                function S(e) {
                    if (e && "object" == typeof e && e.constructor === this) return e;
                    var t = new this(A);
                    return C(t, e), t
                }
                g ? b = function() {
                    return t.nextTick(h)
                } : u ? (w = 0, v = new u(h), y = document.createTextNode(""), v.observe(y, {
                    characterData: !0
                }), b = function() {
                    y.data = w = ++w % 2
                }) : d ? ((m = new MessageChannel).port1.onmessage = h, b = function() {
                    return m.port2.postMessage(0)
                }) : b = void 0 === c ? function() {
                    try {
                        var e = Function("return this")().require("vertx");
                        return void 0 !== (r = e.runOnLoop || e.runOnContext) ? function() {
                            r(h)
                        } : p()
                    } catch (e) {
                        return p()
                    }
                }() : p();
                var I = Math.random().toString(36).substring(2);

                function A() {}

                function P(t, i, n) {
                    i.constructor === t.constructor && n === _ && i.constructor.resolve === S ? function(e, t) {
                        1 === t._state ? k(e, t._result) : 2 === t._state ? D(e, t._result) : L(t, void 0, (function(t) {
                            return C(e, t)
                        }), (function(t) {
                            return D(e, t)
                        }))
                    }(t, i) : void 0 === n ? k(t, i) : e(n) ? function(e, t, i) {
                        s((function(e) {
                            var n = !1,
                                o = function(e, t, i, n) {
                                    try {
                                        e.call(t, i, n)
                                    } catch (e) {
                                        return e
                                    }
                                }(i, t, (function(i) {
                                    n || (n = !0, t !== i ? C(e, i) : k(e, i))
                                }), (function(t) {
                                    n || (n = !0, D(e, t))
                                }), e._label);
                            !n && o && (n = !0, D(e, o))
                        }), e)
                    }(t, i, n) : k(t, i)
                }

                function C(e, t) {
                    if (e === t) D(e, new TypeError("You cannot resolve a promise with itself"));
                    else if (o = typeof(n = t), null === n || "object" !== o && "function" !== o) k(e, t);
                    else {
                        var i = void 0;
                        try {
                            i = t.then
                        } catch (t) {
                            return void D(e, t)
                        }
                        P(e, t, i)
                    }
                    var n, o
                }

                function x(e) {
                    e._onerror && e._onerror(e._result), E(e)
                }

                function k(e, t) {
                    void 0 === e._state && (e._result = t, e._state = 1, 0 !== e._subscribers.length && s(E, e))
                }

                function D(e, t) {
                    void 0 === e._state && (e._state = 2, e._result = t, s(x, e))
                }

                function L(e, t, i, n) {
                    var o = e._subscribers,
                        r = o.length;
                    e._onerror = null, o[r] = t, o[r + 1] = i, o[r + 2] = n, 0 === r && e._state && s(E, e)
                }

                function E(e) {
                    var t = e._subscribers,
                        i = e._state;
                    if (0 !== t.length) {
                        for (var n = void 0, o = void 0, r = e._result, a = 0; a < t.length; a += 3) n = t[a], o = t[a + i], n ? O(i, n, o, r) : o(r);
                        e._subscribers.length = 0
                    }
                }

                function O(t, i, n, o) {
                    var r = e(n),
                        a = void 0,
                        s = void 0,
                        c = !0;
                    if (r) {
                        try {
                            a = n(o)
                        } catch (e) {
                            c = !1, s = e
                        }
                        if (i === a) return void D(i, new TypeError("A promises callback cannot return that same promise."))
                    } else a = o;
                    void 0 !== i._state || (r && c ? C(i, a) : !1 === c ? D(i, s) : 1 === t ? k(i, a) : 2 === t && D(i, a))
                }
                var T = 0;

                function U(e) {
                    e[I] = T++, e._state = void 0, e._result = void 0, e._subscribers = []
                }
                var M = function() {
                        function e(e, t) {
                            this._instanceConstructor = e, this.promise = new e(A), this.promise[I] || U(this.promise), n(t) ? (this.length = t.length, this._remaining = t.length, this._result = new Array(this.length), 0 === this.length ? k(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(t), 0 === this._remaining && k(this.promise, this._result))) : D(this.promise, new Error("Array Methods must be provided an Array"))
                        }
                        return e.prototype._enumerate = function(e) {
                            for (var t = 0; void 0 === this._state && t < e.length; t++) this._eachEntry(e[t], t)
                        }, e.prototype._eachEntry = function(e, t) {
                            var i = this._instanceConstructor,
                                n = i.resolve;
                            if (n === S) {
                                var o = void 0,
                                    r = void 0,
                                    a = !1;
                                try {
                                    o = e.then
                                } catch (e) {
                                    a = !0, r = e
                                }
                                if (o === _ && void 0 !== e._state) this._settledAt(e._state, t, e._result);
                                else if ("function" != typeof o) this._remaining--, this._result[t] = e;
                                else if (i === N) {
                                    var s = new i(A);
                                    a ? D(s, r) : P(s, e, o), this._willSettleAt(s, t)
                                } else this._willSettleAt(new i((function(t) {
                                    return t(e)
                                })), t)
                            } else this._willSettleAt(n(e), t)
                        }, e.prototype._settledAt = function(e, t, i) {
                            var n = this.promise;
                            void 0 === n._state && (this._remaining--, 2 === e ? D(n, i) : this._result[t] = i), 0 === this._remaining && k(n, this._result)
                        }, e.prototype._willSettleAt = function(e, t) {
                            var i = this;
                            L(e, void 0, (function(e) {
                                return i._settledAt(1, t, e)
                            }), (function(e) {
                                return i._settledAt(2, t, e)
                            }))
                        }, e
                    }(),
                    N = function() {
                        function t(e) {
                            this[I] = T++, this._result = this._state = void 0, this._subscribers = [], A !== e && ("function" != typeof e && function() {
                                throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
                            }(), this instanceof t ? function(e, t) {
                                try {
                                    t((function(t) {
                                        C(e, t)
                                    }), (function(t) {
                                        D(e, t)
                                    }))
                                } catch (t) {
                                    D(e, t)
                                }
                            }(this, e) : function() {
                                throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
                            }())
                        }
                        return t.prototype.catch = function(e) {
                            return this.then(null, e)
                        }, t.prototype.finally = function(t) {
                            var i = this.constructor;
                            return e(t) ? this.then((function(e) {
                                return i.resolve(t()).then((function() {
                                    return e
                                }))
                            }), (function(e) {
                                return i.resolve(t()).then((function() {
                                    throw e
                                }))
                            })) : this.then(t, t)
                        }, t
                    }();
                return N.prototype.then = _, N.all = function(e) {
                    return new M(this, e).promise
                }, N.race = function(e) {
                    var t = this;
                    return n(e) ? new t((function(i, n) {
                        for (var o = e.length, r = 0; r < o; r++) t.resolve(e[r]).then(i, n)
                    })) : new t((function(e, t) {
                        return t(new TypeError("You must pass an array to race."))
                    }))
                }, N.resolve = S, N.reject = function(e) {
                    var t = new this(A);
                    return D(t, e), t
                }, N._setScheduler = function(e) {
                    a = e
                }, N._setAsap = function(e) {
                    s = e
                }, N._asap = s, N.polyfill = function() {
                    var e = void 0;
                    if (void 0 !== i) e = i;
                    else if ("undefined" != typeof self) e = self;
                    else try {
                        e = Function("return this")()
                    } catch (e) {
                        throw new Error("polyfill failed because global object is unavailable in this environment")
                    }
                    var t = e.Promise;
                    if (t) {
                        var n = null;
                        try {
                            n = Object.prototype.toString.call(t.resolve())
                        } catch (e) {}
                        if ("[object Promise]" === n && !t.cast) return
                    }
                    e.Promise = N
                }, N.Promise = N, N
            }, e.exports = n()
        }).call(this, i(49), i(34))
    }, function(e, t) {
        var i, n, o = e.exports = {};

        function r() {
            throw new Error("setTimeout has not been defined")
        }

        function a() {
            throw new Error("clearTimeout has not been defined")
        }

        function s(e) {
            if (i === setTimeout) return setTimeout(e, 0);
            if ((i === r || !i) && setTimeout) return i = setTimeout, setTimeout(e, 0);
            try {
                return i(e, 0)
            } catch (t) {
                try {
                    return i.call(null, e, 0)
                } catch (t) {
                    return i.call(this, e, 0)
                }
            }
        }! function() {
            try {
                i = "function" == typeof setTimeout ? setTimeout : r
            } catch (e) {
                i = r
            }
            try {
                n = "function" == typeof clearTimeout ? clearTimeout : a
            } catch (e) {
                n = a
            }
        }();
        var c, l = [],
            u = !1,
            g = -1;

        function d() {
            u && c && (u = !1, c.length ? l = c.concat(l) : g = -1, l.length && p())
        }

        function p() {
            if (!u) {
                var e = s(d);
                u = !0;
                for (var t = l.length; t;) {
                    for (c = l, l = []; ++g < t;) c && c[g].run();
                    g = -1, t = l.length
                }
                c = null, u = !1,
                    function(e) {
                        if (n === clearTimeout) return clearTimeout(e);
                        if ((n === a || !n) && clearTimeout) return n = clearTimeout, clearTimeout(e);
                        try {
                            n(e)
                        } catch (t) {
                            try {
                                return n.call(null, e)
                            } catch (t) {
                                return n.call(this, e)
                            }
                        }
                    }(e)
            }
        }

        function f(e, t) {
            this.fun = e, this.array = t
        }

        function h() {}
        o.nextTick = function(e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var i = 1; i < arguments.length; i++) t[i - 1] = arguments[i];
            l.push(new f(e, t)), 1 !== l.length || u || s(p)
        }, f.prototype.run = function() {
            this.fun.apply(null, this.array)
        }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = h, o.addListener = h, o.once = h, o.off = h, o.removeListener = h, o.removeAllListeners = h, o.emit = h, o.prependListener = h, o.prependOnceListener = h, o.listeners = function(e) {
            return []
        }, o.binding = function(e) {
            throw new Error("process.binding is not supported")
        }, o.cwd = function() {
            return "/"
        }, o.chdir = function(e) {
            throw new Error("process.chdir is not supported")
        }, o.umask = function() {
            return 0
        }
    }, function(e, t, i) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i(4),
            o = i(40),
            r = i(26),
            a = i(19),
            s = i(106);

        function c(e) {
            return "on" === e.substring(0, 2) ? e : "on" + e.substring(0, 1).toUpperCase() + e.substring(1)
        }

        function l(e, t) {
            if (e && e.eventName) {
                var i = e.eventName;
                o.addLog('Dispatching widget event "' + i + '" for ' + t.lastSource + " with this event object", e), r.handleSpecialFields(e);
                for (var n, a = i.split(","), s = 0; s < a.length; s++) {
                    var l = a[s],
                        d = c(l);
                    if (t && (t.context && (e.context = t.context), t.source && (e.source = t.source), t.sourceData && (e.sourceData = t.sourceData), t.containerID && (e.sourceContainerID = t.containerID), t.instanceID && (e.instanceID = t.instanceID)), t[d] && (n = u(t[d], e)), void 0 === n && (n = !0), -1 == l.indexOf("login") && -1 == l.indexOf("logout") && "connectionRemoved" != l && "connectionAdded" != l) {
                        g(e);
                        var p = window.GenesisExchange_Gigya,
                            f = window.gigya_omniture_conf,
                            h = window.myOmnitureIntegrationFunc;
                        if (void 0 !== p && void 0 !== f) new p(f).processAction(e), void 0 !== h && h(f, e)
                    }
                }
                return n
            }
        }

        function u(e, t) {
            var i;
            try {
                "function" == typeof e ? i = e(t) : e instanceof Array ? a.forEach(e, (function(e) {
                    "function" == typeof e ? e(t) : o.addLog("Not a function registered to event: " + e, e)
                })) : o.addLog("Not a function or function array registered to event", e)
            } catch (t) {
                o.addLog("Error invoking function registered to event", e)
            }
            return i
        }

        function g(e, t) {
            void 0 === t && (t = !1);
            for (var i = [], n = !1, r = 0; r < window.gigya.defaultEventMaps.length; r++) {
                for (var a = window.gigya.defaultEventMaps[r].eventMap, c = window.gigya.defaultEventMaps[r].defaultMethod, l = 0; l < a.length; l++) {
                    var u = a[l],
                        g = [];
                    u.args || (u.args = []);
                    for (var d = 0; d < u.args.length; d++) "$event" == u.args[d] ? g.push(e) : g.push(s.fill(u.args[d], e));
                    var p = "," + u.events.toLowerCase() + ",";
                    if (-1 != p.indexOf(",*,") || (-1 != p.indexOf(",on" + e.eventName.toLowerCase() + ",") || -1 != p.indexOf("," + e.eventName.toLowerCase() + ",")) && (!e.source && !u.sources || !u.sources || -1 != u.sources.indexOf(e.source))) {
                        i.push(u);
                        var f = u.method ? u.method : c;
                        try {
                            f.apply(this, g)
                        } catch (e) {
                            o.addLog("Error invoking function registered to events map's method", f)
                        }
                        u.override && (n = !0)
                    }
                }
                if (n) break
            }
        }
        t.addMap = function(e) {
            window.gigya.defaultEventMaps.splice(0, 0, e)
        }, t.dispatchErrorFromResponse = function(e, t, i) {
            t || (t = {});
            var o = t;
            o.response && (o = o.response);
            var r = {
                eventName: "error",
                status: o.status ? o.status : "FAIL",
                statusMessage: o.statusMessage ? o.statusMessage : "General Server Error",
                errorMessage: o.errorMessage ? o.errorMessage : "General Server Error",
                errorDetails: o.errorDetails ? o.errorDetails : "",
                errorCode: o.errorCode ? o.errorCode : 500001,
                response: t
            };
            return n.add(r, i), l(r, e)
        }, t.dispatchInvalidParamError = function(e, t) {
            var i = {
                eventName: "error"
            };
            void 0 === e[t] || null == e[t] ? (i.errorCode = 400002, i.errorMessage = "Missing_required_parameter (" + t + ")") : (i.errorCode = 400006, i.errorMessage = "Invalid_parameter_value (" + t + ")"), i.status = i.errorCode, i.statusMessage = i.errorMessage, l(i, e)
        }, t.dispatchForWidget = l, t.dispatchEventObject = u, t._dispatchFromMaps = g
    }, function(e, t, i) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i(0),
            o = i(31),
            r = i(53),
            a = i(36),
            s = i(10),
            c = i(2),
            l = i(6),
            u = function(e) {
                function t(t, i, n, o, a) {
                    void 0 === t && (t = window), void 0 === i && (i = window.gigya.errorReport), void 0 === n && (n = window.gigya.canary), void 0 === o && (o = function() {
                        return 100 * Math.random()
                    }), void 0 === a && (a = r.loggerJsonp);
                    var s = e.call(this, t) || this;
                    s._global = t, s._errorReportConfig = i, s._canaryConfig = n, s._random = o, s._jsonp = a;
                    var c = s._errorReportConfig && s._errorReportConfig.enabled,
                        l = s._canaryConfig && s._canaryConfig.isActive,
                        u = s.enrollErrorReporting();
                    return c && (l || u) && (s._isErrorReporter = !0, s.setupMessageListener(), s._guid = s.generateGUID()), s
                }
                return n.__extends(t, e), t.prototype.enrollErrorReporting = function() {
                    return (this._errorReportConfig && this._errorReportConfig.probability) >= this._random()
                }, t.prototype.setupMessageListener = function() {
                    var e = this;
                    this._global.addEventListener("message", (function(t) {
                        var i = window.gigya.dataCenter,
                            n = window.gigya.defaultApiDomain.replace(/\./g, "."),
                            r = new RegExp("cdns?." + i + "." + n + "$");
                        if (t.origin.match(r)) try {
                            var a = JSON.parse(t.data);
                            a.type === o.gigErrorReport && e.report(a.message, a.details, a.includeStack)
                        } catch (e) {}
                    }), !1)
                }, t.prototype.getApiKey = function() {
                    var e = window.gigya.thisScript && window.gigya.thisScript.APIKey;
                    if (!e) {
                        var t = a.getGigyaScriptElement();
                        e = (s.getParamsFromURL(t && t.src, !0) || {}).apikey
                    }
                    return e
                }, t.prototype.createReportParams = function(e, t, i) {
                    void 0 === t && (t = {}), void 0 === i && (i = !0);
                    var n = {
                        message: e,
                        apiKey: this.getApiKey(),
                        stack: i ? (new Error).stack : "",
                        page: c.localInfo && c.localInfo.pageDomain,
                        browser: c.localInfo && c.localInfo.currentBrowser,
                        buildVersion: window.gigya.build.version,
                        buildNumber: window.gigya.build.number,
                        format: "json",
                        sdk: "web"
                    };
                    return "string" == typeof t && (t = {
                        message: t
                    }), t.guid = this._guid, n.details = JSON.stringify(t), n
                }, t.prototype.report = function(e, t, i) {
                    if (void 0 === i && (i = !0), this._isErrorReporter) try {
                        var n = this.createReportParams(e, t, i),
                            o = location.protocol + "//accounts." + window.gigya.dataCenter + "." + window.gigya.defaultApiDomain + "/sdk.errorReport";
                        l.Uri.parse(o).addToSearch(n).fetch(0)
                    } catch (e) {}
                }, t.prototype.generateGUID = function() {
                    try {
                        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(e) {
                            var t = 16 * Math.random() | 0;
                            return ("x" == e ? t : 3 & t | 8).toString(16)
                        }))
                    } catch (e) {
                        return ""
                    }
                }, t
            }(o.BaseLogger);
        t.ParentLogger = u
    }, function(e, t) {
        Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            function(e) {
                e[e.disabled = 0] = "disabled", e[e.debug = 1] = "debug", e[e.info = 2] = "info", e[e.warn = 3] = "warn", e[e.error = 4] = "error"
            }(t.LogLevel || (t.LogLevel = {}))
    }, function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.loggerJsonp = function(e, t) {
            var i = document.createElement("script");
            i.src = e + "?" + t, i.type = "text/javascript", i.onload = function() {
                document.getElementsByTagName("head")[0].removeChild(i)
            }, document.getElementsByTagName("head")[0].appendChild(i)
        }
    }, function(e, t, i) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i(0),
            o = i(31),
            r = i(22),
            a = function(e) {
                function t(t) {
                    void 0 === t && (t = window);
                    var i = e.call(this, t) || this;
                    return i._global = t, i
                }
                return n.__extends(t, e), t.prototype.report = function(e, t, i) {
                    void 0 === i && (i = !0);
                    try {
                        var n = document.createElement("a"),
                            a = r.getReqParamValue(location.hash, "origin") || r.getReqParamValue(location.hash, "d");
                        if (!a) return;
                        n.href = a;
                        var s = n.protocol + "//" + n.hostname + (n.port ? ":" + n.port : "");
                        this._global.top.postMessage(JSON.stringify({
                            type: o.gigErrorReport,
                            message: e,
                            details: t,
                            includeStack: i
                        }), s)
                    } catch (e) {
                        console.error(e)
                    }
                }, t
            }(o.BaseLogger);
        t.IFrameLogger = a
    }, , , , , , , , function(e, t, i) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i(4);

        function o(e, i, o, r, s, c, l) {
            void 0 === c && (c = {}), void 0 === l && (l = !1);
            var u = n.removeUndefined({
                name: e,
                time: (new Date).getTime().toString(),
                source: r,
                sourceData: s,
                reportData: c,
                cid: o
            });
            if (l) {
                var g = [u];
                window.gigya.gscounters.sendReport({
                    reports: g,
                    noAuth: !a(g)
                })
            } else t.queue || (t.queue = []), t.queue.push(u)
        }

        function r() {
            for (; t.queue && t.queue.length > 0;) {
                var e = n.clone(t.queue.splice(0, 5), !0, !0);
                window.gigya.gscounters.sendReport({
                    reports: e,
                    noAuth: !a(e)
                })
            }
        }

        function a(e) {
            for (var t = 0; t < e.length; t++) {
                var i = e[t];
                if ("loadc" !== i.name && "load" !== i.name || "loadc" === i.name && i.reportData && i.reportData.actionCounterPath) return !0
            }
            return !1
        }
        t.trackAddressBarShares = function() {
            if (window.gigya.thisScript.globalConf.trackAddressBarShares) {
                var e = window.gigya._.apiAdapter.getTokenParam(window.gigya.thisScript.APIKey, "UUID"),
                    t = document.location.href.split("#");
                1 != t.length && "" != t[1] && "guid=_" != t[1] || document.location.replace("#guid=" + (e || "_"))
            }
        }, t.report = o, t.init = function() {
            setInterval(r, 5e3)
        }, t.reportLoad = function(e, t) {
            if (!t._reportedLoad) {
                t._reportedLoad = !0;
                var i = "load";
                if ("gigya.socialize.plugins.reactions.showReactionsBarUI" == e) return;
                "gigya.socialize.plugins.simpleshare.showSimpleShareUI" == e && (i = "loadSimple"), o(i, t.APIKey, t.cid, t.source, t.sourceData)
            }
        }
    }, function(e, t) {
        Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isSessionVerified = !1,
            function(e) {
                e[e.Social = 0] = "Social", e[e.Sso = 1] = "Sso"
            }(t.OAuthMode || (t.OAuthMode = {}))
    }, function(e, t, i) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i(5),
            o = i(4),
            r = i(21);
        window.gigya.socialize || (window.gigya.socialize = {}), window.gigya.gcs || (window.gigya.gcs = {}), window.gigya.gm || (window.gigya.gm = {}), window.gigya.comments || (window.gigya.comments = {}), window.gigya.accounts || (window.gigya.accounts = {}), window.gigya.gscounters || (window.gigya.gscounters = {});
        var a = {};
        t.getApi = function(e) {
            return a[e]
        };
        var s = function() {
            function e(e, t) {
                this.methodName = e, this.settings = t, this.addAlias(), a[e] = this
            }
            return e.prototype.preprocessRequest = function(e, t) {
                this.settings.preprocessor ? this.settings.preprocessor(e, t) : t()
            }, e.prototype.addAlias = function() {
                var e = this;
                n.createAlias("gigya." + this.methodName, (function() {
                    for (var t = [], i = 0; i < arguments.length; i++) t[i] = arguments[i];
                    var n = o.merge([t]),
                        a = function() {
                            n.lang && (n._explicitLang = !0);
                            var t = o.merge([window.gigya.thisScript.globalConf, n]);
                            e.run(t, n)
                        };
                    window.gigya.thisScript && window.gigya.thisScript.globalConf ? a() : r.queueForExecution("API", a)
                }))
            }, e
        }();
        t.BaseApi = s
    }, function(e, t, i) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i(4),
            o = i(30),
            r = i(9),
            a = i(25),
            s = i(2),
            c = [];

        function l() {
            if ("undefined" != typeof FB) {
                window.gigya.providersConfig.facebook && window.gigya.providersConfig.facebook.appID && FB && FB.getLoginStatus && FB.getLoginStatus((function(e) {
                    t.initializedTime = new Date, t.isConnected = "connected" == e.status, t.isLoggedIn = "unknown" != e.status, o.dispatch({
                        eventName: "FBCRefreshed"
                    })
                }), !0)
            }
        }

        function u() {
            var e = {};
            if ("undefined" != typeof FB && FB.getAuthResponse) try {
                var t = FB.getAuthResponse();
                t && (null != t.userID && (e.fb_UID = t.userID), null != t.accessToken && (e.fb_at = t.accessToken), null != t.expiresIn && (e.fb_exp = t.expiresIn))
            } catch (e) {}
            return e
        }
        t.isLoggedIn = !1, t.isConnected = !1, t.isLoaded = function() {
            return null != t.initializedTime
        }, t.load = function(e) {
            if (!t.initializedTime) {
                t.initializedTime = null, window.setInterval((function() {
                    l()
                }), 27e5), window.fbAsyncInit = function() {
                    var i = n.clone(window.gigya.thisScript.globalConf.facebookInitParams);
                    i || (i = {}), window.gigya.providersConfig.facebook ? (i.appId = window.gigya.providersConfig.facebook.appID, i.version = window.gigya.providersConfig.facebook.version) : i.version = "v1.0", i.status = !1, i.cookie = !0, i.xfbml = !0, i.oauth = !0, FB.init(i), 1 != e ? FB.getLoginStatus((function(e) {
                        t.initializedTime = new Date, t.isConnected = "connected" == e.status, t.isLoggedIn = "unknown" != e.status, o.dispatch({
                            eventName: "facebookLoaded",
                            isLoggedIn: t.isLoggedIn,
                            isConnected: t.isConnected
                        }), window.gigya.socialize.addEventHandlers({
                            listenerType: "component"
                        }, {
                            listenerDescription: "listener for updating Facebook Connect session",
                            onLogin: function() {
                                l()
                            },
                            onConnect: function() {
                                l()
                            },
                            onLogout: function() {
                                l()
                            }
                        })
                    }), !0) : (t.initializedTime = new Date, o.dispatch({
                        eventName: "facebookLoaded",
                        isLoggedIn: t.isLoggedIn,
                        isConnected: t.isConnected
                    }))
                };
                var i = document.createElement("div");
                i.id = "fb-root", r.appendToBody(i), a.load(s.localInfo.protocol + "://connect.facebook.net/" + window.gigya.thisScript.lang.full.replace("-", "_") + "/sdk.js", null, (function() {
                    "none" == document.documentElement.style.display && (document.documentElement.style.display = "")
                }), !0)
            }
        }, t.refreshSession = l, t.retryPending = function() {
            for (var e = c, t = 0; t < e.length; t++) e[t]();
            c = []
        }, t.runWhenLoaded = function(e) {
            c.push(e)
        }, t.getParams = u, t.autoLogin = function() {
            window.gigya.socialize.waitForService({
                service: "facebook",
                callback: function() {
                    window.gigya._.apiAdapter.isSessionValid(window.gigya.thisScript.globalConf, (function(e) {
                        var t = u();
                        !e && t && t.fb_at && !window.gigya._.autoLoginInProgress && (window.gigya._.autoLoginInProgress = !0, window.gigya.socialize.notifyLogin({
                            providerSessions: {
                                facebook: {
                                    authToken: t.fb_at,
                                    tokenExpiresIn: t.fb_exp
                                }
                            }
                        }))
                    }))
                }
            })
        }
    }, , , , , , , , , , , , function(e, t) {
        Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            function(e) {
                e[e._undefined = 0] = "_undefined", e[e.desktop = 1] = "desktop", e[e.mobile = 2] = "mobile", e[e.auto = 3] = "auto"
            }(t.DeviceTypes || (t.DeviceTypes = {}))
    }, function(e, t, i) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i(30);
        t.isLoaded = function() {
            return null != t.initializedTime
        }, t.load = function() {
            var e = this;
            if (!t.initializedTime && window.gigya.providersConfig.googlePlus) {
                t.initializedTime = null;
                var i = document.createElement("script");
                i.type = "text/javascript", i.async = !0, window.__gigya_handleClientLoad = function() {
                    return e.handleClientLoad()
                }, i.src = "https://apis.google.com/js/client.js?onload=__gigya_handleClientLoad";
                var n = document.getElementsByTagName("script")[0];
                n.parentNode.insertBefore(i, n)
            }
        }, t.handleClientLoad = function() {
            try {
                delete window.__gigya_handleClientLoad
            } catch (e) {
                window.__gigya_handleClientLoad = void 0
            }
            t.initializedTime = new Date, n.dispatch({
                eventName: "googlePlusLoaded"
            })
        }, t.refreshSession = function() {}, t.autoLogin = function() {
            window.gigya.socialize.waitForService({
                service: "googlePlus",
                callback: function() {
                    window.gigya._.apiAdapter.isSessionValid(window.gigya.thisScript.globalConf, (function(e) {
                        e || gapi.auth.authorize({
                            client_id: window.gigya.providersConfig.googlePlus.clientId,
                            scope: window.gigya.providersConfig.googlePlus.scopes,
                            immediate: !0,
                            response_type: "token"
                        }, (function(e) {
                            e && e.access_token && !window.gigya._.autoLoginInProgress && (window.gigya._.autoLoginInProgress = !0, window.gigya.socialize.notifyLogin({
                                providerSessions: {
                                    googlePlus: {
                                        authToken: e.access_token
                                    }
                                }
                            }))
                        }))
                    }))
                }
            })
        }
    }, function(e, t, i) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i(112),
            o = i(108),
            r = i(115),
            a = i(16),
            s = i(9),
            c = i(5),
            l = i(63);
        t.defaultApiSchema = "ctag|APIKey|cid|oauth_token|source|sourceData|usePost|refUID|fb_UID|fb_at|fb_exp|environment|noAuth", t.defaultOauthSchema = "ctag|temporary_account|authFlow|connectWithoutLogin|provider|redirectMethod|redirect_uri|pendingRegistration|lang|regSource|extraPermissions|sessionExpiration|forceAuthentication|includeiRank|includeAllIdentities|extraFields|enabledProviders|disabledProviders|signIDs|openIDUsername|openIDURL|openIDProviderLogo|openIDProviderName|finalizeRegistration|include|actionAttributes|profileAttributes|googlePlayAppID|bp_channel_url|loginIfExists|includeUserInfo|redirectURL|authCodeOnly|enablePopupLocation|invite|regToken|loginMode|apiDomain|conflictHandling|forcePermissions|signKeys|dataCenter", t.postBookmarkSchema = "provider|URL|url|title|description|target|cid|APIKey|shortURLs|source|sourceData|providerKey|thumbnailURL|tags|userAction|[providerCapability=actions]UserAction|actionAttributes|facebookDialogType", t.loginMethods = {
            "socialize.login": 1,
            "socialize.addConnection": 1,
            "socialize.notifyLogin": 1,
            "socialize.linkAccounts": 1,
            "accounts.login": 1,
            "accounts.otp.login": 1,
            "accounts.auth.login": 1,
            "accounts.socialLogin": 1,
            "accounts.linkAccounts": 1,
            "accounts.register": 1,
            "accounts.finalizeRegistration": 1
        };
        var u = function(e) {
                return "link" !== e.loginMode && "reAuth" !== e.loginMode
            },
            g = function(e, t) {
                e.noAuth = !0, t()
            },
            d = function(e, t) {
                window.gigya.globalAccount.dataCenter && (e.dataCenter = window.gigya.globalAccount.dataCenter), t()
            };
        t.logoutBehaviour = {
            logoutBeforeServerResponse: !0,
            alwaysSendLogoutToServer: !1
        }, t.logoutMethods = {
            "socialize.logout": 1,
            "accounts.logout": 1,
            "socialize.deleteAccount": 1,
            "socialize.unlinkAccounts": 1
        };
        var p = function(e, t) {
                window.gigya.partnerSettings.ssoKey && (e.signIDs = !0), t()
            },
            f = function() {
                return !t.logoutBehaviour.alwaysSendLogoutToServer
            };
        t.arApiList = [new n.ServerApi("socialize.login", t.defaultOauthSchema, !1, {
            oauth: !0,
            preprocessor: d
        }, {
            clearSessionCondition: u
        }), new n.ServerApi("socialize.addConnection", t.defaultOauthSchema, !1, {
            oauth: !0
        }, {}), new n.ServerApi("socialize.requestPermissions", t.defaultOauthSchema, !0, {
            oauth: !0,
            defaultParams: {
                forcePermissions: !0
            }
        }), new n.ServerApi("accounts.socialLogin", t.defaultOauthSchema, !1, {
            oauth: !0,
            preprocessor: d
        }, {
            clearSessionCondition: u
        }), new o.UiApi("showDebugUI", "socialize.plugins.debug", {}, {}, "", {
            allowPopup: !0
        }), o.UiApi.createApi("showMyPhotoUI", "accounts", "profilePhoto.MyPhotoPlugin", "accounts.plugins.profilePhoto"), o.UiApi.createApi("showRatingUI", "comments", "rating.RatingPlugin", "comments.plugins.rating", {
            silentMode: window.gigya.partnerSettings.silentDeprecatedPlugins
        }), o.UiApi.createApi("runJsUnitTests", "_", "JsUtRunner.Jasmine.JasmineUtRunnerPlugin", "_.plugins.jsUtRunner"), o.UiApi.createApi("loadBasePlugin", "_", "Mock.MockPlugin", "_.plugins.mock"), new o.UiApi("showCommentsUI", "comments.plugins.comments", {
            width: 500
        }, {}, "", {
            silentMode: window.gigya.partnerSettings.silentDeprecatedPlugins,
            apiName: "comments.showCommentsUI1"
        }), new o.UiApi("showCommentsUI", "comments.plugins.comments2", {
            width: 500
        }, {}, "", {
            silentMode: window.gigya.partnerSettings.silentDeprecatedPlugins,
            apiName: "comments.showCommentsUI2"
        }), o.UiApi.versionSelector("showCommentsUI", "comments", "2", [{
            versionName: "1",
            method: window.gigya.comments.showCommentsUI1,
            additionalParams: {
                ctag: "comments_v1"
            }
        }, {
            versionName: "2",
            method: window.gigya.comments.showCommentsUI2,
            additionalParams: {
                ctag: "comments_v2"
            },
            isSupported: function() {
                return r.isModern()
            }
        }]), new o.UiApi("showShareUI", "socialize.plugins.share", {
            width: 520,
            height: 320
        }, {
            width: 595,
            height: 324
        }, "userAction", {
            silentMode: window.gigya.partnerSettings.silentDeprecatedPlugins,
            allowPopup: !0,
            preprocessor: function(e, t) {
                var i = e.operationMode;
                i && (i = i.toLowerCase().replace(/ /g, "")), e.containerID || (delete e.width, delete e.height), window.gigya._.apiAdapter.isSessionValid(e, (function(n) {
                    "simpleshare" == i || "autodetect" == i && !n ? window.gigya.socialize.showSimpleShareUI(e) : t()
                }))
            }
        }), o.UiApi.createApi("showMessageUI", "_", "messages.MessagesPlugin", "_.plugins.messages", {
            silentMode: window.gigya.partnerSettings.silentDeprecatedPlugins
        }), new o.UiApi("showLoginUI_v1", "socialize.plugins.login", {
            width: 120,
            height: 110
        }, {
            width: 280,
            height: 220
        }, "", {
            allowPopup: !0
        }), o.UiApi.createApi("showLoginUI_v2", "socialize", "login_v2.LoginPlugin", "socialize.plugins.login_v2"), o.UiApi.versionSelector("showLoginUI", "socialize", "1", [{
            versionName: "1",
            method: window.gigya.socialize.showLoginUI_v1
        }, {
            versionName: "2",
            method: window.gigya.socialize.showLoginUI_v2
        }]), new o.UiApi("showAddConnectionsUI_v1", "socialize.plugins.login", {
            width: 110,
            height: 65
        }, {
            width: 250,
            height: 200
        }, "", {
            allowPopup: !0
        }), o.UiApi.createApi("showAddConnectionsUI_v2", "socialize", "login_v2.LoginPlugin", "socialize.plugins.login_v2"), o.UiApi.versionSelector("showAddConnectionsUI", "socialize", "1", [{
            versionName: "1",
            method: window.gigya.socialize.showAddConnectionsUI_v1
        }, {
            versionName: "2",
            method: window.gigya.socialize.showAddConnectionsUI_v2
        }]), o.UiApi.createApi("showEditConnectionsUI", "socialize", "editConnections.EditConnectionPlugin", "socialize.plugins.edit"), new o.UiApi("showShareBarUI", "socialize.plugins.reactions", {
            shareCountCacheTimeout: 30
        }, {}, "userAction|shareButtons", {
            silentMode: window.gigya.partnerSettings.silentDeprecatedPlugins
        }), new o.UiApi("showReactionsBarUI", "socialize.plugins.reactions", {}, {}, "userAction|barID|reactions", {
            silentMode: window.gigya.partnerSettings.silentDeprecatedPlugins,
            preprocessor: function(e, t) {
                e.barID || (e.barID = e.itemID), t()
            }
        }), new o.UiApi("showMiniShareUI", "socialize.plugins.minishare", {
            width: 320,
            height: 153
        }, {}, "", {
            allowPopup: !0
        }), new o.UiApi("showBookmarkUI", "socialize.plugins.bookmark", {
            width: 310,
            height: 250
        }, {
            width: 310,
            height: 310
        }), new o.UiApi("showSimpleShareUI", "socialize.plugins.simpleShare", {
            width: 280,
            height: 175
        }, {}, "userAction", {
            allowPopup: !0,
            dontLoadPluginsCore: !0,
            waitForAPIQueue: !0
        }), new o.UiApi("showShareMobileUI", "socialize.plugins.shareMobile", {}, {}, "userAction", {
            allowPopup: !0
        }), new o.UiApi("showUserStatusUI", "gm.plugins.userStatus", {
            width: 300,
            hidePoints: !1,
            hideActions: !1
        }, {}, "", {
            silentMode: window.gigya.partnerSettings.silentDeprecatedPlugins,
            requireSession: !0
        }), new o.UiApi("showAchievementsUI", "gm.plugins.achievements", {
            width: 300,
            height: 100,
            excludeChallenges: "_default"
        }, {}, "", {
            silentMode: window.gigya.partnerSettings.silentDeprecatedPlugins
        }), new o.UiApi("showChallengeStatusUI", "gm.plugins.achievements", {
            width: 300,
            height: 100,
            challenge: "_default"
        }, {}, "", {
            silentMode: window.gigya.partnerSettings.silentDeprecatedPlugins
        }), new o.UiApi("showLeaderboardUI", "gm.plugins.leaderboard", {
            width: 300
        }, {}, "", {
            silentMode: window.gigya.partnerSettings.silentDeprecatedPlugins,
            preprocessor: function(e, t) {
                e && e.height && (e.height = null), t()
            }
        }), new o.UiApi("showNotifications", "gm.plugins.notifications", {}, {}, "", {
            silentMode: window.gigya.partnerSettings.silentDeprecatedPlugins,
            preprocessor: function(e, t) {
                var i = a.getObject("gmSettings");
                if (!i || !i.disableNotifications) {
                    if (e.containerID = "gigNotifications", !document.getElementById(e.containerID)) {
                        var n = document.createElement("div");
                        n.id = e.containerID, n.style.position = "absolute", n.style.left = "-1000px", n.setAttribute("role", "alert"), n.setAttribute("aria-live", "polite"), n.setAttribute("aria-atomic", "true"), s.appendToBody(n)
                    }
                    t()
                }
            }
        }), new o.UiApi("showTfaUI", "accounts.plugins.tfa", {
            width: 325
        }), o.UiApi.createApi("showScreenSet", "accounts", "ScreenSet.ScreenSetPlugin", "accounts.plugins.screenSet", void 0, ["hideScreenSet", "switchScreen"]), new n.ServerApi("socialize.getAvailableProviders", "enabledProviders|disabledProviders|requiredCapabilities"), new n.ServerApi("socialize.notifyLogin", "siteUID|UIDTimestamp|UIDSig|UIDNonce|provider|authToken|tokenSecret|regSource|tokenExpiration|sessionHandle|sessionHandleExpiration|userInfo|providerSessions|sessionExpiration|authCode|includeAllIdentitiesincludeiRank|group|settings|extraFields|signIDs|newUser|actionAttributes|profileAttributes|bp_channel_url|signKeys", !1, void 0, {
            clearSession: !0
        }), new n.ServerApi("socialize.shortenURL", "URL", !1, {
            mode: {
                silent: window.gigya.partnerSettings.silentDeprecatedEndpoints,
                warn: !0
            }
        }), new n.ServerApi("socialize.convertAction", "userAction|[providerCapability=actions]UserAction|provider"), new n.ServerApi("socialize.getReactionsCount", "barID|buttonIDs|reportLoad", !1, {
            mode: {
                silent: window.gigya.partnerSettings.silentDeprecatedEndpoints,
                warn: !0
            }
        }), new n.ServerApi("socialize.incrementReactionsCount", "barID|buttonID|count|actionAttributes|profileAttributes", !1, {
            mode: {
                silent: window.gigya.partnerSettings.silentDeprecatedEndpoints,
                warn: !0
            }
        }), new n.ServerApi("socialize.deleteAccount", void 0, !0), new n.ServerApi("socialize.delUserSettings", "group|settings", !0), new n.ServerApi("socialize.getContacts", "enabledProviders|disabledProviders", !0), new n.ServerApi("socialize.getFriendsInfo", "enabledProviders|disabledProviders|detailLevel|UIDs|siteUsersOnly|requiredCapabilities|signIDs", !0, {
            mode: {
                silent: window.gigya.partnerSettings.silentDeprecatedEndpoints,
                warn: !0
            }
        }), new n.ServerApi("socialize.getRawData", "provider|UID|fields|dataFormat|path", !0), new n.ServerApi("socialize.getSessionInfo", "provider|paddingMode|encrypt|signIDs|encryptAll", !0), new n.ServerApi("socialize.getUserInfo", "enabledProviders|disabledProviders|signIDs|includeiRank|includeAllIdentities|extraFields|group|settings|includeOpenidUID|include", !0), new n.ServerApi("socialize.getUserSettings", "group|settings|regToken", !0, {
            mode: {
                silent: window.gigya.partnerSettings.silentDeprecatedEndpoints,
                warn: !0
            }
        }, {}, "regToken"), new n.ServerApi("socialize.checkin", "enabledProviders|disabledProviders|placeID|comment|latitude|longitude|actionAttributes|profileAttributes", !0), new n.ServerApi("socialize.logout", "signIDs|samlContext|sustainLogoutURLs", !0, {
            preprocessor: p,
            disableCache: !0
        }, {
            requiresSession: f
        }), new n.ServerApi("socialize.notifyRegistration", "siteUID|UIDTimestamp|UIDSig", !0), new n.ServerApi("socialize.publishUserAction", "userAction|[providerCapability=actions]UserAction|enabledProviders|disabledProviders|target|shortURLs|userLocation|tags|actionAttributes|profileAttributes", !0, {
            mode: {
                silent: window.gigya.partnerSettings.silentDeprecatedEndpoints,
                warn: !0
            }
        }), new n.ServerApi("socialize.removeConnection", "provider|lastIdentityHandling|removeLoginID", !0), new n.ServerApi("socialize.setStatus", "shortURLs|status|[providerCapability=status]Status|enabledProviders|disabledProviders|userLocation|actionAttributes|profileAttributes", !0, {
            mode: {
                silent: window.gigya.partnerSettings.silentDeprecatedEndpoints,
                warn: !0
            }
        }), new n.ServerApi("socialize.setUID", "siteUID|UIDTimestamp|UIDSig", !0), new n.ServerApi("socialize.setUserSettings", "group|settings|regToken", !0, {
            mode: {
                silent: window.gigya.partnerSettings.silentDeprecatedEndpoints,
                warn: !0
            }
        }, {}, "regToken"), new n.ServerApi("socialize.unlinkAccounts", void 0, !0), new n.ServerApi("socialize.sendEmail", "dontSendEmail|companyName|lang|emails|emailSubject|emailBody|linkBack|senderEmail|senderName|userMsg|shortURLs|userAction|[providerCapability=actions]UserAction|actionAttributes|profileAttributes|captchaTicket|lang", !1, {
            mode: {
                silent: window.gigya.partnerSettings.silentDeprecatedEndpoints,
                warn: !0
            }
        }, {}), new n.ServerApi("socialize.facebookGraphOperation", "graphPath|graphParams|authRequired|method|authType"), new n.ServerApi("socialize.getTopShares", "age|tag|limit", !1, {
            mode: {
                silent: window.gigya.partnerSettings.silentDeprecatedEndpoints,
                warn: !0
            }
        }), new n.ServerApi("socialize.notifySSOLogin", "bp_channel_url"), new n.ServerApi("gm.getChallengeStatus", "UID|includeChallenges|excludeChallenges|details|lang|actionAttributes|profileAttributes", !1, {
            mode: {
                silent: window.gigya.partnerSettings.silentDeprecatedEndpoints,
                warn: !0
            }
        }), new n.ServerApi("gm.resetLevelStatus", "challenges|actionAttributes|profileAttributes", !0, {
            mode: {
                silent: window.gigya.partnerSettings.silentDeprecatedEndpoints,
                warn: !0
            }
        }), new n.ServerApi("gm.getTopUsers", "challenge|totalCount|friendsCount|includeSelf|period|lang|actionAttributes|profileAttributes", !1, {
            mode: {
                silent: window.gigya.partnerSettings.silentDeprecatedEndpoints,
                warn: !0
            }
        }), new n.ServerApi("gm.getChallengeConfig", "UID|includeChallenges|excludeChallenges|lang|actionAttributes|profileAttributes|expandActions", !1, {
            mode: {
                silent: window.gigya.partnerSettings.silentDeprecatedEndpoints,
                warn: !0
            }
        }), new n.ServerApi("gm.notifyAction", "action|operation|challengeIDs|actionAttributes|profileAttributes", !0, {
            mode: {
                silent: window.gigya.partnerSettings.silentDeprecatedEndpoints,
                warn: !0
            }
        }), new n.ServerApi("comments.updateComment", "categoryID|streamID|commentID|commentText|commentTitle|ratings|mediaItems|taggedUsers"), new n.ServerApi("comments.postComment", "categoryID|streamID|parentID|guestName|guestEmail|commentText|anonymous|mediaItems|privacy|feedID|userAction|[providerCapability=actions]UserAction|scope|enabledProviders|disabledProviders|shortURLs|commentTitle|ratings|tags|taggedUsers|streamTags|actionAttributes|profileAttributes", !1, {
            mode: {
                silent: window.gigya.partnerSettings.silentDeprecatedEndpoints,
                warn: !0
            }
        }), new n.ServerApi("comments.getComments", "categoryID|streamID|includeSettings|start|startTS|threadLimit|sort|threaded|threadDepth|includeStreamInfo|includeOpenidUID|includeUID|includeReplies|tags|dataFormat|markupType|includeUserOptions|includeUserComments|includeRatingsDims|includeUserHighlighting|pinnedCommentID|lang", !1, {
            mode: {
                silent: window.gigya.partnerSettings.silentDeprecatedEndpoints,
                warn: !0
            }
        }), new n.ServerApi("comments.setStreamInfo", "categoryID|streamID|streamTitle|streamURL|streamInfoSig|streamTags", !1, {
            mode: {
                silent: window.gigya.partnerSettings.silentDeprecatedEndpoints,
                warn: !0
            }
        }), new n.ServerApi("comments.getTopStreams", "categoryID|limit|maxStreamAge|includeLastComment|streamTag|minRatingsCount", !1, {
            mode: {
                silent: window.gigya.partnerSettings.silentDeprecatedEndpoints,
                warn: !0
            }
        }), new n.ServerApi("comments.getTopRatedStreams", "categoryID|limit|maxStreamAge|ratingClass|minRatingsCount|streamTag", !1, {
            mode: {
                silent: window.gigya.partnerSettings.silentDeprecatedEndpoints,
                warn: !0
            }
        }), new n.ServerApi("comments.getStreamInfo", "categoryID|streamID|streamIDs|includeLastComment|includeRatingsDims|includeRatingDetails", !0, {
            mode: {
                silent: window.gigya.partnerSettings.silentDeprecatedEndpoints,
                warn: !0
            }
        }), new n.ServerApi("comments.flagComment", "categoryID|streamID|commentID|actionAttributes|profileAttributes", !1, {
            mode: {
                silent: window.gigya.partnerSettings.silentDeprecatedEndpoints,
                warn: !0
            }
        }), new n.ServerApi("comments.vote", "categoryID|streamID|commentID|vote|actionAttributes|profileAttributes", !0, {
            mode: {
                silent: window.gigya.partnerSettings.silentDeprecatedEndpoints,
                warn: !0
            }
        }), new n.ServerApi("comments.getUserVotes", "categoryID|streamID", !0), new n.ServerApi("comments.getUserComments", "categoryID|streamID|tag|senderUID|start|limit|sort|includeReplies|includeStreamInfo|includeUserHighlighting", !0, {
            mode: {
                silent: window.gigya.partnerSettings.silentDeprecatedEndpoints,
                warn: !0
            }
        }), new n.ServerApi("comments.getFriendsComments", "categoryID|streamID|start|limit|includeUID|sort|includeReplies|includeStreamInfo", !0, {
            mode: {
                silent: window.gigya.partnerSettings.silentDeprecatedEndpoints,
                warn: !0
            }
        }), new n.ServerApi("comments.getThread", "categoryID|streamID|commentID|start|includeUID|limit|threadDepth|sort", !1, {
            mode: {
                silent: window.gigya.partnerSettings.silentDeprecatedEndpoints,
                warn: !0
            }
        }), new n.ServerApi("comments.deleteComment", "categoryID|streamID|commentID", !0, {
            mode: {
                silent: window.gigya.partnerSettings.silentDeprecatedEndpoints,
                warn: !0
            }
        }), new n.ServerApi("comments.getRelatedUsers", "categoryID|streamID|parentCommentID|usernamePrefix|limit", !1, {
            mode: {
                silent: window.gigya.partnerSettings.silentDeprecatedEndpoints,
                warn: !0
            }
        }), new n.ServerApi("comments.analyzeMediaItem", "categoryID|urls", !1, {
            mode: {
                silent: window.gigya.partnerSettings.silentDeprecatedEndpoints,
                warn: !0
            }
        }), new n.ServerApi("comments.subscribe", "categoryID|streamID|email|lang", !1, {
            mode: {
                silent: window.gigya.partnerSettings.silentDeprecatedEndpoints,
                warn: !0
            }
        }), new n.ServerApi("comments.unsubscribe", "categoryID|streamID|unsubscribeToken", !1, {
            mode: {
                silent: window.gigya.partnerSettings.silentDeprecatedEndpoints,
                warn: !0
            }
        }), new n.ServerApi("comments.setUserOptions", "replyNotifications|notificationsEmail|notificationsLanguage", !0, {
            mode: {
                silent: window.gigya.partnerSettings.silentDeprecatedEndpoints,
                warn: !0
            }
        }), new n.ServerApi("comments.getUserOptions", "ServerApiKey", !0, {
            mode: {
                silent: window.gigya.partnerSettings.silentDeprecatedEndpoints,
                warn: !0
            }
        }), new n.ServerApi("gcs.getUserData", "type|fields", !0), new n.ServerApi("gcs.setUserData", "data|type|updateBehavior", !0), new n.ServerApi("gcs.search", "expTime|querySig|query"), new n.ServerApi("gcs.getSchema", "schemaType"), new n.ServerApi("accounts.b2b.registerOrganization", "organization|requester", !1, void 0, {
            forcePost: !0
        }), new n.ServerApi("accounts.b2b.getOrganizationSchema", "", !1, {
            preprocessor: g
        }), new n.ServerApi("accounts.login", "loginID|password|sessionExpiration|targetEnv|regToken|include|actionAttributes|profileAttributes|includeUserInfo|includeDynamicSchema|bp_channel_url|captchaToken|captchaType|captchaText|loginMode|signKeys|lang", !1, {
            riskAssessment: !0
        }, {
            clearSessionCondition: u,
            forcePost: !0
        }), new n.ServerApi("accounts.linkAccounts", "loginID|password|sessionExpiration|targetEnv|include|regToken|includeUserInfo|bp_channel_url|signKeys", !1, void 0, {
            forcePost: !0
        }), new n.ServerApi("accounts.initRegistration", "sdk|isLite|dataCenter", !1, {
            preprocessor: d
        }, {
            clearSession: !0
        }), new n.ServerApi("accounts.initProgression", "sdk|regToken", !1, {
            preprocessor: function(e, t) {
                var i = window.gigya.getUrlParam("regToken");
                i && (e.regToken = i), t()
            }
        }, {
            clearSession: !0
        }), new n.ServerApi("accounts.register", "username|email|password|UID|regToken|siteUID|secretQuestion|secretAnswer|regSource|profile|preferences|displayedPreferences|data|captchaText|captchaToken|lang|hashedPassword|pwHashAlgorithm|skipVerification|finalizeRegistration|targetEnv|sessionExpiration|include|actionAttributes|profileAttributes|includeUserInfo|bp_channel_url|signKeys|subscriptions", !1, void 0, {
            forcePost: !0
        }), new n.ServerApi("accounts.finalizeRegistration", "regToken|targetEnv|include|includeUserInfo|bp_channel_url|allowAccountsLinking|signKeys|subscriptions"), new n.ServerApi("accounts.captchaImage", "regToken"), new n.ServerApi("accounts.importProfilePhoto", "regToken|URL|publish"), new n.ServerApi("accounts.setProfilePhoto", "regToken|publish|photoBytes"), new n.ServerApi("accounts.resetPassword", "lang|loginID|passwordResetToken|secretAnswer|securityFields|newPassword|email", !1, void 0, {
            forcePost: !0
        }), new n.ServerApi("accounts.isAvailableLoginID", "loginID"), new n.ServerApi("accounts.resendVerificationCode", "regToken|email"), new n.ServerApi("accounts.getCaptcha", ""), new n.ServerApi("accounts.getPolicies", "sections"), new n.ServerApi("accounts.getSchema", "sections|schemaType", !1, {
            preprocessor: g
        }), new n.ServerApi("accounts.verifyLogin", "include|extraProfileFields|targetEnv", !0), new n.ServerApi("accounts.getAccountInfo", "include|extraProfileFields|regToken", !0, {}, {}, "regToken"), new n.ServerApi("accounts.setAccountInfo", "profile|preferences|displayedPreferences|data|regToken|oldPassword|password|newPassword|addLoginEmails|removeLoginEmails|username|secretQuestion|secretAnswer|requirePasswordChange|conflictHandling|tfaStatus|rba|subscriptions|preferences|lang", !0, void 0, {
            forcePost: !0
        }, "regToken"), new n.ServerApi("accounts.logout", "signIDs|samlContext|sustainLogoutURLs", !0, {
            preprocessor: p,
            disableCache: !0
        }, {
            requiresSession: f
        }), new n.ServerApi("accounts.search", "expTime|querySig|query"), new n.ServerApi("accounts.getScreenSets", "screenSetIDs|include|lang|screenSetVersion", !1, {
            preprocessor: g
        }, {}), new n.ServerApi("accounts.sso.login", "redirectURL|state|authFlow|context", !1, {
            oauth: !0
        }, {
            oauthMode: l.OAuthMode.Sso
        }), new n.ServerApi("accounts.getConflictingAccount", "regToken|loginID"), new n.ServerApi("accounts.incrementCounters", "counters", !0, {
            mode: {
                silent: window.gigya.partnerSettings.silentDeprecatedEndpoints,
                warn: !0
            },
            preprocessor: function(e, t) {
                var i = e.actionCounterPath,
                    n = e.counters;
                if (i && n)
                    for (var o = 0; o < n.length; o++) {
                        var r = n[o];
                        "object" != typeof r || r.path || (r.path = i)
                    }
                t()
            }
        }), new n.ServerApi("accounts.resetSitePreferences", "", !0, {
            postprocessor: function(e, t) {
                0 === (null == t ? void 0 : t.errorCode) && window.gigya.accounts.logout()
            }
        }), new n.ServerApi("accounts.getCounters", "counters", !0, {
            mode: {
                silent: window.gigya.partnerSettings.silentDeprecatedEndpoints,
                warn: !0
            }
        }), new n.ServerApi("accounts.getJWT", "fields|expiration", !0), new n.ServerApi("accounts.tfa.getProviders", "regToken", !0, {}, {}, "regToken"), new n.ServerApi("accounts.tfa.initTFA", "provider|mode|regToken", !1, {}, {}), new n.ServerApi("accounts.tfa.finalizeTFA", "gigyaAssertion|providerAssertion|tempDevice|regToken", !0, {}, {}, "regToken"), new n.ServerApi("accounts.tfa.deactivateProvider", "provider", !0), new n.ServerApi("accounts.tfa.unregisterDevice", "allDevices", !0), new n.ServerApi("accounts.tfa.backupcodes.get", "gigyaAssertion", !0), new n.ServerApi("accounts.tfa.backupcodes.create", "gigyaAssertion", !0), new n.ServerApi("accounts.tfa.backupcodes.verify", "gigyaAssertion|code|regToken", !1), new n.ServerApi("accounts.tfa.phone.getRegisteredPhoneNumbers", "gigyaAssertion", !1, {
            preprocessor: g
        }, {}), new n.ServerApi("accounts.tfa.phone.removePhone", "gigyaAssertion|phoneId", !1, {}, {}), new n.ServerApi("accounts.tfa.phone.sendVerificationCode", "gigyaAssertion|lang|phoneID|phone|method|regToken", !1, {}, {}), new n.ServerApi("accounts.tfa.phone.completeVerification", "gigyaAssertion|phvToken|code|regToken", !1, {}, {}), new n.ServerApi("accounts.tfa.email.getEmails", "gigyaAssertion", !1, {
            preprocessor: g
        }, {}), new n.ServerApi("accounts.tfa.email.sendVerificationCode", "emailID|gigyaAssertion|lang|regToken", !1, {}, {}), new n.ServerApi("accounts.tfa.email.completeVerification", "gigyaAssertion|phvToken|code|regToken", !1, {}, {}), new n.ServerApi("accounts.tfa.totp.register", "gigyaAssertion", !1, {}, {}), new n.ServerApi("accounts.tfa.totp.verify", "gigyaAssertion|sctToken|code|regToken", !1, {}, {}), new n.ServerApi("accounts.tfa.push.isVerified", "gigyaAssertion|regToken", !1, {}, {}), new n.ServerApi("accounts.tfa.push.sendVerification", "gigyaAssertion|regToken", !1, {}, {}), new n.ServerApi("accounts.b2b.delegatedAdminLogin", "orgId|lang", !0, {}, {}), new n.ServerApi("accounts.b2b.getOrganizationInfo", "orgId|bpid", !0, {}, {}), new n.ServerApi("accounts.b2b.setOrganizationContext", "bpid", !0, {}, {}), new n.ServerApi("accounts.b2b.getOrganizationContext", "", !0, {}, {}), new n.ServerApi("accounts.b2b.auth.getAssets", "appId", !0, {}, {}), new n.ServerApi("accounts.otp.sendCode", "regToken|phoneNumber|email|lang", !1, {}, {
            forcePost: !0
        }), new n.ServerApi("accounts.otp.login", "vToken|code|targetEnv|includeUserInfo|include|regSource|sessionExpiration", !1, {}, {
            forcePost: !0
        }), new n.ServerApi("accounts.otp.update", "vToken|code|regToken", !1, {}, {}), new n.ServerApi("accounts.auth.getMethods", "identifier", !1, {}, {}), new n.ServerApi("accounts.auth.push.sendVerification", "identifier", !1, {}, {}), new n.ServerApi("accounts.auth.push.isVerified", "vToken", !1, {}, {}), new n.ServerApi("accounts.auth.login", "accessToken|sessionExpiration|targetEnv|include|includeUserInfo|loginMode|lang", !1, void 0, {
            clearSessionCondition: u,
            forcePost: !0
        }), new n.ServerApi("ds.store", "type|data|oid|updateBehavior"), new n.ServerApi("ds.get", "type|data|oid|fields"), new n.ServerApi("ds.search", "expTime|querySig|query"), new n.ServerApi("ds.getSchema", ""), new n.ServerApi("ds.delete", "type|oid|fields"), new n.ServerApi("ids.getAccountInfo", "include|extraProfileFields", !0), new n.ServerApi("ids.setAccountInfo", "profile|preferences|data|oldPassword|password|newPassword|addLoginEmails|removeLoginEmails|username|secretQuestion|secretAnswer|requirePasswordChange|lang", !1, void 0, {
            forcePost: !0
        }), new n.ServerApi("ids.search", "expTime|querySig|query"), new n.ServerApi("gscounters.sendReport", "reports", !1, {
            mode: {
                silent: window.gigya.partnerSettings.silentDeprecatedEndpoints,
                warn: !1
            }
        }, {
            forceGigyaDomain: !0
        })], c.createAlias("gigya.socialize.showCommentsUI", window.gigya.comments.showCommentsUI), c.createAlias("gigya.socialize.showRatingUI", window.gigya.comments.showRatingUI), c.createAlias("gigya.services.socialize", window.gigya.socialize), c.createAlias("gigya.services.gcs", window.gigya.gcs), c.createAlias("gigya.services.gm", window.gigya.gm), c.createAlias("gigya.services.comments", window.gigya.comments), c.createAlias("gigya.services.accounts", window.gigya.accounts), c.createAlias("gigya.socialize.connect", window.gigya.socialize.addConnection), c.createAlias("gigya.socialize.disconnect", window.gigya.socialize.removeConnection), c.createAlias("gigya.socialize.linkAccounts", window.gigya.socialize.setUID), c.createAlias("gigya.socialize.showConnectUI", window.gigya.socialize.showAddConnectionsUI), c.createAlias("gigya.showDebugUI", window.gigya.socialize.showDebugUI)
    }, function(e, t) {
        function i(e) {
            return e ? 1e3 * Number(e.substr(0, e.indexOf("_"))) : 0
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.isValid = function(e) {
            return i(e) > Date.now()
        }, t.getMax = function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            if (e && e.length) return e.sort((function(e, t) {
                return i(t) - i(e)
            }))[0]
        }, t.getMillis = i
    }, function(e, t, i) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = i(3),
            r = i(21);
        try {
            n = Boolean(window.sessionStorage)
        } catch (e) {
            n = !1
        }

        function a(e, t) {
            if (n) {
                var i;
                try {
                    i = o.deserialize(window.sessionStorage.getItem("gigyaCache")), null == t && i[e] ? delete i[e] : i[e] = {
                        response: t,
                        time: (new Date).getTime()
                    }, window.sessionStorage.setItem("gigyaCache", o.serialize(i))
                } catch (e) {}
                r.release("cache", "cache_" + e)
            }
        }

        function s(e) {
            a(e, null)
        }
        t.set = a, t.get = function e(t, i, a) {
            if (n) try {
                if (!r.isActive("cache_" + t)) {
                    var c = window.sessionStorage.getItem("gigyaCache"),
                        l = o.deserialize(c),
                        u = l[t];
                    if (u) {
                        if (i && i + u.time > (new Date).getTime()) return void a(u.response);
                        s(t), u = null
                    }
                    if (!u) return r.hold("cache", "cache_" + t), void a(null)
                }
                if (r.isActive("cache_" + t)) return void r.waitFor("cache_" + t, e, arguments)
            } catch (e) {
                a(null)
            } else "function" == typeof a && a(null)
        }, t.remove = s
    }, , , , , , , , , , , , , , , , , , , , , , , , , function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.fill = function e(t, i) {
            "function" == typeof t && (t = t(i)), t instanceof Array && (t = t.join(""));
            var n = /(\$)(!?)([a-z_][a-z_.\d]*)([(][^()]*[)])?|(\$)(!?)\{([a-z_][a-z_.\d]*)([(][^()]*[)])?\}/gi;
            n.lastIndex = 0;
            for (var o, r = t, a = n.exec(r); null != a;) {
                var s = "!" == a[2 + (o = "$" == a[1] ? 0 : 4)],
                    c = a[3 + o],
                    l = a[4 + o];
                null == l && (l = "");
                "." == c.substring(0, 1) && (c = c.substring(1)), "DBG" == c.substring(0, 3) && (c = c.substring(3), 1);
                for (var u = "", g = c + l; g != u;) {
                    u = g;
                    var d = n.lastIndex;
                    g = e(u, i), n.lastIndex = d
                }
                var p = "",
                    f = 0;
                if (null != i[c.split(".")[0]]) try {
                    p = new Function("o", "p", 'return eval("o." + p)')(i, g)
                } catch (e) {} else p = "$" + (s ? "!" : "") + g, f = 1;
                r = s ? r.replace(a[0], "") : r.substr(0, a.index) + p + r.substr(a.index + a[0].length), n.lastIndex = a.index + f, a = n.exec(r)
            }
            return r
        }
    }, function(e, t, i) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i(19),
            o = i(5);
        t._aliases = {};
        var r = function() {
            function e(e, i, n, o, r, a, s) {
                if (this.ID = e, this.displayName = i, this.width = n, this.height = o, this.explicitOnly = a, this.aliases = s, this.arDefaultCapabilities = r.split(","), this.name = i.toLowerCase().split(" ").join("").split("!").join("").split(".").join("").split("+").join("plus"), s) {
                    t._aliases || (t._aliases = {});
                    for (var c = s.split("|"), l = 0; l < c.length; l++) t._aliases[c[l]] = this.name
                }
                switch (this.name) {
                    case "messenger":
                        this.displayName = "Microsoft";
                        break;
                    case "googleplus":
                        this.displayName = "Google";
                        break;
                    case "customopenid":
                        this.displayName = "OpenID";
                        break;
                    case "paypaloauth":
                        this.displayName = "PayPal"
                }
            }
            return e.prototype.toString = function() {
                return this.name
            }, e
        }();

        function a(e, i) {
            void 0 === i && (i = t.arProviders);
            for (var n = 0; n < i.length; n++)
                if (i[n].name.toLowerCase() === e.toLowerCase()) return i[n]
        }

        function s(e) {
            if (null != e) {
                for (var i = e.split(","), n = 0; n < i.length; n++) {
                    var o = i[n].replace(/^\s+|\s+$/g, "");
                    t._aliases[o] && (i[n] = t._aliases[o])
                }
                return i.join(",")
            }
        }

        function c(e, i) {
            void 0 === i && (i = t.arProviders);
            for (var n = 0; n < i.length; n++)
                if (i[n].ID === e) return i[n]
        }

        function l(e, i, n) {
            void 0 === i && (i = ""), void 0 === n && (n = t.arProviders);
            var o = (i = i.toLowerCase()).split(" ").join("").split(".").join("").toLowerCase().split(",");
            o = p(o, n);
            for (var r = 0; r < o.length; r++)
                for (var a = 0; a < e.length; a++) {
                    var s = e[a],
                        c = s.name || s.toString();
                    c && (c = c.toLowerCase()), c === o[r] && e.splice(a, 1)
                }
            return e
        }

        function u(e, t) {
            null == t && (t = []);
            for (var i = [], n = 0; n < e.length; n++) {
                for (var o = e[n], r = !0, a = 0; a < t.length; a++) {
                    for (var s = !1, c = 0; c < o.arDefaultCapabilities.length; c++)
                        if (o.arDefaultCapabilities[c].toLowerCase() == t[a].toLowerCase()) {
                            s = !0;
                            break
                        } if (!s) {
                        r = !1;
                        break
                    }
                }
                r && i.push(o)
            }
            return i
        }

        function g() {
            return t.arProviders.concat()
        }

        function d(e, i) {
            void 0 === i && (i = t.arProviders);
            var o = ("" + (e = s(e = ("" + e).split(" ").join("").split(".").join("").toLowerCase()))).split(",");
            o = p(o, i);
            for (var r = [], c = 0; c < o.length; c++) {
                var l = a(o[c], i);
                null != l && -1 == n.indexOf(r, l) && r.push(l)
            }
            return r
        }

        function p(e, i) {
            i || (i = t.arProviders);
            for (var n = [], o = 0; o < e.length; o++)
                if ("*" == e[o])
                    for (var r = 0; r < i.length; r++) {
                        for (var a = !1, s = 0; s < e.length; s++) e[s].toLowerCase() === i[r].name.toLowerCase() && (a = !0);
                        a || i[r].explicitOnly || n.push(i[r].name)
                    } else n.push(e[o]);
            return n
        }
        t.Provider = r, t.arProviders = [new r(64, "Facebook", 650, 400, "login,friends,places,status,actions,photos"), new r(9012, "Twitter", 800, 440, "login,friends,notifications,actions,status,places,checkins"), new r(72, "Google+", 560, 600, "login,contacts", !1, "google|googleplus"), new r(9042, "LinkedIn", 865, 450, "login,friends,status,actions,notifications,contacts"), new r(9058, "Amazon", 785, 510, "login"), new r(9803, "Yahoo", 500, 567, "login,friends,contacts,notifications"), new r(1047, "Messenger", 380, 540, "login, friends", !1, "messenger|microsoft"), new r(9832, "Instagram", 440, 420, "login,photos"), new r(9222, "Odnoklassniki", 888, 425, "login"), new r(9007, "FourSquare", 1e3, 650, "login,friends,places,checkins"), new r(8191, "Renren", 450, 350, "login,friends,status,actions"), new r(8203, "QQ", 570, 460, "login,actions"), new r(9821, "Sina", 640, 380, "login,status,actions"), new r(4228, "Mixi", 1e3, 720, "login,friends,actions,photos", !0), new r(9830, "Yahoo! JAPAN", 980, 700, "login", !0), new r(8205, "Spiceworks", 640, 380, "login", !0), new r(9041, "VKontakte", 610, 510, "login,friends,photos,status,actions"), new r(9800, "AOL", 530, 720, "login"), new r(4096, "WordPress", 700, 540, "login"), new r(256, "Blogger", 760, 400, "login"), new r(4218, "Netlog", 730, 590, "login", !0), new r(4224, "Orange France", 730, 590, "login", !0), new r(5002, "Livedoor", 970, 700, "login", !0), new r(5004, "Fox News", 730, 590, "login", !0), new r(1051, "PayPal", 400, 550, "login", !0), new r(9219, "Xing", 785, 510, "login,friends", !0), new r(8206, "WeChat", 730, 590, "login", !1, "wechat|weixin"), new r(4121, "Custom OpenID", 730, 590, "login", !0), new r(4122, "Custom SAML", 730, 590, "login", !0), new r(10001, "OpenID Connect", 730, 590, "login", !0), new r(6002, "Site", 730, 590, "", !0), new r(1052, "PayPalOAuth", 730, 590, "login", !0), new r(8207, "Line", 730, 590, "login"), new r(20001, "Kakao", 500, 600, "login", !0), new r(20002, "Naver", 780, 555, "login", !0), new r(20003, "DocCheck", 874, 844, "login", !0), new r(20004, "Apple", 874, 844, "login", !0)], t.getProviderByName = a, t.replaceProviderAliases = s, t.getProviderById = c, t.hideProvidersByName = l, t.getProvidersForRequiredCapabilities = u, t.getAllProviders = g, t.getProvidersByName = d, t.replaceWildcard = p, o.createAlias("gigya.socialize.getAllProviders", g), o.createAlias("gigya.socialize.replaceProviderAliases", s), o.createAlias("gigya.socialize.getProvidersByName", d), o.createAlias("gigya.socialize._getProviderByName", a), o.createAlias("gigya.socialize.hideProvidersByName", l), o.createAlias("gigya.socialize._getProviderByID", c), o.createAlias("gigya.socialize.getProvidersForRequiredCapabilities", u)
    }, function(e, t, i) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i(0),
            o = i(64),
            r = i(109),
            a = i(5),
            s = i(4),
            c = i(40),
            l = i(110),
            u = i(19),
            g = i(21),
            d = i(30),
            p = i(62),
            f = i(14),
            h = i(25),
            m = i(50),
            w = i(107),
            v = i(9);
        t.__pluginsCoreLoaded = !1;
        var y = {
                showReactionsBarUI: ["barID"],
                showCommentsUI: ["categoryID", "streamID"]
            },
            b = function(e) {
                function i(t, n, o, r, a, s) {
                    void 0 === o && (o = {}), void 0 === r && (r = {}), void 0 === a && (a = ""), void 0 === s && (s = {});
                    var c = e.call(this, i.getApiName(n, t, s), s) || this;
                    return c.methodName = t, c.jsName = n, c.settings = s, s.defaultParams = o || {}, s.defaultPopupParams = r || {}, s.requiredParams = a || "", c
                }
                return n.__extends(i, e), i.getApiName = function(e, t, i) {
                    return void 0 === i && (i = {}), i.apiName || e.split(".")[0] + "." + t
                }, i.versionSelector = function(e, t, i, n, o) {
                    void 0 === o && (o = "version");
                    var c = new r.VersionSelector(e, n, i);
                    return a.createAlias("gigya." + t + "." + e, (function() {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        var i = e[0],
                            n = e[1];
                        n || (n = i, i = null), n || (n = {}, e.push(n));
                        var r = s.merge([{}, i, n]);
                        c.callVersion("" + r[o], n, e)
                    })), c
                }, i.createApi = function(e, t, n, o, r, a) {
                    void 0 === r && (r = {}), r.useBasePlugin = !0;
                    var s = new i(e, o, null, null, null, r);
                    return s.namespace = t, s.className = n, s.instanceMethods = a || [], s.addInstanceMethodsAliases(), s
                }, i.prototype.addInstanceMethodsAliases = function() {
                    for (var e = 0; e < this.instanceMethods.length; e++) this.createInstanceMethodAlias(this.instanceMethods[e])
                }, i.prototype.createInstanceMethodAlias = function(e) {
                    var t = this;
                    a.createAlias("gigya." + this.namespace + "." + e, (function(i) {
                        if (t.injectionInfo) {
                            var n = t.getPublicMethod(e),
                                o = l.getPluginInstance(i, t.injectionInfo);
                            if (o) {
                                var r = [];
                                u.forEach(n.argNames, (function(e) {
                                    e && void 0 !== i[e] && r.push(i[e])
                                })), o[n.instanceMethod].apply(o, r)
                            } else c.addLog("couldn't find instance", t, !1)
                        } else c.addLog("invalid injection info", t, !1)
                    }))
                }, i.prototype.getPublicMethod = function(e) {
                    var t;
                    if (this.injectionInfo.publicMethods && (t = this.injectionInfo.publicMethods[e]), !t) throw new Error("public method " + e + " is not configured for " + this.injectionInfo.name);
                    return t
                }, i.prototype.preprocessRequest = function(t, i) {
                    var n = this;
                    e.prototype.preprocessRequest.call(this, t, (function() {
                        t.source || n.setSourceData(t), i && i()
                    }))
                }, i.prototype.run = function(e, t) {
                    var i = this;
                    if (this.settings.silentMode) {
                        window.gigya.logger.warn("Deprecated Feature: " + this.methodName);
                        var n = e.callback;
                        "function" == typeof n && n()
                    } else !this.settings.waitForAPIQueue || e.ignoreApiQueue ? this.startUI(e, t) : g.queueForExecution("API", (function() {
                        i.startUI(e, t)
                    }))
                }, i.prototype.startUI = function(e, t) {
                    var i = this;
                    e = s.clone(e), this.prepareParameters(e), this.preprocessRequest(e, (function() {
                        i.settings.useBasePlugin ? (window.gigya.logger.info("loading modern plugin"), i.loadPluginJS(e, t, (function(n) {
                            g.queueForExecution("UI", (function() {
                                n && i.className && (i.pluginType = i.getPluginType(), i.injectionInfo = i.pluginType.injectionInfo(i));
                                var o = function() {
                                    i.startPlugin(e, t)
                                };
                                0 == e.waitForDebug ? o() : g.queueForExecution("debug", o)
                            }))
                        }))) : (window.gigya.logger.info("loading legacy plugin"), i.legacyStartUI(e, t))
                    }))
                }, i.prototype.startPlugin = function(e, t) {
                    var i = this;
                    d.dispatch({
                        eventName: "beforePluginRequest",
                        methodName: this.methodName,
                        params: e,
                        explicitParams: t
                    }, e);
                    var n = e.originalMethodName || this.methodName;
                    if (c.logCall(n, e), p.reportLoad(n, e), this.pluginType) {
                        if (e) {
                            var o = l.getPluginInstance(e, this.injectionInfo);
                            o && o.dispose && !e._allowMultipleInstances && !e.newModal && o.dispose()
                        }
                        var r = new this.pluginType(e, t, this.injectionInfo);
                        if (l.setPluginInstance(e, this.injectionInfo, r), r.onDisposedEvent().add((function() {
                                return l.removePluginInstance(e, i.injectionInfo)
                            })), window.gigya.logger.info("starting plugin " + this.injectionInfo.name + " with params", r.params), r.start(), r.containerID) {
                            var s = document.getElementById(r.containerID);
                            s && (s.gigyaPluginInstance = r)
                        }
                        e.getInstance && e.getInstance(r)
                    } else a.callFunction("gigya." + this.jsName + "." + this.methodName, [e, e, e])
                }, i.prototype.loadPluginJS = function(e, i, n) {
                    if (this.wasPluginJSLoaded(e)) window.gigya.logger.info("plugin was already loaded"), n && n(!1);
                    else {
                        var o, r = !1,
                            a = f.getCdnResource("/js/"),
                            s = "gigya.services." + this.jsName,
                            c = a + s + ".min.js" + (e.lang ? "?lang=" + e.lang : ""),
                            l = a + "gigya.services.plugins.base.min.js?services=" + s + (e.lang ? "&lang=" + e.lang : "");
                        t.__pluginsCoreLoaded ? o = c : (window.gigya.logger.debug("locking queue to fetch basePlugin"), o = l, t.__pluginsCoreLoaded = !0, r = !0, g.hold("pluginsJS", "UI")), window.gigya.logger.info("loading " + s), d.dispatch({
                            eventName: "beforePluginLoad",
                            methodName: this.methodName,
                            explicitParams: i,
                            params: e
                        }, e), h.load(o, null, (function() {
                            r && g.release("pluginsJS", "UI"), n && n(!0)
                        }), !0, void 0, [c, l])
                    }
                }, i.prototype.wasPluginJSLoaded = function(e) {
                    this.jsName, this.methodName;
                    var t = "gigya.services." + this.jsName + ".js";
                    try {
                        var i = this.getPluginType(),
                            n = window.gigya.i18n[t][e.lang]
                    } catch (e) {
                        return !1
                    }
                    return void 0 !== i && void 0 !== n
                }, i.prototype.getPluginType = function() {
                    for (var e = s.expressionHelper(window.gigya), t = 0, i = ["_.plugins." + this.className, this.jsName + "." + this.methodName]; t < i.length; t++) {
                        var n = i[t],
                            o = e.getField(n);
                        if (o) return o
                    }
                }, i.prototype.setSourceData = function(e) {
                    if ("socialize.showSimpleShareUI" == this.methodName ? e.source = "socialize.showShareUI" : e.source = e.originalMethodName || this.methodName, !e.sourceData && y[this.methodName]) {
                        for (var t, i = {}, n = 0; n < y[this.methodName].length; n++) {
                            var o = y[this.methodName][n];
                            null != e[o] && (t = !0, i[o] = e[o])
                        }
                        t && (e.sourceData = i)
                    }
                    e.pluginsStack || (e.pluginsStack = []), e.pluginsStack.push({
                        source: this.methodName
                    }), e.lastSource = this.methodName
                }, i.prototype.validateRequiredParams = function(e) {
                    for (var t = this.settings.requiredParams.split("|"), i = 0; i < t.length; i++) {
                        var n = t[i];
                        if ("" != n && (null == e[n] || "" == e[n])) return m.dispatchInvalidParamError(e, n), !1
                    }
                    return !0
                }, i.prototype.setDefaultParams = function(e) {
                    var t = !e.containerID || e.isPopup;
                    for (var i in this.settings.defaultParams) null == e[i] && (t && this.settings.defaultPopupParams[i] ? e[i] = this.settings.defaultPopupParams[i] : e[i] = this.settings.defaultParams[i]);
                    if (t)
                        for (var i in this.settings.defaultPopupParams) e[i] || (e[i] = this.settings.defaultParams[i])
                }, i.prototype.prepareParameters = function(e) {
                    for (var t in e) - 1 != t.toLowerCase().indexOf("provider") && "string" == typeof e[t] && (e[t] = w.replaceProviderAliases(e[t]));
                    e.lang || (e.lang = window.gigya.thisScript.lang.langCode), e.source ? e.isPopup = !1 : this.setSourceData(e)
                }, i.prototype.legacyStartUI = function(e, t) {
                    var i = this,
                        n = e.containerID;
                    if (this.settings.ignoreContainerId) e.containerID = "", n = "";
                    else if (null == e.containerID && !this.settings.allowPopup || e.containerID && !document.getElementById(e.containerID)) return void m.dispatchInvalidParamError(e, "containerID");
                    var o = this.settings.allowPopup && (!n || e.isPopup);
                    o && this.settings.useNewModal && (e.useNewModal = !0), this.setDefaultParams(e), this.settings.allowPopup || o || v.clearByID(n), this.validateRequiredParams(e) && this.loadPluginJS(e, t, (function() {
                        var n = function() {
                            i.prepareContainer(e, o, (function() {
                                i.startPlugin(e, t)
                            }))
                        };
                        g.queueForExecution("UI", (function() {
                            0 == e.waitForDebug ? n() : g.queueForExecution("debug", n)
                        }))
                    }))
                }, i.prototype.prepareContainer = function(e, t, i) {
                    var n = this;
                    if (document.body) {
                        var o, r = e.containerID;
                        if (t && (r = v.getCenteredDivID(this.methodName), e.newModal && (r += (new Date).getTime()), e.containerID = r, e.isPopup = !0, document.getElementById(r) || ((o = v.createTopLevelDiv(r)).style.position = "absolute")), !(o = o || document.getElementById(r))) return m.dispatchInvalidParamError(e, "containerID"), void i();
                        var a = o.Reqs ? o.Reqs : o.Reqs = [],
                            s = a.length + "@0@" + r;
                        e.rid = s;
                        a[a.length] = {
                            rid: s,
                            container: o,
                            method: this.methodName,
                            context: e.context,
                            c: e,
                            p: e,
                            i: e,
                            operation: this.methodName,
                            isHTML: !0
                        };
                        if (o && o.style) {
                            o.style.display = "", o.style.visibility = "";
                            var c = document.getElementById("gigya_ifr_" + r);
                            c && (c.style.display = "", c.style.visibility = "");
                            null != c && (v.setSize(c, e.width, e.height, t), c.style.visibility = "visible"), v.setSize(o, e.width, e.height, t)
                        }
                        var l = this.methodName.split(".").pop();
                        o.setAttribute && o.setAttribute("gigid", (e.source && e.source != l ? e.source + "_" : "") + l), i()
                    } else window.setTimeout((function() {
                        n.prepareContainer(e, t, i)
                    }), 200)
                }, i
            }(o.BaseApi);
        t.UiApi = b
    }, function(module, exports, __webpack_require__) {
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var arrayUtils = __webpack_require__(19),
            VersionSelector = function() {
                function VersionSelector(e, t, i) {
                    if (this.methodName = e, this._versions = t, !this._versions || this._versions.length < 1) throw new Error(this.methodName + ": required at least one valid version");
                    if (i) {
                        if (this._defaultVersionIndex = this.findVersionIndexOrDefault(i), -1 == this._defaultVersionIndex) throw new Error(this.methodName + ": default version is not defined as a version")
                    } else this._defaultVersionIndex = 0
                }
                return VersionSelector.prototype.callVersion = function(e, t, i) {
                    void 0 === t && (t = {}), void 0 === i && (i = [t]);
                    var n = this.findVersionIndexOrDefault(e);
                    if (-1 == n) throw Error("gigya plugin version doesn't exist");
                    var o = this.findSupportedVersion(n);
                    if (!o) throw new Error(e + ": could not find supported version for this browser");
                    this.invokeVersionMethod(o, t, i)
                }, VersionSelector.prototype.findSupportedVersion = function(e) {
                    for (var t = this._versions.length, i = 0; i < t; ++i) {
                        var n = this._versions[(e - i + t) % t];
                        if (!n.isSupported || n.isSupported({
                                directCall: 0 == i
                            })) return n
                    }
                }, VersionSelector.prototype.findVersionIndexOrDefault = function(e) {
                    var t = -1;
                    return e && (t = arrayUtils.firstIndex(this._versions, (function(t) {
                        return t.versionName == e
                    }))), -1 == t && (t = void 0 !== this._defaultVersionIndex ? this._defaultVersionIndex : -1), t
                }, VersionSelector.prototype.invokeVersionMethod = function(version, params, args) {
                    var versionMethod;
                    switch (void 0 === params && (params = {}), void 0 === args && (args = [params]), typeof version.method) {
                        case "function":
                            versionMethod = version.method;
                            break;
                        case "string":
                            versionMethod = eval(version.method), params.selectedMethodName = version.method;
                            break;
                        default:
                            throw Error(this.methodName + " " + version.versionName + ": unsupported gigya-version method")
                    }
                    for (var field in version.additionalParams) params[field] = version.additionalParams[field];
                    params.originalMethodName = this.methodName, versionMethod.apply(this, args)
                }, VersionSelector
            }();
        exports.VersionSelector = VersionSelector
    }, function(e, t) {
        function i(e, t) {
            return e.instanceID ? e.instanceID : e.isPopup ? "gigya-modal-plugin-container-" + t.methodName : e.containerID ? e.containerID : t.name
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.instances = {}, t.getPluginInstance = function(e, n) {
            var o = i(e, n);
            return t.instances[o]
        }, t.setPluginInstance = function(e, n, o, r) {
            void 0 === r && (r = !1);
            var a = i(e, n);
            if (!r)
                for (var s = a, c = 2; t.instances[a]; c++) a = s + c.toString();
            e.instanceID = a, t.instances[a] = o
        }, t.removePluginInstance = function(e, n) {
            delete t.instances[i(e, n)], delete e.instanceID
        }
    }, function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function() {
            function e(e) {
                void 0 === e && (e = []), this._handlers = e
            }
            return e.prototype.add = function(e) {
                this._handlers.push(e)
            }, e.prototype.remove = function(e) {
                var t = this._handlers.indexOf(e);
                t > -1 && this._handlers.splice(t, 1)
            }, e
        }();
        t.EventWrapper = i
    }, function(e, t, i) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i(0),
            o = i(64),
            r = i(113),
            a = i(21),
            s = function(e) {
                function t(t, i, n, o, r, a) {
                    void 0 === o && (o = {}), void 0 === r && (r = {});
                    var s = e.call(this, t, o) || this;
                    return s.schema = i, s.requiresSession = n, s.settings = o, s.adapterSettings = r, s.altSessionParams = a, r.forceHttps = !0, void 0 === r.requiresSession && (r.requiresSession = function() {
                        return n
                    }), s
                }
                return n.__extends(t, e), t.prototype.run = function(e, t) {
                    var i, n = this;
                    if (null === (i = this.settings.mode) || void 0 === i ? void 0 : i.silent) {
                        this.settings.mode.warn && window.gigya.logger.warn("Deprecated Feature: " + this.methodName);
                        var o = e.callback;
                        "function" == typeof o && o()
                    } else {
                        var s = function() {
                            new r.ServerApiRequest(n, e).start()
                        };
                        e.ignoreApiQueue ? s() : a.queueForExecution("API", (function() {
                            s()
                        }))
                    }
                }, t
            }(o.BaseApi);
        t.ServerApi = s
    }, function(e, t, i) {
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n, o, r = i(0),
                a = i(4),
                s = i(30),
                c = i(79),
                l = i(40),
                u = i(65),
                g = i(64),
                d = i(3),
                p = i(26),
                f = i(35),
                h = i(10),
                m = i(25),
                w = i(41),
                v = i(192);

            function y(e) {
                return {
                    status: "OK",
                    statusMessage: "",
                    errorCode: 0,
                    statusCode: 0,
                    errorMessage: "",
                    errorDetails: "",
                    statusReason: "",
                    originalResponse: e
                }
            }
            s.add("onFBCRefreshed", (function() {
                    n = !1
                }), "component"),
                function(e) {
                    e[e._unknown = 0] = "_unknown", e[e.facebook = 1] = "facebook", e[e.linkedin = 2] = "linkedin", e[e.samlProvider = 3] = "samlProvider", e[e.samlSession = 4] = "samlSession"
                }(o || (o = {}));
            var b = function() {
                function t(e, t, i) {
                    void 0 === i && (i = null), this.api = e, this.params = a.merge([a.clone(t), e.settings.defaultParams]), this.originalParams = a.clone(t), this.callback = t.callback, this.riskAssessmentHandler = new v.RiskAssessmentHandlerTimeoutDecorator(i || new v.RiskAssessmentHandler)
                }
                return t.prototype.start = function() {
                    var e = this;
                    window.gigya._.apiAdapter.isSessionValid(this.params, (function(t) {
                        return r.__awaiter(e, void 0, void 0, (function() {
                            var e, i, n;
                            return r.__generator(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        return !this.api.adapterSettings.requiresSession() || t || this.doesHaveAltSessionParam() ? [3, 1] : (window.gigya.logger.debug(this.api.methodName + ": missing required session"), this.afterServerApiResponse(a.clone({
                                            status: "FAIL",
                                            errorMessage: "Unauthorized user",
                                            statusMessage: "Unauthorized user",
                                            errorCode: 403005
                                        }), !1), [3, 6]);
                                    case 1:
                                        return window.gigya.logger.debug("server request: " + this.api.methodName, this.params), this.api.adapterSettings.requiresSession() ? [4, window.gigya._.apiAdapter.setGltexpFromSSO(this.params.APIKey)] : [3, 3];
                                    case 2:
                                        return i = o.sent(), [3, 4];
                                    case 3:
                                        i = !1, o.label = 4;
                                    case 4:
                                        return e = i, [4, this.sendRequest(t)];
                                    case 5:
                                        n = o.sent(), e && 403005 !== n.errorCode && this.dispatchAccountsLoginEvent(n), o.label = 6;
                                    case 6:
                                        return [2]
                                }
                            }))
                        }))
                    }))
                }, t.prototype.sendRequest = function(e) {
                    var t = this,
                        i = a.merge([this.api.adapterSettings, {
                            cacheTimeout: this.params.cacheTimeout,
                            forceGigyaDomain: !e && this.api.adapterSettings.forceGigyaDomain
                        }]);
                    return new gigya.Promise((function(n) {
                        t.beforeRequest(e, (function(o) {
                            o ? t.afterServerApiResponse(o, e, n) : (s.dispatch({
                                eventName: "beforeRequest",
                                methodName: t.api.methodName,
                                rawParams: t.originalParams,
                                params: t.params
                            }, t.originalParams), t.api.settings.oauth ? window.gigya._.apiAdapter.sendOauthRequest(t.api.methodName, t.params, (function(i) {
                                t.afterServerApiResponse(i, e, n)
                            }), i) : window.gigya._.apiAdapter.sendRequest(t.api.methodName, t.params, (function(i) {
                                t.afterServerApiResponse(i, e, n)
                            }), i))
                        }))
                    }))
                }, t.prototype.beforeRequest = function(e, t) {
                    var i = this;
                    c.logoutMethods[this.api.methodName] && (!e && !this.params.regToken || window.gigya.partnerSettings.ssoLogoutUrl && document.location.href == window.gigya.partnerSettings.ssoLogoutUrl) && t(y(null)), this.handleDeprecatedParams(), this.handleCollections(), this.handleConnectWithoutLoginBehavior(e);
                    var n = this.params[this.params.provider + "ExtraPermissions"];
                    this.params.extraPermissions = n || this.params.permissions, this.handleRiskAssessment().then((function() {
                        i.api.preprocessRequest(i.params, (function() {
                            i.setOverridableParams((function() {
                                i.setNonOverridableParams(e, (function() {
                                    i.filterParams(i.params), l.logCall(i.api.methodName, i.originalParams, i.originalParams.lastSource), t()
                                }))
                            }))
                        }))
                    }))
                }, t.prototype.setOverridableParams = function(e) {
                    a.merge([{}, this.params]), e()
                }, t.prototype.doesHaveAltSessionParam = function() {
                    if (this.api.altSessionParams) {
                        for (var e = this.api.altSessionParams.split("|"), t = 0; t < e.length; t++)
                            if (this.params[e[t]]) return !0;
                        return !1
                    }
                }, t.prototype.setNonOverridableParams = function(e, t) {
                    if (null != this.params.APIKey) {
                        var i = window.gigya._.apiAdapter.getStorage().getItem("gltexp_" + this.params.APIKey);
                        null != i && (this.params.loginTokenExp = i)
                    }
                    var o = window.gigya._.apiAdapter.getStorage().getItem("_gigRefUid_" + this.params.APIKey);
                    if (o && (e || c.loginMethods[this.api.methodName]) && (this.params.refUID = o), window.gigya.providersConfig.facebook && !n) {
                        var r = u.getParams();
                        for (var a in r) this.params[a] = r[a];
                        n = !0
                    }
                    0 === this.api.methodName.indexOf("accounts.") && (s._activeNamespaces.socialize && null == this.params.includeUserInfo && (this.params.includeUserInfo = !0), this.params.include = this.params.include ? this.params.include + "," : "profile,data"), "accounts.getSchema" === this.api.methodName && (this.params.includeDynamicSchema = "clientOnly"), this.params.targetEnv = "jssdk", t()
                }, t.prototype.handleDeprecatedParams = function() {
                    this.params.pendingRegistration ? this.params.pending_registration = this.params.pendingRegistration : this.params.newUsersPendingRegistration && (this.params.pending_registration = this.params.newUsersPendingRegistration), this.params.alwaysForceAuthentication && (this.params.forceAuthentication = !0), this.params.timestamp && (this.params.UIDTimestamp = this.params.timestamp, delete this.params.timestamp), this.params.signature && 0 === this.api.methodName.indexOf("socialize.") && (this.params.UIDSig = this.params.signature, delete this.params.signature), this.params.nonce && (this.params.UIDNonce = this.params.nonce, delete this.params.nonce), this.params.format && !this.params.dataFormat && (this.params.dataFormat = this.params.format, delete this.params.format)
                }, t.prototype.handleRiskAssessment = function() {
                    var t;
                    return r.__awaiter(this, void 0, void 0, (function() {
                        var i;
                        return r.__generator(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return (null === (t = this.api.settings) || void 0 === t ? void 0 : t.riskAssessment) ? [4, this.riskAssessmentHandler.getAssessmentParameters(this.params)] : [2];
                                case 1:
                                    return i = n.sent(), e(this.params, i), [2]
                            }
                        }))
                    }))
                }, t.prototype.handleCollections = function() {
                    if (this.params.recipients && (this.params.recipients = this.extractListOfGIGUIDs(this.params.recipients)), this.params.friends) {
                        var e = this.extractListOfGIGUIDs(this.params.friends);
                        this.params.UIDs.length > 0 && (this.params.UIDs += ","), this.params.UIDs += e
                    }
                }, t.prototype.extractListOfGIGUIDs = function(e) {
                    var t = this;
                    switch (typeof e) {
                        case "string":
                            return e;
                        case "object":
                            if (void 0 !== e.UID) return e.UID;
                            if (e instanceof window.gigya.socialize.Collection) {
                                var i = [];
                                return e.each((function(e, n) {
                                    var o = t.extractListOfGIGUIDs(e);
                                    null != o && "" != o && i.push(o)
                                })), i.join(",")
                            }
                    }
                }, t.prototype.handleConnectWithoutLoginBehavior = function(e) {
                    if ("socialize.addConnection" === this.api.methodName) {
                        var t = this.params.connectWithoutLoginBehavior;
                        "string" == typeof t && (t = t.toLowerCase()), "loginexistinguser" === t && (this.params.loginIfExists = !0), e || (this.api = g.getApi("socialize.login"), "alwayslogin" !== t && (this.params.temporary_account = !0))
                    }
                }, t.prototype.filterParams = function(e) {
                    this.params = a.extractProperties(e, {}, this.getFullSchema())
                }, t.prototype.getFullSchema = function() {
                    if (null == this.api.schema) return "";
                    for (var e = (this.api.schema + "|" + c.defaultApiSchema).split("|"), t = 0; t < e.length; t++) {
                        var i = e[t];
                        if (-1 !== i.toLowerCase().indexOf("[providercapability=")) {
                            for (var n = i.toLowerCase().split("=")[1].split("]")[0], o = i.split("]")[1], r = window.gigya.socialize.getProvidersForRequiredCapabilities(window.gigya.socialize.getProvidersByName("*"), [n]), a = [], s = 0; s < r.length; s++) a.push(r[s].name + o);
                            e[t] = a.join("|")
                        }
                    }
                    return e.join("|")
                }, t.prototype.preprocessServerResponse = function(e) {
                    e.userInfo && 0 !== this.api.methodName.indexOf("accounts.") && ("string" == typeof e.userInfo && (e.userInfo = d.parse(e.userInfo, void 0)), e.userInfo && ((e = a.merge([e.userInfo, e])).errorCode = e.userInfo.errorCode, delete e.userInfo)), e.accountInfo && "string" == typeof e.accountInfo && (e.accountInfo = d.parse(e.accountInfo, void 0), e.accountInfo && delete(e = a.merge([e.accountInfo, e])).accountInfo);
                    try {
                        e.settings && "string" == typeof e.settings && (e.settings = d.parse(e.settings))
                    } catch (e) {}
                    return e
                }, t.prototype.getExpiredSessionResponse = function(e) {
                    switch (this.api.methodName) {
                        case "socialize.setUserSettings":
                            this.originalParams.disableLocalSettings || (p.setGigyaSettings(this.params.group, this.params.settings), e = y(e));
                            break;
                        case "socialize.delUserSettings":
                            this.originalParams.disableLocalSettings || (p.delGigyaSettings(this.params.group), e = y(e));
                            break;
                        case "socialize.getUserSettings":
                            if (!this.originalParams.disableLocalSettings) {
                                var t = p.getGigyaSettings(this.params.group);
                                (e = y(e)).settings = t
                            }
                            break;
                        case "socialize.getUserInfo":
                            e.status = "OK", e.statusMessage = "", e.errorCode = 0, e.statusCode = 0, e.errorMessage = "", e.errorDetails = "", e.statusReason = "";
                            break;
                        case "accounts.logout":
                        case "socialize.logout":
                            e = y(e)
                    }
                    return e
                }, t.prototype.afterServerApiResponse = function(e, t, i) {
                    var n = this;
                    isNaN(Number(window.gigya.thisScript.globalConf.verifyLoginInterval)) || "accounts.verifyLogin" !== this.api.methodName || 0 === e.errorCode || window.gigya._.apiAdapter.clearSession({
                        APIKey: window.gigya.thisScript.APIKey
                    }), p.checkCompleteRegistration(e, this.originalParams, this.api.methodName, (function(o, r, a) {
                        e = o, 403005 == (e = n.preprocessServerResponse(e)).errorCode && (e = n.getExpiredSessionResponse(e)), 0 == e.errorCode && (t || c.loginMethods[n.api.methodName]) && window.gigya._.apiAdapter.getStorage().removeItem("_gigRefUid_" + n.originalParams.APIKey), n.handleMethodResponse(e, (function(o) {
                            e = o, n.addDefaultResponseProperties(e), p.handleSpecialFields(e), n.logoutFromProvidersIfNeeded(e, (function(o) {
                                if (o) n.sendRequest(t).then(i);
                                else {
                                    if (r || n.generateEventsFromResponse(e, t), a) return window.gigya.logger.info("retrying request"), void n.sendRequest(t).then(i);
                                    if (s.dispatch({
                                            eventName: "afterResponse",
                                            methodName: n.api.methodName,
                                            filteredParams: n.params,
                                            response: e
                                        }, n.originalParams), "function" == typeof n.callback) {
                                        l.addLog("Calling callback for " + n.api.methodName + " with this response object", e);
                                        try {
                                            n.callback(e)
                                        } catch (e) {
                                            console.error(e)
                                        }
                                    }
                                    n.api.settings.postprocessor && n.api.settings.postprocessor(n.originalParams, e), i && i(e)
                                }
                            }))
                        }))
                    }))
                }, t.prototype.addDefaultResponseProperties = function(e) {
                    delete e.statusCode, delete e.statusReason, e.errorCode = e.errorCode || 0, e.status = e.status || (0 == e.errorCode ? "OK" : "FAIL"), e.errorMessage = e.errorMessage || "", e.statusMessage = e.statusMessage || e.errorMessage, e.requestParams = this.originalParams, e.requestParams.password && delete e.requestParams.password, e.context = this.originalParams.context;
                    var t = this.api.methodName.split(".")[0];
                    e.operation = "socialize" == t ? this.api.methodName.split(".")[1] : "/" + this.api.methodName
                }, t.prototype.handleMethodResponse = function(e, t) {
                    if (0 == e.errorCode) switch (this.api.methodName) {
                        case "accounts.socialLogin":
                        case "socialize.login":
                            e.newUser = "true" == String(e.x_newUser), delete e.x_newUser;
                        case "socialize.notifyLogin":
                        case "socialize.addConnection":
                        case "accounts.linkAccounts":
                        case "accounts.finalizeRegistration":
                        case "accounts.login":
                        case "accounts.sso.login":
                        case "accounts.otp.login":
                        case "accounts.auth.login":
                        case "accounts.register":
                        case "socialize.getUserInfo":
                            if (delete e.login_token, delete e.expires_in, delete e.id, e.code && (e.authCode = e.code, delete e.code), !(e.authCode || "socialize.notifyLogin" == this.api.methodName && this.params.authCode)) {
                                var i = e;
                                if (e.userInfo && (i = e.userInfo, delete e.userInfo), -1 == this.api.methodName.indexOf("accounts.") ? (e = {
                                        user: i
                                    }, a.extractProperties(i, e, "status|statusMessage|callId|errorCode|errorMessage|errorDetails|settings|context|UIDSig|timestamp|UIDSignature|signatureTimestamp|UID|profile|data|newUser|signKeysUIDSignature|dataCenter|id_token"), e.user.hasOwnProperty("UIDSig") && (e.signature = e.user.UIDSig), i.profile && delete i.profile, i.data && delete i.data, delete i.status, delete i.statusMessage, delete i.callId, delete i.errorCode, delete i.errorMessage, delete i.errorDetails, delete i.settings, delete i.context) : e != i && (e.user = i), "" == i.age || isNaN(parseInt(i.age)) || (i.age = parseInt(i.age)), i.suppressEvents && (e.suppressEvents = !0), "string" == typeof i.capabilities) {
                                    var n = i.capabilities;
                                    n || (n = ""), "object" != typeof i.capabilities && (i.capabilities = {}), n = n.toLowerCase(), i.capabilities = {
                                        actions: n.indexOf("actions") > -1,
                                        friends: n.indexOf("friends") > -1,
                                        login: n.indexOf("login") > -1,
                                        status: n.indexOf("status") > -1,
                                        notifications: n.indexOf("notifications") > -1,
                                        contacts: n.indexOf("contacts") > -1,
                                        photos: n.indexOf("photos") > -1
                                    }
                                }
                                if (p.convertIdentitiesArrayToObject(i), "string" == typeof i.providers && (i.providers = i.providers.split(",")), this.params.group && !e.settings) {
                                    var o = p.getGigyaSettings(this.params.group);
                                    e.settings = o
                                }
                            }
                            break;
                        case "socialize.getAvailableProviders":
                            for (var r = {}, s = 0; s < e.availableProviders.length; s++) r[e.availableProviders[s].name] = e.availableProviders[s];
                            e.availableProviders = r
                    }
                    "socialize.removeConnection" === this.api.methodName && 0 == e.errorCode ? window.gigya.socialize.getUserInfo(this.originalParams, {
                        callback: function(e) {
                            t(e)
                        }
                    }) : t(e)
                }, t.prototype.logoutFromProvidersIfNeeded = function(e, t) {
                    var i = e.errorCode;
                    if (c.logoutMethods[this.api.methodName] && 0 == i) {
                        e.logoutActiveSession && window.gigya._.apiAdapter.clearSession(this.params.APIKey);
                        var n, r = new Array,
                            a = 5e3,
                            s = 0;
                        if (e.connectedProviders ? n = e.connectedProviders.toLowerCase() : e.provider && (n = e.provider.toLowerCase()), n && !f.isExplicitFalse(this.originalParams.forceProvidersLogout))
                            for (var l = n.split(","), u = 0; u < l.length; ++u) {
                                var g = l[u],
                                    d = o[g],
                                    p = null,
                                    h = 5e3;
                                0 === g.indexOf("saml-") && (d = o.samlProvider, p = g.substring("saml-".length), h = !1, a = 1e4, s = 5e3), r.push({
                                    type: d,
                                    data: p,
                                    removeAfter: h
                                })
                            }
                        if (e.samlContext && e.connectedSamlSessions) {
                            var m = e.samlContext,
                                w = e.connectedSamlSessions.split(",");
                            for (u = 0; u < w.length; ++u) r.push({
                                type: o.samlSession,
                                data: {
                                    samlContext: m,
                                    samlSession: w[u]
                                },
                                removeAfter: !1
                            }), a = 1e4, s = 5e3
                        }
                        if (r.length) {
                            var v = 0,
                                y = !1,
                                b = function() {
                                    y || (y = !0, t(!1))
                                };
                            window.setTimeout(b, a);
                            var _ = function() {
                                ++v === r.length && window.setTimeout(b, s)
                            };
                            for (u = 0; u < r.length; u++) this.logoutFromProvider(r[u], _)
                        } else t(!1)
                    } else 403013 == e.errorCode && "accounts.verifyLogin" !== this.api.methodName ? window.gigya.accounts.verifyLogin({
                        callback: function(e) {
                            0 == e.errorCode ? t(!0) : t(!1)
                        }
                    }) : t(!1)
                }, t.prototype.logoutFromProvider = function(e, t) {
                    var i = "",
                        n = !1,
                        r = !0,
                        a = "" + window.gigya._.getApiDomain("fidm");
                    switch (e.type) {
                        case o.facebook:
                            if (window.gigya.providersConfig.facebook) return void window.gigya.socialize.waitForService({
                                service: "facebook",
                                callback: function() {
                                    u.isLoggedIn && FB.logout ? FB.logout((function() {
                                        u.refreshSession(), window.gigya._.apiAdapter.getStorage().removeItem("fblo_" + window.gigya.providersConfig.facebook.appID), t()
                                    })) : t()
                                }
                            });
                            break;
                        case o.samlProvider:
                            i = h.addParamsToURL("https://" + a + "/saml/v2.0/" + this.params.APIKey + "/sp/jsslo", {
                                name: e.data
                            }), n = !0, r = !1;
                            break;
                        case o.samlSession:
                            i = h.addParamsToURL("https://" + a + "/saml/v2.0/" + this.params.APIKey + "/idp/slo/continue/", e.data), n = !0, r = !1
                    }
                    if (i) {
                        r && (i += (new Date).getTime());
                        var s, c = n ? m.ResourceTypes.iframe : m.ResourceTypes.image;
                        s = e.removeAfter, m.triggerResource(i, t, c, s)
                    } else t()
                }, t.prototype.generateEventsFromResponse = function(e, t) {
                    var i, n = this;
                    if (0 == e.errorCode) switch (this.api.methodName) {
                        case "accounts.logout":
                        case "socialize.logout":
                        case "socialize.unlinkAccounts":
                        case "socialize.deleteAccount":
                            i = {
                                eventName: "logout,accounts.logout"
                            };
                            break;
                        case "socialize.linkAccounts":
                        case "socialize.setUID":
                            p.addUserInfoToEvent(e, i, !0);
                            break;
                        case "socialize.removeConnection":
                            i = {
                                eventName: "connectionRemoved,disconnect",
                                provider: this.params.provider || ""
                            }, p.addUserInfoToEvent(e, i);
                            break;
                        case "socialize.addConnection":
                            !t && e.user.isLoggedIn ? (i = {
                                eventName: "login",
                                provider: this.params.provider
                            }, p.addUserInfoToEvent(e, i, !0)) : (i = {
                                eventName: "connectionAdded,connect",
                                provider: this.params.provider
                            }, p.addUserInfoToEvent(e, i));
                            break;
                        case "accounts.linkAccounts":
                        case "accounts.finalizeRegistration":
                        case "accounts.login":
                        case "accounts.otp.login":
                        case "accounts.auth.login":
                        case "accounts.register":
                        case "accounts.socialLogin":
                            this.originalParams.suppressLoginEvent || this.dispatchAccountsLoginEvent(e);
                        case "socialize.finalizeRegistration":
                        case "socialize.register":
                        case "socialize.login":
                            if (!e.user && !e.authCode) break;
                            i = {
                                eventName: "login"
                            };
                            var o = this.params.provider;
                            if (!o && e.providerSessions)
                                for (var r in e.providerSessions) {
                                    o = r;
                                    break
                                }
                            i.provider = o || "site", i.loginMode = this.originalParams.loginMode || "standard", i.newUser = e.newUser || !1, e.authCode && (i.authCode = e.authCode), p.addUserInfoToEvent(e, i, !0), e.user && o && (o = o.toLowerCase(), window.gigya._.apiAdapter.getStorage().setItem("_gig_llp", o), window.gigya._.apiAdapter.getStorage().setItem("_gig_llu", e.user.firstName || ""));
                            break;
                        case "socialize.notifyLogin":
                            this.params.authCode || (i || (i = {
                                eventName: "login"
                            }), i.provider = "site", p.addUserInfoToEvent(e, i, !0));
                            break;
                        case "gm.notifyAction":
                            s.dispatch({
                                eventName: "actionNotified",
                                isInternal: !0
                            });
                            break;
                        case "accounts.sso.login":
                            window.gigya._.apiAdapter.syncSsoLogin(e.context)
                    }
                    c.loginMethods[this.api.methodName] && this.originalParams.redirectURL && i && i.user && 0 == e.errorCode && w.redirect(this.originalParams.redirectURL, [i, i.user], this.originalParams.redirectMethod), 0 == e.errorCode && i && "login" === i.eventName && !e.profile && s._activeNamespaces.accounts && -1 === this.api.methodName.indexOf("accounts") && window.gigya.accounts.getAccountInfo(this.originalParams, {
                        include: "profile,data",
                        includeUserInfo: !1,
                        callback: function(e) {
                            n.originalParams.suppressLoginEvent || n.dispatchAccountsLoginEvent(e)
                        }
                    }), !i || "login" === i.eventName && this.originalParams.suppressLoginEvent || (i.context = this.originalParams.context, s.dispatch(i, this.originalParams))
                }, t.prototype.dispatchAccountsLoginEvent = function(e) {
                    var t = {
                        eventName: "accounts.login",
                        remember: f.isExplicitTrue(this.originalParams.remember),
                        provider: this.originalParams.provider ? this.originalParams.provider.toLowerCase() : "",
                        loginMode: this.originalParams.loginMode || "standard"
                    };
                    a.extractProperties(e, t, "newUser|signature|UIDSig|timestamp|UIDSignature|signatureTimestamp|UID|profile|data|signKeysUIDSignature|dataCenter|id_token"), s.dispatch(t, this.originalParams)
                }, t
            }();
            t.ServerApiRequest = b
        }).call(this, i(0).__assign)
    }, function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = window,
            n = function() {
                function e() {}
                return e.prototype.forceReset = function() {
                    e.greCaptchaLoad = void 0
                }, e.prototype.load = function(t) {
                    var n, o = this;
                    if ("undefined" == typeof grecaptcha) return e.greCaptchaLoad || (e.greCaptchaLoad = new gigya.Promise((function(r, a) {
                        var s = function() {
                                "undefined" != typeof grecaptcha && grecaptcha.ready ? grecaptcha.ready(r) : r()
                            },
                            c = function() {
                                return clearTimeout(n), window.gigya.logger.debug("Loading google captcha from " + e.RECAPTCHA_DOMAIN), "undefined" != typeof grecaptcha ? (window.gigya.logger.debug("Aborting. Google captcha already loaded"), s()) : t.googleCaptchaDomain === e.RECAPTCHA_DOMAIN ? (window.gigya.logger.debug("Aborting. Already tried to load from " + e.RECAPTCHA_DOMAIN + " and failed'"), a("Failed to load google's captcha from " + e.RECAPTCHA_DOMAIN)) : (t.googleCaptchaDomain = e.RECAPTCHA_DOMAIN, void window.gigya.utils.script.load(o.providerURL(t), a, s))
                            };
                        return n = setTimeout(c, e.RETRY_FROM_RECAPTCHA_TIMEOUT), t.callbackID && (i[t.callbackID] = function() {
                            delete i[t.callbackID], "undefined" != typeof grecaptcha ? s() : a("Error while trying to load grecaptcha")
                        }), window.gigya.logger.debug("Loading grecaptcha from " + o._domain(t)), window.gigya.utils.script.load(o.providerURL(t), c, s)
                    }))), e.greCaptchaLoad
                }, e.prototype.providerURL = function(e) {
                    return "//" + this._domain(e) + "/recaptcha/api.js?" + this.loadQueryParams(e)
                }, e.prototype.loadQueryParams = function(t) {
                    var i = "";
                    return i = t.type == e.V3_CAPTCHA_TYPE ? "render=" + t.siteKey : "render=explicit", t.callbackID && (i += "&onload=" + t.callbackID), t.lang && (i += "&hl=" + t.lang), i
                }, e.prototype._domain = function(t) {
                    var i = 0 === window.gigya.dataCenter.toLowerCase().indexOf("cn1") || window.gigya.utils.stringUtils.endsWith(window.gigya.dataCenter, "gigay-api.cn");
                    return t.googleCaptchaDomain || (i ? e.RECAPTCHA_DOMAIN : e.GOOGLE_DOMAIN)
                }, e.V3_CAPTCHA_TYPE = "reCaptchaV3", e.RECAPTCHA_DOMAIN = "www.recaptcha.net", e.GOOGLE_DOMAIN = "www.google.com", e.RETRY_FROM_RECAPTCHA_TIMEOUT = 3e3, e
            }();
        t.GoogleReCaptchaLoader = n, t.default = new n
    }, function(e, t, i) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i(2),
            o = navigator.userAgent.toLowerCase(),
            r = {
                version: null
            };

        function a() {
            if (r.version) return r.version;
            try {
                var e = o.match(/(opera|chrome|safari|firefox|msie|trident.*rv:)\/?\s*(\.?\d+(\.\d+)*)/i);
                if (e[2]) {
                    var t = e[2].split(".")[0];
                    if (!isNaN(parseInt(t))) return r.version = parseInt(t)
                }
            } catch (e) {}
            return 0
        }
        t.isModern = function() {
            return n.localInfo.isChrome || n.localInfo.isFF || n.localInfo.isEdge || n.localInfo.isOpera || n.localInfo.isIOSWebView || n.localInfo.isIE && a() >= 9 || n.localInfo.isEdgeLegacy || n.localInfo.isSafari && a() >= 4 || n.localInfo.isGoogleBot
        }, t.getVersion = a
    }, function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.getMetaTag = function(e) {
            for (var t = document.getElementsByTagName("meta"), i = 0; i < t.length; i++)
                if (t[i].getAttribute("property") == e && t[i].getAttribute("content")) return t[i].getAttribute("content")
        }
    }, function(e, t, i) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i(2),
            o = i(10),
            r = i(41),
            a = i(30);

        function s(e, t, i, n) {
            var o;
            return "string" == typeof e ? (o = parseInt(e), -1 !== e.indexOf("%") && (o = .01 * parseInt(e) * t, n && (o -= n / 2))) : o = e, o = Math.round(o), isNaN(o) && void 0 !== i && (o = s(i, t, void 0, n)), o
        }
        t._openedWindows = {}, t._uniqueWindowCounter = 0, t._calcPixels = s, t.open = function(e, i, c) {
            c || (c = {
                menubar: 0,
                toolbar: 0,
                resizable: 1,
                scrollbars: 1
            }), c.width = s(c.width, screen.width, 960), c.height = s(c.height, screen.height, 680), c.left = s(c.left, screen.width, "50%", c.width), c.top = s(c.top, screen.height, "50%", c.height);
            var l = "";
            for (var u in c) l += "," + u + "=" + c[u];
            l = l.substr(1);
            var g = n.localInfo.isIE && e.length > 2048 || e.length > 4096,
                d = e;
            g && (d = "", n.localInfo.isIE && (d = "about:blank")), i || (i = "_gigWindow_" + (new Date).getTime() + "_" + ++t._uniqueWindowCounter);
            var p = window.open(d, i, l);
            p && p.focus && p.focus(), t._openedWindows[i] = p;
            var f = o.getParamsFromURL(e);
            return g && r.redirect(e.split("?")[0], [f], "POST", i), a.dispatch({
                eventName: "windowOpened",
                url: e,
                params: f
            }), null != t._openedWindows[i]
        }, t.close = function(e) {
            if (null != t._openedWindows[e]) {
                var i = function() {
                    try {
                        null != t._openedWindows[e] && t._openedWindows[e].close(), delete t._openedWindows[e]
                    } catch (e) {}
                };
                n.localInfo.iosVersion >= 6 ? i() : window.setTimeout(i, 10)
            }
        }
    }, function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.now = function() {
            return Date.now()
        }
    }, function(e, t, i) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i(21),
            o = i(62),
            r = i(50),
            a = i(5),
            s = i(25),
            c = i(14),
            l = i(36),
            u = i(10),
            g = i(3),
            d = i(4),
            p = i(65),
            f = i(78),
            h = i(26),
            m = i(2),
            w = i(11);

        function v() {}

        function y() {
            if (window.gigya.abTesting)
                for (var e in window.gigya.abTesting)
                    if ("optimizely" === e) {
                        var t = window.gigya.abTesting[e];
                        if (t.serviceParams && t.serviceParams.hasOwnProperty("apiKey")) {
                            var i = window.location.pathname,
                                n = !1;
                            if (t.disabledPaths)
                                for (var o = 0; o < t.disabledPaths.length; o++)
                                    if (t.disabledPaths[o].indexOf(i) > -1) {
                                        n = !0;
                                        break
                                    } if (!n)
                                for (o = 0; o < t.enabledPaths.length; o++) i.indexOf(t.enabledPaths[o]) > -1 && s.load("//cdn.optimizely.com/js/" + t.serviceParams.apiKey + ".js")
                        }
                    }
        }

        function b(e) {
            m.localInfo.isNativeMobileApp || "1" != window.gigya._.apiAdapter.getStorage().getItem("gig_debug") ? e() : window.gigya.socialize.showDebugUI({
                ignoreApiQueue: !0,
                waitForDebug: !1,
                onLoad: e
            })
        }

        function _() {
            a.invokeOnPageLoad((function() {
                void 0 !== window.gigya_omniture_conf && s.load(c.getCdnResource("/js/GenesisExchange_Gigya.min.js"))
            }))
        }
        t.parseScriptRetries = 0, t.init = function() {
            window.gigya.logger.group("websdk root"), window.gigya.logger.info("partner settings:", window.gigya.partnerSettings), window.gigya.logger.info("local info:", m.localInfo);
            var e = window.gigya.logger.group("bootstrap websdk");
            n.hold("bootstrap", "API"), (m.localInfo.isIE6 || m.localInfo.isIE7 || m.localInfo.isIE8 || m.localInfo.isIE9 || m.localInfo.isIE10) && "undefined" != typeof console && void 0 !== console.log && console.log("Gigya: It looks like you're using an old version of Internet Explorer. This browser is not supported. Please upgrade to a newer version of IE."), o.init(), I((function() {
                var t, i, s;
                if ("cn1" === window.gigya.dataCenter) try {
                    window.gigya.defaultApiDomain = w.resolveChinaApiDomain(window.gigya.defaultApiDomain, window.gigya.thisScript.baseDomain);
                    var c = null !== (i = null === (t = window.gigya.localInfo) || void 0 === t ? void 0 : t.baseDomain) && void 0 !== i ? i : location.hostname;
                    "3_PCJeuP9AldfyG1kEPSPjkHgQUFLP_KNrtd-DNgphoNjLI7wewJQ_uq5WmhYj9XcJ" === window.gigya.apiKey && (null == c ? void 0 : c.indexOf("gigya-api.cn")) >= 0 && (window.gigya.defaultApiDomain = "gigya-api.cn")
                } catch (e) {
                    window.gigya.logger.report("failed to switch china domain", {
                        error: e && e.message
                    })
                }! function() {
                    var e = window.gigya.thisScript.globalConf.toggles;
                    if (e) {
                        window.gigya.logger.info("adding toggles cookie");
                        try {
                            window.gigya.utils.cookie.set("gig_toggles", btoa(JSON.stringify(e)))
                        } catch (e) {
                            window.gigya.logger.warn("failed to set gig_toggles cookie", {
                                message: e.message
                            })
                        }
                    } else try {
                        window.gigya.utils.cookie.remove("gig_toggles")
                    } catch (e) {
                        window.gigya.logger.warn("failed to remove gig_toggles cookie", {
                            message: e.message
                        })
                    }
                }();
                var l = window.gigya.thisScript.globalConf.customEventMap;
                l && (window.gigya.logger.info("adding custom event map"), r.addMap(l)), window.gigya.logger.group("init api adapter"), A((function() {
                    if (window.gigya.logger.groupEnd("init api adapter"), window.gigya.isReady = !0, "function" == typeof onGigyaServiceReady) {
                        window.gigya.logger.info("invoke local onGigyaServiceReady event");
                        try {
                            onGigyaServiceReady("socialize")
                        } catch (e) {
                            window.gigya.logger.warn("gigya: error while invoking onGigyaServiceReady", e)
                        }
                    }
                    if ("function" == typeof window.gigya.thisScript.globalConf.onGigyaServiceReady) {
                        window.gigya.logger.info("invoke globalconf's onGigyaServiceReady event");
                        try {
                            window.gigya.thisScript.globalConf.onGigyaServiceReady("socialize")
                        } catch (e) {
                            window.gigya.logger.warn("gigya: error while invoking onGigyaServiceReady injected from server", e)
                        }
                    }
                    C((function() {
                        n.release("bootstrap", "API"), m.localInfo.isNativeMobileApp || (x(), P(), o.trackAddressBarShares(), a.invokeOnPageLoad((function() {
                            return window.setTimeout(window.gigya.socialize.trackReferrals, 1e3)
                        }))), e.end()
                    }))
                })), _(), y();
                var u = {
                    sref: null === (s = document.referrer) || void 0 === s ? void 0 : s.substr(0, 1e3)
                };
                window.gigya.thisScript.globalConf.actionCounterPath && (u.actionCounterPath = window.gigya.thisScript.globalConf.actionCounterPath), o.report("loadc", window.gigya.thisScript.APIKey, null, null, null, u)
            }))
        }, t.warnOnUnsupportedBrowser = v, t.loadABTesting = y, t.startDebugIfNeeded = b, t.loadOmniture = _;

        function S(e) {
            void 0 === e && (e = "en-US");
            var t, i, n = e.replace("en-US", "en"),
                o = (e = e.replace("_", "-").toLowerCase()).split("-"),
                r = o[0];
            switch (t = (t = o.length > 1 ? o[1] : r).toUpperCase(), e) {
                case "es-mx":
                    i = e, t = "ES";
                    break;
                case "pt-br":
                case "zh-cn":
                case "zh-hk":
                case "zh-tw":
                case "te-st":
                case "fr-inf":
                case "de-inf":
                case "es-inf":
                case "nl-inf":
                case "lt-lt":
                case "lv-lv":
                case "et-ee":
                    i = e;
                    break;
                default:
                    i = r
            }
            return {
                full: r + "-" + t,
                langCode: i,
                countryCode: t,
                originalLang: n
            }
        }

        function I(e) {
            var i = l.getGigyaScriptElement();
            if (i && !window.__gig_hidescript) {
                window.gigya.logger.info("parsing gigya script");
                var n = u.getParamsFromURL(i.src, !0) || {},
                    o = g.deserialize(window.gigya.partnerSettings.siteGroupGlobalConf) || {},
                    r = g.deserialize(window.gigya.partnerSettings.globalConf, {}, {
                        siteGroupGlobalConf: o
                    }) || {},
                    a = g.deserialize(i.innerHTML) || {},
                    s = window.__gigyaConf || {};
                window.gigya.thisScript = {
                    scriptElement: i,
                    protocol: 0 === i.src.indexOf("https:") ? "https" : "http",
                    baseDomain: i.src.split("/")[2],
                    APIKey: n.apikey,
                    lang: S(n.lang || s.lang || a.lang || r.lang || o.lang),
                    globalConf: d.merge([window.gigya.partnerSettings.plugins || {}, o, r, a, s], !1),
                    URLParams: n
                }, window.gigya.thisScript.globalConf.lang = window.gigya.thisScript.lang.langCode, !window.gigya.thisScript.APIKey && "object" == typeof console && console.warn ? console.warn("**** WARNING - Loading socialize.js without an APIKey parameter is unsupported and may result in an unexpected behavior.  ****") : window.gigya.thisScript.globalConf.APIKey = window.gigya.thisScript.APIKey, e()
            } else t.parseScriptRetries < 10 ? (t.parseScriptRetries++, window.setTimeout((function() {
                I(e)
            }), 200)) : (window.gigya.thisScript = {
                scriptElement: null,
                protocol: m.localInfo.protocol,
                baseDomain: "https://cdns.gigya.com",
                APIKey: "",
                lang: S(""),
                globalConf: {},
                URLParams: {}
            }, e())
        }

        function A(e) {
            var t = window.__gigAPIAdapterSettings,
                i = function(e) {
                    void 0 === e && (e = window.__gigAPIAdapterSettings);
                    var t;
                    e && e.getAPIKey() === window.gigya.thisScript.APIKey && (t = e.getAdapterName());
                    return t || "web"
                }(t);
            m.localInfo.isNativeMobileApp = "mobile" === i, window.gigya.logger.info("selecting api adapter: " + i), window.gigya._.apiAdapter = window.gigya._.apiAdapters[i].newApiAdapter(t), a.createAlias("gigya.auth.loginToken.getTokenParam", window.gigya._.apiAdapter.getTokenParam), b((function() {
                window.gigya._.apiAdapter.init(e, 3)
            }))
        }

        function P() {
            window.gigya.thisScript.globalConf.autoLogin && (window.gigya.logger.info("triggering auto-login"), p.autoLogin(), f.autoLogin())
        }

        function C(e) {
            var t = u.getParamsFromURL(document.location.href);
            t.errorCode && t.regToken ? (window.gigya.logger.info("returned from redirect with regToken (errorCode: " + t.errorCode + ")"), h.checkCompleteRegistration(t, window.gigya.thisScript.globalConf, "", (function() {
                return e()
            }))) : e()
        }

        function x() {
            n.queueForExecution("API", (function() {
                a.invokeOnPageLoad((function() {
                    window.gigya.providersConfig.facebook && (window.gigya.logger.info("loading facebook sdk"), p.load(!1)), window.gigya.providersConfig.googlePlus && (window.gigya.logger.info("loading google plus sdk"), f.load())
                }))
            }))
        }
        t.parseLang = S, t.parseScriptElement = I, t.initApiAdapter = A, t.autoLogin = P, t.checkReturnFromRedirect = C, t.injectExternalSdks = x
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, i) {
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), i(183);
            var n = i(65),
                o = i(78),
                r = i(116),
                a = i(119),
                s = i(79),
                c = i(112),
                l = i(113);
            window.gigya._ || (window.gigya._ = {}), window.gigya._.bootstrap || (window.gigya._.bootstrap = {}), window.gigya.external || (window.gigya.external = {}), window.gigya.external.facebook || (window.gigya.external.facebook = {}), window.gigya.external.googlePlus || (window.gigya.external.googlePlus = {}), window.gigya.external.opengraph || (window.gigya.external.opengraph = {}), e(window.gigya._, s, c, l), e(window.gigya._.bootstrap, a), e(window.gigya.external.facebook, n), e(window.gigya.external.googlePlus, o), e(window.gigya.external.opengraph, r), window.gigya.build || (window.gigya.build = {
                version: "",
                number: 0
            }), window.gigya.providersConfig || (window.gigya.providersConfig = {}), window.gigya.isGigya || (window.gigya.isGigya = !0), window.gigya.partnerSettings || (window.gigya.partnerSettings = {
                authMode: "cookie",
                baseDomains: "",
                captchaProvider: "Google",
                plugins: {
                    apiDomain: "us1.gigya-api.com"
                },
                invisibleRecaptcha: {
                    siteKey: ""
                },
                recaptchaV2: {
                    siteKey: ""
                },
                funCaptcha: {
                    siteKey: ""
                }
            }), a.init()
        }).call(this, i(0).__assign)
    }, function(e, t, i) {
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), i(47);
            var n = i(184),
                o = i(14),
                r = i(185),
                a = i(50),
                s = i(30),
                c = i(186),
                l = i(187),
                u = i(26),
                g = i(40),
                d = i(2),
                p = i(107),
                f = i(62),
                h = i(63),
                m = i(188),
                w = i(64),
                v = i(108),
                y = i(110),
                b = i(189),
                _ = i(109),
                S = i(190),
                I = i(111),
                A = i(77),
                P = i(191),
                C = i(195),
                x = i(196),
                k = i(197);
            i(198), i(119), i(205), i(42), window.gigya._ || (window.gigya._ = {}), window.gigya.events || (window.gigya.events = {}), window.gigya.events.global || (window.gigya.events.global = {}), window.gigya.log || (window.gigya.log = {}), window.gigya._.providers || (window.gigya._.providers = {}), window.gigya.reports || (window.gigya.reports = {}), window.gigya._.apiAdapters || (window.gigya._.apiAdapters = {}), window.gigya._.plugins || (window.gigya._.plugins = y), window.gigya._.UI || (window.gigya._.UI = {}), window.gigya._.api || (window.gigya._.api = {}), window.gigya._.saml || (window.gigya._.saml = {}), window.gigya.fidm || (window.gigya.fidm = {}), window.gigya.fidm.saml || (window.gigya.fidm.saml = {}), window.gigya.services || (window.gigya.services = {}), window.gigya.globalAccount || (window.gigya.globalAccount = {}), e(window.gigya, n, c, l, d, m, r, {
                Promise: gigya.Promise
            }), e(window.gigya._, o, u, w, v, S, I, A, P), e(window.gigya.events, a), e(window.gigya.events.global, s), e(window.gigya.log, g), e(window.gigya._.providers, p), e(window.gigya.reports, f), e(window.gigya._.apiAdapters, h), e(window.gigya._.UI, b), e(window.gigya._.api, _), e(window.gigya._.saml, C), e(window.gigya.fidm.saml, x), e(window.gigya.services, k)
        }).call(this, i(0).__assign)
    }, function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.isReady = !1
    }, function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.defaultEventMaps = window.gigya.defaultEventMaps || []
    }, function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, function(e, t, i) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i(21),
            o = i(5);
        t.registerPlugin = function(e) {
            n.queueForExecution("UI", e)
        }, t.attachPlugin = function(e, t, i, n) {
            t || (t = "socialize"), window.gigya[t] || (window.gigya[t] = {}), window.gigya[t].plugins || (window.gigya[t].plugins = {}), window.gigya[t].plugins[i] || (window.gigya[t].plugins[i] = {
                instances: []
            });
            var r = window.gigya[t].plugins[i];
            if (r[n] || (r[n] = function(n) {
                    var o = "gigya." + t + ".plugins." + i + ".instances[" + r.instances.length + "]",
                        a = new e(n, o);
                    r.instances.push(a)
                }), e.StaticApi)
                for (var a in e.StaticApi) {
                    var s = e.StaticApi[a],
                        c = e[s];
                    o.createAlias("gigya." + t + ".plugins." + i + "." + a, c)
                }
        }
    }, function(e, t, i) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i(50),
            o = i(19),
            r = i(111),
            a = i(30),
            s = i(4),
            c = function() {
                function e(t, i, o) {
                    for (var r in void 0 === o && (o = !0), this.params = t, this.explicitParams = i, this._logger = window.gigya.logger, this._eventDispatcher = function(e, t) {
                            return n.dispatchForWidget(e, t)
                        }, this._errorDispatcher = window.gigya.events, this._globalEventsManager = window.gigya.events.global, this._isDisposed = !1, this._eventWrappers = {}, this._globalEventHandlers = {}, this._id = ++e.instanceCounter, this.params = t ? s.clone(t) : {}, this.explicitParams = i ? s.clone(i) : {}, o && this.validateParams(), t) e[r] && (e[r] = t[r])
                }
                return e.prototype.onErrorEvent = function() {
                    return this.getEvent("onError")
                }, e.prototype.onDisposedEvent = function() {
                    return this.getEvent("onDisposed")
                }, e.prototype.getType = function() {
                    return this.constructor.name || this.getFunctionName(this.constructor)
                }, e.prototype.getFunctionName = function(e) {
                    var t = e.toString();
                    return t = (t = t.substr("function ".length)).substr(0, t.indexOf("("))
                }, e.prototype.getConfig = function() {
                    return this.error(e.NOT_IMPLEMENTED_ERROR, 400096), {}
                }, e.prototype.toString = function() {
                    return this.getType() + " " + this.id()
                }, e.prototype.id = function() {
                    return this._id
                }, e.prototype.warn = function(e, t) {
                    var i = this.id() + " " + this.getType() + " - " + e;
                    this._logger.info(i, t)
                }, e.prototype.error = function(e, t, i) {
                    void 0 === t && (t = 300001);
                    var n = {
                        errorMessage: e,
                        errorCode: t,
                        errorDetails: this.id(),
                        info: i
                    };
                    this.warn(e, n), this.dispatchEvent("error", n)
                }, e.prototype.validateParams = function(e) {
                    e || (e = this.getConfig().requiredParams || []), this.getConfig().defaultParams && (this.params = s.merge([this.getConfig().defaultParams, this.params]));
                    var t = [];
                    if (e.length > 0)
                        for (var i in e)
                            if (e.hasOwnProperty(i)) {
                                var n = e[i];
                                this.params[n] || t.push(n)
                            } return !(t.length > 0) || (this.dispatchInvalidParamError(t[0]), !1)
                }, e.prototype.dispatchEvent = function(e, t) {
                    return void 0 === t && (t = {}), t.eventName = e, this._eventDispatcher(t, this.params)
                }, e.prototype.dispatchErrorFromResponse = function(e) {
                    return n.dispatchErrorFromResponse(this.params, e)
                }, e.prototype.dispatchInvalidParamError = function(e) {
                    n.dispatchInvalidParamError(this.params, e)
                }, e.prototype.getEvent = function(e) {
                    return this._eventWrappers[e] || (this.params[e] ? this.params[e] instanceof Array || (this.params[e] = [this.params[e]]) : this.params[e] = [], this._eventWrappers[e] = new r.EventWrapper(this.params[e])), this._eventWrappers[e]
                }, e.prototype.addGlobalEventHandlers = function(e) {
                    for (var t in e) e.hasOwnProperty(t) && this.addGlobalEventHandler(t, e[t])
                }, e.prototype.addGlobalEventHandler = function(e, t, i, n) {
                    void 0 === i && (i = null), void 0 === n && (n = "socialize"), this._globalEventHandlers[e] || (this._globalEventHandlers[e] = []);
                    var o = a.add(e, t, "component", i, n, this.params);
                    this._globalEventHandlers[e].push(o)
                }, e.prototype.removeGlobalEventHandlers = function(e) {
                    for (var t in e) e.hasOwnProperty(t) && this.removeGlobalEventHandler(t, e[t])
                }, e.prototype.removeGlobalEventHandler = function(e, t, i, n) {
                    void 0 === i && (i = null), void 0 === n && (n = "socialize");
                    var r = this._globalEventHandlers[e];
                    if (r) {
                        var s = o.firstIndex(r, (function(e) {
                            return e.handler == t
                        }));
                        if (s > -1) {
                            var c = r[s];
                            a.remove(c.fullEventName, c), r.splice(s, 1)
                        }
                    }
                }, e.prototype.prepareCallback = function(e) {
                    var t = this;
                    return function() {
                        for (var i = [], n = 0; n < arguments.length; n++) i[n] = arguments[n];
                        if (!t._isDisposed) return e.apply(this, i)
                    }
                }, e.prototype.dispose = function() {
                    for (var e in this._globalEventHandlers)
                        if (this._globalEventHandlers.hasOwnProperty(e))
                            for (var t in this._globalEventHandlers[e]) {
                                var i = this._globalEventHandlers[e][t];
                                a.remove(i.fullEventName, i)
                            }
                    this._globalEventHandlers = {}, this._eventWrappers = {}, this.params = {}, this._isDisposed = !0
                }, e.instanceCounter = 0, e.NOT_IMPLEMENTED_ERROR = "Abstract method not implemented", e
            }();
        t.BaseObject = c
    }, function(e, t, i) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i(4),
            o = i(30),
            r = i(35),
            a = i(65),
            s = i(78),
            c = i(79),
            l = i(116),
            u = i(117),
            g = i(2),
            d = i(8),
            p = i(18),
            f = i(62),
            h = i(40),
            m = i(26),
            w = i(25),
            v = i(14),
            y = i(41),
            b = i(5),
            _ = i(12);

        function S() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            var i = n.merge([window.gigya.thisScript.globalConf, e]),
                r = i.namespace ? i.namespace : "socialize";
            for (var a in i) 0 == a.indexOf("on") && o.add(a, i[a], i.listenerType, i.context, r, i);
            "function" == typeof i.callback && i.callback({
                status: "OK",
                statusMessage: "",
                errorCode: 0,
                errorMessage: "",
                operation: "addEventHandlers",
                context: i.context
            })
        }

        function I() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            S(n.merge([e, {
                namespace: "accounts"
            }]))
        }

        function A() {
            var e = n.merge([window.gigya.thisScript.globalConf, arguments]);
            window.gigya.socialize.getUserInfo(e, {
                callback: function(t) {
                    var i = t.user,
                        o = {
                            loggedIn: !!i && r.isExplicitTrue(i.isLoggedIn)
                        };
                    n.extractProperties(t, o, "status|statusMessage|callId|errorCode|errorMessage|errorDetails|context"), e.callback && e.callback(o)
                }
            })
        }

        function P() {
            var e = n.merge([window.gigya.thisScript.globalConf, arguments]),
                t = e.service;
            if (t) {
                t = t.toLowerCase();
                var i = e.callback;
                "fbconnect" != t && "facebook" != t || (a.isLoaded() ? i({
                    context: e.context
                }) : window.gigya.socialize.addEventHandlers({
                    listenerType: "component"
                }, {
                    onFacebookLoaded: i,
                    context: e.context
                })), "googleplus" == t && (s.isLoaded() ? i({
                    context: e.context
                }) : window.gigya.socialize.addEventHandlers({
                    listenerType: "component"
                }, {
                    onGooglePlusLoaded: i,
                    context: e.context
                }))
            }
        }

        function C() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            var i = n.merge([window.gigya.thisScript.globalConf, e]);
            i.APIKey || (i.APIKey = window.gigya.thisScript.APIKey);
            var r = {};
            if (n.extractProperties([i], r, c.postBookmarkSchema), !r.url && r.URL && (r.url = r.URL, delete r.URL), r.sdk = "js_" + window.gigya.build.version, !r.url && r.userAction && !r.userAction.linkBack)
                for (var a = document.getElementsByTagName("meta"), s = 0; s < a.length; s++)
                    if ("og:url" === a[s].getAttribute("property") && a[s].getAttribute("content")) {
                        r.url = a[s].getAttribute("content");
                        break
                    } r.url || !r.userAction || r.userAction.linkBack || (r.url = document.location.href), r.provider = r.provider ? (r.provider + "").toLowerCase() : "", "facebook" === r.provider && (r.providerKey = l.getMetaTag("fb:app_id"));
            var m = window.gigya._.apiAdapter.getGmidTicket();
            m && (r.gmidTicket = m);
            var w = window.gigya._.bookmarkSize[r.provider] || {},
                v = {
                    width: i.popupWidth || w.w,
                    height: i.popupHeight || w.h,
                    top: i.popupPositionY,
                    left: i.popupPositionX,
                    menubar: 0,
                    resizable: 1,
                    scrollbars: 1
                };
            i.enablePopupLocation ? (v.location = 1, v.toolbar = 1) : v.toolbar = 0;
            var y, b = window.gigya._.apiAdapters.web ? window.gigya._.apiAdapters.web.tokenStore : void 0;
            if (b && (r.login_token = window.gigya._.apiAdapters.web.tokenStore.get()), "twitter" === r.provider && g.localInfo.isIOS) {
                var _ = r.userAction || {},
                    S = {
                        url: _.linkBack || r.url,
                        text: _.title || r.title
                    },
                    I = "https://twitter.com/intent/tweet?{0}";
                y = d.format(I, p.serialize(S));
                var A = i.sourceData ? n.clone(i.sourceData) : {};
                A.provider = r.provider, A.url = S.url, f.report("share", i.APIKey, i.cid, i.source, A, {
                    tags: i.tags
                })
            } else {
                var P = p.serialize(r);
                I = "https://" + window.gigya._.getApiDomain("socialize") + "/gs/bookmark.aspx?{0}";
                y = d.format(I, P)
            }
            h.logCall("postBookmark", r), o.dispatch({
                eventName: "beforeRequest",
                methodName: "socialize.postBookmark",
                rawParams: i,
                params: r
            });
            var C = "whatsapp" === r.provider ? "_self" : "gs_bookmark_" + r.provider;
            u.open(y, C, v)
        }

        function x() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            var i = n.merge([window.gigya.thisScript.globalConf, e]),
                r = i.callback;
            window.gigya.socialize.getUserInfo(i, {
                callback: function(e) {
                    var t = {
                        eventName: "login",
                        isInternal: !0
                    };
                    i.provider && (t.provider = i.provider), m.addUserInfoToEvent(e, t, !0), i.context && (t.context = i.context), o.dispatch(t), "function" == typeof r && r(e)
                }
            })
        }

        function k() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            var i, r = {
                    "digg.com": "digg",
                    "stumbleupon.com": "stumbleupon",
                    "technorati.com": "technorati",
                    "t.co": "twitter",
                    "plus.url.google.com": "googlePlus",
                    "facebook.com": "facebook",
                    "linkedin.com": "linkedIn",
                    "pinterest.com": "pinterest",
                    "mixi.jp": "mixi",
                    "b.hatena.ne.jp": "hatena",
                    "line.me": "line"
                },
                a = n.merge([window.gigya.thisScript.globalConf, e]),
                s = {
                    eventName: "linkback",
                    CID: a.cid
                },
                c = {},
                l = {}; - 1 != document.location.href.indexOf("#") && (l = p.deserialize(document.location.href.split("#")[1])), -1 != document.location.href.indexOf("?") && (c = p.deserialize(document.location.href.split("?")[1].split("#")[0])), window.gigya.socialize.updateRefUID(a.APIKey, l, c);
            var u = null != l._gus || null != c._gus;
            if (u && (s.CID = l._gucid || c._gucid, s.shortCode = l._gsc || c._gsc, s.provider = l._gup || c._gup), !i) {
                var g, d = {
                    url: document.location.href,
                    ref: document.referrer
                };
                if (c.fb_ref) {
                    var h = p.deserialize(c.fb_ref, ":");
                    d.uuid = h.uu, d.sn = h.p, g = h.s
                } else if (document.referrer && -1 != document.referrer.indexOf("://")) {
                    var m = document.referrer.split("://")[1].split("/")[0];
                    0 == m.indexOf("www.") && (m = m.split("www.")[1]), r[m] && (s.provider = d.sn = r[m])
                }
                if (!d.sn && (!document.referrer || -1 == document.referrer.indexOf("http://soc.li") && -1 == document.referrer.indexOf("https://shr.gs"))) {
                    var w = document.location.href.split("#guid=");
                    if (w.length > 1) {
                        var v = w[1].split("#")[0].split("&")[0];
                        v != window.gigya._.apiAdapter.getTokenParam(a.APIKey, "UUID") && (d.sn = "AddressBarShares", d.uuid = v, "_" == v && delete d.uuid, document.location.replace("#"), f.trackAddressBarShares(), d.url = document.location.href.split("#")[0])
                    }
                }
                d.uuid && _.default.set("_gigRefUid_" + a.APIKey, d.uuid), d.sn && !u && f.report("linkback", a.APIKey, a.cid, g, null, d), (d.sn || u) && o.dispatch(n.removeUndefined(s)), i = !0
            }
            "function" == typeof a.callback && a.callback({
                status: "OK",
                statusMessage: "",
                operation: "trackReferrals",
                context: a.context,
                errorMessage: "",
                errorCode: 0
            })
        }

        function D(e, t, i) {
            e || (e = window.gigya.thisScript.globalConf.APIKey), t || (t = {}, -1 != document.location.href.indexOf("#") && (t = p.deserialize(document.location.href.split("#")[1]))), i || (i = {}, -1 != document.location.href.indexOf("?") && (i = p.deserialize(document.location.href.split("?")[1].split("#")[0]))), t.guid && "_" != t.guid && _.default.set("_gigRefUid_" + e, t.guid);
            var n = t._giguuid || i._giguuid;
            n && _.default.set("_gigRefUid_" + e, n)
        }

        function L() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            var i = n.merge([window.gigya.thisScript.globalConf, e]);
            if ("function" == typeof i.callback) {
                var o = {
                    status: "OK",
                    statusMessage: "",
                    operation: "hideUI",
                    context: i.context,
                    errorMessage: "",
                    errorCode: 0
                };
                i.callback(o)
            }
        }

        function E() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            var i = {},
                o = n.merge([window.gigya.thisScript.globalConf, e]),
                r = document.getElementById(o.form);
            if (!r) {
                var a = document.getElementsByName(o.form);
                a && a.length > 0 && (o.form = a[0])
            }
            for (var s = 0; s < r.elements.length; s++) {
                var c = r.elements[s];
                if (c.name) {
                    for (var l = c.name.split("."), u = i, g = 0; g < l.length - 1; g++) {
                        var d = l[g];
                        u[d] || (u[d] = {}), u = u[d]
                    }
                    u[l[l.length - 1]] = c.value
                }
            }
            o.data = i, window.gigya.gcs.setUserData(o)
        }

        function O() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            var i = n.merge([window.gigya.thisScript.globalConf, e]);
            w.load(v.getCdnResource("/js/gigya.services.socialize.plugins.shareCounts.min.js"), null, (function() {
                window.gigya.socialize.plugins.shareCounts.getProviderShareCounts(i)
            }), !0)
        }

        function T(e) {
            if (e && e.orgId) {
                var t = window.open("", "_blank");
                e.callback = function(i) {
                    0 !== i.errorCode ? (t.close(), "function" == typeof e.onError && e.onError(i)) : i.targetUrl && i.id_token ? y.redirect(i.targetUrl, [{
                        id_token: i.id_token
                    }], "POST", void 0, t.document) : (t.close(), window.gigya.logger.error("accounts.b2b.delegatedAdminLogin - missing required params", {
                        targetURL: i.targetUrl,
                        id_token: i.id_token
                    }))
                }, window.gigya.accounts.b2b.delegatedAdminLogin(e)
            } else window.gigya.logger.warn("gigya.accounts.b2b.openDelegatedAdminLogin - missing orgId parameter.")
        }
        t.bookmarkSize = {
            facebook: {
                w: 640,
                h: 370
            },
            twitter: {
                w: 880,
                h: 585
            },
            messenger: {
                w: 710,
                h: 905
            },
            linkedin: {
                w: 560,
                h: 500
            },
            yahoobookmarks: {
                w: 840,
                h: 975
            },
            digg: {
                w: 1010,
                h: 1045
            },
            googlebookmarks: {
                w: 710,
                h: 905
            },
            mixi: {
                w: 640,
                h: 470
            },
            googleplus: {
                w: 496,
                h: 420
            }
        }, t.socializeAddEventHandlers = S, t.accountsAddEventHandlers = I, t.isLoggedIn = A, t.waitForService = P, t.postBookmark = C, t.refreshUI = x, t.trackReferrals = k, t.updateRefUID = D, t.hideUI = L, t.submitUserForm = E, t.getProviderShareCounts = O, t.openDelegateAdminHandler = T, window.gigya.socialize.updateRefUID = D, window.gigya.socialize.hideUI = L, window.gigya.gcs.submitUserForm = E, window.gigya.socialize.getProviderShareCounts = O, window.gigya.socialize.addEventHandlers = S, window.gigya.accounts.addEventHandlers = I, window.gigya.socialize.isLoggedIn = A, window.gigya.socialize.waitForService = P, window.gigya.socialize.postBookmark = C, window.gigya.socialize.refreshUI = x, window.gigya.socialize.trackReferrals = k, b.createAlias("gigya.accounts.b2b.openDelegatedAdminLogin", T), b.createAlias("gigya.accounts.setSSOToken", window.gigya.setSSOToken)
    }, function(e, t, i) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i(0),
            o = i(193),
            r = i(194),
            a = function() {
                function e() {
                    o.RiskAssessmentProviders.ReCaptchaV3 || (o.RiskAssessmentProviders.ReCaptchaV3 = r.GoogleReCaptchaV3Provider)
                }
                return e.prototype.getAssessmentParameters = function(e) {
                    return void 0 === e && (e = {}), n.__awaiter(this, void 0, void 0, (function() {
                        var t, i, r, a, s, c, l, u, g;
                        return n.__generator(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    for (r in t = {}, i = [], o.RiskAssessmentProviders) i.push(r);
                                    a = 0, n.label = 1;
                                case 1:
                                    return a < i.length ? (s = i[a], (c = new o.RiskAssessmentProviders[s](e)).shouldApply() ? (u = (l = Object).assign, g = [t], [4, c.getRequestParams()]) : [3, 3]) : [3, 4];
                                case 2:
                                    u.apply(l, g.concat([n.sent()])), n.label = 3;
                                case 3:
                                    return a++, [3, 1];
                                case 4:
                                    return [2, t]
                            }
                        }))
                    }))
                }, e
            }();
        t.RiskAssessmentHandler = a;
        var s = function() {
            function e(e) {
                this.riskAssessmentHandler = e
            }
            return e.prototype.getAssessmentParameters = function(e) {
                return void 0 === e && (e = {}), n.__awaiter(this, void 0, void 0, (function() {
                    var t, i;
                    return n.__generator(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return t = new gigya.Promise((function(e, t) {
                                    setTimeout((function() {
                                        e({})
                                    }), 1500)
                                })), i = this.riskAssessmentHandler.getAssessmentParameters(e), [4, gigya.Promise.race([t, i])];
                            case 1:
                                return [2, n.sent()]
                        }
                    }))
                }))
            }, e
        }();
        t.RiskAssessmentHandlerTimeoutDecorator = s
    }, function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.RiskAssessmentProviders = {}
    }, function(e, t, i) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i(0),
            o = i(114),
            r = function() {
                function e(e) {
                    void 0 === e && (e = {}), this.params = e
                }
                return e.prototype.loadProvider = function() {
                    return o.default.load({
                        siteKey: this.siteKey,
                        type: e.CAPTCHA_TYPE,
                        lang: window.gigya.thisScript.lang.originalLang
                    })
                }, e.prototype.shouldApply = function() {
                    return this.siteKey && !Boolean(this.params.captchaType || this.params.captchaToken)
                }, e.prototype.getRequestParams = function() {
                    return n.__awaiter(this, void 0, void 0, (function() {
                        var t;
                        return n.__generator(this, (function(i) {
                            switch (i.label) {
                                case 0:
                                    return t = {
                                        captchaType: e.CAPTCHA_TYPE
                                    }, [4, this.getToken()];
                                case 1:
                                    return [2, (t.captchaToken = i.sent(), t)]
                            }
                        }))
                    }))
                }, e.prototype.getToken = function() {
                    return n.__awaiter(this, void 0, void 0, (function() {
                        return n.__generator(this, (function(e) {
                            switch (e.label) {
                                case 0:
                                    return "undefined" != typeof grecaptcha ? [3, 2] : [4, this.loadProvider()];
                                case 1:
                                    e.sent(), e.label = 2;
                                case 2:
                                    return [4, this.getReCaptchaToken()];
                                case 3:
                                    return [2, e.sent()]
                            }
                        }))
                    }))
                }, e.prototype.getReCaptchaToken = function() {
                    return grecaptcha.execute(this.siteKey)
                }, Object.defineProperty(e.prototype, "siteKey", {
                    get: function() {
                        var e;
                        return null === (e = window.gigya.partnerSettings.recaptchaV3) || void 0 === e ? void 0 : e.siteKey
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.CAPTCHA_TYPE = "reCaptchaV3", e
            }();
        t.GoogleReCaptchaV3Provider = r
    }, function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, function(e, t, i) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i(10),
            o = i(4);

        function r() {
            var e = window.gigya.samlConfig && window.gigya.samlConfig.proxyPageURL;
            return e || window.gigya.logger.warn("missing proxy page url"), e
        }
        t.initSSO = function(e) {
            var t = r(),
                i = n.addParamsToURL(t, o.merge([{
                    mode: "initSSO"
                }, e]));
            window.location.href = i
        }, t.continueSSO = function() {
            var e = r(),
                t = n.getParamsFromURL(location.href),
                i = n.addParamsToURL(e, {
                    mode: "afterLogin",
                    samlContext: t.samlContext
                });
            window.location.href = i
        }, t.cancelSSO = function(e) {
            var t = r(),
                i = n.getParamsFromURL(location.href),
                o = n.addParamsToURL(t, {
                    mode: "cancel",
                    samlContext: i.samlContext,
                    cancelCode: null == e ? void 0 : e.cancelCode,
                    statusCode: null == e ? void 0 : e.statusCode
                });
            window.location.href = o
        }
    }, function(e, t, i) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i(0),
            o = i(118),
            r = i(12),
            a = function() {
                function e() {}
                return e.prototype.verifyLogin = function() {
                    return n.__awaiter(this, void 0, void 0, (function() {
                        var e, t;
                        return n.__generator(this, (function(i) {
                            return e = Number(window.gigya.thisScript.globalConf.verifyLoginInterval), isNaN(e) ? [2, !0] : (e <= 0 && (e = 1), t = 3600 * Math.ceil(e) * 1e3, o.now() < this.lastVerification + t ? [2, !0] : (this.lastVerification = o.now(), [2, new gigya.Promise((function(e) {
                                window.gigya.accounts.verifyLogin({
                                    ignoreApiQueue: !0,
                                    callback: function(t) {
                                        e(0 === t.errorCode)
                                    }
                                })
                            }))]))
                        }))
                    }))
                }, Object.defineProperty(e.prototype, "lastVerification", {
                    get: function() {
                        return Number(r.default.get("gig_last_ver_" + window.gigya.thisScript.APIKey))
                    },
                    set: function(e) {
                        r.default.set("gig_last_ver_" + window.gigya.thisScript.APIKey, String(e))
                    },
                    enumerable: !0,
                    configurable: !0
                }), e
            }();
        t.AccountService = a, t.accountService = new a
    }, function(e, t, i) {
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = i(12),
                o = i(19),
                r = i(115),
                a = i(118),
                s = i(199),
                c = i(9),
                l = i(11),
                u = i(5),
                g = i(36),
                d = i(80),
                p = i(41),
                f = i(3),
                h = i(200),
                m = i(18),
                w = i(16),
                v = i(201),
                y = i(4),
                b = i(21),
                _ = i(202),
                S = i(25),
                I = i(81),
                A = i(22),
                P = i(8),
                C = i(203),
                x = i(106),
                k = i(6),
                D = i(10),
                L = i(35),
                E = i(29),
                O = i(117),
                T = i(204),
                U = i(23),
                M = i(5),
                N = i(22),
                R = i(114);
            window.gigya._ || (window.gigya._ = {}), window.gigya.utils || (window.gigya.utils = {}), window.gigya.utils.toggles || (window.gigya.utils.toggles = U.default), window.gigya.utils.array || (window.gigya.utils.array = {}), window.gigya.utils.browser || (window.gigya.utils.browser = {}), window.gigya.utils.cookie || (window.gigya.utils.cookie = n.default), window.gigya.utils.date || (window.gigya.utils.date = {}), window.gigya.utils.delegate || (window.gigya.utils.delegate = {}), window.gigya.utils.DOM || (window.gigya.utils.DOM = {}), window.gigya.utils.functions || (window.gigya.utils.functions = {}), window.gigya.utils.gltexp || (window.gigya.utils.gltexp = {}), window.gigya.utils.HTTP || (window.gigya.utils.HTTP = {}), window.gigya.utils.JSON || (window.gigya.utils.JSON = {}), window.gigya.utils.keyboard || (window.gigya.utils.keyboard = {}), window.gigya.utils.keyValue || (window.gigya.utils.keyValue = {}), window.gigya.utils.localStorage || (window.gigya.utils.localStorage = {}), window.gigya.utils.mouse || (window.gigya.utils.mouse = {}), window.gigya.utils.object || (window.gigya.utils.object = {}), window.gigya.utils.queue || (window.gigya.utils.queue = {}), window.gigya.utils.sanitize || (window.gigya.utils.sanitize = {}), window.gigya.utils.script || (window.gigya.utils.script = {}), window.gigya.utils.sessionCache || (window.gigya.utils.sessionCache = {}), window.gigya.utils.stringUtils || (window.gigya.utils.stringUtils = {}), window.gigya.utils.templates || (window.gigya.utils.templates = {}), window.gigya.utils.URL || (window.gigya.utils.URL = {}), window.gigya.utils.validation || (window.gigya.utils.validation = {}), window.gigya.utils.viewport || (window.gigya.utils.viewport = {}), window.gigya.utils.win || (window.gigya.utils.win = {}), window.gigya.utils.xd || (window.gigya.utils.xd = {}), window.gigya.utils.recaptcha || (window.gigya.utils.recaptcha = R.default), e(window.gigya._, k, l), e(window.gigya.utils.array, o), e(window.gigya.utils.browser, r), e(window.gigya.utils.date, a), e(window.gigya.utils.delegate, s), e(window.gigya.utils.DOM, c), e(window.gigya.utils.functions, u), e(window.gigya.utils, g, A, C), e(window.gigya.utils.gltexp, d), e(window.gigya.utils.HTTP, p), e(window.gigya.utils.JSON, f), e(window.gigya.utils.keyboard, h), e(window.gigya.utils.keyValue, m), e(window.gigya.utils.localStorage, w), e(window.gigya.utils.mouse, v), e(window.gigya.utils.object, y), e(window.gigya.utils.queue, b), e(window.gigya.utils.sanitize, _), e(window.gigya.utils.script, S), e(window.gigya.utils.sessionCache, I), e(window.gigya.utils.stringUtils, P), e(window.gigya.utils.templates, x), e(window.gigya.utils.URL, D), e(window.gigya.utils.validation, L), e(window.gigya.utils.viewport, E), e(window.gigya.utils.win, O), e(window.gigya.utils.xd, T), M.createAlias("gigya.getUrlParam", (function(e) {
                return N.getReqParamValue(location.search, e)
            }))
        }).call(this, i(0).__assign)
    }, function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.create = function(e, t) {
            return function() {
                for (var i = [], n = 0; n < arguments.length; n++) i[n] = arguments[n];
                return t.apply(e, i)
            }
        }
    }, function(e, t, i) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i(9);
        t.onHotKeyClicked = function(e, t) {
            var i = e.elementContext ? e.elementContext : document.body;
            n.addEventListener(i, "keyup", (function(i) {
                i.which == e.key && t()
            }))
        }
    }, function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.getPosition = function() {
            var e = 0,
                t = 0;
            if (document.body) {
                var i = null;
                return i || (i = {
                    clientX: 0,
                    clientY: 0
                }), i.pageX || i.pageY ? (e = i.pageX, t = i.pageY) : (i.clientX || i.clientY) && (e = i.clientX + document.body.scrollLeft + document.documentElement.scrollLeft, t = i.clientY + document.body.scrollTop + document.documentElement.scrollTop), {
                    x: e,
                    y: t
                }
            }
        }
    }, function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.sanitizeHTML = function(e) {
            return null == e || void 0 === e ? e : e.replace(/&/g, "&#38;").replace(/</g, "&#60;").replace(/>/g, "&#62;").replace(/\"/g, "&#34;").replace(/'/g, "&#39;").replace(/&#38;#173;/g, "&#173;")
        }, t.sanitizeAttribute = function(e) {
            return null == e || void 0 === e ? e : e.replace(/&/g, "&#38;").replace(/</g, "&#60;").replace(/>/g, "&#62;").replace(/\"/g, "&#34;").replace(/\=/g, "&#61;")
        }
    }, function(e, t, i) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i(9),
            o = function() {
                function e() {
                    this.bindings = []
                }
                return e.getInstance = function() {
                    return e.self || (e.self = new e), e.self
                }, e.prototype.bindTabLooping = function(e, t) {
                    if (!this.getListenerByContainer(e)) {
                        var i = this.createListener(e, t);
                        window.addEventListener("keydown", i, !0)
                    }
                }, e.prototype.unbindTabLooping = function(e) {
                    var t = this.getListenerByContainer(e);
                    t && window.removeEventListener("keydown", t, !0)
                }, e.prototype.getSortedTabbableElements = function(t, i) {
                    for (var n = this, o = 0, r = t.querySelectorAll(e.selector), a = [], s = 0; s < r.length; ++s) {
                        var c = r[s];
                        this.isTabbable(c, i) && (c.setAttribute(e.naturalTabOrder, String(o)), o++, a.push(c))
                    }
                    return a.sort((function(e, t) {
                        return n.sort(e, t)
                    })), a
                }, e.prototype.createListener = function(e, t) {
                    var i = this,
                        o = function(o) {
                            var r = document.activeElement;
                            if (9 === o.keyCode && e.contains(r)) {
                                var a = o.shiftKey ? i.getPreviousTabbableElement(e, r, t) : i.getNextTabbableElement(e, r, t);
                                a && (a.focus(), n.cancelEvent(o))
                            }
                        };
                    return this.bindings.push({
                        container: e,
                        listener: o
                    }), o
                }, e.prototype.isTabbable = function(e, t) {
                    var i = e.matches || e.msMatchesSelector;
                    return -1 !== e.tabIndex && (e.offsetWidth > 0 || e.offsetHeight > 0) && (!t || i.call(e, t))
                }, e.prototype.getNextTabbableElement = function(e, t, i) {
                    var n = this.getSortedTabbableElements(e, i),
                        o = n.indexOf(t);
                    return -1 === o ? void 0 : o !== n.length - 1 ? n[o + 1] : n[0]
                }, e.prototype.getPreviousTabbableElement = function(e, t, i) {
                    var n = this.getSortedTabbableElements(e, i),
                        o = n.indexOf(t);
                    return -1 === o ? void 0 : 0 !== o ? n[o - 1] : n[n.length - 1]
                }, e.prototype.sort = function(t, i) {
                    var n = this.getTabIndex(t) - this.getTabIndex(i);
                    return 0 !== n ? n : Number(t.getAttribute(e.naturalTabOrder)) - Number(i.getAttribute(e.naturalTabOrder))
                }, e.prototype.getTabIndex = function(e) {
                    return 0 === e.tabIndex ? 99999999 : e.tabIndex
                }, e.prototype.getListenerByContainer = function(e) {
                    for (var t = 0, i = this.bindings; t < i.length; t++) {
                        var n = i[t];
                        if (n.container === e) return n.listener
                    }
                }, e.naturalTabOrder = "data-natural-tab-order", e.selector = ["a:not([disabled])", "button:not([disabled])", "input:not([disabled])", "[tabindex]:not([disabled])"].join(","), e
            }();
        t.Tabbable = o, t.tabbable = o.getInstance()
    }, function(e, t, i) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i(18),
            o = i(4),
            r = i(9),
            a = i(26),
            s = {};
        t._flashListenerID = "flid" + (new Date).getTime();
        var c = !1;

        function l(e) {
            delete s[e]
        }
        t.addMessageListener = function(e, t, i, u, g) {
            if (s[e] = {
                    callback: u,
                    context: t,
                    t: (new Date).getTime()
                }, g || (g = window.gigya.localInfo.messagingMethod, window.gigya.localInfo.isIE11 && i && window.indexedDB && (g = a.MessagingMethod.LocalStorageListener), window.gigya.localInfo.isAndroid && t && t.provider && "line" == t.provider.toLowerCase() && (g = a.MessagingMethod.LocalStorageListener)), (g == a.MessagingMethod.LocalStorageListener || g == a.MessagingMethod.PostMessage) && (g == a.MessagingMethod.LocalStorageListener && i && function(e) {
                    var t = document.createElement("iframe");
                    t.style.width = "30px", t.style.height = "10px", t.style.position = "absolute", t.style.top = "-1000px", t.style.left = "-1000px", t.id = e, t.src = "https://cdns.gigya.com/gs/LocalStorageListener.htm?mode=receive&id=" + encodeURIComponent(e), r.appendToBody(t)
                }(e), !c)) {
                var d = function(e) {
                    if (e && e.data && "string" == typeof e.data) {
                        var t = e.data.split("=")[0];
                        s[t] && (i = e, r = function() {
                            var e = i.data.split("="),
                                t = s[e[0]];
                            if (null != t) {
                                if ("function" == typeof t.callback) {
                                    var o = unescape(e[1]),
                                        r = n.deserialize(o, null, null, !0),
                                        a = t.context;
                                    t.callback(r, a)
                                }
                                l(e[0]);
                                var c = document.getElementById(e[0]);
                                c && c.parentElement && c.parentElement.removeChild(c)
                            }
                        }, (i = o.clone(i)) && i.data && i.data.split && (window.gigya.localInfo.iosVersion >= 6 ? r() : window.setTimeout(r, 100)))
                    }
                    var i, r
                };
                window.addEventListener ? window.addEventListener("message", d, !1) : window.attachEvent && window.attachEvent("onmessage", d), c = !0
            }
        }, t.removeMessageListener = l
    }, function(e, t, i) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i(3),
            o = i(4),
            r = {},
            a = {
                User: "personwithuid+isLoggedIn|false,isConnected|false,isSiteUser|false,identities|{},providers|[],timestamp,UIDSig,UIDSignature,signatureTimestamp,loginProvider,loginProviderUID,capabilities|{}",
                Friend: "personwithuid+timestamp,friendshipSig,friendshipSignature,signatureTimestamp,timestamp,isSiteUser|false,identities|{}",
                Identity: "person+isExpiredSession|false,allowsLogin|false,providerUID,provider,isLoginIdentity|false,missingPermissions",
                Contact: "provider,firstName,lastName,nickname,email,photoURL",
                person: "nickname,photoURL,thumbnailURL,birthDay|0,birthMonth|0,birthYear|0,gender,email,proxiedEmail,country,state,city,zip,firstName,lastName,profileURL,age|0",
                personwithuid: "person+UID,isSiteUID|false",
                UserAction: "actorUID,actorNickname,actionName,date|new Date(),targets|[],images|[],actionData1,actionData2,iconURL,title,linkBack,userMessage,description,actionLinks|[],mediaItems|[],subtitle"
            },
            s = function(e) {
                var t = {},
                    i = a[e]; - 1 != i.indexOf("+") && (t = s(i.split("+")[0]), i = i.split("+")[1]);
                for (var o = i.split(","), r = 0; r < o.length; r++) {
                    var c = "",
                        l = o[r].split("|");
                    if (l.length > 1) try {
                        c = n.deserialize(l[1], "")
                    } catch (e) {}
                    t[l[0]] = c || ""
                }
                return t
            },
            c = function(e) {
                return function(t) {
                    var i = r[e];
                    for (var n in i) this[n] = o.clone(i[n]);
                    if ("object" == typeof t)
                        for (var n in t) "function" != typeof t[n] && (this[n] = o.clone(t[n]))
                }
            };
        for (var l in a) r[l] = s(l), window.gigya.socialize[l] = c(l);
        window.gigya.socialize.Collection = function(e, t) {
            this.arr = e, this._key = t || ""
        }, window.gigya.socialize.Collection.prototype = {
            asArray: function() {
                return this.arr
            },
            each: function(e) {
                for (var t = 0, i = this.arr[t]; i;) e(i, t), t++, i = this.arr[t]
            },
            getById: function(e) {
                return void 0 === this._hash && this._buildHash(), (this._hash ? this._hash : this.arr)[e]
            },
            getSize: function() {
                return this.arr.length
            },
            _buildHash: function() {
                var e = this._hash = {},
                    t = this._key;
                this.each((function(i, n) {
                    e["function" == typeof i[t] ? i[t]() : i[t]] = i
                }))
            }
        }, window.gigya.socialize.UserAction.prototype = {
            clone: function() {
                return new window.gigya.socialize.UserAction(window.gigya.utils.object.clone(this, !0, !0))
            },
            getTemplate: function() {
                return this.titleTemplate
            },
            setTemplate: function(e) {
                this.titleTemplate = e
            },
            getActor: function(e) {
                return {
                    UID: this.actorUID,
                    nickname: this.actorNickname
                }
            },
            setActionName: function(e) {
                return this.actionName = e, this
            },
            getActionName: function(e) {
                return this.actionName
            },
            getTemplateFields: function() {
                var e = [];
                for (var t in this.templateFields) e.push(this.templateFields[t]);
                return new window.gigya.socialize.Collection(e, "fieldName")
            },
            setTemplateField: function(e, t, i) {
                return this.templateFields[e] = {
                    fieldName: e,
                    text: t,
                    href: i
                }, this
            },
            getTemplateField: function(e) {
                return this.templateFields[e] ? this.templateFields[e] : null
            },
            addTarget: function(e) {
                return "object" == typeof e ? (this.targets.push({
                    UID: e.UID,
                    nickname: e.nickname ? e.nickname : ""
                }), this) : "string" == typeof e ? (this.targets.push({
                    UID: e,
                    nickname: ""
                }), this) : void 0
            },
            addActionLink: function(e, t) {
                return this.actionLinks.push({
                    text: e,
                    href: t || ""
                }), this
            },
            addMediaItem: function(e) {
                return this.mediaItems.push(e), this
            },
            setTitle: function(e) {
                return e && (this.title = e), this
            },
            setLinkBack: function(e) {
                return e && e.toString && (e = e.toString()), e && (this.linkBack = e), this
            },
            setUserMessage: function(e) {
                return this.userMessage = e || "", this
            },
            setDescription: function(e) {
                return this.description = e || "", this
            },
            addImage: function(e, t) {
                this.addMediaItem({
                    type: "image",
                    src: e,
                    href: t
                })
            },
            getImages: function() {
                return new window.gigya.socialize.Collection(this.images, "")
            },
            getTargets: function() {
                return new window.gigya.socialize.Collection(this.targets, "UID")
            },
            setIconURL: function(e) {
                return this.iconURL = e, this
            },
            getIconURL: function() {
                return this.iconURL
            },
            getDate: function() {
                return this.date
            },
            setActionData1: function(e) {
                return this.actionData1 = e, this
            },
            getActionData1: function(e) {
                return this.actionData1
            },
            setActionData2: function(e) {
                return this.actionData2 = e, this
            },
            getActionData2: function(e) {
                return this.actionData2
            },
            setSubtitle: function(e) {
                return this.subtitle = e, this
            },
            getSubtitle: function() {
                return this.subtitle
            }
        }
    }]);
}
