<template>
  <div class="current-bid">
    <div class="current-bid__content" :style="{fontSize, color: colorText}">
      <img :src="bidLogoUrl" alt="" class="current-bid__logo" />
      {{value}}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getLogoPath, getUrlByPath } from "@/helpers/public-assets";
import { computed } from "vue";

const props = defineProps({
  currency: {
    type: String,
    default: "default",
  },
  value: {
    type: String,
    required: true
  },
  fontSize: {
    type: String,
    default: "14px",
  },
  colorText: {
    type: String,
    default: "",
  },
});

const getSVGCurrency = (name: string) => {
  return getLogoPath(`currencies/${name}`, "svg");
}

const bidLogoUrl = computed(() => {
   let url = getUrlByPath(getSVGCurrency(props.currency));
  return url;
});
</script>


<style lang="scss" scoped>
.current-bid {
  width: 100%;

  &__content {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font-popins);
    font-weight: 600;
    line-height: 114%;
  }
  &__logo {
    margin-right: 6px;
  }
}
</style>
