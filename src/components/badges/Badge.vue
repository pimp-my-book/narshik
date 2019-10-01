<template>
  <div
    aria-label="badge"
    :class="[success ? 'font-body text-sm bg-green w-32 rounded-full py-1 text-center': warning ? 'font-body text-sm bg-orange w-32 rounded-full py-1 text-center': 'font-body text-sm bg-red w-32 rounded-full py-1 text-center']"
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "Badge",
  props: {
    success: Boolean,
    warning: Boolean
  }
};
</script>