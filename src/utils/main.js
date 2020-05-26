/* eslint-disable */
(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object') module.exports = factory();
  else if (typeof define === 'function' && define.amd) define([], factory);
  else if (typeof exports === 'object') exports['SoulPigeon'] = factory();
  else root['SoulPigeon'] = factory();
})(window, function() {
  return /******/ (function(modules) {
    // webpackBootstrap
    /******/ // The module cache
    /******/ var installedModules = {}; // The require function
    /******/
    /******/ /******/ function __webpack_require__(moduleId) {
      /******/
      /******/ // Check if module is in cache
      /******/ if (installedModules[moduleId]) {
        /******/ return installedModules[moduleId].exports;
        /******/
      } // Create a new module (and put it into the cache)
      /******/ /******/ var module = (installedModules[moduleId] = {
        /******/ i: moduleId,
        /******/ l: false,
        /******/ exports: {},
        /******/
      }); // Execute the module function
      /******/
      /******/ /******/ modules[moduleId].call(
        module.exports,
        module,
        module.exports,
        __webpack_require__,
      ); // Flag the module as loaded
      /******/
      /******/ /******/ module.l = true; // Return the exports of the module
      /******/
      /******/ /******/ return module.exports;
      /******/
    } // expose the modules object (__webpack_modules__)
    /******/
    /******/
    /******/ /******/ __webpack_require__.m = modules; // expose the module cache
    /******/
    /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
    /******/
    /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
      /******/ if (!__webpack_require__.o(exports, name)) {
        /******/ Object.defineProperty(exports, name, { enumerable: true, get: getter });
        /******/
      }
      /******/
    }; // define __esModule on exports
    /******/
    /******/ /******/ __webpack_require__.r = function(exports) {
      /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
        /******/
      }
      /******/ Object.defineProperty(exports, '__esModule', { value: true });
      /******/
    }; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
    /******/
    /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function(
      value,
      mode,
    ) {
      /******/ if (mode & 1) value = __webpack_require__(value);
      /******/ if (mode & 8) return value;
      /******/ if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value;
      /******/ var ns = Object.create(null);
      /******/ __webpack_require__.r(ns);
      /******/ Object.defineProperty(ns, 'default', { enumerable: true, value: value });
      /******/ if (mode & 2 && typeof value != 'string')
        for (var key in value)
          __webpack_require__.d(
            ns,
            key,
            function(key) {
              return value[key];
            }.bind(null, key),
          );
      /******/ return ns;
      /******/
    }; // getDefaultExport function for compatibility with non-harmony modules
    /******/
    /******/ /******/ __webpack_require__.n = function(module) {
      /******/ var getter =
        module && module.__esModule
          ? /******/ function getDefault() {
              return module['default'];
            }
          : /******/ function getModuleExports() {
              return module;
            };
      /******/ __webpack_require__.d(getter, 'a', getter);
      /******/ return getter;
      /******/
    }; // Object.prototype.hasOwnProperty.call
    /******/
    /******/ /******/ __webpack_require__.o = function(object, property) {
      return Object.prototype.hasOwnProperty.call(object, property);
    }; // __webpack_public_path__
    /******/
    /******/ /******/ __webpack_require__.p = ''; // Load entry module and return exports
    /******/
    /******/
    /******/ /******/ return __webpack_require__((__webpack_require__.s = './index.js'));
    /******/
  })(
    /************************************************************************/
    /******/ {
      /***/ './index.js':
        /*!******************!*\
  !*** ./index.js ***!
  \******************/
        /*! no static exports found */
        /***/ function(module, exports) {
          /*
           * @Description:
           * @Date: 2019-12-20 10:45:30
           * @Author:
           * @LastEditors  : robin
           * @LastEditTime : 2020-02-23 22:31:56
           */

          const SoulPigeon = {};
          const version = 1;
          //generate UUID
          function generateUUID() {
            var d = new Date().getTime();
            var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
              var r = (d + Math.random() * 16) % 16 | 0;
              d = Math.floor(d / 16);
              return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
            });
            return uuid;
          }

          function deviceId(a) {
            for (var b = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], e = 10; 1 < e; e--) {
              var c = Math.floor(10 * Math.random()),
                f = b[c];
              b[c] = b[e - 1];
              b[e - 1] = f;
            }
            for (e = c = 0; 5 > e; e++) c = 10 * c + b[e];
            return (a || '') + (c + '' + +new Date());
          }
          function send() {
            if (!SoulPigeon.appKey) {
              throw new Error('请配置appKey!');
            }
            let params = {
              appKey: SoulPigeon.appKey,
            };
            if (document) {
              params.domain = document.domain || ''; // 域名
              params.url =
                encodeURIComponent(document.location.origin + document.location.pathname) || ''; // 当前 URL 地址
              params.title = document.title || ''; // 当前页面标题
              params.referrer = document.referrer || ''; // 上一个访问页面 URL 地址
            }
            // window
            if (window && window.screen) {
              params.sh = window.screen.height || 0; // 屏幕高度
              params.sw = window.screen.width || 0; // 屏幕宽度
              params.cd = window.screen.colorDepth || 0; // 屏幕颜色深度
            }
            // navigator
            if (navigator) {
              params.lang = navigator.language || ''; // 语言
            }
            const localVersion = window.localStorage.getItem('soul_pigeon_sdk_version');
            if (Number(localVersion) !== version) {
              window.localStorage.removeItem('device_id');
              window.localStorage.setItem('soul_pigeon_sdk_version', version);
            }
            let device_id = window.localStorage.getItem('device_id');
            if (!device_id) {
              device_id = deviceId();
              window.localStorage.setItem('device_id', device_id);
            }

            let session_id = window.sessionStorage.getItem('session_id');
            if (!session_id) {
              session_id = generateUUID();
              window.sessionStorage.setItem('session_id', session_id);
            }
            params.device_id = device_id;
            params.session_id = session_id;

            const user = JSON.parse(localStorage.getItem('userInfo'));
            if (user && user.userId) {
              params.userId = user.userId;
            }
            // 拼接参数
            let args = '';
            for (let i in params) {
              if (args !== '') {
                args += '&';
              }
              args += `${i}=${params[i]}`;
            }
            // 通过伪装成 Image 对象，传递给后端
            let img = new Image(1, 1);
            let src = `${SoulPigeon.host}/view?${args}`;
            img.src = src;
          }

          SoulPigeon.appKey = '';
          SoulPigeon.host = '';
          SoulPigeon.init = () => {
            send();
          };
          SoulPigeon.send = () => {
            send();
          };
          module.exports = SoulPigeon;

          /***/
        },

      /******/
    },
  );
});
//# sourceMappingURL=main.js.map
