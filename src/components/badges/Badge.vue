<template>
  <div
    aria-label="badge"
    :class="[green ? 'font-body text-sm text-green-lighter bg-green w-32 rounded-full py-1 text-center': orange ? 'font-body text-sm text-white bg-orange w-32 rounded-full py-1 text-center': 'font-body text-red-lighter text-sm bg-red w-32 rounded-full py-1 text-center']"
  >
    <slot name="message"></slot>
  </div>
</template>
<script>
export default {
  name: "Badge",
  props: {
    green: Boolean,
    orange: Boolean
  }
};
</script>