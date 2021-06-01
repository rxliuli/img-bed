var e = { exports: {} },
  t = {},
  n = Object.getOwnPropertySymbols,
  r = Object.prototype.hasOwnProperty,
  l = Object.prototype.propertyIsEnumerable
function a(e) {
  if (null == e)
    throw new TypeError('Object.assign cannot be called with null or undefined')
  return Object(e)
}
var o = (function () {
    try {
      if (!Object.assign) return !1
      var e = new String('abc')
      if (((e[5] = 'de'), '5' === Object.getOwnPropertyNames(e)[0])) return !1
      for (var t = {}, n = 0; n < 10; n++) t['_' + String.fromCharCode(n)] = n
      if (
        '0123456789' !==
        Object.getOwnPropertyNames(t)
          .map(function (e) {
            return t[e]
          })
          .join('')
      )
        return !1
      var r = {}
      return (
        'abcdefghijklmnopqrst'.split('').forEach(function (e) {
          r[e] = e
        }),
        'abcdefghijklmnopqrst' === Object.keys(Object.assign({}, r)).join('')
      )
    } catch (l) {
      return !1
    }
  })()
    ? Object.assign
    : function (e, t) {
        for (var o, i, u = a(e), s = 1; s < arguments.length; s++) {
          for (var c in (o = Object(arguments[s])))
            r.call(o, c) && (u[c] = o[c])
          if (n) {
            i = n(o)
            for (var f = 0; f < i.length; f++)
              l.call(o, i[f]) && (u[i[f]] = o[i[f]])
          }
        }
        return u
      },
  i = o,
  u = 60103,
  s = 60106
/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ ;(t.Fragment = 60107), (t.StrictMode = 60108), (t.Profiler = 60114)
var c = 60109,
  f = 60110,
  d = 60112
t.Suspense = 60113
var p = 60115,
  h = 60116
if ('function' == typeof Symbol && Symbol.for) {
  var m = Symbol.for
  ;(u = m('react.element')),
    (s = m('react.portal')),
    (t.Fragment = m('react.fragment')),
    (t.StrictMode = m('react.strict_mode')),
    (t.Profiler = m('react.profiler')),
    (c = m('react.provider')),
    (f = m('react.context')),
    (d = m('react.forward_ref')),
    (t.Suspense = m('react.suspense')),
    (p = m('react.memo')),
    (h = m('react.lazy'))
}
var v = 'function' == typeof Symbol && Symbol.iterator
function g(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n])
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  )
}
var y = {
    isMounted: function () {
      return !1
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  b = {}
function w(e, t, n) {
  ;(this.props = e),
    (this.context = t),
    (this.refs = b),
    (this.updater = n || y)
}
function k() {}
function E(e, t, n) {
  ;(this.props = e),
    (this.context = t),
    (this.refs = b),
    (this.updater = n || y)
}
;(w.prototype.isReactComponent = {}),
  (w.prototype.setState = function (e, t) {
    if ('object' != typeof e && 'function' != typeof e && null != e)
      throw Error(g(85))
    this.updater.enqueueSetState(this, e, t, 'setState')
  }),
  (w.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, 'forceUpdate')
  }),
  (k.prototype = w.prototype)
var S = (E.prototype = new k())
;(S.constructor = E), i(S, w.prototype), (S.isPureReactComponent = !0)
var _ = { current: null },
  x = Object.prototype.hasOwnProperty,
  C = { key: !0, ref: !0, __self: !0, __source: !0 }
function P(e, t, n) {
  var r,
    l = {},
    a = null,
    o = null
  if (null != t)
    for (r in (void 0 !== t.ref && (o = t.ref),
    void 0 !== t.key && (a = '' + t.key),
    t))
      x.call(t, r) && !C.hasOwnProperty(r) && (l[r] = t[r])
  var i = arguments.length - 2
  if (1 === i) l.children = n
  else if (1 < i) {
    for (var s = Array(i), c = 0; c < i; c++) s[c] = arguments[c + 2]
    l.children = s
  }
  if (e && e.defaultProps)
    for (r in (i = e.defaultProps)) void 0 === l[r] && (l[r] = i[r])
  return { $$typeof: u, type: e, key: a, ref: o, props: l, _owner: _.current }
}
function O(e) {
  return 'object' == typeof e && null !== e && e.$$typeof === u
}
var T = /\/+/g
function N(e, t) {
  return 'object' == typeof e && null !== e && null != e.key
    ? (function (e) {
        var t = { '=': '=0', ':': '=2' }
        return (
          '$' +
          e.replace(/[=:]/g, function (e) {
            return t[e]
          })
        )
      })('' + e.key)
    : t.toString(36)
}
function z(e, t, n, r, l) {
  var a = typeof e
  ;('undefined' !== a && 'boolean' !== a) || (e = null)
  var o = !1
  if (null === e) o = !0
  else
    switch (a) {
      case 'string':
      case 'number':
        o = !0
        break
      case 'object':
        switch (e.$$typeof) {
          case u:
          case s:
            o = !0
        }
    }
  if (o)
    return (
      (l = l((o = e))),
      (e = '' === r ? '.' + N(o, 0) : r),
      Array.isArray(l)
        ? ((n = ''),
          null != e && (n = e.replace(T, '$&/') + '/'),
          z(l, t, n, '', function (e) {
            return e
          }))
        : null != l &&
          (O(l) &&
            (l = (function (e, t) {
              return {
                $$typeof: u,
                type: e.type,
                key: t,
                ref: e.ref,
                props: e.props,
                _owner: e._owner,
              }
            })(
              l,
              n +
                (!l.key || (o && o.key === l.key)
                  ? ''
                  : ('' + l.key).replace(T, '$&/') + '/') +
                e,
            )),
          t.push(l)),
      1
    )
  if (((o = 0), (r = '' === r ? '.' : r + ':'), Array.isArray(e)))
    for (var i = 0; i < e.length; i++) {
      var c = r + N((a = e[i]), i)
      o += z(a, t, n, c, l)
    }
  else if (
    'function' ==
    typeof (c = (function (e) {
      return null === e || 'object' != typeof e
        ? null
        : 'function' == typeof (e = (v && e[v]) || e['@@iterator'])
        ? e
        : null
    })(e))
  )
    for (e = c.call(e), i = 0; !(a = e.next()).done; )
      o += z((a = a.value), t, n, (c = r + N(a, i++)), l)
  else if ('object' === a)
    throw (
      ((t = '' + e),
      Error(
        g(
          31,
          '[object Object]' === t
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t,
        ),
      ))
    )
  return o
}
function L(e, t, n) {
  if (null == e) return e
  var r = [],
    l = 0
  return (
    z(e, r, '', '', function (e) {
      return t.call(n, e, l++)
    }),
    r
  )
}
function R(e) {
  if (-1 === e._status) {
    var t = e._result
    ;(t = t()),
      (e._status = 0),
      (e._result = t),
      t.then(
        function (t) {
          0 === e._status && ((t = t.default), (e._status = 1), (e._result = t))
        },
        function (t) {
          0 === e._status && ((e._status = 2), (e._result = t))
        },
      )
  }
  if (1 === e._status) return e._result
  throw e._result
}
var M = { current: null }
function D() {
  var e = M.current
  if (null === e) throw Error(g(321))
  return e
}
var F = {
  ReactCurrentDispatcher: M,
  ReactCurrentBatchConfig: { transition: 0 },
  ReactCurrentOwner: _,
  IsSomeRendererActing: { current: !1 },
  assign: i,
}
;(t.Children = {
  map: L,
  forEach: function (e, t, n) {
    L(
      e,
      function () {
        t.apply(this, arguments)
      },
      n,
    )
  },
  count: function (e) {
    var t = 0
    return (
      L(e, function () {
        t++
      }),
      t
    )
  },
  toArray: function (e) {
    return (
      L(e, function (e) {
        return e
      }) || []
    )
  },
  only: function (e) {
    if (!O(e)) throw Error(g(143))
    return e
  },
}),
  (t.Component = w),
  (t.PureComponent = E),
  (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = F),
  (t.cloneElement = function (e, t, n) {
    if (null == e) throw Error(g(267, e))
    var r = i({}, e.props),
      l = e.key,
      a = e.ref,
      o = e._owner
    if (null != t) {
      if (
        (void 0 !== t.ref && ((a = t.ref), (o = _.current)),
        void 0 !== t.key && (l = '' + t.key),
        e.type && e.type.defaultProps)
      )
        var s = e.type.defaultProps
      for (c in t)
        x.call(t, c) &&
          !C.hasOwnProperty(c) &&
          (r[c] = void 0 === t[c] && void 0 !== s ? s[c] : t[c])
    }
    var c = arguments.length - 2
    if (1 === c) r.children = n
    else if (1 < c) {
      s = Array(c)
      for (var f = 0; f < c; f++) s[f] = arguments[f + 2]
      r.children = s
    }
    return { $$typeof: u, type: e.type, key: l, ref: a, props: r, _owner: o }
  }),
  (t.createContext = function (e, t) {
    return (
      void 0 === t && (t = null),
      ((e = {
        $$typeof: f,
        _calculateChangedBits: t,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
      }).Provider = { $$typeof: c, _context: e }),
      (e.Consumer = e)
    )
  }),
  (t.createElement = P),
  (t.createFactory = function (e) {
    var t = P.bind(null, e)
    return (t.type = e), t
  }),
  (t.createRef = function () {
    return { current: null }
  }),
  (t.forwardRef = function (e) {
    return { $$typeof: d, render: e }
  }),
  (t.isValidElement = O),
  (t.lazy = function (e) {
    return { $$typeof: h, _payload: { _status: -1, _result: e }, _init: R }
  }),
  (t.memo = function (e, t) {
    return { $$typeof: p, type: e, compare: void 0 === t ? null : t }
  }),
  (t.useCallback = function (e, t) {
    return D().useCallback(e, t)
  }),
  (t.useContext = function (e, t) {
    return D().useContext(e, t)
  }),
  (t.useDebugValue = function () {}),
  (t.useEffect = function (e, t) {
    return D().useEffect(e, t)
  }),
  (t.useImperativeHandle = function (e, t, n) {
    return D().useImperativeHandle(e, t, n)
  }),
  (t.useLayoutEffect = function (e, t) {
    return D().useLayoutEffect(e, t)
  }),
  (t.useMemo = function (e, t) {
    return D().useMemo(e, t)
  }),
  (t.useReducer = function (e, t, n) {
    return D().useReducer(e, t, n)
  }),
  (t.useRef = function (e) {
    return D().useRef(e)
  }),
  (t.useState = function (e) {
    return D().useState(e)
  }),
  (t.version = '17.0.2'),
  (e.exports = t)
var I = e.exports,
  U = { exports: {} },
  A = {},
  j = { exports: {} },
  V = {}
/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
!(function (e) {
  var t, n, r, l
  if ('object' == typeof performance && 'function' == typeof performance.now) {
    var a = performance
    e.unstable_now = function () {
      return a.now()
    }
  } else {
    var o = Date,
      i = o.now()
    e.unstable_now = function () {
      return o.now() - i
    }
  }
  if ('undefined' == typeof window || 'function' != typeof MessageChannel) {
    var u = null,
      s = null,
      c = function () {
        if (null !== u)
          try {
            var t = e.unstable_now()
            u(!0, t), (u = null)
          } catch (n) {
            throw (setTimeout(c, 0), n)
          }
      }
    ;(t = function (e) {
      null !== u ? setTimeout(t, 0, e) : ((u = e), setTimeout(c, 0))
    }),
      (n = function (e, t) {
        s = setTimeout(e, t)
      }),
      (r = function () {
        clearTimeout(s)
      }),
      (e.unstable_shouldYield = function () {
        return !1
      }),
      (l = e.unstable_forceFrameRate = function () {})
  } else {
    var f = window.setTimeout,
      d = window.clearTimeout
    if ('undefined' != typeof console) {
      var p = window.cancelAnimationFrame
      'function' != typeof window.requestAnimationFrame &&
        console.error(
          "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills",
        ),
        'function' != typeof p &&
          console.error(
            "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills",
          )
    }
    var h = !1,
      m = null,
      v = -1,
      g = 5,
      y = 0
    ;(e.unstable_shouldYield = function () {
      return e.unstable_now() >= y
    }),
      (l = function () {}),
      (e.unstable_forceFrameRate = function (e) {
        0 > e || 125 < e
          ? console.error(
              'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
            )
          : (g = 0 < e ? Math.floor(1e3 / e) : 5)
      })
    var b = new MessageChannel(),
      w = b.port2
    ;(b.port1.onmessage = function () {
      if (null !== m) {
        var t = e.unstable_now()
        y = t + g
        try {
          m(!0, t) ? w.postMessage(null) : ((h = !1), (m = null))
        } catch (n) {
          throw (w.postMessage(null), n)
        }
      } else h = !1
    }),
      (t = function (e) {
        ;(m = e), h || ((h = !0), w.postMessage(null))
      }),
      (n = function (t, n) {
        v = f(function () {
          t(e.unstable_now())
        }, n)
      }),
      (r = function () {
        d(v), (v = -1)
      })
  }
  function k(e, t) {
    var n = e.length
    e.push(t)
    e: for (;;) {
      var r = (n - 1) >>> 1,
        l = e[r]
      if (!(void 0 !== l && 0 < _(l, t))) break e
      ;(e[r] = t), (e[n] = l), (n = r)
    }
  }
  function E(e) {
    return void 0 === (e = e[0]) ? null : e
  }
  function S(e) {
    var t = e[0]
    if (void 0 !== t) {
      var n = e.pop()
      if (n !== t) {
        e[0] = n
        e: for (var r = 0, l = e.length; r < l; ) {
          var a = 2 * (r + 1) - 1,
            o = e[a],
            i = a + 1,
            u = e[i]
          if (void 0 !== o && 0 > _(o, n))
            void 0 !== u && 0 > _(u, o)
              ? ((e[r] = u), (e[i] = n), (r = i))
              : ((e[r] = o), (e[a] = n), (r = a))
          else {
            if (!(void 0 !== u && 0 > _(u, n))) break e
            ;(e[r] = u), (e[i] = n), (r = i)
          }
        }
      }
      return t
    }
    return null
  }
  function _(e, t) {
    var n = e.sortIndex - t.sortIndex
    return 0 !== n ? n : e.id - t.id
  }
  var x = [],
    C = [],
    P = 1,
    O = null,
    T = 3,
    N = !1,
    z = !1,
    L = !1
  function R(e) {
    for (var t = E(C); null !== t; ) {
      if (null === t.callback) S(C)
      else {
        if (!(t.startTime <= e)) break
        S(C), (t.sortIndex = t.expirationTime), k(x, t)
      }
      t = E(C)
    }
  }
  function M(e) {
    if (((L = !1), R(e), !z))
      if (null !== E(x)) (z = !0), t(D)
      else {
        var r = E(C)
        null !== r && n(M, r.startTime - e)
      }
  }
  function D(t, l) {
    ;(z = !1), L && ((L = !1), r()), (N = !0)
    var a = T
    try {
      for (
        R(l), O = E(x);
        null !== O &&
        (!(O.expirationTime > l) || (t && !e.unstable_shouldYield()));

      ) {
        var o = O.callback
        if ('function' == typeof o) {
          ;(O.callback = null), (T = O.priorityLevel)
          var i = o(O.expirationTime <= l)
          ;(l = e.unstable_now()),
            'function' == typeof i ? (O.callback = i) : O === E(x) && S(x),
            R(l)
        } else S(x)
        O = E(x)
      }
      if (null !== O) var u = !0
      else {
        var s = E(C)
        null !== s && n(M, s.startTime - l), (u = !1)
      }
      return u
    } finally {
      ;(O = null), (T = a), (N = !1)
    }
  }
  var F = l
  ;(e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (e) {
      e.callback = null
    }),
    (e.unstable_continueExecution = function () {
      z || N || ((z = !0), t(D))
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return T
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return E(x)
    }),
    (e.unstable_next = function (e) {
      switch (T) {
        case 1:
        case 2:
        case 3:
          var t = 3
          break
        default:
          t = T
      }
      var n = T
      T = t
      try {
        return e()
      } finally {
        T = n
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = F),
    (e.unstable_runWithPriority = function (e, t) {
      switch (e) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break
        default:
          e = 3
      }
      var n = T
      T = e
      try {
        return t()
      } finally {
        T = n
      }
    }),
    (e.unstable_scheduleCallback = function (l, a, o) {
      var i = e.unstable_now()
      switch (
        ('object' == typeof o && null !== o
          ? (o = 'number' == typeof (o = o.delay) && 0 < o ? i + o : i)
          : (o = i),
        l)
      ) {
        case 1:
          var u = -1
          break
        case 2:
          u = 250
          break
        case 5:
          u = 1073741823
          break
        case 4:
          u = 1e4
          break
        default:
          u = 5e3
      }
      return (
        (l = {
          id: P++,
          callback: a,
          priorityLevel: l,
          startTime: o,
          expirationTime: (u = o + u),
          sortIndex: -1,
        }),
        o > i
          ? ((l.sortIndex = o),
            k(C, l),
            null === E(x) && l === E(C) && (L ? r() : (L = !0), n(M, o - i)))
          : ((l.sortIndex = u), k(x, l), z || N || ((z = !0), t(D))),
        l
      )
    }),
    (e.unstable_wrapCallback = function (e) {
      var t = T
      return function () {
        var n = T
        T = t
        try {
          return e.apply(this, arguments)
        } finally {
          T = n
        }
      }
    })
})(V),
  (j.exports = V)
/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var W = e.exports,
  H = o,
  B = j.exports
function $(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n])
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  )
}
if (!W) throw Error($(227))
var Q = new Set(),
  q = {}
function K(e, t) {
  Y(e, t), Y(e + 'Capture', t)
}
function Y(e, t) {
  for (q[e] = t, e = 0; e < t.length; e++) Q.add(t[e])
}
var X = !(
    'undefined' == typeof window ||
    void 0 === window.document ||
    void 0 === window.document.createElement
  ),
  G =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Z = Object.prototype.hasOwnProperty,
  J = {},
  ee = {}
function te(e, t, n, r, l, a, o) {
  ;(this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = a),
    (this.removeEmptyString = o)
}
var ne = {}
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    ne[e] = new te(e, 0, !1, e, null, !1, !1)
  }),
  [
    ['acceptCharset', 'accept-charset'],
    ['className', 'class'],
    ['htmlFor', 'for'],
    ['httpEquiv', 'http-equiv'],
  ].forEach(function (e) {
    var t = e[0]
    ne[t] = new te(t, 1, !1, e[1], null, !1, !1)
  }),
  ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
    ne[e] = new te(e, 2, !1, e.toLowerCase(), null, !1, !1)
  }),
  [
    'autoReverse',
    'externalResourcesRequired',
    'focusable',
    'preserveAlpha',
  ].forEach(function (e) {
    ne[e] = new te(e, 2, !1, e, null, !1, !1)
  }),
  'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
    .split(' ')
    .forEach(function (e) {
      ne[e] = new te(e, 3, !1, e.toLowerCase(), null, !1, !1)
    }),
  ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
    ne[e] = new te(e, 3, !0, e, null, !1, !1)
  }),
  ['capture', 'download'].forEach(function (e) {
    ne[e] = new te(e, 4, !1, e, null, !1, !1)
  }),
  ['cols', 'rows', 'size', 'span'].forEach(function (e) {
    ne[e] = new te(e, 6, !1, e, null, !1, !1)
  }),
  ['rowSpan', 'start'].forEach(function (e) {
    ne[e] = new te(e, 5, !1, e.toLowerCase(), null, !1, !1)
  })
var re = /[\-:]([a-z])/g
function le(e) {
  return e[1].toUpperCase()
}
function ae(e, t, n, r) {
  var l = ne.hasOwnProperty(t) ? ne[t] : null
  ;(null !== l
    ? 0 === l.type
    : !r &&
      2 < t.length &&
      ('o' === t[0] || 'O' === t[0]) &&
      ('n' === t[1] || 'N' === t[1])) ||
    ((function (e, t, n, r) {
      if (
        null == t ||
        (function (e, t, n, r) {
          if (null !== n && 0 === n.type) return !1
          switch (typeof t) {
            case 'function':
            case 'symbol':
              return !0
            case 'boolean':
              return (
                !r &&
                (null !== n
                  ? !n.acceptsBooleans
                  : 'data-' !== (e = e.toLowerCase().slice(0, 5)) &&
                    'aria-' !== e)
              )
            default:
              return !1
          }
        })(e, t, n, r)
      )
        return !0
      if (r) return !1
      if (null !== n)
        switch (n.type) {
          case 3:
            return !t
          case 4:
            return !1 === t
          case 5:
            return isNaN(t)
          case 6:
            return isNaN(t) || 1 > t
        }
      return !1
    })(t, n, l, r) && (n = null),
    r || null === l
      ? (function (e) {
          return (
            !!Z.call(ee, e) ||
            (!Z.call(J, e) && (G.test(e) ? (ee[e] = !0) : ((J[e] = !0), !1)))
          )
        })(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = null === n ? 3 !== l.type && '' : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        null === n
          ? e.removeAttribute(t)
          : ((n = 3 === (l = l.type) || (4 === l && !0 === n) ? '' : '' + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(re, le)
    ne[t] = new te(t, 1, !1, e, null, !1, !1)
  }),
  'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
    .split(' ')
    .forEach(function (e) {
      var t = e.replace(re, le)
      ne[t] = new te(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1)
    }),
  ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
    var t = e.replace(re, le)
    ne[t] = new te(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1)
  }),
  ['tabIndex', 'crossOrigin'].forEach(function (e) {
    ne[e] = new te(e, 1, !1, e.toLowerCase(), null, !1, !1)
  }),
  (ne.xlinkHref = new te(
    'xlinkHref',
    1,
    !1,
    'xlink:href',
    'http://www.w3.org/1999/xlink',
    !0,
    !1,
  )),
  ['src', 'href', 'action', 'formAction'].forEach(function (e) {
    ne[e] = new te(e, 1, !1, e.toLowerCase(), null, !0, !0)
  })
var oe = W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ie = 60103,
  ue = 60106,
  se = 60107,
  ce = 60108,
  fe = 60114,
  de = 60109,
  pe = 60110,
  he = 60112,
  me = 60113,
  ve = 60120,
  ge = 60115,
  ye = 60116,
  be = 60121,
  we = 60128,
  ke = 60129,
  Ee = 60130,
  Se = 60131
if ('function' == typeof Symbol && Symbol.for) {
  var _e = Symbol.for
  ;(ie = _e('react.element')),
    (ue = _e('react.portal')),
    (se = _e('react.fragment')),
    (ce = _e('react.strict_mode')),
    (fe = _e('react.profiler')),
    (de = _e('react.provider')),
    (pe = _e('react.context')),
    (he = _e('react.forward_ref')),
    (me = _e('react.suspense')),
    (ve = _e('react.suspense_list')),
    (ge = _e('react.memo')),
    (ye = _e('react.lazy')),
    (be = _e('react.block')),
    _e('react.scope'),
    (we = _e('react.opaque.id')),
    (ke = _e('react.debug_trace_mode')),
    (Ee = _e('react.offscreen')),
    (Se = _e('react.legacy_hidden'))
}
var xe,
  Ce = 'function' == typeof Symbol && Symbol.iterator
function Pe(e) {
  return null === e || 'object' != typeof e
    ? null
    : 'function' == typeof (e = (Ce && e[Ce]) || e['@@iterator'])
    ? e
    : null
}
function Oe(e) {
  if (void 0 === xe)
    try {
      throw Error()
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/)
      xe = (t && t[1]) || ''
    }
  return '\n' + xe + e
}
var Te = !1
function Ne(e, t) {
  if (!e || Te) return ''
  Te = !0
  var n = Error.prepareStackTrace
  Error.prepareStackTrace = void 0
  try {
    if (t)
      if (
        ((t = function () {
          throw Error()
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error()
          },
        }),
        'object' == typeof Reflect && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, [])
        } catch (u) {
          var r = u
        }
        Reflect.construct(e, [], t)
      } else {
        try {
          t.call()
        } catch (u) {
          r = u
        }
        e.call(t.prototype)
      }
    else {
      try {
        throw Error()
      } catch (u) {
        r = u
      }
      e()
    }
  } catch (u) {
    if (u && r && 'string' == typeof u.stack) {
      for (
        var l = u.stack.split('\n'),
          a = r.stack.split('\n'),
          o = l.length - 1,
          i = a.length - 1;
        1 <= o && 0 <= i && l[o] !== a[i];

      )
        i--
      for (; 1 <= o && 0 <= i; o--, i--)
        if (l[o] !== a[i]) {
          if (1 !== o || 1 !== i)
            do {
              if ((o--, 0 > --i || l[o] !== a[i]))
                return '\n' + l[o].replace(' at new ', ' at ')
            } while (1 <= o && 0 <= i)
          break
        }
    }
  } finally {
    ;(Te = !1), (Error.prepareStackTrace = n)
  }
  return (e = e ? e.displayName || e.name : '') ? Oe(e) : ''
}
function ze(e) {
  switch (e.tag) {
    case 5:
      return Oe(e.type)
    case 16:
      return Oe('Lazy')
    case 13:
      return Oe('Suspense')
    case 19:
      return Oe('SuspenseList')
    case 0:
    case 2:
    case 15:
      return (e = Ne(e.type, !1))
    case 11:
      return (e = Ne(e.type.render, !1))
    case 22:
      return (e = Ne(e.type._render, !1))
    case 1:
      return (e = Ne(e.type, !0))
    default:
      return ''
  }
}
function Le(e) {
  if (null == e) return null
  if ('function' == typeof e) return e.displayName || e.name || null
  if ('string' == typeof e) return e
  switch (e) {
    case se:
      return 'Fragment'
    case ue:
      return 'Portal'
    case fe:
      return 'Profiler'
    case ce:
      return 'StrictMode'
    case me:
      return 'Suspense'
    case ve:
      return 'SuspenseList'
  }
  if ('object' == typeof e)
    switch (e.$$typeof) {
      case pe:
        return (e.displayName || 'Context') + '.Consumer'
      case de:
        return (e._context.displayName || 'Context') + '.Provider'
      case he:
        var t = e.render
        return (
          (t = t.displayName || t.name || ''),
          e.displayName || ('' !== t ? 'ForwardRef(' + t + ')' : 'ForwardRef')
        )
      case ge:
        return Le(e.type)
      case be:
        return Le(e._render)
      case ye:
        ;(t = e._payload), (e = e._init)
        try {
          return Le(e(t))
        } catch (n) {}
    }
  return null
}
function Re(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'object':
    case 'string':
    case 'undefined':
      return e
    default:
      return ''
  }
}
function Me(e) {
  var t = e.type
  return (
    (e = e.nodeName) &&
    'input' === e.toLowerCase() &&
    ('checkbox' === t || 'radio' === t)
  )
}
function De(e) {
  e._valueTracker ||
    (e._valueTracker = (function (e) {
      var t = Me(e) ? 'checked' : 'value',
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = '' + e[t]
      if (
        !e.hasOwnProperty(t) &&
        void 0 !== n &&
        'function' == typeof n.get &&
        'function' == typeof n.set
      ) {
        var l = n.get,
          a = n.set
        return (
          Object.defineProperty(e, t, {
            configurable: !0,
            get: function () {
              return l.call(this)
            },
            set: function (e) {
              ;(r = '' + e), a.call(this, e)
            },
          }),
          Object.defineProperty(e, t, { enumerable: n.enumerable }),
          {
            getValue: function () {
              return r
            },
            setValue: function (e) {
              r = '' + e
            },
            stopTracking: function () {
              ;(e._valueTracker = null), delete e[t]
            },
          }
        )
      }
    })(e))
}
function Fe(e) {
  if (!e) return !1
  var t = e._valueTracker
  if (!t) return !0
  var n = t.getValue(),
    r = ''
  return (
    e && (r = Me(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r) !== n && (t.setValue(e), !0)
  )
}
function Ie(e) {
  if (
    void 0 === (e = e || ('undefined' != typeof document ? document : void 0))
  )
    return null
  try {
    return e.activeElement || e.body
  } catch (t) {
    return e.body
  }
}
function Ue(e, t) {
  var n = t.checked
  return H({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: null != n ? n : e._wrapperState.initialChecked,
  })
}
function Ae(e, t) {
  var n = null == t.defaultValue ? '' : t.defaultValue,
    r = null != t.checked ? t.checked : t.defaultChecked
  ;(n = Re(null != t.value ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        'checkbox' === t.type || 'radio' === t.type
          ? null != t.checked
          : null != t.value,
    })
}
function je(e, t) {
  null != (t = t.checked) && ae(e, 'checked', t, !1)
}
function Ve(e, t) {
  je(e, t)
  var n = Re(t.value),
    r = t.type
  if (null != n)
    'number' === r
      ? ((0 === n && '' === e.value) || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n)
  else if ('submit' === r || 'reset' === r)
    return void e.removeAttribute('value')
  t.hasOwnProperty('value')
    ? He(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && He(e, t.type, Re(t.defaultValue)),
    null == t.checked &&
      null != t.defaultChecked &&
      (e.defaultChecked = !!t.defaultChecked)
}
function We(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type
    if (
      !(
        ('submit' !== r && 'reset' !== r) ||
        (void 0 !== t.value && null !== t.value)
      )
    )
      return
    ;(t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t)
  }
  '' !== (n = e.name) && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    '' !== n && (e.name = n)
}
function He(e, t, n) {
  ;('number' === t && Ie(e.ownerDocument) === e) ||
    (null == n
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n))
}
function Be(e, t) {
  return (
    (e = H({ children: void 0 }, t)),
    (t = (function (e) {
      var t = ''
      return (
        W.Children.forEach(e, function (e) {
          null != e && (t += e)
        }),
        t
      )
    })(t.children)) && (e.children = t),
    e
  )
}
function $e(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {}
    for (var l = 0; l < n.length; l++) t['$' + n[l]] = !0
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0)
  } else {
    for (n = '' + Re(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n)
        return (e[l].selected = !0), void (r && (e[l].defaultSelected = !0))
      null !== t || e[l].disabled || (t = e[l])
    }
    null !== t && (t.selected = !0)
  }
}
function Qe(e, t) {
  if (null != t.dangerouslySetInnerHTML) throw Error($(91))
  return H({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  })
}
function qe(e, t) {
  var n = t.value
  if (null == n) {
    if (((n = t.children), (t = t.defaultValue), null != n)) {
      if (null != t) throw Error($(92))
      if (Array.isArray(n)) {
        if (!(1 >= n.length)) throw Error($(93))
        n = n[0]
      }
      t = n
    }
    null == t && (t = ''), (n = t)
  }
  e._wrapperState = { initialValue: Re(n) }
}
function Ke(e, t) {
  var n = Re(t.value),
    r = Re(t.defaultValue)
  null != n &&
    ((n = '' + n) !== e.value && (e.value = n),
    null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)),
    null != r && (e.defaultValue = '' + r)
}
function Ye(e) {
  var t = e.textContent
  t === e._wrapperState.initialValue && '' !== t && null !== t && (e.value = t)
}
var Xe = 'http://www.w3.org/1999/xhtml',
  Ge = 'http://www.w3.org/2000/svg'
