<template>
  <div class="card-bid">
    <h3 class="card-bid__h3">Mind Contemplation</h3>
    <div class="card-bid-items">
      <div class="card-bid-item">
        <div class="card-bid-item__title">Current Bid</div>
        <div class="card-bid-item__content">
          <img :src="bidLogoUrl" alt="" class="card-bid-item__logo" />
          30.6 ETH
        </div>
      </div>
      <div class="card-bid-item">
        <div class="card-bid-item__title">Creator</div>
        <div class="card-bid-item__content">@Doadesignz</div>
      </div>
      <div class="card-bid-item">
        <div class="card-bid-item__title">Time Remaining</div>
        <div class="card-bid-item__content">24h : 01m : 03s</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";

const props = defineProps({
  currency: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: "",
  },
});

const bidLogoUrl = computed(() => (new URL('../assets/logo/currencies/' + props.currency + '.svg', import.meta.url).toString()));
</script>


<style lang="scss" scoped>

.card-bid {
  max-width: 380px;
  width: 100%;
  background: linear-gradient(
    116.39deg,
    #1b1a1e 1.42%,
    rgba(202, 197, 211, 0) 98.81%
  );
  backdrop-filter: blur(20px);
  border-radius: 12px;
  padding: 30px 23px 30px 45px;

  @media screen and (max-width: 992px) {
    max-width: 310px;
    padding: 25px 5px 25px 32px;
  }

  &__h3 {
    font-weight: 600;
    font-size: 30px;
    line-height: 41px;
    @media screen and (max-width: 1089px) {
      font-size: 24px;
      line-height: 30px;
    }
    @media screen and (max-width: 992px) {
      font-size: 20px;
    }
  }

  &-items {
    display: grid;
    grid-template-columns: repeat(2, 160px);
    column-gap: 25px;
    @media screen and (max-width: 1089px) {
      column-gap: 20px;
    }
    @media screen and (max-width: 992px) {
      grid-template-columns: repeat(2, 120px);
      column-gap: 15px;
    }
  }

  &-item {
    margin-top: 30px;
    &__title {
      @media screen and (max-width: 992px) {
        font-size: 15px;
      }
    }
    &__content {
      display: flex;
      align-items: center;
      margin-top: 5px;
      color: var(--color-blue);
      font-weight: 600;
      font-size: 18px;
      line-height: 24px;
      @media screen and (max-width: 1089px) {
        font-size: 16px;
        line-height: 20px;
      }
      @media screen and (max-width: 992px) {
        font-size: 15px;
        column-gap: 13px;
      }
    }
    &__logo {
      margin-right: 5px;
    }
  }
}
</style>
