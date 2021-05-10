import MessageActor from './MessageActor.vue'

export default {
  install(Vue, setting = {}) {
    setting = {
      autoCancel: true /* 自動關閉 */,
      waitTime: 5000 /* 等待時間 */,
      bgStyle: '#000' /* 背景色 */,
      messageColor: '#fff' /* 文字色 */,
      ...setting,
    }
    const VueMessageActor = Vue.extend(MessageActor)
    const vmMessageActor = new VueMessageActor()
    vmMessageActor.setting = setting
    const tpl = vmMessageActor.$mount().$el
    document.body.appendChild(tpl)
    Vue.prototype.$pushMessage = vmMessageActor.pushMessage
  },
}