function Ze(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg'
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML'
    default:
      return 'http://www.w3.org/1999/xhtml'
  }
}
function Je(e, t) {
  return null == e || 'http://www.w3.org/1999/xhtml' === e
    ? Ze(t)
    : 'http://www.w3.org/2000/svg' === e && 'foreignObject' === t
    ? 'http://www.w3.org/1999/xhtml'
    : e
}
var et,
  tt,
  nt =
    ((tt = function (e, t) {
      if (e.namespaceURI !== Ge || 'innerHTML' in e) e.innerHTML = t
      else {
        for (
          (et = et || document.createElement('div')).innerHTML =
            '<svg>' + t.valueOf().toString() + '</svg>',
            t = et.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild)
        for (; t.firstChild; ) e.appendChild(t.firstChild)
      }
    }),
    'undefined' != typeof MSApp && MSApp.execUnsafeLocalFunction
      ? function (e, t, n, r) {
          MSApp.execUnsafeLocalFunction(function () {
            return tt(e, t)
          })
        }
      : tt)
function rt(e, t) {
  if (t) {
    var n = e.firstChild
    if (n && n === e.lastChild && 3 === n.nodeType)
      return void (n.nodeValue = t)
  }
  e.textContent = t
}
var lt = {
    animationIterationCount: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  at = ['Webkit', 'ms', 'Moz', 'O']
function ot(e, t, n) {
  return null == t || 'boolean' == typeof t || '' === t
    ? ''
    : n || 'number' != typeof t || 0 === t || (lt.hasOwnProperty(e) && lt[e])
    ? ('' + t).trim()
    : t + 'px'
}
function it(e, t) {
  for (var n in ((e = e.style), t))
    if (t.hasOwnProperty(n)) {
      var r = 0 === n.indexOf('--'),
        l = ot(n, t[n], r)
      'float' === n && (n = 'cssFloat'), r ? e.setProperty(n, l) : (e[n] = l)
    }
}
Object.keys(lt).forEach(function (e) {
  at.forEach(function (t) {
    ;(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (lt[t] = lt[e])
  })
})
var ut = H(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
)
function st(e, t) {
  if (t) {
    if (ut[e] && (null != t.children || null != t.dangerouslySetInnerHTML))
      throw Error($(137, e))
    if (null != t.dangerouslySetInnerHTML) {
      if (null != t.children) throw Error($(60))
      if (
        'object' != typeof t.dangerouslySetInnerHTML ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error($(61))
    }
    if (null != t.style && 'object' != typeof t.style) throw Error($(62))
  }
}
function ct(e, t) {
  if (-1 === e.indexOf('-')) return 'string' == typeof t.is
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1
    default:
      return !0
  }
}
function ft(e) {
  return (
    (e = e.target || e.srcElement || window).correspondingUseElement &&
      (e = e.correspondingUseElement),
    3 === e.nodeType ? e.parentNode : e
  )
}
var dt = null,
  pt = null,
  ht = null
function mt(e) {
  if ((e = Al(e))) {
    if ('function' != typeof dt) throw Error($(280))
    var t = e.stateNode
    t && ((t = Vl(t)), dt(e.stateNode, e.type, t))
  }
}
function vt(e) {
  pt ? (ht ? ht.push(e) : (ht = [e])) : (pt = e)
}
function gt() {
  if (pt) {
    var e = pt,
      t = ht
    if (((ht = pt = null), mt(e), t)) for (e = 0; e < t.length; e++) mt(t[e])
  }
}
function yt(e, t) {
  return e(t)
}
function bt(e, t, n, r, l) {
  return e(t, n, r, l)
}
function wt() {}
var kt = yt,
  Et = !1,
  St = !1
function _t() {
  ;(null === pt && null === ht) || (wt(), gt())
}
function xt(e, t) {
  var n = e.stateNode
  if (null === n) return null
  var r = Vl(n)
  if (null === r) return null
  n = r[t]
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      ;(r = !r.disabled) ||
        (r = !(
          'button' === (e = e.type) ||
          'input' === e ||
          'select' === e ||
          'textarea' === e
        )),
        (e = !r)
      break e
    default:
      e = !1
  }
  if (e) return null
  if (n && 'function' != typeof n) throw Error($(231, t, typeof n))
  return n
}
var Ct = !1
if (X)
  try {
    var Pt = {}
    Object.defineProperty(Pt, 'passive', {
      get: function () {
        Ct = !0
      },
    }),
      window.addEventListener('test', Pt, Pt),
      window.removeEventListener('test', Pt, Pt)
  } catch (tt) {
    Ct = !1
  }
function Ot(e, t, n, r, l, a, o, i, u) {
  var s = Array.prototype.slice.call(arguments, 3)
  try {
    t.apply(n, s)
  } catch (c) {
    this.onError(c)
  }
}
var Tt = !1,
  Nt = null,
  zt = !1,
  Lt = null,
  Rt = {
    onError: function (e) {
      ;(Tt = !0), (Nt = e)
    },
  }
function Mt(e, t, n, r, l, a, o, i, u) {
  ;(Tt = !1), (Nt = null), Ot.apply(Rt, arguments)
}
function Dt(e) {
  var t = e,
    n = e
  if (e.alternate) for (; t.return; ) t = t.return
  else {
    e = t
    do {
      0 != (1026 & (t = e).flags) && (n = t.return), (e = t.return)
    } while (e)
  }
  return 3 === t.tag ? n : null
}
function Ft(e) {
  if (13 === e.tag) {
    var t = e.memoizedState
    if (
      (null === t && null !== (e = e.alternate) && (t = e.memoizedState),
      null !== t)
    )
      return t.dehydrated
  }
  return null
}
function It(e) {
  if (Dt(e) !== e) throw Error($(188))
}
function Ut(e) {
  if (
    !(e = (function (e) {
      var t = e.alternate
      if (!t) {
        if (null === (t = Dt(e))) throw Error($(188))
        return t !== e ? null : e
      }
      for (var n = e, r = t; ; ) {
        var l = n.return
        if (null === l) break
        var a = l.alternate
        if (null === a) {
          if (null !== (r = l.return)) {
            n = r
            continue
          }
          break
        }
        if (l.child === a.child) {
          for (a = l.child; a; ) {
            if (a === n) return It(l), e
            if (a === r) return It(l), t
            a = a.sibling
          }
          throw Error($(188))
        }
        if (n.return !== r.return) (n = l), (r = a)
        else {
          for (var o = !1, i = l.child; i; ) {
            if (i === n) {
              ;(o = !0), (n = l), (r = a)
              break
            }
            if (i === r) {
              ;(o = !0), (r = l), (n = a)
              break
            }
            i = i.sibling
          }
          if (!o) {
            for (i = a.child; i; ) {
              if (i === n) {
                ;(o = !0), (n = a), (r = l)
                break
              }
              if (i === r) {
                ;(o = !0), (r = a), (n = l)
                break
              }
              i = i.sibling
            }
            if (!o) throw Error($(189))
          }
        }
        if (n.alternate !== r) throw Error($(190))
      }
      if (3 !== n.tag) throw Error($(188))
      return n.stateNode.current === n ? e : t
    })(e))
  )
    return null
  for (var t = e; ; ) {
    if (5 === t.tag || 6 === t.tag) return t
    if (t.child) (t.child.return = t), (t = t.child)
    else {
      if (t === e) break
      for (; !t.sibling; ) {
        if (!t.return || t.return === e) return null
        t = t.return
      }
      ;(t.sibling.return = t.return), (t = t.sibling)
    }
  }
  return null
}
function At(e, t) {
  for (var n = e.alternate; null !== t; ) {
    if (t === e || t === n) return !0
    t = t.return
  }
  return !1
}
var jt,
  Vt,
  Wt,
  Ht,
  Bt = !1,
  $t = [],
  Qt = null,
  qt = null,
  Kt = null,
  Yt = new Map(),
  Xt = new Map(),
  Gt = [],
  Zt =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' ',
    )
function Jt(e, t, n, r, l) {
  return {
    blockedOn: e,
    domEventName: t,
    eventSystemFlags: 16 | n,
    nativeEvent: l,
    targetContainers: [r],
  }
}
function en(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      Qt = null
      break
    case 'dragenter':
    case 'dragleave':
      qt = null
      break
    case 'mouseover':
    case 'mouseout':
      Kt = null
      break
    case 'pointerover':
    case 'pointerout':
      Yt.delete(t.pointerId)
      break
    case 'gotpointercapture':
    case 'lostpointercapture':
      Xt.delete(t.pointerId)
  }
}
function tn(e, t, n, r, l, a) {
  return null === e || e.nativeEvent !== a
    ? ((e = Jt(t, n, r, l, a)), null !== t && null !== (t = Al(t)) && Vt(t), e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      null !== l && -1 === t.indexOf(l) && t.push(l),
      e)
}
function nn(e) {
  var t = Ul(e.target)
  if (null !== t) {
    var n = Dt(t)
    if (null !== n)
      if (13 === (t = n.tag)) {
        if (null !== (t = Ft(n)))
          return (
            (e.blockedOn = t),
            void Ht(e.lanePriority, function () {
              B.unstable_runWithPriority(e.priority, function () {
                Wt(n)
              })
            })
          )
      } else if (3 === t && n.stateNode.hydrate)
        return void (e.blockedOn =
          3 === n.tag ? n.stateNode.containerInfo : null)
  }
  e.blockedOn = null
}
function rn(e) {
  if (null !== e.blockedOn) return !1
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = An(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent)
    if (null !== n) return null !== (t = Al(n)) && Vt(t), (e.blockedOn = n), !1
    t.shift()
  }
  return !0
}
function ln(e, t, n) {
  rn(e) && n.delete(t)
}
function an() {
  for (Bt = !1; 0 < $t.length; ) {
    var e = $t[0]
    if (null !== e.blockedOn) {
      null !== (e = Al(e.blockedOn)) && jt(e)
      break
    }
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = An(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent)
      if (null !== n) {
        e.blockedOn = n
        break
      }
      t.shift()
    }
    null === e.blockedOn && $t.shift()
  }
  null !== Qt && rn(Qt) && (Qt = null),
    null !== qt && rn(qt) && (qt = null),
    null !== Kt && rn(Kt) && (Kt = null),
    Yt.forEach(ln),
    Xt.forEach(ln)
}
function on(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Bt ||
      ((Bt = !0), B.unstable_scheduleCallback(B.unstable_NormalPriority, an)))
}
function un(e) {
  function t(t) {
    return on(t, e)
  }
  if (0 < $t.length) {
    on($t[0], e)
    for (var n = 1; n < $t.length; n++) {
      var r = $t[n]
      r.blockedOn === e && (r.blockedOn = null)
    }
  }
  for (
    null !== Qt && on(Qt, e),
      null !== qt && on(qt, e),
      null !== Kt && on(Kt, e),
      Yt.forEach(t),
      Xt.forEach(t),
      n = 0;
    n < Gt.length;
    n++
  )
    (r = Gt[n]).blockedOn === e && (r.blockedOn = null)
  for (; 0 < Gt.length && null === (n = Gt[0]).blockedOn; )
    nn(n), null === n.blockedOn && Gt.shift()
}
function sn(e, t) {
  var n = {}
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  )
}
var cn = {
    animationend: sn('Animation', 'AnimationEnd'),
    animationiteration: sn('Animation', 'AnimationIteration'),
    animationstart: sn('Animation', 'AnimationStart'),
    transitionend: sn('Transition', 'TransitionEnd'),
  },
  fn = {},
  dn = {}
function pn(e) {
  if (fn[e]) return fn[e]
  if (!cn[e]) return e
  var t,
    n = cn[e]
  for (t in n) if (n.hasOwnProperty(t) && t in dn) return (fn[e] = n[t])
  return e
}
X &&
  ((dn = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete cn.animationend.animation,
    delete cn.animationiteration.animation,
    delete cn.animationstart.animation),
  'TransitionEvent' in window || delete cn.transitionend.transition)
var hn = pn('animationend'),
  mn = pn('animationiteration'),
  vn = pn('animationstart'),
  gn = pn('transitionend'),
  yn = new Map(),
  bn = new Map(),
  wn = [
    'abort',
    'abort',
    hn,
    'animationEnd',
    mn,
    'animationIteration',
    vn,
    'animationStart',
    'canplay',
    'canPlay',
    'canplaythrough',
    'canPlayThrough',
    'durationchange',
    'durationChange',
    'emptied',
    'emptied',
    'encrypted',
    'encrypted',
    'ended',
    'ended',
    'error',
    'error',
    'gotpointercapture',
    'gotPointerCapture',
    'load',
    'load',
    'loadeddata',
    'loadedData',
    'loadedmetadata',
    'loadedMetadata',
    'loadstart',
    'loadStart',
    'lostpointercapture',
    'lostPointerCapture',
    'playing',
    'playing',
    'progress',
    'progress',
    'seeking',
    'seeking',
    'stalled',
    'stalled',
    'suspend',
    'suspend',
    'timeupdate',
    'timeUpdate',
    gn,
    'transitionEnd',
    'waiting',
    'waiting',
  ]
function kn(e, t) {
  for (var n = 0; n < e.length; n += 2) {
    var r = e[n],
      l = e[n + 1]
    ;(l = 'on' + (l[0].toUpperCase() + l.slice(1))),
      bn.set(r, t),
      yn.set(r, l),
      K(l, [r])
  }
}
;(0, B.unstable_now)()
var En = 8
function Sn(e) {
  if (0 != (1 & e)) return (En = 15), 1
  if (0 != (2 & e)) return (En = 14), 2
  if (0 != (4 & e)) return (En = 13), 4
  var t = 24 & e
  return 0 !== t
    ? ((En = 12), t)
    : 0 != (32 & e)
    ? ((En = 11), 32)
    : 0 !== (t = 192 & e)
    ? ((En = 10), t)
    : 0 != (256 & e)
    ? ((En = 9), 256)
    : 0 !== (t = 3584 & e)
    ? ((En = 8), t)
    : 0 != (4096 & e)
    ? ((En = 7), 4096)
    : 0 !== (t = 4186112 & e)
    ? ((En = 6), t)
    : 0 !== (t = 62914560 & e)
    ? ((En = 5), t)
    : 67108864 & e
    ? ((En = 4), 67108864)
    : 0 != (134217728 & e)
    ? ((En = 3), 134217728)
    : 0 !== (t = 805306368 & e)
    ? ((En = 2), t)
    : 0 != (1073741824 & e)
    ? ((En = 1), 1073741824)
    : ((En = 8), e)
}
function _n(e, t) {
  var n = e.pendingLanes
  if (0 === n) return (En = 0)
  var r = 0,
    l = 0,
    a = e.expiredLanes,
    o = e.suspendedLanes,
    i = e.pingedLanes
  if (0 !== a) (r = a), (l = En = 15)
  else if (0 !== (a = 134217727 & n)) {
    var u = a & ~o
    0 !== u
      ? ((r = Sn(u)), (l = En))
      : 0 !== (i &= a) && ((r = Sn(i)), (l = En))
  } else
    0 !== (a = n & ~o)
      ? ((r = Sn(a)), (l = En))
      : 0 !== i && ((r = Sn(i)), (l = En))
  if (0 === r) return 0
  if (
    ((r = n & (((0 > (r = 31 - Nn(r)) ? 0 : 1 << r) << 1) - 1)),
    0 !== t && t !== r && 0 == (t & o))
  ) {
    if ((Sn(t), l <= En)) return t
    En = l
  }
  if (0 !== (t = e.entangledLanes))
    for (e = e.entanglements, t &= r; 0 < t; )
      (l = 1 << (n = 31 - Nn(t))), (r |= e[n]), (t &= ~l)
  return r
}
function xn(e) {
  return 0 !== (e = -1073741825 & e.pendingLanes)
    ? e
    : 1073741824 & e
    ? 1073741824
    : 0
}
function Cn(e, t) {
  switch (e) {
    case 15:
      return 1
    case 14:
      return 2
    case 12:
      return 0 === (e = Pn(24 & ~t)) ? Cn(10, t) : e
    case 10:
      return 0 === (e = Pn(192 & ~t)) ? Cn(8, t) : e
    case 8:
      return (
        0 === (e = Pn(3584 & ~t)) && 0 === (e = Pn(4186112 & ~t)) && (e = 512),
        e
      )
    case 2:
      return 0 === (t = Pn(805306368 & ~t)) && (t = 268435456), t
  }
  throw Error($(358, e))
}
function Pn(e) {
  return e & -e
}
function On(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e)
  return t
}
function Tn(e, t, n) {
  e.pendingLanes |= t
  var r = t - 1
  ;(e.suspendedLanes &= r),
    (e.pingedLanes &= r),
    ((e = e.eventTimes)[(t = 31 - Nn(t))] = n)
}
var Nn = Math.clz32
    ? Math.clz32
    : function (e) {
        return 0 === e ? 32 : (31 - ((zn(e) / Ln) | 0)) | 0
      },
  zn = Math.log,
  Ln = Math.LN2
var Rn = B.unstable_UserBlockingPriority,
  Mn = B.unstable_runWithPriority,
  Dn = !0
function Fn(e, t, n, r) {
  Et || wt()
  var l = Un,
    a = Et
  Et = !0
  try {
    bt(l, e, t, n, r)
  } finally {
    ;(Et = a) || _t()
  }
}
function In(e, t, n, r) {
  Mn(Rn, Un.bind(null, e, t, n, r))
}
function Un(e, t, n, r) {
  var l
  if (Dn)
    if ((l = 0 == (4 & t)) && 0 < $t.length && -1 < Zt.indexOf(e))
      (e = Jt(null, e, t, n, r)), $t.push(e)
    else {
      var a = An(e, t, n, r)
      if (null === a) l && en(e, r)
      else {
        if (l) {
          if (-1 < Zt.indexOf(e))
            return (e = Jt(a, e, t, n, r)), void $t.push(e)
          if (
            (function (e, t, n, r, l) {
              switch (t) {
                case 'focusin':
                  return (Qt = tn(Qt, e, t, n, r, l)), !0
                case 'dragenter':
                  return (qt = tn(qt, e, t, n, r, l)), !0
                case 'mouseover':
                  return (Kt = tn(Kt, e, t, n, r, l)), !0
                case 'pointerover':
                  var a = l.pointerId
                  return Yt.set(a, tn(Yt.get(a) || null, e, t, n, r, l)), !0
                case 'gotpointercapture':
                  return (
                    (a = l.pointerId),
                    Xt.set(a, tn(Xt.get(a) || null, e, t, n, r, l)),
                    !0
                  )
              }
              return !1
            })(a, e, t, n, r)
          )
            return
          en(e, r)
        }
        gl(e, t, r, null, n)
      }
    }
}
function An(e, t, n, r) {
  var l = ft(r)
  if (null !== (l = Ul(l))) {
    var a = Dt(l)
    if (null === a) l = null
    else {
      var o = a.tag
      if (13 === o) {
        if (null !== (l = Ft(a))) return l
        l = null
      } else if (3 === o) {
        if (a.stateNode.hydrate)
          return 3 === a.tag ? a.stateNode.containerInfo : null
        l = null
      } else a !== l && (l = null)
    }
  }
  return gl(e, t, r, l, n), null
}
var jn = null,
  Vn = null,
  Wn = null
function Hn() {
  if (Wn) return Wn
  var e,
    t,
    n = Vn,
    r = n.length,
    l = 'value' in jn ? jn.value : jn.textContent,
    a = l.length
  for (e = 0; e < r && n[e] === l[e]; e++);
  var o = r - e
  for (t = 1; t <= o && n[r - t] === l[a - t]; t++);
  return (Wn = l.slice(e, 1 < t ? 1 - t : void 0))
}
function Bn(e) {
  var t = e.keyCode
  return (
    'charCode' in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : (e = t),
    10 === e && (e = 13),
    32 <= e || 13 === e ? e : 0
  )
}
function $n() {
  return !0
}
function Qn() {
  return !1
}
function qn(e) {
  function t(t, n, r, l, a) {
    for (var o in ((this._reactName = t),
    (this._targetInst = r),
    (this.type = n),
    (this.nativeEvent = l),
    (this.target = a),
    (this.currentTarget = null),
    e))
      e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(l) : l[o]))
    return (
      (this.isDefaultPrevented = (
        null != l.defaultPrevented ? l.defaultPrevented : !1 === l.returnValue
      )
        ? $n
        : Qn),
      (this.isPropagationStopped = Qn),
      this
    )
  }
  return (
    H(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0
        var e = this.nativeEvent
        e &&
          (e.preventDefault
            ? e.preventDefault()
            : 'unknown' != typeof e.returnValue && (e.returnValue = !1),
          (this.isDefaultPrevented = $n))
      },
      stopPropagation: function () {
        var e = this.nativeEvent
        e &&
          (e.stopPropagation
            ? e.stopPropagation()
            : 'unknown' != typeof e.cancelBubble && (e.cancelBubble = !0),
          (this.isPropagationStopped = $n))
      },
      persist: function () {},
      isPersistent: $n,
    }),
    t
  )
}
var Kn,
  Yn,
  Xn,
  Gn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Zn = qn(Gn),
  Jn = H({}, Gn, { view: 0, detail: 0 }),
  er = qn(Jn),
  tr = H({}, Jn, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: dr,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return void 0 === e.relatedTarget
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== Xn &&
            (Xn && 'mousemove' === e.type
              ? ((Kn = e.screenX - Xn.screenX), (Yn = e.screenY - Xn.screenY))
              : (Yn = Kn = 0),
            (Xn = e)),
          Kn)
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : Yn
    },
  }),
  nr = qn(tr),
  rr = qn(H({}, tr, { dataTransfer: 0 })),
  lr = qn(H({}, Jn, { relatedTarget: 0 })),
  ar = qn(H({}, Gn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
  or = qn(
    H({}, Gn, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData
      },
    }),
  ),
  ir = qn(H({}, Gn, { data: 0 })),
  ur = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  sr = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  cr = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' }
