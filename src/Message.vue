<!--  -->
import { connect } from 'http2';
<template>
  <transition name="ain">
    <div class="item">
      <div
        class="meg"
        :style="{
          background:setting.bgStyle,
          color:setting.messageColor,
        }"
      >
        <slot />
        <div
          class="close-x"
          @click="$emit('x')"
        ></div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Message",
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
  mounted() {
    this.setting.autoCancel
      ? setTimeout(() => this.$emit("x"), this.setting.wateTime)
      : "";
  }
};
</script>

<style scoped>
.item {
  height: 25px;
  margin: 3px auto;
  position: relative;
}
.meg {
  position: absolute;
  top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 300px;
  height: 25px;
  padding: 0px 40px 0px 20px;
  background: #000c;
  color: #fff;
  font-size: 14px;
  border-radius: 20px;
  text-align: center;
  pointer-events: auto;
  transform: translateX(-50%);
}
.close-x {
  position: absolute;
  right: 10px;
  top: 1px;
  color: #fff;
  cursor: pointer;
}

.close-x:before {
  font-family: 'Courier New', Courier, monospace;
  color:#fff;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  content: "\2715"; /* use the hex value here... */
  line-height: 25px;
  text-align: center;
}
.ain-enter-active,
.ain-leave-active {
  transition: all 0.5s;
}
.ain-enter {
  opacity: 0;
  height: 0px;
}
.ain-leave-to {
  animation-name: out;
  animation-duration: 1s;
  animation-timing-function: ease-out;
}
@keyframes out {
  50% {
    transform: translateX(50%);
    opacity: 0;
    height: 25px;
  }
  100% {
    height: 0;
    transform: translateX(50%);
    opacity: 0;
  }
}
</style>
