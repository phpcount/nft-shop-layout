<template>
  <button
    class="ui-button"
    :class="{
      'ui-button--border-none': !bdColor,
      'ui-button--border': bdColor,
    }"
    :style="{
      width,
      height,
      color,
      background: bgColor,
      fontSize,
      fontFamily,
      fontWeight,
      borderColor: bdColor,
      borderRadius: bdRadius,
      flexDirection: iconPos,
    }"
  >
    <slot></slot>
    <div v-if="$slots.icon" class="ui-button__icon" :style="{ ...iconPad }">
      <slot name="icon"></slot>
    </div>
  </button>
</template>

<script lang="ts" setup>
import { FontWeightProperty } from "csstype";
import { computed, PropType } from "vue";

const props = defineProps({
  width: {
    type: String,
    default: "181px",
  },
  height: {
    type: String,
    default: "59px",
  },
  fontSize: {
    type: String,
    default: "18px",
  },
  fontWeight: {
    type: String as PropType<FontWeightProperty>,
    default: "normal",
  },
  fontFamily: {
    type: String,
    default: "var(--font-dm)",
  },
  color: {
    type: String,
    default: "#F5F5F5",
  },
  bgColor: {
    type: String,
    default: "#09D3FF",
  },
  bdColor: {
    type: String,
    default: "",
  },
  bdRadius: {
    type: String,
    default: "12px",
  },
  iconPosition: {
    type: String,
    default: "right",
  },
  iconPadding: {
    type: String,
    default: "10px",
  },
});

const isPaddingLeft = computed(() => props.iconPosition === "left");
const iconPos = computed(() => (isPaddingLeft.value ? "row-reverse" : "row"));
const iconPad = computed(() => {
  const padding = "padding" + (isPaddingLeft.value ? "Right" : "Left");
  return { [padding]: props.iconPadding };
});
</script>

<style lang="scss" scoped>
.ui-button {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  padding: 16px 0;
  font-weight: 500;
  line-height: 23px;

  @media screen and (max-width: 576px) {
    width: 100% !important;
  }

  &--border {
    border: 1px solid transparent;
  }
  &--border-none {
    border: none;
  }

  &:hover {
    opacity: 0.9;
  }

  &__icon {
    display: flex;
    align-items: center;
  }
}
</style>
