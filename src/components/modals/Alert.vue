<template>
  <div>
    <div v-if="open">
      <div
        aria-label="alert"
        :class="success ? 'bg-green' : warning ? 'bg-orange' : 'bg-red' "
        class="p-2 w-350 h-10 rounded-px flex flex-row relative"
      >
        <div>
          <span role="img" aria-label=" emojis">
            <div aria-label="success emojis" v-if="success">🎉</div>
            <div aria-label="warning emojis" v-if="warning">🚧</div>
            <div aria-label="error  emojis" v-if="failure">🚨</div>
          </span>
        </div>

        <p aria-label="alert message" class="font-body">{{message}}</p>
        <span
          @click="toggle"
          aria-label="close button"
          class="right-0 top-0 absolute mr-2 cursor-pointer"
        >&times;</span>
      </div>
    </div>
    <div v-else></div>
  </div>
</template>
<script>
export default {
  name: "Alert",
  props: {
    message: String,
    success: Boolean,
    failure: Boolean,
    warning: Boolean
  },
  data: () => {
    return {
      open: true
    };
  },
  methods: {
    toggle() {
      this.open = !this.open;
    }
  }
};
</script>

<style scoped>
@import "../../assets/tailwind.css";
</style>