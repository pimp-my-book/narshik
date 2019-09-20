<template>
  <div>
    <div v-if="open">
      <div class="p-2 w-350 h-10 rounded-px bg-green flex flex-row relative">
        <div>
          <span role="img" aria-label="error emoji">🚨</span>
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
    message: String
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