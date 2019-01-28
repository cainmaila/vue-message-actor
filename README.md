# Vue message component plugin

[![npm version](https://badge.fury.io/js/vue-message-actor.svg)](https://badge.fury.io/js/vue-message-actor)

lightweight and simple Vue message component plugin

## [Demo](https://cainmaila.github.io/vue-message-actor/index.html)

## How to use

Basic usage
```js
import VueMessageActor from "vue-message-actor";
// or <script src="./dist/vue-message-actor.min.js"></script>

Vue.use(VueMessageActor)
/* push message */
vm.$pushMessage('Hello VueMessageActor!')
//or this.$pushMessage('Hello VueMessageActor!')
```

set default style
```js
Vue.use(VueMessageActor,{
    autoCancel: true /* auto exit. default true*/,
    wateTime: 5000 /* Waiting for exit time. autoCancel=true default 5s */,
    bgStyle: '#000' /* Background color. default #000 */,
    messageColor: '#fff' /* Text color. default #fff*/
})
```

Make settings for the sent message
```js
vm.$pushMessage('Hello VueMessageActor!',{
    autoCancel: true /* auto exit. default true*/,
    wateTime: 5000  /* Waiting for exit time. autoCancel=true default 5s */,
    bgStyle: '#000'  /* Background color. default #000 */,
    messageColor: '#fff'/* Text color. default #fff*/
})
```

