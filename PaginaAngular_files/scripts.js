/*!
  * Bootstrap v5.3.6 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function(t, e) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e();
}(this, function() {
  "use strict";
  const t = /* @__PURE__ */ new Map(), e = { set(e2, i2, n2) {
    t.has(e2) || t.set(e2, /* @__PURE__ */ new Map());
    const s2 = t.get(e2);
    s2.has(i2) || 0 === s2.size ? s2.set(i2, n2) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s2.keys())[0]}.`);
  }, get: (e2, i2) => t.has(e2) && t.get(e2).get(i2) || null, remove(e2, i2) {
    if (!t.has(e2)) return;
    const n2 = t.get(e2);
    n2.delete(i2), 0 === n2.size && t.delete(e2);
  } }, i = "transitionend", n = (t2) => (t2 && window.CSS && window.CSS.escape && (t2 = t2.replace(/#([^\s"#']+)/g, (t3, e2) => `#${CSS.escape(e2)}`)), t2), s = (t2) => {
    t2.dispatchEvent(new Event(i));
  }, o = (t2) => !(!t2 || "object" != typeof t2) && (void 0 !== t2.jquery && (t2 = t2[0]), void 0 !== t2.nodeType), r = (t2) => o(t2) ? t2.jquery ? t2[0] : t2 : "string" == typeof t2 && t2.length > 0 ? document.querySelector(n(t2)) : null, a = (t2) => {
    if (!o(t2) || 0 === t2.getClientRects().length) return false;
    const e2 = "visible" === getComputedStyle(t2).getPropertyValue("visibility"), i2 = t2.closest("details:not([open])");
    if (!i2) return e2;
    if (i2 !== t2) {
      const e3 = t2.closest("summary");
      if (e3 && e3.parentNode !== i2) return false;
      if (null === e3) return false;
    }
    return e2;
  }, l = (t2) => !t2 || t2.nodeType !== Node.ELEMENT_NODE || !!t2.classList.contains("disabled") || (void 0 !== t2.disabled ? t2.disabled : t2.hasAttribute("disabled") && "false" !== t2.getAttribute("disabled")), c = (t2) => {
    if (!document.documentElement.attachShadow) return null;
    if ("function" == typeof t2.getRootNode) {
      const e2 = t2.getRootNode();
      return e2 instanceof ShadowRoot ? e2 : null;
    }
    return t2 instanceof ShadowRoot ? t2 : t2.parentNode ? c(t2.parentNode) : null;
  }, h = () => {
  }, d = (t2) => {
    t2.offsetHeight;
  }, u = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null, f = [], p = () => "rtl" === document.documentElement.dir, m = (t2) => {
    var e2;
    e2 = () => {
      const e3 = u();
      if (e3) {
        const i2 = t2.NAME, n2 = e3.fn[i2];
        e3.fn[i2] = t2.jQueryInterface, e3.fn[i2].Constructor = t2, e3.fn[i2].noConflict = () => (e3.fn[i2] = n2, t2.jQueryInterface);
      }
    }, "loading" === document.readyState ? (f.length || document.addEventListener("DOMContentLoaded", () => {
      for (const t3 of f) t3();
    }), f.push(e2)) : e2();
  }, g = (t2, e2 = [], i2 = t2) => "function" == typeof t2 ? t2.call(...e2) : i2, _ = (t2, e2, n2 = true) => {
    if (!n2) return void g(t2);
    const o2 = ((t3) => {
      if (!t3) return 0;
      let { transitionDuration: e3, transitionDelay: i2 } = window.getComputedStyle(t3);
      const n3 = Number.parseFloat(e3), s2 = Number.parseFloat(i2);
      return n3 || s2 ? (e3 = e3.split(",")[0], i2 = i2.split(",")[0], 1e3 * (Number.parseFloat(e3) + Number.parseFloat(i2))) : 0;
    })(e2) + 5;
    let r2 = false;
    const a2 = ({ target: n3 }) => {
      n3 === e2 && (r2 = true, e2.removeEventListener(i, a2), g(t2));
    };
    e2.addEventListener(i, a2), setTimeout(() => {
      r2 || s(e2);
    }, o2);
  }, b = (t2, e2, i2, n2) => {
    const s2 = t2.length;
    let o2 = t2.indexOf(e2);
    return -1 === o2 ? !i2 && n2 ? t2[s2 - 1] : t2[0] : (o2 += i2 ? 1 : -1, n2 && (o2 = (o2 + s2) % s2), t2[Math.max(0, Math.min(o2, s2 - 1))]);
  }, v = /[^.]*(?=\..*)\.|.*/, y = /\..*/, w = /::\d+$/, A = {};
  let E = 1;
  const T = { mouseenter: "mouseover", mouseleave: "mouseout" }, C = /* @__PURE__ */ new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
  function O(t2, e2) {
    return e2 && `${e2}::${E++}` || t2.uidEvent || E++;
  }
  function x(t2) {
    const e2 = O(t2);
    return t2.uidEvent = e2, A[e2] = A[e2] || {}, A[e2];
  }
  function k(t2, e2, i2 = null) {
    return Object.values(t2).find((t3) => t3.callable === e2 && t3.delegationSelector === i2);
  }
  function L(t2, e2, i2) {
    const n2 = "string" == typeof e2, s2 = n2 ? i2 : e2 || i2;
    let o2 = I(t2);
    return C.has(o2) || (o2 = t2), [n2, s2, o2];
  }
  function S(t2, e2, i2, n2, s2) {
    if ("string" != typeof e2 || !t2) return;
    let [o2, r2, a2] = L(e2, i2, n2);
    if (e2 in T) {
      const t3 = (t4) => function(e3) {
        if (!e3.relatedTarget || e3.relatedTarget !== e3.delegateTarget && !e3.delegateTarget.contains(e3.relatedTarget)) return t4.call(this, e3);
      };
      r2 = t3(r2);
    }
    const l2 = x(t2), c2 = l2[a2] || (l2[a2] = {}), h2 = k(c2, r2, o2 ? i2 : null);
    if (h2) return void (h2.oneOff = h2.oneOff && s2);
    const d2 = O(r2, e2.replace(v, "")), u2 = o2 ? /* @__PURE__ */ function(t3, e3, i3) {
      return function n3(s3) {
        const o3 = t3.querySelectorAll(e3);
        for (let { target: r3 } = s3; r3 && r3 !== this; r3 = r3.parentNode) for (const a3 of o3) if (a3 === r3) return P(s3, { delegateTarget: r3 }), n3.oneOff && N.off(t3, s3.type, e3, i3), i3.apply(r3, [s3]);
      };
    }(t2, i2, r2) : /* @__PURE__ */ function(t3, e3) {
      return function i3(n3) {
        return P(n3, { delegateTarget: t3 }), i3.oneOff && N.off(t3, n3.type, e3), e3.apply(t3, [n3]);
      };
    }(t2, r2);
    u2.delegationSelector = o2 ? i2 : null, u2.callable = r2, u2.oneOff = s2, u2.uidEvent = d2, c2[d2] = u2, t2.addEventListener(a2, u2, o2);
  }
  function D(t2, e2, i2, n2, s2) {
    const o2 = k(e2[i2], n2, s2);
    o2 && (t2.removeEventListener(i2, o2, Boolean(s2)), delete e2[i2][o2.uidEvent]);
  }
  function $(t2, e2, i2, n2) {
    const s2 = e2[i2] || {};
    for (const [o2, r2] of Object.entries(s2)) o2.includes(n2) && D(t2, e2, i2, r2.callable, r2.delegationSelector);
  }
  function I(t2) {
    return t2 = t2.replace(y, ""), T[t2] || t2;
  }
  const N = { on(t2, e2, i2, n2) {
    S(t2, e2, i2, n2, false);
  }, one(t2, e2, i2, n2) {
    S(t2, e2, i2, n2, true);
  }, off(t2, e2, i2, n2) {
    if ("string" != typeof e2 || !t2) return;
    const [s2, o2, r2] = L(e2, i2, n2), a2 = r2 !== e2, l2 = x(t2), c2 = l2[r2] || {}, h2 = e2.startsWith(".");
    if (void 0 === o2) {
      if (h2) for (const i3 of Object.keys(l2)) $(t2, l2, i3, e2.slice(1));
      for (const [i3, n3] of Object.entries(c2)) {
        const s3 = i3.replace(w, "");
        a2 && !e2.includes(s3) || D(t2, l2, r2, n3.callable, n3.delegationSelector);
      }
    } else {
      if (!Object.keys(c2).length) return;
      D(t2, l2, r2, o2, s2 ? i2 : null);
    }
  }, trigger(t2, e2, i2) {
    if ("string" != typeof e2 || !t2) return null;
    const n2 = u();
    let s2 = null, o2 = true, r2 = true, a2 = false;
    e2 !== I(e2) && n2 && (s2 = n2.Event(e2, i2), n2(t2).trigger(s2), o2 = !s2.isPropagationStopped(), r2 = !s2.isImmediatePropagationStopped(), a2 = s2.isDefaultPrevented());
    const l2 = P(new Event(e2, { bubbles: o2, cancelable: true }), i2);
    return a2 && l2.preventDefault(), r2 && t2.dispatchEvent(l2), l2.defaultPrevented && s2 && s2.preventDefault(), l2;
  } };
  function P(t2, e2 = {}) {
    for (const [i2, n2] of Object.entries(e2)) try {
      t2[i2] = n2;
    } catch (e3) {
      Object.defineProperty(t2, i2, { configurable: true, get: () => n2 });
    }
    return t2;
  }
  function j(t2) {
    if ("true" === t2) return true;
    if ("false" === t2) return false;
    if (t2 === Number(t2).toString()) return Number(t2);
    if ("" === t2 || "null" === t2) return null;
    if ("string" != typeof t2) return t2;
    try {
      return JSON.parse(decodeURIComponent(t2));
    } catch (e2) {
      return t2;
    }
  }
  function M(t2) {
    return t2.replace(/[A-Z]/g, (t3) => `-${t3.toLowerCase()}`);
  }
  const F = { setDataAttribute(t2, e2, i2) {
    t2.setAttribute(`data-bs-${M(e2)}`, i2);
  }, removeDataAttribute(t2, e2) {
    t2.removeAttribute(`data-bs-${M(e2)}`);
  }, getDataAttributes(t2) {
    if (!t2) return {};
    const e2 = {}, i2 = Object.keys(t2.dataset).filter((t3) => t3.startsWith("bs") && !t3.startsWith("bsConfig"));
    for (const n2 of i2) {
      let i3 = n2.replace(/^bs/, "");
      i3 = i3.charAt(0).toLowerCase() + i3.slice(1), e2[i3] = j(t2.dataset[n2]);
    }
    return e2;
  }, getDataAttribute: (t2, e2) => j(t2.getAttribute(`data-bs-${M(e2)}`)) };
  class H {
    static get Default() {
      return {};
    }
    static get DefaultType() {
      return {};
    }
    static get NAME() {
      throw new Error('You have to implement the static method "NAME", for each component!');
    }
    _getConfig(t2) {
      return t2 = this._mergeConfigObj(t2), t2 = this._configAfterMerge(t2), this._typeCheckConfig(t2), t2;
    }
    _configAfterMerge(t2) {
      return t2;
    }
    _mergeConfigObj(t2, e2) {
      const i2 = o(e2) ? F.getDataAttribute(e2, "config") : {};
      return { ...this.constructor.Default, ..."object" == typeof i2 ? i2 : {}, ...o(e2) ? F.getDataAttributes(e2) : {}, ..."object" == typeof t2 ? t2 : {} };
    }
    _typeCheckConfig(t2, e2 = this.constructor.DefaultType) {
      for (const [n2, s2] of Object.entries(e2)) {
        const e3 = t2[n2], r2 = o(e3) ? "element" : null == (i2 = e3) ? `${i2}` : Object.prototype.toString.call(i2).match(/\s([a-z]+)/i)[1].toLowerCase();
        if (!new RegExp(s2).test(r2)) throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${n2}" provided type "${r2}" but expected type "${s2}".`);
      }
      var i2;
    }
  }
  class W extends H {
    constructor(t2, i2) {
      super(), (t2 = r(t2)) && (this._element = t2, this._config = this._getConfig(i2), e.set(this._element, this.constructor.DATA_KEY, this));
    }
    dispose() {
      e.remove(this._element, this.constructor.DATA_KEY), N.off(this._element, this.constructor.EVENT_KEY);
      for (const t2 of Object.getOwnPropertyNames(this)) this[t2] = null;
    }
    _queueCallback(t2, e2, i2 = true) {
      _(t2, e2, i2);
    }
    _getConfig(t2) {
      return t2 = this._mergeConfigObj(t2, this._element), t2 = this._configAfterMerge(t2), this._typeCheckConfig(t2), t2;
    }
    static getInstance(t2) {
      return e.get(r(t2), this.DATA_KEY);
    }
    static getOrCreateInstance(t2, e2 = {}) {
      return this.getInstance(t2) || new this(t2, "object" == typeof e2 ? e2 : null);
    }
    static get VERSION() {
      return "5.3.6";
    }
    static get DATA_KEY() {
      return `bs.${this.NAME}`;
    }
    static get EVENT_KEY() {
      return `.${this.DATA_KEY}`;
    }
    static eventName(t2) {
      return `${t2}${this.EVENT_KEY}`;
    }
  }
  const B = (t2) => {
    let e2 = t2.getAttribute("data-bs-target");
    if (!e2 || "#" === e2) {
      let i2 = t2.getAttribute("href");
      if (!i2 || !i2.includes("#") && !i2.startsWith(".")) return null;
      i2.includes("#") && !i2.startsWith("#") && (i2 = `#${i2.split("#")[1]}`), e2 = i2 && "#" !== i2 ? i2.trim() : null;
    }
    return e2 ? e2.split(",").map((t3) => n(t3)).join(",") : null;
  }, z = { find: (t2, e2 = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(e2, t2)), findOne: (t2, e2 = document.documentElement) => Element.prototype.querySelector.call(e2, t2), children: (t2, e2) => [].concat(...t2.children).filter((t3) => t3.matches(e2)), parents(t2, e2) {
    const i2 = [];
    let n2 = t2.parentNode.closest(e2);
    for (; n2; ) i2.push(n2), n2 = n2.parentNode.closest(e2);
    return i2;
  }, prev(t2, e2) {
    let i2 = t2.previousElementSibling;
    for (; i2; ) {
      if (i2.matches(e2)) return [i2];
      i2 = i2.previousElementSibling;
    }
    return [];
  }, next(t2, e2) {
    let i2 = t2.nextElementSibling;
    for (; i2; ) {
      if (i2.matches(e2)) return [i2];
      i2 = i2.nextElementSibling;
    }
    return [];
  }, focusableChildren(t2) {
    const e2 = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((t3) => `${t3}:not([tabindex^="-"])`).join(",");
    return this.find(e2, t2).filter((t3) => !l(t3) && a(t3));
  }, getSelectorFromElement(t2) {
    const e2 = B(t2);
    return e2 && z.findOne(e2) ? e2 : null;
  }, getElementFromSelector(t2) {
    const e2 = B(t2);
    return e2 ? z.findOne(e2) : null;
  }, getMultipleElementsFromSelector(t2) {
    const e2 = B(t2);
    return e2 ? z.find(e2) : [];
  } }, R = (t2, e2 = "hide") => {
    const i2 = `click.dismiss${t2.EVENT_KEY}`, n2 = t2.NAME;
    N.on(document, i2, `[data-bs-dismiss="${n2}"]`, function(i3) {
      if (["A", "AREA"].includes(this.tagName) && i3.preventDefault(), l(this)) return;
      const s2 = z.getElementFromSelector(this) || this.closest(`.${n2}`);
      t2.getOrCreateInstance(s2)[e2]();
    });
  }, q = ".bs.alert", V = `close${q}`, K = `closed${q}`;
  class Q extends W {
    static get NAME() {
      return "alert";
    }
    close() {
      if (N.trigger(this._element, V).defaultPrevented) return;
      this._element.classList.remove("show");
      const t2 = this._element.classList.contains("fade");
      this._queueCallback(() => this._destroyElement(), this._element, t2);
    }
    _destroyElement() {
      this._element.remove(), N.trigger(this._element, K), this.dispose();
    }
    static jQueryInterface(t2) {
      return this.each(function() {
        const e2 = Q.getOrCreateInstance(this);
        if ("string" == typeof t2) {
          if (void 0 === e2[t2] || t2.startsWith("_") || "constructor" === t2) throw new TypeError(`No method named "${t2}"`);
          e2[t2](this);
        }
      });
    }
  }
  R(Q, "close"), m(Q);
  const X = '[data-bs-toggle="button"]';
  class Y extends W {
    static get NAME() {
      return "button";
    }
    toggle() {
      this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
    }
    static jQueryInterface(t2) {
      return this.each(function() {
        const e2 = Y.getOrCreateInstance(this);
        "toggle" === t2 && e2[t2]();
      });
    }
  }
  N.on(document, "click.bs.button.data-api", X, (t2) => {
    t2.preventDefault();
    const e2 = t2.target.closest(X);
    Y.getOrCreateInstance(e2).toggle();
  }), m(Y);
  const U = ".bs.swipe", G = `touchstart${U}`, J = `touchmove${U}`, Z = `touchend${U}`, tt = `pointerdown${U}`, et = `pointerup${U}`, it = { endCallback: null, leftCallback: null, rightCallback: null }, nt = { endCallback: "(function|null)", leftCallback: "(function|null)", rightCallback: "(function|null)" };
  class st extends H {
    constructor(t2, e2) {
      super(), this._element = t2, t2 && st.isSupported() && (this._config = this._getConfig(e2), this._deltaX = 0, this._supportPointerEvents = Boolean(window.PointerEvent), this._initEvents());
    }
    static get Default() {
      return it;
    }
    static get DefaultType() {
      return nt;
    }
    static get NAME() {
      return "swipe";
    }
    dispose() {
      N.off(this._element, U);
    }
    _start(t2) {
      this._supportPointerEvents ? this._eventIsPointerPenTouch(t2) && (this._deltaX = t2.clientX) : this._deltaX = t2.touches[0].clientX;
    }
    _end(t2) {
      this._eventIsPointerPenTouch(t2) && (this._deltaX = t2.clientX - this._deltaX), this._handleSwipe(), g(this._config.endCallback);
    }
    _move(t2) {
      this._deltaX = t2.touches && t2.touches.length > 1 ? 0 : t2.touches[0].clientX - this._deltaX;
    }
    _handleSwipe() {
      const t2 = Math.abs(this._deltaX);
      if (t2 <= 40) return;
      const e2 = t2 / this._deltaX;
      this._deltaX = 0, e2 && g(e2 > 0 ? this._config.rightCallback : this._config.leftCallback);
    }
    _initEvents() {
      this._supportPointerEvents ? (N.on(this._element, tt, (t2) => this._start(t2)), N.on(this._element, et, (t2) => this._end(t2)), this._element.classList.add("pointer-event")) : (N.on(this._element, G, (t2) => this._start(t2)), N.on(this._element, J, (t2) => this._move(t2)), N.on(this._element, Z, (t2) => this._end(t2)));
    }
    _eventIsPointerPenTouch(t2) {
      return this._supportPointerEvents && ("pen" === t2.pointerType || "touch" === t2.pointerType);
    }
    static isSupported() {
      return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
    }
  }
  const ot = ".bs.carousel", rt = ".data-api", at = "ArrowLeft", lt = "ArrowRight", ct = "next", ht = "prev", dt = "left", ut = "right", ft = `slide${ot}`, pt = `slid${ot}`, mt = `keydown${ot}`, gt = `mouseenter${ot}`, _t = `mouseleave${ot}`, bt = `dragstart${ot}`, vt = `load${ot}${rt}`, yt = `click${ot}${rt}`, wt = "carousel", At = "active", Et = ".active", Tt = ".carousel-item", Ct = Et + Tt, Ot = { [at]: ut, [lt]: dt }, xt = { interval: 5e3, keyboard: true, pause: "hover", ride: false, touch: true, wrap: true }, kt = { interval: "(number|boolean)", keyboard: "boolean", pause: "(string|boolean)", ride: "(boolean|string)", touch: "boolean", wrap: "boolean" };
  class Lt extends W {
    constructor(t2, e2) {
      super(t2, e2), this._interval = null, this._activeElement = null, this._isSliding = false, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = z.findOne(".carousel-indicators", this._element), this._addEventListeners(), this._config.ride === wt && this.cycle();
    }
    static get Default() {
      return xt;
    }
    static get DefaultType() {
      return kt;
    }
    static get NAME() {
      return "carousel";
    }
    next() {
      this._slide(ct);
    }
    nextWhenVisible() {
      !document.hidden && a(this._element) && this.next();
    }
    prev() {
      this._slide(ht);
    }
    pause() {
      this._isSliding && s(this._element), this._clearInterval();
    }
    cycle() {
      this._clearInterval(), this._updateInterval(), this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval);
    }
    _maybeEnableCycle() {
      this._config.ride && (this._isSliding ? N.one(this._element, pt, () => this.cycle()) : this.cycle());
    }
    to(t2) {
      const e2 = this._getItems();
      if (t2 > e2.length - 1 || t2 < 0) return;
      if (this._isSliding) return void N.one(this._element, pt, () => this.to(t2));
      const i2 = this._getItemIndex(this._getActive());
      if (i2 === t2) return;
      const n2 = t2 > i2 ? ct : ht;
      this._slide(n2, e2[t2]);
    }
    dispose() {
      this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
    }
    _configAfterMerge(t2) {
      return t2.defaultInterval = t2.interval, t2;
    }
    _addEventListeners() {
      this._config.keyboard && N.on(this._element, mt, (t2) => this._keydown(t2)), "hover" === this._config.pause && (N.on(this._element, gt, () => this.pause()), N.on(this._element, _t, () => this._maybeEnableCycle())), this._config.touch && st.isSupported() && this._addTouchEventListeners();
    }
    _addTouchEventListeners() {
      for (const t3 of z.find(".carousel-item img", this._element)) N.on(t3, bt, (t4) => t4.preventDefault());
      const t2 = { leftCallback: () => this._slide(this._directionToOrder(dt)), rightCallback: () => this._slide(this._directionToOrder(ut)), endCallback: () => {
        "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), 500 + this._config.interval));
      } };
      this._swipeHelper = new st(this._element, t2);
    }
    _keydown(t2) {
      if (/input|textarea/i.test(t2.target.tagName)) return;
      const e2 = Ot[t2.key];
      e2 && (t2.preventDefault(), this._slide(this._directionToOrder(e2)));
    }
    _getItemIndex(t2) {
      return this._getItems().indexOf(t2);
    }
    _setActiveIndicatorElement(t2) {
      if (!this._indicatorsElement) return;
      const e2 = z.findOne(Et, this._indicatorsElement);
      e2.classList.remove(At), e2.removeAttribute("aria-current");
      const i2 = z.findOne(`[data-bs-slide-to="${t2}"]`, this._indicatorsElement);
      i2 && (i2.classList.add(At), i2.setAttribute("aria-current", "true"));
    }
    _updateInterval() {
      const t2 = this._activeElement || this._getActive();
      if (!t2) return;
      const e2 = Number.parseInt(t2.getAttribute("data-bs-interval"), 10);
      this._config.interval = e2 || this._config.defaultInterval;
    }
    _slide(t2, e2 = null) {
      if (this._isSliding) return;
      const i2 = this._getActive(), n2 = t2 === ct, s2 = e2 || b(this._getItems(), i2, n2, this._config.wrap);
      if (s2 === i2) return;
      const o2 = this._getItemIndex(s2), r2 = (e3) => N.trigger(this._element, e3, { relatedTarget: s2, direction: this._orderToDirection(t2), from: this._getItemIndex(i2), to: o2 });
      if (r2(ft).defaultPrevented) return;
      if (!i2 || !s2) return;
      const a2 = Boolean(this._interval);
      this.pause(), this._isSliding = true, this._setActiveIndicatorElement(o2), this._activeElement = s2;
      const l2 = n2 ? "carousel-item-start" : "carousel-item-end", c2 = n2 ? "carousel-item-next" : "carousel-item-prev";
      s2.classList.add(c2), d(s2), i2.classList.add(l2), s2.classList.add(l2), this._queueCallback(() => {
        s2.classList.remove(l2, c2), s2.classList.add(At), i2.classList.remove(At, c2, l2), this._isSliding = false, r2(pt);
      }, i2, this._isAnimated()), a2 && this.cycle();
    }
    _isAnimated() {
      return this._element.classList.contains("slide");
    }
    _getActive() {
      return z.findOne(Ct, this._element);
    }
    _getItems() {
      return z.find(Tt, this._element);
    }
    _clearInterval() {
      this._interval && (clearInterval(this._interval), this._interval = null);
    }
    _directionToOrder(t2) {
      return p() ? t2 === dt ? ht : ct : t2 === dt ? ct : ht;
    }
    _orderToDirection(t2) {
      return p() ? t2 === ht ? dt : ut : t2 === ht ? ut : dt;
    }
    static jQueryInterface(t2) {
      return this.each(function() {
        const e2 = Lt.getOrCreateInstance(this, t2);
        if ("number" != typeof t2) {
          if ("string" == typeof t2) {
            if (void 0 === e2[t2] || t2.startsWith("_") || "constructor" === t2) throw new TypeError(`No method named "${t2}"`);
            e2[t2]();
          }
        } else e2.to(t2);
      });
    }
  }
  N.on(document, yt, "[data-bs-slide], [data-bs-slide-to]", function(t2) {
    const e2 = z.getElementFromSelector(this);
    if (!e2 || !e2.classList.contains(wt)) return;
    t2.preventDefault();
    const i2 = Lt.getOrCreateInstance(e2), n2 = this.getAttribute("data-bs-slide-to");
    return n2 ? (i2.to(n2), void i2._maybeEnableCycle()) : "next" === F.getDataAttribute(this, "slide") ? (i2.next(), void i2._maybeEnableCycle()) : (i2.prev(), void i2._maybeEnableCycle());
  }), N.on(window, vt, () => {
    const t2 = z.find('[data-bs-ride="carousel"]');
    for (const e2 of t2) Lt.getOrCreateInstance(e2);
  }), m(Lt);
  const St = ".bs.collapse", Dt = `show${St}`, $t = `shown${St}`, It = `hide${St}`, Nt = `hidden${St}`, Pt = `click${St}.data-api`, jt = "show", Mt = "collapse", Ft = "collapsing", Ht = `:scope .${Mt} .${Mt}`, Wt = '[data-bs-toggle="collapse"]', Bt = { parent: null, toggle: true }, zt = { parent: "(null|element)", toggle: "boolean" };
  class Rt extends W {
    constructor(t2, e2) {
      super(t2, e2), this._isTransitioning = false, this._triggerArray = [];
      const i2 = z.find(Wt);
      for (const t3 of i2) {
        const e3 = z.getSelectorFromElement(t3), i3 = z.find(e3).filter((t4) => t4 === this._element);
        null !== e3 && i3.length && this._triggerArray.push(t3);
      }
      this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
    }
    static get Default() {
      return Bt;
    }
    static get DefaultType() {
      return zt;
    }
    static get NAME() {
      return "collapse";
    }
    toggle() {
      this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (this._isTransitioning || this._isShown()) return;
      let t2 = [];
      if (this._config.parent && (t2 = this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter((t3) => t3 !== this._element).map((t3) => Rt.getOrCreateInstance(t3, { toggle: false }))), t2.length && t2[0]._isTransitioning) return;
      if (N.trigger(this._element, Dt).defaultPrevented) return;
      for (const e3 of t2) e3.hide();
      const e2 = this._getDimension();
      this._element.classList.remove(Mt), this._element.classList.add(Ft), this._element.style[e2] = 0, this._addAriaAndCollapsedClass(this._triggerArray, true), this._isTransitioning = true;
      const i2 = `scroll${e2[0].toUpperCase() + e2.slice(1)}`;
      this._queueCallback(() => {
        this._isTransitioning = false, this._element.classList.remove(Ft), this._element.classList.add(Mt, jt), this._element.style[e2] = "", N.trigger(this._element, $t);
      }, this._element, true), this._element.style[e2] = `${this._element[i2]}px`;
    }
    hide() {
      if (this._isTransitioning || !this._isShown()) return;
      if (N.trigger(this._element, It).defaultPrevented) return;
      const t2 = this._getDimension();
      this._element.style[t2] = `${this._element.getBoundingClientRect()[t2]}px`, d(this._element), this._element.classList.add(Ft), this._element.classList.remove(Mt, jt);
      for (const t3 of this._triggerArray) {
        const e2 = z.getElementFromSelector(t3);
        e2 && !this._isShown(e2) && this._addAriaAndCollapsedClass([t3], false);
      }
      this._isTransitioning = true, this._element.style[t2] = "", this._queueCallback(() => {
        this._isTransitioning = false, this._element.classList.remove(Ft), this._element.classList.add(Mt), N.trigger(this._element, Nt);
      }, this._element, true);
    }
    _isShown(t2 = this._element) {
      return t2.classList.contains(jt);
    }
    _configAfterMerge(t2) {
      return t2.toggle = Boolean(t2.toggle), t2.parent = r(t2.parent), t2;
    }
    _getDimension() {
      return this._element.classList.contains("collapse-horizontal") ? "width" : "height";
    }
    _initializeChildren() {
      if (!this._config.parent) return;
      const t2 = this._getFirstLevelChildren(Wt);
      for (const e2 of t2) {
        const t3 = z.getElementFromSelector(e2);
        t3 && this._addAriaAndCollapsedClass([e2], this._isShown(t3));
      }
    }
    _getFirstLevelChildren(t2) {
      const e2 = z.find(Ht, this._config.parent);
      return z.find(t2, this._config.parent).filter((t3) => !e2.includes(t3));
    }
    _addAriaAndCollapsedClass(t2, e2) {
      if (t2.length) for (const i2 of t2) i2.classList.toggle("collapsed", !e2), i2.setAttribute("aria-expanded", e2);
    }
    static jQueryInterface(t2) {
      const e2 = {};
      return "string" == typeof t2 && /show|hide/.test(t2) && (e2.toggle = false), this.each(function() {
        const i2 = Rt.getOrCreateInstance(this, e2);
        if ("string" == typeof t2) {
          if (void 0 === i2[t2]) throw new TypeError(`No method named "${t2}"`);
          i2[t2]();
        }
      });
    }
  }
  N.on(document, Pt, Wt, function(t2) {
    ("A" === t2.target.tagName || t2.delegateTarget && "A" === t2.delegateTarget.tagName) && t2.preventDefault();
    for (const t3 of z.getMultipleElementsFromSelector(this)) Rt.getOrCreateInstance(t3, { toggle: false }).toggle();
  }), m(Rt);
  var qt = "top", Vt = "bottom", Kt = "right", Qt = "left", Xt = "auto", Yt = [qt, Vt, Kt, Qt], Ut = "start", Gt = "end", Jt = "clippingParents", Zt = "viewport", te = "popper", ee = "reference", ie = Yt.reduce(function(t2, e2) {
    return t2.concat([e2 + "-" + Ut, e2 + "-" + Gt]);
  }, []), ne = [].concat(Yt, [Xt]).reduce(function(t2, e2) {
    return t2.concat([e2, e2 + "-" + Ut, e2 + "-" + Gt]);
  }, []), se = "beforeRead", oe = "read", re = "afterRead", ae = "beforeMain", le = "main", ce = "afterMain", he = "beforeWrite", de = "write", ue = "afterWrite", fe = [se, oe, re, ae, le, ce, he, de, ue];
  function pe(t2) {
    return t2 ? (t2.nodeName || "").toLowerCase() : null;
  }
  function me(t2) {
    if (null == t2) return window;
    if ("[object Window]" !== t2.toString()) {
      var e2 = t2.ownerDocument;
      return e2 && e2.defaultView || window;
    }
    return t2;
  }
  function ge(t2) {
    return t2 instanceof me(t2).Element || t2 instanceof Element;
  }
  function _e(t2) {
    return t2 instanceof me(t2).HTMLElement || t2 instanceof HTMLElement;
  }
  function be(t2) {
    return "undefined" != typeof ShadowRoot && (t2 instanceof me(t2).ShadowRoot || t2 instanceof ShadowRoot);
  }
  const ve = { name: "applyStyles", enabled: true, phase: "write", fn: function(t2) {
    var e2 = t2.state;
    Object.keys(e2.elements).forEach(function(t3) {
      var i2 = e2.styles[t3] || {}, n2 = e2.attributes[t3] || {}, s2 = e2.elements[t3];
      _e(s2) && pe(s2) && (Object.assign(s2.style, i2), Object.keys(n2).forEach(function(t4) {
        var e3 = n2[t4];
        false === e3 ? s2.removeAttribute(t4) : s2.setAttribute(t4, true === e3 ? "" : e3);
      }));
    });
  }, effect: function(t2) {
    var e2 = t2.state, i2 = { popper: { position: e2.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
    return Object.assign(e2.elements.popper.style, i2.popper), e2.styles = i2, e2.elements.arrow && Object.assign(e2.elements.arrow.style, i2.arrow), function() {
      Object.keys(e2.elements).forEach(function(t3) {
        var n2 = e2.elements[t3], s2 = e2.attributes[t3] || {}, o2 = Object.keys(e2.styles.hasOwnProperty(t3) ? e2.styles[t3] : i2[t3]).reduce(function(t4, e3) {
          return t4[e3] = "", t4;
        }, {});
        _e(n2) && pe(n2) && (Object.assign(n2.style, o2), Object.keys(s2).forEach(function(t4) {
          n2.removeAttribute(t4);
        }));
      });
    };
  }, requires: ["computeStyles"] };
  function ye(t2) {
    return t2.split("-")[0];
  }
  var we = Math.max, Ae = Math.min, Ee = Math.round;
  function Te() {
    var t2 = navigator.userAgentData;
    return null != t2 && t2.brands && Array.isArray(t2.brands) ? t2.brands.map(function(t3) {
      return t3.brand + "/" + t3.version;
    }).join(" ") : navigator.userAgent;
  }
  function Ce() {
    return !/^((?!chrome|android).)*safari/i.test(Te());
  }
  function Oe(t2, e2, i2) {
    void 0 === e2 && (e2 = false), void 0 === i2 && (i2 = false);
    var n2 = t2.getBoundingClientRect(), s2 = 1, o2 = 1;
    e2 && _e(t2) && (s2 = t2.offsetWidth > 0 && Ee(n2.width) / t2.offsetWidth || 1, o2 = t2.offsetHeight > 0 && Ee(n2.height) / t2.offsetHeight || 1);
    var r2 = (ge(t2) ? me(t2) : window).visualViewport, a2 = !Ce() && i2, l2 = (n2.left + (a2 && r2 ? r2.offsetLeft : 0)) / s2, c2 = (n2.top + (a2 && r2 ? r2.offsetTop : 0)) / o2, h2 = n2.width / s2, d2 = n2.height / o2;
    return { width: h2, height: d2, top: c2, right: l2 + h2, bottom: c2 + d2, left: l2, x: l2, y: c2 };
  }
  function xe(t2) {
    var e2 = Oe(t2), i2 = t2.offsetWidth, n2 = t2.offsetHeight;
    return Math.abs(e2.width - i2) <= 1 && (i2 = e2.width), Math.abs(e2.height - n2) <= 1 && (n2 = e2.height), { x: t2.offsetLeft, y: t2.offsetTop, width: i2, height: n2 };
  }
  function ke(t2, e2) {
    var i2 = e2.getRootNode && e2.getRootNode();
    if (t2.contains(e2)) return true;
    if (i2 && be(i2)) {
      var n2 = e2;
      do {
        if (n2 && t2.isSameNode(n2)) return true;
        n2 = n2.parentNode || n2.host;
      } while (n2);
    }
    return false;
  }
  function Le(t2) {
    return me(t2).getComputedStyle(t2);
  }
  function Se(t2) {
    return ["table", "td", "th"].indexOf(pe(t2)) >= 0;
  }
  function De(t2) {
    return ((ge(t2) ? t2.ownerDocument : t2.document) || window.document).documentElement;
  }
  function $e(t2) {
    return "html" === pe(t2) ? t2 : t2.assignedSlot || t2.parentNode || (be(t2) ? t2.host : null) || De(t2);
  }
  function Ie(t2) {
    return _e(t2) && "fixed" !== Le(t2).position ? t2.offsetParent : null;
  }
  function Ne(t2) {
    for (var e2 = me(t2), i2 = Ie(t2); i2 && Se(i2) && "static" === Le(i2).position; ) i2 = Ie(i2);
    return i2 && ("html" === pe(i2) || "body" === pe(i2) && "static" === Le(i2).position) ? e2 : i2 || function(t3) {
      var e3 = /firefox/i.test(Te());
      if (/Trident/i.test(Te()) && _e(t3) && "fixed" === Le(t3).position) return null;
      var i3 = $e(t3);
      for (be(i3) && (i3 = i3.host); _e(i3) && ["html", "body"].indexOf(pe(i3)) < 0; ) {
        var n2 = Le(i3);
        if ("none" !== n2.transform || "none" !== n2.perspective || "paint" === n2.contain || -1 !== ["transform", "perspective"].indexOf(n2.willChange) || e3 && "filter" === n2.willChange || e3 && n2.filter && "none" !== n2.filter) return i3;
        i3 = i3.parentNode;
      }
      return null;
    }(t2) || e2;
  }
  function Pe(t2) {
    return ["top", "bottom"].indexOf(t2) >= 0 ? "x" : "y";
  }
  function je(t2, e2, i2) {
    return we(t2, Ae(e2, i2));
  }
  function Me(t2) {
    return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, t2);
  }
  function Fe(t2, e2) {
    return e2.reduce(function(e3, i2) {
      return e3[i2] = t2, e3;
    }, {});
  }
  const He = { name: "arrow", enabled: true, phase: "main", fn: function(t2) {
    var e2, i2 = t2.state, n2 = t2.name, s2 = t2.options, o2 = i2.elements.arrow, r2 = i2.modifiersData.popperOffsets, a2 = ye(i2.placement), l2 = Pe(a2), c2 = [Qt, Kt].indexOf(a2) >= 0 ? "height" : "width";
    if (o2 && r2) {
      var h2 = function(t3, e3) {
        return Me("number" != typeof (t3 = "function" == typeof t3 ? t3(Object.assign({}, e3.rects, { placement: e3.placement })) : t3) ? t3 : Fe(t3, Yt));
      }(s2.padding, i2), d2 = xe(o2), u2 = "y" === l2 ? qt : Qt, f2 = "y" === l2 ? Vt : Kt, p2 = i2.rects.reference[c2] + i2.rects.reference[l2] - r2[l2] - i2.rects.popper[c2], m2 = r2[l2] - i2.rects.reference[l2], g2 = Ne(o2), _2 = g2 ? "y" === l2 ? g2.clientHeight || 0 : g2.clientWidth || 0 : 0, b2 = p2 / 2 - m2 / 2, v2 = h2[u2], y2 = _2 - d2[c2] - h2[f2], w2 = _2 / 2 - d2[c2] / 2 + b2, A2 = je(v2, w2, y2), E2 = l2;
      i2.modifiersData[n2] = ((e2 = {})[E2] = A2, e2.centerOffset = A2 - w2, e2);
    }
  }, effect: function(t2) {
    var e2 = t2.state, i2 = t2.options.element, n2 = void 0 === i2 ? "[data-popper-arrow]" : i2;
    null != n2 && ("string" != typeof n2 || (n2 = e2.elements.popper.querySelector(n2))) && ke(e2.elements.popper, n2) && (e2.elements.arrow = n2);
  }, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
  function We(t2) {
    return t2.split("-")[1];
  }
  var Be = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
  function ze(t2) {
    var e2, i2 = t2.popper, n2 = t2.popperRect, s2 = t2.placement, o2 = t2.variation, r2 = t2.offsets, a2 = t2.position, l2 = t2.gpuAcceleration, c2 = t2.adaptive, h2 = t2.roundOffsets, d2 = t2.isFixed, u2 = r2.x, f2 = void 0 === u2 ? 0 : u2, p2 = r2.y, m2 = void 0 === p2 ? 0 : p2, g2 = "function" == typeof h2 ? h2({ x: f2, y: m2 }) : { x: f2, y: m2 };
    f2 = g2.x, m2 = g2.y;
    var _2 = r2.hasOwnProperty("x"), b2 = r2.hasOwnProperty("y"), v2 = Qt, y2 = qt, w2 = window;
    if (c2) {
      var A2 = Ne(i2), E2 = "clientHeight", T2 = "clientWidth";
      A2 === me(i2) && "static" !== Le(A2 = De(i2)).position && "absolute" === a2 && (E2 = "scrollHeight", T2 = "scrollWidth"), (s2 === qt || (s2 === Qt || s2 === Kt) && o2 === Gt) && (y2 = Vt, m2 -= (d2 && A2 === w2 && w2.visualViewport ? w2.visualViewport.height : A2[E2]) - n2.height, m2 *= l2 ? 1 : -1), s2 !== Qt && (s2 !== qt && s2 !== Vt || o2 !== Gt) || (v2 = Kt, f2 -= (d2 && A2 === w2 && w2.visualViewport ? w2.visualViewport.width : A2[T2]) - n2.width, f2 *= l2 ? 1 : -1);
    }
    var C2, O2 = Object.assign({ position: a2 }, c2 && Be), x2 = true === h2 ? function(t3, e3) {
      var i3 = t3.x, n3 = t3.y, s3 = e3.devicePixelRatio || 1;
      return { x: Ee(i3 * s3) / s3 || 0, y: Ee(n3 * s3) / s3 || 0 };
    }({ x: f2, y: m2 }, me(i2)) : { x: f2, y: m2 };
    return f2 = x2.x, m2 = x2.y, l2 ? Object.assign({}, O2, ((C2 = {})[y2] = b2 ? "0" : "", C2[v2] = _2 ? "0" : "", C2.transform = (w2.devicePixelRatio || 1) <= 1 ? "translate(" + f2 + "px, " + m2 + "px)" : "translate3d(" + f2 + "px, " + m2 + "px, 0)", C2)) : Object.assign({}, O2, ((e2 = {})[y2] = b2 ? m2 + "px" : "", e2[v2] = _2 ? f2 + "px" : "", e2.transform = "", e2));
  }
  const Re = { name: "computeStyles", enabled: true, phase: "beforeWrite", fn: function(t2) {
    var e2 = t2.state, i2 = t2.options, n2 = i2.gpuAcceleration, s2 = void 0 === n2 || n2, o2 = i2.adaptive, r2 = void 0 === o2 || o2, a2 = i2.roundOffsets, l2 = void 0 === a2 || a2, c2 = { placement: ye(e2.placement), variation: We(e2.placement), popper: e2.elements.popper, popperRect: e2.rects.popper, gpuAcceleration: s2, isFixed: "fixed" === e2.options.strategy };
    null != e2.modifiersData.popperOffsets && (e2.styles.popper = Object.assign({}, e2.styles.popper, ze(Object.assign({}, c2, { offsets: e2.modifiersData.popperOffsets, position: e2.options.strategy, adaptive: r2, roundOffsets: l2 })))), null != e2.modifiersData.arrow && (e2.styles.arrow = Object.assign({}, e2.styles.arrow, ze(Object.assign({}, c2, { offsets: e2.modifiersData.arrow, position: "absolute", adaptive: false, roundOffsets: l2 })))), e2.attributes.popper = Object.assign({}, e2.attributes.popper, { "data-popper-placement": e2.placement });
  }, data: {} };
  var qe = { passive: true };
  const Ve = { name: "eventListeners", enabled: true, phase: "write", fn: function() {
  }, effect: function(t2) {
    var e2 = t2.state, i2 = t2.instance, n2 = t2.options, s2 = n2.scroll, o2 = void 0 === s2 || s2, r2 = n2.resize, a2 = void 0 === r2 || r2, l2 = me(e2.elements.popper), c2 = [].concat(e2.scrollParents.reference, e2.scrollParents.popper);
    return o2 && c2.forEach(function(t3) {
      t3.addEventListener("scroll", i2.update, qe);
    }), a2 && l2.addEventListener("resize", i2.update, qe), function() {
      o2 && c2.forEach(function(t3) {
        t3.removeEventListener("scroll", i2.update, qe);
      }), a2 && l2.removeEventListener("resize", i2.update, qe);
    };
  }, data: {} };
  var Ke = { left: "right", right: "left", bottom: "top", top: "bottom" };
  function Qe(t2) {
    return t2.replace(/left|right|bottom|top/g, function(t3) {
      return Ke[t3];
    });
  }
  var Xe = { start: "end", end: "start" };
  function Ye(t2) {
    return t2.replace(/start|end/g, function(t3) {
      return Xe[t3];
    });
  }
  function Ue(t2) {
    var e2 = me(t2);
    return { scrollLeft: e2.pageXOffset, scrollTop: e2.pageYOffset };
  }
  function Ge(t2) {
    return Oe(De(t2)).left + Ue(t2).scrollLeft;
  }
  function Je(t2) {
    var e2 = Le(t2), i2 = e2.overflow, n2 = e2.overflowX, s2 = e2.overflowY;
    return /auto|scroll|overlay|hidden/.test(i2 + s2 + n2);
  }
  function Ze(t2) {
    return ["html", "body", "#document"].indexOf(pe(t2)) >= 0 ? t2.ownerDocument.body : _e(t2) && Je(t2) ? t2 : Ze($e(t2));
  }
  function ti(t2, e2) {
    var i2;
    void 0 === e2 && (e2 = []);
    var n2 = Ze(t2), s2 = n2 === (null == (i2 = t2.ownerDocument) ? void 0 : i2.body), o2 = me(n2), r2 = s2 ? [o2].concat(o2.visualViewport || [], Je(n2) ? n2 : []) : n2, a2 = e2.concat(r2);
    return s2 ? a2 : a2.concat(ti($e(r2)));
  }
  function ei(t2) {
    return Object.assign({}, t2, { left: t2.x, top: t2.y, right: t2.x + t2.width, bottom: t2.y + t2.height });
  }
  function ii(t2, e2, i2) {
    return e2 === Zt ? ei(function(t3, e3) {
      var i3 = me(t3), n2 = De(t3), s2 = i3.visualViewport, o2 = n2.clientWidth, r2 = n2.clientHeight, a2 = 0, l2 = 0;
      if (s2) {
        o2 = s2.width, r2 = s2.height;
        var c2 = Ce();
        (c2 || !c2 && "fixed" === e3) && (a2 = s2.offsetLeft, l2 = s2.offsetTop);
      }
      return { width: o2, height: r2, x: a2 + Ge(t3), y: l2 };
    }(t2, i2)) : ge(e2) ? function(t3, e3) {
      var i3 = Oe(t3, false, "fixed" === e3);
      return i3.top = i3.top + t3.clientTop, i3.left = i3.left + t3.clientLeft, i3.bottom = i3.top + t3.clientHeight, i3.right = i3.left + t3.clientWidth, i3.width = t3.clientWidth, i3.height = t3.clientHeight, i3.x = i3.left, i3.y = i3.top, i3;
    }(e2, i2) : ei(function(t3) {
      var e3, i3 = De(t3), n2 = Ue(t3), s2 = null == (e3 = t3.ownerDocument) ? void 0 : e3.body, o2 = we(i3.scrollWidth, i3.clientWidth, s2 ? s2.scrollWidth : 0, s2 ? s2.clientWidth : 0), r2 = we(i3.scrollHeight, i3.clientHeight, s2 ? s2.scrollHeight : 0, s2 ? s2.clientHeight : 0), a2 = -n2.scrollLeft + Ge(t3), l2 = -n2.scrollTop;
      return "rtl" === Le(s2 || i3).direction && (a2 += we(i3.clientWidth, s2 ? s2.clientWidth : 0) - o2), { width: o2, height: r2, x: a2, y: l2 };
    }(De(t2)));
  }
  function ni(t2) {
    var e2, i2 = t2.reference, n2 = t2.element, s2 = t2.placement, o2 = s2 ? ye(s2) : null, r2 = s2 ? We(s2) : null, a2 = i2.x + i2.width / 2 - n2.width / 2, l2 = i2.y + i2.height / 2 - n2.height / 2;
    switch (o2) {
      case qt:
        e2 = { x: a2, y: i2.y - n2.height };
        break;
      case Vt:
        e2 = { x: a2, y: i2.y + i2.height };
        break;
      case Kt:
        e2 = { x: i2.x + i2.width, y: l2 };
        break;
      case Qt:
        e2 = { x: i2.x - n2.width, y: l2 };
        break;
      default:
        e2 = { x: i2.x, y: i2.y };
    }
    var c2 = o2 ? Pe(o2) : null;
    if (null != c2) {
      var h2 = "y" === c2 ? "height" : "width";
      switch (r2) {
        case Ut:
          e2[c2] = e2[c2] - (i2[h2] / 2 - n2[h2] / 2);
          break;
        case Gt:
          e2[c2] = e2[c2] + (i2[h2] / 2 - n2[h2] / 2);
      }
    }
    return e2;
  }
  function si(t2, e2) {
    void 0 === e2 && (e2 = {});
    var i2 = e2, n2 = i2.placement, s2 = void 0 === n2 ? t2.placement : n2, o2 = i2.strategy, r2 = void 0 === o2 ? t2.strategy : o2, a2 = i2.boundary, l2 = void 0 === a2 ? Jt : a2, c2 = i2.rootBoundary, h2 = void 0 === c2 ? Zt : c2, d2 = i2.elementContext, u2 = void 0 === d2 ? te : d2, f2 = i2.altBoundary, p2 = void 0 !== f2 && f2, m2 = i2.padding, g2 = void 0 === m2 ? 0 : m2, _2 = Me("number" != typeof g2 ? g2 : Fe(g2, Yt)), b2 = u2 === te ? ee : te, v2 = t2.rects.popper, y2 = t2.elements[p2 ? b2 : u2], w2 = function(t3, e3, i3, n3) {
      var s3 = "clippingParents" === e3 ? function(t4) {
        var e4 = ti($e(t4)), i4 = ["absolute", "fixed"].indexOf(Le(t4).position) >= 0 && _e(t4) ? Ne(t4) : t4;
        return ge(i4) ? e4.filter(function(t5) {
          return ge(t5) && ke(t5, i4) && "body" !== pe(t5);
        }) : [];
      }(t3) : [].concat(e3), o3 = [].concat(s3, [i3]), r3 = o3[0], a3 = o3.reduce(function(e4, i4) {
        var s4 = ii(t3, i4, n3);
        return e4.top = we(s4.top, e4.top), e4.right = Ae(s4.right, e4.right), e4.bottom = Ae(s4.bottom, e4.bottom), e4.left = we(s4.left, e4.left), e4;
      }, ii(t3, r3, n3));
      return a3.width = a3.right - a3.left, a3.height = a3.bottom - a3.top, a3.x = a3.left, a3.y = a3.top, a3;
    }(ge(y2) ? y2 : y2.contextElement || De(t2.elements.popper), l2, h2, r2), A2 = Oe(t2.elements.reference), E2 = ni({ reference: A2, element: v2, placement: s2 }), T2 = ei(Object.assign({}, v2, E2)), C2 = u2 === te ? T2 : A2, O2 = { top: w2.top - C2.top + _2.top, bottom: C2.bottom - w2.bottom + _2.bottom, left: w2.left - C2.left + _2.left, right: C2.right - w2.right + _2.right }, x2 = t2.modifiersData.offset;
    if (u2 === te && x2) {
      var k2 = x2[s2];
      Object.keys(O2).forEach(function(t3) {
        var e3 = [Kt, Vt].indexOf(t3) >= 0 ? 1 : -1, i3 = [qt, Vt].indexOf(t3) >= 0 ? "y" : "x";
        O2[t3] += k2[i3] * e3;
      });
    }
    return O2;
  }
  function oi(t2, e2) {
    void 0 === e2 && (e2 = {});
    var i2 = e2, n2 = i2.placement, s2 = i2.boundary, o2 = i2.rootBoundary, r2 = i2.padding, a2 = i2.flipVariations, l2 = i2.allowedAutoPlacements, c2 = void 0 === l2 ? ne : l2, h2 = We(n2), d2 = h2 ? a2 ? ie : ie.filter(function(t3) {
      return We(t3) === h2;
    }) : Yt, u2 = d2.filter(function(t3) {
      return c2.indexOf(t3) >= 0;
    });
    0 === u2.length && (u2 = d2);
    var f2 = u2.reduce(function(e3, i3) {
      return e3[i3] = si(t2, { placement: i3, boundary: s2, rootBoundary: o2, padding: r2 })[ye(i3)], e3;
    }, {});
    return Object.keys(f2).sort(function(t3, e3) {
      return f2[t3] - f2[e3];
    });
  }
  const ri = { name: "flip", enabled: true, phase: "main", fn: function(t2) {
    var e2 = t2.state, i2 = t2.options, n2 = t2.name;
    if (!e2.modifiersData[n2]._skip) {
      for (var s2 = i2.mainAxis, o2 = void 0 === s2 || s2, r2 = i2.altAxis, a2 = void 0 === r2 || r2, l2 = i2.fallbackPlacements, c2 = i2.padding, h2 = i2.boundary, d2 = i2.rootBoundary, u2 = i2.altBoundary, f2 = i2.flipVariations, p2 = void 0 === f2 || f2, m2 = i2.allowedAutoPlacements, g2 = e2.options.placement, _2 = ye(g2), b2 = l2 || (_2 !== g2 && p2 ? function(t3) {
        if (ye(t3) === Xt) return [];
        var e3 = Qe(t3);
        return [Ye(t3), e3, Ye(e3)];
      }(g2) : [Qe(g2)]), v2 = [g2].concat(b2).reduce(function(t3, i3) {
        return t3.concat(ye(i3) === Xt ? oi(e2, { placement: i3, boundary: h2, rootBoundary: d2, padding: c2, flipVariations: p2, allowedAutoPlacements: m2 }) : i3);
      }, []), y2 = e2.rects.reference, w2 = e2.rects.popper, A2 = /* @__PURE__ */ new Map(), E2 = true, T2 = v2[0], C2 = 0; C2 < v2.length; C2++) {
        var O2 = v2[C2], x2 = ye(O2), k2 = We(O2) === Ut, L2 = [qt, Vt].indexOf(x2) >= 0, S2 = L2 ? "width" : "height", D2 = si(e2, { placement: O2, boundary: h2, rootBoundary: d2, altBoundary: u2, padding: c2 }), $2 = L2 ? k2 ? Kt : Qt : k2 ? Vt : qt;
        y2[S2] > w2[S2] && ($2 = Qe($2));
        var I2 = Qe($2), N2 = [];
        if (o2 && N2.push(D2[x2] <= 0), a2 && N2.push(D2[$2] <= 0, D2[I2] <= 0), N2.every(function(t3) {
          return t3;
        })) {
          T2 = O2, E2 = false;
          break;
        }
        A2.set(O2, N2);
      }
      if (E2) for (var P2 = function(t3) {
        var e3 = v2.find(function(e4) {
          var i3 = A2.get(e4);
          if (i3) return i3.slice(0, t3).every(function(t4) {
            return t4;
          });
        });
        if (e3) return T2 = e3, "break";
      }, j2 = p2 ? 3 : 1; j2 > 0 && "break" !== P2(j2); j2--) ;
      e2.placement !== T2 && (e2.modifiersData[n2]._skip = true, e2.placement = T2, e2.reset = true);
    }
  }, requiresIfExists: ["offset"], data: { _skip: false } };
  function ai(t2, e2, i2) {
    return void 0 === i2 && (i2 = { x: 0, y: 0 }), { top: t2.top - e2.height - i2.y, right: t2.right - e2.width + i2.x, bottom: t2.bottom - e2.height + i2.y, left: t2.left - e2.width - i2.x };
  }
  function li(t2) {
    return [qt, Kt, Vt, Qt].some(function(e2) {
      return t2[e2] >= 0;
    });
  }
  const ci = { name: "hide", enabled: true, phase: "main", requiresIfExists: ["preventOverflow"], fn: function(t2) {
    var e2 = t2.state, i2 = t2.name, n2 = e2.rects.reference, s2 = e2.rects.popper, o2 = e2.modifiersData.preventOverflow, r2 = si(e2, { elementContext: "reference" }), a2 = si(e2, { altBoundary: true }), l2 = ai(r2, n2), c2 = ai(a2, s2, o2), h2 = li(l2), d2 = li(c2);
    e2.modifiersData[i2] = { referenceClippingOffsets: l2, popperEscapeOffsets: c2, isReferenceHidden: h2, hasPopperEscaped: d2 }, e2.attributes.popper = Object.assign({}, e2.attributes.popper, { "data-popper-reference-hidden": h2, "data-popper-escaped": d2 });
  } }, hi = { name: "offset", enabled: true, phase: "main", requires: ["popperOffsets"], fn: function(t2) {
    var e2 = t2.state, i2 = t2.options, n2 = t2.name, s2 = i2.offset, o2 = void 0 === s2 ? [0, 0] : s2, r2 = ne.reduce(function(t3, i3) {
      return t3[i3] = function(t4, e3, i4) {
        var n3 = ye(t4), s3 = [Qt, qt].indexOf(n3) >= 0 ? -1 : 1, o3 = "function" == typeof i4 ? i4(Object.assign({}, e3, { placement: t4 })) : i4, r3 = o3[0], a3 = o3[1];
        return r3 = r3 || 0, a3 = (a3 || 0) * s3, [Qt, Kt].indexOf(n3) >= 0 ? { x: a3, y: r3 } : { x: r3, y: a3 };
      }(i3, e2.rects, o2), t3;
    }, {}), a2 = r2[e2.placement], l2 = a2.x, c2 = a2.y;
    null != e2.modifiersData.popperOffsets && (e2.modifiersData.popperOffsets.x += l2, e2.modifiersData.popperOffsets.y += c2), e2.modifiersData[n2] = r2;
  } }, di = { name: "popperOffsets", enabled: true, phase: "read", fn: function(t2) {
    var e2 = t2.state, i2 = t2.name;
    e2.modifiersData[i2] = ni({ reference: e2.rects.reference, element: e2.rects.popper, placement: e2.placement });
  }, data: {} }, ui = { name: "preventOverflow", enabled: true, phase: "main", fn: function(t2) {
    var e2 = t2.state, i2 = t2.options, n2 = t2.name, s2 = i2.mainAxis, o2 = void 0 === s2 || s2, r2 = i2.altAxis, a2 = void 0 !== r2 && r2, l2 = i2.boundary, c2 = i2.rootBoundary, h2 = i2.altBoundary, d2 = i2.padding, u2 = i2.tether, f2 = void 0 === u2 || u2, p2 = i2.tetherOffset, m2 = void 0 === p2 ? 0 : p2, g2 = si(e2, { boundary: l2, rootBoundary: c2, padding: d2, altBoundary: h2 }), _2 = ye(e2.placement), b2 = We(e2.placement), v2 = !b2, y2 = Pe(_2), w2 = "x" === y2 ? "y" : "x", A2 = e2.modifiersData.popperOffsets, E2 = e2.rects.reference, T2 = e2.rects.popper, C2 = "function" == typeof m2 ? m2(Object.assign({}, e2.rects, { placement: e2.placement })) : m2, O2 = "number" == typeof C2 ? { mainAxis: C2, altAxis: C2 } : Object.assign({ mainAxis: 0, altAxis: 0 }, C2), x2 = e2.modifiersData.offset ? e2.modifiersData.offset[e2.placement] : null, k2 = { x: 0, y: 0 };
    if (A2) {
      if (o2) {
        var L2, S2 = "y" === y2 ? qt : Qt, D2 = "y" === y2 ? Vt : Kt, $2 = "y" === y2 ? "height" : "width", I2 = A2[y2], N2 = I2 + g2[S2], P2 = I2 - g2[D2], j2 = f2 ? -T2[$2] / 2 : 0, M2 = b2 === Ut ? E2[$2] : T2[$2], F2 = b2 === Ut ? -T2[$2] : -E2[$2], H2 = e2.elements.arrow, W2 = f2 && H2 ? xe(H2) : { width: 0, height: 0 }, B2 = e2.modifiersData["arrow#persistent"] ? e2.modifiersData["arrow#persistent"].padding : { top: 0, right: 0, bottom: 0, left: 0 }, z2 = B2[S2], R2 = B2[D2], q2 = je(0, E2[$2], W2[$2]), V2 = v2 ? E2[$2] / 2 - j2 - q2 - z2 - O2.mainAxis : M2 - q2 - z2 - O2.mainAxis, K2 = v2 ? -E2[$2] / 2 + j2 + q2 + R2 + O2.mainAxis : F2 + q2 + R2 + O2.mainAxis, Q2 = e2.elements.arrow && Ne(e2.elements.arrow), X2 = Q2 ? "y" === y2 ? Q2.clientTop || 0 : Q2.clientLeft || 0 : 0, Y2 = null != (L2 = null == x2 ? void 0 : x2[y2]) ? L2 : 0, U2 = I2 + K2 - Y2, G2 = je(f2 ? Ae(N2, I2 + V2 - Y2 - X2) : N2, I2, f2 ? we(P2, U2) : P2);
        A2[y2] = G2, k2[y2] = G2 - I2;
      }
      if (a2) {
        var J2, Z2 = "x" === y2 ? qt : Qt, tt2 = "x" === y2 ? Vt : Kt, et2 = A2[w2], it2 = "y" === w2 ? "height" : "width", nt2 = et2 + g2[Z2], st2 = et2 - g2[tt2], ot2 = -1 !== [qt, Qt].indexOf(_2), rt2 = null != (J2 = null == x2 ? void 0 : x2[w2]) ? J2 : 0, at2 = ot2 ? nt2 : et2 - E2[it2] - T2[it2] - rt2 + O2.altAxis, lt2 = ot2 ? et2 + E2[it2] + T2[it2] - rt2 - O2.altAxis : st2, ct2 = f2 && ot2 ? function(t3, e3, i3) {
          var n3 = je(t3, e3, i3);
          return n3 > i3 ? i3 : n3;
        }(at2, et2, lt2) : je(f2 ? at2 : nt2, et2, f2 ? lt2 : st2);
        A2[w2] = ct2, k2[w2] = ct2 - et2;
      }
      e2.modifiersData[n2] = k2;
    }
  }, requiresIfExists: ["offset"] };
  function fi(t2, e2, i2) {
    void 0 === i2 && (i2 = false);
    var n2, s2, o2 = _e(e2), r2 = _e(e2) && function(t3) {
      var e3 = t3.getBoundingClientRect(), i3 = Ee(e3.width) / t3.offsetWidth || 1, n3 = Ee(e3.height) / t3.offsetHeight || 1;
      return 1 !== i3 || 1 !== n3;
    }(e2), a2 = De(e2), l2 = Oe(t2, r2, i2), c2 = { scrollLeft: 0, scrollTop: 0 }, h2 = { x: 0, y: 0 };
    return (o2 || !o2 && !i2) && (("body" !== pe(e2) || Je(a2)) && (c2 = (n2 = e2) !== me(n2) && _e(n2) ? { scrollLeft: (s2 = n2).scrollLeft, scrollTop: s2.scrollTop } : Ue(n2)), _e(e2) ? ((h2 = Oe(e2, true)).x += e2.clientLeft, h2.y += e2.clientTop) : a2 && (h2.x = Ge(a2))), { x: l2.left + c2.scrollLeft - h2.x, y: l2.top + c2.scrollTop - h2.y, width: l2.width, height: l2.height };
  }
  function pi(t2) {
    var e2 = /* @__PURE__ */ new Map(), i2 = /* @__PURE__ */ new Set(), n2 = [];
    function s2(t3) {
      i2.add(t3.name), [].concat(t3.requires || [], t3.requiresIfExists || []).forEach(function(t4) {
        if (!i2.has(t4)) {
          var n3 = e2.get(t4);
          n3 && s2(n3);
        }
      }), n2.push(t3);
    }
    return t2.forEach(function(t3) {
      e2.set(t3.name, t3);
    }), t2.forEach(function(t3) {
      i2.has(t3.name) || s2(t3);
    }), n2;
  }
  var mi = { placement: "bottom", modifiers: [], strategy: "absolute" };
  function gi() {
    for (var t2 = arguments.length, e2 = new Array(t2), i2 = 0; i2 < t2; i2++) e2[i2] = arguments[i2];
    return !e2.some(function(t3) {
      return !(t3 && "function" == typeof t3.getBoundingClientRect);
    });
  }
  function _i(t2) {
    void 0 === t2 && (t2 = {});
    var e2 = t2, i2 = e2.defaultModifiers, n2 = void 0 === i2 ? [] : i2, s2 = e2.defaultOptions, o2 = void 0 === s2 ? mi : s2;
    return function(t3, e3, i3) {
      void 0 === i3 && (i3 = o2);
      var s3, r2, a2 = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, mi, o2), modifiersData: {}, elements: { reference: t3, popper: e3 }, attributes: {}, styles: {} }, l2 = [], c2 = false, h2 = { state: a2, setOptions: function(i4) {
        var s4 = "function" == typeof i4 ? i4(a2.options) : i4;
        d2(), a2.options = Object.assign({}, o2, a2.options, s4), a2.scrollParents = { reference: ge(t3) ? ti(t3) : t3.contextElement ? ti(t3.contextElement) : [], popper: ti(e3) };
        var r3, c3, u2 = function(t4) {
          var e4 = pi(t4);
          return fe.reduce(function(t5, i5) {
            return t5.concat(e4.filter(function(t6) {
              return t6.phase === i5;
            }));
          }, []);
        }((r3 = [].concat(n2, a2.options.modifiers), c3 = r3.reduce(function(t4, e4) {
          var i5 = t4[e4.name];
          return t4[e4.name] = i5 ? Object.assign({}, i5, e4, { options: Object.assign({}, i5.options, e4.options), data: Object.assign({}, i5.data, e4.data) }) : e4, t4;
        }, {}), Object.keys(c3).map(function(t4) {
          return c3[t4];
        })));
        return a2.orderedModifiers = u2.filter(function(t4) {
          return t4.enabled;
        }), a2.orderedModifiers.forEach(function(t4) {
          var e4 = t4.name, i5 = t4.options, n3 = void 0 === i5 ? {} : i5, s5 = t4.effect;
          if ("function" == typeof s5) {
            var o3 = s5({ state: a2, name: e4, instance: h2, options: n3 });
            l2.push(o3 || function() {
            });
          }
        }), h2.update();
      }, forceUpdate: function() {
        if (!c2) {
          var t4 = a2.elements, e4 = t4.reference, i4 = t4.popper;
          if (gi(e4, i4)) {
            a2.rects = { reference: fi(e4, Ne(i4), "fixed" === a2.options.strategy), popper: xe(i4) }, a2.reset = false, a2.placement = a2.options.placement, a2.orderedModifiers.forEach(function(t5) {
              return a2.modifiersData[t5.name] = Object.assign({}, t5.data);
            });
            for (var n3 = 0; n3 < a2.orderedModifiers.length; n3++) if (true !== a2.reset) {
              var s4 = a2.orderedModifiers[n3], o3 = s4.fn, r3 = s4.options, l3 = void 0 === r3 ? {} : r3, d3 = s4.name;
              "function" == typeof o3 && (a2 = o3({ state: a2, options: l3, name: d3, instance: h2 }) || a2);
            } else a2.reset = false, n3 = -1;
          }
        }
      }, update: (s3 = function() {
        return new Promise(function(t4) {
          h2.forceUpdate(), t4(a2);
        });
      }, function() {
        return r2 || (r2 = new Promise(function(t4) {
          Promise.resolve().then(function() {
            r2 = void 0, t4(s3());
          });
        })), r2;
      }), destroy: function() {
        d2(), c2 = true;
      } };
      if (!gi(t3, e3)) return h2;
      function d2() {
        l2.forEach(function(t4) {
          return t4();
        }), l2 = [];
      }
      return h2.setOptions(i3).then(function(t4) {
        !c2 && i3.onFirstUpdate && i3.onFirstUpdate(t4);
      }), h2;
    };
  }
  var bi = _i(), vi = _i({ defaultModifiers: [Ve, di, Re, ve] }), yi = _i({ defaultModifiers: [Ve, di, Re, ve, hi, ri, ui, He, ci] });
  const wi = Object.freeze(Object.defineProperty({ __proto__: null, afterMain: ce, afterRead: re, afterWrite: ue, applyStyles: ve, arrow: He, auto: Xt, basePlacements: Yt, beforeMain: ae, beforeRead: se, beforeWrite: he, bottom: Vt, clippingParents: Jt, computeStyles: Re, createPopper: yi, createPopperBase: bi, createPopperLite: vi, detectOverflow: si, end: Gt, eventListeners: Ve, flip: ri, hide: ci, left: Qt, main: le, modifierPhases: fe, offset: hi, placements: ne, popper: te, popperGenerator: _i, popperOffsets: di, preventOverflow: ui, read: oe, reference: ee, right: Kt, start: Ut, top: qt, variationPlacements: ie, viewport: Zt, write: de }, Symbol.toStringTag, { value: "Module" })), Ai = "dropdown", Ei = ".bs.dropdown", Ti = ".data-api", Ci = "ArrowUp", Oi = "ArrowDown", xi = `hide${Ei}`, ki = `hidden${Ei}`, Li = `show${Ei}`, Si = `shown${Ei}`, Di = `click${Ei}${Ti}`, $i = `keydown${Ei}${Ti}`, Ii = `keyup${Ei}${Ti}`, Ni = "show", Pi = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)', ji = `${Pi}.${Ni}`, Mi = ".dropdown-menu", Fi = p() ? "top-end" : "top-start", Hi = p() ? "top-start" : "top-end", Wi = p() ? "bottom-end" : "bottom-start", Bi = p() ? "bottom-start" : "bottom-end", zi = p() ? "left-start" : "right-start", Ri = p() ? "right-start" : "left-start", qi = { autoClose: true, boundary: "clippingParents", display: "dynamic", offset: [0, 2], popperConfig: null, reference: "toggle" }, Vi = { autoClose: "(boolean|string)", boundary: "(string|element)", display: "string", offset: "(array|string|function)", popperConfig: "(null|object|function)", reference: "(string|element|object)" };
  class Ki extends W {
    constructor(t2, e2) {
      super(t2, e2), this._popper = null, this._parent = this._element.parentNode, this._menu = z.next(this._element, Mi)[0] || z.prev(this._element, Mi)[0] || z.findOne(Mi, this._parent), this._inNavbar = this._detectNavbar();
    }
    static get Default() {
      return qi;
    }
    static get DefaultType() {
      return Vi;
    }
    static get NAME() {
      return Ai;
    }
    toggle() {
      return this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (l(this._element) || this._isShown()) return;
      const t2 = { relatedTarget: this._element };
      if (!N.trigger(this._element, Li, t2).defaultPrevented) {
        if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(".navbar-nav")) for (const t3 of [].concat(...document.body.children)) N.on(t3, "mouseover", h);
        this._element.focus(), this._element.setAttribute("aria-expanded", true), this._menu.classList.add(Ni), this._element.classList.add(Ni), N.trigger(this._element, Si, t2);
      }
    }
    hide() {
      if (l(this._element) || !this._isShown()) return;
      const t2 = { relatedTarget: this._element };
      this._completeHide(t2);
    }
    dispose() {
      this._popper && this._popper.destroy(), super.dispose();
    }
    update() {
      this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
    }
    _completeHide(t2) {
      if (!N.trigger(this._element, xi, t2).defaultPrevented) {
        if ("ontouchstart" in document.documentElement) for (const t3 of [].concat(...document.body.children)) N.off(t3, "mouseover", h);
        this._popper && this._popper.destroy(), this._menu.classList.remove(Ni), this._element.classList.remove(Ni), this._element.setAttribute("aria-expanded", "false"), F.removeDataAttribute(this._menu, "popper"), N.trigger(this._element, ki, t2), this._element.focus();
      }
    }
    _getConfig(t2) {
      if ("object" == typeof (t2 = super._getConfig(t2)).reference && !o(t2.reference) && "function" != typeof t2.reference.getBoundingClientRect) throw new TypeError(`${Ai.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
      return t2;
    }
    _createPopper() {
      if (void 0 === wi) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)");
      let t2 = this._element;
      "parent" === this._config.reference ? t2 = this._parent : o(this._config.reference) ? t2 = r(this._config.reference) : "object" == typeof this._config.reference && (t2 = this._config.reference);
      const e2 = this._getPopperConfig();
      this._popper = yi(t2, this._menu, e2);
    }
    _isShown() {
      return this._menu.classList.contains(Ni);
    }
    _getPlacement() {
      const t2 = this._parent;
      if (t2.classList.contains("dropend")) return zi;
      if (t2.classList.contains("dropstart")) return Ri;
      if (t2.classList.contains("dropup-center")) return "top";
      if (t2.classList.contains("dropdown-center")) return "bottom";
      const e2 = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
      return t2.classList.contains("dropup") ? e2 ? Hi : Fi : e2 ? Bi : Wi;
    }
    _detectNavbar() {
      return null !== this._element.closest(".navbar");
    }
    _getOffset() {
      const { offset: t2 } = this._config;
      return "string" == typeof t2 ? t2.split(",").map((t3) => Number.parseInt(t3, 10)) : "function" == typeof t2 ? (e2) => t2(e2, this._element) : t2;
    }
    _getPopperConfig() {
      const t2 = { placement: this._getPlacement(), modifiers: [{ name: "preventOverflow", options: { boundary: this._config.boundary } }, { name: "offset", options: { offset: this._getOffset() } }] };
      return (this._inNavbar || "static" === this._config.display) && (F.setDataAttribute(this._menu, "popper", "static"), t2.modifiers = [{ name: "applyStyles", enabled: false }]), { ...t2, ...g(this._config.popperConfig, [void 0, t2]) };
    }
    _selectMenuItem({ key: t2, target: e2 }) {
      const i2 = z.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter((t3) => a(t3));
      i2.length && b(i2, e2, t2 === Oi, !i2.includes(e2)).focus();
    }
    static jQueryInterface(t2) {
      return this.each(function() {
        const e2 = Ki.getOrCreateInstance(this, t2);
        if ("string" == typeof t2) {
          if (void 0 === e2[t2]) throw new TypeError(`No method named "${t2}"`);
          e2[t2]();
        }
      });
    }
    static clearMenus(t2) {
      if (2 === t2.button || "keyup" === t2.type && "Tab" !== t2.key) return;
      const e2 = z.find(ji);
      for (const i2 of e2) {
        const e3 = Ki.getInstance(i2);
        if (!e3 || false === e3._config.autoClose) continue;
        const n2 = t2.composedPath(), s2 = n2.includes(e3._menu);
        if (n2.includes(e3._element) || "inside" === e3._config.autoClose && !s2 || "outside" === e3._config.autoClose && s2) continue;
        if (e3._menu.contains(t2.target) && ("keyup" === t2.type && "Tab" === t2.key || /input|select|option|textarea|form/i.test(t2.target.tagName))) continue;
        const o2 = { relatedTarget: e3._element };
        "click" === t2.type && (o2.clickEvent = t2), e3._completeHide(o2);
      }
    }
    static dataApiKeydownHandler(t2) {
      const e2 = /input|textarea/i.test(t2.target.tagName), i2 = "Escape" === t2.key, n2 = [Ci, Oi].includes(t2.key);
      if (!n2 && !i2) return;
      if (e2 && !i2) return;
      t2.preventDefault();
      const s2 = this.matches(Pi) ? this : z.prev(this, Pi)[0] || z.next(this, Pi)[0] || z.findOne(Pi, t2.delegateTarget.parentNode), o2 = Ki.getOrCreateInstance(s2);
      if (n2) return t2.stopPropagation(), o2.show(), void o2._selectMenuItem(t2);
      o2._isShown() && (t2.stopPropagation(), o2.hide(), s2.focus());
    }
  }
  N.on(document, $i, Pi, Ki.dataApiKeydownHandler), N.on(document, $i, Mi, Ki.dataApiKeydownHandler), N.on(document, Di, Ki.clearMenus), N.on(document, Ii, Ki.clearMenus), N.on(document, Di, Pi, function(t2) {
    t2.preventDefault(), Ki.getOrCreateInstance(this).toggle();
  }), m(Ki);
  const Qi = "backdrop", Xi = "show", Yi = `mousedown.bs.${Qi}`, Ui = { className: "modal-backdrop", clickCallback: null, isAnimated: false, isVisible: true, rootElement: "body" }, Gi = { className: "string", clickCallback: "(function|null)", isAnimated: "boolean", isVisible: "boolean", rootElement: "(element|string)" };
  class Ji extends H {
    constructor(t2) {
      super(), this._config = this._getConfig(t2), this._isAppended = false, this._element = null;
    }
    static get Default() {
      return Ui;
    }
    static get DefaultType() {
      return Gi;
    }
    static get NAME() {
      return Qi;
    }
    show(t2) {
      if (!this._config.isVisible) return void g(t2);
      this._append();
      const e2 = this._getElement();
      this._config.isAnimated && d(e2), e2.classList.add(Xi), this._emulateAnimation(() => {
        g(t2);
      });
    }
    hide(t2) {
      this._config.isVisible ? (this._getElement().classList.remove(Xi), this._emulateAnimation(() => {
        this.dispose(), g(t2);
      })) : g(t2);
    }
    dispose() {
      this._isAppended && (N.off(this._element, Yi), this._element.remove(), this._isAppended = false);
    }
    _getElement() {
      if (!this._element) {
        const t2 = document.createElement("div");
        t2.className = this._config.className, this._config.isAnimated && t2.classList.add("fade"), this._element = t2;
      }
      return this._element;
    }
    _configAfterMerge(t2) {
      return t2.rootElement = r(t2.rootElement), t2;
    }
    _append() {
      if (this._isAppended) return;
      const t2 = this._getElement();
      this._config.rootElement.append(t2), N.on(t2, Yi, () => {
        g(this._config.clickCallback);
      }), this._isAppended = true;
    }
    _emulateAnimation(t2) {
      _(t2, this._getElement(), this._config.isAnimated);
    }
  }
  const Zi = ".bs.focustrap", tn = `focusin${Zi}`, en = `keydown.tab${Zi}`, nn = "backward", sn = { autofocus: true, trapElement: null }, on = { autofocus: "boolean", trapElement: "element" };
  class rn extends H {
    constructor(t2) {
      super(), this._config = this._getConfig(t2), this._isActive = false, this._lastTabNavDirection = null;
    }
    static get Default() {
      return sn;
    }
    static get DefaultType() {
      return on;
    }
    static get NAME() {
      return "focustrap";
    }
    activate() {
      this._isActive || (this._config.autofocus && this._config.trapElement.focus(), N.off(document, Zi), N.on(document, tn, (t2) => this._handleFocusin(t2)), N.on(document, en, (t2) => this._handleKeydown(t2)), this._isActive = true);
    }
    deactivate() {
      this._isActive && (this._isActive = false, N.off(document, Zi));
    }
    _handleFocusin(t2) {
      const { trapElement: e2 } = this._config;
      if (t2.target === document || t2.target === e2 || e2.contains(t2.target)) return;
      const i2 = z.focusableChildren(e2);
      0 === i2.length ? e2.focus() : this._lastTabNavDirection === nn ? i2[i2.length - 1].focus() : i2[0].focus();
    }
    _handleKeydown(t2) {
      "Tab" === t2.key && (this._lastTabNavDirection = t2.shiftKey ? nn : "forward");
    }
  }
  const an = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", ln = ".sticky-top", cn = "padding-right", hn = "margin-right";
  class dn {
    constructor() {
      this._element = document.body;
    }
    getWidth() {
      const t2 = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - t2);
    }
    hide() {
      const t2 = this.getWidth();
      this._disableOverFlow(), this._setElementAttributes(this._element, cn, (e2) => e2 + t2), this._setElementAttributes(an, cn, (e2) => e2 + t2), this._setElementAttributes(ln, hn, (e2) => e2 - t2);
    }
    reset() {
      this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, cn), this._resetElementAttributes(an, cn), this._resetElementAttributes(ln, hn);
    }
    isOverflowing() {
      return this.getWidth() > 0;
    }
    _disableOverFlow() {
      this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden";
    }
    _setElementAttributes(t2, e2, i2) {
      const n2 = this.getWidth();
      this._applyManipulationCallback(t2, (t3) => {
        if (t3 !== this._element && window.innerWidth > t3.clientWidth + n2) return;
        this._saveInitialAttribute(t3, e2);
        const s2 = window.getComputedStyle(t3).getPropertyValue(e2);
        t3.style.setProperty(e2, `${i2(Number.parseFloat(s2))}px`);
      });
    }
    _saveInitialAttribute(t2, e2) {
      const i2 = t2.style.getPropertyValue(e2);
      i2 && F.setDataAttribute(t2, e2, i2);
    }
    _resetElementAttributes(t2, e2) {
      this._applyManipulationCallback(t2, (t3) => {
        const i2 = F.getDataAttribute(t3, e2);
        null !== i2 ? (F.removeDataAttribute(t3, e2), t3.style.setProperty(e2, i2)) : t3.style.removeProperty(e2);
      });
    }
    _applyManipulationCallback(t2, e2) {
      if (o(t2)) e2(t2);
      else for (const i2 of z.find(t2, this._element)) e2(i2);
    }
  }
  const un = ".bs.modal", fn = `hide${un}`, pn = `hidePrevented${un}`, mn = `hidden${un}`, gn = `show${un}`, _n = `shown${un}`, bn = `resize${un}`, vn = `click.dismiss${un}`, yn = `mousedown.dismiss${un}`, wn = `keydown.dismiss${un}`, An = `click${un}.data-api`, En = "modal-open", Tn = "show", Cn = "modal-static", On = { backdrop: true, focus: true, keyboard: true }, xn = { backdrop: "(boolean|string)", focus: "boolean", keyboard: "boolean" };
  class kn extends W {
    constructor(t2, e2) {
      super(t2, e2), this._dialog = z.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = false, this._isTransitioning = false, this._scrollBar = new dn(), this._addEventListeners();
    }
    static get Default() {
      return On;
    }
    static get DefaultType() {
      return xn;
    }
    static get NAME() {
      return "modal";
    }
    toggle(t2) {
      return this._isShown ? this.hide() : this.show(t2);
    }
    show(t2) {
      this._isShown || this._isTransitioning || N.trigger(this._element, gn, { relatedTarget: t2 }).defaultPrevented || (this._isShown = true, this._isTransitioning = true, this._scrollBar.hide(), document.body.classList.add(En), this._adjustDialog(), this._backdrop.show(() => this._showElement(t2)));
    }
    hide() {
      this._isShown && !this._isTransitioning && (N.trigger(this._element, fn).defaultPrevented || (this._isShown = false, this._isTransitioning = true, this._focustrap.deactivate(), this._element.classList.remove(Tn), this._queueCallback(() => this._hideModal(), this._element, this._isAnimated())));
    }
    dispose() {
      N.off(window, un), N.off(this._dialog, un), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
    }
    handleUpdate() {
      this._adjustDialog();
    }
    _initializeBackDrop() {
      return new Ji({ isVisible: Boolean(this._config.backdrop), isAnimated: this._isAnimated() });
    }
    _initializeFocusTrap() {
      return new rn({ trapElement: this._element });
    }
    _showElement(t2) {
      document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", true), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
      const e2 = z.findOne(".modal-body", this._dialog);
      e2 && (e2.scrollTop = 0), d(this._element), this._element.classList.add(Tn), this._queueCallback(() => {
        this._config.focus && this._focustrap.activate(), this._isTransitioning = false, N.trigger(this._element, _n, { relatedTarget: t2 });
      }, this._dialog, this._isAnimated());
    }
    _addEventListeners() {
      N.on(this._element, wn, (t2) => {
        "Escape" === t2.key && (this._config.keyboard ? this.hide() : this._triggerBackdropTransition());
      }), N.on(window, bn, () => {
        this._isShown && !this._isTransitioning && this._adjustDialog();
      }), N.on(this._element, yn, (t2) => {
        N.one(this._element, vn, (e2) => {
          this._element === t2.target && this._element === e2.target && ("static" !== this._config.backdrop ? this._config.backdrop && this.hide() : this._triggerBackdropTransition());
        });
      });
    }
    _hideModal() {
      this._element.style.display = "none", this._element.setAttribute("aria-hidden", true), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = false, this._backdrop.hide(() => {
        document.body.classList.remove(En), this._resetAdjustments(), this._scrollBar.reset(), N.trigger(this._element, mn);
      });
    }
    _isAnimated() {
      return this._element.classList.contains("fade");
    }
    _triggerBackdropTransition() {
      if (N.trigger(this._element, pn).defaultPrevented) return;
      const t2 = this._element.scrollHeight > document.documentElement.clientHeight, e2 = this._element.style.overflowY;
      "hidden" === e2 || this._element.classList.contains(Cn) || (t2 || (this._element.style.overflowY = "hidden"), this._element.classList.add(Cn), this._queueCallback(() => {
        this._element.classList.remove(Cn), this._queueCallback(() => {
          this._element.style.overflowY = e2;
        }, this._dialog);
      }, this._dialog), this._element.focus());
    }
    _adjustDialog() {
      const t2 = this._element.scrollHeight > document.documentElement.clientHeight, e2 = this._scrollBar.getWidth(), i2 = e2 > 0;
      if (i2 && !t2) {
        const t3 = p() ? "paddingLeft" : "paddingRight";
        this._element.style[t3] = `${e2}px`;
      }
      if (!i2 && t2) {
        const t3 = p() ? "paddingRight" : "paddingLeft";
        this._element.style[t3] = `${e2}px`;
      }
    }
    _resetAdjustments() {
      this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
    }
    static jQueryInterface(t2, e2) {
      return this.each(function() {
        const i2 = kn.getOrCreateInstance(this, t2);
        if ("string" == typeof t2) {
          if (void 0 === i2[t2]) throw new TypeError(`No method named "${t2}"`);
          i2[t2](e2);
        }
      });
    }
  }
  N.on(document, An, '[data-bs-toggle="modal"]', function(t2) {
    const e2 = z.getElementFromSelector(this);
    ["A", "AREA"].includes(this.tagName) && t2.preventDefault(), N.one(e2, gn, (t3) => {
      t3.defaultPrevented || N.one(e2, mn, () => {
        a(this) && this.focus();
      });
    });
    const i2 = z.findOne(".modal.show");
    i2 && kn.getInstance(i2).hide(), kn.getOrCreateInstance(e2).toggle(this);
  }), R(kn), m(kn);
  const Ln = ".bs.offcanvas", Sn = ".data-api", Dn = `load${Ln}${Sn}`, $n = "show", In = "showing", Nn = "hiding", Pn = ".offcanvas.show", jn = `show${Ln}`, Mn = `shown${Ln}`, Fn = `hide${Ln}`, Hn = `hidePrevented${Ln}`, Wn = `hidden${Ln}`, Bn = `resize${Ln}`, zn = `click${Ln}${Sn}`, Rn = `keydown.dismiss${Ln}`, qn = { backdrop: true, keyboard: true, scroll: false }, Vn = { backdrop: "(boolean|string)", keyboard: "boolean", scroll: "boolean" };
  class Kn extends W {
    constructor(t2, e2) {
      super(t2, e2), this._isShown = false, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners();
    }
    static get Default() {
      return qn;
    }
    static get DefaultType() {
      return Vn;
    }
    static get NAME() {
      return "offcanvas";
    }
    toggle(t2) {
      return this._isShown ? this.hide() : this.show(t2);
    }
    show(t2) {
      this._isShown || N.trigger(this._element, jn, { relatedTarget: t2 }).defaultPrevented || (this._isShown = true, this._backdrop.show(), this._config.scroll || new dn().hide(), this._element.setAttribute("aria-modal", true), this._element.setAttribute("role", "dialog"), this._element.classList.add(In), this._queueCallback(() => {
        this._config.scroll && !this._config.backdrop || this._focustrap.activate(), this._element.classList.add($n), this._element.classList.remove(In), N.trigger(this._element, Mn, { relatedTarget: t2 });
      }, this._element, true));
    }
    hide() {
      this._isShown && (N.trigger(this._element, Fn).defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = false, this._element.classList.add(Nn), this._backdrop.hide(), this._queueCallback(() => {
        this._element.classList.remove($n, Nn), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || new dn().reset(), N.trigger(this._element, Wn);
      }, this._element, true)));
    }
    dispose() {
      this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
    }
    _initializeBackDrop() {
      const t2 = Boolean(this._config.backdrop);
      return new Ji({ className: "offcanvas-backdrop", isVisible: t2, isAnimated: true, rootElement: this._element.parentNode, clickCallback: t2 ? () => {
        "static" !== this._config.backdrop ? this.hide() : N.trigger(this._element, Hn);
      } : null });
    }
    _initializeFocusTrap() {
      return new rn({ trapElement: this._element });
    }
    _addEventListeners() {
      N.on(this._element, Rn, (t2) => {
        "Escape" === t2.key && (this._config.keyboard ? this.hide() : N.trigger(this._element, Hn));
      });
    }
    static jQueryInterface(t2) {
      return this.each(function() {
        const e2 = Kn.getOrCreateInstance(this, t2);
        if ("string" == typeof t2) {
          if (void 0 === e2[t2] || t2.startsWith("_") || "constructor" === t2) throw new TypeError(`No method named "${t2}"`);
          e2[t2](this);
        }
      });
    }
  }
  N.on(document, zn, '[data-bs-toggle="offcanvas"]', function(t2) {
    const e2 = z.getElementFromSelector(this);
    if (["A", "AREA"].includes(this.tagName) && t2.preventDefault(), l(this)) return;
    N.one(e2, Wn, () => {
      a(this) && this.focus();
    });
    const i2 = z.findOne(Pn);
    i2 && i2 !== e2 && Kn.getInstance(i2).hide(), Kn.getOrCreateInstance(e2).toggle(this);
  }), N.on(window, Dn, () => {
    for (const t2 of z.find(Pn)) Kn.getOrCreateInstance(t2).show();
  }), N.on(window, Bn, () => {
    for (const t2 of z.find("[aria-modal][class*=show][class*=offcanvas-]")) "fixed" !== getComputedStyle(t2).position && Kn.getOrCreateInstance(t2).hide();
  }), R(Kn), m(Kn);
  const Qn = { "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i], a: ["target", "href", "title", "rel"], area: [], b: [], br: [], col: [], code: [], dd: [], div: [], dl: [], dt: [], em: [], hr: [], h1: [], h2: [], h3: [], h4: [], h5: [], h6: [], i: [], img: ["src", "srcset", "alt", "title", "width", "height"], li: [], ol: [], p: [], pre: [], s: [], small: [], span: [], sub: [], sup: [], strong: [], u: [], ul: [] }, Xn = /* @__PURE__ */ new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]), Yn = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i, Un = (t2, e2) => {
    const i2 = t2.nodeName.toLowerCase();
    return e2.includes(i2) ? !Xn.has(i2) || Boolean(Yn.test(t2.nodeValue)) : e2.filter((t3) => t3 instanceof RegExp).some((t3) => t3.test(i2));
  }, Gn = { allowList: Qn, content: {}, extraClass: "", html: false, sanitize: true, sanitizeFn: null, template: "<div></div>" }, Jn = { allowList: "object", content: "object", extraClass: "(string|function)", html: "boolean", sanitize: "boolean", sanitizeFn: "(null|function)", template: "string" }, Zn = { entry: "(string|element|function|null)", selector: "(string|element)" };
  class ts extends H {
    constructor(t2) {
      super(), this._config = this._getConfig(t2);
    }
    static get Default() {
      return Gn;
    }
    static get DefaultType() {
      return Jn;
    }
    static get NAME() {
      return "TemplateFactory";
    }
    getContent() {
      return Object.values(this._config.content).map((t2) => this._resolvePossibleFunction(t2)).filter(Boolean);
    }
    hasContent() {
      return this.getContent().length > 0;
    }
    changeContent(t2) {
      return this._checkContent(t2), this._config.content = { ...this._config.content, ...t2 }, this;
    }
    toHtml() {
      const t2 = document.createElement("div");
      t2.innerHTML = this._maybeSanitize(this._config.template);
      for (const [e3, i3] of Object.entries(this._config.content)) this._setContent(t2, i3, e3);
      const e2 = t2.children[0], i2 = this._resolvePossibleFunction(this._config.extraClass);
      return i2 && e2.classList.add(...i2.split(" ")), e2;
    }
    _typeCheckConfig(t2) {
      super._typeCheckConfig(t2), this._checkContent(t2.content);
    }
    _checkContent(t2) {
      for (const [e2, i2] of Object.entries(t2)) super._typeCheckConfig({ selector: e2, entry: i2 }, Zn);
    }
    _setContent(t2, e2, i2) {
      const n2 = z.findOne(i2, t2);
      n2 && ((e2 = this._resolvePossibleFunction(e2)) ? o(e2) ? this._putElementInTemplate(r(e2), n2) : this._config.html ? n2.innerHTML = this._maybeSanitize(e2) : n2.textContent = e2 : n2.remove());
    }
    _maybeSanitize(t2) {
      return this._config.sanitize ? function(t3, e2, i2) {
        if (!t3.length) return t3;
        if (i2 && "function" == typeof i2) return i2(t3);
        const n2 = new window.DOMParser().parseFromString(t3, "text/html"), s2 = [].concat(...n2.body.querySelectorAll("*"));
        for (const t4 of s2) {
          const i3 = t4.nodeName.toLowerCase();
          if (!Object.keys(e2).includes(i3)) {
            t4.remove();
            continue;
          }
          const n3 = [].concat(...t4.attributes), s3 = [].concat(e2["*"] || [], e2[i3] || []);
          for (const e3 of n3) Un(e3, s3) || t4.removeAttribute(e3.nodeName);
        }
        return n2.body.innerHTML;
      }(t2, this._config.allowList, this._config.sanitizeFn) : t2;
    }
    _resolvePossibleFunction(t2) {
      return g(t2, [void 0, this]);
    }
    _putElementInTemplate(t2, e2) {
      if (this._config.html) return e2.innerHTML = "", void e2.append(t2);
      e2.textContent = t2.textContent;
    }
  }
  const es = /* @__PURE__ */ new Set(["sanitize", "allowList", "sanitizeFn"]), is = "fade", ns = "show", ss = ".tooltip-inner", os = ".modal", rs = "hide.bs.modal", as = "hover", ls = "focus", cs = { AUTO: "auto", TOP: "top", RIGHT: p() ? "left" : "right", BOTTOM: "bottom", LEFT: p() ? "right" : "left" }, hs = { allowList: Qn, animation: true, boundary: "clippingParents", container: false, customClass: "", delay: 0, fallbackPlacements: ["top", "right", "bottom", "left"], html: false, offset: [0, 6], placement: "top", popperConfig: null, sanitize: true, sanitizeFn: null, selector: false, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', title: "", trigger: "hover focus" }, ds = { allowList: "object", animation: "boolean", boundary: "(string|element)", container: "(string|element|boolean)", customClass: "(string|function)", delay: "(number|object)", fallbackPlacements: "array", html: "boolean", offset: "(array|string|function)", placement: "(string|function)", popperConfig: "(null|object|function)", sanitize: "boolean", sanitizeFn: "(null|function)", selector: "(string|boolean)", template: "string", title: "(string|element|function)", trigger: "string" };
  class us extends W {
    constructor(t2, e2) {
      if (void 0 === wi) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)");
      super(t2, e2), this._isEnabled = true, this._timeout = 0, this._isHovered = null, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this._newContent = null, this.tip = null, this._setListeners(), this._config.selector || this._fixTitle();
    }
    static get Default() {
      return hs;
    }
    static get DefaultType() {
      return ds;
    }
    static get NAME() {
      return "tooltip";
    }
    enable() {
      this._isEnabled = true;
    }
    disable() {
      this._isEnabled = false;
    }
    toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    }
    toggle() {
      this._isEnabled && (this._isShown() ? this._leave() : this._enter());
    }
    dispose() {
      clearTimeout(this._timeout), N.off(this._element.closest(os), rs, this._hideModalHandler), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), super.dispose();
    }
    show() {
      if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
      if (!this._isWithContent() || !this._isEnabled) return;
      const t2 = N.trigger(this._element, this.constructor.eventName("show")), e2 = (c(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
      if (t2.defaultPrevented || !e2) return;
      this._disposePopper();
      const i2 = this._getTipElement();
      this._element.setAttribute("aria-describedby", i2.getAttribute("id"));
      const { container: n2 } = this._config;
      if (this._element.ownerDocument.documentElement.contains(this.tip) || (n2.append(i2), N.trigger(this._element, this.constructor.eventName("inserted"))), this._popper = this._createPopper(i2), i2.classList.add(ns), "ontouchstart" in document.documentElement) for (const t3 of [].concat(...document.body.children)) N.on(t3, "mouseover", h);
      this._queueCallback(() => {
        N.trigger(this._element, this.constructor.eventName("shown")), false === this._isHovered && this._leave(), this._isHovered = false;
      }, this.tip, this._isAnimated());
    }
    hide() {
      if (this._isShown() && !N.trigger(this._element, this.constructor.eventName("hide")).defaultPrevented) {
        if (this._getTipElement().classList.remove(ns), "ontouchstart" in document.documentElement) for (const t2 of [].concat(...document.body.children)) N.off(t2, "mouseover", h);
        this._activeTrigger.click = false, this._activeTrigger[ls] = false, this._activeTrigger[as] = false, this._isHovered = null, this._queueCallback(() => {
          this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(), this._element.removeAttribute("aria-describedby"), N.trigger(this._element, this.constructor.eventName("hidden")));
        }, this.tip, this._isAnimated());
      }
    }
    update() {
      this._popper && this._popper.update();
    }
    _isWithContent() {
      return Boolean(this._getTitle());
    }
    _getTipElement() {
      return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())), this.tip;
    }
    _createTipElement(t2) {
      const e2 = this._getTemplateFactory(t2).toHtml();
      if (!e2) return null;
      e2.classList.remove(is, ns), e2.classList.add(`bs-${this.constructor.NAME}-auto`);
      const i2 = ((t3) => {
        do {
          t3 += Math.floor(1e6 * Math.random());
        } while (document.getElementById(t3));
        return t3;
      })(this.constructor.NAME).toString();
      return e2.setAttribute("id", i2), this._isAnimated() && e2.classList.add(is), e2;
    }
    setContent(t2) {
      this._newContent = t2, this._isShown() && (this._disposePopper(), this.show());
    }
    _getTemplateFactory(t2) {
      return this._templateFactory ? this._templateFactory.changeContent(t2) : this._templateFactory = new ts({ ...this._config, content: t2, extraClass: this._resolvePossibleFunction(this._config.customClass) }), this._templateFactory;
    }
    _getContentForTemplate() {
      return { [ss]: this._getTitle() };
    }
    _getTitle() {
      return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title");
    }
    _initializeOnDelegatedTarget(t2) {
      return this.constructor.getOrCreateInstance(t2.delegateTarget, this._getDelegateConfig());
    }
    _isAnimated() {
      return this._config.animation || this.tip && this.tip.classList.contains(is);
    }
    _isShown() {
      return this.tip && this.tip.classList.contains(ns);
    }
    _createPopper(t2) {
      const e2 = g(this._config.placement, [this, t2, this._element]), i2 = cs[e2.toUpperCase()];
      return yi(this._element, t2, this._getPopperConfig(i2));
    }
    _getOffset() {
      const { offset: t2 } = this._config;
      return "string" == typeof t2 ? t2.split(",").map((t3) => Number.parseInt(t3, 10)) : "function" == typeof t2 ? (e2) => t2(e2, this._element) : t2;
    }
    _resolvePossibleFunction(t2) {
      return g(t2, [this._element, this._element]);
    }
    _getPopperConfig(t2) {
      const e2 = { placement: t2, modifiers: [{ name: "flip", options: { fallbackPlacements: this._config.fallbackPlacements } }, { name: "offset", options: { offset: this._getOffset() } }, { name: "preventOverflow", options: { boundary: this._config.boundary } }, { name: "arrow", options: { element: `.${this.constructor.NAME}-arrow` } }, { name: "preSetPlacement", enabled: true, phase: "beforeMain", fn: (t3) => {
        this._getTipElement().setAttribute("data-popper-placement", t3.state.placement);
      } }] };
      return { ...e2, ...g(this._config.popperConfig, [void 0, e2]) };
    }
    _setListeners() {
      const t2 = this._config.trigger.split(" ");
      for (const e2 of t2) if ("click" === e2) N.on(this._element, this.constructor.eventName("click"), this._config.selector, (t3) => {
        this._initializeOnDelegatedTarget(t3).toggle();
      });
      else if ("manual" !== e2) {
        const t3 = e2 === as ? this.constructor.eventName("mouseenter") : this.constructor.eventName("focusin"), i2 = e2 === as ? this.constructor.eventName("mouseleave") : this.constructor.eventName("focusout");
        N.on(this._element, t3, this._config.selector, (t4) => {
          const e3 = this._initializeOnDelegatedTarget(t4);
          e3._activeTrigger["focusin" === t4.type ? ls : as] = true, e3._enter();
        }), N.on(this._element, i2, this._config.selector, (t4) => {
          const e3 = this._initializeOnDelegatedTarget(t4);
          e3._activeTrigger["focusout" === t4.type ? ls : as] = e3._element.contains(t4.relatedTarget), e3._leave();
        });
      }
      this._hideModalHandler = () => {
        this._element && this.hide();
      }, N.on(this._element.closest(os), rs, this._hideModalHandler);
    }
    _fixTitle() {
      const t2 = this._element.getAttribute("title");
      t2 && (this._element.getAttribute("aria-label") || this._element.textContent.trim() || this._element.setAttribute("aria-label", t2), this._element.setAttribute("data-bs-original-title", t2), this._element.removeAttribute("title"));
    }
    _enter() {
      this._isShown() || this._isHovered ? this._isHovered = true : (this._isHovered = true, this._setTimeout(() => {
        this._isHovered && this.show();
      }, this._config.delay.show));
    }
    _leave() {
      this._isWithActiveTrigger() || (this._isHovered = false, this._setTimeout(() => {
        this._isHovered || this.hide();
      }, this._config.delay.hide));
    }
    _setTimeout(t2, e2) {
      clearTimeout(this._timeout), this._timeout = setTimeout(t2, e2);
    }
    _isWithActiveTrigger() {
      return Object.values(this._activeTrigger).includes(true);
    }
    _getConfig(t2) {
      const e2 = F.getDataAttributes(this._element);
      for (const t3 of Object.keys(e2)) es.has(t3) && delete e2[t3];
      return t2 = { ...e2, ..."object" == typeof t2 && t2 ? t2 : {} }, t2 = this._mergeConfigObj(t2), t2 = this._configAfterMerge(t2), this._typeCheckConfig(t2), t2;
    }
    _configAfterMerge(t2) {
      return t2.container = false === t2.container ? document.body : r(t2.container), "number" == typeof t2.delay && (t2.delay = { show: t2.delay, hide: t2.delay }), "number" == typeof t2.title && (t2.title = t2.title.toString()), "number" == typeof t2.content && (t2.content = t2.content.toString()), t2;
    }
    _getDelegateConfig() {
      const t2 = {};
      for (const [e2, i2] of Object.entries(this._config)) this.constructor.Default[e2] !== i2 && (t2[e2] = i2);
      return t2.selector = false, t2.trigger = "manual", t2;
    }
    _disposePopper() {
      this._popper && (this._popper.destroy(), this._popper = null), this.tip && (this.tip.remove(), this.tip = null);
    }
    static jQueryInterface(t2) {
      return this.each(function() {
        const e2 = us.getOrCreateInstance(this, t2);
        if ("string" == typeof t2) {
          if (void 0 === e2[t2]) throw new TypeError(`No method named "${t2}"`);
          e2[t2]();
        }
      });
    }
  }
  m(us);
  const fs = ".popover-header", ps = ".popover-body", ms = { ...us.Default, content: "", offset: [0, 8], placement: "right", template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>', trigger: "click" }, gs = { ...us.DefaultType, content: "(null|string|element|function)" };
  class _s extends us {
    static get Default() {
      return ms;
    }
    static get DefaultType() {
      return gs;
    }
    static get NAME() {
      return "popover";
    }
    _isWithContent() {
      return this._getTitle() || this._getContent();
    }
    _getContentForTemplate() {
      return { [fs]: this._getTitle(), [ps]: this._getContent() };
    }
    _getContent() {
      return this._resolvePossibleFunction(this._config.content);
    }
    static jQueryInterface(t2) {
      return this.each(function() {
        const e2 = _s.getOrCreateInstance(this, t2);
        if ("string" == typeof t2) {
          if (void 0 === e2[t2]) throw new TypeError(`No method named "${t2}"`);
          e2[t2]();
        }
      });
    }
  }
  m(_s);
  const bs = ".bs.scrollspy", vs = `activate${bs}`, ys = `click${bs}`, ws = `load${bs}.data-api`, As = "active", Es = "[href]", Ts = ".nav-link", Cs = `${Ts}, .nav-item > ${Ts}, .list-group-item`, Os = { offset: null, rootMargin: "0px 0px -25%", smoothScroll: false, target: null, threshold: [0.1, 0.5, 1] }, xs = { offset: "(number|null)", rootMargin: "string", smoothScroll: "boolean", target: "element", threshold: "array" };
  class ks extends W {
    constructor(t2, e2) {
      super(t2, e2), this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map(), this._rootElement = "visible" === getComputedStyle(this._element).overflowY ? null : this._element, this._activeTarget = null, this._observer = null, this._previousScrollData = { visibleEntryTop: 0, parentScrollTop: 0 }, this.refresh();
    }
    static get Default() {
      return Os;
    }
    static get DefaultType() {
      return xs;
    }
    static get NAME() {
      return "scrollspy";
    }
    refresh() {
      this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver();
      for (const t2 of this._observableSections.values()) this._observer.observe(t2);
    }
    dispose() {
      this._observer.disconnect(), super.dispose();
    }
    _configAfterMerge(t2) {
      return t2.target = r(t2.target) || document.body, t2.rootMargin = t2.offset ? `${t2.offset}px 0px -30%` : t2.rootMargin, "string" == typeof t2.threshold && (t2.threshold = t2.threshold.split(",").map((t3) => Number.parseFloat(t3))), t2;
    }
    _maybeEnableSmoothScroll() {
      this._config.smoothScroll && (N.off(this._config.target, ys), N.on(this._config.target, ys, Es, (t2) => {
        const e2 = this._observableSections.get(t2.target.hash);
        if (e2) {
          t2.preventDefault();
          const i2 = this._rootElement || window, n2 = e2.offsetTop - this._element.offsetTop;
          if (i2.scrollTo) return void i2.scrollTo({ top: n2, behavior: "smooth" });
          i2.scrollTop = n2;
        }
      }));
    }
    _getNewObserver() {
      const t2 = { root: this._rootElement, threshold: this._config.threshold, rootMargin: this._config.rootMargin };
      return new IntersectionObserver((t3) => this._observerCallback(t3), t2);
    }
    _observerCallback(t2) {
      const e2 = (t3) => this._targetLinks.get(`#${t3.target.id}`), i2 = (t3) => {
        this._previousScrollData.visibleEntryTop = t3.target.offsetTop, this._process(e2(t3));
      }, n2 = (this._rootElement || document.documentElement).scrollTop, s2 = n2 >= this._previousScrollData.parentScrollTop;
      this._previousScrollData.parentScrollTop = n2;
      for (const o2 of t2) {
        if (!o2.isIntersecting) {
          this._activeTarget = null, this._clearActiveClass(e2(o2));
          continue;
        }
        const t3 = o2.target.offsetTop >= this._previousScrollData.visibleEntryTop;
        if (s2 && t3) {
          if (i2(o2), !n2) return;
        } else s2 || t3 || i2(o2);
      }
    }
    _initializeTargetsAndObservables() {
      this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map();
      const t2 = z.find(Es, this._config.target);
      for (const e2 of t2) {
        if (!e2.hash || l(e2)) continue;
        const t3 = z.findOne(decodeURI(e2.hash), this._element);
        a(t3) && (this._targetLinks.set(decodeURI(e2.hash), e2), this._observableSections.set(e2.hash, t3));
      }
    }
    _process(t2) {
      this._activeTarget !== t2 && (this._clearActiveClass(this._config.target), this._activeTarget = t2, t2.classList.add(As), this._activateParents(t2), N.trigger(this._element, vs, { relatedTarget: t2 }));
    }
    _activateParents(t2) {
      if (t2.classList.contains("dropdown-item")) z.findOne(".dropdown-toggle", t2.closest(".dropdown")).classList.add(As);
      else for (const e2 of z.parents(t2, ".nav, .list-group")) for (const t3 of z.prev(e2, Cs)) t3.classList.add(As);
    }
    _clearActiveClass(t2) {
      t2.classList.remove(As);
      const e2 = z.find(`${Es}.${As}`, t2);
      for (const t3 of e2) t3.classList.remove(As);
    }
    static jQueryInterface(t2) {
      return this.each(function() {
        const e2 = ks.getOrCreateInstance(this, t2);
        if ("string" == typeof t2) {
          if (void 0 === e2[t2] || t2.startsWith("_") || "constructor" === t2) throw new TypeError(`No method named "${t2}"`);
          e2[t2]();
        }
      });
    }
  }
  N.on(window, ws, () => {
    for (const t2 of z.find('[data-bs-spy="scroll"]')) ks.getOrCreateInstance(t2);
  }), m(ks);
  const Ls = ".bs.tab", Ss = `hide${Ls}`, Ds = `hidden${Ls}`, $s = `show${Ls}`, Is = `shown${Ls}`, Ns = `click${Ls}`, Ps = `keydown${Ls}`, js = `load${Ls}`, Ms = "ArrowLeft", Fs = "ArrowRight", Hs = "ArrowUp", Ws = "ArrowDown", Bs = "Home", zs = "End", Rs = "active", qs = "fade", Vs = "show", Ks = ".dropdown-toggle", Qs = `:not(${Ks})`, Xs = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', Ys = `.nav-link${Qs}, .list-group-item${Qs}, [role="tab"]${Qs}, ${Xs}`, Us = `.${Rs}[data-bs-toggle="tab"], .${Rs}[data-bs-toggle="pill"], .${Rs}[data-bs-toggle="list"]`;
  class Gs extends W {
    constructor(t2) {
      super(t2), this._parent = this._element.closest('.list-group, .nav, [role="tablist"]'), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), N.on(this._element, Ps, (t3) => this._keydown(t3)));
    }
    static get NAME() {
      return "tab";
    }
    show() {
      const t2 = this._element;
      if (this._elemIsActive(t2)) return;
      const e2 = this._getActiveElem(), i2 = e2 ? N.trigger(e2, Ss, { relatedTarget: t2 }) : null;
      N.trigger(t2, $s, { relatedTarget: e2 }).defaultPrevented || i2 && i2.defaultPrevented || (this._deactivate(e2, t2), this._activate(t2, e2));
    }
    _activate(t2, e2) {
      t2 && (t2.classList.add(Rs), this._activate(z.getElementFromSelector(t2)), this._queueCallback(() => {
        "tab" === t2.getAttribute("role") ? (t2.removeAttribute("tabindex"), t2.setAttribute("aria-selected", true), this._toggleDropDown(t2, true), N.trigger(t2, Is, { relatedTarget: e2 })) : t2.classList.add(Vs);
      }, t2, t2.classList.contains(qs)));
    }
    _deactivate(t2, e2) {
      t2 && (t2.classList.remove(Rs), t2.blur(), this._deactivate(z.getElementFromSelector(t2)), this._queueCallback(() => {
        "tab" === t2.getAttribute("role") ? (t2.setAttribute("aria-selected", false), t2.setAttribute("tabindex", "-1"), this._toggleDropDown(t2, false), N.trigger(t2, Ds, { relatedTarget: e2 })) : t2.classList.remove(Vs);
      }, t2, t2.classList.contains(qs)));
    }
    _keydown(t2) {
      if (![Ms, Fs, Hs, Ws, Bs, zs].includes(t2.key)) return;
      t2.stopPropagation(), t2.preventDefault();
      const e2 = this._getChildren().filter((t3) => !l(t3));
      let i2;
      if ([Bs, zs].includes(t2.key)) i2 = e2[t2.key === Bs ? 0 : e2.length - 1];
      else {
        const n2 = [Fs, Ws].includes(t2.key);
        i2 = b(e2, t2.target, n2, true);
      }
      i2 && (i2.focus({ preventScroll: true }), Gs.getOrCreateInstance(i2).show());
    }
    _getChildren() {
      return z.find(Ys, this._parent);
    }
    _getActiveElem() {
      return this._getChildren().find((t2) => this._elemIsActive(t2)) || null;
    }
    _setInitialAttributes(t2, e2) {
      this._setAttributeIfNotExists(t2, "role", "tablist");
      for (const t3 of e2) this._setInitialAttributesOnChild(t3);
    }
    _setInitialAttributesOnChild(t2) {
      t2 = this._getInnerElement(t2);
      const e2 = this._elemIsActive(t2), i2 = this._getOuterElement(t2);
      t2.setAttribute("aria-selected", e2), i2 !== t2 && this._setAttributeIfNotExists(i2, "role", "presentation"), e2 || t2.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(t2, "role", "tab"), this._setInitialAttributesOnTargetPanel(t2);
    }
    _setInitialAttributesOnTargetPanel(t2) {
      const e2 = z.getElementFromSelector(t2);
      e2 && (this._setAttributeIfNotExists(e2, "role", "tabpanel"), t2.id && this._setAttributeIfNotExists(e2, "aria-labelledby", `${t2.id}`));
    }
    _toggleDropDown(t2, e2) {
      const i2 = this._getOuterElement(t2);
      if (!i2.classList.contains("dropdown")) return;
      const n2 = (t3, n3) => {
        const s2 = z.findOne(t3, i2);
        s2 && s2.classList.toggle(n3, e2);
      };
      n2(Ks, Rs), n2(".dropdown-menu", Vs), i2.setAttribute("aria-expanded", e2);
    }
    _setAttributeIfNotExists(t2, e2, i2) {
      t2.hasAttribute(e2) || t2.setAttribute(e2, i2);
    }
    _elemIsActive(t2) {
      return t2.classList.contains(Rs);
    }
    _getInnerElement(t2) {
      return t2.matches(Ys) ? t2 : z.findOne(Ys, t2);
    }
    _getOuterElement(t2) {
      return t2.closest(".nav-item, .list-group-item") || t2;
    }
    static jQueryInterface(t2) {
      return this.each(function() {
        const e2 = Gs.getOrCreateInstance(this);
        if ("string" == typeof t2) {
          if (void 0 === e2[t2] || t2.startsWith("_") || "constructor" === t2) throw new TypeError(`No method named "${t2}"`);
          e2[t2]();
        }
      });
    }
  }
  N.on(document, Ns, Xs, function(t2) {
    ["A", "AREA"].includes(this.tagName) && t2.preventDefault(), l(this) || Gs.getOrCreateInstance(this).show();
  }), N.on(window, js, () => {
    for (const t2 of z.find(Us)) Gs.getOrCreateInstance(t2);
  }), m(Gs);
  const Js = ".bs.toast", Zs = `mouseover${Js}`, to = `mouseout${Js}`, eo = `focusin${Js}`, io = `focusout${Js}`, no = `hide${Js}`, so = `hidden${Js}`, oo = `show${Js}`, ro = `shown${Js}`, ao = "hide", lo = "show", co = "showing", ho = { animation: "boolean", autohide: "boolean", delay: "number" }, uo = { animation: true, autohide: true, delay: 5e3 };
  class fo extends W {
    constructor(t2, e2) {
      super(t2, e2), this._timeout = null, this._hasMouseInteraction = false, this._hasKeyboardInteraction = false, this._setListeners();
    }
    static get Default() {
      return uo;
    }
    static get DefaultType() {
      return ho;
    }
    static get NAME() {
      return "toast";
    }
    show() {
      N.trigger(this._element, oo).defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove(ao), d(this._element), this._element.classList.add(lo, co), this._queueCallback(() => {
        this._element.classList.remove(co), N.trigger(this._element, ro), this._maybeScheduleHide();
      }, this._element, this._config.animation));
    }
    hide() {
      this.isShown() && (N.trigger(this._element, no).defaultPrevented || (this._element.classList.add(co), this._queueCallback(() => {
        this._element.classList.add(ao), this._element.classList.remove(co, lo), N.trigger(this._element, so);
      }, this._element, this._config.animation)));
    }
    dispose() {
      this._clearTimeout(), this.isShown() && this._element.classList.remove(lo), super.dispose();
    }
    isShown() {
      return this._element.classList.contains(lo);
    }
    _maybeScheduleHide() {
      this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(() => {
        this.hide();
      }, this._config.delay)));
    }
    _onInteraction(t2, e2) {
      switch (t2.type) {
        case "mouseover":
        case "mouseout":
          this._hasMouseInteraction = e2;
          break;
        case "focusin":
        case "focusout":
          this._hasKeyboardInteraction = e2;
      }
      if (e2) return void this._clearTimeout();
      const i2 = t2.relatedTarget;
      this._element === i2 || this._element.contains(i2) || this._maybeScheduleHide();
    }
    _setListeners() {
      N.on(this._element, Zs, (t2) => this._onInteraction(t2, true)), N.on(this._element, to, (t2) => this._onInteraction(t2, false)), N.on(this._element, eo, (t2) => this._onInteraction(t2, true)), N.on(this._element, io, (t2) => this._onInteraction(t2, false));
    }
    _clearTimeout() {
      clearTimeout(this._timeout), this._timeout = null;
    }
    static jQueryInterface(t2) {
      return this.each(function() {
        const e2 = fo.getOrCreateInstance(this, t2);
        if ("string" == typeof t2) {
          if (void 0 === e2[t2]) throw new TypeError(`No method named "${t2}"`);
          e2[t2](this);
        }
      });
    }
  }
  return R(fo), m(fo), { Alert: Q, Button: Y, Carousel: Lt, Collapse: Rt, Dropdown: Ki, Modal: kn, Offcanvas: Kn, Popover: _s, ScrollSpy: ks, Tab: Gs, Toast: fo, Tooltip: us };
});


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuZ3VsYXI6c2NyaXB0L2dsb2JhbDpzY3JpcHRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICAqIEJvb3RzdHJhcCB2NS4zLjYgKGh0dHBzOi8vZ2V0Ym9vdHN0cmFwLmNvbS8pXG4gICogQ29weXJpZ2h0IDIwMTEtMjAyNSBUaGUgQm9vdHN0cmFwIEF1dGhvcnMgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ncmFwaHMvY29udHJpYnV0b3JzKVxuICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICAqL1xuIWZ1bmN0aW9uKHQsZSl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9ZSgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoZSk6KHQ9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbFRoaXM/Z2xvYmFsVGhpczp0fHxzZWxmKS5ib290c3RyYXA9ZSgpfSh0aGlzLChmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO2NvbnN0IHQ9bmV3IE1hcCxlPXtzZXQoZSxpLG4pe3QuaGFzKGUpfHx0LnNldChlLG5ldyBNYXApO2NvbnN0IHM9dC5nZXQoZSk7cy5oYXMoaSl8fDA9PT1zLnNpemU/cy5zZXQoaSxuKTpjb25zb2xlLmVycm9yKGBCb290c3RyYXAgZG9lc24ndCBhbGxvdyBtb3JlIHRoYW4gb25lIGluc3RhbmNlIHBlciBlbGVtZW50LiBCb3VuZCBpbnN0YW5jZTogJHtBcnJheS5mcm9tKHMua2V5cygpKVswXX0uYCl9LGdldDooZSxpKT0+dC5oYXMoZSkmJnQuZ2V0KGUpLmdldChpKXx8bnVsbCxyZW1vdmUoZSxpKXtpZighdC5oYXMoZSkpcmV0dXJuO2NvbnN0IG49dC5nZXQoZSk7bi5kZWxldGUoaSksMD09PW4uc2l6ZSYmdC5kZWxldGUoZSl9fSxpPVwidHJhbnNpdGlvbmVuZFwiLG49dD0+KHQmJndpbmRvdy5DU1MmJndpbmRvdy5DU1MuZXNjYXBlJiYodD10LnJlcGxhY2UoLyMoW15cXHNcIiMnXSspL2csKCh0LGUpPT5gIyR7Q1NTLmVzY2FwZShlKX1gKSkpLHQpLHM9dD0+e3QuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoaSkpfSxvPXQ9PiEoIXR8fFwib2JqZWN0XCIhPXR5cGVvZiB0KSYmKHZvaWQgMCE9PXQuanF1ZXJ5JiYodD10WzBdKSx2b2lkIDAhPT10Lm5vZGVUeXBlKSxyPXQ9Pm8odCk/dC5qcXVlcnk/dFswXTp0Olwic3RyaW5nXCI9PXR5cGVvZiB0JiZ0Lmxlbmd0aD4wP2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iobih0KSk6bnVsbCxhPXQ9PntpZighbyh0KXx8MD09PXQuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGgpcmV0dXJuITE7Y29uc3QgZT1cInZpc2libGVcIj09PWdldENvbXB1dGVkU3R5bGUodCkuZ2V0UHJvcGVydHlWYWx1ZShcInZpc2liaWxpdHlcIiksaT10LmNsb3Nlc3QoXCJkZXRhaWxzOm5vdChbb3Blbl0pXCIpO2lmKCFpKXJldHVybiBlO2lmKGkhPT10KXtjb25zdCBlPXQuY2xvc2VzdChcInN1bW1hcnlcIik7aWYoZSYmZS5wYXJlbnROb2RlIT09aSlyZXR1cm4hMTtpZihudWxsPT09ZSlyZXR1cm4hMX1yZXR1cm4gZX0sbD10PT4hdHx8dC5ub2RlVHlwZSE9PU5vZGUuRUxFTUVOVF9OT0RFfHwhIXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGlzYWJsZWRcIil8fCh2b2lkIDAhPT10LmRpc2FibGVkP3QuZGlzYWJsZWQ6dC5oYXNBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKSYmXCJmYWxzZVwiIT09dC5nZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKSksYz10PT57aWYoIWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hdHRhY2hTaGFkb3cpcmV0dXJuIG51bGw7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgdC5nZXRSb290Tm9kZSl7Y29uc3QgZT10LmdldFJvb3ROb2RlKCk7cmV0dXJuIGUgaW5zdGFuY2VvZiBTaGFkb3dSb290P2U6bnVsbH1yZXR1cm4gdCBpbnN0YW5jZW9mIFNoYWRvd1Jvb3Q/dDp0LnBhcmVudE5vZGU/Yyh0LnBhcmVudE5vZGUpOm51bGx9LGg9KCk9Pnt9LGQ9dD0+e3Qub2Zmc2V0SGVpZ2h0fSx1PSgpPT53aW5kb3cualF1ZXJ5JiYhZG9jdW1lbnQuYm9keS5oYXNBdHRyaWJ1dGUoXCJkYXRhLWJzLW5vLWpxdWVyeVwiKT93aW5kb3cualF1ZXJ5Om51bGwsZj1bXSxwPSgpPT5cInJ0bFwiPT09ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRpcixtPXQ9Pnt2YXIgZTtlPSgpPT57Y29uc3QgZT11KCk7aWYoZSl7Y29uc3QgaT10Lk5BTUUsbj1lLmZuW2ldO2UuZm5baV09dC5qUXVlcnlJbnRlcmZhY2UsZS5mbltpXS5Db25zdHJ1Y3Rvcj10LGUuZm5baV0ubm9Db25mbGljdD0oKT0+KGUuZm5baV09bix0LmpRdWVyeUludGVyZmFjZSl9fSxcImxvYWRpbmdcIj09PWRvY3VtZW50LnJlYWR5U3RhdGU/KGYubGVuZ3RofHxkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCgoKT0+e2Zvcihjb25zdCB0IG9mIGYpdCgpfSkpLGYucHVzaChlKSk6ZSgpfSxnPSh0LGU9W10saT10KT0+XCJmdW5jdGlvblwiPT10eXBlb2YgdD90LmNhbGwoLi4uZSk6aSxfPSh0LGUsbj0hMCk9PntpZighbilyZXR1cm4gdm9pZCBnKHQpO2NvbnN0IG89KHQ9PntpZighdClyZXR1cm4gMDtsZXR7dHJhbnNpdGlvbkR1cmF0aW9uOmUsdHJhbnNpdGlvbkRlbGF5Oml9PXdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHQpO2NvbnN0IG49TnVtYmVyLnBhcnNlRmxvYXQoZSkscz1OdW1iZXIucGFyc2VGbG9hdChpKTtyZXR1cm4gbnx8cz8oZT1lLnNwbGl0KFwiLFwiKVswXSxpPWkuc3BsaXQoXCIsXCIpWzBdLDFlMyooTnVtYmVyLnBhcnNlRmxvYXQoZSkrTnVtYmVyLnBhcnNlRmxvYXQoaSkpKTowfSkoZSkrNTtsZXQgcj0hMTtjb25zdCBhPSh7dGFyZ2V0Om59KT0+e249PT1lJiYocj0hMCxlLnJlbW92ZUV2ZW50TGlzdGVuZXIoaSxhKSxnKHQpKX07ZS5hZGRFdmVudExpc3RlbmVyKGksYSksc2V0VGltZW91dCgoKCk9PntyfHxzKGUpfSksbyl9LGI9KHQsZSxpLG4pPT57Y29uc3Qgcz10Lmxlbmd0aDtsZXQgbz10LmluZGV4T2YoZSk7cmV0dXJuLTE9PT1vPyFpJiZuP3Rbcy0xXTp0WzBdOihvKz1pPzE6LTEsbiYmKG89KG8rcyklcyksdFtNYXRoLm1heCgwLE1hdGgubWluKG8scy0xKSldKX0sdj0vW14uXSooPz1cXC4uKilcXC58LiovLHk9L1xcLi4qLyx3PS86OlxcZCskLyxBPXt9O2xldCBFPTE7Y29uc3QgVD17bW91c2VlbnRlcjpcIm1vdXNlb3ZlclwiLG1vdXNlbGVhdmU6XCJtb3VzZW91dFwifSxDPW5ldyBTZXQoW1wiY2xpY2tcIixcImRibGNsaWNrXCIsXCJtb3VzZXVwXCIsXCJtb3VzZWRvd25cIixcImNvbnRleHRtZW51XCIsXCJtb3VzZXdoZWVsXCIsXCJET01Nb3VzZVNjcm9sbFwiLFwibW91c2VvdmVyXCIsXCJtb3VzZW91dFwiLFwibW91c2Vtb3ZlXCIsXCJzZWxlY3RzdGFydFwiLFwic2VsZWN0ZW5kXCIsXCJrZXlkb3duXCIsXCJrZXlwcmVzc1wiLFwia2V5dXBcIixcIm9yaWVudGF0aW9uY2hhbmdlXCIsXCJ0b3VjaHN0YXJ0XCIsXCJ0b3VjaG1vdmVcIixcInRvdWNoZW5kXCIsXCJ0b3VjaGNhbmNlbFwiLFwicG9pbnRlcmRvd25cIixcInBvaW50ZXJtb3ZlXCIsXCJwb2ludGVydXBcIixcInBvaW50ZXJsZWF2ZVwiLFwicG9pbnRlcmNhbmNlbFwiLFwiZ2VzdHVyZXN0YXJ0XCIsXCJnZXN0dXJlY2hhbmdlXCIsXCJnZXN0dXJlZW5kXCIsXCJmb2N1c1wiLFwiYmx1clwiLFwiY2hhbmdlXCIsXCJyZXNldFwiLFwic2VsZWN0XCIsXCJzdWJtaXRcIixcImZvY3VzaW5cIixcImZvY3Vzb3V0XCIsXCJsb2FkXCIsXCJ1bmxvYWRcIixcImJlZm9yZXVubG9hZFwiLFwicmVzaXplXCIsXCJtb3ZlXCIsXCJET01Db250ZW50TG9hZGVkXCIsXCJyZWFkeXN0YXRlY2hhbmdlXCIsXCJlcnJvclwiLFwiYWJvcnRcIixcInNjcm9sbFwiXSk7ZnVuY3Rpb24gTyh0LGUpe3JldHVybiBlJiZgJHtlfTo6JHtFKyt9YHx8dC51aWRFdmVudHx8RSsrfWZ1bmN0aW9uIHgodCl7Y29uc3QgZT1PKHQpO3JldHVybiB0LnVpZEV2ZW50PWUsQVtlXT1BW2VdfHx7fSxBW2VdfWZ1bmN0aW9uIGsodCxlLGk9bnVsbCl7cmV0dXJuIE9iamVjdC52YWx1ZXModCkuZmluZCgodD0+dC5jYWxsYWJsZT09PWUmJnQuZGVsZWdhdGlvblNlbGVjdG9yPT09aSkpfWZ1bmN0aW9uIEwodCxlLGkpe2NvbnN0IG49XCJzdHJpbmdcIj09dHlwZW9mIGUscz1uP2k6ZXx8aTtsZXQgbz1JKHQpO3JldHVybiBDLmhhcyhvKXx8KG89dCksW24scyxvXX1mdW5jdGlvbiBTKHQsZSxpLG4scyl7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIGV8fCF0KXJldHVybjtsZXRbbyxyLGFdPUwoZSxpLG4pO2lmKGUgaW4gVCl7Y29uc3QgdD10PT5mdW5jdGlvbihlKXtpZighZS5yZWxhdGVkVGFyZ2V0fHxlLnJlbGF0ZWRUYXJnZXQhPT1lLmRlbGVnYXRlVGFyZ2V0JiYhZS5kZWxlZ2F0ZVRhcmdldC5jb250YWlucyhlLnJlbGF0ZWRUYXJnZXQpKXJldHVybiB0LmNhbGwodGhpcyxlKX07cj10KHIpfWNvbnN0IGw9eCh0KSxjPWxbYV18fChsW2FdPXt9KSxoPWsoYyxyLG8/aTpudWxsKTtpZihoKXJldHVybiB2b2lkKGgub25lT2ZmPWgub25lT2ZmJiZzKTtjb25zdCBkPU8ocixlLnJlcGxhY2UodixcIlwiKSksdT1vP2Z1bmN0aW9uKHQsZSxpKXtyZXR1cm4gZnVuY3Rpb24gbihzKXtjb25zdCBvPXQucXVlcnlTZWxlY3RvckFsbChlKTtmb3IobGV0e3RhcmdldDpyfT1zO3ImJnIhPT10aGlzO3I9ci5wYXJlbnROb2RlKWZvcihjb25zdCBhIG9mIG8paWYoYT09PXIpcmV0dXJuIFAocyx7ZGVsZWdhdGVUYXJnZXQ6cn0pLG4ub25lT2ZmJiZOLm9mZih0LHMudHlwZSxlLGkpLGkuYXBwbHkocixbc10pfX0odCxpLHIpOmZ1bmN0aW9uKHQsZSl7cmV0dXJuIGZ1bmN0aW9uIGkobil7cmV0dXJuIFAobix7ZGVsZWdhdGVUYXJnZXQ6dH0pLGkub25lT2ZmJiZOLm9mZih0LG4udHlwZSxlKSxlLmFwcGx5KHQsW25dKX19KHQscik7dS5kZWxlZ2F0aW9uU2VsZWN0b3I9bz9pOm51bGwsdS5jYWxsYWJsZT1yLHUub25lT2ZmPXMsdS51aWRFdmVudD1kLGNbZF09dSx0LmFkZEV2ZW50TGlzdGVuZXIoYSx1LG8pfWZ1bmN0aW9uIEQodCxlLGksbixzKXtjb25zdCBvPWsoZVtpXSxuLHMpO28mJih0LnJlbW92ZUV2ZW50TGlzdGVuZXIoaSxvLEJvb2xlYW4ocykpLGRlbGV0ZSBlW2ldW28udWlkRXZlbnRdKX1mdW5jdGlvbiAkKHQsZSxpLG4pe2NvbnN0IHM9ZVtpXXx8e307Zm9yKGNvbnN0W28scl1vZiBPYmplY3QuZW50cmllcyhzKSlvLmluY2x1ZGVzKG4pJiZEKHQsZSxpLHIuY2FsbGFibGUsci5kZWxlZ2F0aW9uU2VsZWN0b3IpfWZ1bmN0aW9uIEkodCl7cmV0dXJuIHQ9dC5yZXBsYWNlKHksXCJcIiksVFt0XXx8dH1jb25zdCBOPXtvbih0LGUsaSxuKXtTKHQsZSxpLG4sITEpfSxvbmUodCxlLGksbil7Uyh0LGUsaSxuLCEwKX0sb2ZmKHQsZSxpLG4pe2lmKFwic3RyaW5nXCIhPXR5cGVvZiBlfHwhdClyZXR1cm47Y29uc3RbcyxvLHJdPUwoZSxpLG4pLGE9ciE9PWUsbD14KHQpLGM9bFtyXXx8e30saD1lLnN0YXJ0c1dpdGgoXCIuXCIpO2lmKHZvaWQgMD09PW8pe2lmKGgpZm9yKGNvbnN0IGkgb2YgT2JqZWN0LmtleXMobCkpJCh0LGwsaSxlLnNsaWNlKDEpKTtmb3IoY29uc3RbaSxuXW9mIE9iamVjdC5lbnRyaWVzKGMpKXtjb25zdCBzPWkucmVwbGFjZSh3LFwiXCIpO2EmJiFlLmluY2x1ZGVzKHMpfHxEKHQsbCxyLG4uY2FsbGFibGUsbi5kZWxlZ2F0aW9uU2VsZWN0b3IpfX1lbHNle2lmKCFPYmplY3Qua2V5cyhjKS5sZW5ndGgpcmV0dXJuO0QodCxsLHIsbyxzP2k6bnVsbCl9fSx0cmlnZ2VyKHQsZSxpKXtpZihcInN0cmluZ1wiIT10eXBlb2YgZXx8IXQpcmV0dXJuIG51bGw7Y29uc3Qgbj11KCk7bGV0IHM9bnVsbCxvPSEwLHI9ITAsYT0hMTtlIT09SShlKSYmbiYmKHM9bi5FdmVudChlLGkpLG4odCkudHJpZ2dlcihzKSxvPSFzLmlzUHJvcGFnYXRpb25TdG9wcGVkKCkscj0hcy5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCgpLGE9cy5pc0RlZmF1bHRQcmV2ZW50ZWQoKSk7Y29uc3QgbD1QKG5ldyBFdmVudChlLHtidWJibGVzOm8sY2FuY2VsYWJsZTohMH0pLGkpO3JldHVybiBhJiZsLnByZXZlbnREZWZhdWx0KCksciYmdC5kaXNwYXRjaEV2ZW50KGwpLGwuZGVmYXVsdFByZXZlbnRlZCYmcyYmcy5wcmV2ZW50RGVmYXVsdCgpLGx9fTtmdW5jdGlvbiBQKHQsZT17fSl7Zm9yKGNvbnN0W2ksbl1vZiBPYmplY3QuZW50cmllcyhlKSl0cnl7dFtpXT1ufWNhdGNoKGUpe09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LGkse2NvbmZpZ3VyYWJsZTohMCxnZXQ6KCk9Pm59KX1yZXR1cm4gdH1mdW5jdGlvbiBqKHQpe2lmKFwidHJ1ZVwiPT09dClyZXR1cm4hMDtpZihcImZhbHNlXCI9PT10KXJldHVybiExO2lmKHQ9PT1OdW1iZXIodCkudG9TdHJpbmcoKSlyZXR1cm4gTnVtYmVyKHQpO2lmKFwiXCI9PT10fHxcIm51bGxcIj09PXQpcmV0dXJuIG51bGw7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIHQpcmV0dXJuIHQ7dHJ5e3JldHVybiBKU09OLnBhcnNlKGRlY29kZVVSSUNvbXBvbmVudCh0KSl9Y2F0Y2goZSl7cmV0dXJuIHR9fWZ1bmN0aW9uIE0odCl7cmV0dXJuIHQucmVwbGFjZSgvW0EtWl0vZywodD0+YC0ke3QudG9Mb3dlckNhc2UoKX1gKSl9Y29uc3QgRj17c2V0RGF0YUF0dHJpYnV0ZSh0LGUsaSl7dC5zZXRBdHRyaWJ1dGUoYGRhdGEtYnMtJHtNKGUpfWAsaSl9LHJlbW92ZURhdGFBdHRyaWJ1dGUodCxlKXt0LnJlbW92ZUF0dHJpYnV0ZShgZGF0YS1icy0ke00oZSl9YCl9LGdldERhdGFBdHRyaWJ1dGVzKHQpe2lmKCF0KXJldHVybnt9O2NvbnN0IGU9e30saT1PYmplY3Qua2V5cyh0LmRhdGFzZXQpLmZpbHRlcigodD0+dC5zdGFydHNXaXRoKFwiYnNcIikmJiF0LnN0YXJ0c1dpdGgoXCJic0NvbmZpZ1wiKSkpO2Zvcihjb25zdCBuIG9mIGkpe2xldCBpPW4ucmVwbGFjZSgvXmJzLyxcIlwiKTtpPWkuY2hhckF0KDApLnRvTG93ZXJDYXNlKCkraS5zbGljZSgxKSxlW2ldPWoodC5kYXRhc2V0W25dKX1yZXR1cm4gZX0sZ2V0RGF0YUF0dHJpYnV0ZToodCxlKT0+aih0LmdldEF0dHJpYnV0ZShgZGF0YS1icy0ke00oZSl9YCkpfTtjbGFzcyBIe3N0YXRpYyBnZXQgRGVmYXVsdCgpe3JldHVybnt9fXN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKXtyZXR1cm57fX1zdGF0aWMgZ2V0IE5BTUUoKXt0aHJvdyBuZXcgRXJyb3IoJ1lvdSBoYXZlIHRvIGltcGxlbWVudCB0aGUgc3RhdGljIG1ldGhvZCBcIk5BTUVcIiwgZm9yIGVhY2ggY29tcG9uZW50IScpfV9nZXRDb25maWcodCl7cmV0dXJuIHQ9dGhpcy5fbWVyZ2VDb25maWdPYmoodCksdD10aGlzLl9jb25maWdBZnRlck1lcmdlKHQpLHRoaXMuX3R5cGVDaGVja0NvbmZpZyh0KSx0fV9jb25maWdBZnRlck1lcmdlKHQpe3JldHVybiB0fV9tZXJnZUNvbmZpZ09iaih0LGUpe2NvbnN0IGk9byhlKT9GLmdldERhdGFBdHRyaWJ1dGUoZSxcImNvbmZpZ1wiKTp7fTtyZXR1cm57Li4udGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0LC4uLlwib2JqZWN0XCI9PXR5cGVvZiBpP2k6e30sLi4ubyhlKT9GLmdldERhdGFBdHRyaWJ1dGVzKGUpOnt9LC4uLlwib2JqZWN0XCI9PXR5cGVvZiB0P3Q6e319fV90eXBlQ2hlY2tDb25maWcodCxlPXRoaXMuY29uc3RydWN0b3IuRGVmYXVsdFR5cGUpe2Zvcihjb25zdFtuLHNdb2YgT2JqZWN0LmVudHJpZXMoZSkpe2NvbnN0IGU9dFtuXSxyPW8oZSk/XCJlbGVtZW50XCI6bnVsbD09KGk9ZSk/YCR7aX1gOk9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpKS5tYXRjaCgvXFxzKFthLXpdKykvaSlbMV0udG9Mb3dlckNhc2UoKTtpZighbmV3IFJlZ0V4cChzKS50ZXN0KHIpKXRocm93IG5ldyBUeXBlRXJyb3IoYCR7dGhpcy5jb25zdHJ1Y3Rvci5OQU1FLnRvVXBwZXJDYXNlKCl9OiBPcHRpb24gXCIke259XCIgcHJvdmlkZWQgdHlwZSBcIiR7cn1cIiBidXQgZXhwZWN0ZWQgdHlwZSBcIiR7c31cIi5gKX12YXIgaX19Y2xhc3MgVyBleHRlbmRzIEh7Y29uc3RydWN0b3IodCxpKXtzdXBlcigpLCh0PXIodCkpJiYodGhpcy5fZWxlbWVudD10LHRoaXMuX2NvbmZpZz10aGlzLl9nZXRDb25maWcoaSksZS5zZXQodGhpcy5fZWxlbWVudCx0aGlzLmNvbnN0cnVjdG9yLkRBVEFfS0VZLHRoaXMpKX1kaXNwb3NlKCl7ZS5yZW1vdmUodGhpcy5fZWxlbWVudCx0aGlzLmNvbnN0cnVjdG9yLkRBVEFfS0VZKSxOLm9mZih0aGlzLl9lbGVtZW50LHRoaXMuY29uc3RydWN0b3IuRVZFTlRfS0VZKTtmb3IoY29uc3QgdCBvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0aGlzKSl0aGlzW3RdPW51bGx9X3F1ZXVlQ2FsbGJhY2sodCxlLGk9ITApe18odCxlLGkpfV9nZXRDb25maWcodCl7cmV0dXJuIHQ9dGhpcy5fbWVyZ2VDb25maWdPYmoodCx0aGlzLl9lbGVtZW50KSx0PXRoaXMuX2NvbmZpZ0FmdGVyTWVyZ2UodCksdGhpcy5fdHlwZUNoZWNrQ29uZmlnKHQpLHR9c3RhdGljIGdldEluc3RhbmNlKHQpe3JldHVybiBlLmdldChyKHQpLHRoaXMuREFUQV9LRVkpfXN0YXRpYyBnZXRPckNyZWF0ZUluc3RhbmNlKHQsZT17fSl7cmV0dXJuIHRoaXMuZ2V0SW5zdGFuY2UodCl8fG5ldyB0aGlzKHQsXCJvYmplY3RcIj09dHlwZW9mIGU/ZTpudWxsKX1zdGF0aWMgZ2V0IFZFUlNJT04oKXtyZXR1cm5cIjUuMy42XCJ9c3RhdGljIGdldCBEQVRBX0tFWSgpe3JldHVybmBicy4ke3RoaXMuTkFNRX1gfXN0YXRpYyBnZXQgRVZFTlRfS0VZKCl7cmV0dXJuYC4ke3RoaXMuREFUQV9LRVl9YH1zdGF0aWMgZXZlbnROYW1lKHQpe3JldHVybmAke3R9JHt0aGlzLkVWRU5UX0tFWX1gfX1jb25zdCBCPXQ9PntsZXQgZT10LmdldEF0dHJpYnV0ZShcImRhdGEtYnMtdGFyZ2V0XCIpO2lmKCFlfHxcIiNcIj09PWUpe2xldCBpPXQuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKTtpZighaXx8IWkuaW5jbHVkZXMoXCIjXCIpJiYhaS5zdGFydHNXaXRoKFwiLlwiKSlyZXR1cm4gbnVsbDtpLmluY2x1ZGVzKFwiI1wiKSYmIWkuc3RhcnRzV2l0aChcIiNcIikmJihpPWAjJHtpLnNwbGl0KFwiI1wiKVsxXX1gKSxlPWkmJlwiI1wiIT09aT9pLnRyaW0oKTpudWxsfXJldHVybiBlP2Uuc3BsaXQoXCIsXCIpLm1hcCgodD0+bih0KSkpLmpvaW4oXCIsXCIpOm51bGx9LHo9e2ZpbmQ6KHQsZT1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpPT5bXS5jb25jYXQoLi4uRWxlbWVudC5wcm90b3R5cGUucXVlcnlTZWxlY3RvckFsbC5jYWxsKGUsdCkpLGZpbmRPbmU6KHQsZT1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpPT5FbGVtZW50LnByb3RvdHlwZS5xdWVyeVNlbGVjdG9yLmNhbGwoZSx0KSxjaGlsZHJlbjoodCxlKT0+W10uY29uY2F0KC4uLnQuY2hpbGRyZW4pLmZpbHRlcigodD0+dC5tYXRjaGVzKGUpKSkscGFyZW50cyh0LGUpe2NvbnN0IGk9W107bGV0IG49dC5wYXJlbnROb2RlLmNsb3Nlc3QoZSk7Zm9yKDtuOylpLnB1c2gobiksbj1uLnBhcmVudE5vZGUuY2xvc2VzdChlKTtyZXR1cm4gaX0scHJldih0LGUpe2xldCBpPXQucHJldmlvdXNFbGVtZW50U2libGluZztmb3IoO2k7KXtpZihpLm1hdGNoZXMoZSkpcmV0dXJuW2ldO2k9aS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nfXJldHVybltdfSxuZXh0KHQsZSl7bGV0IGk9dC5uZXh0RWxlbWVudFNpYmxpbmc7Zm9yKDtpOyl7aWYoaS5tYXRjaGVzKGUpKXJldHVybltpXTtpPWkubmV4dEVsZW1lbnRTaWJsaW5nfXJldHVybltdfSxmb2N1c2FibGVDaGlsZHJlbih0KXtjb25zdCBlPVtcImFcIixcImJ1dHRvblwiLFwiaW5wdXRcIixcInRleHRhcmVhXCIsXCJzZWxlY3RcIixcImRldGFpbHNcIixcIlt0YWJpbmRleF1cIiwnW2NvbnRlbnRlZGl0YWJsZT1cInRydWVcIl0nXS5tYXAoKHQ9PmAke3R9Om5vdChbdGFiaW5kZXhePVwiLVwiXSlgKSkuam9pbihcIixcIik7cmV0dXJuIHRoaXMuZmluZChlLHQpLmZpbHRlcigodD0+IWwodCkmJmEodCkpKX0sZ2V0U2VsZWN0b3JGcm9tRWxlbWVudCh0KXtjb25zdCBlPUIodCk7cmV0dXJuIGUmJnouZmluZE9uZShlKT9lOm51bGx9LGdldEVsZW1lbnRGcm9tU2VsZWN0b3IodCl7Y29uc3QgZT1CKHQpO3JldHVybiBlP3ouZmluZE9uZShlKTpudWxsfSxnZXRNdWx0aXBsZUVsZW1lbnRzRnJvbVNlbGVjdG9yKHQpe2NvbnN0IGU9Qih0KTtyZXR1cm4gZT96LmZpbmQoZSk6W119fSxSPSh0LGU9XCJoaWRlXCIpPT57Y29uc3QgaT1gY2xpY2suZGlzbWlzcyR7dC5FVkVOVF9LRVl9YCxuPXQuTkFNRTtOLm9uKGRvY3VtZW50LGksYFtkYXRhLWJzLWRpc21pc3M9XCIke259XCJdYCwoZnVuY3Rpb24oaSl7aWYoW1wiQVwiLFwiQVJFQVwiXS5pbmNsdWRlcyh0aGlzLnRhZ05hbWUpJiZpLnByZXZlbnREZWZhdWx0KCksbCh0aGlzKSlyZXR1cm47Y29uc3Qgcz16LmdldEVsZW1lbnRGcm9tU2VsZWN0b3IodGhpcyl8fHRoaXMuY2xvc2VzdChgLiR7bn1gKTt0LmdldE9yQ3JlYXRlSW5zdGFuY2UocylbZV0oKX0pKX0scT1cIi5icy5hbGVydFwiLFY9YGNsb3NlJHtxfWAsSz1gY2xvc2VkJHtxfWA7Y2xhc3MgUSBleHRlbmRzIFd7c3RhdGljIGdldCBOQU1FKCl7cmV0dXJuXCJhbGVydFwifWNsb3NlKCl7aWYoTi50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsVikuZGVmYXVsdFByZXZlbnRlZClyZXR1cm47dGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtjb25zdCB0PXRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZmFkZVwiKTt0aGlzLl9xdWV1ZUNhbGxiYWNrKCgoKT0+dGhpcy5fZGVzdHJveUVsZW1lbnQoKSksdGhpcy5fZWxlbWVudCx0KX1fZGVzdHJveUVsZW1lbnQoKXt0aGlzLl9lbGVtZW50LnJlbW92ZSgpLE4udHJpZ2dlcih0aGlzLl9lbGVtZW50LEspLHRoaXMuZGlzcG9zZSgpfXN0YXRpYyBqUXVlcnlJbnRlcmZhY2UodCl7cmV0dXJuIHRoaXMuZWFjaCgoZnVuY3Rpb24oKXtjb25zdCBlPVEuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzKTtpZihcInN0cmluZ1wiPT10eXBlb2YgdCl7aWYodm9pZCAwPT09ZVt0XXx8dC5zdGFydHNXaXRoKFwiX1wiKXx8XCJjb25zdHJ1Y3RvclwiPT09dCl0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke3R9XCJgKTtlW3RdKHRoaXMpfX0pKX19UihRLFwiY2xvc2VcIiksbShRKTtjb25zdCBYPSdbZGF0YS1icy10b2dnbGU9XCJidXR0b25cIl0nO2NsYXNzIFkgZXh0ZW5kcyBXe3N0YXRpYyBnZXQgTkFNRSgpe3JldHVyblwiYnV0dG9uXCJ9dG9nZ2xlKCl7dGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJhcmlhLXByZXNzZWRcIix0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIikpfXN0YXRpYyBqUXVlcnlJbnRlcmZhY2UodCl7cmV0dXJuIHRoaXMuZWFjaCgoZnVuY3Rpb24oKXtjb25zdCBlPVkuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzKTtcInRvZ2dsZVwiPT09dCYmZVt0XSgpfSkpfX1OLm9uKGRvY3VtZW50LFwiY2xpY2suYnMuYnV0dG9uLmRhdGEtYXBpXCIsWCwodD0+e3QucHJldmVudERlZmF1bHQoKTtjb25zdCBlPXQudGFyZ2V0LmNsb3Nlc3QoWCk7WS5nZXRPckNyZWF0ZUluc3RhbmNlKGUpLnRvZ2dsZSgpfSkpLG0oWSk7Y29uc3QgVT1cIi5icy5zd2lwZVwiLEc9YHRvdWNoc3RhcnQke1V9YCxKPWB0b3VjaG1vdmUke1V9YCxaPWB0b3VjaGVuZCR7VX1gLHR0PWBwb2ludGVyZG93biR7VX1gLGV0PWBwb2ludGVydXAke1V9YCxpdD17ZW5kQ2FsbGJhY2s6bnVsbCxsZWZ0Q2FsbGJhY2s6bnVsbCxyaWdodENhbGxiYWNrOm51bGx9LG50PXtlbmRDYWxsYmFjazpcIihmdW5jdGlvbnxudWxsKVwiLGxlZnRDYWxsYmFjazpcIihmdW5jdGlvbnxudWxsKVwiLHJpZ2h0Q2FsbGJhY2s6XCIoZnVuY3Rpb258bnVsbClcIn07Y2xhc3Mgc3QgZXh0ZW5kcyBIe2NvbnN0cnVjdG9yKHQsZSl7c3VwZXIoKSx0aGlzLl9lbGVtZW50PXQsdCYmc3QuaXNTdXBwb3J0ZWQoKSYmKHRoaXMuX2NvbmZpZz10aGlzLl9nZXRDb25maWcoZSksdGhpcy5fZGVsdGFYPTAsdGhpcy5fc3VwcG9ydFBvaW50ZXJFdmVudHM9Qm9vbGVhbih3aW5kb3cuUG9pbnRlckV2ZW50KSx0aGlzLl9pbml0RXZlbnRzKCkpfXN0YXRpYyBnZXQgRGVmYXVsdCgpe3JldHVybiBpdH1zdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCl7cmV0dXJuIG50fXN0YXRpYyBnZXQgTkFNRSgpe3JldHVyblwic3dpcGVcIn1kaXNwb3NlKCl7Ti5vZmYodGhpcy5fZWxlbWVudCxVKX1fc3RhcnQodCl7dGhpcy5fc3VwcG9ydFBvaW50ZXJFdmVudHM/dGhpcy5fZXZlbnRJc1BvaW50ZXJQZW5Ub3VjaCh0KSYmKHRoaXMuX2RlbHRhWD10LmNsaWVudFgpOnRoaXMuX2RlbHRhWD10LnRvdWNoZXNbMF0uY2xpZW50WH1fZW5kKHQpe3RoaXMuX2V2ZW50SXNQb2ludGVyUGVuVG91Y2godCkmJih0aGlzLl9kZWx0YVg9dC5jbGllbnRYLXRoaXMuX2RlbHRhWCksdGhpcy5faGFuZGxlU3dpcGUoKSxnKHRoaXMuX2NvbmZpZy5lbmRDYWxsYmFjayl9X21vdmUodCl7dGhpcy5fZGVsdGFYPXQudG91Y2hlcyYmdC50b3VjaGVzLmxlbmd0aD4xPzA6dC50b3VjaGVzWzBdLmNsaWVudFgtdGhpcy5fZGVsdGFYfV9oYW5kbGVTd2lwZSgpe2NvbnN0IHQ9TWF0aC5hYnModGhpcy5fZGVsdGFYKTtpZih0PD00MClyZXR1cm47Y29uc3QgZT10L3RoaXMuX2RlbHRhWDt0aGlzLl9kZWx0YVg9MCxlJiZnKGU+MD90aGlzLl9jb25maWcucmlnaHRDYWxsYmFjazp0aGlzLl9jb25maWcubGVmdENhbGxiYWNrKX1faW5pdEV2ZW50cygpe3RoaXMuX3N1cHBvcnRQb2ludGVyRXZlbnRzPyhOLm9uKHRoaXMuX2VsZW1lbnQsdHQsKHQ9PnRoaXMuX3N0YXJ0KHQpKSksTi5vbih0aGlzLl9lbGVtZW50LGV0LCh0PT50aGlzLl9lbmQodCkpKSx0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJwb2ludGVyLWV2ZW50XCIpKTooTi5vbih0aGlzLl9lbGVtZW50LEcsKHQ9PnRoaXMuX3N0YXJ0KHQpKSksTi5vbih0aGlzLl9lbGVtZW50LEosKHQ9PnRoaXMuX21vdmUodCkpKSxOLm9uKHRoaXMuX2VsZW1lbnQsWiwodD0+dGhpcy5fZW5kKHQpKSkpfV9ldmVudElzUG9pbnRlclBlblRvdWNoKHQpe3JldHVybiB0aGlzLl9zdXBwb3J0UG9pbnRlckV2ZW50cyYmKFwicGVuXCI9PT10LnBvaW50ZXJUeXBlfHxcInRvdWNoXCI9PT10LnBvaW50ZXJUeXBlKX1zdGF0aWMgaXNTdXBwb3J0ZWQoKXtyZXR1cm5cIm9udG91Y2hzdGFydFwiaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50fHxuYXZpZ2F0b3IubWF4VG91Y2hQb2ludHM+MH19Y29uc3Qgb3Q9XCIuYnMuY2Fyb3VzZWxcIixydD1cIi5kYXRhLWFwaVwiLGF0PVwiQXJyb3dMZWZ0XCIsbHQ9XCJBcnJvd1JpZ2h0XCIsY3Q9XCJuZXh0XCIsaHQ9XCJwcmV2XCIsZHQ9XCJsZWZ0XCIsdXQ9XCJyaWdodFwiLGZ0PWBzbGlkZSR7b3R9YCxwdD1gc2xpZCR7b3R9YCxtdD1ga2V5ZG93biR7b3R9YCxndD1gbW91c2VlbnRlciR7b3R9YCxfdD1gbW91c2VsZWF2ZSR7b3R9YCxidD1gZHJhZ3N0YXJ0JHtvdH1gLHZ0PWBsb2FkJHtvdH0ke3J0fWAseXQ9YGNsaWNrJHtvdH0ke3J0fWAsd3Q9XCJjYXJvdXNlbFwiLEF0PVwiYWN0aXZlXCIsRXQ9XCIuYWN0aXZlXCIsVHQ9XCIuY2Fyb3VzZWwtaXRlbVwiLEN0PUV0K1R0LE90PXtbYXRdOnV0LFtsdF06ZHR9LHh0PXtpbnRlcnZhbDo1ZTMsa2V5Ym9hcmQ6ITAscGF1c2U6XCJob3ZlclwiLHJpZGU6ITEsdG91Y2g6ITAsd3JhcDohMH0sa3Q9e2ludGVydmFsOlwiKG51bWJlcnxib29sZWFuKVwiLGtleWJvYXJkOlwiYm9vbGVhblwiLHBhdXNlOlwiKHN0cmluZ3xib29sZWFuKVwiLHJpZGU6XCIoYm9vbGVhbnxzdHJpbmcpXCIsdG91Y2g6XCJib29sZWFuXCIsd3JhcDpcImJvb2xlYW5cIn07Y2xhc3MgTHQgZXh0ZW5kcyBXe2NvbnN0cnVjdG9yKHQsZSl7c3VwZXIodCxlKSx0aGlzLl9pbnRlcnZhbD1udWxsLHRoaXMuX2FjdGl2ZUVsZW1lbnQ9bnVsbCx0aGlzLl9pc1NsaWRpbmc9ITEsdGhpcy50b3VjaFRpbWVvdXQ9bnVsbCx0aGlzLl9zd2lwZUhlbHBlcj1udWxsLHRoaXMuX2luZGljYXRvcnNFbGVtZW50PXouZmluZE9uZShcIi5jYXJvdXNlbC1pbmRpY2F0b3JzXCIsdGhpcy5fZWxlbWVudCksdGhpcy5fYWRkRXZlbnRMaXN0ZW5lcnMoKSx0aGlzLl9jb25maWcucmlkZT09PXd0JiZ0aGlzLmN5Y2xlKCl9c3RhdGljIGdldCBEZWZhdWx0KCl7cmV0dXJuIHh0fXN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKXtyZXR1cm4ga3R9c3RhdGljIGdldCBOQU1FKCl7cmV0dXJuXCJjYXJvdXNlbFwifW5leHQoKXt0aGlzLl9zbGlkZShjdCl9bmV4dFdoZW5WaXNpYmxlKCl7IWRvY3VtZW50LmhpZGRlbiYmYSh0aGlzLl9lbGVtZW50KSYmdGhpcy5uZXh0KCl9cHJldigpe3RoaXMuX3NsaWRlKGh0KX1wYXVzZSgpe3RoaXMuX2lzU2xpZGluZyYmcyh0aGlzLl9lbGVtZW50KSx0aGlzLl9jbGVhckludGVydmFsKCl9Y3ljbGUoKXt0aGlzLl9jbGVhckludGVydmFsKCksdGhpcy5fdXBkYXRlSW50ZXJ2YWwoKSx0aGlzLl9pbnRlcnZhbD1zZXRJbnRlcnZhbCgoKCk9PnRoaXMubmV4dFdoZW5WaXNpYmxlKCkpLHRoaXMuX2NvbmZpZy5pbnRlcnZhbCl9X21heWJlRW5hYmxlQ3ljbGUoKXt0aGlzLl9jb25maWcucmlkZSYmKHRoaXMuX2lzU2xpZGluZz9OLm9uZSh0aGlzLl9lbGVtZW50LHB0LCgoKT0+dGhpcy5jeWNsZSgpKSk6dGhpcy5jeWNsZSgpKX10byh0KXtjb25zdCBlPXRoaXMuX2dldEl0ZW1zKCk7aWYodD5lLmxlbmd0aC0xfHx0PDApcmV0dXJuO2lmKHRoaXMuX2lzU2xpZGluZylyZXR1cm4gdm9pZCBOLm9uZSh0aGlzLl9lbGVtZW50LHB0LCgoKT0+dGhpcy50byh0KSkpO2NvbnN0IGk9dGhpcy5fZ2V0SXRlbUluZGV4KHRoaXMuX2dldEFjdGl2ZSgpKTtpZihpPT09dClyZXR1cm47Y29uc3Qgbj10Pmk/Y3Q6aHQ7dGhpcy5fc2xpZGUobixlW3RdKX1kaXNwb3NlKCl7dGhpcy5fc3dpcGVIZWxwZXImJnRoaXMuX3N3aXBlSGVscGVyLmRpc3Bvc2UoKSxzdXBlci5kaXNwb3NlKCl9X2NvbmZpZ0FmdGVyTWVyZ2UodCl7cmV0dXJuIHQuZGVmYXVsdEludGVydmFsPXQuaW50ZXJ2YWwsdH1fYWRkRXZlbnRMaXN0ZW5lcnMoKXt0aGlzLl9jb25maWcua2V5Ym9hcmQmJk4ub24odGhpcy5fZWxlbWVudCxtdCwodD0+dGhpcy5fa2V5ZG93bih0KSkpLFwiaG92ZXJcIj09PXRoaXMuX2NvbmZpZy5wYXVzZSYmKE4ub24odGhpcy5fZWxlbWVudCxndCwoKCk9PnRoaXMucGF1c2UoKSkpLE4ub24odGhpcy5fZWxlbWVudCxfdCwoKCk9PnRoaXMuX21heWJlRW5hYmxlQ3ljbGUoKSkpKSx0aGlzLl9jb25maWcudG91Y2gmJnN0LmlzU3VwcG9ydGVkKCkmJnRoaXMuX2FkZFRvdWNoRXZlbnRMaXN0ZW5lcnMoKX1fYWRkVG91Y2hFdmVudExpc3RlbmVycygpe2Zvcihjb25zdCB0IG9mIHouZmluZChcIi5jYXJvdXNlbC1pdGVtIGltZ1wiLHRoaXMuX2VsZW1lbnQpKU4ub24odCxidCwodD0+dC5wcmV2ZW50RGVmYXVsdCgpKSk7Y29uc3QgdD17bGVmdENhbGxiYWNrOigpPT50aGlzLl9zbGlkZSh0aGlzLl9kaXJlY3Rpb25Ub09yZGVyKGR0KSkscmlnaHRDYWxsYmFjazooKT0+dGhpcy5fc2xpZGUodGhpcy5fZGlyZWN0aW9uVG9PcmRlcih1dCkpLGVuZENhbGxiYWNrOigpPT57XCJob3ZlclwiPT09dGhpcy5fY29uZmlnLnBhdXNlJiYodGhpcy5wYXVzZSgpLHRoaXMudG91Y2hUaW1lb3V0JiZjbGVhclRpbWVvdXQodGhpcy50b3VjaFRpbWVvdXQpLHRoaXMudG91Y2hUaW1lb3V0PXNldFRpbWVvdXQoKCgpPT50aGlzLl9tYXliZUVuYWJsZUN5Y2xlKCkpLDUwMCt0aGlzLl9jb25maWcuaW50ZXJ2YWwpKX19O3RoaXMuX3N3aXBlSGVscGVyPW5ldyBzdCh0aGlzLl9lbGVtZW50LHQpfV9rZXlkb3duKHQpe2lmKC9pbnB1dHx0ZXh0YXJlYS9pLnRlc3QodC50YXJnZXQudGFnTmFtZSkpcmV0dXJuO2NvbnN0IGU9T3RbdC5rZXldO2UmJih0LnByZXZlbnREZWZhdWx0KCksdGhpcy5fc2xpZGUodGhpcy5fZGlyZWN0aW9uVG9PcmRlcihlKSkpfV9nZXRJdGVtSW5kZXgodCl7cmV0dXJuIHRoaXMuX2dldEl0ZW1zKCkuaW5kZXhPZih0KX1fc2V0QWN0aXZlSW5kaWNhdG9yRWxlbWVudCh0KXtpZighdGhpcy5faW5kaWNhdG9yc0VsZW1lbnQpcmV0dXJuO2NvbnN0IGU9ei5maW5kT25lKEV0LHRoaXMuX2luZGljYXRvcnNFbGVtZW50KTtlLmNsYXNzTGlzdC5yZW1vdmUoQXQpLGUucmVtb3ZlQXR0cmlidXRlKFwiYXJpYS1jdXJyZW50XCIpO2NvbnN0IGk9ei5maW5kT25lKGBbZGF0YS1icy1zbGlkZS10bz1cIiR7dH1cIl1gLHRoaXMuX2luZGljYXRvcnNFbGVtZW50KTtpJiYoaS5jbGFzc0xpc3QuYWRkKEF0KSxpLnNldEF0dHJpYnV0ZShcImFyaWEtY3VycmVudFwiLFwidHJ1ZVwiKSl9X3VwZGF0ZUludGVydmFsKCl7Y29uc3QgdD10aGlzLl9hY3RpdmVFbGVtZW50fHx0aGlzLl9nZXRBY3RpdmUoKTtpZighdClyZXR1cm47Y29uc3QgZT1OdW1iZXIucGFyc2VJbnQodC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWJzLWludGVydmFsXCIpLDEwKTt0aGlzLl9jb25maWcuaW50ZXJ2YWw9ZXx8dGhpcy5fY29uZmlnLmRlZmF1bHRJbnRlcnZhbH1fc2xpZGUodCxlPW51bGwpe2lmKHRoaXMuX2lzU2xpZGluZylyZXR1cm47Y29uc3QgaT10aGlzLl9nZXRBY3RpdmUoKSxuPXQ9PT1jdCxzPWV8fGIodGhpcy5fZ2V0SXRlbXMoKSxpLG4sdGhpcy5fY29uZmlnLndyYXApO2lmKHM9PT1pKXJldHVybjtjb25zdCBvPXRoaXMuX2dldEl0ZW1JbmRleChzKSxyPWU9Pk4udHJpZ2dlcih0aGlzLl9lbGVtZW50LGUse3JlbGF0ZWRUYXJnZXQ6cyxkaXJlY3Rpb246dGhpcy5fb3JkZXJUb0RpcmVjdGlvbih0KSxmcm9tOnRoaXMuX2dldEl0ZW1JbmRleChpKSx0bzpvfSk7aWYocihmdCkuZGVmYXVsdFByZXZlbnRlZClyZXR1cm47aWYoIWl8fCFzKXJldHVybjtjb25zdCBhPUJvb2xlYW4odGhpcy5faW50ZXJ2YWwpO3RoaXMucGF1c2UoKSx0aGlzLl9pc1NsaWRpbmc9ITAsdGhpcy5fc2V0QWN0aXZlSW5kaWNhdG9yRWxlbWVudChvKSx0aGlzLl9hY3RpdmVFbGVtZW50PXM7Y29uc3QgbD1uP1wiY2Fyb3VzZWwtaXRlbS1zdGFydFwiOlwiY2Fyb3VzZWwtaXRlbS1lbmRcIixjPW4/XCJjYXJvdXNlbC1pdGVtLW5leHRcIjpcImNhcm91c2VsLWl0ZW0tcHJldlwiO3MuY2xhc3NMaXN0LmFkZChjKSxkKHMpLGkuY2xhc3NMaXN0LmFkZChsKSxzLmNsYXNzTGlzdC5hZGQobCksdGhpcy5fcXVldWVDYWxsYmFjaygoKCk9PntzLmNsYXNzTGlzdC5yZW1vdmUobCxjKSxzLmNsYXNzTGlzdC5hZGQoQXQpLGkuY2xhc3NMaXN0LnJlbW92ZShBdCxjLGwpLHRoaXMuX2lzU2xpZGluZz0hMSxyKHB0KX0pLGksdGhpcy5faXNBbmltYXRlZCgpKSxhJiZ0aGlzLmN5Y2xlKCl9X2lzQW5pbWF0ZWQoKXtyZXR1cm4gdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJzbGlkZVwiKX1fZ2V0QWN0aXZlKCl7cmV0dXJuIHouZmluZE9uZShDdCx0aGlzLl9lbGVtZW50KX1fZ2V0SXRlbXMoKXtyZXR1cm4gei5maW5kKFR0LHRoaXMuX2VsZW1lbnQpfV9jbGVhckludGVydmFsKCl7dGhpcy5faW50ZXJ2YWwmJihjbGVhckludGVydmFsKHRoaXMuX2ludGVydmFsKSx0aGlzLl9pbnRlcnZhbD1udWxsKX1fZGlyZWN0aW9uVG9PcmRlcih0KXtyZXR1cm4gcCgpP3Q9PT1kdD9odDpjdDp0PT09ZHQ/Y3Q6aHR9X29yZGVyVG9EaXJlY3Rpb24odCl7cmV0dXJuIHAoKT90PT09aHQ/ZHQ6dXQ6dD09PWh0P3V0OmR0fXN0YXRpYyBqUXVlcnlJbnRlcmZhY2UodCl7cmV0dXJuIHRoaXMuZWFjaCgoZnVuY3Rpb24oKXtjb25zdCBlPUx0LmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcyx0KTtpZihcIm51bWJlclwiIT10eXBlb2YgdCl7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQpe2lmKHZvaWQgMD09PWVbdF18fHQuc3RhcnRzV2l0aChcIl9cIil8fFwiY29uc3RydWN0b3JcIj09PXQpdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHt0fVwiYCk7ZVt0XSgpfX1lbHNlIGUudG8odCl9KSl9fU4ub24oZG9jdW1lbnQseXQsXCJbZGF0YS1icy1zbGlkZV0sIFtkYXRhLWJzLXNsaWRlLXRvXVwiLChmdW5jdGlvbih0KXtjb25zdCBlPXouZ2V0RWxlbWVudEZyb21TZWxlY3Rvcih0aGlzKTtpZighZXx8IWUuY2xhc3NMaXN0LmNvbnRhaW5zKHd0KSlyZXR1cm47dC5wcmV2ZW50RGVmYXVsdCgpO2NvbnN0IGk9THQuZ2V0T3JDcmVhdGVJbnN0YW5jZShlKSxuPXRoaXMuZ2V0QXR0cmlidXRlKFwiZGF0YS1icy1zbGlkZS10b1wiKTtyZXR1cm4gbj8oaS50byhuKSx2b2lkIGkuX21heWJlRW5hYmxlQ3ljbGUoKSk6XCJuZXh0XCI9PT1GLmdldERhdGFBdHRyaWJ1dGUodGhpcyxcInNsaWRlXCIpPyhpLm5leHQoKSx2b2lkIGkuX21heWJlRW5hYmxlQ3ljbGUoKSk6KGkucHJldigpLHZvaWQgaS5fbWF5YmVFbmFibGVDeWNsZSgpKX0pKSxOLm9uKHdpbmRvdyx2dCwoKCk9Pntjb25zdCB0PXouZmluZCgnW2RhdGEtYnMtcmlkZT1cImNhcm91c2VsXCJdJyk7Zm9yKGNvbnN0IGUgb2YgdClMdC5nZXRPckNyZWF0ZUluc3RhbmNlKGUpfSkpLG0oTHQpO2NvbnN0IFN0PVwiLmJzLmNvbGxhcHNlXCIsRHQ9YHNob3cke1N0fWAsJHQ9YHNob3duJHtTdH1gLEl0PWBoaWRlJHtTdH1gLE50PWBoaWRkZW4ke1N0fWAsUHQ9YGNsaWNrJHtTdH0uZGF0YS1hcGlgLGp0PVwic2hvd1wiLE10PVwiY29sbGFwc2VcIixGdD1cImNvbGxhcHNpbmdcIixIdD1gOnNjb3BlIC4ke010fSAuJHtNdH1gLFd0PSdbZGF0YS1icy10b2dnbGU9XCJjb2xsYXBzZVwiXScsQnQ9e3BhcmVudDpudWxsLHRvZ2dsZTohMH0senQ9e3BhcmVudDpcIihudWxsfGVsZW1lbnQpXCIsdG9nZ2xlOlwiYm9vbGVhblwifTtjbGFzcyBSdCBleHRlbmRzIFd7Y29uc3RydWN0b3IodCxlKXtzdXBlcih0LGUpLHRoaXMuX2lzVHJhbnNpdGlvbmluZz0hMSx0aGlzLl90cmlnZ2VyQXJyYXk9W107Y29uc3QgaT16LmZpbmQoV3QpO2Zvcihjb25zdCB0IG9mIGkpe2NvbnN0IGU9ei5nZXRTZWxlY3RvckZyb21FbGVtZW50KHQpLGk9ei5maW5kKGUpLmZpbHRlcigodD0+dD09PXRoaXMuX2VsZW1lbnQpKTtudWxsIT09ZSYmaS5sZW5ndGgmJnRoaXMuX3RyaWdnZXJBcnJheS5wdXNoKHQpfXRoaXMuX2luaXRpYWxpemVDaGlsZHJlbigpLHRoaXMuX2NvbmZpZy5wYXJlbnR8fHRoaXMuX2FkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyh0aGlzLl90cmlnZ2VyQXJyYXksdGhpcy5faXNTaG93bigpKSx0aGlzLl9jb25maWcudG9nZ2xlJiZ0aGlzLnRvZ2dsZSgpfXN0YXRpYyBnZXQgRGVmYXVsdCgpe3JldHVybiBCdH1zdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCl7cmV0dXJuIHp0fXN0YXRpYyBnZXQgTkFNRSgpe3JldHVyblwiY29sbGFwc2VcIn10b2dnbGUoKXt0aGlzLl9pc1Nob3duKCk/dGhpcy5oaWRlKCk6dGhpcy5zaG93KCl9c2hvdygpe2lmKHRoaXMuX2lzVHJhbnNpdGlvbmluZ3x8dGhpcy5faXNTaG93bigpKXJldHVybjtsZXQgdD1bXTtpZih0aGlzLl9jb25maWcucGFyZW50JiYodD10aGlzLl9nZXRGaXJzdExldmVsQ2hpbGRyZW4oXCIuY29sbGFwc2Uuc2hvdywgLmNvbGxhcHNlLmNvbGxhcHNpbmdcIikuZmlsdGVyKCh0PT50IT09dGhpcy5fZWxlbWVudCkpLm1hcCgodD0+UnQuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0LHt0b2dnbGU6ITF9KSkpKSx0Lmxlbmd0aCYmdFswXS5faXNUcmFuc2l0aW9uaW5nKXJldHVybjtpZihOLnRyaWdnZXIodGhpcy5fZWxlbWVudCxEdCkuZGVmYXVsdFByZXZlbnRlZClyZXR1cm47Zm9yKGNvbnN0IGUgb2YgdCllLmhpZGUoKTtjb25zdCBlPXRoaXMuX2dldERpbWVuc2lvbigpO3RoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShNdCksdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKEZ0KSx0aGlzLl9lbGVtZW50LnN0eWxlW2VdPTAsdGhpcy5fYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKHRoaXMuX3RyaWdnZXJBcnJheSwhMCksdGhpcy5faXNUcmFuc2l0aW9uaW5nPSEwO2NvbnN0IGk9YHNjcm9sbCR7ZVswXS50b1VwcGVyQ2FzZSgpK2Uuc2xpY2UoMSl9YDt0aGlzLl9xdWV1ZUNhbGxiYWNrKCgoKT0+e3RoaXMuX2lzVHJhbnNpdGlvbmluZz0hMSx0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoRnQpLHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChNdCxqdCksdGhpcy5fZWxlbWVudC5zdHlsZVtlXT1cIlwiLE4udHJpZ2dlcih0aGlzLl9lbGVtZW50LCR0KX0pLHRoaXMuX2VsZW1lbnQsITApLHRoaXMuX2VsZW1lbnQuc3R5bGVbZV09YCR7dGhpcy5fZWxlbWVudFtpXX1weGB9aGlkZSgpe2lmKHRoaXMuX2lzVHJhbnNpdGlvbmluZ3x8IXRoaXMuX2lzU2hvd24oKSlyZXR1cm47aWYoTi50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsSXQpLmRlZmF1bHRQcmV2ZW50ZWQpcmV0dXJuO2NvbnN0IHQ9dGhpcy5fZ2V0RGltZW5zaW9uKCk7dGhpcy5fZWxlbWVudC5zdHlsZVt0XT1gJHt0aGlzLl9lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpW3RdfXB4YCxkKHRoaXMuX2VsZW1lbnQpLHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChGdCksdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKE10LGp0KTtmb3IoY29uc3QgdCBvZiB0aGlzLl90cmlnZ2VyQXJyYXkpe2NvbnN0IGU9ei5nZXRFbGVtZW50RnJvbVNlbGVjdG9yKHQpO2UmJiF0aGlzLl9pc1Nob3duKGUpJiZ0aGlzLl9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3MoW3RdLCExKX10aGlzLl9pc1RyYW5zaXRpb25pbmc9ITAsdGhpcy5fZWxlbWVudC5zdHlsZVt0XT1cIlwiLHRoaXMuX3F1ZXVlQ2FsbGJhY2soKCgpPT57dGhpcy5faXNUcmFuc2l0aW9uaW5nPSExLHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShGdCksdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKE10KSxOLnRyaWdnZXIodGhpcy5fZWxlbWVudCxOdCl9KSx0aGlzLl9lbGVtZW50LCEwKX1faXNTaG93bih0PXRoaXMuX2VsZW1lbnQpe3JldHVybiB0LmNsYXNzTGlzdC5jb250YWlucyhqdCl9X2NvbmZpZ0FmdGVyTWVyZ2UodCl7cmV0dXJuIHQudG9nZ2xlPUJvb2xlYW4odC50b2dnbGUpLHQucGFyZW50PXIodC5wYXJlbnQpLHR9X2dldERpbWVuc2lvbigpe3JldHVybiB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImNvbGxhcHNlLWhvcml6b250YWxcIik/XCJ3aWR0aFwiOlwiaGVpZ2h0XCJ9X2luaXRpYWxpemVDaGlsZHJlbigpe2lmKCF0aGlzLl9jb25maWcucGFyZW50KXJldHVybjtjb25zdCB0PXRoaXMuX2dldEZpcnN0TGV2ZWxDaGlsZHJlbihXdCk7Zm9yKGNvbnN0IGUgb2YgdCl7Y29uc3QgdD16LmdldEVsZW1lbnRGcm9tU2VsZWN0b3IoZSk7dCYmdGhpcy5fYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKFtlXSx0aGlzLl9pc1Nob3duKHQpKX19X2dldEZpcnN0TGV2ZWxDaGlsZHJlbih0KXtjb25zdCBlPXouZmluZChIdCx0aGlzLl9jb25maWcucGFyZW50KTtyZXR1cm4gei5maW5kKHQsdGhpcy5fY29uZmlnLnBhcmVudCkuZmlsdGVyKCh0PT4hZS5pbmNsdWRlcyh0KSkpfV9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3ModCxlKXtpZih0Lmxlbmd0aClmb3IoY29uc3QgaSBvZiB0KWkuY2xhc3NMaXN0LnRvZ2dsZShcImNvbGxhcHNlZFwiLCFlKSxpLnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIixlKX1zdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKHQpe2NvbnN0IGU9e307cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIHQmJi9zaG93fGhpZGUvLnRlc3QodCkmJihlLnRvZ2dsZT0hMSksdGhpcy5lYWNoKChmdW5jdGlvbigpe2NvbnN0IGk9UnQuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzLGUpO2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0KXtpZih2b2lkIDA9PT1pW3RdKXRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7dH1cImApO2lbdF0oKX19KSl9fU4ub24oZG9jdW1lbnQsUHQsV3QsKGZ1bmN0aW9uKHQpeyhcIkFcIj09PXQudGFyZ2V0LnRhZ05hbWV8fHQuZGVsZWdhdGVUYXJnZXQmJlwiQVwiPT09dC5kZWxlZ2F0ZVRhcmdldC50YWdOYW1lKSYmdC5wcmV2ZW50RGVmYXVsdCgpO2Zvcihjb25zdCB0IG9mIHouZ2V0TXVsdGlwbGVFbGVtZW50c0Zyb21TZWxlY3Rvcih0aGlzKSlSdC5nZXRPckNyZWF0ZUluc3RhbmNlKHQse3RvZ2dsZTohMX0pLnRvZ2dsZSgpfSkpLG0oUnQpO3ZhciBxdD1cInRvcFwiLFZ0PVwiYm90dG9tXCIsS3Q9XCJyaWdodFwiLFF0PVwibGVmdFwiLFh0PVwiYXV0b1wiLFl0PVtxdCxWdCxLdCxRdF0sVXQ9XCJzdGFydFwiLEd0PVwiZW5kXCIsSnQ9XCJjbGlwcGluZ1BhcmVudHNcIixadD1cInZpZXdwb3J0XCIsdGU9XCJwb3BwZXJcIixlZT1cInJlZmVyZW5jZVwiLGllPVl0LnJlZHVjZSgoZnVuY3Rpb24odCxlKXtyZXR1cm4gdC5jb25jYXQoW2UrXCItXCIrVXQsZStcIi1cIitHdF0pfSksW10pLG5lPVtdLmNvbmNhdChZdCxbWHRdKS5yZWR1Y2UoKGZ1bmN0aW9uKHQsZSl7cmV0dXJuIHQuY29uY2F0KFtlLGUrXCItXCIrVXQsZStcIi1cIitHdF0pfSksW10pLHNlPVwiYmVmb3JlUmVhZFwiLG9lPVwicmVhZFwiLHJlPVwiYWZ0ZXJSZWFkXCIsYWU9XCJiZWZvcmVNYWluXCIsbGU9XCJtYWluXCIsY2U9XCJhZnRlck1haW5cIixoZT1cImJlZm9yZVdyaXRlXCIsZGU9XCJ3cml0ZVwiLHVlPVwiYWZ0ZXJXcml0ZVwiLGZlPVtzZSxvZSxyZSxhZSxsZSxjZSxoZSxkZSx1ZV07ZnVuY3Rpb24gcGUodCl7cmV0dXJuIHQ/KHQubm9kZU5hbWV8fFwiXCIpLnRvTG93ZXJDYXNlKCk6bnVsbH1mdW5jdGlvbiBtZSh0KXtpZihudWxsPT10KXJldHVybiB3aW5kb3c7aWYoXCJbb2JqZWN0IFdpbmRvd11cIiE9PXQudG9TdHJpbmcoKSl7dmFyIGU9dC5vd25lckRvY3VtZW50O3JldHVybiBlJiZlLmRlZmF1bHRWaWV3fHx3aW5kb3d9cmV0dXJuIHR9ZnVuY3Rpb24gZ2UodCl7cmV0dXJuIHQgaW5zdGFuY2VvZiBtZSh0KS5FbGVtZW50fHx0IGluc3RhbmNlb2YgRWxlbWVudH1mdW5jdGlvbiBfZSh0KXtyZXR1cm4gdCBpbnN0YW5jZW9mIG1lKHQpLkhUTUxFbGVtZW50fHx0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnR9ZnVuY3Rpb24gYmUodCl7cmV0dXJuXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFNoYWRvd1Jvb3QmJih0IGluc3RhbmNlb2YgbWUodCkuU2hhZG93Um9vdHx8dCBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QpfWNvbnN0IHZlPXtuYW1lOlwiYXBwbHlTdHlsZXNcIixlbmFibGVkOiEwLHBoYXNlOlwid3JpdGVcIixmbjpmdW5jdGlvbih0KXt2YXIgZT10LnN0YXRlO09iamVjdC5rZXlzKGUuZWxlbWVudHMpLmZvckVhY2goKGZ1bmN0aW9uKHQpe3ZhciBpPWUuc3R5bGVzW3RdfHx7fSxuPWUuYXR0cmlidXRlc1t0XXx8e30scz1lLmVsZW1lbnRzW3RdO19lKHMpJiZwZShzKSYmKE9iamVjdC5hc3NpZ24ocy5zdHlsZSxpKSxPYmplY3Qua2V5cyhuKS5mb3JFYWNoKChmdW5jdGlvbih0KXt2YXIgZT1uW3RdOyExPT09ZT9zLnJlbW92ZUF0dHJpYnV0ZSh0KTpzLnNldEF0dHJpYnV0ZSh0LCEwPT09ZT9cIlwiOmUpfSkpKX0pKX0sZWZmZWN0OmZ1bmN0aW9uKHQpe3ZhciBlPXQuc3RhdGUsaT17cG9wcGVyOntwb3NpdGlvbjplLm9wdGlvbnMuc3RyYXRlZ3ksbGVmdDpcIjBcIix0b3A6XCIwXCIsbWFyZ2luOlwiMFwifSxhcnJvdzp7cG9zaXRpb246XCJhYnNvbHV0ZVwifSxyZWZlcmVuY2U6e319O3JldHVybiBPYmplY3QuYXNzaWduKGUuZWxlbWVudHMucG9wcGVyLnN0eWxlLGkucG9wcGVyKSxlLnN0eWxlcz1pLGUuZWxlbWVudHMuYXJyb3cmJk9iamVjdC5hc3NpZ24oZS5lbGVtZW50cy5hcnJvdy5zdHlsZSxpLmFycm93KSxmdW5jdGlvbigpe09iamVjdC5rZXlzKGUuZWxlbWVudHMpLmZvckVhY2goKGZ1bmN0aW9uKHQpe3ZhciBuPWUuZWxlbWVudHNbdF0scz1lLmF0dHJpYnV0ZXNbdF18fHt9LG89T2JqZWN0LmtleXMoZS5zdHlsZXMuaGFzT3duUHJvcGVydHkodCk/ZS5zdHlsZXNbdF06aVt0XSkucmVkdWNlKChmdW5jdGlvbih0LGUpe3JldHVybiB0W2VdPVwiXCIsdH0pLHt9KTtfZShuKSYmcGUobikmJihPYmplY3QuYXNzaWduKG4uc3R5bGUsbyksT2JqZWN0LmtleXMocykuZm9yRWFjaCgoZnVuY3Rpb24odCl7bi5yZW1vdmVBdHRyaWJ1dGUodCl9KSkpfSkpfX0scmVxdWlyZXM6W1wiY29tcHV0ZVN0eWxlc1wiXX07ZnVuY3Rpb24geWUodCl7cmV0dXJuIHQuc3BsaXQoXCItXCIpWzBdfXZhciB3ZT1NYXRoLm1heCxBZT1NYXRoLm1pbixFZT1NYXRoLnJvdW5kO2Z1bmN0aW9uIFRlKCl7dmFyIHQ9bmF2aWdhdG9yLnVzZXJBZ2VudERhdGE7cmV0dXJuIG51bGwhPXQmJnQuYnJhbmRzJiZBcnJheS5pc0FycmF5KHQuYnJhbmRzKT90LmJyYW5kcy5tYXAoKGZ1bmN0aW9uKHQpe3JldHVybiB0LmJyYW5kK1wiL1wiK3QudmVyc2lvbn0pKS5qb2luKFwiIFwiKTpuYXZpZ2F0b3IudXNlckFnZW50fWZ1bmN0aW9uIENlKCl7cmV0dXJuIS9eKCg/IWNocm9tZXxhbmRyb2lkKS4pKnNhZmFyaS9pLnRlc3QoVGUoKSl9ZnVuY3Rpb24gT2UodCxlLGkpe3ZvaWQgMD09PWUmJihlPSExKSx2b2lkIDA9PT1pJiYoaT0hMSk7dmFyIG49dC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxzPTEsbz0xO2UmJl9lKHQpJiYocz10Lm9mZnNldFdpZHRoPjAmJkVlKG4ud2lkdGgpL3Qub2Zmc2V0V2lkdGh8fDEsbz10Lm9mZnNldEhlaWdodD4wJiZFZShuLmhlaWdodCkvdC5vZmZzZXRIZWlnaHR8fDEpO3ZhciByPShnZSh0KT9tZSh0KTp3aW5kb3cpLnZpc3VhbFZpZXdwb3J0LGE9IUNlKCkmJmksbD0obi5sZWZ0KyhhJiZyP3Iub2Zmc2V0TGVmdDowKSkvcyxjPShuLnRvcCsoYSYmcj9yLm9mZnNldFRvcDowKSkvbyxoPW4ud2lkdGgvcyxkPW4uaGVpZ2h0L287cmV0dXJue3dpZHRoOmgsaGVpZ2h0OmQsdG9wOmMscmlnaHQ6bCtoLGJvdHRvbTpjK2QsbGVmdDpsLHg6bCx5OmN9fWZ1bmN0aW9uIHhlKHQpe3ZhciBlPU9lKHQpLGk9dC5vZmZzZXRXaWR0aCxuPXQub2Zmc2V0SGVpZ2h0O3JldHVybiBNYXRoLmFicyhlLndpZHRoLWkpPD0xJiYoaT1lLndpZHRoKSxNYXRoLmFicyhlLmhlaWdodC1uKTw9MSYmKG49ZS5oZWlnaHQpLHt4OnQub2Zmc2V0TGVmdCx5OnQub2Zmc2V0VG9wLHdpZHRoOmksaGVpZ2h0Om59fWZ1bmN0aW9uIGtlKHQsZSl7dmFyIGk9ZS5nZXRSb290Tm9kZSYmZS5nZXRSb290Tm9kZSgpO2lmKHQuY29udGFpbnMoZSkpcmV0dXJuITA7aWYoaSYmYmUoaSkpe3ZhciBuPWU7ZG97aWYobiYmdC5pc1NhbWVOb2RlKG4pKXJldHVybiEwO249bi5wYXJlbnROb2RlfHxuLmhvc3R9d2hpbGUobil9cmV0dXJuITF9ZnVuY3Rpb24gTGUodCl7cmV0dXJuIG1lKHQpLmdldENvbXB1dGVkU3R5bGUodCl9ZnVuY3Rpb24gU2UodCl7cmV0dXJuW1widGFibGVcIixcInRkXCIsXCJ0aFwiXS5pbmRleE9mKHBlKHQpKT49MH1mdW5jdGlvbiBEZSh0KXtyZXR1cm4oKGdlKHQpP3Qub3duZXJEb2N1bWVudDp0LmRvY3VtZW50KXx8d2luZG93LmRvY3VtZW50KS5kb2N1bWVudEVsZW1lbnR9ZnVuY3Rpb24gJGUodCl7cmV0dXJuXCJodG1sXCI9PT1wZSh0KT90OnQuYXNzaWduZWRTbG90fHx0LnBhcmVudE5vZGV8fChiZSh0KT90Lmhvc3Q6bnVsbCl8fERlKHQpfWZ1bmN0aW9uIEllKHQpe3JldHVybiBfZSh0KSYmXCJmaXhlZFwiIT09TGUodCkucG9zaXRpb24/dC5vZmZzZXRQYXJlbnQ6bnVsbH1mdW5jdGlvbiBOZSh0KXtmb3IodmFyIGU9bWUodCksaT1JZSh0KTtpJiZTZShpKSYmXCJzdGF0aWNcIj09PUxlKGkpLnBvc2l0aW9uOylpPUllKGkpO3JldHVybiBpJiYoXCJodG1sXCI9PT1wZShpKXx8XCJib2R5XCI9PT1wZShpKSYmXCJzdGF0aWNcIj09PUxlKGkpLnBvc2l0aW9uKT9lOml8fGZ1bmN0aW9uKHQpe3ZhciBlPS9maXJlZm94L2kudGVzdChUZSgpKTtpZigvVHJpZGVudC9pLnRlc3QoVGUoKSkmJl9lKHQpJiZcImZpeGVkXCI9PT1MZSh0KS5wb3NpdGlvbilyZXR1cm4gbnVsbDt2YXIgaT0kZSh0KTtmb3IoYmUoaSkmJihpPWkuaG9zdCk7X2UoaSkmJltcImh0bWxcIixcImJvZHlcIl0uaW5kZXhPZihwZShpKSk8MDspe3ZhciBuPUxlKGkpO2lmKFwibm9uZVwiIT09bi50cmFuc2Zvcm18fFwibm9uZVwiIT09bi5wZXJzcGVjdGl2ZXx8XCJwYWludFwiPT09bi5jb250YWlufHwtMSE9PVtcInRyYW5zZm9ybVwiLFwicGVyc3BlY3RpdmVcIl0uaW5kZXhPZihuLndpbGxDaGFuZ2UpfHxlJiZcImZpbHRlclwiPT09bi53aWxsQ2hhbmdlfHxlJiZuLmZpbHRlciYmXCJub25lXCIhPT1uLmZpbHRlcilyZXR1cm4gaTtpPWkucGFyZW50Tm9kZX1yZXR1cm4gbnVsbH0odCl8fGV9ZnVuY3Rpb24gUGUodCl7cmV0dXJuW1widG9wXCIsXCJib3R0b21cIl0uaW5kZXhPZih0KT49MD9cInhcIjpcInlcIn1mdW5jdGlvbiBqZSh0LGUsaSl7cmV0dXJuIHdlKHQsQWUoZSxpKSl9ZnVuY3Rpb24gTWUodCl7cmV0dXJuIE9iamVjdC5hc3NpZ24oe30se3RvcDowLHJpZ2h0OjAsYm90dG9tOjAsbGVmdDowfSx0KX1mdW5jdGlvbiBGZSh0LGUpe3JldHVybiBlLnJlZHVjZSgoZnVuY3Rpb24oZSxpKXtyZXR1cm4gZVtpXT10LGV9KSx7fSl9Y29uc3QgSGU9e25hbWU6XCJhcnJvd1wiLGVuYWJsZWQ6ITAscGhhc2U6XCJtYWluXCIsZm46ZnVuY3Rpb24odCl7dmFyIGUsaT10LnN0YXRlLG49dC5uYW1lLHM9dC5vcHRpb25zLG89aS5lbGVtZW50cy5hcnJvdyxyPWkubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzLGE9eWUoaS5wbGFjZW1lbnQpLGw9UGUoYSksYz1bUXQsS3RdLmluZGV4T2YoYSk+PTA/XCJoZWlnaHRcIjpcIndpZHRoXCI7aWYobyYmcil7dmFyIGg9ZnVuY3Rpb24odCxlKXtyZXR1cm4gTWUoXCJudW1iZXJcIiE9dHlwZW9mKHQ9XCJmdW5jdGlvblwiPT10eXBlb2YgdD90KE9iamVjdC5hc3NpZ24oe30sZS5yZWN0cyx7cGxhY2VtZW50OmUucGxhY2VtZW50fSkpOnQpP3Q6RmUodCxZdCkpfShzLnBhZGRpbmcsaSksZD14ZShvKSx1PVwieVwiPT09bD9xdDpRdCxmPVwieVwiPT09bD9WdDpLdCxwPWkucmVjdHMucmVmZXJlbmNlW2NdK2kucmVjdHMucmVmZXJlbmNlW2xdLXJbbF0taS5yZWN0cy5wb3BwZXJbY10sbT1yW2xdLWkucmVjdHMucmVmZXJlbmNlW2xdLGc9TmUobyksXz1nP1wieVwiPT09bD9nLmNsaWVudEhlaWdodHx8MDpnLmNsaWVudFdpZHRofHwwOjAsYj1wLzItbS8yLHY9aFt1XSx5PV8tZFtjXS1oW2ZdLHc9Xy8yLWRbY10vMitiLEE9amUodix3LHkpLEU9bDtpLm1vZGlmaWVyc0RhdGFbbl09KChlPXt9KVtFXT1BLGUuY2VudGVyT2Zmc2V0PUEtdyxlKX19LGVmZmVjdDpmdW5jdGlvbih0KXt2YXIgZT10LnN0YXRlLGk9dC5vcHRpb25zLmVsZW1lbnQsbj12b2lkIDA9PT1pP1wiW2RhdGEtcG9wcGVyLWFycm93XVwiOmk7bnVsbCE9biYmKFwic3RyaW5nXCIhPXR5cGVvZiBufHwobj1lLmVsZW1lbnRzLnBvcHBlci5xdWVyeVNlbGVjdG9yKG4pKSkmJmtlKGUuZWxlbWVudHMucG9wcGVyLG4pJiYoZS5lbGVtZW50cy5hcnJvdz1uKX0scmVxdWlyZXM6W1wicG9wcGVyT2Zmc2V0c1wiXSxyZXF1aXJlc0lmRXhpc3RzOltcInByZXZlbnRPdmVyZmxvd1wiXX07ZnVuY3Rpb24gV2UodCl7cmV0dXJuIHQuc3BsaXQoXCItXCIpWzFdfXZhciBCZT17dG9wOlwiYXV0b1wiLHJpZ2h0OlwiYXV0b1wiLGJvdHRvbTpcImF1dG9cIixsZWZ0OlwiYXV0b1wifTtmdW5jdGlvbiB6ZSh0KXt2YXIgZSxpPXQucG9wcGVyLG49dC5wb3BwZXJSZWN0LHM9dC5wbGFjZW1lbnQsbz10LnZhcmlhdGlvbixyPXQub2Zmc2V0cyxhPXQucG9zaXRpb24sbD10LmdwdUFjY2VsZXJhdGlvbixjPXQuYWRhcHRpdmUsaD10LnJvdW5kT2Zmc2V0cyxkPXQuaXNGaXhlZCx1PXIueCxmPXZvaWQgMD09PXU/MDp1LHA9ci55LG09dm9pZCAwPT09cD8wOnAsZz1cImZ1bmN0aW9uXCI9PXR5cGVvZiBoP2goe3g6Zix5Om19KTp7eDpmLHk6bX07Zj1nLngsbT1nLnk7dmFyIF89ci5oYXNPd25Qcm9wZXJ0eShcInhcIiksYj1yLmhhc093blByb3BlcnR5KFwieVwiKSx2PVF0LHk9cXQsdz13aW5kb3c7aWYoYyl7dmFyIEE9TmUoaSksRT1cImNsaWVudEhlaWdodFwiLFQ9XCJjbGllbnRXaWR0aFwiO0E9PT1tZShpKSYmXCJzdGF0aWNcIiE9PUxlKEE9RGUoaSkpLnBvc2l0aW9uJiZcImFic29sdXRlXCI9PT1hJiYoRT1cInNjcm9sbEhlaWdodFwiLFQ9XCJzY3JvbGxXaWR0aFwiKSwocz09PXF0fHwocz09PVF0fHxzPT09S3QpJiZvPT09R3QpJiYoeT1WdCxtLT0oZCYmQT09PXcmJncudmlzdWFsVmlld3BvcnQ/dy52aXN1YWxWaWV3cG9ydC5oZWlnaHQ6QVtFXSktbi5oZWlnaHQsbSo9bD8xOi0xKSxzIT09UXQmJihzIT09cXQmJnMhPT1WdHx8byE9PUd0KXx8KHY9S3QsZi09KGQmJkE9PT13JiZ3LnZpc3VhbFZpZXdwb3J0P3cudmlzdWFsVmlld3BvcnQud2lkdGg6QVtUXSktbi53aWR0aCxmKj1sPzE6LTEpfXZhciBDLE89T2JqZWN0LmFzc2lnbih7cG9zaXRpb246YX0sYyYmQmUpLHg9ITA9PT1oP2Z1bmN0aW9uKHQsZSl7dmFyIGk9dC54LG49dC55LHM9ZS5kZXZpY2VQaXhlbFJhdGlvfHwxO3JldHVybnt4OkVlKGkqcykvc3x8MCx5OkVlKG4qcykvc3x8MH19KHt4OmYseTptfSxtZShpKSk6e3g6Zix5Om19O3JldHVybiBmPXgueCxtPXgueSxsP09iamVjdC5hc3NpZ24oe30sTywoKEM9e30pW3ldPWI/XCIwXCI6XCJcIixDW3ZdPV8/XCIwXCI6XCJcIixDLnRyYW5zZm9ybT0ody5kZXZpY2VQaXhlbFJhdGlvfHwxKTw9MT9cInRyYW5zbGF0ZShcIitmK1wicHgsIFwiK20rXCJweClcIjpcInRyYW5zbGF0ZTNkKFwiK2YrXCJweCwgXCIrbStcInB4LCAwKVwiLEMpKTpPYmplY3QuYXNzaWduKHt9LE8sKChlPXt9KVt5XT1iP20rXCJweFwiOlwiXCIsZVt2XT1fP2YrXCJweFwiOlwiXCIsZS50cmFuc2Zvcm09XCJcIixlKSl9Y29uc3QgUmU9e25hbWU6XCJjb21wdXRlU3R5bGVzXCIsZW5hYmxlZDohMCxwaGFzZTpcImJlZm9yZVdyaXRlXCIsZm46ZnVuY3Rpb24odCl7dmFyIGU9dC5zdGF0ZSxpPXQub3B0aW9ucyxuPWkuZ3B1QWNjZWxlcmF0aW9uLHM9dm9pZCAwPT09bnx8bixvPWkuYWRhcHRpdmUscj12b2lkIDA9PT1vfHxvLGE9aS5yb3VuZE9mZnNldHMsbD12b2lkIDA9PT1hfHxhLGM9e3BsYWNlbWVudDp5ZShlLnBsYWNlbWVudCksdmFyaWF0aW9uOldlKGUucGxhY2VtZW50KSxwb3BwZXI6ZS5lbGVtZW50cy5wb3BwZXIscG9wcGVyUmVjdDplLnJlY3RzLnBvcHBlcixncHVBY2NlbGVyYXRpb246cyxpc0ZpeGVkOlwiZml4ZWRcIj09PWUub3B0aW9ucy5zdHJhdGVneX07bnVsbCE9ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMmJihlLnN0eWxlcy5wb3BwZXI9T2JqZWN0LmFzc2lnbih7fSxlLnN0eWxlcy5wb3BwZXIsemUoT2JqZWN0LmFzc2lnbih7fSxjLHtvZmZzZXRzOmUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzLHBvc2l0aW9uOmUub3B0aW9ucy5zdHJhdGVneSxhZGFwdGl2ZTpyLHJvdW5kT2Zmc2V0czpsfSkpKSksbnVsbCE9ZS5tb2RpZmllcnNEYXRhLmFycm93JiYoZS5zdHlsZXMuYXJyb3c9T2JqZWN0LmFzc2lnbih7fSxlLnN0eWxlcy5hcnJvdyx6ZShPYmplY3QuYXNzaWduKHt9LGMse29mZnNldHM6ZS5tb2RpZmllcnNEYXRhLmFycm93LHBvc2l0aW9uOlwiYWJzb2x1dGVcIixhZGFwdGl2ZTohMSxyb3VuZE9mZnNldHM6bH0pKSkpLGUuYXR0cmlidXRlcy5wb3BwZXI9T2JqZWN0LmFzc2lnbih7fSxlLmF0dHJpYnV0ZXMucG9wcGVyLHtcImRhdGEtcG9wcGVyLXBsYWNlbWVudFwiOmUucGxhY2VtZW50fSl9LGRhdGE6e319O3ZhciBxZT17cGFzc2l2ZTohMH07Y29uc3QgVmU9e25hbWU6XCJldmVudExpc3RlbmVyc1wiLGVuYWJsZWQ6ITAscGhhc2U6XCJ3cml0ZVwiLGZuOmZ1bmN0aW9uKCl7fSxlZmZlY3Q6ZnVuY3Rpb24odCl7dmFyIGU9dC5zdGF0ZSxpPXQuaW5zdGFuY2Usbj10Lm9wdGlvbnMscz1uLnNjcm9sbCxvPXZvaWQgMD09PXN8fHMscj1uLnJlc2l6ZSxhPXZvaWQgMD09PXJ8fHIsbD1tZShlLmVsZW1lbnRzLnBvcHBlciksYz1bXS5jb25jYXQoZS5zY3JvbGxQYXJlbnRzLnJlZmVyZW5jZSxlLnNjcm9sbFBhcmVudHMucG9wcGVyKTtyZXR1cm4gbyYmYy5mb3JFYWNoKChmdW5jdGlvbih0KXt0LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIixpLnVwZGF0ZSxxZSl9KSksYSYmbC5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsaS51cGRhdGUscWUpLGZ1bmN0aW9uKCl7byYmYy5mb3JFYWNoKChmdW5jdGlvbih0KXt0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIixpLnVwZGF0ZSxxZSl9KSksYSYmbC5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsaS51cGRhdGUscWUpfX0sZGF0YTp7fX07dmFyIEtlPXtsZWZ0OlwicmlnaHRcIixyaWdodDpcImxlZnRcIixib3R0b206XCJ0b3BcIix0b3A6XCJib3R0b21cIn07ZnVuY3Rpb24gUWUodCl7cmV0dXJuIHQucmVwbGFjZSgvbGVmdHxyaWdodHxib3R0b218dG9wL2csKGZ1bmN0aW9uKHQpe3JldHVybiBLZVt0XX0pKX12YXIgWGU9e3N0YXJ0OlwiZW5kXCIsZW5kOlwic3RhcnRcIn07ZnVuY3Rpb24gWWUodCl7cmV0dXJuIHQucmVwbGFjZSgvc3RhcnR8ZW5kL2csKGZ1bmN0aW9uKHQpe3JldHVybiBYZVt0XX0pKX1mdW5jdGlvbiBVZSh0KXt2YXIgZT1tZSh0KTtyZXR1cm57c2Nyb2xsTGVmdDplLnBhZ2VYT2Zmc2V0LHNjcm9sbFRvcDplLnBhZ2VZT2Zmc2V0fX1mdW5jdGlvbiBHZSh0KXtyZXR1cm4gT2UoRGUodCkpLmxlZnQrVWUodCkuc2Nyb2xsTGVmdH1mdW5jdGlvbiBKZSh0KXt2YXIgZT1MZSh0KSxpPWUub3ZlcmZsb3csbj1lLm92ZXJmbG93WCxzPWUub3ZlcmZsb3dZO3JldHVybi9hdXRvfHNjcm9sbHxvdmVybGF5fGhpZGRlbi8udGVzdChpK3Mrbil9ZnVuY3Rpb24gWmUodCl7cmV0dXJuW1wiaHRtbFwiLFwiYm9keVwiLFwiI2RvY3VtZW50XCJdLmluZGV4T2YocGUodCkpPj0wP3Qub3duZXJEb2N1bWVudC5ib2R5Ol9lKHQpJiZKZSh0KT90OlplKCRlKHQpKX1mdW5jdGlvbiB0aSh0LGUpe3ZhciBpO3ZvaWQgMD09PWUmJihlPVtdKTt2YXIgbj1aZSh0KSxzPW49PT0obnVsbD09KGk9dC5vd25lckRvY3VtZW50KT92b2lkIDA6aS5ib2R5KSxvPW1lKG4pLHI9cz9bb10uY29uY2F0KG8udmlzdWFsVmlld3BvcnR8fFtdLEplKG4pP246W10pOm4sYT1lLmNvbmNhdChyKTtyZXR1cm4gcz9hOmEuY29uY2F0KHRpKCRlKHIpKSl9ZnVuY3Rpb24gZWkodCl7cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sdCx7bGVmdDp0LngsdG9wOnQueSxyaWdodDp0LngrdC53aWR0aCxib3R0b206dC55K3QuaGVpZ2h0fSl9ZnVuY3Rpb24gaWkodCxlLGkpe3JldHVybiBlPT09WnQ/ZWkoZnVuY3Rpb24odCxlKXt2YXIgaT1tZSh0KSxuPURlKHQpLHM9aS52aXN1YWxWaWV3cG9ydCxvPW4uY2xpZW50V2lkdGgscj1uLmNsaWVudEhlaWdodCxhPTAsbD0wO2lmKHMpe289cy53aWR0aCxyPXMuaGVpZ2h0O3ZhciBjPUNlKCk7KGN8fCFjJiZcImZpeGVkXCI9PT1lKSYmKGE9cy5vZmZzZXRMZWZ0LGw9cy5vZmZzZXRUb3ApfXJldHVybnt3aWR0aDpvLGhlaWdodDpyLHg6YStHZSh0KSx5Omx9fSh0LGkpKTpnZShlKT9mdW5jdGlvbih0LGUpe3ZhciBpPU9lKHQsITEsXCJmaXhlZFwiPT09ZSk7cmV0dXJuIGkudG9wPWkudG9wK3QuY2xpZW50VG9wLGkubGVmdD1pLmxlZnQrdC5jbGllbnRMZWZ0LGkuYm90dG9tPWkudG9wK3QuY2xpZW50SGVpZ2h0LGkucmlnaHQ9aS5sZWZ0K3QuY2xpZW50V2lkdGgsaS53aWR0aD10LmNsaWVudFdpZHRoLGkuaGVpZ2h0PXQuY2xpZW50SGVpZ2h0LGkueD1pLmxlZnQsaS55PWkudG9wLGl9KGUsaSk6ZWkoZnVuY3Rpb24odCl7dmFyIGUsaT1EZSh0KSxuPVVlKHQpLHM9bnVsbD09KGU9dC5vd25lckRvY3VtZW50KT92b2lkIDA6ZS5ib2R5LG89d2UoaS5zY3JvbGxXaWR0aCxpLmNsaWVudFdpZHRoLHM/cy5zY3JvbGxXaWR0aDowLHM/cy5jbGllbnRXaWR0aDowKSxyPXdlKGkuc2Nyb2xsSGVpZ2h0LGkuY2xpZW50SGVpZ2h0LHM/cy5zY3JvbGxIZWlnaHQ6MCxzP3MuY2xpZW50SGVpZ2h0OjApLGE9LW4uc2Nyb2xsTGVmdCtHZSh0KSxsPS1uLnNjcm9sbFRvcDtyZXR1cm5cInJ0bFwiPT09TGUoc3x8aSkuZGlyZWN0aW9uJiYoYSs9d2UoaS5jbGllbnRXaWR0aCxzP3MuY2xpZW50V2lkdGg6MCktbykse3dpZHRoOm8saGVpZ2h0OnIseDphLHk6bH19KERlKHQpKSl9ZnVuY3Rpb24gbmkodCl7dmFyIGUsaT10LnJlZmVyZW5jZSxuPXQuZWxlbWVudCxzPXQucGxhY2VtZW50LG89cz95ZShzKTpudWxsLHI9cz9XZShzKTpudWxsLGE9aS54K2kud2lkdGgvMi1uLndpZHRoLzIsbD1pLnkraS5oZWlnaHQvMi1uLmhlaWdodC8yO3N3aXRjaChvKXtjYXNlIHF0OmU9e3g6YSx5OmkueS1uLmhlaWdodH07YnJlYWs7Y2FzZSBWdDplPXt4OmEseTppLnkraS5oZWlnaHR9O2JyZWFrO2Nhc2UgS3Q6ZT17eDppLngraS53aWR0aCx5Omx9O2JyZWFrO2Nhc2UgUXQ6ZT17eDppLngtbi53aWR0aCx5Omx9O2JyZWFrO2RlZmF1bHQ6ZT17eDppLngseTppLnl9fXZhciBjPW8/UGUobyk6bnVsbDtpZihudWxsIT1jKXt2YXIgaD1cInlcIj09PWM/XCJoZWlnaHRcIjpcIndpZHRoXCI7c3dpdGNoKHIpe2Nhc2UgVXQ6ZVtjXT1lW2NdLShpW2hdLzItbltoXS8yKTticmVhaztjYXNlIEd0OmVbY109ZVtjXSsoaVtoXS8yLW5baF0vMil9fXJldHVybiBlfWZ1bmN0aW9uIHNpKHQsZSl7dm9pZCAwPT09ZSYmKGU9e30pO3ZhciBpPWUsbj1pLnBsYWNlbWVudCxzPXZvaWQgMD09PW4/dC5wbGFjZW1lbnQ6bixvPWkuc3RyYXRlZ3kscj12b2lkIDA9PT1vP3Quc3RyYXRlZ3k6byxhPWkuYm91bmRhcnksbD12b2lkIDA9PT1hP0p0OmEsYz1pLnJvb3RCb3VuZGFyeSxoPXZvaWQgMD09PWM/WnQ6YyxkPWkuZWxlbWVudENvbnRleHQsdT12b2lkIDA9PT1kP3RlOmQsZj1pLmFsdEJvdW5kYXJ5LHA9dm9pZCAwIT09ZiYmZixtPWkucGFkZGluZyxnPXZvaWQgMD09PW0/MDptLF89TWUoXCJudW1iZXJcIiE9dHlwZW9mIGc/ZzpGZShnLFl0KSksYj11PT09dGU/ZWU6dGUsdj10LnJlY3RzLnBvcHBlcix5PXQuZWxlbWVudHNbcD9iOnVdLHc9ZnVuY3Rpb24odCxlLGksbil7dmFyIHM9XCJjbGlwcGluZ1BhcmVudHNcIj09PWU/ZnVuY3Rpb24odCl7dmFyIGU9dGkoJGUodCkpLGk9W1wiYWJzb2x1dGVcIixcImZpeGVkXCJdLmluZGV4T2YoTGUodCkucG9zaXRpb24pPj0wJiZfZSh0KT9OZSh0KTp0O3JldHVybiBnZShpKT9lLmZpbHRlcigoZnVuY3Rpb24odCl7cmV0dXJuIGdlKHQpJiZrZSh0LGkpJiZcImJvZHlcIiE9PXBlKHQpfSkpOltdfSh0KTpbXS5jb25jYXQoZSksbz1bXS5jb25jYXQocyxbaV0pLHI9b1swXSxhPW8ucmVkdWNlKChmdW5jdGlvbihlLGkpe3ZhciBzPWlpKHQsaSxuKTtyZXR1cm4gZS50b3A9d2Uocy50b3AsZS50b3ApLGUucmlnaHQ9QWUocy5yaWdodCxlLnJpZ2h0KSxlLmJvdHRvbT1BZShzLmJvdHRvbSxlLmJvdHRvbSksZS5sZWZ0PXdlKHMubGVmdCxlLmxlZnQpLGV9KSxpaSh0LHIsbikpO3JldHVybiBhLndpZHRoPWEucmlnaHQtYS5sZWZ0LGEuaGVpZ2h0PWEuYm90dG9tLWEudG9wLGEueD1hLmxlZnQsYS55PWEudG9wLGF9KGdlKHkpP3k6eS5jb250ZXh0RWxlbWVudHx8RGUodC5lbGVtZW50cy5wb3BwZXIpLGwsaCxyKSxBPU9lKHQuZWxlbWVudHMucmVmZXJlbmNlKSxFPW5pKHtyZWZlcmVuY2U6QSxlbGVtZW50OnYscGxhY2VtZW50OnN9KSxUPWVpKE9iamVjdC5hc3NpZ24oe30sdixFKSksQz11PT09dGU/VDpBLE89e3RvcDp3LnRvcC1DLnRvcCtfLnRvcCxib3R0b206Qy5ib3R0b20tdy5ib3R0b20rXy5ib3R0b20sbGVmdDp3LmxlZnQtQy5sZWZ0K18ubGVmdCxyaWdodDpDLnJpZ2h0LXcucmlnaHQrXy5yaWdodH0seD10Lm1vZGlmaWVyc0RhdGEub2Zmc2V0O2lmKHU9PT10ZSYmeCl7dmFyIGs9eFtzXTtPYmplY3Qua2V5cyhPKS5mb3JFYWNoKChmdW5jdGlvbih0KXt2YXIgZT1bS3QsVnRdLmluZGV4T2YodCk+PTA/MTotMSxpPVtxdCxWdF0uaW5kZXhPZih0KT49MD9cInlcIjpcInhcIjtPW3RdKz1rW2ldKmV9KSl9cmV0dXJuIE99ZnVuY3Rpb24gb2kodCxlKXt2b2lkIDA9PT1lJiYoZT17fSk7dmFyIGk9ZSxuPWkucGxhY2VtZW50LHM9aS5ib3VuZGFyeSxvPWkucm9vdEJvdW5kYXJ5LHI9aS5wYWRkaW5nLGE9aS5mbGlwVmFyaWF0aW9ucyxsPWkuYWxsb3dlZEF1dG9QbGFjZW1lbnRzLGM9dm9pZCAwPT09bD9uZTpsLGg9V2UobiksZD1oP2E/aWU6aWUuZmlsdGVyKChmdW5jdGlvbih0KXtyZXR1cm4gV2UodCk9PT1ofSkpOll0LHU9ZC5maWx0ZXIoKGZ1bmN0aW9uKHQpe3JldHVybiBjLmluZGV4T2YodCk+PTB9KSk7MD09PXUubGVuZ3RoJiYodT1kKTt2YXIgZj11LnJlZHVjZSgoZnVuY3Rpb24oZSxpKXtyZXR1cm4gZVtpXT1zaSh0LHtwbGFjZW1lbnQ6aSxib3VuZGFyeTpzLHJvb3RCb3VuZGFyeTpvLHBhZGRpbmc6cn0pW3llKGkpXSxlfSkse30pO3JldHVybiBPYmplY3Qua2V5cyhmKS5zb3J0KChmdW5jdGlvbih0LGUpe3JldHVybiBmW3RdLWZbZV19KSl9Y29uc3Qgcmk9e25hbWU6XCJmbGlwXCIsZW5hYmxlZDohMCxwaGFzZTpcIm1haW5cIixmbjpmdW5jdGlvbih0KXt2YXIgZT10LnN0YXRlLGk9dC5vcHRpb25zLG49dC5uYW1lO2lmKCFlLm1vZGlmaWVyc0RhdGFbbl0uX3NraXApe2Zvcih2YXIgcz1pLm1haW5BeGlzLG89dm9pZCAwPT09c3x8cyxyPWkuYWx0QXhpcyxhPXZvaWQgMD09PXJ8fHIsbD1pLmZhbGxiYWNrUGxhY2VtZW50cyxjPWkucGFkZGluZyxoPWkuYm91bmRhcnksZD1pLnJvb3RCb3VuZGFyeSx1PWkuYWx0Qm91bmRhcnksZj1pLmZsaXBWYXJpYXRpb25zLHA9dm9pZCAwPT09Znx8ZixtPWkuYWxsb3dlZEF1dG9QbGFjZW1lbnRzLGc9ZS5vcHRpb25zLnBsYWNlbWVudCxfPXllKGcpLGI9bHx8KF8hPT1nJiZwP2Z1bmN0aW9uKHQpe2lmKHllKHQpPT09WHQpcmV0dXJuW107dmFyIGU9UWUodCk7cmV0dXJuW1llKHQpLGUsWWUoZSldfShnKTpbUWUoZyldKSx2PVtnXS5jb25jYXQoYikucmVkdWNlKChmdW5jdGlvbih0LGkpe3JldHVybiB0LmNvbmNhdCh5ZShpKT09PVh0P29pKGUse3BsYWNlbWVudDppLGJvdW5kYXJ5Omgscm9vdEJvdW5kYXJ5OmQscGFkZGluZzpjLGZsaXBWYXJpYXRpb25zOnAsYWxsb3dlZEF1dG9QbGFjZW1lbnRzOm19KTppKX0pLFtdKSx5PWUucmVjdHMucmVmZXJlbmNlLHc9ZS5yZWN0cy5wb3BwZXIsQT1uZXcgTWFwLEU9ITAsVD12WzBdLEM9MDtDPHYubGVuZ3RoO0MrKyl7dmFyIE89dltDXSx4PXllKE8pLGs9V2UoTyk9PT1VdCxMPVtxdCxWdF0uaW5kZXhPZih4KT49MCxTPUw/XCJ3aWR0aFwiOlwiaGVpZ2h0XCIsRD1zaShlLHtwbGFjZW1lbnQ6Tyxib3VuZGFyeTpoLHJvb3RCb3VuZGFyeTpkLGFsdEJvdW5kYXJ5OnUscGFkZGluZzpjfSksJD1MP2s/S3Q6UXQ6az9WdDpxdDt5W1NdPndbU10mJigkPVFlKCQpKTt2YXIgST1RZSgkKSxOPVtdO2lmKG8mJk4ucHVzaChEW3hdPD0wKSxhJiZOLnB1c2goRFskXTw9MCxEW0ldPD0wKSxOLmV2ZXJ5KChmdW5jdGlvbih0KXtyZXR1cm4gdH0pKSl7VD1PLEU9ITE7YnJlYWt9QS5zZXQoTyxOKX1pZihFKWZvcih2YXIgUD1mdW5jdGlvbih0KXt2YXIgZT12LmZpbmQoKGZ1bmN0aW9uKGUpe3ZhciBpPUEuZ2V0KGUpO2lmKGkpcmV0dXJuIGkuc2xpY2UoMCx0KS5ldmVyeSgoZnVuY3Rpb24odCl7cmV0dXJuIHR9KSl9KSk7aWYoZSlyZXR1cm4gVD1lLFwiYnJlYWtcIn0saj1wPzM6MTtqPjAmJlwiYnJlYWtcIiE9PVAoaik7ai0tKTtlLnBsYWNlbWVudCE9PVQmJihlLm1vZGlmaWVyc0RhdGFbbl0uX3NraXA9ITAsZS5wbGFjZW1lbnQ9VCxlLnJlc2V0PSEwKX19LHJlcXVpcmVzSWZFeGlzdHM6W1wib2Zmc2V0XCJdLGRhdGE6e19za2lwOiExfX07ZnVuY3Rpb24gYWkodCxlLGkpe3JldHVybiB2b2lkIDA9PT1pJiYoaT17eDowLHk6MH0pLHt0b3A6dC50b3AtZS5oZWlnaHQtaS55LHJpZ2h0OnQucmlnaHQtZS53aWR0aCtpLngsYm90dG9tOnQuYm90dG9tLWUuaGVpZ2h0K2kueSxsZWZ0OnQubGVmdC1lLndpZHRoLWkueH19ZnVuY3Rpb24gbGkodCl7cmV0dXJuW3F0LEt0LFZ0LFF0XS5zb21lKChmdW5jdGlvbihlKXtyZXR1cm4gdFtlXT49MH0pKX1jb25zdCBjaT17bmFtZTpcImhpZGVcIixlbmFibGVkOiEwLHBoYXNlOlwibWFpblwiLHJlcXVpcmVzSWZFeGlzdHM6W1wicHJldmVudE92ZXJmbG93XCJdLGZuOmZ1bmN0aW9uKHQpe3ZhciBlPXQuc3RhdGUsaT10Lm5hbWUsbj1lLnJlY3RzLnJlZmVyZW5jZSxzPWUucmVjdHMucG9wcGVyLG89ZS5tb2RpZmllcnNEYXRhLnByZXZlbnRPdmVyZmxvdyxyPXNpKGUse2VsZW1lbnRDb250ZXh0OlwicmVmZXJlbmNlXCJ9KSxhPXNpKGUse2FsdEJvdW5kYXJ5OiEwfSksbD1haShyLG4pLGM9YWkoYSxzLG8pLGg9bGkobCksZD1saShjKTtlLm1vZGlmaWVyc0RhdGFbaV09e3JlZmVyZW5jZUNsaXBwaW5nT2Zmc2V0czpsLHBvcHBlckVzY2FwZU9mZnNldHM6Yyxpc1JlZmVyZW5jZUhpZGRlbjpoLGhhc1BvcHBlckVzY2FwZWQ6ZH0sZS5hdHRyaWJ1dGVzLnBvcHBlcj1PYmplY3QuYXNzaWduKHt9LGUuYXR0cmlidXRlcy5wb3BwZXIse1wiZGF0YS1wb3BwZXItcmVmZXJlbmNlLWhpZGRlblwiOmgsXCJkYXRhLXBvcHBlci1lc2NhcGVkXCI6ZH0pfX0saGk9e25hbWU6XCJvZmZzZXRcIixlbmFibGVkOiEwLHBoYXNlOlwibWFpblwiLHJlcXVpcmVzOltcInBvcHBlck9mZnNldHNcIl0sZm46ZnVuY3Rpb24odCl7dmFyIGU9dC5zdGF0ZSxpPXQub3B0aW9ucyxuPXQubmFtZSxzPWkub2Zmc2V0LG89dm9pZCAwPT09cz9bMCwwXTpzLHI9bmUucmVkdWNlKChmdW5jdGlvbih0LGkpe3JldHVybiB0W2ldPWZ1bmN0aW9uKHQsZSxpKXt2YXIgbj15ZSh0KSxzPVtRdCxxdF0uaW5kZXhPZihuKT49MD8tMToxLG89XCJmdW5jdGlvblwiPT10eXBlb2YgaT9pKE9iamVjdC5hc3NpZ24oe30sZSx7cGxhY2VtZW50OnR9KSk6aSxyPW9bMF0sYT1vWzFdO3JldHVybiByPXJ8fDAsYT0oYXx8MCkqcyxbUXQsS3RdLmluZGV4T2Yobik+PTA/e3g6YSx5OnJ9Ont4OnIseTphfX0oaSxlLnJlY3RzLG8pLHR9KSx7fSksYT1yW2UucGxhY2VtZW50XSxsPWEueCxjPWEueTtudWxsIT1lLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cyYmKGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzLngrPWwsZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMueSs9YyksZS5tb2RpZmllcnNEYXRhW25dPXJ9fSxkaT17bmFtZTpcInBvcHBlck9mZnNldHNcIixlbmFibGVkOiEwLHBoYXNlOlwicmVhZFwiLGZuOmZ1bmN0aW9uKHQpe3ZhciBlPXQuc3RhdGUsaT10Lm5hbWU7ZS5tb2RpZmllcnNEYXRhW2ldPW5pKHtyZWZlcmVuY2U6ZS5yZWN0cy5yZWZlcmVuY2UsZWxlbWVudDplLnJlY3RzLnBvcHBlcixwbGFjZW1lbnQ6ZS5wbGFjZW1lbnR9KX0sZGF0YTp7fX0sdWk9e25hbWU6XCJwcmV2ZW50T3ZlcmZsb3dcIixlbmFibGVkOiEwLHBoYXNlOlwibWFpblwiLGZuOmZ1bmN0aW9uKHQpe3ZhciBlPXQuc3RhdGUsaT10Lm9wdGlvbnMsbj10Lm5hbWUscz1pLm1haW5BeGlzLG89dm9pZCAwPT09c3x8cyxyPWkuYWx0QXhpcyxhPXZvaWQgMCE9PXImJnIsbD1pLmJvdW5kYXJ5LGM9aS5yb290Qm91bmRhcnksaD1pLmFsdEJvdW5kYXJ5LGQ9aS5wYWRkaW5nLHU9aS50ZXRoZXIsZj12b2lkIDA9PT11fHx1LHA9aS50ZXRoZXJPZmZzZXQsbT12b2lkIDA9PT1wPzA6cCxnPXNpKGUse2JvdW5kYXJ5Omwscm9vdEJvdW5kYXJ5OmMscGFkZGluZzpkLGFsdEJvdW5kYXJ5Omh9KSxfPXllKGUucGxhY2VtZW50KSxiPVdlKGUucGxhY2VtZW50KSx2PSFiLHk9UGUoXyksdz1cInhcIj09PXk/XCJ5XCI6XCJ4XCIsQT1lLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cyxFPWUucmVjdHMucmVmZXJlbmNlLFQ9ZS5yZWN0cy5wb3BwZXIsQz1cImZ1bmN0aW9uXCI9PXR5cGVvZiBtP20oT2JqZWN0LmFzc2lnbih7fSxlLnJlY3RzLHtwbGFjZW1lbnQ6ZS5wbGFjZW1lbnR9KSk6bSxPPVwibnVtYmVyXCI9PXR5cGVvZiBDP3ttYWluQXhpczpDLGFsdEF4aXM6Q306T2JqZWN0LmFzc2lnbih7bWFpbkF4aXM6MCxhbHRBeGlzOjB9LEMpLHg9ZS5tb2RpZmllcnNEYXRhLm9mZnNldD9lLm1vZGlmaWVyc0RhdGEub2Zmc2V0W2UucGxhY2VtZW50XTpudWxsLGs9e3g6MCx5OjB9O2lmKEEpe2lmKG8pe3ZhciBMLFM9XCJ5XCI9PT15P3F0OlF0LEQ9XCJ5XCI9PT15P1Z0Okt0LCQ9XCJ5XCI9PT15P1wiaGVpZ2h0XCI6XCJ3aWR0aFwiLEk9QVt5XSxOPUkrZ1tTXSxQPUktZ1tEXSxqPWY/LVRbJF0vMjowLE09Yj09PVV0P0VbJF06VFskXSxGPWI9PT1VdD8tVFskXTotRVskXSxIPWUuZWxlbWVudHMuYXJyb3csVz1mJiZIP3hlKEgpOnt3aWR0aDowLGhlaWdodDowfSxCPWUubW9kaWZpZXJzRGF0YVtcImFycm93I3BlcnNpc3RlbnRcIl0/ZS5tb2RpZmllcnNEYXRhW1wiYXJyb3cjcGVyc2lzdGVudFwiXS5wYWRkaW5nOnt0b3A6MCxyaWdodDowLGJvdHRvbTowLGxlZnQ6MH0sej1CW1NdLFI9QltEXSxxPWplKDAsRVskXSxXWyRdKSxWPXY/RVskXS8yLWotcS16LU8ubWFpbkF4aXM6TS1xLXotTy5tYWluQXhpcyxLPXY/LUVbJF0vMitqK3ErUitPLm1haW5BeGlzOkYrcStSK08ubWFpbkF4aXMsUT1lLmVsZW1lbnRzLmFycm93JiZOZShlLmVsZW1lbnRzLmFycm93KSxYPVE/XCJ5XCI9PT15P1EuY2xpZW50VG9wfHwwOlEuY2xpZW50TGVmdHx8MDowLFk9bnVsbCE9KEw9bnVsbD09eD92b2lkIDA6eFt5XSk/TDowLFU9SStLLVksRz1qZShmP0FlKE4sSStWLVktWCk6TixJLGY/d2UoUCxVKTpQKTtBW3ldPUcsa1t5XT1HLUl9aWYoYSl7dmFyIEosWj1cInhcIj09PXk/cXQ6UXQsdHQ9XCJ4XCI9PT15P1Z0Okt0LGV0PUFbd10saXQ9XCJ5XCI9PT13P1wiaGVpZ2h0XCI6XCJ3aWR0aFwiLG50PWV0K2dbWl0sc3Q9ZXQtZ1t0dF0sb3Q9LTEhPT1bcXQsUXRdLmluZGV4T2YoXykscnQ9bnVsbCE9KEo9bnVsbD09eD92b2lkIDA6eFt3XSk/SjowLGF0PW90P250OmV0LUVbaXRdLVRbaXRdLXJ0K08uYWx0QXhpcyxsdD1vdD9ldCtFW2l0XStUW2l0XS1ydC1PLmFsdEF4aXM6c3QsY3Q9ZiYmb3Q/ZnVuY3Rpb24odCxlLGkpe3ZhciBuPWplKHQsZSxpKTtyZXR1cm4gbj5pP2k6bn0oYXQsZXQsbHQpOmplKGY/YXQ6bnQsZXQsZj9sdDpzdCk7QVt3XT1jdCxrW3ddPWN0LWV0fWUubW9kaWZpZXJzRGF0YVtuXT1rfX0scmVxdWlyZXNJZkV4aXN0czpbXCJvZmZzZXRcIl19O2Z1bmN0aW9uIGZpKHQsZSxpKXt2b2lkIDA9PT1pJiYoaT0hMSk7dmFyIG4scyxvPV9lKGUpLHI9X2UoZSkmJmZ1bmN0aW9uKHQpe3ZhciBlPXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksaT1FZShlLndpZHRoKS90Lm9mZnNldFdpZHRofHwxLG49RWUoZS5oZWlnaHQpL3Qub2Zmc2V0SGVpZ2h0fHwxO3JldHVybiAxIT09aXx8MSE9PW59KGUpLGE9RGUoZSksbD1PZSh0LHIsaSksYz17c2Nyb2xsTGVmdDowLHNjcm9sbFRvcDowfSxoPXt4OjAseTowfTtyZXR1cm4ob3x8IW8mJiFpKSYmKChcImJvZHlcIiE9PXBlKGUpfHxKZShhKSkmJihjPShuPWUpIT09bWUobikmJl9lKG4pP3tzY3JvbGxMZWZ0OihzPW4pLnNjcm9sbExlZnQsc2Nyb2xsVG9wOnMuc2Nyb2xsVG9wfTpVZShuKSksX2UoZSk/KChoPU9lKGUsITApKS54Kz1lLmNsaWVudExlZnQsaC55Kz1lLmNsaWVudFRvcCk6YSYmKGgueD1HZShhKSkpLHt4OmwubGVmdCtjLnNjcm9sbExlZnQtaC54LHk6bC50b3ArYy5zY3JvbGxUb3AtaC55LHdpZHRoOmwud2lkdGgsaGVpZ2h0OmwuaGVpZ2h0fX1mdW5jdGlvbiBwaSh0KXt2YXIgZT1uZXcgTWFwLGk9bmV3IFNldCxuPVtdO2Z1bmN0aW9uIHModCl7aS5hZGQodC5uYW1lKSxbXS5jb25jYXQodC5yZXF1aXJlc3x8W10sdC5yZXF1aXJlc0lmRXhpc3RzfHxbXSkuZm9yRWFjaCgoZnVuY3Rpb24odCl7aWYoIWkuaGFzKHQpKXt2YXIgbj1lLmdldCh0KTtuJiZzKG4pfX0pKSxuLnB1c2godCl9cmV0dXJuIHQuZm9yRWFjaCgoZnVuY3Rpb24odCl7ZS5zZXQodC5uYW1lLHQpfSkpLHQuZm9yRWFjaCgoZnVuY3Rpb24odCl7aS5oYXModC5uYW1lKXx8cyh0KX0pKSxufXZhciBtaT17cGxhY2VtZW50OlwiYm90dG9tXCIsbW9kaWZpZXJzOltdLHN0cmF0ZWd5OlwiYWJzb2x1dGVcIn07ZnVuY3Rpb24gZ2koKXtmb3IodmFyIHQ9YXJndW1lbnRzLmxlbmd0aCxlPW5ldyBBcnJheSh0KSxpPTA7aTx0O2krKyllW2ldPWFyZ3VtZW50c1tpXTtyZXR1cm4hZS5zb21lKChmdW5jdGlvbih0KXtyZXR1cm4hKHQmJlwiZnVuY3Rpb25cIj09dHlwZW9mIHQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KX0pKX1mdW5jdGlvbiBfaSh0KXt2b2lkIDA9PT10JiYodD17fSk7dmFyIGU9dCxpPWUuZGVmYXVsdE1vZGlmaWVycyxuPXZvaWQgMD09PWk/W106aSxzPWUuZGVmYXVsdE9wdGlvbnMsbz12b2lkIDA9PT1zP21pOnM7cmV0dXJuIGZ1bmN0aW9uKHQsZSxpKXt2b2lkIDA9PT1pJiYoaT1vKTt2YXIgcyxyLGE9e3BsYWNlbWVudDpcImJvdHRvbVwiLG9yZGVyZWRNb2RpZmllcnM6W10sb3B0aW9uczpPYmplY3QuYXNzaWduKHt9LG1pLG8pLG1vZGlmaWVyc0RhdGE6e30sZWxlbWVudHM6e3JlZmVyZW5jZTp0LHBvcHBlcjplfSxhdHRyaWJ1dGVzOnt9LHN0eWxlczp7fX0sbD1bXSxjPSExLGg9e3N0YXRlOmEsc2V0T3B0aW9uczpmdW5jdGlvbihpKXt2YXIgcz1cImZ1bmN0aW9uXCI9PXR5cGVvZiBpP2koYS5vcHRpb25zKTppO2QoKSxhLm9wdGlvbnM9T2JqZWN0LmFzc2lnbih7fSxvLGEub3B0aW9ucyxzKSxhLnNjcm9sbFBhcmVudHM9e3JlZmVyZW5jZTpnZSh0KT90aSh0KTp0LmNvbnRleHRFbGVtZW50P3RpKHQuY29udGV4dEVsZW1lbnQpOltdLHBvcHBlcjp0aShlKX07dmFyIHIsYyx1PWZ1bmN0aW9uKHQpe3ZhciBlPXBpKHQpO3JldHVybiBmZS5yZWR1Y2UoKGZ1bmN0aW9uKHQsaSl7cmV0dXJuIHQuY29uY2F0KGUuZmlsdGVyKChmdW5jdGlvbih0KXtyZXR1cm4gdC5waGFzZT09PWl9KSkpfSksW10pfSgocj1bXS5jb25jYXQobixhLm9wdGlvbnMubW9kaWZpZXJzKSxjPXIucmVkdWNlKChmdW5jdGlvbih0LGUpe3ZhciBpPXRbZS5uYW1lXTtyZXR1cm4gdFtlLm5hbWVdPWk/T2JqZWN0LmFzc2lnbih7fSxpLGUse29wdGlvbnM6T2JqZWN0LmFzc2lnbih7fSxpLm9wdGlvbnMsZS5vcHRpb25zKSxkYXRhOk9iamVjdC5hc3NpZ24oe30saS5kYXRhLGUuZGF0YSl9KTplLHR9KSx7fSksT2JqZWN0LmtleXMoYykubWFwKChmdW5jdGlvbih0KXtyZXR1cm4gY1t0XX0pKSkpO3JldHVybiBhLm9yZGVyZWRNb2RpZmllcnM9dS5maWx0ZXIoKGZ1bmN0aW9uKHQpe3JldHVybiB0LmVuYWJsZWR9KSksYS5vcmRlcmVkTW9kaWZpZXJzLmZvckVhY2goKGZ1bmN0aW9uKHQpe3ZhciBlPXQubmFtZSxpPXQub3B0aW9ucyxuPXZvaWQgMD09PWk/e306aSxzPXQuZWZmZWN0O2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIHMpe3ZhciBvPXMoe3N0YXRlOmEsbmFtZTplLGluc3RhbmNlOmgsb3B0aW9uczpufSk7bC5wdXNoKG98fGZ1bmN0aW9uKCl7fSl9fSkpLGgudXBkYXRlKCl9LGZvcmNlVXBkYXRlOmZ1bmN0aW9uKCl7aWYoIWMpe3ZhciB0PWEuZWxlbWVudHMsZT10LnJlZmVyZW5jZSxpPXQucG9wcGVyO2lmKGdpKGUsaSkpe2EucmVjdHM9e3JlZmVyZW5jZTpmaShlLE5lKGkpLFwiZml4ZWRcIj09PWEub3B0aW9ucy5zdHJhdGVneSkscG9wcGVyOnhlKGkpfSxhLnJlc2V0PSExLGEucGxhY2VtZW50PWEub3B0aW9ucy5wbGFjZW1lbnQsYS5vcmRlcmVkTW9kaWZpZXJzLmZvckVhY2goKGZ1bmN0aW9uKHQpe3JldHVybiBhLm1vZGlmaWVyc0RhdGFbdC5uYW1lXT1PYmplY3QuYXNzaWduKHt9LHQuZGF0YSl9KSk7Zm9yKHZhciBuPTA7bjxhLm9yZGVyZWRNb2RpZmllcnMubGVuZ3RoO24rKylpZighMCE9PWEucmVzZXQpe3ZhciBzPWEub3JkZXJlZE1vZGlmaWVyc1tuXSxvPXMuZm4scj1zLm9wdGlvbnMsbD12b2lkIDA9PT1yP3t9OnIsZD1zLm5hbWU7XCJmdW5jdGlvblwiPT10eXBlb2YgbyYmKGE9byh7c3RhdGU6YSxvcHRpb25zOmwsbmFtZTpkLGluc3RhbmNlOmh9KXx8YSl9ZWxzZSBhLnJlc2V0PSExLG49LTF9fX0sdXBkYXRlOihzPWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBQcm9taXNlKChmdW5jdGlvbih0KXtoLmZvcmNlVXBkYXRlKCksdChhKX0pKX0sZnVuY3Rpb24oKXtyZXR1cm4gcnx8KHI9bmV3IFByb21pc2UoKGZ1bmN0aW9uKHQpe1Byb21pc2UucmVzb2x2ZSgpLnRoZW4oKGZ1bmN0aW9uKCl7cj12b2lkIDAsdChzKCkpfSkpfSkpKSxyfSksZGVzdHJveTpmdW5jdGlvbigpe2QoKSxjPSEwfX07aWYoIWdpKHQsZSkpcmV0dXJuIGg7ZnVuY3Rpb24gZCgpe2wuZm9yRWFjaCgoZnVuY3Rpb24odCl7cmV0dXJuIHQoKX0pKSxsPVtdfXJldHVybiBoLnNldE9wdGlvbnMoaSkudGhlbigoZnVuY3Rpb24odCl7IWMmJmkub25GaXJzdFVwZGF0ZSYmaS5vbkZpcnN0VXBkYXRlKHQpfSkpLGh9fXZhciBiaT1faSgpLHZpPV9pKHtkZWZhdWx0TW9kaWZpZXJzOltWZSxkaSxSZSx2ZV19KSx5aT1faSh7ZGVmYXVsdE1vZGlmaWVyczpbVmUsZGksUmUsdmUsaGkscmksdWksSGUsY2ldfSk7Y29uc3Qgd2k9T2JqZWN0LmZyZWV6ZShPYmplY3QuZGVmaW5lUHJvcGVydHkoe19fcHJvdG9fXzpudWxsLGFmdGVyTWFpbjpjZSxhZnRlclJlYWQ6cmUsYWZ0ZXJXcml0ZTp1ZSxhcHBseVN0eWxlczp2ZSxhcnJvdzpIZSxhdXRvOlh0LGJhc2VQbGFjZW1lbnRzOll0LGJlZm9yZU1haW46YWUsYmVmb3JlUmVhZDpzZSxiZWZvcmVXcml0ZTpoZSxib3R0b206VnQsY2xpcHBpbmdQYXJlbnRzOkp0LGNvbXB1dGVTdHlsZXM6UmUsY3JlYXRlUG9wcGVyOnlpLGNyZWF0ZVBvcHBlckJhc2U6YmksY3JlYXRlUG9wcGVyTGl0ZTp2aSxkZXRlY3RPdmVyZmxvdzpzaSxlbmQ6R3QsZXZlbnRMaXN0ZW5lcnM6VmUsZmxpcDpyaSxoaWRlOmNpLGxlZnQ6UXQsbWFpbjpsZSxtb2RpZmllclBoYXNlczpmZSxvZmZzZXQ6aGkscGxhY2VtZW50czpuZSxwb3BwZXI6dGUscG9wcGVyR2VuZXJhdG9yOl9pLHBvcHBlck9mZnNldHM6ZGkscHJldmVudE92ZXJmbG93OnVpLHJlYWQ6b2UscmVmZXJlbmNlOmVlLHJpZ2h0Okt0LHN0YXJ0OlV0LHRvcDpxdCx2YXJpYXRpb25QbGFjZW1lbnRzOmllLHZpZXdwb3J0Olp0LHdyaXRlOmRlfSxTeW1ib2wudG9TdHJpbmdUYWcse3ZhbHVlOlwiTW9kdWxlXCJ9KSksQWk9XCJkcm9wZG93blwiLEVpPVwiLmJzLmRyb3Bkb3duXCIsVGk9XCIuZGF0YS1hcGlcIixDaT1cIkFycm93VXBcIixPaT1cIkFycm93RG93blwiLHhpPWBoaWRlJHtFaX1gLGtpPWBoaWRkZW4ke0VpfWAsTGk9YHNob3cke0VpfWAsU2k9YHNob3duJHtFaX1gLERpPWBjbGljayR7RWl9JHtUaX1gLCRpPWBrZXlkb3duJHtFaX0ke1RpfWAsSWk9YGtleXVwJHtFaX0ke1RpfWAsTmk9XCJzaG93XCIsUGk9J1tkYXRhLWJzLXRvZ2dsZT1cImRyb3Bkb3duXCJdOm5vdCguZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpJyxqaT1gJHtQaX0uJHtOaX1gLE1pPVwiLmRyb3Bkb3duLW1lbnVcIixGaT1wKCk/XCJ0b3AtZW5kXCI6XCJ0b3Atc3RhcnRcIixIaT1wKCk/XCJ0b3Atc3RhcnRcIjpcInRvcC1lbmRcIixXaT1wKCk/XCJib3R0b20tZW5kXCI6XCJib3R0b20tc3RhcnRcIixCaT1wKCk/XCJib3R0b20tc3RhcnRcIjpcImJvdHRvbS1lbmRcIix6aT1wKCk/XCJsZWZ0LXN0YXJ0XCI6XCJyaWdodC1zdGFydFwiLFJpPXAoKT9cInJpZ2h0LXN0YXJ0XCI6XCJsZWZ0LXN0YXJ0XCIscWk9e2F1dG9DbG9zZTohMCxib3VuZGFyeTpcImNsaXBwaW5nUGFyZW50c1wiLGRpc3BsYXk6XCJkeW5hbWljXCIsb2Zmc2V0OlswLDJdLHBvcHBlckNvbmZpZzpudWxsLHJlZmVyZW5jZTpcInRvZ2dsZVwifSxWaT17YXV0b0Nsb3NlOlwiKGJvb2xlYW58c3RyaW5nKVwiLGJvdW5kYXJ5OlwiKHN0cmluZ3xlbGVtZW50KVwiLGRpc3BsYXk6XCJzdHJpbmdcIixvZmZzZXQ6XCIoYXJyYXl8c3RyaW5nfGZ1bmN0aW9uKVwiLHBvcHBlckNvbmZpZzpcIihudWxsfG9iamVjdHxmdW5jdGlvbilcIixyZWZlcmVuY2U6XCIoc3RyaW5nfGVsZW1lbnR8b2JqZWN0KVwifTtjbGFzcyBLaSBleHRlbmRzIFd7Y29uc3RydWN0b3IodCxlKXtzdXBlcih0LGUpLHRoaXMuX3BvcHBlcj1udWxsLHRoaXMuX3BhcmVudD10aGlzLl9lbGVtZW50LnBhcmVudE5vZGUsdGhpcy5fbWVudT16Lm5leHQodGhpcy5fZWxlbWVudCxNaSlbMF18fHoucHJldih0aGlzLl9lbGVtZW50LE1pKVswXXx8ei5maW5kT25lKE1pLHRoaXMuX3BhcmVudCksdGhpcy5faW5OYXZiYXI9dGhpcy5fZGV0ZWN0TmF2YmFyKCl9c3RhdGljIGdldCBEZWZhdWx0KCl7cmV0dXJuIHFpfXN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKXtyZXR1cm4gVml9c3RhdGljIGdldCBOQU1FKCl7cmV0dXJuIEFpfXRvZ2dsZSgpe3JldHVybiB0aGlzLl9pc1Nob3duKCk/dGhpcy5oaWRlKCk6dGhpcy5zaG93KCl9c2hvdygpe2lmKGwodGhpcy5fZWxlbWVudCl8fHRoaXMuX2lzU2hvd24oKSlyZXR1cm47Y29uc3QgdD17cmVsYXRlZFRhcmdldDp0aGlzLl9lbGVtZW50fTtpZighTi50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsTGksdCkuZGVmYXVsdFByZXZlbnRlZCl7aWYodGhpcy5fY3JlYXRlUG9wcGVyKCksXCJvbnRvdWNoc3RhcnRcImluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCYmIXRoaXMuX3BhcmVudC5jbG9zZXN0KFwiLm5hdmJhci1uYXZcIikpZm9yKGNvbnN0IHQgb2ZbXS5jb25jYXQoLi4uZG9jdW1lbnQuYm9keS5jaGlsZHJlbikpTi5vbih0LFwibW91c2VvdmVyXCIsaCk7dGhpcy5fZWxlbWVudC5mb2N1cygpLHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCEwKSx0aGlzLl9tZW51LmNsYXNzTGlzdC5hZGQoTmkpLHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChOaSksTi50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsU2ksdCl9fWhpZGUoKXtpZihsKHRoaXMuX2VsZW1lbnQpfHwhdGhpcy5faXNTaG93bigpKXJldHVybjtjb25zdCB0PXtyZWxhdGVkVGFyZ2V0OnRoaXMuX2VsZW1lbnR9O3RoaXMuX2NvbXBsZXRlSGlkZSh0KX1kaXNwb3NlKCl7dGhpcy5fcG9wcGVyJiZ0aGlzLl9wb3BwZXIuZGVzdHJveSgpLHN1cGVyLmRpc3Bvc2UoKX11cGRhdGUoKXt0aGlzLl9pbk5hdmJhcj10aGlzLl9kZXRlY3ROYXZiYXIoKSx0aGlzLl9wb3BwZXImJnRoaXMuX3BvcHBlci51cGRhdGUoKX1fY29tcGxldGVIaWRlKHQpe2lmKCFOLnRyaWdnZXIodGhpcy5fZWxlbWVudCx4aSx0KS5kZWZhdWx0UHJldmVudGVkKXtpZihcIm9udG91Y2hzdGFydFwiaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KWZvcihjb25zdCB0IG9mW10uY29uY2F0KC4uLmRvY3VtZW50LmJvZHkuY2hpbGRyZW4pKU4ub2ZmKHQsXCJtb3VzZW92ZXJcIixoKTt0aGlzLl9wb3BwZXImJnRoaXMuX3BvcHBlci5kZXN0cm95KCksdGhpcy5fbWVudS5jbGFzc0xpc3QucmVtb3ZlKE5pKSx0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoTmkpLHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLFwiZmFsc2VcIiksRi5yZW1vdmVEYXRhQXR0cmlidXRlKHRoaXMuX21lbnUsXCJwb3BwZXJcIiksTi50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsa2ksdCksdGhpcy5fZWxlbWVudC5mb2N1cygpfX1fZ2V0Q29uZmlnKHQpe2lmKFwib2JqZWN0XCI9PXR5cGVvZih0PXN1cGVyLl9nZXRDb25maWcodCkpLnJlZmVyZW5jZSYmIW8odC5yZWZlcmVuY2UpJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiB0LnJlZmVyZW5jZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QpdGhyb3cgbmV3IFR5cGVFcnJvcihgJHtBaS50b1VwcGVyQ2FzZSgpfTogT3B0aW9uIFwicmVmZXJlbmNlXCIgcHJvdmlkZWQgdHlwZSBcIm9iamVjdFwiIHdpdGhvdXQgYSByZXF1aXJlZCBcImdldEJvdW5kaW5nQ2xpZW50UmVjdFwiIG1ldGhvZC5gKTtyZXR1cm4gdH1fY3JlYXRlUG9wcGVyKCl7aWYodm9pZCAwPT09d2kpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkJvb3RzdHJhcCdzIGRyb3Bkb3ducyByZXF1aXJlIFBvcHBlciAoaHR0cHM6Ly9wb3BwZXIuanMub3JnL2RvY3MvdjIvKVwiKTtsZXQgdD10aGlzLl9lbGVtZW50O1wicGFyZW50XCI9PT10aGlzLl9jb25maWcucmVmZXJlbmNlP3Q9dGhpcy5fcGFyZW50Om8odGhpcy5fY29uZmlnLnJlZmVyZW5jZSk/dD1yKHRoaXMuX2NvbmZpZy5yZWZlcmVuY2UpOlwib2JqZWN0XCI9PXR5cGVvZiB0aGlzLl9jb25maWcucmVmZXJlbmNlJiYodD10aGlzLl9jb25maWcucmVmZXJlbmNlKTtjb25zdCBlPXRoaXMuX2dldFBvcHBlckNvbmZpZygpO3RoaXMuX3BvcHBlcj15aSh0LHRoaXMuX21lbnUsZSl9X2lzU2hvd24oKXtyZXR1cm4gdGhpcy5fbWVudS5jbGFzc0xpc3QuY29udGFpbnMoTmkpfV9nZXRQbGFjZW1lbnQoKXtjb25zdCB0PXRoaXMuX3BhcmVudDtpZih0LmNsYXNzTGlzdC5jb250YWlucyhcImRyb3BlbmRcIikpcmV0dXJuIHppO2lmKHQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZHJvcHN0YXJ0XCIpKXJldHVybiBSaTtpZih0LmNsYXNzTGlzdC5jb250YWlucyhcImRyb3B1cC1jZW50ZXJcIikpcmV0dXJuXCJ0b3BcIjtpZih0LmNsYXNzTGlzdC5jb250YWlucyhcImRyb3Bkb3duLWNlbnRlclwiKSlyZXR1cm5cImJvdHRvbVwiO2NvbnN0IGU9XCJlbmRcIj09PWdldENvbXB1dGVkU3R5bGUodGhpcy5fbWVudSkuZ2V0UHJvcGVydHlWYWx1ZShcIi0tYnMtcG9zaXRpb25cIikudHJpbSgpO3JldHVybiB0LmNsYXNzTGlzdC5jb250YWlucyhcImRyb3B1cFwiKT9lP0hpOkZpOmU/Qmk6V2l9X2RldGVjdE5hdmJhcigpe3JldHVybiBudWxsIT09dGhpcy5fZWxlbWVudC5jbG9zZXN0KFwiLm5hdmJhclwiKX1fZ2V0T2Zmc2V0KCl7Y29uc3R7b2Zmc2V0OnR9PXRoaXMuX2NvbmZpZztyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgdD90LnNwbGl0KFwiLFwiKS5tYXAoKHQ9Pk51bWJlci5wYXJzZUludCh0LDEwKSkpOlwiZnVuY3Rpb25cIj09dHlwZW9mIHQ/ZT0+dChlLHRoaXMuX2VsZW1lbnQpOnR9X2dldFBvcHBlckNvbmZpZygpe2NvbnN0IHQ9e3BsYWNlbWVudDp0aGlzLl9nZXRQbGFjZW1lbnQoKSxtb2RpZmllcnM6W3tuYW1lOlwicHJldmVudE92ZXJmbG93XCIsb3B0aW9uczp7Ym91bmRhcnk6dGhpcy5fY29uZmlnLmJvdW5kYXJ5fX0se25hbWU6XCJvZmZzZXRcIixvcHRpb25zOntvZmZzZXQ6dGhpcy5fZ2V0T2Zmc2V0KCl9fV19O3JldHVybih0aGlzLl9pbk5hdmJhcnx8XCJzdGF0aWNcIj09PXRoaXMuX2NvbmZpZy5kaXNwbGF5KSYmKEYuc2V0RGF0YUF0dHJpYnV0ZSh0aGlzLl9tZW51LFwicG9wcGVyXCIsXCJzdGF0aWNcIiksdC5tb2RpZmllcnM9W3tuYW1lOlwiYXBwbHlTdHlsZXNcIixlbmFibGVkOiExfV0pLHsuLi50LC4uLmcodGhpcy5fY29uZmlnLnBvcHBlckNvbmZpZyxbdm9pZCAwLHRdKX19X3NlbGVjdE1lbnVJdGVtKHtrZXk6dCx0YXJnZXQ6ZX0pe2NvbnN0IGk9ei5maW5kKFwiLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWl0ZW06bm90KC5kaXNhYmxlZCk6bm90KDpkaXNhYmxlZClcIix0aGlzLl9tZW51KS5maWx0ZXIoKHQ9PmEodCkpKTtpLmxlbmd0aCYmYihpLGUsdD09PU9pLCFpLmluY2x1ZGVzKGUpKS5mb2N1cygpfXN0YXRpYyBqUXVlcnlJbnRlcmZhY2UodCl7cmV0dXJuIHRoaXMuZWFjaCgoZnVuY3Rpb24oKXtjb25zdCBlPUtpLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcyx0KTtpZihcInN0cmluZ1wiPT10eXBlb2YgdCl7aWYodm9pZCAwPT09ZVt0XSl0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke3R9XCJgKTtlW3RdKCl9fSkpfXN0YXRpYyBjbGVhck1lbnVzKHQpe2lmKDI9PT10LmJ1dHRvbnx8XCJrZXl1cFwiPT09dC50eXBlJiZcIlRhYlwiIT09dC5rZXkpcmV0dXJuO2NvbnN0IGU9ei5maW5kKGppKTtmb3IoY29uc3QgaSBvZiBlKXtjb25zdCBlPUtpLmdldEluc3RhbmNlKGkpO2lmKCFlfHwhMT09PWUuX2NvbmZpZy5hdXRvQ2xvc2UpY29udGludWU7Y29uc3Qgbj10LmNvbXBvc2VkUGF0aCgpLHM9bi5pbmNsdWRlcyhlLl9tZW51KTtpZihuLmluY2x1ZGVzKGUuX2VsZW1lbnQpfHxcImluc2lkZVwiPT09ZS5fY29uZmlnLmF1dG9DbG9zZSYmIXN8fFwib3V0c2lkZVwiPT09ZS5fY29uZmlnLmF1dG9DbG9zZSYmcyljb250aW51ZTtpZihlLl9tZW51LmNvbnRhaW5zKHQudGFyZ2V0KSYmKFwia2V5dXBcIj09PXQudHlwZSYmXCJUYWJcIj09PXQua2V5fHwvaW5wdXR8c2VsZWN0fG9wdGlvbnx0ZXh0YXJlYXxmb3JtL2kudGVzdCh0LnRhcmdldC50YWdOYW1lKSkpY29udGludWU7Y29uc3Qgbz17cmVsYXRlZFRhcmdldDplLl9lbGVtZW50fTtcImNsaWNrXCI9PT10LnR5cGUmJihvLmNsaWNrRXZlbnQ9dCksZS5fY29tcGxldGVIaWRlKG8pfX1zdGF0aWMgZGF0YUFwaUtleWRvd25IYW5kbGVyKHQpe2NvbnN0IGU9L2lucHV0fHRleHRhcmVhL2kudGVzdCh0LnRhcmdldC50YWdOYW1lKSxpPVwiRXNjYXBlXCI9PT10LmtleSxuPVtDaSxPaV0uaW5jbHVkZXModC5rZXkpO2lmKCFuJiYhaSlyZXR1cm47aWYoZSYmIWkpcmV0dXJuO3QucHJldmVudERlZmF1bHQoKTtjb25zdCBzPXRoaXMubWF0Y2hlcyhQaSk/dGhpczp6LnByZXYodGhpcyxQaSlbMF18fHoubmV4dCh0aGlzLFBpKVswXXx8ei5maW5kT25lKFBpLHQuZGVsZWdhdGVUYXJnZXQucGFyZW50Tm9kZSksbz1LaS5nZXRPckNyZWF0ZUluc3RhbmNlKHMpO2lmKG4pcmV0dXJuIHQuc3RvcFByb3BhZ2F0aW9uKCksby5zaG93KCksdm9pZCBvLl9zZWxlY3RNZW51SXRlbSh0KTtvLl9pc1Nob3duKCkmJih0LnN0b3BQcm9wYWdhdGlvbigpLG8uaGlkZSgpLHMuZm9jdXMoKSl9fU4ub24oZG9jdW1lbnQsJGksUGksS2kuZGF0YUFwaUtleWRvd25IYW5kbGVyKSxOLm9uKGRvY3VtZW50LCRpLE1pLEtpLmRhdGFBcGlLZXlkb3duSGFuZGxlciksTi5vbihkb2N1bWVudCxEaSxLaS5jbGVhck1lbnVzKSxOLm9uKGRvY3VtZW50LElpLEtpLmNsZWFyTWVudXMpLE4ub24oZG9jdW1lbnQsRGksUGksKGZ1bmN0aW9uKHQpe3QucHJldmVudERlZmF1bHQoKSxLaS5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMpLnRvZ2dsZSgpfSkpLG0oS2kpO2NvbnN0IFFpPVwiYmFja2Ryb3BcIixYaT1cInNob3dcIixZaT1gbW91c2Vkb3duLmJzLiR7UWl9YCxVaT17Y2xhc3NOYW1lOlwibW9kYWwtYmFja2Ryb3BcIixjbGlja0NhbGxiYWNrOm51bGwsaXNBbmltYXRlZDohMSxpc1Zpc2libGU6ITAscm9vdEVsZW1lbnQ6XCJib2R5XCJ9LEdpPXtjbGFzc05hbWU6XCJzdHJpbmdcIixjbGlja0NhbGxiYWNrOlwiKGZ1bmN0aW9ufG51bGwpXCIsaXNBbmltYXRlZDpcImJvb2xlYW5cIixpc1Zpc2libGU6XCJib29sZWFuXCIscm9vdEVsZW1lbnQ6XCIoZWxlbWVudHxzdHJpbmcpXCJ9O2NsYXNzIEppIGV4dGVuZHMgSHtjb25zdHJ1Y3Rvcih0KXtzdXBlcigpLHRoaXMuX2NvbmZpZz10aGlzLl9nZXRDb25maWcodCksdGhpcy5faXNBcHBlbmRlZD0hMSx0aGlzLl9lbGVtZW50PW51bGx9c3RhdGljIGdldCBEZWZhdWx0KCl7cmV0dXJuIFVpfXN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKXtyZXR1cm4gR2l9c3RhdGljIGdldCBOQU1FKCl7cmV0dXJuIFFpfXNob3codCl7aWYoIXRoaXMuX2NvbmZpZy5pc1Zpc2libGUpcmV0dXJuIHZvaWQgZyh0KTt0aGlzLl9hcHBlbmQoKTtjb25zdCBlPXRoaXMuX2dldEVsZW1lbnQoKTt0aGlzLl9jb25maWcuaXNBbmltYXRlZCYmZChlKSxlLmNsYXNzTGlzdC5hZGQoWGkpLHRoaXMuX2VtdWxhdGVBbmltYXRpb24oKCgpPT57Zyh0KX0pKX1oaWRlKHQpe3RoaXMuX2NvbmZpZy5pc1Zpc2libGU/KHRoaXMuX2dldEVsZW1lbnQoKS5jbGFzc0xpc3QucmVtb3ZlKFhpKSx0aGlzLl9lbXVsYXRlQW5pbWF0aW9uKCgoKT0+e3RoaXMuZGlzcG9zZSgpLGcodCl9KSkpOmcodCl9ZGlzcG9zZSgpe3RoaXMuX2lzQXBwZW5kZWQmJihOLm9mZih0aGlzLl9lbGVtZW50LFlpKSx0aGlzLl9lbGVtZW50LnJlbW92ZSgpLHRoaXMuX2lzQXBwZW5kZWQ9ITEpfV9nZXRFbGVtZW50KCl7aWYoIXRoaXMuX2VsZW1lbnQpe2NvbnN0IHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTt0LmNsYXNzTmFtZT10aGlzLl9jb25maWcuY2xhc3NOYW1lLHRoaXMuX2NvbmZpZy5pc0FuaW1hdGVkJiZ0LmNsYXNzTGlzdC5hZGQoXCJmYWRlXCIpLHRoaXMuX2VsZW1lbnQ9dH1yZXR1cm4gdGhpcy5fZWxlbWVudH1fY29uZmlnQWZ0ZXJNZXJnZSh0KXtyZXR1cm4gdC5yb290RWxlbWVudD1yKHQucm9vdEVsZW1lbnQpLHR9X2FwcGVuZCgpe2lmKHRoaXMuX2lzQXBwZW5kZWQpcmV0dXJuO2NvbnN0IHQ9dGhpcy5fZ2V0RWxlbWVudCgpO3RoaXMuX2NvbmZpZy5yb290RWxlbWVudC5hcHBlbmQodCksTi5vbih0LFlpLCgoKT0+e2codGhpcy5fY29uZmlnLmNsaWNrQ2FsbGJhY2spfSkpLHRoaXMuX2lzQXBwZW5kZWQ9ITB9X2VtdWxhdGVBbmltYXRpb24odCl7Xyh0LHRoaXMuX2dldEVsZW1lbnQoKSx0aGlzLl9jb25maWcuaXNBbmltYXRlZCl9fWNvbnN0IFppPVwiLmJzLmZvY3VzdHJhcFwiLHRuPWBmb2N1c2luJHtaaX1gLGVuPWBrZXlkb3duLnRhYiR7Wml9YCxubj1cImJhY2t3YXJkXCIsc249e2F1dG9mb2N1czohMCx0cmFwRWxlbWVudDpudWxsfSxvbj17YXV0b2ZvY3VzOlwiYm9vbGVhblwiLHRyYXBFbGVtZW50OlwiZWxlbWVudFwifTtjbGFzcyBybiBleHRlbmRzIEh7Y29uc3RydWN0b3IodCl7c3VwZXIoKSx0aGlzLl9jb25maWc9dGhpcy5fZ2V0Q29uZmlnKHQpLHRoaXMuX2lzQWN0aXZlPSExLHRoaXMuX2xhc3RUYWJOYXZEaXJlY3Rpb249bnVsbH1zdGF0aWMgZ2V0IERlZmF1bHQoKXtyZXR1cm4gc259c3RhdGljIGdldCBEZWZhdWx0VHlwZSgpe3JldHVybiBvbn1zdGF0aWMgZ2V0IE5BTUUoKXtyZXR1cm5cImZvY3VzdHJhcFwifWFjdGl2YXRlKCl7dGhpcy5faXNBY3RpdmV8fCh0aGlzLl9jb25maWcuYXV0b2ZvY3VzJiZ0aGlzLl9jb25maWcudHJhcEVsZW1lbnQuZm9jdXMoKSxOLm9mZihkb2N1bWVudCxaaSksTi5vbihkb2N1bWVudCx0biwodD0+dGhpcy5faGFuZGxlRm9jdXNpbih0KSkpLE4ub24oZG9jdW1lbnQsZW4sKHQ9PnRoaXMuX2hhbmRsZUtleWRvd24odCkpKSx0aGlzLl9pc0FjdGl2ZT0hMCl9ZGVhY3RpdmF0ZSgpe3RoaXMuX2lzQWN0aXZlJiYodGhpcy5faXNBY3RpdmU9ITEsTi5vZmYoZG9jdW1lbnQsWmkpKX1faGFuZGxlRm9jdXNpbih0KXtjb25zdHt0cmFwRWxlbWVudDplfT10aGlzLl9jb25maWc7aWYodC50YXJnZXQ9PT1kb2N1bWVudHx8dC50YXJnZXQ9PT1lfHxlLmNvbnRhaW5zKHQudGFyZ2V0KSlyZXR1cm47Y29uc3QgaT16LmZvY3VzYWJsZUNoaWxkcmVuKGUpOzA9PT1pLmxlbmd0aD9lLmZvY3VzKCk6dGhpcy5fbGFzdFRhYk5hdkRpcmVjdGlvbj09PW5uP2lbaS5sZW5ndGgtMV0uZm9jdXMoKTppWzBdLmZvY3VzKCl9X2hhbmRsZUtleWRvd24odCl7XCJUYWJcIj09PXQua2V5JiYodGhpcy5fbGFzdFRhYk5hdkRpcmVjdGlvbj10LnNoaWZ0S2V5P25uOlwiZm9yd2FyZFwiKX19Y29uc3QgYW49XCIuZml4ZWQtdG9wLCAuZml4ZWQtYm90dG9tLCAuaXMtZml4ZWQsIC5zdGlja3ktdG9wXCIsbG49XCIuc3RpY2t5LXRvcFwiLGNuPVwicGFkZGluZy1yaWdodFwiLGhuPVwibWFyZ2luLXJpZ2h0XCI7Y2xhc3MgZG57Y29uc3RydWN0b3IoKXt0aGlzLl9lbGVtZW50PWRvY3VtZW50LmJvZHl9Z2V0V2lkdGgoKXtjb25zdCB0PWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aDtyZXR1cm4gTWF0aC5hYnMod2luZG93LmlubmVyV2lkdGgtdCl9aGlkZSgpe2NvbnN0IHQ9dGhpcy5nZXRXaWR0aCgpO3RoaXMuX2Rpc2FibGVPdmVyRmxvdygpLHRoaXMuX3NldEVsZW1lbnRBdHRyaWJ1dGVzKHRoaXMuX2VsZW1lbnQsY24sKGU9PmUrdCkpLHRoaXMuX3NldEVsZW1lbnRBdHRyaWJ1dGVzKGFuLGNuLChlPT5lK3QpKSx0aGlzLl9zZXRFbGVtZW50QXR0cmlidXRlcyhsbixobiwoZT0+ZS10KSl9cmVzZXQoKXt0aGlzLl9yZXNldEVsZW1lbnRBdHRyaWJ1dGVzKHRoaXMuX2VsZW1lbnQsXCJvdmVyZmxvd1wiKSx0aGlzLl9yZXNldEVsZW1lbnRBdHRyaWJ1dGVzKHRoaXMuX2VsZW1lbnQsY24pLHRoaXMuX3Jlc2V0RWxlbWVudEF0dHJpYnV0ZXMoYW4sY24pLHRoaXMuX3Jlc2V0RWxlbWVudEF0dHJpYnV0ZXMobG4saG4pfWlzT3ZlcmZsb3dpbmcoKXtyZXR1cm4gdGhpcy5nZXRXaWR0aCgpPjB9X2Rpc2FibGVPdmVyRmxvdygpe3RoaXMuX3NhdmVJbml0aWFsQXR0cmlidXRlKHRoaXMuX2VsZW1lbnQsXCJvdmVyZmxvd1wiKSx0aGlzLl9lbGVtZW50LnN0eWxlLm92ZXJmbG93PVwiaGlkZGVuXCJ9X3NldEVsZW1lbnRBdHRyaWJ1dGVzKHQsZSxpKXtjb25zdCBuPXRoaXMuZ2V0V2lkdGgoKTt0aGlzLl9hcHBseU1hbmlwdWxhdGlvbkNhbGxiYWNrKHQsKHQ9PntpZih0IT09dGhpcy5fZWxlbWVudCYmd2luZG93LmlubmVyV2lkdGg+dC5jbGllbnRXaWR0aCtuKXJldHVybjt0aGlzLl9zYXZlSW5pdGlhbEF0dHJpYnV0ZSh0LGUpO2NvbnN0IHM9d2luZG93LmdldENvbXB1dGVkU3R5bGUodCkuZ2V0UHJvcGVydHlWYWx1ZShlKTt0LnN0eWxlLnNldFByb3BlcnR5KGUsYCR7aShOdW1iZXIucGFyc2VGbG9hdChzKSl9cHhgKX0pKX1fc2F2ZUluaXRpYWxBdHRyaWJ1dGUodCxlKXtjb25zdCBpPXQuc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShlKTtpJiZGLnNldERhdGFBdHRyaWJ1dGUodCxlLGkpfV9yZXNldEVsZW1lbnRBdHRyaWJ1dGVzKHQsZSl7dGhpcy5fYXBwbHlNYW5pcHVsYXRpb25DYWxsYmFjayh0LCh0PT57Y29uc3QgaT1GLmdldERhdGFBdHRyaWJ1dGUodCxlKTtudWxsIT09aT8oRi5yZW1vdmVEYXRhQXR0cmlidXRlKHQsZSksdC5zdHlsZS5zZXRQcm9wZXJ0eShlLGkpKTp0LnN0eWxlLnJlbW92ZVByb3BlcnR5KGUpfSkpfV9hcHBseU1hbmlwdWxhdGlvbkNhbGxiYWNrKHQsZSl7aWYobyh0KSllKHQpO2Vsc2UgZm9yKGNvbnN0IGkgb2Ygei5maW5kKHQsdGhpcy5fZWxlbWVudCkpZShpKX19Y29uc3QgdW49XCIuYnMubW9kYWxcIixmbj1gaGlkZSR7dW59YCxwbj1gaGlkZVByZXZlbnRlZCR7dW59YCxtbj1gaGlkZGVuJHt1bn1gLGduPWBzaG93JHt1bn1gLF9uPWBzaG93biR7dW59YCxibj1gcmVzaXplJHt1bn1gLHZuPWBjbGljay5kaXNtaXNzJHt1bn1gLHluPWBtb3VzZWRvd24uZGlzbWlzcyR7dW59YCx3bj1ga2V5ZG93bi5kaXNtaXNzJHt1bn1gLEFuPWBjbGljayR7dW59LmRhdGEtYXBpYCxFbj1cIm1vZGFsLW9wZW5cIixUbj1cInNob3dcIixDbj1cIm1vZGFsLXN0YXRpY1wiLE9uPXtiYWNrZHJvcDohMCxmb2N1czohMCxrZXlib2FyZDohMH0seG49e2JhY2tkcm9wOlwiKGJvb2xlYW58c3RyaW5nKVwiLGZvY3VzOlwiYm9vbGVhblwiLGtleWJvYXJkOlwiYm9vbGVhblwifTtjbGFzcyBrbiBleHRlbmRzIFd7Y29uc3RydWN0b3IodCxlKXtzdXBlcih0LGUpLHRoaXMuX2RpYWxvZz16LmZpbmRPbmUoXCIubW9kYWwtZGlhbG9nXCIsdGhpcy5fZWxlbWVudCksdGhpcy5fYmFja2Ryb3A9dGhpcy5faW5pdGlhbGl6ZUJhY2tEcm9wKCksdGhpcy5fZm9jdXN0cmFwPXRoaXMuX2luaXRpYWxpemVGb2N1c1RyYXAoKSx0aGlzLl9pc1Nob3duPSExLHRoaXMuX2lzVHJhbnNpdGlvbmluZz0hMSx0aGlzLl9zY3JvbGxCYXI9bmV3IGRuLHRoaXMuX2FkZEV2ZW50TGlzdGVuZXJzKCl9c3RhdGljIGdldCBEZWZhdWx0KCl7cmV0dXJuIE9ufXN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKXtyZXR1cm4geG59c3RhdGljIGdldCBOQU1FKCl7cmV0dXJuXCJtb2RhbFwifXRvZ2dsZSh0KXtyZXR1cm4gdGhpcy5faXNTaG93bj90aGlzLmhpZGUoKTp0aGlzLnNob3codCl9c2hvdyh0KXt0aGlzLl9pc1Nob3dufHx0aGlzLl9pc1RyYW5zaXRpb25pbmd8fE4udHJpZ2dlcih0aGlzLl9lbGVtZW50LGduLHtyZWxhdGVkVGFyZ2V0OnR9KS5kZWZhdWx0UHJldmVudGVkfHwodGhpcy5faXNTaG93bj0hMCx0aGlzLl9pc1RyYW5zaXRpb25pbmc9ITAsdGhpcy5fc2Nyb2xsQmFyLmhpZGUoKSxkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoRW4pLHRoaXMuX2FkanVzdERpYWxvZygpLHRoaXMuX2JhY2tkcm9wLnNob3coKCgpPT50aGlzLl9zaG93RWxlbWVudCh0KSkpKX1oaWRlKCl7dGhpcy5faXNTaG93biYmIXRoaXMuX2lzVHJhbnNpdGlvbmluZyYmKE4udHJpZ2dlcih0aGlzLl9lbGVtZW50LGZuKS5kZWZhdWx0UHJldmVudGVkfHwodGhpcy5faXNTaG93bj0hMSx0aGlzLl9pc1RyYW5zaXRpb25pbmc9ITAsdGhpcy5fZm9jdXN0cmFwLmRlYWN0aXZhdGUoKSx0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoVG4pLHRoaXMuX3F1ZXVlQ2FsbGJhY2soKCgpPT50aGlzLl9oaWRlTW9kYWwoKSksdGhpcy5fZWxlbWVudCx0aGlzLl9pc0FuaW1hdGVkKCkpKSl9ZGlzcG9zZSgpe04ub2ZmKHdpbmRvdyx1biksTi5vZmYodGhpcy5fZGlhbG9nLHVuKSx0aGlzLl9iYWNrZHJvcC5kaXNwb3NlKCksdGhpcy5fZm9jdXN0cmFwLmRlYWN0aXZhdGUoKSxzdXBlci5kaXNwb3NlKCl9aGFuZGxlVXBkYXRlKCl7dGhpcy5fYWRqdXN0RGlhbG9nKCl9X2luaXRpYWxpemVCYWNrRHJvcCgpe3JldHVybiBuZXcgSmkoe2lzVmlzaWJsZTpCb29sZWFuKHRoaXMuX2NvbmZpZy5iYWNrZHJvcCksaXNBbmltYXRlZDp0aGlzLl9pc0FuaW1hdGVkKCl9KX1faW5pdGlhbGl6ZUZvY3VzVHJhcCgpe3JldHVybiBuZXcgcm4oe3RyYXBFbGVtZW50OnRoaXMuX2VsZW1lbnR9KX1fc2hvd0VsZW1lbnQodCl7ZG9jdW1lbnQuYm9keS5jb250YWlucyh0aGlzLl9lbGVtZW50KXx8ZG9jdW1lbnQuYm9keS5hcHBlbmQodGhpcy5fZWxlbWVudCksdGhpcy5fZWxlbWVudC5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIix0aGlzLl9lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIpLHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKFwiYXJpYS1tb2RhbFwiLCEwKSx0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZShcInJvbGVcIixcImRpYWxvZ1wiKSx0aGlzLl9lbGVtZW50LnNjcm9sbFRvcD0wO2NvbnN0IGU9ei5maW5kT25lKFwiLm1vZGFsLWJvZHlcIix0aGlzLl9kaWFsb2cpO2UmJihlLnNjcm9sbFRvcD0wKSxkKHRoaXMuX2VsZW1lbnQpLHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChUbiksdGhpcy5fcXVldWVDYWxsYmFjaygoKCk9Pnt0aGlzLl9jb25maWcuZm9jdXMmJnRoaXMuX2ZvY3VzdHJhcC5hY3RpdmF0ZSgpLHRoaXMuX2lzVHJhbnNpdGlvbmluZz0hMSxOLnRyaWdnZXIodGhpcy5fZWxlbWVudCxfbix7cmVsYXRlZFRhcmdldDp0fSl9KSx0aGlzLl9kaWFsb2csdGhpcy5faXNBbmltYXRlZCgpKX1fYWRkRXZlbnRMaXN0ZW5lcnMoKXtOLm9uKHRoaXMuX2VsZW1lbnQsd24sKHQ9PntcIkVzY2FwZVwiPT09dC5rZXkmJih0aGlzLl9jb25maWcua2V5Ym9hcmQ/dGhpcy5oaWRlKCk6dGhpcy5fdHJpZ2dlckJhY2tkcm9wVHJhbnNpdGlvbigpKX0pKSxOLm9uKHdpbmRvdyxibiwoKCk9Pnt0aGlzLl9pc1Nob3duJiYhdGhpcy5faXNUcmFuc2l0aW9uaW5nJiZ0aGlzLl9hZGp1c3REaWFsb2coKX0pKSxOLm9uKHRoaXMuX2VsZW1lbnQseW4sKHQ9PntOLm9uZSh0aGlzLl9lbGVtZW50LHZuLChlPT57dGhpcy5fZWxlbWVudD09PXQudGFyZ2V0JiZ0aGlzLl9lbGVtZW50PT09ZS50YXJnZXQmJihcInN0YXRpY1wiIT09dGhpcy5fY29uZmlnLmJhY2tkcm9wP3RoaXMuX2NvbmZpZy5iYWNrZHJvcCYmdGhpcy5oaWRlKCk6dGhpcy5fdHJpZ2dlckJhY2tkcm9wVHJhbnNpdGlvbigpKX0pKX0pKX1faGlkZU1vZGFsKCl7dGhpcy5fZWxlbWVudC5zdHlsZS5kaXNwbGF5PVwibm9uZVwiLHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIiwhMCksdGhpcy5fZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoXCJhcmlhLW1vZGFsXCIpLHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKFwicm9sZVwiKSx0aGlzLl9pc1RyYW5zaXRpb25pbmc9ITEsdGhpcy5fYmFja2Ryb3AuaGlkZSgoKCk9Pntkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoRW4pLHRoaXMuX3Jlc2V0QWRqdXN0bWVudHMoKSx0aGlzLl9zY3JvbGxCYXIucmVzZXQoKSxOLnRyaWdnZXIodGhpcy5fZWxlbWVudCxtbil9KSl9X2lzQW5pbWF0ZWQoKXtyZXR1cm4gdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJmYWRlXCIpfV90cmlnZ2VyQmFja2Ryb3BUcmFuc2l0aW9uKCl7aWYoTi50cmlnZ2VyKHRoaXMuX2VsZW1lbnQscG4pLmRlZmF1bHRQcmV2ZW50ZWQpcmV0dXJuO2NvbnN0IHQ9dGhpcy5fZWxlbWVudC5zY3JvbGxIZWlnaHQ+ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCxlPXRoaXMuX2VsZW1lbnQuc3R5bGUub3ZlcmZsb3dZO1wiaGlkZGVuXCI9PT1lfHx0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDbil8fCh0fHwodGhpcy5fZWxlbWVudC5zdHlsZS5vdmVyZmxvd1k9XCJoaWRkZW5cIiksdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENuKSx0aGlzLl9xdWV1ZUNhbGxiYWNrKCgoKT0+e3RoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDbiksdGhpcy5fcXVldWVDYWxsYmFjaygoKCk9Pnt0aGlzLl9lbGVtZW50LnN0eWxlLm92ZXJmbG93WT1lfSksdGhpcy5fZGlhbG9nKX0pLHRoaXMuX2RpYWxvZyksdGhpcy5fZWxlbWVudC5mb2N1cygpKX1fYWRqdXN0RGlhbG9nKCl7Y29uc3QgdD10aGlzLl9lbGVtZW50LnNjcm9sbEhlaWdodD5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LGU9dGhpcy5fc2Nyb2xsQmFyLmdldFdpZHRoKCksaT1lPjA7aWYoaSYmIXQpe2NvbnN0IHQ9cCgpP1wicGFkZGluZ0xlZnRcIjpcInBhZGRpbmdSaWdodFwiO3RoaXMuX2VsZW1lbnQuc3R5bGVbdF09YCR7ZX1weGB9aWYoIWkmJnQpe2NvbnN0IHQ9cCgpP1wicGFkZGluZ1JpZ2h0XCI6XCJwYWRkaW5nTGVmdFwiO3RoaXMuX2VsZW1lbnQuc3R5bGVbdF09YCR7ZX1weGB9fV9yZXNldEFkanVzdG1lbnRzKCl7dGhpcy5fZWxlbWVudC5zdHlsZS5wYWRkaW5nTGVmdD1cIlwiLHRoaXMuX2VsZW1lbnQuc3R5bGUucGFkZGluZ1JpZ2h0PVwiXCJ9c3RhdGljIGpRdWVyeUludGVyZmFjZSh0LGUpe3JldHVybiB0aGlzLmVhY2goKGZ1bmN0aW9uKCl7Y29uc3QgaT1rbi5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMsdCk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQpe2lmKHZvaWQgMD09PWlbdF0pdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHt0fVwiYCk7aVt0XShlKX19KSl9fU4ub24oZG9jdW1lbnQsQW4sJ1tkYXRhLWJzLXRvZ2dsZT1cIm1vZGFsXCJdJywoZnVuY3Rpb24odCl7Y29uc3QgZT16LmdldEVsZW1lbnRGcm9tU2VsZWN0b3IodGhpcyk7W1wiQVwiLFwiQVJFQVwiXS5pbmNsdWRlcyh0aGlzLnRhZ05hbWUpJiZ0LnByZXZlbnREZWZhdWx0KCksTi5vbmUoZSxnbiwodD0+e3QuZGVmYXVsdFByZXZlbnRlZHx8Ti5vbmUoZSxtbiwoKCk9PnthKHRoaXMpJiZ0aGlzLmZvY3VzKCl9KSl9KSk7Y29uc3QgaT16LmZpbmRPbmUoXCIubW9kYWwuc2hvd1wiKTtpJiZrbi5nZXRJbnN0YW5jZShpKS5oaWRlKCksa24uZ2V0T3JDcmVhdGVJbnN0YW5jZShlKS50b2dnbGUodGhpcyl9KSksUihrbiksbShrbik7Y29uc3QgTG49XCIuYnMub2ZmY2FudmFzXCIsU249XCIuZGF0YS1hcGlcIixEbj1gbG9hZCR7TG59JHtTbn1gLCRuPVwic2hvd1wiLEluPVwic2hvd2luZ1wiLE5uPVwiaGlkaW5nXCIsUG49XCIub2ZmY2FudmFzLnNob3dcIixqbj1gc2hvdyR7TG59YCxNbj1gc2hvd24ke0xufWAsRm49YGhpZGUke0xufWAsSG49YGhpZGVQcmV2ZW50ZWQke0xufWAsV249YGhpZGRlbiR7TG59YCxCbj1gcmVzaXplJHtMbn1gLHpuPWBjbGljayR7TG59JHtTbn1gLFJuPWBrZXlkb3duLmRpc21pc3Mke0xufWAscW49e2JhY2tkcm9wOiEwLGtleWJvYXJkOiEwLHNjcm9sbDohMX0sVm49e2JhY2tkcm9wOlwiKGJvb2xlYW58c3RyaW5nKVwiLGtleWJvYXJkOlwiYm9vbGVhblwiLHNjcm9sbDpcImJvb2xlYW5cIn07Y2xhc3MgS24gZXh0ZW5kcyBXe2NvbnN0cnVjdG9yKHQsZSl7c3VwZXIodCxlKSx0aGlzLl9pc1Nob3duPSExLHRoaXMuX2JhY2tkcm9wPXRoaXMuX2luaXRpYWxpemVCYWNrRHJvcCgpLHRoaXMuX2ZvY3VzdHJhcD10aGlzLl9pbml0aWFsaXplRm9jdXNUcmFwKCksdGhpcy5fYWRkRXZlbnRMaXN0ZW5lcnMoKX1zdGF0aWMgZ2V0IERlZmF1bHQoKXtyZXR1cm4gcW59c3RhdGljIGdldCBEZWZhdWx0VHlwZSgpe3JldHVybiBWbn1zdGF0aWMgZ2V0IE5BTUUoKXtyZXR1cm5cIm9mZmNhbnZhc1wifXRvZ2dsZSh0KXtyZXR1cm4gdGhpcy5faXNTaG93bj90aGlzLmhpZGUoKTp0aGlzLnNob3codCl9c2hvdyh0KXt0aGlzLl9pc1Nob3dufHxOLnRyaWdnZXIodGhpcy5fZWxlbWVudCxqbix7cmVsYXRlZFRhcmdldDp0fSkuZGVmYXVsdFByZXZlbnRlZHx8KHRoaXMuX2lzU2hvd249ITAsdGhpcy5fYmFja2Ryb3Auc2hvdygpLHRoaXMuX2NvbmZpZy5zY3JvbGx8fChuZXcgZG4pLmhpZGUoKSx0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZShcImFyaWEtbW9kYWxcIiwhMCksdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsXCJkaWFsb2dcIiksdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKEluKSx0aGlzLl9xdWV1ZUNhbGxiYWNrKCgoKT0+e3RoaXMuX2NvbmZpZy5zY3JvbGwmJiF0aGlzLl9jb25maWcuYmFja2Ryb3B8fHRoaXMuX2ZvY3VzdHJhcC5hY3RpdmF0ZSgpLHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZCgkbiksdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKEluKSxOLnRyaWdnZXIodGhpcy5fZWxlbWVudCxNbix7cmVsYXRlZFRhcmdldDp0fSl9KSx0aGlzLl9lbGVtZW50LCEwKSl9aGlkZSgpe3RoaXMuX2lzU2hvd24mJihOLnRyaWdnZXIodGhpcy5fZWxlbWVudCxGbikuZGVmYXVsdFByZXZlbnRlZHx8KHRoaXMuX2ZvY3VzdHJhcC5kZWFjdGl2YXRlKCksdGhpcy5fZWxlbWVudC5ibHVyKCksdGhpcy5faXNTaG93bj0hMSx0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoTm4pLHRoaXMuX2JhY2tkcm9wLmhpZGUoKSx0aGlzLl9xdWV1ZUNhbGxiYWNrKCgoKT0+e3RoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgkbixObiksdGhpcy5fZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoXCJhcmlhLW1vZGFsXCIpLHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKFwicm9sZVwiKSx0aGlzLl9jb25maWcuc2Nyb2xsfHwobmV3IGRuKS5yZXNldCgpLE4udHJpZ2dlcih0aGlzLl9lbGVtZW50LFduKX0pLHRoaXMuX2VsZW1lbnQsITApKSl9ZGlzcG9zZSgpe3RoaXMuX2JhY2tkcm9wLmRpc3Bvc2UoKSx0aGlzLl9mb2N1c3RyYXAuZGVhY3RpdmF0ZSgpLHN1cGVyLmRpc3Bvc2UoKX1faW5pdGlhbGl6ZUJhY2tEcm9wKCl7Y29uc3QgdD1Cb29sZWFuKHRoaXMuX2NvbmZpZy5iYWNrZHJvcCk7cmV0dXJuIG5ldyBKaSh7Y2xhc3NOYW1lOlwib2ZmY2FudmFzLWJhY2tkcm9wXCIsaXNWaXNpYmxlOnQsaXNBbmltYXRlZDohMCxyb290RWxlbWVudDp0aGlzLl9lbGVtZW50LnBhcmVudE5vZGUsY2xpY2tDYWxsYmFjazp0PygpPT57XCJzdGF0aWNcIiE9PXRoaXMuX2NvbmZpZy5iYWNrZHJvcD90aGlzLmhpZGUoKTpOLnRyaWdnZXIodGhpcy5fZWxlbWVudCxIbil9Om51bGx9KX1faW5pdGlhbGl6ZUZvY3VzVHJhcCgpe3JldHVybiBuZXcgcm4oe3RyYXBFbGVtZW50OnRoaXMuX2VsZW1lbnR9KX1fYWRkRXZlbnRMaXN0ZW5lcnMoKXtOLm9uKHRoaXMuX2VsZW1lbnQsUm4sKHQ9PntcIkVzY2FwZVwiPT09dC5rZXkmJih0aGlzLl9jb25maWcua2V5Ym9hcmQ/dGhpcy5oaWRlKCk6Ti50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsSG4pKX0pKX1zdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKHQpe3JldHVybiB0aGlzLmVhY2goKGZ1bmN0aW9uKCl7Y29uc3QgZT1Lbi5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMsdCk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQpe2lmKHZvaWQgMD09PWVbdF18fHQuc3RhcnRzV2l0aChcIl9cIil8fFwiY29uc3RydWN0b3JcIj09PXQpdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHt0fVwiYCk7ZVt0XSh0aGlzKX19KSl9fU4ub24oZG9jdW1lbnQsem4sJ1tkYXRhLWJzLXRvZ2dsZT1cIm9mZmNhbnZhc1wiXScsKGZ1bmN0aW9uKHQpe2NvbnN0IGU9ei5nZXRFbGVtZW50RnJvbVNlbGVjdG9yKHRoaXMpO2lmKFtcIkFcIixcIkFSRUFcIl0uaW5jbHVkZXModGhpcy50YWdOYW1lKSYmdC5wcmV2ZW50RGVmYXVsdCgpLGwodGhpcykpcmV0dXJuO04ub25lKGUsV24sKCgpPT57YSh0aGlzKSYmdGhpcy5mb2N1cygpfSkpO2NvbnN0IGk9ei5maW5kT25lKFBuKTtpJiZpIT09ZSYmS24uZ2V0SW5zdGFuY2UoaSkuaGlkZSgpLEtuLmdldE9yQ3JlYXRlSW5zdGFuY2UoZSkudG9nZ2xlKHRoaXMpfSkpLE4ub24od2luZG93LERuLCgoKT0+e2Zvcihjb25zdCB0IG9mIHouZmluZChQbikpS24uZ2V0T3JDcmVhdGVJbnN0YW5jZSh0KS5zaG93KCl9KSksTi5vbih3aW5kb3csQm4sKCgpPT57Zm9yKGNvbnN0IHQgb2Ygei5maW5kKFwiW2FyaWEtbW9kYWxdW2NsYXNzKj1zaG93XVtjbGFzcyo9b2ZmY2FudmFzLV1cIikpXCJmaXhlZFwiIT09Z2V0Q29tcHV0ZWRTdHlsZSh0KS5wb3NpdGlvbiYmS24uZ2V0T3JDcmVhdGVJbnN0YW5jZSh0KS5oaWRlKCl9KSksUihLbiksbShLbik7Y29uc3QgUW49e1wiKlwiOltcImNsYXNzXCIsXCJkaXJcIixcImlkXCIsXCJsYW5nXCIsXCJyb2xlXCIsL15hcmlhLVtcXHctXSokL2ldLGE6W1widGFyZ2V0XCIsXCJocmVmXCIsXCJ0aXRsZVwiLFwicmVsXCJdLGFyZWE6W10sYjpbXSxicjpbXSxjb2w6W10sY29kZTpbXSxkZDpbXSxkaXY6W10sZGw6W10sZHQ6W10sZW06W10saHI6W10saDE6W10saDI6W10saDM6W10saDQ6W10saDU6W10saDY6W10saTpbXSxpbWc6W1wic3JjXCIsXCJzcmNzZXRcIixcImFsdFwiLFwidGl0bGVcIixcIndpZHRoXCIsXCJoZWlnaHRcIl0sbGk6W10sb2w6W10scDpbXSxwcmU6W10sczpbXSxzbWFsbDpbXSxzcGFuOltdLHN1YjpbXSxzdXA6W10sc3Ryb25nOltdLHU6W10sdWw6W119LFhuPW5ldyBTZXQoW1wiYmFja2dyb3VuZFwiLFwiY2l0ZVwiLFwiaHJlZlwiLFwiaXRlbXR5cGVcIixcImxvbmdkZXNjXCIsXCJwb3N0ZXJcIixcInNyY1wiLFwieGxpbms6aHJlZlwiXSksWW49L14oPyFqYXZhc2NyaXB0OikoPzpbYS16MC05Ky4tXSs6fFteJjovPyNdKig/OlsvPyNdfCQpKS9pLFVuPSh0LGUpPT57Y29uc3QgaT10Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuIGUuaW5jbHVkZXMoaSk/IVhuLmhhcyhpKXx8Qm9vbGVhbihZbi50ZXN0KHQubm9kZVZhbHVlKSk6ZS5maWx0ZXIoKHQ9PnQgaW5zdGFuY2VvZiBSZWdFeHApKS5zb21lKCh0PT50LnRlc3QoaSkpKX0sR249e2FsbG93TGlzdDpRbixjb250ZW50Ont9LGV4dHJhQ2xhc3M6XCJcIixodG1sOiExLHNhbml0aXplOiEwLHNhbml0aXplRm46bnVsbCx0ZW1wbGF0ZTpcIjxkaXY+PC9kaXY+XCJ9LEpuPXthbGxvd0xpc3Q6XCJvYmplY3RcIixjb250ZW50Olwib2JqZWN0XCIsZXh0cmFDbGFzczpcIihzdHJpbmd8ZnVuY3Rpb24pXCIsaHRtbDpcImJvb2xlYW5cIixzYW5pdGl6ZTpcImJvb2xlYW5cIixzYW5pdGl6ZUZuOlwiKG51bGx8ZnVuY3Rpb24pXCIsdGVtcGxhdGU6XCJzdHJpbmdcIn0sWm49e2VudHJ5OlwiKHN0cmluZ3xlbGVtZW50fGZ1bmN0aW9ufG51bGwpXCIsc2VsZWN0b3I6XCIoc3RyaW5nfGVsZW1lbnQpXCJ9O2NsYXNzIHRzIGV4dGVuZHMgSHtjb25zdHJ1Y3Rvcih0KXtzdXBlcigpLHRoaXMuX2NvbmZpZz10aGlzLl9nZXRDb25maWcodCl9c3RhdGljIGdldCBEZWZhdWx0KCl7cmV0dXJuIEdufXN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKXtyZXR1cm4gSm59c3RhdGljIGdldCBOQU1FKCl7cmV0dXJuXCJUZW1wbGF0ZUZhY3RvcnlcIn1nZXRDb250ZW50KCl7cmV0dXJuIE9iamVjdC52YWx1ZXModGhpcy5fY29uZmlnLmNvbnRlbnQpLm1hcCgodD0+dGhpcy5fcmVzb2x2ZVBvc3NpYmxlRnVuY3Rpb24odCkpKS5maWx0ZXIoQm9vbGVhbil9aGFzQ29udGVudCgpe3JldHVybiB0aGlzLmdldENvbnRlbnQoKS5sZW5ndGg+MH1jaGFuZ2VDb250ZW50KHQpe3JldHVybiB0aGlzLl9jaGVja0NvbnRlbnQodCksdGhpcy5fY29uZmlnLmNvbnRlbnQ9ey4uLnRoaXMuX2NvbmZpZy5jb250ZW50LC4uLnR9LHRoaXN9dG9IdG1sKCl7Y29uc3QgdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3QuaW5uZXJIVE1MPXRoaXMuX21heWJlU2FuaXRpemUodGhpcy5fY29uZmlnLnRlbXBsYXRlKTtmb3IoY29uc3RbZSxpXW9mIE9iamVjdC5lbnRyaWVzKHRoaXMuX2NvbmZpZy5jb250ZW50KSl0aGlzLl9zZXRDb250ZW50KHQsaSxlKTtjb25zdCBlPXQuY2hpbGRyZW5bMF0saT10aGlzLl9yZXNvbHZlUG9zc2libGVGdW5jdGlvbih0aGlzLl9jb25maWcuZXh0cmFDbGFzcyk7cmV0dXJuIGkmJmUuY2xhc3NMaXN0LmFkZCguLi5pLnNwbGl0KFwiIFwiKSksZX1fdHlwZUNoZWNrQ29uZmlnKHQpe3N1cGVyLl90eXBlQ2hlY2tDb25maWcodCksdGhpcy5fY2hlY2tDb250ZW50KHQuY29udGVudCl9X2NoZWNrQ29udGVudCh0KXtmb3IoY29uc3RbZSxpXW9mIE9iamVjdC5lbnRyaWVzKHQpKXN1cGVyLl90eXBlQ2hlY2tDb25maWcoe3NlbGVjdG9yOmUsZW50cnk6aX0sWm4pfV9zZXRDb250ZW50KHQsZSxpKXtjb25zdCBuPXouZmluZE9uZShpLHQpO24mJigoZT10aGlzLl9yZXNvbHZlUG9zc2libGVGdW5jdGlvbihlKSk/byhlKT90aGlzLl9wdXRFbGVtZW50SW5UZW1wbGF0ZShyKGUpLG4pOnRoaXMuX2NvbmZpZy5odG1sP24uaW5uZXJIVE1MPXRoaXMuX21heWJlU2FuaXRpemUoZSk6bi50ZXh0Q29udGVudD1lOm4ucmVtb3ZlKCkpfV9tYXliZVNhbml0aXplKHQpe3JldHVybiB0aGlzLl9jb25maWcuc2FuaXRpemU/ZnVuY3Rpb24odCxlLGkpe2lmKCF0Lmxlbmd0aClyZXR1cm4gdDtpZihpJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBpKXJldHVybiBpKHQpO2NvbnN0IG49KG5ldyB3aW5kb3cuRE9NUGFyc2VyKS5wYXJzZUZyb21TdHJpbmcodCxcInRleHQvaHRtbFwiKSxzPVtdLmNvbmNhdCguLi5uLmJvZHkucXVlcnlTZWxlY3RvckFsbChcIipcIikpO2Zvcihjb25zdCB0IG9mIHMpe2NvbnN0IGk9dC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO2lmKCFPYmplY3Qua2V5cyhlKS5pbmNsdWRlcyhpKSl7dC5yZW1vdmUoKTtjb250aW51ZX1jb25zdCBuPVtdLmNvbmNhdCguLi50LmF0dHJpYnV0ZXMpLHM9W10uY29uY2F0KGVbXCIqXCJdfHxbXSxlW2ldfHxbXSk7Zm9yKGNvbnN0IGUgb2YgbilVbihlLHMpfHx0LnJlbW92ZUF0dHJpYnV0ZShlLm5vZGVOYW1lKX1yZXR1cm4gbi5ib2R5LmlubmVySFRNTH0odCx0aGlzLl9jb25maWcuYWxsb3dMaXN0LHRoaXMuX2NvbmZpZy5zYW5pdGl6ZUZuKTp0fV9yZXNvbHZlUG9zc2libGVGdW5jdGlvbih0KXtyZXR1cm4gZyh0LFt2b2lkIDAsdGhpc10pfV9wdXRFbGVtZW50SW5UZW1wbGF0ZSh0LGUpe2lmKHRoaXMuX2NvbmZpZy5odG1sKXJldHVybiBlLmlubmVySFRNTD1cIlwiLHZvaWQgZS5hcHBlbmQodCk7ZS50ZXh0Q29udGVudD10LnRleHRDb250ZW50fX1jb25zdCBlcz1uZXcgU2V0KFtcInNhbml0aXplXCIsXCJhbGxvd0xpc3RcIixcInNhbml0aXplRm5cIl0pLGlzPVwiZmFkZVwiLG5zPVwic2hvd1wiLHNzPVwiLnRvb2x0aXAtaW5uZXJcIixvcz1cIi5tb2RhbFwiLHJzPVwiaGlkZS5icy5tb2RhbFwiLGFzPVwiaG92ZXJcIixscz1cImZvY3VzXCIsY3M9e0FVVE86XCJhdXRvXCIsVE9QOlwidG9wXCIsUklHSFQ6cCgpP1wibGVmdFwiOlwicmlnaHRcIixCT1RUT006XCJib3R0b21cIixMRUZUOnAoKT9cInJpZ2h0XCI6XCJsZWZ0XCJ9LGhzPXthbGxvd0xpc3Q6UW4sYW5pbWF0aW9uOiEwLGJvdW5kYXJ5OlwiY2xpcHBpbmdQYXJlbnRzXCIsY29udGFpbmVyOiExLGN1c3RvbUNsYXNzOlwiXCIsZGVsYXk6MCxmYWxsYmFja1BsYWNlbWVudHM6W1widG9wXCIsXCJyaWdodFwiLFwiYm90dG9tXCIsXCJsZWZ0XCJdLGh0bWw6ITEsb2Zmc2V0OlswLDZdLHBsYWNlbWVudDpcInRvcFwiLHBvcHBlckNvbmZpZzpudWxsLHNhbml0aXplOiEwLHNhbml0aXplRm46bnVsbCxzZWxlY3RvcjohMSx0ZW1wbGF0ZTonPGRpdiBjbGFzcz1cInRvb2x0aXBcIiByb2xlPVwidG9vbHRpcFwiPjxkaXYgY2xhc3M9XCJ0b29sdGlwLWFycm93XCI+PC9kaXY+PGRpdiBjbGFzcz1cInRvb2x0aXAtaW5uZXJcIj48L2Rpdj48L2Rpdj4nLHRpdGxlOlwiXCIsdHJpZ2dlcjpcImhvdmVyIGZvY3VzXCJ9LGRzPXthbGxvd0xpc3Q6XCJvYmplY3RcIixhbmltYXRpb246XCJib29sZWFuXCIsYm91bmRhcnk6XCIoc3RyaW5nfGVsZW1lbnQpXCIsY29udGFpbmVyOlwiKHN0cmluZ3xlbGVtZW50fGJvb2xlYW4pXCIsY3VzdG9tQ2xhc3M6XCIoc3RyaW5nfGZ1bmN0aW9uKVwiLGRlbGF5OlwiKG51bWJlcnxvYmplY3QpXCIsZmFsbGJhY2tQbGFjZW1lbnRzOlwiYXJyYXlcIixodG1sOlwiYm9vbGVhblwiLG9mZnNldDpcIihhcnJheXxzdHJpbmd8ZnVuY3Rpb24pXCIscGxhY2VtZW50OlwiKHN0cmluZ3xmdW5jdGlvbilcIixwb3BwZXJDb25maWc6XCIobnVsbHxvYmplY3R8ZnVuY3Rpb24pXCIsc2FuaXRpemU6XCJib29sZWFuXCIsc2FuaXRpemVGbjpcIihudWxsfGZ1bmN0aW9uKVwiLHNlbGVjdG9yOlwiKHN0cmluZ3xib29sZWFuKVwiLHRlbXBsYXRlOlwic3RyaW5nXCIsdGl0bGU6XCIoc3RyaW5nfGVsZW1lbnR8ZnVuY3Rpb24pXCIsdHJpZ2dlcjpcInN0cmluZ1wifTtjbGFzcyB1cyBleHRlbmRzIFd7Y29uc3RydWN0b3IodCxlKXtpZih2b2lkIDA9PT13aSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQm9vdHN0cmFwJ3MgdG9vbHRpcHMgcmVxdWlyZSBQb3BwZXIgKGh0dHBzOi8vcG9wcGVyLmpzLm9yZy9kb2NzL3YyLylcIik7c3VwZXIodCxlKSx0aGlzLl9pc0VuYWJsZWQ9ITAsdGhpcy5fdGltZW91dD0wLHRoaXMuX2lzSG92ZXJlZD1udWxsLHRoaXMuX2FjdGl2ZVRyaWdnZXI9e30sdGhpcy5fcG9wcGVyPW51bGwsdGhpcy5fdGVtcGxhdGVGYWN0b3J5PW51bGwsdGhpcy5fbmV3Q29udGVudD1udWxsLHRoaXMudGlwPW51bGwsdGhpcy5fc2V0TGlzdGVuZXJzKCksdGhpcy5fY29uZmlnLnNlbGVjdG9yfHx0aGlzLl9maXhUaXRsZSgpfXN0YXRpYyBnZXQgRGVmYXVsdCgpe3JldHVybiBoc31zdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCl7cmV0dXJuIGRzfXN0YXRpYyBnZXQgTkFNRSgpe3JldHVyblwidG9vbHRpcFwifWVuYWJsZSgpe3RoaXMuX2lzRW5hYmxlZD0hMH1kaXNhYmxlKCl7dGhpcy5faXNFbmFibGVkPSExfXRvZ2dsZUVuYWJsZWQoKXt0aGlzLl9pc0VuYWJsZWQ9IXRoaXMuX2lzRW5hYmxlZH10b2dnbGUoKXt0aGlzLl9pc0VuYWJsZWQmJih0aGlzLl9pc1Nob3duKCk/dGhpcy5fbGVhdmUoKTp0aGlzLl9lbnRlcigpKX1kaXNwb3NlKCl7Y2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVvdXQpLE4ub2ZmKHRoaXMuX2VsZW1lbnQuY2xvc2VzdChvcykscnMsdGhpcy5faGlkZU1vZGFsSGFuZGxlciksdGhpcy5fZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWJzLW9yaWdpbmFsLXRpdGxlXCIpJiZ0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZShcInRpdGxlXCIsdGhpcy5fZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWJzLW9yaWdpbmFsLXRpdGxlXCIpKSx0aGlzLl9kaXNwb3NlUG9wcGVyKCksc3VwZXIuZGlzcG9zZSgpfXNob3coKXtpZihcIm5vbmVcIj09PXRoaXMuX2VsZW1lbnQuc3R5bGUuZGlzcGxheSl0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgdXNlIHNob3cgb24gdmlzaWJsZSBlbGVtZW50c1wiKTtpZighdGhpcy5faXNXaXRoQ29udGVudCgpfHwhdGhpcy5faXNFbmFibGVkKXJldHVybjtjb25zdCB0PU4udHJpZ2dlcih0aGlzLl9lbGVtZW50LHRoaXMuY29uc3RydWN0b3IuZXZlbnROYW1lKFwic2hvd1wiKSksZT0oYyh0aGlzLl9lbGVtZW50KXx8dGhpcy5fZWxlbWVudC5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkuY29udGFpbnModGhpcy5fZWxlbWVudCk7aWYodC5kZWZhdWx0UHJldmVudGVkfHwhZSlyZXR1cm47dGhpcy5fZGlzcG9zZVBvcHBlcigpO2NvbnN0IGk9dGhpcy5fZ2V0VGlwRWxlbWVudCgpO3RoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKFwiYXJpYS1kZXNjcmliZWRieVwiLGkuZ2V0QXR0cmlidXRlKFwiaWRcIikpO2NvbnN0e2NvbnRhaW5lcjpufT10aGlzLl9jb25maWc7aWYodGhpcy5fZWxlbWVudC5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jb250YWlucyh0aGlzLnRpcCl8fChuLmFwcGVuZChpKSxOLnRyaWdnZXIodGhpcy5fZWxlbWVudCx0aGlzLmNvbnN0cnVjdG9yLmV2ZW50TmFtZShcImluc2VydGVkXCIpKSksdGhpcy5fcG9wcGVyPXRoaXMuX2NyZWF0ZVBvcHBlcihpKSxpLmNsYXNzTGlzdC5hZGQobnMpLFwib250b3VjaHN0YXJ0XCJpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpZm9yKGNvbnN0IHQgb2ZbXS5jb25jYXQoLi4uZG9jdW1lbnQuYm9keS5jaGlsZHJlbikpTi5vbih0LFwibW91c2VvdmVyXCIsaCk7dGhpcy5fcXVldWVDYWxsYmFjaygoKCk9PntOLnRyaWdnZXIodGhpcy5fZWxlbWVudCx0aGlzLmNvbnN0cnVjdG9yLmV2ZW50TmFtZShcInNob3duXCIpKSwhMT09PXRoaXMuX2lzSG92ZXJlZCYmdGhpcy5fbGVhdmUoKSx0aGlzLl9pc0hvdmVyZWQ9ITF9KSx0aGlzLnRpcCx0aGlzLl9pc0FuaW1hdGVkKCkpfWhpZGUoKXtpZih0aGlzLl9pc1Nob3duKCkmJiFOLnRyaWdnZXIodGhpcy5fZWxlbWVudCx0aGlzLmNvbnN0cnVjdG9yLmV2ZW50TmFtZShcImhpZGVcIikpLmRlZmF1bHRQcmV2ZW50ZWQpe2lmKHRoaXMuX2dldFRpcEVsZW1lbnQoKS5jbGFzc0xpc3QucmVtb3ZlKG5zKSxcIm9udG91Y2hzdGFydFwiaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KWZvcihjb25zdCB0IG9mW10uY29uY2F0KC4uLmRvY3VtZW50LmJvZHkuY2hpbGRyZW4pKU4ub2ZmKHQsXCJtb3VzZW92ZXJcIixoKTt0aGlzLl9hY3RpdmVUcmlnZ2VyLmNsaWNrPSExLHRoaXMuX2FjdGl2ZVRyaWdnZXJbbHNdPSExLHRoaXMuX2FjdGl2ZVRyaWdnZXJbYXNdPSExLHRoaXMuX2lzSG92ZXJlZD1udWxsLHRoaXMuX3F1ZXVlQ2FsbGJhY2soKCgpPT57dGhpcy5faXNXaXRoQWN0aXZlVHJpZ2dlcigpfHwodGhpcy5faXNIb3ZlcmVkfHx0aGlzLl9kaXNwb3NlUG9wcGVyKCksdGhpcy5fZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoXCJhcmlhLWRlc2NyaWJlZGJ5XCIpLE4udHJpZ2dlcih0aGlzLl9lbGVtZW50LHRoaXMuY29uc3RydWN0b3IuZXZlbnROYW1lKFwiaGlkZGVuXCIpKSl9KSx0aGlzLnRpcCx0aGlzLl9pc0FuaW1hdGVkKCkpfX11cGRhdGUoKXt0aGlzLl9wb3BwZXImJnRoaXMuX3BvcHBlci51cGRhdGUoKX1faXNXaXRoQ29udGVudCgpe3JldHVybiBCb29sZWFuKHRoaXMuX2dldFRpdGxlKCkpfV9nZXRUaXBFbGVtZW50KCl7cmV0dXJuIHRoaXMudGlwfHwodGhpcy50aXA9dGhpcy5fY3JlYXRlVGlwRWxlbWVudCh0aGlzLl9uZXdDb250ZW50fHx0aGlzLl9nZXRDb250ZW50Rm9yVGVtcGxhdGUoKSkpLHRoaXMudGlwfV9jcmVhdGVUaXBFbGVtZW50KHQpe2NvbnN0IGU9dGhpcy5fZ2V0VGVtcGxhdGVGYWN0b3J5KHQpLnRvSHRtbCgpO2lmKCFlKXJldHVybiBudWxsO2UuY2xhc3NMaXN0LnJlbW92ZShpcyxucyksZS5jbGFzc0xpc3QuYWRkKGBicy0ke3RoaXMuY29uc3RydWN0b3IuTkFNRX0tYXV0b2ApO2NvbnN0IGk9KHQ9Pntkb3t0Kz1NYXRoLmZsb29yKDFlNipNYXRoLnJhbmRvbSgpKX13aGlsZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0KSk7cmV0dXJuIHR9KSh0aGlzLmNvbnN0cnVjdG9yLk5BTUUpLnRvU3RyaW5nKCk7cmV0dXJuIGUuc2V0QXR0cmlidXRlKFwiaWRcIixpKSx0aGlzLl9pc0FuaW1hdGVkKCkmJmUuY2xhc3NMaXN0LmFkZChpcyksZX1zZXRDb250ZW50KHQpe3RoaXMuX25ld0NvbnRlbnQ9dCx0aGlzLl9pc1Nob3duKCkmJih0aGlzLl9kaXNwb3NlUG9wcGVyKCksdGhpcy5zaG93KCkpfV9nZXRUZW1wbGF0ZUZhY3RvcnkodCl7cmV0dXJuIHRoaXMuX3RlbXBsYXRlRmFjdG9yeT90aGlzLl90ZW1wbGF0ZUZhY3RvcnkuY2hhbmdlQ29udGVudCh0KTp0aGlzLl90ZW1wbGF0ZUZhY3Rvcnk9bmV3IHRzKHsuLi50aGlzLl9jb25maWcsY29udGVudDp0LGV4dHJhQ2xhc3M6dGhpcy5fcmVzb2x2ZVBvc3NpYmxlRnVuY3Rpb24odGhpcy5fY29uZmlnLmN1c3RvbUNsYXNzKX0pLHRoaXMuX3RlbXBsYXRlRmFjdG9yeX1fZ2V0Q29udGVudEZvclRlbXBsYXRlKCl7cmV0dXJue1tzc106dGhpcy5fZ2V0VGl0bGUoKX19X2dldFRpdGxlKCl7cmV0dXJuIHRoaXMuX3Jlc29sdmVQb3NzaWJsZUZ1bmN0aW9uKHRoaXMuX2NvbmZpZy50aXRsZSl8fHRoaXMuX2VsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1icy1vcmlnaW5hbC10aXRsZVwiKX1faW5pdGlhbGl6ZU9uRGVsZWdhdGVkVGFyZ2V0KHQpe3JldHVybiB0aGlzLmNvbnN0cnVjdG9yLmdldE9yQ3JlYXRlSW5zdGFuY2UodC5kZWxlZ2F0ZVRhcmdldCx0aGlzLl9nZXREZWxlZ2F0ZUNvbmZpZygpKX1faXNBbmltYXRlZCgpe3JldHVybiB0aGlzLl9jb25maWcuYW5pbWF0aW9ufHx0aGlzLnRpcCYmdGhpcy50aXAuY2xhc3NMaXN0LmNvbnRhaW5zKGlzKX1faXNTaG93bigpe3JldHVybiB0aGlzLnRpcCYmdGhpcy50aXAuY2xhc3NMaXN0LmNvbnRhaW5zKG5zKX1fY3JlYXRlUG9wcGVyKHQpe2NvbnN0IGU9Zyh0aGlzLl9jb25maWcucGxhY2VtZW50LFt0aGlzLHQsdGhpcy5fZWxlbWVudF0pLGk9Y3NbZS50b1VwcGVyQ2FzZSgpXTtyZXR1cm4geWkodGhpcy5fZWxlbWVudCx0LHRoaXMuX2dldFBvcHBlckNvbmZpZyhpKSl9X2dldE9mZnNldCgpe2NvbnN0e29mZnNldDp0fT10aGlzLl9jb25maWc7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIHQ/dC5zcGxpdChcIixcIikubWFwKCh0PT5OdW1iZXIucGFyc2VJbnQodCwxMCkpKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiB0P2U9PnQoZSx0aGlzLl9lbGVtZW50KTp0fV9yZXNvbHZlUG9zc2libGVGdW5jdGlvbih0KXtyZXR1cm4gZyh0LFt0aGlzLl9lbGVtZW50LHRoaXMuX2VsZW1lbnRdKX1fZ2V0UG9wcGVyQ29uZmlnKHQpe2NvbnN0IGU9e3BsYWNlbWVudDp0LG1vZGlmaWVyczpbe25hbWU6XCJmbGlwXCIsb3B0aW9uczp7ZmFsbGJhY2tQbGFjZW1lbnRzOnRoaXMuX2NvbmZpZy5mYWxsYmFja1BsYWNlbWVudHN9fSx7bmFtZTpcIm9mZnNldFwiLG9wdGlvbnM6e29mZnNldDp0aGlzLl9nZXRPZmZzZXQoKX19LHtuYW1lOlwicHJldmVudE92ZXJmbG93XCIsb3B0aW9uczp7Ym91bmRhcnk6dGhpcy5fY29uZmlnLmJvdW5kYXJ5fX0se25hbWU6XCJhcnJvd1wiLG9wdGlvbnM6e2VsZW1lbnQ6YC4ke3RoaXMuY29uc3RydWN0b3IuTkFNRX0tYXJyb3dgfX0se25hbWU6XCJwcmVTZXRQbGFjZW1lbnRcIixlbmFibGVkOiEwLHBoYXNlOlwiYmVmb3JlTWFpblwiLGZuOnQ9Pnt0aGlzLl9nZXRUaXBFbGVtZW50KCkuc2V0QXR0cmlidXRlKFwiZGF0YS1wb3BwZXItcGxhY2VtZW50XCIsdC5zdGF0ZS5wbGFjZW1lbnQpfX1dfTtyZXR1cm57Li4uZSwuLi5nKHRoaXMuX2NvbmZpZy5wb3BwZXJDb25maWcsW3ZvaWQgMCxlXSl9fV9zZXRMaXN0ZW5lcnMoKXtjb25zdCB0PXRoaXMuX2NvbmZpZy50cmlnZ2VyLnNwbGl0KFwiIFwiKTtmb3IoY29uc3QgZSBvZiB0KWlmKFwiY2xpY2tcIj09PWUpTi5vbih0aGlzLl9lbGVtZW50LHRoaXMuY29uc3RydWN0b3IuZXZlbnROYW1lKFwiY2xpY2tcIiksdGhpcy5fY29uZmlnLnNlbGVjdG9yLCh0PT57dGhpcy5faW5pdGlhbGl6ZU9uRGVsZWdhdGVkVGFyZ2V0KHQpLnRvZ2dsZSgpfSkpO2Vsc2UgaWYoXCJtYW51YWxcIiE9PWUpe2NvbnN0IHQ9ZT09PWFzP3RoaXMuY29uc3RydWN0b3IuZXZlbnROYW1lKFwibW91c2VlbnRlclwiKTp0aGlzLmNvbnN0cnVjdG9yLmV2ZW50TmFtZShcImZvY3VzaW5cIiksaT1lPT09YXM/dGhpcy5jb25zdHJ1Y3Rvci5ldmVudE5hbWUoXCJtb3VzZWxlYXZlXCIpOnRoaXMuY29uc3RydWN0b3IuZXZlbnROYW1lKFwiZm9jdXNvdXRcIik7Ti5vbih0aGlzLl9lbGVtZW50LHQsdGhpcy5fY29uZmlnLnNlbGVjdG9yLCh0PT57Y29uc3QgZT10aGlzLl9pbml0aWFsaXplT25EZWxlZ2F0ZWRUYXJnZXQodCk7ZS5fYWN0aXZlVHJpZ2dlcltcImZvY3VzaW5cIj09PXQudHlwZT9sczphc109ITAsZS5fZW50ZXIoKX0pKSxOLm9uKHRoaXMuX2VsZW1lbnQsaSx0aGlzLl9jb25maWcuc2VsZWN0b3IsKHQ9Pntjb25zdCBlPXRoaXMuX2luaXRpYWxpemVPbkRlbGVnYXRlZFRhcmdldCh0KTtlLl9hY3RpdmVUcmlnZ2VyW1wiZm9jdXNvdXRcIj09PXQudHlwZT9sczphc109ZS5fZWxlbWVudC5jb250YWlucyh0LnJlbGF0ZWRUYXJnZXQpLGUuX2xlYXZlKCl9KSl9dGhpcy5faGlkZU1vZGFsSGFuZGxlcj0oKT0+e3RoaXMuX2VsZW1lbnQmJnRoaXMuaGlkZSgpfSxOLm9uKHRoaXMuX2VsZW1lbnQuY2xvc2VzdChvcykscnMsdGhpcy5faGlkZU1vZGFsSGFuZGxlcil9X2ZpeFRpdGxlKCl7Y29uc3QgdD10aGlzLl9lbGVtZW50LmdldEF0dHJpYnV0ZShcInRpdGxlXCIpO3QmJih0aGlzLl9lbGVtZW50LmdldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIil8fHRoaXMuX2VsZW1lbnQudGV4dENvbnRlbnQudHJpbSgpfHx0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIix0KSx0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtYnMtb3JpZ2luYWwtdGl0bGVcIix0KSx0aGlzLl9lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShcInRpdGxlXCIpKX1fZW50ZXIoKXt0aGlzLl9pc1Nob3duKCl8fHRoaXMuX2lzSG92ZXJlZD90aGlzLl9pc0hvdmVyZWQ9ITA6KHRoaXMuX2lzSG92ZXJlZD0hMCx0aGlzLl9zZXRUaW1lb3V0KCgoKT0+e3RoaXMuX2lzSG92ZXJlZCYmdGhpcy5zaG93KCl9KSx0aGlzLl9jb25maWcuZGVsYXkuc2hvdykpfV9sZWF2ZSgpe3RoaXMuX2lzV2l0aEFjdGl2ZVRyaWdnZXIoKXx8KHRoaXMuX2lzSG92ZXJlZD0hMSx0aGlzLl9zZXRUaW1lb3V0KCgoKT0+e3RoaXMuX2lzSG92ZXJlZHx8dGhpcy5oaWRlKCl9KSx0aGlzLl9jb25maWcuZGVsYXkuaGlkZSkpfV9zZXRUaW1lb3V0KHQsZSl7Y2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVvdXQpLHRoaXMuX3RpbWVvdXQ9c2V0VGltZW91dCh0LGUpfV9pc1dpdGhBY3RpdmVUcmlnZ2VyKCl7cmV0dXJuIE9iamVjdC52YWx1ZXModGhpcy5fYWN0aXZlVHJpZ2dlcikuaW5jbHVkZXMoITApfV9nZXRDb25maWcodCl7Y29uc3QgZT1GLmdldERhdGFBdHRyaWJ1dGVzKHRoaXMuX2VsZW1lbnQpO2Zvcihjb25zdCB0IG9mIE9iamVjdC5rZXlzKGUpKWVzLmhhcyh0KSYmZGVsZXRlIGVbdF07cmV0dXJuIHQ9ey4uLmUsLi4uXCJvYmplY3RcIj09dHlwZW9mIHQmJnQ/dDp7fX0sdD10aGlzLl9tZXJnZUNvbmZpZ09iaih0KSx0PXRoaXMuX2NvbmZpZ0FmdGVyTWVyZ2UodCksdGhpcy5fdHlwZUNoZWNrQ29uZmlnKHQpLHR9X2NvbmZpZ0FmdGVyTWVyZ2UodCl7cmV0dXJuIHQuY29udGFpbmVyPSExPT09dC5jb250YWluZXI/ZG9jdW1lbnQuYm9keTpyKHQuY29udGFpbmVyKSxcIm51bWJlclwiPT10eXBlb2YgdC5kZWxheSYmKHQuZGVsYXk9e3Nob3c6dC5kZWxheSxoaWRlOnQuZGVsYXl9KSxcIm51bWJlclwiPT10eXBlb2YgdC50aXRsZSYmKHQudGl0bGU9dC50aXRsZS50b1N0cmluZygpKSxcIm51bWJlclwiPT10eXBlb2YgdC5jb250ZW50JiYodC5jb250ZW50PXQuY29udGVudC50b1N0cmluZygpKSx0fV9nZXREZWxlZ2F0ZUNvbmZpZygpe2NvbnN0IHQ9e307Zm9yKGNvbnN0W2UsaV1vZiBPYmplY3QuZW50cmllcyh0aGlzLl9jb25maWcpKXRoaXMuY29uc3RydWN0b3IuRGVmYXVsdFtlXSE9PWkmJih0W2VdPWkpO3JldHVybiB0LnNlbGVjdG9yPSExLHQudHJpZ2dlcj1cIm1hbnVhbFwiLHR9X2Rpc3Bvc2VQb3BwZXIoKXt0aGlzLl9wb3BwZXImJih0aGlzLl9wb3BwZXIuZGVzdHJveSgpLHRoaXMuX3BvcHBlcj1udWxsKSx0aGlzLnRpcCYmKHRoaXMudGlwLnJlbW92ZSgpLHRoaXMudGlwPW51bGwpfXN0YXRpYyBqUXVlcnlJbnRlcmZhY2UodCl7cmV0dXJuIHRoaXMuZWFjaCgoZnVuY3Rpb24oKXtjb25zdCBlPXVzLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcyx0KTtpZihcInN0cmluZ1wiPT10eXBlb2YgdCl7aWYodm9pZCAwPT09ZVt0XSl0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke3R9XCJgKTtlW3RdKCl9fSkpfX1tKHVzKTtjb25zdCBmcz1cIi5wb3BvdmVyLWhlYWRlclwiLHBzPVwiLnBvcG92ZXItYm9keVwiLG1zPXsuLi51cy5EZWZhdWx0LGNvbnRlbnQ6XCJcIixvZmZzZXQ6WzAsOF0scGxhY2VtZW50OlwicmlnaHRcIix0ZW1wbGF0ZTonPGRpdiBjbGFzcz1cInBvcG92ZXJcIiByb2xlPVwidG9vbHRpcFwiPjxkaXYgY2xhc3M9XCJwb3BvdmVyLWFycm93XCI+PC9kaXY+PGgzIGNsYXNzPVwicG9wb3Zlci1oZWFkZXJcIj48L2gzPjxkaXYgY2xhc3M9XCJwb3BvdmVyLWJvZHlcIj48L2Rpdj48L2Rpdj4nLHRyaWdnZXI6XCJjbGlja1wifSxncz17Li4udXMuRGVmYXVsdFR5cGUsY29udGVudDpcIihudWxsfHN0cmluZ3xlbGVtZW50fGZ1bmN0aW9uKVwifTtjbGFzcyBfcyBleHRlbmRzIHVze3N0YXRpYyBnZXQgRGVmYXVsdCgpe3JldHVybiBtc31zdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCl7cmV0dXJuIGdzfXN0YXRpYyBnZXQgTkFNRSgpe3JldHVyblwicG9wb3ZlclwifV9pc1dpdGhDb250ZW50KCl7cmV0dXJuIHRoaXMuX2dldFRpdGxlKCl8fHRoaXMuX2dldENvbnRlbnQoKX1fZ2V0Q29udGVudEZvclRlbXBsYXRlKCl7cmV0dXJue1tmc106dGhpcy5fZ2V0VGl0bGUoKSxbcHNdOnRoaXMuX2dldENvbnRlbnQoKX19X2dldENvbnRlbnQoKXtyZXR1cm4gdGhpcy5fcmVzb2x2ZVBvc3NpYmxlRnVuY3Rpb24odGhpcy5fY29uZmlnLmNvbnRlbnQpfXN0YXRpYyBqUXVlcnlJbnRlcmZhY2UodCl7cmV0dXJuIHRoaXMuZWFjaCgoZnVuY3Rpb24oKXtjb25zdCBlPV9zLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcyx0KTtpZihcInN0cmluZ1wiPT10eXBlb2YgdCl7aWYodm9pZCAwPT09ZVt0XSl0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke3R9XCJgKTtlW3RdKCl9fSkpfX1tKF9zKTtjb25zdCBicz1cIi5icy5zY3JvbGxzcHlcIix2cz1gYWN0aXZhdGUke2JzfWAseXM9YGNsaWNrJHtic31gLHdzPWBsb2FkJHtic30uZGF0YS1hcGlgLEFzPVwiYWN0aXZlXCIsRXM9XCJbaHJlZl1cIixUcz1cIi5uYXYtbGlua1wiLENzPWAke1RzfSwgLm5hdi1pdGVtID4gJHtUc30sIC5saXN0LWdyb3VwLWl0ZW1gLE9zPXtvZmZzZXQ6bnVsbCxyb290TWFyZ2luOlwiMHB4IDBweCAtMjUlXCIsc21vb3RoU2Nyb2xsOiExLHRhcmdldDpudWxsLHRocmVzaG9sZDpbLjEsLjUsMV19LHhzPXtvZmZzZXQ6XCIobnVtYmVyfG51bGwpXCIscm9vdE1hcmdpbjpcInN0cmluZ1wiLHNtb290aFNjcm9sbDpcImJvb2xlYW5cIix0YXJnZXQ6XCJlbGVtZW50XCIsdGhyZXNob2xkOlwiYXJyYXlcIn07Y2xhc3Mga3MgZXh0ZW5kcyBXe2NvbnN0cnVjdG9yKHQsZSl7c3VwZXIodCxlKSx0aGlzLl90YXJnZXRMaW5rcz1uZXcgTWFwLHRoaXMuX29ic2VydmFibGVTZWN0aW9ucz1uZXcgTWFwLHRoaXMuX3Jvb3RFbGVtZW50PVwidmlzaWJsZVwiPT09Z2V0Q29tcHV0ZWRTdHlsZSh0aGlzLl9lbGVtZW50KS5vdmVyZmxvd1k/bnVsbDp0aGlzLl9lbGVtZW50LHRoaXMuX2FjdGl2ZVRhcmdldD1udWxsLHRoaXMuX29ic2VydmVyPW51bGwsdGhpcy5fcHJldmlvdXNTY3JvbGxEYXRhPXt2aXNpYmxlRW50cnlUb3A6MCxwYXJlbnRTY3JvbGxUb3A6MH0sdGhpcy5yZWZyZXNoKCl9c3RhdGljIGdldCBEZWZhdWx0KCl7cmV0dXJuIE9zfXN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKXtyZXR1cm4geHN9c3RhdGljIGdldCBOQU1FKCl7cmV0dXJuXCJzY3JvbGxzcHlcIn1yZWZyZXNoKCl7dGhpcy5faW5pdGlhbGl6ZVRhcmdldHNBbmRPYnNlcnZhYmxlcygpLHRoaXMuX21heWJlRW5hYmxlU21vb3RoU2Nyb2xsKCksdGhpcy5fb2JzZXJ2ZXI/dGhpcy5fb2JzZXJ2ZXIuZGlzY29ubmVjdCgpOnRoaXMuX29ic2VydmVyPXRoaXMuX2dldE5ld09ic2VydmVyKCk7Zm9yKGNvbnN0IHQgb2YgdGhpcy5fb2JzZXJ2YWJsZVNlY3Rpb25zLnZhbHVlcygpKXRoaXMuX29ic2VydmVyLm9ic2VydmUodCl9ZGlzcG9zZSgpe3RoaXMuX29ic2VydmVyLmRpc2Nvbm5lY3QoKSxzdXBlci5kaXNwb3NlKCl9X2NvbmZpZ0FmdGVyTWVyZ2UodCl7cmV0dXJuIHQudGFyZ2V0PXIodC50YXJnZXQpfHxkb2N1bWVudC5ib2R5LHQucm9vdE1hcmdpbj10Lm9mZnNldD9gJHt0Lm9mZnNldH1weCAwcHggLTMwJWA6dC5yb290TWFyZ2luLFwic3RyaW5nXCI9PXR5cGVvZiB0LnRocmVzaG9sZCYmKHQudGhyZXNob2xkPXQudGhyZXNob2xkLnNwbGl0KFwiLFwiKS5tYXAoKHQ9Pk51bWJlci5wYXJzZUZsb2F0KHQpKSkpLHR9X21heWJlRW5hYmxlU21vb3RoU2Nyb2xsKCl7dGhpcy5fY29uZmlnLnNtb290aFNjcm9sbCYmKE4ub2ZmKHRoaXMuX2NvbmZpZy50YXJnZXQseXMpLE4ub24odGhpcy5fY29uZmlnLnRhcmdldCx5cyxFcywodD0+e2NvbnN0IGU9dGhpcy5fb2JzZXJ2YWJsZVNlY3Rpb25zLmdldCh0LnRhcmdldC5oYXNoKTtpZihlKXt0LnByZXZlbnREZWZhdWx0KCk7Y29uc3QgaT10aGlzLl9yb290RWxlbWVudHx8d2luZG93LG49ZS5vZmZzZXRUb3AtdGhpcy5fZWxlbWVudC5vZmZzZXRUb3A7aWYoaS5zY3JvbGxUbylyZXR1cm4gdm9pZCBpLnNjcm9sbFRvKHt0b3A6bixiZWhhdmlvcjpcInNtb290aFwifSk7aS5zY3JvbGxUb3A9bn19KSkpfV9nZXROZXdPYnNlcnZlcigpe2NvbnN0IHQ9e3Jvb3Q6dGhpcy5fcm9vdEVsZW1lbnQsdGhyZXNob2xkOnRoaXMuX2NvbmZpZy50aHJlc2hvbGQscm9vdE1hcmdpbjp0aGlzLl9jb25maWcucm9vdE1hcmdpbn07cmV0dXJuIG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigodD0+dGhpcy5fb2JzZXJ2ZXJDYWxsYmFjayh0KSksdCl9X29ic2VydmVyQ2FsbGJhY2sodCl7Y29uc3QgZT10PT50aGlzLl90YXJnZXRMaW5rcy5nZXQoYCMke3QudGFyZ2V0LmlkfWApLGk9dD0+e3RoaXMuX3ByZXZpb3VzU2Nyb2xsRGF0YS52aXNpYmxlRW50cnlUb3A9dC50YXJnZXQub2Zmc2V0VG9wLHRoaXMuX3Byb2Nlc3MoZSh0KSl9LG49KHRoaXMuX3Jvb3RFbGVtZW50fHxkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLnNjcm9sbFRvcCxzPW4+PXRoaXMuX3ByZXZpb3VzU2Nyb2xsRGF0YS5wYXJlbnRTY3JvbGxUb3A7dGhpcy5fcHJldmlvdXNTY3JvbGxEYXRhLnBhcmVudFNjcm9sbFRvcD1uO2Zvcihjb25zdCBvIG9mIHQpe2lmKCFvLmlzSW50ZXJzZWN0aW5nKXt0aGlzLl9hY3RpdmVUYXJnZXQ9bnVsbCx0aGlzLl9jbGVhckFjdGl2ZUNsYXNzKGUobykpO2NvbnRpbnVlfWNvbnN0IHQ9by50YXJnZXQub2Zmc2V0VG9wPj10aGlzLl9wcmV2aW91c1Njcm9sbERhdGEudmlzaWJsZUVudHJ5VG9wO2lmKHMmJnQpe2lmKGkobyksIW4pcmV0dXJufWVsc2Ugc3x8dHx8aShvKX19X2luaXRpYWxpemVUYXJnZXRzQW5kT2JzZXJ2YWJsZXMoKXt0aGlzLl90YXJnZXRMaW5rcz1uZXcgTWFwLHRoaXMuX29ic2VydmFibGVTZWN0aW9ucz1uZXcgTWFwO2NvbnN0IHQ9ei5maW5kKEVzLHRoaXMuX2NvbmZpZy50YXJnZXQpO2Zvcihjb25zdCBlIG9mIHQpe2lmKCFlLmhhc2h8fGwoZSkpY29udGludWU7Y29uc3QgdD16LmZpbmRPbmUoZGVjb2RlVVJJKGUuaGFzaCksdGhpcy5fZWxlbWVudCk7YSh0KSYmKHRoaXMuX3RhcmdldExpbmtzLnNldChkZWNvZGVVUkkoZS5oYXNoKSxlKSx0aGlzLl9vYnNlcnZhYmxlU2VjdGlvbnMuc2V0KGUuaGFzaCx0KSl9fV9wcm9jZXNzKHQpe3RoaXMuX2FjdGl2ZVRhcmdldCE9PXQmJih0aGlzLl9jbGVhckFjdGl2ZUNsYXNzKHRoaXMuX2NvbmZpZy50YXJnZXQpLHRoaXMuX2FjdGl2ZVRhcmdldD10LHQuY2xhc3NMaXN0LmFkZChBcyksdGhpcy5fYWN0aXZhdGVQYXJlbnRzKHQpLE4udHJpZ2dlcih0aGlzLl9lbGVtZW50LHZzLHtyZWxhdGVkVGFyZ2V0OnR9KSl9X2FjdGl2YXRlUGFyZW50cyh0KXtpZih0LmNsYXNzTGlzdC5jb250YWlucyhcImRyb3Bkb3duLWl0ZW1cIikpei5maW5kT25lKFwiLmRyb3Bkb3duLXRvZ2dsZVwiLHQuY2xvc2VzdChcIi5kcm9wZG93blwiKSkuY2xhc3NMaXN0LmFkZChBcyk7ZWxzZSBmb3IoY29uc3QgZSBvZiB6LnBhcmVudHModCxcIi5uYXYsIC5saXN0LWdyb3VwXCIpKWZvcihjb25zdCB0IG9mIHoucHJldihlLENzKSl0LmNsYXNzTGlzdC5hZGQoQXMpfV9jbGVhckFjdGl2ZUNsYXNzKHQpe3QuY2xhc3NMaXN0LnJlbW92ZShBcyk7Y29uc3QgZT16LmZpbmQoYCR7RXN9LiR7QXN9YCx0KTtmb3IoY29uc3QgdCBvZiBlKXQuY2xhc3NMaXN0LnJlbW92ZShBcyl9c3RhdGljIGpRdWVyeUludGVyZmFjZSh0KXtyZXR1cm4gdGhpcy5lYWNoKChmdW5jdGlvbigpe2NvbnN0IGU9a3MuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzLHQpO2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0KXtpZih2b2lkIDA9PT1lW3RdfHx0LnN0YXJ0c1dpdGgoXCJfXCIpfHxcImNvbnN0cnVjdG9yXCI9PT10KXRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7dH1cImApO2VbdF0oKX19KSl9fU4ub24od2luZG93LHdzLCgoKT0+e2Zvcihjb25zdCB0IG9mIHouZmluZCgnW2RhdGEtYnMtc3B5PVwic2Nyb2xsXCJdJykpa3MuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0KX0pKSxtKGtzKTtjb25zdCBMcz1cIi5icy50YWJcIixTcz1gaGlkZSR7THN9YCxEcz1gaGlkZGVuJHtMc31gLCRzPWBzaG93JHtMc31gLElzPWBzaG93biR7THN9YCxOcz1gY2xpY2ske0xzfWAsUHM9YGtleWRvd24ke0xzfWAsanM9YGxvYWQke0xzfWAsTXM9XCJBcnJvd0xlZnRcIixGcz1cIkFycm93UmlnaHRcIixIcz1cIkFycm93VXBcIixXcz1cIkFycm93RG93blwiLEJzPVwiSG9tZVwiLHpzPVwiRW5kXCIsUnM9XCJhY3RpdmVcIixxcz1cImZhZGVcIixWcz1cInNob3dcIixLcz1cIi5kcm9wZG93bi10b2dnbGVcIixRcz1gOm5vdCgke0tzfSlgLFhzPSdbZGF0YS1icy10b2dnbGU9XCJ0YWJcIl0sIFtkYXRhLWJzLXRvZ2dsZT1cInBpbGxcIl0sIFtkYXRhLWJzLXRvZ2dsZT1cImxpc3RcIl0nLFlzPWAubmF2LWxpbmske1FzfSwgLmxpc3QtZ3JvdXAtaXRlbSR7UXN9LCBbcm9sZT1cInRhYlwiXSR7UXN9LCAke1hzfWAsVXM9YC4ke1JzfVtkYXRhLWJzLXRvZ2dsZT1cInRhYlwiXSwgLiR7UnN9W2RhdGEtYnMtdG9nZ2xlPVwicGlsbFwiXSwgLiR7UnN9W2RhdGEtYnMtdG9nZ2xlPVwibGlzdFwiXWA7Y2xhc3MgR3MgZXh0ZW5kcyBXe2NvbnN0cnVjdG9yKHQpe3N1cGVyKHQpLHRoaXMuX3BhcmVudD10aGlzLl9lbGVtZW50LmNsb3Nlc3QoJy5saXN0LWdyb3VwLCAubmF2LCBbcm9sZT1cInRhYmxpc3RcIl0nKSx0aGlzLl9wYXJlbnQmJih0aGlzLl9zZXRJbml0aWFsQXR0cmlidXRlcyh0aGlzLl9wYXJlbnQsdGhpcy5fZ2V0Q2hpbGRyZW4oKSksTi5vbih0aGlzLl9lbGVtZW50LFBzLCh0PT50aGlzLl9rZXlkb3duKHQpKSkpfXN0YXRpYyBnZXQgTkFNRSgpe3JldHVyblwidGFiXCJ9c2hvdygpe2NvbnN0IHQ9dGhpcy5fZWxlbWVudDtpZih0aGlzLl9lbGVtSXNBY3RpdmUodCkpcmV0dXJuO2NvbnN0IGU9dGhpcy5fZ2V0QWN0aXZlRWxlbSgpLGk9ZT9OLnRyaWdnZXIoZSxTcyx7cmVsYXRlZFRhcmdldDp0fSk6bnVsbDtOLnRyaWdnZXIodCwkcyx7cmVsYXRlZFRhcmdldDplfSkuZGVmYXVsdFByZXZlbnRlZHx8aSYmaS5kZWZhdWx0UHJldmVudGVkfHwodGhpcy5fZGVhY3RpdmF0ZShlLHQpLHRoaXMuX2FjdGl2YXRlKHQsZSkpfV9hY3RpdmF0ZSh0LGUpe3QmJih0LmNsYXNzTGlzdC5hZGQoUnMpLHRoaXMuX2FjdGl2YXRlKHouZ2V0RWxlbWVudEZyb21TZWxlY3Rvcih0KSksdGhpcy5fcXVldWVDYWxsYmFjaygoKCk9PntcInRhYlwiPT09dC5nZXRBdHRyaWJ1dGUoXCJyb2xlXCIpPyh0LnJlbW92ZUF0dHJpYnV0ZShcInRhYmluZGV4XCIpLHQuc2V0QXR0cmlidXRlKFwiYXJpYS1zZWxlY3RlZFwiLCEwKSx0aGlzLl90b2dnbGVEcm9wRG93bih0LCEwKSxOLnRyaWdnZXIodCxJcyx7cmVsYXRlZFRhcmdldDplfSkpOnQuY2xhc3NMaXN0LmFkZChWcyl9KSx0LHQuY2xhc3NMaXN0LmNvbnRhaW5zKHFzKSkpfV9kZWFjdGl2YXRlKHQsZSl7dCYmKHQuY2xhc3NMaXN0LnJlbW92ZShScyksdC5ibHVyKCksdGhpcy5fZGVhY3RpdmF0ZSh6LmdldEVsZW1lbnRGcm9tU2VsZWN0b3IodCkpLHRoaXMuX3F1ZXVlQ2FsbGJhY2soKCgpPT57XCJ0YWJcIj09PXQuZ2V0QXR0cmlidXRlKFwicm9sZVwiKT8odC5zZXRBdHRyaWJ1dGUoXCJhcmlhLXNlbGVjdGVkXCIsITEpLHQuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIixcIi0xXCIpLHRoaXMuX3RvZ2dsZURyb3BEb3duKHQsITEpLE4udHJpZ2dlcih0LERzLHtyZWxhdGVkVGFyZ2V0OmV9KSk6dC5jbGFzc0xpc3QucmVtb3ZlKFZzKX0pLHQsdC5jbGFzc0xpc3QuY29udGFpbnMocXMpKSl9X2tleWRvd24odCl7aWYoIVtNcyxGcyxIcyxXcyxCcyx6c10uaW5jbHVkZXModC5rZXkpKXJldHVybjt0LnN0b3BQcm9wYWdhdGlvbigpLHQucHJldmVudERlZmF1bHQoKTtjb25zdCBlPXRoaXMuX2dldENoaWxkcmVuKCkuZmlsdGVyKCh0PT4hbCh0KSkpO2xldCBpO2lmKFtCcyx6c10uaW5jbHVkZXModC5rZXkpKWk9ZVt0LmtleT09PUJzPzA6ZS5sZW5ndGgtMV07ZWxzZXtjb25zdCBuPVtGcyxXc10uaW5jbHVkZXModC5rZXkpO2k9YihlLHQudGFyZ2V0LG4sITApfWkmJihpLmZvY3VzKHtwcmV2ZW50U2Nyb2xsOiEwfSksR3MuZ2V0T3JDcmVhdGVJbnN0YW5jZShpKS5zaG93KCkpfV9nZXRDaGlsZHJlbigpe3JldHVybiB6LmZpbmQoWXMsdGhpcy5fcGFyZW50KX1fZ2V0QWN0aXZlRWxlbSgpe3JldHVybiB0aGlzLl9nZXRDaGlsZHJlbigpLmZpbmQoKHQ9PnRoaXMuX2VsZW1Jc0FjdGl2ZSh0KSkpfHxudWxsfV9zZXRJbml0aWFsQXR0cmlidXRlcyh0LGUpe3RoaXMuX3NldEF0dHJpYnV0ZUlmTm90RXhpc3RzKHQsXCJyb2xlXCIsXCJ0YWJsaXN0XCIpO2Zvcihjb25zdCB0IG9mIGUpdGhpcy5fc2V0SW5pdGlhbEF0dHJpYnV0ZXNPbkNoaWxkKHQpfV9zZXRJbml0aWFsQXR0cmlidXRlc09uQ2hpbGQodCl7dD10aGlzLl9nZXRJbm5lckVsZW1lbnQodCk7Y29uc3QgZT10aGlzLl9lbGVtSXNBY3RpdmUodCksaT10aGlzLl9nZXRPdXRlckVsZW1lbnQodCk7dC5zZXRBdHRyaWJ1dGUoXCJhcmlhLXNlbGVjdGVkXCIsZSksaSE9PXQmJnRoaXMuX3NldEF0dHJpYnV0ZUlmTm90RXhpc3RzKGksXCJyb2xlXCIsXCJwcmVzZW50YXRpb25cIiksZXx8dC5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLFwiLTFcIiksdGhpcy5fc2V0QXR0cmlidXRlSWZOb3RFeGlzdHModCxcInJvbGVcIixcInRhYlwiKSx0aGlzLl9zZXRJbml0aWFsQXR0cmlidXRlc09uVGFyZ2V0UGFuZWwodCl9X3NldEluaXRpYWxBdHRyaWJ1dGVzT25UYXJnZXRQYW5lbCh0KXtjb25zdCBlPXouZ2V0RWxlbWVudEZyb21TZWxlY3Rvcih0KTtlJiYodGhpcy5fc2V0QXR0cmlidXRlSWZOb3RFeGlzdHMoZSxcInJvbGVcIixcInRhYnBhbmVsXCIpLHQuaWQmJnRoaXMuX3NldEF0dHJpYnV0ZUlmTm90RXhpc3RzKGUsXCJhcmlhLWxhYmVsbGVkYnlcIixgJHt0LmlkfWApKX1fdG9nZ2xlRHJvcERvd24odCxlKXtjb25zdCBpPXRoaXMuX2dldE91dGVyRWxlbWVudCh0KTtpZighaS5jbGFzc0xpc3QuY29udGFpbnMoXCJkcm9wZG93blwiKSlyZXR1cm47Y29uc3Qgbj0odCxuKT0+e2NvbnN0IHM9ei5maW5kT25lKHQsaSk7cyYmcy5jbGFzc0xpc3QudG9nZ2xlKG4sZSl9O24oS3MsUnMpLG4oXCIuZHJvcGRvd24tbWVudVwiLFZzKSxpLnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIixlKX1fc2V0QXR0cmlidXRlSWZOb3RFeGlzdHModCxlLGkpe3QuaGFzQXR0cmlidXRlKGUpfHx0LnNldEF0dHJpYnV0ZShlLGkpfV9lbGVtSXNBY3RpdmUodCl7cmV0dXJuIHQuY2xhc3NMaXN0LmNvbnRhaW5zKFJzKX1fZ2V0SW5uZXJFbGVtZW50KHQpe3JldHVybiB0Lm1hdGNoZXMoWXMpP3Q6ei5maW5kT25lKFlzLHQpfV9nZXRPdXRlckVsZW1lbnQodCl7cmV0dXJuIHQuY2xvc2VzdChcIi5uYXYtaXRlbSwgLmxpc3QtZ3JvdXAtaXRlbVwiKXx8dH1zdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKHQpe3JldHVybiB0aGlzLmVhY2goKGZ1bmN0aW9uKCl7Y29uc3QgZT1Hcy5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMpO2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0KXtpZih2b2lkIDA9PT1lW3RdfHx0LnN0YXJ0c1dpdGgoXCJfXCIpfHxcImNvbnN0cnVjdG9yXCI9PT10KXRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7dH1cImApO2VbdF0oKX19KSl9fU4ub24oZG9jdW1lbnQsTnMsWHMsKGZ1bmN0aW9uKHQpe1tcIkFcIixcIkFSRUFcIl0uaW5jbHVkZXModGhpcy50YWdOYW1lKSYmdC5wcmV2ZW50RGVmYXVsdCgpLGwodGhpcyl8fEdzLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcykuc2hvdygpfSkpLE4ub24od2luZG93LGpzLCgoKT0+e2Zvcihjb25zdCB0IG9mIHouZmluZChVcykpR3MuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0KX0pKSxtKEdzKTtjb25zdCBKcz1cIi5icy50b2FzdFwiLFpzPWBtb3VzZW92ZXIke0pzfWAsdG89YG1vdXNlb3V0JHtKc31gLGVvPWBmb2N1c2luJHtKc31gLGlvPWBmb2N1c291dCR7SnN9YCxubz1gaGlkZSR7SnN9YCxzbz1gaGlkZGVuJHtKc31gLG9vPWBzaG93JHtKc31gLHJvPWBzaG93biR7SnN9YCxhbz1cImhpZGVcIixsbz1cInNob3dcIixjbz1cInNob3dpbmdcIixobz17YW5pbWF0aW9uOlwiYm9vbGVhblwiLGF1dG9oaWRlOlwiYm9vbGVhblwiLGRlbGF5OlwibnVtYmVyXCJ9LHVvPXthbmltYXRpb246ITAsYXV0b2hpZGU6ITAsZGVsYXk6NWUzfTtjbGFzcyBmbyBleHRlbmRzIFd7Y29uc3RydWN0b3IodCxlKXtzdXBlcih0LGUpLHRoaXMuX3RpbWVvdXQ9bnVsbCx0aGlzLl9oYXNNb3VzZUludGVyYWN0aW9uPSExLHRoaXMuX2hhc0tleWJvYXJkSW50ZXJhY3Rpb249ITEsdGhpcy5fc2V0TGlzdGVuZXJzKCl9c3RhdGljIGdldCBEZWZhdWx0KCl7cmV0dXJuIHVvfXN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKXtyZXR1cm4gaG99c3RhdGljIGdldCBOQU1FKCl7cmV0dXJuXCJ0b2FzdFwifXNob3coKXtOLnRyaWdnZXIodGhpcy5fZWxlbWVudCxvbykuZGVmYXVsdFByZXZlbnRlZHx8KHRoaXMuX2NsZWFyVGltZW91dCgpLHRoaXMuX2NvbmZpZy5hbmltYXRpb24mJnRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChcImZhZGVcIiksdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGFvKSxkKHRoaXMuX2VsZW1lbnQpLHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChsbyxjbyksdGhpcy5fcXVldWVDYWxsYmFjaygoKCk9Pnt0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY28pLE4udHJpZ2dlcih0aGlzLl9lbGVtZW50LHJvKSx0aGlzLl9tYXliZVNjaGVkdWxlSGlkZSgpfSksdGhpcy5fZWxlbWVudCx0aGlzLl9jb25maWcuYW5pbWF0aW9uKSl9aGlkZSgpe3RoaXMuaXNTaG93bigpJiYoTi50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsbm8pLmRlZmF1bHRQcmV2ZW50ZWR8fCh0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoY28pLHRoaXMuX3F1ZXVlQ2FsbGJhY2soKCgpPT57dGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKGFvKSx0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY28sbG8pLE4udHJpZ2dlcih0aGlzLl9lbGVtZW50LHNvKX0pLHRoaXMuX2VsZW1lbnQsdGhpcy5fY29uZmlnLmFuaW1hdGlvbikpKX1kaXNwb3NlKCl7dGhpcy5fY2xlYXJUaW1lb3V0KCksdGhpcy5pc1Nob3duKCkmJnRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShsbyksc3VwZXIuZGlzcG9zZSgpfWlzU2hvd24oKXtyZXR1cm4gdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMobG8pfV9tYXliZVNjaGVkdWxlSGlkZSgpe3RoaXMuX2NvbmZpZy5hdXRvaGlkZSYmKHRoaXMuX2hhc01vdXNlSW50ZXJhY3Rpb258fHRoaXMuX2hhc0tleWJvYXJkSW50ZXJhY3Rpb258fCh0aGlzLl90aW1lb3V0PXNldFRpbWVvdXQoKCgpPT57dGhpcy5oaWRlKCl9KSx0aGlzLl9jb25maWcuZGVsYXkpKSl9X29uSW50ZXJhY3Rpb24odCxlKXtzd2l0Y2godC50eXBlKXtjYXNlXCJtb3VzZW92ZXJcIjpjYXNlXCJtb3VzZW91dFwiOnRoaXMuX2hhc01vdXNlSW50ZXJhY3Rpb249ZTticmVhaztjYXNlXCJmb2N1c2luXCI6Y2FzZVwiZm9jdXNvdXRcIjp0aGlzLl9oYXNLZXlib2FyZEludGVyYWN0aW9uPWV9aWYoZSlyZXR1cm4gdm9pZCB0aGlzLl9jbGVhclRpbWVvdXQoKTtjb25zdCBpPXQucmVsYXRlZFRhcmdldDt0aGlzLl9lbGVtZW50PT09aXx8dGhpcy5fZWxlbWVudC5jb250YWlucyhpKXx8dGhpcy5fbWF5YmVTY2hlZHVsZUhpZGUoKX1fc2V0TGlzdGVuZXJzKCl7Ti5vbih0aGlzLl9lbGVtZW50LFpzLCh0PT50aGlzLl9vbkludGVyYWN0aW9uKHQsITApKSksTi5vbih0aGlzLl9lbGVtZW50LHRvLCh0PT50aGlzLl9vbkludGVyYWN0aW9uKHQsITEpKSksTi5vbih0aGlzLl9lbGVtZW50LGVvLCh0PT50aGlzLl9vbkludGVyYWN0aW9uKHQsITApKSksTi5vbih0aGlzLl9lbGVtZW50LGlvLCh0PT50aGlzLl9vbkludGVyYWN0aW9uKHQsITEpKSl9X2NsZWFyVGltZW91dCgpe2NsZWFyVGltZW91dCh0aGlzLl90aW1lb3V0KSx0aGlzLl90aW1lb3V0PW51bGx9c3RhdGljIGpRdWVyeUludGVyZmFjZSh0KXtyZXR1cm4gdGhpcy5lYWNoKChmdW5jdGlvbigpe2NvbnN0IGU9Zm8uZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzLHQpO2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0KXtpZih2b2lkIDA9PT1lW3RdKXRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7dH1cImApO2VbdF0odGhpcyl9fSkpfX1yZXR1cm4gUihmbyksbShmbykse0FsZXJ0OlEsQnV0dG9uOlksQ2Fyb3VzZWw6THQsQ29sbGFwc2U6UnQsRHJvcGRvd246S2ksTW9kYWw6a24sT2ZmY2FudmFzOktuLFBvcG92ZXI6X3MsU2Nyb2xsU3B5OmtzLFRhYjpHcyxUb2FzdDpmbyxUb29sdGlwOnVzfX0pKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJvb3RzdHJhcC5idW5kbGUubWluLmpzLm1hcCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBLENBQUMsU0FBUyxHQUFFLEdBQUU7QUFBQyxjQUFVLE9BQU8sV0FBUyxlQUFhLE9BQU8sU0FBTyxPQUFPLFVBQVEsRUFBRSxJQUFFLGNBQVksT0FBTyxVQUFRLE9BQU8sTUFBSSxPQUFPLENBQUMsS0FBRyxJQUFFLGVBQWEsT0FBTyxhQUFXLGFBQVcsS0FBRyxNQUFNLFlBQVUsRUFBRTtBQUFDLEVBQUUsTUFBTSxXQUFVO0FBQUM7QUFBYSxRQUFNLElBQUUsb0JBQUksT0FBSSxJQUFFLEVBQUMsSUFBSUEsSUFBRUMsSUFBRUMsSUFBRTtBQUFDLE1BQUUsSUFBSUYsRUFBQyxLQUFHLEVBQUUsSUFBSUEsSUFBRSxvQkFBSSxLQUFHO0FB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QUFDLEtBQUk7QUFBQSxRQUFZLEtBQUk7QUFBVyxlQUFLLHVCQUFxQko7QUFBRTtBQUFBLFFBQU0sS0FBSTtBQUFBLFFBQVUsS0FBSTtBQUFXLGVBQUssMEJBQXdCQTtBQUFBLE1BQUM7QUFBQyxVQUFHQSxHQUFFLFFBQU8sS0FBSyxLQUFLLGNBQWM7QUFBRSxZQUFNQyxLQUFFRyxHQUFFO0FBQWMsV0FBSyxhQUFXSCxNQUFHLEtBQUssU0FBUyxTQUFTQSxFQUFDLEtBQUcsS0FBSyxtQkFBbUI7QUFBQSxJQUFDO0FBQUEsSUFBQyxnQkFBZTtBQUFDLFFBQUUsR0FBRyxLQUFLLFVBQVMsSUFBSSxDQUFBRyxPQUFHLEtBQUssZUFBZUEsSUFBRSxJQUFFLENBQUUsR0FBRSxFQUFFLEdBQUcsS0FBSyxVQUFTLElBQUksQ0FBQUEsT0FBRyxLQUFLLGVBQWVBLElBQUUsS0FBRSxDQUFFLEdBQUUsRUFBRSxHQUFHLEtBQUssVUFBUyxJQUFJLENBQUFBLE9BQUcsS0FBSyxlQUFlQSxJQUFFLElBQUUsQ0FBRSxHQUFFLEVBQUUsR0FBRyxLQUFLLFVBQVMsSUFBSSxDQUFBQSxPQUFHLEtBQUssZUFBZUEsSUFBRSxLQUFFLENBQUU7QUFBQSxJQUFDO0FBQUEsSUFBQyxnQkFBZTtBQUFDLG1CQUFhLEtBQUssUUFBUSxHQUFFLEtBQUssV0FBUztBQUFBLElBQUk7QUFBQSxJQUFDLE9BQU8sZ0JBQWdCQSxJQUFFO0FBQUMsYUFBTyxLQUFLLEtBQU0sV0FBVTtBQUFDLGNBQU1KLEtBQUUsR0FBRyxvQkFBb0IsTUFBS0ksRUFBQztBQUFFLFlBQUcsWUFBVSxPQUFPQSxJQUFFO0FBQUMsY0FBRyxXQUFTSixHQUFFSSxFQUFDLEVBQUUsT0FBTSxJQUFJLFVBQVUsb0JBQW9CQSxFQUFDLEdBQUc7QUFBRSxVQUFBSixHQUFFSSxFQUFDLEVBQUUsSUFBSTtBQUFBLFFBQUM7QUFBQSxNQUFDLENBQUU7QUFBQSxJQUFDO0FBQUEsRUFBQztBQUFDLFNBQU8sRUFBRSxFQUFFLEdBQUUsRUFBRSxFQUFFLEdBQUUsRUFBQyxPQUFNLEdBQUUsUUFBTyxHQUFFLFVBQVMsSUFBRyxVQUFTLElBQUcsVUFBUyxJQUFHLE9BQU0sSUFBRyxXQUFVLElBQUcsU0FBUSxJQUFHLFdBQVUsSUFBRyxLQUFJLElBQUcsT0FBTSxJQUFHLFNBQVEsR0FBRTtBQUFDLENBQUU7IiwibmFtZXMiOlsiZSIsImkiLCJuIiwicyIsInQiLCJvIiwiciIsImEiLCJsIiwiYyIsImgiLCJkIiwidSIsImYiLCJwIiwibSIsImciLCJfIiwiYiIsInYiLCJ5IiwidyIsIkEiLCJFIiwiVCIsIkMiLCJPIiwieCIsImsiLCJMIiwiUyIsIkQiLCIkIiwiSSIsIk4iLCJQIiwiaiIsIk0iLCJGIiwiSCIsIlciLCJCIiwieiIsIlIiLCJxIiwiViIsIksiLCJRIiwiWCIsIlkiLCJVIiwiRyIsIkoiLCJaIiwidHQiLCJldCIsIml0IiwibnQiLCJzdCIsIm90IiwicnQiLCJhdCIsImx0IiwiY3QiXX0=