function fr(e) {
  var t = this.nativeEvent
  return t.getModifierState ? t.getModifierState(e) : !!(e = cr[e]) && !!t[e]
}
function dr() {
  return fr
}
var pr = qn(
    H({}, Jn, {
      key: function (e) {
        if (e.key) {
          var t = ur[e.key] || e.key
          if ('Unidentified' !== t) return t
        }
        return 'keypress' === e.type
          ? 13 === (e = Bn(e))
            ? 'Enter'
            : String.fromCharCode(e)
          : 'keydown' === e.type || 'keyup' === e.type
          ? sr[e.keyCode] || 'Unidentified'
          : ''
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: dr,
      charCode: function (e) {
        return 'keypress' === e.type ? Bn(e) : 0
      },
      keyCode: function (e) {
        return 'keydown' === e.type || 'keyup' === e.type ? e.keyCode : 0
      },
      which: function (e) {
        return 'keypress' === e.type
          ? Bn(e)
          : 'keydown' === e.type || 'keyup' === e.type
          ? e.keyCode
          : 0
      },
    }),
  ),
  hr = qn(
    H({}, tr, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
  ),
  mr = qn(
    H({}, Jn, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: dr,
    }),
  ),
  vr = qn(H({}, Gn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
  gr = qn(
    H({}, tr, {
      deltaX: function (e) {
        return 'deltaX' in e
          ? e.deltaX
          : 'wheelDeltaX' in e
          ? -e.wheelDeltaX
          : 0
      },
      deltaY: function (e) {
        return 'deltaY' in e
          ? e.deltaY
          : 'wheelDeltaY' in e
          ? -e.wheelDeltaY
          : 'wheelDelta' in e
          ? -e.wheelDelta
          : 0
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
  ),
  yr = [9, 13, 27, 32],
  br = X && 'CompositionEvent' in window,
  wr = null
X && 'documentMode' in document && (wr = document.documentMode)
var kr = X && 'TextEvent' in window && !wr,
  Er = X && (!br || (wr && 8 < wr && 11 >= wr)),
  Sr = String.fromCharCode(32),
  _r = !1
function xr(e, t) {
  switch (e) {
    case 'keyup':
      return -1 !== yr.indexOf(t.keyCode)
    case 'keydown':
      return 229 !== t.keyCode
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0
    default:
      return !1
  }
}
function Cr(e) {
  return 'object' == typeof (e = e.detail) && 'data' in e ? e.data : null
}
var Pr = !1
var Or = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
}
function Tr(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return 'input' === t ? !!Or[e.type] : 'textarea' === t
}
function Nr(e, t, n, r) {
  vt(r),
    0 < (t = bl(t, 'onChange')).length &&
      ((n = new Zn('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }))
}
var zr = null,
  Lr = null
function Rr(e) {
  fl(e, 0)
}
function Mr(e) {
  if (Fe(jl(e))) return e
}
function Dr(e, t) {
  if ('change' === e) return t
}
var Fr = !1
if (X) {
  var Ir
  if (X) {
    var Ur = 'oninput' in document
    if (!Ur) {
      var Ar = document.createElement('div')
      Ar.setAttribute('oninput', 'return;'),
        (Ur = 'function' == typeof Ar.oninput)
    }
    Ir = Ur
  } else Ir = !1
  Fr = Ir && (!document.documentMode || 9 < document.documentMode)
}
function jr() {
  zr && (zr.detachEvent('onpropertychange', Vr), (Lr = zr = null))
}
function Vr(e) {
  if ('value' === e.propertyName && Mr(Lr)) {
    var t = []
    if ((Nr(t, Lr, e, ft(e)), (e = Rr), Et)) e(t)
    else {
      Et = !0
      try {
        yt(e, t)
      } finally {
        ;(Et = !1), _t()
      }
    }
  }
}
function Wr(e, t, n) {
  'focusin' === e
    ? (jr(), (Lr = n), (zr = t).attachEvent('onpropertychange', Vr))
    : 'focusout' === e && jr()
}
function Hr(e) {
  if ('selectionchange' === e || 'keyup' === e || 'keydown' === e) return Mr(Lr)
}
function Br(e, t) {
  if ('click' === e) return Mr(t)
}
function $r(e, t) {
  if ('input' === e || 'change' === e) return Mr(t)
}
var Qr =
    'function' == typeof Object.is
      ? Object.is
      : function (e, t) {
          return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
        },
  qr = Object.prototype.hasOwnProperty
function Kr(e, t) {
  if (Qr(e, t)) return !0
  if ('object' != typeof e || null === e || 'object' != typeof t || null === t)
    return !1
  var n = Object.keys(e),
    r = Object.keys(t)
  if (n.length !== r.length) return !1
  for (r = 0; r < n.length; r++)
    if (!qr.call(t, n[r]) || !Qr(e[n[r]], t[n[r]])) return !1
  return !0
}
function Yr(e) {
  for (; e && e.firstChild; ) e = e.firstChild
  return e
}
function Xr(e, t) {
  var n,
    r = Yr(e)
  for (e = 0; r; ) {
    if (3 === r.nodeType) {
      if (((n = e + r.textContent.length), e <= t && n >= t))
        return { node: r, offset: t - e }
      e = n
    }
    e: {
      for (; r; ) {
        if (r.nextSibling) {
          r = r.nextSibling
          break e
        }
        r = r.parentNode
      }
      r = void 0
    }
    r = Yr(r)
  }
}
function Gr(e, t) {
  return (
    !(!e || !t) &&
    (e === t ||
      ((!e || 3 !== e.nodeType) &&
        (t && 3 === t.nodeType
          ? Gr(e, t.parentNode)
          : 'contains' in e
          ? e.contains(t)
          : !!e.compareDocumentPosition &&
            !!(16 & e.compareDocumentPosition(t)))))
  )
}
function Zr() {
  for (var e = window, t = Ie(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = 'string' == typeof t.contentWindow.location.href
    } catch (r) {
      n = !1
    }
    if (!n) break
    t = Ie((e = t.contentWindow).document)
  }
  return t
}
function Jr(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return (
    t &&
    (('input' === t &&
      ('text' === e.type ||
        'search' === e.type ||
        'tel' === e.type ||
        'url' === e.type ||
        'password' === e.type)) ||
      'textarea' === t ||
      'true' === e.contentEditable)
  )
}
var el = X && 'documentMode' in document && 11 >= document.documentMode,
  tl = null,
  nl = null,
  rl = null,
  ll = !1
function al(e, t, n) {
  var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument
  ll ||
    null == tl ||
    tl !== Ie(r) ||
    ('selectionStart' in (r = tl) && Jr(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : (r = {
          anchorNode: (r = (
            (r.ownerDocument && r.ownerDocument.defaultView) ||
            window
          ).getSelection()).anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        }),
    (rl && Kr(rl, r)) ||
      ((rl = r),
      0 < (r = bl(nl, 'onSelect')).length &&
        ((t = new Zn('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = tl))))
}
kn(
  'cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange'.split(
    ' ',
  ),
  0,
),
  kn(
    'drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel'.split(
      ' ',
    ),
    1,
  ),
  kn(wn, 2)
for (
  var ol =
      'change selectionchange textInput compositionstart compositionend compositionupdate'.split(
        ' ',
      ),
    il = 0;
  il < ol.length;
  il++
)
  bn.set(ol[il], 0)
Y('onMouseEnter', ['mouseout', 'mouseover']),
  Y('onMouseLeave', ['mouseout', 'mouseover']),
  Y('onPointerEnter', ['pointerout', 'pointerover']),
  Y('onPointerLeave', ['pointerout', 'pointerover']),
  K(
    'onChange',
    'change click focusin focusout input keydown keyup selectionchange'.split(
      ' ',
    ),
  ),
  K(
    'onSelect',
    'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
      ' ',
    ),
  ),
  K('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
  K(
    'onCompositionEnd',
    'compositionend focusout keydown keypress keyup mousedown'.split(' '),
  ),
  K(
    'onCompositionStart',
    'compositionstart focusout keydown keypress keyup mousedown'.split(' '),
  ),
  K(
    'onCompositionUpdate',
    'compositionupdate focusout keydown keypress keyup mousedown'.split(' '),
  )
var ul =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' ',
    ),
  sl = new Set('cancel close invalid load scroll toggle'.split(' ').concat(ul))
function cl(e, t, n) {
  var r = e.type || 'unknown-event'
  ;(e.currentTarget = n),
    (function (e, t, n, r, l, a, o, i, u) {
      if ((Mt.apply(this, arguments), Tt)) {
        if (!Tt) throw Error($(198))
        var s = Nt
        ;(Tt = !1), (Nt = null), zt || ((zt = !0), (Lt = s))
      }
    })(r, t, void 0, e),
    (e.currentTarget = null)
}
function fl(e, t) {
  t = 0 != (4 & t)
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event
    r = r.listeners
    e: {
      var a = void 0
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var i = r[o],
            u = i.instance,
            s = i.currentTarget
          if (((i = i.listener), u !== a && l.isPropagationStopped())) break e
          cl(l, i, s), (a = u)
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((u = (i = r[o]).instance),
            (s = i.currentTarget),
            (i = i.listener),
            u !== a && l.isPropagationStopped())
          )
            break e
          cl(l, i, s), (a = u)
        }
    }
  }
  if (zt) throw ((e = Lt), (zt = !1), (Lt = null), e)
}
function dl(e, t) {
  var n = Wl(t),
    r = e + '__bubble'
  n.has(r) || (vl(t, e, 2, !1), n.add(r))
}
var pl = '_reactListening' + Math.random().toString(36).slice(2)
function hl(e) {
  e[pl] ||
    ((e[pl] = !0),
    Q.forEach(function (t) {
      sl.has(t) || ml(t, !1, e, null), ml(t, !0, e, null)
    }))
}
function ml(e, t, n, r) {
  var l = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0,
    a = n
  if (
    ('selectionchange' === e && 9 !== n.nodeType && (a = n.ownerDocument),
    null !== r && !t && sl.has(e))
  ) {
    if ('scroll' !== e) return
    ;(l |= 2), (a = r)
  }
  var o = Wl(a),
    i = e + '__' + (t ? 'capture' : 'bubble')
  o.has(i) || (t && (l |= 4), vl(a, e, l, t), o.add(i))
}
function vl(e, t, n, r) {
  var l = bn.get(t)
  switch (void 0 === l ? 2 : l) {
    case 0:
      l = Fn
      break
    case 1:
      l = In
      break
    default:
      l = Un
  }
  ;(n = l.bind(null, t, n, e)),
    (l = void 0),
    !Ct ||
      ('touchstart' !== t && 'touchmove' !== t && 'wheel' !== t) ||
      (l = !0),
    r
      ? void 0 !== l
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : void 0 !== l
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1)
}
function gl(e, t, n, r, l) {
  var a = r
  if (0 == (1 & t) && 0 == (2 & t) && null !== r)
    e: for (;;) {
      if (null === r) return
      var o = r.tag
      if (3 === o || 4 === o) {
        var i = r.stateNode.containerInfo
        if (i === l || (8 === i.nodeType && i.parentNode === l)) break
        if (4 === o)
          for (o = r.return; null !== o; ) {
            var u = o.tag
            if (
              (3 === u || 4 === u) &&
              ((u = o.stateNode.containerInfo) === l ||
                (8 === u.nodeType && u.parentNode === l))
            )
              return
            o = o.return
          }
        for (; null !== i; ) {
          if (null === (o = Ul(i))) return
          if (5 === (u = o.tag) || 6 === u) {
            r = a = o
            continue e
          }
          i = i.parentNode
        }
      }
      r = r.return
    }
  !(function (e, t, n) {
    if (St) return e(t, n)
    St = !0
    try {
      kt(e, t, n)
    } finally {
      ;(St = !1), _t()
    }
  })(function () {
    var r = a,
      l = ft(n),
      o = []
    e: {
      var i = yn.get(e)
      if (void 0 !== i) {
        var u = Zn,
          s = e
        switch (e) {
          case 'keypress':
            if (0 === Bn(n)) break e
          case 'keydown':
          case 'keyup':
            u = pr
            break
          case 'focusin':
            ;(s = 'focus'), (u = lr)
            break
          case 'focusout':
            ;(s = 'blur'), (u = lr)
            break
          case 'beforeblur':
          case 'afterblur':
            u = lr
            break
          case 'click':
            if (2 === n.button) break e
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            u = nr
            break
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            u = rr
            break
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            u = mr
            break
          case hn:
          case mn:
          case vn:
            u = ar
            break
          case gn:
            u = vr
            break
          case 'scroll':
            u = er
            break
          case 'wheel':
            u = gr
            break
          case 'copy':
          case 'cut':
          case 'paste':
            u = or
            break
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            u = hr
        }
        var c = 0 != (4 & t),
          f = !c && 'scroll' === e,
          d = c ? (null !== i ? i + 'Capture' : null) : i
        c = []
        for (var p, h = r; null !== h; ) {
          var m = (p = h).stateNode
          if (
            (5 === p.tag &&
              null !== m &&
              ((p = m),
              null !== d && null != (m = xt(h, d)) && c.push(yl(h, m, p))),
            f)
          )
            break
          h = h.return
        }
        0 < c.length &&
          ((i = new u(i, s, null, n, l)), o.push({ event: i, listeners: c }))
      }
    }
    if (0 == (7 & t)) {
      if (
        ((u = 'mouseout' === e || 'pointerout' === e),
        (!(i = 'mouseover' === e || 'pointerover' === e) ||
          0 != (16 & t) ||
          !(s = n.relatedTarget || n.fromElement) ||
          (!Ul(s) && !s[Fl])) &&
          (u || i) &&
          ((i =
            l.window === l
              ? l
              : (i = l.ownerDocument)
              ? i.defaultView || i.parentWindow
              : window),
          u
            ? ((u = r),
              null !==
                (s = (s = n.relatedTarget || n.toElement) ? Ul(s) : null) &&
                (s !== (f = Dt(s)) || (5 !== s.tag && 6 !== s.tag)) &&
                (s = null))
            : ((u = null), (s = r)),
          u !== s))
      ) {
        if (
          ((c = nr),
          (m = 'onMouseLeave'),
          (d = 'onMouseEnter'),
          (h = 'mouse'),
          ('pointerout' !== e && 'pointerover' !== e) ||
            ((c = hr),
            (m = 'onPointerLeave'),
            (d = 'onPointerEnter'),
            (h = 'pointer')),
          (f = null == u ? i : jl(u)),
          (p = null == s ? i : jl(s)),
          ((i = new c(m, h + 'leave', u, n, l)).target = f),
          (i.relatedTarget = p),
          (m = null),
          Ul(l) === r &&
            (((c = new c(d, h + 'enter', s, n, l)).target = p),
            (c.relatedTarget = f),
            (m = c)),
          (f = m),
          u && s)
        )
          e: {
            for (d = s, h = 0, p = c = u; p; p = wl(p)) h++
            for (p = 0, m = d; m; m = wl(m)) p++
            for (; 0 < h - p; ) (c = wl(c)), h--
            for (; 0 < p - h; ) (d = wl(d)), p--
            for (; h--; ) {
              if (c === d || (null !== d && c === d.alternate)) break e
              ;(c = wl(c)), (d = wl(d))
            }
            c = null
          }
        else c = null
        null !== u && kl(o, i, u, c, !1),
          null !== s && null !== f && kl(o, f, s, c, !0)
      }
      if (
        'select' ===
          (u = (i = r ? jl(r) : window).nodeName && i.nodeName.toLowerCase()) ||
        ('input' === u && 'file' === i.type)
      )
        var v = Dr
      else if (Tr(i))
        if (Fr) v = $r
        else {
          v = Hr
          var g = Wr
        }
      else
        (u = i.nodeName) &&
          'input' === u.toLowerCase() &&
          ('checkbox' === i.type || 'radio' === i.type) &&
          (v = Br)
      switch (
        (v && (v = v(e, r))
          ? Nr(o, v, n, l)
          : (g && g(e, i, r),
            'focusout' === e &&
              (g = i._wrapperState) &&
              g.controlled &&
              'number' === i.type &&
              He(i, 'number', i.value)),
        (g = r ? jl(r) : window),
        e)
      ) {
        case 'focusin':
          ;(Tr(g) || 'true' === g.contentEditable) &&
            ((tl = g), (nl = r), (rl = null))
          break
        case 'focusout':
          rl = nl = tl = null
          break
        case 'mousedown':
          ll = !0
          break
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          ;(ll = !1), al(o, n, l)
          break
        case 'selectionchange':
          if (el) break
        case 'keydown':
        case 'keyup':
          al(o, n, l)
      }
      var y
      if (br)
        e: {
          switch (e) {
            case 'compositionstart':
              var b = 'onCompositionStart'
              break e
            case 'compositionend':
              b = 'onCompositionEnd'
              break e
            case 'compositionupdate':
              b = 'onCompositionUpdate'
              break e
          }
          b = void 0
        }
      else
        Pr
          ? xr(e, n) && (b = 'onCompositionEnd')
          : 'keydown' === e && 229 === n.keyCode && (b = 'onCompositionStart')
      b &&
        (Er &&
          'ko' !== n.locale &&
          (Pr || 'onCompositionStart' !== b
            ? 'onCompositionEnd' === b && Pr && (y = Hn())
            : ((Vn = 'value' in (jn = l) ? jn.value : jn.textContent),
              (Pr = !0))),
        0 < (g = bl(r, b)).length &&
          ((b = new ir(b, e, null, n, l)),
          o.push({ event: b, listeners: g }),
          y ? (b.data = y) : null !== (y = Cr(n)) && (b.data = y))),
        (y = kr
          ? (function (e, t) {
              switch (e) {
                case 'compositionend':
                  return Cr(t)
                case 'keypress':
                  return 32 !== t.which ? null : ((_r = !0), Sr)
                case 'textInput':
                  return (e = t.data) === Sr && _r ? null : e
                default:
                  return null
              }
            })(e, n)
          : (function (e, t) {
              if (Pr)
                return 'compositionend' === e || (!br && xr(e, t))
                  ? ((e = Hn()), (Wn = Vn = jn = null), (Pr = !1), e)
                  : null
              switch (e) {
                case 'paste':
                  return null
                case 'keypress':
                  if (
                    !(t.ctrlKey || t.altKey || t.metaKey) ||
                    (t.ctrlKey && t.altKey)
                  ) {
                    if (t.char && 1 < t.char.length) return t.char
                    if (t.which) return String.fromCharCode(t.which)
                  }
                  return null
                case 'compositionend':
                  return Er && 'ko' !== t.locale ? null : t.data
                default:
                  return null
              }
            })(e, n)) &&
          0 < (r = bl(r, 'onBeforeInput')).length &&
          ((l = new ir('onBeforeInput', 'beforeinput', null, n, l)),
          o.push({ event: l, listeners: r }),
          (l.data = y))
    }
    fl(o, t)
  })
}
function yl(e, t, n) {
  return { instance: e, listener: t, currentTarget: n }
}
function bl(e, t) {
  for (var n = t + 'Capture', r = []; null !== e; ) {
    var l = e,
      a = l.stateNode
    5 === l.tag &&
      null !== a &&
      ((l = a),
      null != (a = xt(e, n)) && r.unshift(yl(e, a, l)),
      null != (a = xt(e, t)) && r.push(yl(e, a, l))),
      (e = e.return)
  }
  return r
}
function wl(e) {
  if (null === e) return null
  do {
    e = e.return
  } while (e && 5 !== e.tag)
  return e || null
}
function kl(e, t, n, r, l) {
  for (var a = t._reactName, o = []; null !== n && n !== r; ) {
    var i = n,
      u = i.alternate,
      s = i.stateNode
    if (null !== u && u === r) break
    5 === i.tag &&
      null !== s &&
      ((i = s),
      l
        ? null != (u = xt(n, a)) && o.unshift(yl(n, u, i))
        : l || (null != (u = xt(n, a)) && o.push(yl(n, u, i)))),
      (n = n.return)
  }
  0 !== o.length && e.push({ event: t, listeners: o })
}
function El() {}
var Sl = null,
  _l = null
function xl(e, t) {
  switch (e) {
    case 'button':
    case 'input':
    case 'select':
    case 'textarea':
      return !!t.autoFocus
  }
  return !1
}
function Cl(e, t) {
  return (
    'textarea' === e ||
    'option' === e ||
    'noscript' === e ||
    'string' == typeof t.children ||
    'number' == typeof t.children ||
    ('object' == typeof t.dangerouslySetInnerHTML &&
      null !== t.dangerouslySetInnerHTML &&
      null != t.dangerouslySetInnerHTML.__html)
  )
}
var Pl = 'function' == typeof setTimeout ? setTimeout : void 0,
  Ol = 'function' == typeof clearTimeout ? clearTimeout : void 0
function Tl(e) {
  1 === e.nodeType
    ? (e.textContent = '')
    : 9 === e.nodeType && null != (e = e.body) && (e.textContent = '')
}
function Nl(e) {
  for (; null != e; e = e.nextSibling) {
    var t = e.nodeType
    if (1 === t || 3 === t) break
  }
  return e
}
function zl(e) {
  e = e.previousSibling
  for (var t = 0; e; ) {
    if (8 === e.nodeType) {
      var n = e.data
      if ('$' === n || '$!' === n || '$?' === n) {
        if (0 === t) return e
        t--
      } else '/$' === n && t++
    }
    e = e.previousSibling
  }
  return null
}
var Ll = 0
var Rl = Math.random().toString(36).slice(2),
  Ml = '__reactFiber$' + Rl,
  Dl = '__reactProps$' + Rl,
  Fl = '__reactContainer$' + Rl,
  Il = '__reactEvents$' + Rl
function Ul(e) {
  var t = e[Ml]
  if (t) return t
  for (var n = e.parentNode; n; ) {
    if ((t = n[Fl] || n[Ml])) {
      if (
        ((n = t.alternate),
        null !== t.child || (null !== n && null !== n.child))
      )
        for (e = zl(e); null !== e; ) {
          if ((n = e[Ml])) return n
          e = zl(e)
        }
      return t
    }
    n = (e = n).parentNode
  }
  return null
}
function Al(e) {
  return !(e = e[Ml] || e[Fl]) ||
    (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
    ? null
    : e
}
function jl(e) {
  if (5 === e.tag || 6 === e.tag) return e.stateNode
  throw Error($(33))
}
function Vl(e) {
  return e[Dl] || null
}
function Wl(e) {
  var t = e[Il]
  return void 0 === t && (t = e[Il] = new Set()), t
}
var Hl = [],
  Bl = -1
function $l(e) {
  return { current: e }
}
function Ql(e) {
  0 > Bl || ((e.current = Hl[Bl]), (Hl[Bl] = null), Bl--)
}
function ql(e, t) {
  Bl++, (Hl[Bl] = e.current), (e.current = t)
}
var Kl = {},
  Yl = $l(Kl),
  Xl = $l(!1),
  Gl = Kl
function Zl(e, t) {
  var n = e.type.contextTypes
  if (!n) return Kl
  var r = e.stateNode
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext
  var l,
    a = {}
  for (l in n) a[l] = t[l]
  return (
    r &&
      (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = a)),
    a
  )
}
function Jl(e) {
  return null != (e = e.childContextTypes)
}
function ea() {
  Ql(Xl), Ql(Yl)
}
function ta(e, t, n) {
  if (Yl.current !== Kl) throw Error($(168))
  ql(Yl, t), ql(Xl, n)
}
function na(e, t, n) {
  var r = e.stateNode
  if (((e = t.childContextTypes), 'function' != typeof r.getChildContext))
    return n
  for (var l in (r = r.getChildContext()))
    if (!(l in e)) throw Error($(108, Le(t) || 'Unknown', l))
  return H({}, n, r)
}
function ra(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Kl),
    (Gl = Yl.current),
    ql(Yl, e),
    ql(Xl, Xl.current),
    !0
  )
}
function la(e, t, n) {
  var r = e.stateNode
  if (!r) throw Error($(169))
  n
    ? ((e = na(e, t, Gl)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      Ql(Xl),
      Ql(Yl),
      ql(Yl, e))
    : Ql(Xl),
    ql(Xl, n)
}
var aa = null,
  oa = null,
  ia = B.unstable_runWithPriority,
  ua = B.unstable_scheduleCallback,
  sa = B.unstable_cancelCallback,
  ca = B.unstable_shouldYield,
  fa = B.unstable_requestPaint,
  da = B.unstable_now,
  pa = B.unstable_getCurrentPriorityLevel,
  ha = B.unstable_ImmediatePriority,
  ma = B.unstable_UserBlockingPriority,
  va = B.unstable_NormalPriority,
  ga = B.unstable_LowPriority,
  ya = B.unstable_IdlePriority,
  ba = {},
  wa = void 0 !== fa ? fa : function () {},
  ka = null,
  Ea = null,
  Sa = !1,
  _a = da(),
  xa =
    1e4 > _a
      ? da
      : function () {
          return da() - _a
        }
function Ca() {
  switch (pa()) {
    case ha:
      return 99
    case ma:
      return 98
    case va:
      return 97
    case ga:
      return 96
    case ya:
      return 95
    default:
      throw Error($(332))
  }
}
function Pa(e) {
  switch (e) {
    case 99:
      return ha
    case 98:
      return ma
    case 97:
      return va
    case 96:
      return ga
    case 95:
      return ya
    default:
      throw Error($(332))
  }
}
function Oa(e, t) {
  return (e = Pa(e)), ia(e, t)
}
function Ta(e, t, n) {
  return (e = Pa(e)), ua(e, t, n)
}
function Na() {
  if (null !== Ea) {
    var e = Ea
    ;(Ea = null), sa(e)
  }
  za()
}
function za() {
  if (!Sa && null !== ka) {
    Sa = !0
    var e = 0
    try {
      var t = ka
      Oa(99, function () {
        for (; e < t.length; e++) {
          var n = t[e]
          do {
            n = n(!0)
          } while (null !== n)
        }
      }),
        (ka = null)
    } catch (n) {
      throw (null !== ka && (ka = ka.slice(e + 1)), ua(ha, Na), n)
    } finally {
      Sa = !1
    }
  }
}
var La = oe.ReactCurrentBatchConfig
function Ra(e, t) {
  if (e && e.defaultProps) {
    for (var n in ((t = H({}, t)), (e = e.defaultProps)))
      void 0 === t[n] && (t[n] = e[n])
    return t
  }
  return t
}
var Ma = $l(null),
  Da = null,
  Fa = null,
  Ia = null
function Ua() {
  Ia = Fa = Da = null
}
function Aa(e) {
  var t = Ma.current
  Ql(Ma), (e.type._context._currentValue = t)
}
function ja(e, t) {
  for (; null !== e; ) {
    var n = e.alternate
    if ((e.childLanes & t) === t) {
      if (null === n || (n.childLanes & t) === t) break
      n.childLanes |= t
    } else (e.childLanes |= t), null !== n && (n.childLanes |= t)
    e = e.return
  }
}
function Va(e, t) {
  ;(Da = e),
    (Ia = Fa = null),
    null !== (e = e.dependencies) &&
      null !== e.firstContext &&
      (0 != (e.lanes & t) && (bi = !0), (e.firstContext = null))
}
function Wa(e, t) {
  if (Ia !== e && !1 !== t && 0 !== t)
    if (
      (('number' == typeof t && 1073741823 !== t) ||
        ((Ia = e), (t = 1073741823)),
      (t = { context: e, observedBits: t, next: null }),
      null === Fa)
    ) {
      if (null === Da) throw Error($(308))
      ;(Fa = t),
        (Da.dependencies = { lanes: 0, firstContext: t, responders: null })
    } else Fa = Fa.next = t
  return e._currentValue
}
var Ha = !1
function Ba(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null },
    effects: null,
  }
}
function $a(e, t) {
  ;(e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      })
}
function Qa(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  }
}
function qa(e, t) {
  if (null !== (e = e.updateQueue)) {
    var n = (e = e.shared).pending
    null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t)
  }
}
function Ka(e, t) {
  var n = e.updateQueue,
    r = e.alternate
  if (null !== r && n === (r = r.updateQueue)) {
    var l = null,
      a = null
    if (null !== (n = n.firstBaseUpdate)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        }
        null === a ? (l = a = o) : (a = a.next = o), (n = n.next)
      } while (null !== n)
      null === a ? (l = a = t) : (a = a.next = t)
    } else l = a = t
    return (
      (n = {
        baseState: r.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: a,
        shared: r.shared,
        effects: r.effects,
      }),
      void (e.updateQueue = n)
    )
  }
  null === (e = n.lastBaseUpdate) ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t)
}
function Ya(e, t, n, r) {
  var l = e.updateQueue
  Ha = !1
  var a = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    i = l.shared.pending
  if (null !== i) {
    l.shared.pending = null
    var u = i,
      s = u.next
    ;(u.next = null), null === o ? (a = s) : (o.next = s), (o = u)
    var c = e.alternate
    if (null !== c) {
      var f = (c = c.updateQueue).lastBaseUpdate
      f !== o &&
        (null === f ? (c.firstBaseUpdate = s) : (f.next = s),
        (c.lastBaseUpdate = u))
    }
  }
  if (null !== a) {
    for (f = l.baseState, o = 0, c = s = u = null; ; ) {
      i = a.lane
      var d = a.eventTime
      if ((r & i) === i) {
        null !== c &&
          (c = c.next =
            {
              eventTime: d,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            })
        e: {
          var p = e,
            h = a
          switch (((i = t), (d = n), h.tag)) {
            case 1:
              if ('function' == typeof (p = h.payload)) {
                f = p.call(d, f, i)
                break e
              }
              f = p
              break e
            case 3:
              p.flags = (-4097 & p.flags) | 64
            case 0:
              if (
                null ==
                (i = 'function' == typeof (p = h.payload) ? p.call(d, f, i) : p)
              )
                break e
              f = H({}, f, i)
              break e
            case 2:
              Ha = !0
          }
        }
        null !== a.callback &&
          ((e.flags |= 32),
          null === (i = l.effects) ? (l.effects = [a]) : i.push(a))
      } else
        (d = {
          eventTime: d,
          lane: i,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          null === c ? ((s = c = d), (u = f)) : (c = c.next = d),
          (o |= i)
      if (null === (a = a.next)) {
        if (null === (i = l.shared.pending)) break
        ;(a = i.next),
          (i.next = null),
          (l.lastBaseUpdate = i),
          (l.shared.pending = null)
      }
    }
    null === c && (u = f),
      (l.baseState = u),
      (l.firstBaseUpdate = s),
      (l.lastBaseUpdate = c),
      (Su |= o),
      (e.lanes = o),
      (e.memoizedState = f)
  }
}
function Xa(e, t, n) {
  if (((e = t.effects), (t.effects = null), null !== e))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback
      if (null !== l) {
        if (((r.callback = null), (r = n), 'function' != typeof l))
          throw Error($(191, l))
        l.call(r)
      }
    }
}
var Ga = new W.Component().refs
function Za(e, t, n, r) {
  ;(n = null == (n = n(r, (t = e.memoizedState))) ? t : H({}, t, n)),
    (e.memoizedState = n),
    0 === e.lanes && (e.updateQueue.baseState = n)
}
var Ja = {
  isMounted: function (e) {
    return !!(e = e._reactInternals) && Dt(e) === e
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals
    var r = Ku(),
      l = Yu(e),
      a = Qa(r, l)
    ;(a.payload = t), null != n && (a.callback = n), qa(e, a), Xu(e, l, r)
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals
    var r = Ku(),
      l = Yu(e),
      a = Qa(r, l)
    ;(a.tag = 1),
      (a.payload = t),
      null != n && (a.callback = n),
      qa(e, a),
      Xu(e, l, r)
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals
    var n = Ku(),
      r = Yu(e),
      l = Qa(n, r)
    ;(l.tag = 2), null != t && (l.callback = t), qa(e, l), Xu(e, r, n)
  },
}
function eo(e, t, n, r, l, a, o) {
  return 'function' == typeof (e = e.stateNode).shouldComponentUpdate
    ? e.shouldComponentUpdate(r, a, o)
    : !t.prototype ||
        !t.prototype.isPureReactComponent ||
        !Kr(n, r) ||
        !Kr(l, a)
}
function to(e, t, n) {
  var r = !1,
    l = Kl,
    a = t.contextType
  return (
    'object' == typeof a && null !== a
      ? (a = Wa(a))
      : ((l = Jl(t) ? Gl : Yl.current),
        (a = (r = null != (r = t.contextTypes)) ? Zl(e, l) : Kl)),
    (t = new t(n, a)),
    (e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null),
    (t.updater = Ja),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = a)),
    t
  )
}
function no(e, t, n, r) {
  ;(e = t.state),
    'function' == typeof t.componentWillReceiveProps &&
      t.componentWillReceiveProps(n, r),
    'function' == typeof t.UNSAFE_componentWillReceiveProps &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ja.enqueueReplaceState(t, t.state, null)
}
function ro(e, t, n, r) {
  var l = e.stateNode
  ;(l.props = n), (l.state = e.memoizedState), (l.refs = Ga), Ba(e)
  var a = t.contextType
  'object' == typeof a && null !== a
    ? (l.context = Wa(a))
    : ((a = Jl(t) ? Gl : Yl.current), (l.context = Zl(e, a))),
    Ya(e, n, l, r),
    (l.state = e.memoizedState),
    'function' == typeof (a = t.getDerivedStateFromProps) &&
      (Za(e, t, a, n), (l.state = e.memoizedState)),
    'function' == typeof t.getDerivedStateFromProps ||
      'function' == typeof l.getSnapshotBeforeUpdate ||
      ('function' != typeof l.UNSAFE_componentWillMount &&
        'function' != typeof l.componentWillMount) ||
      ((t = l.state),
      'function' == typeof l.componentWillMount && l.componentWillMount(),
      'function' == typeof l.UNSAFE_componentWillMount &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && Ja.enqueueReplaceState(l, l.state, null),
      Ya(e, n, l, r),
      (l.state = e.memoizedState)),
    'function' == typeof l.componentDidMount && (e.flags |= 4)
}
var lo = Array.isArray
function ao(e, t, n) {
  if (null !== (e = n.ref) && 'function' != typeof e && 'object' != typeof e) {
    if (n._owner) {
      if ((n = n._owner)) {
        if (1 !== n.tag) throw Error($(309))
        var r = n.stateNode
      }
      if (!r) throw Error($(147, e))
      var l = '' + e
      return null !== t &&
        null !== t.ref &&
        'function' == typeof t.ref &&
        t.ref._stringRef === l
        ? t.ref
        : (((t = function (e) {
            var t = r.refs
            t === Ga && (t = r.refs = {}), null === e ? delete t[l] : (t[l] = e)
          })._stringRef = l),
          t)
    }
    if ('string' != typeof e) throw Error($(284))
    if (!n._owner) throw Error($(290, e))
  }
  return e
}
function oo(e, t) {
  if ('textarea' !== e.type)
    throw Error(
      $(
        31,
        '[object Object]' === Object.prototype.toString.call(t)
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : t,
      ),
    )
}
function io(e) {
  function t(t, n) {
    if (e) {
      var r = t.lastEffect
      null !== r
        ? ((r.nextEffect = n), (t.lastEffect = n))
        : (t.firstEffect = t.lastEffect = n),
        (n.nextEffect = null),
        (n.flags = 8)
    }
  }
  function n(n, r) {
    if (!e) return null
    for (; null !== r; ) t(n, r), (r = r.sibling)
    return null
  }
  function r(e, t) {
    for (e = new Map(); null !== t; )
      null !== t.key ? e.set(t.key, t) : e.set(t.index, t), (t = t.sibling)
    return e
  }
  function l(e, t) {
    return ((e = Os(e, t)).index = 0), (e.sibling = null), e
  }
  function a(t, n, r) {
    return (
      (t.index = r),
      e
        ? null !== (r = t.alternate)
          ? (r = r.index) < n
            ? ((t.flags = 2), n)
            : r
          : ((t.flags = 2), n)
        : n
    )
  }
  function o(t) {
    return e && null === t.alternate && (t.flags = 2), t
  }
  function i(e, t, n, r) {
    return null === t || 6 !== t.tag
      ? (((t = Ls(n, e.mode, r)).return = e), t)
      : (((t = l(t, n)).return = e), t)
  }
  function u(e, t, n, r) {
    return null !== t && t.elementType === n.type
      ? (((r = l(t, n.props)).ref = ao(e, t, n)), (r.return = e), r)
      : (((r = Ts(n.type, n.key, n.props, null, e.mode, r)).ref = ao(e, t, n)),
        (r.return = e),
        r)
  }
  function s(e, t, n, r) {
    return null === t ||
      4 !== t.tag ||
      t.stateNode.containerInfo !== n.containerInfo ||
      t.stateNode.implementation !== n.implementation
      ? (((t = Rs(n, e.mode, r)).return = e), t)
      : (((t = l(t, n.children || [])).return = e), t)
  }
  function c(e, t, n, r, a) {
    return null === t || 7 !== t.tag
      ? (((t = Ns(n, e.mode, r, a)).return = e), t)
      : (((t = l(t, n)).return = e), t)
  }
  function f(e, t, n) {
    if ('string' == typeof t || 'number' == typeof t)
      return ((t = Ls('' + t, e.mode, n)).return = e), t
    if ('object' == typeof t && null !== t) {
      switch (t.$$typeof) {
        case ie:
          return (
            ((n = Ts(t.type, t.key, t.props, null, e.mode, n)).ref = ao(
              e,
              null,
              t,
            )),
            (n.return = e),
            n
          )
        case ue:
          return ((t = Rs(t, e.mode, n)).return = e), t
      }
      if (lo(t) || Pe(t)) return ((t = Ns(t, e.mode, n, null)).return = e), t
      oo(e, t)
    }
    return null
  }
  function d(e, t, n, r) {
    var l = null !== t ? t.key : null
    if ('string' == typeof n || 'number' == typeof n)
      return null !== l ? null : i(e, t, '' + n, r)
    if ('object' == typeof n && null !== n) {
      switch (n.$$typeof) {
        case ie:
          return n.key === l
            ? n.type === se
              ? c(e, t, n.props.children, r, l)
              : u(e, t, n, r)
            : null
        case ue:
          return n.key === l ? s(e, t, n, r) : null
      }
      if (lo(n) || Pe(n)) return null !== l ? null : c(e, t, n, r, null)
      oo(e, n)
    }
    return null
  }
  function p(e, t, n, r, l) {
    if ('string' == typeof r || 'number' == typeof r)
      return i(t, (e = e.get(n) || null), '' + r, l)
    if ('object' == typeof r && null !== r) {
      switch (r.$$typeof) {
        case ie:
          return (
            (e = e.get(null === r.key ? n : r.key) || null),
            r.type === se ? c(t, e, r.props.children, l, r.key) : u(t, e, r, l)
          )
        case ue:
          return s(t, (e = e.get(null === r.key ? n : r.key) || null), r, l)
      }
      if (lo(r) || Pe(r)) return c(t, (e = e.get(n) || null), r, l, null)
      oo(t, r)
    }
    return null
  }
  return function (i, u, s, c) {
    var h =
      'object' == typeof s && null !== s && s.type === se && null === s.key
    h && (s = s.props.children)
    var m = 'object' == typeof s && null !== s
    if (m)
      switch (s.$$typeof) {
        case ie:
          e: {
            for (m = s.key, h = u; null !== h; ) {
              if (h.key === m) {
                switch (h.tag) {
                  case 7:
                    if (s.type === se) {
                      n(i, h.sibling),
                        ((u = l(h, s.props.children)).return = i),
                        (i = u)
                      break e
                    }
                    break
                  default:
                    if (h.elementType === s.type) {
                      n(i, h.sibling),
                        ((u = l(h, s.props)).ref = ao(i, h, s)),
                        (u.return = i),
                        (i = u)
                      break e
                    }
                }
                n(i, h)
                break
              }
              t(i, h), (h = h.sibling)
            }
            s.type === se
              ? (((u = Ns(s.props.children, i.mode, c, s.key)).return = i),
                (i = u))
              : (((c = Ts(s.type, s.key, s.props, null, i.mode, c)).ref = ao(
                  i,
                  u,
                  s,
                )),
                (c.return = i),
                (i = c))
          }
          return o(i)
        case ue:
          e: {
            for (h = s.key; null !== u; ) {
              if (u.key === h) {
                if (
                  4 === u.tag &&
                  u.stateNode.containerInfo === s.containerInfo &&
                  u.stateNode.implementation === s.implementation
                ) {
                  n(i, u.sibling),
                    ((u = l(u, s.children || [])).return = i),
                    (i = u)
                  break e
                }
                n(i, u)
                break
              }
              t(i, u), (u = u.sibling)
            }
            ;((u = Rs(s, i.mode, c)).return = i), (i = u)
          }
          return o(i)
      }
    if ('string' == typeof s || 'number' == typeof s)
      return (
        (s = '' + s),
        null !== u && 6 === u.tag
          ? (n(i, u.sibling), ((u = l(u, s)).return = i), (i = u))
          : (n(i, u), ((u = Ls(s, i.mode, c)).return = i), (i = u)),
        o(i)
      )
    if (lo(s))
      return (function (l, o, i, u) {
        for (
          var s = null, c = null, h = o, m = (o = 0), v = null;
          null !== h && m < i.length;
          m++
        ) {
          h.index > m ? ((v = h), (h = null)) : (v = h.sibling)
          var g = d(l, h, i[m], u)
          if (null === g) {
            null === h && (h = v)
            break
          }
          e && h && null === g.alternate && t(l, h),
            (o = a(g, o, m)),
            null === c ? (s = g) : (c.sibling = g),
            (c = g),
            (h = v)
        }
        if (m === i.length) return n(l, h), s
        if (null === h) {
          for (; m < i.length; m++)
            null !== (h = f(l, i[m], u)) &&
              ((o = a(h, o, m)),
              null === c ? (s = h) : (c.sibling = h),
              (c = h))
          return s
        }
        for (h = r(l, h); m < i.length; m++)
          null !== (v = p(h, l, m, i[m], u)) &&
            (e && null !== v.alternate && h.delete(null === v.key ? m : v.key),
            (o = a(v, o, m)),
            null === c ? (s = v) : (c.sibling = v),
            (c = v))
        return (
          e &&
            h.forEach(function (e) {
              return t(l, e)
            }),
          s
        )
      })(i, u, s, c)
    if (Pe(s))
      return (function (l, o, i, u) {
        var s = Pe(i)
        if ('function' != typeof s) throw Error($(150))
        if (null == (i = s.call(i))) throw Error($(151))
        for (
          var c = (s = null), h = o, m = (o = 0), v = null, g = i.next();
          null !== h && !g.done;
          m++, g = i.next()
        ) {
          h.index > m ? ((v = h), (h = null)) : (v = h.sibling)
          var y = d(l, h, g.value, u)
          if (null === y) {
            null === h && (h = v)
            break
          }
          e && h && null === y.alternate && t(l, h),
            (o = a(y, o, m)),
            null === c ? (s = y) : (c.sibling = y),
            (c = y),
            (h = v)
        }
        if (g.done) return n(l, h), s
        if (null === h) {
          for (; !g.done; m++, g = i.next())
            null !== (g = f(l, g.value, u)) &&
              ((o = a(g, o, m)),
              null === c ? (s = g) : (c.sibling = g),
              (c = g))
          return s
        }
        for (h = r(l, h); !g.done; m++, g = i.next())
          null !== (g = p(h, l, m, g.value, u)) &&
            (e && null !== g.alternate && h.delete(null === g.key ? m : g.key),
            (o = a(g, o, m)),
            null === c ? (s = g) : (c.sibling = g),
            (c = g))
        return (
          e &&
            h.forEach(function (e) {
              return t(l, e)
            }),
          s
        )
      })(i, u, s, c)
    if ((m && oo(i, s), void 0 === s && !h))
      switch (i.tag) {
        case 1:
        case 22:
        case 0:
        case 11:
        case 15:
          throw Error($(152, Le(i.type) || 'Component'))
      }
    return n(i, u)
  }
}
var uo = io(!0),
  so = io(!1),
  co = {},
  fo = $l(co),
  po = $l(co),
  ho = $l(co)
