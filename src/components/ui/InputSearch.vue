<template>
  <div
    :class="['ui-input', { 'focus': isFocusInput }]"
    :style="{ width, height }"
  >
    <div v-if="$slots.icon" class="ui-input__icon"><slot name="icon"></slot></div>
    <input
      type="text"
      class="ui-input__input"
      :value="value"
      :placeholder="placeholder"
      @change="changeText(($event.target as HTMLInputElement).value)"
      @focusin="isFocusInput=true"
      @focusout="isFocusInput=false"
    />
  </div>
</template>


<script lang="ts" setup>
import { ref } from 'vue';

const emits = defineEmits(['changeText', 'clickIcon'])

const props = defineProps({
  width: {
    type: String,
    default: '439px',
  },
  height: {
    type: String,
    default: '60px',
  },
  placeholder: {
    type: String,
    default: '',
  },
  value: {
    type: String,
    default: "",
  },
});

const isFocusInput = ref<boolean>(false)

const changeText = (s: string) => {
  emits('changeText', s);
}

const clickIcon = (s: string) => {
  emits('changeText', s);
}
</script>

<style lang="scss" scoped>
.ui-input {
  display: flex;
  align-items: center;
  background: #F7FAFF;
  border-radius: 12px;

  &__icon {
    cursor: pointer;
    padding-left: 23px;
    padding-top: 3px;
  }

  &__input {
    background: inherit;
    border-radius: inherit;
    font-family: var(--font-space-grotesk);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 169%;

    &::placeholder {
      color: var(--placeholder-primary);
    }

    width: 100%;
    height: 100%;
    border: none;
    padding: 0 14px;
    outline: none;

  }

  &.focus {
    border: 1px solid var(--text-black);
    margin-left: -1px;
  }
}
</style>
