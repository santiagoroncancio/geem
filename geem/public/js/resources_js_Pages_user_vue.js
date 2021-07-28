(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_User_vue"],{

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/User.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/User.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var vue_paginate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-paginate */ "./node_modules/vue-paginate/dist/vue-paginate.js");
/* harmony import */ var vue_paginate__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_paginate__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


vue__WEBPACK_IMPORTED_MODULE_2__.default.use((vue_paginate__WEBPACK_IMPORTED_MODULE_1___default()));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      people: [],
      paginate: ['people']
    };
  },
  methods: {
    listar: function listar() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var ent;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.get('/api/user');

              case 2:
                ent = _context.sent;
                _this.people = ent.data;

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  },
  created: function created() {
    this.listar();
  }
});

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./resources/js/Pages/User.vue":
/*!*************************************!*\
  !*** ./resources/js/Pages/User.vue ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _User_vue_vue_type_template_id_777c8574___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./User.vue?vue&type=template&id=777c8574& */ "./resources/js/Pages/User.vue?vue&type=template&id=777c8574&");
/* harmony import */ var _User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./User.vue?vue&type=script&lang=js& */ "./resources/js/Pages/User.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _User_vue_vue_type_template_id_777c8574___WEBPACK_IMPORTED_MODULE_0__.render,
  _User_vue_vue_type_template_id_777c8574___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/User.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/User.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./resources/js/Pages/User.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./User.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/User.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/User.vue?vue&type=template&id=777c8574&":
/*!********************************************************************!*\
  !*** ./resources/js/Pages/User.vue?vue&type=template&id=777c8574& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_template_id_777c8574___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_template_id_777c8574___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_template_id_777c8574___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./User.vue?vue&type=template&id=777c8574& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/User.vue?vue&type=template&id=777c8574&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/User.vue?vue&type=template&id=777c8574&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/User.vue?vue&type=template&id=777c8574& ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "container" },
    [
      _c("h2", { staticClass: "text-center" }, [_vm._v("Usuarios")]),
      _vm._v(" "),
      _c("paginate", { attrs: { name: "people", list: _vm.people, per: 10 } }, [
        _c("table", { staticClass: "table table-striped" }, [
          _c("thead", [
            _c("tr", [
              _c("th", { attrs: { scope: "col" } }, [_vm._v("#")]),
              _vm._v(" "),
              _c("th", { attrs: { scope: "col" } }, [_vm._v("Documento")]),
              _vm._v(" "),
              _c("th", { attrs: { scope: "col" } }, [_vm._v("Nombre")]),
              _vm._v(" "),
              _c("th", { attrs: { scope: "col" } }, [_vm._v("Apellido")])
            ])
          ]),
          _vm._v(" "),
          _c(
            "tbody",
            _vm._l(_vm.paginated("people"), function(person) {
              return _c("tr", { key: person.id }, [
                _c("th", { attrs: { scope: "row" } }, [
                  _vm._v(_vm._s(person.id))
                ]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(person.document))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(person.name))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(person.lastname))])
              ])
            }),
            0
          )
        ])
      ]),
      _vm._v(" "),
      _c("paginate-links", {
        attrs: {
          for: "people",
          classes: {
            ul: ["pagination", "justify-content-center"],
            li: "page-item",
            a: "page-link"
          }
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-paginate/dist/vue-paginate.js":
/*!********************************************************!*\
  !*** ./node_modules/vue-paginate/dist/vue-paginate.js ***!
  \********************************************************/
