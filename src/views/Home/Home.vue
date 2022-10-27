<template>
  <div class="home-page">
    <div class="container">
      <HeaderVue />
      <MainVue />
      <FooterVue />
    </div>
  </div>
</template>

<script lang="ts" setup>
import HeaderVue from './layouts/Header.vue';
import MainVue from './layouts/Main.vue';
import FooterVue from './layouts/Footer.vue';

</script>


<style lang="scss" scoped>
.home-page {
  min-height: 100%;
  color: #fff;
  width: 100%;

  background: url('@/assets/bg/NFT_theme.svg');
  background-repeat: no-repeat repeat;
  background-repeat: no-repeat;
  // background-attachment: fixed;
  background-size: cover;

  .container {
    padding: 40px 150px;
    @media screen and (max-width: 1527px) {
      padding: 40px 110px;
    }
    @media screen and (max-width: 1179px) {
      padding: 40px 90px;
    }
    @media screen and (max-width: 1110px) {
      padding: 40px 75px;
    }
    @media screen and (max-width: 1089px) {
      padding: 40px 60px;
    }
    @media screen and (max-width: 992px) {
      padding: 40px 40px;
    }
  }
}
</style>
