<template>
  <div class="preview-NFTS">
    <HeaderNFTS
      class="preview-NFTS__header"
      title="All NFTS"
      amountText="2,345,678 items"
    />
    <div class="preview-NFTS__filter filter">
      <div class="filter__category category">
        <div class="category__items">
          <div class="category__item">
            <div class="category__icon-inner">
              <img
                class="category__icon"
                src="@/assets/logo/category/popular.png"
              />
            </div>
            <div class="category__name">Popular</div>
          </div>
          <div class="category__item">
            <div class="category__icon-inner">
              <img
                class="category__icon"
                src="@/assets/logo/category/arts.png"
              />
            </div>
            <div class="category__name">Arts</div>
          </div>
          <div class="category__item">
            <div class="category__icon-inner">
              <img
                class="category__icon"
                src="@/assets/logo/category/games.png"
              />
            </div>
            <div class="category__name">Games</div>
          </div>
          <div class="category__item">
            <div class="category__icon-inner">
              <img
                class="category__icon"
                src="@/assets/logo/category/music.png"
              />
            </div>
            <div class="category__name">Music</div>
          </div>
          <div class="category__item">
            <div class="category__icon-inner">
              <img
                class="category__icon"
                src="@/assets/logo/category/sports.png"
              />
            </div>
            <div class="category__name">Sports</div>
          </div>
          <div class="category__item">
            <div class="category__icon-inner">
              <img
                class="category__icon"
                src="@/assets/logo/category/photography.png"
              />
            </div>
            <div class="category__name">Photography</div>
          </div>
        </div>
      </div>
    </div>
    <div class="preview-NFTS__items">
      <BidItem
        v-for="item of bidItems"
        :key="item.id"
        :header="item.title"
        :img="item.img"
        :user="item.user"
        :currentBid="item.currentBid"
        :endingIn="item.endingIn"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import HeaderNFTS from "@/components/HeaderNFTS.vue";
import BidItem from "@/components/BidItem.vue";

const props = defineProps({
  image: {
    type: String,
    default: "",
  },
});

const bidItems: Array<any> = [
  {
    "id": 1,
    "title": "The Future wave #23",
    "img": "the-future-wave-23.png",
    "user": {
      "login": "@spaceman",
      "avatar": "@spaceman.png"
    },
    "currentBid": "0.24 BTC",
    "endingIn": "12h 14m 16s"
  },
  {
    "id": 2,
    "title": "Astro World #244",
    "img": "astro-world-244.png",
    "user": {
      "login": "@astrowave",
      "avatar": "@astrowave.png"
    },
    "currentBid": "0.24 BTC",
    "endingIn": "12h 14m 16s"
  },
  {
    "id": 3,
    "title": "Cyber Art #234",
    "img": "cyber-art-234.png",
    "user": {
      "login": "@cybermask",
      "avatar": "@cybermask.png"
    },
    "currentBid": "0.24 BTC",
    "endingIn": "7h 09m 20s"
  },
]
</script>


<style lang="scss" scoped>
.preview-NFTS {
  width: 100%;

  &__filter {
    margin-top: 16px;
  }

  &__items {
    margin-top: 31px;
    display: grid;
    grid-template-columns: repeat(3, auto);
    justify-content: space-between;
  }
}

.header-NFTS {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__left {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__header {
    font-family: var(--font-space-grotesk);
    font-weight: 700;
    font-size: 24px;
    line-height: 114%;
    color: var(--text-blak-header);
    padding-right: 22px;
  }

  &__amount {
    font-family: var(--font-popins);
    font-weight: 500;
    font-size: 13px;
    line-height: 169%;
    color: var(--text-gray);
  }

  &__link {
    font-family: var(--font-popins);
    font-size: 16px;
    line-height: 169%;
    color: var(--color-link);
  }
}

.category {
  &__item {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 6px 25px 6px 7px;
    background: #f6faff;
    border-radius: 12px;
    margin-right: 31px;
    &:last-of-type {
      margin-right: 0;
    }
  }

  &__items {
    display: grid;
    grid-template-columns: repeat(6, auto);
    justify-content: space-between;
    align-items: center;
  }

  &__icon {
    &-inner {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 36px;
      width: 36px;
      background: var(--bg-light);
      border-radius: 50%;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      margin-right: 12px;
    }
  }

  &__name {
    font-family: var(--font-popins);
    font-weight: 500;
    font-size: 14px;
    line-height: 169%;
    color: var(--text-gray);
  }
}
</style>
