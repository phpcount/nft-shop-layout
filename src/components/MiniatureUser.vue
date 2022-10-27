<template>
  <div class="user-collection">
    <img :src="imgUrl" class="user-collection__round-picture"/>
    <div class="user-collection__info">
      <h4 class="user-collection__h4">{{ header }}</h4>
      <div class="user-collection__user-login">{{ login }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getAssetsUrl } from "@/helpers/public-assets";
import { computed } from "vue";

const props = defineProps({
  img: {
    type: String,
    default: "",
  },
  header: {
    type: String,
    default: "",
  },
  login: {
    type: String,
    default: "",
  }
});

const imgUrl = computed(() => getAssetsUrl(props.img));
</script>


<style lang="scss" scoped>
.user-collection {
  display: flex;
  align-items: center;
  &__round-picture {
    width: 48px;
    height: 48px;
  }
  &__info {
    margin-left: 9px;
  }
  &__h4 {
  font-weight: 700;
  font-size: 18px;
  line-height: 114%;
    color: var(--black);
  }
  &__user-login {
    margin-top: 3px;
    font-family: var(--font-popins);
    font-size: 14px;
    line-height: 114%;
    color: var(--text-gray);
  }
}
</style>