function mo(e) {
  if (e === co) throw Error($(174))
  return e
}
function vo(e, t) {
  switch ((ql(ho, t), ql(po, e), ql(fo, co), (e = t.nodeType))) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Je(null, '')
      break
    default:
      t = Je(
        (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
        (e = e.tagName),
      )
  }
  Ql(fo), ql(fo, t)
}
function go() {
  Ql(fo), Ql(po), Ql(ho)
}
function yo(e) {
  mo(ho.current)
  var t = mo(fo.current),
    n = Je(t, e.type)
  t !== n && (ql(po, e), ql(fo, n))
}
function bo(e) {
  po.current === e && (Ql(fo), Ql(po))
}
var wo = $l(0)
function ko(e) {
  for (var t = e; null !== t; ) {
    if (13 === t.tag) {
      var n = t.memoizedState
      if (
        null !== n &&
        (null === (n = n.dehydrated) || '$?' === n.data || '$!' === n.data)
      )
        return t
    } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
      if (0 != (64 & t.flags)) return t
    } else if (null !== t.child) {
      ;(t.child.return = t), (t = t.child)
      continue
    }
    if (t === e) break
    for (; null === t.sibling; ) {
      if (null === t.return || t.return === e) return null
      t = t.return
    }
    ;(t.sibling.return = t.return), (t = t.sibling)
  }
  return null
}
var Eo = null,
  So = null,
  _o = !1
function xo(e, t) {
  var n = Cs(5, null, null, 0)
  ;(n.elementType = 'DELETED'),
    (n.type = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (n.flags = 8),
    null !== e.lastEffect
      ? ((e.lastEffect.nextEffect = n), (e.lastEffect = n))
      : (e.firstEffect = e.lastEffect = n)
}
function Co(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type
      return (
        null !==
          (t =
            1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t) && ((e.stateNode = t), !0)
      )
    case 6:
      return (
        null !== (t = '' === e.pendingProps || 3 !== t.nodeType ? null : t) &&
        ((e.stateNode = t), !0)
      )
    case 13:
    default:
      return !1
  }
}
function Po(e) {
  if (_o) {
    var t = So
    if (t) {
      var n = t
      if (!Co(e, t)) {
        if (!(t = Nl(n.nextSibling)) || !Co(e, t))
          return (e.flags = (-1025 & e.flags) | 2), (_o = !1), void (Eo = e)
        xo(Eo, n)
      }
      ;(Eo = e), (So = Nl(t.firstChild))
    } else (e.flags = (-1025 & e.flags) | 2), (_o = !1), (Eo = e)
  }
}
function Oo(e) {
  for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag; )
    e = e.return
  Eo = e
}
function To(e) {
  if (e !== Eo) return !1
  if (!_o) return Oo(e), (_o = !0), !1
  var t = e.type
  if (5 !== e.tag || ('head' !== t && 'body' !== t && !Cl(t, e.memoizedProps)))
    for (t = So; t; ) xo(e, t), (t = Nl(t.nextSibling))
  if ((Oo(e), 13 === e.tag)) {
    if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
      throw Error($(317))
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (8 === e.nodeType) {
          var n = e.data
          if ('/$' === n) {
            if (0 === t) {
              So = Nl(e.nextSibling)
              break e
            }
            t--
          } else ('$' !== n && '$!' !== n && '$?' !== n) || t++
        }
        e = e.nextSibling
      }
      So = null
    }
  } else So = Eo ? Nl(e.stateNode.nextSibling) : null
  return !0
}
function No() {
  ;(So = Eo = null), (_o = !1)
}
var zo = []
function Lo() {
  for (var e = 0; e < zo.length; e++) zo[e]._workInProgressVersionPrimary = null
  zo.length = 0
}
var Ro = oe.ReactCurrentDispatcher,
  Mo = oe.ReactCurrentBatchConfig,
  Do = 0,
  Fo = null,
  Io = null,
  Uo = null,
  Ao = !1,
  jo = !1
function Vo() {
  throw Error($(321))
}
function Wo(e, t) {
  if (null === t) return !1
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Qr(e[n], t[n])) return !1
  return !0
}
function Ho(e, t, n, r, l, a) {
  if (
    ((Do = a),
    (Fo = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ro.current = null === e || null === e.memoizedState ? mi : vi),
    (e = n(r, l)),
    jo)
  ) {
    a = 0
    do {
      if (((jo = !1), !(25 > a))) throw Error($(301))
      ;(a += 1),
        (Uo = Io = null),
        (t.updateQueue = null),
        (Ro.current = gi),
        (e = n(r, l))
    } while (jo)
  }
  if (
    ((Ro.current = hi),
    (t = null !== Io && null !== Io.next),
    (Do = 0),
    (Uo = Io = Fo = null),
    (Ao = !1),
    t)
  )
    throw Error($(300))
  return e
}
function Bo() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  }
  return null === Uo ? (Fo.memoizedState = Uo = e) : (Uo = Uo.next = e), Uo
}
function $o() {
  if (null === Io) {
    var e = Fo.alternate
    e = null !== e ? e.memoizedState : null
  } else e = Io.next
  var t = null === Uo ? Fo.memoizedState : Uo.next
  if (null !== t) (Uo = t), (Io = e)
  else {
    if (null === e) throw Error($(310))
    ;(e = {
      memoizedState: (Io = e).memoizedState,
      baseState: Io.baseState,
      baseQueue: Io.baseQueue,
      queue: Io.queue,
      next: null,
    }),
      null === Uo ? (Fo.memoizedState = Uo = e) : (Uo = Uo.next = e)
  }
  return Uo
}
function Qo(e, t) {
  return 'function' == typeof t ? t(e) : t
}
function qo(e) {
  var t = $o(),
    n = t.queue
  if (null === n) throw Error($(311))
  n.lastRenderedReducer = e
  var r = Io,
    l = r.baseQueue,
    a = n.pending
  if (null !== a) {
    if (null !== l) {
      var o = l.next
      ;(l.next = a.next), (a.next = o)
    }
    ;(r.baseQueue = l = a), (n.pending = null)
  }
  if (null !== l) {
    ;(l = l.next), (r = r.baseState)
    var i = (o = a = null),
      u = l
    do {
      var s = u.lane
      if ((Do & s) === s)
        null !== i &&
          (i = i.next =
            {
              lane: 0,
              action: u.action,
              eagerReducer: u.eagerReducer,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.eagerReducer === e ? u.eagerState : e(r, u.action))
      else {
        var c = {
          lane: s,
          action: u.action,
          eagerReducer: u.eagerReducer,
          eagerState: u.eagerState,
          next: null,
        }
        null === i ? ((o = i = c), (a = r)) : (i = i.next = c),
          (Fo.lanes |= s),
          (Su |= s)
      }
      u = u.next
    } while (null !== u && u !== l)
    null === i ? (a = r) : (i.next = o),
      Qr(r, t.memoizedState) || (bi = !0),
      (t.memoizedState = r),
      (t.baseState = a),
      (t.baseQueue = i),
      (n.lastRenderedState = r)
  }
  return [t.memoizedState, n.dispatch]
}
function Ko(e) {
  var t = $o(),
    n = t.queue
  if (null === n) throw Error($(311))
  n.lastRenderedReducer = e
  var r = n.dispatch,
    l = n.pending,
    a = t.memoizedState
  if (null !== l) {
    n.pending = null
    var o = (l = l.next)
    do {
      ;(a = e(a, o.action)), (o = o.next)
    } while (o !== l)
    Qr(a, t.memoizedState) || (bi = !0),
      (t.memoizedState = a),
      null === t.baseQueue && (t.baseState = a),
      (n.lastRenderedState = a)
  }
  return [a, r]
}
function Yo(e, t, n) {
  var r = t._getVersion
  r = r(t._source)
  var l = t._workInProgressVersionPrimary
  if (
    (null !== l
      ? (e = l === r)
      : ((e = e.mutableReadLanes),
        (e = (Do & e) === e) &&
          ((t._workInProgressVersionPrimary = r), zo.push(t))),
    e)
  )
    return n(t._source)
  throw (zo.push(t), Error($(350)))
}
function Xo(e, t, n, r) {
  var l = mu
  if (null === l) throw Error($(349))
  var a = t._getVersion,
    o = a(t._source),
    i = Ro.current,
    u = i.useState(function () {
      return Yo(l, t, n)
    }),
    s = u[1],
    c = u[0]
  u = Uo
  var f = e.memoizedState,
    d = f.refs,
    p = d.getSnapshot,
    h = f.source
  f = f.subscribe
  var m = Fo
  return (
    (e.memoizedState = { refs: d, source: t, subscribe: r }),
    i.useEffect(
      function () {
        ;(d.getSnapshot = n), (d.setSnapshot = s)
        var e = a(t._source)
        if (!Qr(o, e)) {
          ;(e = n(t._source)),
            Qr(c, e) ||
              (s(e), (e = Yu(m)), (l.mutableReadLanes |= e & l.pendingLanes)),
            (e = l.mutableReadLanes),
            (l.entangledLanes |= e)
          for (var r = l.entanglements, i = e; 0 < i; ) {
            var u = 31 - Nn(i),
              f = 1 << u
            ;(r[u] |= e), (i &= ~f)
          }
        }
      },
      [n, t, r],
    ),
    i.useEffect(
      function () {
        return r(t._source, function () {
          var e = d.getSnapshot,
            n = d.setSnapshot
          try {
            n(e(t._source))
            var r = Yu(m)
            l.mutableReadLanes |= r & l.pendingLanes
          } catch (a) {
            n(function () {
              throw a
            })
          }
        })
      },
      [t, r],
    ),
    (Qr(p, n) && Qr(h, t) && Qr(f, r)) ||
      (((e = {
        pending: null,
        dispatch: null,
        lastRenderedReducer: Qo,
        lastRenderedState: c,
      }).dispatch = s =
        pi.bind(null, Fo, e)),
      (u.queue = e),
      (u.baseQueue = null),
      (c = Yo(l, t, n)),
      (u.memoizedState = u.baseState = c)),
    c
  )
}
function Go(e, t, n) {
  return Xo($o(), e, t, n)
}
function Zo(e) {
  var t = Bo()
  return (
    'function' == typeof e && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = (e = t.queue =
      {
        pending: null,
        dispatch: null,
        lastRenderedReducer: Qo,
        lastRenderedState: e,
      }).dispatch =
      pi.bind(null, Fo, e)),
    [t.memoizedState, e]
  )
}
function Jo(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    null === (t = Fo.updateQueue)
      ? ((t = { lastEffect: null }),
        (Fo.updateQueue = t),
        (t.lastEffect = e.next = e))
      : null === (n = t.lastEffect)
      ? (t.lastEffect = e.next = e)
      : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
    e
  )
}
function ei(e) {
  return (e = { current: e }), (Bo().memoizedState = e)
}
function ti() {
  return $o().memoizedState
}
function ni(e, t, n, r) {
  var l = Bo()
  ;(Fo.flags |= e),
    (l.memoizedState = Jo(1 | t, n, void 0, void 0 === r ? null : r))
}
function ri(e, t, n, r) {
  var l = $o()
  r = void 0 === r ? null : r
  var a = void 0
  if (null !== Io) {
    var o = Io.memoizedState
    if (((a = o.destroy), null !== r && Wo(r, o.deps)))
      return void Jo(t, n, a, r)
  }
  ;(Fo.flags |= e), (l.memoizedState = Jo(1 | t, n, a, r))
}
function li(e, t) {
  return ni(516, 4, e, t)
}
function ai(e, t) {
  return ri(516, 4, e, t)
}
function oi(e, t) {
  return ri(4, 2, e, t)
}
function ii(e, t) {
  return 'function' == typeof t
    ? ((e = e()),
      t(e),
      function () {
        t(null)
      })
    : null != t
    ? ((e = e()),
      (t.current = e),
      function () {
        t.current = null
      })
    : void 0
}
function ui(e, t, n) {
  return (
    (n = null != n ? n.concat([e]) : null), ri(4, 2, ii.bind(null, t, e), n)
  )
}
function si() {}
function ci(e, t) {
  var n = $o()
  t = void 0 === t ? null : t
  var r = n.memoizedState
  return null !== r && null !== t && Wo(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e)
}
function fi(e, t) {
  var n = $o()
  t = void 0 === t ? null : t
  var r = n.memoizedState
  return null !== r && null !== t && Wo(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e)
}
function di(e, t) {
  var n = Ca()
  Oa(98 > n ? 98 : n, function () {
    e(!0)
  }),
    Oa(97 < n ? 97 : n, function () {
      var n = Mo.transition
      Mo.transition = 1
      try {
        e(!1), t()
      } finally {
        Mo.transition = n
      }
    })
}
function pi(e, t, n) {
  var r = Ku(),
    l = Yu(e),
    a = {
      lane: l,
      action: n,
      eagerReducer: null,
      eagerState: null,
      next: null,
    },
    o = t.pending
  if (
    (null === o ? (a.next = a) : ((a.next = o.next), (o.next = a)),
    (t.pending = a),
    (o = e.alternate),
    e === Fo || (null !== o && o === Fo))
  )
    jo = Ao = !0
  else {
    if (
      0 === e.lanes &&
      (null === o || 0 === o.lanes) &&
      null !== (o = t.lastRenderedReducer)
    )
      try {
        var i = t.lastRenderedState,
          u = o(i, n)
        if (((a.eagerReducer = o), (a.eagerState = u), Qr(u, i))) return
      } catch (s) {}
    Xu(e, l, r)
  }
}
var hi = {
    readContext: Wa,
    useCallback: Vo,
    useContext: Vo,
    useEffect: Vo,
    useImperativeHandle: Vo,
    useLayoutEffect: Vo,
    useMemo: Vo,
    useReducer: Vo,
    useRef: Vo,
    useState: Vo,
    useDebugValue: Vo,
    useDeferredValue: Vo,
    useTransition: Vo,
    useMutableSource: Vo,
    useOpaqueIdentifier: Vo,
    unstable_isNewReconciler: !1,
  },
  mi = {
    readContext: Wa,
    useCallback: function (e, t) {
      return (Bo().memoizedState = [e, void 0 === t ? null : t]), e
    },
    useContext: Wa,
    useEffect: li,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = null != n ? n.concat([e]) : null), ni(4, 2, ii.bind(null, t, e), n)
      )
    },
    useLayoutEffect: function (e, t) {
      return ni(4, 2, e, t)
    },
    useMemo: function (e, t) {
      var n = Bo()
      return (
        (t = void 0 === t ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      )
    },
    useReducer: function (e, t, n) {
      var r = Bo()
      return (
        (t = void 0 !== n ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = (e = r.queue =
          {
            pending: null,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }).dispatch =
          pi.bind(null, Fo, e)),
        [r.memoizedState, e]
      )
    },
    useRef: ei,
    useState: Zo,
    useDebugValue: si,
    useDeferredValue: function (e) {
      var t = Zo(e),
        n = t[0],
        r = t[1]
      return (
        li(
          function () {
            var t = Mo.transition
            Mo.transition = 1
            try {
              r(e)
            } finally {
              Mo.transition = t
            }
          },
          [e],
        ),
        n
      )
    },
    useTransition: function () {
      var e = Zo(!1),
        t = e[0]
      return ei((e = di.bind(null, e[1]))), [e, t]
    },
    useMutableSource: function (e, t, n) {
      var r = Bo()
      return (
        (r.memoizedState = {
          refs: { getSnapshot: t, setSnapshot: null },
          source: e,
          subscribe: n,
        }),
        Xo(r, e, t, n)
      )
    },
    useOpaqueIdentifier: function () {
      if (_o) {
        var e = !1,
          t = (function (e) {
            return { $$typeof: we, toString: e, valueOf: e }
          })(function () {
            throw (
              (e || ((e = !0), n('r:' + (Ll++).toString(36))), Error($(355)))
            )
          }),
          n = Zo(t)[1]
        return (
          0 == (2 & Fo.mode) &&
            ((Fo.flags |= 516),
            Jo(
              5,
              function () {
                n('r:' + (Ll++).toString(36))
              },
              void 0,
              null,
            )),
          t
        )
      }
      return Zo((t = 'r:' + (Ll++).toString(36))), t
    },
    unstable_isNewReconciler: !1,
  },
  vi = {
    readContext: Wa,
    useCallback: ci,
    useContext: Wa,
    useEffect: ai,
    useImperativeHandle: ui,
    useLayoutEffect: oi,
    useMemo: fi,
    useReducer: qo,
    useRef: ti,
    useState: function () {
      return qo(Qo)
    },
    useDebugValue: si,
    useDeferredValue: function (e) {
      var t = qo(Qo),
        n = t[0],
        r = t[1]
      return (
        ai(
          function () {
            var t = Mo.transition
            Mo.transition = 1
            try {
              r(e)
            } finally {
              Mo.transition = t
            }
          },
          [e],
        ),
        n
      )
    },
    useTransition: function () {
      var e = qo(Qo)[0]
      return [ti().current, e]
    },
    useMutableSource: Go,
    useOpaqueIdentifier: function () {
      return qo(Qo)[0]
    },
    unstable_isNewReconciler: !1,
  },
  gi = {
    readContext: Wa,
    useCallback: ci,
    useContext: Wa,
    useEffect: ai,
    useImperativeHandle: ui,
    useLayoutEffect: oi,
    useMemo: fi,
    useReducer: Ko,
    useRef: ti,
    useState: function () {
      return Ko(Qo)
    },
    useDebugValue: si,
    useDeferredValue: function (e) {
      var t = Ko(Qo),
        n = t[0],
        r = t[1]
      return (
        ai(
          function () {
            var t = Mo.transition
            Mo.transition = 1
            try {
              r(e)
            } finally {
              Mo.transition = t
            }
          },
          [e],
        ),
        n
      )
    },
    useTransition: function () {
      var e = Ko(Qo)[0]
      return [ti().current, e]
    },
    useMutableSource: Go,
    useOpaqueIdentifier: function () {
      return Ko(Qo)[0]
    },
    unstable_isNewReconciler: !1,
  },
  yi = oe.ReactCurrentOwner,
  bi = !1
