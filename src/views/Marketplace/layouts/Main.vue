<template>
  <main class="main">
    <Banner
      class="main__banner"
      size="big"
      width="948px"
      height="305px"
      bg="var(--color-active-link)"
      maxWidthContent="549px"
      headerFontSize="46px"
      :headerStyle="{textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}"
    >
      <template #bgImg><img src="@/assets/img/banners/mask_discover_now2.png" style="opacity: 0.3;filter: blur(5px);border-radius: 12px;" alt=""/></template>
      <template #header>Discover, Collect & Create your own NFT</template>
      <template #description>Search items, collection, accounts</template>
      <template #controlls>
        <ui-button
          bgColor="#FFFFFF"
          bdColor="var(--color-active-link)"
          color="var(--color-active-link)"
          bdRadius="8px"
          style="margin-right: 16px;"
        >
        Discover Now
        </ui-button>
        <ui-button
          bgColor="transparent"
          bdColor="#FFFFFF"
          color="#FFFFFF"
          bdRadius="8px"
        >
        Create your NFT
        </ui-button>
      </template>
      <template #blockRight>
        <img src="@/assets/img/banners/man_in_vr_glasses.png" style="position: absolute;right: 0;top: -54px;height: 358px;" alt=""/>
      </template>
    </Banner>
      <PreviewNFTS class="main__preview-NFTS" />
      <TableNFTS class="main__table-NFTS" />
  </main>
</template>


<script lang="ts" setup>
import UiButton from "@/components/ui/Button.vue";
import Banner from '@/components/Banner.vue';
import PreviewNFTS from "@/components/PreviewNFTS.vue";
import TableNFTS from "@/components/TableNFTS.vue";

</script>


<style lang="scss" scoped>
.main {
  &__banner {
    margin-bottom: 54px;
  }
  &__table-NFTS {
    margin-top: 47px;
  }
}
</style>
