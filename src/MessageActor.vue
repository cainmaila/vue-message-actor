<!-- Meaasge -->
<template>
  <div id="MessageActor">
    <Message
      v-for="(message,index) in messageQueue"
      :key="message.key"
      :ind="index"
      :setting="message.setting"
      @x="close(index)"
    >{{ message.meg }}</Message>
  </div>
</template>

<script>
import Message from "./Message.vue";

export default {
  name: "MessageActor",
  components: {
    Message
  },
  props: {
    setting: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      messageQueue: [],
      key: 0
    };
  },
  methods: {
    pushMessage(meg = "", setting = {}) {
      this.key += 1;
      setting = {
        ...this.setting,
        ...setting
      };
      this.messageQueue.push({ meg, key: this.key, setting });
    },
    close(ind) {
      this.messageQueue.splice(ind, 1);
    }
  }
};
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
