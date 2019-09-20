<template>
  <div class="shadow-lg x:w-4/5 x:h-full xl:h-200 Card rounded-lg lg:mr-10">
    <div>
      <DisplaySmall class="mt-5 text-center text-bold xl:text-4xl" :text="cardTitle" />
    </div>
    <div>
      <FeatureText class="mt-5 p-3 text-center xl:text-2xl" :text="cardText" small />
    </div>
  </div>
</template>

<script>
import DisplaySmall from "../typography/DisplaySmall";
import FeatureText from "../typography/FeatureText";
export default {
  name: "SmallCard",
  components: {
    DisplaySmall,
    FeatureText
  },
  props: {
    cardTitle: String,
    cardText: String
  }
};
</script>

<style>
.Card:hover {
  -webkit-animation: scale-up-bottom 1s;
  animation: scale-up-bottom 1s;
}
@-webkit-keyframes scale-up-bottom {
  0%,
  20%,
  60%,
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  40% {
    -webkit-transform: translateY(-20px);
    transform: translateY(-20px);
  }
  80% {
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
  }
}
@keyframes scale-up-bottom {
  0%,
  20%,
  60%,
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  40% {
    -webkit-transform: translateY(-20px);
    transform: translateY(-20px);
  }
  80% {
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
  }
}
</style>