<template>
  <div class="text-discount">
    <div class="text-discount__content" :class="[colorClass]">
      <div class="text-discount__arrow">
        <svg
          v-if="isPositiveNum"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.20572 3.1875V14.4375"
            stroke="#2AD97B"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.724 7.72485L9.20602 3.18735L4.68727 7.72485"
            stroke="#2AD97B"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <svg
          v-else
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.20572 14.8125V3.5625"
            stroke="#FF0000"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.724 10.2751L9.20602 14.8126L4.68727 10.2751"
            stroke="#FF0000"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <span>{{ symbol }}{{ number }}%</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps({
  value: {
    type: [String, Number],
    default: 0,
  },
});

const number = computed(() => Number(props.value));
const isPositiveNum = computed(() => number.value > 0);
const colorClass = computed(
  () => "text-discount__content--" + (isPositiveNum.value ? "green" : "red")
);

const symbol = computed(() => (isPositiveNum.value ? "+" : ""));
</script>

<style lang="scss" scoped>
.text-discount {
  &__content {
    font-family: var(--font-popins);
    font-weight: 600;
    font-size: 14px;
    line-height: 114%;
    display: flex;
    align-items: center;
    justify-content: center;
    &--red {
      color: #ff0000;
    }
    &--green {
      color: #2ad97b;
    }
  }
}
</style>
