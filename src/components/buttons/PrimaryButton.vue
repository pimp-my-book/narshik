<!--- 
This is the primary button
props: 
url - need if you need forward to a link
text - accepts button text
regular - changes the button size
actions:
forward - redirects using the url prop
-->

<template>
  <button
    aria-label="primary-button"
    type="submit"
    url
    @click="$emit('click',$event)"

    :class="[regular ? ' bg-green hover:text-green-dark hover:bg-green-lighter font-body py-2 px-4  text-white rounded focus:bg-green-lighter focus:outline-none' 
    : 'bg-green   hover:text-green-dark hover:bg-green-lighter font-body py-4 px-6 sl:py-4 sl:px-6 s:py-2 s:px-2 text-white rounded focus:outline-none ']"
  >
    <div v-if="isLoading">
      <img aria-label="loading-spinner" class="spinner" src="../../assets/loader.svg" />
    </div>
    <div v-else>{{text}}</div>
  </button>
</template>

<script>
export default {
  name: "PrimaryButton",
  props: {
    text: String,
    url: String,
    regular: Boolean,
    isLoading: Boolean
  },
  methods: {
    forward() {
      if (this.url) {
        window.location.href = this.url;
      } else {
        null;
      }
    }
  }
};
</script>
<style>
@import "../../assets/tailwind.css";

.spinner {
  display: inline-block;
  animation: rotate 2s infinite linear;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>