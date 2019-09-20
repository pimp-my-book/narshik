<template>
  <div class="p-2 w-350 h-10 rounded-px bg-green flex flex-row relative">
    <div>
      <span role="img" aria-label="error emoji">🚨</span>
    </div>
    {{message}}
  </div>
</template>
<script>
export default {
  name: "Alert",
  props: {
    message: String
  }
};
</script>

<style scoped>
@import "../../assets/tailwind.css";
</style>