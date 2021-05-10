<!-- Meaasge -->
<template>
  <div id="MessageActor">
    <Message
      v-for="(message, index) in messageQueue"
      :key="message.key"
      :ind="index"
      :setting="message.setting"
      @x="close(index)"
      >{{ message.meg }}</Message
    >
  </div>
</template>

<script>
import Message from './Message.vue'

export default {
  name: 'MessageActor',
  components: {
    Message,
  },
  props: {
    setting: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      lastMessage: '',
      messageQueue: [],
      key: 0,
    }
  },
  methods: {
    pushMessage(msg = '', setting = {}) {
      this.key += 1
      setting = {
        ...this.setting,
        ...setting,
      }
      if (msg != this.lastMessage) {
        /* Do not send repeatedly */
        this.lastMessage = msg
        this.messageQueue.push({ msg, key: this.key, setting })
      }
    },
    close(ind) {
      this.messageQueue.splice(ind, 1)
    },
  },
}
</script>

<style>
#MessageActor {
  transform: translateX(50%);
  position: fixed;
  width: 100%;
  pointer-events: none;
  bottom: 20px;
}
</style>
