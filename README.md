# Vue 推播訊息組件

輕巧簡單的 Vue 訊息掛件

## 使用方式

基本用法
```js
import VueMessageActor from "vue-message-actor";
// or <script src="./vue-message-actor.min.js"></script>

Vue.use(VueMessageActor)
/* 送出訊息*/
vm.$pushMessage('Hello VueMessageActor!')
```

設定預設值
```js
Vue.use(VueMessageActor,{
    autoCancel: true /* 自動退出 預設 true*/,
    wateTime: 5000 /* 等待退出時間，autoCancel=true才會生效 預設 5秒*/,
    bgStyle: '#000' /* 背景色 預設#000 */,
    messageColor: '#fff' /* 文字色 預設#fff*/
})
```

針對送出的訊息做設定
```js
vm.$pushMessage('Hello VueMessageActor!',,{
    autoCancel: true /* 自動退出 預設 true*/,
    wateTime: 5000 /* 等待退出時間，autoCancel=true才會生效 預設 5秒*/,
    bgStyle: '#000' /* 背景色 預設#000 */,
    messageColor: '#fff' /* 文字色 預設#fff*/
})
```

## 範例請見 (https://cainmaila.github.io/vue-message-actor)[https://cainmaila.github.io/vue-message-actor]
