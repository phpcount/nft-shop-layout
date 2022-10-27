<template>
  <aside class="aside">
    <div class="aside-container">
      <user-balance class="aside__user-balance"/>
      <top-sellers class="aside__top-sellers"/>
    </div>
  </aside>
</template>


<script lang="ts" setup>
import UserBalance from '@/components/UserBalance.vue';
import TopSellers from '@/components/TopSellers.vue';

</script>


<style lang="scss" scoped>
.aside {
  width: 100%;
  background: #F7FAFF;
  &-container {
    padding: 46px 43px 0 39px;
  }

  &__top-sellers {
    margin-top: 31px;
  }

}
</style>
