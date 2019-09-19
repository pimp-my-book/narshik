<template>
  <button
    type="submit"
    @click="forward"
    :class="[regular 
    ? ' hover:text-green-darker hover:bg-transparent bg-green-lighter font-body py-2 px-4 text-green-darker rounded border border-green hover:border-green hover:text-green focus:outline-none' 
    : ' hover:text-green-darker  hover:bg-transparent bg-green-lighter font-body lg:py-4 lg:px-6 sm:py-4 sm:px-6 border hover:border-green hover:text-green  s:py-2 s:px-2 text-green-darker rounded focus:outline-none']"
  >{{text}}</button>
</template>
<script>
export default {
  name: "SecondaryButton",
  props: {
    text: String,
    url: String,
    regular: Boolean
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
