<template>
  <div class="marketplace-page">
    <Nav class="marketplace-page__nav" />
    <div class="content">
      <Header />
      <div class="content-flex">
        <Main />
        <Aside class="marketplace-page__aside" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Nav from "@/views/Marketplace/layouts/Nav.vue";
import Header from "@/views/Marketplace/layouts/Header.vue";
import Main from "@/views/Marketplace/layouts/Main.vue";
import Banner from "@/components/Banner.vue";
import Aside from "@/views/Marketplace/layouts/Aside.vue";
</script>


<style lang="scss" scoped>
.marketplace-page {
  min-height: 100%;
  font-family: var(--font-popins);
  display: flex;
  justify-content: space-between;

  &__aside {
    margin-left: 26px;
  }
}

.content {
  width: 100%;

  &-flex {
    display: flex;
    justify-content: space-between;
    margin: 33px 0 10px 24px;
  }
}
</style>
