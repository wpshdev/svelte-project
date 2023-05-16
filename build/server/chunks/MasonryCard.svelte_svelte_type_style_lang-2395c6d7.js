import { c as create_ssr_component, i as is_promise, n as noop, v as validate_component, e as escape, g as add_attribute, b as createEventDispatcher, r as onDestroy, j as spread, k as escape_object } from './index2-234acb26.js';
import { C as Container, R as Row, a as Col } from './Row-4a1db562.js';
import axios from 'axios';

/*
Copyright (c) NAVER Corp.
name: @egjs/component
license: MIT
author: NAVER Corp.
repository: https://github.com/naver/egjs-component
version: 3.0.4
*/
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
    m = s && o[s],
    i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function () {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
    r,
    ar = [],
    e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
}
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
  return ar;
}

/*
 * Copyright (c) 2015 NAVER Corp.
 * egjs projects are licensed under the MIT license
 */
var isUndefined = function (value) {
  return typeof value === "undefined";
};

// This class name is not matched to file name intentionally
/**
 * Event class to provide additional properties
 * @ko Component에서 추가적인 프로퍼티를 제공하는 이벤트 클래스
 */
var ComponentEvent = /*#__PURE__*/function () {
  /**
   * Create a new instance of ComponentEvent.
   * @ko ComponentEvent의 새로운 인스턴스를 생성한다.
   * @param eventType The name of the event.<ko>이벤트 이름.</ko>
   * @param props An object that contains additional event properties.<ko>추가적인 이벤트 프로퍼티 오브젝트.</ko>
   */
  function ComponentEvent(eventType, props) {
    var e_1, _a;
    this._canceled = false;
    if (props) {
      try {
        for (var _b = __values(Object.keys(props)), _c = _b.next(); !_c.done; _c = _b.next()) {
          var key = _c.value;
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          this[key] = props[key];
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
    }
    this.eventType = eventType;
  }
  /**
   * Stop the event. {@link ComponentEvent#isCanceled} will return `true` after.
   * @ko 이벤트를 중단한다. 이후 {@link ComponentEvent#isCanceled}가 `true`를 반환한다.
   */
  var __proto = ComponentEvent.prototype;
  __proto.stop = function () {
    this._canceled = true;
  };
  /**
   * Returns a boolean value that indicates whether {@link ComponentEvent#stop} is called before.
   * @ko {@link ComponentEvent#stop}이 호출되었는지 여부를 반환한다.
   * @return {boolean} A boolean value that indicates whether {@link ComponentEvent#stop} is called before.<ko>이전에 {@link ComponentEvent#stop}이 불려졌는지 여부를 반환한다.</ko>
   */
  __proto.isCanceled = function () {
    return this._canceled;
  };
  return ComponentEvent;
}();

/**
 * A class used to manage events in a component
 * @ko 컴포넌트의 이벤트을 관리할 수 있게 하는 클래스
 */
var Component = /*#__PURE__*/function () {
  /**
   * @support {"ie": "7+", "ch" : "latest", "ff" : "latest",  "sf" : "latest", "edge" : "latest", "ios" : "7+", "an" : "2.1+ (except 3.x)"}
   */
  function Component() {
    this._eventHandler = {};
  }
  /**
   * Trigger a custom event.
   * @ko 커스텀 이벤트를 발생시킨다
   * @param {string | ComponentEvent} event The name of the custom event to be triggered or an instance of the ComponentEvent<ko>발생할 커스텀 이벤트의 이름 또는 ComponentEvent의 인스턴스</ko>
   * @param {any[]} params Event data to be sent when triggering a custom event <ko>커스텀 이벤트가 발생할 때 전달할 데이터</ko>
   * @return An instance of the component itself<ko>컴포넌트 자신의 인스턴스</ko>
   * @example
   * ```ts
   * import Component, { ComponentEvent } from "@egjs/component";
   *
   * class Some extends Component<{
   *   beforeHi: ComponentEvent<{ foo: number; bar: string }>;
   *   hi: { foo: { a: number; b: boolean } };
   *   someEvent: (foo: number, bar: string) => void;
   *   someOtherEvent: void; // When there's no event argument
   * }> {
   *   some(){
   *     if(this.trigger("beforeHi")){ // When event call to stop return false.
   *       this.trigger("hi");// fire hi event.
   *     }
   *   }
   * }
   *
   * const some = new Some();
   * some.on("beforeHi", e => {
   *   if(condition){
   *     e.stop(); // When event call to stop, `hi` event not call.
   *   }
   *   // `currentTarget` is component instance.
   *   console.log(some === e.currentTarget); // true
   *
   *   typeof e.foo; // number
   *   typeof e.bar; // string
   * });
   * some.on("hi", e => {
   *   typeof e.foo.b; // boolean
   * });
   * // If you want to more know event design. You can see article.
   * // https://github.com/naver/egjs-component/wiki/How-to-make-Component-event-design%3F
   * ```
   */
  var __proto = Component.prototype;
  __proto.trigger = function (event) {
    var params = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      params[_i - 1] = arguments[_i];
    }
    var eventName = event instanceof ComponentEvent ? event.eventType : event;
    var handlers = __spread(this._eventHandler[eventName] || []);
    if (handlers.length <= 0) {
      return this;
    }
    if (event instanceof ComponentEvent) {
      event.currentTarget = this;
      handlers.forEach(function (handler) {
        handler(event);
      });
    } else {
      handlers.forEach(function (handler) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        handler.apply(void 0, __spread(params));
      });
    }
    return this;
  };
  /**
   * Executed event just one time.
   * @ko 이벤트가 한번만 실행된다.
   * @param {string} eventName The name of the event to be attached or an event name - event handler mapped object.<ko>등록할 이벤트의 이름 또는 이벤트 이름-핸들러 오브젝트</ko>
   * @param {function} handlerToAttach The handler function of the event to be attached <ko>등록할 이벤트의 핸들러 함수</ko>
   * @return An instance of the component itself<ko>컴포넌트 자신의 인스턴스</ko>
   * @example
   * ```ts
   * import Component, { ComponentEvent } from "@egjs/component";
   *
   * class Some extends Component<{
   *   hi: ComponentEvent;
   * }> {
   *   hi() {
   *     alert("hi");
   *   }
   *   thing() {
   *     this.once("hi", this.hi);
   *   }
   * }
   *
   * var some = new Some();
   * some.thing();
   * some.trigger(new ComponentEvent("hi"));
   * // fire alert("hi");
   * some.trigger(new ComponentEvent("hi"));
   * // Nothing happens
   * ```
   */
  __proto.once = function (eventName, handlerToAttach) {
    var _this = this;
    if (typeof eventName === "object" && isUndefined(handlerToAttach)) {
      var eventHash = eventName;
      for (var key in eventHash) {
        this.once(key, eventHash[key]);
      }
      return this;
    } else if (typeof eventName === "string" && typeof handlerToAttach === "function") {
      var listener_1 = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        handlerToAttach.apply(void 0, __spread(args));
        _this.off(eventName, listener_1);
      };
      this.on(eventName, listener_1);
    }
    return this;
  };
  /**
   * Checks whether an event has been attached to a component.
   * @ko 컴포넌트에 이벤트가 등록됐는지 확인한다.
   * @param {string} eventName The name of the event to be attached <ko>등록 여부를 확인할 이벤트의 이름</ko>
   * @return {boolean} Indicates whether the event is attached. <ko>이벤트 등록 여부</ko>
   * @example
   * ```ts
   * import Component from "@egjs/component";
   *
   * class Some extends Component<{
   *   hi: void;
   * }> {
   *   some() {
   *     this.hasOn("hi");// check hi event.
   *   }
   * }
   * ```
   */
  __proto.hasOn = function (eventName) {
    return !!this._eventHandler[eventName];
  };
  /**
   * Attaches an event to a component.
   * @ko 컴포넌트에 이벤트를 등록한다.
   * @param {string} eventName The name of the event to be attached or an event name - event handler mapped object.<ko>등록할 이벤트의 이름 또는 이벤트 이름-핸들러 오브젝트</ko>
   * @param {function} handlerToAttach The handler function of the event to be attached <ko>등록할 이벤트의 핸들러 함수</ko>
   * @return An instance of a component itself<ko>컴포넌트 자신의 인스턴스</ko>
   * @example
   * ```ts
   * import Component, { ComponentEvent } from "@egjs/component";
   *
   * class Some extends Component<{
   *   hi: void;
   * }> {
   *   hi() {
   *     console.log("hi");
   *   }
   *   some() {
   *     this.on("hi",this.hi); //attach event
   *   }
   * }
   * ```
   */
  __proto.on = function (eventName, handlerToAttach) {
    if (typeof eventName === "object" && isUndefined(handlerToAttach)) {
      var eventHash = eventName;
      for (var name in eventHash) {
        this.on(name, eventHash[name]);
      }
      return this;
    } else if (typeof eventName === "string" && typeof handlerToAttach === "function") {
      var handlerList = this._eventHandler[eventName];
      if (isUndefined(handlerList)) {
        this._eventHandler[eventName] = [];
        handlerList = this._eventHandler[eventName];
      }
      handlerList.push(handlerToAttach);
    }
    return this;
  };
  /**
   * Detaches an event from the component.<br/>If the `eventName` is not given this will detach all event handlers attached.<br/>If the `handlerToDetach` is not given, this will detach all event handlers for `eventName`.
   * @ko 컴포넌트에 등록된 이벤트를 해제한다.<br/>`eventName`이 주어지지 않았을 경우 모든 이벤트 핸들러를 제거한다.<br/>`handlerToAttach`가 주어지지 않았을 경우 `eventName`에 해당하는 모든 이벤트 핸들러를 제거한다.
   * @param {string?} eventName The name of the event to be detached <ko>해제할 이벤트의 이름</ko>
   * @param {function?} handlerToDetach The handler function of the event to be detached <ko>해제할 이벤트의 핸들러 함수</ko>
   * @return An instance of a component itself <ko>컴포넌트 자신의 인스턴스</ko>
   * @example
   * ```ts
   * import Component, { ComponentEvent } from "@egjs/component";
   *
   * class Some extends Component<{
   *   hi: void;
   * }> {
   *   hi() {
   *     console.log("hi");
   *   }
   *   some() {
   *     this.off("hi",this.hi); //detach event
   *   }
   * }
   * ```
   */
  __proto.off = function (eventName, handlerToDetach) {
    var e_1, _a;
    // Detach all event handlers.
    if (isUndefined(eventName)) {
      this._eventHandler = {};
      return this;
    }
    // Detach all handlers for eventname or detach event handlers by object.
    if (isUndefined(handlerToDetach)) {
      if (typeof eventName === "string") {
        delete this._eventHandler[eventName];
        return this;
      } else {
        var eventHash = eventName;
        for (var name in eventHash) {
          this.off(name, eventHash[name]);
        }
        return this;
      }
    }
    // Detach single event handler
    var handlerList = this._eventHandler[eventName];
    if (handlerList) {
      var idx = 0;
      try {
        for (var handlerList_1 = __values(handlerList), handlerList_1_1 = handlerList_1.next(); !handlerList_1_1.done; handlerList_1_1 = handlerList_1.next()) {
          var handlerFunction = handlerList_1_1.value;
          if (handlerFunction === handlerToDetach) {
            handlerList.splice(idx, 1);
            if (handlerList.length <= 0) {
              delete this._eventHandler[eventName];
            }
            break;
          }
          idx++;
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (handlerList_1_1 && !handlerList_1_1.done && (_a = handlerList_1.return)) _a.call(handlerList_1);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
    }
    return this;
  };
  /**
   * Version info string
   * @ko 버전정보 문자열
   * @name VERSION
   * @static
   * @example
   * Component.VERSION;  // ex) 3.0.0
   * @memberof Component
   */
  Component.VERSION = "3.0.4";
  return Component;
}();

/*
 * Copyright (c) 2015 NAVER Corp.
 * egjs projects are licensed under the MIT license
 */
// eslint-disable-next-line @typescript-eslint/naming-convention, @typescript-eslint/no-unsafe-assignment
var ComponentEvent$1 = ComponentEvent;

/*
Copyright (c) 2019-present NAVER Corp.
name: @egjs/list-differ
license: MIT
author: NAVER Corp.
repository: https://github.com/naver/egjs-list-differ
version: 1.0.1
*/
/*
egjs-list-differ
Copyright (c) 2019-present NAVER Corp.
MIT license
*/
var PolyMap =
/*#__PURE__*/
function () {
  function PolyMap() {
    this.keys = [];
    this.values = [];
  }

  var __proto = PolyMap.prototype;

  __proto.get = function (key) {
    return this.values[this.keys.indexOf(key)];
  };

  __proto.set = function (key, value) {
    var keys = this.keys;
    var values = this.values;
    var prevIndex = keys.indexOf(key);
    var index = prevIndex === -1 ? keys.length : prevIndex;
    keys[index] = key;
    values[index] = value;
  };

  return PolyMap;
}();

/*
egjs-list-differ
Copyright (c) 2019-present NAVER Corp.
MIT license
*/
var HashMap =
/*#__PURE__*/
function () {
  function HashMap() {
    this.object = {};
  }

  var __proto = HashMap.prototype;

  __proto.get = function (key) {
    return this.object[key];
  };

  __proto.set = function (key, value) {
    this.object[key] = value;
  };

  return HashMap;
}();

/*
egjs-list-differ
Copyright (c) 2019-present NAVER Corp.
MIT license
*/
var SUPPORT_MAP = typeof Map === "function";

/*
egjs-list-differ
Copyright (c) 2019-present NAVER Corp.
MIT license
*/
var Link =
/*#__PURE__*/
function () {
  function Link() {}

  var __proto = Link.prototype;

  __proto.connect = function (prevLink, nextLink) {
    this.prev = prevLink;
    this.next = nextLink;
    prevLink && (prevLink.next = this);
    nextLink && (nextLink.prev = this);
  };

  __proto.disconnect = function () {
    // In double linked list, diconnect the interconnected relationship.
    var prevLink = this.prev;
    var nextLink = this.next;
    prevLink && (prevLink.next = nextLink);
    nextLink && (nextLink.prev = prevLink);
  };

  __proto.getIndex = function () {
    var link = this;
    var index = -1;

    while (link) {
      link = link.prev;
      ++index;
    }

    return index;
  };

  return Link;
}();

/*
egjs-list-differ
Copyright (c) 2019-present NAVER Corp.
MIT license
*/

function orderChanged(changed, fixed) {
  // It is roughly in the order of these examples.
  // 4, 6, 0, 2, 1, 3, 5, 7
  var fromLinks = []; // 0, 1, 2, 3, 4, 5, 6, 7

  var toLinks = [];
  changed.forEach(function (_a) {
    var from = _a[0],
        to = _a[1];
    var link = new Link();
    fromLinks[from] = link;
    toLinks[to] = link;
  }); // `fromLinks` are connected to each other by double linked list.

  fromLinks.forEach(function (link, i) {
    link.connect(fromLinks[i - 1]);
  });
  return changed.filter(function (_, i) {
    return !fixed[i];
  }).map(function (_a, i) {
    var from = _a[0],
        to = _a[1];

    if (from === to) {
      return [0, 0];
    }

    var fromLink = fromLinks[from];
    var toLink = toLinks[to - 1];
    var fromIndex = fromLink.getIndex(); // Disconnect the link connected to `fromLink`.

    fromLink.disconnect(); // Connect `fromLink` to the right of `toLink`.

    if (!toLink) {
      fromLink.connect(undefined, fromLinks[0]);
    } else {
      fromLink.connect(toLink, toLink.next);
    }

    var toIndex = fromLink.getIndex();
    return [fromIndex, toIndex];
  });
}

var Result =
/*#__PURE__*/
function () {
  function Result(prevList, list, added, removed, changed, maintained, changedBeforeAdded, fixed) {
    this.prevList = prevList;
    this.list = list;
    this.added = added;
    this.removed = removed;
    this.changed = changed;
    this.maintained = maintained;
    this.changedBeforeAdded = changedBeforeAdded;
    this.fixed = fixed;
  }

  var __proto = Result.prototype;
  Object.defineProperty(__proto, "ordered", {
    get: function () {
      if (!this.cacheOrdered) {
        this.caculateOrdered();
      }

      return this.cacheOrdered;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(__proto, "pureChanged", {
    get: function () {
      if (!this.cachePureChanged) {
        this.caculateOrdered();
      }

      return this.cachePureChanged;
    },
    enumerable: true,
    configurable: true
  });

  __proto.caculateOrdered = function () {
    var ordered = orderChanged(this.changedBeforeAdded, this.fixed);
    var changed = this.changed;
    var pureChanged = [];
    this.cacheOrdered = ordered.filter(function (_a, i) {
      var from = _a[0],
          to = _a[1];
      var _b = changed[i],
          fromBefore = _b[0],
          toBefore = _b[1];

      if (from !== to) {
        pureChanged.push([fromBefore, toBefore]);
        return true;
      }
    });
    this.cachePureChanged = pureChanged;
  };

  return Result;
}();

/**
 *
 * @memberof eg.ListDiffer
 * @static
 * @function
 * @param - Previous List <ko> 이전 목록 </ko>
 * @param - List to Update <ko> 업데이트 할 목록 </ko>
 * @param - This callback function returns the key of the item. <ko> 아이템의 키를 반환하는 콜백 함수입니다.</ko>
 * @return - Returns the diff between `prevList` and `list` <ko> `prevList`와 `list`의 다른 점을 반환한다.</ko>
 * @example
 * import { diff } from "@egjs/list-differ";
 * // script => eg.ListDiffer.diff
 * const result = diff([0, 1, 2, 3, 4, 5], [7, 8, 0, 4, 3, 6, 2, 1], e => e);
 * // List before update
 * // [1, 2, 3, 4, 5]
 * console.log(result.prevList);
 * // Updated list
 * // [4, 3, 6, 2, 1]
 * console.log(result.list);
 * // Index array of values added to `list`
 * // [0, 1, 5]
 * console.log(result.added);
 * // Index array of values removed in `prevList`
 * // [5]
 * console.log(result.removed);
 * // An array of index pairs of `prevList` and `list` with different indexes from `prevList` and `list`
 * // [[0, 2], [4, 3], [3, 4], [2, 6], [1, 7]]
 * console.log(result.changed);
 * // The subset of `changed` and an array of index pairs that moved data directly. Indicate an array of absolute index pairs of `ordered`.(Formatted by: Array<[index of prevList, index of list]>)
 * // [[4, 3], [3, 4], [2, 6]]
 * console.log(result.pureChanged);
 * // An array of index pairs to be `ordered` that can synchronize `list` before adding data. (Formatted by: Array<[prevIndex, nextIndex]>)
 * // [[4, 1], [4, 2], [4, 3]]
 * console.log(result.ordered);
 * // An array of index pairs of `prevList` and `list` that have not been added/removed so data is preserved
 * // [[0, 2], [4, 3], [3, 4], [2, 6], [1, 7]]
 * console.log(result.maintained);
 */

function diff$1(prevList, list, findKeyCallback) {
  var mapClass = SUPPORT_MAP ? Map : findKeyCallback ? HashMap : PolyMap;

  var callback = findKeyCallback || function (e) {
    return e;
  };

  var added = [];
  var removed = [];
  var maintained = [];
  var prevKeys = prevList.map(callback);
  var keys = list.map(callback);
  var prevKeyMap = new mapClass();
  var keyMap = new mapClass();
  var changedBeforeAdded = [];
  var fixed = [];
  var removedMap = {};
  var changed = [];
  var addedCount = 0;
  var removedCount = 0; // Add prevKeys and keys to the hashmap.

  prevKeys.forEach(function (key, prevListIndex) {
    prevKeyMap.set(key, prevListIndex);
  });
  keys.forEach(function (key, listIndex) {
    keyMap.set(key, listIndex);
  }); // Compare `prevKeys` and `keys` and add them to `removed` if they are not in `keys`.

  prevKeys.forEach(function (key, prevListIndex) {
    var listIndex = keyMap.get(key); // In prevList, but not in list, it is removed.

    if (typeof listIndex === "undefined") {
      ++removedCount;
      removed.push(prevListIndex);
    } else {
      removedMap[listIndex] = removedCount;
    }
  }); // Compare `prevKeys` and `keys` and add them to `added` if they are not in `prevKeys`.

  keys.forEach(function (key, listIndex) {
    var prevListIndex = prevKeyMap.get(key); // In list, but not in prevList, it is added.

    if (typeof prevListIndex === "undefined") {
      added.push(listIndex);
      ++addedCount;
    } else {
      maintained.push([prevListIndex, listIndex]);
      removedCount = removedMap[listIndex] || 0;
      changedBeforeAdded.push([prevListIndex - removedCount, listIndex - addedCount]);
      fixed.push(listIndex === prevListIndex);

      if (prevListIndex !== listIndex) {
        changed.push([prevListIndex, listIndex]);
      }
    }
  }); // Sort by ascending order of 'to(list's index).

  removed.reverse();
  return new Result(prevList, list, added, removed, changed, maintained, changedBeforeAdded, fixed);
}

/*
Copyright (c) 2019-present NAVER Corp.
name: @egjs/children-differ
license: MIT
author: NAVER Corp.
repository: https://github.com/naver/egjs-children-differ
version: 1.0.1
*/

/*
egjs-children-differ
Copyright (c) 2019-present NAVER Corp.
MIT license
*/
var findKeyCallback = typeof Map === "function" ? undefined : function () {
  var childrenCount = 0;
  return function (el) {
    return el.__DIFF_KEY__ || (el.__DIFF_KEY__ = ++childrenCount);
  };
}();

/*
egjs-children-differ
Copyright (c) 2019-present NAVER Corp.
MIT license
*/
/**
 *
 * @memberof eg.ChildrenDiffer
 * @static
 * @function
 * @param - Previous List <ko> 이전 목록 </ko>
 * @param - List to Update <ko> 업데이트 할 목록 </ko>
 * @return - Returns the diff between `prevList` and `list` <ko> `prevList`와 `list`의 다른 점을 반환한다.</ko>
 * @example
 * import { diff } from "@egjs/children-differ";
 * // script => eg.ChildrenDiffer.diff
 * const result = diff([0, 1, 2, 3, 4, 5], [7, 8, 0, 4, 3, 6, 2, 1]);
 * // List before update
 * // [1, 2, 3, 4, 5]
 * console.log(result.prevList);
 * // Updated list
 * // [4, 3, 6, 2, 1]
 * console.log(result.list);
 * // Index array of values added to `list`
 * // [0, 1, 5]
 * console.log(result.added);
 * // Index array of values removed in `prevList`
 * // [5]
 * console.log(result.removed);
 * // An array of index pairs of `prevList` and `list` with different indexes from `prevList` and `list`
 * // [[0, 2], [4, 3], [3, 4], [2, 6], [1, 7]]
 * console.log(result.changed);
 * // The subset of `changed` and an array of index pairs that moved data directly. Indicate an array of absolute index pairs of `ordered`.(Formatted by: Array<[index of prevList, index of list]>)
 * // [[4, 3], [3, 4], [2, 6]]
 * console.log(result.pureChanged);
 * // An array of index pairs to be `ordered` that can synchronize `list` before adding data. (Formatted by: Array<[prevIndex, nextIndex]>)
 * // [[4, 1], [4, 2], [4, 3]]
 * console.log(result.ordered);
 * // An array of index pairs of `prevList` and `list` that have not been added/removed so data is preserved
 * // [[0, 2], [4, 3], [3, 4], [2, 6], [1, 7]]
 * console.log(result.maintained);
 */

function diff(prevList, list) {
  return diff$1(prevList, list, findKeyCallback);
}

/*
Copyright (c) NAVER Corp.
name: @egjs/imready
license: MIT
author: NAVER Corp.
repository: https://github.com/naver/egjs-imready
version: 1.4.1
*/

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics$1 = function (d, b) {
  extendStatics$1 = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
  };
  return extendStatics$1(d, b);
};
function __extends$1(d, b) {
  if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics$1(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign$1 = function () {
  __assign$1 = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign$1.apply(this, arguments);
};

/** @deprecated */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];
  return r;
}

/*
egjs-imready
Copyright (c) 2020-present NAVER Corp.
MIT license
*/
var isWindow = typeof window !== "undefined";
var ua = isWindow ? window.navigator.userAgent : "";
var SUPPORT_COMPUTEDSTYLE = isWindow ? !!("getComputedStyle" in window) : false;
var IS_IE = /MSIE|Trident|Windows Phone|Edge/.test(ua);
var SUPPORT_ADDEVENTLISTENER = isWindow ? !!("addEventListener" in document) : false;
var WIDTH = "width";
var HEIGHT = "height";

function getAttribute(el, name) {
  return el.getAttribute(name) || "";
}
function toArray(arr) {
  return [].slice.call(arr);
}
function hasSizeAttribute(target, prefix) {
  if (prefix === void 0) {
    prefix = "data-";
  }
  return !!target.getAttribute(prefix + "width");
}
function hasLoadingAttribute(target, prefix) {
  if (prefix === void 0) {
    prefix = "data-";
  }
  return "loading" in target && target.getAttribute("loading") === "lazy" || !!target.getAttribute(prefix + "lazy");
}
function hasSkipAttribute(target, prefix) {
  if (prefix === void 0) {
    prefix = "data-";
  }
  return !!target.getAttribute(prefix + "skip");
}
function addEvent(element, type, handler) {
  if (SUPPORT_ADDEVENTLISTENER) {
    element.addEventListener(type, handler, false);
  } else if (element.attachEvent) {
    element.attachEvent("on" + type, handler);
  } else {
    element["on" + type] = handler;
  }
}
function removeEvent(element, type, handler) {
  if (element.removeEventListener) {
    element.removeEventListener(type, handler, false);
  } else if (element.detachEvent) {
    element.detachEvent("on" + type, handler);
  } else {
    element["on" + type] = null;
  }
}
function innerWidth(el) {
  return getSize(el, "Width");
}
function innerHeight(el) {
  return getSize(el, "Height");
}
function getStyles(el) {
  return (SUPPORT_COMPUTEDSTYLE ? window.getComputedStyle(el) : el.currentStyle) || {};
}
function getSize(el, name) {
  var size = el["client" + name] || el["offset" + name];
  return parseFloat(size || getStyles(el)[name.toLowerCase()]) || 0;
}
function getContentElements(element, tags, prefix) {
  var skipElements = toArray(element.querySelectorAll(__spreadArrays(["[" + prefix + "skip] [" + prefix + "width]"], tags.map(function (tag) {
    return ["[" + prefix + "skip] " + tag, tag + "[" + prefix + "skip]", "[" + prefix + "width] " + tag].join(", ");
  })).join(", ")));
  return toArray(element.querySelectorAll("[" + prefix + "width], " + tags.join(", "))).filter(function (el) {
    return skipElements.indexOf(el) === -1;
  });
}

/*
egjs-imready
Copyright (c) 2020-present NAVER Corp.
MIT license
*/
var elements = [];
function addAutoSizer(element, prefix) {
  !elements.length && addEvent(window, "resize", resizeAllAutoSizers);
  element.__PREFIX__ = prefix;
  elements.push(element);
  resize(element);
}
function removeAutoSizer(element, prefix) {
  var index = elements.indexOf(element);
  if (index < 0) {
    return;
  }
  var fixed = getAttribute(element, prefix + "fixed");
  delete element.__PREFIX__;
  element.style[fixed === HEIGHT ? WIDTH : HEIGHT] = "";
  elements.splice(index, 1);
  !elements.length && removeEvent(window, "resize", resizeAllAutoSizers);
}
function resize(element, prefix) {
  if (prefix === void 0) {
    prefix = "data-";
  }
  var elementPrefix = element.__PREFIX__ || prefix;
  var dataWidth = parseInt(getAttribute(element, "" + elementPrefix + WIDTH), 10) || 0;
  var dataHeight = parseInt(getAttribute(element, "" + elementPrefix + HEIGHT), 10) || 0;
  var fixed = getAttribute(element, elementPrefix + "fixed");
  if (fixed === HEIGHT) {
    var size = innerHeight(element) || dataHeight;
    element.style[WIDTH] = dataWidth / dataHeight * size + "px";
  } else {
    var size = innerWidth(element) || dataWidth;
    element.style[HEIGHT] = dataHeight / dataWidth * size + "px";
  }
}
function resizeAllAutoSizers() {
  elements.forEach(function (element) {
    resize(element);
  });
}

var Loader = /*#__PURE__*/function (_super) {
  __extends$1(Loader, _super);
  function Loader(element, options) {
    if (options === void 0) {
      options = {};
    }
    var _this = _super.call(this) || this;
    _this.isReady = false;
    _this.isPreReady = false;
    _this.hasDataSize = false;
    _this.hasLoading = false;
    _this.isSkip = false;
    _this.onCheck = function (e) {
      _this.clear();
      if (e && e.type === "error") {
        _this.onError(_this.element);
      }
      if (_this.hasLoading && _this.checkElement()) {
        // I'm not ready
        return;
      }
      // I'm pre-ready and ready!
      var withPreReady = !_this.hasDataSize && !_this.hasLoading;
      _this.onReady(withPreReady);
    };
    _this.options = __assign$1({
      prefix: "data-"
    }, options);
    _this.element = element;
    var prefix = _this.options.prefix;
    _this.hasDataSize = hasSizeAttribute(element, prefix);
    _this.isSkip = hasSkipAttribute(element, prefix);
    _this.hasLoading = hasLoadingAttribute(element, prefix);
    return _this;
  }
  var __proto = Loader.prototype;
  __proto.check = function () {
    if (this.isSkip || !this.checkElement()) {
      // I'm Ready
      this.onAlreadyReady(true);
      return false;
    }
    if (this.hasDataSize) {
      addAutoSizer(this.element, this.options.prefix);
    }
    if (this.hasDataSize || this.hasLoading) {
      // I'm Pre Ready
      this.onAlreadyPreReady();
    }
    // Wati Pre Ready, Ready
    return true;
  };
  __proto.addEvents = function () {
    var _this = this;
    var element = this.element;
    this.constructor.EVENTS.forEach(function (name) {
      addEvent(element, name, _this.onCheck);
    });
  };
  __proto.clear = function () {
    var _this = this;
    var element = this.element;
    this.constructor.EVENTS.forEach(function (name) {
      removeEvent(element, name, _this.onCheck);
    });
    this.removeAutoSizer();
  };
  __proto.destroy = function () {
    this.clear();
    this.off();
  };
  __proto.removeAutoSizer = function () {
    if (this.hasDataSize) {
      // I'm already ready.
      var prefix = this.options.prefix;
      removeAutoSizer(this.element, prefix);
    }
  };
  __proto.onError = function (target) {
    this.trigger("error", {
      element: this.element,
      target: target
    });
  };
  __proto.onPreReady = function () {
    if (this.isPreReady) {
      return;
    }
    this.isPreReady = true;
    this.trigger("preReady", {
      element: this.element,
      hasLoading: this.hasLoading,
      isSkip: this.isSkip
    });
  };
  __proto.onReady = function (withPreReady) {
    if (this.isReady) {
      return;
    }
    withPreReady = !this.isPreReady && withPreReady;
    if (withPreReady) {
      this.isPreReady = true;
    }
    this.removeAutoSizer();
    this.isReady = true;
    this.trigger("ready", {
      element: this.element,
      withPreReady: withPreReady,
      hasLoading: this.hasLoading,
      isSkip: this.isSkip
    });
  };
  __proto.onAlreadyError = function (target) {
    var _this = this;
    setTimeout(function () {
      _this.onError(target);
    });
  };
  __proto.onAlreadyPreReady = function () {
    var _this = this;
    setTimeout(function () {
      _this.onPreReady();
    });
  };
  __proto.onAlreadyReady = function (withPreReady) {
    var _this = this;
    setTimeout(function () {
      _this.onReady(withPreReady);
    });
  };
  Loader.EVENTS = [];
  return Loader;
}(Component);

var ElementLoader = /*#__PURE__*/function (_super) {
  __extends$1(ElementLoader, _super);
  function ElementLoader() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  var __proto = ElementLoader.prototype;
  __proto.setHasLoading = function (hasLoading) {
    this.hasLoading = hasLoading;
  };
  __proto.check = function () {
    if (this.isSkip) {
      // I'm Ready
      this.onAlreadyReady(true);
      return false;
    }
    if (this.hasDataSize) {
      addAutoSizer(this.element, this.options.prefix);
      this.onAlreadyPreReady();
    } else {
      // has not data size
      this.trigger("requestChildren");
    }
    return true;
  };
  __proto.checkElement = function () {
    return true;
  };
  __proto.destroy = function () {
    this.clear();
    this.trigger("requestDestroy");
    this.off();
  };
  __proto.onAlreadyPreReady = function () {
    // has data size
    _super.prototype.onAlreadyPreReady.call(this);
    this.trigger("reqeustReadyChildren");
  };
  ElementLoader.EVENTS = [];
  return ElementLoader;
}(Loader);

/**
 * @alias eg.ImReady
 * @extends eg.Component
 */
var ImReadyManager = /*#__PURE__*/function (_super) {
  __extends$1(ImReadyManager, _super);
  /**
   * @param - ImReady's options
   */
  function ImReadyManager(options) {
    if (options === void 0) {
      options = {};
    }
    var _this = _super.call(this) || this;
    _this.readyCount = 0;
    _this.preReadyCount = 0;
    _this.totalCount = 0;
    _this.totalErrorCount = 0;
    _this.isPreReadyOver = true;
    _this.elementInfos = [];
    _this.options = __assign$1({
      loaders: {},
      prefix: "data-"
    }, options);
    return _this;
  }
  /**
   * Checks whether elements are in the ready state.
   * @ko 엘리먼트가 준비 상태인지 체크한다.
   * @elements - Elements to check ready status. <ko> 준비 상태를 체크할 엘리먼트들.</ko>
   * @example
     * ```html
     * <div>
     *    <img src="./1.jpg" data-width="1280" data-height="853" style="width:100%"/>
     *    <img src="./2.jpg" data-width="1280" data-height="853"/>
     *    <img src="ERR" data-width="1280" data-height="853"/>
     * </div>
     * ```
     * ## Javascript
     * ```js
     * import ImReady from "@egjs/imready";
     *
     * const im = new ImReady(); // umd: eg.ImReady
     * im.check(document.querySelectorAll("img")).on({
     *   preReadyElement: e => {
     *     // 1, 3
     *     // 2, 3
     *     // 3, 3
     *     console.log(e.preReadyCount, e.totalCount),
     *   },
     * });
     * ```
   */
  var __proto = ImReadyManager.prototype;
  __proto.check = function (elements) {
    var _this = this;
    var prefix = this.options.prefix;
    this.clear();
    this.elementInfos = toArray(elements).map(function (element, index) {
      var loader = _this.getLoader(element, {
        prefix: prefix
      });
      loader.check();
      loader.on("error", function (e) {
        _this.onError(index, e.target);
      }).on("preReady", function (e) {
        var info = _this.elementInfos[index];
        info.hasLoading = e.hasLoading;
        info.isSkip = e.isSkip;
        var isPreReady = _this.checkPreReady(index);
        _this.onPreReadyElement(index);
        isPreReady && _this.onPreReady();
      }).on("ready", function (_a) {
        var withPreReady = _a.withPreReady,
          hasLoading = _a.hasLoading,
          isSkip = _a.isSkip;
        var info = _this.elementInfos[index];
        info.hasLoading = hasLoading;
        info.isSkip = isSkip;
        var isPreReady = withPreReady && _this.checkPreReady(index);
        var isReady = _this.checkReady(index);
        // Pre-ready and ready occur simultaneously
        withPreReady && _this.onPreReadyElement(index);
        _this.onReadyElement(index);
        isPreReady && _this.onPreReady();
        isReady && _this.onReady();
      });
      return {
        loader: loader,
        element: element,
        hasLoading: false,
        hasError: false,
        isPreReady: false,
        isReady: false,
        isSkip: false
      };
    });
    var length = this.elementInfos.length;
    this.totalCount = length;
    if (!length) {
      setTimeout(function () {
        _this.onPreReady();
        _this.onReady();
      });
    }
    return this;
  };
  /**
   * Gets the total count of elements to be checked.
   * @ko 체크하는 element의 총 개수를 가져온다.
   */
  __proto.getTotalCount = function () {
    return this.totalCount;
  };
  /**
   * Whether the elements are all pre-ready. (all sizes are known)
   * @ko 엘리먼트들이 모두 사전 준비가 됐는지 (사이즈를 전부 알 수 있는지) 여부.
   */
  __proto.isPreReady = function () {
    return this.elementInfos.every(function (info) {
      return info.isPreReady;
    });
  };
  /**
   * Whether the elements are all ready.
   * @ko 엘리먼트들이 모두 준비가 됐는지 여부.
   */
  __proto.isReady = function () {
    return this.elementInfos.every(function (info) {
      return info.isReady;
    });
  };
  /**
   * Whether an error has occurred in the elements in the current state.
   * @ko 현재 상태에서 엘리먼트들이 에러가 발생했는지 여부.
   */
  __proto.hasError = function () {
    return this.totalErrorCount > 0;
  };
  /**
   * Clears events of elements being checked.
   * @ko 체크 중인 엘리먼트들의 이벤트를 해제 한다.
   */
  __proto.clear = function () {
    this.isPreReadyOver = false;
    this.totalCount = 0;
    this.preReadyCount = 0;
    this.readyCount = 0;
    this.totalErrorCount = 0;
    this.elementInfos.forEach(function (info) {
      if (info.loader) {
        info.loader.destroy();
      }
    });
    this.elementInfos = [];
  };
  /**
   * Destory all events.
   * @ko 모든 이벤트를 해제 한다.
   */
  __proto.destroy = function () {
    this.clear();
    this.off();
  };
  __proto.getLoader = function (element, options) {
    var _this = this;
    var tagName = element.tagName.toLowerCase();
    var loaders = this.options.loaders;
    var prefix = options.prefix;
    var tags = Object.keys(loaders);
    if (loaders[tagName]) {
      return new loaders[tagName](element, options);
    }
    var loader = new ElementLoader(element, options);
    var children = toArray(element.querySelectorAll(tags.join(", ")));
    loader.setHasLoading(children.some(function (el) {
      return hasLoadingAttribute(el, prefix);
    }));
    var withPreReady = false;
    var childrenImReady = this.clone().on("error", function (e) {
      loader.onError(e.target);
    }).on("ready", function () {
      loader.onReady(withPreReady);
    });
    loader.on("requestChildren", function () {
      // has not data size
      var contentElements = getContentElements(element, tags, _this.options.prefix);
      childrenImReady.check(contentElements).on("preReady", function (e) {
        withPreReady = e.isReady;
        if (!withPreReady) {
          loader.onPreReady();
        }
      });
    }).on("reqeustReadyChildren", function () {
      // has data size
      // loader call preReady
      // check only video, image elements
      childrenImReady.check(children);
    }).on("requestDestroy", function () {
      childrenImReady.destroy();
    });
    return loader;
  };
  __proto.clone = function () {
    return new ImReadyManager(__assign$1({}, this.options));
  };
  __proto.checkPreReady = function (index) {
    this.elementInfos[index].isPreReady = true;
    ++this.preReadyCount;
    if (this.preReadyCount < this.totalCount) {
      return false;
    }
    return true;
  };
  __proto.checkReady = function (index) {
    this.elementInfos[index].isReady = true;
    ++this.readyCount;
    if (this.readyCount < this.totalCount) {
      return false;
    }
    return true;
  };
  __proto.onError = function (index, target) {
    var info = this.elementInfos[index];
    info.hasError = true;
    /**
     * An event occurs if the image, video fails to load.
     * @ko 이미지, 비디오가 로딩에 실패하면 이벤트가 발생한다.
     * @event eg.ImReady#error
     * @param {eg.ImReady.OnError} e - The object of data to be sent to an event <ko>이벤트에 전달되는 데이터 객체</ko>
     * @example
     * ```html
     * <div>
     *    <img src="./1.jpg" data-width="1280" data-height="853" style="width:100%"/>
     *    <img src="./2.jpg"/>
     *    <img src="ERR"/>
     * </div>
     * ```
     * ## Javascript
     * ```js
     * import ImReady from "@egjs/imready";
     *
     * const im = new ImReady(); // umd: eg.ImReady
     * im.check([document.querySelector("div")]).on({
     *   error: e => {
     *     // <div>...</div>, 0, <img src="ERR"/>
     *     console.log(e.element, e.index, e.target),
     *   },
     * });
     * ```
     */
    this.trigger(new ComponentEvent$1("error", {
      element: info.element,
      index: index,
      target: target,
      errorCount: this.getErrorCount(),
      totalErrorCount: ++this.totalErrorCount
    }));
  };
  __proto.onPreReadyElement = function (index) {
    var info = this.elementInfos[index];
    /**
     * An event occurs when the element is pre-ready (when the loading attribute is applied or the size is known)
     * @ko 해당 엘리먼트가 사전 준비되었을 때(loading 속성이 적용되었거나 사이즈를 알 수 있을 때) 이벤트가 발생한다.
     * @event eg.ImReady#preReadyElement
     * @param {eg.ImReady.OnPreReadyElement} e - The object of data to be sent to an event <ko>이벤트에 전달되는 데이터 객체</ko>
     * @example
     * ```html
     * <div>
     *    <img src="./1.jpg" data-width="1280" data-height="853" style="width:100%"/>
     *    <img src="./2.jpg" data-width="1280" data-height="853"/>
     *    <img src="ERR" data-width="1280" data-height="853"/>
     * </div>
     * ```
     * ## Javascript
     * ```js
     * import ImReady from "@egjs/imready";
     *
     * const im = new ImReady(); // umd: eg.ImReady
     * im.check(document.querySelectorAll("img")).on({
     *   preReadyElement: e => {
     *     // 1, 3
     *     // 2, 3
     *     // 3, 3
     *     console.log(e.preReadyCount, e.totalCount),
     *   },
     * });
     * ```
     */
    this.trigger(new ComponentEvent$1("preReadyElement", {
      element: info.element,
      index: index,
      preReadyCount: this.preReadyCount,
      readyCount: this.readyCount,
      totalCount: this.totalCount,
      isPreReady: this.isPreReady(),
      isReady: this.isReady(),
      hasLoading: info.hasLoading,
      isSkip: info.isSkip
    }));
  };
  __proto.onPreReady = function () {
    this.isPreReadyOver = true;
    /**
     * An event occurs when all element are pre-ready (When all elements have the loading attribute applied or the size is known)
     * @ko 모든 엘리먼트들이 사전 준비된 경우 (모든 엘리먼트들이 loading 속성이 적용되었거나 사이즈를 알 수 있는 경우) 이벤트가 발생한다.
     * @event eg.ImReady#preReady
     * @param {eg.ImReady.OnPreReady} e - The object of data to be sent to an event <ko>이벤트에 전달되는 데이터 객체</ko>
     * @example
     * ```html
     * <div>
     *    <img src="./1.jpg" data-width="1280" data-height="853" style="width:100%"/>
     *    <img src="./2.jpg" data-width="1280" data-height="853"/>
     *    <img src="ERR" data-width="1280" data-height="853"/>
     * </div>
     * ```
     * ## Javascript
     * ```js
     * import ImReady from "@egjs/imready";
     *
     * const im = new ImReady(); // umd: eg.ImReady
     * im.check(document.querySelectorAll("img")).on({
     *   preReady: e => {
     *     // 0, 3
     *     console.log(e.readyCount, e.totalCount),
     *   },
     * });
     * ```
     */
    this.trigger(new ComponentEvent$1("preReady", {
      readyCount: this.readyCount,
      totalCount: this.totalCount,
      isReady: this.isReady(),
      hasLoading: this.hasLoading()
    }));
  };
  __proto.onReadyElement = function (index) {
    var info = this.elementInfos[index];
    /**
     * An event occurs when the element is ready
     * @ko 해당 엘리먼트가 준비가 되었을 때 이벤트가 발생한다.
     * @event eg.ImReady#readyElement
     * @param {eg.ImReady.OnReadyElement} e - The object of data to be sent to an event <ko>이벤트에 전달되는 데이터 객체</ko>
     * @example
     * ```html
     * <div>
     *    <img src="./1.jpg" data-width="1280" data-height="853" style="width:100%"/>
     *    <img src="./2.jpg" data-width="1280" data-height="853"/>
     *    <img src="ERR" data-width="1280" data-height="853"/>
     * </div>
     * ```
     * ## Javascript
     * ```js
     * import ImReady from "@egjs/imready";
     *
     * const im = new ImReady(); // umd: eg.ImReady
     * im.check(document.querySelectorAll("img")).on({
     *   readyElement: e => {
     *     // 1, 0, false, 3
     *     // 2, 1, false, 3
     *     // 3, 2, true, 3
     *     console.log(e.readyCount, e.index, e.hasError, e.totalCount),
     *   },
     * });
     * ```
     */
    this.trigger(new ComponentEvent$1("readyElement", {
      index: index,
      element: info.element,
      hasError: info.hasError,
      errorCount: this.getErrorCount(),
      totalErrorCount: this.totalErrorCount,
      preReadyCount: this.preReadyCount,
      readyCount: this.readyCount,
      totalCount: this.totalCount,
      isPreReady: this.isPreReady(),
      isReady: this.isReady(),
      hasLoading: info.hasLoading,
      isPreReadyOver: this.isPreReadyOver,
      isSkip: info.isSkip
    }));
  };
  __proto.onReady = function () {
    /**
     * An event occurs when all element are ready
     * @ko 모든 엘리먼트들이 준비된 경우 이벤트가 발생한다.
     * @event eg.ImReady#ready
     * @param {eg.ImReady.OnReady} e - The object of data to be sent to an event <ko>이벤트에 전달되는 데이터 객체</ko>
     * @example
     * ```html
     * <div>
     *    <img src="./1.jpg" data-width="1280" data-height="853" style="width:100%"/>
     *    <img src="./2.jpg" data-width="1280" data-height="853"/>
     *    <img src="ERR" data-width="1280" data-height="853"/>
     * </div>
     * ```
     * ## Javascript
     * ```js
     * import ImReady from "@egjs/imready";
     *
     * const im = new ImReady(); // umd: eg.ImReady
     * im.check(document.querySelectorAll("img")).on({
     *   preReady: e => {
     *     // 0, 3
     *     console.log(e.readyCount, e.totalCount),
     *   },
     *   ready: e => {
     *     // 1, 3
     *     console.log(e.errorCount, e.totalCount),
     *   },
     * });
     * ```
     */
    this.trigger(new ComponentEvent$1("ready", {
      errorCount: this.getErrorCount(),
      totalErrorCount: this.totalErrorCount,
      totalCount: this.totalCount
    }));
  };
  __proto.getErrorCount = function () {
    return this.elementInfos.filter(function (info) {
      return info.hasError;
    }).length;
  };
  __proto.hasLoading = function () {
    return this.elementInfos.some(function (info) {
      return info.hasLoading;
    });
  };
  return ImReadyManager;
}(Component);

var ImageLoader = /*#__PURE__*/function (_super) {
  __extends$1(ImageLoader, _super);
  function ImageLoader() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  var __proto = ImageLoader.prototype;
  __proto.checkElement = function () {
    var element = this.element;
    var src = element.getAttribute("src");
    if (element.complete) {
      if (src) {
        // complete
        if (!element.naturalWidth) {
          this.onAlreadyError(element);
        }
        return false;
      } else {
        // Using an external lazy loading module
        this.onAlreadyPreReady();
      }
    }
    this.addEvents();
    IS_IE && element.setAttribute("src", src);
    return true;
  };
  ImageLoader.EVENTS = ["load", "error"];
  return ImageLoader;
}(Loader);

var VideoLoader = /*#__PURE__*/function (_super) {
  __extends$1(VideoLoader, _super);
  function VideoLoader() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  var __proto = VideoLoader.prototype;
  __proto.checkElement = function () {
    var element = this.element;
    // HAVE_NOTHING: 0, no information whether or not the audio/video is ready
    // HAVE_METADATA: 1, HAVE_METADATA - metadata for the audio/video is ready
    // HAVE_CURRENT_DATA: 2, data for the current playback position is available, but not enough data to play next frame/millisecond
    // HAVE_FUTURE_DATA: 3, data for the current and at least the next frame is available
    // HAVE_ENOUGH_DATA: 4, enough data available to start playing
    if (element.readyState >= 1) {
      return false;
    }
    if (element.error) {
      this.onAlreadyError(element);
      return false;
    }
    this.addEvents();
    return true;
  };
  VideoLoader.EVENTS = ["loadedmetadata", "error"];
  return VideoLoader;
}(Loader);

var ImReady = /*#__PURE__*/function (_super) {
  __extends$1(ImReady, _super);
  function ImReady(options) {
    if (options === void 0) {
      options = {};
    }
    return _super.call(this, __assign$1({
      loaders: {
        img: ImageLoader,
        video: VideoLoader
      }
    }, options)) || this;
  }
  return ImReady;
}(ImReadyManager);

/*
egjs-imready
Copyright (c) 2020-present NAVER Corp.
MIT license
*/

var ImReady$1 = ImReady;

/*
Copyright (c) 2021-present NAVER Corp.
name: @egjs/grid
license: MIT
author: NAVER Corp.
repository: https://github.com/naver/egjs-grid
version: 1.13.0
*/

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

/* global Reflect, Promise */
var extendStatics = function (d, b) {
  extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
  };

  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);

  function __() {
    this.constructor = d;
  }

  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function () {
  __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};
function __decorate(decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __spreadArray(to, from) {
  for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) to[j] = from[i];

  return to;
}

var DEFAULT_GRID_OPTIONS = {
  horizontal: false,
  useTransform: false,
  percentage: false,
  isEqualSize: false,
  isConstantSize: false,
  gap: 0,
  attributePrefix: "data-grid-",
  resizeDebounce: 100,
  maxResizeDebounce: 0,
  autoResize: true,
  preserveUIOnDestroy: false,
  defaultDirection: "end",
  externalContainerManager: null,
  externalItemRenderer: null,
  renderOnPropertyChange: true,
  useFit: true,
  outlineLength: 0,
  outlineSize: 0,
  useRoundedSize: true,
  useResizeObserver: false,
  observeChildren: false
};
var PROPERTY_TYPE;

(function (PROPERTY_TYPE) {
  PROPERTY_TYPE[PROPERTY_TYPE["PROPERTY"] = 1] = "PROPERTY";
  PROPERTY_TYPE[PROPERTY_TYPE["RENDER_PROPERTY"] = 2] = "RENDER_PROPERTY";
})(PROPERTY_TYPE || (PROPERTY_TYPE = {}));

var MOUNT_STATE;

(function (MOUNT_STATE) {
  MOUNT_STATE[MOUNT_STATE["UNCHECKED"] = 1] = "UNCHECKED";
  MOUNT_STATE[MOUNT_STATE["UNMOUNTED"] = 2] = "UNMOUNTED";
  MOUNT_STATE[MOUNT_STATE["MOUNTED"] = 3] = "MOUNTED";
})(MOUNT_STATE || (MOUNT_STATE = {}));

var UPDATE_STATE;

(function (UPDATE_STATE) {
  UPDATE_STATE[UPDATE_STATE["NEED_UPDATE"] = 1] = "NEED_UPDATE";
  UPDATE_STATE[UPDATE_STATE["WAIT_LOADING"] = 2] = "WAIT_LOADING";
  UPDATE_STATE[UPDATE_STATE["UPDATED"] = 3] = "UPDATED";
})(UPDATE_STATE || (UPDATE_STATE = {}));

var GRID_PROPERTY_TYPES = {
  gap: PROPERTY_TYPE.RENDER_PROPERTY,
  defaultDirection: PROPERTY_TYPE.PROPERTY,
  renderOnPropertyChange: PROPERTY_TYPE.PROPERTY,
  preserveUIOnDestroy: PROPERTY_TYPE.PROPERTY,
  useFit: PROPERTY_TYPE.PROPERTY,
  outlineSize: PROPERTY_TYPE.RENDER_PROPERTY,
  outlineLength: PROPERTY_TYPE.RENDER_PROPERTY
};
var RECT_NAMES = {
  horizontal: {
    inlinePos: "top",
    contentPos: "left",
    inlineSize: "height",
    contentSize: "width"
  },
  vertical: {
    inlinePos: "left",
    contentPos: "top",
    inlineSize: "width",
    contentSize: "height"
  }
};

function getKeys(obj) {
  return Object.keys(obj);
}
function getUpdatedItems(items, entries) {
  var mountedItems = getMountedItems(items);
  return diff(entries.map(function (entry) {
    return entry.target;
  }), mountedItems.map(function (item) {
    return item.element;
  })).maintained.filter(function (_a) {
    var prevIndex = _a[0],
        nextIndex = _a[1];
    var entrySize = entries[prevIndex].size;
    var item = items[nextIndex];
    return !item.inlineSize || !item.contentSize || entrySize.inlineSize !== item.computedInlineSize || entrySize.blockSize !== item.computedContentSize;
  }).map(function (_a) {
    var nextIndex = _a[1];
    return items[nextIndex];
  });
}
function getMountedItems(items) {
  return items.filter(function (item) {
    return item.element;
  });
}
function getMountedElements(items) {
  return getMountedItems(items).map(function (item) {
    return item.element;
  });
}
function isString(val) {
  return typeof val === "string";
}
function isNumber(val) {
  return typeof val === "number";
}
function camelize(str) {
  return str.replace(/[\s-_]([a-z])/g, function (all, letter) {
    return letter.toUpperCase();
  });
}
function getDataAttributes(element, attributePrefix) {
  var dataAttributes = {};
  var attributes = element.attributes;
  var length = attributes.length;

  for (var i = 0; i < length; ++i) {
    var attribute = attributes[i];
    var name = attribute.name,
        value = attribute.value;

    if (name.indexOf(attributePrefix) === -1) {
      continue;
    }

    dataAttributes[camelize(name.replace(attributePrefix, ""))] = value;
  }

  return dataAttributes;
}
/* Class Decorator */

function GetterSetter(component) {
  var prototype = component.prototype,
      propertyTypes = component.propertyTypes;

  var _loop_1 = function (name) {
    var shouldRender = propertyTypes[name] === PROPERTY_TYPE.RENDER_PROPERTY;
    var descriptor = Object.getOwnPropertyDescriptor(prototype, name) || {};

    var getter = descriptor.get || function get() {
      return this.options[name];
    };

    var setter = descriptor.set || function set(value) {
      var options = this.options;
      var prevValue = options[name];

      if (prevValue === value) {
        return;
      }

      options[name] = value;

      if (shouldRender && options.renderOnPropertyChange) {
        this.scheduleRender();
      }
    };

    var attributes = {
      enumerable: true,
      configurable: true,
      get: getter,
      set: setter
    };
    Object.defineProperty(prototype, name, attributes);
  };

  for (var name in propertyTypes) {
    _loop_1(name);
  }
}
function range(length) {
  var arr = [];

  for (var i = 0; i < length; ++i) {
    arr.push(i);
  }

  return arr;
}

var ResizeWatcher =
/*#__PURE__*/
function () {
  function ResizeWatcher(container, options) {
    var _this = this;

    if (options === void 0) {
      options = {};
    }

    this._resizeTimer = 0;
    this._maxResizeDebounceTimer = 0;
    this.rect = {
      width: 0,
      height: 0
    };
    this._updatedEntries = [];

    this._onWindowResize = function () {
      _this._scheduleResize([{
        target: _this.container
      }]);
    };

    this._onObserve = function (entries) {
      var options = _this._options;
      var container = _this.container;
      var containerRectBox = options.rectBox;
      var childrenRectBox = options.childrenRectBox;

      _this._scheduleResize(entries.map(function (entry) {
        var target = entry.target;
        var rectBox = target === container ? containerRectBox : childrenRectBox;
        var sizes = rectBox === "border-box" ? entry.borderBoxSize : entry.contentBoxSize; // Safari < 15.3

        if (!sizes) {
          var contentRect = entry.contentRect;
          sizes = [{
            inlineSize: contentRect.width,
            blockSize: contentRect.height
          }];
        }

        return {
          // not array in old browser
          size: sizes[0] || sizes,
          target: entry.target
        };
      }));
    };

    this._scheduleResize = function (entries) {
      var _a = _this._options,
          resizeDebounce = _a.resizeDebounce,
          maxResizeDebounce = _a.maxResizeDebounce;
      var updatedEntries = _this._updatedEntries;
      updatedEntries.push.apply(updatedEntries, entries);
      _this._updatedEntries = updatedEntries.filter(function (entry, index) {
        return updatedEntries.lastIndexOf(entry) === index;
      });

      if (!_this._maxResizeDebounceTimer && maxResizeDebounce >= resizeDebounce) {
        _this._maxResizeDebounceTimer = window.setTimeout(_this._onResize, maxResizeDebounce);
      }

      if (_this._resizeTimer) {
        clearTimeout(_this._resizeTimer);
        _this._resizeTimer = 0;
      }

      _this._resizeTimer = window.setTimeout(_this._onResize, resizeDebounce);
    };

    this._onResize = function () {
      clearTimeout(_this._resizeTimer);
      clearTimeout(_this._maxResizeDebounceTimer);
      _this._maxResizeDebounceTimer = 0;
      _this._resizeTimer = 0;
      var updated = _this._updatedEntries;
      var container = _this.container;
      var containerEntry;
      var childEntries = updated.filter(function (entry) {
        if (entry.target === container) {
          containerEntry = entry;
          return false;
        } else {
          return true;
        }
      });
      var isResizeChildren = childEntries.length > 0;
      var isResizeContainer = !!containerEntry;

      if (isResizeContainer) {
        var watchDirection = _this._options.watchDirection;
        var prevRect = _this.rect;
        var containerEntrySize = containerEntry.size;

        if (containerEntrySize) {
          // ResizeObserver
          _this.setRect({
            width: containerEntrySize.inlineSize,
            height: containerEntrySize.blockSize
          });
        } else {
          // window's resize event
          _this.resize();
        }

        var rect = _this.rect;
        var isWatchWidth = watchDirection === "box" || watchDirection === "width";
        var isWatchHeight = watchDirection === "box" || watchDirection === "height";
        isResizeContainer = !watchDirection || isWatchWidth && prevRect.width !== rect.width || isWatchHeight && prevRect.height !== rect.height;
      }

      _this._updatedEntries = [];

      if (isResizeContainer || isResizeChildren) {
        _this._emitter.trigger("resize", {
          isResizeContainer: isResizeContainer,
          childEntries: childEntries
        });
      }
    };

    this._options = __assign({
      resizeDebounce: 100,
      maxResizeDebounce: 0,
      useResizeObserver: false,
      useWindowResize: true,
      watchDirection: false,
      rectBox: "content-box",
      childrenRectBox: "border-box"
    }, options);
    this.container = isString(container) ? document.querySelector(container) : container;

    this._init();
  }

  var __proto = ResizeWatcher.prototype;

  __proto.getRect = function () {
    return this.rect;
  };

  __proto.setRect = function (rect) {
    this.rect = __assign({}, rect);
  };

  __proto.isObserverEnabled = function () {
    return !!this._observer;
  };

  __proto.resize = function () {
    var container = this.container;
    this.setRect(this._options.rectBox === "border-box" ? {
      width: container.offsetWidth,
      height: container.offsetHeight
    } : {
      width: container.clientWidth,
      height: container.clientHeight
    });
  };

  __proto.observeChildren = function (children) {
    var observer = this._observer;

    if (!observer) {
      return;
    }

    var box = this._options.childrenRectBox;
    children.forEach(function (element) {
      observer.observe(element, {
        box: box
      });
    });
  };

  __proto.unobserveChildren = function (children) {
    var observer = this._observer;

    if (!observer) {
      return;
    }

    children.forEach(function (element) {
      observer.unobserve(element);
    });
  };

  __proto.listen = function (callback) {
    this._emitter.on("resize", callback);

    return this;
  };

  __proto.destroy = function () {
    var _a;

    (_a = this._observer) === null || _a === void 0 ? void 0 : _a.disconnect();

    if (this._options.useWindowResize) {
      window.removeEventListener("resize", this._onWindowResize);
    }
  };

  __proto._init = function () {
    var container = this.container;
    var options = this._options;
    this._emitter = new Component();

    if (options.useResizeObserver && !!window.ResizeObserver) {
      this._observer = new window.ResizeObserver(this._onObserve);

      this._observer.observe(container, {
        box: options.rectBox
      });
    }

    if (options.useWindowResize) {
      window.addEventListener("resize", this._onWindowResize);
    }

    this.resize();
  };

  return ResizeWatcher;
}();

var ContainerManager =
/*#__PURE__*/
function (_super) {
  __extends(ContainerManager, _super);

  function ContainerManager(container, options) {
    var _this = _super.call(this) || this;

    _this.container = container;

    _this._onResize = function (e) {
      _this.trigger("resize", e);
    };

    _this.options = __assign({
      horizontal: DEFAULT_GRID_OPTIONS.horizontal,
      autoResize: DEFAULT_GRID_OPTIONS.autoResize,
      resizeDebounce: DEFAULT_GRID_OPTIONS.resizeDebounce,
      maxResizeDebounce: DEFAULT_GRID_OPTIONS.maxResizeDebounce,
      useResizeObserver: DEFAULT_GRID_OPTIONS.useResizeObserver
    }, options);

    _this._init();

    return _this;
  }

  var __proto = ContainerManager.prototype;

  __proto.resize = function () {
    var container = this.container;
    this.setRect({
      width: container.clientWidth,
      height: container.clientHeight
    });
  };

  __proto.isObserverEnabled = function () {
    return this._watcher.isObserverEnabled();
  };

  __proto.getRect = function () {
    return this._watcher.getRect();
  };

  __proto.observeChildren = function (children) {
    this._watcher.observeChildren(children);
  };

  __proto.unobserveChildren = function (children) {
    this._watcher.unobserveChildren(children);
  };

  __proto.setRect = function (rect) {
    this._watcher.setRect(rect);
  };

  __proto.getInlineSize = function () {
    return this.getRect()[this._names.inlineSize];
  };

  __proto.getContentSize = function () {
    return this.getRect()[this._names.contentSize];
  };

  __proto.getStatus = function () {
    return {
      rect: this._watcher.getRect()
    };
  };

  __proto.setStatus = function (status) {
    this.setRect(status.rect);
    this.setContentSize(this.getContentSize());
  };

  __proto.setContentSize = function (size) {
    var _a;

    var sizeName = this.options.horizontal ? "width" : "height";
    this.setRect(__assign(__assign({}, this.getRect()), (_a = {}, _a[sizeName] = size, _a)));
    this.container.style[sizeName] = size + "px";
  };

  __proto.destroy = function (options) {
    if (options === void 0) {
      options = {};
    }

    this._watcher.destroy();

    if (!options.preserveUI) {
      this.container.style.cssText = this.orgCSSText;
    }
  };

  __proto._init = function () {
    var container = this.container;
    var style = window.getComputedStyle(container);
    this.orgCSSText = container.style.cssText;

    if (style.position === "static") {
      container.style.position = "relative";
    }

    var options = this.options;
    this._watcher = new ResizeWatcher(container, {
      useWindowResize: options.autoResize,
      useResizeObserver: options.useResizeObserver,
      resizeDebounce: options.resizeDebounce,
      maxResizeDebounce: options.maxResizeDebounce,
      watchDirection: options.useResizeObserver ? this._names.inlineSize : false
    }).listen(this._onResize);
  };

  Object.defineProperty(__proto, "_names", {
    get: function () {
      return RECT_NAMES[this.options.horizontal ? "horizontal" : "vertical"];
    },
    enumerable: false,
    configurable: true
  });
  return ContainerManager;
}(Component);

var ItemRenderer =
/*#__PURE__*/
function () {
  function ItemRenderer(options) {
    this.initialRects = {};
    this.sizePercetage = false;
    this.posPercetage = false;
    this.options = __assign({
      attributePrefix: DEFAULT_GRID_OPTIONS.attributePrefix,
      useTransform: DEFAULT_GRID_OPTIONS.useTransform,
      horizontal: DEFAULT_GRID_OPTIONS.horizontal,
      percentage: DEFAULT_GRID_OPTIONS.percentage,
      isEqualSize: DEFAULT_GRID_OPTIONS.isEqualSize,
      isConstantSize: DEFAULT_GRID_OPTIONS.isConstantSize,
      useRoundedSize: DEFAULT_GRID_OPTIONS.useRoundedSize
    }, options);

    this._init();
  }

  var __proto = ItemRenderer.prototype;

  __proto.resize = function () {
    this.initialRects = {};
  };

  __proto.renderItems = function (items) {
    var _this = this;

    items.forEach(function (item) {
      _this._renderItem(item);
    });
  };

  __proto.getInlineSize = function () {
    return this.containerRect[this.options.horizontal ? "height" : "width"];
  };

  __proto.setContainerRect = function (rect) {
    this.containerRect = rect;
  };

  __proto.updateEqualSizeItems = function (items, totalItems) {
    var _this = this;

    this.updateItems(items);
    var hasSizeGroup = items.some(function (item) {
      return item.attributes.sizeGroup;
    }); // Check the rest of the items(totalItems) except `items`.

    if (this.options.isEqualSize || hasSizeGroup) {
      var updatedItem = items.some(function (item) {
        return item.updateState === UPDATE_STATE.UPDATED;
      });

      if (updatedItem) {
        totalItems.forEach(function (item) {
          if (items.indexOf(item) === -1) {
            _this._updateItem(item, true);
          }
        });
      }
    }
  };

  __proto.updateItems = function (items) {
    var _this = this;

    items.forEach(function (item) {
      _this._updateItem(item);
    });
  };

  __proto.getStatus = function () {
    return {
      initialRects: this.initialRects
    };
  };

  __proto.setStatus = function (status) {
    this.initialRects = status.initialRects;
  };

  __proto._init = function () {
    var percentage = this.options.percentage;
    var sizePercentage = false;
    var posPercentage = false;

    if (percentage === true) {
      sizePercentage = true;
      posPercentage = true;
    } else if (percentage) {
      if (percentage.indexOf("position") > -1) {
        posPercentage = true;
      }

      if (percentage.indexOf("size") > -1) {
        sizePercentage = true;
      }
    }

    this.posPercetage = posPercentage;
    this.sizePercetage = sizePercentage;
  };

  __proto._updateItem = function (item, checkSizeGroup) {
    var _a = this.options,
        isEqualSize = _a.isEqualSize,
        isConstantSize = _a.isConstantSize,
        useRoundedSize = _a.useRoundedSize;
    var initialRects = this.initialRects;
    var orgRect = item.orgRect,
        element = item.element;
    var isLoading = item.updateState === UPDATE_STATE.WAIT_LOADING;
    var hasOrgSize = orgRect && orgRect.width && orgRect.height;
    var rect;
    var attributes = element ? getDataAttributes(element, this.options.attributePrefix) : item.attributes;
    var sizeGroup = attributes.sizeGroup || "";
    var isNotEqualSize = attributes.notEqualSize;

    if (sizeGroup && initialRects[sizeGroup]) {
      rect = initialRects[sizeGroup];
    } else if (isEqualSize && !isNotEqualSize && !sizeGroup && initialRects[""]) {
      rect = initialRects[""];
    } else if (isConstantSize && hasOrgSize && !isLoading) {
      rect = orgRect;
    } else if (checkSizeGroup || !element) {
      return;
    } else {
      rect = {
        left: element.offsetLeft,
        top: element.offsetTop,
        width: 0,
        height: 0
      };

      if (useRoundedSize) {
        rect.width = element.offsetWidth;
        rect.height = element.offsetHeight;
      } else {
        var clientRect = element.getBoundingClientRect();
        rect.width = clientRect.width;
        rect.height = clientRect.height;
      }
    }

    item.attributes = attributes;
    item.shouldReupdate = false;

    if (!item.isFirstUpdate || !hasOrgSize) {
      item.orgRect = __assign({}, rect);
    }

    item.rect = __assign({}, rect); // If it's equal size items, it doesn't affect the state.

    if (!checkSizeGroup) {
      if (item.element) {
        item.mountState = MOUNT_STATE.MOUNTED;
      }

      if (item.updateState === UPDATE_STATE.NEED_UPDATE) {
        item.updateState = UPDATE_STATE.UPDATED;
        item.isFirstUpdate = true;
      }

      if (!isLoading && !isNotEqualSize && !initialRects[sizeGroup]) {
        initialRects[sizeGroup] = __assign({}, rect);
      }
    }

    return rect;
  };

  __proto._renderItem = function (item) {
    var element = item.element;
    var cssRect = item.cssRect;

    if (!element || !cssRect) {
      return;
    }

    var _a = this.options,
        horizontal = _a.horizontal,
        useTransform = _a.useTransform;
    var posPercentage = this.posPercetage;
    var sizePercentage = this.sizePercetage;
    var cssTexts = ["position: absolute;"];
    var _b = RECT_NAMES[horizontal ? "horizontal" : "vertical"],
        sizeName = _b.inlineSize,
        posName = _b.inlinePos;
    var inlineSize = this.getInlineSize();
    var keys = getKeys(cssRect);

    if (useTransform) {
      keys = keys.filter(function (key) {
        return key !== "top" && key !== "left";
      });
      cssTexts.push("transform: " + ("translate(" + (cssRect.left || 0) + "px, " + (cssRect.top || 0) + "px);"));
    }

    cssTexts.push.apply(cssTexts, keys.map(function (name) {
      var value = cssRect[name];

      if (name === sizeName && sizePercentage || name === posName && posPercentage) {
        return name + ": " + value / inlineSize * 100 + "%;";
      }

      return name + ": " + value + "px;";
    }));
    element.style.cssText += cssTexts.join("");
  };

  return ItemRenderer;
}();

/**
 * @memberof Grid
 * @implements Grid.GridItem.GridItemStatus
 */

var GridItem =
/*#__PURE__*/
function () {
  /**
   * @constructor
   * @param horizontal - Direction of the scroll movement. (true: horizontal, false: vertical) <ko>스크롤 이동 방향. (true: 가로방향, false: 세로방향)</ko>
   * @param itemStatus - Default status object of GridItem module. <ko>GridItem 모듈의 기본 status 객체.</ko>
   */
  function GridItem(horizontal, itemStatus) {
    if (itemStatus === void 0) {
      itemStatus = {};
    }

    var _a;

    this.horizontal = horizontal;
    /**
     * Whether or not it will be updated upon request.
     * @inner
     */

    this.isUpdating = false;
    /**
     * Whether the item needs to be updated again
     * @inner
     */

    this.shouldReupdate = false;
    this.hasTransition = false;
    this.transitionDuration = "";
    this.isRestoreOrgCSSText = true;
    var element = itemStatus.element;

    var status = __assign({
      key: "",
      orgRect: {
        left: 0,
        top: 0,
        width: 0,
        height: 0
      },
      rect: {
        left: 0,
        top: 0,
        width: 0,
        height: 0
      },
      cssRect: {},
      attributes: {},
      data: {},
      isFirstUpdate: false,
      mountState: MOUNT_STATE.UNCHECKED,
      updateState: UPDATE_STATE.NEED_UPDATE,
      element: element || null,
      orgCSSText: (_a = element === null || element === void 0 ? void 0 : element.style.cssText) !== null && _a !== void 0 ? _a : "",
      gridData: {}
    }, itemStatus);

    for (var name in status) {
      this[name] = status[name];
    }
  }

  var __proto = GridItem.prototype;
  Object.defineProperty(__proto, "orgInlineSize", {
    /**
     * The size in inline direction before first rendering. "width" if horizontal is false, "height" otherwise.
     * @ko 첫 렌더링 되기 전의 inline 방향의 사이즈. horizontal이 false면 "width", 아니면 "height".
     * @member Grid.GridItem#orgInlineSize
     */
    get: function () {
      var name = this._names.inlineSize;
      return this.orgRect[name] || this.rect[name];
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(__proto, "orgContentSize", {
    /**
     * The size in content direction before first rendering. "height" if horizontal is false, "width" otherwise.
     * @ko 첫 렌더링 되기 전의 content 방향의 사이즈. horizontal이 false면 "height", 아니면 "width".
     * @member Grid.GridItem#orgContentSize
     */
    get: function () {
      var name = this._names.contentSize;
      return this.orgRect[name] || this.rect[name];
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(__proto, "inlineSize", {
    /**
     * The size in inline direction. "width" if horizontal is false, "height" otherwise.
     * @ko inline 방향의 사이즈. horizontal이 false면 "width", 아니면 "height".
     * @member Grid.GridItem#inlineSize
     */
    get: function () {
      return this.rect[this._names.inlineSize];
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(__proto, "contentSize", {
    /**
     * The size in content direction. "height" if horizontal is false, "width" otherwise.
     * @ko content 방향의 사이즈. horizontal이 false면 "height", 아니면 "width".
     * @member Grid.GridItem#contentSize
     */
    get: function () {
      return this.rect[this._names.contentSize];
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(__proto, "cssInlineSize", {
    /**
     * The CSS size in inline direction applied to the Grid. "width" if horizontal is false, "height" otherwise.
     * @ko Grid에 적용된 inline 방향의 CSS 사이즈. horizontal이 false면 "width", 아니면 "height".
     * @member Grid.GridItem#cssInlineSize
     */
    get: function () {
      return this.cssRect[this._names.inlineSize];
    },
    set: function (inlineSize) {
      this.cssRect[this._names.inlineSize] = inlineSize;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(__proto, "cssContentSize", {
    /**
     * The CSS size in content direction applied to the Grid. "height" if horizontal is false, "width" otherwise.
     * @ko Grid에 적용된 content 방향의 CSS 사이즈. horizontal이 false면 "height", 아니면 "width".
     * @member Grid.GridItem#cssContentSize
     */
    get: function () {
      return this.cssRect[this._names.contentSize];
    },
    set: function (contentSize) {
      this.cssRect[this._names.contentSize] = contentSize;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(__proto, "cssInlinePos", {
    /**
     * The CSS pos in inline direction applied to the Grid. "left" if horizontal is false, "top" otherwise.
     * @ko Grid에 적용된 inline 방향의 CSS 포지션. horizontal이 false면 "left", 아니면 "top".
     * @member Grid.GridItem#cssInlinePos
     */
    get: function () {
      return this.cssRect[this._names.inlinePos];
    },
    set: function (inlinePos) {
      this.cssRect[this._names.inlinePos] = inlinePos;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(__proto, "cssContentPos", {
    /**
     * The CSS pos in content direction applied to the Grid. "top" if horizontal is false, "left" otherwise.
     * @ko Grid에 적용된 content 방향의 CSS 포지션. horizontal이 false면 "top", 아니면 "left".
     * @member Grid.GridItem#cssContentPos
     */
    get: function () {
      return this.cssRect[this._names.contentPos];
    },
    set: function (contentPos) {
      this.cssRect[this._names.contentPos] = contentPos;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(__proto, "computedInlineSize", {
    /**
     * Calculated size in the direction of the inline applied to the grid. "width" if horizontal is false, "height" otherwise.
     * @ko Grid에 적용된 inline 방향의 계산된 사이즈. horizontal이 false면 "width", 아니면 "height".
     * @member Grid.GridItem#computedInlineSize
     */
    get: function () {
      var name = this._names.inlineSize;
      return this.cssRect[name] || this.rect[name] || this.orgRect[name];
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(__proto, "computedContentSize", {
    /**
     * Calculated size in the direction of the content applied to the grid. "height" if horizontal is false, "width" otherwise.
     * @ko Grid에 적용된 content 방향의 계산된 사이즈. horizontal이 false면 "height", 아니면 "width".
     * @member Grid.GridItem#computedContentSize
     */
    get: function () {
      var name = this._names.contentSize;
      return this.cssRect[name] || this.rect[name] || this.orgRect[name];
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(__proto, "computedInlinePos", {
    /**
     * Calculated position in the direction of the inline applied to the grid. "left" if horizontal is false, "top" otherwise.
     * @ko Grid에 적용된 content 방향의 계산된 포지션. horizontal이 false면 "left", 아니면 "top".
     * @member Grid.GridItem#computedInlinePos
     */
    get: function () {
      var _a;

      var name = this._names.inlinePos;
      return (_a = this.cssRect[name]) !== null && _a !== void 0 ? _a : this.rect[name];
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(__proto, "computedContentPos", {
    /**
     * Calculated position in the direction of the content applied to the grid. "top" if horizontal is false, "left" otherwise.
     * @ko Grid에 적용된 content 방향의 계산된 포지션. horizontal이 false면 "top", 아니면 "left".
     * @member Grid.GridItem#computedContentPos
     */
    get: function () {
      var _a;

      var name = this._names.contentPos;
      return (_a = this.cssRect[name]) !== null && _a !== void 0 ? _a : this.rect[name];
    },
    enumerable: false,
    configurable: true
  });
  /**
   * Set CSS Rect through GridRect.
   * @ko GridRect을 통해 CSS Rect를 설정한다.
   * @param - The style for setting CSS rect. <ko>CSS rect를 설정하기 위한 스타일.</ko>
   */

  __proto.setCSSGridRect = function (gridRect) {
    var names = RECT_NAMES[this.horizontal ? "horizontal" : "vertical"];
    var rect = {};

    for (var name in gridRect) {
      rect[names[name]] = gridRect[name];
    }

    this.cssRect = rect;
  };
  /**
   * Returns the status of the item.
   * @ko 아이템의 상태를 반환한다.
   */


  __proto.getStatus = function () {
    return {
      mountState: this.mountState,
      updateState: this.updateState,
      attributes: this.attributes,
      orgCSSText: this.orgCSSText,
      isFirstUpdate: this.isFirstUpdate,
      element: null,
      key: this.key,
      orgRect: this.orgRect,
      rect: this.rect,
      cssRect: this.cssRect,
      gridData: this.gridData,
      data: this.data
    };
  };
  /**
   * Returns minimized status of the item.
   * @ko 아이템의 간소화된 상태를 반환한다.
   */


  __proto.getMinimizedStatus = function () {
    var status = {
      orgRect: this.orgRect,
      rect: this.rect,
      cssRect: this.cssRect,
      attributes: this.attributes,
      gridData: this.gridData
    };

    var _a = this,
        key = _a.key,
        mountState = _a.mountState,
        updateState = _a.updateState,
        isFirstUpdate = _a.isFirstUpdate,
        orgCSSText = _a.orgCSSText;

    if (typeof key !== "undefined") {
      status.key = key;
    }

    if (mountState !== MOUNT_STATE.UNCHECKED) {
      status.mountState = mountState;
    }

    if (updateState !== UPDATE_STATE.NEED_UPDATE) {
      status.updateState = updateState;
    }

    if (isFirstUpdate) {
      status.isFirstUpdate = true;
    }

    if (orgCSSText) {
      status.orgCSSText = orgCSSText;
    }

    return status;
  };

  Object.defineProperty(__proto, "_names", {
    get: function () {
      return this.horizontal ? RECT_NAMES.horizontal : RECT_NAMES.vertical;
    },
    enumerable: false,
    configurable: true
  });
  return GridItem;
}();

/**
 * @extends eg.Component
 */

var Grid$1 =
/*#__PURE__*/
function (_super) {
  __extends(Grid, _super);
  /**
   * @param - A base element for a module <ko>모듈을 적용할 기준 엘리먼트</ko>
   * @param - The option object of the Grid module <ko>Grid 모듈의 옵션 객체</ko>
   */


  function Grid(containerElement, options) {
    if (options === void 0) {
      options = {};
    }

    var _this = _super.call(this) || this;

    _this.items = [];
    _this.outlines = {
      start: [],
      end: []
    };
    _this._renderTimer = 0;

    _this._onResize = function (e) {
      if (e.isResizeContainer) {
        _this._renderItems({
          useResize: true
        }, true);
      } else {
        var updatedItems = getUpdatedItems(_this.items, e.childEntries);

        if (updatedItems.length > 0) {
          _this.updateItems(updatedItems);
        }
      }
    };

    _this.options = __assign(__assign({}, _this.constructor.defaultOptions), options);
    _this.containerElement = isString(containerElement) ? document.querySelector(containerElement) : containerElement;
    var _a = _this.options,
        isEqualSize = _a.isEqualSize,
        isConstantSize = _a.isConstantSize,
        useTransform = _a.useTransform,
        horizontal = _a.horizontal,
        percentage = _a.percentage,
        externalContainerManager = _a.externalContainerManager,
        externalItemRenderer = _a.externalItemRenderer,
        resizeDebounce = _a.resizeDebounce,
        maxResizeDebounce = _a.maxResizeDebounce,
        autoResize = _a.autoResize,
        useRoundedSize = _a.useRoundedSize,
        useResizeObserver = _a.useResizeObserver; // TODO: 테스트용 설정

    _this.containerManager = externalContainerManager || new ContainerManager(_this.containerElement, {
      horizontal: horizontal,
      resizeDebounce: resizeDebounce,
      maxResizeDebounce: maxResizeDebounce,
      autoResize: autoResize,
      useResizeObserver: useResizeObserver
    }).on("resize", _this._onResize);
    _this.itemRenderer = externalItemRenderer || new ItemRenderer({
      useTransform: useTransform,
      isEqualSize: isEqualSize,
      isConstantSize: isConstantSize,
      percentage: percentage,
      useRoundedSize: useRoundedSize
    });

    _this._init();

    return _this;
  }

  var __proto = Grid.prototype;
  /**
   * Return Container Element.
   * @ko 컨테이너 엘리먼트를 반환한다.
   */

  __proto.getContainerElement = function () {
    return this.containerElement;
  };
  /**
   * Return items.
   * @ko 아이템들을 반환한다.
   */


  __proto.getItems = function () {
    return this.items;
  };
  /**
   * Returns the children of the container element.
   * @ko 컨테이너 엘리먼트의 children을 반환한다.
   */


  __proto.getChildren = function () {
    return [].slice.call(this.containerElement.children);
  };
  /**
   * Set items.
   * @ko 아이템들을 설정한다.
   * @param items - The items to set. <ko>설정할 아이템들</ko>
   */


  __proto.setItems = function (items) {
    var options = this.options;

    if (options.useResizeObserver && options.observeChildren) {
      var containerManager = this.containerManager;
      containerManager.unobserveChildren(getMountedElements(this.items));
      containerManager.observeChildren(getMountedElements(items));
    }

    this.items = items;
    return this;
  };
  /**
   * Gets the container's inline size. ("width" if horizontal is false, otherwise "height")
   * @ko container의 inline 사이즈를 가져온다. (horizontal이 false면 "width", 아니면 "height")
   */


  __proto.getContainerInlineSize = function () {
    return this.containerManager.getInlineSize();
  };
  /**
   * Returns the outlines of the start and end of the Grid.
   * @ko Grid의 처음과 끝의 outline을 반환한다.
   */


  __proto.getOutlines = function () {
    return this.outlines;
  };
  /**
   * Set outlines.
   * @ko 아웃라인을 설정한다.
   * @param outlines - The outlines to set. <ko>설정할 아웃라인.</ko>
   */


  __proto.setOutlines = function (outlines) {
    this.outlines = outlines;
    return this;
  };
  /**
   * When elements change, it synchronizes and renders items.
   * @ko elements가 바뀐 경우 동기화를 하고 렌더링을 한다.
   * @param - Options for rendering. <ko>렌더링을 하기 위한 옵션.</ko>
   */


  __proto.syncElements = function (options) {
    if (options === void 0) {
      options = {};
    }

    var items = this.items;
    var horizontal = this.options.horizontal;
    var elements = this.getChildren();

    var _a = diff(this.items.map(function (item) {
      return item.element;
    }), elements),
        added = _a.added,
        maintained = _a.maintained,
        changed = _a.changed,
        removed = _a.removed;

    var nextItems = [];
    maintained.forEach(function (_a) {
      var beforeIndex = _a[0],
          afterIndex = _a[1];
      nextItems[afterIndex] = items[beforeIndex];
    });
    added.forEach(function (index) {
      nextItems[index] = new GridItem(horizontal, {
        element: elements[index]
      });
    });
    this.setItems(nextItems);

    if (added.length || removed.length || changed.length) {
      this.renderItems(options);
    }

    return this;
  };
  /**
   * Update the size of the items and render them.
   * @ko 아이템들의 사이즈를 업데이트하고 렌더링을 한다.
   * @param - Items to be updated. <ko>업데이트할 아이템들.</ko>
   * @param - Options for rendering. <ko>렌더링을 하기 위한 옵션.</ko>
   */


  __proto.updateItems = function (items, options) {
    if (items === void 0) {
      items = this.items;
    }

    if (options === void 0) {
      options = {};
    }

    var useOrgResize = options.useOrgResize;
    items.forEach(function (item) {
      if (useOrgResize) {
        var orgRect = item.orgRect;
        orgRect.width = 0;
        orgRect.height = 0;
      }

      item.updateState = UPDATE_STATE.NEED_UPDATE;
    });
    this.checkReady(options);
    return this;
  };
  /**
   * Rearrange items to fit the grid and render them. When rearrange is complete, the `renderComplete` event is fired.
   * @ko grid에 맞게 아이템을 재배치하고 렌더링을 한다. 배치가 완료되면 `renderComplete` 이벤트가 발생한다.
   * @param - Options for rendering. <ko>렌더링을 하기 위한 옵션.</ko>
   * @example
   * ```js
   * import { MasonryGrid } from "@egjs/grid";
   * const grid = new MasonryGrid();
   *
   * grid.on("renderComplete", e => {
   *   console.log(e);
   * });
   * grid.renderItems();
   * ```
   */


  __proto.renderItems = function (options) {
    if (options === void 0) {
      options = {};
    }

    this._renderItems(options);

    return this;
  };
  /**
   * Returns current status such as item's position, size. The returned status can be restored with the setStatus() method.
   * @ko 아이템의 위치, 사이즈 등 현재 상태를 반환한다. 반환한 상태는 setStatus() 메서드로 복원할 수 있다.
   * @param - Whether to minimize the status of the item. (default: false) <ko>item의 status를 최소화할지 여부. (default: false)</ko>
   */


  __proto.getStatus = function (minimize) {
    return {
      outlines: this.outlines,
      items: this.items.map(function (item) {
        return minimize ? item.getMinimizedStatus() : item.getStatus();
      }),
      containerManager: this.containerManager.getStatus(),
      itemRenderer: this.itemRenderer.getStatus()
    };
  };
  /**
   * Set status of the Grid module with the status returned through a call to the getStatus() method.
   * @ko getStatus() 메서드에 대한 호출을 통해 반환된 상태로 Grid 모듈의 상태를 설정한다.
   */


  __proto.setStatus = function (status) {
    var _this = this;

    var horizontal = this.options.horizontal;
    var containerManager = this.containerManager;
    var prevInlineSize = containerManager.getInlineSize();
    var children = this.getChildren();
    this.itemRenderer.setStatus(status.itemRenderer);
    containerManager.setStatus(status.containerManager);
    this.outlines = status.outlines;
    this.items = status.items.map(function (item, i) {
      return new GridItem(horizontal, __assign(__assign({}, item), {
        element: children[i]
      }));
    });
    this.itemRenderer.renderItems(this.items);

    if (prevInlineSize !== containerManager.getInlineSize()) {
      this.renderItems({
        useResize: true
      });
    } else {
      window.setTimeout(function () {
        _this._renderComplete({
          direction: _this.defaultDirection,
          mounted: _this.items,
          updated: [],
          isResize: false
        });
      });
    }

    return this;
  };
  /**
   * Get the inline size corresponding to outline.
   * @ko outline에 해당하는 inline 사이즈를 구한다.
   * @param items - Items to get outline size. <ko>outline 사이즈를 구하기 위한 아이템들.</ko>
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars


  __proto.getComputedOutlineSize = function (items) {
    if (items === void 0) {
      items = this.items;
    }

    return this.options.outlineSize || this.getContainerInlineSize();
  };
  /**
   * Get the length corresponding to outline.
   * @ko outline에 해당하는 length를 가져온다.
   * @param items - Items to get outline length. <ko>outline length를 구하기 위한 아이템들.</ko>
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars


  __proto.getComputedOutlineLength = function (items) {
    if (items === void 0) {
      items = this.items;
    }

    return this.options.outlineLength || 1;
  };
  /**
   * Releases the instnace and events and returns the CSS of the container and elements.
   * @ko 인스턴스와 이벤트를 해제하고 컨테이너와 엘리먼트들의 CSS를 되돌린다.
   * @param Options for destroy. <ko>destory()를 위한 옵션</ko>
   */


  __proto.destroy = function (options) {
    var _a;

    if (options === void 0) {
      options = {};
    }

    var _b = options.preserveUI,
        preserveUI = _b === void 0 ? this.options.preserveUIOnDestroy : _b;
    this.containerManager.destroy({
      preserveUI: preserveUI
    });

    if (!preserveUI) {
      this.items.forEach(function (_a) {
        var element = _a.element,
            orgCSSText = _a.orgCSSText;

        if (element) {
          element.style.cssText = orgCSSText;
        }
      });
    }

    (_a = this._im) === null || _a === void 0 ? void 0 : _a.destroy();
  };

  __proto.checkReady = function (options) {
    var _this = this;

    var _a;

    if (options === void 0) {
      options = {};
    } // Grid: renderItems => checkReady => readyItems => applyGrid


    var items = this.items;
    var updated = items.filter(function (item) {
      var _a;

      return ((_a = item.element) === null || _a === void 0 ? void 0 : _a.parentNode) && item.updateState !== UPDATE_STATE.UPDATED;
    });
    var mounted = items.filter(function (item) {
      var _a;

      return ((_a = item.element) === null || _a === void 0 ? void 0 : _a.parentNode) && item.mountState !== MOUNT_STATE.MOUNTED;
    });
    var moreUpdated = [];
    mounted.filter(function (item) {
      if (item.hasTransition) {
        return true;
      } else {
        var element = item.element;
        var transitionDuration = parseFloat(getComputedStyle(element).transitionDuration);

        if (transitionDuration > 0) {
          item.hasTransition = true;
          item.transitionDuration = element.style.transitionDuration;
          return true;
        }
      }

      return false;
    }).forEach(function (item) {
      item.element.style.transitionDuration = "0s";
    });
    (_a = this._im) === null || _a === void 0 ? void 0 : _a.destroy();
    this._im = new ImReady$1({
      prefix: this.options.attributePrefix
    }).on("preReadyElement", function (e) {
      updated[e.index].updateState = UPDATE_STATE.WAIT_LOADING;
    }).on("preReady", function () {
      // reset org size
      updated.forEach(function (item) {
        var hasOrgSize = item.orgRect.width && item.orgRect.height;
        var hasCSSSize = item.cssRect.width || item.cssRect.height;

        if (!hasOrgSize && hasCSSSize) {
          item.element.style.cssText = item.orgCSSText;
        }
      });

      _this._updateItems(updated);

      _this.readyItems(mounted, updated, options);
    }).on("readyElement", function (e) {
      var item = updated[e.index];
      item.updateState = UPDATE_STATE.NEED_UPDATE; // after preReady

      if (e.isPreReadyOver) {
        if (item.isRestoreOrgCSSText) {
          item.element.style.cssText = item.orgCSSText;
        }

        _this._updateItems([item]);

        _this.readyItems([], [item], options);
      }
    }).on("error", function (e) {
      var item = updated[e.index];
      /**
       * This event is fired when an error occurs in the content.
       * @ko 콘텐츠 로드에 에러가 날 때 발생하는 이벤트.
       * @event Grid#contentError
       * @param {Grid.OnContentError} e - The object of data to be sent to an event <ko>이벤트에 전달되는 데이터 객체</ko>
       * @example
       * ```js
       * grid.on("contentError", e => {
       *   e.update();
       * });
       * ```
      */

      _this.trigger("contentError", {
        element: e.element,
        target: e.target,
        item: item,
        update: function () {
          moreUpdated.push(item);
        }
      });
    }).on("ready", function () {
      if (moreUpdated.length) {
        _this.updateItems(moreUpdated);
      }
    }).check(updated.map(function (item) {
      return item.element;
    }));
  };

  __proto.scheduleRender = function () {
    var _this = this;

    this._clearRenderTimer();

    this._renderTimer = window.setTimeout(function () {
      _this.renderItems();
    });
  };

  __proto.fitOutlines = function (useFit) {
    if (useFit === void 0) {
      useFit = this.useFit;
    }

    var outlines = this.outlines;
    var startOutline = outlines.start;
    var endOutline = outlines.end;
    var outlineOffset = startOutline.length ? Math.min.apply(Math, startOutline) : 0; // If the outline is less than 0, a fit occurs forcibly.

    if (!useFit && outlineOffset > 0) {
      return;
    }

    outlines.start = startOutline.map(function (point) {
      return point - outlineOffset;
    });
    outlines.end = endOutline.map(function (point) {
      return point - outlineOffset;
    });
    this.items.forEach(function (item) {
      var contentPos = item.cssContentPos;

      if (!isNumber(contentPos)) {
        return;
      }

      item.cssContentPos = contentPos - outlineOffset;
    });
  };

  __proto.readyItems = function (mounted, updated, options) {
    var prevOutlines = this.outlines;
    var direction = options.direction || this.options.defaultDirection;
    var prevOutline = options.outline || prevOutlines[direction === "end" ? "start" : "end"];
    var items = this.items;
    var nextOutlines = {
      start: __spreadArray([], prevOutline),
      end: __spreadArray([], prevOutline)
    };
    mounted.forEach(function (item) {
      item.mountState = MOUNT_STATE.MOUNTED;
    });
    updated.forEach(function (item) {
      item.isUpdating = true;
    });

    if (items.length) {
      nextOutlines = this.applyGrid(this.items, direction, prevOutline);
    }

    updated.forEach(function (item) {
      item.isUpdating = false;
    });
    this.setOutlines(nextOutlines);
    this.fitOutlines();
    this.itemRenderer.renderItems(this.items);

    this._refreshContainerContentSize();

    var transitionMounted = mounted.filter(function (item) {
      return item.hasTransition;
    });

    if (transitionMounted.length) {
      this.containerManager.resize();
      transitionMounted.forEach(function (item) {
        var element = item.element;
        element.style.transitionDuration = item.transitionDuration;
      });
    }

    this._renderComplete({
      direction: direction,
      mounted: mounted,
      updated: updated,
      isResize: !!options.useResize
    });

    var shouldReupdateItems = updated.filter(function (item) {
      return item.shouldReupdate;
    });

    if (shouldReupdateItems.length) {
      this.updateItems(shouldReupdateItems);
    }
  };

  __proto._isObserverEnabled = function () {
    return this.containerManager.isObserverEnabled();
  };

  __proto._updateItems = function (items) {
    this.itemRenderer.updateEqualSizeItems(items, this.getItems());
  };

  __proto._renderComplete = function (e) {
    /**
     * This event is fired when the Grid has completed rendering.
     * @ko Grid가 렌더링이 완료됐을 때  발생하는 이벤트이다.
     * @event Grid#renderComplete
     * @param {Grid.OnRenderComplete} e - The object of data to be sent to an event <ko>이벤트에 전달되는 데이터 객체</ko>
     * @example
     * ```js
     * grid.on("renderComplete", e => {
     *   console.log(e.mounted, e.updated, e.useResize);
     * });
     * ```
     */
    this.trigger("renderComplete", e);
  };

  __proto._clearRenderTimer = function () {
    clearTimeout(this._renderTimer);
    this._renderTimer = 0;
  };

  __proto._refreshContainerContentSize = function () {
    var _a = this.outlines,
        startOutline = _a.start,
        endOutline = _a.end;
    var gap = this.options.gap;
    var endPoint = endOutline.length ? Math.max.apply(Math, endOutline) : 0;
    var startPoint = startOutline.length ? Math.max.apply(Math, startOutline) : 0;
    var contentSize = Math.max(startPoint, endPoint - gap);
    this.containerManager.setContentSize(contentSize);
  };

  __proto._resizeContainer = function () {
    this.containerManager.resize();
    this.itemRenderer.setContainerRect(this.containerManager.getRect());
  };

  __proto._init = function () {
    this._resizeContainer();
  };

  __proto._renderItems = function (options, isTrusted) {
    if (options === void 0) {
      options = {};
    }

    this._clearRenderTimer();

    var isResize = options.useResize || options.useOrgResize;

    if (isResize && !isTrusted) {
      // Resize container
      // isTrusted has already been resized internally.
      this._resizeContainer();

      this.itemRenderer.resize();
    }

    if (!this.getItems().length && this.getChildren().length) {
      this.syncElements(options);
    } else if (isResize) {
      // Update all items
      this.updateItems(this.items, options);
    } else {
      // Update only items that need to be updated.
      this.checkReady(options);
    }
  };
  Grid.defaultOptions = DEFAULT_GRID_OPTIONS;
  Grid.propertyTypes = GRID_PROPERTY_TYPES;
  Grid = __decorate([GetterSetter], Grid);
  return Grid;
}(Component);
/**
 * Gap used to create space around items.
 * @ko 아이템들 사이의 공간.
 * @name Grid#gap
 * @type {$ts:Grid.GridOptions["gap"]}
 * @default 0
 * @example
 * ```js
 * import { MasonryGrid } from "@egjs/grid";
 *
 * const grid = new MasonryGrid(container, {
 *   gap: 0,
 * });
 *
 * grid.gap = 5;
 * ```
 */

/**
 * The default direction value when direction is not set in the render option.
 * @ko render옵션에서 direction을 미설정시의 기본 방향값.
 * @name Grid#defaultDirection
 * @type {$ts:Grid.GridOptions["defaultDirection"]}
 * @default "end"
 * @example
 * ```js
 * import { MasonryGrid } from "@egjs/grid";
 *
 * const grid = new MasonryGrid(container, {
 *   defaultDirection: "end",
 * });
 *
 * grid.defaultDirection = "start";
 * ```
 */

/**
 * Whether to move the outline to 0 when the top is empty when rendering. However, if it overflows above the top, the outline is forced to 0. (default: true)
 * @ko 렌더링시 상단이 비어있을 때 아웃라인을 0으로 이동시킬지 여부. 하지만 상단보다 넘치는 경우 아웃라인을 0으로 강제 이동한다. (default: true)
 * @name Grid#useFit
 * @type {$ts:Grid.GridOptions["useFit"]}
 * @default true
 * @example
 * ```js
 * import { MasonryGrid } from "@egjs/grid";
 *
 * const grid = new MasonryGrid(container, {
 *   useFit: true,
 * });
 *
 * grid.useFit = false;
 * ```
 */

/**
 * Whether to preserve the UI of the existing container or item when destroying.
 * @ko destroy 시 기존 컨테이너, 아이템의 UI를 보존할지 여부.
 * @name Grid#preserveUIOnDestroy
 * @type {$ts:Grid.GridOptions["preserveUIOnDestroy"]}
 * @default false
 * @example
 * ```js
 * import { MasonryGrid } from "@egjs/grid";
 *
 * const grid = new MasonryGrid(container, {
 *   preserveUIOnDestroy: false,
 * });
 *
 * grid.preserveUIOnDestroy = true;
 * ```
 */

/**
 * The number of outlines. If the number of outlines is 0, it is calculated according to the type of grid.
 * @ko outline의 개수. 아웃라인의 개수가 0이라면 grid의 종류에 따라 계산이 된다.
 * @name Grid#outlineLength
 * @type {$ts:Grid.GridOptions["outlineLength"]}
 * @default 0
 * @example
 * ```js
 * import { MasonryGrid } from "@egjs/grid";
 *
 * const grid = new MasonryGrid(container, {
 *   outlineLength: 0,
 *   outlineSize: 0,
 * });
 *
 * grid.outlineLength = 3;
 * ```
 */

/**
 * The size of the outline. If the outline size is 0, it is calculated according to the grid type.
 * @ko outline의 사이즈. 만약 outline의 사이즈가 0이면, grid의 종류에 따라 계산이 된다.
 * @name Grid#outlineSize
 * @type {$ts:Grid.GridOptions["outlineSize"]}
 * @default 0
 * @example
 * ```js
 * import { MasonryGrid } from "@egjs/grid";
 *
 * const grid = new MasonryGrid(container, {
 *   outlineLength: 0,
 *   outlineSize: 0,
 * });
 *
 * grid.outlineSize = 300;
 * ```
 */

function getColumnPoint(outline, columnIndex, columnCount, pointCaculationName) {
  return Math[pointCaculationName].apply(Math, outline.slice(columnIndex, columnIndex + columnCount));
}

function getColumnIndex(outline, columnCount, nearestCalculationName) {
  var length = outline.length - columnCount + 1;
  var pointCaculationName = nearestCalculationName === "max" ? "min" : "max";
  var indexCaculationName = nearestCalculationName === "max" ? "lastIndexOf" : "indexOf";
  var points = range(length).map(function (index) {
    return getColumnPoint(outline, index, columnCount, pointCaculationName);
  });
  return points[indexCaculationName](Math[nearestCalculationName].apply(Math, points));
}
/**
 * MasonryGrid is a grid that stacks items with the same width as a stack of bricks. Adjust the width of all images to the same size, find the lowest height column, and insert a new item.
 * @ko MasonryGrid는 벽돌을 쌓아 올린 모양처럼 동일한 너비를 가진 아이템를 쌓는 레이아웃이다. 모든 이미지의 너비를 동일한 크기로 조정하고, 가장 높이가 낮은 열을 찾아 새로운 이미지를 삽입한다. 따라서 배치된 아이템 사이에 빈 공간이 생기지는 않지만 배치된 레이아웃의 아래쪽은 울퉁불퉁해진다.
 * @memberof Grid
 * @param {HTMLElement | string} container - A base element for a module <ko>모듈을 적용할 기준 엘리먼트</ko>
 * @param {Grid.MasonryGrid.MasonryGridOptions} options - The option object of the MasonryGrid module <ko>MasonryGrid 모듈의 옵션 객체</ko>
 */


var MasonryGrid =
/*#__PURE__*/
function (_super) {
  __extends(MasonryGrid, _super);

  function MasonryGrid() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  var __proto = MasonryGrid.prototype;

  __proto.applyGrid = function (items, direction, outline) {
    items.forEach(function (item) {
      item.isRestoreOrgCSSText = false;
    });
    var columnSize = this.getComputedOutlineSize(items);
    var column = this.getComputedOutlineLength(items);
    var _a = this.options,
        gap = _a.gap,
        align = _a.align,
        observeChildren = _a.observeChildren,
        columnSizeRatio = _a.columnSizeRatio;
    var outlineLength = outline.length;
    var itemsLength = items.length;

    var alignPoses = this._getAlignPoses(column, columnSize);

    var isEndDirection = direction === "end";
    var nearestCalculationName = isEndDirection ? "min" : "max";
    var pointCalculationName = isEndDirection ? "max" : "min";
    var startOutline = [0];

    if (outlineLength === column) {
      startOutline = outline.slice();
    } else {
      var point_1 = outlineLength ? Math[pointCalculationName].apply(Math, outline) : 0;
      startOutline = range(column).map(function () {
        return point_1;
      });
    }

    var endOutline = startOutline.slice();
    var columnDist = column > 1 ? alignPoses[1] - alignPoses[0] : 0;
    var isStretch = align === "stretch";

    var _loop_1 = function (i) {
      var item = items[isEndDirection ? i : itemsLength - 1 - i];
      var columnAttribute = parseInt(item.attributes.column || "1", 10);
      var maxColumnAttribute = parseInt(item.attributes.maxColumn || "1", 10);
      var contentSize = item.contentSize;
      var columnCount = Math.min(column, columnAttribute || Math.max(1, Math.ceil((item.inlineSize + gap) / columnDist)));
      var maxColumnCount = Math.min(column, Math.max(columnCount, maxColumnAttribute));
      var columnIndex = getColumnIndex(endOutline, columnCount, nearestCalculationName);
      var contentPos = getColumnPoint(endOutline, columnIndex, columnCount, pointCalculationName);

      while (columnCount < maxColumnCount) {
        var nextEndColumnIndex = columnIndex + columnCount;
        var nextColumnIndex = columnIndex - 1;

        if (isEndDirection && (nextEndColumnIndex >= column || endOutline[nextEndColumnIndex] > contentPos)) {
          break;
        }

        if (!isEndDirection && (nextColumnIndex < 0 || endOutline[nextColumnIndex]) < contentPos) {
          break;
        }

        if (!isEndDirection) {
          --columnIndex;
        }

        ++columnCount;
      }

      columnIndex = Math.max(0, columnIndex);
      columnCount = Math.min(column - columnIndex, columnCount); // stretch mode or data-grid-column > "1"

      if (columnAttribute > 0 && columnCount > 1 || isStretch) {
        var nextInlineSize = (columnCount - 1) * columnDist + columnSize;

        if ((!this_1._isObserverEnabled() || !observeChildren) && item.cssInlineSize !== nextInlineSize) {
          item.shouldReupdate = true;
        }

        item.cssInlineSize = nextInlineSize;
      }

      if (columnSizeRatio > 0) {
        contentSize = item.computedInlineSize / columnSizeRatio;
        item.cssContentSize = contentSize;
      }

      var inlinePos = alignPoses[columnIndex];
      contentPos = isEndDirection ? contentPos : contentPos - gap - contentSize;
      item.cssInlinePos = inlinePos;
      item.cssContentPos = contentPos;
      var nextOutlinePoint = isEndDirection ? contentPos + contentSize + gap : contentPos;
      range(columnCount).forEach(function (indexOffset) {
        endOutline[columnIndex + indexOffset] = nextOutlinePoint;
      });
    };

    var this_1 = this;

    for (var i = 0; i < itemsLength; ++i) {
      _loop_1(i);
    } // if end items, startOutline is low, endOutline is high
    // if start items, startOutline is high, endOutline is low


    return {
      start: isEndDirection ? startOutline : endOutline,
      end: isEndDirection ? endOutline : startOutline
    };
  };

  __proto.getComputedOutlineSize = function (items) {
    if (items === void 0) {
      items = this.items;
    }

    var _a = this.options,
        gap = _a.gap,
        align = _a.align;
    var containerInlineSize = this.getContainerInlineSize();
    var columnSizeOption = this.columnSize || this.outlineSize;
    var columnOption = this.column || this.outlineLength;
    var column = columnOption || 1;
    var columnSize = 0;

    if (align === "stretch") {
      if (!columnOption) {
        var maxStretchColumnSize = this.maxStretchColumnSize || Infinity;
        column = Math.max(1, Math.ceil((containerInlineSize + gap) / (maxStretchColumnSize + gap)));
      }

      columnSize = (containerInlineSize + gap) / (column || 1) - gap;
    } else if (columnSizeOption) {
      columnSize = columnSizeOption;
    } else if (items.length) {
      var checkedItem = items[0];

      for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
        var item = items_1[_i];
        var attributes = item.attributes;

        if (item.updateState !== UPDATE_STATE.UPDATED || !item.inlineSize || attributes.column || attributes.maxColumnCount) {
          continue;
        }

        checkedItem = item;
        break;
      }

      var inlineSize = checkedItem.inlineSize || 0;
      columnSize = inlineSize;
    } else {
      columnSize = containerInlineSize;
    }

    return columnSize || 0;
  };

  __proto.getComputedOutlineLength = function (items) {
    if (items === void 0) {
      items = this.items;
    }

    var gap = this.gap;
    var columnOption = this.column || this.outlineLength;
    var columnCalculationThreshold = this.columnCalculationThreshold;
    var column = 1;

    if (columnOption) {
      column = columnOption;
    } else {
      var columnSize = this.getComputedOutlineSize(items);
      column = Math.min(items.length, Math.max(1, Math.floor((this.getContainerInlineSize() + gap) / (columnSize - columnCalculationThreshold + gap))));
    }

    return column;
  };

  __proto._getAlignPoses = function (column, columnSize) {
    var _a = this.options,
        align = _a.align,
        gap = _a.gap;
    var containerSize = this.getContainerInlineSize();
    var indexes = range(column);
    var offset = 0;
    var dist = 0;

    if (align === "justify" || align === "stretch") {
      var countDist = column - 1;
      dist = countDist ? Math.max((containerSize - columnSize) / countDist, columnSize + gap) : 0;
      offset = Math.min(0, containerSize / 2 - (countDist * dist + columnSize) / 2);
    } else {
      dist = columnSize + gap;
      var totalColumnSize = (column - 1) * dist + columnSize;

      if (align === "center") {
        offset = (containerSize - totalColumnSize) / 2;
      } else if (align === "end") {
        offset = containerSize - totalColumnSize;
      }
    }

    return indexes.map(function (i) {
      return offset + i * dist;
    });
  };

  MasonryGrid.propertyTypes = __assign(__assign({}, Grid$1.propertyTypes), {
    column: PROPERTY_TYPE.RENDER_PROPERTY,
    columnSize: PROPERTY_TYPE.RENDER_PROPERTY,
    columnSizeRatio: PROPERTY_TYPE.RENDER_PROPERTY,
    align: PROPERTY_TYPE.RENDER_PROPERTY,
    columnCalculationThreshold: PROPERTY_TYPE.RENDER_PROPERTY,
    maxStretchColumnSize: PROPERTY_TYPE.RENDER_PROPERTY
  });
  MasonryGrid.defaultOptions = __assign(__assign({}, Grid$1.defaultOptions), {
    align: "justify",
    column: 0,
    columnSize: 0,
    columnSizeRatio: 0,
    columnCalculationThreshold: 0.5,
    maxStretchColumnSize: Infinity
  });
  MasonryGrid = __decorate([GetterSetter], MasonryGrid);
  return MasonryGrid;
}(Grid$1);

const css = {
  code: ".insight.svelte-1x9t208.svelte-1x9t208{background-color:#F2F2F2;padding:4rem 0;margin-bottom:0}.insight__pre-heading.svelte-1x9t208.svelte-1x9t208{color:#00ADEE;margin-bottom:2rem;display:block}.insight__content__wrapper.svelte-1x9t208.svelte-1x9t208{padding-left:4rem}@media(max-width: 767px){.insight__content__wrapper.svelte-1x9t208.svelte-1x9t208{padding:0}}.insight__content__wrapper__pre-heading.svelte-1x9t208.svelte-1x9t208{color:#263A63;font-weight:500}@media(max-width: 767px){.insight__content__wrapper__pre-heading.svelte-1x9t208.svelte-1x9t208{padding:1rem 0 0}}.insight__content__wrapper.svelte-1x9t208 h2.svelte-1x9t208{margin:1rem 0 2rem}.insight__content__wrapper__btns.svelte-1x9t208.svelte-1x9t208{text-align:center}.insight__content__wrapper.svelte-1x9t208 .btn-inverted.svelte-1x9t208{background-color:#fff}",
  map: null
};
const domain = "https://strapi.ulfbuilt.com:1337";
const ArticleSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let promise = fetchCta();
  async function fetchCta() {
    const url = "https://strapi.ulfbuilt.com:1337/api/global-article-cta?populate=deep,2";
    const headers = {
      Authorization: "Bearer ec0d6b5aece1773cbd6e5f48756c70d9b0b3a59a4d1c325a2e699c1c1b1cae0980dc56aa2c3dfd565237b2a00db9a547a1a9e54a86f80697b31766e6bf80257b37760df84c70b534edeb4df0bdde9452777a52a757850d7a82c28dba854776c405f20ef3fbd95c72b759280f375f69191f2ca75d69600ea9584d8b2100309072"
    };
    try {
      const response = await axios.get(url, { headers });
      return response.data.data.attributes;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  $$result.css.add(css);
  return `${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `
`;
    }
    return function(insight) {
      return ` 
	<section class="insight svelte-1x9t208">${validate_component(Container, "Container").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Col, "Col").$$render($$result, {}, {}, {
                default: () => {
                  return `<span class="insight__pre-heading svelte-1x9t208">${escape(insight.leftPreHeading)}</span>`;
                }
              })}`;
            }
          })}
			${validate_component(Row, "Row").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Col, "Col").$$render($$result, { md: "6", class: "" }, {}, {
                default: () => {
                  return `<img src="${escape(domain, true) + escape(insight.image.data.attributes.url, true)}" alt="Stair">`;
                }
              })}
				${validate_component(Col, "Col").$$render($$result, { md: "6", class: "my-auto" }, {}, {
                default: () => {
                  return `<div class="insight__content"><div class="insight__content__wrapper svelte-1x9t208"><div class="insight__content__wrapper__pre-heading svelte-1x9t208">${escape(insight.rightPreHeading)}</div>
							<h2 class="svelte-1x9t208">${escape(insight.Heading)}</h2>
							<!-- HTML_TAG_START -->${insight.paragprah}<!-- HTML_TAG_END -->
							<div class="insight__content__wrapper__btns svelte-1x9t208"><a${add_attribute("href", insight.leftBtnUrl, 0)} class="btn btn-secondary">${escape(insight.leftBtnTitle)}</a> <a${add_attribute("href", insight.rightBtnUrl, 0)} class="btn btn-inverted svelte-1x9t208">${escape(insight.rightBtnTitle)}</a></div></div></div>`;
                }
              })}`;
            }
          })}`;
        }
      })}</section>
`;
    }(__value);
  }(promise)}`;
});
const Grid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { GridClass } = $$props;
  createEventDispatcher();
  let container;
  let grid;
  let attributes = {};
  onDestroy(() => {
  });
  function getInstance() {
    return grid;
  }
  if ($$props.GridClass === void 0 && $$bindings.GridClass && GridClass !== void 0)
    $$bindings.GridClass(GridClass);
  if ($$props.getInstance === void 0 && $$bindings.getInstance && getInstance !== void 0)
    $$bindings.getInstance(getInstance);
  return `<div${spread([escape_object(attributes)], {})}${add_attribute("this", container, 0)}>${slots.default ? slots.default({}) : ``}</div>`;
});
let SvelteMasonryGrid;
if (typeof Grid === "object") {
  SvelteMasonryGrid = Grid;
} else {
  SvelteMasonryGrid = class SvelteMasonryGrid extends Grid {
    constructor(options) {
      options.props.GridClass = MasonryGrid;
      super(options);
    }
  };
}

export { ArticleSection as A, SvelteMasonryGrid as S };
//# sourceMappingURL=MasonryCard.svelte_svelte_type_style_lang-2395c6d7.js.map
