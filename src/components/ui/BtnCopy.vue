<template>
  <div class="btn-copy">
    <div class="btn-copy__text-inner">
      <div class="btn-copy__text text-balance__title">
        {{ text }}
      </div>
    </div>
    <div class="btn-copy__btn-inner" @click="copyText">
      <svg
        width="20"
        height="24"
        viewBox="0 0 20 24"
        :fill="colorBtn"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.8667 4.80005H2.13333C0.955126 4.80005 0 5.9462 0 7.36005V21.44C0 22.8539 0.955126 24 2.13333 24H13.8667C15.0449 24 16 22.8539 16 21.44V7.36005C16 5.9462 15.0449 4.80005 13.8667 4.80005Z"
        />
        <path
          d="M17.8667 0H6.13333C5.56808 0.00210983 5.02648 0.272501 4.62678 0.752137C4.22708 1.23177 4.00176 1.88169 4 2.56V4H14.3533C14.9663 4.00211 15.5537 4.29526 15.9872 4.8154C16.4206 5.33555 16.6649 6.04041 16.6667 6.776V19.2H17.8667C18.4319 19.1979 18.9735 18.9275 19.3732 18.4479C19.7729 17.9682 19.9982 17.3183 20 16.64V2.56C19.9982 1.88169 19.7729 1.23177 19.3732 0.752137C18.9735 0.272501 18.4319 0.00210983 17.8667 0Z"
          fill-opacity="0.4"
        />
      </svg>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
});

const isClickBtnCopy = ref(false)

const colorBtn = computed(() => isClickBtnCopy.value ? 'var(--text-green)' : 'var(--color-active-link)')

function copyText() {
  isClickBtnCopy.value = true
  setTimeout(() => isClickBtnCopy.value = !isClickBtnCopy.value, 200)
}
</script>
<style lang="scss" scoped>
.btn-copy {
  display: flex;
  align-items: center;
  &__text-inner {
    margin-right: 9px;
  }

  &__text {
    max-width: 240px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    font-family: var(--font-popins);
    font-size: 14px;
    line-height: 169%;
    color: var(--text-gray-balance);
  }

  &__btn-inner {
    cursor: pointer;
  }
}
</style>