function wi(e, t, n, r) {
  t.child = null === e ? so(t, null, n, r) : uo(t, e.child, n, r)
}
function ki(e, t, n, r, l) {
  n = n.render
  var a = t.ref
  return (
    Va(t, l),
    (r = Ho(e, t, n, r, a, l)),
    null === e || bi
      ? ((t.flags |= 1), wi(e, t, r, l), t.child)
      : ((t.updateQueue = e.updateQueue),
        (t.flags &= -517),
        (e.lanes &= ~l),
        Vi(e, t, l))
  )
}
function Ei(e, t, n, r, l, a) {
  if (null === e) {
    var o = n.type
    return 'function' != typeof o ||
      Ps(o) ||
      void 0 !== o.defaultProps ||
      null !== n.compare ||
      void 0 !== n.defaultProps
      ? (((e = Ts(n.type, null, r, t, t.mode, a)).ref = t.ref),
        (e.return = t),
        (t.child = e))
      : ((t.tag = 15), (t.type = o), Si(e, t, o, r, l, a))
  }
  return (
    (o = e.child),
    0 == (l & a) &&
    ((l = o.memoizedProps),
    (n = null !== (n = n.compare) ? n : Kr)(l, r) && e.ref === t.ref)
      ? Vi(e, t, a)
      : ((t.flags |= 1),
        ((e = Os(o, r)).ref = t.ref),
        (e.return = t),
        (t.child = e))
  )
}
function Si(e, t, n, r, l, a) {
  if (null !== e && Kr(e.memoizedProps, r) && e.ref === t.ref) {
    if (((bi = !1), 0 == (a & l))) return (t.lanes = e.lanes), Vi(e, t, a)
    0 != (16384 & e.flags) && (bi = !0)
  }
  return Ci(e, t, n, r, a)
}
function _i(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    a = null !== e ? e.memoizedState : null
  if ('hidden' === r.mode || 'unstable-defer-without-hiding' === r.mode)
    if (0 == (4 & t.mode)) (t.memoizedState = { baseLanes: 0 }), ls(t, n)
    else {
      if (0 == (1073741824 & n))
        return (
          (e = null !== a ? a.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = { baseLanes: e }),
          ls(t, e),
          null
        )
      ;(t.memoizedState = { baseLanes: 0 }), ls(t, null !== a ? a.baseLanes : n)
    }
  else
    null !== a ? ((r = a.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ls(t, r)
  return wi(e, t, l, n), t.child
}
function xi(e, t) {
  var n = t.ref
  ;((null === e && null !== n) || (null !== e && e.ref !== n)) &&
    (t.flags |= 128)
}
function Ci(e, t, n, r, l) {
  var a = Jl(n) ? Gl : Yl.current
  return (
    (a = Zl(t, a)),
    Va(t, l),
    (n = Ho(e, t, n, r, a, l)),
    null === e || bi
      ? ((t.flags |= 1), wi(e, t, n, l), t.child)
      : ((t.updateQueue = e.updateQueue),
        (t.flags &= -517),
        (e.lanes &= ~l),
        Vi(e, t, l))
  )
}
function Pi(e, t, n, r, l) {
  if (Jl(n)) {
    var a = !0
    ra(t)
  } else a = !1
  if ((Va(t, l), null === t.stateNode))
    null !== e && ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
      to(t, n, r),
      ro(t, n, r, l),
      (r = !0)
  else if (null === e) {
    var o = t.stateNode,
      i = t.memoizedProps
    o.props = i
    var u = o.context,
      s = n.contextType
    'object' == typeof s && null !== s
      ? (s = Wa(s))
      : (s = Zl(t, (s = Jl(n) ? Gl : Yl.current)))
    var c = n.getDerivedStateFromProps,
      f =
        'function' == typeof c || 'function' == typeof o.getSnapshotBeforeUpdate
    f ||
      ('function' != typeof o.UNSAFE_componentWillReceiveProps &&
        'function' != typeof o.componentWillReceiveProps) ||
      ((i !== r || u !== s) && no(t, o, r, s)),
      (Ha = !1)
    var d = t.memoizedState
    ;(o.state = d),
      Ya(t, r, o, l),
      (u = t.memoizedState),
      i !== r || d !== u || Xl.current || Ha
        ? ('function' == typeof c && (Za(t, n, c, r), (u = t.memoizedState)),
          (i = Ha || eo(t, n, i, r, d, u, s))
            ? (f ||
                ('function' != typeof o.UNSAFE_componentWillMount &&
                  'function' != typeof o.componentWillMount) ||
                ('function' == typeof o.componentWillMount &&
                  o.componentWillMount(),
                'function' == typeof o.UNSAFE_componentWillMount &&
                  o.UNSAFE_componentWillMount()),
              'function' == typeof o.componentDidMount && (t.flags |= 4))
            : ('function' == typeof o.componentDidMount && (t.flags |= 4),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (o.props = r),
          (o.state = u),
          (o.context = s),
          (r = i))
        : ('function' == typeof o.componentDidMount && (t.flags |= 4), (r = !1))
  } else {
    ;(o = t.stateNode),
      $a(e, t),
      (i = t.memoizedProps),
      (s = t.type === t.elementType ? i : Ra(t.type, i)),
      (o.props = s),
      (f = t.pendingProps),
      (d = o.context),
      'object' == typeof (u = n.contextType) && null !== u
        ? (u = Wa(u))
        : (u = Zl(t, (u = Jl(n) ? Gl : Yl.current)))
    var p = n.getDerivedStateFromProps
    ;(c =
      'function' == typeof p ||
      'function' == typeof o.getSnapshotBeforeUpdate) ||
      ('function' != typeof o.UNSAFE_componentWillReceiveProps &&
        'function' != typeof o.componentWillReceiveProps) ||
      ((i !== f || d !== u) && no(t, o, r, u)),
      (Ha = !1),
      (d = t.memoizedState),
      (o.state = d),
      Ya(t, r, o, l)
    var h = t.memoizedState
    i !== f || d !== h || Xl.current || Ha
      ? ('function' == typeof p && (Za(t, n, p, r), (h = t.memoizedState)),
        (s = Ha || eo(t, n, s, r, d, h, u))
          ? (c ||
              ('function' != typeof o.UNSAFE_componentWillUpdate &&
                'function' != typeof o.componentWillUpdate) ||
              ('function' == typeof o.componentWillUpdate &&
                o.componentWillUpdate(r, h, u),
              'function' == typeof o.UNSAFE_componentWillUpdate &&
                o.UNSAFE_componentWillUpdate(r, h, u)),
            'function' == typeof o.componentDidUpdate && (t.flags |= 4),
            'function' == typeof o.getSnapshotBeforeUpdate && (t.flags |= 256))
          : ('function' != typeof o.componentDidUpdate ||
              (i === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            'function' != typeof o.getSnapshotBeforeUpdate ||
              (i === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 256),
            (t.memoizedProps = r),
            (t.memoizedState = h)),
        (o.props = r),
        (o.state = h),
        (o.context = u),
        (r = s))
      : ('function' != typeof o.componentDidUpdate ||
          (i === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        'function' != typeof o.getSnapshotBeforeUpdate ||
          (i === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 256),
        (r = !1))
  }
  return Oi(e, t, n, r, a, l)
}
function Oi(e, t, n, r, l, a) {
  xi(e, t)
  var o = 0 != (64 & t.flags)
  if (!r && !o) return l && la(t, n, !1), Vi(e, t, a)
  ;(r = t.stateNode), (yi.current = t)
  var i =
    o && 'function' != typeof n.getDerivedStateFromError ? null : r.render()
  return (
    (t.flags |= 1),
    null !== e && o
      ? ((t.child = uo(t, e.child, null, a)), (t.child = uo(t, null, i, a)))
      : wi(e, t, i, a),
    (t.memoizedState = r.state),
    l && la(t, n, !0),
    t.child
  )
}
function Ti(e) {
  var t = e.stateNode
  t.pendingContext
    ? ta(0, t.pendingContext, t.pendingContext !== t.context)
    : t.context && ta(0, t.context, !1),
    vo(e, t.containerInfo)
}
var Ni,
  zi,
  Li,
  Ri = { dehydrated: null, retryLane: 0 }
function Mi(e, t, n) {
  var r,
    l = t.pendingProps,
    a = wo.current,
    o = !1
  return (
    (r = 0 != (64 & t.flags)) ||
      (r = (null === e || null !== e.memoizedState) && 0 != (2 & a)),
    r
      ? ((o = !0), (t.flags &= -65))
      : (null !== e && null === e.memoizedState) ||
        void 0 === l.fallback ||
        !0 === l.unstable_avoidThisFallback ||
        (a |= 1),
    ql(wo, 1 & a),
    null === e
      ? (void 0 !== l.fallback && Po(t),
        (e = l.children),
        (a = l.fallback),
        o
          ? ((e = Di(t, e, a, n)),
            (t.child.memoizedState = { baseLanes: n }),
            (t.memoizedState = Ri),
            e)
          : 'number' == typeof l.unstable_expectedLoadTime
          ? ((e = Di(t, e, a, n)),
            (t.child.memoizedState = { baseLanes: n }),
            (t.memoizedState = Ri),
            (t.lanes = 33554432),
            e)
          : (((n = zs(
              { mode: 'visible', children: e },
              t.mode,
              n,
              null,
            )).return = t),
            (t.child = n)))
      : (e.memoizedState,
        o
          ? ((l = Ii(e, t, l.children, l.fallback, n)),
            (o = t.child),
            (a = e.child.memoizedState),
            (o.memoizedState =
              null === a ? { baseLanes: n } : { baseLanes: a.baseLanes | n }),
            (o.childLanes = e.childLanes & ~n),
            (t.memoizedState = Ri),
            l)
          : ((n = Fi(e, t, l.children, n)), (t.memoizedState = null), n))
  )
}
function Di(e, t, n, r) {
  var l = e.mode,
    a = e.child
  return (
    (t = { mode: 'hidden', children: t }),
    0 == (2 & l) && null !== a
      ? ((a.childLanes = 0), (a.pendingProps = t))
      : (a = zs(t, l, 0, null)),
    (n = Ns(n, l, r, null)),
    (a.return = e),
    (n.return = e),
    (a.sibling = n),
    (e.child = a),
    n
  )
}
function Fi(e, t, n, r) {
  var l = e.child
  return (
    (e = l.sibling),
    (n = Os(l, { mode: 'visible', children: n })),
    0 == (2 & t.mode) && (n.lanes = r),
    (n.return = t),
    (n.sibling = null),
    null !== e &&
      ((e.nextEffect = null),
      (e.flags = 8),
      (t.firstEffect = t.lastEffect = e)),
    (t.child = n)
  )
}
function Ii(e, t, n, r, l) {
  var a = t.mode,
    o = e.child
  e = o.sibling
  var i = { mode: 'hidden', children: n }
  return (
    0 == (2 & a) && t.child !== o
      ? (((n = t.child).childLanes = 0),
        (n.pendingProps = i),
        null !== (o = n.lastEffect)
          ? ((t.firstEffect = n.firstEffect),
            (t.lastEffect = o),
            (o.nextEffect = null))
          : (t.firstEffect = t.lastEffect = null))
      : (n = Os(o, i)),
    null !== e ? (r = Os(e, r)) : ((r = Ns(r, a, l, null)).flags |= 2),
    (r.return = t),
    (n.return = t),
    (n.sibling = r),
    (t.child = n),
    r
  )
}
function Ui(e, t) {
  e.lanes |= t
  var n = e.alternate
  null !== n && (n.lanes |= t), ja(e.return, t)
}
function Ai(e, t, n, r, l, a) {
  var o = e.memoizedState
  null === o
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
        lastEffect: a,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = l),
      (o.lastEffect = a))
}
function ji(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    a = r.tail
  if ((wi(e, t, r.children, n), 0 != (2 & (r = wo.current))))
    (r = (1 & r) | 2), (t.flags |= 64)
  else {
    if (null !== e && 0 != (64 & e.flags))
      e: for (e = t.child; null !== e; ) {
        if (13 === e.tag) null !== e.memoizedState && Ui(e, n)
        else if (19 === e.tag) Ui(e, n)
        else if (null !== e.child) {
          ;(e.child.return = e), (e = e.child)
          continue
        }
        if (e === t) break e
        for (; null === e.sibling; ) {
          if (null === e.return || e.return === t) break e
          e = e.return
        }
        ;(e.sibling.return = e.return), (e = e.sibling)
      }
    r &= 1
  }
  if ((ql(wo, r), 0 == (2 & t.mode))) t.memoizedState = null
  else
    switch (l) {
      case 'forwards':
        for (n = t.child, l = null; null !== n; )
          null !== (e = n.alternate) && null === ko(e) && (l = n),
            (n = n.sibling)
        null === (n = l)
          ? ((l = t.child), (t.child = null))
          : ((l = n.sibling), (n.sibling = null)),
          Ai(t, !1, l, n, a, t.lastEffect)
        break
      case 'backwards':
        for (n = null, l = t.child, t.child = null; null !== l; ) {
          if (null !== (e = l.alternate) && null === ko(e)) {
            t.child = l
            break
          }
          ;(e = l.sibling), (l.sibling = n), (n = l), (l = e)
        }
        Ai(t, !0, n, null, a, t.lastEffect)
        break
      case 'together':
        Ai(t, !1, null, null, void 0, t.lastEffect)
        break
      default:
        t.memoizedState = null
    }
  return t.child
}
function Vi(e, t, n) {
  if (
    (null !== e && (t.dependencies = e.dependencies),
    (Su |= t.lanes),
    0 != (n & t.childLanes))
  ) {
    if (null !== e && t.child !== e.child) throw Error($(153))
    if (null !== t.child) {
      for (
        n = Os((e = t.child), e.pendingProps), t.child = n, n.return = t;
        null !== e.sibling;

      )
        (e = e.sibling), ((n = n.sibling = Os(e, e.pendingProps)).return = t)
      n.sibling = null
    }
    return t.child
  }
  return null
}
function Wi(e, t) {
  if (!_o)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail
        for (var n = null; null !== t; )
          null !== t.alternate && (n = t), (t = t.sibling)
        null === n ? (e.tail = null) : (n.sibling = null)
        break
      case 'collapsed':
        n = e.tail
        for (var r = null; null !== n; )
          null !== n.alternate && (r = n), (n = n.sibling)
        null === r
          ? t || null === e.tail
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null)
    }
}
function Hi(e, t, n) {
  var r = t.pendingProps
  switch (t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return null
    case 1:
      return Jl(t.type) && ea(), null
    case 3:
      return (
        go(),
        Ql(Xl),
        Ql(Yl),
        Lo(),
        (r = t.stateNode).pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (null !== e && null !== e.child) ||
          (To(t) ? (t.flags |= 4) : r.hydrate || (t.flags |= 256)),
        null
      )
    case 5:
      bo(t)
      var l = mo(ho.current)
      if (((n = t.type), null !== e && null != t.stateNode))
        zi(e, t, n, r), e.ref !== t.ref && (t.flags |= 128)
      else {
        if (!r) {
          if (null === t.stateNode) throw Error($(166))
          return null
        }
        if (((e = mo(fo.current)), To(t))) {
          ;(r = t.stateNode), (n = t.type)
          var a = t.memoizedProps
          switch (((r[Ml] = t), (r[Dl] = a), n)) {
            case 'dialog':
              dl('cancel', r), dl('close', r)
              break
            case 'iframe':
            case 'object':
            case 'embed':
              dl('load', r)
              break
            case 'video':
            case 'audio':
              for (e = 0; e < ul.length; e++) dl(ul[e], r)
              break
            case 'source':
              dl('error', r)
              break
            case 'img':
            case 'image':
            case 'link':
              dl('error', r), dl('load', r)
              break
            case 'details':
              dl('toggle', r)
              break
            case 'input':
              Ae(r, a), dl('invalid', r)
              break
            case 'select':
              ;(r._wrapperState = { wasMultiple: !!a.multiple }),
                dl('invalid', r)
              break
            case 'textarea':
              qe(r, a), dl('invalid', r)
          }
          for (var o in (st(n, a), (e = null), a))
            a.hasOwnProperty(o) &&
              ((l = a[o]),
              'children' === o
                ? 'string' == typeof l
                  ? r.textContent !== l && (e = ['children', l])
                  : 'number' == typeof l &&
                    r.textContent !== '' + l &&
                    (e = ['children', '' + l])
                : q.hasOwnProperty(o) &&
                  null != l &&
                  'onScroll' === o &&
                  dl('scroll', r))
          switch (n) {
            case 'input':
              De(r), We(r, a, !0)
              break
            case 'textarea':
              De(r), Ye(r)
              break
            case 'select':
            case 'option':
              break
            default:
              'function' == typeof a.onClick && (r.onclick = El)
          }
          ;(r = e), (t.updateQueue = r), null !== r && (t.flags |= 4)
        } else {
          switch (
            ((o = 9 === l.nodeType ? l : l.ownerDocument),
            e === Xe && (e = Ze(n)),
            e === Xe
              ? 'script' === n
                ? (((e = o.createElement('div')).innerHTML =
                    '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : 'string' == typeof r.is
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  'select' === n &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[Ml] = t),
            (e[Dl] = r),
            Ni(e, t),
            (t.stateNode = e),
            (o = ct(n, r)),
            n)
          ) {
            case 'dialog':
              dl('cancel', e), dl('close', e), (l = r)
              break
            case 'iframe':
            case 'object':
            case 'embed':
              dl('load', e), (l = r)
              break
            case 'video':
            case 'audio':
              for (l = 0; l < ul.length; l++) dl(ul[l], e)
              l = r
              break
            case 'source':
              dl('error', e), (l = r)
              break
            case 'img':
            case 'image':
            case 'link':
              dl('error', e), dl('load', e), (l = r)
              break
            case 'details':
              dl('toggle', e), (l = r)
              break
            case 'input':
              Ae(e, r), (l = Ue(e, r)), dl('invalid', e)
              break
            case 'option':
              l = Be(e, r)
              break
            case 'select':
              ;(e._wrapperState = { wasMultiple: !!r.multiple }),
                (l = H({}, r, { value: void 0 })),
                dl('invalid', e)
              break
            case 'textarea':
              qe(e, r), (l = Qe(e, r)), dl('invalid', e)
              break
            default:
              l = r
          }
          st(n, l)
          var i = l
          for (a in i)
            if (i.hasOwnProperty(a)) {
              var u = i[a]
              'style' === a
                ? it(e, u)
                : 'dangerouslySetInnerHTML' === a
                ? null != (u = u ? u.__html : void 0) && nt(e, u)
                : 'children' === a
                ? 'string' == typeof u
                  ? ('textarea' !== n || '' !== u) && rt(e, u)
                  : 'number' == typeof u && rt(e, '' + u)
                : 'suppressContentEditableWarning' !== a &&
                  'suppressHydrationWarning' !== a &&
                  'autoFocus' !== a &&
                  (q.hasOwnProperty(a)
                    ? null != u && 'onScroll' === a && dl('scroll', e)
                    : null != u && ae(e, a, u, o))
            }
          switch (n) {
            case 'input':
              De(e), We(e, r, !1)
              break
            case 'textarea':
              De(e), Ye(e)
              break
            case 'option':
              null != r.value && e.setAttribute('value', '' + Re(r.value))
              break
            case 'select':
              ;(e.multiple = !!r.multiple),
                null != (a = r.value)
                  ? $e(e, !!r.multiple, a, !1)
                  : null != r.defaultValue &&
                    $e(e, !!r.multiple, r.defaultValue, !0)
              break
            default:
              'function' == typeof l.onClick && (e.onclick = El)
          }
          xl(n, r) && (t.flags |= 4)
        }
        null !== t.ref && (t.flags |= 128)
      }
      return null
    case 6:
      if (e && null != t.stateNode) Li(0, t, e.memoizedProps, r)
      else {
        if ('string' != typeof r && null === t.stateNode) throw Error($(166))
        ;(n = mo(ho.current)),
          mo(fo.current),
          To(t)
            ? ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[Ml] = t),
              r.nodeValue !== n && (t.flags |= 4))
            : (((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                r,
              ))[Ml] = t),
              (t.stateNode = r))
      }
      return null
    case 13:
      return (
        Ql(wo),
        (r = t.memoizedState),
        0 != (64 & t.flags)
          ? ((t.lanes = n), t)
          : ((r = null !== r),
            (n = !1),
            null === e
              ? void 0 !== t.memoizedProps.fallback && To(t)
              : (n = null !== e.memoizedState),
            r &&
              !n &&
              0 != (2 & t.mode) &&
              ((null === e &&
                !0 !== t.memoizedProps.unstable_avoidThisFallback) ||
              0 != (1 & wo.current)
                ? 0 === wu && (wu = 3)
                : ((0 !== wu && 3 !== wu) || (wu = 4),
                  null === mu ||
                    (0 == (134217727 & Su) && 0 == (134217727 & _u)) ||
                    es(mu, gu))),
            (r || n) && (t.flags |= 4),
            null)
      )
    case 4:
      return go(), null === e && hl(t.stateNode.containerInfo), null
    case 10:
      return Aa(t), null
    case 17:
      return Jl(t.type) && ea(), null
    case 19:
      if ((Ql(wo), null === (r = t.memoizedState))) return null
      if (((a = 0 != (64 & t.flags)), null === (o = r.rendering)))
        if (a) Wi(r, !1)
        else {
          if (0 !== wu || (null !== e && 0 != (64 & e.flags)))
            for (e = t.child; null !== e; ) {
              if (null !== (o = ko(e))) {
                for (
                  t.flags |= 64,
                    Wi(r, !1),
                    null !== (a = o.updateQueue) &&
                      ((t.updateQueue = a), (t.flags |= 4)),
                    null === r.lastEffect && (t.firstEffect = null),
                    t.lastEffect = r.lastEffect,
                    r = n,
                    n = t.child;
                  null !== n;

                )
                  (e = r),
                    ((a = n).flags &= 2),
                    (a.nextEffect = null),
                    (a.firstEffect = null),
                    (a.lastEffect = null),
                    null === (o = a.alternate)
                      ? ((a.childLanes = 0),
                        (a.lanes = e),
                        (a.child = null),
                        (a.memoizedProps = null),
                        (a.memoizedState = null),
                        (a.updateQueue = null),
                        (a.dependencies = null),
                        (a.stateNode = null))
                      : ((a.childLanes = o.childLanes),
                        (a.lanes = o.lanes),
                        (a.child = o.child),
                        (a.memoizedProps = o.memoizedProps),
                        (a.memoizedState = o.memoizedState),
                        (a.updateQueue = o.updateQueue),
                        (a.type = o.type),
                        (e = o.dependencies),
                        (a.dependencies =
                          null === e
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling)
                return ql(wo, (1 & wo.current) | 2), t.child
              }
              e = e.sibling
            }
          null !== r.tail &&
            xa() > Ou &&
            ((t.flags |= 64), (a = !0), Wi(r, !1), (t.lanes = 33554432))
        }
      else {
        if (!a)
          if (null !== (e = ko(o))) {
            if (
              ((t.flags |= 64),
              (a = !0),
              null !== (n = e.updateQueue) &&
                ((t.updateQueue = n), (t.flags |= 4)),
              Wi(r, !0),
              null === r.tail && 'hidden' === r.tailMode && !o.alternate && !_o)
            )
              return (
                null !== (t = t.lastEffect = r.lastEffect) &&
                  (t.nextEffect = null),
                null
              )
          } else
            2 * xa() - r.renderingStartTime > Ou &&
              1073741824 !== n &&
              ((t.flags |= 64), (a = !0), Wi(r, !1), (t.lanes = 33554432))
        r.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : (null !== (n = r.last) ? (n.sibling = o) : (t.child = o),
            (r.last = o))
      }
      return null !== r.tail
        ? ((n = r.tail),
          (r.rendering = n),
          (r.tail = n.sibling),
          (r.lastEffect = t.lastEffect),
          (r.renderingStartTime = xa()),
          (n.sibling = null),
          (t = wo.current),
          ql(wo, a ? (1 & t) | 2 : 1 & t),
          n)
        : null
    case 23:
    case 24:
      return (
        as(),
        null !== e &&
          (null !== e.memoizedState) != (null !== t.memoizedState) &&
          'unstable-defer-without-hiding' !== r.mode &&
          (t.flags |= 4),
        null
      )
  }
  throw Error($(156, t.tag))
}
function Bi(e) {
  switch (e.tag) {
    case 1:
      Jl(e.type) && ea()
      var t = e.flags
      return 4096 & t ? ((e.flags = (-4097 & t) | 64), e) : null
    case 3:
      if ((go(), Ql(Xl), Ql(Yl), Lo(), 0 != (64 & (t = e.flags))))
        throw Error($(285))
      return (e.flags = (-4097 & t) | 64), e
    case 5:
      return bo(e), null
    case 13:
      return (
        Ql(wo), 4096 & (t = e.flags) ? ((e.flags = (-4097 & t) | 64), e) : null
      )
    case 19:
      return Ql(wo), null
    case 4:
      return go(), null
    case 10:
      return Aa(e), null
    case 23:
    case 24:
      return as(), null
    default:
      return null
  }
}
function $i(e, t) {
  try {
    var n = '',
      r = t
    do {
      ;(n += ze(r)), (r = r.return)
    } while (r)
    var l = n
  } catch (a) {
    l = '\nError generating stack: ' + a.message + '\n' + a.stack
  }
  return { value: e, source: t, stack: l }
}
function Qi(e, t) {
  try {
    console.error(t.value)
  } catch (n) {
    setTimeout(function () {
      throw n
    })
  }
}
;(Ni = function (e, t) {
  for (var n = t.child; null !== n; ) {
    if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode)
    else if (4 !== n.tag && null !== n.child) {
      ;(n.child.return = n), (n = n.child)
      continue
    }
    if (n === t) break
    for (; null === n.sibling; ) {
      if (null === n.return || n.return === t) return
      n = n.return
    }
    ;(n.sibling.return = n.return), (n = n.sibling)
  }
}),
  (zi = function (e, t, n, r) {
    var l = e.memoizedProps
    if (l !== r) {
      ;(e = t.stateNode), mo(fo.current)
      var a,
        o = null
      switch (n) {
        case 'input':
          ;(l = Ue(e, l)), (r = Ue(e, r)), (o = [])
          break
        case 'option':
          ;(l = Be(e, l)), (r = Be(e, r)), (o = [])
          break
        case 'select':
          ;(l = H({}, l, { value: void 0 })),
            (r = H({}, r, { value: void 0 })),
            (o = [])
          break
        case 'textarea':
          ;(l = Qe(e, l)), (r = Qe(e, r)), (o = [])
          break
        default:
          'function' != typeof l.onClick &&
            'function' == typeof r.onClick &&
            (e.onclick = El)
      }
      for (s in (st(n, r), (n = null), l))
        if (!r.hasOwnProperty(s) && l.hasOwnProperty(s) && null != l[s])
          if ('style' === s) {
            var i = l[s]
            for (a in i) i.hasOwnProperty(a) && (n || (n = {}), (n[a] = ''))
          } else
            'dangerouslySetInnerHTML' !== s &&
              'children' !== s &&
              'suppressContentEditableWarning' !== s &&
              'suppressHydrationWarning' !== s &&
              'autoFocus' !== s &&
              (q.hasOwnProperty(s)
                ? o || (o = [])
                : (o = o || []).push(s, null))
      for (s in r) {
        var u = r[s]
        if (
          ((i = null != l ? l[s] : void 0),
          r.hasOwnProperty(s) && u !== i && (null != u || null != i))
        )
          if ('style' === s)
            if (i) {
              for (a in i)
                !i.hasOwnProperty(a) ||
                  (u && u.hasOwnProperty(a)) ||
                  (n || (n = {}), (n[a] = ''))
              for (a in u)
                u.hasOwnProperty(a) &&
                  i[a] !== u[a] &&
                  (n || (n = {}), (n[a] = u[a]))
            } else n || (o || (o = []), o.push(s, n)), (n = u)
          else
            'dangerouslySetInnerHTML' === s
              ? ((u = u ? u.__html : void 0),
                (i = i ? i.__html : void 0),
                null != u && i !== u && (o = o || []).push(s, u))
              : 'children' === s
              ? ('string' != typeof u && 'number' != typeof u) ||
                (o = o || []).push(s, '' + u)
              : 'suppressContentEditableWarning' !== s &&
                'suppressHydrationWarning' !== s &&
                (q.hasOwnProperty(s)
                  ? (null != u && 'onScroll' === s && dl('scroll', e),
                    o || i === u || (o = []))
                  : 'object' == typeof u && null !== u && u.$$typeof === we
                  ? u.toString()
                  : (o = o || []).push(s, u))
      }
      n && (o = o || []).push('style', n)
      var s = o
      ;(t.updateQueue = s) && (t.flags |= 4)
    }
  }),
  (Li = function (e, t, n, r) {
    n !== r && (t.flags |= 4)
  })
