<template>
  <header class="header">
    <div class="header-start header-logo">
      <div class="header-logo__img">
        <img src="@/assets/logo/futuri_home.svg" alt="Futuri" />
      </div>
      <div class="header-logo__text">Futuri</div>
    </div>
    <Transition>
      <div v-show="visiblityMenu" :class="['header__menu', ]">
        <nav class="header-menu">
          <a class="header-menu__link">Explore</a>
          <router-link class="header-menu__link" :to="{ name: 'Marketplace' }"
            >Marketplace</router-link
          >
          <a class="header-menu__link">Community</a>
        </nav>
        <div class="header-end">
          <ui-button>Connect Wallet</ui-button>
        </div>
      </div>
    </Transition>
    <div class="header__btn-menu" >
      <btn-menu
        height="59px"
        width="59px"
        :is-opened="visiblityMenu"
        @click="visiblityMenu = !visiblityMenu"
      />
    </div>
  </header>
</template>

<script lang="ts" setup>
import UiButton from "@/components/ui/Button.vue";
import BtnMenu from "@/components/ui/BtnMenu.vue";
import { ref } from "vue";
import { throttle } from "throttle-debounce";

const isNotMobile = (): boolean => window.innerWidth >= 768;

const visiblityMenu = ref(isNotMobile());
window.onresize = throttle(
  300,
  () => visiblityMenu.value = isNotMobile(),
  { noLeading: false, noTrailing: false }
);
</script>


<style lang="scss" scoped>
@mixin flex-between {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header {
  @include flex-between;
  .header-logo {
    display: flex;
    align-items: center;

    &__text {
      font-family: "DM Sans";
      font-style: normal;
      font-weight: 700;
      font-size: 40px;
      line-height: 52px;
    }
  }

  &__menu {
    @include flex-between;
    @media screen and (max-width: 992px) {
      width: 60%;
    }
    @media screen and (max-width: 768px) {
      display: none;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 100;
      width: 100%;
      padding: 30px 50px;
      display: flex;
      flex-direction: column;
      background: #1c1e2a;
    }
  }
  &-menu {
    @media screen and (max-width: 992px) {
      display: grid;
    }
    &__link {
      cursor: pointer;
      display: inline-flex;
      margin: 0 25px;
      color: inherit;
      text-decoration: none;
      @media screen and (max-width: 992px) {
        padding-bottom: 5px;
        &:last-of-type {
          padding-bottom: 0;
        }
      }
      @media screen and (max-width: 768px) {
        padding: 20px;
        font-size: 22px;
      }
      &:hover {
        color: coral;
      }
    }
  }
  &-end {
    @media screen and (max-width: 768px) {
      width: 100%;
      display: flex;
      justify-content: center;
      margin: 60px 0;
    }
  }

  &__btn-menu {
    z-index: 100;
    @media screen and (min-width: 769px) {
      display: none;
    }
  }
}

// animation
.v-enter-active,
.v-leave-active {
  transition: all 0.4s ease;
  transform: translateX(0%);
}

.v-enter-from,
.v-leave-to {
  transform: translateX(50%);
  opacity: 0;
}
</style>
