<template>
  <p class="text-green">{{text}}</p>
</template>
<script>
import THeadingOne from "../themes/THeadingOne";

const { baseClass } = THeadingOne;
export default {
  name: "HeadingOne",
  props: {
    text: String
  }
};
</script>
