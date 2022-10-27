<template>
  <nav class="nav">
    <div class="list-group">
      <div class="list-group__item">
        <router-link to="/" class="nav-link">
          <IconDashboard class="nav-link__icon" />
          <span class="nav-link__title">Dashboard</span>
        </router-link>
      </div>
      <div class="list-group__item">
        <router-link to="/marketplace" class="nav-link">
          <IconMarketplace class="nav-link__icon" />
          <span class="nav-link__title">Marketplace</span>
        </router-link>
      </div>
      <div class="list-group__item">
        <router-link to="/" class="nav-link">
          <IconMessages class="nav-link__icon" />
          <span class="nav-link__title">Messages</span>
        </router-link>
      </div>
    </div>
    <div class="list-group">
      <div class="list-group__item">
        <router-link to="/" class="nav-link">
          <IconCollection class="nav-link__icon" />
          <span class="nav-link__title">My Collection</span>
        </router-link>
      </div>
      <div class="list-group__item">
        <router-link to="/" class="nav-link">
          <IconWallet class="nav-link__icon" />
          <span class="nav-link__title">Wallet</span>
        </router-link>
      </div>
      <div class="list-group__item">
        <router-link to="/" class="nav-link">
          <IconHistory class="nav-link__icon" />
          <span class="nav-link__title">History</span>
        </router-link>
      </div>
      <div class="list-group__item">
        <router-link to="/" class="nav-link">
          <IconSettings class="nav-link__icon" />
          <span class="nav-link__title">Settings</span>
        </router-link>
      </div>
    </div>
    <div class="list-group">
      <div class="list-group__item">
        <router-link to="/" class="nav-link">
          <IconResources class="nav-link__icon" />
          <span class="nav-link__title">Resources</span>
        </router-link>
      </div>
    </div>
    <div class="list-banners">
      <div class="list-banners-item">
        <Banner>
          <template #bgImg><img src="@/assets/img/banners/earn_$100_NFT.jpg" alt=""/></template>
          <template #header> Earn up to $100 worth of NFT </template>
          <template #controlls>
            <ui-button
              bgColor="#FFFFFF"
              color="#000000"
              width="178px"
              fontSize="16px"
              iconPosition="right"
              iconPadding="29px"
            >
              Learn More
              <template #icon>
                <img
                  src="@/assets/logo/arrow_right_circle.svg"
                  alt="Learn More"
                />
              </template>
            </ui-button>
          </template>
        </Banner>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import UiButton from "@/components/ui/Button.vue";
import Banner from "@/components/Banner.vue";
import IconDashboard from "@/components/ui/icons/nav/IconDashboard.vue";
import IconMarketplace from "@/components/ui/icons/nav/IconMarketplace.vue";
import IconMessages from "@/components/ui/icons/nav/IconMessages.vue";
import IconCollection from "@/components/ui/icons/nav/IconCollection.vue";
import IconWallet from "@/components/ui/icons/nav/IconWallet.vue";
import IconHistory from "@/components/ui/icons/nav/IconHistory.vue";
import IconSettings from "@/components/ui/icons/nav/IconSettings.vue";
import IconResources from "@/components/ui/icons/nav/IconResources.vue";
</script>

<style lang="scss" scoped>
.nav {
  border: 1px solid #d9d9d9;
  max-width: 381px;
  width: 100%;

  &-link {
    text-decoration: none;
    display: flex;
    align-items: center;
    line-height: 34px;

    &__title {
      padding: 0 0 0 33px;
      font-size: 18px;
      color: #4d4a4a;
    }

    &.router-link-active {
      .nav-link__icon {
        fill: var(--color-active-link);
      }
      .nav-link__title {
        color: var(--color-active-link);
      }
    }
  }
}

.list-group,
.list-banners {
  margin: 134px 0 0 81px;

  &:nth-child(2n) {
    margin-top: 154px;
  }

  &__item {
    padding: 0 0 32px;
    &:first-of-type {
      padding: 0 0 24px;
    }
    display: flex;
    align-items: center;
  }
}

.list-banners {
  margin: 214px 52px 60px 62px;
}
</style>
