<template>
  <button
    type="submit"
    aria-label="secondary-button"
    @click="forward"
    :class="[regular 
    ? ' hover:text-green-darker hover:bg-transparent bg-green-lighter font-body py-2 px-4 text-green-dark rounded border border-transparent  hover:border-green hover:text-green focus:outline-none' 
    : ' hover:text-green-darker  hover:bg-transparent bg-green-lighter font-body lg:py-4 lg:px-6 sm:py-4 sm:px-6 border border-transparent hover:border-green hover:text-green  s:py-2 s:px-2 text-green-dark rounded focus:outline-none']"
  >
    <div v-if="isLoading">
      <img aria-label="loading-spinner" class="spinner" src="../../assets/loader.svg" />
    </div>
    <div v-else>{{text}}</div>
  </button>
</template>
<script>
export default {
  name: "SecondaryButton",
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