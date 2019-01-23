var VueMessageActor = (function () {
  'use strict';

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

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
  var script = {
    name: 'Message',
    props: {
      ind: {
        type: Number,
        default: 0
      },
      setting: {
        type: Object,
        default: null
      }
    },
    mounted: function mounted() {
      var _this = this;

      this.setting.autoCancel ? setTimeout(function () {
        return _this.$emit('x');
      }, this.setting.wateTime) : '';
    }
  };

  /* script */
              const __vue_script__ = script;
              
  /* template */
  var __vue_render__ = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("transition", { attrs: { name: "ain" } }, [
      _c("div", { staticClass: "item" }, [
        _c(
          "div",
          {
            staticClass: "meg",
            style: {
              background: _vm.setting.bgStyle,
              color: _vm.setting.messageColor
            }
          },
          [
            _vm._t("default"),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "close",
                on: {
                  click: function($event) {
                    _vm.$emit("x");
                  }
                }
              },
              [_vm._v("X")]
            )
          ],
          2
        )
      ])
    ])
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

    /* style */
    const __vue_inject_styles__ = function (inject) {
      if (!inject) return
      inject("data-v-03bc4b34_0", { source: "\n.item[data-v-03bc4b34] {\r\n  height: 25px;\r\n  margin: 3px auto;\r\n  position: relative;\n}\n.meg[data-v-03bc4b34] {\r\n  position: absolute;\r\n  top: 0px;\r\n  display: inline-block;\r\n  min-width: 300px;\r\n  height: 25px;\r\n  padding: 0px 20px;\r\n  background: #000c;\r\n  color: #fff;\r\n  font-size: 14px;\r\n  border-radius: 20px;\r\n  text-align: center;\r\n  pointer-events: auto;\r\n  transform: translateX(-50%);\n}\n.close[data-v-03bc4b34] {\r\n  position: absolute;\r\n  right: 10px;\r\n  top: 1px;\r\n  color: #fff;\r\n  cursor: pointer;\n}\n.ain-enter-active[data-v-03bc4b34],\r\n.ain-leave-active[data-v-03bc4b34] {\r\n  transition: all 0.5s;\n}\n.ain-enter[data-v-03bc4b34] {\r\n  opacity: 0;\r\n  height: 0px;\n}\n.ain-leave-to[data-v-03bc4b34] {\r\n  animation-name: out-data-v-03bc4b34;\r\n  animation-duration: 1s;\r\n  animation-timing-function: ease-out;\n}\n@keyframes out-data-v-03bc4b34 {\n50% {\r\n    transform: translateX(50%);\r\n    opacity: 0;\r\n    height: 25px;\n}\n100% {\r\n    height: 0;\r\n    transform: translateX(50%);\r\n    opacity: 0;\n}\n}\r\n", map: {"version":3,"sources":["C:\\Users\\maxca\\Desktop\\vue-message-actor/C:\\Users\\maxca\\Desktop\\vue-message-actor\\src\\Message.vue"],"names":[],"mappings":";AAyCA;EACA,aAAA;EACA,iBAAA;EACA,mBAAA;CACA;AACA;EACA,mBAAA;EACA,SAAA;EACA,sBAAA;EACA,iBAAA;EACA,aAAA;EACA,kBAAA;EACA,kBAAA;EACA,YAAA;EACA,gBAAA;EACA,oBAAA;EACA,mBAAA;EACA,qBAAA;EACA,4BAAA;CACA;AACA;EACA,mBAAA;EACA,YAAA;EACA,SAAA;EACA,YAAA;EACA,gBAAA;CACA;AACA;;EAEA,qBAAA;CACA;AACA;EACA,WAAA;EACA,YAAA;CACA;AACA;EACA,oCAAA;EACA,uBAAA;EACA,oCAAA;CACA;AACA;AACA;IACA,2BAAA;IACA,WAAA;IACA,aAAA;CACA;AACA;IACA,UAAA;IACA,2BAAA;IACA,WAAA;CACA;CACA","file":"Message.vue","sourcesContent":["<!--  -->\r\n<template>\r\n  <transition name=\"ain\">\r\n    <div class=\"item\">\r\n      <div\r\n        class=\"meg\"\r\n        :style=\"{\r\n          background:setting.bgStyle,\r\n          color:setting.messageColor,\r\n        }\"\r\n      >\r\n        <slot />\r\n        <div\r\n          class=\"close\"\r\n          @click=\"$emit('x')\"\r\n        >X</div>\r\n      </div>\r\n    </div>\r\n  </transition>\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n    name: 'Message',\r\n    props: {\r\n        ind: {\r\n            type: Number,\r\n            default: 0,\r\n        },\r\n        setting: {\r\n            type: Object,\r\n            default: null,\r\n        },\r\n    },\r\n    mounted() {\r\n        this.setting.autoCancel ? setTimeout(() => this.$emit('x'), this.setting.wateTime) : ''\r\n    },\r\n}\r\n</script>\r\n\r\n<style scoped>\r\n.item {\r\n  height: 25px;\r\n  margin: 3px auto;\r\n  position: relative;\r\n}\r\n.meg {\r\n  position: absolute;\r\n  top: 0px;\r\n  display: inline-block;\r\n  min-width: 300px;\r\n  height: 25px;\r\n  padding: 0px 20px;\r\n  background: #000c;\r\n  color: #fff;\r\n  font-size: 14px;\r\n  border-radius: 20px;\r\n  text-align: center;\r\n  pointer-events: auto;\r\n  transform: translateX(-50%);\r\n}\r\n.close {\r\n  position: absolute;\r\n  right: 10px;\r\n  top: 1px;\r\n  color: #fff;\r\n  cursor: pointer;\r\n}\r\n.ain-enter-active,\r\n.ain-leave-active {\r\n  transition: all 0.5s;\r\n}\r\n.ain-enter {\r\n  opacity: 0;\r\n  height: 0px;\r\n}\r\n.ain-leave-to {\r\n  animation-name: out;\r\n  animation-duration: 1s;\r\n  animation-timing-function: ease-out;\r\n}\r\n@keyframes out {\r\n  50% {\r\n    transform: translateX(50%);\r\n    opacity: 0;\r\n    height: 25px;\r\n  }\r\n  100% {\r\n    height: 0;\r\n    transform: translateX(50%);\r\n    opacity: 0;\r\n  }\r\n}\r\n</style>\r\n"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__ = "data-v-03bc4b34";
    /* module identifier */
    const __vue_module_identifier__ = undefined;
    /* functional template */
    const __vue_is_functional_template__ = false;
    /* component normalizer */
    function __vue_normalize__(
      template, style, script$$1,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      const component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "C:\\Users\\maxca\\Desktop\\vue-message-actor\\src\\Message.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) component.functional = true;
      }

      component._scopeId = scope;

      {
        let hook;
        if (style) {
          hook = function(context) {
            style.call(this, createInjector(context));
          };
        }

        if (hook !== undefined) {
          if (component.functional) {
            // register for functional component in vue file
            const originalRender = component.render;
            component.render = function renderWithStyleInjection(h, context) {
              hook.call(context);
              return originalRender(h, context)
            };
          } else {
            // inject component registration as beforeCreate hook
            const existing = component.beforeCreate;
            component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
          }
        }
      }

      return component
    }
    /* style inject */
    function __vue_create_injector__() {
      const head = document.head || document.getElementsByTagName('head')[0];
      const styles = __vue_create_injector__.styles || (__vue_create_injector__.styles = {});
      const isOldIE =
        typeof navigator !== 'undefined' &&
        /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

      return function addStyle(id, css) {
        if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

        const group = isOldIE ? css.media || 'default' : id;
        const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

        if (!style.ids.includes(id)) {
          let code = css.source;
          let index = style.ids.length;

          style.ids.push(id);

          if (isOldIE) {
            style.element = style.element || document.querySelector('style[data-group=' + group + ']');
          }

          if (!style.element) {
            const el = style.element = document.createElement('style');
            el.type = 'text/css';

            if (css.media) el.setAttribute('media', css.media);
            if (isOldIE) {
              el.setAttribute('data-group', group);
              el.setAttribute('data-next-index', '0');
            }

            head.appendChild(el);
          }

          if (isOldIE) {
            index = parseInt(style.element.getAttribute('data-next-index'));
            style.element.setAttribute('data-next-index', index + 1);
          }

          if (style.element.styleSheet) {
            style.parts.push(code);
            style.element.styleSheet.cssText = style.parts
              .filter(Boolean)
              .join('\n');
          } else {
            const textNode = document.createTextNode(code);
            const nodes = style.element.childNodes;
            if (nodes[index]) style.element.removeChild(nodes[index]);
            if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
            else style.element.appendChild(textNode);
          }
        }
      }
    }
    /* style inject SSR */
    

    
    var Message = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      __vue_create_injector__,
      undefined
    );

  var script$1 = {
    name: 'MessageActor',
    components: {
      Message: Message
    },
    props: {
      setting: {
        type: Object,
        default: null
      }
    },
    data: function data() {
      return {
        messageQueue: [],
        key: 0
      };
    },
    methods: {
      pushMessage: function pushMessage() {
        var meg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var setting = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        this.key += 1;
        setting = _objectSpread({}, this.setting, setting);
        this.messageQueue.push({
          meg: meg,
          key: this.key,
          setting: setting
        });
      },
      close: function close(ind) {
        this.messageQueue.splice(ind, 1);
      }
    }
  };

  /* script */
              const __vue_script__$1 = script$1;
              
  /* template */
  var __vue_render__$1 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      { attrs: { id: "MessageActor" } },
      _vm._l(_vm.messageQueue, function(message, index) {
        return _c(
          "Message",
          {
            key: message.key,
            attrs: { ind: index, setting: message.setting },
            on: {
              x: function($event) {
                _vm.close(index);
              }
            }
          },
          [_vm._v(_vm._s(message.meg))]
        )
      }),
      1
    )
  };
  var __vue_staticRenderFns__$1 = [];
  __vue_render__$1._withStripped = true;

    /* style */
    const __vue_inject_styles__$1 = function (inject) {
      if (!inject) return
      inject("data-v-97414940_0", { source: "\n#MessageActor {\r\n  transform: translateX(50%);\r\n  position: fixed;\r\n  width: 100%;\r\n  pointer-events: none;\r\n  bottom: 20px;\n}\r\n\r\n", map: {"version":3,"sources":["C:\\Users\\maxca\\Desktop\\vue-message-actor/C:\\Users\\maxca\\Desktop\\vue-message-actor\\src\\MessageActor.vue"],"names":[],"mappings":";AAoDA;EACA,2BAAA;EACA,gBAAA;EACA,YAAA;EACA,qBAAA;EACA,aAAA;CACA","file":"MessageActor.vue","sourcesContent":["<!-- Meaasge -->\r\n<template>\r\n  <div\r\n    id=\"MessageActor\"\r\n  >\r\n    <Message\r\n      v-for=\"(message,index) in messageQueue\"\r\n      :key=\"message.key\"\r\n      :ind=\"index\"\r\n      :setting=\"message.setting\"\r\n      @x=\"close(index)\"\r\n    >{{ message.meg }}</Message>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nimport Message from './Message.vue'\r\n\r\nexport default {\r\n    name: 'MessageActor',\r\n    components: {\r\n        Message,\r\n    },\r\n    props: {\r\n        setting: {\r\n            type: Object,\r\n            default: null,\r\n        },\r\n    },\r\n    data() {\r\n        return {\r\n            messageQueue: [],\r\n            key: 0,\r\n        }\r\n    },\r\n    methods: {\r\n        pushMessage(meg = '', setting = {}) {\r\n            this.key += 1\r\n            setting = {\r\n                ...this.setting,\r\n                ...setting,\r\n            }\r\n            this.messageQueue.push({ meg, key: this.key, setting })\r\n        },\r\n        close(ind) {\r\n            this.messageQueue.splice(ind, 1)\r\n        },\r\n    },\r\n}\r\n</script>\r\n\r\n<style>\r\n#MessageActor {\r\n  transform: translateX(50%);\r\n  position: fixed;\r\n  width: 100%;\r\n  pointer-events: none;\r\n  bottom: 20px;\r\n}\r\n\r\n</style>\r\n"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$1 = undefined;
    /* module identifier */
    const __vue_module_identifier__$1 = undefined;
    /* functional template */
    const __vue_is_functional_template__$1 = false;
    /* component normalizer */
    function __vue_normalize__$1(
      template, style, script,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      const component = (typeof script === 'function' ? script.options : script) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "C:\\Users\\maxca\\Desktop\\vue-message-actor\\src\\MessageActor.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) component.functional = true;
      }

      component._scopeId = scope;

      {
        let hook;
        if (style) {
          hook = function(context) {
            style.call(this, createInjector(context));
          };
        }

        if (hook !== undefined) {
          if (component.functional) {
            // register for functional component in vue file
            const originalRender = component.render;
            component.render = function renderWithStyleInjection(h, context) {
              hook.call(context);
              return originalRender(h, context)
            };
          } else {
            // inject component registration as beforeCreate hook
            const existing = component.beforeCreate;
            component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
          }
        }
      }

      return component
    }
    /* style inject */
    function __vue_create_injector__$1() {
      const head = document.head || document.getElementsByTagName('head')[0];
      const styles = __vue_create_injector__$1.styles || (__vue_create_injector__$1.styles = {});
      const isOldIE =
        typeof navigator !== 'undefined' &&
        /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

      return function addStyle(id, css) {
        if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

        const group = isOldIE ? css.media || 'default' : id;
        const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

        if (!style.ids.includes(id)) {
          let code = css.source;
          let index = style.ids.length;

          style.ids.push(id);

          if (isOldIE) {
            style.element = style.element || document.querySelector('style[data-group=' + group + ']');
          }

          if (!style.element) {
            const el = style.element = document.createElement('style');
            el.type = 'text/css';

            if (css.media) el.setAttribute('media', css.media);
            if (isOldIE) {
              el.setAttribute('data-group', group);
              el.setAttribute('data-next-index', '0');
            }

            head.appendChild(el);
          }

          if (isOldIE) {
            index = parseInt(style.element.getAttribute('data-next-index'));
            style.element.setAttribute('data-next-index', index + 1);
          }

          if (style.element.styleSheet) {
            style.parts.push(code);
            style.element.styleSheet.cssText = style.parts
              .filter(Boolean)
              .join('\n');
          } else {
            const textNode = document.createTextNode(code);
            const nodes = style.element.childNodes;
            if (nodes[index]) style.element.removeChild(nodes[index]);
            if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
            else style.element.appendChild(textNode);
          }
        }
      }
    }
    /* style inject SSR */
    

    
    var MessageActor = __vue_normalize__$1(
      { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
      __vue_inject_styles__$1,
      __vue_script__$1,
      __vue_scope_id__$1,
      __vue_is_functional_template__$1,
      __vue_module_identifier__$1,
      __vue_create_injector__$1,
      undefined
    );

  var index = {
    install: function install(Vue) {
      var setting = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      setting = _objectSpread({
        autoCancel: true
        /* 自動關閉 */
        ,
        wateTime: 5000
        /* 等待時間 */
        ,
        bgStyle: '#000'
        /* 背景色 */
        ,
        messageColor: '#fff'
        /* 文字色 */

      }, setting);
      var VueMessageActor = Vue.extend(MessageActor);
      var vmMessageActor = new VueMessageActor();
      vmMessageActor.setting = setting;
      var tpl = vmMessageActor.$mount().$el;
      document.body.appendChild(tpl);
      Vue.prototype.$pushMessage = vmMessageActor.pushMessage;
    }
  };

  return index;

}());