var qi = 'function' == typeof WeakMap ? WeakMap : Map
function Ki(e, t, n) {
  ;((n = Qa(-1, n)).tag = 3), (n.payload = { element: null })
  var r = t.value
  return (
    (n.callback = function () {
      Lu || ((Lu = !0), (Ru = r)), Qi(0, t)
    }),
    n
  )
}
function Yi(e, t, n) {
  ;(n = Qa(-1, n)).tag = 3
  var r = e.type.getDerivedStateFromError
  if ('function' == typeof r) {
    var l = t.value
    n.payload = function () {
      return Qi(0, t), r(l)
    }
  }
  var a = e.stateNode
  return (
    null !== a &&
      'function' == typeof a.componentDidCatch &&
      (n.callback = function () {
        'function' != typeof r &&
          (null === Mu ? (Mu = new Set([this])) : Mu.add(this), Qi(0, t))
        var e = t.stack
        this.componentDidCatch(t.value, { componentStack: null !== e ? e : '' })
      }),
    n
  )
}
var Xi = 'function' == typeof WeakSet ? WeakSet : Set
function Gi(e) {
  var t = e.ref
  if (null !== t)
    if ('function' == typeof t)
      try {
        t(null)
      } catch (n) {
        Es(e, n)
      }
    else t.current = null
}
function Zi(e, t) {
  switch (t.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      return
    case 1:
      if (256 & t.flags && null !== e) {
        var n = e.memoizedProps,
          r = e.memoizedState
        ;(t = (e = t.stateNode).getSnapshotBeforeUpdate(
          t.elementType === t.type ? n : Ra(t.type, n),
          r,
        )),
          (e.__reactInternalSnapshotBeforeUpdate = t)
      }
      return
    case 3:
      return void (256 & t.flags && Tl(t.stateNode.containerInfo))
    case 5:
    case 6:
    case 4:
    case 17:
      return
  }
  throw Error($(163))
}
function Ji(e, t, n) {
  switch (n.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      if (null !== (t = null !== (t = n.updateQueue) ? t.lastEffect : null)) {
        e = t = t.next
        do {
          if (3 == (3 & e.tag)) {
            var r = e.create
            e.destroy = r()
          }
          e = e.next
        } while (e !== t)
      }
      if (null !== (t = null !== (t = n.updateQueue) ? t.lastEffect : null)) {
        e = t = t.next
        do {
          var l = e
          ;(r = l.next),
            0 != (4 & (l = l.tag)) && 0 != (1 & l) && (bs(n, e), ys(n, e)),
            (e = r)
        } while (e !== t)
      }
      return
    case 1:
      return (
        (e = n.stateNode),
        4 & n.flags &&
          (null === t
            ? e.componentDidMount()
            : ((r =
                n.elementType === n.type
                  ? t.memoizedProps
                  : Ra(n.type, t.memoizedProps)),
              e.componentDidUpdate(
                r,
                t.memoizedState,
                e.__reactInternalSnapshotBeforeUpdate,
              ))),
        void (null !== (t = n.updateQueue) && Xa(n, t, e))
      )
    case 3:
      if (null !== (t = n.updateQueue)) {
        if (((e = null), null !== n.child))
          switch (n.child.tag) {
            case 5:
              e = n.child.stateNode
              break
            case 1:
              e = n.child.stateNode
          }
        Xa(n, t, e)
      }
      return
    case 5:
      return (
        (e = n.stateNode),
        void (
          null === t &&
          4 & n.flags &&
          xl(n.type, n.memoizedProps) &&
          e.focus()
        )
      )
    case 6:
    case 4:
    case 12:
      return
    case 13:
      return void (
        null === n.memoizedState &&
        ((n = n.alternate),
        null !== n &&
          ((n = n.memoizedState),
          null !== n && ((n = n.dehydrated), null !== n && un(n))))
      )
    case 19:
    case 17:
    case 20:
    case 21:
    case 23:
    case 24:
      return
  }
  throw Error($(163))
}
function eu(e, t) {
  for (var n = e; ; ) {
    if (5 === n.tag) {
      var r = n.stateNode
      if (t)
        'function' == typeof (r = r.style).setProperty
          ? r.setProperty('display', 'none', 'important')
          : (r.display = 'none')
      else {
        r = n.stateNode
        var l = n.memoizedProps.style
        ;(l = null != l && l.hasOwnProperty('display') ? l.display : null),
          (r.style.display = ot('display', l))
      }
    } else if (6 === n.tag) n.stateNode.nodeValue = t ? '' : n.memoizedProps
    else if (
      ((23 !== n.tag && 24 !== n.tag) || null === n.memoizedState || n === e) &&
      null !== n.child
    ) {
      ;(n.child.return = n), (n = n.child)
      continue
    }
    if (n === e) break
    for (; null === n.sibling; ) {
      if (null === n.return || n.return === e) return
      n = n.return
    }
    ;(n.sibling.return = n.return), (n = n.sibling)
  }
}
function tu(e, t) {
  if (oa && 'function' == typeof oa.onCommitFiberUnmount)
    try {
      oa.onCommitFiberUnmount(aa, t)
    } catch (a) {}
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
        var n = (e = e.next)
        do {
          var r = n,
            l = r.destroy
          if (((r = r.tag), void 0 !== l))
            if (0 != (4 & r)) bs(t, n)
            else {
              r = t
              try {
                l()
              } catch (a) {
                Es(r, a)
              }
            }
          n = n.next
        } while (n !== e)
      }
      break
    case 1:
      if ((Gi(t), 'function' == typeof (e = t.stateNode).componentWillUnmount))
        try {
          ;(e.props = t.memoizedProps),
            (e.state = t.memoizedState),
            e.componentWillUnmount()
        } catch (a) {
          Es(t, a)
        }
      break
    case 5:
      Gi(t)
      break
    case 4:
      iu(e, t)
  }
}
function nu(e) {
  ;(e.alternate = null),
    (e.child = null),
    (e.dependencies = null),
    (e.firstEffect = null),
    (e.lastEffect = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.return = null),
    (e.updateQueue = null)
}
function ru(e) {
  return 5 === e.tag || 3 === e.tag || 4 === e.tag
}
function lu(e) {
  e: {
    for (var t = e.return; null !== t; ) {
      if (ru(t)) break e
      t = t.return
    }
    throw Error($(160))
  }
  var n = t
  switch (((t = n.stateNode), n.tag)) {
    case 5:
      var r = !1
      break
    case 3:
    case 4:
      ;(t = t.containerInfo), (r = !0)
      break
    default:
      throw Error($(161))
  }
  16 & n.flags && (rt(t, ''), (n.flags &= -17))
  e: t: for (n = e; ; ) {
    for (; null === n.sibling; ) {
      if (null === n.return || ru(n.return)) {
        n = null
        break e
      }
      n = n.return
    }
    for (
      n.sibling.return = n.return, n = n.sibling;
      5 !== n.tag && 6 !== n.tag && 18 !== n.tag;

    ) {
      if (2 & n.flags) continue t
      if (null === n.child || 4 === n.tag) continue t
      ;(n.child.return = n), (n = n.child)
    }
    if (!(2 & n.flags)) {
      n = n.stateNode
      break e
    }
  }
  r ? au(e, n, t) : ou(e, n, t)
}
function au(e, t, n) {
  var r = e.tag,
    l = 5 === r || 6 === r
  if (l)
    (e = l ? e.stateNode : e.stateNode.instance),
      t
        ? 8 === n.nodeType
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (8 === n.nodeType
            ? (t = n.parentNode).insertBefore(e, n)
            : (t = n).appendChild(e),
          null != (n = n._reactRootContainer) ||
            null !== t.onclick ||
            (t.onclick = El))
  else if (4 !== r && null !== (e = e.child))
    for (au(e, t, n), e = e.sibling; null !== e; ) au(e, t, n), (e = e.sibling)
}
function ou(e, t, n) {
  var r = e.tag,
    l = 5 === r || 6 === r
  if (l)
    (e = l ? e.stateNode : e.stateNode.instance),
      t ? n.insertBefore(e, t) : n.appendChild(e)
  else if (4 !== r && null !== (e = e.child))
    for (ou(e, t, n), e = e.sibling; null !== e; ) ou(e, t, n), (e = e.sibling)
}
function iu(e, t) {
  for (var n, r, l = t, a = !1; ; ) {
    if (!a) {
      a = l.return
      e: for (;;) {
        if (null === a) throw Error($(160))
        switch (((n = a.stateNode), a.tag)) {
          case 5:
            r = !1
            break e
          case 3:
          case 4:
            ;(n = n.containerInfo), (r = !0)
            break e
        }
        a = a.return
      }
      a = !0
    }
    if (5 === l.tag || 6 === l.tag) {
      e: for (var o = e, i = l, u = i; ; )
        if ((tu(o, u), null !== u.child && 4 !== u.tag))
          (u.child.return = u), (u = u.child)
        else {
          if (u === i) break e
          for (; null === u.sibling; ) {
            if (null === u.return || u.return === i) break e
            u = u.return
          }
          ;(u.sibling.return = u.return), (u = u.sibling)
        }
      r
        ? ((o = n),
          (i = l.stateNode),
          8 === o.nodeType ? o.parentNode.removeChild(i) : o.removeChild(i))
        : n.removeChild(l.stateNode)
    } else if (4 === l.tag) {
      if (null !== l.child) {
        ;(n = l.stateNode.containerInfo),
          (r = !0),
          (l.child.return = l),
          (l = l.child)
        continue
      }
    } else if ((tu(e, l), null !== l.child)) {
      ;(l.child.return = l), (l = l.child)
      continue
    }
    if (l === t) break
    for (; null === l.sibling; ) {
      if (null === l.return || l.return === t) return
      4 === (l = l.return).tag && (a = !1)
    }
    ;(l.sibling.return = l.return), (l = l.sibling)
  }
}
function uu(e, t) {
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      var n = t.updateQueue
      if (null !== (n = null !== n ? n.lastEffect : null)) {
        var r = (n = n.next)
        do {
          3 == (3 & r.tag) &&
            ((e = r.destroy), (r.destroy = void 0), void 0 !== e && e()),
            (r = r.next)
        } while (r !== n)
      }
      return
    case 1:
      return
    case 5:
      if (null != (n = t.stateNode)) {
        r = t.memoizedProps
        var l = null !== e ? e.memoizedProps : r
        e = t.type
        var a = t.updateQueue
        if (((t.updateQueue = null), null !== a)) {
          for (
            n[Dl] = r,
              'input' === e && 'radio' === r.type && null != r.name && je(n, r),
              ct(e, l),
              t = ct(e, r),
              l = 0;
            l < a.length;
            l += 2
          ) {
            var o = a[l],
              i = a[l + 1]
            'style' === o
              ? it(n, i)
              : 'dangerouslySetInnerHTML' === o
              ? nt(n, i)
              : 'children' === o
              ? rt(n, i)
              : ae(n, o, i, t)
          }
          switch (e) {
            case 'input':
              Ve(n, r)
              break
            case 'textarea':
              Ke(n, r)
              break
            case 'select':
              ;(e = n._wrapperState.wasMultiple),
                (n._wrapperState.wasMultiple = !!r.multiple),
                null != (a = r.value)
                  ? $e(n, !!r.multiple, a, !1)
                  : e !== !!r.multiple &&
                    (null != r.defaultValue
                      ? $e(n, !!r.multiple, r.defaultValue, !0)
                      : $e(n, !!r.multiple, r.multiple ? [] : '', !1))
          }
        }
      }
      return
    case 6:
      if (null === t.stateNode) throw Error($(162))
      return void (t.stateNode.nodeValue = t.memoizedProps)
    case 3:
      return void (
        (n = t.stateNode).hydrate && ((n.hydrate = !1), un(n.containerInfo))
      )
    case 12:
      return
    case 13:
      return (
        null !== t.memoizedState && ((Pu = xa()), eu(t.child, !0)), void su(t)
      )
    case 19:
      return void su(t)
    case 17:
      return
    case 23:
    case 24:
      return void eu(t, null !== t.memoizedState)
  }
  throw Error($(163))
}
function su(e) {
  var t = e.updateQueue
  if (null !== t) {
    e.updateQueue = null
    var n = e.stateNode
    null === n && (n = e.stateNode = new Xi()),
      t.forEach(function (t) {
        var r = _s.bind(null, e, t)
        n.has(t) || (n.add(t), t.then(r, r))
      })
  }
}
function cu(e, t) {
  return (
    null !== e &&
    (null === (e = e.memoizedState) || null !== e.dehydrated) &&
    null !== (t = t.memoizedState) &&
    null === t.dehydrated
  )
}
var fu = Math.ceil,
  du = oe.ReactCurrentDispatcher,
  pu = oe.ReactCurrentOwner,
  hu = 0,
  mu = null,
  vu = null,
  gu = 0,
  yu = 0,
  bu = $l(0),
  wu = 0,
  ku = null,
  Eu = 0,
  Su = 0,
  _u = 0,
  xu = 0,
  Cu = null,
  Pu = 0,
  Ou = 1 / 0
function Tu() {
  Ou = xa() + 500
}
var Nu,
  zu = null,
  Lu = !1,
  Ru = null,
  Mu = null,
  Du = !1,
  Fu = null,
  Iu = 90,
  Uu = [],
  Au = [],
  ju = null,
  Vu = 0,
  Wu = null,
  Hu = -1,
  Bu = 0,
  $u = 0,
  Qu = null,
  qu = !1
