<template>
  <main class="main-content">
    <div class="block-left">
      <div class="info">
        <h1 class="info__h1">
          Discover, Collect & Sell
          <span class="info__h1-blue">Digital Arts</span>
        </h1>
        <div class="info__description">
          Digital marketplace for crypto collectibles andnon-fungible tokens
          NFTS
        </div>
        <div class="info__link">
          <ui-button>Explore</ui-button>
        </div>
        <div class="stats info__stats">
          <div v-for="stat of stats" :key="stat.id" class="stats-col">
            <div class="stats__amount stats__amount-violet">
              {{ shortAmount(stat.amount) }}
            </div>
            <div class="stats__title">{{ stat.title }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="block-right">
      <div class="bid">
        <img class="bid__img" src="@/assets/img/figure1.svg" alt="" />
        <CardBid currency="ETH" class="bid__card" />
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import CardBid from "@/components/CardBid.vue";
import UiButton from "@/components/ui/Button.vue";
import { reactive, ref } from "vue";
import { shortAmount } from "@/lib/format-html";

const stats = reactive([
  {
    id: 1,
    amount: 40034,
    title: "Artwork",
  },
  {
    id: 2,
    amount: 35411,
    title: "Artist",
  },
  {
    id: 3,
    amount: 15078,
    title: "Auction",
  },
]);
</script>

<style lang="scss" scoped>
.main-content {
  margin-top: 50px;
  display: flex;
  @media screen and (max-width: 768px) {
    margin-top: 30px;
    flex-direction: column;
  }

  .block-left {
    width: 34%;
    @media screen and (max-width: 768px) {
      width: auto;
      margin-bottom: 30px;
    }

    .info {
      &__h1 {
        font-family: var(--font-popins);
        font-weight: 600;
        font-size: 64px;
        line-height: 73px;
        @media screen and (max-width: 1581px) {
          font-size: 54px;
          line-height: 63px;
        }
        @media screen and (max-width: 1311px) {
          font-size: 44px;
          line-height: 53px;
        }
        @media screen and (max-width: 1089px) {
          font-size: 42px;
          line-height: 42px;
        }
        @media screen and (max-width: 992px) {
          font-size: 36px;
        }
      }
      &__h1-blue {
        color: var(--color-blue);
      }

      &__description {
        margin-top: 20px;
        max-width: 360px;
        font-weight: 500;
        font-size: 18px;
        line-height: 30px;
        @media screen and (max-width: 768px) {
          max-width: 90%;
        }
      }

      &__link {
        margin-top: 62px;
        @media screen and (max-width: 768px) {
          margin-top: 32px;
        }
      }
      &__stats {
        width: 100%;
        margin-top: 81px;
        @media screen and (max-width: 768px) {
          margin-top: 41px;
        }
      }
    }
  }

  .block-right {
    width: 66%;
    @media screen and (max-width: 768px) {
      width: auto;
    }
    .bid {
      position: relative;
      width: 100%;
      display: flex;
      justify-content: center;
      &__img {
        @media screen and (max-width: 1311px) {
          width: 90%;
          height: auto;
        }
        @media screen and (max-width: 1089px) {
          width: 80%;
          height: auto;
        }
        @media screen and (max-width: 992px) {
          width: 75%;
          height: auto;
        }
      }
      .bid__card {
        position: absolute;
        top: 63%;
        left: 33%;
        @media screen and (max-width: 576px) {
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
  }
}

.stats {
  display: flex;
  justify-content: space-between;

  &__amount {
    font-weight: 700;
    font-size: 40px;
    line-height: 54px;

    @media screen and (max-width: 1581px) {
      font-size: 38px;
      line-height: 50px;
    }
    @media screen and (max-width: 1311px) {
      font-size: 36px;
      line-height: 48px;
    }
    @media screen and (max-width: 1089px) {
      font-size: 32px;
      line-height: 44px;
    }
    &-violet {
      color: #b33fff;
    }
  }
  &__title {
    font-size: 18px;
    line-height: 169%;
    @media screen and (max-width: 1311px) {
      font-size: 16px;
      line-height: 169%;
    }
    @media screen and (max-width: 1089px) {
      font-size: 14px;
      line-height: 169%;
    }
  }
}
</style>
