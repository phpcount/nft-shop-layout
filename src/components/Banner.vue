<template>
<div :style="{width, height, backgroundColor: bg}" :class="['banner', `banner--${size}`]">
  <div class="banner__img"><slot name="bgImg"></slot></div>
  <div class="banner-wrapper" :style="{maxWidth: maxWidthContent}">
    <div class="banner__header">
      <h3 :style="{...headerStyle, fontSize:headerFontSize}"><slot name="header"></slot></h3>
    </div>
    <div class="banner__description">
      <slot name="description"></slot>
    </div>
    <div class="banner__controlls">
      <slot name="controlls"></slot>
    </div>
  </div>
  <slot name="blockRight"></slot>
</div>
</template>

<script lang="ts" setup>

const props = defineProps({
  bg: {
    type: String,
    default: '#942BD9',
  },
  maxWidthContent: {
    type: String,
    default: 'auto',
  },
  headerFontSize: {
    type: String,
    default: '36px',
  },
  headerStyle: {
    type: Object,
    default: () => {},
  },
  imgOpacity: {
    type: String,
    default: '1',
  },
  width: {
    type: String,
    default: '267px',
  },
  height: {
    type: String,
    default: '318px',
  },
  // small or big
  size: {
    type: String,
    default: 'small',
  },
})
</script>

<style lang="scss" scoped>
.banner {
  display: flex;
  position: relative;
  border-radius: 15px;

  &__img {
    position: absolute;
    top: 0;
    left: 0;
    mix-blend-mode: multiply;
  }

  &-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    padding: 32px 33px 39px 53px;
    border-radius: 15px;
    height: 100%;
  }

  &.banner--small {
    .banner-wrapper {
      padding: 29px 33px 35px 20px;
    }

    .banner__description {
      margin: 0;
    }

    .banner__controlls {
      margin-top: 56px;
    }
  }

  &__header h3 {
    font-family: var(--font-space-grotesk);
    font-weight: 700;
    line-height: 128%;
    color: #FFF9F9;
  }

  &__description {
    margin-top: 11px;
    font-family: var(--font-popins);
    font-size: 16px;
    line-height: 169%;
    color: #FFFFFF;
  }

  &__controlls {
    display: flex;
    align-items: center;
    margin-top: 26px;
  }
}
</style>