function Ku() {
  return 0 != (48 & hu) ? xa() : -1 !== Hu ? Hu : (Hu = xa())
}
function Yu(e) {
  if (0 == (2 & (e = e.mode))) return 1
  if (0 == (4 & e)) return 99 === Ca() ? 1 : 2
  if ((0 === Bu && (Bu = Eu), 0 !== La.transition)) {
    0 !== $u && ($u = null !== Cu ? Cu.pendingLanes : 0), (e = Bu)
    var t = 4186112 & ~$u
    return (
      0 === (t &= -t) && 0 === (t = (e = 4186112 & ~e) & -e) && (t = 8192), t
    )
  }
  return (
    (e = Ca()),
    0 != (4 & hu) && 98 === e
      ? (e = Cn(12, Bu))
      : (e = Cn(
          (e = (function (e) {
            switch (e) {
              case 99:
                return 15
              case 98:
                return 10
              case 97:
              case 96:
                return 8
              case 95:
                return 2
              default:
                return 0
            }
          })(e)),
          Bu,
        )),
    e
  )
}
function Xu(e, t, n) {
  if (50 < Vu) throw ((Vu = 0), (Wu = null), Error($(185)))
  if (null === (e = Gu(e, t))) return null
  Tn(e, t, n), e === mu && ((_u |= t), 4 === wu && es(e, gu))
  var r = Ca()
  1 === t
    ? 0 != (8 & hu) && 0 == (48 & hu)
      ? ts(e)
      : (Zu(e, n), 0 === hu && (Tu(), Na()))
    : (0 == (4 & hu) ||
        (98 !== r && 99 !== r) ||
        (null === ju ? (ju = new Set([e])) : ju.add(e)),
      Zu(e, n)),
    (Cu = e)
}
function Gu(e, t) {
  e.lanes |= t
  var n = e.alternate
  for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
    (e.childLanes |= t),
      null !== (n = e.alternate) && (n.childLanes |= t),
      (n = e),
      (e = e.return)
  return 3 === n.tag ? n.stateNode : null
}
function Zu(e, t) {
  for (
    var n = e.callbackNode,
      r = e.suspendedLanes,
      l = e.pingedLanes,
      a = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - Nn(o),
      u = 1 << i,
      s = a[i]
    if (-1 === s) {
      if (0 == (u & r) || 0 != (u & l)) {
        ;(s = t), Sn(u)
        var c = En
        a[i] = 10 <= c ? s + 250 : 6 <= c ? s + 5e3 : -1
      }
    } else s <= t && (e.expiredLanes |= u)
    o &= ~u
  }
  if (((r = _n(e, e === mu ? gu : 0)), (t = En), 0 === r))
    null !== n &&
      (n !== ba && sa(n), (e.callbackNode = null), (e.callbackPriority = 0))
  else {
    if (null !== n) {
      if (e.callbackPriority === t) return
      n !== ba && sa(n)
    }
    15 === t
      ? ((n = ts.bind(null, e)),
        null === ka ? ((ka = [n]), (Ea = ua(ha, za))) : ka.push(n),
        (n = ba))
      : 14 === t
      ? (n = Ta(99, ts.bind(null, e)))
      : (n = Ta(
          (n = (function (e) {
            switch (e) {
              case 15:
              case 14:
                return 99
              case 13:
              case 12:
              case 11:
              case 10:
                return 98
              case 9:
              case 8:
              case 7:
              case 6:
              case 4:
              case 5:
                return 97
              case 3:
              case 2:
              case 1:
                return 95
              case 0:
                return 90
              default:
                throw Error($(358, e))
            }
          })(t)),
          Ju.bind(null, e),
        )),
      (e.callbackPriority = t),
      (e.callbackNode = n)
  }
}
function Ju(e) {
  if (((Hu = -1), ($u = Bu = 0), 0 != (48 & hu))) throw Error($(327))
  var t = e.callbackNode
  if (gs() && e.callbackNode !== t) return null
  var n = _n(e, e === mu ? gu : 0)
  if (0 === n) return null
  var r = n,
    l = hu
  hu |= 16
  var a = us()
  for ((mu === e && gu === r) || (Tu(), os(e, r)); ; )
    try {
      fs()
      break
    } catch (i) {
      is(e, i)
    }
  if (
    (Ua(),
    (du.current = a),
    (hu = l),
    null !== vu ? (r = 0) : ((mu = null), (gu = 0), (r = wu)),
    0 != (Eu & _u))
  )
    os(e, 0)
  else if (0 !== r) {
    if (
      (2 === r &&
        ((hu |= 64),
        e.hydrate && ((e.hydrate = !1), Tl(e.containerInfo)),
        0 !== (n = xn(e)) && (r = ss(e, n))),
      1 === r)
    )
      throw ((t = ku), os(e, 0), es(e, n), Zu(e, xa()), t)
    switch (
      ((e.finishedWork = e.current.alternate), (e.finishedLanes = n), r)
    ) {
      case 0:
      case 1:
        throw Error($(345))
      case 2:
        hs(e)
        break
      case 3:
        if ((es(e, n), (62914560 & n) === n && 10 < (r = Pu + 500 - xa()))) {
          if (0 !== _n(e, 0)) break
          if (((l = e.suspendedLanes) & n) !== n) {
            Ku(), (e.pingedLanes |= e.suspendedLanes & l)
            break
          }
          e.timeoutHandle = Pl(hs.bind(null, e), r)
          break
        }
        hs(e)
        break
      case 4:
        if ((es(e, n), (4186112 & n) === n)) break
        for (r = e.eventTimes, l = -1; 0 < n; ) {
          var o = 31 - Nn(n)
          ;(a = 1 << o), (o = r[o]) > l && (l = o), (n &= ~a)
        }
        if (
          ((n = l),
          10 <
            (n =
              (120 > (n = xa() - n)
                ? 120
                : 480 > n
                ? 480
                : 1080 > n
                ? 1080
                : 1920 > n
                ? 1920
                : 3e3 > n
                ? 3e3
                : 4320 > n
                ? 4320
                : 1960 * fu(n / 1960)) - n))
        ) {
          e.timeoutHandle = Pl(hs.bind(null, e), n)
          break
        }
        hs(e)
        break
      case 5:
        hs(e)
        break
      default:
        throw Error($(329))
    }
  }
  return Zu(e, xa()), e.callbackNode === t ? Ju.bind(null, e) : null
}
function es(e, t) {
  for (
    t &= ~xu,
      t &= ~_u,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Nn(t),
      r = 1 << n
    ;(e[n] = -1), (t &= ~r)
  }
}
function ts(e) {
  if (0 != (48 & hu)) throw Error($(327))
  if ((gs(), e === mu && 0 != (e.expiredLanes & gu))) {
    var t = gu,
      n = ss(e, t)
    0 != (Eu & _u) && (n = ss(e, (t = _n(e, t))))
  } else n = ss(e, (t = _n(e, 0)))
  if (
    (0 !== e.tag &&
      2 === n &&
      ((hu |= 64),
      e.hydrate && ((e.hydrate = !1), Tl(e.containerInfo)),
      0 !== (t = xn(e)) && (n = ss(e, t))),
    1 === n)
  )
    throw ((n = ku), os(e, 0), es(e, t), Zu(e, xa()), n)
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    hs(e),
    Zu(e, xa()),
    null
  )
}
function ns(e, t) {
  var n = hu
  hu |= 1
  try {
    return e(t)
  } finally {
    0 === (hu = n) && (Tu(), Na())
  }
}
function rs(e, t) {
  var n = hu
  ;(hu &= -2), (hu |= 8)
  try {
    return e(t)
  } finally {
    0 === (hu = n) && (Tu(), Na())
  }
}
function ls(e, t) {
  ql(bu, yu), (yu |= t), (Eu |= t)
}
function as() {
  ;(yu = bu.current), Ql(bu)
}
function os(e, t) {
  ;(e.finishedWork = null), (e.finishedLanes = 0)
  var n = e.timeoutHandle
  if ((-1 !== n && ((e.timeoutHandle = -1), Ol(n)), null !== vu))
    for (n = vu.return; null !== n; ) {
      var r = n
      switch (r.tag) {
        case 1:
          null != (r = r.type.childContextTypes) && ea()
          break
        case 3:
          go(), Ql(Xl), Ql(Yl), Lo()
          break
        case 5:
          bo(r)
          break
        case 4:
          go()
          break
        case 13:
        case 19:
          Ql(wo)
          break
        case 10:
          Aa(r)
          break
        case 23:
        case 24:
          as()
      }
      n = n.return
    }
  ;(mu = e),
    (vu = Os(e.current, null)),
    (gu = yu = Eu = t),
    (wu = 0),
    (ku = null),
    (xu = _u = Su = 0)
}
function is(e, t) {
  for (;;) {
    var n = vu
    try {
      if ((Ua(), (Ro.current = hi), Ao)) {
        for (var r = Fo.memoizedState; null !== r; ) {
          var l = r.queue
          null !== l && (l.pending = null), (r = r.next)
        }
        Ao = !1
      }
      if (
        ((Do = 0),
        (Uo = Io = Fo = null),
        (jo = !1),
        (pu.current = null),
        null === n || null === n.return)
      ) {
        ;(wu = 1), (ku = t), (vu = null)
        break
      }
      e: {
        var a = e,
          o = n.return,
          i = n,
          u = t
        if (
          ((t = gu),
          (i.flags |= 2048),
          (i.firstEffect = i.lastEffect = null),
          null !== u && 'object' == typeof u && 'function' == typeof u.then)
        ) {
          var s = u
          if (0 == (2 & i.mode)) {
            var c = i.alternate
            c
              ? ((i.updateQueue = c.updateQueue),
                (i.memoizedState = c.memoizedState),
                (i.lanes = c.lanes))
              : ((i.updateQueue = null), (i.memoizedState = null))
          }
          var f = 0 != (1 & wo.current),
            d = o
          do {
            var p
            if ((p = 13 === d.tag)) {
              var h = d.memoizedState
              if (null !== h) p = null !== h.dehydrated
              else {
                var m = d.memoizedProps
                p =
                  void 0 !== m.fallback &&
                  (!0 !== m.unstable_avoidThisFallback || !f)
              }
            }
            if (p) {
              var v = d.updateQueue
              if (null === v) {
                var g = new Set()
                g.add(s), (d.updateQueue = g)
              } else v.add(s)
              if (0 == (2 & d.mode)) {
                if (
                  ((d.flags |= 64),
                  (i.flags |= 16384),
                  (i.flags &= -2981),
                  1 === i.tag)
                )
                  if (null === i.alternate) i.tag = 17
                  else {
                    var y = Qa(-1, 1)
                    ;(y.tag = 2), qa(i, y)
                  }
                i.lanes |= 1
                break e
              }
              ;(u = void 0), (i = t)
              var b = a.pingCache
              if (
                (null === b
                  ? ((b = a.pingCache = new qi()), (u = new Set()), b.set(s, u))
                  : void 0 === (u = b.get(s)) && ((u = new Set()), b.set(s, u)),
                !u.has(i))
              ) {
                u.add(i)
                var w = Ss.bind(null, a, s, i)
                s.then(w, w)
              }
              ;(d.flags |= 4096), (d.lanes = t)
              break e
            }
            d = d.return
          } while (null !== d)
          u = Error(
            (Le(i.type) || 'A React component') +
              ' suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.',
          )
        }
        5 !== wu && (wu = 2), (u = $i(u, i)), (d = o)
        do {
          switch (d.tag) {
            case 3:
              ;(a = u),
                (d.flags |= 4096),
                (t &= -t),
                (d.lanes |= t),
                Ka(d, Ki(0, a, t))
              break e
            case 1:
              a = u
              var k = d.type,
                E = d.stateNode
              if (
                0 == (64 & d.flags) &&
                ('function' == typeof k.getDerivedStateFromError ||
                  (null !== E &&
                    'function' == typeof E.componentDidCatch &&
                    (null === Mu || !Mu.has(E))))
              ) {
                ;(d.flags |= 4096),
                  (t &= -t),
                  (d.lanes |= t),
                  Ka(d, Yi(d, a, t))
                break e
              }
          }
          d = d.return
        } while (null !== d)
      }
      ps(n)
    } catch (S) {
      ;(t = S), vu === n && null !== n && (vu = n = n.return)
      continue
    }
    break
  }
}
function us() {
  var e = du.current
  return (du.current = hi), null === e ? hi : e
}
function ss(e, t) {
  var n = hu
  hu |= 16
  var r = us()
  for ((mu === e && gu === t) || os(e, t); ; )
    try {
      cs()
      break
    } catch (l) {
      is(e, l)
    }
  if ((Ua(), (hu = n), (du.current = r), null !== vu)) throw Error($(261))
  return (mu = null), (gu = 0), wu
}
function cs() {
  for (; null !== vu; ) ds(vu)
}
function fs() {
  for (; null !== vu && !ca(); ) ds(vu)
}
function ds(e) {
  var t = Nu(e.alternate, e, yu)
  ;(e.memoizedProps = e.pendingProps),
    null === t ? ps(e) : (vu = t),
    (pu.current = null)
}
function ps(e) {
  var t = e
  do {
    var n = t.alternate
    if (((e = t.return), 0 == (2048 & t.flags))) {
      if (null !== (n = Hi(n, t, yu))) return void (vu = n)
      if (
        (24 !== (n = t).tag && 23 !== n.tag) ||
        null === n.memoizedState ||
        0 != (1073741824 & yu) ||
        0 == (4 & n.mode)
      ) {
        for (var r = 0, l = n.child; null !== l; )
          (r |= l.lanes | l.childLanes), (l = l.sibling)
        n.childLanes = r
      }
      null !== e &&
        0 == (2048 & e.flags) &&
        (null === e.firstEffect && (e.firstEffect = t.firstEffect),
        null !== t.lastEffect &&
          (null !== e.lastEffect && (e.lastEffect.nextEffect = t.firstEffect),
          (e.lastEffect = t.lastEffect)),
        1 < t.flags &&
          (null !== e.lastEffect
            ? (e.lastEffect.nextEffect = t)
            : (e.firstEffect = t),
          (e.lastEffect = t)))
    } else {
      if (null !== (n = Bi(t))) return (n.flags &= 2047), void (vu = n)
      null !== e && ((e.firstEffect = e.lastEffect = null), (e.flags |= 2048))
    }
    if (null !== (t = t.sibling)) return void (vu = t)
    vu = t = e
  } while (null !== t)
  0 === wu && (wu = 5)
}
function hs(e) {
  var t = Ca()
  return Oa(99, ms.bind(null, e, t)), null
}
function ms(e, t) {
  do {
    gs()
  } while (null !== Fu)
  if (0 != (48 & hu)) throw Error($(327))
  var n = e.finishedWork
  if (null === n) return null
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error($(177))
  e.callbackNode = null
  var r = n.lanes | n.childLanes,
    l = r,
    a = e.pendingLanes & ~l
  ;(e.pendingLanes = l),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= l),
    (e.mutableReadLanes &= l),
    (e.entangledLanes &= l),
    (l = e.entanglements)
  for (var o = e.eventTimes, i = e.expirationTimes; 0 < a; ) {
    var u = 31 - Nn(a),
      s = 1 << u
    ;(l[u] = 0), (o[u] = -1), (i[u] = -1), (a &= ~s)
  }
  if (
    (null !== ju && 0 == (24 & r) && ju.has(e) && ju.delete(e),
    e === mu && ((vu = mu = null), (gu = 0)),
    1 < n.flags
      ? null !== n.lastEffect
        ? ((n.lastEffect.nextEffect = n), (r = n.firstEffect))
        : (r = n)
      : (r = n.firstEffect),
    null !== r)
  ) {
    if (
      ((l = hu), (hu |= 32), (pu.current = null), (Sl = Dn), Jr((o = Zr())))
    ) {
      if ('selectionStart' in o)
        i = { start: o.selectionStart, end: o.selectionEnd }
      else
        e: if (
          ((i = ((i = o.ownerDocument) && i.defaultView) || window),
          (s = i.getSelection && i.getSelection()) && 0 !== s.rangeCount)
        ) {
          ;(i = s.anchorNode),
            (a = s.anchorOffset),
            (u = s.focusNode),
            (s = s.focusOffset)
          try {
            i.nodeType, u.nodeType
          } catch (x) {
            i = null
            break e
          }
          var c = 0,
            f = -1,
            d = -1,
            p = 0,
            h = 0,
            m = o,
            v = null
          t: for (;;) {
            for (
              var g;
              m !== i || (0 !== a && 3 !== m.nodeType) || (f = c + a),
                m !== u || (0 !== s && 3 !== m.nodeType) || (d = c + s),
                3 === m.nodeType && (c += m.nodeValue.length),
                null !== (g = m.firstChild);

            )
              (v = m), (m = g)
            for (;;) {
              if (m === o) break t
              if (
                (v === i && ++p === a && (f = c),
                v === u && ++h === s && (d = c),
                null !== (g = m.nextSibling))
              )
                break
              v = (m = v).parentNode
            }
            m = g
          }
          i = -1 === f || -1 === d ? null : { start: f, end: d }
        } else i = null
      i = i || { start: 0, end: 0 }
    } else i = null
    ;(_l = { focusedElem: o, selectionRange: i }),
      (Dn = !1),
      (Qu = null),
      (qu = !1),
      (zu = r)
    do {
      try {
        vs()
      } catch (x) {
        if (null === zu) throw Error($(330))
        Es(zu, x), (zu = zu.nextEffect)
      }
    } while (null !== zu)
    ;(Qu = null), (zu = r)
    do {
      try {
        for (o = e; null !== zu; ) {
          var y = zu.flags
          if ((16 & y && rt(zu.stateNode, ''), 128 & y)) {
            var b = zu.alternate
            if (null !== b) {
              var w = b.ref
              null !== w &&
                ('function' == typeof w ? w(null) : (w.current = null))
            }
          }
          switch (1038 & y) {
            case 2:
              lu(zu), (zu.flags &= -3)
              break
            case 6:
              lu(zu), (zu.flags &= -3), uu(zu.alternate, zu)
              break
            case 1024:
              zu.flags &= -1025
              break
            case 1028:
              ;(zu.flags &= -1025), uu(zu.alternate, zu)
              break
            case 4:
              uu(zu.alternate, zu)
              break
            case 8:
              iu(o, (i = zu))
              var k = i.alternate
              nu(i), null !== k && nu(k)
          }
          zu = zu.nextEffect
        }
      } catch (x) {
        if (null === zu) throw Error($(330))
        Es(zu, x), (zu = zu.nextEffect)
      }
    } while (null !== zu)
    if (
      ((w = _l),
      (b = Zr()),
      (y = w.focusedElem),
      (o = w.selectionRange),
      b !== y && y && y.ownerDocument && Gr(y.ownerDocument.documentElement, y))
    ) {
      null !== o &&
        Jr(y) &&
        ((b = o.start),
        void 0 === (w = o.end) && (w = b),
        'selectionStart' in y
          ? ((y.selectionStart = b),
            (y.selectionEnd = Math.min(w, y.value.length)))
          : (w = ((b = y.ownerDocument || document) && b.defaultView) || window)
              .getSelection &&
            ((w = w.getSelection()),
            (i = y.textContent.length),
            (k = Math.min(o.start, i)),
            (o = void 0 === o.end ? k : Math.min(o.end, i)),
            !w.extend && k > o && ((i = o), (o = k), (k = i)),
            (i = Xr(y, k)),
            (a = Xr(y, o)),
            i &&
              a &&
              (1 !== w.rangeCount ||
                w.anchorNode !== i.node ||
                w.anchorOffset !== i.offset ||
                w.focusNode !== a.node ||
                w.focusOffset !== a.offset) &&
              ((b = b.createRange()).setStart(i.node, i.offset),
              w.removeAllRanges(),
              k > o
                ? (w.addRange(b), w.extend(a.node, a.offset))
                : (b.setEnd(a.node, a.offset), w.addRange(b))))),
        (b = [])
      for (w = y; (w = w.parentNode); )
        1 === w.nodeType &&
          b.push({ element: w, left: w.scrollLeft, top: w.scrollTop })
      for ('function' == typeof y.focus && y.focus(), y = 0; y < b.length; y++)
        ((w = b[y]).element.scrollLeft = w.left), (w.element.scrollTop = w.top)
    }
    ;(Dn = !!Sl), (_l = Sl = null), (e.current = n), (zu = r)
    do {
      try {
        for (y = e; null !== zu; ) {
          var E = zu.flags
          if ((36 & E && Ji(y, zu.alternate, zu), 128 & E)) {
            b = void 0
            var S = zu.ref
            if (null !== S) {
              var _ = zu.stateNode
              switch (zu.tag) {
                case 5:
                  b = _
                  break
                default:
                  b = _
              }
              'function' == typeof S ? S(b) : (S.current = b)
            }
          }
          zu = zu.nextEffect
        }
      } catch (x) {
        if (null === zu) throw Error($(330))
        Es(zu, x), (zu = zu.nextEffect)
      }
    } while (null !== zu)
    ;(zu = null), wa(), (hu = l)
  } else e.current = n
  if (Du) (Du = !1), (Fu = e), (Iu = t)
  else
    for (zu = r; null !== zu; )
      (t = zu.nextEffect),
        (zu.nextEffect = null),
        8 & zu.flags && (((E = zu).sibling = null), (E.stateNode = null)),
        (zu = t)
  if (
    (0 === (r = e.pendingLanes) && (Mu = null),
    1 === r ? (e === Wu ? Vu++ : ((Vu = 0), (Wu = e))) : (Vu = 0),
    (n = n.stateNode),
    oa && 'function' == typeof oa.onCommitFiberRoot)
  )
    try {
      oa.onCommitFiberRoot(aa, n, void 0, 64 == (64 & n.current.flags))
    } catch (x) {}
  if ((Zu(e, xa()), Lu)) throw ((Lu = !1), (e = Ru), (Ru = null), e)
  return 0 != (8 & hu) || Na(), null
}
function vs() {
  for (; null !== zu; ) {
    var e = zu.alternate
    qu ||
      null === Qu ||
      (0 != (8 & zu.flags)
        ? At(zu, Qu) && (qu = !0)
        : 13 === zu.tag && cu(e, zu) && At(zu, Qu) && (qu = !0))
    var t = zu.flags
    0 != (256 & t) && Zi(e, zu),
      0 == (512 & t) ||
        Du ||
        ((Du = !0),
        Ta(97, function () {
          return gs(), null
        })),
      (zu = zu.nextEffect)
  }
}
function gs() {
  if (90 !== Iu) {
    var e = 97 < Iu ? 97 : Iu
    return (Iu = 90), Oa(e, ws)
  }
  return !1
}
function ys(e, t) {
  Uu.push(t, e),
    Du ||
      ((Du = !0),
      Ta(97, function () {
        return gs(), null
      }))
}
function bs(e, t) {
  Au.push(t, e),
    Du ||
      ((Du = !0),
      Ta(97, function () {
        return gs(), null
      }))
}
function ws() {
  if (null === Fu) return !1
  var e = Fu
  if (((Fu = null), 0 != (48 & hu))) throw Error($(331))
  var t = hu
  hu |= 32
  var n = Au
  Au = []
  for (var r = 0; r < n.length; r += 2) {
    var l = n[r],
      a = n[r + 1],
      o = l.destroy
    if (((l.destroy = void 0), 'function' == typeof o))
      try {
        o()
      } catch (u) {
        if (null === a) throw Error($(330))
        Es(a, u)
      }
  }
  for (n = Uu, Uu = [], r = 0; r < n.length; r += 2) {
    ;(l = n[r]), (a = n[r + 1])
    try {
      var i = l.create
      l.destroy = i()
    } catch (u) {
      if (null === a) throw Error($(330))
      Es(a, u)
    }
  }
  for (i = e.current.firstEffect; null !== i; )
    (e = i.nextEffect),
      (i.nextEffect = null),
      8 & i.flags && ((i.sibling = null), (i.stateNode = null)),
      (i = e)
  return (hu = t), Na(), !0
}
function ks(e, t, n) {
  qa(e, (t = Ki(0, (t = $i(n, t)), 1))),
    (t = Ku()),
    null !== (e = Gu(e, 1)) && (Tn(e, 1, t), Zu(e, t))
}
function Es(e, t) {
  if (3 === e.tag) ks(e, e, t)
  else
    for (var n = e.return; null !== n; ) {
      if (3 === n.tag) {
        ks(n, e, t)
        break
      }
      if (1 === n.tag) {
        var r = n.stateNode
        if (
          'function' == typeof n.type.getDerivedStateFromError ||
          ('function' == typeof r.componentDidCatch &&
            (null === Mu || !Mu.has(r)))
        ) {
          var l = Yi(n, (e = $i(t, e)), 1)
          if ((qa(n, l), (l = Ku()), null !== (n = Gu(n, 1))))
            Tn(n, 1, l), Zu(n, l)
          else if (
            'function' == typeof r.componentDidCatch &&
            (null === Mu || !Mu.has(r))
          )
            try {
              r.componentDidCatch(t, e)
            } catch (a) {}
          break
        }
      }
      n = n.return
    }
}
function Ss(e, t, n) {
  var r = e.pingCache
  null !== r && r.delete(t),
    (t = Ku()),
    (e.pingedLanes |= e.suspendedLanes & n),
    mu === e &&
      (gu & n) === n &&
      (4 === wu || (3 === wu && (62914560 & gu) === gu && 500 > xa() - Pu)
        ? os(e, 0)
        : (xu |= n)),
    Zu(e, t)
}
function _s(e, t) {
  var n = e.stateNode
  null !== n && n.delete(t),
    0 === (t = 0) &&
      (0 == (2 & (t = e.mode))
        ? (t = 1)
        : 0 == (4 & t)
        ? (t = 99 === Ca() ? 1 : 2)
        : (0 === Bu && (Bu = Eu),
          0 === (t = Pn(62914560 & ~Bu)) && (t = 4194304))),
    (n = Ku()),
    null !== (e = Gu(e, t)) && (Tn(e, t, n), Zu(e, n))
}
function xs(e, t, n, r) {
  ;(this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.flags = 0),
    (this.lastEffect = this.firstEffect = this.nextEffect = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null)
}
function Cs(e, t, n, r) {
  return new xs(e, t, n, r)
}
function Ps(e) {
  return !(!(e = e.prototype) || !e.isReactComponent)
}
function Os(e, t) {
  var n = e.alternate
  return (
    null === n
      ? (((n = Cs(e.tag, t, e.key, e.mode)).elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.nextEffect = null),
        (n.firstEffect = null),
        (n.lastEffect = null)),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      null === t ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  )
}
function Ts(e, t, n, r, l, a) {
  var o = 2
  if (((r = e), 'function' == typeof e)) Ps(e) && (o = 1)
  else if ('string' == typeof e) o = 5
  else
    e: switch (e) {
      case se:
        return Ns(n.children, l, a, t)
      case ke:
        ;(o = 8), (l |= 16)
        break
      case ce:
        ;(o = 8), (l |= 1)
        break
      case fe:
        return (
          ((e = Cs(12, n, t, 8 | l)).elementType = fe),
          (e.type = fe),
          (e.lanes = a),
          e
        )
      case me:
        return (
          ((e = Cs(13, n, t, l)).type = me),
          (e.elementType = me),
          (e.lanes = a),
          e
        )
      case ve:
        return ((e = Cs(19, n, t, l)).elementType = ve), (e.lanes = a), e
      case Ee:
        return zs(n, l, a, t)
      case Se:
        return ((e = Cs(24, n, t, l)).elementType = Se), (e.lanes = a), e
      default:
        if ('object' == typeof e && null !== e)
          switch (e.$$typeof) {
            case de:
              o = 10
              break e
            case pe:
              o = 9
              break e
            case he:
              o = 11
              break e
            case ge:
              o = 14
              break e
            case ye:
              ;(o = 16), (r = null)
              break e
            case be:
              o = 22
              break e
          }
        throw Error($(130, null == e ? e : typeof e, ''))
    }
  return ((t = Cs(o, n, t, l)).elementType = e), (t.type = r), (t.lanes = a), t
}
function Ns(e, t, n, r) {
  return ((e = Cs(7, e, r, t)).lanes = n), e
}
function zs(e, t, n, r) {
  return ((e = Cs(23, e, r, t)).elementType = Ee), (e.lanes = n), e
}
function Ls(e, t, n) {
  return ((e = Cs(6, e, null, t)).lanes = n), e
}
function Rs(e, t, n) {
  return (
    ((t = Cs(4, null !== e.children ? e.children : [], e.key, t)).lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  )
}
function Ms(e, t, n) {
  ;(this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.pendingContext = this.context = null),
    (this.hydrate = n),
    (this.callbackNode = null),
    (this.callbackPriority = 0),
    (this.eventTimes = On(0)),
    (this.expirationTimes = On(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = On(0)),
    (this.mutableSourceEagerHydrationData = null)
}
function Ds(e, t, n) {
  var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null
  return {
    $$typeof: ue,
    key: null == r ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  }
}
function Fs(e, t, n, r) {
  var l = t.current,
    a = Ku(),
    o = Yu(l)
  e: if (n) {
    t: {
      if (Dt((n = n._reactInternals)) !== n || 1 !== n.tag) throw Error($(170))
      var i = n
      do {
        switch (i.tag) {
          case 3:
            i = i.stateNode.context
            break t
          case 1:
            if (Jl(i.type)) {
              i = i.stateNode.__reactInternalMemoizedMergedChildContext
              break t
            }
        }
        i = i.return
      } while (null !== i)
      throw Error($(171))
    }
    if (1 === n.tag) {
      var u = n.type
      if (Jl(u)) {
        n = na(n, u, i)
        break e
      }
    }
    n = i
  } else n = Kl
  return (
    null === t.context ? (t.context = n) : (t.pendingContext = n),
    ((t = Qa(a, o)).payload = { element: e }),
    null !== (r = void 0 === r ? null : r) && (t.callback = r),
    qa(l, t),
    Xu(l, o, a),
    o
  )
}
function Is(e) {
  if (!(e = e.current).child) return null
  switch (e.child.tag) {
    case 5:
    default:
      return e.child.stateNode
  }
}
function Us(e, t) {
  if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
    var n = e.retryLane
    e.retryLane = 0 !== n && n < t ? n : t
  }
}
function As(e, t) {
  Us(e, t), (e = e.alternate) && Us(e, t)
}
function js(e, t, n) {
  var r =
    (null != n &&
      null != n.hydrationOptions &&
      n.hydrationOptions.mutableSources) ||
    null
  if (
    ((n = new Ms(e, t, null != n && !0 === n.hydrate)),
    (t = Cs(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0)),
    (n.current = t),
    (t.stateNode = n),
    Ba(t),
    (e[Fl] = n.current),
    hl(8 === e.nodeType ? e.parentNode : e),
    r)
  )
    for (e = 0; e < r.length; e++) {
      var l = (t = r[e])._getVersion
      ;(l = l(t._source)),
        null == n.mutableSourceEagerHydrationData
          ? (n.mutableSourceEagerHydrationData = [t, l])
          : n.mutableSourceEagerHydrationData.push(t, l)
    }
  this._internalRoot = n
}
function Vs(e) {
  return !(
    !e ||
    (1 !== e.nodeType &&
      9 !== e.nodeType &&
      11 !== e.nodeType &&
      (8 !== e.nodeType || ' react-mount-point-unstable ' !== e.nodeValue))
  )
}
function Ws(e, t, n, r, l) {
  var a = n._reactRootContainer
  if (a) {
    var o = a._internalRoot
    if ('function' == typeof l) {
      var i = l
      l = function () {
        var e = Is(o)
        i.call(e)
      }
    }
    Fs(t, o, e, l)
  } else {
    if (
      ((a = n._reactRootContainer =
        (function (e, t) {
          if (
            (t ||
              (t = !(
                !(t = e
                  ? 9 === e.nodeType
                    ? e.documentElement
                    : e.firstChild
                  : null) ||
                1 !== t.nodeType ||
                !t.hasAttribute('data-reactroot')
              )),
            !t)
          )
            for (var n; (n = e.lastChild); ) e.removeChild(n)
          return new js(e, 0, t ? { hydrate: !0 } : void 0)
        })(n, r)),
      (o = a._internalRoot),
      'function' == typeof l)
    ) {
      var u = l
      l = function () {
        var e = Is(o)
        u.call(e)
      }
    }
    rs(function () {
      Fs(t, o, e, l)
    })
  }
  return Is(o)
}
function Hs(e, t) {
  var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null
  if (!Vs(t)) throw Error($(200))
  return Ds(e, t, null, n)
}
;(Nu = function (e, t, n) {
  var r = t.lanes
  if (null !== e)
    if (e.memoizedProps !== t.pendingProps || Xl.current) bi = !0
    else {
      if (0 == (n & r)) {
        switch (((bi = !1), t.tag)) {
          case 3:
            Ti(t), No()
            break
          case 5:
            yo(t)
            break
          case 1:
            Jl(t.type) && ra(t)
            break
          case 4:
            vo(t, t.stateNode.containerInfo)
            break
          case 10:
            r = t.memoizedProps.value
            var l = t.type._context
            ql(Ma, l._currentValue), (l._currentValue = r)
            break
          case 13:
            if (null !== t.memoizedState)
              return 0 != (n & t.child.childLanes)
                ? Mi(e, t, n)
                : (ql(wo, 1 & wo.current),
                  null !== (t = Vi(e, t, n)) ? t.sibling : null)
            ql(wo, 1 & wo.current)
            break
          case 19:
            if (((r = 0 != (n & t.childLanes)), 0 != (64 & e.flags))) {
              if (r) return ji(e, t, n)
              t.flags |= 64
            }
            if (
              (null !== (l = t.memoizedState) &&
                ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
              ql(wo, wo.current),
              r)
            )
              break
            return null
          case 23:
          case 24:
            return (t.lanes = 0), _i(e, t, n)
        }
        return Vi(e, t, n)
      }
      bi = 0 != (16384 & e.flags)
    }
  else bi = !1
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      if (
        ((r = t.type),
        null !== e &&
          ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
        (e = t.pendingProps),
        (l = Zl(t, Yl.current)),
        Va(t, n),
        (l = Ho(null, t, r, e, l, n)),
        (t.flags |= 1),
        'object' == typeof l &&
          null !== l &&
          'function' == typeof l.render &&
          void 0 === l.$$typeof)
      ) {
        if (
          ((t.tag = 1), (t.memoizedState = null), (t.updateQueue = null), Jl(r))
        ) {
          var a = !0
          ra(t)
        } else a = !1
        ;(t.memoizedState =
          null !== l.state && void 0 !== l.state ? l.state : null),
          Ba(t)
        var o = r.getDerivedStateFromProps
        'function' == typeof o && Za(t, r, o, e),
          (l.updater = Ja),
          (t.stateNode = l),
          (l._reactInternals = t),
          ro(t, r, e, n),
          (t = Oi(null, t, r, !0, a, n))
      } else (t.tag = 0), wi(null, t, l, n), (t = t.child)
      return t
    case 16:
      l = t.elementType
      e: {
        switch (
          (null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
          (e = t.pendingProps),
          (l = (a = l._init)(l._payload)),
          (t.type = l),
          (a = t.tag =
            (function (e) {
              if ('function' == typeof e) return Ps(e) ? 1 : 0
              if (null != e) {
                if ((e = e.$$typeof) === he) return 11
                if (e === ge) return 14
              }
              return 2
            })(l)),
          (e = Ra(l, e)),
          a)
        ) {
          case 0:
            t = Ci(null, t, l, e, n)
            break e
          case 1:
            t = Pi(null, t, l, e, n)
            break e
          case 11:
            t = ki(null, t, l, e, n)
            break e
          case 14:
            t = Ei(null, t, l, Ra(l.type, e), r, n)
            break e
        }
        throw Error($(306, l, ''))
      }
      return t
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        Ci(e, t, r, (l = t.elementType === r ? l : Ra(r, l)), n)
      )
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        Pi(e, t, r, (l = t.elementType === r ? l : Ra(r, l)), n)
      )
    case 3:
      if ((Ti(t), (r = t.updateQueue), null === e || null === r))
        throw Error($(282))
      if (
        ((r = t.pendingProps),
        (l = null !== (l = t.memoizedState) ? l.element : null),
        $a(e, t),
        Ya(t, r, null, n),
        (r = t.memoizedState.element) === l)
      )
        No(), (t = Vi(e, t, n))
      else {
        if (
          ((a = (l = t.stateNode).hydrate) &&
            ((So = Nl(t.stateNode.containerInfo.firstChild)),
            (Eo = t),
            (a = _o = !0)),
          a)
        ) {
          if (null != (e = l.mutableSourceEagerHydrationData))
            for (l = 0; l < e.length; l += 2)
              ((a = e[l])._workInProgressVersionPrimary = e[l + 1]), zo.push(a)
          for (n = so(t, null, r, n), t.child = n; n; )
            (n.flags = (-3 & n.flags) | 1024), (n = n.sibling)
        } else wi(e, t, r, n), No()
        t = t.child
      }
      return t
    case 5:
      return (
        yo(t),
        null === e && Po(t),
        (r = t.type),
        (l = t.pendingProps),
        (a = null !== e ? e.memoizedProps : null),
        (o = l.children),
        Cl(r, l) ? (o = null) : null !== a && Cl(r, a) && (t.flags |= 16),
        xi(e, t),
        wi(e, t, o, n),
        t.child
      )
    case 6:
      return null === e && Po(t), null
    case 13:
      return Mi(e, t, n)
    case 4:
      return (
        vo(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        null === e ? (t.child = uo(t, null, r, n)) : wi(e, t, r, n),
        t.child
      )
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        ki(e, t, r, (l = t.elementType === r ? l : Ra(r, l)), n)
      )
    case 7:
      return wi(e, t, t.pendingProps, n), t.child
    case 8:
    case 12:
      return wi(e, t, t.pendingProps.children, n), t.child
    case 10:
      e: {
        ;(r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (a = l.value)
        var i = t.type._context
        if ((ql(Ma, i._currentValue), (i._currentValue = a), null !== o))
          if (
            ((i = o.value),
            0 ===
              (a = Qr(i, a)
                ? 0
                : 0 |
                  ('function' == typeof r._calculateChangedBits
                    ? r._calculateChangedBits(i, a)
                    : 1073741823)))
          ) {
            if (o.children === l.children && !Xl.current) {
              t = Vi(e, t, n)
              break e
            }
          } else
            for (null !== (i = t.child) && (i.return = t); null !== i; ) {
              var u = i.dependencies
              if (null !== u) {
                o = i.child
                for (var s = u.firstContext; null !== s; ) {
                  if (s.context === r && 0 != (s.observedBits & a)) {
                    1 === i.tag && (((s = Qa(-1, n & -n)).tag = 2), qa(i, s)),
                      (i.lanes |= n),
                      null !== (s = i.alternate) && (s.lanes |= n),
                      ja(i.return, n),
                      (u.lanes |= n)
                    break
                  }
                  s = s.next
                }
              } else o = 10 === i.tag && i.type === t.type ? null : i.child
              if (null !== o) o.return = i
              else
                for (o = i; null !== o; ) {
                  if (o === t) {
                    o = null
                    break
                  }
                  if (null !== (i = o.sibling)) {
                    ;(i.return = o.return), (o = i)
                    break
                  }
                  o = o.return
                }
              i = o
            }
        wi(e, t, l.children, n), (t = t.child)
      }
      return t
    case 9:
      return (
        (l = t.type),
        (r = (a = t.pendingProps).children),
        Va(t, n),
        (r = r((l = Wa(l, a.unstable_observedBits)))),
        (t.flags |= 1),
        wi(e, t, r, n),
        t.child
      )
    case 14:
      return (
        (a = Ra((l = t.type), t.pendingProps)),
        Ei(e, t, l, (a = Ra(l.type, a)), r, n)
      )
    case 15:
      return Si(e, t, t.type, t.pendingProps, r, n)
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ra(r, l)),
        null !== e &&
          ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
        (t.tag = 1),
        Jl(r) ? ((e = !0), ra(t)) : (e = !1),
        Va(t, n),
        to(t, r, l),
        ro(t, r, l, n),
        Oi(null, t, r, !0, e, n)
      )
    case 19:
      return ji(e, t, n)
    case 23:
    case 24:
      return _i(e, t, n)
  }
  throw Error($(156, t.tag))
}),
  (js.prototype.render = function (e) {
    Fs(e, this._internalRoot, null, null)
  }),
  (js.prototype.unmount = function () {
    var e = this._internalRoot,
      t = e.containerInfo
    Fs(null, e, null, function () {
      t[Fl] = null
    })
  }),
  (jt = function (e) {
    13 === e.tag && (Xu(e, 4, Ku()), As(e, 4))
  }),
  (Vt = function (e) {
    13 === e.tag && (Xu(e, 67108864, Ku()), As(e, 67108864))
  }),
  (Wt = function (e) {
    if (13 === e.tag) {
      var t = Ku(),
        n = Yu(e)
      Xu(e, n, t), As(e, n)
    }
  }),
  (Ht = function (e, t) {
    return t()
  }),
  (dt = function (e, t, n) {
    switch (t) {
      case 'input':
        if ((Ve(e, n), (t = n.name), 'radio' === n.type && null != t)) {
          for (n = e; n.parentNode; ) n = n.parentNode
          for (
            n = n.querySelectorAll(
              'input[name=' + JSON.stringify('' + t) + '][type="radio"]',
            ),
              t = 0;
            t < n.length;
            t++
          ) {
            var r = n[t]
            if (r !== e && r.form === e.form) {
              var l = Vl(r)
              if (!l) throw Error($(90))
              Fe(r), Ve(r, l)
            }
          }
        }
        break
      case 'textarea':
        Ke(e, n)
        break
      case 'select':
        null != (t = n.value) && $e(e, !!n.multiple, t, !1)
    }
  }),
  (yt = ns),
  (bt = function (e, t, n, r, l) {
    var a = hu
    hu |= 4
    try {
      return Oa(98, e.bind(null, t, n, r, l))
    } finally {
      0 === (hu = a) && (Tu(), Na())
    }
  }),
  (wt = function () {
    0 == (49 & hu) &&
      ((function () {
        if (null !== ju) {
          var e = ju
          ;(ju = null),
            e.forEach(function (e) {
              ;(e.expiredLanes |= 24 & e.pendingLanes), Zu(e, xa())
            })
        }
        Na()
      })(),
      gs())
  }),
  (kt = function (e, t) {
    var n = hu
    hu |= 2
    try {
      return e(t)
    } finally {
      0 === (hu = n) && (Tu(), Na())
    }
  })