/***/ (function(module) {

/**
 * vue-paginate v3.6.0
 * (c) 2018 Taha Shashtari
 * @license MIT
 */
(function (global, factory) {
   true ? module.exports = factory() :
  0;
}(this, function () { 'use strict';

  var warn = function () {}
  var formatComponentName

  var hasConsole = typeof console !== 'undefined'

  warn = function (msg, vm, type) {
    if ( type === void 0 ) type = 'error';

    if (hasConsole) {
      console[type]("[vue-paginate]: " + msg + " " + (
        vm ? formatLocation(formatComponentName(vm)) : ''
        ))
    }
  }

  formatComponentName = function (vm) {
    if (vm.$root === vm) {
      return 'root instance'
    }
    var name = vm._isVue
    ? vm.$options.name || vm.$options._componentTag
    : vm.name
    return (
      (name ? ("component <" + name + ">") : "anonymous component") +
      (vm._isVue && vm.$options.__file ? (" at " + (vm.$options.__file)) : '')
      )
  }

  var formatLocation = function (str) {
    if (str === 'anonymous component') {
      str += " - use the \"name\" option for better debugging messages."
    }
    return ("\n(found in " + str + ")")
  }

  var Paginate = {
    name: 'paginate',
    props: {
      name: {
        type: String,
        required: true
      },
      list: {
        type: Array,
        required: true
      },
      per: {
        type: Number,
        default: 3,
        validator: function validator (value) {
          return value > 0
        }
      },
      tag: {
        type: String,
        default: 'ul'
      },
      container: {
        type: Object,
        default: null
      }
    },
    data: function data () {
      return {
        initialListSize: this.list.length
      }
    },
    computed: {
      parent: function parent () {
        return this.container ? this.container : this.$parent
      },
      currentPage: {
        get: function get () {
          if (this.parent.paginate[this.name]) {
            return this.parent.paginate[this.name].page
          }
        },
        set: function set (page) {
          this.parent.paginate[this.name].page = page
        }
      },
      pageItemsCount: function pageItemsCount () {
        var numOfItems = this.list.length
        var first = this.currentPage * this.per + 1
        var last = Math.min((this.currentPage * this.per) + this.per, numOfItems)
        return (first + "-" + last + " of " + numOfItems)
      },

      lastPage: function lastPage () {
        return Math.ceil(this.list.length / this.per)
      }
    },
    mounted: function mounted () {
      if (this.per <= 0) {
        warn(("<paginate name=\"" + (this.name) + "\"> 'per' prop can't be 0 or less."), this.parent)
      }
      if (!this.parent.paginate[this.name]) {
        warn(("'" + (this.name) + "' is not registered in 'paginate' array."), this.parent)
        return
      }
      this.paginateList()
    },
    watch: {
      currentPage: function currentPage () {
        this.paginateList()
      },
      list: function list () {
        if (this.currentPage >= this.lastPage) {
          this.currentPage = this.lastPage - 1
        }
        this.paginateList()
      },
      per: function per () {
        this.currentPage = 0
        this.paginateList()
      }
    },
    methods: {
      paginateList: function paginateList () {
        var index = this.currentPage * this.per
        var paginatedList = this.list.slice(index, index + this.per)
        this.parent.paginate[this.name].list = paginatedList
      },
      goToPage: function goToPage (page) {
        var lastPage = Math.ceil(this.list.length / this.per)
        if (page > lastPage) {
          warn(("You cannot go to page " + page + ". The last page is " + lastPage + "."), this.parent)
          return
        }
        this.currentPage = page - 1
      }
    },
    render: function render (h) {
      return h(this.tag, {}, this.$slots.default)
    }
  }

  var LEFT_ARROW = '«'
  var RIGHT_ARROW = '»'
  var ELLIPSES = '…'

  var LimitedLinksGenerator = function LimitedLinksGenerator (listOfPages, currentPage, limit) {
    this.listOfPages = listOfPages
    this.lastPage = listOfPages.length - 1
    this.currentPage = currentPage === this.lastPage
      ? this.lastPage - 1
      : currentPage
    this.limit = limit
  };

  LimitedLinksGenerator.prototype.generate = function generate () {
    var firstHalf = this._buildFirstHalf()
    var secondHalf = this._buildSecondHalf()
    return firstHalf.concat( secondHalf)
  };

  LimitedLinksGenerator.prototype._buildFirstHalf = function _buildFirstHalf () {
    var firstHalf = this._allPagesButLast()
      .slice(
        this._currentChunkIndex(),
        this._currentChunkIndex() + this.limit
      )
    // Add backward ellipses with first page if needed
    if (this.currentPage >= this.limit) {
      firstHalf.unshift(ELLIPSES)
      firstHalf.unshift(0)
    }
    // Add ellipses if needed
    if (this.lastPage - this.limit > this._currentChunkIndex()) {
      firstHalf.push(ELLIPSES)
    }
    return firstHalf
  };

  LimitedLinksGenerator.prototype._buildSecondHalf = function _buildSecondHalf () {
    var secondHalf = [this.lastPage]
    return secondHalf
  };

  LimitedLinksGenerator.prototype._currentChunkIndex = function _currentChunkIndex () {
    var currentChunk = Math.floor(this.currentPage / this.limit)
    return currentChunk * this.limit 
  };

  LimitedLinksGenerator.prototype._allPagesButLast = function _allPagesButLast () {
      var this$1 = this;

    return this.listOfPages.filter(function (n) { return n !== this$1.lastPage; })
  };

  var PaginateLinks = {
    name: 'paginate-links',
    props: {
      for: {
        type: String,
        required: true
      },
      limit: {
        type: Number,
        default: 0
      },
      simple: {
        type: Object,
        default: null,
        validator: function validator (obj) {
          return obj.prev && obj.next
        }
      },
      stepLinks: {
        type: Object,
        default: function () {
          return {
            prev: LEFT_ARROW,
            next: RIGHT_ARROW
          }
        },
        validator: function validator$1 (obj) {
          return obj.prev && obj.next
        }
      },
      showStepLinks: {
        type: Boolean
      },
      hideSinglePage: {
        type: Boolean
      },
      classes: {
        type: Object,
        default: null
      },
      async: {
        type: Boolean,
        default: false
      },
      container: {
        type: Object,
        default: null
      }
    },
    data: function data () {
      return {
        listOfPages: [],
        numberOfPages: 0,
        target: null
      }
    },
    computed: {
      parent: function parent () {
        return this.container ? this.container.el : this.$parent
      },
      state: function state () {
        return this.container ? this.container.state : this.$parent.paginate[this.for]
      },
      currentPage: {
        get: function get () {
          if (this.state) {
            return this.state.page
          }
        },
        set: function set (page) {
          this.state.page = page
        }
      }
    },
    mounted: function mounted () {
      var this$1 = this;

      if (this.simple && this.limit) {
        warn(("<paginate-links for=\"" + (this.for) + "\"> 'simple' and 'limit' props can't be used at the same time. In this case, 'simple' will take precedence, and 'limit' will be ignored."), this.parent, 'warn')
      }
      if (this.simple && !this.simple.next) {
        warn(("<paginate-links for=\"" + (this.for) + "\"> 'simple' prop doesn't contain 'next' value."), this.parent)
      }
      if (this.simple && !this.simple.prev) {
        warn(("<paginate-links for=\"" + (this.for) + "\"> 'simple' prop doesn't contain 'prev' value."), this.parent)
      }
      if (this.stepLinks && !this.stepLinks.next) {
        warn(("<paginate-links for=\"" + (this.for) + "\"> 'step-links' prop doesn't contain 'next' value."), this.parent)
      }
      if (this.stepLinks && !this.stepLinks.prev) {
        warn(("<paginate-links for=\"" + (this.for) + "\"> 'step-links' prop doesn't contain 'prev' value."), this.parent)
      }
      this.$nextTick(function () {
        this$1.updateListOfPages()
      })
    },
    watch: {
      'state': {
        handler: function handler () {
          this.updateListOfPages()
        },
        deep: true
      },
      currentPage: function currentPage (toPage, fromPage) {
        this.$emit('change', toPage + 1, fromPage + 1)
      }
    },
    methods: {
      updateListOfPages: function updateListOfPages () {
        this.target = getTargetPaginateComponent(this.parent.$children, this.for)
        if (!this.target) {
          if (this.async) { return }
          warn(("<paginate-links for=\"" + (this.for) + "\"> can't be used without its companion <paginate name=\"" + (this.for) + "\">"), this.parent)
          warn("To fix that issue you may need to use :async=\"true\" on <paginate-links> component to allow for asyncronous rendering", this.parent, 'warn')
          return
        }
        this.numberOfPages = Math.ceil(this.target.list.length / this.target.per)
        this.listOfPages = getListOfPageNumbers(this.numberOfPages)
      }
    },
    render: function render (h) {
      var this$1 = this;

      if (!this.target && this.async) { return null }

      var links = this.simple
        ? getSimpleLinks(this, h)
        : this.limit > 1
        ? getLimitedLinks(this, h)
        : getFullLinks(this, h)

      if (this.hideSinglePage && this.numberOfPages <= 1) {
        return null
      }

      var el = h('ul', {
        class: ['paginate-links', this.for]
      }, links)

      if (this.classes) {
        this.$nextTick(function () {
          addAdditionalClasses(el.elm, this$1.classes)
        })
      }
      return el
    }
  }

  function getFullLinks (vm, h) {
    var allLinks = vm.showStepLinks
      ? [vm.stepLinks.prev ].concat( vm.listOfPages, [vm.stepLinks.next])
      : vm.listOfPages
    return allLinks.map(function (link) {
      var data = {
        on: {
          click: function (e) {
            e.preventDefault()
            vm.currentPage = getTargetPageForLink(
              link,
              vm.limit,
              vm.currentPage,
              vm.listOfPages,
              vm.stepLinks
            )
          }
        }
      }
      var liClasses = getClassesForLink(
        link,
        vm.currentPage,
        vm.listOfPages.length - 1,
        vm.stepLinks
      )
      var linkText = link === vm.stepLinks.next || link === vm.stepLinks.prev
        ? link
        : link + 1 // it means it's a number
      return h('li', { class: liClasses }, [h('a', data, linkText)])
    })
  }

  function getLimitedLinks (vm, h) {
    var limitedLinks = new LimitedLinksGenerator(
      vm.listOfPages,
      vm.currentPage,
      vm.limit,
      vm.stepLinks
    ).generate()

    limitedLinks = vm.showStepLinks
      ? [vm.stepLinks.prev ].concat( limitedLinks, [vm.stepLinks.next])
      : limitedLinks

    var limitedLinksMetadata = getLimitedLinksMetadata(limitedLinks)

    return limitedLinks.map(function (link, index) {
      var data = {
        on: {
          click: function (e) {
            e.preventDefault()
            vm.currentPage = getTargetPageForLink(
              link,
              vm.limit,
              vm.currentPage,
              vm.listOfPages,
              vm.stepLinks,
              limitedLinksMetadata[index]
            )
          }
        }
      }
      var liClasses = getClassesForLink(
        link,
        vm.currentPage,
        vm.listOfPages.length - 1,
        vm.stepLinks
      )
      // If the link is a number,
      // then incremented by 1 (since it's 0 based).
      // otherwise, do nothing (so, it's a symbol).
      var text = (link === parseInt(link, 10)) ? link + 1 : link
      return h('li', { class: liClasses }, [h('a', data, text)])
    })
  }

  function getSimpleLinks (vm, h) {
    var lastPage = vm.listOfPages.length - 1
    var prevData = {
      on: {
        click: function (e) {
          e.preventDefault()
          if (vm.currentPage > 0) { vm.currentPage -= 1 }
        }
      }
    }
    var nextData = {
      on: {
        click: function (e) {
          e.preventDefault()
          if (vm.currentPage < lastPage) { vm.currentPage += 1 }
        }
      }
    }
    var nextListData = { class: ['next', vm.currentPage >= lastPage ? 'disabled' : ''] }
    var prevListData = { class: ['prev', vm.currentPage <= 0 ? 'disabled' : ''] }
    var prevLink = h('li', prevListData, [h('a', prevData, vm.simple.prev)])
    var nextLink = h('li', nextListData, [h('a', nextData, vm.simple.next)])
    return [prevLink, nextLink]
  }

  function getTargetPaginateComponent (children, targetName) {
    return children
      .filter(function (child) { return (child.$vnode.componentOptions.tag === 'paginate'); })
      .find(function (child) { return child.name === targetName; })
  }

  function getListOfPageNumbers (numberOfPages) {
    // converts number of pages into an array
    // that contains each individual page number
    // For Example: 4 => [0, 1, 2, 3]
    return Array.apply(null, { length: numberOfPages })
      .map(function (val, index) { return index; })
  }

  function getClassesForLink(link, currentPage, lastPage, ref) {
    var prev = ref.prev;
    var next = ref.next;

    var liClass = []
    if (link === prev) {
      liClass.push('left-arrow')
    } else if (link === next) {
      liClass.push('right-arrow')
    } else if (link === ELLIPSES) {
      liClass.push('ellipses')
    } else {
      liClass.push('number')
    }

    if (link === currentPage) {
      liClass.push('active')
    }

    if (link === prev && currentPage <= 0) {
      liClass.push('disabled')
    } else if (link === next && currentPage >= lastPage) {
      liClass.push('disabled')
    }
    return liClass
  }

  function getTargetPageForLink (link, limit, currentPage, listOfPages, ref, metaData) {
    var prev = ref.prev;
    var next = ref.next;
    if ( metaData === void 0 ) metaData = null;

    var currentChunk = Math.floor(currentPage / limit)
    if (link === prev) {
      return (currentPage - 1) < 0 ? 0 : currentPage - 1
    } else if (link === next) {
      return (currentPage + 1 > listOfPages.length - 1)
        ? listOfPages.length - 1
        : currentPage + 1
    } else if (metaData && metaData === 'right-ellipses') {
      return (currentChunk + 1) * limit
    } else if (metaData && metaData === 'left-ellipses') {
      var chunkContent = listOfPages.slice(currentChunk * limit, currentChunk * limit + limit)
      var isLastPage = currentPage === listOfPages.length - 1
      if (isLastPage && chunkContent.length === 1) {
        currentChunk--
      }
      return (currentChunk - 1) * limit + limit - 1
    }
    // which is number
    return link
  }

  /**
   * Mainly used here to check whether the displayed
   * ellipses is for showing previous or next links
   */
  function getLimitedLinksMetadata (limitedLinks) {
    return limitedLinks.map(function (link, index) {
      if (link === ELLIPSES && limitedLinks[index - 1] === 0) {
        return 'left-ellipses'
      } else if (link === ELLIPSES && limitedLinks[index - 1] !== 0) {
        return 'right-ellipses'
      }
      return link
    })
  }

  function addAdditionalClasses (linksContainer, classes) {
    Object.keys(classes).forEach(function (selector) {
      if (selector === 'ul') {
        var selectorValue = classes['ul']
        if (Array.isArray(selectorValue)) {
          selectorValue.forEach(function (c) { return linksContainer.classList.add(c); })
        } else {
          linksContainer.classList.add(selectorValue)
        }
      }
      linksContainer.querySelectorAll(selector).forEach(function (node) {
        var selectorValue = classes[selector]
        if (Array.isArray(selectorValue)) {
          selectorValue.forEach(function (c) { return node.classList.add(c); })
        } else {
          node.classList.add(selectorValue)
        }
      })
    })
  }

  function paginateDataGenerator (listNames) {
    if ( listNames === void 0 ) listNames = [];

    return listNames.reduce(function (curr, listName) {
      curr[listName] = {
        list: [],
        page: 0
      }
      return curr
    }, {})
  }

  var vuePaginate = {}

  vuePaginate.install = function (Vue) {
    Vue.mixin({
      created: function created () {
        if (this.paginate !== 'undefined' && this.paginate instanceof Array) {
          this.paginate = paginateDataGenerator(this.paginate)
        }
      },
      methods: {
        paginated: function paginated (listName) {
          if (!this.paginate || !this.paginate[listName]) {
            warn(("'" + listName + "' is not registered in 'paginate' array."), this)
            return
          }
          return this.paginate[listName].list
        }
      }
    })
    Vue.component('paginate', Paginate)
    Vue.component('paginate-links', PaginateLinks)
  }

  if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(vuePaginate)
  }

  return vuePaginate;

}));

/***/ })

}]);