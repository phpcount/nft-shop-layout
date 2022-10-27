<template>
    <div class="header-NFTS">
      <div class="header-NFTS__left">
        <h2 class="header-NFTS__header">{{title}}</h2>
        <span class="header-NFTS__amount">{{amountText}}</span>
      </div>
      <router-link :to="link.to" href="#" class="header-NFTS__link">{{link.title}}</router-link>
    </div>
</template>

<script lang="ts" setup>
import { computed, PropType, ref } from "vue";
import HeaderNTFS from "./HeaderNTFS.vue";

interface ILink {
  title: string
  to: string
}

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  amountText: {
    type: String,
    default: "",
  },
  link: {
    type: Object as PropType<ILink>,
    default: { title: 'See all', to: '/' }
  },
});

</script>

<style lang="scss" scoped>

.header-NFTS {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__left {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__header {
    font-family: var(--font-space-grotesk);
    font-weight: 700;
    font-size: 24px;
    line-height: 114%;
    color: var(--text-blak-header);
    padding-right: 22px;
  }

  &__amount {
    font-family: var(--font-popins);
    font-weight: 500;
    font-size: 13px;
    line-height: 169%;
    color: var(--text-gray);
  }

  &__link {
    font-family: var(--font-popins);
    font-size: 16px;
    line-height: 169%;
    color: var(--color-link);
  }
}
</style>