var Bs = { Events: [Al, jl, Vl, vt, gt, gs, { current: !1 }] },
  $s = {
    findFiberByHostInstance: Ul,
    bundleType: 0,
    version: '17.0.2',
    rendererPackageName: 'react-dom',
  },
  Qs = {
    bundleType: $s.bundleType,
    version: $s.version,
    rendererPackageName: $s.rendererPackageName,
    rendererConfig: $s.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: oe.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return null === (e = Ut(e)) ? null : e.stateNode
    },
    findFiberByHostInstance:
      $s.findFiberByHostInstance ||
      function () {
        return null
      },
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
  }
if ('undefined' != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
  var qs = __REACT_DEVTOOLS_GLOBAL_HOOK__
  if (!qs.isDisabled && qs.supportsFiber)
    try {
      ;(aa = qs.inject(Qs)), (oa = qs)
    } catch (tt) {}
}
;(A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Bs),
  (A.createPortal = Hs),
  (A.findDOMNode = function (e) {
    if (null == e) return null
    if (1 === e.nodeType) return e
    var t = e._reactInternals
    if (void 0 === t) {
      if ('function' == typeof e.render) throw Error($(188))
      throw Error($(268, Object.keys(e)))
    }
    return (e = null === (e = Ut(t)) ? null : e.stateNode)
  }),
  (A.flushSync = function (e, t) {
    var n = hu
    if (0 != (48 & n)) return e(t)
    hu |= 1
    try {
      if (e) return Oa(99, e.bind(null, t))
    } finally {
      ;(hu = n), Na()
    }
  }),
  (A.hydrate = function (e, t, n) {
    if (!Vs(t)) throw Error($(200))
    return Ws(null, e, t, !0, n)
  }),
  (A.render = function (e, t, n) {
    if (!Vs(t)) throw Error($(200))
    return Ws(null, e, t, !1, n)
  }),
  (A.unmountComponentAtNode = function (e) {
    if (!Vs(e)) throw Error($(40))
    return (
      !!e._reactRootContainer &&
      (rs(function () {
        Ws(null, null, e, !1, function () {
          ;(e._reactRootContainer = null), (e[Fl] = null)
        })
      }),
      !0)
    )
  }),
  (A.unstable_batchedUpdates = ns),
  (A.unstable_createPortal = function (e, t) {
    return Hs(
      e,
      t,
      2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null,
    )
  }),
  (A.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
    if (!Vs(n)) throw Error($(200))
    if (null == e || void 0 === e._reactInternals) throw Error($(38))
    return Ws(e, t, n, !1, r)
  }),
  (A.version = '17.0.2'),
  (function e() {
    if (
      'undefined' != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
      'function' == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
      } catch (t) {
        console.error(t)
      }
  })(),
  (U.exports = A)
var Ks = U.exports,
  Ys = { exports: {} }
function Xs() {}
function Gs() {}
Gs.resetWarningCache = Xs
Ys.exports = (function () {
  function e(e, t, n, r, l, a) {
    if ('SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED' !== a) {
      var o = new Error(
        'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types',
      )
      throw ((o.name = 'Invariant Violation'), o)
    }
  }
  function t() {
    return e
  }
  e.isRequired = e
  var n = {
    array: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: Gs,
    resetWarningCache: Xs,
  }
  return (n.PropTypes = n), n
})()
var Zs = Ys.exports,
  Js = (function () {
    if ('undefined' != typeof Map) return Map
    function e(e, t) {
      var n = -1
      return (
        e.some(function (e, r) {
          return e[0] === t && ((n = r), !0)
        }),
        n
      )
    }
    return (function () {
      function t() {
        this.__entries__ = []
      }
      return (
        Object.defineProperty(t.prototype, 'size', {
          get: function () {
            return this.__entries__.length
          },
          enumerable: !0,
          configurable: !0,
        }),
        (t.prototype.get = function (t) {
          var n = e(this.__entries__, t),
            r = this.__entries__[n]
          return r && r[1]
        }),
        (t.prototype.set = function (t, n) {
          var r = e(this.__entries__, t)
          ~r ? (this.__entries__[r][1] = n) : this.__entries__.push([t, n])
        }),
        (t.prototype.delete = function (t) {
          var n = this.__entries__,
            r = e(n, t)
          ~r && n.splice(r, 1)
        }),
        (t.prototype.has = function (t) {
          return !!~e(this.__entries__, t)
        }),
        (t.prototype.clear = function () {
          this.__entries__.splice(0)
        }),
        (t.prototype.forEach = function (e, t) {
          void 0 === t && (t = null)
          for (var n = 0, r = this.__entries__; n < r.length; n++) {
            var l = r[n]
            e.call(t, l[1], l[0])
          }
        }),
        t
      )
    })()
  })(),
  ec =
    'undefined' != typeof window &&
    'undefined' != typeof document &&
    window.document === document,
  tc =
    'undefined' != typeof global && global.Math === Math
      ? global
      : 'undefined' != typeof self && self.Math === Math
      ? self
      : 'undefined' != typeof window && window.Math === Math
      ? window
      : Function('return this')(),
  nc =
    'function' == typeof requestAnimationFrame
      ? requestAnimationFrame.bind(tc)
      : function (e) {
          return setTimeout(function () {
            return e(Date.now())
          }, 1e3 / 60)
        }
var rc = [
    'top',
    'right',
    'bottom',
    'left',
    'width',
    'height',
    'size',
    'weight',
  ],
  lc = 'undefined' != typeof MutationObserver,
  ac = (function () {
    function e() {
      ;(this.connected_ = !1),
        (this.mutationEventsAdded_ = !1),
        (this.mutationsObserver_ = null),
        (this.observers_ = []),
        (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
        (this.refresh = (function (e, t) {
          var n = !1,
            r = !1,
            l = 0
          function a() {
            n && ((n = !1), e()), r && i()
          }
          function o() {
            nc(a)
          }
          function i() {
            var e = Date.now()
            if (n) {
              if (e - l < 2) return
              r = !0
            } else (n = !0), (r = !1), setTimeout(o, t)
            l = e
          }
          return i
        })(this.refresh.bind(this), 20))
    }
    return (
      (e.prototype.addObserver = function (e) {
        ~this.observers_.indexOf(e) || this.observers_.push(e),
          this.connected_ || this.connect_()
      }),
      (e.prototype.removeObserver = function (e) {
        var t = this.observers_,
          n = t.indexOf(e)
        ~n && t.splice(n, 1), !t.length && this.connected_ && this.disconnect_()
      }),
      (e.prototype.refresh = function () {
        this.updateObservers_() && this.refresh()
      }),
      (e.prototype.updateObservers_ = function () {
        var e = this.observers_.filter(function (e) {
          return e.gatherActive(), e.hasActive()
        })
        return (
          e.forEach(function (e) {
            return e.broadcastActive()
          }),
          e.length > 0
        )
      }),
      (e.prototype.connect_ = function () {
        ec &&
          !this.connected_ &&
          (document.addEventListener('transitionend', this.onTransitionEnd_),
          window.addEventListener('resize', this.refresh),
          lc
            ? ((this.mutationsObserver_ = new MutationObserver(this.refresh)),
              this.mutationsObserver_.observe(document, {
                attributes: !0,
                childList: !0,
                characterData: !0,
                subtree: !0,
              }))
            : (document.addEventListener('DOMSubtreeModified', this.refresh),
              (this.mutationEventsAdded_ = !0)),
          (this.connected_ = !0))
      }),
      (e.prototype.disconnect_ = function () {
        ec &&
          this.connected_ &&
          (document.removeEventListener('transitionend', this.onTransitionEnd_),
          window.removeEventListener('resize', this.refresh),
          this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
          this.mutationEventsAdded_ &&
            document.removeEventListener('DOMSubtreeModified', this.refresh),
          (this.mutationsObserver_ = null),
          (this.mutationEventsAdded_ = !1),
          (this.connected_ = !1))
      }),
      (e.prototype.onTransitionEnd_ = function (e) {
        var t = e.propertyName,
          n = void 0 === t ? '' : t
        rc.some(function (e) {
          return !!~n.indexOf(e)
        }) && this.refresh()
      }),
      (e.getInstance = function () {
        return this.instance_ || (this.instance_ = new e()), this.instance_
      }),
      (e.instance_ = null),
      e
    )
  })(),
  oc = function (e, t) {
    for (var n = 0, r = Object.keys(t); n < r.length; n++) {
      var l = r[n]
      Object.defineProperty(e, l, {
        value: t[l],
        enumerable: !1,
        writable: !1,
        configurable: !0,
      })
    }
    return e
  },
  ic = function (e) {
    return (e && e.ownerDocument && e.ownerDocument.defaultView) || tc
  },
  uc = hc(0, 0, 0, 0)
function sc(e) {
  return parseFloat(e) || 0
}
function cc(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n]
  return t.reduce(function (t, n) {
    return t + sc(e['border-' + n + '-width'])
  }, 0)
}
function fc(e) {
  var t = e.clientWidth,
    n = e.clientHeight
  if (!t && !n) return uc
  var r = ic(e).getComputedStyle(e),
    l = (function (e) {
      for (
        var t = {}, n = 0, r = ['top', 'right', 'bottom', 'left'];
        n < r.length;
        n++
      ) {
        var l = r[n],
          a = e['padding-' + l]
        t[l] = sc(a)
      }
      return t
    })(r),
    a = l.left + l.right,
    o = l.top + l.bottom,
    i = sc(r.width),
    u = sc(r.height)
  if (
    ('border-box' === r.boxSizing &&
      (Math.round(i + a) !== t && (i -= cc(r, 'left', 'right') + a),
      Math.round(u + o) !== n && (u -= cc(r, 'top', 'bottom') + o)),
    !(function (e) {
      return e === ic(e).document.documentElement
    })(e))
  ) {
    var s = Math.round(i + a) - t,
      c = Math.round(u + o) - n
    1 !== Math.abs(s) && (i -= s), 1 !== Math.abs(c) && (u -= c)
  }
  return hc(l.left, l.top, i, u)
}
var dc =
  'undefined' != typeof SVGGraphicsElement
    ? function (e) {
        return e instanceof ic(e).SVGGraphicsElement
      }
    : function (e) {
        return e instanceof ic(e).SVGElement && 'function' == typeof e.getBBox
      }
function pc(e) {
  return ec
    ? dc(e)
      ? (function (e) {
          var t = e.getBBox()
          return hc(0, 0, t.width, t.height)
        })(e)
      : fc(e)
    : uc
}
function hc(e, t, n, r) {
  return { x: e, y: t, width: n, height: r }
}
var mc = (function () {
    function e(e) {
      ;(this.broadcastWidth = 0),
        (this.broadcastHeight = 0),
        (this.contentRect_ = hc(0, 0, 0, 0)),
        (this.target = e)
    }
    return (
      (e.prototype.isActive = function () {
        var e = pc(this.target)
        return (
          (this.contentRect_ = e),
          e.width !== this.broadcastWidth || e.height !== this.broadcastHeight
        )
      }),
      (e.prototype.broadcastRect = function () {
        var e = this.contentRect_
        return (
          (this.broadcastWidth = e.width), (this.broadcastHeight = e.height), e
        )
      }),
      e
    )
  })(),
  vc = function (e, t) {
    var n,
      r,
      l,
      a,
      o,
      i,
      u,
      s =
        ((r = (n = t).x),
        (l = n.y),
        (a = n.width),
        (o = n.height),
        (i = 'undefined' != typeof DOMRectReadOnly ? DOMRectReadOnly : Object),
        (u = Object.create(i.prototype)),
        oc(u, {
          x: r,
          y: l,
          width: a,
          height: o,
          top: l,
          right: r + a,
          bottom: o + l,
          left: r,
        }),
        u)
    oc(this, { target: e, contentRect: s })
  },
  gc = (function () {
    function e(e, t, n) {
      if (
        ((this.activeObservations_ = []),
        (this.observations_ = new Js()),
        'function' != typeof e)
      )
        throw new TypeError(
          'The callback provided as parameter 1 is not a function.',
        )
      ;(this.callback_ = e), (this.controller_ = t), (this.callbackCtx_ = n)
    }
    return (
      (e.prototype.observe = function (e) {
        if (!arguments.length)
          throw new TypeError('1 argument required, but only 0 present.')
        if ('undefined' != typeof Element && Element instanceof Object) {
          if (!(e instanceof ic(e).Element))
            throw new TypeError('parameter 1 is not of type "Element".')
          var t = this.observations_
          t.has(e) ||
            (t.set(e, new mc(e)),
            this.controller_.addObserver(this),
            this.controller_.refresh())
        }
      }),
      (e.prototype.unobserve = function (e) {
        if (!arguments.length)
          throw new TypeError('1 argument required, but only 0 present.')
        if ('undefined' != typeof Element && Element instanceof Object) {
          if (!(e instanceof ic(e).Element))
            throw new TypeError('parameter 1 is not of type "Element".')
          var t = this.observations_
          t.has(e) &&
            (t.delete(e), t.size || this.controller_.removeObserver(this))
        }
      }),
      (e.prototype.disconnect = function () {
        this.clearActive(),
          this.observations_.clear(),
          this.controller_.removeObserver(this)
      }),
      (e.prototype.gatherActive = function () {
        var e = this
        this.clearActive(),
          this.observations_.forEach(function (t) {
            t.isActive() && e.activeObservations_.push(t)
          })
      }),
      (e.prototype.broadcastActive = function () {
        if (this.hasActive()) {
          var e = this.callbackCtx_,
            t = this.activeObservations_.map(function (e) {
              return new vc(e.target, e.broadcastRect())
            })
          this.callback_.call(e, t, e), this.clearActive()
        }
      }),
      (e.prototype.clearActive = function () {
        this.activeObservations_.splice(0)
      }),
      (e.prototype.hasActive = function () {
        return this.activeObservations_.length > 0
      }),
      e
    )
  })(),
  yc = 'undefined' != typeof WeakMap ? new WeakMap() : new Js(),
  bc = function e(t) {
    if (!(this instanceof e))
      throw new TypeError('Cannot call a class as a function.')
    if (!arguments.length)
      throw new TypeError('1 argument required, but only 0 present.')
    var n = ac.getInstance(),
      r = new gc(t, n, this)
    yc.set(this, r)
  }
;['observe', 'unobserve', 'disconnect'].forEach(function (e) {
  bc.prototype[e] = function () {
    var t
    return (t = yc.get(this))[e].apply(t, arguments)
  }
})
var wc = void 0 !== tc.ResizeObserver ? tc.ResizeObserver : bc
function kc(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  )
}
function Ec() {
  return (Ec =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t]
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    }).apply(this, arguments)
}
function Sc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n)
    'function' == typeof Object.getOwnPropertySymbols &&
      (r = r.concat(
        Object.getOwnPropertySymbols(n).filter(function (e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }),
      )),
      r.forEach(function (t) {
        kc(e, t, n[t])
      })
  }
  return e
}
function _c(e, t) {
  if (null == e) return {}
  var n,
    r,
    l = (function (e, t) {
      if (null == e) return {}
      var n,
        r,
        l = {},
        a = Object.keys(e)
      for (r = 0; r < a.length; r++)
        (n = a[r]), t.indexOf(n) >= 0 || (l[n] = e[n])
      return l
    })(e, t)
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e)
    for (r = 0; r < a.length; r++)
      (n = a[r]),
        t.indexOf(n) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]))
  }
  return l
}
function xc(e, t) {
  return (
    (function (e) {
      if (Array.isArray(e)) return e
    })(e) ||
    (function (e, t) {
      var n = [],
        r = !0,
        l = !1,
        a = void 0
      try {
        for (
          var o, i = e[Symbol.iterator]();
          !(r = (o = i.next()).done) && (n.push(o.value), !t || n.length !== t);
          r = !0
        );
      } catch (u) {
        ;(l = !0), (a = u)
      } finally {
        try {
          r || null == i.return || i.return()
        } finally {
          if (l) throw a
        }
      }
      return n
    })(e, t) ||
    (function () {
      throw new TypeError(
        'Invalid attempt to destructure non-iterable instance',
      )
    })()
  )
}
var Cc = { cursor: 'pointer' },
  Pc = function (e) {
    var t = e.index,
      n = e.onClick,
      r = e.photo,
      l = e.margin,
      a = e.direction,
      o = e.top,
      i = e.left,
      u = e.key,
      s = { margin: l, display: 'block' }
    'column' === a && ((s.position = 'absolute'), (s.left = i), (s.top = o))
    return I.createElement(
      'img',
      Ec({ key: u, style: n ? Sc({}, s, Cc) : s }, r, {
        onClick: n
          ? function (e) {
              n(e, { photo: r, index: t })
            }
          : null,
      }),
    )
  },
  Oc = Zs.shape({
    key: Zs.string,
    src: Zs.string.isRequired,
    width: Zs.number.isRequired,
    height: Zs.number.isRequired,
    alt: Zs.string,
    title: Zs.string,
    srcSet: Zs.oneOfType([Zs.string, Zs.array]),
    sizes: Zs.oneOfType([Zs.string, Zs.array]),
  })
Pc.propTypes = {
  index: Zs.number.isRequired,
  onClick: Zs.func,
  photo: Oc.isRequired,
  margin: Zs.number,
  top: function (e) {
    if ('column' === e.direction && 'number' != typeof e.top)
      return new Error(
        'top is a required number when direction is set to `column`',
      )
  },
  left: function (e) {
    if ('column' === e.direction && 'number' != typeof e.left)
      return new Error(
        'left is a required number when direction is set to `column`',
      )
  },
  direction: Zs.string,
}
var Tc = function (e, t) {
    return t || (t = 0), Number(Math.round(e + 'e' + t) + 'e-' + t)
  },
  Nc = function (e) {
    var t = e.width,
      n = e.height
    return Tc(t / n, 2)
  }
function zc(e) {
  ;(this.content = []), (this.scoreFunction = e)
}
zc.prototype = {
  push: function (e) {
    this.content.push(e), this.bubbleUp(this.content.length - 1)
  },
  pop: function () {
    var e = this.content[0],
      t = this.content.pop()
    return (
      this.content.length > 0 && ((this.content[0] = t), this.sinkDown(0)), e
    )
  },
  remove: function (e) {
    for (var t = this.content.length, n = 0; n < t; n++)
      if (this.content[n] == e) {
        var r = this.content.pop()
        if (n == t - 1) break
        ;(this.content[n] = r), this.bubbleUp(n), this.sinkDown(n)
        break
      }
  },
  size: function () {
    return this.content.length
  },
  bubbleUp: function (e) {
    for (var t = this.content[e], n = this.scoreFunction(t); e > 0; ) {
      var r = Math.floor((e + 1) / 2) - 1,
        l = this.content[r]
      if (n >= this.scoreFunction(l)) break
      ;(this.content[r] = t), (this.content[e] = l), (e = r)
    }
  },
  sinkDown: function (e) {
    for (
      var t = this.content.length,
        n = this.content[e],
        r = this.scoreFunction(n);
      ;

    ) {
      var l = 2 * (e + 1),
        a = l - 1,
        o = null
      if (a < t) {
        var i = this.content[a],
          u = this.scoreFunction(i)
        u < r && (o = a)
      }
      if (l < t) {
        var s = this.content[l]
        this.scoreFunction(s) < (null == o ? r : u) && (o = l)
      }
      if (null == o) break
      ;(this.content[e] = this.content[o]), (this.content[o] = n), (e = o)
    }
  },
}
var Lc = function (e, t, n) {
    return (function (e, t) {
      for (var n = [], r = t; r; ) n.push(r), (r = e[r])
      return n.reverse()
    })(
      (function (e, t, n) {
        var r = {},
          l = {},
          a = {}
        a[t] = 0
        var o = new zc(function (e) {
          return e.weight
        })
        for (o.push({ id: t, weight: 0 }); o.size(); ) {
          var i = o.pop(),
            u = i.id
          if (!l[u]) {
            var s = e(u) || {}
            for (var c in ((l[u] = 1), s)) {
              var f = i.weight + s[c]
              ;(void 0 === a[c] || a[c] > f) &&
                ((a[c] = f), o.push({ id: c, weight: f }), (r[c] = u))
            }
          }
        }
        if (void 0 === a[n])
          throw new Error('There is no path from '.concat(t, ' to ').concat(n))
        return r
      })(e, t, n),
      n,
    )
  },
  Rc = function (e, t, n) {
    return (
      (t - e.length * (2 * n)) /
      e.reduce(function (e, t) {
        return e + Nc(t)
      }, 0)
    )
  },
  Mc = function (e, t, n, r, l, a) {
    var o = e.slice(t, n),
      i = Rc(o, r, a)
    return Math.pow(Math.abs(i - l), 2)
  },
  Dc = function (e) {
    var t = e.containerWidth,
      n = e.limitNodeSearch,
      r = e.targetRowHeight,
      l = e.margin,
      a = e.photos,
      o = (function (e, t, n, r, l) {
        return function (a) {
          var o = {}
          o[+(a = +a)] = 0
          for (var i = a + 1; i < n.length + 1 && !(i - a > r); ++i)
            o[i.toString()] = Mc(n, a, i, t, e, l)
          return o
        }
      })(r, t, a, n, l),
      i = Lc(o, '0', a.length)
    i = i.map(function (e) {
      return +e
    })
    for (var u = 1; u < i.length; ++u)
      for (
        var s = a.slice(i[u - 1], i[u]), c = Rc(s, t, l), f = i[u - 1];
        f < i[u];
        ++f
      )
        (a[f].width = Tc(c * Nc(a[f]), 1)), (a[f].height = c)
    return a
  },
  Fc = I.memo(function (t) {
    var n = t.photos,
      r = t.onClick,
      l = t.direction,
      a = t.margin,
      o = t.limitNodeSearch,
      i = t.targetRowHeight,
      u = t.columns,
      s = t.renderImage,
      c = xc(e.exports.useState(0), 2),
      f = c[0],
      d = c[1],
      p = e.exports.useRef(null)
    e.exports.useLayoutEffect(function () {
      var e = null,
        t = new wc(function (t) {
          var n = t[0].contentRect.width
          f !== n &&
            (e = window.requestAnimationFrame(function () {
              d(Math.floor(n))
            }))
        })
      return (
        t.observe(p.current),
        function () {
          t.disconnect(), window.cancelAnimationFrame(e)
        }
      )
    })
    var h = function (e, t) {
      var l = t.index
      r(e, {
        index: l,
        photo: n[l],
        previous: n[l - 1] || null,
        next: n[l + 1] || null,
      })
    }
    if (!f) return I.createElement('div', { ref: p }, ' ')
    var m,
      v,
      g = f - 1
    'row' === l &&
      ('function' == typeof o && (o = o(f)),
      'function' == typeof i && (i = i(f)),
      void 0 === o &&
        ((o = 2),
        f >= 450 &&
          (o = (function (e) {
            var t = e.targetRowHeight,
              n = e.containerWidth
            return Tc(n / t / 1.5) + 8
          })({ containerWidth: f, targetRowHeight: i }))),
      (m = { display: 'flex', flexWrap: 'wrap', flexDirection: 'row' }),
      (v = Dc({
        containerWidth: g,
        limitNodeSearch: o,
        targetRowHeight: i,
        margin: a,
        photos: n,
      }))),
      'column' === l &&
        ('function' == typeof u && (u = u(f)),
        void 0 === u &&
          ((u = 1),
          f >= 500 && (u = 2),
          f >= 900 && (u = 3),
          f >= 1500 && (u = 4)),
        (m = { position: 'relative' }),
        (v = (function (e) {
          for (
            var t = e.photos,
              n = e.columns,
              r = e.containerWidth,
              l = e.margin,
              a = (r - 2 * l * n) / n,
              o = t.map(function (e) {
                var t = (e.height / e.width) * a
                return Sc({}, e, { width: Tc(a, 1), height: Tc(t, 1) })
              }),
              i = [],
              u = [],
              s = 0;
            s < n;
            s++
          )
            (i[s] = Tc(s * (a + 2 * l), 1)), (u[s] = 0)
          return o.map(function (e) {
            var t = u.reduce(function (e, t, n) {
              return t < u[e] ? n : e
            }, 0)
            ;(e.top = u[t]), (e.left = i[t]), (u[t] = u[t] + e.height + 2 * l)
            var n = u.reduce(function (e, t, n) {
              return t > u[e] ? n : e
            }, 0)
            return (e.containerHeight = u[n]), e
          })
        })({ containerWidth: g, columns: u, margin: a, photos: n })),
        (m.height = v[v.length - 1].containerHeight))
    var y = s || Pc
    return I.createElement(
      'div',
      { className: 'react-photo-gallery--gallery' },
      I.createElement(
        'div',
        { ref: p, style: m },
        v.map(function (e, t) {
          var n = e.left,
            o = e.top,
            i = e.containerHeight,
            u = _c(e, ['left', 'top', 'containerHeight'])
          return y({
            left: n,
            top: o,
            key: e.key || e.src,
            containerHeight: i,
            index: t,
            margin: a,
            direction: l,
            onClick: r ? h : null,
            photo: u,
          })
        }),
      ),
    )
  })
;(Fc.propTypes = {
  photos: Zs.arrayOf(Oc).isRequired,
  direction: Zs.string,
  onClick: Zs.func,
  columns: Zs.oneOfType([Zs.func, Zs.number]),
  targetRowHeight: Zs.oneOfType([Zs.func, Zs.number]),
  limitNodeSearch: Zs.oneOfType([Zs.func, Zs.number]),
  margin: Zs.number,
  renderImage: Zs.func,
}),
  (Fc.defaultProps = { margin: 2, direction: 'row', targetRowHeight: 300 })
export { e as C, Fc as G, I as R, Ks as a }
