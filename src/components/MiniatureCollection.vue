<template>
  <div class="miniature-collection">
    <img :src="imgUrl" class="miniature-collection__round-picture"/>
    <div class="miniature-collection__info">
      <h4 class="miniature-collection__h4">{{ header }}</h4>
      <div class="miniature-collection__user-login">{{ login }}</div>
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
.miniature-collection {
  display: flex;
  align-items: center;
  &__round-picture {
    width: 48px;
    height: 48px;
  }
  &__info {
    margin-left: 21px;
  }
  &__h4 {
    font-weight: 700;
    font-size: 16px;
    line-height: 114%;
    color: var(--text-black);
  }
  &__user-login {
    margin-top: 3px;
    font-weight: 400;
    font-family: var(--font-popins);
    font-size: 12px;
    line-height: 114%;
    color: var(--text-gray);
  }
}
</style>
